#!/usr/bin/env bash
set -euo pipefail

# Uso:
#   ./expor_ngrok_fedora.sh --port 3000
#   ./expor_ngrok_fedora.sh --port 3000 --basic-auth usuario:senha
#   ./expor_ngrok_fedora.sh --install-only

PORT="3000"
BASIC_AUTH=""
INSTALL_ONLY="false"

log() {
  printf "[ngrok-setup] %s\n" "$*"
}

err() {
  printf "[erro] %s\n" "$*" >&2
  exit 1
}

usage() {
  cat <<USAGE
Uso: $0 [opções]

Opções:
  --port <porta>               Porta local para expor (default: 3000)
  --basic-auth <user:senha>    Proteção HTTP básica no túnel
  --install-only               Apenas instala/configura ngrok
  -h, --help                   Mostra esta ajuda
USAGE
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --port)
      [[ $# -ge 2 ]] || err "Faltou valor para --port"
      PORT="$2"
      shift 2
      ;;
    --basic-auth)
      [[ $# -ge 2 ]] || err "Faltou valor para --basic-auth"
      BASIC_AUTH="$2"
      shift 2
      ;;
    --install-only)
      INSTALL_ONLY="true"
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      err "Opção inválida: $1"
      ;;
  esac
done

if ! [[ "$PORT" =~ ^[0-9]+$ ]]; then
  err "Porta inválida: $PORT"
fi

need_sudo() {
  if [[ "${EUID}" -ne 0 ]]; then
    sudo "$@"
  else
    "$@"
  fi
}

find_ngrok_bin() {
  if command -v ngrok >/dev/null 2>&1; then
    command -v ngrok
    return 0
  fi

  if [[ -x "/snap/bin/ngrok" ]]; then
    printf "/snap/bin/ngrok\n"
    return 0
  fi

  return 1
}

install_ngrok_fedora() {
  local ngrok_bin
  if ngrok_bin="$(find_ngrok_bin)"; then
    log "ngrok já está instalado: $($ngrok_bin version | head -n1)"
    return
  fi

  log "Instalando ngrok via snapd (método recomendado no Fedora)..."
  need_sudo dnf -y install snapd
  need_sudo systemctl enable --now snapd.socket

  if [[ ! -e /snap ]]; then
    need_sudo ln -s /var/lib/snapd/snap /snap
  fi

  need_sudo snap install ngrok

  if [[ ! -x /usr/local/bin/ngrok && -x /snap/bin/ngrok ]]; then
    need_sudo ln -s /snap/bin/ngrok /usr/local/bin/ngrok
  fi

  ngrok_bin="$(find_ngrok_bin)" || err "ngrok não encontrado após instalação"
  log "ngrok instalado com sucesso: $($ngrok_bin version | head -n1)"
}

configure_authtoken_if_needed() {
  local ngrok_bin
  ngrok_bin="$(find_ngrok_bin)" || err "ngrok não encontrado"

  if "$ngrok_bin" config check >/dev/null 2>&1; then
    log "Configuração do ngrok já existe"
    return
  fi

  log "Autenticação necessária. Pegue seu token em: https://dashboard.ngrok.com/get-started/your-authtoken"
  read -r -p "Cole o NGROK_AUTHTOKEN: " NGROK_AUTHTOKEN
  [[ -n "${NGROK_AUTHTOKEN:-}" ]] || err "Token vazio"

  "$ngrok_bin" config add-authtoken "$NGROK_AUTHTOKEN"
  log "Token configurado"
}

start_tunnel() {
  local ngrok_bin
  ngrok_bin="$(find_ngrok_bin)" || err "ngrok não encontrado"

  log "Iniciando túnel: http://localhost:${PORT}"
  if [[ -n "$BASIC_AUTH" ]]; then
    log "Proteção básica habilitada"
    exec "$ngrok_bin" http "$PORT" --basic-auth="$BASIC_AUTH"
  else
    exec "$ngrok_bin" http "$PORT"
  fi
}

main() {
  install_ngrok_fedora
  configure_authtoken_if_needed

  if [[ "$INSTALL_ONLY" == "true" ]]; then
    log "Modo install-only concluído"
    exit 0
  fi

  log "Garanta que sua aplicação já está rodando em localhost:${PORT}"
  start_tunnel
}

main "$@"

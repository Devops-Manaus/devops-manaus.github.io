# DevOps Manaus — Comunidade

[![Deploy Lume to Pages](https://github.com/Devops-Manaus/devopsmanaus.github.io/actions/workflows/pages.yml/badge.svg)](https://github.com/Devops-Manaus/devopsmanaus.github.io/actions/workflows/pages.yml)

Website estático da comunidade **DevOps Manaus**, construído com [Lume](https://lume.land/) (gerador de sites para Deno) e **Lume CMS** para gerenciamento de conteúdo.

🌐 **Visite**: [devopsmanaus.github.io](https://devopsmanaus.github.io)

---

## 🎯 Sobre o Projeto

DevOps Manaus é uma comunidade aberta conectando engenheiros, SREs e entusiastas de infraestrutura no coração da Amazônia. Este site serve como ponto de entrada para:

- 📅 Encontros mensais e meetups
- 👥 Comunidade de 1.4k+ membros
- 🎓 Trilhas de estudo abertas
- 🤝 Programa de mentoria
- 💼 Bolsa de vagas regional
- 📚 Arquivo de palestras

---

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| **Deno** | v2.x | Runtime JavaScript/TypeScript |
| **Lume** | v2.1.3 | Gerador de site estático |
| **Lume CMS** | v0.12.0 | Painel de edição de conteúdo |
| **Nunjucks** | - | Templates HTML |
| **SCSS** | - | Estilos |

---

## 🚀 Como Trabalhar

### Pré-requisitos

- **Deno** v2.x instalado ([instalar](https://docs.deno.com/runtime/manual/getting_started/installation/))

### Desenvolvimento local

```bash
# Clonar repositório
git clone https://github.com/Devops-Manaus/devopsmanaus.github.io.git
cd devopsmanaus.github.io

# Servidor de desenvolvimento
deno task dev
# Acessa http://localhost:3000

# Painel CMS (editar conteúdo)
deno task cms
# Acessa http://localhost:8000
```

### Build para produção

```bash
deno task build
# Gera _site/ pronto para deployment
```

---

## ✏️ Editar Conteúdo

### Opção 1: Painel CMS (recomendado)

1. Rode `deno task cms`
2. Acesse http://localhost:8000
3. Edite seções (Hero, Sobre, Serviços, FAQ, Parceiros, etc.)
4. As mudanças são salvas automaticamente nos JSONs

### Opção 2: Editar JSONs diretamente

Modifique os arquivos em `_data/`:
- `_data/hero.json` — seção hero
- `_data/about.json` — sobre nós
- `_data/services.json` — serviços
- `_data/community.json` — comunidade
- `_data/faq.json` — perguntas frequentes
- etc.

---

## 🌐 Deployment

O projeto faz deploy automático ao fazer push para `main`:

```bash
git add .
git commit -m "Update content or styling"
git push origin main
```

GitHub Actions faz o resto!

---

## 📄 Licença

CC BY-SA 4.0 — Comunidade aberta!

---

## 👥 Contribuindo

Contribuições são bem-vindas! Para mais informações, veja [CONTRIBUTING.md](CONTRIBUTING.md).

---

**Feito com ❤️ pela comunidade DevOps Manaus**

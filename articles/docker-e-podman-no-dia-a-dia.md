---
title: Docker e Podman no Dia a Dia
date: '2026-04-19T00:00:00.000Z'
image: /uploads/podman-vs-docker.jpg
excerpt: Como usar Docker e Podman de forma prática no fluxo local de desenvolvimento.
---
Docker e Podman resolvem o mesmo problema: padronizar ambiente com containers.  
No uso diário, a regra é simples: **build previsível, run isolado e cleanup frequente**.

## Quando usar cada um

- **Docker**: ecossistema maior, integração ampla, onboarding rápido.
- **Podman**: rootless por padrão, compatível com CLI Docker em muitos comandos.

## Fluxo mínimo

1. Crie imagem com tag clara (`app:dev`).
2. Rode container com volumes para código local.
3. Execute testes dentro do container.
4. Pare e limpe containers/imagens antigas.

## Comandos base

```bash
# Docker
docker build -t app:dev .
docker run --rm -it -p 3000:3000 app:dev

# Podman
podman build -t app:dev .
podman run --rm -it -p 3000:3000 app:dev


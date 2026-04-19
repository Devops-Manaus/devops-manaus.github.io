# DevOps Manaus — Comunidade

[![Deploy Lume to Pages](https://github.com/Devops-Manaus/devopsmanaus.github.io/actions/workflows/pages.yml/badge.svg)](https://github.com/Devops-Manaus/devopsmanaus.github.io/actions/workflows/pages.yml)

Website estático da comunidade **DevOps Manaus**, construído com [Lume](https://lume.land/) (Deno) e **Lume CMS** para edição de conteúdo.

🌐 **Site**: [https://devopsmanaus.com.br](https://devopsmanaus.com.br)

---

## Stack

- **Deno** `v2.x`
- **Lume** `v2.4.0`
- **Lume CMS** `v0.12.0`
- **Nunjucks**
- **SCSS**

---

## Pré-requisitos

- Deno instalado: https://docs.deno.com/runtime/manual/getting_started/installation/

---

## Rodar Site + CMS (fluxo recomendado)

No projeto, suba em **2 terminais**:

### Terminal 1: site

```bash
deno task dev
```

Acesse: `http://localhost:3000`

### Terminal 2: CMS (admin)

```bash
deno task cms
```

Acesse: `http://localhost:3001`

Credenciais do CMS vêm de `.env`:

```env
CMS_USER=admin
CMS_PASSWORD=sua_senha
```

Se não definir, o fallback local é:
- usuário: `admin`
- senha: `senha-local-dev`

---

## Criar e editar artigos

## Opção A: pelo CMS

1. Rode `deno task cms`
2. Abra `http://localhost:3001`
3. Vá em **Artigos**
4. Crie/edite e salve

## Opção B: manual (Markdown)

Crie um arquivo em `articles/<slug>.md` com front matter:

```md
---
title: Título do artigo
date: 2026-04-19
excerpt: Resumo curto do artigo
image: /uploads/sua-imagem.jpg
---

Conteúdo em Markdown...
```

Os artigos usam `layout: layouts/article.njk` via `articles/_data.yml`.

---

## Estrutura de conteúdo

- `_data/*.json`: dados globais (hero, navlinks, community, lead, footer)
- `about/*.md`: seções sobre
- `services/*.md`: serviços
- `benefits/*.md`: benefícios
- `faq/*.md`: FAQ
- `partners/*.md`: parceiros
- `articles/*.md`: artigos
- `public/uploads/`: imagens para conteúdo

---

## Validar antes de publicar

```bash
deno task build
```

Saída gerada em `_site/`.

---

## Publicar (push)

```bash
git add .
git commit -m "content: atualiza artigos e seções"
git push origin main
```

O deploy no GitHub Pages é automático pelo workflow `Deploy Lume to Pages`.

---

## Licença

CC BY-SA 4.0

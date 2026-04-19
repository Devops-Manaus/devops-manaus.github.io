# DevOps Manaus Community Website — Documentação Interna

## Visão Geral

Site oficial da comunidade **DevOps Manaus**, construído com **Lume** (SSG para Deno), **Nunjucks** e **Lume CMS**.

Objetivo desta documentação: orientar manutenção e evolução do projeto sem depender de contexto histórico.

## Stack Atual

- **Deno** `v2.x`
- **Lume** `v2.4.0`
- **Lume CMS** `v0.12.0`
- **Nunjucks** para templates
- **Sass/SCSS** para estilos globais
- **GitHub Pages** para hospedagem

## Estrutura do Projeto

```text
devops-manaus.github.io/
├── _config.ts                    # Configuração do Lume e plugins
├── _cms.ts                       # Configuração de coleções/documentos do CMS
├── deno.json                     # Tasks (dev/build/cms) e imports
├── index.njk                     # Página inicial (compõe os componentes)
├── articles.njk                  # Listagem de artigos
├── styles/main.scss              # Estilos globais compilados para /styles/main.css
├── _includes/
│   ├── layouts/
│   │   ├── base.njk              # Layout principal do site
│   │   └── article.njk           # Layout de artigo individual
│   └── components/               # Seções reutilizáveis da home
├── _data/
│   ├── hero.json
│   ├── navlinks.json
│   ├── community.json
│   ├── lead.json
│   └── footer.json
├── about/                        # Conteúdo markdown (type=about)
├── services/                     # Conteúdo markdown (type=service)
├── benefits/                     # Conteúdo markdown (type=benefit)
├── faq/                          # Conteúdo markdown (type=faq)
├── partners/                     # Conteúdo markdown (type=partner)
├── articles/                     # Conteúdo markdown (type=article)
├── public/                       # Assets estáticos copiados para _site/
├── .github/workflows/pages.yml   # Build + deploy no GitHub Pages
└── _site/                        # Saída gerada (não editar manualmente)
```

## Como o Site é Montado

### Build

1. Lume lê `_config.ts`.
2. Aplica plugins `nunjucks()` e `sass()`.
3. Compila páginas `.njk` + markdown.
4. Copia `public/` e `favicon.svg` para a saída.
5. Gera site final em `_site/`.

### Composição da Home

`index.njk` inclui componentes nesta ordem:

1. `hero.njk`
2. `about.njk`
3. `services.njk`
4. `partners.njk`
5. `community.njk`
6. `benefits.njk`
7. `faq.njk`
8. `lead.njk`

`header.njk` e `footer.njk` entram via layout `base.njk`.

## Fonte de Dados

### Documentos JSON (`_data/`)

- `hero.json`: título, subtítulo, lema e CTA principal
- `navlinks.json`: links de navegação
- `community.json`: estatísticas e descrição
- `lead.json`: chamada final e CTAs
- `footer.json`: redes sociais e copyright

### Coleções Markdown

Cada pasta usa `_data.yml` para tipagem (`type`) e controle de listagem.

- `about/*.md` → `type: about`
- `services/*.md` → `type: service`
- `benefits/*.md` → `type: benefit`
- `faq/*.md` → `type: faq`
- `partners/*.md` → `type: partner`
- `articles/*.md` → `type: article` (com `layout: layouts/article.njk`)

Os componentes consultam conteúdo usando `search.pages("type=...", "order=asc")`.

## Lume CMS

Configuração em `_cms.ts`.

### Autenticação local

Credenciais lidas de `.env`:

- `CMS_USER`
- `CMS_PASSWORD`

Fallback atual (se não existir `.env`):

- usuário: `admin`
- senha: `senha-local-dev`

### Uploads

- Coleção de mídia: `public/uploads`
- URL pública: `/uploads/...`

### Entidades no CMS

- Documentos: `hero`, `navlinks`, `community`, `footer`, `lead`
- Coleções: `about`, `services`, `benefits`, `faq`, `partners`, `articles`

## Comandos de Trabalho

```bash
# Desenvolvimento local (site)
deno task dev
# http://localhost:3000

# CMS local
deno task cms
# http://localhost:3001

# Build de produção
deno task build
```

## Deploy

Workflow: `.github/workflows/pages.yml`

- Trigger: push na branch `main`
- Build com `deno task build`
- Cria `_site/.nojekyll`
- Publica em GitHub Pages

## Padrões de Manutenção

- Edite conteúdo preferencialmente via CMS.
- Para edição manual, mantenha front matter consistente com cada coleção.
- Use `order` para controlar ordenação de blocos nas seções.
- Evite lógica complexa nos templates; prefira dados em `_data/` e coleções markdown.
- Não editar `_site/` manualmente (artefato gerado).

## Operações Comuns

### Criar novo artigo

1. Criar arquivo `articles/<slug>.md`
2. Preencher front matter: `title`, `date`, `image` (opcional), `excerpt`
3. Escrever conteúdo markdown
4. Validar em `/articles/` e na página do artigo

### Adicionar item de serviço/benefício/FAQ/parceiro

1. Criar novo `.md` na pasta correspondente
2. Definir `order` e campos exigidos
3. Validar renderização na home

### Ajustar visual global

- CSS global em `styles/main.scss`
- Variáveis de cor principais no `<style>` de `_includes/layouts/base.njk`

## Checklist Antes de Subir

1. `deno task build` sem erro
2. Verificar navegação e links principais
3. Conferir imagens em `/uploads`
4. Revisar texto e ortografia
5. Commit com mensagem clara

## Referências

- Repositório: `https://github.com/Devops-Manaus/devopsmanaus.github.io`
- Site público: `https://devopsmanaus.github.io`

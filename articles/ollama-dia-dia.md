---
title: IA Local no Dia a Dia com Ollama e CLI
date: '2026-04-19T00:00:00.000Z'
image: /uploads/llm-cli.png
excerpt: >-
  Um fluxo curto e prático para usar IA local com Ollama, agentes e plan mode no
  terminal.
---
Se você já vive no terminal, dá para usar IA local sem complicar: **inferência com Ollama**, execução com **ferramentas CLI** e tarefas maiores com **agents + plan mode**.

## Stack mínima

- **Ollama** para rodar modelos locais
- **CLI de agente** (ex.: Codex CLI, Aider, etc.)
- Projeto com Git para revisar diffs antes de aplicar

## Fluxo rápido

1. Rode um modelo local no Ollama.
2. Use o CLI para pedir tarefas pequenas (refactor, teste, doc).
3. Para mudanças maiores, ative **plan mode**:
   - quebrar em etapas,
   - validar cada etapa,
   - só depois aplicar edição.

## Exemplos úteis no dia a dia

- “Resuma este log e proponha 3 hipóteses.”
- “Gere teste para este módulo.”
- “Crie plano de migração em 5 passos antes de alterar código.”
- “Refatore mantendo comportamento e mostre diff.”

## Boas práticas

- Sempre peça **plano antes da execução** em tarefas grandes.
- Trabalhe em commits pequenos.
- Revise diff e rode testes locais.
- Não enviar segredos para prompts.

## Resultado

Com esse setup, você ganha velocidade sem perder controle: IA local para privacidade, CLI para produtividade e plan mode para previsibilidade.

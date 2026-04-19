FROM denoland/deno:2.5.0

WORKDIR /app

# Variaveis do CMS (sobrescreva em runtime)
ENV CMS_USER=change-me
ENV CMS_PASSWORD=change-me
ENV PORT=3001

# Copia o projeto
COPY . .

# Pre-cache de dependencias remotas para reduzir latencia no startup
RUN deno cache --config=deno.json \
  https://deno.land/x/lume@v2.4.0/cli.ts \
  _config.ts \
  _cms.ts

EXPOSE 3001

# Inicia o Lume CMS na porta definida
CMD ["sh", "-c", "deno run -A --no-check --config=deno.json https://deno.land/x/lume@v2.4.0/cli.ts cms -p ${PORT}"]

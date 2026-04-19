import lume from "https://deno.land/x/lume@v2.4.0/mod.ts";
import nunjucks from "https://deno.land/x/lume@v2.4.0/plugins/nunjucks.ts";
import sass from "https://deno.land/x/lume@v2.4.0/plugins/sass.ts";

const site = lume({
  src: ".",
  dest: "_site",
  location: new URL("https://devopsmanaus.github.io/"),
});

// Plugins
site.use(nunjucks());
site.use(sass());

// Copiar assets estáticos
site.copy("public", ".");
site.copy("favicon.svg");

// Configurar cores para Nunjucks
site.data("colors", {
  bg: "#f5f2ec",
  bgCard: "#ffffff",
  ink: "#15130f",
  ink2: "#4a463e",
  ink3: "#807a6d",
  line: "#e6e0d4",
  line2: "#d4cdbd",
  accent: "oklch(52% 0.09 175)",
  accent2: "oklch(62% 0.14 55)",
  codeBg: "#1a1814",
});

export default site;

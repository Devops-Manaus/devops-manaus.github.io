import lumeCMS from "https://cdn.jsdelivr.net/gh/lumeland/cms@v0.12.0/mod.ts";

const user = Deno.env.get("CMS_USER") ?? "admin";
const password = Deno.env.get("CMS_PASSWORD") ?? "senha-local-dev";

const cms = lumeCMS({
  auth: {
    method: "basic",
    users: {
      [user]: password,
    },
  },
});

cms.upload("uploads: Mídia", "src:public/uploads", "/uploads/");

cms.collection("articles: Artigos", "src:articles/*.md", [
  { name: "title", type: "text", label: "Título" },
  { name: "date", type: "date", label: "Data" },
  { name: "image", type: "file", label: "Imagem de capa", attributes: { uploads: "uploads" } },
  { name: "excerpt", type: "textarea", label: "Resumo" },
  { name: "content", type: "markdown", label: "Conteúdo" },
]);

cms.document("hero: Hero", "src:_data/hero.json", [
  { name: "title", type: "text", label: "Título" },
  { name: "subtitle", type: "text", label: "Subtítulo" },
  { name: "lema", type: "text", label: "Lema" },
  {
    name: "cta",
    type: "object",
    label: "Call to Action",
    fields: [
      { name: "label", type: "text", label: "Texto do botão" },
      { name: "href", type: "text", label: "Link" },
      { name: "variant", type: "text", label: "Tipo" },
    ],
  },
]);

cms.document("navlinks: Links de Navegação", "src:_data/navlinks.json", [
  {
    name: "items",
    type: "object-list",
    label: "Links",
    fields: [
      { name: "label", type: "text", label: "Rótulo" },
      { name: "href", type: "text", label: "Link" },
    ],
  },
]);

cms.collection("about: Sobre Nós", "src:about/*.md", [
  { name: "order", type: "number", label: "Ordem" },
  { name: "heading", type: "text", label: "Título" },
  { name: "text", type: "textarea", label: "Texto" },
]);

cms.collection("services: Serviços", "src:services/*.md", [
  { name: "order", type: "number", label: "Ordem" },
  { name: "icon", type: "text", label: "Ícone (emoji)" },
  { name: "title", type: "text", label: "Título" },
  { name: "description", type: "textarea", label: "Descrição" },
]);

cms.document("community: Comunidade", "src:_data/community.json", [
  {
    name: "stats",
    type: "object",
    label: "Estatísticas",
    fields: [
      { name: "members", type: "number", label: "Membros" },
      { name: "events", type: "number", label: "Eventos" },
      { name: "projects", type: "number", label: "Projetos" },
    ],
  },
  { name: "description", type: "textarea", label: "Descrição" },
]);

cms.collection("benefits: Benefícios", "src:benefits/*.md", [
  { name: "order", type: "number", label: "Ordem" },
  { name: "icon", type: "text", label: "Ícone (emoji)" },
  { name: "title", type: "text", label: "Título" },
  { name: "description", type: "textarea", label: "Descrição" },
]);

cms.collection("faq: Perguntas Frequentes", "src:faq/*.md", [
  { name: "order", type: "number", label: "Ordem" },
  { name: "question", type: "text", label: "Pergunta" },
  { name: "answer", type: "textarea", label: "Resposta" },
]);

cms.document("footer: Rodapé", "src:_data/footer.json", [
  {
    name: "social",
    type: "object-list",
    label: "Redes Sociais",
    fields: [
      { name: "name", type: "text", label: "Nome" },
      { name: "url", type: "text", label: "URL" },
    ],
  },
  { name: "copyright", type: "text", label: "Copyright" },
]);

cms.document("lead: Chamada Final", "src:_data/lead.json", [
  { name: "title", type: "text", label: "Título" },
  { name: "description", type: "textarea", label: "Descrição" },
  {
    name: "ctas",
    type: "object-list",
    label: "Botões",
    fields: [
      { name: "label", type: "text", label: "Texto" },
      { name: "href", type: "text", label: "Link" },
      { name: "variant", type: "text", label: "Tipo (primary/secondary)" },
    ],
  },
]);

cms.collection("partners: Parceiros", "src:partners/*.md", [
  { name: "name", type: "text", label: "Nome" },
  { name: "img", type: "file", label: "Imagem de capa", attributes: { uploads: "uploads" } },
  { name: "website", type: "url", label: "Site" },
  { name: "description", type: "textarea", label: "Descrição curta" },
]);

export default cms;

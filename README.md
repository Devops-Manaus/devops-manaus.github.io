# 🌟 DevOps Manaus Community Website

[![Deploy to GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-success?style=flat-square)](https://devopsmanaus.github.io/)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-ff5d01?style=flat-square&logo=astro)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> 🚀 **Landing page oficial da comunidade DevOps Manaus** - Conectando profissionais de tecnologia no coração da Amazônia

A DevOps Manaus é uma comunidade vibrante de profissionais de tecnologia que se reúnem para compartilhar conhecimento, experiências e networking na região amazônica. Este repositório contém o código-fonte da nossa landing page oficial.

## 🌐 Website

**🔗 [devopsmanaus.github.io](https://devopsmanaus.github.io/)**

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Instalação e Desenvolvimento](#-instalação-e-desenvolvimento)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Contribuindo](#-contribuindo)
- [Guia de Contribuição](#-guia-de-contribuição)
- [Roadmap](#-roadmap)
- [Licença](#-licença)
- [Comunidade](#-comunidade)

## 🎯 Sobre o Projeto

Este projeto é a landing page oficial da comunidade DevOps Manaus, desenvolvida com tecnologias modernas para proporcionar uma experiência rápida, acessível e envolvente. A página serve como:

- **Hub Central**: Ponto de encontro digital da comunidade
- **Portal de Eventos**: Divulgação de meetups, workshops e conferências
- **Rede de Contatos**: Facilitando conexões entre profissionais
- **Recursos Educacionais**: Compartilhamento de conhecimento e materiais

### 🎨 Design e UX

- **Design Responsivo**: Otimizado para dispositivos móveis e desktop
- **Performance**: Carregamento ultra-rápido com Astro
- **Acessibilidade**: Seguindo as diretrizes WCAG 2.1
- **SEO Otimizado**: Meta tags e estrutura semântica

## 🛠 Tecnologias Utilizadas

### Core Framework
- **[Astro](https://astro.build/)** `^4.0.0` - Framework web moderno com islands architecture
- **[React](https://react.dev/)** `^18.0.0` - Biblioteca para componentes interativos

### Styling & UI
- **CSS3** - Estilização customizada e responsiva
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones SVG moderna

### Desenvolvimento
- **[Node.js](https://nodejs.org/)** `>=18.0.0` - Runtime JavaScript
- **[npm](https://www.npmjs.com/)** - Gerenciador de pacotes

### Deploy & Hospedagem
- **[GitHub Pages](https://pages.github.com/)** - Hospedagem gratuita e automática
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD automatizado

## ✨ Funcionalidades

### 🔄 Já Implementadas
- [x] **Landing Page Responsiva** - Design adaptativo para todos os dispositivos
- [x] **Seção de Eventos** - Exibição dinâmica de próximos eventos
- [x] **Widget de Comunidade** - Modal para acesso aos canais (Discord/WhatsApp)
- [x] **Informações de Contato** - Links para redes sociais e canais oficiais
- [x] **Performance Otimizada** - Carregamento rápido com lazy loading

### 🚀 Futuro Desenvolvimento
- [ ] **Blog da Comunidade** - Artigos e posts dos membros
- [ ] **Sistema de Eventos** - CRUD completo para eventos
- [ ] **Profiles de Membros** - Showcase dos profissionais da comunidade
- [ ] **Newsletter** - Sistema de inscrição para novidades

## 🚀 Instalação e Desenvolvimento

### Pré-requisitos

```bash
Node.js >= 18.0.0
npm >= 8.0.0
Git
```

### Clonando o Repositório

```bash
# Clone o repositório
git clone https://github.com/DevopsManaus/devopsmanaus.github.io.git

# Entre no diretório
cd devopsmanaus.github.io

# Instale as dependências
npm install
```

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento em `localhost:4321` |
| `npm run build` | Gera build de produção na pasta `./dist/` |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run astro` | Executa comandos da CLI do Astro |

### Desenvolvimento Local

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Acesse http://localhost:4321 no seu navegador
```

### Build para Produção

```bash
# Gere o build otimizado
npm run build

# Teste o build localmente
npm run preview
```

## 📁 Estrutura do Projeto

```
/
├── 📁 public/              # Assets estáticos
│   ├── 📁 data/           # Dados JSON para componentes
│   │   ├── events.json    # Dados dos eventos
│   │   └── footer.json    # Dados do rodapé
│   ├── 📁 images/         # Imagens e logos
│   └── favicon.ico        # Favicon do site
├── 📁 src/                # Código fonte
│   ├── 📁 components/     # Componentes React
│   │   ├── EventsSection.jsx
│   │   ├── FooterSection.jsx
│   │   ├── HeroSection.jsx
│   │   └── JoinWidget.jsx
│   ├── 📁 layouts/        # Layouts do Astro
│   │   └── Layout.astro
│   ├── 📁 pages/          # Páginas do site
│   │   └── index.astro    # Página principal
│   └── 📁 styles/         # Estilos CSS
│       └── global.css
├── astro.config.mjs       # Configuração do Astro
├── package.json           # Dependências e scripts
└── README.md             # Este arquivo
```

## 🤝 Contribuindo

**Adoramos contribuições!** A DevOps Manaus é uma comunidade open-source e toda ajuda é bem-vinda.

### Como Contribuir

1. **🍴 Fork** este repositório
2. **🌿 Crie** uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. **💻 Desenvolva** suas alterações
4. **✅ Teste** localmente
5. **📝 Commit** suas mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
6. **📤 Push** para a branch (`git push origin feature/nova-funcionalidade`)
7. **🔄 Abra** um Pull Request

### Tipos de Contribuição

- 🐛 **Bug fixes** - Correção de problemas
- ✨ **Features** - Novas funcionalidades
- 📝 **Documentação** - Melhorias na documentação
- 🎨 **Design** - Melhorias visuais e UX
- ♿ **Acessibilidade** - Melhorias de acessibilidade
- 🚀 **Performance** - Otimizações de performance

### 🔍 Reportando Issues

Ao reportar um bug ou solicitar uma feature, por favor inclua:

#### Para Bug Reports
```markdown
**Descrição do Bug**
Descrição clara e concisa do problema.

**Passos para Reproduzir**
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

**Comportamento Esperado**
O que deveria acontecer.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente**
- OS: [e.g. iOS, Windows, Linux]
- Browser: [e.g. chrome, safari]
- Versão: [e.g. 22]
```

#### Para Feature Requests
```markdown
**A sua solicitação de feature está relacionada a um problema?**
Descrição clara do problema. Ex: Sempre fico frustrado quando [...]

**Descreva a solução que você gostaria**
Descrição clara do que você quer que aconteça.

**Alternativas consideradas**
Outras soluções ou features que você considerou.

**Context adicional**
Qualquer outro contexto ou screenshots sobre a solicitação.
```

### ✅ Processo de Review

1. **Automated Checks**:
    - ✅ Build bem-sucedido
    - ✅ Testes passando
    - ✅ Linting sem erros
    - ✅ Performance checks

2. **Manual Review**:
    - 📋 Código segue os padrões estabelecidos
    - 🧪 Funcionalidade testada em diferentes browsers
    - 📱 Responsividade verificada
    - ♿ Acessibilidade checada

3. **Aprovação e Merge**:
    - 👥 Aprovação de pelo menos 1 maintainer
    - 🔄 Squash and merge para manter histórico limpo
    - 🚀 Deploy automático após merge

### 🏆 Reconhecimento de Contribuidores

- Todos os contribuidores são automaticamente adicionados ao README
- Contribuições significativas são destacadas nas release notes
- Membros ativos podem ser convidados para o time de maintainers

### ❓ Precisa de Ajuda?

- 💬 **Discord**: [#dev-contribuições](https://discord.gg/devops-manaus)
- 📧 **Email**: devopsmanaus@gmail.com
- 🐙 **GitHub Issues**: Para dúvidas técnicas específicas

> 💡 **Quer contribuir com uma feature do roadmap?** Abra uma issue para discutirmos os detalhes!

## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

```
MIT License - você pode usar, modificar e distribuir livremente!
```

## 🌎 Comunidade

### 📞 Canais Oficiais

- **🌐 Website**: [devopsmanaus.github.io](https://devopsmanaus.github.io/)
- **💬 Discord**: [discord.gg/devops-manaus](https://discord.gg/devops-manaus)
- **📱 WhatsApp**: [Grupo da Comunidade](https://chat.whatsapp.com/FWuOtLyvfnUI4SvWg2DLez)
- **📷 Instagram**: [@devopsmanaus](https://instagram.com/devopsmanaus)
- **🐙 GitHub**: [DevopsManaus](https://github.com/devopsmanaus)

### 🤝 Maintainers

- **Time DevOps Manaus** - *Organizadores da Comunidade*

### 🙏 Contribuidores

Agradecemos a todos que contribuíram para este projeto:

<!-- Isso será automaticamente populado pelo GitHub -->
<a href="https://github.com/DevopsManaus/devopsmanaus.github.io/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=DevopsManaus/devopsmanaus.github.io" />
</a>

---

<p align="center">
  <strong>Feito com ❤️ no coração da Amazônia</strong><br>
  <em>🌳 Onde a tecnologia encontra a natureza 🌿</em>
</p>

<p align="center">
  <a href="#top">⬆️ Voltar ao topo</a>
</p>
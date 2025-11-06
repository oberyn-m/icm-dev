# 🚀 Portfolio ICM - Isaac Cabral Matos

Portfolio profissional de um Desenvolvedor Full Stack com +10 anos de experiência em React, Node.js, TypeScript e tecnologias web modernas.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.5.0-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.2-38B2AC?logo=tailwind-css&logoColor=white)

## ✨ Características

- 🎨 **Design Moderno**: Interface elegante com animações suaves e transições
- 🌓 **Dark/Light Mode**: Alternância de tema com persistência via Zustand
- ♿ **Acessível**: Implementação de ARIA labels, skip links e navegação por teclado
- 📱 **Responsivo**: Layout adaptável para todos os dispositivos
- ⚡ **Performance**: Lazy loading de imagens e otimizações
- 🎯 **SEO Otimizado**: Meta tags completas para redes sociais e buscadores
- 🛡️ **Error Boundary**: Tratamento robusto de erros
- 🔄 **Type-Safe**: TypeScript em todo o projeto
- 🎭 **Efeito de Digitação**: Hook customizado para animação de texto

## 🛠️ Stack Tecnológica

### Frontend
- **React 19.1.0** - Biblioteca UI
- **TypeScript 5.8.3** - Tipagem estática
- **Vite 4.5.0** - Build tool e dev server
- **Tailwind CSS 3.3.2** - Framework CSS utility-first

### State Management
- **Zustand 5.0.7** - Gerenciamento de estado global

### Componentes UI
- **Radix UI** - Componentes acessíveis
- **class-variance-authority** - Variantes de componentes
- **clsx & tailwind-merge** - Utilitários de classe

### Ferramentas de Desenvolvimento
- **ESLint 9.30.1** - Linting
- **TypeScript ESLint** - Regras TypeScript
- **React Hooks ESLint** - Regras de hooks

## 📁 Estrutura do Projeto

```
portfolio-icm/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       # Cabeçalho com navegação
│   │   │   ├── Footer.tsx       # Rodapé
│   │   │   └── Layout.tsx       # Layout principal
│   │   ├── ui/
│   │   │   ├── button.tsx       # Componente de botão
│   │   │   ├── lazy-image.tsx   # Imagem com lazy loading
│   │   │   ├── skeleton.tsx     # Skeleton loader
│   │   │   └── loading-spinner.tsx
│   │   ├── ErrorBoundary.tsx    # Tratamento de erros
│   │   ├── SEO.tsx              # Meta tags dinâmicas
│   │   └── ThemeToggle.tsx      # Alternador de tema
│   ├── data/
│   │   ├── projects.ts          # Dados dos projetos
│   │   ├── skills.ts            # Dados das habilidades
│   │   └── contact.ts           # Informações de contato
│   ├── hooks/
│   │   └── useTypingEffect.ts   # Hook de efeito de digitação
│   ├── pages/
│   │   ├── Home/
│   │   ├── Sobre/
│   │   ├── Portfolio/
│   │   └── Contato/
│   ├── store/
│   │   └── themeStore.ts        # Store Zustand para tema
│   ├── types/
│   │   └── index.ts             # Tipos TypeScript globais
│   ├── lib/
│   │   └── utils.ts             # Funções utilitárias
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/oberyn-m/portfolio-icm.git
cd portfolio-icm
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no navegador

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview da build
npm run preview

# Lint
npm run lint
```

## 🎨 Personalização

### Cores

As cores do tema podem ser personalizadas em `tailwind.config.js`:

```javascript
colors: {
  background: '#0F0F0F',
  primary: '#FF0033',
  secondary: '#3A86FF',
  // ...
}
```

### Dados

- **Projetos**: Edite `src/data/projects.ts`
- **Habilidades**: Edite `src/data/skills.ts`
- **Contato**: Edite `src/data/contact.ts`

## ♿ Acessibilidade

Este projeto implementa as melhores práticas de acessibilidade:

- ✅ Navegação por teclado
- ✅ ARIA labels e roles
- ✅ Skip to main content link
- ✅ Contraste adequado de cores (WCAG AA)
- ✅ Textos alternativos em imagens
- ✅ Focus visível

## 📱 Responsividade

O layout é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Otimizações

- ⚡ Lazy loading de imagens com Intersection Observer
- 🎯 Code splitting automático via Vite
- 📦 Bundle otimizado para produção
- 🗜️ Compressão de assets
- 🔄 Cleanup adequado de efeitos e listeners

## 📝 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

**Isaac Cabral Matos**

- Website: [isaacmatos.com](https://isaacmatos.com)
- GitHub: [@oberyn-m](https://github.com/oberyn-m)
- LinkedIn: [dev-isaac-matos](https://www.linkedin.com/in/dev-isaac-matos/)
- Email: isaachavester@gmail.com

## 🙏 Agradecimentos

- React Team pela incrível biblioteca
- Tailwind CSS pela framework CSS
- Vercel pelo Vite
- Toda a comunidade open source

---

⭐ Se este projeto te ajudou, considere dar uma estrela!

**Desenvolvido com ❤️ por Isaac Cabral Matos**

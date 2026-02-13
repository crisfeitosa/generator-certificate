# 📜 Gerador de Certificados

Aplicação desenvolvida durante a **Trilha Angular da Rocketseat** para gerenciar e gerar certificados de atividades.

## 🚀 Sobre o Projeto

O Gerador de Certificados é uma aplicação web que permite:

- ✅ Criar certificados com nome e lista de atividades
- 📋 Visualizar todos os certificados criados
- 🎨 Interface moderna e responsiva

## 🛠️ Tecnologias Utilizadas

- **Angular 21.1.0** - Framework principal
- **TypeScript** - Linguagem de programação
- **CSS3** - Estilização
- **UUID** - Geração de IDs únicos
- **Vitest** - Testes unitários

## 📁 Estrutura do Projeto

```
src/app/
├── _components/          # Componentes reutilizáveis
│   ├── base-ui/
│   ├── item-certificate/
│   ├── navbar/
│   ├── primary-button/
│   └── secondary-button/
├── _services/            # Serviços da aplicação
│   └── certificate.service.ts
├── interfaces/           # Interfaces TypeScript
│   └── certificate.ts
└── pages/               # Páginas da aplicação
    ├── certificate/     # Visualização individual
    ├── certificates/    # Lista de certificados
    └── certificates-form/ # Formulário de criação
```

## 🎯 Funcionalidades

### Criar Certificado

- Preencha o nome do certificado
- Adicione múltiplas atividades
- Defina a data de emissão
- Salve e visualize o certificado gerado

### Listar Certificados

- Visualize todos os certificados criados
- Acesse detalhes de cada certificado
- Interface intuitiva com componentes customizados

## 💻 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm 10.8.2 ou superior

### Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start
```

Acesse `http://localhost:4200/` no seu navegador.

## 🔧 Scripts Disponíveis

```bash
npm start        # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção
npm test         # Executa testes unitários
npm run watch    # Build em modo watch
```

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados no diretório `dist/`.

## 🧪 Testes

```bash
npm test
```

Executa os testes unitários usando Vitest.

## 📚 Recursos Adicionais

- [Documentação Angular](https://angular.dev)
- [Angular CLI](https://angular.dev/tools/cli)
- [Rocketseat](https://www.rocketseat.com.br)

---

Desenvolvido durante a Trilha Angular da Rocketseat 🚀


# AlertaJá

AlertaJá é um aplicativo mobile desenvolvido para o projeto **Global Solution - FIAP** com o objetivo de auxiliar pessoas em situações de desastres naturais. Através de informações rápidas, localização, contatos de emergência e um chat com inteligência artificial, o app busca oferecer suporte e segurança em momentos críticos.

## 🚨 Funcionalidades

- 📍 Mapa com pontos de apoio e áreas de risco
- ☎️ Lista de contatos de emergência
- 🧠 Chat com IA para orientações rápidas
- 📘 Guias de primeiros socorros e segurança
- 🧭 Navegação intuitiva e acessível

## 📱 Tecnologias usadas

- React Native (Expo)
- React Navigation (para navegação entre telas)
- Firebase (para backend e serviços)
- Expo Location (serviços de localização)
- Expo Sharing (compartilhamento)
- Firebase – backend com autenticação e serviços em nuvem.
- Firestore – banco de dados em tempo real para armazenar informações.
- Chat IA (simulado com prompts) – interação com IA em situações de emergência.


## 🛠️ Pré-requisitos

Antes de começar, garanta que você tenha as seguintes ferramentas instaladas:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (recomendo a versão LTS)

---

## 🚀 Como rodar o projeto

1. Clone o repositório para a sua máquina local:

    ```bash
    git clone https://github.com/lianacapizani/global-solution-wd.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd global-solution-wd
    ```

3. Instale as dependências:

Com o repositório clonado, instale as dependências do projeto usando o `npm` ou `yarn`, dependendo do seu gerenciador de pacotes preferido.

#### Usando o npm:

```bash
npm install
```

#### Usando o Yarn:

```bash
yarn install
```

4. Inicie o projeto com Expo:

Com as dependências instaladas, você pode iniciar o servidor de desenvolvimento do Expo com o comando:

```bash
npx expo start
```

Você pode então escanear o QR Code no seu aplicativo Expo Go (disponível para iOS e Android) para rodar o app no seu celular.

---

## 📁 Estrutura do Projeto

```
.
├── assets/               # Imagens e recursos estáticos
├── src/                 
│   ├── components/       # Componentes reutilizáveis
│   ├── screens/          # Telas do app
│   └── services/         # Integrações (ex: API, Firebase)
├── App.js                # Entrada principal do app
└── package.json          # Dependências e scripts
```

---


## 📌 Status

🚧 Projeto em desenvolvimento para entrega acadêmica do Global Solution - FIAP 2025.

---

## 📄 Licença

Este projeto é apenas para fins acadêmicos e não possui uma licença pública de distribuição.

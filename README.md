# RoleAI - Gerador de Roteiros de Viagens

**RoleAI** é um aplicativo móvel projetado para ajudar usuários a gerar roteiros de viagem com base na cidade que desejam visitar e no número de dias de estadia. O aplicativo utiliza a API Generative AI do Google para criar planos de viagem detalhados e personalizados.

## Funcionalidades

- Entrada do nome da cidade e número de dias para receber um roteiro de viagem personalizado.
- Slider interativo para selecionar o número de dias da viagem.
- Utiliza a API Generative AI da Google para gerar os roteiros.
- Interface amigável, construída com React Native e Expo.

## Tecnologias Utilizadas

- **React Native**: Para construção da interface móvel.
- **Expo**: Para gerenciamento do projeto e execução em múltiplas plataformas.
- **TypeScript**: Para tipagem estática e qualidade de código aprimorada.
- **Google Generative AI**: Para geração de roteiros de viagem personalizados.

## Instalação e Configuração

1. Clone o repositório para sua máquina local.
2. Navegue até o diretório do projeto.
3. Instale as dependências necessárias rodando:
    ```bash
    npm install
    ```
4. Renomeie o arquivo `.env.example` para `.env` e adicione sua chave de API do Google Generative AI:
    ```env
    API_KEY=your_google_api_key
    ```
5. Inicie o projeto usando o Expo:
    ```bash
    npx expo start
    ```
6. Baixe o App ExpoGo no seu celular e leia o QR code gerado pelo passo numero 5.

## Uso

1. Abra o aplicativo em seu dispositivo móvel ou emulador.
2. Insira o nome da cidade que deseja visitar.
3. Use o slider para selecionar o número de dias da viagem.
4. Pressione o botão "Gerar Roteiro".
5. Aguarde enquanto o roteiro é gerado e exibido na tela.

## Contribuindo

Contribuições são bem-vindas! Por favor, envie um pull request com uma descrição detalhada das suas alterações.
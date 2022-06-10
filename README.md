# react-native-showcase 65DDM - Lucas Dolsan
- React native
   - Android
   - iOS
   - React.js
      - facebook
      - css, js, html
      - npm, yarn


  - Camada visual:
    - View
    - Atomização
       - designTokens -> ex.: metrics, colors, theme, etc
      
       - atomo -> ex.: label/textField 

       - molecula -> ex.: algo que compoe um label junto com um text field

       - organismo -> ex.: compoe várias moleculas/atomos

       - template -> ex.: compoe vários organismos/moleculas/atomos

- MVC
  - Model (abstrato)
  - View
  - Controller

- Estrutura
  - Inspirado por DDD
  - pasta da feature com tudo dentro

  - Camada lógica
    - View
    - Controller
    - Repository
    - Services

  Adendos (services):
     - Offline first
     - Gerenciamento de estados (redux, context api)
     - Armazenamento (sqlite, conexão sql, hidrate redux, etc)
     - Comunicação de API
     - Permissions (paradigma diferente, diferenças entre android e iOS)
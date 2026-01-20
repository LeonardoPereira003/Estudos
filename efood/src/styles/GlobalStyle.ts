    // Importa função para criar estilos globais
    import { createGlobalStyle } from 'styled-components'

    // Estilos globais da aplicação
    export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #FFF8F2;
        color: #4B4B4B;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    `

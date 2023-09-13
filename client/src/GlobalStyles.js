import { createGlobalStyle } from 'styled-components';

export const primaryColor = '#F8EDE3';
export const secondaryColor = '#19376D';
export const accentColor = '#576CBC';
export const lightColor = '#A5D7E8';
export const textColor = '#285430';

const GlobalStyles = createGlobalStyle `

    * {
    margin: 0;
    padding: 0;
    color: ${textColor}


    }

    html,
    body {
        background-color: ${primaryColor};
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    p,
    h1,
    h2,
    h3,
    li,
    ul,
    a {
        color: ${textColor};
        font-family: 'Fira Code';
    
    }

    p,
    li,
    ul,
    a {
        @media (max-width: 580px) {
            font-size: 0.8rem;
        }
    }



    ::-webkit-scrollbar {
        width: 0px;
        background: transparent; 
    }
    ::-webkit-scrollbar-thumb {
            background: #FF0000;
        }
`

export default GlobalStyles;
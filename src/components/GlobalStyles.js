import styled from 'styled-components'

const GlobalStyles = styled.div`
  @font-face {
    font-family: 'Fira Code';
    src: local('Fira Code Bold'), local('FiraCode-Bold'), url('/fonts/FiraCode-Bold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Fira Code';
    src: local('Fira Code Medium'), local('FiraCode-Medium'), url('/fonts/FiraCode-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Fira Code';
    src: local('Fira Code Regular'), local('FiraCode-Regular'), url('/fonts/FiraCode-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Fira Code';
    src: local('Fira Code Light'), local('FiraCode-Light'), url('/fonts/FiraCode-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Flex';
    src: local('Flex'), local('Flex'), url('/fonts/flex.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  padding-bottom: 50px;

  blockquote {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 4rem;
  }

  pre {
    font-family: Fira Code;
    font-weight: 600;
    font-size: 1rem;
    display: inline;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    margin-left: 0;
  }

  input:focus, textarea:focus, select:focus {
    outline: 0;
  }
`

export default GlobalStyles

import styled from 'styled-components'

const GlobalStyles = styled.div`
  @font-face {
    font-family: 'Fira Code';
    src: local('Fira Code Bold'), local('FiraCode-Bold'), url('../Fonts/FiraCode-Bold.woff2') format('woff2');
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

  input:focus, textarea:focus, select:focus {
    outline: 0;
  }
`

export default GlobalStyles

import { createGlobalStyle } from 'styled-components'

import '../fonts/OpenSans-Regular.ttf'

export default createGlobalStyle`

@font-face {
    font-family: 'OpenSans';
    src: local('OpenSans'), url('../fonts/OpenSans-Regular.ttf') format('truetype');
}

*{
margin: 0;
padding: 0;
box-sizing: border-box;
outline: 0;
font-family: 'Open Sans', sans-serif;
 }

`;
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  /* background-color: "#FAFFEF"; */
  background: url('/BG.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: black;
    /* background: white; */
  }
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(0,0,255, 0.3);
  backdrop-filter: blur(5px);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(0,0,255, 0.5);
  transition: ease 300ms;
  border-radius: 999px;
  transition: ease 300ms;
  :hover {
    background: rgba(0,0,255, 1);
  }
}
`


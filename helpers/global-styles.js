import React from 'react';

const GlobalStyle = `
* {
  margin: 0;
  padding: 0;
}
*, *:before, *:after {
  box-sizing: border-box;
}
.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}
.clearfix:after {
  clear: both;
}
body {
  background: #080808;
  font-family: Aileron-Thin, sans-serif;
  font-weight: 300;
  font-size: 1rem;
  color: #d9e1e8;
  height: calc(var(--vh, 1vh) * 100);
  height: 100%;
  overflow: hidden;
  font-smooth: subpixel-antialiased;
  font-smooth: antialiased;
  -webkit-font-smoothing: subpixel-antialiased;
}
body * {
  letter-spacing: 4px;
}
main {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  /* enable smooth scrolling on iOS */
  -webkit-overflow-scrolling: touch;
}
ul {
  list-style-type: none;
}
a{
  text-decoration: none;
  color: #DEDEDE;
}
p:not(.except) {
  line-height: 1.7
}
h1:not(.except) {
  line-height: 2.7
  font-family: 'Roboto', sans-serif;
}
h2:not(.except) {
  line-height: 2.7
  font-family: 'Montserrat', sans-serif;
}
h3:not(.except) {
  line-height: 2.7
  font-family: 'Montserrat', sans-serif;
}
.text-gradiant {
  background : -moz-linear-gradient(top, rgba(8, 8, 8, 1) 3%, rgba(8, 8, 8, 0.95) 5%, rgba(8, 8, 8, 0) 20%, rgba(8, 8, 8, 0) 100%);
  background : -webkit-linear-gradient(top, rgba(8, 8, 8, 1) 3%, rgba(8, 8, 8, 0.95) 5%, rgba(8, 8, 8, 0) 20%, rgba(8, 8, 8, 0) 100%);
  background : linear-gradient(to bottom, rgba(8, 8, 8, 1) 3%, rgba(8, 8, 8, 0.95) 5%, rgba(8, 8, 8, 0) 20%, rgba(8, 8, 8, 0) 100%);
  filter     : progid:DXImageTransform.Microsoft.gradient(startColorstr='#080808', endColorstr='#00080808', GradientType=0);
  }
`;

export default GlobalStyle;

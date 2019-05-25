import React from "react";

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
  background: #252525;
  // background: #282c37;
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
`;

export default GlobalStyle;

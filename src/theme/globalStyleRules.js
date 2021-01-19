export default `
  html {
    font-size: 10px; // all rem app values will be calculated base on this value 
  }

  body {
    position: relative;
    background-color: #FFFFFF;
    margin: 0;
    font-family: "NexaRegular", "NexaBold",
      "SfProRegular", "SfProBold", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body, html, #root {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  h1 {
    margin: 0;
    font-size: 45px;
  }

  h2 {
    margin: 0;
    font-size: 30px;
  }

  h3 {
    margin: 0;
    font-size: 25px;
  }

  h5 {
    margin: 0;
    font-size: 16px;
  }

  p {
    margin: 0;
    font-size: 14px;
  }
`;

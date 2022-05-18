import { createGlobalStyle } from "styled-components";
import covidImg from "../../assets/images/covid.jpg";

const globalStyle = createGlobalStyle`
  *{
    outline:none;
    box-sizing: boder-box;
  }

  body{
    line-height:normal;
  }

  html, body{
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }

  #root{
    background-image: url(${covidImg});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

  .mb-2{
    margin-bottom: 16px;
  }

  .pt-2{
    padding-top: 16px;
  }

  .cursor{
    cursor: pointer;
  }

  .p-2{
    padding: 4px;
  }
`;
export default globalStyle;

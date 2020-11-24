import {createGlobalStyle} from "styled-components"



const GlobalStyles = createGlobalStyle`

*{
    margin : 0;
    padding : 0;
    box-sizing: border-box;



}

html{

    &::-webkit-scrollbar{
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb{
        background-color: darkgray;
        width:0.5rem
        
    }

    &::-webkit-scrollbar-track{
  background:white;

}

}

body{
    width:100%;
    font-family: 'Montserrat', sans-serif;
   
}

h2{
    font-size: 3rem;
    font-family: "Montserrat", sans-serif;
    font-weight: lighter;
    color: #333;

}

h3{
    font-size: 1.3rem;
    color: #333;
    padding:1.5rem 0rem;
}
p{
    font-size : 1.2rem;
    line-height : 200%;
    color : #696969
}

a{
    text-decoration:none;
    color: #333;
}

img{
    display:block
}

input{
    font-family: "Montserrat", sans-serif
}

`

export default GlobalStyles
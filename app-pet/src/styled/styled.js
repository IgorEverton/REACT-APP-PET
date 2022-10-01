import styled from 'styled-components';

export const Header = styled.header`
h2{
    text-align: center;
    color: #EE7E00;
    font-size: 35px;
    text-shadow: 3px 2px 2px rgb(116, 113, 113);
}
nav{
    background-color: rgb(255, 255, 255);
    border-radius: 30px;
    height: 35px;
    width:50%;
    margin: auto;
    color: #EE7E00;
    font-weight: bold;
    box-shadow: 3px 2px 2px rgb(116, 113, 113)
}
ul{
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    padding:0;
}
li{
    margin-top: 7px;
    width: 50%;
    text-align: center;
}
ul li a{
    text-decoration: none;
    color: #ee7f00da;
    margin: 80px;
    font-weight: bold;
    
}
ul li a:hover{
    color: #EE7E00;
    transform: scale(1.2);
    text-decoration: underline;
}
`
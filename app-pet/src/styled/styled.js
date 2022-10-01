import styled from 'styled-components';

export const Header = styled.header`
h2{
    color: #EE7E00;
    text-shadow: 3px 2px 2px rgb(26, 26, 26);
}
nav{
    background-color: rgba(255, 255, 255, 0.589);
    border-radius: 30px;
    height: 35px;
}
ul{
    list-style: none;
    display: flex;
    margin-left: 28%;
}
ul li{
    margin-top: 7px;
}
ul li a{
    text-decoration: none;
    color: #ee7f00af;
    margin: 80px;
}
ul li a:hover{
    color: #EE7E00;
    transform: scale(1.2);
}
`
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
    box-shadow: 3px 2px 2px rgb(116, 113, 113);
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

export const DivCadastro = styled.div`
.principal {
    width: 50%;
    margin: 30px auto auto auto;
}
form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width:70%;
}
div {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bold;
    margin-top: 15px;
    display: flex;
    justify-content: space-evenly;
}
label {
    color: #ee7f00da;
    padding: 10px 0px 10px 0px;
}
label:hover{
    color: #EE7E00;
    text-decoration: underline;
}
input, textarea {
    border-radius: 10px;
    border: none;
    padding: 10px 0px 10px 15px;
    align-items: right;
    box-shadow: 3px 2px 2px rgb(116, 113, 113);
}
input:hover,
textarea:hover {
    border: solid 1px #EE7E00;
}
button {
    padding: 20px;
    border-radius: 10px;
    border: none;
    background-color: #378544;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: bold;
}
button:hover {
    transition: 1ms;
    background-color: #454749   ;
}
`

export const DivPet =styled.div`
img{
    border-radius:50%;
    height:100px;

}
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

background-Color:white;
color:yellow;
padding:10px;
widht:200px;

box-shadow:2px 2px 10px rgba(0,0,0,0.7);
margin:30px;



`

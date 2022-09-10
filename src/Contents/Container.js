import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react"

let name= "Lola";

function ContainerFull(){
    return(
        <BoxContainerFull>
            <BoxLines>  
                <Line><h1>30/02</h1><h2>Mercado</h2><h3>560,00</h3></Line>
                <Line><h1>30/02</h1><h2>Salario</h2><h4>1450,00</h4></Line>
            </BoxLines>
            <Balance><h5>Saldo</h5> <h4>890</h4> </Balance>
        </BoxContainerFull>
    )
}
function ContainerEmpty(){
    
    return(
        <BoxContainer><h1>Não há registros de<br/>entrada ou saída</h1></BoxContainer>
    )
}

export default function Container(){
    const [ok,setOk]=useState(true);   
    const navigate=useNavigate();
    return (
    <DivContainer>
        <DivTopoContainer>
            <H1Name>Ola, {name} </H1Name> <IconGoOut onClick={()=>{navigate("/")}}><ion-icon name="exit-outline"></ion-icon></IconGoOut>
        </DivTopoContainer>

        {ok ? (<ContainerFull/>):(<ContainerEmpty/>)}  

       <DivLittleBox>
            <NewEntry onClick={()=>{navigate("/entrada")}}><IconLittleBox><ion-icon name="add-circle-outline"></ion-icon></IconLittleBox><h1>Nova entrada</h1></NewEntry>
            <Space></Space>
            <NewExit onClick={()=>{navigate("/saida")}}><IconLittleBox><ion-icon name="remove-circle-outline"></ion-icon></IconLittleBox><h1>Nova saída</h1></NewExit>
       </DivLittleBox>

    </DivContainer>);
}

const DivContainer=styled.div`
    width: 100%;
    height: 1000px;
    background-color: #8c11be;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const DivTopoContainer=styled.div` 
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top:25px;
    margin-bottom: 25px;
`
const H1Name=styled.h1`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
`
const IconGoOut=styled.div`
    cursor: pointer;
    ion-icon{
        color: white;
        font-size:160%;
    }
`
const BoxContainer=styled.div`
    width: 90%;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content:center;
    align-items: center;
    h1{
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }
`
const NewEntry=styled.div`
    width: 44%;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    margin-top: 15px;
    cursor: pointer;
    h1{
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
`
const DivLittleBox=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NewExit=NewEntry;

const IconLittleBox=styled.div`
    ion-icon{
        color: white;
        font-size: 160%;
    }
`
const Space=styled.div`
    width:2%;
`
const BoxContainerFull=styled.div`
    width: 90%;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    justify-content:space-between;
    padding: 30px 20px;
    h1{
        color: #C6C6C6;
    }h2{
        color: #000000;
    }h3{
        color: #C70000;
    }h4{
        color: #03AC00;
    }h5{
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
    }
`

const BoxLines=styled.div`
    display:flex;
    flex-direction: column;
`

const Line=styled.div`
    display: flex;
    justify-content: space-between;
`

const Balance=styled.div`
    display: flex;
    justify-content: space-between;

`
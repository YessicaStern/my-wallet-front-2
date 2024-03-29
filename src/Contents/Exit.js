import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postExit } from "../Provider/axiosMyWallet";

export default function Exit(){
    const navigate=useNavigate();
    const [form,setForm]=useState({
        value:"",
        description:"",    
    })
    function handleForm(e){
        e.preventDefault();
        setForm({...form,[e.target.name]:e.target.value,});
    }
    function axiosExit(){
        postExit(form).then((res)=>{
            navigate("/movimentacoes");
        }).catch((res)=>{
                alert(res.response.data.message);
        });
    }
    return (
    <DivExit>
        <DivInfo><H1Exit>Nova saída</H1Exit></DivInfo>
        
        <FormExit>
            <InputValue placeholder="Valor" type="number" name="value" onChange={handleForm} ></InputValue>
            <InputDescription placeholder="Descrição" type="name" name="description" onChange={handleForm}></InputDescription>
        </FormExit>
        <ButtonSave onClick={axiosExit}>Salvar saida</ButtonSave>
    </DivExit>);
}

const DivExit=styled.div`
    width: 100%;
    height: 1000px;
    background-color: #8c11be;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const DivInfo=styled.div`
    width: 90%;
`

const H1Exit=styled.h1`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: white;
    margin: 30px 0 40px 0;
`
const InputValue=styled.input`
    width: 90%;
    height: 58px;
    background: #FFFFFF;
    border: transparent;   
    border-radius: 5px;
    margin-bottom: 15px;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    outline: none;

    ::placeholder{
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
    }
`
const InputDescription=InputValue;

const ButtonSave=styled.button`
    width: 90%;
    height: 46px;
    background: #A328D6;
    border-radius: 5px;
    border: none;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    margin-bottom: 40px;
    cursor: pointer;
`
const FormExit=styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
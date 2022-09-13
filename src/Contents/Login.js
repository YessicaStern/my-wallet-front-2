import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import React, { useState } from "react";
import { postLogin } from "../Provider/axiosMyWallet";  

export default function Login(){  
    const navigate=useNavigate();
    const [form,setForm]=useState({
        email:"",
        password:"",    
    });
    function handleForm(e){
        e.preventDefault();
        //console.log(e.target.name,e.target.value);
        setForm({...form,[e.target.name]:e.target.value,});
    }
    function axiosLogin(){
        postLogin(form).then((res)=>{
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("name",res.data.user);
            navigate("/movimentacoes");
            window.location.reload();
        }).catch((res)=>{
            alert(res.response.data.message);
        });
    }
    return (
    <DivLogin>
        <H1Logo>MyWallet</H1Logo>
        <FormLogin>
            <InputEmail placeholder="E-mail" type="email" name="email" onChange={handleForm} ></InputEmail>
            <InputPassword placeholder="Senha" type="password" name="password" onChange={handleForm} ></InputPassword>
        </FormLogin>
        <ButtonEnter onClick={axiosLogin}>Entrar</ButtonEnter>
        <H1Login onClick={()=>{navigate("/cadastro")}}>Primeira vez? Cadastre-se!</H1Login>       
    </DivLogin>);
}

const DivLogin=styled.div`
    width: 100%;
    height: 1000px;
    background-color: #8c11be;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const H1Logo=styled.h1`
    font-family: 'Saira Stencil One';
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: white;
    margin: 150px 0 30px 0;
`
const InputEmail=styled.input`
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
const InputPassword=InputEmail;

const ButtonEnter=styled.button`
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
const H1Login=styled.h1`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: white;
    cursor: pointer;
`
const FormLogin=styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import {React, useState} from "react";
import { postRegister } from "../Provider/axiosMyWallet";

export default function Registration(){
    const navigate=useNavigate();
    const [form,setForm]=useState({
        name:"",
        email:"",
        password:"",
        passwordConfirm:""
    })
    function handleForm(e){
        e.preventDefault();
        setForm({...form,[e.target.name]:e.target.value,});
    }
    function register(){
        postRegister(form).then((res)=>{
            navigate("/");
        }).catch((res)=>{
                alert(res.response.data.message);
                
            });
    }
    return (
    <DivRegistration>
        <H1Logo>MyWalle</H1Logo>
        <FormRegister>
            <InputName placeholder="Nome" type="name" name="name" onChange={handleForm} ></InputName>
            <InputEmail placeholder="E-mail" type="email" name="email" onChange={handleForm} ></InputEmail>
            <InputPassword placeholder="Senha" type="password" name="password" onChange={handleForm} ></InputPassword>
            <InputPasswordConfirm placeholder="Confirme a senha" name="passwordConfirm" type="password" onChange={handleForm} ></InputPasswordConfirm>
        </FormRegister>
        <ButtonRegister onClick={register}>Cadastrar</ButtonRegister>
        <H1Login onClick={()=>{navigate("/")}}>Já tem uma conta? Entre agora!</H1Login>       
    </DivRegistration>);
}

const DivRegistration=styled.div`
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
    margin: 95px 0 30px 0;
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
const InputName=InputEmail;
const InputPasswordConfirm=InputEmail;

const ButtonRegister=styled.button`
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
const FormRegister=styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
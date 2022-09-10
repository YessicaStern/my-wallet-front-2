import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function Registration(){
    const navigate=useNavigate();
    return (
    <DivRegistration>
        <H1Logo>MyWalle</H1Logo>
        <FormRegister>
            <InputName placeholder="Nome"></InputName>
            <InputEmail placeholder="E-mail"></InputEmail>
            <InputPassword placeholder="Senha"></InputPassword>
            <InputPasswordConfirm placeholder="Confirme a senha"></InputPasswordConfirm>
        </FormRegister>
        <ButtonRegister onClick={()=>{navigate("/")}}>Cadastrar</ButtonRegister>
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
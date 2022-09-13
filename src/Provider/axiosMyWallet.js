import axios from "axios";

const BaseURL="http://localhost:4000";
const token=localStorage.getItem("token");
const config={ headers:{Authorization:`Bearer ${token}`}};

function postLogin(e){
    const promise=axios.post(`${BaseURL}`,e);
    return promise;
}
function postRegister(e){
    const promise=axios.post(`${BaseURL}/cadastro`,e);
    return promise
}
function getMoviments(){
    const promise=axios.get(`${BaseURL}/movimentacoes`,config);
    return promise;
}

function postEntry(e){
    const promise=axios.post(`${BaseURL}/movimentacoes-entrada`,e,config);
    return promise;
}
function postExit(e){
    const promise=axios.post(`${BaseURL}/movimentacoes-saida`,e,config);
    return promise;
}
export {postLogin,postRegister,getMoviments,postExit,postEntry};
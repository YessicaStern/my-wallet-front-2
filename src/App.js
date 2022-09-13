import Login from "./Contents/Login";
import Registration from "./Contents/Registration";
import Container from "./Contents/Container";
import Entry from "./Contents/Entry";
import Exit from "./Contents/Exit";

import GlobalStyle from "./Provider/style";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
    return (<>
        <GlobalStyle/> 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Registration/>}/>
            <Route path="/movimentacoes" element={<Container/>}/>
            <Route path="/entrada" element={<Entry/>}/>
            <Route path="/saida" element={<Exit/>}/>
          </Routes>
        </BrowserRouter>
    </>);
}
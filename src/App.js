import React from "react";
import './App.css';
import Input from "./components/input/Input";
import IndirectFather from "./components/indirect/IndirectFather";
import InforUsuario from "./components/condicional/InforUsuario";
import Students from "./components/studentyList/Students";
import FamiliaMembros from "./components/memberfamily/MemberFamily";
import Familia from "./components/memberfamily/Family";
import NumberRandom from "./components/numberRandom/NumberRandom";
import Card from "./components/cards/Card";

export default function App() {
  return (
    <div className="App">
      <Card title="#01 Número Aleatório" colorTitle="green" colorCard="3px solid green">
        <NumberRandom min={1} max={5}/>
      </Card>
      <Card title="#02 Membros de uma familia" colorTitle="green" colorCard="3px solid green">
        <Familia lastName="Almeida">
          <FamiliaMembros name="Pedro"/>
          <FamiliaMembros name="Julia"/>          
          <FamiliaMembros name="João"/>          
        </Familia>
      </Card>
      <Card title="#03 Lista de Alunos" colorTitle="green" colorCard="3px solid green">
        <Students></Students>
      </Card>
      <Card title="#04 Informações de usuário" colorTitle="green" colorCard="3px solid green">
        <InforUsuario usuario={{nome: "Carlos"}}/>
        <InforUsuario usuario={{nome: ""}}/>
      </Card>
      <Card title="#05 Estados de componentes" colorTitle="green" colorCard="3px solid green">
        <IndirectFather/>
      </Card>
      <Card title="#06 Componentes controlados" colorTitle="green" colorCard="3px solid green">
        <Input/>
      </Card>
      <Card title="#07">
      </Card>
      <Card title="#08">
      </Card>
    </div>
  )
}
import React from "react";
import './App.css'
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
      <Card title="#04 Tabela">
        
      </Card>
      </div>
  )
}
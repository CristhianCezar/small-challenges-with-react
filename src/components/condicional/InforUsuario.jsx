import React from "react";
import If from './if';

export default props => {

    const usuario = props.usuario || {};

    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja Bem vindo {usuario.nome}
            </If>
            
            <If test={!usuario || !usuario.nome}>
                Seja Bem vindo Desconhecido!
            </If>
        </div>
    )
}
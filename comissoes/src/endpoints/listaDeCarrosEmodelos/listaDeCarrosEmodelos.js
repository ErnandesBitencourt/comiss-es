import { useState } from "react";


export const Listas= (props) => {

    const Listas =  props.map(listas => {
            return (
           <>
                 <option  >{listas}</option>     
            </>
            )
    })

    return Listas
};

export const ListasMoledoCarros = ({ModelosDeCarros,marcaCarro}) => {

    const Listas = ModelosDeCarros.filter(listas => listas === marcaCarro)
    console.log(Listas)

};
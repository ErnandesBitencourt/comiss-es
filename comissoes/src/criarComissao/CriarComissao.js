
import React, { useState } from "react";
import { ListaDeModelosDeCarros, ListaMarcaDecarro} from "../endpoints/listaDeCarrosEmodelos/listaDeCarrosEmodelos";

// import { Vendedores } from "../components/vendedores/vendedores";
import { ModelosDeCarros, Marcas } from "../components/modeloDeCarrosPorMarcas/modeloDeCarrosPorMarcas.js";


export const CriarComissao = ()=> {
   const [marcaCarro , setMarcaCarro] = useState([""])
 
    const onChange = (event) =>{
        
        setMarcaCarro(event.target.value)
    }


    return(
       <main>
         <h1>Cirar Comissão</h1>
         <form>
            <label>Data</label>
            <input  type="date" />
            <label>Vendedor</label>
            {/* <select>
            {Listas(Vendedores)}
                <option>Outros</option>
            </select> */}

            <label>Marca do carro</label>

            <input type="text " onChange={onChange} value={marcaCarro}/>

            <select value={marcaCarro} onChange={onChange} >
                {ListaMarcaDecarro(Marcas)}
                <option>Outros</option>
                
            </select>

            <label>Modelo do Carro</label>
            <select>
                {<ListaDeModelosDeCarros marcaCarro={marcaCarro} ModelosDeCarros={ModelosDeCarros}/>}
                <option>Outros</option>
            </select>
         </form>
       </main>
    )
}
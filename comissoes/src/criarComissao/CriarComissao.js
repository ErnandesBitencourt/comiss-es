
import React, { useState } from "react";
import { ListaDeModelosDeCarros, ListaMarcaDecarro,ListasVendedoresEServicos} from "../endpoints/listaDeCarrosEmodelos/listaDeCarrosEmodelos";

import { Vendedores } from "../components/vendedores/vendedores";
import { ModelosDeCarros, Marcas } from "../components/modeloDeCarrosPorMarcas/modeloDeCarrosPorMarcas.js";
import { ListaDeServicos15 } from "../components/servico15/listaDeServicos15.js";


export const CriarComissao = ()=> {
   const [marcaCarro , setMarcaCarro] = useState([""])
   const [modeloCarro, setModeloCarro] = useState([""])
 
    const onChange = (event) =>{
        
        setMarcaCarro(event.target.value)
    };
    const onChanges = (event) =>{
        
        setModeloCarro(event.target.value)
    };
console.log(modeloCarro)

    return(
       <main>
         <h1>Criar Comissão</h1>
         <form>
            <label>Data</label>
            <input  type="date" />
            <label>Vendedor</label>
            <select>
            {ListasVendedoresEServicos(Vendedores)}
                <option>Outros</option>
            </select>
            <input type="text" placeholder="Nome do vendedor"/>

            <label>Marca do carro</label>

            <input type="text " placeholder="Marca do carro" onChange={onChange} value={marcaCarro}/>

            <select value={marcaCarro} onChange={onChange} >
                {ListaMarcaDecarro(Marcas)}
                <option>Outros</option>
                
            </select>

            <label>Modelo do Carro</label>
            <input type="text" placeholder="Modelo do carro" onChange={onChanges} value={modeloCarro}/>

            <select value={modeloCarro} onChange={onChanges} >
                {<ListaDeModelosDeCarros marcaCarro={marcaCarro} ModelosDeCarros={ModelosDeCarros}/>}
                <option>Outros</option>
            </select>
            <div>
                <label>Placa do Carro</label>
                <input type="Text" placeholder="Digite o n° da placa do carro" />   
            </div>
            <div>
                <label>Serviços de 15% </label>
                <select>
                {ListasVendedoresEServicos(ListaDeServicos15)}
                </select>
                <input type=" text" placeholder="Valor R$"/>
            </div>
            <div>
                <label>Serviços de 30% </label>
                <input type="text" placeholder="Serviço realizado" />
                <input type=" text" placeholder="Valor R$"/>
                <button>Adicionar Serviço</button>
            </div>
            <div>
                <label>Troca de Óleo </label>
                <input type="text" placeholder="Total de óleo trocado" />
                <input type=" text" placeholder="Valor total R$"/>
            </div>
            <div>
                <label>Troca de Filtros </label>
                <input type="text" placeholder="Filtros trocado no carro" />
                <input type=" text" placeholder="Valor total R$"/>
            </div>

         </form>
       </main>
    )
}
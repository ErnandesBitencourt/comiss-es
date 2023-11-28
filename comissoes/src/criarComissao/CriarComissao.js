
import React, { useState } from "react";
import { Listas, Listass} from "../endpoints/listaDeCarrosEmodelos/listaDeCarrosEmodelos";
import { MarcaDeCarros } from "../components/marcaDeCarros/marcaDeCarros";
import { Vendedores } from "../components/vendedores/vendedores";
import { ModelosDeCarros } from "../components/modeloDeCarrosPorMarcas/modeloDeCarrosPorMarcas.js";


export const CriarComissao = ()=> {
   const [marcaCarro , setMarcaCarro] = useState([""])
 
    const onChange = (event) =>{
        
        setMarcaCarro(event.target.value)
    }
 console.log(marcaCarro)

 const modelo = ModelosDeCarros.filter(modelos =>  marcaCarro === modelos )
 
    return(
       <main>
         <h1>Cirar Comissão</h1>
         <form>
            <label>Data</label>
            <input  type="date" />
            <label>Vendedor</label>
            <select>
            {Listas(Vendedores)}
                <option>Outros</option>
            </select>

            <label>Marca do carro</label>

            <input type="text " onChange={onChange} value={marcaCarro}/>

            <select value={marcaCarro} onChange={onChange} >
                {Listas  (MarcaDeCarros)}
                <option>Outros</option>
                <input type="text"  />
            
            </select>

            <label>Modelo do Carro</label>
            <select>
                {/* {ListasMoledoCarros(ModelosDeCarros,marcaCarro)} */}
            </select>
         </form>
       </main>
    )
}
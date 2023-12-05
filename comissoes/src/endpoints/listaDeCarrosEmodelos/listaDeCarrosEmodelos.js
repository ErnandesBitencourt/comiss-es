
export const ListasVendedoresEServicos = (props) => {

    const Listas =  props.map(listas => {
            return (
           <>
                 <option key={listas.id} >{listas.nome}</option>     
            </>
            )
    });

    return Listas;
};

export const ListaMarcaDecarro = (props) => {
    const modelosDeCarros = props.map((modelos) => {
        return (
            <>
                <option key={modelos.id}>
                    {modelos.marca}
                </option>
            </>
        )
    });
    return modelosDeCarros;
    
};

export const ListaDeModelosDeCarros = ({marcaCarro,ModelosDeCarros}) => {
    const modeloFiltrado = ModelosDeCarros.filter(modelos =>  marcaCarro === modelos.marca );
    const modelosCarros = modeloFiltrado.map((carros) => {
        return(
            <>
            <option key={carros.id} >
                    {carros.modelo}
                </option>
            </>
        )
    });
    return modelosCarros;
};
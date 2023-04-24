
import Navegadores from "../components/Navegadores";
import Navegacao from "../components/Navegacao";

function Capa() {
    var route = [
        {
            route: "/",
            name: "Capa"
        }
    ]

    return (
        <>
            <Navegacao routes={route} />

            <div className="folha text-center">

                <div className="folha_cabecalho">
                    <p>Invest</p>
                    <p>Ciências da Computação</p>
                </div>

                <div className="folha_titulo">
                    <h1>Algoritmo</h1>
                </div>

                <div className="folha_rodape">
                    <p>Cuiabá</p>
                    <p>2023</p>
                </div>
            </div>

            <Navegadores next={"/"} prev={"/folha-rosto"} />

        </>
    );
}

export default Capa;
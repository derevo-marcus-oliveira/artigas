
import Navegadores from "../components/Navegadores";
import Navegacao from "../components/Navegacao";


function Introducao() {
    var route = [
        {
            route: "/",
            name: "Capa"
        },
        {
            route: "/folha-rosto",
            name: "Folha de Rosto"
        },
        {
            route: "/epigrafe",
            name: "Epígrafe"
        },
        {
            route: "/resumo",
            name: "Resumo"
        },
        {
            route: "/sumario",
            name: "Sumário"
        },
        {
            route: "/introducao",
            name: "Introdução"
        }
    ]

    return (
        <>
            <Navegacao routes={route} />

            <div className="folha " style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <div class="row" >
                    <div class="col  text-center" style={{ padding: "30px 0" }}>
                        <h1>Introdução</h1>
                    </div>

                    <div class="row" >
                        <div class="col" style={{ padding: "20px 60px" }}>
                            <p>Os algoritmos são amplamente utilizados na computação e na tecnologia em geral. De maneira geral, um algoritmo é um conjunto de instruções bem definidas e ordenadas que levam a um resultado desejado. Embora a definição seja simples, a aplicação de algoritmos é vasta e abrange muitas áreas diferentes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Navegadores next={"/sumario"} prev={"/desenvolvimento"} />
        </>
    );
}

export default Introducao;
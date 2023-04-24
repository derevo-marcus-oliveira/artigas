
import Navegadores from "../components/Navegadores";
import Navegacao from "../components/Navegacao";
import { Link } from "react-router-dom";



function Sumario() {
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
        }
    ]

    return (
        <>

            <Navegacao routes={route} />

            <div className="folha " style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                <div class="row" >
                    <div class="col  text-center" style={{ padding: "30px 0" }}>
                        <h1>Sumário</h1>
                    </div>

                    <div class="row" >
                        <div class="col" style={{ padding: "20px 60px" }}>
                            <ol >
                                <li>
                                    <Link to={"/introducao"}>Introdução</Link>
                                </li>
                                <li>
                                    <Link to={"/desenvolvimento"}>Desenvolvimento</Link>
                                </li>
                                <li>
                                    <Link to={"/conclusao"}>Conclusão</Link>
                                </li>
                            </ol>
                        </div>
                    </div>

                </div>

            </div>

            <Navegadores next={"/resumo"} prev={"/introducao"} />
        </>
    );
}

export default Sumario;
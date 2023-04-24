
import Navegadores from "../components/Navegadores";
import Navegacao from "../components/Navegacao";
import { Link } from "react-router-dom";





function Bibliografia() {
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
        },
        {
            route: "/desenvolvimento",
            name: "Desenvolvimento"
        },
        {
            route: "/conclusao",
            name: "Conclusão"
        },
        {
            route: "/bibliografia",
            name: "Bibliografia"
        }
    ]

    return (
        <>

            <Navegacao routes={route} />

            <div className="folha" >

                <div class="row  text-center" >
                    <div class="col " style={{ padding: "30px 0" }}>
                        <h1>Referência bibliografica</h1>
                    </div>

                    <div class="row text-start" >
                        <div class="col" style={{ padding: "20px 60px" }}>
                            <ol >
                                <li>
                                <span style={{ fontWeight: 600 }}>O que é algoritmo</span> in: ChatGPT. Disponivel em :
                                    <a href="https://chat.openai.com">https://chat.openai.com</a>. Acesso em 24 abril, 2023.
                                </li>
                            </ol>
                        </div>
                    </div>

                </div>

            </div>

            <Navegadores next={"/conclusao"} prev={"#"} />
        </>
    );
}

export default Bibliografia;
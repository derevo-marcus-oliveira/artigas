
import Navegadores from "../components/Navegadores";
import Navegacao from "../components/Navegacao";



function Conclusao() {
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
        }
    ]

    return (
        <>

            <Navegacao routes={route} />
            <div className="folha " style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <div class="row" >
                    <div class="col  text-center" style={{ padding: "30px 0" }}>
                        <h1>Conclusão</h1>
                    </div>

                    <div class="row" >
                        <div class="col" style={{ padding: "20px 60px" }}>
                            <p>Em resumo, os algoritmos são uma parte fundamental da computação e da tecnologia em geral. Eles são usados para resolver uma ampla variedade de problemas e são essenciais para muitas áreas diferentes, incluindo a inteligência artificial e o aprendizado de máquina. Ao usar algoritmos, as pessoas podem automatizar tarefas repetitivas, analisar grandes conjuntos de dados e realizar outras tarefas que seriam impossíveis sem o uso de tecnologia. Em última análise, os algoritmos são uma ferramenta poderosa que ajuda as pessoas a resolver problemas de maneira eficiente e eficaz.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Navegadores next={"/desenvolvimento"} prev={"/bibliografia"} />
        </>
    );
}

export default Conclusao;
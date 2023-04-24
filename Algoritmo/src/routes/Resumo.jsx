
import Navegadores from "../components/Navegadores";
import Navegacao from "../components/Navegacao";

function Resumo() {
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
        }
    ]

    return (
        <>
            <Navegacao routes={route} />

            <div className="folha " style={{ display: "flex" , alignItems: "center", justifyContent: "center", flexDirection: "column"}}>


                <div class="row" >
                    <div class="col  text-center" style={{ padding: "30px 0" }}>
                        <h1>Resumo</h1>
                    </div>

                    <div class="row" >
                        <div class="col" style={{ padding: "20px 60px" }}>
                            <p>O artigo descreveu o que são algoritmos, sem se aprofundar, e em seguida aprofundou-se sobre a história, utilização e exemplos de algoritmos, incluindo ordenação, reconhecimento de imagem, aprendizado de máquina e busca. Por fim, concluiu que os algoritmos são uma ferramenta poderosa que ajuda as pessoas a resolver problemas de maneira eficiente e eficaz.</p>
                        </div>
                    </div>

                    <div class="row" >
                        <div class="col" style={{ padding: "20px 60px" }}>
                            <p> <span style={{ fontWeight: 600 }}>Palavra chave:</span> Algoritmos</p>
                        </div>
                    </div>
                </div>

                <div class="row" >
                    <div class="col  text-center" style={{ padding: "30px 0" }}>
                        <h1>abstract</h1>
                    </div>

                    <div class="row" >
                        <div class="col" style={{ padding: "20px 60px" }}>
                            <p>The article described what algorithms are, without going too deep, and then delved into the history, usage, and examples of algorithms, including sorting, image recognition, machine learning, and searching. Ultimately, he concluded that algorithms are a powerful tool that help people solve problems efficiently and effectively.</p>
                        </div>
                    </div>
                    
                    <div class="row" >
                        <div class="col" style={{ padding: "20px 60px" }}>
                            <p> <span style={{ fontWeight: 600 }}>Palavra chave:</span> Algorithms</p>
                        </div>
                    </div>
                </div>
            </div>

            <Navegadores next={"/folha-rosto"} prev={"/sumario"} />
        </>
    );
}

export default Resumo;
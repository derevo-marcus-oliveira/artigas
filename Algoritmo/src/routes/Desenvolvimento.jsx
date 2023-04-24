

import Navegadores from "../components/Navegadores";
import Navegacao from "../components/Navegacao";

function Desenvolvimento() {
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
        }
    ]
    return (
        <>

            <Navegacao routes={route} />
            <div className="folha " style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <div class="row" >
                    <div class="col  text-center" style={{ padding: "30px 0" }}>
                        <h1>Desenvolvimento</h1>
                    </div>

                    <div class="row" >
                        <div class="col" style={{ padding: "20px 60px" }}>
                            <p>Os algoritmos têm uma longa história e foram usados há muito tempo antes da existência dos computadores. Alguns dos primeiros exemplos de algoritmos incluem os usados pelos antigos egípcios para calcular a área de um terreno ou para construir uma pirâmide. Esses algoritmos foram escritos em papiro e passados de geração em geração.</p>

                            <p>Com o advento da computação, os algoritmos se tornaram ainda mais importantes. Eles são usados para uma variedade de propósitos, incluindo processamento de imagens, reconhecimento de fala, análise de dados, criptografia e muito mais. Um exemplo comum de algoritmo é o algoritmo de ordenação. Existem vários algoritmos de ordenação diferentes, cada um com seus pontos fortes e fracos. O algoritmo de ordenação mais comum é o algoritmo "bubble sort", que é relativamente simples de entender e implementar.</p>

                            <p>Os algoritmos também são amplamente utilizados na inteligência artificial e no aprendizado de máquina. Por exemplo, um algoritmo de aprendizado de máquina pode ser treinado para reconhecer rostos em uma imagem. O algoritmo é alimentado com muitas imagens de rostos diferentes, e ele aprende a reconhecer os recursos que são comuns a todos os rostos. Quando o algoritmo é apresentado a uma nova imagem, ele pode usar o que aprendeu para determinar se a imagem contém um rosto humano ou não.</p>

                            <p>Outro exemplo de algoritmo é o algoritmo de busca. Existem vários algoritmos de busca diferentes, incluindo a busca em largura, a busca em profundidade e a busca A*. Esses algoritmos são usados em muitas áreas diferentes, incluindo jogos de computador, navegação na web e navegação de robôs.</p>

                        </div>
                    </div>
                </div>
            </div>
            <Navegadores next={"/introducao"} prev={"/conclusao"} />
        </>
    );
}

export default Desenvolvimento;
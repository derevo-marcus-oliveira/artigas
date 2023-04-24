
import Navegadores from "../components/Navegadores";
import Navegacao from "../components/Navegacao";


function FolhaRosto() {
    var route = [
        {
            route: "/",
            name: "Capa"
        },
        {
            route: "/folha-rosto",
            name: "Folha de Rosto"
        }
    ]
    return (

        <>
            <Navegacao routes={route} />

            <div className="folha text-center">

                <div className="folha_cabecalho">

                    <div class="row">
                        <div class="col">
                            <p>Marcus de Oliveira</p>
                        </div>
                    </div>
                </div>

                <div className="folha_titulo">

                    <div class="row">
                        <div class="col">

                            <h1>Algoritmo</h1>
                        </div>
                        <div class="row text-start p-5">
                            <div class="col ">
                            </div>
                            <div class="col">
                            </div>
                            <div class="col">
                                <p>Algoritmos é uma parte fundamental da computação e da tecnologia em geral.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="folha_rodape">
                    <div class="row">
                        <div class="col">
                            <p>Cuiabá</p>
                            <p>2023</p>
                        </div>
                    </div>
                </div>
            </div>

            <Navegadores next={"/"} prev={"/epigrafe"} />
        </>
    );
}

export default FolhaRosto;
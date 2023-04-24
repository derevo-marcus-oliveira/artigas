
import Navegadores from "../components/Navegadores";
import Navegacao from "../components/Navegacao";

function Epigrafe() {
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
            name: "Epígrafe "
        }
    ]

    return (
        <>
            <Navegacao routes={route} />

            <div className="folha text-center">

                <div className="folha_cabecalho">
                </div>

                <div className="folha_titulo">

                    <div class="row p-5" >
                        <div class="col">

                        </div>
                        <div class="row text-center ">
                            <div class="col">

                            </div>
                            <div class="col p-3">
                                
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">

                        </div>
                        <div class="row text-center ">
                            <div class="col">

                            </div>

                            <div class="col p-3">
                                <p>Uma forma de lembrar quem você é, é lembrando quem são seus heróis.</p>
                            </div>
                        </div>
                        <div class="row text-end ">
                            <div class="col">

                            </div>
                            <div class="col">
                                <p> <span style={{fontWeight: 600, fontStyle: "italic"}}>Steve Jobs.</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="folha_rodape">
                </div>
            </div>

            <Navegadores next={"/folha-rosto"} prev={"/resumo"} />

        </>
    );
}

export default Epigrafe;
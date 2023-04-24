
import { Link } from "react-router-dom";

function Navegadores({next, prev}) {
    
    return (
        <div class="row">
            <div class="col text-end">
                <Link to={next}><i class="bi bi-arrow-left"></i> Anterior</Link>
            </div>
            |
            <div class="col">
                <Link to={prev}> Proximo <i class="bi bi-arrow-right"></i></Link>
            </div>
        </div>

    );
}

export default Navegadores;
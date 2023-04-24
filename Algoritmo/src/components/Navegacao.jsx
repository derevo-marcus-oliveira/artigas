
import { Link } from "react-router-dom";

function Navegacao({ routes }) {

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb p-2">
                {routes.map((route) => (
                    <Link to={route.route} className="breadcrumb-item active" aria-current="page">{route.name}</Link>
                ))}
            </ol>
        </nav>
    );
}

export default Navegacao;
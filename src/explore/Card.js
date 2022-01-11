
import { Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
function Card() {
    return (

        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col col-lg-4">

                </div>
            </div>

            <p>Descubrir usuarios</p>
            <div className="card text-center" >
                <div className="card-body">
                    <h3 className="card-title">Desafiogram</h3>
                    <Link to={'/Signup'}>
                        <Button variant="link">
                            Signup
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;

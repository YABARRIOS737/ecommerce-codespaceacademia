import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <div className="row ">
            <div className="col-md-12">
                <nav className="navbar navbar-expand-lg">
                    <div>
                    </div>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><img src={"images/Logo-blanco.png"} alt={"Logo Code"} width={140} /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/la-escuela">La escuela</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/nuestros-cursos">Nuestros cursos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contacto">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
            <div>
                <div className=" col-md-12  d-flex justify-content-center align-self-center">
                <CartWidget />
            </div>
            
            </div>
        </div>
    )
}

export default Navbar;
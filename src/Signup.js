import React from 'react'

import PropTypes from 'prop-types'
import { Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
export default function Signup({ handleSubmit, ...props }) {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col col-lg-8">
                    hola parte 2
                </div>
                <div className="col col-lg-4">
                    <div className="card text-center" >
                        <div className="card-body">
                            <h3 className="card-title">Desafiogram</h3>
                            <p className="text-muted card-text">Registrate para que veas el clon de Instragram</p>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="username">
                                    <Form.Control
                                        type="text"
                                        value={props.username}
                                        name='Username'
                                        placeholder="nombre usuario"
                                        onChange={props.handleUserNamedChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Control
                                        type="password"
                                        value={props.password}
                                        name='Password'
                                        placeholder="Password"
                                        onChange={props.handlePasswordChange}
                                    />
                                </Form.Group>
                                <div className="d-grid  col-6 mx-auto">
                                    <Button id='form-login-button'>
                                        Sing up
                                    </Button>
                                </div>

                            </Form>
                            <p className="text-center text-muted ">
                                Ya tienes cuenta Login?<Link to={'/Login'}>
                                    <Button variant="link">
                                        Login
                                    </Button>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

Signup.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    username: PropTypes.string,
}
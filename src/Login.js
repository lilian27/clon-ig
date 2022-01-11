import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'
import { Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import usuarioService from './services/usuarios'

export default function LoginForm() {

  const [user, setUser] = useState([])
  const [password, setPassword] = useState([])
  const [token, setToken] = useState([])

  const handleUserChange = (event) => {
    setUser(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }


  const validateUser = (event) => {
    event.preventDefault()

    if (user.length > 0 && password.length > 0) {
      event.preventDefault()

      const noteObject = {
        email: user,
        password: password
      }

      usuarioService
        .login(noteObject)
        .then(response => {
          console.log(response);
          setToken(response.token)
          localStorage.setItem('token', JSON.stringify(token));
        })

    }
  }

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-4">
          <div className="card text-center" >
            <div className="card-body">
              <h3 className="card-title">Desafiogram</h3>
              <Form onSubmit={validateUser}>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Control
                    type="text"
                    value={user}
                    name='Username'
                    placeholder="correo de usuario usuario"
                    onChange={handleUserChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Control
                    type="password"
                    value={password}
                    name='Password'
                    placeholder="Password"
                    onChange={handlePasswordChange}
                  />
                </Form.Group>
                <div className="d-grid gap-2 col-3 mx-auto">

                  <Button type="submit">
                    Login
                  </Button>

                </div>

              </Form>
              <p className="text-center text-muted ">
                No tienes cuenta?<Link to={'/Signup'}>
                  <Button variant="link">
                    Signup
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

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.string,
}
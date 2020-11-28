import React, { useState } from "react";

import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <section className="row justify-content-center">
      <Container>
        <Row>
          <Col className="login mt-5">
            <h4 className="p-3 mt-sm-2 page-header">Login</h4>
            <Form className="login-form p-4" onSubmit={handleFormSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  // id="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="login-submit btn-border"
              >
                Submit
              </Button>
            </Form>
            {error && (
              <div style={{ color: "red" }}>
                Login attempt failed. Please try again.
              </div>
            )}
            <Card>
              <Card.Body>
                Need to create an account? Head to the{" "}
                <Link to="/signup">signup</Link> page
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;

import React, { useState } from "react";

import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

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

    // use the try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="row justify-content-center">
      <Col>
        <h4 className="p-3 mt-sm-2 mt-5 page-header">Signup</h4>
        <Form className="p-4" onSubmit={handleFormSubmit}>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              type="firstName"
              placeholder="John"
              value={formState.firstName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              type="lastName"
              placeholder="Doe"
              value={formState.lastName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="email@place.com"
              value={formState.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="12345678"
              // id="password"
              value={formState.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button className="btn-border" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {error && (
          <div style={{ color: "red" }}>
            Unable to create an account. Please try again.
          </div>
        )}
      </Col>
    </section>
  );
};

export default Signup;

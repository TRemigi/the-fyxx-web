import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { QUERY_ARTISTS } from "../../utils/queries";
import { ADD_ARTIST } from "../../utils/mutations";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

const NewArtistForm = () => {
  const [addArtist] = useMutation(ADD_ARTIST, {
    update(cache, { data: { addArtist } }) {
      cache.modify({
        broadcast: true,
        fields: {
          artists(existingArtists = []) {
            const newArtistRef = cache.writeFragment({
              data: addArtist,
              fragment: gql`
                fragment NewArtist on Artist {
                  _id
                  firstName
                  lastName
                  email
                  bio
                  pieces {
                    _id
                  }
                  favoritedBy {
                    _id
                  }
                }
              `,
            });
            return [...existingArtists, newArtistRef];
          },
        },
      });
    },
  });

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addArtist({
        variables: { ...formState },
      });

      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        bio: "",
      });

      console.log("New Artist Created");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group as={Row}>
        <Form.Label column sm="2">
          First Name:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            placeholder="John"
            name="firstName"
            type="firstName"
            id="firstName"
            value={formState.firstName}
            onChange={handleChange}
          ></Form.Control>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Last Name:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            placeholder="Doe"
            name="lastName"
            type="lastName"
            id="lastName"
            value={formState.lastName}
            onChange={handleChange}
          ></Form.Control>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Email:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            placeholder="artist@place.com"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          ></Form.Control>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Bio:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            placeholder="Lorem Ipsum..."
            name="bio"
            type="bio"
            id="bio"
            value={formState.bio}
            onChange={handleChange}
          ></Form.Control>
        </Col>
      </Form.Group>
      <Button type="submit" className="mt-4 btn-border">
        Add Artist
      </Button>
    </Form>
  );
};

export default NewArtistForm;

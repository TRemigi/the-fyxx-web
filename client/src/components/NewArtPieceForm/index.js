import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { QUERY_ARTISTS } from "../../utils/queries";
import { ADD_ARTPIECE } from "../../utils/mutations";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

const NewArtPieceForm = ({ artistId }) => {
  const [addArtPiece] = useMutation(ADD_ARTPIECE, {
    update(cache, { data: { addArtPiece } }) {
      cache.modify({
        broadcast: true,
        fields: {
          artists(existingArtPieces = []) {
            const newArtPieceRef = cache.writeFragment({
              data: addArtPiece,
              fragment: gql`
                fragment NewArtPiece on ArtPiece {
                  _id
                  artist {
                    _id
                    firstName
                    lastName
                  }
                  pieceName
                  media
                  price
                }
              `,
            });
            return [...existingArtPieces, newArtPieceRef];
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
      await addArtPiece({
        variables: { artist: artistId, ...formState },
      });

      setFormState({
        pieceName: "",
        media: "",
        price: "",
      });

      console.log("New Art Piece Created");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Art Piece Name:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            placeholder="Art Piece Name"
            name="pieceName"
            type="pieceName"
            id="pieceName"
            value={formState.pieceName}
            onChange={handleChange}
          ></Form.Control>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Media:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            placeholder="Oil and Pastel on Canvas"
            name="media"
            type="media"
            id="media"
            value={formState.media}
            onChange={handleChange}
          ></Form.Control>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Price:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            placeholder="500.00"
            name="price"
            type="price"
            id="price"
            value={formState.price}
            onChange={handleChange}
          ></Form.Control>
        </Col>
      </Form.Group>
      <Button type="submit" className="mt-4 btn-border">
        Continue
      </Button>
    </Form>
  );
};

export default NewArtPieceForm;

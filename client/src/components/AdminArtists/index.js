import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_ARTISTS } from "../../utils/queries";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Row, Col } from "react-bootstrap";

import NewArtistForm from "../NewArtistForm";

const AdminArtists = () => {
  const { loading, data } = useQuery(QUERY_ARTISTS);

  let { artists } = data || {};

  console.log(artists);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className="row justify-content-center">
        <Button
          className="mr-auto mt-5 ml-5 neomorph-round"
          onClick={handleShow}
        >
          Add New Artist
        </Button>

        <Modal show={show} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>New Artist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewArtistForm />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="col-12"
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>

      <section className="row justify-content-center mt-5">
        {artists &&
          artists.map((artist) => (
            <Card className="col-11 mb-5 admin-card">
              <Card.Header className="text-center">
                {artist.firstName} {artist.lastName}
              </Card.Header>
              <Tab.Container id="left-tabs-example" defaultActiveKey="info">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="info">Info</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="artPieces">Art Pieces</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="stats">Stats</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="info">
                        <Card.Body className="m-2">
                          <Card.Title>Email</Card.Title>
                          <Card.Link
                            rel="external"
                            href={"mailto:" + artist.email}
                            target="_blank"
                          >
                            {artist.email}
                          </Card.Link>
                          <Card.Title className="mt-3">Bio</Card.Title>
                          <Card.Text>{artist.bio}</Card.Text>
                          <Button variant="primary">Edit Info</Button>
                        </Card.Body>
                      </Tab.Pane>
                      <Tab.Pane eventKey="artPieces">
                        <Card.Body className="m-2">
                          <Card.Text>
                            <p>{artist.pieces.length} pieces</p>
                          </Card.Text>
                          {artist.pieces.map((piece) => (
                            <>
                              <Card.Title>{piece.pieceName}</Card.Title>
                              <Card.Text>{piece.media}</Card.Text>
                            </>
                          ))}
                          <Button variant="primary">Add Art Piece</Button>
                        </Card.Body>
                      </Tab.Pane>
                      <Tab.Pane eventKey="stats">
                        <Card.Body className="m-2">
                          <Card.Text>
                            <p>
                              {artist.firstName} {artist.lastName} has been
                              favorited by {artist.favoritedBy.length} users
                            </p>
                          </Card.Text>
                        </Card.Body>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Card>
          ))}
      </section>
    </>
  );
};

export default AdminArtists;

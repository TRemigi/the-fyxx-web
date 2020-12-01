import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_ARTISTS } from "../../utils/queries";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Row, Col } from "react-bootstrap";

import NewArtistModal from "../NewArtistModal";
import ImageUploadModal from "../ImageUploadModal";
import NewArtPieceModal from "../NewArtPieceModal";

const AdminArtists = () => {
  const { loading, data } = useQuery(QUERY_ARTISTS);

  let { artists } = data || {};

  console.log(artists);

  const [currentArtist, setCurrentArtist] = useState("");
  const [showNewArtist, setShowNewArtist] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [showNewArtPiece, setShowNewArtPiece] = useState(false);

  const handleAddArtPiece = (artistId) => {
    console.log(artistId);
    setCurrentArtist(artistId);
    setShowNewArtPiece(true);
  };

  return (
    <>
      <section className="row justify-content-center">
        <Button
          className="mr-auto mt-5 ml-5 neomorph-round"
          onClick={() => setShowNewArtist(true)}
        >
          Add New Artist
        </Button>
        <NewArtistModal
          showNewArtist={showNewArtist}
          setShowNewArtist={setShowNewArtist}
        />
        <ImageUploadModal
          showUpload={showUpload}
          setShowUpload={setShowUpload}
        />
        <NewArtPieceModal
          showNewArtPiece={showNewArtPiece}
          setShowNewArtPiece={setShowNewArtPiece}
          artistId={currentArtist}
        />
      </section>

      <section className="row justify-content-center mt-5">
        {artists &&
          artists.map((artist) => (
            <Card key={artist.firstName} className="col-11 mb-5 admin-card">
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
                      <Nav.Item>
                        <Nav.Link eventKey="delete">Delete Artist</Nav.Link>
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
                          <Button
                            variant="primary"
                            onClick={() => handleAddArtPiece(artist._id)}
                            className="mr-2"
                          >
                            Add Art Piece
                          </Button>
                          <Button
                            variant="primary"
                            onClick={() => setShowUpload(true)}
                          >
                            Upload Images
                          </Button>
                          <Card.Text className="mt-4">
                            {artist.pieces.length} pieces
                          </Card.Text>
                          {artist.pieces.map((piece) => (
                            <>
                              <Card.Title>{piece.pieceName}</Card.Title>
                              <Card.Text>{piece.media}</Card.Text>
                            </>
                          ))}
                        </Card.Body>
                      </Tab.Pane>
                      <Tab.Pane eventKey="stats">
                        <Card.Body className="m-2">
                          <Card.Text>
                            {artist.firstName} {artist.lastName} has been
                            favorited by {artist.favoritedBy.length} users
                          </Card.Text>
                        </Card.Body>
                      </Tab.Pane>
                      <Tab.Pane eventKey="delete">
                        <Card.Body className="m-2">
                          <Card.Title>Delete</Card.Title>
                          <Button>Delete Artist</Button>
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

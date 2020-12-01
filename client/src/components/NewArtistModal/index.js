import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import NewArtistForm from "../NewArtistForm";

const NewArtistModal = ({ showNewArtist, setShowNewArtist }) => {
  return (
    <Modal
      show={showNewArtist}
      onHide={() => setShowNewArtist(false)}
      size="lg"
      centered
    >
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
          onClick={() => setShowNewArtist(false)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewArtistModal;

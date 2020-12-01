import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import NewArtPieceForm from "../NewArtPieceForm";

const NewArtPieceModal = ({
  showNewArtPiece,
  setShowNewArtPiece,
  artistId,
}) => {
  return (
    <Modal
      show={showNewArtPiece}
      onHide={() => setShowNewArtPiece(false)}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>New Artist</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NewArtPieceForm artistId={artistId} />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="col-12"
          onClick={() => setShowNewArtPiece(false)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewArtPieceModal;

import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ImageUploadForm from "../ImageUploadForm";

const ImageUploadModal = ({ showUpload, setShowUpload }) => {
  return (
    <Modal
      show={showUpload}
      onHide={() => setShowUpload(false)}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>New Artist</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ImageUploadForm />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="col-12"
          onClick={() => setShowUpload(false)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageUploadModal;

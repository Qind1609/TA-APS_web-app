import React from "react";
import { Modal } from "react-responsive-modal";

const LoadingModal = ({ message }) => {
  return (
    <Modal
      open={true}
      center={true}
      showCloseIcon={false}
      closeOnEsc={false}
      closeOnOverlayClick={false}
      classNames={{ overlay: "customOverlay", modal: "customModal"}}
      >
      <span className="text-xl font-medium mb-4">{message}</span>
    </Modal>
  )
}

export default LoadingModal;
import React, { useCallback, useRef, useState } from "react";

import Button from "@atlaskit/button/standard-button";
import Modal from "react-bootstrap/Modal";

import { ModalTransition } from "@atlaskit/modal-dialog";

export default function ModalContainer({
  open,
  setOpen,
  title,
  children,
  onSubmit = null,
}) {
  return (
    <>
      <ModalTransition>
        {open && (
          <Modal show={open} onHide={() => setOpen(false)}>
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
              <Button appearance="subtle" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              {onSubmit && (
                <Button appearance="primary" onClick={() => onSubmit()}>
                  Submit
                </Button>
              )}
            </Modal.Footer>
          </Modal>
        )}
      </ModalTransition>
    </>
  );
}

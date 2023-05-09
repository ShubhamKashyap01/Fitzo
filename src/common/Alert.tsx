import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const AlertDismiss = ({ message, setError, variant="danger" }) => {
  const [show, setShow] = useState(true);

  const onClose = () => {
    setShow(false);
    setError("");
  };
  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 5000);
  });

  if (show) {
    return (
      <Alert
        variant={variant}
        onClose={onClose}
        dismissible
        style={{
          position: "fixed",
          minWidth: " 400px",
          left: "calc(50% - 200px)",
          top: "24px",
          transition: "all 1s ease-in-out !important",
          zIndex: 9999,
        }}
      >
        <Alert.Heading style={{ fontSize: "1.2rem" }}>Oh snap!</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
};

export default AlertDismiss;

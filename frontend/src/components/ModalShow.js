import React from "react";
import { ModalActions, Consumer } from "../state/modal";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
  Dialog
} from "@material-ui/core";

export const ModalShow = () => {
  const { closeModal } = ModalActions;

  return (
    <Consumer>
      {({ open, title, content }) => (
        <Dialog open={open} onClose={closeModal}>
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {content}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModal} color="primary">
              Cancel
            </Button>
            <Button onClick={closeModal} color="primary" autoFocus>
              Accept
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Consumer>
  );
};

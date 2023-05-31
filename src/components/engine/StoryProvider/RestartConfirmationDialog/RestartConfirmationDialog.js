import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const RestartConfirmationDialog = (props) => {
  const { onAccept, onClose, open, ...otherProps } = props;

  return (
    <Dialog maxWidth="xs" open={open} {...otherProps}>
      <DialogTitle>Advertencia</DialogTitle>
      <DialogContent>
        Al reiniciar la historia, cualquier avance hecho hasta el momento se
        perderá. ¿Quieres continuar?
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Cancelar
        </Button>
        <Button onClick={onAccept}>Reiniciar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RestartConfirmationDialog;

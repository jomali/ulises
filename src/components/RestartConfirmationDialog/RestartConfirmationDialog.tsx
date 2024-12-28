import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const RestartConfirmationDialog: React.FC<IRestartConfirmationDialog> = (
  props
) => {
  const { onAccept, onClose, open, ...otherProps } = props;

  return (
    <Dialog maxWidth="xs" open={open} {...otherProps}>
      <DialogTitle>Volver al principio</DialogTitle>
      <DialogContent>
        Cualquier avance hecho hasta el momento se perderá. ¿Quieres continuar?
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button
          onClick={() => {
            onClose();
            onAccept();
          }}
        >
          Reiniciar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export interface IRestartConfirmationDialog {
  onAccept: () => void;
  onClose: () => void;
  open: boolean;
}

export default RestartConfirmationDialog;

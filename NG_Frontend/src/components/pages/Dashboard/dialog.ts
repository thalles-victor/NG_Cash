import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "@stitches/react";
import { X } from "phosphor-react";

export const DialogOverlay = styled(Dialog.Overlay, {
  background: "rgba(0 0 0 / 0.5)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "grid",
  placeItems: "center",
  overflowY: "auto",
})

export const DialogContent = styled(Dialog.Content, {
  minWidth: "300px",
  background: "white",
  color: "$black",
  padding: "30px",
  borderRadius: "4px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

export const DialogTitle = styled(Dialog.Title, {})

export const DialogDescription = styled(Dialog.Description, {
  marginBottom: "32px"
});

export const FieldSet = styled("fieldset", {
  border: "none"
});

export const ExitButton = styled(X, {
  justifyContent: "flex-end",
  "&:hover": {
    cursor: "pointer"
  }
})
import { styled } from "../../../../../styles";

export const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "18px",
})

export const Label = styled("label", {});

export const ValueInput = styled("input", {
  border: "2px solid black",
  padding: "10px 20px",
  borderRadius: "8px",
  maxWidth: "100px",

  fontWeight: "bold",
  fontSize: "32px",
  textAlign: "center",

  alignSelf: "center",
  marginBottom: "50px",
  marginTop: "50px",

  "&:focus": {
    outline: "none"
  }
});

export const Input = styled("input", {
  border: "none",
  borderBottom: "1px solid black",
  fontSize: "20px",
  paddingLeft: "8px",
  width: "100%",

  "&:focus": {
    outline: "none"
  }
});





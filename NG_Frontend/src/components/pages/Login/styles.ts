import { keyframes, styled } from "../../../styles";

const showAnimation = keyframes({
  from: {
    opacity: 0.4,
    transform: "translate(0px, -10px)"
  }, to: {
    opacity: 1,
    transform: "translate(0px, 0px)"
  }
})

export const LoginContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "70vh",
  
  h1: {
    marginBottom: "40px",
    animation: `${showAnimation} 1s`,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",
    height: "auto",
  },
  h3: {
    marginTop: "20px",

    transation: "color .25s",

    a: {
      color: "#5025F5",
      "&:hover": {
        color: "#9133F5",
      }
    }
  }
})

export const InputForm = styled("input", {
  fontSize: "20px",

  padding: "4px 0",
  margin: "10px 0",
  width: "100%",

  outline: "none",
  border: "none",
  borderBottom: "2px solid white",

  backgroundColor: "transparent",
  color: "$white",
});

export const ButtonSubmit = styled("button", {
  padding: "8px 0",
  marginTop: "20px",
  width: "100%",

  fontSize: "18px",
  fontWeight: "bold",

  border: "2px solid white",
  borderRadius: "8px",

  backgroundColor: "transparent",
  color: "$white",

  transition: "background-color .25s, color .25s, boxShadown .25s",

  "&:hover": {
    backgroundColor: "$white",
    color: "$black",
    boxShadow: "2px 3px 10px white",
    borderColor: "$black"
  }

});
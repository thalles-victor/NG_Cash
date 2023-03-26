import { styled } from "../../../../../styles";

export const ButtonContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",

})



export const BaseButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "10px 40px",
  fontSize: "18px",
  fontWeight: "bold",
  
  backgroundColor: "black",
  color: "white",
  borderRadius: "8px",
  border: "2px solid black",

  transition: "background-color .1s, color .1s",

  "&:hover": {
    backgroundColor: "white",
    color: "Black"
  },

  svg: {
    lineHeight: 0,
  }
})


export const BackButton = styled(BaseButton, {})

export const NextButton = styled(BaseButton, {});
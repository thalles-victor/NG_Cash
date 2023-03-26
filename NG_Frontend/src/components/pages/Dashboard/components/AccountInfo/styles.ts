import Img from "next/image";
import { styled } from "../../../../../styles";

export const AccountContainer = styled("div", {
  display: "grid",
  gridTemplateAreas: "'A C' 'B B'",
  
});

export const Content = styled("div", {
  gridArea: "C",
  display: "flex",
  flexDirection: "column",
  gap: "2px 0",

  h2: {
    marginBottom: "20px",
    textDecoration: "underline",
  },

  marginBottom: "53px"
})

export const Avatar = styled(Img, {
  borderRadius: "50%",
  border: "2px solid black"
});

export const Footer = styled("div", {
  gridArea: "B"
  
  
})
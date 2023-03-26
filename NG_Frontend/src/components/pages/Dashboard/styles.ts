import { styled } from "@stitches/react";
import { keyframes } from "../../../styles";
import { showAll } from "../../../styles/animations";

const moveTopAnimation = keyframes({
  from: {
    opacity: 0.4,
    transform: "translate(0px, 10px)"
  }, to: {
    opacity: 1,
    transform: "translate(0px, 0px)"
  }
})

export const DashboardContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "*": {
    animation: `${showAll} 1s`
  }
})

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  h1: {
    alignSelf: "flex-start"
  }
});

export const InfoTransactionContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  width: "40vw",

  padding: "100px 100px",

  button: {
    alignSelf: "flex-start",
    padding: "5px 10px",
    fontSize: "24px",
    fontWeight: "bold",

    border: "2px solid white",
    borderRadius: "20px",
    backgroundColor: "$black-900",
    color: "$white",

    transition: "background-color .1s, color .1s",

    "&:hover": {
      backgroundColor: "$white",
      color: "$black"
    }
  }
})

export const BalanceContainer = styled("div", {
  border: "2px solid white",
  padding: "10px 20px",
  borderRadius: "8px",
  margin: "-8px 0",
  animation: `${moveTopAnimation} 1s`,
  boxShadow: "2px 2px 20px white"
  
})

export const History = styled("div", {
  alignSelf: "center",
  border: "1px solid",
  padding: "80px",
});
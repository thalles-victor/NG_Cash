import { keyframes, styled } from "../../../../../../../styles";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Drop } from "phosphor-react";

const moveDownShowAnimation = keyframes({
  from: {
    opacity: 0.4,
    transform: "translate(0px, -10px)",
  },
  to: {
    opacity: 1,
    transform: "translate(0px, 0px)",
  },
});

const moveRightShowAnimation = keyframes({
  from: {
    opacity: 0.4,
    transform: "translate(-5px, 0px)",
  },
  to: {
    opacity: 1,
    transform: "translate(0px, 0px)",
  },
});

export const FIlterContainer = styled("div", {
  alignSelf: "flex-end",
});

export const Root = styled(DropdownMenu.Root, {});

export const Trigger = styled(DropdownMenu.Trigger, {
  "&:hover": {
    cursor: "pointer",
  },
});

export const Content = styled(DropdownMenu.Content, {
  animation: `${moveDownShowAnimation} .25s`,

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",

  backgroundColor: "$white",
  borderRadius: "8px",

  padding: "4px 6px",
});

export const SubTrigger = styled(DropdownMenu.SubTrigger, {
  display: "flex",
  justifyContent: "space-between",
  margin: "2px 0px",

  borderRadius: "8px",
  padding: "2px 3px",

  width: "100%",

  fontSize: "18px",
  fontWeight: "bold",
  ouline: "none",

  color: "$black",

  "&:hover": {
    outline: "1px solid black",
    backgroundColor: "$black",
    color: "$white",
    cursor: "pointer",
  },
});

export const SubContent = styled(DropdownMenu.SubContent, {
  animation: `${moveRightShowAnimation} .25s`,

  fontSize: "16px",
  fontWeight: "bold",

  marginLeft: "3px",
  padding: "3px 10px",

  backgroundColor: "$white",

  borderRadius: "8px",
});

export const Item = styled(DropdownMenu.Item, {
  backgroundColor: "$white",
  color: "$black",

  fontSize: "16px",

  padding: "3px 4px",

  "&:hover": {
    outline: "1px solid black",
    backgroundColor: "$black",
    color: "$white",
    cursor: "pointer",
  },
  borderRadius: "8px",
});

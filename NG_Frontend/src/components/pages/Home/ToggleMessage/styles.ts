import { keyframes, styled } from "../../../../styles";

export const showAnimation = keyframes({
  from: {
    opacity: 0.5,
    
  }, to: {
    opacity: 1,
  }
})


export const ToggleContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "10px 0"
});

export const Title = styled("h1", {
  animation: `${showAnimation} 2s`
});
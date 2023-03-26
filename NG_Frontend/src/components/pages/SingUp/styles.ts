import { Checks } from "phosphor-react";
import { keyframes, styled } from "../../../styles";

const showAnimation = keyframes({
  from: {
    opacity: .4,
    transform: "translate(10px, 0px)"
  }, to: {
    opacity: 1,
    transform: "translate(0px, 0px)"
  }
})

const showAll = keyframes({
  from: {
    opacity: .4,
  }, to: {
    opacity: 1,
  }
})

export const SingUpContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "70vh",
  backgroundColor: "$bg",

  "*": {
    animation: `${showAll} 1s`
  },

  h1: {
    color: "$white",
    marginBottom: "40px",
    animation: `${showAnimation} 1s`
    
  },

  
  form: {
    // marginBottom: "600px",
    display: "flex",
    flexDirection: "column",

    width: "100%",

    button: {
      padding: "8px 0",
      marginTop: "20px",
      width: "100%",
      fontSize: "18px",
      fontWeight: "bold",

      backgroundColor: "transparent",
      color: "$white",

      border: "2px solid white",
      borderRadius: "8px",

      transition: "background-color .25s, color .25s, border-color .25s",

      "&:hover": {
        backgroundColor: "$white",
        color: "$black",
        transform: "translate(0px, -3px)",
        boxShadow: "2px 3px 10px white",
        borderColor: "$balck"
      }
    }
  }
});

const colorRotate = keyframes({
  "0%":  {
    opacity: .5
    
  }, "100%" : {
      opacity: 1,
  }
})

export const SelectAvatarField = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",

  marginBottom: "20px",

  

})

export const LabelImageFiled = styled("label", {
  marginTop: "10px",
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  
  
  "&:hover": {
    cursor: "pointer"
  },
  
  span: {
    fontSize: "20px"
  },

  img: {
    borderRadius: "50%",
    border: "2px solid white",
  },

  variants: {
    animation: {
      animation: {
        animation: `${colorRotate} 1s 1s infinite alternate`,
      },
      noAnimation: {
        animation: `none`,
      }
    }
  }
})

export const Input = styled("input", {
  fontSize: "20px",
  padding: "4px 0",
  paddingLeft: "8px",
  width: "400px",
  margin: "10px 0",
  border: "none",
  outline: "none",

  borderBottom: "2px solid white",
  backgroundColor: "$bg",
  color: "$white"
});

export const InputAvatar = styled("input", {
  display: "none",
});

export const ChecksIcon = styled(Checks, {
  position: "absolute",
  variants: {
    color: {
      able: {
        color: "green"
      },
      disable: {
        color: "red",
        opacity: "0.7"
      }
    }
  }
})

export const CatchphraseContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  gap: "1rem",
  marginTop: "20px",
  marginBottom: "70px",

  color: "$white"
})
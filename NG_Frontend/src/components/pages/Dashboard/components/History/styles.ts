import { styled } from "../../../../../styles";

export const HistoryContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: 1,

  padding: "1.25rem 2rem",

  border: "1px solid black",
  borderRadius: "8px",
  marginTop: "70px",
  backgroundColor: "",
  boxShadow: "1px 1px 5px rgba(255, 255, 255, .25)",
});

export const HistoryList = styled("div", {
  flex: 1,
  overflow: "auto",
  // marginTop: "2rem"
});

export const Table = styled("table", {
  width: "100%",
  borderCollapse: "collapse",
  minWidth: "600px",

  th: {
    backgroundColor: "gray",
    padding: "1rem",
    textAlign: "left",
    fontSize: "0.875rem",
    lineHeight: "1.6",

    "&:first-child": {
      borderTopLeftRadius: "6px",
      paddignLeft: "1.5rem",
    },

    "&:last-child": {
      borderTopRightRadius: "6px",
      paddignRight: "1.5rem",
    },
  },

  td: {
    paddingTop: ".25rem",
    paddingBottom: ".25rem",
    paddingLeft: "1rem",

    button: {
      border: "none",
      borderRadius: "3px",
      padding: ".25rem",
      width: "100%",
      backgroundColor: "#747F7F",
      transition: "background-color 150ms, color 150ms",
      color: "white",
      fontSize: "1rem",

      "&:hover": {
        backgroundColor: "white",
        color: "#000",
      },
    },
  },
});

export const Header = styled("tr", {
  border: "1px solid",
});

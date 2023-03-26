import { globalCss } from '.'

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body:  {
    "-webkit-font-smoothing": "antialised",
    color: "$white",
    backgroundColor: "$bg",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400
  },

  "button, a": {
    "&:hover": {
      cursor: "pointer"
    }
  }
})
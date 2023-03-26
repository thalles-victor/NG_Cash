
import {createStitches  } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  styled,
  theme
} = createStitches({
  theme: {
    colors: {
      white: "#fff",
      "bg": "#151515",
      "black-600": "#252525",
      "black-900": "#151515",
      "black": "#000",
    }
  },
  media: {
    bp0: '(max-width: 414px)',
    // bp1: '(max-width: 866px)',
    // bp2: '(max-width: 1170px)',
    // bp3: '(max-width: 640px)',
    // bp4: '(max-width: 768px)',
    // bp5: '(max-width: 1024px)',
  }
})
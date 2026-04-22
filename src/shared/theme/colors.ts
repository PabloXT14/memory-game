export const colors = {
  white: "#FFFFFF",
  black: "#000000",

  grayscale: {
    100: "#E4E4EB",
    200: "#ADADC3",
    300: "#727297",
    400: "#26264A",
    500: "#12122B",
    600: "#090916",
  },

  accent: {
    purple: "#C27CFB",
    blue: "#7DAFFF",
    cyan: "#55EAE1",
  },

  semantic: {
    success: "#32D74B",
    error: "#FF453A",
    warning: "#FF9F0A",
    info: "#0A84FF",
  },

  feedback: {
    info: "#8FE93C",
    success: "#1DB995",
    danger: "#F76F63",
  },

  ranking: {
    gold: "#E1B825",
    silver: "#5EA2B2",
    bronze: "#D48448",
  },
} as const

export const gradients = {
  primary: ["#BF5AF2", "#0A84FF"],
  card: ["#12122B", "#23233D", "#12122B"],

  colorful: ["#AA2AF4", "#6121EB", "#1DBA95"],
  neutral: ["#AA2AF4", "#6121EB", "#1DBA95"],
  cyanDark: ["#11212B", "#12122B"],
  blueDark: ["#212847", "#12122B"],
  purpleDark: ["#271C3D", "#12122B"],
} as const

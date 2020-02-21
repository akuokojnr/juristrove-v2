export default {
  colors: {
    text: "#3c4257",
    moderateCyan: "#0A8080",
    moderateCyan2: "#52ADA2",
    darkCyan: "#20433E",
    lightCyan: "#CAE6E2",
    gray: "#b2b8b0",
    lightGray: "#F2F5F4",
    grayishBlue: "#F6F9FB",
    limeGray: "#e7eceb",
    smallText: "#657786",
    white: "#FFF",
    black: "#000",
  },

  button: `
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #FFF;
    padding: 0.7rem;
    font-size: 1rem;
    cursor: pointer;

    :hover {
      background-color: rgba(0, 0, 0, 0.88);
    }
  `,

  buttonPrimary: `
    cursor: pointer;
    border-radius: 6px;
    padding: 0.4rem 1.2rem;
    font-size: 1rem;
    outline: none;
    color: #20433E;
    background: #CAE6E2;
    border: none;
  `,

  boxShadow: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;`,
  boxShadow1: `rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;`,
  boxShadow3: `rgba(79, 90, 89, 0.16) 0px 32px 32px -16px, rgba(79, 90, 89, 0.12) 0px 28px 28px -16px;`,
  activeBoxShadow: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(32, 68, 64, 0.32) 0px 0px 0px 3px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;`,

  maxWidth: `1440px`,
};

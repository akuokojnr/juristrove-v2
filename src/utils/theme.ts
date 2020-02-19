export default {
  colors: {
    text: "#3c4257",
    moderateCyan: "#0A8080",
    lightGray: "#FAFAFA",
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

  boxShadow: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;`,
  boxShadow1: `rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;`,
  activeBoxShadow: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(32, 68, 64, 0.32) 0px 0px 0px 3px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;`,

  maxWidth: `1500px`,
};

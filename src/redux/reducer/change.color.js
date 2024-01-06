import { GREEN, RED, WHITE } from "../constant/action.type";

const initialColor = WHITE;
const changeTheColor = (state = initialColor, action) => {
  switch (action.type) {
    case RED:
      return RED;
    case GREEN:
      return GREEN;
    default:
      return state;
  }
};
export default changeTheColor;

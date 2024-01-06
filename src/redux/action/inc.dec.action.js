import { DECREMENT, INCREMENT } from "../constant/action.type";

export const increment = (num) => {
  return { type: INCREMENT, payload: num };
};
export const decrement = (num) => {
  return { type: DECREMENT, payload: num };
};

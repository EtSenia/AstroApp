import {ObservableState} from "./Observable";

export const state = new ObservableState<number>(0);

export function assignEvents() {
    document.querySelectorAll(".rainbow-button").forEach((button) => {
      button.removeEventListener("click", handleClick); // Evita duplicados
      button.addEventListener("click", handleClick);
    });
  }
  function handleClick() {
    state.setState(state.getState() + 1);
  }
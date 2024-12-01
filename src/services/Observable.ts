type Listener<T> = (state: T) => void;

export class ObservableState<T> {
  private state: T;
  private listeners: Listener<T>[] = [];

  constructor(initialState: T) {
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  setState(newState: T) {
    this.state = newState;
    this.listeners.forEach((listener) => listener(newState));
  }

  subscribe(listener: Listener<T>) {
    this.listeners.push(listener);
    listener(this.state); // Emit the current state immediately

    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }
}
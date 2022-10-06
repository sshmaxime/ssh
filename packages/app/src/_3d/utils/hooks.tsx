import { useRef } from "react";

export function useR3fState<F>(defaultValue: F): [React.MutableRefObject<F>, Function] {
  const ref = useRef<F>(defaultValue);

  const updateRef = (newValue: F) => {
    ref.current = newValue;
  };

  return [ref, updateRef];
}

import { useEffect, useState } from "react";

export function useLocalStorageState(initalState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    console.log(JSON.parse(storedValue));
    return storedValue ? JSON.parse(storedValue) : initalState;
  });
  // Handling storing watched movie into the local storage of the current domain
  useEffect(
    function () {
      //Creating the logic into the effect hook to avoid having to add and remove in two seperate events;
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}

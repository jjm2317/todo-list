import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, initialState: any) => {
  const [state, setState] = useState(() => {
    const result = window.localStorage.getItem(key);
    return result ? JSON.parse(result) : initialState;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;

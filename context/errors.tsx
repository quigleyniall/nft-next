import React, { useState, useEffect } from "react";

export const Errors = React.createContext({
  setError: (a: string) => {},
  errorMsg: '',
  errorSet: true});

export const ErrorsProvider = ({ children }) => {
    const [error, setError] = useState('');

    useEffect(() => {
      setError('')
    }, [])

  return (
    <Errors.Provider
        value={{
            setError,
            errorMsg: error,
            errorSet: true
        }}
      >
       {children}
      </Errors.Provider>
  
  );
};

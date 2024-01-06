import React, { useState, useEffect } from "react";

export const Snackbar = React.createContext({
  messageList: [],
  addMessage: (str: string, type: string) => {},
});

export const SnackbarProvider = ({ children }) => {
  const [messageList, setMessageList] = useState([]);

  const addMessage = (str: string, type: string) => {
    setMessageList((prev) => [...prev, { message: str, type }]);
  };

  return (
    <Snackbar.Provider
      value={{
        messageList,
        addMessage,
      }}
    >
      {children}
    </Snackbar.Provider>
  );
};

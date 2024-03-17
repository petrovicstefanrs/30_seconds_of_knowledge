/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useContext } from 'react';

import ToastList from './ToastList';

const ToastContext = React.createContext({
  addToast: () => console.error('Not inside ToastContext'),
  removeToast: () => console.error('Not inside ToastContext'),
});

const DEFAULT_TIMEOUT = 3000;

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const addToast = useCallback((newToast) => {
    const id = Date.now();
    setToasts((oldToasts) => [
      ...oldToasts,
      {
        timeout: DEFAULT_TIMEOUT,
        ...newToast,
        id,
      },
    ]);
    return id;
  }, []);
  const removeToast = useCallback((id) => {
    setToasts((oldToasts) => oldToasts.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToast,
      }}
    >
      <>
        <ToastList toasts={toasts} />
        {children}
      </>
    </ToastContext.Provider>
  );
};

export const useShowToast = () => {
  const { addToast } = useContext(ToastContext);
  return useCallback((toast) => {
    return addToast(toast);
  });
};

export const useToast = () => {
  const showToast = useShowToast();
  return useCallback((message, options = {}) => {
    return showToast({
      ...options,
      message,
    });
  });
};

export const useHideToast = (id) => {
  const { removeToast } = useContext(ToastContext);
  return useCallback(() => {
    removeToast(id);
  });
};

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import PlainToast from '../PlainToast';

import { useHideToast } from './ToastController';

const Toast = ({ className, id, message, timeout }) => {
  const hide = useHideToast(id);

  useEffect(() => {
    if (!timeout) {
      return null;
    }
    const timer = setTimeout(hide, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <PlainToast className={className} onClose={hide} message={message} />;
};

Toast.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  message: PropTypes.string,
  timeout: PropTypes.number,
};

export default Toast;

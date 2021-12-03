import React from 'react';
import PropTypes from 'prop-types';

import Toast from './Toast';

import styles from './ToastList.module.scss';

const ToastList = ({ toasts }) => (
  <div className={styles.list}>
    {toasts.map(({ message, timeout, id }) => (
      <Toast
        className={styles.toast}
        message={message}
        timeout={timeout}
        id={id}
        key={id}
      />
    ))}
  </div>
);

ToastList.propTypes = {
  toasts: PropTypes.array,
};

export default ToastList;

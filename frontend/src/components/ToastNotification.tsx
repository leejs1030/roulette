import React, { useState, useEffect } from 'react';
import './ToastNotification.css';

export interface ToastMessage {
  id: string;
  type: 'info' | 'warning' | 'error' | 'success';
  message: string;
  duration?: number;
}

interface ToastNotificationProps {
  message: ToastMessage;
  onClose: (id: string) => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // 마운트 시 애니메이션 시작
    const timer = setTimeout(() => setIsVisible(true), 10);

    // 자동 종료 타이머
    const duration = message.duration || 3000;
    const autoCloseTimer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoCloseTimer);
    };
  }, [message.duration]);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onClose(message.id);
    }, 300); // 애니메이션 완료 후 제거
  };

  return (
    <div
      className={`toast-notification toast-${message.type} ${isVisible ? 'visible' : ''} ${isLeaving ? 'leaving' : ''}`}
      onClick={handleClose}
    >
      <div className="toast-content">
        <div className="toast-icon">
          {message.type === 'warning' && '⚠️'}
          {message.type === 'error' && '❌'}
          {message.type === 'info' && 'ℹ️'}
          {message.type === 'success' && '✅'}
        </div>
        <div className="toast-message">{message.message}</div>
        <button className="toast-close" onClick={handleClose}>
          ×
        </button>
      </div>
    </div>
  );
};

interface ToastContainerProps {
  messages: ToastMessage[];
  onClose: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ messages, onClose }) => {
  return (
    <div className="toast-container">
      {messages.map((message) => (
        <ToastNotification key={message.id} message={message} onClose={onClose} />
      ))}
    </div>
  );
};

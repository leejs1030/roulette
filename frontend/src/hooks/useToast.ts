import { useState, useCallback } from 'react';
import { ToastMessage } from '../components/ToastNotification';

let toastId = 0;

export const useToast = () => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback((
    message: string, 
    type: ToastMessage['type'] = 'info', 
    duration?: number
  ) => {
    const id = `toast-${++toastId}`;
    const newMessage: ToastMessage = {
      id,
      type,
      message,
      duration,
    };

    setMessages(prev => [...prev, newMessage]);
    return id;
  }, []);

  const removeToast = useCallback((id: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== id));
  }, []);

  const clearAllToasts = useCallback(() => {
    setMessages([]);
  }, []);

  // 편의 메소드들
  const showInfo = useCallback((message: string, duration?: number) => 
    addToast(message, 'info', duration), [addToast]);
  
  const showWarning = useCallback((message: string, duration?: number) => 
    addToast(message, 'warning', duration), [addToast]);
  
  const showError = useCallback((message: string, duration?: number) => 
    addToast(message, 'error', duration), [addToast]);
  
  const showSuccess = useCallback((message: string, duration?: number) => 
    addToast(message, 'success', duration), [addToast]);

  // 쿨타임 관련 특별 메소드
  const showCooldownWarning = useCallback((skillName: string, remainingSeconds: number) => {
    const message = `${skillName} 쿨타임 ${remainingSeconds}초 남음`;
    return addToast(message, 'warning', 2000);
  }, [addToast]);

  return {
    messages,
    addToast,
    removeToast,
    clearAllToasts,
    showInfo,
    showWarning,
    showError,
    showSuccess,
    showCooldownWarning,
  };
};

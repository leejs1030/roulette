import { useState, useCallback } from 'react';
import { ToastMessage } from '../components/ToastNotification';

let toastId = 0;

export const useToast = () => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);
  const [lastMessage, setLastMessage] = useState<{ message: string; type: ToastMessage['type'] } | null>(null);

  const addToast = useCallback((
    message: string, 
    type: ToastMessage['type'] = 'info', 
    duration?: number
  ) => {
    // 동일한 메시지와 타입의 토스트가 연속으로 나타나는 것을 방지
    if (lastMessage && lastMessage.message === message && lastMessage.type === type) {
      return '';
    }

    const id = `toast-${++toastId}`;
    const newMessage: ToastMessage = {
      id,
      type,
      message,
      duration,
    };

    // 기존 토스트를 모두 제거하고 새로운 토스트만 표시
    setMessages([newMessage]);
    setLastMessage({ message, type });
    
    // 일정 시간 후 lastMessage 초기화 (중복 방지가 너무 오래 지속되지 않도록)
    setTimeout(() => {
      setLastMessage(null);
    }, 1000);
    
    return id;
  }, [lastMessage]);

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

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const Clock = () => {
  const { language } = useLanguage();
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const getTimeMessage = () => {
    if (language === 'en') {
      return 'Current Time:';
    } else if (language === 'it') {
      return 'Orario attuale :';
    } else {
      return 'Current Time:';
    }
  };

  return (
    <div>
      <h2>{getTimeMessage()} {time}</h2>
    </div>
  );
};

export default Clock;
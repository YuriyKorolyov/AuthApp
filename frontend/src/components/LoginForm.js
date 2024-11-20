// src/components/LoginForm.js
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import QRCode from 'react-qr-code';
import { FaVk, FaGoogle } from 'react-icons/fa'; // Иконки ВКонтакте и Google
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [qrVisible, setQrVisible] = useState(false); // Показывать ли QR-код

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  const handleGoogleLogin = (response) => {
    console.log("Google login response:", response);
  };

  const handleVkLogin = () => {
    const vkAuthUrl = `https://oauth.vk.com/authorize?client_id=<YOUR_VK_CLIENT_ID>&display=popup&redirect_uri=<YOUR_REDIRECT_URI>&scope=email&response_type=token&v=5.131`;
    window.location.href = vkAuthUrl;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Добро пожаловать</h2>
      <p className={styles.subtitle}>Войдите, чтобы продолжить</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <input
            type="email"
            placeholder="Электронная почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Войти</button>
      </form>

      <div className={styles.socialButtons}>
        <button className={styles.googleButton} onClick={handleGoogleLogin}>
          <FaGoogle className={styles.socialIcon} /> Войти через Google
        </button>
        <button onClick={handleVkLogin} className={styles.vkButton}>
          <FaVk className={styles.socialIcon} /> Войти через ВКонтакте
        </button>
      </div>

      <button onClick={() => setQrVisible(!qrVisible)} className={styles.qrButton}>
        {qrVisible ? "Скрыть QR-код" : "Показать QR-код"}
      </button>

      {qrVisible && (
        <div className={styles.qrContainer}>
          <QRCode value="example://login/qr?token=someUniqueToken" size={128} />
        </div>
      )}

      <p className={styles.text}>
        Нет аккаунта? <a href="/signup" className={styles.link}>Зарегистрироваться</a>
      </p>
    </div>
  );
};

export default LoginForm;

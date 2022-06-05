import React from 'react';
import SocialBox from '@containers/SocialBox';
import styles from '@styles/sass/common/Footer.module.sass';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <SocialBox
        GitHub = 'https://github.com/danibosna'
        Twitter = 'https://twitter.com/danibosna'
        LinkedIn = 'https://www.linkedin.com/in/danibosna/'
      />
      <df-messenger
      intent="WELCOME"
      chat-title="BosnaBot"
      chat-icon="https://cdn.icon-icons.com/icons2/806/PNG/512/chat-31_icon-icons.com_65948.png"
      agent-id="88e28ace-0e81-4b05-931e-c27567baffba"
      language-code="es"
      className="chatBot"
      ></df-messenger>
    </footer>
  )
}

export default Footer;
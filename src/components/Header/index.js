import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import Logo from '../../assets/icons/logo.png';
import Notification from '../../assets/icons/notification_icon.png';
import Chat from '../../assets/icons/chat_icon.png';
import Menu from '../../assets/icons/mobile_menu.png';

export default function Header() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img className="logo" src={Logo} alt="youhack-logo" />
        </Link>
        <Link to="#">
          <img className="notification" src={Notification} alt="notification" />
        </Link>
        <Link to="#">
          <img className="chat" src={Chat} alt="chat" />
        </Link>

        <img className="menu" src={Menu} alt="menu" />
      </Content>
    </Container>
  );
}

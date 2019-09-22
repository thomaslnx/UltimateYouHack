import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  MainContainer,
  ContentContainer,
  MentorsSkills,
  MentorsDescription,
  ActionButtons,
  Header,
} from './styles';

import Footer from '../../components/Footer';

import Jill from '../../assets/icons/user_woman_02.png';
import Chris from '../../assets/icons/user_man_01.png';
import Albert from '../../assets/icons/user_man_02.png';
import Notification from '../../assets/icons/notification_icon.png';

import Logo from '../../assets/icons/logo.png';
import Chat from '../../assets/icons/chat_icon.png';
import Menu from '../../assets/icons/mobile_menu.png';

class Member1 extends Component {
  container = React.createRef();

  state = {
    open: false,
  };

  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };

  handleClickOutside = event => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  render() {
    return (
      <MainContainer>
        <Header>
          <div className="headerItems">
            <div className="linkHome">
              <a className="home" href="/">
                <img className="logo" src={Logo} alt="youhack-logo" />
              </a>
            </div>

            <div className="alert-container" ref={this.container}>
              <ul className="alerts-group">
                <li className="all-alerts">
                  <a
                    className="ancora"
                    onClick={this.handleButtonClick}
                    href="#"
                  >
                    <img src={Notification} alt="notification" />
                  </a>
                  <div
                    className={
                      this.state.open ? 'dropdown-menu show' : 'dropdown-menu'
                    }
                  >
                    <nav>
                      <div className="avatar">
                        <img className="user1" src={Jill} alt="msg-avatar" />
                      </div>

                      <div className="invitation">
                        <p>
                          Jill Valentine, sent you an
                          <strong> invitation </strong>
                        </p>
                      </div>

                      <p> 15m </p>
                    </nav>

                    <nav>
                      <div className="avatar1">
                        <img src={Chris} alt="msg-avatar" />
                      </div>

                      <div className="invitation">
                        <p>
                          Chris Redfield, sent you an
                          <strong> invitation </strong>
                        </p>
                      </div>

                      <p> 30m </p>
                    </nav>

                    <nav>
                      <div className="avatar2">
                        <img src={Albert} alt="msg-avatar" />
                      </div>

                      <div className="invitation">
                        <p>
                          Albert Wesker, sent you an
                          <strong> invitation </strong>
                        </p>
                      </div>

                      <p> 45m </p>
                    </nav>
                  </div>
                </li>
              </ul>
            </div>

            <div className="chat">
              <a href="#">
                <img src={Chat} alt="chatLogo" />
              </a>
            </div>

            <div className="menu">
              <a href="#">
                <img src={Menu} alt="menuLogo" />
              </a>
            </div>
          </div>
        </Header>

        <ContentContainer>
          <img src={Chris} alt="member-pic" />
          <MentorsSkills>
            <div>Business</div>
            <div>Back-End</div>
            <div>Front-End</div>
            <div>UI & Ux</div>
          </MentorsSkills>

          <MentorsDescription>
            <div>
              <span> Salompas Amorin </span>

              <p>
                Hello, my name is Salompas Amorin, i am a full-stack developer.
                My specialty is back-end. Passionate about technology and
                innovation.
              </p>
            </div>
          </MentorsDescription>

          <ActionButtons>
            <button> SEND INVITATION </button>
            <Link to="invitemembers">
              <button className="prev"> PREV </button>
            </Link>
            <Link to="member2">
              <button className="next"> NEXT </button>
            </Link>
          </ActionButtons>
        </ContentContainer>

        <Footer />
      </MainContainer>
    );
  }
}

export default Member1;

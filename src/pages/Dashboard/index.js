import React from 'react';
import { Link } from 'react-router-dom';
import {
  MainContainer,
  ContentContainer,
  CarouselContainer,
  Carousel,
  NavCarousel,
  DashActivity,
} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Hackathon from '../../assets/icons/Hackathon@2x.png';
import PaperPlane from '../../assets/icons/paper_plane.svg';

export default function Dashboard() {
  return (
    <MainContainer>
      <Header />

      <ContentContainer>
        <h1> Dashboard </h1>

        <CarouselContainer>
          <Carousel>
            <img src={Hackathon} alt="dashboard_pic" />

            <strong> YouHack Hackathon 2019 </strong>
          </Carousel>
        </CarouselContainer>

        <NavCarousel>
          <button data-index="0" style={{ background: '#706FD3' }}></button>
          <button data-index="1"> </button>
          <button data-index="2"> </button>
        </NavCarousel>

        <DashActivity>
          <div>
            <img src={PaperPlane} alt="paperplane-logo" />
            <Link to="/mentors"> Mentors </Link>
          </div>

          <div>
            <img src={PaperPlane} alt="paperplane-logo" />
            <Link to="/invitemembers"> Invite members </Link>
          </div>

          <div>
            <img src={PaperPlane} alt="paperplane-logo" />
            <Link to="/myinvitations"> My invitations </Link>
          </div>

          <div>
            <img src={PaperPlane} alt="paperplane-logo" />
            <Link to="/invitationrecieved"> Recieved </Link>
          </div>
        </DashActivity>
      </ContentContainer>

      <Footer />
    </MainContainer>
  );
}

import React from 'react';
import { MainContainer, ContentContainer, Select, Members } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Chris from '../../assets/icons/user_man_01.png';
import Wesker from '../../assets/icons/user_man_02.png';
import Claire from '../../assets/icons/user_woman_01.png';
import Jill from '../../assets/icons/user_woman_02.png';

export default function MyInvitations() {
  return (
    <MainContainer>
      <Header />

      <ContentContainer>
        <h1> Invitations Received </h1>
        <Select>
          <option value="" hidden>
            Filtrar por:
          </option>
          <option> Skills </option>
          <option> Fui com a cara ou não </option>
          <option> É parente do chefe? </option>
        </Select>

        <Members>
          <div className="user member1">
            <div className="avatar">
              <img src={Chris} alt="member-avatar" />
            </div>

            <div className="user-data">
              <p className="name"> Salompas Amorin </p>
              <p className="experience"> Back-End </p>
              <button> VIEW PROFILE </button>
            </div>
          </div>

          <div className="user member2">
            <div className="avatar">
              <img src={Jill} alt="member-avatar" />
            </div>

            <div className="user-data">
              <p className="name"> Vanessa Richmond </p>
              <p className="experience"> Back-End </p>
              <button> VIEW PROFILE </button>
            </div>
          </div>

          <div className="user member3">
            <div className="avatar">
              <img src={Wesker} alt="member-avatar" />
            </div>

            <div className="user-data">
              <p className="name"> Anderson Santos </p>
              <p className="experience"> Back-End </p>
              <button> VIEW PROFILE </button>
            </div>
          </div>

          <div className="user member4">
            <div className="avatar">
              <img src={Claire} alt="member-avatar" />
            </div>

            <div className="user-data">
              <p className="name"> Rachel Silva </p>
              <p className="experience"> Back-End </p>
              <button> VIEW PROFILE </button>
            </div>
          </div>

          <div className="user member5">
            <div className="avatar">
              <img src={Chris} alt="member-avatar" />
            </div>

            <div className="user-data">
              <p className="name"> Salompas Amorin </p>
              <p className="experience"> Back-End </p>
              <button> VIEW PROFILE </button>
            </div>
          </div>

          <div className="user member6">
            <div className="avatar">
              <img src={Chris} alt="member-avatar" />
            </div>

            <div className="user-data">
              <p className="name"> Salompas Amorin</p>
              <p className="experience"> Back-End </p>
              <button> VIEW PROFILE </button>
            </div>
          </div>
        </Members>
      </ContentContainer>

      <Footer />
    </MainContainer>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import {
  MainContainer,
  ContentContainer,
  MentorsSkills,
  MentorsDescription,
  ActionButtons,
} from './styles';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import Mentor from '../../assets/icons/mentor.png';

export default function Mentors() {
  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <img src={Mentor} alt="mentors-pic" />
        <MentorsSkills>
          <div>Pitch</div>
          <div>Technology</div>
          <div>Product</div>
          <div>UI & Ux</div>
        </MentorsSkills>

        <MentorsDescription>
          <div>
            <span> Obi-Wan Kenobi </span>

            <p>
              Hello, my name is Obi-Wan Kenobi, i am a expert developer. My
              specialty is pitch mentoring. Passionat about technology and
              innovation.
            </p>
          </div>
        </MentorsDescription>

        <ActionButtons>
          <button> SCHEDULING MENTORING </button>
          <Link to="/">
            <button className="prev"> PREV </button>
          </Link>
          <button className="next"> NEXT </button>
        </ActionButtons>
      </ContentContainer>

      <Footer />
    </MainContainer>
  );
}

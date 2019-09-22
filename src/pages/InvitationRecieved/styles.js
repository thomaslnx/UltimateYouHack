import styled from 'styled-components';
import DownArrow from '../../assets/icons/angle-arrow-down.png';

export const MainContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 20px 0px;
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    font-size: 30px;
  }
`;

export const Select = styled.select`
  padding-left: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 13px;
  width: 300px;
  height: 40px;
  background-color: #fff;
  color: #aca1b6;
  border: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url(${DownArrow});
  background-repeat: no-repeat, repeat;
  background-position: right 0.9em top 50%, 0 0;
  background-size: 20px auto, 100%;
`;

export const Members = styled.div`
  div.user {
    width: 300px;
    height: 80px;
    background-color: #fff;
    box-shadow: 0 0 1em #ededed;
    margin: 25px 0px;
    border-radius: 4px;
    outline: 0;
  }

  div.member1, div.member2, div.member3, div.member4, div.member5, div.member6 {
    display: flex;
  }

  div.avatar {
    img {
      border: none
      border-radius: 4px;
      width: 70px;
      height: 70px;
      margin: 5px 5px;
    }
  }

  div.user-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 3px;
    margin-left: 10px;
    font-family: 'Montserrat', sans-serif;

    p.name {
      font-weight: 600;
      font-size: 12px;
      color: #2F3542;
    }

    p.experience {
      font-weight: 600;
      font-size: 12px;
    }

    button {
      background-color: #A4B0BE;
      color: #fff;
      width: 200px;
      height: 25px;
      border: none;
      border-radius: 4px;
    }
  }
`;

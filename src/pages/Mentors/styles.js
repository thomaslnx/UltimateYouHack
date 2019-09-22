import styled from 'styled-components';

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

  img {
    width: 330px;
    height: 330px;
    border: none;
    margin-top: 25px;
  }
`;

export const MentorsSkills = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 300px;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  font-size: 12px;

  div {
    width: 100px;
    height: 40px;
    background-color: #2f3542;
    border-radius: 4px;
    margin: 0 5px;
    text-align: center;
    padding-top: 10px;

    &:nth-child(n + 3):nth-child(-n + 6) {
      margin-top: 10px;
    }
  }
`;

export const MentorsDescription = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 200px;
  margin-top: 20px;
  border: 1px solid #d2d9d5;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  color: #d2d9d5;
  padding-top: 20px;

  span {
    color: black;
    margin-left: 10px;
  }

  p {
    text-align: justify;
    padding: 10px;
    font-size: 12px;
    line-height: 1.8;
  }
`;

export const ActionButtons = styled.div`
  width: 300px;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 100px;

  button {
    width: 300px;
    height: 40px;
    background-color: #2f3542;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    font-size: 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button.prev {
    width: 140px;
    margin-top: 20px;
  }

  button.next {
    width: 140px;
    margin-left: 20px;
  }
`;

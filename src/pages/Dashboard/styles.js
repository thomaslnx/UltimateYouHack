import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100%;
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
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-style: italic;
    font-size: 30px;
    color: #2f3542;
    margin-top: 20px;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 300px;
  border: 1px solid #f6f7fc;
  background-color: #fff;
  border-radius: 4px;
  margin-top: 40px;
  box-shadow: 0 0 1em #ededed;
`;

export const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 240px;
  height: 240px;
  border: none;
  border-radius: 4px;
  margin-top: 10px;

  img {
    display: flex;
    width: 280px;
    height: 260px;
    border: none;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  strong {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-style: italic;
    color: #706fd3;
  }
`;

export const NavCarousel = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  button {
    width: 16px;
    height: 16px;
    margin: 5px;
    border: 1px solid #706fd3;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }
`;

export const DashActivity = styled.div`
  display: flex;
  max-width: 300px;
  flex-direction: row;
  flex-wrap: wrap;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  margin-bottom: 30px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 145px;
    height: 145px;
    margin-top: 10px;
    background-color: #2f3542;
    border: none;
    border-radius: 4px;
    padding: 15px 15px;

    &:nth-child(even) {
      margin-left: 10px;
    }

    a {
      color: #fff;
      font-family: 'Montserrat', sans-serif;
      text-decoration: none;
      font-size: 12px;
    }

    img {
      width: 45px;
       {
        /*filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);*/
      }
      filter: brightness(0) invert(1);
    }
  }
`;

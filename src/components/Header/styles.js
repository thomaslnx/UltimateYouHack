import styled from 'styled-components';

export const Container = styled.div`
  background-color: #2f3542;
  color: #b2aeb2;
  padding: 0 50px;
`;

export const Content = styled.div`
  height: 65px;
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img.logo {
    margin-top: 0px;
    width: 39px;
    height: 30px;
    border: none;
  }

  img.notification {
    margin-top: 0px;
    width: 31px;
    height: 35px;
    border: none;
  }

  img.chat {
    margin-top: 0px;
    width: 35px;
    height: 35px;
    border: none;
  }

  img.menu {
    margin-top: 0px;
    width: 40px;
    height: 20px;
    border: none;
  }
`;

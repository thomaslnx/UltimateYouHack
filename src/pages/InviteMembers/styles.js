import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  }
`;

export const Header = styled.div`
  background-color: #2f3542;
  color: #b2aeb2;
  padding: 0 50px;

  div.headerItems {
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
      width: 40px;
      height: 20px;
      border: none;
    }

    div.alert-container {
      width: 40px;
      height: 40px;

      ul.alerts-group {
        list-style: none;

        li.all-alerts {
          a.ancora {
            text-decoration: none;
          }

          div.show {
            width: 280px;
            margin-left: -100;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            box-shadow: 0px 2px 5px 2px rgba(234, 234, 238, 0.6);

            nav {
              display: flex;
              padding: 0 15px;
              font-family: 'Montserrat', sans-serif;
              font-size: 12px;

              img {
                height: 25px;
                width: 25px;
                border: 1px solid #a19ca6;
                border-radius: 50%;
                margin-right: 15px;
              }

              .invitation {
                strong {
                  color: #aff7d6;
                }
              }
            }
          }

          div.dropdown-menu {
            top: 66px;
            left: 575px;
          }
        }
      }
    }

    div.chat-container {
      width: 40px;
      height: 40px;

      ul.alerts-group {
        list-style: none;

        li.all-alerts {
          a.ancora {
            text-decoration: none;
          }

          div.show {
            width: 280px;
            margin-left: -100;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            box-shadow: 0px 2px 5px 2px rgba(234, 234, 238, 0.6);

            nav {
              display: flex;
              padding: 0 15px;
              font-family: 'Montserrat', sans-serif;
              font-size: 12px;

              img {
                height: 25px;
                width: 25px;
                border: 1px solid #a19ca6;
                border-radius: 50%;
                margin-right: 15px;
              }

              .invitation {
                strong {
                  color: #aff7d6;
                }
              }
            }
          }

          div.dropdown-menu {
            top: 66px;
            left: 575px;
          }
        }
      }
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 300px;
    height: 300px;
    border: none;
    border-radius: 4px;
    margin-top: 25px;
  }
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

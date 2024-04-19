import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
// Assets
import LogoImg from '../../assets/svg/Logo';
import facebook from '../../assets/social_media/facebook.png';
import twitter from '../../assets/social_media/twitter.png';
import snapchat from '../../assets/social_media/snapchat.png';
import instagram from '../../assets/social_media/instagram.png';
import uparrow from '../../assets/social_media/up-arro.png';

const FooterSection = ({ title, children }) => {
  return (
    <div className='flexCenter'>
      <h4>{title}</h4>
      <div>{children}</div>
    </div>
  );
};
export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();

  };

  return (
    <Wrapper>
      <div className='darkBg'>
        <div className='container'>
          <InnerWrapper
            className='whiteColor  font15 '
            style={{ padding: '30px 0' }}
          >
            <div className='footer-row flexSpaceCenterr'>
              <div
                className='flexCenterr whiteColor  font15'
                style={{
                  paddingTop: '10px ',
                }}
              >
                {/* List of navigation links here */}
                <h4>À propos de nous</h4>

                <Link
                  className='whiteColor animate pointer font15'
                  to='home'
                  smooth={true}
                >
                  Conditions générales des ventes
                </Link>

                <Link
                  className='whiteColor animate pointer font15'
                  to='home'
                  smooth={true}
                >
                  Mentions légales
                </Link>

                <Link
                  className='whiteColor animate pointer font15'
                  to='home'
                  smooth={true}
                >
                  Politique de confidentialité
                </Link>
              </div>

              <div
                className='flexCenterr whiteColor  font15'
                style={{
                  paddingTop: '10px ',
                }}
              >
                {/* Copyright information or other legal links here */}
                <h4>Nos coordonnées</h4>
                <p className='whiteColor font15'>
                  25 Rue de Ponthieu 75018 Paris
                </p>
                <p className='whiteColor font15'>+33745943626</p>
                <p className='whiteColor font15'>btesexpress@gmail.com</p>
              </div>

              <div
                className='flexCenterr whiteColor  font15 '
                style={{
                  paddingTop: '10px ',
                }}
              >
                {/* List of social media links here */}
                <h4>Réseau Social</h4>
                <div className='padintop  '>
                  <a className='whiteColor padingleft' href='#'>
                    <img
                      src={facebook}
                      alt='office'
                      style={{ height: '30px', width: '30px' }}
                    />{' '}
                  </a>
                  <a className='whiteColor padingleft' href='#'>
                    <img
                      src={twitter}
                      alt='office'
                      style={{ height: '30px', width: '30px' }}
                    />
                  </a>
                  <a className='whiteColor padingleft' href='#'>
                    <img
                      src={instagram}
                      alt='office'
                      style={{ height: '30px', width: '30px' }}
                    />
                  </a>
                  <a className='whiteColor padingleft' href='#'>
                    <img
                      src={snapchat}
                      alt='office'
                      style={{ height: '30px', width: '30px' }}
                    />
                  </a>

                  <StyleP
                    className='whiteColor font15'
                    style={{
                      paddingTop: '10px ',
                    }}
                  >
                    © {getCurrentYear()} -{' '}
                    <span className='purpleColor font15'>
                      BaÏgom Transport Express
                    </span>{' '}
                  </StyleP>
                  <div
                    style={{
                      paddingTop: '20px ',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Link
                      className='whiteColor animate pointer font15'
                      to='home'
                      smooth={true}
                      offset={-80}
                    >
                      <img
                        src={uparrow}
                        alt='office'
                        style={{ height: '30px', width: '30px' }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    .footer-row {
      flex-direction: column;
    }
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;

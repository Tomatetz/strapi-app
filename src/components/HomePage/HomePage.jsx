import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/LREO_logo_black.png';
import homeHeader from '../../assets/images/Home_Header.png';
import { AfterBanner, Logo } from './homePage.styled';
import { Carousel } from './Slider';
import axios from 'axios';

export const HomePage = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const getProperties = () => {
    axios.get(`${process.env.REACT_APP_MY_HEROKU_URL}/api/teams?populate=*`).then(({ data }) => {
      if (data.data) {
        setTeamMembers(data.data);
      }
    });
  };
  useEffect(() => {
    getProperties();
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Logo>
              <img height={142} src={logo} alt="logo" />
            </Logo>
            <AfterBanner>
              <h3>
                London Real Estate Office (LREO) is a boutique luxury property specialist. We match
                people across the world with beautiful homes in the city’s grandest neighbourhoods:
                Belgravia, Mayfair, Marylebone and St John’s Wood.
              </h3>
            </AfterBanner>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img src={homeHeader} alt="logo" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
      <div className="container our_team_area">
        <div className="row">
          <Carousel teamMembers={teamMembers} />
          <div className="col-md-12">Text about our team</div>
        </div>
      </div>
    </div>
  );
};

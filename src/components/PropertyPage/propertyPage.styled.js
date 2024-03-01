import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PropertySlider = styled.div`
  position: relative;
  .slick-next,
  .slick-prev {
    &:: before {
      content: unset;
    }
  }
`;

export const PropertyHeader = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 25px 65px 0 0;
  background: #fff;
  font-size: 36px;
  font-family: 'Cormorant Garamond', serif;
`;

export const PropertyStatsBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
`;
export const PropertyStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  color: #000;
  text-transform: capitalize;
  font-weight: 400;
`;

export const PropertyData = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 200;
  text-align: left;
  margin-bottom: 150px;
`;
export const PropertyDescription = styled.div`
  color: black;
  max-width: 499px;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 30px;
  font-family: 'Cormorant Garamond', serif;
  text-align: left;
  font-size: 22px;
`;
export const PropertyTitle = styled.div`
  font-size: 40px;
  font-family: 'Cormorant Garamond', serif;
  margin-top: 40px;
  text-align: left;
`;

export const SliderImage = styled.div`
  padding: 0 0 54%;
  background-position: center center;
  background-size: cover;
`;

export const Location = styled.div`
  background: #f5f6f6;
  height: 100%;
  position: relative;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Amenities = styled.div`
  text-align: left;
  background: #f5f6f6;
  padding: 40px;
  height: 100%;
  h3 {
    font-weight: 100;
    font-family: 'Cormorant Garamond', serif;
    font-size: 34px;
    margin-bottom: 16px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
`;

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StatusSelection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 36px;
  font-family: 'Cormorant Garamond', serif;
  color: #909090;
  margin-top: 30px;
`;
export const BedroomsSelection = styled(StatusSelection)`
  gap: 24px;
  margin-top: 20px;
  margin-bottom: 30px;
  font-family: 'Cormorant Garamond', serif;
`;

export const Status = styled.div`
  cursor: pointer;
  ${(props) =>
    //@ts-ignore
    props.isActive &&
    `
    color: #000;
    font-weight: 400;
  `}
`;

export const PropertyValues = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  > span {
    text-transform: capitalize;
  }
`;
export const PropertyName = styled.div`
  font-size: 30px;
  font-family: 'Cormorant Garamond', serif;
`;
export const PropertyCardImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
export const PropertyCardImage = styled.div`
  padding: 33% 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
export const PropertyCardInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  color: #000;
`;
export const PropertyData = styled.div`
  height: 155px;
  padding: 20px 0;
  align-items: center;
`;

export const StyledNavlink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #000;
`;

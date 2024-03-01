import React, { useEffect, useState } from 'react';
import { BedroomsSelection, Status, StatusSelection } from './properties.styled';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import { PropertyCard } from './PropertyCard';

export const Properties = () => {
  const [properties, setProperties] = useState([]);
  const getProperties = () => {
    axios
      .get(`${process.env.REACT_APP_MY_HEROKU_URL}/api/properties?populate=*`)
      .then(({ data }) => {
        if (data.data) {
          setProperties(data.data);
        }
      });
  };
  useEffect(() => {
    getProperties();
  }, []);

  const [selectedStatus, setSelectedStatus] = useState('buy');
  const [selectedBedrooms, setSelectedBedrooms] = useState(0);
  return (
    <div className="container">
      <div className="row">
        <StatusSelection>
          {/*@ts-ignore*/}
          <Status onClick={() => setSelectedStatus('buy')} isActive={selectedStatus === 'buy'}>
            Buy
          </Status>
          /{/*@ts-ignore*/}
          <Status onClick={() => setSelectedStatus('rent')} isActive={selectedStatus === 'rent'}>
            Rent
          </Status>
          /{/*@ts-ignore*/}
          <Status onClick={() => setSelectedStatus('sold')} isActive={selectedStatus === 'sold'}>
            Sold
          </Status>
        </StatusSelection>
        <BedroomsSelection>
          {/*@ts-ignore*/}
          <Status onClick={() => setSelectedBedrooms(0)} isActive={selectedBedrooms === 0}>
            View all
          </Status>
          {/*@ts-ignore*/}
          <Status onClick={() => setSelectedBedrooms(1)} isActive={selectedBedrooms === 1}>
            1 Bed
          </Status>
          {/*@ts-ignore*/}
          <Status onClick={() => setSelectedBedrooms(2)} isActive={selectedBedrooms === 2}>
            2 Bed
          </Status>
          {/*@ts-ignore*/}
          <Status onClick={() => setSelectedBedrooms(3)} isActive={selectedBedrooms === 3}>
            3+ Bed
          </Status>
        </BedroomsSelection>

        <div className="row">
          {properties
            .filter(({ attributes }) => {
              const isStatusCorrect = attributes.status.toLowerCase() === selectedStatus;
              let isBedCorrect = true;
              if (selectedBedrooms === 1) isBedCorrect = attributes.beds === 1;
              if (selectedBedrooms === 2) isBedCorrect = attributes.beds === 2;
              if (selectedBedrooms === 3) isBedCorrect = attributes.beds > 2;
              return isStatusCorrect && isBedCorrect;
            })
            .map(({ id, attributes }) => (
              <PropertyCard key={id} attributes={attributes} id={id} />
            ))}
        </div>
      </div>
    </div>
  );
};

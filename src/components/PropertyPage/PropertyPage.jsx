import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick/lib/slider';
import {
  Amenities,
  PropertyData,
  PropertyDescription,
  PropertyHeader,
  PropertySlider,
  PropertyStats,
  PropertyStatsBlock,
  PropertyTitle,
  SliderImage,
  Location,
} from './propertyPage.styled';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

const SliderArrow = () => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
      version="1.1"
      id="Capa_1"
      width="20px"
      height="20px"
      viewBox="0 0 51.388 51.388"
      xmlSpace="preserve"
    >
      <path d="M9.169,51.388c-0.351,0-0.701-0.157-0.93-0.463c-0.388-0.514-0.288-1.243,0.227-1.634l31.066-23.598L8.461,2.098    C7.95,1.708,7.85,0.977,8.237,0.463c0.395-0.517,1.126-0.615,1.64-0.225l33.51,25.456L9.877,51.151    C9.664,51.31,9.415,51.388,9.169,51.388z" />
    </svg>
  </div>
);
export const PropertyPage = () => {
  let { propertyId } = useParams();
  const [propertyData, setPropertyData] = useState({});
  const getPropertyData = () => {
    axios
      .get(`${process.env.REACT_APP_MY_HEROKU_URL}/api/properties/${propertyId}?populate=*`)
      .then(({ data }) => {
        if (data.data) {
          console.log(data.data.attributes);
          setPropertyData(data.data.attributes);
        }
      });
  };
  useEffect(() => {
    getPropertyData();
  }, []);
  const date = propertyData?.createdAt ? new Date(propertyData.createdAt) : new Date();
  const dateMDY = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  const location =
    'https://maps.google.com/maps?q=' + propertyData.location + '&amp;hl=en;z=14&amp;output=embed';
  console.log(
    'https://maps.google.com/maps?q=' + propertyData.location + '&amp;hl=en;z=14&amp;output=embed',
    'https://maps.google.com/maps?q=51.5261684,-0.1789851&amp;hl=en;z=14&amp;output=embed',
    'https://maps.google.com/maps?q=51.5261684,-0.1789851&amp;hl=en;z=14&amp;output=embed' ===
      location,
  );
  return (
    <div className="container">
      <PropertySlider>
        <div className="slider-container">
          <Slider {...settings}>
            {propertyData?.images?.data?.map(({ id, attributes }) => (
              <div key={id}>
                <SliderImage
                  key={id}
                  style={{
                    backgroundImage: `url(${attributes.url})`,
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
        <PropertyHeader>{propertyData.name}</PropertyHeader>
      </PropertySlider>
      <PropertyData>
        <PropertyStats>
          <PropertyStatsBlock>
            <span>
              {propertyData.status === 'sold' ? (
                'POA'
              ) : (
                <>£{Number(propertyData.price).toLocaleString('en-US')}</>
              )}
            </span>
            <span>{propertyData.type}</span>
          </PropertyStatsBlock>
          <PropertyStatsBlock>
            <span>{propertyData.beds} Beds</span>
            <span>{propertyData.bath} Bath</span>
            {propertyData.area ? <span>{propertyData.area} Sqf</span> : null}
          </PropertyStatsBlock>
        </PropertyStats>
        <PropertyTitle>{propertyData.title}</PropertyTitle>
        <PropertyDescription>
          {propertyData.description && <BlocksRenderer content={propertyData.description} />}
        </PropertyDescription>
        <PropertyStatsBlock>
          <span>Added: {dateMDY}</span>
          <span>Ref: {propertyData.ref}</span>
        </PropertyStatsBlock>
        <div className="row mt-5">
          <div className="col-md-4 col-lg-3">
            <Amenities>
              <h3>Amenities</h3>
              {propertyData.amenities && (
                <ul>
                  {propertyData.amenities.map((amenity, i) => (
                    <li key={i}>{amenity}</li>
                  ))}
                </ul>
              )}
            </Amenities>
          </div>
          <div className="col-md-8 col-lg-9">
            <Location>
              {location && (
                <iframe
                  src="https://maps.google.com/maps?q=51.5261684,-0.1789851&amp;hl=en;z=14&amp;output=embed"
                  width="100%"
                  height="450"
                  allowFullScreen={true}
                  loading="lazy"
                />
              )}
            </Location>
          </div>
        </div>
      </PropertyData>
    </div>
  );
};
const settings = {
  // dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // adaptiveHeight: false,
  // autoplay: false,
  nextArrow: (
    <div>
      <SliderArrow />
    </div>
  ),
  prevArrow: (
    <div>
      <div style={{ rotate: '180deg' }}>
        <SliderArrow />
      </div>
    </div>
  ),
};

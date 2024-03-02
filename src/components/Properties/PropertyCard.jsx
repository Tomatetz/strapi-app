import React from 'react';
import { Col } from 'react-bootstrap';
import {
  PropertyCardImage,
  PropertyCardImageWrapper,
  PropertyCardInner,
  PropertyData,
  PropertyName,
  PropertyValues,
  StyledNavlink,
} from './properties.styled';

export const PropertyCard = ({ attributes, id }) => {
  return (
    <Col xs={12} md={6}>
      <StyledNavlink to={`/properties/${id}`}>
        <PropertyCardInner>
          <PropertyCardImageWrapper>
            <PropertyCardImage
              style={{
                backgroundImage: `url(${
                  attributes.images.data[attributes.images.data.length - 1].attributes.formats
                    .medium.url
                })`,
              }}
            ></PropertyCardImage>
          </PropertyCardImageWrapper>
          <PropertyData>
            <PropertyName>{attributes.name}</PropertyName>
            <PropertyValues>
              {attributes.status === 'sold' ? (
                'POA'
              ) : (
                <span>£{Number(attributes.price).toLocaleString('en-US')}</span>
              )}
              <span>{attributes.type}</span>
              <span>{attributes.beds} Beds</span>
              <span>{attributes.bath} Bath</span>
            </PropertyValues>
          </PropertyData>
        </PropertyCardInner>
      </StyledNavlink>
    </Col>
  );
};

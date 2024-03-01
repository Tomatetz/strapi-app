import { Name, PhotoDiv, PhotoImg, Title } from './homePage.styled';

export const CarouselItem = ({ attributes }) => {
  const [firstName, lastName] = attributes.fullname.split(' ');
  return (
    <>
      <div>
        <PhotoDiv
          style={{
            backgroundImage: `url(${process.env.REACT_APP_MY_HEROKU_URL}${attributes.profile_picture.data.attributes.formats.medium.url})`,
          }}
        />
      </div>
      <div className="row mt-3">
        <Name>{firstName}</Name>
        <Name>{lastName}</Name>
        <Title>{attributes.title}</Title>
      </div>
    </>
  );
};

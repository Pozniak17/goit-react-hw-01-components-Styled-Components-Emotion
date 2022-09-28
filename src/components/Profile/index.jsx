import PropTypes from 'prop-types';
import profileAvatar from '../utils/images/profile.jpg';

import {
  Container,
  Wrapper,
  Image,
  Name,
  Tag,
  Location,
  Label,
  StatsWrapper,
  StatsItem,
  Quantity,
} from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar = profileAvatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Container>
      <Wrapper>
        <Image src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Wrapper>

      <StatsWrapper>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </StatsWrapper>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;

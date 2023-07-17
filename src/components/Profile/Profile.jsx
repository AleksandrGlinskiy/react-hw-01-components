import PropTypes from 'prop-types';
import { Avatar, Container, Description, Label, Name, Quantity, Stats, StatsItem, Tag } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar"/>
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Tag>{location}</Tag>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity> {stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity> {stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity> {stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

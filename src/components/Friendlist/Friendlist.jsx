import PropTypes from 'prop-types';
import { FriendListStyle } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyle>
      {friends.map(({ isOnline, name, avatar, id}) => {
        return (
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id}  />
        );
      })}
    </FriendListStyle>
  );
};

FriendList.propTypes ={
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
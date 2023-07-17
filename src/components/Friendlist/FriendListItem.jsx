import PropTypes from 'prop-types';
import { Avatar, FriendItemStyle, FriendName, StatusOffline, StatusOnline,  } from './FriendList.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItemStyle>
      {isOnline ? (
      <StatusOnline></StatusOnline>)
      :
      (<StatusOffline></StatusOffline>)}
      <Avatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendItemStyle>
  );
};

FriendListItem.propTypes ={
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}
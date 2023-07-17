import PropTypes from 'prop-types';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      {isOnline ? (
      <span className="status"></span>)
      :
      (<span className="status"></span>)}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes ={
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}
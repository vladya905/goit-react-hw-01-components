import css from './friend.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
 return (
    <ul className={css.friend_list}>
      {friends.map(friend => (
        <li className={css.friend_item} key={friend.id}>
          <span className={`${css.friend_status} ${friend.isOnline ? css.true : css.false}`}></span>
          <img className={css.friend_avatar} src={friend.avatar} alt="User avatar" width="48" />
          <p className={css.friend_name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
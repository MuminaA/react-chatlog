import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {

  const likeButtonClicked = () => {
    props.onToggleLike(props.id);
  };

  const heartIcon = props.isLiked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local remote">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button className="like" onClick={likeButtonClicked}>{heartIcon}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  onToggleLike: PropTypes.func.isRequired,
};

export default ChatEntry;

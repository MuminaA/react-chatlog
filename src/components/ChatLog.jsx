import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';


const ChatLog = (prop) => {
  return (
    <div className="chat-log">
      {prop.entries.map((message) => (
        <ChatEntry
          key={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
        />
      ))}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array,
};

export default ChatLog;
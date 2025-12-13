import './App.css';
import initialMessagesData from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [messageData, setMessageData] = useState(initialMessagesData);

  const toggleLike = (id) => {
    const updateMessages = messageData.map((message) => {
      if (message.id === id)
      {
        return {...message, liked: !message.liked};
      } else {
        return message;
      }
    });
    setMessageData(updateMessages);
  };

  const likeCount = messageData.filter((message) => message.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estrogen </h1>
        <div className=''>
          <strong>{likeCount} ❤️s</strong>
        </div>
      </header>
      <main>
        <ChatLog entries={messageData} onToggleLike={toggleLike} />
      </main>
    </div>
  );
};

export default App;

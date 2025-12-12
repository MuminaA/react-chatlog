import './App.css';
import ChatEntry from './components/ChatEntry';
import messageData from './data/messages.json';
import ChatLog from './components/Chatlog';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {messageData.map((message) => (
          <ChatEntry
            key={message.id}
            sender={message.sender}
            body={message.body}
            timeStamp={message.timeStamp}
          />
        ))}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;

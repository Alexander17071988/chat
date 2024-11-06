import { useState } from "react";
import './styles.css';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleClick = () => {
    setMessages((prev) => {
      const clone = [...prev];
      clone.push({
        id: Date.now(),
        message: inputMessage,
      });
      return clone;
    });
  };

  const handleClickMinus = (index) => {
    if (index > 0) {
setMessages((prev)=> {
  const clone = [...prev];
    [clone[index], clone[index-1]] = [clone[index-1], clone[index]];
    return clone;
  })
    }
  };

  const handleClickPlus = (index) => {
    setMessages((prev)=> {
      if(index < prev.length - 1) {
        const clone = [...prev];
        [clone[index], clone[index+1]] = [clone[index+1], clone[index]];
        return clone;
      }
      return prev;
    })
  }

  return (
    <div className="App">
      <h1>Hello CodeSandboxf</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        {messages.map(({ id, message }, index) => (
          <div
            key={id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div>{message}</div>
            <div>
              <button onClick={()=>handleClickMinus(index)}>-</button>
              <button onClick={()=>handleClickPlus(index)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setInputMessage(e.target.value)}
          value={inputMessage}
        />
        <button onClick={handleClick}>Send</button>
      </div>
    </div>
  );
}

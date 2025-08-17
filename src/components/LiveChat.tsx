import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import type { RootState } from "../store/store";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store: RootState) => store.chat.messages);
  const [liveMessgae, setLiveMessage] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          key: crypto.randomUUID(),
          name: generateRandomName(),
          message: generateRandomMessage(10),
        })
      );
    }, 500);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <div className="w-full h-[720px] ml-2 p-2 border border-black overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((message) => (
          <ChatMessage
            key={message.key}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border flex border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Atul",
              message: liveMessgae,
              key: crypto.randomUUID(),
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 px-2 border border-gray-400 rounded-xl"
          type="text"
          value={liveMessgae}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100"> Send </button>
      </form>
    </div>
  );
};

export default LiveChat;

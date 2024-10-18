import React, { useEffect, useRef, useState } from "react";
import { PiWechatLogoBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { FaRobot, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  sendMessageThunkMiddleware,
  setChatBot,
} from "../../../redux/features/chatBot";

const ChatBot = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const lastMessageRef = useRef(null);

  const { messages } = useSelector((state) => state.chatBot);
  const { chatBotLoader } = useSelector((state) => state.loader);

  const sendMessageHandler = (e) => {
    e.preventDefault();
    console.log("Chat");

    const payload = {
      role: "user",
      content: message,
    };

    dispatch(sendMessageThunkMiddleware({ messages, message: payload }));
    setMessage("");
  };

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [sendMessageHandler]);

  useEffect(() => {
    if (messages.length === 0) {
      const requestPayload = [
        ...messages,
        {
          role: "assistant",
          content:
            "Hello! I am Ashish Assistant. I'm here to help you to get know about ME!",
        },
      ];

      dispatch(
        setChatBot({
          messages: [...requestPayload],
        })
      );
    }
  }, []);
  return (
    <>
      {/* Bot Icon  */}
      <div
        className={`fixed  ${
          open ? "bottom-48 right-8 opacity-0" : " bottom-8 right-8 opacity-100"
        } z-30 shadow-lg w-16 h-16 rounded-full border-2 border-primary_color bg-primary_color bg-opacity-20 cursor-pointer grid place-items-center hover:scale-110 transition-all duration-300`}
      >
        <FaRobot size={32} onClick={() => setOpen(true)} />
      </div>

      <div
        className={` h-full w-full md:h-[60dvh] md:w-[48dvh] bg-white bottom-0 md:bottom-4  ${
          open ? "md:right-4" : " -right-[100%]"
        } fixed z-40 md:rounded-lg p-2 transition-all duration-300 text-black flex flex-col gap-3`}
      >
        {/* Close Button  */}
        <div className="text-black flex w-full flex-row-reverse ">
          <IoClose
            size={25}
            className=" cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>
        {/* Message Box  */}
        <div className="flex-1 overflow-auto scroll-smooth">
          <div className=" flex flex-col gap-3">
            {messages.map((item, index) => (
              <div
                key={`${index}-${item?.role}`}
                className=" flex gap-1"
                ref={index === messages.length - 1 ? lastMessageRef : null}
              >
                <div
                  className={`px-4 py-2 text-white font-semibold overflow-hidden break-words ${
                    item?.role === "user"
                      ? "bg-primary_color bg-opacity-80 ml-auto rounded-l-3xl rounded-br-3xl text-right "
                      : "rounded-r-3xl rounded-bl-3xl bg-primary_color"
                  }`}
                >
                  {item?.content?.split(/\n- |\n\n- |\n\n|\n/).map((item) => (
                    <p className="">{item}</p>
                  ))}
                </div>
                <div
                  className={`${
                    item?.role === "user" ? " bg-opacity-80" : "order-first"
                  } text-xl bg-primary_color text-white h-fit p-2 rounded-full`}
                >
                  {item?.role === "user" ? <FaUser /> : <FaRobot />}
                </div>
              </div>
            ))}
            {/* Loading  */}
            {chatBotLoader && (
              <div className=" flex items-center gap-1">
                <div
                  className={`w-fit text-xl bg-primary_color text-white h-fit p-2 rounded-full`}
                >
                  <FaRobot />
                </div>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-white animate-spin dark:text-primary_color fill-white"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
        {/* Input Box  */}
        <div className=" flex flex-col gap-4">
          {/* Input Box  */}
          <form className="relative" onSubmit={sendMessageHandler}>
            <input
              type="text"
              value={message}
              className=" border-2 border-primary_color w-full py-2 pr-10 pl-4 rounded-2xl focus:outline-none"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask Anything About Me"
            />

            <button
              type="submit"
              className=" text-primary_color absolute top-1/2 -translate-y-1/2 right-0 text-3xl px-1 cursor-pointer"
            >
              <IoMdSend />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatBot;

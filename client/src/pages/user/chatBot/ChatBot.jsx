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
import SyncLoading from "../../../components/layout/loader/BeatLoading";

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
                <SyncLoading />
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

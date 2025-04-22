import { useState, useRef, useEffect } from "react";
import Footer from "../Components/Footer.jsx";
import Hero from "../Components/Hero.jsx";
import Navbar from "../Components/Navbar.jsx";
import Section from "../Components/Section.jsx";
import Shoes from "../Components/Shoes.jsx";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdArrowRoundUp } from "react-icons/io";

function Home() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleChatBtn() {
    setIsOpen(true);
  }

  function handleMinimizeBtn() {
    setIsOpen(false);
  }

  const sendPrompt = async () => {
    if (!prompt.trim()) return;

    const userMessage = { sender: "user", text: prompt };
    setMessages((prev) => [...prev, userMessage]);

    try {
      //use port 3000 and route api/huggingface/chat
      const res = await fetch("http://localhost:3000/api/huggingface/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      const botMessage = { sender: "bot", text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Something went wrong." },
      ]);
    }

    setPrompt("");
  };

  return (
    <div>
      <Navbar logo="full-logo2.png" bgcolor="white" textcolor="black" />
      <Hero />
      <Shoes />
      <Section />
      <Footer />
      {!isOpen && (
        <button className="fixed bottom-4 right-0" onClick={handleChatBtn}>
          <img src="/chat-bot.png" alt="chat-bot-image" width={100} />
        </button>
      )}
      {isOpen && (
        <div className="w-80 h-[480px] bg-slate-600 fixed bottom-5 right-10 flex flex-col justify-between">
          <div className="flex justify-between items-center w-full h-10 bg-slate-800 p-2 text-white ">
            <div className="font-semibold">Chat Bot</div>
            <button
              onClick={handleMinimizeBtn}
              className="text-xl hover:bg-slate-700"
            >
              <IoCloseSharp />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-100">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-sm px-4 py-2 rounded-2xl shadow ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="relative h-10 m-1">
            <input
              type="text"
              placeholder="Type here.."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full p-2 focus:placeholder-transparent focus:outline-none"
            />
            <button onClick={sendPrompt}>
              <IoMdArrowRoundUp className="absolute right-2 top-2 bg-slate-600 text-white w-6 h-6 rounded-full p-1" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

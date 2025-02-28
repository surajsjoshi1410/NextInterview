import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Conversation,
  EndBtn,
  TimerBtn,
  ChatBox,
  Message,
  Sender,
  Text,
  Img,
  InputBox,
  Input,
  Profile,
  Sendicon,
  CharCount,
  SendButton
} from "./MockInterviewChat.style";
import { LuSend } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import processing from "../../../../assets/processing.gif"
import { IoHourglassOutline } from "react-icons/io5";
import UserHeader from "../../../../components/UserHeader/UserHeader";
import HeaderWithLogo from "../../../../components/HeaderWithLogo/HeaderWithLogo";

const MockInterview = () => {
  const [messages, setMessages] = useState([
    { sender: "AI", text: "Hi Krishna, welcome to the mock interview on Machine Learning. Please introduce yourself!", time: "10:00 AM" },
    { sender: "M", text: "Hi, I work as an IT developer at XYZ company. I have 5 years of experience but recently developed interest in machine learning and would like to continue my career in this field.", time: "10:02 AM" },
    { sender: "AI", text: "Oh great, we are here to help you build your career.", time: "10:03 AM" }
  ]);
  
  const [input, setInput] = useState("");
  const MAX_WORDS = 50;
  const navigate = useNavigate();

  const countWords = (text) => {
    return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  };

  const handleInputChange = (e) => {
    const newText = e.target.value;
    if (countWords(newText) <= MAX_WORDS) {
      setInput(newText);
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        sender: "M",
        text: input,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) 
      };
      setMessages([...messages, newMessage]);
      setInput("");
    }
  };

  const [timeLeft, setTimeLeft] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      alert("The interview is starting in 3 seconds...");
      setTimeout(() => {
        setTimeLeft(30);
        setIsRunning(true);
      }, 3000);
    }, 3000);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      alert("Timeout!");
      setTimeLeft(null);
      setIsRunning(false);
      navigate("/user/interview");
      return;
    }
    if (timeLeft === null) return;

    setIsRunning(true);
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <>
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <HeaderWithLogo/>
    <h2 style={{margin:"2% 0 0 10%"}}>MOCK INTERVIEW</h2>
    <UserHeader/>
    </div>

    <Container>
      <Header>
      <TimerBtn isRunning={isRunning}>
        <IoHourglassOutline /> {timeLeft !== null ? `${Math.floor(timeLeft / 60)}:${timeLeft % 60} mins` : "2:00 mins"}
      </TimerBtn>    
        <hr style={{margin:"0"}}/>
        <EndBtn onClick={() => navigate("/user/interview")}>End interview</EndBtn>
      </Header>

      <Conversation> Conversation </Conversation>
      
      <ChatBox>
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender}>
            <Profile>
            <Sender  sender={msg.sender}>{msg.sender}</Sender>
            <span className="realtime">
      {msg.time}
    </span>
    </Profile>
            <Text>{msg.text}</Text>
          </Message>
        ))}
        <Img src={processing} alt="pr"/>Processing
      </ChatBox>
      <InputBox>
        <Input
          type="textarea"
          placeholder="Enter your response here..."
          value={input}
          onChange={handleInputChange}
           onKeyDown={(e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      handleSend();
    }
  }}
        />
        <Sendicon onClick={handleSend}>
          <LuSend />
        </Sendicon>
        <CharCount>{countWords(input)} / {MAX_WORDS}</CharCount>
        <SendButton>Ready to code</SendButton>
      </InputBox>
    </Container>
    </>
  );
};

export default MockInterview;

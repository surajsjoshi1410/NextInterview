import styled from "styled-components";

export const Container = styled.div`
  width: 97vw;
  border: 2px solid #ccc;
  border-radius: 8px;
  margin: 0px 30px 0px 30px;
  overflow: hidden; 
  display: flex;
  flex-direction: column;
  height: 87vh;
`;

export const Header = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: flex-end;
`;

export const Conversation = styled.div`
 display: flex;
 font-size: 20px;
 margin-left: 20px;
`;

export const TimerBtn = styled.button`
  padding: 5px 10px;
  background: white;
  border: ${(props) => (props.isRunning ? "#2290AC" : "black")};
  color: ${(props) => (props.isRunning ? "#2290AC" : "black")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 5px;
  background: white;
  border: 1px solid #ccc
`;

export const EndBtn = styled.div`
  color: #2290AC;
  border: 1px solid #2290AC;
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  margin: 5px;
  cursor: pointer;
  background: white;
  display: flex;
  align-items: center;
`;

export const ChatBox = styled.div`
  flex-grow: 1; 
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  // justify-content: flex-start;
  align-items: center;
  height: 60vh;
  overflow-y: auto;  

  /* Custom scrollbar */
  scrollbar-width: thin; 
  scrollbar-color: #888 #f1f1f1; 

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;


export const Message = styled.div`
display: flex;
flex-direction: row;
  padding: 10px;
  border-radius: 8px;
  width: 80%;
  align-items: center;
  align-self: ${(props) => (props.sender === "AI" ? "flex-start" : "flex-end")};
  background: ${(props) => (props.sender === "AI" ? "#F5F5F5" : "#F0F8F1")};
  text-align: left;
  // justify-content: ${(props) => (props.sender === "AI" ? "flex-start" : "flex-end")};
  flex-direction: ${(props) => (props.sender === "AI" ? "row" : "row-reverse")};
`;

export const Profile = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
// width:10%;
  align-self: ${(props) => (props.sender === "M" ? "flex-end" : "flex-start")};

.realtime{
font-size: 12px;
color: #888;
padding-top: 5px;
display: flex;
justify-content: ${(props) => (props.sender === "AI" ? "flex-end" : "flex-start")};
}
  `;


export const Sender = styled.div`
  font-weight: bold;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: white; /* Ensure background remains white */
  border: 1px solid #ccc;
  position: relative;
  overflow: hidden; /* Prevent text overflow */
  
  /* Gradient text effect */
  background: linear-gradient(90deg, #D6BD37 0%, #42C62D 25%, #237ED8 50%, #7F1AAE 75%, #C21F46 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${(props) =>
    props.sender === "AI"
      ? "align-self: flex-start; margin: 0 0 0 0;"
      : "align-self: flex-end; margin: 0 0 0 30%;"}
`;


export const Text = styled.pre`
  margin: 0;
  width: 93%;
  word-wrap: break-word;
  white-space: pre-wrap;
  overflow: auto;
  font-size: 14px;
  font-weight: 400;
  font-family: DM SANS;
`;

export const Img = styled.img`
  text-align: center;
  color: #555;
  width: 50px;
  height: 50px;
  // display: flex;
  // justify-content: center;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #ffffff;
  gap: 10px;
  // position: fixed;
  // margin-top: 30%;
`;

export const Input = styled.textarea`
  width: 100%;
  // min-height: 60px;
  padding: 0px 100px 10px 10px;
  border-image: linear-gradient(90deg, #FFE141 0%, #7DFF67 25%, #2B9DFF 50%, #C242FF 75%, #FF2D5F 100%);
  border-image-slice: 1; 
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  resize: none; 
  overflow-wrap: break-word; 
  word-break: break-word;
  text-overflow: ellipsis;
  padding: 5px;

  &::placeholder {
    color: #aaa;
  }
`;

export const Sendicon = styled.div`
position: absolute;
right: 12%;
margin-top: 5px;
font-size: 20px; 
cursor: pointer;
`;

export const CharCount = styled.div`
  font-size: 14px;
  color: #666;
  // margin-top: 5px;
  position: absolute;
  right: 14%;
`;

export const SendButton = styled.button`
  padding: 15px 15px;
  background: #2290AC45;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  width: 10%;

  &:hover {
    background: #2290AC;
  }
`;


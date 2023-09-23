import{Routes, Route, Navigate} from "react-router-dom"
import Chat from "./Pages/Chats"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Container from 'react-bootstrap/Container';
import NavBar from "./Components/NavBar"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext.jsx";

function App() {
const{user}=useContext(AuthContext);
  return (
    <ChatContextProvider user={user}>
   <NavBar/>
    <Container>
    <Routes>
      <Route path="/" element={user?<Chat/>:<Login/>} />
      <Route path="/login" element={user?<Chat/>:<Login/>} />
      <Route path="/register" element={user?<Chat/>:<Register/>} />
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
    </Container>
    </ChatContextProvider>
  )
}

export default App

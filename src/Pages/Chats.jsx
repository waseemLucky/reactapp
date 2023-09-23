import { useContext } from "react";
import { Container, Stack } from "react-bootstrap";
import { ChatContext } from "../context/ChatContext";
import UserChat from "../Components/Chat/UserChat";
import { AuthContext } from "../context/AuthContext";
import PotentialChats from "../Components/Chat/PotentialChats";
import ChatBox from "../Components/ChatBox";

const Chat = () => {
  const { user } = useContext(AuthContext);
  const { userChats, updateCurrentChat, isUserChatsLoading } =
    useContext(ChatContext);
  return (
    <Container>
      <PotentialChats />
      {userChats?.length < 1 ? null : (
        <Stack direction="horizontal" gap={4} className="align-item-start ">
          <Stack className="flex-grow-0 messages-box pe-3" gap={3}>
            {isUserChatsLoading && <p> Chats is Loading ....</p>}
            {userChats?.map((chat, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    updateCurrentChat(chat);
                  }}
                >
                  <UserChat chat={chat} user={user} />
                </div>
              );
            })}
          </Stack>
          <ChatBox />
        </Stack>
      )}
    </Container>
  );
};

export default Chat;

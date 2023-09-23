import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";

const PotentialChats = () => {
  const { user } = useContext(AuthContext);
  const { potentialChats, createChat } = useContext(ChatContext);
  return (
    <>
      <div className="all-users">
        {potentialChats &&
          potentialChats.map((u, index) => {
            return (
              <div
                className="single-user"
                key={index}
                onClick={() => {
                  createChat(user._id, u._id);
                }}
              >
                {u.name}
                <samp className="user-online"></samp>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default PotentialChats;

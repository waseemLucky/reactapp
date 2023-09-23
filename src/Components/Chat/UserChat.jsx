import { Stack } from "react-bootstrap";
import { useFatchRecipientUser } from "../../hooks/useFetchRecipient";
import avatar from "../../assets/avatar.svg";

const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFatchRecipientUser(chat, user);

  return (
    <Stack
      role="button"
      direction="horizontal"
      gap={3}
      className="user-card align-items-center p-2 justify-content-between"
    >
      <div className="d-flex">
        <div className="me-2">
          <img src={avatar} alt="profile" height="35px" />
        </div>
        <div className="text-content">
          <div className="name">{recipientUser?.name}</div>
          <div className="text">Text Message</div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-end">
        <div className="date">Aug 22,2023</div>
        <div className="this-user-notifications">5</div>
        <span className="user-online"></span>
      </div>
    </Stack>
  );
};

export default UserChat;

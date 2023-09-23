import { useContext } from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BsFillChatTextFill } from "react-icons/bs";
const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <Navbar
      bg="primary"
      className="mb-4 navbar-expand-sm"
      sticky={{ height: "3.75rem" }}
    >
      <Container>
        <h2>
          <Link to="/" className="link-light text-decoration-none">
            WaveApp
          </Link>
        </h2>
        {user && (
          <>
            <samp
              className="f2-1"
              style={{ textAlign: "center", color: "white" }}
            >
              {user?.name}
            </samp>
          </>
        )}

        <Nav>
          <Stack direction="horizontal" gap={4}>
            {user && (
              <>
                <BsFillChatTextFill role="button" />
                <Link
                  to="/login"
                  onClick={() => logoutUser()}
                  className="link-light text-decoration-none"
                >
                  Logout
                </Link>
              </>
            )}
            {!user && (
              <>
                <Link to="/login" className="link-light text-decoration-none">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="link-light text-decoration-none"
                >
                  Register
                </Link>
              </>
            )}
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

import { useAuth } from "../../providers/AuthProvider";
import "./Account.style.scss";
import ActiveRoute from "./ActiveRoute";

const Account = () => {
    const { currentUser, logout } = useAuth();
    // console.log(currentUser?.email);

    return (
        <div className="account">
            {currentUser ? (
                <>
                    <ActiveRoute to={`/my-toys/${currentUser?.email}`}>
                        My Toys
                    </ActiveRoute>
                    <ActiveRoute to="/add-a-toy">Add A Toy</ActiveRoute>
                    <img
                        className="account-logo ms-4"
                        src={currentUser?.photoURL}
                        title={currentUser?.displayName}
                    />
                    <a href="#" onClick={logout}>
                        Logout
                    </a>
                </>
            ) : (
                <>
                    <ActiveRoute to="/signup">Sign up</ActiveRoute>
                    <ActiveRoute to="/login">Log in</ActiveRoute>
                </>
            )}
        </div>
    );
};

export default Account;

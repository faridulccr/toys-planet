import { useAuth } from "../../providers/AuthProvider";
import "./Account.style.scss";
import ActiveRoute from "./ActiveRoute";

const Account = () => {
    const { currentUser, logout } = useAuth();
    // console.log(currentUser);

    return (
        <div className="account">
            {currentUser ? (
                <>
                    <img
                        className="account-logo"
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

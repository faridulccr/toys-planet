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
                        src={currentUser.photoURL}
                        title={currentUser.displayName}
                    />
                    <span onClick={logout}>logout</span>
                </>
            ) : (
                <>
                    <ActiveRoute to="/signup">Signup</ActiveRoute>
                    <ActiveRoute to="/login">Login</ActiveRoute>
                </>
            )}
        </div>
    );
};

export default Account;

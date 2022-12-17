import {
    ChangeEventHandler,
    FormEventHandler,
    useEffect,
    useState,
} from "react";
import styles from "./login.styles";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        const timer = setTimeout(() => {
            alert("Do you need help?");
        }, 5000);

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, []);

    const handleChangeUsername: ChangeEventHandler<HTMLInputElement> = (
        event
    ): void => {
        setUsername(event.target.value);
    };

    const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (
        event
    ): void => {
        setPassword(event.target.value);
    };

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault();
        alert(`Login submitted: ${username}, ${password}`);
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h1>Login</h1>
            <div>
                <div>
                    <input
                        name="email"
                        type="text"
                        placeholder="your-email@email.com"
                        onChange={handleChangeUsername}
                        value={username}
                        style={styles.input}
                    />
                </div>
                <div>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        onChange={handleChangePassword}
                        value={password}
                        style={styles.input}
                    />
                </div>
            </div>
            <button type="submit" style={styles.button}>
                Login
            </button>
        </form>
    );
};

export default Login;

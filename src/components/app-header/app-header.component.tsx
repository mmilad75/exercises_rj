import styles from "./app-header.styles";
import { IAppHeaderItems, IAppHeaderProps } from "./app-header.types";

const AppHeader: React.FC<IAppHeaderProps> = ({ selected, onSelect }) => {
    const items: IAppHeaderItems[] = [
        { key: "users", title: "Users" },
        { key: "counter", title: "Counter" },
        { key: "login", title: "Login" },
    ];
    return (
        <header style={styles.container} role="navigation">
            {items.map((item) => (
                <div
                    key={item.key}
                    style={
                        selected === item.key
                            ? { ...styles.item, ...styles.selected }
                            : styles.item
                    }
                    onClick={() => onSelect(item.key)}
                    role="button"
                >
                    {item.title}
                </div>
            ))}
        </header>
    );
};

export default AppHeader;

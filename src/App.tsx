import React, { useState } from "react";
import AppHeader from "./components/app-header/app-header.component";
import Counter from "./components/counter/counter.component";
import Login from "./components/login/login.component";
import { Components } from "./components/types";
import UsersList from "./components/users-list/users-list.component";
import styles from "./App.styles";

const App: React.FC = () => {
    const [component, setComponent] = useState<Components>("users");

    const renderComponent = () => {
        switch (component) {
            case "counter":
                return <Counter />;
            case "login":
                return <Login />;
            case "users":
                return <UsersList />;
        }
    };

    return (
        <div className="App">
            <AppHeader selected={component} onSelect={setComponent} />
            <div style={styles.componentsContainer}>{renderComponent()}</div>
        </div>
    );
};

export default App;

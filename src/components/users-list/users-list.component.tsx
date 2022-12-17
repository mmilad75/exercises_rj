import { useEffect, useState } from "react";
import jsonPlaceholderApi from "../../api/jsonplaceholder";
import UsersItem from "./users-item/users-item.component";
import { IUser } from "./users-list.types";

const UsersList: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        jsonPlaceholderApi.get("/users").then(({ data }) => {
            setUsers(data);
        });
    }, []);

    return (
        <div>
            <h1>Users List</h1>
            {users.length ? (
                users.map((user) => <UsersItem key={user.id} user={user} />)
            ) : (
                <p>Loading users...</p>
            )}
        </div>
    );
};

export default UsersList;

import { memo } from "react";
import { IUsersItemProps } from "../users-list.types";
import styles from "./users-item.styles";

const UsersItem: React.FC<IUsersItemProps> = ({ user }) => {
    const { name, company, address } = user;
    const { suite, street, zipcode, city, geo } = address;

    return (
        <div style={styles.container} role="listitem">
            <h2 style={styles.name}>{name}</h2>
            <p style={styles.company}>At {company.name} company</p>
            <a
                href={`https://maps.google.com/?q=${geo.lat},${geo.lng}`}
                target="_blank"
                rel="noreferrer"
                style={styles.address}
            >{`${suite}, ${street}, ${zipcode}  ${city}`}</a>
        </div>
    );
};

const usePropsAreEqual = (
    { user: oldUser }: IUsersItemProps,
    { user: newUser }: IUsersItemProps
) => {
    return oldUser.id === newUser.id;
};

export default memo(UsersItem, usePropsAreEqual);

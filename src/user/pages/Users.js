import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
          id: 'uid1',
          name: 'Aditya Prayoga',
          image:
            'https://avatars.githubusercontent.com/u/71654893?v=4',
          todos: 3
        }
      ];

    return (
        <UsersList items={USERS} />
    )
}

export default Users;
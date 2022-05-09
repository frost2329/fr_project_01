import React from 'react';
import s from "./Users.module.css";
import User from "./User/User";
import * as axios from "axios";

const Users = (props) => {
    if (props.usersState.usersData.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                props.setUsers(response.data.items);
            });
    }
    let usersElemets = props.usersState.usersData.map(u => <User user={u}
                                                                 follow={props.follow}
                                                                 unFollow={props.unFollow}/>);
    return (
            <div className={s.users}>
                <div>
                    {usersElemets}
                </div>
                <div>
                    <button>Show More</button>
                </div>
            </div>
    )
}

export default Users;
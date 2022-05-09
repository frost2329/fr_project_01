import React from 'react';
import s from "./Users.module.css";
import User from "./User/User";

const Users = (props) => {
    let usersElemets = props.usersState.usersData.map(u => <User user={u}
                                                                 follow={props.follow}
                                                                 unFollow={props.unFollow}/>);
    return (
        <div className={s.users}>
            <div>
                {usersElemets}
            </div>
            <div>
                <button onClick={props.setUsers}>Show More</button>
            </div>
        </div>
    )
}

export default Users;
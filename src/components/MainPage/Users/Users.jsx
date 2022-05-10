import React from 'react';
import s from "./Users.module.css";
import User from "./User/User";
import * as axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    }
    render() {
        let usersElemets = this.props.usersState.usersData.map(user => <User user={user}
                                                                             follow={this.props.follow}
                                                                             unFollow={this.props.unFollow}/>);
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
}

export default Users;
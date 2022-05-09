import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../../redux/users_reduser";


let mapStateToProps = (state) => {
    return {
        usersState: state.usersState
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow(user_id) {
            console.log('follow'+ user_id)
            dispatch(followAC(user_id));
        },
        unFollow(user_id) {
            console.log('unFollow'+ user_id)
            dispatch(unfollowAC(user_id));
        },
        setUsers(usersData){
            console.log('setUsers'+ usersData)
            dispatch(setUsersAC());
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
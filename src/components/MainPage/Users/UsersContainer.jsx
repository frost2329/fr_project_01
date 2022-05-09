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
        follow(id) {
            console.log('follow'+ id)
            dispatch(followAC(id));
        },
        unFollow(id) {
            console.log('unFollow'+ id)
            dispatch(unfollowAC(id));
        },
        setUsers(usersData){
            console.log('setUsers'+ usersData)
            dispatch(setUsersAC(usersData));
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
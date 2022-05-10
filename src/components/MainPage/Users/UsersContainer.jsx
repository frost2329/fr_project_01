import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../../redux/users_reduser";


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
        },
        setTotalCount(totalCount){
            console.log('setTotalCount'+ totalCount)
            dispatch(setTotalCountAC(totalCount));
        },
        setCurrentPage(pageNumber){
            console.log('setCurrentPage'+ pageNumber)
            dispatch(setCurrentPageAC(pageNumber));
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
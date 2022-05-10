import React from 'react';
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../../redux/users_reduser";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersState.count}&page=${this.props.usersState.currentPage}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }
    onPageNumber = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersState.count}&page=${pageNumber}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    }
    render() {
        return (
            <Users usersState={this.props.usersState}
                   onPageNumber={this.onPageNumber}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}/>
        )
    }
}

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
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
import React from 'react';
import {connect} from "react-redux";
import {
    follow, setCurrentPage,
    setTotalCount, setUsers, toggleIsFollowingInProgress, toggleIsLoadingPage, unFollow
} from "../../redux/users_reduser";
import Users from "./Users";
import {superAPI} from "../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsLoadingPage(true);
        superAPI.getUsers(this.props.usersState.count, this.props.usersState.currentPage)
            .then((response) => {
                this.props.toggleIsLoadingPage(false);
                this.props.setUsers(response.items);
                this.props.setTotalCount(response.totalCount)
            })
    }

    onPageNumber = (pageNumber) => {
        this.props.toggleIsLoadingPage(true);
        this.props.setCurrentPage(pageNumber);
        superAPI.getUsers(this.props.usersState.count, pageNumber)
            .then((response) => {
                this.props.toggleIsLoadingPage(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <Users usersState={this.props.usersState}
                   onPageNumber={this.onPageNumber}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersState: state.usersState
    }
}

let dispachForProps = {
    follow,
    unFollow,
    setUsers,
    setTotalCount,
    setCurrentPage,
    toggleIsLoadingPage,
    toggleIsFollowingInProgress
}
export default connect(mapStateToProps, dispachForProps)(UsersContainer);
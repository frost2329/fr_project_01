import React from 'react';
import {connect} from "react-redux";
import {followTC, getUsersTC, unFollowTC} from "../../redux/users_reduser";
import Users from "./Users";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFollowingInProgress,
    getIsLoadingPage,
    getSizePage,
    getTotalCount,
    getUsers
} from "../../redux/users_selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        debugger;
        this.props.getUsersTC(this.props.sizePage, this.props.currentPage)
    }

    onPageNumber = (pageNumber) => {
        this.props.getUsersTC(this.props.sizePage, pageNumber)
    }

    render() {
        return (
            <Users users={this.props.users}
                   sizePage={this.props.sizePage}
                   currentPage={this.props.currentPage}
                   totalCount={this.props.totalCount}
                   isLoadingPage={this.props.isLoadingPage}
                   isFollowingInProgress={this.props.isFollowingInProgress}
                   onPageNumber={this.onPageNumber}
                   followTC={this.props.followTC}
                   unFollowTC={this.props.unFollowTC}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        sizePage: getSizePage(state),
        currentPage: getCurrentPage(state),
        totalCount: getTotalCount(state),
        isLoadingPage: getIsLoadingPage(state),
        isFollowingInProgress: getIsFollowingInProgress(state)
    }
}

let mapDispatchToProps = {
    getUsersTC: getUsersTC,
    followTC: followTC,
    unFollowTC: unFollowTC
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer);
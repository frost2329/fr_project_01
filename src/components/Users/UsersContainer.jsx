import React from 'react';
import {connect} from "react-redux";
import {followTC, getUsersTC, unFollowTC} from "../../redux/users_reduser";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersTC(this.props.usersState.sizePage, this.props.usersState.currentPage)
    }

    onPageNumber = (pageNumber) => {
        this.props.getUsersTC(this.props.usersState.sizePage, pageNumber)
    }

    render() {
        return (
            <Users usersState={this.props.usersState}
                   onPageNumber={this.onPageNumber}
                   followTC={this.props.followTC}
                   unFollowTC={this.props.unFollowTC}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersState: state.usersState
    }
}

let mapDispatchToProps = {
    getUsersTC: getUsersTC,
    followTC: followTC,
    unFollowTC: unFollowTC
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
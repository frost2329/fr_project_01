import React from 'react';
import {connect} from "react-redux";
import {follow, setCurrentPage, setLoading,
        setTotalCount, setUsers, unFollow} from "../../redux/users_reduser";
import Users from "./Users";
import {superAPI} from "../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setLoading(true);
        superAPI.getUsers(this.props.usersState.count, this.props.usersState.currentPage)
            .then((response) => {
                this.props.setLoading(false);
                this.props.setUsers(response.items);
                this.props.setTotalCount(response.totalCount)
            })
    }
    onPageNumber = (pageNumber) => {
        this.props.setLoading(true);
        this.props.setCurrentPage(pageNumber);
        superAPI.getUsers(this.props.usersState.count, pageNumber)
            .then((response) => {
                this.props.setLoading(false);
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

let dispachForProps = {
    follow,
    unFollow,
    setUsers,
    setTotalCount,
    setCurrentPage,
    setLoading
}
export default connect(mapStateToProps, dispachForProps)(UsersContainer);
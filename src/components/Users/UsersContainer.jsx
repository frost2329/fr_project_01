import React from 'react';
import {connect} from "react-redux";
import {follow, setCurrentPage, setLoading,
        setTotalCount, setUsers, unFollow} from "../../redux/users_reduser";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersState.count}&page=${this.props.usersState.currentPage}`)
            .then((response) => {
                this.props.setLoading(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount)
            });
    }
    onPageNumber = (pageNumber) => {
        this.props.setLoading(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersState.count}&page=${pageNumber}`)
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
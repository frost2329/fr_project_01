import React from 'react';
import s from "./Users.module.css";
import User from "./User/User";
import * as axios from "axios";

class Users extends React.Component {
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
        let pageCount = Math.ceil(/*this.props.usersState.totalCount;*/300 / this.props.usersState.count);
        let pageNumberButtonsArray = [];
        for (let i = 1; i <= pageCount; i++) {
            pageNumberButtonsArray.push(i);
        }
        pageNumberButtonsArray = pageNumberButtonsArray.map((pageNumber) => {
            return (
                <span className={this.props.usersState.currentPage === pageNumber ? s.currentPageNumber : s.pageNumber}
                      onClick={(e) => {this.onPageNumber(pageNumber);}}>
                    {pageNumber}
                </span>
            )
        })

        let usersElemets = this.props.usersState.usersData.map(user => <User user={user}
                                                                             follow={this.props.follow}
                                                                             unFollow={this.props.unFollow}/>);


        return (
            <div className={s.users}>
                <div>
                    {pageNumberButtonsArray}
                </div>
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
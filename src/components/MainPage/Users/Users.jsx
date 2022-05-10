import React from 'react';
import s from "./Users.module.css";
import User from "./User/User";

const Users = (props) => {

    let pageCount = Math.ceil(/*props.usersState.totalCount;*/300 / props.usersState.count);
    let pageNumberButtonsArray = [];
    for (let i = 1; i <= pageCount; i++) {
        pageNumberButtonsArray.push(i);
    }
    pageNumberButtonsArray = pageNumberButtonsArray.map((pageNumber) => {
        return (
            <span className={props.usersState.currentPage === pageNumber ? s.currentPageNumber : s.pageNumber}
                  onClick={(e) => {props.onPageNumber(pageNumber);}}>
                    {pageNumber}
                </span>
        )
    })

    let usersElemets = props.usersState.usersData.map(user => <User user={user}
                                                                         follow={props.follow}
                                                                         unFollow={props.unFollow}/>);
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

export default Users;
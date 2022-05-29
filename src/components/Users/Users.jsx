import React from 'react';
import s from "./Users.module.css";
import User from "./User/User";
import Loading from "../common/Loading/Loading";

const Users = (props) => {
    debugger;
    let pageCount = Math.ceil(/*props.totalCount;*/300 / props.sizePage);
    let pageNumberButtonsArray = [];
    for (let i = 1; i <= pageCount; i++) {
        pageNumberButtonsArray.push(i);
    }
    pageNumberButtonsArray = pageNumberButtonsArray.map((pageNumber) => {
        return (
            <span className={props.currentPage === pageNumber ? s.currentPageNumber : s.pageNumber}
                  onClick={() => {
                      props.onPageNumber(pageNumber);
                  }}>
                    {pageNumber}
            </span>
        )
    })

    let usersElemets = props.users.map(user => <User user={user}
                                                     isFollowingInProgress={props.isFollowingInProgress}
                                                     followTC={props.followTC}
                                                     unFollowTC={props.unFollowTC}/>);
    return (
        <div className={s.users}>
            <div>
                {pageNumberButtonsArray}
            </div>
            <div>
                {props.isLoadingPage
                    ? <Loading isLoading={props.isLoadingPage}/>
                    : (<div>{usersElemets}</div>)
                }
            </div>
        </div>
    )
}

export default Users;
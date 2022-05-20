import React from 'react';
import s from "./Users.module.css";
import User from "./User/User";
import Loading from "../common/Loading/Loading";

const Users = (props) => {
    let pageCount = Math.ceil(/*props.usersState.totalCount;*/300 / props.usersState.sizePage);
    let pageNumberButtonsArray = [];
    for (let i = 1; i <= pageCount; i++) {
        pageNumberButtonsArray.push(i);
    }
    pageNumberButtonsArray = pageNumberButtonsArray.map((pageNumber) => {
        return (
            <span className={props.usersState.currentPage === pageNumber ? s.currentPageNumber : s.pageNumber}
                  onClick={() => {
                      props.onPageNumber(pageNumber);
                  }}>
                    {pageNumber}
            </span>
        )
    })

    let usersElemets = props.usersState.usersData.map(user => <User user={user}
                                                                    isFollowingInProgress={props.usersState.isFollowingInProgress}
                                                                    followTC={props.followTC}
                                                                    unFollowTC={props.unFollowTC}/>);
    return (
        <div className={s.users}>
            <div>
                {pageNumberButtonsArray}
            </div>
            <div>
                {props.usersState.isLoadingPage
                    ? <Loading isLoading={props.usersState.isLoadingPage}/>
                    : (<div>{usersElemets}</div>)
                }
            </div>
        </div>
    )
}

export default Users;
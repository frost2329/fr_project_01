import React from 'react';
import s from "./Users.module.css";
import User from "./User";
import Loading from "../common/Loading/Loading";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {
    let usersElemets = props.users.map(user => <User user={user}
                                                     isFollowingInProgress={props.isFollowingInProgress}
                                                     followTC={props.followTC}
                                                     unFollowTC={props.unFollowTC}/>);
    return (
        <div className={s.users}>
            <div>
                <Paginator sizePage={props.sizePage}
                           totalCount={props.totalCount}
                           currentPage={props.currentPage}
                           onPageNumber={props.onPageNumber}/>
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
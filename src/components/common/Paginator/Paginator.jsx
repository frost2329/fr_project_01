import React from 'react';
import s from "./Paginator.module.css";

const Paginator = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.sizePage);

    let pageNumberButtonsArray = [];
    for (let i = 1; i <= pageCount; i++) {
        pageNumberButtonsArray.push(i);
    }
    pageNumberButtonsArray = pageNumberButtonsArray.map((p) => {
        return (
            <span className={props.currentPage === p ? s.currentPageNumber : s.pageNumber}
                  onClick={() => {props.onPageNumber(p)}}>
                {p}
            </span>
        )
    })
    return <div>{pageNumberButtonsArray}</div>
}

export default Paginator;
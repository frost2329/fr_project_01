import React, {useState} from 'react';
import s from "./Paginator.module.css";

const Paginator = (props) => {
    let portionSize = 10
    let pageCount = Math.ceil(props.totalCount / props.sizePage);
    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber-1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    pages = pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
        return (
            <span key={p.toString()} className={props.currentPage === p ? s.currentPageNumber : s.pageNumber}
                  onClick={() => {props.onPageNumber(p)}}>
                {p}
            </span>
        )
    })
    return <div>
        {portionNumber > 1 && <button onClick={()=>{setPortionNumber(portionNumber -1 )}}>PREV</button>}
        {pages}
        {portionNumber < portionCount && <button onClick={()=>{setPortionNumber(portionNumber +1 )}}>NEXT</button>}
    </div>
}

export default Paginator;
import React from 'react'
export default function Pagination(props) {
    return (
        <nav aria-label="Pagination">
            <ul className="pagination">
                <li onClick={props.prev} className="page-item p-2 h5 prev">
                     <a aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                <li className="page-item p-2 h5">{props.counter}</li>
                <li className="page-item p-2 h5">of</li>
                <li className="page-item p-2 h5">{Math.ceil(props.count / props.limit)}</li>
                <li onClick={props.next} className="page-item p-2 h5 next">
                     <a aria-label="Previous">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

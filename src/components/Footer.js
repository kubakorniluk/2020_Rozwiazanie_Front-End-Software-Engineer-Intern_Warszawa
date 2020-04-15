import React from 'react'
export default function Footer(props) {
    return (
        <footer>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center">
                {props.pagination}
            </nav>
        </footer>
    )
}

import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">

                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={
                                    window.location.pathname === "/" || "/Search"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                Search
            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/SavedPage"
                                className={window.location.pathname === "/SavedPage" ? "nav-link active" : "nav-link"}
                            >
                                Saved Books
            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
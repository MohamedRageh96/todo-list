import React from "react";

// main navbar shared across the app
const Navbar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Todo List</a>
                <div className="d-flex justify-content-end">
                    <div className="d-flex flex-column align-items-center">
                        <span className="text-white">Dark Mode</span>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="themeSwtch" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
// import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import { useAuth } from "../contexts/AuthContext";

function Header() {
    const history = useHistory();

    const { user, logout, loggedIn } = useAuth();

    const handleLogout = async () => {
        logout(() => {
            history.push("/");
        });
    };

    return (

        <div className="mt-4">

            <div className="row">
                <div className="col-3">
                    <h1>Logo</h1>
                </div>

                <div className="col-6">
                    <ul className="nav justify-content-center">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>

                        {loggedIn && (
                            <>
                                {user?.role === "admin" && (
                                    <li className="nav-item"><Link to="/admin" className="nav-link">Admin</Link></li>
                                )}

                                <li className="nav-item"><Link to="/employees" className="nav-link">Employess</Link></li>

                                <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
                            </>
                        )}
                    </ul>
                </div>

                <div className="col-3 text-right">
                    <ul className="nav justify-content-end">
                        {loggedIn && (
                            <>
                                <li className="nav-item">
                                    <Button variant="danger" className="nav-link btn-sm" type="button" onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </li>
                            </>
                        )}

                        {!loggedIn && (
                            <>
                                <li className="nav-item"><Link to="/signin" className="nav-link">Login</Link></li>
                                <li className="nav-item"><Link to="/signup" className="nav-link">Register</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
            <hr />

        </div>

    );
}

export { Header };
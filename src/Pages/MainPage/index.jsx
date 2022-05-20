import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/auth";

const MainPage = () => {

    const { user, logout } = useContext(AuthContext);

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
    };

    return (
        <div>
            <button onClick={ handleLogout }>
                Sair
            </button>
        </div>
    )
};

export default MainPage;
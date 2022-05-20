import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "./contexts/auth";

import GlobalStyle from "./globalStyles";

import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/LoginPage";
import CreateUserPage from "./Pages/CreateUserPage";

const AppRoutes = () => {

    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div className="loading">Carregando...</div>
        }

        if (!authenticated) {
            return <Navigate to="/login"/>
        }

        return children;
    }
    
    return (
        <Router>
            <GlobalStyle />
            <AuthProvider>
                <Routes>
                    <Route path="/" element={ <Private><MainPage /></Private> } />
                    <Route path="/login" element={ <LoginPage />}/>
                    <Route path="/create-user" element={ <CreateUserPage />}/>
                </Routes>
            </AuthProvider>
        </Router>
    )
};

export default AppRoutes;
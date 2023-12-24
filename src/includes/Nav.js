import Header from '../includes/Header';
import Footer from '../includes/Footer';
import { Outlet } from 'react-router-dom';
import '../styles/App.css';

const Nav = () => {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Nav;

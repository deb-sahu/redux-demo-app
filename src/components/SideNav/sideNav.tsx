import { useLocation } from 'react-router-dom';
import './sideNav.scss'; 
import { FaListAlt, FaUserEdit } from 'react-icons/fa'; 

export const SideNav = () => {
    const location = useLocation();

    return (
        <nav className="side-nav">
            <ul>
                <li className={location.pathname === '/form' ? 'active' : ''}><a href="/form"><FaUserEdit /> Form</a></li>
                <li className={location.pathname === '/list' ? 'active' : ''}><a href="/list"><FaListAlt /> List</a></li>
            </ul>
        </nav>
    );
}

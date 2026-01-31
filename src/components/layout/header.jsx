import { Link, NavLink } from 'react-router-dom';
import './header.css';
const Header = () => {
    return (
        // Sử dụng link để khi chuyển trang sẽ không bị load trang
        // NavLink là khi mà chuyển qua khối li khác sẽ tự động thêm class active vào khối đó
        // Dù lợi ích nhưng khi là đường link bên ngoài không phải nội bộ thì nên sài a href
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
        </ul>
    )
}
export default Header
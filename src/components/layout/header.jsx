import { Link } from 'react-router-dom';
// import './header.css';
import { HomeOutlined, UserOutlined, BookOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

const Header = () => {
    const [current, setCurrent] = useState('');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <UserOutlined />,
        },
        {
            label: <Link to={"/products"}>Products</Link>,
            key: 'products',
            icon: <BookOutlined />,
        },

    ];
    return (
        // Sử dụng link để khi chuyển trang sẽ không bị load trang
        // NavLink là khi mà chuyển qua khối li khác sẽ tự động thêm class active vào khối đó
        // Dù lợi ích nhưng khi là đường link bên ngoài không phải nội bộ thì nên sài a href
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} />
    )
}
export default Header
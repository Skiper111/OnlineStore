import { useContext } from 'react'
import { Context } from '../index'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {NavLink} from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import {observer} from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.setItem('token', '')
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white', textDecoration: 'none'}} to={SHOP_ROUTE}>Купы</NavLink>
                {user.isAuth ?
                <Nav className="ml-auto">
                    <Nav.Link onClick={() => history.push(ADMIN_ROUTE)}>Админ Панель</Nav.Link>
                <Nav.Link onClick={() => logOut()}>Выйти</Nav.Link>
                </Nav>
                :
                <Nav className="ml-auto">
                    <Nav.Link onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Nav.Link>
                </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar;


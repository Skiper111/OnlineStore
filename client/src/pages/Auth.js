import {React, useState} from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { registration, login } from "../http/userApi";
import { observer } from "mobx-react-lite";
import {useContext} from 'react'
import { Context } from '../index';

const Auth = observer(() => {
  const { user } = useContext(Context)
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    let data;
    try {
      if(isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
      user.setUser(user)
      user.setIsAuth(true)
      history.push(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
    >
      <Card 
        style={{width: window.innerWidth / 2}} 
        className='p-5'
      >
        <h2 className='m-auto'> {isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column mt-2'>
          <Form.Control
            className='mt-2'
            placeholder='Введите email...'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className='mt-2'
            placeholder='Введите пароль...'
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
          />
          <div className='d-flex justify-content-between mt-2'>
            {isLogin ?
              <div className='d-flex align-items-center justify-content-start'>
                Нет аккаунта? <NavLink className='p-2' to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
            :
              <div className='d-flex align-items-center justify-content-start'>
                Есть аккаунт? <NavLink className='p-2' to={LOGIN_ROUTE}>Войди!</NavLink>
              </div>
            }

            <Button 
              className ='align-self-end' 
              variant='outline-info'
              onClick={() => click()}
            >
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
})

  export default Auth;
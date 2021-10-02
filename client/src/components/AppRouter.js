import {Switch, Route, Redirect} from 'react-router-dom';
import { Context } from '../index';
import { useContext } from 'react';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

export default function AppRouter() {
    const {user} = useContext(Context);
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key = {path} path = {path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key = {path} path = {path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    )
}

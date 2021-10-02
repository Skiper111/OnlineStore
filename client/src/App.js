import { observer } from 'mobx-react-lite';
import { useContext, useState, useEffect} from 'react';
import { Spinner } from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { check } from './http/userApi';
import { Context } from './index'

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      check().then(() => {
        user.setUser(user)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
  }, [user])

  if(loading) {
    return <Spinner animation={'grow'} />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;

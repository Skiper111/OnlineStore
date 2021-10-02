import { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DeviceStore from './store/DeviceStore';
import UserStore from './store/UserStore';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value ={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);


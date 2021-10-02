import React, {useState} from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";
import CreateBrand from "../components/modals/CreateBrand";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  return (
    <Container className='d-flex flex-column'>
      <Button 
        variant={'outline-dark'} 
        className='mt-4 p-3'
        onClick={()=> setTypeVisible(true)}
        >
        Добавить тип
        </Button>
      <Button 
        variant={'outline-dark'} 
        className='mt-3 p-3'
        onClick={()=> setBrandVisible(true)}
        >
        Добавить бренд
        </Button>
      <Button 
        variant={'outline-dark'} 
        className='mt-3 p-3'
        onClick={()=> setDeviceVisible(true)}
        >
        Добавить устройство
      </Button>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
    </Container>
  );
}

  export default Admin;
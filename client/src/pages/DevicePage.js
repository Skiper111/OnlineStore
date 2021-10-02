import {React, useState, useEffect} from "react";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import star from '../assets/devicePage_star.png';
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceApi";

function DevicePage() {
  const [device, setDevice] = useState({info: []})
  const {id} = useParams()
  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))
  }, [id])
  return (
      <Container className='mt-3'>
        <Row>
          <Col>
            <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
          </Col>
          <Col>
            <Row className='d-flex flex-column align-items-center'>
              <h2 style={{textAlign: 'center'}}>{device.name}</h2>
              <div
                className='d-flex align-items-center justify-content-center'
                style={{background: `url(${star}) no-repeat center center`, height: 240, width: 250, backgroundSize: 'cover', fontSize: 64}}
              >
                {device.rating}
              </div>
            </Row>
          </Col>
          <Col>
            <Card
              className='d-flex align-items-center justify-content-around'
              style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
            >
              <h3>От: {device.price} грн.</h3>
              <Button variant={'outline-dark'}>Добавить в корзину</Button>
            </Card>
          </Col>
        </Row>
        <Row className='d-flex flex-column mt-3'>
          <h1>Характеристики</h1>
          {device.info.map((info, index) => 
            <Row 
              key={info.id}
              style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
            >
              {info.title}: {info.description}
            </Row>
          )}
        </Row>
      </Container>
    );
  }

  export default DevicePage;
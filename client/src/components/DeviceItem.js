import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'
import Image from 'react-bootstrap/esm/Image'
import star from '../assets/star.svg';
import { useHistory } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts';


function DeviceItem({device}) {
    const history = useHistory()
    return (
        <Col md={3}>
            <Card 
                style={{ width: '12rem', cursor: 'pointer', borderRadius: '0'}} 
                className='mt-3 p-2' 
                border='light'
                onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}
            >
                <Card.Img 
                    variant="top" 
                    src={process.env.REACT_APP_API_URL + device.img} 
                    style={{ overflow: 'hidden', height: '10rem'}}
                />
                <div className='text-black-50 d-flex justify-content-between align-items-center'>
                    <div>Samsung...</div>
                    <div className='d-flex align-items-center'>
                        <div >{device.rating}</div>
                        <Image src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem

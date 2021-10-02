import { observer } from 'mobx-react-lite'
import {useContext} from 'react'
import Card from 'react-bootstrap/esm/Card';
import { Context } from '../index';

const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <div className='d-flex flex-wrap'>
            {device.brands.map(brand => 
                <Card
                    style={{cursor: 'pointer'}}
                    border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
                    onClick={() => device.setSelectedBrand(brand)}
                    key={brand.id}
                    className='p-2'
                >
                    {brand.name}
                </Card>
            )}
        </div>
    )
})

export default BrandBar




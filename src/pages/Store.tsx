import storeItems from '../data/items.json'
import { Row } from 'react-bootstrap'
import StoreItem from '../components/StoreItem'

const Store = () => {
  return (
    <>
    <h2>Store</h2>
    <Row sm={1} md={2} lg={3} className='gap-3 justify-content-center'>
      {storeItems.map((item) => (
        <StoreItem key={item.id} {...item}/>
      ))}

    </Row>
    </>
  )
}

export default Store
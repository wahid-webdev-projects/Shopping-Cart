import storeItems from "../data/item.json"
import {Row,Col} from "react-bootstrap"
// import { JSON } from "react-router-dom"
import {StoreItem}  from "../components/items"
export function Store(){
    return ( 
    <> 
      
      <h1>Store</h1>
      <Row md={2} xs={1} lg={4} className="g-3">
          {storeItems.map(item=>(
         <Col key={item.id}>
            <StoreItem {...item}/>
         </Col>
          ))}
     </Row>
    </>
    )
}

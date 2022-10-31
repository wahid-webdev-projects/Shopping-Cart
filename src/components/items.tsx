import { Button, Card } from "react-bootstrap"
import {Currency} from "../utils/currency"
import { useShoppingCart } from "../contex/shopingcartcontex"
 type storeItemProps={
    id: number,
    name: string,
    price: number,
    imageUrl: string
}
export function StoreItem({ id, name, price, imageUrl }: storeItemProps) {
    const {
      getItemQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
    } = useShoppingCart()
const quantity = getItemQuantity(id)
        // const quantity: number=3
        return(
             <Card>
             <Card.Img variant="top" src={imageUrl} height="200px" style={{objectFit:'cover'}}/>
             <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted ">{Currency(price)}</span>
                </Card.Title>
                <div className="mt-auto"> {quantity===0 ? (<Button className="w-100" onClick={()=> increaseCartQuantity(id)}> + Add to Cart</Button>) : 
                  <div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}>
                    <div className="d-flex align-items-center justify-content-center" style={{gap:".5rem"}}>
                        <Button onClick={()=> increaseCartQuantity(id)}>+</Button>
                        <div>
                        <span className="fs-3">{quantity}</span> in cart
                        </div>
                        <Button onClick={()=> decreaseCartQuantity(id)}>-</Button>

                    </div>
                    <Button variant="danger" size="sm" onClick={()=> removeFromCart(id)}> Remove</Button>

                  </div>
                }
                </div>
                
             </Card.Body>

            </Card>
        )
}
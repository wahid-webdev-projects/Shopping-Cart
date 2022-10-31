import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../contex/shopingcartcontex"
import storeItems from "../data/item.json"
import { Currency } from "../utils/currency"

type CartItemProps = {
    id: number
    quantity: number
  }
  
  export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null
  
    return (
      <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img
          src={item.imageUrl}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {item.name}{" "}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {Currency(item.price)}
          </div>
        </div>
        <div> {Currency(item.price * quantity)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(item.id)}
        >
          &times;
        </Button>
      </Stack>
    )
  }
import { useContext } from "react"
import { CartContext } from "../contexts/cart_context"

export default function Summary() {

    var { cart, setCart } = useContext(CartContext)

    var total = cart.reduce((a, b) => {

        return a + (b.variants[b.selectedVariant].product.price_range.minimum_price.regular_price.value)

    }, 0)


    return (
        <div>
            <div style={{ padding: 15, display: 'grid', justifyContent: 'start', backgroundColor: '#00513C', color: '#fff' }}>
                <div style={{ justifySelf: 'start' }}><h4>SUMMARY</h4></div>
                <div style={{ justifySelf: 'start' }}>Subtotal : ${total}</div>
                <div style={{ justifySelf: 'start' }}>VAT Calculated : $50</div><br />
                <div style={{ justifySelf: 'start' }}><b>Estimated Total : ${total + 50}</b></div>
            </div>
        </div>
    )
}
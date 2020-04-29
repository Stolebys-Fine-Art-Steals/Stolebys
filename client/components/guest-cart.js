import React from 'react'
import {connect} from 'react-redux'
import {
  fetchCurrentOrder,
  increaseQuant,
  decreaseQuant,
  deleteProd
} from '../store/guestCart'
import GuestCheckoutForm from './guest-checkout'

export class GuestCart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchCurrentOrder()
  }

  render() {
    const guestCartItems = this.props.guestCart.items || {}
    return (
      <div id="cart">
        <h2>Prospective Posters for Purchase 🙌</h2>
        {Object.values(guestCartItems).map(product => (
          <div key={product.item.id}>
            <img
              src={product.item.imageUrl}
              height="100px"
              width=""
              className="prodThumb"
            />
            <h3>{product.item.title}</h3>
            <p>Qty: {product.qty}</p>
            <button
              type="button"
              onClick={() => this.props.increaseQuant(product)}
            >
              +
            </button>
            <button
              type="button"
              onClick={() => this.props.decreaseQuant(product)}
            >
              -
            </button>
            <button
              type="button"
              onClick={() => {
                this.props.deleteProd(product)
              }}
            >
              Remove Item
            </button>
          </div>
        ))}
        <h3>
          Order Total: $
          {this.props.guestCart.totalPrice
            ? this.props.guestCart.totalPrice / 100
            : 0}
          .00
        </h3>
        <h3>
          Total Items:{' '}
          {this.props.guestCart.totalQty ? (
            this.props.guestCart.totalQty
          ) : (
            <h5>
              Your cart is empty! Pick out some posters before peacin', please
              🙏
            </h5>
          )}
        </h3>

        <hr />
        <h3>Complete Your Order!</h3>
        <GuestCheckoutForm />
      </div>
    )
  }
}

//Insert name and address form for checkout
const mapState = state => {
  return {guestCart: state.guestCart.cart}
}

const mapDispatch = dispatch => ({
  fetchCurrentOrder: () => dispatch(fetchCurrentOrder()),
  increaseQuant: product => dispatch(increaseQuant(product)),
  decreaseQuant: product => dispatch(decreaseQuant(product)),
  deleteProd: productId => dispatch(deleteProd(productId))
})
export default connect(mapState, mapDispatch)(GuestCart)

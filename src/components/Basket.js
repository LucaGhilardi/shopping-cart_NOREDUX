import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div className="p-10 m-4 rounded text-blue-900 bg-blue-200 text-center">
      <h2><strong>Cart Items</strong></h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className='bg-yellow-200 rounded border-black w-10'>
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className='bg-yellow-200 rounded border-black w-10'>
                +
              </button>
            </div>

            <div className="">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="">
              <div className=""><strong>Items price</strong></div>
              <div className="">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="">
              <div className=""><strong>Tax</strong></div>
              <div className="">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="">
              <div className=""><strong>Shipping</strong></div>
              <div className="">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="">
              <div className="">
                <strong>Total Price</strong>
              </div>
              <div className="">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            
          </>
        )}
      </div>
    </div>
  );
}
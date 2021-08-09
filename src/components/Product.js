const Product = (props) => {
    const {product,onAdd} = props;
    return ( 
        <div className='w-100 h-40 pl-16'>
            <img className='w-40 h-40' src={product.image} alt={product.name} />
            <h3 className='font-bold'>{product.name}</h3>
            <div className='font-bold'>$ {product.price}</div>
            <div>
                <button onClick={()=>onAdd(product)} className=' bg-yellow-300 w-32 h-auto rounded border-black'>Add to cart</button>
            </div>
        </div>

     );
}
 
export default Product;
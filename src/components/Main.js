import Product from './Product';
const Main = (props) => {
    const { products , onAdd } = props;
    return ( 
       <main className='p-10 m-4 rounded text-blue-900 bg-blue-200 text-center h-96'>
           <h3 className='pb-8'><strong>Products</strong></h3>
           <h2 className='flex flex-auto '>{products.map ((product)=>(
               <Product key={product.id} product={product} onAdd={onAdd}></Product>
           ))}</h2>
       </main>
     );
}
 
export default Main;
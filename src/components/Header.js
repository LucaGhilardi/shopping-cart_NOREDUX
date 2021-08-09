const Header = (props) => {
    const {countCartItems} = props;
    return ( 
        <header className='flex flex-row justify-between p-10 m-4 rounded text-blue-900 bg-blue-200'>
            <div>
                <a href="#/"></a>
                    <h1 className='font-bold'>SHOPPING CART NO REDUX</h1>
            </div>
            <div className='flex flex-wrap'>
                <a href="#/cart">

                    Cart {''}
                    {countCartItems?(
                        <button className='bg-yellow-200 rounded border-black w-10'>{countCartItems}</button>
                    ):('')}
                    </a>
                <a className='ml-2' href="#/signin">SignIn</a>
            </div>
        </header>
     );
}
export default Header;
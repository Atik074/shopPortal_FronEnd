const Navbar = () => {



    return (
        <div >
           
            <div className="flex justify-between items-center">
                 <h2 className="text-2xl font-medium">shopStore</h2>
                <ul className="flex items-center">
                    <li className="mx-6 text-[21px]">
                        <a href='/'>Woman</a>
                        </li>
                    <li className="mx-6 text-[21px]"><a href='#'>Man</a></li>
                    <li className="mx-6 text-[21px]"><a href='#'>Kids</a></li>
                    <li className="mx-6 text-[21px]"><a href='#'>New Arrival</a></li>
                    <li className="mx-6 text-[21px]"><a href='#'>Cart</a></li>

                    {/* {
                        user ? <li className="mx-6 text-[21px]">
                        <a href='#'>LogOut</a></li> : <li className="mx-6 text-[21px]">
                        <a href='#'>Login</a></li>
                    } */}
                    <li className="mx-6 text-[21px]">
                        <a href='/login'>Login</a></li>
                    
            
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
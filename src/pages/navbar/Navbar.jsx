const Navbar = () => {

    return (
        <div className="px-8 py-4" >
           
            <div className="flex justify-between items-center">
                 <a href="/" className="text-[28px] font-bold  text-sky-800 ">shopStore</a>
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
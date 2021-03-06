export default function Navbar(){
    return(
            <nav className="bg-white border-2 border-white  text-right" >
                <div  >
                    <h3 className="text-xl m-5 uppercase text-gray-500" >
                    <a href="/">Food Menu</a>
                    </h3>
                </div>
                <ul className="m-10 mr-3 " >
                    <li className="text-sm m-2 text-gray-800 " >
                        <a href="/">
                            <span className="mr-2 " >Home</span>
                            <i className="fa fa-home"></i>  
                        </a>
                    </li>
                    <li className="text-sm m-2" >
                        <a href="/" >
                            <span className="mr-2 " >About</span>
                            <i className="fa fa-address-card"></i>
                        </a>
                    </li>
                    <li className="text-sm m-2" >
                        <a href="/" >
                            <span className="mr-2 " >Contact</span>
                            <i className="fa fa-phone"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        
    )
}


import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [{id: 1, path: '/', name: 'Home'}, 
                    {id: 2, path: '/about', name: 'About'}, 
                    {id: 3, path: '/contact', name: 'Contact'},
                    {id: 4, path: '/products', name: 'Products'}, 
                    {id: 5, path: '*', name: 'NotFound'}
                   ];



    return (
        <nav>
            <div className="text-xl md:hidden" onClick={() => setOpen(!open)}>

                {

                    open === true ?
                    <AiOutlineClose></AiOutlineClose>
                    : <AiOutlineMenu></AiOutlineMenu>

                }

            </div>
           <ul className={`md:flex absolute md:static
           ${open ? '' : 'hidden'}
            justify-center`}>
           {
                routes.map(route => <Link
                key={route.id}
                route={route}
                ></Link>)
            }
           </ul>
        </nav>
    );
};

export default Navbar;
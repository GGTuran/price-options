import Link from "../Link/Link";


const Navbar = () => {

    const routes = [{id: 1, path: '/', name: 'Home'}, 
                    {id: 2, path: '/about', name: 'About'}, 
                    {id: 3, path: '/contact', name: 'Contact'},
                    {id: 4, path: '/products', name: 'Products'}, 
                    {id: 5, path: '*', name: 'NotFound'}
                   ];



    return (
        <nav>
           <ul className="flex justify-center">
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
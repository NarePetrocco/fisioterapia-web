import NavBar from '@/components/nav'
import { Outlet } from 'react-router-dom';



function Layout() {
    return (
        <div>
            
            <NavBar />
            
            <main className="pt-16 p-4">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout
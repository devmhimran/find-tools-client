import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="container mx-auto">
            <div class="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content  bg-slate-100  p-5 m-2 lg:p-10 rounded-lg">
                    
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side border rounded-lg m-2">
                    <label for="dashboard-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link className='border-b' to='/dashboard/'>Manage All Orders</Link></li>
                        <li><Link className='border-b' to='/dashboard/manageproducts'>Manage Products</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
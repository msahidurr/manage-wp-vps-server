import { Link } from '@inertiajs/react';

export default function SideBar() {
    return <>
        <div className="sidebar">
            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
                        <Link href="#" className="nav-link">
                            <i className="nav-icon fas fa-th"></i>
                            <p>
                                Connect Server
                            </p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </>
}
import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

// Import custom components
import UserPanel from './user-panel.component';
import Search from './search.component';

class Sidebar extends Component {
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">

                    <UserPanel/>

                    <Search/>

                    <ul className="sidebar-menu">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="active">
                            <IndexLink to={'/dashboard'} activeClassName="active"><i
                                className="fa fa-dashboard"></i><span>Dashboard</span>
                            </IndexLink>
                        </li>
                    </ul>
                </section>
            </aside>
        );
    }
}

export default Sidebar
import * as React from "react";
import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import './header.scss';

interface NavItem {
    text: string;
    isActive: boolean;
}

class Header extends React.Component<any, any> {

    state = {
        navItems: [
            {text: 'Services', isActive: true},
            {text: 'Industries', isActive: false},
            {text: 'Cases', isActive: false},
            {text: 'Contact', isActive: false},
        ] as NavItem[],
    };

    render() {
        return (
            <div className="header-component">
                <nav className="navbar navbar-expand-lg bg-primary fixed-top position-relative py-3">
                    <div className="container px-6">
                        <a className="navbar-brand" href="/link"><Logo/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse justify-content-center">
                            <ul className="nav">
                                {this.state.navItems.map((item: any, index: number) => (
                                    <li className="nav-item" key={index}>
                                        <a className={`nav-link ${item.isActive ? 'active' : ''}`} href="/link">
                                            {item.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button type="button" className="btn btn-outline-primary mr-6">Let's Talk</button>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
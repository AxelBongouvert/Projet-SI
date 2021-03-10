import React from 'react';

class Footer extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand navbar-light bg-white topbar static-top shadow fixed-bottom">
                    <ul class="navbar-nav">

                        <li class="nav-item no-arrow">
                            <a class="nav-link" href="#" id="userDropdown" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <img class="img-profile rounded-circle" src="img/undraw_profile.svg"/>
                            </a>
                        </li>

                        <li class="nav-item no-arrow mx-4">
                            <a class="nav-link" href="#" id="alertsDropdown" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-cart-plus fa-fw"></i>
                                
                            </a>
                        </li>

                        <li class="nav-item no-arrow mx-4">
                            <a class="nav-link" href="#" id="messagesDropdown" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-envelope fa-fw"></i>
                            </a>
                        </li>

                        <li class="nav-item no-arrow mx-4">
                            <a class="nav-link" href="#" id="messagesDropdown" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-dot-circle fa-fw"></i>
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>
        );
    }
}

export default Footer;
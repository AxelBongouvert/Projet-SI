import React from 'react';

class Header extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand navbar-light bg-white topbar static-top shadow">
                    <ul class="navbar-nav justify-content-center">
                        <h6 class="m-0 font-weight-bold text-primary">Tableau de bord</h6>
                    </ul>
                </nav>
            </div>
            );
        }
    }
    
    export default Header;
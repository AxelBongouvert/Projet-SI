import React from 'react';

class Menu extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer class="footer text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <a href="/Profil">Profil</a>
                        </div>
                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <a href="/">Promo</a>
                        </div>
                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <a href="/">Messages</a>
                        </div>
                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <a href="/">Plus</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Menu;
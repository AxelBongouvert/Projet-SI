import React from 'react';

class Menu extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <footer class="footer text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 mb-5 mb-lg-0">
                                <h3><a class="btn btn-outline-light btn-social mx-1" href="/Profil">Profil</a></h3>
                            </div>
                            <div class="col-lg-3 mb-5 mb-lg-0">
                                <h3><a class="btn btn-outline-light btn-social mx-1" href="/">Promo</a></h3>
                            </div>
                            <div class="col-lg-3 mb-5 mb-lg-0">
                                <h3><a class="btn btn-outline-light btn-social mx-1" href="/">Messages</a></h3>
                            </div>
                            <div class="col-lg-3 mb-5 mb-lg-0">
                                <h3><a class="btn btn-outline-light btn-social mx-1" href="/">Plus</a></h3>
                            </div>
                        </div>
                    </div>  
                </footer>
            </div>
            
        );
    }
}

export default Menu;
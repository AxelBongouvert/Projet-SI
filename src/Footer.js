import React from 'react';

class Footer extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <footer class="footer text-center fixed-bottom"> 
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <a class="btn btn-outline-light btn-social mx-2" href="/Profil">Profil</a>
                                <a class="btn btn-outline-light btn-social mx-2" href="/">Promo</a>
                                <a class="btn btn-outline-light btn-social mx-2" href="/">Messages</a>
                                <a class="btn btn-outline-light btn-social mx-2" href="/">Plus</a>
                            </div>
                        </div>
                    </div>  
                </footer>
            </div>    
        );
    }
}

export default Footer;
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class Choix extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Footer></Footer>
            </div>
        );
    }
}

export default Choix;
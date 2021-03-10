import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class Messages extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Header></Header>
                <p>Messages</p>
                <Footer></Footer>
            </div>
        );
    }
    
}
    
export default Messages;
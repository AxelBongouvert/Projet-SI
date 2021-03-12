import React from 'react';
import Retour from './Retour.js';
import Footer from './Footer.js';

class Messages extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
				<Retour name="Messages"></Retour>
                <p>Messages</p>
                <Footer></Footer>
            </div>
        );
    }
    
}
    
export default Messages;
import React from 'react';
import { withRouter } from "react-router-dom";

class Retour extends React.Component {
        
    constructor(props) {
        super(props);
    }

    function = (event) => { 
        const { history } = this.props;
        history.goBack();
    }

    render() {
        return (
            <div>
				<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow fixed-top">
                    <ul class="navbar-nav justify-content-center">
                        <button class="rounded-circle border-0 bg-white" id="sidebarToggle" onClick={(this.function)}><i class="fas fa-arrow-left fa-fw"></i></button>
                        <h6 class="m-2 font-weight-bold text-danger">{this.props.name}</h6>    
					</ul>
				</nav>
				<br /><br /><br /><br />
			</div>
        );
    }
}

export default withRouter(Retour);
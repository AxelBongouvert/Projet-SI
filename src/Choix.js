import React from 'react';

class Accueil extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
                <footer class="footer text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 mb-10 mb-lg-0">
                               <a href=""><h4 class="text-uppercase mb-4">Je veux aider à déménager</h4></a>
                            </div>
                            <div class="col-lg-4 mb-10 mb-lg-0">
                                <a href="/Questionnaire"><h4 class="text-uppercase mb-4">Je déménage</h4></a>
                            </div>
                        </div>
                    </div>
                </footer>
            );
        }
    }
    
    export default Accueil;
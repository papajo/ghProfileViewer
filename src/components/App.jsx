import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//new ES6 style
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: 'papajo',
            userData: [],
            userRepos: [],
            perPage: 5
        }
    }
    render(){
        return(
            <div>
                {this.props.clientId}
            </div>
        )
    }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};

App.defaultProps = {
    clientId: 'f0f41ed47df4204128fd ',
    clientSecret: 'e032b195a59edc165ac4eb61604c02b39b546477'
}

export default App
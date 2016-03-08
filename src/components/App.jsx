import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx'
//import RepoList from './github/RepoList.jsx'
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
    //Get user data from github
    getUserData() {
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({userData: data});
            }.bind(this),
            error: function(xhr,status,err) {
                this.setState({username: null});
                alert(err);
            }.bind(this)
        });
    }
    //Get Repo list for the user
    getUserRepos() {
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'/repos?per_Page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({userRepos: data});
            }.bind(this),
            error: function(xhr,status,err) {
                this.setState({username: null});
                alert(err);
            }.bind(this)
        });
    }
    
    componentDidMount() {
        this.getUserData();
        this.getUserRepos();
    }
    
    render(){
        return(
            <div>
                <Profile {...this.state} />
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
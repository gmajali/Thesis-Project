import React from 'react';
import UserInfo from "./UserInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import Tabs from './tabs.js'

class UserProfile extends React.Component {


	render() {
		return (
			<div>
			<UserInfo/>      
        
			<div>
        <Tabs/>    
      </div>
    </div>
		)	
	}
}

export default UserProfile;
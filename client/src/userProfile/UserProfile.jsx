import React from 'react';
import FavCard from "./FavCard.jsx";
import { Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import UserInfo from "./UserInfo.jsx";
import Pagination from './Pagination';
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';

class UserProfile extends React.Component {
	constructor(props) {
    super(props)
      var exampleItems = [...Array(14).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
      this.state = {
          exampleItems: exampleItems,
          pageOfItems: []
      };
      
  
 
    
      this.onChangePage = this.onChangePage.bind(this);
    }
  

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

	render() {
		return (
			<div>
			  <UserInfo/>      
            <h4 className="h4pagi">Charities</h4>
              <Row>
              {this.state.pageOfItems.map(item =>
				<FavCard key={item.id} item={item}/>	
              )}
			</Row>
			<div>
            <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
            </div>
          </div>
		)	
	}
}

export default UserProfile;
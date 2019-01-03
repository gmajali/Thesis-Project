import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import FileBase64 from "react-file-base64";
import FavCard from "./FavCard.js";
import {
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { TabContent, TabPane, Card, CardTitle, CardText} from 'reactstrap';
import classnames from 'classnames';

import $ from "jquery";
import UserInfo from "./UserInfo.js";
import Pagination from "./Pagination";
import Tabs from './tabs.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    //var result = getAllCh();
    var result = [{ id: 1, name: "Azhar" }];

    console.log("hhhhhhhhhh", result);
    var exampleItems = result.map(i => ({
      id: i.id,
      name: i.name
    }));
    this.state = {
      exampleItems: exampleItems,
      pageOfItems: [],
      modal: false,
      test: [],
      value: "",
      files: [],
      isNotUpload: true,
      image: "",
      activeTab: '1'

    };
    this.toggle = this.toggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    var data = { owner_id: 1 };
    console.log("here owner_id: 1", data);
    var charAll = $.ajax({
      url: "/userCharities",
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
      success: function(data) {
        console.log(data, "/charities/charities/charities/charities");
        this.setState({
          test: data
        });
        return data;
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    };
  }

  handleSubmit() {
    this.toggle();
    console.log("handleSubmit");
    const charityObj = {
      name: this.state.name,
      amount: this.state.amount,
      description: this.state.description,
      location: this.state.location,
      owner_id: 1,
      image: this.state.image
    };

    console.log("charityObj: ", charityObj);
    $.ajax({
      url: "/charities",
      type: "POST",
      data: JSON.stringify(charityObj),
      contentType: "application/json",
      success: function(data) {
        console.log("ad charities in Db", data);
      },
      error: function(error) {
        console.error("errorrrrrr", error);
      }
    });
    window.location.reload();
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  getFiles(files) {
    this.setState({ files: files[0].base64 });
    var baseStr = files[0].base64.substr(22);
    console.log("files new: ", baseStr);

    $.ajax({
      url: "https://api.imgur.com/3/image",
      type: "POST",
      data: JSON.stringify(baseStr),
      headers: {
        Authorization: "Client-ID 0d9a88ca2265606"
      },
      contentType: "undefined",
      success: data => {
        console.log("image uploaded", data.data.link);
        this.setState({
          isNotUpload: false,
          image: data.data.link
        });
      },
      error: function(error) {
        console.error("image not uploaded", error);
      }
    });
    // window.location.reload()
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div class="container-fluid">
        {/* here the design */}

        <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggleTab('1'); }}
            >
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggleTab('2'); }}
            >
              Charities
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                {/* <h4>Tab 1 Contents</h4> */}

 <div class="card text-center">
  <div class="card-header">
    
  <div className="card-body" id="profile">
<div>
<img  src="https://www.mikonoexpogroup.com/mikono/wp-content/uploads/2017/12/profile-pictures.png" alt="User" height="none"/>

</div>
    <div/>
    <h4 class="card-title"> <strong>Azhar Albakri</strong> </h4>
    <h5 class="card-text"> azhar@gmail.com </h5>
    <h5 class="card-text"> +962 79642 6783 </h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Edit Profile</a>
  </div>
</div>
</div>


              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="2">
                   <Tabs />

          </TabPane>
        </TabContent>
      </div>

      </div>
    );
  }
}

export default UserProfile;

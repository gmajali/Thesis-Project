import React from 'react';
// import { TabContent, TabPane, Nav, NavItem, Row, Col } from 'reactstrap';
// import classnames from 'classnames';
// import $ from "jquery";
// import './style.css';
// import Pagination from './Pagination';
// import FavCard from './FavCard';
import axios from 'axios';
import organizations from '../organizations';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      exampleItems: []
    };
    this.onChangePage = this.onChangePage.bind(this);
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  componentDidMount() {
    let that = this;
    axios.post('/userCharities', {
      owner_id: 1
    })
      .then(function (res) {
        console.log(res);
        that.setState({
          exampleItems: res.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(this.state.exampleItems, 'exampleItems')

  }

  // componentDidMount() {
  //   var data = { owner_id: 1 };
  //   $.ajax({
  //     url: "/userCharities",
  //     type: "POST",
  //     data: JSON.stringify(data),
  //     contentType: "application/json",
  //     success: function (data) {
  //       console.log(data, "/charities/charities/charities/charities");
  //       this.setState({
  //         exampleItems: data
  //       });
  //       console.log(data, 'dataaaa')
  //       return data;
  //     }.bind(this),
  //     error: function (status, err) {
  //       console.error(this.props.url, status, err.toString());
  //     }.bind(this)

  //   });

  render() {
    if (this.state.exampleItems) {
      console.log(this.state.exampleItems, 'skajdhaskdhj')
      return (
        <div>
          {this.state.exampleItems !== [] && this.state.exampleItems.map(item => {
            return (
              <organizations item={item} />
            )
          }
          )}
        </div>
      )
    } else {
      return (
        <div>akhdkjashdjk</div>
      )
    }

  }

  /* <div className="centerTab">
        <Nav tabs>
          <NavItem>
            <button className={classnames({ active: this.state.activeTab === '1' }),"btnTab"}
            onClick={() => { this.toggle('1'); }}>
        Charities
            </button>
          </NavItem>
        <NavItem>
          <button
            className={classnames({ active: this.state.activeTab === '2' }), "btnTab"}
              onClick={() => { this.toggle('2'); }}>
Donations
            </button>
          </NavItem>
        </Nav >
      <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4 className="h4pagi">Charities</h4>
              <Row>
               
              </Row>
              <div>
                <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          Donations Go Here
          </TabPane>
      </TabContent >
      </div > */
}
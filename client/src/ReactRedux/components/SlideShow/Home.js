import React, { Fragment } from 'react';
import {Row} from 'reactstrap';
import './Home.css';
import redone from './redone.jpg';
// import '../App.css'

import HomeCharities from '../HomeCharities.js';
// import ChartPie from '../Chart.js';


import $ from "jquery";



class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      test : [],
      
    };
  }

  componentDidMount() {
    // console.log("here")
    var charAll = $.ajax({
      url: '/charities',
      dataType: 'json',
      type: "GET",
      // data: JSON.stringify({"owner_id": 2}),
      success: function(data) {
          console.log(data,"app in ajax ")
          this.setState({
            test: data
          })
       return data;
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
    // window.location.reload()
}

  render() {
    return (
      
      <div className="img-container">
        <img src={redone} alt='not loading' />
        {/* <button className="btn">Start Fundraising</button> */}
     
      <div>
       <Row>
          {this.state.test.map(item => (
            <HomeCharities key={item.id} item={item} />
          ))}
        </Row>
        </div>

        <div>
        {/* <ChartPie /> */}
        </div>
       </div>
    )
  }
  
}
export default Home;
// import React, { Component } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   // CarouselControl,
//   CarouselIndicators,
//   CarouselCaption
// } from 'reactstrap';
// import './SlideShow.css'

// const items = [
//   {
//     src: 'https://images.unsplash.com/photo-1526817575615-3685e135615d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1888&q=80',
//     altText: 'Start Raising Money Now',
//     caption: 'Start Raising Money Now'
//   },
// ];


// class SlideShow extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { activeIndex: 0 };
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//     this.goToIndex = this.goToIndex.bind(this);
//     this.onExiting = this.onExiting.bind(this);
//     this.onExited = this.onExited.bind(this);
//   }

//   onExiting() {
//     this.animating = true;
//   }

//   onExited() {
//     this.animating = false;
//   }

//   next() {
//     if (this.animating) return;
//     const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
//     this.setState({ activeIndex: nextIndex });
//   }

//   previous() {
//     if (this.animating) return;
//     const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
//     this.setState({ activeIndex: nextIndex });
//   }

//   goToIndex(newIndex) {
//     if (this.animating) return;
//     this.setState({ activeIndex: newIndex });
//   }

//   render() {
//     const { activeIndex } = this.state;

//     const slides = items.map((item) => {
//       return (
//         <CarouselItem
//           onExiting={this.onExiting}
//           onExited={this.onExited}
//           key={item.src}
//         >
//         <div className="img-container">
//         <img src={item.src} alt={item.altText} />
//           <CarouselCaption captionHeader={item.caption} />
//         </div>

//         </CarouselItem>
//       );
//     });

//     return (
//       <Carousel
//         activeIndex={activeIndex}
//         next={this.next}
//         previous={this.previous}
//       >
//         <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
//         {slides}

//       </Carousel>
//     );
//   }
// }


// export default SlideShow;
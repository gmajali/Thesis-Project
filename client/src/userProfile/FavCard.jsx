import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Row, Col, Container } from 'reactstrap';
import PropTypes from 'prop-types';
// import garage from '../style/background.jpeg';

import './style.css';

class FavCard extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
      return (
            <Col sm='3'>
              <Card body>
              <CardBody>
                <CardTitle>{this.props.item.name}</CardTitle>
                <CardSubtitle>{this.props.item.name}</CardSubtitle>
              </CardBody>
              <img width="100%" alt="Card image cap" />
              <CardBody>
                <CardText>{this.props.item.name}</CardText>
                <CardLink href="#">View</CardLink>
                <CardLink href="#">Remove</CardLink>
              </CardBody>
              </Card>
              </Col>
            
      );
    }
};




Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}

Row.propTypes = {
  noGutters: PropTypes.bool,
  // see https://reactstrap.github.io/components/form Form Grid with Form Row
  form: PropTypes.bool
}


const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    // example size values:
    // 12 || "12" => col-12 or col-`width`-12
    // auto => col-auto or col-`width`-auto
    // true => col or col-`width`
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  // override the predefined width (the ones above) with your own custom widths.
  // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
  widths: PropTypes.array,
}



export default FavCard;
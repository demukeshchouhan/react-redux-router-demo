import React, { Component } from 'react';
import styled from "styled-components";
import {
  Grid, Row, Col
} from "react-bootstrap";

// css
const NotFoundDiv = styled.div`
  background-color : #f9f9f9;
  color : #cdcdcd;
  padding: 1rem 2rem;
  border : 0.5rem dashed #ddd;
  font-size : 2rem;
  box-shadow: 0 0.3rem 1rem #eee;
  display:inline-block;
  min-width:450px;
  min-height:80px;
  line-height: 5rem;
`;

export default class NotFound extends Component {
  render() {
    return (
      <Row>
        <Col md={4} mdOffset={4}>
        <NotFoundDiv>404, Page Not Found</NotFoundDiv>
        </Col>
      </Row>
    )
  }
}

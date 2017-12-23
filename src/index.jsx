import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, NavLink, Link, Switch } from 'react-router-dom';

import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogPost from "./components/Blog/BlogPost";
import NotFound from "./components/404";
import store from "./store";

import styled, { injectGlobal } from "styled-components";

import {
  Navbar, Nav, NavItem, Grid, Row
} from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";


// css
injectGlobal`
  body{
    background-color: #f9f9f9;
  }
`;
const Navbar_grey = styled(Navbar)`
  background-color : #6c08c9;
  color : #fff;
  border: none;
  border-radius:0px;
`;

const NavbarBrand = styled(Navbar.Brand)`
  color : #f9f9f9 !important;
` ;

const NavItemLink = styled(NavItem)`
  > a{
    color : #f9f9f9 !important;
  }
`;

const CustomNav = styled(Nav)`
  li.active > a{
    color :#e9e9e9 !important;
    background-color : #5b09a7  !important;
  }
`;



const Layout = () => (
    <BrowserRouter>
      <div>
     <Navbar_grey>
     <Navbar.Header>
        <NavbarBrand>React-Redux-Router Blog</NavbarBrand>
        <CustomNav activeKey={1}  >
          <LinkContainer to="/" exact={true}>
            <NavItemLink eventKey={1}>Home</NavItemLink>
          </LinkContainer>
          <LinkContainer to="/blog">
            <NavItemLink eventKey={2}>Blog</NavItemLink>
          </LinkContainer>
        </CustomNav>
      </Navbar.Header>
     </Navbar_grey>
      
      <Grid>
        <Row className="show-grid">
          <Switch>
            <Route exact={true}  path="/" component={Home} />
            <Route exact={true}  path="/blog" component={Blog} />
            <Route path="/blog/post/:id" component={BlogPost} />
            <Route component={NotFound} />
        </Switch>
        </Row>
      </Grid>
      </div>
    </BrowserRouter>
);



render(
    <Provider store={store}>
      <Layout />
    </Provider>,
    document.getElementById("root")
);


store.subscribe(() => {
  console.log("Main Store", store.getState());
});


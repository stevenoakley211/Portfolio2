import {  NavLink } from "react-router-dom";
import styled from "styled-components";

function NavBar(props) {
//   Custom styled components
  const NavBox = styled.ul`
    z-index: 1;
    position: fixed;
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: rgba(40, 85, 156, 1);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  `;
  const NavItem = styled.li`
    float: right;
    > a {
      display: block;
      color: white;
      text-align: center;
      margin: 2px;
      padding: 14px 16px;
      text-decoration: none;
      background-color: rgba(40, 85, 156, 1);
      font-weight: bold;
    }
    > a:hover {
      transition: 0.8s;
      color: rgb(105,255,155);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      background-color: rgba(255, 255, 255, 1);
    }
  `;

  return (
    <div>
      <NavBox>
        {/* <NavItem>
            <NavLink to="/">Home</NavLink>
            </NavItem> */}
        <NavItem>
          <NavLink to="/resume">RESUME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">ABOUT</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects">PROJECTS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/shop">SHOP</NavLink>
        </NavItem>
      </NavBox>
    </div>
  );
}

export default NavBar;

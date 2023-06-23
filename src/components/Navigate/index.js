// Navigation.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navigate.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li className="link">
          <NavLink to="/">리딩타임이란</NavLink>
        </li>
        <li className="link">
          <NavLink to="/about">수업후기</NavLink>
        </li>
        <li className="link">
          <NavLink to="/contact">무료체험 신청</NavLink>
        </li>
        <li className="link">
          <NavLink to="/login">이용권 구매</NavLink>
        </li>
        <li className="link">
          <NavLink to="/logout">고객센터</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

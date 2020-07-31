import React from 'react';

import { IoIosArrowDown, IoIosGlobe } from 'react-icons/io';

import { Component } from './styles';

const Header = () => {
  return (
    <Component>
        <div>
          <a href="/digital-house-clone">
            <img src={require('../../assets/logo.png')}/>
          </a>
          <nav>
            <a href="/digital-house-clone">
              Para Você 
              <IoIosArrowDown size={16} />
            </a>
            <a href="/digital-house-clone">
              Para Empresas
            </a>
            <a href="/digital-house-clone">
              Para Escolas
            </a>
            <a href="/digital-house-clone">
              Webinars
            </a>
            <a href="/digital-house-clone">
              News
              <IoIosArrowDown size={16} />
            </a>
          </nav>
        </div>
        <a href="/digital-house-clone"><IoIosGlobe size={16}/> | BR</a>
      </Component>
  );
}

export default Header;
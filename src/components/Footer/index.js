import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Estudo Feito Por
        {' '}
        <a href="https://www.linkedin.com/in/lucas-maia-alves-995953171/">
          Lucas Maia
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;

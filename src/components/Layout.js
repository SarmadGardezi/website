import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import favicon16 from '../assets/me16.png';
import favicon32 from '../assets/me32.png';
import LayoutHeader from './LayoutHeader';
import './style/index.css';
import './style/common.css';
import './style/generic.css';

const Layout = ({ children, data, className = '', theme, themer}) => (
  <div className={'lr05 '}>
    <Helmet
      title="Dhilip's Journey"
      meta={[
        {
          name: 'description',
          content: 'A Personal blog on React, javascript, frontend development',
        },
        { name: 'keywords', content: 'gatsby, react, blog, dhilipkmr, casualblogger' },
      ]}
      link={[
        { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` },
        { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` }
      ]}
    />
    <LayoutHeader className={className} theme={theme} themer={themer}>
      {children}
    </LayoutHeader>
  </div>
);


Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

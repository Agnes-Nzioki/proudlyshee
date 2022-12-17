import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Proudlyshee',
  description: 'We sell the best products for cheap',
  keywords: 'clothes, buy cosmetics, affordable clothes',
};

export default Meta;

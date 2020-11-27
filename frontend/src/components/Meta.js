import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta name="keywords" content={keywords}></meta>
    </Helmet>
  );
};
Meta.defaultProps = {
  title: "Looks Easy",
  description: "Makes commerce easier",
  keywords: "commerce, selling, buying",
};

export default Meta;

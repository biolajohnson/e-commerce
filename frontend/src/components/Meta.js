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
  title: "Two sisters Farm",
  description: "Buy food directly from farmers",
  keywords: "farm, farmer, food, foodstuff",
};

export default Meta;

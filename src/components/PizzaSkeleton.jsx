import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="132" r="110" />
    <rect x="4" y="267" rx="10" ry="10" width="280" height="23" />
    <rect x="9" y="318" rx="10" ry="10" width="273" height="95" />
    <rect x="17" y="447" rx="10" ry="10" width="104" height="32" />
    <rect x="138" y="439" rx="24" ry="24" width="139" height="45" />
  </ContentLoader>
);

export default PizzaSkeleton;

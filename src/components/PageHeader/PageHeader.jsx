import React from "react";
import { PageBanner } from "./PageBanner";
import { PageNavigation } from "./PageNavigation";
const PageHeader = () => {
  return (
    <h1>
      <PageBanner />
      <PageNavigation />
    </h1>
  );
};

export default PageHeader;

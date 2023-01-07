import React from "react";

const Page1 = () => {
  var htmlContent = require("./map.html");

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default Page1;

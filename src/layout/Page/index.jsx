import React from "react";
import { Layout } from "antd";

import "./Page.scss";

function Page({ children }) {
  return <Layout className="page">{children}</Layout>;
}

export default Page;

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  return (
    <div className="flex items-center justify-center">
      <Tabs>
        <TabList>
          <Tab>Fuzzy Teddy bear</Tab>
          <Tab>Honeypot Teddy bear</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
          <h2>Any content 1</h2>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
          <h2>Any content 2</h2>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
          <h2>Any content 3</h2>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;

import { Tabs, TabPane } from "@douyinfe/semi-ui";
import Home from "./pages/home";
import TableTest from "./pages/tableTest";
import SemiUI from "./pages/semiUi";
import HeadlessUi from "./pages/headlessUi";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Tabs type="button">
        <TabPane tab="semi Design 组件尝试" itemKey="1">
          <SemiUI />
        </TabPane>
        <TabPane tab="react-table" itemKey="2">
          <TableTest />
        </TabPane>
        <TabPane tab="tailWind Css" itemKey="3">
          <Home />
        </TabPane>
        <TabPane tab="headlessUi" itemKey="4">
          <HeadlessUi />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;

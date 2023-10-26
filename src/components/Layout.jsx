import { Panel, PanelGroup } from "react-resizable-panels";

import QueryEditor from "./QueryEditor";
import ResizeHandle from "./ResizeHandleUI";
import ResultTable from "./ResultTable";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <PanelGroup
      className="w-full h-full"
      direction="horizontal"
      autoSaveId="hor-panel"
    >
      <Panel className="hidden md:flex" defaultSize={20}>
        <Sidebar />
      </Panel>
      <ResizeHandle direction="horizontal" className="hidden md:flex" />
      <Panel defaultSize={80}>
        <PanelGroup
          className="h-full w-full"
          direction="vertical"
          autoSaveId="ver-panel"
        >
          <Panel defaultSize={35}>
            <QueryEditor />
          </Panel>
          <ResizeHandle direction="vertical" />
          <Panel defaultSize={65}>
            <ResultTable />
          </Panel>
        </PanelGroup>
      </Panel>
    </PanelGroup>
  );
};

export default Layout;

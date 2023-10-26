import { Panel, PanelGroup } from "react-resizable-panels";

import ResizeHandle from "../ResizeHandleUI";
import RecentQueries from "./RecentQueries";
import SavedQueries from "./SavedQueries";
import QueryStats from "./QueryStats";

const Sidebar = () => {
  return (
    <PanelGroup
      className="h-full w-full"
      autoSaveId="sidebar-panel"
      direction="vertical"
    >
      <Panel>
        <RecentQueries />
      </Panel>
      <ResizeHandle direction="vertical" />
      <Panel>
        <SavedQueries />
      </Panel>
      <ResizeHandle direction={"vertical"} />
      <Panel>
        <QueryStats />
      </Panel>
    </PanelGroup>
  );
};

export default Sidebar;

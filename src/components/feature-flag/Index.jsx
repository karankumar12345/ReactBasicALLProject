import Index from "../Light-Dark/Index";
import Random from "../random-color/Random";
import TreeView from "../TreeView/TreeView";
import Tabs from "../Tabs/Tabs";
import { useContext } from "react";
import { FeatureFlagsContext } from "./Context";
import Board from "../ReactTicTacToe/TICTACTOE";

export default function FeatureFlags() {
  const { loading, featureFlags } = useContext(FeatureFlagsContext);
  const component = [
    {
      key: "showLightAndDarkMode",

      component: <Index />,
    },
    {
      key: "TABS",
      component: <Tabs />,
    },
    {
      key: "showRandomColor",
      component: <Random />,
    },
    {
      key: "showTreeView",
      component: <TreeView />,
    },
    {
      key: "tictac",
      component: <Board/>,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return featureFlags[getCurrentKey];
  }
  if (loading) return <h1>Loading Data Please wait </h1>;

  return (
    <div>
      <h2>Feature Flags</h2>
      {component.map((componentitem) =>
        checkEnabledFlags(componentitem.key) ? componentitem.component : null
      )}
    </div>
  );
}

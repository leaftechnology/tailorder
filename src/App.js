import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";

import Home from "./container/HomeContainer";
import Sidebar from "./container/SidebarContainer";
import Pending from "./container/PendingContainer";
import Settings from "./container/SettingsContainer";

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
		Pending: { screen: Pending },
		Settings: { screen: Settings },
	},
	{
		initialRouteName: "Home",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Drawer: { screen: Drawer },
	},
	{
		initialRouteName: "Drawer",
		headerMode: "none"
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);

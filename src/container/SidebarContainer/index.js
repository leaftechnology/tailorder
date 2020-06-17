import * as React from "react";
import { inject, observer } from "mobx-react/native";

import Sidebar from "../../stories/screens/Sidebar";

@inject("logView")
@observer
class SidebarContainer extends React.Component {
	render() {
		const { lastSync } = this.props.logView;
		return (
			<Sidebar
				navigation={this.props.navigation}
				lastSync={lastSync}
			/>
		);
	}
}

export default SidebarContainer;

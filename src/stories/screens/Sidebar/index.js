import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Container, List, ListItem, Content } from "native-base";

const routes = [
	{
		route: "Home",
		caption: "Home",
	},
	{
		route: "Pending",
		caption: "Pending Order",
	},
	{
		route: "Settings",
		caption: "Settings",
	},
];

class Sidebar extends React.PureComponent {
	_renderRow = (data) => {
		const { navigation } = this.props;

		return (
			<ListItem
				button
				onPress={() => navigation.navigate(data.route)}
			>
				<Text>{data.caption}</Text>
			</ListItem>
		);
	}

	_renderTime = (time) => {
		return time ? (new Date(time)).toLocaleString() : null;
	}

	render() {
		const { lastSync } = this.props;
		return (
			<Container>
				<Content>
					<List
						style={styles.contentList}
						dataArray={routes}
						renderRow={this._renderRow}
					/>
					<View style={styles.syncView}>
						<Text style={styles.syncText}>
							Last Synchronization:
						</Text>
						<Text style={styles.syncText}>
							{this._renderTime(lastSync)}
						</Text>
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	contentList: {
		marginTop: 40,
	},
	syncText: {
		color: "#aaa",
	},
	syncView: {
		padding: 15,
	},
});

export default Sidebar;

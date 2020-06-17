import * as React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { observer } from "mobx-react/native";
import { Text, Content, Button } from "native-base";

import TableOrders from "./components/TableOrders";

import { withHeader } from "../../commons";

@observer
class Pending extends React.Component {
  render() {
    const { onTablePress,pendingView, onFetchOrder, onTableLongPress,table,iconSize } = this.props;
    return (
        <Content padder>
            <View style={{flexDirection: "row", width: Dimensions.get("window").width}}>
                <View style={{alignItems: "center", justifyContent: "center",width: Dimensions.get("window").width * 0.55}}>
                    <Button
                        style={styles.button}
                        onPress={onFetchOrder}>
                        <Text>Fetch Orders</Text>
                    </Button>
                </View>

                <View style={{alignItems: "center", justifyContent: "center", width: Dimensions.get("window").width * 0.45}}>
                    <Text style={{fontSize: 26}}>Pending Items</Text>
                </View>
            </View>
          <TableOrders
              iconSize={iconSize}

              orders={pendingView.orders}
            onTablePress={onTablePress}
            onLongPress={onTableLongPress}
            table={table}
          />
        </Content>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 15,
  },
});

export default withHeader(Pending, "Pending Orders");

import * as React from "react";
import { FlatList, View, Text, Dimensions } from "react-native";
import TableOrder from "./TableOrder";

class TableOrders extends React.PureComponent {
  renderItem = ({ item }) => {
      const { onLongPress,onTablePress,iconSize } = this.props;
    return (

      <TableOrder
          iconSize={iconSize}

          id={item.id}
        number={item.table_no}
        onLongPress={onLongPress}
        onTablePress={onTablePress}

      />

    );
  }
    renderPendingItem = ({ item }) => {
            const font = 18



        
        return (

            <View style={{
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 30,

                height: 40,
                width: Dimensions.get("window").width * 0.42}}>

              <Text style={{fontColor: "black",fontSize: font}}>
                  {item.item_name}
              </Text>
                <Text style={{fontColor: "black",fontSize: font}}>
                  x{item.qty}

              </Text>
                <Text style={{fontColor: "black",fontSize: font}}>
                   {item.rate ? parseFloat(item.rate).toFixed(2) : ""}
              </Text>
            </View>

        );
    }


  render() {
    const { orders, table, iconSize } = this.props;


    return (
        <View style={{flexDirection: "row"  }}>
          <View style={{width: Dimensions.get("window").width * 0.55}}>
            <FlatList
              numColumns={iconSize === "vsmall" ? 5 : iconSize === "small" ? 4 : iconSize === "medium" ? 3 : 2}
              data={orders}
              renderItem={this.renderItem}
            />
          </View>

            {table.length > 0 ? (
                <View  style={{width: Dimensions.get("window").width * 0.45 }}>

                    <FlatList
                        numColumns={1}
                        data={table}
                        renderItem={this.renderPendingItem}
                    />
                </View>
            ) : null}

        </View>
    );
  }
}

export default TableOrders;

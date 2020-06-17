import * as React from "react";
import { TouchableOpacity} from "react-native";
import { Col, Grid } from "react-native-easy-grid";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Body,
  Right, Footer, View, Text
} from "native-base";

import Intro from "./components/Intro";
import Order from "./components/Order";
import Listing from "./components/Listing";
import Syncing from "./components/Syncing";
import EmptyListing from "./components/EmptyListing";
import OrderButton from "./components/OrderButton";

import styles from "./styles";

class Home extends React.PureComponent {
  navigate = () => this.props.navigation.navigate("DrawerOpen")

  renderSync() {
    const { isSyncing, syncMessage } = this.props;
    return isSyncing ? <Syncing /> : <EmptyListing syncMessage={syncMessage} />;
  }

  renderOrder() {
    const {
      visibleDialogInput,
      setTableNumber,
      category,
      orderItem,
      setCategory,
      listingItems,
      onClear,
      onOrder,
      removeItem,
      orderedItems,
      confirmOrder,
      clearOrderedItems,
      orderedItemsTotal,
      orderedItemsLength,
      visibleCategoryList,
      toggleCategoryList,
      onDineIn,
      categories,
      useDescription,
      setRemarks,
      remarks,
      decreaseQty,
      orderType,
      setOrderType,
      isNewOrder,
      toggleIsNewOrder,
      iconSize,
      tax,
      taxes,
      taxAmount,
      tableNumber,
        roundoff
    } = this.props;

    if (visibleDialogInput) {
      return (
        <Intro
          onDineIn={onDineIn}
          setTableNumber={setTableNumber}
          orderType={orderType}
          setOrderType={setOrderType}
          isNewOrder={isNewOrder}
          toggleIsNewOrder={toggleIsNewOrder}
          tableNumber={tableNumber}
        />
      );
    }
    return (
      <Grid>
        <Col size={5}>
          {
            listingItems.length === 0
            ? this.renderSync()
            : <Listing
                category={category}
                orderItem={orderItem}
                categories={categories}
                setCategory={setCategory}
                listingItems={listingItems}
                toggleCategoryList={toggleCategoryList}
                visibleCategoryList={visibleCategoryList}
                useDescription={useDescription}
                setRemarks={setRemarks}
                remarks={remarks}
                confirmOrder={confirmOrder}
                iconSize={iconSize}
              />
          }
        </Col>
        <Col size={3} style={styles.colRight}>
          <Order
              roundoff={roundoff}
            onClear={onClear}
            onOrder={onOrder}
            removeItem={removeItem}
            decreaseQty={decreaseQty}
            orderedItems={orderedItems}
            confirmOrder={confirmOrder}
            clearOrderedItems={clearOrderedItems}
            orderedItemsTotal={orderedItemsTotal}
            orderedItemsLength={orderedItemsLength}
            useDescription={useDescription}
            tax={tax}
            taxes={taxes}
            taxAmount={taxAmount}
          />
          <Footer style={{backgroundColor: "white" }}>
            <View style={{flexDirection: "row", justifyContent: "space-between",width: "100%", paddingLeft: 70, paddingRight: 70   }}>
              <Button
                  danger
                  bordered
                  style={styles.delete}
                  onPress={onClear}
                  onLongPress={clearOrderedItems}>
                <Text>Clear</Text>
              </Button>
                        <OrderButton
                            onOrder={onOrder}
                            confirmOrder={confirmOrder}
                            orderedItemsLength={orderedItemsLength}
                        />
            </View>
          </Footer>
        </Col>
      </Grid>
    );
  }

  render() {
    const {
      showDialogInput,
      tableNumber,
      getItems,
      // isTakeAway,
      orderType,
    } = this.props;

    // const takeAwayText = isTakeAway ? "(Take Away)" : "(Dine In)";

    return (
      <Container style={styles.container}>
        <Header>
          <Left style={styles.headerLeft}>
            <Button transparent onPress={this.navigate}>
              <Icon active name="menu" />
            </Button>
          </Left>
          <Body style={styles.headerBody}>
            <TouchableOpacity onPress={showDialogInput}>
              <Title style={styles.bodyTitle}>
                {orderType} - Table {tableNumber}
              </Title>
            </TouchableOpacity>
          </Body>
          <Right style={styles.headerRight}>
            <Button transparent onPress={getItems}>
              <Icon active name="settings" />
            </Button>
          </Right>
        </Header>
        {this.renderOrder()}
      </Container>
    );
  }
}
export default Home;

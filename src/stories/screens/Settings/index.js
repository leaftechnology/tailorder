import * as React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Card,
  Text,
  Content,
  Item,
  Input,
  CheckBox,
  Form,
  Picker
} from "native-base";

import styles from "./styles";

import { FormRow, FormInput } from "./components";

class Settings extends React.PureComponent {
  navigate = () => this.props.navigation.navigate("DrawerOpen")

  renderPrimaryAction() {
    const { isEditing, onPrimary } = this.props;
    const primaryText = isEditing ? "SAVE" : "EDIT";

    return (
      <TouchableOpacity onPress={onPrimary}>
        <Text style={styles.save}>
          {primaryText}
        </Text>
      </TouchableOpacity>
    );
  }

  renderForm(view) {
    const { isEditing } = this.props;
    return isEditing
            ? view
            : <Text style={styles.helpText}>
                Press EDIT to show the form
              </Text>;
  }

  render() {
    const {
      host,
      setHost,
      protocol,
      setProtocol,
      queueHost,
      setQueueHost,
      hasPending,
      useDescription,
      toggleHasPending,
      toggleUseDescription,
      deviceId,
      setDeviceId,
      enablePrint,
      toggleEnablePrint,
      iconSize,
      setIconSize,
      tax,
      setTax,
      exclusiveTax,
      toggleExclusiveTax,
        toggleRoundOff,
        roundoff
    } = this.props;

    return (
      <Container>
        <Header>
          <Left style={styles.headerLeft}>
            <Button transparent onPress={this.navigate}>
              <Icon active name="menu" />
            </Button>
          </Left>
          <Body style={styles.headerBody}>
            <Title style={styles.bodyTitle}>
              Settings
            </Title>
          </Body>
          <Right style={styles.headerRight}>
            {this.renderPrimaryAction()}
          </Right>
        </Header>
        <Content contentContainerStyle={styles.content}>
          <ScrollView>
            <Card style={styles.card}>
              <Form style={styles.cardView}>
                <Text>
                  ERPNext URL
                </Text>
                <Text style={styles.cardHelpText}>
                  Use for syncing
                </Text>
                {
                  this.renderForm(
                    <View>
                      <Item regular>
                        <Input
                          value={host}
                          placeholder="erpnext.com"
                          onChangeText={setHost}
                        />
                      </Item>
                      <View style={styles.checkBoxView}>
                        <CheckBox
                          color="#D9D5DC"
                          checked={protocol === "https:"}
                          onPress={setProtocol}
                        />
                        <Text style={styles.checkBoxText}>
                          Is HTTPs
                        </Text>
                      </View>
                      <Item regular>
                        <Input
                          value={deviceId}
                          placeholder="Device ID (e.g. abc01234)"
                          onChangeText={setDeviceId}
                        />
                      </Item>
                    </View>
                  )
                }
              </Form>
              <Form style={[styles.cardView, styles.cardViewNext]}>
                <Text>
                  Queueing Server
                </Text>
                <Text style={styles.cardHelpText}>
                  Queue the orders for the kitchen and the POS
                </Text>
                {
                  this.renderForm(
                    <View>
                      <Item regular>
                        <Input
                          value={queueHost}
                          placeholder="xxx.xxx.xxx.xxx"
                          onChangeText={setQueueHost}
                        />
                      </Item>
                      <View style={styles.checkBoxView}>
                        <CheckBox
                          color="#D9D5DC"
                          checked={hasPending}
                          onPress={toggleHasPending}
                        />
                        <Text style={styles.checkBoxText}>
                          Enable Pending Orders
                        </Text>
                      </View>
                      <View style={styles.checkBoxView}>
                        <CheckBox
                          color="#D9D5DC"
                          checked={enablePrint}
                          onPress={toggleEnablePrint}
                        />
                        <Text style={styles.checkBoxText}>
                          Enable Receipt Print
                        </Text>
                      </View>
                    </View>
                  )
                }
              </Form>
              <Form style={[styles.cardView, styles.cardViewNext]}>
                <Text>
                  Listing Settings
                </Text>
                <Text style={styles.cardHelpText}>
                  Set your listing appearance
                </Text>
                
                {
                  this.renderForm(
                    <View>
                      <View style={styles.checkBoxView}>
                        <CheckBox
                          color="#D9D5DC"
                          checked={useDescription}
                          onPress={toggleUseDescription}
                        />
                        <Text style={styles.checkBoxText}>
                          Use Description
                        </Text>
                      </View>
                      <Text>
                        Icon Size
                      </Text>
                      <View style={styles.dialogView}>
                        <Picker
                          note
                          mode="dropdown"
                          style={{ width: 180 }}
                          selectedValue={iconSize}
                          onValueChange={setIconSize}
                        >
                          <Picker.Item label="Very Small" value="vsmall" />
                          <Picker.Item label="Small" value="small" />
                          <Picker.Item label="Medium" value="medium" />
                          <Picker.Item label="Large" value="large" />
                        </Picker>
                      </View>
                    </View>
                  )
                }
              </Form>
              <FormRow
                notFirst
                title="Currency Settings"
                subtitle="Modifiers on prices, and others"
              >
                {
                  this.renderForm(
                    <View>
                      <FormInput
                        value={tax}
                        onChangeText={setTax}
                        label="Tax Percentage (%)"
                      />
                      <View style={styles.checkBoxView}>
                        <CheckBox
                          color="#D9D5DC"
                          checked={exclusiveTax}
                          onPress={toggleExclusiveTax}
                        />
                        <Text style={styles.checkBoxText}>
                          Exclusive Tax
                        </Text>
                      </View>
                      <View style={styles.checkBoxView}>
                        <CheckBox
                            color="#D9D5DC"
                            checked={roundoff}
                            onPress={toggleRoundOff}
                        />
                        <Text style={styles.checkBoxText}>
                          Roundoff
                        </Text>
                      </View>
                    </View>
                  )
                }
              </FormRow>
            </Card>
            <View style={styles.footerView}>
              <TouchableOpacity>
                <Text style={styles.copyrightText}>
                  &copy; 2019 Bai Web and Mobile Lab
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default Settings;

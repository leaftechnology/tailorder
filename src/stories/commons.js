import * as React from "react";
import {
  Container,
  Header,
  Left,
  Button,
  Body,
  Title,
  Right,
  Icon
} from "native-base";

import styles from "./styles";

exports.withHeader = function(WrappedComponent, title) {
  return class extends React.Component {
    render() {
      return (
        <Container>
          <Header>
            <Left style={styles.headerLeft}>
              <Button transparent>
                <Icon active name="menu" />
              </Button>
            </Left>
            <Body style={styles.headerBody}>
              <Title style={styles.bodyTitle}>
                {title}
              </Title>
            </Body>
            <Right style={styles.headerRight} />
          </Header>
          <WrappedComponent {...this.props} />
        </Container>
      );
    }
  };
};

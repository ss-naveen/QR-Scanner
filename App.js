import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";

import { Grid, Row } from "react-native-easy-grid";

import { AppLoading, Constants } from "expo";

import Navigation from "./Components/Navigation";

export default class AnatomyExample extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }
  render() {
    if(this.state.loading) {
      return <AppLoading />;
    }
    return <Navigation />
    /*
    if(this.state.loading) {
      return <AppLoading />;
    }
    return (
      <Container style={{ marginTop: Constants.statusBarHeight }}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
        <Body>
          <Title> Header </Title>
        </Body>
        <Right />
      </Header>
      <Grid
        style={{ alignItems: "center",
        justifyContent: "center"
      }}
      >
        <Row>
          <Text> This is Content Section </Text>
        </Row>
        <Row>
          <Text> Hello World </Text>
        </Row>
      </Grid>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
  */
  }
}

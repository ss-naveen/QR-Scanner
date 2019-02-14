import React from 'react';
import { Container, Text, Button } from "native-base";
import { Grid, Row } from "react-native-easy-grid";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Constants } from "expo";
import HistoryScreen from "../Screens/HistoryScreen";
import ResultScreen from "../Screens/ResultScreen";
import ScannerScreen from "../Screens/ScannerScreen";

const RootStack = createStackNavigator (
  {
    Scanner: {
      screen: ScannerScreen
    },
    History: {
      screen: HistoryScreen
    },
    Result: {
      screen:ResultScreen
    }
  },
  {
    initialRouteName: "Scanner" //Default Screen name
  }
);

export default createAppContainer(RootStack);


/*
//First Screen Coponent
class ScannerScreen extends React.Component {
  static navigationOptions = {
    header: null //Hide the header bar
  };
  render () {
    return (
      <Container style={{ marginTop: Constants.statusBarHeight }}>
        <Grid
          style={{
            alignItems: "center"
          }}
        >

          <Row>
            <Text>Scanner Screen</Text>
          </Row>
          <Row>
            <Button onPress={() => this.props.navigation.navigate("History")}>
              <Text>History</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Result")}>
              <Text>Result</Text>
            </Button>
          </Row>
        </Grid>
      </Container>
    );
  }
}

//Second Screen component
class HistoryScreen extends React.Component {
  static navigationOptions = {
    title: "History" //Set the header title
  };
  render() {
    return (
      <Container style={{ marginTop: Constants.statusBarHeight }}>
        <Grid
        style={{
          alignItems: "center"
        }}
        >
          <Row>
            <Text>History Screen</Text>
          </Row>
        </Grid>
      </Container>
    );
  }
}

//Third Screen Component
class ResultScreen extends React.Component {
  static navigationOptions = {
    title: "Scan Detail" //Set the header title
  };

  render() {
    return (
      <Container style={{ marginTop: Constants.statusBarHeight }}>
        <Grid
          style={{
            alignItems: "center"
          }}
          >
            <Row>
              <Text>Result Screen</Text>
            </Row>
          </Grid>
        </Container>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Scanner: {
      screen: ScannerScreen
    },
    History: {
      screen: HistoryScreen
    },
    Result: {
      screen: ResultScreen
    }
  },
  {
    initialRouteName: "Scanner" //Default sceeen name
  }
);
export default createAppContainer(RootStack);
*/

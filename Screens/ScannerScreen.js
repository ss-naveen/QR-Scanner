import React from "react";
import { Dimensions, StyleSheet, Alert } from "react-native";
import { Container, Text, View, Button, Footer } from "native-base";
import { Grid, Row } from "react-native-easy-grid";
import { withNavigationFocus } from "react-navigation";

import { BarCodeScanner, Permissions } from "expo";

import SQL from "../Components/SQL";

import { FontAwesome } from "@expo/vector-icons";

import { SpinnerScreen } from "../Components/commons";

class ScannerScreen extends React.Component {
  static navigationOptions = {
    header: null // hide the header bar
  };

  state = {
    hasCameraPermission: null
  };

  async componentDidMount() {
    //Ask for camera permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted"});
  }

  saveToDB = qr => {
    SQL.AddQR(qr);
  };

  handleBarCodeScanned = ({ type, data }) => {
    this.saveToDB(data);
    //change screen to Result and pass scanned qr
    Alert.alert(data);
    this.props.navigation.navigate("Result", {
      qr: data
    });
  };

  render() {
      const buttonColor = "green";

      return this.state.hasCameraPermission === null ? (
        <SpinnerScreen />
      ) : this.state.hasCameraPermission === false ? (
        <Message>
          <Text>No access to camera</Text>
        </Message>
      ) : !this.state.scanned && this.props.isFocused ? (
        <Container>
          <BarCodeScanner
            onBarCodeScanned={this.handleBarCodeScanned}
            style={styles.barcodeScanner}
          >
            <Grid>
              <Row style={styles.layerTop} size={1} />
              <Row style={styles.layerCenter} size={2}>
                {/* <View style={styles.layerCenter}> */}
                <View style={styles.layerLeft} />
                <View style={styles.focused} />
                <View style={styles.layerRight} />
                {/* </View> */}
              </Row>
              <Row style={styles.layerBottom} size={1}>
                <FontAwesome
                  size={25}
                  name="history"
                  color={buttonColor}
                  onPress={() => {
                    this.props.navigation.navigate("History");
                  }}
                  style={styles.bottomButtons}
                />
              </Row>
            </Grid>
          </BarCodeScanner>
        </Container>
      ) : (
        <SpinnerScreen />
      );
    }
  }

  const opacity = "rgba(0, 0, 0, .6)";
  const styles = StyleSheet.create({
    barcodeScanner: {
      flex: 1,
      height: Dimensions.get("window").height,
      width: Dimensions.get("window").width,
      justifyContent: "flex-end"
    },
    layerTop: { backgroundColor: opacity },
    layerCenter: {
      flex: 1.4,
      flexDirection: "row"
    },
    layerLeft: {
      flex: 6,
      backgroundColor: opacity
    },
    focused: {
      flex: 30
    },
    layerRight: {
      flex: 6,
      backgroundColor: opacity
    },
    layerBottom: {
      alignItems: "flex-end",

      backgroundColor: opacity,
      justifyContent: "center"
    },
    bottomButtons: {
      marginBottom: 40
    }
  });

  export default withNavigationFocus(ScannerScreen);


  /*
  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for Camera Permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }

    if (this.props.isFocused) {
      return (
        <Container>
          <BarCodeScanner
            onBarCodeScanned={this.handleBarCodeScanned}
            style={styles.barcodeScanner}
          >
            <Footer style={styles.layerBottom}>
              <Grid>
                <Row style={styles.layerBottomRow}>
                  <Button onPress={() => this.props.navigation.navigate("History")}>
                    <Text>History</Text>
                  </Button>
                </Row>
              </Grid>
            </Footer>
          </BarCodeScanner>
        </Container>
      );
    } else {
      return (
        <Container>
         <Text>Loading</Text>
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
  barcodeScanner: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    flex:1,
    justifyContent: "flex-end"
  },
  layerBottom: { backgroundColor: "transparent" },
  layerBottomRow: {
    justifyContent: "center",
    marginHorizontal: 50
  }
});

export default withNavigationFocus(ScannerScreen);
*/
/*
import { TextInput } from "react-native";
import { Container, Text, Button } from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";
import { AppLoading, Constants } from "expo";
import SQL from "../Components/SQL";

class ScannerScreen extends React.Component {
  static navigationOptions = {
    header: null// hide the header bar
  };
  saveToDB = qr => {
    SQL.AddQR(qr);
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
            <Text> Scanner Screen </Text>
          </Row>
          <Row>
            <TextInput
              placeholder="Type here to the qr..."
              onChangeText={qr => this.setState({ qr })}
            />
          </Row>
          <Row>
            <Button
              onPress={() => {
                this.saveToDB(this.state.qr);
              }}
            >
              <Text> Add to db</Text>
            </Button>
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

export default ScannerScreen;
*/

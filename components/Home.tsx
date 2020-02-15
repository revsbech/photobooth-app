import React, {Component} from 'react'
import {Image, Text} from "react-native-elements";
import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import ImageCell from "./ImageCell";

interface Props {
  images: string[]
}

class Home extends Component<Props> {
  public render() {
    const images = this.props.images.map((imageString) => {
      return (
        <ImageCell key={imageString} image={imageString} />
      )
    });

    return (
      <ScrollView>
        <SafeAreaView style={Styles.container}>
            {images}
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: 'center',
    flexDirection: "row",
    width: "100%",
    flexWrap: 'wrap',
    alignItems: "flex-start",
    justifyContent: "space-between",
  }
});

export default Home;
import React, {Component} from 'react'
import {SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import ImageCell from "./ImageCell";

interface Props {
  images: string[];
  onClick: (string) => {};
}

class ImageList extends Component<Props> {

  public render() {
    const images = this.props.images.map((imageString) => {
      return (
        <TouchableOpacity key={imageString} onPress={() => {this.props.onClick(imageString)}}>
          <ImageCell  image={imageString} />
        </TouchableOpacity>
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

export default ImageList;
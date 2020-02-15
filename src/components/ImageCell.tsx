import React, {Component} from 'react'
import {Image, Text} from "react-native-elements";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Dimension} from "../util/size";

interface Props {
  image: string;
}

class ImageCell extends Component<Props> {
  public render() {
    return (
      <View style={Styles.container}>
        <Image style={Styles.image} source={{uri: "https://d3mldn0gkzqaiy.cloudfront.net/" + this.props.image}} />
      </View>
    );
  }
}

const padding = 5;
const cols = 2;
const ratio = 4/3;
const borderWidth = 1;
const margin = 25;
const imageWidth =  Dimension.windowWidth / cols -  2 * padding - 2 * borderWidth - 2 * margin;

const Styles = StyleSheet.create({
  image: {
    width: imageWidth,
    height: imageWidth / ratio
  },
  container: {
    backgroundColor: "white",
    //width: (100 / cols) + "%",
    width: imageWidth + 2 * padding + 2 * borderWidth,
    padding: padding,
    borderWidth: borderWidth,
    borderColor: "#000000",
    shadowColor: "#333333",
    shadowOffset: { width: 15, height: 15 },
    shadowOpacity: 0.22,
    shadowRadius: 10,
    elevation: 10,
    margin: margin,
  }
});


export default ImageCell;
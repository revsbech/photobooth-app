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

const padding = 10;
const cols = 2;
const ratio = 4/3;

const imageWidth =  Dimension.windowWidth / cols -  2 * padding;

const Styles = StyleSheet.create({
  image: {
    width: imageWidth,
    height: imageWidth / ratio
  },
  container: {
    backgroundColor: "white",
    width: 100 / cols + "%",
    padding: padding,
  }
});


export default ImageCell;
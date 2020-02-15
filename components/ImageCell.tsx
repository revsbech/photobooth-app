import React, {Component} from 'react'
import {Image, Text} from "react-native-elements";
import {StyleSheet, View} from "react-native";

interface Props {
  image: string
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

const Styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  container: {
    backgroundColor: "white",
    width: "50%",
    padding: 10,
  }
});


export default ImageCell;
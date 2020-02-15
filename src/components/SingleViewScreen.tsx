import React, {Component} from 'react'
import {Image, Text} from "react-native-elements";
import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {Dimension} from "../util/size";

interface Props {
  navigation: StackNavigationProp;
  image: string;
  route: any;
}

class SingleViewScreen extends Component<Props> {
  public render() {
    const {image} = this.props.route.params;
    console.log(image,"THEIMAGE");
    return (
      <ScrollView>
        <SafeAreaView>
          <View style={Styles.container}>
            <Image style={Styles.image} source={{uri: "https://d3mldn0gkzqaiy.cloudfront.net/" + image}} />
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}
const padding = 10;
const ratio = 4/3;

const imageWidth =  Dimension.windowWidth -  2 * padding;

const Styles = StyleSheet.create({
  container: {
    padding: padding,
  },
  image: {
    width: imageWidth,
    height: imageWidth / ratio
  },

});

export default SingleViewScreen;
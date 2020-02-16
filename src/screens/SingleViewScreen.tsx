import React, {Component} from 'react'
import {Image as Img, Text} from "react-native-elements";
import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {Dimension} from "../util/size";

interface Props {
  navigation: StackNavigationProp;
  route: any;
}

class SingleViewScreen extends Component<Props> {
  public render() {
    const { image } = this.props.route.params;
    return (
      <ScrollView style={{backgroundColor: "white"}}>
        <SafeAreaView>
          <View style={Styles.container}>
            <Img style={Styles.image} source={{uri: "https://d3mldn0gkzqaiy.cloudfront.net/" + image.image}} />
            <View style={Styles.detailsContainer}>
              <Text>Date: {image.date}</Text>
            </View>

          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}
const padding = 0;
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
  detailsContainer: {
    padding: 25,
  }
});

export default SingleViewScreen;
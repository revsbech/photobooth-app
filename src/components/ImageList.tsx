import React, {Component} from 'react'
import {SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, RefreshControl, View} from "react-native";
import ImageCell from "./ImageCell";
import {Text} from "react-native-elements";
import {Image} from "../entities/Image";

interface Props {
  images: Image[];
  onClick: (image: Image) => void;
  isRefreshing: boolean;
  onRefresh: () => void;
  date: Date;
}

class ImageList extends Component<Props> {

  public render() {

    if(this.props.images.length == 0) {
      const dateString = this.props.date.getDate() + "/" + (this.props.date.getMonth() + 1) + "-" + this.props.date.getFullYear();
      return (
        <ScrollView style={{backgroundColor: "white"}}
                    refreshControl={<RefreshControl refreshing={this.props.isRefreshing} onRefresh={this.props.onRefresh} />}
                    contentContainerStyle={Styles.scrollInner}
        >
          <SafeAreaView style={Styles.noImagesContainer}>
            <Text style={Styles.noImageText}>No photobooth images found taken on {dateString}.{"\n"} Pull to update, or choose another date.</Text>
          </SafeAreaView>
        </ScrollView>
      )
    }

    const images = this.props.images.map((image: Image) => {
      return (
        <TouchableOpacity key={image.image} onPress={() => {this.props.onClick(image)}}>
          <ImageCell  image={image} />
        </TouchableOpacity>
      )
    });

    return (
      <ScrollView style={{backgroundColor: "white"}}
        refreshControl={<RefreshControl refreshing={this.props.isRefreshing} onRefresh={this.props.onRefresh} />}>
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
    flexDirection: "row",
    width: "100%",
    flexWrap: 'wrap',
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  scrollInner: {
    height: "100%"
  },
  noImagesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
  },
  noImageText: {
    fontSize: 23,
    textAlign: "center",
  }
});

export default ImageList;
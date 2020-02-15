import React, {Component} from 'react'
import {SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, RefreshControl, View} from "react-native";
import ImageCell from "./ImageCell";
import {Text} from "react-native-elements";

interface Props {
  images: string[];
  onClick: (string) => {};
  isRefreshing: false;
  onRefresh: () => {};
}


class ImageList extends Component<Props> {

  public render() {

    if(this.props.images.length == 0) {
      return (
        <ScrollView style={{backgroundColor: "white"}}
                    refreshControl={<RefreshControl refreshing={this.props.isRefreshing} onRefresh={this.props.onRefresh} />}
                    contentContainerStyle={Styles.scrollInner}
        >
          <SafeAreaView style={Styles.noImagesContainer}>
            <Text style={Styles.noImageText}>No images found for the given date. Pull to update, or choose another date.</Text>
          </SafeAreaView>
        </ScrollView>
      )
    }

    const images = this.props.images.map((imageString) => {
      return (
        <TouchableOpacity key={imageString} onPress={() => {this.props.onClick(imageString)}}>
          <ImageCell  image={imageString} />
        </TouchableOpacity>
      )
    });

    return (
      <ScrollView style={{backgroundColor: "white"}}
        contentContainerStyle={Styles.scrollView}
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
  }
});

export default ImageList;
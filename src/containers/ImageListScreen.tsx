import React, {Component} from "react";
import ImageList from "../components/ImageList"
import {StackNavigationProp} from "@react-navigation/stack";

interface Props {
  navigation: StackNavigationProp
}

// Dummy class, should be rewritenn when redux ztate is introduced
class ImageListScreen extends Component<Props> {

  public onClick(image) {
    this.props.navigation.navigate("SingleView", {image});
  }

  public render() {
    //const dummyImages = ["processedImages/capture/2020/02/14/capture-114137.jpg","processedImages/capture/2020/02/14/capture-115554.jpg","processedImages/capture/2020/02/14/capture-115623.jpg","processedImages/capture/2020/02/14/capture-115647.jpg","processedImages/capture/2020/02/14/capture-115858.jpg","processedImages/capture/2020/02/14/capture-120005.jpg"];
    const dummyImages = ["processedImages/capture/2020/02/13/capture-223011.jpg","processedImages/capture/2020/02/13/capture-225315.jpg","processedImages/capture/2020/02/13/capture-230435.jpg","processedImages/capture/2020/02/13/capture-230645.jpg"];
    return (
      <ImageList images={dummyImages} onClick={this.onClick.bind(this)}/>
    )
  }
}

export default ImageListScreen;
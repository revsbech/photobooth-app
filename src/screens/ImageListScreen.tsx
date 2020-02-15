import React, {Component} from "react";
import ImageList from "../components/ImageList"
import {StackNavigationProp} from "@react-navigation/stack";
import {connect} from 'react-redux';
import {GlobalState} from "../redux/reducers";
import {NAVIGATION_NAVIGATE} from "../redux/actions/navigation/navigation";

interface Props {
  navigation: StackNavigationProp;
}

const mapStateToProps = (state:GlobalState) => {
  return {
    images: state.app.imageList
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    onClick: (image: string) => {
      dispatch(NAVIGATION_NAVIGATE.create({route: "SingleView", params: {image} }))
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ImageList);


//export default ImageListScreen;
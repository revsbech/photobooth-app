import React, {Component} from "react";
import ImageList from "../components/ImageList"
import {StackNavigationProp} from "@react-navigation/stack";
import {connect} from 'react-redux';
import {GlobalState} from "../redux/reducers";
import {NAVIGATION_NAVIGATE} from "../redux/actions/navigation/navigation";
import {FETCH_IMAGES_REQUEST} from "../redux/actions";
import {Image} from "../entities/Image";

interface Props {
  navigation: StackNavigationProp;
}

const mapStateToProps = (state:GlobalState) => {
  return {
    images: state.app.imageList,
    isRefreshing: state.api.isLoading,
    date: state.app.selectedDate,
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    onClick: (image: Image) => {
      dispatch(NAVIGATION_NAVIGATE.create({route: "SingleView", params: {image} }))
    },
    onRefresh: () => {
      dispatch(FETCH_IMAGES_REQUEST.create())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);

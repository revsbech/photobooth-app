import React, {Component} from 'react'
import {Button, Header, ListItem, Text} from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker';
import {SafeAreaView, StyleSheet, View} from "react-native";
import { Overlay } from 'react-native-elements';
import {GlobalState} from "../redux/reducers";
import {connect} from "react-redux";
import ImageList from "../components/ImageList";
import {FETCH_IMAGES_REQUEST, NAVIGATION_NAVIGATE, SET_DATE} from "../redux/actions";


interface Props {
  date: Date;
  onSetDate: (date: Date) => void
}

interface State {
  showDataPicker: boolean;
  selectedDate: Date;
}

class SettingsScreen extends Component<Props, State> {

  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      showDataPicker: false,
      selectedDate: new Date(),
    }
  }

  public onDateChange(event, date) {
    this.setState({selectedDate: date})
  }
  public onSetDate() {
    console.log(this.state.selectedDate, "Setting data");
    this.props.onSetDate(this.state.selectedDate);
    this.setState({showDataPicker: false})
  }
  public render() {
    const date = new Date();

    return (
      <>
        <Header>
          <></>
          <Text>Settings</Text>
          <></>
        </Header>
        <View style={Styles.list}>
          <ListItem
            leftIcon={{ name: "date-range" }}
            title={"Date"}
            subtitle={this.props.date.getDate() + "/" + (this.props.date.getMonth() + 1 ) + "-" + this.props.date.getFullYear()}
            bottomDivider
            chevron
            onPress={() => {this.setState({showDataPicker: true})}}
          />

          <Overlay isVisible={this.state.showDataPicker}>
            <>
              <DateTimePicker
                testID="dateTimePicker"
                value={this.state.selectedDate}
                mode={"date"}
                onChange={this.onDateChange.bind(this)}
              />
              <Button onPress={this.onSetDate.bind(this)} type="outline" title="Set date"/>
              </>
          </Overlay>
        </View>
      </>
    );
  }
}

const Styles = StyleSheet.create({
  list: {
    marginTop: 50,
  }
});

const mapStateToProps = (state: GlobalState) => {
  return {
    date: state.app.selectedDate,
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    onSetDate: (date: Date) => {
      dispatch(SET_DATE.create(date))
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);

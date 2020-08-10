import React, {Component} from 'react'
import { Button, Image as Img, Text } from 'react-native-elements';
import { SafeAreaView, ScrollView, StyleSheet, View, TextInput, ActivityIndicator } from 'react-native';
import {StackNavigationProp} from "@react-navigation/stack";
import Modal from 'react-native-modalbox';
import Moment from 'react-moment';
import PhoneInput from 'react-native-phone-input';
import { Dimension, FontSizes } from "../util/size";
import { GlobalState } from '../redux/reducers';
import { SENDSMS_REQUEST, SET_DATE, TOGGLE_SMS_MODAL } from '../redux/actions';
import { connect } from 'react-redux';
import { TextStyles } from '../util/StandardStyles';

interface Props {
  navigation: StackNavigationProp;
  onPressSms: (path: string, phoneNumber: string) => void;
  onOpenSmsModal: () => void,
  onCloseSmsModal: () => void,
  route: any;
  isModalOpen: boolean;
  loading: boolean;
}

interface State {
  currentPhoneNumber: string;
  isValid: boolean;
}

class SingleViewScreen extends Component<Props, State> {


  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      currentPhoneNumber: "",
      isValid: false,
    };
  }

  protected changePhoneNumber(value: string) {
    console.log("ASDF");
    this.setState({
      currentPhoneNumber: value,
      isValid: this.phone.isValidNumber(),
    })
  }

  protected  sendSms( ) {
    //const phoneNumber = '+4526290335';
    const phoneNumber = this.phone.getValue();
    const path = this.props.route.params.image.image;
    console.log("Sending sms to " + phoneNumber + ' with image ' + path );
    this.props.onPressSms(path, phoneNumber);
  }

  protected closeModal() {
    this.setState({
      currentPhoneNumber: '',
      isValid: false,
    });
    this.props.onCloseSmsModal();
  }

  public render() {
    const { image } = this.props.route.params;

    return (
      <ScrollView style={{backgroundColor: "white"}}>
        <SafeAreaView>
          <View style={Styles.container}>
            <Img style={Styles.image} source={{uri: "https://d3mldn0gkzqaiy.cloudfront.net/" + image.image}} />
            <View style={Styles.detailsContainer}>
              <Text style={[TextStyles.small, {marginBottom: 20}]}>
                Billede taget <Moment format="D MMM YYYY HH:mm" element={Text} date={image.date} />
              </Text>
              <Button title={'Modtag billede som sms'} onPress={this.props.onOpenSmsModal.bind(this)} />
            </View>
          </View>
        </SafeAreaView>
        <Modal
          style={[Styles.modal]}
          isOpen={this.props.isModalOpen}
          ref={"modal1"}
          backdrop={true}
          position={'bottom'}
          coverScreen={true}
        >
          <Text style={[TextStyles.header, {marginBottom:30}]}>Send link til billede</Text>
          <Text style={TextStyles.medium}>
            Indtast telefonnummer, så modtager du et link til billedet.
          </Text>

          {!this.props.loading ?
            <>
              <PhoneInput
                keyboardType={'numeric'}
                ref={(ref: any) => {
                  this.phone = ref;
                }}
                onChangePhoneNumber={this.changePhoneNumber.bind(this)}
                initialCountry={'dk'}
                textStyle={Styles.phoneTextStyle}
                style={Styles.phoneStyle}
                flagStyle={Styles.flagStyle}
                value={this.state.currentPhoneNumber}
              />
              <Button style={Styles.button} disabled={!this.state.isValid} title={'Send SMS'} onPress={this.sendSms.bind(this)} />
              <Button style={Styles.button} title={'Close'} onPress={this.closeModal.bind(this)} />
              </>
            :
            <ActivityIndicator style={{margin: 80}} size={"large"} />
          }

        </Modal>
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
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 40,
    paddingHorizontal: 80,
  },

  phoneStyle: {
    marginVertical: 20,
  },
  phoneTextStyle: {
    //backgroundColor: '',
    fontSize: 80,
    height: 80,
  },
  flagStyle: {
    height: 80,
    width: 5/3*80,
  },
  button: {
    width: Dimension.windowWidth * 0.8,
    marginBottom: 20,
  }
});

const mapStateToProps = (state: GlobalState) => {
  return {
    isModalOpen: state.app.smsModalOpen,
    loading: state.api.isLoading,
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    onPressSms: (path: string, phoneNumber: string) => {
      dispatch(SENDSMS_REQUEST.create({
        path,
        phoneNumber,
      }))
    },
    onOpenSmsModal: () => {
      dispatch(TOGGLE_SMS_MODAL.create(true));
    },
    onCloseSmsModal: () => {
      dispatch(TOGGLE_SMS_MODAL.create(false));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleViewScreen);
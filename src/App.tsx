/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RootNavigator from "./RootNavigator";

import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas/';
import reducer from './redux/reducers';
import {Provider} from 'react-redux';
import {navigationRef, isMountedRef} from "./redux/sagas/navigation/navigationService";
import SplashScreen from 'react-native-splash-screen';

const middlewares = [];

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (__DEV__) {
  // Logger with default options
  const {logger} = require(`redux-logger`);
  middlewares.push(logger)
}
const store = createStore(reducer, applyMiddleware(...middlewares));

// then run the saga
sagaMiddleware.run(rootSaga);

// Do stuff and hide the splash when you want


const App: () => React$Node = () => {
  React.useEffect(() => {
    isMountedRef.current = true;

    return () => isMountedRef.current = false;
  }, [])

  SplashScreen.hide();
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle="dark-content" />
          <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

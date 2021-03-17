/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @author Money Jain
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {observer, Provider} from 'mobx-react';
import {NavigationContainer} from '@react-navigation/native';
import Stores from './src/stores/Stores';
import Routes from './src/routes/Routes';

@observer
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 500);
  }

  render() {
    return (
      <Provider {...Stores}>
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={styles.container}>
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

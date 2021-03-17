/**
 * Song Details
 * @author Money Jain
 * @flow
 */

import React, {Component} from 'react';
import {Text, StyleSheet, SafeAreaView, View, Image} from 'react-native';
import {observer} from 'mobx-react';
import Constant from '../utilities/Constant';
import {duration} from '../utilities/CommonFunctions';

@observer
class SongDetails extends Component {
  constructor(props) {
    super(props);
  }

  displayInfo = (label, value) => {
    return (
      <View style={styles.info}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    );
  };

  render() {
    const {details} = this.props.route.params;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.detailConatiner}>
          <Image
            source={{uri: details.artworkUrl100}}
            resizeMode="contain"
            style={styles.image}
          />
          {details.trackName && this.displayInfo(Constant.STRINGS.TRACK_NAME, details.trackName)}
          {details.artistName && this.displayInfo(Constant.STRINGS.ARTIST_NAME, details.artistName)}
          {details.collectionName && this.displayInfo(
            Constant.STRINGS.COLLECTION_NAME,
            details.collectionName,
          )}
          {details.trackTimeMillis && this.displayInfo(
            Constant.STRINGS.DURATION,
            duration(details.trackTimeMillis),
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constant.COLORS.WHITE,
  },
  image: {
    width: 120,
    height: 120,
  },
  value: {
    fontSize: 16,
    color: Constant.COLORS.BLUE,
    flex: 0.6,
  },
  label: {
    fontSize: 16,
    color: Constant.COLORS.BLACK,
    marginRight: 6,
    fontWeight: '700',
    flex: 0.4,
  },
  detailConatiner: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  info: {
    marginTop: 10,
    flexDirection: 'row',
  },
});
export default SongDetails;

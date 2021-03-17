/**
 * Songs Dashboard
 * @author Money Jain
 * @flow
 */

import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {observer, inject} from 'mobx-react';
import {observable} from 'mobx';
import {duration} from '../utilities/CommonFunctions';
import Constant from '../utilities/Constant';

@inject('GlobalStore')
@observer
class SongsDashboard extends Component {
  @observable songsData: Array<any> = [];

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({isLoading: true});
    const response = await this.props.GlobalStore.getSongsData();
    if (response.success) {
      this.songsData =
        response.data.resultCount > 0 ? response.data.results : [];
    }
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 3000);
  }

  renderRow = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.row}
        onPress={() =>
          this.props.navigation.navigate('SongDetails', {
            details: item,
          })
        }>
        <View style={styles.rowContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: item.artworkUrl100}}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <View style={styles.textContainer}>
            {item.trackName && (
              <Text numberOfLines={2} style={styles.trackName}>
                {item.trackName}
              </Text>
            )}
            <View style={styles.subTextContainer}>
              {item.artistName && (
                <Text style={styles.artistName}>{item.artistName}</Text>
              )}
              {item.trackTimeMillis && (
                <Text style={styles.time}>
                  {duration(item.trackTimeMillis)}
                </Text>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.isLoading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={'#2999f0'} />
            <Text style={styles.loadingTextStyle}>
              {Constant.STRINGS.PLEASE_WAIT}
            </Text>
          </View>
        ) : this.songsData.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            data={this.songsData}
            extraData={this.songsData}
            renderItem={item => this.renderRow(item)}
          />
        ) : (
          <View style={styles.loaderContainer}>
            <Text style={styles.trackName}>
              {Constant.STRINGS.NO_DATA_FOUND}
            </Text>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constant.COLORS.WHITE,
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingTextStyle: {
    marginTop: 10,
    color: Constant.COLORS.BLUE,
  },
  row: {
    backgroundColor: Constant.COLORS.WHITE,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Constant.COLORS.LIGHT_GREY,
  },
  rowContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  imageContainer: {
    flex: 0.3,
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  trackName: {
    fontSize: 16,
    color: Constant.COLORS.BLUE,
  },
  subTextContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  artistName: {
    fontSize: 14,
    color: Constant.COLORS.BLUE,
    fontWeight: 'bold',
    flex: 0.7,
  },
  time: {
    fontSize: 14,
    color: Constant.COLORS.BLUE,
    marginLeft: 16,
    flex: 0.3,
  },
});
export default SongsDashboard;

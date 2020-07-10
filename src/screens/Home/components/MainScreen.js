import React, {Component} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';

import styles from '../../../styles';
import Header from '../../../common/Header';
import ListItem from './ListItem';
import Modal from '../../../common/Modal';

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEnabled: false,
      isVisible: false,
      imageUri: null,
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <Header
          updateSwitchStatus={(status) => this.setState({isEnabled: status})}
          isEnabled={this.state.isEnabled}
        />
        <FlatList
          data={this.props.data.data}
          renderItem={({item, index}) => {
            return (
              <ListItem
                data={item}
                modalCallback={(isVisible, imageUri) =>
                  this.setState({isVisible, imageUri})
                }
              />
            );
          }}
          removeClippedSubviews
          maxToRenderPerBatch={11}
          windowSize={11}
          updateCellsBatchingPeriod={25}
          numColumns={this.state.isEnabled ? 1 : 2}
          key={this.state.isEnabled ? 'v' : 'g'}
          keyExtractor={(item, index) => index.toString()}
        />
        <Modal
          isVisible={this.state.isVisible}
          modalCallback={(isVisible) =>
            this.setState({isVisible, imageUri: null})
          }
          imageUri={this.state.imageUri}
        />
      </SafeAreaView>
    );
  }
}
export default MainScreen;

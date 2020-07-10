import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from '../styles';

const Loader = () => {
  return (
    <View style={styles.loaderView}>
      <ActivityIndicator size="large" color="#c42b66" />
    </View>
  );
};
export default Loader;

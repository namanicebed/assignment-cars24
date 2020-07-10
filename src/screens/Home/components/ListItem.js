import React, {Component} from 'react';
import {Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import styles from '../../../styles';

const ListItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => props.modalCallback(true, props.data.url)}
      style={styles.litItemMain}>
      <Image
        source={{uri: props.data.url}}
        resizeMode="cover"
        style={styles.listImageStyle}
      />
      <Text style={styles.listTextStyle}>
        {props.data.title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};
export default ListItem;

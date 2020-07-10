import React, {Component} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import Modal from 'react-native-modal';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const ModalScreen = (props) => {
  console.log(props);
  return (
    <Modal
      onBackdropPress={() => props.modalCallback(false)}
      onBackButtonPress={() => props.modalCallback(false)}
      animationIn="slideInUp"
      isVisible={props.isVisible}
      style={{margin: 0}}>
      <ImageZoom
        cropWidth={width}
        cropHeight={height}
        imageWidth={width}
        imageHeight={width}>
        <Image
          style={{width: width * 0.7, height: width * 0.7, alignSelf: 'center'}}
          source={{
            uri: props.imageUri,
          }}
          resizeMode="contain"
        />
      </ImageZoom>
    </Modal>
  );
};
export default ModalScreen;

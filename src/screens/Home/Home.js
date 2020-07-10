import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import {getImages} from '../../actions/home-actions';

import Loader from '../../common/Loader';
import MainScreen from './components/MainScreen';

class Home extends Component {
  componentDidMount() {
    this.props.getImages();
  }

  render() {
    const {home} = this.props;
    if (home) {
      const {loading, data} = home;

      return loading ? <Loader /> : <MainScreen data={data} />;
    } else {
      return <View />;
    }
  }
}

mapStateToProps = (state) => {
  return {home: state.home};
};

export default connect(mapStateToProps, {getImages})(Home);

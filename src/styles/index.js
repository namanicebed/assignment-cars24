import {Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;

export default styles = {
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loaderView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  litItemMain: {
    width: '50%',
    alignItems: 'center',
    marginTop: 10,
  },
  listImageStyle: {
    height: width * 0.4,
    width: width * 0.4,
    borderRadius: 10,
  },
  listTextStyle: {
    width: width * 0.4,
    marginTop: 3,
    fontSize: 12,
  },
};

import React, {Component} from 'react';
import {Text, View, Switch} from 'react-native';
const Header = (props) => {
  return (
    <View
      style={{
        height: 55,
        width: '100%',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {height: 2, width: 0},
        elevation: 3,
        shadowOpacity: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{marginRight: 10, fontSize: 18}}>Grid</Text>
      <Switch
        // trackColor={{false: '#767577', true: '#81b0ff'}}
        // thumbColor={props.isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#c42b66"
        style={{transform: [{scaleX: 0.9}, {scaleY: 0.9}]}}
        onValueChange={() => props.updateSwitchStatus(!props.isEnabled)}
        value={props.isEnabled}
      />
      <Text style={{marginLeft: 10, fontSize: 18}}>Vertical</Text>
    </View>
  );
};
export default Header;

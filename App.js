import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Cat = (props) => {
  const name = "Meaya";
  return (
    <view>
      <Text>I am {props.name}!</Text>
    </view>
  );
}

const Cafe = () => {
  return (
    <View>
        <Text>Welcome</Text>
        <Cat name="Meaya"/>
        <Cat name="Mikey"/>
        <Cat name="Lucy"/>
    </View>
  )
}

export default Cafe;
import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import logo from '../assets/logo.jpeg';

const MainPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>WorkoutWhiz</Text>
      <Button
        title="Start Workout"
        onPress={() => navigation.navigate('LogWorkout')}
      />
      <Button
        title="View History"
        onPress={() => navigation.navigate('History')}
      />
      <Button
        title="Calendar + Daily Schedule"
        onPress={() => navigation.navigate('Calendar')}
      />
      <Button
        title="Profile Page"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Contact Us + Help Desk"
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  logo: {
    width: 150,
    height: 100,
  },
});

export default MainPage;

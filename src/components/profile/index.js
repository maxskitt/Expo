import React from 'react';
import {Button, Text, View} from "react-native";
import {useRoute} from '@react-navigation/native';
import {useSelector} from "react-redux";
import {find} from "lodash";

function ProfileScreen({navigation}) {

  const route = useRoute();

  const profile = useSelector((state) => find(state.users.collection.data, {id: route.params.id}));

  console.log(profile, "profile")

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'top'}}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Text>id: {profile.id}</Text>
      <Text>email: {profile.email}</Text>
      <Text>name: {profile.name}</Text>
      <Text>phone: {profile.phone}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()}/>
    </View>
  );
}

export default ProfileScreen;

import React, {useEffect} from 'react';
import {Button, View} from "react-native";
import map from 'lodash/map'
import {useDispatch, useSelector} from "react-redux";
import {usersRequested} from "../../redux/slices/users";
import {Link} from '@react-navigation/native';

function HomeScreen({navigation}) {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.collection.data);

  useEffect(() => {
    dispatch(usersRequested());
  }, [dispatch]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'top'}}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      {map(users, (user, index) =><Link key={index} to={{screen: 'Profile', params: {id: user.id}}}>{user.name}</Link>)}
    </View>
  );
}

export default HomeScreen;

import React, {useEffect, useMemo} from 'react';
import {Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {usersRequested} from "../../redux/slices/users";
import map from "lodash/map";

function UsersStackScreen() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.collection);

  const displayUsers = useMemo(() =>
      map(users, (user, index) =>
        <Text key={index}>ID: {user.screenID}</Text>
      )

    , [users])

  useEffect(() => {
    dispatch(usersRequested('NaSjJ7uje68UinipYx4i'));
  }, [dispatch]);

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {displayUsers}
    </View>
  );
}

export default UsersStackScreen;

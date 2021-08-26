import * as React from 'react';
import NewScreen from "../../components/articles/new";
import EditScreen from "../../components/articles/edit";
import ArticlesScreen from "../../components/article";
import UsersScreen from "../../components/users";
import {useLinkTo} from "@react-navigation/native";
import {Avatar} from "react-native-elements";

const {createNativeStackNavigator} = require("@react-navigation/native-stack");

const ArticlesStack = createNativeStackNavigator();

function ArticlesStackScreen() {
  const linkTo = useLinkTo();

  return (
    <ArticlesStack.Navigator>
      <ArticlesStack.Screen name="Articles" component={ArticlesScreen}
                            options={{
                              // headerTitle: props => <LogoTitle {...props} />,
                              headerRight: () => (
                                <Avatar
                                  size="small"
                                  source={{
                                    uri:
                                      'https://www.adobe.com/express/feature/image/resize/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=2000&format=webply&optimize=medium',
                                  }}
                                  rounded
                                  title="MT"
                                  onPress={() => linkTo('/TabUsers/Users')}
                                  activeOpacity={0.7}
                                />
                              ),
                            }}
      />
      <ArticlesStack.Screen name="New" component={NewScreen}
                            options={{
                              // headerTitle: props => <LogoTitle {...props} />,
                              headerRight: () => (
                                <Avatar
                                  size="small"
                                  source={{
                                    uri:
                                      'https://www.adobe.com/express/feature/image/resize/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=2000&format=webply&optimize=medium',
                                  }}
                                  rounded
                                  title="MT"
                                  onPress={() => linkTo('/TabUsers/Users')}
                                  activeOpacity={0.7}
                                />
                              ),
                            }}
      />
      <ArticlesStack.Screen name="Edit" component={EditScreen}
                            options={{
                              // headerTitle: props => <LogoTitle {...props} />,
                              headerRight: () => (
                                <Avatar
                                  size="small"
                                  source={{
                                    uri:
                                      'https://www.adobe.com/express/feature/image/resize/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=2000&format=webply&optimize=medium',
                                  }}
                                  rounded
                                  title="MT"
                                  onPress={() => linkTo('/TabUsers/Users')}
                                  activeOpacity={0.7}
                                />
                              ),
                            }}
      />
      <ArticlesStack.Screen name="Settings" component={UsersScreen}
                            options={{
                              // headerTitle: props => <LogoTitle {...props} />,
                              headerRight: () => (
                                <Avatar
                                  size="small"
                                  source={{
                                    uri:
                                      'https://www.adobe.com/express/feature/image/resize/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=2000&format=webply&optimize=medium',
                                  }}
                                  rounded
                                  title="MT"
                                  onPress={() => linkTo('/TabUsers/Users')}
                                  activeOpacity={0.7}
                                />
                              ),
                            }}
      />
    </ArticlesStack.Navigator>
  );
}

export default ArticlesStackScreen;

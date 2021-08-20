import React, {useMemo, useEffect} from 'react';
import {ScrollView, View} from "react-native";
import { Button } from 'react-native-elements';
import map from 'lodash/map'
import {useDispatch, useSelector} from "react-redux";
import {Link} from '@react-navigation/native';
import {articlesNext, articlesPrev, articlesRequested} from "../../redux/slices/articles";
import styles from "./style";
import collect from "collect.js";
import {usersClear} from "../../redux/slices/users";
import {Avatar} from "react-native-elements";

function ArticlesScreen({navigation}) {

  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.collection);
  const param = useSelector((state) => state.articles.param);
  const collection = collect(articles);
  const forPage = collection.forPage(param.page, param.per);

  const displayArticles = useMemo(() =>
      map(forPage.all(), (article, index) =>
        <Link
          key={index}
          style={styles.title}
          to={{screen: 'Edit', params: {id: article.id}}}
        >
          {article.title}
        </Link>
      )

    , [forPage])

  useEffect(() => {
    dispatch(articlesRequested(param.page));
  }, [dispatch, param.page]);

  useEffect(() => {
    dispatch(usersClear());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Button
          title="New articles"
          onPress={() => navigation.navigate('New')}
        />
          <Avatar
            size="small"
            rounded
            title="MT"
            onPress={() => navigation.navigate('Settings')}
            activeOpacity={0.7}
          />
      </View>
      <ScrollView>
        {displayArticles}
        <View style={styles.containerButton}>
          <Button
            title="Prev"
            onPress={() => {
              if (param.page != 1) {
                dispatch(articlesPrev())
              }
            }}
          />
          <Button
            title="Next"
            onPress={() => {
              if (param.page != param.total)
                dispatch(articlesNext())
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default ArticlesScreen;

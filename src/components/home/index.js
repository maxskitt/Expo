import React, {useMemo, useEffect} from 'react';
import {Button, View} from "react-native";
import map from 'lodash/map'
import {useDispatch, useSelector} from "react-redux";
import {Link} from '@react-navigation/native';
import {articlesRequested} from "../../redux/slices/articles";
import styles from "./style";

function ArticlesScreen({navigation}) {

  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.collection);

  const displayArticles = useMemo(() =>
    map(articles, (article, index) =>
      <Link
        style={styles.title}
        key={index}
        to={{screen: 'Edit', params: {id: article.id}}}
      >
        {article.title}
      </Link>
    )

  , [articles])

  useEffect(() => {
    dispatch(articlesRequested());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Button
        title="New articles"

        onPress={() => navigation.navigate('New')}
      />
      {displayArticles}
      <View style={styles.containerButton}>
        <Button
          title="Next"
          onPress={() => {articlesRequested()}}
        />
        <Button
          title="Prev"
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

export default ArticlesScreen;

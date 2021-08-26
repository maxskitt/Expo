import React, {useEffect} from 'react';
import {Button, FlatList, TextInput, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {articlesNext, articlesPrev, articlesRequested} from "../../redux/slices/articles";
import globalStyles from "../../../styles/global";
import styles from "./style";
import collect from "collect.js";
import renderItemArticles from "../articleItem";

function ArticlesScreen({navigation}) {

  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.collection);
  const param = useSelector((state) => state.articles.param);
  const collection = collect(articles);
  const forPage = collection.forPage(param.page, param.per);

  useEffect(() => {
    dispatch(articlesRequested(param.page));
  }, [dispatch, param.page]);

  return (
    <View style={globalStyles.container}>
      <View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          defaultValue="Search"
        />
        <Button title="sdffffsd"/>
        <Button title="New articles" onPress={() => navigation.navigate("New")}/>
        <FlatList
          data={forPage.all()}
          renderItem={renderItemArticles}
          keyExtractor={item => item.id}
        />
      </View>
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
    </View>
  );
}

export default ArticlesScreen;




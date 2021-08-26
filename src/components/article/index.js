import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, TouchableOpacity} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {articlesRequested} from "../../redux/slices/articles";
import globalStyles from "../../../styles/global";
import styles from "./style";
import collect from "collect.js";
import renderItemArticles from "../articleItem";
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


function ArticlesScreen({navigation}) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.collection);
  const param = useSelector((state) => state.articles.param);
  const collection = collect(articles);
  const forPage = collection.forPage(param.page, param.per);

  const onPressSearch = (value) => {
    setSearch(value)
  };

  useEffect(() => {
    dispatch(articlesRequested(param.page));
  }, [dispatch, param.page]);

  return (
    <View style={globalStyles.container}>
      <Text style={styles.jobSearch}>Job Search</Text>
      <View style={styles.containerSearch}>
        <View style={styles.containerSearchBar}>
          <Input
            placeholder='Search'
            inputContainerStyle={styles.searchInputContainer}
            inputStyle={styles.searchInput}
            leftIcon={
              <Icon
                name='search'
                size={16}
                color='#636363'
              />
            }
          />
        </View>
        <View style={styles.containerSearchBarButton}>
          <TouchableOpacity  onPress={() => navigation.navigate("ModalSettings")}>
            <Icon name="sliders" size={14} color="#636363" />
          </TouchableOpacity>
          </View>
      </View>
    <View style={styles.containerSort}>
      <View>
        <Text style={styles.sortText}>Sort by:</Text>
      </View>
      <View style={styles.sortPosted}>
        <Text style={styles.sortPostedText}>Date posted: </Text>
        <Icon name="angle-down" size='small' />
      </View>
    </View>
      <FlatList
        data={articles}
        renderItem={renderItemArticles}
        keyExtractor={item => item.id}
      />

      {/*<View style={styles.containerButton}>*/}
      {/*  <Button*/}
      {/*    title="Prev"*/}
      {/*    onPress={() => {*/}
      {/*      if (param.page != 1) {*/}
      {/*        dispatch(articlesPrev())*/}
      {/*      }*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  <Button*/}
      {/*    title="Next"*/}
      {/*    onPress={() => {*/}
      {/*      if (param.page != param.total)*/}
      {/*        dispatch(articlesNext())*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</View>*/}
    </View>
  );
}

export default ArticlesScreen;




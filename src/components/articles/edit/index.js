import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {initialArticles, updateArticles} from "../../../saga/articles/api";
import isEmpty from "lodash/isEmpty";
import Form from "../index";

function EditScreen() {

  const route = useRoute();
  const [initialValues, setInitialValues] = useState({name: '33', title:'33', description:'ff'});

  const onSubmit = (values) => {
    console.log('EDIT values', values);
    updateArticles(values, route.params.id);
  }

  async function initialArticlesAsync(router) {
    let article = await initialArticles(router);
  }

  useEffect(() => {
    if (!isEmpty(route.params.id)) {
      // LOAD DATA FROM SERVER DB
      initialArticlesAsync(route.params.id).then();
    }
  }, [route])

  return ( <Form onSubmit={onSubmit} initialValues={initialValues} />

  );
}

export default EditScreen;

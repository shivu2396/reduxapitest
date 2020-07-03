import React, { useReducer, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './style';

// import axios from 'axios';

const initialValue = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCEESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'something wrong',
      };
    default:
      return state;
  }
};
export const DataFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    
      .get('https://jsonplaceholder.typicode.com/albums/3')
      .then((respone) => {
        dispatch({ type: 'FETCH_SUCEESS', payload: respone.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, 
  return (
    <View style={styles.CONTAINER}>
      <Text>
        Title:
        {state.loading ? 'Loading' : state.post.title}
        {state.error ? state.error : null}
      </Text>
    </View>
  );
};


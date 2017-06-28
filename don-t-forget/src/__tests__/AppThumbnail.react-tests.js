//importas react
import React from 'react';
//importas el componente
import AppThumbnail from '../components/AppThumbnail/AppThumbnail';
//importas el test-render
import renderer from 'react-test-renderer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

var passwords=function (state=[], action) {
  debugger;
  switch (action.type) {
  case 'ADD_PASSWORD':
      const exist = state.findIndex(pass => pass.namePass === action.password.namePass);
      if(exist<0)
        return state.concat([ action.password ]);
        else
          return state;
  case 'DELETE_PASSWORD':
    return state.filter(pass => pass.namePass!=action.password.namePass);

  case 'DELETE_PASSWORDS':
    return [];
  default:
    return state;
  }
}


test(
    'Simple Google Thumbnail', //titulo del test
    //funcion del test
    () => {
      const store = createStore(passwords) // can also be a mock
    const component = renderer.create(


       <Provider store={store}>
         <AppThumbnail name={"Google"}/>
       </Provider>


  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

/*example*************

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();*/
}

);

//importas react
import React from 'react';
//importas el componente
import AppThumbnail from '../components/AppThumbnail/AppThumbnail';
//importas el test-render
import renderer from 'react-test-renderer';

jest.dontMock('bootstrap/dist/css/bootstrap.css');

test(
    'Simple Google Thumbnail', //titulo del test
    //funcion del test
    () => {
    const component = renderer.create(
    <AppThumbnail name={"Google"}/>
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

import {
  Category,
  Component,
  Palette,
  Variant,
} from '@react-buddy/ide-toolbox-next';
import { Fragment } from 'react';

export function ExampleLoaderComponent() {
  return <Fragment>Loading...</Fragment>;
}
export const PaletteTree = () => (
  <Palette>
    <Category name='App'>
      <Component name='Loader'>
        <Variant>
          <ExampleLoaderComponent />
        </Variant>
      </Component>
    </Category>
  </Palette>
);

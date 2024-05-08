import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox-next';
import React from 'react';

import { Section } from '@/layout/Section';
import { Base } from '@/templates/Base';
import { VerticalFeatures } from '@/templates/VerticalFeatures';

import { PaletteTree } from './palette';

const ComponentPreviews = () => {
  // Define the style object with explicit CSS property types
  const leftAlignStyle: React.CSSProperties = {
    position: 'absolute', // Specify the CSS Position value directly
    left: 0, // Use a number for pixel values
    top: 0, // Use a number for pixel values
    width: '100%', // String specifying the width
  };

  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/Base">
        <Base />
      </ComponentPreview>
      <ComponentPreview path="/VerticalFeatures">
        {/* Apply the style to the VerticalFeatures component */}
        <div style={leftAlignStyle}>
          <VerticalFeatures />
        </div>
      </ComponentPreview>
      <ComponentPreview path="/Section">
        <Section />
      </ComponentPreview>
      <ComponentPreview path="/ComponentPreviews">
        <ComponentPreviews />
      </ComponentPreview>
      <ComponentPreview path="/VerticalFeatures">
        <VerticalFeatures />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;

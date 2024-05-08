import type { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  xPadding?: string;
  children?: ReactNode;
  style?: {
    alignItems?: string;
    background?: string;
    display?: string;
    justifyContent?: string;
    height?: string;
    textAlign?: string;
  };
};

const Section = (props: ISectionProps) => (
  <div
    className={`mx-auto max-w-screen-sm px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div className='mb-12 text-center'>
        {' '}
        {/* Adjusted for center alignment */}
        {props.title && (
          <h2 className='text-4xl font-bold text-gray-900'>{props.title}</h2>
        )}
        {props.description && (
          <div className='mt-4 text-xl md:px-20'>{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };

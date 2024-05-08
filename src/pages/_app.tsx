import '../styles/global.css';

import { DevSupport } from '@react-buddy/ide-toolbox-next';
import type { AppProps } from 'next/app';

import { ComponentPreviews, useInitial } from '@/dev';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
    <Component {...pageProps} />
  </DevSupport>
);

export default MyApp;

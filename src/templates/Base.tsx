import { Meta } from '@/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';

import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div
    style={{
      position: 'relative',
      left: 0,
      top: 16,
      width: '100%',
      height: '100%',
      overflow: 'auto',
      backgroundImage: "url('/shutterstock_128624354.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'left',
    }}
  >
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    {/* Container for VerticalFeatures with absolute positioning */}
    <div
      style={{
        position: 'relative',
        left: 0,
        top: 16,
        width: 'fit-content',
        height: '100%',
        overflow: 'auto',
      }}
    >
      <VerticalFeatures />
    </div>
    <Banner />
    <Footer />
  </div>
);

export { Base };

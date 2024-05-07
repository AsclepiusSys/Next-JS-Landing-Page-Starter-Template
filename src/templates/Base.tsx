import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
    <div style={{
        backgroundImage: "url('/shutterstock_128624354.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'left'
    }} className="base-layout">
        <Meta title={AppConfig.title} description={AppConfig.description}/>
        <Hero/>
        <div className="content flex justify-end w-full">
            <VerticalFeatures/>
        </div>
        <Banner/>
        <Footer/>
    </div>
);

export {Base};

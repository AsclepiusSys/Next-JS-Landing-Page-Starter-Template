import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="You are interested in building Future Medical Buisness"
      subtitle="Contace Us at management@AsclepiusSys.com"
      button={
        <Link href="">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };

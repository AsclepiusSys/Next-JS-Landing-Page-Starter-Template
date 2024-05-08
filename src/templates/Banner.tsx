import { Section } from '@/layout/Section';

const Banner = () => (
  <Section
    style={{
      display: 'flex', // Enables flexbox
      alignItems: 'center', // Vertically centers the content
      justifyContent: 'center', // Horizontally centers the content
      height: '50vh', // Adjusted to half viewport height
      background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background for the whole section
      textAlign: 'center', // Ensures all text is centered
    }}
  >
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.8)', // White background with 80% opacity
        borderRadius: '10px', // Rounded corners
        padding: '20px', // Padding inside the content box
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
        maxWidth: '600px', // Restricts maximum width for better layout control
        width: '100%', // Ensures the div takes up the full width of the section if necessary
      }}
    >
      <h1 className="text-3xl font-bold">
        Building the Future of Medical Business
      </h1>
      <p className="mt-4 text-center text-2xl">
        Contact us at{' '}
        <a href="mailto:management@AsclepiusSys.com">
          management@AsclepiusSys.com
        </a>
      </p>
    </div>
  </Section>
);

export { Banner };

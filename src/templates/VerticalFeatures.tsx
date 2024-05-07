import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (

  <Section
    title="Asclepius: Advanced Prescription Management System"
    description="Asclepius revolutionizes prescription management in medical facilities, offering a secure, efficient platform for healthcare professionals."
  >
    <VerticalFeatureRow
        align="left"
      title="User and Patient Data Management"
      description="Facilitates secure user registration, login, and role-based access, alongside comprehensive patient profile management including medical history and allergies."
      image="/assets/images/user-management.png" // Suggested image: a graphical representation of user and patient data management.
      imageAlt="User management and patient data"
    />
    <VerticalFeatureRow
        align="left"
      title="Comprehensive Prescription Portal"
      description="Streamlines prescription processes with features like auto-fetch patient details, a detailed medication database, and alerts for drug-drug interactions."
      image="/assets/images/prescription-portal.png" // Suggested image: an interface showing a prescription being filled out.
      imageAlt="Prescription portal interface"
      reverse
    />
    <VerticalFeatureRow
        align="left"
      title="Enhanced Drug Information and Security"
      description="Incorporates an exhaustive drug database with openFDA API integration and heightened security for controlled substance prescriptions."
      image="/assets/images/drug-information.png" // Suggested image: a database icon or a secure lock symbolizing security in drug information.
      imageAlt="Drug information and security"
    />
  </Section>
);

export { VerticalFeatures };

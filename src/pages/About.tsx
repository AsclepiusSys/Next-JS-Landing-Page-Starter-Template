import React from 'react';
import { Meta } from '@/layout/Meta';
import { Section } from '@/layout/Section';

const About = () => {
    return (
        <div style={{
            backgroundImage: "url('/shutterstock_128624354.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center', // Adjusted for better focus
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100vw',
            display: 'flex', // Centers the content vertically and horizontally
            alignItems: 'center',
            justifyContent: 'center'
        }} className="about-page">
            <Meta title="About Us" description="Learn more about our team and mission." />
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
                maxWidth: '80%', // Limits the width of the content box
                textAlign: 'left'
            }}>
                <Section title="About Us" description="Here is a brief overview of our company.">
                    <h1 className="text-3xl font-bold">About Us</h1>
                    <p className="mt-4">
                        Our mission is to revolutionize prescription management in medical facilities,
                        offering a secure, efficient platform for healthcare professionals.
                    </p>
                    <h1 className="text-3xl font-bold">Our Mission</h1>
                    <p className="mt-4">
                        Our mission is to revolutionize prescription management in medical facilities,
                        offering a secure, efficient platform for healthcare professionals.
                    </p>
                    <h2 className="text-2xl font-bold mt-6">Our Team</h2>
                    <p className="mt-4">
                        Our team consists of dedicated software developers, project managers, and
                        healthcare professionals who are all passionate about improving patient care
                        through technology.
                    </p>
                </Section>
            </div>
        </div>
    );
};

export default About;

import React from 'react';
import { Award, Heart, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Autumn Care</h1>
          <p className={styles.heroDescription}>Dedicated to providing exceptional home care services with compassion, dignity, and respect for over 20 years.</p>
        </div>
      </div>

      <div className={styles.mission}>
        <div className={styles.missionGrid}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1581579438747-104c53e81cd4?auto=format&fit=crop&q=80"
              alt="Caring nurse with elderly patient"
              className={styles.missionImage}
            />
          </div>
          <div>
            <h2 className={styles.missionTitle}>Our Mission</h2>
            <p className={styles.missionDescription}>
              At Autumn Care, we believe that every senior deserves to live their life with dignity, comfort, and joy in the familiar surroundings of their own home. Our mission is to provide exceptional care that enhances the quality of life for our clients while giving their families peace of mind.
            </p>
            <div className={styles.missionList}>
              {[
                "Professional and compassionate caregivers",
                "Personalized care plans",
                "24/7 support and monitoring",
                "Regular family updates and communication"
              ].map((item, index) => (
                <div key={index} className={styles.missionItem}>
                  <Heart className={styles.missionIcon} />
                  <span className={styles.missionItemText}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className={styles.values}>
        <div className={styles.valuesContent}>
          <h2 className={styles.valuesTitle}>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "We treat every client with kindness, empathy, and understanding."
              },
              {
                icon: Shield,
                title: "Integrity",
                description: "We maintain the highest standards of professional and ethical conduct."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We strive to exceed expectations in every aspect of our care services."
              }
            ].map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <value.icon className={styles.valueIcon} />
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: "space-y-16 pb-16",
  hero: "bg-orange-700 text-white py-20",
  heroContent: "max-w-7xl mx-auto px-4",
  heroTitle: "text-4xl font-bold mb-6",
  heroDescription: "text-xl max-w-2xl",
  mission: "max-w-7xl mx-auto px-4",
  missionGrid: "grid md:grid-cols-2 gap-12 items-center",
  missionImage: "rounded-lg shadow-lg",
  missionTitle: "text-3xl font-bold text-gray-800 mb-6",
  missionDescription: "text-gray-600 mb-6",
  missionList: "space-y-4",
  missionItem: "flex items-center space-x-2",
  missionIcon: "w-5 h-5 text-orange-600",
  missionItemText: "text-gray-700",
  values: "bg-orange-50 py-16",
  valuesContent: "max-w-7xl mx-auto px-4",
  valuesTitle: "text-3xl font-bold text-center text-gray-800 mb-12",
  valuesGrid: "grid md:grid-cols-3 gap-8",
  valueCard: "bg-white p-6 rounded-xl shadow-md text-center",
  valueIcon: "w-12 h-12 text-orange-600 mx-auto mb-4",
  valueTitle: "text-xl font-semibold text-gray-800 mb-2",
  valueDescription: "text-gray-600"
};

export default About;
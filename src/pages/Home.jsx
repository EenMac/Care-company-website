import React from 'react';
import { Heart, Clock, Users, Phone } from 'lucide-react';

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div 
        className={styles.hero}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80")'
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Compassionate Home Care for Your Loved Ones</h1>
            <p className={styles.heroDescription}>Providing professional and caring in-home assistance to help seniors live independently with dignity and comfort.</p>
            <button className={styles.heroButton}>
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.services}>
        <h2 className={styles.servicesTitle}>Our Services</h2>
        <div className={styles.servicesGrid}>
          {[
            {
              icon: Heart,
              title: "Personal Care",
              description: "Assistance with daily activities, hygiene, and medication management."
            },
            {
              icon: Clock,
              title: "24/7 Support",
              description: "Round-the-clock care and monitoring for peace of mind."
            },
            {
              icon: Users,
              title: "Companionship",
              description: "Friendly conversation, activities, and emotional support."
            }
          ].map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <service.icon className={styles.serviceIcon} />
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className={styles.cta}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaText}>
            <h2 className={styles.ctaTitle}>Ready to Learn More?</h2>
            <p className={styles.ctaDescription}>Contact us today to schedule a free consultation</p>
            <div className={styles.ctaPhone}>
              <Phone className={styles.phoneIcon} />
              <span className={styles.phoneNumber}>1-800-AUTUMN-CARE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: "space-y-16 pb-16",
  hero: "h-[600px] bg-cover bg-center relative",
  heroOverlay: "absolute inset-0 bg-black bg-opacity-50",
  heroContent: "relative max-w-7xl mx-auto px-4 h-full flex items-center",
  heroText: "text-white max-w-2xl",
  heroTitle: "text-5xl font-bold mb-6",
  heroDescription: "text-xl mb-8",
  heroButton: "bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors duration-200",
  services: "max-w-7xl mx-auto px-4",
  servicesTitle: "text-3xl font-bold text-center text-gray-800 mb-12",
  servicesGrid: "grid md:grid-cols-3 gap-8",
  serviceCard: "bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200",
  serviceIcon: "w-12 h-12 text-orange-600 mb-4",
  serviceTitle: "text-xl font-semibold text-gray-800 mb-2",
  serviceDescription: "text-gray-600",
  cta: "bg-orange-100",
  ctaContent: "max-w-7xl mx-auto px-4 py-16",
  ctaText: "text-center",
  ctaTitle: "text-3xl font-bold text-gray-800 mb-4",
  ctaDescription: "text-lg text-gray-600 mb-8",
  ctaPhone: "flex items-center justify-center space-x-4",
  phoneIcon: "w-6 h-6 text-orange-600",
  phoneNumber: "text-2xl font-semibold text-orange-600"
};

export default Home;
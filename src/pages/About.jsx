import React, { useState } from 'react';
import { Heart, Award, Star } from 'lucide-react';
import ReferenceDialog from '../components/ReferenceDialog';

const About = () => {

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Me</h1>
          <p className={styles.heroSubtitle}>Dedicated Live-in Carer with a Passion for Making a Difference</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.profile}>
          {/* <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
            alt="Professional profile"
            className={styles.profileImage}
          /> */}
          <div className={styles.profileContent}>
            <h2 className={styles.profileTitle}>Hello, I'm Erica</h2>
            <p className={styles.profileText}>
              <p className={styles.profileText}>
                Hello, I'm Erica – a compassionate and dedicated live-in carer with a wealth of experience in providing personalized care and companionship. My journey into caregiving was shaped by deeply personal experiences, including nursing my father through a six-year battle with Alzheimer's and supporting a 93-year-old lady during the COVID-19 lockdown in South Africa. These experiences led me to the UK in 2021, where I've had the privilege of working with diverse clients and families across Scotland, Northern Ireland, and England.
              </p>

              <p className={styles.profileText}>
                I specialize in providing care for individuals with dementia, diabetes, depression, strokes, aphasia, palliative needs, and those requiring permanent oxygen support. My hands-on experience includes moving and handling assistance, personal care, and grooming—often accompanied by music and laughter to brighten my clients' days. My goal is always to enhance the quality of life for those I care for, ensuring they feel comfortable, safe, and valued.
              </p>

              <p className={styles.profileText}>
                Beyond caregiving, I bring a well-rounded perspective shaped by my upbringing and previous professional experience. My Scottish mother instilled in me a love for travel, education, and independence, while my father's stories of African bush adventures nurtured my appreciation for the outdoors. I enjoy cooking nutritious, visually appealing meals, maintaining a clean and organized home, and assisting with various household tasks, from grocery shopping and gardening to administrative support and driving clients to appointments or social outings.
              </p>

              <p className={styles.profileText}>
                Fitness and well-being are integral to my life. Having completed two ultra-marathons, provincial and Masters-level field hockey, and the world's largest open-water swim four times, I understand the importance of perseverance and balance. Whenever possible, I encourage my clients to get outside for fresh air, movement, and a touch of sunlight—simple yet effective ways to boost their spirits and overall health.
              </p>

              <p className={styles.profileText}>
                When I'm not working, I cherish time with my two grown sons in Glasgow, stay connected with my energetic 85-year-old mother, and explore Scotland's hidden gems with my binoculars in hand for a bit of birdwatching.
              </p>

              <p className={styles.profileText}>
                Caring is not just a profession for me; it's a calling. I take pride in fostering independence, dignity, and joy in the lives of my clients. If you or your loved one are seeking a compassionate, experienced, and engaging carer, I'd love to hear from you!
              </p>
            </p>
          </div>
        </div>

        <div className={styles.specialties}>
          <h2 className={styles.sectionTitle}>My Specialties</h2>
          <div className={styles.specialtiesGrid}>
            <div className={styles.specialtyCard}>
              <h3 className={styles.specialtyTitle}>Care Expertise</h3>
              <ul className={styles.specialtyList}>
                <li>Dementia Care</li>
                <li>Diabetes Management</li>
                <li>Depression Support</li>
                <li>Stroke Recovery</li>
                <li>Palliative Care</li>
                <li>Permanent Oxygen Support</li>
              </ul>
            </div>
            <div className={styles.specialtyCard}>
              <h3 className={styles.specialtyTitle}>Personal Approach</h3>
              <p className={styles.specialtyText}>
                I bring a well-rounded perspective shaped by my upbringing and experiences. My approach combines professional expertise with genuine compassion, ensuring each client receives personalized care that enhances their quality of life.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.personal}>
          <h2 className={styles.sectionTitle}>Beyond Caregiving</h2>
          <p className={styles.personalText}>
            Fitness and well-being are integral to my life. Having completed two ultra-marathons, provincial and Masters-level field hockey, and the world's largest open-water swim four times, I understand the importance of perseverance and balance. When I'm not working, I cherish time with my two grown sons in Glasgow, stay connected with my energetic 85-year-old mother, and explore Scotland's hidden gems with my binoculars in hand for a bit of birdwatching.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: "min-h-screen",
  hero: "bg-orange-700 text-white py-20",
  heroContent: "max-w-4xl mx-auto px-4 text-center",
  heroTitle: "text-4xl font-bold mb-4",
  heroSubtitle: "text-xl",
  content: "max-w-4xl mx-auto px-4 py-12 space-y-16",
  profile: "flex flex-col md:flex-row gap-8 items-center",
  profileImage: "w-64 h-64 rounded-full object-cover shadow-lg",
  profileContent: "flex-1",
  profileTitle: "text-3xl font-bold text-gray-800 mb-4",
  profileText: "text-gray-600 leading-relaxed space-y-4, text-center, p-5",
  specialties: "py-8",
  sectionTitle: "text-2xl font-bold text-gray-800 mb-8",
  specialtiesGrid: "grid md:grid-cols-2 gap-8",
  specialtyCard: "bg-white p-6 rounded-xl shadow-md",
  specialtyTitle: "text-xl font-semibold text-gray-800 mb-4",
  specialtyList: "list-disc list-inside space-y-2 text-gray-600",
  specialtyText: "text-gray-600 leading-relaxed",
  references: "py-8",
  referencesGrid: "grid md:grid-cols-3 gap-8",
  referenceCard: "bg-orange-50 p-6 rounded-xl",
  referenceText: "text-gray-700 mb-4",
  readMoreButton: "text-orange-600 hover:text-orange-700 font-medium ml-2",
  referenceAuthor: "flex flex-col text-sm",
  personal: "py-8",
  personalText: "text-gray-600 leading-relaxed"
};

export default About;
import React, { useState } from 'react';
import { Heart, Award, Star } from 'lucide-react';
import ReferenceDialog from '../components/ReferenceDialog';

const About = () => {
  const [selectedReference, setSelectedReference] = useState(null);

  const references = [
    {
      text: "Erica started working as companion for my mother, Jackie van der Colff, in June 2020. She worked in rotation with a colleague in shifts of either 10 or 7 days until December 2020. My mother, aged 93, is profoundly deaf and although not physically frail, had been dependent on my father to whom she had been married for 63 years, who passed away in February 2020, in every way imaginable. She has found coping without my father increasingly difficult and has needed assistance with all aspects of her everyday activities. Erica’s duties were extensive: my mother is emotionally frail and her deafness a handicap. She also slowed down physically within the months following my father’s death. Erica was patient and professional and my mother relied on her for the achievement of most daily tasks. It is difficult to make a simple list of duties covered by Erica. Although Erica’s primary commitment was to my mother’s day-to-day needs, the home is a large one with 2 domestic staff and increasing maintenance required in my father’s absence. No two days are the same and plans frequently change at the last minute which is difficult for my mother but always very capably handled by Erica. It is testimony to Erica’s remarkable professionalism and flexibility that she handled every situation with patience and determination, frequently achieving what seemed insurmountable to start with. For much of Erica’s tenure at my mother’s house, South Africa was in lockdown due to Covid 19 and the restrictions onerous and extremely challenging. Very much involved in my mother’s life are her and my fathers 4 offspring: four daughters ranging from 50 – 60 years and of strong personalities. It was always a pleasure to have any contact with Erica. She contributed meaningfully to our family Whatsapp group with regular updates for those of us who live far away. She was always mindful of the family dynamic and respectful of the situation in which we all found ourselves after my father’s death. Erica’s engaging personality, energetic inventive approach to every challenge and unfailing professionalism made her a joy to work with and she will be missed. We wish her the very best of luck in her new venture. Please do not hesitate to contact me at hilary.maude@gmail.co. should you require any further information.",
      author: "Hilary Maude",
      role: "Client's Daughter"
    },
    {
      text: "Erica McDulling provided a care service for my brother Paul from February 2022 to August 2022. Erica was the main carer but was relieved periodically for a break. During all this time, the quality and standard of Erica’s caring skills and attitude was outstanding – I could not have wished for a better nor more reliable person. Paul had unfortunately developed bone cancer which meant that mobility became more challenging and ‘pain management’ became an important factor. Erica was exemplary in both of these aspects and was always keen to get Paul out in the wheelchair for a decent local trip so that he could have a change of scene and get some fresh air. Erica was always kind, considerate, encouraging, cheerful and positive and retained her sense of humour which is so important. Erica liked to keep busy around the house and was also an excellent cook and her meals were greatly looked forward to and much appreciated. Outside of the specific caring role, Erica proved to be very good company and everyone who visited the house said how much they had enjoyed meeting her – good social skills, she was interesting and thoughtful and a good communicator. Regarding professional ability, Erica was competent in all matters from monitoring medication to helping a disabled person to move about safely. In summary, Erica could carry out all of the professional skills that were required to a very high standard. I conclude by saying that I would highly recommend Erica to anyone.",
      author: "Simon Hashim",
      role: "Client's Brother"
    },
    {
      text: "I am happy to confirm that Erica McDulling provided a Live In Caring Service for my wife Janice to our entire satisfaction on two four week periods. Janice suffers from advanced stage Alzheimer's. On both occasions Erica managed to provide Janice with kindly care at the same time as undertaking full household duties including providing meals for us both. During her time with us Erica demonstrated a good understanding of Janice's problems as well as administrating all her medication and providing support with hygiene and showering. I would unhesitatingly reemploy Erica to provide Live In Caring Services to our household.",
      author: "Hamish Ritchie",
      role: "Client's Husband"
    }
  ];

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
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
            alt="Professional profile"
            className={styles.profileImage}
          />
          <div className={styles.profileContent}>
            <h2 className={styles.profileTitle}>Hello, I'm Erica</h2>
            <p className={styles.profileText}>
              Hello, I'm Erica – a compassionate and dedicated live-in carer with a wealth of experience in providing personalized care and companionship. My journey into caregiving was shaped by deeply personal experiences, including nursing my father through a six-year battle with Alzheimer's and supporting a 93-year-old lady during the COVID-19 lockdown in South Africa. These experiences led me to the UK in 2021, where I've had the privilege of working with diverse clients and families across Scotland, Northern Ireland, and England.

              I specialize in providing care for individuals with dementia, diabetes, depression, strokes, aphasia, palliative needs, and those requiring permanent oxygen support. My hands-on experience includes moving and handling assistance, personal care, and grooming—often accompanied by music and laughter to brighten my clients' days. My goal is always to enhance the quality of life for those I care for, ensuring they feel comfortable, safe, and valued.

              Beyond caregiving, I bring a well-rounded perspective shaped by my upbringing and previous professional experience. My Scottish mother instilled in me a love for travel, education, and independence, while my father's stories of African bush adventures nurtured my appreciation for the outdoors. I enjoy cooking nutritious, visually appealing meals, maintaining a clean and organized home, and assisting with various household tasks, from grocery shopping and gardening to administrative support and driving clients to appointments or social outings.

              Fitness and well-being are integral to my life. Having completed two ultra-marathons, provincial and Masters-level field hockey, and the world's largest open-water swim four times, I understand the importance of perseverance and balance. Whenever possible, I encourage my clients to get outside for fresh air, movement, and a touch of sunlight—simple yet effective ways to boost their spirits and overall health.

              When I'm not working, I cherish time with my two grown sons in Glasgow, stay connected with my energetic 85-year-old mother, and explore Scotland's hidden gems with my binoculars in hand for a bit of birdwatching.

              Caring is not just a profession for me; it's a calling. I take pride in fostering independence, dignity, and joy in the lives of my clients. If you or your loved one are seeking a compassionate, experienced, and engaging carer, I'd love to hear from you!
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

        <div className={styles.references}>
          <h2 className={styles.sectionTitle}>Client References</h2>
          <div className={styles.referencesGrid}>
            {references.map((reference, index) => (
              <div key={index} className={styles.referenceCard}>
                <p className={styles.referenceText}>
                  "{reference.text.substring(0, 150)}..."
                  <button 
                    onClick={() => setSelectedReference(reference)}
                    className={styles.readMoreButton}
                  >
                    Read More
                  </button>
                </p>
                <div className={styles.referenceAuthor}>
                  <strong>{reference.author}</strong>
                  <span>{reference.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.personal}>
          <h2 className={styles.sectionTitle}>Beyond Caregiving</h2>
          <p className={styles.personalText}>
            Fitness and well-being are integral to my life. Having completed two ultra-marathons, provincial and Masters-level field hockey, and the world's largest open-water swim four times, I understand the importance of perseverance and balance. When I'm not working, I cherish time with my two grown sons in Glasgow, stay connected with my energetic 85-year-old mother, and explore Scotland's hidden gems with my binoculars in hand for a bit of birdwatching.
          </p>
        </div>
      </div>

      <ReferenceDialog 
        isOpen={selectedReference !== null}
        onClose={() => setSelectedReference(null)}
        reference={selectedReference}
      />
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
  profileText: "text-gray-600 leading-relaxed space-y-4",
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
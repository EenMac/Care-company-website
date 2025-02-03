import React, { useState, useEffect } from 'react';
import { Heart, Star, Award, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReferenceDialog from '../components/ReferenceDialog';
import ContactDialog from '../components/ContactDialog';

const Home = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [selectedReference, setSelectedReference] = useState(null);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const testimonials = [
    {
      text: "Erica's engaging personality, energetic inventive approach to every challenge and unfailing professionalism made her a joy to work with. She was always mindful of the family dynamic and respectful of the situation. My mother, aged 93, is profoundly deaf and although not physically frail, had been dependent on my father to whom she had been married for 63 years, who passed away in February 2020, in every way imaginable. She has found coping without my father increasingly difficult and has needed assistance with all aspects of her everyday activities.",
      author: "Hilary Maude",
      role: "Client's Daughter"
    },
    {
      text: "During all this time, the quality and standard of Erica's caring skills and attitude was outstanding – I could not have wished for a better nor more reliable person. Paul had unfortunately developed bone cancer which meant that mobility became more challenging and 'pain management' became an important factor. Erica was exemplary in both of these aspects and was always keen to get Paul out in the wheelchair for a decent local trip so that he could have a change of scene and get some fresh air.",
      author: "Simon Hashim",
      role: "Client's Brother"
    },
    {
      text: "I am happy to confirm that Erica McDulling provided a Live In Caring Service for my wife Janice to our entire satisfaction on two four week periods. Janice suffers from advanced stage Alzheimer's. On both occasions Erica managed to provide Janice with kindly care at the same time as undertaking full household duties including providing meals for us both. During her time with us Erica demonstrated a good understanding of Janice's problems as well as administrating all her medication and providing support with hygiene and showering.",
      author: "Hamish Ritchie",
      role: "Client's Husband"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Compassionate Live-in Care<br />with a Personal Touch</h1>
            <p className={styles.heroDescription}>Experienced, dedicated care for your loved ones in the comfort of their own home. Specializing in dementia care, companionship, and maintaining independence.</p>
            <Link to="/about" className={styles.heroButton}>
              Learn More About Me
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.expertise}>
        <h2 className={styles.expertiseTitle}>Areas of Expertise</h2>
        <div className={styles.expertiseGrid}>
          {[
            {
              icon: Heart,
              title: "Specialized Care",
              description: "Expert in dementia, diabetes, stroke recovery, and palliative care"
            },
            {
              icon: Star,
              title: "Personal Approach",
              description: "Tailored care plans with a focus on dignity and independence"
            },
            {
              icon: Award,
              title: "Proven Experience",
              description: "Years of dedicated service across Scotland, Northern Ireland, and England"
            }
          ].map((service, index) => (
            <div key={index} className={styles.expertiseCard}>
              <service.icon className={styles.expertiseIcon} />
              <h3 className={styles.expertiseCardTitle}>{service.title}</h3>
              <p className={styles.expertiseDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.testimonials}>
        <div className={styles.testimonialsContent}>
          <h2 className={styles.testimonialsTitle}>What Families Say</h2>
          
          <div className={styles.testimonialMain}>
            <button 
              onClick={handlePrevious}
              className={styles.testimonialButton}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "{testimonials[currentTestimonialIndex].text.substring(0, 200)}..."
                <button 
                  onClick={() => setSelectedReference(testimonials[currentTestimonialIndex])}
                  className={styles.readMoreButton}
                >
                  Read More
                </button>
              </p>
              <div className={styles.testimonialAuthor}>
                <p className={styles.authorName}>{testimonials[currentTestimonialIndex].author}</p>
                <p className={styles.authorRole}>{testimonials[currentTestimonialIndex].role}</p>
              </div>
            </div>

            <button 
              onClick={handleNext}
              className={styles.testimonialButton}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className={styles.testimonialCarousel}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                onClick={() => setCurrentTestimonialIndex(index)}
                className={`${styles.carouselItem} ${
                  index === currentTestimonialIndex ? styles.carouselItemActive : ''
                }`}
              >
                <p className={styles.carouselText}>
                  "{testimonial.text.substring(0, 100)}..."
                </p>
                <p className={styles.carouselAuthor}>{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Looking for Compassionate Care?</h2>
          <p className={styles.ctaDescription}>Let's discuss how I can help your loved one maintain their independence and quality of life</p>
          <button 
            className={styles.ctaButton}
            onClick={() => setIsContactDialogOpen(true)}
          >
            Contact Me Today
          </button>
        </div>
      </div>

      <ReferenceDialog 
        isOpen={selectedReference !== null}
        onClose={() => setSelectedReference(null)}
        reference={selectedReference}
      />

      <ContactDialog
        isOpen={isContactDialogOpen}
        onClose={() => setIsContactDialogOpen(false)}
      />
    </div>
  );
};

const styles = {
  container: "space-y-16 pb-16",
  hero: "h-[600px] bg-cover bg-center relative bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80')]",
  heroOverlay: "absolute inset-0 bg-black bg-opacity-50",
  heroContent: "relative max-w-7xl mx-auto px-4 h-full flex items-center",
  heroText: "text-white max-w-2xl",
  heroTitle: "text-5xl font-bold mb-6",
  heroDescription: "text-xl mb-8",
  heroButton: "inline-block bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors duration-200",
  expertise: "max-w-7xl mx-auto px-4",
  expertiseTitle: "text-3xl font-bold text-center text-gray-800 mb-12",
  expertiseGrid: "grid md:grid-cols-3 gap-8",
  expertiseCard: "bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200",
  expertiseIcon: "w-12 h-12 text-orange-600 mb-4",
  expertiseCardTitle: "text-xl font-semibold text-gray-800 mb-2",
  expertiseDescription: "text-gray-600",
  testimonials: "bg-orange-50 py-16",
  testimonialsContent: "max-w-5xl mx-auto px-4",
  testimonialsTitle: "text-3xl font-bold text-center text-gray-800 mb-12",
  testimonialMain: "flex items-center justify-between gap-4 mb-12",
  testimonialButton: "p-2 rounded-full bg-white shadow-md hover:bg-orange-100 transition-colors duration-200",
  testimonialCard: "bg-white p-8 rounded-xl shadow-md flex-1 max-w-2xl mx-auto",
  testimonialText: "text-gray-600 text-lg italic mb-4",
  testimonialAuthor: "text-right",
  authorName: "font-semibold text-gray-800",
  authorRole: "text-gray-600 text-sm",
  readMoreButton: "text-orange-600 hover:text-orange-700 font-medium ml-2 underline",
  testimonialCarousel: "grid grid-cols-3 gap-4 overflow-x-auto pb-4",
  carouselItem: "bg-white p-4 rounded-lg shadow-md cursor-pointer transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1",
  carouselItemActive: "ring-2 ring-orange-600 shadow-lg",
  carouselText: "text-sm text-gray-600 mb-2 line-clamp-3",
  carouselAuthor: "text-sm font-semibold text-gray-800",
  cta: "bg-orange-700 text-white",
  ctaContent: "max-w-4xl mx-auto px-4 py-16 text-center",
  ctaTitle: "text-3xl font-bold mb-4",
  ctaDescription: "text-xl mb-8",
  ctaButton: "bg-white text-orange-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
};

export default Home;
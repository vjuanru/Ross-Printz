'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Ross Prints" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        At Ross Printz, a Cape Town-based company in <span className="font-extrabold text-white">South Africa</span> we pride ourselves on our meticulousness and customer service. Our team ensures that every project meets the highest quality standards, working closely with clients to fulfill their requirements. {' '}
        
        We offer <span className="font-extrabold text-white">
        diverse printing services
        </span>{' '}  such as T-Shirt and Hoodie Printing, Brochures, Business Cards, Posters, Banners, Cap Printing, and Mug Pressing. With our expertise and advanced equipment, we can handle any printing job with precision.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;

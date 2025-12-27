import { motion } from 'motion/react';

export default function Hero() {
  return (
    <>
      <div className="hero bg-base-200 my-10 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-[50%]">
            <motion.img
              src="https://jobbox.archielite.com/storage/pages/banner1.png" // তোমার image path
              alt="soft-float"
              animate={{
                y: [0, 8, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.img
              className="lg:ml-50"
              src="https://jobbox.archielite.com/storage/pages/banner2.png" // তোমার image path
              alt="soft-float"
              animate={{
                y: [0, -8, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
          <div className="lg:w-[50%]">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-5xl font-bold"
            >
              The Easiest Way to Get Your New Job
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="py-6"
            >
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </motion.p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

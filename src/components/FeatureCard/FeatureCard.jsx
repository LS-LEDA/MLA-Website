import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const FeatureCardMotion = {
  visible: { opacity: 1, x: 0, transition: { ease: 'easeIn', duration: 0.5 } },
  hidden: { opacity: 0, x: -25 },
};

const FeatureCard = (props) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  const mouseEnter = () => {
    if (props.hover) props.select(props.id);
  };

  return (
    <motion.div
      initial="hidden"
      animate={control}
      ref={ref}
      variants={FeatureCardMotion}
      className={`flex ${
        props.hover ? 'hover:bg-primary hover:cursor-pointer' : ''
      } w-full h-auto p-5 rounded-lg space-x-6`}
      onMouseEnter={mouseEnter}
    >
      <div className="flex">
        {/* Feature card icon */}
        <div className="flex bg-primary rounded-md w-12 h-12 place-items-center justify-center">
          {props.feature.icon}
        </div>
      </div>

      {/* Feature card content */}
      <div className="flex flex-col w-full">
        {/* Feature card title */}
        <div className="flex font-bold text-xl"> {props.feature.title} </div>
        <p className="max-w-full"> {props.feature.description} </p>
        <span className="place-self-end font-bold text-sm mt-4">
          <a href="#">{props.feature.extra}</a>
        </span>
      </div>
    </motion.div>
  );
};

export { FeatureCard };

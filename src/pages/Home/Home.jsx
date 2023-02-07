import { HeroBanner } from './HeroBanner/HeroBanner';
import { Features } from './Features/Features';
import { Roadmap } from '../Roadmap/Roadmap';

/**
 * Home is the first component that will be presented on
 * webpage load. It includes the following sections:
 * - HeroBanner
 * - Features Lists
 * @return {JSX.Element}
 * @constructor
 */
const Home = () => {
  return (
    <>
      <HeroBanner />
      <Features />
      <Roadmap />
    </>
  );
};

export { Home };

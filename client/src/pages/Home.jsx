import Hero from '../components/home/Hero';
import CuratedCollection from '../components/home/CuratedCollection';
import CTA from '../components/layout/CTA';
import Shop from './Shop';

export default function Home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="shop">
        <Shop />
      </div>
      <div id="curations">
        <CuratedCollection />
      </div>
      <div id="editorial" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <CTA />
      </div>
    </>
  );
}

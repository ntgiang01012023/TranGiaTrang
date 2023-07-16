import Certificate from '../layouts/Certificate';
import Features from '../layouts/Features';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Hero from '../layouts/Hero';
import Most from '../layouts/Most';
import News from '../layouts/News';
import Storehouse from '../layouts/Storehouse';

const Home = () => {
    return (
        <div className='w-full h-auto'>
            <Header />
            <Hero />
            <Features />
            <Most />
            <News />
            <Certificate />
            <Storehouse />
            <Footer />
        </div>
    );
};

export default Home;
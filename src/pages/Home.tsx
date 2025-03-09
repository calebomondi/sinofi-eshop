
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import CategorySection from '@/components/home/CategorySection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import BrandSection from '@/components/home/BrandSection';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <BrandSection />
    </Layout>
  );
};

export default Home;

import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
// import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Temukan keaslian madu alami dari hutan pedalaman pulau Timor NTT dengan Syarqi Honey. Madu kami kaya akan manfaat untuk kesehatan dan obat. Pesan sekarang dan rasakan manfaatnya."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          {/* <Partners /> */}
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Kenapa Madu Syarqi?." overTitle="Kenapa?">
            <p>
              Madu Syarqi Honey adalah madu murni yang dihasilkan dari hutan pedalaman pulau Timor NTT. Kami mengutamakan kualitas dan
              keaslian produk kami, sehingga madu yang kami tawarkan adalah madu yang 100% alami dan tidak mengandung bahan pengawet atau
              pengatur rasa. Madu Syarqi Honey kaya akan nutrisi yang baik untuk kesehatan, seperti antioksidan, flavonoid, dan asam amino.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Madu penuh khasiat" overTitle="Khasiat" reversed>
            <p>
              Madu ini juga memiliki sifat anti-inflamasi dan antibakteri yang membuat madu ini dapat digunakan untuk mengobati berbagai
              jenis penyakit, seperti luka, sakit tenggorokan, sakit perut, dan lainnya. Madu Syarqi Honey juga sangat baik digunakan
              sebagai pengganti gula dalam minuman atau makanan, karena madu memiliki indeks glikemik yang lebih rendah dibandingkan dengan
              gula biasa.
            </p>
            <ul>
              <li>Madu sebagai antibakteri</li>
              <li>Madu sebagai pengganti gula</li>
              <li>Dan masih banyak lagi...</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}

import NextImage from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import Collapse from 'components/Collapse';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const TABS = [
  {
    title: 'Madu Syarqi 100% asli',
    description:
      '<p>Madu Syarqi Honey adalah madu yang 100% asli dan tidak tercampur dengan bahan lain. Kami menjaga kemurnian madu dengan mengumpulkan madu dari hutan pedalaman pulau Timor NTT dengan metode tradisional.</p>',
    imageUrl: '/honey-bottle-3.jpg',
    baseColor: '88,193,132',
    secondColor: '124,207,158',
    icon: '🐝',
  },
  {
    title: 'Kandungan nutrisi yang tinggi',
    description:
      '<p>Madu Syarqi Honey kaya akan nutrisi, seperti kalsium, potassium, magnesium, vitamin B, dan vitamin C. Dengan kandungan nutrisi ini, madu Syarqi Honey dapat membantu menjaga kesehatan tubuh anda agar lebih fit dan semangat beribadah.</p>',
    imageUrl: '/honey-bottle-2.jpg',
    baseColor: '57,148,224',
    secondColor: '99,172,232',
    icon: '😋',
  },

  {
    title: 'Ganti gula-mu dengan Syarqi Honey!',
    description:
      '<p>Gantikan asupan gula Anda dengan Syarqi Honey, Dengan Syarqi Honey, Anda dapat menikmati rasa manis alami tanpa khawatir tentang efek negatif dari gula tambahan.</p>',
    imageUrl: '/honey-bottle-1.png',
    baseColor: '249,82,120',
    secondColor: '221,9,57',
    icon: '🍯',
  },
];

export default function FeaturesGallery() {
  const [currentTab, setCurrentTab] = useState(TABS[0]);

  const imagesMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;
    const isFirst = idx === 0;

    return (
      <ImageContainer key={singleTab.title} isActive={isActive}>
        <NextImage src={singleTab.imageUrl} alt={singleTab.title} layout="fill" objectFit="cover" priority={isFirst} />
      </ImageContainer>
    );
  });

  const tabsMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;

    return (
      <Tab isActive={isActive} key={idx} onClick={() => handleTabClick(idx)}>
        <TabTitleContainer>
          <CircleContainer>
            {/* <ThreeLayersCircle baseColor={isActive ? 'transparent' : singleTab.baseColor} secondColor={singleTab.secondColor} /> */}
            {singleTab.icon}
          </CircleContainer>
          <h4>{singleTab.title}</h4>
        </TabTitleContainer>
        <Collapse isOpen={isActive} duration={300}>
          <TabContent>
            <div dangerouslySetInnerHTML={{ __html: singleTab.description }}></div>
          </TabContent>
        </Collapse>
      </Tab>
    );
  });

  function handleTabClick(idx: number) {
    setCurrentTab(TABS[idx]);
  }

  return (
    <FeaturesGalleryWrapper id="Manfaat">
      <Content>
        <OverTitle>Manfaat</OverTitle>
        <SectionTitle>Apa saja manfaat Madu Syarqi</SectionTitle>
      </Content>
      <GalleryWrapper>
        <TabsContainer>{tabsMarkup}</TabsContainer>
        {imagesMarkup}
      </GalleryWrapper>
    </FeaturesGalleryWrapper>
  );
}

const FeaturesGalleryWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;

  ${media('<=desktop')} {
    flex-direction: column;
  }
`;

const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`;

const TabsContainer = styled.div`
  flex: 1;
  margin-right: 4rem;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${media('<=desktop')} {
    margin-right: 0;
    margin-bottom: 4rem;
    width: 100%;
  }
`;

const ImageContainer = styled.div<{ isActive: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  flex: ${(p) => (p.isActive ? '2' : '0')};
  box-shadow: var(--shadow-md);

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: ${(p) => (p.isActive ? '100%' : '0')};
  }
`;

const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  opacity: ${(p) => (p.isActive ? 1 : 0.6)};
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;

  font-size: 1.6rem;
  font-weight: bold;

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const TabTitleContainer = styled.div`
  display: flex;
  align-items: center;

  h4 {
    flex: 1;
  }
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  padding-left: calc(3rem + 1.5rem);

  ${media('<=tablet')} {
    padding-left: calc(4rem + 1.25rem);
  }

  p {
    font-weight: normal;
  }
`;

const CircleContainer = styled.div`
  flex: 0 calc(3rem + 1.5rem);
  font-size: 24px;

  ${media('<=tablet')} {
    flex: 0 calc(4rem + 1.25rem);
  }
`;

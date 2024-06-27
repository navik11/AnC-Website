import React from "react";
import ObjectivesSection from "@/components/ProductClub/Objectives";
import { Metadata } from "next";
import Activities from "@/components/ProductClub/Activities/Activities";
import CalendarView from "@/components/ProductClub/CalenderView";
import ResearchGazette from "@/components/ProductClub/ResearchGazette";
import PastSessions from "@/components/ProductClub/PastSessions";
import DirectorNote from "@/components/ProductClub/Quote/DirectorNote";
import FeaturesTab from "@/components/ProductClub/FeaturesTab";
import NoteSection from "@/components/ProductClub/Note/NoteSection";
import Banner from "@/components/Banner";

export const metadata: Metadata = {
  title: "Product Club",
  description: "This is the Product Club page for ANC council",
  // other metadata
};

const banners = [
  {
    delay: 3000,
    className: 'dark:hidden',
    slides: [
      { src: '/images/banner/anciitk_cover.jpeg', alt: 'Slide 1' },
      { src: '/images/banner/light-02.jpeg', alt: 'Slide 2' },
      { src: '/images/banner/light-03.jpeg', alt: 'Slide 3' }
    ]
  },
  {
    delay: 3000,
    className: 'dark:block',
    slides: [
      { src: '/images/banner/bg1.jpg', alt: 'Slide 1' },
      { src: '/images/banner/dark-02.jpeg', alt: 'Slide 2' },
      { src: '/images/banner/dark-03.jpeg', alt: 'Slide 3' }
    ]
  }
];

const socialLinks = [
  {
    href: 'https://www.facebook.com/ANCIITK',
    label: 'facebook icon',
    iconPath: 'M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z'
  },
  {
    href: 'https://www.twitter.com/anciitk',
    label: 'twitter icon',
    iconPath: 'M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z'
  },
  // Add more social links here
];

const description = {
  title: "Innovating Solutions for",
  highlight: "a Sustainable Future",
  text: "The Product Club at IIT-Kanpur is dedicated to enhance creativity and innovation among students. We provide opportunities to explore product design, development, and entrepreneurship, helping students to transform their ideas into real-world solutions."
};


const ProductPage = () => {
  return (
    <div>
        <Banner banners={banners} title={"Welcome to Product Club"} description={description} socialLinks={socialLinks}/>
        <ObjectivesSection />
        <Activities />
        <CalendarView />
        <ResearchGazette />
        <PastSessions />
        {/* <DirectorNote /> */}
        <FeaturesTab />
        {/* <NoteSection /> */}

    </div>
  );
};

export default ProductPage;

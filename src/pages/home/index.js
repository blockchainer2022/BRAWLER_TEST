import React from "react";
import { Layout } from "../../components";
import {
  BannerSection,
  PresaleSection,
  RoadMapSection,
  FaqSection,
  TeamSection,
} from "../../sections";
const Index = () => {
  return (
    <div>
      <Layout>
        <BannerSection />
        <PresaleSection />
        <RoadMapSection />
        <FaqSection />
        <TeamSection />
      </Layout>
    </div>
  );
};

export default Index;

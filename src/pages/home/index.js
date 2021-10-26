import React from "react";
import { Layout } from "../../components";
import { toast } from "react-toastify";
import {
  BannerSection,
  PresaleSection,
  RoadMapSection,
  FaqSection,
  TeamSection,
} from "../../sections";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const Index = ({
  account,
  mint,
  totalSupply,
  displayPrice,
  loadWeb3,
  maxSupply,
}) => {
  return (
    <div>
      <Layout>
        <BannerSection />
        <PresaleSection
          account={account}
          mint={mint}
          totalSupply={totalSupply}
          displayPrice={displayPrice}
          maxSupply={maxSupply}
          loadWeb3={loadWeb3}
        />
        <RoadMapSection />
        <FaqSection />
        <TeamSection />
      </Layout>
    </div>
  );
};

export default Index;

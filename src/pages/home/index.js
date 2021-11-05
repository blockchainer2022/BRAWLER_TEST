import React from "react";
import { Layout } from "../../components";
import { toast } from "react-toastify";
import { BannerSection } from "../../sections";
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
        <BannerSection
          account={account}
          mint={mint}
          totalSupply={totalSupply}
          displayPrice={displayPrice}
          maxSupply={maxSupply}
          loadWeb3={loadWeb3}
        />
      </Layout>
    </div>
  );
};

export default Index;

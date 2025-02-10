import { Banner } from "@/widget/Banner";
import HomeArrivals from "@/widget/HomeArrivals/HomeArrivals";
import HomeTopSelling from "@/widget/HomeTopSelling/ui/HomeTopSelling";
import React from "react";

const Homepage = () => {
  return (
    <>
      <Banner />
      <HomeArrivals />
      <HomeTopSelling />
    </>
  );
};

export default Homepage;

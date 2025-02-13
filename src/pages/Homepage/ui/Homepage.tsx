import { Banner } from "@/widget/Banner";
import HomeArrivals from "@/widget/HomeArrivals/HomeArrivals";
import HomeDressStyle from "@/widget/HomeDressStyle/ui/HomeDressStyle";
import HomeTopSelling from "@/widget/HomeTopSelling/ui/HomeTopSelling";

const Homepage = () => {
  return (
    <>
      <Banner />
      <HomeArrivals />
      <HomeTopSelling />
      <HomeDressStyle />
    </>
  );
};

export default Homepage;

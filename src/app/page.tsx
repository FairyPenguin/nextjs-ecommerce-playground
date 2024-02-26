import MainLayout from "@/components/UiComponents/MainLayout/MainLayout";
import styles from "./page.module.css";
// Imports
// import CategoryProductsList from "@components/UiComponents/ProductsList/CategoryProductsList";
// import BoxSlider from "@components/BoxSlider/BoxSlider.astro";
// import Navbar from "@components/UiComponents/Navbar/Navbar";
// import CategoriesGrid from "@components/CategoriesGrid/CategoriesGrid";
// Icons Imports
import HomeSlider from "../components/HomeSlider/HomeSlider";

//Logos Imports
// import Noon from "/public/images/noon-com-logo.png";
// import Jumia from "/public/images/Jumia-Logo-500x281.png";
// import Amazon from "/public/images/Amazon_logo.png";
import NoonLogo from "../../public/images/Noon.png";
import JumiaLogo from "../../public/images/Jumia.png";
import AmazonLogo from "../../public/images/Amazon_logo_d.png";
// React Components Imports
// import Slider from "@components/Slider/Slider";
// import Slider2 from "@components/Slider2/Slider2";
// import Collapsible from "@components/Ark/Ark";
// import Swiper2 from "@components/Swiper/Swiper";

// import ProductsSwiper from "../components/ProductsSwiper/ProductsSwiper";
// import ProductCard from  "@/components/UiComponents/ProductCard/ProductCard.astro";
// import MobileNavMenu from "@/components/HomeComponents/MobileNavMenu/MobileNavMenu.astro";

import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import Image from "next/image";
import ShippingIconSvg from "@/components/SvgIcons/ShippingIconSvg";
import UserIconSvg from "@/components/SvgIcons/UserIconSvg";
import Spacer from "@/components/UiComponents/Spacer/Spacer";
import PlainCard from "@/components/PlainCard/PlainCard";
import SmallFeatureCard from "@/components/SmallFeatureCard/SmallFeatureCard";
import ProductsList from "@/components/ProductsList/ProductsList";
import Slider from "@/components/Slider/Slider";
import CategoryWithBkgImages from "@/components/CategoryWithBkgImages/CategoryWithBkgImages";
import MobileSwiper from "@/components/MobileSwiper/MobileSwiper";

import StoreProvider from "@/app/StoreProvider"
import { useAppSelector } from "@/redux/hooks"


const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  const sliderArray = [
    {
      url: "https://i.postimg.cc/t7QKtvBP/s1.jpg",
      alt: "Image-1",
      index: 0
    },
    {
      url: "https://i.postimg.cc/2jb3GqH8/s2.jpg",
      alt: "Image-2",
      index: 1
    },
    {
      url: "https://i.postimg.cc/c4fCqpyp/s3.jpg",
      alt: "Image-3",
      index: 2
    },
    {
      url: "https://i.postimg.cc/Y250spVN/s4.jpg",
      alt: "Image-4",
      index: 3
    },
    {
      url: "https://i.postimg.cc/t7QKtvBP/s1.jpg",
      alt: "Image-1",
      index: 0
    },
    {
      url: "https://i.postimg.cc/2jb3GqH8/s2.jpg",
      alt: "Image-2",
      index: 1
    },
    {
      url: "https://i.postimg.cc/c4fCqpyp/s3.jpg",
      alt: "Image-3",
      index: 2
    },
    {
      url: "https://i.postimg.cc/Y250spVN/s4.jpg",
      alt: "Image-4",
      index: 3
    },
  ];

  return (
    <>
      <HomeSlider slides={sliderArray} />
      {/* <Slider /> */}
      <MainLayout>
        {/* <MobileSwiper /> */}
        {/* Header */}

        {/* Navbar */}
        {/* <Navbar /> */}

        {/* Slider */}
        {/* <Slider client:load /> 
 <Slider2 slides={SLIDES} options={OPTIONS} client:load /> 
 <BoxSlider client:load /> 
 <Collapsible client:load />  */}

        {/* <MobileNavMenu />
      <Swiper2 /> */}

        {/* <CategoriesGrid />
      <Spacer space={5} />
      <CategoryProductsList title="New Arrivals" /> */}

        {/* <ProductsSwiper client:load>
    <h1 slot='solt1'>Ho HO</h1>
    <h1 slot='solt2'>Pew Pew</h1>
    <div slot='slot3'>
      <ProductCard />
    </div>
  </ProductsSwiper>  */}
        <CategoryWithBkgImages />
        <ProductsList title="Products List Title" />

        <Hero />

        {/* Stores */}
        <Features
          className="justified-center"
          title="You can find us on"
          description="X-tech products are also available on other stores"
        >
          {/* Cards */}
          <PlainCard className="no-background">
            <a href="">
              <Image src={NoonLogo} alt="Altk" width={200} height={120} />
            </a>
          </PlainCard>

          <PlainCard className="no-background">
            <a href="">
              <Image src={JumiaLogo} alt="Altk" width={200} height={120} />
            </a>
          </PlainCard>

          <PlainCard className="no-background">
            <a href="">
              <Image src={AmazonLogo} alt="Altk" width={200} height={120} />
            </a>
          </PlainCard>
          {/* Cards */}
        </Features>

        {/* Features */}

        <Features
          title="We build our business on customer service"
          description="We offer prompt and courteous support for placing an order, tracking a shipment, or resolving any product issues. Contact us by phone, email, or live chat during regular business hours."
        >
          {/* Cards */}
          <SmallFeatureCard
            title="Exchange"
            description="We want you to feel safe"
            className="white__background"
          >
            <ShippingIconSvg width={30} height={30} />
          </SmallFeatureCard>

          <SmallFeatureCard
            title="Fast Shipping"
            description="Need it fast? No worries!"
            className="white__background"
          >
            <ShippingIconSvg width={30} height={30} />
          </SmallFeatureCard>

          <SmallFeatureCard
            title="Extended warranty"
            description="We want you to feel safe"
            className="white__background"
          >
            <ShippingIconSvg width={30} height={30} />
          </SmallFeatureCard>
          {/* Cards */}
        </Features>
      </MainLayout>
    </>
  );
}

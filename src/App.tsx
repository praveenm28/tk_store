import React from "react";
import "./App.css";

const comman = { price: 70, oldPrice: 100, rating: 4.9 };
const ProductsArray = [
  {
    name: "Cadbury Dairy Milk Chocolate Bar 110g",
    image: "/images/products/product-1.png",
  },
  {
    name: "Coca-Cola Zero Sugar 500ml Bottle",
    image: "/images/products/product-2.png",
  },
  {
    name: "Colgate Total Whitening Toothpaste 75ml",
    image: "/images/products/product-3.png",
  },
  {
    name: "Persil Bio Laundry Liquid 1.4L (40 Washes)",
    image: "/images/products/product-4.png",
  },
  {
    name: "Nescafe Gold Blend Instant Coffee Powder 190g ",
    image: "/images/products/product-5.png",
  },
  {
    name: "Walkers Ready Salted Sharing Crisps 150g",
    image: "/images/products/product-6.png",
  },
  {
    name: "Diva Rose & Lime Detergent Powder 1Kg",
    image: "/images/products/product-7.png",
  },
].map((item) => {
  return { ...item, ...comman };
});

function App() {
  return (
    <>
      {/* header */}
      <div className="w-full bg-[#F3F3F3] h-[55px] flex flex-row items-center justify-end pr-[49px]">
        <NameIcon
          imagePath="/images/home-top-header/location.png"
          name="Find Stores"
        />
        <Devider />
        <NameIcon
          imagePath="/images/home-top-header/dollor.png"
          name="Dollar (us)"
        />
        <Devider />
        <NameIcon
          imagePath="/images/home-top-header/truck.png"
          name="Shipping method"
        />
        <Devider />
        <NameIcon imagePath="" name="Help & support" />
      </div>
      {/* header2 */}
      <div className="bg-white h-[82px] px-[32px] flex items-center">
        <HeaderTwoTitle />
        <Space width={"lg:w-[10px] xl:w-[30px]"} />
        <DeliveryButton />
        <Space width={"lg:w-[10px] xl:w-[30px]"} />
        <SearchBar />
        <Space width={"lg:w-[10px] xl:w-[30px]"} />
        <NameIcon
          imagePath="/images/home-top-header/user.png"
          width="32"
          height="32"
          name="LogIn / Registration"
        />
        <Space width={"lg:w-[10px] xl:w-[30px]"} />
        <NameIcon
          imagePath="/images/home-top-header/basket.png"
          width="32"
          height="32"
          name="$ 0.00"
        />
      </div>

      {/* {3rd header} */}
      <ThirdHeader />

      {/* 1st banner */}
      <BannerOne />

      {/* sub-nav */}
      <SubNav />

      {/* {two-ads} */}
      <TwoAds />

      {/* Feature Products */}
      <ProductsList title="Featured Products" showViewAll />

      {/* Best Seller */}
      <ProductsList title="Best Sellers" rows={2} dark />

      {/* learn More button */}
      <LoadMoreButton />

      {/* banner two   */}

      <BannerTwo />

      {/* banner temp  */}
      <div className="mb-10 mt-[-100px]">
        <img
          src="/images/banner/banner-temp.png"
          alt="t&k banner"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* third banner  */}
      <BannerThree />

      {/* footer  */}
      <Footer />
    </>
  );
}

export default App;

const NameIcon = ({
  imagePath,
  name,
  width = "20px",
  height = "20px",
  fontWeight = "semibold",
}: {
  imagePath?: string;
  name: string;
  width?: string;
  height?: string;
  fontWeight?: string;
}) => {
  return (
    <div className="inline-flex">
      {imagePath !== "" && (
        <>
          <div className="hidden xl:block">
            <img
              src={imagePath}
              alt="location_image_t&k"
              style={{
                width: width,
                height: height,
              }}
            />
          </div>
          <div className="block xl:hidden">
            <img
              src={imagePath}
              alt="location_image_t&k"
              style={{
                width: 15,
                height: 15,
              }}
            />
          </div>
        </>
      )}
      <div className="lg:w-[5px] xl:w-[10px]" />
      <p
        className={`lg:text-[10px] xl:text-[12px] 2xl:text-[16px] font-${fontWeight} text-black font-[Source Sans Pro]`}
      >
        {name}
      </p>
    </div>
  );
};

const Devider = () => {
  return <span className="text-black px-[30px]">|</span>;
};

const HeaderTwoTitle = () => {
  return (
    <div className="inline-block text-left">
      <p className="font-[Passion One] font-bold gradient-text lg:text-[40px] xl:text-[64px]  lg:leading-[40px] xl:leading-[64px]">
        T&K
      </p>
      <p className="font-nerko lg:text-[12px] xl:text-[20px] font-bold text-black text-center">
        Food Mart
      </p>
    </div>
  );
};

const DeliveryButton = () => {
  return (
    <div className="rounded-[25px] border-[1px] border-black lg:px-[10px] xl:px-[12px] lg:py-[5px] xl:py-[11px] inline-block xl:min-w-[150px]">
      <NameIcon
        imagePath="/images/home-top-header/location.png"
        name="Delivery Location"
        fontWeight="normal"
      />
    </div>
  );
};

const Space = ({
  width = "",
  height = "",
}: {
  width?: string;
  height?: string;
}) => {
  return <div className={`${width} ${height} `} />;
};

const SearchBar = () => {
  return (
    <>
      <div className="border-[#05A30D] border-[1px] rounded-tl-[5px] rounded-bl-[5px] py-[11px] px-[16px] ">
        <div className="flex items-center">
          <img
            src="/images/home-top-header/menu.png"
            alt="menu-T&k"
            style={{ width: "20px", height: "20px" }}
          />
          <span className="ml-[12px] text-[14px] font-normal text-[#768576] font-[Source Sans Pro]">
            Categories
          </span>
          <Space width={"lg:w-[15px] xl:w-[35px]"} />
          <img
            src="/images/home-top-header/down-arrow.png"
            alt="down_arrow-T&k"
            style={{ width: "21px", height: "12px" }}
          />
        </div>
      </div>
      <div className="border-[#05A30D] border-[1px] rounded-tr-[5px] rounded-br-[5px] pl-[16px] ">
        <div className="flex bg-red-500">
          <input
            type="text"
            placeholder="Search Products"
            className=" border-none outline-none py-[11px] text-[14px] font-normal text-[#768576] font-[Source Sans Pro] lg:min-w-[300px] xl:min-w-[400px]"
          />
          <div className="bg-[#05A30D]  w-[76px] flex items-center justify-center">
            <img
              src="/images/home-top-header/search.png"
              alt="search-T&k"
              style={{ width: "21px", height: "21px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const ThirdHeader = () => {
  return (
    <div className="bg-[#0A9C2C] h-[47px] flex items-center justify-evenly">
      <div className="flex items-center rounded-[50px] bg-[#D9D9D933] py-[5px] px-[10px]">
        <p className="text-[16px] font-[Source Sans Pro] font-normal text-white">
          Check product Availability
        </p>
        <Space width="lg:w-[20px] xl:w-[30px]" />
        <img
          alt="down_arrow-T&k"
          src="/images/home-top-header/white-down-arrow.png"
          style={{
            width: "21px",
            height: "12px",
            color: "white",
          }}
        />
      </div>
      {[
        "Products",
        "Brands",
        "Promotion & Deals",
        "New Arrivals",
        "Loyalty Program",
        "Favorites",
      ].map((item) => {
        return <Title title={item} />;
      })}
    </div>
  );
};
const Title = ({ title }: { title: string }) => {
  return (
    <p className="text-[18px] font-[Source Sans Pro] font-semibold text-white">
      {title}
    </p>
  );
};

const BannerOne = () => {
  return (
    <div className="bg-[#C7E9B0]  w-full">
      <div className="grid grid-cols-9">
        <div className="col-span-5 flex flex-col justify-center">
          <p className="font-[Source Sans Pro] font-[900] text-[40px] xl:text-[56px] text-center text-[#05A30D]">
            Fresh Vegetables, Straight from the Farm!
          </p>
          <p className="font-[Source Sans Pro] font-semibold text-[24px] xl:text-[32px] text-center text-black mt-[35px]">
            Sourced locally for the freshest, healthiest produce.
          </p>
          <p className="font-[Source Sans Pro] font-normal text-[32px] text-center text-black mt-[35px]">
            <span className="bg-[#067D23] font-semibold py-2 inline-block text-white rounded-tl-[10px] rounded-br-[10px] text-[20px] px-[16px]">
              Explore today
            </span>
          </p>
        </div>
        <div className="col-span-4 flex items-end justify-end mt-[44px]">
          <img
            src="/images/banner/vegetable.png"
            alt=""
            style={{ width: 613, height: 428 }}
          />
        </div>
      </div>
    </div>
  );
};

const SubNav = () => {
  return (
    <div className="flex flex-row items-center justify-evenly px-10 mt-10 mb-5">
      <NameIcon
        imagePath="/images/sub-nav-icon/plant.png"
        width="24"
        height="24"
        name="Freshness Guaranteed"
        fontWeight="normal"
      />
      <NameIcon
        imagePath="/images/sub-nav-icon/price-tag.png"
        width="24"
        height="24"
        name="Unbeatable Prices"
        fontWeight="normal"
      />
      <NameIcon
        imagePath="/images/sub-nav-icon/green-basket.png"
        width="24"
        height="24"
        name="Wide Selection"
        fontWeight="normal"
      />
      <NameIcon
        imagePath="/images/sub-nav-icon/green-truck.png"
        width="24"
        height="24"
        name="Fast & Reliable Delivery"
        fontWeight="normal"
      />
      <NameIcon
        imagePath="/images/sub-nav-icon/care.png"
        width="24"
        height="24"
        name="Customer-Centric Service"
        fontWeight="normal"
      />
    </div>
  );
};

const TwoAds = () => {
  return (
    <div className="grid grid-cols-2 px-4 gap-[16px]">
      <div className="col-span-1 ">
        <img
          src="/images/two-ads/left-ad.png"
          alt="left-ad-t&k"
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <div className="col-span-1 ">
        <img
          src="/images/two-ads/right-ad.jpeg"
          alt="right-ad-t&k"
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
};

const Product = ({
  name,
  price,
  oldPrice,
  rating,
  image,
  dark = false,
}: {
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  image: string;
  dark?: boolean;
}) => {
  return (
    <div className="bg-white rounded-[2.8px] border-none shadow-sm flex flex-col p-[10px]">
      <div
        className={`rounded-[8px] flex flex-row items-end justify-end p-2 ${
          dark ? "bg-[#E5E5E5]" : "bg-white"
        }`}
      >
        <img
          alt="product_image_t&k"
          src={image}
          style={{
            width: "80%",
            height: "100%",
          }}
        />
        <div
          className={` rounded-[50%] flex items-center justify-center h-[25px] w-[25px] ml-[2px] ${
            dark ? "bg-white" : "bg-[#E5E5E5]"
          }`}
        >
          <img
            alt="product_image_t&k"
            src="/images/products/icons/plus.png"
            style={{
              width: "11px",
              height: "11px",
            }}
          />
        </div>
      </div>
      <div className="mt-[20px]">
        <p className="text-black font-[Source Sans Pro] font-normal text-[14px]">
          {name}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-[Source Sans Pro] font-semibold text-[14px] text-[#05A30D]">
              {price}
            </p>
            &nbsp;
            <p className="text-[Source Sans Pro] font-normal text-[14px] text-[#879088] line-through">
              {oldPrice}
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="/images/products/icons/star.png"
              alt=""
              style={{ width: 12, height: 12 }}
            />
            <p className="text-[12px] font-[Roboto] font-normal text-[#171817]">
              {rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsList = ({
  title,
  showViewAll = false,
  rows = 1,
  dark = false,
}: {
  title: string;
  showViewAll?: boolean;
  rows?: number;
  dark?: boolean;
}) => {
  return (
    <div className="p-4 mt-[67px]">
      <div className="flex items-center justify-between">
        <p className="text-black font-[Source Sans Pro] font-semibold text-[24px]">
          {title}
        </p>
        {showViewAll && (
          <p className="font-[Manrope] font-bold text-[18px] text-[#05A30D]">
            View All
          </p>
        )}
      </div>

      <div className="grid grid-cols-7 gap-[5px] mt-[16px]">
        {Array(rows)
          .fill(ProductsArray)
          .flat()
          .map((item) => (
            <Product
              dark={dark}
              name={item.name}
              price={item.price}
              oldPrice={item.oldPrice}
              rating={item.rating}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

const LoadMoreButton = () => {
  return (
    <div className="flex items-center justify-center mt-[30px]">
      <div className="rounded-lg border-[1px] border-black px-[30px] py-[17px] inline-block">
        <p className="font-[Source Sans Pro] font-semibold text-[14px] text-[#1B2430]">
          Load More &gt;&gt;{" "}
        </p>
      </div>
    </div>
  );
};

const BannerTwo = () => {
  return (
    <div className=" lg:mt-[-100px] 2xl:mt-[-130px]">
      <img
        src="/images/banner/banner-2.png"
        alt="t&K banner"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

const BannerThree = () => {
  return (
    <div className="bg-[#020F4D]  w-full lg:px-[100px] xl:px-[150px] 2xl:px-[200px]">
      <div className="grid grid-cols-9">
        <div className="col-span-5 flex flex-col justify-center">
          <p className="font-[Source Sans Pro] font-[700] text-[48px] xl:text-[56px] text-center text-white">
            Unlock Exclusive Offers Just for You!
          </p>
          <p className="font-[Source Sans Pro] font-normal text-[24px] xl:text-[28px] text-center text-white mt-[24px]">
            Sign up now to receive the latest deals, promotions, and more!
          </p>
          <p className="font-[Source Sans Pro] font-normal text-[32px] text-center text-black mt-[35px]">
            <span className="bg-[#067D23] font-semibold py-2 inline-block text-white rounded-tl-[10px] rounded-br-[10px] text-[20px] px-[16px]">
              Get Started
            </span>
          </p>
        </div>
        <div className="col-span-4 flex items-end justify-end mt-[44px]">
          <img
            src="/images/banner/banner-3.png"
            alt=""
            style={{ width: 413, height: 413 }}
          />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="pt-[34px] px-[24px]">
      <div className="grid grid-cols-6 gap-5 ">
        <div className="flex flex-col items-start">
          <p className="font-[Source Sans Pro] text-[14px] font-semibold text-[#013004]">
            Customer Care
          </p>
          <p className="font-[Source Sans Pro] text-[14px] font-normal mt-[21px] ">
            Help & FAQs
          </p>
          <p className="font-[Source Sans Pro] text-[14px] font-normal mt-[7px]">
            Delivery Information
          </p>
          <p className="font-[Source Sans Pro] text-[14px] font-normal mt-[7px]">
            Returns & Refunds
          </p>
          <p className="font-[Source Sans Pro] text-[14px] font-normal mt-[7px]">
            Track Order
          </p>
          <p className="font-[Source Sans Pro] text-[14px] font-normal mt-[7px]">
            Contact Us
          </p>
        </div>

        <div className="flex flex-col items-start">
          <p className="font-[Source Sans Pro] text-[14px] font-semibold text-[#013004]">
            Comapny
          </p>
          <p className="font-[Source Sans Pro] text-[14px] font-normal mt-[21px] ">
            About Us
          </p>
          <p className="font-[Source Sans Pro] text-[14px] font-normal mt-[7px]">
            Careers
          </p>
          <p className="font-[Source Sans Pro] text-[14px] font-normal mt-[7px]">
            Our Values
          </p>
          <p className="font-[Source Sans Pro] text-[14px] font-normal mt-[7px]">
            Press & News
          </p>
        </div>

        <div className="flex flex-col items-start">
          <p className="font-[Source Sans Pro] text-[14px] font-semibold text-[#013004]">
            Quick Links
          </p>
          <p className="font-[Source Sans Pro] text-[14px] font-normal mt-[21px] ">
            Offers & Discounts
          </p>
          <p className="font-[Source Sans Pro] text-[14px] font-normal mt-[7px]">
            Gift Cards
          </p>
          <p className="font-[Source Sans Pro] text-[14px] font-normal mt-[7px]">
            Loyalty Program
          </p>
          <p className="font-[Source Sans Pro] text-[14px] font-normal mt-[7px]">
            Best Sellers
          </p>
          <p className="font-[Source Sans Pro] text-[14px] font-normal mt-[7px]">
            Blog
          </p>
          <p className="font-[Source Sans Pro] text-[14px] font-normal mt-[7px]">
            Privacy Policy
          </p>
          <p className="font-[Source Sans Pro] text-[14px] font-normal mt-[7px]">
            Terms & Conditions
          </p>
        </div>

        <div className="col-span-2">
          <p className="font-[Source Sans Pro] text-[14px] font-semibold text-[#013004]">
            Download Our App
          </p>
          <p className="font-[Source Sans Pro] text-[14px] font-normal mt-[21px] ">
            Get the best shopping experience on the go!
          </p>

          <div className="grid grid-cols-2 gap-2 mt-[40px]">
            <img
              src="/images/footer/app-store.png"
              alt="t&k"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <img
              src="/images/footer/play-store.png"
              alt="t&k"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col items-start">
          <p className="font-[Source Sans Pro] text-[14px] font-semibold text-[#013004]">
            Payment Methods
          </p>
          <div className=" mt-[40px]">
            <img
              src="/images/footer/payment-method.png"
              alt="t&k"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
      <p className="font-[Source Sans Pro] text-[14px] font-normal mt-[53px]">
        © 2024 All rights reserved. T and K Food Mart Limited
      </p>
    </div>
  );
};

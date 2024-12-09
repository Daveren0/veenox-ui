import { FontLarge, FontMedium, FontSmall, H2 } from "@/components/fonts";
import { insights, stats } from "@/constants";
import Spline from "@splinetool/react-spline/next";
import Link from "next/link";
import { FC } from "react";
import { BoxInsight } from "./components/insight-box";
import { BoxStat } from "./components/stat-box";

const Home: FC = () => {
  // try {
  //   const viewer = document.querySelector("spline-viewer");
  //   if (viewer)
  //     viewer?.addEventListener("load", () => {
  //       const canvas = viewer.querySelector("canvas");
  //       canvas?.style.width = "400px";
  //       canvas?.style.height = "400px";
  //     });
  // } catch (e) {}

  return (
    <main>
      <section className="h-[90vh] pt-[120px] w-screen flex items-center bg-[url('/layers/test.png')] bg-center bg-cover  overflow-hidden">
        <div className="flex max-w-[1500px] w-[90%] items-center justify-between mx-auto z-[100] pointer-events-none">
          <div className="flex justify-between">
            <div className="max-w-[840px]">
              <H2 className="text-7xl leading-tight font-bold">
                VeenoX First perp DEX with unique Trading Academy
              </H2>
              <FontMedium className="text-font-70 mt-10 max-w-[500px] leading-normal">
                Exchange data, value and tokens with the world(s most secure and
                wideladopted cross-chain messaging protocol
              </FontMedium>
              <button className="mt-7 lg:mt-[50px] h-[40px] lg:h-[50px] px-2 lg:px-3 rounded-full mx-auto text-white text-lg mr-auto cursor-pointer bg-[#836EF9]">
                <Link href="/perp/PERP_BTC_USDC" className="w-full h-full">
                  <div className="flex items-center justify-center text-white font-medium w-full text-sm lg:text-lg h-full px-3 lg:px-4 py-1.5 lg:py-2">
                    Get Started
                  </div>
                </Link>
              </button>
            </div>
            <div className="">
              <img
                src="/assets/logo.png"
                className="w-[550px] min-w-[550px] animate-float"
              />
              <FontMedium className="text-font-70 mt-10 max-w-[500px] leading-normal">
                Powered By Monad and Orderly network
              </FontMedium>
              {/* <H2 className="text-9xl mr-[100px] font-bold">Powered by</H2> */}
            </div>
          </div>
        </div>
      </section>
      <div className="relative overflow-x-hidden">
        <section className="pb-[120px] pt-[160px] relative">
          <div className="max-w-[1500px] w-[90%] mx-auto ">
            <div className="flex items-start justify-between">
              <H2 className="text-7xl leading-tight  font-bold">
                Level up your trading experience on perp DEX
              </H2>

              <img className="w-[800px]" src="/assets/rocket.png" />
            </div>
            <div className="flex justify-between mt-[250px]">
              {insights.map(({ title, icon, description }, i) => (
                <BoxInsight
                  key={i}
                  icon={icon}
                  title={title}
                  description={description}
                  index={i}
                />
              ))}
            </div>{" "}
          </div>{" "}
          {/* <img
            src="/layers/test-3.png"
            className="absolute -top-[40%] object-cover left-0 "
          /> */}
        </section>
        <section className="py-[200px] relative overflow-hidden">
          <div className="max-w-[1500px] w-[90%] mx-auto ">
            <div className="flex justify-between">
              <div className="mb-[300px] max-w-[840px]">
                <H2 className="text-7xl leading-tight font-bold">
                  VeenoX: your protocol's connection to the global digital{" "}
                  <br />
                  economy
                </H2>
                <FontMedium className="text-font-70 mt-10 max-w-[500px] leading-normal">
                  Exchange data, value and tokens with the world(s most secure
                  and wideladopted cross-chain messaging protocol
                </FontMedium>
              </div>
              <div className="">
                <img
                  src="/assets/tokens.png"
                  className="w-[500px] -mt-[100px]"
                />
                <H2 className="text-9xl mr-[100px] font-bold">
                  110<span>+</span>
                </H2>
                <FontLarge>Total pairs available</FontLarge>
                <Link href={""} className="text-font-80">
                  <FontMedium className="mt-10">Explore tokens +</FontMedium>
                </Link>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="rounded-2xl bg-secondary h-[500px] p-10 w-[500px] border border-borderColor-DARK">
                <FontLarge className="font-bold  mb-5 text-white">
                  UI/UX Crafted <br />
                  by traders, for traders
                </FontLarge>
                <FontSmall className="text-lg">
                  Clean and powerful UI/UX crafted by traders, for traders.
                  We've experienced the frustrations across various perpetual
                  platforms firsthand - from clunky interfaces to missing
                  crucial features. That's why we've built a seamless trading
                  experience that addresses all these pain points, giving you
                  the tools you need exactly where and how you expect them.
                </FontSmall>
                <FontSmall className="text-lg mt-10 text-white font-medium">
                  Learn more +
                </FontSmall>
              </div>
              <div className="rounded-2xl bg-secondary h-[500px] p-10 w-[500px] border border-borderColor-DARK">
                <FontLarge className="font-bold  mb-5 text-white">
                  CEX like performance, <br />
                  but better
                </FontLarge>
                <FontSmall className="text-lg">
                  Experience professional-grade trading with advanced features:
                  Live TradingView charts that auto-save your setups (indicators
                  & drawings persist between sessions), and smart order
                  management with multiple take-profit and stop-loss levels.
                  Trade with the precision of a CEX while keeping full control
                  of your assets.
                </FontSmall>
                <FontSmall className="text-lg mt-10 text-white font-medium">
                  Learn more +
                </FontSmall>
              </div>
              <div className="rounded-2xl bg-secondary h-[500px] p-10 w-[500px] border border-borderColor-DARK">
                <FontLarge className="font-bold  mb-5 text-white">
                  UI/UX Crafted <br />
                  by traders, for traders
                </FontLarge>
                <FontSmall className="text-lg">
                  Clean and powerful UI/UX crafted by traders, for traders.
                  We've experienced the frustrations across various perpetual
                  platforms firsthand - from clunky interfaces to missing
                  crucial features. That's why we've built a seamless trading
                  experience that addresses all these pain points, giving you
                  the tools you need exactly where and how you expect them.
                </FontSmall>
                <FontSmall className="text-lg mt-10 text-white font-medium">
                  Learn more +
                </FontSmall>
              </div>
            </div>
          </div>
          <section className="pb-[50px] pt-[200px] relative overflow-hidden">
            <div className="max-w-[1500px] w-[90%] mx-auto ">
              <div className="flex justify-between">
                <div>
                  <FontLarge className="font-bold mt-[40px] text-7xl mb-10 leading-tight text-white">
                    Trade cryptos <br />
                    Across any chain
                  </FontLarge>
                  <FontSmall className="max-w-[700px] text-2xl">
                    Experience seamless perpetual trading across multiple
                    blockchain ecosystems. Our platform supports major chains
                    like Monad, Ethereum, Arbitrum, Sei, Solana, and more. Trade
                    perpetual contracts with precision, speed, and security, all
                    while enjoying the freedom of cross-chain interoperability.
                  </FontSmall>
                  <div className="flex gap-[100px] mt-[100px]">
                    <div className="w-fit ">
                      <H2 className="text-9xl font-bold">9+</H2>
                      <FontLarge>Total chains available</FontLarge>
                      <Link href={""} className="text-font-80">
                        <FontMedium className="mt-10">
                          Explore chains +
                        </FontMedium>
                      </Link>
                    </div>
                    <div className="w-fit mt-[200px]">
                      <H2 className="text-9xl font-bold">10M+</H2>
                      <FontLarge>Volume traded in alpha</FontLarge>
                      <Link href={""} className="text-font-80">
                        <FontMedium className="mt-10">
                          Start trading +
                        </FontMedium>
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="/assets/chains-token.png"
                    className="w-[700px]  mr-10"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* <spline-viewer
          className="absolute"
          url="https://prod.spline.design/ddYqWEvVmvGO3Hhc/scene.splinecode"
        ></spline-viewer> */}
        </section>
        {/* <img
          src="/layers/test-3.png"
          className="absolute  -top-[10%] object-cover -right-[40%] h-[200vh]"
        />*/}
        <img
          src="/layers/test-4.png"
          className="absolute scale-x-[-1] -rotate-45 h-[250vh] -top-[80vh] object-contain -left-[20%]"
        />
      </div>
      <section className="py-[200px] pt-10 relative overflow-hidden">
        <div className="max-w-[1500px] w-[90%] mx-auto ">
          <H2 className="text-7xl leading-tight font-bold text-center mb-[100px]">
            Trading Academy
          </H2>
          <div className="flex gap-10 mb-10">
            <div className="rounded-2xl bg-secondary h-[500px] p-10 w-1/2 border border-borderColor-DARK">
              <img
                height={80}
                width={80}
                src="/assets/chart.png"
                alt={`${""} icon`}
                className="object-cover mb-10 min-h-[80px] w-auto max-h-[80px]"
              />
              <FontLarge className="font-bold  mb-5 text-white">
                UI/UX Crafted <br />
                by traders, for traders
              </FontLarge>
              <FontSmall className="text-lg">
                Clean and powerful UI/UX crafted by traders, for traders. We've
                experienced the frustrations across various perpetual platforms
                firsthand - from clunky interfaces to missing crucial features.
                That's why we've built a seamless trading experience that
                addresses all these pain points, giving you the tools you need
                exactly where and how you expect them.
              </FontSmall>
              <FontSmall className="text-lg mt-10 text-white font-medium">
                Learn more +
              </FontSmall>
            </div>
            <div className="rounded-2xl bg-secondary h-[500px] p-10 w-1/2 border border-borderColor-DARK">
              <img
                height={80}
                width={80}
                src="/assets/chart.png"
                alt={`${""} icon`}
                className="object-cover mb-10 min-h-[80px] w-auto max-h-[80px]"
              />
              <FontLarge className="font-bold  mb-5 text-white">
                UI/UX Crafted <br />
                by traders, for traders
              </FontLarge>
              <FontSmall className="text-lg">
                Clean and powerful UI/UX crafted by traders, for traders. We've
                experienced the frustrations across various perpetual platforms
                firsthand - from clunky interfaces to missing crucial features.
                That's why we've built a seamless trading experience that
                addresses all these pain points, giving you the tools you need
                exactly where and how you expect them.
              </FontSmall>
              <FontSmall className="text-lg mt-10 text-white font-medium">
                Learn more +
              </FontSmall>
            </div>
          </div>
          <div className="rounded-2xl bg-secondary h-[500px] p-10 w-full border border-borderColor-DARK">
            <img
              height={80}
              width={80}
              src="/assets/chart.png"
              alt={`${""} icon`}
              className="object-cover min-h-[80px] mb-10 w-auto max-h-[80px]"
            />
            <FontLarge className="font-bold  mb-5 text-white">
              UI/UX Crafted <br />
              by traders, for traders
            </FontLarge>
            <FontSmall className="text-lg">
              Clean and powerful UI/UX crafted by traders, for traders. We've
              experienced the frustrations across various perpetual platforms
              firsthand - from clunky interfaces to missing crucial features.
              That's why we've built a seamless trading experience that
              addresses all these pain points, giving you the tools you need
              exactly where and how you expect them.
            </FontSmall>
            <FontSmall className="text-lg mt-10 text-white font-medium">
              Learn more +
            </FontSmall>
          </div>
        </div>
      </section>
      <section className="pt-[130px] pb-[90px] relative bg-[url('/layers/test-2.png')] bg-center bg-cover">
        <div className="max-w-[1500px] w-[90%] mx-auto ">
          <div className="flex items-start justify-between">
            <H2 className="max-w-[680px] text-white uppercase">
              Some Stats About VeenoX alpha
            </H2>
            <FontSmall className="max-w-[500px] mt-1.5">
              VeenoX has improved the trading experience of more than 40 traders
              who asked for the best trading platform with CEX like experience
            </FontSmall>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-between mt-[50px] w-[62%] flex-wrap">
              {stats.map(({ tag, value, description }, i) => (
                <BoxStat
                  key={i}
                  value={value}
                  tag={tag}
                  description={description}
                />
              ))}
            </div>{" "}
            <div className="w-[35%] min-w-[400px] mr-10 max-w-[450px] mt-0">
              {/* <Spline
                scene="https://prod.spline.design/FIqOZxbFa1GrmvKD/scene.splinecode"
                width={600}
                height={600}
              /> */}
              <Spline scene="https://prod.spline.design/kA0xD50BYojkl3zj/scene.splinecode" />
              {/* <Image
                src="/assets/exemple.jpeg"
                alt="test image"
                height={300}
                width={300}
                className="object-cover object-center rounded-md h-[400px] w-full"
              /> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

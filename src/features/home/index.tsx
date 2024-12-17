"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { FontLarge, FontMedium, FontSmall, H2 } from "@/components/fonts";
import { insights } from "@/constants";
import Link from "next/link";
import { FC } from "react";
import { BoxInsight } from "./components/insight-box";

const Home: FC = () => {
  return (
    <main>
      <section className="h-[90vh] pt-[120px] w-screen flex items-center bg-[url('/layers/test-co.png')] bg-center bg-cover  overflow-hidden">
        <div className="flex max-w-[1500px] w-[90%] items-center justify-between mx-auto z-[100] pointer-events-none">
          <div className="w-full flex flex-col items-center">
            <H2 className="text-7xl leading-tight text-center font-bold">
              First All-in-One DEX Unifying Crypto & Traditional Markets
            </H2>
            <FontMedium className="text-font-70 text-center mt-10 max-w-[900px] mx-auto leading-normal">
              The first comprehensive perpetual DEX uniting traditional markets
              and DeFi, combining professional trading tools with an innovative
              learning ecosystem for all traders.
            </FontMedium>
            <button className="mt-7 lg:mt-[50px] h-[40px] lg:h-[50px] px-2 lg:px-3 rounded-lg mx-auto text-white font-bold text-lg cursor-pointer bg-[#836EF9]">
              <Link href="/perp/PERP_BTC_USDC" className="w-full h-full">
                <div className="flex items-center justify-center w-full text-sm lg:text-lg h-full px-3 lg:px-4 py-1.5 lg:py-2">
                  Launch Alpha
                </div>
              </Link>
            </button>
          </div>
        </div>
      </section>
      <div className="relative overflow-x-hidden">
        <section className="pb-[120px] pt-[160px] relative">
          <div className="max-w-[1500px] w-[90%] mx-auto ">
            <div className="">
              <H2 className="text-7xl leading-tight  font-bold">
                Level up your trading
              </H2>
              <H2 className="text-7xl ml-[100px] leading-tight text-font-80 font-bold">
                experience on perp DEX
              </H2>
            </div>
            <div className="flex justify-between mt-[100px]">
              {insights.map(({ title, icon, description }, i) => (
                <BoxInsight
                  key={i}
                  icon={icon}
                  title={title}
                  description={description}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="py-[200px] relative overflow-hidden">
          <div className="max-w-[1500px] w-[90%] mx-auto ">
            <div className="flex justify-between">
              <div className="mb-[200px] max-w-[840px]">
                <H2 className="text-7xl leading-tight font-bold">
                  Bringing crypto and traditional markets together, from Bitcoin
                  to Gold and Stock Indices.
                </H2>
                <FontMedium className="text-font-70 mt-10 max-w-[500px] leading-normal">
                  Experience professional-grade trading across all markets while
                  learning from our integrated academy to enhance your skills.
                </FontMedium>
              </div>
              <div className="relative">
                <img
                  src="/assets/tokens.png"
                  className="w-[500px] -mt-[100px]"
                />
                <div className="mr-auto absolute bottom-[18%] -left-[35%]">
                  <H2 className="text-9xl mr-[100px] font-bold">
                    110<span>+</span>
                  </H2>
                  <FontLarge>Total pairs available</FontLarge>
                  <Link href={""} className="text-font-80">
                    <FontMedium className="mt-10">Explore tokens +</FontMedium>
                  </Link>{" "}
                </div>
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
                  Real World Assets <br />
                  Trading
                </FontLarge>
                <FontSmall className="text-lg">
                  VeenoX bridges traditional finance and DeFi through perpetual
                  futures trading on real-world assets. Using Pyth Network's
                  price feeds, traders can access synthetic versions of major
                  commodities (Gold, Oil) and stock indices (S&P 500, CAC 40)
                  while enjoying the benefits of decentralized trading - no KYC,
                  lower fees, and 24/7 market access.
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
                      <FontLarge>Chains available</FontLarge>
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
      <section className="py-[120px] relative overflow-hidden bg-[url('/layers/test-2.png')]">
        <div className="max-w-[1500px] w-[90%] mx-auto ">
          <div className="flex gap-10 justify-between items-center mb-10">
            <div className="rounded-2xl bg-secondary h-[550px] w-[550px] border border-borderColor-DARK">
              <img
                src="/assets/trading-ac.png"
                className="object-cover h-full rounded-2xl"
              />
            </div>

            <div className="w-1/2 max-w-1/2">
              <H2 className="font-bold text-6xl leading-tight mb-8 text-white">
                Learn to trade, earn & competition tiers.
              </H2>
              <FontSmall className="text-xl">
                Our integrated trading academy combines bite-sized lessons with
                hands-on practice. Each completed lesson rewards you with points
                and unlocks new features, helping you progress from beginner to
                pro while earning rewards along the way.
              </FontSmall>
              <div className="flex gap-10 mt-[50px]">
                <div className="w-1/2 border-t-2 py-5 border-borderColor">
                  <FontLarge className="font-bold  mb-3 text-white">
                    Accessible
                  </FontLarge>
                  <FontSmall className="text-lg">
                    An intuitive learning path designed for all levels, from
                    complete beginners to experienced traders wanting to refine
                    their skills.
                  </FontSmall>
                </div>
                <div className="w-1/2  border-t-2 py-5 border-borderColor">
                  <FontLarge className="font-bold  mb-3 text-white">
                    Rewarding
                  </FontLarge>
                  <FontSmall className="text-lg">
                    Earn rewards and unlock features as you progress through the
                    academy. Every lesson completed brings new benefits and
                    opportunities.
                  </FontSmall>
                </div>
              </div>
              <div className="w-full border-t-2 py-5 mt-8 border-borderColor">
                <FontLarge className="font-bold  mb-3 text-white">
                  Community-Driven
                </FontLarge>
                <FontSmall className="text-lg">
                  Join a vibrant community of traders sharing the same journey.
                  Participate in discussions, share insights, and learn from
                  others' experiences while building your trading expertise.
                </FontSmall>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        id="faq"
        className="w-full h-fit flex flex-col items-center bg-[#15171B] py-[50px] lg:py-[150px]"
      >
        <div className="w-[90%] max-w-[1200px]">
          <h2
            className="overflow-hidden block relative lg:whitespace-nowrap
           text-4xl lg:text-5xl font-bold mb-5 lg:mb-10 w-auto text-white"
          >
            Frequently <span className="text-base_color">Asked</span>
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is VeenoX?</AccordionTrigger>
              <AccordionContent>
                VeenoX is a professional-grade DEX running on Orderly Network
                that bridges the gap between traditional and decentralized
                finance. By offering perpetual futures and synthetic RWA
                trading, we solve the main pain points of traditional brokers:
                high fees, and KYC requirements. Through Pyth Network
                integration, traders can access both crypto and traditional
                market assets (stocks, commodities) 24/7 in a synthetic form,
                with significantly lower fees and no geographical restrictions.
                We combine this accessibility with gamification elements, an
                integrated trading academy, and advanced trading features to
                create a comprehensive trading ecosystem.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What makes VeenoX different from other perp DEXs?
              </AccordionTrigger>
              <AccordionContent>
                VeenoX stands out through:
                <ul>
                  <li>
                    - Synthetic RWA trading that enables access to traditional
                    markets without the high fees and restrictions of
                    centralized brokers
                  </li>
                  <li>
                    - Integrated trading academy for skill development, bridging
                    the gap between traditional and crypto trading
                  </li>
                  <li>
                    - Gamified trading experience with ranks and levels that
                    rewards both crypto and RWA trading performance
                  </li>
                  <li>
                    - Trading competitions across all asset classes with
                    performance-based rewards
                  </li>
                  <li>
                    - Professional-grade trading tools comparable to traditional
                    trading platforms
                  </li>
                  <li>
                    - No KYC requirements or geographical restrictions while
                    maintaining institutional-grade execution
                  </li>
                  <li>
                    - Significantly lower fees compared to traditional brokers
                  </li>
                  <li>
                    - Focus on both education and execution for all types of
                    traders
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What can I trade on VeenoX?</AccordionTrigger>
              <AccordionContent>
                Currently, VeenoX offers perpetual futures trading. We are
                expanding to include:
                <ul>
                  <li>
                    - Perpetual futures trading with competitive fees and
                    professional-grade tools
                  </li>
                  <li>
                    - Spot trading for major cryptocurrencies with deep
                    liquidity
                  </li>
                  <li>
                    - Synthetic RWA trading without KYC requirements or
                    geographical restrictions
                  </li>
                  <li>
                    - Comprehensive backtesting capabilities across both crypto
                    and traditional assets
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                {" "}
                How does the trading academy work?
              </AccordionTrigger>
              <AccordionContent>
                Our academy provides a comprehensive educational experience
                where traders progress through structured learning paths,
                starting from basic concepts to advanced trading strategies.
                Traders gain hands-on experience through practical trading
                exercises while their performance is continuously tracked. The
                learning journey is enriched by an achievement-based system that
                rewards progress and mastery. Most importantly, traders can
                practice their skills in a controlled environment, allowing them
                to gain real trading experience without the risk of significant
                losses. Whether you're transitioning from traditional markets or
                just starting your trading journey, our academy ensures you
                develop the skills needed for successful trading across both
                crypto and traditional synthetic assets.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What features are coming next?
              </AccordionTrigger>
              <AccordionContent>
                Our roadmap is focused on expanding VeenoX's capabilities across
                multiple fronts. Soon, we'll be launching synthetic RWA trading
                integration, allowing traders to access traditional markets with
                the same ease as crypto markets. We're developing enhanced
                backtesting tools that will let traders test their strategies
                across both crypto and traditional market conditions. A mobile
                app is in development to ensure traders can manage their
                positions and access all features on the go. For institutional
                traders and algorithmic strategies, we're building advanced API
                access with comprehensive documentation. Additionally, we're
                constantly expanding our educational content to cover both
                crypto and traditional market trading strategies, ensuring our
                traders have all the resources they need to succeed in any
                market condition.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
};

export default Home;

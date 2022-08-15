import { PricingItem } from "./PricingItem"

export const Pricing: React.FC = () => (
  <section className="bg-white h-screen px-6 xl:px-0 pb-20">
    <div className="pt-20 mx-auto container">
      <div className="flex flex-col lg:items-center justify-center w-full">
        <h1 className="font-semibold text-gray text-3xl md:text-4xl">
          The subscription cost
        </h1>
        <p className="mt-2.5 lg:w-1/2 lg:text-center text-2xl text-gray">
          We have several types of subscriptions
        </p>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="pt-8">
          <div className="container mx-auto">
            <div className="flex flex-wrap mb-12 justify-between sm:justify-center -mx-6">
              <PricingItem title={'Basic'} price={5} format={480} quality={'Good'}/>
              <PricingItem title={'Pro'} price={10} format={720} quality={'Better'}/>
              <PricingItem title={'Extra'} price={20} format={1080} quality={'Best'}/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

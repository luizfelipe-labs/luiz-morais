import ExploreCard from "./ExploreCard";

export default function RideForm() {
  return (
    <div className="w-full bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl pt-20 pb-7 font-black">
          Explore what you can do with Uber
        </h2>
        <section className="grid relative grid-cols-3 max-w-full mx-auto gap-4">
          <ExploreCard
            title={"Ride"}
            description={
              "Go anywhere with Uber.Request a \nride, hop in, and go."
            }
            image={"/luiz-morais/images/Sedan-160-temp.png"}
            textButton={"Details"}
          />

          <ExploreCard
            title={"Reserve"}
            description={
              "Reserve your ride in advance so you\n can relax on the day of your trip"
            }
            image={"/luiz-morais/images/Calendar-351-temp.png"}
            textButton={"Details"}
          />

          <ExploreCard
            title={"Moto"}
            description={
              "Get offordable motorbike rides in\n minutes at your doorstep."
            }
            image={"/luiz-morais/images/Motorcycle-081-0.png"}
            textButton={"Details"}
          />

          <ExploreCard
            title={"Courier"}
            description={
              "Uber makes same-day item delivery\n easier than ever."
            }
            image={"/luiz-morais/images/Courier.png"}
            textButton={"Details"}
          />

          <ExploreCard
            title={"Aiport"}
            description={
              "Request a ride or from the aiport\nwith room for your luggage."
            }
            image={"/luiz-morais/images/airport-nava-tile.png"}
            textButton={"Details"}
          />
          
          <ExploreCard title={"Teens"} description={"Teen account offer top-rated\ndrivers and built-in safety tools."} image={"/luiz-morais/images/PersonTeen-252-temp.png"} textButton={"Details"}/>
          
        </section>
      </div>
    </div>
  );
}

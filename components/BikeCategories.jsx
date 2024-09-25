"use client";
import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import Bike from "./Bike";

const BikeCategories = ({ bikes }) => {
  const [category, setCategory] = useState("all");
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [price, setPrice] = useState(900);

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col">
          {/* sidebar */}
          <aside className="bg-yellow-200 w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
            <RadioGroup defaultValue="all" className="flex flex-col gap-6 mb-12">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <label htmlFor="all">All</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="road" id="road" />
                <label htmlFor="road">Road</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="professionnal" id="professionnal" />
                <label htmlFor="professionnal">Professionnal</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="extreme" id="extreme" />
                <label htmlFor="extreme">extreme</label>
              </div>
            </RadioGroup>
          </aside>
          {/* bike list */}
          <div className="bg-blue-300 w-full xl:w-[1050px] ml-auto">bike list</div>
        </div>
      </div>
    </section>
  );
};

export default BikeCategories;

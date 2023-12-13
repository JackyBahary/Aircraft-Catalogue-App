"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { AircraftProps } from "@/types";
import { AircraftDetails, CustomButton } from ".";
import { calculateAircraftRent } from "@/utils";

interface AircraftCardProps {
  aircraft: AircraftProps;
}

const AircraftCard = ({ aircraft }: AircraftCardProps) => {
  const {
    manufacturer,
    model,
    engine_type,
    max_speed_knots,
    ceiling_ft,
    gross_weight_lbs,
    length_ft,
    height_ft,
    wing_span_ft,
    range_nautical_miles,
  } = aircraft;

  const [isOpen, setIsOpen] = useState(false);

  const aircraftRent = calculateAircraftRent(range_nautical_miles);

  return (
    <div className="aircraft-card group">
      <div className="aircraft-card__content">
        <h2 className="aircraft-card__content-title">
          {manufacturer} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {aircraftRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="Aircraft Model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {range_nautical_miles < 5000
                ? "Short-Haul"
                : range_nautical_miles < 7500
                ? "Medium-Haul"
                : "Long-Haul"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{engine_type}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{max_speed_knots} knots</p>
          </div>
        </div>

        <div className="aircraft-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => {
              setIsOpen(true);
            }}
          />
        </div>
      </div>

      <AircraftDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        aircraft={aircraft}
      />
    </div>
  );
};

export default AircraftCard;

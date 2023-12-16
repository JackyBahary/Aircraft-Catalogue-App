import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface AircraftProps {
    manufacturer: string;
    model: string;
    engine_type: string;
    max_speed_knots: number;
    ceiling_ft: number;
    gross_weight_lbs: number;
    length_ft: number;
    height_ft: number;
    wing_span_ft: number;
    range_nautical_miles: number;
}

export interface FilterProps {
    manufacturer: string;
    model: string;
    limit: number;
    engine: string;
    range: number;
}

export interface OptionProps {
    title: string;
    value: string;
}
export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

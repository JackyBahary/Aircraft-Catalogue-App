import { AircraftProps, FilterProps } from "@/types";

export async function fetchAircrafts(filters: FilterProps) {
    const {manufacturer, model, limit, engine, range} = filters;
    const headers = {
		'X-RapidAPI-Key': '9fb5e09423msh782557aacae8620p15a2a5jsn8719f51735fb',
		'X-RapidAPI-Host': 'aircraft-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch (`https://aircraft-by-api-ninjas.p.rapidapi.com/v1/aircraft?manufacturer=${manufacturer}&model=${model}&engine_type=${engine}&min_range=${range}&limit=${limit}`, {headers: headers});

    const result = await response.json();

    return result;
}

export const calculateAircraftRent = (range: number) => {
    const baseRatePerDay = 50;

    const rentalRatePerDay = baseRatePerDay * range;

    return rentalRatePerDay.toLocaleString();
}

// export const generateAircraftImageUrl = (aircraft: AircraftProps, angle?: string) => {

// } NO API available to get Aircraft Images
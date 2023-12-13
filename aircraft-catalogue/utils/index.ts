export async function fetchAircrafts() {
    const headers = {
		'X-RapidAPI-Key': '9fb5e09423msh782557aacae8620p15a2a5jsn8719f51735fb',
		'X-RapidAPI-Host': 'aircraft-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch ('https://aircraft-by-api-ninjas.p.rapidapi.com/v1/aircraft?manufacturer=Airbus&limit=30', {headers: headers});

    const result = await response.json();

    return result;
}

export const calculateAircraftRent = (range: number) => {
    const baseRatePerDay = 50;

    const rentalRatePerDay = baseRatePerDay * range;

    return rentalRatePerDay.toLocaleString();
}
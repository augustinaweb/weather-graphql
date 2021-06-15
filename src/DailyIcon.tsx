import React from 'react';
import sunny from './icons/01.png';
import sclouds from './icons/02.png';
import mclouds from './icons/03.png';
import lclouds from './icons/04.png';
import rainy from './icons/09.png';
import drizzle from './icons/10.png';
import stormy from './icons/11.png';
import snowy from './icons/13.png';
import misty from './icons/50.png';
import windIcon from './icons/wind.png';
import {
	CityByName_getCityByName_weather_summary as Summary,
	CityByName_getCityByName_weather_temperature as Temperature,
	CityByName_getCityByName_weather_wind as Wind
} from './queries/types/CityByName';

interface Props {
	summary: Summary;
	wind: Wind;
	temperature: Temperature;
}

type RequiredNotNull<T> = {
	[P in keyof T]: NonNullable<T[P]>;
};

//function checkNonNull<T extends Record<string, unknown>>(
//	obj: T
//): RequiredNotNull<T> | null {
//	if (
//		Object.values(obj).find(
//			(value) => value === null || value === undefined
//		)
//	)
//		return null;
//	return obj as RequiredNotNull<T>;
//}

const checkNonNull = <T extends any>(obj: T): obj is RequiredNotNull<T> =>
	!Object.values(obj as Record<string, unknown>).find(
		(value) => value === null || value === undefined
	);

export const DailyIcon: React.FC<Props> = ({
	summary,
	temperature,
	wind
}: Props) => {
	const icons = {
		'01': sunny,
		'02': sclouds,
		'03': mclouds,
		'04': lclouds,
		'09': rainy,
		'10': drizzle,
		'11': stormy,
		'13': snowy,
		'50': misty
	};

	if (!checkNonNull(summary)) {
		return null;
		//throw new Error
	}

	const index = summary?.icon ? summary.icon.slice(0, -1) : '01';
	const dateCalc = new Date().toLocaleDateString();
	const temp = temperature?.actual
		? Math.round(temperature?.actual)
		: temperature?.actual;
	const windSpeed = wind?.speed ? Math.round(wind.speed) : 'undefined';

	return (
		<div>
			<div className="daily-icon">
				<p>{dateCalc}</p>
				<div className="icon">
					<img src={icons[index]} alt="weather icon" />
				</div>
				<div className="description">
					<p>The skies promise</p>
					<p>{summary?.description}</p>
				</div>
				<div className="temperature">
					<p>{temp} &deg;C</p>
				</div>
				<div className="data wind">
					<img src={windIcon} alt="wind_icon"></img>
					<p>{windSpeed} m/s</p>
				</div>
			</div>
		</div>
	);
};

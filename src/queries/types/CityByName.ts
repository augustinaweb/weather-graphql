/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CityByName
// ====================================================

export interface CityByName_getCityByName_weather_summary {
  readonly __typename: "Summary";
  readonly description: string | null;
  readonly title: string | null;
  readonly icon: string | null;
}

export interface CityByName_getCityByName_weather_temperature {
  readonly __typename: "Temperature";
  readonly actual: number | null;
}

export interface CityByName_getCityByName_weather_wind {
  readonly __typename: "Wind";
  readonly speed: number | null;
}

export interface CityByName_getCityByName_weather {
  readonly __typename: "Weather";
  readonly summary: CityByName_getCityByName_weather_summary | null;
  readonly temperature: CityByName_getCityByName_weather_temperature | null;
  readonly wind: CityByName_getCityByName_weather_wind | null;
}

export interface CityByName_getCityByName {
  readonly __typename: "City";
  readonly weather: CityByName_getCityByName_weather | null;
}

export interface CityByName {
  readonly getCityByName: CityByName_getCityByName | null;
}

export interface CityByNameVariables {
  readonly name: string;
}

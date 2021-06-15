module.exports = {
	client: {
		service: {
			name: 'WeatherGQL',
			url: 'https://graphql-weather-api.herokuapp.com/'
		},
		includes: ['./src/queries/*.ts']
	}
};

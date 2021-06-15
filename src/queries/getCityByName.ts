import { gql } from '@apollo/client';

export const queryWithVariable = gql`
	query CityByName($name: String!) {
		getCityByName(name: $name) {
			weather {
				summary {
					description
					title
					icon
				}
				temperature {
					actual
				}
				wind {
					speed
				}
			}
		}
	}
`;

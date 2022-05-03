import ReactCountryFlag from 'react-country-flag';
import { CountryFlagProps } from '../types';

/**
 * Dynamic create country flag
 * @param {String} country
 * @param {Object} registerIcons
 * @see https://www.npmjs.com/package/react-country-flag
 */
const createCountryFlag = ({
  countryCode,
  style,
  ...props
}: CountryFlagProps) => {
  return (
    <ReactCountryFlag svg countryCode={countryCode} style={style} {...props} />
  );
};

export default createCountryFlag;

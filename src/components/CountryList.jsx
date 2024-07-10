import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem.jsx";
import { useCities } from "../contexts/CitiesContext.jsx";

function CountryList() {
  const {cities} = useCities();
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  // console.log(cities)
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}
export default CountryList;

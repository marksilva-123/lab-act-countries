import { useParams, useNavigate } from "react-router";
import COUNTRIES from "../data/countries";

const CountryDetailPage = () => {
  const { countryCode } = useParams();
  const navigate = useNavigate();

  const country = COUNTRIES.find(
    (c) => c.code === countryCode.toUpperCase()
  );

  const handleRandom = () => {
    const others = COUNTRIES.filter(
      (c) => c.code !== country.code
    );

    const random =
      others[Math.floor(Math.random() * others.length)];

    navigate(`/countries/${random.code}`);
  };

  return (
    <div className="max-w-md mx-auto card bg-base-100 shadow p-6 text-center space-y-3">
      <div className="text-8xl">{country.flag}</div>

      <h1 className="text-3xl font-bold">
        {country.name}
      </h1>

      <p className="opacity-70">
        Capital: {country.capital}
      </p>

      <div className="flex justify-center gap-2">
        <span className="badge badge-primary">
          {country.region}
        </span>

        <span className="badge">
          {country.population.toLocaleString()} people
        </span>
      </div>

      <div className="flex gap-2 justify-center pt-2">
        <button
          className="btn btn-ghost"
          onClick={() => navigate(-1)}
        >
          Back
        </button>

        <button
          className="btn btn-primary"
          onClick={handleRandom}
        >
          Random Country
        </button>
      </div>
    </div>
  );
};

export default CountryDetailPage;

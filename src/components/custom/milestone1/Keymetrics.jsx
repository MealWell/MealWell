const Keymetrics = () => {
  return (
    <div className="mt-5">
      <h1 className="mb-5 text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Key Metrics
      </h1>
      <div className="text-xl text-justify">
        <ul className="my-3 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Rata de Retenție a Clienților</strong>
            <br />
            <span className="text-gray-500">
              Procentul de clienți care continuă să folosească MealWell pe o
              perioadă mai lungă.
            </span>
          </li>
          <li>
            <strong>Rata de Creștere a Abonamentelor</strong>
            <br />
            <span className="text-gray-500">
              Creșterea lunară a numărului de abonați
            </span>
          </li>
          <li>
            <strong>Rata de Creștere a Abonamentelor</strong>
            <br />
            <span className="text-gray-500">
              Creșterea lunară a numărului de abonați
            </span>
          </li>
          <li>
            <strong>Rata de Conversie</strong>
            <br />
            <span className="text-gray-500">
              Procentul de vizitatori ai site-ului care devin clienți plătitori
            </span>
          </li>
          <li>
            <strong>Valoarea Medie a Comenzilor</strong>
            <br />
            <span className="text-gray-500">
              Suma medie cheltuită de fiecare client per comandă
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Keymetrics;

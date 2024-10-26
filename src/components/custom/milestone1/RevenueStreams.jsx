const RevenueStreams = () => {
  return (
    <div className="mt-5">
      <h1 className="mb-5 text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Venituri preconizate
      </h1>
      <div className="text-xl text-justify">
        <ul className="my-3 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Abonamente pentru Planuri de Mese</strong>
            <br />
            <span className="text-gray-500">
              Venituri din abonamentele lunare/săptămânale pentru planuri de
              mese.
            </span>
          </li>
          <li>
            <strong>Taxă de Livrare</strong>
            <br />
            <span className="text-gray-500">
              Taxe suplimentare pentru opțiunile de livrare la domiciliu sau
              livrare rapidă.
            </span>
          </li>
          <li>
            <strong>Personalizare Meniu</strong>
            <br />
            <span className="text-gray-500">
              Taxe adiționale pentru personalizări detaliate, cum ar fi
              excluderea anumitor alergeni, ingrediente speciale, sau calcul
              caloric precis.
            </span>
          </li>
          <li>
            <strong>Produse Extra și Suplimente</strong>
            <br />
            <span className="text-gray-500">
              Venituri din vânzarea produselor extra, precum gustări sănătoase,
              băuturi proteice, suplimente, și alimente specifice pentru diete.
            </span>
          </li>
          <li>
            <strong>Parteneriate și Colaborări</strong>
            <br />
            <span className="text-gray-500">
              Venituri din parteneriate cu branduri de fitness, aplicații de
              sănătate sau programe corporative pentru abonamente de masă la
              preț redus.
            </span>
          </li>
          <li>
            <strong>Publicitate și Sponsorizări</strong>
            <br />
            <span className="text-gray-500">
              Venituri din publicitate pe platformă sau sponsorizarea unor
              campanii pentru produse compatibile cu misiunea MealWell.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RevenueStreams;

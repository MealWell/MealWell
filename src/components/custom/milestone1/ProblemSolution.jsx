import { GiMeal } from "react-icons/gi";
import { MdOutlineDeliveryDining } from "react-icons/md";

const ProblemSolution = () => {
  return (
    <div className="mt-5">
      <h1 className="mb-5 text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Soluția propusă
      </h1>
      <div className="text-xl text-justify">
        <p>
          Aplicatia noastră simplifică alimentația oferind mese personalizate în
          funcție de obiectivele utilizatorului (menținere, pierdere în greutate
          sau creștere în greutate). Utilizatorii aleg mesele preferate, iar
          aplicația creează un plan variat și delicios, cu calculele necesare de
          calorii și nutrienți. Totul este adaptat preferințelor personale,
          eliminând stresul și economisind timp, oferind, în esență, un bucătar
          și un nutriționist la un click distanță.
        </p>
        <div className="flex mt-5">
          <div>
            <h2 className="font-bold">Abonamente personalizate:</h2>
            <ul className="my-3 ml-6 list-disc [&>li]:mt-2 ps-8">
              <li>
                <strong>Planuri bogate în proteine:</strong> Destinate
                persoanelor care doresc să câștige masă musculară sau care
                practică sporturi.
              </li>
              <li>
                <strong>Planuri dietetice:</strong> Axate pe pierderea în
                greutate, cu porții controlate și ingrediente sănătoase.
              </li>
              <li>
                <strong>Planuri vegetariene sau vegane:</strong> Ideal pentru
                cei care doresc să adopte o dietă pe bază de plante.
              </li>
              <li>
                <strong>Planuri fără gluten:</strong> Pentru cei cu intoleranțe
                sau alergii.
              </li>
              <li>
                <strong>Planuri tradiționale:</strong> Oferind mese bazate pe
                rețete locale și tradiționale.
              </li>
            </ul>

            <h2 className="font-bold">Opțiuni de planificare săptămânală:</h2>
            <p className="my-3 ml-6 mt-2 ps-4">
              <strong>Clienții</strong> pot alege să primească mese pentru o
              anumită perioadă (de exemplu, 3, 5 sau 7 zile pe săptămână),
              adaptându-se astfel la programul lor personal.
            </p>
          </div>
          <div className="hidden xl:flex items-center w-1/2 justify-center ps-4">
            <GiMeal className="text-[15rem] text-blue-600" />
          </div>
        </div>

        <div className="flex mt-5">
          <div className="hidden xl:flex items-center w-1/2 justify-center pe-4">
            <MdOutlineDeliveryDining className="text-[15rem] text-blue-600" />
          </div>
          <div>
            <h2 className="font-bold">Livrare la domiciliu:</h2>
            <p className="my-3 ml-6 mt-2">
              <strong>Comoditate maximă:</strong> Oferim livrare la ușa
              clientului, eliminând astfel efortul de a merge la cumpărături sau
              de a pregăti mesele. Acest serviciu va avea un cost suplimentar,
              dar va fi o opțiune convenabilă pentru clienți.
            </p>

            <h2 className="font-bold">
              Interfață prietenoasă și ușor de utilizat:
            </h2>
            <p className="my-3 ml-6 mt-2">
              <strong>Un site web</strong> care să permită utilizatorilor să-și
              gestioneze abonamentele, să selecteze planurile alimentare dorite,
              să facă modificări sau să comande mese suplimentare.
            </p>
          </div>
        </div>
        <h2 className="font-bold">Concluzie</h2>
        <p className="my-3 ml-6 mt-2">
          <strong>MealWell</strong> nu este doar o aplicație de livrare de mese,
          ci o soluție completă pentru un stil de viață sănătos, adresându-se
          celor care au un program încărcat, dar care doresc să își mențină
          sănătatea și forma fizică. Prin personalizare, comoditate și suport
          nutrițional, ne propunem să facem alimentația sănătoasă accesibilă
          pentru toți.
        </p>
      </div>
    </div>
  );
};

export default ProblemSolution;

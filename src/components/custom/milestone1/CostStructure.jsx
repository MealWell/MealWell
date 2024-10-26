const CostStructure = () => {
  return (
    <div className="mt-5">
      <h1 className="mb-5 text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Costuri preconizate
      </h1>
      <div className="text-xl text-justify">
        <ul className="my-3 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Costuri de Aprovizionare și Ingrediente</strong>
            <br />
            <span className="text-gray-500">
              Achiziția de materii prime, ingrediente proaspete și materiale de
              ambalare.
            </span>
          </li>
          <li>
            <strong>Costuri de Preparare</strong>
            <br />
            <span className="text-gray-500">
              Costurile cu forța de muncă pentru bucătari și personalul din
              bucătărie, echipamente de gătit, și mentenanță.
            </span>
          </li>
          <li>
            <strong>Costuri de Livrare și Logistică</strong>
            <br />
            <span className="text-gray-500">
              Transport, ambalaje termice pentru menținerea prospețimii,
              combustibil, salarii pentru șoferi sau costurile de colaborare cu
              servicii de livrare.
            </span>
          </li>
          <li>
            <strong>Costuri Tehnologice</strong>
            <br />
            <span className="text-gray-500">
              Dezvoltarea și mentenanța site-ului și a aplicațiilor, hosting,
              integrarea cu metode de plată, funcționalități de personalizare a
              meniului și optimizări UI/UX.
            </span>
          </li>
          <li>
            <strong>Costuri de Marketing și Publicitate</strong>
            <br />
            <span className="text-gray-500">
              Campanii de marketing digital, SEO, conținut social media,
              promovări și discounturi, materiale de branding și influenceri.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CostStructure;

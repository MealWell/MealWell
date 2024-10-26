const CustomerDiscoveryPlan = () => {
  return (
    <div>
      <h1 className="mb-5 text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Plan de Descoperire a Clienților
      </h1>
      <div className="text-xl text-justify space-y-2">
        <p>
          Planul nostru pentru descoperirea clienților se va concentra pe
          înțelegerea nevoilor și preferințelor potențialilor utilizatori ai
          aplicației. Vrem să identificăm principalele provocări legate de
          alimentația sănătoasă în rândul tinerilor și profesioniștilor ocupați,
          pentru a adapta soluția noastră la cerințele lor.
        </p>
        <p>Pentru a realiza acest lucru, vom urma acești pași:</p>
        <ul className="my-3 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong className="me-2">Interviuri cu utilizatorii:</strong>
            <span>
              Vom organiza interviuri individuale și focus grupuri cu potențiali
              clienți pentru a discuta despre obiceiurile alimentare,
              provocările întâmpinate și preferințele lor în ceea ce privește
              mesele.
            </span>
          </li>
          <li>
            <strong className="me-2">Chestionare online: </strong>
            <span>
              Vom distribui chestionare pentru a colecta date despre obiceiurile
              alimentare, nevoile de livrare și așteptările utilizatorilor față
              de aplicație.
            </span>
          </li>
          <li>
            <strong className="me-2">Observație directă:</strong>
            <span>
              Vom analiza comportamentele alimentare ale studenților și
              angajaților în medii sociale, precum cafenele și campusuri, pentru
              a înțelege mai bine alegerile lor alimentare.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomerDiscoveryPlan;

const Competition = () => {
  return (
    <div className="mt-5">
      <h1 className="mb-5 text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Competiție
      </h1>
      <div className="flex flex-col xl:flex-row">
        <div className="text-xl text-justify">
          <h2 className="font-bold">Competitor: LifeBox</h2>
          <p>
            LifeBox se poziționează ca un furnizor de servicii de livrare a
            meselor sănătoase, având mai multe meniuri concepute de
            nutriționiști pentru a satisface nevoile diverse ale consumatorilor.
            Iată câteva dintre caracteristicile cheie care îi definesc oferta:
          </p>
          <ul className="my-3 list-disc [&>li]:mt-2 ps-8">
            <li>
              <strong>Meniuri Nutriționale:</strong> LifeBox oferă o gamă
              variată de meniuri, fiecare dintre ele fiind întocmit de
              specialiști în nutriție, asigurându-se că clienții beneficiază de
              mese echilibrate și sănătoase.
            </li>
            <li>
              <strong>Interfață Prietenoasă:</strong> Platforma LifeBox se
              remarcă printr-un design user-friendly, care facilitează navigarea
              și selecția opțiunilor de masă, astfel încât utilizatorii pot
              alege cu ușurință mesele dorite.
            </li>
            <li>
              <strong>Flexibilitate în Livrare:</strong> Clienții pot selecta
              zilele în care doresc să primească livrările, oferind astfel un
              grad înalt de personalizare și confort.
            </li>
            <li>
              <strong>Livrare Zilnică:</strong> LifeBox se angajează să livreze
              mese proaspete în fiecare zi, garantând astfel că utilizatorii au
              acces constant la mâncare sănătoasă.
            </li>
            <li>
              <strong>Oferte Promoționale:</strong> Pentru a atrage și a păstra
              clienții, LifeBox oferă diverse oferte promoționale, permițând
              utilizatorilor să beneficieze de discounturi sau mese gratuite.
            </li>
          </ul>
        </div>
        <div className="xl:ml-4 flex items-center">
          <img src="./competitor/lifebox.png" />
        </div>
      </div>
    </div>
  );
};

export default Competition;

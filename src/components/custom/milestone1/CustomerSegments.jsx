import CustomerSegment from "./CustomerSegment";
import {
  FaBook,
  FaBriefcase,
  FaCarrot,
  FaUsers,
  FaDumbbell,
  FaUserAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

const segmentsInfo = [
  {
    segment: "Studenți",
    descrieri: [
      "Tineri care au un program academic solicitant.",
      "Caută opțiuni rapide și sănătoase pentru mese, având un buget limitat.",
      "Interesați de livrarea de mese care să le economisească timp.",
    ],
    icon: FaBook,
  },
  {
    segment: "Angajați cu program încărcat",
    descrieri: [
      "Profesioniști din diferite domenii (corporate, tehnologie, servicii) care lucrează ore lungi.",
      "Caută soluții convenabile pentru a evita mesele nesănătoase.",
      "Pot beneficia de planuri de masă personalizate care să se potrivească programului lor.",
    ],
    icon: FaBriefcase,
  },
  {
    segment: "Persoane cu obiective specifice de alimentație",
    descrieri: [
      "Cei care doresc să slăbească, să câștige în greutate sau să mențină o dietă specifică.",
      "Necesită mese planificate în conformitate cu regimul lor alimentar.",
      "Vor căuta opțiuni nutritive și personalizate.",
    ],
    icon: FaCarrot,
  },
  {
    segment: "Familie ocupată",
    descrieri: [
      "Familii cu copii care au un stil de viață aglomerat.",
      "Caută soluții de mese sănătoase care să satisfacă gusturile diferitelor vârste.",
      "Interesați de planuri care includ mese pentru toți membrii familiei.",
    ],
    icon: FaUsers,
  },
  {
    segment: "Sportivi și persoane active",
    descrieri: [
      "Cei care practică sporturi și au nevoie de o alimentație care să susțină performanța.",
      "Caută mese bogate în proteine și nutrienți specifici.",
      "Ar putea dori opțiuni de mese pre și post-antrenament.",
    ],
    icon: FaDumbbell,
  },
  {
    segment: "Persoane cu restricții dietetice",
    descrieri: [
      "Clienți cu alergii alimentare sau intoleranțe (ex: gluten, lactoză).",
      "Caută opțiuni personalizate care să evite ingredientele problematice.",
      "Interesați de mese sănătoase și sigure.",
    ],
    icon: FaExclamationTriangle,
  },
];

const CustomerSegments = () => {
  return (
    <div>
      <h1 className="mb-5 text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Potențiali clienți
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
        {segmentsInfo.map((segment) => {
          return <CustomerSegment key={segment.segment} segment={segment} />;
        })}
      </div>
    </div>
  );
};

export default CustomerSegments;

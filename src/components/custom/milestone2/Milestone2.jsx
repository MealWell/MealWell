import CustomerDiscoveryPlan from "./CustomerDiscoveryPlan";
import IdentifyingProblem from "./IdentifyingProblem";
import Solution from "./Solution";
import Interviews from "@/components/custom/milestone2/Interviews.jsx";

const Milestone2 = () => {
  return (
    <div className="space-y-6">
      <IdentifyingProblem />
      <Solution />
      <CustomerDiscoveryPlan />
      <Interviews />
    </div>
  );
};

export default Milestone2;

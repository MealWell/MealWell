import Conclusions from "./Conclusions";
import CustomerDiscoveryPlan from "./CustomerDiscoveryPlan";
import CustomerValidation from "./CustomerValidation";
import DetailedCustomerDiscoveryPlan from "./DetailedCustomerDiscoveryPlan";
import IdentifyingProblem from "./IdentifyingProblem";
import Solution from "./Solution";
import Interviews from "@/components/custom/milestone2/Interviews.jsx";

const Milestone2 = () => {
  return (
    <div className="space-y-6">
      <IdentifyingProblem />
      <Solution />
      <CustomerDiscoveryPlan />
      <DetailedCustomerDiscoveryPlan />
      <Interviews />
      <Conclusions />
      <CustomerValidation />
    </div>
  );
};

export default Milestone2;

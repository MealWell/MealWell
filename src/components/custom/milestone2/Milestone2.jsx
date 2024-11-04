import Conclusions from "./Conclusions";
import CustomerDiscoveryPlan from "./CustomerDiscoveryPlan";
import CustomerValidation from "./CustomerValidation";
import DetailedCustomerDiscoveryPlan from "./DetailedCustomerDiscoveryPlan";
import IdentifyingProblem from "./IdentifyingProblem";
import Solution from "./Solution";

const Milestone2 = () => {
  return (
    <div className="space-y-6">
      <IdentifyingProblem />
      <Solution />
      <CustomerDiscoveryPlan />
      <DetailedCustomerDiscoveryPlan />
      <Conclusions />
      <CustomerValidation />
    </div>
  );
};

export default Milestone2;

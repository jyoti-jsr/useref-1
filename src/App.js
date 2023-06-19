import "./styles.css";
import MutableValue from "./components/MutableValues";
import DifferenceBetweenUseRefAndState from "./components/DifferenceBetweenUseRefAndState";
import ImplimentingStopWatch from "./components/ImplimentingStopWatch";
export default function App() {
  return (
    <div className="App">
      <MutableValue />
      <DifferenceBetweenUseRefAndState />
      <ImplimentingStopWatch />
    </div>
  );
}

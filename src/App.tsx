import { useEffect, useSyncExternalStore } from "react";
import "./App.css";
import { bodiesSubscribe, getBodiesSnapshot, updateBodies } from "./logic/CelestialBodies";

export default function App() {
  const bodies = useSyncExternalStore(bodiesSubscribe, getBodiesSnapshot);

  useEffect(() => {
    console.log(bodies);
  }, [bodies]);

  return <button onClick={() => updateBodies()}>Click</button>;
}

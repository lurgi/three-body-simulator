import { useMediaQuery } from "./hooks/useMediaQuery";
import Sidebar from "./Sidebar";
import Simulator from "./Simulator";

export default function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <main className={`${isMobile ? "w-full" : "w-[calc(100%-288px)]"} h-full"`}>
        <Simulator />
      </main>
    </div>
  );
}

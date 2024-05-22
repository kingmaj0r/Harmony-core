import App from "./index"
import { createRoot } from "react-dom/client";

if (typeof document !== 'undefined') {
    createRoot(document.getElementById("root")!).render(<App />);
}
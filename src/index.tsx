import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import YAML from "js-yaml";

interface Service {
  host: string;
  port: number;
}

interface Config {
  app: {
    host: string;
    frontend: Service;
    backend: Service;
  };
  database: Service;
}

const App: React.FC = () => {
  const [frontendStatus, setFrontendStatus] = useState<string>("");
  const [backendStatus, setBackendStatus] = useState<string>("");
  const [databaseStatus, setDatabaseStatus] = useState<string>("");
  const [config, setConfig] = useState<Config | null>(null);

  useEffect(() => {
    const updateStatus = async () => {
      const config = await loadConfig();
      setConfig(config);

      const frontendStatus = await pingService(config.app.frontend, "app");
      const backendStatus = await pingService(config.app.backend, "app");
      const databaseStatus = await pingService(config.database, "database");

      setFrontendStatus(frontendStatus);
      setBackendStatus(backendStatus);
      setDatabaseStatus(databaseStatus);
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  async function loadConfig(): Promise<Config> {
    const response = await axios.get("/config.yml");
    const config = YAML.load(response.data) as Config;
    return config;
  }

  async function pingService(service: Service, serviceType: string): Promise<string> {
    try {
      const host = serviceType === "app" ? config?.app.host : config?.database.host;
      const response = await axios.get(`http://${host}:${service.port}`);
      return response.status === 200 ? "online" : "offline";
    } catch {
      return "offline";
    }
  }

  if (!config) {
    return (
      <div className="flex items-center justify-center min-h-screen flex-col">
        <img src="https://cdn.jsdelivr.net/npm/@kingmaj0r/harmony-core@latest/dist/assets/img/background.jpg" className="absolute h-screen w-screen -z-10" />
        <div className="flex flex-col justify-center items-center max-w-xl p-12 bg-slate-800 rounded-2xl shadow-md bg-opacity-70 backdrop-filter backdrop-blur">
          <a href="https://github.com/KingMaj0r/harmony">
            <img src="assets/img/logo.png" className="h-24" />
          </a>
          <div className="text-white text-wrap">config.yml does not exist. Please create a config.yml and specify the values or get a example config.yml at <a className="text-blue-500" href="https://github.com/KingMaj0r/harmony">the harmony repo</a>.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <img src="https://cdn.jsdelivr.net/npm/@kingmaj0r/harmony-core@latest/dist/assets/img/background.jpg" className="absolute h-screen w-screen -z-10" />
      <div className="flex flex-col justify-center items-center max-w-xl p-12 bg-slate-800 rounded-2xl shadow-md bg-opacity-70 backdrop-filter backdrop-blur">
        <div className="flex justify-center items-center">
          <a href="https://github.com/KingMaj0r/harmony">
            <img src="https://cdn.jsdelivr.net/npm/@kingmaj0r/harmony-core@latest/dist/assets/img/favicon.png" className="h-24" />
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <a href="https://vitejs.dev">
            <svg viewBox="0 0 410 404" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-24 w-auto">
              <path
                d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z"
                fill="url(#paint1_linear)"
              />
              <defs>
                <linearGradient id="paint0_linear" x1={6.00017} y1={32.9999} x2={235} y2={344} gradientUnits="userSpaceOnUse">
                  <stop stopColor="#41D1FF" />
                  <stop offset={1} stopColor="#BD34FE" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1={194.651} y1={8.81818} x2={236.076} y2={292.989} gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFEA83" />
                  <stop offset={0.0833333} stopColor="#FFDD35" />
                  <stop offset={1} stopColor="#FFA800" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </div>
        <p className="text-lg text-center text-white mb-8">Harmony frontend working!</p>
        <p className="text-center text-white mb-2">
          This page can only be accessed if the app environment is set to development. Otherwise this is inaccessible to the public.
        </p>
        <p className="text-center text-gray-500 mb-2">STATS</p>
        <div className="flex justify-center">
          <table className="w-full text-sm shadow-sm">
            <tbody>
              <tr className="frontend-status">
                <td className="text-gray-400">Frontend</td>
                <td className="text-blue-500">{config.app.host  + ":" + config.app.frontend.port}</td>
                <td className={`text-${frontendStatus === "online" ? "green" : "red"}-500`}>{frontendStatus}</td>
              </tr>
              <tr>
                <td className="text-gray-400">Backend</td>
                <td className="text-blue-500">{config.app.host  + ":" + config.app.backend.port}</td>
                <td className={`text-${backendStatus === "online" ? "green" : "red"}-500`}>{backendStatus}</td>
              </tr>
              <tr>
                <td className="text-gray-400">Database</td>
                <td className="text-blue-500">{config.database.host  + ":" + config.database.port}</td>
                <td className={`text-${databaseStatus === "online" ? "green" : "red"}-500`}>{databaseStatus}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
import { useEffect, useState } from "react";
import axios from "axios";
import background from "./assets/img/background.png";
import logo from "./assets/img/logo.png";
import favicon from "./assets/img/favicon.png";
//import * as mysql from "mysql2/promise";

import "./assets/css/tailwind.css";

interface Service {
  host: string;
  port: number;
}

interface ServiceEnds {
  port: number;
  protocol: string;
}

interface Config {
  app: {
    environment: string;
    host: string;
    frontend: ServiceEnds;
    backend: ServiceEnds;
  };
  database: {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
}

function App() {
  const [frontendStatus, setFrontendStatus] = useState<string>("");
  const [backendStatus, setBackendStatus] = useState<string>("");
  const [databaseStatus, setDatabaseStatus] = useState<string>("");
  const [config, setConfig] = useState<Config | null>(null);

  useEffect(() => {
    loadConfig()
      .then((config) => {
        setConfig(config);
        updateStatus(config);
      })
      .catch((error) => {
        console.error("Error loading config:", error);
      });

    const interval = setInterval(() => {
      if (config) {
        updateStatus(config);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  async function loadConfig(): Promise<Config> {
    try {
      const response = await axios.get("/config.yml");
      return response.data;
    } catch (error) {
      console.error("Error loading config:", error);
      throw error;
    }
  }

  async function updateStatus(config: Config) {
    const frontendStatus = await pingService(config.app.frontend, "app", config);
    const backendStatus = await pingService(config.app.backend, "app", config);
    const databaseStatus = await pingService(config.database, "database", config);

    setFrontendStatus(frontendStatus);
    setBackendStatus(backendStatus);
    setDatabaseStatus(databaseStatus);
  }

  async function pingService(service: Service | ServiceEnds, serviceType: string, config: Config): Promise<string> {
    try {
      const webProtocol = config.app.frontend.protocol === "http" ? "http" : "https" || config.app.backend.protocol === "http" ? "http" : "https"
      const protocol = serviceType === "database" ? "database" : webProtocol;
      const host = serviceType === "app" ? config?.app.host : config?.database.host;

      let response
      if (serviceType === "app") {
        response = await axios.get(`${protocol}://${host}:${service.port}`);
      } else if (protocol === "database") {
        //response = await pingDatabase(host, service.port, config.database.username, config.database.password, config.database.database);
      }

      return response?.status === 200 ? "online" : "offline";
    } catch {
      return "offline";
    }
  }

  //async function pingDatabase(host: string, port: number, username: string, password: string, database: string): Promise<any> {
  //  try {
  //    const connection = await mysql.createConnection({
  //      host: host,
  //      port: port,
  //      user: username,
  //      password: password,
  //      database: database,
  //    });
  //
  //    await connection.ping();
  //    connection.end();
  //
  //    return { status: 200 };
  //  } catch (error) {
  //    console.error("Error pinging database:", error);
  //    throw error;
  //  }
  //}


  if (!config) {
    return (
      <div className="flex items-center justify-center min-h-screen flex-col">
        <img src={background} className="absolute h-screen w-screen -z-10" />
        <div className="flex flex-col justify-center items-center max-w-xl p-12 bg-slate-800 rounded-2xl shadow-md bg-opacity-70 backdrop-filter backdrop-blur" data-testid="config-error">
          <a href="https://github.com/KingMaj0r/harmony">
            <img src={logo} className="h-24" />
          </a>
          <div className="text-white text-wrap">config.yml does not exist. Please create a config.yml and specify the values or get a example config.yml at <a className="text-blue-500" href="https://github.com/KingMaj0r/harmony">the harmony repo</a>.</div>
        </div>
      </div>
    );
  }

  if (config.app.environment !== "development") {
    return (
      <div className="flex items-center justify-center min-h-screen flex-col">
        <img src={background} className="absolute h-screen w-screen -z-10" />
        <div className="flex flex-col justify-center items-center max-w-xl p-12 bg-slate-800 rounded-2xl shadow-md bg-opacity-70 backdrop-filter backdrop-blur" data-testid="environment-error">
          <a href="https://github.com/KingMaj0r/harmony">
            <img src={logo} className="h-24" />
          </a>
          <div className="text-white text-wrap">You are running vite in development mode but your config.yml is set to Production.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen flex-col" data-testid="app-root">
      <img src={background} className="absolute h-screen w-screen -z-10" />
      <div className="flex flex-col justify-center items-center max-w-xl p-12 bg-slate-800 rounded-2xl shadow-md bg-opacity-70 backdrop-filter backdrop-blur">
        <div className="flex justify-center items-center">
          <a href="https://github.com/KingMaj0r/harmony">
            <img src={favicon} className="h-24" />
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
        <h1 className="text-center text-gray-500 mb-2">STATUS</h1>
        <div className="flex justify-center">
          <table className="w-auto text-sm shadow-sm">
            <tbody>
              <tr className="frontend-status">
                <td className="text-gray-400 px-12">Frontend</td>
                <td className="text-blue-500 px-12">{config.app.host  + ":" + config.app.frontend.port}</td>
                <td className={`px-12 ${frontendStatus === "online" ? "text-green-500" : "text-red-500"}`}>{frontendStatus}</td>
              </tr>
              <tr>
                <td className="px-12 text-gray-400">Backend</td>
                <td className="px-12 text-blue-500">{config.app.host  + ":" + config.app.backend.port}</td>
                <td className={`px-12 ${backendStatus === "online" ? "text-green-500" : "text-red-500"}`}>{backendStatus}</td>
              </tr>
              <tr>
                <td className="px-12 text-gray-400">Database</td>
                <td className="px-12 text-blue-500">{config.app.host  + ":" + config.database.port}</td>
                <td className={`px-12 ${databaseStatus === "online" ? "text-green-500" : "text-red-500"}`}>{databaseStatus}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
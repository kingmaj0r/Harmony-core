const s = require("fs"), d = require("path");
function c() {
  return {
    name: "harmony-core",
    configResolved(e) {
      const t = {
        ...e,
        build: {
          outDir: "./storage/dist",
          rollupOptions: {
            input: "./src/index.tsx",
            output: {
              filename: "vendor.[contenthash].js"
            }
          }
        }
      };
      Object.assign(e, t);
    },
    configureServer(e) {
      return () => {
        const t = d.join(__dirname, "../dist/index.html");
        e.middlewares.use((i, r, o) => {
          if (i.url === "/index.html")
            try {
              const n = s.readFileSync(t, "utf-8");
              r.setHeader("Content-Type", "text/html"), r.end(n);
            } catch (n) {
              console.error("Error reading index.html:", n), o(n);
            }
          else
            o();
        });
      };
    }
  };
}
export {
  c as harmonyCore
};
//# sourceMappingURL=harmony.mjs.map

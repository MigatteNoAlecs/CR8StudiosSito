import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Necessario per aprire il dev server dal telefono via IP (altrimenti il JS non si carica)
  allowedDevOrigins: ["192.168.10.167", "172.17.145.41"],
};

export default nextConfig;

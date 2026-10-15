/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "export",
  basePath: "/luiz-morais",
  images: {unoptimized: true},
  allowedDevOrigins: ['172.16.0.0/16', '192.168.0.0/16', '10.0.0.0/8'],
};

export default nextConfig;

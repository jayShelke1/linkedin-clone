import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
        {
            protocol:'https',
            hostname:'res.cloudinary.com'
        } 
    ]
},
  serverActions:{
    bodySizeLimit:'2mb'
  }
  /* config options here */
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.pdf$/i,
          type: 'asset/source',
          use: [
            {
              loader: 'file-loader',
            } 
          ]
        });
        return config;
      },
};

export default nextConfig;

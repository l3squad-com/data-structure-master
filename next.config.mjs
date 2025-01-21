/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    output: isDev ? 'standalone' : 'export',
    basePath: isDev ? '' : '/<data-structure-master>',
    assetPrefix: isDev ? '' : '/<data-structure-master>',
};

export default nextConfig;
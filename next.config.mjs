/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['cdn.buttercms.com'], // Add allowed domains here
    // }
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './image-loader.ts',
    },
    // trailingSlash: true
};

export default nextConfig;

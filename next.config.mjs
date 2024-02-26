/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'postimg.cc',
                // port: '',
                // pathname: '/my-bucket/**',
            },
            {
                protocol: 'https',
                hostname: 'i.postimg.cc',
            }
        ],
    },
};




export default nextConfig;

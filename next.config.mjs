/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/(.*)", // Apply headers to all routes
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: "default-src 'self'; script-src 'self' 'unsafe-inline'; connect-src 'self' https://api.web3forms.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:;",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "SAMEORIGIN",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "no-referrer",
                    },
                    {
                        key: "Permissions-Policy",
                        value: "geolocation=(), microphone=(), camera=(), fullscreen=(self)",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;

/**
 *
 *
 * @template {import('next').NextConfig}
 * @param {T} config
 * @constraint {{import('next).NextConfig}}
 */
function defineNextConfig(config) {
    return config;
}
export default defineNextConfig({
    reactStrictMode: true,
    swMinify: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{loader: "@svgr/webpack", options: {icon: true}}]
        });
        return config;
    }
});

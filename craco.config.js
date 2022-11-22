const CracoLessPlugin = require('craco-less');
const BrotliPlugin = require('brotli-webpack-plugin'); //brotli
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin'); //gzip

module.exports = {
    webpack: {
        mode: 'production',
        entry: "./App.test.tsx",
        output: {
            publicPath: "/",
            path: path.resolve(__dirname, "build"),
            filename: "bundled.js"
        },
        // configure: {
        //     cache: {
        //         //Enable Webpack cache:
        //         type: "filesystem"
        //         //This have any effect until Craco updates to CRA v5
        //         //which has support for Webpack v5 (see notes below)
        //     }
        // },

        // alias: {
        //     environment: path.join(
        //         __dirname,
        //         'src',
        //         'environments',
        //         process.env.REACT_APP_ENV || 'production'
        //     )
        // },
        plugins: [new BundleAnalyzerPlugin(), new CompressionPlugin(
        ), new BrotliPlugin({ //brotli plugin
            asset: '[path].br[query]',
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8
        })]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@theme': 'dark',
                            '@primary-color': "#C3E5AE",
                            '@secondary-color': "#073042",
                            '@border-radius-base': '10px',
                            '@checkbox-border-radius': '2px',
                            '@card-radius': '10px',
                            '@rate-star-size': '15px',
                        },
                        javascriptEnabled: true,
                    },
                },
            },


        },


    ],
};
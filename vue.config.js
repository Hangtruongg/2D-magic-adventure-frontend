import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
    configureWebPack: {
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'src/assets', to: 'dist/assets' },
                ],
            }),
        ],
    },
};

module.exports = {
    entry: {
        index: __dirname + '/src/index',
        // rcre: __dirname + '/src/rcre',
        get_started: __dirname + '/src/get_started.tsx',
        cms: __dirname + '/src/cms'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },

    // webpack dev server
    devServer: {
        host: '0.0.0.0',
        port: 8181,
        inline: true,
        stats: {
            colors: true
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                include: __dirname + '/src',
                use: [
                    require.resolve('ts-loader')
                ]
                // loader: require.resolve('ts-loader'),
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            },
            {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
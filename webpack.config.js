module.exports = {
    entry: {
        index: __dirname + '/src/router.tsx',
        get_started: __dirname + '/src/get_started.tsx',
        get_started_2: __dirname + '/src/get_started_2.tsx',
        cms: __dirname + '/src/cms.tsx'
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
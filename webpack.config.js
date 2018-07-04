module.exports = {
    entry: {
        index: __dirname + "/src/index",
        rcre: __dirname + "/src/rcre",
        cms: __dirname + "/src/cms"
    },
    output: {
        filename: '[name].js',
        path: __dirname + "/dist"
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

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.jsx']
    },
    node: {
        fs: "empty"
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            // { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                test: /\.(ts|tsx)$/,
                include:__dirname + "/src",
                use: [
                    require.resolve('ts-loader')
                ]
                // loader: require.resolve('ts-loader'),
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { 
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            },
            {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            },
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
};
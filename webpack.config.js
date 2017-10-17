module.exports = {
    "entry": "./src/index.js",

    "output": {
        "publicPath": "/",
        "filename": "bundle.js"
    },

    "resolve": {
        "modules": ['src', 'node_modules'],
        "extensions": [ ".js" ]
    },

    "module": {
        "loaders": [
            {
                "test": /\.jsx?$/,
                "exclude": /node_modules/,
                "loader": "babel-loader",
                "query": {
                    "presets": [ "es2015", "stage-1", "react" ]
                }
            },
            {
                "test": /\.(html)$/,
                "use": {
                    "loader": "html-loader"
                }
            },
            {
                "test": /\.scss$/,
                "use": [
                    {
                        "loader": "style-loader"
                    },
                    {
                        "loader": "css-loader"
                    },
                    {
                        "loader": "sass-loader"
                    }
                ]
            }
        ]
    },

    "devServer": {
        "historyApiFallback": true,
        "contentBase": "./"
    }
};

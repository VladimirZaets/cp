import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:9000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, '/src/index.js')
    ],
    output: {
        path: '/',
        publicPath: '/',
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            filename: 'index.html'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['react-hot-loader','babel-loader'],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    devServer: {
        port: 9000,
        hot: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: [ '.js' ]
    }
}
const path = require('path')
const Dotenv = require('dotenv-webpack')
const { ProvidePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

module.exports = env => {
  const isProduction = process.env.NODE_ENV === 'production'
  const isAnalyze = process.env.ANALYZE_BUNDLE === 'true'

  // Common plugins
  const plugins = [
    new Dotenv(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          filter: filePath => !filePath.endsWith('index.html'),
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      minify: isProduction
        ? {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          }
        : false
    }),
    new ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ]

  // Development-specific plugins
  if (!isProduction) {
    plugins.push(new NodePolyfillPlugin())
  }

  // Production-specific plugins
  if (isProduction) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].chunk.css'
      }),
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8
      })
    )
  }

  // Bundle analyzer
  if (isAnalyze) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
      publicPath: '/',
      filename: isProduction ? '[name].[contenthash].js' : '[name].bundle.js',
      path: path.resolve(__dirname, 'build'),
      chunkFilename: isProduction ? '[name].[contenthash].chunk.js' : '[name].chunk.js',
      clean: true,
      assetModuleFilename: 'assets/[hash][ext][query]'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/i,
          use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'postcss-loader']
        },
        {
          test: /\.scss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.svg$/,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack']
        },
        {
          test: /\.(png|jpg|jpeg|gif|webp)$/i,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024 // 8kb
            }
          },
          generator: {
            filename: 'images/[hash][ext][query]'
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[hash][ext][query]'
          }
        },
        {
          test: /\.(wav|mp3|ogg)$/,
          type: 'asset/resource',
          generator: {
            filename: 'audio/[hash][ext][query]'
          }
        },
        {
          test: /\.m?js$/,
          resolve: {
            fullySpecified: false
          }
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'react/jsx-dev-runtime.js': 'react/jsx-dev-runtime',
        'react/jsx-runtime.js': 'react/jsx-runtime'
      },
      fallback: {
        fs: false,
        path: require.resolve('path-browserify'),
        buffer: require.resolve('buffer')
      }
    },
    plugins,
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'build')
      },
      compress: true,
      port: 3000,
      historyApiFallback: true,
      hot: true,
      client: {
        overlay: {
          errors: true,
          warnings: false
        }
      },
      devMiddleware: {
        writeToDisk: true
      }
    },
    optimization: {
      minimize: isProduction,
      minimizer: isProduction
        ? [
            new TerserWebpackPlugin({
              parallel: true,
              terserOptions: {
                compress: {
                  drop_console: true
                }
              }
            }),
            new CssMinimizerWebpackPlugin()
          ]
        : [],
      splitChunks: {
        chunks: 'all',
        maxSize: 244 * 1024,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      },
      runtimeChunk: 'single'
    },
    performance: {
      maxEntrypointSize: 1024 * 1024, // 1MB
      maxAssetSize: 1024 * 1024, // 1MB
      hints: isProduction ? 'warning' : false
    }
  }
}

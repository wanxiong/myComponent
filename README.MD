## 安装storybook
-----
```sh
npx -p @storybook/cli sb init --type react
```


```sh
yarn add @storybook/react
```

## 安装 storybook 其他依赖
```sh
yarn add @storybook/react @storybook/addon-controls @storybook/addon-actions @storybook/addon-storysource
@mdx-js/loader @storybook/source-loader @storybook/addon-docs -D -W
```

## 安装webpack配置css
```sh
yarn add less less-loader css-loader style-loader postcss-loader  -D -W
```

## 安装 rollup 以及相关依赖 根目录
```sh
yarn add rollup rollup-plugin-commonjs rollup-plugin-babel rollup-plugin-postcss rollup-plugin-node-resolve rollup-plugin-terser -D -W
```
## 安装 react 以及其他依赖  根目录
```sh
yarn add cross-env -D -W

yarn add react react-dom -S -W

yarn add babel-core babel-loader @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties babel-plugin-transform-decorators-legacy @babel/plugin-transform-runtime @babel/plugin-syntax-dynamic-import @babel/plugin-transform-async-to-generator @babel/plugin-syntax-jsx @babel/plugin-transform-react-jsx -D -W
```

## 安装 lerna 全局
```sh
yarn global add lerna
```


## 启动storybook
```sh
yarn run storybook

```
## 编译打包代码
```sh
yarn run rollup:dev   ||  yarn run rollup:prod 
```


## 发布npm && git
```sh
yarn run lerna
```
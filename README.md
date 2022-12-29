# scroll-number-card
数字滚动卡片

## 说明

数字滚动卡片组件，提供一个能够识别带小数点和单位的字符串的成品包装。可以指定小数点前后的最小位数。

## 引入方式

> 安装

`npm install scroll-number-card --save`

```vue
<!-- 引入组件  -->
import ScrollNumberCard from 'scroll-number-card';
<!-- 引入CSS文件 -->
import "scroll-number-card/lib/scroll-number-card.css"
<!-- 挂载组件 -->
Vue.use(ScrollNumberCard);
```

## 本源码使用方式

> 安装和启动测试程序

`npm install` 或 `yarn install`

`npm run serve` 或 `yarn run serve`

可直接复制源码中scroll-number-card文件夹的三个单独的组件进行使用。

## 参数

- num: \[String | Number\] - 默认：0 - 待处理数字

- text: \[String\] - 默认："" - 数字卡片后携带的文字

- min-digits-left: \[Number\] - 默认：1 - 小数点前最小位数

- min-digits-right: \[Number\] - 默认：0 - 小数点后最小位数

## 示例

```vue
<scroll-number-card num="144.12" text="件" :min-digits-left="4" :min-digits-right="4" />
```

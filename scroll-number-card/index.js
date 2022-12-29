/*
 * @Author: lychen13
 * @Description: 组件入口
 * @FilePath: \scroll-number-card\scroll-number-card\index.js
 */
import ScrollNumberWrapper from "./ScrollNumberWrapper";

ScrollNumberWrapper.install = function (_Vue) {
	if (!_Vue) {
		return console.error("Vue对象不存在？");
	}

	_Vue.component('scroll-number-card', ScrollNumberWrapper);
};

export default ScrollNumberWrapper;

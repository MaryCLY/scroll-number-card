<!--
 * @Author: 陈俪影
 * @Description: 滚动数字卡片组件，可以处理带小数点和单位的数据
 * @FilePath: \scroll-number-card\scroll-number-card\ScrollNumberWrapper.vue
-->
<template>
	<div class="scroll-number-wrapper">
		<span>
			<scroll-number-card-group :num="computed[0]" />
			<span v-if="+minDigitsRight > 0 || computed[1]">
				<span class="dot">.</span>
				<scroll-number-card-group :num="computed[2]" />
			</span>
		</span>
		<span class="text">{{ computed[3] || '' }}{{ text }}</span>
	</div>
</template>

<script>
import ScrollNumberCardGroup from "./ScrollNumberCardGroup.vue";

export default {
	name: "scroll-number-wrapper",
	components: { ScrollNumberCardGroup },
	props: {
		num: {
			default: 0, // 待处理数字(Number / String)
		},
		text: {
			type: String,
			default: "", // 后面的文字
		},
		minDigitsLeft: {
			default: 1, // 小数点前最小位数
		},
		minDigitsRight: {
			default: 0, // 小数点后最小位数
		},
	},
	data() {
		return {
			computed: [],
		};
	},
	watch: {
		num: {
			deep: true,
			handler() {
				this.handleData();
			},
		},
	},
	created() {
		this.handleData();
	},
	methods: {
		handleData() {
			const splited = String(this.num)
				.match(/^([0-9]+)(\.([0-9]+))*([^0-9.]*)$/)
				.slice(1, 5);
			if (!splited[0]) {
				return
			}
			const lenLeft = splited[0].length;
			if (lenLeft < this.minDigitsLeft) {
				splited[0] =
					new Array(this.minDigitsLeft - lenLeft).fill("0").join("") +
					splited[0];
			}

			const lenRight = splited[2] ? splited[2].length : 0;
			if (lenRight < this.minDigitsRight) {
				splited[2] = splited[2]
					? splited[2] +
					new Array(this.minDigitsRight - lenRight).fill("0").join("")
					: new Array(this.minDigitsRight).fill("0").join("");
			}

			this.computed = splited;
		},
	},
};
</script>

<style scoped>
.scroll-number-wrapper {
	display: flex;
	align-items: center;
	font-size: 20px;
	/* font-weight: 600; */
	color: #606266;
	line-height: 1;
}
.dot {
	padding: 0 6px;
}
.text {
	margin-left: 10px;
}
</style>

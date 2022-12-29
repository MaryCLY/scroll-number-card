<!--
 * @Author: 陈俪影
 * @Description: 滚动数字卡片组件-一组并列的卡片
 * @FilePath: \scroll-number-card\scroll-number-card\ScrollNumberCardGroup.vue
-->
<template>
	<div class="scroll-number-card-group">
		<scroll-number-card
			v-for="(singleNum, index) in numArray"
			:key="index"
			:num="singleNum"
		>
		</scroll-number-card>
	</div>
</template>

<script>
import ScrollNumberCard from "./ScrollNumberCard.vue";
export default {
	components: { ScrollNumberCard },
	name: "scroll-number-card-group",
	props: {
		num: {
			type: String,
			default: '0',
		}, // 需要显示的数字
	},
	data() {
		return {
			numArray: [], // 分解后的数字
			index: 0, // 排队播放动画的当前索引
			timer: null,
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
	beforeDestroy() {
		if (this.timer) {
			clearInterval(this.timer);
		} // 以防计时器还在工作，消除计时器
	},
	methods: {
		handleData() {
			if (Number.isNaN(parseInt(this.num))) {
				return;
			}
			this.numArray = new Array(this.num.length).fill("0"); // 先获取卡片数量
			this.$nextTick(() => {
				if (this.timer) {
					clearInterval(this.timer);
				}
				this.index = 0;
				this.timer = setInterval(this.timerFunc, 200);
			});
		},
		timerFunc() {
			const numArray = this.num.split("");
			if (this.index >= numArray.length) {
				clearInterval(this.timer);
				this.index = 0;
				return;
			}
			this.$set(this.numArray, this.index, numArray[this.index]);
			this.index += 1;
		},
	},
};
</script>

<style scoped>
.scroll-number-card-group {
	display: inline-block;
}

.scroll-number-card:not(:last-child) {
	margin-right: 4px;
}
</style>

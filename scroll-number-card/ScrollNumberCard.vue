<!--
 * @Author: 陈俪影
 * @Description: 滚动数字卡片组件-单个卡片
 * @FilePath: \scroll-number-card\scroll-number-card\ScrollNumberCard.vue
-->
<template>
	<div class="scroll-number-card">
		<div class="scroll-numbers" :style="{ bottom: -40 * +num + 'px' }">
			<div
				v-for="innerNum in [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]"
				:key="innerNum"
				class="number"
			>
				{{ innerNum }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "scroll-number-card",
	props: {
		num: {
			default: "0",
		},
	},
};
</script>

<style scoped>
.scroll-number-card {
	display: inline-block;
	width: 26px;
	height: 40px;
	overflow: hidden;
	position: relative;
	background: #fff;
	border: 1px solid #DCDFE6;
	border-radius: 4px;
}
.scroll-number-card * {
	cursor: default;
	pointer-events: none;
}
.scroll-numbers {
	position: absolute;
	bottom: 0;
	transition: bottom 1s;
}
.number {
	width: 26px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 26px;
	line-height: 1;
	/* font-weight: 600; */
	color: #606266;
}
</style>

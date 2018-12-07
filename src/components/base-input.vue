<template>
	<span>
		<input :type="type" name="" :value="inputValue" @change="$emit('change', $event.target.value)" class="input-box">
	</span>
</template>
<script>
export default {
	model: {
		prop: 'inputValue',
		event: 'change'
	},
	props: {
		inputValue: [String, Number],
		type: {
			type: String,
			default: 'text'
		}
	},
	data () {
		return {

		}
	}
}
</script>
<style scoped lang="scss">
$default-color: #3caed2;

.input-box{
	box-sizing: border-box;
	height: 30px;
	border: 1px solid #d3d4d6;
	border-radius: 2px;
	padding: 0 5px;
	outline: none;

	&:focus{
		border-color: $default-color;
		outline: none;
	}
}
</style>
<template>
	<div>
		<div class="">
			<slot></slot>
		</div>
		<slot name="reference" @click="togglePop"></slot>
	</div>
</template>
<script>
export default {
	methods: {
		togglePop(){

		}
	}
}
</script>
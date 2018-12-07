<template>
	<span>
		<button class="base-button">
			<slot></slot>
		</button>
	</span>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
$default-color: #3caed2;

.base-button{
	min-width: 60px;
	min-height: 30px;
  	color: #909399;
  	background: #fff;
  	border-color: #d3d4d6;
  	border-radius: 2px;
  	outline: none;

  	&:hover{
  		cursor: pointer;
	    color: $default-color;
	    background-color: transparentize($default-color, 0.9);
	    border-color: transparentize($default-color, 0.8);
  	}
}
</style>
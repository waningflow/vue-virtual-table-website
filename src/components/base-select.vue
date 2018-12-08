<template>
	<span>
		<BasePopover
			:clickToClose="true"
			@showChange="handlePopoverChange"
			:width="width"
			animation-mode="slidedown">
			<div class="option-list">
				<div v-for="option in choiceList" class="option-item" :class="{'selected': option.value == selected.value}" @click="updateChoice(option)">{{option.label}}</div>
			</div>
			<div slot="reference" class="select-box" :style="{'width': width+'px'}">
					{{selected.label}}
					<!-- <div class="select-arrow"></div> -->
				<div class="arrow-side">
					<i class="arrow_carrot-down select-arrow" :style="{'transform': 'rotate(' +arrowRotate +'deg)'}"></i>
				</div>
			</div>
		</BasePopover>
	</span>
</template>
<script>
import BasePopover from './base-popover.vue'
import '../assets/base.css'
export default {
	components: {
		BasePopover
	},
	model: {
		prop: 'selectedValue',
		event: 'change'
	},
	props: {
		choiceList: {
			type: Array,
			default: function () {
				return []
			}
		},
		selectedValue: [String, Number],
		width: {
			type: Number,
			default: 80
		}
	},
	data () {
		return {
			selected: {},
			arrowRotate: 0
		}
	},
	mounted(){
		this.updateSelected(this.selectedValue)
	},
	methods: {
		updateSelected(val){
			this.selected = this.choiceList.find(v => v.value == val)||{value: val, label: val }
		},
		handlePopoverChange(isShow){
			if(isShow){
				this.arrowRotate = -180
			}else{
				this.arrowRotate = 0
			}
		},
		updateChoice(option){
			this.$emit('change', option.value)
			this.updateSelected(option.value)
			// this.selected
			// this.value = option.value
			// this.selected = Object.assign({}, option)
		}
	}
}
</script>
<style scoped lang="scss">

$default-color: #3caed2;
$backgroud-color: #f5f7fa;
$border-color: #dcdfe6;
$font-color: #909399;

.select-box{
	font-size: 14px;
	height: 32px;
  	border-radius: 4px;
  	outline: none;
  	background-color: $backgroud-color;
    color: $font-color;
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid $border-color;
    white-space: nowrap;
    padding-left: 5px;
    padding-rigth: 20px;
    box-sizing: border-box;
  	&:hover{
  		cursor: pointer;
  	}
}
.option-list{
	font-size: 14px;
	text-align: center;
	padding: 5px 0;
	.option-item{
		padding: 5px;
		&:hover{
			cursor: pointer;
			background-color: $backgroud-color;
		}
		&.selected{
			color: $default-color;
		}
	}
}
.arrow-side{
	position: absolute;
	right: 0;
	top: 0;
	width: 20px;
	height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

	.select-arrow{
		color: $font-color;
		font-size: 16px;
		transition: all ease .2s;
	}
}

</style>
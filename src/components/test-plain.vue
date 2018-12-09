<template>
	<div style="height: 400px;border: 1px solid #eee">
		<BasePopover>
			<div>test</div>
			<div>iuyt</div>
			<BaseButton slot="reference">CLICK</BaseButton>
		</BasePopover>
		<BaseSelect
			v-model="selectedOpt"
			:choice-list="list"
			@change="handleChangeOpt"
		></BaseSelect>
		<BaseInput
			v-model="inputText"
			@change="handleChangeInput">
		</BaseInput>
		<br> <br>
		<BaseButton>Button</BaseButton>
		<BaseButton type="primary">Button</BaseButton>
		<BaseButton type="danger">Button</BaseButton>
		<br><br>
		<BaseButton :disabled="true">Button</BaseButton>
		<BaseButton type="primary" :disabled="true">Button</BaseButton>
		<BaseButton type="danger" :disabled="true">Button</BaseButton>
		<br><br>
		<base-checkgroup
			style="width: 100px"
			v-model="checkedList"
			:choice-list="checkList"
			@change="handleChangeChecked"
		></base-checkgroup>
		<br><br>
		<BasePopover style="float: right">
			<div>test</div>
			<div>iuyt</div>
			<BaseButton slot="reference">CLICK</BaseButton>
		</BasePopover>
		<br><br>
		<base-tooltip 
		>
			<div>sjdief</div>
			<div slot="reference">testcbeu</div>
		</base-tooltip>
	</div>
</template>
<script>
import BasePopover from './base-popover.vue'
import BaseButton from './base-button.vue'
import BaseSelect from './base-select.vue'
import BaseInput from './base-input.vue'
import BaseCheckgroup from './base-checkgroup.vue'
import BaseTooltip from './base-tooltip.vue'

export default {
	components: {
		BasePopover,
		BaseButton,
		BaseSelect,
		BaseInput,
		BaseCheckgroup,
		BaseTooltip
	},
	data(){
		return{
			selectedOpt: 'in',
			list: [
		        {
		          value: "in",
		          label: "Include"
		        },
		        {
		          value: "out",
		          label: "Exclude"
		        }
		      ],
		    inputText: 'dhiehfnoe',
		    checkList: ['adeofnigrigtign', 'b', 'c'],
		    checkedList: []
		}
	},
	methods: {
		handleChangeOpt(val){
			console.log(val)
		},
		handleChangeInput(val){
			console.log(val)
		},
		handleChangeChecked(val){
			console.log(val)
		}
	}
}
</script>

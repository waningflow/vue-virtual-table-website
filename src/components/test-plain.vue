<template>
	<div style="height: 800px;border: 1px solid #eee">
		<BasePopover>
			<BaseButton slot="reference">CLICK</BaseButton>
		</BasePopover>
		<BaseButton>Button</BaseButton>
		<BaseSelect
			v-model="selectedOpt"
			:choice-list="list"
			@change="handleChangeOpt"
		></BaseSelect>
		<BaseInput
			v-model="inputText"
			@change="handleChangeInput">
		</BaseInput>
	</div>
</template>
<script>
import BasePopover from './base-popover.vue'
import BaseButton from './base-button.vue'
import BaseSelect from './base-select.vue'
import BaseInput from './base-input.vue'

export default {
	components: {
		BasePopover,
		BaseButton,
		BaseSelect,
		BaseInput
	},
	data(){
		return{
			selectedOpt: 'ion',
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
		    inputText: 'dhiehfnoe'
		}
	},
	methods: {
		handleChangeOpt(val){
			console.log(val)
			console.log(this.selectedOpt)
		},
		handleChangeInput(val){
			console.log(val)
		}
	}
}
</script>

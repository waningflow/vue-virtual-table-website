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
	</div>
</template>
<script>
import BasePopover from './base-popover.vue'
import BaseButton from './base-button.vue'
import BaseSelect from './base-select.vue'

export default {
	components: {
		BasePopover,
		BaseButton,
		BaseSelect
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
		      ]
		}
	},
	methods: {
		handleChangeOpt(val){
			console.log(val)
			console.log(this.selectedOpt)
		}
	}
}
</script>

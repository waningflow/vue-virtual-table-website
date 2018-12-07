<template>
	<div style="height: 800px;border: 1px solid #eee">
		<BasePopover>
			<BaseButton slot="reference">CLICK</BaseButton>
		</BasePopover>
		<BaseButton>Button</BaseButton>
		<BaseSelect
			:choice-list="list"
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
	}
}
</script>

<template>
	<Menubar>
		<template #start>
			<img alt="logo" src="@/assets/logo.png" height="40" class="p-mr-2" />
		</template>
		<template #end>
			<InputText placeholder="Search" type="text" />
			<Button
				label="Logout"
				icon="pi pi-power-off"
				:style="{ 'margin-left': '0 .5em' }"
			/>
		</template>
	</Menubar>
</template>

<script lang="ts">
	import { Options, Vue } from "vue-class-component";

	@Options({
		props: {
			msg: String,
		},
	})
	export default class TheHeader extends Vue {
		msg!: string;
	}
</script>
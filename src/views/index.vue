<template>
	<section>
		<TheHeader />
	</section>
</template>

<script lang="ts">
	import { Options, Vue } from "vue-class-component";
	import TheHeader from "@/components/TheHeader.vue"; // @ is an alias to /src

	@Options({
		components: {
			TheHeader,
		},
	})
	export default class Home extends Vue {}
</script>

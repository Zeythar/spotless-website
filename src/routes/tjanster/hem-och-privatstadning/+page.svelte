<script lang="ts">
	import ServiceSection from '$lib/components/sections/ServiceSection.svelte';
	import {serviceCategories} from '$lib/data/services';
</script>

<svelte:head>
	<title>Spotless - {serviceCategories.hem.title}</title>
	<meta
		name="description"
		content={serviceCategories.hem.description}
	/>
</svelte:head>

<ServiceSection category={serviceCategories.hem} />

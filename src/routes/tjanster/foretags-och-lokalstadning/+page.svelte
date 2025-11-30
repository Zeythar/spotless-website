<script lang="ts">
	import ServiceSection from '$lib/components/sections/ServiceSection.svelte';
	import {serviceCategories} from '$lib/data/services';
</script>

<svelte:head>
	<title>Spotless - {serviceCategories.foretag.title}</title>
	<meta
		name="description"
		content={serviceCategories.foretag.description}
	/>
</svelte:head>

<ServiceSection category={serviceCategories.foretag} />

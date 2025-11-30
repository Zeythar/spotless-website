<script lang="ts">
	import ServiceSection from '$lib/components/sections/ServiceSection.svelte';
	import {serviceCategories} from '$lib/data/services';
</script>

<svelte:head>
	<title>Spotless - {serviceCategories.special.title}</title>
	<meta
		name="description"
		content={serviceCategories.special.description}
	/>
</svelte:head>

<ServiceSection category={serviceCategories.special} />

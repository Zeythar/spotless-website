<script lang="ts">
	import ServiceSection from '$lib/components/sections/ServiceSection.svelte';
	import {serviceCategories} from '$lib/data/services';
</script>

<svelte:head>
	<title>Spotless - {serviceCategories.service.title}</title>
	<meta
		name="description"
		content={serviceCategories.service.description}
	/>
</svelte:head>

<ServiceSection category={serviceCategories.service} />

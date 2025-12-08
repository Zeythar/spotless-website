<script lang="ts">
	import ServiceSection from '$lib/components/sections/ServiceSection.svelte';
	import {serviceCategories} from '$lib/data/services';
	import {seoData} from '$lib/data/seo';
	import {contactState} from '$lib/state/contact.svelte';

	$effect(() => {
		contactState.selectedService = 'home';
	});
</script>

<svelte:head>
	<title>{seoData.servicesHem.title}</title>
	<meta
		name="description"
		content={seoData.servicesHem.description}
	/>
</svelte:head>

<ServiceSection category={serviceCategories.hem} />

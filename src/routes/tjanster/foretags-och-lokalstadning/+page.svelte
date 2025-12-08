<script lang="ts">
	import ServiceSection from '$lib/components/sections/ServiceSection.svelte';
	import {serviceCategories} from '$lib/data/services';
	import {seoData} from '$lib/data/seo';
	import {contactState} from '$lib/state/contact.svelte';

	$effect(() => {
		contactState.selectedService = 'business';
	});
</script>

<svelte:head>
	<title>{seoData.servicesForetag.title}</title>
	<meta
		name="description"
		content={seoData.servicesForetag.description}
	/>
</svelte:head>

<ServiceSection category={serviceCategories.foretag} />

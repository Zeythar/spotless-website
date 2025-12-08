<script lang="ts">
	import ServiceSection from '$lib/components/sections/ServiceSection.svelte';
	import {serviceCategories} from '$lib/data/services';
	import {seoData} from '$lib/data/seo';
	import {contactState} from '$lib/state/contact.svelte';

	$effect(() => {
		contactState.selectedService = 'special';
	});
</script>

<svelte:head>
	<title>{seoData.servicesSpecial.title}</title>
	<meta
		name="description"
		content={seoData.servicesSpecial.description}
	/>
</svelte:head>

<ServiceSection category={serviceCategories.special} />

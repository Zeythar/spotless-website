<script lang="ts">
	import ServiceSection from '$lib/components/sections/ServiceSection.svelte';
	import Seo from '$lib/components/shared/Seo.svelte';
	import {seoData} from '$lib/data/seo';
	import {serviceCategories} from '$lib/data/services';
	import {contactState} from '$lib/state/contact.svelte';

	$effect(() => {
		contactState.selectedService = 'home';
	});
</script>

<Seo
	title={seoData.servicesHem.title}
	description={seoData.servicesHem.description}
/>

<ServiceSection category={serviceCategories.hem} />

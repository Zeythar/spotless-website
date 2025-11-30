<script lang="ts">
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import CleaningGuideSection from '$lib/pages/cleaning-guide/CleaningGuideSection.svelte';
	import type {FormSchema} from '$lib/schema';
	import type {SuperValidated, Infer} from 'sveltekit-superforms';

	let {data}: {data: {form: SuperValidated<Infer<FormSchema>>}} = $props();
</script>

<svelte:head>
	<title>Spotless - Städguide</title>
	<meta
		name="description"
		content="This is where the description goes for SEO"
	/>
</svelte:head>

<CleaningGuideSection />
<ContactSection data={data.form} />

<script lang="ts">
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import WhyChooseUsSection from '$lib/pages/why-choose-us/WhyChooseUsSection.svelte';

	import type {FormSchema} from '$lib/schema';
	import type {SuperValidated, Infer} from 'sveltekit-superforms';

	let {data}: {data: {form: SuperValidated<Infer<FormSchema>>}} = $props();
</script>

<svelte:head>
	<title>Spotless - Varför oss?</title>
	<meta
		name="description"
		content="This is where the description goes for SEO"
	/>
</svelte:head>

<WhyChooseUsSection />
<ContactSection data={data.form} />

<script lang="ts">
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import type {FormSchema} from '$lib/schema';
	import type {SuperValidated, Infer} from 'sveltekit-superforms';

	let {data}: {data: {form: SuperValidated<Infer<FormSchema>>}} = $props();
</script>

<ContactSection data={data.form} />

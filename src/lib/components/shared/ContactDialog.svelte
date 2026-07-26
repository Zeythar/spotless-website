<script lang="ts">
	import ContactForm from '$lib/components/forms/ContactForm.svelte';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogHeader,
		DialogTitle
	} from '$lib/components/ui/dialog';
	import {contactData} from '$lib/data/contact';
	import type {FormSchema} from '$lib/schema';
	import {contactState} from '$lib/state/contact.svelte';
	import type {Infer, SuperValidated} from 'sveltekit-superforms';

	let {
		form
	}: {
		form: SuperValidated<Infer<FormSchema>>;
	} = $props();
</script>

<Dialog bind:open={contactState.isOpen}>
	<DialogContent class="max-h-[90vh] overflow-y-auto sm:max-w-150">
		<DialogHeader>
			<DialogTitle>{contactData.form.title}</DialogTitle>
			<DialogDescription>{contactData.form.description}</DialogDescription>
		</DialogHeader>
		<ContactForm
			data={form}
			id="contact-form-dialog"
			onsuccess={() => (contactState.isOpen = false)}
		/>
	</DialogContent>
</Dialog>

<script lang="ts">
	import ContactForm from '$lib/components/forms/ContactForm.svelte';
	import CookieBanner from '$lib/components/shared/CookieBanner.svelte';
	import Footer from '$lib/components/shared/Footer.svelte';
	import Header from '$lib/components/shared/Header.svelte';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogHeader,
		DialogTitle
	} from '$lib/components/ui/dialog';
	import {contactData} from '$lib/data/contact';
	import {contactState} from '$lib/state/contact.svelte';
	import type {LayoutData} from './$types';
	import './layout.css';

	let {children, data}: {children: any; data: LayoutData & {recaptchaSiteKey: string}} = $props();
</script>

<svelte:head>
	<script src="https://www.google.com/recaptcha/api.js?render={data.recaptchaSiteKey}"></script>
</svelte:head>

<Header />
<main class="flex-1">
	{@render children()}
</main>
<Footer />
<CookieBanner />

<Dialog bind:open={contactState.isOpen}>
	<DialogContent class="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
		<DialogHeader>
			<DialogTitle>{contactData.form.title}</DialogTitle>
			<DialogDescription>{contactData.form.description}</DialogDescription>
		</DialogHeader>
		<ContactForm
			data={data.form}
			id="contact-form-dialog"
			onsuccess={() => (contactState.isOpen = false)}
			recaptchaSiteKey={data.recaptchaSiteKey}
		/>
	</DialogContent>
</Dialog>

<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/shared/Footer.svelte';
	import Header from '$lib/components/shared/Header.svelte';
	import FloatingActions from '$lib/components/shared/FloatingActions.svelte';
	import CookieBanner from '$lib/components/shared/CookieBanner.svelte';
	import type {LayoutData} from './$types';
	import {
		Dialog,
		DialogContent,
		DialogHeader,
		DialogTitle,
		DialogDescription
	} from '$lib/components/ui/dialog';
	import ContactForm from '$lib/components/forms/ContactForm.svelte';
	import {contactState} from '$lib/state/contact.svelte';
	import {contactData} from '$lib/data/contact';

	let {children, data}: {children: any; data: LayoutData} = $props();
</script>

<svelte:head>
	<link
		rel="icon"
		href={favicon}
	/>
</svelte:head>

<Header />
{@render children()}
<Footer />
<FloatingActions />
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
		/>
	</DialogContent>
</Dialog>

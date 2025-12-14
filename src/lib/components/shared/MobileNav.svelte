<script lang="ts">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from '$lib/components/ui/accordion';
	import {contactData} from '$lib/data/contact';
	import {navigationData} from '$lib/data/navigation';
	import {contactState} from '$lib/state/contact.svelte';
	import {Mail, Phone, X} from '@lucide/svelte';
	import {fade, fly} from 'svelte/transition';

	let {open = $bindable(false)} = $props();

	function close() {
		open = false;
	}

	// Helper to parse phone numbers
	const phoneNumbers =
		contactData.contactInfo.details.find((d) => d.icon === 'Phone')?.value.split(', ') || [];
	const email = contactData.contactInfo.details.find((d) => d.icon === 'Mail')?.value || '';
</script>

{#if open}
	<!-- Backdrop -->
	<div
		class="fixed inset-0 z-90 bg-black/50 backdrop-blur-sm md:hidden"
		transition:fade={{duration: 200}}
		onclick={close}
		role="button"
		tabindex="0"
		onkeydown={(e) => e.key === 'Escape' && close()}
		aria-label="Close menu"
	></div>

	<!-- Menu Panel -->
	<nav
		class="fixed top-0 right-0 bottom-0 z-100 w-[85%] max-w-sm bg-white shadow-2xl md:hidden"
		transition:fly={{x: '100%', duration: 300, opacity: 1}}
	>
		<div class="flex h-full flex-col">
			<!-- Header with Close Button -->
			<div class="flex items-center justify-end border-b border-gray-100 p-4">
				<button
					onclick={close}
					class="cursor-pointer rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100"
					aria-label="Close menu"
				>
					<X class="h-6 w-6" />
				</button>
			</div>

			<!-- Menu Items -->
			<div class="flex-1 overflow-y-auto px-4 py-6">
				<div class="space-y-2">
					{#each navigationData.links as link}
						{#if link.dropdown}
							<Accordion
								type="single"
								collapsible
								class="w-full border-none"
							>
								<AccordionItem
									value={link.label}
									class="border-none"
								>
									<AccordionTrigger
										class="rounded-lg px-4 py-3.5 text-base font-normal text-gray-900 hover:bg-gray-100 hover:no-underline"
									>
										{link.label}
									</AccordionTrigger>
									<AccordionContent>
										<div
											class="mt-1 ml-4 space-y-1 border-l-2 border-gray-200 pl-4"
										>
											{#each link.dropdown as item}
												<a
													href={item.href}
													class="block rounded-lg px-4 py-3 text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
													onclick={close}
												>
													{item.title}
												</a>
											{/each}
										</div>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						{:else}
							<a
								href={link.href}
								class="block rounded-lg px-4 py-3.5 text-gray-900 transition-colors hover:bg-gray-100"
								onclick={close}
							>
								{link.label}
							</a>
						{/if}
					{/each}
				</div>

				<!-- Contact Section -->
				<div class="mt-8 border-t border-gray-200 pt-6">
					<h3 class="mb-3 px-4 text-sm font-semibold text-gray-900">Kontakta oss</h3>
					<div class="space-y-2">
						{#each phoneNumbers as phone}
							<a
								href="tel:{phone.replace(/\s/g, '')}"
								class="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 transition-colors hover:bg-gray-100"
							>
								<Phone class="h-5 w-5 text-brand-primary" />
								<span>{phone}</span>
							</a>
						{/each}
						<a
							href="mailto:{email}"
							class="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-600 transition-colors hover:bg-gray-100"
						>
							<Mail class="h-5 w-5 text-brand-primary" />
							<span class="text-sm">{email}</span>
						</a>
					</div>
				</div>
			</div>

			<!-- CTA Button -->
			<div class="border-t border-gray-200 bg-gray-50 p-4">
				<button
					class="w-full rounded-lg bg-linear-to-r from-brand-primary to-brand-secondary px-6 py-4 text-white shadow-sm transition-opacity hover:opacity-90"
					onclick={() => {
						contactState.isOpen = true;
						close();
					}}
				>
					{navigationData.cta.label}
				</button>
			</div>
		</div>
	</nav>
{/if}

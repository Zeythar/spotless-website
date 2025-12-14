<script lang="ts">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from '$lib/components/ui/accordion';
	import {footerData} from '$lib/data/footer';
	import {Facebook, Instagram, Linkedin, Mail, Phone} from '@lucide/svelte';
	import Logo from './Logo.svelte';

	const currentYear = new Date().getFullYear();

	const iconMap = {
		Facebook,
		Instagram,
		Linkedin
	};
</script>

<footer class="bg-foreground text-gray-300">
	<div class="container mx-auto px-4 py-12">
		<div
			class="grid grid-cols-1 gap-8 md:grid-cols-2 md:justify-items-start lg:grid-cols-[1.5fr_1fr_1fr_1fr]"
		>
			<!-- Company Info -->
			<div class="w-full text-left md:max-w-none">
				<div class="mb-4 flex justify-start">
					<Logo white={true} />
				</div>
				<p class="mb-4 text-sm leading-relaxed">
					{footerData.companyInfo.description}
				</p>
			</div>

			<!-- Mobile Accordions -->
			<div class="w-full md:hidden">
				<Accordion
					type="single"
					collapsible
					class="w-full"
				>
					<AccordionItem
						value="pages"
						class="border-neutral-800"
					>
						<AccordionTrigger class="cursor-pointer text-white hover:no-underline">
							{footerData.sections.pages.title}
						</AccordionTrigger>
						<AccordionContent>
							<ul class="space-y-2">
								{#each footerData.sections.pages.links as link}
									<li>
										<a
											href={link.href}
											class="text-sm transition-colors hover:text-white"
										>
											{link.label}
										</a>
									</li>
								{/each}
							</ul>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem
						value="services"
						class="border-neutral-800"
					>
						<AccordionTrigger class="cursor-pointer text-white hover:no-underline">
							{footerData.sections.services.title}
						</AccordionTrigger>
						<AccordionContent>
							<ul class="space-y-2">
								{#each footerData.sections.services.links as link}
									<li>
										<a
											href={link.href}
											class="text-sm transition-colors hover:text-white"
										>
											{link.label}
										</a>
									</li>
								{/each}
							</ul>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem
						value="contact"
						class="border-b-0 border-neutral-800"
					>
						<AccordionTrigger class="cursor-pointer text-white hover:no-underline">
							{footerData.sections.contact.title}
						</AccordionTrigger>
						<AccordionContent>
							<ul class="space-y-4">
								<li class="flex items-center justify-start">
									<Phone class="mr-3 h-5 w-5 shrink-0 text-neutral-400" />
									<div class="flex flex-col gap-1">
										{#each footerData.sections.contact.phone.split(', ') as phone}
											<a
												href={`tel:${phone.replace(/\s/g, '')}`}
												class="text-sm hover:text-white"
											>
												{phone}
											</a>
										{/each}
									</div>
								</li>
								<li class="flex items-start justify-start">
									<Mail class="mt-1 mr-3 h-5 w-5 shrink-0 text-neutral-400" />
									<a
										href={footerData.sections.contact.emailLink}
										class="text-sm hover:text-white"
									>
										{footerData.sections.contact.email}
									</a>
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>

			<!-- Quick Links (Desktop) -->
			<nav
				class="hidden w-full md:block md:max-w-none md:text-left"
				aria-label="Snabblänkar"
			>
				<h3 class="mb-4 text-lg font-semibold text-white">
					{footerData.sections.pages.title}
				</h3>
				<ul class="space-y-2">
					{#each footerData.sections.pages.links as link}
						<li>
							<a
								href={link.href}
								class="text-sm transition-colors hover:text-white"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- Services (Desktop) -->
			<nav
				class="hidden w-full md:block md:max-w-none md:text-left"
				aria-label="Tjänster"
			>
				<h3 class="mb-4 text-lg font-semibold text-white">
					{footerData.sections.services.title}
				</h3>
				<ul class="space-y-2">
					{#each footerData.sections.services.links as link}
						<li>
							<a
								href={link.href}
								class="text-sm transition-colors hover:text-white"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- Contact Info (Desktop) -->
			<address class="hidden w-full not-italic md:block md:max-w-none md:text-left">
				<h3 class="mb-4 text-lg font-semibold text-white">
					{footerData.sections.contact.title}
				</h3>
				<ul class="space-y-4">
					<li class="flex items-center justify-start">
						<Phone class="mr-3 h-5 w-5 shrink-0 text-neutral-400" />
						<div class="flex flex-col gap-1">
							{#each footerData.sections.contact.phone.split(', ') as phone}
								<a
									href={`tel:${phone.replace(/\s/g, '')}`}
									class="text-sm hover:text-white"
								>
									{phone}
								</a>
							{/each}
						</div>
					</li>
					<li class="flex items-start justify-start">
						<Mail class="mt-1 mr-3 h-5 w-5 shrink-0 text-neutral-400" />
						<a
							href={footerData.sections.contact.emailLink}
							class="text-sm hover:text-white"
						>
							{footerData.sections.contact.email}
						</a>
					</li>
				</ul>
			</address>
		</div>

		<div class="mt-12 border-t border-neutral-800 pt-8 text-center text-sm">
			<p>{@html footerData.copyright(currentYear)}</p>
		</div>
	</div>
</footer>

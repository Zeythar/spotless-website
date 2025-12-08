<script lang="ts">
	import {Facebook, Instagram, Linkedin, Mail, MapPin, Phone} from '@lucide/svelte';
	import {footerData} from '$lib/data/footer';
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
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
			<!-- Company Info -->
			<div>
				<div class="mb-4">
					<Logo white={true} />
				</div>
				<p class="mb-4 text-sm leading-relaxed">
					{footerData.companyInfo.description}
				</p>
				<!-- <div class="flex space-x-4">
					{#each footerData.sections.contact.social as social}
						{@const Icon = iconMap[social.icon as keyof typeof iconMap]}
						<a
							href={social.href}
							class="text-neutral-400 transition-colors hover:text-white"
						>
							<span class="sr-only">{social.label}</span>
							<Icon class="h-6 w-6" />
						</a>
					{/each}
				</div> -->
			</div>

			<!-- Quick Links -->
			<div>
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
			</div>

			<!-- Services -->
			<div>
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
			</div>

			<!-- Contact Info -->
			<div>
				<h3 class="mb-4 text-lg font-semibold text-white">
					{footerData.sections.contact.title}
				</h3>
				<ul class="space-y-4">
					<li class="flex items-center">
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
					<li class="flex items-start">
						<Mail class="mt-1 mr-3 h-5 w-5 shrink-0 text-neutral-400" />
						<a
							href={footerData.sections.contact.emailLink}
							class="text-sm hover:text-white"
						>
							{footerData.sections.contact.email}
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-12 border-t border-neutral-800 pt-8 text-center text-sm">
			<p>{@html footerData.copyright(currentYear)}</p>
		</div>
	</div>
</footer>

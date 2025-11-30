<script lang="ts">
	import {
		NavigationMenuContent,
		NavigationMenuItem,
		NavigationMenuLink,
		NavigationMenuList,
		NavigationMenuRoot,
		NavigationMenuTrigger
	} from '$lib/components/ui/navigation-menu/index.js';
	import {navigationMenuTriggerStyle} from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import {Building, House, Info, Settings, SprayCan} from '@lucide/svelte';
	import {Button} from '../ui/button';
	import Logo from './Logo.svelte';
</script>

<header class="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur-sm">
	<div class="container mx-auto px-4 py-4">
		<div class="flex items-center justify-between">
			<Logo />

			<!-- Desktop Navigation -->

			<NavigationMenuRoot class="hidden items-center gap-6 md:flex">
				<NavigationMenuList class="gap-0">
					<NavigationMenuItem>
						<NavigationMenuLink>
							{#snippet child()}
								<a
									href="/"
									class="font-semibold {navigationMenuTriggerStyle()}">Hem</a
								>
							{/snippet}
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger class="cursor-pointer font-semibold"
							>Tjänster</NavigationMenuTrigger
						>
						<NavigationMenuContent>
							<ul class="grid w-[380px] gap-4 p-2">
								<li>
									<NavigationMenuLink
										href="/tjanster/hem-och-privatstadning"
										class="flex-row items-center gap-2"
									>
										<div class="rounded-lg bg-[#1a9bce] p-3">
											<House class="h-6! w-6! text-white" />
										</div>
										<div>
											<div class="text-base font-semibold">
												Hem- & Privatstädning
											</div>
											<div class="text-muted-foreground">
												För ett rent och trivsamt hem.
											</div>
										</div>
									</NavigationMenuLink>

									<NavigationMenuLink
										href="/tjanster/foretags-och-lokalstadning"
										class="flex-row items-center gap-2"
									>
										<div class="rounded-lg bg-[#1a9bce] p-3">
											<Building class="h-6! w-6! text-white" />
										</div>
										<div>
											<div class="text-base font-semibold">
												Företags- & Lokalstädning
											</div>
											<div class="text-muted-foreground">
												Ren och professionell arbetsmiljö.
											</div>
										</div>
									</NavigationMenuLink>

									<NavigationMenuLink
										href="/tjanster/specialstadning-och-sanering"
										class="flex-row items-center gap-2"
									>
										<div class="rounded-lg bg-[#1a9bce] p-3">
											<SprayCan class="h-6! w-6! text-white" />
										</div>
										<div>
											<div class="text-base font-semibold">
												Specialstädning & Sanering
											</div>
											<div class="text-muted-foreground">
												Flyttstäd, fönsterputs och specialuppdrag.
											</div>
										</div>
									</NavigationMenuLink>
									<NavigationMenuLink
										href="/tjanster/service-och-ovrigt"
										class="flex-row items-center gap-2"
									>
										<div class="rounded-lg bg-[#1a9bce] p-3">
											<Settings class="h-6! w-6! text-white" />
										</div>
										<div>
											<div class="text-base font-semibold">
												Service & Övrigt
											</div>
											<div class="text-muted-foreground">
												Flexibla lösningar och hushållsnära tjänster.
											</div>
										</div>
									</NavigationMenuLink>
								</li>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink>
							{#snippet child()}
								<a
									href="/varfor-oss"
									class="font-semibold {navigationMenuTriggerStyle()}"
									>Varför oss</a
								>
							{/snippet}
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink>
							{#snippet child()}
								<a
									href="/priser"
									class="font-semibold {navigationMenuTriggerStyle()}">Priser</a
								>
							{/snippet}
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink>
							{#snippet child()}
								<a
									href="/stadguide"
									class="font-semibold {navigationMenuTriggerStyle()}"
									>Städguide</a
								>
							{/snippet}
						</NavigationMenuLink>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuLink>
							{#snippet child()}
								<a
									href="/fragor-och-svar"
									class="font-semibold {navigationMenuTriggerStyle()}"
									>Frågor & Svar</a
								>
							{/snippet}
						</NavigationMenuLink>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Button
							class="ml-20 cursor-pointer bg-linear-to-r from-[#1a9bce] to-[#61c9b7] text-white transition-opacity hover:opacity-90"
							>Begär offert</Button
						>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenuRoot>
		</div>
	</div>
</header>

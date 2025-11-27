<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import {navigationMenuTriggerStyle} from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import {Building, House, Info, Settings, SprayCan} from '@lucide/svelte';
	import {Button} from '../ui/button';
</script>

<header class="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur-sm">
	<div class="container mx-auto px-4 py-4">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<button class="flex items-center gap-3">
				<div
					class="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-[#1a9bce] to-[#61c9b7]"
				>
					<span class="text-white">SN</span>
				</div>
				<div>
					<h4 class="text-[#1a9bce]">Spotless Norrland</h4>
				</div>
			</button>

			<!-- Desktop Navigation -->

			<NavigationMenu.Root class="hidden items-center gap-6 md:flex">
				<NavigationMenu.List class="gap-0">
					<NavigationMenu.Item>
						<NavigationMenu.Link>
							{#snippet child()}
								<a
									href="/"
									class="font-semibold {navigationMenuTriggerStyle()}">Hem</a
								>
							{/snippet}
						</NavigationMenu.Link>
					</NavigationMenu.Item>
					<NavigationMenu.Item>
						<NavigationMenu.Trigger class="cursor-pointer font-semibold"
							>Tjänster</NavigationMenu.Trigger
						>
						<NavigationMenu.Content>
							<ul class="grid w-[380px] gap-4 p-2">
								<li>
									<NavigationMenu.Link
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
									</NavigationMenu.Link>

									<NavigationMenu.Link
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
									</NavigationMenu.Link>

									<NavigationMenu.Link
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
									</NavigationMenu.Link>
									<NavigationMenu.Link
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
									</NavigationMenu.Link>
								</li>
							</ul>
						</NavigationMenu.Content>
					</NavigationMenu.Item>
					<NavigationMenu.Item>
						<NavigationMenu.Link>
							{#snippet child()}
								<a
									href="/varfor-oss"
									class="font-semibold {navigationMenuTriggerStyle()}"
									>Varför oss</a
								>
							{/snippet}
						</NavigationMenu.Link>
					</NavigationMenu.Item>
					<NavigationMenu.Item>
						<NavigationMenu.Link>
							{#snippet child()}
								<a
									href="/priser"
									class="font-semibold {navigationMenuTriggerStyle()}">Priser</a
								>
							{/snippet}
						</NavigationMenu.Link>
					</NavigationMenu.Item>
					<NavigationMenu.Item>
						<NavigationMenu.Link>
							{#snippet child()}
								<a
									href="/stadguide"
									class="font-semibold {navigationMenuTriggerStyle()}"
									>Städguide</a
								>
							{/snippet}
						</NavigationMenu.Link>
					</NavigationMenu.Item>

					<NavigationMenu.Item>
						<NavigationMenu.Link>
							{#snippet child()}
								<a
									href="/fragor-och-svar"
									class="font-semibold {navigationMenuTriggerStyle()}"
									>Frågor & Svar</a
								>
							{/snippet}
						</NavigationMenu.Link>
					</NavigationMenu.Item>

					<NavigationMenu.Item>
						<Button class="cursor-pointer font-semibold">Begär offert</Button>
					</NavigationMenu.Item>
				</NavigationMenu.List>
			</NavigationMenu.Root>
		</div>
	</div>
</header>

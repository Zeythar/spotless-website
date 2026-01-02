<script lang="ts">
	import Hamburger from '$lib/components/ui/hamburger/hamburger.svelte';
	import {
		NavigationMenuContent,
		NavigationMenuItem,
		NavigationMenuLink,
		NavigationMenuList,
		NavigationMenuRoot,
		NavigationMenuTrigger
	} from '$lib/components/ui/navigation-menu/index.js';
	import {navigationMenuTriggerStyle} from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import {navigationData} from '$lib/data/navigation';
	import {contactState} from '$lib/state/contact.svelte';
	import {Building, House, Settings, SprayCan} from '@lucide/svelte';
	import {Button} from '../ui/button';
	import Logo from './Logo.svelte';
	import MobileNav from './MobileNav.svelte';

	let {mobileNavOpen = $bindable(false)} = $props();

	const iconMap = {
		House,
		Building,
		SprayCan,
		Settings
	};
</script>

<header class="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur-sm">
	<div class="container mx-auto md:px-4 md:py-4">
		<div class="flex items-center justify-between">
			<div class="px-4 py-4 md:px-0 md:py-0">
				<Logo />
			</div>

			<!-- Desktop Navigation -->
			<NavigationMenuRoot class="hidden items-center gap-6 md:flex">
				<NavigationMenuList class="gap-0">
					{#each navigationData.links as link}
						<NavigationMenuItem>
							{#if link.dropdown}
								<NavigationMenuTrigger class="cursor-pointer font-semibold"
									>{link.label}</NavigationMenuTrigger
								>
								<NavigationMenuContent>
									<ul class="grid w-95 gap-4 p-2">
										<li>
											{#each link.dropdown as item}
												{@const Icon =
													iconMap[item.icon as keyof typeof iconMap]}
												<NavigationMenuLink
													href={item.href}
													class="flex-row items-center gap-2"
												>
													<div class="rounded-lg bg-brand-primary p-3">
														<Icon class="h-6! w-6! text-white" />
													</div>
													<div>
														<div class="text-base font-semibold">
															{item.title}
														</div>
														<div class="text-muted-foreground">
															{item.description}
														</div>
													</div>
												</NavigationMenuLink>
											{/each}
										</li>
									</ul>
								</NavigationMenuContent>
							{:else}
								<NavigationMenuLink>
									{#snippet child()}
										<a
											href={link.href}
											class="font-semibold {navigationMenuTriggerStyle()}"
											>{link.label}</a
										>
									{/snippet}
								</NavigationMenuLink>
							{/if}
						</NavigationMenuItem>
					{/each}

					<NavigationMenuItem>
						<Button
							class="ml-20 cursor-pointer bg-linear-to-r from-brand-primary to-brand-secondary text-white transition-opacity hover:opacity-90"
							onclick={() => (contactState.isOpen = true)}
						>
							{navigationData.cta.label}
						</Button>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenuRoot>

			<!-- Mobile Navigation -->
			<Hamburger
				class="aspect-square h-20 w-20 cursor-pointer md:hidden"
				bind:open={mobileNavOpen}
			/>
		</div>
	</div>
</header>

<MobileNav bind:open={mobileNavOpen} />

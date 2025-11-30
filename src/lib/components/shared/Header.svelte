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
	import {navigationData} from '$lib/data/navigation';

	const iconMap = {
		House,
		Building,
		SprayCan,
		Settings
	};
</script>

<header class="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur-sm">
	<div class="container mx-auto px-4 py-4">
		<div class="flex items-center justify-between">
			<Logo />

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
									<ul class="grid w-[380px] gap-4 p-2">
										<li>
											{#each link.dropdown as item}
												{@const Icon =
													iconMap[item.icon as keyof typeof iconMap]}
												<NavigationMenuLink
													href={item.href}
													class="flex-row items-center gap-2"
												>
													<div class="rounded-lg bg-[#1a9bce] p-3">
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
							class="ml-20 cursor-pointer bg-linear-to-r from-[#1a9bce] to-[#61c9b7] text-white transition-opacity hover:opacity-90"
							>{navigationData.cta.label}</Button
						>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenuRoot>
		</div>
	</div>
</header>

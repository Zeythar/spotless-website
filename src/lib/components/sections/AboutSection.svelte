<script lang="ts">
	import {Award, Clock, Shield, Users} from '@lucide/svelte';
	import {Image} from '$lib/components/ui/image';
	import {aboutData} from '$lib/data/home';

	const iconMap = {
		Award,
		Clock,
		Shield,
		Users
	};
</script>

<section
	id="about"
	class="py-20"
>
	<div class="container mx-auto px-4">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<!-- Image -->
			<div class="order-2 lg:order-1">
				<div class="relative">
					<div class="aspect-4/3 overflow-hidden rounded-2xl shadow-xl">
						<Image
							src={aboutData.image.src}
							alt={aboutData.image.alt}
							class="h-full w-full object-cover"
						/>
					</div>
					<!-- Decorative element -->
					<div
						class="absolute -top-6 -left-6 -z-10 h-64 w-64 rounded-2xl bg-linear-to-br from-brand-secondary to-brand-primary opacity-20"
					></div>
				</div>
			</div>

			<!-- Content -->
			<div class="order-1 space-y-6 lg:order-2">
				<div>
					<h2 class="mb-4 text-3xl font-medium lg:text-4xl">{aboutData.title}</h2>
					{#each aboutData.description as paragraph}
						<p class="mb-6 text-lg text-muted-foreground last:mb-0">
							{paragraph}
						</p>
					{/each}
				</div>

				<!-- Features Grid -->
				<div class="grid gap-6 pt-6 sm:grid-cols-2">
					{#each aboutData.features as feature}
						{@const Icon = iconMap[feature.icon as keyof typeof iconMap]}
						<div class="space-y-2">
							<div class="flex items-center gap-3">
								<div
									class="rounded-lg bg-linear-to-br from-brand-primary/20 to-brand-secondary/20 p-2"
								>
									<Icon class="h-5 w-5 text-brand-primary" />
								</div>
								<h4 class="font-medium">{feature.title}</h4>
							</div>
							<p class="pl-11 text-sm text-muted-foreground">
								{feature.description}
							</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

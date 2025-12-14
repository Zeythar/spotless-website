<script lang="ts">
	import {Button} from '$lib/components/ui/button';
	import {Image} from '$lib/components/ui/image';
	import {heroData} from '$lib/data/home';
	import {contactState} from '$lib/state/contact.svelte';
</script>

<section
	id="hero"
	class="relative overflow-hidden bg-linear-to-br from-brand-primary/10 to-brand-secondary/10"
>
	<div class="container mx-auto px-4 py-20 lg:py-32">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<!-- Content -->
			<div class="space-y-6">
				<h1 class="text-4xl font-medium lg:text-5xl xl:text-6xl">
					{heroData.title}
				</h1>
				<p class="max-w-xl text-lg text-muted-foreground">
					{heroData.description}
				</p>
				<div class="flex flex-col gap-4 sm:flex-row">
					<Button
						size="lg"
						class="bg-linear-to-r from-brand-primary to-brand-secondary text-white transition-opacity hover:opacity-90 cursor-pointer"
						onclick={() => (contactState.isOpen = true)}
					>
						{heroData.buttons.primary}
					</Button>
				</div>
			</div>

			<!-- Image -->
			<div class="relative">
				<div class="aspect-4/3 overflow-hidden rounded-2xl shadow-2xl">
					<Image
						src={heroData.image.src}
						alt={heroData.image.alt}
						class="h-full w-full object-cover"
						fetchpriority="high"
					/>
				</div>
				<!-- Decorative element -->
				<div
					class="absolute -right-6 -bottom-6 -z-10 h-64 w-64 rounded-2xl bg-linear-to-br from-brand-primary to-brand-secondary opacity-20"
				></div>
			</div>
		</div>
	</div>
</section>

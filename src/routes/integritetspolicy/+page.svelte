<script lang="ts">
	import Seo from '$lib/components/shared/Seo.svelte';
	import {privacyData} from '$lib/data/privacy';
	import {seoData} from '$lib/data/seo';
	import {BarChart3, Calendar, Cookie, Lock, Mail, Shield} from '@lucide/svelte';
</script>

<Seo
	title={seoData.privacy.title}
	description={seoData.privacy.description}
/>

<!-- Hero Section -->
<section
	class="relative overflow-hidden bg-linear-to-br from-brand-primary/10 to-brand-secondary/10"
>
	<div class="container mx-auto px-4 py-16 lg:py-24">
		<div class="max-w-3xl">
			<div
				class="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"
			>
				<Shield class="h-4 w-4 text-brand-primary" />
				<span class="text-sm font-medium">{privacyData.hero.badge}</span>
			</div>
			<h1 class="mb-4 text-4xl font-medium lg:text-5xl">
				{privacyData.hero.title}
			</h1>
			<p class="text-lg text-muted-foreground">
				{privacyData.hero.description}
			</p>
			<div class="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
				<Calendar class="h-4 w-4" />
				<span>{privacyData.hero.updated}</span>
			</div>
		</div>
	</div>
</section>

<!-- Main Content -->
<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-4xl">
			<!-- Introduction -->
			<div class="mb-12">
				<p class="text-lg text-muted-foreground">
					{privacyData.introduction}
				</p>
			</div>

			<!-- What are Cookies -->
			<div class="mb-12">
				<div class="mb-6 flex items-center gap-3">
					<div
						class="rounded-lg bg-linear-to-br from-brand-primary/20 to-brand-secondary/20 p-3"
					>
						<Cookie class="h-6 w-6 text-brand-primary" />
					</div>
					<h2 class="text-3xl font-medium">{privacyData.whatAreCookies.title}</h2>
				</div>
				<div class="space-y-4 text-muted-foreground">
					<p>
						{privacyData.whatAreCookies.description}
					</p>
				</div>
			</div>

			<!-- Cookies We Use -->
			<div class="mb-12">
				<h2 class="mb-8 text-3xl font-medium">{privacyData.cookiesWeUse.title}</h2>

				<div class="space-y-6">
					<!-- Essential Cookies -->
					<div class="rounded-xl border bg-card p-6 shadow-sm">
						<div class="mb-4 flex items-start justify-between gap-4">
							<div class="flex items-start gap-4">
								<div
									class="rounded-lg bg-linear-to-br from-brand-primary/20 to-brand-secondary/20 p-2"
								>
									<Shield class="h-5 w-5 text-brand-primary" />
								</div>
								<div class="flex-1">
									<div class="mb-2 flex items-center gap-2">
										<h3 class="font-semibold">
											{privacyData.cookiesWeUse.essential.title}
										</h3>
										<span
											class="rounded-full bg-linear-to-r from-brand-primary to-brand-secondary px-2 py-0.5 text-xs text-white"
										>
											{privacyData.cookiesWeUse.essential.badge}
										</span>
									</div>
									<p class="mb-4 text-sm text-muted-foreground">
										{privacyData.cookiesWeUse.essential.description}
									</p>
								</div>
							</div>
						</div>

						<div class="rounded-lg bg-muted/30 p-4">
							<h4 class="mb-3 font-medium">
								{privacyData.cookiesWeUse.essential.vercelBot.title}
							</h4>
							<div class="space-y-2 text-sm text-muted-foreground">
								<div class="flex gap-2">
									<span class="font-medium text-foreground">Syfte:</span>
									<span
										>{privacyData.cookiesWeUse.essential.vercelBot
											.purpose}</span
									>
								</div>
								<div class="flex gap-2">
									<span class="font-medium text-foreground">Leverantör:</span>
									<span
										>{privacyData.cookiesWeUse.essential.vercelBot
											.provider}</span
									>
								</div>
								<div class="flex gap-2">
									<span class="font-medium text-foreground">Cookies:</span>
									<span
										>{privacyData.cookiesWeUse.essential.vercelBot
											.cookies}</span
									>
								</div>
								<div class="flex gap-2">
									<span class="font-medium text-foreground">Varaktighet:</span>
									<span
										>{privacyData.cookiesWeUse.essential.vercelBot
											.duration}</span
									>
								</div>
								<div class="flex gap-2">
									<span class="font-medium text-foreground">Mer information:</span
									>
									<a
										href={privacyData.cookiesWeUse.essential.vercelBot
											.privacyUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="text-brand-primary hover:underline"
									>
										{privacyData.cookiesWeUse.essential.vercelBot.privacyLink}
									</a>
								</div>
							</div>
						</div>
					</div>

					<!-- Analytics Cookies -->
					<div class="rounded-xl border bg-card p-6 shadow-sm">
						<div class="mb-4 flex items-start justify-between gap-4">
							<div class="flex items-start gap-4">
								<div
									class="rounded-lg bg-linear-to-br from-brand-primary/20 to-brand-secondary/20 p-2"
								>
									<BarChart3 class="h-5 w-5 text-brand-primary" />
								</div>
								<div class="flex-1">
									<div class="mb-2 flex items-center gap-2">
										<h3 class="font-semibold">
											{privacyData.cookiesWeUse.analytics.title}
										</h3>
										<span
											class="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
										>
											{privacyData.cookiesWeUse.analytics.badge}
										</span>
									</div>
									<p class="mb-4 text-sm text-muted-foreground">
										{privacyData.cookiesWeUse.analytics.description}
									</p>
								</div>
							</div>
						</div>

						<div class="rounded-lg bg-muted/30 p-4">
							<h4 class="mb-3 font-medium">
								{privacyData.cookiesWeUse.analytics.google.title}
							</h4>
							<div class="space-y-2 text-sm text-muted-foreground">
								<div class="flex gap-2">
									<span class="font-medium text-foreground">Syfte:</span>
									<span>{privacyData.cookiesWeUse.analytics.google.purpose}</span>
								</div>
								<div class="flex gap-2">
									<span class="font-medium text-foreground">Leverantör:</span>
									<span>{privacyData.cookiesWeUse.analytics.google.provider}</span
									>
								</div>
								<div class="flex gap-2">
									<span class="font-medium text-foreground">Cookies:</span>
									<span>{privacyData.cookiesWeUse.analytics.google.cookies}</span>
								</div>
								<div class="flex gap-2">
									<span class="font-medium text-foreground">Varaktighet:</span>
									<span>{privacyData.cookiesWeUse.analytics.google.duration}</span
									>
								</div>
								<div class="flex gap-2">
									<span class="font-medium text-foreground"
										>Data som samlas in:</span
									>
									<span
										>{privacyData.cookiesWeUse.analytics.google
											.dataCollected}</span
									>
								</div>
								<div class="flex gap-2">
									<span class="font-medium text-foreground">Mer information:</span
									>
									<a
										href={privacyData.cookiesWeUse.analytics.google.cookieUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="text-brand-primary hover:underline"
									>
										{privacyData.cookiesWeUse.analytics.google.cookieLink}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Managing Cookies -->
			<div class="mb-12">
				<div class="mb-6 flex items-center gap-3">
					<div
						class="rounded-lg bg-linear-to-br from-brand-primary/20 to-brand-secondary/20 p-3"
					>
						<Lock class="h-6 w-6 text-brand-primary" />
					</div>
					<h2 class="text-3xl font-medium">{privacyData.managingCookies.title}</h2>
				</div>
				<div class="space-y-4 text-muted-foreground">
					<p>
						{privacyData.managingCookies.description}
					</p>
					<div class="pt-2">
						<button
							onclick={() => {
								localStorage.removeItem('cookie-consent');
								window.location.reload();
							}}
							class="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-md bg-linear-to-r from-brand-primary to-brand-secondary px-6 text-sm font-medium whitespace-nowrap text-white shadow-xs transition-opacity outline-none hover:opacity-90 focus-visible:ring-[3px] focus-visible:ring-ring/50"
						>
							{privacyData.managingCookies.button}
						</button>
					</div>
					<p class="pt-4">
						{privacyData.managingCookies.browserInfo}
					</p>
				</div>
			</div>

			<!-- Data Privacy -->
			<div class="mb-12 rounded-xl border bg-muted/30 p-6">
				<h2 class="mb-4 text-2xl font-medium">{privacyData.dataPrivacy.title}</h2>
				<div class="space-y-4 text-sm text-muted-foreground">
					<p>
						{privacyData.dataPrivacy.p1}
					</p>
					<p>
						{privacyData.dataPrivacy.p2}
					</p>
				</div>
			</div>

			<!-- Contact -->
			<div class="rounded-xl border bg-card p-6 shadow-sm">
				<div class="mb-4 flex items-center gap-3">
					<div
						class="rounded-lg bg-linear-to-br from-brand-primary/20 to-brand-secondary/20 p-2"
					>
						<Mail class="h-5 w-5 text-brand-primary" />
					</div>
					<h2 class="text-2xl font-medium">{privacyData.contact.title}</h2>
				</div>
				<p class="mb-4 text-muted-foreground">
					{privacyData.contact.description}
				</p>
				<div class="space-y-2 text-sm">
					<div class="flex gap-2">
						<span class="font-medium">E-post:</span>
						<a
							href="mailto:{privacyData.contact.email}"
							class="text-brand-primary hover:underline"
						>
							{privacyData.contact.email}
						</a>
					</div>
					<div class="flex gap-2">
						<span class="font-medium">Telefon:</span>
						<a
							href="tel:{privacyData.contact.phoneLink}"
							class="text-brand-primary hover:underline"
						>
							{privacyData.contact.phone}
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

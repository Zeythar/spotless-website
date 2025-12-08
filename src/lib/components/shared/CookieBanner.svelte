<script lang="ts">
	import {onMount} from 'svelte';
	import {X} from '@lucide/svelte';
	import {fade, fly} from 'svelte/transition';
	import {privacyData} from '$lib/data/privacy';

	let isVisible = $state(false);
	let showSettings = $state(false);
	let analyticsEnabled = $state(false);

	function gtag(...args: any[]) {
		if (typeof window !== 'undefined') {
			(window as any).dataLayer = (window as any).dataLayer || [];
			(window as any).dataLayer.push(args);
		}
	}

	function initializeConsentMode() {
		if (typeof window === 'undefined') return;

		// 1. Set Default Consent (Denied)
		gtag('consent', 'default', {
			ad_storage: 'denied',
			ad_user_data: 'denied',
			ad_personalization: 'denied',
			analytics_storage: 'denied'
		});

		// 2. Load Script (if not present)
		if (!document.getElementById('ga-script')) {
			const script = document.createElement('script');
			script.async = true;
			script.src = 'https://www.googletagmanager.com/gtag/js?id=G-32Y4BXHR32';
			script.id = 'ga-script';
			document.head.appendChild(script);

			// 3. Config
			gtag('js', new Date());
			gtag('config', 'G-32Y4BXHR32');
		}
	}

	function updateConsent(granted: boolean) {
		const status = granted ? 'granted' : 'denied';
		gtag('consent', 'update', {
			analytics_storage: status
		});
	}

	onMount(() => {
		// Initialize with default denied
		initializeConsentMode();

		const consent = localStorage.getItem('cookie-consent');
		if (!consent) {
			isVisible = true;
		} else {
			try {
				const parsed = JSON.parse(consent);
				if (parsed.analytics) {
					analyticsEnabled = true;
					updateConsent(true);
				}
			} catch (e) {
				// Invalid JSON, show banner
				isVisible = true;
			}
		}
	});

	const handleAcceptAll = () => {
		localStorage.setItem(
			'cookie-consent',
			JSON.stringify({
				essential: true,
				analytics: true,
				timestamp: new Date().toISOString()
			})
		);
		updateConsent(true);
		isVisible = false;
	};

	const handleRejectOptional = () => {
		localStorage.setItem(
			'cookie-consent',
			JSON.stringify({
				essential: true,
				analytics: false,
				timestamp: new Date().toISOString()
			})
		);
		updateConsent(false);
		isVisible = false;
	};

	const handleSavePreferences = () => {
		localStorage.setItem(
			'cookie-consent',
			JSON.stringify({
				essential: true,
				analytics: analyticsEnabled,
				timestamp: new Date().toISOString()
			})
		);
		updateConsent(analyticsEnabled);
		isVisible = false;
	};
</script>

{#if isVisible}
	<div
		class="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6"
		transition:fly={{y: 20, duration: 300}}
	>
		<div class="container mx-auto max-w-6xl">
			<div class="rounded-xl border bg-white shadow-2xl">
				<div class="p-6">
					{#if !showSettings}
						<div in:fade={{duration: 200}}>
							<div class="mb-4 flex items-start justify-between gap-4">
								<div>
									<h3 class="mb-2 font-semibold">{privacyData.banner.title}</h3>
									<p class="text-sm text-muted-foreground">
										{privacyData.banner.description}
									</p>
								</div>
								<button
									onclick={() => (isVisible = false)}
									class="shrink-0 cursor-pointer rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
									aria-label="Stäng"
								>
									<X class="h-4 w-4" />
								</button>
							</div>

							<div
								class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
							>
								<a
									href="/integritetspolicy"
									class="text-sm font-medium text-brand-primary hover:underline"
								>
									{privacyData.banner.links.policy}
								</a>

								<div class="flex flex-col gap-2 sm:flex-row">
									<button
										onclick={() => (showSettings = true)}
										class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium whitespace-nowrap shadow-xs transition-all outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
									>
										{privacyData.banner.buttons.customize}
									</button>
									<button
										onclick={handleRejectOptional}
										class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium whitespace-nowrap shadow-xs transition-all outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
									>
										{privacyData.banner.buttons.essential}
									</button>
									<button
										onclick={handleAcceptAll}
										class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md bg-linear-to-r from-brand-primary to-brand-secondary px-4 py-2 text-sm font-medium whitespace-nowrap text-white shadow-xs transition-opacity outline-none hover:opacity-90 focus-visible:ring-[3px] focus-visible:ring-ring/50"
									>
										{privacyData.banner.buttons.accept}
									</button>
								</div>
							</div>
						</div>
					{:else}
						<div in:fade={{duration: 200}}>
							<div class="mb-4 flex items-start justify-between gap-4">
								<h3 class="font-semibold">{privacyData.banner.settingsTitle}</h3>
								<button
									onclick={() => (showSettings = false)}
									class="shrink-0 rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
									aria-label="Tillbaka"
								>
									<X class="h-4 w-4" />
								</button>
							</div>

							<div class="space-y-4">
								<div class="rounded-lg border bg-muted/30 p-4">
									<div class="flex items-start justify-between gap-4">
										<div class="flex-1">
											<div class="mb-1 flex items-center gap-2">
												<h4 class="font-medium">
													{privacyData.banner.essentialTitle}
												</h4>
												<span
													class="rounded-full bg-linear-to-r from-brand-primary to-brand-secondary px-2 py-0.5 text-xs text-white"
												>
													{privacyData.banner.essentialBadge}
												</span>
											</div>
											<p class="text-sm text-muted-foreground">
												{privacyData.banner.essentialDesc}
											</p>
										</div>
										<div class="flex h-6 items-center">
											<div
												class="relative inline-flex h-6 w-11 items-center rounded-full bg-linear-to-r from-brand-primary to-brand-secondary opacity-50"
											>
												<span
													class="inline-block h-4 w-4 translate-x-6 transform rounded-full bg-white transition"
												></span>
											</div>
										</div>
									</div>
								</div>

								<div class="rounded-lg border p-4">
									<div class="flex items-start justify-between gap-4">
										<div class="flex-1">
											<h4 class="mb-1 font-medium">
												{privacyData.banner.analyticsTitle}
											</h4>
											<p class="text-sm text-muted-foreground">
												{privacyData.banner.analyticsDesc}
											</p>
										</div>
										<div class="flex h-6 items-center">
											<button
												type="button"
												aria-label="Analyscookies"
												onclick={() =>
													(analyticsEnabled = !analyticsEnabled)}
												class={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none ${
													analyticsEnabled
														? 'bg-linear-to-r from-brand-primary to-brand-secondary'
														: 'bg-input'
												}`}
												role="switch"
												aria-checked={analyticsEnabled}
											>
												<span
													class={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
														analyticsEnabled
															? 'translate-x-6'
															: 'translate-x-1'
													}`}
												></span>
											</button>
										</div>
									</div>
								</div>
							</div>

							<div class="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
								<button
									onclick={() => (showSettings = false)}
									class="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium whitespace-nowrap shadow-xs transition-all outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
								>
									{privacyData.banner.buttons.cancel}
								</button>
								<button
									onclick={handleSavePreferences}
									class="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-linear-to-r from-brand-primary to-brand-secondary px-4 py-2 text-sm font-medium whitespace-nowrap text-white shadow-xs transition-opacity outline-none hover:opacity-90 focus-visible:ring-[3px] focus-visible:ring-ring/50"
								>
									{privacyData.banner.buttons.save}
								</button>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

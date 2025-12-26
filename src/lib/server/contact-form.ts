import {MAILGUN_API_KEY, MAILGUN_DOMAIN} from '$env/static/private';
import {contactData} from '$lib/data/contact';
import {formSchema} from '$lib/schema';
import type {RequestEvent} from '@sveltejs/kit';
import {fail} from '@sveltejs/kit';
import {checkBotId} from 'botid/server';
import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import {superValidate} from 'sveltekit-superforms';
import {zod4} from 'sveltekit-superforms/adapters';

export const loadContactForm = async () => {
	return {
		form: await superValidate(zod4(formSchema))
	};
};

export const handleContactForm = async (event: RequestEvent) => {
	const form = await superValidate(event, zod4(formSchema));
	if (!form.valid) {
		return fail(400, {
			form
		});
	}

	// Vercel Bot Protection
	const botVerification = await checkBotId({
		advancedOptions: {
			headers: Object.fromEntries(event.request.headers)
		}
	});
	if (botVerification.isBot) {
		console.log('Vercel Bot detected');
		return fail(400, {
			form,
			error: 'Bot detected'
		});
	}

	const mailgun = new Mailgun(FormData);
	const mg = mailgun.client({
		username: 'api',
		key: MAILGUN_API_KEY,
		url: 'https://api.eu.mailgun.net'
	});

	try {
		const {name, email, phone, service, message, confirmEmail} = form.data;

		// Honeypot check
		if (confirmEmail) {
			console.log('Honeypot triggered, ignoring submission');
			return {
				form
			};
		}

		const serviceLabel =
			contactData.form.fields.service.options?.find((o) => o.value === service)?.label ||
			service;

		await mg.messages.create(MAILGUN_DOMAIN, {
			from: `Spotless Städ & Service <noreply@${MAILGUN_DOMAIN}>`,
			to: ['Lina Nilsson <info@spotlessnorrland.se>'],
			subject: `Nytt kundmeddelande från spotlessnorrland.se`,
			text: `
Namn: ${name}
Email: ${email}
Telefon: ${phone}
Tjänst: ${serviceLabel}

Meddelande:
${message}
			`,
			html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6;">
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    
    <!-- Header -->
    <div style="background: linear-gradient(to right, #1a9bce, #61c9b7); padding: 40px 30px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
        Nytt kundmeddelande
      </h1>
      <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 16px;">
        från spotlessnorrland.se
      </p>
    </div>

    <!-- Content -->
    <div style="padding: 40px 30px; background-color: #ffffff;">
      
      <!-- Info Box -->
      <div style="background-color: #f8f9fa; border-left: 4px solid #1a9bce; padding: 20px; margin-bottom: 30px; border-radius: 4px;">
        <p style="margin: 0; font-size: 14px; color: #6b7280;">
          Du har fått en ny kontaktförfrågan via webbplatsen. Här är detaljerna:
        </p>
      </div>

      <!-- Contact Details -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
        
        <!-- Name -->
        <tr>
          <td style="padding-bottom: 24px; border-bottom: 1px solid #e5e7eb;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="vertical-align: top;">
                  <p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                    NAMN
                  </p>
                  <p style="margin: 0; font-size: 16px; color: #111827; font-weight: 500;">
                    ${name}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <tr><td style="height: 24px;"></td></tr>
        
        <!-- Email -->
        <tr>
          <td style="padding-bottom: 24px; border-bottom: 1px solid #e5e7eb;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="vertical-align: top;">
                  <p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                    E-POST
                  </p>
                  <a href="mailto:${email}" style="margin: 0; font-size: 16px; color: #1a9bce; font-weight: 500; text-decoration: none;">
                    ${email}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <tr><td style="height: 24px;"></td></tr>
        
        <!-- Phone -->
        <tr>
          <td style="padding-bottom: 24px; border-bottom: 1px solid #e5e7eb;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="vertical-align: top;">
                  <p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                    TELEFON
                  </p>
                  <a href="tel:${phone}" style="margin: 0; font-size: 16px; color: #1a9bce; font-weight: 500; text-decoration: none;">
                    ${phone}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <tr><td style="height: 24px;"></td></tr>
        
        <!-- Service -->
        <tr>
          <td style="padding-bottom: 24px; border-bottom: 1px solid #e5e7eb;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="vertical-align: top;">
                  <p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                    TJÄNST
                  </p>
                  <p style="margin: 0; font-size: 16px; color: #111827; font-weight: 500;">
                    ${serviceLabel}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <tr><td style="height: 24px;"></td></tr>
        
        <!-- Message -->
        <tr>
          <td>
            <table cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="vertical-align: top;">
                  <p style="margin: 0 0 8px 0; font-size: 12px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                    MEDDELANDE
                  </p>
                  <div style="background-color: #f8f9fa; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
                    <p style="margin: 0; font-size: 15px; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <!-- CTA Button -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 40px;">
        <tr>
          <td align="center">
            <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(to right, #1a9bce, #61c9b7); color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 16px; font-weight: 600;">
              Svara på förfrågan
            </a>
          </td>
        </tr>
      </table>
    </div>

    <!-- Footer -->
    <div style="background-color: #1f2937; padding: 30px; text-align: center;">
      <p style="margin: 0 0 8px 0; font-size: 14px; color: #9ca3af;">
        Detta meddelande skickades automatiskt från
      </p>
      <p style="margin: 0 0 20px 0; font-size: 16px; color: #ffffff; font-weight: 600;">
        Spotless Städ & Service
      </p>
      <div style="border-top: 1px solid #374151; padding-top: 20px; margin-top: 20px;">
        <p style="margin: 0 0 8px 0; font-size: 13px; color: #9ca3af;">
          <a href="tel:0702451790" style="color: #9ca3af; text-decoration: none;">070-245 17 90</a>, <a href="tel:0735686467" style="color: #9ca3af; text-decoration: none;">073-568 64 67</a>
        </p>
        <p style="margin: 0; font-size: 13px; color: #9ca3af;">
          <a href="mailto:info@spotlessnorrland.se" style="color: #9ca3af; text-decoration: none;">info@spotlessnorrland.se</a>
        </p>
      </div>
    </div>
  </div>
</body>
</html>
			`
		});
	} catch (error) {
		console.error('Mailgun error:', error);
		return fail(500, {
			form,
			error: 'Kunde inte skicka meddelandet. Försök igen senare.'
		});
	}

	console.log('Form submitted:', form.data);
	return {
		form
	};
};

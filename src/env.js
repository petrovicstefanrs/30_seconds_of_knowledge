const env = {
	developer_website_url: 'https://www.petrovicstefan.rs/',
	extension_website_url: 'https://30secondsofknowledge.com',
	donation_url: 'https://www.paypal.me/petrovicstefan/1',
	merch_url: 'https://teespring.com/stores/30-seconds-of-knowledge',
	newsletter_url: 'http://eepurl.com/giRHzP',
	donation_beggar: {
		trigger_count: 1000, // Donation popup will appear every N times the New Tab was oppened
		beggar_message:
			"Help feed this developer's coffee addiction! Checkout our merch or consider making a small donation.",
	},
	active_platform: process.env.TARGET,
};

export default env;

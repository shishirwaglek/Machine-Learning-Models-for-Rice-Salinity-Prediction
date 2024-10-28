// Function to fetch API keys from the backend
async function getApiKeys() {
	try {
		// Fetch each key from the backend
		const userIdResponse = await fetch('/email-js-user-id');
		const serviceIdResponse = await fetch('/get-service-id');
		const templateIdResponse = await fetch('/get-template-id');

		// Parse the JSON responses
		const userIdData = await userIdResponse.json();
		const serviceIdData = await serviceIdResponse.json();
		const templateIdData = await templateIdResponse.json();

		// Extract API keys
		const userId = userIdData.user_id;
		const serviceId = serviceIdData.service_id;
		const templateId = templateIdData.template_id;

		// Initialize EmailJS with the User ID
		emailjs.init(userId);

		return { serviceId, templateId };
	} catch (error) {
		console.error('Error fetching API keys:', error);
		return null;
	}
}

// Function to send the email using EmailJS
async function sendEmail() {
	const keys = await getApiKeys();
	if (!keys) return; // Stop if keys couldn't be fetched

	// Collect form data
	const subject = document.querySelector('.subject').value;
	const message = document.querySelector('.msg').value;
	const email = document.querySelector('.email').value;

	// Send the email
	emailjs
		.send(keys.serviceId, keys.templateId, {
			subject: subject,
			message: message,
			email: email,
		})
		.then((response) => {
			alert('Email sent successfully! \nWe will get back to you soon.');
		})
		.catch((error) => {
			alert('Failed to send email: ' + JSON.stringify(error));
		});
}

// Add event listener to the form
document.getElementById('emailjs').addEventListener('submit', function (event) {
	event.preventDefault(); // Prevent form submission
	sendEmail();
});

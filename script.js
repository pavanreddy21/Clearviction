const form = document.getElementById('submitForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const githubRepoUrl = document.getElementById('githubRepoUrl').value;

  const response = await fetch('https://7pu263mpcarw3lhazop5ec7u7e0bclzu.lambda-url.us-east-1.on.aws/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, githubRepoUrl }),
  });

  if (response.ok) {
    alert('Form submitted successfully! We will be in touch.');
  } else {
    alert('Form submission failed. Please try again later.');
  }
});

window.addEventListener('load', () => {
  const form = document.querySelector('#contact-form');
  form.addEventListener('submit', async e => {
    e.preventDefault();

    const data = new FormData(form);
    const url = e.target.action;

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: data
      });
      const result = await response.json();
      alert('Message sent.');
      e.target.reset();
    } catch (error) {
      alert('Message submission failed. Please contact the webmaster at <engelmann.mark@gmail.com>.');
    }
  });
});
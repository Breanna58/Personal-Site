console.log("Hello World")

document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
  
      // Hide all tab content
      document.querySelectorAll('.tab-cont').forEach(tab => {
        tab.style.display = 'none';
      });
  
      // Show the clicked tab
      document.getElementById(targetTab).style.display = 'block';
  
      // Optional: Update active button style
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      button.classList.add('active');
    });
  });
  

  document.getElementById('myForm').addEventListener('submit', function (event) {
    // Prevent the default form submission (page reload)
    event.preventDefault();
  
    // Get the input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
  
    // Check if the inputs are not empty
    if (name && email) {
      // Redirect to the success page with query parameters
      window.location.href = `success.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
    } else {
      alert('Please fill in all fields!');
    }
  });
  const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/success.html'
})





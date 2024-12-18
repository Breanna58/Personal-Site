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
  









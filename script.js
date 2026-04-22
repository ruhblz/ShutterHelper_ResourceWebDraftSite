// JavaScript file

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.grid img');
  
  images.forEach(img => {
    // Create caption div
    const caption = document.createElement('div');
    caption.className = 'caption';
    caption.style.display = 'none';
    caption.textContent = img.alt;
    
    // Insert caption after image
    img.parentNode.insertBefore(caption, img.nextSibling);
    
    // Add click event
    img.addEventListener('click', function() {
      caption.style.display = caption.style.display === 'none' ? 'block' : 'none';
    });
  });
});
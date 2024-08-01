document.write(`
    <ul class="navbar">
        <li><a href="index.html" style="color: #023436;">Home</a></li>
        <li><a href="games.html" style="color: #023436;">Games</a></li>
        <li><a href="anime.html" style="color: #023436;">Anime Interests</a></li>
        <li><a href="codepractice.html" style="color: #023436;">Code Projects</a></li>
        <li><a href="contactme.html" style="color: #023436;">Contact Me</a></li>
        <li><a href="about_me.html" style="color: #023436;">About Me</a></li>
        <li><a href="blog.html" style="color: #023436;">Blog</a></li>
    </ul>
  `);
  
  $(document).ready(function() {
      $('a').each(function() {
          if ($(this).prop('href') == window.location.href) {
              $(this).addClass('active');
              $(this).parents('li').addClass('active');
          }
      });
  });
Put your real photos in this folder, then swap each gray placeholder box for an image.

Look for the comments that say SWAP in the HTML files. Example:

  <!-- SWAP: <img src="img/hero.jpg" alt="..."> -->
  <div class="ph" ...><span>PHOTO: ...</span></div>

Replace the whole <div class="ph"> line with an <img> tag. Give it a style like:
  style="flex:1 1 380px;min-width:0;height:380px;object-fit:cover;max-width:100%"

Suggested file names: hero.jpg, locker.jpg, team.jpg, map.png
Always write a short alt description for each image.

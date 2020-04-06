+++
# Hero widget.
widget = "hero_center"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 10  # Order that this section will appear.

# title = "Love You Forms"

# Hero image (optional). Enter filename of an image in the `static/img/` folder.
hero_media = "logo-text-red.svg"
border_bottom = true

[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.

  # Background color -- Forces this color for both light and dark theme
  # color = "#282c34"
  # color = "#fff"

  # Background gradient.
  # gradient_start = "#4bb4e3"
  # gradient_end = "#2b94c3"
  
  # Background image.
  # image = ""  # Name of image in `static/img/`.
  # image_darken = 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
  # image_size = "cover"  #  Options are `cover` (default), `contain`, or `actual` size.
  # image_position = "center"  # Options include `left`, `center` (default), or `right`.
  # image_parallax = true  # Use a fun parallax-like fixed background effect? true/false
  
  # Text color (true=light or false=dark).
  text_color_light = false

# Call to action links (optional).
#   Display link(s) by specifying a URL and label below. Icon is optional for `[cta]`.
#   Remove a link/note by deleting a cta/note block.
[cta]
  url = "/docs"
  label = "Get Started"
  #icon_pack = "fas"
  #icon = "download"
  
#[cta_alt#]
  #url = "https://sourcethemes.com/academic/"
  #label = "View Documentation"

# Note. An optional note to show underneath the links.
[cta_note]
  #label = '<a class="js-github-release" href="https://sourcethemes.com/academic/updates" data-repo="gcushen/hugo-academic">Latest release<!-- V --></a>'
+++

<div class="hero-title-1">A JavaScript cloud app to manage form submissions for one site or 1,000</div>

<p class="hero-text">(static sites love this app)</p>

<p class="hero-title-2"><strong><u>Google Sheets Sync</u> + <u>Email Notifications</u></strong></p>

<span class="hero-text">Built with: <u>Firebase</u>, <u>Google Sheets</u>, and your <u>favorite SMTP email provider</u></span>

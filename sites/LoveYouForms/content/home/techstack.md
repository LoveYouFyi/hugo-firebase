+++
# A Skills section created with the Featurette widget.
widget = "featurette"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 15  # Order that this section will appear.

#title = "Stack"
#subtitle = ""
align_left = true
border_bottom = true

# Showcase personal skills or business features.
# 
# Add/remove as many `[[feature]]` blocks below as you like.
# 
# For available icons, see: https://sourcethemes.com/academic/docs/page-builder/#icons

[[feature]]
  # icon = "r-project"
  # icon_pack = "fab"
  name = "Firebase"
  description = "Database/Firestore receives form submissions which are handled by cloud functions"
  
[[feature]]
  # icon = "chart-line"
  # icon_pack = "fas"
  name = "Google Sheets Sync"
  description = "Firebase cloud functions listens for new database entries and sends them to google sheets. Use Google Sheets to view form submissions. One sheet per app, with a new spreadsheet &#40;tab&#41; for each form type."
  
[[feature]]
  # icon = "camera-retro"
  # icon_pack = "fas"
  name = "Email Notifications"
  description = "Firebase uses SMTP Email Provider API such as sendgrid to send you emails with form contents"

+++

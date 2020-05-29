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
  name = "Firebase Database &amp; Functions"
  description = "Node.js cloud functions handle server-side logic.  Functions handle form submissions and save them to the database;  listen for new records to sync form data to Google Sheets; and send email notifications with form data."
  
[[feature]]
  # icon = "chart-line"
  # icon_pack = "fas"
  name = "Google Sheets Sync"
  description = "Firebase cloud function listens for new database entries and sends them to google sheets. Use Google Sheets to view form submissions. One sheet per app, with a new spreadsheet/tab for each form template."
  
[[feature]]
  # icon = "camera-retro"
  # icon_pack = "fas"
  name = "Email Notifications & Spam Filter"
  description = "Firebase uses your SMTP Email Provider API (such as Sendgrid) to send emails with form data. Spam is optionally filtered with Akismet which is free for non-commercial sites and paid for professional or commercial sites."

+++

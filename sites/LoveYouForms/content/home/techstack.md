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
  description = "Node.js cloud functions handle form submissions which they save to the Firestore database. Cloud functions listen for new records and sync form data to Google Sheets and send email notifications containing the form data."
  
[[feature]]
  # icon = "chart-line"
  # icon_pack = "fas"
  name = "Google Sheets Sync"
  description = "Firebase cloud functions listens for new database entries and sends them to google sheets. Use Google Sheets to view form submissions. One sheet per app, with a new spreadsheet/tab for each form type."
  
[[feature]]
  # icon = "camera-retro"
  # icon_pack = "fas"
  name = "Email Notifications & Spam Filter"
  description = "Firebase uses your SMTP Email Provider API (such as Sendgrid) to send emails with form data. Spam is optionally filtered with Akismet which is free for non-commercial sites and paid for professional or commercial sites."

+++

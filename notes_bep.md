

See esp. the comments in siteA/config.toml.

Note that I don't suggest that your final site should look like this; I know nothing about your end product. But I felt it was easier to discuss this with something running. https://github.com/bep/hugo-bulma-hero is a work in progress, but use it if you please.

Summary:

* Eeach site is a Hugo Module (they have a go.mod). This is needed to pull in modules from GitHub etc. See the module imports in siteA.
* I have added a common modules below /theme to add some common params.
* In siteB/assets/scss/_hero_variables.scss I have adjusted some colors and changed font.

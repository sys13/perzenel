# Your Personal Website in Meteor

## Features
- projects
- links (to your LinkedIn, GitHub, etc.)
- about
- blog (provided by the package - [ryw:blog](https://atmospherejs.com/ryw/blog))
- admin (provided by the package  [yogiben:admin](https://atmospherejs.com/yogiben/admin))

## How to Use It

1. Make sure you have Meteor installed - [MeteorJS](https://meteorjs.com)
1. Copy the settings_dev.json and call it settings_prod.json
1. Create a Google Analytics account at [https://www.google.com/analytics/](https://www.google.com/analytics/) - note this for the ga section of your settings files
1. Edit settings_prod.json with your own information
1. Add your location info to settings_prod.js by copying embed code from maps.google.comm
1. (optional) Edit the favicon in public/favicon and client/main.html
1. Run it locally with 'meteor --settings settings_dev.json'
1. Change the site names in deploy.sh
1. Deploy it with: 'sh ./deploy prod'
1. Sign in to your website at /signin (default password is wwwwww)
1. Change your password at /admin/Users > edit > change password
1. Add projects and links at /admin
1. Add blog articles at /admin/blog
1. Share it with everyone!

## Tips

- If you go to the admin page and it says 'You need to be an admin to view this page' first sign in at /signin
- Your settings file can't contain spaces, otherwise meteor will think it's not valid JSON
- Diqsus isn't working for me. Either I'm doing something wrong or there's something wrong with [ryw:blog](https://atmospherejs.com/ryw/blog)
- For the favicon I used this [site](http://www.favicon-generator.org/)
- if an embed isn't working, you may need to edit the browser-policy in server/lib/settings.js
- if text in your projects doesn't look right, use the clear formatting button, or remove all the stuff you don't need in the HTML view

## Creator

Created by [Daniel Arrizza](http://danielarrizza.com) for his own personal website. One day, he got fed up with WordPress and decided to Meteor on ahead!

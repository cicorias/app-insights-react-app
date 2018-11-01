# Demo of using React and Application Insights

- react build packs `process.env....` into the bundle - that won't work if you've Dockerized the build and don't want to rerun build at deployment time - quite frankly that's a waste of time.  In addition, a single image having precisely the same bits prebuilt ensure no variations as it's promoted from local, to Dev, staging, production, etc.
- while using ENV variables client side would be nice, we can't control them. So, we use the ENV variables of the Origin server, adding a simple API endpoint to offer up some miniscule `config.json` that the React app can `GET /config.json` - then use the settings as neeed.  


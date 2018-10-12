# Node.js API

## To deploy on Heroku

### Step to connect a database online
- Create a new "free" DB on mlab.com
- Add a database user
- Copy the the URI using the database user credentials
- Config Heroku using: ```heroku config:set MONGODB_URI="URI"```

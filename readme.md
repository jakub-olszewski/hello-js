
# Hello JS


## Step 0: Init

`npm install`

Generate documentation use esDocs

## Step 1: Install ESDoc
Install ESDoc globally by running the following command in your terminal or command prompt:

`npm install esdoc esdoc-standard-plugin`



## Step 2: Configure ESDoc
Create a configuration file named **.esdoc.json** in your project directory. Open it in a text editor and add the following configuration:

```javascript
{
  "source": "./src",
  "destination": "./docs",
  "plugins": [
    {"name": "esdoc-standard-plugin"}
  ]
}
```

## Step 3: Generate Documentation
In your terminal or command prompt, navigate to your project directory and run the following command:

`./node_modules/.bin/esdoc`

# htmx69
Playing with HTMX

Before we begin, you must have nodeJS installed

---

First thing you need to do is setup a packageJson
<br>
```
npm init -y
```
<br>
Once you have create a packageJson, we will need to install express
<br>

```
npm i express
```
<br>

**Note: I would add a .gitignore file for your node_modules if you plan to save your experiment to github**

<br>

You can install nodemon if you would like, but I like to use the node built in feature called:

```bash
node --watch server.js
```

There are serval ways to install HTMX, but the easiest way is to use the CDN tags in your header:

```
<script src="https://unpkg.com/htmx.org@1.9.12" integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2" crossorigin="anonymous"></script>
```
<br>


# ZeppelinHub Documentation

## 1. Install Mkdocs
ZeppelinHub Documentation is made by [Mkdocs](http://www.mkdocs.org/). So you need to [install mkdocs](http://www.mkdocs.org/#installation). In order to install MkDocs, you'll need [Python](https://www.python.org/) installed on your system, as well as the Python package manager, [pip](https://pip.pypa.io/en/stable/). You can check if you have these already installed like so:  MkDocs supports Python 2.6, 2.7, 3.3 and 3.4.

```
$ python --version
Python 2.6.x
$ pip --version
pip 1.5.X
```

Install the mkdocs package using pip:

```
$ pip install mkdocs
```

## 2. Clone this repository
Just clone this repository.

## 3. How to add a new documentation page?
This is the directory structure of this repository.

```
    |-- zeppelinhub-documentation
    |   |-- docs
    |       |-- CNAME
    |       |-- css
    |       |-- js
    |       |-- img
    |       |-- favicon.ico
    |       |-- index.md
    |       |-- *.md
    |   |-- custom_theme
            |-- *.html
            |-- __init__.py
            |-- css
            |-- img
            |-- js
            |-- fonts
            |-- license
    |   |-- mkdocs.yml
    |   |-- README.md

```

* `/mkdocs.yml` : All of the configuration properties will be defined in this file.
* `/docs` : Under this directory, css file, image files for docs and all of the `.md` files are located in this directory.
* `/docs/CNAME` : Using this file, you can define the domain name: [http://help.zeppelinhub.com](http://help.zeppelinhub.com).
* `/docs/css/extra.css`, `/docs/js/extra.js` : You can define extra CSS and javascript function in these directory.
* `/docs/img/*.png` : You can put all of the image file used for documentation files.
* `/docs/favicon.ico` : This file will make favicon image to the browser tab. 
* `/docs/index.md` : `index.md` file will make [Home Page](http://help.zeppelinhub.com/) of this site. ( Actually, It's a convetion name of Mkdocs. )
* `/docs/*.md` : All of the markdown(documentation) files will be located.
* `/custom-theme/` : All of components related with site theme are located in this directory.  
* `/custom-theme/__init__.py` : This python file helps this directory to be recognized as a part of this package.
* `/custom-theme/*.html` : All of the html files composing theme components are located.
* `/custom-theme/css/*.css` : If you want to customize theme, modify `theme-extra.css` file.
* `/custom-theme/js/*.js` : All of javascript files related with theme actions are located in this directory.

If you want to add a new file, just locate the new `.md` file under `/docs` and add some information about the docs to the <code>[mkdocs.yml](https://github.com/NFLabs/zeppelinhub-documentation/blob/master/mkdocs.yml)</code>. 

## 4. Build and deploy the site

MkDocs comes with a built-in webserver that lets you preview your documentation as you work on it. Start the webserver by making sure you are in the same directory as the `mkdocs.yml` config file, and then running the mkdocs serve command:

```
$ mkdocs serve
Running at: http://127.0.0.1:8000/
```
Then you can check your change in realtime at [http://127.0.0.1:8000](http://127.0.0.1:8000).

Before the deployment, build the site for making sure there is no errors. `--clean` option enables to remove any stale files.

```
$ mkdocs build --clean
```

After then, let's deploy it to ZeppelinHub Documentation site.

```
$ mkdocs gh-deploy --clean
```

# Documentation URL
After complete the deploy, you can see the final result.
[http://help.zeppelinhub.com/](http://help.zeppelinhub.com/) 

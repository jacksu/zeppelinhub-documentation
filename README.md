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
    |-- home
    |   |-- docs
    |       |-- css
    |           |--extra.css
    |       |-- js
    |           |--extra.js
    |       |-- img
    |       |-- favicon.ico
    |       |-- index.md
    |       |-- *.md
    |   |-- site
    |   |-- mkdocs.yml
    |   |-- README.md

```

* `/home/docs` : Under this directory, css file, image files for docs and all of the `.md` files are located.
* `/home/docs/index.md` : `index.md` file define a [Home page](http://nflabs.github.io/zeppelinhub-documentation/). ( Actually, It's a convetion name of Mkdocs. )
* `home/site` : The build result will be saved under this directory.
* `home/mkdocs.yml` : It's a config file. Site name, documentation list structure and etc etc are configured in this file. 

If you want to add a new file, just locate a new `.md` file under `/docs` and add this file information to the <code>[mkdocs.yml](https://github.com/NFLabs/zeppelinhub-documentation/blob/master/mkdocs.yml)</code>.


## 4. Build and deploy the site


MkDocs comes with a built-in webserver that lets you preview your documentation as you work on it. Start the webserver by making sure you are in the same directory as the `mkdocs.yml` config file, and then running the mkdocs serve command:

```
$ mkdocs serve
Running at: http://127.0.0.1:8000/
```

Before the deployment, build the site for making sure there is no errors. `--clean` option enables to remove any stale files.

```
$ mkdocs build --clean
```

After then, deploy it to the site.

```
$ mkdocs gh-deploy --clean
```

# Documentation URL
After complete the deploy, you can see the final result. 
[http://help.zeppelinhub.com/](http://help.zeppelinhub.com/) 

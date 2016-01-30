---
  title: Zeppelin integration with ZeppelinHub
---

# Zeppelin integration with ZeppelinHub

This section explains how you could seamlessly connect your Zeppelin instance to your ZeppelinHub account.

<br/>
### Download integration library

First of all, you need to download the integration library from <a href="https://s3-ap-northeast-1.amazonaws.com/zeppel.in/integration-modules/zeppelinhub-integration-v0.3.2-all.jar">here</a>.

Put the integration library into `lib` folder under your Zeppelin installation directory.
If you don't have `lib` folder, create one.

<br/>
### Sign up and Token creation
Secondly you need to register for a ZeppelinHub account to obtain a Token. Once registered and logged in, you can [add an Instance](zeppelin_instances.html "Tokens"), and use that generated Token (long string) to connect your Zeppelin instance to your ZeppelinHub account in the following steps.

<br/>
### Zeppelin environment configuration

Now we can connect Zeppelin to your ZeppelinHub account by inserting the following environment variables into your `conf/zeppelin-env.sh` file in Zeppelin installation directory. If the file doesn't exist, create it from `conf/zeppelin-env.sh.template`.

```
export ZEPPELIN_NOTEBOOK_STORAGE="org.apache.zeppelin.notebook.repo.VFSNotebookRepo, com.nflabs.zeppelinhub.notebook.repo.ZeppelinHubRepo"
export ZEPPELINHUB_API_ADDRESS="https://www.zeppelinhub.com"
export ZEPPELINHUB_API_TOKEN="YOUR_TOKEN_STRING"
```
Now you can `start/restart` Zeppelin!

# comprehensive testing with javascript workshop

[#testing4good](https://twitter.com/hashtag/Testing4Good)

In this workshop you will learn the latest and greatest tools and techniques to improve your ability to test modern web applications.

You will focus on a holistic approach of testing front-end, APIs, and back-end.

You will analyze risks and prevent those risks with functional testing, api testing, visual testing and a lot more 💪

## 🧠 You will learn

✅API testing w/ Cypress

✅how to test a React web app using different types of tests

✅E2E ui tests w/ Cypress

✅visual cross-browser + cross-platform tests

✅CICD with Github Actions

## 🔧Technologies you will use

1. ReactJS
2. Cypress
3. WebdriverIO
4. Screener.io
5. Sauce Labs
6. Github Actions

## Table Of Contents

- [API Testing](./docs/API.md)
- [E2E UI testing w/ Cypress](./docs/E2E-TESTS.md)
- [Visual e2e testing](./docs/VISUAL.md)
- [CICD](./my-react-app/docs/CICD.md)
- [Conclusions](./docs/CONCLUSIONS.md)

## Key

💡 this is a tip

🏋️‍♀️ this is an exercise for you to do

❓ this is a question for us to think and talk about. Try not to scroll beyond this question before we discuss

## Your Instructor: Nikolay Advolodkin

- 🏢 I’m a Sr Solutions Architect at Sauce Labs
- 🔭 I’m the founder of [Ultimate QA](https://ultimateqa.com/)
- 🌱 I’m currently working on [Sauce Bindings](https://github.com/saucelabs/sauce_bindings)
- 💬 Ask me about environmentalism, veganism, test automation, and fitness
- 😄 Pronouns: he/him
- ⚡ Fun fact: I'm a vegan that's super pasionate about saving the planet, saving animals, and helping underpriveleged communities
- 📫 Follow me for testing and dev training
  - [JS Testing Newsletter](https://ultimateqa.ck.page/js-testing-tips)
  - [Testing training on Youtube](https://youtube.com/ultimateqa)
  - [LinkedIn for professional connections](https://www.linkedin.com/in/nikolayadvolodkin/)
  - [Twitter for 🔥 Dev quotes](https://twitter.com/Nikolay_A00)

## TA 1: Chris Eccleston

## TA 2: Aleks Shineleva

## ⚙️ Setup

The safest way to ensure that we all have the same environment is for us to [use Gitpod](#gitpod-setup) for our workshop. However, if you are comfortable doing so, you are free to setup the environment on your machine as well.

### Sign up for accounts

1. Free [Sauce account](https://saucelabs.com/sign-up)
2. Request [Demo Screener account](https://saucelabs.com/demo-request-vt). **!Request ASAP before the workshop as it's a manual process to add users.** 

### Get your username and api key

1. Save your Sauce Labs Username and Access Key by going to the [Sauce Labs user settings page](https://app.saucelabs.com/user-settings)
2. Save your Screener API Key by going to the [API key](https://screener.io/v2/account/api-key) page in your Screener settings
   1. Need to sign up for [demo account before](https://saucelabs.com/demo-request-vt)

🚨 **If you don't get an API key before the workshop, please use one of the keys below** 🚨

SCREENER_API_KEY:

`34c95634-56fc-446e-b68e-20530262e3f4`

`fe5a0636-fde5-4209-a597-403a76f1b505`

`6b3cc9f4-4578-413c-b5cc-ed7d1b417981`

`6b3cc9f4-4578-413c-b5cc-ed7d1b417981`

`8368adee-4463-4aa4-a441-6e6c58d67665`

---

## Gitpod setup

ℹ️ Gitpod lets you run an entire Dev environment from a browser! You can use this approach if you don't know how to setup a local environment.

### Fork the repo

1. Sign up for a free [Github account](https://github.com/)
2. Fork this respository

- Make sure you are logged into Github
- click the Fork in the upper right of the Github.
- Give the repo a ⭐ or you can't participate in the workshop😝

3. In the browser address bar, prepend the current GitHub url with `https://gitpod.io/#`
    * The resulting url should look as follows:
   
      > https://gitpod.io/#https://github.com/YOUR-USERNAME/comprehensive-testing-js
   
4. Once the Gitpod.io URL is loaded, you will need to sign in with the GitHub account you created earlier 

### Start the app

In your terminal

```js
npm run start
```

you should see a new tab open with a simple application

### Set your env variables

In a new terminal, run the following commands in that Terminal to set your `SAUCE_USERNAME`, `SAUCE_ACCESS_KEY`, and `SCREENER_API_KEY`:

```bash
eval $(gp env -e SAUCE_USERNAME=<sauce_username>)
eval $(gp env -e SAUCE_ACCESS_KEY=<sauce_access_key>)
eval $(gp env -e SCREENER_API_KEY=<screener_api_key>)
```

> Replace <sauce_username>, <sauce_access_key>, and <screener_api_key> with your credentials

Once you have run those 3 commands, you can run the following commands to test your environment variables:

```bash
echo $SAUCE_USERNAME
echo $SAUCE_ACCESS_KEY
echo $SCREENER_API_KEY
```

### Run tests

Run sanity tests

```bash
mvn test -Dtest=SanityTest -X
```

<br/>
  <details>
    <summary>
      <strong>Click here</strong> to see an example console output.
    </summary>


        Tests run: 2, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 54.305 sec

        Results :

        Tests run: 2, Failures: 0, Errors: 0, Skipped: 0

        [INFO] ------------------------------------------------------------------------
        [INFO] BUILD SUCCESS
        [INFO] ------------------------------------------------------------------------
        [INFO] Total time:  56.063 s
        [INFO] Finished at: 2021-11-03T16:03:20-04:00
        [INFO] ------------------------------------------------------------------------

  </details>

<br/>


### ✅👏Environment setup is complete if tests passed

## Stay to the end and win a prize!


---

### 1. Install Node 14 LTS

1.  Use NVM for this installation by [following instructions](https://github.com/nvm-sh/nvm#install--update-script)
    - It should be just a single command to run in our terminal
      - **!Don't forget to restart your terminal!**
    -  After installation, confirm install with `nvm --version`
3.  Intall Node 16 with `nvm install --lts`

  <br/>
  <details>
    <summary>
      <strong>Click here</strong> to see an example output.
    </summary>

        Downloading and installing node v14.16.1...
        Downloading https://nodejs.org/dist/v14.16.1/node-v14.16.1-darwin-x64.tar.xz...
        ######################################################################### 100.0%
        Computing checksum with shasum -a 256
        Checksums matched!
        Now using node v14.16.1 (npm v6.14.12)
        Creating default alias: default -> 14 (-> v14.16.1)

  </details>
  <br/><br/>

- Confirm node installation with `node --version` and seeing `v14.16.1` or similar
- Confirm NVM is set to 14 for default by running the following commands:

```bash
nvm list #will show all versions
nvm use 14 #to use 14
nvm alias default 16.14.x #to set it to the default
```

### 2.Clone and fork the repo

1. Sign up for a free [Github account](https://github.com/)
2. Fork this respository

- Make sure you are logged into Github
- click the Fork in the upper right of the Github.

3. Clone your fork of the repository to your machine. Must have [Git installed](https://git-scm.com/downloads)

```bash
git clone URL_OF_YOUR_FORK
```

4. **Navigate to the directory of where you cloned your repo**

`cd YOUR_FORK_DIR/automation-best-practices/testing-for-charity`

### 3.Install the app

```bash
cd testing-for-charity/my-react-app
npm install && npm start
```

<br/>
<details>
  <summary>
    <strong>Click here</strong> to see an example output.
  </summary>

  <code>

    Compiled successfully!

    You can now view my-react-app in the browser.

      Local:            http://localhost:3000
      On Your Network:  http://172.20.10.2:3000

    Note that the development build is not optimized.
    To create a production build, use npm run build.

  </code>
</details>

<br/><br/>

**Don't worry about fixing any warnings that may appear during `npm install`**

Once the app is running, kill the server by executing `Ctrl + C` in command line. We don't need the app running right now.

### 4.Have an IDE installed that can handle NodeJS/JS (We will use [VSCode](https://code.visualstudio.com/Download))

#### ✅👏Congratulations, your environment is ready!

### 5.Sign up for a free [Sauce account](https://saucelabs.com/sign-up)

Get your [Screener account](https://saucelabs.com/demo-request-vt)

### 6.Set Your Sauce Labs Credentials

- [MacOS/Linux](https://docs.saucelabs.com/basics/environment-variables/#setting-up-environment-variables-on-macos-and-linux-systems)
- [Windows](https://docs.saucelabs.com/basics/environment-variables/#setting-up-environment-variables-on-windows-systems)

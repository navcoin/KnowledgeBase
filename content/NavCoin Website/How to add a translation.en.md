---
title: How to add a translation to NavCoin.org
date: "2019-05-07"
---

### Create or Claim an issue
If you want to contribute to the NavCoin site by adding a translation, create an issue on GitHub about outlining the work you will do and assign it to yourself. Or if there is already an existing issue you want to work on, claim it.

https://github.com/NAVCoin/navcoin-org/issues

Make sure you create and/or claim an issue to avoid doubling up on work with someone else who is also trying to help maintain the website.

### Fork the repository

Login to GitHub and browse to the NavCoin.org repository.

https://github.com/NAVCoin/navcoin-org

Click the Fork button in the top right corner and it will clone the code for the website to your own GitHub account. Since the main NavCoin.org repository cant be committed to directly, you need to work on your own repo and then create a pull request which will be covered later.

Some more information on forking repositories can be found in the GitHub help documentation.

https://help.github.com/en/articles/fork-a-repo

### Clone the repository and create a branch

You can use either the Git command line or a GUI like [GitKraken](https://www.gitkraken.com) to clone your forked repository to you local computer and create a branch to make the changes in.


### Duplicate the pages you want to translate

The translateable pages are located in the `/content` directory. In this example we will translate the page "Buy NavCoin".

Create a duplicate of the page you want to translate and rename it to have the ISO 639-1 code as part of the file name. For example, if we want to make a translation for Portugeuse we would copy the English file located here;

`/content/buy-navcoin/index.en.md`

And replace "en" with "pt" to have the new file;

`/content/buy-navcoin/index.pt.md`

Do not delete or overwrite the index.en.md file, both need to exist side by side in the project folder.

```
/content/buy-navcoin/index.en.md
/content/buy-navcoin/index.pt.md
```

### Translate the header section

Begin translating the page into your chosen language. Most files have a header section with variables which looks something like this;

```
---
title: "Buy NavCoin"
date: 2018-03-20T08:09:08+13:00
draft: false
type: "default"
author: ""
description: "NavCoin is publicly mined and ran no token sale. The only way to buy NavCoin is to purchase it from a third party or exchange."
---
```

It is important to not change what is to the left of the ":" symbol as these are the variable names used in the code. Usually you only need to translate the text in quotes for `title` and `description`. For example, the Spanish translation of this header section would look like this;

```
---
title: "Comprar Navs"
date: 2018-03-20T08:09:08+13:00
draft: false
type: "default"
author: ""
description: "NavCoin es un criptoactivo generado públicamente y no ha sido pre-minado/vendido. La única manera de comprar NavCoin es a través de una casa de intercambio tercerizada."
---
```

Some pages have different variables in the header section, some of which should not be translated. If you're unsure, ask on discord. Some of the properties which shouldn't be translated in various template headers include;

```
draft: {true|false}
type: "default"
status: {upcoming|in-progress|testing|completed}
layout: {roadmap|null}
```

### Translate the rest of the pages

The site is largely built using templates that are rendered with code blocks that look similar to this;

```
{{</* merchant
    titleText="CoinPayments"
    imgSrc="/images/merchants/mer-coinpayment.png"
    text="Over 70 merchants accept NAV using the CoinPayments merchant&nbsp;gateway."
    linkUrl="https://www.coinpayments.net/store-directory-coin-NAV"
*/>}}
```

Again, you don't want to translate what is to the left of the "=" symbol as these are variable names. Usually you only need to translate the text in quotes to the right of the equals symbol. For example, the Spanish translation of this block looks like this;

```
{{</* merchant
    titleText="CoinPayments"
    imgSrc="/images/merchants/mer-coinpayment.png"
    text="Más de 70 comerciantes aceptan NAV mediante el portal de&nbsp;CoinPayments."
    linkUrl="https://www.coinpayments.net/store-directory-coin-NAV"
*/>}}
```

### Repeat for all pages in the site

Every page needs its own translation, so you will need to repeat this process for every markdown file in the content directory.

### Translate the Navigation Menu

The navigation menu also needs to be translated. The configuration for this can be found in the `/config.toml` file.

Firstly you will need to add your language to the "Languages" drop down menu by adding the appropriate block to the "Languages" section with the correct ISO language code.

```
[Languages]
    [Languages.en]
        title = "NavCoin - An Easy To Use Decentralized Cryptocurrency"
        weight = 1
        languageName = "English"
    ...
```
For example, to add Spanish you would add this `.es` block below the `.en` block;
```
[Languages.es]
    title = "NavCoin - Una Criptomoneda descentralizada fácil de usar "
    weight = 2
    languageName = "Español"
```
When editing the toml file, you have to ensure the indentation of each line item is correctly nested or the file will not work.

Then you need to duplicate the entire english menu block, replace the ISO code and translate the whole navigation menu. For example;

```
# Main Menu English Start

[[Languages.en.menu.main]]
    name = "Get Started"
    title = "Get Started"
    weight = 10
    identifier = "get-started"
    depth = 1
    [[Languages.en.menu.main]]
        name = "Why NavCoin"
        title = "Why NavCoin"
        weight = 20
        url = "/why-navcoin/"
        identifier = "why-navcoin"
        parent = "get-started"
    ...
```
These blocks are quite long, so make sure you duplicate and translate the whole thing while preserving the indendation.

### Check it works

From the folder you cloned the site into, you can start up the site with the `hugo server` command in terminal. Then you should be able to preview the site on `https://localhost:1313`.

If you don't have hugo installed, check out https://gohugo.io for instructions on how to run it on your operating system.

### Push to GitHub and create the PR for review

Using Git CLI or GitKraken, commit the changes and push them back up to your GitHub fork. Then through GitHub create a pull request to merge your branch back into the original NavCoin.org repository's master branch. You should see the branch build and get a preview link to check it all works properly.

PR's require two positive reviews from collaborators before they can be merged. When you've submitted your PR for review, feel free to add some of the NavCoin core devs as reviewers and nudge them on Discord to review and merge it.

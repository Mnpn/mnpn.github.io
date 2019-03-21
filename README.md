# Mnpn Hisses At Me [![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=flat-square)](https://paypal.me/mnpn03/)

[Mnpn Hisses At Me](https://mnpn.hisses-at.me/) is my personal website.
The domain name's obviously a bit of a joke, but I thought it was funny when I acquired it.

### Table of Content
- [Running Locally](#running-locally)
- [Contribution](#contribution)
- [License](#license)

### Running Locally
If you're going to create a [Pull Request](https://github.com/Mnpn03/hisses-at.me/pulls), you might want to check how your changes look. As I use Jekyll, you can not simply open the index file in your browser.

**Here's what you'll have to do:**

First of all, you'll have to clone the repository. A piece of cake!
`git clone -b Mnpn git@github.com:Mnpn03/hisses-at.me.git` to clone with SSH, or
`git clone -b Mnpn https://github.com/Mnpn03/hisses-at.me.git` to clone with HTTPS.

Next, you'll have to install [Jekyll](https://jekyllrb.com/). Jekyll requires [Ruby](https://www.ruby-lang.org/en/), and you can download it with instructions at [their website](https://www.ruby-lang.org/en/). Installing Jekyll and getting it up and running is simple as it only takes a few minutes:
```
$ gem install jekyll bundler
$ cd hisses-at.me
$ bundle exec jekyll serve
```
Then, you can navigate to `127.0.0.1:4000` in your browser, and see your local copy of the website.
The website automatically updates when a file is saved because you supplied Jekyll with the `serve` argument.

### Contribution
To contribute to the project, simply create a [Pull Request](https://github.com/Mnpn03/hisses-at.me/pulls) or an [Issue](https://github.com/Mnpn03/hisses-at.me/issues).

If you want to create an [Issue](https://github.com/Mnpn03/hisses-at.me/issues), please clearly state the bug and/or ways to replicate it (if it's a bug/glitch/exploit).

If you want to create a [Pull Request](https://github.com/Mnpn03/hisses-at.me/pulls), please clearly state what you've changed and if it has resolved an issue, and if so - which one. Don't forget to check "[Running Locally](#running-locally)".

Following these short guidelines will make it easier and faster for your Issue/Pull Request to be reviewed and dealt with.
Thanks!

### License
Mnpn Hisses At Me is a public website that comes with no warranty. It is licensed under the GNU GPL license. Read more about the license used [here](https://github.com/Mnpn03/hisses-at.me/blob/Mnpn/LICENSE).

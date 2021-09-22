# Mnpn's Website [![Netlify Status](https://api.netlify.com/api/v1/badges/e6f37104-d025-4b17-8699-cb1a2caddd08/deploy-status)](https://app.netlify.com/sites/mnpn/deploys)

[Mnpn.dev](https://mnpn.dev/) is my personal website containing my projects and contact information.

### Running Locally
If you're going to create a [PR](https://github.com/Mnpn/Website/pulls), you might want to check how your changes look. As I use Jekyll, you can not simply open the index file in your browser.

**Here's what you'll have to do:**

Assuming you've successfully cloned the repository, you'll have to install [Jekyll](https://jekyllrb.com/). Jekyll requires [Ruby](https://www.ruby-lang.org/en/), and you can download it with instructions at [their website](https://www.ruby-lang.org/en/). Installing Jekyll and getting it up and running is simple as it only takes a few minutes:
```
$ gem install jekyll bundler
$ cd Website
$ bundle exec jekyll serve
```
Then, you can navigate to `127.0.0.1:4000` in your browser, and see your local copy of the website.
The website automatically updates when a file is saved because you supplied Jekyll with the `serve` argument.

### Contribution
To contribute to the project, simply create a [pull request](https://github.com/Mnpn/Website/pulls) or an [issue](https://github.com/Mnpn/Website/issues).

If you want to create an [issue](https://github.com/Mnpn/Website/issues), please clearly state the bug and/or ways to replicate it (if it's a bug/glitch/exploit).

# Mnpn's Website [![Netlify Status](https://api.netlify.com/api/v1/badges/e6f37104-d025-4b17-8699-cb1a2caddd08/deploy-status)](https://app.netlify.com/sites/mnpn/deploys)

[mnpn.dev](https://mnpn.dev/) is my personal website containing my projects, blog, and contact information.

### Running Locally
If you're going to create a [PR](https://github.com/Mnpn/mnpn.github.io/pulls), you might want to check how your changes look. As I use Jekyll, you can not simply open the index file in your browser.

Assuming you've successfully cloned the repository, you'll have to install [Jekyll](https://jekyllrb.com/). Jekyll requires [Ruby](https://www.ruby-lang.org/en/), and you can download it with instructions at [their website](https://www.ruby-lang.org/en/). Installing Jekyll and getting it up and running is rather simple:
```
$ cd mnpn.github.io
$ gem install jekyll bundler
$ bundle exec jekyll serve
```
Then, you can navigate to `127.0.0.1:4000` in your browser, and see your local copy of the website.
The website automatically updates when a file is saved because you supplied Jekyll with the `serve` argument.

# Academic Homepage

Source code for an [academic homepage](https://quarter-p.github.io/), built with Jekyll and based on the [Minimal Light](https://github.com/yaoyao-liu/minimal-light) theme.

## Content

- `_config.yml`: profile information, links, SEO metadata, and analytics
- `index.md`: research interests and news
- `_data/publications.yml`: publications and preprints
- `_data/projects.yml`: research projects
- `_includes/`: reusable page sections
- `_layouts/homepage.html`: page layout and metadata
- `_sass/minimal-light.scss`: site styles

## Local preview

Install [Ruby](https://www.ruby-lang.org/), [Bundler](https://bundler.io/), and the project dependencies:

```bash
bundle install
bundle exec jekyll serve
```

Then open [http://127.0.0.1:4000/](http://127.0.0.1:4000/).

## Deployment

The site is published with GitHub Pages at [https://quarter-p.github.io/](https://quarter-p.github.io/). Updates are deployed after the source changes are pushed to the repository's Pages branch.

## License

The site is based on Minimal Light by Yaoyao Liu. See [LICENSE](LICENSE) for details.

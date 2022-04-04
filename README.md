### What is this?

This a demo app, to help you report issues / bugs / debug on [pagy](https://github.com/ddnexus/pagy). If the documentation is lacking:

![](app/assets/images/please.gif)

Please make a PR to the documentation, or otherwise, msg someone in the [pagy gitter](https://gitter.im/ruby-pagy/Lobby) forums.

### Steps

To Run:

`rake db:seed`

`./bin/dev`

### Reproduce Your issue

`git checkout -b pagy-bug`

Please push to your own remote, and include it in your bug report to pagy.

### Don't forget to register your stimulus js controllers!

esbuild ain't webpacker. There's no glob which automatically registers all controllers. Or you might have to write or use a third party library for the same functionality.

```shell
./bin/rails stimulus:manifest:update
```





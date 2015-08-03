exports.create = function(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __loadTemplate = __helpers.l,
      ___application_layout_marko = __loadTemplate(require.resolve("../application-layout.marko")),
      __partials_deposit_menu_marko = __loadTemplate(require.resolve("./partials/deposit-menu.marko")),
      __renderer = __helpers.r,
      lasso_taglib_page_tag = __renderer(require("lasso/taglib/page-tag")),
      __tag = __helpers.t,
      marko_layout_use_tag = __renderer(require("marko-layout/use-tag")),
      marko_layout_put_tag = __renderer(require("marko-layout/put-tag"));

  return function render(data, out) {
    __tag(out,
      lasso_taglib_page_tag,
      {
        "packagePath": "./default.browser.json",
        "dirname": __dirname,
        "filename": __filename
      });
    __tag(out,
      marko_layout_use_tag,
      {
        "template": ___application_layout_marko,
        "getContent": function(__layoutHelper) {
          __tag(out,
            marko_layout_put_tag,
            {
              "into": "body",
              "layout": __layoutHelper
            },
            function(out) {
              out.w('<div class="container" id="content">');
              __helpers.i(out, __partials_deposit_menu_marko, {});

              out.w('</div>');
            });
        }
      });
  };
}
exports.create = function(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      marko_layout_placeholder_tag = __renderer(require("marko-layout/placeholder-tag")),
      __tag = __helpers.t,
      lasso_taglib_head_tag = __renderer(require("lasso/taglib/head-tag")),
      lasso_taglib_body_tag = __renderer(require("lasso/taglib/body-tag"));

  return function render(data, out) {
    out.w('<!DOCTYPE html> <html lang="en"> <head>');
    __tag(out,
      marko_layout_placeholder_tag,
      {
        "name": "html_header",
        "content": data.layoutContent
      });
    __tag(out,
      lasso_taglib_head_tag,
      {});

    out.w('</head><body>');
    __tag(out,
      marko_layout_placeholder_tag,
      {
        "name": "header",
        "content": data.layoutContent
      });
    __tag(out,
      marko_layout_placeholder_tag,
      {
        "name": "body",
        "content": data.layoutContent
      });
    __tag(out,
      marko_layout_placeholder_tag,
      {
        "name": "footer",
        "content": data.layoutContent
      });
    __tag(out,
      lasso_taglib_body_tag,
      {});

    out.w('</body></html>');
  };
}
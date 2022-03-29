(() => {
  "use strict";
  var n = {
      426: (n, e, t) => {
        t.d(e, { Z: () => A });
        var o = t(537),
          r = t.n(o),
          i = t(645),
          a = t.n(i)()(r());
        a.push([
          n.id,
          '/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role="list"],\nol[role="list"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don\'t have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: aqua;\n  padding: 1.5rem 150px;\n}\n.home-container {\n  display: none;\n}\n.menu-container {\n  display: none; /*flex*/\n  flex-wrap: wrap;\n  gap: 3rem;\n  padding: 1.5rem 150px;\n}\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  box-shadow: 1px 5px 12px 0 rgb(83 78 76 / 10%);\n}\n.menu-item img {\n  width: 300px;\n}\n.form-container {\n  max-width: 420px;\n  margin: 50px auto;\n}\n\n.title {\n  font-size: 3rem;\n}\nnav {\n  display: flex;\n  gap: 1rem;\n}\nbutton {\n  font-size: 1.5rem;\n  width: 100px;\n  height: 50px;\n  cursor: pointer;\n}\nimg {\n  width: 200px;\n  border-radius: 1rem;\n}\nh2 {\n  text-align: center;\n  font-size: 3rem;\n}\nh3 {\n  font-size: 1.5rem;\n}\n\n.userinfo {\n  color: rgb(0, 0, 0);\n  font-family: Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  font-size: 18px;\n  border-radius: 5px;\n  line-height: 22px;\n  background-color: transparent;\n  border: 2px solid #cc6666;\n  transition: all 0.3s;\n  padding: 13px;\n  margin-bottom: 15px;\n  width: 100%;\n  box-sizing: border-box;\n  outline: 0;\n}\ninput.userinfo:focus {\n  border: 2px solid #cc4949;\n}\ntextarea {\n  height: 150px;\n  line-height: 150%;\n  resize: vertical;\n}\n[type="submit"] {\n  font-family: "Montserrat", Arial, Helvetica, sans-serif;\n  width: 100%;\n  background: #cc6666;\n  border-radius: 5px;\n  border: 0;\n  cursor: pointer;\n  color: rgb(32, 1, 1);\n  font-size: 24px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  transition: all 0.3s;\n  margin-top: -4px;\n  font-weight: 700;\n}\n[type="submit"]:hover {\n  background: #cc4949;\n}\n',
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA,qBAAqB;AACrB;;;EAGE,sBAAsB;AACxB;;AAEA,0BAA0B;AAC1B;;;;;;;;;;EAUE,SAAS;AACX;;AAEA,2GAA2G;AAC3G;;EAEE,gBAAgB;AAClB;;AAEA,2BAA2B;AAC3B;EACE,uBAAuB;AACzB;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,0DAA0D;AAC1D;EACE,8BAA8B;AAChC;;AAEA,oCAAoC;AACpC;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA,yCAAyC;AACzC;;;;EAIE,aAAa;AACf;;AAEA,gGAAgG;AAChG;EACE;IACE,qBAAqB;EACvB;;EAEA;;;IAGE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,sBAAsB;EACtB,qBAAqB;AACvB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa,EAAE,OAAO;EACtB,eAAe;EACf,SAAS;EACT,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,8CAA8C;AAChD;AACA;EACE,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;AACA;EACE,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,yCAAyC;EACzC,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,6BAA6B;EAC7B,yBAAyB;EACzB,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,sBAAsB;EACtB,UAAU;AACZ;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,uDAAuD;EACvD,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,SAAS;EACT,eAAe;EACf,oBAAoB;EACpB,eAAe;EACf,iBAAiB;EACjB,oBAAoB;EACpB,oBAAoB;EACpB,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB",
            sourcesContent: [
              '/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role="list"],\nol[role="list"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don\'t have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: aqua;\n  padding: 1.5rem 150px;\n}\n.home-container {\n  display: none;\n}\n.menu-container {\n  display: none; /*flex*/\n  flex-wrap: wrap;\n  gap: 3rem;\n  padding: 1.5rem 150px;\n}\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  box-shadow: 1px 5px 12px 0 rgb(83 78 76 / 10%);\n}\n.menu-item img {\n  width: 300px;\n}\n.form-container {\n  max-width: 420px;\n  margin: 50px auto;\n}\n\n.title {\n  font-size: 3rem;\n}\nnav {\n  display: flex;\n  gap: 1rem;\n}\nbutton {\n  font-size: 1.5rem;\n  width: 100px;\n  height: 50px;\n  cursor: pointer;\n}\nimg {\n  width: 200px;\n  border-radius: 1rem;\n}\nh2 {\n  text-align: center;\n  font-size: 3rem;\n}\nh3 {\n  font-size: 1.5rem;\n}\n\n.userinfo {\n  color: rgb(0, 0, 0);\n  font-family: Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  font-size: 18px;\n  border-radius: 5px;\n  line-height: 22px;\n  background-color: transparent;\n  border: 2px solid #cc6666;\n  transition: all 0.3s;\n  padding: 13px;\n  margin-bottom: 15px;\n  width: 100%;\n  box-sizing: border-box;\n  outline: 0;\n}\ninput.userinfo:focus {\n  border: 2px solid #cc4949;\n}\ntextarea {\n  height: 150px;\n  line-height: 150%;\n  resize: vertical;\n}\n[type="submit"] {\n  font-family: "Montserrat", Arial, Helvetica, sans-serif;\n  width: 100%;\n  background: #cc6666;\n  border-radius: 5px;\n  border: 0;\n  cursor: pointer;\n  color: rgb(32, 1, 1);\n  font-size: 24px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  transition: all 0.3s;\n  margin-top: -4px;\n  font-weight: 700;\n}\n[type="submit"]:hover {\n  background: #cc4949;\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const A = a;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  o = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  o &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (t += n(e)),
                  o && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, o, r, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (o)
                for (var A = 0; A < this.length; A++) {
                  var s = this[A][0];
                  null != s && (a[s] = !0);
                }
              for (var c = 0; c < n.length; c++) {
                var l = [].concat(n[c]);
                (o && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  t &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = t))
                      : (l[2] = t)),
                  r &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = r))
                      : (l[4] = "".concat(r))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      537: (n) => {
        n.exports = function (n) {
          var e = n[1],
            t = n[3];
          if (!t) return e;
          if ("function" == typeof btoa) {
            var o = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              r =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  o
                ),
              i = "/*# ".concat(r, " */"),
              a = t.sources.map(function (n) {
                return "/*# sourceURL="
                  .concat(t.sourceRoot || "")
                  .concat(n, " */");
              });
            return [e].concat(a).concat([i]).join("\n");
          }
          return [e].join("\n");
        };
      },
      379: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === n) {
              t = o;
              break;
            }
          return t;
        }
        function o(n, o) {
          for (var i = {}, a = [], A = 0; A < n.length; A++) {
            var s = n[A],
              c = o.base ? s[0] + o.base : s[0],
              l = i[c] || 0,
              d = "".concat(c, " ").concat(l);
            i[c] = l + 1;
            var p = t(d),
              u = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(u);
            else {
              var m = r(u, o);
              (o.byIndex = A),
                e.splice(A, 0, { identifier: d, updater: m, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function r(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, r) {
          var i = o((n = n || []), (r = r || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var A = t(i[a]);
              e[A].references--;
            }
            for (var s = o(n, r), c = 0; c < i.length; c++) {
              var l = t(i[c]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = s;
          };
        };
      },
      569: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var o = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(t);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var o = "";
                t.supports && (o += "@supports (".concat(t.supports, ") {")),
                  t.media && (o += "@media ".concat(t.media, " {"));
                var r = void 0 !== t.layer;
                r &&
                  (o += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (o += t.css),
                  r && (o += "}"),
                  t.media && (o += "}"),
                  t.supports && (o += "}");
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  e.styleTagTransform(o, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      45: (n, e, t) => {
        n.exports = t.p + "212e74ee7db7e9ac06c6.png";
      },
      733: (n, e, t) => {
        n.exports = t.p + "5484542ccfb53c2afc4c.png";
      },
      782: (n, e, t) => {
        n.exports = t.p + "192d8a119a1e7d126247.jpg";
      },
      267: (n, e, t) => {
        n.exports = t.p + "16a164bf483b7aabc7c5.png";
      },
      209: (n, e, t) => {
        n.exports = t.p + "bb21dd0764287e25e7fa.png";
      },
      538: (n, e, t) => {
        n.exports = t.p + "35bbcfdd5908007bdc16.png";
      },
      90: (n, e, t) => {
        n.exports = t.p + "7618ef54784948c849be.png";
      },
      4: (n, e, t) => {
        n.exports = t.p + "90d522d39507f2789f59.png";
      },
      515: (n, e, t) => {
        n.exports = t.p + "09ff86ad499fa00dbdd2.png";
      },
      527: (n, e, t) => {
        n.exports = t.p + "61921da43ec475c413f5.png";
      },
    },
    e = {};
  function t(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var i = (e[o] = { id: o, exports: {} });
    return n[o](i, i.exports, t), i.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var o in e)
        t.o(e, o) &&
          !t.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: e[o] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (() => {
      var n;
      t.g.importScripts && (n = t.g.location + "");
      var e = t.g.document;
      if (!n && e && (e.currentScript && (n = e.currentScript.src), !n)) {
        var o = e.getElementsByTagName("script");
        o.length && (n = o[o.length - 1].src);
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = n);
    })(),
    (() => {
      var n = t(379),
        e = t.n(n),
        o = t(795),
        r = t.n(o),
        i = t(569),
        a = t.n(i),
        A = t(565),
        s = t.n(A),
        c = t(216),
        l = t.n(c),
        d = t(589),
        p = t.n(d),
        u = t(426),
        m = {};
      (m.styleTagTransform = p()),
        (m.setAttributes = s()),
        (m.insert = a().bind(null, "head")),
        (m.domAPI = r()),
        (m.insertStyleElement = l()),
        e()(u.Z, m),
        u.Z && u.Z.locals && u.Z.locals;
      var f = t(782);
      var C = t(45),
        h = t(733),
        g = t(267),
        B = t(209),
        E = t(538),
        b = t(90),
        x = t(4),
        v = t(515),
        y = t(527);
      const w = (n, e, t, o) => {
        let r = document.createElement(n);
        return (
          r.setAttribute("type", e),
          r.setAttribute("class", t),
          r.setAttribute("placeholder", o),
          r
        );
      };
      (() => {
        const n = document.createElement("header"),
          e = document.createElement("div");
        e.classList.add("title"),
          (e.textContent = "Boomin' Breakfast"),
          n.appendChild(e);
        const t = document.createElement("nav"),
          o = document.createElement("button");
        (o.textContent = "Home"), t.appendChild(o);
        const r = document.createElement("button");
        (r.textContent = "Menu"), t.appendChild(r);
        const i = document.createElement("button");
        (i.textContent = "About"),
          t.appendChild(i),
          n.appendChild(t),
          document.querySelector("#content").appendChild(n);
      })(),
        (() => {
          const n = document.createElement("div");
          n.classList.add("home-container");
          const e = new Image();
          (e.src = f), n.appendChild(e);
          const t = document.createElement("div");
          t.classList.add("headline"),
            (t.innerHTML = "Welcome to Boomin' Breakfast!"),
            n.appendChild(t);
          const o = document.createElement("div");
          o.classList.add("description"),
            (o.innerHTML =
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n  Proin nibh tortor, accumsan sed blandit in, venenatis quis elit. Donec in ex tellus. \n  Morbi sit amet sem vitae ex suscipit ultricies vel vel mauris."),
            n.appendChild(o),
            document.querySelector("#content").appendChild(n);
        })(),
        (() => {
          const n = document.querySelector("#content"),
            e = [
              { image: y, title: "Tri-fecta" },
              { image: v, title: "The Traditional" },
              { image: C, title: "Avocado Toast" },
              { image: E, title: "French Toast" },
              { image: b, title: "Multigrain Pancake" },
              { image: B, title: "Elevated Egg Sandwich" },
              { image: h, title: "Buscuits & Turkey Sausage" },
              { image: g, title: "Chickichanga" },
              { image: x, title: "Smoked SalmonB enedict" },
            ].map((n) => {
              const e = (() => {
                const n = document.createElement("div");
                return (
                  n.classList.add("menu-item"),
                  {
                    menuItemDiv: n,
                    addImage: (e) => {
                      const t = document.createElement("img");
                      (t.src = e), n.append(t);
                    },
                    addTitle: (e) => {
                      const t = document.createElement("h3");
                      (t.textContent = e), n.append(t);
                    },
                  }
                );
              })();
              return e.addImage(n.image), e.addTitle(n.title), e.menuItemDiv;
            }),
            t = document.createElement("div");
          t.classList.add("menu-container"), t.append(...e), n.appendChild(t);
        })(),
        (() => {
          const n = document.querySelector("#content"),
            e = document.createElement("h2"),
            t = document.createElement("div"),
            o = w("input", "text", "userinfo", "Name: "),
            r = w("input", "number", "userinfo", "Phone No: "),
            i = w("input", "email", "userinfo", "Email Address: "),
            a = w("textarea", "text", "userinfo", "Message: "),
            A = ((n, e) => {
              let t = document.createElement("input");
              return (
                t.setAttribute("type", "submit"),
                t.setAttribute("value", "SUBMIT"),
                t
              );
            })();
          (e.textContent = "CONTACT US"),
            t.setAttribute("class", "form-container"),
            n.append(e, t),
            t.append(o, r, i, a, A);
        })();
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VzVCLFlBQWMsYUFFekI2QixFQUFnQm5GLGFBQWEsUUFBUyxrQkFDdEMvRSxFQUFRMEosT0FBT08sRUFBWUMsR0FFM0JBLEVBQWdCUixPQUFPUyxFQUFNQyxFQUFhQyxFQUFPQyxFQUFTQyxJQ1I1REcsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBCb3ggc2l6aW5nIHJ1bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbmZpZ3VyZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXFxudWxbcm9sZT1cXFwibGlzdFxcXCJdLFxcbm9sW3JvbGU9XFxcImxpc3RcXFwiXSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuXFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gIHBhZGRpbmc6IDEuNXJlbSAxNTBweDtcXG59XFxuLmhvbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lOyAvKmZsZXgqL1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAzcmVtO1xcbiAgcGFkZGluZzogMS41cmVtIDE1MHB4O1xcbn1cXG4ubWVudS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDFweCA1cHggMTJweCAwIHJnYig4MyA3OCA3NiAvIDEwJSk7XFxufVxcbi5tZW51LWl0ZW0gaW1nIHtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuLmZvcm0tY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogNDIwcHg7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcbmJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaW1nIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcbmgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi51c2VyaW5mbyB7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjYzY2NjY7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIHBhZGRpbmc6IDEzcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgb3V0bGluZTogMDtcXG59XFxuaW5wdXQudXNlcmluZm86Zm9jdXMge1xcbiAgYm9yZGVyOiAycHggc29saWQgI2NjNDk0OTtcXG59XFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNjYzY2NjY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiKDMyLCAxLCAxKTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIG1hcmdpbi10b3A6IC00cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5bdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2NjNDk0OTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7QUFDckI7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQSwwQkFBMEI7QUFDMUI7Ozs7Ozs7Ozs7RUFVRSxTQUFTO0FBQ1g7O0FBRUEsMkdBQTJHO0FBQzNHOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUEsMERBQTBEO0FBQzFEO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBLG9DQUFvQztBQUNwQzs7RUFFRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQSx5Q0FBeUM7QUFDekM7Ozs7RUFJRSxhQUFhO0FBQ2Y7O0FBRUEsZ0dBQWdHO0FBQ2hHO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7OztJQUdFLHFDQUFxQztJQUNyQyx1Q0FBdUM7SUFDdkMsc0NBQXNDO0lBQ3RDLGdDQUFnQztFQUNsQztBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhLEVBQUUsT0FBTztFQUN0QixlQUFlO0VBQ2YsU0FBUztFQUNULHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsdURBQXVEO0VBQ3ZELFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG5maWd1cmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcbnVsW3JvbGU9XFxcImxpc3RcXFwiXSxcXG5vbFtyb2xlPVxcXCJsaXN0XFxcIl0ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xcbmh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMsIHRyYW5zaXRpb25zIGFuZCBzbW9vdGggc2Nyb2xsIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xcbiAgfVxcblxcbiAgKixcXG4gICo6OmJlZm9yZSxcXG4gICo6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBwYWRkaW5nOiAxLjVyZW0gMTUwcHg7XFxufVxcbi5ob21lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubWVudS1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTsgLypmbGV4Ki9cXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogM3JlbTtcXG4gIHBhZGRpbmc6IDEuNXJlbSAxNTBweDtcXG59XFxuLm1lbnUtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3gtc2hhZG93OiAxcHggNXB4IDEycHggMCByZ2IoODMgNzggNzYgLyAxMCUpO1xcbn1cXG4ubWVudS1pdGVtIGltZyB7XFxuICB3aWR0aDogMzAwcHg7XFxufVxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDQyMHB4O1xcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5idXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmltZyB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5oMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udXNlcmluZm8ge1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjY2M2NjY2O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICBwYWRkaW5nOiAxM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG91dGxpbmU6IDA7XFxufVxcbmlucHV0LnVzZXJpbmZvOmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjYzQ5NDk7XFxufVxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBsaW5lLWhlaWdodDogMTUwJTtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjY2M2NjY2O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHJnYigzMiwgMSwgMSk7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICBtYXJnaW4tdG9wOiAtNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNjYzQ5NDk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEF2b2NhZG9Ub2FzdCBmcm9tIFwiLi9pbWFnZXMvYXZvY2Fkby10b2FzdC5wbmdcIjtcbmltcG9ydCBCdXNjdWl0c0FuZFR1cmtleVNhdXNhZ2UgZnJvbSBcIi4vaW1hZ2VzL2Jpc2N1aXRzLWFuZC10dXJrZXktc2F1c2FnZS5wbmdcIjtcbmltcG9ydCBDaGlja2ljaGFuZ2EgZnJvbSBcIi4vaW1hZ2VzL2NoaWNraWNoYW5nYS5wbmdcIjtcbmltcG9ydCBFbGV2YXRlZEVnZ1NhbmR3aWNoIGZyb20gXCIuL2ltYWdlcy9lbGV2YXRlZC1lZ2ctc2FuZHdpY2gucG5nXCI7XG5pbXBvcnQgRnJlbmNoVG9hc3QgZnJvbSBcIi4vaW1hZ2VzL2ZyZW5jaC10b2FzdC5wbmdcIjtcbmltcG9ydCBNdWx0aWdyYWluUGFuY2FrZSBmcm9tIFwiLi9pbWFnZXMvbXVsdGlncmFpbi1wYW5jYWtlLnBuZ1wiO1xuaW1wb3J0IFNtb2tlZFNhbG1vbkJlbmVkaWN0IGZyb20gXCIuL2ltYWdlcy9zbW9rZWQtc2FsbW9uLWJlbmVkaWN0LnBuZ1wiO1xuaW1wb3J0IFRyYWRpdGlvbmFsIGZyb20gXCIuL2ltYWdlcy90aGUtdHJhZGl0aW9uYWwucG5nXCI7XG5pbXBvcnQgVHJpZmVjdGEgZnJvbSBcIi4vaW1hZ2VzL3RyaWZlY3RhLnBuZ1wiO1xuXG5jb25zdCBtZW51TG9hZCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBtZW51T3B0aW9ucyA9IFtcbiAgICB7XG4gICAgICBpbWFnZTogVHJpZmVjdGEsXG4gICAgICB0aXRsZTogXCJUcmktZmVjdGFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlOiBUcmFkaXRpb25hbCxcbiAgICAgIHRpdGxlOiBcIlRoZSBUcmFkaXRpb25hbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2U6IEF2b2NhZG9Ub2FzdCxcbiAgICAgIHRpdGxlOiBcIkF2b2NhZG8gVG9hc3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlOiBGcmVuY2hUb2FzdCxcbiAgICAgIHRpdGxlOiBcIkZyZW5jaCBUb2FzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2U6IE11bHRpZ3JhaW5QYW5jYWtlLFxuICAgICAgdGl0bGU6IFwiTXVsdGlncmFpbiBQYW5jYWtlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZTogRWxldmF0ZWRFZ2dTYW5kd2ljaCxcbiAgICAgIHRpdGxlOiBcIkVsZXZhdGVkIEVnZyBTYW5kd2ljaFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2U6IEJ1c2N1aXRzQW5kVHVya2V5U2F1c2FnZSxcbiAgICAgIHRpdGxlOiBcIkJ1c2N1aXRzICYgVHVya2V5IFNhdXNhZ2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlOiBDaGlja2ljaGFuZ2EsXG4gICAgICB0aXRsZTogXCJDaGlja2ljaGFuZ2FcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlOiBTbW9rZWRTYWxtb25CZW5lZGljdCxcbiAgICAgIHRpdGxlOiBcIlNtb2tlZCBTYWxtb25CIGVuZWRpY3RcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IG1lbnVJdGVtcyA9IG1lbnVPcHRpb25zLm1hcCgobWVudU9wdGlvbikgPT4ge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gY3JlYXRlTWVudUl0ZW0oKTtcbiAgICBtZW51SXRlbS5hZGRJbWFnZShtZW51T3B0aW9uLmltYWdlKTtcbiAgICBtZW51SXRlbS5hZGRUaXRsZShtZW51T3B0aW9uLnRpdGxlKTtcbiAgICByZXR1cm4gbWVudUl0ZW0ubWVudUl0ZW1EaXY7XG4gIH0pO1xuXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmQoLi4ubWVudUl0ZW1zKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xufTtcblxuY29uc3QgY3JlYXRlTWVudUl0ZW0gPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnVJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUl0ZW1EaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcblxuICBjb25zdCBhZGRJbWFnZSA9IChzcmMpID0+IHtcbiAgICBjb25zdCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtZW51SW1nLnNyYyA9IHNyYztcbiAgICBtZW51SXRlbURpdi5hcHBlbmQobWVudUltZyk7XG4gIH07XG4gIGNvbnN0IGFkZFRpdGxlID0gKHRleHQpID0+IHtcbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBtZW51SXRlbURpdi5hcHBlbmQobWVudVRpdGxlKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1lbnVJdGVtRGl2LFxuICAgIGFkZEltYWdlLFxuICAgIGFkZFRpdGxlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudUxvYWQ7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4vL0NyZWF0ZSBGb3JtXG5cbmNvbnN0IGZvcm1Db25zdHJ1Y3RvciA9ICh0YWdOYW1lLCB0eXBlLCBjbGFzc05hbWUsIHBsYWNlaG9sZGVyKSA9PiB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gIGVsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XG4gIGVsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGNsYXNzTmFtZSk7XG4gIGVsLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHBsYWNlaG9sZGVyKTtcbiAgcmV0dXJuIGVsO1xufTtcbmNvbnN0IHN1Ym1pdEJ0bkNvbnN0cnVjdG9yID0gKHR5cGUsIHZhbHVlKSA9PiB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcbiAgZWwuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdmFsdWUpO1xuICByZXR1cm4gZWw7XG59O1xuXG5jb25zdCBhYm91dExvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IGZvcm1Db250YWluZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1Db25zdHJ1Y3RvcihcImlucHV0XCIsIFwidGV4dFwiLCBcInVzZXJpbmZvXCIsIFwiTmFtZTogXCIpO1xuICBjb25zdCBwaG9uZU51bWJlciA9IGZvcm1Db25zdHJ1Y3RvcihcbiAgICBcImlucHV0XCIsXG4gICAgXCJudW1iZXJcIixcbiAgICBcInVzZXJpbmZvXCIsXG4gICAgXCJQaG9uZSBObzogXCJcbiAgKTtcbiAgY29uc3QgZW1haWwgPSBmb3JtQ29uc3RydWN0b3IoXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiZW1haWxcIixcbiAgICBcInVzZXJpbmZvXCIsXG4gICAgXCJFbWFpbCBBZGRyZXNzOiBcIlxuICApO1xuICBjb25zdCBtZXNzYWdlID0gZm9ybUNvbnN0cnVjdG9yKFwidGV4dGFyZWFcIiwgXCJ0ZXh0XCIsIFwidXNlcmluZm9cIiwgXCJNZXNzYWdlOiBcIik7XG4gIGNvbnN0IHN1Ym1pdCA9IHN1Ym1pdEJ0bkNvbnN0cnVjdG9yKFwic3VibWl0XCIsIFwiU1VCTUlUXCIpO1xuXG4gIGZvcm1IZWFkZXIudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1QgVVNcIjtcblxuICBmb3JtQ29udGFpbmVyRWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb3JtLWNvbnRhaW5lclwiKTtcbiAgY29udGVudC5hcHBlbmQoZm9ybUhlYWRlciwgZm9ybUNvbnRhaW5lckVsKTtcblxuICBmb3JtQ29udGFpbmVyRWwuYXBwZW5kKG5hbWUsIHBob25lTnVtYmVyLCBlbWFpbCwgbWVzc2FnZSwgc3VibWl0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0TG9hZDtcbiIsImltcG9ydCBob21lTG9hZCBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbWVudUxvYWQgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGFib3V0TG9hZCBmcm9tIFwiLi9hYm91dFwiO1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIHRpdGxlRGl2LnRleHRDb250ZW50ID0gYEJvb21pbicgQnJlYWtmYXN0YDtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblxuICBjb25zdCBuYXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgbmF2RWwuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG5cbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbmF2RWwuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbiAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhYm91dEJ0bi50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgbmF2RWwuYXBwZW5kQ2hpbGQoYWJvdXRCdG4pO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXZFbCk7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59O1xuY3JlYXRlSGVhZGVyKCk7XG5ob21lTG9hZCgpO1xubWVudUxvYWQoKTtcbmFib3V0TG9hZCgpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBCcmVha2Zhc3RQaWMgZnJvbSBcIi4vaW1hZ2VzL2JyZWFrZmFzdC0xLmpwZ1wiO1xuXG5jb25zdCBob21lTG9hZCA9ICgpID0+IHtcbiAgY29uc3QgaG9tZUNvbnRhaW5lcmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVDb250YWluZXJkaXYuY2xhc3NMaXN0LmFkZChcImhvbWUtY29udGFpbmVyXCIpO1xuICBjb25zdCBteUltYWdlID0gbmV3IEltYWdlKCk7XG4gIG15SW1hZ2Uuc3JjID0gQnJlYWtmYXN0UGljO1xuICBob21lQ29udGFpbmVyZGl2LmFwcGVuZENoaWxkKG15SW1hZ2UpO1xuXG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGxpbmUuY2xhc3NMaXN0LmFkZChcImhlYWRsaW5lXCIpO1xuICBoZWFkbGluZS5pbm5lckhUTUwgPSBcIldlbGNvbWUgdG8gQm9vbWluJyBCcmVha2Zhc3QhXCI7XG4gIGhvbWVDb250YWluZXJkaXYuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gXG4gIFByb2luIG5pYmggdG9ydG9yLCBhY2N1bXNhbiBzZWQgYmxhbmRpdCBpbiwgdmVuZW5hdGlzIHF1aXMgZWxpdC4gRG9uZWMgaW4gZXggdGVsbHVzLiBcbiAgTW9yYmkgc2l0IGFtZXQgc2VtIHZpdGFlIGV4IHN1c2NpcGl0IHVsdHJpY2llcyB2ZWwgdmVsIG1hdXJpcy5gO1xuICBob21lQ29udGFpbmVyZGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUNvbnRhaW5lcmRpdik7XG5cbiAgcmV0dXJuIGhvbWVDb250YWluZXJkaXY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob21lTG9hZDtcbiJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJfayIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJzdHlsZXNJbkRPTSIsImdldEluZGV4QnlJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInJlc3VsdCIsIm1vZHVsZXNUb0RvbSIsIm9wdGlvbnMiLCJpZENvdW50TWFwIiwiaWRlbnRpZmllcnMiLCJiYXNlIiwiY291bnQiLCJpbmRleEJ5SWRlbnRpZmllciIsIm9iaiIsImNzcyIsInNvdXJjZU1hcCIsInJlZmVyZW5jZXMiLCJ1cGRhdGVyIiwiYWRkRWxlbWVudFN0eWxlIiwiYnlJbmRleCIsInNwbGljZSIsImFwaSIsImRvbUFQSSIsInVwZGF0ZSIsIm5ld09iaiIsInJlbW92ZSIsImxhc3RJZGVudGlmaWVycyIsIm5ld0xpc3QiLCJpbmRleCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pIiwiX2luZGV4IiwibWVtbyIsImluc2VydCIsInN0eWxlIiwidGFyZ2V0Iiwic3R5bGVUYXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsImhlYWQiLCJlIiwiZ2V0VGFyZ2V0IiwiRXJyb3IiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJzdHlsZUVsZW1lbnQiLCJub25jZSIsInNldEF0dHJpYnV0ZSIsImluc2VydFN0eWxlRWxlbWVudCIsInN0eWxlVGFnVHJhbnNmb3JtIiwiYXBwbHkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVTdHlsZUVsZW1lbnQiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImZpcnN0Q2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJuIiwiZ2V0dGVyIiwiX19lc01vZHVsZSIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJnIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInNjcmlwdFVybCIsImltcG9ydFNjcmlwdHMiLCJsb2NhdGlvbiIsImN1cnJlbnRTY3JpcHQiLCJzcmMiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJyZXBsYWNlIiwicCIsImZvcm1Db25zdHJ1Y3RvciIsInRhZ05hbWUiLCJ0eXBlIiwiY2xhc3NOYW1lIiwicGxhY2Vob2xkZXIiLCJlbCIsImhlYWRlciIsInRpdGxlRGl2IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJuYXZFbCIsImhvbWVCdG4iLCJtZW51QnRuIiwiYWJvdXRCdG4iLCJjcmVhdGVIZWFkZXIiLCJob21lQ29udGFpbmVyZGl2IiwibXlJbWFnZSIsIkltYWdlIiwiaGVhZGxpbmUiLCJpbm5lckhUTUwiLCJkZXNjcmlwdGlvbiIsImhvbWUiLCJtZW51SXRlbXMiLCJpbWFnZSIsInRpdGxlIiwibWVudU9wdGlvbiIsIm1lbnVJdGVtIiwibWVudUl0ZW1EaXYiLCJhZGRJbWFnZSIsIm1lbnVJbWciLCJhcHBlbmQiLCJhZGRUaXRsZSIsInRleHQiLCJtZW51VGl0bGUiLCJjcmVhdGVNZW51SXRlbSIsIm1lbnVDb250YWluZXIiLCJtZW51IiwiZm9ybUhlYWRlciIsImZvcm1Db250YWluZXJFbCIsIm5hbWUiLCJwaG9uZU51bWJlciIsImVtYWlsIiwibWVzc2FnZSIsInN1Ym1pdCIsInZhbHVlIiwic3VibWl0QnRuQ29uc3RydWN0b3IiLCJhYm91dCJdLCJzb3VyY2VSb290IjoiIn0=

(this["webpackJsonplords-toy"] = this["webpackJsonplords-toy"] || []).push([
  [0],
  {
    24: function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(0),
        a = e(1),
        i = e.n(a),
        c = e(13),
        o = e.n(c),
        u = e(2),
        d = e(3),
        s = "tabbing";
      function b(n) {
        "Tab" === n.code &&
          (document.body.classList.add(s),
          window.removeEventListener("keydown", b),
          window.addEventListener("mousedown", f));
      }
      function f() {
        document.body.classList.remove(s),
          window.removeEventListener("mousedown", f),
          window.addEventListener("keydown", b);
      }
      function p() {
        var n = Object(u.a)([
          "\n  body {\n    font-family: Roboto, sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  \n  body:not(.",
          ") *:focus {\n    outline-width: 0;\n  }\n",
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      var j = Object(d.a)(p(), s),
        l = e(5),
        A = e(9),
        g = "#09000e",
        O = 780,
        m = 1020,
        x = {
          M: "@media only screen and (min-width: ".concat(540, "px)"),
          L: "@media only screen and (min-width: ".concat(O, "px)"),
          XL: "@media only screen and (min-width: ".concat(m, "px)"),
        };
      function v() {
        var n = Object(u.a)([
          "\n  cursor: pointer;\n  color: white;\n  background-color: ",
          ";\n  padding-top: 10px;\n  padding-bottom: 11px;\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: 0.0125em;\n  width: 100%;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  transition-property: background-color, color;\n  transition-duration: 200ms;\n\n  &:hover {\n    background-color: ",
          ";\n    color: ",
          ";\n  }\n\n  ",
          " {\n    padding-top: 18px;\n    padding-bottom: 18px;\n  }\n",
        ]);
        return (
          (v = function () {
            return n;
          }),
          n
        );
      }
      var h = d.c.button(v(), "#5A3472", "#ffc230", g, x.M),
        w = function (n) {
          var t = n.text,
            e = n.htmlTitle,
            a = n.type,
            i = void 0 === a ? "button" : a,
            c = n.onClick;
          return Object(r.jsx)(h, {
            title: e,
            type: i,
            onClick: c,
            children: t,
          });
        };
      function y() {
        var n = Object(u.a)([
          "\n  color: white;\n  margin: 0;\n  text-align: center;\n  margin-top: auto;\n  padding-top: 16px;\n  padding-bottom: 14px;\n  padding-left: ",
          ";\n  padding-right: ",
          ";\n  box-sizing: border-box;\n  background-color: ",
          ";\n\n  ",
          " {\n    padding: 0;\n  }\n",
        ]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      function B() {
        var n = Object(u.a)([
          "\n  padding-left: ",
          ";\n  padding-right: ",
          ";\n  overflow-y: auto;\n\n  ",
          " {\n    padding-bottom: 28px;\n    padding-left: 20%;\n  }\n",
        ]);
        return (
          (B = function () {
            return n;
          }),
          n
        );
      }
      function L() {
        var n = Object(u.a)([
          "\n  padding-top: 16px;\n  padding-left: ",
          ";\n  padding-right: ",
          ";\n  padding-bottom: 22px;\n\n  ",
          " {\n    padding-top: 22px;\n    padding-bottom: 22px;\n  }\n\n  ",
          " {\n    padding-left: 20%;\n    padding-right: 340px;\n  }\n",
        ]);
        return (
          (L = function () {
            return n;
          }),
          n
        );
      }
      function k() {
        var n = Object(u.a)([
          "\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 100vh;\n\n  ",
          " {\n    margin-left: auto;\n    margin-right: auto;\n  }\n",
        ]);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      function C() {
        var n = Object(u.a)([
          "\n  background-color: ",
          ";\n  background-image: linear-gradient(\n    to bottom,\n    ",
          " 0%,\n    ",
          " 70%\n  );\n  min-height: 100vh;\n",
        ]);
        return (
          (C = function () {
            return n;
          }),
          n
        );
      }
      var F = "16px",
        E = {
          RootWrapper: d.c.div(C(), g, "#2f004a", g),
          PageLayout: d.c.article(k(), x.XL),
          Header: d.c.header(L(), F, F, x.M, x.XL),
          Main: d.c.main(B(), F, F, x.XL),
          Footer: d.c.footer(y(), F, F, g, x.XL),
        };
      function M() {
        var n = Object(u.a)([
          "\n  color: white;\n  margin: 0;\n  text-align: center;\n  letter-spacing: 0.0015em;\n  line-height: 28px;\n  font-weight: 500;\n  font-size: 20px;\n",
        ]);
        return (
          (M = function () {
            return n;
          }),
          n
        );
      }
      var J = d.c.h1(M()),
        U = e(4);
      function G() {
        var n = Object(u.a)([
          "\n  padding: 16px;\n  background-color: white;\n  border-radius: 8px;\n  display: flex;\n\n  ",
          " + ",
          " {\n    margin-left: 16px;\n  }\n\n  ",
          " + ",
          " {\n    margin-top: 3px;\n  }\n",
        ]);
        return (
          (G = function () {
            return n;
          }),
          n
        );
      }
      function X() {
        var n = Object(u.a)([
          "\n  letter-spacing: 0.0025em;\n  display: block;\n",
        ]);
        return (
          (X = function () {
            return n;
          }),
          n
        );
      }
      function I() {
        var n = Object(u.a)([
          "\n  font-weight: 500;\n  font-size: 20px;\n  margin: 0;\n  letter-spacing: 0.0015em;\n",
        ]);
        return (
          (I = function () {
            return n;
          }),
          n
        );
      }
      function R() {
        var n = Object(u.a)([""]);
        return (
          (R = function () {
            return n;
          }),
          n
        );
      }
      function V() {
        var n = Object(u.a)([""]);
        return (
          (V = function () {
            return n;
          }),
          n
        );
      }
      var N,
        Q,
        q,
        z,
        W = d.c.div(V()),
        Z = d.c.div(R()),
        D = d.c.h6(I()),
        K = d.c.span(X()),
        T = d.c.div(G(), W, Z, D, K),
        P = function (n) {
          var t = n.title,
            e = n.description,
            a = n.iconMark;
          return Object(r.jsxs)(T, {
            children: [
              a && Object(r.jsx)(W, { children: a }),
              Object(r.jsxs)(Z, {
                children: [
                  Object(r.jsx)(D, { children: t }),
                  Object(r.jsx)(K, { children: e }),
                ],
              }),
            ],
          });
        };
      function S() {
        var n = Object(u.a)(["\n  width: 21px;\n  height: 21px;\n  ", "\n"]);
        return (
          (S = function () {
            return n;
          }),
          n
        );
      }
      function H() {
        var n = Object(u.a)([
          "\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  ",
          "\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n",
        ]);
        return (
          (H = function () {
            return n;
          }),
          n
        );
      }
      function Y() {
        var n = Object(u.a)(["\n    transform: translate(-1px, 0px);\n  "]);
        return (
          (Y = function () {
            return n;
          }),
          n
        );
      }
      function $() {
        var n = Object(u.a)(["\n    transform: translate(-2px, -1px);\n  "]);
        return (
          ($ = function () {
            return n;
          }),
          n
        );
      }
      function _() {
        var n = Object(u.a)(["\n    transform: translate(-1px, 0px);\n  "]);
        return (
          (_ = function () {
            return n;
          }),
          n
        );
      }
      var nn,
        tn,
        en = "aliveCell",
        rn = "deadCell",
        an = "life",
        cn =
          ((N = {}),
          Object(U.a)(N, rn, "linear-gradient(180deg,#0D658A 0%,#B0FFB4 100%)"),
          Object(U.a)(N, en, "linear-gradient(180deg,#FFB800 0%,#FFF7B0 100%)"),
          Object(U.a)(N, an, "linear-gradient(180deg,#AD00FF 0%,#FFB0E9 100%)"),
          N),
        on =
          ((Q = {}),
          Object(U.a)(
            Q,
            rn,
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQWSURBVHgBtVVNbFRVGD3vf/5/oZa0Je2kpWksrVgxhhgTEmOargwgiRA3hhrdkLgiuIKN0YCu3LUGo3ShLoyJ2oVU4xhDGrWEFmtbpLQw1NqxdHjvzbyZ93f97muHZAhFN97My8x7797zne+cc+8A/8MQtnvBGBN+v3Hj8Wql+oJhVnJMwC4RLOL5/mpY026l49GvVvbsuXJQENz/BLqwsNCzYZTP2Y5zEKIUkWQZgrA51XM9OI4N13UQUtWftEjozNN9fZceCfrb3NzxkmF+IIlySguFoEUiUBUVsizB9304rgu7ZsOyKrAqZV5Fj4Yj5wb29b8jbLFuAJ2ZnX2lUqmOSIqiRWMxRGNxcGBFUSCKIpcErkdMbRvVahWmrsM0dCpSZYlE/K19e/e+S8DsPuj8/HzunmnOCqKkxeJxJJJJhMNRKBqxlETw7hnNI7LUOgeuoWya0Esl6Po9uFQpFg4/PzAw8KNYB9VN81V6rom0WCJWnJ2iyFBkETI9k7F5KbRCpWcqvQ+FNGhUVCHNPddVSZo3sDUvGLWq1eL7rO79JiX+zT9Co07cNH5P/IMuOBHfc1Eum082gLqOKws0gbP0STeXO+yodC+B0SpGQCQpATIwKs5BfM8J5srElOtNydAaQMkIg/MRt1qfmZnGdxMTpJ+Lw0eOoK//iQD06pUpfDg6SubU8NT+/Xjx0KFApoC5KBgNoIoiLTuuD8/zMXbxIt4/fx6aqlL3DGMff4Kp6Wm+I/DmyZO4XbgdFB8f/wY/5PM4c/ZsYCLp+2sDaCyWGNd1/W1yVfzowgVkd2QR0rQgm4ZhwKD4MObDJlmamh6DJEmUVQvXqFjh1jLCQfS0L4Ku66C9vb3XqPqMR1pls1mk02lkMlmkUim0tbWRwxIZIqC7uxuJRIKAm9DS0hLMdRyH27fY3Nycb2BKjvqXJyepkt8/ODjIcxtkc2OjhBPDw4EZMslxYvg1jI6MIJPNkDwaeKaTVIQQLnd0dJQaQBEE2zWikSiOHn0Ji4uLsGjXdHV2EkAWn372ebCTjh17GadPn8LC9esoVyz0EHPuklWx9DpOA2jNqn1Nu+R1SZY6k8m4kE4lg8Pjr9U/8f3EJaiqglyuHbtJjkwmTQzjuLuxzuO0oqnhL+93jQdGPp/ftbp65xmfscOCKB5Pk6bcBG4Yv0TKred7WFtbo3v2LQk9loqnJoaGhgrbgtZHoVDI/vzL5JTv+bvpsCCWGs8hapTPYvHvoMCBA8/2kI5zD64VtwNtbW1dh8eurq/fpQIrWF5axtLNJdyh38W1Ij8Ob7a3t//xsLUyHjEoj8WdO3YGLLmGJp1KfIfx06liWUXhIaf+v4LarnuKojQNCc/Rv0CTKAk2c+FWbXsq19X13nbr/gG3H9QmDsBfOQAAAABJRU5ErkJggg=="
          ),
          Object(U.a)(
            Q,
            en,
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOwSURBVHgBvVVtaFtVGH7PPffefDZd83GzJrfpXNp1izZOIqJMsaMTVHQVNYpFKUoR3ZiKDFFk7vpL7Q/HEPGPshVFpWPsQ5lFpk6xQ3F1DkMnpY1rE+wSk3RN0tzb+3GON8OWtHWLivj8uJfzvu/z8LzvC+cA/N8Yiscx/AswV0tG/Upods8jt6+Mn9/Z7VkZo1IXSwFQXdGPvZ9MAUYvyK/2bl0im0TB598lSdIS99cdd69V8No+dDldR1SSgAChwxzHn5D/dDyx6y5vA88+vBd+clXPBSkeCjQ3faoZ2sgi74qiB7q6rFVX6VT+qKbpJczjI+UX799ms3A3MYR06Bobye7Y3mYn+Fuk6fMu6fAvdUU3NcuN+efv2y828mFDVs/Rja1NHMMNehD3nGHhkVpRH3N5rCOIwy2Gqg7WctnqZygOuAPf1iW6nJ0sZnL6gjIpL5RTCyXtpK/RelSXVZ3JXwLjnmgAHRkNQGcA2OzsU2h7J5CPfrhILsnDtaKo9nC+b2vMhy0DDTy+VSe0TO1sGiraOkZwumh7E3DbTJHM7wB2G6ByGWgqC8bh8QOOD75+YpXTpZYHvxo1f92Jnlt6RYtlwOZwRsmj64FoOrD+JqCEAbb9AUBUBlI6B8bgadAKc6ers1/c/CqntRiJhgXR43zTzXK9TLcH8T0RQMEnATeIJl0FLfkO6F8OAz1VNNAFJcGo8G6+UjoeHJuZXuZUMhfXF/EJDHbea+GZB/G8ukUNA+Jtc0AK48AIWbMqZDqvABQzwKTMOauqIldURQfGW7Q4gmbBctGIKFp+NPCmAEeLnGocYzUlKYyhfi4is4h1A0ruA6N8J5Czh8ziG6Ayki9dnMGxit1/4cbRUa1u+wnR27vmWttex/XcBlQ2wJjQoXG3HZQzPMgHc4prd9CqqgXQBuSX3NOZ1+FK26/i+2CDx42516wI9yNK0QKFImLQvNWgzZ59dijs104lfiPPbNaNz1zP2oPlk1qGm4TrXOMzuUUNpnae34SELXZs/VBFeM0UYp8+w1qj72Onf54abxCzZu6YUSpO63vuSGZ+ThiWm3NvKWOsA/s1VX/5L9sdivicB9tawrTmoljE2VbPznTIQ5PXCG/Xxk+0BcV02P/F7HrfbG5D80b4J0i0evunQu78RNgvrDYjulOtvkP5db73aCzGLWv/alAJIQrmX2mbzGRX5h4aSxeOO+DxIoOYTD4dg7+Lz9uDm6V616SZ/66jpQf+a8QBLj8/fwA3kXd0k1DBywAAAABJRU5ErkJggg=="
          ),
          Object(U.a)(
            Q,
            an,
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARDSURBVHgBnVRLaFxVGP7Ofc2dmcxk5jaZxGQmBGnRmGJapaalIgZLjS4UFxoXllIrhUhBK7hoRRm1iLU+VqKLIEpaFym4UYqWkEopWjC40JKaJvYRk8lMHvO+73vP8UwCgZCkDR04MPfe///O9z++D9jEjzEQdvmBSOHijljt/93i7xrA/tzaSJWG41C156EoIL43QSzjS9Ix8uM9gbJRyJC6fmENHT0svhVEVAHfAsq3mbd4+5Cy/dJ36+UJdwJ18lvetoONPZmyBohxQGoGFbeAyTHC7OKHG+VtCGoMBVulROLoT1fq8dmAjIpu8LpMZKdv4r+pHC8xn5w8jcR6udJGoIVF9YUtXvi+xiZAi1xFZD4GasTxzZkqjIqO9MEoSdyPbTx0btOg1YKqBCcXsHdXEN2dUZgXLoPEm/BwZxscywL1RVhVJcmbtHmmAaLn9GkdqmBCagrj6piO5G4Lz3UX4ZcMVMZykBPtKptuewkBzrYh8xshY0s3rJo+yz65nTrkBDXdmHNtMpa/VtijKAzROgE+EyCGFZ7BYJQdZOZspHY0OcQmihiSPSXZcFZG5E2y89fiClM2+fij1t8zF83xTIS6Pos9ppGWQBjegg5ft+GZDGXOsGTzIfLxtj8YgCrqSv6fCgSBSfJE9mD4odYqhzq6xJRd6Y7qN29d0P+d63Y9QE1FWeypTiLIPojBp17mR7fg2y5fJxFCrAW+qMA1KyiMXIdreJ5EGFXCsiSmGvcvMc1fv/E0c5KPOJLgVR1TrKsPEMoBEOmCUMcD6sf50vsQXAbmcxLRV0HCvSCZs5gND+BWXsyqgjvW0dL+R2BudGppT52yOebufG849MqwONF8ACVXAwsdAKKfgkr9oCYBtRmoshtofB+oexaEC0FuOQJdbEZq34mknXxmv7z35ELqjfLEyqDGR0c+qm9uO+7aOgKiiXhrF2ra4HCcJV/FxTNAw2tcWdryDLizgH+rlubgez5KiznQcrFv257eoRVFlXIzl8r5eUiBEAL1KbiODkptUEbBxAQ87XUwIcrfubwTNj8WHLumMgmO68I2THd+fvavVXta0md+93LqlAfW5roRBIIhSLIMUZDB4EMUZfCblhhS6sPzXP7owrIMVIt5lLNTo5nB8xNr9vT84BfvhhLJDyJxDcFQCDK3OkEgfDgmZDVWK5oDUnjuMqjNlWUYFeiFBd6h6b7ew+8MrVHUZOHGJ822t69qGE8EwxEoagCSJPATAC1mOEt+AQd1ebkuZ12Tq1kpwSlkB/v60+dweBlnjZ8OpI9pghb/ORjTdtVasMxW5JFkpXS/BurYMPUKnFL+B69a6O9Pf71iLOua9OfHXgyKWuq0HI4eUYIhWao5Pgeugfq8bM9xYHGromb1VInNnkqnz61ylTs6/8m3DqWIqr4sSlKPKCkJWmPqeTnPtYb1UvXbj7/6vrBe3v/3/w9qDYttvAAAAABJRU5ErkJggg=="
          ),
          Q),
        un =
          ((q = {}),
          Object(U.a)(q, rn, "skull"),
          Object(U.a)(q, en, "flash"),
          Object(U.a)(q, an, "chicken"),
          q),
        dn =
          ((z = {}),
          Object(U.a)(z, rn, Object(d.b)(_())),
          Object(U.a)(z, en, Object(d.b)($())),
          Object(U.a)(z, an, Object(d.b)(Y())),
          z),
        sn = d.c.div(H(), function (n) {
          var t = n.type;
          return "background-image: ".concat(cn[t], ";");
        }),
        bn = d.c.img(S(), function (n) {
          var t = n.type;
          return dn[t];
        }),
        fn = function (n) {
          var t = n.type;
          return Object(r.jsx)(sn, {
            type: t,
            children: Object(r.jsx)(bn, {
              type: t,
              alt: un[t],
              width: "21px",
              height: "auto",
              src: on[t],
            }),
          });
        };
      function pn() {
        var n = Object(u.a)(["\n  ", ";\n"]);
        return (
          (pn = function () {
            return n;
          }),
          n
        );
      }
      function jn() {
        var n = Object(u.a)(["\n    animation: 400ms ease-in ", ";\n  "]);
        return (
          (jn = function () {
            return n;
          }),
          n
        );
      }
      function ln() {
        var n = Object(u.a)(["\n    animation: 500ms linear ", ";\n  "]);
        return (
          (ln = function () {
            return n;
          }),
          n
        );
      }
      function An() {
        var n = Object(u.a)(["\n    animation: 400ms ease-in ", ";\n  "]);
        return (
          (An = function () {
            return n;
          }),
          n
        );
      }
      function gn() {
        var n = Object(u.a)([
          "\n    0% {\n      transform: translate(-100%, 0);\n      opacity: 0;\n    }\n    50% {\n      transform: translate(4px, 0);\n      opacity: 1\n    }\n    100% {\n      transform: translate(0, 0);\n    }\n  ",
        ]);
        return (
          (gn = function () {
            return n;
          }),
          n
        );
      }
      function On() {
        var n = Object(u.a)([
          "\n    0% {\n      transform: translate(0, 0);\n    }\n    10% {\n      transform: translate(2px, -2px);\n    }\n    20% {\n      transform: translate(0, 0);\n    }\n    30% {\n      transform: translate(-2px, -2px);\n    }\n    40% {\n      transform: translate(1px, -1px);\n    }\n    50% {\n      transform: translate(0, 0);\n    }\n    60% {\n      transform: translate(-3px, -3px);\n    }\n    70% {\n      transform: translate(0, 0);\n    }\n    80% {\n      transform: translate(2px, -2px);\n    }\n    90% {\n      transform: translate(-1px, -1px);\n    }\n    100% {\n      transform: translate(0, 0);\n    }\n  ",
        ]);
        return (
          (On = function () {
            return n;
          }),
          n
        );
      }
      function mn() {
        var n = Object(u.a)([
          "\n    0% {\n      opacity: 0;\n      transform: scale(0);\n    }\n    60% {\n      opacity: 0.3;\n      transform: scale(0.6);\n    }\n    80% {\n      opacity: 0.5;\n      transform: scale(0.8);\n    }\n    100% {\n      opacity: 1;\n      transform: scale(1);\n    }\n  ",
        ]);
        return (
          (mn = function () {
            return n;
          }),
          n
        );
      }
      var xn,
        vn = "fadeId",
        hn = "tremble",
        wn = "fromLeft",
        yn =
          ((nn = {}),
          Object(U.a)(nn, vn, Object(d.d)(mn())),
          Object(U.a)(nn, hn, Object(d.d)(On())),
          Object(U.a)(nn, wn, Object(d.d)(gn())),
          nn),
        Bn =
          ((tn = {}),
          Object(U.a)(tn, vn, Object(d.b)(An(), yn[vn])),
          Object(U.a)(tn, hn, Object(d.b)(ln(), yn[hn])),
          Object(U.a)(tn, wn, Object(d.b)(jn(), yn[wn])),
          tn),
        Ln = d.c.div(pn(), function (n) {
          var t = n.type;
          return Bn[t];
        }),
        kn = function (n) {
          var t = n.type,
            e = n.children,
            i = Object(a.useState)(!1),
            c = Object(A.a)(i, 2),
            o = c[0],
            u = c[1];
          return (
            Object(a.useEffect)(function () {
              requestAnimationFrame(function () {
                u(!0);
              });
            }, []),
            Object(r.jsx)(Ln, { animated: o, type: t, children: e })
          );
        },
        Cn = function () {
          return Object(r.jsx)(kn, {
            type: wn,
            children: Object(r.jsx)(P, {
              title: "\u0416\u0438\u0432\u0430\u044f",
              description:
                "\u0438 \u0448\u0435\u0432\u0435\u043b\u0438\u0442\u0441\u044f!",
              iconMark: Object(r.jsx)(fn, { type: en }),
            }),
          });
        },
        Fn = function () {
          return Object(r.jsx)(kn, {
            type: hn,
            children: Object(r.jsx)(P, {
              title: "\u041c\u0451\u0440\u0442\u0432\u0430\u044f",
              description:
                "\u0438\u043b\u0438 \u043f\u0440\u0438\u043a\u0438\u0434\u044b\u0432\u0430\u0435\u0442\u0441\u044f",
              iconMark: Object(r.jsx)(fn, { type: rn }),
            }),
          });
        },
        En = function () {
          return Object(r.jsx)(kn, {
            type: vn,
            children: Object(r.jsx)(P, {
              title: "\u0416\u0438\u0437\u043d\u044c",
              description: "\u041a\u0443-\u043a\u0443!",
              iconMark: Object(r.jsx)(fn, { type: an }),
            }),
          });
        };
      function Mn() {
        var n = Object(u.a)([
          "\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  ",
          " {\n    width: 70%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  ",
          " {\n    margin-left: 0;\n    width: calc(100% - 340px);\n  }\n\n  ",
          " + ",
          " {\n    margin-top: 4px;\n\n    ",
          " {\n      margin-top: 10px;\n    }\n  }\n",
        ]);
        return (
          (Mn = function () {
            return n;
          }),
          n
        );
      }
      function Jn() {
        var n = Object(u.a)([""]);
        return (
          (Jn = function () {
            return n;
          }),
          n
        );
      }
      var Un = "aliveCell",
        Gn = "deadCell",
        Xn = "life",
        In =
          ((xn = {}),
          Object(U.a)(xn, Un, Object(r.jsx)(Cn, {})),
          Object(U.a)(xn, Gn, Object(r.jsx)(Fn, {})),
          Object(U.a)(xn, Xn, Object(r.jsx)(En, {})),
          xn),
        Rn = d.c.li(Jn()),
        Vn = d.c.ul(Mn(), x.M, x.XL, Rn, Rn, x.L),
        Nn = function (n) {
          var t = n.list;
          return Object(r.jsx)(Vn, {
            children: t.map(function (n) {
              return Object(r.jsx)(Rn, { children: In[n.kind] }, n.id);
            }),
          });
        };
      function Qn() {
        var n = Object(u.a)([
          "\n  ",
          " {\n    width: 70%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  ",
          " {\n    position: absolute;\n    right: 36px;\n    top: 72px;\n    width: 300px;\n  }\n",
        ]);
        return (
          (Qn = function () {
            return n;
          }),
          n
        );
      }
      var qn = d.c.div(Qn(), x.L, x.XL),
        zn = function () {
          var n = Object(a.useState)([]),
            t = Object(A.a)(n, 2),
            e = t[0],
            i = t[1],
            c = Object(a.useRef)(null);
          Object(a.useEffect)(
            function () {
              !(function (n) {
                var t = null === n || void 0 === n ? void 0 : n.current;
                t && (t.scrollTop = t.scrollHeight);
              })(c);
            },
            [e]
          );
          return Object(r.jsx)(E.RootWrapper, {
            children: Object(r.jsxs)(E.PageLayout, {
              children: [
                Object(r.jsx)(E.Header, {
                  children: Object(r.jsx)(J, {
                    children:
                      "\u041a\u043b\u0435\u0442\u043e\u0447\u043d\u043e\u0435 \u043d\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435",
                  }),
                }),
                Object(r.jsx)(E.Main, {
                  ref: c,
                  children: Object(r.jsx)(Nn, { list: e }),
                }),
                Object(r.jsx)(E.Footer, {
                  children: Object(r.jsx)(qn, {
                    children: Object(r.jsx)(w, {
                      type: "button",
                      text:
                        "\u0421\u043e\u0442\u0432\u043e\u0440\u0438\u0442\u044c",
                      onClick: function () {
                        var n = {
                            kind: Boolean(Math.random() < 0.5) ? Un : Gn,
                            id: Math.random(),
                          },
                          t = [].concat(Object(l.a)(e), [n]);
                        !(function (n) {
                          return (
                            n.length > 1 &&
                            n.slice(n.length - 2).every(function (n) {
                              return n.kind === Un;
                            })
                          );
                        })(t)
                          ? !(function (n) {
                              var t = n.slice(n.length - 3).every(function (n) {
                                  return n.kind === Gn;
                                }),
                                e = n.length > 3 && n[n.length - 4].kind === Xn;
                              return t && e;
                            })(t)
                            ? i(t)
                            : i(
                                (function (n) {
                                  var t = n.length - 4;
                                  return [].concat(
                                    Object(l.a)(n.slice(0, t)),
                                    Object(l.a)(n.slice(t + 1))
                                  );
                                })(t)
                              )
                          : i(
                              [].concat(Object(l.a)(t), [
                                { kind: Xn, id: Math.random() },
                              ])
                            );
                      },
                    }),
                  }),
                }),
              ],
            }),
          });
        };
      var Wn = function () {
          return (
            Object(a.useEffect)(function () {
              return window.addEventListener("keydown", b);
            }, []),
            Object(r.jsxs)(r.Fragment, {
              children: [Object(r.jsx)(j, {}), Object(r.jsx)(zn, {})],
            })
          );
        },
        Zn = function (n) {
          n &&
            n instanceof Function &&
            e
              .e(3)
              .then(e.bind(null, 25))
              .then(function (t) {
                var e = t.getCLS,
                  r = t.getFID,
                  a = t.getFCP,
                  i = t.getLCP,
                  c = t.getTTFB;
                e(n), r(n), a(n), i(n), c(n);
              });
        };
      o.a.render(
        Object(r.jsx)(i.a.StrictMode, { children: Object(r.jsx)(Wn, {}) }),
        document.getElementById("root")
      ),
        Zn();
    },
  },
  [[24, 1, 2]],
]);
//# sourceMappingURL=main.66cd17f6.chunk.js.map

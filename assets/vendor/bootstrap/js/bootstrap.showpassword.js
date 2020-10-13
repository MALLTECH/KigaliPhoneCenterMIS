/**
 * bootstrap-show-password - Show/hide password plugin for twitter bootstrap.
 *
 * @version v1.2.1
 * @homepage https://github.com/wenzhixin/bootstrap-show-password
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @license MIT
 */

(function (a, b) {
  "object" == typeof exports && "undefined" != typeof module
    ? b(require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["jquery"], b)
    : ((a = a || self), b(a.jQuery));
})(this, function (a) {
  "use strict";
  var h = Math.max,
    i = Math.min,
    j = Math.floor;
  function b(a, b) {
    return (b = { exports: {} }), a(b, b.exports), b.exports;
  }
  function c(a) {
    return (
      (c =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (a) {
              return typeof a;
            }
          : function (a) {
              return a &&
                "function" == typeof Symbol &&
                a.constructor === Symbol &&
                a !== Symbol.prototype
                ? "symbol"
                : typeof a;
            }),
      c(a)
    );
  }
  function d(a, b) {
    if (!(a instanceof b))
      throw new TypeError("Cannot call a class as a function");
  }
  function e(a, b) {
    for (var c, d = 0; d < b.length; d++)
      (c = b[d]),
        (c.enumerable = c.enumerable || !1),
        (c.configurable = !0),
        "value" in c && (c.writable = !0),
        Object.defineProperty(a, c.key, c);
  }
  function g(a, b, c) {
    return b && e(a.prototype, b), c && e(a, c), a;
  }
  a = a && a.hasOwnProperty("default") ? a["default"] : a;
  var k,
    l,
    m,
    n = {}.toString,
    o = function (a) {
      return n.call(a).slice(8, -1);
    },
    p =
      Array.isArray ||
      function (a) {
        return "Array" == o(a);
      },
    q = function (a) {
      return "object" == typeof a ? null !== a : "function" == typeof a;
    },
    r = function (a) {
      if (a == null) throw TypeError("Can't call method on " + a);
      return a;
    },
    s = function (a) {
      return Object(r(a));
    },
    t = Math.ceil,
    u = function (a) {
      return isNaN((a = +a)) ? 0 : (0 < a ? j : t)(a);
    },
    v = function (a) {
      return 0 < a ? i(u(a), 9007199254740991) : 0;
    },
    w = function (a, b) {
      if (!q(a)) return a;
      var c, d;
      if (b && "function" == typeof (c = a.toString) && !q((d = c.call(a))))
        return d;
      if ("function" == typeof (c = a.valueOf) && !q((d = c.call(a)))) return d;
      if (!b && "function" == typeof (c = a.toString) && !q((d = c.call(a))))
        return d;
      throw TypeError("Can't convert object to primitive value");
    },
    x = function (a) {
      try {
        return !!a();
      } catch (a) {
        return !0;
      }
    },
    y = !x(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
    z =
      "object" == typeof window && window && window.Math == Math
        ? window
        : "object" == typeof self && self && self.Math == Math
        ? self
        : Function("return this")(),
    A = z.document,
    B = q(A) && q(A.createElement),
    C = function (a) {
      return B ? A.createElement(a) : {};
    },
    D =
      !y &&
      !x(function () {
        return (
          7 !=
          Object.defineProperty(C("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    E = function (a) {
      if (!q(a)) throw TypeError(a + " is not an object");
      return a;
    },
    F = Object.defineProperty,
    G = y
      ? F
      : function (a, b, c) {
          if ((E(a), (b = w(b, !0)), E(c), D))
            try {
              return F(a, b, c);
            } catch (a) {}
          if ("get" in c || "set" in c)
            throw TypeError("Accessors not supported");
          return "value" in c && (a[b] = c.value), a;
        },
    f = { f: G },
    H = function (a, b) {
      return {
        enumerable: !(1 & a),
        configurable: !(2 & a),
        writable: !(4 & a),
        value: b,
      };
    },
    I = function (a, b, c) {
      var d = w(b);
      d in a ? f.f(a, d, H(0, c)) : (a[d] = c);
    },
    J = y
      ? function (a, b, c) {
          return f.f(a, b, H(1, c));
        }
      : function (a, b, c) {
          return (a[b] = c), a;
        },
    K = function (a, b) {
      try {
        J(z, a, b);
      } catch (c) {
        z[a] = b;
      }
      return b;
    },
    L = b(function (a) {
      var b = z["__core-js_shared__"] || K("__core-js_shared__", {});
      (a.exports = function (a, c) {
        return b[a] || (b[a] = c === void 0 ? {} : c);
      })("versions", []).push({
        version: "3.0.1",
        mode: "global",
        copyright: "\xA9 2019 Denis Pushkarev (zloirock.ru)",
      });
    }),
    M = 0,
    N = Math.random(),
    O = function (a) {
      return "Symbol(".concat(
        a === void 0 ? "" : a,
        ")_",
        (++M + N).toString(36)
      );
    },
    P = !x(function () {
      return !(Symbol() + "");
    }),
    Q = L("wks"),
    R = z.Symbol,
    S = function (a) {
      return Q[a] || (Q[a] = (P && R[a]) || (P ? R : O)("Symbol." + a));
    },
    T = S("species"),
    U = function (a, b) {
      var c;
      return (
        p(a) &&
          ((c = a.constructor),
          "function" == typeof c && (c === Array || p(c.prototype))
            ? (c = void 0)
            : q(c) && ((c = c[T]), null === c && (c = void 0))),
        new (void 0 === c ? Array : c)(0 === b ? 0 : b)
      );
    },
    V = S("species"),
    W = {}.propertyIsEnumerable,
    X = Object.getOwnPropertyDescriptor,
    Y = X && !W.call({ 1: 2 }, 1),
    Z = Y
      ? function (a) {
          var b = X(this, a);
          return !!b && b.enumerable;
        }
      : W,
    _ = { f: Z },
    aa = "".split,
    ba = x(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (a) {
          return "String" == o(a) ? aa.call(a, "") : Object(a);
        }
      : Object,
    ca = function (a) {
      return ba(r(a));
    },
    da = {}.hasOwnProperty,
    ea = function (a, b) {
      return da.call(a, b);
    },
    fa = Object.getOwnPropertyDescriptor,
    ga = y
      ? fa
      : function (a, b) {
          if (((a = ca(a)), (b = w(b, !0)), D))
            try {
              return fa(a, b);
            } catch (a) {}
          return ea(a, b) ? H(!_.f.call(a, b), a[b]) : void 0;
        },
    ha = { f: ga },
    ia = L("native-function-to-string", Function.toString),
    ja = z.WeakMap,
    ka = "function" == typeof ja && /native code/.test(ia.call(ja)),
    la = L("keys"),
    ma = function (a) {
      return la[a] || (la[a] = O(a));
    },
    na = {},
    oa = z.WeakMap,
    pa = function (a) {
      return m(a) ? l(a) : k(a, {});
    };
  if (ka) {
    var qa = new oa(),
      ra = qa.get,
      sa = qa.has,
      ta = qa.set;
    (k = function (a, b) {
      return ta.call(qa, a, b), b;
    }),
      (l = function (a) {
        return ra.call(qa, a) || {};
      }),
      (m = function (a) {
        return sa.call(qa, a);
      });
  } else {
    var ua = ma("state");
    (na[ua] = !0),
      (k = function (a, b) {
        return J(a, ua, b), b;
      }),
      (l = function (a) {
        return ea(a, ua) ? a[ua] : {};
      }),
      (m = function (a) {
        return ea(a, ua);
      });
  }
  var va = {
      set: k,
      get: l,
      has: m,
      enforce: pa,
      getterFor: function (a) {
        return function (b) {
          var c;
          if (!q(b) || (c = l(b)).type !== a)
            throw TypeError("Incompatible receiver, " + a + " required");
          return c;
        };
      },
    },
    wa = b(function (a) {
      var b = va.get,
        c = va.enforce,
        d = (ia + "").split("toString");
      L("inspectSource", function (a) {
        return ia.call(a);
      }),
        (a.exports = function (a, b, e, f) {
          var g = !!f && !!f.unsafe,
            h = !!f && !!f.enumerable,
            i = !!f && !!f.noTargetGet;
          return ("function" == typeof e &&
            ("string" == typeof b && !ea(e, "name") && J(e, "name", b),
            (c(e).source = d.join("string" == typeof b ? b : ""))),
          a === z)
            ? void (h ? (a[b] = e) : K(b, e))
            : void (g ? !i && a[b] && (h = !0) : delete a[b],
              h ? (a[b] = e) : J(a, b, e));
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && b(this).source) || ia.call(this);
        });
    }),
    xa = function (a, b) {
      var c = u(a);
      return 0 > c ? h(c + b, 0) : i(c, b);
    },
    ya = (function (a) {
      return function (b, c, d) {
        var e,
          f = ca(b),
          g = v(f.length),
          h = xa(d, g);
        if (a && c != c) {
          for (; g > h; ) if (((e = f[h++]), e != e)) return !0;
        } else
          for (; g > h; h++)
            if ((a || h in f) && f[h] === c) return a || h || 0;
        return !a && -1;
      };
    })(!1),
    za = function (a, b) {
      var c,
        d = ca(a),
        e = 0,
        f = [];
      for (c in d) !ea(na, c) && ea(d, c) && f.push(c);
      for (; b.length > e; ) ea(d, (c = b[e++])) && (~ya(f, c) || f.push(c));
      return f;
    },
    Aa = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ],
    Ba = Aa.concat("length", "prototype"),
    Ca =
      Object.getOwnPropertyNames ||
      function (a) {
        return za(a, Ba);
      },
    Da = { f: Ca },
    Ea = Object.getOwnPropertySymbols,
    Fa = { f: Ea },
    Ga = z.Reflect,
    Ha =
      (Ga && Ga.ownKeys) ||
      function (a) {
        var b = Da.f(E(a)),
          c = Fa.f;
        return c ? b.concat(c(a)) : b;
      },
    Ia = function (a, b) {
      for (var c, d = Ha(b), e = f.f, g = ha.f, h = 0; h < d.length; h++)
        (c = d[h]), ea(a, c) || e(a, c, g(b, c));
    },
    Ja = /#|\.prototype\./,
    Ka = function (a, b) {
      var c = Ma[La(a)];
      return !(c != Oa) || (c != Na && ("function" == typeof b ? x(b) : !!b));
    },
    La = (Ka.normalize = function (a) {
      return (a + "").replace(Ja, ".").toLowerCase();
    }),
    Ma = (Ka.data = {}),
    Na = (Ka.NATIVE = "N"),
    Oa = (Ka.POLYFILL = "P"),
    Pa = ha.f,
    Qa = function (a, b) {
      var c,
        d,
        e,
        f,
        g,
        h,
        i = a.target,
        j = a.global,
        k = a.stat;
      if (((d = j ? z : k ? z[i] || K(i, {}) : (z[i] || {}).prototype), d))
        for (e in b) {
          if (
            ((g = b[e]),
            a.noTargetGet ? ((h = Pa(d, e)), (f = h && h.value)) : (f = d[e]),
            (c = Ka(j ? e : i + (k ? "." : "#") + e, a.forced)),
            !c && void 0 !== f)
          ) {
            if (typeof g == typeof f) continue;
            Ia(g, f);
          }
          (a.sham || (f && f.sham)) && J(g, "sham", !0), wa(d, e, g, a);
        }
    },
    Ra = S("isConcatSpreadable"),
    Sa = 9007199254740991,
    Ta = "Maximum allowed index exceeded",
    Ua = !x(function () {
      var a = [];
      return (a[Ra] = !1), a.concat()[0] !== a;
    }),
    Va = (function (a) {
      return !x(function () {
        var b = [],
          c = (b.constructor = {});
        return (
          (c[V] = function () {
            return { foo: 1 };
          }),
          1 !== b[a](Boolean).foo
        );
      });
    })("concat"),
    Wa = function (a) {
      if (!q(a)) return !1;
      var b = a[Ra];
      return b === void 0 ? p(a) : !!b;
    };
  Qa(
    { target: "Array", proto: !0, forced: !Ua || !Va },
    {
      concat: function () {
        var a,
          b,
          c,
          d,
          e,
          f = s(this),
          g = U(f, 0),
          h = 0;
        for (a = -1, c = arguments.length; a < c; a++)
          if (((e = -1 === a ? f : arguments[a]), Wa(e))) {
            if (((d = v(e.length)), h + d > Sa)) throw TypeError(Ta);
            for (b = 0; b < d; b++, h++) b in e && I(g, h, e[b]);
          } else {
            if (h >= Sa) throw TypeError(Ta);
            I(g, h++, e);
          }
        return (g.length = h), g;
      },
    }
  );
  var Xa = function (a) {
      if ("function" != typeof a) throw TypeError(a + " is not a function");
      return a;
    },
    Ya = function (d, e, f) {
      return (Xa(d), void 0 === e)
        ? d
        : 0 === f
        ? function () {
            return d.call(e);
          }
        : 1 === f
        ? function (b) {
            return d.call(e, b);
          }
        : 2 === f
        ? function (c, a) {
            return d.call(e, c, a);
          }
        : 3 === f
        ? function (f, a, b) {
            return d.call(e, f, a, b);
          }
        : function () {
            return d.apply(e, arguments);
          };
    },
    Za =
      Object.keys ||
      function (a) {
        return za(a, Aa);
      },
    $a = y
      ? Object.defineProperties
      : function (a, b) {
          E(a);
          for (var c, d = Za(b), e = d.length, g = 0; e > g; )
            f.f(a, (c = d[g++]), b[c]);
          return a;
        },
    _a = z.document,
    ab = _a && _a.documentElement,
    bb = ma("IE_PROTO"),
    cb = "prototype",
    db = function () {},
    eb = function () {
      var a,
        b = C("iframe"),
        c = Aa.length,
        d = "<",
        e = "script",
        f = ">";
      for (
        b.style.display = "none",
          ab.appendChild(b),
          b.src = "java" + e + ":" + "",
          a = b.contentWindow.document,
          a.open(),
          a.write(d + e + f + "document.F=Object" + d + "/" + e + f),
          a.close(),
          eb = a.F;
        c--;

      )
        delete eb[cb][Aa[c]];
      return eb();
    },
    fb =
      Object.create ||
      function (a, b) {
        var c;
        return (
          null === a
            ? (c = eb())
            : ((db[cb] = E(a)), (c = new db()), (db[cb] = null), (c[bb] = a)),
          void 0 === b ? c : $a(c, b)
        );
      };
  na[bb] = !0;
  var gb = S("unscopables"),
    hb = Array.prototype;
  hb[gb] == null && J(hb, gb, fb(null));
  var ib = (function (a, b) {
      var c = 1 == a,
        d = 4 == a,
        e = 6 == a,
        f = b || U;
      return function (b, g, h) {
        for (
          var i,
            j,
            k = s(b),
            l = ba(k),
            m = Ya(g, h, 3),
            n = v(l.length),
            o = 0,
            p = c ? f(b, n) : 2 == a ? f(b, 0) : void 0;
          n > o;
          o++
        )
          if ((5 == a || e || o in l) && ((i = l[o]), (j = m(i, o, k)), a))
            if (c) p[o] = j;
            else if (j)
              switch (a) {
                case 3:
                  return !0;
                case 5:
                  return i;
                case 6:
                  return o;
                case 2:
                  p.push(i);
              }
            else if (d) return !1;
        return e ? -1 : 3 == a || d ? d : p;
      };
    })(5),
    jb = "find",
    kb = !0;
  jb in [] &&
    [,][jb](function () {
      kb = !1;
    }),
    Qa(
      { target: "Array", proto: !0, forced: kb },
      {
        find: function (a) {
          return ib(this, a, 1 < arguments.length ? arguments[1] : void 0);
        },
      }
    ),
    (function (a) {
      hb[gb][a] = !0;
    })(jb);
  var lb = [].join,
    mb = ba != Object,
    nb = (function (a, b) {
      var c = [][a];
      return (
        !c ||
        !x(function () {
          c.call(
            null,
            b ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    })("join", ",");
  Qa(
    { target: "Array", proto: !0, forced: mb || nb },
    {
      join: function (a) {
        return lb.call(ca(this), a === void 0 ? "," : a);
      },
    }
  );
  var ob =
      "[\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]",
    pb = RegExp("^" + ob + ob + "*"),
    qb = RegExp(ob + ob + "*$"),
    rb = function (a, b) {
      return (
        (a = r(a) + ""),
        1 & b && (a = a.replace(pb, "")),
        2 & b && (a = a.replace(qb, "")),
        a
      );
    },
    sb = z.parseInt,
    tb = /^[-+]?0[xX]/,
    ub =
      8 !==
        sb(
          "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF08"
        ) ||
      22 !==
        sb(
          "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF0x16"
        ),
    vb = ub
      ? function (a, b) {
          var c = rb(a + "", 3);
          return sb(c, b >>> 0 || (tb.test(c) ? 16 : 10));
        }
      : sb;
  Qa({ global: !0, forced: parseInt != vb }, { parseInt: vb });
  var wb = function () {
      var a = E(this),
        b = "";
      return (
        a.global && (b += "g"),
        a.ignoreCase && (b += "i"),
        a.multiline && (b += "m"),
        a.unicode && (b += "u"),
        a.sticky && (b += "y"),
        b
      );
    },
    xb = RegExp.prototype.exec,
    yb = String.prototype.replace,
    zb = xb,
    Ab = (function () {
      var a = /a/,
        b = /b*/g;
      return (
        xb.call(a, "a"), xb.call(b, "a"), 0 !== a.lastIndex || 0 !== b.lastIndex
      );
    })(),
    Bb = /()??/.exec("")[1] !== void 0;
  (Ab || Bb) &&
    (zb = function (a) {
      var b,
        c,
        d,
        e,
        f = this;
      return (
        Bb && (c = new RegExp("^" + f.source + "$(?!\\s)", wb.call(f))),
        Ab && (b = f.lastIndex),
        (d = xb.call(f, a)),
        Ab && d && (f.lastIndex = f.global ? d.index + d[0].length : b),
        Bb &&
          d &&
          1 < d.length &&
          yb.call(d[0], c, function () {
            for (e = 1; e < arguments.length - 2; e++)
              void 0 === arguments[e] && (d[e] = void 0);
          }),
        d
      );
    });
  var Cb = zb;
  Qa({ target: "RegExp", proto: !0, forced: /./.exec !== Cb }, { exec: Cb });
  var Db = function (a, b, c) {
      var d,
        e,
        f = r(a) + "",
        g = u(b),
        h = f.length;
      return 0 > g || g >= h
        ? c
          ? ""
          : void 0
        : ((d = f.charCodeAt(g)),
          55296 > d ||
          56319 < d ||
          g + 1 === h ||
          56320 > (e = f.charCodeAt(g + 1)) ||
          57343 < e
            ? c
              ? f.charAt(g)
              : d
            : c
            ? f.slice(g, g + 2)
            : ((d - 55296) << 10) + (e - 56320) + 65536);
    },
    Eb = function (a, b, c) {
      return b + (c ? Db(a, b, !0).length : 1);
    },
    Fb = function (a, b) {
      var c = a.exec;
      if ("function" == typeof c) {
        var d = c.call(a, b);
        if ("object" != typeof d)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return d;
      }
      if ("RegExp" !== o(a))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return Cb.call(a, b);
    },
    Gb = S("species"),
    Hb = !x(function () {
      var a = /./;
      return (
        (a.exec = function () {
          var a = [];
          return (a.groups = { a: "7" }), a;
        }),
        "7" !== "".replace(a, "$<a>")
      );
    }),
    Ib = !x(function () {
      var a = /(?:)/,
        b = a.exec;
      a.exec = function () {
        return b.apply(this, arguments);
      };
      var c = "ab".split(a);
      return 2 !== c.length || "a" !== c[0] || "b" !== c[1];
    }),
    Jb = /\$([$&`']|\d\d?|<[^>]*>)/g,
    Kb = /\$([$&`']|\d\d?)/g,
    Lb = function (a) {
      return a === void 0 ? a : a + "";
    };
  (function (a, b, c, d) {
    var e = S(a),
      f = !x(function () {
        var b = {};
        return (
          (b[e] = function () {
            return 7;
          }),
          7 != ""[a](b)
        );
      }),
      g =
        f &&
        !x(function () {
          var b = !1,
            c = /a/;
          return (
            (c.exec = function () {
              return (b = !0), null;
            }),
            "split" === a &&
              ((c.constructor = {}),
              (c.constructor[Gb] = function () {
                return c;
              })),
            c[e](""),
            !b
          );
        });
    if (!f || !g || ("replace" === a && !Hb) || ("split" === a && !Ib)) {
      var h = /./[e],
        i = c(e, ""[a], function (a, b, c, d, e) {
          return b.exec === Cb
            ? f && !e
              ? { done: !0, value: h.call(b, c, d) }
              : { done: !0, value: a.call(c, b, d) }
            : { done: !1 };
        }),
        j = i[0],
        k = i[1];
      wa(String.prototype, a, j),
        wa(
          RegExp.prototype,
          e,
          2 == b
            ? function (a, b) {
                return k.call(a, this, b);
              }
            : function (a) {
                return k.call(a, this);
              }
        ),
        d && J(RegExp.prototype[e], "sham", !0);
    }
  })("replace", 2, function (a, b, c) {
    function d(a, c, d, e, g, h) {
      var i = d + a.length,
        k = e.length,
        f = Kb;
      return (
        void 0 !== g && ((g = s(g)), (f = Jb)),
        b.call(h, f, function (b, h) {
          var l;
          switch (h.charAt(0)) {
            case "$":
              return "$";
            case "&":
              return a;
            case "`":
              return c.slice(0, d);
            case "'":
              return c.slice(i);
            case "<":
              l = g[h.slice(1, -1)];
              break;
            default:
              var m = +h;
              if (0 == m) return b;
              if (m > k) {
                var n = j(m / 10);
                return 0 === n
                  ? b
                  : n <= k
                  ? void 0 === e[n - 1]
                    ? h.charAt(1)
                    : e[n - 1] + h.charAt(1)
                  : b;
              }
              l = e[m - 1];
          }
          return void 0 === l ? "" : l;
        })
      );
    }
    return [
      function (c, d) {
        var e = r(this),
          f = c == null ? void 0 : c[a];
        return f === void 0 ? b.call(e + "", c, d) : f.call(c, e, d);
      },
      function (a, e) {
        var f = c(b, a, this, e);
        if (f.done) return f.value;
        var g = E(a),
          k = this + "",
          l = "function" == typeof e;
        l || (e = e + "");
        var m = g.global;
        if (m) {
          var n = g.unicode;
          g.lastIndex = 0;
        }
        for (
          var o, p = [];
          ((o = Fb(g, k)), null !== o) && !(p.push(o), !m);

        ) {
          var q = o[0] + "";
          "" == q && (g.lastIndex = Eb(k, v(g.lastIndex), n));
        }
        for (var r = "", s = 0, t = 0; t < p.length; t++) {
          o = p[t];
          for (
            var w = o[0] + "", x = h(i(u(o.index), k.length), 0), y = [], z = 1;
            z < o.length;
            z++
          )
            y.push(Lb(o[z]));
          var A = o.groups;
          if (l) {
            var B = [w].concat(y, x, k);
            A !== void 0 && B.push(A);
            var C = e.apply(void 0, B) + "";
          } else C = d(w, k, x, y, A, e);
          x >= s && ((r += k.slice(s, x) + C), (s = x + w.length));
        }
        return r + k.slice(s);
      },
    ];
  });
  var Mb = 4;
  try {
    var Nb = a.fn.dropdown.Constructor.VERSION;
    Nb !== void 0 && (Mb = parseInt(Nb, 10));
  } catch (a) {}
  var Ob = {
      html: {
        inputGroups: {
          3: [
            '<span tabindex="100" class="add-on input-group-addon %s" title="%s">',
            "</span>",
          ],
          4: [
            '<div class="%s"><button tabindex="100" title="%s" class="btn btn-outline-secondary" type="button">',
            "</button></div>",
          ],
        }[Mb],
      },
    },
    Pb = function (a) {
      var b = arguments,
        c = !0,
        d = 1;
      return (
        (a = a.replace(/%s/g, function () {
          var a = b[d++];
          return "undefined" == typeof a ? ((c = !1), "") : a;
        })),
        c ? a : ""
      );
    },
    Qb = (function () {
      function b(c, e) {
        d(this, b),
          (this.options = e),
          (this.$element = a(c)),
          (this.isShown = !1),
          this.init();
      }
      return (
        g(b, [
          {
            key: "init",
            value: function () {
              var b, c;
              "before" === this.options.placement
                ? ((b = "insertBefore"), (c = "input-group-prepend"))
                : ((this.options.placement = "after"),
                  (b = "insertAfter"),
                  (c = "input-group-append")),
                this.$element.wrap(
                  '<div class="input-group'.concat(
                    Pb(" input-group-%s", this.options.size),
                    '" />'
                  )
                ),
                (this.$text = a('<input type="text" />')
                  [b](this.$element)
                  .attr("class", this.$element.attr("class"))
                  .attr("style", this.$element.attr("style"))
                  .attr("placeholder", this.$element.attr("placeholder"))
                  .attr("maxlength", this.$element.attr("maxlength"))
                  .attr("disabled", this.$element.attr("disabled"))
                  .css("display", this.$element.css("display"))
                  .val(this.$element.val())
                  .hide()),
                this.$element.prop("readonly") &&
                  this.$text.prop("readonly", !0),
                (this.$icon = a(
                  [
                    ""
                      .concat(
                        Pb(Ob.html.inputGroups[0], c, this.options.message),
                        '\n      <i class="icon-eye-open '
                      )
                      .concat(this.options.eyeClass, " ")
                      .concat(
                        this.options.eyeClassPositionInside
                          ? ""
                          : this.options.eyeOpenClass,
                        '">\n      '
                      )
                      .concat(
                        this.options.eyeClassPositionInside
                          ? this.options.eyeOpenClass
                          : "",
                        "\n      </i>"
                      ),
                    Ob.html.inputGroups[1],
                  ].join("")
                )
                  [b](this.$text)
                  .css("cursor", "pointer")),
                this.$text.off("keyup").on(
                  "keyup",
                  a.proxy(function () {
                    this.isShown &&
                      this.$element.val(this.$text.val()).trigger("change");
                  }, this)
                ),
                this.$icon.off("click").on(
                  "click",
                  a.proxy(function () {
                    this.$text.val(this.$element.val()).trigger("change"),
                      this.toggle();
                  }, this)
                );
            },
          },
          {
            key: "toggle",
            value: function (a) {
              this[this.isShown ? "hide" : "show"](a);
            },
          },
          {
            key: "show",
            value: function (b) {
              var c = a.Event("show.bs.password", { relatedTarget: b });
              this.$element.trigger(c),
                (this.isShown = !0),
                this.$element.hide(),
                this.$text.show(),
                this.options.eyeClassPositionInside
                  ? this.$icon
                      .find("i,svg")
                      .removeClass("icon-eye-open")
                      .addClass("icon-eye-close")
                      .html(this.options.eyeCloseClass)
                  : this.$icon
                      .find("i,svg")
                      .removeClass(
                        "icon-eye-open ".concat(this.options.eyeOpenClass)
                      )
                      .addClass(
                        "icon-eye-close ".concat(this.options.eyeCloseClass)
                      ),
                this.$text[this.options.placement](this.$element);
            },
          },
          {
            key: "hide",
            value: function (b) {
              var c = a.Event("hide.bs.password", { relatedTarget: b });
              this.$element.trigger(c),
                (this.isShown = !1),
                this.$element.show(),
                this.$text.hide(),
                this.options.eyeClassPositionInside
                  ? this.$icon
                      .find("i,svg")
                      .removeClass("icon-eye-close")
                      .addClass("icon-eye-open")
                      .html(this.options.eyeOpenClass)
                  : this.$icon
                      .find("i,svg")
                      .removeClass(
                        "icon-eye-close ".concat(this.options.eyeCloseClass)
                      )
                      .addClass(
                        "icon-eye-open ".concat(this.options.eyeOpenClass)
                      ),
                this.$element[this.options.placement](this.$text);
            },
          },
          {
            key: "val",
            value: function (a) {
              return "undefined" == typeof a
                ? this.$element.val()
                : void (this.$element.val(a).trigger("change"),
                  this.$text.val(a));
            },
          },
          {
            key: "focus",
            value: function () {
              this.$element.focus();
            },
          },
        ]),
        b
      );
    })();
  Qb.DEFAULTS = {
    placement: "after",
    message: "Click here to show/hide password",
    size: void 0,
    eyeClass: "fa",
    eyeOpenClass: "fa-eye",
    eyeCloseClass: "fa-eye-slash",
    eyeClassPositionInside: !1,
  };
  var Rb = a.fn.password;
  (a.fn.password = function () {
    var b,
      d = arguments[0],
      e = arguments,
      f = ["show", "hide", "toggle", "val", "focus"];
    return (
      this.each(function () {
        var g = a(this),
          h = g.data("bs.password"),
          i = a.extend({}, Qb.DEFAULTS, g.data(), "object" === c(d) && d);
        if ("string" == typeof d) {
          if (0 > a.inArray(d, f))
            throw new Error("Unknown method: ".concat(d));
          b = h[d](e[1]);
        } else h ? h.init(i) : ((h = new Qb(g, i)), g.data("bs.password", h));
      }),
      b ? b : this
    );
  }),
    (a.fn.password.Constructor = Qb),
    (a.fn.password.noConflict = function () {
      return (a.fn.password = Rb), this;
    }),
    a(function () {
      a('[data-toggle="password"]').password();
    });
});

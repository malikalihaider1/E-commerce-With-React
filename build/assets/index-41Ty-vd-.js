(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const s of l.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
function tm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ac = { exports: {} },
  xl = {},
  _c = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gr = Symbol.for("react.element"),
  nm = Symbol.for("react.portal"),
  rm = Symbol.for("react.fragment"),
  im = Symbol.for("react.strict_mode"),
  lm = Symbol.for("react.profiler"),
  sm = Symbol.for("react.provider"),
  om = Symbol.for("react.context"),
  am = Symbol.for("react.forward_ref"),
  um = Symbol.for("react.suspense"),
  cm = Symbol.for("react.memo"),
  dm = Symbol.for("react.lazy"),
  Ga = Symbol.iterator;
function fm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ga && e[Ga]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ic = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Dc = Object.assign,
  jc = {};
function Kn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = jc),
    (this.updater = n || Ic);
}
Kn.prototype.isReactComponent = {};
Kn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Kn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Fc() {}
Fc.prototype = Kn.prototype;
function Io(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = jc),
    (this.updater = n || Ic);
}
var Do = (Io.prototype = new Fc());
Do.constructor = Io;
Dc(Do, Kn.prototype);
Do.isPureReactComponent = !0;
var Ka = Array.isArray,
  Bc = Object.prototype.hasOwnProperty,
  jo = { current: null },
  Vc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hc(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Bc.call(t, r) && !Vc.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var o = Array(a), u = 0; u < a; u++) o[u] = arguments[u + 2];
    i.children = o;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Gr,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: jo.current,
  };
}
function pm(e, t) {
  return {
    $$typeof: Gr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Fo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gr;
}
function mm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ya = /\/+/g;
function Gl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? mm("" + e.key)
    : t.toString(36);
}
function Ti(e, t, n, r, i) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (l) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gr:
          case nm:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Gl(s, 0) : r),
      Ka(i)
        ? ((n = ""),
          e != null && (n = e.replace(Ya, "$&/") + "/"),
          Ti(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Fo(i) &&
            (i = pm(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Ya, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Ka(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var o = r + Gl(l, a);
      s += Ti(l, t, n, o, i);
    }
  else if (((o = fm(e)), typeof o == "function"))
    for (e = o.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (o = r + Gl(l, a++)), (s += Ti(l, t, n, o, i));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return s;
}
function ri(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ti(e, r, "", "", function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function hm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ee = { current: null },
  Ci = { transition: null },
  gm = {
    ReactCurrentDispatcher: Ee,
    ReactCurrentBatchConfig: Ci,
    ReactCurrentOwner: jo,
  };
function Uc() {
  throw Error("act(...) is not supported in production builds of React.");
}
H.Children = {
  map: ri,
  forEach: function (e, t, n) {
    ri(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ri(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ri(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Fo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
H.Component = Kn;
H.Fragment = rm;
H.Profiler = lm;
H.PureComponent = Io;
H.StrictMode = im;
H.Suspense = um;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gm;
H.act = Uc;
H.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Dc({}, e.props),
    i = e.key,
    l = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (s = jo.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (o in t)
      Bc.call(t, o) &&
        !Vc.hasOwnProperty(o) &&
        (r[o] = t[o] === void 0 && a !== void 0 ? a[o] : t[o]);
  }
  var o = arguments.length - 2;
  if (o === 1) r.children = n;
  else if (1 < o) {
    a = Array(o);
    for (var u = 0; u < o; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Gr, type: e.type, key: i, ref: l, props: r, _owner: s };
};
H.createContext = function (e) {
  return (
    (e = {
      $$typeof: om,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: sm, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = Hc;
H.createFactory = function (e) {
  var t = Hc.bind(null, e);
  return (t.type = e), t;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: am, render: e };
};
H.isValidElement = Fo;
H.lazy = function (e) {
  return { $$typeof: dm, _payload: { _status: -1, _result: e }, _init: hm };
};
H.memo = function (e, t) {
  return { $$typeof: cm, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function (e) {
  var t = Ci.transition;
  Ci.transition = {};
  try {
    e();
  } finally {
    Ci.transition = t;
  }
};
H.unstable_act = Uc;
H.useCallback = function (e, t) {
  return Ee.current.useCallback(e, t);
};
H.useContext = function (e) {
  return Ee.current.useContext(e);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (e) {
  return Ee.current.useDeferredValue(e);
};
H.useEffect = function (e, t) {
  return Ee.current.useEffect(e, t);
};
H.useId = function () {
  return Ee.current.useId();
};
H.useImperativeHandle = function (e, t, n) {
  return Ee.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function (e, t) {
  return Ee.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function (e, t) {
  return Ee.current.useLayoutEffect(e, t);
};
H.useMemo = function (e, t) {
  return Ee.current.useMemo(e, t);
};
H.useReducer = function (e, t, n) {
  return Ee.current.useReducer(e, t, n);
};
H.useRef = function (e) {
  return Ee.current.useRef(e);
};
H.useState = function (e) {
  return Ee.current.useState(e);
};
H.useSyncExternalStore = function (e, t, n) {
  return Ee.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function () {
  return Ee.current.useTransition();
};
H.version = "18.3.1";
_c.exports = H;
var T = _c.exports;
const G = tm(T);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vm = T,
  ym = Symbol.for("react.element"),
  wm = Symbol.for("react.fragment"),
  Sm = Object.prototype.hasOwnProperty,
  xm = vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Em = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wc(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Sm.call(t, r) && !Em.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: ym,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: xm.current,
  };
}
xl.Fragment = wm;
xl.jsx = Wc;
xl.jsxs = Wc;
Ac.exports = xl;
var E = Ac.exports,
  $c = { exports: {} },
  De = {},
  Gc = { exports: {} },
  Kc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, A) {
    var F = O.length;
    O.push(A);
    e: for (; 0 < F; ) {
      var W = (F - 1) >>> 1,
        J = O[W];
      if (0 < i(J, A)) (O[W] = A), (O[F] = J), (F = W);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var A = O[0],
      F = O.pop();
    if (F !== A) {
      O[0] = F;
      e: for (var W = 0, J = O.length, ti = J >>> 1; W < ti; ) {
        var Qt = 2 * (W + 1) - 1,
          $l = O[Qt],
          Jt = Qt + 1,
          ni = O[Jt];
        if (0 > i($l, F))
          Jt < J && 0 > i(ni, $l)
            ? ((O[W] = ni), (O[Jt] = F), (W = Jt))
            : ((O[W] = $l), (O[Qt] = F), (W = Qt));
        else if (Jt < J && 0 > i(ni, F)) (O[W] = ni), (O[Jt] = F), (W = Jt);
        else break e;
      }
    }
    return A;
  }
  function i(O, A) {
    var F = O.sortIndex - A.sortIndex;
    return F !== 0 ? F : O.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var o = [],
    u = [],
    c = 1,
    f = null,
    h = 3,
    v = !1,
    g = !1,
    y = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(O) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= O)
        r(u), (A.sortIndex = A.expirationTime), t(o, A);
      else break;
      A = n(u);
    }
  }
  function w(O) {
    if (((y = !1), m(O), !g))
      if (n(o) !== null) (g = !0), B(x);
      else {
        var A = n(u);
        A !== null && ie(w, A.startTime - O);
      }
  }
  function x(O, A) {
    (g = !1), y && ((y = !1), p(L), (L = -1)), (v = !0);
    var F = h;
    try {
      for (
        m(A), f = n(o);
        f !== null && (!(f.expirationTime > A) || (O && !I()));

      ) {
        var W = f.callback;
        if (typeof W == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var J = W(f.expirationTime <= A);
          (A = e.unstable_now()),
            typeof J == "function" ? (f.callback = J) : f === n(o) && r(o),
            m(A);
        } else r(o);
        f = n(o);
      }
      if (f !== null) var ti = !0;
      else {
        var Qt = n(u);
        Qt !== null && ie(w, Qt.startTime - A), (ti = !1);
      }
      return ti;
    } finally {
      (f = null), (h = F), (v = !1);
    }
  }
  var C = !1,
    R = null,
    L = -1,
    N = 5,
    P = -1;
  function I() {
    return !(e.unstable_now() - P < N);
  }
  function z() {
    if (R !== null) {
      var O = e.unstable_now();
      P = O;
      var A = !0;
      try {
        A = R(!0, O);
      } finally {
        A ? b() : ((C = !1), (R = null));
      }
    } else C = !1;
  }
  var b;
  if (typeof d == "function")
    b = function () {
      d(z);
    };
  else if (typeof MessageChannel < "u") {
    var _ = new MessageChannel(),
      D = _.port2;
    (_.port1.onmessage = z),
      (b = function () {
        D.postMessage(null);
      });
  } else
    b = function () {
      S(z, 0);
    };
  function B(O) {
    (R = O), C || ((C = !0), b());
  }
  function ie(O, A) {
    L = S(function () {
      O(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), B(x));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (N = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(o);
    }),
    (e.unstable_next = function (O) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = h;
      }
      var F = h;
      h = A;
      try {
        return O();
      } finally {
        h = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, A) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var F = h;
      h = O;
      try {
        return A();
      } finally {
        h = F;
      }
    }),
    (e.unstable_scheduleCallback = function (O, A, F) {
      var W = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? W + F : W))
          : (F = W),
        O)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = F + J),
        (O = {
          id: c++,
          callback: A,
          priorityLevel: O,
          startTime: F,
          expirationTime: J,
          sortIndex: -1,
        }),
        F > W
          ? ((O.sortIndex = F),
            t(u, O),
            n(o) === null &&
              O === n(u) &&
              (y ? (p(L), (L = -1)) : (y = !0), ie(w, F - W)))
          : ((O.sortIndex = J), t(o, O), g || v || ((g = !0), B(x))),
        O
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (O) {
      var A = h;
      return function () {
        var F = h;
        h = A;
        try {
          return O.apply(this, arguments);
        } finally {
          h = F;
        }
      };
    });
})(Kc);
Gc.exports = Kc;
var Tm = Gc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cm = T,
  Ie = Tm;
function M(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Yc = new Set(),
  Pr = {};
function gn(e, t) {
  Bn(e, t), Bn(e + "Capture", t);
}
function Bn(e, t) {
  for (Pr[e] = t, e = 0; e < t.length; e++) Yc.add(t[e]);
}
var xt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  zs = Object.prototype.hasOwnProperty,
  km =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  qa = {},
  Xa = {};
function Pm(e) {
  return zs.call(Xa, e)
    ? !0
    : zs.call(qa, e)
      ? !1
      : km.test(e)
        ? (Xa[e] = !0)
        : ((qa[e] = !0), !1);
}
function Lm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Nm(e, t, n, r) {
  if (t === null || typeof t > "u" || Lm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Te(e, t, n, r, i, l, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = s);
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Te(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  me[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  me[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  me[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  me[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  me[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  me[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  me[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bo = /[\-:]([a-z])/g;
function Vo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bo, Vo);
    me[t] = new Te(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bo, Vo);
    me[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Bo, Vo);
  me[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  me[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new Te(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  me[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ho(e, t, n, r) {
  var i = me.hasOwnProperty(t) ? me[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Nm(t, n, i, r) && (n = null),
    r || i === null
      ? Pm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var kt = Cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ii = Symbol.for("react.element"),
  xn = Symbol.for("react.portal"),
  En = Symbol.for("react.fragment"),
  Uo = Symbol.for("react.strict_mode"),
  Ms = Symbol.for("react.profiler"),
  qc = Symbol.for("react.provider"),
  Xc = Symbol.for("react.context"),
  Wo = Symbol.for("react.forward_ref"),
  As = Symbol.for("react.suspense"),
  _s = Symbol.for("react.suspense_list"),
  $o = Symbol.for("react.memo"),
  Nt = Symbol.for("react.lazy"),
  Qc = Symbol.for("react.offscreen"),
  Qa = Symbol.iterator;
function tr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qa && e[Qa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var te = Object.assign,
  Kl;
function fr(e) {
  if (Kl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Kl = (t && t[1]) || "";
    }
  return (
    `
` +
    Kl +
    e
  );
}
var Yl = !1;
function ql(e, t) {
  if (!e || Yl) return "";
  Yl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          l = r.stack.split(`
`),
          s = i.length - 1,
          a = l.length - 1;
        1 <= s && 0 <= a && i[s] !== l[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== l[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== l[a])) {
                var o =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    o.includes("<anonymous>") &&
                    (o = o.replace("<anonymous>", e.displayName)),
                  o
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Yl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? fr(e) : "";
}
function Om(e) {
  switch (e.tag) {
    case 5:
      return fr(e.type);
    case 16:
      return fr("Lazy");
    case 13:
      return fr("Suspense");
    case 19:
      return fr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ql(e.type, !1)), e;
    case 11:
      return (e = ql(e.type.render, !1)), e;
    case 1:
      return (e = ql(e.type, !0)), e;
    default:
      return "";
  }
}
function Is(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case En:
      return "Fragment";
    case xn:
      return "Portal";
    case Ms:
      return "Profiler";
    case Uo:
      return "StrictMode";
    case As:
      return "Suspense";
    case _s:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Xc:
        return (e.displayName || "Context") + ".Consumer";
      case qc:
        return (e._context.displayName || "Context") + ".Provider";
      case Wo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case $o:
        return (
          (t = e.displayName || null), t !== null ? t : Is(e.type) || "Memo"
        );
      case Nt:
        (t = e._payload), (e = e._init);
        try {
          return Is(e(t));
        } catch {}
    }
  return null;
}
function Rm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Is(t);
    case 8:
      return t === Uo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Wt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Jc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function bm(e) {
  var t = Jc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), l.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function li(e) {
  e._valueTracker || (e._valueTracker = bm(e));
}
function Zc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Jc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Vi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ds(e, t) {
  var n = t.checked;
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ja(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Wt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ed(e, t) {
  (t = t.checked), t != null && Ho(e, "checked", t, !1);
}
function js(e, t) {
  ed(e, t);
  var n = Wt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Fs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Fs(e, t.type, Wt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Za(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Fs(e, t, n) {
  (t !== "number" || Vi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var pr = Array.isArray;
function Mn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Wt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Bs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function eu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (pr(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Wt(n) };
}
function td(e, t) {
  var n = Wt(t.value),
    r = Wt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function tu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function nd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Vs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? nd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var si,
  rd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        si = si || document.createElement("div"),
          si.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = si.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var gr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  zm = ["Webkit", "ms", "Moz", "O"];
Object.keys(gr).forEach(function (e) {
  zm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (gr[t] = gr[e]);
  });
});
function id(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (gr.hasOwnProperty(e) && gr[e])
      ? ("" + t).trim()
      : t + "px";
}
function ld(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = id(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Mm = te(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Hs(e, t) {
  if (t) {
    if (Mm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function Us(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ws = null;
function Go(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var $s = null,
  An = null,
  _n = null;
function nu(e) {
  if ((e = qr(e))) {
    if (typeof $s != "function") throw Error(M(280));
    var t = e.stateNode;
    t && ((t = Pl(t)), $s(e.stateNode, e.type, t));
  }
}
function sd(e) {
  An ? (_n ? _n.push(e) : (_n = [e])) : (An = e);
}
function od() {
  if (An) {
    var e = An,
      t = _n;
    if (((_n = An = null), nu(e), t)) for (e = 0; e < t.length; e++) nu(t[e]);
  }
}
function ad(e, t) {
  return e(t);
}
function ud() {}
var Xl = !1;
function cd(e, t, n) {
  if (Xl) return e(t, n);
  Xl = !0;
  try {
    return ad(e, t, n);
  } finally {
    (Xl = !1), (An !== null || _n !== null) && (ud(), od());
  }
}
function Nr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Pl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var Gs = !1;
if (xt)
  try {
    var nr = {};
    Object.defineProperty(nr, "passive", {
      get: function () {
        Gs = !0;
      },
    }),
      window.addEventListener("test", nr, nr),
      window.removeEventListener("test", nr, nr);
  } catch {
    Gs = !1;
  }
function Am(e, t, n, r, i, l, s, a, o) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var vr = !1,
  Hi = null,
  Ui = !1,
  Ks = null,
  _m = {
    onError: function (e) {
      (vr = !0), (Hi = e);
    },
  };
function Im(e, t, n, r, i, l, s, a, o) {
  (vr = !1), (Hi = null), Am.apply(_m, arguments);
}
function Dm(e, t, n, r, i, l, s, a, o) {
  if ((Im.apply(this, arguments), vr)) {
    if (vr) {
      var u = Hi;
      (vr = !1), (Hi = null);
    } else throw Error(M(198));
    Ui || ((Ui = !0), (Ks = u));
  }
}
function vn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function dd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ru(e) {
  if (vn(e) !== e) throw Error(M(188));
}
function jm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = vn(e)), t === null)) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return ru(i), e;
        if (l === r) return ru(i), t;
        l = l.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = l);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = l);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = l.child; a; ) {
          if (a === n) {
            (s = !0), (n = l), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = l), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function fd(e) {
  return (e = jm(e)), e !== null ? pd(e) : null;
}
function pd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = pd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var md = Ie.unstable_scheduleCallback,
  iu = Ie.unstable_cancelCallback,
  Fm = Ie.unstable_shouldYield,
  Bm = Ie.unstable_requestPaint,
  re = Ie.unstable_now,
  Vm = Ie.unstable_getCurrentPriorityLevel,
  Ko = Ie.unstable_ImmediatePriority,
  hd = Ie.unstable_UserBlockingPriority,
  Wi = Ie.unstable_NormalPriority,
  Hm = Ie.unstable_LowPriority,
  gd = Ie.unstable_IdlePriority,
  El = null,
  ct = null;
function Um(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(El, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var qe = Math.clz32 ? Math.clz32 : Gm,
  Wm = Math.log,
  $m = Math.LN2;
function Gm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Wm(e) / $m) | 0)) | 0;
}
var oi = 64,
  ai = 4194304;
function mr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function $i(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = mr(a)) : ((l &= s), l !== 0 && (r = mr(l)));
  } else (s = n & ~i), s !== 0 ? (r = mr(s)) : l !== 0 && (r = mr(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - qe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Km(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ym(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var s = 31 - qe(l),
      a = 1 << s,
      o = i[s];
    o === -1
      ? (!(a & n) || a & r) && (i[s] = Km(a, t))
      : o <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function Ys(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function vd() {
  var e = oi;
  return (oi <<= 1), !(oi & 4194240) && (oi = 64), e;
}
function Ql(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Kr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - qe(t)),
    (e[t] = n);
}
function qm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - qe(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function Yo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - qe(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var $ = 0;
function yd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var wd,
  qo,
  Sd,
  xd,
  Ed,
  qs = !1,
  ui = [],
  It = null,
  Dt = null,
  jt = null,
  Or = new Map(),
  Rr = new Map(),
  Rt = [],
  Xm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function lu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      It = null;
      break;
    case "dragenter":
    case "dragleave":
      Dt = null;
      break;
    case "mouseover":
    case "mouseout":
      jt = null;
      break;
    case "pointerover":
    case "pointerout":
      Or.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Rr.delete(t.pointerId);
  }
}
function rr(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = qr(t)), t !== null && qo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Qm(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (It = rr(It, e, t, n, r, i)), !0;
    case "dragenter":
      return (Dt = rr(Dt, e, t, n, r, i)), !0;
    case "mouseover":
      return (jt = rr(jt, e, t, n, r, i)), !0;
    case "pointerover":
      var l = i.pointerId;
      return Or.set(l, rr(Or.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (l = i.pointerId), Rr.set(l, rr(Rr.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Td(e) {
  var t = tn(e.target);
  if (t !== null) {
    var n = vn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = dd(n)), t !== null)) {
          (e.blockedOn = t),
            Ed(e.priority, function () {
              Sd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ki(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Xs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ws = r), n.target.dispatchEvent(r), (Ws = null);
    } else return (t = qr(n)), t !== null && qo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function su(e, t, n) {
  ki(e) && n.delete(t);
}
function Jm() {
  (qs = !1),
    It !== null && ki(It) && (It = null),
    Dt !== null && ki(Dt) && (Dt = null),
    jt !== null && ki(jt) && (jt = null),
    Or.forEach(su),
    Rr.forEach(su);
}
function ir(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    qs ||
      ((qs = !0),
      Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, Jm)));
}
function br(e) {
  function t(i) {
    return ir(i, e);
  }
  if (0 < ui.length) {
    ir(ui[0], e);
    for (var n = 1; n < ui.length; n++) {
      var r = ui[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    It !== null && ir(It, e),
      Dt !== null && ir(Dt, e),
      jt !== null && ir(jt, e),
      Or.forEach(t),
      Rr.forEach(t),
      n = 0;
    n < Rt.length;
    n++
  )
    (r = Rt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Rt.length && ((n = Rt[0]), n.blockedOn === null); )
    Td(n), n.blockedOn === null && Rt.shift();
}
var In = kt.ReactCurrentBatchConfig,
  Gi = !0;
function Zm(e, t, n, r) {
  var i = $,
    l = In.transition;
  In.transition = null;
  try {
    ($ = 1), Xo(e, t, n, r);
  } finally {
    ($ = i), (In.transition = l);
  }
}
function eh(e, t, n, r) {
  var i = $,
    l = In.transition;
  In.transition = null;
  try {
    ($ = 4), Xo(e, t, n, r);
  } finally {
    ($ = i), (In.transition = l);
  }
}
function Xo(e, t, n, r) {
  if (Gi) {
    var i = Xs(e, t, n, r);
    if (i === null) os(e, t, r, Ki, n), lu(e, r);
    else if (Qm(i, e, t, n, r)) r.stopPropagation();
    else if ((lu(e, r), t & 4 && -1 < Xm.indexOf(e))) {
      for (; i !== null; ) {
        var l = qr(i);
        if (
          (l !== null && wd(l),
          (l = Xs(e, t, n, r)),
          l === null && os(e, t, r, Ki, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else os(e, t, r, null, n);
  }
}
var Ki = null;
function Xs(e, t, n, r) {
  if (((Ki = null), (e = Go(r)), (e = tn(e)), e !== null))
    if (((t = vn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = dd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ki = e), null;
}
function Cd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Vm()) {
        case Ko:
          return 1;
        case hd:
          return 4;
        case Wi:
        case Hm:
          return 16;
        case gd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mt = null,
  Qo = null,
  Pi = null;
function kd() {
  if (Pi) return Pi;
  var e,
    t = Qo,
    n = t.length,
    r,
    i = "value" in Mt ? Mt.value : Mt.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[l - r]; r++);
  return (Pi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Li(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ci() {
  return !0;
}
function ou() {
  return !1;
}
function je(e) {
  function t(n, r, i, l, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? ci
        : ou),
      (this.isPropagationStopped = ou),
      this
    );
  }
  return (
    te(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ci));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ci));
      },
      persist: function () {},
      isPersistent: ci,
    }),
    t
  );
}
var Yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Jo = je(Yn),
  Yr = te({}, Yn, { view: 0, detail: 0 }),
  th = je(Yr),
  Jl,
  Zl,
  lr,
  Tl = te({}, Yr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Zo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== lr &&
            (lr && e.type === "mousemove"
              ? ((Jl = e.screenX - lr.screenX), (Zl = e.screenY - lr.screenY))
              : (Zl = Jl = 0),
            (lr = e)),
          Jl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Zl;
    },
  }),
  au = je(Tl),
  nh = te({}, Tl, { dataTransfer: 0 }),
  rh = je(nh),
  ih = te({}, Yr, { relatedTarget: 0 }),
  es = je(ih),
  lh = te({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sh = je(lh),
  oh = te({}, Yn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ah = je(oh),
  uh = te({}, Yn, { data: 0 }),
  uu = je(uh),
  ch = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  dh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  fh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ph(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = fh[e]) ? !!t[e] : !1;
}
function Zo() {
  return ph;
}
var mh = te({}, Yr, {
    key: function (e) {
      if (e.key) {
        var t = ch[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Li(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? dh[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zo,
    charCode: function (e) {
      return e.type === "keypress" ? Li(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Li(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  hh = je(mh),
  gh = te({}, Tl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  cu = je(gh),
  vh = te({}, Yr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zo,
  }),
  yh = je(vh),
  wh = te({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sh = je(wh),
  xh = te({}, Tl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Eh = je(xh),
  Th = [9, 13, 27, 32],
  ea = xt && "CompositionEvent" in window,
  yr = null;
xt && "documentMode" in document && (yr = document.documentMode);
var Ch = xt && "TextEvent" in window && !yr,
  Pd = xt && (!ea || (yr && 8 < yr && 11 >= yr)),
  du = " ",
  fu = !1;
function Ld(e, t) {
  switch (e) {
    case "keyup":
      return Th.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Nd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Tn = !1;
function kh(e, t) {
  switch (e) {
    case "compositionend":
      return Nd(t);
    case "keypress":
      return t.which !== 32 ? null : ((fu = !0), du);
    case "textInput":
      return (e = t.data), e === du && fu ? null : e;
    default:
      return null;
  }
}
function Ph(e, t) {
  if (Tn)
    return e === "compositionend" || (!ea && Ld(e, t))
      ? ((e = kd()), (Pi = Qo = Mt = null), (Tn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Pd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Lh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function pu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Lh[e.type] : t === "textarea";
}
function Od(e, t, n, r) {
  sd(r),
    (t = Yi(t, "onChange")),
    0 < t.length &&
      ((n = new Jo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var wr = null,
  zr = null;
function Nh(e) {
  Bd(e, 0);
}
function Cl(e) {
  var t = Pn(e);
  if (Zc(t)) return e;
}
function Oh(e, t) {
  if (e === "change") return t;
}
var Rd = !1;
if (xt) {
  var ts;
  if (xt) {
    var ns = "oninput" in document;
    if (!ns) {
      var mu = document.createElement("div");
      mu.setAttribute("oninput", "return;"),
        (ns = typeof mu.oninput == "function");
    }
    ts = ns;
  } else ts = !1;
  Rd = ts && (!document.documentMode || 9 < document.documentMode);
}
function hu() {
  wr && (wr.detachEvent("onpropertychange", bd), (zr = wr = null));
}
function bd(e) {
  if (e.propertyName === "value" && Cl(zr)) {
    var t = [];
    Od(t, zr, e, Go(e)), cd(Nh, t);
  }
}
function Rh(e, t, n) {
  e === "focusin"
    ? (hu(), (wr = t), (zr = n), wr.attachEvent("onpropertychange", bd))
    : e === "focusout" && hu();
}
function bh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Cl(zr);
}
function zh(e, t) {
  if (e === "click") return Cl(t);
}
function Mh(e, t) {
  if (e === "input" || e === "change") return Cl(t);
}
function Ah(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Je = typeof Object.is == "function" ? Object.is : Ah;
function Mr(e, t) {
  if (Je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!zs.call(t, i) || !Je(e[i], t[i])) return !1;
  }
  return !0;
}
function gu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function vu(e, t) {
  var n = gu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = gu(n);
  }
}
function zd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? zd(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Md() {
  for (var e = window, t = Vi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Vi(e.document);
  }
  return t;
}
function ta(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function _h(e) {
  var t = Md(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ta(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = vu(n, l));
        var s = vu(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ih = xt && "documentMode" in document && 11 >= document.documentMode,
  Cn = null,
  Qs = null,
  Sr = null,
  Js = !1;
function yu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Js ||
    Cn == null ||
    Cn !== Vi(r) ||
    ((r = Cn),
    "selectionStart" in r && ta(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Sr && Mr(Sr, r)) ||
      ((Sr = r),
      (r = Yi(Qs, "onSelect")),
      0 < r.length &&
        ((t = new Jo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Cn))));
}
function di(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var kn = {
    animationend: di("Animation", "AnimationEnd"),
    animationiteration: di("Animation", "AnimationIteration"),
    animationstart: di("Animation", "AnimationStart"),
    transitionend: di("Transition", "TransitionEnd"),
  },
  rs = {},
  Ad = {};
xt &&
  ((Ad = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete kn.animationend.animation,
    delete kn.animationiteration.animation,
    delete kn.animationstart.animation),
  "TransitionEvent" in window || delete kn.transitionend.transition);
function kl(e) {
  if (rs[e]) return rs[e];
  if (!kn[e]) return e;
  var t = kn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ad) return (rs[e] = t[n]);
  return e;
}
var _d = kl("animationend"),
  Id = kl("animationiteration"),
  Dd = kl("animationstart"),
  jd = kl("transitionend"),
  Fd = new Map(),
  wu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Kt(e, t) {
  Fd.set(e, t), gn(t, [e]);
}
for (var is = 0; is < wu.length; is++) {
  var ls = wu[is],
    Dh = ls.toLowerCase(),
    jh = ls[0].toUpperCase() + ls.slice(1);
  Kt(Dh, "on" + jh);
}
Kt(_d, "onAnimationEnd");
Kt(Id, "onAnimationIteration");
Kt(Dd, "onAnimationStart");
Kt("dblclick", "onDoubleClick");
Kt("focusin", "onFocus");
Kt("focusout", "onBlur");
Kt(jd, "onTransitionEnd");
Bn("onMouseEnter", ["mouseout", "mouseover"]);
Bn("onMouseLeave", ["mouseout", "mouseover"]);
Bn("onPointerEnter", ["pointerout", "pointerover"]);
Bn("onPointerLeave", ["pointerout", "pointerover"]);
gn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
gn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
gn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
gn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var hr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Fh = new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));
function Su(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Dm(r, t, void 0, e), (e.currentTarget = null);
}
function Bd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            o = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), o !== l && i.isPropagationStopped())) break e;
          Su(i, a, u), (l = o);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (o = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            o !== l && i.isPropagationStopped())
          )
            break e;
          Su(i, a, u), (l = o);
        }
    }
  }
  if (Ui) throw ((e = Ks), (Ui = !1), (Ks = null), e);
}
function Y(e, t) {
  var n = t[ro];
  n === void 0 && (n = t[ro] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Vd(t, e, 2, !1), n.add(r));
}
function ss(e, t, n) {
  var r = 0;
  t && (r |= 4), Vd(n, e, r, t);
}
var fi = "_reactListening" + Math.random().toString(36).slice(2);
function Ar(e) {
  if (!e[fi]) {
    (e[fi] = !0),
      Yc.forEach(function (n) {
        n !== "selectionchange" && (Fh.has(n) || ss(n, !1, e), ss(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fi] || ((t[fi] = !0), ss("selectionchange", !1, t));
  }
}
function Vd(e, t, n, r) {
  switch (Cd(t)) {
    case 1:
      var i = Zm;
      break;
    case 4:
      i = eh;
      break;
    default:
      i = Xo;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Gs ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function os(e, t, n, r, i) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var o = s.tag;
            if (
              (o === 3 || o === 4) &&
              ((o = s.stateNode.containerInfo),
              o === i || (o.nodeType === 8 && o.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = tn(a)), s === null)) return;
          if (((o = s.tag), o === 5 || o === 6)) {
            r = l = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  cd(function () {
    var u = l,
      c = Go(n),
      f = [];
    e: {
      var h = Fd.get(e);
      if (h !== void 0) {
        var v = Jo,
          g = e;
        switch (e) {
          case "keypress":
            if (Li(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = hh;
            break;
          case "focusin":
            (g = "focus"), (v = es);
            break;
          case "focusout":
            (g = "blur"), (v = es);
            break;
          case "beforeblur":
          case "afterblur":
            v = es;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = au;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = rh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = yh;
            break;
          case _d:
          case Id:
          case Dd:
            v = sh;
            break;
          case jd:
            v = Sh;
            break;
          case "scroll":
            v = th;
            break;
          case "wheel":
            v = Eh;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = ah;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = cu;
        }
        var y = (t & 4) !== 0,
          S = !y && e === "scroll",
          p = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var d = u, m; d !== null; ) {
          m = d;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              p !== null && ((w = Nr(d, p)), w != null && y.push(_r(d, w, m)))),
            S)
          )
            break;
          d = d.return;
        }
        0 < y.length &&
          ((h = new v(h, g, null, n, c)), f.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Ws &&
            (g = n.relatedTarget || n.fromElement) &&
            (tn(g) || g[Et]))
        )
          break e;
        if (
          (v || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = u),
              (g = g ? tn(g) : null),
              g !== null &&
                ((S = vn(g)), g !== S || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = u)),
          v !== g)
        ) {
          if (
            ((y = au),
            (w = "onMouseLeave"),
            (p = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = cu),
              (w = "onPointerLeave"),
              (p = "onPointerEnter"),
              (d = "pointer")),
            (S = v == null ? h : Pn(v)),
            (m = g == null ? h : Pn(g)),
            (h = new y(w, d + "leave", v, n, c)),
            (h.target = S),
            (h.relatedTarget = m),
            (w = null),
            tn(c) === u &&
              ((y = new y(p, d + "enter", g, n, c)),
              (y.target = m),
              (y.relatedTarget = S),
              (w = y)),
            (S = w),
            v && g)
          )
            t: {
              for (y = v, p = g, d = 0, m = y; m; m = yn(m)) d++;
              for (m = 0, w = p; w; w = yn(w)) m++;
              for (; 0 < d - m; ) (y = yn(y)), d--;
              for (; 0 < m - d; ) (p = yn(p)), m--;
              for (; d--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                (y = yn(y)), (p = yn(p));
              }
              y = null;
            }
          else y = null;
          v !== null && xu(f, h, v, y, !1),
            g !== null && S !== null && xu(f, S, g, y, !0);
        }
      }
      e: {
        if (
          ((h = u ? Pn(u) : window),
          (v = h.nodeName && h.nodeName.toLowerCase()),
          v === "select" || (v === "input" && h.type === "file"))
        )
          var x = Oh;
        else if (pu(h))
          if (Rd) x = Mh;
          else {
            x = bh;
            var C = Rh;
          }
        else
          (v = h.nodeName) &&
            v.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (x = zh);
        if (x && (x = x(e, u))) {
          Od(f, x, n, c);
          break e;
        }
        C && C(e, h, u),
          e === "focusout" &&
            (C = h._wrapperState) &&
            C.controlled &&
            h.type === "number" &&
            Fs(h, "number", h.value);
      }
      switch (((C = u ? Pn(u) : window), e)) {
        case "focusin":
          (pu(C) || C.contentEditable === "true") &&
            ((Cn = C), (Qs = u), (Sr = null));
          break;
        case "focusout":
          Sr = Qs = Cn = null;
          break;
        case "mousedown":
          Js = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Js = !1), yu(f, n, c);
          break;
        case "selectionchange":
          if (Ih) break;
        case "keydown":
        case "keyup":
          yu(f, n, c);
      }
      var R;
      if (ea)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Tn
          ? Ld(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (Pd &&
          n.locale !== "ko" &&
          (Tn || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Tn && (R = kd())
            : ((Mt = c),
              (Qo = "value" in Mt ? Mt.value : Mt.textContent),
              (Tn = !0))),
        (C = Yi(u, L)),
        0 < C.length &&
          ((L = new uu(L, e, null, n, c)),
          f.push({ event: L, listeners: C }),
          R ? (L.data = R) : ((R = Nd(n)), R !== null && (L.data = R)))),
        (R = Ch ? kh(e, n) : Ph(e, n)) &&
          ((u = Yi(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new uu("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = R)));
    }
    Bd(f, t);
  });
}
function _r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = Nr(e, n)),
      l != null && r.unshift(_r(e, l, i)),
      (l = Nr(e, t)),
      l != null && r.push(_r(e, l, i))),
      (e = e.return);
  }
  return r;
}
function yn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function xu(e, t, n, r, i) {
  for (var l = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      o = a.alternate,
      u = a.stateNode;
    if (o !== null && o === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((o = Nr(n, l)), o != null && s.unshift(_r(n, o, a)))
        : i || ((o = Nr(n, l)), o != null && s.push(_r(n, o, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Bh = /\r\n?/g,
  Vh = /\u0000|\uFFFD/g;
function Eu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Bh,
      `
`,
    )
    .replace(Vh, "");
}
function pi(e, t, n) {
  if (((t = Eu(t)), Eu(e) !== t && n)) throw Error(M(425));
}
function qi() {}
var Zs = null,
  eo = null;
function to(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var no = typeof setTimeout == "function" ? setTimeout : void 0,
  Hh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Tu = typeof Promise == "function" ? Promise : void 0,
  Uh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Tu < "u"
        ? function (e) {
            return Tu.resolve(null).then(e).catch(Wh);
          }
        : no;
function Wh(e) {
  setTimeout(function () {
    throw e;
  });
}
function as(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), br(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  br(t);
}
function Ft(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Cu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var qn = Math.random().toString(36).slice(2),
  ot = "__reactFiber$" + qn,
  Ir = "__reactProps$" + qn,
  Et = "__reactContainer$" + qn,
  ro = "__reactEvents$" + qn,
  $h = "__reactListeners$" + qn,
  Gh = "__reactHandles$" + qn;
function tn(e) {
  var t = e[ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Et] || n[ot])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Cu(e); e !== null; ) {
          if ((n = e[ot])) return n;
          e = Cu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function qr(e) {
  return (
    (e = e[ot] || e[Et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function Pl(e) {
  return e[Ir] || null;
}
var io = [],
  Ln = -1;
function Yt(e) {
  return { current: e };
}
function q(e) {
  0 > Ln || ((e.current = io[Ln]), (io[Ln] = null), Ln--);
}
function K(e, t) {
  Ln++, (io[Ln] = e.current), (e.current = t);
}
var $t = {},
  we = Yt($t),
  Pe = Yt(!1),
  un = $t;
function Vn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return $t;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Le(e) {
  return (e = e.childContextTypes), e != null;
}
function Xi() {
  q(Pe), q(we);
}
function ku(e, t, n) {
  if (we.current !== $t) throw Error(M(168));
  K(we, t), K(Pe, n);
}
function Hd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(M(108, Rm(e) || "Unknown", i));
  return te({}, n, r);
}
function Qi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || $t),
    (un = we.current),
    K(we, e),
    K(Pe, Pe.current),
    !0
  );
}
function Pu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n
    ? ((e = Hd(e, t, un)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      q(Pe),
      q(we),
      K(we, e))
    : q(Pe),
    K(Pe, n);
}
var gt = null,
  Ll = !1,
  us = !1;
function Ud(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
function Kh(e) {
  (Ll = !0), Ud(e);
}
function qt() {
  if (!us && gt !== null) {
    us = !0;
    var e = 0,
      t = $;
    try {
      var n = gt;
      for ($ = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (gt = null), (Ll = !1);
    } catch (i) {
      throw (gt !== null && (gt = gt.slice(e + 1)), md(Ko, qt), i);
    } finally {
      ($ = t), (us = !1);
    }
  }
  return null;
}
var Nn = [],
  On = 0,
  Ji = null,
  Zi = 0,
  Fe = [],
  Be = 0,
  cn = null,
  vt = 1,
  yt = "";
function Zt(e, t) {
  (Nn[On++] = Zi), (Nn[On++] = Ji), (Ji = e), (Zi = t);
}
function Wd(e, t, n) {
  (Fe[Be++] = vt), (Fe[Be++] = yt), (Fe[Be++] = cn), (cn = e);
  var r = vt;
  e = yt;
  var i = 32 - qe(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - qe(t) + i;
  if (30 < l) {
    var s = i - (i % 5);
    (l = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (vt = (1 << (32 - qe(t) + i)) | (n << i) | r),
      (yt = l + e);
  } else (vt = (1 << l) | (n << i) | r), (yt = e);
}
function na(e) {
  e.return !== null && (Zt(e, 1), Wd(e, 1, 0));
}
function ra(e) {
  for (; e === Ji; )
    (Ji = Nn[--On]), (Nn[On] = null), (Zi = Nn[--On]), (Nn[On] = null);
  for (; e === cn; )
    (cn = Fe[--Be]),
      (Fe[Be] = null),
      (yt = Fe[--Be]),
      (Fe[Be] = null),
      (vt = Fe[--Be]),
      (Fe[Be] = null);
}
var Ae = null,
  Me = null,
  X = !1,
  Ye = null;
function $d(e, t) {
  var n = Ve(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Lu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ae = e), (Me = Ft(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ae = e), (Me = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = cn !== null ? { id: vt, overflow: yt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ve(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ae = e),
            (Me = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function lo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function so(e) {
  if (X) {
    var t = Me;
    if (t) {
      var n = t;
      if (!Lu(e, t)) {
        if (lo(e)) throw Error(M(418));
        t = Ft(n.nextSibling);
        var r = Ae;
        t && Lu(e, t)
          ? $d(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (X = !1), (Ae = e));
      }
    } else {
      if (lo(e)) throw Error(M(418));
      (e.flags = (e.flags & -4097) | 2), (X = !1), (Ae = e);
    }
  }
}
function Nu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ae = e;
}
function mi(e) {
  if (e !== Ae) return !1;
  if (!X) return Nu(e), (X = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !to(e.type, e.memoizedProps))),
    t && (t = Me))
  ) {
    if (lo(e)) throw (Gd(), Error(M(418)));
    for (; t; ) $d(e, t), (t = Ft(t.nextSibling));
  }
  if ((Nu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Me = Ft(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Me = null;
    }
  } else Me = Ae ? Ft(e.stateNode.nextSibling) : null;
  return !0;
}
function Gd() {
  for (var e = Me; e; ) e = Ft(e.nextSibling);
}
function Hn() {
  (Me = Ae = null), (X = !1);
}
function ia(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
var Yh = kt.ReactCurrentBatchConfig;
function sr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var i = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[l] : (a[l] = s);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function hi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Ou(e) {
  var t = e._init;
  return t(e._payload);
}
function Kd(e) {
  function t(p, d) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [d]), (p.flags |= 16)) : m.push(d);
    }
  }
  function n(p, d) {
    if (!e) return null;
    for (; d !== null; ) t(p, d), (d = d.sibling);
    return null;
  }
  function r(p, d) {
    for (p = new Map(); d !== null; )
      d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling);
    return p;
  }
  function i(p, d) {
    return (p = Ut(p, d)), (p.index = 0), (p.sibling = null), p;
  }
  function l(p, d, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < d ? ((p.flags |= 2), d) : m)
            : ((p.flags |= 2), d))
        : ((p.flags |= 1048576), d)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, d, m, w) {
    return d === null || d.tag !== 6
      ? ((d = gs(m, p.mode, w)), (d.return = p), d)
      : ((d = i(d, m)), (d.return = p), d);
  }
  function o(p, d, m, w) {
    var x = m.type;
    return x === En
      ? c(p, d, m.props.children, w, m.key)
      : d !== null &&
          (d.elementType === x ||
            (typeof x == "object" &&
              x !== null &&
              x.$$typeof === Nt &&
              Ou(x) === d.type))
        ? ((w = i(d, m.props)), (w.ref = sr(p, d, m)), (w.return = p), w)
        : ((w = Ai(m.type, m.key, m.props, null, p.mode, w)),
          (w.ref = sr(p, d, m)),
          (w.return = p),
          w);
  }
  function u(p, d, m, w) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== m.containerInfo ||
      d.stateNode.implementation !== m.implementation
      ? ((d = vs(m, p.mode, w)), (d.return = p), d)
      : ((d = i(d, m.children || [])), (d.return = p), d);
  }
  function c(p, d, m, w, x) {
    return d === null || d.tag !== 7
      ? ((d = on(m, p.mode, w, x)), (d.return = p), d)
      : ((d = i(d, m)), (d.return = p), d);
  }
  function f(p, d, m) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = gs("" + d, p.mode, m)), (d.return = p), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ii:
          return (
            (m = Ai(d.type, d.key, d.props, null, p.mode, m)),
            (m.ref = sr(p, null, d)),
            (m.return = p),
            m
          );
        case xn:
          return (d = vs(d, p.mode, m)), (d.return = p), d;
        case Nt:
          var w = d._init;
          return f(p, w(d._payload), m);
      }
      if (pr(d) || tr(d))
        return (d = on(d, p.mode, m, null)), (d.return = p), d;
      hi(p, d);
    }
    return null;
  }
  function h(p, d, m, w) {
    var x = d !== null ? d.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return x !== null ? null : a(p, d, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ii:
          return m.key === x ? o(p, d, m, w) : null;
        case xn:
          return m.key === x ? u(p, d, m, w) : null;
        case Nt:
          return (x = m._init), h(p, d, x(m._payload), w);
      }
      if (pr(m) || tr(m)) return x !== null ? null : c(p, d, m, w, null);
      hi(p, m);
    }
    return null;
  }
  function v(p, d, m, w, x) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (p = p.get(m) || null), a(d, p, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ii:
          return (p = p.get(w.key === null ? m : w.key) || null), o(d, p, w, x);
        case xn:
          return (p = p.get(w.key === null ? m : w.key) || null), u(d, p, w, x);
        case Nt:
          var C = w._init;
          return v(p, d, m, C(w._payload), x);
      }
      if (pr(w) || tr(w)) return (p = p.get(m) || null), c(d, p, w, x, null);
      hi(d, w);
    }
    return null;
  }
  function g(p, d, m, w) {
    for (
      var x = null, C = null, R = d, L = (d = 0), N = null;
      R !== null && L < m.length;
      L++
    ) {
      R.index > L ? ((N = R), (R = null)) : (N = R.sibling);
      var P = h(p, R, m[L], w);
      if (P === null) {
        R === null && (R = N);
        break;
      }
      e && R && P.alternate === null && t(p, R),
        (d = l(P, d, L)),
        C === null ? (x = P) : (C.sibling = P),
        (C = P),
        (R = N);
    }
    if (L === m.length) return n(p, R), X && Zt(p, L), x;
    if (R === null) {
      for (; L < m.length; L++)
        (R = f(p, m[L], w)),
          R !== null &&
            ((d = l(R, d, L)), C === null ? (x = R) : (C.sibling = R), (C = R));
      return X && Zt(p, L), x;
    }
    for (R = r(p, R); L < m.length; L++)
      (N = v(R, p, L, m[L], w)),
        N !== null &&
          (e && N.alternate !== null && R.delete(N.key === null ? L : N.key),
          (d = l(N, d, L)),
          C === null ? (x = N) : (C.sibling = N),
          (C = N));
    return (
      e &&
        R.forEach(function (I) {
          return t(p, I);
        }),
      X && Zt(p, L),
      x
    );
  }
  function y(p, d, m, w) {
    var x = tr(m);
    if (typeof x != "function") throw Error(M(150));
    if (((m = x.call(m)), m == null)) throw Error(M(151));
    for (
      var C = (x = null), R = d, L = (d = 0), N = null, P = m.next();
      R !== null && !P.done;
      L++, P = m.next()
    ) {
      R.index > L ? ((N = R), (R = null)) : (N = R.sibling);
      var I = h(p, R, P.value, w);
      if (I === null) {
        R === null && (R = N);
        break;
      }
      e && R && I.alternate === null && t(p, R),
        (d = l(I, d, L)),
        C === null ? (x = I) : (C.sibling = I),
        (C = I),
        (R = N);
    }
    if (P.done) return n(p, R), X && Zt(p, L), x;
    if (R === null) {
      for (; !P.done; L++, P = m.next())
        (P = f(p, P.value, w)),
          P !== null &&
            ((d = l(P, d, L)), C === null ? (x = P) : (C.sibling = P), (C = P));
      return X && Zt(p, L), x;
    }
    for (R = r(p, R); !P.done; L++, P = m.next())
      (P = v(R, p, L, P.value, w)),
        P !== null &&
          (e && P.alternate !== null && R.delete(P.key === null ? L : P.key),
          (d = l(P, d, L)),
          C === null ? (x = P) : (C.sibling = P),
          (C = P));
    return (
      e &&
        R.forEach(function (z) {
          return t(p, z);
        }),
      X && Zt(p, L),
      x
    );
  }
  function S(p, d, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === En &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case ii:
          e: {
            for (var x = m.key, C = d; C !== null; ) {
              if (C.key === x) {
                if (((x = m.type), x === En)) {
                  if (C.tag === 7) {
                    n(p, C.sibling),
                      (d = i(C, m.props.children)),
                      (d.return = p),
                      (p = d);
                    break e;
                  }
                } else if (
                  C.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === Nt &&
                    Ou(x) === C.type)
                ) {
                  n(p, C.sibling),
                    (d = i(C, m.props)),
                    (d.ref = sr(p, C, m)),
                    (d.return = p),
                    (p = d);
                  break e;
                }
                n(p, C);
                break;
              } else t(p, C);
              C = C.sibling;
            }
            m.type === En
              ? ((d = on(m.props.children, p.mode, w, m.key)),
                (d.return = p),
                (p = d))
              : ((w = Ai(m.type, m.key, m.props, null, p.mode, w)),
                (w.ref = sr(p, d, m)),
                (w.return = p),
                (p = w));
          }
          return s(p);
        case xn:
          e: {
            for (C = m.key; d !== null; ) {
              if (d.key === C)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === m.containerInfo &&
                  d.stateNode.implementation === m.implementation
                ) {
                  n(p, d.sibling),
                    (d = i(d, m.children || [])),
                    (d.return = p),
                    (p = d);
                  break e;
                } else {
                  n(p, d);
                  break;
                }
              else t(p, d);
              d = d.sibling;
            }
            (d = vs(m, p.mode, w)), (d.return = p), (p = d);
          }
          return s(p);
        case Nt:
          return (C = m._init), S(p, d, C(m._payload), w);
      }
      if (pr(m)) return g(p, d, m, w);
      if (tr(m)) return y(p, d, m, w);
      hi(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        d !== null && d.tag === 6
          ? (n(p, d.sibling), (d = i(d, m)), (d.return = p), (p = d))
          : (n(p, d), (d = gs(m, p.mode, w)), (d.return = p), (p = d)),
        s(p))
      : n(p, d);
  }
  return S;
}
var Un = Kd(!0),
  Yd = Kd(!1),
  el = Yt(null),
  tl = null,
  Rn = null,
  la = null;
function sa() {
  la = Rn = tl = null;
}
function oa(e) {
  var t = el.current;
  q(el), (e._currentValue = t);
}
function oo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Dn(e, t) {
  (tl = e),
    (la = Rn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ke = !0), (e.firstContext = null));
}
function Ue(e) {
  var t = e._currentValue;
  if (la !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Rn === null)) {
      if (tl === null) throw Error(M(308));
      (Rn = e), (tl.dependencies = { lanes: 0, firstContext: e });
    } else Rn = Rn.next = e;
  return t;
}
var nn = null;
function aa(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
function qd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), aa(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Tt(e, r)
  );
}
function Tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ot = !1;
function ua(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Xd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function wt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), U & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Tt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), aa(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Tt(e, n)
  );
}
function Ni(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yo(e, n);
  }
}
function Ru(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = s) : (l = l.next = s), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function nl(e, t, n, r) {
  var i = e.updateQueue;
  Ot = !1;
  var l = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var o = a,
      u = o.next;
    (o.next = null), s === null ? (l = u) : (s.next = u), (s = o);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = o)));
  }
  if (l !== null) {
    var f = i.baseState;
    (s = 0), (c = u = o = null), (a = l);
    do {
      var h = a.lane,
        v = a.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            y = a;
          switch (((h = t), (v = n), y.tag)) {
            case 1:
              if (((g = y.payload), typeof g == "function")) {
                f = g.call(v, f, h);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = y.payload),
                (h = typeof g == "function" ? g.call(v, f, h) : g),
                h == null)
              )
                break e;
              f = te({}, f, h);
              break e;
            case 2:
              Ot = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [a]) : h.push(a));
      } else
        (v = {
          eventTime: v,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (o = f)) : (c = c.next = v),
          (s |= h);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (o = f),
      (i.baseState = o),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    (fn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function bu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(M(191, i));
        i.call(r);
      }
    }
}
var Xr = {},
  dt = Yt(Xr),
  Dr = Yt(Xr),
  jr = Yt(Xr);
function rn(e) {
  if (e === Xr) throw Error(M(174));
  return e;
}
function ca(e, t) {
  switch ((K(jr, t), K(Dr, e), K(dt, Xr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Vs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Vs(t, e));
  }
  q(dt), K(dt, t);
}
function Wn() {
  q(dt), q(Dr), q(jr);
}
function Qd(e) {
  rn(jr.current);
  var t = rn(dt.current),
    n = Vs(t, e.type);
  t !== n && (K(Dr, e), K(dt, n));
}
function da(e) {
  Dr.current === e && (q(dt), q(Dr));
}
var Z = Yt(0);
function rl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var cs = [];
function fa() {
  for (var e = 0; e < cs.length; e++)
    cs[e]._workInProgressVersionPrimary = null;
  cs.length = 0;
}
var Oi = kt.ReactCurrentDispatcher,
  ds = kt.ReactCurrentBatchConfig,
  dn = 0,
  ee = null,
  ae = null,
  ce = null,
  il = !1,
  xr = !1,
  Fr = 0,
  qh = 0;
function he() {
  throw Error(M(321));
}
function pa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Je(e[n], t[n])) return !1;
  return !0;
}
function ma(e, t, n, r, i, l) {
  if (
    ((dn = l),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Oi.current = e === null || e.memoizedState === null ? Zh : eg),
    (e = n(r, i)),
    xr)
  ) {
    l = 0;
    do {
      if (((xr = !1), (Fr = 0), 25 <= l)) throw Error(M(301));
      (l += 1),
        (ce = ae = null),
        (t.updateQueue = null),
        (Oi.current = tg),
        (e = n(r, i));
    } while (xr);
  }
  if (
    ((Oi.current = ll),
    (t = ae !== null && ae.next !== null),
    (dn = 0),
    (ce = ae = ee = null),
    (il = !1),
    t)
  )
    throw Error(M(300));
  return e;
}
function ha() {
  var e = Fr !== 0;
  return (Fr = 0), e;
}
function st() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ce === null ? (ee.memoizedState = ce = e) : (ce = ce.next = e), ce;
}
function We() {
  if (ae === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = ce === null ? ee.memoizedState : ce.next;
  if (t !== null) (ce = t), (ae = e);
  else {
    if (e === null) throw Error(M(310));
    (ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      ce === null ? (ee.memoizedState = ce = e) : (ce = ce.next = e);
  }
  return ce;
}
function Br(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fs(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = ae,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = l.next), (l.next = s);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var a = (s = null),
      o = null,
      u = l;
    do {
      var c = u.lane;
      if ((dn & c) === c)
        o !== null &&
          (o = o.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        o === null ? ((a = o = f), (s = r)) : (o = o.next = f),
          (ee.lanes |= c),
          (fn |= c);
      }
      u = u.next;
    } while (u !== null && u !== l);
    o === null ? (s = r) : (o.next = a),
      Je(r, t.memoizedState) || (ke = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = o),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (ee.lanes |= l), (fn |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ps(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (l = e(l, s.action)), (s = s.next);
    while (s !== i);
    Je(l, t.memoizedState) || (ke = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Jd() {}
function Zd(e, t) {
  var n = ee,
    r = We(),
    i = t(),
    l = !Je(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (ke = !0)),
    (r = r.queue),
    ga(nf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ce !== null && ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Vr(9, tf.bind(null, n, r, i, t), void 0, null),
      de === null)
    )
      throw Error(M(349));
    dn & 30 || ef(n, t, i);
  }
  return i;
}
function ef(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function tf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), rf(t) && lf(e);
}
function nf(e, t, n) {
  return n(function () {
    rf(t) && lf(e);
  });
}
function rf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Je(e, n);
  } catch {
    return !0;
  }
}
function lf(e) {
  var t = Tt(e, 1);
  t !== null && Xe(t, e, 1, -1);
}
function zu(e) {
  var t = st();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Br,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Jh.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function Vr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sf() {
  return We().memoizedState;
}
function Ri(e, t, n, r) {
  var i = st();
  (ee.flags |= e),
    (i.memoizedState = Vr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Nl(e, t, n, r) {
  var i = We();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ae !== null) {
    var s = ae.memoizedState;
    if (((l = s.destroy), r !== null && pa(r, s.deps))) {
      i.memoizedState = Vr(t, n, l, r);
      return;
    }
  }
  (ee.flags |= e), (i.memoizedState = Vr(1 | t, n, l, r));
}
function Mu(e, t) {
  return Ri(8390656, 8, e, t);
}
function ga(e, t) {
  return Nl(2048, 8, e, t);
}
function of(e, t) {
  return Nl(4, 2, e, t);
}
function af(e, t) {
  return Nl(4, 4, e, t);
}
function uf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function cf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Nl(4, 4, uf.bind(null, t, e), n)
  );
}
function va() {}
function df(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ff(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function pf(e, t, n) {
  return dn & 21
    ? (Je(n, t) || ((n = vd()), (ee.lanes |= n), (fn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ke = !0)), (e.memoizedState = n));
}
function Xh(e, t) {
  var n = $;
  ($ = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ds.transition;
  ds.transition = {};
  try {
    e(!1), t();
  } finally {
    ($ = n), (ds.transition = r);
  }
}
function mf() {
  return We().memoizedState;
}
function Qh(e, t, n) {
  var r = Ht(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    hf(e))
  )
    gf(t, n);
  else if (((n = qd(e, t, n, r)), n !== null)) {
    var i = xe();
    Xe(n, e, r, i), vf(n, t, r);
  }
}
function Jh(e, t, n) {
  var r = Ht(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (hf(e)) gf(t, i);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = l(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Je(a, s))) {
          var o = t.interleaved;
          o === null
            ? ((i.next = i), aa(t))
            : ((i.next = o.next), (o.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = qd(e, t, i, r)),
      n !== null && ((i = xe()), Xe(n, e, r, i), vf(n, t, r));
  }
}
function hf(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function gf(e, t) {
  xr = il = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function vf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yo(e, n);
  }
}
var ll = {
    readContext: Ue,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1,
  },
  Zh = {
    readContext: Ue,
    useCallback: function (e, t) {
      return (st().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ue,
    useEffect: Mu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ri(4194308, 4, uf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ri(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ri(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = st();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = st();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Qh.bind(null, ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = st();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: zu,
    useDebugValue: va,
    useDeferredValue: function (e) {
      return (st().memoizedState = e);
    },
    useTransition: function () {
      var e = zu(!1),
        t = e[0];
      return (e = Xh.bind(null, e[1])), (st().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ee,
        i = st();
      if (X) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(M(349));
        dn & 30 || ef(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        Mu(nf.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Vr(9, tf.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = st(),
        t = de.identifierPrefix;
      if (X) {
        var n = yt,
          r = vt;
        (n = (r & ~(1 << (32 - qe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Fr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = qh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  eg = {
    readContext: Ue,
    useCallback: df,
    useContext: Ue,
    useEffect: ga,
    useImperativeHandle: cf,
    useInsertionEffect: of,
    useLayoutEffect: af,
    useMemo: ff,
    useReducer: fs,
    useRef: sf,
    useState: function () {
      return fs(Br);
    },
    useDebugValue: va,
    useDeferredValue: function (e) {
      var t = We();
      return pf(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = fs(Br)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: Jd,
    useSyncExternalStore: Zd,
    useId: mf,
    unstable_isNewReconciler: !1,
  },
  tg = {
    readContext: Ue,
    useCallback: df,
    useContext: Ue,
    useEffect: ga,
    useImperativeHandle: cf,
    useInsertionEffect: of,
    useLayoutEffect: af,
    useMemo: ff,
    useReducer: ps,
    useRef: sf,
    useState: function () {
      return ps(Br);
    },
    useDebugValue: va,
    useDeferredValue: function (e) {
      var t = We();
      return ae === null ? (t.memoizedState = e) : pf(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = ps(Br)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: Jd,
    useSyncExternalStore: Zd,
    useId: mf,
    unstable_isNewReconciler: !1,
  };
function Ge(e, t) {
  if (e && e.defaultProps) {
    (t = te({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ao(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : te({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ol = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? vn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = Ht(e),
      l = wt(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = Bt(e, l, i)),
      t !== null && (Xe(t, e, i, r), Ni(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = Ht(e),
      l = wt(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Bt(e, l, i)),
      t !== null && (Xe(t, e, i, r), Ni(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = xe(),
      r = Ht(e),
      i = wt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Bt(e, i, r)),
      t !== null && (Xe(t, e, r, n), Ni(t, e, r));
  },
};
function Au(e, t, n, r, i, l, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Mr(n, r) || !Mr(i, l)
        : !0
  );
}
function yf(e, t, n) {
  var r = !1,
    i = $t,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Ue(l))
      : ((i = Le(t) ? un : we.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Vn(e, i) : $t)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ol),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function _u(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ol.enqueueReplaceState(t, t.state, null);
}
function uo(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), ua(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (i.context = Ue(l))
    : ((l = Le(t) ? un : we.current), (i.context = Vn(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (ao(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ol.enqueueReplaceState(i, i.state, null),
      nl(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function $n(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Om(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ms(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function co(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ng = typeof WeakMap == "function" ? WeakMap : Map;
function wf(e, t, n) {
  (n = wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ol || ((ol = !0), (xo = r)), co(e, t);
    }),
    n
  );
}
function Sf(e, t, n) {
  (n = wt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        co(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        co(e, t),
          typeof r != "function" &&
            (Vt === null ? (Vt = new Set([this])) : Vt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Iu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ng();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = gg.bind(null, e, t, n)), t.then(e, e));
}
function Du(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ju(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = wt(-1, 1)), (t.tag = 2), Bt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var rg = kt.ReactCurrentOwner,
  ke = !1;
function Se(e, t, n, r) {
  t.child = e === null ? Yd(t, null, n, r) : Un(t, e.child, n, r);
}
function Fu(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    Dn(t, i),
    (r = ma(e, t, n, r, l, i)),
    (n = ha()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ct(e, t, i))
      : (X && n && na(t), (t.flags |= 1), Se(e, t, r, i), t.child)
  );
}
function Bu(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !ka(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), xf(e, t, l, r, i))
      : ((e = Ai(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & i))) {
    var s = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Mr), n(s, r) && e.ref === t.ref)
    )
      return Ct(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ut(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function xf(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Mr(l, r) && e.ref === t.ref)
      if (((ke = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        e.flags & 131072 && (ke = !0);
      else return (t.lanes = e.lanes), Ct(e, t, i);
  }
  return fo(e, t, n, r, i);
}
function Ef(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        K(zn, be),
        (be |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          K(zn, be),
          (be |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        K(zn, be),
        (be |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      K(zn, be),
      (be |= r);
  return Se(e, t, i, n), t.child;
}
function Tf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function fo(e, t, n, r, i) {
  var l = Le(n) ? un : we.current;
  return (
    (l = Vn(t, l)),
    Dn(t, i),
    (n = ma(e, t, n, r, l, i)),
    (r = ha()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ct(e, t, i))
      : (X && r && na(t), (t.flags |= 1), Se(e, t, n, i), t.child)
  );
}
function Vu(e, t, n, r, i) {
  if (Le(n)) {
    var l = !0;
    Qi(t);
  } else l = !1;
  if ((Dn(t, i), t.stateNode === null))
    bi(e, t), yf(t, n, r), uo(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var o = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ue(u))
      : ((u = Le(n) ? un : we.current), (u = Vn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || o !== u) && _u(t, s, r, u)),
      (Ot = !1);
    var h = t.memoizedState;
    (s.state = h),
      nl(t, r, s, i),
      (o = t.memoizedState),
      a !== r || h !== o || Pe.current || Ot
        ? (typeof c == "function" && (ao(t, n, c, r), (o = t.memoizedState)),
          (a = Ot || Au(t, n, a, r, h, o, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = o)),
          (s.props = r),
          (s.state = o),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Xd(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Ge(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (h = s.context),
      (o = n.contextType),
      typeof o == "object" && o !== null
        ? (o = Ue(o))
        : ((o = Le(n) ? un : we.current), (o = Vn(t, o)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || h !== o) && _u(t, s, r, o)),
      (Ot = !1),
      (h = t.memoizedState),
      (s.state = h),
      nl(t, r, s, i);
    var g = t.memoizedState;
    a !== f || h !== g || Pe.current || Ot
      ? (typeof v == "function" && (ao(t, n, v, r), (g = t.memoizedState)),
        (u = Ot || Au(t, n, u, r, h, g, o) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, g, o),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, g, o)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = o),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return po(e, t, n, r, l, i);
}
function po(e, t, n, r, i, l) {
  Tf(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Pu(t, n, !1), Ct(e, t, l);
  (r = t.stateNode), (rg.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Un(t, e.child, null, l)), (t.child = Un(t, null, a, l)))
      : Se(e, t, a, l),
    (t.memoizedState = r.state),
    i && Pu(t, n, !0),
    t.child
  );
}
function Cf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ku(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ku(e, t.context, !1),
    ca(e, t.containerInfo);
}
function Hu(e, t, n, r, i) {
  return Hn(), ia(i), (t.flags |= 256), Se(e, t, n, r), t.child;
}
var mo = { dehydrated: null, treeContext: null, retryLane: 0 };
function ho(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function kf(e, t, n) {
  var r = t.pendingProps,
    i = Z.current,
    l = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    K(Z, i & 1),
    e === null)
  )
    return (
      so(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = s))
                : (l = zl(s, r, 0, null)),
              (e = on(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ho(n)),
              (t.memoizedState = mo),
              e)
            : ya(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return ig(e, t, s, r, a, i, n);
  if (l) {
    (l = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var o = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = o),
          (t.deletions = null))
        : ((r = Ut(i, o)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (l = Ut(a, l)) : ((l = on(l, s, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ho(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (l.memoizedState = s),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = mo),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = Ut(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ya(e, t) {
  return (
    (t = zl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function gi(e, t, n, r) {
  return (
    r !== null && ia(r),
    Un(t, e.child, null, n),
    (e = ya(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ig(e, t, n, r, i, l, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ms(Error(M(422)))), gi(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = r.fallback),
          (i = t.mode),
          (r = zl({ mode: "visible", children: r.children }, i, 0, null)),
          (l = on(l, i, s, null)),
          (l.flags |= 2),
          (r.return = t),
          (l.return = t),
          (r.sibling = l),
          (t.child = r),
          t.mode & 1 && Un(t, e.child, null, s),
          (t.child.memoizedState = ho(s)),
          (t.memoizedState = mo),
          l);
  if (!(t.mode & 1)) return gi(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (l = Error(M(419))), (r = ms(l, r, void 0)), gi(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), ke || a)) {
    if (((r = de), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), Tt(e, i), Xe(r, e, i, -1));
    }
    return Ca(), (r = ms(Error(M(421)))), gi(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = vg.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Me = Ft(i.nextSibling)),
      (Ae = t),
      (X = !0),
      (Ye = null),
      e !== null &&
        ((Fe[Be++] = vt),
        (Fe[Be++] = yt),
        (Fe[Be++] = cn),
        (vt = e.id),
        (yt = e.overflow),
        (cn = t)),
      (t = ya(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Uu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), oo(e.return, t, n);
}
function hs(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function Pf(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((Se(e, t, r.children, n), (r = Z.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Uu(e, n, t);
        else if (e.tag === 19) Uu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((K(Z, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && rl(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          hs(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && rl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        hs(t, !0, n, null, l);
        break;
      case "together":
        hs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function bi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (fn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ut(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function lg(e, t, n) {
  switch (t.tag) {
    case 3:
      Cf(t), Hn();
      break;
    case 5:
      Qd(t);
      break;
    case 1:
      Le(t.type) && Qi(t);
      break;
    case 4:
      ca(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      K(el, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (K(Z, Z.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? kf(e, t, n)
            : (K(Z, Z.current & 1),
              (e = Ct(e, t, n)),
              e !== null ? e.sibling : null);
      K(Z, Z.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Pf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        K(Z, Z.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ef(e, t, n);
  }
  return Ct(e, t, n);
}
var Lf, go, Nf, Of;
Lf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
go = function () {};
Nf = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), rn(dt.current);
    var l = null;
    switch (n) {
      case "input":
        (i = Ds(e, i)), (r = Ds(e, r)), (l = []);
        break;
      case "select":
        (i = te({}, i, { value: void 0 })),
          (r = te({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (i = Bs(e, i)), (r = Bs(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = qi);
    }
    Hs(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Pr.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var o = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && o !== a && (o != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (o && o.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in o)
              o.hasOwnProperty(s) &&
                a[s] !== o[s] &&
                (n || (n = {}), (n[s] = o[s]));
          } else n || (l || (l = []), l.push(u, n)), (n = o);
        else
          u === "dangerouslySetInnerHTML"
            ? ((o = o ? o.__html : void 0),
              (a = a ? a.__html : void 0),
              o != null && a !== o && (l = l || []).push(u, o))
            : u === "children"
              ? (typeof o != "string" && typeof o != "number") ||
                (l = l || []).push(u, "" + o)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Pr.hasOwnProperty(u)
                  ? (o != null && u === "onScroll" && Y("scroll", e),
                    l || a === o || (l = []))
                  : (l = l || []).push(u, o));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Of = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function or(e, t) {
  if (!X)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function sg(e, t, n) {
  var r = t.pendingProps;
  switch ((ra(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ge(t), null;
    case 1:
      return Le(t.type) && Xi(), ge(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Wn(),
        q(Pe),
        q(we),
        fa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (mi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ye !== null && (Co(Ye), (Ye = null)))),
        go(e, t),
        ge(t),
        null
      );
    case 5:
      da(t);
      var i = rn(jr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Nf(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return ge(t), null;
        }
        if (((e = rn(dt.current)), mi(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[ot] = t), (r[Ir] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Y("cancel", r), Y("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < hr.length; i++) Y(hr[i], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Y("error", r), Y("load", r);
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              Ja(r, l), Y("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                Y("invalid", r);
              break;
            case "textarea":
              eu(r, l), Y("invalid", r);
          }
          Hs(n, l), (i = null);
          for (var s in l)
            if (l.hasOwnProperty(s)) {
              var a = l[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      pi(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      pi(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Pr.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  Y("scroll", r);
            }
          switch (n) {
            case "input":
              li(r), Za(r, l, !0);
              break;
            case "textarea":
              li(r), tu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = qi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = nd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[ot] = t),
            (e[Ir] = r),
            Lf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Us(n, r)), n)) {
              case "dialog":
                Y("cancel", e), Y("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < hr.length; i++) Y(hr[i], e);
                i = r;
                break;
              case "source":
                Y("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Y("error", e), Y("load", e), (i = r);
                break;
              case "details":
                Y("toggle", e), (i = r);
                break;
              case "input":
                Ja(e, r), (i = Ds(e, r)), Y("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = te({}, r, { value: void 0 })),
                  Y("invalid", e);
                break;
              case "textarea":
                eu(e, r), (i = Bs(e, r)), Y("invalid", e);
                break;
              default:
                i = r;
            }
            Hs(n, i), (a = i);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var o = a[l];
                l === "style"
                  ? ld(e, o)
                  : l === "dangerouslySetInnerHTML"
                    ? ((o = o ? o.__html : void 0), o != null && rd(e, o))
                    : l === "children"
                      ? typeof o == "string"
                        ? (n !== "textarea" || o !== "") && Lr(e, o)
                        : typeof o == "number" && Lr(e, "" + o)
                      : l !== "suppressContentEditableWarning" &&
                        l !== "suppressHydrationWarning" &&
                        l !== "autoFocus" &&
                        (Pr.hasOwnProperty(l)
                          ? o != null && l === "onScroll" && Y("scroll", e)
                          : o != null && Ho(e, l, o, s));
              }
            switch (n) {
              case "input":
                li(e), Za(e, r, !1);
                break;
              case "textarea":
                li(e), tu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Wt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Mn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Mn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = qi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ge(t), null;
    case 6:
      if (e && t.stateNode != null) Of(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (((n = rn(jr.current)), rn(dt.current), mi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ot] = t),
            (l = r.nodeValue !== n) && ((e = Ae), e !== null))
          )
            switch (e.tag) {
              case 3:
                pi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  pi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ot] = t),
            (t.stateNode = r);
      }
      return ge(t), null;
    case 13:
      if (
        (q(Z),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (X && Me !== null && t.mode & 1 && !(t.flags & 128))
          Gd(), Hn(), (t.flags |= 98560), (l = !1);
        else if (((l = mi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(M(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(M(317));
            l[ot] = t;
          } else
            Hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ge(t), (l = !1);
        } else Ye !== null && (Co(Ye), (Ye = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Z.current & 1 ? ue === 0 && (ue = 3) : Ca())),
          t.updateQueue !== null && (t.flags |= 4),
          ge(t),
          null);
    case 4:
      return (
        Wn(), go(e, t), e === null && Ar(t.stateNode.containerInfo), ge(t), null
      );
    case 10:
      return oa(t.type._context), ge(t), null;
    case 17:
      return Le(t.type) && Xi(), ge(t), null;
    case 19:
      if ((q(Z), (l = t.memoizedState), l === null)) return ge(t), null;
      if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
        if (r) or(l, !1);
        else {
          if (ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = rl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    or(l, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (s = l.alternate),
                    s === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = s.childLanes),
                        (l.lanes = s.lanes),
                        (l.child = s.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = s.memoizedProps),
                        (l.memoizedState = s.memoizedState),
                        (l.updateQueue = s.updateQueue),
                        (l.type = s.type),
                        (e = s.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return K(Z, (Z.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            re() > Gn &&
            ((t.flags |= 128), (r = !0), or(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = rl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              or(l, !0),
              l.tail === null && l.tailMode === "hidden" && !s.alternate && !X)
            )
              return ge(t), null;
          } else
            2 * re() - l.renderingStartTime > Gn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), or(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = l.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (l.last = s));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = re()),
          (t.sibling = null),
          (n = Z.current),
          K(Z, r ? (n & 1) | 2 : n & 1),
          t)
        : (ge(t), null);
    case 22:
    case 23:
      return (
        Ta(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? be & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function og(e, t) {
  switch ((ra(t), t.tag)) {
    case 1:
      return (
        Le(t.type) && Xi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Wn(),
        q(Pe),
        q(we),
        fa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return da(t), null;
    case 13:
      if ((q(Z), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(M(340));
        Hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return q(Z), null;
    case 4:
      return Wn(), null;
    case 10:
      return oa(t.type._context), null;
    case 22:
    case 23:
      return Ta(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vi = !1,
  ve = !1,
  ag = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function bn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ne(e, t, r);
      }
    else n.current = null;
}
function vo(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var Wu = !1;
function ug(e, t) {
  if (((Zs = Gi), (e = Md()), ta(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            o = -1,
            u = 0,
            c = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var v;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== l || (r !== 0 && f.nodeType !== 3) || (o = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (v = f.firstChild) !== null;

            )
              (h = f), (f = v);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++u === i && (a = s),
                h === l && ++c === r && (o = s),
                (v = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = v;
          }
          n = a === -1 || o === -1 ? null : { start: a, end: o };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (eo = { focusedElem: e, selectionRange: n }, Gi = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var y = g.memoizedProps,
                    S = g.memoizedState,
                    p = t.stateNode,
                    d = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Ge(t.type, y),
                      S,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (w) {
          ne(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (g = Wu), (Wu = !1), g;
}
function Er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && vo(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Rl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function yo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Rf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Rf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ot], delete t[Ir], delete t[ro], delete t[$h], delete t[Gh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function bf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $u(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || bf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function wo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = qi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (wo(e, t, n), e = e.sibling; e !== null; ) wo(e, t, n), (e = e.sibling);
}
function So(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (So(e, t, n), e = e.sibling; e !== null; ) So(e, t, n), (e = e.sibling);
}
var fe = null,
  Ke = !1;
function Pt(e, t, n) {
  for (n = n.child; n !== null; ) zf(e, t, n), (n = n.sibling);
}
function zf(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(El, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ve || bn(n, t);
    case 6:
      var r = fe,
        i = Ke;
      (fe = null),
        Pt(e, t, n),
        (fe = r),
        (Ke = i),
        fe !== null &&
          (Ke
            ? ((e = fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : fe.removeChild(n.stateNode));
      break;
    case 18:
      fe !== null &&
        (Ke
          ? ((e = fe),
            (n = n.stateNode),
            e.nodeType === 8
              ? as(e.parentNode, n)
              : e.nodeType === 1 && as(e, n),
            br(e))
          : as(fe, n.stateNode));
      break;
    case 4:
      (r = fe),
        (i = Ke),
        (fe = n.stateNode.containerInfo),
        (Ke = !0),
        Pt(e, t, n),
        (fe = r),
        (Ke = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var l = i,
            s = l.destroy;
          (l = l.tag),
            s !== void 0 && (l & 2 || l & 4) && vo(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Pt(e, t, n);
      break;
    case 1:
      if (
        !ve &&
        (bn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ne(n, t, a);
        }
      Pt(e, t, n);
      break;
    case 21:
      Pt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ve = (r = ve) || n.memoizedState !== null), Pt(e, t, n), (ve = r))
        : Pt(e, t, n);
      break;
    default:
      Pt(e, t, n);
  }
}
function Gu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ag()),
      t.forEach(function (r) {
        var i = yg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function $e(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (fe = a.stateNode), (Ke = !1);
              break e;
            case 3:
              (fe = a.stateNode.containerInfo), (Ke = !0);
              break e;
            case 4:
              (fe = a.stateNode.containerInfo), (Ke = !0);
              break e;
          }
          a = a.return;
        }
        if (fe === null) throw Error(M(160));
        zf(l, s, i), (fe = null), (Ke = !1);
        var o = i.alternate;
        o !== null && (o.return = null), (i.return = null);
      } catch (u) {
        ne(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Mf(t, e), (t = t.sibling);
}
function Mf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (($e(t, e), rt(e), r & 4)) {
        try {
          Er(3, e, e.return), Rl(3, e);
        } catch (y) {
          ne(e, e.return, y);
        }
        try {
          Er(5, e, e.return);
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      break;
    case 1:
      $e(t, e), rt(e), r & 512 && n !== null && bn(n, n.return);
      break;
    case 5:
      if (
        ($e(t, e),
        rt(e),
        r & 512 && n !== null && bn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Lr(i, "");
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          s = n !== null ? n.memoizedProps : l,
          a = e.type,
          o = e.updateQueue;
        if (((e.updateQueue = null), o !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && ed(i, l),
              Us(a, s);
            var u = Us(a, l);
            for (s = 0; s < o.length; s += 2) {
              var c = o[s],
                f = o[s + 1];
              c === "style"
                ? ld(i, f)
                : c === "dangerouslySetInnerHTML"
                  ? rd(i, f)
                  : c === "children"
                    ? Lr(i, f)
                    : Ho(i, c, f, u);
            }
            switch (a) {
              case "input":
                js(i, l);
                break;
              case "textarea":
                td(i, l);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var v = l.value;
                v != null
                  ? Mn(i, !!l.multiple, v, !1)
                  : h !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Mn(i, !!l.multiple, l.defaultValue, !0)
                      : Mn(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[Ir] = l;
          } catch (y) {
            ne(e, e.return, y);
          }
      }
      break;
    case 6:
      if (($e(t, e), rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(M(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        ($e(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          br(t.containerInfo);
        } catch (y) {
          ne(e, e.return, y);
        }
      break;
    case 4:
      $e(t, e), rt(e);
      break;
    case 13:
      $e(t, e),
        rt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (xa = re())),
        r & 4 && Gu(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ve = (u = ve) || c), $e(t, e), (ve = u)) : $e(t, e),
        rt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (j = e, c = e.child; c !== null; ) {
            for (f = j = c; j !== null; ) {
              switch (((h = j), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Er(4, h, h.return);
                  break;
                case 1:
                  bn(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (y) {
                      ne(r, n, y);
                    }
                  }
                  break;
                case 5:
                  bn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Yu(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = h), (j = v)) : Yu(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = f.stateNode),
                      (o = f.memoizedProps.style),
                      (s =
                        o != null && o.hasOwnProperty("display")
                          ? o.display
                          : null),
                      (a.style.display = id("display", s)));
              } catch (y) {
                ne(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                ne(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      $e(t, e), rt(e), r & 4 && Gu(e);
      break;
    case 21:
      break;
    default:
      $e(t, e), rt(e);
  }
}
function rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (bf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Lr(i, ""), (r.flags &= -33));
          var l = $u(e);
          So(e, l, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = $u(e);
          wo(e, a, s);
          break;
        default:
          throw Error(M(161));
      }
    } catch (o) {
      ne(e, e.return, o);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function cg(e, t, n) {
  (j = e), Af(e);
}
function Af(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var i = j,
      l = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || vi;
      if (!s) {
        var a = i.alternate,
          o = (a !== null && a.memoizedState !== null) || ve;
        a = vi;
        var u = ve;
        if (((vi = s), (ve = o) && !u))
          for (j = i; j !== null; )
            (s = j),
              (o = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? qu(i)
                : o !== null
                  ? ((o.return = s), (j = o))
                  : qu(i);
        for (; l !== null; ) (j = l), Af(l), (l = l.sibling);
        (j = i), (vi = a), (ve = u);
      }
      Ku(e);
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (j = l)) : Ku(e);
  }
}
function Ku(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ve || Rl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ve)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ge(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var l = t.updateQueue;
              l !== null && bu(t, l, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                bu(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var o = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    o.autoFocus && n.focus();
                    break;
                  case "img":
                    o.src && (n.src = o.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && br(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(M(163));
          }
        ve || (t.flags & 512 && yo(t));
      } catch (h) {
        ne(t, t.return, h);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Yu(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function qu(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Rl(4, t);
          } catch (o) {
            ne(t, n, o);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (o) {
              ne(t, i, o);
            }
          }
          var l = t.return;
          try {
            yo(t);
          } catch (o) {
            ne(t, l, o);
          }
          break;
        case 5:
          var s = t.return;
          try {
            yo(t);
          } catch (o) {
            ne(t, s, o);
          }
      }
    } catch (o) {
      ne(t, t.return, o);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (j = a);
      break;
    }
    j = t.return;
  }
}
var dg = Math.ceil,
  sl = kt.ReactCurrentDispatcher,
  wa = kt.ReactCurrentOwner,
  He = kt.ReactCurrentBatchConfig,
  U = 0,
  de = null,
  le = null,
  pe = 0,
  be = 0,
  zn = Yt(0),
  ue = 0,
  Hr = null,
  fn = 0,
  bl = 0,
  Sa = 0,
  Tr = null,
  Ce = null,
  xa = 0,
  Gn = 1 / 0,
  ht = null,
  ol = !1,
  xo = null,
  Vt = null,
  yi = !1,
  At = null,
  al = 0,
  Cr = 0,
  Eo = null,
  zi = -1,
  Mi = 0;
function xe() {
  return U & 6 ? re() : zi !== -1 ? zi : (zi = re());
}
function Ht(e) {
  return e.mode & 1
    ? U & 2 && pe !== 0
      ? pe & -pe
      : Yh.transition !== null
        ? (Mi === 0 && (Mi = vd()), Mi)
        : ((e = $),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cd(e.type))),
          e)
    : 1;
}
function Xe(e, t, n, r) {
  if (50 < Cr) throw ((Cr = 0), (Eo = null), Error(M(185)));
  Kr(e, n, r),
    (!(U & 2) || e !== de) &&
      (e === de && (!(U & 2) && (bl |= n), ue === 4 && bt(e, pe)),
      Ne(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((Gn = re() + 500), Ll && qt()));
}
function Ne(e, t) {
  var n = e.callbackNode;
  Ym(e, t);
  var r = $i(e, e === de ? pe : 0);
  if (r === 0)
    n !== null && iu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && iu(n), t === 1))
      e.tag === 0 ? Kh(Xu.bind(null, e)) : Ud(Xu.bind(null, e)),
        Uh(function () {
          !(U & 6) && qt();
        }),
        (n = null);
    else {
      switch (yd(r)) {
        case 1:
          n = Ko;
          break;
        case 4:
          n = hd;
          break;
        case 16:
          n = Wi;
          break;
        case 536870912:
          n = gd;
          break;
        default:
          n = Wi;
      }
      n = Hf(n, _f.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function _f(e, t) {
  if (((zi = -1), (Mi = 0), U & 6)) throw Error(M(327));
  var n = e.callbackNode;
  if (jn() && e.callbackNode !== n) return null;
  var r = $i(e, e === de ? pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ul(e, r);
  else {
    t = r;
    var i = U;
    U |= 2;
    var l = Df();
    (de !== e || pe !== t) && ((ht = null), (Gn = re() + 500), sn(e, t));
    do
      try {
        mg();
        break;
      } catch (a) {
        If(e, a);
      }
    while (!0);
    sa(),
      (sl.current = l),
      (U = i),
      le !== null ? (t = 0) : ((de = null), (pe = 0), (t = ue));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ys(e)), i !== 0 && ((r = i), (t = To(e, i)))), t === 1)
    )
      throw ((n = Hr), sn(e, 0), bt(e, r), Ne(e, re()), n);
    if (t === 6) bt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !fg(i) &&
          ((t = ul(e, r)),
          t === 2 && ((l = Ys(e)), l !== 0 && ((r = l), (t = To(e, l)))),
          t === 1))
      )
        throw ((n = Hr), sn(e, 0), bt(e, r), Ne(e, re()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          en(e, Ce, ht);
          break;
        case 3:
          if (
            (bt(e, r), (r & 130023424) === r && ((t = xa + 500 - re()), 10 < t))
          ) {
            if ($i(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              xe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = no(en.bind(null, e, Ce, ht), t);
            break;
          }
          en(e, Ce, ht);
          break;
        case 4:
          if ((bt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - qe(r);
            (l = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~l);
          }
          if (
            ((r = i),
            (r = re() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * dg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = no(en.bind(null, e, Ce, ht), r);
            break;
          }
          en(e, Ce, ht);
          break;
        case 5:
          en(e, Ce, ht);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return Ne(e, re()), e.callbackNode === n ? _f.bind(null, e) : null;
}
function To(e, t) {
  var n = Tr;
  return (
    e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256),
    (e = ul(e, t)),
    e !== 2 && ((t = Ce), (Ce = n), t !== null && Co(t)),
    e
  );
}
function Co(e) {
  Ce === null ? (Ce = e) : Ce.push.apply(Ce, e);
}
function fg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!Je(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function bt(e, t) {
  for (
    t &= ~Sa,
      t &= ~bl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - qe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Xu(e) {
  if (U & 6) throw Error(M(327));
  jn();
  var t = $i(e, 0);
  if (!(t & 1)) return Ne(e, re()), null;
  var n = ul(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ys(e);
    r !== 0 && ((t = r), (n = To(e, r)));
  }
  if (n === 1) throw ((n = Hr), sn(e, 0), bt(e, t), Ne(e, re()), n);
  if (n === 6) throw Error(M(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    en(e, Ce, ht),
    Ne(e, re()),
    null
  );
}
function Ea(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    (U = n), U === 0 && ((Gn = re() + 500), Ll && qt());
  }
}
function pn(e) {
  At !== null && At.tag === 0 && !(U & 6) && jn();
  var t = U;
  U |= 1;
  var n = He.transition,
    r = $;
  try {
    if (((He.transition = null), ($ = 1), e)) return e();
  } finally {
    ($ = r), (He.transition = n), (U = t), !(U & 6) && qt();
  }
}
function Ta() {
  (be = zn.current), q(zn);
}
function sn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Hh(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n;
      switch ((ra(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Xi();
          break;
        case 3:
          Wn(), q(Pe), q(we), fa();
          break;
        case 5:
          da(r);
          break;
        case 4:
          Wn();
          break;
        case 13:
          q(Z);
          break;
        case 19:
          q(Z);
          break;
        case 10:
          oa(r.type._context);
          break;
        case 22:
        case 23:
          Ta();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (le = e = Ut(e.current, null)),
    (pe = be = t),
    (ue = 0),
    (Hr = null),
    (Sa = bl = fn = 0),
    (Ce = Tr = null),
    nn !== null)
  ) {
    for (t = 0; t < nn.length; t++)
      if (((n = nn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var s = l.next;
          (l.next = i), (r.next = s);
        }
        n.pending = r;
      }
    nn = null;
  }
  return e;
}
function If(e, t) {
  do {
    var n = le;
    try {
      if ((sa(), (Oi.current = ll), il)) {
        for (var r = ee.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        il = !1;
      }
      if (
        ((dn = 0),
        (ce = ae = ee = null),
        (xr = !1),
        (Fr = 0),
        (wa.current = null),
        n === null || n.return === null)
      ) {
        (ue = 1), (Hr = t), (le = null);
        break;
      }
      e: {
        var l = e,
          s = n.return,
          a = n,
          o = t;
        if (
          ((t = pe),
          (a.flags |= 32768),
          o !== null && typeof o == "object" && typeof o.then == "function")
        ) {
          var u = o,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = Du(s);
          if (v !== null) {
            (v.flags &= -257),
              ju(v, s, a, l, t),
              v.mode & 1 && Iu(l, u, t),
              (t = v),
              (o = u);
            var g = t.updateQueue;
            if (g === null) {
              var y = new Set();
              y.add(o), (t.updateQueue = y);
            } else g.add(o);
            break e;
          } else {
            if (!(t & 1)) {
              Iu(l, u, t), Ca();
              break e;
            }
            o = Error(M(426));
          }
        } else if (X && a.mode & 1) {
          var S = Du(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              ju(S, s, a, l, t),
              ia($n(o, a));
            break e;
          }
        }
        (l = o = $n(o, a)),
          ue !== 4 && (ue = 2),
          Tr === null ? (Tr = [l]) : Tr.push(l),
          (l = s);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var p = wf(l, o, t);
              Ru(l, p);
              break e;
            case 1:
              a = o;
              var d = l.type,
                m = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Vt === null || !Vt.has(m))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var w = Sf(l, a, t);
                Ru(l, w);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Ff(n);
    } catch (x) {
      (t = x), le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Df() {
  var e = sl.current;
  return (sl.current = ll), e === null ? ll : e;
}
function Ca() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    de === null || (!(fn & 268435455) && !(bl & 268435455)) || bt(de, pe);
}
function ul(e, t) {
  var n = U;
  U |= 2;
  var r = Df();
  (de !== e || pe !== t) && ((ht = null), sn(e, t));
  do
    try {
      pg();
      break;
    } catch (i) {
      If(e, i);
    }
  while (!0);
  if ((sa(), (U = n), (sl.current = r), le !== null)) throw Error(M(261));
  return (de = null), (pe = 0), ue;
}
function pg() {
  for (; le !== null; ) jf(le);
}
function mg() {
  for (; le !== null && !Fm(); ) jf(le);
}
function jf(e) {
  var t = Vf(e.alternate, e, be);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ff(e) : (le = t),
    (wa.current = null);
}
function Ff(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = og(n, t)), n !== null)) {
        (n.flags &= 32767), (le = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ue = 6), (le = null);
        return;
      }
    } else if (((n = sg(n, t, be)), n !== null)) {
      le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function en(e, t, n) {
  var r = $,
    i = He.transition;
  try {
    (He.transition = null), ($ = 1), hg(e, t, n, r);
  } finally {
    (He.transition = i), ($ = r);
  }
  return null;
}
function hg(e, t, n, r) {
  do jn();
  while (At !== null);
  if (U & 6) throw Error(M(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(M(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (qm(e, l),
    e === de && ((le = de = null), (pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      yi ||
      ((yi = !0),
      Hf(Wi, function () {
        return jn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = He.transition), (He.transition = null);
    var s = $;
    $ = 1;
    var a = U;
    (U |= 4),
      (wa.current = null),
      ug(e, n),
      Mf(n, e),
      _h(eo),
      (Gi = !!Zs),
      (eo = Zs = null),
      (e.current = n),
      cg(n),
      Bm(),
      (U = a),
      ($ = s),
      (He.transition = l);
  } else e.current = n;
  if (
    (yi && ((yi = !1), (At = e), (al = i)),
    (l = e.pendingLanes),
    l === 0 && (Vt = null),
    Um(n.stateNode),
    Ne(e, re()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ol) throw ((ol = !1), (e = xo), (xo = null), e);
  return (
    al & 1 && e.tag !== 0 && jn(),
    (l = e.pendingLanes),
    l & 1 ? (e === Eo ? Cr++ : ((Cr = 0), (Eo = e))) : (Cr = 0),
    qt(),
    null
  );
}
function jn() {
  if (At !== null) {
    var e = yd(al),
      t = He.transition,
      n = $;
    try {
      if (((He.transition = null), ($ = 16 > e ? 16 : e), At === null))
        var r = !1;
      else {
        if (((e = At), (At = null), (al = 0), U & 6)) throw Error(M(331));
        var i = U;
        for (U |= 4, j = e.current; j !== null; ) {
          var l = j,
            s = l.child;
          if (j.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var o = 0; o < a.length; o++) {
                var u = a[o];
                for (j = u; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(8, c, l);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (j = f);
                  else
                    for (; j !== null; ) {
                      c = j;
                      var h = c.sibling,
                        v = c.return;
                      if ((Rf(c), c === u)) {
                        j = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = v), (j = h);
                        break;
                      }
                      j = v;
                    }
                }
              }
              var g = l.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var S = y.sibling;
                    (y.sibling = null), (y = S);
                  } while (y !== null);
                }
              }
              j = l;
            }
          }
          if (l.subtreeFlags & 2064 && s !== null) (s.return = l), (j = s);
          else
            e: for (; j !== null; ) {
              if (((l = j), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Er(9, l, l.return);
                }
              var p = l.sibling;
              if (p !== null) {
                (p.return = l.return), (j = p);
                break e;
              }
              j = l.return;
            }
        }
        var d = e.current;
        for (j = d; j !== null; ) {
          s = j;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (j = m);
          else
            e: for (s = d; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rl(9, a);
                  }
                } catch (x) {
                  ne(a, a.return, x);
                }
              if (a === s) {
                j = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (j = w);
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((U = i), qt(), ct && typeof ct.onPostCommitFiberRoot == "function")
        )
          try {
            ct.onPostCommitFiberRoot(El, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ($ = n), (He.transition = t);
    }
  }
  return !1;
}
function Qu(e, t, n) {
  (t = $n(n, t)),
    (t = wf(e, t, 1)),
    (e = Bt(e, t, 1)),
    (t = xe()),
    e !== null && (Kr(e, 1, t), Ne(e, t));
}
function ne(e, t, n) {
  if (e.tag === 3) Qu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Qu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Vt === null || !Vt.has(r)))
        ) {
          (e = $n(n, e)),
            (e = Sf(t, e, 1)),
            (t = Bt(t, e, 1)),
            (e = xe()),
            t !== null && (Kr(t, 1, e), Ne(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function gg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (pe & n) === n &&
      (ue === 4 || (ue === 3 && (pe & 130023424) === pe && 500 > re() - xa)
        ? sn(e, 0)
        : (Sa |= n)),
    Ne(e, t);
}
function Bf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ai), (ai <<= 1), !(ai & 130023424) && (ai = 4194304))
      : (t = 1));
  var n = xe();
  (e = Tt(e, t)), e !== null && (Kr(e, t, n), Ne(e, n));
}
function vg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Bf(e, n);
}
function yg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  r !== null && r.delete(t), Bf(e, n);
}
var Vf;
Vf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current) ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ke = !1), lg(e, t, n);
      ke = !!(e.flags & 131072);
    }
  else (ke = !1), X && t.flags & 1048576 && Wd(t, Zi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      bi(e, t), (e = t.pendingProps);
      var i = Vn(t, we.current);
      Dn(t, n), (i = ma(null, t, r, e, i, n));
      var l = ha();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Le(r) ? ((l = !0), Qi(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ua(t),
            (i.updater = Ol),
            (t.stateNode = i),
            (i._reactInternals = t),
            uo(t, r, e, n),
            (t = po(null, t, r, !0, l, n)))
          : ((t.tag = 0), X && l && na(t), Se(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (bi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Sg(r)),
          (e = Ge(r, e)),
          i)
        ) {
          case 0:
            t = fo(null, t, r, e, n);
            break e;
          case 1:
            t = Vu(null, t, r, e, n);
            break e;
          case 11:
            t = Fu(null, t, r, e, n);
            break e;
          case 14:
            t = Bu(null, t, r, Ge(r.type, e), n);
            break e;
        }
        throw Error(M(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        fo(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        Vu(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Cf(t), e === null)) throw Error(M(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          Xd(e, t),
          nl(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = $n(Error(M(423)), t)), (t = Hu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = $n(Error(M(424)), t)), (t = Hu(e, t, r, n, i));
            break e;
          } else
            for (
              Me = Ft(t.stateNode.containerInfo.firstChild),
                Ae = t,
                X = !0,
                Ye = null,
                n = Yd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Hn(), r === i)) {
            t = Ct(e, t, n);
            break e;
          }
          Se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Qd(t),
        e === null && so(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (s = i.children),
        to(r, i) ? (s = null) : l !== null && to(r, l) && (t.flags |= 32),
        Tf(e, t),
        Se(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && so(t), null;
    case 13:
      return kf(e, t, n);
    case 4:
      return (
        ca(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Un(t, null, r, n)) : Se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        Fu(e, t, r, i, n)
      );
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (s = i.value),
          K(el, r._currentValue),
          (r._currentValue = s),
          l !== null)
        )
          if (Je(l.value, s)) {
            if (l.children === i.children && !Pe.current) {
              t = Ct(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                s = l.child;
                for (var o = a.firstContext; o !== null; ) {
                  if (o.context === r) {
                    if (l.tag === 1) {
                      (o = wt(-1, n & -n)), (o.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (o.next = o)
                          : ((o.next = c.next), (c.next = o)),
                          (u.pending = o);
                      }
                    }
                    (l.lanes |= n),
                      (o = l.alternate),
                      o !== null && (o.lanes |= n),
                      oo(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  o = o.next;
                }
              } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((s = l.return), s === null)) throw Error(M(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  oo(s, n, t),
                  (s = l.sibling);
              } else s = l.child;
              if (s !== null) s.return = l;
              else
                for (s = l; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((l = s.sibling), l !== null)) {
                    (l.return = s.return), (s = l);
                    break;
                  }
                  s = s.return;
                }
              l = s;
            }
        Se(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Dn(t, n),
        (i = Ue(i)),
        (r = r(i)),
        (t.flags |= 1),
        Se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ge(r, t.pendingProps)),
        (i = Ge(r.type, i)),
        Bu(e, t, r, i, n)
      );
    case 15:
      return xf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        bi(e, t),
        (t.tag = 1),
        Le(r) ? ((e = !0), Qi(t)) : (e = !1),
        Dn(t, n),
        yf(t, r, i),
        uo(t, r, i, n),
        po(null, t, r, !0, e, n)
      );
    case 19:
      return Pf(e, t, n);
    case 22:
      return Ef(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function Hf(e, t) {
  return md(e, t);
}
function wg(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ve(e, t, n, r) {
  return new wg(e, t, n, r);
}
function ka(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Sg(e) {
  if (typeof e == "function") return ka(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Wo)) return 11;
    if (e === $o) return 14;
  }
  return 2;
}
function Ut(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ve(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ai(e, t, n, r, i, l) {
  var s = 2;
  if (((r = e), typeof e == "function")) ka(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case En:
        return on(n.children, i, l, t);
      case Uo:
        (s = 8), (i |= 8);
        break;
      case Ms:
        return (
          (e = Ve(12, n, t, i | 2)), (e.elementType = Ms), (e.lanes = l), e
        );
      case As:
        return (e = Ve(13, n, t, i)), (e.elementType = As), (e.lanes = l), e;
      case _s:
        return (e = Ve(19, n, t, i)), (e.elementType = _s), (e.lanes = l), e;
      case Qc:
        return zl(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case qc:
              s = 10;
              break e;
            case Xc:
              s = 9;
              break e;
            case Wo:
              s = 11;
              break e;
            case $o:
              s = 14;
              break e;
            case Nt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(M(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ve(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function on(e, t, n, r) {
  return (e = Ve(7, e, r, t)), (e.lanes = n), e;
}
function zl(e, t, n, r) {
  return (
    (e = Ve(22, e, r, t)),
    (e.elementType = Qc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function gs(e, t, n) {
  return (e = Ve(6, e, null, t)), (e.lanes = n), e;
}
function vs(e, t, n) {
  return (
    (t = Ve(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function xg(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ql(0)),
    (this.expirationTimes = Ql(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ql(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Pa(e, t, n, r, i, l, s, a, o) {
  return (
    (e = new xg(e, t, n, a, o)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Ve(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ua(l),
    e
  );
}
function Eg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: xn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Uf(e) {
  if (!e) return $t;
  e = e._reactInternals;
  e: {
    if (vn(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Le(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Le(n)) return Hd(e, n, t);
  }
  return t;
}
function Wf(e, t, n, r, i, l, s, a, o) {
  return (
    (e = Pa(n, r, !0, e, i, l, s, a, o)),
    (e.context = Uf(null)),
    (n = e.current),
    (r = xe()),
    (i = Ht(n)),
    (l = wt(r, i)),
    (l.callback = t ?? null),
    Bt(n, l, i),
    (e.current.lanes = i),
    Kr(e, i, r),
    Ne(e, r),
    e
  );
}
function Ml(e, t, n, r) {
  var i = t.current,
    l = xe(),
    s = Ht(i);
  return (
    (n = Uf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = wt(l, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Bt(i, t, s)),
    e !== null && (Xe(e, i, s, l), Ni(e, i, s)),
    s
  );
}
function cl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ju(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function La(e, t) {
  Ju(e, t), (e = e.alternate) && Ju(e, t);
}
function Tg() {
  return null;
}
var $f =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Na(e) {
  this._internalRoot = e;
}
Al.prototype.render = Na.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  Ml(e, t, null, null);
};
Al.prototype.unmount = Na.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    pn(function () {
      Ml(null, e, null, null);
    }),
      (t[Et] = null);
  }
};
function Al(e) {
  this._internalRoot = e;
}
Al.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = xd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++);
    Rt.splice(n, 0, e), n === 0 && Td(e);
  }
};
function Oa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _l(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Zu() {}
function Cg(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = cl(s);
        l.call(u);
      };
    }
    var s = Wf(t, r, e, 0, null, !1, !1, "", Zu);
    return (
      (e._reactRootContainer = s),
      (e[Et] = s.current),
      Ar(e.nodeType === 8 ? e.parentNode : e),
      pn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = cl(o);
      a.call(u);
    };
  }
  var o = Pa(e, 0, !1, null, null, !1, !1, "", Zu);
  return (
    (e._reactRootContainer = o),
    (e[Et] = o.current),
    Ar(e.nodeType === 8 ? e.parentNode : e),
    pn(function () {
      Ml(t, o, n, r);
    }),
    o
  );
}
function Il(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var s = l;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var o = cl(s);
        a.call(o);
      };
    }
    Ml(t, s, e, i);
  } else s = Cg(n, t, e, i, r);
  return cl(s);
}
wd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = mr(t.pendingLanes);
        n !== 0 &&
          (Yo(t, n | 1), Ne(t, re()), !(U & 6) && ((Gn = re() + 500), qt()));
      }
      break;
    case 13:
      pn(function () {
        var r = Tt(e, 1);
        if (r !== null) {
          var i = xe();
          Xe(r, e, 1, i);
        }
      }),
        La(e, 1);
  }
};
qo = function (e) {
  if (e.tag === 13) {
    var t = Tt(e, 134217728);
    if (t !== null) {
      var n = xe();
      Xe(t, e, 134217728, n);
    }
    La(e, 134217728);
  }
};
Sd = function (e) {
  if (e.tag === 13) {
    var t = Ht(e),
      n = Tt(e, t);
    if (n !== null) {
      var r = xe();
      Xe(n, e, t, r);
    }
    La(e, t);
  }
};
xd = function () {
  return $;
};
Ed = function (e, t) {
  var n = $;
  try {
    return ($ = e), t();
  } finally {
    $ = n;
  }
};
$s = function (e, t, n) {
  switch (t) {
    case "input":
      if ((js(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Pl(r);
            if (!i) throw Error(M(90));
            Zc(r), js(r, i);
          }
        }
      }
      break;
    case "textarea":
      td(e, n);
      break;
    case "select":
      (t = n.value), t != null && Mn(e, !!n.multiple, t, !1);
  }
};
ad = Ea;
ud = pn;
var kg = { usingClientEntryPoint: !1, Events: [qr, Pn, Pl, sd, od, Ea] },
  ar = {
    findFiberByHostInstance: tn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Pg = {
    bundleType: ar.bundleType,
    version: ar.version,
    rendererPackageName: ar.rendererPackageName,
    rendererConfig: ar.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: kt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = fd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ar.findFiberByHostInstance || Tg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wi.isDisabled && wi.supportsFiber)
    try {
      (El = wi.inject(Pg)), (ct = wi);
    } catch {}
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kg;
De.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Oa(t)) throw Error(M(200));
  return Eg(e, t, null, n);
};
De.createRoot = function (e, t) {
  if (!Oa(e)) throw Error(M(299));
  var n = !1,
    r = "",
    i = $f;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Pa(e, 1, !1, null, null, n, !1, r, i)),
    (e[Et] = t.current),
    Ar(e.nodeType === 8 ? e.parentNode : e),
    new Na(t)
  );
};
De.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(M(188))
      : ((e = Object.keys(e).join(",")), Error(M(268, e)));
  return (e = fd(t)), (e = e === null ? null : e.stateNode), e;
};
De.flushSync = function (e) {
  return pn(e);
};
De.hydrate = function (e, t, n) {
  if (!_l(t)) throw Error(M(200));
  return Il(null, e, t, !0, n);
};
De.hydrateRoot = function (e, t, n) {
  if (!Oa(e)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    s = $f;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Wf(t, null, e, 1, n ?? null, i, !1, l, s)),
    (e[Et] = t.current),
    Ar(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Al(t);
};
De.render = function (e, t, n) {
  if (!_l(t)) throw Error(M(200));
  return Il(null, e, t, !1, n);
};
De.unmountComponentAtNode = function (e) {
  if (!_l(e)) throw Error(M(40));
  return e._reactRootContainer
    ? (pn(function () {
        Il(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Et] = null);
        });
      }),
      !0)
    : !1;
};
De.unstable_batchedUpdates = Ea;
De.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!_l(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return Il(e, t, n, !1, r);
};
De.version = "18.3.1-next-f1338f8080-20240426";
function Gf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gf);
    } catch (e) {
      console.error(e);
    }
}
Gf(), ($c.exports = De);
var Lg = $c.exports,
  Kf,
  ec = Lg;
(Kf = ec.createRoot), ec.hydrateRoot;
function Ng() {
  return E.jsxs("div", {
    className:
      "h-12 bg-black centre text-[#FAFAFA] text-center font-light text-sm gap-2",
    children: [
      E.jsx("p", {
        children:
          "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
      }),
      E.jsx("span", {
        className: "font-semibold underline",
        children: " ShopNow",
      }),
    ],
  });
}
const Og = "/assets/text-CNYjKUaN.svg",
  Rg = "/assets/truck-BouMjYCS.svg";
var Yf = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  tc = G.createContext && G.createContext(Yf),
  bg = ["attr", "size", "title"];
function zg(e, t) {
  if (e == null) return {};
  var n = Mg(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (i = 0; i < l.length; i++)
      (r = l[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Mg(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function dl() {
  return (
    (dl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    dl.apply(this, arguments)
  );
}
function nc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function fl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? nc(Object(n), !0).forEach(function (r) {
          Ag(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : nc(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function Ag(e, t, n) {
  return (
    (t = _g(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function _g(e) {
  var t = Ig(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ig(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qf(e) {
  return (
    e &&
    e.map((t, n) => G.createElement(t.tag, fl({ key: n }, t.attr), qf(t.child)))
  );
}
function et(e) {
  return (t) =>
    G.createElement(Dg, dl({ attr: fl({}, e.attr) }, t), qf(e.child));
}
function Dg(e) {
  var t = (n) => {
    var { attr: r, size: i, title: l } = e,
      s = zg(e, bg),
      a = i || n.size || "1em",
      o;
    return (
      n.className && (o = n.className),
      e.className && (o = (o ? o + " " : "") + e.className),
      G.createElement(
        "svg",
        dl(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: o,
            style: fl(fl({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        l && G.createElement("title", null, l),
        e.children,
      )
    );
  };
  return tc !== void 0
    ? G.createElement(tc.Consumer, null, (n) => t(n))
    : t(Yf);
}
function jg(e) {
  return et({
    tag: "svg",
    attr: {
      version: "1.1",
      id: "search",
      x: "0px",
      y: "0px",
      viewBox: "0 0 24 24",
      style: "enable-background:new 0 0 24 24;",
    },
    child: [
      {
        tag: "g",
        attr: {},
        child: [
          {
            tag: "path",
            attr: {
              d: `M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z`,
            },
            child: [],
          },
        ],
      },
    ],
  })(e);
}
function Fg(e) {
  return et({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "48",
          d: "m112 244 144-144 144 144M256 120v292",
        },
        child: [],
      },
    ],
  })(e);
}
function Bg(e) {
  return et({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeMiterlimit: "10",
          strokeWidth: "32",
          d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M320 320 192 192m0 128 128-128",
        },
        child: [],
      },
    ],
  })(e);
}
function Vg(e) {
  return et({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          strokeWidth: "48",
          d: "M88 152h336M88 256h336M88 360h336",
        },
        child: [],
      },
    ],
  })(e);
}
function Hg(e) {
  return et({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z",
        },
        child: [],
      },
    ],
  })(e);
}
var Ra = {};
Object.defineProperty(Ra, "__esModule", { value: !0 });
Ra.parse = qg;
Ra.serialize = Xg;
const Ug = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
  Wg = /^[\u0021-\u003A\u003C-\u007E]*$/,
  $g =
    /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  Gg = /^[\u0020-\u003A\u003D-\u007E]*$/,
  Kg = Object.prototype.toString,
  Yg = (() => {
    const e = function () {};
    return (e.prototype = Object.create(null)), e;
  })();
function qg(e, t) {
  const n = new Yg(),
    r = e.length;
  if (r < 2) return n;
  const i = (t == null ? void 0 : t.decode) || Qg;
  let l = 0;
  do {
    const s = e.indexOf("=", l);
    if (s === -1) break;
    const a = e.indexOf(";", l),
      o = a === -1 ? r : a;
    if (s > o) {
      l = e.lastIndexOf(";", s - 1) + 1;
      continue;
    }
    const u = rc(e, l, s),
      c = ic(e, s, u),
      f = e.slice(u, c);
    if (n[f] === void 0) {
      let h = rc(e, s + 1, o),
        v = ic(e, o, h);
      const g = i(e.slice(h, v));
      n[f] = g;
    }
    l = o + 1;
  } while (l < r);
  return n;
}
function rc(e, t, n) {
  do {
    const r = e.charCodeAt(t);
    if (r !== 32 && r !== 9) return t;
  } while (++t < n);
  return n;
}
function ic(e, t, n) {
  for (; t > n; ) {
    const r = e.charCodeAt(--t);
    if (r !== 32 && r !== 9) return t + 1;
  }
  return n;
}
function Xg(e, t, n) {
  const r = (n == null ? void 0 : n.encode) || encodeURIComponent;
  if (!Ug.test(e)) throw new TypeError(`argument name is invalid: ${e}`);
  const i = r(t);
  if (!Wg.test(i)) throw new TypeError(`argument val is invalid: ${t}`);
  let l = e + "=" + i;
  if (!n) return l;
  if (n.maxAge !== void 0) {
    if (!Number.isInteger(n.maxAge))
      throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
    l += "; Max-Age=" + n.maxAge;
  }
  if (n.domain) {
    if (!$g.test(n.domain))
      throw new TypeError(`option domain is invalid: ${n.domain}`);
    l += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!Gg.test(n.path))
      throw new TypeError(`option path is invalid: ${n.path}`);
    l += "; Path=" + n.path;
  }
  if (n.expires) {
    if (!Jg(n.expires) || !Number.isFinite(n.expires.valueOf()))
      throw new TypeError(`option expires is invalid: ${n.expires}`);
    l += "; Expires=" + n.expires.toUTCString();
  }
  if (
    (n.httpOnly && (l += "; HttpOnly"),
    n.secure && (l += "; Secure"),
    n.partitioned && (l += "; Partitioned"),
    n.priority)
  )
    switch (typeof n.priority == "string" ? n.priority.toLowerCase() : void 0) {
      case "low":
        l += "; Priority=Low";
        break;
      case "medium":
        l += "; Priority=Medium";
        break;
      case "high":
        l += "; Priority=High";
        break;
      default:
        throw new TypeError(`option priority is invalid: ${n.priority}`);
    }
  if (n.sameSite)
    switch (
      typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite
    ) {
      case !0:
      case "strict":
        l += "; SameSite=Strict";
        break;
      case "lax":
        l += "; SameSite=Lax";
        break;
      case "none":
        l += "; SameSite=None";
        break;
      default:
        throw new TypeError(`option sameSite is invalid: ${n.sameSite}`);
    }
  return l;
}
function Qg(e) {
  if (e.indexOf("%") === -1) return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function Jg(e) {
  return Kg.call(e) === "[object Date]";
}
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var lc = "popstate";
function Zg(e = {}) {
  function t(r, i) {
    let { pathname: l, search: s, hash: a } = r.location;
    return ko(
      "",
      { pathname: l, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default",
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Ur(i);
  }
  return tv(t, n, null, e);
}
function Q(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ze(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ev() {
  return Math.random().toString(36).substring(2, 10);
}
function sc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ko(e, t, n = null, r) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? Xn(t) : t),
    state: n,
    key: (t && t.key) || r || ev(),
  };
}
function Ur({ pathname: e = "/", search: t = "", hash: n = "" }) {
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
  );
}
function Xn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function tv(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: l = !1 } = r,
    s = i.history,
    a = "POP",
    o = null,
    u = c();
  u == null && ((u = 0), s.replaceState({ ...s.state, idx: u }, ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = "POP";
    let S = c(),
      p = S == null ? null : S - u;
    (u = S), o && o({ action: a, location: y.location, delta: p });
  }
  function h(S, p) {
    a = "PUSH";
    let d = ko(y.location, S, p);
    u = c() + 1;
    let m = sc(d, u),
      w = y.createHref(d);
    try {
      s.pushState(m, "", w);
    } catch (x) {
      if (x instanceof DOMException && x.name === "DataCloneError") throw x;
      i.location.assign(w);
    }
    l && o && o({ action: a, location: y.location, delta: 1 });
  }
  function v(S, p) {
    a = "REPLACE";
    let d = ko(y.location, S, p);
    u = c();
    let m = sc(d, u),
      w = y.createHref(d);
    s.replaceState(m, "", w),
      l && o && o({ action: a, location: y.location, delta: 0 });
  }
  function g(S) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      d = typeof S == "string" ? S : Ur(S);
    return (
      (d = d.replace(/ $/, "%20")),
      Q(
        p,
        `No window.location.(origin|href) available to create URL for href: ${d}`,
      ),
      new URL(d, p)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(S) {
      if (o) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(lc, f),
        (o = S),
        () => {
          i.removeEventListener(lc, f), (o = null);
        }
      );
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: g,
    encodeLocation(S) {
      let p = g(S);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: h,
    replace: v,
    go(S) {
      return s.go(S);
    },
  };
  return y;
}
function Xf(e, t, n = "/") {
  return nv(e, t, n, !1);
}
function nv(e, t, n, r) {
  let i = typeof t == "string" ? Xn(t) : t,
    l = Gt(i.pathname || "/", n);
  if (l == null) return null;
  let s = Qf(e);
  rv(s);
  let a = null;
  for (let o = 0; a == null && o < s.length; ++o) {
    let u = mv(l);
    a = fv(s[o], u, r);
  }
  return a;
}
function Qf(e, t = [], n = [], r = "") {
  let i = (l, s, a) => {
    let o = {
      relativePath: a === void 0 ? l.path || "" : a,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: s,
      route: l,
    };
    o.relativePath.startsWith("/") &&
      (Q(
        o.relativePath.startsWith(r),
        `Absolute route path "${o.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (o.relativePath = o.relativePath.slice(r.length)));
    let u = St([r, o.relativePath]),
      c = n.concat(o);
    l.children &&
      l.children.length > 0 &&
      (Q(
        l.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${u}".`,
      ),
      Qf(l.children, t, c, u)),
      !(l.path == null && !l.index) &&
        t.push({ path: u, score: cv(u, l.index), routesMeta: c });
  };
  return (
    e.forEach((l, s) => {
      var a;
      if (l.path === "" || !((a = l.path) != null && a.includes("?"))) i(l, s);
      else for (let o of Jf(l.path)) i(l, s, o);
    }),
    t
  );
}
function Jf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [l, ""] : [l];
  let s = Jf(r.join("/")),
    a = [];
  return (
    a.push(...s.map((o) => (o === "" ? l : [l, o].join("/")))),
    i && a.push(...s),
    a.map((o) => (e.startsWith("/") && o === "" ? "/" : o))
  );
}
function rv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : dv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
var iv = /^:[\w-]+$/,
  lv = 3,
  sv = 2,
  ov = 1,
  av = 10,
  uv = -2,
  oc = (e) => e === "*";
function cv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(oc) && (r += uv),
    t && (r += sv),
    n
      .filter((i) => !oc(i))
      .reduce((i, l) => i + (iv.test(l) ? lv : l === "" ? ov : av), r)
  );
}
function dv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function fv(e, t, n = !1) {
  let { routesMeta: r } = e,
    i = {},
    l = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let o = r[a],
      u = a === r.length - 1,
      c = l === "/" ? t : t.slice(l.length) || "/",
      f = pl(
        { path: o.relativePath, caseSensitive: o.caseSensitive, end: u },
        c,
      ),
      h = o.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = pl(
          { path: o.relativePath, caseSensitive: o.caseSensitive, end: !1 },
          c,
        )),
      !f)
    )
      return null;
    Object.assign(i, f.params),
      s.push({
        params: i,
        pathname: St([l, f.pathname]),
        pathnameBase: yv(St([l, f.pathnameBase])),
        route: h,
      }),
      f.pathnameBase !== "/" && (l = St([l, f.pathnameBase]));
  }
  return s;
}
function pl(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = pv(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let l = i[0],
    s = l.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, { paramName: c, isOptional: f }, h) => {
      if (c === "*") {
        let g = a[h] || "";
        s = l.slice(0, l.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[h];
      return (
        f && !v ? (u[c] = void 0) : (u[c] = (v || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: l,
    pathnameBase: s,
    pattern: e,
  };
}
function pv(e, t = !1, n = !0) {
  Ze(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`,
  );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, o) => (
            r.push({ paramName: a, isOptional: o != null }),
            o ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (i += "\\/*$")
        : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function mv(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Ze(
        !1,
        `The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
      ),
      e
    );
  }
}
function Gt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function hv(e, t = "/") {
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Xn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : gv(n, t)) : t,
    search: wv(r),
    hash: Sv(i),
  };
}
function gv(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ys(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function vv(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function ba(e) {
  let t = vv(e);
  return t.map((n, r) => (r === t.length - 1 ? n.pathname : n.pathnameBase));
}
function za(e, t, n, r = !1) {
  let i;
  typeof e == "string"
    ? (i = Xn(e))
    : ((i = { ...e }),
      Q(
        !i.pathname || !i.pathname.includes("?"),
        ys("?", "pathname", "search", i),
      ),
      Q(
        !i.pathname || !i.pathname.includes("#"),
        ys("#", "pathname", "hash", i),
      ),
      Q(!i.search || !i.search.includes("#"), ys("#", "search", "hash", i)));
  let l = e === "" || i.pathname === "",
    s = l ? "/" : i.pathname,
    a;
  if (s == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let h = s.split("/");
      for (; h[0] === ".."; ) h.shift(), (f -= 1);
      i.pathname = h.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let o = hv(i, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (l || s === ".") && n.endsWith("/");
  return !o.pathname.endsWith("/") && (u || c) && (o.pathname += "/"), o;
}
var St = (e) => e.join("/").replace(/\/\/+/g, "/"),
  yv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  wv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Sv = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function xv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var Zf = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Zf);
var Ev = ["GET", ...Zf];
new Set(Ev);
var Qn = T.createContext(null);
Qn.displayName = "DataRouter";
var Dl = T.createContext(null);
Dl.displayName = "DataRouterState";
var ep = T.createContext({ isTransitioning: !1 });
ep.displayName = "ViewTransition";
var Tv = T.createContext(new Map());
Tv.displayName = "Fetchers";
var Cv = T.createContext(null);
Cv.displayName = "Await";
var tt = T.createContext(null);
tt.displayName = "Navigation";
var Qr = T.createContext(null);
Qr.displayName = "Location";
var ft = T.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ft.displayName = "Route";
var Ma = T.createContext(null);
Ma.displayName = "RouteError";
function kv(e, { relative: t } = {}) {
  Q(Jn(), "useHref() may be used only in the context of a <Router> component.");
  let { basename: n, navigator: r } = T.useContext(tt),
    { hash: i, pathname: l, search: s } = Jr(e, { relative: t }),
    a = l;
  return (
    n !== "/" && (a = l === "/" ? n : St([n, l])),
    r.createHref({ pathname: a, search: s, hash: i })
  );
}
function Jn() {
  return T.useContext(Qr) != null;
}
function Xt() {
  return (
    Q(
      Jn(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    T.useContext(Qr).location
  );
}
var tp =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function np(e) {
  T.useContext(tt).static || T.useLayoutEffect(e);
}
function rp() {
  let { isDataRoute: e } = T.useContext(ft);
  return e ? jv() : Pv();
}
function Pv() {
  Q(
    Jn(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let e = T.useContext(Qn),
    { basename: t, navigator: n } = T.useContext(tt),
    { matches: r } = T.useContext(ft),
    { pathname: i } = Xt(),
    l = JSON.stringify(ba(r)),
    s = T.useRef(!1);
  return (
    np(() => {
      s.current = !0;
    }),
    T.useCallback(
      (o, u = {}) => {
        if ((Ze(s.current, tp), !s.current)) return;
        if (typeof o == "number") {
          n.go(o);
          return;
        }
        let c = za(o, JSON.parse(l), i, u.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : St([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [t, n, l, i, e],
    )
  );
}
T.createContext(null);
function Jr(e, { relative: t } = {}) {
  let { matches: n } = T.useContext(ft),
    { pathname: r } = Xt(),
    i = JSON.stringify(ba(n));
  return T.useMemo(() => za(e, JSON.parse(i), r, t === "path"), [e, i, r, t]);
}
function Lv(e, t) {
  return ip(e, t);
}
function ip(e, t, n, r) {
  var p;
  Q(
    Jn(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: i } = T.useContext(tt),
    { matches: l } = T.useContext(ft),
    s = l[l.length - 1],
    a = s ? s.params : {},
    o = s ? s.pathname : "/",
    u = s ? s.pathnameBase : "/",
    c = s && s.route;
  {
    let d = (c && c.path) || "";
    lp(
      o,
      !c || d.endsWith("*") || d.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${d}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${d}"> to <Route path="${d === "/" ? "*" : `${d}/*`}">.`,
    );
  }
  let f = Xt(),
    h;
  if (t) {
    let d = typeof t == "string" ? Xn(t) : t;
    Q(
      u === "/" || ((p = d.pathname) == null ? void 0 : p.startsWith(u)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${d.pathname}" was given in the \`location\` prop.`,
    ),
      (h = d);
  } else h = f;
  let v = h.pathname || "/",
    g = v;
  if (u !== "/") {
    let d = u.replace(/^\//, "").split("/");
    g = "/" + v.replace(/^\//, "").split("/").slice(d.length).join("/");
  }
  let y = Xf(e, { pathname: g });
  Ze(
    c || y != null,
    `No routes matched location "${h.pathname}${h.search}${h.hash}" `,
  ),
    Ze(
      y == null ||
        y[y.length - 1].route.element !== void 0 ||
        y[y.length - 1].route.Component !== void 0 ||
        y[y.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    );
  let S = zv(
    y &&
      y.map((d) =>
        Object.assign({}, d, {
          params: Object.assign({}, a, d.params),
          pathname: St([
            u,
            i.encodeLocation
              ? i.encodeLocation(d.pathname).pathname
              : d.pathname,
          ]),
          pathnameBase:
            d.pathnameBase === "/"
              ? u
              : St([
                  u,
                  i.encodeLocation
                    ? i.encodeLocation(d.pathnameBase).pathname
                    : d.pathnameBase,
                ]),
        }),
      ),
    l,
    n,
    r,
  );
  return t && S
    ? T.createElement(
        Qr.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...h,
            },
            navigationType: "POP",
          },
        },
        S,
      )
    : S;
}
function Nv() {
  let e = Dv(),
    t = xv(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = "rgba(200,200,200, 0.5)",
    i = { padding: "0.5rem", backgroundColor: r },
    l = { padding: "2px 4px", backgroundColor: r },
    s = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (s = T.createElement(
      T.Fragment,
      null,
      T.createElement("p", null, "💿 Hey developer 👋"),
      T.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        T.createElement("code", { style: l }, "ErrorBoundary"),
        " or",
        " ",
        T.createElement("code", { style: l }, "errorElement"),
        " prop on your route.",
      ),
    )),
    T.createElement(
      T.Fragment,
      null,
      T.createElement("h2", null, "Unexpected Application Error!"),
      T.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? T.createElement("pre", { style: i }, n) : null,
      s,
    )
  );
}
var Ov = T.createElement(Nv, null),
  Rv = class extends T.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t,
      );
    }
    render() {
      return this.state.error !== void 0
        ? T.createElement(
            ft.Provider,
            { value: this.props.routeContext },
            T.createElement(Ma.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function bv({ routeContext: e, match: t, children: n }) {
  let r = T.useContext(Qn);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    T.createElement(ft.Provider, { value: e }, n)
  );
}
function zv(e, t = [], n = null, r = null) {
  if (e == null) {
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else return null;
  }
  let i = e,
    l = n == null ? void 0 : n.errors;
  if (l != null) {
    let o = i.findIndex(
      (u) => u.route.id && (l == null ? void 0 : l[u.route.id]) !== void 0,
    );
    Q(
      o >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`,
    ),
      (i = i.slice(0, Math.min(i.length, o + 1)));
  }
  let s = !1,
    a = -1;
  if (n)
    for (let o = 0; o < i.length; o++) {
      let u = i[o];
      if (
        ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (a = o),
        u.route.id)
      ) {
        let { loaderData: c, errors: f } = n,
          h =
            u.route.loader &&
            !c.hasOwnProperty(u.route.id) &&
            (!f || f[u.route.id] === void 0);
        if (u.route.lazy || h) {
          (s = !0), a >= 0 ? (i = i.slice(0, a + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((o, u, c) => {
    let f,
      h = !1,
      v = null,
      g = null;
    n &&
      ((f = l && u.route.id ? l[u.route.id] : void 0),
      (v = u.route.errorElement || Ov),
      s &&
        (a < 0 && c === 0
          ? (lp(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (h = !0),
            (g = null))
          : a === c &&
            ((h = !0), (g = u.route.hydrateFallbackElement || null))));
    let y = t.concat(i.slice(0, c + 1)),
      S = () => {
        let p;
        return (
          f
            ? (p = v)
            : h
              ? (p = g)
              : u.route.Component
                ? (p = T.createElement(u.route.Component, null))
                : u.route.element
                  ? (p = u.route.element)
                  : (p = o),
          T.createElement(bv, {
            match: u,
            routeContext: { outlet: o, matches: y, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (u.route.ErrorBoundary || u.route.errorElement || c === 0)
      ? T.createElement(Rv, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: f,
          children: S(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : S();
  }, null);
}
function Aa(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Mv(e) {
  let t = T.useContext(Qn);
  return Q(t, Aa(e)), t;
}
function Av(e) {
  let t = T.useContext(Dl);
  return Q(t, Aa(e)), t;
}
function _v(e) {
  let t = T.useContext(ft);
  return Q(t, Aa(e)), t;
}
function _a(e) {
  let t = _v(e),
    n = t.matches[t.matches.length - 1];
  return (
    Q(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function Iv() {
  return _a("useRouteId");
}
function Dv() {
  var r;
  let e = T.useContext(Ma),
    t = Av("useRouteError"),
    n = _a("useRouteError");
  return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n];
}
function jv() {
  let { router: e } = Mv("useNavigate"),
    t = _a("useNavigate"),
    n = T.useRef(!1);
  return (
    np(() => {
      n.current = !0;
    }),
    T.useCallback(
      async (i, l = {}) => {
        Ze(n.current, tp),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : await e.navigate(i, { fromRouteId: t, ...l }));
      },
      [e, t],
    )
  );
}
var ac = {};
function lp(e, t, n) {
  !t && !ac[e] && ((ac[e] = !0), Ze(!1, n));
}
T.memo(Fv);
function Fv({ routes: e, future: t, state: n }) {
  return ip(e, void 0, n, t);
}
function uc({ to: e, replace: t, state: n, relative: r }) {
  Q(
    Jn(),
    "<Navigate> may be used only in the context of a <Router> component.",
  );
  let { static: i } = T.useContext(tt);
  Ze(
    !i,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.",
  );
  let { matches: l } = T.useContext(ft),
    { pathname: s } = Xt(),
    a = rp(),
    o = za(e, ba(l), s, r === "path"),
    u = JSON.stringify(o);
  return (
    T.useEffect(() => {
      a(JSON.parse(u), { replace: t, state: n, relative: r });
    }, [a, u, r, t, n]),
    null
  );
}
function lt(e) {
  Q(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function Bv({
  basename: e = "/",
  children: t = null,
  location: n,
  navigationType: r = "POP",
  navigator: i,
  static: l = !1,
}) {
  Q(
    !Jn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let s = e.replace(/^\/*/, "/"),
    a = T.useMemo(
      () => ({ basename: s, navigator: i, static: l, future: {} }),
      [s, i, l],
    );
  typeof n == "string" && (n = Xn(n));
  let {
      pathname: o = "/",
      search: u = "",
      hash: c = "",
      state: f = null,
      key: h = "default",
    } = n,
    v = T.useMemo(() => {
      let g = Gt(o, s);
      return g == null
        ? null
        : {
            location: { pathname: g, search: u, hash: c, state: f, key: h },
            navigationType: r,
          };
    }, [s, o, u, c, f, h, r]);
  return (
    Ze(
      v != null,
      `<Router basename="${s}"> is not able to match the URL "${o}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    v == null
      ? null
      : T.createElement(
          tt.Provider,
          { value: a },
          T.createElement(Qr.Provider, { children: t, value: v }),
        )
  );
}
function Vv({ children: e, location: t }) {
  return Lv(Po(e), t);
}
function Po(e, t = []) {
  let n = [];
  return (
    T.Children.forEach(e, (r, i) => {
      if (!T.isValidElement(r)) return;
      let l = [...t, i];
      if (r.type === T.Fragment) {
        n.push.apply(n, Po(r.props.children, l));
        return;
      }
      Q(
        r.type === lt,
        `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Q(
          !r.props.index || !r.props.children,
          "An index route cannot have child routes.",
        );
      let s = {
        id: r.props.id || l.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.hasErrorBoundary === !0 ||
          r.props.ErrorBoundary != null ||
          r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Po(r.props.children, l)), n.push(s);
    }),
    n
  );
}
var _i = "get",
  Ii = "application/x-www-form-urlencoded";
function jl(e) {
  return e != null && typeof e.tagName == "string";
}
function Hv(e) {
  return jl(e) && e.tagName.toLowerCase() === "button";
}
function Uv(e) {
  return jl(e) && e.tagName.toLowerCase() === "form";
}
function Wv(e) {
  return jl(e) && e.tagName.toLowerCase() === "input";
}
function $v(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Gv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !$v(e);
}
var Si = null;
function Kv() {
  if (Si === null)
    try {
      new FormData(document.createElement("form"), 0), (Si = !1);
    } catch {
      Si = !0;
    }
  return Si;
}
var Yv = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function ws(e) {
  return e != null && !Yv.has(e)
    ? (Ze(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ii}"`,
      ),
      null)
    : e;
}
function qv(e, t) {
  let n, r, i, l, s;
  if (Uv(e)) {
    let a = e.getAttribute("action");
    (r = a ? Gt(a, t) : null),
      (n = e.getAttribute("method") || _i),
      (i = ws(e.getAttribute("enctype")) || Ii),
      (l = new FormData(e));
  } else if (Hv(e) || (Wv(e) && (e.type === "submit" || e.type === "image"))) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let o = e.getAttribute("formaction") || a.getAttribute("action");
    if (
      ((r = o ? Gt(o, t) : null),
      (n = e.getAttribute("formmethod") || a.getAttribute("method") || _i),
      (i =
        ws(e.getAttribute("formenctype")) ||
        ws(a.getAttribute("enctype")) ||
        Ii),
      (l = new FormData(a, e)),
      !Kv())
    ) {
      let { name: u, type: c, value: f } = e;
      if (c === "image") {
        let h = u ? `${u}.` : "";
        l.append(`${h}x`, "0"), l.append(`${h}y`, "0");
      } else u && l.append(u, f);
    }
  } else {
    if (jl(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (n = _i), (r = null), (i = Ii), (s = e);
  }
  return (
    l && i === "text/plain" && ((s = l), (l = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: l, body: s }
  );
}
function Ia(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
async function Xv(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await import(e.module);
    return (t[e.id] = n), n;
  } catch (n) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`,
      ),
      console.error(n),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Qv(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === "preload" &&
        typeof e.imageSrcSet == "string" &&
        typeof e.imageSizes == "string"
      : typeof e.rel == "string" && typeof e.href == "string";
}
async function Jv(e, t, n) {
  let r = await Promise.all(
    e.map(async (i) => {
      let l = t.routes[i.route.id];
      if (l) {
        let s = await Xv(l, n);
        return s.links ? s.links() : [];
      }
      return [];
    }),
  );
  return n0(
    r
      .flat(1)
      .filter(Qv)
      .filter((i) => i.rel === "stylesheet" || i.rel === "preload")
      .map((i) =>
        i.rel === "stylesheet"
          ? { ...i, rel: "prefetch", as: "style" }
          : { ...i, rel: "prefetch" },
      ),
  );
}
function cc(e, t, n, r, i, l) {
  let s = (o, u) => (n[u] ? o.route.id !== n[u].route.id : !0),
    a = (o, u) => {
      var c;
      return (
        n[u].pathname !== o.pathname ||
        (((c = n[u].route.path) == null ? void 0 : c.endsWith("*")) &&
          n[u].params["*"] !== o.params["*"])
      );
    };
  return l === "assets"
    ? t.filter((o, u) => s(o, u) || a(o, u))
    : l === "data"
      ? t.filter((o, u) => {
          var f;
          let c = r.routes[o.route.id];
          if (!c || !c.hasLoader) return !1;
          if (s(o, u) || a(o, u)) return !0;
          if (o.route.shouldRevalidate) {
            let h = o.route.shouldRevalidate({
              currentUrl: new URL(
                i.pathname + i.search + i.hash,
                window.origin,
              ),
              currentParams: ((f = n[0]) == null ? void 0 : f.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: o.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof h == "boolean") return h;
          }
          return !0;
        })
      : [];
}
function Zv(e, t) {
  return e0(
    e
      .map((n) => {
        let r = t.routes[n.route.id];
        if (!r) return [];
        let i = [r.module];
        return r.imports && (i = i.concat(r.imports)), i;
      })
      .flat(1),
  );
}
function e0(e) {
  return [...new Set(e)];
}
function t0(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function n0(e, t) {
  let n = new Set();
  return (
    new Set(t),
    e.reduce((r, i) => {
      let l = JSON.stringify(t0(i));
      return n.has(l) || (n.add(l), r.push({ key: l, link: i })), r;
    }, [])
  );
}
function r0(e) {
  let t =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : e;
  return (
    t.pathname === "/"
      ? (t.pathname = "_root.data")
      : (t.pathname = `${t.pathname.replace(/\/$/, "")}.data`),
    t
  );
}
function i0() {
  let e = T.useContext(Qn);
  return (
    Ia(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    e
  );
}
function l0() {
  let e = T.useContext(Dl);
  return (
    Ia(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    e
  );
}
var Da = T.createContext(void 0);
Da.displayName = "FrameworkContext";
function sp() {
  let e = T.useContext(Da);
  return (
    Ia(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function s0(e, t) {
  let n = T.useContext(Da),
    [r, i] = T.useState(!1),
    [l, s] = T.useState(!1),
    {
      onFocus: a,
      onBlur: o,
      onMouseEnter: u,
      onMouseLeave: c,
      onTouchStart: f,
    } = t,
    h = T.useRef(null);
  T.useEffect(() => {
    if ((e === "render" && s(!0), e === "viewport")) {
      let y = (p) => {
          p.forEach((d) => {
            s(d.isIntersecting);
          });
        },
        S = new IntersectionObserver(y, { threshold: 0.5 });
      return (
        h.current && S.observe(h.current),
        () => {
          S.disconnect();
        }
      );
    }
  }, [e]),
    T.useEffect(() => {
      if (r) {
        let y = setTimeout(() => {
          s(!0);
        }, 100);
        return () => {
          clearTimeout(y);
        };
      }
    }, [r]);
  let v = () => {
      i(!0);
    },
    g = () => {
      i(!1), s(!1);
    };
  return n
    ? e !== "intent"
      ? [l, h, {}]
      : [
          l,
          h,
          {
            onFocus: ur(a, v),
            onBlur: ur(o, g),
            onMouseEnter: ur(u, v),
            onMouseLeave: ur(c, g),
            onTouchStart: ur(f, v),
          },
        ]
    : [!1, h, {}];
}
function ur(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function o0({ page: e, ...t }) {
  let { router: n } = i0(),
    r = T.useMemo(() => Xf(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r
    ? T.createElement(u0, { page: e, matches: r, ...t })
    : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
}
function a0(e) {
  let { manifest: t, routeModules: n } = sp(),
    [r, i] = T.useState([]);
  return (
    T.useEffect(() => {
      let l = !1;
      return (
        Jv(e, t, n).then((s) => {
          l || i(s);
        }),
        () => {
          l = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function u0({ page: e, matches: t, ...n }) {
  let r = Xt(),
    { manifest: i, routeModules: l } = sp(),
    { loaderData: s, matches: a } = l0(),
    o = T.useMemo(() => cc(e, t, a, i, r, "data"), [e, t, a, i, r]),
    u = T.useMemo(() => cc(e, t, a, i, r, "assets"), [e, t, a, i, r]),
    c = T.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let v = new Set(),
        g = !1;
      if (
        (t.forEach((S) => {
          var d;
          let p = i.routes[S.route.id];
          !p ||
            !p.hasLoader ||
            ((!o.some((m) => m.route.id === S.route.id) &&
              S.route.id in s &&
              (d = l[S.route.id]) != null &&
              d.shouldRevalidate) ||
            p.hasClientLoader
              ? (g = !0)
              : v.add(S.route.id));
        }),
        v.size === 0)
      )
        return [];
      let y = r0(e);
      return (
        g &&
          v.size > 0 &&
          y.searchParams.set(
            "_routes",
            t
              .filter((S) => v.has(S.route.id))
              .map((S) => S.route.id)
              .join(","),
          ),
        [y.pathname + y.search]
      );
    }, [s, r, i, o, t, e, l]),
    f = T.useMemo(() => Zv(u, i), [u, i]),
    h = a0(u);
  return T.createElement(
    T.Fragment,
    null,
    c.map((v) =>
      T.createElement("link", {
        key: v,
        rel: "prefetch",
        as: "fetch",
        href: v,
        ...n,
      }),
    ),
    f.map((v) =>
      T.createElement("link", { key: v, rel: "modulepreload", href: v, ...n }),
    ),
    h.map(({ key: v, link: g }) => T.createElement("link", { key: v, ...g })),
  );
}
function c0(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
var op =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  op && (window.__reactRouterVersion = "7.0.2");
} catch {}
function d0({ basename: e, children: t, window: n }) {
  let r = T.useRef();
  r.current == null && (r.current = Zg({ window: n, v5Compat: !0 }));
  let i = r.current,
    [l, s] = T.useState({ action: i.action, location: i.location }),
    a = T.useCallback(
      (o) => {
        T.startTransition(() => s(o));
      },
      [s],
    );
  return (
    T.useLayoutEffect(() => i.listen(a), [i, a]),
    T.createElement(Bv, {
      basename: e,
      children: t,
      location: l.location,
      navigationType: l.action,
      navigator: i,
    })
  );
}
var ap = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  zt = T.forwardRef(function (
    {
      onClick: t,
      discover: n = "render",
      prefetch: r = "none",
      relative: i,
      reloadDocument: l,
      replace: s,
      state: a,
      target: o,
      to: u,
      preventScrollReset: c,
      viewTransition: f,
      ...h
    },
    v,
  ) {
    let { basename: g } = T.useContext(tt),
      y = typeof u == "string" && ap.test(u),
      S,
      p = !1;
    if (typeof u == "string" && y && ((S = u), op))
      try {
        let N = new URL(window.location.href),
          P = u.startsWith("//") ? new URL(N.protocol + u) : new URL(u),
          I = Gt(P.pathname, g);
        P.origin === N.origin && I != null
          ? (u = I + P.search + P.hash)
          : (p = !0);
      } catch {
        Ze(
          !1,
          `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let d = kv(u, { relative: i }),
      [m, w, x] = s0(r, h),
      C = h0(u, {
        replace: s,
        state: a,
        target: o,
        preventScrollReset: c,
        relative: i,
        viewTransition: f,
      });
    function R(N) {
      t && t(N), N.defaultPrevented || C(N);
    }
    let L = T.createElement("a", {
      ...h,
      ...x,
      href: S || d,
      onClick: p || l ? t : R,
      ref: c0(v, w),
      target: o,
      "data-discover": !y && n === "render" ? "true" : void 0,
    });
    return m && !y
      ? T.createElement(T.Fragment, null, L, T.createElement(o0, { page: d }))
      : L;
  });
zt.displayName = "Link";
var f0 = T.forwardRef(function (
  {
    "aria-current": t = "page",
    caseSensitive: n = !1,
    className: r = "",
    end: i = !1,
    style: l,
    to: s,
    viewTransition: a,
    children: o,
    ...u
  },
  c,
) {
  let f = Jr(s, { relative: u.relative }),
    h = Xt(),
    v = T.useContext(Dl),
    { navigator: g, basename: y } = T.useContext(tt),
    S = v != null && S0(f) && a === !0,
    p = g.encodeLocation ? g.encodeLocation(f).pathname : f.pathname,
    d = h.pathname,
    m =
      v && v.navigation && v.navigation.location
        ? v.navigation.location.pathname
        : null;
  n ||
    ((d = d.toLowerCase()),
    (m = m ? m.toLowerCase() : null),
    (p = p.toLowerCase())),
    m && y && (m = Gt(m, y) || m);
  const w = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
  let x = d === p || (!i && d.startsWith(p) && d.charAt(w) === "/"),
    C =
      m != null &&
      (m === p || (!i && m.startsWith(p) && m.charAt(p.length) === "/")),
    R = { isActive: x, isPending: C, isTransitioning: S },
    L = x ? t : void 0,
    N;
  typeof r == "function"
    ? (N = r(R))
    : (N = [
        r,
        x ? "active" : null,
        C ? "pending" : null,
        S ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let P = typeof l == "function" ? l(R) : l;
  return T.createElement(
    zt,
    {
      ...u,
      "aria-current": L,
      className: N,
      ref: c,
      style: P,
      to: s,
      viewTransition: a,
    },
    typeof o == "function" ? o(R) : o,
  );
});
f0.displayName = "NavLink";
var p0 = T.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: i,
      state: l,
      method: s = _i,
      action: a,
      onSubmit: o,
      relative: u,
      preventScrollReset: c,
      viewTransition: f,
      ...h
    },
    v,
  ) => {
    let g = y0(),
      y = w0(a, { relative: u }),
      S = s.toLowerCase() === "get" ? "get" : "post",
      p = typeof a == "string" && ap.test(a),
      d = (m) => {
        if ((o && o(m), m.defaultPrevented)) return;
        m.preventDefault();
        let w = m.nativeEvent.submitter,
          x = (w == null ? void 0 : w.getAttribute("formmethod")) || s;
        g(w || m.currentTarget, {
          fetcherKey: t,
          method: x,
          navigate: n,
          replace: i,
          state: l,
          relative: u,
          preventScrollReset: c,
          viewTransition: f,
        });
      };
    return T.createElement("form", {
      ref: v,
      method: S,
      action: y,
      onSubmit: r ? o : d,
      ...h,
      "data-discover": !p && e === "render" ? "true" : void 0,
    });
  },
);
p0.displayName = "Form";
function m0(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function up(e) {
  let t = T.useContext(Qn);
  return Q(t, m0(e)), t;
}
function h0(
  e,
  {
    target: t,
    replace: n,
    state: r,
    preventScrollReset: i,
    relative: l,
    viewTransition: s,
  } = {},
) {
  let a = rp(),
    o = Xt(),
    u = Jr(e, { relative: l });
  return T.useCallback(
    (c) => {
      if (Gv(c, t)) {
        c.preventDefault();
        let f = n !== void 0 ? n : Ur(o) === Ur(u);
        a(e, {
          replace: f,
          state: r,
          preventScrollReset: i,
          relative: l,
          viewTransition: s,
        });
      }
    },
    [o, a, u, n, r, t, e, i, l, s],
  );
}
var g0 = 0,
  v0 = () => `__${String(++g0)}__`;
function y0() {
  let { router: e } = up("useSubmit"),
    { basename: t } = T.useContext(tt),
    n = Iv();
  return T.useCallback(
    async (r, i = {}) => {
      let { action: l, method: s, encType: a, formData: o, body: u } = qv(r, t);
      if (i.navigate === !1) {
        let c = i.fetcherKey || v0();
        await e.fetch(c, n, i.action || l, {
          preventScrollReset: i.preventScrollReset,
          formData: o,
          body: u,
          formMethod: i.method || s,
          formEncType: i.encType || a,
          flushSync: i.flushSync,
        });
      } else
        await e.navigate(i.action || l, {
          preventScrollReset: i.preventScrollReset,
          formData: o,
          body: u,
          formMethod: i.method || s,
          formEncType: i.encType || a,
          replace: i.replace,
          state: i.state,
          fromRouteId: n,
          flushSync: i.flushSync,
          viewTransition: i.viewTransition,
        });
    },
    [e, t, n],
  );
}
function w0(e, { relative: t } = {}) {
  let { basename: n } = T.useContext(tt),
    r = T.useContext(ft);
  Q(r, "useFormAction must be used inside a RouteContext");
  let [i] = r.matches.slice(-1),
    l = { ...Jr(e || ".", { relative: t }) },
    s = Xt();
  if (e == null) {
    l.search = s.search;
    let a = new URLSearchParams(l.search),
      o = a.getAll("index");
    if (o.some((c) => c === "")) {
      a.delete("index"),
        o.filter((f) => f).forEach((f) => a.append("index", f));
      let c = a.toString();
      l.search = c ? `?${c}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      i.route.index &&
      (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (l.pathname = l.pathname === "/" ? n : St([n, l.pathname])),
    Ur(l)
  );
}
function S0(e, t = {}) {
  let n = T.useContext(ep);
  Q(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: r } = up("useViewTransitionState"),
    i = Jr(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let l = Gt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    s = Gt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return pl(i.pathname, s) != null || pl(i.pathname, l) != null;
}
new TextEncoder();
const dc = [
  { title: "Home", link: "/home" },
  { title: "About", link: "/about" },
  { title: "Contact Us", link: "/contact" },
];
function x0() {
  const [e, t] = T.useState(!1),
    n = "capitalize hover:underline cursor-pointer hover:text-primary";
  return E.jsxs("div", {
    className:
      "container-x h-28 shadow-md relative flex justify-between items-center",
    children: [
      E.jsx("img", {
        src: Og,
        className: "hidden md:block w-72 ",
        alt: "Text",
      }),
      E.jsx("img", {
        src: Rg,
        className: "block md:hidden w-[95px]",
        alt: "Truck",
      }),
      E.jsxs("div", {
        className: "w-60 px-2 h-10 rounded centre bg-[#f5f5f5]",
        children: [
          E.jsx("input", {
            type: "search",
            className: "outline-none bg-transparent text-sm w-full",
            placeholder: "What are you looking for?",
          }),
          E.jsx(jg, { className: "text-3xl" }),
        ],
      }),
      E.jsxs("ul", {
        className: "hidden md:flex gap-3",
        children: [
          dc.map((r, i) =>
            E.jsx(
              "li",
              {
                className: n,
                children: E.jsx(zt, { to: r.link, children: r.title }),
              },
              i,
            ),
          ),
          E.jsx("li", {
            className: n,
            children: E.jsx(zt, { to: "/login", children: "Login" }),
          }),
        ],
      }),
      E.jsx("button", {
        onClick: () => t(!e),
        className: "md:hidden order-1 text-4xl",
        children: e ? E.jsx(Bg, {}) : E.jsx(Vg, {}),
      }),
      e &&
        E.jsxs("ul", {
          className:
            "absolute bg-red-300 w-full z-10 gap-3 flex flex-col p-6 top-28",
          children: [
            dc.map((r, i) =>
              E.jsx(
                "li",
                {
                  className: n,
                  children: E.jsx(zt, {
                    onClick: () => t(!1),
                    to: r.link,
                    children: r.title,
                  }),
                },
                i,
              ),
            ),
            E.jsx("li", {
              className: n,
              children: E.jsx(zt, { to: "/login", children: "Login" }),
            }),
          ],
        }),
      E.jsxs("div", {
        className: "icons centre text-2xl gap-3",
        children: [
          null,
          E.jsx(zt, {
            to: "/profile",
            className:
              "bg-primary rounded-full overflow-hidden h-8 w-8 centre text-base text-white",
            children: E.jsx(Hg, { className: "text-xl" }),
          }),
        ],
      }),
    ],
  });
}
function fc(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function ja(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : fc(t[n]) &&
          fc(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          ja(e[n], t[n]);
    });
}
const cp = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function Qe() {
  const e = typeof document < "u" ? document : {};
  return ja(e, cp), e;
}
const E0 = {
  document: cp,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function Re() {
  const e = typeof window < "u" ? window : {};
  return ja(e, E0), e;
}
function Lt(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function T0(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function ml(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function hl() {
  return Date.now();
}
function C0(e) {
  const t = Re();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function k0(e, t) {
  t === void 0 && (t = "x");
  const n = Re();
  let r, i, l;
  const s = C0(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = s.transform || s.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (l = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((l =
          s.MozTransform ||
          s.OTransform ||
          s.MsTransform ||
          s.msTransform ||
          s.transform ||
          s
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = l.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = l.m41)
        : r.length === 16
          ? (i = parseFloat(r[12]))
          : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = l.m42)
        : r.length === 16
          ? (i = parseFloat(r[13]))
          : (i = parseFloat(r[5]))),
    i || 0
  );
}
function xi(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function P0(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function ze() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !P0(r)) {
      const i = Object.keys(Object(r)).filter((l) => t.indexOf(l) < 0);
      for (let l = 0, s = i.length; l < s; l += 1) {
        const a = i[l],
          o = Object.getOwnPropertyDescriptor(r, a);
        o !== void 0 &&
          o.enumerable &&
          (xi(e[a]) && xi(r[a])
            ? r[a].__swiper__
              ? (e[a] = r[a])
              : ze(e[a], r[a])
            : !xi(e[a]) && xi(r[a])
              ? ((e[a] = {}), r[a].__swiper__ ? (e[a] = r[a]) : ze(e[a], r[a]))
              : (e[a] = r[a]));
      }
    }
  }
  return e;
}
function Ei(e, t, n) {
  e.style.setProperty(t, n);
}
function dp(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = Re(),
    l = -t.translate;
  let s = null,
    a;
  const o = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const u = n > l ? "next" : "prev",
    c = (h, v) => (u === "next" && h >= v) || (u === "prev" && h <= v),
    f = () => {
      (a = new Date().getTime()), s === null && (s = a);
      const h = Math.max(Math.min((a - s) / o, 1), 0),
        v = 0.5 - Math.cos(h * Math.PI) / 2;
      let g = l + v * (n - l);
      if ((c(g, n) && (g = n), t.wrapperEl.scrollTo({ [r]: g }), c(g, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: g });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(f);
    };
  f();
}
function ut(e, t) {
  t === void 0 && (t = "");
  const n = [...e.children];
  return (
    e instanceof HTMLSlotElement && n.push(...e.assignedElements()),
    t ? n.filter((r) => r.matches(t)) : n
  );
}
function L0(e, t) {
  const n = t.contains(e);
  return !n && t instanceof HTMLSlotElement
    ? [...t.assignedElements()].includes(e)
    : n;
}
function gl(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function Wr(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : Lt(t))), n;
}
function N0(e) {
  const t = Re(),
    n = Qe(),
    r = e.getBoundingClientRect(),
    i = n.body,
    l = e.clientTop || i.clientTop || 0,
    s = e.clientLeft || i.clientLeft || 0,
    a = e === t ? t.scrollY : e.scrollTop,
    o = e === t ? t.scrollX : e.scrollLeft;
  return { top: r.top + a - l, left: r.left + o - s };
}
function O0(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function R0(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function _t(e, t) {
  return Re().getComputedStyle(e, null).getPropertyValue(t);
}
function vl(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function fp(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function Lo(e, t, n) {
  const r = Re();
  return (
    e[t === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-right" : "margin-top"),
    ) +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"),
    )
  );
}
function oe(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
function Fa(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let l = ut(e.el, `.${r[i]}`)[0];
          l || ((l = Wr("div", r[i])), (l.className = r[i]), e.el.append(l)),
            (n[i] = l),
            (t[i] = l);
        }
      }),
    n
  );
}
function b0(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (t.navigation = { nextEl: null, prevEl: null });
  function l(g) {
    let y;
    return g &&
      typeof g == "string" &&
      t.isElement &&
      ((y = t.el.querySelector(g) || t.hostEl.querySelector(g)), y)
      ? y
      : (g &&
          (typeof g == "string" && (y = [...document.querySelectorAll(g)]),
          t.params.uniqueNavElements &&
          typeof g == "string" &&
          y &&
          y.length > 1 &&
          t.el.querySelectorAll(g).length === 1
            ? (y = t.el.querySelector(g))
            : y && y.length === 1 && (y = y[0])),
        g && !y ? g : y);
  }
  function s(g, y) {
    const S = t.params.navigation;
    (g = oe(g)),
      g.forEach((p) => {
        p &&
          (p.classList[y ? "add" : "remove"](...S.disabledClass.split(" ")),
          p.tagName === "BUTTON" && (p.disabled = y),
          t.params.watchOverflow &&
            t.enabled &&
            p.classList[t.isLocked ? "add" : "remove"](S.lockClass));
      });
  }
  function a() {
    const { nextEl: g, prevEl: y } = t.navigation;
    if (t.params.loop) {
      s(y, !1), s(g, !1);
      return;
    }
    s(y, t.isBeginning && !t.params.rewind), s(g, t.isEnd && !t.params.rewind);
  }
  function o(g) {
    g.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), i("navigationPrev"));
  }
  function u(g) {
    g.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), i("navigationNext"));
  }
  function c() {
    const g = t.params.navigation;
    if (
      ((t.params.navigation = Fa(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
      )),
      !(g.nextEl || g.prevEl))
    )
      return;
    let y = l(g.nextEl),
      S = l(g.prevEl);
    Object.assign(t.navigation, { nextEl: y, prevEl: S }),
      (y = oe(y)),
      (S = oe(S));
    const p = (d, m) => {
      d && d.addEventListener("click", m === "next" ? u : o),
        !t.enabled && d && d.classList.add(...g.lockClass.split(" "));
    };
    y.forEach((d) => p(d, "next")), S.forEach((d) => p(d, "prev"));
  }
  function f() {
    let { nextEl: g, prevEl: y } = t.navigation;
    (g = oe(g)), (y = oe(y));
    const S = (p, d) => {
      p.removeEventListener("click", d === "next" ? u : o),
        p.classList.remove(...t.params.navigation.disabledClass.split(" "));
    };
    g.forEach((p) => S(p, "next")), y.forEach((p) => S(p, "prev"));
  }
  r("init", () => {
    t.params.navigation.enabled === !1 ? v() : (c(), a());
  }),
    r("toEdge fromEdge lock unlock", () => {
      a();
    }),
    r("destroy", () => {
      f();
    }),
    r("enable disable", () => {
      let { nextEl: g, prevEl: y } = t.navigation;
      if (((g = oe(g)), (y = oe(y)), t.enabled)) {
        a();
        return;
      }
      [...g, ...y]
        .filter((S) => !!S)
        .forEach((S) => S.classList.add(t.params.navigation.lockClass));
    }),
    r("click", (g, y) => {
      let { nextEl: S, prevEl: p } = t.navigation;
      (S = oe(S)), (p = oe(p));
      const d = y.target;
      let m = p.includes(d) || S.includes(d);
      if (t.isElement && !m) {
        const w = y.path || (y.composedPath && y.composedPath());
        w && (m = w.find((x) => S.includes(x) || p.includes(x)));
      }
      if (t.params.navigation.hideOnClick && !m) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === d || t.pagination.el.contains(d))
        )
          return;
        let w;
        S.length
          ? (w = S[0].classList.contains(t.params.navigation.hiddenClass))
          : p.length &&
            (w = p[0].classList.contains(t.params.navigation.hiddenClass)),
          i(w === !0 ? "navigationShow" : "navigationHide"),
          [...S, ...p]
            .filter((x) => !!x)
            .forEach((x) =>
              x.classList.toggle(t.params.navigation.hiddenClass),
            );
      }
    });
  const h = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        c(),
        a();
    },
    v = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        f();
    };
  Object.assign(t.navigation, {
    enable: h,
    disable: v,
    update: a,
    init: c,
    destroy: f,
  });
}
function wn(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function z0(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const l = "swiper-pagination";
  n({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (d) => d,
      formatFractionTotal: (d) => d,
      bulletClass: `${l}-bullet`,
      bulletActiveClass: `${l}-bullet-active`,
      modifierClass: `${l}-`,
      currentClass: `${l}-current`,
      totalClass: `${l}-total`,
      hiddenClass: `${l}-hidden`,
      progressbarFillClass: `${l}-progressbar-fill`,
      progressbarOppositeClass: `${l}-progressbar-opposite`,
      clickableClass: `${l}-clickable`,
      lockClass: `${l}-lock`,
      horizontalClass: `${l}-horizontal`,
      verticalClass: `${l}-vertical`,
      paginationDisabledClass: `${l}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] });
  let s,
    a = 0;
  function o() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    );
  }
  function u(d, m) {
    const { bulletActiveClass: w } = t.params.pagination;
    d &&
      ((d = d[`${m === "prev" ? "previous" : "next"}ElementSibling`]),
      d &&
        (d.classList.add(`${w}-${m}`),
        (d = d[`${m === "prev" ? "previous" : "next"}ElementSibling`]),
        d && d.classList.add(`${w}-${m}-${m}`)));
  }
  function c(d, m, w) {
    if (((d = d % w), (m = m % w), m === d + 1)) return "next";
    if (m === d - 1) return "previous";
  }
  function f(d) {
    const m = d.target.closest(wn(t.params.pagination.bulletClass));
    if (!m) return;
    d.preventDefault();
    const w = vl(m) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === w) return;
      const x = c(t.realIndex, w, t.slides.length);
      x === "next"
        ? t.slideNext()
        : x === "previous"
          ? t.slidePrev()
          : t.slideToLoop(w);
    } else t.slideTo(w);
  }
  function h() {
    const d = t.rtl,
      m = t.params.pagination;
    if (o()) return;
    let w = t.pagination.el;
    w = oe(w);
    let x, C;
    const R =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      L = t.params.loop
        ? Math.ceil(R / t.params.slidesPerGroup)
        : t.snapGrid.length;
    if (
      (t.params.loop
        ? ((C = t.previousRealIndex || 0),
          (x =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < "u"
          ? ((x = t.snapIndex), (C = t.previousSnapIndex))
          : ((C = t.previousIndex || 0), (x = t.activeIndex || 0)),
      m.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const N = t.pagination.bullets;
      let P, I, z;
      if (
        (m.dynamicBullets &&
          ((s = Lo(N[0], t.isHorizontal() ? "width" : "height")),
          w.forEach((b) => {
            b.style[t.isHorizontal() ? "width" : "height"] =
              `${s * (m.dynamicMainBullets + 4)}px`;
          }),
          m.dynamicMainBullets > 1 &&
            C !== void 0 &&
            ((a += x - (C || 0)),
            a > m.dynamicMainBullets - 1
              ? (a = m.dynamicMainBullets - 1)
              : a < 0 && (a = 0)),
          (P = Math.max(x - a, 0)),
          (I = P + (Math.min(N.length, m.dynamicMainBullets) - 1)),
          (z = (I + P) / 2)),
        N.forEach((b) => {
          const _ = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (D) => `${m.bulletActiveClass}${D}`,
            ),
          ]
            .map((D) =>
              typeof D == "string" && D.includes(" ") ? D.split(" ") : D,
            )
            .flat();
          b.classList.remove(..._);
        }),
        w.length > 1)
      )
        N.forEach((b) => {
          const _ = vl(b);
          _ === x
            ? b.classList.add(...m.bulletActiveClass.split(" "))
            : t.isElement && b.setAttribute("part", "bullet"),
            m.dynamicBullets &&
              (_ >= P &&
                _ <= I &&
                b.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),
              _ === P && u(b, "prev"),
              _ === I && u(b, "next"));
        });
      else {
        const b = N[x];
        if (
          (b && b.classList.add(...m.bulletActiveClass.split(" ")),
          t.isElement &&
            N.forEach((_, D) => {
              _.setAttribute("part", D === x ? "bullet-active" : "bullet");
            }),
          m.dynamicBullets)
        ) {
          const _ = N[P],
            D = N[I];
          for (let B = P; B <= I; B += 1)
            N[B] &&
              N[B].classList.add(...`${m.bulletActiveClass}-main`.split(" "));
          u(_, "prev"), u(D, "next");
        }
      }
      if (m.dynamicBullets) {
        const b = Math.min(N.length, m.dynamicMainBullets + 4),
          _ = (s * b - s) / 2 - z * s,
          D = d ? "right" : "left";
        N.forEach((B) => {
          B.style[t.isHorizontal() ? D : "top"] = `${_}px`;
        });
      }
    }
    w.forEach((N, P) => {
      if (
        (m.type === "fraction" &&
          (N.querySelectorAll(wn(m.currentClass)).forEach((I) => {
            I.textContent = m.formatFractionCurrent(x + 1);
          }),
          N.querySelectorAll(wn(m.totalClass)).forEach((I) => {
            I.textContent = m.formatFractionTotal(L);
          })),
        m.type === "progressbar")
      ) {
        let I;
        m.progressbarOpposite
          ? (I = t.isHorizontal() ? "vertical" : "horizontal")
          : (I = t.isHorizontal() ? "horizontal" : "vertical");
        const z = (x + 1) / L;
        let b = 1,
          _ = 1;
        I === "horizontal" ? (b = z) : (_ = z),
          N.querySelectorAll(wn(m.progressbarFillClass)).forEach((D) => {
            (D.style.transform = `translate3d(0,0,0) scaleX(${b}) scaleY(${_})`),
              (D.style.transitionDuration = `${t.params.speed}ms`);
          });
      }
      m.type === "custom" && m.renderCustom
        ? ((N.innerHTML = m.renderCustom(t, x + 1, L)),
          P === 0 && i("paginationRender", N))
        : (P === 0 && i("paginationRender", N), i("paginationUpdate", N)),
        t.params.watchOverflow &&
          t.enabled &&
          N.classList[t.isLocked ? "add" : "remove"](m.lockClass);
    });
  }
  function v() {
    const d = t.params.pagination;
    if (o()) return;
    const m =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.grid && t.params.grid.rows > 1
          ? t.slides.length / Math.ceil(t.params.grid.rows)
          : t.slides.length;
    let w = t.pagination.el;
    w = oe(w);
    let x = "";
    if (d.type === "bullets") {
      let C = t.params.loop
        ? Math.ceil(m / t.params.slidesPerGroup)
        : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && C > m && (C = m);
      for (let R = 0; R < C; R += 1)
        d.renderBullet
          ? (x += d.renderBullet.call(t, R, d.bulletClass))
          : (x += `<${d.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${d.bulletClass}"></${d.bulletElement}>`);
    }
    d.type === "fraction" &&
      (d.renderFraction
        ? (x = d.renderFraction.call(t, d.currentClass, d.totalClass))
        : (x = `<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`)),
      d.type === "progressbar" &&
        (d.renderProgressbar
          ? (x = d.renderProgressbar.call(t, d.progressbarFillClass))
          : (x = `<span class="${d.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      w.forEach((C) => {
        d.type !== "custom" && (C.innerHTML = x || ""),
          d.type === "bullets" &&
            t.pagination.bullets.push(...C.querySelectorAll(wn(d.bulletClass)));
      }),
      d.type !== "custom" && i("paginationRender", w[0]);
  }
  function g() {
    t.params.pagination = Fa(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: "swiper-pagination" },
    );
    const d = t.params.pagination;
    if (!d.el) return;
    let m;
    typeof d.el == "string" && t.isElement && (m = t.el.querySelector(d.el)),
      !m &&
        typeof d.el == "string" &&
        (m = [...document.querySelectorAll(d.el)]),
      m || (m = d.el),
      !(!m || m.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof d.el == "string" &&
          Array.isArray(m) &&
          m.length > 1 &&
          ((m = [...t.el.querySelectorAll(d.el)]),
          m.length > 1 &&
            (m = m.filter((w) => fp(w, ".swiper")[0] === t.el)[0])),
        Array.isArray(m) && m.length === 1 && (m = m[0]),
        Object.assign(t.pagination, { el: m }),
        (m = oe(m)),
        m.forEach((w) => {
          d.type === "bullets" &&
            d.clickable &&
            w.classList.add(...(d.clickableClass || "").split(" ")),
            w.classList.add(d.modifierClass + d.type),
            w.classList.add(
              t.isHorizontal() ? d.horizontalClass : d.verticalClass,
            ),
            d.type === "bullets" &&
              d.dynamicBullets &&
              (w.classList.add(`${d.modifierClass}${d.type}-dynamic`),
              (a = 0),
              d.dynamicMainBullets < 1 && (d.dynamicMainBullets = 1)),
            d.type === "progressbar" &&
              d.progressbarOpposite &&
              w.classList.add(d.progressbarOppositeClass),
            d.clickable && w.addEventListener("click", f),
            t.enabled || w.classList.add(d.lockClass);
        }));
  }
  function y() {
    const d = t.params.pagination;
    if (o()) return;
    let m = t.pagination.el;
    m &&
      ((m = oe(m)),
      m.forEach((w) => {
        w.classList.remove(d.hiddenClass),
          w.classList.remove(d.modifierClass + d.type),
          w.classList.remove(
            t.isHorizontal() ? d.horizontalClass : d.verticalClass,
          ),
          d.clickable &&
            (w.classList.remove(...(d.clickableClass || "").split(" ")),
            w.removeEventListener("click", f));
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((w) =>
          w.classList.remove(...d.bulletActiveClass.split(" ")),
        );
  }
  r("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return;
    const d = t.params.pagination;
    let { el: m } = t.pagination;
    (m = oe(m)),
      m.forEach((w) => {
        w.classList.remove(d.horizontalClass, d.verticalClass),
          w.classList.add(
            t.isHorizontal() ? d.horizontalClass : d.verticalClass,
          );
      });
  }),
    r("init", () => {
      t.params.pagination.enabled === !1 ? p() : (g(), v(), h());
    }),
    r("activeIndexChange", () => {
      typeof t.snapIndex > "u" && h();
    }),
    r("snapIndexChange", () => {
      h();
    }),
    r("snapGridLengthChange", () => {
      v(), h();
    }),
    r("destroy", () => {
      y();
    }),
    r("enable disable", () => {
      let { el: d } = t.pagination;
      d &&
        ((d = oe(d)),
        d.forEach((m) =>
          m.classList[t.enabled ? "remove" : "add"](
            t.params.pagination.lockClass,
          ),
        ));
    }),
    r("lock unlock", () => {
      h();
    }),
    r("click", (d, m) => {
      const w = m.target,
        x = oe(t.pagination.el);
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        x &&
        x.length > 0 &&
        !w.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && w === t.navigation.nextEl) ||
            (t.navigation.prevEl && w === t.navigation.prevEl))
        )
          return;
        const C = x[0].classList.contains(t.params.pagination.hiddenClass);
        i(C === !0 ? "paginationShow" : "paginationHide"),
          x.forEach((R) => R.classList.toggle(t.params.pagination.hiddenClass));
      }
    });
  const S = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let { el: d } = t.pagination;
      d &&
        ((d = oe(d)),
        d.forEach((m) =>
          m.classList.remove(t.params.pagination.paginationDisabledClass),
        )),
        g(),
        v(),
        h();
    },
    p = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let { el: d } = t.pagination;
      d &&
        ((d = oe(d)),
        d.forEach((m) =>
          m.classList.add(t.params.pagination.paginationDisabledClass),
        )),
        y();
    };
  Object.assign(t.pagination, {
    enable: S,
    disable: p,
    render: v,
    update: h,
    init: g,
    destroy: y,
  });
}
function M0(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const l = Qe();
  let s = !1,
    a = null,
    o = null,
    u,
    c,
    f,
    h;
  n({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical",
    },
  }),
    (t.scrollbar = { el: null, dragEl: null });
  function v() {
    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
    const { scrollbar: z, rtlTranslate: b } = t,
      { dragEl: _, el: D } = z,
      B = t.params.scrollbar,
      ie = t.params.loop ? t.progressLoop : t.progress;
    let O = c,
      A = (f - c) * ie;
    b
      ? ((A = -A), A > 0 ? ((O = c - A), (A = 0)) : -A + c > f && (O = f + A))
      : A < 0
        ? ((O = c + A), (A = 0))
        : A + c > f && (O = f - A),
      t.isHorizontal()
        ? ((_.style.transform = `translate3d(${A}px, 0, 0)`),
          (_.style.width = `${O}px`))
        : ((_.style.transform = `translate3d(0px, ${A}px, 0)`),
          (_.style.height = `${O}px`)),
      B.hide &&
        (clearTimeout(a),
        (D.style.opacity = 1),
        (a = setTimeout(() => {
          (D.style.opacity = 0), (D.style.transitionDuration = "400ms");
        }, 1e3)));
  }
  function g(z) {
    !t.params.scrollbar.el ||
      !t.scrollbar.el ||
      (t.scrollbar.dragEl.style.transitionDuration = `${z}ms`);
  }
  function y() {
    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
    const { scrollbar: z } = t,
      { dragEl: b, el: _ } = z;
    (b.style.width = ""),
      (b.style.height = ""),
      (f = t.isHorizontal() ? _.offsetWidth : _.offsetHeight),
      (h =
        t.size /
        (t.virtualSize +
          t.params.slidesOffsetBefore -
          (t.params.centeredSlides ? t.snapGrid[0] : 0))),
      t.params.scrollbar.dragSize === "auto"
        ? (c = f * h)
        : (c = parseInt(t.params.scrollbar.dragSize, 10)),
      t.isHorizontal()
        ? (b.style.width = `${c}px`)
        : (b.style.height = `${c}px`),
      h >= 1 ? (_.style.display = "none") : (_.style.display = ""),
      t.params.scrollbar.hide && (_.style.opacity = 0),
      t.params.watchOverflow &&
        t.enabled &&
        z.el.classList[t.isLocked ? "add" : "remove"](
          t.params.scrollbar.lockClass,
        );
  }
  function S(z) {
    return t.isHorizontal() ? z.clientX : z.clientY;
  }
  function p(z) {
    const { scrollbar: b, rtlTranslate: _ } = t,
      { el: D } = b;
    let B;
    (B =
      (S(z) -
        N0(D)[t.isHorizontal() ? "left" : "top"] -
        (u !== null ? u : c / 2)) /
      (f - c)),
      (B = Math.max(Math.min(B, 1), 0)),
      _ && (B = 1 - B);
    const ie = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * B;
    t.updateProgress(ie),
      t.setTranslate(ie),
      t.updateActiveIndex(),
      t.updateSlidesClasses();
  }
  function d(z) {
    const b = t.params.scrollbar,
      { scrollbar: _, wrapperEl: D } = t,
      { el: B, dragEl: ie } = _;
    (s = !0),
      (u =
        z.target === ie
          ? S(z) -
            z.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"]
          : null),
      z.preventDefault(),
      z.stopPropagation(),
      (D.style.transitionDuration = "100ms"),
      (ie.style.transitionDuration = "100ms"),
      p(z),
      clearTimeout(o),
      (B.style.transitionDuration = "0ms"),
      b.hide && (B.style.opacity = 1),
      t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"),
      i("scrollbarDragStart", z);
  }
  function m(z) {
    const { scrollbar: b, wrapperEl: _ } = t,
      { el: D, dragEl: B } = b;
    s &&
      (z.preventDefault && z.cancelable
        ? z.preventDefault()
        : (z.returnValue = !1),
      p(z),
      (_.style.transitionDuration = "0ms"),
      (D.style.transitionDuration = "0ms"),
      (B.style.transitionDuration = "0ms"),
      i("scrollbarDragMove", z));
  }
  function w(z) {
    const b = t.params.scrollbar,
      { scrollbar: _, wrapperEl: D } = t,
      { el: B } = _;
    s &&
      ((s = !1),
      t.params.cssMode &&
        ((t.wrapperEl.style["scroll-snap-type"] = ""),
        (D.style.transitionDuration = "")),
      b.hide &&
        (clearTimeout(o),
        (o = ml(() => {
          (B.style.opacity = 0), (B.style.transitionDuration = "400ms");
        }, 1e3))),
      i("scrollbarDragEnd", z),
      b.snapOnRelease && t.slideToClosest());
  }
  function x(z) {
    const { scrollbar: b, params: _ } = t,
      D = b.el;
    if (!D) return;
    const B = D,
      ie = _.passiveListeners ? { passive: !1, capture: !1 } : !1,
      O = _.passiveListeners ? { passive: !0, capture: !1 } : !1;
    if (!B) return;
    const A = z === "on" ? "addEventListener" : "removeEventListener";
    B[A]("pointerdown", d, ie),
      l[A]("pointermove", m, ie),
      l[A]("pointerup", w, O);
  }
  function C() {
    !t.params.scrollbar.el || !t.scrollbar.el || x("on");
  }
  function R() {
    !t.params.scrollbar.el || !t.scrollbar.el || x("off");
  }
  function L() {
    const { scrollbar: z, el: b } = t;
    t.params.scrollbar = Fa(t, t.originalParams.scrollbar, t.params.scrollbar, {
      el: "swiper-scrollbar",
    });
    const _ = t.params.scrollbar;
    if (!_.el) return;
    let D;
    if (
      (typeof _.el == "string" && t.isElement && (D = t.el.querySelector(_.el)),
      !D && typeof _.el == "string")
    ) {
      if (((D = l.querySelectorAll(_.el)), !D.length)) return;
    } else D || (D = _.el);
    t.params.uniqueNavElements &&
      typeof _.el == "string" &&
      D.length > 1 &&
      b.querySelectorAll(_.el).length === 1 &&
      (D = b.querySelector(_.el)),
      D.length > 0 && (D = D[0]),
      D.classList.add(t.isHorizontal() ? _.horizontalClass : _.verticalClass);
    let B;
    D &&
      ((B = D.querySelector(wn(t.params.scrollbar.dragClass))),
      B || ((B = Wr("div", t.params.scrollbar.dragClass)), D.append(B))),
      Object.assign(z, { el: D, dragEl: B }),
      _.draggable && C(),
      D &&
        D.classList[t.enabled ? "remove" : "add"](
          ...Lt(t.params.scrollbar.lockClass),
        );
  }
  function N() {
    const z = t.params.scrollbar,
      b = t.scrollbar.el;
    b &&
      b.classList.remove(
        ...Lt(t.isHorizontal() ? z.horizontalClass : z.verticalClass),
      ),
      R();
  }
  r("changeDirection", () => {
    if (!t.scrollbar || !t.scrollbar.el) return;
    const z = t.params.scrollbar;
    let { el: b } = t.scrollbar;
    (b = oe(b)),
      b.forEach((_) => {
        _.classList.remove(z.horizontalClass, z.verticalClass),
          _.classList.add(
            t.isHorizontal() ? z.horizontalClass : z.verticalClass,
          );
      });
  }),
    r("init", () => {
      t.params.scrollbar.enabled === !1 ? I() : (L(), y(), v());
    }),
    r("update resize observerUpdate lock unlock changeDirection", () => {
      y();
    }),
    r("setTranslate", () => {
      v();
    }),
    r("setTransition", (z, b) => {
      g(b);
    }),
    r("enable disable", () => {
      const { el: z } = t.scrollbar;
      z &&
        z.classList[t.enabled ? "remove" : "add"](
          ...Lt(t.params.scrollbar.lockClass),
        );
    }),
    r("destroy", () => {
      N();
    });
  const P = () => {
      t.el.classList.remove(...Lt(t.params.scrollbar.scrollbarDisabledClass)),
        t.scrollbar.el &&
          t.scrollbar.el.classList.remove(
            ...Lt(t.params.scrollbar.scrollbarDisabledClass),
          ),
        L(),
        y(),
        v();
    },
    I = () => {
      t.el.classList.add(...Lt(t.params.scrollbar.scrollbarDisabledClass)),
        t.scrollbar.el &&
          t.scrollbar.el.classList.add(
            ...Lt(t.params.scrollbar.scrollbarDisabledClass),
          ),
        N();
    };
  Object.assign(t.scrollbar, {
    enable: P,
    disable: I,
    updateSize: y,
    setTranslate: v,
    init: L,
    destroy: N,
  });
}
function A0(e) {
  let { swiper: t, extendParams: n, on: r, emit: i, params: l } = e;
  (t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let s,
    a,
    o = l && l.autoplay ? l.autoplay.delay : 3e3,
    u = l && l.autoplay ? l.autoplay.delay : 3e3,
    c,
    f = new Date().getTime(),
    h,
    v,
    g,
    y,
    S,
    p,
    d;
  function m(O) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (O.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", m),
        !(d || (O.detail && O.detail.bySwiperTouchMove)) && P()));
  }
  const w = () => {
      if (t.destroyed || !t.autoplay.running) return;
      t.autoplay.paused ? (h = !0) : h && ((u = c), (h = !1));
      const O = t.autoplay.paused ? c : f + u - new Date().getTime();
      (t.autoplay.timeLeft = O),
        i("autoplayTimeLeft", O, O / o),
        (a = requestAnimationFrame(() => {
          w();
        }));
    },
    x = () => {
      let O;
      return (
        t.virtual && t.params.virtual.enabled
          ? (O = t.slides.filter((F) =>
              F.classList.contains("swiper-slide-active"),
            )[0])
          : (O = t.slides[t.activeIndex]),
        O ? parseInt(O.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    C = (O) => {
      if (t.destroyed || !t.autoplay.running) return;
      cancelAnimationFrame(a), w();
      let A = typeof O > "u" ? t.params.autoplay.delay : O;
      (o = t.params.autoplay.delay), (u = t.params.autoplay.delay);
      const F = x();
      !Number.isNaN(F) &&
        F > 0 &&
        typeof O > "u" &&
        ((A = F), (o = F), (u = F)),
        (c = A);
      const W = t.params.speed,
        J = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(W, !0, !0), i("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, W, !0, !0), i("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
                ? (t.slideNext(W, !0, !0), i("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(0, W, !0, !0), i("autoplay")),
            t.params.cssMode &&
              ((f = new Date().getTime()),
              requestAnimationFrame(() => {
                C();
              })));
        };
      return (
        A > 0
          ? (clearTimeout(s),
            (s = setTimeout(() => {
              J();
            }, A)))
          : requestAnimationFrame(() => {
              J();
            }),
        A
      );
    },
    R = () => {
      (f = new Date().getTime()),
        (t.autoplay.running = !0),
        C(),
        i("autoplayStart");
    },
    L = () => {
      (t.autoplay.running = !1),
        clearTimeout(s),
        cancelAnimationFrame(a),
        i("autoplayStop");
    },
    N = (O, A) => {
      if (t.destroyed || !t.autoplay.running) return;
      clearTimeout(s), O || (p = !0);
      const F = () => {
        i("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", m)
            : P();
      };
      if (((t.autoplay.paused = !0), A)) {
        S && (c = t.params.autoplay.delay), (S = !1), F();
        return;
      }
      (c = (c || t.params.autoplay.delay) - (new Date().getTime() - f)),
        !(t.isEnd && c < 0 && !t.params.loop) && (c < 0 && (c = 0), F());
    },
    P = () => {
      (t.isEnd && c < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((f = new Date().getTime()),
        p ? ((p = !1), C(c)) : C(),
        (t.autoplay.paused = !1),
        i("autoplayResume"));
    },
    I = () => {
      if (t.destroyed || !t.autoplay.running) return;
      const O = Qe();
      O.visibilityState === "hidden" && ((p = !0), N(!0)),
        O.visibilityState === "visible" && P();
    },
    z = (O) => {
      O.pointerType === "mouse" &&
        ((p = !0), (d = !0), !(t.animating || t.autoplay.paused) && N(!0));
    },
    b = (O) => {
      O.pointerType === "mouse" && ((d = !1), t.autoplay.paused && P());
    },
    _ = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", z),
        t.el.addEventListener("pointerleave", b));
    },
    D = () => {
      t.el &&
        typeof t.el != "string" &&
        (t.el.removeEventListener("pointerenter", z),
        t.el.removeEventListener("pointerleave", b));
    },
    B = () => {
      Qe().addEventListener("visibilitychange", I);
    },
    ie = () => {
      Qe().removeEventListener("visibilitychange", I);
    };
  r("init", () => {
    t.params.autoplay.enabled && (_(), B(), R());
  }),
    r("destroy", () => {
      D(), ie(), t.autoplay.running && L();
    }),
    r("_freeModeStaticRelease", () => {
      (g || p) && P();
    }),
    r("_freeModeNoMomentumRelease", () => {
      t.params.autoplay.disableOnInteraction ? L() : N(!0, !0);
    }),
    r("beforeTransitionStart", (O, A, F) => {
      t.destroyed ||
        !t.autoplay.running ||
        (F || !t.params.autoplay.disableOnInteraction ? N(!0, !0) : L());
    }),
    r("sliderFirstMove", () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          L();
          return;
        }
        (v = !0),
          (g = !1),
          (p = !1),
          (y = setTimeout(() => {
            (p = !0), (g = !0), N(!0);
          }, 200));
      }
    }),
    r("touchEnd", () => {
      if (!(t.destroyed || !t.autoplay.running || !v)) {
        if (
          (clearTimeout(y),
          clearTimeout(s),
          t.params.autoplay.disableOnInteraction)
        ) {
          (g = !1), (v = !1);
          return;
        }
        g && t.params.cssMode && P(), (g = !1), (v = !1);
      }
    }),
    r("slideChange", () => {
      t.destroyed || !t.autoplay.running || (S = !0);
    }),
    Object.assign(t.autoplay, { start: R, stop: L, pause: N, resume: P });
}
let Ss;
function _0() {
  const e = Re(),
    t = Qe();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function pp() {
  return Ss || (Ss = _0()), Ss;
}
let xs;
function I0(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = pp(),
    r = Re(),
    i = r.navigator.platform,
    l = t || r.navigator.userAgent,
    s = { ios: !1, android: !1 },
    a = r.screen.width,
    o = r.screen.height,
    u = l.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = l.match(/(iPad).*OS\s([\d_]+)/);
  const f = l.match(/(iPod)(.*OS\s([\d_]+))?/),
    h = !c && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    v = i === "Win32";
  let g = i === "MacIntel";
  const y = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !c &&
      g &&
      n.touch &&
      y.indexOf(`${a}x${o}`) >= 0 &&
      ((c = l.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (g = !1)),
    u && !v && ((s.os = "android"), (s.android = !0)),
    (c || h || f) && ((s.os = "ios"), (s.ios = !0)),
    s
  );
}
function mp(e) {
  return e === void 0 && (e = {}), xs || (xs = I0(e)), xs;
}
let Es;
function D0() {
  const e = Re(),
    t = mp();
  let n = !1;
  function r() {
    const a = e.navigator.userAgent.toLowerCase();
    return (
      a.indexOf("safari") >= 0 &&
      a.indexOf("chrome") < 0 &&
      a.indexOf("android") < 0
    );
  }
  if (r()) {
    const a = String(e.navigator.userAgent);
    if (a.includes("Version/")) {
      const [o, u] = a
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((c) => Number(c));
      n = o < 16 || (o === 16 && u < 2);
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent,
    ),
    l = r(),
    s = l || (i && t.ios);
  return {
    isSafari: n || l,
    needPerspectiveFix: n,
    need3dFix: s,
    isWebView: i,
  };
}
function j0() {
  return Es || (Es = D0()), Es;
}
function F0(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = Re();
  let l = null,
    s = null;
  const a = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    o = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((l = new ResizeObserver((f) => {
          s = i.requestAnimationFrame(() => {
            const { width: h, height: v } = t;
            let g = h,
              y = v;
            f.forEach((S) => {
              let { contentBoxSize: p, contentRect: d, target: m } = S;
              (m && m !== t.el) ||
                ((g = d ? d.width : (p[0] || p).inlineSize),
                (y = d ? d.height : (p[0] || p).blockSize));
            }),
              (g !== h || y !== v) && a();
          });
        })),
        l.observe(t.el));
    },
    u = () => {
      s && i.cancelAnimationFrame(s),
        l && l.unobserve && t.el && (l.unobserve(t.el), (l = null));
    },
    c = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      o();
      return;
    }
    i.addEventListener("resize", a), i.addEventListener("orientationchange", c);
  }),
    n("destroy", () => {
      u(),
        i.removeEventListener("resize", a),
        i.removeEventListener("orientationchange", c);
    });
}
function B0(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const l = [],
    s = Re(),
    a = function (c, f) {
      f === void 0 && (f = {});
      const h = s.MutationObserver || s.WebkitMutationObserver,
        v = new h((g) => {
          if (t.__preventObserver__) return;
          if (g.length === 1) {
            i("observerUpdate", g[0]);
            return;
          }
          const y = function () {
            i("observerUpdate", g[0]);
          };
          s.requestAnimationFrame
            ? s.requestAnimationFrame(y)
            : s.setTimeout(y, 0);
        });
      v.observe(c, {
        attributes: typeof f.attributes > "u" ? !0 : f.attributes,
        childList: t.isElement || (typeof f.childList > "u" ? !0 : f).childList,
        characterData: typeof f.characterData > "u" ? !0 : f.characterData,
      }),
        l.push(v);
    },
    o = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = fp(t.hostEl);
          for (let f = 0; f < c.length; f += 1) a(c[f]);
        }
        a(t.hostEl, { childList: t.params.observeSlideChildren }),
          a(t.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      l.forEach((c) => {
        c.disconnect();
      }),
        l.splice(0, l.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", o),
    r("destroy", u);
}
var V0 = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((l) => {
        r.eventsListeners[l] || (r.eventsListeners[l] = []),
          r.eventsListeners[l][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var l = arguments.length, s = new Array(l), a = 0; a < l; a++)
        s[a] = arguments[a];
      t.apply(r, s);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, l) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(l, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, l = new Array(i), s = 0; s < i; s++)
      l[s] = arguments[s];
    return (
      typeof l[0] == "string" || Array.isArray(l[0])
        ? ((t = l[0]), (n = l.slice(1, l.length)), (r = e))
        : ((t = l[0].events), (n = l[0].data), (r = l[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((o) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(r, [o, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[o] &&
            e.eventsListeners[o].forEach((u) => {
              u.apply(r, n);
            });
      }),
      e
    );
  },
};
function H0() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(_t(r, "padding-left") || 0, 10) -
        parseInt(_t(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(_t(r, "padding-top") || 0, 10) -
        parseInt(_t(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function U0() {
  const e = this;
  function t(P, I) {
    return parseFloat(P.getPropertyValue(e.getDirectionLabel(I)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: l, rtlTranslate: s, wrongRTL: a } = e,
    o = e.virtual && n.virtual.enabled,
    u = o ? e.virtual.slides.length : e.slides.length,
    c = ut(i, `.${e.params.slideClass}, swiper-slide`),
    f = o ? e.virtual.slides.length : c.length;
  let h = [];
  const v = [],
    g = [];
  let y = n.slidesOffsetBefore;
  typeof y == "function" && (y = n.slidesOffsetBefore.call(e));
  let S = n.slidesOffsetAfter;
  typeof S == "function" && (S = n.slidesOffsetAfter.call(e));
  const p = e.snapGrid.length,
    d = e.slidesGrid.length;
  let m = n.spaceBetween,
    w = -y,
    x = 0,
    C = 0;
  if (typeof l > "u") return;
  typeof m == "string" && m.indexOf("%") >= 0
    ? (m = (parseFloat(m.replace("%", "")) / 100) * l)
    : typeof m == "string" && (m = parseFloat(m)),
    (e.virtualSize = -m),
    c.forEach((P) => {
      s ? (P.style.marginLeft = "") : (P.style.marginRight = ""),
        (P.style.marginBottom = ""),
        (P.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (Ei(r, "--swiper-centered-offset-before", ""),
      Ei(r, "--swiper-centered-offset-after", ""));
  const R = n.grid && n.grid.rows > 1 && e.grid;
  R ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
  let L;
  const N =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (P) => typeof n.breakpoints[P].slidesPerView < "u",
    ).length > 0;
  for (let P = 0; P < f; P += 1) {
    L = 0;
    let I;
    if (
      (c[P] && (I = c[P]),
      R && e.grid.updateSlide(P, I, c),
      !(c[P] && _t(I, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        N && (c[P].style[e.getDirectionLabel("width")] = "");
        const z = getComputedStyle(I),
          b = I.style.transform,
          _ = I.style.webkitTransform;
        if (
          (b && (I.style.transform = "none"),
          _ && (I.style.webkitTransform = "none"),
          n.roundLengths)
        )
          L = e.isHorizontal() ? Lo(I, "width") : Lo(I, "height");
        else {
          const D = t(z, "width"),
            B = t(z, "padding-left"),
            ie = t(z, "padding-right"),
            O = t(z, "margin-left"),
            A = t(z, "margin-right"),
            F = z.getPropertyValue("box-sizing");
          if (F && F === "border-box") L = D + O + A;
          else {
            const { clientWidth: W, offsetWidth: J } = I;
            L = D + B + ie + O + A + (J - W);
          }
        }
        b && (I.style.transform = b),
          _ && (I.style.webkitTransform = _),
          n.roundLengths && (L = Math.floor(L));
      } else
        (L = (l - (n.slidesPerView - 1) * m) / n.slidesPerView),
          n.roundLengths && (L = Math.floor(L)),
          c[P] && (c[P].style[e.getDirectionLabel("width")] = `${L}px`);
      c[P] && (c[P].swiperSlideSize = L),
        g.push(L),
        n.centeredSlides
          ? ((w = w + L / 2 + x / 2 + m),
            x === 0 && P !== 0 && (w = w - l / 2 - m),
            P === 0 && (w = w - l / 2 - m),
            Math.abs(w) < 1 / 1e3 && (w = 0),
            n.roundLengths && (w = Math.floor(w)),
            C % n.slidesPerGroup === 0 && h.push(w),
            v.push(w))
          : (n.roundLengths && (w = Math.floor(w)),
            (C - Math.min(e.params.slidesPerGroupSkip, C)) %
              e.params.slidesPerGroup ===
              0 && h.push(w),
            v.push(w),
            (w = w + L + m)),
        (e.virtualSize += L + m),
        (x = L),
        (C += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, l) + S),
    s &&
      a &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (r.style.width = `${e.virtualSize + m}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + m}px`),
    R && e.grid.updateWrapperSize(L, h),
    !n.centeredSlides)
  ) {
    const P = [];
    for (let I = 0; I < h.length; I += 1) {
      let z = h[I];
      n.roundLengths && (z = Math.floor(z)),
        h[I] <= e.virtualSize - l && P.push(z);
    }
    (h = P),
      Math.floor(e.virtualSize - l) - Math.floor(h[h.length - 1]) > 1 &&
        h.push(e.virtualSize - l);
  }
  if (o && n.loop) {
    const P = g[0] + m;
    if (n.slidesPerGroup > 1) {
      const I = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup,
        ),
        z = P * n.slidesPerGroup;
      for (let b = 0; b < I; b += 1) h.push(h[h.length - 1] + z);
    }
    for (let I = 0; I < e.virtual.slidesBefore + e.virtual.slidesAfter; I += 1)
      n.slidesPerGroup === 1 && h.push(h[h.length - 1] + P),
        v.push(v[v.length - 1] + P),
        (e.virtualSize += P);
  }
  if ((h.length === 0 && (h = [0]), m !== 0)) {
    const P =
      e.isHorizontal() && s ? "marginLeft" : e.getDirectionLabel("marginRight");
    c.filter((I, z) =>
      !n.cssMode || n.loop ? !0 : z !== c.length - 1,
    ).forEach((I) => {
      I.style[P] = `${m}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let P = 0;
    g.forEach((z) => {
      P += z + (m || 0);
    }),
      (P -= m);
    const I = P > l ? P - l : 0;
    h = h.map((z) => (z <= 0 ? -y : z > I ? I + S : z));
  }
  if (n.centerInsufficientSlides) {
    let P = 0;
    g.forEach((z) => {
      P += z + (m || 0);
    }),
      (P -= m);
    const I = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
    if (P + I < l) {
      const z = (l - P - I) / 2;
      h.forEach((b, _) => {
        h[_] = b - z;
      }),
        v.forEach((b, _) => {
          v[_] = b + z;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: c,
      snapGrid: h,
      slidesGrid: v,
      slidesSizesGrid: g,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    Ei(r, "--swiper-centered-offset-before", `${-h[0]}px`),
      Ei(
        r,
        "--swiper-centered-offset-after",
        `${e.size / 2 - g[g.length - 1] / 2}px`,
      );
    const P = -e.snapGrid[0],
      I = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((z) => z + P)),
      (e.slidesGrid = e.slidesGrid.map((z) => z + I));
  }
  if (
    (f !== u && e.emit("slidesLengthChange"),
    h.length !== p &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    v.length !== d && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !o && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const P = `${n.containerModifierClass}backface-hidden`,
      I = e.el.classList.contains(P);
    f <= n.maxBackfaceHiddenSlides
      ? I || e.el.classList.add(P)
      : I && e.el.classList.remove(P);
  }
}
function W0(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    l;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const s = (a) => (r ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((a) => {
        n.push(a);
      });
    else
      for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
        const a = t.activeIndex + l;
        if (a > t.slides.length && !r) break;
        n.push(s(a));
      }
  else n.push(s(t.activeIndex));
  for (l = 0; l < n.length; l += 1)
    if (typeof n[l] < "u") {
      const a = n[l].offsetHeight;
      i = a > i ? a : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function $0() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
const pc = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function G0(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: l } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let s = -e;
  i && (s = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
  let a = n.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0
    ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
    : typeof a == "string" && (a = parseFloat(a));
  for (let o = 0; o < r.length; o += 1) {
    const u = r[o];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
    const f =
        (s + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + a),
      h =
        (s - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + a),
      v = -(s - c),
      g = v + t.slidesSizesGrid[o],
      y = v >= 0 && v <= t.size - t.slidesSizesGrid[o],
      S =
        (v >= 0 && v < t.size - 1) ||
        (g > 1 && g <= t.size) ||
        (v <= 0 && g >= t.size);
    S && (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(o)),
      pc(u, S, n.slideVisibleClass),
      pc(u, y, n.slideFullyVisibleClass),
      (u.progress = i ? -f : f),
      (u.originalProgress = i ? -h : h);
  }
}
function K0(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: l, isEnd: s, progressLoop: a } = t;
  const o = l,
    u = s;
  if (r === 0) (i = 0), (l = !0), (s = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const c = Math.abs(e - t.minTranslate()) < 1,
      f = Math.abs(e - t.maxTranslate()) < 1;
    (l = c || i <= 0), (s = f || i >= 1), c && (i = 0), f && (i = 1);
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      f = t.getSlideIndexByData(t.slides.length - 1),
      h = t.slidesGrid[c],
      v = t.slidesGrid[f],
      g = t.slidesGrid[t.slidesGrid.length - 1],
      y = Math.abs(e);
    y >= h ? (a = (y - h) / g) : (a = (y + g - v) / g), a > 1 && (a -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: a, isBeginning: l, isEnd: s }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    l && !o && t.emit("reachBeginning toEdge"),
    s && !u && t.emit("reachEnd toEdge"),
    ((o && !l) || (u && !s)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
const Ts = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function Y0() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    l = e.virtual && n.virtual.enabled,
    s = e.grid && n.grid && n.grid.rows > 1,
    a = (f) => ut(r, `.${n.slideClass}${f}, swiper-slide${f}`)[0];
  let o, u, c;
  if (l)
    if (n.loop) {
      let f = i - e.virtual.slidesBefore;
      f < 0 && (f = e.virtual.slides.length + f),
        f >= e.virtual.slides.length && (f -= e.virtual.slides.length),
        (o = a(`[data-swiper-slide-index="${f}"]`));
    } else o = a(`[data-swiper-slide-index="${i}"]`);
  else
    s
      ? ((o = t.filter((f) => f.column === i)[0]),
        (c = t.filter((f) => f.column === i + 1)[0]),
        (u = t.filter((f) => f.column === i - 1)[0]))
      : (o = t[i]);
  o &&
    (s ||
      ((c = R0(o, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c && (c = t[0]),
      (u = O0(o, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u === 0 && (u = t[t.length - 1]))),
    t.forEach((f) => {
      Ts(f, f === o, n.slideActiveClass),
        Ts(f, f === c, n.slideNextClass),
        Ts(f, f === u, n.slidePrevClass);
    }),
    e.emitSlidesClasses();
}
const Di = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  Cs = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  No = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const s = i,
        a = [s - t];
      a.push(...Array.from({ length: t }).map((o, u) => s + r + u)),
        e.slides.forEach((o, u) => {
          a.includes(o.column) && Cs(e, u);
        });
      return;
    }
    const l = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let s = i - t; s <= l + t; s += 1) {
        const a = ((s % n) + n) % n;
        (a < i || a > l) && Cs(e, a);
      }
    else
      for (let s = Math.max(i - t, 0); s <= Math.min(l + t, n - 1); s += 1)
        s !== i && (s > l || s < i) && Cs(e, s);
  };
function q0(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let l = 0; l < t.length; l += 1)
    typeof t[l + 1] < "u"
      ? r >= t[l] && r < t[l + 1] - (t[l + 1] - t[l]) / 2
        ? (i = l)
        : r >= t[l] && r < t[l + 1] && (i = l + 1)
      : r >= t[l] && (i = l);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function X0(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: l, realIndex: s, snapIndex: a } = t;
  let o = e,
    u;
  const c = (v) => {
    let g = v - t.virtual.slidesBefore;
    return (
      g < 0 && (g = t.virtual.slides.length + g),
      g >= t.virtual.slides.length && (g -= t.virtual.slides.length),
      g
    );
  };
  if ((typeof o > "u" && (o = q0(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
  else {
    const v = Math.min(i.slidesPerGroupSkip, o);
    u = v + Math.floor((o - v) / i.slidesPerGroup);
  }
  if ((u >= r.length && (u = r.length - 1), o === l && !t.params.loop)) {
    u !== a && ((t.snapIndex = u), t.emit("snapIndexChange"));
    return;
  }
  if (o === l && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = c(o);
    return;
  }
  const f = t.grid && i.grid && i.grid.rows > 1;
  let h;
  if (t.virtual && i.virtual.enabled && i.loop) h = c(o);
  else if (f) {
    const v = t.slides.filter((y) => y.column === o)[0];
    let g = parseInt(v.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(g) && (g = Math.max(t.slides.indexOf(v), 0)),
      (h = Math.floor(g / i.grid.rows));
  } else if (t.slides[o]) {
    const v = t.slides[o].getAttribute("data-swiper-slide-index");
    v ? (h = parseInt(v, 10)) : (h = o);
  } else h = o;
  Object.assign(t, {
    previousSnapIndex: a,
    snapIndex: u,
    previousRealIndex: s,
    realIndex: h,
    previousIndex: l,
    activeIndex: o,
  }),
    t.initialized && No(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (s !== h && t.emit("realIndexChange"), t.emit("slideChange"));
}
function Q0(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
      !i && a.matches && a.matches(`.${r.slideClass}, swiper-slide`) && (i = a);
    });
  let l = !1,
    s;
  if (i) {
    for (let a = 0; a < n.slides.length; a += 1)
      if (n.slides[a] === i) {
        (l = !0), (s = a);
        break;
      }
  }
  if (i && l)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10,
          ))
        : (n.clickedIndex = s);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var J0 = {
  updateSize: H0,
  updateSlides: U0,
  updateAutoHeight: W0,
  updateSlidesOffset: $0,
  updateSlidesProgress: G0,
  updateProgress: K0,
  updateSlidesClasses: Y0,
  updateActiveIndex: X0,
  updateClickedSlide: Q0,
};
function Z0(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: l } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let s = k0(l, e);
  return (s += t.cssOverflowAdjustment()), r && (s = -s), s || 0;
}
function ey(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: l, progress: s } = n;
  let a = 0,
    o = 0;
  const u = 0;
  n.isHorizontal() ? (a = r ? -e : e) : (o = e),
    i.roundLengths && ((a = Math.floor(a)), (o = Math.floor(o))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : o),
    i.cssMode
      ? (l[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -a
          : -o)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (a -= n.cssOverflowAdjustment())
          : (o -= n.cssOverflowAdjustment()),
        (l.style.transform = `translate3d(${a}px, ${o}px, ${u}px)`));
  let c;
  const f = n.maxTranslate() - n.minTranslate();
  f === 0 ? (c = 0) : (c = (e - n.minTranslate()) / f),
    c !== s && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function ty() {
  return -this.snapGrid[0];
}
function ny() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function ry(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const l = this,
    { params: s, wrapperEl: a } = l;
  if (l.animating && s.preventInteractionOnTransition) return !1;
  const o = l.minTranslate(),
    u = l.maxTranslate();
  let c;
  if (
    (r && e > o ? (c = o) : r && e < u ? (c = u) : (c = e),
    l.updateProgress(c),
    s.cssMode)
  ) {
    const f = l.isHorizontal();
    if (t === 0) a[f ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!l.support.smoothScroll)
        return (
          dp({ swiper: l, targetPosition: -c, side: f ? "left" : "top" }), !0
        );
      a.scrollTo({ [f ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (l.setTransition(0),
        l.setTranslate(c),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionEnd")))
      : (l.setTransition(t),
        l.setTranslate(c),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionStart")),
        l.animating ||
          ((l.animating = !0),
          l.onTranslateToWrapperTransitionEnd ||
            (l.onTranslateToWrapperTransitionEnd = function (h) {
              !l ||
                l.destroyed ||
                (h.target === this &&
                  (l.wrapperEl.removeEventListener(
                    "transitionend",
                    l.onTranslateToWrapperTransitionEnd,
                  ),
                  (l.onTranslateToWrapperTransitionEnd = null),
                  delete l.onTranslateToWrapperTransitionEnd,
                  (l.animating = !1),
                  n && l.emit("transitionEnd")));
            }),
          l.wrapperEl.addEventListener(
            "transitionend",
            l.onTranslateToWrapperTransitionEnd,
          ))),
    !0
  );
}
var iy = {
  getTranslate: Z0,
  setTranslate: ey,
  minTranslate: ty,
  maxTranslate: ny,
  translateTo: ry,
};
function ly(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function hp(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: l, previousIndex: s } = t;
  let a = r;
  if (
    (a || (l > s ? (a = "next") : l < s ? (a = "prev") : (a = "reset")),
    t.emit(`transition${i}`),
    n && l !== s)
  ) {
    if (a === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      a === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function sy(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    hp({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function oy(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      hp({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var ay = { setTransition: ly, transitionStart: sy, transitionEnd: oy };
function uy(e, t, n, r, i) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const l = this;
  let s = e;
  s < 0 && (s = 0);
  const {
    params: a,
    snapGrid: o,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: f,
    rtlTranslate: h,
    wrapperEl: v,
    enabled: g,
  } = l;
  if (
    (!g && !r && !i) ||
    l.destroyed ||
    (l.animating && a.preventInteractionOnTransition)
  )
    return !1;
  typeof t > "u" && (t = l.params.speed);
  const y = Math.min(l.params.slidesPerGroupSkip, s);
  let S = y + Math.floor((s - y) / l.params.slidesPerGroup);
  S >= o.length && (S = o.length - 1);
  const p = -o[S];
  if (a.normalizeSlideIndex)
    for (let x = 0; x < u.length; x += 1) {
      const C = -Math.floor(p * 100),
        R = Math.floor(u[x] * 100),
        L = Math.floor(u[x + 1] * 100);
      typeof u[x + 1] < "u"
        ? C >= R && C < L - (L - R) / 2
          ? (s = x)
          : C >= R && C < L && (s = x + 1)
        : C >= R && (s = x);
    }
  if (
    l.initialized &&
    s !== f &&
    ((!l.allowSlideNext &&
      (h
        ? p > l.translate && p > l.minTranslate()
        : p < l.translate && p < l.minTranslate())) ||
      (!l.allowSlidePrev &&
        p > l.translate &&
        p > l.maxTranslate() &&
        (f || 0) !== s))
  )
    return !1;
  s !== (c || 0) && n && l.emit("beforeSlideChangeStart"), l.updateProgress(p);
  let d;
  s > f ? (d = "next") : s < f ? (d = "prev") : (d = "reset");
  const m = l.virtual && l.params.virtual.enabled;
  if (!(m && i) && ((h && -p === l.translate) || (!h && p === l.translate)))
    return (
      l.updateActiveIndex(s),
      a.autoHeight && l.updateAutoHeight(),
      l.updateSlidesClasses(),
      a.effect !== "slide" && l.setTranslate(p),
      d !== "reset" && (l.transitionStart(n, d), l.transitionEnd(n, d)),
      !1
    );
  if (a.cssMode) {
    const x = l.isHorizontal(),
      C = h ? p : -p;
    if (t === 0)
      m &&
        ((l.wrapperEl.style.scrollSnapType = "none"),
        (l._immediateVirtual = !0)),
        m && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
          ? ((l._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              v[x ? "scrollLeft" : "scrollTop"] = C;
            }))
          : (v[x ? "scrollLeft" : "scrollTop"] = C),
        m &&
          requestAnimationFrame(() => {
            (l.wrapperEl.style.scrollSnapType = ""), (l._immediateVirtual = !1);
          });
    else {
      if (!l.support.smoothScroll)
        return (
          dp({ swiper: l, targetPosition: C, side: x ? "left" : "top" }), !0
        );
      v.scrollTo({ [x ? "left" : "top"]: C, behavior: "smooth" });
    }
    return !0;
  }
  return (
    l.setTransition(t),
    l.setTranslate(p),
    l.updateActiveIndex(s),
    l.updateSlidesClasses(),
    l.emit("beforeTransitionStart", t, r),
    l.transitionStart(n, d),
    t === 0
      ? l.transitionEnd(n, d)
      : l.animating ||
        ((l.animating = !0),
        l.onSlideToWrapperTransitionEnd ||
          (l.onSlideToWrapperTransitionEnd = function (C) {
            !l ||
              l.destroyed ||
              (C.target === this &&
                (l.wrapperEl.removeEventListener(
                  "transitionend",
                  l.onSlideToWrapperTransitionEnd,
                ),
                (l.onSlideToWrapperTransitionEnd = null),
                delete l.onSlideToWrapperTransitionEnd,
                l.transitionEnd(n, d)));
          }),
        l.wrapperEl.addEventListener(
          "transitionend",
          l.onSlideToWrapperTransitionEnd,
        )),
    !0
  );
}
function cy(e, t, n, r) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  typeof t > "u" && (t = i.params.speed);
  const l = i.grid && i.params.grid && i.params.grid.rows > 1;
  let s = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) s = s + i.virtual.slidesBefore;
    else {
      let a;
      if (l) {
        const h = s * i.params.grid.rows;
        a = i.slides.filter(
          (v) => v.getAttribute("data-swiper-slide-index") * 1 === h,
        )[0].column;
      } else a = i.getSlideIndexByData(s);
      const o = l
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: u } = i.params;
      let c = i.params.slidesPerView;
      c === "auto"
        ? (c = i.slidesPerViewDynamic())
        : ((c = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          u && c % 2 === 0 && (c = c + 1));
      let f = o - a < c;
      if (
        (u && (f = f || a < Math.ceil(c / 2)),
        r && u && i.params.slidesPerView !== "auto" && !l && (f = !1),
        f)
      ) {
        const h = u
          ? a < i.activeIndex
            ? "prev"
            : "next"
          : a - i.activeIndex - 1 < i.params.slidesPerView
            ? "next"
            : "prev";
        i.loopFix({
          direction: h,
          slideTo: !0,
          activeSlideIndex: h === "next" ? a + 1 : a - o + 1,
          slideRealIndex: h === "next" ? i.realIndex : void 0,
        });
      }
      if (l) {
        const h = s * i.params.grid.rows;
        s = i.slides.filter(
          (v) => v.getAttribute("data-swiper-slide-index") * 1 === h,
        )[0].column;
      } else s = i.getSlideIndexByData(s);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(s, t, n, r);
    }),
    i
  );
}
function dy(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: l, animating: s } = r;
  if (!i || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  let a = l.slidesPerGroup;
  l.slidesPerView === "auto" &&
    l.slidesPerGroup === 1 &&
    l.slidesPerGroupAuto &&
    (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const o = r.activeIndex < l.slidesPerGroupSkip ? 1 : a,
    u = r.virtual && l.virtual.enabled;
  if (l.loop) {
    if (s && !u && l.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && l.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + o, e, t, n);
        }),
        !0
      );
  }
  return l.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + o, e, t, n);
}
function fy(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: l,
      slidesGrid: s,
      rtlTranslate: a,
      enabled: o,
      animating: u,
    } = r;
  if (!o || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  const c = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (u && !c && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const f = a ? r.translate : -r.translate;
  function h(p) {
    return p < 0 ? -Math.floor(Math.abs(p)) : Math.floor(p);
  }
  const v = h(f),
    g = l.map((p) => h(p));
  let y = l[g.indexOf(v) - 1];
  if (typeof y > "u" && i.cssMode) {
    let p;
    l.forEach((d, m) => {
      v >= d && (p = m);
    }),
      typeof p < "u" && (y = l[p > 0 ? p - 1 : p]);
  }
  let S = 0;
  if (
    (typeof y < "u" &&
      ((S = s.indexOf(y)),
      S < 0 && (S = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((S = S - r.slidesPerViewDynamic("previous", !0) + 1),
        (S = Math.max(S, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const p =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(p, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(S, e, t, n);
      }),
      !0
    );
  return r.slideTo(S, e, t, n);
}
function py(e, t, n) {
  t === void 0 && (t = !0);
  const r = this;
  if (!r.destroyed)
    return (
      typeof e > "u" && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
    );
}
function my(e, t, n, r) {
  t === void 0 && (t = !0), r === void 0 && (r = 0.5);
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  let l = i.activeIndex;
  const s = Math.min(i.params.slidesPerGroupSkip, l),
    a = s + Math.floor((l - s) / i.params.slidesPerGroup),
    o = i.rtlTranslate ? i.translate : -i.translate;
  if (o >= i.snapGrid[a]) {
    const u = i.snapGrid[a],
      c = i.snapGrid[a + 1];
    o - u > (c - u) * r && (l += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[a - 1],
      c = i.snapGrid[a];
    o - u <= (c - u) * r && (l -= i.params.slidesPerGroup);
  }
  return (
    (l = Math.max(l, 0)),
    (l = Math.min(l, i.slidesGrid.length - 1)),
    i.slideTo(l, e, t, n)
  );
}
function hy() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    l;
  const s = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (l = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              ut(n, `${s}[data-swiper-slide-index="${l}"]`)[0],
            )),
            ml(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              ut(n, `${s}[data-swiper-slide-index="${l}"]`)[0],
            )),
            ml(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i);
  } else e.slideTo(i);
}
var gy = {
  slideTo: uy,
  slideToLoop: cy,
  slideNext: dy,
  slidePrev: fy,
  slideReset: py,
  slideToClosest: my,
  slideToClickedSlide: hy,
};
function vy(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const i = () => {
      ut(r, `.${n.slideClass}, swiper-slide`).forEach((f, h) => {
        f.setAttribute("data-swiper-slide-index", h);
      });
    },
    l = t.grid && n.grid && n.grid.rows > 1,
    s = n.slidesPerGroup * (l ? n.grid.rows : 1),
    a = t.slides.length % s !== 0,
    o = l && t.slides.length % n.grid.rows !== 0,
    u = (c) => {
      for (let f = 0; f < c; f += 1) {
        const h = t.isElement
          ? Wr("swiper-slide", [n.slideBlankClass])
          : Wr("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(h);
      }
    };
  if (a) {
    if (n.loopAddBlankSlides) {
      const c = s - (t.slides.length % s);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      gl(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      );
    i();
  } else if (o) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - (t.slides.length % n.grid.rows);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      gl(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      );
    i();
  } else i();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function yy(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: l,
    byController: s,
    byMousewheel: a,
  } = e === void 0 ? {} : e;
  const o = this;
  if (!o.params.loop) return;
  o.emit("beforeLoopFix");
  const {
      slides: u,
      allowSlidePrev: c,
      allowSlideNext: f,
      slidesEl: h,
      params: v,
    } = o,
    { centeredSlides: g } = v;
  if (
    ((o.allowSlidePrev = !0),
    (o.allowSlideNext = !0),
    o.virtual && v.virtual.enabled)
  ) {
    n &&
      (!v.centeredSlides && o.snapIndex === 0
        ? o.slideTo(o.virtual.slides.length, 0, !1, !0)
        : v.centeredSlides && o.snapIndex < v.slidesPerView
          ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
          : o.snapIndex === o.snapGrid.length - 1 &&
            o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
      (o.allowSlidePrev = c),
      (o.allowSlideNext = f),
      o.emit("loopFix");
    return;
  }
  let y = v.slidesPerView;
  y === "auto"
    ? (y = o.slidesPerViewDynamic())
    : ((y = Math.ceil(parseFloat(v.slidesPerView, 10))),
      g && y % 2 === 0 && (y = y + 1));
  const S = v.slidesPerGroupAuto ? y : v.slidesPerGroup;
  let p = S;
  p % S !== 0 && (p += S - (p % S)),
    (p += v.loopAdditionalSlides),
    (o.loopedSlides = p);
  const d = o.grid && v.grid && v.grid.rows > 1;
  u.length < y + p
    ? gl(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
      )
    : d &&
      v.grid.fill === "row" &&
      gl(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
      );
  const m = [],
    w = [];
  let x = o.activeIndex;
  typeof l > "u"
    ? (l = o.getSlideIndex(
        u.filter((b) => b.classList.contains(v.slideActiveClass))[0],
      ))
    : (x = l);
  const C = r === "next" || !r,
    R = r === "prev" || !r;
  let L = 0,
    N = 0;
  const P = d ? Math.ceil(u.length / v.grid.rows) : u.length,
    z = (d ? u[l].column : l) + (g && typeof i > "u" ? -y / 2 + 0.5 : 0);
  if (z < p) {
    L = Math.max(p - z, S);
    for (let b = 0; b < p - z; b += 1) {
      const _ = b - Math.floor(b / P) * P;
      if (d) {
        const D = P - _ - 1;
        for (let B = u.length - 1; B >= 0; B -= 1)
          u[B].column === D && m.push(B);
      } else m.push(P - _ - 1);
    }
  } else if (z + y > P - p) {
    N = Math.max(z - (P - p * 2), S);
    for (let b = 0; b < N; b += 1) {
      const _ = b - Math.floor(b / P) * P;
      d
        ? u.forEach((D, B) => {
            D.column === _ && w.push(B);
          })
        : w.push(_);
    }
  }
  if (
    ((o.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      o.__preventObserver__ = !1;
    }),
    R &&
      m.forEach((b) => {
        (u[b].swiperLoopMoveDOM = !0),
          h.prepend(u[b]),
          (u[b].swiperLoopMoveDOM = !1);
      }),
    C &&
      w.forEach((b) => {
        (u[b].swiperLoopMoveDOM = !0),
          h.append(u[b]),
          (u[b].swiperLoopMoveDOM = !1);
      }),
    o.recalcSlides(),
    v.slidesPerView === "auto"
      ? o.updateSlides()
      : d &&
        ((m.length > 0 && R) || (w.length > 0 && C)) &&
        o.slides.forEach((b, _) => {
          o.grid.updateSlide(_, b, o.slides);
        }),
    v.watchSlidesProgress && o.updateSlidesOffset(),
    n)
  ) {
    if (m.length > 0 && R) {
      if (typeof t > "u") {
        const b = o.slidesGrid[x],
          D = o.slidesGrid[x + L] - b;
        a
          ? o.setTranslate(o.translate - D)
          : (o.slideTo(x + Math.ceil(L), 0, !1, !0),
            i &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - D),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - D)));
      } else if (i) {
        const b = d ? m.length / v.grid.rows : m.length;
        o.slideTo(o.activeIndex + b, 0, !1, !0),
          (o.touchEventsData.currentTranslate = o.translate);
      }
    } else if (w.length > 0 && C)
      if (typeof t > "u") {
        const b = o.slidesGrid[x],
          D = o.slidesGrid[x - N] - b;
        a
          ? o.setTranslate(o.translate - D)
          : (o.slideTo(x - N, 0, !1, !0),
            i &&
              ((o.touchEventsData.startTranslate =
                o.touchEventsData.startTranslate - D),
              (o.touchEventsData.currentTranslate =
                o.touchEventsData.currentTranslate - D)));
      } else {
        const b = d ? w.length / v.grid.rows : w.length;
        o.slideTo(o.activeIndex - b, 0, !1, !0);
      }
  }
  if (
    ((o.allowSlidePrev = c),
    (o.allowSlideNext = f),
    o.controller && o.controller.control && !s)
  ) {
    const b = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: l,
      byController: !0,
    };
    Array.isArray(o.controller.control)
      ? o.controller.control.forEach((_) => {
          !_.destroyed &&
            _.params.loop &&
            _.loopFix({
              ...b,
              slideTo: _.params.slidesPerView === v.slidesPerView ? n : !1,
            });
        })
      : o.controller.control instanceof o.constructor &&
        o.controller.control.params.loop &&
        o.controller.control.loopFix({
          ...b,
          slideTo:
            o.controller.control.params.slidesPerView === v.slidesPerView
              ? n
              : !1,
        });
  }
  o.emit("loopFix");
}
function wy() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const l =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[l] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var Sy = { loopCreate: vy, loopFix: yy, loopDestroy: wy };
function xy(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function Ey() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var Ty = { setGrabCursor: xy, unsetGrabCursor: Ey };
function Cy(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === Qe() || r === Re()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function mc(e, t, n) {
  const r = Re(),
    { params: i } = e,
    l = i.edgeSwipeDetection,
    s = i.edgeSwipeThreshold;
  return l && (n <= s || n >= r.innerWidth - s)
    ? l === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function ky(e) {
  const t = this,
    n = Qe();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const i = t.touchEventsData;
  if (r.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else
    r.type === "touchstart" &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    mc(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: l, touches: s, enabled: a } = t;
  if (
    !a ||
    (!l.simulateTouch && r.pointerType === "mouse") ||
    (t.animating && l.preventInteractionOnTransition)
  )
    return;
  !t.animating && l.cssMode && l.loop && t.loopFix();
  let o = r.target;
  if (
    (l.touchEventsTarget === "wrapper" && !L0(o, t.wrapperEl)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const u = !!l.noSwipingClass && l.noSwipingClass !== "",
    c = r.composedPath ? r.composedPath() : r.path;
  u && r.target && r.target.shadowRoot && c && (o = c[0]);
  const f = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
    h = !!(r.target && r.target.shadowRoot);
  if (l.noSwiping && (h ? Cy(f, o) : o.closest(f))) {
    t.allowClick = !0;
    return;
  }
  if (l.swipeHandler && !o.closest(l.swipeHandler)) return;
  (s.currentX = r.pageX), (s.currentY = r.pageY);
  const v = s.currentX,
    g = s.currentY;
  if (!mc(t, r, v)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (s.startX = v),
    (s.startY = g),
    (i.touchStartTime = hl()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    l.threshold > 0 && (i.allowThresholdMove = !1);
  let y = !0;
  o.matches(i.focusableElements) &&
    ((y = !1), o.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== o &&
      (r.pointerType === "mouse" ||
        (r.pointerType !== "mouse" && !o.matches(i.focusableElements))) &&
      n.activeElement.blur();
  const S = y && t.allowTouchMove && l.touchStartPreventDefault;
  (l.touchStartForcePreventDefault || S) &&
    !o.isContentEditable &&
    r.preventDefault(),
    l.freeMode &&
      l.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !l.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", r);
}
function Py(e) {
  const t = Qe(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: l, rtlTranslate: s, enabled: a } = n;
  if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let o = e;
  if (
    (o.originalEvent && (o = o.originalEvent),
    o.type === "pointermove" &&
      (r.touchId !== null || o.pointerId !== r.pointerId))
  )
    return;
  let u;
  if (o.type === "touchmove") {
    if (
      ((u = [...o.changedTouches].filter((C) => C.identifier === r.touchId)[0]),
      !u || u.identifier !== r.touchId)
    )
      return;
  } else u = o;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", o);
    return;
  }
  const c = u.pageX,
    f = u.pageY;
  if (o.preventedByNestedSwiper) {
    (l.startX = c), (l.startY = f);
    return;
  }
  if (!n.allowTouchMove) {
    o.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(l, { startX: c, startY: f, currentX: c, currentY: f }),
        (r.touchStartTime = hl()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (f < l.startY && n.translate <= n.maxTranslate()) ||
        (f > l.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (c < l.startX && n.translate <= n.maxTranslate()) ||
      (c > l.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    (t.activeElement &&
      t.activeElement.matches(r.focusableElements) &&
      t.activeElement !== o.target &&
      o.pointerType !== "mouse" &&
      t.activeElement.blur(),
    t.activeElement &&
      o.target === t.activeElement &&
      o.target.matches(r.focusableElements))
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit("touchMove", o),
    (l.previousX = l.currentX),
    (l.previousY = l.currentY),
    (l.currentX = c),
    (l.currentY = f);
  const h = l.currentX - l.startX,
    v = l.currentY - l.startY;
  if (n.params.threshold && Math.sqrt(h ** 2 + v ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let C;
    (n.isHorizontal() && l.currentY === l.startY) ||
    (n.isVertical() && l.currentX === l.startX)
      ? (r.isScrolling = !1)
      : h * h + v * v >= 25 &&
        ((C = (Math.atan2(Math.abs(v), Math.abs(h)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? C > i.touchAngle
          : 90 - C > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", o),
    typeof r.startMoving > "u" &&
      (l.currentX !== l.startX || l.currentY !== l.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (o.type === "touchmove" && r.preventTouchMoveFromPointerMove))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && o.cancelable && o.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && o.stopPropagation();
  let g = n.isHorizontal() ? h : v,
    y = n.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
  i.oneWayMovement &&
    ((g = Math.abs(g) * (s ? 1 : -1)), (y = Math.abs(y) * (s ? 1 : -1))),
    (l.diff = g),
    (g *= i.touchRatio),
    s && ((g = -g), (y = -y));
  const S = n.touchesDirection;
  (n.swipeDirection = g > 0 ? "prev" : "next"),
    (n.touchesDirection = y > 0 ? "prev" : "next");
  const p = n.params.loop && !i.cssMode,
    d =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (p && d && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const C = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      n.wrapperEl.dispatchEvent(C);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", o);
  }
  let m;
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      S !== n.touchesDirection &&
      p &&
      d &&
      Math.abs(g) >= 1)
  ) {
    Object.assign(l, {
      startX: c,
      startY: f,
      currentX: c,
      currentY: f,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit("sliderMove", o),
    (r.isMoved = !0),
    (r.currentTranslate = g + r.startTranslate);
  let w = !0,
    x = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (x = 0),
    g > 0
      ? (p &&
          d &&
          !m &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() -
                n.slidesSizesGrid[n.activeIndex + 1] -
                (i.slidesPerView !== "auto" &&
                n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween
                  : 0) -
                n.params.spaceBetween
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + g) ** x)))
      : g < 0 &&
        (p &&
          d &&
          !m &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                n.params.spaceBetween +
                (i.slidesPerView !== "auto" &&
                n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                    n.params.spaceBetween
                  : 0)
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - g) ** x))),
    w && (o.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(g) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (l.startX = l.currentX),
          (l.startY = l.currentY),
          (r.currentTranslate = r.startTranslate),
          (l.diff = n.isHorizontal()
            ? l.currentX - l.startX
            : l.currentY - l.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function Ly(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((i = [...r.changedTouches].filter((x) => x.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      r.type,
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: s,
    touches: a,
    rtlTranslate: o,
    slidesGrid: u,
    enabled: c,
  } = t;
  if (!c || (!s.simulateTouch && r.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && s.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  s.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const f = hl(),
    h = f - n.touchStartTime;
  if (t.allowClick) {
    const x = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((x && x[0]) || r.target, x),
      t.emit("tap click", r),
      h < 300 &&
        f - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", r);
  }
  if (
    ((n.lastClickTime = hl()),
    ml(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (a.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let v;
  if (
    (s.followFinger
      ? (v = o ? t.translate : -t.translate)
      : (v = -n.currentTranslate),
    s.cssMode)
  )
    return;
  if (s.freeMode && s.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: v });
    return;
  }
  const g = v >= -t.maxTranslate() && !t.params.loop;
  let y = 0,
    S = t.slidesSizesGrid[0];
  for (
    let x = 0;
    x < u.length;
    x += x < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
  ) {
    const C = x < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    typeof u[x + C] < "u"
      ? (g || (v >= u[x] && v < u[x + C])) && ((y = x), (S = u[x + C] - u[x]))
      : (g || v >= u[x]) && ((y = x), (S = u[u.length - 1] - u[u.length - 2]));
  }
  let p = null,
    d = null;
  s.rewind &&
    (t.isBeginning
      ? (d =
          s.virtual && s.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (p = 0));
  const m = (v - u[y]) / S,
    w = y < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
  if (h > s.longSwipesMs) {
    if (!s.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (m >= s.longSwipesRatio
        ? t.slideTo(s.rewind && t.isEnd ? p : y + w)
        : t.slideTo(y)),
      t.swipeDirection === "prev" &&
        (m > 1 - s.longSwipesRatio
          ? t.slideTo(y + w)
          : d !== null && m < 0 && Math.abs(m) > s.longSwipesRatio
            ? t.slideTo(d)
            : t.slideTo(y));
  } else {
    if (!s.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(y + w)
        : t.slideTo(y)
      : (t.swipeDirection === "next" && t.slideTo(p !== null ? p : y + w),
        t.swipeDirection === "prev" && t.slideTo(d !== null ? d : y));
  }
}
function hc() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: l } = e,
    s = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const a = s && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !a
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !s
      ? e.slideToLoop(e.realIndex, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
}
function Ny(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Oy() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const l = e.maxTranslate() - e.minTranslate();
  l === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / l),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function Ry(e) {
  const t = this;
  Di(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function by() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const gp = (e, t) => {
  const n = Qe(),
    { params: r, el: i, wrapperEl: l, device: s } = e,
    a = !!r.nested,
    o = t === "on" ? "addEventListener" : "removeEventListener",
    u = t;
  !i ||
    typeof i == "string" ||
    (n[o]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: a }),
    i[o]("touchstart", e.onTouchStart, { passive: !1 }),
    i[o]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[o]("touchmove", e.onTouchMove, { passive: !1, capture: a }),
    n[o]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
    n[o]("touchend", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[o]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[o]("click", e.onClick, !0),
    r.cssMode && l[o]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[u](
          s.ios || s.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          hc,
          !0,
        )
      : e[u]("observerUpdate", hc, !0),
    i[o]("load", e.onLoad, { capture: !0 }));
};
function zy() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = ky.bind(e)),
    (e.onTouchMove = Py.bind(e)),
    (e.onTouchEnd = Ly.bind(e)),
    (e.onDocumentTouchStart = by.bind(e)),
    t.cssMode && (e.onScroll = Oy.bind(e)),
    (e.onClick = Ny.bind(e)),
    (e.onLoad = Ry.bind(e)),
    gp(e, "on");
}
function My() {
  gp(this, "off");
}
var Ay = { attachEvents: zy, detachEvents: My };
const gc = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function _y() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    l = r.breakpoints;
  if (!l || (l && Object.keys(l).length === 0)) return;
  const s = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
  if (!s || e.currentBreakpoint === s) return;
  const o = (s in l ? l[s] : void 0) || e.originalParams,
    u = gc(e, r),
    c = gc(e, o),
    f = e.params.grabCursor,
    h = o.grabCursor,
    v = r.enabled;
  u && !c
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`,
      ),
      e.emitContainerClasses())
    : !u &&
      c &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((o.grid.fill && o.grid.fill === "column") ||
        (!o.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    f && !h ? e.unsetGrabCursor() : !f && h && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((m) => {
      if (typeof o[m] > "u") return;
      const w = r[m] && r[m].enabled,
        x = o[m] && o[m].enabled;
      w && !x && e[m].disable(), !w && x && e[m].enable();
    });
  const g = o.direction && o.direction !== r.direction,
    y = r.loop && (o.slidesPerView !== r.slidesPerView || g),
    S = r.loop;
  g && n && e.changeDirection(), ze(e.params, o);
  const p = e.params.enabled,
    d = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    v && !p ? e.disable() : !v && p && e.enable(),
    (e.currentBreakpoint = s),
    e.emit("_beforeBreakpoint", o),
    n &&
      (y
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !S && d
          ? (e.loopCreate(t), e.updateSlides())
          : S && !d && e.loopDestroy()),
    e.emit("breakpoint", o);
}
function Iy(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = Re(),
    l = t === "window" ? i.innerHeight : n.clientHeight,
    s = Object.keys(e).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const o = parseFloat(a.substr(1));
        return { value: l * o, point: a };
      }
      return { value: a, point: a };
    });
  s.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
  for (let a = 0; a < s.length; a += 1) {
    const { point: o, value: u } = s[a];
    t === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = o)
      : u <= n.clientWidth && (r = o);
  }
  return r || "max";
}
var Dy = { setBreakpoint: _y, getBreakpoint: Iy };
function jy(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function Fy() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: l } = e,
    s = jy(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: l.android },
        { ios: l.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass,
    );
  t.push(...s), i.classList.add(...t), e.emitContainerClasses();
}
function By() {
  const e = this,
    { el: t, classNames: n } = e;
  !t ||
    typeof t == "string" ||
    (t.classList.remove(...n), e.emitContainerClasses());
}
var Vy = { addClasses: Fy, removeClasses: By };
function Hy() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      l = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > l;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var Uy = { checkOverflow: Hy },
  Oo = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Wy(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      l = r[i];
    if (typeof l != "object" || l === null) {
      ze(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in l))
    ) {
      ze(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      ze(t, r);
  };
}
const ks = {
    eventsEmitter: V0,
    update: J0,
    translate: iy,
    transition: ay,
    slide: gy,
    loop: Sy,
    grabCursor: Ty,
    events: Ay,
    breakpoints: Dy,
    checkOverflow: Uy,
    classes: Vy,
  },
  Ps = {};
let Ba = class mt {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++)
      i[l] = arguments[l];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = ze({}, n)),
      t && !n.el && (n.el = t);
    const s = Qe();
    if (
      n.el &&
      typeof n.el == "string" &&
      s.querySelectorAll(n.el).length > 1
    ) {
      const c = [];
      return (
        s.querySelectorAll(n.el).forEach((f) => {
          const h = ze({}, n, { el: f });
          c.push(new mt(h));
        }),
        c
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = pp()),
      (a.device = mp({ userAgent: n.userAgent })),
      (a.browser = j0()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
    const o = {};
    a.modules.forEach((c) => {
      c({
        params: n,
        swiper: a,
        extendParams: Wy(n, o),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      });
    });
    const u = ze({}, Oo, o);
    return (
      (a.params = ze({}, u, Ps, n)),
      (a.originalParams = ze({}, a.params)),
      (a.passedParams = ze({}, n)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((c) => {
          a.on(c, a.params.on[c]);
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return a.params.direction === "horizontal";
        },
        isVertical() {
          return a.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      a.emit("_swiper"),
      a.params.init && a.init(),
      a
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = ut(n, `.${r.slideClass}, swiper-slide`),
      l = vl(i[0]);
    return vl(t) - l;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t,
      )[0],
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = ut(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      s = (r.maxTranslate() - i) * t + i;
    r.translateTo(s, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0,
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0,
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: l,
        slidesGrid: s,
        slidesSizesGrid: a,
        size: o,
        activeIndex: u,
      } = r;
    let c = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let f = l[u] ? Math.ceil(l[u].swiperSlideSize) : 0,
        h;
      for (let v = u + 1; v < l.length; v += 1)
        l[v] &&
          !h &&
          ((f += Math.ceil(l[v].swiperSlideSize)), (c += 1), f > o && (h = !0));
      for (let v = u - 1; v >= 0; v -= 1)
        l[v] &&
          !h &&
          ((f += l[v].swiperSlideSize), (c += 1), f > o && (h = !0));
    } else if (t === "current")
      for (let f = u + 1; f < l.length; f += 1)
        (n ? s[f] + a[f] - s[u] < o : s[f] - s[u] < o) && (c += 1);
    else for (let f = u - 1; f >= 0; f -= 1) s[u] - s[f] < o && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((s) => {
        s.complete && Di(t, s);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const s = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let l;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const s = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        l = t.slideTo(s.length - 1, 0, !1, !0);
      } else l = t.slideTo(t.activeIndex, 0, !1, !0);
      l || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((l) => {
          t === "vertical" ? (l.style.width = "") : (l.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let s =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : ut(r, i())[0];
    return (
      !s &&
        n.params.createElements &&
        ((s = Wr("div", n.params.wrapperClass)),
        r.append(s),
        ut(r, `.${n.params.slideClass}`).forEach((a) => {
          s.append(a);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: s,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : s,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || _t(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || _t(r, "direction") === "rtl"),
        wrongRTL: _t(s, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0,
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0,
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((l) => {
        l.complete
          ? Di(n, l)
          : l.addEventListener("load", (s) => {
              Di(n, s.target);
            });
      }),
      No(n),
      (n.initialized = !0),
      No(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: l, wrapperEl: s, slides: a } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          l && typeof l != "string" && l.removeAttribute("style"),
          s && s.removeAttribute("style"),
          a &&
            a.length &&
            a.forEach((o) => {
              o.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass,
              ),
                o.removeAttribute("style"),
                o.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((o) => {
          r.off(o);
        }),
        t !== !1 &&
          (r.el && typeof r.el != "string" && (r.el.swiper = null), T0(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    ze(Ps, t);
  }
  static get extendedDefaults() {
    return Ps;
  }
  static get defaults() {
    return Oo;
  }
  static installModule(t) {
    mt.prototype.__modules__ || (mt.prototype.__modules__ = []);
    const n = mt.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => mt.installModule(n)), mt)
      : (mt.installModule(t), mt);
  }
};
Object.keys(ks).forEach((e) => {
  Object.keys(ks[e]).forEach((t) => {
    Ba.prototype[t] = ks[e][t];
  });
});
Ba.use([F0, B0]);
const vp = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function mn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function Fn(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : mn(t[r]) && mn(e[r]) && Object.keys(t[r]).length > 0
          ? t[r].__swiper__
            ? (e[r] = t[r])
            : Fn(e[r], t[r])
          : (e[r] = t[r]);
    });
}
function yp(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function wp(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function Sp(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function xp(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function $y(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function Gy(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: l,
    prevEl: s,
    scrollbarEl: a,
    paginationEl: o,
  } = e;
  const u = i.filter(
      (N) => N !== "children" && N !== "direction" && N !== "wrapperClass",
    ),
    {
      params: c,
      pagination: f,
      navigation: h,
      scrollbar: v,
      virtual: g,
      thumbs: y,
    } = t;
  let S, p, d, m, w, x, C, R;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    !r.thumbs.swiper.destroyed &&
    c.thumbs &&
    (!c.thumbs.swiper || c.thumbs.swiper.destroyed) &&
    (S = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      c.controller &&
      !c.controller.control &&
      (p = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || o) &&
      (c.pagination || c.pagination === !1) &&
      f &&
      !f.el &&
      (d = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || a) &&
      (c.scrollbar || c.scrollbar === !1) &&
      v &&
      !v.el &&
      (m = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || s) &&
      (r.navigation.nextEl || l) &&
      (c.navigation || c.navigation === !1) &&
      h &&
      !h.prevEl &&
      !h.nextEl &&
      (w = !0);
  const L = (N) => {
    t[N] &&
      (t[N].destroy(),
      N === "navigation"
        ? (t.isElement && (t[N].prevEl.remove(), t[N].nextEl.remove()),
          (c[N].prevEl = void 0),
          (c[N].nextEl = void 0),
          (t[N].prevEl = void 0),
          (t[N].nextEl = void 0))
        : (t.isElement && t[N].el.remove(),
          (c[N].el = void 0),
          (t[N].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (c.loop && !r.loop ? (x = !0) : !c.loop && r.loop ? (C = !0) : (R = !0)),
    u.forEach((N) => {
      if (mn(c[N]) && mn(r[N]))
        Object.assign(c[N], r[N]),
          (N === "navigation" || N === "pagination" || N === "scrollbar") &&
            "enabled" in r[N] &&
            !r[N].enabled &&
            L(N);
      else {
        const P = r[N];
        (P === !0 || P === !1) &&
        (N === "navigation" || N === "pagination" || N === "scrollbar")
          ? P === !1 && L(N)
          : (c[N] = r[N]);
      }
    }),
    u.includes("controller") &&
      !p &&
      t.controller &&
      t.controller.control &&
      c.controller &&
      c.controller.control &&
      (t.controller.control = c.controller.control),
    i.includes("children") && n && g && c.virtual.enabled
      ? ((g.slides = n), g.update(!0))
      : i.includes("virtual") &&
        g &&
        c.virtual.enabled &&
        (n && (g.slides = n), g.update(!0)),
    i.includes("children") && n && c.loop && (R = !0),
    S && y.init() && y.update(!0),
    p && (t.controller.control = c.controller.control),
    d &&
      (t.isElement &&
        (!o || typeof o == "string") &&
        ((o = document.createElement("div")),
        o.classList.add("swiper-pagination"),
        o.part.add("pagination"),
        t.el.appendChild(o)),
      o && (c.pagination.el = o),
      f.init(),
      f.render(),
      f.update()),
    m &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-scrollbar"),
        a.part.add("scrollbar"),
        t.el.appendChild(a)),
      a && (c.scrollbar.el = a),
      v.init(),
      v.updateSize(),
      v.setTranslate()),
    w &&
      (t.isElement &&
        ((!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-button-next"),
          (l.innerHTML = t.hostEl.constructor.nextButtonSvg),
          l.part.add("button-next"),
          t.el.appendChild(l)),
        (!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-prev"),
          (s.innerHTML = t.hostEl.constructor.prevButtonSvg),
          s.part.add("button-prev"),
          t.el.appendChild(s))),
      l && (c.navigation.nextEl = l),
      s && (c.navigation.prevEl = s),
      h.init(),
      h.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (x || R) && t.loopDestroy(),
    (C || R) && t.loopCreate(),
    t.update();
}
function Ky(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  Fn(n, Oo), (n._emitClasses = !0), (n.init = !1);
  const l = {},
    s = vp.map((o) => o.replace(/_/, "")),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((o) => {
      typeof e[o] > "u" ||
        (s.indexOf(o) >= 0
          ? mn(e[o])
            ? ((n[o] = {}), (i[o] = {}), Fn(n[o], e[o]), Fn(i[o], e[o]))
            : ((n[o] = e[o]), (i[o] = e[o]))
          : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function"
            ? t
              ? (r[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
              : (n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
            : (l[o] = e[o]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((o) => {
      n[o] === !0 && (n[o] = {}), n[o] === !1 && delete n[o];
    }),
    { params: n, passedParams: i, rest: l, events: r }
  );
}
function Yy(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: l,
    scrollbarEl: s,
    swiper: a,
  } = e;
  yp(t) &&
    r &&
    i &&
    ((a.params.navigation.nextEl = r),
    (a.originalParams.navigation.nextEl = r),
    (a.params.navigation.prevEl = i),
    (a.originalParams.navigation.prevEl = i)),
    wp(t) &&
      l &&
      ((a.params.pagination.el = l), (a.originalParams.pagination.el = l)),
    Sp(t) &&
      s &&
      ((a.params.scrollbar.el = s), (a.originalParams.scrollbar.el = s)),
    a.init(n);
}
function qy(e, t, n, r, i) {
  const l = [];
  if (!t) return l;
  const s = (o) => {
    l.indexOf(o) < 0 && l.push(o);
  };
  if (n && r) {
    const o = r.map(i),
      u = n.map(i);
    o.join("") !== u.join("") && s("children"),
      r.length !== n.length && s("children");
  }
  return (
    vp
      .filter((o) => o[0] === "_")
      .map((o) => o.replace(/_/, ""))
      .forEach((o) => {
        if (o in e && o in t)
          if (mn(e[o]) && mn(t[o])) {
            const u = Object.keys(e[o]),
              c = Object.keys(t[o]);
            u.length !== c.length
              ? s(o)
              : (u.forEach((f) => {
                  e[o][f] !== t[o][f] && s(o);
                }),
                c.forEach((f) => {
                  e[o][f] !== t[o][f] && s(o);
                }));
          } else e[o] !== t[o] && s(o);
      }),
    l
  );
}
const Xy = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function yl() {
  return (
    (yl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yl.apply(this, arguments)
  );
}
function Ep(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function Tp(e) {
  const t = [];
  return (
    G.Children.toArray(e).forEach((n) => {
      Ep(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          Tp(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function Qy(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    G.Children.toArray(e).forEach((r) => {
      if (Ep(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = Tp(r.props.children);
        i.length > 0 ? i.forEach((l) => t.push(l)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function Jy(e, t, n) {
  if (!n) return null;
  const r = (c) => {
      let f = c;
      return (
        c < 0 ? (f = t.length + c) : f >= t.length && (f = f - t.length), f
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: l, to: s } = n,
    a = e.params.loop ? -t.length : 0,
    o = e.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let c = a; c < o; c += 1) c >= l && c <= s && u.push(t[r(c)]);
  return u.map((c, f) =>
    G.cloneElement(c, {
      swiper: e,
      style: i,
      key: c.props.virtualIndex || c.key || `slide-${f}`,
    }),
  );
}
function kr(e, t) {
  return typeof window > "u" ? T.useEffect(e, t) : T.useLayoutEffect(e, t);
}
const vc = T.createContext(null),
  Zy = T.createContext(null),
  Cp = T.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: l,
        onSwiper: s,
        ...a
      } = e === void 0 ? {} : e,
      o = !1;
    const [u, c] = T.useState("swiper"),
      [f, h] = T.useState(null),
      [v, g] = T.useState(!1),
      y = T.useRef(!1),
      S = T.useRef(null),
      p = T.useRef(null),
      d = T.useRef(null),
      m = T.useRef(null),
      w = T.useRef(null),
      x = T.useRef(null),
      C = T.useRef(null),
      R = T.useRef(null),
      { params: L, passedParams: N, rest: P, events: I } = Ky(a),
      { slides: z, slots: b } = Qy(l),
      _ = () => {
        g(!v);
      };
    Object.assign(L.on, {
      _containerClasses(A, F) {
        c(F);
      },
    });
    const D = () => {
      Object.assign(L.on, I), (o = !0);
      const A = { ...L };
      if (
        (delete A.wrapperClass,
        (p.current = new Ba(A)),
        p.current.virtual && p.current.params.virtual.enabled)
      ) {
        p.current.virtual.slides = z;
        const F = {
          cache: !1,
          slides: z,
          renderExternal: h,
          renderExternalUpdate: !1,
        };
        Fn(p.current.params.virtual, F),
          Fn(p.current.originalParams.virtual, F);
      }
    };
    S.current || D(), p.current && p.current.on("_beforeBreakpoint", _);
    const B = () => {
        o ||
          !I ||
          !p.current ||
          Object.keys(I).forEach((A) => {
            p.current.on(A, I[A]);
          });
      },
      ie = () => {
        !I ||
          !p.current ||
          Object.keys(I).forEach((A) => {
            p.current.off(A, I[A]);
          });
      };
    T.useEffect(() => () => {
      p.current && p.current.off("_beforeBreakpoint", _);
    }),
      T.useEffect(() => {
        !y.current &&
          p.current &&
          (p.current.emitSlidesClasses(), (y.current = !0));
      }),
      kr(() => {
        if ((t && (t.current = S.current), !!S.current))
          return (
            p.current.destroyed && D(),
            Yy(
              {
                el: S.current,
                nextEl: w.current,
                prevEl: x.current,
                paginationEl: C.current,
                scrollbarEl: R.current,
                swiper: p.current,
              },
              L,
            ),
            s && !p.current.destroyed && s(p.current),
            () => {
              p.current && !p.current.destroyed && p.current.destroy(!0, !1);
            }
          );
      }, []),
      kr(() => {
        B();
        const A = qy(N, d.current, z, m.current, (F) => F.key);
        return (
          (d.current = N),
          (m.current = z),
          A.length &&
            p.current &&
            !p.current.destroyed &&
            Gy({
              swiper: p.current,
              slides: z,
              passedParams: N,
              changedParams: A,
              nextEl: w.current,
              prevEl: x.current,
              scrollbarEl: R.current,
              paginationEl: C.current,
            }),
          () => {
            ie();
          }
        );
      }),
      kr(() => {
        Xy(p.current);
      }, [f]);
    function O() {
      return L.virtual
        ? Jy(p.current, z, f)
        : z.map((A, F) =>
            G.cloneElement(A, { swiper: p.current, swiperSlideIndex: F }),
          );
    }
    return G.createElement(
      r,
      yl({ ref: S, className: xp(`${u}${n ? ` ${n}` : ""}`) }, P),
      G.createElement(
        Zy.Provider,
        { value: p.current },
        b["container-start"],
        G.createElement(
          i,
          { className: $y(L.wrapperClass) },
          b["wrapper-start"],
          O(),
          b["wrapper-end"],
        ),
        yp(L) &&
          G.createElement(
            G.Fragment,
            null,
            G.createElement("div", { ref: x, className: "swiper-button-prev" }),
            G.createElement("div", { ref: w, className: "swiper-button-next" }),
          ),
        Sp(L) &&
          G.createElement("div", { ref: R, className: "swiper-scrollbar" }),
        wp(L) &&
          G.createElement("div", { ref: C, className: "swiper-pagination" }),
        b["container-end"],
      ),
    );
  });
Cp.displayName = "Swiper";
const Sn = T.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: l,
    zoom: s,
    lazy: a,
    virtualIndex: o,
    swiperSlideIndex: u,
    ...c
  } = e === void 0 ? {} : e;
  const f = T.useRef(null),
    [h, v] = T.useState("swiper-slide"),
    [g, y] = T.useState(!1);
  function S(w, x, C) {
    x === f.current && v(C);
  }
  kr(() => {
    if (
      (typeof u < "u" && (f.current.swiperSlideIndex = u),
      t && (t.current = f.current),
      !(!f.current || !l))
    ) {
      if (l.destroyed) {
        h !== "swiper-slide" && v("swiper-slide");
        return;
      }
      return (
        l.on("_slideClass", S),
        () => {
          l && l.off("_slideClass", S);
        }
      );
    }
  }),
    kr(() => {
      l && f.current && !l.destroyed && v(l.getSlideClasses(f.current));
    }, [l]);
  const p = {
      isActive: h.indexOf("swiper-slide-active") >= 0,
      isVisible: h.indexOf("swiper-slide-visible") >= 0,
      isPrev: h.indexOf("swiper-slide-prev") >= 0,
      isNext: h.indexOf("swiper-slide-next") >= 0,
    },
    d = () => (typeof r == "function" ? r(p) : r),
    m = () => {
      y(!0);
    };
  return G.createElement(
    n,
    yl(
      {
        ref: f,
        className: xp(`${h}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": o,
        onLoad: m,
      },
      c,
    ),
    s &&
      G.createElement(
        vc.Provider,
        { value: p },
        G.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof s == "number" ? s : void 0,
          },
          d(),
          a &&
            !g &&
            G.createElement("div", { className: "swiper-lazy-preloader" }),
        ),
      ),
    !s &&
      G.createElement(
        vc.Provider,
        { value: p },
        d(),
        a &&
          !g &&
          G.createElement("div", { className: "swiper-lazy-preloader" }),
      ),
  );
});
Sn.displayName = "SwiperSlide";
var kp = {},
  Pp = { exports: {} },
  e1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  t1 = e1,
  n1 = t1;
function Lp() {}
function Np() {}
Np.resetWarningCache = Lp;
var r1 = function () {
  function e(r, i, l, s, a, o) {
    if (o !== n1) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Np,
    resetWarningCache: Lp,
  };
  return (n.PropTypes = n), n;
};
Pp.exports = r1();
var i1 = Pp.exports;
Object.defineProperty(kp, "__esModule", { value: !0 });
var yc =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  l1 = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  Op = T,
  Ls = Rp(Op),
  s1 = i1,
  pt = Rp(s1);
function Rp(e) {
  return e && e.__esModule ? e : { default: e };
}
function o1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function a1(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function u1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t,
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var c1 = { overflow: "hidden", position: "relative" },
  d1 = {
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    display: "block",
    float: "left",
  },
  f1 = function (t, n) {
    return (
      `
    .react-stars-` +
      n +
      `:before {
      position: absolute;
      overflow: hidden;
      display: block;
      z-index: 1;
      top: 0; left: 0;
      width: 50%;
      content: attr(data-forhalf);
      color: ` +
      t +
      `;
  }`
    );
  },
  Va = (function (e) {
    u1(t, e);
    function t(n) {
      o1(this, t);
      var r = a1(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
      return (
        (n = yc({}, n)),
        (r.state = {
          uniqueness: (Math.random() + "").replace(".", ""),
          value: n.value || 0,
          stars: [],
          halfStar: {
            at: Math.floor(n.value),
            hidden: n.half && n.value % 1 < 0.5,
          },
        }),
        (r.state.config = {
          count: n.count,
          size: n.size,
          char: n.char,
          color1: n.color1,
          color2: n.color2,
          half: n.half,
          edit: n.edit,
        }),
        r
      );
    }
    return (
      l1(t, [
        {
          key: "componentDidMount",
          value: function () {
            this.setState({ stars: this.getStars(this.state.value) });
          },
        },
        {
          key: "componentWillReceiveProps",
          value: function (r) {
            this.setState({
              stars: this.getStars(r.value),
              value: r.value,
              halfStar: {
                at: Math.floor(r.value),
                hidden: this.state.config.half && r.value % 1 < 0.5,
              },
            });
          },
        },
        {
          key: "isDecimal",
          value: function (r) {
            return r % 1 !== 0;
          },
        },
        {
          key: "getRate",
          value: function () {
            var r = void 0;
            return (
              this.state.config.half
                ? (r = Math.floor(this.state.value))
                : (r = Math.round(this.state.value)),
              r
            );
          },
        },
        {
          key: "getStars",
          value: function (r) {
            typeof r > "u" && (r = this.getRate());
            for (var i = [], l = 0; l < this.state.config.count; l++)
              i.push({ active: l <= r - 1 });
            return i;
          },
        },
        {
          key: "mouseOver",
          value: function (r) {
            var i = this.state,
              l = i.config,
              s = i.halfStar;
            if (l.edit) {
              var a = Number(r.target.getAttribute("data-index"));
              if (l.half) {
                var o = this.moreThanHalf(r, l.size);
                (s.hidden = o), o && (a = a + 1), (s.at = a);
              } else a = a + 1;
              this.setState({ stars: this.getStars(a) });
            }
          },
        },
        {
          key: "moreThanHalf",
          value: function (r, i) {
            var l = r.target,
              s = r.clientX - l.getBoundingClientRect().left;
            return (s = Math.round(Math.abs(s))), s > i / 2;
          },
        },
        {
          key: "mouseLeave",
          value: function () {
            var r = this.state,
              i = r.value,
              l = r.halfStar,
              s = r.config;
            s.edit &&
              (s.half &&
                ((l.hidden = !this.isDecimal(i)),
                (l.at = Math.floor(this.state.value))),
              this.setState({ stars: this.getStars() }));
          },
        },
        {
          key: "clicked",
          value: function (r) {
            var i = this.state,
              l = i.config,
              s = i.halfStar;
            if (l.edit) {
              var a = Number(r.target.getAttribute("data-index")),
                o = void 0;
              if (l.half) {
                var u = this.moreThanHalf(r, l.size);
                (s.hidden = u),
                  u && (a = a + 1),
                  (o = u ? a : a + 0.5),
                  (s.at = a);
              } else o = a = a + 1;
              this.setState({ value: o, stars: this.getStars(a) }),
                this.props.onChange(o);
            }
          },
        },
        {
          key: "renderHalfStarStyleElement",
          value: function () {
            var r = this.state,
              i = r.config,
              l = r.uniqueness;
            return Ls.default.createElement("style", {
              dangerouslySetInnerHTML: { __html: f1(i.color2, l) },
            });
          },
        },
        {
          key: "renderStars",
          value: function () {
            var r = this,
              i = this.state,
              l = i.halfStar,
              s = i.stars,
              a = i.uniqueness,
              o = i.config,
              u = o.color1,
              c = o.color2,
              f = o.size,
              h = o.char,
              v = o.half,
              g = o.edit;
            return s.map(function (y, S) {
              var p = "";
              v && !l.hidden && l.at === S && (p = "react-stars-" + a);
              var d = yc({}, d1, {
                color: y.active ? c : u,
                cursor: g ? "pointer" : "default",
                fontSize: f + "px",
              });
              return Ls.default.createElement(
                "span",
                {
                  className: p,
                  style: d,
                  key: S,
                  "data-index": S,
                  "data-forhalf": h,
                  onMouseOver: r.mouseOver.bind(r),
                  onMouseMove: r.mouseOver.bind(r),
                  onMouseLeave: r.mouseLeave.bind(r),
                  onClick: r.clicked.bind(r),
                },
                h,
              );
            });
          },
        },
        {
          key: "render",
          value: function () {
            var r = this.props.className;
            return Ls.default.createElement(
              "div",
              { className: r, style: c1 },
              this.state.config.half ? this.renderHalfStarStyleElement() : "",
              this.renderStars(),
            );
          },
        },
      ]),
      t
    );
  })(Op.Component);
Va.propTypes = {
  className: pt.default.string,
  edit: pt.default.bool,
  half: pt.default.bool,
  value: pt.default.number,
  count: pt.default.number,
  char: pt.default.string,
  size: pt.default.number,
  color1: pt.default.string,
  color2: pt.default.string,
};
Va.defaultProps = {
  edit: !0,
  half: !0,
  value: 0,
  count: 5,
  char: "★",
  size: 15,
  color1: "gray",
  color2: "#ffd700",
  onChange: function () {},
};
var p1 = (kp.default = Va);
function at(e) {
  const t = (e.price - e.discountPercentage * (e.price / 100)).toFixed(2);
  return (
    console.log("discountPrice", t),
    E.jsxs("div", {
      className:
        "group p-3 drop-shadow-md border-2 flex gap-4 flex-col relative bg-[#F5F5F5] w-64 min-h-[350px]",
      children: [
        E.jsx("div", {
          className:
            "discount absolute top-3 left-3 bg-primary w-14 h-6 rounded flex items-center text-xs justify-center text-white ",
          children: "-40%",
        }),
        E.jsx("div", {
          className: "",
          children: E.jsx("img", {
            src: e.image,
            alt: "product img",
            className:
              "m-auto group-hover:scale-110 transition-all duration-300",
          }),
        }),
        E.jsx("h3", {
          className:
            "font-medium group-hover:text-primary transition-all duration-300",
          children: e.name,
        }),
        E.jsxs("p", {
          className: "font-medium",
          children: [
            E.jsxs("span", { className: "text-primary", children: ["$", t] }),
            " ",
            E.jsxs("span", {
              className: "line-through text-[#7f7f7f]",
              children: ["$", e.price],
            }),
          ],
        }),
        E.jsx("p", {
          children: E.jsx(p1, {
            count: 5,
            value: e.rating,
            size: 24,
            color2: "#db4444",
            edit: !1,
          }),
        }),
      ],
    })
  );
}
function m1() {
  return E.jsxs("div", {
    children: [
      "Slider",
      E.jsxs(Cp, {
        spaceBetween: 50,
        slidesPerView: 3,
        modules: [b0, z0, M0, A0],
        autoplay: { delay: 2500, pauseOnMouseEnter: !0 },
        pagination: { clickable: !0 },
        scrollbar: { draggable: !0 },
        navigation: !0,
        onSlideChange: () => console.log("slide change"),
        onSwiper: (e) => console.log(e),
        children: [
          E.jsx(Sn, { children: E.jsx(at, {}) }),
          E.jsx(Sn, { children: E.jsx(at, {}) }),
          E.jsx(Sn, { children: E.jsx(at, {}) }),
          E.jsx(Sn, { children: E.jsx(at, {}) }),
          E.jsx(Sn, { children: E.jsx(at, {}) }),
        ],
      }),
    ],
  });
}
function cr(e) {
  return E.jsxs("div", {
    className: "gap-4 flex items-center",
    children: [
      E.jsx("div", { className: "w-5 h-10 bg-primary rounded" }),
      E.jsx("h2", {
        className: "font-semibold text-base text-primary",
        children: e.text,
      }),
    ],
  });
}
function h1(e) {
  return E.jsx("button", {
    className: `font-medium rounded bg-primary centre text-white ${e.className}`,
    children: e.children,
  });
}
const g1 = "/assets/ps5-sf_tDr4t.png",
  v1 = "/assets/baji-D3Ifyipl.png",
  y1 = "/assets/speakers-DlkkxaCV.png",
  w1 = "/assets/perfume-CVVnQNzt.png";
function S1() {
  return E.jsxs("div", {
    className: "main grid grid-cols-4 gap-8 grid-rows-2",
    children: [
      E.jsxs("div", {
        className:
          "relative bg-[#0D0D0D] group text-gray-200 rounded col-span-2 row-span-2",
        children: [
          E.jsx("img", {
            className:
              " w-full h-full group-hover:scale-90 transition duration-300 object-contain",
            src: g1,
            alt: "ps5 image",
          }),
          E.jsxs("div", {
            className: "absolute gap-3 flex-col flex bottom-0 p-6",
            children: [
              E.jsx("h3", {
                className:
                  "S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-2xl",
                children: "PlayStation 5",
              }),
              E.jsx("p", {
                className: "w-3/5 line-clamp-3",
                children:
                  "lack and White version of the PS5 coming out on sale.",
              }),
              E.jsx("a", {
                className:
                  "underline hover:decoration-gray-500 transition-colors duration-300",
                href: "#",
                children: "Shop Now",
              }),
            ],
          }),
        ],
      }),
      E.jsxs("div", {
        className:
          "relative bg-[#0D0D0D] group text-gray-200 rounded col-span-2",
        children: [
          E.jsx("img", {
            className:
              " w-full object-contain group-hover:scale-95 transition duration-300",
            src: v1,
            alt: "baji image",
          }),
          E.jsxs("div", {
            className: "absolute gap-4 bottom-0 p-6",
            children: [
              E.jsx("h3", {
                className:
                  "S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semi text-2xl",
                children: "Woman's Collection",
              }),
              E.jsx("p", {
                className: "w-3/5 line-clamp-3",
                children:
                  "Featured woman collections that give you another vibe.",
              }),
              E.jsx("a", {
                href: "#",
                className:
                  " underline  hover:decoration-gray-500 transition-colors duration-300",
                children: "Shop Now",
              }),
            ],
          }),
        ],
      }),
      E.jsxs("div", {
        className: "bg-[#0D0D0D] relative group text-gray-200 rounded",
        children: [
          E.jsx("img", {
            className:
              "object-contain group-hover:scale-90 transition duration-300 h-full w-full",
            src: y1,
            alt: "product image",
          }),
          E.jsxs("div", {
            className: "absolute gap-2 flex-col flex bottom-0 p-6",
            children: [
              E.jsx("h3", {
                className:
                  "S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-2xl",
                children: "Speakers",
              }),
              E.jsx("p", {
                className: "line-clamp-3",
                children: "Amazon wireless speakers",
              }),
              E.jsx("a", {
                className:
                  "underline hover:decoration-gray-500 transition-colors duration-300",
                href: "#",
                children: "Shop Now",
              }),
            ],
          }),
          " ",
        ],
      }),
      E.jsxs("div", {
        className:
          "bg-[#0D0D0D] group-hover:scale-110 transition duration-300 relative group text-gray-200 rounded",
        children: [
          E.jsx("img", {
            className:
              "object-contain group-hover:scale-90 transition duration-300 h-full w-full",
            src: w1,
            alt: "product image",
          }),
          E.jsxs("div", {
            className: "absolute gap-2 flex-col flex bottom-0 p-6",
            children: [
              E.jsx("h3", {
                className:
                  "S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-2xl",
                children: "Perfume",
              }),
              E.jsx("p", {
                className: "line-clamp-3",
                children: "GUCCI INTENSE OUD EDP",
              }),
              E.jsx("a", {
                className:
                  "underline hover:decoration-gray-500 transition-colors duration-300",
                href: "#",
                children: "Shop Now",
              }),
            ],
          }),
          " ",
        ],
      }),
    ],
  });
}
function wc() {
  return E.jsxs("div", {
    className: "container-x",
    children: [
      E.jsx(cr, { text: "Today's" }),
      E.jsx("h3", { className: "heading ", children: "Flash Sales" }),
      E.jsx(m1, {}),
      E.jsx(zt, {
        to: "/products",
        className:
          "font-medium rounded bg-primary centre text-white h-14 w-56 mx-auto my-16",
        children: "View All Products",
      }),
      E.jsx(cr, { text: "Categories" }),
      E.jsx("h3", { className: "heading ", children: "Browse By Category" }),
      E.jsx(cr, { text: "This Month" }),
      E.jsxs("div", {
        className: "flex justify-between my-16",
        children: [
          E.jsx("h3", {
            className: "heading",
            children: "Best Selling Products",
          }),
          E.jsx(h1, { className: "h-14 w-40", children: "View All" }),
        ],
      }),
      E.jsxs("div", {
        className: "flex gap-7",
        children: [
          E.jsx(at, { price: "5", discountPercentage: 7 }),
          E.jsx(at, {}),
          E.jsx(at, {}),
          E.jsx(at, {}),
        ],
      }),
      E.jsx(cr, { text: "Our Products" }),
      E.jsx("h3", {
        className: "heading capitalize",
        children: "explore our products",
      }),
      E.jsx(cr, { text: "Featured" }),
      E.jsx("h3", { className: "heading", children: "New Arrival" }),
      E.jsx(S1, { className: "w-" }),
      E.jsx("a", {
        href: "#top",
        className:
          "w-12 h-12 bg-gray-200 rounded-full block text-2xl centre ml-auto",
        children: E.jsx(Fg, {}),
      }),
      E.jsx("br", {}),
    ],
  });
}
function x1() {
  return E.jsx("div", { children: "About" });
}
function E1() {
  return E.jsx("div", { children: "ye ha hamara Contact page" });
}
const T1 = "/assets/Qr-Code-Bl9wTBTM.png",
  C1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAgCAYAAAD64u2dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA6SSURBVHgB7VoJXFTVGv9fZmETQVEUDUIfopiKlQXGoigK9CCxpyaiuLYoVuJr8VVmaa9niZhL5ZKKWmmihailST8NcSFF0cwVZFBEAYFhXwbmvO+cGQZIZNBM85cfv8vce89yzz3f/v+uhAZUVVUVYmJiMoAxZoMHdM9IkiQ18eCEUqmMqbsn5/8qKiqcVCrV3oDAp51OnjwJtVqNvx5JdDD8XSg4OBhnzpyZ4+Tk5Gtubq7ib89vZHh5+zip1UV4QH8dsra2xoGkRJWrq2sXOWnThNDQsCaZxOhPYpJOmB/QXaeioiJMi3jZSbgkmUzWd/uOHU12NOEcMpHAeQVJKxj3gO4unThxgvusgfLmAgetxODUxxFFeWoUZxdDK+5yZt05FeMzDfIbhLFhY1BUXIwP5v0X1VVVeOutt6BQKlBM91SqDPTp4yb6nzt7DitXfYG2bW0wYsQIVGuq0bt3b7GsujZOLt2cMXNmJBQKJRYvXoyTv/6KyBkzsHPnTpw/fwGTJ0/Cd3FxKCgoxF+ZuFYRWcub69TO5VH4LZ0L88ofkJ5wAftWHEBlUQX49jKDfkn0p8XtMY9h0ODBiJg2DW++8Sba27WHm1tvnD1zFq49XTF79myUlZZBq62FfUd7kPbjp4Q9YqSlpSVGjhyJaVOnwfEhB5hbmGOH3jI4OjyEL7/6UrRVVVUiKioK06dPx5gxoXjyyScQHh5OTH6W+u/E/ULNMkrRxhbFch9ozSQ4+2+Dg7s9zn5/HvtjksG0WpgwObGIm0TptnXslVdexuuvv4F8kuxuLi7EOy2sWreGbdu2GDhwAC6mZ2DHzu9x+XIWampqkJ6RqRvImHjmhbR0XL+eD02tBtlXr4mmkOEhWEJadDQlBVyAPv98OYYNG4bS0lKUlZUhJCRE3Jek+8eUmzTbqt+MUoUnShRBMLc2R98xbghfPQqunt1QK9PoJvgDlrCYVFshlwsNcXBwwNtvv42+bm48ZRAm6nJWlpEZbtxszgwbGxvDwqysWgsmk63HBx98IDSqffv295XHbZZRTDTzyE+GCtKsImWAuG/t0Br+7/ki9KNn0baLjd70Uc9bllAJS5Yuw8qVK9DrkZ4oLy9DYWEhUkgTKPFGq1at0KmTPZ1LhhWhwZm4omfWP1f3u3vXbjJzYzD6uZEIGfYMJk2agA0bNpDcMRSoCxGzbh06d+qE+ymclRvrUGfWGDNBmXwQncnQWrOdNkeC3WN2eG7xcJwn/7V/TTIqy6pwqy9/5MhRTJnyPPz9hwrTNHbsOPJJWnyxei0szC1Qo6nlio0DBw+htkZjGJefX4jo6GguHUhKOkBaVG54dtaVbIx6bjT++XQg7OxMETY2XJjWqIXRKC0pR1zcNrKwjOYowP1CEsXoMRaWVuObauzg7gefRVtE6FAfNAAWNXthpdlFe6TV5VlElQVVSNl4Ase2nQSrvbOR4d+dKspLY0xa1lW36dwUcg0rk/uS3xogTCLXLE7mbUzhFfEExn/yNPo/bqYfxfTjHtAfJaOm70aShLkplQeKCK2VJrHuFhSSBi/2P4fenhps/MEc/1uhQfpljUHrbjoj9zPETVtbW/hSpNeuXTtcunQJPyfuF36LsT9PO3nI34oCGR6A1NTWoHlLwGBhYSGCH90VWZLKSmiqq8U596tW5FfLK+ieRoM7SS3UKDRaLIQWyVCmCKDDWyxSblKN4VYH8ajyHJTyaowLLsHhWAnvvGQBK0vo0Q3W5HwEOmLevLmEOZ7Gxo0bsWTJEmzbtg2/nfoVzw4fLqK1P4cYXHt0R07OVfKRQ1o0InphFPW/Jo683BzkXLuKzz5bhna2bdG+na24/8Lzk3Gn6TYY1QDFpjyqVPFPmuVxDLdMRj9iEk+Dtfp2a7NKzJ5aiiVzWpMUSk1qFr/Dc56ZkZHY/M03eOopTzg4Pgxf30H47fRpuLu7N4j67jxxGZBzDWnRIyShgTzomT79ZbxECfWSJYsp8R5FgcpCKE1NxVxcs+403YbpqyctbaBlZRX847PxSNcqSD71b8v9EzdpWkkGLUVrTBdL4/cei0d748aNwzuz38WCBQsN7Tk5uQgKekacM3YXvJxk+GeUSkpKsG79Br15YwKmmjlzJpavWI4/i26TUfyFtDAnTC44bgPcfklFZYoz4bfVsPC+RAzkPkeGrDwlPt0gx/JNFRRa68Y03gyGqVOnIjMzEytWrIQerzcEIaJHAybxkQN9feE/1A9mZmY4fDgZm77ZbOjXmXKuyVMmw46S2fSLF7F2zVrCD0tEu6mpEmGEJ/Z164u09DRc5SgGjUlLu9BoPW5ufTBq1Ehhjvfs+Qk//LALxvYivyBfp5kyRYP1MgQHBWGw32Ahe4mJiYiPj8fo0NCq8vJy2bfffivUWEl45mOPPpZ4LTfHRpWh6nOzp9w6o0TkrYWyVothcTHw+CVJvDCqlSjb3AsmBDdJj17Fmq1KLFhdjUu5lQQ1GQbeMF2PHj14PYzA1yJAz6QxoaHo98Tjuis+Nw3jwOrQof6UOy0kLPCMcP4RERHw8PDAjMiZcHFxRsKePcI0paamUj42FpMmToSf3xCUkKnauiUWAwYMoJwrCQEB/nB0dAQvkkZETDNs+JAhftgSG4vs7Gycv3ABz1N+9/Y775B5W9ZozTyg8PH2pOCjVqApkTMisXfvPmQRilLnTydOmEDCtxwHDhwQ1y+++AI+/PBDgruuqxdGLahKTk52vEL5HgnE+SlTJvnP/+ijL6nbHWQUbaSSksWQuDXwSE4y5FactBo5vv/cHvOLriM1vUJEay2x1lRybnTdvXs3BPj7i3NTsvt8U1OPH8f7783Bt1u3YiqBuBXllVSrmYZPFkUjblscwsl8yuUy9H/KW0SM3bu74NDBg8IkpaQcJdxwIEJJAOK37yBIyQrJhw81DlJIIGbNmiWY5x8YSGh9Hzg89BBee+3fWBezXiD7dcSj0127dJrGk/OEhAS88OJLAqaqo02bNpEvKxHoNxc2DiCPHz8egYGBHebPny/WEhW1EF2cHl65ev36RzIzLwc0t0e3lEdxpZBRSB4Uvw4eB/eJ8FzS6gqLWQSKzkg/gbCUI0hNqxJhnnGLL5HEHaRN7Y42bdoa7s55by6h573E8cqrr0JDG2BG6DgP22NiYihkrxD6uZ6gIL5RT/TrBy8vL2zeHEtMyhRznDt3HkkHkohxHvD08gQvjO5J+EkofzGZw127dzdaiVwmhzfNkZeXh+9IGPb+lIDTpLlhYeNQXFLSqG9ubi68vb3Rv39/uLr2RFDwMHDtaEjOzs74+OOPsX37dmzZsgXjCV/k5rSAIDKO2o8ZPZoquFZaPz+/WKo1TSB/Z9ncTrWIUcJo0T85MSZwdyy8k/boU1+GcmpYcCUdAcf2YkvuFdTeIiKxbNlSdOzYUYS9CoXCcJ9LO/crc99/H0d++YU2/hyqKV+xpRBYj2lRTaqtiLC4GczPz4c94Xd1SsLH8/ZCgo54lGYiMxEbpVseQ2vSqoZUS2asoKAAg6nscuTIEXT9Rzcyn+FCkH4fzFSSb045lkro/HFczFDd0M6veLpBqA8cH3aCtU0bgsRW69pIsFatWgUX0vhF0dHF8+bN+0ilypwKI9Qso6S6g+mYErBnEwYlbBcrqaWhW9W58D+5H4sun0VhbQ1uJ905fjwVc+a8K2pFiT/voxLEMPTr9zgh3GNxjExWz549hZ/gtv5XKv7x2pKXpyd69e6FNWtWCyZsIQ3gBUGec02eMgVdu3YBNy9c077euAmxm7eK4OPTT5fikZ49MHr0KAynvo02l96RmysuLLyqamFuhpUrPsN3320V5lffS7cvRoJQvg215B64tnMrEBgQSGWWEPEMztNDhw/j6NEUjBs7zubHH38cfSU7WwZjxLE+mVzJmjo6eQew0CMVbGxyCdswdzW76v0vluP1LNvr7s+82tszhULOZApT6qtgN5ujJYdcqWQjRo5kxAhGkk1CpxW/tGHM3aO/oZ+zsws7duwYI18g+pDTZ76+vtQmZwpTU0aoOKP3EW2kfWzWrP8wpam5GDsmLIyRyRJt5DfYqVOnxFxPuruzqupKFhQczAitZ2SmxFjej8JwNmHixAZrVbCVq1axtLR0ZmpmceN+dXZgpG2Mcizm4zOQXczIEPPwNZEgMZVKxWzb2Ym+kZEzRRvli0b3h9az1ggoOwSDFn6DQYnxCIyPRT5Fe9GqU/gqJ5MkRqar8krGJcwY1c3BzVXHjh2Es76edx3XcnKa6i0iLUsLSyoaXhAmq2E02YbqUJ062+NK1hWoi4oFFsktAp+3uroKHTt0xNVr17Bm9RdUs2oDvyFDRYqura0Pq3mtqoOdHTJUKj0qX098jfzg2nIjSSI5Z+QiuOaQIKNLl67IpfcoKlKL7LrOSn5NFWhX1x4gQaR1NQ83cVC22aivJi8LA/fHw3d7LJbnqrAs8yzUAg+Toa4iJN0BHK6O0dw08Pzmqr5Se5Peotrb8LohFarV4qifm6E7VY6Tkw+RqVxLofZSETT4ePsgikJ9HaMbz59HQsKPpkhnvm4mmdzc1bdpNDVU/Dxfv059E4eteKLPvwsxxiTDqprTKL4F3cjpllBN6BpVXLUmWv2m3n8ljIhpL2Hu3LloTWV+vtE8vA4Pn0Bad/e/ZVz8ySIK10cQPOZBFewrRvtzjZLI/n1ib9/51aYWXG/WmL4apbtxH31qIIibPx41WdtYowelAvwbi/T09LsDTTVBHI3g1FJtIkYtNqHF7uvj1nRCbMLqvzTSgT/3H5M4SXpzpS5UC9gpLS3tnjGJE2cQTzVaQsFBwfwntf6TZi8fp3thBh7QzcnG2pogL90nzSKP4h+i8xvBwUFojG63VOrYTQ5jbcbmMvYc4Mb1NvcsY+tEE+dowfhbeQ5w83fUXXMGceSD84Tzht9rFBXw79D5J850ao0HdC+piLskSrTj6m78H1KCGvnUGGOJAAAAAElFTkSuQmCC",
  k1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAkCAYAAABhc6+LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA0ESURBVHgB7VsJWJRVFz7AsCkKsgmaQAmGYKbmBu6Ilon1/wr1ZxGUmqGW2uLTYqWPWvakiBWWmvte4o6Eqbhh6m8pUK4oKqiApgzCYAJzOufgfDLBwAxYYnF8Lszc727fPee+55z3ohmUE0T8D/3qRcUB6uVeSh6VFDMzs8W6ChX/IAV5FWo0SXPnzfdYtXKleVpaKhQUFEBpaSnUy98n5ubmYNfQDlr6+MCIEcMxPz//o0aNGvUhhZ2TBur8/IywsDAtfcT6UndKSEiI9tq1axmiJDpNkTNmRtcrqY6WSZMma8Ul0Y8YB4cm99Xi/03Fzc0dWUfm9MUhL+861EvdlOzsy/zL3hzq5b6Qu6ooik7gXstjHR4Da2trMFW6BXaDuyFNmzaF9u3bw92Wu6aonj17wrdrvoW33nrL6D7Dhw2HX3/9FTZv3gyJiYkVXtBUtXP7V0a+Ap4eHmXfTTCcjyZNMqqdGVRcFxvGxPcnymfvlt4wcuTIiv1qacR3RVGDBw+G7du3w5DQIXDp0iWj+9nY2sCqVatg0KBBMH78eIiNjZX6vn2DIW5tHCxctAhcXFwgPPxF8PLygqCgvhAW9gw0bNgQxo4dB61bt4bJkyfDunXr4LPPPgOVpaX0Zy/s5uYG33zzjYzTt29fqX/55Zfhu+++g1nRs8DCwgIeeughWLZsGcyaNQtsbGz01sbPVq1aDXFxcdC1a1dpP3XqVIidMwfWkEG6uroqbZ977jkYN34cTJgwgYMzaN68OSxZsgTmzZsHVlZW0JTa8ucVK1ZAly5doEZCAy+GWkQlDRo0wFMnT3FkgufPn8cmTYyPIMeMGYMTJ06Uz2RxePToUbSxtsHk5GR0cnLCoUOH4rRpH+PIV0ZiaGgoxsTEIJ1a7N69O3744YdIpxi3bNmCtBn4ww8/IG0Qzp07F1u1aoWzZ8+WPg4ODphyNEXavPBCODo6OuHq1avRz88PafPw6aefpsjKDU+fPq23NjIgGd/T0xO3bduGKpUlpqakyvtNmTIVR48eo7S1t3fAAwcOoMrCAgMDAnH3rt1oZ9cIN2zYiB07dsSFCxZieHg4+vv5Ixm0yXtMskgFtZROnTqBt483nD17FqKioiAvLw9qIrShoNFo5LRQRg6//fYbHD58GAYOHAgrV66gEzQWiopuUhSUDd2794AdO3aIlZ88eRKKi4shMzNTrFeErLpZs+bw888/g5rWk52TDba2tjBgwBPgQ2vl06JSqcSfHDlyRMZMTz+jtx5nZ2cgw5E1MUPToIEt5ObmwvXr14GUCm7Ul8GMd1KrLaWCUKrVSt/jJ45DYWEBHDt2TNbY2s8PNEUamruVrLsmYjL0OTo6Qtu2beHBBx8U3FWr8wW2AgICBPbI2oGs0OjxfH194aWXXoLly5ZDfHw8XKdUwVJlSRAXBq+99hrs378fTp06BR06dKDxL0JKagpERkZAampqFaOaUb9kahcJL4SHkyJLwM7ODug0wN69e0VJ3IaVxHBIJ5bex0tvhIMHD8l7sfExnabRFIlSygTL/QRRJFE9EBgYWFaPd1ryHm3cuAFyc3Lhxx9/vD13DcRY6OMjT/iORUVFqCXzKb5VjDQxEi4LJOXk5Eg9l5KSEoKi7dimTZsqx2SIevbZ/1F5Fjt37oxmt+sZwhgqnnrqKYFErgsKCsJmVN+kiSMGBwdLnauLK1IAIv0YDq2srZFOONKmoTVBHfePiIgU+OP2ffr0kXE7deosdXR6kQwC+/d/HHv06Km3NktLS3kWGREhsEk8nPTXrZsMTK99YGA37NWrF5JPlTVxXft27QXCKdgQiI2ktZCh1wj6jFIUOU7B4EpFa6CaFJaSkoKNGzc2eWH1pYY+aty4cUAWX/lDA1En+wyyXvE3dV2YtWZhyCoPW3VKqjtR5AzxzJkzaIrwaRo69HmjLYbh7c0338SEhASJ1IztV9vi4+Mj0R35KkxLS8OtW7cyY61AcF0pRkGfk7OzbLwpUnzrlmCzsQthX0ERlfSVMFel+stfvkePHnj16lW8efMmbtq4CSnHwcwLmeKDR0WNEuPhEvVqFFIS/5evp9aKatHCw6AfMiT8sqZs9jNhzyBFTkihK94suont2rUz2Fa3gbogo8p2VTxP2pmEv//+O/r7+98xSjKugwcPIkV56EC5EQcQFHViWmpapfMpa6lmHYb6maKoasNzziNQ2hsvTKl4enoZ1ZZdXGhYKFy9clXoJytrK8mdyguH2dOmTZOUYMaMGbB79x6Inhmtlwa8/fYEeOONN4AiLZg/fz4kJe2C94nWcXd3r3TOZs2bUWqhhqysLKWeczfO115/fSxY21hDTMxsYUTc3N0g9ssviaEIkHYuzi5AybqkEzu274B333tfbx5+RlAujEt8/Fby72VsxMAnB8LSpUthz5498PXXXwuzYrSgET6KAgKTThRDZWzsHKOshiNKhr3ly5eLZR47dlx8RvkTSTkW0iYi8YKY+H0ibt68Raw+X50voTK3ofwIKYDB06dO44b1G4RN4DSBcjCBVviTRS9evFjWysxGGPlFF1qHuZl52fPb7x0dHY2XLl7EK1eu4Bx6n94UfnNYf/jwTzI/+zeiijD7crbM/cADD8jY8VviKV3JRcorkThMCf8ZPnk9SUlJOHPmTPzll18kpdGlGlBb6OOJmZ4x1U9xe7LMaiFwyJBQgT3i8WQuppVKikvw0UcfvaMoUiKPFx09S+CI6yhRlX5fffXVbUXtkzajRo1S+s2OmS11o0eNrjAv00YJWxPkOY9TpCnC5H3JQlsR7ydtKkKfmeRh2lItfjDxA2WskJBBeIv8cuyXsYqi+Dv7QX5ua9sAL1++LMbElFvZ/O5Ip1kguDqDRmPzKHao/DKmCm/C8OEjqjSC9evXY8bZs/QCDSUx9H3YV6yVrdmsnKL4VHt7eyt97Sk/y8zMktOnUxRbKHNyujatWj0sCuBAwZCvYC6O4A7Xrl2L165dEyUkJHwvCW95Ren6LF2yFIkm0zul/PncuXOSN3IfVtSJEyeVOXkO3osFCxaIIXEhxkNOlTpPTcm5dbWKMiqPWkFc26tRrwp1ZIqwf0tM/N7g89at/YgRDxJ6R62+wxEyPzZs2DB45513gCxTGat8TlZQUCh9KKFW6rKyLkJJSbHynZ+XasvoHawkP+I65hO5fP7550KPrVmzBh7v3x+IZYCdO3fqtWc6yL2Zu8zN/KLynoWFxEMWCV95Z2yt8pl5Q56rC/kq9nk6yc25AgSbYKGyALgFVYpRirpBG8Qvwk7a2HsVXti8efMl8TUkgwf/V5TEAUJGxjmlvlu3bvD880MhZGAIrFu/TuoaNWosZCoToyyuTV3lOoGJT534+j4sSrlx44Z89/TwlMCGToqsW6csB4cmsHDhAjhEfN70T6cr6+Vggq9r2HiYxK1MTpw4IdcefI1y4cIFqXN0cgKKGOVZZQbBHKgZ/Yum65RFixYq9fb29kIksxFWK2gk12dBR5ruZozyVdyG8ZhetsoxU1JTBadJWQJzuuLv30YwXhdg8G+WQ4f+T1cK9oLz7Jt4nnfffU/PR/EVBsMWWTHuT95PUFaKA554ogLkcRLPcMr8GwcOXMfcXEZGBhYUaigtaSEwtm/fPiSFCH/IbZjPYzfAAQtDNfvgKVOmyNwMoTofdfz4cQX6eD2cUHNAxPDN9RQV45n0M7hr9+5q995oH6UrHh6eogBeKC+MoyGOfOjyDdNPpyukLN9L6aIxQ4WVwVEQR01/fsYkKN8h0ZWCKEXnozbS/Q77LzoxMs9PFH2x4nSK4s3fs2evRIPsm3iddKlYaUDDG56eni6BCzHbsmYmmsm6MeLFCKXdJx9/InNRKC/kMW/6F198ITkYJ8zsF3kegky0IcOsTFFcCE4lCuTxCQUk12Qj1RG91SnKjBVFA0aAkWJFt6jB/frLfQtd8Cl/TWtJ9H1Hupvi+yRiFxT4MSQtW7aUuyxuS464wnOGP0q26f5mu9zAUhgLlAgDJajSlzYWKARXoIYUJTDatUtnGPDkk3IDy9cY7H/QAH/HPqV3797wyCNtie8zE5iOi1un5y8ZOvv0CSKoayq52fnz5wRGeR28RlIcXV8coLuvn5R5+gX3E/4wcVtihfn4WQuPFjRXFmzatBFI4VCdyGHCWt7w/h2FTxRd7knOZagNn6gjR47W6feoacG7ccP7dwjxcVBwo6DKNgV0gs3rwF9B/WVyP5wozrGcnJzlbxIMtWFfZd/Yvk6/R00L3ub68jjMrcui0RRS6HwVSqr43yXM26nz1fBPk9t/o6hmRe0aNkLYg3qpg8LkLslR+ULxfUZwcL/7Bgr+LSUgIJCCqJwMRWuEgV7EX2Xw38J5e/sgk4/3w4v8U0ubNo/g9Omfyv+NYt2wjvTCJKqMpF/tqNhDvdxLYWe7i/K1DbqKPwAUqm0FjNDOCQAAAABJRU5ErkJggg==";
function P1(e) {
  return et({
    tag: "svg",
    attr: { viewBox: "0 0 32 32" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M 19.253906 2 C 15.311906 2 13 4.0821719 13 8.8261719 L 13 13 L 8 13 L 8 18 L 13 18 L 13 30 L 18 30 L 18 18 L 22 18 L 23 13 L 18 13 L 18 9.671875 C 18 7.884875 18.582766 7 20.259766 7 L 23 7 L 23 2.2050781 C 22.526 2.1410781 21.144906 2 19.253906 2 z",
        },
        child: [],
      },
    ],
  })(e);
}
function L1(e) {
  return et({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
        },
        child: [],
      },
    ],
  })(e);
}
function N1(e) {
  return et({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
        child: [],
      },
    ],
  })(e);
}
function O1(e) {
  return et({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12.001 9.55005C12.9181 8.61327 14.1121 8 15.501 8C18.5385 8 21.001 10.4624 21.001 13.5V21H19.001V13.5C19.001 11.567 17.434 10 15.501 10C13.568 10 12.001 11.567 12.001 13.5V21H10.001V8.5H12.001V9.55005ZM5.00098 6.5C4.17255 6.5 3.50098 5.82843 3.50098 5C3.50098 4.17157 4.17255 3.5 5.00098 3.5C5.8294 3.5 6.50098 4.17157 6.50098 5C6.50098 5.82843 5.8294 6.5 5.00098 6.5ZM4.00098 8.5H6.00098V21H4.00098V8.5Z",
        },
        child: [],
      },
    ],
  })(e);
}
function R1(e) {
  return et({
    tag: "svg",
    attr: { viewBox: "0 0 256 256", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM96,128a32,32,0,0,0,57.6,19.2,8,8,0,0,1,12.8,9.61,48,48,0,1,1,0-57.62,8,8,0,0,1-12.8,9.61A32,32,0,0,0,96,128Z",
        },
        child: [],
      },
    ],
  })(e);
}
function b1(e) {
  return et({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z",
        },
        child: [],
      },
    ],
  })(e);
}
function z1() {
  return E.jsxs("div", {
    className: "bg-black text-white min-h-96 ",
    children: [
      E.jsxs("div", {
        className:
          "  container-x gap-3 flex flex-wrap justify-start md:justify-between items-baseline text-start pt-8 sm:pt-10 md:pt-12 lg:pt-[72px]",
        children: [
          E.jsxs("div", {
            className:
              "w-[calc(50%-32px)] sm:w-[calc(33%-16px)] md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] flex flex-col gap-2 sm:gap-[10px] lg:gap-3 xl:gap-4",
            children: [
              E.jsx("h2", {
                className: "font-bold md:text-xl lg:text-2xl ",
                children: "Exclusive",
              }),
              E.jsx("p", {
                className:
                  "md:text-base lg:text-[20px] font-medium md:pt-1 lg:pt-1.5",
                children: "Subscribe",
              }),
              E.jsx("p", {
                className:
                  "  footer_text_mobile lg:footer_text_desktop lg:text-sm xl:text-base",
                children: "Get 10% off your first order",
              }),
              E.jsxs("div", {
                className:
                  "flex w-full h-9 sm:h-10 lg:h-11 xl:h-12 items-center text-center rounded border-2 border-white px-2 xl:px-4",
                children: [
                  E.jsx("input", {
                    type: "search",
                    className:
                      "w-full bg-transparent outline-none border-none placeholder-zinc-600 text-sm xl-text-base",
                    placeholder: "Enter your email",
                  }),
                  E.jsx(b1, { className: "rotate-45 text-2xl" }),
                ],
              }),
            ],
          }),
          E.jsxs("div", {
            className:
              "w-[calc(50%-32px)] sm:w-[calc(33%-16px)] md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] flex flex-col gap-2 sm:gap-[10px] lg:gap-3 xl:gap-4 ml-12 xl:pl-8",
            children: [
              E.jsx("h3", {
                className: " md:text-base lg:text-[20px] font-medium",
                children: "Support",
              }),
              E.jsxs("p", {
                className:
                  "md:pt-1 lg:pt-1.5  footer_text_mobile lg:footer_text_desktop",
                children: [
                  "111 Bijoy sarani, Dhaka,",
                  E.jsx("br", {}),
                  " DH 1515, Bangladesh.",
                ],
              }),
              E.jsx("p", {
                className: "  footer_text_mobile lg:footer_text_desktop",
                children: "exclusive@gmail.com",
              }),
              E.jsx("p", {
                className: "  footer_text_mobile lg:footer_text_desktop",
                children: "+88015-88888-9999",
              }),
            ],
          }),
          E.jsxs("div", {
            className:
              "w-[calc(50%-32px)] sm:w-[calc(33%-16px)] md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] flex flex-col gap-2 sm:gap-[10px] lg:gap-3 xl:gap-4  pt-5 md:pl-8",
            children: [
              E.jsx("h3", {
                className: " md:text-base lg:text-[20px] font-medium",
                children: "Account",
              }),
              E.jsx("p", {
                className:
                  "md:pt-1 lg:pt-1.5  footer_text_mobile lg:footer_text_desktop",
                children: "My Account",
              }),
              E.jsx("p", {
                className: "footer_text_mobile lg:footer_text_desktop",
                children: "Login / Register",
              }),
              E.jsx("p", {
                className: "footer_text_mobile lg:footer_text_desktop",
                children: "Cart",
              }),
              E.jsx("p", {
                className: "footer_text_mobile lg:footer_text_desktop",
                children: "Wishlist",
              }),
              E.jsx("p", {
                className: "footer_text_mobile lg:footer_text_desktop",
                children: "Shop",
              }),
            ],
          }),
          E.jsxs("div", {
            className:
              "w-[calc(50%-32px)] sm:w-[calc(33%-16px)] md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] flex flex-col gap-2 sm:gap-[10px] lg:gap-3 xl:gap-4  pt-5 pl-12 sm:pl-0 md:pl-6",
            children: [
              E.jsx("h3", {
                className: " md:text-base lg:text-[20px] font-medium",
                children: "Quick Link",
              }),
              E.jsx("p", {
                className:
                  "md:pt-1 lg:pt-1.5  footer_text_mobile lg:footer_text_desktop",
                children: "Privacy Policy",
              }),
              E.jsx("p", {
                className: "footer_text_mobile lg:footer_text_desktop",
                children: "Terms Of Use",
              }),
              E.jsx("p", {
                className: "footer_text_mobile lg:footer_text_desktop",
                children: "FAQ",
              }),
              E.jsx("p", {
                className: "footer_text_mobile lg:footer_text_desktop",
                children: "Contact",
              }),
            ],
          }),
          E.jsxs("div", {
            className:
              "w-[calc(100%)] sm:w-[calc(33%-16px)] md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] flex items-center justify-center sm:justify-normal sm:items-baseline flex-col gap-2 sm:gap-[10px] lg:gap-3 xl:gap-4 pt-5",
            children: [
              E.jsx("h3", {
                className:
                  "mr-20 sm:mr-0 md:text-base lg:text-[20px] font-medium",
                children: "Download App",
              }),
              E.jsxs("p", {
                className:
                  "mr-2 sm:mr-0 md:pt-1 lg:pt-1.5 text-xs font-medium text-zinc-400",
                children: ["Save $3 with App New User Only", " "],
              }),
              E.jsxs("div", {
                className: "flex gap-2 items-center",
                children: [
                  E.jsx("div", {
                    children: E.jsx("img", { src: T1, alt: "" }),
                  }),
                  E.jsxs("div", {
                    className: "flex flex-col gap-1",
                    children: [
                      E.jsx("img", { src: C1, alt: "" }),
                      E.jsx("img", { src: k1, alt: "" }),
                    ],
                  }),
                ],
              }),
              E.jsxs("div", {
                className: "flex gap-6 text-xl pt-2",
                children: [
                  E.jsx(P1, {}),
                  E.jsx(L1, {}),
                  E.jsx(N1, {}),
                  E.jsx(O1, {}),
                ],
              }),
            ],
          }),
        ],
      }),
      E.jsxs("div", {
        className:
          "flex justify-center items-center text-center gap-[6px] mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-[70px] text-zinc-500 pb-6 text-xs sm:text-base",
        children: [
          E.jsx(R1, { className: "" }),
          E.jsx("p", { children: "Copyright Rimel 2022. All right reserved" }),
        ],
      }),
    ],
  });
}
function bp(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: M1 } = Object.prototype,
  { getPrototypeOf: Ha } = Object,
  Fl = ((e) => (t) => {
    const n = M1.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  nt = (e) => ((e = e.toLowerCase()), (t) => Fl(t) === e),
  Bl = (e) => (t) => typeof t === e,
  { isArray: Zn } = Array,
  $r = Bl("undefined");
function A1(e) {
  return (
    e !== null &&
    !$r(e) &&
    e.constructor !== null &&
    !$r(e.constructor) &&
    _e(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const zp = nt("ArrayBuffer");
function _1(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && zp(e.buffer)),
    t
  );
}
const I1 = Bl("string"),
  _e = Bl("function"),
  Mp = Bl("number"),
  Vl = (e) => e !== null && typeof e == "object",
  D1 = (e) => e === !0 || e === !1,
  ji = (e) => {
    if (Fl(e) !== "object") return !1;
    const t = Ha(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  j1 = nt("Date"),
  F1 = nt("File"),
  B1 = nt("Blob"),
  V1 = nt("FileList"),
  H1 = (e) => Vl(e) && _e(e.pipe),
  U1 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (_e(e.append) &&
          ((t = Fl(e)) === "formdata" ||
            (t === "object" &&
              _e(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  W1 = nt("URLSearchParams"),
  [$1, G1, K1, Y1] = ["ReadableStream", "Request", "Response", "Headers"].map(
    nt,
  ),
  q1 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Zr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Zn(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const l = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = l.length;
    let a;
    for (r = 0; r < s; r++) (a = l[r]), t.call(null, e[a], a, e);
  }
}
function Ap(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const ln =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  _p = (e) => !$r(e) && e !== ln;
function Ro() {
  const { caseless: e } = (_p(this) && this) || {},
    t = {},
    n = (r, i) => {
      const l = (e && Ap(t, i)) || i;
      ji(t[l]) && ji(r)
        ? (t[l] = Ro(t[l], r))
        : ji(r)
          ? (t[l] = Ro({}, r))
          : Zn(r)
            ? (t[l] = r.slice())
            : (t[l] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Zr(arguments[r], n);
  return t;
}
const X1 = (e, t, n, { allOwnKeys: r } = {}) => (
    Zr(
      t,
      (i, l) => {
        n && _e(i) ? (e[l] = bp(i, n)) : (e[l] = i);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  Q1 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  J1 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Z1 = (e, t, n, r) => {
    let i, l, s;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), l = i.length; l-- > 0; )
        (s = i[l]), (!r || r(s, e, t)) && !a[s] && ((t[s] = e[s]), (a[s] = !0));
      e = n !== !1 && Ha(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  ew = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  tw = (e) => {
    if (!e) return null;
    if (Zn(e)) return e;
    let t = e.length;
    if (!Mp(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  nw = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Ha(Uint8Array)),
  rw = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const l = i.value;
      t.call(e, l[0], l[1]);
    }
  },
  iw = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  lw = nt("HTMLFormElement"),
  sw = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Sc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  ow = nt("RegExp"),
  Ip = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Zr(n, (i, l) => {
      let s;
      (s = t(i, l, e)) !== !1 && (r[l] = s || i);
    }),
      Object.defineProperties(e, r);
  },
  aw = (e) => {
    Ip(e, (t, n) => {
      if (_e(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (_e(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  uw = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((l) => {
          n[l] = !0;
        });
      };
    return Zn(e) ? r(e) : r(String(e).split(t)), n;
  },
  cw = () => {},
  dw = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Ns = "abcdefghijklmnopqrstuvwxyz",
  xc = "0123456789",
  Dp = { DIGIT: xc, ALPHA: Ns, ALPHA_DIGIT: Ns + Ns.toUpperCase() + xc },
  fw = (e = 16, t = Dp.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function pw(e) {
  return !!(
    e &&
    _e(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const mw = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (Vl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const l = Zn(r) ? [] : {};
            return (
              Zr(r, (s, a) => {
                const o = n(s, i + 1);
                !$r(o) && (l[a] = o);
              }),
              (t[i] = void 0),
              l
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  hw = nt("AsyncFunction"),
  gw = (e) => e && (Vl(e) || _e(e)) && _e(e.then) && _e(e.catch),
  jp = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, r) => (
            ln.addEventListener(
              "message",
              ({ source: i, data: l }) => {
                i === ln && l === n && r.length && r.shift()();
              },
              !1,
            ),
            (i) => {
              r.push(i), ln.postMessage(n, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    _e(ln.postMessage),
  ),
  vw =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(ln)
      : (typeof process < "u" && process.nextTick) || jp,
  k = {
    isArray: Zn,
    isArrayBuffer: zp,
    isBuffer: A1,
    isFormData: U1,
    isArrayBufferView: _1,
    isString: I1,
    isNumber: Mp,
    isBoolean: D1,
    isObject: Vl,
    isPlainObject: ji,
    isReadableStream: $1,
    isRequest: G1,
    isResponse: K1,
    isHeaders: Y1,
    isUndefined: $r,
    isDate: j1,
    isFile: F1,
    isBlob: B1,
    isRegExp: ow,
    isFunction: _e,
    isStream: H1,
    isURLSearchParams: W1,
    isTypedArray: nw,
    isFileList: V1,
    forEach: Zr,
    merge: Ro,
    extend: X1,
    trim: q1,
    stripBOM: Q1,
    inherits: J1,
    toFlatObject: Z1,
    kindOf: Fl,
    kindOfTest: nt,
    endsWith: ew,
    toArray: tw,
    forEachEntry: rw,
    matchAll: iw,
    isHTMLForm: lw,
    hasOwnProperty: Sc,
    hasOwnProp: Sc,
    reduceDescriptors: Ip,
    freezeMethods: aw,
    toObjectSet: uw,
    toCamelCase: sw,
    noop: cw,
    toFiniteNumber: dw,
    findKey: Ap,
    global: ln,
    isContextDefined: _p,
    ALPHABET: Dp,
    generateString: fw,
    isSpecCompliantForm: pw,
    toJSONObject: mw,
    isAsyncFn: hw,
    isThenable: gw,
    setImmediate: jp,
    asap: vw,
  };
function V(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && ((this.response = i), (this.status = i.status ? i.status : null));
}
k.inherits(V, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: k.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Fp = V.prototype,
  Bp = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Bp[e] = { value: e };
});
Object.defineProperties(V, Bp);
Object.defineProperty(Fp, "isAxiosError", { value: !0 });
V.from = (e, t, n, r, i, l) => {
  const s = Object.create(Fp);
  return (
    k.toFlatObject(
      e,
      s,
      function (o) {
        return o !== Error.prototype;
      },
      (a) => a !== "isAxiosError",
    ),
    V.call(s, e.message, t, n, r, i),
    (s.cause = e),
    (s.name = e.name),
    l && Object.assign(s, l),
    s
  );
};
const yw = null;
function bo(e) {
  return k.isPlainObject(e) || k.isArray(e);
}
function Vp(e) {
  return k.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ec(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, l) {
          return (i = Vp(i)), !n && l ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function ww(e) {
  return k.isArray(e) && !e.some(bo);
}
const Sw = k.toFlatObject(k, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Hl(e, t, n) {
  if (!k.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = k.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, S) {
        return !k.isUndefined(S[y]);
      },
    ));
  const r = n.metaTokens,
    i = n.visitor || c,
    l = n.dots,
    s = n.indexes,
    o = (n.Blob || (typeof Blob < "u" && Blob)) && k.isSpecCompliantForm(t);
  if (!k.isFunction(i)) throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (k.isDate(g)) return g.toISOString();
    if (!o && k.isBlob(g))
      throw new V("Blob is not supported. Use a Buffer instead.");
    return k.isArrayBuffer(g) || k.isTypedArray(g)
      ? o && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function c(g, y, S) {
    let p = g;
    if (g && !S && typeof g == "object") {
      if (k.endsWith(y, "{}"))
        (y = r ? y : y.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (k.isArray(g) && ww(g)) ||
        ((k.isFileList(g) || k.endsWith(y, "[]")) && (p = k.toArray(g)))
      )
        return (
          (y = Vp(y)),
          p.forEach(function (m, w) {
            !(k.isUndefined(m) || m === null) &&
              t.append(
                s === !0 ? Ec([y], w, l) : s === null ? y : y + "[]",
                u(m),
              );
          }),
          !1
        );
    }
    return bo(g) ? !0 : (t.append(Ec(S, y, l), u(g)), !1);
  }
  const f = [],
    h = Object.assign(Sw, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: bo,
    });
  function v(g, y) {
    if (!k.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(g),
        k.forEach(g, function (p, d) {
          (!(k.isUndefined(p) || p === null) &&
            i.call(t, p, k.isString(d) ? d.trim() : d, y, h)) === !0 &&
            v(p, y ? y.concat(d) : [d]);
        }),
        f.pop();
    }
  }
  if (!k.isObject(e)) throw new TypeError("data must be an object");
  return v(e), t;
}
function Tc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Ua(e, t) {
  (this._pairs = []), e && Hl(e, this, t);
}
const Hp = Ua.prototype;
Hp.append = function (t, n) {
  this._pairs.push([t, n]);
};
Hp.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Tc);
      }
    : Tc;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function xw(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Up(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || xw;
  k.isFunction(n) && (n = { serialize: n });
  const i = n && n.serialize;
  let l;
  if (
    (i
      ? (l = i(t, n))
      : (l = k.isURLSearchParams(t) ? t.toString() : new Ua(t, n).toString(r)),
    l)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + l);
  }
  return e;
}
class Cc {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    k.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Wp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Ew = typeof URLSearchParams < "u" ? URLSearchParams : Ua,
  Tw = typeof FormData < "u" ? FormData : null,
  Cw = typeof Blob < "u" ? Blob : null,
  kw = {
    isBrowser: !0,
    classes: { URLSearchParams: Ew, FormData: Tw, Blob: Cw },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Wa = typeof window < "u" && typeof document < "u",
  zo = (typeof navigator == "object" && navigator) || void 0,
  Pw =
    Wa &&
    (!zo || ["ReactNative", "NativeScript", "NS"].indexOf(zo.product) < 0),
  Lw =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Nw = (Wa && window.location.href) || "http://localhost",
  Ow = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Wa,
        hasStandardBrowserEnv: Pw,
        hasStandardBrowserWebWorkerEnv: Lw,
        navigator: zo,
        origin: Nw,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ye = { ...Ow, ...kw };
function Rw(e, t) {
  return Hl(
    e,
    new ye.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, l) {
          return ye.isNode && k.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : l.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function bw(e) {
  return k
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function zw(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let l;
  for (r = 0; r < i; r++) (l = n[r]), (t[l] = e[l]);
  return t;
}
function $p(e) {
  function t(n, r, i, l) {
    let s = n[l++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s),
      o = l >= n.length;
    return (
      (s = !s && k.isArray(i) ? i.length : s),
      o
        ? (k.hasOwnProp(i, s) ? (i[s] = [i[s], r]) : (i[s] = r), !a)
        : ((!i[s] || !k.isObject(i[s])) && (i[s] = []),
          t(n, r, i[s], l) && k.isArray(i[s]) && (i[s] = zw(i[s])),
          !a)
    );
  }
  if (k.isFormData(e) && k.isFunction(e.entries)) {
    const n = {};
    return (
      k.forEachEntry(e, (r, i) => {
        t(bw(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function Mw(e, t, n) {
  if (k.isString(e))
    try {
      return (t || JSON.parse)(e), k.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const ei = {
  transitional: Wp,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        l = k.isObject(t);
      if ((l && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t)))
        return i ? JSON.stringify($p(t)) : t;
      if (
        k.isArrayBuffer(t) ||
        k.isBuffer(t) ||
        k.isStream(t) ||
        k.isFile(t) ||
        k.isBlob(t) ||
        k.isReadableStream(t)
      )
        return t;
      if (k.isArrayBufferView(t)) return t.buffer;
      if (k.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let a;
      if (l) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Rw(t, this.formSerializer).toString();
        if ((a = k.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const o = this.env && this.env.FormData;
          return Hl(
            a ? { "files[]": t } : t,
            o && new o(),
            this.formSerializer,
          );
        }
      }
      return l || i ? (n.setContentType("application/json", !1), Mw(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ei.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (k.isResponse(t) || k.isReadableStream(t)) return t;
      if (t && k.isString(t) && ((r && !this.responseType) || i)) {
        const s = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (s)
            throw a.name === "SyntaxError"
              ? V.from(a, V.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ye.classes.FormData, Blob: ye.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
k.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ei.headers[e] = {};
});
const Aw = k.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  _w = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (s) {
            (i = s.indexOf(":")),
              (n = s.substring(0, i).trim().toLowerCase()),
              (r = s.substring(i + 1).trim()),
              !(!n || (t[n] && Aw[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  kc = Symbol("internals");
function dr(e) {
  return e && String(e).trim().toLowerCase();
}
function Fi(e) {
  return e === !1 || e == null ? e : k.isArray(e) ? e.map(Fi) : String(e);
}
function Iw(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Dw = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Os(e, t, n, r, i) {
  if (k.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!k.isString(t))) {
    if (k.isString(r)) return t.indexOf(r) !== -1;
    if (k.isRegExp(r)) return r.test(t);
  }
}
function jw(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Fw(e, t) {
  const n = k.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, l, s) {
        return this[r].call(this, t, i, l, s);
      },
      configurable: !0,
    });
  });
}
class Oe {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function l(a, o, u) {
      const c = dr(o);
      if (!c) throw new Error("header name must be a non-empty string");
      const f = k.findKey(i, c);
      (!f || i[f] === void 0 || u === !0 || (u === void 0 && i[f] !== !1)) &&
        (i[f || o] = Fi(a));
    }
    const s = (a, o) => k.forEach(a, (u, c) => l(u, c, o));
    if (k.isPlainObject(t) || t instanceof this.constructor) s(t, n);
    else if (k.isString(t) && (t = t.trim()) && !Dw(t)) s(_w(t), n);
    else if (k.isHeaders(t)) for (const [a, o] of t.entries()) l(o, a, r);
    else t != null && l(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = dr(t)), t)) {
      const r = k.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return Iw(i);
        if (k.isFunction(n)) return n.call(this, i, r);
        if (k.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = dr(t)), t)) {
      const r = k.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Os(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function l(s) {
      if (((s = dr(s)), s)) {
        const a = k.findKey(r, s);
        a && (!n || Os(r, r[a], a, n)) && (delete r[a], (i = !0));
      }
    }
    return k.isArray(t) ? t.forEach(l) : l(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const l = n[r];
      (!t || Os(this, this[l], l, t, !0)) && (delete this[l], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      k.forEach(this, (i, l) => {
        const s = k.findKey(r, l);
        if (s) {
          (n[s] = Fi(i)), delete n[l];
          return;
        }
        const a = t ? jw(l) : String(l).trim();
        a !== l && delete n[l], (n[a] = Fi(i)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      k.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && k.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[kc] = this[kc] = { accessors: {} }).accessors,
      i = this.prototype;
    function l(s) {
      const a = dr(s);
      r[a] || (Fw(i, s), (r[a] = !0));
    }
    return k.isArray(t) ? t.forEach(l) : l(t), this;
  }
}
Oe.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
k.reduceDescriptors(Oe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
k.freezeMethods(Oe);
function Rs(e, t) {
  const n = this || ei,
    r = t || n,
    i = Oe.from(r.headers);
  let l = r.data;
  return (
    k.forEach(e, function (a) {
      l = a.call(n, l, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    l
  );
}
function Gp(e) {
  return !!(e && e.__CANCEL__);
}
function er(e, t, n) {
  V.call(this, e ?? "canceled", V.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
k.inherits(er, V, { __CANCEL__: !0 });
function Kp(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new V(
          "Request failed with status code " + n.status,
          [V.ERR_BAD_REQUEST, V.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
function Bw(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Vw(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    l = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (o) {
      const u = Date.now(),
        c = r[l];
      s || (s = u), (n[i] = o), (r[i] = u);
      let f = l,
        h = 0;
      for (; f !== i; ) (h += n[f++]), (f = f % e);
      if (((i = (i + 1) % e), i === l && (l = (l + 1) % e), u - s < t)) return;
      const v = c && u - c;
      return v ? Math.round((h * 1e3) / v) : void 0;
    }
  );
}
function Hw(e, t) {
  let n = 0,
    r = 1e3 / t,
    i,
    l;
  const s = (u, c = Date.now()) => {
    (n = c), (i = null), l && (clearTimeout(l), (l = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const c = Date.now(),
        f = c - n;
      f >= r
        ? s(u, c)
        : ((i = u),
          l ||
            (l = setTimeout(() => {
              (l = null), s(i);
            }, r - f)));
    },
    () => i && s(i),
  ];
}
const wl = (e, t, n = 3) => {
    let r = 0;
    const i = Vw(50, 250);
    return Hw((l) => {
      const s = l.loaded,
        a = l.lengthComputable ? l.total : void 0,
        o = s - r,
        u = i(o),
        c = s <= a;
      r = s;
      const f = {
        loaded: s,
        total: a,
        progress: a ? s / a : void 0,
        bytes: o,
        rate: u || void 0,
        estimated: u && a && c ? (a - s) / u : void 0,
        event: l,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  Pc = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Lc =
    (e) =>
    (...t) =>
      k.asap(() => e(...t)),
  Uw = ye.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, ye.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(ye.origin),
        ye.navigator && /(msie|trident)/i.test(ye.navigator.userAgent),
      )
    : () => !0,
  Ww = ye.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, l) {
          const s = [e + "=" + encodeURIComponent(t)];
          k.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
            k.isString(r) && s.push("path=" + r),
            k.isString(i) && s.push("domain=" + i),
            l === !0 && s.push("secure"),
            (document.cookie = s.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function $w(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Gw(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Yp(e, t) {
  return e && !$w(t) ? Gw(e, t) : t;
}
const Nc = (e) => (e instanceof Oe ? { ...e } : e);
function hn(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, f, h) {
    return k.isPlainObject(u) && k.isPlainObject(c)
      ? k.merge.call({ caseless: h }, u, c)
      : k.isPlainObject(c)
        ? k.merge({}, c)
        : k.isArray(c)
          ? c.slice()
          : c;
  }
  function i(u, c, f, h) {
    if (k.isUndefined(c)) {
      if (!k.isUndefined(u)) return r(void 0, u, f, h);
    } else return r(u, c, f, h);
  }
  function l(u, c) {
    if (!k.isUndefined(c)) return r(void 0, c);
  }
  function s(u, c) {
    if (k.isUndefined(c)) {
      if (!k.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function a(u, c, f) {
    if (f in t) return r(u, c);
    if (f in e) return r(void 0, u);
  }
  const o = {
    url: l,
    method: l,
    data: l,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (u, c, f) => i(Nc(u), Nc(c), f, !0),
  };
  return (
    k.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = o[c] || i,
        h = f(e[c], t[c], c);
      (k.isUndefined(h) && f !== a) || (n[c] = h);
    }),
    n
  );
}
const qp = (e) => {
    const t = hn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: i,
      xsrfCookieName: l,
      headers: s,
      auth: a,
    } = t;
    (t.headers = s = Oe.from(s)),
      (t.url = Up(Yp(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        s.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : ""),
            ),
        );
    let o;
    if (k.isFormData(n)) {
      if (ye.hasStandardBrowserEnv || ye.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if ((o = s.getContentType()) !== !1) {
        const [u, ...c] = o
          ? o
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        s.setContentType([u || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      ye.hasStandardBrowserEnv &&
      (r && k.isFunction(r) && (r = r(t)), r || (r !== !1 && Uw(t.url)))
    ) {
      const u = i && l && Ww.read(l);
      u && s.set(i, u);
    }
    return t;
  },
  Kw = typeof XMLHttpRequest < "u",
  Yw =
    Kw &&
    function (e) {
      return new Promise(function (n, r) {
        const i = qp(e);
        let l = i.data;
        const s = Oe.from(i.headers).normalize();
        let { responseType: a, onUploadProgress: o, onDownloadProgress: u } = i,
          c,
          f,
          h,
          v,
          g;
        function y() {
          v && v(),
            g && g(),
            i.cancelToken && i.cancelToken.unsubscribe(c),
            i.signal && i.signal.removeEventListener("abort", c);
        }
        let S = new XMLHttpRequest();
        S.open(i.method.toUpperCase(), i.url, !0), (S.timeout = i.timeout);
        function p() {
          if (!S) return;
          const m = Oe.from(
              "getAllResponseHeaders" in S && S.getAllResponseHeaders(),
            ),
            x = {
              data:
                !a || a === "text" || a === "json"
                  ? S.responseText
                  : S.response,
              status: S.status,
              statusText: S.statusText,
              headers: m,
              config: e,
              request: S,
            };
          Kp(
            function (R) {
              n(R), y();
            },
            function (R) {
              r(R), y();
            },
            x,
          ),
            (S = null);
        }
        "onloadend" in S
          ? (S.onloadend = p)
          : (S.onreadystatechange = function () {
              !S ||
                S.readyState !== 4 ||
                (S.status === 0 &&
                  !(S.responseURL && S.responseURL.indexOf("file:") === 0)) ||
                setTimeout(p);
            }),
          (S.onabort = function () {
            S &&
              (r(new V("Request aborted", V.ECONNABORTED, e, S)), (S = null));
          }),
          (S.onerror = function () {
            r(new V("Network Error", V.ERR_NETWORK, e, S)), (S = null);
          }),
          (S.ontimeout = function () {
            let w = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const x = i.transitional || Wp;
            i.timeoutErrorMessage && (w = i.timeoutErrorMessage),
              r(
                new V(
                  w,
                  x.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
                  e,
                  S,
                ),
              ),
              (S = null);
          }),
          l === void 0 && s.setContentType(null),
          "setRequestHeader" in S &&
            k.forEach(s.toJSON(), function (w, x) {
              S.setRequestHeader(x, w);
            }),
          k.isUndefined(i.withCredentials) ||
            (S.withCredentials = !!i.withCredentials),
          a && a !== "json" && (S.responseType = i.responseType),
          u && (([h, g] = wl(u, !0)), S.addEventListener("progress", h)),
          o &&
            S.upload &&
            (([f, v] = wl(o)),
            S.upload.addEventListener("progress", f),
            S.upload.addEventListener("loadend", v)),
          (i.cancelToken || i.signal) &&
            ((c = (m) => {
              S &&
                (r(!m || m.type ? new er(null, e, S) : m),
                S.abort(),
                (S = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(c),
            i.signal &&
              (i.signal.aborted ? c() : i.signal.addEventListener("abort", c)));
        const d = Bw(i.url);
        if (d && ye.protocols.indexOf(d) === -1) {
          r(new V("Unsupported protocol " + d + ":", V.ERR_BAD_REQUEST, e));
          return;
        }
        S.send(l || null);
      });
    },
  qw = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        i;
      const l = function (u) {
        if (!i) {
          (i = !0), a();
          const c = u instanceof Error ? u : this.reason;
          r.abort(
            c instanceof V ? c : new er(c instanceof Error ? c.message : c),
          );
        }
      };
      let s =
        t &&
        setTimeout(() => {
          (s = null), l(new V(`timeout ${t} of ms exceeded`, V.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (s && clearTimeout(s),
          (s = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(l)
              : u.removeEventListener("abort", l);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", l));
      const { signal: o } = r;
      return (o.unsubscribe = () => k.asap(a)), o;
    }
  },
  Xw = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
  },
  Qw = async function* (e, t) {
    for await (const n of Jw(e)) yield* Xw(n, t);
  },
  Jw = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Oc = (e, t, n, r) => {
    const i = Qw(e, t);
    let l = 0,
      s,
      a = (o) => {
        s || ((s = !0), r && r(o));
      };
    return new ReadableStream(
      {
        async pull(o) {
          try {
            const { done: u, value: c } = await i.next();
            if (u) {
              a(), o.close();
              return;
            }
            let f = c.byteLength;
            if (n) {
              let h = (l += f);
              n(h);
            }
            o.enqueue(new Uint8Array(c));
          } catch (u) {
            throw (a(u), u);
          }
        },
        cancel(o) {
          return a(o), i.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  Ul =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Xp = Ul && typeof ReadableStream == "function",
  Zw =
    Ul &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Qp = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  eS =
    Xp &&
    Qp(() => {
      let e = !1;
      const t = new Request(ye.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Rc = 64 * 1024,
  Mo = Xp && Qp(() => k.isReadableStream(new Response("").body)),
  Sl = { stream: Mo && ((e) => e.body) };
Ul &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Sl[t] &&
        (Sl[t] = k.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new V(
                `Response type '${t}' is not supported`,
                V.ERR_NOT_SUPPORT,
                r,
              );
            });
    });
  })(new Response());
const tS = async (e) => {
    if (e == null) return 0;
    if (k.isBlob(e)) return e.size;
    if (k.isSpecCompliantForm(e))
      return (
        await new Request(ye.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (k.isArrayBufferView(e) || k.isArrayBuffer(e)) return e.byteLength;
    if ((k.isURLSearchParams(e) && (e = e + ""), k.isString(e)))
      return (await Zw(e)).byteLength;
  },
  nS = async (e, t) => {
    const n = k.toFiniteNumber(e.getContentLength());
    return n ?? tS(t);
  },
  rS =
    Ul &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: i,
        cancelToken: l,
        timeout: s,
        onDownloadProgress: a,
        onUploadProgress: o,
        responseType: u,
        headers: c,
        withCredentials: f = "same-origin",
        fetchOptions: h,
      } = qp(e);
      u = u ? (u + "").toLowerCase() : "text";
      let v = qw([i, l && l.toAbortSignal()], s),
        g;
      const y =
        v &&
        v.unsubscribe &&
        (() => {
          v.unsubscribe();
        });
      let S;
      try {
        if (
          o &&
          eS &&
          n !== "get" &&
          n !== "head" &&
          (S = await nS(c, r)) !== 0
        ) {
          let x = new Request(t, { method: "POST", body: r, duplex: "half" }),
            C;
          if (
            (k.isFormData(r) &&
              (C = x.headers.get("content-type")) &&
              c.setContentType(C),
            x.body)
          ) {
            const [R, L] = Pc(S, wl(Lc(o)));
            r = Oc(x.body, Rc, R, L);
          }
        }
        k.isString(f) || (f = f ? "include" : "omit");
        const p = "credentials" in Request.prototype;
        g = new Request(t, {
          ...h,
          signal: v,
          method: n.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: p ? f : void 0,
        });
        let d = await fetch(g);
        const m = Mo && (u === "stream" || u === "response");
        if (Mo && (a || (m && y))) {
          const x = {};
          ["status", "statusText", "headers"].forEach((N) => {
            x[N] = d[N];
          });
          const C = k.toFiniteNumber(d.headers.get("content-length")),
            [R, L] = (a && Pc(C, wl(Lc(a), !0))) || [];
          d = new Response(
            Oc(d.body, Rc, R, () => {
              L && L(), y && y();
            }),
            x,
          );
        }
        u = u || "text";
        let w = await Sl[k.findKey(Sl, u) || "text"](d, e);
        return (
          !m && y && y(),
          await new Promise((x, C) => {
            Kp(x, C, {
              data: w,
              headers: Oe.from(d.headers),
              status: d.status,
              statusText: d.statusText,
              config: e,
              request: g,
            });
          })
        );
      } catch (p) {
        throw (
          (y && y(),
          p && p.name === "TypeError" && /fetch/i.test(p.message)
            ? Object.assign(new V("Network Error", V.ERR_NETWORK, e, g), {
                cause: p.cause || p,
              })
            : V.from(p, p && p.code, e, g))
        );
      }
    }),
  Ao = { http: yw, xhr: Yw, fetch: rS };
k.forEach(Ao, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const bc = (e) => `- ${e}`,
  iS = (e) => k.isFunction(e) || e === null || e === !1,
  Jp = {
    getAdapter: (e) => {
      e = k.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let l = 0; l < t; l++) {
        n = e[l];
        let s;
        if (
          ((r = n),
          !iS(n) && ((r = Ao[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new V(`Unknown adapter '${s}'`);
        if (r) break;
        i[s || "#" + l] = r;
      }
      if (!r) {
        const l = Object.entries(i).map(
          ([a, o]) =>
            `adapter ${a} ` +
            (o === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let s = t
          ? l.length > 1
            ? `since :
` +
              l.map(bc).join(`
`)
            : " " + bc(l[0])
          : "as no adapter specified";
        throw new V(
          "There is no suitable adapter to dispatch the request " + s,
          "ERR_NOT_SUPPORT",
        );
      }
      return r;
    },
    adapters: Ao,
  };
function bs(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new er(null, e);
}
function zc(e) {
  return (
    bs(e),
    (e.headers = Oe.from(e.headers)),
    (e.data = Rs.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Jp.getAdapter(e.adapter || ei.adapter)(e).then(
      function (r) {
        return (
          bs(e),
          (r.data = Rs.call(e, e.transformResponse, r)),
          (r.headers = Oe.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Gp(r) ||
            (bs(e),
            r &&
              r.response &&
              ((r.response.data = Rs.call(e, e.transformResponse, r.response)),
              (r.response.headers = Oe.from(r.response.headers)))),
          Promise.reject(r)
        );
      },
    )
  );
}
const Zp = "1.7.9",
  Wl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Wl[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const Mc = {};
Wl.transitional = function (t, n, r) {
  function i(l, s) {
    return (
      "[Axios v" +
      Zp +
      "] Transitional option '" +
      l +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (l, s, a) => {
    if (t === !1)
      throw new V(
        i(s, " has been removed" + (n ? " in " + n : "")),
        V.ERR_DEPRECATED,
      );
    return (
      n &&
        !Mc[s] &&
        ((Mc[s] = !0),
        console.warn(
          i(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(l, s, a) : !0
    );
  };
};
Wl.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function lS(e, t, n) {
  if (typeof e != "object")
    throw new V("options must be an object", V.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const l = r[i],
      s = t[l];
    if (s) {
      const a = e[l],
        o = a === void 0 || s(a, l, e);
      if (o !== !0)
        throw new V("option " + l + " must be " + o, V.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new V("Unknown option " + l, V.ERR_BAD_OPTION);
  }
}
const Bi = { assertOptions: lS, validators: Wl },
  it = Bi.validators;
class an {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Cc(), response: new Cc() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(i)
          : (i = new Error());
        const l = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? l &&
              !String(r.stack).endsWith(l.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + l)
            : (r.stack = l);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = hn(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: l } = n;
    r !== void 0 &&
      Bi.assertOptions(
        r,
        {
          silentJSONParsing: it.transitional(it.boolean),
          forcedJSONParsing: it.transitional(it.boolean),
          clarifyTimeoutError: it.transitional(it.boolean),
        },
        !1,
      ),
      i != null &&
        (k.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : Bi.assertOptions(
              i,
              { encode: it.function, serialize: it.function },
              !0,
            )),
      Bi.assertOptions(
        n,
        {
          baseUrl: it.spelling("baseURL"),
          withXsrfToken: it.spelling("withXSRFToken"),
        },
        !0,
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s = l && k.merge(l.common, l[n.method]);
    l &&
      k.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete l[g];
        },
      ),
      (n.headers = Oe.concat(s, l));
    const a = [];
    let o = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == "function" && y.runWhen(n) === !1) ||
        ((o = o && y.synchronous), a.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (y) {
      u.push(y.fulfilled, y.rejected);
    });
    let c,
      f = 0,
      h;
    if (!o) {
      const g = [zc.bind(this), void 0];
      for (
        g.unshift.apply(g, a),
          g.push.apply(g, u),
          h = g.length,
          c = Promise.resolve(n);
        f < h;

      )
        c = c.then(g[f++], g[f++]);
      return c;
    }
    h = a.length;
    let v = n;
    for (f = 0; f < h; ) {
      const g = a[f++],
        y = a[f++];
      try {
        v = g(v);
      } catch (S) {
        y.call(this, S);
        break;
      }
    }
    try {
      c = zc.call(this, v);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, h = u.length; f < h; ) c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = hn(this.defaults, t);
    const n = Yp(t.baseURL, t.url);
    return Up(n, t.params, t.paramsSerializer);
  }
}
k.forEach(["delete", "get", "head", "options"], function (t) {
  an.prototype[t] = function (n, r) {
    return this.request(
      hn(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
k.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (l, s, a) {
      return this.request(
        hn(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: l,
          data: s,
        }),
      );
    };
  }
  (an.prototype[t] = n()), (an.prototype[t + "Form"] = n(!0));
});
class $a {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (l) {
      n = l;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let l = r._listeners.length;
      for (; l-- > 0; ) r._listeners[l](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let l;
        const s = new Promise((a) => {
          r.subscribe(a), (l = a);
        }).then(i);
        return (
          (s.cancel = function () {
            r.unsubscribe(l);
          }),
          s
        );
      }),
      t(function (l, s, a) {
        r.reason || ((r.reason = new er(l, s, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new $a(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
function sS(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function oS(e) {
  return k.isObject(e) && e.isAxiosError === !0;
}
const _o = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(_o).forEach(([e, t]) => {
  _o[t] = e;
});
function em(e) {
  const t = new an(e),
    n = bp(an.prototype.request, t);
  return (
    k.extend(n, an.prototype, t, { allOwnKeys: !0 }),
    k.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return em(hn(e, i));
    }),
    n
  );
}
const se = em(ei);
se.Axios = an;
se.CanceledError = er;
se.CancelToken = $a;
se.isCancel = Gp;
se.VERSION = Zp;
se.toFormData = Hl;
se.AxiosError = V;
se.Cancel = se.CanceledError;
se.all = function (t) {
  return Promise.all(t);
};
se.spread = sS;
se.isAxiosError = oS;
se.mergeConfig = hn;
se.AxiosHeaders = Oe;
se.formToJSON = (e) => $p(k.isHTMLForm(e) ? new FormData(e) : e);
se.getAdapter = Jp.getAdapter;
se.HttpStatusCode = _o;
se.default = se;
function aS() {
  const e = "https://dummyjson.com/products",
    [t, n] = T.useState(null),
    r = async () => {
      var u;
      const o = await se(e);
      n((u = o == null ? void 0 : o.data) == null ? void 0 : u.products);
    };
  T.useEffect(() => {
    r();
  }, []);
  const [i, l] = T.useState(""),
    a =
      (t == null
        ? void 0
        : t.filter((u) => u.title.toLowerCase().includes(i))) || [];
  return E.jsxs("div", {
    className: "container-x",
    children: [
      E.jsx("input", {
        type: "search",
        name: "price",
        id: "price",
        onChange: (o) => {
          var u;
          l((u = o.target.value) == null ? void 0 : u.toLowerCase());
        },
        className:
          "block w-full outline-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary my-8 sm:text-sm/6",
        placeholder: "Search your product",
      }),
      t === null ? "Loading...." : null,
      E.jsxs("div", {
        className: "flex flex-wrap justify-center gap-4",
        children: [
          a.length === 0 ? "product not found" : "",
          a == null
            ? void 0
            : a.map((o) =>
                E.jsx(
                  at,
                  {
                    image: o.thumbnail,
                    name: o.title,
                    price: o.price,
                    discountPercentage: o.discountPercentage,
                    rating: o.rating,
                  },
                  o.id,
                ),
              ),
        ],
      }),
    ],
  });
}
function uS() {
  return E.jsxs(E.Fragment, {
    children: [
      E.jsx(Ng, {}),
      E.jsx(x0, {}),
      E.jsxs(Vv, {
        children: [
          E.jsx(lt, { path: "/", element: E.jsx(wc, {}) }),
          E.jsx(lt, { path: "/home", element: E.jsx(wc, {}) }),
          E.jsx(lt, { path: "/about", element: E.jsx(x1, {}) }),
          E.jsx(lt, { path: "/contact-us", element: E.jsx(E1, {}) }),
          E.jsx(lt, { path: "/products", element: E.jsx(aS, {}) }),
          E.jsx(lt, {
            path: "/not-found",
            element: E.jsx("div", { children: "not founddddd" }),
          }),
          E.jsxs(E.Fragment, {
            children: [
              E.jsx(lt, {
                path: "/profile",
                element: E.jsx("div", { children: "This is my profile page" }),
              }),
              E.jsx(lt, { path: "/login", element: E.jsx(uc, { to: "/" }) }),
              E.jsx(lt, {
                path: "*",
                element: E.jsx(uc, { to: "/not-found" }),
              }),
            ],
          }),
        ],
      }),
      E.jsx(z1, {}),
    ],
  });
}
Kf(document.getElementById("root")).render(
  E.jsx(T.StrictMode, {
    children: E.jsx(d0, {
      future: { v7_relativeSplatPath: !0 },
      children: E.jsx(uS, {}),
    }),
  }),
);

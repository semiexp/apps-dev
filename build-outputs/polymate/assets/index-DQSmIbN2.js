var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function W1(e3, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r) if (o !== "default" && !(o in e3)) {
        const i = Object.getOwnPropertyDescriptor(r, o);
        i && Object.defineProperty(e3, o, i.get ? i : { enumerable: true, get: () => r[o] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }));
}
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o) if (i.type === "childList") for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: true, subtree: true });
  function n(o) {
    const i = {};
    return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function r(o) {
    if (o.ep) return;
    o.ep = true;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Bg(e3) {
  return e3 && e3.__esModule && Object.prototype.hasOwnProperty.call(e3, "default") ? e3.default : e3;
}
function rr(e3) {
  if (e3.__esModule) return e3;
  var t = e3.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: true }), Object.keys(e3).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e3, r);
    Object.defineProperty(n, r, o.get ? o : { enumerable: true, get: function() {
      return e3[r];
    } });
  }), n;
}
var Wg = { exports: {} }, Ta = {}, Ug = { exports: {} }, ae = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ps = Symbol.for("react.element"), U1 = Symbol.for("react.portal"), V1 = Symbol.for("react.fragment"), H1 = Symbol.for("react.strict_mode"), K1 = Symbol.for("react.profiler"), Y1 = Symbol.for("react.provider"), X1 = Symbol.for("react.context"), G1 = Symbol.for("react.forward_ref"), Q1 = Symbol.for("react.suspense"), q1 = Symbol.for("react.memo"), Z1 = Symbol.for("react.lazy"), Hp = Symbol.iterator;
function J1(e3) {
  return e3 === null || typeof e3 != "object" ? null : (e3 = Hp && e3[Hp] || e3["@@iterator"], typeof e3 == "function" ? e3 : null);
}
var Vg = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Hg = Object.assign, Kg = {};
function qo(e3, t, n) {
  this.props = e3, this.context = t, this.refs = Kg, this.updater = n || Vg;
}
qo.prototype.isReactComponent = {};
qo.prototype.setState = function(e3, t) {
  if (typeof e3 != "object" && typeof e3 != "function" && e3 != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e3, t, "setState");
};
qo.prototype.forceUpdate = function(e3) {
  this.updater.enqueueForceUpdate(this, e3, "forceUpdate");
};
function Yg() {
}
Yg.prototype = qo.prototype;
function Qd(e3, t, n) {
  this.props = e3, this.context = t, this.refs = Kg, this.updater = n || Vg;
}
var qd = Qd.prototype = new Yg();
qd.constructor = Qd;
Hg(qd, qo.prototype);
qd.isPureReactComponent = true;
var Kp = Array.isArray, Xg = Object.prototype.hasOwnProperty, Zd = { current: null }, Gg = { key: true, ref: true, __self: true, __source: true };
function Qg(e3, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Xg.call(t, r) && !Gg.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e3 && e3.defaultProps) for (r in l = e3.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: Ps, type: e3, key: i, ref: s, props: o, _owner: Zd.current };
}
function ex(e3, t) {
  return { $$typeof: Ps, type: e3.type, key: t, ref: e3.ref, props: e3.props, _owner: e3._owner };
}
function Jd(e3) {
  return typeof e3 == "object" && e3 !== null && e3.$$typeof === Ps;
}
function tx(e3) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e3.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Yp = /\/+/g;
function Bu(e3, t) {
  return typeof e3 == "object" && e3 !== null && e3.key != null ? tx("" + e3.key) : t.toString(36);
}
function Sl(e3, t, n, r, o) {
  var i = typeof e3;
  (i === "undefined" || i === "boolean") && (e3 = null);
  var s = false;
  if (e3 === null) s = true;
  else switch (i) {
    case "string":
    case "number":
      s = true;
      break;
    case "object":
      switch (e3.$$typeof) {
        case Ps:
        case U1:
          s = true;
      }
  }
  if (s) return s = e3, o = o(s), e3 = r === "" ? "." + Bu(s, 0) : r, Kp(o) ? (n = "", e3 != null && (n = e3.replace(Yp, "$&/") + "/"), Sl(o, t, n, "", function(u) {
    return u;
  })) : o != null && (Jd(o) && (o = ex(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Yp, "$&/") + "/") + e3)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Kp(e3)) for (var l = 0; l < e3.length; l++) {
    i = e3[l];
    var a = r + Bu(i, l);
    s += Sl(i, t, n, a, o);
  }
  else if (a = J1(e3), typeof a == "function") for (e3 = a.call(e3), l = 0; !(i = e3.next()).done; ) i = i.value, a = r + Bu(i, l++), s += Sl(i, t, n, a, o);
  else if (i === "object") throw t = String(e3), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e3).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Ks(e3, t, n) {
  if (e3 == null) return e3;
  var r = [], o = 0;
  return Sl(e3, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function nx(e3) {
  if (e3._status === -1) {
    var t = e3._result;
    t = t(), t.then(function(n) {
      (e3._status === 0 || e3._status === -1) && (e3._status = 1, e3._result = n);
    }, function(n) {
      (e3._status === 0 || e3._status === -1) && (e3._status = 2, e3._result = n);
    }), e3._status === -1 && (e3._status = 0, e3._result = t);
  }
  if (e3._status === 1) return e3._result.default;
  throw e3._result;
}
var Et = { current: null }, bl = { transition: null }, rx = { ReactCurrentDispatcher: Et, ReactCurrentBatchConfig: bl, ReactCurrentOwner: Zd };
function qg() {
  throw Error("act(...) is not supported in production builds of React.");
}
ae.Children = { map: Ks, forEach: function(e3, t, n) {
  Ks(e3, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e3) {
  var t = 0;
  return Ks(e3, function() {
    t++;
  }), t;
}, toArray: function(e3) {
  return Ks(e3, function(t) {
    return t;
  }) || [];
}, only: function(e3) {
  if (!Jd(e3)) throw Error("React.Children.only expected to receive a single React element child.");
  return e3;
} };
ae.Component = qo;
ae.Fragment = V1;
ae.Profiler = K1;
ae.PureComponent = Qd;
ae.StrictMode = H1;
ae.Suspense = Q1;
ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rx;
ae.act = qg;
ae.cloneElement = function(e3, t, n) {
  if (e3 == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e3 + ".");
  var r = Hg({}, e3.props), o = e3.key, i = e3.ref, s = e3._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Zd.current), t.key !== void 0 && (o = "" + t.key), e3.type && e3.type.defaultProps) var l = e3.type.defaultProps;
    for (a in t) Xg.call(t, a) && !Gg.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Ps, type: e3.type, key: o, ref: i, props: r, _owner: s };
};
ae.createContext = function(e3) {
  return e3 = { $$typeof: X1, _currentValue: e3, _currentValue2: e3, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e3.Provider = { $$typeof: Y1, _context: e3 }, e3.Consumer = e3;
};
ae.createElement = Qg;
ae.createFactory = function(e3) {
  var t = Qg.bind(null, e3);
  return t.type = e3, t;
};
ae.createRef = function() {
  return { current: null };
};
ae.forwardRef = function(e3) {
  return { $$typeof: G1, render: e3 };
};
ae.isValidElement = Jd;
ae.lazy = function(e3) {
  return { $$typeof: Z1, _payload: { _status: -1, _result: e3 }, _init: nx };
};
ae.memo = function(e3, t) {
  return { $$typeof: q1, type: e3, compare: t === void 0 ? null : t };
};
ae.startTransition = function(e3) {
  var t = bl.transition;
  bl.transition = {};
  try {
    e3();
  } finally {
    bl.transition = t;
  }
};
ae.unstable_act = qg;
ae.useCallback = function(e3, t) {
  return Et.current.useCallback(e3, t);
};
ae.useContext = function(e3) {
  return Et.current.useContext(e3);
};
ae.useDebugValue = function() {
};
ae.useDeferredValue = function(e3) {
  return Et.current.useDeferredValue(e3);
};
ae.useEffect = function(e3, t) {
  return Et.current.useEffect(e3, t);
};
ae.useId = function() {
  return Et.current.useId();
};
ae.useImperativeHandle = function(e3, t, n) {
  return Et.current.useImperativeHandle(e3, t, n);
};
ae.useInsertionEffect = function(e3, t) {
  return Et.current.useInsertionEffect(e3, t);
};
ae.useLayoutEffect = function(e3, t) {
  return Et.current.useLayoutEffect(e3, t);
};
ae.useMemo = function(e3, t) {
  return Et.current.useMemo(e3, t);
};
ae.useReducer = function(e3, t, n) {
  return Et.current.useReducer(e3, t, n);
};
ae.useRef = function(e3) {
  return Et.current.useRef(e3);
};
ae.useState = function(e3) {
  return Et.current.useState(e3);
};
ae.useSyncExternalStore = function(e3, t, n) {
  return Et.current.useSyncExternalStore(e3, t, n);
};
ae.useTransition = function() {
  return Et.current.useTransition();
};
ae.version = "18.3.1";
Ug.exports = ae;
var S = Ug.exports;
const jn = Bg(S), jc = W1({ __proto__: null, default: jn }, [S]);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ox = S, ix = Symbol.for("react.element"), sx = Symbol.for("react.fragment"), lx = Object.prototype.hasOwnProperty, ax = ox.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ux = { key: true, ref: true, __self: true, __source: true };
function Zg(e3, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) lx.call(t, r) && !ux.hasOwnProperty(r) && (o[r] = t[r]);
  if (e3 && e3.defaultProps) for (r in t = e3.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: ix, type: e3, key: i, ref: s, props: o, _owner: ax.current };
}
Ta.Fragment = sx;
Ta.jsx = Zg;
Ta.jsxs = Zg;
Wg.exports = Ta;
var b = Wg.exports, Jg = { exports: {} }, Qt = {}, ev = { exports: {} }, tv = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function(e3) {
  function t(R, N) {
    var _ = R.length;
    R.push(N);
    e: for (; 0 < _; ) {
      var B = _ - 1 >>> 1, W = R[B];
      if (0 < o(W, N)) R[B] = N, R[_] = W, _ = B;
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var N = R[0], _ = R.pop();
    if (_ !== N) {
      R[0] = _;
      e: for (var B = 0, W = R.length, V = W >>> 1; B < V; ) {
        var K = 2 * (B + 1) - 1, te = R[K], H = K + 1, ie = R[H];
        if (0 > o(te, _)) H < W && 0 > o(ie, te) ? (R[B] = ie, R[H] = _, B = H) : (R[B] = te, R[K] = _, B = K);
        else if (H < W && 0 > o(ie, _)) R[B] = ie, R[H] = _, B = H;
        else break e;
      }
    }
    return N;
  }
  function o(R, N) {
    var _ = R.sortIndex - N.sortIndex;
    return _ !== 0 ? _ : R.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e3.unstable_now = function() {
      return i.now();
    };
  } else {
    var s = Date, l = s.now();
    e3.unstable_now = function() {
      return s.now() - l;
    };
  }
  var a = [], u = [], c = 1, d = null, f = 3, p = false, y = false, v = false, w = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(R) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= R) r(u), N.sortIndex = N.expirationTime, t(a, N);
      else break;
      N = n(u);
    }
  }
  function x(R) {
    if (v = false, g(R), !y) if (n(a) !== null) y = true, j(C);
    else {
      var N = n(u);
      N !== null && O(x, N.startTime - R);
    }
  }
  function C(R, N) {
    y = false, v && (v = false, h($), $ = -1), p = true;
    var _ = f;
    try {
      for (g(N), d = n(a); d !== null && (!(d.expirationTime > N) || R && !D()); ) {
        var B = d.callback;
        if (typeof B == "function") {
          d.callback = null, f = d.priorityLevel;
          var W = B(d.expirationTime <= N);
          N = e3.unstable_now(), typeof W == "function" ? d.callback = W : d === n(a) && r(a), g(N);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var V = true;
      else {
        var K = n(u);
        K !== null && O(x, K.startTime - N), V = false;
      }
      return V;
    } finally {
      d = null, f = _, p = false;
    }
  }
  var E = false, P = null, $ = -1, L = 5, T = -1;
  function D() {
    return !(e3.unstable_now() - T < L);
  }
  function z() {
    if (P !== null) {
      var R = e3.unstable_now();
      T = R;
      var N = true;
      try {
        N = P(true, R);
      } finally {
        N ? M() : (E = false, P = null);
      }
    } else E = false;
  }
  var M;
  if (typeof m == "function") M = function() {
    m(z);
  };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(), A = I.port2;
    I.port1.onmessage = z, M = function() {
      A.postMessage(null);
    };
  } else M = function() {
    w(z, 0);
  };
  function j(R) {
    P = R, E || (E = true, M());
  }
  function O(R, N) {
    $ = w(function() {
      R(e3.unstable_now());
    }, N);
  }
  e3.unstable_IdlePriority = 5, e3.unstable_ImmediatePriority = 1, e3.unstable_LowPriority = 4, e3.unstable_NormalPriority = 3, e3.unstable_Profiling = null, e3.unstable_UserBlockingPriority = 2, e3.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, e3.unstable_continueExecution = function() {
    y || p || (y = true, j(C));
  }, e3.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < R ? Math.floor(1e3 / R) : 5;
  }, e3.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e3.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e3.unstable_next = function(R) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = f;
    }
    var _ = f;
    f = N;
    try {
      return R();
    } finally {
      f = _;
    }
  }, e3.unstable_pauseExecution = function() {
  }, e3.unstable_requestPaint = function() {
  }, e3.unstable_runWithPriority = function(R, N) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var _ = f;
    f = R;
    try {
      return N();
    } finally {
      f = _;
    }
  }, e3.unstable_scheduleCallback = function(R, N, _) {
    var B = e3.unstable_now();
    switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? B + _ : B) : _ = B, R) {
      case 1:
        var W = -1;
        break;
      case 2:
        W = 250;
        break;
      case 5:
        W = 1073741823;
        break;
      case 4:
        W = 1e4;
        break;
      default:
        W = 5e3;
    }
    return W = _ + W, R = { id: c++, callback: N, priorityLevel: R, startTime: _, expirationTime: W, sortIndex: -1 }, _ > B ? (R.sortIndex = _, t(u, R), n(a) === null && R === n(u) && (v ? (h($), $ = -1) : v = true, O(x, _ - B))) : (R.sortIndex = W, t(a, R), y || p || (y = true, j(C))), R;
  }, e3.unstable_shouldYield = D, e3.unstable_wrapCallback = function(R) {
    var N = f;
    return function() {
      var _ = f;
      f = N;
      try {
        return R.apply(this, arguments);
      } finally {
        f = _;
      }
    };
  };
})(tv);
ev.exports = tv;
var cx = ev.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var dx = S, Xt = cx;
function F(e3) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e3, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e3 + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var nv = /* @__PURE__ */ new Set(), es = {};
function eo(e3, t) {
  Ao(e3, t), Ao(e3 + "Capture", t);
}
function Ao(e3, t) {
  for (es[e3] = t, e3 = 0; e3 < t.length; e3++) nv.add(t[e3]);
}
var Zn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), zc = Object.prototype.hasOwnProperty, fx = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Xp = {}, Gp = {};
function px(e3) {
  return zc.call(Gp, e3) ? true : zc.call(Xp, e3) ? false : fx.test(e3) ? Gp[e3] = true : (Xp[e3] = true, false);
}
function hx(e3, t, n, r) {
  if (n !== null && n.type === 0) return false;
  switch (typeof t) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      return r ? false : n !== null ? !n.acceptsBooleans : (e3 = e3.toLowerCase().slice(0, 5), e3 !== "data-" && e3 !== "aria-");
    default:
      return false;
  }
}
function mx(e3, t, n, r) {
  if (t === null || typeof t > "u" || hx(e3, t, n, r)) return true;
  if (r) return false;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === false;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return false;
}
function Pt(e3, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e3, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var vt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e3) {
  vt[e3] = new Pt(e3, 0, false, e3, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e3) {
  var t = e3[0];
  vt[t] = new Pt(t, 1, false, e3[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e3) {
  vt[e3] = new Pt(e3, 2, false, e3.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e3) {
  vt[e3] = new Pt(e3, 2, false, e3, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e3) {
  vt[e3] = new Pt(e3, 3, false, e3.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(e3) {
  vt[e3] = new Pt(e3, 3, true, e3, null, false, false);
});
["capture", "download"].forEach(function(e3) {
  vt[e3] = new Pt(e3, 4, false, e3, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(e3) {
  vt[e3] = new Pt(e3, 6, false, e3, null, false, false);
});
["rowSpan", "start"].forEach(function(e3) {
  vt[e3] = new Pt(e3, 5, false, e3.toLowerCase(), null, false, false);
});
var ef = /[\-:]([a-z])/g;
function tf(e3) {
  return e3[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e3) {
  var t = e3.replace(ef, tf);
  vt[t] = new Pt(t, 1, false, e3, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e3) {
  var t = e3.replace(ef, tf);
  vt[t] = new Pt(t, 1, false, e3, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e3) {
  var t = e3.replace(ef, tf);
  vt[t] = new Pt(t, 1, false, e3, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(e3) {
  vt[e3] = new Pt(e3, 1, false, e3.toLowerCase(), null, false, false);
});
vt.xlinkHref = new Pt("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(e3) {
  vt[e3] = new Pt(e3, 1, false, e3.toLowerCase(), null, true, true);
});
function nf(e3, t, n, r) {
  var o = vt.hasOwnProperty(t) ? vt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (mx(t, n, o, r) && (n = null), r || o === null ? px(t) && (n === null ? e3.removeAttribute(t) : e3.setAttribute(t, "" + n)) : o.mustUseProperty ? e3[o.propertyName] = n === null ? o.type === 3 ? false : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e3.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === true ? "" : "" + n, r ? e3.setAttributeNS(r, t, n) : e3.setAttribute(t, n))));
}
var or = dx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ys = Symbol.for("react.element"), po = Symbol.for("react.portal"), ho = Symbol.for("react.fragment"), rf = Symbol.for("react.strict_mode"), Ac = Symbol.for("react.profiler"), rv = Symbol.for("react.provider"), ov = Symbol.for("react.context"), of = Symbol.for("react.forward_ref"), Dc = Symbol.for("react.suspense"), Fc = Symbol.for("react.suspense_list"), sf = Symbol.for("react.memo"), cr = Symbol.for("react.lazy"), iv = Symbol.for("react.offscreen"), Qp = Symbol.iterator;
function fi(e3) {
  return e3 === null || typeof e3 != "object" ? null : (e3 = Qp && e3[Qp] || e3["@@iterator"], typeof e3 == "function" ? e3 : null);
}
var We = Object.assign, Wu;
function Oi(e3) {
  if (Wu === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Wu = t && t[1] || "";
  }
  return `
` + Wu + e3;
}
var Uu = false;
function Vu(e3, t) {
  if (!e3 || Uu) return "";
  Uu = true;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e3, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e3.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e3();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; ) l--;
      for (; 1 <= s && 0 <= l; s--, l--) if (o[s] !== i[l]) {
        if (s !== 1 || l !== 1) do
          if (s--, l--, 0 > l || o[s] !== i[l]) {
            var a = `
` + o[s].replace(" at new ", " at ");
            return e3.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e3.displayName)), a;
          }
        while (1 <= s && 0 <= l);
        break;
      }
    }
  } finally {
    Uu = false, Error.prepareStackTrace = n;
  }
  return (e3 = e3 ? e3.displayName || e3.name : "") ? Oi(e3) : "";
}
function gx(e3) {
  switch (e3.tag) {
    case 5:
      return Oi(e3.type);
    case 16:
      return Oi("Lazy");
    case 13:
      return Oi("Suspense");
    case 19:
      return Oi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e3 = Vu(e3.type, false), e3;
    case 11:
      return e3 = Vu(e3.type.render, false), e3;
    case 1:
      return e3 = Vu(e3.type, true), e3;
    default:
      return "";
  }
}
function Bc(e3) {
  if (e3 == null) return null;
  if (typeof e3 == "function") return e3.displayName || e3.name || null;
  if (typeof e3 == "string") return e3;
  switch (e3) {
    case ho:
      return "Fragment";
    case po:
      return "Portal";
    case Ac:
      return "Profiler";
    case rf:
      return "StrictMode";
    case Dc:
      return "Suspense";
    case Fc:
      return "SuspenseList";
  }
  if (typeof e3 == "object") switch (e3.$$typeof) {
    case ov:
      return (e3.displayName || "Context") + ".Consumer";
    case rv:
      return (e3._context.displayName || "Context") + ".Provider";
    case of:
      var t = e3.render;
      return e3 = e3.displayName, e3 || (e3 = t.displayName || t.name || "", e3 = e3 !== "" ? "ForwardRef(" + e3 + ")" : "ForwardRef"), e3;
    case sf:
      return t = e3.displayName || null, t !== null ? t : Bc(e3.type) || "Memo";
    case cr:
      t = e3._payload, e3 = e3._init;
      try {
        return Bc(e3(t));
      } catch {
      }
  }
  return null;
}
function vx(e3) {
  var t = e3.type;
  switch (e3.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e3 = t.render, e3 = e3.displayName || e3.name || "", t.displayName || (e3 !== "" ? "ForwardRef(" + e3 + ")" : "ForwardRef");
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
      return Bc(t);
    case 8:
      return t === rf ? "StrictMode" : "Mode";
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
function Er(e3) {
  switch (typeof e3) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e3;
    case "object":
      return e3;
    default:
      return "";
  }
}
function sv(e3) {
  var t = e3.type;
  return (e3 = e3.nodeName) && e3.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function yx(e3) {
  var t = sv(e3) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e3.constructor.prototype, t), r = "" + e3[t];
  if (!e3.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e3, t, { configurable: true, get: function() {
      return o.call(this);
    }, set: function(s) {
      r = "" + s, i.call(this, s);
    } }), Object.defineProperty(e3, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e3._valueTracker = null, delete e3[t];
    } };
  }
}
function Xs(e3) {
  e3._valueTracker || (e3._valueTracker = yx(e3));
}
function lv(e3) {
  if (!e3) return false;
  var t = e3._valueTracker;
  if (!t) return true;
  var n = t.getValue(), r = "";
  return e3 && (r = sv(e3) ? e3.checked ? "true" : "false" : e3.value), e3 = r, e3 !== n ? (t.setValue(e3), true) : false;
}
function Bl(e3) {
  if (e3 = e3 || (typeof document < "u" ? document : void 0), typeof e3 > "u") return null;
  try {
    return e3.activeElement || e3.body;
  } catch {
    return e3.body;
  }
}
function Wc(e3, t) {
  var n = t.checked;
  return We({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e3._wrapperState.initialChecked });
}
function qp(e3, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Er(t.value != null ? t.value : n), e3._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function av(e3, t) {
  t = t.checked, t != null && nf(e3, "checked", t, false);
}
function Uc(e3, t) {
  av(e3, t);
  var n = Er(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e3.value === "" || e3.value != n) && (e3.value = "" + n) : e3.value !== "" + n && (e3.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e3.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Vc(e3, t.type, n) : t.hasOwnProperty("defaultValue") && Vc(e3, t.type, Er(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e3.defaultChecked = !!t.defaultChecked);
}
function Zp(e3, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e3._wrapperState.initialValue, n || t === e3.value || (e3.value = t), e3.defaultValue = t;
  }
  n = e3.name, n !== "" && (e3.name = ""), e3.defaultChecked = !!e3._wrapperState.initialChecked, n !== "" && (e3.name = n);
}
function Vc(e3, t, n) {
  (t !== "number" || Bl(e3.ownerDocument) !== e3) && (n == null ? e3.defaultValue = "" + e3._wrapperState.initialValue : e3.defaultValue !== "" + n && (e3.defaultValue = "" + n));
}
var Mi = Array.isArray;
function Ro(e3, t, n, r) {
  if (e3 = e3.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = true;
    for (n = 0; n < e3.length; n++) o = t.hasOwnProperty("$" + e3[n].value), e3[n].selected !== o && (e3[n].selected = o), o && r && (e3[n].defaultSelected = true);
  } else {
    for (n = "" + Er(n), t = null, o = 0; o < e3.length; o++) {
      if (e3[o].value === n) {
        e3[o].selected = true, r && (e3[o].defaultSelected = true);
        return;
      }
      t !== null || e3[o].disabled || (t = e3[o]);
    }
    t !== null && (t.selected = true);
  }
}
function Hc(e3, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
  return We({}, t, { value: void 0, defaultValue: void 0, children: "" + e3._wrapperState.initialValue });
}
function Jp(e3, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(F(92));
      if (Mi(n)) {
        if (1 < n.length) throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e3._wrapperState = { initialValue: Er(n) };
}
function uv(e3, t) {
  var n = Er(t.value), r = Er(t.defaultValue);
  n != null && (n = "" + n, n !== e3.value && (e3.value = n), t.defaultValue == null && e3.defaultValue !== n && (e3.defaultValue = n)), r != null && (e3.defaultValue = "" + r);
}
function eh(e3) {
  var t = e3.textContent;
  t === e3._wrapperState.initialValue && t !== "" && t !== null && (e3.value = t);
}
function cv(e3) {
  switch (e3) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Kc(e3, t) {
  return e3 == null || e3 === "http://www.w3.org/1999/xhtml" ? cv(t) : e3 === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e3;
}
var Gs, dv = function(e3) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e3(t, n, r, o);
    });
  } : e3;
}(function(e3, t) {
  if (e3.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e3) e3.innerHTML = t;
  else {
    for (Gs = Gs || document.createElement("div"), Gs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Gs.firstChild; e3.firstChild; ) e3.removeChild(e3.firstChild);
    for (; t.firstChild; ) e3.appendChild(t.firstChild);
  }
});
function ts(e3, t) {
  if (t) {
    var n = e3.firstChild;
    if (n && n === e3.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e3.textContent = t;
}
var ji = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, xx = ["Webkit", "ms", "Moz", "O"];
Object.keys(ji).forEach(function(e3) {
  xx.forEach(function(t) {
    t = t + e3.charAt(0).toUpperCase() + e3.substring(1), ji[t] = ji[e3];
  });
});
function fv(e3, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ji.hasOwnProperty(e3) && ji[e3] ? ("" + t).trim() : t + "px";
}
function pv(e3, t) {
  e3 = e3.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = fv(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e3.setProperty(n, o) : e3[n] = o;
  }
}
var Sx = We({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function Yc(e3, t) {
  if (t) {
    if (Sx[e3] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(F(137, e3));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(F(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(F(62));
  }
}
function Xc(e3, t) {
  if (e3.indexOf("-") === -1) return typeof t.is == "string";
  switch (e3) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var Gc = null;
function lf(e3) {
  return e3 = e3.target || e3.srcElement || window, e3.correspondingUseElement && (e3 = e3.correspondingUseElement), e3.nodeType === 3 ? e3.parentNode : e3;
}
var Qc = null, $o = null, To = null;
function th(e3) {
  if (e3 = Ts(e3)) {
    if (typeof Qc != "function") throw Error(F(280));
    var t = e3.stateNode;
    t && (t = _a(t), Qc(e3.stateNode, e3.type, t));
  }
}
function hv(e3) {
  $o ? To ? To.push(e3) : To = [e3] : $o = e3;
}
function mv() {
  if ($o) {
    var e3 = $o, t = To;
    if (To = $o = null, th(e3), t) for (e3 = 0; e3 < t.length; e3++) th(t[e3]);
  }
}
function gv(e3, t) {
  return e3(t);
}
function vv() {
}
var Hu = false;
function yv(e3, t, n) {
  if (Hu) return e3(t, n);
  Hu = true;
  try {
    return gv(e3, t, n);
  } finally {
    Hu = false, ($o !== null || To !== null) && (vv(), mv());
  }
}
function ns(e3, t) {
  var n = e3.stateNode;
  if (n === null) return null;
  var r = _a(n);
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
      (r = !r.disabled) || (e3 = e3.type, r = !(e3 === "button" || e3 === "input" || e3 === "select" || e3 === "textarea")), e3 = !r;
      break e;
    default:
      e3 = false;
  }
  if (e3) return null;
  if (n && typeof n != "function") throw Error(F(231, t, typeof n));
  return n;
}
var qc = false;
if (Zn) try {
  var pi = {};
  Object.defineProperty(pi, "passive", { get: function() {
    qc = true;
  } }), window.addEventListener("test", pi, pi), window.removeEventListener("test", pi, pi);
} catch {
  qc = false;
}
function bx(e3, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var zi = false, Wl = null, Ul = false, Zc = null, wx = { onError: function(e3) {
  zi = true, Wl = e3;
} };
function Cx(e3, t, n, r, o, i, s, l, a) {
  zi = false, Wl = null, bx.apply(wx, arguments);
}
function kx(e3, t, n, r, o, i, s, l, a) {
  if (Cx.apply(this, arguments), zi) {
    if (zi) {
      var u = Wl;
      zi = false, Wl = null;
    } else throw Error(F(198));
    Ul || (Ul = true, Zc = u);
  }
}
function to(e3) {
  var t = e3, n = e3;
  if (e3.alternate) for (; t.return; ) t = t.return;
  else {
    e3 = t;
    do
      t = e3, t.flags & 4098 && (n = t.return), e3 = t.return;
    while (e3);
  }
  return t.tag === 3 ? n : null;
}
function xv(e3) {
  if (e3.tag === 13) {
    var t = e3.memoizedState;
    if (t === null && (e3 = e3.alternate, e3 !== null && (t = e3.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function nh(e3) {
  if (to(e3) !== e3) throw Error(F(188));
}
function Ex(e3) {
  var t = e3.alternate;
  if (!t) {
    if (t = to(e3), t === null) throw Error(F(188));
    return t !== e3 ? null : e3;
  }
  for (var n = e3, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return nh(o), e3;
        if (i === r) return nh(o), t;
        i = i.sibling;
      }
      throw Error(F(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var s = false, l = o.child; l; ) {
        if (l === n) {
          s = true, n = o, r = i;
          break;
        }
        if (l === r) {
          s = true, r = o, n = i;
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            s = true, n = i, r = o;
            break;
          }
          if (l === r) {
            s = true, r = i, n = o;
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(F(189));
      }
    }
    if (n.alternate !== r) throw Error(F(190));
  }
  if (n.tag !== 3) throw Error(F(188));
  return n.stateNode.current === n ? e3 : t;
}
function Sv(e3) {
  return e3 = Ex(e3), e3 !== null ? bv(e3) : null;
}
function bv(e3) {
  if (e3.tag === 5 || e3.tag === 6) return e3;
  for (e3 = e3.child; e3 !== null; ) {
    var t = bv(e3);
    if (t !== null) return t;
    e3 = e3.sibling;
  }
  return null;
}
var wv = Xt.unstable_scheduleCallback, rh = Xt.unstable_cancelCallback, Px = Xt.unstable_shouldYield, Rx = Xt.unstable_requestPaint, Xe = Xt.unstable_now, $x = Xt.unstable_getCurrentPriorityLevel, af = Xt.unstable_ImmediatePriority, Cv = Xt.unstable_UserBlockingPriority, Vl = Xt.unstable_NormalPriority, Tx = Xt.unstable_LowPriority, kv = Xt.unstable_IdlePriority, Oa = null, Dn = null;
function Ox(e3) {
  if (Dn && typeof Dn.onCommitFiberRoot == "function") try {
    Dn.onCommitFiberRoot(Oa, e3, void 0, (e3.current.flags & 128) === 128);
  } catch {
  }
}
var Pn = Math.clz32 ? Math.clz32 : Nx, Mx = Math.log, Lx = Math.LN2;
function Nx(e3) {
  return e3 >>>= 0, e3 === 0 ? 32 : 31 - (Mx(e3) / Lx | 0) | 0;
}
var Qs = 64, qs = 4194304;
function Li(e3) {
  switch (e3 & -e3) {
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
      return e3 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e3 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e3;
  }
}
function Hl(e3, t) {
  var n = e3.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e3.suspendedLanes, i = e3.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = Li(l) : (i &= s, i !== 0 && (r = Li(i)));
  } else s = n & ~o, s !== 0 ? r = Li(s) : i !== 0 && (r = Li(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e3.entangledLanes, t !== 0) for (e3 = e3.entanglements, t &= r; 0 < t; ) n = 31 - Pn(t), o = 1 << n, r |= e3[n], t &= ~o;
  return r;
}
function _x(e3, t) {
  switch (e3) {
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
function Ix(e3, t) {
  for (var n = e3.suspendedLanes, r = e3.pingedLanes, o = e3.expirationTimes, i = e3.pendingLanes; 0 < i; ) {
    var s = 31 - Pn(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = _x(l, t)) : a <= t && (e3.expiredLanes |= l), i &= ~l;
  }
}
function Jc(e3) {
  return e3 = e3.pendingLanes & -1073741825, e3 !== 0 ? e3 : e3 & 1073741824 ? 1073741824 : 0;
}
function Ev() {
  var e3 = Qs;
  return Qs <<= 1, !(Qs & 4194240) && (Qs = 64), e3;
}
function Ku(e3) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e3);
  return t;
}
function Rs(e3, t, n) {
  e3.pendingLanes |= t, t !== 536870912 && (e3.suspendedLanes = 0, e3.pingedLanes = 0), e3 = e3.eventTimes, t = 31 - Pn(t), e3[t] = n;
}
function jx(e3, t) {
  var n = e3.pendingLanes & ~t;
  e3.pendingLanes = t, e3.suspendedLanes = 0, e3.pingedLanes = 0, e3.expiredLanes &= t, e3.mutableReadLanes &= t, e3.entangledLanes &= t, t = e3.entanglements;
  var r = e3.eventTimes;
  for (e3 = e3.expirationTimes; 0 < n; ) {
    var o = 31 - Pn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e3[o] = -1, n &= ~i;
  }
}
function uf(e3, t) {
  var n = e3.entangledLanes |= t;
  for (e3 = e3.entanglements; n; ) {
    var r = 31 - Pn(n), o = 1 << r;
    o & t | e3[r] & t && (e3[r] |= t), n &= ~o;
  }
}
var Re = 0;
function Pv(e3) {
  return e3 &= -e3, 1 < e3 ? 4 < e3 ? e3 & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Rv, cf, $v, Tv, Ov, ed = false, Zs = [], vr = null, yr = null, xr = null, rs = /* @__PURE__ */ new Map(), os = /* @__PURE__ */ new Map(), fr = [], zx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function oh(e3, t) {
  switch (e3) {
    case "focusin":
    case "focusout":
      vr = null;
      break;
    case "dragenter":
    case "dragleave":
      yr = null;
      break;
    case "mouseover":
    case "mouseout":
      xr = null;
      break;
    case "pointerover":
    case "pointerout":
      rs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      os.delete(t.pointerId);
  }
}
function hi(e3, t, n, r, o, i) {
  return e3 === null || e3.nativeEvent !== i ? (e3 = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Ts(t), t !== null && cf(t)), e3) : (e3.eventSystemFlags |= r, t = e3.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e3);
}
function Ax(e3, t, n, r, o) {
  switch (t) {
    case "focusin":
      return vr = hi(vr, e3, t, n, r, o), true;
    case "dragenter":
      return yr = hi(yr, e3, t, n, r, o), true;
    case "mouseover":
      return xr = hi(xr, e3, t, n, r, o), true;
    case "pointerover":
      var i = o.pointerId;
      return rs.set(i, hi(rs.get(i) || null, e3, t, n, r, o)), true;
    case "gotpointercapture":
      return i = o.pointerId, os.set(i, hi(os.get(i) || null, e3, t, n, r, o)), true;
  }
  return false;
}
function Mv(e3) {
  var t = Dr(e3.target);
  if (t !== null) {
    var n = to(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = xv(n), t !== null) {
          e3.blockedOn = t, Ov(e3.priority, function() {
            $v(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e3.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e3.blockedOn = null;
}
function wl(e3) {
  if (e3.blockedOn !== null) return false;
  for (var t = e3.targetContainers; 0 < t.length; ) {
    var n = td(e3.domEventName, e3.eventSystemFlags, t[0], e3.nativeEvent);
    if (n === null) {
      n = e3.nativeEvent;
      var r = new n.constructor(n.type, n);
      Gc = r, n.target.dispatchEvent(r), Gc = null;
    } else return t = Ts(n), t !== null && cf(t), e3.blockedOn = n, false;
    t.shift();
  }
  return true;
}
function ih(e3, t, n) {
  wl(e3) && n.delete(t);
}
function Dx() {
  ed = false, vr !== null && wl(vr) && (vr = null), yr !== null && wl(yr) && (yr = null), xr !== null && wl(xr) && (xr = null), rs.forEach(ih), os.forEach(ih);
}
function mi(e3, t) {
  e3.blockedOn === t && (e3.blockedOn = null, ed || (ed = true, Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority, Dx)));
}
function is(e3) {
  function t(o) {
    return mi(o, e3);
  }
  if (0 < Zs.length) {
    mi(Zs[0], e3);
    for (var n = 1; n < Zs.length; n++) {
      var r = Zs[n];
      r.blockedOn === e3 && (r.blockedOn = null);
    }
  }
  for (vr !== null && mi(vr, e3), yr !== null && mi(yr, e3), xr !== null && mi(xr, e3), rs.forEach(t), os.forEach(t), n = 0; n < fr.length; n++) r = fr[n], r.blockedOn === e3 && (r.blockedOn = null);
  for (; 0 < fr.length && (n = fr[0], n.blockedOn === null); ) Mv(n), n.blockedOn === null && fr.shift();
}
var Oo = or.ReactCurrentBatchConfig, Kl = true;
function Fx(e3, t, n, r) {
  var o = Re, i = Oo.transition;
  Oo.transition = null;
  try {
    Re = 1, df(e3, t, n, r);
  } finally {
    Re = o, Oo.transition = i;
  }
}
function Bx(e3, t, n, r) {
  var o = Re, i = Oo.transition;
  Oo.transition = null;
  try {
    Re = 4, df(e3, t, n, r);
  } finally {
    Re = o, Oo.transition = i;
  }
}
function df(e3, t, n, r) {
  if (Kl) {
    var o = td(e3, t, n, r);
    if (o === null) nc(e3, t, r, Yl, n), oh(e3, r);
    else if (Ax(o, e3, t, n, r)) r.stopPropagation();
    else if (oh(e3, r), t & 4 && -1 < zx.indexOf(e3)) {
      for (; o !== null; ) {
        var i = Ts(o);
        if (i !== null && Rv(i), i = td(e3, t, n, r), i === null && nc(e3, t, r, Yl, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else nc(e3, t, r, null, n);
  }
}
var Yl = null;
function td(e3, t, n, r) {
  if (Yl = null, e3 = lf(r), e3 = Dr(e3), e3 !== null) if (t = to(e3), t === null) e3 = null;
  else if (n = t.tag, n === 13) {
    if (e3 = xv(t), e3 !== null) return e3;
    e3 = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e3 = null;
  } else t !== e3 && (e3 = null);
  return Yl = e3, null;
}
function Lv(e3) {
  switch (e3) {
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
      switch ($x()) {
        case af:
          return 1;
        case Cv:
          return 4;
        case Vl:
        case Tx:
          return 16;
        case kv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var hr = null, ff = null, Cl = null;
function Nv() {
  if (Cl) return Cl;
  var e3, t = ff, n = t.length, r, o = "value" in hr ? hr.value : hr.textContent, i = o.length;
  for (e3 = 0; e3 < n && t[e3] === o[e3]; e3++) ;
  var s = n - e3;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return Cl = o.slice(e3, 1 < r ? 1 - r : void 0);
}
function kl(e3) {
  var t = e3.keyCode;
  return "charCode" in e3 ? (e3 = e3.charCode, e3 === 0 && t === 13 && (e3 = 13)) : e3 = t, e3 === 10 && (e3 = 13), 32 <= e3 || e3 === 13 ? e3 : 0;
}
function Js() {
  return true;
}
function sh() {
  return false;
}
function qt(e3) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e3) e3.hasOwnProperty(l) && (n = e3[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? Js : sh, this.isPropagationStopped = sh, this;
  }
  return We(t.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Js);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Js);
  }, persist: function() {
  }, isPersistent: Js }), t;
}
var Zo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e3) {
  return e3.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, pf = qt(Zo), $s = We({}, Zo, { view: 0, detail: 0 }), Wx = qt($s), Yu, Xu, gi, Ma = We({}, $s, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: hf, button: 0, buttons: 0, relatedTarget: function(e3) {
  return e3.relatedTarget === void 0 ? e3.fromElement === e3.srcElement ? e3.toElement : e3.fromElement : e3.relatedTarget;
}, movementX: function(e3) {
  return "movementX" in e3 ? e3.movementX : (e3 !== gi && (gi && e3.type === "mousemove" ? (Yu = e3.screenX - gi.screenX, Xu = e3.screenY - gi.screenY) : Xu = Yu = 0, gi = e3), Yu);
}, movementY: function(e3) {
  return "movementY" in e3 ? e3.movementY : Xu;
} }), lh = qt(Ma), Ux = We({}, Ma, { dataTransfer: 0 }), Vx = qt(Ux), Hx = We({}, $s, { relatedTarget: 0 }), Gu = qt(Hx), Kx = We({}, Zo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Yx = qt(Kx), Xx = We({}, Zo, { clipboardData: function(e3) {
  return "clipboardData" in e3 ? e3.clipboardData : window.clipboardData;
} }), Gx = qt(Xx), Qx = We({}, Zo, { data: 0 }), ah = qt(Qx), qx = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Zx = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Jx = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function eS(e3) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e3) : (e3 = Jx[e3]) ? !!t[e3] : false;
}
function hf() {
  return eS;
}
var tS = We({}, $s, { key: function(e3) {
  if (e3.key) {
    var t = qx[e3.key] || e3.key;
    if (t !== "Unidentified") return t;
  }
  return e3.type === "keypress" ? (e3 = kl(e3), e3 === 13 ? "Enter" : String.fromCharCode(e3)) : e3.type === "keydown" || e3.type === "keyup" ? Zx[e3.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: hf, charCode: function(e3) {
  return e3.type === "keypress" ? kl(e3) : 0;
}, keyCode: function(e3) {
  return e3.type === "keydown" || e3.type === "keyup" ? e3.keyCode : 0;
}, which: function(e3) {
  return e3.type === "keypress" ? kl(e3) : e3.type === "keydown" || e3.type === "keyup" ? e3.keyCode : 0;
} }), nS = qt(tS), rS = We({}, Ma, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), uh = qt(rS), oS = We({}, $s, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: hf }), iS = qt(oS), sS = We({}, Zo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), lS = qt(sS), aS = We({}, Ma, { deltaX: function(e3) {
  return "deltaX" in e3 ? e3.deltaX : "wheelDeltaX" in e3 ? -e3.wheelDeltaX : 0;
}, deltaY: function(e3) {
  return "deltaY" in e3 ? e3.deltaY : "wheelDeltaY" in e3 ? -e3.wheelDeltaY : "wheelDelta" in e3 ? -e3.wheelDelta : 0;
}, deltaZ: 0, deltaMode: 0 }), uS = qt(aS), cS = [9, 13, 27, 32], mf = Zn && "CompositionEvent" in window, Ai = null;
Zn && "documentMode" in document && (Ai = document.documentMode);
var dS = Zn && "TextEvent" in window && !Ai, _v = Zn && (!mf || Ai && 8 < Ai && 11 >= Ai), ch = " ", dh = false;
function Iv(e3, t) {
  switch (e3) {
    case "keyup":
      return cS.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function jv(e3) {
  return e3 = e3.detail, typeof e3 == "object" && "data" in e3 ? e3.data : null;
}
var mo = false;
function fS(e3, t) {
  switch (e3) {
    case "compositionend":
      return jv(t);
    case "keypress":
      return t.which !== 32 ? null : (dh = true, ch);
    case "textInput":
      return e3 = t.data, e3 === ch && dh ? null : e3;
    default:
      return null;
  }
}
function pS(e3, t) {
  if (mo) return e3 === "compositionend" || !mf && Iv(e3, t) ? (e3 = Nv(), Cl = ff = hr = null, mo = false, e3) : null;
  switch (e3) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return _v && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var hS = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function fh(e3) {
  var t = e3 && e3.nodeName && e3.nodeName.toLowerCase();
  return t === "input" ? !!hS[e3.type] : t === "textarea";
}
function zv(e3, t, n, r) {
  hv(r), t = Xl(t, "onChange"), 0 < t.length && (n = new pf("onChange", "change", null, n, r), e3.push({ event: n, listeners: t }));
}
var Di = null, ss = null;
function mS(e3) {
  Xv(e3, 0);
}
function La(e3) {
  var t = yo(e3);
  if (lv(t)) return e3;
}
function gS(e3, t) {
  if (e3 === "change") return t;
}
var Av = false;
if (Zn) {
  var Qu;
  if (Zn) {
    var qu = "oninput" in document;
    if (!qu) {
      var ph = document.createElement("div");
      ph.setAttribute("oninput", "return;"), qu = typeof ph.oninput == "function";
    }
    Qu = qu;
  } else Qu = false;
  Av = Qu && (!document.documentMode || 9 < document.documentMode);
}
function hh() {
  Di && (Di.detachEvent("onpropertychange", Dv), ss = Di = null);
}
function Dv(e3) {
  if (e3.propertyName === "value" && La(ss)) {
    var t = [];
    zv(t, ss, e3, lf(e3)), yv(mS, t);
  }
}
function vS(e3, t, n) {
  e3 === "focusin" ? (hh(), Di = t, ss = n, Di.attachEvent("onpropertychange", Dv)) : e3 === "focusout" && hh();
}
function yS(e3) {
  if (e3 === "selectionchange" || e3 === "keyup" || e3 === "keydown") return La(ss);
}
function xS(e3, t) {
  if (e3 === "click") return La(t);
}
function SS(e3, t) {
  if (e3 === "input" || e3 === "change") return La(t);
}
function bS(e3, t) {
  return e3 === t && (e3 !== 0 || 1 / e3 === 1 / t) || e3 !== e3 && t !== t;
}
var $n = typeof Object.is == "function" ? Object.is : bS;
function ls(e3, t) {
  if ($n(e3, t)) return true;
  if (typeof e3 != "object" || e3 === null || typeof t != "object" || t === null) return false;
  var n = Object.keys(e3), r = Object.keys(t);
  if (n.length !== r.length) return false;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!zc.call(t, o) || !$n(e3[o], t[o])) return false;
  }
  return true;
}
function mh(e3) {
  for (; e3 && e3.firstChild; ) e3 = e3.firstChild;
  return e3;
}
function gh(e3, t) {
  var n = mh(e3);
  e3 = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e3 + n.textContent.length, e3 <= t && r >= t) return { node: n, offset: t - e3 };
      e3 = r;
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
    n = mh(n);
  }
}
function Fv(e3, t) {
  return e3 && t ? e3 === t ? true : e3 && e3.nodeType === 3 ? false : t && t.nodeType === 3 ? Fv(e3, t.parentNode) : "contains" in e3 ? e3.contains(t) : e3.compareDocumentPosition ? !!(e3.compareDocumentPosition(t) & 16) : false : false;
}
function Bv() {
  for (var e3 = window, t = Bl(); t instanceof e3.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = false;
    }
    if (n) e3 = t.contentWindow;
    else break;
    t = Bl(e3.document);
  }
  return t;
}
function gf(e3) {
  var t = e3 && e3.nodeName && e3.nodeName.toLowerCase();
  return t && (t === "input" && (e3.type === "text" || e3.type === "search" || e3.type === "tel" || e3.type === "url" || e3.type === "password") || t === "textarea" || e3.contentEditable === "true");
}
function wS(e3) {
  var t = Bv(), n = e3.focusedElem, r = e3.selectionRange;
  if (t !== n && n && n.ownerDocument && Fv(n.ownerDocument.documentElement, n)) {
    if (r !== null && gf(n)) {
      if (t = r.start, e3 = r.end, e3 === void 0 && (e3 = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e3, n.value.length);
      else if (e3 = (t = n.ownerDocument || document) && t.defaultView || window, e3.getSelection) {
        e3 = e3.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e3.extend && i > r && (o = r, r = i, i = o), o = gh(n, i);
        var s = gh(n, r);
        o && s && (e3.rangeCount !== 1 || e3.anchorNode !== o.node || e3.anchorOffset !== o.offset || e3.focusNode !== s.node || e3.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e3.removeAllRanges(), i > r ? (e3.addRange(t), e3.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e3.addRange(t)));
      }
    }
    for (t = [], e3 = n; e3 = e3.parentNode; ) e3.nodeType === 1 && t.push({ element: e3, left: e3.scrollLeft, top: e3.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e3 = t[n], e3.element.scrollLeft = e3.left, e3.element.scrollTop = e3.top;
  }
}
var CS = Zn && "documentMode" in document && 11 >= document.documentMode, go = null, nd = null, Fi = null, rd = false;
function vh(e3, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  rd || go == null || go !== Bl(r) || (r = go, "selectionStart" in r && gf(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Fi && ls(Fi, r) || (Fi = r, r = Xl(nd, "onSelect"), 0 < r.length && (t = new pf("onSelect", "select", null, t, n), e3.push({ event: t, listeners: r }), t.target = go)));
}
function el(e3, t) {
  var n = {};
  return n[e3.toLowerCase()] = t.toLowerCase(), n["Webkit" + e3] = "webkit" + t, n["Moz" + e3] = "moz" + t, n;
}
var vo = { animationend: el("Animation", "AnimationEnd"), animationiteration: el("Animation", "AnimationIteration"), animationstart: el("Animation", "AnimationStart"), transitionend: el("Transition", "TransitionEnd") }, Zu = {}, Wv = {};
Zn && (Wv = document.createElement("div").style, "AnimationEvent" in window || (delete vo.animationend.animation, delete vo.animationiteration.animation, delete vo.animationstart.animation), "TransitionEvent" in window || delete vo.transitionend.transition);
function Na(e3) {
  if (Zu[e3]) return Zu[e3];
  if (!vo[e3]) return e3;
  var t = vo[e3], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Wv) return Zu[e3] = t[n];
  return e3;
}
var Uv = Na("animationend"), Vv = Na("animationiteration"), Hv = Na("animationstart"), Kv = Na("transitionend"), Yv = /* @__PURE__ */ new Map(), yh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function $r(e3, t) {
  Yv.set(e3, t), eo(t, [e3]);
}
for (var Ju = 0; Ju < yh.length; Ju++) {
  var ec = yh[Ju], kS = ec.toLowerCase(), ES = ec[0].toUpperCase() + ec.slice(1);
  $r(kS, "on" + ES);
}
$r(Uv, "onAnimationEnd");
$r(Vv, "onAnimationIteration");
$r(Hv, "onAnimationStart");
$r("dblclick", "onDoubleClick");
$r("focusin", "onFocus");
$r("focusout", "onBlur");
$r(Kv, "onTransitionEnd");
Ao("onMouseEnter", ["mouseout", "mouseover"]);
Ao("onMouseLeave", ["mouseout", "mouseover"]);
Ao("onPointerEnter", ["pointerout", "pointerover"]);
Ao("onPointerLeave", ["pointerout", "pointerover"]);
eo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
eo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
eo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
eo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
eo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
eo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ni = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), PS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ni));
function xh(e3, t, n) {
  var r = e3.type || "unknown-event";
  e3.currentTarget = n, kx(r, t, void 0, e3), e3.currentTarget = null;
}
function Xv(e3, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e3.length; n++) {
    var r = e3[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        xh(o, l, u), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        xh(o, l, u), i = a;
      }
    }
  }
  if (Ul) throw e3 = Zc, Ul = false, Zc = null, e3;
}
function Ne(e3, t) {
  var n = t[ad];
  n === void 0 && (n = t[ad] = /* @__PURE__ */ new Set());
  var r = e3 + "__bubble";
  n.has(r) || (Gv(t, e3, 2, false), n.add(r));
}
function tc(e3, t, n) {
  var r = 0;
  t && (r |= 4), Gv(n, e3, r, t);
}
var tl = "_reactListening" + Math.random().toString(36).slice(2);
function as(e3) {
  if (!e3[tl]) {
    e3[tl] = true, nv.forEach(function(n) {
      n !== "selectionchange" && (PS.has(n) || tc(n, false, e3), tc(n, true, e3));
    });
    var t = e3.nodeType === 9 ? e3 : e3.ownerDocument;
    t === null || t[tl] || (t[tl] = true, tc("selectionchange", false, t));
  }
}
function Gv(e3, t, n, r) {
  switch (Lv(t)) {
    case 1:
      var o = Fx;
      break;
    case 4:
      o = Bx;
      break;
    default:
      o = df;
  }
  n = o.bind(null, t, n, e3), o = void 0, !qc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = true), r ? o !== void 0 ? e3.addEventListener(t, n, { capture: true, passive: o }) : e3.addEventListener(t, n, true) : o !== void 0 ? e3.addEventListener(t, n, { passive: o }) : e3.addEventListener(t, n, false);
}
function nc(e3, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var l = r.stateNode.containerInfo;
      if (l === o || l.nodeType === 8 && l.parentNode === o) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var a = s.tag;
        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
        s = s.return;
      }
      for (; l !== null; ) {
        if (s = Dr(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  yv(function() {
    var u = i, c = lf(n), d = [];
    e: {
      var f = Yv.get(e3);
      if (f !== void 0) {
        var p = pf, y = e3;
        switch (e3) {
          case "keypress":
            if (kl(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = nS;
            break;
          case "focusin":
            y = "focus", p = Gu;
            break;
          case "focusout":
            y = "blur", p = Gu;
            break;
          case "beforeblur":
          case "afterblur":
            p = Gu;
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
            p = lh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = Vx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = iS;
            break;
          case Uv:
          case Vv:
          case Hv:
            p = Yx;
            break;
          case Kv:
            p = lS;
            break;
          case "scroll":
            p = Wx;
            break;
          case "wheel":
            p = uS;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = Gx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = uh;
        }
        var v = (t & 4) !== 0, w = !v && e3 === "scroll", h = v ? f !== null ? f + "Capture" : null : f;
        v = [];
        for (var m = u, g; m !== null; ) {
          g = m;
          var x = g.stateNode;
          if (g.tag === 5 && x !== null && (g = x, h !== null && (x = ns(m, h), x != null && v.push(us(m, x, g)))), w) break;
          m = m.return;
        }
        0 < v.length && (f = new p(f, y, null, n, c), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e3 === "mouseover" || e3 === "pointerover", p = e3 === "mouseout" || e3 === "pointerout", f && n !== Gc && (y = n.relatedTarget || n.fromElement) && (Dr(y) || y[Jn])) break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (y = n.relatedTarget || n.toElement, p = u, y = y ? Dr(y) : null, y !== null && (w = to(y), y !== w || y.tag !== 5 && y.tag !== 6) && (y = null)) : (p = null, y = u), p !== y)) {
          if (v = lh, x = "onMouseLeave", h = "onMouseEnter", m = "mouse", (e3 === "pointerout" || e3 === "pointerover") && (v = uh, x = "onPointerLeave", h = "onPointerEnter", m = "pointer"), w = p == null ? f : yo(p), g = y == null ? f : yo(y), f = new v(x, m + "leave", p, n, c), f.target = w, f.relatedTarget = g, x = null, Dr(c) === u && (v = new v(h, m + "enter", y, n, c), v.target = g, v.relatedTarget = w, x = v), w = x, p && y) t: {
            for (v = p, h = y, m = 0, g = v; g; g = ro(g)) m++;
            for (g = 0, x = h; x; x = ro(x)) g++;
            for (; 0 < m - g; ) v = ro(v), m--;
            for (; 0 < g - m; ) h = ro(h), g--;
            for (; m--; ) {
              if (v === h || h !== null && v === h.alternate) break t;
              v = ro(v), h = ro(h);
            }
            v = null;
          }
          else v = null;
          p !== null && Sh(d, f, p, v, false), y !== null && w !== null && Sh(d, w, y, v, true);
        }
      }
      e: {
        if (f = u ? yo(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file") var C = gS;
        else if (fh(f)) if (Av) C = SS;
        else {
          C = yS;
          var E = vS;
        }
        else (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = xS);
        if (C && (C = C(e3, u))) {
          zv(d, C, n, c);
          break e;
        }
        E && E(e3, f, u), e3 === "focusout" && (E = f._wrapperState) && E.controlled && f.type === "number" && Vc(f, "number", f.value);
      }
      switch (E = u ? yo(u) : window, e3) {
        case "focusin":
          (fh(E) || E.contentEditable === "true") && (go = E, nd = u, Fi = null);
          break;
        case "focusout":
          Fi = nd = go = null;
          break;
        case "mousedown":
          rd = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          rd = false, vh(d, n, c);
          break;
        case "selectionchange":
          if (CS) break;
        case "keydown":
        case "keyup":
          vh(d, n, c);
      }
      var P;
      if (mf) e: {
        switch (e3) {
          case "compositionstart":
            var $ = "onCompositionStart";
            break e;
          case "compositionend":
            $ = "onCompositionEnd";
            break e;
          case "compositionupdate":
            $ = "onCompositionUpdate";
            break e;
        }
        $ = void 0;
      }
      else mo ? Iv(e3, n) && ($ = "onCompositionEnd") : e3 === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
      $ && (_v && n.locale !== "ko" && (mo || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && mo && (P = Nv()) : (hr = c, ff = "value" in hr ? hr.value : hr.textContent, mo = true)), E = Xl(u, $), 0 < E.length && ($ = new ah($, e3, null, n, c), d.push({ event: $, listeners: E }), P ? $.data = P : (P = jv(n), P !== null && ($.data = P)))), (P = dS ? fS(e3, n) : pS(e3, n)) && (u = Xl(u, "onBeforeInput"), 0 < u.length && (c = new ah("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = P));
    }
    Xv(d, t);
  });
}
function us(e3, t, n) {
  return { instance: e3, listener: t, currentTarget: n };
}
function Xl(e3, t) {
  for (var n = t + "Capture", r = []; e3 !== null; ) {
    var o = e3, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = ns(e3, n), i != null && r.unshift(us(e3, i, o)), i = ns(e3, t), i != null && r.push(us(e3, i, o))), e3 = e3.return;
  }
  return r;
}
function ro(e3) {
  if (e3 === null) return null;
  do
    e3 = e3.return;
  while (e3 && e3.tag !== 5);
  return e3 || null;
}
function Sh(e3, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, o ? (a = ns(n, i), a != null && s.unshift(us(n, a, l))) : o || (a = ns(n, i), a != null && s.push(us(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e3.push({ event: t, listeners: s });
}
var RS = /\r\n?/g, $S = /\u0000|\uFFFD/g;
function bh(e3) {
  return (typeof e3 == "string" ? e3 : "" + e3).replace(RS, `
`).replace($S, "");
}
function nl(e3, t, n) {
  if (t = bh(t), bh(e3) !== t && n) throw Error(F(425));
}
function Gl() {
}
var od = null, id = null;
function sd(e3, t) {
  return e3 === "textarea" || e3 === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ld = typeof setTimeout == "function" ? setTimeout : void 0, TS = typeof clearTimeout == "function" ? clearTimeout : void 0, wh = typeof Promise == "function" ? Promise : void 0, OS = typeof queueMicrotask == "function" ? queueMicrotask : typeof wh < "u" ? function(e3) {
  return wh.resolve(null).then(e3).catch(MS);
} : ld;
function MS(e3) {
  setTimeout(function() {
    throw e3;
  });
}
function rc(e3, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e3.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e3.removeChild(o), is(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  is(t);
}
function Sr(e3) {
  for (; e3 != null; e3 = e3.nextSibling) {
    var t = e3.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e3.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e3;
}
function Ch(e3) {
  e3 = e3.previousSibling;
  for (var t = 0; e3; ) {
    if (e3.nodeType === 8) {
      var n = e3.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e3;
        t--;
      } else n === "/$" && t++;
    }
    e3 = e3.previousSibling;
  }
  return null;
}
var Jo = Math.random().toString(36).slice(2), _n = "__reactFiber$" + Jo, cs = "__reactProps$" + Jo, Jn = "__reactContainer$" + Jo, ad = "__reactEvents$" + Jo, LS = "__reactListeners$" + Jo, NS = "__reactHandles$" + Jo;
function Dr(e3) {
  var t = e3[_n];
  if (t) return t;
  for (var n = e3.parentNode; n; ) {
    if (t = n[Jn] || n[_n]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e3 = Ch(e3); e3 !== null; ) {
        if (n = e3[_n]) return n;
        e3 = Ch(e3);
      }
      return t;
    }
    e3 = n, n = e3.parentNode;
  }
  return null;
}
function Ts(e3) {
  return e3 = e3[_n] || e3[Jn], !e3 || e3.tag !== 5 && e3.tag !== 6 && e3.tag !== 13 && e3.tag !== 3 ? null : e3;
}
function yo(e3) {
  if (e3.tag === 5 || e3.tag === 6) return e3.stateNode;
  throw Error(F(33));
}
function _a(e3) {
  return e3[cs] || null;
}
var ud = [], xo = -1;
function Tr(e3) {
  return { current: e3 };
}
function _e(e3) {
  0 > xo || (e3.current = ud[xo], ud[xo] = null, xo--);
}
function Le(e3, t) {
  xo++, ud[xo] = e3.current, e3.current = t;
}
var Pr = {}, wt = Tr(Pr), Lt = Tr(false), Yr = Pr;
function Do(e3, t) {
  var n = e3.type.contextTypes;
  if (!n) return Pr;
  var r = e3.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e3 = e3.stateNode, e3.__reactInternalMemoizedUnmaskedChildContext = t, e3.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Nt(e3) {
  return e3 = e3.childContextTypes, e3 != null;
}
function Ql() {
  _e(Lt), _e(wt);
}
function kh(e3, t, n) {
  if (wt.current !== Pr) throw Error(F(168));
  Le(wt, t), Le(Lt, n);
}
function Qv(e3, t, n) {
  var r = e3.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(F(108, vx(e3) || "Unknown", o));
  return We({}, n, r);
}
function ql(e3) {
  return e3 = (e3 = e3.stateNode) && e3.__reactInternalMemoizedMergedChildContext || Pr, Yr = wt.current, Le(wt, e3), Le(Lt, Lt.current), true;
}
function Eh(e3, t, n) {
  var r = e3.stateNode;
  if (!r) throw Error(F(169));
  n ? (e3 = Qv(e3, t, Yr), r.__reactInternalMemoizedMergedChildContext = e3, _e(Lt), _e(wt), Le(wt, e3)) : _e(Lt), Le(Lt, n);
}
var Yn = null, Ia = false, oc = false;
function qv(e3) {
  Yn === null ? Yn = [e3] : Yn.push(e3);
}
function _S(e3) {
  Ia = true, qv(e3);
}
function Or() {
  if (!oc && Yn !== null) {
    oc = true;
    var e3 = 0, t = Re;
    try {
      var n = Yn;
      for (Re = 1; e3 < n.length; e3++) {
        var r = n[e3];
        do
          r = r(true);
        while (r !== null);
      }
      Yn = null, Ia = false;
    } catch (o) {
      throw Yn !== null && (Yn = Yn.slice(e3 + 1)), wv(af, Or), o;
    } finally {
      Re = t, oc = false;
    }
  }
  return null;
}
var So = [], bo = 0, Zl = null, Jl = 0, nn = [], rn = 0, Xr = null, Gn = 1, Qn = "";
function Ir(e3, t) {
  So[bo++] = Jl, So[bo++] = Zl, Zl = e3, Jl = t;
}
function Zv(e3, t, n) {
  nn[rn++] = Gn, nn[rn++] = Qn, nn[rn++] = Xr, Xr = e3;
  var r = Gn;
  e3 = Qn;
  var o = 32 - Pn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Pn(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Gn = 1 << 32 - Pn(t) + o | n << o | r, Qn = i + e3;
  } else Gn = 1 << i | n << o | r, Qn = e3;
}
function vf(e3) {
  e3.return !== null && (Ir(e3, 1), Zv(e3, 1, 0));
}
function yf(e3) {
  for (; e3 === Zl; ) Zl = So[--bo], So[bo] = null, Jl = So[--bo], So[bo] = null;
  for (; e3 === Xr; ) Xr = nn[--rn], nn[rn] = null, Qn = nn[--rn], nn[rn] = null, Gn = nn[--rn], nn[rn] = null;
}
var Ht = null, Wt = null, Ae = false, En = null;
function Jv(e3, t) {
  var n = sn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e3, t = e3.deletions, t === null ? (e3.deletions = [n], e3.flags |= 16) : t.push(n);
}
function Ph(e3, t) {
  switch (e3.tag) {
    case 5:
      var n = e3.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e3.stateNode = t, Ht = e3, Wt = Sr(t.firstChild), true) : false;
    case 6:
      return t = e3.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e3.stateNode = t, Ht = e3, Wt = null, true) : false;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Xr !== null ? { id: Gn, overflow: Qn } : null, e3.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = sn(18, null, null, 0), n.stateNode = t, n.return = e3, e3.child = n, Ht = e3, Wt = null, true) : false;
    default:
      return false;
  }
}
function cd(e3) {
  return (e3.mode & 1) !== 0 && (e3.flags & 128) === 0;
}
function dd(e3) {
  if (Ae) {
    var t = Wt;
    if (t) {
      var n = t;
      if (!Ph(e3, t)) {
        if (cd(e3)) throw Error(F(418));
        t = Sr(n.nextSibling);
        var r = Ht;
        t && Ph(e3, t) ? Jv(r, n) : (e3.flags = e3.flags & -4097 | 2, Ae = false, Ht = e3);
      }
    } else {
      if (cd(e3)) throw Error(F(418));
      e3.flags = e3.flags & -4097 | 2, Ae = false, Ht = e3;
    }
  }
}
function Rh(e3) {
  for (e3 = e3.return; e3 !== null && e3.tag !== 5 && e3.tag !== 3 && e3.tag !== 13; ) e3 = e3.return;
  Ht = e3;
}
function rl(e3) {
  if (e3 !== Ht) return false;
  if (!Ae) return Rh(e3), Ae = true, false;
  var t;
  if ((t = e3.tag !== 3) && !(t = e3.tag !== 5) && (t = e3.type, t = t !== "head" && t !== "body" && !sd(e3.type, e3.memoizedProps)), t && (t = Wt)) {
    if (cd(e3)) throw ey(), Error(F(418));
    for (; t; ) Jv(e3, t), t = Sr(t.nextSibling);
  }
  if (Rh(e3), e3.tag === 13) {
    if (e3 = e3.memoizedState, e3 = e3 !== null ? e3.dehydrated : null, !e3) throw Error(F(317));
    e: {
      for (e3 = e3.nextSibling, t = 0; e3; ) {
        if (e3.nodeType === 8) {
          var n = e3.data;
          if (n === "/$") {
            if (t === 0) {
              Wt = Sr(e3.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e3 = e3.nextSibling;
      }
      Wt = null;
    }
  } else Wt = Ht ? Sr(e3.stateNode.nextSibling) : null;
  return true;
}
function ey() {
  for (var e3 = Wt; e3; ) e3 = Sr(e3.nextSibling);
}
function Fo() {
  Wt = Ht = null, Ae = false;
}
function xf(e3) {
  En === null ? En = [e3] : En.push(e3);
}
var IS = or.ReactCurrentBatchConfig;
function vi(e3, t, n) {
  if (e3 = n.ref, e3 !== null && typeof e3 != "function" && typeof e3 != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(F(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(F(147, e3));
      var o = r, i = "" + e3;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var l = o.refs;
        s === null ? delete l[i] : l[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e3 != "string") throw Error(F(284));
    if (!n._owner) throw Error(F(290, e3));
  }
  return e3;
}
function ol(e3, t) {
  throw e3 = Object.prototype.toString.call(t), Error(F(31, e3 === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e3));
}
function $h(e3) {
  var t = e3._init;
  return t(e3._payload);
}
function ty(e3) {
  function t(h, m) {
    if (e3) {
      var g = h.deletions;
      g === null ? (h.deletions = [m], h.flags |= 16) : g.push(m);
    }
  }
  function n(h, m) {
    if (!e3) return null;
    for (; m !== null; ) t(h, m), m = m.sibling;
    return null;
  }
  function r(h, m) {
    for (h = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? h.set(m.key, m) : h.set(m.index, m), m = m.sibling;
    return h;
  }
  function o(h, m) {
    return h = kr(h, m), h.index = 0, h.sibling = null, h;
  }
  function i(h, m, g) {
    return h.index = g, e3 ? (g = h.alternate, g !== null ? (g = g.index, g < m ? (h.flags |= 2, m) : g) : (h.flags |= 2, m)) : (h.flags |= 1048576, m);
  }
  function s(h) {
    return e3 && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, m, g, x) {
    return m === null || m.tag !== 6 ? (m = dc(g, h.mode, x), m.return = h, m) : (m = o(m, g), m.return = h, m);
  }
  function a(h, m, g, x) {
    var C = g.type;
    return C === ho ? c(h, m, g.props.children, x, g.key) : m !== null && (m.elementType === C || typeof C == "object" && C !== null && C.$$typeof === cr && $h(C) === m.type) ? (x = o(m, g.props), x.ref = vi(h, m, g), x.return = h, x) : (x = Ml(g.type, g.key, g.props, null, h.mode, x), x.ref = vi(h, m, g), x.return = h, x);
  }
  function u(h, m, g, x) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== g.containerInfo || m.stateNode.implementation !== g.implementation ? (m = fc(g, h.mode, x), m.return = h, m) : (m = o(m, g.children || []), m.return = h, m);
  }
  function c(h, m, g, x, C) {
    return m === null || m.tag !== 7 ? (m = Vr(g, h.mode, x, C), m.return = h, m) : (m = o(m, g), m.return = h, m);
  }
  function d(h, m, g) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = dc("" + m, h.mode, g), m.return = h, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ys:
          return g = Ml(m.type, m.key, m.props, null, h.mode, g), g.ref = vi(h, null, m), g.return = h, g;
        case po:
          return m = fc(m, h.mode, g), m.return = h, m;
        case cr:
          var x = m._init;
          return d(h, x(m._payload), g);
      }
      if (Mi(m) || fi(m)) return m = Vr(m, h.mode, g, null), m.return = h, m;
      ol(h, m);
    }
    return null;
  }
  function f(h, m, g, x) {
    var C = m !== null ? m.key : null;
    if (typeof g == "string" && g !== "" || typeof g == "number") return C !== null ? null : l(h, m, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ys:
          return g.key === C ? a(h, m, g, x) : null;
        case po:
          return g.key === C ? u(h, m, g, x) : null;
        case cr:
          return C = g._init, f(h, m, C(g._payload), x);
      }
      if (Mi(g) || fi(g)) return C !== null ? null : c(h, m, g, x, null);
      ol(h, g);
    }
    return null;
  }
  function p(h, m, g, x, C) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return h = h.get(g) || null, l(m, h, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ys:
          return h = h.get(x.key === null ? g : x.key) || null, a(m, h, x, C);
        case po:
          return h = h.get(x.key === null ? g : x.key) || null, u(m, h, x, C);
        case cr:
          var E = x._init;
          return p(h, m, g, E(x._payload), C);
      }
      if (Mi(x) || fi(x)) return h = h.get(g) || null, c(m, h, x, C, null);
      ol(m, x);
    }
    return null;
  }
  function y(h, m, g, x) {
    for (var C = null, E = null, P = m, $ = m = 0, L = null; P !== null && $ < g.length; $++) {
      P.index > $ ? (L = P, P = null) : L = P.sibling;
      var T = f(h, P, g[$], x);
      if (T === null) {
        P === null && (P = L);
        break;
      }
      e3 && P && T.alternate === null && t(h, P), m = i(T, m, $), E === null ? C = T : E.sibling = T, E = T, P = L;
    }
    if ($ === g.length) return n(h, P), Ae && Ir(h, $), C;
    if (P === null) {
      for (; $ < g.length; $++) P = d(h, g[$], x), P !== null && (m = i(P, m, $), E === null ? C = P : E.sibling = P, E = P);
      return Ae && Ir(h, $), C;
    }
    for (P = r(h, P); $ < g.length; $++) L = p(P, h, $, g[$], x), L !== null && (e3 && L.alternate !== null && P.delete(L.key === null ? $ : L.key), m = i(L, m, $), E === null ? C = L : E.sibling = L, E = L);
    return e3 && P.forEach(function(D) {
      return t(h, D);
    }), Ae && Ir(h, $), C;
  }
  function v(h, m, g, x) {
    var C = fi(g);
    if (typeof C != "function") throw Error(F(150));
    if (g = C.call(g), g == null) throw Error(F(151));
    for (var E = C = null, P = m, $ = m = 0, L = null, T = g.next(); P !== null && !T.done; $++, T = g.next()) {
      P.index > $ ? (L = P, P = null) : L = P.sibling;
      var D = f(h, P, T.value, x);
      if (D === null) {
        P === null && (P = L);
        break;
      }
      e3 && P && D.alternate === null && t(h, P), m = i(D, m, $), E === null ? C = D : E.sibling = D, E = D, P = L;
    }
    if (T.done) return n(h, P), Ae && Ir(h, $), C;
    if (P === null) {
      for (; !T.done; $++, T = g.next()) T = d(h, T.value, x), T !== null && (m = i(T, m, $), E === null ? C = T : E.sibling = T, E = T);
      return Ae && Ir(h, $), C;
    }
    for (P = r(h, P); !T.done; $++, T = g.next()) T = p(P, h, $, T.value, x), T !== null && (e3 && T.alternate !== null && P.delete(T.key === null ? $ : T.key), m = i(T, m, $), E === null ? C = T : E.sibling = T, E = T);
    return e3 && P.forEach(function(z) {
      return t(h, z);
    }), Ae && Ir(h, $), C;
  }
  function w(h, m, g, x) {
    if (typeof g == "object" && g !== null && g.type === ho && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ys:
          e: {
            for (var C = g.key, E = m; E !== null; ) {
              if (E.key === C) {
                if (C = g.type, C === ho) {
                  if (E.tag === 7) {
                    n(h, E.sibling), m = o(E, g.props.children), m.return = h, h = m;
                    break e;
                  }
                } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === cr && $h(C) === E.type) {
                  n(h, E.sibling), m = o(E, g.props), m.ref = vi(h, E, g), m.return = h, h = m;
                  break e;
                }
                n(h, E);
                break;
              } else t(h, E);
              E = E.sibling;
            }
            g.type === ho ? (m = Vr(g.props.children, h.mode, x, g.key), m.return = h, h = m) : (x = Ml(g.type, g.key, g.props, null, h.mode, x), x.ref = vi(h, m, g), x.return = h, h = x);
          }
          return s(h);
        case po:
          e: {
            for (E = g.key; m !== null; ) {
              if (m.key === E) if (m.tag === 4 && m.stateNode.containerInfo === g.containerInfo && m.stateNode.implementation === g.implementation) {
                n(h, m.sibling), m = o(m, g.children || []), m.return = h, h = m;
                break e;
              } else {
                n(h, m);
                break;
              }
              else t(h, m);
              m = m.sibling;
            }
            m = fc(g, h.mode, x), m.return = h, h = m;
          }
          return s(h);
        case cr:
          return E = g._init, w(h, m, E(g._payload), x);
      }
      if (Mi(g)) return y(h, m, g, x);
      if (fi(g)) return v(h, m, g, x);
      ol(h, g);
    }
    return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, m !== null && m.tag === 6 ? (n(h, m.sibling), m = o(m, g), m.return = h, h = m) : (n(h, m), m = dc(g, h.mode, x), m.return = h, h = m), s(h)) : n(h, m);
  }
  return w;
}
var Bo = ty(true), ny = ty(false), ea = Tr(null), ta = null, wo = null, Sf = null;
function bf() {
  Sf = wo = ta = null;
}
function wf(e3) {
  var t = ea.current;
  _e(ea), e3._currentValue = t;
}
function fd(e3, t, n) {
  for (; e3 !== null; ) {
    var r = e3.alternate;
    if ((e3.childLanes & t) !== t ? (e3.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e3 === n) break;
    e3 = e3.return;
  }
}
function Mo(e3, t) {
  ta = e3, Sf = wo = null, e3 = e3.dependencies, e3 !== null && e3.firstContext !== null && (e3.lanes & t && (Ot = true), e3.firstContext = null);
}
function un(e3) {
  var t = e3._currentValue;
  if (Sf !== e3) if (e3 = { context: e3, memoizedValue: t, next: null }, wo === null) {
    if (ta === null) throw Error(F(308));
    wo = e3, ta.dependencies = { lanes: 0, firstContext: e3 };
  } else wo = wo.next = e3;
  return t;
}
var Fr = null;
function Cf(e3) {
  Fr === null ? Fr = [e3] : Fr.push(e3);
}
function ry(e3, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Cf(t)) : (n.next = o.next, o.next = n), t.interleaved = n, er(e3, r);
}
function er(e3, t) {
  e3.lanes |= t;
  var n = e3.alternate;
  for (n !== null && (n.lanes |= t), n = e3, e3 = e3.return; e3 !== null; ) e3.childLanes |= t, n = e3.alternate, n !== null && (n.childLanes |= t), n = e3, e3 = e3.return;
  return n.tag === 3 ? n.stateNode : null;
}
var dr = false;
function kf(e3) {
  e3.updateQueue = { baseState: e3.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function oy(e3, t) {
  e3 = e3.updateQueue, t.updateQueue === e3 && (t.updateQueue = { baseState: e3.baseState, firstBaseUpdate: e3.firstBaseUpdate, lastBaseUpdate: e3.lastBaseUpdate, shared: e3.shared, effects: e3.effects });
}
function qn(e3, t) {
  return { eventTime: e3, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function br(e3, t, n) {
  var r = e3.updateQueue;
  if (r === null) return null;
  if (r = r.shared, be & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, er(e3, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Cf(r)) : (t.next = o.next, o.next = t), r.interleaved = t, er(e3, n);
}
function El(e3, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e3.pendingLanes, n |= r, t.lanes = n, uf(e3, n);
  }
}
function Th(e3, t) {
  var n = e3.updateQueue, r = e3.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = s : i = i.next = s, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e3.updateQueue = n;
    return;
  }
  e3 = n.lastBaseUpdate, e3 === null ? n.firstBaseUpdate = t : e3.next = t, n.lastBaseUpdate = t;
}
function na(e3, t, n, r) {
  var o = e3.updateQueue;
  dr = false;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, s === null ? i = u : s.next = u, s = a;
    var c = e3.alternate;
    c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a));
  }
  if (i !== null) {
    var d = o.baseState;
    s = 0, c = u = a = null, l = i;
    do {
      var f = l.lane, p = l.eventTime;
      if ((r & f) === f) {
        c !== null && (c = c.next = { eventTime: p, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
        e: {
          var y = e3, v = l;
          switch (f = t, p = n, v.tag) {
            case 1:
              if (y = v.payload, typeof y == "function") {
                d = y.call(p, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = v.payload, f = typeof y == "function" ? y.call(p, d, f) : y, f == null) break e;
              d = We({}, d, f);
              break e;
            case 2:
              dr = true;
          }
        }
        l.callback !== null && l.lane !== 0 && (e3.flags |= 64, f = o.effects, f === null ? o.effects = [l] : f.push(l));
      } else p = { eventTime: p, lane: f, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, c === null ? (u = c = p, a = d) : c = c.next = p, s |= f;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        f = l, l = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (true);
    if (c === null && (a = d), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Qr |= s, e3.lanes = s, e3.memoizedState = d;
  }
}
function Oh(e3, t, n) {
  if (e3 = t.effects, t.effects = null, e3 !== null) for (t = 0; t < e3.length; t++) {
    var r = e3[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(F(191, o));
      o.call(r);
    }
  }
}
var Os = {}, Fn = Tr(Os), ds = Tr(Os), fs = Tr(Os);
function Br(e3) {
  if (e3 === Os) throw Error(F(174));
  return e3;
}
function Ef(e3, t) {
  switch (Le(fs, t), Le(ds, e3), Le(Fn, Os), e3 = t.nodeType, e3) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Kc(null, "");
      break;
    default:
      e3 = e3 === 8 ? t.parentNode : t, t = e3.namespaceURI || null, e3 = e3.tagName, t = Kc(t, e3);
  }
  _e(Fn), Le(Fn, t);
}
function Wo() {
  _e(Fn), _e(ds), _e(fs);
}
function iy(e3) {
  Br(fs.current);
  var t = Br(Fn.current), n = Kc(t, e3.type);
  t !== n && (Le(ds, e3), Le(Fn, n));
}
function Pf(e3) {
  ds.current === e3 && (_e(Fn), _e(ds));
}
var Fe = Tr(0);
function ra(e3) {
  for (var t = e3; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e3) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e3) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var ic = [];
function Rf() {
  for (var e3 = 0; e3 < ic.length; e3++) ic[e3]._workInProgressVersionPrimary = null;
  ic.length = 0;
}
var Pl = or.ReactCurrentDispatcher, sc = or.ReactCurrentBatchConfig, Gr = 0, Be = null, rt = null, lt = null, oa = false, Bi = false, ps = 0, jS = 0;
function yt() {
  throw Error(F(321));
}
function $f(e3, t) {
  if (t === null) return false;
  for (var n = 0; n < t.length && n < e3.length; n++) if (!$n(e3[n], t[n])) return false;
  return true;
}
function Tf(e3, t, n, r, o, i) {
  if (Gr = i, Be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Pl.current = e3 === null || e3.memoizedState === null ? FS : BS, e3 = n(r, o), Bi) {
    i = 0;
    do {
      if (Bi = false, ps = 0, 25 <= i) throw Error(F(301));
      i += 1, lt = rt = null, t.updateQueue = null, Pl.current = WS, e3 = n(r, o);
    } while (Bi);
  }
  if (Pl.current = ia, t = rt !== null && rt.next !== null, Gr = 0, lt = rt = Be = null, oa = false, t) throw Error(F(300));
  return e3;
}
function Of() {
  var e3 = ps !== 0;
  return ps = 0, e3;
}
function Mn() {
  var e3 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return lt === null ? Be.memoizedState = lt = e3 : lt = lt.next = e3, lt;
}
function cn() {
  if (rt === null) {
    var e3 = Be.alternate;
    e3 = e3 !== null ? e3.memoizedState : null;
  } else e3 = rt.next;
  var t = lt === null ? Be.memoizedState : lt.next;
  if (t !== null) lt = t, rt = e3;
  else {
    if (e3 === null) throw Error(F(310));
    rt = e3, e3 = { memoizedState: rt.memoizedState, baseState: rt.baseState, baseQueue: rt.baseQueue, queue: rt.queue, next: null }, lt === null ? Be.memoizedState = lt = e3 : lt = lt.next = e3;
  }
  return lt;
}
function hs(e3, t) {
  return typeof t == "function" ? t(e3) : t;
}
function lc(e3) {
  var t = cn(), n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e3;
  var r = rt, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      o.next = i.next, i.next = s;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var l = s = null, a = null, u = i;
    do {
      var c = u.lane;
      if ((Gr & c) === c) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e3(r, u.action);
      else {
        var d = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        a === null ? (l = a = d, s = r) : a = a.next = d, Be.lanes |= c, Qr |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? s = r : a.next = l, $n(r, t.memoizedState) || (Ot = true), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e3 = n.interleaved, e3 !== null) {
    o = e3;
    do
      i = o.lane, Be.lanes |= i, Qr |= i, o = o.next;
    while (o !== e3);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ac(e3) {
  var t = cn(), n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e3;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e3(i, s.action), s = s.next;
    while (s !== o);
    $n(i, t.memoizedState) || (Ot = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function sy() {
}
function ly(e3, t) {
  var n = Be, r = cn(), o = t(), i = !$n(r.memoizedState, o);
  if (i && (r.memoizedState = o, Ot = true), r = r.queue, Mf(cy.bind(null, n, r, e3), [e3]), r.getSnapshot !== t || i || lt !== null && lt.memoizedState.tag & 1) {
    if (n.flags |= 2048, ms(9, uy.bind(null, n, r, o, t), void 0, null), at === null) throw Error(F(349));
    Gr & 30 || ay(n, t, o);
  }
  return o;
}
function ay(e3, t, n) {
  e3.flags |= 16384, e3 = { getSnapshot: t, value: n }, t = Be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Be.updateQueue = t, t.stores = [e3]) : (n = t.stores, n === null ? t.stores = [e3] : n.push(e3));
}
function uy(e3, t, n, r) {
  t.value = n, t.getSnapshot = r, dy(t) && fy(e3);
}
function cy(e3, t, n) {
  return n(function() {
    dy(t) && fy(e3);
  });
}
function dy(e3) {
  var t = e3.getSnapshot;
  e3 = e3.value;
  try {
    var n = t();
    return !$n(e3, n);
  } catch {
    return true;
  }
}
function fy(e3) {
  var t = er(e3, 1);
  t !== null && Rn(t, e3, 1, -1);
}
function Mh(e3) {
  var t = Mn();
  return typeof e3 == "function" && (e3 = e3()), t.memoizedState = t.baseState = e3, e3 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: hs, lastRenderedState: e3 }, t.queue = e3, e3 = e3.dispatch = DS.bind(null, Be, e3), [t.memoizedState, e3];
}
function ms(e3, t, n, r) {
  return e3 = { tag: e3, create: t, destroy: n, deps: r, next: null }, t = Be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Be.updateQueue = t, t.lastEffect = e3.next = e3) : (n = t.lastEffect, n === null ? t.lastEffect = e3.next = e3 : (r = n.next, n.next = e3, e3.next = r, t.lastEffect = e3)), e3;
}
function py() {
  return cn().memoizedState;
}
function Rl(e3, t, n, r) {
  var o = Mn();
  Be.flags |= e3, o.memoizedState = ms(1 | t, n, void 0, r === void 0 ? null : r);
}
function ja(e3, t, n, r) {
  var o = cn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (rt !== null) {
    var s = rt.memoizedState;
    if (i = s.destroy, r !== null && $f(r, s.deps)) {
      o.memoizedState = ms(t, n, i, r);
      return;
    }
  }
  Be.flags |= e3, o.memoizedState = ms(1 | t, n, i, r);
}
function Lh(e3, t) {
  return Rl(8390656, 8, e3, t);
}
function Mf(e3, t) {
  return ja(2048, 8, e3, t);
}
function hy(e3, t) {
  return ja(4, 2, e3, t);
}
function my(e3, t) {
  return ja(4, 4, e3, t);
}
function gy(e3, t) {
  if (typeof t == "function") return e3 = e3(), t(e3), function() {
    t(null);
  };
  if (t != null) return e3 = e3(), t.current = e3, function() {
    t.current = null;
  };
}
function vy(e3, t, n) {
  return n = n != null ? n.concat([e3]) : null, ja(4, 4, gy.bind(null, t, e3), n);
}
function Lf() {
}
function yy(e3, t) {
  var n = cn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $f(t, r[1]) ? r[0] : (n.memoizedState = [e3, t], e3);
}
function xy(e3, t) {
  var n = cn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $f(t, r[1]) ? r[0] : (e3 = e3(), n.memoizedState = [e3, t], e3);
}
function Sy(e3, t, n) {
  return Gr & 21 ? ($n(n, t) || (n = Ev(), Be.lanes |= n, Qr |= n, e3.baseState = true), t) : (e3.baseState && (e3.baseState = false, Ot = true), e3.memoizedState = n);
}
function zS(e3, t) {
  var n = Re;
  Re = n !== 0 && 4 > n ? n : 4, e3(true);
  var r = sc.transition;
  sc.transition = {};
  try {
    e3(false), t();
  } finally {
    Re = n, sc.transition = r;
  }
}
function by() {
  return cn().memoizedState;
}
function AS(e3, t, n) {
  var r = Cr(e3);
  if (n = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null }, wy(e3)) Cy(t, n);
  else if (n = ry(e3, t, n, r), n !== null) {
    var o = kt();
    Rn(n, e3, r, o), ky(n, t, r);
  }
}
function DS(e3, t, n) {
  var r = Cr(e3), o = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null };
  if (wy(e3)) Cy(t, o);
  else {
    var i = e3.alternate;
    if (e3.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = true, o.eagerState = l, $n(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Cf(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = ry(e3, t, o, r), n !== null && (o = kt(), Rn(n, e3, r, o), ky(n, t, r));
  }
}
function wy(e3) {
  var t = e3.alternate;
  return e3 === Be || t !== null && t === Be;
}
function Cy(e3, t) {
  Bi = oa = true;
  var n = e3.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e3.pending = t;
}
function ky(e3, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e3.pendingLanes, n |= r, t.lanes = n, uf(e3, n);
  }
}
var ia = { readContext: un, useCallback: yt, useContext: yt, useEffect: yt, useImperativeHandle: yt, useInsertionEffect: yt, useLayoutEffect: yt, useMemo: yt, useReducer: yt, useRef: yt, useState: yt, useDebugValue: yt, useDeferredValue: yt, useTransition: yt, useMutableSource: yt, useSyncExternalStore: yt, useId: yt, unstable_isNewReconciler: false }, FS = { readContext: un, useCallback: function(e3, t) {
  return Mn().memoizedState = [e3, t === void 0 ? null : t], e3;
}, useContext: un, useEffect: Lh, useImperativeHandle: function(e3, t, n) {
  return n = n != null ? n.concat([e3]) : null, Rl(4194308, 4, gy.bind(null, t, e3), n);
}, useLayoutEffect: function(e3, t) {
  return Rl(4194308, 4, e3, t);
}, useInsertionEffect: function(e3, t) {
  return Rl(4, 2, e3, t);
}, useMemo: function(e3, t) {
  var n = Mn();
  return t = t === void 0 ? null : t, e3 = e3(), n.memoizedState = [e3, t], e3;
}, useReducer: function(e3, t, n) {
  var r = Mn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e3 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e3, lastRenderedState: t }, r.queue = e3, e3 = e3.dispatch = AS.bind(null, Be, e3), [r.memoizedState, e3];
}, useRef: function(e3) {
  var t = Mn();
  return e3 = { current: e3 }, t.memoizedState = e3;
}, useState: Mh, useDebugValue: Lf, useDeferredValue: function(e3) {
  return Mn().memoizedState = e3;
}, useTransition: function() {
  var e3 = Mh(false), t = e3[0];
  return e3 = zS.bind(null, e3[1]), Mn().memoizedState = e3, [t, e3];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e3, t, n) {
  var r = Be, o = Mn();
  if (Ae) {
    if (n === void 0) throw Error(F(407));
    n = n();
  } else {
    if (n = t(), at === null) throw Error(F(349));
    Gr & 30 || ay(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Lh(cy.bind(null, r, i, e3), [e3]), r.flags |= 2048, ms(9, uy.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e3 = Mn(), t = at.identifierPrefix;
  if (Ae) {
    var n = Qn, r = Gn;
    n = (r & ~(1 << 32 - Pn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ps++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = jS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e3.memoizedState = t;
}, unstable_isNewReconciler: false }, BS = { readContext: un, useCallback: yy, useContext: un, useEffect: Mf, useImperativeHandle: vy, useInsertionEffect: hy, useLayoutEffect: my, useMemo: xy, useReducer: lc, useRef: py, useState: function() {
  return lc(hs);
}, useDebugValue: Lf, useDeferredValue: function(e3) {
  var t = cn();
  return Sy(t, rt.memoizedState, e3);
}, useTransition: function() {
  var e3 = lc(hs)[0], t = cn().memoizedState;
  return [e3, t];
}, useMutableSource: sy, useSyncExternalStore: ly, useId: by, unstable_isNewReconciler: false }, WS = { readContext: un, useCallback: yy, useContext: un, useEffect: Mf, useImperativeHandle: vy, useInsertionEffect: hy, useLayoutEffect: my, useMemo: xy, useReducer: ac, useRef: py, useState: function() {
  return ac(hs);
}, useDebugValue: Lf, useDeferredValue: function(e3) {
  var t = cn();
  return rt === null ? t.memoizedState = e3 : Sy(t, rt.memoizedState, e3);
}, useTransition: function() {
  var e3 = ac(hs)[0], t = cn().memoizedState;
  return [e3, t];
}, useMutableSource: sy, useSyncExternalStore: ly, useId: by, unstable_isNewReconciler: false };
function Cn(e3, t) {
  if (e3 && e3.defaultProps) {
    t = We({}, t), e3 = e3.defaultProps;
    for (var n in e3) t[n] === void 0 && (t[n] = e3[n]);
    return t;
  }
  return t;
}
function pd(e3, t, n, r) {
  t = e3.memoizedState, n = n(r, t), n = n == null ? t : We({}, t, n), e3.memoizedState = n, e3.lanes === 0 && (e3.updateQueue.baseState = n);
}
var za = { isMounted: function(e3) {
  return (e3 = e3._reactInternals) ? to(e3) === e3 : false;
}, enqueueSetState: function(e3, t, n) {
  e3 = e3._reactInternals;
  var r = kt(), o = Cr(e3), i = qn(r, o);
  i.payload = t, n != null && (i.callback = n), t = br(e3, i, o), t !== null && (Rn(t, e3, o, r), El(t, e3, o));
}, enqueueReplaceState: function(e3, t, n) {
  e3 = e3._reactInternals;
  var r = kt(), o = Cr(e3), i = qn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = br(e3, i, o), t !== null && (Rn(t, e3, o, r), El(t, e3, o));
}, enqueueForceUpdate: function(e3, t) {
  e3 = e3._reactInternals;
  var n = kt(), r = Cr(e3), o = qn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = br(e3, o, r), t !== null && (Rn(t, e3, r, n), El(t, e3, r));
} };
function Nh(e3, t, n, r, o, i, s) {
  return e3 = e3.stateNode, typeof e3.shouldComponentUpdate == "function" ? e3.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !ls(n, r) || !ls(o, i) : true;
}
function Ey(e3, t, n) {
  var r = false, o = Pr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = un(i) : (o = Nt(t) ? Yr : wt.current, r = t.contextTypes, i = (r = r != null) ? Do(e3, o) : Pr), t = new t(n, i), e3.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = za, e3.stateNode = t, t._reactInternals = e3, r && (e3 = e3.stateNode, e3.__reactInternalMemoizedUnmaskedChildContext = o, e3.__reactInternalMemoizedMaskedChildContext = i), t;
}
function _h(e3, t, n, r) {
  e3 = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e3 && za.enqueueReplaceState(t, t.state, null);
}
function hd(e3, t, n, r) {
  var o = e3.stateNode;
  o.props = n, o.state = e3.memoizedState, o.refs = {}, kf(e3);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = un(i) : (i = Nt(t) ? Yr : wt.current, o.context = Do(e3, i)), o.state = e3.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (pd(e3, t, i, n), o.state = e3.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && za.enqueueReplaceState(o, o.state, null), na(e3, n, o, r), o.state = e3.memoizedState), typeof o.componentDidMount == "function" && (e3.flags |= 4194308);
}
function Uo(e3, t) {
  try {
    var n = "", r = t;
    do
      n += gx(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e3, source: t, stack: o, digest: null };
}
function uc(e3, t, n) {
  return { value: e3, source: null, stack: n ?? null, digest: t ?? null };
}
function md(e3, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var US = typeof WeakMap == "function" ? WeakMap : Map;
function Py(e3, t, n) {
  n = qn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    la || (la = true, Ed = r), md(e3, t);
  }, n;
}
function Ry(e3, t, n) {
  n = qn(-1, n), n.tag = 3;
  var r = e3.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      md(e3, t);
    };
  }
  var i = e3.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    md(e3, t), typeof r != "function" && (wr === null ? wr = /* @__PURE__ */ new Set([this]) : wr.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Ih(e3, t, n) {
  var r = e3.pingCache;
  if (r === null) {
    r = e3.pingCache = new US();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e3 = rb.bind(null, e3, t, n), t.then(e3, e3));
}
function jh(e3) {
  do {
    var t;
    if ((t = e3.tag === 13) && (t = e3.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e3;
    e3 = e3.return;
  } while (e3 !== null);
  return null;
}
function zh(e3, t, n, r, o) {
  return e3.mode & 1 ? (e3.flags |= 65536, e3.lanes = o, e3) : (e3 === t ? e3.flags |= 65536 : (e3.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = qn(-1, 1), t.tag = 2, br(n, t, 1))), n.lanes |= 1), e3);
}
var VS = or.ReactCurrentOwner, Ot = false;
function Ct(e3, t, n, r) {
  t.child = e3 === null ? ny(t, null, n, r) : Bo(t, e3.child, n, r);
}
function Ah(e3, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Mo(t, o), r = Tf(e3, t, n, r, i, o), n = Of(), e3 !== null && !Ot ? (t.updateQueue = e3.updateQueue, t.flags &= -2053, e3.lanes &= ~o, tr(e3, t, o)) : (Ae && n && vf(t), t.flags |= 1, Ct(e3, t, r, o), t.child);
}
function Dh(e3, t, n, r, o) {
  if (e3 === null) {
    var i = n.type;
    return typeof i == "function" && !Ff(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, $y(e3, t, i, r, o)) : (e3 = Ml(n.type, null, r, t, t.mode, o), e3.ref = t.ref, e3.return = t, t.child = e3);
  }
  if (i = e3.child, !(e3.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ls, n(s, r) && e3.ref === t.ref) return tr(e3, t, o);
  }
  return t.flags |= 1, e3 = kr(i, r), e3.ref = t.ref, e3.return = t, t.child = e3;
}
function $y(e3, t, n, r, o) {
  if (e3 !== null) {
    var i = e3.memoizedProps;
    if (ls(i, r) && e3.ref === t.ref) if (Ot = false, t.pendingProps = r = i, (e3.lanes & o) !== 0) e3.flags & 131072 && (Ot = true);
    else return t.lanes = e3.lanes, tr(e3, t, o);
  }
  return gd(e3, t, n, r, o);
}
function Ty(e3, t, n) {
  var r = t.pendingProps, o = r.children, i = e3 !== null ? e3.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Le(ko, Ft), Ft |= n;
  else {
    if (!(n & 1073741824)) return e3 = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e3, cachePool: null, transitions: null }, t.updateQueue = null, Le(ko, Ft), Ft |= e3, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Le(ko, Ft), Ft |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Le(ko, Ft), Ft |= r;
  return Ct(e3, t, o, n), t.child;
}
function Oy(e3, t) {
  var n = t.ref;
  (e3 === null && n !== null || e3 !== null && e3.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function gd(e3, t, n, r, o) {
  var i = Nt(n) ? Yr : wt.current;
  return i = Do(t, i), Mo(t, o), n = Tf(e3, t, n, r, i, o), r = Of(), e3 !== null && !Ot ? (t.updateQueue = e3.updateQueue, t.flags &= -2053, e3.lanes &= ~o, tr(e3, t, o)) : (Ae && r && vf(t), t.flags |= 1, Ct(e3, t, n, o), t.child);
}
function Fh(e3, t, n, r, o) {
  if (Nt(n)) {
    var i = true;
    ql(t);
  } else i = false;
  if (Mo(t, o), t.stateNode === null) $l(e3, t), Ey(t, n, r), hd(t, n, r, o), r = true;
  else if (e3 === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = un(u) : (u = Nt(n) ? Yr : wt.current, u = Do(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && _h(t, s, r, u), dr = false;
    var f = t.memoizedState;
    s.state = f, na(t, r, s, o), a = t.memoizedState, l !== r || f !== a || Lt.current || dr ? (typeof c == "function" && (pd(t, n, c, r), a = t.memoizedState), (l = dr || Nh(t, n, l, r, f, a, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = false);
  } else {
    s = t.stateNode, oy(e3, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Cn(t.type, l), s.props = u, d = t.pendingProps, f = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = un(a) : (a = Nt(n) ? Yr : wt.current, a = Do(t, a));
    var p = n.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== d || f !== a) && _h(t, s, r, a), dr = false, f = t.memoizedState, s.state = f, na(t, r, s, o);
    var y = t.memoizedState;
    l !== d || f !== y || Lt.current || dr ? (typeof p == "function" && (pd(t, n, p, r), y = t.memoizedState), (u = dr || Nh(t, n, u, r, f, y, a) || false) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e3.memoizedProps && f === e3.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e3.memoizedProps && f === e3.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e3.memoizedProps && f === e3.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e3.memoizedProps && f === e3.memoizedState || (t.flags |= 1024), r = false);
  }
  return vd(e3, t, n, r, i, o);
}
function vd(e3, t, n, r, o, i) {
  Oy(e3, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Eh(t, n, false), tr(e3, t, i);
  r = t.stateNode, VS.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e3 !== null && s ? (t.child = Bo(t, e3.child, null, i), t.child = Bo(t, null, l, i)) : Ct(e3, t, l, i), t.memoizedState = r.state, o && Eh(t, n, true), t.child;
}
function My(e3) {
  var t = e3.stateNode;
  t.pendingContext ? kh(e3, t.pendingContext, t.pendingContext !== t.context) : t.context && kh(e3, t.context, false), Ef(e3, t.containerInfo);
}
function Bh(e3, t, n, r, o) {
  return Fo(), xf(o), t.flags |= 256, Ct(e3, t, n, r), t.child;
}
var yd = { dehydrated: null, treeContext: null, retryLane: 0 };
function xd(e3) {
  return { baseLanes: e3, cachePool: null, transitions: null };
}
function Ly(e3, t, n) {
  var r = t.pendingProps, o = Fe.current, i = false, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e3 !== null && e3.memoizedState === null ? false : (o & 2) !== 0), l ? (i = true, t.flags &= -129) : (e3 === null || e3.memoizedState !== null) && (o |= 1), Le(Fe, o & 1), e3 === null) return dd(t), e3 = t.memoizedState, e3 !== null && (e3 = e3.dehydrated, e3 !== null) ? (t.mode & 1 ? e3.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e3 = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Fa(s, r, 0, null), e3 = Vr(e3, r, n, null), i.return = t, e3.return = t, i.sibling = e3, t.child = i, t.child.memoizedState = xd(n), t.memoizedState = yd, e3) : Nf(t, s));
  if (o = e3.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return HS(e3, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e3.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = kr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = kr(l, i) : (i = Vr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e3.child.memoizedState, s = s === null ? xd(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e3.childLanes & ~n, t.memoizedState = yd, r;
  }
  return i = e3.child, e3 = i.sibling, r = kr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e3 !== null && (n = t.deletions, n === null ? (t.deletions = [e3], t.flags |= 16) : n.push(e3)), t.child = r, t.memoizedState = null, r;
}
function Nf(e3, t) {
  return t = Fa({ mode: "visible", children: t }, e3.mode, 0, null), t.return = e3, e3.child = t;
}
function il(e3, t, n, r) {
  return r !== null && xf(r), Bo(t, e3.child, null, n), e3 = Nf(t, t.pendingProps.children), e3.flags |= 2, t.memoizedState = null, e3;
}
function HS(e3, t, n, r, o, i, s) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = uc(Error(F(422))), il(e3, t, s, r)) : t.memoizedState !== null ? (t.child = e3.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Fa({ mode: "visible", children: r.children }, o, 0, null), i = Vr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Bo(t, e3.child, null, s), t.child.memoizedState = xd(s), t.memoizedState = yd, i);
  if (!(t.mode & 1)) return il(e3, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(F(419)), r = uc(i, r, void 0), il(e3, t, s, r);
  }
  if (l = (s & e3.childLanes) !== 0, Ot || l) {
    if (r = at, r !== null) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, er(e3, o), Rn(r, e3, o, -1));
    }
    return Df(), r = uc(Error(F(421))), il(e3, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e3.child, t = ob.bind(null, e3), o._reactRetry = t, null) : (e3 = i.treeContext, Wt = Sr(o.nextSibling), Ht = t, Ae = true, En = null, e3 !== null && (nn[rn++] = Gn, nn[rn++] = Qn, nn[rn++] = Xr, Gn = e3.id, Qn = e3.overflow, Xr = t), t = Nf(t, r.children), t.flags |= 4096, t);
}
function Wh(e3, t, n) {
  e3.lanes |= t;
  var r = e3.alternate;
  r !== null && (r.lanes |= t), fd(e3.return, t, n);
}
function cc(e3, t, n, r, o) {
  var i = e3.memoizedState;
  i === null ? e3.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Ny(e3, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Ct(e3, t, r.children, n), r = Fe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e3 !== null && e3.flags & 128) e: for (e3 = t.child; e3 !== null; ) {
      if (e3.tag === 13) e3.memoizedState !== null && Wh(e3, n, t);
      else if (e3.tag === 19) Wh(e3, n, t);
      else if (e3.child !== null) {
        e3.child.return = e3, e3 = e3.child;
        continue;
      }
      if (e3 === t) break e;
      for (; e3.sibling === null; ) {
        if (e3.return === null || e3.return === t) break e;
        e3 = e3.return;
      }
      e3.sibling.return = e3.return, e3 = e3.sibling;
    }
    r &= 1;
  }
  if (Le(Fe, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e3 = n.alternate, e3 !== null && ra(e3) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), cc(t, false, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e3 = o.alternate, e3 !== null && ra(e3) === null) {
          t.child = o;
          break;
        }
        e3 = o.sibling, o.sibling = n, n = o, o = e3;
      }
      cc(t, true, n, null, i);
      break;
    case "together":
      cc(t, false, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function $l(e3, t) {
  !(t.mode & 1) && e3 !== null && (e3.alternate = null, t.alternate = null, t.flags |= 2);
}
function tr(e3, t, n) {
  if (e3 !== null && (t.dependencies = e3.dependencies), Qr |= t.lanes, !(n & t.childLanes)) return null;
  if (e3 !== null && t.child !== e3.child) throw Error(F(153));
  if (t.child !== null) {
    for (e3 = t.child, n = kr(e3, e3.pendingProps), t.child = n, n.return = t; e3.sibling !== null; ) e3 = e3.sibling, n = n.sibling = kr(e3, e3.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function KS(e3, t, n) {
  switch (t.tag) {
    case 3:
      My(t), Fo();
      break;
    case 5:
      iy(t);
      break;
    case 1:
      Nt(t.type) && ql(t);
      break;
    case 4:
      Ef(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Le(ea, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Le(Fe, Fe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ly(e3, t, n) : (Le(Fe, Fe.current & 1), e3 = tr(e3, t, n), e3 !== null ? e3.sibling : null);
      Le(Fe, Fe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e3.flags & 128) {
        if (r) return Ny(e3, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Le(Fe, Fe.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ty(e3, t, n);
  }
  return tr(e3, t, n);
}
var _y, Sd, Iy, jy;
_y = function(e3, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e3.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Sd = function() {
};
Iy = function(e3, t, n, r) {
  var o = e3.memoizedProps;
  if (o !== r) {
    e3 = t.stateNode, Br(Fn.current);
    var i = null;
    switch (n) {
      case "input":
        o = Wc(e3, o), r = Wc(e3, r), i = [];
        break;
      case "select":
        o = We({}, o, { value: void 0 }), r = We({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Hc(e3, o), r = Hc(e3, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e3.onclick = Gl);
    }
    Yc(n, r);
    var s;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var l = o[u];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (es.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = o == null ? void 0 : o[u], r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(u, n)), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (es.hasOwnProperty(u) ? (a != null && u === "onScroll" && Ne("scroll", e3), i || l === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
jy = function(e3, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yi(e3, t) {
  if (!Ae) switch (e3.tailMode) {
    case "hidden":
      t = e3.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e3.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e3.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e3.tail === null ? e3.tail = null : e3.tail.sibling = null : r.sibling = null;
  }
}
function xt(e3) {
  var t = e3.alternate !== null && e3.alternate.child === e3.child, n = 0, r = 0;
  if (t) for (var o = e3.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e3, o = o.sibling;
  else for (o = e3.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e3, o = o.sibling;
  return e3.subtreeFlags |= r, e3.childLanes = n, t;
}
function YS(e3, t, n) {
  var r = t.pendingProps;
  switch (yf(t), t.tag) {
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
      return xt(t), null;
    case 1:
      return Nt(t.type) && Ql(), xt(t), null;
    case 3:
      return r = t.stateNode, Wo(), _e(Lt), _e(wt), Rf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e3 === null || e3.child === null) && (rl(t) ? t.flags |= 4 : e3 === null || e3.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, En !== null && ($d(En), En = null))), Sd(e3, t), xt(t), null;
    case 5:
      Pf(t);
      var o = Br(fs.current);
      if (n = t.type, e3 !== null && t.stateNode != null) Iy(e3, t, n, r, o), e3.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(F(166));
          return xt(t), null;
        }
        if (e3 = Br(Fn.current), rl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[_n] = t, r[cs] = i, e3 = (t.mode & 1) !== 0, n) {
            case "dialog":
              Ne("cancel", r), Ne("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ne("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ni.length; o++) Ne(Ni[o], r);
              break;
            case "source":
              Ne("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ne("error", r), Ne("load", r);
              break;
            case "details":
              Ne("toggle", r);
              break;
            case "input":
              qp(r, i), Ne("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Ne("invalid", r);
              break;
            case "textarea":
              Jp(r, i), Ne("invalid", r);
          }
          Yc(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== true && nl(r.textContent, l, e3), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== true && nl(r.textContent, l, e3), o = ["children", "" + l]) : es.hasOwnProperty(s) && l != null && s === "onScroll" && Ne("scroll", r);
          }
          switch (n) {
            case "input":
              Xs(r), Zp(r, i, true);
              break;
            case "textarea":
              Xs(r), eh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Gl);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e3 === "http://www.w3.org/1999/xhtml" && (e3 = cv(n)), e3 === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e3 = s.createElement("div"), e3.innerHTML = "<script><\/script>", e3 = e3.removeChild(e3.firstChild)) : typeof r.is == "string" ? e3 = s.createElement(n, { is: r.is }) : (e3 = s.createElement(n), n === "select" && (s = e3, r.multiple ? s.multiple = true : r.size && (s.size = r.size))) : e3 = s.createElementNS(e3, n), e3[_n] = t, e3[cs] = r, _y(e3, t, false, false), t.stateNode = e3;
          e: {
            switch (s = Xc(n, r), n) {
              case "dialog":
                Ne("cancel", e3), Ne("close", e3), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ne("load", e3), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ni.length; o++) Ne(Ni[o], e3);
                o = r;
                break;
              case "source":
                Ne("error", e3), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Ne("error", e3), Ne("load", e3), o = r;
                break;
              case "details":
                Ne("toggle", e3), o = r;
                break;
              case "input":
                qp(e3, r), o = Wc(e3, r), Ne("invalid", e3);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e3._wrapperState = { wasMultiple: !!r.multiple }, o = We({}, r, { value: void 0 }), Ne("invalid", e3);
                break;
              case "textarea":
                Jp(e3, r), o = Hc(e3, r), Ne("invalid", e3);
                break;
              default:
                o = r;
            }
            Yc(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? pv(e3, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && dv(e3, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && ts(e3, a) : typeof a == "number" && ts(e3, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (es.hasOwnProperty(i) ? a != null && i === "onScroll" && Ne("scroll", e3) : a != null && nf(e3, i, a, s));
            }
            switch (n) {
              case "input":
                Xs(e3), Zp(e3, r, false);
                break;
              case "textarea":
                Xs(e3), eh(e3);
                break;
              case "option":
                r.value != null && e3.setAttribute("value", "" + Er(r.value));
                break;
              case "select":
                e3.multiple = !!r.multiple, i = r.value, i != null ? Ro(e3, !!r.multiple, i, false) : r.defaultValue != null && Ro(e3, !!r.multiple, r.defaultValue, true);
                break;
              default:
                typeof o.onClick == "function" && (e3.onclick = Gl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = true;
                break e;
              default:
                r = false;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return xt(t), null;
    case 6:
      if (e3 && t.stateNode != null) jy(e3, t, e3.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(F(166));
        if (n = Br(fs.current), Br(Fn.current), rl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[_n] = t, (i = r.nodeValue !== n) && (e3 = Ht, e3 !== null)) switch (e3.tag) {
            case 3:
              nl(r.nodeValue, n, (e3.mode & 1) !== 0);
              break;
            case 5:
              e3.memoizedProps.suppressHydrationWarning !== true && nl(r.nodeValue, n, (e3.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[_n] = t, t.stateNode = r;
      }
      return xt(t), null;
    case 13:
      if (_e(Fe), r = t.memoizedState, e3 === null || e3.memoizedState !== null && e3.memoizedState.dehydrated !== null) {
        if (Ae && Wt !== null && t.mode & 1 && !(t.flags & 128)) ey(), Fo(), t.flags |= 98560, i = false;
        else if (i = rl(t), r !== null && r.dehydrated !== null) {
          if (e3 === null) {
            if (!i) throw Error(F(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(F(317));
            i[_n] = t;
          } else Fo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          xt(t), i = false;
        } else En !== null && ($d(En), En = null), i = true;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e3 !== null && e3.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e3 === null || Fe.current & 1 ? ot === 0 && (ot = 3) : Df())), t.updateQueue !== null && (t.flags |= 4), xt(t), null);
    case 4:
      return Wo(), Sd(e3, t), e3 === null && as(t.stateNode.containerInfo), xt(t), null;
    case 10:
      return wf(t.type._context), xt(t), null;
    case 17:
      return Nt(t.type) && Ql(), xt(t), null;
    case 19:
      if (_e(Fe), i = t.memoizedState, i === null) return xt(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) yi(i, false);
      else {
        if (ot !== 0 || e3 !== null && e3.flags & 128) for (e3 = t.child; e3 !== null; ) {
          if (s = ra(e3), s !== null) {
            for (t.flags |= 128, yi(i, false), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e3 = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e3, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e3 = s.dependencies, i.dependencies = e3 === null ? null : { lanes: e3.lanes, firstContext: e3.firstContext }), n = n.sibling;
            return Le(Fe, Fe.current & 1 | 2), t.child;
          }
          e3 = e3.sibling;
        }
        i.tail !== null && Xe() > Vo && (t.flags |= 128, r = true, yi(i, false), t.lanes = 4194304);
      }
      else {
        if (!r) if (e3 = ra(s), e3 !== null) {
          if (t.flags |= 128, r = true, n = e3.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), yi(i, true), i.tail === null && i.tailMode === "hidden" && !s.alternate && !Ae) return xt(t), null;
        } else 2 * Xe() - i.renderingStartTime > Vo && n !== 1073741824 && (t.flags |= 128, r = true, yi(i, false), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Xe(), t.sibling = null, n = Fe.current, Le(Fe, r ? n & 1 | 2 : n & 1), t) : (xt(t), null);
    case 22:
    case 23:
      return Af(), r = t.memoizedState !== null, e3 !== null && e3.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ft & 1073741824 && (xt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function XS(e3, t) {
  switch (yf(t), t.tag) {
    case 1:
      return Nt(t.type) && Ql(), e3 = t.flags, e3 & 65536 ? (t.flags = e3 & -65537 | 128, t) : null;
    case 3:
      return Wo(), _e(Lt), _e(wt), Rf(), e3 = t.flags, e3 & 65536 && !(e3 & 128) ? (t.flags = e3 & -65537 | 128, t) : null;
    case 5:
      return Pf(t), null;
    case 13:
      if (_e(Fe), e3 = t.memoizedState, e3 !== null && e3.dehydrated !== null) {
        if (t.alternate === null) throw Error(F(340));
        Fo();
      }
      return e3 = t.flags, e3 & 65536 ? (t.flags = e3 & -65537 | 128, t) : null;
    case 19:
      return _e(Fe), null;
    case 4:
      return Wo(), null;
    case 10:
      return wf(t.type._context), null;
    case 22:
    case 23:
      return Af(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var sl = false, bt = false, GS = typeof WeakSet == "function" ? WeakSet : Set, X = null;
function Co(e3, t) {
  var n = e3.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ye(e3, t, r);
  }
  else n.current = null;
}
function bd(e3, t, n) {
  try {
    n();
  } catch (r) {
    Ye(e3, t, r);
  }
}
var Uh = false;
function QS(e3, t) {
  if (od = Kl, e3 = Bv(), gf(e3)) {
    if ("selectionStart" in e3) var n = { start: e3.selectionStart, end: e3.selectionEnd };
    else e: {
      n = (n = e3.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, l = -1, a = -1, u = 0, c = 0, d = e3, f = null;
        t: for (; ; ) {
          for (var p; d !== n || o !== 0 && d.nodeType !== 3 || (l = s + o), d !== i || r !== 0 && d.nodeType !== 3 || (a = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (p = d.firstChild) !== null; ) f = d, d = p;
          for (; ; ) {
            if (d === e3) break t;
            if (f === n && ++u === o && (l = s), f === i && ++c === r && (a = s), (p = d.nextSibling) !== null) break;
            d = f, f = d.parentNode;
          }
          d = p;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (id = { focusedElem: e3, selectionRange: n }, Kl = false, X = t; X !== null; ) if (t = X, e3 = t.child, (t.subtreeFlags & 1028) !== 0 && e3 !== null) e3.return = t, X = e3;
  else for (; X !== null; ) {
    t = X;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var v = y.memoizedProps, w = y.memoizedState, h = t.stateNode, m = h.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Cn(t.type, v), w);
            h.__reactInternalSnapshotBeforeUpdate = m;
          }
          break;
        case 3:
          var g = t.stateNode.containerInfo;
          g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(F(163));
      }
    } catch (x) {
      Ye(t, t.return, x);
    }
    if (e3 = t.sibling, e3 !== null) {
      e3.return = t.return, X = e3;
      break;
    }
    X = t.return;
  }
  return y = Uh, Uh = false, y;
}
function Wi(e3, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e3) === e3) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && bd(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Aa(e3, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e3) === e3) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function wd(e3) {
  var t = e3.ref;
  if (t !== null) {
    var n = e3.stateNode;
    switch (e3.tag) {
      case 5:
        e3 = n;
        break;
      default:
        e3 = n;
    }
    typeof t == "function" ? t(e3) : t.current = e3;
  }
}
function zy(e3) {
  var t = e3.alternate;
  t !== null && (e3.alternate = null, zy(t)), e3.child = null, e3.deletions = null, e3.sibling = null, e3.tag === 5 && (t = e3.stateNode, t !== null && (delete t[_n], delete t[cs], delete t[ad], delete t[LS], delete t[NS])), e3.stateNode = null, e3.return = null, e3.dependencies = null, e3.memoizedProps = null, e3.memoizedState = null, e3.pendingProps = null, e3.stateNode = null, e3.updateQueue = null;
}
function Ay(e3) {
  return e3.tag === 5 || e3.tag === 3 || e3.tag === 4;
}
function Vh(e3) {
  e: for (; ; ) {
    for (; e3.sibling === null; ) {
      if (e3.return === null || Ay(e3.return)) return null;
      e3 = e3.return;
    }
    for (e3.sibling.return = e3.return, e3 = e3.sibling; e3.tag !== 5 && e3.tag !== 6 && e3.tag !== 18; ) {
      if (e3.flags & 2 || e3.child === null || e3.tag === 4) continue e;
      e3.child.return = e3, e3 = e3.child;
    }
    if (!(e3.flags & 2)) return e3.stateNode;
  }
}
function Cd(e3, t, n) {
  var r = e3.tag;
  if (r === 5 || r === 6) e3 = e3.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e3, t) : n.insertBefore(e3, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e3, n)) : (t = n, t.appendChild(e3)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Gl));
  else if (r !== 4 && (e3 = e3.child, e3 !== null)) for (Cd(e3, t, n), e3 = e3.sibling; e3 !== null; ) Cd(e3, t, n), e3 = e3.sibling;
}
function kd(e3, t, n) {
  var r = e3.tag;
  if (r === 5 || r === 6) e3 = e3.stateNode, t ? n.insertBefore(e3, t) : n.appendChild(e3);
  else if (r !== 4 && (e3 = e3.child, e3 !== null)) for (kd(e3, t, n), e3 = e3.sibling; e3 !== null; ) kd(e3, t, n), e3 = e3.sibling;
}
var pt = null, kn = false;
function sr(e3, t, n) {
  for (n = n.child; n !== null; ) Dy(e3, t, n), n = n.sibling;
}
function Dy(e3, t, n) {
  if (Dn && typeof Dn.onCommitFiberUnmount == "function") try {
    Dn.onCommitFiberUnmount(Oa, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      bt || Co(n, t);
    case 6:
      var r = pt, o = kn;
      pt = null, sr(e3, t, n), pt = r, kn = o, pt !== null && (kn ? (e3 = pt, n = n.stateNode, e3.nodeType === 8 ? e3.parentNode.removeChild(n) : e3.removeChild(n)) : pt.removeChild(n.stateNode));
      break;
    case 18:
      pt !== null && (kn ? (e3 = pt, n = n.stateNode, e3.nodeType === 8 ? rc(e3.parentNode, n) : e3.nodeType === 1 && rc(e3, n), is(e3)) : rc(pt, n.stateNode));
      break;
    case 4:
      r = pt, o = kn, pt = n.stateNode.containerInfo, kn = true, sr(e3, t, n), pt = r, kn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!bt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && bd(n, t, s), o = o.next;
        } while (o !== r);
      }
      sr(e3, t, n);
      break;
    case 1:
      if (!bt && (Co(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        Ye(n, t, l);
      }
      sr(e3, t, n);
      break;
    case 21:
      sr(e3, t, n);
      break;
    case 22:
      n.mode & 1 ? (bt = (r = bt) || n.memoizedState !== null, sr(e3, t, n), bt = r) : sr(e3, t, n);
      break;
    default:
      sr(e3, t, n);
  }
}
function Hh(e3) {
  var t = e3.updateQueue;
  if (t !== null) {
    e3.updateQueue = null;
    var n = e3.stateNode;
    n === null && (n = e3.stateNode = new GS()), t.forEach(function(r) {
      var o = ib.bind(null, e3, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function wn(e3, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e3, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            pt = l.stateNode, kn = false;
            break e;
          case 3:
            pt = l.stateNode.containerInfo, kn = true;
            break e;
          case 4:
            pt = l.stateNode.containerInfo, kn = true;
            break e;
        }
        l = l.return;
      }
      if (pt === null) throw Error(F(160));
      Dy(i, s, o), pt = null, kn = false;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      Ye(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Fy(t, e3), t = t.sibling;
}
function Fy(e3, t) {
  var n = e3.alternate, r = e3.flags;
  switch (e3.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (wn(t, e3), On(e3), r & 4) {
        try {
          Wi(3, e3, e3.return), Aa(3, e3);
        } catch (v) {
          Ye(e3, e3.return, v);
        }
        try {
          Wi(5, e3, e3.return);
        } catch (v) {
          Ye(e3, e3.return, v);
        }
      }
      break;
    case 1:
      wn(t, e3), On(e3), r & 512 && n !== null && Co(n, n.return);
      break;
    case 5:
      if (wn(t, e3), On(e3), r & 512 && n !== null && Co(n, n.return), e3.flags & 32) {
        var o = e3.stateNode;
        try {
          ts(o, "");
        } catch (v) {
          Ye(e3, e3.return, v);
        }
      }
      if (r & 4 && (o = e3.stateNode, o != null)) {
        var i = e3.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e3.type, a = e3.updateQueue;
        if (e3.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && av(o, i), Xc(l, s);
          var u = Xc(l, i);
          for (s = 0; s < a.length; s += 2) {
            var c = a[s], d = a[s + 1];
            c === "style" ? pv(o, d) : c === "dangerouslySetInnerHTML" ? dv(o, d) : c === "children" ? ts(o, d) : nf(o, c, d, u);
          }
          switch (l) {
            case "input":
              Uc(o, i);
              break;
            case "textarea":
              uv(o, i);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var p = i.value;
              p != null ? Ro(o, !!i.multiple, p, false) : f !== !!i.multiple && (i.defaultValue != null ? Ro(o, !!i.multiple, i.defaultValue, true) : Ro(o, !!i.multiple, i.multiple ? [] : "", false));
          }
          o[cs] = i;
        } catch (v) {
          Ye(e3, e3.return, v);
        }
      }
      break;
    case 6:
      if (wn(t, e3), On(e3), r & 4) {
        if (e3.stateNode === null) throw Error(F(162));
        o = e3.stateNode, i = e3.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (v) {
          Ye(e3, e3.return, v);
        }
      }
      break;
    case 3:
      if (wn(t, e3), On(e3), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        is(t.containerInfo);
      } catch (v) {
        Ye(e3, e3.return, v);
      }
      break;
    case 4:
      wn(t, e3), On(e3);
      break;
    case 13:
      wn(t, e3), On(e3), o = e3.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (jf = Xe())), r & 4 && Hh(e3);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e3.mode & 1 ? (bt = (u = bt) || c, wn(t, e3), bt = u) : wn(t, e3), On(e3), r & 8192) {
        if (u = e3.memoizedState !== null, (e3.stateNode.isHidden = u) && !c && e3.mode & 1) for (X = e3, c = e3.child; c !== null; ) {
          for (d = X = c; X !== null; ) {
            switch (f = X, p = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Wi(4, f, f.return);
                break;
              case 1:
                Co(f, f.return);
                var y = f.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (v) {
                    Ye(r, n, v);
                  }
                }
                break;
              case 5:
                Co(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  Yh(d);
                  continue;
                }
            }
            p !== null ? (p.return = f, X = p) : Yh(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e3; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = d.stateNode, a = d.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = fv("display", s));
              } catch (v) {
                Ye(e3, e3.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps;
            } catch (v) {
              Ye(e3, e3.return, v);
            }
          } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e3) && d.child !== null) {
            d.child.return = d, d = d.child;
            continue;
          }
          if (d === e3) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e3) break e;
            c === d && (c = null), d = d.return;
          }
          c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
        }
      }
      break;
    case 19:
      wn(t, e3), On(e3), r & 4 && Hh(e3);
      break;
    case 21:
      break;
    default:
      wn(t, e3), On(e3);
  }
}
function On(e3) {
  var t = e3.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e3.return; n !== null; ) {
          if (Ay(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ts(o, ""), r.flags &= -33);
          var i = Vh(e3);
          kd(e3, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = Vh(e3);
          Cd(e3, l, s);
          break;
        default:
          throw Error(F(161));
      }
    } catch (a) {
      Ye(e3, e3.return, a);
    }
    e3.flags &= -3;
  }
  t & 4096 && (e3.flags &= -4097);
}
function qS(e3, t, n) {
  X = e3, By(e3);
}
function By(e3, t, n) {
  for (var r = (e3.mode & 1) !== 0; X !== null; ) {
    var o = X, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || sl;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || bt;
        l = sl;
        var u = bt;
        if (sl = s, (bt = a) && !u) for (X = o; X !== null; ) s = X, a = s.child, s.tag === 22 && s.memoizedState !== null ? Xh(o) : a !== null ? (a.return = s, X = a) : Xh(o);
        for (; i !== null; ) X = i, By(i), i = i.sibling;
        X = o, sl = l, bt = u;
      }
      Kh(e3);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, X = i) : Kh(e3);
  }
}
function Kh(e3) {
  for (; X !== null; ) {
    var t = X;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            bt || Aa(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !bt) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Cn(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Oh(t, i, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Oh(t, s, n);
            }
            break;
          case 5:
            var l = t.stateNode;
            if (n === null && t.flags & 4) {
              n = l;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
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
                  var d = c.dehydrated;
                  d !== null && is(d);
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
            throw Error(F(163));
        }
        bt || t.flags & 512 && wd(t);
      } catch (f) {
        Ye(t, t.return, f);
      }
    }
    if (t === e3) {
      X = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, X = n;
      break;
    }
    X = t.return;
  }
}
function Yh(e3) {
  for (; X !== null; ) {
    var t = X;
    if (t === e3) {
      X = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, X = n;
      break;
    }
    X = t.return;
  }
}
function Xh(e3) {
  for (; X !== null; ) {
    var t = X;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Aa(4, t);
          } catch (a) {
            Ye(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Ye(t, o, a);
            }
          }
          var i = t.return;
          try {
            wd(t);
          } catch (a) {
            Ye(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            wd(t);
          } catch (a) {
            Ye(t, s, a);
          }
      }
    } catch (a) {
      Ye(t, t.return, a);
    }
    if (t === e3) {
      X = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, X = l;
      break;
    }
    X = t.return;
  }
}
var ZS = Math.ceil, sa = or.ReactCurrentDispatcher, _f = or.ReactCurrentOwner, ln = or.ReactCurrentBatchConfig, be = 0, at = null, et = null, mt = 0, Ft = 0, ko = Tr(0), ot = 0, gs = null, Qr = 0, Da = 0, If = 0, Ui = null, Tt = null, jf = 0, Vo = 1 / 0, Kn = null, la = false, Ed = null, wr = null, ll = false, mr = null, aa = 0, Vi = 0, Pd = null, Tl = -1, Ol = 0;
function kt() {
  return be & 6 ? Xe() : Tl !== -1 ? Tl : Tl = Xe();
}
function Cr(e3) {
  return e3.mode & 1 ? be & 2 && mt !== 0 ? mt & -mt : IS.transition !== null ? (Ol === 0 && (Ol = Ev()), Ol) : (e3 = Re, e3 !== 0 || (e3 = window.event, e3 = e3 === void 0 ? 16 : Lv(e3.type)), e3) : 1;
}
function Rn(e3, t, n, r) {
  if (50 < Vi) throw Vi = 0, Pd = null, Error(F(185));
  Rs(e3, n, r), (!(be & 2) || e3 !== at) && (e3 === at && (!(be & 2) && (Da |= n), ot === 4 && pr(e3, mt)), _t(e3, r), n === 1 && be === 0 && !(t.mode & 1) && (Vo = Xe() + 500, Ia && Or()));
}
function _t(e3, t) {
  var n = e3.callbackNode;
  Ix(e3, t);
  var r = Hl(e3, e3 === at ? mt : 0);
  if (r === 0) n !== null && rh(n), e3.callbackNode = null, e3.callbackPriority = 0;
  else if (t = r & -r, e3.callbackPriority !== t) {
    if (n != null && rh(n), t === 1) e3.tag === 0 ? _S(Gh.bind(null, e3)) : qv(Gh.bind(null, e3)), OS(function() {
      !(be & 6) && Or();
    }), n = null;
    else {
      switch (Pv(r)) {
        case 1:
          n = af;
          break;
        case 4:
          n = Cv;
          break;
        case 16:
          n = Vl;
          break;
        case 536870912:
          n = kv;
          break;
        default:
          n = Vl;
      }
      n = Gy(n, Wy.bind(null, e3));
    }
    e3.callbackPriority = t, e3.callbackNode = n;
  }
}
function Wy(e3, t) {
  if (Tl = -1, Ol = 0, be & 6) throw Error(F(327));
  var n = e3.callbackNode;
  if (Lo() && e3.callbackNode !== n) return null;
  var r = Hl(e3, e3 === at ? mt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e3.expiredLanes || t) t = ua(e3, r);
  else {
    t = r;
    var o = be;
    be |= 2;
    var i = Vy();
    (at !== e3 || mt !== t) && (Kn = null, Vo = Xe() + 500, Ur(e3, t));
    do
      try {
        tb();
        break;
      } catch (l) {
        Uy(e3, l);
      }
    while (true);
    bf(), sa.current = i, be = o, et !== null ? t = 0 : (at = null, mt = 0, t = ot);
  }
  if (t !== 0) {
    if (t === 2 && (o = Jc(e3), o !== 0 && (r = o, t = Rd(e3, o))), t === 1) throw n = gs, Ur(e3, 0), pr(e3, r), _t(e3, Xe()), n;
    if (t === 6) pr(e3, r);
    else {
      if (o = e3.current.alternate, !(r & 30) && !JS(o) && (t = ua(e3, r), t === 2 && (i = Jc(e3), i !== 0 && (r = i, t = Rd(e3, i))), t === 1)) throw n = gs, Ur(e3, 0), pr(e3, r), _t(e3, Xe()), n;
      switch (e3.finishedWork = o, e3.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          jr(e3, Tt, Kn);
          break;
        case 3:
          if (pr(e3, r), (r & 130023424) === r && (t = jf + 500 - Xe(), 10 < t)) {
            if (Hl(e3, 0) !== 0) break;
            if (o = e3.suspendedLanes, (o & r) !== r) {
              kt(), e3.pingedLanes |= e3.suspendedLanes & o;
              break;
            }
            e3.timeoutHandle = ld(jr.bind(null, e3, Tt, Kn), t);
            break;
          }
          jr(e3, Tt, Kn);
          break;
        case 4:
          if (pr(e3, r), (r & 4194240) === r) break;
          for (t = e3.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Pn(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = Xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ZS(r / 1960)) - r, 10 < r) {
            e3.timeoutHandle = ld(jr.bind(null, e3, Tt, Kn), r);
            break;
          }
          jr(e3, Tt, Kn);
          break;
        case 5:
          jr(e3, Tt, Kn);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return _t(e3, Xe()), e3.callbackNode === n ? Wy.bind(null, e3) : null;
}
function Rd(e3, t) {
  var n = Ui;
  return e3.current.memoizedState.isDehydrated && (Ur(e3, t).flags |= 256), e3 = ua(e3, t), e3 !== 2 && (t = Tt, Tt = n, t !== null && $d(t)), e3;
}
function $d(e3) {
  Tt === null ? Tt = e3 : Tt.push.apply(Tt, e3);
}
function JS(e3) {
  for (var t = e3; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!$n(i(), o)) return false;
        } catch {
          return false;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e3) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e3) return true;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return true;
}
function pr(e3, t) {
  for (t &= ~If, t &= ~Da, e3.suspendedLanes |= t, e3.pingedLanes &= ~t, e3 = e3.expirationTimes; 0 < t; ) {
    var n = 31 - Pn(t), r = 1 << n;
    e3[n] = -1, t &= ~r;
  }
}
function Gh(e3) {
  if (be & 6) throw Error(F(327));
  Lo();
  var t = Hl(e3, 0);
  if (!(t & 1)) return _t(e3, Xe()), null;
  var n = ua(e3, t);
  if (e3.tag !== 0 && n === 2) {
    var r = Jc(e3);
    r !== 0 && (t = r, n = Rd(e3, r));
  }
  if (n === 1) throw n = gs, Ur(e3, 0), pr(e3, t), _t(e3, Xe()), n;
  if (n === 6) throw Error(F(345));
  return e3.finishedWork = e3.current.alternate, e3.finishedLanes = t, jr(e3, Tt, Kn), _t(e3, Xe()), null;
}
function zf(e3, t) {
  var n = be;
  be |= 1;
  try {
    return e3(t);
  } finally {
    be = n, be === 0 && (Vo = Xe() + 500, Ia && Or());
  }
}
function qr(e3) {
  mr !== null && mr.tag === 0 && !(be & 6) && Lo();
  var t = be;
  be |= 1;
  var n = ln.transition, r = Re;
  try {
    if (ln.transition = null, Re = 1, e3) return e3();
  } finally {
    Re = r, ln.transition = n, be = t, !(be & 6) && Or();
  }
}
function Af() {
  Ft = ko.current, _e(ko);
}
function Ur(e3, t) {
  e3.finishedWork = null, e3.finishedLanes = 0;
  var n = e3.timeoutHandle;
  if (n !== -1 && (e3.timeoutHandle = -1, TS(n)), et !== null) for (n = et.return; n !== null; ) {
    var r = n;
    switch (yf(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ql();
        break;
      case 3:
        Wo(), _e(Lt), _e(wt), Rf();
        break;
      case 5:
        Pf(r);
        break;
      case 4:
        Wo();
        break;
      case 13:
        _e(Fe);
        break;
      case 19:
        _e(Fe);
        break;
      case 10:
        wf(r.type._context);
        break;
      case 22:
      case 23:
        Af();
    }
    n = n.return;
  }
  if (at = e3, et = e3 = kr(e3.current, null), mt = Ft = t, ot = 0, gs = null, If = Da = Qr = 0, Tt = Ui = null, Fr !== null) {
    for (t = 0; t < Fr.length; t++) if (n = Fr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    Fr = null;
  }
  return e3;
}
function Uy(e3, t) {
  do {
    var n = et;
    try {
      if (bf(), Pl.current = ia, oa) {
        for (var r = Be.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        oa = false;
      }
      if (Gr = 0, lt = rt = Be = null, Bi = false, ps = 0, _f.current = null, n === null || n.return === null) {
        ot = 1, gs = t, et = null;
        break;
      }
      e: {
        var i = e3, s = n.return, l = n, a = t;
        if (t = mt, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = l, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var p = jh(s);
          if (p !== null) {
            p.flags &= -257, zh(p, s, l, i, t), p.mode & 1 && Ih(i, u, t), t = p, a = u;
            var y = t.updateQueue;
            if (y === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(a), t.updateQueue = v;
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ih(i, u, t), Df();
              break e;
            }
            a = Error(F(426));
          }
        } else if (Ae && l.mode & 1) {
          var w = jh(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), zh(w, s, l, i, t), xf(Uo(a, l));
            break e;
          }
        }
        i = a = Uo(a, l), ot !== 4 && (ot = 2), Ui === null ? Ui = [i] : Ui.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var h = Py(i, a, t);
              Th(i, h);
              break e;
            case 1:
              l = a;
              var m = i.type, g = i.stateNode;
              if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (wr === null || !wr.has(g)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var x = Ry(i, l, t);
                Th(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ky(n);
    } catch (C) {
      t = C, et === n && n !== null && (et = n = n.return);
      continue;
    }
    break;
  } while (true);
}
function Vy() {
  var e3 = sa.current;
  return sa.current = ia, e3 === null ? ia : e3;
}
function Df() {
  (ot === 0 || ot === 3 || ot === 2) && (ot = 4), at === null || !(Qr & 268435455) && !(Da & 268435455) || pr(at, mt);
}
function ua(e3, t) {
  var n = be;
  be |= 2;
  var r = Vy();
  (at !== e3 || mt !== t) && (Kn = null, Ur(e3, t));
  do
    try {
      eb();
      break;
    } catch (o) {
      Uy(e3, o);
    }
  while (true);
  if (bf(), be = n, sa.current = r, et !== null) throw Error(F(261));
  return at = null, mt = 0, ot;
}
function eb() {
  for (; et !== null; ) Hy(et);
}
function tb() {
  for (; et !== null && !Px(); ) Hy(et);
}
function Hy(e3) {
  var t = Xy(e3.alternate, e3, Ft);
  e3.memoizedProps = e3.pendingProps, t === null ? Ky(e3) : et = t, _f.current = null;
}
function Ky(e3) {
  var t = e3;
  do {
    var n = t.alternate;
    if (e3 = t.return, t.flags & 32768) {
      if (n = XS(n, t), n !== null) {
        n.flags &= 32767, et = n;
        return;
      }
      if (e3 !== null) e3.flags |= 32768, e3.subtreeFlags = 0, e3.deletions = null;
      else {
        ot = 6, et = null;
        return;
      }
    } else if (n = YS(n, t, Ft), n !== null) {
      et = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      et = t;
      return;
    }
    et = t = e3;
  } while (t !== null);
  ot === 0 && (ot = 5);
}
function jr(e3, t, n) {
  var r = Re, o = ln.transition;
  try {
    ln.transition = null, Re = 1, nb(e3, t, n, r);
  } finally {
    ln.transition = o, Re = r;
  }
  return null;
}
function nb(e3, t, n, r) {
  do
    Lo();
  while (mr !== null);
  if (be & 6) throw Error(F(327));
  n = e3.finishedWork;
  var o = e3.finishedLanes;
  if (n === null) return null;
  if (e3.finishedWork = null, e3.finishedLanes = 0, n === e3.current) throw Error(F(177));
  e3.callbackNode = null, e3.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (jx(e3, i), e3 === at && (et = at = null, mt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ll || (ll = true, Gy(Vl, function() {
    return Lo(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = ln.transition, ln.transition = null;
    var s = Re;
    Re = 1;
    var l = be;
    be |= 4, _f.current = null, QS(e3, n), Fy(n, e3), wS(id), Kl = !!od, id = od = null, e3.current = n, qS(n), Rx(), be = l, Re = s, ln.transition = i;
  } else e3.current = n;
  if (ll && (ll = false, mr = e3, aa = o), i = e3.pendingLanes, i === 0 && (wr = null), Ox(n.stateNode), _t(e3, Xe()), t !== null) for (r = e3.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (la) throw la = false, e3 = Ed, Ed = null, e3;
  return aa & 1 && e3.tag !== 0 && Lo(), i = e3.pendingLanes, i & 1 ? e3 === Pd ? Vi++ : (Vi = 0, Pd = e3) : Vi = 0, Or(), null;
}
function Lo() {
  if (mr !== null) {
    var e3 = Pv(aa), t = ln.transition, n = Re;
    try {
      if (ln.transition = null, Re = 16 > e3 ? 16 : e3, mr === null) var r = false;
      else {
        if (e3 = mr, mr = null, aa = 0, be & 6) throw Error(F(331));
        var o = be;
        for (be |= 4, X = e3.current; X !== null; ) {
          var i = X, s = i.child;
          if (X.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (X = u; X !== null; ) {
                  var c = X;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wi(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, X = d;
                  else for (; X !== null; ) {
                    c = X;
                    var f = c.sibling, p = c.return;
                    if (zy(c), c === u) {
                      X = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = p, X = f;
                      break;
                    }
                    X = p;
                  }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var w = v.sibling;
                    v.sibling = null, v = w;
                  } while (v !== null);
                }
              }
              X = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, X = s;
          else e: for (; X !== null; ) {
            if (i = X, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Wi(9, i, i.return);
            }
            var h = i.sibling;
            if (h !== null) {
              h.return = i.return, X = h;
              break e;
            }
            X = i.return;
          }
        }
        var m = e3.current;
        for (X = m; X !== null; ) {
          s = X;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) g.return = s, X = g;
          else e: for (s = m; X !== null; ) {
            if (l = X, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Aa(9, l);
              }
            } catch (C) {
              Ye(l, l.return, C);
            }
            if (l === s) {
              X = null;
              break e;
            }
            var x = l.sibling;
            if (x !== null) {
              x.return = l.return, X = x;
              break e;
            }
            X = l.return;
          }
        }
        if (be = o, Or(), Dn && typeof Dn.onPostCommitFiberRoot == "function") try {
          Dn.onPostCommitFiberRoot(Oa, e3);
        } catch {
        }
        r = true;
      }
      return r;
    } finally {
      Re = n, ln.transition = t;
    }
  }
  return false;
}
function Qh(e3, t, n) {
  t = Uo(n, t), t = Py(e3, t, 1), e3 = br(e3, t, 1), t = kt(), e3 !== null && (Rs(e3, 1, t), _t(e3, t));
}
function Ye(e3, t, n) {
  if (e3.tag === 3) Qh(e3, e3, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Qh(t, e3, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (wr === null || !wr.has(r))) {
        e3 = Uo(n, e3), e3 = Ry(t, e3, 1), t = br(t, e3, 1), e3 = kt(), t !== null && (Rs(t, 1, e3), _t(t, e3));
        break;
      }
    }
    t = t.return;
  }
}
function rb(e3, t, n) {
  var r = e3.pingCache;
  r !== null && r.delete(t), t = kt(), e3.pingedLanes |= e3.suspendedLanes & n, at === e3 && (mt & n) === n && (ot === 4 || ot === 3 && (mt & 130023424) === mt && 500 > Xe() - jf ? Ur(e3, 0) : If |= n), _t(e3, t);
}
function Yy(e3, t) {
  t === 0 && (e3.mode & 1 ? (t = qs, qs <<= 1, !(qs & 130023424) && (qs = 4194304)) : t = 1);
  var n = kt();
  e3 = er(e3, t), e3 !== null && (Rs(e3, t, n), _t(e3, n));
}
function ob(e3) {
  var t = e3.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Yy(e3, n);
}
function ib(e3, t) {
  var n = 0;
  switch (e3.tag) {
    case 13:
      var r = e3.stateNode, o = e3.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e3.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  r !== null && r.delete(t), Yy(e3, n);
}
var Xy;
Xy = function(e3, t, n) {
  if (e3 !== null) if (e3.memoizedProps !== t.pendingProps || Lt.current) Ot = true;
  else {
    if (!(e3.lanes & n) && !(t.flags & 128)) return Ot = false, KS(e3, t, n);
    Ot = !!(e3.flags & 131072);
  }
  else Ot = false, Ae && t.flags & 1048576 && Zv(t, Jl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      $l(e3, t), e3 = t.pendingProps;
      var o = Do(t, wt.current);
      Mo(t, n), o = Tf(null, t, r, e3, o, n);
      var i = Of();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Nt(r) ? (i = true, ql(t)) : i = false, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, kf(t), o.updater = za, t.stateNode = o, o._reactInternals = t, hd(t, r, e3, n), t = vd(null, t, r, true, i, n)) : (t.tag = 0, Ae && i && vf(t), Ct(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch ($l(e3, t), e3 = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = lb(r), e3 = Cn(r, e3), o) {
          case 0:
            t = gd(null, t, r, e3, n);
            break e;
          case 1:
            t = Fh(null, t, r, e3, n);
            break e;
          case 11:
            t = Ah(null, t, r, e3, n);
            break e;
          case 14:
            t = Dh(null, t, r, Cn(r.type, e3), n);
            break e;
        }
        throw Error(F(306, r, ""));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Cn(r, o), gd(e3, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Cn(r, o), Fh(e3, t, r, o, n);
    case 3:
      e: {
        if (My(t), e3 === null) throw Error(F(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, oy(e3, t), na(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: false, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Uo(Error(F(423)), t), t = Bh(e3, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Uo(Error(F(424)), t), t = Bh(e3, t, r, n, o);
          break e;
        } else for (Wt = Sr(t.stateNode.containerInfo.firstChild), Ht = t, Ae = true, En = null, n = ny(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Fo(), r === o) {
            t = tr(e3, t, n);
            break e;
          }
          Ct(e3, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return iy(t), e3 === null && dd(t), r = t.type, o = t.pendingProps, i = e3 !== null ? e3.memoizedProps : null, s = o.children, sd(r, o) ? s = null : i !== null && sd(r, i) && (t.flags |= 32), Oy(e3, t), Ct(e3, t, s, n), t.child;
    case 6:
      return e3 === null && dd(t), null;
    case 13:
      return Ly(e3, t, n);
    case 4:
      return Ef(t, t.stateNode.containerInfo), r = t.pendingProps, e3 === null ? t.child = Bo(t, null, r, n) : Ct(e3, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Cn(r, o), Ah(e3, t, r, o, n);
    case 7:
      return Ct(e3, t, t.pendingProps, n), t.child;
    case 8:
      return Ct(e3, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ct(e3, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Le(ea, r._currentValue), r._currentValue = s, i !== null) if ($n(i.value, s)) {
          if (i.children === o.children && !Lt.current) {
            t = tr(e3, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = qn(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), fd(i.return, n, t), l.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (s = i.return, s === null) throw Error(F(341));
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), fd(s, n, t), s = i.sibling;
          } else s = i.child;
          if (s !== null) s.return = i;
          else for (s = i; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (i = s.sibling, i !== null) {
              i.return = s.return, s = i;
              break;
            }
            s = s.return;
          }
          i = s;
        }
        Ct(e3, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Mo(t, n), o = un(o), r = r(o), t.flags |= 1, Ct(e3, t, r, n), t.child;
    case 14:
      return r = t.type, o = Cn(r, t.pendingProps), o = Cn(r.type, o), Dh(e3, t, r, o, n);
    case 15:
      return $y(e3, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Cn(r, o), $l(e3, t), t.tag = 1, Nt(r) ? (e3 = true, ql(t)) : e3 = false, Mo(t, n), Ey(t, r, o), hd(t, r, o, n), vd(null, t, r, true, e3, n);
    case 19:
      return Ny(e3, t, n);
    case 22:
      return Ty(e3, t, n);
  }
  throw Error(F(156, t.tag));
};
function Gy(e3, t) {
  return wv(e3, t);
}
function sb(e3, t, n, r) {
  this.tag = e3, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function sn(e3, t, n, r) {
  return new sb(e3, t, n, r);
}
function Ff(e3) {
  return e3 = e3.prototype, !(!e3 || !e3.isReactComponent);
}
function lb(e3) {
  if (typeof e3 == "function") return Ff(e3) ? 1 : 0;
  if (e3 != null) {
    if (e3 = e3.$$typeof, e3 === of) return 11;
    if (e3 === sf) return 14;
  }
  return 2;
}
function kr(e3, t) {
  var n = e3.alternate;
  return n === null ? (n = sn(e3.tag, t, e3.key, e3.mode), n.elementType = e3.elementType, n.type = e3.type, n.stateNode = e3.stateNode, n.alternate = e3, e3.alternate = n) : (n.pendingProps = t, n.type = e3.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e3.flags & 14680064, n.childLanes = e3.childLanes, n.lanes = e3.lanes, n.child = e3.child, n.memoizedProps = e3.memoizedProps, n.memoizedState = e3.memoizedState, n.updateQueue = e3.updateQueue, t = e3.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e3.sibling, n.index = e3.index, n.ref = e3.ref, n;
}
function Ml(e3, t, n, r, o, i) {
  var s = 2;
  if (r = e3, typeof e3 == "function") Ff(e3) && (s = 1);
  else if (typeof e3 == "string") s = 5;
  else e: switch (e3) {
    case ho:
      return Vr(n.children, o, i, t);
    case rf:
      s = 8, o |= 8;
      break;
    case Ac:
      return e3 = sn(12, n, t, o | 2), e3.elementType = Ac, e3.lanes = i, e3;
    case Dc:
      return e3 = sn(13, n, t, o), e3.elementType = Dc, e3.lanes = i, e3;
    case Fc:
      return e3 = sn(19, n, t, o), e3.elementType = Fc, e3.lanes = i, e3;
    case iv:
      return Fa(n, o, i, t);
    default:
      if (typeof e3 == "object" && e3 !== null) switch (e3.$$typeof) {
        case rv:
          s = 10;
          break e;
        case ov:
          s = 9;
          break e;
        case of:
          s = 11;
          break e;
        case sf:
          s = 14;
          break e;
        case cr:
          s = 16, r = null;
          break e;
      }
      throw Error(F(130, e3 == null ? e3 : typeof e3, ""));
  }
  return t = sn(s, n, t, o), t.elementType = e3, t.type = r, t.lanes = i, t;
}
function Vr(e3, t, n, r) {
  return e3 = sn(7, e3, r, t), e3.lanes = n, e3;
}
function Fa(e3, t, n, r) {
  return e3 = sn(22, e3, r, t), e3.elementType = iv, e3.lanes = n, e3.stateNode = { isHidden: false }, e3;
}
function dc(e3, t, n) {
  return e3 = sn(6, e3, null, t), e3.lanes = n, e3;
}
function fc(e3, t, n) {
  return t = sn(4, e3.children !== null ? e3.children : [], e3.key, t), t.lanes = n, t.stateNode = { containerInfo: e3.containerInfo, pendingChildren: null, implementation: e3.implementation }, t;
}
function ab(e3, t, n, r, o) {
  this.tag = t, this.containerInfo = e3, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ku(0), this.expirationTimes = Ku(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ku(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Bf(e3, t, n, r, o, i, s, l, a) {
  return e3 = new ab(e3, t, n, l, a), t === 1 ? (t = 1, i === true && (t |= 8)) : t = 0, i = sn(3, null, null, t), e3.current = i, i.stateNode = e3, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, kf(i), e3;
}
function ub(e3, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: po, key: r == null ? null : "" + r, children: e3, containerInfo: t, implementation: n };
}
function Qy(e3) {
  if (!e3) return Pr;
  e3 = e3._reactInternals;
  e: {
    if (to(e3) !== e3 || e3.tag !== 1) throw Error(F(170));
    var t = e3;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Nt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(F(171));
  }
  if (e3.tag === 1) {
    var n = e3.type;
    if (Nt(n)) return Qv(e3, n, t);
  }
  return t;
}
function qy(e3, t, n, r, o, i, s, l, a) {
  return e3 = Bf(n, r, true, e3, o, i, s, l, a), e3.context = Qy(null), n = e3.current, r = kt(), o = Cr(n), i = qn(r, o), i.callback = t ?? null, br(n, i, o), e3.current.lanes = o, Rs(e3, o, r), _t(e3, r), e3;
}
function Ba(e3, t, n, r) {
  var o = t.current, i = kt(), s = Cr(o);
  return n = Qy(n), t.context === null ? t.context = n : t.pendingContext = n, t = qn(i, s), t.payload = { element: e3 }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e3 = br(o, t, s), e3 !== null && (Rn(e3, o, s, i), El(e3, o, s)), s;
}
function ca(e3) {
  if (e3 = e3.current, !e3.child) return null;
  switch (e3.child.tag) {
    case 5:
      return e3.child.stateNode;
    default:
      return e3.child.stateNode;
  }
}
function qh(e3, t) {
  if (e3 = e3.memoizedState, e3 !== null && e3.dehydrated !== null) {
    var n = e3.retryLane;
    e3.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wf(e3, t) {
  qh(e3, t), (e3 = e3.alternate) && qh(e3, t);
}
function cb() {
  return null;
}
var Zy = typeof reportError == "function" ? reportError : function(e3) {
  console.error(e3);
};
function Uf(e3) {
  this._internalRoot = e3;
}
Wa.prototype.render = Uf.prototype.render = function(e3) {
  var t = this._internalRoot;
  if (t === null) throw Error(F(409));
  Ba(e3, t, null, null);
};
Wa.prototype.unmount = Uf.prototype.unmount = function() {
  var e3 = this._internalRoot;
  if (e3 !== null) {
    this._internalRoot = null;
    var t = e3.containerInfo;
    qr(function() {
      Ba(null, e3, null, null);
    }), t[Jn] = null;
  }
};
function Wa(e3) {
  this._internalRoot = e3;
}
Wa.prototype.unstable_scheduleHydration = function(e3) {
  if (e3) {
    var t = Tv();
    e3 = { blockedOn: null, target: e3, priority: t };
    for (var n = 0; n < fr.length && t !== 0 && t < fr[n].priority; n++) ;
    fr.splice(n, 0, e3), n === 0 && Mv(e3);
  }
};
function Vf(e3) {
  return !(!e3 || e3.nodeType !== 1 && e3.nodeType !== 9 && e3.nodeType !== 11);
}
function Ua(e3) {
  return !(!e3 || e3.nodeType !== 1 && e3.nodeType !== 9 && e3.nodeType !== 11 && (e3.nodeType !== 8 || e3.nodeValue !== " react-mount-point-unstable "));
}
function Zh() {
}
function db(e3, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = ca(s);
        i.call(u);
      };
    }
    var s = qy(t, r, e3, 0, null, false, false, "", Zh);
    return e3._reactRootContainer = s, e3[Jn] = s.current, as(e3.nodeType === 8 ? e3.parentNode : e3), qr(), s;
  }
  for (; o = e3.lastChild; ) e3.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = ca(a);
      l.call(u);
    };
  }
  var a = Bf(e3, 0, false, null, null, false, false, "", Zh);
  return e3._reactRootContainer = a, e3[Jn] = a.current, as(e3.nodeType === 8 ? e3.parentNode : e3), qr(function() {
    Ba(t, a, n, r);
  }), a;
}
function Va(e3, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = ca(s);
        l.call(a);
      };
    }
    Ba(t, s, e3, o);
  } else s = db(n, t, e3, o, r);
  return ca(s);
}
Rv = function(e3) {
  switch (e3.tag) {
    case 3:
      var t = e3.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Li(t.pendingLanes);
        n !== 0 && (uf(t, n | 1), _t(t, Xe()), !(be & 6) && (Vo = Xe() + 500, Or()));
      }
      break;
    case 13:
      qr(function() {
        var r = er(e3, 1);
        if (r !== null) {
          var o = kt();
          Rn(r, e3, 1, o);
        }
      }), Wf(e3, 1);
  }
};
cf = function(e3) {
  if (e3.tag === 13) {
    var t = er(e3, 134217728);
    if (t !== null) {
      var n = kt();
      Rn(t, e3, 134217728, n);
    }
    Wf(e3, 134217728);
  }
};
$v = function(e3) {
  if (e3.tag === 13) {
    var t = Cr(e3), n = er(e3, t);
    if (n !== null) {
      var r = kt();
      Rn(n, e3, t, r);
    }
    Wf(e3, t);
  }
};
Tv = function() {
  return Re;
};
Ov = function(e3, t) {
  var n = Re;
  try {
    return Re = e3, t();
  } finally {
    Re = n;
  }
};
Qc = function(e3, t, n) {
  switch (t) {
    case "input":
      if (Uc(e3, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e3; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e3 && r.form === e3.form) {
            var o = _a(r);
            if (!o) throw Error(F(90));
            lv(r), Uc(r, o);
          }
        }
      }
      break;
    case "textarea":
      uv(e3, n);
      break;
    case "select":
      t = n.value, t != null && Ro(e3, !!n.multiple, t, false);
  }
};
gv = zf;
vv = qr;
var fb = { usingClientEntryPoint: false, Events: [Ts, yo, _a, hv, mv, zf] }, xi = { findFiberByHostInstance: Dr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, pb = { bundleType: xi.bundleType, version: xi.version, rendererPackageName: xi.rendererPackageName, rendererConfig: xi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: or.ReactCurrentDispatcher, findHostInstanceByFiber: function(e3) {
  return e3 = Sv(e3), e3 === null ? null : e3.stateNode;
}, findFiberByHostInstance: xi.findFiberByHostInstance || cb, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!al.isDisabled && al.supportsFiber) try {
    Oa = al.inject(pb), Dn = al;
  } catch {
  }
}
Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fb;
Qt.createPortal = function(e3, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vf(t)) throw Error(F(200));
  return ub(e3, t, null, n);
};
Qt.createRoot = function(e3, t) {
  if (!Vf(e3)) throw Error(F(299));
  var n = false, r = "", o = Zy;
  return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Bf(e3, 1, false, null, null, n, false, r, o), e3[Jn] = t.current, as(e3.nodeType === 8 ? e3.parentNode : e3), new Uf(t);
};
Qt.findDOMNode = function(e3) {
  if (e3 == null) return null;
  if (e3.nodeType === 1) return e3;
  var t = e3._reactInternals;
  if (t === void 0) throw typeof e3.render == "function" ? Error(F(188)) : (e3 = Object.keys(e3).join(","), Error(F(268, e3)));
  return e3 = Sv(t), e3 = e3 === null ? null : e3.stateNode, e3;
};
Qt.flushSync = function(e3) {
  return qr(e3);
};
Qt.hydrate = function(e3, t, n) {
  if (!Ua(t)) throw Error(F(200));
  return Va(null, e3, t, true, n);
};
Qt.hydrateRoot = function(e3, t, n) {
  if (!Vf(e3)) throw Error(F(405));
  var r = n != null && n.hydratedSources || null, o = false, i = "", s = Zy;
  if (n != null && (n.unstable_strictMode === true && (o = true), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = qy(t, null, e3, 1, n ?? null, o, false, i, s), e3[Jn] = t.current, as(e3), r) for (e3 = 0; e3 < r.length; e3++) n = r[e3], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
  return new Wa(t);
};
Qt.render = function(e3, t, n) {
  if (!Ua(t)) throw Error(F(200));
  return Va(null, e3, t, false, n);
};
Qt.unmountComponentAtNode = function(e3) {
  if (!Ua(e3)) throw Error(F(40));
  return e3._reactRootContainer ? (qr(function() {
    Va(null, null, e3, false, function() {
      e3._reactRootContainer = null, e3[Jn] = null;
    });
  }), true) : false;
};
Qt.unstable_batchedUpdates = zf;
Qt.unstable_renderSubtreeIntoContainer = function(e3, t, n, r) {
  if (!Ua(n)) throw Error(F(200));
  if (e3 == null || e3._reactInternals === void 0) throw Error(F(38));
  return Va(e3, t, n, false, r);
};
Qt.version = "18.3.1-next-f1338f8080-20240426";
function Jy() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jy);
  } catch (e3) {
    console.error(e3);
  }
}
Jy(), Jg.exports = Qt;
var Hf = Jg.exports;
const ul = Bg(Hf);
var Kf, Jh = Hf;
Kf = Jh.createRoot, Jh.hydrateRoot;
const hb = (e3, t, n, r) => {
  var _a2, _b2, _c2, _d2;
  const o = [n, { code: t, ...r || {} }];
  if ((_b2 = (_a2 = e3 == null ? void 0 : e3.services) == null ? void 0 : _a2.logger) == null ? void 0 : _b2.forward) return e3.services.logger.forward(o, "warn", "react-i18next::", true);
  Hr(o[0]) && (o[0] = `react-i18next:: ${o[0]}`), ((_d2 = (_c2 = e3 == null ? void 0 : e3.services) == null ? void 0 : _c2.logger) == null ? void 0 : _d2.warn) ? e3.services.logger.warn(...o) : (console == null ? void 0 : console.warn) && console.warn(...o);
}, em = {}, Td = (e3, t, n, r) => {
  Hr(n) && em[n] || (Hr(n) && (em[n] = /* @__PURE__ */ new Date()), hb(e3, t, n, r));
}, e0 = (e3, t) => () => {
  if (e3.isInitialized) t();
  else {
    const n = () => {
      setTimeout(() => {
        e3.off("initialized", n);
      }, 0), t();
    };
    e3.on("initialized", n);
  }
}, Od = (e3, t, n) => {
  e3.loadNamespaces(t, e0(e3, n));
}, tm = (e3, t, n, r) => {
  if (Hr(n) && (n = [n]), e3.options.preload && e3.options.preload.indexOf(t) > -1) return Od(e3, n, r);
  n.forEach((o) => {
    e3.options.ns.indexOf(o) < 0 && e3.options.ns.push(o);
  }), e3.loadLanguages(t, e0(e3, r));
}, mb = (e3, t, n = {}) => !t.languages || !t.languages.length ? (Td(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", { languages: t.languages }), true) : t.hasLoadedNamespace(e3, { lng: n.lng, precheck: (r, o) => {
  if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !o(r.isLanguageChangingTo, e3)) return false;
} }), Hr = (e3) => typeof e3 == "string", gb = (e3) => typeof e3 == "object" && e3 !== null, vb = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, yb = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "\xA9", "&#169;": "\xA9", "&reg;": "\xAE", "&#174;": "\xAE", "&hellip;": "\u2026", "&#8230;": "\u2026", "&#x2F;": "/", "&#47;": "/" }, xb = (e3) => yb[e3], Sb = (e3) => e3.replace(vb, xb);
let Md = { bindI18n: "languageChanged", bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: true, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"], useSuspense: true, unescape: Sb };
const bb = (e3 = {}) => {
  Md = { ...Md, ...e3 };
}, wb = () => Md;
let t0;
const Cb = (e3) => {
  t0 = e3;
}, kb = () => t0, Eb = { type: "3rdParty", init(e3) {
  bb(e3.options.react), Cb(e3);
} }, Pb = S.createContext();
class Rb {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = true);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const $b = (e3, t) => {
  const n = S.useRef();
  return S.useEffect(() => {
    n.current = e3;
  }, [e3, t]), n.current;
}, n0 = (e3, t, n, r) => e3.getFixedT(t, n, r), Tb = (e3, t, n, r) => S.useCallback(n0(e3, t, n, r), [e3, t, n, r]), Mr = (e3, t = {}) => {
  var _a2, _b2, _c2, _d2;
  const { i18n: n } = t, { i18n: r, defaultNS: o } = S.useContext(Pb) || {}, i = n || r || kb();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new Rb()), !i) {
    Td(i, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const x = (E, P) => Hr(P) ? P : gb(P) && Hr(P.defaultValue) ? P.defaultValue : Array.isArray(E) ? E[E.length - 1] : E, C = [x, {}, false];
    return C.t = x, C.i18n = {}, C.ready = false, C;
  }
  ((_a2 = i.options.react) == null ? void 0 : _a2.wait) && Td(i, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = { ...wb(), ...i.options.react, ...t }, { useSuspense: l, keyPrefix: a } = s;
  let u = o || ((_b2 = i.options) == null ? void 0 : _b2.defaultNS);
  u = Hr(u) ? [u] : u || ["translation"], (_d2 = (_c2 = i.reportNamespaces).addUsedNamespaces) == null ? void 0 : _d2.call(_c2, u);
  const c = (i.isInitialized || i.initializedStoreOnce) && u.every((x) => mb(x, i, s)), d = Tb(i, t.lng || null, s.nsMode === "fallback" ? u : u[0], a), f = () => d, p = () => n0(i, t.lng || null, s.nsMode === "fallback" ? u : u[0], a), [y, v] = S.useState(f);
  let w = u.join();
  t.lng && (w = `${t.lng}${w}`);
  const h = $b(w), m = S.useRef(true);
  S.useEffect(() => {
    const { bindI18n: x, bindI18nStore: C } = s;
    m.current = true, !c && !l && (t.lng ? tm(i, t.lng, u, () => {
      m.current && v(p);
    }) : Od(i, u, () => {
      m.current && v(p);
    })), c && h && h !== w && m.current && v(p);
    const E = () => {
      m.current && v(p);
    };
    return x && (i == null ? void 0 : i.on(x, E)), C && (i == null ? void 0 : i.store.on(C, E)), () => {
      m.current = false, i && x && (x == null ? void 0 : x.split(" ").forEach((P) => i.off(P, E))), C && i && C.split(" ").forEach((P) => i.store.off(P, E));
    };
  }, [i, w]), S.useEffect(() => {
    m.current && c && v(f);
  }, [i, a, c]);
  const g = [y, i, c];
  if (g.t = y, g.i18n = i, g.ready = c, c || !c && !l) return g;
  throw new Promise((x) => {
    t.lng ? tm(i, t.lng, u, () => x()) : Od(i, u, () => x());
  });
};
var pc = {};
const ne = (e3) => typeof e3 == "string", Si = () => {
  let e3, t;
  const n = new Promise((r, o) => {
    e3 = r, t = o;
  });
  return n.resolve = e3, n.reject = t, n;
}, nm = (e3) => e3 == null ? "" : "" + e3, Ob = (e3, t, n) => {
  e3.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}, Mb = /###/g, rm = (e3) => e3 && e3.indexOf("###") > -1 ? e3.replace(Mb, ".") : e3, om = (e3) => !e3 || ne(e3), Hi = (e3, t, n) => {
  const r = ne(t) ? t.split(".") : t;
  let o = 0;
  for (; o < r.length - 1; ) {
    if (om(e3)) return {};
    const i = rm(r[o]);
    !e3[i] && n && (e3[i] = new n()), Object.prototype.hasOwnProperty.call(e3, i) ? e3 = e3[i] : e3 = {}, ++o;
  }
  return om(e3) ? {} : { obj: e3, k: rm(r[o]) };
}, im = (e3, t, n) => {
  const { obj: r, k: o } = Hi(e3, t, Object);
  if (r !== void 0 || t.length === 1) {
    r[o] = n;
    return;
  }
  let i = t[t.length - 1], s = t.slice(0, t.length - 1), l = Hi(e3, s, Object);
  for (; l.obj === void 0 && s.length; ) i = `${s[s.length - 1]}.${i}`, s = s.slice(0, s.length - 1), l = Hi(e3, s, Object), (l == null ? void 0 : l.obj) && typeof l.obj[`${l.k}.${i}`] < "u" && (l.obj = void 0);
  l.obj[`${l.k}.${i}`] = n;
}, Lb = (e3, t, n, r) => {
  const { obj: o, k: i } = Hi(e3, t, Object);
  o[i] = o[i] || [], o[i].push(n);
}, da = (e3, t) => {
  const { obj: n, k: r } = Hi(e3, t);
  if (n && Object.prototype.hasOwnProperty.call(n, r)) return n[r];
}, Nb = (e3, t, n) => {
  const r = da(e3, n);
  return r !== void 0 ? r : da(t, n);
}, r0 = (e3, t, n) => {
  for (const r in t) r !== "__proto__" && r !== "constructor" && (r in e3 ? ne(e3[r]) || e3[r] instanceof String || ne(t[r]) || t[r] instanceof String ? n && (e3[r] = t[r]) : r0(e3[r], t[r], n) : e3[r] = t[r]);
  return e3;
}, Nr = (e3) => e3.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var _b = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };
const Ib = (e3) => ne(e3) ? e3.replace(/[&<>"'\/]/g, (t) => _b[t]) : e3;
class jb {
  constructor(t) {
    this.capacity = t, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0) return n;
    const r = new RegExp(t);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, r), this.regExpQueue.push(t), r;
  }
}
const zb = [" ", ",", "?", "!", ";"], Ab = new jb(20), Db = (e3, t, n) => {
  t = t || "", n = n || "";
  const r = zb.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
  if (r.length === 0) return true;
  const o = Ab.getRegExp(`(${r.map((s) => s === "?" ? "\\?" : s).join("|")})`);
  let i = !o.test(e3);
  if (!i) {
    const s = e3.indexOf(n);
    s > 0 && !o.test(e3.substring(0, s)) && (i = true);
  }
  return i;
}, Ld = (e3, t, n = ".") => {
  if (!e3) return;
  if (e3[t]) return Object.prototype.hasOwnProperty.call(e3, t) ? e3[t] : void 0;
  const r = t.split(n);
  let o = e3;
  for (let i = 0; i < r.length; ) {
    if (!o || typeof o != "object") return;
    let s, l = "";
    for (let a = i; a < r.length; ++a) if (a !== i && (l += n), l += r[a], s = o[l], s !== void 0) {
      if (["string", "number", "boolean"].indexOf(typeof s) > -1 && a < r.length - 1) continue;
      i += a - i + 1;
      break;
    }
    o = s;
  }
  return o;
}, vs = (e3) => e3 == null ? void 0 : e3.replace(/_/g, "-"), Fb = { type: "logger", log(e3) {
  this.output("log", e3);
}, warn(e3) {
  this.output("warn", e3);
}, error(e3) {
  this.output("error", e3);
}, output(e3, t) {
  var _a2, _b2;
  (_b2 = (_a2 = console == null ? void 0 : console[e3]) == null ? void 0 : _a2.apply) == null ? void 0 : _b2.call(_a2, console, t);
} };
class fa {
  constructor(t, n = {}) {
    this.init(t, n);
  }
  init(t, n = {}) {
    this.prefix = n.prefix || "i18next:", this.logger = t || Fb, this.options = n, this.debug = n.debug;
  }
  log(...t) {
    return this.forward(t, "log", "", true);
  }
  warn(...t) {
    return this.forward(t, "warn", "", true);
  }
  error(...t) {
    return this.forward(t, "error", "");
  }
  deprecate(...t) {
    return this.forward(t, "warn", "WARNING DEPRECATED: ", true);
  }
  forward(t, n, r, o) {
    return o && !this.debug ? null : (ne(t[0]) && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new fa(this.logger, { prefix: `${this.prefix}:${t}:`, ...this.options });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new fa(this.logger, t);
  }
}
var zn = new fa();
class Ha {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return t.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const o = this.observers[r].get(n) || 0;
      this.observers[r].set(n, o + 1);
    }), this;
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t, ...n) {
    this.observers[t] && Array.from(this.observers[t].entries()).forEach(([o, i]) => {
      for (let s = 0; s < i; s++) o(...n);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([o, i]) => {
      for (let s = 0; s < i; s++) o.apply(o, [t, ...n]);
    });
  }
}
class sm extends Ha {
  constructor(t, n = { ns: ["translation"], defaultNS: "translation" }) {
    super(), this.data = t || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = true);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r, o = {}) {
    var _a2, _b2;
    const i = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, s = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l;
    t.indexOf(".") > -1 ? l = t.split(".") : (l = [t, n], r && (Array.isArray(r) ? l.push(...r) : ne(r) && i ? l.push(...r.split(i)) : l.push(r)));
    const a = da(this.data, l);
    return !a && !n && !r && t.indexOf(".") > -1 && (t = l[0], n = l[1], r = l.slice(2).join(".")), a || !s || !ne(r) ? a : Ld((_b2 = (_a2 = this.data) == null ? void 0 : _a2[t]) == null ? void 0 : _b2[n], r, i);
  }
  addResource(t, n, r, o, i = { silent: false }) {
    const s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let l = [t, n];
    r && (l = l.concat(s ? r.split(s) : r)), t.indexOf(".") > -1 && (l = t.split("."), o = n, n = l[1]), this.addNamespaces(n), im(this.data, l, o), i.silent || this.emit("added", t, n, r, o);
  }
  addResources(t, n, r, o = { silent: false }) {
    for (const i in r) (ne(r[i]) || Array.isArray(r[i])) && this.addResource(t, n, i, r[i], { silent: true });
    o.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, o, i, s = { silent: false, skipCopy: false }) {
    let l = [t, n];
    t.indexOf(".") > -1 && (l = t.split("."), o = r, r = n, n = l[1]), this.addNamespaces(n);
    let a = da(this.data, l) || {};
    s.skipCopy || (r = JSON.parse(JSON.stringify(r))), o ? r0(a, r, i) : a = { ...a, ...r }, im(this.data, l, a), s.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return n || (n = this.options.defaultNS), this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!(n && Object.keys(n) || []).find((o) => n[o] && Object.keys(n[o]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var o0 = { processors: {}, addPostProcessor(e3) {
  this.processors[e3.name] = e3;
}, handle(e3, t, n, r, o) {
  return e3.forEach((i) => {
    var _a2;
    t = ((_a2 = this.processors[i]) == null ? void 0 : _a2.process(t, n, r, o)) ?? t;
  }), t;
} };
const i0 = Symbol("i18next/PATH_KEY");
function Bb() {
  const e3 = [], t = /* @__PURE__ */ Object.create(null);
  let n;
  return t.get = (r, o) => {
    var _a2;
    return (_a2 = n == null ? void 0 : n.revoke) == null ? void 0 : _a2.call(n), o === i0 ? e3 : (e3.push(o), n = Proxy.revocable(r, t), n.proxy);
  }, Proxy.revocable(/* @__PURE__ */ Object.create(null), t).proxy;
}
function No(e3, t) {
  const { [i0]: n } = e3(Bb()), r = (t == null ? void 0 : t.keySeparator) ?? ".", o = (t == null ? void 0 : t.nsSeparator) ?? ":";
  if (n.length > 1 && o) {
    const i = t == null ? void 0 : t.ns, s = Array.isArray(i) ? i : null;
    if (s && s.length > 1 && s.slice(1).includes(n[0])) return `${n[0]}${o}${n.slice(1).join(r)}`;
  }
  return n.join(r);
}
const lm = {}, hc = (e3) => !ne(e3) && typeof e3 != "boolean" && typeof e3 != "number";
class pa extends Ha {
  constructor(t, n = {}) {
    super(), Ob(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = zn.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t, n = { interpolation: {} }) {
    const r = { ...n };
    if (t == null) return false;
    const o = this.resolve(t, r);
    if ((o == null ? void 0 : o.res) === void 0) return false;
    const i = hc(o.res);
    return !(r.returnObjects === false && i);
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const s = r && t.indexOf(r) > -1, l = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !Db(t, r, o);
    if (s && !l) {
      const a = t.match(this.interpolator.nestingRegexp);
      if (a && a.length > 0) return { key: t, namespaces: ne(i) ? [i] : i };
      const u = t.split(r);
      (r !== o || r === o && this.options.ns.indexOf(u[0]) > -1) && (i = u.shift()), t = u.join(o);
    }
    return { key: t, namespaces: ne(i) ? [i] : i };
  }
  translate(t, n, r) {
    let o = typeof n == "object" ? { ...n } : n;
    if (typeof o != "object" && this.options.overloadTranslationOptionHandler && (o = this.options.overloadTranslationOptionHandler(arguments)), typeof o == "object" && (o = { ...o }), o || (o = {}), t == null) return "";
    typeof t == "function" && (t = No(t, { ...this.options, ...o })), Array.isArray(t) || (t = [String(t)]), t = t.map((M) => typeof M == "function" ? No(M, { ...this.options, ...o }) : String(M));
    const i = o.returnDetails !== void 0 ? o.returnDetails : this.options.returnDetails, s = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, { key: l, namespaces: a } = this.extractFromKey(t[t.length - 1], o), u = a[a.length - 1];
    let c = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    c === void 0 && (c = ":");
    const d = o.lng || this.language, f = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((d == null ? void 0 : d.toLowerCase()) === "cimode") return f ? i ? { res: `${u}${c}${l}`, usedKey: l, exactUsedKey: l, usedLng: d, usedNS: u, usedParams: this.getUsedParamsDetails(o) } : `${u}${c}${l}` : i ? { res: l, usedKey: l, exactUsedKey: l, usedLng: d, usedNS: u, usedParams: this.getUsedParamsDetails(o) } : l;
    const p = this.resolve(t, o);
    let y = p == null ? void 0 : p.res;
    const v = (p == null ? void 0 : p.usedKey) || l, w = (p == null ? void 0 : p.exactUsedKey) || l, h = ["[object Number]", "[object Function]", "[object RegExp]"], m = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays, g = !this.i18nFormat || this.i18nFormat.handleAsObject, x = o.count !== void 0 && !ne(o.count), C = pa.hasDefaultValue(o), E = x ? this.pluralResolver.getSuffix(d, o.count, o) : "", P = o.ordinal && x ? this.pluralResolver.getSuffix(d, o.count, { ordinal: false }) : "", $ = x && !o.ordinal && o.count === 0, L = $ && o[`defaultValue${this.options.pluralSeparator}zero`] || o[`defaultValue${E}`] || o[`defaultValue${P}`] || o.defaultValue;
    let T = y;
    g && !y && C && (T = L);
    const D = hc(T), z = Object.prototype.toString.apply(T);
    if (g && T && D && h.indexOf(z) < 0 && !(ne(m) && Array.isArray(T))) {
      if (!o.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const M = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, T, { ...o, ns: a }) : `key '${l} (${this.language})' returned an object instead of string.`;
        return i ? (p.res = M, p.usedParams = this.getUsedParamsDetails(o), p) : M;
      }
      if (s) {
        const M = Array.isArray(T), I = M ? [] : {}, A = M ? w : v;
        for (const j in T) if (Object.prototype.hasOwnProperty.call(T, j)) {
          const O = `${A}${s}${j}`;
          C && !y ? I[j] = this.translate(O, { ...o, defaultValue: hc(L) ? L[j] : void 0, joinArrays: false, ns: a }) : I[j] = this.translate(O, { ...o, joinArrays: false, ns: a }), I[j] === O && (I[j] = T[j]);
        }
        y = I;
      }
    } else if (g && ne(m) && Array.isArray(y)) y = y.join(m), y && (y = this.extendTranslation(y, t, o, r));
    else {
      let M = false, I = false;
      !this.isValidLookup(y) && C && (M = true, y = L), this.isValidLookup(y) || (I = true, y = l);
      const j = (o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && I ? void 0 : y, O = C && L !== y && this.options.updateMissing;
      if (I || M || O) {
        if (this.logger.log(O ? "updateKey" : "missingKey", d, u, l, O ? L : y), s) {
          const B = this.resolve(l, { ...o, keySeparator: false });
          B && B.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let R = [];
        const N = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && N && N[0]) for (let B = 0; B < N.length; B++) R.push(N[B]);
        else this.options.saveMissingTo === "all" ? R = this.languageUtils.toResolveHierarchy(o.lng || this.language) : R.push(o.lng || this.language);
        const _ = (B, W, V) => {
          var _a2;
          const K = C && V !== y ? V : j;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(B, u, W, K, O, o) : ((_a2 = this.backendConnector) == null ? void 0 : _a2.saveMissing) && this.backendConnector.saveMissing(B, u, W, K, O, o), this.emit("missingKey", B, u, W, y);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && x ? R.forEach((B) => {
          const W = this.pluralResolver.getSuffixes(B, o);
          $ && o[`defaultValue${this.options.pluralSeparator}zero`] && W.indexOf(`${this.options.pluralSeparator}zero`) < 0 && W.push(`${this.options.pluralSeparator}zero`), W.forEach((V) => {
            _([B], l + V, o[`defaultValue${V}`] || L);
          });
        }) : _(R, l, L));
      }
      y = this.extendTranslation(y, t, o, p, r), I && y === l && this.options.appendNamespaceToMissingKey && (y = `${u}${c}${l}`), (I || M) && this.options.parseMissingKeyHandler && (y = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}${c}${l}` : l, M ? y : void 0, o));
    }
    return i ? (p.res = y, p.usedParams = this.getUsedParamsDetails(o), p) : y;
  }
  extendTranslation(t, n, r, o, i) {
    var _a2, _b2;
    if ((_a2 = this.i18nFormat) == null ? void 0 : _a2.parse) t = this.i18nFormat.parse(t, { ...this.options.interpolation.defaultVariables, ...r }, r.lng || this.language || o.usedLng, o.usedNS, o.usedKey, { resolved: o });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({ ...r, interpolation: { ...this.options.interpolation, ...r.interpolation } });
      const a = ne(t) && (((_b2 = r == null ? void 0 : r.interpolation) == null ? void 0 : _b2.skipOnVariables) !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let u;
      if (a) {
        const d = t.match(this.interpolator.nestingRegexp);
        u = d && d.length;
      }
      let c = r.replace && !ne(r.replace) ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (c = { ...this.options.interpolation.defaultVariables, ...c }), t = this.interpolator.interpolate(t, c, r.lng || this.language || o.usedLng, r), a) {
        const d = t.match(this.interpolator.nestingRegexp), f = d && d.length;
        u < f && (r.nest = false);
      }
      !r.lng && o && o.res && (r.lng = this.language || o.usedLng), r.nest !== false && (t = this.interpolator.nest(t, (...d) => (i == null ? void 0 : i[0]) === d[0] && !r.context ? (this.logger.warn(`It seems you are nesting recursively key: ${d[0]} in key: ${n[0]}`), null) : this.translate(...d, n), r)), r.interpolation && this.interpolator.reset();
    }
    const s = r.postProcess || this.options.postProcess, l = ne(s) ? [s] : s;
    return t != null && (l == null ? void 0 : l.length) && r.applyPostProcessor !== false && (t = o0.handle(l, t, n, this.options && this.options.postProcessPassResolved ? { i18nResolved: { ...o, usedParams: this.getUsedParamsDetails(r) }, ...r } : r, this)), t;
  }
  resolve(t, n = {}) {
    let r, o, i, s, l;
    return ne(t) && (t = [t]), Array.isArray(t) && (t = t.map((a) => typeof a == "function" ? No(a, { ...this.options, ...n }) : a)), t.forEach((a) => {
      if (this.isValidLookup(r)) return;
      const u = this.extractFromKey(a, n), c = u.key;
      o = c;
      let d = u.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const f = n.count !== void 0 && !ne(n.count), p = f && !n.ordinal && n.count === 0, y = n.context !== void 0 && (ne(n.context) || typeof n.context == "number") && n.context !== "", v = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      d.forEach((w) => {
        var _a2, _b2;
        this.isValidLookup(r) || (l = w, !lm[`${v[0]}-${w}`] && ((_a2 = this.utils) == null ? void 0 : _a2.hasLoadedNamespace) && !((_b2 = this.utils) == null ? void 0 : _b2.hasLoadedNamespace(l)) && (lm[`${v[0]}-${w}`] = true, this.logger.warn(`key "${o}" for languages "${v.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), v.forEach((h) => {
          var _a3;
          if (this.isValidLookup(r)) return;
          s = h;
          const m = [c];
          if ((_a3 = this.i18nFormat) == null ? void 0 : _a3.addLookupKeys) this.i18nFormat.addLookupKeys(m, c, h, w, n);
          else {
            let x;
            f && (x = this.pluralResolver.getSuffix(h, n.count, n));
            const C = `${this.options.pluralSeparator}zero`, E = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (n.ordinal && x.indexOf(E) === 0 && m.push(c + x.replace(E, this.options.pluralSeparator)), m.push(c + x), p && m.push(c + C)), y) {
              const P = `${c}${this.options.contextSeparator || "_"}${n.context}`;
              m.push(P), f && (n.ordinal && x.indexOf(E) === 0 && m.push(P + x.replace(E, this.options.pluralSeparator)), m.push(P + x), p && m.push(P + C));
            }
          }
          let g;
          for (; g = m.pop(); ) this.isValidLookup(r) || (i = g, r = this.getResource(h, w, g, n));
        }));
      });
    }), { res: r, usedKey: o, exactUsedKey: i, usedLng: s, usedNS: l };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, n, r, o = {}) {
    var _a2;
    return ((_a2 = this.i18nFormat) == null ? void 0 : _a2.getResource) ? this.i18nFormat.getResource(t, n, r, o) : this.resourceStore.getResource(t, n, r, o);
  }
  getUsedParamsDetails(t = {}) {
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = t.replace && !ne(t.replace);
    let o = r ? t.replace : t;
    if (r && typeof t.count < "u" && (o.count = t.count), this.options.interpolation.defaultVariables && (o = { ...this.options.interpolation.defaultVariables, ...o }), !r) {
      o = { ...o };
      for (const i of n) delete o[i];
    }
    return o;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t) if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0) return true;
    return false;
  }
}
class am {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || false, this.logger = zn.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = vs(t), !t || t.indexOf("-") < 0) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = vs(t), !t || t.indexOf("-") < 0) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (ne(t) && t.indexOf("-") > -1) {
      let n;
      try {
        n = Intl.getCanonicalLocales(t)[0];
      } catch {
      }
      return n && this.options.lowerCaseLng && (n = n.toLowerCase()), n || (this.options.lowerCaseLng ? t.toLowerCase() : t);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return t.forEach((r) => {
      if (n) return;
      const o = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(o)) && (n = o);
    }), !n && this.options.supportedLngs && t.forEach((r) => {
      if (n) return;
      const o = this.getScriptPartFromCode(r);
      if (this.isSupportedCode(o)) return n = o;
      const i = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(i)) return n = i;
      n = this.options.supportedLngs.find((s) => {
        if (s === i) return s;
        if (!(s.indexOf("-") < 0 && i.indexOf("-") < 0) && (s.indexOf("-") > 0 && i.indexOf("-") < 0 && s.substring(0, s.indexOf("-")) === i || s.indexOf(i) === 0 && i.length > 1)) return s;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (typeof t == "function" && (t = t(n)), ne(t) && (t = [t]), Array.isArray(t)) return t;
    if (!n) return t.default || [];
    let r = t[n];
    return r || (r = t[this.getScriptPartFromCode(n)]), r || (r = t[this.formatLanguageCode(n)]), r || (r = t[this.getLanguagePartFromCode(n)]), r || (r = t.default), r || [];
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes((n === false ? [] : n) || this.options.fallbackLng || [], t), o = [], i = (s) => {
      s && (this.isSupportedCode(s) ? o.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`));
    };
    return ne(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(t))) : ne(t) && i(this.formatLanguageCode(t)), r.forEach((s) => {
      o.indexOf(s) < 0 && i(this.formatLanguageCode(s));
    }), o;
  }
}
const um = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }, cm = { select: (e3) => e3 === 1 ? "one" : "other", resolvedOptions: () => ({ pluralCategories: ["one", "other"] }) };
class Wb {
  constructor(t, n = {}) {
    this.languageUtils = t, this.options = n, this.logger = zn.create("pluralResolver"), this.pluralRulesCache = {};
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t, n = {}) {
    const r = vs(t === "dev" ? "en" : t), o = n.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({ cleanedCode: r, type: o });
    if (i in this.pluralRulesCache) return this.pluralRulesCache[i];
    let s;
    try {
      s = new Intl.PluralRules(r, { type: o });
    } catch {
      if (typeof Intl > "u") return this.logger.error("No Intl support, please use an Intl polyfill!"), cm;
      if (!t.match(/-|_/)) return cm;
      const a = this.languageUtils.getLanguagePartFromCode(t);
      s = this.getRule(a, n);
    }
    return this.pluralRulesCache[i] = s, s;
  }
  needsPlural(t, n = {}) {
    let r = this.getRule(t, n);
    return r || (r = this.getRule("dev", n)), (r == null ? void 0 : r.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(t, n, r = {}) {
    return this.getSuffixes(t, r).map((o) => `${n}${o}`);
  }
  getSuffixes(t, n = {}) {
    let r = this.getRule(t, n);
    return r || (r = this.getRule("dev", n)), r ? r.resolvedOptions().pluralCategories.sort((o, i) => um[o] - um[i]).map((o) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : [];
  }
  getSuffix(t, n, r = {}) {
    const o = this.getRule(t, r);
    return o ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(n)}` : (this.logger.warn(`no plural rule found for: ${t}`), this.getSuffix("dev", n, r));
  }
}
const dm = (e3, t, n, r = ".", o = true) => {
  let i = Nb(e3, t, n);
  return !i && o && ne(n) && (i = Ld(e3, n, r), i === void 0 && (i = Ld(t, n, r))), i;
}, mc = (e3) => e3.replace(/\$/g, "$$$$");
class fm {
  constructor(t = {}) {
    var _a2;
    this.logger = zn.create("interpolator"), this.options = t, this.format = ((_a2 = t == null ? void 0 : t.interpolation) == null ? void 0 : _a2.format) || ((n) => n), this.init(t);
  }
  init(t = {}) {
    t.interpolation || (t.interpolation = { escapeValue: true });
    const { escape: n, escapeValue: r, useRawValueToEscape: o, prefix: i, prefixEscaped: s, suffix: l, suffixEscaped: a, formatSeparator: u, unescapeSuffix: c, unescapePrefix: d, nestingPrefix: f, nestingPrefixEscaped: p, nestingSuffix: y, nestingSuffixEscaped: v, nestingOptionsSeparator: w, maxReplaces: h, alwaysFormat: m } = t.interpolation;
    this.escape = n !== void 0 ? n : Ib, this.escapeValue = r !== void 0 ? r : true, this.useRawValueToEscape = o !== void 0 ? o : false, this.prefix = i ? Nr(i) : s || "{{", this.suffix = l ? Nr(l) : a || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = f ? Nr(f) : p || Nr("$t("), this.nestingSuffix = y ? Nr(y) : v || Nr(")"), this.nestingOptionsSeparator = w || ",", this.maxReplaces = h || 1e3, this.alwaysFormat = m !== void 0 ? m : false, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) => (n == null ? void 0 : n.source) === r ? (n.lastIndex = 0, n) : new RegExp(r, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(t, n, r, o) {
    var _a2;
    let i, s, l;
    const a = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (p) => {
      if (p.indexOf(this.formatSeparator) < 0) {
        const h = dm(n, a, p, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(h, void 0, r, { ...o, ...n, interpolationkey: p }) : h;
      }
      const y = p.split(this.formatSeparator), v = y.shift().trim(), w = y.join(this.formatSeparator).trim();
      return this.format(dm(n, a, v, this.options.keySeparator, this.options.ignoreJSONStructure), w, r, { ...o, ...n, interpolationkey: v });
    };
    this.resetRegExp();
    const c = (o == null ? void 0 : o.missingInterpolationHandler) || this.options.missingInterpolationHandler, d = ((_a2 = o == null ? void 0 : o.interpolation) == null ? void 0 : _a2.skipOnVariables) !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{ regex: this.regexpUnescape, safeValue: (p) => mc(p) }, { regex: this.regexp, safeValue: (p) => this.escapeValue ? mc(this.escape(p)) : mc(p) }].forEach((p) => {
      for (l = 0; i = p.regex.exec(t); ) {
        const y = i[1].trim();
        if (s = u(y), s === void 0) if (typeof c == "function") {
          const w = c(t, i, o);
          s = ne(w) ? w : "";
        } else if (o && Object.prototype.hasOwnProperty.call(o, y)) s = "";
        else if (d) {
          s = i[0];
          continue;
        } else this.logger.warn(`missed to pass in variable ${y} for interpolating ${t}`), s = "";
        else !ne(s) && !this.useRawValueToEscape && (s = nm(s));
        const v = p.safeValue(s);
        if (t = t.replace(i[0], v), d ? (p.regex.lastIndex += s.length, p.regex.lastIndex -= i[0].length) : p.regex.lastIndex = 0, l++, l >= this.maxReplaces) break;
      }
    }), t;
  }
  nest(t, n, r = {}) {
    let o, i, s;
    const l = (a, u) => {
      const c = this.nestingOptionsSeparator;
      if (a.indexOf(c) < 0) return a;
      const d = a.split(new RegExp(`${Nr(c)}[ ]*{`));
      let f = `{${d[1]}`;
      a = d[0], f = this.interpolate(f, s);
      const p = f.match(/'/g), y = f.match(/"/g);
      (((p == null ? void 0 : p.length) ?? 0) % 2 === 0 && !y || ((y == null ? void 0 : y.length) ?? 0) % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        s = JSON.parse(f), u && (s = { ...u, ...s });
      } catch (v) {
        return this.logger.warn(`failed parsing options string in nesting for key ${a}`, v), `${a}${c}${f}`;
      }
      return s.defaultValue && s.defaultValue.indexOf(this.prefix) > -1 && delete s.defaultValue, a;
    };
    for (; o = this.nestingRegexp.exec(t); ) {
      let a = [];
      s = { ...r }, s = s.replace && !ne(s.replace) ? s.replace : s, s.applyPostProcessor = false, delete s.defaultValue;
      const u = /{.*}/.test(o[1]) ? o[1].lastIndexOf("}") + 1 : o[1].indexOf(this.formatSeparator);
      if (u !== -1 && (a = o[1].slice(u).split(this.formatSeparator).map((c) => c.trim()).filter(Boolean), o[1] = o[1].slice(0, u)), i = n(l.call(this, o[1].trim(), s), s), i && o[0] === t && !ne(i)) return i;
      ne(i) || (i = nm(i)), i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`), i = ""), a.length && (i = a.reduce((c, d) => this.format(c, d, r.lng, { ...r, interpolationkey: o[1].trim() }), i.trim())), t = t.replace(o[0], i), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
const Ub = (e3) => {
  let t = e3.toLowerCase().trim();
  const n = {};
  if (e3.indexOf("(") > -1) {
    const r = e3.split("(");
    t = r[0].toLowerCase().trim();
    const o = r[1].substring(0, r[1].length - 1);
    t === "currency" && o.indexOf(":") < 0 ? n.currency || (n.currency = o.trim()) : t === "relativetime" && o.indexOf(":") < 0 ? n.range || (n.range = o.trim()) : o.split(";").forEach((s) => {
      if (s) {
        const [l, ...a] = s.split(":"), u = a.join(":").trim().replace(/^'+|'+$/g, ""), c = l.trim();
        n[c] || (n[c] = u), u === "false" && (n[c] = false), u === "true" && (n[c] = true), isNaN(u) || (n[c] = parseInt(u, 10));
      }
    });
  }
  return { formatName: t, formatOptions: n };
}, pm = (e3) => {
  const t = {};
  return (n, r, o) => {
    let i = o;
    o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey] && (i = { ...i, [o.interpolationkey]: void 0 });
    const s = r + JSON.stringify(i);
    let l = t[s];
    return l || (l = e3(vs(r), o), t[s] = l), l(n);
  };
}, Vb = (e3) => (t, n, r) => e3(vs(n), r)(t);
class Hb {
  constructor(t = {}) {
    this.logger = zn.create("formatter"), this.options = t, this.init(t);
  }
  init(t, n = { interpolation: {} }) {
    this.formatSeparator = n.interpolation.formatSeparator || ",";
    const r = n.cacheInBuiltFormats ? pm : Vb;
    this.formats = { number: r((o, i) => {
      const s = new Intl.NumberFormat(o, { ...i });
      return (l) => s.format(l);
    }), currency: r((o, i) => {
      const s = new Intl.NumberFormat(o, { ...i, style: "currency" });
      return (l) => s.format(l);
    }), datetime: r((o, i) => {
      const s = new Intl.DateTimeFormat(o, { ...i });
      return (l) => s.format(l);
    }), relativetime: r((o, i) => {
      const s = new Intl.RelativeTimeFormat(o, { ...i });
      return (l) => s.format(l, i.range || "day");
    }), list: r((o, i) => {
      const s = new Intl.ListFormat(o, { ...i });
      return (l) => s.format(l);
    }) };
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = pm(n);
  }
  format(t, n, r, o = {}) {
    const i = n.split(this.formatSeparator);
    if (i.length > 1 && i[0].indexOf("(") > 1 && i[0].indexOf(")") < 0 && i.find((l) => l.indexOf(")") > -1)) {
      const l = i.findIndex((a) => a.indexOf(")") > -1);
      i[0] = [i[0], ...i.splice(1, l)].join(this.formatSeparator);
    }
    return i.reduce((l, a) => {
      var _a2;
      const { formatName: u, formatOptions: c } = Ub(a);
      if (this.formats[u]) {
        let d = l;
        try {
          const f = ((_a2 = o == null ? void 0 : o.formatParams) == null ? void 0 : _a2[o.interpolationkey]) || {}, p = f.locale || f.lng || o.locale || o.lng || r;
          d = this.formats[u](l, p, { ...c, ...o, ...f });
        } catch (f) {
          this.logger.warn(f);
        }
        return d;
      } else this.logger.warn(`there was no format function for ${u}`);
      return l;
    }, t);
  }
}
const Kb = (e3, t) => {
  e3.pending[t] !== void 0 && (delete e3.pending[t], e3.pendingCount--);
};
class Yb extends Ha {
  constructor(t, n, r, o = {}) {
    var _a2, _b2;
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = o, this.logger = zn.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], (_b2 = (_a2 = this.backend) == null ? void 0 : _a2.init) == null ? void 0 : _b2.call(_a2, r, o.backend, o);
  }
  queueLoad(t, n, r, o) {
    const i = {}, s = {}, l = {}, a = {};
    return t.forEach((u) => {
      let c = true;
      n.forEach((d) => {
        const f = `${u}|${d}`;
        !r.reload && this.store.hasResourceBundle(u, d) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? s[f] === void 0 && (s[f] = true) : (this.state[f] = 1, c = false, s[f] === void 0 && (s[f] = true), i[f] === void 0 && (i[f] = true), a[d] === void 0 && (a[d] = true)));
      }), c || (l[u] = true);
    }), (Object.keys(i).length || Object.keys(s).length) && this.queue.push({ pending: s, pendingCount: Object.keys(s).length, loaded: {}, errors: [], callback: o }), { toLoad: Object.keys(i), pending: Object.keys(s), toLoadLanguages: Object.keys(l), toLoadNamespaces: Object.keys(a) };
  }
  loaded(t, n, r) {
    const o = t.split("|"), i = o[0], s = o[1];
    n && this.emit("failedLoading", i, s, n), !n && r && this.store.addResourceBundle(i, s, r, void 0, void 0, { skipCopy: true }), this.state[t] = n ? -1 : 2, n && r && (this.state[t] = 0);
    const l = {};
    this.queue.forEach((a) => {
      Lb(a.loaded, [i], s), Kb(a, t), n && a.errors.push(n), a.pendingCount === 0 && !a.done && (Object.keys(a.loaded).forEach((u) => {
        l[u] || (l[u] = {});
        const c = a.loaded[u];
        c.length && c.forEach((d) => {
          l[u][d] === void 0 && (l[u][d] = true);
        });
      }), a.done = true, a.errors.length ? a.callback(a.errors) : a.callback());
    }), this.emit("loaded", l), this.queue = this.queue.filter((a) => !a.done);
  }
  read(t, n, r, o = 0, i = this.retryTimeout, s) {
    if (!t.length) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({ lng: t, ns: n, fcName: r, tried: o, wait: i, callback: s });
      return;
    }
    this.readingCalls++;
    const l = (u, c) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (u && c && o < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, n, r, o + 1, i * 2, s);
        }, i);
        return;
      }
      s(u, c);
    }, a = this.backend[r].bind(this.backend);
    if (a.length === 2) {
      try {
        const u = a(t, n);
        u && typeof u.then == "function" ? u.then((c) => l(null, c)).catch(l) : l(null, u);
      } catch (u) {
        l(u);
      }
      return;
    }
    return a(t, n, l);
  }
  prepareLoading(t, n, r = {}, o) {
    if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
    ne(t) && (t = this.languageUtils.toResolveHierarchy(t)), ne(n) && (n = [n]);
    const i = this.queueLoad(t, n, r, o);
    if (!i.toLoad.length) return i.pending.length || o(), null;
    i.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, { reload: true }, r);
  }
  loadOne(t, n = "") {
    const r = t.split("|"), o = r[0], i = r[1];
    this.read(o, i, "read", void 0, void 0, (s, l) => {
      s && this.logger.warn(`${n}loading namespace ${i} for language ${o} failed`, s), !s && l && this.logger.log(`${n}loaded namespace ${i} for language ${o}`, l), this.loaded(t, s, l);
    });
  }
  saveMissing(t, n, r, o, i, s = {}, l = () => {
  }) {
    var _a2, _b2, _c2, _d2, _e2;
    if (((_b2 = (_a2 = this.services) == null ? void 0 : _a2.utils) == null ? void 0 : _b2.hasLoadedNamespace) && !((_d2 = (_c2 = this.services) == null ? void 0 : _c2.utils) == null ? void 0 : _d2.hasLoadedNamespace(n))) {
      this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if ((_e2 = this.backend) == null ? void 0 : _e2.create) {
        const a = { ...s, isUpdate: i }, u = this.backend.create.bind(this.backend);
        if (u.length < 6) try {
          let c;
          u.length === 5 ? c = u(t, n, r, o, a) : c = u(t, n, r, o), c && typeof c.then == "function" ? c.then((d) => l(null, d)).catch(l) : l(null, c);
        } catch (c) {
          l(c);
        }
        else u(t, n, r, o, l, a);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, o);
    }
  }
}
const gc = () => ({ debug: false, initAsync: true, ns: ["translation"], defaultNS: ["translation"], fallbackLng: ["dev"], fallbackNS: false, supportedLngs: false, nonExplicitSupportedLngs: false, load: "all", preload: false, simplifyPluralSuffix: true, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: false, saveMissing: false, updateMissing: false, saveMissingTo: "fallback", saveMissingPlurals: true, missingKeyHandler: false, missingInterpolationHandler: false, postProcess: false, postProcessPassResolved: false, returnNull: false, returnEmptyString: true, returnObjects: false, joinArrays: false, returnedObjectHandler: false, parseMissingKeyHandler: false, appendNamespaceToMissingKey: false, appendNamespaceToCIMode: false, overloadTranslationOptionHandler: (e3) => {
  let t = {};
  if (typeof e3[1] == "object" && (t = e3[1]), ne(e3[1]) && (t.defaultValue = e3[1]), ne(e3[2]) && (t.tDescription = e3[2]), typeof e3[2] == "object" || typeof e3[3] == "object") {
    const n = e3[3] || e3[2];
    Object.keys(n).forEach((r) => {
      t[r] = n[r];
    });
  }
  return t;
}, interpolation: { escapeValue: true, format: (e3) => e3, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: true }, cacheInBuiltFormats: true }), hm = (e3) => {
  var _a2, _b2;
  return ne(e3.ns) && (e3.ns = [e3.ns]), ne(e3.fallbackLng) && (e3.fallbackLng = [e3.fallbackLng]), ne(e3.fallbackNS) && (e3.fallbackNS = [e3.fallbackNS]), ((_b2 = (_a2 = e3.supportedLngs) == null ? void 0 : _a2.indexOf) == null ? void 0 : _b2.call(_a2, "cimode")) < 0 && (e3.supportedLngs = e3.supportedLngs.concat(["cimode"])), typeof e3.initImmediate == "boolean" && (e3.initAsync = e3.initImmediate), e3;
}, cl = () => {
}, Xb = (e3) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e3)).forEach((n) => {
    typeof e3[n] == "function" && (e3[n] = e3[n].bind(e3));
  });
}, s0 = "__i18next_supportNoticeShown", Gb = () => !!(typeof globalThis < "u" && globalThis[s0] || typeof process < "u" && pc && pc.I18NEXT_NO_SUPPORT_NOTICE || typeof process < "u" && pc), Qb = () => {
  typeof globalThis < "u" && (globalThis[s0] = true);
}, qb = (e3) => {
  var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k2, _l2, _m2;
  return !!(((_c2 = (_b2 = (_a2 = e3 == null ? void 0 : e3.modules) == null ? void 0 : _a2.backend) == null ? void 0 : _b2.name) == null ? void 0 : _c2.indexOf("Locize")) > 0 || ((_g2 = (_f2 = (_e2 = (_d2 = e3 == null ? void 0 : e3.modules) == null ? void 0 : _d2.backend) == null ? void 0 : _e2.constructor) == null ? void 0 : _f2.name) == null ? void 0 : _g2.indexOf("Locize")) > 0 || ((_i2 = (_h2 = e3 == null ? void 0 : e3.options) == null ? void 0 : _h2.backend) == null ? void 0 : _i2.backends) && e3.options.backend.backends.some((t) => {
    var _a3, _b3, _c3;
    return ((_a3 = t == null ? void 0 : t.name) == null ? void 0 : _a3.indexOf("Locize")) > 0 || ((_c3 = (_b3 = t == null ? void 0 : t.constructor) == null ? void 0 : _b3.name) == null ? void 0 : _c3.indexOf("Locize")) > 0;
  }) || ((_k2 = (_j = e3 == null ? void 0 : e3.options) == null ? void 0 : _j.backend) == null ? void 0 : _k2.projectId) || ((_m2 = (_l2 = e3 == null ? void 0 : e3.options) == null ? void 0 : _l2.backend) == null ? void 0 : _m2.backendOptions) && e3.options.backend.backendOptions.some((t) => t == null ? void 0 : t.projectId));
};
class Ki extends Ha {
  constructor(t = {}, n) {
    if (super(), this.options = hm(t), this.services = {}, this.logger = zn, this.modules = { external: [] }, Xb(this), n && !this.isInitialized && !t.isClone) {
      if (!this.options.initAsync) return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init(t = {}, n) {
    this.isInitializing = true, typeof t == "function" && (n = t, t = {}), t.defaultNS == null && t.ns && (ne(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const r = gc();
    this.options = { ...r, ...this.options, ...hm(t) }, this.options.interpolation = { ...r.interpolation, ...this.options.interpolation }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = r.overloadTranslationOptionHandler), this.options.showSupportNotice !== false && !qb(this) && !Gb() && (typeof console < "u" && typeof console.info < "u" && console.info("\u{1F310} i18next is made possible by our own product, Locize \u2014 consider powering your project with managed localization (AI, CDN, integrations): https://locize.com \u{1F499}"), Qb());
    const o = (u) => u ? typeof u == "function" ? new u() : u : null;
    if (!this.options.isClone) {
      this.modules.logger ? zn.init(o(this.modules.logger), this.options) : zn.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : u = Hb;
      const c = new am(this.options);
      this.store = new sm(this.options.resources, this.options);
      const d = this.services;
      d.logger = zn, d.resourceStore = this.store, d.languageUtils = c, d.pluralResolver = new Wb(c, { prepend: this.options.pluralSeparator, simplifyPluralSuffix: this.options.simplifyPluralSuffix }), this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), u && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (d.formatter = o(u), d.formatter.init && d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new fm(this.options), d.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }, d.backendConnector = new Yb(o(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", (p, ...y) => {
        this.emit(p, ...y);
      }), this.modules.languageDetector && (d.languageDetector = o(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = o(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new pa(this.services, this.options), this.translator.on("*", (p, ...y) => {
        this.emit(p, ...y);
      }), this.modules.external.forEach((p) => {
        p.init && p.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = cl), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((u) => {
      this[u] = (...c) => this.store[u](...c);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((u) => {
      this[u] = (...c) => (this.store[u](...c), this);
    });
    const l = Si(), a = () => {
      const u = (c, d) => {
        this.isInitializing = false, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = true, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(d), n(c, d);
      };
      if (this.languages && !this.isInitialized) return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initAsync ? a() : setTimeout(a, 0), l;
  }
  loadResources(t, n = cl) {
    var _a2, _b2;
    let r = n;
    const o = ne(t) ? t : this.language;
    if (typeof t == "function" && (r = t), !this.options.resources || this.options.partialBundledLanguages) {
      if ((o == null ? void 0 : o.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
      const i = [], s = (l) => {
        if (!l || l === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(l).forEach((u) => {
          u !== "cimode" && i.indexOf(u) < 0 && i.push(u);
        });
      };
      o ? s(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((a) => s(a)), (_b2 = (_a2 = this.options.preload) == null ? void 0 : _a2.forEach) == null ? void 0 : _b2.call(_a2, (l) => s(l)), this.services.backendConnector.load(i, this.options.ns, (l) => {
        !l && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(l);
      });
    } else r(null);
  }
  reloadResources(t, n, r) {
    const o = Si();
    return typeof t == "function" && (r = t, t = void 0), typeof n == "function" && (r = n, n = void 0), t || (t = this.languages), n || (n = this.options.ns), r || (r = cl), this.services.backendConnector.reload(t, n, (i) => {
      o.resolve(), r(i);
    }), o;
  }
  use(t) {
    if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && o0.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1)) {
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(t) < 0 && this.store.hasLanguageSomeTranslations(t) && (this.resolvedLanguage = t, this.languages.unshift(t));
    }
  }
  changeLanguage(t, n) {
    this.isLanguageChangingTo = t;
    const r = Si();
    this.emit("languageChanging", t);
    const o = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, i = (l, a) => {
      a ? this.isLanguageChangingTo === t && (o(a), this.translator.changeLanguage(a), this.isLanguageChangingTo = void 0, this.emit("languageChanged", a), this.logger.log("languageChanged", a)) : this.isLanguageChangingTo = void 0, r.resolve((...u) => this.t(...u)), n && n(l, (...u) => this.t(...u));
    }, s = (l) => {
      var _a2, _b2;
      !t && !l && this.services.languageDetector && (l = []);
      const a = ne(l) ? l : l && l[0], u = this.store.hasLanguageSomeTranslations(a) ? a : this.services.languageUtils.getBestMatchFromCodes(ne(l) ? [l] : l);
      u && (this.language || o(u), this.translator.language || this.translator.changeLanguage(u), (_b2 = (_a2 = this.services.languageDetector) == null ? void 0 : _a2.cacheUserLanguage) == null ? void 0 : _b2.call(_a2, u)), this.loadResources(u, (c) => {
        i(c, u);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? s(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(s) : this.services.languageDetector.detect(s) : s(t), r;
  }
  getFixedT(t, n, r) {
    const o = (i, s, ...l) => {
      let a;
      typeof s != "object" ? a = this.options.overloadTranslationOptionHandler([i, s].concat(l)) : a = { ...s }, a.lng = a.lng || o.lng, a.lngs = a.lngs || o.lngs, a.ns = a.ns || o.ns, a.keyPrefix !== "" && (a.keyPrefix = a.keyPrefix || r || o.keyPrefix);
      const u = { ...this.options, ...a };
      typeof a.keyPrefix == "function" && (a.keyPrefix = No(a.keyPrefix, u));
      const c = this.options.keySeparator || ".";
      let d;
      return a.keyPrefix && Array.isArray(i) ? d = i.map((f) => (typeof f == "function" && (f = No(f, u)), `${a.keyPrefix}${c}${f}`)) : (typeof i == "function" && (i = No(i, u)), d = a.keyPrefix ? `${a.keyPrefix}${c}${i}` : i), this.t(d, a);
    };
    return ne(t) ? o.lng = t : o.lngs = t, o.ns = n, o.keyPrefix = r, o;
  }
  t(...t) {
    var _a2;
    return (_a2 = this.translator) == null ? void 0 : _a2.translate(...t);
  }
  exists(...t) {
    var _a2;
    return (_a2 = this.translator) == null ? void 0 : _a2.exists(...t);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t, n = {}) {
    if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), false;
    if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), false;
    const r = n.lng || this.resolvedLanguage || this.languages[0], o = this.options ? this.options.fallbackLng : false, i = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return true;
    const s = (l, a) => {
      const u = this.services.backendConnector.state[`${l}|${a}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (n.precheck) {
      const l = n.precheck(this, s);
      if (l !== void 0) return l;
    }
    return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(r, t) && (!o || s(i, t)));
  }
  loadNamespaces(t, n) {
    const r = Si();
    return this.options.ns ? (ne(t) && (t = [t]), t.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      r.resolve(), n && n(o);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Si();
    ne(t) && (t = [t]);
    const o = this.options.preload || [], i = t.filter((s) => o.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s));
    return i.length ? (this.options.preload = o.concat(i), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    var _a2, _b2;
    if (t || (t = this.resolvedLanguage || (((_a2 = this.languages) == null ? void 0 : _a2.length) > 0 ? this.languages[0] : this.language)), !t) return "rtl";
    try {
      const o = new Intl.Locale(t);
      if (o && o.getTextInfo) {
        const i = o.getTextInfo();
        if (i && i.direction) return i.direction;
      }
    } catch {
    }
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = ((_b2 = this.services) == null ? void 0 : _b2.languageUtils) || new am(gc());
    return t.toLowerCase().indexOf("-latn") > 1 ? "ltr" : n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(t = {}, n) {
    const r = new Ki(t, n);
    return r.createInstance = Ki.createInstance, r;
  }
  cloneInstance(t = {}, n = cl) {
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const o = { ...this.options, ...t, isClone: true }, i = new Ki(o);
    if ((t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)), ["store", "services", "language"].forEach((l) => {
      i[l] = this[l];
    }), i.services = { ...this.services }, i.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }, r) {
      const l = Object.keys(this.store.data).reduce((a, u) => (a[u] = { ...this.store.data[u] }, a[u] = Object.keys(a[u]).reduce((c, d) => (c[d] = { ...a[u][d] }, c), a[u]), a), {});
      i.store = new sm(l, o), i.services.resourceStore = i.store;
    }
    if (t.interpolation) {
      const a = { ...gc().interpolation, ...this.options.interpolation, ...t.interpolation }, u = { ...o, interpolation: a };
      i.services.interpolator = new fm(u);
    }
    return i.translator = new pa(i.services, o), i.translator.on("*", (l, ...a) => {
      i.emit(l, ...a);
    }), i.init(o, n), i.translator.options = o, i.translator.backendConnector.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }, i;
  }
  toJSON() {
    return { options: this.options, store: this.store, language: this.language, languages: this.languages, resolvedLanguage: this.resolvedLanguage };
  }
}
const Rt = Ki.createInstance();
Rt.createInstance;
Rt.dir;
Rt.init;
Rt.loadResources;
Rt.reloadResources;
Rt.use;
Rt.changeLanguage;
Rt.getFixedT;
Rt.t;
Rt.exists;
Rt.setDefaultNamespace;
Rt.hasLoadedNamespace;
Rt.loadNamespaces;
Rt.loadLanguages;
const Zb = "Cancel", Jb = "OK", ew = "Board", tw = { title: "New Board", width: "Width", height: "Height", depth: "Depth" }, nw = "Confirmation", rw = "Are you sure you want to reset the board? This action cannot be undone.", ow = { title: "Solver", noSolution: "No solution", cubic: "Cubic", layerwise: "Layerwise", firstAnswer: "First answer", prevAnswer: "Previous answer", nextAnswer: "Next answer", lastAnswer: "Last answer" }, iw = "Pieces", sw = "Edit Piece", lw = "Piece must not be empty", aw = "Piece count", uw = { planar: "Planar", cubic: "Cubic", layerwise: "Layerwise", layer: "Layer", addLayerBeginning: "Add layer at beginning (layer 0)", addLayerEnd: "Add layer at end", removeLayer: "Remove current layer" }, cw = "New Puzzle", dw = "Load sample puzzle", fw = "Add piece", pw = "Run Solver", hw = "Stop Solver", mw = { shapeEditor: { title: "Edit shapes (pieces, board)", planar: { title: "Planar", content1: "Left click: Toggle cell presence", content2: "Right drag: Move view area", content3: "Wheel: Zoom in/out" }, cubic: { title: "Cubic", content1: "Left click: Add cell", content2: "Ctrl + Left click: Remove cell", content3: "Right drag: Rotate", content4: "Wheel: Zoom in/out", content5: "Wheel drag: Move view area" } }, disclaimer: { title: "Disclaimer", content: "The author shall not be liable for any problem caused by using this tool." }, licenses: "Licenses", title: "Help", close: "Close" }, gw = { cancel: Zb, ok: Jb, board: ew, newBoard: tw, confirmation: nw, resetConfirmation: rw, solver: ow, pieces: iw, editPiece: sw, pieceEmpty: lw, pieceCount: aw, editor: uw, newPuzzle: cw, loadSample: dw, addPiece: fw, runSolver: pw, stopSolver: hw, help: mw }, vw = "\u30AD\u30E3\u30F3\u30BB\u30EB", yw = "OK", xw = "\u76E4\u9762", Sw = { title: "\u65B0\u3057\u3044\u76E4\u9762", width: "\u5E45", height: "\u9AD8\u3055", depth: "\u6DF1\u3055" }, bw = "\u78BA\u8A8D", ww = "\u76E4\u9762\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F\u3053\u306E\u64CD\u4F5C\u306F\u5143\u306B\u623B\u305B\u307E\u305B\u3093\u3002", Cw = { title: "\u30BD\u30EB\u30D0\u30FC", noSolution: "\u89E3\u304C\u3042\u308A\u307E\u305B\u3093", cubic: "\u7ACB\u4F53", layerwise: "\u5C64\u5225", firstAnswer: "\u6700\u521D\u306E\u89E3\u7B54", prevAnswer: "\u524D\u306E\u89E3\u7B54", nextAnswer: "\u6B21\u306E\u89E3\u7B54", lastAnswer: "\u6700\u5F8C\u306E\u89E3\u7B54" }, kw = "\u30D4\u30FC\u30B9", Ew = "\u30D4\u30FC\u30B9\u306E\u7DE8\u96C6", Pw = "\u30D4\u30FC\u30B9\u306F\u7A7A\u306B\u306F\u3067\u304D\u307E\u305B\u3093", Rw = "\u30D4\u30FC\u30B9\u306E\u500B\u6570", $w = { planar: "\u5E73\u9762", cubic: "\u7ACB\u4F53", layerwise: "\u5C64\u5225", layer: "\u5C64", addLayerBeginning: "\u6700\u521D\u306B\u5C64\u3092\u8FFD\u52A0\uFF08\u5C640\uFF09", addLayerEnd: "\u6700\u5F8C\u306B\u5C64\u3092\u8FFD\u52A0", removeLayer: "\u73FE\u5728\u306E\u5C64\u3092\u524A\u9664" }, Tw = "\u65B0\u898F\u4F5C\u6210", Ow = "\u30B5\u30F3\u30D7\u30EB\u3092\u8AAD\u307F\u8FBC\u3080", Mw = "\u30D4\u30FC\u30B9\u3092\u8FFD\u52A0", Lw = "\u30BD\u30EB\u30D0\u30FC\u3092\u5B9F\u884C", Nw = "\u505C\u6B62", _w = { shapeEditor: { title: "\u5F62\u72B6\uFF08\u30D4\u30FC\u30B9\u3001\u76E4\u9762\uFF09\u306E\u7DE8\u96C6", planar: { title: "\u5E73\u9762", content1: "\u5DE6\u30AF\u30EA\u30C3\u30AF: \u30BB\u30EB\u306E\u6709\u7121\u306E\u5207\u308A\u66FF\u3048", content2: "\u53F3\u30C9\u30E9\u30C3\u30B0: \u8868\u793A\u9818\u57DF\u306E\u79FB\u52D5", content3: "\u30DB\u30A4\u30FC\u30EB: \u30BA\u30FC\u30E0\u30A4\u30F3/\u30BA\u30FC\u30E0\u30A2\u30A6\u30C8" }, cubic: { title: "\u7ACB\u4F53", content1: "\u5DE6\u30AF\u30EA\u30C3\u30AF: \u30BB\u30EB\u306E\u8FFD\u52A0", content2: "Ctrl + \u5DE6\u30AF\u30EA\u30C3\u30AF: \u30BB\u30EB\u306E\u524A\u9664", content3: "\u53F3\u30C9\u30E9\u30C3\u30B0: \u56DE\u8EE2", content4: "\u30DB\u30A4\u30FC\u30EB: \u30BA\u30FC\u30E0\u30A4\u30F3/\u30BA\u30FC\u30E0\u30A2\u30A6\u30C8", content5: "\u30DB\u30A4\u30FC\u30EB\u30C9\u30E9\u30C3\u30B0: \u8868\u793A\u9818\u57DF\u306E\u79FB\u52D5" } }, disclaimer: { title: "\u514D\u8CAC\u4E8B\u9805", content: "\u3053\u306E\u30C4\u30FC\u30EB\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u751F\u3058\u305F\u3044\u304B\u306A\u308B\u554F\u984C\u306B\u3064\u3044\u3066\u3082\u3001\u4F5C\u8005\u306F\u8CAC\u4EFB\u3092\u8CA0\u308F\u306A\u3044\u3082\u306E\u3068\u3057\u307E\u3059\u3002" }, licenses: "\u30E9\u30A4\u30BB\u30F3\u30B9", title: "\u30D8\u30EB\u30D7", close: "\u9589\u3058\u308B" }, Iw = { cancel: vw, ok: yw, board: xw, newBoard: Sw, confirmation: bw, resetConfirmation: ww, solver: Cw, pieces: kw, editPiece: Ew, pieceEmpty: Pw, pieceCount: Rw, editor: $w, newPuzzle: Tw, loadSample: Ow, addPiece: Mw, runSolver: Lw, stopSolver: Nw, help: _w };
Rt.use(Eb).init({ resources: { en: { translation: gw }, ja: { translation: Iw } }, lng: "ja", fallbackLng: "en", interpolation: { escapeValue: false } });
const ys = { black: "#000", white: "#fff" }, oo = { 300: "#e57373", 400: "#ef5350", 500: "#f44336", 700: "#d32f2f", 800: "#c62828" }, io = { 50: "#f3e5f5", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 700: "#7b1fa2" }, so = { 50: "#e3f2fd", 200: "#90caf9", 400: "#42a5f5", 700: "#1976d2", 800: "#1565c0" }, lo = { 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 700: "#0288d1", 900: "#01579b" }, ao = { 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20" }, bi = { 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 700: "#f57c00", 900: "#e65100" }, jw = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121", A100: "#f5f5f5", A200: "#eeeeee", A400: "#bdbdbd", A700: "#616161" };
function Zr(e3) {
  let t = "https://mui.com/production-error/?code=" + e3;
  for (let n = 1; n < arguments.length; n += 1) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e3 + "; visit " + t + " for the full message.";
}
const zw = Object.freeze(Object.defineProperty({ __proto__: null, default: Zr }, Symbol.toStringTag, { value: "Module" })), Ka = "$$material";
function k() {
  return k = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e3[r] = n[r]);
    }
    return e3;
  }, k.apply(null, arguments);
}
function G(e3, t) {
  if (e3 == null) return {};
  var n = {};
  for (var r in e3) if ({}.hasOwnProperty.call(e3, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e3[r];
  }
  return n;
}
function Aw(e3) {
  if (e3.sheet) return e3.sheet;
  for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e3) return document.styleSheets[t];
}
function Dw(e3) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e3.key), e3.nonce !== void 0 && t.setAttribute("nonce", e3.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Fw = function() {
  function e3(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? true : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e3.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Dw(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Aw(o);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var o;
      return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e3;
}(), St = "-ms-", ha = "-moz-", Ce = "-webkit-", l0 = "comm", Yf = "rule", Xf = "decl", Bw = "@import", a0 = "@keyframes", Ww = "@layer", Uw = Math.abs, Ya = String.fromCharCode, Vw = Object.assign;
function Hw(e3, t) {
  return ht(e3, 0) ^ 45 ? (((t << 2 ^ ht(e3, 0)) << 2 ^ ht(e3, 1)) << 2 ^ ht(e3, 2)) << 2 ^ ht(e3, 3) : 0;
}
function u0(e3) {
  return e3.trim();
}
function Kw(e3, t) {
  return (e3 = t.exec(e3)) ? e3[0] : e3;
}
function ke(e3, t, n) {
  return e3.replace(t, n);
}
function Nd(e3, t) {
  return e3.indexOf(t);
}
function ht(e3, t) {
  return e3.charCodeAt(t) | 0;
}
function xs(e3, t, n) {
  return e3.slice(t, n);
}
function Ln(e3) {
  return e3.length;
}
function Gf(e3) {
  return e3.length;
}
function dl(e3, t) {
  return t.push(e3), e3;
}
function Yw(e3, t) {
  return e3.map(t).join("");
}
var Xa = 1, Ho = 1, c0 = 0, zt = 0, Ze = 0, ei = "";
function Ga(e3, t, n, r, o, i, s) {
  return { value: e3, root: t, parent: n, type: r, props: o, children: i, line: Xa, column: Ho, length: s, return: "" };
}
function wi(e3, t) {
  return Vw(Ga("", null, null, "", null, null, 0), e3, { length: -e3.length }, t);
}
function Xw() {
  return Ze;
}
function Gw() {
  return Ze = zt > 0 ? ht(ei, --zt) : 0, Ho--, Ze === 10 && (Ho = 1, Xa--), Ze;
}
function Kt() {
  return Ze = zt < c0 ? ht(ei, zt++) : 0, Ho++, Ze === 10 && (Ho = 1, Xa++), Ze;
}
function Bn() {
  return ht(ei, zt);
}
function Ll() {
  return zt;
}
function Ms(e3, t) {
  return xs(ei, e3, t);
}
function Ss(e3) {
  switch (e3) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function d0(e3) {
  return Xa = Ho = 1, c0 = Ln(ei = e3), zt = 0, [];
}
function f0(e3) {
  return ei = "", e3;
}
function Nl(e3) {
  return u0(Ms(zt - 1, _d(e3 === 91 ? e3 + 2 : e3 === 40 ? e3 + 1 : e3)));
}
function Qw(e3) {
  for (; (Ze = Bn()) && Ze < 33; ) Kt();
  return Ss(e3) > 2 || Ss(Ze) > 3 ? "" : " ";
}
function qw(e3, t) {
  for (; --t && Kt() && !(Ze < 48 || Ze > 102 || Ze > 57 && Ze < 65 || Ze > 70 && Ze < 97); ) ;
  return Ms(e3, Ll() + (t < 6 && Bn() == 32 && Kt() == 32));
}
function _d(e3) {
  for (; Kt(); ) switch (Ze) {
    case e3:
      return zt;
    case 34:
    case 39:
      e3 !== 34 && e3 !== 39 && _d(Ze);
      break;
    case 40:
      e3 === 41 && _d(e3);
      break;
    case 92:
      Kt();
      break;
  }
  return zt;
}
function Zw(e3, t) {
  for (; Kt() && e3 + Ze !== 57; ) if (e3 + Ze === 84 && Bn() === 47) break;
  return "/*" + Ms(t, zt - 1) + "*" + Ya(e3 === 47 ? e3 : Kt());
}
function Jw(e3) {
  for (; !Ss(Bn()); ) Kt();
  return Ms(e3, zt);
}
function eC(e3) {
  return f0(_l("", null, null, null, [""], e3 = d0(e3), 0, [0], e3));
}
function _l(e3, t, n, r, o, i, s, l, a) {
  for (var u = 0, c = 0, d = s, f = 0, p = 0, y = 0, v = 1, w = 1, h = 1, m = 0, g = "", x = o, C = i, E = r, P = g; w; ) switch (y = m, m = Kt()) {
    case 40:
      if (y != 108 && ht(P, d - 1) == 58) {
        Nd(P += ke(Nl(m), "&", "&\f"), "&\f") != -1 && (h = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      P += Nl(m);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      P += Qw(y);
      break;
    case 92:
      P += qw(Ll() - 1, 7);
      continue;
    case 47:
      switch (Bn()) {
        case 42:
        case 47:
          dl(tC(Zw(Kt(), Ll()), t, n), a);
          break;
        default:
          P += "/";
      }
      break;
    case 123 * v:
      l[u++] = Ln(P) * h;
    case 125 * v:
    case 59:
    case 0:
      switch (m) {
        case 0:
        case 125:
          w = 0;
        case 59 + c:
          h == -1 && (P = ke(P, /\f/g, "")), p > 0 && Ln(P) - d && dl(p > 32 ? gm(P + ";", r, n, d - 1) : gm(ke(P, " ", "") + ";", r, n, d - 2), a);
          break;
        case 59:
          P += ";";
        default:
          if (dl(E = mm(P, t, n, u, c, o, l, g, x = [], C = [], d), i), m === 123) if (c === 0) _l(P, t, E, E, x, i, d, l, C);
          else switch (f === 99 && ht(P, 3) === 110 ? 100 : f) {
            case 100:
            case 108:
            case 109:
            case 115:
              _l(e3, E, E, r && dl(mm(e3, E, E, 0, 0, o, l, g, o, x = [], d), C), o, C, d, l, r ? x : C);
              break;
            default:
              _l(P, E, E, E, [""], C, 0, l, C);
          }
      }
      u = c = p = 0, v = h = 1, g = P = "", d = s;
      break;
    case 58:
      d = 1 + Ln(P), p = y;
    default:
      if (v < 1) {
        if (m == 123) --v;
        else if (m == 125 && v++ == 0 && Gw() == 125) continue;
      }
      switch (P += Ya(m), m * v) {
        case 38:
          h = c > 0 ? 1 : (P += "\f", -1);
          break;
        case 44:
          l[u++] = (Ln(P) - 1) * h, h = 1;
          break;
        case 64:
          Bn() === 45 && (P += Nl(Kt())), f = Bn(), c = d = Ln(g = P += Jw(Ll())), m++;
          break;
        case 45:
          y === 45 && Ln(P) == 2 && (v = 0);
      }
  }
  return i;
}
function mm(e3, t, n, r, o, i, s, l, a, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = Gf(f), y = 0, v = 0, w = 0; y < r; ++y) for (var h = 0, m = xs(e3, d + 1, d = Uw(v = s[y])), g = e3; h < p; ++h) (g = u0(v > 0 ? f[h] + " " + m : ke(m, /&\f/g, f[h]))) && (a[w++] = g);
  return Ga(e3, t, n, o === 0 ? Yf : l, a, u, c);
}
function tC(e3, t, n) {
  return Ga(e3, t, n, l0, Ya(Xw()), xs(e3, 2, -2), 0);
}
function gm(e3, t, n, r) {
  return Ga(e3, t, n, Xf, xs(e3, 0, r), xs(e3, r + 1, -1), r);
}
function _o(e3, t) {
  for (var n = "", r = Gf(e3), o = 0; o < r; o++) n += t(e3[o], o, e3, t) || "";
  return n;
}
function nC(e3, t, n, r) {
  switch (e3.type) {
    case Ww:
      if (e3.children.length) break;
    case Bw:
    case Xf:
      return e3.return = e3.return || e3.value;
    case l0:
      return "";
    case a0:
      return e3.return = e3.value + "{" + _o(e3.children, r) + "}";
    case Yf:
      e3.value = e3.props.join(",");
  }
  return Ln(n = _o(e3.children, r)) ? e3.return = e3.value + "{" + n + "}" : "";
}
function rC(e3) {
  var t = Gf(e3);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++) s += e3[l](n, r, o, i) || "";
    return s;
  };
}
function oC(e3) {
  return function(t) {
    t.root || (t = t.return) && e3(t);
  };
}
function p0(e3) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e3(n)), t[n];
  };
}
var iC = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Bn(), o === 38 && i === 12 && (n[r] = 1), !Ss(i); ) Kt();
  return Ms(t, zt);
}, sC = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Ss(o)) {
      case 0:
        o === 38 && Bn() === 12 && (n[r] = 1), t[r] += iC(zt - 1, n, r);
        break;
      case 2:
        t[r] += Nl(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Bn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Ya(o);
    }
  while (o = Kt());
  return t;
}, lC = function(t, n) {
  return f0(sC(d0(t), n));
}, vm = /* @__PURE__ */ new WeakMap(), aC = function(t) {
  if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; ) if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !vm.get(r)) && !o) {
      vm.set(t, true);
      for (var i = [], s = lC(n, i), l = r.props, a = 0, u = 0; a < s.length; a++) for (var c = 0; c < l.length; c++, u++) t.props[u] = i[a] ? s[a].replace(/&\f/g, l[c]) : l[c] + " " + s[a];
    }
  }
}, uC = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function h0(e3, t) {
  switch (Hw(e3, t)) {
    case 5103:
      return Ce + "print-" + e3 + e3;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Ce + e3 + e3;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ce + e3 + ha + e3 + St + e3 + e3;
    case 6828:
    case 4268:
      return Ce + e3 + St + e3 + e3;
    case 6165:
      return Ce + e3 + St + "flex-" + e3 + e3;
    case 5187:
      return Ce + e3 + ke(e3, /(\w+).+(:[^]+)/, Ce + "box-$1$2" + St + "flex-$1$2") + e3;
    case 5443:
      return Ce + e3 + St + "flex-item-" + ke(e3, /flex-|-self/, "") + e3;
    case 4675:
      return Ce + e3 + St + "flex-line-pack" + ke(e3, /align-content|flex-|-self/, "") + e3;
    case 5548:
      return Ce + e3 + St + ke(e3, "shrink", "negative") + e3;
    case 5292:
      return Ce + e3 + St + ke(e3, "basis", "preferred-size") + e3;
    case 6060:
      return Ce + "box-" + ke(e3, "-grow", "") + Ce + e3 + St + ke(e3, "grow", "positive") + e3;
    case 4554:
      return Ce + ke(e3, /([^-])(transform)/g, "$1" + Ce + "$2") + e3;
    case 6187:
      return ke(ke(ke(e3, /(zoom-|grab)/, Ce + "$1"), /(image-set)/, Ce + "$1"), e3, "") + e3;
    case 5495:
    case 3959:
      return ke(e3, /(image-set\([^]*)/, Ce + "$1$`$1");
    case 4968:
      return ke(ke(e3, /(.+:)(flex-)?(.*)/, Ce + "box-pack:$3" + St + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ce + e3 + e3;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ke(e3, /(.+)-inline(.+)/, Ce + "$1$2") + e3;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ln(e3) - 1 - t > 6) switch (ht(e3, t + 1)) {
        case 109:
          if (ht(e3, t + 4) !== 45) break;
        case 102:
          return ke(e3, /(.+:)(.+)-([^]+)/, "$1" + Ce + "$2-$3$1" + ha + (ht(e3, t + 3) == 108 ? "$3" : "$2-$3")) + e3;
        case 115:
          return ~Nd(e3, "stretch") ? h0(ke(e3, "stretch", "fill-available"), t) + e3 : e3;
      }
      break;
    case 4949:
      if (ht(e3, t + 1) !== 115) break;
    case 6444:
      switch (ht(e3, Ln(e3) - 3 - (~Nd(e3, "!important") && 10))) {
        case 107:
          return ke(e3, ":", ":" + Ce) + e3;
        case 101:
          return ke(e3, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ce + (ht(e3, 14) === 45 ? "inline-" : "") + "box$3$1" + Ce + "$2$3$1" + St + "$2box$3") + e3;
      }
      break;
    case 5936:
      switch (ht(e3, t + 11)) {
        case 114:
          return Ce + e3 + St + ke(e3, /[svh]\w+-[tblr]{2}/, "tb") + e3;
        case 108:
          return Ce + e3 + St + ke(e3, /[svh]\w+-[tblr]{2}/, "tb-rl") + e3;
        case 45:
          return Ce + e3 + St + ke(e3, /[svh]\w+-[tblr]{2}/, "lr") + e3;
      }
      return Ce + e3 + St + e3 + e3;
  }
  return e3;
}
var cC = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Xf:
      t.return = h0(t.value, t.length);
      break;
    case a0:
      return _o([wi(t, { value: ke(t.value, "@", "@" + Ce) })], o);
    case Yf:
      if (t.length) return Yw(t.props, function(i) {
        switch (Kw(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return _o([wi(t, { props: [ke(i, /:(read-\w+)/, ":" + ha + "$1")] })], o);
          case "::placeholder":
            return _o([wi(t, { props: [ke(i, /:(plac\w+)/, ":" + Ce + "input-$1")] }), wi(t, { props: [ke(i, /:(plac\w+)/, ":" + ha + "$1")] }), wi(t, { props: [ke(i, /:(plac\w+)/, St + "input-$1")] })], o);
        }
        return "";
      });
  }
}, dC = [cC], m0 = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(v) {
      var w = v.getAttribute("data-emotion");
      w.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || dC, i = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function(v) {
    for (var w = v.getAttribute("data-emotion").split(" "), h = 1; h < w.length; h++) i[w[h]] = true;
    l.push(v);
  });
  var a, u = [aC, uC];
  {
    var c, d = [nC, oC(function(v) {
      c.insert(v);
    })], f = rC(u.concat(o, d)), p = function(w) {
      return _o(eC(w), f);
    };
    a = function(w, h, m, g) {
      c = m, p(w ? w + "{" + h.styles + "}" : h.styles), g && (y.inserted[h.name] = true);
    };
  }
  var y = { key: n, sheet: new Fw({ key: n, container: s, nonce: t.nonce, speedy: t.speedy, prepend: t.prepend, insertionPoint: t.insertionPoint }), nonce: t.nonce, inserted: i, registered: {}, insert: a };
  return y.sheet.hydrate(l), y;
}, g0 = { exports: {} }, $e = {};
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ut = typeof Symbol == "function" && Symbol.for, Qf = ut ? Symbol.for("react.element") : 60103, qf = ut ? Symbol.for("react.portal") : 60106, Qa = ut ? Symbol.for("react.fragment") : 60107, qa = ut ? Symbol.for("react.strict_mode") : 60108, Za = ut ? Symbol.for("react.profiler") : 60114, Ja = ut ? Symbol.for("react.provider") : 60109, eu = ut ? Symbol.for("react.context") : 60110, Zf = ut ? Symbol.for("react.async_mode") : 60111, tu = ut ? Symbol.for("react.concurrent_mode") : 60111, nu = ut ? Symbol.for("react.forward_ref") : 60112, ru = ut ? Symbol.for("react.suspense") : 60113, fC = ut ? Symbol.for("react.suspense_list") : 60120, ou = ut ? Symbol.for("react.memo") : 60115, iu = ut ? Symbol.for("react.lazy") : 60116, pC = ut ? Symbol.for("react.block") : 60121, hC = ut ? Symbol.for("react.fundamental") : 60117, mC = ut ? Symbol.for("react.responder") : 60118, gC = ut ? Symbol.for("react.scope") : 60119;
function Zt(e3) {
  if (typeof e3 == "object" && e3 !== null) {
    var t = e3.$$typeof;
    switch (t) {
      case Qf:
        switch (e3 = e3.type, e3) {
          case Zf:
          case tu:
          case Qa:
          case Za:
          case qa:
          case ru:
            return e3;
          default:
            switch (e3 = e3 && e3.$$typeof, e3) {
              case eu:
              case nu:
              case iu:
              case ou:
              case Ja:
                return e3;
              default:
                return t;
            }
        }
      case qf:
        return t;
    }
  }
}
function v0(e3) {
  return Zt(e3) === tu;
}
$e.AsyncMode = Zf;
$e.ConcurrentMode = tu;
$e.ContextConsumer = eu;
$e.ContextProvider = Ja;
$e.Element = Qf;
$e.ForwardRef = nu;
$e.Fragment = Qa;
$e.Lazy = iu;
$e.Memo = ou;
$e.Portal = qf;
$e.Profiler = Za;
$e.StrictMode = qa;
$e.Suspense = ru;
$e.isAsyncMode = function(e3) {
  return v0(e3) || Zt(e3) === Zf;
};
$e.isConcurrentMode = v0;
$e.isContextConsumer = function(e3) {
  return Zt(e3) === eu;
};
$e.isContextProvider = function(e3) {
  return Zt(e3) === Ja;
};
$e.isElement = function(e3) {
  return typeof e3 == "object" && e3 !== null && e3.$$typeof === Qf;
};
$e.isForwardRef = function(e3) {
  return Zt(e3) === nu;
};
$e.isFragment = function(e3) {
  return Zt(e3) === Qa;
};
$e.isLazy = function(e3) {
  return Zt(e3) === iu;
};
$e.isMemo = function(e3) {
  return Zt(e3) === ou;
};
$e.isPortal = function(e3) {
  return Zt(e3) === qf;
};
$e.isProfiler = function(e3) {
  return Zt(e3) === Za;
};
$e.isStrictMode = function(e3) {
  return Zt(e3) === qa;
};
$e.isSuspense = function(e3) {
  return Zt(e3) === ru;
};
$e.isValidElementType = function(e3) {
  return typeof e3 == "string" || typeof e3 == "function" || e3 === Qa || e3 === tu || e3 === Za || e3 === qa || e3 === ru || e3 === fC || typeof e3 == "object" && e3 !== null && (e3.$$typeof === iu || e3.$$typeof === ou || e3.$$typeof === Ja || e3.$$typeof === eu || e3.$$typeof === nu || e3.$$typeof === hC || e3.$$typeof === mC || e3.$$typeof === gC || e3.$$typeof === pC);
};
$e.typeOf = Zt;
g0.exports = $e;
var vC = g0.exports, y0 = vC, yC = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, xC = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, x0 = {};
x0[y0.ForwardRef] = yC;
x0[y0.Memo] = xC;
var SC = true;
function S0(e3, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e3[o] !== void 0 ? t.push(e3[o] + ";") : o && (r += o + " ");
  }), r;
}
var Jf = function(t, n, r) {
  var o = t.key + "-" + n.name;
  (r === false || SC === false) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, ep = function(t, n, r) {
  Jf(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, true), i = i.next;
    while (i !== void 0);
  }
};
function bC(e3) {
  for (var t = 0, n, r = 0, o = e3.length; o >= 4; ++r, o -= 4) n = e3.charCodeAt(r) & 255 | (e3.charCodeAt(++r) & 255) << 8 | (e3.charCodeAt(++r) & 255) << 16 | (e3.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e3.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e3.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e3.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var wC = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, CC = /[A-Z]|^ms/g, kC = /_EMO_([^_]+?)_([^]*?)_EMO_/g, b0 = function(t) {
  return t.charCodeAt(1) === 45;
}, ym = function(t) {
  return t != null && typeof t != "boolean";
}, vc = p0(function(e3) {
  return b0(e3) ? e3 : e3.replace(CC, "-$&").toLowerCase();
}), xm = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string") return n.replace(kC, function(r, o, i) {
        return Nn = { name: o, styles: i, next: Nn }, o;
      });
  }
  return wC[t] !== 1 && !b0(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function bs(e3, t, n) {
  if (n == null) return "";
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1) return Nn = { name: o.name, styles: o.styles, next: Nn }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0) for (; s !== void 0; ) Nn = { name: s.name, styles: s.styles, next: Nn }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return EC(e3, t, n);
    }
    case "function": {
      if (e3 !== void 0) {
        var a = Nn, u = n(e3);
        return Nn = a, bs(e3, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null) return c;
  var d = t[c];
  return d !== void 0 ? d : c;
}
function EC(e3, t, n) {
  var r = "";
  if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += bs(e3, t, n[o]) + ";";
  else for (var i in n) {
    var s = n[i];
    if (typeof s != "object") {
      var l = s;
      t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : ym(l) && (r += vc(i) + ":" + xm(i, l) + ";");
    } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0)) for (var a = 0; a < s.length; a++) ym(s[a]) && (r += vc(i) + ":" + xm(i, s[a]) + ";");
    else {
      var u = bs(e3, t, s);
      switch (i) {
        case "animation":
        case "animationName": {
          r += vc(i) + ":" + u + ";";
          break;
        }
        default:
          r += i + "{" + u + "}";
      }
    }
  }
  return r;
}
var Sm = /label:\s*([^\s;{]+)\s*(;|$)/g, Nn;
function Ls(e3, t, n) {
  if (e3.length === 1 && typeof e3[0] == "object" && e3[0] !== null && e3[0].styles !== void 0) return e3[0];
  var r = true, o = "";
  Nn = void 0;
  var i = e3[0];
  if (i == null || i.raw === void 0) r = false, o += bs(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e3.length; l++) if (o += bs(n, t, e3[l]), r) {
    var a = i;
    o += a[l];
  }
  Sm.lastIndex = 0;
  for (var u = "", c; (c = Sm.exec(o)) !== null; ) u += "-" + c[1];
  var d = bC(o) + u;
  return { name: d, styles: o, next: Nn };
}
var PC = function(t) {
  return t();
}, w0 = jc.useInsertionEffect ? jc.useInsertionEffect : false, C0 = w0 || PC, bm = w0 || S.useLayoutEffect, k0 = S.createContext(typeof HTMLElement < "u" ? m0({ key: "css" }) : null), RC = k0.Provider, tp = function(t) {
  return S.forwardRef(function(n, r) {
    var o = S.useContext(k0);
    return t(n, o, r);
  });
}, Ns = S.createContext({}), np = {}.hasOwnProperty, Id = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", $C = function(t, n) {
  var r = {};
  for (var o in n) np.call(n, o) && (r[o] = n[o]);
  return r[Id] = t, r;
}, TC = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Jf(n, r, o), C0(function() {
    return ep(n, r, o);
  }), null;
}, OC = tp(function(e3, t, n) {
  var r = e3.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e3[Id], i = [r], s = "";
  typeof e3.className == "string" ? s = S0(t.registered, i, e3.className) : e3.className != null && (s = e3.className + " ");
  var l = Ls(i, void 0, S.useContext(Ns));
  s += t.key + "-" + l.name;
  var a = {};
  for (var u in e3) np.call(e3, u) && u !== "css" && u !== Id && (a[u] = e3[u]);
  return a.className = s, n && (a.ref = n), S.createElement(S.Fragment, null, S.createElement(TC, { cache: t, serialized: l, isStringTag: typeof o == "string" }), S.createElement(o, a));
}), MC = OC, wm = function(t, n) {
  var r = arguments;
  if (n == null || !np.call(n, "css")) return S.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = MC, i[1] = $C(t, n);
  for (var s = 2; s < o; s++) i[s] = r[s];
  return S.createElement.apply(null, i);
};
(function(e3) {
  var t;
  t || (t = e3.JSX || (e3.JSX = {}));
})(wm || (wm = {}));
var LC = tp(function(e3, t) {
  var n = e3.styles, r = Ls([n], void 0, S.useContext(Ns)), o = S.useRef();
  return bm(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({ key: i, nonce: t.sheet.nonce, container: t.sheet.container, speedy: t.sheet.isSpeedy }), l = false, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = true, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), bm(function() {
    var i = o.current, s = i[0], l = i[1];
    if (l) {
      i[1] = false;
      return;
    }
    if (r.next !== void 0 && ep(t, r.next, true), s.tags.length) {
      var a = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = a, s.flush();
    }
    t.insert("", r, s, false);
  }, [t, r.name]), null;
});
function su() {
  for (var e3 = arguments.length, t = new Array(e3), n = 0; n < e3; n++) t[n] = arguments[n];
  return Ls(t);
}
function ti() {
  var e3 = su.apply(void 0, arguments), t = "animation-" + e3.name;
  return { name: t, styles: "@keyframes " + t + "{" + e3.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}
var NC = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, _C = p0(function(e3) {
  return NC.test(e3) || e3.charCodeAt(0) === 111 && e3.charCodeAt(1) === 110 && e3.charCodeAt(2) < 91;
}), IC = _C, jC = function(t) {
  return t !== "theme";
}, Cm = function(t) {
  return typeof t == "string" && t.charCodeAt(0) > 96 ? IC : jC;
}, km = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, zC = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Jf(n, r, o), C0(function() {
    return ep(n, r, o);
  }), null;
}, AC = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = km(t, n, r), a = l || Cm(o), u = !a("as");
  return function() {
    var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0) d.push.apply(d, c);
    else {
      var f = c[0];
      d.push(f[0]);
      for (var p = c.length, y = 1; y < p; y++) d.push(c[y], f[y]);
    }
    var v = tp(function(w, h, m) {
      var g = u && w.as || o, x = "", C = [], E = w;
      if (w.theme == null) {
        E = {};
        for (var P in w) E[P] = w[P];
        E.theme = S.useContext(Ns);
      }
      typeof w.className == "string" ? x = S0(h.registered, C, w.className) : w.className != null && (x = w.className + " ");
      var $ = Ls(d.concat(C), h.registered, E);
      x += h.key + "-" + $.name, s !== void 0 && (x += " " + s);
      var L = u && l === void 0 ? Cm(g) : a, T = {};
      for (var D in w) u && D === "as" || L(D) && (T[D] = w[D]);
      return T.className = x, m && (T.ref = m), S.createElement(S.Fragment, null, S.createElement(zC, { cache: h, serialized: $, isStringTag: typeof g == "string" }), S.createElement(g, T));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = d, v.__emotion_forwardProp = l, Object.defineProperty(v, "toString", { value: function() {
      return "." + s;
    } }), v.withComponent = function(w, h) {
      var m = e(w, k({}, n, h, { shouldForwardProp: km(v, h, true) }));
      return m.apply(void 0, d);
    }, v;
  };
}, DC = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], jd = AC.bind(null);
DC.forEach(function(e3) {
  jd[e3] = jd(e3);
});
function FC(e3, t) {
  const n = m0({ key: "css", prepend: e3 });
  if (t) {
    const r = n.insert;
    n.insert = (...o) => (o[1].styles.match(/^@layer\s+[^{]*$/) || (o[1].styles = `@layer mui {${o[1].styles}}`), r(...o));
  }
  return n;
}
const yc = /* @__PURE__ */ new Map();
function BC(e3) {
  const { injectFirst: t, enableCssLayer: n, children: r } = e3, o = S.useMemo(() => {
    const i = `${t}-${n}`;
    if (typeof document == "object" && yc.has(i)) return yc.get(i);
    const s = FC(t, n);
    return yc.set(i, s), s;
  }, [t, n]);
  return t || n ? b.jsx(RC, { value: o, children: r }) : r;
}
function WC(e3) {
  return e3 == null || Object.keys(e3).length === 0;
}
function E0(e3) {
  const { styles: t, defaultTheme: n = {} } = e3, r = typeof t == "function" ? (o) => t(WC(o) ? n : o) : t;
  return b.jsx(LC, { styles: r });
}
function rp(e3, t) {
  return jd(e3, t);
}
const P0 = (e3, t) => {
  Array.isArray(e3.__emotion_styles) && (e3.__emotion_styles = t(e3.__emotion_styles));
}, Em = [];
function ma(e3) {
  return Em[0] = e3, Ls(Em);
}
const UC = Object.freeze(Object.defineProperty({ __proto__: null, GlobalStyles: E0, StyledEngineProvider: BC, ThemeContext: Ns, css: su, default: rp, internal_processStyles: P0, internal_serializeStyles: ma, keyframes: ti }, Symbol.toStringTag, { value: "Module" }));
function Xn(e3) {
  if (typeof e3 != "object" || e3 === null) return false;
  const t = Object.getPrototypeOf(e3);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e3) && !(Symbol.iterator in e3);
}
function R0(e3) {
  if (S.isValidElement(e3) || !Xn(e3)) return e3;
  const t = {};
  return Object.keys(e3).forEach((n) => {
    t[n] = R0(e3[n]);
  }), t;
}
function Yt(e3, t, n = { clone: true }) {
  const r = n.clone ? k({}, e3) : e3;
  return Xn(e3) && Xn(t) && Object.keys(t).forEach((o) => {
    S.isValidElement(t[o]) ? r[o] = t[o] : Xn(t[o]) && Object.prototype.hasOwnProperty.call(e3, o) && Xn(e3[o]) ? r[o] = Yt(e3[o], t[o], n) : n.clone ? r[o] = Xn(t[o]) ? R0(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const VC = Object.freeze(Object.defineProperty({ __proto__: null, default: Yt, isPlainObject: Xn }, Symbol.toStringTag, { value: "Module" })), HC = ["values", "unit", "step"], KC = (e3) => {
  const t = Object.keys(e3).map((n) => ({ key: n, val: e3[n] })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => k({}, n, { [r.key]: r.val }), {});
};
function $0(e3) {
  const { values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: n = "px", step: r = 5 } = e3, o = G(e3, HC), i = KC(t), s = Object.keys(i);
  function l(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function a(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${n})`;
  }
  function u(f, p) {
    const y = s.indexOf(p);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(y !== -1 && typeof t[s[y]] == "number" ? t[s[y]] : p) - r / 100}${n})`;
  }
  function c(f) {
    return s.indexOf(f) + 1 < s.length ? u(f, s[s.indexOf(f) + 1]) : l(f);
  }
  function d(f) {
    const p = s.indexOf(f);
    return p === 0 ? l(s[1]) : p === s.length - 1 ? a(s[p]) : u(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return k({ keys: s, values: i, up: l, down: a, between: u, only: c, not: d, unit: n }, o);
}
const YC = { borderRadius: 4 };
function Yi(e3, t) {
  return t ? Yt(e3, t, { clone: false }) : e3;
}
const op = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, Pm = { keys: ["xs", "sm", "md", "lg", "xl"], up: (e3) => `@media (min-width:${op[e3]}px)` };
function dn(e3, t, n) {
  const r = e3.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Pm;
    return t.reduce((s, l, a) => (s[i.up(i.keys[a])] = n(t[a]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Pm;
    return Object.keys(t).reduce((s, l) => {
      if (Object.keys(i.values || op).indexOf(l) !== -1) {
        const a = i.up(l);
        s[a] = n(t[l], l);
      } else {
        const a = l;
        s[a] = t[a];
      }
      return s;
    }, {});
  }
  return n(t);
}
function XC(e3 = {}) {
  var t;
  return ((t = e3.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e3.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function Rm(e3, t) {
  return e3.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function GC(e3, t) {
  if (typeof e3 != "object") return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e3) ? r.forEach((o, i) => {
    i < e3.length && (n[o] = true);
  }) : r.forEach((o) => {
    e3[o] != null && (n[o] = true);
  }), n;
}
function lu({ values: e3, breakpoints: t, base: n }) {
  const r = n || GC(e3, t), o = Object.keys(r);
  if (o.length === 0) return e3;
  let i;
  return o.reduce((s, l, a) => (Array.isArray(e3) ? (s[l] = e3[a] != null ? e3[a] : e3[i], i = a) : typeof e3 == "object" ? (s[l] = e3[l] != null ? e3[l] : e3[i], i = l) : s[l] = e3, s), {});
}
function Z(e3) {
  if (typeof e3 != "string") throw new Error(Zr(7));
  return e3.charAt(0).toUpperCase() + e3.slice(1);
}
const QC = Object.freeze(Object.defineProperty({ __proto__: null, default: Z }, Symbol.toStringTag, { value: "Module" }));
function au(e3, t, n = true) {
  if (!t || typeof t != "string") return null;
  if (e3 && e3.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e3);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e3);
}
function ga(e3, t, n, r = n) {
  let o;
  return typeof e3 == "function" ? o = e3(n) : Array.isArray(e3) ? o = e3[n] || r : o = au(e3, n) || r, t && (o = t(o, r, e3)), o;
}
function Ge(e3) {
  const { prop: t, cssProperty: n = e3.prop, themeKey: r, transform: o } = e3, i = (s) => {
    if (s[t] == null) return null;
    const l = s[t], a = s.theme, u = au(a, r) || {};
    return dn(s, l, (d) => {
      let f = ga(u, o, d);
      return d === f && typeof d == "string" && (f = ga(u, o, `${t}${d === "default" ? "" : Z(d)}`, d)), n === false ? f : { [n]: f };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function qC(e3) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e3(n)), t[n]);
}
const ZC = { m: "margin", p: "padding" }, JC = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] }, $m = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" }, ek = qC((e3) => {
  if (e3.length > 2) if ($m[e3]) e3 = $m[e3];
  else return [e3];
  const [t, n] = e3.split(""), r = ZC[t], o = JC[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), ip = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], sp = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...ip, ...sp];
function _s(e3, t, n, r) {
  var o;
  const i = (o = au(e3, t, false)) != null ? o : n;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : i * s : Array.isArray(i) ? (s) => typeof s == "string" ? s : i[s] : typeof i == "function" ? i : () => {
  };
}
function T0(e3) {
  return _s(e3, "spacing", 8);
}
function Is(e3, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t), r = e3(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function tk(e3, t) {
  return (n) => e3.reduce((r, o) => (r[o] = Is(t, n), r), {});
}
function nk(e3, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = ek(n), i = tk(o, r), s = e3[n];
  return dn(e3, s, i);
}
function O0(e3, t) {
  const n = T0(e3.theme);
  return Object.keys(e3).map((r) => nk(e3, t, r, n)).reduce(Yi, {});
}
function He(e3) {
  return O0(e3, ip);
}
He.propTypes = {};
He.filterProps = ip;
function Ke(e3) {
  return O0(e3, sp);
}
Ke.propTypes = {};
Ke.filterProps = sp;
function rk(e3 = 8) {
  if (e3.mui) return e3;
  const t = T0({ spacing: e3 }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return n.mui = true, n;
}
function uu(...e3) {
  const t = e3.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? Yi(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e3.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function on(e3) {
  return typeof e3 != "number" ? e3 : `${e3}px solid`;
}
function gn(e3, t) {
  return Ge({ prop: e3, themeKey: "borders", transform: t });
}
const ok = gn("border", on), ik = gn("borderTop", on), sk = gn("borderRight", on), lk = gn("borderBottom", on), ak = gn("borderLeft", on), uk = gn("borderColor"), ck = gn("borderTopColor"), dk = gn("borderRightColor"), fk = gn("borderBottomColor"), pk = gn("borderLeftColor"), hk = gn("outline", on), mk = gn("outlineColor"), cu = (e3) => {
  if (e3.borderRadius !== void 0 && e3.borderRadius !== null) {
    const t = _s(e3.theme, "shape.borderRadius", 4), n = (r) => ({ borderRadius: Is(t, r) });
    return dn(e3, e3.borderRadius, n);
  }
  return null;
};
cu.propTypes = {};
cu.filterProps = ["borderRadius"];
uu(ok, ik, sk, lk, ak, uk, ck, dk, fk, pk, cu, hk, mk);
const du = (e3) => {
  if (e3.gap !== void 0 && e3.gap !== null) {
    const t = _s(e3.theme, "spacing", 8), n = (r) => ({ gap: Is(t, r) });
    return dn(e3, e3.gap, n);
  }
  return null;
};
du.propTypes = {};
du.filterProps = ["gap"];
const fu = (e3) => {
  if (e3.columnGap !== void 0 && e3.columnGap !== null) {
    const t = _s(e3.theme, "spacing", 8), n = (r) => ({ columnGap: Is(t, r) });
    return dn(e3, e3.columnGap, n);
  }
  return null;
};
fu.propTypes = {};
fu.filterProps = ["columnGap"];
const pu = (e3) => {
  if (e3.rowGap !== void 0 && e3.rowGap !== null) {
    const t = _s(e3.theme, "spacing", 8), n = (r) => ({ rowGap: Is(t, r) });
    return dn(e3, e3.rowGap, n);
  }
  return null;
};
pu.propTypes = {};
pu.filterProps = ["rowGap"];
const gk = Ge({ prop: "gridColumn" }), vk = Ge({ prop: "gridRow" }), yk = Ge({ prop: "gridAutoFlow" }), xk = Ge({ prop: "gridAutoColumns" }), Sk = Ge({ prop: "gridAutoRows" }), bk = Ge({ prop: "gridTemplateColumns" }), wk = Ge({ prop: "gridTemplateRows" }), Ck = Ge({ prop: "gridTemplateAreas" }), kk = Ge({ prop: "gridArea" });
uu(du, fu, pu, gk, vk, yk, xk, Sk, bk, wk, Ck, kk);
function Io(e3, t) {
  return t === "grey" ? t : e3;
}
const Ek = Ge({ prop: "color", themeKey: "palette", transform: Io }), Pk = Ge({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: Io }), Rk = Ge({ prop: "backgroundColor", themeKey: "palette", transform: Io });
uu(Ek, Pk, Rk);
function Bt(e3) {
  return e3 <= 1 && e3 !== 0 ? `${e3 * 100}%` : e3;
}
const $k = Ge({ prop: "width", transform: Bt }), lp = (e3) => {
  if (e3.maxWidth !== void 0 && e3.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e3.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || op[n];
      return i ? ((o = e3.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? { maxWidth: `${i}${e3.theme.breakpoints.unit}` } : { maxWidth: i } : { maxWidth: Bt(n) };
    };
    return dn(e3, e3.maxWidth, t);
  }
  return null;
};
lp.filterProps = ["maxWidth"];
const Tk = Ge({ prop: "minWidth", transform: Bt }), Ok = Ge({ prop: "height", transform: Bt }), Mk = Ge({ prop: "maxHeight", transform: Bt }), Lk = Ge({ prop: "minHeight", transform: Bt });
Ge({ prop: "size", cssProperty: "width", transform: Bt });
Ge({ prop: "size", cssProperty: "height", transform: Bt });
const Nk = Ge({ prop: "boxSizing" });
uu($k, lp, Tk, Ok, Mk, Lk, Nk);
const js = { border: { themeKey: "borders", transform: on }, borderTop: { themeKey: "borders", transform: on }, borderRight: { themeKey: "borders", transform: on }, borderBottom: { themeKey: "borders", transform: on }, borderLeft: { themeKey: "borders", transform: on }, borderColor: { themeKey: "palette" }, borderTopColor: { themeKey: "palette" }, borderRightColor: { themeKey: "palette" }, borderBottomColor: { themeKey: "palette" }, borderLeftColor: { themeKey: "palette" }, outline: { themeKey: "borders", transform: on }, outlineColor: { themeKey: "palette" }, borderRadius: { themeKey: "shape.borderRadius", style: cu }, color: { themeKey: "palette", transform: Io }, bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: Io }, backgroundColor: { themeKey: "palette", transform: Io }, p: { style: Ke }, pt: { style: Ke }, pr: { style: Ke }, pb: { style: Ke }, pl: { style: Ke }, px: { style: Ke }, py: { style: Ke }, padding: { style: Ke }, paddingTop: { style: Ke }, paddingRight: { style: Ke }, paddingBottom: { style: Ke }, paddingLeft: { style: Ke }, paddingX: { style: Ke }, paddingY: { style: Ke }, paddingInline: { style: Ke }, paddingInlineStart: { style: Ke }, paddingInlineEnd: { style: Ke }, paddingBlock: { style: Ke }, paddingBlockStart: { style: Ke }, paddingBlockEnd: { style: Ke }, m: { style: He }, mt: { style: He }, mr: { style: He }, mb: { style: He }, ml: { style: He }, mx: { style: He }, my: { style: He }, margin: { style: He }, marginTop: { style: He }, marginRight: { style: He }, marginBottom: { style: He }, marginLeft: { style: He }, marginX: { style: He }, marginY: { style: He }, marginInline: { style: He }, marginInlineStart: { style: He }, marginInlineEnd: { style: He }, marginBlock: { style: He }, marginBlockStart: { style: He }, marginBlockEnd: { style: He }, displayPrint: { cssProperty: false, transform: (e3) => ({ "@media print": { display: e3 } }) }, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: { style: du }, rowGap: { style: pu }, columnGap: { style: fu }, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: { themeKey: "zIndex" }, top: {}, right: {}, bottom: {}, left: {}, boxShadow: { themeKey: "shadows" }, width: { transform: Bt }, maxWidth: { style: lp }, minWidth: { transform: Bt }, height: { transform: Bt }, maxHeight: { transform: Bt }, minHeight: { transform: Bt }, boxSizing: {}, fontFamily: { themeKey: "typography" }, fontSize: { themeKey: "typography" }, fontStyle: { themeKey: "typography" }, fontWeight: { themeKey: "typography" }, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: { cssProperty: false, themeKey: "typography" } };
function _k(...e3) {
  const t = e3.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e3.every((r) => n.size === Object.keys(r).length);
}
function Ik(e3, t) {
  return typeof e3 == "function" ? e3(t) : e3;
}
function M0() {
  function e3(n, r, o, i) {
    const s = { [n]: r, theme: o }, l = i[n];
    if (!l) return { [n]: r };
    const { cssProperty: a = n, themeKey: u, transform: c, style: d } = l;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const f = au(o, u) || {};
    return d ? d(s) : dn(s, r, (y) => {
      let v = ga(f, c, y);
      return y === v && typeof y == "string" && (v = ga(f, c, `${n}${y === "default" ? "" : Z(y)}`, y)), a === false ? v : { [a]: v };
    });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {}, nested: s } = n || {};
    if (!o) return null;
    const l = (r = i.unstable_sxConfig) != null ? r : js;
    function a(u) {
      let c = u;
      if (typeof u == "function") c = u(i);
      else if (typeof u != "object") return u;
      if (!c) return null;
      const d = XC(i.breakpoints), f = Object.keys(d);
      let p = d;
      return Object.keys(c).forEach((y) => {
        const v = Ik(c[y], i);
        if (v != null) if (typeof v == "object") if (l[y]) p = Yi(p, e3(y, v, i, l));
        else {
          const w = dn({ theme: i }, v, (h) => ({ [y]: h }));
          _k(w, v) ? p[y] = t({ sx: v, theme: i, nested: true }) : p = Yi(p, w);
        }
        else p = Yi(p, e3(y, v, i, l));
      }), !s && i.modularCssLayers ? { "@layer sx": Rm(f, p) } : Rm(f, p);
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const ni = M0();
ni.filterProps = ["sx"];
function L0(e3, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? { [n.getColorSchemeSelector(e3).replace(/(\[[^\]]+\])/, "*:where($1)")]: t } : n.palette.mode === e3 ? t : {};
}
const jk = ["breakpoints", "palette", "spacing", "shape"];
function zs(e3 = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e3, s = G(e3, jk), l = $0(n), a = rk(o);
  let u = Yt({ breakpoints: l, direction: "ltr", components: {}, palette: k({ mode: "light" }, r), spacing: a, shape: k({}, YC, i) }, s);
  return u.applyStyles = L0, u = t.reduce((c, d) => Yt(c, d), u), u.unstable_sxConfig = k({}, js, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(d) {
    return ni({ sx: d, theme: this });
  }, u;
}
const zk = Object.freeze(Object.defineProperty({ __proto__: null, default: zs, private_createBreakpoints: $0, unstable_applyStyles: L0 }, Symbol.toStringTag, { value: "Module" }));
function Ak(e3) {
  return Object.keys(e3).length === 0;
}
function Dk(e3 = null) {
  const t = S.useContext(Ns);
  return !t || Ak(t) ? e3 : t;
}
const Fk = zs();
function hu(e3 = Fk) {
  return Dk(e3);
}
function xc(e3) {
  const t = ma(e3);
  return e3 !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e3;
}
function Bk({ styles: e3, themeId: t, defaultTheme: n = {} }) {
  const r = hu(n), o = t && r[t] || r;
  let i = typeof e3 == "function" ? e3(o) : e3;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => xc(typeof s == "function" ? s(o) : s)) : i = xc(i)), b.jsx(E0, { styles: i });
}
const Wk = ["sx"], Uk = (e3) => {
  var t, n;
  const r = { systemProps: {}, otherProps: {} }, o = (t = e3 == null || (n = e3.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : js;
  return Object.keys(e3).forEach((i) => {
    o[i] ? r.systemProps[i] = e3[i] : r.otherProps[i] = e3[i];
  }), r;
};
function mu(e3) {
  const { sx: t } = e3, n = G(e3, Wk), { systemProps: r, otherProps: o } = Uk(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...s) => {
    const l = t(...s);
    return Xn(l) ? k({}, r, l) : r;
  } : i = k({}, r, t), k({}, o, { sx: i });
}
const Vk = Object.freeze(Object.defineProperty({ __proto__: null, default: ni, extendSxProp: mu, unstable_createStyleFunctionSx: M0, unstable_defaultSxConfig: js }, Symbol.toStringTag, { value: "Module" })), Tm = (e3) => e3, Hk = () => {
  let e3 = Tm;
  return { configure(t) {
    e3 = t;
  }, generate(t) {
    return e3(t);
  }, reset() {
    e3 = Tm;
  } };
}, ap = Hk();
function N0(e3) {
  var t, n, r = "";
  if (typeof e3 == "string" || typeof e3 == "number") r += e3;
  else if (typeof e3 == "object") if (Array.isArray(e3)) {
    var o = e3.length;
    for (t = 0; t < o; t++) e3[t] && (n = N0(e3[t])) && (r && (r += " "), r += n);
  } else for (n in e3) e3[n] && (r && (r += " "), r += n);
  return r;
}
function q() {
  for (var e3, t, n = 0, r = "", o = arguments.length; n < o; n++) (e3 = arguments[n]) && (t = N0(e3)) && (r && (r += " "), r += t);
  return r;
}
const Kk = ["className", "component"];
function Yk(e3 = {}) {
  const { themeId: t, defaultTheme: n, defaultClassName: r = "MuiBox-root", generateClassName: o } = e3, i = rp("div", { shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as" })(ni);
  return S.forwardRef(function(a, u) {
    const c = hu(n), d = mu(a), { className: f, component: p = "div" } = d, y = G(d, Kk);
    return b.jsx(i, k({ as: p, ref: u, className: q(f, o ? o(r) : r), theme: t && c[t] || c }, y));
  });
}
const Xk = { active: "active", checked: "checked", completed: "completed", disabled: "disabled", error: "error", expanded: "expanded", focused: "focused", focusVisible: "focusVisible", open: "open", readOnly: "readOnly", required: "required", selected: "selected" };
function ue(e3, t, n = "Mui") {
  const r = Xk[t];
  return r ? `${n}-${r}` : `${ap.generate(e3)}-${t}`;
}
function se(e3, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = ue(e3, o, n);
  }), r;
}
var _0 = { exports: {} }, Me = {};
/**
* @license React
* react-is.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var up = Symbol.for("react.transitional.element"), cp = Symbol.for("react.portal"), gu = Symbol.for("react.fragment"), vu = Symbol.for("react.strict_mode"), yu = Symbol.for("react.profiler"), xu = Symbol.for("react.consumer"), Su = Symbol.for("react.context"), bu = Symbol.for("react.forward_ref"), wu = Symbol.for("react.suspense"), Cu = Symbol.for("react.suspense_list"), ku = Symbol.for("react.memo"), Eu = Symbol.for("react.lazy"), Gk = Symbol.for("react.view_transition"), Qk = Symbol.for("react.client.reference");
function vn(e3) {
  if (typeof e3 == "object" && e3 !== null) {
    var t = e3.$$typeof;
    switch (t) {
      case up:
        switch (e3 = e3.type, e3) {
          case gu:
          case yu:
          case vu:
          case wu:
          case Cu:
          case Gk:
            return e3;
          default:
            switch (e3 = e3 && e3.$$typeof, e3) {
              case Su:
              case bu:
              case Eu:
              case ku:
                return e3;
              case xu:
                return e3;
              default:
                return t;
            }
        }
      case cp:
        return t;
    }
  }
}
Me.ContextConsumer = xu;
Me.ContextProvider = Su;
Me.Element = up;
Me.ForwardRef = bu;
Me.Fragment = gu;
Me.Lazy = Eu;
Me.Memo = ku;
Me.Portal = cp;
Me.Profiler = yu;
Me.StrictMode = vu;
Me.Suspense = wu;
Me.SuspenseList = Cu;
Me.isContextConsumer = function(e3) {
  return vn(e3) === xu;
};
Me.isContextProvider = function(e3) {
  return vn(e3) === Su;
};
Me.isElement = function(e3) {
  return typeof e3 == "object" && e3 !== null && e3.$$typeof === up;
};
Me.isForwardRef = function(e3) {
  return vn(e3) === bu;
};
Me.isFragment = function(e3) {
  return vn(e3) === gu;
};
Me.isLazy = function(e3) {
  return vn(e3) === Eu;
};
Me.isMemo = function(e3) {
  return vn(e3) === ku;
};
Me.isPortal = function(e3) {
  return vn(e3) === cp;
};
Me.isProfiler = function(e3) {
  return vn(e3) === yu;
};
Me.isStrictMode = function(e3) {
  return vn(e3) === vu;
};
Me.isSuspense = function(e3) {
  return vn(e3) === wu;
};
Me.isSuspenseList = function(e3) {
  return vn(e3) === Cu;
};
Me.isValidElementType = function(e3) {
  return typeof e3 == "string" || typeof e3 == "function" || e3 === gu || e3 === yu || e3 === vu || e3 === wu || e3 === Cu || typeof e3 == "object" && e3 !== null && (e3.$$typeof === Eu || e3.$$typeof === ku || e3.$$typeof === Su || e3.$$typeof === xu || e3.$$typeof === bu || e3.$$typeof === Qk || e3.getModuleId !== void 0);
};
Me.typeOf = vn;
_0.exports = Me;
var Om = _0.exports;
const qk = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function I0(e3) {
  const t = `${e3}`.match(qk);
  return t && t[1] || "";
}
function j0(e3, t = "") {
  return e3.displayName || e3.name || I0(e3) || t;
}
function Mm(e3, t, n) {
  const r = j0(t);
  return e3.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Zk(e3) {
  if (e3 != null) {
    if (typeof e3 == "string") return e3;
    if (typeof e3 == "function") return j0(e3, "Component");
    if (typeof e3 == "object") switch (e3.$$typeof) {
      case Om.ForwardRef:
        return Mm(e3, e3.render, "ForwardRef");
      case Om.Memo:
        return Mm(e3, e3.type, "memo");
      default:
        return;
    }
  }
}
const Jk = Object.freeze(Object.defineProperty({ __proto__: null, default: Zk, getFunctionName: I0 }, Symbol.toStringTag, { value: "Module" })), eE = ["ownerState"], tE = ["variants"], nE = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function rE(e3) {
  return Object.keys(e3).length === 0;
}
function oE(e3) {
  return typeof e3 == "string" && e3.charCodeAt(0) > 96;
}
function Sc(e3) {
  return e3 !== "ownerState" && e3 !== "theme" && e3 !== "sx" && e3 !== "as";
}
function Lm(e3, t) {
  return t && e3 && typeof e3 == "object" && e3.styles && !e3.styles.startsWith("@layer") && (e3.styles = `@layer ${t}{${String(e3.styles)}}`), e3;
}
const iE = zs(), sE = (e3) => e3 && e3.charAt(0).toLowerCase() + e3.slice(1);
function fl({ defaultTheme: e3, theme: t, themeId: n }) {
  return rE(t) ? e3 : t[n] || t;
}
function lE(e3) {
  return e3 ? (t, n) => n[e3] : null;
}
function Il(e3, t, n) {
  let { ownerState: r } = t, o = G(t, eE);
  const i = typeof e3 == "function" ? e3(k({ ownerState: r }, o)) : e3;
  if (Array.isArray(i)) return i.flatMap((s) => Il(s, k({ ownerState: r }, o), n));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const { variants: s = [] } = i;
    let a = G(i, tE);
    return s.forEach((u) => {
      let c = true;
      if (typeof u.props == "function" ? c = u.props(k({ ownerState: r }, o, r)) : Object.keys(u.props).forEach((d) => {
        (r == null ? void 0 : r[d]) !== u.props[d] && o[d] !== u.props[d] && (c = false);
      }), c) {
        Array.isArray(a) || (a = [a]);
        const d = typeof u.style == "function" ? u.style(k({ ownerState: r }, o, r)) : u.style;
        a.push(n ? Lm(ma(d), n) : d);
      }
    }), a;
  }
  return n ? Lm(ma(i), n) : i;
}
function aE(e3 = {}) {
  const { themeId: t, defaultTheme: n = iE, rootShouldForwardProp: r = Sc, slotShouldForwardProp: o = Sc } = e3, i = (s) => ni(k({}, s, { theme: fl(k({}, s, { defaultTheme: n, themeId: t })) }));
  return i.__mui_systemSx = true, (s, l = {}) => {
    P0(s, (E) => E.filter((P) => !(P != null && P.__mui_systemSx)));
    const { name: a, slot: u, skipVariantsResolver: c, skipSx: d, overridesResolver: f = lE(sE(u)) } = l, p = G(l, nE), y = a && a.startsWith("Mui") || u ? "components" : "custom", v = c !== void 0 ? c : u && u !== "Root" && u !== "root" || false, w = d || false;
    let h, m = Sc;
    u === "Root" || u === "root" ? m = r : u ? m = o : oE(s) && (m = void 0);
    const g = rp(s, k({ shouldForwardProp: m, label: h }, p)), x = (E) => typeof E == "function" && E.__emotion_real !== E || Xn(E) ? (P) => {
      const $ = fl({ theme: P.theme, defaultTheme: n, themeId: t });
      return Il(E, k({}, P, { theme: $ }), $.modularCssLayers ? y : void 0);
    } : E, C = (E, ...P) => {
      let $ = x(E);
      const L = P ? P.map(x) : [];
      a && f && L.push((z) => {
        const M = fl(k({}, z, { defaultTheme: n, themeId: t }));
        if (!M.components || !M.components[a] || !M.components[a].styleOverrides) return null;
        const I = M.components[a].styleOverrides, A = {};
        return Object.entries(I).forEach(([j, O]) => {
          A[j] = Il(O, k({}, z, { theme: M }), M.modularCssLayers ? "theme" : void 0);
        }), f(z, A);
      }), a && !v && L.push((z) => {
        var M;
        const I = fl(k({}, z, { defaultTheme: n, themeId: t })), A = I == null || (M = I.components) == null || (M = M[a]) == null ? void 0 : M.variants;
        return Il({ variants: A }, k({}, z, { theme: I }), I.modularCssLayers ? "theme" : void 0);
      }), w || L.push(i);
      const T = L.length - P.length;
      if (Array.isArray(E) && T > 0) {
        const z = new Array(T).fill("");
        $ = [...E, ...z], $.raw = [...E.raw, ...z];
      }
      const D = g($, ...L);
      return s.muiName && (D.muiName = s.muiName), D;
    };
    return g.withConfig && (C.withConfig = g.withConfig), C;
  };
}
const uE = aE();
function ws(e3, t) {
  const n = k({}, t);
  return Object.keys(e3).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/)) n[r] = k({}, e3[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e3[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = k({}, i), Object.keys(o).forEach((s) => {
        n[r][s] = ws(o[s], i[s]);
      }));
    } else n[r] === void 0 && (n[r] = e3[r]);
  }), n;
}
function cE(e3) {
  const { theme: t, name: n, props: r } = e3;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : ws(t.components[n].defaultProps, r);
}
function dE({ props: e3, name: t, defaultTheme: n, themeId: r }) {
  let o = hu(n);
  return r && (o = o[r] || o), cE({ theme: o, name: t, props: e3 });
}
const fn = typeof window < "u" ? S.useLayoutEffect : S.useEffect;
function fE(e3, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e3, n));
}
const pE = Object.freeze(Object.defineProperty({ __proto__: null, default: fE }, Symbol.toStringTag, { value: "Module" }));
function zd(...e3) {
  return e3.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function As(e3, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e3.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function hE(e3, t) {
  return () => null;
}
function jl(e3, t) {
  var n, r;
  return S.isValidElement(e3) && t.indexOf((n = e3.type.muiName) != null ? n : (r = e3.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName) !== -1;
}
function gt(e3) {
  return e3 && e3.ownerDocument || document;
}
function Un(e3) {
  return gt(e3).defaultView || window;
}
function mE(e3, t) {
  return () => null;
}
function va(e3, t) {
  typeof e3 == "function" ? e3(t) : e3 && (e3.current = t);
}
let Nm = 0;
function gE(e3) {
  const [t, n] = S.useState(e3), r = e3 || t;
  return S.useEffect(() => {
    t == null && (Nm += 1, n(`mui-${Nm}`));
  }, [t]), r;
}
const _m = jc.useId;
function Ds(e3) {
  if (_m !== void 0) {
    const t = _m();
    return e3 ?? t;
  }
  return gE(e3);
}
function vE(e3, t, n, r, o) {
  return null;
}
function ya({ controlled: e3, default: t, name: n, state: r = "value" }) {
  const { current: o } = S.useRef(e3 !== void 0), [i, s] = S.useState(t), l = o ? e3 : i, a = S.useCallback((u) => {
    o || s(u);
  }, []);
  return [l, a];
}
function Ut(e3) {
  const t = S.useRef(e3);
  return fn(() => {
    t.current = e3;
  }), S.useRef((...n) => (0, t.current)(...n)).current;
}
function it(...e3) {
  return S.useMemo(() => e3.every((t) => t == null) ? null : (t) => {
    e3.forEach((n) => {
      va(n, t);
    });
  }, e3);
}
const Im = {};
function yE(e3, t) {
  const n = S.useRef(Im);
  return n.current === Im && (n.current = e3(t)), n;
}
const xE = [];
function SE(e3) {
  S.useEffect(e3, xE);
}
class Fs {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new Fs();
  }
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function Eo() {
  const e3 = yE(Fs.create).current;
  return SE(e3.disposeEffect), e3;
}
let Pu = true, Ad = false;
const bE = new Fs(), wE = { text: true, search: true, url: true, tel: true, email: true, password: true, number: true, date: true, month: true, week: true, time: true, datetime: true, "datetime-local": true };
function CE(e3) {
  const { type: t, tagName: n } = e3;
  return !!(n === "INPUT" && wE[t] && !e3.readOnly || n === "TEXTAREA" && !e3.readOnly || e3.isContentEditable);
}
function kE(e3) {
  e3.metaKey || e3.altKey || e3.ctrlKey || (Pu = true);
}
function bc() {
  Pu = false;
}
function EE() {
  this.visibilityState === "hidden" && Ad && (Pu = true);
}
function PE(e3) {
  e3.addEventListener("keydown", kE, true), e3.addEventListener("mousedown", bc, true), e3.addEventListener("pointerdown", bc, true), e3.addEventListener("touchstart", bc, true), e3.addEventListener("visibilitychange", EE, true);
}
function RE(e3) {
  const { target: t } = e3;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Pu || CE(t);
}
function dp() {
  const e3 = S.useCallback((o) => {
    o != null && PE(o.ownerDocument);
  }, []), t = S.useRef(false);
  function n() {
    return t.current ? (Ad = true, bE.start(100, () => {
      Ad = false;
    }), t.current = false, true) : false;
  }
  function r(o) {
    return RE(o) ? (t.current = true, true) : false;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e3 };
}
function z0(e3) {
  const t = e3.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
let uo;
function A0() {
  if (uo) return uo;
  const e3 = document.createElement("div"), t = document.createElement("div");
  return t.style.width = "10px", t.style.height = "1px", e3.appendChild(t), e3.dir = "rtl", e3.style.fontSize = "14px", e3.style.width = "4px", e3.style.height = "1px", e3.style.position = "absolute", e3.style.top = "-1000px", e3.style.overflow = "scroll", document.body.appendChild(e3), uo = "reverse", e3.scrollLeft > 0 ? uo = "default" : (e3.scrollLeft = 1, e3.scrollLeft === 0 && (uo = "negative")), document.body.removeChild(e3), uo;
}
function $E(e3, t) {
  const n = e3.scrollLeft;
  if (t !== "rtl") return n;
  switch (A0()) {
    case "negative":
      return e3.scrollWidth - e3.clientWidth + n;
    case "reverse":
      return e3.scrollWidth - e3.clientWidth - n;
    default:
      return n;
  }
}
function pe(e3, t, n = void 0) {
  const r = {};
  return Object.keys(e3).forEach((o) => {
    r[o] = e3[o].reduce((i, s) => {
      if (s) {
        const l = t(s);
        l !== "" && i.push(l), n && n[s] && i.push(n[s]);
      }
      return i;
    }, []).join(" ");
  }), r;
}
function xa(e3) {
  return typeof e3 == "string";
}
function _i(e3, t, n) {
  return e3 === void 0 || xa(e3) ? t : k({}, t, { ownerState: k({}, t.ownerState, n) });
}
function D0(e3, t = []) {
  if (e3 === void 0) return {};
  const n = {};
  return Object.keys(e3).filter((r) => r.match(/^on[A-Z]/) && typeof e3[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e3[r];
  }), n;
}
function jm(e3) {
  if (e3 === void 0) return {};
  const t = {};
  return Object.keys(e3).filter((n) => !(n.match(/^on[A-Z]/) && typeof e3[n] == "function")).forEach((n) => {
    t[n] = e3[n];
  }), t;
}
function TE(e3) {
  const { getSlotProps: t, additionalProps: n, externalSlotProps: r, externalForwardedProps: o, className: i } = e3;
  if (!t) {
    const p = q(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), y = k({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), v = k({}, n, o, r);
    return p.length > 0 && (v.className = p), Object.keys(y).length > 0 && (v.style = y), { props: v, internalRef: void 0 };
  }
  const s = D0(k({}, o, r)), l = jm(r), a = jm(o), u = t(s), c = q(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), d = k({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), f = k({}, u, n, a, l);
  return c.length > 0 && (f.className = c), Object.keys(d).length > 0 && (f.style = d), { props: f, internalRef: u.ref };
}
function OE(e3, t, n) {
  return typeof e3 == "function" ? e3(t, n) : e3;
}
const ME = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Tn(e3) {
  var t;
  const { elementType: n, externalSlotProps: r, ownerState: o, skipResolvingSlotProps: i = false } = e3, s = G(e3, ME), l = i ? {} : OE(r, o), { props: a, internalRef: u } = TE(k({}, s, { externalSlotProps: l })), c = it(u, l == null ? void 0 : l.ref, (t = e3.additionalProps) == null ? void 0 : t.ref);
  return _i(n, k({}, a, { ref: c }), o);
}
function ri(e3) {
  if (parseInt(S.version, 10) >= 19) {
    var t;
    return (e3 == null || (t = e3.props) == null ? void 0 : t.ref) || null;
  }
  return (e3 == null ? void 0 : e3.ref) || null;
}
const LE = S.createContext(), Ru = () => {
  const e3 = S.useContext(LE);
  return e3 ?? false;
}, NE = S.createContext(void 0);
function _E(e3) {
  const { theme: t, name: n, props: r } = e3;
  if (!t || !t.components || !t.components[n]) return r;
  const o = t.components[n];
  return o.defaultProps ? ws(o.defaultProps, r) : !o.styleOverrides && !o.variants ? ws(o, r) : r;
}
function IE({ props: e3, name: t }) {
  const n = S.useContext(NE);
  return _E({ props: e3, name: t, theme: { components: n } });
}
const jE = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"], zE = zs(), AE = uE("div", { name: "MuiContainer", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, t[`maxWidth${Z(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters];
} }), DE = (e3) => dE({ props: e3, name: "MuiContainer", defaultTheme: zE }), FE = (e3, t) => {
  const n = (a) => ue(t, a), { classes: r, fixed: o, disableGutters: i, maxWidth: s } = e3, l = { root: ["root", s && `maxWidth${Z(String(s))}`, o && "fixed", i && "disableGutters"] };
  return pe(l, n, r);
};
function BE(e3 = {}) {
  const { createStyledComponent: t = AE, useThemeProps: n = DE, componentName: r = "MuiContainer" } = e3, o = t(({ theme: s, ownerState: l }) => k({ width: "100%", marginLeft: "auto", boxSizing: "border-box", marginRight: "auto", display: "block" }, !l.disableGutters && { paddingLeft: s.spacing(2), paddingRight: s.spacing(2), [s.breakpoints.up("sm")]: { paddingLeft: s.spacing(3), paddingRight: s.spacing(3) } }), ({ theme: s, ownerState: l }) => l.fixed && Object.keys(s.breakpoints.values).reduce((a, u) => {
    const c = u, d = s.breakpoints.values[c];
    return d !== 0 && (a[s.breakpoints.up(c)] = { maxWidth: `${d}${s.breakpoints.unit}` }), a;
  }, {}), ({ theme: s, ownerState: l }) => k({}, l.maxWidth === "xs" && { [s.breakpoints.up("xs")]: { maxWidth: Math.max(s.breakpoints.values.xs, 444) } }, l.maxWidth && l.maxWidth !== "xs" && { [s.breakpoints.up(l.maxWidth)]: { maxWidth: `${s.breakpoints.values[l.maxWidth]}${s.breakpoints.unit}` } }));
  return S.forwardRef(function(l, a) {
    const u = n(l), { className: c, component: d = "div", disableGutters: f = false, fixed: p = false, maxWidth: y = "lg" } = u, v = G(u, jE), w = k({}, u, { component: d, disableGutters: f, fixed: p, maxWidth: y }), h = FE(w, r);
    return b.jsx(o, k({ as: d, ownerState: w, className: q(h.root, c), ref: a }, v));
  });
}
function WE(e3, t) {
  return k({ toolbar: { minHeight: 56, [e3.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } }, [e3.up("sm")]: { minHeight: 64 } } }, t);
}
var Qe = {}, F0 = { exports: {} };
(function(e3) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  e3.exports = t, e3.exports.__esModule = true, e3.exports.default = e3.exports;
})(F0);
var Bs = F0.exports;
const UE = rr(zw), VE = rr(pE);
var B0 = Bs;
Object.defineProperty(Qe, "__esModule", { value: true });
var Mt = Qe.alpha = H0;
Qe.blend = rP;
Qe.colorChannel = void 0;
var HE = Qe.darken = pp;
Qe.decomposeColor = pn;
Qe.emphasize = K0;
var KE = Qe.getContrastRatio = ZE;
Qe.getLuminance = Sa;
Qe.hexToRgb = W0;
Qe.hslToRgb = V0;
var YE = Qe.lighten = hp;
Qe.private_safeAlpha = JE;
Qe.private_safeColorChannel = void 0;
Qe.private_safeDarken = eP;
Qe.private_safeEmphasize = nP;
Qe.private_safeLighten = tP;
Qe.recomposeColor = oi;
Qe.rgbToHex = qE;
var zm = B0(UE), XE = B0(VE);
function fp(e3, t = 0, n = 1) {
  return (0, XE.default)(e3, t, n);
}
function W0(e3) {
  e3 = e3.slice(1);
  const t = new RegExp(`.{1,${e3.length >= 6 ? 2 : 1}}`, "g");
  let n = e3.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function GE(e3) {
  const t = e3.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function pn(e3) {
  if (e3.type) return e3;
  if (e3.charAt(0) === "#") return pn(W0(e3));
  const t = e3.indexOf("("), n = e3.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1) throw new Error((0, zm.default)(9, e3));
  let r = e3.substring(t + 1, e3.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1) throw new Error((0, zm.default)(10, o));
  } else r = r.split(",");
  return r = r.map((i) => parseFloat(i)), { type: n, values: r, colorSpace: o };
}
const U0 = (e3) => {
  const t = pn(e3);
  return t.values.slice(0, 3).map((n, r) => t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n).join(" ");
};
Qe.colorChannel = U0;
const QE = (e3, t) => {
  try {
    return U0(e3);
  } catch {
    return e3;
  }
};
Qe.private_safeColorChannel = QE;
function oi(e3) {
  const { type: t, colorSpace: n } = e3;
  let { values: r } = e3;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function qE(e3) {
  if (e3.indexOf("#") === 0) return e3;
  const { values: t } = pn(e3);
  return `#${t.map((n, r) => GE(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function V0(e3) {
  e3 = pn(e3);
  const { values: t } = e3, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, c = (u + n / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e3.type === "hsla" && (l += "a", a.push(t[3])), oi({ type: l, values: a });
}
function Sa(e3) {
  e3 = pn(e3);
  let t = e3.type === "hsl" || e3.type === "hsla" ? pn(V0(e3)).values : e3.values;
  return t = t.map((n) => (e3.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ZE(e3, t) {
  const n = Sa(e3), r = Sa(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function H0(e3, t) {
  return e3 = pn(e3), t = fp(t), (e3.type === "rgb" || e3.type === "hsl") && (e3.type += "a"), e3.type === "color" ? e3.values[3] = `/${t}` : e3.values[3] = t, oi(e3);
}
function JE(e3, t, n) {
  try {
    return H0(e3, t);
  } catch {
    return e3;
  }
}
function pp(e3, t) {
  if (e3 = pn(e3), t = fp(t), e3.type.indexOf("hsl") !== -1) e3.values[2] *= 1 - t;
  else if (e3.type.indexOf("rgb") !== -1 || e3.type.indexOf("color") !== -1) for (let n = 0; n < 3; n += 1) e3.values[n] *= 1 - t;
  return oi(e3);
}
function eP(e3, t, n) {
  try {
    return pp(e3, t);
  } catch {
    return e3;
  }
}
function hp(e3, t) {
  if (e3 = pn(e3), t = fp(t), e3.type.indexOf("hsl") !== -1) e3.values[2] += (100 - e3.values[2]) * t;
  else if (e3.type.indexOf("rgb") !== -1) for (let n = 0; n < 3; n += 1) e3.values[n] += (255 - e3.values[n]) * t;
  else if (e3.type.indexOf("color") !== -1) for (let n = 0; n < 3; n += 1) e3.values[n] += (1 - e3.values[n]) * t;
  return oi(e3);
}
function tP(e3, t, n) {
  try {
    return hp(e3, t);
  } catch {
    return e3;
  }
}
function K0(e3, t = 0.15) {
  return Sa(e3) > 0.5 ? pp(e3, t) : hp(e3, t);
}
function nP(e3, t, n) {
  try {
    return K0(e3, t);
  } catch {
    return e3;
  }
}
function rP(e3, t, n, r = 1) {
  const o = (a, u) => Math.round((a ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r), i = pn(e3), s = pn(t), l = [o(i.values[0], s.values[0]), o(i.values[1], s.values[1]), o(i.values[2], s.values[2])];
  return oi({ type: "rgb", values: l });
}
const oP = ["mode", "contrastThreshold", "tonalOffset"], Am = { text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)" }, divider: "rgba(0, 0, 0, 0.12)", background: { paper: ys.white, default: ys.white }, action: { active: "rgba(0, 0, 0, 0.54)", hover: "rgba(0, 0, 0, 0.04)", hoverOpacity: 0.04, selected: "rgba(0, 0, 0, 0.08)", selectedOpacity: 0.08, disabled: "rgba(0, 0, 0, 0.26)", disabledBackground: "rgba(0, 0, 0, 0.12)", disabledOpacity: 0.38, focus: "rgba(0, 0, 0, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.12 } }, wc = { text: { primary: ys.white, secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", icon: "rgba(255, 255, 255, 0.5)" }, divider: "rgba(255, 255, 255, 0.12)", background: { paper: "#121212", default: "#121212" }, action: { active: ys.white, hover: "rgba(255, 255, 255, 0.08)", hoverOpacity: 0.08, selected: "rgba(255, 255, 255, 0.16)", selectedOpacity: 0.16, disabled: "rgba(255, 255, 255, 0.3)", disabledBackground: "rgba(255, 255, 255, 0.12)", disabledOpacity: 0.38, focus: "rgba(255, 255, 255, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.24 } };
function Dm(e3, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e3[t] || (e3.hasOwnProperty(n) ? e3[t] = e3[n] : t === "light" ? e3.light = YE(e3.main, o) : t === "dark" && (e3.dark = HE(e3.main, i)));
}
function iP(e3 = "light") {
  return e3 === "dark" ? { main: so[200], light: so[50], dark: so[400] } : { main: so[700], light: so[400], dark: so[800] };
}
function sP(e3 = "light") {
  return e3 === "dark" ? { main: io[200], light: io[50], dark: io[400] } : { main: io[500], light: io[300], dark: io[700] };
}
function lP(e3 = "light") {
  return e3 === "dark" ? { main: oo[500], light: oo[300], dark: oo[700] } : { main: oo[700], light: oo[400], dark: oo[800] };
}
function aP(e3 = "light") {
  return e3 === "dark" ? { main: lo[400], light: lo[300], dark: lo[700] } : { main: lo[700], light: lo[500], dark: lo[900] };
}
function uP(e3 = "light") {
  return e3 === "dark" ? { main: ao[400], light: ao[300], dark: ao[700] } : { main: ao[800], light: ao[500], dark: ao[900] };
}
function cP(e3 = "light") {
  return e3 === "dark" ? { main: bi[400], light: bi[300], dark: bi[700] } : { main: "#ed6c02", light: bi[500], dark: bi[900] };
}
function dP(e3) {
  const { mode: t = "light", contrastThreshold: n = 3, tonalOffset: r = 0.2 } = e3, o = G(e3, oP), i = e3.primary || iP(t), s = e3.secondary || sP(t), l = e3.error || lP(t), a = e3.info || aP(t), u = e3.success || uP(t), c = e3.warning || cP(t);
  function d(v) {
    return KE(v, wc.text.primary) >= n ? wc.text.primary : Am.text.primary;
  }
  const f = ({ color: v, name: w, mainShade: h = 500, lightShade: m = 300, darkShade: g = 700 }) => {
    if (v = k({}, v), !v.main && v[h] && (v.main = v[h]), !v.hasOwnProperty("main")) throw new Error(Zr(11, w ? ` (${w})` : "", h));
    if (typeof v.main != "string") throw new Error(Zr(12, w ? ` (${w})` : "", JSON.stringify(v.main)));
    return Dm(v, "light", m, r), Dm(v, "dark", g, r), v.contrastText || (v.contrastText = d(v.main)), v;
  }, p = { dark: wc, light: Am };
  return Yt(k({ common: k({}, ys), mode: t, primary: f({ color: i, name: "primary" }), secondary: f({ color: s, name: "secondary", mainShade: "A400", lightShade: "A200", darkShade: "A700" }), error: f({ color: l, name: "error" }), warning: f({ color: c, name: "warning" }), info: f({ color: a, name: "info" }), success: f({ color: u, name: "success" }), grey: jw, contrastThreshold: n, getContrastText: d, augmentColor: f, tonalOffset: r }, p[t]), o);
}
const fP = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function pP(e3) {
  return Math.round(e3 * 1e5) / 1e5;
}
const Fm = { textTransform: "uppercase" }, Bm = '"Roboto", "Helvetica", "Arial", sans-serif';
function hP(e3, t) {
  const n = typeof t == "function" ? t(e3) : t, { fontFamily: r = Bm, fontSize: o = 14, fontWeightLight: i = 300, fontWeightRegular: s = 400, fontWeightMedium: l = 500, fontWeightBold: a = 700, htmlFontSize: u = 16, allVariants: c, pxToRem: d } = n, f = G(n, fP), p = o / 14, y = d || ((h) => `${h / u * p}rem`), v = (h, m, g, x, C) => k({ fontFamily: r, fontWeight: h, fontSize: y(m), lineHeight: g }, r === Bm ? { letterSpacing: `${pP(x / m)}em` } : {}, C, c), w = { h1: v(i, 96, 1.167, -1.5), h2: v(i, 60, 1.2, -0.5), h3: v(s, 48, 1.167, 0), h4: v(s, 34, 1.235, 0.25), h5: v(s, 24, 1.334, 0), h6: v(l, 20, 1.6, 0.15), subtitle1: v(s, 16, 1.75, 0.15), subtitle2: v(l, 14, 1.57, 0.1), body1: v(s, 16, 1.5, 0.15), body2: v(s, 14, 1.43, 0.15), button: v(l, 14, 1.75, 0.4, Fm), caption: v(s, 12, 1.66, 0.4), overline: v(s, 12, 2.66, 1, Fm), inherit: { fontFamily: "inherit", fontWeight: "inherit", fontSize: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } };
  return Yt(k({ htmlFontSize: u, pxToRem: y, fontFamily: r, fontSize: o, fontWeightLight: i, fontWeightRegular: s, fontWeightMedium: l, fontWeightBold: a }, w), f, { clone: false });
}
const mP = 0.2, gP = 0.14, vP = 0.12;
function ze(...e3) {
  return [`${e3[0]}px ${e3[1]}px ${e3[2]}px ${e3[3]}px rgba(0,0,0,${mP})`, `${e3[4]}px ${e3[5]}px ${e3[6]}px ${e3[7]}px rgba(0,0,0,${gP})`, `${e3[8]}px ${e3[9]}px ${e3[10]}px ${e3[11]}px rgba(0,0,0,${vP})`].join(",");
}
const yP = ["none", ze(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ze(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ze(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ze(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ze(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ze(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ze(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ze(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ze(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ze(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ze(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ze(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ze(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ze(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ze(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ze(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ze(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ze(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ze(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ze(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ze(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ze(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ze(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ze(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], xP = ["duration", "easing", "delay"], SP = { easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)", easeOut: "cubic-bezier(0.0, 0, 0.2, 1)", easeIn: "cubic-bezier(0.4, 0, 1, 1)", sharp: "cubic-bezier(0.4, 0, 0.6, 1)" }, bP = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 };
function Wm(e3) {
  return `${Math.round(e3)}ms`;
}
function wP(e3) {
  if (!e3) return 0;
  const t = e3 / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function CP(e3) {
  const t = k({}, SP, e3.easing), n = k({}, bP, e3.duration);
  return k({ getAutoHeightDuration: wP, create: (o = ["all"], i = {}) => {
    const { duration: s = n.standard, easing: l = t.easeInOut, delay: a = 0 } = i;
    return G(i, xP), (Array.isArray(o) ? o : [o]).map((u) => `${u} ${typeof s == "string" ? s : Wm(s)} ${l} ${typeof a == "string" ? a : Wm(a)}`).join(",");
  } }, e3, { easing: t, duration: n });
}
const kP = { mobileStepper: 1e3, fab: 1050, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500 }, EP = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Y0(e3 = {}, ...t) {
  const { mixins: n = {}, palette: r = {}, transitions: o = {}, typography: i = {} } = e3, s = G(e3, EP);
  if (e3.vars && e3.generateCssVars === void 0) throw new Error(Zr(18));
  const l = dP(r), a = zs(e3);
  let u = Yt(a, { mixins: WE(a.breakpoints, n), palette: l, shadows: yP.slice(), typography: hP(l, i), transitions: CP(o), zIndex: k({}, kP) });
  return u = Yt(u, s), u = t.reduce((c, d) => Yt(c, d), u), u.unstable_sxConfig = k({}, js, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(d) {
    return ni({ sx: d, theme: this });
  }, u;
}
const mp = Y0();
function ii() {
  const e3 = hu(mp);
  return e3[Ka] || e3;
}
var Ws = {}, Cc = { exports: {} }, Um;
function PP() {
  return Um || (Um = 1, function(e3) {
    function t() {
      return e3.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
          var o = arguments[r];
          for (var i in o) ({}).hasOwnProperty.call(o, i) && (n[i] = o[i]);
        }
        return n;
      }, e3.exports.__esModule = true, e3.exports.default = e3.exports, t.apply(null, arguments);
    }
    e3.exports = t, e3.exports.__esModule = true, e3.exports.default = e3.exports;
  }(Cc)), Cc.exports;
}
var kc = { exports: {} }, Vm;
function RP() {
  return Vm || (Vm = 1, function(e3) {
    function t(n, r) {
      if (n == null) return {};
      var o = {};
      for (var i in n) if ({}.hasOwnProperty.call(n, i)) {
        if (r.indexOf(i) !== -1) continue;
        o[i] = n[i];
      }
      return o;
    }
    e3.exports = t, e3.exports.__esModule = true, e3.exports.default = e3.exports;
  }(kc)), kc.exports;
}
const X0 = rr(UC), $P = rr(VC), TP = rr(QC), OP = rr(Jk), MP = rr(zk), LP = rr(Vk);
var si = Bs;
Object.defineProperty(Ws, "__esModule", { value: true });
var NP = Ws.default = KP;
Ws.shouldForwardProp = zl;
Ws.systemDefaultTheme = void 0;
var en = si(PP()), Dd = si(RP()), ba = FP(X0), _P = $P;
si(TP);
si(OP);
var IP = si(MP), jP = si(LP);
const zP = ["ownerState"], AP = ["variants"], DP = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function G0(e3) {
  if (typeof WeakMap != "function") return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (G0 = function(r) {
    return r ? n : t;
  })(e3);
}
function FP(e3, t) {
  if (e3 && e3.__esModule) return e3;
  if (e3 === null || typeof e3 != "object" && typeof e3 != "function") return { default: e3 };
  var n = G0(t);
  if (n && n.has(e3)) return n.get(e3);
  var r = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e3) if (i !== "default" && Object.prototype.hasOwnProperty.call(e3, i)) {
    var s = o ? Object.getOwnPropertyDescriptor(e3, i) : null;
    s && (s.get || s.set) ? Object.defineProperty(r, i, s) : r[i] = e3[i];
  }
  return r.default = e3, n && n.set(e3, r), r;
}
function BP(e3) {
  return Object.keys(e3).length === 0;
}
function WP(e3) {
  return typeof e3 == "string" && e3.charCodeAt(0) > 96;
}
function zl(e3) {
  return e3 !== "ownerState" && e3 !== "theme" && e3 !== "sx" && e3 !== "as";
}
function Hm(e3, t) {
  return t && e3 && typeof e3 == "object" && e3.styles && !e3.styles.startsWith("@layer") && (e3.styles = `@layer ${t}{${String(e3.styles)}}`), e3;
}
const UP = Ws.systemDefaultTheme = (0, IP.default)(), VP = (e3) => e3 && e3.charAt(0).toLowerCase() + e3.slice(1);
function pl({ defaultTheme: e3, theme: t, themeId: n }) {
  return BP(t) ? e3 : t[n] || t;
}
function HP(e3) {
  return e3 ? (t, n) => n[e3] : null;
}
function Al(e3, t, n) {
  let { ownerState: r } = t, o = (0, Dd.default)(t, zP);
  const i = typeof e3 == "function" ? e3((0, en.default)({ ownerState: r }, o)) : e3;
  if (Array.isArray(i)) return i.flatMap((s) => Al(s, (0, en.default)({ ownerState: r }, o), n));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const { variants: s = [] } = i;
    let a = (0, Dd.default)(i, AP);
    return s.forEach((u) => {
      let c = true;
      if (typeof u.props == "function" ? c = u.props((0, en.default)({ ownerState: r }, o, r)) : Object.keys(u.props).forEach((d) => {
        (r == null ? void 0 : r[d]) !== u.props[d] && o[d] !== u.props[d] && (c = false);
      }), c) {
        Array.isArray(a) || (a = [a]);
        const d = typeof u.style == "function" ? u.style((0, en.default)({ ownerState: r }, o, r)) : u.style;
        a.push(n ? Hm((0, ba.internal_serializeStyles)(d), n) : d);
      }
    }), a;
  }
  return n ? Hm((0, ba.internal_serializeStyles)(i), n) : i;
}
function KP(e3 = {}) {
  const { themeId: t, defaultTheme: n = UP, rootShouldForwardProp: r = zl, slotShouldForwardProp: o = zl } = e3, i = (s) => (0, jP.default)((0, en.default)({}, s, { theme: pl((0, en.default)({}, s, { defaultTheme: n, themeId: t })) }));
  return i.__mui_systemSx = true, (s, l = {}) => {
    (0, ba.internal_processStyles)(s, (E) => E.filter((P) => !(P != null && P.__mui_systemSx)));
    const { name: a, slot: u, skipVariantsResolver: c, skipSx: d, overridesResolver: f = HP(VP(u)) } = l, p = (0, Dd.default)(l, DP), y = a && a.startsWith("Mui") || u ? "components" : "custom", v = c !== void 0 ? c : u && u !== "Root" && u !== "root" || false, w = d || false;
    let h, m = zl;
    u === "Root" || u === "root" ? m = r : u ? m = o : WP(s) && (m = void 0);
    const g = (0, ba.default)(s, (0, en.default)({ shouldForwardProp: m, label: h }, p)), x = (E) => typeof E == "function" && E.__emotion_real !== E || (0, _P.isPlainObject)(E) ? (P) => {
      const $ = pl({ theme: P.theme, defaultTheme: n, themeId: t });
      return Al(E, (0, en.default)({}, P, { theme: $ }), $.modularCssLayers ? y : void 0);
    } : E, C = (E, ...P) => {
      let $ = x(E);
      const L = P ? P.map(x) : [];
      a && f && L.push((z) => {
        const M = pl((0, en.default)({}, z, { defaultTheme: n, themeId: t }));
        if (!M.components || !M.components[a] || !M.components[a].styleOverrides) return null;
        const I = M.components[a].styleOverrides, A = {};
        return Object.entries(I).forEach(([j, O]) => {
          A[j] = Al(O, (0, en.default)({}, z, { theme: M }), M.modularCssLayers ? "theme" : void 0);
        }), f(z, A);
      }), a && !v && L.push((z) => {
        var M;
        const I = pl((0, en.default)({}, z, { defaultTheme: n, themeId: t })), A = I == null || (M = I.components) == null || (M = M[a]) == null ? void 0 : M.variants;
        return Al({ variants: A }, (0, en.default)({}, z, { theme: I }), I.modularCssLayers ? "theme" : void 0);
      }), w || L.push(i);
      const T = L.length - P.length;
      if (Array.isArray(E) && T > 0) {
        const z = new Array(T).fill("");
        $ = [...E, ...z], $.raw = [...E.raw, ...z];
      }
      const D = g($, ...L);
      return s.muiName && (D.muiName = s.muiName), D;
    };
    return g.withConfig && (C.withConfig = g.withConfig), C;
  };
}
function Q0(e3) {
  return e3 !== "ownerState" && e3 !== "theme" && e3 !== "sx" && e3 !== "as";
}
const yn = (e3) => Q0(e3) && e3 !== "classes", Y = NP({ themeId: Ka, defaultTheme: mp, rootShouldForwardProp: yn }), Km = (e3) => {
  let t;
  return e3 < 1 ? t = 5.11916 * e3 ** 2 : t = 4.5 * Math.log(e3 + 1) + 2, (t / 100).toFixed(2);
};
function he(e3) {
  return IE(e3);
}
function YP(e3) {
  return ue("MuiSvgIcon", e3);
}
se("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const XP = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], GP = (e3) => {
  const { color: t, fontSize: n, classes: r } = e3, o = { root: ["root", t !== "inherit" && `color${Z(t)}`, `fontSize${Z(n)}`] };
  return pe(o, YP, r);
}, QP = Y("svg", { name: "MuiSvgIcon", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, n.color !== "inherit" && t[`color${Z(n.color)}`], t[`fontSize${Z(n.fontSize)}`]];
} })(({ theme: e3, ownerState: t }) => {
  var n, r, o, i, s, l, a, u, c, d, f, p, y;
  return { userSelect: "none", width: "1em", height: "1em", display: "inline-block", fill: t.hasSvgAsChild ? void 0 : "currentColor", flexShrink: 0, transition: (n = e3.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", { duration: (o = e3.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter }), fontSize: { inherit: "inherit", small: ((i = e3.typography) == null || (s = i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem", medium: ((l = e3.typography) == null || (a = l.pxToRem) == null ? void 0 : a.call(l, 24)) || "1.5rem", large: ((u = e3.typography) == null || (c = u.pxToRem) == null ? void 0 : c.call(u, 35)) || "2.1875rem" }[t.fontSize], color: (d = (f = (e3.vars || e3).palette) == null || (f = f[t.color]) == null ? void 0 : f.main) != null ? d : { action: (p = (e3.vars || e3).palette) == null || (p = p.action) == null ? void 0 : p.active, disabled: (y = (e3.vars || e3).palette) == null || (y = y.action) == null ? void 0 : y.disabled, inherit: void 0 }[t.color] };
}), Fd = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiSvgIcon" }), { children: o, className: i, color: s = "inherit", component: l = "svg", fontSize: a = "medium", htmlColor: u, inheritViewBox: c = false, titleAccess: d, viewBox: f = "0 0 24 24" } = r, p = G(r, XP), y = S.isValidElement(o) && o.type === "svg", v = k({}, r, { color: s, component: l, fontSize: a, instanceFontSize: t.fontSize, inheritViewBox: c, viewBox: f, hasSvgAsChild: y }), w = {};
  c || (w.viewBox = f);
  const h = GP(v);
  return b.jsxs(QP, k({ as: l, className: q(h.root, i), focusable: "false", color: u, "aria-hidden": d ? void 0 : true, role: d ? "img" : void 0, ref: n }, w, p, y && o.props, { ownerState: v, children: [y ? o.props.children : o, d ? b.jsx("title", { children: d }) : null] }));
});
Fd.muiName = "SvgIcon";
function xn(e3, t) {
  function n(r, o) {
    return b.jsx(Fd, k({ "data-testid": `${t}Icon`, ref: o }, r, { children: e3 }));
  }
  return n.muiName = Fd.muiName, S.memo(S.forwardRef(n));
}
const qP = { configure: (e3) => {
  ap.configure(e3);
} }, ZP = Object.freeze(Object.defineProperty({ __proto__: null, capitalize: Z, createChainedFunction: zd, createSvgIcon: xn, debounce: As, deprecatedPropType: hE, isMuiElement: jl, ownerDocument: gt, ownerWindow: Un, requirePropFactory: mE, setRef: va, unstable_ClassNameGenerator: qP, unstable_useEnhancedEffect: fn, unstable_useId: Ds, unsupportedProp: vE, useControlled: ya, useEventCallback: Ut, useForkRef: it, useIsFocusVisible: dp }, Symbol.toStringTag, { value: "Module" }));
function Bd(e3, t) {
  return Bd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Bd(e3, t);
}
function q0(e3, t) {
  e3.prototype = Object.create(t.prototype), e3.prototype.constructor = e3, Bd(e3, t);
}
const Ym = { disabled: false }, wa = jn.createContext(null);
var JP = function(t) {
  return t.scrollTop;
}, Ii = "unmounted", zr = "exited", Ar = "entering", fo = "entered", Wd = "exiting", Hn = function(e3) {
  q0(t, e3);
  function t(r, o) {
    var i;
    i = e3.call(this, r, o) || this;
    var s = o, l = s && !s.isMounting ? r.enter : r.appear, a;
    return i.appearStatus = null, r.in ? l ? (a = zr, i.appearStatus = Ar) : a = fo : r.unmountOnExit || r.mountOnEnter ? a = Ii : a = zr, i.state = { status: a }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === Ii ? { status: zr } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(true, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Ar && s !== fo && (i = Ar) : (s === Ar || s === fo) && (i = Wd);
    }
    this.updateStatus(false, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, s, l;
    return i = s = l = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, l = o.appear !== void 0 ? o.appear : s), { exit: i, enter: s, appear: l };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = false), i !== null) if (this.cancelNextCallback(), i === Ar) {
      if (this.props.unmountOnExit || this.props.mountOnEnter) {
        var s = this.props.nodeRef ? this.props.nodeRef.current : ul.findDOMNode(this);
        s && JP(s);
      }
      this.performEnter(o);
    } else this.performExit();
    else this.props.unmountOnExit && this.state.status === zr && this.setState({ status: Ii });
  }, n.performEnter = function(o) {
    var i = this, s = this.props.enter, l = this.context ? this.context.isMounting : o, a = this.props.nodeRef ? [l] : [ul.findDOMNode(this), l], u = a[0], c = a[1], d = this.getTimeouts(), f = l ? d.appear : d.enter;
    if (!o && !s || Ym.disabled) {
      this.safeSetState({ status: fo }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({ status: Ar }, function() {
      i.props.onEntering(u, c), i.onTransitionEnd(f, function() {
        i.safeSetState({ status: fo }, function() {
          i.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : ul.findDOMNode(this);
    if (!i || Ym.disabled) {
      this.safeSetState({ status: zr }, function() {
        o.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({ status: Wd }, function() {
      o.props.onExiting(l), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({ status: zr }, function() {
          o.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, s = true;
    return this.nextCallback = function(l) {
      s && (s = false, i.nextCallback = null, o(l));
    }, this.nextCallback.cancel = function() {
      s = false;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : ul.findDOMNode(this), l = o == null && !this.props.addEndListener;
    if (!s || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var a = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = a[0], c = a[1];
      this.props.addEndListener(u, c);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === Ii) return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var l = G(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return jn.createElement(wa.Provider, { value: null }, typeof s == "function" ? s(o, l) : jn.cloneElement(jn.Children.only(s), l));
  }, t;
}(jn.Component);
Hn.contextType = wa;
Hn.propTypes = {};
function co() {
}
Hn.defaultProps = { in: false, mountOnEnter: false, unmountOnExit: false, appear: false, enter: true, exit: true, onEnter: co, onEntering: co, onEntered: co, onExit: co, onExiting: co, onExited: co };
Hn.UNMOUNTED = Ii;
Hn.EXITED = zr;
Hn.ENTERING = Ar;
Hn.ENTERED = fo;
Hn.EXITING = Wd;
function e2(e3) {
  if (e3 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e3;
}
function gp(e3, t) {
  var n = function(i) {
    return t && S.isValidElement(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e3 && S.Children.map(e3, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function t2(e3, t) {
  e3 = e3 || {}, t = t || {};
  function n(c) {
    return c in t ? t[c] : e3[c];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e3) i in t ? o.length && (r[i] = o, o = []) : o.push(i);
  var s, l = {};
  for (var a in t) {
    if (r[a]) for (s = 0; s < r[a].length; s++) {
      var u = r[a][s];
      l[r[a][s]] = n(u);
    }
    l[a] = n(a);
  }
  for (s = 0; s < o.length; s++) l[o[s]] = n(o[s]);
  return l;
}
function Wr(e3, t, n) {
  return n[t] != null ? n[t] : e3.props[t];
}
function n2(e3, t) {
  return gp(e3.children, function(n) {
    return S.cloneElement(n, { onExited: t.bind(null, n), in: true, appear: Wr(n, "appear", e3), enter: Wr(n, "enter", e3), exit: Wr(n, "exit", e3) });
  });
}
function r2(e3, t, n) {
  var r = gp(e3.children), o = t2(t, r);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (S.isValidElement(s)) {
      var l = i in t, a = i in r, u = t[i], c = S.isValidElement(u) && !u.props.in;
      a && (!l || c) ? o[i] = S.cloneElement(s, { onExited: n.bind(null, s), in: true, exit: Wr(s, "exit", e3), enter: Wr(s, "enter", e3) }) : !a && l && !c ? o[i] = S.cloneElement(s, { in: false }) : a && l && S.isValidElement(u) && (o[i] = S.cloneElement(s, { onExited: n.bind(null, s), in: u.props.in, exit: Wr(s, "exit", e3), enter: Wr(s, "enter", e3) }));
    }
  }), o;
}
var o2 = Object.values || function(e3) {
  return Object.keys(e3).map(function(t) {
    return e3[t];
  });
}, i2 = { component: "div", childFactory: function(t) {
  return t;
} }, vp = function(e3) {
  q0(t, e3);
  function t(r, o) {
    var i;
    i = e3.call(this, r, o) || this;
    var s = i.handleExited.bind(e2(i));
    return i.state = { contextValue: { isMounting: true }, handleExited: s, firstRender: true }, i;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = true, this.setState({ contextValue: { isMounting: false } });
  }, n.componentWillUnmount = function() {
    this.mounted = false;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, l = i.handleExited, a = i.firstRender;
    return { children: a ? n2(o, l) : r2(o, s, l), firstRender: false };
  }, n.handleExited = function(o, i) {
    var s = gp(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(l) {
      var a = k({}, l.children);
      return delete a[o.key], { children: a };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, l = G(o, ["component", "childFactory"]), a = this.state.contextValue, u = o2(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? jn.createElement(wa.Provider, { value: a }, u) : jn.createElement(wa.Provider, { value: a }, jn.createElement(i, l, u));
  }, t;
}(jn.Component);
vp.propTypes = {};
vp.defaultProps = i2;
const Z0 = (e3) => e3.scrollTop;
function Ca(e3, t) {
  var n, r;
  const { timeout: o, easing: i, style: s = {} } = e3;
  return { duration: (n = s.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0, easing: (r = s.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i, delay: s.transitionDelay };
}
function s2(e3) {
  return ue("MuiPaper", e3);
}
se("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const l2 = ["className", "component", "elevation", "square", "variant"], a2 = (e3) => {
  const { square: t, elevation: n, variant: r, classes: o } = e3, i = { root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`] };
  return pe(i, s2, o);
}, u2 = Y("div", { name: "MuiPaper", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
} })(({ theme: e3, ownerState: t }) => {
  var n;
  return k({ backgroundColor: (e3.vars || e3).palette.background.paper, color: (e3.vars || e3).palette.text.primary, transition: e3.transitions.create("box-shadow") }, !t.square && { borderRadius: e3.shape.borderRadius }, t.variant === "outlined" && { border: `1px solid ${(e3.vars || e3).palette.divider}` }, t.variant === "elevation" && k({ boxShadow: (e3.vars || e3).shadows[t.elevation] }, !e3.vars && e3.palette.mode === "dark" && { backgroundImage: `linear-gradient(${Mt("#fff", Km(t.elevation))}, ${Mt("#fff", Km(t.elevation))})` }, e3.vars && { backgroundImage: (n = e3.vars.overlays) == null ? void 0 : n[t.elevation] }));
}), yp = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiPaper" }), { className: o, component: i = "div", elevation: s = 1, square: l = false, variant: a = "elevation" } = r, u = G(r, l2), c = k({}, r, { component: i, elevation: s, square: l, variant: a }), d = a2(c);
  return b.jsx(u2, k({ as: i, ownerState: c, className: q(d.root, o), ref: n }, u));
});
function c2(e3) {
  const { className: t, classes: n, pulsate: r = false, rippleX: o, rippleY: i, rippleSize: s, in: l, onExited: a, timeout: u } = e3, [c, d] = S.useState(false), f = q(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), p = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o }, y = q(n.child, c && n.childLeaving, r && n.childPulsate);
  return !l && !c && d(true), S.useEffect(() => {
    if (!l && a != null) {
      const v = setTimeout(a, u);
      return () => {
        clearTimeout(v);
      };
    }
  }, [a, l, u]), b.jsx("span", { className: f, style: p, children: b.jsx("span", { className: y }) });
}
const tn = se("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), d2 = ["center", "classes", "className"];
let $u = (e3) => e3, Xm, Gm, Qm, qm;
const Ud = 550, f2 = 80, p2 = ti(Xm || (Xm = $u`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), h2 = ti(Gm || (Gm = $u`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), m2 = ti(Qm || (Qm = $u`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), g2 = Y("span", { name: "MuiTouchRipple", slot: "Root" })({ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: 0, top: 0, right: 0, bottom: 0, left: 0, borderRadius: "inherit" }), v2 = Y(c2, { name: "MuiTouchRipple", slot: "Ripple" })(qm || (qm = $u`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), tn.rippleVisible, p2, Ud, ({ theme: e3 }) => e3.transitions.easing.easeInOut, tn.ripplePulsate, ({ theme: e3 }) => e3.transitions.duration.shorter, tn.child, tn.childLeaving, h2, Ud, ({ theme: e3 }) => e3.transitions.easing.easeInOut, tn.childPulsate, m2, ({ theme: e3 }) => e3.transitions.easing.easeInOut), y2 = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiTouchRipple" }), { center: o = false, classes: i = {}, className: s } = r, l = G(r, d2), [a, u] = S.useState([]), c = S.useRef(0), d = S.useRef(null);
  S.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [a]);
  const f = S.useRef(false), p = Eo(), y = S.useRef(null), v = S.useRef(null), w = S.useCallback((x) => {
    const { pulsate: C, rippleX: E, rippleY: P, rippleSize: $, cb: L } = x;
    u((T) => [...T, b.jsx(v2, { classes: { ripple: q(i.ripple, tn.ripple), rippleVisible: q(i.rippleVisible, tn.rippleVisible), ripplePulsate: q(i.ripplePulsate, tn.ripplePulsate), child: q(i.child, tn.child), childLeaving: q(i.childLeaving, tn.childLeaving), childPulsate: q(i.childPulsate, tn.childPulsate) }, timeout: Ud, pulsate: C, rippleX: E, rippleY: P, rippleSize: $ }, c.current)]), c.current += 1, d.current = L;
  }, [i]), h = S.useCallback((x = {}, C = {}, E = () => {
  }) => {
    const { pulsate: P = false, center: $ = o || C.pulsate, fakeElement: L = false } = C;
    if ((x == null ? void 0 : x.type) === "mousedown" && f.current) {
      f.current = false;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (f.current = true);
    const T = L ? null : v.current, D = T ? T.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
    let z, M, I;
    if ($ || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches) z = Math.round(D.width / 2), M = Math.round(D.height / 2);
    else {
      const { clientX: A, clientY: j } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      z = Math.round(A - D.left), M = Math.round(j - D.top);
    }
    if ($) I = Math.sqrt((2 * D.width ** 2 + D.height ** 2) / 3), I % 2 === 0 && (I += 1);
    else {
      const A = Math.max(Math.abs((T ? T.clientWidth : 0) - z), z) * 2 + 2, j = Math.max(Math.abs((T ? T.clientHeight : 0) - M), M) * 2 + 2;
      I = Math.sqrt(A ** 2 + j ** 2);
    }
    x != null && x.touches ? y.current === null && (y.current = () => {
      w({ pulsate: P, rippleX: z, rippleY: M, rippleSize: I, cb: E });
    }, p.start(f2, () => {
      y.current && (y.current(), y.current = null);
    })) : w({ pulsate: P, rippleX: z, rippleY: M, rippleSize: I, cb: E });
  }, [o, w, p]), m = S.useCallback(() => {
    h({}, { pulsate: true });
  }, [h]), g = S.useCallback((x, C) => {
    if (p.clear(), (x == null ? void 0 : x.type) === "touchend" && y.current) {
      y.current(), y.current = null, p.start(0, () => {
        g(x, C);
      });
      return;
    }
    y.current = null, u((E) => E.length > 0 ? E.slice(1) : E), d.current = C;
  }, [p]);
  return S.useImperativeHandle(n, () => ({ pulsate: m, start: h, stop: g }), [m, h, g]), b.jsx(g2, k({ className: q(tn.root, i.root, s), ref: v }, l, { children: b.jsx(vp, { component: null, exit: true, children: a }) }));
});
function x2(e3) {
  return ue("MuiButtonBase", e3);
}
const S2 = se("MuiButtonBase", ["root", "disabled", "focusVisible"]), b2 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], w2 = (e3) => {
  const { disabled: t, focusVisible: n, focusVisibleClassName: r, classes: o } = e3, s = pe({ root: ["root", t && "disabled", n && "focusVisible"] }, x2, o);
  return n && r && (s.root += ` ${r}`), s;
}, C2 = Y("button", { name: "MuiButtonBase", slot: "Root", overridesResolver: (e3, t) => t.root })({ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", boxSizing: "border-box", WebkitTapHighlightColor: "transparent", backgroundColor: "transparent", outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: "pointer", userSelect: "none", verticalAlign: "middle", MozAppearance: "none", WebkitAppearance: "none", textDecoration: "none", color: "inherit", "&::-moz-focus-inner": { borderStyle: "none" }, [`&.${S2.disabled}`]: { pointerEvents: "none", cursor: "default" }, "@media print": { colorAdjust: "exact" } }), Us = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiButtonBase" }), { action: o, centerRipple: i = false, children: s, className: l, component: a = "button", disabled: u = false, disableRipple: c = false, disableTouchRipple: d = false, focusRipple: f = false, LinkComponent: p = "a", onBlur: y, onClick: v, onContextMenu: w, onDragLeave: h, onFocus: m, onFocusVisible: g, onKeyDown: x, onKeyUp: C, onMouseDown: E, onMouseLeave: P, onMouseUp: $, onTouchEnd: L, onTouchMove: T, onTouchStart: D, tabIndex: z = 0, TouchRippleProps: M, touchRippleRef: I, type: A } = r, j = G(r, b2), O = S.useRef(null), R = S.useRef(null), N = it(R, I), { isFocusVisibleRef: _, onFocus: B, onBlur: W, ref: V } = dp(), [K, te] = S.useState(false);
  u && K && te(false), S.useImperativeHandle(o, () => ({ focusVisible: () => {
    te(true), O.current.focus();
  } }), []);
  const [H, ie] = S.useState(false);
  S.useEffect(() => {
    ie(true);
  }, []);
  const ge = H && !c && !u;
  S.useEffect(() => {
    K && f && !c && H && R.current.pulsate();
  }, [c, f, K, H]);
  function me(J, Ue, $t = d) {
    return Ut((At) => (Ue && Ue(At), !$t && R.current && R.current[J](At), true));
  }
  const Ie = me("start", E), re = me("stop", w), Ee = me("stop", h), oe = me("stop", $), ce = me("stop", (J) => {
    K && J.preventDefault(), P && P(J);
  }), le = me("start", D), ct = me("stop", L), Oe = me("stop", T), Te = me("stop", (J) => {
    W(J), _.current === false && te(false), y && y(J);
  }, false), tt = Ut((J) => {
    O.current || (O.current = J.currentTarget), B(J), _.current === true && (te(true), g && g(J)), m && m(J);
  }), Pe = () => {
    const J = O.current;
    return a && a !== "button" && !(J.tagName === "A" && J.href);
  }, ve = S.useRef(false), qe = Ut((J) => {
    f && !ve.current && K && R.current && J.key === " " && (ve.current = true, R.current.stop(J, () => {
      R.current.start(J);
    })), J.target === J.currentTarget && Pe() && J.key === " " && J.preventDefault(), x && x(J), J.target === J.currentTarget && Pe() && J.key === "Enter" && !u && (J.preventDefault(), v && v(J));
  }), je = Ut((J) => {
    f && J.key === " " && R.current && K && !J.defaultPrevented && (ve.current = false, R.current.stop(J, () => {
      R.current.pulsate(J);
    })), C && C(J), v && J.target === J.currentTarget && Pe() && J.key === " " && !J.defaultPrevented && v(J);
  });
  let Se = a;
  Se === "button" && (j.href || j.to) && (Se = p);
  const nt = {};
  Se === "button" ? (nt.type = A === void 0 ? "button" : A, nt.disabled = u) : (!j.href && !j.to && (nt.role = "button"), u && (nt["aria-disabled"] = u));
  const st = it(n, V, O), dt = k({}, r, { centerRipple: i, component: a, disabled: u, disableRipple: c, disableTouchRipple: d, focusRipple: f, tabIndex: z, focusVisible: K }), ye = w2(dt);
  return b.jsxs(C2, k({ as: Se, className: q(ye.root, l), ownerState: dt, onBlur: Te, onClick: v, onContextMenu: re, onFocus: tt, onKeyDown: qe, onKeyUp: je, onMouseDown: Ie, onMouseLeave: ce, onMouseUp: oe, onDragLeave: Ee, onTouchEnd: ct, onTouchMove: Oe, onTouchStart: le, ref: st, tabIndex: u ? -1 : z, type: A }, nt, j, { children: [s, ge ? b.jsx(y2, k({ ref: N, center: i }, M)) : null] }));
});
function k2(e3) {
  return ue("MuiIconButton", e3);
}
const E2 = se("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), P2 = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], R2 = (e3) => {
  const { classes: t, disabled: n, color: r, edge: o, size: i } = e3, s = { root: ["root", n && "disabled", r !== "default" && `color${Z(r)}`, o && `edge${Z(o)}`, `size${Z(i)}`] };
  return pe(s, k2, t);
}, $2 = Y(Us, { name: "MuiIconButton", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, n.color !== "default" && t[`color${Z(n.color)}`], n.edge && t[`edge${Z(n.edge)}`], t[`size${Z(n.size)}`]];
} })(({ theme: e3, ownerState: t }) => k({ textAlign: "center", flex: "0 0 auto", fontSize: e3.typography.pxToRem(24), padding: 8, borderRadius: "50%", overflow: "visible", color: (e3.vars || e3).palette.action.active, transition: e3.transitions.create("background-color", { duration: e3.transitions.duration.shortest }) }, !t.disableRipple && { "&:hover": { backgroundColor: e3.vars ? `rgba(${e3.vars.palette.action.activeChannel} / ${e3.vars.palette.action.hoverOpacity})` : Mt(e3.palette.action.active, e3.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } } }, t.edge === "start" && { marginLeft: t.size === "small" ? -3 : -12 }, t.edge === "end" && { marginRight: t.size === "small" ? -3 : -12 }), ({ theme: e3, ownerState: t }) => {
  var n;
  const r = (n = (e3.vars || e3).palette) == null ? void 0 : n[t.color];
  return k({}, t.color === "inherit" && { color: "inherit" }, t.color !== "inherit" && t.color !== "default" && k({ color: r == null ? void 0 : r.main }, !t.disableRipple && { "&:hover": k({}, r && { backgroundColor: e3.vars ? `rgba(${r.mainChannel} / ${e3.vars.palette.action.hoverOpacity})` : Mt(r.main, e3.palette.action.hoverOpacity) }, { "@media (hover: none)": { backgroundColor: "transparent" } }) }), t.size === "small" && { padding: 5, fontSize: e3.typography.pxToRem(18) }, t.size === "large" && { padding: 12, fontSize: e3.typography.pxToRem(28) }, { [`&.${E2.disabled}`]: { backgroundColor: "transparent", color: (e3.vars || e3).palette.action.disabled } });
}), Vd = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiIconButton" }), { edge: o = false, children: i, className: s, color: l = "default", disabled: a = false, disableFocusRipple: u = false, size: c = "medium" } = r, d = G(r, P2), f = k({}, r, { edge: o, color: l, disabled: a, disableFocusRipple: u, size: c }), p = R2(f);
  return b.jsx($2, k({ className: q(p.root, s), centerRipple: true, focusRipple: !u, disabled: a, ref: n }, d, { ownerState: f, children: i }));
});
function T2(e3) {
  return ue("MuiTypography", e3);
}
se("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const O2 = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], M2 = (e3) => {
  const { align: t, gutterBottom: n, noWrap: r, paragraph: o, variant: i, classes: s } = e3, l = { root: ["root", i, e3.align !== "inherit" && `align${Z(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"] };
  return pe(l, T2, s);
}, L2 = Y("span", { name: "MuiTypography", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${Z(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
} })(({ theme: e3, ownerState: t }) => k({ margin: 0 }, t.variant === "inherit" && { font: "inherit" }, t.variant !== "inherit" && e3.typography[t.variant], t.align !== "inherit" && { textAlign: t.align }, t.noWrap && { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, t.gutterBottom && { marginBottom: "0.35em" }, t.paragraph && { marginBottom: 16 })), Zm = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6", subtitle1: "h6", subtitle2: "h6", body1: "p", body2: "p", inherit: "p" }, N2 = { primary: "primary.main", textPrimary: "text.primary", secondary: "secondary.main", textSecondary: "text.secondary", error: "error.main" }, _2 = (e3) => N2[e3] || e3, De = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiTypography" }), o = _2(r.color), i = mu(k({}, r, { color: o })), { align: s = "inherit", className: l, component: a, gutterBottom: u = false, noWrap: c = false, paragraph: d = false, variant: f = "body1", variantMapping: p = Zm } = i, y = G(i, O2), v = k({}, i, { align: s, color: o, className: l, component: a, gutterBottom: u, noWrap: c, paragraph: d, variant: f, variantMapping: p }), w = a || (d ? "p" : p[f] || Zm[f]) || "span", h = M2(v);
  return b.jsx(L2, k({ as: w, ref: n, ownerState: v, className: q(h.root, l) }, y));
});
var xp = {};
Object.defineProperty(xp, "__esModule", { value: true });
var J0 = xp.default = void 0, I2 = z2(S), j2 = X0;
function e1(e3) {
  if (typeof WeakMap != "function") return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (e1 = function(r) {
    return r ? n : t;
  })(e3);
}
function z2(e3, t) {
  if (e3 && e3.__esModule) return e3;
  if (e3 === null || typeof e3 != "object" && typeof e3 != "function") return { default: e3 };
  var n = e1(t);
  if (n && n.has(e3)) return n.get(e3);
  var r = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e3) if (i !== "default" && Object.prototype.hasOwnProperty.call(e3, i)) {
    var s = o ? Object.getOwnPropertyDescriptor(e3, i) : null;
    s && (s.get || s.set) ? Object.defineProperty(r, i, s) : r[i] = e3[i];
  }
  return r.default = e3, n && n.set(e3, r), r;
}
function A2(e3) {
  return Object.keys(e3).length === 0;
}
function D2(e3 = null) {
  const t = I2.useContext(j2.ThemeContext);
  return !t || A2(t) ? e3 : t;
}
J0 = xp.default = D2;
var It = "top", hn = "bottom", mn = "right", jt = "left", Sp = "auto", Vs = [It, hn, mn, jt], Ko = "start", Cs = "end", F2 = "clippingParents", t1 = "viewport", Ci = "popper", B2 = "reference", Jm = Vs.reduce(function(e3, t) {
  return e3.concat([t + "-" + Ko, t + "-" + Cs]);
}, []), n1 = [].concat(Vs, [Sp]).reduce(function(e3, t) {
  return e3.concat([t, t + "-" + Ko, t + "-" + Cs]);
}, []), W2 = "beforeRead", U2 = "read", V2 = "afterRead", H2 = "beforeMain", K2 = "main", Y2 = "afterMain", X2 = "beforeWrite", G2 = "write", Q2 = "afterWrite", q2 = [W2, U2, V2, H2, K2, Y2, X2, G2, Q2];
function Vn(e3) {
  return e3 ? (e3.nodeName || "").toLowerCase() : null;
}
function Gt(e3) {
  if (e3 == null) return window;
  if (e3.toString() !== "[object Window]") {
    var t = e3.ownerDocument;
    return t && t.defaultView || window;
  }
  return e3;
}
function Jr(e3) {
  var t = Gt(e3).Element;
  return e3 instanceof t || e3 instanceof Element;
}
function an(e3) {
  var t = Gt(e3).HTMLElement;
  return e3 instanceof t || e3 instanceof HTMLElement;
}
function bp(e3) {
  if (typeof ShadowRoot > "u") return false;
  var t = Gt(e3).ShadowRoot;
  return e3 instanceof t || e3 instanceof ShadowRoot;
}
function Z2(e3) {
  var t = e3.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !an(i) || !Vn(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === false ? i.removeAttribute(s) : i.setAttribute(s, l === true ? "" : l);
    }));
  });
}
function J2(e3) {
  var t = e3.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], i = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = s.reduce(function(a, u) {
        return a[u] = "", a;
      }, {});
      !an(o) || !Vn(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
        o.removeAttribute(a);
      }));
    });
  };
}
const eR = { name: "applyStyles", enabled: true, phase: "write", fn: Z2, effect: J2, requires: ["computeStyles"] };
function Wn(e3) {
  return e3.split("-")[0];
}
var Kr = Math.max, ka = Math.min, Yo = Math.round;
function Hd() {
  var e3 = navigator.userAgentData;
  return e3 != null && e3.brands && Array.isArray(e3.brands) ? e3.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function r1() {
  return !/^((?!chrome|android).)*safari/i.test(Hd());
}
function Xo(e3, t, n) {
  t === void 0 && (t = false), n === void 0 && (n = false);
  var r = e3.getBoundingClientRect(), o = 1, i = 1;
  t && an(e3) && (o = e3.offsetWidth > 0 && Yo(r.width) / e3.offsetWidth || 1, i = e3.offsetHeight > 0 && Yo(r.height) / e3.offsetHeight || 1);
  var s = Jr(e3) ? Gt(e3) : window, l = s.visualViewport, a = !r1() && n, u = (r.left + (a && l ? l.offsetLeft : 0)) / o, c = (r.top + (a && l ? l.offsetTop : 0)) / i, d = r.width / o, f = r.height / i;
  return { width: d, height: f, top: c, right: u + d, bottom: c + f, left: u, x: u, y: c };
}
function wp(e3) {
  var t = Xo(e3), n = e3.offsetWidth, r = e3.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e3.offsetLeft, y: e3.offsetTop, width: n, height: r };
}
function o1(e3, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e3.contains(t)) return true;
  if (n && bp(n)) {
    var r = t;
    do {
      if (r && e3.isSameNode(r)) return true;
      r = r.parentNode || r.host;
    } while (r);
  }
  return false;
}
function nr(e3) {
  return Gt(e3).getComputedStyle(e3);
}
function tR(e3) {
  return ["table", "td", "th"].indexOf(Vn(e3)) >= 0;
}
function Lr(e3) {
  return ((Jr(e3) ? e3.ownerDocument : e3.document) || window.document).documentElement;
}
function Tu(e3) {
  return Vn(e3) === "html" ? e3 : e3.assignedSlot || e3.parentNode || (bp(e3) ? e3.host : null) || Lr(e3);
}
function eg(e3) {
  return !an(e3) || nr(e3).position === "fixed" ? null : e3.offsetParent;
}
function nR(e3) {
  var t = /firefox/i.test(Hd()), n = /Trident/i.test(Hd());
  if (n && an(e3)) {
    var r = nr(e3);
    if (r.position === "fixed") return null;
  }
  var o = Tu(e3);
  for (bp(o) && (o = o.host); an(o) && ["html", "body"].indexOf(Vn(o)) < 0; ) {
    var i = nr(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function Hs(e3) {
  for (var t = Gt(e3), n = eg(e3); n && tR(n) && nr(n).position === "static"; ) n = eg(n);
  return n && (Vn(n) === "html" || Vn(n) === "body" && nr(n).position === "static") ? t : n || nR(e3) || t;
}
function Cp(e3) {
  return ["top", "bottom"].indexOf(e3) >= 0 ? "x" : "y";
}
function Xi(e3, t, n) {
  return Kr(e3, ka(t, n));
}
function rR(e3, t, n) {
  var r = Xi(e3, t, n);
  return r > n ? n : r;
}
function i1() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function s1(e3) {
  return Object.assign({}, i1(), e3);
}
function l1(e3, t) {
  return t.reduce(function(n, r) {
    return n[r] = e3, n;
  }, {});
}
var oR = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, { placement: n.placement })) : t, s1(typeof t != "number" ? t : l1(t, Vs));
};
function iR(e3) {
  var t, n = e3.state, r = e3.name, o = e3.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = Wn(n.placement), a = Cp(l), u = [jt, mn].indexOf(l) >= 0, c = u ? "height" : "width";
  if (!(!i || !s)) {
    var d = oR(o.padding, n), f = wp(i), p = a === "y" ? It : jt, y = a === "y" ? hn : mn, v = n.rects.reference[c] + n.rects.reference[a] - s[a] - n.rects.popper[c], w = s[a] - n.rects.reference[a], h = Hs(i), m = h ? a === "y" ? h.clientHeight || 0 : h.clientWidth || 0 : 0, g = v / 2 - w / 2, x = d[p], C = m - f[c] - d[y], E = m / 2 - f[c] / 2 + g, P = Xi(x, E, C), $ = a;
    n.modifiersData[r] = (t = {}, t[$] = P, t.centerOffset = P - E, t);
  }
}
function sR(e3) {
  var t = e3.state, n = e3.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || o1(t.elements.popper, o) && (t.elements.arrow = o));
}
const lR = { name: "arrow", enabled: true, phase: "main", fn: iR, effect: sR, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Go(e3) {
  return e3.split("-")[1];
}
var aR = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function uR(e3, t) {
  var n = e3.x, r = e3.y, o = t.devicePixelRatio || 1;
  return { x: Yo(n * o) / o || 0, y: Yo(r * o) / o || 0 };
}
function tg(e3) {
  var t, n = e3.popper, r = e3.popperRect, o = e3.placement, i = e3.variation, s = e3.offsets, l = e3.position, a = e3.gpuAcceleration, u = e3.adaptive, c = e3.roundOffsets, d = e3.isFixed, f = s.x, p = f === void 0 ? 0 : f, y = s.y, v = y === void 0 ? 0 : y, w = typeof c == "function" ? c({ x: p, y: v }) : { x: p, y: v };
  p = w.x, v = w.y;
  var h = s.hasOwnProperty("x"), m = s.hasOwnProperty("y"), g = jt, x = It, C = window;
  if (u) {
    var E = Hs(n), P = "clientHeight", $ = "clientWidth";
    if (E === Gt(n) && (E = Lr(n), nr(E).position !== "static" && l === "absolute" && (P = "scrollHeight", $ = "scrollWidth")), E = E, o === It || (o === jt || o === mn) && i === Cs) {
      x = hn;
      var L = d && E === C && C.visualViewport ? C.visualViewport.height : E[P];
      v -= L - r.height, v *= a ? 1 : -1;
    }
    if (o === jt || (o === It || o === hn) && i === Cs) {
      g = mn;
      var T = d && E === C && C.visualViewport ? C.visualViewport.width : E[$];
      p -= T - r.width, p *= a ? 1 : -1;
    }
  }
  var D = Object.assign({ position: l }, u && aR), z = c === true ? uR({ x: p, y: v }, Gt(n)) : { x: p, y: v };
  if (p = z.x, v = z.y, a) {
    var M;
    return Object.assign({}, D, (M = {}, M[x] = m ? "0" : "", M[g] = h ? "0" : "", M.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + v + "px)" : "translate3d(" + p + "px, " + v + "px, 0)", M));
  }
  return Object.assign({}, D, (t = {}, t[x] = m ? v + "px" : "", t[g] = h ? p + "px" : "", t.transform = "", t));
}
function cR(e3) {
  var t = e3.state, n = e3.options, r = n.gpuAcceleration, o = r === void 0 ? true : r, i = n.adaptive, s = i === void 0 ? true : i, l = n.roundOffsets, a = l === void 0 ? true : l, u = { placement: Wn(t.placement), variation: Go(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, tg(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: a })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, tg(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: a })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
const dR = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: cR, data: {} };
var hl = { passive: true };
function fR(e3) {
  var t = e3.state, n = e3.instance, r = e3.options, o = r.scroll, i = o === void 0 ? true : o, s = r.resize, l = s === void 0 ? true : s, a = Gt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, hl);
  }), l && a.addEventListener("resize", n.update, hl), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, hl);
    }), l && a.removeEventListener("resize", n.update, hl);
  };
}
const pR = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: fR, data: {} };
var hR = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Dl(e3) {
  return e3.replace(/left|right|bottom|top/g, function(t) {
    return hR[t];
  });
}
var mR = { start: "end", end: "start" };
function ng(e3) {
  return e3.replace(/start|end/g, function(t) {
    return mR[t];
  });
}
function kp(e3) {
  var t = Gt(e3), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Ep(e3) {
  return Xo(Lr(e3)).left + kp(e3).scrollLeft;
}
function gR(e3, t) {
  var n = Gt(e3), r = Lr(e3), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = r1();
    (u || !u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return { width: i, height: s, x: l + Ep(e3), y: a };
}
function vR(e3) {
  var t, n = Lr(e3), r = kp(e3), o = (t = e3.ownerDocument) == null ? void 0 : t.body, i = Kr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Kr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + Ep(e3), a = -r.scrollTop;
  return nr(o || n).direction === "rtl" && (l += Kr(n.clientWidth, o ? o.clientWidth : 0) - i), { width: i, height: s, x: l, y: a };
}
function Pp(e3) {
  var t = nr(e3), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function a1(e3) {
  return ["html", "body", "#document"].indexOf(Vn(e3)) >= 0 ? e3.ownerDocument.body : an(e3) && Pp(e3) ? e3 : a1(Tu(e3));
}
function Gi(e3, t) {
  var n;
  t === void 0 && (t = []);
  var r = a1(e3), o = r === ((n = e3.ownerDocument) == null ? void 0 : n.body), i = Gt(r), s = o ? [i].concat(i.visualViewport || [], Pp(r) ? r : []) : r, l = t.concat(s);
  return o ? l : l.concat(Gi(Tu(s)));
}
function Kd(e3) {
  return Object.assign({}, e3, { left: e3.x, top: e3.y, right: e3.x + e3.width, bottom: e3.y + e3.height });
}
function yR(e3, t) {
  var n = Xo(e3, false, t === "fixed");
  return n.top = n.top + e3.clientTop, n.left = n.left + e3.clientLeft, n.bottom = n.top + e3.clientHeight, n.right = n.left + e3.clientWidth, n.width = e3.clientWidth, n.height = e3.clientHeight, n.x = n.left, n.y = n.top, n;
}
function rg(e3, t, n) {
  return t === t1 ? Kd(gR(e3, n)) : Jr(t) ? yR(t, n) : Kd(vR(Lr(e3)));
}
function xR(e3) {
  var t = Gi(Tu(e3)), n = ["absolute", "fixed"].indexOf(nr(e3).position) >= 0, r = n && an(e3) ? Hs(e3) : e3;
  return Jr(r) ? t.filter(function(o) {
    return Jr(o) && o1(o, r) && Vn(o) !== "body";
  }) : [];
}
function SR(e3, t, n, r) {
  var o = t === "clippingParents" ? xR(e3) : [].concat(t), i = [].concat(o, [n]), s = i[0], l = i.reduce(function(a, u) {
    var c = rg(e3, u, r);
    return a.top = Kr(c.top, a.top), a.right = ka(c.right, a.right), a.bottom = ka(c.bottom, a.bottom), a.left = Kr(c.left, a.left), a;
  }, rg(e3, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function u1(e3) {
  var t = e3.reference, n = e3.element, r = e3.placement, o = r ? Wn(r) : null, i = r ? Go(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
  switch (o) {
    case It:
      a = { x: s, y: t.y - n.height };
      break;
    case hn:
      a = { x: s, y: t.y + t.height };
      break;
    case mn:
      a = { x: t.x + t.width, y: l };
      break;
    case jt:
      a = { x: t.x - n.width, y: l };
      break;
    default:
      a = { x: t.x, y: t.y };
  }
  var u = o ? Cp(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case Ko:
        a[u] = a[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Cs:
        a[u] = a[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return a;
}
function ks(e3, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e3.placement : r, i = n.strategy, s = i === void 0 ? e3.strategy : i, l = n.boundary, a = l === void 0 ? F2 : l, u = n.rootBoundary, c = u === void 0 ? t1 : u, d = n.elementContext, f = d === void 0 ? Ci : d, p = n.altBoundary, y = p === void 0 ? false : p, v = n.padding, w = v === void 0 ? 0 : v, h = s1(typeof w != "number" ? w : l1(w, Vs)), m = f === Ci ? B2 : Ci, g = e3.rects.popper, x = e3.elements[y ? m : f], C = SR(Jr(x) ? x : x.contextElement || Lr(e3.elements.popper), a, c, s), E = Xo(e3.elements.reference), P = u1({ reference: E, element: g, placement: o }), $ = Kd(Object.assign({}, g, P)), L = f === Ci ? $ : E, T = { top: C.top - L.top + h.top, bottom: L.bottom - C.bottom + h.bottom, left: C.left - L.left + h.left, right: L.right - C.right + h.right }, D = e3.modifiersData.offset;
  if (f === Ci && D) {
    var z = D[o];
    Object.keys(T).forEach(function(M) {
      var I = [mn, hn].indexOf(M) >= 0 ? 1 : -1, A = [It, hn].indexOf(M) >= 0 ? "y" : "x";
      T[M] += z[A] * I;
    });
  }
  return T;
}
function bR(e3, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, u = a === void 0 ? n1 : a, c = Go(r), d = c ? l ? Jm : Jm.filter(function(y) {
    return Go(y) === c;
  }) : Vs, f = d.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(y, v) {
    return y[v] = ks(e3, { placement: v, boundary: o, rootBoundary: i, padding: s })[Wn(v)], y;
  }, {});
  return Object.keys(p).sort(function(y, v) {
    return p[y] - p[v];
  });
}
function wR(e3) {
  if (Wn(e3) === Sp) return [];
  var t = Dl(e3);
  return [ng(e3), t, ng(t)];
}
function CR(e3) {
  var t = e3.state, n = e3.options, r = e3.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? true : o, s = n.altAxis, l = s === void 0 ? true : s, a = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, y = p === void 0 ? true : p, v = n.allowedAutoPlacements, w = t.options.placement, h = Wn(w), m = h === w, g = a || (m || !y ? [Dl(w)] : wR(w)), x = [w].concat(g).reduce(function(K, te) {
      return K.concat(Wn(te) === Sp ? bR(t, { placement: te, boundary: c, rootBoundary: d, padding: u, flipVariations: y, allowedAutoPlacements: v }) : te);
    }, []), C = t.rects.reference, E = t.rects.popper, P = /* @__PURE__ */ new Map(), $ = true, L = x[0], T = 0; T < x.length; T++) {
      var D = x[T], z = Wn(D), M = Go(D) === Ko, I = [It, hn].indexOf(z) >= 0, A = I ? "width" : "height", j = ks(t, { placement: D, boundary: c, rootBoundary: d, altBoundary: f, padding: u }), O = I ? M ? mn : jt : M ? hn : It;
      C[A] > E[A] && (O = Dl(O));
      var R = Dl(O), N = [];
      if (i && N.push(j[z] <= 0), l && N.push(j[O] <= 0, j[R] <= 0), N.every(function(K) {
        return K;
      })) {
        L = D, $ = false;
        break;
      }
      P.set(D, N);
    }
    if ($) for (var _ = y ? 3 : 1, B = function(te) {
      var H = x.find(function(ie) {
        var ge = P.get(ie);
        if (ge) return ge.slice(0, te).every(function(me) {
          return me;
        });
      });
      if (H) return L = H, "break";
    }, W = _; W > 0; W--) {
      var V = B(W);
      if (V === "break") break;
    }
    t.placement !== L && (t.modifiersData[r]._skip = true, t.placement = L, t.reset = true);
  }
}
const kR = { name: "flip", enabled: true, phase: "main", fn: CR, requiresIfExists: ["offset"], data: { _skip: false } };
function og(e3, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e3.top - t.height - n.y, right: e3.right - t.width + n.x, bottom: e3.bottom - t.height + n.y, left: e3.left - t.width - n.x };
}
function ig(e3) {
  return [It, mn, hn, jt].some(function(t) {
    return e3[t] >= 0;
  });
}
function ER(e3) {
  var t = e3.state, n = e3.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = ks(t, { elementContext: "reference" }), l = ks(t, { altBoundary: true }), a = og(s, r), u = og(l, o, i), c = ig(a), d = ig(u);
  t.modifiersData[n] = { referenceClippingOffsets: a, popperEscapeOffsets: u, isReferenceHidden: c, hasPopperEscaped: d }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": c, "data-popper-escaped": d });
}
const PR = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: ER };
function RR(e3, t, n) {
  var r = Wn(e3), o = [jt, It].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, { placement: e3 })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [jt, mn].indexOf(r) >= 0 ? { x: l, y: s } : { x: s, y: l };
}
function $R(e3) {
  var t = e3.state, n = e3.options, r = e3.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = n1.reduce(function(c, d) {
    return c[d] = RR(d, t.rects, i), c;
  }, {}), l = s[t.placement], a = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const TR = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: $R };
function OR(e3) {
  var t = e3.state, n = e3.name;
  t.modifiersData[n] = u1({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
const MR = { name: "popperOffsets", enabled: true, phase: "read", fn: OR, data: {} };
function LR(e3) {
  return e3 === "x" ? "y" : "x";
}
function NR(e3) {
  var t = e3.state, n = e3.options, r = e3.name, o = n.mainAxis, i = o === void 0 ? true : o, s = n.altAxis, l = s === void 0 ? false : s, a = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? true : f, y = n.tetherOffset, v = y === void 0 ? 0 : y, w = ks(t, { boundary: a, rootBoundary: u, padding: d, altBoundary: c }), h = Wn(t.placement), m = Go(t.placement), g = !m, x = Cp(h), C = LR(x), E = t.modifiersData.popperOffsets, P = t.rects.reference, $ = t.rects.popper, L = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, T = typeof L == "number" ? { mainAxis: L, altAxis: L } : Object.assign({ mainAxis: 0, altAxis: 0 }, L), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, z = { x: 0, y: 0 };
  if (E) {
    if (i) {
      var M, I = x === "y" ? It : jt, A = x === "y" ? hn : mn, j = x === "y" ? "height" : "width", O = E[x], R = O + w[I], N = O - w[A], _ = p ? -$[j] / 2 : 0, B = m === Ko ? P[j] : $[j], W = m === Ko ? -$[j] : -P[j], V = t.elements.arrow, K = p && V ? wp(V) : { width: 0, height: 0 }, te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : i1(), H = te[I], ie = te[A], ge = Xi(0, P[j], K[j]), me = g ? P[j] / 2 - _ - ge - H - T.mainAxis : B - ge - H - T.mainAxis, Ie = g ? -P[j] / 2 + _ + ge + ie + T.mainAxis : W + ge + ie + T.mainAxis, re = t.elements.arrow && Hs(t.elements.arrow), Ee = re ? x === "y" ? re.clientTop || 0 : re.clientLeft || 0 : 0, oe = (M = D == null ? void 0 : D[x]) != null ? M : 0, ce = O + me - oe - Ee, le = O + Ie - oe, ct = Xi(p ? ka(R, ce) : R, O, p ? Kr(N, le) : N);
      E[x] = ct, z[x] = ct - O;
    }
    if (l) {
      var Oe, Te = x === "x" ? It : jt, tt = x === "x" ? hn : mn, Pe = E[C], ve = C === "y" ? "height" : "width", qe = Pe + w[Te], je = Pe - w[tt], Se = [It, jt].indexOf(h) !== -1, nt = (Oe = D == null ? void 0 : D[C]) != null ? Oe : 0, st = Se ? qe : Pe - P[ve] - $[ve] - nt + T.altAxis, dt = Se ? Pe + P[ve] + $[ve] - nt - T.altAxis : je, ye = p && Se ? rR(st, Pe, dt) : Xi(p ? st : qe, Pe, p ? dt : je);
      E[C] = ye, z[C] = ye - Pe;
    }
    t.modifiersData[r] = z;
  }
}
const _R = { name: "preventOverflow", enabled: true, phase: "main", fn: NR, requiresIfExists: ["offset"] };
function IR(e3) {
  return { scrollLeft: e3.scrollLeft, scrollTop: e3.scrollTop };
}
function jR(e3) {
  return e3 === Gt(e3) || !an(e3) ? kp(e3) : IR(e3);
}
function zR(e3) {
  var t = e3.getBoundingClientRect(), n = Yo(t.width) / e3.offsetWidth || 1, r = Yo(t.height) / e3.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function AR(e3, t, n) {
  n === void 0 && (n = false);
  var r = an(t), o = an(t) && zR(t), i = Lr(t), s = Xo(e3, o, n), l = { scrollLeft: 0, scrollTop: 0 }, a = { x: 0, y: 0 };
  return (r || !r && !n) && ((Vn(t) !== "body" || Pp(i)) && (l = jR(t)), an(t) ? (a = Xo(t, true), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = Ep(i))), { x: s.left + l.scrollLeft - a.x, y: s.top + l.scrollTop - a.y, width: s.width, height: s.height };
}
function DR(e3) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e3.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(l) {
      if (!n.has(l)) {
        var a = t.get(l);
        a && o(a);
      }
    }), r.push(i);
  }
  return e3.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
function FR(e3) {
  var t = DR(e3);
  return q2.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function BR(e3) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e3());
      });
    })), t;
  };
}
function WR(e3) {
  var t = e3.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var sg = { placement: "bottom", modifiers: [], strategy: "absolute" };
function lg() {
  for (var e3 = arguments.length, t = new Array(e3), n = 0; n < e3; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function UR(e3) {
  e3 === void 0 && (e3 = {});
  var t = e3, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? sg : o;
  return function(l, a, u) {
    u === void 0 && (u = i);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, sg, i), modifiersData: {}, elements: { reference: l, popper: a }, attributes: {}, styles: {} }, d = [], f = false, p = { state: c, setOptions: function(h) {
      var m = typeof h == "function" ? h(c.options) : h;
      v(), c.options = Object.assign({}, i, c.options, m), c.scrollParents = { reference: Jr(l) ? Gi(l) : l.contextElement ? Gi(l.contextElement) : [], popper: Gi(a) };
      var g = FR(WR([].concat(r, c.options.modifiers)));
      return c.orderedModifiers = g.filter(function(x) {
        return x.enabled;
      }), y(), p.update();
    }, forceUpdate: function() {
      if (!f) {
        var h = c.elements, m = h.reference, g = h.popper;
        if (lg(m, g)) {
          c.rects = { reference: AR(m, Hs(g), c.options.strategy === "fixed"), popper: wp(g) }, c.reset = false, c.placement = c.options.placement, c.orderedModifiers.forEach(function(T) {
            return c.modifiersData[T.name] = Object.assign({}, T.data);
          });
          for (var x = 0; x < c.orderedModifiers.length; x++) {
            if (c.reset === true) {
              c.reset = false, x = -1;
              continue;
            }
            var C = c.orderedModifiers[x], E = C.fn, P = C.options, $ = P === void 0 ? {} : P, L = C.name;
            typeof E == "function" && (c = E({ state: c, options: $, name: L, instance: p }) || c);
          }
        }
      }
    }, update: BR(function() {
      return new Promise(function(w) {
        p.forceUpdate(), w(c);
      });
    }), destroy: function() {
      v(), f = true;
    } };
    if (!lg(l, a)) return p;
    p.setOptions(u).then(function(w) {
      !f && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function y() {
      c.orderedModifiers.forEach(function(w) {
        var h = w.name, m = w.options, g = m === void 0 ? {} : m, x = w.effect;
        if (typeof x == "function") {
          var C = x({ state: c, name: h, instance: p, options: g }), E = function() {
          };
          d.push(C || E);
        }
      });
    }
    function v() {
      d.forEach(function(w) {
        return w();
      }), d = [];
    }
    return p;
  };
}
var VR = [pR, MR, dR, eR, TR, kR, _R, lR, PR], HR = UR({ defaultModifiers: VR });
function KR(e3) {
  return typeof e3 == "function" ? e3() : e3;
}
const c1 = S.forwardRef(function(t, n) {
  const { children: r, container: o, disablePortal: i = false } = t, [s, l] = S.useState(null), a = it(S.isValidElement(r) ? ri(r) : null, n);
  if (fn(() => {
    i || l(KR(o) || document.body);
  }, [o, i]), fn(() => {
    if (s && !i) return va(n, s), () => {
      va(n, null);
    };
  }, [n, s, i]), i) {
    if (S.isValidElement(r)) {
      const u = { ref: a };
      return S.cloneElement(r, u);
    }
    return b.jsx(S.Fragment, { children: r });
  }
  return b.jsx(S.Fragment, { children: s && Hf.createPortal(r, s) });
});
function YR(e3) {
  return ue("MuiPopper", e3);
}
se("MuiPopper", ["root"]);
const XR = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], GR = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function QR(e3, t) {
  if (t === "ltr") return e3;
  switch (e3) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e3;
  }
}
function Yd(e3) {
  return typeof e3 == "function" ? e3() : e3;
}
function qR(e3) {
  return e3.nodeType !== void 0;
}
const ZR = (e3) => {
  const { classes: t } = e3;
  return pe({ root: ["root"] }, YR, t);
}, JR = {}, e$ = S.forwardRef(function(t, n) {
  var r;
  const { anchorEl: o, children: i, direction: s, disablePortal: l, modifiers: a, open: u, placement: c, popperOptions: d, popperRef: f, slotProps: p = {}, slots: y = {}, TransitionProps: v } = t, w = G(t, XR), h = S.useRef(null), m = it(h, n), g = S.useRef(null), x = it(g, f), C = S.useRef(x);
  fn(() => {
    C.current = x;
  }, [x]), S.useImperativeHandle(f, () => g.current, []);
  const E = QR(c, s), [P, $] = S.useState(E), [L, T] = S.useState(Yd(o));
  S.useEffect(() => {
    g.current && g.current.forceUpdate();
  }), S.useEffect(() => {
    o && T(Yd(o));
  }, [o]), fn(() => {
    if (!L || !u) return;
    const A = (R) => {
      $(R.placement);
    };
    let j = [{ name: "preventOverflow", options: { altBoundary: l } }, { name: "flip", options: { altBoundary: l } }, { name: "onUpdate", enabled: true, phase: "afterWrite", fn: ({ state: R }) => {
      A(R);
    } }];
    a != null && (j = j.concat(a)), d && d.modifiers != null && (j = j.concat(d.modifiers));
    const O = HR(L, h.current, k({ placement: E }, d, { modifiers: j }));
    return C.current(O), () => {
      O.destroy(), C.current(null);
    };
  }, [L, l, a, u, d, E]);
  const D = { placement: P };
  v !== null && (D.TransitionProps = v);
  const z = ZR(t), M = (r = y.root) != null ? r : "div", I = Tn({ elementType: M, externalSlotProps: p.root, externalForwardedProps: w, additionalProps: { role: "tooltip", ref: m }, ownerState: t, className: z.root });
  return b.jsx(M, k({}, I, { children: typeof i == "function" ? i(D) : i }));
}), t$ = S.forwardRef(function(t, n) {
  const { anchorEl: r, children: o, container: i, direction: s = "ltr", disablePortal: l = false, keepMounted: a = false, modifiers: u, open: c, placement: d = "bottom", popperOptions: f = JR, popperRef: p, style: y, transition: v = false, slotProps: w = {}, slots: h = {} } = t, m = G(t, GR), [g, x] = S.useState(true), C = () => {
    x(false);
  }, E = () => {
    x(true);
  };
  if (!a && !c && (!v || g)) return null;
  let P;
  if (i) P = i;
  else if (r) {
    const T = Yd(r);
    P = T && qR(T) ? gt(T).body : gt(null).body;
  }
  const $ = !c && a && (!v || g) ? "none" : void 0, L = v ? { in: c, onEnter: C, onExited: E } : void 0;
  return b.jsx(c1, { disablePortal: l, container: P, children: b.jsx(e$, k({ anchorEl: r, direction: s, disablePortal: l, modifiers: u, ref: n, open: v ? !g : c, placement: d, popperOptions: f, popperRef: p, slotProps: w, slots: h }, m, { style: k({ position: "fixed", top: 0, left: 0, display: $ }, y), TransitionProps: L, children: o })) });
}), n$ = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], r$ = Y(t$, { name: "MuiPopper", slot: "Root", overridesResolver: (e3, t) => t.root })({}), d1 = S.forwardRef(function(t, n) {
  var r;
  const o = J0(), i = he({ props: t, name: "MuiPopper" }), { anchorEl: s, component: l, components: a, componentsProps: u, container: c, disablePortal: d, keepMounted: f, modifiers: p, open: y, placement: v, popperOptions: w, popperRef: h, transition: m, slots: g, slotProps: x } = i, C = G(i, n$), E = (r = g == null ? void 0 : g.root) != null ? r : a == null ? void 0 : a.Root, P = k({ anchorEl: s, container: c, disablePortal: d, keepMounted: f, modifiers: p, open: y, placement: v, popperOptions: w, popperRef: h, transition: m }, C);
  return b.jsx(r$, k({ as: l, direction: o == null ? void 0 : o.direction, slots: { root: E }, slotProps: x ?? u }, P, { ref: n }));
}), o$ = ["onChange", "maxRows", "minRows", "style", "value"];
function ml(e3) {
  return parseInt(e3, 10) || 0;
}
const i$ = { shadow: { visibility: "hidden", position: "absolute", overflow: "hidden", height: 0, top: 0, left: 0, transform: "translateZ(0)" } };
function s$(e3) {
  for (const t in e3) return false;
  return true;
}
function ag(e3) {
  return s$(e3) || e3.outerHeightStyle === 0 && !e3.overflowing;
}
const l$ = S.forwardRef(function(t, n) {
  const { onChange: r, maxRows: o, minRows: i = 1, style: s, value: l } = t, a = G(t, o$), { current: u } = S.useRef(l != null), c = S.useRef(null), d = it(n, c), f = S.useRef(null), p = S.useRef(null), y = S.useCallback(() => {
    const g = c.current, x = p.current;
    if (!g || !x) return;
    const E = Un(g).getComputedStyle(g);
    if (E.width === "0px") return { outerHeightStyle: 0, overflowing: false };
    x.style.width = E.width, x.value = g.value || t.placeholder || "x", x.value.slice(-1) === `
` && (x.value += " ");
    const P = E.boxSizing, $ = ml(E.paddingBottom) + ml(E.paddingTop), L = ml(E.borderBottomWidth) + ml(E.borderTopWidth), T = x.scrollHeight;
    x.value = "x";
    const D = x.scrollHeight;
    let z = T;
    i && (z = Math.max(Number(i) * D, z)), o && (z = Math.min(Number(o) * D, z)), z = Math.max(z, D);
    const M = z + (P === "border-box" ? $ + L : 0), I = Math.abs(z - T) <= 1;
    return { outerHeightStyle: M, overflowing: I };
  }, [o, i, t.placeholder]), v = Ut(() => {
    const g = c.current, x = y();
    if (!g || !x || ag(x)) return false;
    const C = x.outerHeightStyle;
    return f.current != null && f.current !== C;
  }), w = S.useCallback(() => {
    const g = c.current, x = y();
    if (!g || !x || ag(x)) return;
    const C = x.outerHeightStyle;
    f.current !== C && (f.current = C, g.style.height = `${C}px`), g.style.overflow = x.overflowing ? "hidden" : "";
  }, [y]), h = S.useRef(-1);
  fn(() => {
    const g = As(w), x = c == null ? void 0 : c.current;
    if (!x) return;
    const C = Un(x);
    C.addEventListener("resize", g);
    let E;
    return typeof ResizeObserver < "u" && (E = new ResizeObserver(() => {
      v() && (E.unobserve(x), cancelAnimationFrame(h.current), w(), h.current = requestAnimationFrame(() => {
        E.observe(x);
      }));
    }), E.observe(x)), () => {
      g.clear(), cancelAnimationFrame(h.current), C.removeEventListener("resize", g), E && E.disconnect();
    };
  }, [y, w, v]), fn(() => {
    w();
  });
  const m = (g) => {
    u || w(), r && r(g);
  };
  return b.jsxs(S.Fragment, { children: [b.jsx("textarea", k({ value: l, onChange: m, ref: d, rows: i, style: s }, a)), b.jsx("textarea", { "aria-hidden": true, className: t.className, readOnly: true, ref: p, tabIndex: -1, style: k({}, i$.shadow, s, { paddingTop: 0, paddingBottom: 0 }) })] });
});
function li({ props: e3, states: t, muiFormControl: n }) {
  return t.reduce((r, o) => (r[o] = e3[o], n && typeof e3[o] > "u" && (r[o] = n[o]), r), {});
}
const Rp = S.createContext(void 0);
function ai() {
  return S.useContext(Rp);
}
function a$(e3) {
  return b.jsx(Bk, k({}, e3, { defaultTheme: mp, themeId: Ka }));
}
function ug(e3) {
  return e3 != null && !(Array.isArray(e3) && e3.length === 0);
}
function Ea(e3, t = false) {
  return e3 && (ug(e3.value) && e3.value !== "" || t && ug(e3.defaultValue) && e3.defaultValue !== "");
}
function u$(e3) {
  return e3.startAdornment;
}
function c$(e3) {
  return ue("MuiInputBase", e3);
}
const Qo = se("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), d$ = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], Ou = (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${Z(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Mu = (e3, t) => {
  const { ownerState: n } = e3;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, f$ = (e3) => {
  const { classes: t, color: n, disabled: r, error: o, endAdornment: i, focused: s, formControl: l, fullWidth: a, hiddenLabel: u, multiline: c, readOnly: d, size: f, startAdornment: p, type: y } = e3, v = { root: ["root", `color${Z(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", f && f !== "medium" && `size${Z(f)}`, c && "multiline", p && "adornedStart", i && "adornedEnd", u && "hiddenLabel", d && "readOnly"], input: ["input", r && "disabled", y === "search" && "inputTypeSearch", c && "inputMultiline", f === "small" && "inputSizeSmall", u && "inputHiddenLabel", p && "inputAdornedStart", i && "inputAdornedEnd", d && "readOnly"] };
  return pe(v, c$, t);
}, Lu = Y("div", { name: "MuiInputBase", slot: "Root", overridesResolver: Ou })(({ theme: e3, ownerState: t }) => k({}, e3.typography.body1, { color: (e3.vars || e3).palette.text.primary, lineHeight: "1.4375em", boxSizing: "border-box", position: "relative", cursor: "text", display: "inline-flex", alignItems: "center", [`&.${Qo.disabled}`]: { color: (e3.vars || e3).palette.text.disabled, cursor: "default" } }, t.multiline && k({ padding: "4px 0 5px" }, t.size === "small" && { paddingTop: 1 }), t.fullWidth && { width: "100%" })), Nu = Y("input", { name: "MuiInputBase", slot: "Input", overridesResolver: Mu })(({ theme: e3, ownerState: t }) => {
  const n = e3.palette.mode === "light", r = k({ color: "currentColor" }, e3.vars ? { opacity: e3.vars.opacity.inputPlaceholder } : { opacity: n ? 0.42 : 0.5 }, { transition: e3.transitions.create("opacity", { duration: e3.transitions.duration.shorter }) }), o = { opacity: "0 !important" }, i = e3.vars ? { opacity: e3.vars.opacity.inputPlaceholder } : { opacity: n ? 0.42 : 0.5 };
  return k({ font: "inherit", letterSpacing: "inherit", color: "currentColor", padding: "4px 0 5px", border: 0, boxSizing: "content-box", background: "none", height: "1.4375em", margin: 0, WebkitTapHighlightColor: "transparent", display: "block", minWidth: 0, width: "100%", animationName: "mui-auto-fill-cancel", animationDuration: "10ms", "&::-webkit-input-placeholder": r, "&::-moz-placeholder": r, "&:-ms-input-placeholder": r, "&::-ms-input-placeholder": r, "&:focus": { outline: 0 }, "&:invalid": { boxShadow: "none" }, "&::-webkit-search-decoration": { WebkitAppearance: "none" }, [`label[data-shrink=false] + .${Qo.formControl} &`]: { "&::-webkit-input-placeholder": o, "&::-moz-placeholder": o, "&:-ms-input-placeholder": o, "&::-ms-input-placeholder": o, "&:focus::-webkit-input-placeholder": i, "&:focus::-moz-placeholder": i, "&:focus:-ms-input-placeholder": i, "&:focus::-ms-input-placeholder": i }, [`&.${Qo.disabled}`]: { opacity: 1, WebkitTextFillColor: (e3.vars || e3).palette.text.disabled }, "&:-webkit-autofill": { animationDuration: "5000s", animationName: "mui-auto-fill" } }, t.size === "small" && { paddingTop: 1 }, t.multiline && { height: "auto", resize: "none", padding: 0, paddingTop: 0 }, t.type === "search" && { MozAppearance: "textfield" });
}), p$ = b.jsx(a$, { styles: { "@keyframes mui-auto-fill": { from: { display: "block" } }, "@keyframes mui-auto-fill-cancel": { from: { display: "block" } } } }), $p = S.forwardRef(function(t, n) {
  var r;
  const o = he({ props: t, name: "MuiInputBase" }), { "aria-describedby": i, autoComplete: s, autoFocus: l, className: a, components: u = {}, componentsProps: c = {}, defaultValue: d, disabled: f, disableInjectingGlobalStyles: p, endAdornment: y, fullWidth: v = false, id: w, inputComponent: h = "input", inputProps: m = {}, inputRef: g, maxRows: x, minRows: C, multiline: E = false, name: P, onBlur: $, onChange: L, onClick: T, onFocus: D, onKeyDown: z, onKeyUp: M, placeholder: I, readOnly: A, renderSuffix: j, rows: O, slotProps: R = {}, slots: N = {}, startAdornment: _, type: B = "text", value: W } = o, V = G(o, d$), K = m.value != null ? m.value : W, { current: te } = S.useRef(K != null), H = S.useRef(), ie = S.useCallback((ye) => {
  }, []), ge = it(H, g, m.ref, ie), [me, Ie] = S.useState(false), re = ai(), Ee = li({ props: o, muiFormControl: re, states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"] });
  Ee.focused = re ? re.focused : me, S.useEffect(() => {
    !re && f && me && (Ie(false), $ && $());
  }, [re, f, me, $]);
  const oe = re && re.onFilled, ce = re && re.onEmpty, le = S.useCallback((ye) => {
    Ea(ye) ? oe && oe() : ce && ce();
  }, [oe, ce]);
  fn(() => {
    te && le({ value: K });
  }, [K, le, te]);
  const ct = (ye) => {
    if (Ee.disabled) {
      ye.stopPropagation();
      return;
    }
    D && D(ye), m.onFocus && m.onFocus(ye), re && re.onFocus ? re.onFocus(ye) : Ie(true);
  }, Oe = (ye) => {
    $ && $(ye), m.onBlur && m.onBlur(ye), re && re.onBlur ? re.onBlur(ye) : Ie(false);
  }, Te = (ye, ...J) => {
    if (!te) {
      const Ue = ye.target || H.current;
      if (Ue == null) throw new Error(Zr(1));
      le({ value: Ue.value });
    }
    m.onChange && m.onChange(ye, ...J), L && L(ye, ...J);
  };
  S.useEffect(() => {
    le(H.current);
  }, []);
  const tt = (ye) => {
    H.current && ye.currentTarget === ye.target && H.current.focus(), T && T(ye);
  };
  let Pe = h, ve = m;
  E && Pe === "input" && (O ? ve = k({ type: void 0, minRows: O, maxRows: O }, ve) : ve = k({ type: void 0, maxRows: x, minRows: C }, ve), Pe = l$);
  const qe = (ye) => {
    le(ye.animationName === "mui-auto-fill-cancel" ? H.current : { value: "x" });
  };
  S.useEffect(() => {
    re && re.setAdornedStart(!!_);
  }, [re, _]);
  const je = k({}, o, { color: Ee.color || "primary", disabled: Ee.disabled, endAdornment: y, error: Ee.error, focused: Ee.focused, formControl: re, fullWidth: v, hiddenLabel: Ee.hiddenLabel, multiline: E, size: Ee.size, startAdornment: _, type: B }), Se = f$(je), nt = N.root || u.Root || Lu, st = R.root || c.root || {}, dt = N.input || u.Input || Nu;
  return ve = k({}, ve, (r = R.input) != null ? r : c.input), b.jsxs(S.Fragment, { children: [!p && p$, b.jsxs(nt, k({}, st, !xa(nt) && { ownerState: k({}, je, st.ownerState) }, { ref: n, onClick: tt }, V, { className: q(Se.root, st.className, a, A && "MuiInputBase-readOnly"), children: [_, b.jsx(Rp.Provider, { value: null, children: b.jsx(dt, k({ ownerState: je, "aria-invalid": Ee.error, "aria-describedby": i, autoComplete: s, autoFocus: l, defaultValue: d, disabled: Ee.disabled, id: w, onAnimationStart: qe, name: P, placeholder: I, readOnly: A, required: Ee.required, rows: O, value: K, onKeyDown: z, onKeyUp: M, type: B }, ve, !xa(dt) && { as: Pe, ownerState: k({}, je, ve.ownerState) }, { ref: ge, className: q(Se.input, ve.className, A && "MuiInputBase-readOnly"), onBlur: Oe, onChange: Te, onFocus: ct })) }), y, j ? j(k({}, Ee, { startAdornment: _ })) : null] }))] });
});
function h$(e3) {
  return ue("MuiInput", e3);
}
const ki = k({}, Qo, se("MuiInput", ["root", "underline", "input"]));
function m$(e3) {
  return ue("MuiOutlinedInput", e3);
}
const lr = k({}, Qo, se("MuiOutlinedInput", ["root", "notchedOutline", "input"]));
function g$(e3) {
  return ue("MuiFilledInput", e3);
}
const _r = k({}, Qo, se("MuiFilledInput", ["root", "underline", "input"])), v$ = xn(b.jsx("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"), y$ = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], x$ = { entering: { opacity: 1 }, entered: { opacity: 1 } }, f1 = S.forwardRef(function(t, n) {
  const r = ii(), o = { enter: r.transitions.duration.enteringScreen, exit: r.transitions.duration.leavingScreen }, { addEndListener: i, appear: s = true, children: l, easing: a, in: u, onEnter: c, onEntered: d, onEntering: f, onExit: p, onExited: y, onExiting: v, style: w, timeout: h = o, TransitionComponent: m = Hn } = t, g = G(t, y$), x = S.useRef(null), C = it(x, ri(l), n), E = (I) => (A) => {
    if (I) {
      const j = x.current;
      A === void 0 ? I(j) : I(j, A);
    }
  }, P = E(f), $ = E((I, A) => {
    Z0(I);
    const j = Ca({ style: w, timeout: h, easing: a }, { mode: "enter" });
    I.style.webkitTransition = r.transitions.create("opacity", j), I.style.transition = r.transitions.create("opacity", j), c && c(I, A);
  }), L = E(d), T = E(v), D = E((I) => {
    const A = Ca({ style: w, timeout: h, easing: a }, { mode: "exit" });
    I.style.webkitTransition = r.transitions.create("opacity", A), I.style.transition = r.transitions.create("opacity", A), p && p(I);
  }), z = E(y), M = (I) => {
    i && i(x.current, I);
  };
  return b.jsx(m, k({ appear: s, in: u, nodeRef: x, onEnter: $, onEntered: L, onEntering: P, onExit: D, onExited: z, onExiting: T, addEndListener: M, timeout: h }, g, { children: (I, A) => S.cloneElement(l, k({ style: k({ opacity: 0, visibility: I === "exited" && !u ? "hidden" : void 0 }, x$[I], w, l.props.style), ref: C }, A)) }));
});
function S$(e3) {
  return ue("MuiBackdrop", e3);
}
se("MuiBackdrop", ["root", "invisible"]);
const b$ = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], w$ = (e3) => {
  const { classes: t, invisible: n } = e3;
  return pe({ root: ["root", n && "invisible"] }, S$, t);
}, C$ = Y("div", { name: "MuiBackdrop", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, n.invisible && t.invisible];
} })(({ ownerState: e3 }) => k({ position: "fixed", display: "flex", alignItems: "center", justifyContent: "center", right: 0, bottom: 0, top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", WebkitTapHighlightColor: "transparent" }, e3.invisible && { backgroundColor: "transparent" })), p1 = S.forwardRef(function(t, n) {
  var r, o, i;
  const s = he({ props: t, name: "MuiBackdrop" }), { children: l, className: a, component: u = "div", components: c = {}, componentsProps: d = {}, invisible: f = false, open: p, slotProps: y = {}, slots: v = {}, TransitionComponent: w = f1, transitionDuration: h } = s, m = G(s, b$), g = k({}, s, { component: u, invisible: f }), x = w$(g), C = (r = y.root) != null ? r : d.root;
  return b.jsx(w, k({ in: p, timeout: h }, m, { children: b.jsx(C$, k({ "aria-hidden": true }, C, { as: (o = (i = v.root) != null ? i : c.Root) != null ? o : u, className: q(x.root, a, C == null ? void 0 : C.className), ownerState: k({}, g, C == null ? void 0 : C.ownerState), classes: x, ref: n, children: l })) }));
}), k$ = se("MuiBox", ["root"]), E$ = Y0(), Je = Yk({ themeId: Ka, defaultTheme: E$, defaultClassName: k$.root, generateClassName: ap.generate });
function P$(e3) {
  return ue("MuiButton", e3);
}
const gl = se("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), R$ = S.createContext({}), $$ = S.createContext(void 0), T$ = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], O$ = (e3) => {
  const { color: t, disableElevation: n, fullWidth: r, size: o, variant: i, classes: s } = e3, l = { root: ["root", i, `${i}${Z(t)}`, `size${Z(o)}`, `${i}Size${Z(o)}`, `color${Z(t)}`, n && "disableElevation", r && "fullWidth"], label: ["label"], startIcon: ["icon", "startIcon", `iconSize${Z(o)}`], endIcon: ["icon", "endIcon", `iconSize${Z(o)}`] }, a = pe(l, P$, s);
  return k({}, s, a);
}, h1 = (e3) => k({}, e3.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } }, e3.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } }, e3.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }), M$ = Y(Us, { shouldForwardProp: (e3) => yn(e3) || e3 === "classes", name: "MuiButton", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, t[n.variant], t[`${n.variant}${Z(n.color)}`], t[`size${Z(n.size)}`], t[`${n.variant}Size${Z(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
} })(({ theme: e3, ownerState: t }) => {
  var n, r;
  const o = e3.palette.mode === "light" ? e3.palette.grey[300] : e3.palette.grey[800], i = e3.palette.mode === "light" ? e3.palette.grey.A100 : e3.palette.grey[700];
  return k({}, e3.typography.button, { minWidth: 64, padding: "6px 16px", borderRadius: (e3.vars || e3).shape.borderRadius, transition: e3.transitions.create(["background-color", "box-shadow", "border-color", "color"], { duration: e3.transitions.duration.short }), "&:hover": k({ textDecoration: "none", backgroundColor: e3.vars ? `rgba(${e3.vars.palette.text.primaryChannel} / ${e3.vars.palette.action.hoverOpacity})` : Mt(e3.palette.text.primary, e3.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } }, t.variant === "text" && t.color !== "inherit" && { backgroundColor: e3.vars ? `rgba(${e3.vars.palette[t.color].mainChannel} / ${e3.vars.palette.action.hoverOpacity})` : Mt(e3.palette[t.color].main, e3.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } }, t.variant === "outlined" && t.color !== "inherit" && { border: `1px solid ${(e3.vars || e3).palette[t.color].main}`, backgroundColor: e3.vars ? `rgba(${e3.vars.palette[t.color].mainChannel} / ${e3.vars.palette.action.hoverOpacity})` : Mt(e3.palette[t.color].main, e3.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } }, t.variant === "contained" && { backgroundColor: e3.vars ? e3.vars.palette.Button.inheritContainedHoverBg : i, boxShadow: (e3.vars || e3).shadows[4], "@media (hover: none)": { boxShadow: (e3.vars || e3).shadows[2], backgroundColor: (e3.vars || e3).palette.grey[300] } }, t.variant === "contained" && t.color !== "inherit" && { backgroundColor: (e3.vars || e3).palette[t.color].dark, "@media (hover: none)": { backgroundColor: (e3.vars || e3).palette[t.color].main } }), "&:active": k({}, t.variant === "contained" && { boxShadow: (e3.vars || e3).shadows[8] }), [`&.${gl.focusVisible}`]: k({}, t.variant === "contained" && { boxShadow: (e3.vars || e3).shadows[6] }), [`&.${gl.disabled}`]: k({ color: (e3.vars || e3).palette.action.disabled }, t.variant === "outlined" && { border: `1px solid ${(e3.vars || e3).palette.action.disabledBackground}` }, t.variant === "contained" && { color: (e3.vars || e3).palette.action.disabled, boxShadow: (e3.vars || e3).shadows[0], backgroundColor: (e3.vars || e3).palette.action.disabledBackground }) }, t.variant === "text" && { padding: "6px 8px" }, t.variant === "text" && t.color !== "inherit" && { color: (e3.vars || e3).palette[t.color].main }, t.variant === "outlined" && { padding: "5px 15px", border: "1px solid currentColor" }, t.variant === "outlined" && t.color !== "inherit" && { color: (e3.vars || e3).palette[t.color].main, border: e3.vars ? `1px solid rgba(${e3.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Mt(e3.palette[t.color].main, 0.5)}` }, t.variant === "contained" && { color: e3.vars ? e3.vars.palette.text.primary : (n = (r = e3.palette).getContrastText) == null ? void 0 : n.call(r, e3.palette.grey[300]), backgroundColor: e3.vars ? e3.vars.palette.Button.inheritContainedBg : o, boxShadow: (e3.vars || e3).shadows[2] }, t.variant === "contained" && t.color !== "inherit" && { color: (e3.vars || e3).palette[t.color].contrastText, backgroundColor: (e3.vars || e3).palette[t.color].main }, t.color === "inherit" && { color: "inherit", borderColor: "currentColor" }, t.size === "small" && t.variant === "text" && { padding: "4px 5px", fontSize: e3.typography.pxToRem(13) }, t.size === "large" && t.variant === "text" && { padding: "8px 11px", fontSize: e3.typography.pxToRem(15) }, t.size === "small" && t.variant === "outlined" && { padding: "3px 9px", fontSize: e3.typography.pxToRem(13) }, t.size === "large" && t.variant === "outlined" && { padding: "7px 21px", fontSize: e3.typography.pxToRem(15) }, t.size === "small" && t.variant === "contained" && { padding: "4px 10px", fontSize: e3.typography.pxToRem(13) }, t.size === "large" && t.variant === "contained" && { padding: "8px 22px", fontSize: e3.typography.pxToRem(15) }, t.fullWidth && { width: "100%" });
}, ({ ownerState: e3 }) => e3.disableElevation && { boxShadow: "none", "&:hover": { boxShadow: "none" }, [`&.${gl.focusVisible}`]: { boxShadow: "none" }, "&:active": { boxShadow: "none" }, [`&.${gl.disabled}`]: { boxShadow: "none" } }), L$ = Y("span", { name: "MuiButton", slot: "StartIcon", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.startIcon, t[`iconSize${Z(n.size)}`]];
} })(({ ownerState: e3 }) => k({ display: "inherit", marginRight: 8, marginLeft: -4 }, e3.size === "small" && { marginLeft: -2 }, h1(e3))), N$ = Y("span", { name: "MuiButton", slot: "EndIcon", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.endIcon, t[`iconSize${Z(n.size)}`]];
} })(({ ownerState: e3 }) => k({ display: "inherit", marginRight: -4, marginLeft: 8 }, e3.size === "small" && { marginRight: -2 }, h1(e3))), Rr = S.forwardRef(function(t, n) {
  const r = S.useContext(R$), o = S.useContext($$), i = ws(r, t), s = he({ props: i, name: "MuiButton" }), { children: l, color: a = "primary", component: u = "button", className: c, disabled: d = false, disableElevation: f = false, disableFocusRipple: p = false, endIcon: y, focusVisibleClassName: v, fullWidth: w = false, size: h = "medium", startIcon: m, type: g, variant: x = "text" } = s, C = G(s, T$), E = k({}, s, { color: a, component: u, disabled: d, disableElevation: f, disableFocusRipple: p, fullWidth: w, size: h, type: g, variant: x }), P = O$(E), $ = m && b.jsx(L$, { className: P.startIcon, ownerState: E, children: m }), L = y && b.jsx(N$, { className: P.endIcon, ownerState: E, children: y }), T = o || "";
  return b.jsxs(M$, k({ ownerState: E, className: q(r.className, P.root, c, T), component: u, disabled: d, focusRipple: !p, focusVisibleClassName: q(P.focusVisible, v), ref: n, type: g }, C, { classes: P, children: [$, l, L] }));
});
function _$(e3) {
  return ue("MuiCircularProgress", e3);
}
se("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const I$ = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];
let _u = (e3) => e3, cg, dg, fg, pg;
const ar = 44, j$ = ti(cg || (cg = _u`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)), z$ = ti(dg || (dg = _u`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)), A$ = (e3) => {
  const { classes: t, variant: n, color: r, disableShrink: o } = e3, i = { root: ["root", n, `color${Z(r)}`], svg: ["svg"], circle: ["circle", `circle${Z(n)}`, o && "circleDisableShrink"] };
  return pe(i, _$, t);
}, D$ = Y("span", { name: "MuiCircularProgress", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, t[n.variant], t[`color${Z(n.color)}`]];
} })(({ ownerState: e3, theme: t }) => k({ display: "inline-block" }, e3.variant === "determinate" && { transition: t.transitions.create("transform") }, e3.color !== "inherit" && { color: (t.vars || t).palette[e3.color].main }), ({ ownerState: e3 }) => e3.variant === "indeterminate" && su(fg || (fg = _u`
      animation: ${0} 1.4s linear infinite;
    `), j$)), F$ = Y("svg", { name: "MuiCircularProgress", slot: "Svg", overridesResolver: (e3, t) => t.svg })({ display: "block" }), B$ = Y("circle", { name: "MuiCircularProgress", slot: "Circle", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.circle, t[`circle${Z(n.variant)}`], n.disableShrink && t.circleDisableShrink];
} })(({ ownerState: e3, theme: t }) => k({ stroke: "currentColor" }, e3.variant === "determinate" && { transition: t.transitions.create("stroke-dashoffset") }, e3.variant === "indeterminate" && { strokeDasharray: "80px, 200px", strokeDashoffset: 0 }), ({ ownerState: e3 }) => e3.variant === "indeterminate" && !e3.disableShrink && su(pg || (pg = _u`
      animation: ${0} 1.4s ease-in-out infinite;
    `), z$)), W$ = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiCircularProgress" }), { className: o, color: i = "primary", disableShrink: s = false, size: l = 40, style: a, thickness: u = 3.6, value: c = 0, variant: d = "indeterminate" } = r, f = G(r, I$), p = k({}, r, { color: i, disableShrink: s, size: l, thickness: u, value: c, variant: d }), y = A$(p), v = {}, w = {}, h = {};
  if (d === "determinate") {
    const m = 2 * Math.PI * ((ar - u) / 2);
    v.strokeDasharray = m.toFixed(3), h["aria-valuenow"] = Math.round(c), v.strokeDashoffset = `${((100 - c) / 100 * m).toFixed(3)}px`, w.transform = "rotate(-90deg)";
  }
  return b.jsx(D$, k({ className: q(y.root, o), style: k({ width: l, height: l }, w, a), ownerState: p, ref: n, role: "progressbar" }, h, f, { children: b.jsx(F$, { className: y.svg, ownerState: p, viewBox: `${ar / 2} ${ar / 2} ${ar} ${ar}`, children: b.jsx(B$, { className: y.circle, style: v, ownerState: p, cx: ar, cy: ar, r: (ar - u) / 2, fill: "none", strokeWidth: u }) }) }));
}), U$ = BE({ createStyledComponent: Y("div", { name: "MuiContainer", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, t[`maxWidth${Z(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters];
} }), useThemeProps: (e3) => he({ props: e3, name: "MuiContainer" }) });
function V$(e3) {
  const t = gt(e3);
  return t.body === e3 ? Un(e3).innerWidth > t.documentElement.clientWidth : e3.scrollHeight > e3.clientHeight;
}
function Qi(e3, t) {
  t ? e3.setAttribute("aria-hidden", "true") : e3.removeAttribute("aria-hidden");
}
function hg(e3) {
  return parseInt(Un(e3).getComputedStyle(e3).paddingRight, 10) || 0;
}
function H$(e3) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e3.tagName) !== -1, r = e3.tagName === "INPUT" && e3.getAttribute("type") === "hidden";
  return n || r;
}
function mg(e3, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e3.children, (s) => {
    const l = i.indexOf(s) === -1, a = !H$(s);
    l && a && Qi(s, o);
  });
}
function Ec(e3, t) {
  let n = -1;
  return e3.some((r, o) => t(r) ? (n = o, true) : false), n;
}
function K$(e3, t) {
  const n = [], r = e3.container;
  if (!t.disableScrollLock) {
    if (V$(r)) {
      const s = z0(gt(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }), r.style.paddingRight = `${hg(r) + s}px`;
      const l = gt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({ value: a.style.paddingRight, property: "padding-right", el: a }), a.style.paddingRight = `${hg(a) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = gt(r).body;
    else {
      const s = r.parentElement, l = Un(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    n.push({ value: i.style.overflow, property: "overflow", el: i }, { value: i.style.overflowX, property: "overflow-x", el: i }, { value: i.style.overflowY, property: "overflow-y", el: i }), i.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({ value: i, el: s, property: l }) => {
      i ? s.style.setProperty(l, i) : s.style.removeProperty(l);
    });
  };
}
function Y$(e3) {
  const t = [];
  return [].forEach.call(e3.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class X$ {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Qi(t.modalRef, false);
    const o = Y$(n);
    mg(n, t.mount, t.modalRef, o, true);
    const i = Ec(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({ modals: [t], container: n, restore: null, hiddenSiblings: o }), r);
  }
  mount(t, n) {
    const r = Ec(this.containers, (i) => i.modals.indexOf(t) !== -1), o = this.containers[r];
    o.restore || (o.restore = K$(o, n));
  }
  remove(t, n = true) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = Ec(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0) i.restore && i.restore(), t.modalRef && Qi(t.modalRef, n), mg(i.container, t.mount, t.modalRef, i.hiddenSiblings, false), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Qi(s.modalRef, false);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const G$ = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Q$(e3) {
  const t = parseInt(e3.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e3.contentEditable === "true" || (e3.nodeName === "AUDIO" || e3.nodeName === "VIDEO" || e3.nodeName === "DETAILS") && e3.getAttribute("tabindex") === null ? 0 : e3.tabIndex : t;
}
function q$(e3) {
  if (e3.tagName !== "INPUT" || e3.type !== "radio" || !e3.name) return false;
  const t = (r) => e3.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e3.name}"]:checked`);
  return n || (n = t(`[name="${e3.name}"]`)), n !== e3;
}
function Z$(e3) {
  return !(e3.disabled || e3.tagName === "INPUT" && e3.type === "hidden" || q$(e3));
}
function J$(e3) {
  const t = [], n = [];
  return Array.from(e3.querySelectorAll(G$)).forEach((r, o) => {
    const i = Q$(r);
    i === -1 || !Z$(r) || (i === 0 ? t.push(r) : n.push({ documentOrder: o, tabIndex: i, node: r }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function eT() {
  return true;
}
function tT(e3) {
  const { children: t, disableAutoFocus: n = false, disableEnforceFocus: r = false, disableRestoreFocus: o = false, getTabbable: i = J$, isEnabled: s = eT, open: l } = e3, a = S.useRef(false), u = S.useRef(null), c = S.useRef(null), d = S.useRef(null), f = S.useRef(null), p = S.useRef(false), y = S.useRef(null), v = it(ri(t), y), w = S.useRef(null);
  S.useEffect(() => {
    !l || !y.current || (p.current = !n);
  }, [n, l]), S.useEffect(() => {
    if (!l || !y.current) return;
    const g = gt(y.current);
    return y.current.contains(g.activeElement) || (y.current.hasAttribute("tabIndex") || y.current.setAttribute("tabIndex", "-1"), p.current && y.current.focus()), () => {
      o || (d.current && d.current.focus && (a.current = true, d.current.focus()), d.current = null);
    };
  }, [l]), S.useEffect(() => {
    if (!l || !y.current) return;
    const g = gt(y.current), x = (P) => {
      w.current = P, !(r || !s() || P.key !== "Tab") && g.activeElement === y.current && P.shiftKey && (a.current = true, c.current && c.current.focus());
    }, C = () => {
      const P = y.current;
      if (P === null) return;
      if (!g.hasFocus() || !s() || a.current) {
        a.current = false;
        return;
      }
      if (P.contains(g.activeElement) || r && g.activeElement !== u.current && g.activeElement !== c.current) return;
      if (g.activeElement !== f.current) f.current = null;
      else if (f.current !== null) return;
      if (!p.current) return;
      let $ = [];
      if ((g.activeElement === u.current || g.activeElement === c.current) && ($ = i(y.current)), $.length > 0) {
        var L, T;
        const D = !!((L = w.current) != null && L.shiftKey && ((T = w.current) == null ? void 0 : T.key) === "Tab"), z = $[0], M = $[$.length - 1];
        typeof z != "string" && typeof M != "string" && (D ? M.focus() : z.focus());
      } else P.focus();
    };
    g.addEventListener("focusin", C), g.addEventListener("keydown", x, true);
    const E = setInterval(() => {
      g.activeElement && g.activeElement.tagName === "BODY" && C();
    }, 50);
    return () => {
      clearInterval(E), g.removeEventListener("focusin", C), g.removeEventListener("keydown", x, true);
    };
  }, [n, r, o, s, l, i]);
  const h = (g) => {
    d.current === null && (d.current = g.relatedTarget), p.current = true, f.current = g.target;
    const x = t.props.onFocus;
    x && x(g);
  }, m = (g) => {
    d.current === null && (d.current = g.relatedTarget), p.current = true;
  };
  return b.jsxs(S.Fragment, { children: [b.jsx("div", { tabIndex: l ? 0 : -1, onFocus: m, ref: u, "data-testid": "sentinelStart" }), S.cloneElement(t, { ref: v, onFocus: h }), b.jsx("div", { tabIndex: l ? 0 : -1, onFocus: m, ref: c, "data-testid": "sentinelEnd" })] });
}
function nT(e3) {
  return typeof e3 == "function" ? e3() : e3;
}
function rT(e3) {
  return e3 ? e3.props.hasOwnProperty("in") : false;
}
const oT = new X$();
function iT(e3) {
  const { container: t, disableEscapeKeyDown: n = false, disableScrollLock: r = false, manager: o = oT, closeAfterTransition: i = false, onTransitionEnter: s, onTransitionExited: l, children: a, onClose: u, open: c, rootRef: d } = e3, f = S.useRef({}), p = S.useRef(null), y = S.useRef(null), v = it(y, d), [w, h] = S.useState(!c), m = rT(a);
  let g = true;
  (e3["aria-hidden"] === "false" || e3["aria-hidden"] === false) && (g = false);
  const x = () => gt(p.current), C = () => (f.current.modalRef = y.current, f.current.mount = p.current, f.current), E = () => {
    o.mount(C(), { disableScrollLock: r }), y.current && (y.current.scrollTop = 0);
  }, P = Ut(() => {
    const j = nT(t) || x().body;
    o.add(C(), j), y.current && E();
  }), $ = S.useCallback(() => o.isTopModal(C()), [o]), L = Ut((j) => {
    p.current = j, j && (c && $() ? E() : y.current && Qi(y.current, g));
  }), T = S.useCallback(() => {
    o.remove(C(), g);
  }, [g, o]);
  S.useEffect(() => () => {
    T();
  }, [T]), S.useEffect(() => {
    c ? P() : (!m || !i) && T();
  }, [c, T, m, i, P]);
  const D = (j) => (O) => {
    var R;
    (R = j.onKeyDown) == null || R.call(j, O), !(O.key !== "Escape" || O.which === 229 || !$()) && (n || (O.stopPropagation(), u && u(O, "escapeKeyDown")));
  }, z = (j) => (O) => {
    var R;
    (R = j.onClick) == null || R.call(j, O), O.target === O.currentTarget && u && u(O, "backdropClick");
  };
  return { getRootProps: (j = {}) => {
    const O = D0(e3);
    delete O.onTransitionEnter, delete O.onTransitionExited;
    const R = k({}, O, j);
    return k({ role: "presentation" }, R, { onKeyDown: D(R), ref: v });
  }, getBackdropProps: (j = {}) => {
    const O = j;
    return k({ "aria-hidden": true }, O, { onClick: z(O), open: c });
  }, getTransitionProps: () => {
    const j = () => {
      h(false), s && s();
    }, O = () => {
      h(true), l && l(), i && T();
    };
    return { onEnter: zd(j, a == null ? void 0 : a.props.onEnter), onExited: zd(O, a == null ? void 0 : a.props.onExited) };
  }, rootRef: v, portalRef: L, isTopModal: $, exited: w, hasTransition: m };
}
function sT(e3) {
  return ue("MuiModal", e3);
}
se("MuiModal", ["root", "hidden", "backdrop"]);
const lT = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], aT = (e3) => {
  const { open: t, exited: n, classes: r } = e3;
  return pe({ root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] }, sT, r);
}, uT = Y("div", { name: "MuiModal", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, !n.open && n.exited && t.hidden];
} })(({ theme: e3, ownerState: t }) => k({ position: "fixed", zIndex: (e3.vars || e3).zIndex.modal, right: 0, bottom: 0, top: 0, left: 0 }, !t.open && t.exited && { visibility: "hidden" })), cT = Y(p1, { name: "MuiModal", slot: "Backdrop", overridesResolver: (e3, t) => t.backdrop })({ zIndex: -1 }), m1 = S.forwardRef(function(t, n) {
  var r, o, i, s, l, a;
  const u = he({ name: "MuiModal", props: t }), { BackdropComponent: c = cT, BackdropProps: d, className: f, closeAfterTransition: p = false, children: y, container: v, component: w, components: h = {}, componentsProps: m = {}, disableAutoFocus: g = false, disableEnforceFocus: x = false, disableEscapeKeyDown: C = false, disablePortal: E = false, disableRestoreFocus: P = false, disableScrollLock: $ = false, hideBackdrop: L = false, keepMounted: T = false, onBackdropClick: D, open: z, slotProps: M, slots: I } = u, A = G(u, lT), j = k({}, u, { closeAfterTransition: p, disableAutoFocus: g, disableEnforceFocus: x, disableEscapeKeyDown: C, disablePortal: E, disableRestoreFocus: P, disableScrollLock: $, hideBackdrop: L, keepMounted: T }), { getRootProps: O, getBackdropProps: R, getTransitionProps: N, portalRef: _, isTopModal: B, exited: W, hasTransition: V } = iT(k({}, j, { rootRef: n })), K = k({}, j, { exited: W }), te = aT(K), H = {};
  if (y.props.tabIndex === void 0 && (H.tabIndex = "-1"), V) {
    const { onEnter: oe, onExited: ce } = N();
    H.onEnter = oe, H.onExited = ce;
  }
  const ie = (r = (o = I == null ? void 0 : I.root) != null ? o : h.Root) != null ? r : uT, ge = (i = (s = I == null ? void 0 : I.backdrop) != null ? s : h.Backdrop) != null ? i : c, me = (l = M == null ? void 0 : M.root) != null ? l : m.root, Ie = (a = M == null ? void 0 : M.backdrop) != null ? a : m.backdrop, re = Tn({ elementType: ie, externalSlotProps: me, externalForwardedProps: A, getSlotProps: O, additionalProps: { ref: n, as: w }, ownerState: K, className: q(f, me == null ? void 0 : me.className, te == null ? void 0 : te.root, !K.open && K.exited && (te == null ? void 0 : te.hidden)) }), Ee = Tn({ elementType: ge, externalSlotProps: Ie, additionalProps: d, getSlotProps: (oe) => R(k({}, oe, { onClick: (ce) => {
    D && D(ce), oe != null && oe.onClick && oe.onClick(ce);
  } })), className: q(Ie == null ? void 0 : Ie.className, d == null ? void 0 : d.className, te == null ? void 0 : te.backdrop), ownerState: K });
  return !T && !z && (!V || W) ? null : b.jsx(c1, { ref: _, container: v, disablePortal: E, children: b.jsxs(ie, k({}, re, { children: [!L && c ? b.jsx(ge, k({}, Ee)) : null, b.jsx(tT, { disableEnforceFocus: x, disableAutoFocus: g, disableRestoreFocus: P, isEnabled: B, open: z, children: S.cloneElement(y, H) })] })) });
});
function dT(e3) {
  return ue("MuiDialog", e3);
}
const Pc = se("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), g1 = S.createContext({}), fT = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], pT = Y(p1, { name: "MuiDialog", slot: "Backdrop", overrides: (e3, t) => t.backdrop })({ zIndex: -1 }), hT = (e3) => {
  const { classes: t, scroll: n, maxWidth: r, fullWidth: o, fullScreen: i } = e3, s = { root: ["root"], container: ["container", `scroll${Z(n)}`], paper: ["paper", `paperScroll${Z(n)}`, `paperWidth${Z(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"] };
  return pe(s, dT, t);
}, mT = Y(m1, { name: "MuiDialog", slot: "Root", overridesResolver: (e3, t) => t.root })({ "@media print": { position: "absolute !important" } }), gT = Y("div", { name: "MuiDialog", slot: "Container", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.container, t[`scroll${Z(n.scroll)}`]];
} })(({ ownerState: e3 }) => k({ height: "100%", "@media print": { height: "auto" }, outline: 0 }, e3.scroll === "paper" && { display: "flex", justifyContent: "center", alignItems: "center" }, e3.scroll === "body" && { overflowY: "auto", overflowX: "hidden", textAlign: "center", "&::after": { content: '""', display: "inline-block", verticalAlign: "middle", height: "100%", width: "0" } })), vT = Y(yp, { name: "MuiDialog", slot: "Paper", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.paper, t[`scrollPaper${Z(n.scroll)}`], t[`paperWidth${Z(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
} })(({ theme: e3, ownerState: t }) => k({ margin: 32, position: "relative", overflowY: "auto", "@media print": { overflowY: "visible", boxShadow: "none" } }, t.scroll === "paper" && { display: "flex", flexDirection: "column", maxHeight: "calc(100% - 64px)" }, t.scroll === "body" && { display: "inline-block", verticalAlign: "middle", textAlign: "left" }, !t.maxWidth && { maxWidth: "calc(100% - 64px)" }, t.maxWidth === "xs" && { maxWidth: e3.breakpoints.unit === "px" ? Math.max(e3.breakpoints.values.xs, 444) : `max(${e3.breakpoints.values.xs}${e3.breakpoints.unit}, 444px)`, [`&.${Pc.paperScrollBody}`]: { [e3.breakpoints.down(Math.max(e3.breakpoints.values.xs, 444) + 32 * 2)]: { maxWidth: "calc(100% - 64px)" } } }, t.maxWidth && t.maxWidth !== "xs" && { maxWidth: `${e3.breakpoints.values[t.maxWidth]}${e3.breakpoints.unit}`, [`&.${Pc.paperScrollBody}`]: { [e3.breakpoints.down(e3.breakpoints.values[t.maxWidth] + 32 * 2)]: { maxWidth: "calc(100% - 64px)" } } }, t.fullWidth && { width: "calc(100% - 64px)" }, t.fullScreen && { margin: 0, width: "100%", maxWidth: "100%", height: "100%", maxHeight: "none", borderRadius: 0, [`&.${Pc.paperScrollBody}`]: { margin: 0, maxWidth: "100%" } })), yT = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiDialog" }), o = ii(), i = { enter: o.transitions.duration.enteringScreen, exit: o.transitions.duration.leavingScreen }, { "aria-describedby": s, "aria-labelledby": l, BackdropComponent: a, BackdropProps: u, children: c, className: d, disableEscapeKeyDown: f = false, fullScreen: p = false, fullWidth: y = false, maxWidth: v = "sm", onBackdropClick: w, onClick: h, onClose: m, open: g, PaperComponent: x = yp, PaperProps: C = {}, scroll: E = "paper", TransitionComponent: P = f1, transitionDuration: $ = i, TransitionProps: L } = r, T = G(r, fT), D = k({}, r, { disableEscapeKeyDown: f, fullScreen: p, fullWidth: y, maxWidth: v, scroll: E }), z = hT(D), M = S.useRef(), I = (R) => {
    M.current = R.target === R.currentTarget;
  }, A = (R) => {
    h && h(R), M.current && (M.current = null, w && w(R), m && m(R, "backdropClick"));
  }, j = Ds(l), O = S.useMemo(() => ({ titleId: j }), [j]);
  return b.jsx(mT, k({ className: q(z.root, d), closeAfterTransition: true, components: { Backdrop: pT }, componentsProps: { backdrop: k({ transitionDuration: $, as: a }, u) }, disableEscapeKeyDown: f, onClose: m, open: g, ref: n, onClick: A, ownerState: D }, T, { children: b.jsx(P, k({ appear: true, in: g, timeout: $, role: "presentation" }, L, { children: b.jsx(gT, { className: q(z.container), onMouseDown: I, ownerState: D, children: b.jsx(vT, k({ as: x, elevation: 24, role: "dialog", "aria-describedby": s, "aria-labelledby": j }, C, { className: q(z.paper, C.className), ownerState: D, children: b.jsx(g1.Provider, { value: O, children: c }) })) }) })) }));
});
function xT(e3) {
  return ue("MuiDialogActions", e3);
}
se("MuiDialogActions", ["root", "spacing"]);
const ST = ["className", "disableSpacing"], bT = (e3) => {
  const { classes: t, disableSpacing: n } = e3;
  return pe({ root: ["root", !n && "spacing"] }, xT, t);
}, wT = Y("div", { name: "MuiDialogActions", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, !n.disableSpacing && t.spacing];
} })(({ ownerState: e3 }) => k({ display: "flex", alignItems: "center", padding: 8, justifyContent: "flex-end", flex: "0 0 auto" }, !e3.disableSpacing && { "& > :not(style) ~ :not(style)": { marginLeft: 8 } })), Iu = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiDialogActions" }), { className: o, disableSpacing: i = false } = r, s = G(r, ST), l = k({}, r, { disableSpacing: i }), a = bT(l);
  return b.jsx(wT, k({ className: q(a.root, o), ownerState: l, ref: n }, s));
});
function CT(e3) {
  return ue("MuiDialogContent", e3);
}
se("MuiDialogContent", ["root", "dividers"]);
function kT(e3) {
  return ue("MuiDialogTitle", e3);
}
const ET = se("MuiDialogTitle", ["root"]), PT = ["className", "dividers"], RT = (e3) => {
  const { classes: t, dividers: n } = e3;
  return pe({ root: ["root", n && "dividers"] }, CT, t);
}, $T = Y("div", { name: "MuiDialogContent", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, n.dividers && t.dividers];
} })(({ theme: e3, ownerState: t }) => k({ flex: "1 1 auto", WebkitOverflowScrolling: "touch", overflowY: "auto", padding: "20px 24px" }, t.dividers ? { padding: "16px 24px", borderTop: `1px solid ${(e3.vars || e3).palette.divider}`, borderBottom: `1px solid ${(e3.vars || e3).palette.divider}` } : { [`.${ET.root} + &`]: { paddingTop: 0 } })), ju = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiDialogContent" }), { className: o, dividers: i = false } = r, s = G(r, PT), l = k({}, r, { dividers: i }), a = RT(l);
  return b.jsx($T, k({ className: q(a.root, o), ownerState: l, ref: n }, s));
}), TT = ["className", "id"], OT = (e3) => {
  const { classes: t } = e3;
  return pe({ root: ["root"] }, kT, t);
}, MT = Y(De, { name: "MuiDialogTitle", slot: "Root", overridesResolver: (e3, t) => t.root })({ padding: "16px 24px", flex: "0 0 auto" }), Tp = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiDialogTitle" }), { className: o, id: i } = r, s = G(r, TT), l = r, a = OT(l), { titleId: u = i } = S.useContext(g1);
  return b.jsx(MT, k({ component: "h2", className: q(a.root, o), ownerState: l, ref: n, variant: "h6", id: i ?? u }, s));
}), gg = se("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), LT = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], NT = (e3) => {
  const { classes: t, disableUnderline: n } = e3, o = pe({ root: ["root", !n && "underline"], input: ["input"] }, g$, t);
  return k({}, t, o);
}, _T = Y(Lu, { shouldForwardProp: (e3) => yn(e3) || e3 === "classes", name: "MuiFilledInput", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [...Ou(e3, t), !n.disableUnderline && t.underline];
} })(({ theme: e3, ownerState: t }) => {
  var n;
  const r = e3.palette.mode === "light", o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return k({ position: "relative", backgroundColor: e3.vars ? e3.vars.palette.FilledInput.bg : i, borderTopLeftRadius: (e3.vars || e3).shape.borderRadius, borderTopRightRadius: (e3.vars || e3).shape.borderRadius, transition: e3.transitions.create("background-color", { duration: e3.transitions.duration.shorter, easing: e3.transitions.easing.easeOut }), "&:hover": { backgroundColor: e3.vars ? e3.vars.palette.FilledInput.hoverBg : s, "@media (hover: none)": { backgroundColor: e3.vars ? e3.vars.palette.FilledInput.bg : i } }, [`&.${_r.focused}`]: { backgroundColor: e3.vars ? e3.vars.palette.FilledInput.bg : i }, [`&.${_r.disabled}`]: { backgroundColor: e3.vars ? e3.vars.palette.FilledInput.disabledBg : l } }, !t.disableUnderline && { "&::after": { borderBottom: `2px solid ${(n = (e3.vars || e3).palette[t.color || "primary"]) == null ? void 0 : n.main}`, left: 0, bottom: 0, content: '""', position: "absolute", right: 0, transform: "scaleX(0)", transition: e3.transitions.create("transform", { duration: e3.transitions.duration.shorter, easing: e3.transitions.easing.easeOut }), pointerEvents: "none" }, [`&.${_r.focused}:after`]: { transform: "scaleX(1) translateX(0)" }, [`&.${_r.error}`]: { "&::before, &::after": { borderBottomColor: (e3.vars || e3).palette.error.main } }, "&::before": { borderBottom: `1px solid ${e3.vars ? `rgba(${e3.vars.palette.common.onBackgroundChannel} / ${e3.vars.opacity.inputUnderline})` : o}`, left: 0, bottom: 0, content: '"\\00a0"', position: "absolute", right: 0, transition: e3.transitions.create("border-bottom-color", { duration: e3.transitions.duration.shorter }), pointerEvents: "none" }, [`&:hover:not(.${_r.disabled}, .${_r.error}):before`]: { borderBottom: `1px solid ${(e3.vars || e3).palette.text.primary}` }, [`&.${_r.disabled}:before`]: { borderBottomStyle: "dotted" } }, t.startAdornment && { paddingLeft: 12 }, t.endAdornment && { paddingRight: 12 }, t.multiline && k({ padding: "25px 12px 8px" }, t.size === "small" && { paddingTop: 21, paddingBottom: 4 }, t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 }, t.hiddenLabel && t.size === "small" && { paddingTop: 8, paddingBottom: 9 }));
}), IT = Y(Nu, { name: "MuiFilledInput", slot: "Input", overridesResolver: Mu })(({ theme: e3, ownerState: t }) => k({ paddingTop: 25, paddingRight: 12, paddingBottom: 8, paddingLeft: 12 }, !e3.vars && { "&:-webkit-autofill": { WebkitBoxShadow: e3.palette.mode === "light" ? null : "0 0 0 100px #266798 inset", WebkitTextFillColor: e3.palette.mode === "light" ? null : "#fff", caretColor: e3.palette.mode === "light" ? null : "#fff", borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit" } }, e3.vars && { "&:-webkit-autofill": { borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit" }, [e3.getColorSchemeSelector("dark")]: { "&:-webkit-autofill": { WebkitBoxShadow: "0 0 0 100px #266798 inset", WebkitTextFillColor: "#fff", caretColor: "#fff" } } }, t.size === "small" && { paddingTop: 21, paddingBottom: 4 }, t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 }, t.startAdornment && { paddingLeft: 0 }, t.endAdornment && { paddingRight: 0 }, t.hiddenLabel && t.size === "small" && { paddingTop: 8, paddingBottom: 9 }, t.multiline && { paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 })), Op = S.forwardRef(function(t, n) {
  var r, o, i, s;
  const l = he({ props: t, name: "MuiFilledInput" }), { components: a = {}, componentsProps: u, fullWidth: c = false, inputComponent: d = "input", multiline: f = false, slotProps: p, slots: y = {}, type: v = "text" } = l, w = G(l, LT), h = k({}, l, { fullWidth: c, inputComponent: d, multiline: f, type: v }), m = NT(l), g = { root: { ownerState: h }, input: { ownerState: h } }, x = p ?? u ? Yt(g, p ?? u) : g, C = (r = (o = y.root) != null ? o : a.Root) != null ? r : _T, E = (i = (s = y.input) != null ? s : a.Input) != null ? i : IT;
  return b.jsx($p, k({ slots: { root: C, input: E }, componentsProps: x, fullWidth: c, inputComponent: d, multiline: f, ref: n, type: v }, w, { classes: m }));
});
Op.muiName = "Input";
function jT(e3) {
  return ue("MuiFormControl", e3);
}
se("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const zT = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], AT = (e3) => {
  const { classes: t, margin: n, fullWidth: r } = e3, o = { root: ["root", n !== "none" && `margin${Z(n)}`, r && "fullWidth"] };
  return pe(o, jT, t);
}, DT = Y("div", { name: "MuiFormControl", slot: "Root", overridesResolver: ({ ownerState: e3 }, t) => k({}, t.root, t[`margin${Z(e3.margin)}`], e3.fullWidth && t.fullWidth) })(({ ownerState: e3 }) => k({ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, margin: 0, border: 0, verticalAlign: "top" }, e3.margin === "normal" && { marginTop: 16, marginBottom: 8 }, e3.margin === "dense" && { marginTop: 8, marginBottom: 4 }, e3.fullWidth && { width: "100%" })), FT = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiFormControl" }), { children: o, className: i, color: s = "primary", component: l = "div", disabled: a = false, error: u = false, focused: c, fullWidth: d = false, hiddenLabel: f = false, margin: p = "none", required: y = false, size: v = "medium", variant: w = "outlined" } = r, h = G(r, zT), m = k({}, r, { color: s, component: l, disabled: a, error: u, fullWidth: d, hiddenLabel: f, margin: p, required: y, size: v, variant: w }), g = AT(m), [x, C] = S.useState(() => {
    let M = false;
    return o && S.Children.forEach(o, (I) => {
      if (!jl(I, ["Input", "Select"])) return;
      const A = jl(I, ["Select"]) ? I.props.input : I;
      A && u$(A.props) && (M = true);
    }), M;
  }), [E, P] = S.useState(() => {
    let M = false;
    return o && S.Children.forEach(o, (I) => {
      jl(I, ["Input", "Select"]) && (Ea(I.props, true) || Ea(I.props.inputProps, true)) && (M = true);
    }), M;
  }), [$, L] = S.useState(false);
  a && $ && L(false);
  const T = c !== void 0 && !a ? c : $;
  let D;
  const z = S.useMemo(() => ({ adornedStart: x, setAdornedStart: C, color: s, disabled: a, error: u, filled: E, focused: T, fullWidth: d, hiddenLabel: f, size: v, onBlur: () => {
    L(false);
  }, onEmpty: () => {
    P(false);
  }, onFilled: () => {
    P(true);
  }, onFocus: () => {
    L(true);
  }, registerEffect: D, required: y, variant: w }), [x, s, a, u, E, T, d, f, D, y, v, w]);
  return b.jsx(Rp.Provider, { value: z, children: b.jsx(DT, k({ as: l, ownerState: m, className: q(g.root, i), ref: n }, h, { children: o })) });
});
function BT(e3) {
  return ue("MuiFormHelperText", e3);
}
const vg = se("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var yg;
const WT = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], UT = (e3) => {
  const { classes: t, contained: n, size: r, disabled: o, error: i, filled: s, focused: l, required: a } = e3, u = { root: ["root", o && "disabled", i && "error", r && `size${Z(r)}`, n && "contained", l && "focused", s && "filled", a && "required"] };
  return pe(u, BT, t);
}, VT = Y("p", { name: "MuiFormHelperText", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, n.size && t[`size${Z(n.size)}`], n.contained && t.contained, n.filled && t.filled];
} })(({ theme: e3, ownerState: t }) => k({ color: (e3.vars || e3).palette.text.secondary }, e3.typography.caption, { textAlign: "left", marginTop: 3, marginRight: 0, marginBottom: 0, marginLeft: 0, [`&.${vg.disabled}`]: { color: (e3.vars || e3).palette.text.disabled }, [`&.${vg.error}`]: { color: (e3.vars || e3).palette.error.main } }, t.size === "small" && { marginTop: 4 }, t.contained && { marginLeft: 14, marginRight: 14 })), HT = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiFormHelperText" }), { children: o, className: i, component: s = "p" } = r, l = G(r, WT), a = ai(), u = li({ props: r, muiFormControl: a, states: ["variant", "size", "disabled", "error", "filled", "focused", "required"] }), c = k({}, r, { component: s, contained: u.variant === "filled" || u.variant === "outlined", variant: u.variant, size: u.size, disabled: u.disabled, error: u.error, filled: u.filled, focused: u.focused, required: u.required }), d = UT(c);
  return b.jsx(VT, k({ as: s, ownerState: c, className: q(d.root, i), ref: n }, l, { children: o === " " ? yg || (yg = b.jsx("span", { className: "notranslate", children: "\u200B" })) : o }));
});
function KT(e3) {
  return ue("MuiFormLabel", e3);
}
const qi = se("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), YT = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], XT = (e3) => {
  const { classes: t, color: n, focused: r, disabled: o, error: i, filled: s, required: l } = e3, a = { root: ["root", `color${Z(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", l && "required"], asterisk: ["asterisk", i && "error"] };
  return pe(a, KT, t);
}, GT = Y("label", { name: "MuiFormLabel", slot: "Root", overridesResolver: ({ ownerState: e3 }, t) => k({}, t.root, e3.color === "secondary" && t.colorSecondary, e3.filled && t.filled) })(({ theme: e3, ownerState: t }) => k({ color: (e3.vars || e3).palette.text.secondary }, e3.typography.body1, { lineHeight: "1.4375em", padding: 0, position: "relative", [`&.${qi.focused}`]: { color: (e3.vars || e3).palette[t.color].main }, [`&.${qi.disabled}`]: { color: (e3.vars || e3).palette.text.disabled }, [`&.${qi.error}`]: { color: (e3.vars || e3).palette.error.main } })), QT = Y("span", { name: "MuiFormLabel", slot: "Asterisk", overridesResolver: (e3, t) => t.asterisk })(({ theme: e3 }) => ({ [`&.${qi.error}`]: { color: (e3.vars || e3).palette.error.main } })), qT = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiFormLabel" }), { children: o, className: i, component: s = "label" } = r, l = G(r, YT), a = ai(), u = li({ props: r, muiFormControl: a, states: ["color", "required", "focused", "disabled", "error", "filled"] }), c = k({}, r, { color: u.color || "primary", component: s, disabled: u.disabled, error: u.error, filled: u.filled, focused: u.focused, required: u.required }), d = XT(c);
  return b.jsxs(GT, k({ as: s, ownerState: c, className: q(d.root, i), ref: n }, l, { children: [o, u.required && b.jsxs(QT, { ownerState: c, "aria-hidden": true, className: d.asterisk, children: ["\u2009", "*"] })] }));
}), xg = S.createContext();
function ZT(e3) {
  return ue("MuiGrid", e3);
}
const JT = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], eO = ["column-reverse", "column", "row-reverse", "row"], tO = ["nowrap", "wrap-reverse", "wrap"], Ei = ["auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], Es = se("MuiGrid", ["root", "container", "item", "zeroMinWidth", ...JT.map((e3) => `spacing-xs-${e3}`), ...eO.map((e3) => `direction-xs-${e3}`), ...tO.map((e3) => `wrap-xs-${e3}`), ...Ei.map((e3) => `grid-xs-${e3}`), ...Ei.map((e3) => `grid-sm-${e3}`), ...Ei.map((e3) => `grid-md-${e3}`), ...Ei.map((e3) => `grid-lg-${e3}`), ...Ei.map((e3) => `grid-xl-${e3}`)]), nO = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function jo(e3) {
  const t = parseFloat(e3);
  return `${t}${String(e3).replace(String(t), "") || "px"}`;
}
function rO({ theme: e3, ownerState: t }) {
  let n;
  return e3.breakpoints.keys.reduce((r, o) => {
    let i = {};
    if (t[o] && (n = t[o]), !n) return r;
    if (n === true) i = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" };
    else if (n === "auto") i = { flexBasis: "auto", flexGrow: 0, flexShrink: 0, maxWidth: "none", width: "auto" };
    else {
      const s = lu({ values: t.columns, breakpoints: e3.breakpoints.values }), l = typeof s == "object" ? s[o] : s;
      if (l == null) return r;
      const a = `${Math.round(n / l * 1e8) / 1e6}%`;
      let u = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const c = e3.spacing(t.columnSpacing);
        if (c !== "0px") {
          const d = `calc(${a} + ${jo(c)})`;
          u = { flexBasis: d, maxWidth: d };
        }
      }
      i = k({ flexBasis: a, flexGrow: 0, maxWidth: a }, u);
    }
    return e3.breakpoints.values[o] === 0 ? Object.assign(r, i) : r[e3.breakpoints.up(o)] = i, r;
  }, {});
}
function oO({ theme: e3, ownerState: t }) {
  const n = lu({ values: t.direction, breakpoints: e3.breakpoints.values });
  return dn({ theme: e3 }, n, (r) => {
    const o = { flexDirection: r };
    return r.indexOf("column") === 0 && (o[`& > .${Es.item}`] = { maxWidth: "none" }), o;
  });
}
function v1({ breakpoints: e3, values: t }) {
  let n = "";
  Object.keys(t).forEach((o) => {
    n === "" && t[o] !== 0 && (n = o);
  });
  const r = Object.keys(e3).sort((o, i) => e3[o] - e3[i]);
  return r.slice(0, r.indexOf(n));
}
function iO({ theme: e3, ownerState: t }) {
  const { container: n, rowSpacing: r } = t;
  let o = {};
  if (n && r !== 0) {
    const i = lu({ values: r, breakpoints: e3.breakpoints.values });
    let s;
    typeof i == "object" && (s = v1({ breakpoints: e3.breakpoints.values, values: i })), o = dn({ theme: e3 }, i, (l, a) => {
      var u;
      const c = e3.spacing(l);
      return c !== "0px" ? { marginTop: `-${jo(c)}`, [`& > .${Es.item}`]: { paddingTop: jo(c) } } : (u = s) != null && u.includes(a) ? {} : { marginTop: 0, [`& > .${Es.item}`]: { paddingTop: 0 } };
    });
  }
  return o;
}
function sO({ theme: e3, ownerState: t }) {
  const { container: n, columnSpacing: r } = t;
  let o = {};
  if (n && r !== 0) {
    const i = lu({ values: r, breakpoints: e3.breakpoints.values });
    let s;
    typeof i == "object" && (s = v1({ breakpoints: e3.breakpoints.values, values: i })), o = dn({ theme: e3 }, i, (l, a) => {
      var u;
      const c = e3.spacing(l);
      return c !== "0px" ? { width: `calc(100% + ${jo(c)})`, marginLeft: `-${jo(c)}`, [`& > .${Es.item}`]: { paddingLeft: jo(c) } } : (u = s) != null && u.includes(a) ? {} : { width: "100%", marginLeft: 0, [`& > .${Es.item}`]: { paddingLeft: 0 } };
    });
  }
  return o;
}
function lO(e3, t, n = {}) {
  if (!e3 || e3 <= 0) return [];
  if (typeof e3 == "string" && !Number.isNaN(Number(e3)) || typeof e3 == "number") return [n[`spacing-xs-${String(e3)}`]];
  const r = [];
  return t.forEach((o) => {
    const i = e3[o];
    Number(i) > 0 && r.push(n[`spacing-${o}-${String(i)}`]);
  }), r;
}
const aO = Y("div", { name: "MuiGrid", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3, { container: r, direction: o, item: i, spacing: s, wrap: l, zeroMinWidth: a, breakpoints: u } = n;
  let c = [];
  r && (c = lO(s, u, t));
  const d = [];
  return u.forEach((f) => {
    const p = n[f];
    p && d.push(t[`grid-${f}-${String(p)}`]);
  }), [t.root, r && t.container, i && t.item, a && t.zeroMinWidth, ...c, o !== "row" && t[`direction-xs-${String(o)}`], l !== "wrap" && t[`wrap-xs-${String(l)}`], ...d];
} })(({ ownerState: e3 }) => k({ boxSizing: "border-box" }, e3.container && { display: "flex", flexWrap: "wrap", width: "100%" }, e3.item && { margin: 0 }, e3.zeroMinWidth && { minWidth: 0 }, e3.wrap !== "wrap" && { flexWrap: e3.wrap }), oO, iO, sO, rO);
function uO(e3, t) {
  if (!e3 || e3 <= 0) return [];
  if (typeof e3 == "string" && !Number.isNaN(Number(e3)) || typeof e3 == "number") return [`spacing-xs-${String(e3)}`];
  const n = [];
  return t.forEach((r) => {
    const o = e3[r];
    if (Number(o) > 0) {
      const i = `spacing-${r}-${String(o)}`;
      n.push(i);
    }
  }), n;
}
const cO = (e3) => {
  const { classes: t, container: n, direction: r, item: o, spacing: i, wrap: s, zeroMinWidth: l, breakpoints: a } = e3;
  let u = [];
  n && (u = uO(i, a));
  const c = [];
  a.forEach((f) => {
    const p = e3[f];
    p && c.push(`grid-${f}-${String(p)}`);
  });
  const d = { root: ["root", n && "container", o && "item", l && "zeroMinWidth", ...u, r !== "row" && `direction-xs-${String(r)}`, s !== "wrap" && `wrap-xs-${String(s)}`, ...c] };
  return pe(d, ZT, t);
}, Po = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiGrid" }), { breakpoints: o } = ii(), i = mu(r), { className: s, columns: l, columnSpacing: a, component: u = "div", container: c = false, direction: d = "row", item: f = false, rowSpacing: p, spacing: y = 0, wrap: v = "wrap", zeroMinWidth: w = false } = i, h = G(i, nO), m = p || y, g = a || y, x = S.useContext(xg), C = c ? l || 12 : x, E = {}, P = k({}, h);
  o.keys.forEach((T) => {
    h[T] != null && (E[T] = h[T], delete P[T]);
  });
  const $ = k({}, i, { columns: C, container: c, direction: d, item: f, rowSpacing: m, columnSpacing: g, wrap: v, zeroMinWidth: w, spacing: y }, E, { breakpoints: o.keys }), L = cO($);
  return b.jsx(xg.Provider, { value: C, children: b.jsx(aO, k({ ownerState: $, className: q(L.root, s), as: u, ref: n }, P)) });
}), dO = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Xd(e3) {
  return `scale(${e3}, ${e3 ** 2})`;
}
const fO = { entering: { opacity: 1, transform: Xd(1) }, entered: { opacity: 1, transform: "none" } }, Rc = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Pa = S.forwardRef(function(t, n) {
  const { addEndListener: r, appear: o = true, children: i, easing: s, in: l, onEnter: a, onEntered: u, onEntering: c, onExit: d, onExited: f, onExiting: p, style: y, timeout: v = "auto", TransitionComponent: w = Hn } = t, h = G(t, dO), m = Eo(), g = S.useRef(), x = ii(), C = S.useRef(null), E = it(C, ri(i), n), P = (A) => (j) => {
    if (A) {
      const O = C.current;
      j === void 0 ? A(O) : A(O, j);
    }
  }, $ = P(c), L = P((A, j) => {
    Z0(A);
    const { duration: O, delay: R, easing: N } = Ca({ style: y, timeout: v, easing: s }, { mode: "enter" });
    let _;
    v === "auto" ? (_ = x.transitions.getAutoHeightDuration(A.clientHeight), g.current = _) : _ = O, A.style.transition = [x.transitions.create("opacity", { duration: _, delay: R }), x.transitions.create("transform", { duration: Rc ? _ : _ * 0.666, delay: R, easing: N })].join(","), a && a(A, j);
  }), T = P(u), D = P(p), z = P((A) => {
    const { duration: j, delay: O, easing: R } = Ca({ style: y, timeout: v, easing: s }, { mode: "exit" });
    let N;
    v === "auto" ? (N = x.transitions.getAutoHeightDuration(A.clientHeight), g.current = N) : N = j, A.style.transition = [x.transitions.create("opacity", { duration: N, delay: O }), x.transitions.create("transform", { duration: Rc ? N : N * 0.666, delay: Rc ? O : O || N * 0.333, easing: R })].join(","), A.style.opacity = 0, A.style.transform = Xd(0.75), d && d(A);
  }), M = P(f), I = (A) => {
    v === "auto" && m.start(g.current || 0, A), r && r(C.current, A);
  };
  return b.jsx(w, k({ appear: o, in: l, nodeRef: C, onEnter: L, onEntered: T, onEntering: $, onExit: z, onExited: M, onExiting: D, addEndListener: I, timeout: v === "auto" ? null : v }, h, { children: (A, j) => S.cloneElement(i, k({ style: k({ opacity: 0, transform: Xd(0.75), visibility: A === "exited" && !l ? "hidden" : void 0 }, fO[A], y, i.props.style), ref: E }, j)) }));
});
Pa.muiSupportAuto = true;
const pO = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], hO = (e3) => {
  const { classes: t, disableUnderline: n } = e3, o = pe({ root: ["root", !n && "underline"], input: ["input"] }, h$, t);
  return k({}, t, o);
}, mO = Y(Lu, { shouldForwardProp: (e3) => yn(e3) || e3 === "classes", name: "MuiInput", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [...Ou(e3, t), !n.disableUnderline && t.underline];
} })(({ theme: e3, ownerState: t }) => {
  let r = e3.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e3.vars && (r = `rgba(${e3.vars.palette.common.onBackgroundChannel} / ${e3.vars.opacity.inputUnderline})`), k({ position: "relative" }, t.formControl && { "label + &": { marginTop: 16 } }, !t.disableUnderline && { "&::after": { borderBottom: `2px solid ${(e3.vars || e3).palette[t.color].main}`, left: 0, bottom: 0, content: '""', position: "absolute", right: 0, transform: "scaleX(0)", transition: e3.transitions.create("transform", { duration: e3.transitions.duration.shorter, easing: e3.transitions.easing.easeOut }), pointerEvents: "none" }, [`&.${ki.focused}:after`]: { transform: "scaleX(1) translateX(0)" }, [`&.${ki.error}`]: { "&::before, &::after": { borderBottomColor: (e3.vars || e3).palette.error.main } }, "&::before": { borderBottom: `1px solid ${r}`, left: 0, bottom: 0, content: '"\\00a0"', position: "absolute", right: 0, transition: e3.transitions.create("border-bottom-color", { duration: e3.transitions.duration.shorter }), pointerEvents: "none" }, [`&:hover:not(.${ki.disabled}, .${ki.error}):before`]: { borderBottom: `2px solid ${(e3.vars || e3).palette.text.primary}`, "@media (hover: none)": { borderBottom: `1px solid ${r}` } }, [`&.${ki.disabled}:before`]: { borderBottomStyle: "dotted" } });
}), gO = Y(Nu, { name: "MuiInput", slot: "Input", overridesResolver: Mu })({}), Mp = S.forwardRef(function(t, n) {
  var r, o, i, s;
  const l = he({ props: t, name: "MuiInput" }), { disableUnderline: a, components: u = {}, componentsProps: c, fullWidth: d = false, inputComponent: f = "input", multiline: p = false, slotProps: y, slots: v = {}, type: w = "text" } = l, h = G(l, pO), m = hO(l), x = { root: { ownerState: { disableUnderline: a } } }, C = y ?? c ? Yt(y ?? c, x) : x, E = (r = (o = v.root) != null ? o : u.Root) != null ? r : mO, P = (i = (s = v.input) != null ? s : u.Input) != null ? i : gO;
  return b.jsx($p, k({ slots: { root: E, input: P }, slotProps: C, fullWidth: d, inputComponent: f, multiline: p, ref: n, type: w }, h, { classes: m }));
});
Mp.muiName = "Input";
function vO(e3) {
  return ue("MuiInputLabel", e3);
}
se("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const yO = ["disableAnimation", "margin", "shrink", "variant", "className"], xO = (e3) => {
  const { classes: t, formControl: n, size: r, shrink: o, disableAnimation: i, variant: s, required: l } = e3, a = { root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "normal" && `size${Z(r)}`, s], asterisk: [l && "asterisk"] }, u = pe(a, vO, t);
  return k({}, t, u);
}, SO = Y(qT, { shouldForwardProp: (e3) => yn(e3) || e3 === "classes", name: "MuiInputLabel", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [{ [`& .${qi.asterisk}`]: t.asterisk }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
} })(({ theme: e3, ownerState: t }) => k({ display: "block", transformOrigin: "top left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%" }, t.formControl && { position: "absolute", left: 0, top: 0, transform: "translate(0, 20px) scale(1)" }, t.size === "small" && { transform: "translate(0, 17px) scale(1)" }, t.shrink && { transform: "translate(0, -1.5px) scale(0.75)", transformOrigin: "top left", maxWidth: "133%" }, !t.disableAnimation && { transition: e3.transitions.create(["color", "transform", "max-width"], { duration: e3.transitions.duration.shorter, easing: e3.transitions.easing.easeOut }) }, t.variant === "filled" && k({ zIndex: 1, pointerEvents: "none", transform: "translate(12px, 16px) scale(1)", maxWidth: "calc(100% - 24px)" }, t.size === "small" && { transform: "translate(12px, 13px) scale(1)" }, t.shrink && k({ userSelect: "none", pointerEvents: "auto", transform: "translate(12px, 7px) scale(0.75)", maxWidth: "calc(133% - 24px)" }, t.size === "small" && { transform: "translate(12px, 4px) scale(0.75)" })), t.variant === "outlined" && k({ zIndex: 1, pointerEvents: "none", transform: "translate(14px, 16px) scale(1)", maxWidth: "calc(100% - 24px)" }, t.size === "small" && { transform: "translate(14px, 9px) scale(1)" }, t.shrink && { userSelect: "none", pointerEvents: "auto", maxWidth: "calc(133% - 32px)", transform: "translate(14px, -9px) scale(0.75)" }))), bO = S.forwardRef(function(t, n) {
  const r = he({ name: "MuiInputLabel", props: t }), { disableAnimation: o = false, shrink: i, className: s } = r, l = G(r, yO), a = ai();
  let u = i;
  typeof u > "u" && a && (u = a.filled || a.focused || a.adornedStart);
  const c = li({ props: r, muiFormControl: a, states: ["size", "variant", "required", "focused"] }), d = k({}, r, { disableAnimation: o, formControl: a, shrink: u, size: c.size, variant: c.variant, required: c.required, focused: c.focused }), f = xO(d);
  return b.jsx(SO, k({ "data-shrink": u, ownerState: d, ref: n, className: q(f.root, s) }, l, { classes: f }));
}), Gd = S.createContext({});
function wO(e3) {
  return ue("MuiList", e3);
}
se("MuiList", ["root", "padding", "dense", "subheader"]);
const CO = ["children", "className", "component", "dense", "disablePadding", "subheader"], kO = (e3) => {
  const { classes: t, disablePadding: n, dense: r, subheader: o } = e3;
  return pe({ root: ["root", !n && "padding", r && "dense", o && "subheader"] }, wO, t);
}, EO = Y("ul", { name: "MuiList", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
} })(({ ownerState: e3 }) => k({ listStyle: "none", margin: 0, padding: 0, position: "relative" }, !e3.disablePadding && { paddingTop: 8, paddingBottom: 8 }, e3.subheader && { paddingTop: 0 })), PO = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiList" }), { children: o, className: i, component: s = "ul", dense: l = false, disablePadding: a = false, subheader: u } = r, c = G(r, CO), d = S.useMemo(() => ({ dense: l }), [l]), f = k({}, r, { component: s, dense: l, disablePadding: a }), p = kO(f);
  return b.jsx(Gd.Provider, { value: d, children: b.jsxs(EO, k({ as: s, className: q(p.root, i), ref: n, ownerState: f }, c, { children: [u, o] })) });
}), Sg = se("MuiListItemIcon", ["root", "alignItemsFlexStart"]), bg = se("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), RO = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function $c(e3, t, n) {
  return e3 === t ? e3.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e3.firstChild;
}
function wg(e3, t, n) {
  return e3 === t ? n ? e3.firstChild : e3.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e3.lastChild;
}
function y1(e3, t) {
  if (t === void 0) return true;
  let n = e3.innerText;
  return n === void 0 && (n = e3.textContent), n = n.trim().toLowerCase(), n.length === 0 ? false : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function Pi(e3, t, n, r, o, i) {
  let s = false, l = o(e3, t, t ? n : false);
  for (; l; ) {
    if (l === e3.firstChild) {
      if (s) return false;
      s = true;
    }
    const a = r ? false : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !y1(l, i) || a) l = o(e3, l, n);
    else return l.focus(), true;
  }
  return false;
}
const $O = S.forwardRef(function(t, n) {
  const { actions: r, autoFocus: o = false, autoFocusItem: i = false, children: s, className: l, disabledItemsFocusable: a = false, disableListWrap: u = false, onKeyDown: c, variant: d = "selectedMenu" } = t, f = G(t, RO), p = S.useRef(null), y = S.useRef({ keys: [], repeating: true, previousKeyMatched: true, lastTime: null });
  fn(() => {
    o && p.current.focus();
  }, [o]), S.useImperativeHandle(r, () => ({ adjustStyleForScrollbar: (g, { direction: x }) => {
    const C = !p.current.style.width;
    if (g.clientHeight < p.current.clientHeight && C) {
      const E = `${z0(gt(g))}px`;
      p.current.style[x === "rtl" ? "paddingLeft" : "paddingRight"] = E, p.current.style.width = `calc(100% + ${E})`;
    }
    return p.current;
  } }), []);
  const v = (g) => {
    const x = p.current, C = g.key, E = gt(x).activeElement;
    if (C === "ArrowDown") g.preventDefault(), Pi(x, E, u, a, $c);
    else if (C === "ArrowUp") g.preventDefault(), Pi(x, E, u, a, wg);
    else if (C === "Home") g.preventDefault(), Pi(x, null, u, a, $c);
    else if (C === "End") g.preventDefault(), Pi(x, null, u, a, wg);
    else if (C.length === 1) {
      const P = y.current, $ = C.toLowerCase(), L = performance.now();
      P.keys.length > 0 && (L - P.lastTime > 500 ? (P.keys = [], P.repeating = true, P.previousKeyMatched = true) : P.repeating && $ !== P.keys[0] && (P.repeating = false)), P.lastTime = L, P.keys.push($);
      const T = E && !P.repeating && y1(E, P);
      P.previousKeyMatched && (T || Pi(x, E, false, a, $c, P)) ? g.preventDefault() : P.previousKeyMatched = false;
    }
    c && c(g);
  }, w = it(p, n);
  let h = -1;
  S.Children.forEach(s, (g, x) => {
    if (!S.isValidElement(g)) {
      h === x && (h += 1, h >= s.length && (h = -1));
      return;
    }
    g.props.disabled || (d === "selectedMenu" && g.props.selected || h === -1) && (h = x), h === x && (g.props.disabled || g.props.muiSkipListHighlight || g.type.muiSkipListHighlight) && (h += 1, h >= s.length && (h = -1));
  });
  const m = S.Children.map(s, (g, x) => {
    if (x === h) {
      const C = {};
      return i && (C.autoFocus = true), g.props.tabIndex === void 0 && d === "selectedMenu" && (C.tabIndex = 0), S.cloneElement(g, C);
    }
    return g;
  });
  return b.jsx(PO, k({ role: "menu", ref: w, className: l, onKeyDown: v, tabIndex: o ? 0 : -1 }, f, { children: m }));
});
function TO(e3) {
  return ue("MuiPopover", e3);
}
se("MuiPopover", ["root", "paper"]);
const OO = ["onEntering"], MO = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], LO = ["slotProps"];
function Cg(e3, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e3.height / 2 : t === "bottom" && (n = e3.height), n;
}
function kg(e3, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e3.width / 2 : t === "right" && (n = e3.width), n;
}
function Eg(e3) {
  return [e3.horizontal, e3.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Tc(e3) {
  return typeof e3 == "function" ? e3() : e3;
}
const NO = (e3) => {
  const { classes: t } = e3;
  return pe({ root: ["root"], paper: ["paper"] }, TO, t);
}, _O = Y(m1, { name: "MuiPopover", slot: "Root", overridesResolver: (e3, t) => t.root })({}), x1 = Y(yp, { name: "MuiPopover", slot: "Paper", overridesResolver: (e3, t) => t.paper })({ position: "absolute", overflowY: "auto", overflowX: "hidden", minWidth: 16, minHeight: 16, maxWidth: "calc(100% - 32px)", maxHeight: "calc(100% - 32px)", outline: 0 }), IO = S.forwardRef(function(t, n) {
  var r, o, i;
  const s = he({ props: t, name: "MuiPopover" }), { action: l, anchorEl: a, anchorOrigin: u = { vertical: "top", horizontal: "left" }, anchorPosition: c, anchorReference: d = "anchorEl", children: f, className: p, container: y, elevation: v = 8, marginThreshold: w = 16, open: h, PaperProps: m = {}, slots: g, slotProps: x, transformOrigin: C = { vertical: "top", horizontal: "left" }, TransitionComponent: E = Pa, transitionDuration: P = "auto", TransitionProps: { onEntering: $ } = {}, disableScrollLock: L = false } = s, T = G(s.TransitionProps, OO), D = G(s, MO), z = (r = x == null ? void 0 : x.paper) != null ? r : m, M = S.useRef(), I = it(M, z.ref), A = k({}, s, { anchorOrigin: u, anchorReference: d, elevation: v, marginThreshold: w, externalPaperSlotProps: z, transformOrigin: C, TransitionComponent: E, transitionDuration: P, TransitionProps: T }), j = NO(A), O = S.useCallback(() => {
    if (d === "anchorPosition") return c;
    const oe = Tc(a), le = (oe && oe.nodeType === 1 ? oe : gt(M.current).body).getBoundingClientRect();
    return { top: le.top + Cg(le, u.vertical), left: le.left + kg(le, u.horizontal) };
  }, [a, u.horizontal, u.vertical, c, d]), R = S.useCallback((oe) => ({ vertical: Cg(oe, C.vertical), horizontal: kg(oe, C.horizontal) }), [C.horizontal, C.vertical]), N = S.useCallback((oe) => {
    const ce = { width: oe.offsetWidth, height: oe.offsetHeight }, le = R(ce);
    if (d === "none") return { top: null, left: null, transformOrigin: Eg(le) };
    const ct = O();
    let Oe = ct.top - le.vertical, Te = ct.left - le.horizontal;
    const tt = Oe + ce.height, Pe = Te + ce.width, ve = Un(Tc(a)), qe = ve.innerHeight - w, je = ve.innerWidth - w;
    if (w !== null && Oe < w) {
      const Se = Oe - w;
      Oe -= Se, le.vertical += Se;
    } else if (w !== null && tt > qe) {
      const Se = tt - qe;
      Oe -= Se, le.vertical += Se;
    }
    if (w !== null && Te < w) {
      const Se = Te - w;
      Te -= Se, le.horizontal += Se;
    } else if (Pe > je) {
      const Se = Pe - je;
      Te -= Se, le.horizontal += Se;
    }
    return { top: `${Math.round(Oe)}px`, left: `${Math.round(Te)}px`, transformOrigin: Eg(le) };
  }, [a, d, O, R, w]), [_, B] = S.useState(h), W = S.useCallback(() => {
    const oe = M.current;
    if (!oe) return;
    const ce = N(oe);
    ce.top !== null && (oe.style.top = ce.top), ce.left !== null && (oe.style.left = ce.left), oe.style.transformOrigin = ce.transformOrigin, B(true);
  }, [N]);
  S.useEffect(() => (L && window.addEventListener("scroll", W), () => window.removeEventListener("scroll", W)), [a, L, W]);
  const V = (oe, ce) => {
    $ && $(oe, ce), W();
  }, K = () => {
    B(false);
  };
  S.useEffect(() => {
    h && W();
  }), S.useImperativeHandle(l, () => h ? { updatePosition: () => {
    W();
  } } : null, [h, W]), S.useEffect(() => {
    if (!h) return;
    const oe = As(() => {
      W();
    }), ce = Un(a);
    return ce.addEventListener("resize", oe), () => {
      oe.clear(), ce.removeEventListener("resize", oe);
    };
  }, [a, h, W]);
  let te = P;
  P === "auto" && !E.muiSupportAuto && (te = void 0);
  const H = y || (a ? gt(Tc(a)).body : void 0), ie = (o = g == null ? void 0 : g.root) != null ? o : _O, ge = (i = g == null ? void 0 : g.paper) != null ? i : x1, me = Tn({ elementType: ge, externalSlotProps: k({}, z, { style: _ ? z.style : k({}, z.style, { opacity: 0 }) }), additionalProps: { elevation: v, ref: I }, ownerState: A, className: q(j.paper, z == null ? void 0 : z.className) }), Ie = Tn({ elementType: ie, externalSlotProps: (x == null ? void 0 : x.root) || {}, externalForwardedProps: D, additionalProps: { ref: n, slotProps: { backdrop: { invisible: true } }, container: H, open: h }, ownerState: A, className: q(j.root, p) }), { slotProps: re } = Ie, Ee = G(Ie, LO);
  return b.jsx(ie, k({}, Ee, !xa(ie) && { slotProps: re, disableScrollLock: L }, { children: b.jsx(E, k({ appear: true, in: h, onEntering: V, onExited: K, timeout: te }, T, { children: b.jsx(ge, k({}, me, { children: f })) })) }));
});
function jO(e3) {
  return ue("MuiMenu", e3);
}
se("MuiMenu", ["root", "paper", "list"]);
const zO = ["onEntering"], AO = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], DO = { vertical: "top", horizontal: "right" }, FO = { vertical: "top", horizontal: "left" }, BO = (e3) => {
  const { classes: t } = e3;
  return pe({ root: ["root"], paper: ["paper"], list: ["list"] }, jO, t);
}, WO = Y(IO, { shouldForwardProp: (e3) => yn(e3) || e3 === "classes", name: "MuiMenu", slot: "Root", overridesResolver: (e3, t) => t.root })({}), UO = Y(x1, { name: "MuiMenu", slot: "Paper", overridesResolver: (e3, t) => t.paper })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }), VO = Y($O, { name: "MuiMenu", slot: "List", overridesResolver: (e3, t) => t.list })({ outline: 0 }), S1 = S.forwardRef(function(t, n) {
  var r, o;
  const i = he({ props: t, name: "MuiMenu" }), { autoFocus: s = true, children: l, className: a, disableAutoFocusItem: u = false, MenuListProps: c = {}, onClose: d, open: f, PaperProps: p = {}, PopoverClasses: y, transitionDuration: v = "auto", TransitionProps: { onEntering: w } = {}, variant: h = "selectedMenu", slots: m = {}, slotProps: g = {} } = i, x = G(i.TransitionProps, zO), C = G(i, AO), E = Ru(), P = k({}, i, { autoFocus: s, disableAutoFocusItem: u, MenuListProps: c, onEntering: w, PaperProps: p, transitionDuration: v, TransitionProps: x, variant: h }), $ = BO(P), L = s && !u && f, T = S.useRef(null), D = (R, N) => {
    T.current && T.current.adjustStyleForScrollbar(R, { direction: E ? "rtl" : "ltr" }), w && w(R, N);
  }, z = (R) => {
    R.key === "Tab" && (R.preventDefault(), d && d(R, "tabKeyDown"));
  };
  let M = -1;
  S.Children.map(l, (R, N) => {
    S.isValidElement(R) && (R.props.disabled || (h === "selectedMenu" && R.props.selected || M === -1) && (M = N));
  });
  const I = (r = m.paper) != null ? r : UO, A = (o = g.paper) != null ? o : p, j = Tn({ elementType: m.root, externalSlotProps: g.root, ownerState: P, className: [$.root, a] }), O = Tn({ elementType: I, externalSlotProps: A, ownerState: P, className: $.paper });
  return b.jsx(WO, k({ onClose: d, anchorOrigin: { vertical: "bottom", horizontal: E ? "right" : "left" }, transformOrigin: E ? DO : FO, slots: { paper: I, root: m.root }, slotProps: { root: j, paper: O }, open: f, ref: n, transitionDuration: v, TransitionProps: k({ onEntering: D }, x), ownerState: P }, C, { classes: y, children: b.jsx(VO, k({ onKeyDown: z, actions: T, autoFocus: s && (M === -1 || u), autoFocusItem: L, variant: h }, c, { className: q($.list, c.className), children: l })) }));
});
function HO(e3) {
  return ue("MuiMenuItem", e3);
}
const Ri = se("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), KO = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"], YO = (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, XO = (e3) => {
  const { disabled: t, dense: n, divider: r, disableGutters: o, selected: i, classes: s } = e3, a = pe({ root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"] }, HO, s);
  return k({}, s, a);
}, GO = Y(Us, { shouldForwardProp: (e3) => yn(e3) || e3 === "classes", name: "MuiMenuItem", slot: "Root", overridesResolver: YO })(({ theme: e3, ownerState: t }) => k({}, e3.typography.body1, { display: "flex", justifyContent: "flex-start", alignItems: "center", position: "relative", textDecoration: "none", minHeight: 48, paddingTop: 6, paddingBottom: 6, boxSizing: "border-box", whiteSpace: "nowrap" }, !t.disableGutters && { paddingLeft: 16, paddingRight: 16 }, t.divider && { borderBottom: `1px solid ${(e3.vars || e3).palette.divider}`, backgroundClip: "padding-box" }, { "&:hover": { textDecoration: "none", backgroundColor: (e3.vars || e3).palette.action.hover, "@media (hover: none)": { backgroundColor: "transparent" } }, [`&.${Ri.selected}`]: { backgroundColor: e3.vars ? `rgba(${e3.vars.palette.primary.mainChannel} / ${e3.vars.palette.action.selectedOpacity})` : Mt(e3.palette.primary.main, e3.palette.action.selectedOpacity), [`&.${Ri.focusVisible}`]: { backgroundColor: e3.vars ? `rgba(${e3.vars.palette.primary.mainChannel} / calc(${e3.vars.palette.action.selectedOpacity} + ${e3.vars.palette.action.focusOpacity}))` : Mt(e3.palette.primary.main, e3.palette.action.selectedOpacity + e3.palette.action.focusOpacity) } }, [`&.${Ri.selected}:hover`]: { backgroundColor: e3.vars ? `rgba(${e3.vars.palette.primary.mainChannel} / calc(${e3.vars.palette.action.selectedOpacity} + ${e3.vars.palette.action.hoverOpacity}))` : Mt(e3.palette.primary.main, e3.palette.action.selectedOpacity + e3.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: e3.vars ? `rgba(${e3.vars.palette.primary.mainChannel} / ${e3.vars.palette.action.selectedOpacity})` : Mt(e3.palette.primary.main, e3.palette.action.selectedOpacity) } }, [`&.${Ri.focusVisible}`]: { backgroundColor: (e3.vars || e3).palette.action.focus }, [`&.${Ri.disabled}`]: { opacity: (e3.vars || e3).palette.action.disabledOpacity }, [`& + .${gg.root}`]: { marginTop: e3.spacing(1), marginBottom: e3.spacing(1) }, [`& + .${gg.inset}`]: { marginLeft: 52 }, [`& .${bg.root}`]: { marginTop: 0, marginBottom: 0 }, [`& .${bg.inset}`]: { paddingLeft: 36 }, [`& .${Sg.root}`]: { minWidth: 36 } }, !t.dense && { [e3.breakpoints.up("sm")]: { minHeight: "auto" } }, t.dense && k({ minHeight: 32, paddingTop: 4, paddingBottom: 4 }, e3.typography.body2, { [`& .${Sg.root} svg`]: { fontSize: "1.25rem" } }))), Oc = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiMenuItem" }), { autoFocus: o = false, component: i = "li", dense: s = false, divider: l = false, disableGutters: a = false, focusVisibleClassName: u, role: c = "menuitem", tabIndex: d, className: f } = r, p = G(r, KO), y = S.useContext(Gd), v = S.useMemo(() => ({ dense: s || y.dense || false, disableGutters: a }), [y.dense, s, a]), w = S.useRef(null);
  fn(() => {
    o && w.current && w.current.focus();
  }, [o]);
  const h = k({}, r, { dense: v.dense, divider: l, disableGutters: a }), m = XO(r), g = it(w, n);
  let x;
  return r.disabled || (x = d !== void 0 ? d : -1), b.jsx(Gd.Provider, { value: v, children: b.jsx(GO, k({ ref: g, role: c, tabIndex: x, component: i, focusVisibleClassName: q(m.focusVisible, u), className: q(m.root, f) }, p, { ownerState: h, classes: m })) });
});
function QO(e3) {
  return ue("MuiNativeSelect", e3);
}
const Lp = se("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), qO = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], ZO = (e3) => {
  const { classes: t, variant: n, disabled: r, multiple: o, open: i, error: s } = e3, l = { select: ["select", n, r && "disabled", o && "multiple", s && "error"], icon: ["icon", `icon${Z(n)}`, i && "iconOpen", r && "disabled"] };
  return pe(l, QO, t);
}, b1 = ({ ownerState: e3, theme: t }) => k({ MozAppearance: "none", WebkitAppearance: "none", userSelect: "none", borderRadius: 0, cursor: "pointer", "&:focus": k({}, t.vars ? { backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)` } : { backgroundColor: t.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)" }, { borderRadius: 0 }), "&::-ms-expand": { display: "none" }, [`&.${Lp.disabled}`]: { cursor: "default" }, "&[multiple]": { height: "auto" }, "&:not([multiple]) option, &:not([multiple]) optgroup": { backgroundColor: (t.vars || t).palette.background.paper }, "&&&": { paddingRight: 24, minWidth: 16 } }, e3.variant === "filled" && { "&&&": { paddingRight: 32 } }, e3.variant === "outlined" && { borderRadius: (t.vars || t).shape.borderRadius, "&:focus": { borderRadius: (t.vars || t).shape.borderRadius }, "&&&": { paddingRight: 32 } }), JO = Y("select", { name: "MuiNativeSelect", slot: "Select", shouldForwardProp: yn, overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.select, t[n.variant], n.error && t.error, { [`&.${Lp.multiple}`]: t.multiple }];
} })(b1), w1 = ({ ownerState: e3, theme: t }) => k({ position: "absolute", right: 0, top: "calc(50% - .5em)", pointerEvents: "none", color: (t.vars || t).palette.action.active, [`&.${Lp.disabled}`]: { color: (t.vars || t).palette.action.disabled } }, e3.open && { transform: "rotate(180deg)" }, e3.variant === "filled" && { right: 7 }, e3.variant === "outlined" && { right: 7 }), eM = Y("svg", { name: "MuiNativeSelect", slot: "Icon", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.icon, n.variant && t[`icon${Z(n.variant)}`], n.open && t.iconOpen];
} })(w1), tM = S.forwardRef(function(t, n) {
  const { className: r, disabled: o, error: i, IconComponent: s, inputRef: l, variant: a = "standard" } = t, u = G(t, qO), c = k({}, t, { disabled: o, variant: a, error: i }), d = ZO(c);
  return b.jsxs(S.Fragment, { children: [b.jsx(JO, k({ ownerState: c, className: q(d.select, r), disabled: o, ref: l || n }, u)), t.multiple ? null : b.jsx(eM, { as: s, ownerState: c, className: d.icon })] });
});
var Pg;
const nM = ["children", "classes", "className", "label", "notched"], rM = Y("fieldset", { name: "MuiNotchedOutlined", shouldForwardProp: yn })({ textAlign: "left", position: "absolute", bottom: 0, right: 0, top: -5, left: 0, margin: 0, padding: "0 8px", pointerEvents: "none", borderRadius: "inherit", borderStyle: "solid", borderWidth: 1, overflow: "hidden", minWidth: "0%" }), oM = Y("legend", { name: "MuiNotchedOutlined", shouldForwardProp: yn })(({ ownerState: e3, theme: t }) => k({ float: "unset", width: "auto", overflow: "hidden" }, !e3.withLabel && { padding: 0, lineHeight: "11px", transition: t.transitions.create("width", { duration: 150, easing: t.transitions.easing.easeOut }) }, e3.withLabel && k({ display: "block", padding: 0, height: 11, fontSize: "0.75em", visibility: "hidden", maxWidth: 0.01, transition: t.transitions.create("max-width", { duration: 50, easing: t.transitions.easing.easeOut }), whiteSpace: "nowrap", "& > span": { paddingLeft: 5, paddingRight: 5, display: "inline-block", opacity: 0, visibility: "visible" } }, e3.notched && { maxWidth: "100%", transition: t.transitions.create("max-width", { duration: 100, easing: t.transitions.easing.easeOut, delay: 50 }) })));
function iM(e3) {
  const { className: t, label: n, notched: r } = e3, o = G(e3, nM), i = n != null && n !== "", s = k({}, e3, { notched: r, withLabel: i });
  return b.jsx(rM, k({ "aria-hidden": true, className: t, ownerState: s }, o, { children: b.jsx(oM, { ownerState: s, children: i ? b.jsx("span", { children: n }) : Pg || (Pg = b.jsx("span", { className: "notranslate", children: "\u200B" })) }) }));
}
const sM = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], lM = (e3) => {
  const { classes: t } = e3, r = pe({ root: ["root"], notchedOutline: ["notchedOutline"], input: ["input"] }, m$, t);
  return k({}, t, r);
}, aM = Y(Lu, { shouldForwardProp: (e3) => yn(e3) || e3 === "classes", name: "MuiOutlinedInput", slot: "Root", overridesResolver: Ou })(({ theme: e3, ownerState: t }) => {
  const n = e3.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return k({ position: "relative", borderRadius: (e3.vars || e3).shape.borderRadius, [`&:hover .${lr.notchedOutline}`]: { borderColor: (e3.vars || e3).palette.text.primary }, "@media (hover: none)": { [`&:hover .${lr.notchedOutline}`]: { borderColor: e3.vars ? `rgba(${e3.vars.palette.common.onBackgroundChannel} / 0.23)` : n } }, [`&.${lr.focused} .${lr.notchedOutline}`]: { borderColor: (e3.vars || e3).palette[t.color].main, borderWidth: 2 }, [`&.${lr.error} .${lr.notchedOutline}`]: { borderColor: (e3.vars || e3).palette.error.main }, [`&.${lr.disabled} .${lr.notchedOutline}`]: { borderColor: (e3.vars || e3).palette.action.disabled } }, t.startAdornment && { paddingLeft: 14 }, t.endAdornment && { paddingRight: 14 }, t.multiline && k({ padding: "16.5px 14px" }, t.size === "small" && { padding: "8.5px 14px" }));
}), uM = Y(iM, { name: "MuiOutlinedInput", slot: "NotchedOutline", overridesResolver: (e3, t) => t.notchedOutline })(({ theme: e3 }) => {
  const t = e3.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return { borderColor: e3.vars ? `rgba(${e3.vars.palette.common.onBackgroundChannel} / 0.23)` : t };
}), cM = Y(Nu, { name: "MuiOutlinedInput", slot: "Input", overridesResolver: Mu })(({ theme: e3, ownerState: t }) => k({ padding: "16.5px 14px" }, !e3.vars && { "&:-webkit-autofill": { WebkitBoxShadow: e3.palette.mode === "light" ? null : "0 0 0 100px #266798 inset", WebkitTextFillColor: e3.palette.mode === "light" ? null : "#fff", caretColor: e3.palette.mode === "light" ? null : "#fff", borderRadius: "inherit" } }, e3.vars && { "&:-webkit-autofill": { borderRadius: "inherit" }, [e3.getColorSchemeSelector("dark")]: { "&:-webkit-autofill": { WebkitBoxShadow: "0 0 0 100px #266798 inset", WebkitTextFillColor: "#fff", caretColor: "#fff" } } }, t.size === "small" && { padding: "8.5px 14px" }, t.multiline && { padding: 0 }, t.startAdornment && { paddingLeft: 0 }, t.endAdornment && { paddingRight: 0 })), Np = S.forwardRef(function(t, n) {
  var r, o, i, s, l;
  const a = he({ props: t, name: "MuiOutlinedInput" }), { components: u = {}, fullWidth: c = false, inputComponent: d = "input", label: f, multiline: p = false, notched: y, slots: v = {}, type: w = "text" } = a, h = G(a, sM), m = lM(a), g = ai(), x = li({ props: a, muiFormControl: g, states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"] }), C = k({}, a, { color: x.color || "primary", disabled: x.disabled, error: x.error, focused: x.focused, formControl: g, fullWidth: c, hiddenLabel: x.hiddenLabel, multiline: p, size: x.size, type: w }), E = (r = (o = v.root) != null ? o : u.Root) != null ? r : aM, P = (i = (s = v.input) != null ? s : u.Input) != null ? i : cM;
  return b.jsx($p, k({ slots: { root: E, input: P }, renderSuffix: ($) => b.jsx(uM, { ownerState: C, className: m.notchedOutline, label: f != null && f !== "" && x.required ? l || (l = b.jsxs(S.Fragment, { children: [f, "\u2009", "*"] })) : f, notched: typeof y < "u" ? y : !!($.startAdornment || $.filled || $.focused) }), fullWidth: c, inputComponent: d, multiline: p, ref: n, type: w }, h, { classes: k({}, m, { notchedOutline: null }) }));
});
Np.muiName = "Input";
function dM(e3) {
  return ue("MuiSelect", e3);
}
const $i = se("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var Rg;
const fM = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], pM = Y("div", { name: "MuiSelect", slot: "Select", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [{ [`&.${$i.select}`]: t.select }, { [`&.${$i.select}`]: t[n.variant] }, { [`&.${$i.error}`]: t.error }, { [`&.${$i.multiple}`]: t.multiple }];
} })(b1, { [`&.${$i.select}`]: { height: "auto", minHeight: "1.4375em", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" } }), hM = Y("svg", { name: "MuiSelect", slot: "Icon", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.icon, n.variant && t[`icon${Z(n.variant)}`], n.open && t.iconOpen];
} })(w1), mM = Y("input", { shouldForwardProp: (e3) => Q0(e3) && e3 !== "classes", name: "MuiSelect", slot: "NativeInput", overridesResolver: (e3, t) => t.nativeInput })({ bottom: 0, left: 0, position: "absolute", opacity: 0, pointerEvents: "none", width: "100%", boxSizing: "border-box" });
function $g(e3, t) {
  return typeof t == "object" && t !== null ? e3 === t : String(e3) === String(t);
}
function gM(e3) {
  return e3 == null || typeof e3 == "string" && !e3.trim();
}
const vM = (e3) => {
  const { classes: t, variant: n, disabled: r, multiple: o, open: i, error: s } = e3, l = { select: ["select", n, r && "disabled", o && "multiple", s && "error"], icon: ["icon", `icon${Z(n)}`, i && "iconOpen", r && "disabled"], nativeInput: ["nativeInput"] };
  return pe(l, dM, t);
}, yM = S.forwardRef(function(t, n) {
  var r;
  const { "aria-describedby": o, "aria-label": i, autoFocus: s, autoWidth: l, children: a, className: u, defaultOpen: c, defaultValue: d, disabled: f, displayEmpty: p, error: y = false, IconComponent: v, inputRef: w, labelId: h, MenuProps: m = {}, multiple: g, name: x, onBlur: C, onChange: E, onClose: P, onFocus: $, onOpen: L, open: T, readOnly: D, renderValue: z, SelectDisplayProps: M = {}, tabIndex: I, value: A, variant: j = "standard" } = t, O = G(t, fM), [R, N] = ya({ controlled: A, default: d, name: "Select" }), [_, B] = ya({ controlled: T, default: c, name: "Select" }), W = S.useRef(null), V = S.useRef(null), [K, te] = S.useState(null), { current: H } = S.useRef(T != null), [ie, ge] = S.useState(), me = it(n, w), Ie = S.useCallback((ee) => {
    V.current = ee, ee && te(ee);
  }, []), re = K == null ? void 0 : K.parentNode;
  S.useImperativeHandle(me, () => ({ focus: () => {
    V.current.focus();
  }, node: W.current, value: R }), [R]), S.useEffect(() => {
    c && _ && K && !H && (ge(l ? null : re.clientWidth), V.current.focus());
  }, [K, l]), S.useEffect(() => {
    s && V.current.focus();
  }, [s]), S.useEffect(() => {
    if (!h) return;
    const ee = gt(V.current).getElementById(h);
    if (ee) {
      const we = () => {
        getSelection().isCollapsed && V.current.focus();
      };
      return ee.addEventListener("click", we), () => {
        ee.removeEventListener("click", we);
      };
    }
  }, [h]);
  const Ee = (ee, we) => {
    ee ? L && L(we) : P && P(we), H || (ge(l ? null : re.clientWidth), B(ee));
  }, oe = (ee) => {
    ee.button === 0 && (ee.preventDefault(), V.current.focus(), Ee(true, ee));
  }, ce = (ee) => {
    Ee(false, ee);
  }, le = S.Children.toArray(a), ct = (ee) => {
    const we = le.find((U) => U.props.value === ee.target.value);
    we !== void 0 && (N(we.props.value), E && E(ee, we));
  }, Oe = (ee) => (we) => {
    let U;
    if (we.currentTarget.hasAttribute("tabindex")) {
      if (g) {
        U = Array.isArray(R) ? R.slice() : [];
        const Q = R.indexOf(ee.props.value);
        Q === -1 ? U.push(ee.props.value) : U.splice(Q, 1);
      } else U = ee.props.value;
      if (ee.props.onClick && ee.props.onClick(we), R !== U && (N(U), E)) {
        const Q = we.nativeEvent || we, de = new Q.constructor(Q.type, Q);
        Object.defineProperty(de, "target", { writable: true, value: { value: U, name: x } }), E(de, ee);
      }
      g || Ee(false, we);
    }
  }, Te = (ee) => {
    D || [" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(ee.key) !== -1 && (ee.preventDefault(), Ee(true, ee));
  }, tt = K !== null && _, Pe = (ee) => {
    !tt && C && (Object.defineProperty(ee, "target", { writable: true, value: { value: R, name: x } }), C(ee));
  };
  delete O["aria-invalid"];
  let ve, qe;
  const je = [];
  let Se = false;
  (Ea({ value: R }) || p) && (z ? ve = z(R) : Se = true);
  const nt = le.map((ee) => {
    if (!S.isValidElement(ee)) return null;
    let we;
    if (g) {
      if (!Array.isArray(R)) throw new Error(Zr(2));
      we = R.some((U) => $g(U, ee.props.value)), we && Se && je.push(ee.props.children);
    } else we = $g(R, ee.props.value), we && Se && (qe = ee.props.children);
    return S.cloneElement(ee, { "aria-selected": we ? "true" : "false", onClick: Oe(ee), onKeyUp: (U) => {
      U.key === " " && U.preventDefault(), ee.props.onKeyUp && ee.props.onKeyUp(U);
    }, role: "option", selected: we, value: void 0, "data-value": ee.props.value });
  });
  Se && (g ? je.length === 0 ? ve = null : ve = je.reduce((ee, we, U) => (ee.push(we), U < je.length - 1 && ee.push(", "), ee), []) : ve = qe);
  let st = ie;
  !l && H && K && (st = re.clientWidth);
  let dt;
  typeof I < "u" ? dt = I : dt = f ? null : 0;
  const ye = M.id || (x ? `mui-component-select-${x}` : void 0), J = k({}, t, { variant: j, value: R, open: tt, error: y }), Ue = vM(J), $t = k({}, m.PaperProps, (r = m.slotProps) == null ? void 0 : r.paper), At = Ds();
  return b.jsxs(S.Fragment, { children: [b.jsx(pM, k({ ref: Ie, tabIndex: dt, role: "combobox", "aria-controls": At, "aria-disabled": f ? "true" : void 0, "aria-expanded": tt ? "true" : "false", "aria-haspopup": "listbox", "aria-label": i, "aria-labelledby": [h, ye].filter(Boolean).join(" ") || void 0, "aria-describedby": o, onKeyDown: Te, onMouseDown: f || D ? null : oe, onBlur: Pe, onFocus: $ }, M, { ownerState: J, className: q(M.className, Ue.select, u), id: ye, children: gM(ve) ? Rg || (Rg = b.jsx("span", { className: "notranslate", children: "\u200B" })) : ve })), b.jsx(mM, k({ "aria-invalid": y, value: Array.isArray(R) ? R.join(",") : R, name: x, ref: W, "aria-hidden": true, onChange: ct, tabIndex: -1, disabled: f, className: Ue.nativeInput, autoFocus: s, ownerState: J }, O)), b.jsx(hM, { as: v, className: Ue.icon, ownerState: J }), b.jsx(S1, k({ id: `menu-${x || ""}`, anchorEl: re, open: tt, onClose: ce, anchorOrigin: { vertical: "bottom", horizontal: "center" }, transformOrigin: { vertical: "top", horizontal: "center" } }, m, { MenuListProps: k({ "aria-labelledby": h, role: "listbox", "aria-multiselectable": g ? "true" : void 0, disableListWrap: true, id: At }, m.MenuListProps), slotProps: k({}, m.slotProps, { paper: k({}, $t, { style: k({ minWidth: st }, $t != null ? $t.style : null) }) }), children: nt }))] });
}), xM = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], SM = ["root"], bM = (e3) => {
  const { classes: t } = e3;
  return t;
}, _p = { name: "MuiSelect", overridesResolver: (e3, t) => t.root, shouldForwardProp: (e3) => yn(e3) && e3 !== "variant", slot: "Root" }, wM = Y(Mp, _p)(""), CM = Y(Np, _p)(""), kM = Y(Op, _p)(""), Ip = S.forwardRef(function(t, n) {
  const r = he({ name: "MuiSelect", props: t }), { autoWidth: o = false, children: i, classes: s = {}, className: l, defaultOpen: a = false, displayEmpty: u = false, IconComponent: c = v$, id: d, input: f, inputProps: p, label: y, labelId: v, MenuProps: w, multiple: h = false, native: m = false, onClose: g, onOpen: x, open: C, renderValue: E, SelectDisplayProps: P, variant: $ = "outlined" } = r, L = G(r, xM), T = m ? tM : yM, D = ai(), z = li({ props: r, muiFormControl: D, states: ["variant", "error"] }), M = z.variant || $, I = k({}, r, { variant: M, classes: s }), A = bM(I), j = G(A, SM), O = f || { standard: b.jsx(wM, { ownerState: I }), outlined: b.jsx(CM, { label: y, ownerState: I }), filled: b.jsx(kM, { ownerState: I }) }[M], R = it(n, ri(O));
  return b.jsx(S.Fragment, { children: S.cloneElement(O, k({ inputComponent: T, inputProps: k({ children: i, error: z.error, IconComponent: c, variant: M, type: void 0, multiple: h }, m ? { id: d } : { autoWidth: o, defaultOpen: a, displayEmpty: u, labelId: v, MenuProps: w, onClose: g, onOpen: x, open: C, renderValue: E, SelectDisplayProps: k({ id: d }, P) }, p, { classes: p ? Yt(j, p.classes) : j }, f ? f.props.inputProps : {}) }, (h && m || u) && M === "outlined" ? { notched: true } : {}, { ref: R, className: q(O.props.className, l, A.root) }, !f && { variant: M }, L)) });
});
Ip.muiName = "Select";
function EM(e3) {
  return ue("MuiTooltip", e3);
}
const gr = se("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), PM = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function RM(e3) {
  return Math.round(e3 * 1e5) / 1e5;
}
const $M = (e3) => {
  const { classes: t, disableInteractive: n, arrow: r, touch: o, placement: i } = e3, s = { popper: ["popper", !n && "popperInteractive", r && "popperArrow"], tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${Z(i.split("-")[0])}`], arrow: ["arrow"] };
  return pe(s, EM, t);
}, TM = Y(d1, { name: "MuiTooltip", slot: "Popper", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
} })(({ theme: e3, ownerState: t, open: n }) => k({ zIndex: (e3.vars || e3).zIndex.tooltip, pointerEvents: "none" }, !t.disableInteractive && { pointerEvents: "auto" }, !n && { pointerEvents: "none" }, t.arrow && { [`&[data-popper-placement*="bottom"] .${gr.arrow}`]: { top: 0, marginTop: "-0.71em", "&::before": { transformOrigin: "0 100%" } }, [`&[data-popper-placement*="top"] .${gr.arrow}`]: { bottom: 0, marginBottom: "-0.71em", "&::before": { transformOrigin: "100% 0" } }, [`&[data-popper-placement*="right"] .${gr.arrow}`]: k({}, t.isRtl ? { right: 0, marginRight: "-0.71em" } : { left: 0, marginLeft: "-0.71em" }, { height: "1em", width: "0.71em", "&::before": { transformOrigin: "100% 100%" } }), [`&[data-popper-placement*="left"] .${gr.arrow}`]: k({}, t.isRtl ? { left: 0, marginLeft: "-0.71em" } : { right: 0, marginRight: "-0.71em" }, { height: "1em", width: "0.71em", "&::before": { transformOrigin: "0 0" } }) })), OM = Y("div", { name: "MuiTooltip", slot: "Tooltip", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${Z(n.placement.split("-")[0])}`]];
} })(({ theme: e3, ownerState: t }) => k({ backgroundColor: e3.vars ? e3.vars.palette.Tooltip.bg : Mt(e3.palette.grey[700], 0.92), borderRadius: (e3.vars || e3).shape.borderRadius, color: (e3.vars || e3).palette.common.white, fontFamily: e3.typography.fontFamily, padding: "4px 8px", fontSize: e3.typography.pxToRem(11), maxWidth: 300, margin: 2, wordWrap: "break-word", fontWeight: e3.typography.fontWeightMedium }, t.arrow && { position: "relative", margin: 0 }, t.touch && { padding: "8px 16px", fontSize: e3.typography.pxToRem(14), lineHeight: `${RM(16 / 14)}em`, fontWeight: e3.typography.fontWeightRegular }, { [`.${gr.popper}[data-popper-placement*="left"] &`]: k({ transformOrigin: "right center" }, t.isRtl ? k({ marginLeft: "14px" }, t.touch && { marginLeft: "24px" }) : k({ marginRight: "14px" }, t.touch && { marginRight: "24px" })), [`.${gr.popper}[data-popper-placement*="right"] &`]: k({ transformOrigin: "left center" }, t.isRtl ? k({ marginRight: "14px" }, t.touch && { marginRight: "24px" }) : k({ marginLeft: "14px" }, t.touch && { marginLeft: "24px" })), [`.${gr.popper}[data-popper-placement*="top"] &`]: k({ transformOrigin: "center bottom", marginBottom: "14px" }, t.touch && { marginBottom: "24px" }), [`.${gr.popper}[data-popper-placement*="bottom"] &`]: k({ transformOrigin: "center top", marginTop: "14px" }, t.touch && { marginTop: "24px" }) })), MM = Y("span", { name: "MuiTooltip", slot: "Arrow", overridesResolver: (e3, t) => t.arrow })(({ theme: e3 }) => ({ overflow: "hidden", position: "absolute", width: "1em", height: "0.71em", boxSizing: "border-box", color: e3.vars ? e3.vars.palette.Tooltip.bg : Mt(e3.palette.grey[700], 0.9), "&::before": { content: '""', margin: "auto", display: "block", width: "100%", height: "100%", backgroundColor: "currentColor", transform: "rotate(45deg)" } }));
let vl = false;
const Tg = new Fs();
let Ti = { x: 0, y: 0 };
function yl(e3, t) {
  return (n, ...r) => {
    t && t(n, ...r), e3(n, ...r);
  };
}
const LM = S.forwardRef(function(t, n) {
  var r, o, i, s, l, a, u, c, d, f, p, y, v, w, h, m, g, x, C;
  const E = he({ props: t, name: "MuiTooltip" }), { arrow: P = false, children: $, components: L = {}, componentsProps: T = {}, describeChild: D = false, disableFocusListener: z = false, disableHoverListener: M = false, disableInteractive: I = false, disableTouchListener: A = false, enterDelay: j = 100, enterNextDelay: O = 0, enterTouchDelay: R = 700, followCursor: N = false, id: _, leaveDelay: B = 0, leaveTouchDelay: W = 1500, onClose: V, onOpen: K, open: te, placement: H = "bottom", PopperComponent: ie, PopperProps: ge = {}, slotProps: me = {}, slots: Ie = {}, title: re, TransitionComponent: Ee = Pa, TransitionProps: oe } = E, ce = G(E, PM), le = S.isValidElement($) ? $ : b.jsx("span", { children: $ }), ct = ii(), Oe = Ru(), [Te, tt] = S.useState(), [Pe, ve] = S.useState(null), qe = S.useRef(false), je = I || N, Se = Eo(), nt = Eo(), st = Eo(), dt = Eo(), [ye, J] = ya({ controlled: te, default: false, name: "Tooltip", state: "open" });
  let Ue = ye;
  const $t = Ds(_), At = S.useRef(), ee = Ut(() => {
    At.current !== void 0 && (document.body.style.WebkitUserSelect = At.current, At.current = void 0), dt.clear();
  });
  S.useEffect(() => ee, [ee]);
  const we = (fe) => {
    Tg.clear(), vl = true, J(true), K && !Ue && K(fe);
  }, U = Ut((fe) => {
    Tg.start(800 + B, () => {
      vl = false;
    }), J(false), V && Ue && V(fe), Se.start(ct.transitions.duration.shortest, () => {
      qe.current = false;
    });
  }), Q = (fe) => {
    qe.current && fe.type !== "touchstart" || (Te && Te.removeAttribute("title"), nt.clear(), st.clear(), j || vl && O ? nt.start(vl ? O : j, () => {
      we(fe);
    }) : we(fe));
  }, de = (fe) => {
    nt.clear(), st.start(B, () => {
      U(fe);
    });
  }, { isFocusVisibleRef: xe, onBlur: Ve, onFocus: ft, ref: Jt } = dp(), [, ir] = S.useState(false), Sn = (fe) => {
    Ve(fe), xe.current === false && (ir(false), de(fe));
  }, no = (fe) => {
    Te || tt(fe.currentTarget), ft(fe), xe.current === true && (ir(true), Q(fe));
  }, Fp = (fe) => {
    qe.current = true;
    const Dt = le.props;
    Dt.onTouchStart && Dt.onTouchStart(fe);
  }, N1 = (fe) => {
    Fp(fe), st.clear(), Se.clear(), ee(), At.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", dt.start(R, () => {
      document.body.style.WebkitUserSelect = At.current, Q(fe);
    });
  }, _1 = (fe) => {
    le.props.onTouchEnd && le.props.onTouchEnd(fe), ee(), st.start(W, () => {
      U(fe);
    });
  };
  S.useEffect(() => {
    if (!Ue) return;
    function fe(Dt) {
      (Dt.key === "Escape" || Dt.key === "Esc") && U(Dt);
    }
    return document.addEventListener("keydown", fe), () => {
      document.removeEventListener("keydown", fe);
    };
  }, [U, Ue]);
  const I1 = it(ri(le), Jt, tt, n);
  !re && re !== 0 && (Ue = false);
  const Au = S.useRef(), j1 = (fe) => {
    const Dt = le.props;
    Dt.onMouseMove && Dt.onMouseMove(fe), Ti = { x: fe.clientX, y: fe.clientY }, Au.current && Au.current.update();
  }, ui = {}, Du = typeof re == "string";
  D ? (ui.title = !Ue && Du && !M ? re : null, ui["aria-describedby"] = Ue ? $t : null) : (ui["aria-label"] = Du ? re : null, ui["aria-labelledby"] = Ue && !Du ? $t : null);
  const bn = k({}, ui, ce, le.props, { className: q(ce.className, le.props.className), onTouchStart: Fp, ref: I1 }, N ? { onMouseMove: j1 } : {}), ci = {};
  A || (bn.onTouchStart = N1, bn.onTouchEnd = _1), M || (bn.onMouseOver = yl(Q, bn.onMouseOver), bn.onMouseLeave = yl(de, bn.onMouseLeave), je || (ci.onMouseOver = Q, ci.onMouseLeave = de)), z || (bn.onFocus = yl(no, bn.onFocus), bn.onBlur = yl(Sn, bn.onBlur), je || (ci.onFocus = no, ci.onBlur = Sn));
  const z1 = S.useMemo(() => {
    var fe;
    let Dt = [{ name: "arrow", enabled: !!Pe, options: { element: Pe, padding: 4 } }];
    return (fe = ge.popperOptions) != null && fe.modifiers && (Dt = Dt.concat(ge.popperOptions.modifiers)), k({}, ge.popperOptions, { modifiers: Dt });
  }, [Pe, ge]), di = k({}, E, { isRtl: Oe, arrow: P, disableInteractive: je, placement: H, PopperComponentProp: ie, touch: qe.current }), Fu = $M(di), Bp = (r = (o = Ie.popper) != null ? o : L.Popper) != null ? r : TM, Wp = (i = (s = (l = Ie.transition) != null ? l : L.Transition) != null ? s : Ee) != null ? i : Pa, Up = (a = (u = Ie.tooltip) != null ? u : L.Tooltip) != null ? a : OM, Vp = (c = (d = Ie.arrow) != null ? d : L.Arrow) != null ? c : MM, A1 = _i(Bp, k({}, ge, (f = me.popper) != null ? f : T.popper, { className: q(Fu.popper, ge == null ? void 0 : ge.className, (p = (y = me.popper) != null ? y : T.popper) == null ? void 0 : p.className) }), di), D1 = _i(Wp, k({}, oe, (v = me.transition) != null ? v : T.transition), di), F1 = _i(Up, k({}, (w = me.tooltip) != null ? w : T.tooltip, { className: q(Fu.tooltip, (h = (m = me.tooltip) != null ? m : T.tooltip) == null ? void 0 : h.className) }), di), B1 = _i(Vp, k({}, (g = me.arrow) != null ? g : T.arrow, { className: q(Fu.arrow, (x = (C = me.arrow) != null ? C : T.arrow) == null ? void 0 : x.className) }), di);
  return b.jsxs(S.Fragment, { children: [S.cloneElement(le, bn), b.jsx(Bp, k({ as: ie ?? d1, placement: H, anchorEl: N ? { getBoundingClientRect: () => ({ top: Ti.y, left: Ti.x, right: Ti.x, bottom: Ti.y, width: 0, height: 0 }) } : Te, popperRef: Au, open: Te ? Ue : false, id: $t, transition: true }, ci, A1, { popperOptions: z1, children: ({ TransitionProps: fe }) => b.jsx(Wp, k({ timeout: ct.transitions.duration.shorter }, fe, D1, { children: b.jsxs(Up, k({}, F1, { children: [re, P ? b.jsx(Vp, k({}, B1, { ref: ve })) : null] })) })) }))] });
});
function NM(e3) {
  return ue("MuiTab", e3);
}
const ur = se("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper"]), _M = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"], IM = (e3) => {
  const { classes: t, textColor: n, fullWidth: r, wrapped: o, icon: i, label: s, selected: l, disabled: a } = e3, u = { root: ["root", i && s && "labelIcon", `textColor${Z(n)}`, r && "fullWidth", o && "wrapped", l && "selected", a && "disabled"], iconWrapper: ["iconWrapper"] };
  return pe(u, NM, t);
}, jM = Y(Us, { name: "MuiTab", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${Z(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, { [`& .${ur.iconWrapper}`]: t.iconWrapper }];
} })(({ theme: e3, ownerState: t }) => k({}, e3.typography.button, { maxWidth: 360, minWidth: 90, position: "relative", minHeight: 48, flexShrink: 0, padding: "12px 16px", overflow: "hidden", whiteSpace: "normal", textAlign: "center" }, t.label && { flexDirection: t.iconPosition === "top" || t.iconPosition === "bottom" ? "column" : "row" }, { lineHeight: 1.25 }, t.icon && t.label && { minHeight: 72, paddingTop: 9, paddingBottom: 9, [`& > .${ur.iconWrapper}`]: k({}, t.iconPosition === "top" && { marginBottom: 6 }, t.iconPosition === "bottom" && { marginTop: 6 }, t.iconPosition === "start" && { marginRight: e3.spacing(1) }, t.iconPosition === "end" && { marginLeft: e3.spacing(1) }) }, t.textColor === "inherit" && { color: "inherit", opacity: 0.6, [`&.${ur.selected}`]: { opacity: 1 }, [`&.${ur.disabled}`]: { opacity: (e3.vars || e3).palette.action.disabledOpacity } }, t.textColor === "primary" && { color: (e3.vars || e3).palette.text.secondary, [`&.${ur.selected}`]: { color: (e3.vars || e3).palette.primary.main }, [`&.${ur.disabled}`]: { color: (e3.vars || e3).palette.text.disabled } }, t.textColor === "secondary" && { color: (e3.vars || e3).palette.text.secondary, [`&.${ur.selected}`]: { color: (e3.vars || e3).palette.secondary.main }, [`&.${ur.disabled}`]: { color: (e3.vars || e3).palette.text.disabled } }, t.fullWidth && { flexShrink: 1, flexGrow: 1, flexBasis: 0, maxWidth: "none" }, t.wrapped && { fontSize: e3.typography.pxToRem(12) })), Zi = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiTab" }), { className: o, disabled: i = false, disableFocusRipple: s = false, fullWidth: l, icon: a, iconPosition: u = "top", indicator: c, label: d, onChange: f, onClick: p, onFocus: y, selected: v, selectionFollowsFocus: w, textColor: h = "inherit", value: m, wrapped: g = false } = r, x = G(r, _M), C = k({}, r, { disabled: i, disableFocusRipple: s, selected: v, icon: !!a, iconPosition: u, label: !!d, fullWidth: l, textColor: h, wrapped: g }), E = IM(C), P = a && d && S.isValidElement(a) ? S.cloneElement(a, { className: q(E.iconWrapper, a.props.className) }) : a, $ = (T) => {
    !v && f && f(T, m), p && p(T);
  }, L = (T) => {
    w && !v && f && f(T, m), y && y(T);
  };
  return b.jsxs(jM, k({ focusRipple: !s, className: q(E.root, o), ref: n, role: "tab", "aria-selected": v, disabled: i, onClick: $, onFocus: L, ownerState: C, tabIndex: v ? 0 : -1 }, x, { children: [u === "top" || u === "start" ? b.jsxs(S.Fragment, { children: [P, d] }) : b.jsxs(S.Fragment, { children: [d, P] }), c] }));
});
function zM(e3) {
  return ue("MuiToolbar", e3);
}
se("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const AM = ["className", "component", "disableGutters", "variant"], DM = (e3) => {
  const { classes: t, disableGutters: n, variant: r } = e3;
  return pe({ root: ["root", !n && "gutters", r] }, zM, t);
}, FM = Y("div", { name: "MuiToolbar", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
} })(({ theme: e3, ownerState: t }) => k({ position: "relative", display: "flex", alignItems: "center" }, !t.disableGutters && { paddingLeft: e3.spacing(2), paddingRight: e3.spacing(2), [e3.breakpoints.up("sm")]: { paddingLeft: e3.spacing(3), paddingRight: e3.spacing(3) } }, t.variant === "dense" && { minHeight: 48 }), ({ theme: e3, ownerState: t }) => t.variant === "regular" && e3.mixins.toolbar), Ra = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiToolbar" }), { className: o, component: i = "div", disableGutters: s = false, variant: l = "regular" } = r, a = G(r, AM), u = k({}, r, { component: i, disableGutters: s, variant: l }), c = DM(u);
  return b.jsx(FM, k({ as: i, className: q(c.root, o), ref: n, ownerState: u }, a));
}), BM = xn(b.jsx("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" }), "KeyboardArrowLeft"), WM = xn(b.jsx("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" }), "KeyboardArrowRight");
function UM(e3) {
  return (1 + Math.sin(Math.PI * e3 - Math.PI / 2)) / 2;
}
function VM(e3, t, n, r = {}, o = () => {
}) {
  const { ease: i = UM, duration: s = 300 } = r;
  let l = null;
  const a = t[e3];
  let u = false;
  const c = () => {
    u = true;
  }, d = (f) => {
    if (u) {
      o(new Error("Animation cancelled"));
      return;
    }
    l === null && (l = f);
    const p = Math.min(1, (f - l) / s);
    if (t[e3] = i(p) * (n - a) + a, p >= 1) {
      requestAnimationFrame(() => {
        o(null);
      });
      return;
    }
    requestAnimationFrame(d);
  };
  return a === n ? (o(new Error("Element already at target position")), c) : (requestAnimationFrame(d), c);
}
const HM = ["onChange"], KM = { width: 99, height: 99, position: "absolute", top: -9999, overflow: "scroll" };
function YM(e3) {
  const { onChange: t } = e3, n = G(e3, HM), r = S.useRef(), o = S.useRef(null), i = () => {
    r.current = o.current.offsetHeight - o.current.clientHeight;
  };
  return fn(() => {
    const s = As(() => {
      const a = r.current;
      i(), a !== r.current && t(r.current);
    }), l = Un(o.current);
    return l.addEventListener("resize", s), () => {
      s.clear(), l.removeEventListener("resize", s);
    };
  }, [t]), S.useEffect(() => {
    i(), t(r.current);
  }, [t]), b.jsx("div", k({ style: KM }, n, { ref: o }));
}
function XM(e3) {
  return ue("MuiTabScrollButton", e3);
}
const GM = se("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), QM = ["className", "slots", "slotProps", "direction", "orientation", "disabled"], qM = (e3) => {
  const { classes: t, orientation: n, disabled: r } = e3;
  return pe({ root: ["root", n, r && "disabled"] }, XM, t);
}, ZM = Y(Us, { name: "MuiTabScrollButton", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.root, n.orientation && t[n.orientation]];
} })(({ ownerState: e3 }) => k({ width: 40, flexShrink: 0, opacity: 0.8, [`&.${GM.disabled}`]: { opacity: 0 } }, e3.orientation === "vertical" && { width: "100%", height: 40, "& svg": { transform: `rotate(${e3.isRtl ? -90 : 90}deg)` } })), JM = S.forwardRef(function(t, n) {
  var r, o;
  const i = he({ props: t, name: "MuiTabScrollButton" }), { className: s, slots: l = {}, slotProps: a = {}, direction: u } = i, c = G(i, QM), d = Ru(), f = k({ isRtl: d }, i), p = qM(f), y = (r = l.StartScrollButtonIcon) != null ? r : BM, v = (o = l.EndScrollButtonIcon) != null ? o : WM, w = Tn({ elementType: y, externalSlotProps: a.startScrollButtonIcon, additionalProps: { fontSize: "small" }, ownerState: f }), h = Tn({ elementType: v, externalSlotProps: a.endScrollButtonIcon, additionalProps: { fontSize: "small" }, ownerState: f });
  return b.jsx(ZM, k({ component: "div", className: q(p.root, s), ref: n, role: null, ownerState: f, tabIndex: null }, c, { children: u === "left" ? b.jsx(y, k({}, w)) : b.jsx(v, k({}, h)) }));
});
function eL(e3) {
  return ue("MuiTabs", e3);
}
const Mc = se("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), tL = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"], Og = (e3, t) => e3 === t ? e3.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e3.firstChild, Mg = (e3, t) => e3 === t ? e3.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e3.lastChild, xl = (e3, t, n) => {
  let r = false, o = n(e3, t);
  for (; o; ) {
    if (o === e3.firstChild) {
      if (r) return;
      r = true;
    }
    const i = o.disabled || o.getAttribute("aria-disabled") === "true";
    if (!o.hasAttribute("tabindex") || i) o = n(e3, o);
    else {
      o.focus();
      return;
    }
  }
}, nL = (e3) => {
  const { vertical: t, fixed: n, hideScrollbar: r, scrollableX: o, scrollableY: i, centered: s, scrollButtonsHideMobile: l, classes: a } = e3;
  return pe({ root: ["root", t && "vertical"], scroller: ["scroller", n && "fixed", r && "hideScrollbar", o && "scrollableX", i && "scrollableY"], flexContainer: ["flexContainer", t && "flexContainerVertical", s && "centered"], indicator: ["indicator"], scrollButtons: ["scrollButtons", l && "scrollButtonsHideMobile"], scrollableX: [o && "scrollableX"], hideScrollbar: [r && "hideScrollbar"] }, eL, a);
}, rL = Y("div", { name: "MuiTabs", slot: "Root", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [{ [`& .${Mc.scrollButtons}`]: t.scrollButtons }, { [`& .${Mc.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile }, t.root, n.vertical && t.vertical];
} })(({ ownerState: e3, theme: t }) => k({ overflow: "hidden", minHeight: 48, WebkitOverflowScrolling: "touch", display: "flex" }, e3.vertical && { flexDirection: "column" }, e3.scrollButtonsHideMobile && { [`& .${Mc.scrollButtons}`]: { [t.breakpoints.down("sm")]: { display: "none" } } })), oL = Y("div", { name: "MuiTabs", slot: "Scroller", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.scroller, n.fixed && t.fixed, n.hideScrollbar && t.hideScrollbar, n.scrollableX && t.scrollableX, n.scrollableY && t.scrollableY];
} })(({ ownerState: e3 }) => k({ position: "relative", display: "inline-block", flex: "1 1 auto", whiteSpace: "nowrap" }, e3.fixed && { overflowX: "hidden", width: "100%" }, e3.hideScrollbar && { scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }, e3.scrollableX && { overflowX: "auto", overflowY: "hidden" }, e3.scrollableY && { overflowY: "auto", overflowX: "hidden" })), iL = Y("div", { name: "MuiTabs", slot: "FlexContainer", overridesResolver: (e3, t) => {
  const { ownerState: n } = e3;
  return [t.flexContainer, n.vertical && t.flexContainerVertical, n.centered && t.centered];
} })(({ ownerState: e3 }) => k({ display: "flex" }, e3.vertical && { flexDirection: "column" }, e3.centered && { justifyContent: "center" })), sL = Y("span", { name: "MuiTabs", slot: "Indicator", overridesResolver: (e3, t) => t.indicator })(({ ownerState: e3, theme: t }) => k({ position: "absolute", height: 2, bottom: 0, width: "100%", transition: t.transitions.create() }, e3.indicatorColor === "primary" && { backgroundColor: (t.vars || t).palette.primary.main }, e3.indicatorColor === "secondary" && { backgroundColor: (t.vars || t).palette.secondary.main }, e3.vertical && { height: "100%", width: 2, right: 0 })), lL = Y(YM)({ overflowX: "auto", overflowY: "hidden", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }), Lg = {}, C1 = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiTabs" }), o = ii(), i = Ru(), { "aria-label": s, "aria-labelledby": l, action: a, centered: u = false, children: c, className: d, component: f = "div", allowScrollButtonsMobile: p = false, indicatorColor: y = "primary", onChange: v, orientation: w = "horizontal", ScrollButtonComponent: h = JM, scrollButtons: m = "auto", selectionFollowsFocus: g, slots: x = {}, slotProps: C = {}, TabIndicatorProps: E = {}, TabScrollButtonProps: P = {}, textColor: $ = "primary", value: L, variant: T = "standard", visibleScrollbar: D = false } = r, z = G(r, tL), M = T === "scrollable", I = w === "vertical", A = I ? "scrollTop" : "scrollLeft", j = I ? "top" : "left", O = I ? "bottom" : "right", R = I ? "clientHeight" : "clientWidth", N = I ? "height" : "width", _ = k({}, r, { component: f, allowScrollButtonsMobile: p, indicatorColor: y, orientation: w, vertical: I, scrollButtons: m, textColor: $, variant: T, visibleScrollbar: D, fixed: !M, hideScrollbar: M && !D, scrollableX: M && !I, scrollableY: M && I, centered: u && !M, scrollButtonsHideMobile: !p }), B = nL(_), W = Tn({ elementType: x.StartScrollButtonIcon, externalSlotProps: C.startScrollButtonIcon, ownerState: _ }), V = Tn({ elementType: x.EndScrollButtonIcon, externalSlotProps: C.endScrollButtonIcon, ownerState: _ }), [K, te] = S.useState(false), [H, ie] = S.useState(Lg), [ge, me] = S.useState(false), [Ie, re] = S.useState(false), [Ee, oe] = S.useState(false), [ce, le] = S.useState({ overflow: "hidden", scrollbarWidth: 0 }), ct = /* @__PURE__ */ new Map(), Oe = S.useRef(null), Te = S.useRef(null), tt = () => {
    const U = Oe.current;
    let Q;
    if (U) {
      const xe = U.getBoundingClientRect();
      Q = { clientWidth: U.clientWidth, scrollLeft: U.scrollLeft, scrollTop: U.scrollTop, scrollLeftNormalized: $E(U, i ? "rtl" : "ltr"), scrollWidth: U.scrollWidth, top: xe.top, bottom: xe.bottom, left: xe.left, right: xe.right };
    }
    let de;
    if (U && L !== false) {
      const xe = Te.current.children;
      if (xe.length > 0) {
        const Ve = xe[ct.get(L)];
        de = Ve ? Ve.getBoundingClientRect() : null;
      }
    }
    return { tabsMeta: Q, tabMeta: de };
  }, Pe = Ut(() => {
    const { tabsMeta: U, tabMeta: Q } = tt();
    let de = 0, xe;
    if (I) xe = "top", Q && U && (de = Q.top - U.top + U.scrollTop);
    else if (xe = i ? "right" : "left", Q && U) {
      const ft = i ? U.scrollLeftNormalized + U.clientWidth - U.scrollWidth : U.scrollLeft;
      de = (i ? -1 : 1) * (Q[xe] - U[xe] + ft);
    }
    const Ve = { [xe]: de, [N]: Q ? Q[N] : 0 };
    if (isNaN(H[xe]) || isNaN(H[N])) ie(Ve);
    else {
      const ft = Math.abs(H[xe] - Ve[xe]), Jt = Math.abs(H[N] - Ve[N]);
      (ft >= 1 || Jt >= 1) && ie(Ve);
    }
  }), ve = (U, { animation: Q = true } = {}) => {
    Q ? VM(A, Oe.current, U, { duration: o.transitions.duration.standard }) : Oe.current[A] = U;
  }, qe = (U) => {
    let Q = Oe.current[A];
    I ? Q += U : (Q += U * (i ? -1 : 1), Q *= i && A0() === "reverse" ? -1 : 1), ve(Q);
  }, je = () => {
    const U = Oe.current[R];
    let Q = 0;
    const de = Array.from(Te.current.children);
    for (let xe = 0; xe < de.length; xe += 1) {
      const Ve = de[xe];
      if (Q + Ve[R] > U) {
        xe === 0 && (Q = U);
        break;
      }
      Q += Ve[R];
    }
    return Q;
  }, Se = () => {
    qe(-1 * je());
  }, nt = () => {
    qe(je());
  }, st = S.useCallback((U) => {
    le({ overflow: null, scrollbarWidth: U });
  }, []), dt = () => {
    const U = {};
    U.scrollbarSizeListener = M ? b.jsx(lL, { onChange: st, className: q(B.scrollableX, B.hideScrollbar) }) : null;
    const de = M && (m === "auto" && (ge || Ie) || m === true);
    return U.scrollButtonStart = de ? b.jsx(h, k({ slots: { StartScrollButtonIcon: x.StartScrollButtonIcon }, slotProps: { startScrollButtonIcon: W }, orientation: w, direction: i ? "right" : "left", onClick: Se, disabled: !ge }, P, { className: q(B.scrollButtons, P.className) })) : null, U.scrollButtonEnd = de ? b.jsx(h, k({ slots: { EndScrollButtonIcon: x.EndScrollButtonIcon }, slotProps: { endScrollButtonIcon: V }, orientation: w, direction: i ? "left" : "right", onClick: nt, disabled: !Ie }, P, { className: q(B.scrollButtons, P.className) })) : null, U;
  }, ye = Ut((U) => {
    const { tabsMeta: Q, tabMeta: de } = tt();
    if (!(!de || !Q)) {
      if (de[j] < Q[j]) {
        const xe = Q[A] + (de[j] - Q[j]);
        ve(xe, { animation: U });
      } else if (de[O] > Q[O]) {
        const xe = Q[A] + (de[O] - Q[O]);
        ve(xe, { animation: U });
      }
    }
  }), J = Ut(() => {
    M && m !== false && oe(!Ee);
  });
  S.useEffect(() => {
    const U = As(() => {
      Oe.current && Pe();
    });
    let Q;
    const de = (ft) => {
      ft.forEach((Jt) => {
        Jt.removedNodes.forEach((ir) => {
          var Sn;
          (Sn = Q) == null || Sn.unobserve(ir);
        }), Jt.addedNodes.forEach((ir) => {
          var Sn;
          (Sn = Q) == null || Sn.observe(ir);
        });
      }), U(), J();
    }, xe = Un(Oe.current);
    xe.addEventListener("resize", U);
    let Ve;
    return typeof ResizeObserver < "u" && (Q = new ResizeObserver(U), Array.from(Te.current.children).forEach((ft) => {
      Q.observe(ft);
    })), typeof MutationObserver < "u" && (Ve = new MutationObserver(de), Ve.observe(Te.current, { childList: true })), () => {
      var ft, Jt;
      U.clear(), xe.removeEventListener("resize", U), (ft = Ve) == null || ft.disconnect(), (Jt = Q) == null || Jt.disconnect();
    };
  }, [Pe, J]), S.useEffect(() => {
    const U = Array.from(Te.current.children), Q = U.length;
    if (typeof IntersectionObserver < "u" && Q > 0 && M && m !== false) {
      const de = U[0], xe = U[Q - 1], Ve = { root: Oe.current, threshold: 0.99 }, ft = (no) => {
        me(!no[0].isIntersecting);
      }, Jt = new IntersectionObserver(ft, Ve);
      Jt.observe(de);
      const ir = (no) => {
        re(!no[0].isIntersecting);
      }, Sn = new IntersectionObserver(ir, Ve);
      return Sn.observe(xe), () => {
        Jt.disconnect(), Sn.disconnect();
      };
    }
  }, [M, m, Ee, c == null ? void 0 : c.length]), S.useEffect(() => {
    te(true);
  }, []), S.useEffect(() => {
    Pe();
  }), S.useEffect(() => {
    ye(Lg !== H);
  }, [ye, H]), S.useImperativeHandle(a, () => ({ updateIndicator: Pe, updateScrollButtons: J }), [Pe, J]);
  const Ue = b.jsx(sL, k({}, E, { className: q(B.indicator, E.className), ownerState: _, style: k({}, H, E.style) }));
  let $t = 0;
  const At = S.Children.map(c, (U) => {
    if (!S.isValidElement(U)) return null;
    const Q = U.props.value === void 0 ? $t : U.props.value;
    ct.set(Q, $t);
    const de = Q === L;
    return $t += 1, S.cloneElement(U, k({ fullWidth: T === "fullWidth", indicator: de && !K && Ue, selected: de, selectionFollowsFocus: g, onChange: v, textColor: $, value: Q }, $t === 1 && L === false && !U.props.tabIndex ? { tabIndex: 0 } : {}));
  }), ee = (U) => {
    const Q = Te.current, de = gt(Q).activeElement;
    if (de.getAttribute("role") !== "tab") return;
    let Ve = w === "horizontal" ? "ArrowLeft" : "ArrowUp", ft = w === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (w === "horizontal" && i && (Ve = "ArrowRight", ft = "ArrowLeft"), U.key) {
      case Ve:
        U.preventDefault(), xl(Q, de, Mg);
        break;
      case ft:
        U.preventDefault(), xl(Q, de, Og);
        break;
      case "Home":
        U.preventDefault(), xl(Q, null, Og);
        break;
      case "End":
        U.preventDefault(), xl(Q, null, Mg);
        break;
    }
  }, we = dt();
  return b.jsxs(rL, k({ className: q(B.root, d), ownerState: _, ref: n, as: f }, z, { children: [we.scrollButtonStart, we.scrollbarSizeListener, b.jsxs(oL, { className: B.scroller, ownerState: _, style: { overflow: ce.overflow, [I ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: D ? void 0 : -ce.scrollbarWidth }, ref: Oe, children: [b.jsx(iL, { "aria-label": s, "aria-labelledby": l, "aria-orientation": w === "vertical" ? "vertical" : null, className: B.flexContainer, ownerState: _, onKeyDown: ee, ref: Te, role: "tablist", children: At }), K && Ue] }), we.scrollButtonEnd] }));
});
function aL(e3) {
  return ue("MuiTextField", e3);
}
se("MuiTextField", ["root"]);
const uL = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], cL = { standard: Mp, filled: Op, outlined: Np }, dL = (e3) => {
  const { classes: t } = e3;
  return pe({ root: ["root"] }, aL, t);
}, fL = Y(FT, { name: "MuiTextField", slot: "Root", overridesResolver: (e3, t) => t.root })({}), Fl = S.forwardRef(function(t, n) {
  const r = he({ props: t, name: "MuiTextField" }), { autoComplete: o, autoFocus: i = false, children: s, className: l, color: a = "primary", defaultValue: u, disabled: c = false, error: d = false, FormHelperTextProps: f, fullWidth: p = false, helperText: y, id: v, InputLabelProps: w, inputProps: h, InputProps: m, inputRef: g, label: x, maxRows: C, minRows: E, multiline: P = false, name: $, onBlur: L, onChange: T, onFocus: D, placeholder: z, required: M = false, rows: I, select: A = false, SelectProps: j, type: O, value: R, variant: N = "outlined" } = r, _ = G(r, uL), B = k({}, r, { autoFocus: i, color: a, disabled: c, error: d, fullWidth: p, multiline: P, required: M, select: A, variant: N }), W = dL(B), V = {};
  N === "outlined" && (w && typeof w.shrink < "u" && (V.notched = w.shrink), V.label = x), A && ((!j || !j.native) && (V.id = void 0), V["aria-describedby"] = void 0);
  const K = Ds(v), te = y && K ? `${K}-helper-text` : void 0, H = x && K ? `${K}-label` : void 0, ie = cL[N], ge = b.jsx(ie, k({ "aria-describedby": te, autoComplete: o, autoFocus: i, defaultValue: u, fullWidth: p, multiline: P, name: $, rows: I, maxRows: C, minRows: E, type: O, value: R, id: K, inputRef: g, onBlur: L, onChange: T, onFocus: D, placeholder: z, inputProps: h }, V, m));
  return b.jsxs(fL, k({ className: q(W.root, l), disabled: c, error: d, fullWidth: p, ref: n, required: M, color: a, variant: N, ownerState: B }, _, { children: [x != null && x !== "" && b.jsx(bO, k({ htmlFor: K, id: H }, w, { children: x })), A ? b.jsx(Ip, k({ "aria-describedby": te, id: K, labelId: H, value: R, input: ge }, j, { children: s })) : ge, y && b.jsx(HT, k({ id: te }, f, { children: y }))] }));
}), pL = xn(b.jsx("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" }), "Add"), hL = xn(b.jsx("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z" }), "Cancel"), mL = xn(b.jsx("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 20H4v-4h4zm0-6H4v-4h4zm0-6H4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4z" }), "GridOn"), k1 = xn(b.jsx("path", { d: "M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z" }), "KeyboardArrowLeft"), E1 = xn(b.jsx("path", { d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" }), "KeyboardArrowRight"), gL = xn([b.jsx("path", { d: "M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z" }, "0"), b.jsx("path", { d: "m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z" }, "1")], "KeyboardDoubleArrowLeft"), vL = xn([b.jsx("path", { d: "M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" }, "0"), b.jsx("path", { d: "m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" }, "1")], "KeyboardDoubleArrowRight"), yL = xn(b.jsx("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14" }), "Search");
var jp = {}, Lc = {};
const xL = rr(ZP);
var Ng;
function zp() {
  return Ng || (Ng = 1, function(e3) {
    "use client";
    Object.defineProperty(e3, "__esModule", { value: true }), Object.defineProperty(e3, "default", { enumerable: true, get: function() {
      return t.createSvgIcon;
    } });
    var t = xL;
  }(Lc)), Lc;
}
var SL = Bs;
Object.defineProperty(jp, "__esModule", { value: true });
var P1 = jp.default = void 0, bL = SL(zp()), wL = b;
P1 = jp.default = (0, bL.default)((0, wL.jsx)("path", { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4z" }), "AddBox");
var Ap = {}, CL = Bs;
Object.defineProperty(Ap, "__esModule", { value: true });
var R1 = Ap.default = void 0, kL = CL(zp()), EL = b;
R1 = Ap.default = (0, kL.default)((0, EL.jsx)("path", { d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-1 9H9V9h10zm-4 4H9v-2h6zm4-8H9V5h10z" }), "LibraryBooks");
var Dp = {}, PL = Bs;
Object.defineProperty(Dp, "__esModule", { value: true });
var $1 = Dp.default = void 0, RL = PL(zp()), $L = b;
$1 = Dp.default = (0, RL.default)((0, $L.jsx)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 17h-2v-2h2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25" }), "Help");
const TL = [[[1, 1, 1, 1, 1]], [[1, 1, 1, 1], [1, 0, 0, 0]], [[1, 1, 1, 1], [0, 1, 0, 0]], [[0, 1, 1, 1], [1, 1, 0, 0]], [[1, 1, 1], [1, 1, 0]], [[1, 1, 1], [1, 0, 1]], [[1, 1, 1], [1, 0, 0], [1, 0, 0]], [[1, 1, 1], [0, 1, 0], [0, 1, 0]], [[1, 1, 0], [0, 1, 1], [0, 1, 0]], [[1, 1, 0], [0, 1, 0], [0, 1, 1]], [[0, 1, 0], [1, 1, 1], [0, 1, 0]], [[1, 0, 0], [1, 1, 0], [0, 1, 1]]], _g = TL.map((e3) => [e3]), Nc = [{ name: "Pentomino 6x10", pieces: _g.map((e3) => ({ shape: e3, count: 1 })), board: [Array.from({ length: 6 }, () => Array(10).fill(1))] }, { name: "Pentomino 8x8", pieces: _g.map((e3) => ({ shape: e3, count: 1 })), board: [[[1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 0, 1, 1, 1], [1, 1, 1, 0, 0, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]]] }, { name: "Soma cube", pieces: [[[[1, 1, 1], [1, 0, 0]]], [[[1, 1, 1], [0, 1, 0]]], [[[1, 1, 0], [0, 1, 1]]], [[[1, 1], [1, 0]]], [[[1, 0], [0, 0]], [[1, 1], [1, 0]]], [[[0, 1], [0, 0]], [[1, 1], [1, 0]]], [[[0, 0], [1, 0]], [[1, 1], [1, 0]]]].map((e3) => ({ shape: e3, count: 1 })), board: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]], [[1, 1, 1], [1, 1, 1], [1, 1, 1]], [[1, 1, 1], [1, 1, 1], [1, 1, 1]]] }], OL = (e3) => {
  const { shape: t, count: n, color: r, maxGridSize: o, padding: i, height: s, maxWidth: l } = e3, a = t.length, u = t[0].length, c = t[0][0].length;
  if (a !== 1) throw new Error("TODO: support sizeZ > 1");
  const d = Math.min(o, Math.floor(s / (u + i)), Math.floor(l / (c + i))), f = d * (Math.max(2, c) + i), p = (f - d * c) * 0.5, y = (s - d * u) * 0.5, v = [];
  for (let w = 0; w < u; ++w) for (let h = 0; h < c; ++h) t[0][w][h] === 1 && v.push(b.jsx("rect", { x: h * d + p, y: w * d + y, width: d, height: d, fill: r, stroke: "black" }, `0,${w},${h}`));
  return n !== 1 && v.push(b.jsx("text", { x: 0, y: s, fill: "#aa0000", fontSize: 15, children: n })), b.jsx("svg", { height: s, width: f, children: v });
}, ML = (e3) => {
  const { shape: t, count: n, color: r, maxGridSize: o, padding: i, height: s, maxWidth: l } = e3, a = t.length, u = t[0].length, c = t[0][0].length, d = 0.4, f = Math.min(o, Math.floor(s / (u + a * d + i)), Math.floor(l / (c + a * d + i))), p = f * (Math.max(2, c + a * d) + i), y = (p - f * (c + a * d)) * 0.5, v = (s - f * (u + a * d)) * 0.5, w = [];
  for (let h = a - 1; h >= 0; --h) for (let m = u - 1; m >= 0; --m) for (let g = 0; g < c; ++g) if (t[a - 1 - h][m][g] === 1) {
    const x = (g + 1 + h * d) * f + y, C = (m + (a - h) * d) * f + v;
    w.push(b.jsx("polygon", { points: [`${x},${C}`, `${x - f},${C}`, `${x - f},${C + f}`, `${x},${C + f}`].join(" "), fill: r, stroke: "black" }, `${h},${m},${g},a`)), w.push(b.jsx("polygon", { points: [`${x},${C}`, `${x - f},${C}`, `${x - f + f * d},${C - f * d}`, `${x + f * d},${C - f * d}`].join(" "), fill: r, stroke: "black" }, `${h},${m},${g},b`)), w.push(b.jsx("polygon", { points: [`${x},${C}`, `${x},${C + f}`, `${x + f * d},${C + f - f * d}`, `${x + f * d},${C - f * d}`].join(" "), fill: r, stroke: "black" }, `${h},${m},${g},c`));
  }
  return n !== 1 && w.push(b.jsx("text", { x: 0, y: s, fill: "#aa0000", fontSize: 15, children: n })), b.jsx("svg", { height: s, width: p, children: w });
}, LL = (e3) => e3.shape.length === 1 ? b.jsx(OL, { ...e3 }) : b.jsx(ML, { ...e3 }), Ig = (e3, t, n, r) => {
  let o = e3[0].length, i = e3.length, s = -1, l = -1;
  r === 1 && (o = Math.min(o, t), i = Math.min(i, n), s = Math.max(s, t), l = Math.max(l, n));
  for (let u = 0; u < e3.length; ++u) for (let c = 0; c < e3[u].length; ++c) r === 0 && u === n && c === t || e3[u][c] === 1 && (o = Math.min(o, c), i = Math.min(i, u), s = Math.max(s, c), l = Math.max(l, u));
  if (o > s) return { shape: [[0]], offsetX: 0, offsetY: 0 };
  const a = [];
  for (let u = i; u <= l; ++u) {
    const c = [];
    for (let d = o; d <= s; ++d) u === n && d === t ? c.push(r) : 0 <= u && u < e3.length && 0 <= d && d < e3[u].length ? c.push(e3[u][d]) : c.push(0);
    a.push(c);
  }
  return { shape: a, offsetX: o, offsetY: i };
}, NL = (e3) => {
  const [t, n] = S.useState(e3.initialShape), r = (O) => {
    n(O), e3.onChange(O);
  }, o = S.useRef(null), [i, s] = S.useState(-1), [l, a] = S.useState(-1), [u, c] = S.useState(0), d = e3.gridSize * Math.pow(1.5, u), [f, p] = S.useState(-(t[0].length - 1) * d * 0.5), [y, v] = S.useState(-(t.length - 1) * d * 0.5), [w, h] = S.useState(false), [m, g] = S.useState(0), [x, C] = S.useState(0), [E, P] = S.useState(0), [$, L] = S.useState(0), [T, D] = S.useState(null);
  S.useEffect(() => {
    const O = () => {
      if (o.current) {
        const N = o.current;
        s(N.clientWidth), a(N.clientHeight);
      }
    }, R = new ResizeObserver(() => {
      O();
    });
    return o.current && R.observe(o.current), O(), () => {
      R.disconnect();
    };
  }, [o]);
  const z = [];
  if (i > 0) {
    const O = t.length, R = t[0].length, N = f + (d + i) * 0.5, _ = N - Math.floor(N / d) * d;
    for (let V = 0; V <= Math.floor(i / d); ++V) z.push(b.jsx("line", { x1: _ + V * d, y1: 0, x2: _ + V * d, y2: l, stroke: "#cccccc" }, `gridX${V}`));
    const B = y + (d + l) * 0.5, W = B - Math.floor(B / d) * d;
    for (let V = 0; V <= Math.floor(l / d); ++V) z.push(b.jsx("line", { x1: 0, y1: W + V * d, x2: i, y2: W + V * d, stroke: "#cccccc" }, `gridY${V}`));
    for (let V = 0; V < O; ++V) for (let K = 0; K < R; ++K) t[V][K] === 1 && z.push(b.jsx("rect", { x: (K - 0.5) * d + f + i * 0.5, y: (V - 0.5) * d + y + l * 0.5, width: d, height: d, fill: "#ccccff", stroke: "black" }, `${V},${K}`));
  }
  const M = (O) => {
    if (O.button === 2) {
      h(true), P(f), L(y), g(O.clientX), C(O.clientY), O.preventDefault();
      return;
    }
    const R = O.currentTarget.getBoundingClientRect(), N = Math.floor((O.clientX - R.left - f - i * 0.5) / d + 0.5), _ = Math.floor((O.clientY - R.top - y - l * 0.5) / d + 0.5), W = (0 <= _ && _ < t.length && 0 <= N && N < t[_].length ? t[_][N] : 0) === 0 ? 1 : 0;
    D(W);
    const V = Ig(t, N, _, W);
    r(V.shape), p(f + V.offsetX * d), v(y + V.offsetY * d);
  }, I = (O) => {
    if (w) p(E + O.clientX - m), v($ + O.clientY - x);
    else if (T !== null) {
      const R = O.currentTarget.getBoundingClientRect(), N = Math.floor((O.clientX - R.left - f - i * 0.5) / d + 0.5), _ = Math.floor((O.clientY - R.top - y - l * 0.5) / d + 0.5);
      if ((0 <= _ && _ < t.length && 0 <= N && N < t[_].length ? t[_][N] : 0) === T) return;
      const W = Ig(t, N, _, T);
      r(W.shape), p(f + W.offsetX * d), v(y + W.offsetY * d);
    }
  }, A = (O) => {
    const R = u + (O.deltaY > 0 ? -1 : 1);
    -2 <= R && R <= 1 && c(R);
  }, j = () => {
    h(false), D(null);
  };
  return b.jsx(Je, { ref: o, sx: { width: "100%", flexGrow: 1, flexShrink: 1, flexBasis: "auto", overflow: "hidden", cursor: w ? "grabbing" : "pointer" }, children: b.jsx("svg", { height: l, width: i, onMouseDown: M, onMouseMove: I, onMouseUp: j, onMouseLeave: j, onWheel: A, onContextMenu: (O) => O.preventDefault(), children: z }) });
};
class Vt {
  constructor(t, n, r) {
    __publicField(this, "x");
    __publicField(this, "y");
    __publicField(this, "z");
    this.x = t, this.y = n, this.z = r;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  scale(t) {
    return new Vt(this.x * t, this.y * t, this.z * t);
  }
  add(t) {
    return new Vt(this.x + t.x, this.y + t.y, this.z + t.z);
  }
  sub(t) {
    return new Vt(this.x - t.x, this.y - t.y, this.z - t.z);
  }
  cross(t) {
    return new Vt(this.y * t.z - this.z * t.y, this.z * t.x - this.x * t.z, this.x * t.y - this.y * t.x);
  }
  norm() {
    return Math.sqrt(this.dot(this));
  }
  normalize() {
    return this.scale(1 / this.norm());
  }
  rotateAround(t, n) {
    return this.scale(Math.cos(n)).add(t.cross(this).scale(Math.sin(n))).add(t.scale(t.dot(this) * (1 - Math.cos(n))));
  }
}
function _L(e3) {
  return e3.vertices.reduce((t, n) => t.add(n), new Vt(0, 0, 0)).scale(1 / e3.vertices.length);
}
class $a {
  constructor(t, n, r) {
    __publicField(this, "center");
    __publicField(this, "cameraDir");
    __publicField(this, "cameraUp");
    __publicField(this, "cameraRight");
    this.center = t;
    const o = n.normalize();
    let i = r.normalize();
    i = i.sub(o.scale(o.dot(i))).normalize();
    const s = o.cross(i);
    this.cameraDir = o, this.cameraUp = i, this.cameraRight = s;
  }
  moveCenter(t) {
    return new $a(this.center.add(t), this.cameraDir, this.cameraUp);
  }
  project(t) {
    const n = t.sub(this.center);
    return { x: n.dot(this.cameraRight), y: n.dot(this.cameraUp) };
  }
  projectSurfaces(t) {
    const n = t.map((r) => ({ surface: { data: r.data, vertices: r.vertices.map((o) => this.project(o)) }, depth: _L(r).dot(this.cameraDir) }));
    return n.sort((r, o) => o.depth - r.depth), n.map((r) => r.surface);
  }
  rotateView(t, n, r) {
    const i = this.cameraRight.scale(t).add(this.cameraUp.scale(n)).normalize().cross(this.cameraDir), s = Math.sqrt(t * t + n * n) * r;
    if (Math.abs(s) < 1e-8) return this;
    const l = this.cameraDir.rotateAround(i, s), a = this.cameraUp.rotateAround(i, s);
    return new $a(this.center, l, a);
  }
}
function IL(e3, t) {
  const n = e3[0], r = e3[1], o = e3[2], i = (r.x - n.x) * (o.y - n.y) - (r.y - n.y) * (o.x - n.x);
  for (let s = 0; s < e3.length; s++) {
    const l = e3[s], a = e3[(s + 1) % e3.length], u = (a.x - l.x) * (t.y - l.y) - (a.y - l.y) * (t.x - l.x);
    if (i > 0 != u > 0) return false;
  }
  return true;
}
const jL = [{ x: 0, y: 0, z: 1 }, { x: 0, y: 1, z: 0 }, { x: 1, y: 0, z: 0 }, { x: 0, y: 0, z: -1 }, { x: 0, y: -1, z: 0 }, { x: -1, y: 0, z: 0 }], jg = (e3) => {
  const t = [], n = /* @__PURE__ */ new Map();
  for (let o = 0; o < e3.length; ++o) {
    const i = e3[o];
    i.id !== void 0 && n.set(`${i.coord.x},${i.coord.y},${i.coord.z}`, i.id);
  }
  const r = (o, i, s) => {
    const l = Math.max(o.x, i.x), a = Math.max(o.y, i.y), u = Math.max(o.z, i.z), c = Math.abs(i.x - o.x), d = Math.abs(i.y - o.y), f = Math.abs(i.z - o.z), p = n.get(`${o.x},${o.y},${o.z}`), y = n.get(`${i.x},${i.y},${i.z}`);
    if (p !== void 0 && y !== void 0 && p === y) return;
    const v = [new Vt(l, a, u), new Vt(l + f, a + c, u + d), new Vt(l + d + f, a + f + c, u + c + d), new Vt(l + d, a + f, u + c)];
    t.push({ data: { color: s, cube: o, anotherCube: i }, vertices: v });
  };
  for (const o of e3) for (const i of jL) {
    const s = { x: o.coord.x + i.x, y: o.coord.y + i.y, z: o.coord.z + i.z };
    r(o.coord, s, o.color);
  }
  return t;
}, T1 = (e3) => {
  const [t, n] = S.useState(1), r = 50 * Math.pow(1.5, t), o = e3.cubes;
  let i = 0, s = 0, l = 0;
  for (const O of o) i = Math.max(i, O.coord.x + 1), s = Math.max(s, O.coord.y + 1), l = Math.max(l, O.coord.z + 1);
  const [a, u] = S.useState(new $a(new Vt(i / 2, s / 2, l / 2), new Vt(1, 1, 2), new Vt(0, 1, 0))), [c, d] = S.useState(null), [f, p] = S.useState(false), [y, v] = S.useState(-1), [w, h] = S.useState(-1), m = S.useRef(null), [g, x] = S.useState(-1), [C, E] = S.useState(-1), P = a.projectSurfaces(jg(o));
  P.reverse();
  let $ = null;
  if (y >= 0) {
    const O = y - g / 2, R = -(w - C / 2);
    for (let N = P.length - 1; N >= 0; --N) {
      const _ = P[N];
      if (IL(_.vertices, { x: O / r, y: R / r })) {
        $ = _.data;
        break;
      }
    }
  }
  let L;
  if (e3.preprocess) if ($ !== null) {
    const O = e3.preprocess(o, { cube: $.cube, anotherCube: $.anotherCube });
    O === null ? L = o : L = O;
  } else {
    const O = e3.preprocess(o);
    O === null ? L = o : L = O;
  }
  else L = e3.cubes;
  const T = a.projectSurfaces(jg(L));
  T.reverse();
  const D = (O) => {
    const R = O.nativeEvent.offsetX, N = O.nativeEvent.offsetY;
    O.nativeEvent.button === 0 ? e3.onClick && ($ !== null ? e3.onClick({ cube: $.cube, anotherCube: $.anotherCube }) : e3.onClick()) : O.nativeEvent.button === 1 ? (d({ camera: a, mouseX: R, mouseY: N }), p(true)) : O.nativeEvent.button === 2 && (d({ camera: a, mouseX: R, mouseY: N }), O.ctrlKey ? p(true) : p(false), O.preventDefault());
  }, z = (O) => {
    const R = O.nativeEvent.offsetX, N = O.nativeEvent.offsetY;
    if (v(R), h(N), !c) return;
    const _ = R - c.mouseX, B = -(N - c.mouseY);
    u(f ? c.camera.moveCenter(a.cameraRight.scale(-_ / r).add(a.cameraUp.scale(-B / r))) : c.camera.rotateView(_, B, 1 / r));
  }, M = () => {
    d(null);
  }, I = () => {
    d(null), v(-1), h(-1);
  }, A = (O) => {
    const R = t + (O.deltaY > 0 ? -1 : 1);
    -2 <= R && R <= 1 && n(R);
  };
  S.useEffect(() => {
    const O = () => {
      if (m.current) {
        const N = m.current;
        x(N.clientWidth), E(N.clientHeight);
      }
    }, R = new ResizeObserver(() => {
      O();
    });
    return m.current && R.observe(m.current), O(), () => {
      R.disconnect();
    };
  }, [m]);
  const j = [];
  for (const O of T) {
    const R = O.vertices.map((N) => ({ x: N.x * r + g / 2, y: -N.y * r + C / 2 }));
    j.push(b.jsx("polygon", { points: R.map((N) => `${N.x},${N.y}`).join(" "), fill: O.data.color, stroke: "black" }));
  }
  return b.jsx(Je, { ref: m, sx: { width: "100%", flexGrow: 1, flexShrink: 1, flexBasis: "auto", overflow: "hidden" }, children: b.jsx("svg", { width: g, height: C, onMouseDown: D, onMouseMove: z, onMouseUp: M, onMouseLeave: I, onWheel: A, onContextMenu: (O) => O.preventDefault(), children: j }) });
}, zg = (e3, t, n, r, o) => {
  let i = e3[0][0].length, s = e3[0].length, l = e3.length, a = -1, u = -1, c = -1;
  o === 1 && (i = Math.min(i, t), s = Math.min(s, n), l = Math.min(l, r), a = Math.max(a, t), u = Math.max(u, n), c = Math.max(c, r));
  for (let f = 0; f < e3.length; ++f) for (let p = 0; p < e3[f].length; ++p) for (let y = 0; y < e3[f][p].length; ++y) o === 0 && p === n && y === t && f === r || e3[f][p][y] === 1 && (i = Math.min(i, y), s = Math.min(s, p), l = Math.min(l, f), a = Math.max(a, y), u = Math.max(u, p), c = Math.max(c, f));
  if (i > a) return { shape: [[[0]]], offsetX: 0, offsetY: 0, offsetZ: 0 };
  const d = [];
  for (let f = l; f <= c; ++f) {
    const p = [];
    for (let y = s; y <= u; ++y) {
      const v = [];
      for (let w = i; w <= a; ++w) f === r && y === n && w === t ? v.push(o) : 0 <= f && f < e3.length && 0 <= y && y < e3[f].length && 0 <= w && w < e3[f][y].length ? v.push(e3[f][y][w]) : v.push(0);
      p.push(v);
    }
    d.push(p);
  }
  return { shape: d, offsetX: i, offsetY: s, offsetZ: l };
}, zL = (e3) => {
  const [t, n] = S.useState(e3.initialShape), [r, o] = S.useState({ x: 0, y: 0, z: 0 }), [i, s] = S.useState(false), l = [];
  for (let c = 0; c < t.length; ++c) for (let d = 0; d < t[c].length; ++d) for (let f = 0; f < t[c][d].length; ++f) if (t[c][d][f] === 1) {
    const p = { x: f + r.x, y: d + r.y, z: c + r.z };
    l.push({ coord: p, color: "#ccccff" });
  }
  S.useEffect(() => {
    const c = (d) => {
      s(d.ctrlKey);
    };
    return window.addEventListener("keydown", c), window.addEventListener("keyup", c), () => {
      window.removeEventListener("keydown", c), window.removeEventListener("keyup", c);
    };
  }, []);
  const a = (c, d) => d === void 0 ? c : i ? c.length <= 1 ? c : [...c].map((p) => p.coord.x === d.cube.x && p.coord.y === d.cube.y && p.coord.z === d.cube.z ? { coord: p.coord, color: "rgb(238 238 255 / 50%)" } : p) : c.concat([{ coord: d.anotherCube, color: "rgb(255 204 204 / 50%)" }]), u = (c) => {
    if (c === void 0) return;
    let d;
    if (i) {
      if (l.length <= 1) return;
      const { x: f, y: p, z: y } = c.cube;
      d = zg(t, f - r.x, p - r.y, y - r.z, 0);
    } else {
      const { x: f, y: p, z: y } = c.anotherCube;
      d = zg(t, f - r.x, p - r.y, y - r.z, 1);
    }
    n(d.shape), o({ x: r.x + d.offsetX, y: r.y + d.offsetY, z: r.z + d.offsetZ }), e3.onChange(d.shape);
  };
  return b.jsx(T1, { cubes: l, preprocess: a, onClick: u });
}, Ag = (e3, t, n, r, o) => {
  let i = [...e3], s = t;
  if (t < 0) {
    const v = Math.abs(t);
    for (let w = 0; w < v; w++) i.unshift([[0]]);
    s = 0;
  } else if (t >= e3.length) {
    const v = t - e3.length + 1;
    for (let w = 0; w < v; w++) i.push([[0]]);
    s = t;
  }
  let l = 1 / 0, a = 1 / 0, u = 1 / 0, c = -1, d = -1, f = -1;
  o === 1 && (l = Math.min(l, n), a = Math.min(a, r), u = Math.min(u, s), c = Math.max(c, n), d = Math.max(d, r), f = Math.max(f, s));
  for (let v = 0; v < i.length; ++v) for (let w = 0; w < i[v].length; ++w) for (let h = 0; h < i[v][w].length; ++h) v === s && w === r && h === n || i[v][w][h] === 1 && (l = Math.min(l, h), a = Math.min(a, w), u = Math.min(u, v), c = Math.max(c, h), d = Math.max(d, w), f = Math.max(f, v));
  if (l === 1 / 0) return { shape: [[[0]]], offsetX: 0, offsetY: 0, offsetZ: 0, newLayer: 0 };
  const p = [];
  for (let v = u; v <= f; ++v) {
    const w = [];
    for (let h = a; h <= d; ++h) {
      const m = [];
      for (let g = l; g <= c; ++g) v === s && h === r && g === n ? m.push(o) : v >= 0 && v < i.length && h >= 0 && h < i[v].length && g >= 0 && g < i[v][h].length ? m.push(i[v][h][g]) : m.push(0);
      w.push(m);
    }
    p.push(w);
  }
  let y;
  return t < 0 ? y = 0 : y = s, { shape: p, offsetX: l, offsetY: a, offsetZ: u, newLayer: y };
}, Dg = (e3, t) => {
  if (e3.length === 0) return { shape: [[[0]]], newLayer: 0 };
  const n = (l) => {
    for (let a = 0; a < l.length; a++) for (let u = 0; u < l[a].length; u++) if (l[a][u] === 1) return false;
    return true;
  };
  let r = 0, o = e3.length - 1;
  for (; r <= o && n(e3[r]); ) r++;
  for (; o >= r && n(e3[o]); ) o--;
  if (r > o) return { shape: [[[0]]], newLayer: 0 };
  const i = e3.slice(r, o + 1);
  let s = t - r;
  return s < 0 ? s = 0 : s >= i.length && (s = i.length - 1), { shape: i, newLayer: s };
}, AL = (e3) => {
  const [t, n] = S.useState(e3.initialShape), [r, o] = S.useState(0), [i, s] = S.useState(0), l = (_) => {
    n(_), e3.onChange(_);
  }, a = S.useRef(null), [u, c] = S.useState(-1), [d, f] = S.useState(-1), p = e3.gridSize * Math.pow(1.5, i), y = r >= 0 && r < t.length ? t[r] : [[0]], [v, w] = S.useState(-(y[0].length - 1) * p * 0.5), [h, m] = S.useState(-(y.length - 1) * p * 0.5), [g, x] = S.useState(false), [C, E] = S.useState(0), [P, $] = S.useState(0), [L, T] = S.useState(0), [D, z] = S.useState(0), [M, I] = S.useState(null);
  S.useEffect(() => {
    const _ = () => {
      if (a.current) {
        const W = a.current;
        c(W.clientWidth), f(W.clientHeight);
      }
    }, B = new ResizeObserver(() => {
      _();
    });
    return a.current && B.observe(a.current), _(), () => {
      B.disconnect();
    };
  }, [a]);
  const A = [];
  if (u > 0 && y.length > 0) {
    const _ = y.length, B = y[0].length, W = v + (p + u) * 0.5, V = W - Math.floor(W / p) * p;
    for (let H = 0; H <= Math.floor(u / p); ++H) A.push(b.jsx("line", { x1: V + H * p, y1: 0, x2: V + H * p, y2: d, stroke: "#cccccc" }, `gridX${H}`));
    const K = h + (p + d) * 0.5, te = K - Math.floor(K / p) * p;
    for (let H = 0; H <= Math.floor(d / p); ++H) A.push(b.jsx("line", { x1: 0, y1: te + H * p, x2: u, y2: te + H * p, stroke: "#cccccc" }, `gridY${H}`));
    for (let H = 0; H < _; ++H) for (let ie = 0; ie < B; ++ie) y[H][ie] === 1 && A.push(b.jsx("rect", { x: (ie - 0.5) * p + v + u * 0.5, y: (H - 0.5) * p + h + d * 0.5, width: p, height: p, fill: "#ccccff", stroke: "black" }, `${H},${ie}`));
  }
  const j = (_) => {
    if (_.button === 2) {
      x(true), T(v), z(h), E(_.clientX), $(_.clientY), _.preventDefault();
      return;
    }
    const B = _.currentTarget.getBoundingClientRect(), W = Math.floor((_.clientX - B.left - v - u * 0.5) / p + 0.5), V = Math.floor((_.clientY - B.top - h - d * 0.5) / p + 0.5), te = (0 <= V && V < y.length && 0 <= W && W < y[V].length ? y[V][W] : 0) === 0 ? 1 : 0;
    I(te);
    const H = Ag(t, r, W, V, te), ie = Dg(H.shape, H.newLayer);
    l(ie.shape), o(ie.newLayer), w(v + H.offsetX * p), m(h + H.offsetY * p);
  }, O = (_) => {
    if (g) w(L + _.clientX - C), m(D + _.clientY - P);
    else if (M !== null) {
      const B = _.currentTarget.getBoundingClientRect(), W = Math.floor((_.clientX - B.left - v - u * 0.5) / p + 0.5), V = Math.floor((_.clientY - B.top - h - d * 0.5) / p + 0.5);
      if ((0 <= V && V < y.length && 0 <= W && W < y[V].length ? y[V][W] : 0) === M) return;
      const te = Ag(t, r, W, V, M), H = Dg(te.shape, te.newLayer);
      l(H.shape), o(H.newLayer), w(v + te.offsetX * p), m(h + te.offsetY * p);
    }
  }, R = (_) => {
    const B = i + (_.deltaY > 0 ? -1 : 1);
    -2 <= B && B <= 1 && s(B);
  }, N = () => {
    x(false), I(null);
  };
  return b.jsxs(Je, { sx: { width: "100%", height: "100%", display: "flex", flexDirection: "column" }, children: [b.jsxs(Je, { sx: { display: "flex", alignItems: "center", gap: 1, p: 1, borderBottom: 1, borderColor: "divider", flexShrink: 0 }, children: [b.jsxs(De, { variant: "body2", children: [r + 1, " / ", t.length] }), b.jsx(Vd, { size: "small", onClick: () => o(r - 1), disabled: r <= -1, children: b.jsx(k1, {}) }), b.jsx(Vd, { size: "small", onClick: () => o(r + 1), disabled: r >= t.length, children: b.jsx(E1, {}) })] }), b.jsx(Je, { ref: a, sx: { width: "100%", flexGrow: 1, flexShrink: 1, flexBasis: "auto", overflow: "hidden", cursor: g ? "grabbing" : "pointer" }, children: d > 0 && u > 0 && b.jsx("svg", { height: d, width: u, style: { display: "block" }, onMouseDown: j, onMouseMove: O, onMouseUp: N, onMouseLeave: N, onWheel: R, onContextMenu: (_) => _.preventDefault(), children: A }) })] });
}, DL = (e3) => {
  if (e3.length === 1) return e3;
  if (e3[0].length === 1) {
    const t = [];
    for (let n = 0; n < e3.length; ++n) {
      const r = [];
      for (let o = 0; o < e3[n][0].length; ++o) r.push(e3[n][0][o]);
      t.push(r);
    }
    return [t];
  } else if (e3[0][0].length === 1) {
    const t = [];
    for (let n = 0; n < e3.length; ++n) {
      const r = [];
      for (let o = 0; o < e3[n].length; ++o) r.push(e3[n][o][0]);
      t.push(r);
    }
    return [t];
  } else return e3;
}, O1 = (e3) => {
  const { shape: t, onChange: n } = e3, [r, o] = S.useState(t.length === 1 ? 0 : 1), { t: i } = Mr();
  return b.jsxs(Je, { sx: { width: "100%", height: "100%", display: "flex", flexFlow: "column" }, children: [b.jsx(Je, { sx: { borderBottom: 1, borderColor: "divider", flexGrow: 0, flexShrink: 1, flexBasis: "auto" }, children: b.jsxs(C1, { value: r, onChange: (s, l) => o(l), children: [b.jsx(Zi, { label: i("editor.planar"), disabled: t.length !== 1 }), b.jsx(Zi, { label: i("editor.cubic") }), b.jsx(Zi, { label: i("editor.layerwise") })] }) }), r === 0 && b.jsx(NL, { initialShape: t[0], onChange: (s) => {
    n([s]);
  }, gridSize: 32 }), r === 1 && b.jsx(zL, { initialShape: t, onChange: (s) => {
    n(DL(s));
  } }), r === 2 && b.jsx(AL, { initialShape: t, onChange: (s) => {
    n(s);
  }, gridSize: 32 })] });
}, FL = (e3) => {
  for (let t = 0; t < e3.length; ++t) for (let n = 0; n < e3[t].length; ++n) for (let r = 0; r < e3[t][n].length; ++r) if (e3[t][n][r] === 1) return false;
  return true;
}, _c = /* @__PURE__ */ new Map(), Ic = /* @__PURE__ */ new Map(), M1 = S.createContext(false), BL = (e3) => {
  const { dialogImpl: t, initialValues: n, resolve: r } = e3, [o, i] = S.useState(true);
  return b.jsx(M1.Provider, { value: o, children: S.createElement(t, { initialValues: n, close: (s) => {
    i(false), r(s);
  } }) });
}, Ji = (e3, t) => {
  if (!_c.has(e3)) {
    const o = document.createElement("div");
    document.body.appendChild(o);
    const i = Kf(o);
    _c.set(e3, i), Ic.set(e3, 0);
  }
  const n = _c.get(e3), r = Ic.get(e3);
  return Ic.set(e3, r ^ 1), new Promise((o) => {
    n.render(b.jsx(BL, { dialogImpl: e3, initialValues: t, resolve: o }, `${r}`));
  });
}, zu = (e3) => {
  const t = S.useContext(M1);
  return S.createElement(yT, { ...e3, open: t }, e3.children);
}, In = (e3) => {
  const t = { ...e3 };
  return delete t.title, b.jsx(LM, { title: e3.title, children: b.jsx(Vd, { ...t, children: e3.children }) });
}, WL = (e3) => {
  const { pieces: t, onChange: n } = e3, r = async (l) => {
    const a = await Ji(Fg, t[l]);
    if (a) {
      const u = [];
      for (let c = 0; c < t.length; ++c) u.push(c === l ? a : t[c]);
      n(u);
    }
  }, o = async () => {
    const l = await Ji(Fg, { shape: [[[1]]], count: 1 });
    l && n([...t, l]);
  }, i = (l) => {
    n(t.filter((a, u) => u !== l));
  }, { t: s } = Mr();
  return b.jsxs(Je, { className: "toolbox", children: [b.jsxs(Ra, { variant: "dense", className: "pieces-toolbar", children: [b.jsx(De, { variant: "h6", color: "inherit", component: "div", sx: { flexGlow: 1 }, children: s("pieces") }), b.jsx(In, { title: s("addPiece"), size: "small", edge: "start", color: "inherit", sx: { marginLeft: "auto" }, onClick: o, children: b.jsx(pL, {}) })] }), b.jsx(Je, { sx: { overflowY: "scroll", height: "320px" }, children: b.jsx(Po, { container: true, spacing: 0, children: t.map((l, a) => b.jsx(Po, { item: true, xs: "auto", children: b.jsx(Rr, { sx: { border: 1, borderColor: "#aaaaaa", margin: 0.5 }, onClick: () => r(a), onContextMenu: (u) => {
    u.preventDefault(), i(a);
  }, children: b.jsx(LL, { shape: l.shape, count: l.count, color: "#ccccff", maxGridSize: 20, height: 90, maxWidth: 90, padding: 0.5 }) }) }, a)) }) })] });
}, UL = (e3) => {
  if (e3.length === 1) return e3;
  if (e3[0].length === 1) {
    const t = [];
    for (let n = 0; n < e3.length; ++n) {
      const r = [];
      for (let o = 0; o < e3[n][0].length; ++o) r.push(e3[n][0][o]);
      t.push(r);
    }
    return [t];
  } else if (e3[0][0].length === 1) {
    const t = [];
    for (let n = 0; n < e3.length; ++n) {
      const r = [];
      for (let o = 0; o < e3[n].length; ++o) r.push(e3[n][o][0]);
      t.push(r);
    }
    return [t];
  } else return e3;
}, Fg = (e3) => {
  const { initialValues: t, close: n } = e3, [r, o] = S.useState(false), [i, s] = S.useState(t), l = (u) => {
    const c = parseInt(u.target.value);
    isNaN(c) || c < 1 || s({ ...i, count: c });
  }, { t: a } = Mr();
  return b.jsxs(zu, { children: [b.jsx(Tp, { children: a("editPiece") }), b.jsxs(ju, { children: [b.jsx(Je, { sx: { height: "320px" }, children: b.jsx(O1, { shape: i.shape, onChange: (u) => s({ ...i, shape: u }), planarGridSize: 32 }) }), r && b.jsx(De, { color: "error", children: a("pieceEmpty") }), b.jsx(Fl, { label: a("pieceCount"), type: "number", InputLabelProps: { shrink: true }, sx: { mt: 2 }, inputProps: { min: 1 }, variant: "standard", value: i.count, onChange: l })] }), b.jsxs(Iu, { children: [b.jsx(Rr, { onClick: () => n(), children: a("cancel") }), b.jsx(Rr, { onClick: () => {
    if (FL(i.shape)) {
      o(true);
      return;
    }
    const u = { shape: UL(i.shape), count: i.count };
    n(u);
  }, children: a("ok") })] })] });
};
function VL(e3) {
  return new Worker("" + new URL("solverWorker-CVcPACSm.js", import.meta.url).href, { name: e3 == null ? void 0 : e3.name });
}
let An = null, zo = null;
const HL = async (e3) => (An === null && (An = new VL()), zo !== null ? new Promise((t) => {
  t({ status: "error", error: "solver already running" });
}) : new Promise((t) => {
  An.onmessage = (n) => {
    zo = null, n.data.kind === "solved" ? t({ status: "ok", numAnswers: n.data.numAnswers }) : t({ status: "error", error: "data type mismatch" });
  }, An.postMessage({ kind: "solve", problem: e3 }), zo = t;
})), KL = async (e3) => An === null ? new Promise((t) => {
  t(null);
}) : new Promise((t) => {
  An.onmessage = (n) => {
    n.data.kind === "answer" ? t(n.data.answer) : n.data.kind === "error" && t(null);
  }, An.postMessage({ kind: "answer", index: e3 });
}), YL = () => {
  if (An !== null && (An.terminate(), An = null, zo !== null)) {
    const e3 = zo;
    zo = null, e3({ status: "error", error: "solver terminated" });
  }
}, L1 = (e3, t, n) => {
  const r = n ? 0.3 : 1;
  return t ? `hsla(${e3 % 12 * 30}, ${80 - Math.floor(e3 / 12) % 2 * 40}%, 60%, ${r})` : `hsla(${e3 % 12 * 30}, ${100 - Math.floor(e3 / 12) % 2 * 50}%, 80%, ${r})`;
}, XL = (e3) => {
  const { answer: t, pieceCounts: n, dims: r, gridSize: o } = e3, i = t.data, s = 5, l = ((r[1] + 0.5) * r[0] - 0.5) * o + s * 2, a = r[2] * o + s * 2, u = [], c = r[1], d = r[2], f = [];
  let p = 0;
  for (let w = 0; w < n.length; ++w) {
    const h = [];
    for (let m = 0; m < n[w]; ++m) h.push(p++);
    f.push(h);
  }
  const [y, v] = S.useState(null);
  for (let w = 0; w < r[0]; ++w) {
    const h = w * d * c, m = (r[0] - 1 - w) * (c + 0.5) * o;
    u.push(b.jsx("rect", { x: s, y: m + s, width: r[2] * o, height: r[1] * o, fill: "#eeeeee" }, `background,${w}`));
    for (let x = 0; x < c; ++x) for (let C = 0; C < d; ++C) {
      const E = i[h + x * d + C];
      if (E[0] < 0) continue;
      const P = f[E[0]][E[1]];
      u.push(b.jsx("rect", { x: C * o + s, y: m + x * o + s, width: o, height: o, fill: L1(P, P === y), onMouseOver: () => v(P), onMouseOut: () => v(null), stroke: "#888888" }, `${w},${x},${C}`));
    }
    const g = 3;
    for (let x = 0; x < c; ++x) for (let C = 0; C <= d; ++C) {
      let E = false;
      if (C == 0) E = i[h + x * d][0] >= 0;
      else if (C == d) E = i[h + x * d + d - 1][0] >= 0;
      else {
        const P = i[h + x * d + C - 1], $ = i[h + x * d + C];
        E = P[0] !== $[0] || P[1] !== $[1];
      }
      E && u.push(b.jsx("line", { x1: C * o + s, y1: m + x * o + s - g * 0.5, x2: C * o + s, y2: m + (x + 1) * o + s + g * 0.5, strokeWidth: g, stroke: "#333333" }, `v${w},${x},${C}`));
    }
    for (let x = 0; x <= c; ++x) for (let C = 0; C < d; ++C) {
      let E = false;
      if (x == 0) E = i[h + C][0] >= 0;
      else if (x == c) E = i[h + (c - 1) * d + C][0] >= 0;
      else {
        const P = i[h + (x - 1) * d + C], $ = i[h + x * d + C];
        E = P[0] !== $[0] || P[1] !== $[1];
      }
      E && u.push(b.jsx("line", { x1: C * o + s - g * 0.5, y1: m + x * o + s, x2: (C + 1) * o + s + g * 0.5, y2: m + x * o + s, strokeWidth: g, stroke: "#333333" }, `h${w},${x},${C}`));
    }
  }
  return b.jsx("svg", { height: l, width: a, children: u });
}, GL = (e3) => {
  const { answer: t, pieceCounts: n, dims: r } = e3, o = t.data, i = [];
  let s = 0;
  for (let d = 0; d < n.length; ++d) {
    const f = [];
    for (let p = 0; p < n[d]; ++p) f.push(s++);
    i.push(f);
  }
  const [l, a] = S.useState(new Array(s).fill(false));
  S.useEffect(() => {
    a(new Array(s).fill(false));
  }, [t]);
  const u = [];
  for (let d = 0; d < r[0]; ++d) for (let f = 0; f < r[1]; ++f) for (let p = 0; p < r[2]; ++p) {
    const y = o[d * r[1] * r[2] + f * r[2] + p];
    if (y[0] < 0) continue;
    const v = i[y[0]][y[1]];
    u.push({ coord: { x: p, y: f, z: d }, color: L1(v, false, l[v]), id: v });
  }
  const c = (d) => {
    if (d) {
      const f = d.cube, p = o[f.z * r[1] * r[2] + f.y * r[2] + f.x];
      if (p[0] < 0) return;
      const y = i[p[0]][p[1]], v = [...l];
      v[y] = !v[y], a(v);
    }
  };
  return b.jsx(T1, { cubes: u, onClick: c });
}, QL = (e3) => {
  const { pieces: t, board: n } = e3, [r, o] = S.useState(0), [i, s] = S.useState(null), [l, a] = S.useState(false), [u, c] = S.useState(null), d = async (m) => {
    const g = await KL(m);
    g !== null && (c(g), o(m));
  }, f = async () => {
    if (l) {
      YL();
      return;
    }
    const m = t.map((E) => E.shape), g = t.map((E) => E.count), x = { pieces: m, piece_count: g, board: n };
    a(true);
    const C = await HL(x);
    a(false), C.status === "ok" ? (s({ numAnswers: C.numAnswers, pieceCounts: g, board: n }), c(null), C.numAnswers > 0 && await d(0)) : (s(null), c(null));
  }, p = i !== null ? Math.min(r, i.numAnswers - 1) : 0, y = async (m) => {
    i !== null && (m === -2 ? await d(0) : m === -1 ? await d(Math.max(p - 1, 0)) : m === 1 ? await d(Math.min(p + 1, i.numAnswers - 1)) : m === 2 && await d(i.numAnswers - 1));
  }, [v, w] = S.useState(0), { t: h } = Mr();
  return b.jsxs(Je, { className: "toolbox", children: [b.jsxs(Ra, { variant: "dense", className: "solver-toolbar", children: [b.jsx(De, { variant: "h6", color: "inherit", component: "div", children: h("solver.title") }), b.jsx(In, { title: h(l ? "stopSolver" : "runSolver"), size: "small", edge: "start", color: "inherit", sx: { marginLeft: 1 }, onClick: f, children: l ? b.jsx(hL, {}) : b.jsx(yL, {}) }), b.jsx(In, { title: h("solver.firstAnswer"), size: "small", edge: "start", color: "inherit", disabled: i === void 0 || p === 0 || l, onClick: async () => await y(-2), children: b.jsx(gL, {}) }), b.jsx(In, { title: h("solver.prevAnswer"), size: "small", edge: "start", color: "inherit", disabled: i === void 0 || p === 0 || l, onClick: async () => await y(-1), children: b.jsx(k1, {}) }), b.jsx(In, { title: h("solver.nextAnswer"), size: "small", edge: "start", color: "inherit", disabled: i === null || p >= i.numAnswers - 1 || l, onClick: async () => await y(1), children: b.jsx(E1, {}) }), b.jsx(In, { title: h("solver.lastAnswer"), size: "small", edge: "start", color: "inherit", disabled: i === null || p >= i.numAnswers - 1 || l, onClick: async () => await y(2), children: b.jsx(vL, {}) }), i !== null && b.jsxs(De, { color: "inherit", sx: { marginLeft: 1 }, children: [p + 1, " / ", i.numAnswers] }), l && b.jsx(W$, { sx: { marginLeft: 1 } })] }), b.jsxs(Je, { sx: { height: "400px" }, children: [i !== null && i.numAnswers === 0 && b.jsx(Je, { children: b.jsx(De, { color: "error", children: h("solver.noSolution") }) }), i !== null && i.numAnswers > 0 && b.jsxs(Je, { sx: { width: "100%", height: "100%", display: "flex", flexFlow: "column" }, children: [b.jsx(Je, { sx: { borderBottom: 1, borderColor: "divider", flexGrow: 0, flexShrink: 1, flexBasis: "auto" }, children: b.jsxs(C1, { value: v, onChange: (m, g) => w(g), children: [b.jsx(Zi, { label: h("solver.layerwise") }), b.jsx(Zi, { label: h("solver.cubic") })] }) }), v === 0 && u !== null && b.jsx(Je, { sx: { height: "100%", overflowY: "scroll" }, children: b.jsx(XL, { answer: u, pieceCounts: i.pieceCounts, dims: [i.board.length, i.board[0].length, i.board[0][0].length], gridSize: 32 }) }), v === 1 && u !== null && b.jsx(GL, { answer: u, pieceCounts: i.pieceCounts, dims: [i.board.length, i.board[0].length, i.board[0][0].length] })] })] })] });
}, qL = (e3) => {
  const t = e3.close, { t: n } = Mr();
  return b.jsxs(zu, { children: [b.jsxs(ju, { children: [b.jsx(De, { variant: "h5", children: n("help.shapeEditor.title") }), b.jsx(De, { variant: "h6", children: n("help.shapeEditor.planar.title") }), b.jsx(De, { children: n("help.shapeEditor.planar.content1") }), b.jsx(De, { children: n("help.shapeEditor.planar.content2") }), b.jsx(De, { children: n("help.shapeEditor.planar.content3") }), b.jsx(De, { variant: "h6", children: n("help.shapeEditor.cubic.title") }), b.jsx(De, { children: n("help.shapeEditor.cubic.content1") }), b.jsx(De, { children: n("help.shapeEditor.cubic.content2") }), b.jsx(De, { children: n("help.shapeEditor.cubic.content3") }), b.jsx(De, { children: n("help.shapeEditor.cubic.content4") }), b.jsx(De, { children: n("help.shapeEditor.cubic.content5") }), b.jsx(De, { variant: "h5", children: n("help.disclaimer.title") }), b.jsx(De, { children: n("help.disclaimer.content") }), b.jsx(De, { children: b.jsx("a", { href: "license.txt", children: n("help.licenses") }) })] }), b.jsx(Iu, { children: b.jsx(Rr, { onClick: () => t(), children: n("help.close") }) })] });
};
function ZL() {
  const [e3, t] = S.useState([[[1]]]), [n, r] = S.useState([{ shape: [[[1]]], count: 1 }]), [o, i] = S.useState(0), [s, l] = S.useState(null), a = (v) => {
    l(v.currentTarget);
  }, u = () => {
    l(null);
  }, c = async () => {
    await Ji(eN, { message: "Are you sure you want to reset the problem? This action cannot be undone." }) !== void 0 && (t([[[1]]]), r([{ shape: [[[1]]], count: 1 }]), i(o ^ 1));
  }, d = async () => {
    const v = await Ji(JL, { width: e3[0][0].length, height: e3[0].length, depth: e3.length });
    v !== void 0 && (t(Array.from({ length: v.depth }, () => Array.from({ length: v.height }, () => Array.from({ length: v.width }, () => 1)))), i(o ^ 1));
  }, f = (v) => {
    t(Nc[v].board), r(Nc[v].pieces), i(o ^ 1);
  }, { t: p, i18n: y } = Mr();
  return b.jsxs(U$, { maxWidth: "md", children: [b.jsx(Je, { children: b.jsxs(Ra, { variant: "dense", className: "app-toolbar", children: [b.jsx(In, { title: p("newPuzzle"), sx: { ml: -2 }, onClick: c, children: b.jsx(P1, {}) }), b.jsx(In, { title: p("loadSample"), onClick: a, children: b.jsx(R1, {}) }), b.jsx(In, { title: p("help.title"), onClick: () => Ji(qL, {}), sx: { ml: "auto" }, children: b.jsx($1, {}) }), b.jsxs(Ip, { value: y.language, onChange: (v) => y.changeLanguage(v.target.value), children: [b.jsx(Oc, { value: "en", children: "English" }), b.jsx(Oc, { value: "ja", children: "\u65E5\u672C\u8A9E" })] })] }) }), b.jsx(S1, { id: "preset-menu", anchorEl: s, open: s !== null, onClose: u, MenuListProps: { "aria-labelledby": "preset-menu" }, children: Nc.map((v, w) => b.jsx(Oc, { onClick: () => {
    f(w), u();
  }, children: v.name }, `${w}`)) }), b.jsxs(Po, { container: true, spacing: 0, sx: { backgroundColor: "#f5f5f5" }, children: [b.jsx(Po, { item: true, xs: 6, children: b.jsx(WL, { pieces: n, onChange: (v) => r(v) }) }), b.jsx(Po, { item: true, xs: 6, children: b.jsxs(Je, { className: "toolbox", children: [b.jsxs(Ra, { variant: "dense", className: "board-toolbar", children: [b.jsx(De, { variant: "h6", color: "inherit", component: "div", children: p("board") }), b.jsx(In, { title: p("newBoard.title"), size: "small", edge: "start", color: "inherit", sx: { marginLeft: "auto" }, onClick: d, children: b.jsx(mL, {}) })] }), b.jsx(Je, { sx: { height: "320px" }, children: b.jsx(O1, { shape: e3, onChange: (v) => t(v), planarGridSize: 32 }, o) })] }) }), b.jsx(Po, { item: true, xs: 12, children: b.jsx(QL, { pieces: n, board: e3 }) })] })] });
}
const JL = (e3) => {
  const { initialValues: t, close: n } = e3, [r, o] = S.useState(t), i = (l) => (a) => {
    const u = parseInt(a.target.value);
    isNaN(u) || u < 1 || o({ ...r, [l]: u });
  }, { t: s } = Mr();
  return b.jsxs(zu, { children: [b.jsx(Tp, { children: s("newBoard.title") }), b.jsx(ju, { children: b.jsxs(Je, { sx: { display: "grid", gridTemplateColumns: "1fr", gap: 2 }, children: [b.jsx(Fl, { label: s("newBoard.width"), type: "number", InputLabelProps: { shrink: true }, sx: { mt: 2 }, inputProps: { min: 1 }, variant: "standard", value: r.width, onChange: i("width") }), b.jsx(Fl, { label: s("newBoard.height"), type: "number", InputLabelProps: { shrink: true }, sx: { mt: 2 }, inputProps: { min: 1 }, variant: "standard", value: r.height, onChange: i("height") }), b.jsx(Fl, { label: s("newBoard.depth"), type: "number", InputLabelProps: { shrink: true }, sx: { mt: 2 }, inputProps: { min: 1 }, variant: "standard", value: r.depth, onChange: i("depth") })] }) }), b.jsxs(Iu, { children: [b.jsx(Rr, { onClick: () => n(), children: s("cancel") }), b.jsx(Rr, { onClick: () => n(r), children: s("ok") })] })] });
}, eN = (e3) => {
  const { close: t } = e3, { t: n } = Mr();
  return b.jsxs(zu, { children: [b.jsx(Tp, { children: n("confirmation") }), b.jsx(ju, { children: b.jsx(De, { children: n("resetConfirmation") }) }), b.jsxs(Iu, { children: [b.jsx(Rr, { onClick: () => t(), children: "Cancel" }), b.jsx(Rr, { onClick: () => t({ message: "confirmed" }), children: "OK" })] })] });
};
Kf(document.getElementById("root")).render(b.jsx(S.StrictMode, { children: b.jsx(ZL, {}) }));

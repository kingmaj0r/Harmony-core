function xA(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var gT = { exports: {} }, lr = gT.exports = {}, lo, oo;
function kE() {
  throw new Error("setTimeout has not been defined");
}
function DE() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? lo = setTimeout : lo = kE;
  } catch {
    lo = kE;
  }
  try {
    typeof clearTimeout == "function" ? oo = clearTimeout : oo = DE;
  } catch {
    oo = DE;
  }
})();
function ST(a) {
  if (lo === setTimeout)
    return setTimeout(a, 0);
  if ((lo === kE || !lo) && setTimeout)
    return lo = setTimeout, setTimeout(a, 0);
  try {
    return lo(a, 0);
  } catch {
    try {
      return lo.call(null, a, 0);
    } catch {
      return lo.call(this, a, 0);
    }
  }
}
function wA(a) {
  if (oo === clearTimeout)
    return clearTimeout(a);
  if ((oo === DE || !oo) && clearTimeout)
    return oo = clearTimeout, clearTimeout(a);
  try {
    return oo(a);
  } catch {
    try {
      return oo.call(null, a);
    } catch {
      return oo.call(this, a);
    }
  }
}
var tu = [], Td = !1, Rc, Fy = -1;
function TA() {
  !Td || !Rc || (Td = !1, Rc.length ? tu = Rc.concat(tu) : Fy = -1, tu.length && ET());
}
function ET() {
  if (!Td) {
    var a = ST(TA);
    Td = !0;
    for (var f = tu.length; f; ) {
      for (Rc = tu, tu = []; ++Fy < f; )
        Rc && Rc[Fy].run();
      Fy = -1, f = tu.length;
    }
    Rc = null, Td = !1, wA(a);
  }
}
lr.nextTick = function(a) {
  var f = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var d = 1; d < arguments.length; d++)
      f[d - 1] = arguments[d];
  tu.push(new CT(a, f)), tu.length === 1 && !Td && ST(ET);
};
function CT(a, f) {
  this.fun = a, this.array = f;
}
CT.prototype.run = function() {
  this.fun.apply(null, this.array);
};
lr.title = "browser";
lr.browser = !0;
lr.env = {};
lr.argv = [];
lr.version = "";
lr.versions = {};
function ru() {
}
lr.on = ru;
lr.addListener = ru;
lr.once = ru;
lr.off = ru;
lr.removeListener = ru;
lr.removeAllListeners = ru;
lr.emit = ru;
lr.prependListener = ru;
lr.prependOnceListener = ru;
lr.listeners = function(a) {
  return [];
};
lr.binding = function(a) {
  throw new Error("process.binding is not supported");
};
lr.cwd = function() {
  return "/";
};
lr.chdir = function(a) {
  throw new Error("process.chdir is not supported");
};
lr.umask = function() {
  return 0;
};
var RA = gT.exports;
const fo = /* @__PURE__ */ xA(RA);
var OE = { exports: {} }, Ah = {}, AE = { exports: {} }, Bt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uw;
function bA() {
  if (Uw)
    return Bt;
  Uw = 1;
  var a = Symbol.for("react.element"), f = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), h = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), B = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), N = Symbol.iterator;
  function J(V) {
    return V === null || typeof V != "object" ? null : (V = N && V[N] || V["@@iterator"], typeof V == "function" ? V : null);
  }
  var K = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, te = Object.assign, ue = {};
  function Ce(V, le, Je) {
    this.props = V, this.context = le, this.refs = ue, this.updater = Je || K;
  }
  Ce.prototype.isReactComponent = {}, Ce.prototype.setState = function(V, le) {
    if (typeof V != "object" && typeof V != "function" && V != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, V, le, "setState");
  }, Ce.prototype.forceUpdate = function(V) {
    this.updater.enqueueForceUpdate(this, V, "forceUpdate");
  };
  function nt() {
  }
  nt.prototype = Ce.prototype;
  function Ee(V, le, Je) {
    this.props = V, this.context = le, this.refs = ue, this.updater = Je || K;
  }
  var Ge = Ee.prototype = new nt();
  Ge.constructor = Ee, te(Ge, Ce.prototype), Ge.isPureReactComponent = !0;
  var St = Array.isArray, Ye = Object.prototype.hasOwnProperty, wt = { current: null }, ot = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Vt(V, le, Je) {
    var Ae, qe = {}, vt = null, bt = null;
    if (le != null)
      for (Ae in le.ref !== void 0 && (bt = le.ref), le.key !== void 0 && (vt = "" + le.key), le)
        Ye.call(le, Ae) && !ot.hasOwnProperty(Ae) && (qe[Ae] = le[Ae]);
    var Et = arguments.length - 2;
    if (Et === 1)
      qe.children = Je;
    else if (1 < Et) {
      for (var Ct = Array(Et), rn = 0; rn < Et; rn++)
        Ct[rn] = arguments[rn + 2];
      qe.children = Ct;
    }
    if (V && V.defaultProps)
      for (Ae in Et = V.defaultProps, Et)
        qe[Ae] === void 0 && (qe[Ae] = Et[Ae]);
    return { $$typeof: a, type: V, key: vt, ref: bt, props: qe, _owner: wt.current };
  }
  function Tn(V, le) {
    return { $$typeof: a, type: V.type, key: le, ref: V.ref, props: V.props, _owner: V._owner };
  }
  function Xt(V) {
    return typeof V == "object" && V !== null && V.$$typeof === a;
  }
  function Ht(V) {
    var le = { "=": "=0", ":": "=2" };
    return "$" + V.replace(/[=:]/g, function(Je) {
      return le[Je];
    });
  }
  var Rn = /\/+/g;
  function Xe(V, le) {
    return typeof V == "object" && V !== null && V.key != null ? Ht("" + V.key) : le.toString(36);
  }
  function ht(V, le, Je, Ae, qe) {
    var vt = typeof V;
    (vt === "undefined" || vt === "boolean") && (V = null);
    var bt = !1;
    if (V === null)
      bt = !0;
    else
      switch (vt) {
        case "string":
        case "number":
          bt = !0;
          break;
        case "object":
          switch (V.$$typeof) {
            case a:
            case f:
              bt = !0;
          }
      }
    if (bt)
      return bt = V, qe = qe(bt), V = Ae === "" ? "." + Xe(bt, 0) : Ae, St(qe) ? (Je = "", V != null && (Je = V.replace(Rn, "$&/") + "/"), ht(qe, le, Je, "", function(rn) {
        return rn;
      })) : qe != null && (Xt(qe) && (qe = Tn(qe, Je + (!qe.key || bt && bt.key === qe.key ? "" : ("" + qe.key).replace(Rn, "$&/") + "/") + V)), le.push(qe)), 1;
    if (bt = 0, Ae = Ae === "" ? "." : Ae + ":", St(V))
      for (var Et = 0; Et < V.length; Et++) {
        vt = V[Et];
        var Ct = Ae + Xe(vt, Et);
        bt += ht(vt, le, Je, Ct, qe);
      }
    else if (Ct = J(V), typeof Ct == "function")
      for (V = Ct.call(V), Et = 0; !(vt = V.next()).done; )
        vt = vt.value, Ct = Ae + Xe(vt, Et++), bt += ht(vt, le, Je, Ct, qe);
    else if (vt === "object")
      throw le = String(V), Error("Objects are not valid as a React child (found: " + (le === "[object Object]" ? "object with keys {" + Object.keys(V).join(", ") + "}" : le) + "). If you meant to render a collection of children, use an array instead.");
    return bt;
  }
  function $t(V, le, Je) {
    if (V == null)
      return V;
    var Ae = [], qe = 0;
    return ht(V, Ae, "", "", function(vt) {
      return le.call(Je, vt, qe++);
    }), Ae;
  }
  function Mt(V) {
    if (V._status === -1) {
      var le = V._result;
      le = le(), le.then(function(Je) {
        (V._status === 0 || V._status === -1) && (V._status = 1, V._result = Je);
      }, function(Je) {
        (V._status === 0 || V._status === -1) && (V._status = 2, V._result = Je);
      }), V._status === -1 && (V._status = 0, V._result = le);
    }
    if (V._status === 1)
      return V._result.default;
    throw V._result;
  }
  var Le = { current: null }, ye = { transition: null }, je = { ReactCurrentDispatcher: Le, ReactCurrentBatchConfig: ye, ReactCurrentOwner: wt };
  function xe() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Bt.Children = { map: $t, forEach: function(V, le, Je) {
    $t(V, function() {
      le.apply(this, arguments);
    }, Je);
  }, count: function(V) {
    var le = 0;
    return $t(V, function() {
      le++;
    }), le;
  }, toArray: function(V) {
    return $t(V, function(le) {
      return le;
    }) || [];
  }, only: function(V) {
    if (!Xt(V))
      throw Error("React.Children.only expected to receive a single React element child.");
    return V;
  } }, Bt.Component = Ce, Bt.Fragment = d, Bt.Profiler = C, Bt.PureComponent = Ee, Bt.StrictMode = S, Bt.Suspense = L, Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = je, Bt.act = xe, Bt.cloneElement = function(V, le, Je) {
    if (V == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + V + ".");
    var Ae = te({}, V.props), qe = V.key, vt = V.ref, bt = V._owner;
    if (le != null) {
      if (le.ref !== void 0 && (vt = le.ref, bt = wt.current), le.key !== void 0 && (qe = "" + le.key), V.type && V.type.defaultProps)
        var Et = V.type.defaultProps;
      for (Ct in le)
        Ye.call(le, Ct) && !ot.hasOwnProperty(Ct) && (Ae[Ct] = le[Ct] === void 0 && Et !== void 0 ? Et[Ct] : le[Ct]);
    }
    var Ct = arguments.length - 2;
    if (Ct === 1)
      Ae.children = Je;
    else if (1 < Ct) {
      Et = Array(Ct);
      for (var rn = 0; rn < Ct; rn++)
        Et[rn] = arguments[rn + 2];
      Ae.children = Et;
    }
    return { $$typeof: a, type: V.type, key: qe, ref: vt, props: Ae, _owner: bt };
  }, Bt.createContext = function(V) {
    return V = { $$typeof: h, _currentValue: V, _currentValue2: V, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, V.Provider = { $$typeof: w, _context: V }, V.Consumer = V;
  }, Bt.createElement = Vt, Bt.createFactory = function(V) {
    var le = Vt.bind(null, V);
    return le.type = V, le;
  }, Bt.createRef = function() {
    return { current: null };
  }, Bt.forwardRef = function(V) {
    return { $$typeof: A, render: V };
  }, Bt.isValidElement = Xt, Bt.lazy = function(V) {
    return { $$typeof: D, _payload: { _status: -1, _result: V }, _init: Mt };
  }, Bt.memo = function(V, le) {
    return { $$typeof: B, type: V, compare: le === void 0 ? null : le };
  }, Bt.startTransition = function(V) {
    var le = ye.transition;
    ye.transition = {};
    try {
      V();
    } finally {
      ye.transition = le;
    }
  }, Bt.unstable_act = xe, Bt.useCallback = function(V, le) {
    return Le.current.useCallback(V, le);
  }, Bt.useContext = function(V) {
    return Le.current.useContext(V);
  }, Bt.useDebugValue = function() {
  }, Bt.useDeferredValue = function(V) {
    return Le.current.useDeferredValue(V);
  }, Bt.useEffect = function(V, le) {
    return Le.current.useEffect(V, le);
  }, Bt.useId = function() {
    return Le.current.useId();
  }, Bt.useImperativeHandle = function(V, le, Je) {
    return Le.current.useImperativeHandle(V, le, Je);
  }, Bt.useInsertionEffect = function(V, le) {
    return Le.current.useInsertionEffect(V, le);
  }, Bt.useLayoutEffect = function(V, le) {
    return Le.current.useLayoutEffect(V, le);
  }, Bt.useMemo = function(V, le) {
    return Le.current.useMemo(V, le);
  }, Bt.useReducer = function(V, le, Je) {
    return Le.current.useReducer(V, le, Je);
  }, Bt.useRef = function(V) {
    return Le.current.useRef(V);
  }, Bt.useState = function(V) {
    return Le.current.useState(V);
  }, Bt.useSyncExternalStore = function(V, le, Je) {
    return Le.current.useSyncExternalStore(V, le, Je);
  }, Bt.useTransition = function() {
    return Le.current.useTransition();
  }, Bt.version = "18.3.1", Bt;
}
var Mh = { exports: {} };
Mh.exports;
var zw;
function _A() {
  return zw || (zw = 1, function(a, f) {
    fo.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var d = "18.3.1", S = Symbol.for("react.element"), C = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), B = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), Ce = Symbol.iterator, nt = "@@iterator";
      function Ee(T) {
        if (T === null || typeof T != "object")
          return null;
        var F = Ce && T[Ce] || T[nt];
        return typeof F == "function" ? F : null;
      }
      var Ge = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, St = {
        transition: null
      }, Ye = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, wt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ot = {}, Vt = null;
      function Tn(T) {
        Vt = T;
      }
      ot.setExtraStackFrame = function(T) {
        Vt = T;
      }, ot.getCurrentStack = null, ot.getStackAddendum = function() {
        var T = "";
        Vt && (T += Vt);
        var F = ot.getCurrentStack;
        return F && (T += F() || ""), T;
      };
      var Xt = !1, Ht = !1, Rn = !1, Xe = !1, ht = !1, $t = {
        ReactCurrentDispatcher: Ge,
        ReactCurrentBatchConfig: St,
        ReactCurrentOwner: wt
      };
      $t.ReactDebugCurrentFrame = ot, $t.ReactCurrentActQueue = Ye;
      function Mt(T) {
        {
          for (var F = arguments.length, X = new Array(F > 1 ? F - 1 : 0), re = 1; re < F; re++)
            X[re - 1] = arguments[re];
          ye("warn", T, X);
        }
      }
      function Le(T) {
        {
          for (var F = arguments.length, X = new Array(F > 1 ? F - 1 : 0), re = 1; re < F; re++)
            X[re - 1] = arguments[re];
          ye("error", T, X);
        }
      }
      function ye(T, F, X) {
        {
          var re = $t.ReactDebugCurrentFrame, ge = re.getStackAddendum();
          ge !== "" && (F += "%s", X = X.concat([ge]));
          var at = X.map(function(Re) {
            return String(Re);
          });
          at.unshift("Warning: " + F), Function.prototype.apply.call(console[T], console, at);
        }
      }
      var je = {};
      function xe(T, F) {
        {
          var X = T.constructor, re = X && (X.displayName || X.name) || "ReactClass", ge = re + "." + F;
          if (je[ge])
            return;
          Le("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", F, re), je[ge] = !0;
        }
      }
      var V = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(T) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(T, F, X) {
          xe(T, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(T, F, X, re) {
          xe(T, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(T, F, X, re) {
          xe(T, "setState");
        }
      }, le = Object.assign, Je = {};
      Object.freeze(Je);
      function Ae(T, F, X) {
        this.props = T, this.context = F, this.refs = Je, this.updater = X || V;
      }
      Ae.prototype.isReactComponent = {}, Ae.prototype.setState = function(T, F) {
        if (typeof T != "object" && typeof T != "function" && T != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, T, F, "setState");
      }, Ae.prototype.forceUpdate = function(T) {
        this.updater.enqueueForceUpdate(this, T, "forceUpdate");
      };
      {
        var qe = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, vt = function(T, F) {
          Object.defineProperty(Ae.prototype, T, {
            get: function() {
              Mt("%s(...) is deprecated in plain JavaScript React classes. %s", F[0], F[1]);
            }
          });
        };
        for (var bt in qe)
          qe.hasOwnProperty(bt) && vt(bt, qe[bt]);
      }
      function Et() {
      }
      Et.prototype = Ae.prototype;
      function Ct(T, F, X) {
        this.props = T, this.context = F, this.refs = Je, this.updater = X || V;
      }
      var rn = Ct.prototype = new Et();
      rn.constructor = Ct, le(rn, Ae.prototype), rn.isPureReactComponent = !0;
      function On() {
        var T = {
          current: null
        };
        return Object.seal(T), T;
      }
      var or = Array.isArray;
      function vn(T) {
        return or(T);
      }
      function Wn(T) {
        {
          var F = typeof Symbol == "function" && Symbol.toStringTag, X = F && T[Symbol.toStringTag] || T.constructor.name || "Object";
          return X;
        }
      }
      function Fn(T) {
        try {
          return sn(T), !1;
        } catch {
          return !0;
        }
      }
      function sn(T) {
        return "" + T;
      }
      function cn(T) {
        if (Fn(T))
          return Le("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wn(T)), sn(T);
      }
      function Lr(T, F, X) {
        var re = T.displayName;
        if (re)
          return re;
        var ge = F.displayName || F.name || "";
        return ge !== "" ? X + "(" + ge + ")" : X;
      }
      function Nr(T) {
        return T.displayName || "Context";
      }
      function Un(T) {
        if (T == null)
          return null;
        if (typeof T.tag == "number" && Le("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
          return T.displayName || T.name || null;
        if (typeof T == "string")
          return T;
        switch (T) {
          case w:
            return "Fragment";
          case C:
            return "Portal";
          case A:
            return "Profiler";
          case h:
            return "StrictMode";
          case N:
            return "Suspense";
          case J:
            return "SuspenseList";
        }
        if (typeof T == "object")
          switch (T.$$typeof) {
            case B:
              var F = T;
              return Nr(F) + ".Consumer";
            case L:
              var X = T;
              return Nr(X._context) + ".Provider";
            case D:
              return Lr(T, T.render, "ForwardRef");
            case K:
              var re = T.displayName || null;
              return re !== null ? re : Un(T.type) || "Memo";
            case te: {
              var ge = T, at = ge._payload, Re = ge._init;
              try {
                return Un(Re(at));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ur = Object.prototype.hasOwnProperty, Mr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Jn, sr, ln;
      ln = {};
      function cr(T) {
        if (ur.call(T, "ref")) {
          var F = Object.getOwnPropertyDescriptor(T, "ref").get;
          if (F && F.isReactWarning)
            return !1;
        }
        return T.ref !== void 0;
      }
      function gn(T) {
        if (ur.call(T, "key")) {
          var F = Object.getOwnPropertyDescriptor(T, "key").get;
          if (F && F.isReactWarning)
            return !1;
        }
        return T.key !== void 0;
      }
      function bn(T, F) {
        var X = function() {
          Jn || (Jn = !0, Le("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        X.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: X,
          configurable: !0
        });
      }
      function Bi(T, F) {
        var X = function() {
          sr || (sr = !0, Le("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        X.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: X,
          configurable: !0
        });
      }
      function b(T) {
        if (typeof T.ref == "string" && wt.current && T.__self && wt.current.stateNode !== T.__self) {
          var F = Un(wt.current.type);
          ln[F] || (Le('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F, T.ref), ln[F] = !0);
        }
      }
      var m = function(T, F, X, re, ge, at, Re) {
        var rt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: S,
          // Built-in properties that belong on the element
          type: T,
          key: F,
          ref: X,
          props: Re,
          // Record the component responsible for creating this element.
          _owner: at
        };
        return rt._store = {}, Object.defineProperty(rt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(rt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: re
        }), Object.defineProperty(rt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ge
        }), Object.freeze && (Object.freeze(rt.props), Object.freeze(rt)), rt;
      };
      function g(T, F, X) {
        var re, ge = {}, at = null, Re = null, rt = null, kt = null;
        if (F != null) {
          cr(F) && (Re = F.ref, b(F)), gn(F) && (cn(F.key), at = "" + F.key), rt = F.__self === void 0 ? null : F.__self, kt = F.__source === void 0 ? null : F.__source;
          for (re in F)
            ur.call(F, re) && !Mr.hasOwnProperty(re) && (ge[re] = F[re]);
        }
        var It = arguments.length - 2;
        if (It === 1)
          ge.children = X;
        else if (It > 1) {
          for (var dn = Array(It), an = 0; an < It; an++)
            dn[an] = arguments[an + 2];
          Object.freeze && Object.freeze(dn), ge.children = dn;
        }
        if (T && T.defaultProps) {
          var pn = T.defaultProps;
          for (re in pn)
            ge[re] === void 0 && (ge[re] = pn[re]);
        }
        if (at || Re) {
          var mn = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          at && bn(ge, mn), Re && Bi(ge, mn);
        }
        return m(T, at, Re, rt, kt, wt.current, ge);
      }
      function k(T, F) {
        var X = m(T.type, F, T.ref, T._self, T._source, T._owner, T.props);
        return X;
      }
      function z(T, F, X) {
        if (T == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
        var re, ge = le({}, T.props), at = T.key, Re = T.ref, rt = T._self, kt = T._source, It = T._owner;
        if (F != null) {
          cr(F) && (Re = F.ref, It = wt.current), gn(F) && (cn(F.key), at = "" + F.key);
          var dn;
          T.type && T.type.defaultProps && (dn = T.type.defaultProps);
          for (re in F)
            ur.call(F, re) && !Mr.hasOwnProperty(re) && (F[re] === void 0 && dn !== void 0 ? ge[re] = dn[re] : ge[re] = F[re]);
        }
        var an = arguments.length - 2;
        if (an === 1)
          ge.children = X;
        else if (an > 1) {
          for (var pn = Array(an), mn = 0; mn < an; mn++)
            pn[mn] = arguments[mn + 2];
          ge.children = pn;
        }
        return m(T.type, at, Re, rt, kt, It, ge);
      }
      function $(T) {
        return typeof T == "object" && T !== null && T.$$typeof === S;
      }
      var ne = ".", Be = ":";
      function _t(T) {
        var F = /[=:]/g, X = {
          "=": "=0",
          ":": "=2"
        }, re = T.replace(F, function(ge) {
          return X[ge];
        });
        return "$" + re;
      }
      var Ze = !1, Ot = /\/+/g;
      function We(T) {
        return T.replace(Ot, "$&/");
      }
      function Zt(T, F) {
        return typeof T == "object" && T !== null && T.key != null ? (cn(T.key), _t("" + T.key)) : F.toString(36);
      }
      function fa(T, F, X, re, ge) {
        var at = typeof T;
        (at === "undefined" || at === "boolean") && (T = null);
        var Re = !1;
        if (T === null)
          Re = !0;
        else
          switch (at) {
            case "string":
            case "number":
              Re = !0;
              break;
            case "object":
              switch (T.$$typeof) {
                case S:
                case C:
                  Re = !0;
              }
          }
        if (Re) {
          var rt = T, kt = ge(rt), It = re === "" ? ne + Zt(rt, 0) : re;
          if (vn(kt)) {
            var dn = "";
            It != null && (dn = We(It) + "/"), fa(kt, F, dn, "", function(Od) {
              return Od;
            });
          } else
            kt != null && ($(kt) && (kt.key && (!rt || rt.key !== kt.key) && cn(kt.key), kt = k(
              kt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              X + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (kt.key && (!rt || rt.key !== kt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                We("" + kt.key) + "/"
              ) : "") + It
            )), F.push(kt));
          return 1;
        }
        var an, pn, mn = 0, zt = re === "" ? ne : re + Be;
        if (vn(T))
          for (var Ka = 0; Ka < T.length; Ka++)
            an = T[Ka], pn = zt + Zt(an, Ka), mn += fa(an, F, X, pn, ge);
        else {
          var vu = Ee(T);
          if (typeof vu == "function") {
            var ws = T;
            vu === ws.entries && (Ze || Mt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ze = !0);
            for (var Dd = vu.call(ws), va, Ts = 0; !(va = Dd.next()).done; )
              an = va.value, pn = zt + Zt(an, Ts++), mn += fa(an, F, X, pn, ge);
          } else if (at === "object") {
            var Rs = String(T);
            throw new Error("Objects are not valid as a React child (found: " + (Rs === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : Rs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return mn;
      }
      function ji(T, F, X) {
        if (T == null)
          return T;
        var re = [], ge = 0;
        return fa(T, re, "", "", function(at) {
          return F.call(X, at, ge++);
        }), re;
      }
      function xl(T) {
        var F = 0;
        return ji(T, function() {
          F++;
        }), F;
      }
      function ho(T, F, X) {
        ji(T, function() {
          F.apply(this, arguments);
        }, X);
      }
      function iu(T) {
        return ji(T, function(F) {
          return F;
        }) || [];
      }
      function Wa(T) {
        if (!$(T))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return T;
      }
      function wl(T) {
        var F = {
          $$typeof: B,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: T,
          _currentValue2: T,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        F.Provider = {
          $$typeof: L,
          _context: F
        };
        var X = !1, re = !1, ge = !1;
        {
          var at = {
            $$typeof: B,
            _context: F
          };
          Object.defineProperties(at, {
            Provider: {
              get: function() {
                return re || (re = !0, Le("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), F.Provider;
              },
              set: function(Re) {
                F.Provider = Re;
              }
            },
            _currentValue: {
              get: function() {
                return F._currentValue;
              },
              set: function(Re) {
                F._currentValue = Re;
              }
            },
            _currentValue2: {
              get: function() {
                return F._currentValue2;
              },
              set: function(Re) {
                F._currentValue2 = Re;
              }
            },
            _threadCount: {
              get: function() {
                return F._threadCount;
              },
              set: function(Re) {
                F._threadCount = Re;
              }
            },
            Consumer: {
              get: function() {
                return X || (X = !0, Le("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), F.Consumer;
              }
            },
            displayName: {
              get: function() {
                return F.displayName;
              },
              set: function(Re) {
                ge || (Mt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Re), ge = !0);
              }
            }
          }), F.Consumer = at;
        }
        return F._currentRenderer = null, F._currentRenderer2 = null, F;
      }
      var wi = -1, wa = 0, Ti = 1, da = 2;
      function Hr(T) {
        if (T._status === wi) {
          var F = T._result, X = F();
          if (X.then(function(at) {
            if (T._status === wa || T._status === wi) {
              var Re = T;
              Re._status = Ti, Re._result = at;
            }
          }, function(at) {
            if (T._status === wa || T._status === wi) {
              var Re = T;
              Re._status = da, Re._result = at;
            }
          }), T._status === wi) {
            var re = T;
            re._status = wa, re._result = X;
          }
        }
        if (T._status === Ti) {
          var ge = T._result;
          return ge === void 0 && Le(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ge), "default" in ge || Le(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ge), ge.default;
        } else
          throw T._result;
      }
      function Ri(T) {
        var F = {
          // We use these fields to store the result.
          _status: wi,
          _result: T
        }, X = {
          $$typeof: te,
          _payload: F,
          _init: Hr
        };
        {
          var re, ge;
          Object.defineProperties(X, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return re;
              },
              set: function(at) {
                Le("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), re = at, Object.defineProperty(X, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ge;
              },
              set: function(at) {
                Le("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ge = at, Object.defineProperty(X, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return X;
      }
      function Ta(T) {
        T != null && T.$$typeof === K ? Le("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof T != "function" ? Le("forwardRef requires a render function but was given %s.", T === null ? "null" : typeof T) : T.length !== 0 && T.length !== 2 && Le("forwardRef render functions accept exactly two parameters: props and ref. %s", T.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), T != null && (T.defaultProps != null || T.propTypes != null) && Le("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var F = {
          $$typeof: D,
          render: T
        };
        {
          var X;
          Object.defineProperty(F, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return X;
            },
            set: function(re) {
              X = re, !T.name && !T.displayName && (T.displayName = re);
            }
          });
        }
        return F;
      }
      var Ra;
      Ra = Symbol.for("react.module.reference");
      function U(T) {
        return !!(typeof T == "string" || typeof T == "function" || T === w || T === A || ht || T === h || T === N || T === J || Xe || T === ue || Xt || Ht || Rn || typeof T == "object" && T !== null && (T.$$typeof === te || T.$$typeof === K || T.$$typeof === L || T.$$typeof === B || T.$$typeof === D || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        T.$$typeof === Ra || T.getModuleId !== void 0));
      }
      function de(T, F) {
        U(T) || Le("memo: The first argument must be a component. Instead received: %s", T === null ? "null" : typeof T);
        var X = {
          $$typeof: K,
          type: T,
          compare: F === void 0 ? null : F
        };
        {
          var re;
          Object.defineProperty(X, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return re;
            },
            set: function(ge) {
              re = ge, !T.name && !T.displayName && (T.displayName = ge);
            }
          });
        }
        return X;
      }
      function me() {
        var T = Ge.current;
        return T === null && Le(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), T;
      }
      function Ie(T) {
        var F = me();
        if (T._context !== void 0) {
          var X = T._context;
          X.Consumer === T ? Le("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : X.Provider === T && Le("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return F.useContext(T);
      }
      function At(T) {
        var F = me();
        return F.useState(T);
      }
      function Ft(T, F, X) {
        var re = me();
        return re.useReducer(T, F, X);
      }
      function it(T) {
        var F = me();
        return F.useRef(T);
      }
      function Tt(T, F) {
        var X = me();
        return X.useEffect(T, F);
      }
      function Qn(T, F) {
        var X = me();
        return X.useInsertionEffect(T, F);
      }
      function fn(T, F) {
        var X = me();
        return X.useLayoutEffect(T, F);
      }
      function Sn(T, F) {
        var X = me();
        return X.useCallback(T, F);
      }
      function Fr(T, F) {
        var X = me();
        return X.useMemo(T, F);
      }
      function ba(T, F, X) {
        var re = me();
        return re.useImperativeHandle(T, F, X);
      }
      function Yt(T, F) {
        {
          var X = me();
          return X.useDebugValue(T, F);
        }
      }
      function fr() {
        var T = me();
        return T.useTransition();
      }
      function Ir(T) {
        var F = me();
        return F.useDeferredValue(T);
      }
      function Rt() {
        var T = me();
        return T.useId();
      }
      function Pi(T, F, X) {
        var re = me();
        return re.useSyncExternalStore(T, F, X);
      }
      var Tl = 0, au, Rl, ri, Ss, Vr, Es, Cs;
      function kc() {
      }
      kc.__reactDisabledLog = !0;
      function lu() {
        {
          if (Tl === 0) {
            au = console.log, Rl = console.info, ri = console.warn, Ss = console.error, Vr = console.group, Es = console.groupCollapsed, Cs = console.groupEnd;
            var T = {
              configurable: !0,
              enumerable: !0,
              value: kc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: T,
              log: T,
              warn: T,
              error: T,
              group: T,
              groupCollapsed: T,
              groupEnd: T
            });
          }
          Tl++;
        }
      }
      function bl() {
        {
          if (Tl--, Tl === 0) {
            var T = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: le({}, T, {
                value: au
              }),
              info: le({}, T, {
                value: Rl
              }),
              warn: le({}, T, {
                value: ri
              }),
              error: le({}, T, {
                value: Ss
              }),
              group: le({}, T, {
                value: Vr
              }),
              groupCollapsed: le({}, T, {
                value: Es
              }),
              groupEnd: le({}, T, {
                value: Cs
              })
            });
          }
          Tl < 0 && Le("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var pa = $t.ReactCurrentDispatcher, $r;
      function _l(T, F, X) {
        {
          if ($r === void 0)
            try {
              throw Error();
            } catch (ge) {
              var re = ge.stack.trim().match(/\n( *(at )?)/);
              $r = re && re[1] || "";
            }
          return `
` + $r + T;
        }
      }
      var kl = !1, Dl;
      {
        var ou = typeof WeakMap == "function" ? WeakMap : Map;
        Dl = new ou();
      }
      function uu(T, F) {
        if (!T || kl)
          return "";
        {
          var X = Dl.get(T);
          if (X !== void 0)
            return X;
        }
        var re;
        kl = !0;
        var ge = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var at;
        at = pa.current, pa.current = null, lu();
        try {
          if (F) {
            var Re = function() {
              throw Error();
            };
            if (Object.defineProperty(Re.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Re, []);
              } catch (zt) {
                re = zt;
              }
              Reflect.construct(T, [], Re);
            } else {
              try {
                Re.call();
              } catch (zt) {
                re = zt;
              }
              T.call(Re.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (zt) {
              re = zt;
            }
            T();
          }
        } catch (zt) {
          if (zt && re && typeof zt.stack == "string") {
            for (var rt = zt.stack.split(`
`), kt = re.stack.split(`
`), It = rt.length - 1, dn = kt.length - 1; It >= 1 && dn >= 0 && rt[It] !== kt[dn]; )
              dn--;
            for (; It >= 1 && dn >= 0; It--, dn--)
              if (rt[It] !== kt[dn]) {
                if (It !== 1 || dn !== 1)
                  do
                    if (It--, dn--, dn < 0 || rt[It] !== kt[dn]) {
                      var an = `
` + rt[It].replace(" at new ", " at ");
                      return T.displayName && an.includes("<anonymous>") && (an = an.replace("<anonymous>", T.displayName)), typeof T == "function" && Dl.set(T, an), an;
                    }
                  while (It >= 1 && dn >= 0);
                break;
              }
          }
        } finally {
          kl = !1, pa.current = at, bl(), Error.prepareStackTrace = ge;
        }
        var pn = T ? T.displayName || T.name : "", mn = pn ? _l(pn) : "";
        return typeof T == "function" && Dl.set(T, mn), mn;
      }
      function Qa(T, F, X) {
        return uu(T, !1);
      }
      function kd(T) {
        var F = T.prototype;
        return !!(F && F.isReactComponent);
      }
      function _a(T, F, X) {
        if (T == null)
          return "";
        if (typeof T == "function")
          return uu(T, kd(T));
        if (typeof T == "string")
          return _l(T);
        switch (T) {
          case N:
            return _l("Suspense");
          case J:
            return _l("SuspenseList");
        }
        if (typeof T == "object")
          switch (T.$$typeof) {
            case D:
              return Qa(T.render);
            case K:
              return _a(T.type, F, X);
            case te: {
              var re = T, ge = re._payload, at = re._init;
              try {
                return _a(at(ge), F, X);
              } catch {
              }
            }
          }
        return "";
      }
      var Wt = {}, su = $t.ReactDebugCurrentFrame;
      function vo(T) {
        if (T) {
          var F = T._owner, X = _a(T.type, T._source, F ? F.type : null);
          su.setExtraStackFrame(X);
        } else
          su.setExtraStackFrame(null);
      }
      function cu(T, F, X, re, ge) {
        {
          var at = Function.call.bind(ur);
          for (var Re in T)
            if (at(T, Re)) {
              var rt = void 0;
              try {
                if (typeof T[Re] != "function") {
                  var kt = Error((re || "React class") + ": " + X + " type `" + Re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[Re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw kt.name = "Invariant Violation", kt;
                }
                rt = T[Re](F, Re, re, X, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (It) {
                rt = It;
              }
              rt && !(rt instanceof Error) && (vo(ge), Le("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", re || "React class", X, Re, typeof rt), vo(null)), rt instanceof Error && !(rt.message in Wt) && (Wt[rt.message] = !0, vo(ge), Le("Failed %s type: %s", X, rt.message), vo(null));
            }
        }
      }
      function Ut(T) {
        if (T) {
          var F = T._owner, X = _a(T.type, T._source, F ? F.type : null);
          Tn(X);
        } else
          Tn(null);
      }
      var fu;
      fu = !1;
      function du() {
        if (wt.current) {
          var T = Un(wt.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
      function dt(T) {
        if (T !== void 0) {
          var F = T.fileName.replace(/^.*[\\\/]/, ""), X = T.lineNumber;
          return `

Check your code at ` + F + ":" + X + ".";
        }
        return "";
      }
      function mo(T) {
        return T != null ? dt(T.__source) : "";
      }
      var An = {};
      function ii(T) {
        var F = du();
        if (!F) {
          var X = typeof T == "string" ? T : T.displayName || T.name;
          X && (F = `

Check the top-level render call using <` + X + ">.");
        }
        return F;
      }
      function Yr(T, F) {
        if (!(!T._store || T._store.validated || T.key != null)) {
          T._store.validated = !0;
          var X = ii(F);
          if (!An[X]) {
            An[X] = !0;
            var re = "";
            T && T._owner && T._owner !== wt.current && (re = " It was passed a child from " + Un(T._owner.type) + "."), Ut(T), Le('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', X, re), Ut(null);
          }
        }
      }
      function Ol(T, F) {
        if (typeof T == "object") {
          if (vn(T))
            for (var X = 0; X < T.length; X++) {
              var re = T[X];
              $(re) && Yr(re, F);
            }
          else if ($(T))
            T._store && (T._store.validated = !0);
          else if (T) {
            var ge = Ee(T);
            if (typeof ge == "function" && ge !== T.entries)
              for (var at = ge.call(T), Re; !(Re = at.next()).done; )
                $(Re.value) && Yr(Re.value, F);
          }
        }
      }
      function zn(T) {
        {
          var F = T.type;
          if (F == null || typeof F == "string")
            return;
          var X;
          if (typeof F == "function")
            X = F.propTypes;
          else if (typeof F == "object" && (F.$$typeof === D || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          F.$$typeof === K))
            X = F.propTypes;
          else
            return;
          if (X) {
            var re = Un(F);
            cu(X, T.props, "prop", re, T);
          } else if (F.PropTypes !== void 0 && !fu) {
            fu = !0;
            var ge = Un(F);
            Le("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ge || "Unknown");
          }
          typeof F.getDefaultProps == "function" && !F.getDefaultProps.isReactClassApproved && Le("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function en(T) {
        {
          for (var F = Object.keys(T.props), X = 0; X < F.length; X++) {
            var re = F[X];
            if (re !== "children" && re !== "key") {
              Ut(T), Le("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", re), Ut(null);
              break;
            }
          }
          T.ref !== null && (Ut(T), Le("Invalid attribute `ref` supplied to `React.Fragment`."), Ut(null));
        }
      }
      function Dc(T, F, X) {
        var re = U(T);
        if (!re) {
          var ge = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (ge += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var at = mo(F);
          at ? ge += at : ge += du();
          var Re;
          T === null ? Re = "null" : vn(T) ? Re = "array" : T !== void 0 && T.$$typeof === S ? (Re = "<" + (Un(T.type) || "Unknown") + " />", ge = " Did you accidentally export a JSX literal instead of a component?") : Re = typeof T, Le("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Re, ge);
        }
        var rt = g.apply(this, arguments);
        if (rt == null)
          return rt;
        if (re)
          for (var kt = 2; kt < arguments.length; kt++)
            Ol(arguments[kt], T);
        return T === w ? en(rt) : zn(rt), rt;
      }
      var ai = !1;
      function dr(T) {
        var F = Dc.bind(null, T);
        return F.type = T, ai || (ai = !0, Mt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(F, "type", {
          enumerable: !1,
          get: function() {
            return Mt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: T
            }), T;
          }
        }), F;
      }
      function ka(T, F, X) {
        for (var re = z.apply(this, arguments), ge = 2; ge < arguments.length; ge++)
          Ol(arguments[ge], re.type);
        return zn(re), re;
      }
      function Oc(T, F) {
        var X = St.transition;
        St.transition = {};
        var re = St.transition;
        St.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          T();
        } finally {
          if (St.transition = X, X === null && re._updatedFibers) {
            var ge = re._updatedFibers.size;
            ge > 10 && Mt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), re._updatedFibers.clear();
          }
        }
      }
      var Ga = !1, Al = null;
      function Ac(T) {
        if (Al === null)
          try {
            var F = ("require" + Math.random()).slice(0, 7), X = a && a[F];
            Al = X.call(a, "timers").setImmediate;
          } catch {
            Al = function(ge) {
              Ga === !1 && (Ga = !0, typeof MessageChannel > "u" && Le("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var at = new MessageChannel();
              at.port1.onmessage = ge, at.port2.postMessage(void 0);
            };
          }
        return Al(T);
      }
      var Hi = 0, Ll = !1;
      function qa(T) {
        {
          var F = Hi;
          Hi++, Ye.current === null && (Ye.current = []);
          var X = Ye.isBatchingLegacy, re;
          try {
            if (Ye.isBatchingLegacy = !0, re = T(), !X && Ye.didScheduleLegacyUpdate) {
              var ge = Ye.current;
              ge !== null && (Ye.didScheduleLegacyUpdate = !1, Ml(ge));
            }
          } catch (pn) {
            throw Ii(F), pn;
          } finally {
            Ye.isBatchingLegacy = X;
          }
          if (re !== null && typeof re == "object" && typeof re.then == "function") {
            var at = re, Re = !1, rt = {
              then: function(pn, mn) {
                Re = !0, at.then(function(zt) {
                  Ii(F), Hi === 0 ? pu(zt, pn, mn) : pn(zt);
                }, function(zt) {
                  Ii(F), mn(zt);
                });
              }
            };
            return !Ll && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Re || (Ll = !0, Le("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), rt;
          } else {
            var kt = re;
            if (Ii(F), Hi === 0) {
              var It = Ye.current;
              It !== null && (Ml(It), Ye.current = null);
              var dn = {
                then: function(pn, mn) {
                  Ye.current === null ? (Ye.current = [], pu(kt, pn, mn)) : pn(kt);
                }
              };
              return dn;
            } else {
              var an = {
                then: function(pn, mn) {
                  pn(kt);
                }
              };
              return an;
            }
          }
        }
      }
      function Ii(T) {
        T !== Hi - 1 && Le("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Hi = T;
      }
      function pu(T, F, X) {
        {
          var re = Ye.current;
          if (re !== null)
            try {
              Ml(re), Ac(function() {
                re.length === 0 ? (Ye.current = null, F(T)) : pu(T, F, X);
              });
            } catch (ge) {
              X(ge);
            }
          else
            F(T);
        }
      }
      var Nl = !1;
      function Ml(T) {
        if (!Nl) {
          Nl = !0;
          var F = 0;
          try {
            for (; F < T.length; F++) {
              var X = T[F];
              do
                X = X(!0);
              while (X !== null);
            }
            T.length = 0;
          } catch (re) {
            throw T = T.slice(F + 1), re;
          } finally {
            Nl = !1;
          }
        }
      }
      var yo = Dc, hu = ka, xs = dr, ha = {
        map: ji,
        forEach: ho,
        count: xl,
        toArray: iu,
        only: Wa
      };
      f.Children = ha, f.Component = Ae, f.Fragment = w, f.Profiler = A, f.PureComponent = Ct, f.StrictMode = h, f.Suspense = N, f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $t, f.act = qa, f.cloneElement = hu, f.createContext = wl, f.createElement = yo, f.createFactory = xs, f.createRef = On, f.forwardRef = Ta, f.isValidElement = $, f.lazy = Ri, f.memo = de, f.startTransition = Oc, f.unstable_act = qa, f.useCallback = Sn, f.useContext = Ie, f.useDebugValue = Yt, f.useDeferredValue = Ir, f.useEffect = Tt, f.useId = Rt, f.useImperativeHandle = ba, f.useInsertionEffect = Qn, f.useLayoutEffect = fn, f.useMemo = Fr, f.useReducer = Ft, f.useRef = it, f.useState = At, f.useSyncExternalStore = Pi, f.useTransition = fr, f.version = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Mh, Mh.exports)), Mh.exports;
}
fo.env.NODE_ENV === "production" ? AE.exports = bA() : AE.exports = _A();
var eu = AE.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bw;
function kA() {
  if (Bw)
    return Ah;
  Bw = 1;
  var a = eu, f = Symbol.for("react.element"), d = Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, C = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(A, L, B) {
    var D, N = {}, J = null, K = null;
    B !== void 0 && (J = "" + B), L.key !== void 0 && (J = "" + L.key), L.ref !== void 0 && (K = L.ref);
    for (D in L)
      S.call(L, D) && !w.hasOwnProperty(D) && (N[D] = L[D]);
    if (A && A.defaultProps)
      for (D in L = A.defaultProps, L)
        N[D] === void 0 && (N[D] = L[D]);
    return { $$typeof: f, type: A, key: J, ref: K, props: N, _owner: C.current };
  }
  return Ah.Fragment = d, Ah.jsx = h, Ah.jsxs = h, Ah;
}
var Lh = {}, jw;
function DA() {
  return jw || (jw = 1, fo.env.NODE_ENV !== "production" && function() {
    var a = eu, f = Symbol.for("react.element"), d = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), A = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), te = Symbol.iterator, ue = "@@iterator";
    function Ce(U) {
      if (U === null || typeof U != "object")
        return null;
      var de = te && U[te] || U[ue];
      return typeof de == "function" ? de : null;
    }
    var nt = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ee(U) {
      {
        for (var de = arguments.length, me = new Array(de > 1 ? de - 1 : 0), Ie = 1; Ie < de; Ie++)
          me[Ie - 1] = arguments[Ie];
        Ge("error", U, me);
      }
    }
    function Ge(U, de, me) {
      {
        var Ie = nt.ReactDebugCurrentFrame, At = Ie.getStackAddendum();
        At !== "" && (de += "%s", me = me.concat([At]));
        var Ft = me.map(function(it) {
          return String(it);
        });
        Ft.unshift("Warning: " + de), Function.prototype.apply.call(console[U], console, Ft);
      }
    }
    var St = !1, Ye = !1, wt = !1, ot = !1, Vt = !1, Tn;
    Tn = Symbol.for("react.module.reference");
    function Xt(U) {
      return !!(typeof U == "string" || typeof U == "function" || U === S || U === w || Vt || U === C || U === B || U === D || ot || U === K || St || Ye || wt || typeof U == "object" && U !== null && (U.$$typeof === J || U.$$typeof === N || U.$$typeof === h || U.$$typeof === A || U.$$typeof === L || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      U.$$typeof === Tn || U.getModuleId !== void 0));
    }
    function Ht(U, de, me) {
      var Ie = U.displayName;
      if (Ie)
        return Ie;
      var At = de.displayName || de.name || "";
      return At !== "" ? me + "(" + At + ")" : me;
    }
    function Rn(U) {
      return U.displayName || "Context";
    }
    function Xe(U) {
      if (U == null)
        return null;
      if (typeof U.tag == "number" && Ee("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof U == "function")
        return U.displayName || U.name || null;
      if (typeof U == "string")
        return U;
      switch (U) {
        case S:
          return "Fragment";
        case d:
          return "Portal";
        case w:
          return "Profiler";
        case C:
          return "StrictMode";
        case B:
          return "Suspense";
        case D:
          return "SuspenseList";
      }
      if (typeof U == "object")
        switch (U.$$typeof) {
          case A:
            var de = U;
            return Rn(de) + ".Consumer";
          case h:
            var me = U;
            return Rn(me._context) + ".Provider";
          case L:
            return Ht(U, U.render, "ForwardRef");
          case N:
            var Ie = U.displayName || null;
            return Ie !== null ? Ie : Xe(U.type) || "Memo";
          case J: {
            var At = U, Ft = At._payload, it = At._init;
            try {
              return Xe(it(Ft));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ht = Object.assign, $t = 0, Mt, Le, ye, je, xe, V, le;
    function Je() {
    }
    Je.__reactDisabledLog = !0;
    function Ae() {
      {
        if ($t === 0) {
          Mt = console.log, Le = console.info, ye = console.warn, je = console.error, xe = console.group, V = console.groupCollapsed, le = console.groupEnd;
          var U = {
            configurable: !0,
            enumerable: !0,
            value: Je,
            writable: !0
          };
          Object.defineProperties(console, {
            info: U,
            log: U,
            warn: U,
            error: U,
            group: U,
            groupCollapsed: U,
            groupEnd: U
          });
        }
        $t++;
      }
    }
    function qe() {
      {
        if ($t--, $t === 0) {
          var U = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ht({}, U, {
              value: Mt
            }),
            info: ht({}, U, {
              value: Le
            }),
            warn: ht({}, U, {
              value: ye
            }),
            error: ht({}, U, {
              value: je
            }),
            group: ht({}, U, {
              value: xe
            }),
            groupCollapsed: ht({}, U, {
              value: V
            }),
            groupEnd: ht({}, U, {
              value: le
            })
          });
        }
        $t < 0 && Ee("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var vt = nt.ReactCurrentDispatcher, bt;
    function Et(U, de, me) {
      {
        if (bt === void 0)
          try {
            throw Error();
          } catch (At) {
            var Ie = At.stack.trim().match(/\n( *(at )?)/);
            bt = Ie && Ie[1] || "";
          }
        return `
` + bt + U;
      }
    }
    var Ct = !1, rn;
    {
      var On = typeof WeakMap == "function" ? WeakMap : Map;
      rn = new On();
    }
    function or(U, de) {
      if (!U || Ct)
        return "";
      {
        var me = rn.get(U);
        if (me !== void 0)
          return me;
      }
      var Ie;
      Ct = !0;
      var At = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ft;
      Ft = vt.current, vt.current = null, Ae();
      try {
        if (de) {
          var it = function() {
            throw Error();
          };
          if (Object.defineProperty(it.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(it, []);
            } catch (fr) {
              Ie = fr;
            }
            Reflect.construct(U, [], it);
          } else {
            try {
              it.call();
            } catch (fr) {
              Ie = fr;
            }
            U.call(it.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (fr) {
            Ie = fr;
          }
          U();
        }
      } catch (fr) {
        if (fr && Ie && typeof fr.stack == "string") {
          for (var Tt = fr.stack.split(`
`), Qn = Ie.stack.split(`
`), fn = Tt.length - 1, Sn = Qn.length - 1; fn >= 1 && Sn >= 0 && Tt[fn] !== Qn[Sn]; )
            Sn--;
          for (; fn >= 1 && Sn >= 0; fn--, Sn--)
            if (Tt[fn] !== Qn[Sn]) {
              if (fn !== 1 || Sn !== 1)
                do
                  if (fn--, Sn--, Sn < 0 || Tt[fn] !== Qn[Sn]) {
                    var Fr = `
` + Tt[fn].replace(" at new ", " at ");
                    return U.displayName && Fr.includes("<anonymous>") && (Fr = Fr.replace("<anonymous>", U.displayName)), typeof U == "function" && rn.set(U, Fr), Fr;
                  }
                while (fn >= 1 && Sn >= 0);
              break;
            }
        }
      } finally {
        Ct = !1, vt.current = Ft, qe(), Error.prepareStackTrace = At;
      }
      var ba = U ? U.displayName || U.name : "", Yt = ba ? Et(ba) : "";
      return typeof U == "function" && rn.set(U, Yt), Yt;
    }
    function vn(U, de, me) {
      return or(U, !1);
    }
    function Wn(U) {
      var de = U.prototype;
      return !!(de && de.isReactComponent);
    }
    function Fn(U, de, me) {
      if (U == null)
        return "";
      if (typeof U == "function")
        return or(U, Wn(U));
      if (typeof U == "string")
        return Et(U);
      switch (U) {
        case B:
          return Et("Suspense");
        case D:
          return Et("SuspenseList");
      }
      if (typeof U == "object")
        switch (U.$$typeof) {
          case L:
            return vn(U.render);
          case N:
            return Fn(U.type, de, me);
          case J: {
            var Ie = U, At = Ie._payload, Ft = Ie._init;
            try {
              return Fn(Ft(At), de, me);
            } catch {
            }
          }
        }
      return "";
    }
    var sn = Object.prototype.hasOwnProperty, cn = {}, Lr = nt.ReactDebugCurrentFrame;
    function Nr(U) {
      if (U) {
        var de = U._owner, me = Fn(U.type, U._source, de ? de.type : null);
        Lr.setExtraStackFrame(me);
      } else
        Lr.setExtraStackFrame(null);
    }
    function Un(U, de, me, Ie, At) {
      {
        var Ft = Function.call.bind(sn);
        for (var it in U)
          if (Ft(U, it)) {
            var Tt = void 0;
            try {
              if (typeof U[it] != "function") {
                var Qn = Error((Ie || "React class") + ": " + me + " type `" + it + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof U[it] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Qn.name = "Invariant Violation", Qn;
              }
              Tt = U[it](de, it, Ie, me, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (fn) {
              Tt = fn;
            }
            Tt && !(Tt instanceof Error) && (Nr(At), Ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ie || "React class", me, it, typeof Tt), Nr(null)), Tt instanceof Error && !(Tt.message in cn) && (cn[Tt.message] = !0, Nr(At), Ee("Failed %s type: %s", me, Tt.message), Nr(null));
          }
      }
    }
    var ur = Array.isArray;
    function Mr(U) {
      return ur(U);
    }
    function Jn(U) {
      {
        var de = typeof Symbol == "function" && Symbol.toStringTag, me = de && U[Symbol.toStringTag] || U.constructor.name || "Object";
        return me;
      }
    }
    function sr(U) {
      try {
        return ln(U), !1;
      } catch {
        return !0;
      }
    }
    function ln(U) {
      return "" + U;
    }
    function cr(U) {
      if (sr(U))
        return Ee("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Jn(U)), ln(U);
    }
    var gn = nt.ReactCurrentOwner, bn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Bi, b, m;
    m = {};
    function g(U) {
      if (sn.call(U, "ref")) {
        var de = Object.getOwnPropertyDescriptor(U, "ref").get;
        if (de && de.isReactWarning)
          return !1;
      }
      return U.ref !== void 0;
    }
    function k(U) {
      if (sn.call(U, "key")) {
        var de = Object.getOwnPropertyDescriptor(U, "key").get;
        if (de && de.isReactWarning)
          return !1;
      }
      return U.key !== void 0;
    }
    function z(U, de) {
      if (typeof U.ref == "string" && gn.current && de && gn.current.stateNode !== de) {
        var me = Xe(gn.current.type);
        m[me] || (Ee('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Xe(gn.current.type), U.ref), m[me] = !0);
      }
    }
    function $(U, de) {
      {
        var me = function() {
          Bi || (Bi = !0, Ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", de));
        };
        me.isReactWarning = !0, Object.defineProperty(U, "key", {
          get: me,
          configurable: !0
        });
      }
    }
    function ne(U, de) {
      {
        var me = function() {
          b || (b = !0, Ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", de));
        };
        me.isReactWarning = !0, Object.defineProperty(U, "ref", {
          get: me,
          configurable: !0
        });
      }
    }
    var Be = function(U, de, me, Ie, At, Ft, it) {
      var Tt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: U,
        key: de,
        ref: me,
        props: it,
        // Record the component responsible for creating this element.
        _owner: Ft
      };
      return Tt._store = {}, Object.defineProperty(Tt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Tt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ie
      }), Object.defineProperty(Tt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: At
      }), Object.freeze && (Object.freeze(Tt.props), Object.freeze(Tt)), Tt;
    };
    function _t(U, de, me, Ie, At) {
      {
        var Ft, it = {}, Tt = null, Qn = null;
        me !== void 0 && (cr(me), Tt = "" + me), k(de) && (cr(de.key), Tt = "" + de.key), g(de) && (Qn = de.ref, z(de, At));
        for (Ft in de)
          sn.call(de, Ft) && !bn.hasOwnProperty(Ft) && (it[Ft] = de[Ft]);
        if (U && U.defaultProps) {
          var fn = U.defaultProps;
          for (Ft in fn)
            it[Ft] === void 0 && (it[Ft] = fn[Ft]);
        }
        if (Tt || Qn) {
          var Sn = typeof U == "function" ? U.displayName || U.name || "Unknown" : U;
          Tt && $(it, Sn), Qn && ne(it, Sn);
        }
        return Be(U, Tt, Qn, At, Ie, gn.current, it);
      }
    }
    var Ze = nt.ReactCurrentOwner, Ot = nt.ReactDebugCurrentFrame;
    function We(U) {
      if (U) {
        var de = U._owner, me = Fn(U.type, U._source, de ? de.type : null);
        Ot.setExtraStackFrame(me);
      } else
        Ot.setExtraStackFrame(null);
    }
    var Zt;
    Zt = !1;
    function fa(U) {
      return typeof U == "object" && U !== null && U.$$typeof === f;
    }
    function ji() {
      {
        if (Ze.current) {
          var U = Xe(Ze.current.type);
          if (U)
            return `

Check the render method of \`` + U + "`.";
        }
        return "";
      }
    }
    function xl(U) {
      return "";
    }
    var ho = {};
    function iu(U) {
      {
        var de = ji();
        if (!de) {
          var me = typeof U == "string" ? U : U.displayName || U.name;
          me && (de = `

Check the top-level render call using <` + me + ">.");
        }
        return de;
      }
    }
    function Wa(U, de) {
      {
        if (!U._store || U._store.validated || U.key != null)
          return;
        U._store.validated = !0;
        var me = iu(de);
        if (ho[me])
          return;
        ho[me] = !0;
        var Ie = "";
        U && U._owner && U._owner !== Ze.current && (Ie = " It was passed a child from " + Xe(U._owner.type) + "."), We(U), Ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', me, Ie), We(null);
      }
    }
    function wl(U, de) {
      {
        if (typeof U != "object")
          return;
        if (Mr(U))
          for (var me = 0; me < U.length; me++) {
            var Ie = U[me];
            fa(Ie) && Wa(Ie, de);
          }
        else if (fa(U))
          U._store && (U._store.validated = !0);
        else if (U) {
          var At = Ce(U);
          if (typeof At == "function" && At !== U.entries)
            for (var Ft = At.call(U), it; !(it = Ft.next()).done; )
              fa(it.value) && Wa(it.value, de);
        }
      }
    }
    function wi(U) {
      {
        var de = U.type;
        if (de == null || typeof de == "string")
          return;
        var me;
        if (typeof de == "function")
          me = de.propTypes;
        else if (typeof de == "object" && (de.$$typeof === L || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        de.$$typeof === N))
          me = de.propTypes;
        else
          return;
        if (me) {
          var Ie = Xe(de);
          Un(me, U.props, "prop", Ie, U);
        } else if (de.PropTypes !== void 0 && !Zt) {
          Zt = !0;
          var At = Xe(de);
          Ee("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", At || "Unknown");
        }
        typeof de.getDefaultProps == "function" && !de.getDefaultProps.isReactClassApproved && Ee("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wa(U) {
      {
        for (var de = Object.keys(U.props), me = 0; me < de.length; me++) {
          var Ie = de[me];
          if (Ie !== "children" && Ie !== "key") {
            We(U), Ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ie), We(null);
            break;
          }
        }
        U.ref !== null && (We(U), Ee("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
      }
    }
    var Ti = {};
    function da(U, de, me, Ie, At, Ft) {
      {
        var it = Xt(U);
        if (!it) {
          var Tt = "";
          (U === void 0 || typeof U == "object" && U !== null && Object.keys(U).length === 0) && (Tt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Qn = xl();
          Qn ? Tt += Qn : Tt += ji();
          var fn;
          U === null ? fn = "null" : Mr(U) ? fn = "array" : U !== void 0 && U.$$typeof === f ? (fn = "<" + (Xe(U.type) || "Unknown") + " />", Tt = " Did you accidentally export a JSX literal instead of a component?") : fn = typeof U, Ee("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fn, Tt);
        }
        var Sn = _t(U, de, me, At, Ft);
        if (Sn == null)
          return Sn;
        if (it) {
          var Fr = de.children;
          if (Fr !== void 0)
            if (Ie)
              if (Mr(Fr)) {
                for (var ba = 0; ba < Fr.length; ba++)
                  wl(Fr[ba], U);
                Object.freeze && Object.freeze(Fr);
              } else
                Ee("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wl(Fr, U);
        }
        if (sn.call(de, "key")) {
          var Yt = Xe(U), fr = Object.keys(de).filter(function(Pi) {
            return Pi !== "key";
          }), Ir = fr.length > 0 ? "{key: someKey, " + fr.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ti[Yt + Ir]) {
            var Rt = fr.length > 0 ? "{" + fr.join(": ..., ") + ": ...}" : "{}";
            Ee(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ir, Yt, Rt, Yt), Ti[Yt + Ir] = !0;
          }
        }
        return U === S ? wa(Sn) : wi(Sn), Sn;
      }
    }
    function Hr(U, de, me) {
      return da(U, de, me, !0);
    }
    function Ri(U, de, me) {
      return da(U, de, me, !1);
    }
    var Ta = Ri, Ra = Hr;
    Lh.Fragment = S, Lh.jsx = Ta, Lh.jsxs = Ra;
  }()), Lh;
}
fo.env.NODE_ENV === "production" ? OE.exports = kA() : OE.exports = DA();
var gt = OE.exports, LE = { exports: {} }, ua = {}, Ny = { exports: {} }, gE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pw;
function OA() {
  return Pw || (Pw = 1, function(a) {
    function f(ye, je) {
      var xe = ye.length;
      ye.push(je);
      e:
        for (; 0 < xe; ) {
          var V = xe - 1 >>> 1, le = ye[V];
          if (0 < C(le, je))
            ye[V] = je, ye[xe] = le, xe = V;
          else
            break e;
        }
    }
    function d(ye) {
      return ye.length === 0 ? null : ye[0];
    }
    function S(ye) {
      if (ye.length === 0)
        return null;
      var je = ye[0], xe = ye.pop();
      if (xe !== je) {
        ye[0] = xe;
        e:
          for (var V = 0, le = ye.length, Je = le >>> 1; V < Je; ) {
            var Ae = 2 * (V + 1) - 1, qe = ye[Ae], vt = Ae + 1, bt = ye[vt];
            if (0 > C(qe, xe))
              vt < le && 0 > C(bt, qe) ? (ye[V] = bt, ye[vt] = xe, V = vt) : (ye[V] = qe, ye[Ae] = xe, V = Ae);
            else if (vt < le && 0 > C(bt, xe))
              ye[V] = bt, ye[vt] = xe, V = vt;
            else
              break e;
          }
      }
      return je;
    }
    function C(ye, je) {
      var xe = ye.sortIndex - je.sortIndex;
      return xe !== 0 ? xe : ye.id - je.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var w = performance;
      a.unstable_now = function() {
        return w.now();
      };
    } else {
      var h = Date, A = h.now();
      a.unstable_now = function() {
        return h.now() - A;
      };
    }
    var L = [], B = [], D = 1, N = null, J = 3, K = !1, te = !1, ue = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, nt = typeof clearTimeout == "function" ? clearTimeout : null, Ee = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ge(ye) {
      for (var je = d(B); je !== null; ) {
        if (je.callback === null)
          S(B);
        else if (je.startTime <= ye)
          S(B), je.sortIndex = je.expirationTime, f(L, je);
        else
          break;
        je = d(B);
      }
    }
    function St(ye) {
      if (ue = !1, Ge(ye), !te)
        if (d(L) !== null)
          te = !0, Mt(Ye);
        else {
          var je = d(B);
          je !== null && Le(St, je.startTime - ye);
        }
    }
    function Ye(ye, je) {
      te = !1, ue && (ue = !1, nt(Vt), Vt = -1), K = !0;
      var xe = J;
      try {
        for (Ge(je), N = d(L); N !== null && (!(N.expirationTime > je) || ye && !Ht()); ) {
          var V = N.callback;
          if (typeof V == "function") {
            N.callback = null, J = N.priorityLevel;
            var le = V(N.expirationTime <= je);
            je = a.unstable_now(), typeof le == "function" ? N.callback = le : N === d(L) && S(L), Ge(je);
          } else
            S(L);
          N = d(L);
        }
        if (N !== null)
          var Je = !0;
        else {
          var Ae = d(B);
          Ae !== null && Le(St, Ae.startTime - je), Je = !1;
        }
        return Je;
      } finally {
        N = null, J = xe, K = !1;
      }
    }
    var wt = !1, ot = null, Vt = -1, Tn = 5, Xt = -1;
    function Ht() {
      return !(a.unstable_now() - Xt < Tn);
    }
    function Rn() {
      if (ot !== null) {
        var ye = a.unstable_now();
        Xt = ye;
        var je = !0;
        try {
          je = ot(!0, ye);
        } finally {
          je ? Xe() : (wt = !1, ot = null);
        }
      } else
        wt = !1;
    }
    var Xe;
    if (typeof Ee == "function")
      Xe = function() {
        Ee(Rn);
      };
    else if (typeof MessageChannel < "u") {
      var ht = new MessageChannel(), $t = ht.port2;
      ht.port1.onmessage = Rn, Xe = function() {
        $t.postMessage(null);
      };
    } else
      Xe = function() {
        Ce(Rn, 0);
      };
    function Mt(ye) {
      ot = ye, wt || (wt = !0, Xe());
    }
    function Le(ye, je) {
      Vt = Ce(function() {
        ye(a.unstable_now());
      }, je);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(ye) {
      ye.callback = null;
    }, a.unstable_continueExecution = function() {
      te || K || (te = !0, Mt(Ye));
    }, a.unstable_forceFrameRate = function(ye) {
      0 > ye || 125 < ye ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Tn = 0 < ye ? Math.floor(1e3 / ye) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return J;
    }, a.unstable_getFirstCallbackNode = function() {
      return d(L);
    }, a.unstable_next = function(ye) {
      switch (J) {
        case 1:
        case 2:
        case 3:
          var je = 3;
          break;
        default:
          je = J;
      }
      var xe = J;
      J = je;
      try {
        return ye();
      } finally {
        J = xe;
      }
    }, a.unstable_pauseExecution = function() {
    }, a.unstable_requestPaint = function() {
    }, a.unstable_runWithPriority = function(ye, je) {
      switch (ye) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ye = 3;
      }
      var xe = J;
      J = ye;
      try {
        return je();
      } finally {
        J = xe;
      }
    }, a.unstable_scheduleCallback = function(ye, je, xe) {
      var V = a.unstable_now();
      switch (typeof xe == "object" && xe !== null ? (xe = xe.delay, xe = typeof xe == "number" && 0 < xe ? V + xe : V) : xe = V, ye) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return le = xe + le, ye = { id: D++, callback: je, priorityLevel: ye, startTime: xe, expirationTime: le, sortIndex: -1 }, xe > V ? (ye.sortIndex = xe, f(B, ye), d(L) === null && ye === d(B) && (ue ? (nt(Vt), Vt = -1) : ue = !0, Le(St, xe - V))) : (ye.sortIndex = le, f(L, ye), te || K || (te = !0, Mt(Ye))), ye;
    }, a.unstable_shouldYield = Ht, a.unstable_wrapCallback = function(ye) {
      var je = J;
      return function() {
        var xe = J;
        J = je;
        try {
          return ye.apply(this, arguments);
        } finally {
          J = xe;
        }
      };
    };
  }(gE)), gE;
}
var SE = {}, Hw;
function AA() {
  return Hw || (Hw = 1, function(a) {
    fo.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var f = !1, d = !1, S = 5;
      function C(m, g) {
        var k = m.length;
        m.push(g), A(m, g, k);
      }
      function w(m) {
        return m.length === 0 ? null : m[0];
      }
      function h(m) {
        if (m.length === 0)
          return null;
        var g = m[0], k = m.pop();
        return k !== g && (m[0] = k, L(m, k, 0)), g;
      }
      function A(m, g, k) {
        for (var z = k; z > 0; ) {
          var $ = z - 1 >>> 1, ne = m[$];
          if (B(ne, g) > 0)
            m[$] = g, m[z] = ne, z = $;
          else
            return;
        }
      }
      function L(m, g, k) {
        for (var z = k, $ = m.length, ne = $ >>> 1; z < ne; ) {
          var Be = (z + 1) * 2 - 1, _t = m[Be], Ze = Be + 1, Ot = m[Ze];
          if (B(_t, g) < 0)
            Ze < $ && B(Ot, _t) < 0 ? (m[z] = Ot, m[Ze] = g, z = Ze) : (m[z] = _t, m[Be] = g, z = Be);
          else if (Ze < $ && B(Ot, g) < 0)
            m[z] = Ot, m[Ze] = g, z = Ze;
          else
            return;
        }
      }
      function B(m, g) {
        var k = m.sortIndex - g.sortIndex;
        return k !== 0 ? k : m.id - g.id;
      }
      var D = 1, N = 2, J = 3, K = 4, te = 5;
      function ue(m, g) {
      }
      var Ce = typeof performance == "object" && typeof performance.now == "function";
      if (Ce) {
        var nt = performance;
        a.unstable_now = function() {
          return nt.now();
        };
      } else {
        var Ee = Date, Ge = Ee.now();
        a.unstable_now = function() {
          return Ee.now() - Ge;
        };
      }
      var St = 1073741823, Ye = -1, wt = 250, ot = 5e3, Vt = 1e4, Tn = St, Xt = [], Ht = [], Rn = 1, Xe = null, ht = J, $t = !1, Mt = !1, Le = !1, ye = typeof setTimeout == "function" ? setTimeout : null, je = typeof clearTimeout == "function" ? clearTimeout : null, xe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function V(m) {
        for (var g = w(Ht); g !== null; ) {
          if (g.callback === null)
            h(Ht);
          else if (g.startTime <= m)
            h(Ht), g.sortIndex = g.expirationTime, C(Xt, g);
          else
            return;
          g = w(Ht);
        }
      }
      function le(m) {
        if (Le = !1, V(m), !Mt)
          if (w(Xt) !== null)
            Mt = !0, cr(Je);
          else {
            var g = w(Ht);
            g !== null && gn(le, g.startTime - m);
          }
      }
      function Je(m, g) {
        Mt = !1, Le && (Le = !1, bn()), $t = !0;
        var k = ht;
        try {
          var z;
          if (!d)
            return Ae(m, g);
        } finally {
          Xe = null, ht = k, $t = !1;
        }
      }
      function Ae(m, g) {
        var k = g;
        for (V(k), Xe = w(Xt); Xe !== null && !f && !(Xe.expirationTime > k && (!m || Nr())); ) {
          var z = Xe.callback;
          if (typeof z == "function") {
            Xe.callback = null, ht = Xe.priorityLevel;
            var $ = Xe.expirationTime <= k, ne = z($);
            k = a.unstable_now(), typeof ne == "function" ? Xe.callback = ne : Xe === w(Xt) && h(Xt), V(k);
          } else
            h(Xt);
          Xe = w(Xt);
        }
        if (Xe !== null)
          return !0;
        var Be = w(Ht);
        return Be !== null && gn(le, Be.startTime - k), !1;
      }
      function qe(m, g) {
        switch (m) {
          case D:
          case N:
          case J:
          case K:
          case te:
            break;
          default:
            m = J;
        }
        var k = ht;
        ht = m;
        try {
          return g();
        } finally {
          ht = k;
        }
      }
      function vt(m) {
        var g;
        switch (ht) {
          case D:
          case N:
          case J:
            g = J;
            break;
          default:
            g = ht;
            break;
        }
        var k = ht;
        ht = g;
        try {
          return m();
        } finally {
          ht = k;
        }
      }
      function bt(m) {
        var g = ht;
        return function() {
          var k = ht;
          ht = g;
          try {
            return m.apply(this, arguments);
          } finally {
            ht = k;
          }
        };
      }
      function Et(m, g, k) {
        var z = a.unstable_now(), $;
        if (typeof k == "object" && k !== null) {
          var ne = k.delay;
          typeof ne == "number" && ne > 0 ? $ = z + ne : $ = z;
        } else
          $ = z;
        var Be;
        switch (m) {
          case D:
            Be = Ye;
            break;
          case N:
            Be = wt;
            break;
          case te:
            Be = Tn;
            break;
          case K:
            Be = Vt;
            break;
          case J:
          default:
            Be = ot;
            break;
        }
        var _t = $ + Be, Ze = {
          id: Rn++,
          callback: g,
          priorityLevel: m,
          startTime: $,
          expirationTime: _t,
          sortIndex: -1
        };
        return $ > z ? (Ze.sortIndex = $, C(Ht, Ze), w(Xt) === null && Ze === w(Ht) && (Le ? bn() : Le = !0, gn(le, $ - z))) : (Ze.sortIndex = _t, C(Xt, Ze), !Mt && !$t && (Mt = !0, cr(Je))), Ze;
      }
      function Ct() {
      }
      function rn() {
        !Mt && !$t && (Mt = !0, cr(Je));
      }
      function On() {
        return w(Xt);
      }
      function or(m) {
        m.callback = null;
      }
      function vn() {
        return ht;
      }
      var Wn = !1, Fn = null, sn = -1, cn = S, Lr = -1;
      function Nr() {
        var m = a.unstable_now() - Lr;
        return !(m < cn);
      }
      function Un() {
      }
      function ur(m) {
        if (m < 0 || m > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        m > 0 ? cn = Math.floor(1e3 / m) : cn = S;
      }
      var Mr = function() {
        if (Fn !== null) {
          var m = a.unstable_now();
          Lr = m;
          var g = !0, k = !0;
          try {
            k = Fn(g, m);
          } finally {
            k ? Jn() : (Wn = !1, Fn = null);
          }
        } else
          Wn = !1;
      }, Jn;
      if (typeof xe == "function")
        Jn = function() {
          xe(Mr);
        };
      else if (typeof MessageChannel < "u") {
        var sr = new MessageChannel(), ln = sr.port2;
        sr.port1.onmessage = Mr, Jn = function() {
          ln.postMessage(null);
        };
      } else
        Jn = function() {
          ye(Mr, 0);
        };
      function cr(m) {
        Fn = m, Wn || (Wn = !0, Jn());
      }
      function gn(m, g) {
        sn = ye(function() {
          m(a.unstable_now());
        }, g);
      }
      function bn() {
        je(sn), sn = -1;
      }
      var Bi = Un, b = null;
      a.unstable_IdlePriority = te, a.unstable_ImmediatePriority = D, a.unstable_LowPriority = K, a.unstable_NormalPriority = J, a.unstable_Profiling = b, a.unstable_UserBlockingPriority = N, a.unstable_cancelCallback = or, a.unstable_continueExecution = rn, a.unstable_forceFrameRate = ur, a.unstable_getCurrentPriorityLevel = vn, a.unstable_getFirstCallbackNode = On, a.unstable_next = vt, a.unstable_pauseExecution = Ct, a.unstable_requestPaint = Bi, a.unstable_runWithPriority = qe, a.unstable_scheduleCallback = Et, a.unstable_shouldYield = Nr, a.unstable_wrapCallback = bt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(SE)), SE;
}
var Iw;
function xT() {
  return Iw || (Iw = 1, fo.env.NODE_ENV === "production" ? Ny.exports = OA() : Ny.exports = AA()), Ny.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vw;
function LA() {
  if (Vw)
    return ua;
  Vw = 1;
  var a = eu, f = xT();
  function d(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = /* @__PURE__ */ new Set(), C = {};
  function w(n, r) {
    h(n, r), h(n + "Capture", r);
  }
  function h(n, r) {
    for (C[n] = r, n = 0; n < r.length; n++)
      S.add(r[n]);
  }
  var A = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), L = Object.prototype.hasOwnProperty, B = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, D = {}, N = {};
  function J(n) {
    return L.call(N, n) ? !0 : L.call(D, n) ? !1 : B.test(n) ? N[n] = !0 : (D[n] = !0, !1);
  }
  function K(n, r, o, s) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function te(n, r, o, s) {
    if (r === null || typeof r > "u" || K(n, r, o, s))
      return !0;
    if (s)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function ue(n, r, o, s, p, y, R) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = s, this.attributeNamespace = p, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = y, this.removeEmptyString = R;
  }
  var Ce = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ce[n] = new ue(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ce[r] = new ue(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ce[n] = new ue(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ce[n] = new ue(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ce[n] = new ue(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ce[n] = new ue(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ce[n] = new ue(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ce[n] = new ue(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ce[n] = new ue(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var nt = /[\-:]([a-z])/g;
  function Ee(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      nt,
      Ee
    );
    Ce[r] = new ue(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(nt, Ee);
    Ce[r] = new ue(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(nt, Ee);
    Ce[r] = new ue(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ce[n] = new ue(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ce.xlinkHref = new ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ce[n] = new ue(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ge(n, r, o, s) {
    var p = Ce.hasOwnProperty(r) ? Ce[r] : null;
    (p !== null ? p.type !== 0 : s || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (te(r, o, p, s) && (o = null), s || p === null ? J(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : p.mustUseProperty ? n[p.propertyName] = o === null ? p.type === 3 ? !1 : "" : o : (r = p.attributeName, s = p.attributeNamespace, o === null ? n.removeAttribute(r) : (p = p.type, o = p === 3 || p === 4 && o === !0 ? "" : "" + o, s ? n.setAttributeNS(s, r, o) : n.setAttribute(r, o))));
  }
  var St = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ye = Symbol.for("react.element"), wt = Symbol.for("react.portal"), ot = Symbol.for("react.fragment"), Vt = Symbol.for("react.strict_mode"), Tn = Symbol.for("react.profiler"), Xt = Symbol.for("react.provider"), Ht = Symbol.for("react.context"), Rn = Symbol.for("react.forward_ref"), Xe = Symbol.for("react.suspense"), ht = Symbol.for("react.suspense_list"), $t = Symbol.for("react.memo"), Mt = Symbol.for("react.lazy"), Le = Symbol.for("react.offscreen"), ye = Symbol.iterator;
  function je(n) {
    return n === null || typeof n != "object" ? null : (n = ye && n[ye] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var xe = Object.assign, V;
  function le(n) {
    if (V === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        V = r && r[1] || "";
      }
    return `
` + V + n;
  }
  var Je = !1;
  function Ae(n, r) {
    if (!n || Je)
      return "";
    Je = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (Z) {
            var s = Z;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (Z) {
            s = Z;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (Z) {
          s = Z;
        }
        n();
      }
    } catch (Z) {
      if (Z && s && typeof Z.stack == "string") {
        for (var p = Z.stack.split(`
`), y = s.stack.split(`
`), R = p.length - 1, M = y.length - 1; 1 <= R && 0 <= M && p[R] !== y[M]; )
          M--;
        for (; 1 <= R && 0 <= M; R--, M--)
          if (p[R] !== y[M]) {
            if (R !== 1 || M !== 1)
              do
                if (R--, M--, 0 > M || p[R] !== y[M]) {
                  var j = `
` + p[R].replace(" at new ", " at ");
                  return n.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", n.displayName)), j;
                }
              while (1 <= R && 0 <= M);
            break;
          }
      }
    } finally {
      Je = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? le(n) : "";
  }
  function qe(n) {
    switch (n.tag) {
      case 5:
        return le(n.type);
      case 16:
        return le("Lazy");
      case 13:
        return le("Suspense");
      case 19:
        return le("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ae(n.type, !1), n;
      case 11:
        return n = Ae(n.type.render, !1), n;
      case 1:
        return n = Ae(n.type, !0), n;
      default:
        return "";
    }
  }
  function vt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ot:
        return "Fragment";
      case wt:
        return "Portal";
      case Tn:
        return "Profiler";
      case Vt:
        return "StrictMode";
      case Xe:
        return "Suspense";
      case ht:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Ht:
          return (n.displayName || "Context") + ".Consumer";
        case Xt:
          return (n._context.displayName || "Context") + ".Provider";
        case Rn:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case $t:
          return r = n.displayName || null, r !== null ? r : vt(n.type) || "Memo";
        case Mt:
          r = n._payload, n = n._init;
          try {
            return vt(n(r));
          } catch {
          }
      }
    return null;
  }
  function bt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return vt(r);
      case 8:
        return r === Vt ? "StrictMode" : "Mode";
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
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function Et(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Ct(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function rn(n) {
    var r = Ct(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), s = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var p = o.get, y = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return p.call(this);
      }, set: function(R) {
        s = "" + R, y.call(this, R);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(R) {
        s = "" + R;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function On(n) {
    n._valueTracker || (n._valueTracker = rn(n));
  }
  function or(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), s = "";
    return n && (s = Ct(n) ? n.checked ? "true" : "false" : n.value), n = s, n !== o ? (r.setValue(n), !0) : !1;
  }
  function vn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Wn(n, r) {
    var o = r.checked;
    return xe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Fn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, s = r.checked != null ? r.checked : r.defaultChecked;
    o = Et(r.value != null ? r.value : o), n._wrapperState = { initialChecked: s, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function sn(n, r) {
    r = r.checked, r != null && Ge(n, "checked", r, !1);
  }
  function cn(n, r) {
    sn(n, r);
    var o = Et(r.value), s = r.type;
    if (o != null)
      s === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (s === "submit" || s === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Nr(n, r.type, o) : r.hasOwnProperty("defaultValue") && Nr(n, r.type, Et(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Lr(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var s = r.type;
      if (!(s !== "submit" && s !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Nr(n, r, o) {
    (r !== "number" || vn(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var Un = Array.isArray;
  function ur(n, r, o, s) {
    if (n = n.options, r) {
      r = {};
      for (var p = 0; p < o.length; p++)
        r["$" + o[p]] = !0;
      for (o = 0; o < n.length; o++)
        p = r.hasOwnProperty("$" + n[o].value), n[o].selected !== p && (n[o].selected = p), p && s && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Et(o), r = null, p = 0; p < n.length; p++) {
        if (n[p].value === o) {
          n[p].selected = !0, s && (n[p].defaultSelected = !0);
          return;
        }
        r !== null || n[p].disabled || (r = n[p]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Mr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(d(91));
    return xe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Jn(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(d(92));
        if (Un(o)) {
          if (1 < o.length)
            throw Error(d(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: Et(o) };
  }
  function sr(n, r) {
    var o = Et(r.value), s = Et(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), s != null && (n.defaultValue = "" + s);
  }
  function ln(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function cr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function gn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? cr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var bn, Bi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, s, p) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, s, p);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (bn = bn || document.createElement("div"), bn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = bn.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function b(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var m = {
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
    strokeWidth: !0
  }, g = ["Webkit", "ms", "Moz", "O"];
  Object.keys(m).forEach(function(n) {
    g.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), m[r] = m[n];
    });
  });
  function k(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || m.hasOwnProperty(n) && m[n] ? ("" + r).trim() : r + "px";
  }
  function z(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var s = o.indexOf("--") === 0, p = k(o, r[o], s);
        o === "float" && (o = "cssFloat"), s ? n.setProperty(o, p) : n[o] = p;
      }
  }
  var $ = xe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ne(n, r) {
    if (r) {
      if ($[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(d(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(d(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(d(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(d(62));
    }
  }
  function Be(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
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
  var _t = null;
  function Ze(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Ot = null, We = null, Zt = null;
  function fa(n) {
    if (n = Us(n)) {
      if (typeof Ot != "function")
        throw Error(d(280));
      var r = n.stateNode;
      r && (r = Ke(r), Ot(n.stateNode, n.type, r));
    }
  }
  function ji(n) {
    We ? Zt ? Zt.push(n) : Zt = [n] : We = n;
  }
  function xl() {
    if (We) {
      var n = We, r = Zt;
      if (Zt = We = null, fa(n), r)
        for (n = 0; n < r.length; n++)
          fa(r[n]);
    }
  }
  function ho(n, r) {
    return n(r);
  }
  function iu() {
  }
  var Wa = !1;
  function wl(n, r, o) {
    if (Wa)
      return n(r, o);
    Wa = !0;
    try {
      return ho(n, r, o);
    } finally {
      Wa = !1, (We !== null || Zt !== null) && (iu(), xl());
    }
  }
  function wi(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var s = Ke(o);
    if (s === null)
      return null;
    o = s[r];
    e:
      switch (r) {
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
          (s = !s.disabled) || (n = n.type, s = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !s;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(d(231, r, typeof o));
    return o;
  }
  var wa = !1;
  if (A)
    try {
      var Ti = {};
      Object.defineProperty(Ti, "passive", { get: function() {
        wa = !0;
      } }), window.addEventListener("test", Ti, Ti), window.removeEventListener("test", Ti, Ti);
    } catch {
      wa = !1;
    }
  function da(n, r, o, s, p, y, R, M, j) {
    var Z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, Z);
    } catch (pe) {
      this.onError(pe);
    }
  }
  var Hr = !1, Ri = null, Ta = !1, Ra = null, U = { onError: function(n) {
    Hr = !0, Ri = n;
  } };
  function de(n, r, o, s, p, y, R, M, j) {
    Hr = !1, Ri = null, da.apply(U, arguments);
  }
  function me(n, r, o, s, p, y, R, M, j) {
    if (de.apply(this, arguments), Hr) {
      if (Hr) {
        var Z = Ri;
        Hr = !1, Ri = null;
      } else
        throw Error(d(198));
      Ta || (Ta = !0, Ra = Z);
    }
  }
  function Ie(n) {
    var r = n, o = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function At(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Ft(n) {
    if (Ie(n) !== n)
      throw Error(d(188));
  }
  function it(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ie(n), r === null)
        throw Error(d(188));
      return r !== n ? null : n;
    }
    for (var o = n, s = r; ; ) {
      var p = o.return;
      if (p === null)
        break;
      var y = p.alternate;
      if (y === null) {
        if (s = p.return, s !== null) {
          o = s;
          continue;
        }
        break;
      }
      if (p.child === y.child) {
        for (y = p.child; y; ) {
          if (y === o)
            return Ft(p), n;
          if (y === s)
            return Ft(p), r;
          y = y.sibling;
        }
        throw Error(d(188));
      }
      if (o.return !== s.return)
        o = p, s = y;
      else {
        for (var R = !1, M = p.child; M; ) {
          if (M === o) {
            R = !0, o = p, s = y;
            break;
          }
          if (M === s) {
            R = !0, s = p, o = y;
            break;
          }
          M = M.sibling;
        }
        if (!R) {
          for (M = y.child; M; ) {
            if (M === o) {
              R = !0, o = y, s = p;
              break;
            }
            if (M === s) {
              R = !0, s = y, o = p;
              break;
            }
            M = M.sibling;
          }
          if (!R)
            throw Error(d(189));
        }
      }
      if (o.alternate !== s)
        throw Error(d(190));
    }
    if (o.tag !== 3)
      throw Error(d(188));
    return o.stateNode.current === o ? n : r;
  }
  function Tt(n) {
    return n = it(n), n !== null ? Qn(n) : null;
  }
  function Qn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Qn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var fn = f.unstable_scheduleCallback, Sn = f.unstable_cancelCallback, Fr = f.unstable_shouldYield, ba = f.unstable_requestPaint, Yt = f.unstable_now, fr = f.unstable_getCurrentPriorityLevel, Ir = f.unstable_ImmediatePriority, Rt = f.unstable_UserBlockingPriority, Pi = f.unstable_NormalPriority, Tl = f.unstable_LowPriority, au = f.unstable_IdlePriority, Rl = null, ri = null;
  function Ss(n) {
    if (ri && typeof ri.onCommitFiberRoot == "function")
      try {
        ri.onCommitFiberRoot(Rl, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Vr = Math.clz32 ? Math.clz32 : kc, Es = Math.log, Cs = Math.LN2;
  function kc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Es(n) / Cs | 0) | 0;
  }
  var lu = 64, bl = 4194304;
  function pa(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function $r(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var s = 0, p = n.suspendedLanes, y = n.pingedLanes, R = o & 268435455;
    if (R !== 0) {
      var M = R & ~p;
      M !== 0 ? s = pa(M) : (y &= R, y !== 0 && (s = pa(y)));
    } else
      R = o & ~p, R !== 0 ? s = pa(R) : y !== 0 && (s = pa(y));
    if (s === 0)
      return 0;
    if (r !== 0 && r !== s && !(r & p) && (p = s & -s, y = r & -r, p >= y || p === 16 && (y & 4194240) !== 0))
      return r;
    if (s & 4 && (s |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= s; 0 < r; )
        o = 31 - Vr(r), p = 1 << o, s |= n[o], r &= ~p;
    return s;
  }
  function _l(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function kl(n, r) {
    for (var o = n.suspendedLanes, s = n.pingedLanes, p = n.expirationTimes, y = n.pendingLanes; 0 < y; ) {
      var R = 31 - Vr(y), M = 1 << R, j = p[R];
      j === -1 ? (!(M & o) || M & s) && (p[R] = _l(M, r)) : j <= r && (n.expiredLanes |= M), y &= ~M;
    }
  }
  function Dl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ou() {
    var n = lu;
    return lu <<= 1, !(lu & 4194240) && (lu = 64), n;
  }
  function uu(n) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function Qa(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Vr(r), n[r] = o;
  }
  function kd(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var s = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var p = 31 - Vr(o), y = 1 << p;
      r[p] = 0, s[p] = -1, n[p] = -1, o &= ~y;
    }
  }
  function _a(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var s = 31 - Vr(o), p = 1 << s;
      p & r | n[s] & r && (n[s] |= r), o &= ~p;
    }
  }
  var Wt = 0;
  function su(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var vo, cu, Ut, fu, du, dt = !1, mo = [], An = null, ii = null, Yr = null, Ol = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Map(), en = [], Dc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ai(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        An = null;
        break;
      case "dragenter":
      case "dragleave":
        ii = null;
        break;
      case "mouseover":
      case "mouseout":
        Yr = null;
        break;
      case "pointerover":
      case "pointerout":
        Ol.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zn.delete(r.pointerId);
    }
  }
  function dr(n, r, o, s, p, y) {
    return n === null || n.nativeEvent !== y ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: s, nativeEvent: y, targetContainers: [p] }, r !== null && (r = Us(r), r !== null && cu(r)), n) : (n.eventSystemFlags |= s, r = n.targetContainers, p !== null && r.indexOf(p) === -1 && r.push(p), n);
  }
  function ka(n, r, o, s, p) {
    switch (r) {
      case "focusin":
        return An = dr(An, n, r, o, s, p), !0;
      case "dragenter":
        return ii = dr(ii, n, r, o, s, p), !0;
      case "mouseover":
        return Yr = dr(Yr, n, r, o, s, p), !0;
      case "pointerover":
        var y = p.pointerId;
        return Ol.set(y, dr(Ol.get(y) || null, n, r, o, s, p)), !0;
      case "gotpointercapture":
        return y = p.pointerId, zn.set(y, dr(zn.get(y) || null, n, r, o, s, p)), !0;
    }
    return !1;
  }
  function Oc(n) {
    var r = $i(n.target);
    if (r !== null) {
      var o = Ie(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = At(o), r !== null) {
            n.blockedOn = r, du(n.priority, function() {
              Ut(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Ga(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = hu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var s = new o.constructor(o.type, o);
        _t = s, o.target.dispatchEvent(s), _t = null;
      } else
        return r = Us(o), r !== null && cu(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Al(n, r, o) {
    Ga(n) && o.delete(r);
  }
  function Ac() {
    dt = !1, An !== null && Ga(An) && (An = null), ii !== null && Ga(ii) && (ii = null), Yr !== null && Ga(Yr) && (Yr = null), Ol.forEach(Al), zn.forEach(Al);
  }
  function Hi(n, r) {
    n.blockedOn === r && (n.blockedOn = null, dt || (dt = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, Ac)));
  }
  function Ll(n) {
    function r(p) {
      return Hi(p, n);
    }
    if (0 < mo.length) {
      Hi(mo[0], n);
      for (var o = 1; o < mo.length; o++) {
        var s = mo[o];
        s.blockedOn === n && (s.blockedOn = null);
      }
    }
    for (An !== null && Hi(An, n), ii !== null && Hi(ii, n), Yr !== null && Hi(Yr, n), Ol.forEach(r), zn.forEach(r), o = 0; o < en.length; o++)
      s = en[o], s.blockedOn === n && (s.blockedOn = null);
    for (; 0 < en.length && (o = en[0], o.blockedOn === null); )
      Oc(o), o.blockedOn === null && en.shift();
  }
  var qa = St.ReactCurrentBatchConfig, Ii = !0;
  function pu(n, r, o, s) {
    var p = Wt, y = qa.transition;
    qa.transition = null;
    try {
      Wt = 1, Ml(n, r, o, s);
    } finally {
      Wt = p, qa.transition = y;
    }
  }
  function Nl(n, r, o, s) {
    var p = Wt, y = qa.transition;
    qa.transition = null;
    try {
      Wt = 4, Ml(n, r, o, s);
    } finally {
      Wt = p, qa.transition = y;
    }
  }
  function Ml(n, r, o, s) {
    if (Ii) {
      var p = hu(n, r, o, s);
      if (p === null)
        Pc(n, r, s, yo, o), ai(n, s);
      else if (ka(p, n, r, o, s))
        s.stopPropagation();
      else if (ai(n, s), r & 4 && -1 < Dc.indexOf(n)) {
        for (; p !== null; ) {
          var y = Us(p);
          if (y !== null && vo(y), y = hu(n, r, o, s), y === null && Pc(n, r, s, yo, o), y === p)
            break;
          p = y;
        }
        p !== null && s.stopPropagation();
      } else
        Pc(n, r, s, null, o);
    }
  }
  var yo = null;
  function hu(n, r, o, s) {
    if (yo = null, n = Ze(s), n = $i(n), n !== null)
      if (r = Ie(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = At(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return yo = n, null;
  }
  function xs(n) {
    switch (n) {
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
        switch (fr()) {
          case Ir:
            return 1;
          case Rt:
            return 4;
          case Pi:
          case Tl:
            return 16;
          case au:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ha = null, T = null, F = null;
  function X() {
    if (F)
      return F;
    var n, r = T, o = r.length, s, p = "value" in ha ? ha.value : ha.textContent, y = p.length;
    for (n = 0; n < o && r[n] === p[n]; n++)
      ;
    var R = o - n;
    for (s = 1; s <= R && r[o - s] === p[y - s]; s++)
      ;
    return F = p.slice(n, 1 < s ? 1 - s : void 0);
  }
  function re(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ge() {
    return !0;
  }
  function at() {
    return !1;
  }
  function Re(n) {
    function r(o, s, p, y, R) {
      this._reactName = o, this._targetInst = p, this.type = s, this.nativeEvent = y, this.target = R, this.currentTarget = null;
      for (var M in n)
        n.hasOwnProperty(M) && (o = n[M], this[M] = o ? o(y) : y[M]);
      return this.isDefaultPrevented = (y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1) ? ge : at, this.isPropagationStopped = at, this;
    }
    return xe(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = ge);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = ge);
    }, persist: function() {
    }, isPersistent: ge }), r;
  }
  var rt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, kt = Re(rt), It = xe({}, rt, { view: 0, detail: 0 }), dn = Re(It), an, pn, mn, zt = xe({}, It, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Nd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== mn && (mn && n.type === "mousemove" ? (an = n.screenX - mn.screenX, pn = n.screenY - mn.screenY) : pn = an = 0, mn = n), an);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : pn;
  } }), Ka = Re(zt), vu = xe({}, zt, { dataTransfer: 0 }), ws = Re(vu), Dd = xe({}, It, { relatedTarget: 0 }), va = Re(Dd), Ts = xe({}, rt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Rs = Re(Ts), Od = xe({}, rt, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), qy = Re(Od), Ky = xe({}, rt, { data: 0 }), Ad = Re(Ky), Ld = {
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
    MozPrintableKey: "Unidentified"
  }, $h = {
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
    224: "Meta"
  }, Yh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Wh(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Yh[n]) ? !!r[n] : !1;
  }
  function Nd() {
    return Wh;
  }
  var Xa = xe({}, It, { key: function(n) {
    if (n.key) {
      var r = Ld[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = re(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? $h[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Nd, charCode: function(n) {
    return n.type === "keypress" ? re(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? re(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Xy = Re(Xa), Md = xe({}, zt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Lc = Re(Md), Fd = xe({}, It, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Nd }), Jy = Re(Fd), Nc = xe({}, rt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Qh = Re(Nc), li = xe({}, zt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ja = Re(li), Gn = [9, 13, 27, 32], ma = A && "CompositionEvent" in window, go = null;
  A && "documentMode" in document && (go = document.documentMode);
  var Mc = A && "TextEvent" in window && !go, Gh = A && (!ma || go && 8 < go && 11 >= go), mu = " ", qh = !1;
  function Kh(n, r) {
    switch (n) {
      case "keyup":
        return Gn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Fc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var yu = !1;
  function Zy(n, r) {
    switch (n) {
      case "compositionend":
        return Fc(r);
      case "keypress":
        return r.which !== 32 ? null : (qh = !0, mu);
      case "textInput":
        return n = r.data, n === mu && qh ? null : n;
      default:
        return null;
    }
  }
  function eg(n, r) {
    if (yu)
      return n === "compositionend" || !ma && Kh(n, r) ? (n = X(), F = T = ha = null, yu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Gh && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Xh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Jh(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Xh[n.type] : r === "textarea";
  }
  function Zh(n, r, o, s) {
    ji(s), r = Ns(r, "onChange"), 0 < r.length && (o = new kt("onChange", "change", null, o, s), n.push({ event: o, listeners: r }));
  }
  var bs = null, gu = null;
  function Su(n) {
    jc(n, 0);
  }
  function Eu(n) {
    var r = xu(n);
    if (or(r))
      return n;
  }
  function ev(n, r) {
    if (n === "change")
      return r;
  }
  var Ud = !1;
  if (A) {
    var zd;
    if (A) {
      var Bd = "oninput" in document;
      if (!Bd) {
        var tv = document.createElement("div");
        tv.setAttribute("oninput", "return;"), Bd = typeof tv.oninput == "function";
      }
      zd = Bd;
    } else
      zd = !1;
    Ud = zd && (!document.documentMode || 9 < document.documentMode);
  }
  function nv() {
    bs && (bs.detachEvent("onpropertychange", rv), gu = bs = null);
  }
  function rv(n) {
    if (n.propertyName === "value" && Eu(gu)) {
      var r = [];
      Zh(r, gu, n, Ze(n)), wl(Su, r);
    }
  }
  function tg(n, r, o) {
    n === "focusin" ? (nv(), bs = r, gu = o, bs.attachEvent("onpropertychange", rv)) : n === "focusout" && nv();
  }
  function ng(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Eu(gu);
  }
  function rg(n, r) {
    if (n === "click")
      return Eu(r);
  }
  function iv(n, r) {
    if (n === "input" || n === "change")
      return Eu(r);
  }
  function ig(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Vi = typeof Object.is == "function" ? Object.is : ig;
  function _s(n, r) {
    if (Vi(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), s = Object.keys(r);
    if (o.length !== s.length)
      return !1;
    for (s = 0; s < o.length; s++) {
      var p = o[s];
      if (!L.call(r, p) || !Vi(n[p], r[p]))
        return !1;
    }
    return !0;
  }
  function av(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function lv(n, r) {
    var o = av(n);
    n = 0;
    for (var s; o; ) {
      if (o.nodeType === 3) {
        if (s = n + o.textContent.length, n <= r && s >= r)
          return { node: o, offset: r - n };
        n = s;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = av(o);
    }
  }
  function ov(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? ov(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Uc() {
    for (var n = window, r = vn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = vn(n.document);
    }
    return r;
  }
  function Za(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function zc(n) {
    var r = Uc(), o = n.focusedElem, s = n.selectionRange;
    if (r !== o && o && o.ownerDocument && ov(o.ownerDocument.documentElement, o)) {
      if (s !== null && Za(o)) {
        if (r = s.start, n = s.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var p = o.textContent.length, y = Math.min(s.start, p);
          s = s.end === void 0 ? y : Math.min(s.end, p), !n.extend && y > s && (p = s, s = y, y = p), p = lv(o, y);
          var R = lv(
            o,
            s
          );
          p && R && (n.rangeCount !== 1 || n.anchorNode !== p.node || n.anchorOffset !== p.offset || n.focusNode !== R.node || n.focusOffset !== R.offset) && (r = r.createRange(), r.setStart(p.node, p.offset), n.removeAllRanges(), y > s ? (n.addRange(r), n.extend(R.node, R.offset)) : (r.setEnd(R.node, R.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var uv = A && "documentMode" in document && 11 >= document.documentMode, ya = null, jd = null, ks = null, Pd = !1;
  function sv(n, r, o) {
    var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Pd || ya == null || ya !== vn(s) || (s = ya, "selectionStart" in s && Za(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), ks && _s(ks, s) || (ks = s, s = Ns(jd, "onSelect"), 0 < s.length && (r = new kt("onSelect", "select", null, r, o), n.push({ event: r, listeners: s }), r.target = ya)));
  }
  function Bc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var So = { animationend: Bc("Animation", "AnimationEnd"), animationiteration: Bc("Animation", "AnimationIteration"), animationstart: Bc("Animation", "AnimationStart"), transitionend: Bc("Transition", "TransitionEnd") }, Hd = {}, Id = {};
  A && (Id = document.createElement("div").style, "AnimationEvent" in window || (delete So.animationend.animation, delete So.animationiteration.animation, delete So.animationstart.animation), "TransitionEvent" in window || delete So.transitionend.transition);
  function pr(n) {
    if (Hd[n])
      return Hd[n];
    if (!So[n])
      return n;
    var r = So[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in Id)
        return Hd[n] = r[o];
    return n;
  }
  var Vd = pr("animationend"), cv = pr("animationiteration"), fv = pr("animationstart"), dv = pr("transitionend"), pv = /* @__PURE__ */ new Map(), hv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function el(n, r) {
    pv.set(n, r), w(r, [n]);
  }
  for (var Ds = 0; Ds < hv.length; Ds++) {
    var Eo = hv[Ds], ag = Eo.toLowerCase(), Os = Eo[0].toUpperCase() + Eo.slice(1);
    el(ag, "on" + Os);
  }
  el(Vd, "onAnimationEnd"), el(cv, "onAnimationIteration"), el(fv, "onAnimationStart"), el("dblclick", "onDoubleClick"), el("focusin", "onFocus"), el("focusout", "onBlur"), el(dv, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), w("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), w("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), w("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), w("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var As = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lg = new Set("cancel close invalid load scroll toggle".split(" ").concat(As));
  function vv(n, r, o) {
    var s = n.type || "unknown-event";
    n.currentTarget = o, me(s, r, void 0, n), n.currentTarget = null;
  }
  function jc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var s = n[o], p = s.event;
      s = s.listeners;
      e: {
        var y = void 0;
        if (r)
          for (var R = s.length - 1; 0 <= R; R--) {
            var M = s[R], j = M.instance, Z = M.currentTarget;
            if (M = M.listener, j !== y && p.isPropagationStopped())
              break e;
            vv(p, M, Z), y = j;
          }
        else
          for (R = 0; R < s.length; R++) {
            if (M = s[R], j = M.instance, Z = M.currentTarget, M = M.listener, j !== y && p.isPropagationStopped())
              break e;
            vv(p, M, Z), y = j;
          }
      }
    }
    if (Ta)
      throw n = Ra, Ta = !1, Ra = null, n;
  }
  function hn(n, r) {
    var o = r[Kd];
    o === void 0 && (o = r[Kd] = /* @__PURE__ */ new Set());
    var s = n + "__bubble";
    o.has(s) || (mv(r, n, 2, !1), o.add(s));
  }
  function Fl(n, r, o) {
    var s = 0;
    r && (s |= 4), mv(o, n, s, r);
  }
  var tl = "_reactListening" + Math.random().toString(36).slice(2);
  function Cu(n) {
    if (!n[tl]) {
      n[tl] = !0, S.forEach(function(o) {
        o !== "selectionchange" && (lg.has(o) || Fl(o, !1, n), Fl(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[tl] || (r[tl] = !0, Fl("selectionchange", !1, r));
    }
  }
  function mv(n, r, o, s) {
    switch (xs(r)) {
      case 1:
        var p = pu;
        break;
      case 4:
        p = Nl;
        break;
      default:
        p = Ml;
    }
    o = p.bind(null, r, o, n), p = void 0, !wa || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (p = !0), s ? p !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: p }) : n.addEventListener(r, o, !0) : p !== void 0 ? n.addEventListener(r, o, { passive: p }) : n.addEventListener(r, o, !1);
  }
  function Pc(n, r, o, s, p) {
    var y = s;
    if (!(r & 1) && !(r & 2) && s !== null)
      e:
        for (; ; ) {
          if (s === null)
            return;
          var R = s.tag;
          if (R === 3 || R === 4) {
            var M = s.stateNode.containerInfo;
            if (M === p || M.nodeType === 8 && M.parentNode === p)
              break;
            if (R === 4)
              for (R = s.return; R !== null; ) {
                var j = R.tag;
                if ((j === 3 || j === 4) && (j = R.stateNode.containerInfo, j === p || j.nodeType === 8 && j.parentNode === p))
                  return;
                R = R.return;
              }
            for (; M !== null; ) {
              if (R = $i(M), R === null)
                return;
              if (j = R.tag, j === 5 || j === 6) {
                s = y = R;
                continue e;
              }
              M = M.parentNode;
            }
          }
          s = s.return;
        }
    wl(function() {
      var Z = y, pe = Ze(o), he = [];
      e: {
        var fe = pv.get(n);
        if (fe !== void 0) {
          var ke = kt, Me = n;
          switch (n) {
            case "keypress":
              if (re(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              ke = Xy;
              break;
            case "focusin":
              Me = "focus", ke = va;
              break;
            case "focusout":
              Me = "blur", ke = va;
              break;
            case "beforeblur":
            case "afterblur":
              ke = va;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ke = Ka;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ke = ws;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ke = Jy;
              break;
            case Vd:
            case cv:
            case fv:
              ke = Rs;
              break;
            case dv:
              ke = Qh;
              break;
            case "scroll":
              ke = dn;
              break;
            case "wheel":
              ke = Ja;
              break;
            case "copy":
            case "cut":
            case "paste":
              ke = qy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ke = Lc;
          }
          var ze = (r & 4) !== 0, $n = !ze && n === "scroll", Y = ze ? fe !== null ? fe + "Capture" : null : fe;
          ze = [];
          for (var H = Z, G; H !== null; ) {
            G = H;
            var Se = G.stateNode;
            if (G.tag === 5 && Se !== null && (G = Se, Y !== null && (Se = wi(H, Y), Se != null && ze.push(Ls(H, Se, G)))), $n)
              break;
            H = H.return;
          }
          0 < ze.length && (fe = new ke(fe, Me, null, o, pe), he.push({ event: fe, listeners: ze }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (fe = n === "mouseover" || n === "pointerover", ke = n === "mouseout" || n === "pointerout", fe && o !== _t && (Me = o.relatedTarget || o.fromElement) && ($i(Me) || Me[nl]))
            break e;
          if ((ke || fe) && (fe = pe.window === pe ? pe : (fe = pe.ownerDocument) ? fe.defaultView || fe.parentWindow : window, ke ? (Me = o.relatedTarget || o.toElement, ke = Z, Me = Me ? $i(Me) : null, Me !== null && ($n = Ie(Me), Me !== $n || Me.tag !== 5 && Me.tag !== 6) && (Me = null)) : (ke = null, Me = Z), ke !== Me)) {
            if (ze = Ka, Se = "onMouseLeave", Y = "onMouseEnter", H = "mouse", (n === "pointerout" || n === "pointerover") && (ze = Lc, Se = "onPointerLeave", Y = "onPointerEnter", H = "pointer"), $n = ke == null ? fe : xu(ke), G = Me == null ? fe : xu(Me), fe = new ze(Se, H + "leave", ke, o, pe), fe.target = $n, fe.relatedTarget = G, Se = null, $i(pe) === Z && (ze = new ze(Y, H + "enter", Me, o, pe), ze.target = G, ze.relatedTarget = $n, Se = ze), $n = Se, ke && Me)
              t: {
                for (ze = ke, Y = Me, H = 0, G = ze; G; G = Co(G))
                  H++;
                for (G = 0, Se = Y; Se; Se = Co(Se))
                  G++;
                for (; 0 < H - G; )
                  ze = Co(ze), H--;
                for (; 0 < G - H; )
                  Y = Co(Y), G--;
                for (; H--; ) {
                  if (ze === Y || Y !== null && ze === Y.alternate)
                    break t;
                  ze = Co(ze), Y = Co(Y);
                }
                ze = null;
              }
            else
              ze = null;
            ke !== null && $d(he, fe, ke, ze, !1), Me !== null && $n !== null && $d(he, $n, Me, ze, !0);
          }
        }
        e: {
          if (fe = Z ? xu(Z) : window, ke = fe.nodeName && fe.nodeName.toLowerCase(), ke === "select" || ke === "input" && fe.type === "file")
            var He = ev;
          else if (Jh(fe))
            if (Ud)
              He = iv;
            else {
              He = ng;
              var lt = tg;
            }
          else
            (ke = fe.nodeName) && ke.toLowerCase() === "input" && (fe.type === "checkbox" || fe.type === "radio") && (He = rg);
          if (He && (He = He(n, Z))) {
            Zh(he, He, o, pe);
            break e;
          }
          lt && lt(n, fe, Z), n === "focusout" && (lt = fe._wrapperState) && lt.controlled && fe.type === "number" && Nr(fe, "number", fe.value);
        }
        switch (lt = Z ? xu(Z) : window, n) {
          case "focusin":
            (Jh(lt) || lt.contentEditable === "true") && (ya = lt, jd = Z, ks = null);
            break;
          case "focusout":
            ks = jd = ya = null;
            break;
          case "mousedown":
            Pd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Pd = !1, sv(he, o, pe);
            break;
          case "selectionchange":
            if (uv)
              break;
          case "keydown":
          case "keyup":
            sv(he, o, pe);
        }
        var Fe;
        if (ma)
          e: {
            switch (n) {
              case "compositionstart":
                var ut = "onCompositionStart";
                break e;
              case "compositionend":
                ut = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ut = "onCompositionUpdate";
                break e;
            }
            ut = void 0;
          }
        else
          yu ? Kh(n, o) && (ut = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (ut = "onCompositionStart");
        ut && (Gh && o.locale !== "ko" && (yu || ut !== "onCompositionStart" ? ut === "onCompositionEnd" && yu && (Fe = X()) : (ha = pe, T = "value" in ha ? ha.value : ha.textContent, yu = !0)), lt = Ns(Z, ut), 0 < lt.length && (ut = new Ad(ut, n, null, o, pe), he.push({ event: ut, listeners: lt }), Fe ? ut.data = Fe : (Fe = Fc(o), Fe !== null && (ut.data = Fe)))), (Fe = Mc ? Zy(n, o) : eg(n, o)) && (Z = Ns(Z, "onBeforeInput"), 0 < Z.length && (pe = new Ad("onBeforeInput", "beforeinput", null, o, pe), he.push({ event: pe, listeners: Z }), pe.data = Fe));
      }
      jc(he, r);
    });
  }
  function Ls(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function Ns(n, r) {
    for (var o = r + "Capture", s = []; n !== null; ) {
      var p = n, y = p.stateNode;
      p.tag === 5 && y !== null && (p = y, y = wi(n, o), y != null && s.unshift(Ls(n, y, p)), y = wi(n, r), y != null && s.push(Ls(n, y, p))), n = n.return;
    }
    return s;
  }
  function Co(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function $d(n, r, o, s, p) {
    for (var y = r._reactName, R = []; o !== null && o !== s; ) {
      var M = o, j = M.alternate, Z = M.stateNode;
      if (j !== null && j === s)
        break;
      M.tag === 5 && Z !== null && (M = Z, p ? (j = wi(o, y), j != null && R.unshift(Ls(o, j, M))) : p || (j = wi(o, y), j != null && R.push(Ls(o, j, M)))), o = o.return;
    }
    R.length !== 0 && n.push({ event: r, listeners: R });
  }
  var Yd = /\r\n?/g, og = /\u0000|\uFFFD/g;
  function Wd(n) {
    return (typeof n == "string" ? n : "" + n).replace(Yd, `
`).replace(og, "");
  }
  function Hc(n, r, o) {
    if (r = Wd(r), Wd(n) !== r && o)
      throw Error(d(425));
  }
  function Ic() {
  }
  var Qd = null, xo = null;
  function Ms(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var wo = typeof setTimeout == "function" ? setTimeout : void 0, yv = typeof clearTimeout == "function" ? clearTimeout : void 0, Gd = typeof Promise == "function" ? Promise : void 0, qd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gd < "u" ? function(n) {
    return Gd.resolve(null).then(n).catch(ug);
  } : wo;
  function ug(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ul(n, r) {
    var o = r, s = 0;
    do {
      var p = o.nextSibling;
      if (n.removeChild(o), p && p.nodeType === 8)
        if (o = p.data, o === "/$") {
          if (s === 0) {
            n.removeChild(p), Ll(r);
            return;
          }
          s--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || s++;
      o = p;
    } while (o);
    Ll(r);
  }
  function ga(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function Fs(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var zl = Math.random().toString(36).slice(2), Da = "__reactFiber$" + zl, To = "__reactProps$" + zl, nl = "__reactContainer$" + zl, Kd = "__reactEvents$" + zl, sg = "__reactListeners$" + zl, Xd = "__reactHandles$" + zl;
  function $i(n) {
    var r = n[Da];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[nl] || o[Da]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = Fs(n); n !== null; ) {
            if (o = n[Da])
              return o;
            n = Fs(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function Us(n) {
    return n = n[Da] || n[nl], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function xu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(d(33));
  }
  function Ke(n) {
    return n[To] || null;
  }
  var Bl = [], En = -1;
  function xt(n) {
    return { current: n };
  }
  function Jt(n) {
    0 > En || (n.current = Bl[En], Bl[En] = null, En--);
  }
  function tn(n, r) {
    En++, Bl[En] = n.current, n.current = r;
  }
  var Oa = {}, ct = xt(Oa), Bn = xt(!1), oi = Oa;
  function Yi(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return Oa;
    var s = n.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === r)
      return s.__reactInternalMemoizedMaskedChildContext;
    var p = {}, y;
    for (y in o)
      p[y] = r[y];
    return s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = p), p;
  }
  function _n(n) {
    return n = n.childContextTypes, n != null;
  }
  function Wi() {
    Jt(Bn), Jt(ct);
  }
  function jl(n, r, o) {
    if (ct.current !== Oa)
      throw Error(d(168));
    tn(ct, r), tn(Bn, o);
  }
  function zs(n, r, o) {
    var s = n.stateNode;
    if (r = r.childContextTypes, typeof s.getChildContext != "function")
      return o;
    s = s.getChildContext();
    for (var p in s)
      if (!(p in r))
        throw Error(d(108, bt(n) || "Unknown", p));
    return xe({}, o, s);
  }
  function Vc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Oa, oi = ct.current, tn(ct, n), tn(Bn, Bn.current), !0;
  }
  function gv(n, r, o) {
    var s = n.stateNode;
    if (!s)
      throw Error(d(169));
    o ? (n = zs(n, r, oi), s.__reactInternalMemoizedMergedChildContext = n, Jt(Bn), Jt(ct), tn(ct, n)) : Jt(Bn), tn(Bn, o);
  }
  var bi = null, hr = !1, Bs = !1;
  function Jd(n) {
    bi === null ? bi = [n] : bi.push(n);
  }
  function Zd(n) {
    hr = !0, Jd(n);
  }
  function ui() {
    if (!Bs && bi !== null) {
      Bs = !0;
      var n = 0, r = Wt;
      try {
        var o = bi;
        for (Wt = 1; n < o.length; n++) {
          var s = o[n];
          do
            s = s(!0);
          while (s !== null);
        }
        bi = null, hr = !1;
      } catch (p) {
        throw bi !== null && (bi = bi.slice(n + 1)), fn(Ir, ui), p;
      } finally {
        Wt = r, Bs = !1;
      }
    }
    return null;
  }
  var Pl = [], si = 0, Ro = null, wu = 0, ci = [], Ur = 0, Qi = null, Er = 1, rl = "";
  function _i(n, r) {
    Pl[si++] = wu, Pl[si++] = Ro, Ro = n, wu = r;
  }
  function ep(n, r, o) {
    ci[Ur++] = Er, ci[Ur++] = rl, ci[Ur++] = Qi, Qi = n;
    var s = Er;
    n = rl;
    var p = 32 - Vr(s) - 1;
    s &= ~(1 << p), o += 1;
    var y = 32 - Vr(r) + p;
    if (30 < y) {
      var R = p - p % 5;
      y = (s & (1 << R) - 1).toString(32), s >>= R, p -= R, Er = 1 << 32 - Vr(r) + p | o << p | s, rl = y + n;
    } else
      Er = 1 << y | o << p | s, rl = n;
  }
  function $c(n) {
    n.return !== null && (_i(n, 1), ep(n, 1, 0));
  }
  function tp(n) {
    for (; n === Ro; )
      Ro = Pl[--si], Pl[si] = null, wu = Pl[--si], Pl[si] = null;
    for (; n === Qi; )
      Qi = ci[--Ur], ci[Ur] = null, rl = ci[--Ur], ci[Ur] = null, Er = ci[--Ur], ci[Ur] = null;
  }
  var ki = null, fi = null, Cn = !1, Gi = null;
  function np(n, r) {
    var o = na(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Sv(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ki = n, fi = ga(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ki = n, fi = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = Qi !== null ? { id: Er, overflow: rl } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = na(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, ki = n, fi = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Yc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Wc(n) {
    if (Cn) {
      var r = fi;
      if (r) {
        var o = r;
        if (!Sv(n, r)) {
          if (Yc(n))
            throw Error(d(418));
          r = ga(o.nextSibling);
          var s = ki;
          r && Sv(n, r) ? np(s, o) : (n.flags = n.flags & -4097 | 2, Cn = !1, ki = n);
        }
      } else {
        if (Yc(n))
          throw Error(d(418));
        n.flags = n.flags & -4097 | 2, Cn = !1, ki = n;
      }
    }
  }
  function Ev(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ki = n;
  }
  function Qc(n) {
    if (n !== ki)
      return !1;
    if (!Cn)
      return Ev(n), Cn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Ms(n.type, n.memoizedProps)), r && (r = fi)) {
      if (Yc(n))
        throw Cv(), Error(d(418));
      for (; r; )
        np(n, r), r = ga(r.nextSibling);
    }
    if (Ev(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(d(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                fi = ga(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        fi = null;
      }
    } else
      fi = ki ? ga(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Cv() {
    for (var n = fi; n; )
      n = ga(n.nextSibling);
  }
  function Ln() {
    fi = ki = null, Cn = !1;
  }
  function rp(n) {
    Gi === null ? Gi = [n] : Gi.push(n);
  }
  var Gc = St.ReactCurrentBatchConfig;
  function bo(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(d(309));
          var s = o.stateNode;
        }
        if (!s)
          throw Error(d(147, n));
        var p = s, y = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === y ? r.ref : (r = function(R) {
          var M = p.refs;
          R === null ? delete M[y] : M[y] = R;
        }, r._stringRef = y, r);
      }
      if (typeof n != "string")
        throw Error(d(284));
      if (!o._owner)
        throw Error(d(290, n));
    }
    return n;
  }
  function Aa(n, r) {
    throw n = Object.prototype.toString.call(r), Error(d(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function xv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function qc(n) {
    function r(Y, H) {
      if (n) {
        var G = Y.deletions;
        G === null ? (Y.deletions = [H], Y.flags |= 16) : G.push(H);
      }
    }
    function o(Y, H) {
      if (!n)
        return null;
      for (; H !== null; )
        r(Y, H), H = H.sibling;
      return null;
    }
    function s(Y, H) {
      for (Y = /* @__PURE__ */ new Map(); H !== null; )
        H.key !== null ? Y.set(H.key, H) : Y.set(H.index, H), H = H.sibling;
      return Y;
    }
    function p(Y, H) {
      return Y = Gl(Y, H), Y.index = 0, Y.sibling = null, Y;
    }
    function y(Y, H, G) {
      return Y.index = G, n ? (G = Y.alternate, G !== null ? (G = G.index, G < H ? (Y.flags |= 2, H) : G) : (Y.flags |= 2, H)) : (Y.flags |= 1048576, H);
    }
    function R(Y) {
      return n && Y.alternate === null && (Y.flags |= 2), Y;
    }
    function M(Y, H, G, Se) {
      return H === null || H.tag !== 6 ? (H = zf(G, Y.mode, Se), H.return = Y, H) : (H = p(H, G), H.return = Y, H);
    }
    function j(Y, H, G, Se) {
      var He = G.type;
      return He === ot ? pe(Y, H, G.props.children, Se, G.key) : H !== null && (H.elementType === He || typeof He == "object" && He !== null && He.$$typeof === Mt && xv(He) === H.type) ? (Se = p(H, G.props), Se.ref = bo(Y, H, G), Se.return = Y, Se) : (Se = Ff(G.type, G.key, G.props, null, Y.mode, Se), Se.ref = bo(Y, H, G), Se.return = Y, Se);
    }
    function Z(Y, H, G, Se) {
      return H === null || H.tag !== 4 || H.stateNode.containerInfo !== G.containerInfo || H.stateNode.implementation !== G.implementation ? (H = nc(G, Y.mode, Se), H.return = Y, H) : (H = p(H, G.children || []), H.return = Y, H);
    }
    function pe(Y, H, G, Se, He) {
      return H === null || H.tag !== 7 ? (H = Ho(G, Y.mode, Se, He), H.return = Y, H) : (H = p(H, G), H.return = Y, H);
    }
    function he(Y, H, G) {
      if (typeof H == "string" && H !== "" || typeof H == "number")
        return H = zf("" + H, Y.mode, G), H.return = Y, H;
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case Ye:
            return G = Ff(H.type, H.key, H.props, null, Y.mode, G), G.ref = bo(Y, null, H), G.return = Y, G;
          case wt:
            return H = nc(H, Y.mode, G), H.return = Y, H;
          case Mt:
            var Se = H._init;
            return he(Y, Se(H._payload), G);
        }
        if (Un(H) || je(H))
          return H = Ho(H, Y.mode, G, null), H.return = Y, H;
        Aa(Y, H);
      }
      return null;
    }
    function fe(Y, H, G, Se) {
      var He = H !== null ? H.key : null;
      if (typeof G == "string" && G !== "" || typeof G == "number")
        return He !== null ? null : M(Y, H, "" + G, Se);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case Ye:
            return G.key === He ? j(Y, H, G, Se) : null;
          case wt:
            return G.key === He ? Z(Y, H, G, Se) : null;
          case Mt:
            return He = G._init, fe(
              Y,
              H,
              He(G._payload),
              Se
            );
        }
        if (Un(G) || je(G))
          return He !== null ? null : pe(Y, H, G, Se, null);
        Aa(Y, G);
      }
      return null;
    }
    function ke(Y, H, G, Se, He) {
      if (typeof Se == "string" && Se !== "" || typeof Se == "number")
        return Y = Y.get(G) || null, M(H, Y, "" + Se, He);
      if (typeof Se == "object" && Se !== null) {
        switch (Se.$$typeof) {
          case Ye:
            return Y = Y.get(Se.key === null ? G : Se.key) || null, j(H, Y, Se, He);
          case wt:
            return Y = Y.get(Se.key === null ? G : Se.key) || null, Z(H, Y, Se, He);
          case Mt:
            var lt = Se._init;
            return ke(Y, H, G, lt(Se._payload), He);
        }
        if (Un(Se) || je(Se))
          return Y = Y.get(G) || null, pe(H, Y, Se, He, null);
        Aa(H, Se);
      }
      return null;
    }
    function Me(Y, H, G, Se) {
      for (var He = null, lt = null, Fe = H, ut = H = 0, rr = null; Fe !== null && ut < G.length; ut++) {
        Fe.index > ut ? (rr = Fe, Fe = null) : rr = Fe.sibling;
        var Qt = fe(Y, Fe, G[ut], Se);
        if (Qt === null) {
          Fe === null && (Fe = rr);
          break;
        }
        n && Fe && Qt.alternate === null && r(Y, Fe), H = y(Qt, H, ut), lt === null ? He = Qt : lt.sibling = Qt, lt = Qt, Fe = rr;
      }
      if (ut === G.length)
        return o(Y, Fe), Cn && _i(Y, ut), He;
      if (Fe === null) {
        for (; ut < G.length; ut++)
          Fe = he(Y, G[ut], Se), Fe !== null && (H = y(Fe, H, ut), lt === null ? He = Fe : lt.sibling = Fe, lt = Fe);
        return Cn && _i(Y, ut), He;
      }
      for (Fe = s(Y, Fe); ut < G.length; ut++)
        rr = ke(Fe, Y, ut, G[ut], Se), rr !== null && (n && rr.alternate !== null && Fe.delete(rr.key === null ? ut : rr.key), H = y(rr, H, ut), lt === null ? He = rr : lt.sibling = rr, lt = rr);
      return n && Fe.forEach(function(cl) {
        return r(Y, cl);
      }), Cn && _i(Y, ut), He;
    }
    function ze(Y, H, G, Se) {
      var He = je(G);
      if (typeof He != "function")
        throw Error(d(150));
      if (G = He.call(G), G == null)
        throw Error(d(151));
      for (var lt = He = null, Fe = H, ut = H = 0, rr = null, Qt = G.next(); Fe !== null && !Qt.done; ut++, Qt = G.next()) {
        Fe.index > ut ? (rr = Fe, Fe = null) : rr = Fe.sibling;
        var cl = fe(Y, Fe, Qt.value, Se);
        if (cl === null) {
          Fe === null && (Fe = rr);
          break;
        }
        n && Fe && cl.alternate === null && r(Y, Fe), H = y(cl, H, ut), lt === null ? He = cl : lt.sibling = cl, lt = cl, Fe = rr;
      }
      if (Qt.done)
        return o(
          Y,
          Fe
        ), Cn && _i(Y, ut), He;
      if (Fe === null) {
        for (; !Qt.done; ut++, Qt = G.next())
          Qt = he(Y, Qt.value, Se), Qt !== null && (H = y(Qt, H, ut), lt === null ? He = Qt : lt.sibling = Qt, lt = Qt);
        return Cn && _i(Y, ut), He;
      }
      for (Fe = s(Y, Fe); !Qt.done; ut++, Qt = G.next())
        Qt = ke(Fe, Y, ut, Qt.value, Se), Qt !== null && (n && Qt.alternate !== null && Fe.delete(Qt.key === null ? ut : Qt.key), H = y(Qt, H, ut), lt === null ? He = Qt : lt.sibling = Qt, lt = Qt);
      return n && Fe.forEach(function(_g) {
        return r(Y, _g);
      }), Cn && _i(Y, ut), He;
    }
    function $n(Y, H, G, Se) {
      if (typeof G == "object" && G !== null && G.type === ot && G.key === null && (G = G.props.children), typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case Ye:
            e: {
              for (var He = G.key, lt = H; lt !== null; ) {
                if (lt.key === He) {
                  if (He = G.type, He === ot) {
                    if (lt.tag === 7) {
                      o(Y, lt.sibling), H = p(lt, G.props.children), H.return = Y, Y = H;
                      break e;
                    }
                  } else if (lt.elementType === He || typeof He == "object" && He !== null && He.$$typeof === Mt && xv(He) === lt.type) {
                    o(Y, lt.sibling), H = p(lt, G.props), H.ref = bo(Y, lt, G), H.return = Y, Y = H;
                    break e;
                  }
                  o(Y, lt);
                  break;
                } else
                  r(Y, lt);
                lt = lt.sibling;
              }
              G.type === ot ? (H = Ho(G.props.children, Y.mode, Se, G.key), H.return = Y, Y = H) : (Se = Ff(G.type, G.key, G.props, null, Y.mode, Se), Se.ref = bo(Y, H, G), Se.return = Y, Y = Se);
            }
            return R(Y);
          case wt:
            e: {
              for (lt = G.key; H !== null; ) {
                if (H.key === lt)
                  if (H.tag === 4 && H.stateNode.containerInfo === G.containerInfo && H.stateNode.implementation === G.implementation) {
                    o(Y, H.sibling), H = p(H, G.children || []), H.return = Y, Y = H;
                    break e;
                  } else {
                    o(Y, H);
                    break;
                  }
                else
                  r(Y, H);
                H = H.sibling;
              }
              H = nc(G, Y.mode, Se), H.return = Y, Y = H;
            }
            return R(Y);
          case Mt:
            return lt = G._init, $n(Y, H, lt(G._payload), Se);
        }
        if (Un(G))
          return Me(Y, H, G, Se);
        if (je(G))
          return ze(Y, H, G, Se);
        Aa(Y, G);
      }
      return typeof G == "string" && G !== "" || typeof G == "number" ? (G = "" + G, H !== null && H.tag === 6 ? (o(Y, H.sibling), H = p(H, G), H.return = Y, Y = H) : (o(Y, H), H = zf(G, Y.mode, Se), H.return = Y, Y = H), R(Y)) : o(Y, H);
    }
    return $n;
  }
  var Tu = qc(!0), wv = qc(!1), il = xt(null), Zn = null, we = null, qi = null;
  function Di() {
    qi = we = Zn = null;
  }
  function ip(n) {
    var r = il.current;
    Jt(il), n._currentValue = r;
  }
  function ap(n, r, o) {
    for (; n !== null; ) {
      var s = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, s !== null && (s.childLanes |= r)) : s !== null && (s.childLanes & r) !== r && (s.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function Ru(n, r) {
    Zn = n, qi = we = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (hi = !0), n.firstContext = null);
  }
  function Ki(n) {
    var r = n._currentValue;
    if (qi !== n)
      if (n = { context: n, memoizedValue: r, next: null }, we === null) {
        if (Zn === null)
          throw Error(d(308));
        we = n, Zn.dependencies = { lanes: 0, firstContext: n };
      } else
        we = we.next = n;
    return r;
  }
  var _o = null;
  function qn(n) {
    _o === null ? _o = [n] : _o.push(n);
  }
  function Tv(n, r, o, s) {
    var p = r.interleaved;
    return p === null ? (o.next = o, qn(r)) : (o.next = p.next, p.next = o), r.interleaved = o, al(n, s);
  }
  function al(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Hl = !1;
  function Kc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function bu(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function di(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Il(n, r, o) {
    var s = n.updateQueue;
    if (s === null)
      return null;
    if (s = s.shared, Lt & 2) {
      var p = s.pending;
      return p === null ? r.next = r : (r.next = p.next, p.next = r), s.pending = r, al(n, o);
    }
    return p = s.interleaved, p === null ? (r.next = r, qn(s)) : (r.next = p.next, p.next = r), s.interleaved = r, al(n, o);
  }
  function Xc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, _a(n, o);
    }
  }
  function Rv(n, r) {
    var o = n.updateQueue, s = n.alternate;
    if (s !== null && (s = s.updateQueue, o === s)) {
      var p = null, y = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var R = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          y === null ? p = y = R : y = y.next = R, o = o.next;
        } while (o !== null);
        y === null ? p = y = r : y = y.next = r;
      } else
        p = y = r;
      o = { baseState: s.baseState, firstBaseUpdate: p, lastBaseUpdate: y, shared: s.shared, effects: s.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function Jc(n, r, o, s) {
    var p = n.updateQueue;
    Hl = !1;
    var y = p.firstBaseUpdate, R = p.lastBaseUpdate, M = p.shared.pending;
    if (M !== null) {
      p.shared.pending = null;
      var j = M, Z = j.next;
      j.next = null, R === null ? y = Z : R.next = Z, R = j;
      var pe = n.alternate;
      pe !== null && (pe = pe.updateQueue, M = pe.lastBaseUpdate, M !== R && (M === null ? pe.firstBaseUpdate = Z : M.next = Z, pe.lastBaseUpdate = j));
    }
    if (y !== null) {
      var he = p.baseState;
      R = 0, pe = Z = j = null, M = y;
      do {
        var fe = M.lane, ke = M.eventTime;
        if ((s & fe) === fe) {
          pe !== null && (pe = pe.next = {
            eventTime: ke,
            lane: 0,
            tag: M.tag,
            payload: M.payload,
            callback: M.callback,
            next: null
          });
          e: {
            var Me = n, ze = M;
            switch (fe = r, ke = o, ze.tag) {
              case 1:
                if (Me = ze.payload, typeof Me == "function") {
                  he = Me.call(ke, he, fe);
                  break e;
                }
                he = Me;
                break e;
              case 3:
                Me.flags = Me.flags & -65537 | 128;
              case 0:
                if (Me = ze.payload, fe = typeof Me == "function" ? Me.call(ke, he, fe) : Me, fe == null)
                  break e;
                he = xe({}, he, fe);
                break e;
              case 2:
                Hl = !0;
            }
          }
          M.callback !== null && M.lane !== 0 && (n.flags |= 64, fe = p.effects, fe === null ? p.effects = [M] : fe.push(M));
        } else
          ke = { eventTime: ke, lane: fe, tag: M.tag, payload: M.payload, callback: M.callback, next: null }, pe === null ? (Z = pe = ke, j = he) : pe = pe.next = ke, R |= fe;
        if (M = M.next, M === null) {
          if (M = p.shared.pending, M === null)
            break;
          fe = M, M = fe.next, fe.next = null, p.lastBaseUpdate = fe, p.shared.pending = null;
        }
      } while (!0);
      if (pe === null && (j = he), p.baseState = j, p.firstBaseUpdate = Z, p.lastBaseUpdate = pe, r = p.shared.interleaved, r !== null) {
        p = r;
        do
          R |= p.lane, p = p.next;
        while (p !== r);
      } else
        y === null && (p.shared.lanes = 0);
      zo |= R, n.lanes = R, n.memoizedState = he;
    }
  }
  function bv(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var s = n[r], p = s.callback;
        if (p !== null) {
          if (s.callback = null, s = o, typeof p != "function")
            throw Error(d(191, p));
          p.call(s);
        }
      }
  }
  var js = {}, Sa = xt(js), _u = xt(js), Ps = xt(js);
  function ko(n) {
    if (n === js)
      throw Error(d(174));
    return n;
  }
  function lp(n, r) {
    switch (tn(Ps, r), tn(_u, n), tn(Sa, js), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : gn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = gn(r, n);
    }
    Jt(Sa), tn(Sa, r);
  }
  function ku() {
    Jt(Sa), Jt(_u), Jt(Ps);
  }
  function _v(n) {
    ko(Ps.current);
    var r = ko(Sa.current), o = gn(r, n.type);
    r !== o && (tn(_u, n), tn(Sa, o));
  }
  function op(n) {
    _u.current === n && (Jt(Sa), Jt(_u));
  }
  var kn = xt(0);
  function Zc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var ef = [];
  function up() {
    for (var n = 0; n < ef.length; n++)
      ef[n]._workInProgressVersionPrimary = null;
    ef.length = 0;
  }
  var tf = St.ReactCurrentDispatcher, Hs = St.ReactCurrentBatchConfig, Pe = 0, Ve = null, ft = null, Dt = null, Oi = !1, Du = !1, Is = 0, cg = 0;
  function zr() {
    throw Error(d(321));
  }
  function Vs(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!Vi(n[o], r[o]))
        return !1;
    return !0;
  }
  function ce(n, r, o, s, p, y) {
    if (Pe = y, Ve = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, tf.current = n === null || n.memoizedState === null ? fg : yn, n = o(s, p), Du) {
      y = 0;
      do {
        if (Du = !1, Is = 0, 25 <= y)
          throw Error(d(301));
        y += 1, Dt = ft = null, r.updateQueue = null, tf.current = yf, n = o(s, p);
      } while (Du);
    }
    if (tf.current = Br, r = ft !== null && ft.next !== null, Pe = 0, Dt = ft = Ve = null, Oi = !1, r)
      throw Error(d(300));
    return n;
  }
  function Kn() {
    var n = Is !== 0;
    return Is = 0, n;
  }
  function Qe() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Dt === null ? Ve.memoizedState = Dt = n : Dt = Dt.next = n, Dt;
  }
  function Cr() {
    if (ft === null) {
      var n = Ve.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = ft.next;
    var r = Dt === null ? Ve.memoizedState : Dt.next;
    if (r !== null)
      Dt = r, ft = n;
    else {
      if (n === null)
        throw Error(d(310));
      ft = n, n = { memoizedState: ft.memoizedState, baseState: ft.baseState, baseQueue: ft.baseQueue, queue: ft.queue, next: null }, Dt === null ? Ve.memoizedState = Dt = n : Dt = Dt.next = n;
    }
    return Dt;
  }
  function Ai(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ll(n) {
    var r = Cr(), o = r.queue;
    if (o === null)
      throw Error(d(311));
    o.lastRenderedReducer = n;
    var s = ft, p = s.baseQueue, y = o.pending;
    if (y !== null) {
      if (p !== null) {
        var R = p.next;
        p.next = y.next, y.next = R;
      }
      s.baseQueue = p = y, o.pending = null;
    }
    if (p !== null) {
      y = p.next, s = s.baseState;
      var M = R = null, j = null, Z = y;
      do {
        var pe = Z.lane;
        if ((Pe & pe) === pe)
          j !== null && (j = j.next = { lane: 0, action: Z.action, hasEagerState: Z.hasEagerState, eagerState: Z.eagerState, next: null }), s = Z.hasEagerState ? Z.eagerState : n(s, Z.action);
        else {
          var he = {
            lane: pe,
            action: Z.action,
            hasEagerState: Z.hasEagerState,
            eagerState: Z.eagerState,
            next: null
          };
          j === null ? (M = j = he, R = s) : j = j.next = he, Ve.lanes |= pe, zo |= pe;
        }
        Z = Z.next;
      } while (Z !== null && Z !== y);
      j === null ? R = s : j.next = M, Vi(s, r.memoizedState) || (hi = !0), r.memoizedState = s, r.baseState = R, r.baseQueue = j, o.lastRenderedState = s;
    }
    if (n = o.interleaved, n !== null) {
      p = n;
      do
        y = p.lane, Ve.lanes |= y, zo |= y, p = p.next;
      while (p !== n);
    } else
      p === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Xi(n) {
    var r = Cr(), o = r.queue;
    if (o === null)
      throw Error(d(311));
    o.lastRenderedReducer = n;
    var s = o.dispatch, p = o.pending, y = r.memoizedState;
    if (p !== null) {
      o.pending = null;
      var R = p = p.next;
      do
        y = n(y, R.action), R = R.next;
      while (R !== p);
      Vi(y, r.memoizedState) || (hi = !0), r.memoizedState = y, r.baseQueue === null && (r.baseState = y), o.lastRenderedState = y;
    }
    return [y, s];
  }
  function Ou() {
  }
  function Do(n, r) {
    var o = Ve, s = Cr(), p = r(), y = !Vi(s.memoizedState, p);
    if (y && (s.memoizedState = p, hi = !0), s = s.queue, $s(rf.bind(null, o, s, n), [n]), s.getSnapshot !== r || y || Dt !== null && Dt.memoizedState.tag & 1) {
      if (o.flags |= 2048, Oo(9, nf.bind(null, o, s, p, r), void 0, null), Pn === null)
        throw Error(d(349));
      Pe & 30 || Au(o, r, p);
    }
    return p;
  }
  function Au(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Ve.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ve.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function nf(n, r, o, s) {
    r.value = o, r.getSnapshot = s, af(r) && lf(n);
  }
  function rf(n, r, o) {
    return o(function() {
      af(r) && lf(n);
    });
  }
  function af(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !Vi(n, o);
    } catch {
      return !0;
    }
  }
  function lf(n) {
    var r = al(n, 1);
    r !== null && Nn(r, n, 1, -1);
  }
  function of(n) {
    var r = Qe();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ai, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ys.bind(null, Ve, n), [r.memoizedState, n];
  }
  function Oo(n, r, o, s) {
    return n = { tag: n, create: r, destroy: o, deps: s, next: null }, r = Ve.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ve.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (s = o.next, o.next = n, n.next = s, r.lastEffect = n)), n;
  }
  function uf() {
    return Cr().memoizedState;
  }
  function Lu(n, r, o, s) {
    var p = Qe();
    Ve.flags |= n, p.memoizedState = Oo(1 | r, o, void 0, s === void 0 ? null : s);
  }
  function Nu(n, r, o, s) {
    var p = Cr();
    s = s === void 0 ? null : s;
    var y = void 0;
    if (ft !== null) {
      var R = ft.memoizedState;
      if (y = R.destroy, s !== null && Vs(s, R.deps)) {
        p.memoizedState = Oo(r, o, y, s);
        return;
      }
    }
    Ve.flags |= n, p.memoizedState = Oo(1 | r, o, y, s);
  }
  function sf(n, r) {
    return Lu(8390656, 8, n, r);
  }
  function $s(n, r) {
    return Nu(2048, 8, n, r);
  }
  function cf(n, r) {
    return Nu(4, 2, n, r);
  }
  function ff(n, r) {
    return Nu(4, 4, n, r);
  }
  function df(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function pf(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Nu(4, 4, df.bind(null, r, n), o);
  }
  function Mu() {
  }
  function Ao(n, r) {
    var o = Cr();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && Vs(r, s[1]) ? s[0] : (o.memoizedState = [n, r], n);
  }
  function hf(n, r) {
    var o = Cr();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && Vs(r, s[1]) ? s[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function vf(n, r, o) {
    return Pe & 21 ? (Vi(o, r) || (o = ou(), Ve.lanes |= o, zo |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, hi = !0), n.memoizedState = o);
  }
  function sp(n, r) {
    var o = Wt;
    Wt = o !== 0 && 4 > o ? o : 4, n(!0);
    var s = Hs.transition;
    Hs.transition = {};
    try {
      n(!1), r();
    } finally {
      Wt = o, Hs.transition = s;
    }
  }
  function mf() {
    return Cr().memoizedState;
  }
  function kv(n, r, o) {
    var s = sl(n);
    if (o = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null }, cp(n))
      Fu(r, o);
    else if (o = Tv(n, r, o, s), o !== null) {
      var p = yr();
      Nn(o, n, s, p), Vl(o, r, s);
    }
  }
  function Ys(n, r, o) {
    var s = sl(n), p = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (cp(n))
      Fu(r, p);
    else {
      var y = n.alternate;
      if (n.lanes === 0 && (y === null || y.lanes === 0) && (y = r.lastRenderedReducer, y !== null))
        try {
          var R = r.lastRenderedState, M = y(R, o);
          if (p.hasEagerState = !0, p.eagerState = M, Vi(M, R)) {
            var j = r.interleaved;
            j === null ? (p.next = p, qn(r)) : (p.next = j.next, j.next = p), r.interleaved = p;
            return;
          }
        } catch {
        } finally {
        }
      o = Tv(n, r, p, s), o !== null && (p = yr(), Nn(o, n, s, p), Vl(o, r, s));
    }
  }
  function cp(n) {
    var r = n.alternate;
    return n === Ve || r !== null && r === Ve;
  }
  function Fu(n, r) {
    Du = Oi = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function Vl(n, r, o) {
    if (o & 4194240) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, _a(n, o);
    }
  }
  var Br = { readContext: Ki, useCallback: zr, useContext: zr, useEffect: zr, useImperativeHandle: zr, useInsertionEffect: zr, useLayoutEffect: zr, useMemo: zr, useReducer: zr, useRef: zr, useState: zr, useDebugValue: zr, useDeferredValue: zr, useTransition: zr, useMutableSource: zr, useSyncExternalStore: zr, useId: zr, unstable_isNewReconciler: !1 }, fg = { readContext: Ki, useCallback: function(n, r) {
    return Qe().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ki, useEffect: sf, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Lu(
      4194308,
      4,
      df.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return Lu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Lu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Qe();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var s = Qe();
    return r = o !== void 0 ? o(r) : r, s.memoizedState = s.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, s.queue = n, n = n.dispatch = kv.bind(null, Ve, n), [s.memoizedState, n];
  }, useRef: function(n) {
    var r = Qe();
    return n = { current: n }, r.memoizedState = n;
  }, useState: of, useDebugValue: Mu, useDeferredValue: function(n) {
    return Qe().memoizedState = n;
  }, useTransition: function() {
    var n = of(!1), r = n[0];
    return n = sp.bind(null, n[1]), Qe().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var s = Ve, p = Qe();
    if (Cn) {
      if (o === void 0)
        throw Error(d(407));
      o = o();
    } else {
      if (o = r(), Pn === null)
        throw Error(d(349));
      Pe & 30 || Au(s, r, o);
    }
    p.memoizedState = o;
    var y = { value: o, getSnapshot: r };
    return p.queue = y, sf(rf.bind(
      null,
      s,
      y,
      n
    ), [n]), s.flags |= 2048, Oo(9, nf.bind(null, s, y, o, r), void 0, null), o;
  }, useId: function() {
    var n = Qe(), r = Pn.identifierPrefix;
    if (Cn) {
      var o = rl, s = Er;
      o = (s & ~(1 << 32 - Vr(s) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Is++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = cg++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, yn = {
    readContext: Ki,
    useCallback: Ao,
    useContext: Ki,
    useEffect: $s,
    useImperativeHandle: pf,
    useInsertionEffect: cf,
    useLayoutEffect: ff,
    useMemo: hf,
    useReducer: ll,
    useRef: uf,
    useState: function() {
      return ll(Ai);
    },
    useDebugValue: Mu,
    useDeferredValue: function(n) {
      var r = Cr();
      return vf(r, ft.memoizedState, n);
    },
    useTransition: function() {
      var n = ll(Ai)[0], r = Cr().memoizedState;
      return [n, r];
    },
    useMutableSource: Ou,
    useSyncExternalStore: Do,
    useId: mf,
    unstable_isNewReconciler: !1
  }, yf = { readContext: Ki, useCallback: Ao, useContext: Ki, useEffect: $s, useImperativeHandle: pf, useInsertionEffect: cf, useLayoutEffect: ff, useMemo: hf, useReducer: Xi, useRef: uf, useState: function() {
    return Xi(Ai);
  }, useDebugValue: Mu, useDeferredValue: function(n) {
    var r = Cr();
    return ft === null ? r.memoizedState = n : vf(r, ft.memoizedState, n);
  }, useTransition: function() {
    var n = Xi(Ai)[0], r = Cr().memoizedState;
    return [n, r];
  }, useMutableSource: Ou, useSyncExternalStore: Do, useId: mf, unstable_isNewReconciler: !1 };
  function pi(n, r) {
    if (n && n.defaultProps) {
      r = xe({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function Lo(n, r, o, s) {
    r = n.memoizedState, o = o(s, r), o = o == null ? r : xe({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var No = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ie(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var s = yr(), p = sl(n), y = di(s, p);
    y.payload = r, o != null && (y.callback = o), r = Il(n, y, p), r !== null && (Nn(r, n, p, s), Xc(r, n, p));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var s = yr(), p = sl(n), y = di(s, p);
    y.tag = 1, y.payload = r, o != null && (y.callback = o), r = Il(n, y, p), r !== null && (Nn(r, n, p, s), Xc(r, n, p));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = yr(), s = sl(n), p = di(o, s);
    p.tag = 2, r != null && (p.callback = r), r = Il(n, p, s), r !== null && (Nn(r, n, s, o), Xc(r, n, s));
  } };
  function Dv(n, r, o, s, p, y, R) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(s, y, R) : r.prototype && r.prototype.isPureReactComponent ? !_s(o, s) || !_s(p, y) : !0;
  }
  function Ov(n, r, o) {
    var s = !1, p = Oa, y = r.contextType;
    return typeof y == "object" && y !== null ? y = Ki(y) : (p = _n(r) ? oi : ct.current, s = r.contextTypes, y = (s = s != null) ? Yi(n, p) : Oa), r = new r(o, y), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = No, n.stateNode = r, r._reactInternals = n, s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = p, n.__reactInternalMemoizedMaskedChildContext = y), r;
  }
  function Av(n, r, o, s) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, s), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, s), r.state !== n && No.enqueueReplaceState(r, r.state, null);
  }
  function fp(n, r, o, s) {
    var p = n.stateNode;
    p.props = o, p.state = n.memoizedState, p.refs = {}, Kc(n);
    var y = r.contextType;
    typeof y == "object" && y !== null ? p.context = Ki(y) : (y = _n(r) ? oi : ct.current, p.context = Yi(n, y)), p.state = n.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (Lo(n, r, y, o), p.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (r = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), r !== p.state && No.enqueueReplaceState(p, p.state, null), Jc(n, o, p, s), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function $l(n, r) {
    try {
      var o = "", s = r;
      do
        o += qe(s), s = s.return;
      while (s);
      var p = o;
    } catch (y) {
      p = `
Error generating stack: ` + y.message + `
` + y.stack;
    }
    return { value: n, source: r, stack: p, digest: null };
  }
  function dp(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function Ws(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Lv = typeof WeakMap == "function" ? WeakMap : Map;
  function Nv(n, r, o) {
    o = di(-1, o), o.tag = 3, o.payload = { element: null };
    var s = r.value;
    return o.callback = function() {
      Df || (Df = !0, Cp = s), Ws(n, r);
    }, o;
  }
  function Mv(n, r, o) {
    o = di(-1, o), o.tag = 3;
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var p = r.value;
      o.payload = function() {
        return s(p);
      }, o.callback = function() {
        Ws(n, r);
      };
    }
    var y = n.stateNode;
    return y !== null && typeof y.componentDidCatch == "function" && (o.callback = function() {
      Ws(n, r), typeof s != "function" && (ea === null ? ea = /* @__PURE__ */ new Set([this]) : ea.add(this));
      var R = r.stack;
      this.componentDidCatch(r.value, { componentStack: R !== null ? R : "" });
    }), o;
  }
  function Qs(n, r, o) {
    var s = n.pingCache;
    if (s === null) {
      s = n.pingCache = new Lv();
      var p = /* @__PURE__ */ new Set();
      s.set(r, p);
    } else
      p = s.get(r), p === void 0 && (p = /* @__PURE__ */ new Set(), s.set(r, p));
    p.has(o) || (p.add(o), n = Cg.bind(null, n, r, o), r.then(n, n));
  }
  function Fv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function pp(n, r, o, s, p) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = p, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = di(-1, 1), r.tag = 2, Il(o, r, 1))), o.lanes |= 1), n);
  }
  var Uv = St.ReactCurrentOwner, hi = !1;
  function In(n, r, o, s) {
    r.child = n === null ? wv(r, null, o, s) : Tu(r, n.child, o, s);
  }
  function Uu(n, r, o, s, p) {
    o = o.render;
    var y = r.ref;
    return Ru(r, p), s = ce(n, r, o, s, y, p), o = Kn(), n !== null && !hi ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, Vn(n, r, p)) : (Cn && o && $c(r), r.flags |= 1, In(n, r, s, p), r.child);
  }
  function Yl(n, r, o, s, p) {
    if (n === null) {
      var y = o.type;
      return typeof y == "function" && !bp(y) && y.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = y, gf(n, r, y, s, p)) : (n = Ff(o.type, null, s, r, r.mode, p), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (y = n.child, !(n.lanes & p)) {
      var R = y.memoizedProps;
      if (o = o.compare, o = o !== null ? o : _s, o(R, s) && n.ref === r.ref)
        return Vn(n, r, p);
    }
    return r.flags |= 1, n = Gl(y, s), n.ref = r.ref, n.return = r, r.child = n;
  }
  function gf(n, r, o, s, p) {
    if (n !== null) {
      var y = n.memoizedProps;
      if (_s(y, s) && n.ref === r.ref)
        if (hi = !1, r.pendingProps = s = y, (n.lanes & p) !== 0)
          n.flags & 131072 && (hi = !0);
        else
          return r.lanes = n.lanes, Vn(n, r, p);
    }
    return yt(n, r, o, s, p);
  }
  function vi(n, r, o) {
    var s = r.pendingProps, p = s.children, y = n !== null ? n.memoizedState : null;
    if (s.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, tn(Wu, mi), mi |= o;
      else {
        if (!(o & 1073741824))
          return n = y !== null ? y.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, tn(Wu, mi), mi |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = y !== null ? y.baseLanes : o, tn(Wu, mi), mi |= s;
      }
    else
      y !== null ? (s = y.baseLanes | o, r.memoizedState = null) : s = o, tn(Wu, mi), mi |= s;
    return In(n, r, p, o), r.child;
  }
  function Mo(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function yt(n, r, o, s, p) {
    var y = _n(o) ? oi : ct.current;
    return y = Yi(r, y), Ru(r, p), o = ce(n, r, o, s, y, p), s = Kn(), n !== null && !hi ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, Vn(n, r, p)) : (Cn && s && $c(r), r.flags |= 1, In(n, r, o, p), r.child);
  }
  function Gs(n, r, o, s, p) {
    if (_n(o)) {
      var y = !0;
      Vc(r);
    } else
      y = !1;
    if (Ru(r, p), r.stateNode === null)
      Ks(n, r), Ov(r, o, s), fp(r, o, s, p), s = !0;
    else if (n === null) {
      var R = r.stateNode, M = r.memoizedProps;
      R.props = M;
      var j = R.context, Z = o.contextType;
      typeof Z == "object" && Z !== null ? Z = Ki(Z) : (Z = _n(o) ? oi : ct.current, Z = Yi(r, Z));
      var pe = o.getDerivedStateFromProps, he = typeof pe == "function" || typeof R.getSnapshotBeforeUpdate == "function";
      he || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (M !== s || j !== Z) && Av(r, R, s, Z), Hl = !1;
      var fe = r.memoizedState;
      R.state = fe, Jc(r, s, R, p), j = r.memoizedState, M !== s || fe !== j || Bn.current || Hl ? (typeof pe == "function" && (Lo(r, o, pe, s), j = r.memoizedState), (M = Hl || Dv(r, o, M, s, fe, j, Z)) ? (he || typeof R.UNSAFE_componentWillMount != "function" && typeof R.componentWillMount != "function" || (typeof R.componentWillMount == "function" && R.componentWillMount(), typeof R.UNSAFE_componentWillMount == "function" && R.UNSAFE_componentWillMount()), typeof R.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof R.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = s, r.memoizedState = j), R.props = s, R.state = j, R.context = Z, s = M) : (typeof R.componentDidMount == "function" && (r.flags |= 4194308), s = !1);
    } else {
      R = r.stateNode, bu(n, r), M = r.memoizedProps, Z = r.type === r.elementType ? M : pi(r.type, M), R.props = Z, he = r.pendingProps, fe = R.context, j = o.contextType, typeof j == "object" && j !== null ? j = Ki(j) : (j = _n(o) ? oi : ct.current, j = Yi(r, j));
      var ke = o.getDerivedStateFromProps;
      (pe = typeof ke == "function" || typeof R.getSnapshotBeforeUpdate == "function") || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (M !== he || fe !== j) && Av(r, R, s, j), Hl = !1, fe = r.memoizedState, R.state = fe, Jc(r, s, R, p);
      var Me = r.memoizedState;
      M !== he || fe !== Me || Bn.current || Hl ? (typeof ke == "function" && (Lo(r, o, ke, s), Me = r.memoizedState), (Z = Hl || Dv(r, o, Z, s, fe, Me, j) || !1) ? (pe || typeof R.UNSAFE_componentWillUpdate != "function" && typeof R.componentWillUpdate != "function" || (typeof R.componentWillUpdate == "function" && R.componentWillUpdate(s, Me, j), typeof R.UNSAFE_componentWillUpdate == "function" && R.UNSAFE_componentWillUpdate(s, Me, j)), typeof R.componentDidUpdate == "function" && (r.flags |= 4), typeof R.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof R.componentDidUpdate != "function" || M === n.memoizedProps && fe === n.memoizedState || (r.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && fe === n.memoizedState || (r.flags |= 1024), r.memoizedProps = s, r.memoizedState = Me), R.props = s, R.state = Me, R.context = j, s = Z) : (typeof R.componentDidUpdate != "function" || M === n.memoizedProps && fe === n.memoizedState || (r.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && fe === n.memoizedState || (r.flags |= 1024), s = !1);
    }
    return Sf(n, r, o, s, y, p);
  }
  function Sf(n, r, o, s, p, y) {
    Mo(n, r);
    var R = (r.flags & 128) !== 0;
    if (!s && !R)
      return p && gv(r, o, !1), Vn(n, r, y);
    s = r.stateNode, Uv.current = r;
    var M = R && typeof o.getDerivedStateFromError != "function" ? null : s.render();
    return r.flags |= 1, n !== null && R ? (r.child = Tu(r, n.child, null, y), r.child = Tu(r, null, M, y)) : In(n, r, M, y), r.memoizedState = s.state, p && gv(r, o, !0), r.child;
  }
  function dg(n) {
    var r = n.stateNode;
    r.pendingContext ? jl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && jl(n, r.context, !1), lp(n, r.containerInfo);
  }
  function zv(n, r, o, s, p) {
    return Ln(), rp(p), r.flags |= 256, In(n, r, o, s), r.child;
  }
  var qs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Fo(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Bv(n, r, o) {
    var s = r.pendingProps, p = kn.current, y = !1, R = (r.flags & 128) !== 0, M;
    if ((M = R) || (M = n !== null && n.memoizedState === null ? !1 : (p & 2) !== 0), M ? (y = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (p |= 1), tn(kn, p & 1), n === null)
      return Wc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (R = s.children, n = s.fallback, y ? (s = r.mode, y = r.child, R = { mode: "hidden", children: R }, !(s & 1) && y !== null ? (y.childLanes = 0, y.pendingProps = R) : y = Uf(R, s, 0, null), n = Ho(n, s, o, null), y.return = r, n.return = r, y.sibling = n, r.child = y, r.child.memoizedState = Fo(o), r.memoizedState = qs, n) : Ef(r, R));
    if (p = n.memoizedState, p !== null && (M = p.dehydrated, M !== null))
      return hp(n, r, R, s, M, p, o);
    if (y) {
      y = s.fallback, R = r.mode, p = n.child, M = p.sibling;
      var j = { mode: "hidden", children: s.children };
      return !(R & 1) && r.child !== p ? (s = r.child, s.childLanes = 0, s.pendingProps = j, r.deletions = null) : (s = Gl(p, j), s.subtreeFlags = p.subtreeFlags & 14680064), M !== null ? y = Gl(M, y) : (y = Ho(y, R, o, null), y.flags |= 2), y.return = r, s.return = r, s.sibling = y, r.child = s, s = y, y = r.child, R = n.child.memoizedState, R = R === null ? Fo(o) : { baseLanes: R.baseLanes | o, cachePool: null, transitions: R.transitions }, y.memoizedState = R, y.childLanes = n.childLanes & ~o, r.memoizedState = qs, s;
    }
    return y = n.child, n = y.sibling, s = Gl(y, { mode: "visible", children: s.children }), !(r.mode & 1) && (s.lanes = o), s.return = r, s.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = s, r.memoizedState = null, s;
  }
  function Ef(n, r) {
    return r = Uf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Cf(n, r, o, s) {
    return s !== null && rp(s), Tu(r, n.child, null, o), n = Ef(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function hp(n, r, o, s, p, y, R) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, s = dp(Error(d(422))), Cf(n, r, R, s)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (y = s.fallback, p = r.mode, s = Uf({ mode: "visible", children: s.children }, p, 0, null), y = Ho(y, p, R, null), y.flags |= 2, s.return = r, y.return = r, s.sibling = y, r.child = s, r.mode & 1 && Tu(r, n.child, null, R), r.child.memoizedState = Fo(R), r.memoizedState = qs, y);
    if (!(r.mode & 1))
      return Cf(n, r, R, null);
    if (p.data === "$!") {
      if (s = p.nextSibling && p.nextSibling.dataset, s)
        var M = s.dgst;
      return s = M, y = Error(d(419)), s = dp(y, s, void 0), Cf(n, r, R, s);
    }
    if (M = (R & n.childLanes) !== 0, hi || M) {
      if (s = Pn, s !== null) {
        switch (R & -R) {
          case 4:
            p = 2;
            break;
          case 16:
            p = 8;
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
            p = 32;
            break;
          case 536870912:
            p = 268435456;
            break;
          default:
            p = 0;
        }
        p = p & (s.suspendedLanes | R) ? 0 : p, p !== 0 && p !== y.retryLane && (y.retryLane = p, al(n, p), Nn(s, n, p, -1));
      }
      return tc(), s = dp(Error(d(421))), Cf(n, r, R, s);
    }
    return p.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Rp.bind(null, n), p._reactRetry = r, null) : (n = y.treeContext, fi = ga(p.nextSibling), ki = r, Cn = !0, Gi = null, n !== null && (ci[Ur++] = Er, ci[Ur++] = rl, ci[Ur++] = Qi, Er = n.id, rl = n.overflow, Qi = r), r = Ef(r, s.children), r.flags |= 4096, r);
  }
  function jv(n, r, o) {
    n.lanes |= r;
    var s = n.alternate;
    s !== null && (s.lanes |= r), ap(n.return, r, o);
  }
  function xf(n, r, o, s, p) {
    var y = n.memoizedState;
    y === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: s, tail: o, tailMode: p } : (y.isBackwards = r, y.rendering = null, y.renderingStartTime = 0, y.last = s, y.tail = o, y.tailMode = p);
  }
  function vp(n, r, o) {
    var s = r.pendingProps, p = s.revealOrder, y = s.tail;
    if (In(n, r, s.children, o), s = kn.current, s & 2)
      s = s & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && jv(n, o, r);
            else if (n.tag === 19)
              jv(n, o, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      s &= 1;
    }
    if (tn(kn, s), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (p) {
        case "forwards":
          for (o = r.child, p = null; o !== null; )
            n = o.alternate, n !== null && Zc(n) === null && (p = o), o = o.sibling;
          o = p, o === null ? (p = r.child, r.child = null) : (p = o.sibling, o.sibling = null), xf(r, !1, p, o, y);
          break;
        case "backwards":
          for (o = null, p = r.child, r.child = null; p !== null; ) {
            if (n = p.alternate, n !== null && Zc(n) === null) {
              r.child = p;
              break;
            }
            n = p.sibling, p.sibling = o, o = p, p = n;
          }
          xf(r, !0, o, null, y);
          break;
        case "together":
          xf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Ks(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Vn(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), zo |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(d(153));
    if (r.child !== null) {
      for (n = r.child, o = Gl(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = Gl(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function ol(n, r, o) {
    switch (r.tag) {
      case 3:
        dg(r), Ln();
        break;
      case 5:
        _v(r);
        break;
      case 1:
        _n(r.type) && Vc(r);
        break;
      case 4:
        lp(r, r.stateNode.containerInfo);
        break;
      case 10:
        var s = r.type._context, p = r.memoizedProps.value;
        tn(il, s._currentValue), s._currentValue = p;
        break;
      case 13:
        if (s = r.memoizedState, s !== null)
          return s.dehydrated !== null ? (tn(kn, kn.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Bv(n, r, o) : (tn(kn, kn.current & 1), n = Vn(n, r, o), n !== null ? n.sibling : null);
        tn(kn, kn.current & 1);
        break;
      case 19:
        if (s = (o & r.childLanes) !== 0, n.flags & 128) {
          if (s)
            return vp(n, r, o);
          r.flags |= 128;
        }
        if (p = r.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), tn(kn, kn.current), s)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, vi(n, r, o);
    }
    return Vn(n, r, o);
  }
  var La, zu, Bu, Ji;
  La = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, zu = function() {
  }, Bu = function(n, r, o, s) {
    var p = n.memoizedProps;
    if (p !== s) {
      n = r.stateNode, ko(Sa.current);
      var y = null;
      switch (o) {
        case "input":
          p = Wn(n, p), s = Wn(n, s), y = [];
          break;
        case "select":
          p = xe({}, p, { value: void 0 }), s = xe({}, s, { value: void 0 }), y = [];
          break;
        case "textarea":
          p = Mr(n, p), s = Mr(n, s), y = [];
          break;
        default:
          typeof p.onClick != "function" && typeof s.onClick == "function" && (n.onclick = Ic);
      }
      ne(o, s);
      var R;
      o = null;
      for (Z in p)
        if (!s.hasOwnProperty(Z) && p.hasOwnProperty(Z) && p[Z] != null)
          if (Z === "style") {
            var M = p[Z];
            for (R in M)
              M.hasOwnProperty(R) && (o || (o = {}), o[R] = "");
          } else
            Z !== "dangerouslySetInnerHTML" && Z !== "children" && Z !== "suppressContentEditableWarning" && Z !== "suppressHydrationWarning" && Z !== "autoFocus" && (C.hasOwnProperty(Z) ? y || (y = []) : (y = y || []).push(Z, null));
      for (Z in s) {
        var j = s[Z];
        if (M = p != null ? p[Z] : void 0, s.hasOwnProperty(Z) && j !== M && (j != null || M != null))
          if (Z === "style")
            if (M) {
              for (R in M)
                !M.hasOwnProperty(R) || j && j.hasOwnProperty(R) || (o || (o = {}), o[R] = "");
              for (R in j)
                j.hasOwnProperty(R) && M[R] !== j[R] && (o || (o = {}), o[R] = j[R]);
            } else
              o || (y || (y = []), y.push(
                Z,
                o
              )), o = j;
          else
            Z === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, M = M ? M.__html : void 0, j != null && M !== j && (y = y || []).push(Z, j)) : Z === "children" ? typeof j != "string" && typeof j != "number" || (y = y || []).push(Z, "" + j) : Z !== "suppressContentEditableWarning" && Z !== "suppressHydrationWarning" && (C.hasOwnProperty(Z) ? (j != null && Z === "onScroll" && hn("scroll", n), y || M === j || (y = [])) : (y = y || []).push(Z, j));
      }
      o && (y = y || []).push("style", o);
      var Z = y;
      (r.updateQueue = Z) && (r.flags |= 4);
    }
  }, Ji = function(n, r, o, s) {
    o !== s && (r.flags |= 4);
  };
  function jn(n, r) {
    if (!Cn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var s = null; o !== null; )
            o.alternate !== null && (s = o), o = o.sibling;
          s === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : s.sibling = null;
      }
  }
  function jr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, s = 0;
    if (r)
      for (var p = n.child; p !== null; )
        o |= p.lanes | p.childLanes, s |= p.subtreeFlags & 14680064, s |= p.flags & 14680064, p.return = n, p = p.sibling;
    else
      for (p = n.child; p !== null; )
        o |= p.lanes | p.childLanes, s |= p.subtreeFlags, s |= p.flags, p.return = n, p = p.sibling;
    return n.subtreeFlags |= s, n.childLanes = o, r;
  }
  function pg(n, r, o) {
    var s = r.pendingProps;
    switch (tp(r), r.tag) {
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
        return jr(r), null;
      case 1:
        return _n(r.type) && Wi(), jr(r), null;
      case 3:
        return s = r.stateNode, ku(), Jt(Bn), Jt(ct), up(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (n === null || n.child === null) && (Qc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Gi !== null && (xp(Gi), Gi = null))), zu(n, r), jr(r), null;
      case 5:
        op(r);
        var p = ko(Ps.current);
        if (o = r.type, n !== null && r.stateNode != null)
          Bu(n, r, o, s, p), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!s) {
            if (r.stateNode === null)
              throw Error(d(166));
            return jr(r), null;
          }
          if (n = ko(Sa.current), Qc(r)) {
            s = r.stateNode, o = r.type;
            var y = r.memoizedProps;
            switch (s[Da] = r, s[To] = y, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                hn("cancel", s), hn("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                hn("load", s);
                break;
              case "video":
              case "audio":
                for (p = 0; p < As.length; p++)
                  hn(As[p], s);
                break;
              case "source":
                hn("error", s);
                break;
              case "img":
              case "image":
              case "link":
                hn(
                  "error",
                  s
                ), hn("load", s);
                break;
              case "details":
                hn("toggle", s);
                break;
              case "input":
                Fn(s, y), hn("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!y.multiple }, hn("invalid", s);
                break;
              case "textarea":
                Jn(s, y), hn("invalid", s);
            }
            ne(o, y), p = null;
            for (var R in y)
              if (y.hasOwnProperty(R)) {
                var M = y[R];
                R === "children" ? typeof M == "string" ? s.textContent !== M && (y.suppressHydrationWarning !== !0 && Hc(s.textContent, M, n), p = ["children", M]) : typeof M == "number" && s.textContent !== "" + M && (y.suppressHydrationWarning !== !0 && Hc(
                  s.textContent,
                  M,
                  n
                ), p = ["children", "" + M]) : C.hasOwnProperty(R) && M != null && R === "onScroll" && hn("scroll", s);
              }
            switch (o) {
              case "input":
                On(s), Lr(s, y, !0);
                break;
              case "textarea":
                On(s), ln(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof y.onClick == "function" && (s.onclick = Ic);
            }
            s = p, r.updateQueue = s, s !== null && (r.flags |= 4);
          } else {
            R = p.nodeType === 9 ? p : p.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = cr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = R.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof s.is == "string" ? n = R.createElement(o, { is: s.is }) : (n = R.createElement(o), o === "select" && (R = n, s.multiple ? R.multiple = !0 : s.size && (R.size = s.size))) : n = R.createElementNS(n, o), n[Da] = r, n[To] = s, La(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (R = Be(o, s), o) {
                case "dialog":
                  hn("cancel", n), hn("close", n), p = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  hn("load", n), p = s;
                  break;
                case "video":
                case "audio":
                  for (p = 0; p < As.length; p++)
                    hn(As[p], n);
                  p = s;
                  break;
                case "source":
                  hn("error", n), p = s;
                  break;
                case "img":
                case "image":
                case "link":
                  hn(
                    "error",
                    n
                  ), hn("load", n), p = s;
                  break;
                case "details":
                  hn("toggle", n), p = s;
                  break;
                case "input":
                  Fn(n, s), p = Wn(n, s), hn("invalid", n);
                  break;
                case "option":
                  p = s;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!s.multiple }, p = xe({}, s, { value: void 0 }), hn("invalid", n);
                  break;
                case "textarea":
                  Jn(n, s), p = Mr(n, s), hn("invalid", n);
                  break;
                default:
                  p = s;
              }
              ne(o, p), M = p;
              for (y in M)
                if (M.hasOwnProperty(y)) {
                  var j = M[y];
                  y === "style" ? z(n, j) : y === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && Bi(n, j)) : y === "children" ? typeof j == "string" ? (o !== "textarea" || j !== "") && b(n, j) : typeof j == "number" && b(n, "" + j) : y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && y !== "autoFocus" && (C.hasOwnProperty(y) ? j != null && y === "onScroll" && hn("scroll", n) : j != null && Ge(n, y, j, R));
                }
              switch (o) {
                case "input":
                  On(n), Lr(n, s, !1);
                  break;
                case "textarea":
                  On(n), ln(n);
                  break;
                case "option":
                  s.value != null && n.setAttribute("value", "" + Et(s.value));
                  break;
                case "select":
                  n.multiple = !!s.multiple, y = s.value, y != null ? ur(n, !!s.multiple, y, !1) : s.defaultValue != null && ur(
                    n,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof p.onClick == "function" && (n.onclick = Ic);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return jr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Ji(n, r, n.memoizedProps, s);
        else {
          if (typeof s != "string" && r.stateNode === null)
            throw Error(d(166));
          if (o = ko(Ps.current), ko(Sa.current), Qc(r)) {
            if (s = r.stateNode, o = r.memoizedProps, s[Da] = r, (y = s.nodeValue !== o) && (n = ki, n !== null))
              switch (n.tag) {
                case 3:
                  Hc(s.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Hc(s.nodeValue, o, (n.mode & 1) !== 0);
              }
            y && (r.flags |= 4);
          } else
            s = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(s), s[Da] = r, r.stateNode = s;
        }
        return jr(r), null;
      case 13:
        if (Jt(kn), s = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Cn && fi !== null && r.mode & 1 && !(r.flags & 128))
            Cv(), Ln(), r.flags |= 98560, y = !1;
          else if (y = Qc(r), s !== null && s.dehydrated !== null) {
            if (n === null) {
              if (!y)
                throw Error(d(318));
              if (y = r.memoizedState, y = y !== null ? y.dehydrated : null, !y)
                throw Error(d(317));
              y[Da] = r;
            } else
              Ln(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            jr(r), y = !1;
          } else
            Gi !== null && (xp(Gi), Gi = null), y = !0;
          if (!y)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (s = s !== null, s !== (n !== null && n.memoizedState !== null) && s && (r.child.flags |= 8192, r.mode & 1 && (n === null || kn.current & 1 ? tr === 0 && (tr = 3) : tc())), r.updateQueue !== null && (r.flags |= 4), jr(r), null);
      case 4:
        return ku(), zu(n, r), n === null && Cu(r.stateNode.containerInfo), jr(r), null;
      case 10:
        return ip(r.type._context), jr(r), null;
      case 17:
        return _n(r.type) && Wi(), jr(r), null;
      case 19:
        if (Jt(kn), y = r.memoizedState, y === null)
          return jr(r), null;
        if (s = (r.flags & 128) !== 0, R = y.rendering, R === null)
          if (s)
            jn(y, !1);
          else {
            if (tr !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (R = Zc(n), R !== null) {
                  for (r.flags |= 128, jn(y, !1), s = R.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), r.subtreeFlags = 0, s = o, o = r.child; o !== null; )
                    y = o, n = s, y.flags &= 14680066, R = y.alternate, R === null ? (y.childLanes = 0, y.lanes = n, y.child = null, y.subtreeFlags = 0, y.memoizedProps = null, y.memoizedState = null, y.updateQueue = null, y.dependencies = null, y.stateNode = null) : (y.childLanes = R.childLanes, y.lanes = R.lanes, y.child = R.child, y.subtreeFlags = 0, y.deletions = null, y.memoizedProps = R.memoizedProps, y.memoizedState = R.memoizedState, y.updateQueue = R.updateQueue, y.type = R.type, n = R.dependencies, y.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return tn(kn, kn.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            y.tail !== null && Yt() > Gu && (r.flags |= 128, s = !0, jn(y, !1), r.lanes = 4194304);
          }
        else {
          if (!s)
            if (n = Zc(R), n !== null) {
              if (r.flags |= 128, s = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), jn(y, !0), y.tail === null && y.tailMode === "hidden" && !R.alternate && !Cn)
                return jr(r), null;
            } else
              2 * Yt() - y.renderingStartTime > Gu && o !== 1073741824 && (r.flags |= 128, s = !0, jn(y, !1), r.lanes = 4194304);
          y.isBackwards ? (R.sibling = r.child, r.child = R) : (o = y.last, o !== null ? o.sibling = R : r.child = R, y.last = R);
        }
        return y.tail !== null ? (r = y.tail, y.rendering = r, y.tail = r.sibling, y.renderingStartTime = Yt(), r.sibling = null, o = kn.current, tn(kn, s ? o & 1 | 2 : o & 1), r) : (jr(r), null);
      case 22:
      case 23:
        return Nf(), s = r.memoizedState !== null, n !== null && n.memoizedState !== null !== s && (r.flags |= 8192), s && r.mode & 1 ? mi & 1073741824 && (jr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : jr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, r.tag));
  }
  function hg(n, r) {
    switch (tp(r), r.tag) {
      case 1:
        return _n(r.type) && Wi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return ku(), Jt(Bn), Jt(ct), up(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return op(r), null;
      case 13:
        if (Jt(kn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(d(340));
          Ln();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Jt(kn), null;
      case 4:
        return ku(), null;
      case 10:
        return ip(r.type._context), null;
      case 22:
      case 23:
        return Nf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ju = !1, xr = !1, wf = typeof WeakSet == "function" ? WeakSet : Set, Ne = null;
  function Pu(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (s) {
          Hn(n, r, s);
        }
      else
        o.current = null;
  }
  function mp(n, r, o) {
    try {
      o();
    } catch (s) {
      Hn(n, r, s);
    }
  }
  var Tf = !1;
  function vg(n, r) {
    if (Qd = Ii, n = Uc(), Za(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var s = o.getSelection && o.getSelection();
          if (s && s.rangeCount !== 0) {
            o = s.anchorNode;
            var p = s.anchorOffset, y = s.focusNode;
            s = s.focusOffset;
            try {
              o.nodeType, y.nodeType;
            } catch {
              o = null;
              break e;
            }
            var R = 0, M = -1, j = -1, Z = 0, pe = 0, he = n, fe = null;
            t:
              for (; ; ) {
                for (var ke; he !== o || p !== 0 && he.nodeType !== 3 || (M = R + p), he !== y || s !== 0 && he.nodeType !== 3 || (j = R + s), he.nodeType === 3 && (R += he.nodeValue.length), (ke = he.firstChild) !== null; )
                  fe = he, he = ke;
                for (; ; ) {
                  if (he === n)
                    break t;
                  if (fe === o && ++Z === p && (M = R), fe === y && ++pe === s && (j = R), (ke = he.nextSibling) !== null)
                    break;
                  he = fe, fe = he.parentNode;
                }
                he = ke;
              }
            o = M === -1 || j === -1 ? null : { start: M, end: j };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (xo = { focusedElem: n, selectionRange: o }, Ii = !1, Ne = r; Ne !== null; )
      if (r = Ne, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Ne = n;
      else
        for (; Ne !== null; ) {
          r = Ne;
          try {
            var Me = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Me !== null) {
                    var ze = Me.memoizedProps, $n = Me.memoizedState, Y = r.stateNode, H = Y.getSnapshotBeforeUpdate(r.elementType === r.type ? ze : pi(r.type, ze), $n);
                    Y.__reactInternalSnapshotBeforeUpdate = H;
                  }
                  break;
                case 3:
                  var G = r.stateNode.containerInfo;
                  G.nodeType === 1 ? G.textContent = "" : G.nodeType === 9 && G.documentElement && G.removeChild(G.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(d(163));
              }
          } catch (Se) {
            Hn(r, r.return, Se);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Ne = n;
            break;
          }
          Ne = r.return;
        }
    return Me = Tf, Tf = !1, Me;
  }
  function Hu(n, r, o) {
    var s = r.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var p = s = s.next;
      do {
        if ((p.tag & n) === n) {
          var y = p.destroy;
          p.destroy = void 0, y !== void 0 && mp(r, o, y);
        }
        p = p.next;
      } while (p !== s);
    }
  }
  function Rf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var s = o.create;
          o.destroy = s();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function bf(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Pv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Pv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Da], delete r[To], delete r[Kd], delete r[sg], delete r[Xd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function yp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Hv(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || yp(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Xs(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Ic));
    else if (s !== 4 && (n = n.child, n !== null))
      for (Xs(n, r, o), n = n.sibling; n !== null; )
        Xs(n, r, o), n = n.sibling;
  }
  function Iu(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (s !== 4 && (n = n.child, n !== null))
      for (Iu(n, r, o), n = n.sibling; n !== null; )
        Iu(n, r, o), n = n.sibling;
  }
  var Dn = null, vr = !1;
  function Wr(n, r, o) {
    for (o = o.child; o !== null; )
      Vu(n, r, o), o = o.sibling;
  }
  function Vu(n, r, o) {
    if (ri && typeof ri.onCommitFiberUnmount == "function")
      try {
        ri.onCommitFiberUnmount(Rl, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        xr || Pu(o, r);
      case 6:
        var s = Dn, p = vr;
        Dn = null, Wr(n, r, o), Dn = s, vr = p, Dn !== null && (vr ? (n = Dn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Dn.removeChild(o.stateNode));
        break;
      case 18:
        Dn !== null && (vr ? (n = Dn, o = o.stateNode, n.nodeType === 8 ? Ul(n.parentNode, o) : n.nodeType === 1 && Ul(n, o), Ll(n)) : Ul(Dn, o.stateNode));
        break;
      case 4:
        s = Dn, p = vr, Dn = o.stateNode.containerInfo, vr = !0, Wr(n, r, o), Dn = s, vr = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!xr && (s = o.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          p = s = s.next;
          do {
            var y = p, R = y.destroy;
            y = y.tag, R !== void 0 && (y & 2 || y & 4) && mp(o, r, R), p = p.next;
          } while (p !== s);
        }
        Wr(n, r, o);
        break;
      case 1:
        if (!xr && (Pu(o, r), s = o.stateNode, typeof s.componentWillUnmount == "function"))
          try {
            s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
          } catch (M) {
            Hn(o, r, M);
          }
        Wr(n, r, o);
        break;
      case 21:
        Wr(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (xr = (s = xr) || o.memoizedState !== null, Wr(n, r, o), xr = s) : Wr(n, r, o);
        break;
      default:
        Wr(n, r, o);
    }
  }
  function $u(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new wf()), r.forEach(function(s) {
        var p = xg.bind(null, n, s);
        o.has(s) || (o.add(s), s.then(p, p));
      });
    }
  }
  function mr(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var s = 0; s < o.length; s++) {
        var p = o[s];
        try {
          var y = n, R = r, M = R;
          e:
            for (; M !== null; ) {
              switch (M.tag) {
                case 5:
                  Dn = M.stateNode, vr = !1;
                  break e;
                case 3:
                  Dn = M.stateNode.containerInfo, vr = !0;
                  break e;
                case 4:
                  Dn = M.stateNode.containerInfo, vr = !0;
                  break e;
              }
              M = M.return;
            }
          if (Dn === null)
            throw Error(d(160));
          Vu(y, R, p), Dn = null, vr = !1;
          var j = p.alternate;
          j !== null && (j.return = null), p.return = null;
        } catch (Z) {
          Hn(p, r, Z);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Iv(r, n), r = r.sibling;
  }
  function Iv(n, r) {
    var o = n.alternate, s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (mr(r, n), Na(n), s & 4) {
          try {
            Hu(3, n, n.return), Rf(3, n);
          } catch (ze) {
            Hn(n, n.return, ze);
          }
          try {
            Hu(5, n, n.return);
          } catch (ze) {
            Hn(n, n.return, ze);
          }
        }
        break;
      case 1:
        mr(r, n), Na(n), s & 512 && o !== null && Pu(o, o.return);
        break;
      case 5:
        if (mr(r, n), Na(n), s & 512 && o !== null && Pu(o, o.return), n.flags & 32) {
          var p = n.stateNode;
          try {
            b(p, "");
          } catch (ze) {
            Hn(n, n.return, ze);
          }
        }
        if (s & 4 && (p = n.stateNode, p != null)) {
          var y = n.memoizedProps, R = o !== null ? o.memoizedProps : y, M = n.type, j = n.updateQueue;
          if (n.updateQueue = null, j !== null)
            try {
              M === "input" && y.type === "radio" && y.name != null && sn(p, y), Be(M, R);
              var Z = Be(M, y);
              for (R = 0; R < j.length; R += 2) {
                var pe = j[R], he = j[R + 1];
                pe === "style" ? z(p, he) : pe === "dangerouslySetInnerHTML" ? Bi(p, he) : pe === "children" ? b(p, he) : Ge(p, pe, he, Z);
              }
              switch (M) {
                case "input":
                  cn(p, y);
                  break;
                case "textarea":
                  sr(p, y);
                  break;
                case "select":
                  var fe = p._wrapperState.wasMultiple;
                  p._wrapperState.wasMultiple = !!y.multiple;
                  var ke = y.value;
                  ke != null ? ur(p, !!y.multiple, ke, !1) : fe !== !!y.multiple && (y.defaultValue != null ? ur(
                    p,
                    !!y.multiple,
                    y.defaultValue,
                    !0
                  ) : ur(p, !!y.multiple, y.multiple ? [] : "", !1));
              }
              p[To] = y;
            } catch (ze) {
              Hn(n, n.return, ze);
            }
        }
        break;
      case 6:
        if (mr(r, n), Na(n), s & 4) {
          if (n.stateNode === null)
            throw Error(d(162));
          p = n.stateNode, y = n.memoizedProps;
          try {
            p.nodeValue = y;
          } catch (ze) {
            Hn(n, n.return, ze);
          }
        }
        break;
      case 3:
        if (mr(r, n), Na(n), s & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            Ll(r.containerInfo);
          } catch (ze) {
            Hn(n, n.return, ze);
          }
        break;
      case 4:
        mr(r, n), Na(n);
        break;
      case 13:
        mr(r, n), Na(n), p = n.child, p.flags & 8192 && (y = p.memoizedState !== null, p.stateNode.isHidden = y, !y || p.alternate !== null && p.alternate.memoizedState !== null || (kf = Yt())), s & 4 && $u(n);
        break;
      case 22:
        if (pe = o !== null && o.memoizedState !== null, n.mode & 1 ? (xr = (Z = xr) || pe, mr(r, n), xr = Z) : mr(r, n), Na(n), s & 8192) {
          if (Z = n.memoizedState !== null, (n.stateNode.isHidden = Z) && !pe && n.mode & 1)
            for (Ne = n, pe = n.child; pe !== null; ) {
              for (he = Ne = pe; Ne !== null; ) {
                switch (fe = Ne, ke = fe.child, fe.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Hu(4, fe, fe.return);
                    break;
                  case 1:
                    Pu(fe, fe.return);
                    var Me = fe.stateNode;
                    if (typeof Me.componentWillUnmount == "function") {
                      s = fe, o = fe.return;
                      try {
                        r = s, Me.props = r.memoizedProps, Me.state = r.memoizedState, Me.componentWillUnmount();
                      } catch (ze) {
                        Hn(s, o, ze);
                      }
                    }
                    break;
                  case 5:
                    Pu(fe, fe.return);
                    break;
                  case 22:
                    if (fe.memoizedState !== null) {
                      Vv(he);
                      continue;
                    }
                }
                ke !== null ? (ke.return = fe, Ne = ke) : Vv(he);
              }
              pe = pe.sibling;
            }
          e:
            for (pe = null, he = n; ; ) {
              if (he.tag === 5) {
                if (pe === null) {
                  pe = he;
                  try {
                    p = he.stateNode, Z ? (y = p.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none") : (M = he.stateNode, j = he.memoizedProps.style, R = j != null && j.hasOwnProperty("display") ? j.display : null, M.style.display = k("display", R));
                  } catch (ze) {
                    Hn(n, n.return, ze);
                  }
                }
              } else if (he.tag === 6) {
                if (pe === null)
                  try {
                    he.stateNode.nodeValue = Z ? "" : he.memoizedProps;
                  } catch (ze) {
                    Hn(n, n.return, ze);
                  }
              } else if ((he.tag !== 22 && he.tag !== 23 || he.memoizedState === null || he === n) && he.child !== null) {
                he.child.return = he, he = he.child;
                continue;
              }
              if (he === n)
                break e;
              for (; he.sibling === null; ) {
                if (he.return === null || he.return === n)
                  break e;
                pe === he && (pe = null), he = he.return;
              }
              pe === he && (pe = null), he.sibling.return = he.return, he = he.sibling;
            }
        }
        break;
      case 19:
        mr(r, n), Na(n), s & 4 && $u(n);
        break;
      case 21:
        break;
      default:
        mr(
          r,
          n
        ), Na(n);
    }
  }
  function Na(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (yp(o)) {
              var s = o;
              break e;
            }
            o = o.return;
          }
          throw Error(d(160));
        }
        switch (s.tag) {
          case 5:
            var p = s.stateNode;
            s.flags & 32 && (b(p, ""), s.flags &= -33);
            var y = Hv(n);
            Iu(n, y, p);
            break;
          case 3:
          case 4:
            var R = s.stateNode.containerInfo, M = Hv(n);
            Xs(n, M, R);
            break;
          default:
            throw Error(d(161));
        }
      } catch (j) {
        Hn(n, n.return, j);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function mg(n, r, o) {
    Ne = n, gp(n);
  }
  function gp(n, r, o) {
    for (var s = (n.mode & 1) !== 0; Ne !== null; ) {
      var p = Ne, y = p.child;
      if (p.tag === 22 && s) {
        var R = p.memoizedState !== null || ju;
        if (!R) {
          var M = p.alternate, j = M !== null && M.memoizedState !== null || xr;
          M = ju;
          var Z = xr;
          if (ju = R, (xr = j) && !Z)
            for (Ne = p; Ne !== null; )
              R = Ne, j = R.child, R.tag === 22 && R.memoizedState !== null ? Sp(p) : j !== null ? (j.return = R, Ne = j) : Sp(p);
          for (; y !== null; )
            Ne = y, gp(y), y = y.sibling;
          Ne = p, ju = M, xr = Z;
        }
        Yu(n);
      } else
        p.subtreeFlags & 8772 && y !== null ? (y.return = p, Ne = y) : Yu(n);
    }
  }
  function Yu(n) {
    for (; Ne !== null; ) {
      var r = Ne;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                xr || Rf(5, r);
                break;
              case 1:
                var s = r.stateNode;
                if (r.flags & 4 && !xr)
                  if (o === null)
                    s.componentDidMount();
                  else {
                    var p = r.elementType === r.type ? o.memoizedProps : pi(r.type, o.memoizedProps);
                    s.componentDidUpdate(p, o.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
                  }
                var y = r.updateQueue;
                y !== null && bv(r, y, s);
                break;
              case 3:
                var R = r.updateQueue;
                if (R !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  bv(r, R, o);
                }
                break;
              case 5:
                var M = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = M;
                  var j = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      j.autoFocus && o.focus();
                      break;
                    case "img":
                      j.src && (o.src = j.src);
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
                if (r.memoizedState === null) {
                  var Z = r.alternate;
                  if (Z !== null) {
                    var pe = Z.memoizedState;
                    if (pe !== null) {
                      var he = pe.dehydrated;
                      he !== null && Ll(he);
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
                throw Error(d(163));
            }
          xr || r.flags & 512 && bf(r);
        } catch (fe) {
          Hn(r, r.return, fe);
        }
      }
      if (r === n) {
        Ne = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Ne = o;
        break;
      }
      Ne = r.return;
    }
  }
  function Vv(n) {
    for (; Ne !== null; ) {
      var r = Ne;
      if (r === n) {
        Ne = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Ne = o;
        break;
      }
      Ne = r.return;
    }
  }
  function Sp(n) {
    for (; Ne !== null; ) {
      var r = Ne;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Rf(4, r);
            } catch (j) {
              Hn(r, o, j);
            }
            break;
          case 1:
            var s = r.stateNode;
            if (typeof s.componentDidMount == "function") {
              var p = r.return;
              try {
                s.componentDidMount();
              } catch (j) {
                Hn(r, p, j);
              }
            }
            var y = r.return;
            try {
              bf(r);
            } catch (j) {
              Hn(r, y, j);
            }
            break;
          case 5:
            var R = r.return;
            try {
              bf(r);
            } catch (j) {
              Hn(r, R, j);
            }
        }
      } catch (j) {
        Hn(r, r.return, j);
      }
      if (r === n) {
        Ne = null;
        break;
      }
      var M = r.sibling;
      if (M !== null) {
        M.return = r.return, Ne = M;
        break;
      }
      Ne = r.return;
    }
  }
  var yg = Math.ceil, Uo = St.ReactCurrentDispatcher, _f = St.ReactCurrentOwner, Zi = St.ReactCurrentBatchConfig, Lt = 0, Pn = null, xn = null, er = 0, mi = 0, Wu = xt(0), tr = 0, Js = null, zo = 0, Qu = 0, Ep = 0, Wl = null, Pr = null, kf = 0, Gu = 1 / 0, ul = null, Df = !1, Cp = null, ea = null, qu = !1, ta = null, Of = 0, Zs = 0, Af = null, ec = -1, Bo = 0;
  function yr() {
    return Lt & 6 ? Yt() : ec !== -1 ? ec : ec = Yt();
  }
  function sl(n) {
    return n.mode & 1 ? Lt & 2 && er !== 0 ? er & -er : Gc.transition !== null ? (Bo === 0 && (Bo = ou()), Bo) : (n = Wt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : xs(n.type)), n) : 1;
  }
  function Nn(n, r, o, s) {
    if (50 < Zs)
      throw Zs = 0, Af = null, Error(d(185));
    Qa(n, o, s), (!(Lt & 2) || n !== Pn) && (n === Pn && (!(Lt & 2) && (Qu |= o), tr === 4 && Ma(n, er)), nr(n, s), o === 1 && Lt === 0 && !(r.mode & 1) && (Gu = Yt() + 500, hr && ui()));
  }
  function nr(n, r) {
    var o = n.callbackNode;
    kl(n, r);
    var s = $r(n, n === Pn ? er : 0);
    if (s === 0)
      o !== null && Sn(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = s & -s, n.callbackPriority !== r) {
      if (o != null && Sn(o), r === 1)
        n.tag === 0 ? Zd(Ku.bind(null, n)) : Jd(Ku.bind(null, n)), qd(function() {
          !(Lt & 6) && ui();
        }), o = null;
      else {
        switch (su(s)) {
          case 1:
            o = Ir;
            break;
          case 4:
            o = Rt;
            break;
          case 16:
            o = Pi;
            break;
          case 536870912:
            o = au;
            break;
          default:
            o = Pi;
        }
        o = Xv(o, Lf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Lf(n, r) {
    if (ec = -1, Bo = 0, Lt & 6)
      throw Error(d(327));
    var o = n.callbackNode;
    if (Xu() && n.callbackNode !== o)
      return null;
    var s = $r(n, n === Pn ? er : 0);
    if (s === 0)
      return null;
    if (s & 30 || s & n.expiredLanes || r)
      r = Mf(n, s);
    else {
      r = s;
      var p = Lt;
      Lt |= 2;
      var y = Yv();
      (Pn !== n || er !== r) && (ul = null, Gu = Yt() + 500, Po(n, r));
      do
        try {
          Sg();
          break;
        } catch (M) {
          $v(n, M);
        }
      while (!0);
      Di(), Uo.current = y, Lt = p, xn !== null ? r = 0 : (Pn = null, er = 0, r = tr);
    }
    if (r !== 0) {
      if (r === 2 && (p = Dl(n), p !== 0 && (s = p, r = jo(n, p))), r === 1)
        throw o = Js, Po(n, 0), Ma(n, s), nr(n, Yt()), o;
      if (r === 6)
        Ma(n, s);
      else {
        if (p = n.current.alternate, !(s & 30) && !wp(p) && (r = Mf(n, s), r === 2 && (y = Dl(n), y !== 0 && (s = y, r = jo(n, y))), r === 1))
          throw o = Js, Po(n, 0), Ma(n, s), nr(n, Yt()), o;
        switch (n.finishedWork = p, n.finishedLanes = s, r) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            Ql(n, Pr, ul);
            break;
          case 3:
            if (Ma(n, s), (s & 130023424) === s && (r = kf + 500 - Yt(), 10 < r)) {
              if ($r(n, 0) !== 0)
                break;
              if (p = n.suspendedLanes, (p & s) !== s) {
                yr(), n.pingedLanes |= n.suspendedLanes & p;
                break;
              }
              n.timeoutHandle = wo(Ql.bind(null, n, Pr, ul), r);
              break;
            }
            Ql(n, Pr, ul);
            break;
          case 4:
            if (Ma(n, s), (s & 4194240) === s)
              break;
            for (r = n.eventTimes, p = -1; 0 < s; ) {
              var R = 31 - Vr(s);
              y = 1 << R, R = r[R], R > p && (p = R), s &= ~y;
            }
            if (s = p, s = Yt() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * yg(s / 1960)) - s, 10 < s) {
              n.timeoutHandle = wo(Ql.bind(null, n, Pr, ul), s);
              break;
            }
            Ql(n, Pr, ul);
            break;
          case 5:
            Ql(n, Pr, ul);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return nr(n, Yt()), n.callbackNode === o ? Lf.bind(null, n) : null;
  }
  function jo(n, r) {
    var o = Wl;
    return n.current.memoizedState.isDehydrated && (Po(n, r).flags |= 256), n = Mf(n, r), n !== 2 && (r = Pr, Pr = o, r !== null && xp(r)), n;
  }
  function xp(n) {
    Pr === null ? Pr = n : Pr.push.apply(Pr, n);
  }
  function wp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var s = 0; s < o.length; s++) {
            var p = o[s], y = p.getSnapshot;
            p = p.value;
            try {
              if (!Vi(y(), p))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null)
        o.return = r, r = o;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ma(n, r) {
    for (r &= ~Ep, r &= ~Qu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Vr(r), s = 1 << o;
      n[o] = -1, r &= ~s;
    }
  }
  function Ku(n) {
    if (Lt & 6)
      throw Error(d(327));
    Xu();
    var r = $r(n, 0);
    if (!(r & 1))
      return nr(n, Yt()), null;
    var o = Mf(n, r);
    if (n.tag !== 0 && o === 2) {
      var s = Dl(n);
      s !== 0 && (r = s, o = jo(n, s));
    }
    if (o === 1)
      throw o = Js, Po(n, 0), Ma(n, r), nr(n, Yt()), o;
    if (o === 6)
      throw Error(d(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ql(n, Pr, ul), nr(n, Yt()), null;
  }
  function Tp(n, r) {
    var o = Lt;
    Lt |= 1;
    try {
      return n(r);
    } finally {
      Lt = o, Lt === 0 && (Gu = Yt() + 500, hr && ui());
    }
  }
  function Fa(n) {
    ta !== null && ta.tag === 0 && !(Lt & 6) && Xu();
    var r = Lt;
    Lt |= 1;
    var o = Zi.transition, s = Wt;
    try {
      if (Zi.transition = null, Wt = 1, n)
        return n();
    } finally {
      Wt = s, Zi.transition = o, Lt = r, !(Lt & 6) && ui();
    }
  }
  function Nf() {
    mi = Wu.current, Jt(Wu);
  }
  function Po(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, yv(o)), xn !== null)
      for (o = xn.return; o !== null; ) {
        var s = o;
        switch (tp(s), s.tag) {
          case 1:
            s = s.type.childContextTypes, s != null && Wi();
            break;
          case 3:
            ku(), Jt(Bn), Jt(ct), up();
            break;
          case 5:
            op(s);
            break;
          case 4:
            ku();
            break;
          case 13:
            Jt(kn);
            break;
          case 19:
            Jt(kn);
            break;
          case 10:
            ip(s.type._context);
            break;
          case 22:
          case 23:
            Nf();
        }
        o = o.return;
      }
    if (Pn = n, xn = n = Gl(n.current, null), er = mi = r, tr = 0, Js = null, Ep = Qu = zo = 0, Pr = Wl = null, _o !== null) {
      for (r = 0; r < _o.length; r++)
        if (o = _o[r], s = o.interleaved, s !== null) {
          o.interleaved = null;
          var p = s.next, y = o.pending;
          if (y !== null) {
            var R = y.next;
            y.next = p, s.next = R;
          }
          o.pending = s;
        }
      _o = null;
    }
    return n;
  }
  function $v(n, r) {
    do {
      var o = xn;
      try {
        if (Di(), tf.current = Br, Oi) {
          for (var s = Ve.memoizedState; s !== null; ) {
            var p = s.queue;
            p !== null && (p.pending = null), s = s.next;
          }
          Oi = !1;
        }
        if (Pe = 0, Dt = ft = Ve = null, Du = !1, Is = 0, _f.current = null, o === null || o.return === null) {
          tr = 1, Js = r, xn = null;
          break;
        }
        e: {
          var y = n, R = o.return, M = o, j = r;
          if (r = er, M.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var Z = j, pe = M, he = pe.tag;
            if (!(pe.mode & 1) && (he === 0 || he === 11 || he === 15)) {
              var fe = pe.alternate;
              fe ? (pe.updateQueue = fe.updateQueue, pe.memoizedState = fe.memoizedState, pe.lanes = fe.lanes) : (pe.updateQueue = null, pe.memoizedState = null);
            }
            var ke = Fv(R);
            if (ke !== null) {
              ke.flags &= -257, pp(ke, R, M, y, r), ke.mode & 1 && Qs(y, Z, r), r = ke, j = Z;
              var Me = r.updateQueue;
              if (Me === null) {
                var ze = /* @__PURE__ */ new Set();
                ze.add(j), r.updateQueue = ze;
              } else
                Me.add(j);
              break e;
            } else {
              if (!(r & 1)) {
                Qs(y, Z, r), tc();
                break e;
              }
              j = Error(d(426));
            }
          } else if (Cn && M.mode & 1) {
            var $n = Fv(R);
            if ($n !== null) {
              !($n.flags & 65536) && ($n.flags |= 256), pp($n, R, M, y, r), rp($l(j, M));
              break e;
            }
          }
          y = j = $l(j, M), tr !== 4 && (tr = 2), Wl === null ? Wl = [y] : Wl.push(y), y = R;
          do {
            switch (y.tag) {
              case 3:
                y.flags |= 65536, r &= -r, y.lanes |= r;
                var Y = Nv(y, j, r);
                Rv(y, Y);
                break e;
              case 1:
                M = j;
                var H = y.type, G = y.stateNode;
                if (!(y.flags & 128) && (typeof H.getDerivedStateFromError == "function" || G !== null && typeof G.componentDidCatch == "function" && (ea === null || !ea.has(G)))) {
                  y.flags |= 65536, r &= -r, y.lanes |= r;
                  var Se = Mv(y, M, r);
                  Rv(y, Se);
                  break e;
                }
            }
            y = y.return;
          } while (y !== null);
        }
        Qv(o);
      } catch (He) {
        r = He, xn === o && o !== null && (xn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Yv() {
    var n = Uo.current;
    return Uo.current = Br, n === null ? Br : n;
  }
  function tc() {
    (tr === 0 || tr === 3 || tr === 2) && (tr = 4), Pn === null || !(zo & 268435455) && !(Qu & 268435455) || Ma(Pn, er);
  }
  function Mf(n, r) {
    var o = Lt;
    Lt |= 2;
    var s = Yv();
    (Pn !== n || er !== r) && (ul = null, Po(n, r));
    do
      try {
        gg();
        break;
      } catch (p) {
        $v(n, p);
      }
    while (!0);
    if (Di(), Lt = o, Uo.current = s, xn !== null)
      throw Error(d(261));
    return Pn = null, er = 0, tr;
  }
  function gg() {
    for (; xn !== null; )
      Wv(xn);
  }
  function Sg() {
    for (; xn !== null && !Fr(); )
      Wv(xn);
  }
  function Wv(n) {
    var r = Kv(n.alternate, n, mi);
    n.memoizedProps = n.pendingProps, r === null ? Qv(n) : xn = r, _f.current = null;
  }
  function Qv(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = hg(o, r), o !== null) {
          o.flags &= 32767, xn = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          tr = 6, xn = null;
          return;
        }
      } else if (o = pg(o, r, mi), o !== null) {
        xn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        xn = r;
        return;
      }
      xn = r = n;
    } while (r !== null);
    tr === 0 && (tr = 5);
  }
  function Ql(n, r, o) {
    var s = Wt, p = Zi.transition;
    try {
      Zi.transition = null, Wt = 1, Eg(n, r, o, s);
    } finally {
      Zi.transition = p, Wt = s;
    }
    return null;
  }
  function Eg(n, r, o, s) {
    do
      Xu();
    while (ta !== null);
    if (Lt & 6)
      throw Error(d(327));
    o = n.finishedWork;
    var p = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(d(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var y = o.lanes | o.childLanes;
    if (kd(n, y), n === Pn && (xn = Pn = null, er = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || qu || (qu = !0, Xv(Pi, function() {
      return Xu(), null;
    })), y = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || y) {
      y = Zi.transition, Zi.transition = null;
      var R = Wt;
      Wt = 1;
      var M = Lt;
      Lt |= 4, _f.current = null, vg(n, o), Iv(o, n), zc(xo), Ii = !!Qd, xo = Qd = null, n.current = o, mg(o), ba(), Lt = M, Wt = R, Zi.transition = y;
    } else
      n.current = o;
    if (qu && (qu = !1, ta = n, Of = p), y = n.pendingLanes, y === 0 && (ea = null), Ss(o.stateNode), nr(n, Yt()), r !== null)
      for (s = n.onRecoverableError, o = 0; o < r.length; o++)
        p = r[o], s(p.value, { componentStack: p.stack, digest: p.digest });
    if (Df)
      throw Df = !1, n = Cp, Cp = null, n;
    return Of & 1 && n.tag !== 0 && Xu(), y = n.pendingLanes, y & 1 ? n === Af ? Zs++ : (Zs = 0, Af = n) : Zs = 0, ui(), null;
  }
  function Xu() {
    if (ta !== null) {
      var n = su(Of), r = Zi.transition, o = Wt;
      try {
        if (Zi.transition = null, Wt = 16 > n ? 16 : n, ta === null)
          var s = !1;
        else {
          if (n = ta, ta = null, Of = 0, Lt & 6)
            throw Error(d(331));
          var p = Lt;
          for (Lt |= 4, Ne = n.current; Ne !== null; ) {
            var y = Ne, R = y.child;
            if (Ne.flags & 16) {
              var M = y.deletions;
              if (M !== null) {
                for (var j = 0; j < M.length; j++) {
                  var Z = M[j];
                  for (Ne = Z; Ne !== null; ) {
                    var pe = Ne;
                    switch (pe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Hu(8, pe, y);
                    }
                    var he = pe.child;
                    if (he !== null)
                      he.return = pe, Ne = he;
                    else
                      for (; Ne !== null; ) {
                        pe = Ne;
                        var fe = pe.sibling, ke = pe.return;
                        if (Pv(pe), pe === Z) {
                          Ne = null;
                          break;
                        }
                        if (fe !== null) {
                          fe.return = ke, Ne = fe;
                          break;
                        }
                        Ne = ke;
                      }
                  }
                }
                var Me = y.alternate;
                if (Me !== null) {
                  var ze = Me.child;
                  if (ze !== null) {
                    Me.child = null;
                    do {
                      var $n = ze.sibling;
                      ze.sibling = null, ze = $n;
                    } while (ze !== null);
                  }
                }
                Ne = y;
              }
            }
            if (y.subtreeFlags & 2064 && R !== null)
              R.return = y, Ne = R;
            else
              e:
                for (; Ne !== null; ) {
                  if (y = Ne, y.flags & 2048)
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Hu(9, y, y.return);
                    }
                  var Y = y.sibling;
                  if (Y !== null) {
                    Y.return = y.return, Ne = Y;
                    break e;
                  }
                  Ne = y.return;
                }
          }
          var H = n.current;
          for (Ne = H; Ne !== null; ) {
            R = Ne;
            var G = R.child;
            if (R.subtreeFlags & 2064 && G !== null)
              G.return = R, Ne = G;
            else
              e:
                for (R = H; Ne !== null; ) {
                  if (M = Ne, M.flags & 2048)
                    try {
                      switch (M.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Rf(9, M);
                      }
                    } catch (He) {
                      Hn(M, M.return, He);
                    }
                  if (M === R) {
                    Ne = null;
                    break e;
                  }
                  var Se = M.sibling;
                  if (Se !== null) {
                    Se.return = M.return, Ne = Se;
                    break e;
                  }
                  Ne = M.return;
                }
          }
          if (Lt = p, ui(), ri && typeof ri.onPostCommitFiberRoot == "function")
            try {
              ri.onPostCommitFiberRoot(Rl, n);
            } catch {
            }
          s = !0;
        }
        return s;
      } finally {
        Wt = o, Zi.transition = r;
      }
    }
    return !1;
  }
  function Gv(n, r, o) {
    r = $l(o, r), r = Nv(n, r, 1), n = Il(n, r, 1), r = yr(), n !== null && (Qa(n, 1, r), nr(n, r));
  }
  function Hn(n, r, o) {
    if (n.tag === 3)
      Gv(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Gv(r, n, o);
          break;
        } else if (r.tag === 1) {
          var s = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (ea === null || !ea.has(s))) {
            n = $l(o, n), n = Mv(r, n, 1), r = Il(r, n, 1), n = yr(), r !== null && (Qa(r, 1, n), nr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Cg(n, r, o) {
    var s = n.pingCache;
    s !== null && s.delete(r), r = yr(), n.pingedLanes |= n.suspendedLanes & o, Pn === n && (er & o) === o && (tr === 4 || tr === 3 && (er & 130023424) === er && 500 > Yt() - kf ? Po(n, 0) : Ep |= o), nr(n, r);
  }
  function qv(n, r) {
    r === 0 && (n.mode & 1 ? (r = bl, bl <<= 1, !(bl & 130023424) && (bl = 4194304)) : r = 1);
    var o = yr();
    n = al(n, r), n !== null && (Qa(n, r, o), nr(n, o));
  }
  function Rp(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), qv(n, o);
  }
  function xg(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var s = n.stateNode, p = n.memoizedState;
        p !== null && (o = p.retryLane);
        break;
      case 19:
        s = n.stateNode;
        break;
      default:
        throw Error(d(314));
    }
    s !== null && s.delete(r), qv(n, o);
  }
  var Kv;
  Kv = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Bn.current)
        hi = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return hi = !1, ol(n, r, o);
        hi = !!(n.flags & 131072);
      }
    else
      hi = !1, Cn && r.flags & 1048576 && ep(r, wu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var s = r.type;
        Ks(n, r), n = r.pendingProps;
        var p = Yi(r, ct.current);
        Ru(r, o), p = ce(null, r, s, n, p, o);
        var y = Kn();
        return r.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, _n(s) ? (y = !0, Vc(r)) : y = !1, r.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Kc(r), p.updater = No, r.stateNode = p, p._reactInternals = r, fp(r, s, n, o), r = Sf(null, r, s, !0, y, o)) : (r.tag = 0, Cn && y && $c(r), In(null, r, p, o), r = r.child), r;
      case 16:
        s = r.elementType;
        e: {
          switch (Ks(n, r), n = r.pendingProps, p = s._init, s = p(s._payload), r.type = s, p = r.tag = wg(s), n = pi(s, n), p) {
            case 0:
              r = yt(null, r, s, n, o);
              break e;
            case 1:
              r = Gs(null, r, s, n, o);
              break e;
            case 11:
              r = Uu(null, r, s, n, o);
              break e;
            case 14:
              r = Yl(null, r, s, pi(s.type, n), o);
              break e;
          }
          throw Error(d(
            306,
            s,
            ""
          ));
        }
        return r;
      case 0:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : pi(s, p), yt(n, r, s, p, o);
      case 1:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : pi(s, p), Gs(n, r, s, p, o);
      case 3:
        e: {
          if (dg(r), n === null)
            throw Error(d(387));
          s = r.pendingProps, y = r.memoizedState, p = y.element, bu(n, r), Jc(r, s, null, o);
          var R = r.memoizedState;
          if (s = R.element, y.isDehydrated)
            if (y = { element: s, isDehydrated: !1, cache: R.cache, pendingSuspenseBoundaries: R.pendingSuspenseBoundaries, transitions: R.transitions }, r.updateQueue.baseState = y, r.memoizedState = y, r.flags & 256) {
              p = $l(Error(d(423)), r), r = zv(n, r, s, o, p);
              break e;
            } else if (s !== p) {
              p = $l(Error(d(424)), r), r = zv(n, r, s, o, p);
              break e;
            } else
              for (fi = ga(r.stateNode.containerInfo.firstChild), ki = r, Cn = !0, Gi = null, o = wv(r, null, s, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Ln(), s === p) {
              r = Vn(n, r, o);
              break e;
            }
            In(n, r, s, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return _v(r), n === null && Wc(r), s = r.type, p = r.pendingProps, y = n !== null ? n.memoizedProps : null, R = p.children, Ms(s, p) ? R = null : y !== null && Ms(s, y) && (r.flags |= 32), Mo(n, r), In(n, r, R, o), r.child;
      case 6:
        return n === null && Wc(r), null;
      case 13:
        return Bv(n, r, o);
      case 4:
        return lp(r, r.stateNode.containerInfo), s = r.pendingProps, n === null ? r.child = Tu(r, null, s, o) : In(n, r, s, o), r.child;
      case 11:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : pi(s, p), Uu(n, r, s, p, o);
      case 7:
        return In(n, r, r.pendingProps, o), r.child;
      case 8:
        return In(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return In(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (s = r.type._context, p = r.pendingProps, y = r.memoizedProps, R = p.value, tn(il, s._currentValue), s._currentValue = R, y !== null)
            if (Vi(y.value, R)) {
              if (y.children === p.children && !Bn.current) {
                r = Vn(n, r, o);
                break e;
              }
            } else
              for (y = r.child, y !== null && (y.return = r); y !== null; ) {
                var M = y.dependencies;
                if (M !== null) {
                  R = y.child;
                  for (var j = M.firstContext; j !== null; ) {
                    if (j.context === s) {
                      if (y.tag === 1) {
                        j = di(-1, o & -o), j.tag = 2;
                        var Z = y.updateQueue;
                        if (Z !== null) {
                          Z = Z.shared;
                          var pe = Z.pending;
                          pe === null ? j.next = j : (j.next = pe.next, pe.next = j), Z.pending = j;
                        }
                      }
                      y.lanes |= o, j = y.alternate, j !== null && (j.lanes |= o), ap(
                        y.return,
                        o,
                        r
                      ), M.lanes |= o;
                      break;
                    }
                    j = j.next;
                  }
                } else if (y.tag === 10)
                  R = y.type === r.type ? null : y.child;
                else if (y.tag === 18) {
                  if (R = y.return, R === null)
                    throw Error(d(341));
                  R.lanes |= o, M = R.alternate, M !== null && (M.lanes |= o), ap(R, o, r), R = y.sibling;
                } else
                  R = y.child;
                if (R !== null)
                  R.return = y;
                else
                  for (R = y; R !== null; ) {
                    if (R === r) {
                      R = null;
                      break;
                    }
                    if (y = R.sibling, y !== null) {
                      y.return = R.return, R = y;
                      break;
                    }
                    R = R.return;
                  }
                y = R;
              }
          In(n, r, p.children, o), r = r.child;
        }
        return r;
      case 9:
        return p = r.type, s = r.pendingProps.children, Ru(r, o), p = Ki(p), s = s(p), r.flags |= 1, In(n, r, s, o), r.child;
      case 14:
        return s = r.type, p = pi(s, r.pendingProps), p = pi(s.type, p), Yl(n, r, s, p, o);
      case 15:
        return gf(n, r, r.type, r.pendingProps, o);
      case 17:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : pi(s, p), Ks(n, r), r.tag = 1, _n(s) ? (n = !0, Vc(r)) : n = !1, Ru(r, o), Ov(r, s, p), fp(r, s, p, o), Sf(null, r, s, !0, n, o);
      case 19:
        return vp(n, r, o);
      case 22:
        return vi(n, r, o);
    }
    throw Error(d(156, r.tag));
  };
  function Xv(n, r) {
    return fn(n, r);
  }
  function Jv(n, r, o, s) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function na(n, r, o, s) {
    return new Jv(n, r, o, s);
  }
  function bp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function wg(n) {
    if (typeof n == "function")
      return bp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Rn)
        return 11;
      if (n === $t)
        return 14;
    }
    return 2;
  }
  function Gl(n, r) {
    var o = n.alternate;
    return o === null ? (o = na(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Ff(n, r, o, s, p, y) {
    var R = 2;
    if (s = n, typeof n == "function")
      bp(n) && (R = 1);
    else if (typeof n == "string")
      R = 5;
    else
      e:
        switch (n) {
          case ot:
            return Ho(o.children, p, y, r);
          case Vt:
            R = 8, p |= 8;
            break;
          case Tn:
            return n = na(12, o, r, p | 2), n.elementType = Tn, n.lanes = y, n;
          case Xe:
            return n = na(13, o, r, p), n.elementType = Xe, n.lanes = y, n;
          case ht:
            return n = na(19, o, r, p), n.elementType = ht, n.lanes = y, n;
          case Le:
            return Uf(o, p, y, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Xt:
                  R = 10;
                  break e;
                case Ht:
                  R = 9;
                  break e;
                case Rn:
                  R = 11;
                  break e;
                case $t:
                  R = 14;
                  break e;
                case Mt:
                  R = 16, s = null;
                  break e;
              }
            throw Error(d(130, n == null ? n : typeof n, ""));
        }
    return r = na(R, o, r, p), r.elementType = n, r.type = s, r.lanes = y, r;
  }
  function Ho(n, r, o, s) {
    return n = na(7, n, s, r), n.lanes = o, n;
  }
  function Uf(n, r, o, s) {
    return n = na(22, n, s, r), n.elementType = Le, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function zf(n, r, o) {
    return n = na(6, n, null, r), n.lanes = o, n;
  }
  function nc(n, r, o) {
    return r = na(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function rc(n, r, o, s, p) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = uu(0), this.expirationTimes = uu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = uu(0), this.identifierPrefix = s, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null;
  }
  function _p(n, r, o, s, p, y, R, M, j) {
    return n = new rc(n, r, o, M, j), r === 1 ? (r = 1, y === !0 && (r |= 8)) : r = 0, y = na(3, null, null, r), n.current = y, y.stateNode = n, y.memoizedState = { element: s, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Kc(y), n;
  }
  function Zv(n, r, o) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: wt, key: s == null ? null : "" + s, children: n, containerInfo: r, implementation: o };
  }
  function kp(n) {
    if (!n)
      return Oa;
    n = n._reactInternals;
    e: {
      if (Ie(n) !== n || n.tag !== 1)
        throw Error(d(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (_n(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(d(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (_n(o))
        return zs(n, o, r);
    }
    return r;
  }
  function Dp(n, r, o, s, p, y, R, M, j) {
    return n = _p(o, s, !0, n, p, y, R, M, j), n.context = kp(null), o = n.current, s = yr(), p = sl(o), y = di(s, p), y.callback = r ?? null, Il(o, y, p), n.current.lanes = p, Qa(n, p, s), nr(n, s), n;
  }
  function Bf(n, r, o, s) {
    var p = r.current, y = yr(), R = sl(p);
    return o = kp(o), r.context === null ? r.context = o : r.pendingContext = o, r = di(y, R), r.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (r.callback = s), n = Il(p, r, R), n !== null && (Nn(n, p, R, y), Xc(n, p, R)), R;
  }
  function ic(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function em(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Op(n, r) {
    em(n, r), (n = n.alternate) && em(n, r);
  }
  function Tg() {
    return null;
  }
  var Ap = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function jf(n) {
    this._internalRoot = n;
  }
  ac.prototype.render = jf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(d(409));
    Bf(n, r, null, null);
  }, ac.prototype.unmount = jf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Fa(function() {
        Bf(null, n, null, null);
      }), r[nl] = null;
    }
  };
  function ac(n) {
    this._internalRoot = n;
  }
  ac.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = fu();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < en.length && r !== 0 && r < en[o].priority; o++)
        ;
      en.splice(o, 0, n), o === 0 && Oc(n);
    }
  };
  function ql(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Pf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function tm() {
  }
  function Rg(n, r, o, s, p) {
    if (p) {
      if (typeof s == "function") {
        var y = s;
        s = function() {
          var Z = ic(R);
          y.call(Z);
        };
      }
      var R = Dp(r, s, n, 0, null, !1, !1, "", tm);
      return n._reactRootContainer = R, n[nl] = R.current, Cu(n.nodeType === 8 ? n.parentNode : n), Fa(), R;
    }
    for (; p = n.lastChild; )
      n.removeChild(p);
    if (typeof s == "function") {
      var M = s;
      s = function() {
        var Z = ic(j);
        M.call(Z);
      };
    }
    var j = _p(n, 0, !1, null, null, !1, !1, "", tm);
    return n._reactRootContainer = j, n[nl] = j.current, Cu(n.nodeType === 8 ? n.parentNode : n), Fa(function() {
      Bf(r, j, o, s);
    }), j;
  }
  function Hf(n, r, o, s, p) {
    var y = o._reactRootContainer;
    if (y) {
      var R = y;
      if (typeof p == "function") {
        var M = p;
        p = function() {
          var j = ic(R);
          M.call(j);
        };
      }
      Bf(r, R, n, p);
    } else
      R = Rg(o, r, n, p, s);
    return ic(R);
  }
  vo = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = pa(r.pendingLanes);
          o !== 0 && (_a(r, o | 1), nr(r, Yt()), !(Lt & 6) && (Gu = Yt() + 500, ui()));
        }
        break;
      case 13:
        Fa(function() {
          var s = al(n, 1);
          if (s !== null) {
            var p = yr();
            Nn(s, n, 1, p);
          }
        }), Op(n, 1);
    }
  }, cu = function(n) {
    if (n.tag === 13) {
      var r = al(n, 134217728);
      if (r !== null) {
        var o = yr();
        Nn(r, n, 134217728, o);
      }
      Op(n, 134217728);
    }
  }, Ut = function(n) {
    if (n.tag === 13) {
      var r = sl(n), o = al(n, r);
      if (o !== null) {
        var s = yr();
        Nn(o, n, r, s);
      }
      Op(n, r);
    }
  }, fu = function() {
    return Wt;
  }, du = function(n, r) {
    var o = Wt;
    try {
      return Wt = n, r();
    } finally {
      Wt = o;
    }
  }, Ot = function(n, r, o) {
    switch (r) {
      case "input":
        if (cn(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var s = o[r];
            if (s !== n && s.form === n.form) {
              var p = Ke(s);
              if (!p)
                throw Error(d(90));
              or(s), cn(s, p);
            }
          }
        }
        break;
      case "textarea":
        sr(n, o);
        break;
      case "select":
        r = o.value, r != null && ur(n, !!o.multiple, r, !1);
    }
  }, ho = Tp, iu = Fa;
  var bg = { usingClientEntryPoint: !1, Events: [Us, xu, Ke, ji, xl, Tp] }, lc = { findFiberByHostInstance: $i, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, nm = { bundleType: lc.bundleType, version: lc.version, rendererPackageName: lc.rendererPackageName, rendererConfig: lc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: St.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Tt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: lc.findFiberByHostInstance || Tg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var If = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!If.isDisabled && If.supportsFiber)
      try {
        Rl = If.inject(nm), ri = If;
      } catch {
      }
  }
  return ua.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bg, ua.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ql(r))
      throw Error(d(200));
    return Zv(n, r, null, o);
  }, ua.createRoot = function(n, r) {
    if (!ql(n))
      throw Error(d(299));
    var o = !1, s = "", p = Ap;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (p = r.onRecoverableError)), r = _p(n, 1, !1, null, null, o, !1, s, p), n[nl] = r.current, Cu(n.nodeType === 8 ? n.parentNode : n), new jf(r);
  }, ua.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(d(188)) : (n = Object.keys(n).join(","), Error(d(268, n)));
    return n = Tt(r), n = n === null ? null : n.stateNode, n;
  }, ua.flushSync = function(n) {
    return Fa(n);
  }, ua.hydrate = function(n, r, o) {
    if (!Pf(r))
      throw Error(d(200));
    return Hf(null, n, r, !0, o);
  }, ua.hydrateRoot = function(n, r, o) {
    if (!ql(n))
      throw Error(d(405));
    var s = o != null && o.hydratedSources || null, p = !1, y = "", R = Ap;
    if (o != null && (o.unstable_strictMode === !0 && (p = !0), o.identifierPrefix !== void 0 && (y = o.identifierPrefix), o.onRecoverableError !== void 0 && (R = o.onRecoverableError)), r = Dp(r, null, n, 1, o ?? null, p, !1, y, R), n[nl] = r.current, Cu(n), s)
      for (n = 0; n < s.length; n++)
        o = s[n], p = o._getVersion, p = p(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, p] : r.mutableSourceEagerHydrationData.push(
          o,
          p
        );
    return new ac(r);
  }, ua.render = function(n, r, o) {
    if (!Pf(r))
      throw Error(d(200));
    return Hf(null, n, r, !1, o);
  }, ua.unmountComponentAtNode = function(n) {
    if (!Pf(n))
      throw Error(d(40));
    return n._reactRootContainer ? (Fa(function() {
      Hf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[nl] = null;
      });
    }), !0) : !1;
  }, ua.unstable_batchedUpdates = Tp, ua.unstable_renderSubtreeIntoContainer = function(n, r, o, s) {
    if (!Pf(o))
      throw Error(d(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(d(38));
    return Hf(n, r, o, !1, s);
  }, ua.version = "18.3.1-next-f1338f8080-20240426", ua;
}
var sa = {}, $w;
function NA() {
  return $w || ($w = 1, fo.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var a = eu, f = xT(), d = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, S = !1;
    function C(e) {
      S = e;
    }
    function w(e) {
      if (!S) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          i[l - 1] = arguments[l];
        A("warn", e, i);
      }
    }
    function h(e) {
      if (!S) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          i[l - 1] = arguments[l];
        A("error", e, i);
      }
    }
    function A(e, t, i) {
      {
        var l = d.ReactDebugCurrentFrame, u = l.getStackAddendum();
        u !== "" && (t += "%s", i = i.concat([u]));
        var c = i.map(function(v) {
          return String(v);
        });
        c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var L = 0, B = 1, D = 2, N = 3, J = 4, K = 5, te = 6, ue = 7, Ce = 8, nt = 9, Ee = 10, Ge = 11, St = 12, Ye = 13, wt = 14, ot = 15, Vt = 16, Tn = 17, Xt = 18, Ht = 19, Rn = 21, Xe = 22, ht = 23, $t = 24, Mt = 25, Le = !0, ye = !1, je = !1, xe = !1, V = !1, le = !0, Je = !1, Ae = !0, qe = !0, vt = !0, bt = !0, Et = /* @__PURE__ */ new Set(), Ct = {}, rn = {};
    function On(e, t) {
      or(e, t), or(e + "Capture", t);
    }
    function or(e, t) {
      Ct[e] && h("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ct[e] = t;
      {
        var i = e.toLowerCase();
        rn[i] = e, e === "onDoubleClick" && (rn.ondblclick = e);
      }
      for (var l = 0; l < t.length; l++)
        Et.add(t[l]);
    }
    var vn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Wn = Object.prototype.hasOwnProperty;
    function Fn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, i = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function sn(e) {
      try {
        return cn(e), !1;
      } catch {
        return !0;
      }
    }
    function cn(e) {
      return "" + e;
    }
    function Lr(e, t) {
      if (sn(e))
        return h("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Fn(e)), cn(e);
    }
    function Nr(e) {
      if (sn(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fn(e)), cn(e);
    }
    function Un(e, t) {
      if (sn(e))
        return h("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Fn(e)), cn(e);
    }
    function ur(e, t) {
      if (sn(e))
        return h("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Fn(e)), cn(e);
    }
    function Mr(e) {
      if (sn(e))
        return h("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Fn(e)), cn(e);
    }
    function Jn(e) {
      if (sn(e))
        return h("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Fn(e)), cn(e);
    }
    var sr = 0, ln = 1, cr = 2, gn = 3, bn = 4, Bi = 5, b = 6, m = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", g = m + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", k = new RegExp("^[" + m + "][" + g + "]*$"), z = {}, $ = {};
    function ne(e) {
      return Wn.call($, e) ? !0 : Wn.call(z, e) ? !1 : k.test(e) ? ($[e] = !0, !0) : (z[e] = !0, h("Invalid attribute name: `%s`", e), !1);
    }
    function Be(e, t, i) {
      return t !== null ? t.type === sr : i ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function _t(e, t, i, l) {
      if (i !== null && i.type === sr)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (l)
            return !1;
          if (i !== null)
            return !i.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Ze(e, t, i, l) {
      if (t === null || typeof t > "u" || _t(e, t, i, l))
        return !0;
      if (l)
        return !1;
      if (i !== null)
        switch (i.type) {
          case gn:
            return !t;
          case bn:
            return t === !1;
          case Bi:
            return isNaN(t);
          case b:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Ot(e) {
      return Zt.hasOwnProperty(e) ? Zt[e] : null;
    }
    function We(e, t, i, l, u, c, v) {
      this.acceptsBooleans = t === cr || t === gn || t === bn, this.attributeName = l, this.attributeNamespace = u, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = v;
    }
    var Zt = {}, fa = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    fa.forEach(function(e) {
      Zt[e] = new We(
        e,
        sr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], i = e[1];
      Zt[t] = new We(
        t,
        ln,
        !1,
        // mustUseProperty
        i,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Zt[e] = new We(
        e,
        cr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Zt[e] = new We(
        e,
        cr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Zt[e] = new We(
        e,
        gn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Zt[e] = new We(
        e,
        gn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Zt[e] = new We(
        e,
        bn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Zt[e] = new We(
        e,
        b,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Zt[e] = new We(
        e,
        Bi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ji = /[\-\:]([a-z])/g, xl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ji, xl);
      Zt[t] = new We(
        t,
        ln,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ji, xl);
      Zt[t] = new We(
        t,
        ln,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ji, xl);
      Zt[t] = new We(
        t,
        ln,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Zt[e] = new We(
        e,
        ln,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ho = "xlinkHref";
    Zt[ho] = new We(
      "xlinkHref",
      ln,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Zt[e] = new We(
        e,
        ln,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var iu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Wa = !1;
    function wl(e) {
      !Wa && iu.test(e) && (Wa = !0, h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function wi(e, t, i, l) {
      if (l.mustUseProperty) {
        var u = l.propertyName;
        return e[u];
      } else {
        Lr(i, t), l.sanitizeURL && wl("" + i);
        var c = l.attributeName, v = null;
        if (l.type === bn) {
          if (e.hasAttribute(c)) {
            var E = e.getAttribute(c);
            return E === "" ? !0 : Ze(t, i, l, !1) ? E : E === "" + i ? i : E;
          }
        } else if (e.hasAttribute(c)) {
          if (Ze(t, i, l, !1))
            return e.getAttribute(c);
          if (l.type === gn)
            return i;
          v = e.getAttribute(c);
        }
        return Ze(t, i, l, !1) ? v === null ? i : v : v === "" + i ? i : v;
      }
    }
    function wa(e, t, i, l) {
      {
        if (!ne(t))
          return;
        if (!e.hasAttribute(t))
          return i === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Lr(i, t), u === "" + i ? i : u;
      }
    }
    function Ti(e, t, i, l) {
      var u = Ot(t);
      if (!Be(t, u, l)) {
        if (Ze(t, i, u, l) && (i = null), l || u === null) {
          if (ne(t)) {
            var c = t;
            i === null ? e.removeAttribute(c) : (Lr(i, t), e.setAttribute(c, "" + i));
          }
          return;
        }
        var v = u.mustUseProperty;
        if (v) {
          var E = u.propertyName;
          if (i === null) {
            var x = u.type;
            e[E] = x === gn ? !1 : "";
          } else
            e[E] = i;
          return;
        }
        var _ = u.attributeName, O = u.attributeNamespace;
        if (i === null)
          e.removeAttribute(_);
        else {
          var I = u.type, P;
          I === gn || I === bn && i === !0 ? P = "" : (Lr(i, _), P = "" + i, u.sanitizeURL && wl(P.toString())), O ? e.setAttributeNS(O, _, P) : e.setAttribute(_, P);
        }
      }
    }
    var da = Symbol.for("react.element"), Hr = Symbol.for("react.portal"), Ri = Symbol.for("react.fragment"), Ta = Symbol.for("react.strict_mode"), Ra = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), de = Symbol.for("react.context"), me = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), At = Symbol.for("react.suspense_list"), Ft = Symbol.for("react.memo"), it = Symbol.for("react.lazy"), Tt = Symbol.for("react.scope"), Qn = Symbol.for("react.debug_trace_mode"), fn = Symbol.for("react.offscreen"), Sn = Symbol.for("react.legacy_hidden"), Fr = Symbol.for("react.cache"), ba = Symbol.for("react.tracing_marker"), Yt = Symbol.iterator, fr = "@@iterator";
    function Ir(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Yt && e[Yt] || e[fr];
      return typeof t == "function" ? t : null;
    }
    var Rt = Object.assign, Pi = 0, Tl, au, Rl, ri, Ss, Vr, Es;
    function Cs() {
    }
    Cs.__reactDisabledLog = !0;
    function kc() {
      {
        if (Pi === 0) {
          Tl = console.log, au = console.info, Rl = console.warn, ri = console.error, Ss = console.group, Vr = console.groupCollapsed, Es = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Cs,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Pi++;
      }
    }
    function lu() {
      {
        if (Pi--, Pi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Rt({}, e, {
              value: Tl
            }),
            info: Rt({}, e, {
              value: au
            }),
            warn: Rt({}, e, {
              value: Rl
            }),
            error: Rt({}, e, {
              value: ri
            }),
            group: Rt({}, e, {
              value: Ss
            }),
            groupCollapsed: Rt({}, e, {
              value: Vr
            }),
            groupEnd: Rt({}, e, {
              value: Es
            })
          });
        }
        Pi < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var bl = d.ReactCurrentDispatcher, pa;
    function $r(e, t, i) {
      {
        if (pa === void 0)
          try {
            throw Error();
          } catch (u) {
            var l = u.stack.trim().match(/\n( *(at )?)/);
            pa = l && l[1] || "";
          }
        return `
` + pa + e;
      }
    }
    var _l = !1, kl;
    {
      var Dl = typeof WeakMap == "function" ? WeakMap : Map;
      kl = new Dl();
    }
    function ou(e, t) {
      if (!e || _l)
        return "";
      {
        var i = kl.get(e);
        if (i !== void 0)
          return i;
      }
      var l;
      _l = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = bl.current, bl.current = null, kc();
      try {
        if (t) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (ee) {
              l = ee;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (ee) {
              l = ee;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ee) {
            l = ee;
          }
          e();
        }
      } catch (ee) {
        if (ee && l && typeof ee.stack == "string") {
          for (var E = ee.stack.split(`
`), x = l.stack.split(`
`), _ = E.length - 1, O = x.length - 1; _ >= 1 && O >= 0 && E[_] !== x[O]; )
            O--;
          for (; _ >= 1 && O >= 0; _--, O--)
            if (E[_] !== x[O]) {
              if (_ !== 1 || O !== 1)
                do
                  if (_--, O--, O < 0 || E[_] !== x[O]) {
                    var I = `
` + E[_].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && kl.set(e, I), I;
                  }
                while (_ >= 1 && O >= 0);
              break;
            }
        }
      } finally {
        _l = !1, bl.current = c, lu(), Error.prepareStackTrace = u;
      }
      var P = e ? e.displayName || e.name : "", q = P ? $r(P) : "";
      return typeof e == "function" && kl.set(e, q), q;
    }
    function uu(e, t, i) {
      return ou(e, !0);
    }
    function Qa(e, t, i) {
      return ou(e, !1);
    }
    function kd(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function _a(e, t, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ou(e, kd(e));
      if (typeof e == "string")
        return $r(e);
      switch (e) {
        case Ie:
          return $r("Suspense");
        case At:
          return $r("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case me:
            return Qa(e.render);
          case Ft:
            return _a(e.type, t, i);
          case it: {
            var l = e, u = l._payload, c = l._init;
            try {
              return _a(c(u), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    function Wt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case K:
          return $r(e.type);
        case Vt:
          return $r("Lazy");
        case Ye:
          return $r("Suspense");
        case Ht:
          return $r("SuspenseList");
        case L:
        case D:
        case ot:
          return Qa(e.type);
        case Ge:
          return Qa(e.type.render);
        case B:
          return uu(e.type);
        default:
          return "";
      }
    }
    function su(e) {
      try {
        var t = "", i = e;
        do
          t += Wt(i), i = i.return;
        while (i);
        return t;
      } catch (l) {
        return `
Error generating stack: ` + l.message + `
` + l.stack;
      }
    }
    function vo(e, t, i) {
      var l = e.displayName;
      if (l)
        return l;
      var u = t.displayName || t.name || "";
      return u !== "" ? i + "(" + u + ")" : i;
    }
    function cu(e) {
      return e.displayName || "Context";
    }
    function Ut(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ri:
          return "Fragment";
        case Hr:
          return "Portal";
        case Ra:
          return "Profiler";
        case Ta:
          return "StrictMode";
        case Ie:
          return "Suspense";
        case At:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case de:
            var t = e;
            return cu(t) + ".Consumer";
          case U:
            var i = e;
            return cu(i._context) + ".Provider";
          case me:
            return vo(e, e.render, "ForwardRef");
          case Ft:
            var l = e.displayName || null;
            return l !== null ? l : Ut(e.type) || "Memo";
          case it: {
            var u = e, c = u._payload, v = u._init;
            try {
              return Ut(v(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function fu(e, t, i) {
      var l = t.displayName || t.name || "";
      return e.displayName || (l !== "" ? i + "(" + l + ")" : i);
    }
    function du(e) {
      return e.displayName || "Context";
    }
    function dt(e) {
      var t = e.tag, i = e.type;
      switch (t) {
        case $t:
          return "Cache";
        case nt:
          var l = i;
          return du(l) + ".Consumer";
        case Ee:
          var u = i;
          return du(u._context) + ".Provider";
        case Xt:
          return "DehydratedFragment";
        case Ge:
          return fu(i, i.render, "ForwardRef");
        case ue:
          return "Fragment";
        case K:
          return i;
        case J:
          return "Portal";
        case N:
          return "Root";
        case te:
          return "Text";
        case Vt:
          return Ut(i);
        case Ce:
          return i === Ta ? "StrictMode" : "Mode";
        case Xe:
          return "Offscreen";
        case St:
          return "Profiler";
        case Rn:
          return "Scope";
        case Ye:
          return "Suspense";
        case Ht:
          return "SuspenseList";
        case Mt:
          return "TracingMarker";
        case B:
        case L:
        case Tn:
        case D:
        case wt:
        case ot:
          if (typeof i == "function")
            return i.displayName || i.name || null;
          if (typeof i == "string")
            return i;
          break;
      }
      return null;
    }
    var mo = d.ReactDebugCurrentFrame, An = null, ii = !1;
    function Yr() {
      {
        if (An === null)
          return null;
        var e = An._debugOwner;
        if (e !== null && typeof e < "u")
          return dt(e);
      }
      return null;
    }
    function Ol() {
      return An === null ? "" : su(An);
    }
    function zn() {
      mo.getCurrentStack = null, An = null, ii = !1;
    }
    function en(e) {
      mo.getCurrentStack = e === null ? null : Ol, An = e, ii = !1;
    }
    function Dc() {
      return An;
    }
    function ai(e) {
      ii = e;
    }
    function dr(e) {
      return "" + e;
    }
    function ka(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Jn(e), e;
        default:
          return "";
      }
    }
    var Oc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ga(e, t) {
      Oc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || h("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || h("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Al(e) {
      var t = e.type, i = e.nodeName;
      return i && i.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Ac(e) {
      return e._valueTracker;
    }
    function Hi(e) {
      e._valueTracker = null;
    }
    function Ll(e) {
      var t = "";
      return e && (Al(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function qa(e) {
      var t = Al(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Jn(e[t]);
      var l = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof i > "u" || typeof i.get != "function" || typeof i.set != "function")) {
        var u = i.get, c = i.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(E) {
            Jn(E), l = "" + E, c.call(this, E);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        });
        var v = {
          getValue: function() {
            return l;
          },
          setValue: function(E) {
            Jn(E), l = "" + E;
          },
          stopTracking: function() {
            Hi(e), delete e[t];
          }
        };
        return v;
      }
    }
    function Ii(e) {
      Ac(e) || (e._valueTracker = qa(e));
    }
    function pu(e) {
      if (!e)
        return !1;
      var t = Ac(e);
      if (!t)
        return !0;
      var i = t.getValue(), l = Ll(e);
      return l !== i ? (t.setValue(l), !0) : !1;
    }
    function Nl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ml = !1, yo = !1, hu = !1, xs = !1;
    function ha(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function T(e, t) {
      var i = e, l = t.checked, u = Rt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: l ?? i._wrapperState.initialChecked
      });
      return u;
    }
    function F(e, t) {
      Ga("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !yo && (h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Yr() || "A component", t.type), yo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ml && (h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Yr() || "A component", t.type), Ml = !0);
      var i = e, l = t.defaultValue == null ? "" : t.defaultValue;
      i._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ka(t.value != null ? t.value : l),
        controlled: ha(t)
      };
    }
    function X(e, t) {
      var i = e, l = t.checked;
      l != null && Ti(i, "checked", l, !1);
    }
    function re(e, t) {
      var i = e;
      {
        var l = ha(t);
        !i._wrapperState.controlled && l && !xs && (h("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), xs = !0), i._wrapperState.controlled && !l && !hu && (h("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), hu = !0);
      }
      X(e, t);
      var u = ka(t.value), c = t.type;
      if (u != null)
        c === "number" ? (u === 0 && i.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        i.value != u) && (i.value = dr(u)) : i.value !== dr(u) && (i.value = dr(u));
      else if (c === "submit" || c === "reset") {
        i.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? rt(i, t.type, u) : t.hasOwnProperty("defaultValue") && rt(i, t.type, ka(t.defaultValue)), t.checked == null && t.defaultChecked != null && (i.defaultChecked = !!t.defaultChecked);
    }
    function ge(e, t, i) {
      var l = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, c = u === "submit" || u === "reset";
        if (c && (t.value === void 0 || t.value === null))
          return;
        var v = dr(l._wrapperState.initialValue);
        i || v !== l.value && (l.value = v), l.defaultValue = v;
      }
      var E = l.name;
      E !== "" && (l.name = ""), l.defaultChecked = !l.defaultChecked, l.defaultChecked = !!l._wrapperState.initialChecked, E !== "" && (l.name = E);
    }
    function at(e, t) {
      var i = e;
      re(i, t), Re(i, t);
    }
    function Re(e, t) {
      var i = t.name;
      if (t.type === "radio" && i != null) {
        for (var l = e; l.parentNode; )
          l = l.parentNode;
        Lr(i, "name");
        for (var u = l.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), c = 0; c < u.length; c++) {
          var v = u[c];
          if (!(v === e || v.form !== e.form)) {
            var E = Sm(v);
            if (!E)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            pu(v), re(v, E);
          }
        }
      }
    }
    function rt(e, t, i) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Nl(e.ownerDocument) !== e) && (i == null ? e.defaultValue = dr(e._wrapperState.initialValue) : e.defaultValue !== dr(i) && (e.defaultValue = dr(i)));
    }
    var kt = !1, It = !1, dn = !1;
    function an(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? a.Children.forEach(t.children, function(i) {
        i != null && (typeof i == "string" || typeof i == "number" || It || (It = !0, h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (dn || (dn = !0, h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !kt && (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), kt = !0);
    }
    function pn(e, t) {
      t.value != null && e.setAttribute("value", dr(ka(t.value)));
    }
    var mn = Array.isArray;
    function zt(e) {
      return mn(e);
    }
    var Ka;
    Ka = !1;
    function vu() {
      var e = Yr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ws = ["value", "defaultValue"];
    function Dd(e) {
      {
        Ga("select", e);
        for (var t = 0; t < ws.length; t++) {
          var i = ws[t];
          if (e[i] != null) {
            var l = zt(e[i]);
            e.multiple && !l ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", i, vu()) : !e.multiple && l && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", i, vu());
          }
        }
      }
    }
    function va(e, t, i, l) {
      var u = e.options;
      if (t) {
        for (var c = i, v = {}, E = 0; E < c.length; E++)
          v["$" + c[E]] = !0;
        for (var x = 0; x < u.length; x++) {
          var _ = v.hasOwnProperty("$" + u[x].value);
          u[x].selected !== _ && (u[x].selected = _), _ && l && (u[x].defaultSelected = !0);
        }
      } else {
        for (var O = dr(ka(i)), I = null, P = 0; P < u.length; P++) {
          if (u[P].value === O) {
            u[P].selected = !0, l && (u[P].defaultSelected = !0);
            return;
          }
          I === null && !u[P].disabled && (I = u[P]);
        }
        I !== null && (I.selected = !0);
      }
    }
    function Ts(e, t) {
      return Rt({}, t, {
        value: void 0
      });
    }
    function Rs(e, t) {
      var i = e;
      Dd(t), i._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Ka && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ka = !0);
    }
    function Od(e, t) {
      var i = e;
      i.multiple = !!t.multiple;
      var l = t.value;
      l != null ? va(i, !!t.multiple, l, !1) : t.defaultValue != null && va(i, !!t.multiple, t.defaultValue, !0);
    }
    function qy(e, t) {
      var i = e, l = i._wrapperState.wasMultiple;
      i._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? va(i, !!t.multiple, u, !1) : l !== !!t.multiple && (t.defaultValue != null ? va(i, !!t.multiple, t.defaultValue, !0) : va(i, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Ky(e, t) {
      var i = e, l = t.value;
      l != null && va(i, !!t.multiple, l, !1);
    }
    var Ad = !1;
    function Ld(e, t) {
      var i = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var l = Rt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: dr(i._wrapperState.initialValue)
      });
      return l;
    }
    function $h(e, t) {
      var i = e;
      Ga("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Ad && (h("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Yr() || "A component"), Ad = !0);
      var l = t.value;
      if (l == null) {
        var u = t.children, c = t.defaultValue;
        if (u != null) {
          h("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (c != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (zt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            c = u;
          }
        }
        c == null && (c = ""), l = c;
      }
      i._wrapperState = {
        initialValue: ka(l)
      };
    }
    function Yh(e, t) {
      var i = e, l = ka(t.value), u = ka(t.defaultValue);
      if (l != null) {
        var c = dr(l);
        c !== i.value && (i.value = c), t.defaultValue == null && i.defaultValue !== c && (i.defaultValue = c);
      }
      u != null && (i.defaultValue = dr(u));
    }
    function Wh(e, t) {
      var i = e, l = i.textContent;
      l === i._wrapperState.initialValue && l !== "" && l !== null && (i.value = l);
    }
    function Nd(e, t) {
      Yh(e, t);
    }
    var Xa = "http://www.w3.org/1999/xhtml", Xy = "http://www.w3.org/1998/Math/MathML", Md = "http://www.w3.org/2000/svg";
    function Lc(e) {
      switch (e) {
        case "svg":
          return Md;
        case "math":
          return Xy;
        default:
          return Xa;
      }
    }
    function Fd(e, t) {
      return e == null || e === Xa ? Lc(t) : e === Md && t === "foreignObject" ? Xa : e;
    }
    var Jy = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, l, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, i, l, u);
        });
      } : e;
    }, Nc, Qh = Jy(function(e, t) {
      if (e.namespaceURI === Md && !("innerHTML" in e)) {
        Nc = Nc || document.createElement("div"), Nc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var i = Nc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; i.firstChild; )
          e.appendChild(i.firstChild);
        return;
      }
      e.innerHTML = t;
    }), li = 1, Ja = 3, Gn = 8, ma = 9, go = 11, Mc = function(e, t) {
      if (t) {
        var i = e.firstChild;
        if (i && i === e.lastChild && i.nodeType === Ja) {
          i.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Gh = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, mu = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function qh(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Kh = ["Webkit", "ms", "Moz", "O"];
    Object.keys(mu).forEach(function(e) {
      Kh.forEach(function(t) {
        mu[qh(t, e)] = mu[e];
      });
    });
    function Fc(e, t, i) {
      var l = t == null || typeof t == "boolean" || t === "";
      return l ? "" : !i && typeof t == "number" && t !== 0 && !(mu.hasOwnProperty(e) && mu[e]) ? t + "px" : (ur(t, e), ("" + t).trim());
    }
    var yu = /([A-Z])/g, Zy = /^ms-/;
    function eg(e) {
      return e.replace(yu, "-$1").toLowerCase().replace(Zy, "-ms-");
    }
    var Xh = function() {
    };
    {
      var Jh = /^(?:webkit|moz|o)[A-Z]/, Zh = /^-ms-/, bs = /-(.)/g, gu = /;\s*$/, Su = {}, Eu = {}, ev = !1, Ud = !1, zd = function(e) {
        return e.replace(bs, function(t, i) {
          return i.toUpperCase();
        });
      }, Bd = function(e) {
        Su.hasOwnProperty(e) && Su[e] || (Su[e] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          zd(e.replace(Zh, "ms-"))
        ));
      }, tv = function(e) {
        Su.hasOwnProperty(e) && Su[e] || (Su[e] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, nv = function(e, t) {
        Eu.hasOwnProperty(t) && Eu[t] || (Eu[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(gu, "")));
      }, rv = function(e, t) {
        ev || (ev = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, tg = function(e, t) {
        Ud || (Ud = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Xh = function(e, t) {
        e.indexOf("-") > -1 ? Bd(e) : Jh.test(e) ? tv(e) : gu.test(t) && nv(e, t), typeof t == "number" && (isNaN(t) ? rv(e, t) : isFinite(t) || tg(e, t));
      };
    }
    var ng = Xh;
    function rg(e) {
      {
        var t = "", i = "";
        for (var l in e)
          if (e.hasOwnProperty(l)) {
            var u = e[l];
            if (u != null) {
              var c = l.indexOf("--") === 0;
              t += i + (c ? l : eg(l)) + ":", t += Fc(l, u, c), i = ";";
            }
          }
        return t || null;
      }
    }
    function iv(e, t) {
      var i = e.style;
      for (var l in t)
        if (t.hasOwnProperty(l)) {
          var u = l.indexOf("--") === 0;
          u || ng(l, t[l]);
          var c = Fc(l, t[l], u);
          l === "float" && (l = "cssFloat"), u ? i.setProperty(l, c) : i[l] = c;
        }
    }
    function ig(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Vi(e) {
      var t = {};
      for (var i in e)
        for (var l = Gh[i] || [i], u = 0; u < l.length; u++)
          t[l[u]] = i;
      return t;
    }
    function _s(e, t) {
      {
        if (!t)
          return;
        var i = Vi(e), l = Vi(t), u = {};
        for (var c in i) {
          var v = i[c], E = l[c];
          if (E && v !== E) {
            var x = v + "," + E;
            if (u[x])
              continue;
            u[x] = !0, h("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ig(e[v]) ? "Removing" : "Updating", v, E);
          }
        }
      }
    }
    var av = {
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
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, lv = Rt({
      menuitem: !0
    }, av), ov = "__html";
    function Uc(e, t) {
      if (t) {
        if (lv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(ov in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && h("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Za(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var zc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, uv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ya = {}, jd = new RegExp("^(aria)-[" + g + "]*$"), ks = new RegExp("^(aria)[A-Z][" + g + "]*$");
    function Pd(e, t) {
      {
        if (Wn.call(ya, t) && ya[t])
          return !0;
        if (ks.test(t)) {
          var i = "aria-" + t.slice(4).toLowerCase(), l = uv.hasOwnProperty(i) ? i : null;
          if (l == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ya[t] = !0, !0;
          if (t !== l)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, l), ya[t] = !0, !0;
        }
        if (jd.test(t)) {
          var u = t.toLowerCase(), c = uv.hasOwnProperty(u) ? u : null;
          if (c == null)
            return ya[t] = !0, !1;
          if (t !== c)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, c), ya[t] = !0, !0;
        }
      }
      return !0;
    }
    function sv(e, t) {
      {
        var i = [];
        for (var l in t) {
          var u = Pd(e, l);
          u || i.push(l);
        }
        var c = i.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        i.length === 1 ? h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e) : i.length > 1 && h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e);
      }
    }
    function Bc(e, t) {
      Za(e, t) || sv(e, t);
    }
    var So = !1;
    function Hd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !So && (So = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Id = function() {
    };
    {
      var pr = {}, Vd = /^on./, cv = /^on[^A-Z]/, fv = new RegExp("^(aria)-[" + g + "]*$"), dv = new RegExp("^(aria)[A-Z][" + g + "]*$");
      Id = function(e, t, i, l) {
        if (Wn.call(pr, t) && pr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), pr[t] = !0, !0;
        if (l != null) {
          var c = l.registrationNameDependencies, v = l.possibleRegistrationNames;
          if (c.hasOwnProperty(t))
            return !0;
          var E = v.hasOwnProperty(u) ? v[u] : null;
          if (E != null)
            return h("Invalid event handler property `%s`. Did you mean `%s`?", t, E), pr[t] = !0, !0;
          if (Vd.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), pr[t] = !0, !0;
        } else if (Vd.test(t))
          return cv.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), pr[t] = !0, !0;
        if (fv.test(t) || dv.test(t))
          return !0;
        if (u === "innerhtml")
          return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), pr[t] = !0, !0;
        if (u === "aria")
          return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), pr[t] = !0, !0;
        if (u === "is" && i !== null && i !== void 0 && typeof i != "string")
          return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof i), pr[t] = !0, !0;
        if (typeof i == "number" && isNaN(i))
          return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), pr[t] = !0, !0;
        var x = Ot(t), _ = x !== null && x.type === sr;
        if (zc.hasOwnProperty(u)) {
          var O = zc[u];
          if (O !== t)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", t, O), pr[t] = !0, !0;
        } else if (!_ && t !== u)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), pr[t] = !0, !0;
        return typeof i == "boolean" && _t(t, i, x, !1) ? (i ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, t, t, i, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, t, t, i, t, t, t), pr[t] = !0, !0) : _ ? !0 : _t(t, i, x, !1) ? (pr[t] = !0, !1) : ((i === "false" || i === "true") && x !== null && x.type === gn && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, t, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, i), pr[t] = !0), !0);
      };
    }
    var pv = function(e, t, i) {
      {
        var l = [];
        for (var u in t) {
          var c = Id(e, u, t[u], i);
          c || l.push(u);
        }
        var v = l.map(function(E) {
          return "`" + E + "`";
        }).join(", ");
        l.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : l.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function hv(e, t, i) {
      Za(e, t) || pv(e, t, i);
    }
    var el = 1, Ds = 2, Eo = 4, ag = el | Ds | Eo, Os = null;
    function As(e) {
      Os !== null && h("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Os = e;
    }
    function lg() {
      Os === null && h("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Os = null;
    }
    function vv(e) {
      return e === Os;
    }
    function jc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ja ? t.parentNode : t;
    }
    var hn = null, Fl = null, tl = null;
    function Cu(e) {
      var t = es(e);
      if (t) {
        if (typeof hn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var i = t.stateNode;
        if (i) {
          var l = Sm(i);
          hn(t.stateNode, t.type, l);
        }
      }
    }
    function mv(e) {
      hn = e;
    }
    function Pc(e) {
      Fl ? tl ? tl.push(e) : tl = [e] : Fl = e;
    }
    function Ls() {
      return Fl !== null || tl !== null;
    }
    function Ns() {
      if (Fl) {
        var e = Fl, t = tl;
        if (Fl = null, tl = null, Cu(e), t)
          for (var i = 0; i < t.length; i++)
            Cu(t[i]);
      }
    }
    var Co = function(e, t) {
      return e(t);
    }, $d = function() {
    }, Yd = !1;
    function og() {
      var e = Ls();
      e && ($d(), Ns());
    }
    function Wd(e, t, i) {
      if (Yd)
        return e(t, i);
      Yd = !0;
      try {
        return Co(e, t, i);
      } finally {
        Yd = !1, og();
      }
    }
    function Hc(e, t, i) {
      Co = e, $d = i;
    }
    function Ic(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Qd(e, t, i) {
      switch (e) {
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
          return !!(i.disabled && Ic(t));
        default:
          return !1;
      }
    }
    function xo(e, t) {
      var i = e.stateNode;
      if (i === null)
        return null;
      var l = Sm(i);
      if (l === null)
        return null;
      var u = l[t];
      if (Qd(t, e.type, l))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Ms = !1;
    if (vn)
      try {
        var wo = {};
        Object.defineProperty(wo, "passive", {
          get: function() {
            Ms = !0;
          }
        }), window.addEventListener("test", wo, wo), window.removeEventListener("test", wo, wo);
      } catch {
        Ms = !1;
      }
    function yv(e, t, i, l, u, c, v, E, x) {
      var _ = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(i, _);
      } catch (O) {
        this.onError(O);
      }
    }
    var Gd = yv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var qd = document.createElement("react");
      Gd = function(t, i, l, u, c, v, E, x, _) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var O = document.createEvent("Event"), I = !1, P = !0, q = window.event, ee = Object.getOwnPropertyDescriptor(window, "event");
        function ie() {
          qd.removeEventListener(ae, et, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = q);
        }
        var be = Array.prototype.slice.call(arguments, 3);
        function et() {
          I = !0, ie(), i.apply(l, be), P = !1;
        }
        var $e, Pt = !1, Nt = !1;
        function W(Q) {
          if ($e = Q.error, Pt = !0, $e === null && Q.colno === 0 && Q.lineno === 0 && (Nt = !0), Q.defaultPrevented && $e != null && typeof $e == "object")
            try {
              $e._suppressLogging = !0;
            } catch {
            }
        }
        var ae = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", W), qd.addEventListener(ae, et, !1), O.initEvent(ae, !1, !1), qd.dispatchEvent(O), ee && Object.defineProperty(window, "event", ee), I && P && (Pt ? Nt && ($e = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : $e = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError($e)), window.removeEventListener("error", W), !I)
          return ie(), yv.apply(this, arguments);
      };
    }
    var ug = Gd, Ul = !1, ga = null, Fs = !1, zl = null, Da = {
      onError: function(e) {
        Ul = !0, ga = e;
      }
    };
    function To(e, t, i, l, u, c, v, E, x) {
      Ul = !1, ga = null, ug.apply(Da, arguments);
    }
    function nl(e, t, i, l, u, c, v, E, x) {
      if (To.apply(this, arguments), Ul) {
        var _ = Xd();
        Fs || (Fs = !0, zl = _);
      }
    }
    function Kd() {
      if (Fs) {
        var e = zl;
        throw Fs = !1, zl = null, e;
      }
    }
    function sg() {
      return Ul;
    }
    function Xd() {
      if (Ul) {
        var e = ga;
        return Ul = !1, ga = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function $i(e) {
      return e._reactInternals;
    }
    function Us(e) {
      return e._reactInternals !== void 0;
    }
    function xu(e, t) {
      e._reactInternals = t;
    }
    var Ke = (
      /*                      */
      0
    ), Bl = (
      /*                */
      1
    ), En = (
      /*                    */
      2
    ), xt = (
      /*                       */
      4
    ), Jt = (
      /*                */
      16
    ), tn = (
      /*                 */
      32
    ), Oa = (
      /*                     */
      64
    ), ct = (
      /*                   */
      128
    ), Bn = (
      /*            */
      256
    ), oi = (
      /*                          */
      512
    ), Yi = (
      /*                     */
      1024
    ), _n = (
      /*                      */
      2048
    ), Wi = (
      /*                    */
      4096
    ), jl = (
      /*                   */
      8192
    ), zs = (
      /*             */
      16384
    ), Vc = _n | xt | Oa | oi | Yi | zs, gv = (
      /*               */
      32767
    ), bi = (
      /*                   */
      32768
    ), hr = (
      /*                */
      65536
    ), Bs = (
      /* */
      131072
    ), Jd = (
      /*                       */
      1048576
    ), Zd = (
      /*                    */
      2097152
    ), ui = (
      /*                 */
      4194304
    ), Pl = (
      /*                */
      8388608
    ), si = (
      /*               */
      16777216
    ), Ro = (
      /*              */
      33554432
    ), wu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      xt | Yi | 0
    ), ci = En | xt | Jt | tn | oi | Wi | jl, Ur = xt | Oa | oi | jl, Qi = _n | Jt, Er = ui | Pl | Zd, rl = d.ReactCurrentOwner;
    function _i(e) {
      var t = e, i = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var l = t;
        do
          t = l, (t.flags & (En | Wi)) !== Ke && (i = t.return), l = t.return;
        while (l);
      }
      return t.tag === N ? i : null;
    }
    function ep(e) {
      if (e.tag === Ye) {
        var t = e.memoizedState;
        if (t === null) {
          var i = e.alternate;
          i !== null && (t = i.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function $c(e) {
      return e.tag === N ? e.stateNode.containerInfo : null;
    }
    function tp(e) {
      return _i(e) === e;
    }
    function ki(e) {
      {
        var t = rl.current;
        if (t !== null && t.tag === B) {
          var i = t, l = i.stateNode;
          l._warnedAboutRefsInRender || h("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", dt(i) || "A component"), l._warnedAboutRefsInRender = !0;
        }
      }
      var u = $i(e);
      return u ? _i(u) === u : !1;
    }
    function fi(e) {
      if (_i(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Cn(e) {
      var t = e.alternate;
      if (!t) {
        var i = _i(e);
        if (i === null)
          throw new Error("Unable to find node on an unmounted component.");
        return i !== e ? null : e;
      }
      for (var l = e, u = t; ; ) {
        var c = l.return;
        if (c === null)
          break;
        var v = c.alternate;
        if (v === null) {
          var E = c.return;
          if (E !== null) {
            l = u = E;
            continue;
          }
          break;
        }
        if (c.child === v.child) {
          for (var x = c.child; x; ) {
            if (x === l)
              return fi(c), e;
            if (x === u)
              return fi(c), t;
            x = x.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (l.return !== u.return)
          l = c, u = v;
        else {
          for (var _ = !1, O = c.child; O; ) {
            if (O === l) {
              _ = !0, l = c, u = v;
              break;
            }
            if (O === u) {
              _ = !0, u = c, l = v;
              break;
            }
            O = O.sibling;
          }
          if (!_) {
            for (O = v.child; O; ) {
              if (O === l) {
                _ = !0, l = v, u = c;
                break;
              }
              if (O === u) {
                _ = !0, u = v, l = c;
                break;
              }
              O = O.sibling;
            }
            if (!_)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (l.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (l.tag !== N)
        throw new Error("Unable to find node on an unmounted component.");
      return l.stateNode.current === l ? e : t;
    }
    function Gi(e) {
      var t = Cn(e);
      return t !== null ? np(t) : null;
    }
    function np(e) {
      if (e.tag === K || e.tag === te)
        return e;
      for (var t = e.child; t !== null; ) {
        var i = np(t);
        if (i !== null)
          return i;
        t = t.sibling;
      }
      return null;
    }
    function Sv(e) {
      var t = Cn(e);
      return t !== null ? Yc(t) : null;
    }
    function Yc(e) {
      if (e.tag === K || e.tag === te)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== J) {
          var i = Yc(t);
          if (i !== null)
            return i;
        }
        t = t.sibling;
      }
      return null;
    }
    var Wc = f.unstable_scheduleCallback, Ev = f.unstable_cancelCallback, Qc = f.unstable_shouldYield, Cv = f.unstable_requestPaint, Ln = f.unstable_now, rp = f.unstable_getCurrentPriorityLevel, Gc = f.unstable_ImmediatePriority, bo = f.unstable_UserBlockingPriority, Aa = f.unstable_NormalPriority, xv = f.unstable_LowPriority, qc = f.unstable_IdlePriority, Tu = f.unstable_yieldValue, wv = f.unstable_setDisableYieldValue, il = null, Zn = null, we = null, qi = !1, Di = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ip(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return h("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        qe && (e = Rt({}, e, {
          getLaneLabelMap: al,
          injectProfilingHooks: Tv
        })), il = t.inject(e), Zn = t;
      } catch (i) {
        h("React instrumentation encountered an error: %s.", i);
      }
      return !!t.checkDCE;
    }
    function ap(e, t) {
      if (Zn && typeof Zn.onScheduleFiberRoot == "function")
        try {
          Zn.onScheduleFiberRoot(il, e, t);
        } catch (i) {
          qi || (qi = !0, h("React instrumentation encountered an error: %s", i));
        }
    }
    function Ru(e, t) {
      if (Zn && typeof Zn.onCommitFiberRoot == "function")
        try {
          var i = (e.current.flags & ct) === ct;
          if (vt) {
            var l;
            switch (t) {
              case Vn:
                l = Gc;
                break;
              case ol:
                l = bo;
                break;
              case La:
                l = Aa;
                break;
              case zu:
                l = qc;
                break;
              default:
                l = Aa;
                break;
            }
            Zn.onCommitFiberRoot(il, e, l, i);
          }
        } catch (u) {
          qi || (qi = !0, h("React instrumentation encountered an error: %s", u));
        }
    }
    function Ki(e) {
      if (Zn && typeof Zn.onPostCommitFiberRoot == "function")
        try {
          Zn.onPostCommitFiberRoot(il, e);
        } catch (t) {
          qi || (qi = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function _o(e) {
      if (Zn && typeof Zn.onCommitFiberUnmount == "function")
        try {
          Zn.onCommitFiberUnmount(il, e);
        } catch (t) {
          qi || (qi = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function qn(e) {
      if (typeof Tu == "function" && (wv(e), C(e)), Zn && typeof Zn.setStrictMode == "function")
        try {
          Zn.setStrictMode(il, e);
        } catch (t) {
          qi || (qi = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Tv(e) {
      we = e;
    }
    function al() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, i = 0; i < Vs; i++) {
          var l = fg(t);
          e.set(t, l), t *= 2;
        }
        return e;
      }
    }
    function Hl(e) {
      we !== null && typeof we.markCommitStarted == "function" && we.markCommitStarted(e);
    }
    function Kc() {
      we !== null && typeof we.markCommitStopped == "function" && we.markCommitStopped();
    }
    function bu(e) {
      we !== null && typeof we.markComponentRenderStarted == "function" && we.markComponentRenderStarted(e);
    }
    function di() {
      we !== null && typeof we.markComponentRenderStopped == "function" && we.markComponentRenderStopped();
    }
    function Il(e) {
      we !== null && typeof we.markComponentPassiveEffectMountStarted == "function" && we.markComponentPassiveEffectMountStarted(e);
    }
    function Xc() {
      we !== null && typeof we.markComponentPassiveEffectMountStopped == "function" && we.markComponentPassiveEffectMountStopped();
    }
    function Rv(e) {
      we !== null && typeof we.markComponentPassiveEffectUnmountStarted == "function" && we.markComponentPassiveEffectUnmountStarted(e);
    }
    function Jc() {
      we !== null && typeof we.markComponentPassiveEffectUnmountStopped == "function" && we.markComponentPassiveEffectUnmountStopped();
    }
    function bv(e) {
      we !== null && typeof we.markComponentLayoutEffectMountStarted == "function" && we.markComponentLayoutEffectMountStarted(e);
    }
    function js() {
      we !== null && typeof we.markComponentLayoutEffectMountStopped == "function" && we.markComponentLayoutEffectMountStopped();
    }
    function Sa(e) {
      we !== null && typeof we.markComponentLayoutEffectUnmountStarted == "function" && we.markComponentLayoutEffectUnmountStarted(e);
    }
    function _u() {
      we !== null && typeof we.markComponentLayoutEffectUnmountStopped == "function" && we.markComponentLayoutEffectUnmountStopped();
    }
    function Ps(e, t, i) {
      we !== null && typeof we.markComponentErrored == "function" && we.markComponentErrored(e, t, i);
    }
    function ko(e, t, i) {
      we !== null && typeof we.markComponentSuspended == "function" && we.markComponentSuspended(e, t, i);
    }
    function lp(e) {
      we !== null && typeof we.markLayoutEffectsStarted == "function" && we.markLayoutEffectsStarted(e);
    }
    function ku() {
      we !== null && typeof we.markLayoutEffectsStopped == "function" && we.markLayoutEffectsStopped();
    }
    function _v(e) {
      we !== null && typeof we.markPassiveEffectsStarted == "function" && we.markPassiveEffectsStarted(e);
    }
    function op() {
      we !== null && typeof we.markPassiveEffectsStopped == "function" && we.markPassiveEffectsStopped();
    }
    function kn(e) {
      we !== null && typeof we.markRenderStarted == "function" && we.markRenderStarted(e);
    }
    function Zc() {
      we !== null && typeof we.markRenderYielded == "function" && we.markRenderYielded();
    }
    function ef() {
      we !== null && typeof we.markRenderStopped == "function" && we.markRenderStopped();
    }
    function up(e) {
      we !== null && typeof we.markRenderScheduled == "function" && we.markRenderScheduled(e);
    }
    function tf(e, t) {
      we !== null && typeof we.markForceUpdateScheduled == "function" && we.markForceUpdateScheduled(e, t);
    }
    function Hs(e, t) {
      we !== null && typeof we.markStateUpdateScheduled == "function" && we.markStateUpdateScheduled(e, t);
    }
    var Pe = (
      /*                         */
      0
    ), Ve = (
      /*                 */
      1
    ), ft = (
      /*                    */
      2
    ), Dt = (
      /*               */
      8
    ), Oi = (
      /*              */
      16
    ), Du = Math.clz32 ? Math.clz32 : zr, Is = Math.log, cg = Math.LN2;
    function zr(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Is(t) / cg | 0) | 0;
    }
    var Vs = 31, ce = (
      /*                        */
      0
    ), Kn = (
      /*                          */
      0
    ), Qe = (
      /*                        */
      1
    ), Cr = (
      /*    */
      2
    ), Ai = (
      /*             */
      4
    ), ll = (
      /*            */
      8
    ), Xi = (
      /*                     */
      16
    ), Ou = (
      /*                */
      32
    ), Do = (
      /*                       */
      4194240
    ), Au = (
      /*                        */
      64
    ), nf = (
      /*                        */
      128
    ), rf = (
      /*                        */
      256
    ), af = (
      /*                        */
      512
    ), lf = (
      /*                        */
      1024
    ), of = (
      /*                        */
      2048
    ), Oo = (
      /*                        */
      4096
    ), uf = (
      /*                        */
      8192
    ), Lu = (
      /*                        */
      16384
    ), Nu = (
      /*                       */
      32768
    ), sf = (
      /*                       */
      65536
    ), $s = (
      /*                       */
      131072
    ), cf = (
      /*                       */
      262144
    ), ff = (
      /*                       */
      524288
    ), df = (
      /*                       */
      1048576
    ), pf = (
      /*                       */
      2097152
    ), Mu = (
      /*                            */
      130023424
    ), Ao = (
      /*                             */
      4194304
    ), hf = (
      /*                             */
      8388608
    ), vf = (
      /*                             */
      16777216
    ), sp = (
      /*                             */
      33554432
    ), mf = (
      /*                             */
      67108864
    ), kv = Ao, Ys = (
      /*          */
      134217728
    ), cp = (
      /*                          */
      268435455
    ), Fu = (
      /*               */
      268435456
    ), Vl = (
      /*                        */
      536870912
    ), Br = (
      /*                   */
      1073741824
    );
    function fg(e) {
      {
        if (e & Qe)
          return "Sync";
        if (e & Cr)
          return "InputContinuousHydration";
        if (e & Ai)
          return "InputContinuous";
        if (e & ll)
          return "DefaultHydration";
        if (e & Xi)
          return "Default";
        if (e & Ou)
          return "TransitionHydration";
        if (e & Do)
          return "Transition";
        if (e & Mu)
          return "Retry";
        if (e & Ys)
          return "SelectiveHydration";
        if (e & Fu)
          return "IdleHydration";
        if (e & Vl)
          return "Idle";
        if (e & Br)
          return "Offscreen";
      }
    }
    var yn = -1, yf = Au, pi = Ao;
    function Lo(e) {
      switch (In(e)) {
        case Qe:
          return Qe;
        case Cr:
          return Cr;
        case Ai:
          return Ai;
        case ll:
          return ll;
        case Xi:
          return Xi;
        case Ou:
          return Ou;
        case Au:
        case nf:
        case rf:
        case af:
        case lf:
        case of:
        case Oo:
        case uf:
        case Lu:
        case Nu:
        case sf:
        case $s:
        case cf:
        case ff:
        case df:
        case pf:
          return e & Do;
        case Ao:
        case hf:
        case vf:
        case sp:
        case mf:
          return e & Mu;
        case Ys:
          return Ys;
        case Fu:
          return Fu;
        case Vl:
          return Vl;
        case Br:
          return Br;
        default:
          return h("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function No(e, t) {
      var i = e.pendingLanes;
      if (i === ce)
        return ce;
      var l = ce, u = e.suspendedLanes, c = e.pingedLanes, v = i & cp;
      if (v !== ce) {
        var E = v & ~u;
        if (E !== ce)
          l = Lo(E);
        else {
          var x = v & c;
          x !== ce && (l = Lo(x));
        }
      } else {
        var _ = i & ~u;
        _ !== ce ? l = Lo(_) : c !== ce && (l = Lo(c));
      }
      if (l === ce)
        return ce;
      if (t !== ce && t !== l && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === ce) {
        var O = In(l), I = In(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          O >= I || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          O === Xi && (I & Do) !== ce
        )
          return t;
      }
      (l & Ai) !== ce && (l |= i & Xi);
      var P = e.entangledLanes;
      if (P !== ce)
        for (var q = e.entanglements, ee = l & P; ee > 0; ) {
          var ie = Yl(ee), be = 1 << ie;
          l |= q[ie], ee &= ~be;
        }
      return l;
    }
    function Dv(e, t) {
      for (var i = e.eventTimes, l = yn; t > 0; ) {
        var u = Yl(t), c = 1 << u, v = i[u];
        v > l && (l = v), t &= ~c;
      }
      return l;
    }
    function Ov(e, t) {
      switch (e) {
        case Qe:
        case Cr:
        case Ai:
          return t + 250;
        case ll:
        case Xi:
        case Ou:
        case Au:
        case nf:
        case rf:
        case af:
        case lf:
        case of:
        case Oo:
        case uf:
        case Lu:
        case Nu:
        case sf:
        case $s:
        case cf:
        case ff:
        case df:
        case pf:
          return t + 5e3;
        case Ao:
        case hf:
        case vf:
        case sp:
        case mf:
          return yn;
        case Ys:
        case Fu:
        case Vl:
        case Br:
          return yn;
        default:
          return h("Should have found matching lanes. This is a bug in React."), yn;
      }
    }
    function Av(e, t) {
      for (var i = e.pendingLanes, l = e.suspendedLanes, u = e.pingedLanes, c = e.expirationTimes, v = i; v > 0; ) {
        var E = Yl(v), x = 1 << E, _ = c[E];
        _ === yn ? ((x & l) === ce || (x & u) !== ce) && (c[E] = Ov(x, t)) : _ <= t && (e.expiredLanes |= x), v &= ~x;
      }
    }
    function fp(e) {
      return Lo(e.pendingLanes);
    }
    function $l(e) {
      var t = e.pendingLanes & ~Br;
      return t !== ce ? t : t & Br ? Br : ce;
    }
    function dp(e) {
      return (e & Qe) !== ce;
    }
    function Ws(e) {
      return (e & cp) !== ce;
    }
    function Lv(e) {
      return (e & Mu) === e;
    }
    function Nv(e) {
      var t = Qe | Ai | Xi;
      return (e & t) === ce;
    }
    function Mv(e) {
      return (e & Do) === e;
    }
    function Qs(e, t) {
      var i = Cr | Ai | ll | Xi;
      return (t & i) !== ce;
    }
    function Fv(e, t) {
      return (t & e.expiredLanes) !== ce;
    }
    function pp(e) {
      return (e & Do) !== ce;
    }
    function Uv() {
      var e = yf;
      return yf <<= 1, (yf & Do) === ce && (yf = Au), e;
    }
    function hi() {
      var e = pi;
      return pi <<= 1, (pi & Mu) === ce && (pi = Ao), e;
    }
    function In(e) {
      return e & -e;
    }
    function Uu(e) {
      return In(e);
    }
    function Yl(e) {
      return 31 - Du(e);
    }
    function gf(e) {
      return Yl(e);
    }
    function vi(e, t) {
      return (e & t) !== ce;
    }
    function Mo(e, t) {
      return (e & t) === t;
    }
    function yt(e, t) {
      return e | t;
    }
    function Gs(e, t) {
      return e & ~t;
    }
    function Sf(e, t) {
      return e & t;
    }
    function dg(e) {
      return e;
    }
    function zv(e, t) {
      return e !== Kn && e < t ? e : t;
    }
    function qs(e) {
      for (var t = [], i = 0; i < Vs; i++)
        t.push(e);
      return t;
    }
    function Fo(e, t, i) {
      e.pendingLanes |= t, t !== Vl && (e.suspendedLanes = ce, e.pingedLanes = ce);
      var l = e.eventTimes, u = gf(t);
      l[u] = i;
    }
    function Bv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var i = e.expirationTimes, l = t; l > 0; ) {
        var u = Yl(l), c = 1 << u;
        i[u] = yn, l &= ~c;
      }
    }
    function Ef(e, t, i) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Cf(e, t) {
      var i = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ce, e.pingedLanes = ce, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var l = e.entanglements, u = e.eventTimes, c = e.expirationTimes, v = i; v > 0; ) {
        var E = Yl(v), x = 1 << E;
        l[E] = ce, u[E] = yn, c[E] = yn, v &= ~x;
      }
    }
    function hp(e, t) {
      for (var i = e.entangledLanes |= t, l = e.entanglements, u = i; u; ) {
        var c = Yl(u), v = 1 << c;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        l[c] & t && (l[c] |= t), u &= ~v;
      }
    }
    function jv(e, t) {
      var i = In(t), l;
      switch (i) {
        case Ai:
          l = Cr;
          break;
        case Xi:
          l = ll;
          break;
        case Au:
        case nf:
        case rf:
        case af:
        case lf:
        case of:
        case Oo:
        case uf:
        case Lu:
        case Nu:
        case sf:
        case $s:
        case cf:
        case ff:
        case df:
        case pf:
        case Ao:
        case hf:
        case vf:
        case sp:
        case mf:
          l = Ou;
          break;
        case Vl:
          l = Fu;
          break;
        default:
          l = Kn;
          break;
      }
      return (l & (e.suspendedLanes | t)) !== Kn ? Kn : l;
    }
    function xf(e, t, i) {
      if (Di)
        for (var l = e.pendingUpdatersLaneMap; i > 0; ) {
          var u = gf(i), c = 1 << u, v = l[u];
          v.add(t), i &= ~c;
        }
    }
    function vp(e, t) {
      if (Di)
        for (var i = e.pendingUpdatersLaneMap, l = e.memoizedUpdaters; t > 0; ) {
          var u = gf(t), c = 1 << u, v = i[u];
          v.size > 0 && (v.forEach(function(E) {
            var x = E.alternate;
            (x === null || !l.has(x)) && l.add(E);
          }), v.clear()), t &= ~c;
        }
    }
    function Ks(e, t) {
      return null;
    }
    var Vn = Qe, ol = Ai, La = Xi, zu = Vl, Bu = Kn;
    function Ji() {
      return Bu;
    }
    function jn(e) {
      Bu = e;
    }
    function jr(e, t) {
      var i = Bu;
      try {
        return Bu = e, t();
      } finally {
        Bu = i;
      }
    }
    function pg(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function hg(e, t) {
      return e > t ? e : t;
    }
    function ju(e, t) {
      return e !== 0 && e < t;
    }
    function xr(e) {
      var t = In(e);
      return ju(Vn, t) ? ju(ol, t) ? Ws(t) ? La : zu : ol : Vn;
    }
    function wf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ne;
    function Pu(e) {
      Ne = e;
    }
    function mp(e) {
      Ne(e);
    }
    var Tf;
    function vg(e) {
      Tf = e;
    }
    var Hu;
    function Rf(e) {
      Hu = e;
    }
    var bf;
    function Pv(e) {
      bf = e;
    }
    var yp;
    function Hv(e) {
      yp = e;
    }
    var Xs = !1, Iu = [], Dn = null, vr = null, Wr = null, Vu = /* @__PURE__ */ new Map(), $u = /* @__PURE__ */ new Map(), mr = [], Iv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Na(e) {
      return Iv.indexOf(e) > -1;
    }
    function mg(e, t, i, l, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: i,
        nativeEvent: u,
        targetContainers: [l]
      };
    }
    function gp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Dn = null;
          break;
        case "dragenter":
        case "dragleave":
          vr = null;
          break;
        case "mouseover":
        case "mouseout":
          Wr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var i = t.pointerId;
          Vu.delete(i);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var l = t.pointerId;
          $u.delete(l);
          break;
        }
      }
    }
    function Yu(e, t, i, l, u, c) {
      if (e === null || e.nativeEvent !== c) {
        var v = mg(t, i, l, u, c);
        if (t !== null) {
          var E = es(t);
          E !== null && Tf(E);
        }
        return v;
      }
      e.eventSystemFlags |= l;
      var x = e.targetContainers;
      return u !== null && x.indexOf(u) === -1 && x.push(u), e;
    }
    function Vv(e, t, i, l, u) {
      switch (t) {
        case "focusin": {
          var c = u;
          return Dn = Yu(Dn, e, t, i, l, c), !0;
        }
        case "dragenter": {
          var v = u;
          return vr = Yu(vr, e, t, i, l, v), !0;
        }
        case "mouseover": {
          var E = u;
          return Wr = Yu(Wr, e, t, i, l, E), !0;
        }
        case "pointerover": {
          var x = u, _ = x.pointerId;
          return Vu.set(_, Yu(Vu.get(_) || null, e, t, i, l, x)), !0;
        }
        case "gotpointercapture": {
          var O = u, I = O.pointerId;
          return $u.set(I, Yu($u.get(I) || null, e, t, i, l, O)), !0;
        }
      }
      return !1;
    }
    function Sp(e) {
      var t = sc(e.target);
      if (t !== null) {
        var i = _i(t);
        if (i !== null) {
          var l = i.tag;
          if (l === Ye) {
            var u = ep(i);
            if (u !== null) {
              e.blockedOn = u, yp(e.priority, function() {
                Hu(i);
              });
              return;
            }
          } else if (l === N) {
            var c = i.stateNode;
            if (wf(c)) {
              e.blockedOn = $c(i);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function yg(e) {
      for (var t = bf(), i = {
        blockedOn: null,
        target: e,
        priority: t
      }, l = 0; l < mr.length && ju(t, mr[l].priority); l++)
        ;
      mr.splice(l, 0, i), l === 0 && Sp(i);
    }
    function Uo(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var i = t[0], l = Pr(e.domEventName, e.eventSystemFlags, i, e.nativeEvent);
        if (l === null) {
          var u = e.nativeEvent, c = new u.constructor(u.type, u);
          As(c), u.target.dispatchEvent(c), lg();
        } else {
          var v = es(l);
          return v !== null && Tf(v), e.blockedOn = l, !1;
        }
        t.shift();
      }
      return !0;
    }
    function _f(e, t, i) {
      Uo(e) && i.delete(t);
    }
    function Zi() {
      Xs = !1, Dn !== null && Uo(Dn) && (Dn = null), vr !== null && Uo(vr) && (vr = null), Wr !== null && Uo(Wr) && (Wr = null), Vu.forEach(_f), $u.forEach(_f);
    }
    function Lt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Xs || (Xs = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, Zi)));
    }
    function Pn(e) {
      if (Iu.length > 0) {
        Lt(Iu[0], e);
        for (var t = 1; t < Iu.length; t++) {
          var i = Iu[t];
          i.blockedOn === e && (i.blockedOn = null);
        }
      }
      Dn !== null && Lt(Dn, e), vr !== null && Lt(vr, e), Wr !== null && Lt(Wr, e);
      var l = function(E) {
        return Lt(E, e);
      };
      Vu.forEach(l), $u.forEach(l);
      for (var u = 0; u < mr.length; u++) {
        var c = mr[u];
        c.blockedOn === e && (c.blockedOn = null);
      }
      for (; mr.length > 0; ) {
        var v = mr[0];
        if (v.blockedOn !== null)
          break;
        Sp(v), v.blockedOn === null && mr.shift();
      }
    }
    var xn = d.ReactCurrentBatchConfig, er = !0;
    function mi(e) {
      er = !!e;
    }
    function Wu() {
      return er;
    }
    function tr(e, t, i) {
      var l = kf(t), u;
      switch (l) {
        case Vn:
          u = Js;
          break;
        case ol:
          u = zo;
          break;
        case La:
        default:
          u = Qu;
          break;
      }
      return u.bind(null, t, i, e);
    }
    function Js(e, t, i, l) {
      var u = Ji(), c = xn.transition;
      xn.transition = null;
      try {
        jn(Vn), Qu(e, t, i, l);
      } finally {
        jn(u), xn.transition = c;
      }
    }
    function zo(e, t, i, l) {
      var u = Ji(), c = xn.transition;
      xn.transition = null;
      try {
        jn(ol), Qu(e, t, i, l);
      } finally {
        jn(u), xn.transition = c;
      }
    }
    function Qu(e, t, i, l) {
      er && Ep(e, t, i, l);
    }
    function Ep(e, t, i, l) {
      var u = Pr(e, t, i, l);
      if (u === null) {
        Mg(e, t, l, Wl, i), gp(e, l);
        return;
      }
      if (Vv(u, e, t, i, l)) {
        l.stopPropagation();
        return;
      }
      if (gp(e, l), t & Eo && Na(e)) {
        for (; u !== null; ) {
          var c = es(u);
          c !== null && mp(c);
          var v = Pr(e, t, i, l);
          if (v === null && Mg(e, t, l, Wl, i), v === u)
            break;
          u = v;
        }
        u !== null && l.stopPropagation();
        return;
      }
      Mg(e, t, l, null, i);
    }
    var Wl = null;
    function Pr(e, t, i, l) {
      Wl = null;
      var u = jc(l), c = sc(u);
      if (c !== null) {
        var v = _i(c);
        if (v === null)
          c = null;
        else {
          var E = v.tag;
          if (E === Ye) {
            var x = ep(v);
            if (x !== null)
              return x;
            c = null;
          } else if (E === N) {
            var _ = v.stateNode;
            if (wf(_))
              return $c(v);
            c = null;
          } else
            v !== c && (c = null);
        }
      }
      return Wl = c, null;
    }
    function kf(e) {
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
          return Vn;
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
          return ol;
        case "message": {
          var t = rp();
          switch (t) {
            case Gc:
              return Vn;
            case bo:
              return ol;
            case Aa:
            case xv:
              return La;
            case qc:
              return zu;
            default:
              return La;
          }
        }
        default:
          return La;
      }
    }
    function Gu(e, t, i) {
      return e.addEventListener(t, i, !1), i;
    }
    function ul(e, t, i) {
      return e.addEventListener(t, i, !0), i;
    }
    function Df(e, t, i, l) {
      return e.addEventListener(t, i, {
        capture: !0,
        passive: l
      }), i;
    }
    function Cp(e, t, i, l) {
      return e.addEventListener(t, i, {
        passive: l
      }), i;
    }
    var ea = null, qu = null, ta = null;
    function Of(e) {
      return ea = e, qu = ec(), !0;
    }
    function Zs() {
      ea = null, qu = null, ta = null;
    }
    function Af() {
      if (ta)
        return ta;
      var e, t = qu, i = t.length, l, u = ec(), c = u.length;
      for (e = 0; e < i && t[e] === u[e]; e++)
        ;
      var v = i - e;
      for (l = 1; l <= v && t[i - l] === u[c - l]; l++)
        ;
      var E = l > 1 ? 1 - l : void 0;
      return ta = u.slice(e, E), ta;
    }
    function ec() {
      return "value" in ea ? ea.value : ea.textContent;
    }
    function Bo(e) {
      var t, i = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && i === 13 && (t = 13)) : t = i, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function yr() {
      return !0;
    }
    function sl() {
      return !1;
    }
    function Nn(e) {
      function t(i, l, u, c, v) {
        this._reactName = i, this._targetInst = u, this.type = l, this.nativeEvent = c, this.target = v, this.currentTarget = null;
        for (var E in e)
          if (e.hasOwnProperty(E)) {
            var x = e[E];
            x ? this[E] = x(c) : this[E] = c[E];
          }
        var _ = c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1;
        return _ ? this.isDefaultPrevented = yr : this.isDefaultPrevented = sl, this.isPropagationStopped = sl, this;
      }
      return Rt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = yr);
        },
        stopPropagation: function() {
          var i = this.nativeEvent;
          i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = yr);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: yr
      }), t;
    }
    var nr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Lf = Nn(nr), jo = Rt({}, nr, {
      view: 0,
      detail: 0
    }), xp = Nn(jo), wp, Ma, Ku;
    function Tp(e) {
      e !== Ku && (Ku && e.type === "mousemove" ? (wp = e.screenX - Ku.screenX, Ma = e.screenY - Ku.screenY) : (wp = 0, Ma = 0), Ku = e);
    }
    var Fa = Rt({}, jo, {
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
      getModifierState: Rp,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Tp(e), wp);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ma;
      }
    }), Nf = Nn(Fa), Po = Rt({}, Fa, {
      dataTransfer: 0
    }), $v = Nn(Po), Yv = Rt({}, jo, {
      relatedTarget: 0
    }), tc = Nn(Yv), Mf = Rt({}, nr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), gg = Nn(Mf), Sg = Rt({}, nr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Wv = Nn(Sg), Qv = Rt({}, nr, {
      data: 0
    }), Ql = Nn(Qv), Eg = Ql, Xu = {
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
      MozPrintableKey: "Unidentified"
    }, Gv = {
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
      224: "Meta"
    };
    function Hn(e) {
      if (e.key) {
        var t = Xu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var i = Bo(e);
        return i === 13 ? "Enter" : String.fromCharCode(i);
      }
      return e.type === "keydown" || e.type === "keyup" ? Gv[e.keyCode] || "Unidentified" : "";
    }
    var Cg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function qv(e) {
      var t = this, i = t.nativeEvent;
      if (i.getModifierState)
        return i.getModifierState(e);
      var l = Cg[e];
      return l ? !!i[l] : !1;
    }
    function Rp(e) {
      return qv;
    }
    var xg = Rt({}, jo, {
      key: Hn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Rp,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Bo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Bo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Kv = Nn(xg), Xv = Rt({}, Fa, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Jv = Nn(Xv), na = Rt({}, jo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Rp
    }), bp = Nn(na), wg = Rt({}, nr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Gl = Nn(wg), Ff = Rt({}, Fa, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Ho = Nn(Ff), Uf = [9, 13, 27, 32], zf = 229, nc = vn && "CompositionEvent" in window, rc = null;
    vn && "documentMode" in document && (rc = document.documentMode);
    var _p = vn && "TextEvent" in window && !rc, Zv = vn && (!nc || rc && rc > 8 && rc <= 11), kp = 32, Dp = String.fromCharCode(kp);
    function Bf() {
      On("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), On("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), On("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), On("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var ic = !1;
    function em(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Op(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Tg(e, t) {
      return e === "keydown" && t.keyCode === zf;
    }
    function Ap(e, t) {
      switch (e) {
        case "keyup":
          return Uf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== zf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function jf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function ac(e) {
      return e.locale === "ko";
    }
    var ql = !1;
    function Pf(e, t, i, l, u) {
      var c, v;
      if (nc ? c = Op(t) : ql ? Ap(t, l) && (c = "onCompositionEnd") : Tg(t, l) && (c = "onCompositionStart"), !c)
        return null;
      Zv && !ac(l) && (!ql && c === "onCompositionStart" ? ql = Of(u) : c === "onCompositionEnd" && ql && (v = Af()));
      var E = lm(i, c);
      if (E.length > 0) {
        var x = new Ql(c, t, null, l, u);
        if (e.push({
          event: x,
          listeners: E
        }), v)
          x.data = v;
        else {
          var _ = jf(l);
          _ !== null && (x.data = _);
        }
      }
    }
    function tm(e, t) {
      switch (e) {
        case "compositionend":
          return jf(t);
        case "keypress":
          var i = t.which;
          return i !== kp ? null : (ic = !0, Dp);
        case "textInput":
          var l = t.data;
          return l === Dp && ic ? null : l;
        default:
          return null;
      }
    }
    function Rg(e, t) {
      if (ql) {
        if (e === "compositionend" || !nc && Ap(e, t)) {
          var i = Af();
          return Zs(), ql = !1, i;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!em(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Zv && !ac(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Hf(e, t, i, l, u) {
      var c;
      if (_p ? c = tm(t, l) : c = Rg(t, l), !c)
        return null;
      var v = lm(i, "onBeforeInput");
      if (v.length > 0) {
        var E = new Eg("onBeforeInput", "beforeinput", null, l, u);
        e.push({
          event: E,
          listeners: v
        }), E.data = c;
      }
    }
    function bg(e, t, i, l, u, c, v) {
      Pf(e, t, i, l, u), Hf(e, t, i, l, u);
    }
    var lc = {
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
      week: !0
    };
    function nm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!lc[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function If(e) {
      if (!vn)
        return !1;
      var t = "on" + e, i = t in document;
      if (!i) {
        var l = document.createElement("div");
        l.setAttribute(t, "return;"), i = typeof l[t] == "function";
      }
      return i;
    }
    function n() {
      On("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, i, l) {
      Pc(l);
      var u = lm(t, "onChange");
      if (u.length > 0) {
        var c = new Lf("onChange", "change", null, i, l);
        e.push({
          event: c,
          listeners: u
        });
      }
    }
    var o = null, s = null;
    function p(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function y(e) {
      var t = [];
      r(t, s, e, jc(e)), Wd(R, t);
    }
    function R(e) {
      p1(e, 0);
    }
    function M(e) {
      var t = Gf(e);
      if (pu(t))
        return e;
    }
    function j(e, t) {
      if (e === "change")
        return t;
    }
    var Z = !1;
    vn && (Z = If("input") && (!document.documentMode || document.documentMode > 9));
    function pe(e, t) {
      o = e, s = t, o.attachEvent("onpropertychange", fe);
    }
    function he() {
      o && (o.detachEvent("onpropertychange", fe), o = null, s = null);
    }
    function fe(e) {
      e.propertyName === "value" && M(s) && y(e);
    }
    function ke(e, t, i) {
      e === "focusin" ? (he(), pe(t, i)) : e === "focusout" && he();
    }
    function Me(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return M(s);
    }
    function ze(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function $n(e, t) {
      if (e === "click")
        return M(t);
    }
    function Y(e, t) {
      if (e === "input" || e === "change")
        return M(t);
    }
    function H(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || rt(e, "number", e.value);
    }
    function G(e, t, i, l, u, c, v) {
      var E = i ? Gf(i) : window, x, _;
      if (p(E) ? x = j : nm(E) ? Z ? x = Y : (x = Me, _ = ke) : ze(E) && (x = $n), x) {
        var O = x(t, i);
        if (O) {
          r(e, O, l, u);
          return;
        }
      }
      _ && _(t, E, i), t === "focusout" && H(E);
    }
    function Se() {
      or("onMouseEnter", ["mouseout", "mouseover"]), or("onMouseLeave", ["mouseout", "mouseover"]), or("onPointerEnter", ["pointerout", "pointerover"]), or("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function He(e, t, i, l, u, c, v) {
      var E = t === "mouseover" || t === "pointerover", x = t === "mouseout" || t === "pointerout";
      if (E && !vv(l)) {
        var _ = l.relatedTarget || l.fromElement;
        if (_ && (sc(_) || Yp(_)))
          return;
      }
      if (!(!x && !E)) {
        var O;
        if (u.window === u)
          O = u;
        else {
          var I = u.ownerDocument;
          I ? O = I.defaultView || I.parentWindow : O = window;
        }
        var P, q;
        if (x) {
          var ee = l.relatedTarget || l.toElement;
          if (P = i, q = ee ? sc(ee) : null, q !== null) {
            var ie = _i(q);
            (q !== ie || q.tag !== K && q.tag !== te) && (q = null);
          }
        } else
          P = null, q = i;
        if (P !== q) {
          var be = Nf, et = "onMouseLeave", $e = "onMouseEnter", Pt = "mouse";
          (t === "pointerout" || t === "pointerover") && (be = Jv, et = "onPointerLeave", $e = "onPointerEnter", Pt = "pointer");
          var Nt = P == null ? O : Gf(P), W = q == null ? O : Gf(q), ae = new be(et, Pt + "leave", P, l, u);
          ae.target = Nt, ae.relatedTarget = W;
          var Q = null, ve = sc(u);
          if (ve === i) {
            var Oe = new be($e, Pt + "enter", q, l, u);
            Oe.target = W, Oe.relatedTarget = Nt, Q = Oe;
          }
          eb(e, ae, Q, P, q);
        }
      }
    }
    function lt(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Fe = typeof Object.is == "function" ? Object.is : lt;
    function ut(e, t) {
      if (Fe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var i = Object.keys(e), l = Object.keys(t);
      if (i.length !== l.length)
        return !1;
      for (var u = 0; u < i.length; u++) {
        var c = i[u];
        if (!Wn.call(t, c) || !Fe(e[c], t[c]))
          return !1;
      }
      return !0;
    }
    function rr(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Qt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function cl(e, t) {
      for (var i = rr(e), l = 0, u = 0; i; ) {
        if (i.nodeType === Ja) {
          if (u = l + i.textContent.length, l <= t && u >= t)
            return {
              node: i,
              offset: t - l
            };
          l = u;
        }
        i = rr(Qt(i));
      }
    }
    function _g(e) {
      var t = e.ownerDocument, i = t && t.defaultView || window, l = i.getSelection && i.getSelection();
      if (!l || l.rangeCount === 0)
        return null;
      var u = l.anchorNode, c = l.anchorOffset, v = l.focusNode, E = l.focusOffset;
      try {
        u.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return MR(e, u, c, v, E);
    }
    function MR(e, t, i, l, u) {
      var c = 0, v = -1, E = -1, x = 0, _ = 0, O = e, I = null;
      e:
        for (; ; ) {
          for (var P = null; O === t && (i === 0 || O.nodeType === Ja) && (v = c + i), O === l && (u === 0 || O.nodeType === Ja) && (E = c + u), O.nodeType === Ja && (c += O.nodeValue.length), (P = O.firstChild) !== null; )
            I = O, O = P;
          for (; ; ) {
            if (O === e)
              break e;
            if (I === t && ++x === i && (v = c), I === l && ++_ === u && (E = c), (P = O.nextSibling) !== null)
              break;
            O = I, I = O.parentNode;
          }
          O = P;
        }
      return v === -1 || E === -1 ? null : {
        start: v,
        end: E
      };
    }
    function FR(e, t) {
      var i = e.ownerDocument || document, l = i && i.defaultView || window;
      if (l.getSelection) {
        var u = l.getSelection(), c = e.textContent.length, v = Math.min(t.start, c), E = t.end === void 0 ? v : Math.min(t.end, c);
        if (!u.extend && v > E) {
          var x = E;
          E = v, v = x;
        }
        var _ = cl(e, v), O = cl(e, E);
        if (_ && O) {
          if (u.rangeCount === 1 && u.anchorNode === _.node && u.anchorOffset === _.offset && u.focusNode === O.node && u.focusOffset === O.offset)
            return;
          var I = i.createRange();
          I.setStart(_.node, _.offset), u.removeAllRanges(), v > E ? (u.addRange(I), u.extend(O.node, O.offset)) : (I.setEnd(O.node, O.offset), u.addRange(I));
        }
      }
    }
    function t1(e) {
      return e && e.nodeType === Ja;
    }
    function n1(e, t) {
      return !e || !t ? !1 : e === t ? !0 : t1(e) ? !1 : t1(t) ? n1(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function UR(e) {
      return e && e.ownerDocument && n1(e.ownerDocument.documentElement, e);
    }
    function zR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function r1() {
      for (var e = window, t = Nl(); t instanceof e.HTMLIFrameElement; ) {
        if (zR(t))
          e = t.contentWindow;
        else
          return t;
        t = Nl(e.document);
      }
      return t;
    }
    function kg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function BR() {
      var e = r1();
      return {
        focusedElem: e,
        selectionRange: kg(e) ? PR(e) : null
      };
    }
    function jR(e) {
      var t = r1(), i = e.focusedElem, l = e.selectionRange;
      if (t !== i && UR(i)) {
        l !== null && kg(i) && HR(i, l);
        for (var u = [], c = i; c = c.parentNode; )
          c.nodeType === li && u.push({
            element: c,
            left: c.scrollLeft,
            top: c.scrollTop
          });
        typeof i.focus == "function" && i.focus();
        for (var v = 0; v < u.length; v++) {
          var E = u[v];
          E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
        }
      }
    }
    function PR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = _g(e), t || {
        start: 0,
        end: 0
      };
    }
    function HR(e, t) {
      var i = t.start, l = t.end;
      l === void 0 && (l = i), "selectionStart" in e ? (e.selectionStart = i, e.selectionEnd = Math.min(l, e.value.length)) : FR(e, t);
    }
    var IR = vn && "documentMode" in document && document.documentMode <= 11;
    function VR() {
      On("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Vf = null, Dg = null, Lp = null, Og = !1;
    function $R(e) {
      if ("selectionStart" in e && kg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, i = t.getSelection();
      return {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      };
    }
    function YR(e) {
      return e.window === e ? e.document : e.nodeType === ma ? e : e.ownerDocument;
    }
    function i1(e, t, i) {
      var l = YR(i);
      if (!(Og || Vf == null || Vf !== Nl(l))) {
        var u = $R(Vf);
        if (!Lp || !ut(Lp, u)) {
          Lp = u;
          var c = lm(Dg, "onSelect");
          if (c.length > 0) {
            var v = new Lf("onSelect", "select", null, t, i);
            e.push({
              event: v,
              listeners: c
            }), v.target = Vf;
          }
        }
      }
    }
    function WR(e, t, i, l, u, c, v) {
      var E = i ? Gf(i) : window;
      switch (t) {
        case "focusin":
          (nm(E) || E.contentEditable === "true") && (Vf = E, Dg = i, Lp = null);
          break;
        case "focusout":
          Vf = null, Dg = null, Lp = null;
          break;
        case "mousedown":
          Og = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Og = !1, i1(e, l, u);
          break;
        case "selectionchange":
          if (IR)
            break;
        case "keydown":
        case "keyup":
          i1(e, l, u);
      }
    }
    function rm(e, t) {
      var i = {};
      return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
    }
    var $f = {
      animationend: rm("Animation", "AnimationEnd"),
      animationiteration: rm("Animation", "AnimationIteration"),
      animationstart: rm("Animation", "AnimationStart"),
      transitionend: rm("Transition", "TransitionEnd")
    }, Ag = {}, a1 = {};
    vn && (a1 = document.createElement("div").style, "AnimationEvent" in window || (delete $f.animationend.animation, delete $f.animationiteration.animation, delete $f.animationstart.animation), "TransitionEvent" in window || delete $f.transitionend.transition);
    function im(e) {
      if (Ag[e])
        return Ag[e];
      if (!$f[e])
        return e;
      var t = $f[e];
      for (var i in t)
        if (t.hasOwnProperty(i) && i in a1)
          return Ag[e] = t[i];
      return e;
    }
    var l1 = im("animationend"), o1 = im("animationiteration"), u1 = im("animationstart"), s1 = im("transitionend"), c1 = /* @__PURE__ */ new Map(), f1 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Ju(e, t) {
      c1.set(e, t), On(t, [e]);
    }
    function QR() {
      for (var e = 0; e < f1.length; e++) {
        var t = f1[e], i = t.toLowerCase(), l = t[0].toUpperCase() + t.slice(1);
        Ju(i, "on" + l);
      }
      Ju(l1, "onAnimationEnd"), Ju(o1, "onAnimationIteration"), Ju(u1, "onAnimationStart"), Ju("dblclick", "onDoubleClick"), Ju("focusin", "onFocus"), Ju("focusout", "onBlur"), Ju(s1, "onTransitionEnd");
    }
    function GR(e, t, i, l, u, c, v) {
      var E = c1.get(t);
      if (E !== void 0) {
        var x = Lf, _ = t;
        switch (t) {
          case "keypress":
            if (Bo(l) === 0)
              return;
          case "keydown":
          case "keyup":
            x = Kv;
            break;
          case "focusin":
            _ = "focus", x = tc;
            break;
          case "focusout":
            _ = "blur", x = tc;
            break;
          case "beforeblur":
          case "afterblur":
            x = tc;
            break;
          case "click":
            if (l.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Nf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = $v;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = bp;
            break;
          case l1:
          case o1:
          case u1:
            x = gg;
            break;
          case s1:
            x = Gl;
            break;
          case "scroll":
            x = xp;
            break;
          case "wheel":
            x = Ho;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Wv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Jv;
            break;
        }
        var O = (c & Eo) !== 0;
        {
          var I = !O && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", P = JR(i, E, l.type, O, I);
          if (P.length > 0) {
            var q = new x(E, _, null, l, u);
            e.push({
              event: q,
              listeners: P
            });
          }
        }
      }
    }
    QR(), Se(), n(), VR(), Bf();
    function qR(e, t, i, l, u, c, v) {
      GR(e, t, i, l, u, c);
      var E = (c & ag) === 0;
      E && (He(e, t, i, l, u), G(e, t, i, l, u), WR(e, t, i, l, u), bg(e, t, i, l, u));
    }
    var Np = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Lg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Np));
    function d1(e, t, i) {
      var l = e.type || "unknown-event";
      e.currentTarget = i, nl(l, t, void 0, e), e.currentTarget = null;
    }
    function KR(e, t, i) {
      var l;
      if (i)
        for (var u = t.length - 1; u >= 0; u--) {
          var c = t[u], v = c.instance, E = c.currentTarget, x = c.listener;
          if (v !== l && e.isPropagationStopped())
            return;
          d1(e, x, E), l = v;
        }
      else
        for (var _ = 0; _ < t.length; _++) {
          var O = t[_], I = O.instance, P = O.currentTarget, q = O.listener;
          if (I !== l && e.isPropagationStopped())
            return;
          d1(e, q, P), l = I;
        }
    }
    function p1(e, t) {
      for (var i = (t & Eo) !== 0, l = 0; l < e.length; l++) {
        var u = e[l], c = u.event, v = u.listeners;
        KR(c, v, i);
      }
      Kd();
    }
    function XR(e, t, i, l, u) {
      var c = jc(i), v = [];
      qR(v, e, l, i, c, t), p1(v, t);
    }
    function Mn(e, t) {
      Lg.has(e) || h('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var i = !1, l = __(t), u = tb(e);
      l.has(u) || (h1(t, e, Ds, i), l.add(u));
    }
    function Ng(e, t, i) {
      Lg.has(e) && !t && h('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var l = 0;
      t && (l |= Eo), h1(i, e, l, t);
    }
    var am = "_reactListening" + Math.random().toString(36).slice(2);
    function Mp(e) {
      if (!e[am]) {
        e[am] = !0, Et.forEach(function(i) {
          i !== "selectionchange" && (Lg.has(i) || Ng(i, !1, e), Ng(i, !0, e));
        });
        var t = e.nodeType === ma ? e : e.ownerDocument;
        t !== null && (t[am] || (t[am] = !0, Ng("selectionchange", !1, t)));
      }
    }
    function h1(e, t, i, l, u) {
      var c = tr(e, t, i), v = void 0;
      Ms && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, l ? v !== void 0 ? Df(e, t, c, v) : ul(e, t, c) : v !== void 0 ? Cp(e, t, c, v) : Gu(e, t, c);
    }
    function v1(e, t) {
      return e === t || e.nodeType === Gn && e.parentNode === t;
    }
    function Mg(e, t, i, l, u) {
      var c = l;
      if (!(t & el) && !(t & Ds)) {
        var v = u;
        if (l !== null) {
          var E = l;
          e:
            for (; ; ) {
              if (E === null)
                return;
              var x = E.tag;
              if (x === N || x === J) {
                var _ = E.stateNode.containerInfo;
                if (v1(_, v))
                  break;
                if (x === J)
                  for (var O = E.return; O !== null; ) {
                    var I = O.tag;
                    if (I === N || I === J) {
                      var P = O.stateNode.containerInfo;
                      if (v1(P, v))
                        return;
                    }
                    O = O.return;
                  }
                for (; _ !== null; ) {
                  var q = sc(_);
                  if (q === null)
                    return;
                  var ee = q.tag;
                  if (ee === K || ee === te) {
                    E = c = q;
                    continue e;
                  }
                  _ = _.parentNode;
                }
              }
              E = E.return;
            }
        }
      }
      Wd(function() {
        return XR(e, t, i, c);
      });
    }
    function Fp(e, t, i) {
      return {
        instance: e,
        listener: t,
        currentTarget: i
      };
    }
    function JR(e, t, i, l, u, c) {
      for (var v = t !== null ? t + "Capture" : null, E = l ? v : t, x = [], _ = e, O = null; _ !== null; ) {
        var I = _, P = I.stateNode, q = I.tag;
        if (q === K && P !== null && (O = P, E !== null)) {
          var ee = xo(_, E);
          ee != null && x.push(Fp(_, ee, O));
        }
        if (u)
          break;
        _ = _.return;
      }
      return x;
    }
    function lm(e, t) {
      for (var i = t + "Capture", l = [], u = e; u !== null; ) {
        var c = u, v = c.stateNode, E = c.tag;
        if (E === K && v !== null) {
          var x = v, _ = xo(u, i);
          _ != null && l.unshift(Fp(u, _, x));
          var O = xo(u, t);
          O != null && l.push(Fp(u, O, x));
        }
        u = u.return;
      }
      return l;
    }
    function Yf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== K);
      return e || null;
    }
    function ZR(e, t) {
      for (var i = e, l = t, u = 0, c = i; c; c = Yf(c))
        u++;
      for (var v = 0, E = l; E; E = Yf(E))
        v++;
      for (; u - v > 0; )
        i = Yf(i), u--;
      for (; v - u > 0; )
        l = Yf(l), v--;
      for (var x = u; x--; ) {
        if (i === l || l !== null && i === l.alternate)
          return i;
        i = Yf(i), l = Yf(l);
      }
      return null;
    }
    function m1(e, t, i, l, u) {
      for (var c = t._reactName, v = [], E = i; E !== null && E !== l; ) {
        var x = E, _ = x.alternate, O = x.stateNode, I = x.tag;
        if (_ !== null && _ === l)
          break;
        if (I === K && O !== null) {
          var P = O;
          if (u) {
            var q = xo(E, c);
            q != null && v.unshift(Fp(E, q, P));
          } else if (!u) {
            var ee = xo(E, c);
            ee != null && v.push(Fp(E, ee, P));
          }
        }
        E = E.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function eb(e, t, i, l, u) {
      var c = l && u ? ZR(l, u) : null;
      l !== null && m1(e, t, l, c, !1), u !== null && i !== null && m1(e, i, u, c, !0);
    }
    function tb(e, t) {
      return e + "__bubble";
    }
    var ra = !1, Up = "dangerouslySetInnerHTML", om = "suppressContentEditableWarning", Zu = "suppressHydrationWarning", y1 = "autoFocus", oc = "children", uc = "style", um = "__html", Fg, sm, zp, g1, cm, S1, E1;
    Fg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, sm = function(e, t) {
      Bc(e, t), Hd(e, t), hv(e, t, {
        registrationNameDependencies: Ct,
        possibleRegistrationNames: rn
      });
    }, S1 = vn && !document.documentMode, zp = function(e, t, i) {
      if (!ra) {
        var l = fm(i), u = fm(t);
        u !== l && (ra = !0, h("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(l)));
      }
    }, g1 = function(e) {
      if (!ra) {
        ra = !0;
        var t = [];
        e.forEach(function(i) {
          t.push(i);
        }), h("Extra attributes from the server: %s", t);
      }
    }, cm = function(e, t) {
      t === !1 ? h("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : h("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, E1 = function(e, t) {
      var i = e.namespaceURI === Xa ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return i.innerHTML = t, i.innerHTML;
    };
    var nb = /\r\n?/g, rb = /\u0000|\uFFFD/g;
    function fm(e) {
      Mr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(nb, `
`).replace(rb, "");
    }
    function dm(e, t, i, l) {
      var u = fm(t), c = fm(e);
      if (c !== u && (l && (ra || (ra = !0, h('Text content did not match. Server: "%s" Client: "%s"', c, u))), i && Le))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function C1(e) {
      return e.nodeType === ma ? e : e.ownerDocument;
    }
    function ib() {
    }
    function pm(e) {
      e.onclick = ib;
    }
    function ab(e, t, i, l, u) {
      for (var c in l)
        if (l.hasOwnProperty(c)) {
          var v = l[c];
          if (c === uc)
            v && Object.freeze(v), iv(t, v);
          else if (c === Up) {
            var E = v ? v[um] : void 0;
            E != null && Qh(t, E);
          } else if (c === oc)
            if (typeof v == "string") {
              var x = e !== "textarea" || v !== "";
              x && Mc(t, v);
            } else
              typeof v == "number" && Mc(t, "" + v);
          else
            c === om || c === Zu || c === y1 || (Ct.hasOwnProperty(c) ? v != null && (typeof v != "function" && cm(c, v), c === "onScroll" && Mn("scroll", t)) : v != null && Ti(t, c, v, u));
        }
    }
    function lb(e, t, i, l) {
      for (var u = 0; u < t.length; u += 2) {
        var c = t[u], v = t[u + 1];
        c === uc ? iv(e, v) : c === Up ? Qh(e, v) : c === oc ? Mc(e, v) : Ti(e, c, v, l);
      }
    }
    function ob(e, t, i, l) {
      var u, c = C1(i), v, E = l;
      if (E === Xa && (E = Lc(e)), E === Xa) {
        if (u = Za(e, t), !u && e !== e.toLowerCase() && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var x = c.createElement("div");
          x.innerHTML = "<script><\/script>";
          var _ = x.firstChild;
          v = x.removeChild(_);
        } else if (typeof t.is == "string")
          v = c.createElement(e, {
            is: t.is
          });
        else if (v = c.createElement(e), e === "select") {
          var O = v;
          t.multiple ? O.multiple = !0 : t.size && (O.size = t.size);
        }
      } else
        v = c.createElementNS(E, e);
      return E === Xa && !u && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !Wn.call(Fg, e) && (Fg[e] = !0, h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function ub(e, t) {
      return C1(t).createTextNode(e);
    }
    function sb(e, t, i, l) {
      var u = Za(t, i);
      sm(t, i);
      var c;
      switch (t) {
        case "dialog":
          Mn("cancel", e), Mn("close", e), c = i;
          break;
        case "iframe":
        case "object":
        case "embed":
          Mn("load", e), c = i;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < Np.length; v++)
            Mn(Np[v], e);
          c = i;
          break;
        case "source":
          Mn("error", e), c = i;
          break;
        case "img":
        case "image":
        case "link":
          Mn("error", e), Mn("load", e), c = i;
          break;
        case "details":
          Mn("toggle", e), c = i;
          break;
        case "input":
          F(e, i), c = T(e, i), Mn("invalid", e);
          break;
        case "option":
          an(e, i), c = i;
          break;
        case "select":
          Rs(e, i), c = Ts(e, i), Mn("invalid", e);
          break;
        case "textarea":
          $h(e, i), c = Ld(e, i), Mn("invalid", e);
          break;
        default:
          c = i;
      }
      switch (Uc(t, c), ab(t, e, l, c, u), t) {
        case "input":
          Ii(e), ge(e, i, !1);
          break;
        case "textarea":
          Ii(e), Wh(e);
          break;
        case "option":
          pn(e, i);
          break;
        case "select":
          Od(e, i);
          break;
        default:
          typeof c.onClick == "function" && pm(e);
          break;
      }
    }
    function cb(e, t, i, l, u) {
      sm(t, l);
      var c = null, v, E;
      switch (t) {
        case "input":
          v = T(e, i), E = T(e, l), c = [];
          break;
        case "select":
          v = Ts(e, i), E = Ts(e, l), c = [];
          break;
        case "textarea":
          v = Ld(e, i), E = Ld(e, l), c = [];
          break;
        default:
          v = i, E = l, typeof v.onClick != "function" && typeof E.onClick == "function" && pm(e);
          break;
      }
      Uc(t, E);
      var x, _, O = null;
      for (x in v)
        if (!(E.hasOwnProperty(x) || !v.hasOwnProperty(x) || v[x] == null))
          if (x === uc) {
            var I = v[x];
            for (_ in I)
              I.hasOwnProperty(_) && (O || (O = {}), O[_] = "");
          } else
            x === Up || x === oc || x === om || x === Zu || x === y1 || (Ct.hasOwnProperty(x) ? c || (c = []) : (c = c || []).push(x, null));
      for (x in E) {
        var P = E[x], q = v != null ? v[x] : void 0;
        if (!(!E.hasOwnProperty(x) || P === q || P == null && q == null))
          if (x === uc)
            if (P && Object.freeze(P), q) {
              for (_ in q)
                q.hasOwnProperty(_) && (!P || !P.hasOwnProperty(_)) && (O || (O = {}), O[_] = "");
              for (_ in P)
                P.hasOwnProperty(_) && q[_] !== P[_] && (O || (O = {}), O[_] = P[_]);
            } else
              O || (c || (c = []), c.push(x, O)), O = P;
          else if (x === Up) {
            var ee = P ? P[um] : void 0, ie = q ? q[um] : void 0;
            ee != null && ie !== ee && (c = c || []).push(x, ee);
          } else
            x === oc ? (typeof P == "string" || typeof P == "number") && (c = c || []).push(x, "" + P) : x === om || x === Zu || (Ct.hasOwnProperty(x) ? (P != null && (typeof P != "function" && cm(x, P), x === "onScroll" && Mn("scroll", e)), !c && q !== P && (c = [])) : (c = c || []).push(x, P));
      }
      return O && (_s(O, E[uc]), (c = c || []).push(uc, O)), c;
    }
    function fb(e, t, i, l, u) {
      i === "input" && u.type === "radio" && u.name != null && X(e, u);
      var c = Za(i, l), v = Za(i, u);
      switch (lb(e, t, c, v), i) {
        case "input":
          re(e, u);
          break;
        case "textarea":
          Yh(e, u);
          break;
        case "select":
          qy(e, u);
          break;
      }
    }
    function db(e) {
      {
        var t = e.toLowerCase();
        return zc.hasOwnProperty(t) && zc[t] || null;
      }
    }
    function pb(e, t, i, l, u, c, v) {
      var E, x;
      switch (E = Za(t, i), sm(t, i), t) {
        case "dialog":
          Mn("cancel", e), Mn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Mn("load", e);
          break;
        case "video":
        case "audio":
          for (var _ = 0; _ < Np.length; _++)
            Mn(Np[_], e);
          break;
        case "source":
          Mn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Mn("error", e), Mn("load", e);
          break;
        case "details":
          Mn("toggle", e);
          break;
        case "input":
          F(e, i), Mn("invalid", e);
          break;
        case "option":
          an(e, i);
          break;
        case "select":
          Rs(e, i), Mn("invalid", e);
          break;
        case "textarea":
          $h(e, i), Mn("invalid", e);
          break;
      }
      Uc(t, i);
      {
        x = /* @__PURE__ */ new Set();
        for (var O = e.attributes, I = 0; I < O.length; I++) {
          var P = O[I].name.toLowerCase();
          switch (P) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              x.add(O[I].name);
          }
        }
      }
      var q = null;
      for (var ee in i)
        if (i.hasOwnProperty(ee)) {
          var ie = i[ee];
          if (ee === oc)
            typeof ie == "string" ? e.textContent !== ie && (i[Zu] !== !0 && dm(e.textContent, ie, c, v), q = [oc, ie]) : typeof ie == "number" && e.textContent !== "" + ie && (i[Zu] !== !0 && dm(e.textContent, ie, c, v), q = [oc, "" + ie]);
          else if (Ct.hasOwnProperty(ee))
            ie != null && (typeof ie != "function" && cm(ee, ie), ee === "onScroll" && Mn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof E == "boolean") {
            var be = void 0, et = E && Je ? null : Ot(ee);
            if (i[Zu] !== !0) {
              if (!(ee === om || ee === Zu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              ee === "value" || ee === "checked" || ee === "selected")) {
                if (ee === Up) {
                  var $e = e.innerHTML, Pt = ie ? ie[um] : void 0;
                  if (Pt != null) {
                    var Nt = E1(e, Pt);
                    Nt !== $e && zp(ee, $e, Nt);
                  }
                } else if (ee === uc) {
                  if (x.delete(ee), S1) {
                    var W = rg(ie);
                    be = e.getAttribute("style"), W !== be && zp(ee, be, W);
                  }
                } else if (E && !Je)
                  x.delete(ee.toLowerCase()), be = wa(e, ee, ie), ie !== be && zp(ee, be, ie);
                else if (!Be(ee, et, E) && !Ze(ee, ie, et, E)) {
                  var ae = !1;
                  if (et !== null)
                    x.delete(et.attributeName), be = wi(e, ee, ie, et);
                  else {
                    var Q = l;
                    if (Q === Xa && (Q = Lc(t)), Q === Xa)
                      x.delete(ee.toLowerCase());
                    else {
                      var ve = db(ee);
                      ve !== null && ve !== ee && (ae = !0, x.delete(ve)), x.delete(ee);
                    }
                    be = wa(e, ee, ie);
                  }
                  var Oe = Je;
                  !Oe && ie !== be && !ae && zp(ee, be, ie);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      x.size > 0 && i[Zu] !== !0 && g1(x), t) {
        case "input":
          Ii(e), ge(e, i, !0);
          break;
        case "textarea":
          Ii(e), Wh(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof i.onClick == "function" && pm(e);
          break;
      }
      return q;
    }
    function hb(e, t, i) {
      var l = e.nodeValue !== t;
      return l;
    }
    function Ug(e, t) {
      {
        if (ra)
          return;
        ra = !0, h("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function zg(e, t) {
      {
        if (ra)
          return;
        ra = !0, h('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Bg(e, t, i) {
      {
        if (ra)
          return;
        ra = !0, h("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function jg(e, t) {
      {
        if (t === "" || ra)
          return;
        ra = !0, h('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function vb(e, t, i) {
      switch (t) {
        case "input":
          at(e, i);
          return;
        case "textarea":
          Nd(e, i);
          return;
        case "select":
          Ky(e, i);
          return;
      }
    }
    var Bp = function() {
    }, jp = function() {
    };
    {
      var mb = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], x1 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], yb = x1.concat(["button"]), gb = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], w1 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      jp = function(e, t) {
        var i = Rt({}, e || w1), l = {
          tag: t
        };
        return x1.indexOf(t) !== -1 && (i.aTagInScope = null, i.buttonTagInScope = null, i.nobrTagInScope = null), yb.indexOf(t) !== -1 && (i.pTagInButtonScope = null), mb.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (i.listItemTagAutoclosing = null, i.dlItemTagAutoclosing = null), i.current = l, t === "form" && (i.formTag = l), t === "a" && (i.aTagInScope = l), t === "button" && (i.buttonTagInScope = l), t === "nobr" && (i.nobrTagInScope = l), t === "p" && (i.pTagInButtonScope = l), t === "li" && (i.listItemTagAutoclosing = l), (t === "dd" || t === "dt") && (i.dlItemTagAutoclosing = l), i;
      };
      var Sb = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return gb.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Eb = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, T1 = {};
      Bp = function(e, t, i) {
        i = i || w1;
        var l = i.current, u = l && l.tag;
        t != null && (e != null && h("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var c = Sb(e, u) ? null : l, v = c ? null : Eb(e, i), E = c || v;
        if (E) {
          var x = E.tag, _ = !!c + "|" + e + "|" + x;
          if (!T1[_]) {
            T1[_] = !0;
            var O = e, I = "";
            if (e === "#text" ? /\S/.test(t) ? O = "Text nodes" : (O = "Whitespace text nodes", I = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : O = "<" + e + ">", c) {
              var P = "";
              x === "table" && e === "tr" && (P += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), h("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", O, x, I, P);
            } else
              h("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", O, x);
          }
        }
      };
    }
    var hm = "suppressHydrationWarning", vm = "$", mm = "/$", Pp = "$?", Hp = "$!", Cb = "style", Pg = null, Hg = null;
    function xb(e) {
      var t, i, l = e.nodeType;
      switch (l) {
        case ma:
        case go: {
          t = l === ma ? "#document" : "#fragment";
          var u = e.documentElement;
          i = u ? u.namespaceURI : Fd(null, "");
          break;
        }
        default: {
          var c = l === Gn ? e.parentNode : e, v = c.namespaceURI || null;
          t = c.tagName, i = Fd(v, t);
          break;
        }
      }
      {
        var E = t.toLowerCase(), x = jp(null, E);
        return {
          namespace: i,
          ancestorInfo: x
        };
      }
    }
    function wb(e, t, i) {
      {
        var l = e, u = Fd(l.namespace, t), c = jp(l.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: c
        };
      }
    }
    function bM(e) {
      return e;
    }
    function Tb(e) {
      Pg = Wu(), Hg = BR();
      var t = null;
      return mi(!1), t;
    }
    function Rb(e) {
      jR(Hg), mi(Pg), Pg = null, Hg = null;
    }
    function bb(e, t, i, l, u) {
      var c;
      {
        var v = l;
        if (Bp(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var E = "" + t.children, x = jp(v.ancestorInfo, e);
          Bp(null, E, x);
        }
        c = v.namespace;
      }
      var _ = ob(e, t, i, c);
      return $p(u, _), qg(_, t), _;
    }
    function _b(e, t) {
      e.appendChild(t);
    }
    function kb(e, t, i, l, u) {
      switch (sb(e, t, i, l), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!i.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function Db(e, t, i, l, u, c) {
      {
        var v = c;
        if (typeof l.children != typeof i.children && (typeof l.children == "string" || typeof l.children == "number")) {
          var E = "" + l.children, x = jp(v.ancestorInfo, t);
          Bp(null, E, x);
        }
      }
      return cb(e, t, i, l);
    }
    function Ig(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Ob(e, t, i, l) {
      {
        var u = i;
        Bp(null, e, u.ancestorInfo);
      }
      var c = ub(e, t);
      return $p(l, c), c;
    }
    function Ab() {
      var e = window.event;
      return e === void 0 ? La : kf(e.type);
    }
    var Vg = typeof setTimeout == "function" ? setTimeout : void 0, Lb = typeof clearTimeout == "function" ? clearTimeout : void 0, $g = -1, R1 = typeof Promise == "function" ? Promise : void 0, Nb = typeof queueMicrotask == "function" ? queueMicrotask : typeof R1 < "u" ? function(e) {
      return R1.resolve(null).then(e).catch(Mb);
    } : Vg;
    function Mb(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Fb(e, t, i, l) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && e.focus();
          return;
        case "img": {
          i.src && (e.src = i.src);
          return;
        }
      }
    }
    function Ub(e, t, i, l, u, c) {
      fb(e, t, i, l, u), qg(e, u);
    }
    function b1(e) {
      Mc(e, "");
    }
    function zb(e, t, i) {
      e.nodeValue = i;
    }
    function Bb(e, t) {
      e.appendChild(t);
    }
    function jb(e, t) {
      var i;
      e.nodeType === Gn ? (i = e.parentNode, i.insertBefore(t, e)) : (i = e, i.appendChild(t));
      var l = e._reactRootContainer;
      l == null && i.onclick === null && pm(i);
    }
    function Pb(e, t, i) {
      e.insertBefore(t, i);
    }
    function Hb(e, t, i) {
      e.nodeType === Gn ? e.parentNode.insertBefore(t, i) : e.insertBefore(t, i);
    }
    function Ib(e, t) {
      e.removeChild(t);
    }
    function Vb(e, t) {
      e.nodeType === Gn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Yg(e, t) {
      var i = t, l = 0;
      do {
        var u = i.nextSibling;
        if (e.removeChild(i), u && u.nodeType === Gn) {
          var c = u.data;
          if (c === mm)
            if (l === 0) {
              e.removeChild(u), Pn(t);
              return;
            } else
              l--;
          else
            (c === vm || c === Pp || c === Hp) && l++;
        }
        i = u;
      } while (i);
      Pn(t);
    }
    function $b(e, t) {
      e.nodeType === Gn ? Yg(e.parentNode, t) : e.nodeType === li && Yg(e, t), Pn(e);
    }
    function Yb(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Wb(e) {
      e.nodeValue = "";
    }
    function Qb(e, t) {
      e = e;
      var i = t[Cb], l = i != null && i.hasOwnProperty("display") ? i.display : null;
      e.style.display = Fc("display", l);
    }
    function Gb(e, t) {
      e.nodeValue = t;
    }
    function qb(e) {
      e.nodeType === li ? e.textContent = "" : e.nodeType === ma && e.documentElement && e.removeChild(e.documentElement);
    }
    function Kb(e, t, i) {
      return e.nodeType !== li || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Xb(e, t) {
      return t === "" || e.nodeType !== Ja ? null : e;
    }
    function Jb(e) {
      return e.nodeType !== Gn ? null : e;
    }
    function _1(e) {
      return e.data === Pp;
    }
    function Wg(e) {
      return e.data === Hp;
    }
    function Zb(e) {
      var t = e.nextSibling && e.nextSibling.dataset, i, l, u;
      return t && (i = t.dgst, l = t.msg, u = t.stck), {
        message: l,
        digest: i,
        stack: u
      };
    }
    function e_(e, t) {
      e._reactRetry = t;
    }
    function ym(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === li || t === Ja)
          break;
        if (t === Gn) {
          var i = e.data;
          if (i === vm || i === Hp || i === Pp)
            break;
          if (i === mm)
            return null;
        }
      }
      return e;
    }
    function Ip(e) {
      return ym(e.nextSibling);
    }
    function t_(e) {
      return ym(e.firstChild);
    }
    function n_(e) {
      return ym(e.firstChild);
    }
    function r_(e) {
      return ym(e.nextSibling);
    }
    function i_(e, t, i, l, u, c, v) {
      $p(c, e), qg(e, i);
      var E;
      {
        var x = u;
        E = x.namespace;
      }
      var _ = (c.mode & Ve) !== Pe;
      return pb(e, t, i, E, l, _, v);
    }
    function a_(e, t, i, l) {
      return $p(i, e), i.mode & Ve, hb(e, t);
    }
    function l_(e, t) {
      $p(t, e);
    }
    function o_(e) {
      for (var t = e.nextSibling, i = 0; t; ) {
        if (t.nodeType === Gn) {
          var l = t.data;
          if (l === mm) {
            if (i === 0)
              return Ip(t);
            i--;
          } else
            (l === vm || l === Hp || l === Pp) && i++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function k1(e) {
      for (var t = e.previousSibling, i = 0; t; ) {
        if (t.nodeType === Gn) {
          var l = t.data;
          if (l === vm || l === Hp || l === Pp) {
            if (i === 0)
              return t;
            i--;
          } else
            l === mm && i++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function u_(e) {
      Pn(e);
    }
    function s_(e) {
      Pn(e);
    }
    function c_(e) {
      return e !== "head" && e !== "body";
    }
    function f_(e, t, i, l) {
      var u = !0;
      dm(t.nodeValue, i, l, u);
    }
    function d_(e, t, i, l, u, c) {
      if (t[hm] !== !0) {
        var v = !0;
        dm(l.nodeValue, u, c, v);
      }
    }
    function p_(e, t) {
      t.nodeType === li ? Ug(e, t) : t.nodeType === Gn || zg(e, t);
    }
    function h_(e, t) {
      {
        var i = e.parentNode;
        i !== null && (t.nodeType === li ? Ug(i, t) : t.nodeType === Gn || zg(i, t));
      }
    }
    function v_(e, t, i, l, u) {
      (u || t[hm] !== !0) && (l.nodeType === li ? Ug(i, l) : l.nodeType === Gn || zg(i, l));
    }
    function m_(e, t, i) {
      Bg(e, t);
    }
    function y_(e, t) {
      jg(e, t);
    }
    function g_(e, t, i) {
      {
        var l = e.parentNode;
        l !== null && Bg(l, t);
      }
    }
    function S_(e, t) {
      {
        var i = e.parentNode;
        i !== null && jg(i, t);
      }
    }
    function E_(e, t, i, l, u, c) {
      (c || t[hm] !== !0) && Bg(i, l);
    }
    function C_(e, t, i, l, u) {
      (u || t[hm] !== !0) && jg(i, l);
    }
    function x_(e) {
      h("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function w_(e) {
      Mp(e);
    }
    var Wf = Math.random().toString(36).slice(2), Qf = "__reactFiber$" + Wf, Qg = "__reactProps$" + Wf, Vp = "__reactContainer$" + Wf, Gg = "__reactEvents$" + Wf, T_ = "__reactListeners$" + Wf, R_ = "__reactHandles$" + Wf;
    function b_(e) {
      delete e[Qf], delete e[Qg], delete e[Gg], delete e[T_], delete e[R_];
    }
    function $p(e, t) {
      t[Qf] = e;
    }
    function gm(e, t) {
      t[Vp] = e;
    }
    function D1(e) {
      e[Vp] = null;
    }
    function Yp(e) {
      return !!e[Vp];
    }
    function sc(e) {
      var t = e[Qf];
      if (t)
        return t;
      for (var i = e.parentNode; i; ) {
        if (t = i[Vp] || i[Qf], t) {
          var l = t.alternate;
          if (t.child !== null || l !== null && l.child !== null)
            for (var u = k1(e); u !== null; ) {
              var c = u[Qf];
              if (c)
                return c;
              u = k1(u);
            }
          return t;
        }
        e = i, i = e.parentNode;
      }
      return null;
    }
    function es(e) {
      var t = e[Qf] || e[Vp];
      return t && (t.tag === K || t.tag === te || t.tag === Ye || t.tag === N) ? t : null;
    }
    function Gf(e) {
      if (e.tag === K || e.tag === te)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Sm(e) {
      return e[Qg] || null;
    }
    function qg(e, t) {
      e[Qg] = t;
    }
    function __(e) {
      var t = e[Gg];
      return t === void 0 && (t = e[Gg] = /* @__PURE__ */ new Set()), t;
    }
    var O1 = {}, A1 = d.ReactDebugCurrentFrame;
    function Em(e) {
      if (e) {
        var t = e._owner, i = _a(e.type, e._source, t ? t.type : null);
        A1.setExtraStackFrame(i);
      } else
        A1.setExtraStackFrame(null);
    }
    function fl(e, t, i, l, u) {
      {
        var c = Function.call.bind(Wn);
        for (var v in e)
          if (c(e, v)) {
            var E = void 0;
            try {
              if (typeof e[v] != "function") {
                var x = Error((l || "React class") + ": " + i + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              E = e[v](t, v, l, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              E = _;
            }
            E && !(E instanceof Error) && (Em(u), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", i, v, typeof E), Em(null)), E instanceof Error && !(E.message in O1) && (O1[E.message] = !0, Em(u), h("Failed %s type: %s", i, E.message), Em(null));
          }
      }
    }
    var Kg = [], Cm;
    Cm = [];
    var Io = -1;
    function ts(e) {
      return {
        current: e
      };
    }
    function yi(e, t) {
      if (Io < 0) {
        h("Unexpected pop.");
        return;
      }
      t !== Cm[Io] && h("Unexpected Fiber popped."), e.current = Kg[Io], Kg[Io] = null, Cm[Io] = null, Io--;
    }
    function gi(e, t, i) {
      Io++, Kg[Io] = e.current, Cm[Io] = i, e.current = t;
    }
    var Xg;
    Xg = {};
    var Ea = {};
    Object.freeze(Ea);
    var Vo = ts(Ea), Kl = ts(!1), Jg = Ea;
    function qf(e, t, i) {
      return i && Xl(t) ? Jg : Vo.current;
    }
    function L1(e, t, i) {
      {
        var l = e.stateNode;
        l.__reactInternalMemoizedUnmaskedChildContext = t, l.__reactInternalMemoizedMaskedChildContext = i;
      }
    }
    function Kf(e, t) {
      {
        var i = e.type, l = i.contextTypes;
        if (!l)
          return Ea;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var c = {};
        for (var v in l)
          c[v] = t[v];
        {
          var E = dt(e) || "Unknown";
          fl(l, c, "context", E);
        }
        return u && L1(e, t, c), c;
      }
    }
    function xm() {
      return Kl.current;
    }
    function Xl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function wm(e) {
      yi(Kl, e), yi(Vo, e);
    }
    function Zg(e) {
      yi(Kl, e), yi(Vo, e);
    }
    function N1(e, t, i) {
      {
        if (Vo.current !== Ea)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        gi(Vo, t, e), gi(Kl, i, e);
      }
    }
    function M1(e, t, i) {
      {
        var l = e.stateNode, u = t.childContextTypes;
        if (typeof l.getChildContext != "function") {
          {
            var c = dt(e) || "Unknown";
            Xg[c] || (Xg[c] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", c, c));
          }
          return i;
        }
        var v = l.getChildContext();
        for (var E in v)
          if (!(E in u))
            throw new Error((dt(e) || "Unknown") + '.getChildContext(): key "' + E + '" is not defined in childContextTypes.');
        {
          var x = dt(e) || "Unknown";
          fl(u, v, "child context", x);
        }
        return Rt({}, i, v);
      }
    }
    function Tm(e) {
      {
        var t = e.stateNode, i = t && t.__reactInternalMemoizedMergedChildContext || Ea;
        return Jg = Vo.current, gi(Vo, i, e), gi(Kl, Kl.current, e), !0;
      }
    }
    function F1(e, t, i) {
      {
        var l = e.stateNode;
        if (!l)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (i) {
          var u = M1(e, t, Jg);
          l.__reactInternalMemoizedMergedChildContext = u, yi(Kl, e), yi(Vo, e), gi(Vo, u, e), gi(Kl, i, e);
        } else
          yi(Kl, e), gi(Kl, i, e);
      }
    }
    function k_(e) {
      {
        if (!tp(e) || e.tag !== B)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case N:
              return t.stateNode.context;
            case B: {
              var i = t.type;
              if (Xl(i))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var ns = 0, Rm = 1, $o = null, e0 = !1, t0 = !1;
    function U1(e) {
      $o === null ? $o = [e] : $o.push(e);
    }
    function D_(e) {
      e0 = !0, U1(e);
    }
    function z1() {
      e0 && rs();
    }
    function rs() {
      if (!t0 && $o !== null) {
        t0 = !0;
        var e = 0, t = Ji();
        try {
          var i = !0, l = $o;
          for (jn(Vn); e < l.length; e++) {
            var u = l[e];
            do
              u = u(i);
            while (u !== null);
          }
          $o = null, e0 = !1;
        } catch (c) {
          throw $o !== null && ($o = $o.slice(e + 1)), Wc(Gc, rs), c;
        } finally {
          jn(t), t0 = !1;
        }
      }
      return null;
    }
    var Xf = [], Jf = 0, bm = null, _m = 0, Ua = [], za = 0, cc = null, Yo = 1, Wo = "";
    function O_(e) {
      return dc(), (e.flags & Jd) !== Ke;
    }
    function A_(e) {
      return dc(), _m;
    }
    function L_() {
      var e = Wo, t = Yo, i = t & ~N_(t);
      return i.toString(32) + e;
    }
    function fc(e, t) {
      dc(), Xf[Jf++] = _m, Xf[Jf++] = bm, bm = e, _m = t;
    }
    function B1(e, t, i) {
      dc(), Ua[za++] = Yo, Ua[za++] = Wo, Ua[za++] = cc, cc = e;
      var l = Yo, u = Wo, c = km(l) - 1, v = l & ~(1 << c), E = i + 1, x = km(t) + c;
      if (x > 30) {
        var _ = c - c % 5, O = (1 << _) - 1, I = (v & O).toString(32), P = v >> _, q = c - _, ee = km(t) + q, ie = E << q, be = ie | P, et = I + u;
        Yo = 1 << ee | be, Wo = et;
      } else {
        var $e = E << c, Pt = $e | v, Nt = u;
        Yo = 1 << x | Pt, Wo = Nt;
      }
    }
    function n0(e) {
      dc();
      var t = e.return;
      if (t !== null) {
        var i = 1, l = 0;
        fc(e, i), B1(e, i, l);
      }
    }
    function km(e) {
      return 32 - Du(e);
    }
    function N_(e) {
      return 1 << km(e) - 1;
    }
    function r0(e) {
      for (; e === bm; )
        bm = Xf[--Jf], Xf[Jf] = null, _m = Xf[--Jf], Xf[Jf] = null;
      for (; e === cc; )
        cc = Ua[--za], Ua[za] = null, Wo = Ua[--za], Ua[za] = null, Yo = Ua[--za], Ua[za] = null;
    }
    function M_() {
      return dc(), cc !== null ? {
        id: Yo,
        overflow: Wo
      } : null;
    }
    function F_(e, t) {
      dc(), Ua[za++] = Yo, Ua[za++] = Wo, Ua[za++] = cc, Yo = t.id, Wo = t.overflow, cc = e;
    }
    function dc() {
      Gr() || h("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Qr = null, Ba = null, dl = !1, pc = !1, is = null;
    function U_() {
      dl && h("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function j1() {
      pc = !0;
    }
    function z_() {
      return pc;
    }
    function B_(e) {
      var t = e.stateNode.containerInfo;
      return Ba = n_(t), Qr = e, dl = !0, is = null, pc = !1, !0;
    }
    function j_(e, t, i) {
      return Ba = r_(t), Qr = e, dl = !0, is = null, pc = !1, i !== null && F_(e, i), !0;
    }
    function P1(e, t) {
      switch (e.tag) {
        case N: {
          p_(e.stateNode.containerInfo, t);
          break;
        }
        case K: {
          var i = (e.mode & Ve) !== Pe;
          v_(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            i
          );
          break;
        }
        case Ye: {
          var l = e.memoizedState;
          l.dehydrated !== null && h_(l.dehydrated, t);
          break;
        }
      }
    }
    function H1(e, t) {
      P1(e, t);
      var i = VO();
      i.stateNode = t, i.return = e;
      var l = e.deletions;
      l === null ? (e.deletions = [i], e.flags |= Jt) : l.push(i);
    }
    function i0(e, t) {
      {
        if (pc)
          return;
        switch (e.tag) {
          case N: {
            var i = e.stateNode.containerInfo;
            switch (t.tag) {
              case K:
                var l = t.type;
                t.pendingProps, m_(i, l);
                break;
              case te:
                var u = t.pendingProps;
                y_(i, u);
                break;
            }
            break;
          }
          case K: {
            var c = e.type, v = e.memoizedProps, E = e.stateNode;
            switch (t.tag) {
              case K: {
                var x = t.type, _ = t.pendingProps, O = (e.mode & Ve) !== Pe;
                E_(
                  c,
                  v,
                  E,
                  x,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  O
                );
                break;
              }
              case te: {
                var I = t.pendingProps, P = (e.mode & Ve) !== Pe;
                C_(
                  c,
                  v,
                  E,
                  I,
                  // TODO: Delete this argument when we remove the legacy root API.
                  P
                );
                break;
              }
            }
            break;
          }
          case Ye: {
            var q = e.memoizedState, ee = q.dehydrated;
            if (ee !== null)
              switch (t.tag) {
                case K:
                  var ie = t.type;
                  t.pendingProps, g_(ee, ie);
                  break;
                case te:
                  var be = t.pendingProps;
                  S_(ee, be);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function I1(e, t) {
      t.flags = t.flags & ~Wi | En, i0(e, t);
    }
    function V1(e, t) {
      switch (e.tag) {
        case K: {
          var i = e.type;
          e.pendingProps;
          var l = Kb(t, i);
          return l !== null ? (e.stateNode = l, Qr = e, Ba = t_(l), !0) : !1;
        }
        case te: {
          var u = e.pendingProps, c = Xb(t, u);
          return c !== null ? (e.stateNode = c, Qr = e, Ba = null, !0) : !1;
        }
        case Ye: {
          var v = Jb(t);
          if (v !== null) {
            var E = {
              dehydrated: v,
              treeContext: M_(),
              retryLane: Br
            };
            e.memoizedState = E;
            var x = $O(v);
            return x.return = e, e.child = x, Qr = e, Ba = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function a0(e) {
      return (e.mode & Ve) !== Pe && (e.flags & ct) === Ke;
    }
    function l0(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function o0(e) {
      if (dl) {
        var t = Ba;
        if (!t) {
          a0(e) && (i0(Qr, e), l0()), I1(Qr, e), dl = !1, Qr = e;
          return;
        }
        var i = t;
        if (!V1(e, t)) {
          a0(e) && (i0(Qr, e), l0()), t = Ip(i);
          var l = Qr;
          if (!t || !V1(e, t)) {
            I1(Qr, e), dl = !1, Qr = e;
            return;
          }
          H1(l, i);
        }
      }
    }
    function P_(e, t, i) {
      var l = e.stateNode, u = !pc, c = i_(l, e.type, e.memoizedProps, t, i, e, u);
      return e.updateQueue = c, c !== null;
    }
    function H_(e) {
      var t = e.stateNode, i = e.memoizedProps, l = a_(t, i, e);
      if (l) {
        var u = Qr;
        if (u !== null)
          switch (u.tag) {
            case N: {
              var c = u.stateNode.containerInfo, v = (u.mode & Ve) !== Pe;
              f_(
                c,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case K: {
              var E = u.type, x = u.memoizedProps, _ = u.stateNode, O = (u.mode & Ve) !== Pe;
              d_(
                E,
                x,
                _,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                O
              );
              break;
            }
          }
      }
      return l;
    }
    function I_(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      l_(i, e);
    }
    function V_(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return o_(i);
    }
    function $1(e) {
      for (var t = e.return; t !== null && t.tag !== K && t.tag !== N && t.tag !== Ye; )
        t = t.return;
      Qr = t;
    }
    function Dm(e) {
      if (e !== Qr)
        return !1;
      if (!dl)
        return $1(e), dl = !0, !1;
      if (e.tag !== N && (e.tag !== K || c_(e.type) && !Ig(e.type, e.memoizedProps))) {
        var t = Ba;
        if (t)
          if (a0(e))
            Y1(e), l0();
          else
            for (; t; )
              H1(e, t), t = Ip(t);
      }
      return $1(e), e.tag === Ye ? Ba = V_(e) : Ba = Qr ? Ip(e.stateNode) : null, !0;
    }
    function $_() {
      return dl && Ba !== null;
    }
    function Y1(e) {
      for (var t = Ba; t; )
        P1(e, t), t = Ip(t);
    }
    function Zf() {
      Qr = null, Ba = null, dl = !1, pc = !1;
    }
    function W1() {
      is !== null && (jx(is), is = null);
    }
    function Gr() {
      return dl;
    }
    function u0(e) {
      is === null ? is = [e] : is.push(e);
    }
    var Y_ = d.ReactCurrentBatchConfig, W_ = null;
    function Q_() {
      return Y_.transition;
    }
    var pl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var G_ = function(e) {
        for (var t = null, i = e; i !== null; )
          i.mode & Dt && (t = i), i = i.return;
        return t;
      }, hc = function(e) {
        var t = [];
        return e.forEach(function(i) {
          t.push(i);
        }), t.sort().join(", ");
      }, Wp = [], Qp = [], Gp = [], qp = [], Kp = [], Xp = [], vc = /* @__PURE__ */ new Set();
      pl.recordUnsafeLifecycleWarnings = function(e, t) {
        vc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Wp.push(e), e.mode & Dt && typeof t.UNSAFE_componentWillMount == "function" && Qp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Gp.push(e), e.mode & Dt && typeof t.UNSAFE_componentWillReceiveProps == "function" && qp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Kp.push(e), e.mode & Dt && typeof t.UNSAFE_componentWillUpdate == "function" && Xp.push(e));
      }, pl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Wp.length > 0 && (Wp.forEach(function(P) {
          e.add(dt(P) || "Component"), vc.add(P.type);
        }), Wp = []);
        var t = /* @__PURE__ */ new Set();
        Qp.length > 0 && (Qp.forEach(function(P) {
          t.add(dt(P) || "Component"), vc.add(P.type);
        }), Qp = []);
        var i = /* @__PURE__ */ new Set();
        Gp.length > 0 && (Gp.forEach(function(P) {
          i.add(dt(P) || "Component"), vc.add(P.type);
        }), Gp = []);
        var l = /* @__PURE__ */ new Set();
        qp.length > 0 && (qp.forEach(function(P) {
          l.add(dt(P) || "Component"), vc.add(P.type);
        }), qp = []);
        var u = /* @__PURE__ */ new Set();
        Kp.length > 0 && (Kp.forEach(function(P) {
          u.add(dt(P) || "Component"), vc.add(P.type);
        }), Kp = []);
        var c = /* @__PURE__ */ new Set();
        if (Xp.length > 0 && (Xp.forEach(function(P) {
          c.add(dt(P) || "Component"), vc.add(P.type);
        }), Xp = []), t.size > 0) {
          var v = hc(t);
          h(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (l.size > 0) {
          var E = hc(l);
          h(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, E);
        }
        if (c.size > 0) {
          var x = hc(c);
          h(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, x);
        }
        if (e.size > 0) {
          var _ = hc(e);
          w(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
        if (i.size > 0) {
          var O = hc(i);
          w(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, O);
        }
        if (u.size > 0) {
          var I = hc(u);
          w(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, I);
        }
      };
      var Om = /* @__PURE__ */ new Map(), Q1 = /* @__PURE__ */ new Set();
      pl.recordLegacyContextWarning = function(e, t) {
        var i = G_(e);
        if (i === null) {
          h("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!Q1.has(e.type)) {
          var l = Om.get(i);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (l === void 0 && (l = [], Om.set(i, l)), l.push(e));
        }
      }, pl.flushLegacyContextWarning = function() {
        Om.forEach(function(e, t) {
          if (e.length !== 0) {
            var i = e[0], l = /* @__PURE__ */ new Set();
            e.forEach(function(c) {
              l.add(dt(c) || "Component"), Q1.add(c.type);
            });
            var u = hc(l);
            try {
              en(i), h(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              zn();
            }
          }
        });
      }, pl.discardPendingWarnings = function() {
        Wp = [], Qp = [], Gp = [], qp = [], Kp = [], Xp = [], Om = /* @__PURE__ */ new Map();
      };
    }
    var s0, c0, f0, d0, p0, G1 = function(e, t) {
    };
    s0 = !1, c0 = !1, f0 = {}, d0 = {}, p0 = {}, G1 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var i = dt(t) || "Component";
        d0[i] || (d0[i] = !0, h('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function q_(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Jp(e, t, i) {
      var l = i.ref;
      if (l !== null && typeof l != "function" && typeof l != "object") {
        if ((e.mode & Dt || Ae) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(i._owner && i._self && i._owner.stateNode !== i._self) && // Will already throw with "Function components cannot have string refs"
        !(i._owner && i._owner.tag !== B) && // Will already warn with "Function components cannot be given refs"
        !(typeof i.type == "function" && !q_(i.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        i._owner) {
          var u = dt(e) || "Component";
          f0[u] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, l), f0[u] = !0);
        }
        if (i._owner) {
          var c = i._owner, v;
          if (c) {
            var E = c;
            if (E.tag !== B)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = E.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + l + ". This error is likely caused by a bug in React. Please file an issue.");
          var x = v;
          Un(l, "ref");
          var _ = "" + l;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === _)
            return t.ref;
          var O = function(I) {
            var P = x.refs;
            I === null ? delete P[_] : P[_] = I;
          };
          return O._stringRef = _, O;
        } else {
          if (typeof l != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!i._owner)
            throw new Error("Element ref was specified as a string (" + l + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return l;
    }
    function Am(e, t) {
      var i = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Lm(e) {
      {
        var t = dt(e) || "Component";
        if (p0[t])
          return;
        p0[t] = !0, h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function q1(e) {
      var t = e._payload, i = e._init;
      return i(t);
    }
    function K1(e) {
      function t(W, ae) {
        if (e) {
          var Q = W.deletions;
          Q === null ? (W.deletions = [ae], W.flags |= Jt) : Q.push(ae);
        }
      }
      function i(W, ae) {
        if (!e)
          return null;
        for (var Q = ae; Q !== null; )
          t(W, Q), Q = Q.sibling;
        return null;
      }
      function l(W, ae) {
        for (var Q = /* @__PURE__ */ new Map(), ve = ae; ve !== null; )
          ve.key !== null ? Q.set(ve.key, ve) : Q.set(ve.index, ve), ve = ve.sibling;
        return Q;
      }
      function u(W, ae) {
        var Q = Tc(W, ae);
        return Q.index = 0, Q.sibling = null, Q;
      }
      function c(W, ae, Q) {
        if (W.index = Q, !e)
          return W.flags |= Jd, ae;
        var ve = W.alternate;
        if (ve !== null) {
          var Oe = ve.index;
          return Oe < ae ? (W.flags |= En, ae) : Oe;
        } else
          return W.flags |= En, ae;
      }
      function v(W) {
        return e && W.alternate === null && (W.flags |= En), W;
      }
      function E(W, ae, Q, ve) {
        if (ae === null || ae.tag !== te) {
          var Oe = uE(Q, W.mode, ve);
          return Oe.return = W, Oe;
        } else {
          var _e = u(ae, Q);
          return _e.return = W, _e;
        }
      }
      function x(W, ae, Q, ve) {
        var Oe = Q.type;
        if (Oe === Ri)
          return O(W, ae, Q.props.children, ve, Q.key);
        if (ae !== null && (ae.elementType === Oe || // Keep this check inline so it only runs on the false path:
        tw(ae, Q) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Oe == "object" && Oe !== null && Oe.$$typeof === it && q1(Oe) === ae.type)) {
          var _e = u(ae, Q.props);
          return _e.ref = Jp(W, ae, Q), _e.return = W, _e._debugSource = Q._source, _e._debugOwner = Q._owner, _e;
        }
        var st = oE(Q, W.mode, ve);
        return st.ref = Jp(W, ae, Q), st.return = W, st;
      }
      function _(W, ae, Q, ve) {
        if (ae === null || ae.tag !== J || ae.stateNode.containerInfo !== Q.containerInfo || ae.stateNode.implementation !== Q.implementation) {
          var Oe = sE(Q, W.mode, ve);
          return Oe.return = W, Oe;
        } else {
          var _e = u(ae, Q.children || []);
          return _e.return = W, _e;
        }
      }
      function O(W, ae, Q, ve, Oe) {
        if (ae === null || ae.tag !== ue) {
          var _e = vs(Q, W.mode, ve, Oe);
          return _e.return = W, _e;
        } else {
          var st = u(ae, Q);
          return st.return = W, st;
        }
      }
      function I(W, ae, Q) {
        if (typeof ae == "string" && ae !== "" || typeof ae == "number") {
          var ve = uE("" + ae, W.mode, Q);
          return ve.return = W, ve;
        }
        if (typeof ae == "object" && ae !== null) {
          switch (ae.$$typeof) {
            case da: {
              var Oe = oE(ae, W.mode, Q);
              return Oe.ref = Jp(W, null, ae), Oe.return = W, Oe;
            }
            case Hr: {
              var _e = sE(ae, W.mode, Q);
              return _e.return = W, _e;
            }
            case it: {
              var st = ae._payload, mt = ae._init;
              return I(W, mt(st), Q);
            }
          }
          if (zt(ae) || Ir(ae)) {
            var un = vs(ae, W.mode, Q, null);
            return un.return = W, un;
          }
          Am(W, ae);
        }
        return typeof ae == "function" && Lm(W), null;
      }
      function P(W, ae, Q, ve) {
        var Oe = ae !== null ? ae.key : null;
        if (typeof Q == "string" && Q !== "" || typeof Q == "number")
          return Oe !== null ? null : E(W, ae, "" + Q, ve);
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case da:
              return Q.key === Oe ? x(W, ae, Q, ve) : null;
            case Hr:
              return Q.key === Oe ? _(W, ae, Q, ve) : null;
            case it: {
              var _e = Q._payload, st = Q._init;
              return P(W, ae, st(_e), ve);
            }
          }
          if (zt(Q) || Ir(Q))
            return Oe !== null ? null : O(W, ae, Q, ve, null);
          Am(W, Q);
        }
        return typeof Q == "function" && Lm(W), null;
      }
      function q(W, ae, Q, ve, Oe) {
        if (typeof ve == "string" && ve !== "" || typeof ve == "number") {
          var _e = W.get(Q) || null;
          return E(ae, _e, "" + ve, Oe);
        }
        if (typeof ve == "object" && ve !== null) {
          switch (ve.$$typeof) {
            case da: {
              var st = W.get(ve.key === null ? Q : ve.key) || null;
              return x(ae, st, ve, Oe);
            }
            case Hr: {
              var mt = W.get(ve.key === null ? Q : ve.key) || null;
              return _(ae, mt, ve, Oe);
            }
            case it:
              var un = ve._payload, Gt = ve._init;
              return q(W, ae, Q, Gt(un), Oe);
          }
          if (zt(ve) || Ir(ve)) {
            var ir = W.get(Q) || null;
            return O(ae, ir, ve, Oe, null);
          }
          Am(ae, ve);
        }
        return typeof ve == "function" && Lm(ae), null;
      }
      function ee(W, ae, Q) {
        {
          if (typeof W != "object" || W === null)
            return ae;
          switch (W.$$typeof) {
            case da:
            case Hr:
              G1(W, Q);
              var ve = W.key;
              if (typeof ve != "string")
                break;
              if (ae === null) {
                ae = /* @__PURE__ */ new Set(), ae.add(ve);
                break;
              }
              if (!ae.has(ve)) {
                ae.add(ve);
                break;
              }
              h("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ve);
              break;
            case it:
              var Oe = W._payload, _e = W._init;
              ee(_e(Oe), ae, Q);
              break;
          }
        }
        return ae;
      }
      function ie(W, ae, Q, ve) {
        for (var Oe = null, _e = 0; _e < Q.length; _e++) {
          var st = Q[_e];
          Oe = ee(st, Oe, W);
        }
        for (var mt = null, un = null, Gt = ae, ir = 0, qt = 0, Xn = null; Gt !== null && qt < Q.length; qt++) {
          Gt.index > qt ? (Xn = Gt, Gt = null) : Xn = Gt.sibling;
          var Ei = P(W, Gt, Q[qt], ve);
          if (Ei === null) {
            Gt === null && (Gt = Xn);
            break;
          }
          e && Gt && Ei.alternate === null && t(W, Gt), ir = c(Ei, ir, qt), un === null ? mt = Ei : un.sibling = Ei, un = Ei, Gt = Xn;
        }
        if (qt === Q.length) {
          if (i(W, Gt), Gr()) {
            var ti = qt;
            fc(W, ti);
          }
          return mt;
        }
        if (Gt === null) {
          for (; qt < Q.length; qt++) {
            var xa = I(W, Q[qt], ve);
            xa !== null && (ir = c(xa, ir, qt), un === null ? mt = xa : un.sibling = xa, un = xa);
          }
          if (Gr()) {
            var Fi = qt;
            fc(W, Fi);
          }
          return mt;
        }
        for (var Ui = l(W, Gt); qt < Q.length; qt++) {
          var Ci = q(Ui, W, qt, Q[qt], ve);
          Ci !== null && (e && Ci.alternate !== null && Ui.delete(Ci.key === null ? qt : Ci.key), ir = c(Ci, ir, qt), un === null ? mt = Ci : un.sibling = Ci, un = Ci);
        }
        if (e && Ui.forEach(function(gd) {
          return t(W, gd);
        }), Gr()) {
          var Zo = qt;
          fc(W, Zo);
        }
        return mt;
      }
      function be(W, ae, Q, ve) {
        var Oe = Ir(Q);
        if (typeof Oe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          Q[Symbol.toStringTag] === "Generator" && (c0 || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), c0 = !0), Q.entries === Oe && (s0 || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), s0 = !0);
          var _e = Oe.call(Q);
          if (_e)
            for (var st = null, mt = _e.next(); !mt.done; mt = _e.next()) {
              var un = mt.value;
              st = ee(un, st, W);
            }
        }
        var Gt = Oe.call(Q);
        if (Gt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var ir = null, qt = null, Xn = ae, Ei = 0, ti = 0, xa = null, Fi = Gt.next(); Xn !== null && !Fi.done; ti++, Fi = Gt.next()) {
          Xn.index > ti ? (xa = Xn, Xn = null) : xa = Xn.sibling;
          var Ui = P(W, Xn, Fi.value, ve);
          if (Ui === null) {
            Xn === null && (Xn = xa);
            break;
          }
          e && Xn && Ui.alternate === null && t(W, Xn), Ei = c(Ui, Ei, ti), qt === null ? ir = Ui : qt.sibling = Ui, qt = Ui, Xn = xa;
        }
        if (Fi.done) {
          if (i(W, Xn), Gr()) {
            var Ci = ti;
            fc(W, Ci);
          }
          return ir;
        }
        if (Xn === null) {
          for (; !Fi.done; ti++, Fi = Gt.next()) {
            var Zo = I(W, Fi.value, ve);
            Zo !== null && (Ei = c(Zo, Ei, ti), qt === null ? ir = Zo : qt.sibling = Zo, qt = Zo);
          }
          if (Gr()) {
            var gd = ti;
            fc(W, gd);
          }
          return ir;
        }
        for (var Oh = l(W, Xn); !Fi.done; ti++, Fi = Gt.next()) {
          var ao = q(Oh, W, ti, Fi.value, ve);
          ao !== null && (e && ao.alternate !== null && Oh.delete(ao.key === null ? ti : ao.key), Ei = c(ao, Ei, ti), qt === null ? ir = ao : qt.sibling = ao, qt = ao);
        }
        if (e && Oh.forEach(function(CA) {
          return t(W, CA);
        }), Gr()) {
          var EA = ti;
          fc(W, EA);
        }
        return ir;
      }
      function et(W, ae, Q, ve) {
        if (ae !== null && ae.tag === te) {
          i(W, ae.sibling);
          var Oe = u(ae, Q);
          return Oe.return = W, Oe;
        }
        i(W, ae);
        var _e = uE(Q, W.mode, ve);
        return _e.return = W, _e;
      }
      function $e(W, ae, Q, ve) {
        for (var Oe = Q.key, _e = ae; _e !== null; ) {
          if (_e.key === Oe) {
            var st = Q.type;
            if (st === Ri) {
              if (_e.tag === ue) {
                i(W, _e.sibling);
                var mt = u(_e, Q.props.children);
                return mt.return = W, mt._debugSource = Q._source, mt._debugOwner = Q._owner, mt;
              }
            } else if (_e.elementType === st || // Keep this check inline so it only runs on the false path:
            tw(_e, Q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof st == "object" && st !== null && st.$$typeof === it && q1(st) === _e.type) {
              i(W, _e.sibling);
              var un = u(_e, Q.props);
              return un.ref = Jp(W, _e, Q), un.return = W, un._debugSource = Q._source, un._debugOwner = Q._owner, un;
            }
            i(W, _e);
            break;
          } else
            t(W, _e);
          _e = _e.sibling;
        }
        if (Q.type === Ri) {
          var Gt = vs(Q.props.children, W.mode, ve, Q.key);
          return Gt.return = W, Gt;
        } else {
          var ir = oE(Q, W.mode, ve);
          return ir.ref = Jp(W, ae, Q), ir.return = W, ir;
        }
      }
      function Pt(W, ae, Q, ve) {
        for (var Oe = Q.key, _e = ae; _e !== null; ) {
          if (_e.key === Oe)
            if (_e.tag === J && _e.stateNode.containerInfo === Q.containerInfo && _e.stateNode.implementation === Q.implementation) {
              i(W, _e.sibling);
              var st = u(_e, Q.children || []);
              return st.return = W, st;
            } else {
              i(W, _e);
              break;
            }
          else
            t(W, _e);
          _e = _e.sibling;
        }
        var mt = sE(Q, W.mode, ve);
        return mt.return = W, mt;
      }
      function Nt(W, ae, Q, ve) {
        var Oe = typeof Q == "object" && Q !== null && Q.type === Ri && Q.key === null;
        if (Oe && (Q = Q.props.children), typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case da:
              return v($e(W, ae, Q, ve));
            case Hr:
              return v(Pt(W, ae, Q, ve));
            case it:
              var _e = Q._payload, st = Q._init;
              return Nt(W, ae, st(_e), ve);
          }
          if (zt(Q))
            return ie(W, ae, Q, ve);
          if (Ir(Q))
            return be(W, ae, Q, ve);
          Am(W, Q);
        }
        return typeof Q == "string" && Q !== "" || typeof Q == "number" ? v(et(W, ae, "" + Q, ve)) : (typeof Q == "function" && Lm(W), i(W, ae));
      }
      return Nt;
    }
    var ed = K1(!0), X1 = K1(!1);
    function K_(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var i = t.child, l = Tc(i, i.pendingProps);
        for (t.child = l, l.return = t; i.sibling !== null; )
          i = i.sibling, l = l.sibling = Tc(i, i.pendingProps), l.return = t;
        l.sibling = null;
      }
    }
    function X_(e, t) {
      for (var i = e.child; i !== null; )
        BO(i, t), i = i.sibling;
    }
    var h0 = ts(null), v0;
    v0 = {};
    var Nm = null, td = null, m0 = null, Mm = !1;
    function Fm() {
      Nm = null, td = null, m0 = null, Mm = !1;
    }
    function J1() {
      Mm = !0;
    }
    function Z1() {
      Mm = !1;
    }
    function eC(e, t, i) {
      gi(h0, t._currentValue, e), t._currentValue = i, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== v0 && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = v0;
    }
    function y0(e, t) {
      var i = h0.current;
      yi(h0, t), e._currentValue = i;
    }
    function g0(e, t, i) {
      for (var l = e; l !== null; ) {
        var u = l.alternate;
        if (Mo(l.childLanes, t) ? u !== null && !Mo(u.childLanes, t) && (u.childLanes = yt(u.childLanes, t)) : (l.childLanes = yt(l.childLanes, t), u !== null && (u.childLanes = yt(u.childLanes, t))), l === i)
          break;
        l = l.return;
      }
      l !== i && h("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function J_(e, t, i) {
      Z_(e, t, i);
    }
    function Z_(e, t, i) {
      var l = e.child;
      for (l !== null && (l.return = e); l !== null; ) {
        var u = void 0, c = l.dependencies;
        if (c !== null) {
          u = l.child;
          for (var v = c.firstContext; v !== null; ) {
            if (v.context === t) {
              if (l.tag === B) {
                var E = Uu(i), x = Qo(yn, E);
                x.tag = zm;
                var _ = l.updateQueue;
                if (_ !== null) {
                  var O = _.shared, I = O.pending;
                  I === null ? x.next = x : (x.next = I.next, I.next = x), O.pending = x;
                }
              }
              l.lanes = yt(l.lanes, i);
              var P = l.alternate;
              P !== null && (P.lanes = yt(P.lanes, i)), g0(l.return, i, e), c.lanes = yt(c.lanes, i);
              break;
            }
            v = v.next;
          }
        } else if (l.tag === Ee)
          u = l.type === e.type ? null : l.child;
        else if (l.tag === Xt) {
          var q = l.return;
          if (q === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          q.lanes = yt(q.lanes, i);
          var ee = q.alternate;
          ee !== null && (ee.lanes = yt(ee.lanes, i)), g0(q, i, e), u = l.sibling;
        } else
          u = l.child;
        if (u !== null)
          u.return = l;
        else
          for (u = l; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var ie = u.sibling;
            if (ie !== null) {
              ie.return = u.return, u = ie;
              break;
            }
            u = u.return;
          }
        l = u;
      }
    }
    function nd(e, t) {
      Nm = e, td = null, m0 = null;
      var i = e.dependencies;
      if (i !== null) {
        var l = i.firstContext;
        l !== null && (vi(i.lanes, t) && ph(), i.firstContext = null);
      }
    }
    function gr(e) {
      Mm && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (m0 !== e) {
        var i = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (td === null) {
          if (Nm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          td = i, Nm.dependencies = {
            lanes: ce,
            firstContext: i
          };
        } else
          td = td.next = i;
      }
      return t;
    }
    var mc = null;
    function S0(e) {
      mc === null ? mc = [e] : mc.push(e);
    }
    function ek() {
      if (mc !== null) {
        for (var e = 0; e < mc.length; e++) {
          var t = mc[e], i = t.interleaved;
          if (i !== null) {
            t.interleaved = null;
            var l = i.next, u = t.pending;
            if (u !== null) {
              var c = u.next;
              u.next = l, i.next = c;
            }
            t.pending = i;
          }
        }
        mc = null;
      }
    }
    function tC(e, t, i, l) {
      var u = t.interleaved;
      return u === null ? (i.next = i, S0(t)) : (i.next = u.next, u.next = i), t.interleaved = i, Um(e, l);
    }
    function tk(e, t, i, l) {
      var u = t.interleaved;
      u === null ? (i.next = i, S0(t)) : (i.next = u.next, u.next = i), t.interleaved = i;
    }
    function nk(e, t, i, l) {
      var u = t.interleaved;
      return u === null ? (i.next = i, S0(t)) : (i.next = u.next, u.next = i), t.interleaved = i, Um(e, l);
    }
    function ia(e, t) {
      return Um(e, t);
    }
    var rk = Um;
    function Um(e, t) {
      e.lanes = yt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = yt(i.lanes, t)), i === null && (e.flags & (En | Wi)) !== Ke && Xx(e);
      for (var l = e, u = e.return; u !== null; )
        u.childLanes = yt(u.childLanes, t), i = u.alternate, i !== null ? i.childLanes = yt(i.childLanes, t) : (u.flags & (En | Wi)) !== Ke && Xx(e), l = u, u = u.return;
      if (l.tag === N) {
        var c = l.stateNode;
        return c;
      } else
        return null;
    }
    var nC = 0, rC = 1, zm = 2, E0 = 3, Bm = !1, C0, jm;
    C0 = !1, jm = null;
    function x0(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ce
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function iC(e, t) {
      var i = t.updateQueue, l = e.updateQueue;
      if (i === l) {
        var u = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          effects: l.effects
        };
        t.updateQueue = u;
      }
    }
    function Qo(e, t) {
      var i = {
        eventTime: e,
        lane: t,
        tag: nC,
        payload: null,
        callback: null,
        next: null
      };
      return i;
    }
    function as(e, t, i) {
      var l = e.updateQueue;
      if (l === null)
        return null;
      var u = l.shared;
      if (jm === u && !C0 && (h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), C0 = !0), tO()) {
        var c = u.pending;
        return c === null ? t.next = t : (t.next = c.next, c.next = t), u.pending = t, rk(e, i);
      } else
        return nk(e, u, t, i);
    }
    function Pm(e, t, i) {
      var l = t.updateQueue;
      if (l !== null) {
        var u = l.shared;
        if (pp(i)) {
          var c = u.lanes;
          c = Sf(c, e.pendingLanes);
          var v = yt(c, i);
          u.lanes = v, hp(e, v);
        }
      }
    }
    function w0(e, t) {
      var i = e.updateQueue, l = e.alternate;
      if (l !== null) {
        var u = l.updateQueue;
        if (i === u) {
          var c = null, v = null, E = i.firstBaseUpdate;
          if (E !== null) {
            var x = E;
            do {
              var _ = {
                eventTime: x.eventTime,
                lane: x.lane,
                tag: x.tag,
                payload: x.payload,
                callback: x.callback,
                next: null
              };
              v === null ? c = v = _ : (v.next = _, v = _), x = x.next;
            } while (x !== null);
            v === null ? c = v = t : (v.next = t, v = t);
          } else
            c = v = t;
          i = {
            baseState: u.baseState,
            firstBaseUpdate: c,
            lastBaseUpdate: v,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = i;
          return;
        }
      }
      var O = i.lastBaseUpdate;
      O === null ? i.firstBaseUpdate = t : O.next = t, i.lastBaseUpdate = t;
    }
    function ik(e, t, i, l, u, c) {
      switch (i.tag) {
        case rC: {
          var v = i.payload;
          if (typeof v == "function") {
            J1();
            var E = v.call(c, l, u);
            {
              if (e.mode & Dt) {
                qn(!0);
                try {
                  v.call(c, l, u);
                } finally {
                  qn(!1);
                }
              }
              Z1();
            }
            return E;
          }
          return v;
        }
        case E0:
          e.flags = e.flags & ~hr | ct;
        case nC: {
          var x = i.payload, _;
          if (typeof x == "function") {
            J1(), _ = x.call(c, l, u);
            {
              if (e.mode & Dt) {
                qn(!0);
                try {
                  x.call(c, l, u);
                } finally {
                  qn(!1);
                }
              }
              Z1();
            }
          } else
            _ = x;
          return _ == null ? l : Rt({}, l, _);
        }
        case zm:
          return Bm = !0, l;
      }
      return l;
    }
    function Hm(e, t, i, l) {
      var u = e.updateQueue;
      Bm = !1, jm = u.shared;
      var c = u.firstBaseUpdate, v = u.lastBaseUpdate, E = u.shared.pending;
      if (E !== null) {
        u.shared.pending = null;
        var x = E, _ = x.next;
        x.next = null, v === null ? c = _ : v.next = _, v = x;
        var O = e.alternate;
        if (O !== null) {
          var I = O.updateQueue, P = I.lastBaseUpdate;
          P !== v && (P === null ? I.firstBaseUpdate = _ : P.next = _, I.lastBaseUpdate = x);
        }
      }
      if (c !== null) {
        var q = u.baseState, ee = ce, ie = null, be = null, et = null, $e = c;
        do {
          var Pt = $e.lane, Nt = $e.eventTime;
          if (Mo(l, Pt)) {
            if (et !== null) {
              var ae = {
                eventTime: Nt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Kn,
                tag: $e.tag,
                payload: $e.payload,
                callback: $e.callback,
                next: null
              };
              et = et.next = ae;
            }
            q = ik(e, u, $e, q, t, i);
            var Q = $e.callback;
            if (Q !== null && // If the update was already committed, we should not queue its
            // callback again.
            $e.lane !== Kn) {
              e.flags |= Oa;
              var ve = u.effects;
              ve === null ? u.effects = [$e] : ve.push($e);
            }
          } else {
            var W = {
              eventTime: Nt,
              lane: Pt,
              tag: $e.tag,
              payload: $e.payload,
              callback: $e.callback,
              next: null
            };
            et === null ? (be = et = W, ie = q) : et = et.next = W, ee = yt(ee, Pt);
          }
          if ($e = $e.next, $e === null) {
            if (E = u.shared.pending, E === null)
              break;
            var Oe = E, _e = Oe.next;
            Oe.next = null, $e = _e, u.lastBaseUpdate = Oe, u.shared.pending = null;
          }
        } while (!0);
        et === null && (ie = q), u.baseState = ie, u.firstBaseUpdate = be, u.lastBaseUpdate = et;
        var st = u.shared.interleaved;
        if (st !== null) {
          var mt = st;
          do
            ee = yt(ee, mt.lane), mt = mt.next;
          while (mt !== st);
        } else
          c === null && (u.shared.lanes = ce);
        Rh(ee), e.lanes = ee, e.memoizedState = q;
      }
      jm = null;
    }
    function ak(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function aC() {
      Bm = !1;
    }
    function Im() {
      return Bm;
    }
    function lC(e, t, i) {
      var l = t.effects;
      if (t.effects = null, l !== null)
        for (var u = 0; u < l.length; u++) {
          var c = l[u], v = c.callback;
          v !== null && (c.callback = null, ak(v, i));
        }
    }
    var Zp = {}, ls = ts(Zp), eh = ts(Zp), Vm = ts(Zp);
    function $m(e) {
      if (e === Zp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function oC() {
      var e = $m(Vm.current);
      return e;
    }
    function T0(e, t) {
      gi(Vm, t, e), gi(eh, e, e), gi(ls, Zp, e);
      var i = xb(t);
      yi(ls, e), gi(ls, i, e);
    }
    function rd(e) {
      yi(ls, e), yi(eh, e), yi(Vm, e);
    }
    function R0() {
      var e = $m(ls.current);
      return e;
    }
    function uC(e) {
      $m(Vm.current);
      var t = $m(ls.current), i = wb(t, e.type);
      t !== i && (gi(eh, e, e), gi(ls, i, e));
    }
    function b0(e) {
      eh.current === e && (yi(ls, e), yi(eh, e));
    }
    var lk = 0, sC = 1, cC = 1, th = 2, hl = ts(lk);
    function _0(e, t) {
      return (e & t) !== 0;
    }
    function id(e) {
      return e & sC;
    }
    function k0(e, t) {
      return e & sC | t;
    }
    function ok(e, t) {
      return e | t;
    }
    function os(e, t) {
      gi(hl, t, e);
    }
    function ad(e) {
      yi(hl, e);
    }
    function uk(e, t) {
      var i = e.memoizedState;
      return i !== null ? i.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Ym(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ye) {
          var i = t.memoizedState;
          if (i !== null) {
            var l = i.dehydrated;
            if (l === null || _1(l) || Wg(l))
              return t;
          }
        } else if (t.tag === Ht && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & ct) !== Ke;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var aa = (
      /*   */
      0
    ), wr = (
      /* */
      1
    ), Jl = (
      /*  */
      2
    ), Tr = (
      /*    */
      4
    ), qr = (
      /*   */
      8
    ), D0 = [];
    function O0() {
      for (var e = 0; e < D0.length; e++) {
        var t = D0[e];
        t._workInProgressVersionPrimary = null;
      }
      D0.length = 0;
    }
    function sk(e, t) {
      var i = t._getVersion, l = i(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, l] : e.mutableSourceEagerHydrationData.push(t, l);
    }
    var De = d.ReactCurrentDispatcher, nh = d.ReactCurrentBatchConfig, A0, ld;
    A0 = /* @__PURE__ */ new Set();
    var yc = ce, on = null, Rr = null, br = null, Wm = !1, rh = !1, ih = 0, ck = 0, fk = 25, oe = null, ja = null, us = -1, L0 = !1;
    function nn() {
      {
        var e = oe;
        ja === null ? ja = [e] : ja.push(e);
      }
    }
    function Te() {
      {
        var e = oe;
        ja !== null && (us++, ja[us] !== e && dk(e));
      }
    }
    function od(e) {
      e != null && !zt(e) && h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", oe, typeof e);
    }
    function dk(e) {
      {
        var t = dt(on);
        if (!A0.has(t) && (A0.add(t), ja !== null)) {
          for (var i = "", l = 30, u = 0; u <= us; u++) {
            for (var c = ja[u], v = u === us ? e : c, E = u + 1 + ". " + c; E.length < l; )
              E += " ";
            E += v + `
`, i += E;
          }
          h(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, i);
        }
      }
    }
    function Si() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function N0(e, t) {
      if (L0)
        return !1;
      if (t === null)
        return h("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", oe), !1;
      e.length !== t.length && h(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, oe, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var i = 0; i < t.length && i < e.length; i++)
        if (!Fe(e[i], t[i]))
          return !1;
      return !0;
    }
    function ud(e, t, i, l, u, c) {
      yc = c, on = t, ja = e !== null ? e._debugHookTypes : null, us = -1, L0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ce, e !== null && e.memoizedState !== null ? De.current = LC : ja !== null ? De.current = AC : De.current = OC;
      var v = i(l, u);
      if (rh) {
        var E = 0;
        do {
          if (rh = !1, ih = 0, E >= fk)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          E += 1, L0 = !1, Rr = null, br = null, t.updateQueue = null, us = -1, De.current = NC, v = i(l, u);
        } while (rh);
      }
      De.current = ay, t._debugHookTypes = ja;
      var x = Rr !== null && Rr.next !== null;
      if (yc = ce, on = null, Rr = null, br = null, oe = null, ja = null, us = -1, e !== null && (e.flags & Er) !== (t.flags & Er) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ve) !== Pe && h("Internal React error: Expected static flag was missing. Please notify the React team."), Wm = !1, x)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function sd() {
      var e = ih !== 0;
      return ih = 0, e;
    }
    function fC(e, t, i) {
      t.updateQueue = e.updateQueue, (t.mode & Oi) !== Pe ? t.flags &= ~(Ro | si | _n | xt) : t.flags &= ~(_n | xt), e.lanes = Gs(e.lanes, i);
    }
    function dC() {
      if (De.current = ay, Wm) {
        for (var e = on.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Wm = !1;
      }
      yc = ce, on = null, Rr = null, br = null, ja = null, us = -1, oe = null, RC = !1, rh = !1, ih = 0;
    }
    function Zl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return br === null ? on.memoizedState = br = e : br = br.next = e, br;
    }
    function Pa() {
      var e;
      if (Rr === null) {
        var t = on.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Rr.next;
      var i;
      if (br === null ? i = on.memoizedState : i = br.next, i !== null)
        br = i, i = br.next, Rr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Rr = e;
        var l = {
          memoizedState: Rr.memoizedState,
          baseState: Rr.baseState,
          baseQueue: Rr.baseQueue,
          queue: Rr.queue,
          next: null
        };
        br === null ? on.memoizedState = br = l : br = br.next = l;
      }
      return br;
    }
    function pC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function M0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function F0(e, t, i) {
      var l = Zl(), u;
      i !== void 0 ? u = i(t) : u = t, l.memoizedState = l.baseState = u;
      var c = {
        pending: null,
        interleaved: null,
        lanes: ce,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      l.queue = c;
      var v = c.dispatch = mk.bind(null, on, c);
      return [l.memoizedState, v];
    }
    function U0(e, t, i) {
      var l = Pa(), u = l.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var c = Rr, v = c.baseQueue, E = u.pending;
      if (E !== null) {
        if (v !== null) {
          var x = v.next, _ = E.next;
          v.next = _, E.next = x;
        }
        c.baseQueue !== v && h("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), c.baseQueue = v = E, u.pending = null;
      }
      if (v !== null) {
        var O = v.next, I = c.baseState, P = null, q = null, ee = null, ie = O;
        do {
          var be = ie.lane;
          if (Mo(yc, be)) {
            if (ee !== null) {
              var $e = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Kn,
                action: ie.action,
                hasEagerState: ie.hasEagerState,
                eagerState: ie.eagerState,
                next: null
              };
              ee = ee.next = $e;
            }
            if (ie.hasEagerState)
              I = ie.eagerState;
            else {
              var Pt = ie.action;
              I = e(I, Pt);
            }
          } else {
            var et = {
              lane: be,
              action: ie.action,
              hasEagerState: ie.hasEagerState,
              eagerState: ie.eagerState,
              next: null
            };
            ee === null ? (q = ee = et, P = I) : ee = ee.next = et, on.lanes = yt(on.lanes, be), Rh(be);
          }
          ie = ie.next;
        } while (ie !== null && ie !== O);
        ee === null ? P = I : ee.next = q, Fe(I, l.memoizedState) || ph(), l.memoizedState = I, l.baseState = P, l.baseQueue = ee, u.lastRenderedState = I;
      }
      var Nt = u.interleaved;
      if (Nt !== null) {
        var W = Nt;
        do {
          var ae = W.lane;
          on.lanes = yt(on.lanes, ae), Rh(ae), W = W.next;
        } while (W !== Nt);
      } else
        v === null && (u.lanes = ce);
      var Q = u.dispatch;
      return [l.memoizedState, Q];
    }
    function z0(e, t, i) {
      var l = Pa(), u = l.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var c = u.dispatch, v = u.pending, E = l.memoizedState;
      if (v !== null) {
        u.pending = null;
        var x = v.next, _ = x;
        do {
          var O = _.action;
          E = e(E, O), _ = _.next;
        } while (_ !== x);
        Fe(E, l.memoizedState) || ph(), l.memoizedState = E, l.baseQueue === null && (l.baseState = E), u.lastRenderedState = E;
      }
      return [E, c];
    }
    function _M(e, t, i) {
    }
    function kM(e, t, i) {
    }
    function B0(e, t, i) {
      var l = on, u = Zl(), c, v = Gr();
      if (v) {
        if (i === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        c = i(), ld || c !== i() && (h("The result of getServerSnapshot should be cached to avoid an infinite loop"), ld = !0);
      } else {
        if (c = t(), !ld) {
          var E = t();
          Fe(c, E) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), ld = !0);
        }
        var x = Ty();
        if (x === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Qs(x, yc) || hC(l, t, c);
      }
      u.memoizedState = c;
      var _ = {
        value: c,
        getSnapshot: t
      };
      return u.queue = _, Xm(mC.bind(null, l, _, e), [e]), l.flags |= _n, ah(wr | qr, vC.bind(null, l, _, c, t), void 0, null), c;
    }
    function Qm(e, t, i) {
      var l = on, u = Pa(), c = t();
      if (!ld) {
        var v = t();
        Fe(c, v) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), ld = !0);
      }
      var E = u.memoizedState, x = !Fe(E, c);
      x && (u.memoizedState = c, ph());
      var _ = u.queue;
      if (oh(mC.bind(null, l, _, e), [e]), _.getSnapshot !== t || x || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      br !== null && br.memoizedState.tag & wr) {
        l.flags |= _n, ah(wr | qr, vC.bind(null, l, _, c, t), void 0, null);
        var O = Ty();
        if (O === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Qs(O, yc) || hC(l, t, c);
      }
      return c;
    }
    function hC(e, t, i) {
      e.flags |= zs;
      var l = {
        getSnapshot: t,
        value: i
      }, u = on.updateQueue;
      if (u === null)
        u = pC(), on.updateQueue = u, u.stores = [l];
      else {
        var c = u.stores;
        c === null ? u.stores = [l] : c.push(l);
      }
    }
    function vC(e, t, i, l) {
      t.value = i, t.getSnapshot = l, yC(t) && gC(e);
    }
    function mC(e, t, i) {
      var l = function() {
        yC(t) && gC(e);
      };
      return i(l);
    }
    function yC(e) {
      var t = e.getSnapshot, i = e.value;
      try {
        var l = t();
        return !Fe(i, l);
      } catch {
        return !0;
      }
    }
    function gC(e) {
      var t = ia(e, Qe);
      t !== null && Or(t, e, Qe, yn);
    }
    function Gm(e) {
      var t = Zl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var i = {
        pending: null,
        interleaved: null,
        lanes: ce,
        dispatch: null,
        lastRenderedReducer: M0,
        lastRenderedState: e
      };
      t.queue = i;
      var l = i.dispatch = yk.bind(null, on, i);
      return [t.memoizedState, l];
    }
    function j0(e) {
      return U0(M0);
    }
    function P0(e) {
      return z0(M0);
    }
    function ah(e, t, i, l) {
      var u = {
        tag: e,
        create: t,
        destroy: i,
        deps: l,
        // Circular
        next: null
      }, c = on.updateQueue;
      if (c === null)
        c = pC(), on.updateQueue = c, c.lastEffect = u.next = u;
      else {
        var v = c.lastEffect;
        if (v === null)
          c.lastEffect = u.next = u;
        else {
          var E = v.next;
          v.next = u, u.next = E, c.lastEffect = u;
        }
      }
      return u;
    }
    function H0(e) {
      var t = Zl();
      {
        var i = {
          current: e
        };
        return t.memoizedState = i, i;
      }
    }
    function qm(e) {
      var t = Pa();
      return t.memoizedState;
    }
    function lh(e, t, i, l) {
      var u = Zl(), c = l === void 0 ? null : l;
      on.flags |= e, u.memoizedState = ah(wr | t, i, void 0, c);
    }
    function Km(e, t, i, l) {
      var u = Pa(), c = l === void 0 ? null : l, v = void 0;
      if (Rr !== null) {
        var E = Rr.memoizedState;
        if (v = E.destroy, c !== null) {
          var x = E.deps;
          if (N0(c, x)) {
            u.memoizedState = ah(t, i, v, c);
            return;
          }
        }
      }
      on.flags |= e, u.memoizedState = ah(wr | t, i, v, c);
    }
    function Xm(e, t) {
      return (on.mode & Oi) !== Pe ? lh(Ro | _n | Pl, qr, e, t) : lh(_n | Pl, qr, e, t);
    }
    function oh(e, t) {
      return Km(_n, qr, e, t);
    }
    function I0(e, t) {
      return lh(xt, Jl, e, t);
    }
    function Jm(e, t) {
      return Km(xt, Jl, e, t);
    }
    function V0(e, t) {
      var i = xt;
      return i |= ui, (on.mode & Oi) !== Pe && (i |= si), lh(i, Tr, e, t);
    }
    function Zm(e, t) {
      return Km(xt, Tr, e, t);
    }
    function SC(e, t) {
      if (typeof t == "function") {
        var i = t, l = e();
        return i(l), function() {
          i(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || h("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var c = e();
        return u.current = c, function() {
          u.current = null;
        };
      }
    }
    function $0(e, t, i) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = i != null ? i.concat([e]) : null, u = xt;
      return u |= ui, (on.mode & Oi) !== Pe && (u |= si), lh(u, Tr, SC.bind(null, t, e), l);
    }
    function ey(e, t, i) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = i != null ? i.concat([e]) : null;
      return Km(xt, Tr, SC.bind(null, t, e), l);
    }
    function pk(e, t) {
    }
    var ty = pk;
    function Y0(e, t) {
      var i = Zl(), l = t === void 0 ? null : t;
      return i.memoizedState = [e, l], e;
    }
    function ny(e, t) {
      var i = Pa(), l = t === void 0 ? null : t, u = i.memoizedState;
      if (u !== null && l !== null) {
        var c = u[1];
        if (N0(l, c))
          return u[0];
      }
      return i.memoizedState = [e, l], e;
    }
    function W0(e, t) {
      var i = Zl(), l = t === void 0 ? null : t, u = e();
      return i.memoizedState = [u, l], u;
    }
    function ry(e, t) {
      var i = Pa(), l = t === void 0 ? null : t, u = i.memoizedState;
      if (u !== null && l !== null) {
        var c = u[1];
        if (N0(l, c))
          return u[0];
      }
      var v = e();
      return i.memoizedState = [v, l], v;
    }
    function Q0(e) {
      var t = Zl();
      return t.memoizedState = e, e;
    }
    function EC(e) {
      var t = Pa(), i = Rr, l = i.memoizedState;
      return xC(t, l, e);
    }
    function CC(e) {
      var t = Pa();
      if (Rr === null)
        return t.memoizedState = e, e;
      var i = Rr.memoizedState;
      return xC(t, i, e);
    }
    function xC(e, t, i) {
      var l = !Nv(yc);
      if (l) {
        if (!Fe(i, t)) {
          var u = Uv();
          on.lanes = yt(on.lanes, u), Rh(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, ph()), e.memoizedState = i, i;
    }
    function hk(e, t, i) {
      var l = Ji();
      jn(pg(l, ol)), e(!0);
      var u = nh.transition;
      nh.transition = {};
      var c = nh.transition;
      nh.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (jn(l), nh.transition = u, u === null && c._updatedFibers) {
          var v = c._updatedFibers.size;
          v > 10 && w("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), c._updatedFibers.clear();
        }
      }
    }
    function G0() {
      var e = Gm(!1), t = e[0], i = e[1], l = hk.bind(null, i), u = Zl();
      return u.memoizedState = l, [t, l];
    }
    function wC() {
      var e = j0(), t = e[0], i = Pa(), l = i.memoizedState;
      return [t, l];
    }
    function TC() {
      var e = P0(), t = e[0], i = Pa(), l = i.memoizedState;
      return [t, l];
    }
    var RC = !1;
    function vk() {
      return RC;
    }
    function q0() {
      var e = Zl(), t = Ty(), i = t.identifierPrefix, l;
      if (Gr()) {
        var u = L_();
        l = ":" + i + "R" + u;
        var c = ih++;
        c > 0 && (l += "H" + c.toString(32)), l += ":";
      } else {
        var v = ck++;
        l = ":" + i + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = l, l;
    }
    function iy() {
      var e = Pa(), t = e.memoizedState;
      return t;
    }
    function mk(e, t, i) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = ps(e), u = {
        lane: l,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (bC(e))
        _C(t, u);
      else {
        var c = tC(e, t, u, l);
        if (c !== null) {
          var v = Mi();
          Or(c, e, l, v), kC(c, t, l);
        }
      }
      DC(e, l);
    }
    function yk(e, t, i) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = ps(e), u = {
        lane: l,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (bC(e))
        _C(t, u);
      else {
        var c = e.alternate;
        if (e.lanes === ce && (c === null || c.lanes === ce)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var E;
            E = De.current, De.current = vl;
            try {
              var x = t.lastRenderedState, _ = v(x, i);
              if (u.hasEagerState = !0, u.eagerState = _, Fe(_, x)) {
                tk(e, t, u, l);
                return;
              }
            } catch {
            } finally {
              De.current = E;
            }
          }
        }
        var O = tC(e, t, u, l);
        if (O !== null) {
          var I = Mi();
          Or(O, e, l, I), kC(O, t, l);
        }
      }
      DC(e, l);
    }
    function bC(e) {
      var t = e.alternate;
      return e === on || t !== null && t === on;
    }
    function _C(e, t) {
      rh = Wm = !0;
      var i = e.pending;
      i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
    }
    function kC(e, t, i) {
      if (pp(i)) {
        var l = t.lanes;
        l = Sf(l, e.pendingLanes);
        var u = yt(l, i);
        t.lanes = u, hp(e, u);
      }
    }
    function DC(e, t, i) {
      Hs(e, t);
    }
    var ay = {
      readContext: gr,
      useCallback: Si,
      useContext: Si,
      useEffect: Si,
      useImperativeHandle: Si,
      useInsertionEffect: Si,
      useLayoutEffect: Si,
      useMemo: Si,
      useReducer: Si,
      useRef: Si,
      useState: Si,
      useDebugValue: Si,
      useDeferredValue: Si,
      useTransition: Si,
      useMutableSource: Si,
      useSyncExternalStore: Si,
      useId: Si,
      unstable_isNewReconciler: ye
    }, OC = null, AC = null, LC = null, NC = null, eo = null, vl = null, ly = null;
    {
      var K0 = function() {
        h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, pt = function() {
        h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      OC = {
        readContext: function(e) {
          return gr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", nn(), od(t), Y0(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", nn(), gr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", nn(), od(t), Xm(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return oe = "useImperativeHandle", nn(), od(i), $0(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", nn(), od(t), I0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", nn(), od(t), V0(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", nn(), od(t);
          var i = De.current;
          De.current = eo;
          try {
            return W0(e, t);
          } finally {
            De.current = i;
          }
        },
        useReducer: function(e, t, i) {
          oe = "useReducer", nn();
          var l = De.current;
          De.current = eo;
          try {
            return F0(e, t, i);
          } finally {
            De.current = l;
          }
        },
        useRef: function(e) {
          return oe = "useRef", nn(), H0(e);
        },
        useState: function(e) {
          oe = "useState", nn();
          var t = De.current;
          De.current = eo;
          try {
            return Gm(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", nn(), void 0;
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", nn(), Q0(e);
        },
        useTransition: function() {
          return oe = "useTransition", nn(), G0();
        },
        useMutableSource: function(e, t, i) {
          return oe = "useMutableSource", nn(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return oe = "useSyncExternalStore", nn(), B0(e, t, i);
        },
        useId: function() {
          return oe = "useId", nn(), q0();
        },
        unstable_isNewReconciler: ye
      }, AC = {
        readContext: function(e) {
          return gr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", Te(), Y0(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", Te(), gr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", Te(), Xm(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return oe = "useImperativeHandle", Te(), $0(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", Te(), I0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", Te(), V0(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", Te();
          var i = De.current;
          De.current = eo;
          try {
            return W0(e, t);
          } finally {
            De.current = i;
          }
        },
        useReducer: function(e, t, i) {
          oe = "useReducer", Te();
          var l = De.current;
          De.current = eo;
          try {
            return F0(e, t, i);
          } finally {
            De.current = l;
          }
        },
        useRef: function(e) {
          return oe = "useRef", Te(), H0(e);
        },
        useState: function(e) {
          oe = "useState", Te();
          var t = De.current;
          De.current = eo;
          try {
            return Gm(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", Te(), void 0;
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", Te(), Q0(e);
        },
        useTransition: function() {
          return oe = "useTransition", Te(), G0();
        },
        useMutableSource: function(e, t, i) {
          return oe = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return oe = "useSyncExternalStore", Te(), B0(e, t, i);
        },
        useId: function() {
          return oe = "useId", Te(), q0();
        },
        unstable_isNewReconciler: ye
      }, LC = {
        readContext: function(e) {
          return gr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", Te(), ny(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", Te(), gr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", Te(), oh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return oe = "useImperativeHandle", Te(), ey(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", Te(), Jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", Te(), Zm(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", Te();
          var i = De.current;
          De.current = vl;
          try {
            return ry(e, t);
          } finally {
            De.current = i;
          }
        },
        useReducer: function(e, t, i) {
          oe = "useReducer", Te();
          var l = De.current;
          De.current = vl;
          try {
            return U0(e, t, i);
          } finally {
            De.current = l;
          }
        },
        useRef: function(e) {
          return oe = "useRef", Te(), qm();
        },
        useState: function(e) {
          oe = "useState", Te();
          var t = De.current;
          De.current = vl;
          try {
            return j0(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", Te(), ty();
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", Te(), EC(e);
        },
        useTransition: function() {
          return oe = "useTransition", Te(), wC();
        },
        useMutableSource: function(e, t, i) {
          return oe = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return oe = "useSyncExternalStore", Te(), Qm(e, t);
        },
        useId: function() {
          return oe = "useId", Te(), iy();
        },
        unstable_isNewReconciler: ye
      }, NC = {
        readContext: function(e) {
          return gr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", Te(), ny(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", Te(), gr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", Te(), oh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return oe = "useImperativeHandle", Te(), ey(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", Te(), Jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", Te(), Zm(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", Te();
          var i = De.current;
          De.current = ly;
          try {
            return ry(e, t);
          } finally {
            De.current = i;
          }
        },
        useReducer: function(e, t, i) {
          oe = "useReducer", Te();
          var l = De.current;
          De.current = ly;
          try {
            return z0(e, t, i);
          } finally {
            De.current = l;
          }
        },
        useRef: function(e) {
          return oe = "useRef", Te(), qm();
        },
        useState: function(e) {
          oe = "useState", Te();
          var t = De.current;
          De.current = ly;
          try {
            return P0(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", Te(), ty();
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", Te(), CC(e);
        },
        useTransition: function() {
          return oe = "useTransition", Te(), TC();
        },
        useMutableSource: function(e, t, i) {
          return oe = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return oe = "useSyncExternalStore", Te(), Qm(e, t);
        },
        useId: function() {
          return oe = "useId", Te(), iy();
        },
        unstable_isNewReconciler: ye
      }, eo = {
        readContext: function(e) {
          return K0(), gr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", pt(), nn(), Y0(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", pt(), nn(), gr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", pt(), nn(), Xm(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return oe = "useImperativeHandle", pt(), nn(), $0(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", pt(), nn(), I0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", pt(), nn(), V0(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", pt(), nn();
          var i = De.current;
          De.current = eo;
          try {
            return W0(e, t);
          } finally {
            De.current = i;
          }
        },
        useReducer: function(e, t, i) {
          oe = "useReducer", pt(), nn();
          var l = De.current;
          De.current = eo;
          try {
            return F0(e, t, i);
          } finally {
            De.current = l;
          }
        },
        useRef: function(e) {
          return oe = "useRef", pt(), nn(), H0(e);
        },
        useState: function(e) {
          oe = "useState", pt(), nn();
          var t = De.current;
          De.current = eo;
          try {
            return Gm(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", pt(), nn(), void 0;
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", pt(), nn(), Q0(e);
        },
        useTransition: function() {
          return oe = "useTransition", pt(), nn(), G0();
        },
        useMutableSource: function(e, t, i) {
          return oe = "useMutableSource", pt(), nn(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return oe = "useSyncExternalStore", pt(), nn(), B0(e, t, i);
        },
        useId: function() {
          return oe = "useId", pt(), nn(), q0();
        },
        unstable_isNewReconciler: ye
      }, vl = {
        readContext: function(e) {
          return K0(), gr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", pt(), Te(), ny(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", pt(), Te(), gr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", pt(), Te(), oh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return oe = "useImperativeHandle", pt(), Te(), ey(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", pt(), Te(), Jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", pt(), Te(), Zm(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", pt(), Te();
          var i = De.current;
          De.current = vl;
          try {
            return ry(e, t);
          } finally {
            De.current = i;
          }
        },
        useReducer: function(e, t, i) {
          oe = "useReducer", pt(), Te();
          var l = De.current;
          De.current = vl;
          try {
            return U0(e, t, i);
          } finally {
            De.current = l;
          }
        },
        useRef: function(e) {
          return oe = "useRef", pt(), Te(), qm();
        },
        useState: function(e) {
          oe = "useState", pt(), Te();
          var t = De.current;
          De.current = vl;
          try {
            return j0(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", pt(), Te(), ty();
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", pt(), Te(), EC(e);
        },
        useTransition: function() {
          return oe = "useTransition", pt(), Te(), wC();
        },
        useMutableSource: function(e, t, i) {
          return oe = "useMutableSource", pt(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return oe = "useSyncExternalStore", pt(), Te(), Qm(e, t);
        },
        useId: function() {
          return oe = "useId", pt(), Te(), iy();
        },
        unstable_isNewReconciler: ye
      }, ly = {
        readContext: function(e) {
          return K0(), gr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", pt(), Te(), ny(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", pt(), Te(), gr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", pt(), Te(), oh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return oe = "useImperativeHandle", pt(), Te(), ey(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", pt(), Te(), Jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", pt(), Te(), Zm(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", pt(), Te();
          var i = De.current;
          De.current = vl;
          try {
            return ry(e, t);
          } finally {
            De.current = i;
          }
        },
        useReducer: function(e, t, i) {
          oe = "useReducer", pt(), Te();
          var l = De.current;
          De.current = vl;
          try {
            return z0(e, t, i);
          } finally {
            De.current = l;
          }
        },
        useRef: function(e) {
          return oe = "useRef", pt(), Te(), qm();
        },
        useState: function(e) {
          oe = "useState", pt(), Te();
          var t = De.current;
          De.current = vl;
          try {
            return P0(e);
          } finally {
            De.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", pt(), Te(), ty();
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", pt(), Te(), CC(e);
        },
        useTransition: function() {
          return oe = "useTransition", pt(), Te(), TC();
        },
        useMutableSource: function(e, t, i) {
          return oe = "useMutableSource", pt(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return oe = "useSyncExternalStore", pt(), Te(), Qm(e, t);
        },
        useId: function() {
          return oe = "useId", pt(), Te(), iy();
        },
        unstable_isNewReconciler: ye
      };
    }
    var ss = f.unstable_now, MC = 0, oy = -1, uh = -1, uy = -1, X0 = !1, sy = !1;
    function FC() {
      return X0;
    }
    function gk() {
      sy = !0;
    }
    function Sk() {
      X0 = !1, sy = !1;
    }
    function Ek() {
      X0 = sy, sy = !1;
    }
    function UC() {
      return MC;
    }
    function zC() {
      MC = ss();
    }
    function J0(e) {
      uh = ss(), e.actualStartTime < 0 && (e.actualStartTime = ss());
    }
    function BC(e) {
      uh = -1;
    }
    function cy(e, t) {
      if (uh >= 0) {
        var i = ss() - uh;
        e.actualDuration += i, t && (e.selfBaseDuration = i), uh = -1;
      }
    }
    function to(e) {
      if (oy >= 0) {
        var t = ss() - oy;
        oy = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case N:
              var l = i.stateNode;
              l.effectDuration += t;
              return;
            case St:
              var u = i.stateNode;
              u.effectDuration += t;
              return;
          }
          i = i.return;
        }
      }
    }
    function Z0(e) {
      if (uy >= 0) {
        var t = ss() - uy;
        uy = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case N:
              var l = i.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
            case St:
              var u = i.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          i = i.return;
        }
      }
    }
    function no() {
      oy = ss();
    }
    function eS() {
      uy = ss();
    }
    function tS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ml(e, t) {
      if (e && e.defaultProps) {
        var i = Rt({}, t), l = e.defaultProps;
        for (var u in l)
          i[u] === void 0 && (i[u] = l[u]);
        return i;
      }
      return t;
    }
    var nS = {}, rS, iS, aS, lS, oS, jC, fy, uS, sS, cS, sh;
    {
      rS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set(), oS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set(), cS = /* @__PURE__ */ new Set(), sh = /* @__PURE__ */ new Set();
      var PC = /* @__PURE__ */ new Set();
      fy = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var i = t + "_" + e;
          PC.has(i) || (PC.add(i), h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, jC = function(e, t) {
        if (t === void 0) {
          var i = Ut(e) || "Component";
          oS.has(i) || (oS.add(i), h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", i));
        }
      }, Object.defineProperty(nS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(nS);
    }
    function fS(e, t, i, l) {
      var u = e.memoizedState, c = i(l, u);
      {
        if (e.mode & Dt) {
          qn(!0);
          try {
            c = i(l, u);
          } finally {
            qn(!1);
          }
        }
        jC(t, c);
      }
      var v = c == null ? u : Rt({}, u, c);
      if (e.memoizedState = v, e.lanes === ce) {
        var E = e.updateQueue;
        E.baseState = v;
      }
    }
    var dS = {
      isMounted: ki,
      enqueueSetState: function(e, t, i) {
        var l = $i(e), u = Mi(), c = ps(l), v = Qo(u, c);
        v.payload = t, i != null && (fy(i, "setState"), v.callback = i);
        var E = as(l, v, c);
        E !== null && (Or(E, l, c, u), Pm(E, l, c)), Hs(l, c);
      },
      enqueueReplaceState: function(e, t, i) {
        var l = $i(e), u = Mi(), c = ps(l), v = Qo(u, c);
        v.tag = rC, v.payload = t, i != null && (fy(i, "replaceState"), v.callback = i);
        var E = as(l, v, c);
        E !== null && (Or(E, l, c, u), Pm(E, l, c)), Hs(l, c);
      },
      enqueueForceUpdate: function(e, t) {
        var i = $i(e), l = Mi(), u = ps(i), c = Qo(l, u);
        c.tag = zm, t != null && (fy(t, "forceUpdate"), c.callback = t);
        var v = as(i, c, u);
        v !== null && (Or(v, i, u, l), Pm(v, i, u)), tf(i, u);
      }
    };
    function HC(e, t, i, l, u, c, v) {
      var E = e.stateNode;
      if (typeof E.shouldComponentUpdate == "function") {
        var x = E.shouldComponentUpdate(l, c, v);
        {
          if (e.mode & Dt) {
            qn(!0);
            try {
              x = E.shouldComponentUpdate(l, c, v);
            } finally {
              qn(!1);
            }
          }
          x === void 0 && h("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ut(t) || "Component");
        }
        return x;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ut(i, l) || !ut(u, c) : !0;
    }
    function Ck(e, t, i) {
      var l = e.stateNode;
      {
        var u = Ut(t) || "Component", c = l.render;
        c || (t.prototype && typeof t.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), l.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), l.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !sh.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Dt) === Pe && (sh.add(t), h(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !sh.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Dt) === Pe && (sh.add(t), h(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), l.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !sS.has(t) && (sS.add(t), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof l.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof l.shouldComponentUpdate < "u" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ut(t) || "A pure component"), typeof l.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof l.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof l.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof l.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var v = l.props !== i;
        l.props !== void 0 && v && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), l.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !aS.has(t) && (aS.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ut(t))), typeof l.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof l.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var E = l.state;
        E && (typeof E != "object" || zt(E)) && h("%s.state: must be set to an object or null", u), typeof l.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function IC(e, t) {
      t.updater = dS, e.stateNode = t, xu(t, e), t._reactInternalInstance = nS;
    }
    function VC(e, t, i) {
      var l = !1, u = Ea, c = Ea, v = t.contextType;
      if ("contextType" in t) {
        var E = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === de && v._context === void 0
        );
        if (!E && !cS.has(t)) {
          cS.add(t);
          var x = "";
          v === void 0 ? x = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? x = " However, it is set to a " + typeof v + "." : v.$$typeof === U ? x = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? x = " Did you accidentally pass the Context.Consumer instead?" : x = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ut(t) || "Component", x);
        }
      }
      if (typeof v == "object" && v !== null)
        c = gr(v);
      else {
        u = qf(e, t, !0);
        var _ = t.contextTypes;
        l = _ != null, c = l ? Kf(e, u) : Ea;
      }
      var O = new t(i, c);
      if (e.mode & Dt) {
        qn(!0);
        try {
          O = new t(i, c);
        } finally {
          qn(!1);
        }
      }
      var I = e.memoizedState = O.state !== null && O.state !== void 0 ? O.state : null;
      IC(e, O);
      {
        if (typeof t.getDerivedStateFromProps == "function" && I === null) {
          var P = Ut(t) || "Component";
          iS.has(P) || (iS.add(P), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", P, O.state === null ? "null" : "undefined", P));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof O.getSnapshotBeforeUpdate == "function") {
          var q = null, ee = null, ie = null;
          if (typeof O.componentWillMount == "function" && O.componentWillMount.__suppressDeprecationWarning !== !0 ? q = "componentWillMount" : typeof O.UNSAFE_componentWillMount == "function" && (q = "UNSAFE_componentWillMount"), typeof O.componentWillReceiveProps == "function" && O.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? ee = "componentWillReceiveProps" : typeof O.UNSAFE_componentWillReceiveProps == "function" && (ee = "UNSAFE_componentWillReceiveProps"), typeof O.componentWillUpdate == "function" && O.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ie = "componentWillUpdate" : typeof O.UNSAFE_componentWillUpdate == "function" && (ie = "UNSAFE_componentWillUpdate"), q !== null || ee !== null || ie !== null) {
            var be = Ut(t) || "Component", et = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            lS.has(be) || (lS.add(be), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, be, et, q !== null ? `
  ` + q : "", ee !== null ? `
  ` + ee : "", ie !== null ? `
  ` + ie : ""));
          }
        }
      }
      return l && L1(e, u, c), O;
    }
    function xk(e, t) {
      var i = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), i !== t.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", dt(e) || "Component"), dS.enqueueReplaceState(t, t.state, null));
    }
    function $C(e, t, i, l) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, l), t.state !== u) {
        {
          var c = dt(e) || "Component";
          rS.has(c) || (rS.add(c), h("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", c));
        }
        dS.enqueueReplaceState(t, t.state, null);
      }
    }
    function pS(e, t, i, l) {
      Ck(e, t, i);
      var u = e.stateNode;
      u.props = i, u.state = e.memoizedState, u.refs = {}, x0(e);
      var c = t.contextType;
      if (typeof c == "object" && c !== null)
        u.context = gr(c);
      else {
        var v = qf(e, t, !0);
        u.context = Kf(e, v);
      }
      {
        if (u.state === i) {
          var E = Ut(t) || "Component";
          uS.has(E) || (uS.add(E), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", E));
        }
        e.mode & Dt && pl.recordLegacyContextWarning(e, u), pl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var x = t.getDerivedStateFromProps;
      if (typeof x == "function" && (fS(e, t, x, i), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (xk(e, u), Hm(e, i, u, l), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var _ = xt;
        _ |= ui, (e.mode & Oi) !== Pe && (_ |= si), e.flags |= _;
      }
    }
    function wk(e, t, i, l) {
      var u = e.stateNode, c = e.memoizedProps;
      u.props = c;
      var v = u.context, E = t.contextType, x = Ea;
      if (typeof E == "object" && E !== null)
        x = gr(E);
      else {
        var _ = qf(e, t, !0);
        x = Kf(e, _);
      }
      var O = t.getDerivedStateFromProps, I = typeof O == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !I && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (c !== i || v !== x) && $C(e, u, i, x), aC();
      var P = e.memoizedState, q = u.state = P;
      if (Hm(e, i, u, l), q = e.memoizedState, c === i && P === q && !xm() && !Im()) {
        if (typeof u.componentDidMount == "function") {
          var ee = xt;
          ee |= ui, (e.mode & Oi) !== Pe && (ee |= si), e.flags |= ee;
        }
        return !1;
      }
      typeof O == "function" && (fS(e, t, O, i), q = e.memoizedState);
      var ie = Im() || HC(e, t, c, i, P, q, x);
      if (ie) {
        if (!I && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var be = xt;
          be |= ui, (e.mode & Oi) !== Pe && (be |= si), e.flags |= be;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var et = xt;
          et |= ui, (e.mode & Oi) !== Pe && (et |= si), e.flags |= et;
        }
        e.memoizedProps = i, e.memoizedState = q;
      }
      return u.props = i, u.state = q, u.context = x, ie;
    }
    function Tk(e, t, i, l, u) {
      var c = t.stateNode;
      iC(e, t);
      var v = t.memoizedProps, E = t.type === t.elementType ? v : ml(t.type, v);
      c.props = E;
      var x = t.pendingProps, _ = c.context, O = i.contextType, I = Ea;
      if (typeof O == "object" && O !== null)
        I = gr(O);
      else {
        var P = qf(t, i, !0);
        I = Kf(t, P);
      }
      var q = i.getDerivedStateFromProps, ee = typeof q == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !ee && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (v !== x || _ !== I) && $C(t, c, l, I), aC();
      var ie = t.memoizedState, be = c.state = ie;
      if (Hm(t, l, c, u), be = t.memoizedState, v === x && ie === be && !xm() && !Im() && !je)
        return typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= xt), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= Yi), !1;
      typeof q == "function" && (fS(t, i, q, l), be = t.memoizedState);
      var et = Im() || HC(t, i, E, l, ie, be, I) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      je;
      return et ? (!ee && (typeof c.UNSAFE_componentWillUpdate == "function" || typeof c.componentWillUpdate == "function") && (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(l, be, I), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(l, be, I)), typeof c.componentDidUpdate == "function" && (t.flags |= xt), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= Yi)) : (typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= xt), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= Yi), t.memoizedProps = l, t.memoizedState = be), c.props = l, c.state = be, c.context = I, et;
    }
    function gc(e, t) {
      return {
        value: e,
        source: t,
        stack: su(t),
        digest: null
      };
    }
    function hS(e, t, i) {
      return {
        value: e,
        source: null,
        stack: i ?? null,
        digest: t ?? null
      };
    }
    function Rk(e, t) {
      return !0;
    }
    function vS(e, t) {
      try {
        var i = Rk(e, t);
        if (i === !1)
          return;
        var l = t.value, u = t.source, c = t.stack, v = c !== null ? c : "";
        if (l != null && l._suppressLogging) {
          if (e.tag === B)
            return;
          console.error(l);
        }
        var E = u ? dt(u) : null, x = E ? "The above error occurred in the <" + E + "> component:" : "The above error occurred in one of your React components:", _;
        if (e.tag === N)
          _ = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var O = dt(e) || "Anonymous";
          _ = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + O + ".");
        }
        var I = x + `
` + v + `

` + ("" + _);
        console.error(I);
      } catch (P) {
        setTimeout(function() {
          throw P;
        });
      }
    }
    var bk = typeof WeakMap == "function" ? WeakMap : Map;
    function YC(e, t, i) {
      var l = Qo(yn, i);
      l.tag = E0, l.payload = {
        element: null
      };
      var u = t.value;
      return l.callback = function() {
        gO(u), vS(e, t);
      }, l;
    }
    function mS(e, t, i) {
      var l = Qo(yn, i);
      l.tag = E0;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var c = t.value;
        l.payload = function() {
          return u(c);
        }, l.callback = function() {
          nw(e), vS(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (l.callback = function() {
        nw(e), vS(e, t), typeof u != "function" && mO(this);
        var x = t.value, _ = t.stack;
        this.componentDidCatch(x, {
          componentStack: _ !== null ? _ : ""
        }), typeof u != "function" && (vi(e.lanes, Qe) || h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", dt(e) || "Unknown"));
      }), l;
    }
    function WC(e, t, i) {
      var l = e.pingCache, u;
      if (l === null ? (l = e.pingCache = new bk(), u = /* @__PURE__ */ new Set(), l.set(t, u)) : (u = l.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(t, u))), !u.has(i)) {
        u.add(i);
        var c = SO.bind(null, e, t, i);
        Di && bh(e, i), t.then(c, c);
      }
    }
    function _k(e, t, i, l) {
      var u = e.updateQueue;
      if (u === null) {
        var c = /* @__PURE__ */ new Set();
        c.add(i), e.updateQueue = c;
      } else
        u.add(i);
    }
    function kk(e, t) {
      var i = e.tag;
      if ((e.mode & Ve) === Pe && (i === L || i === Ge || i === ot)) {
        var l = e.alternate;
        l ? (e.updateQueue = l.updateQueue, e.memoizedState = l.memoizedState, e.lanes = l.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function QC(e) {
      var t = e;
      do {
        if (t.tag === Ye && uk(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function GC(e, t, i, l, u) {
      if ((e.mode & Ve) === Pe) {
        if (e === t)
          e.flags |= hr;
        else {
          if (e.flags |= ct, i.flags |= Bs, i.flags &= ~(Vc | bi), i.tag === B) {
            var c = i.alternate;
            if (c === null)
              i.tag = Tn;
            else {
              var v = Qo(yn, Qe);
              v.tag = zm, as(i, v, Qe);
            }
          }
          i.lanes = yt(i.lanes, Qe);
        }
        return e;
      }
      return e.flags |= hr, e.lanes = u, e;
    }
    function Dk(e, t, i, l, u) {
      if (i.flags |= bi, Di && bh(e, u), l !== null && typeof l == "object" && typeof l.then == "function") {
        var c = l;
        kk(i), Gr() && i.mode & Ve && j1();
        var v = QC(t);
        if (v !== null) {
          v.flags &= ~Bn, GC(v, t, i, e, u), v.mode & Ve && WC(e, c, u), _k(v, e, c);
          return;
        } else {
          if (!dp(u)) {
            WC(e, c, u), qS();
            return;
          }
          var E = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          l = E;
        }
      } else if (Gr() && i.mode & Ve) {
        j1();
        var x = QC(t);
        if (x !== null) {
          (x.flags & hr) === Ke && (x.flags |= Bn), GC(x, t, i, e, u), u0(gc(l, i));
          return;
        }
      }
      l = gc(l, i), uO(l);
      var _ = t;
      do {
        switch (_.tag) {
          case N: {
            var O = l;
            _.flags |= hr;
            var I = Uu(u);
            _.lanes = yt(_.lanes, I);
            var P = YC(_, O, I);
            w0(_, P);
            return;
          }
          case B:
            var q = l, ee = _.type, ie = _.stateNode;
            if ((_.flags & ct) === Ke && (typeof ee.getDerivedStateFromError == "function" || ie !== null && typeof ie.componentDidCatch == "function" && !Qx(ie))) {
              _.flags |= hr;
              var be = Uu(u);
              _.lanes = yt(_.lanes, be);
              var et = mS(_, q, be);
              w0(_, et);
              return;
            }
            break;
        }
        _ = _.return;
      } while (_ !== null);
    }
    function Ok() {
      return null;
    }
    var ch = d.ReactCurrentOwner, yl = !1, yS, fh, gS, SS, ES, Sc, CS, dy, dh;
    yS = {}, fh = {}, gS = {}, SS = {}, ES = {}, Sc = !1, CS = {}, dy = {}, dh = {};
    function Li(e, t, i, l) {
      e === null ? t.child = X1(t, null, i, l) : t.child = ed(t, e.child, i, l);
    }
    function Ak(e, t, i, l) {
      t.child = ed(t, e.child, null, l), t.child = ed(t, null, i, l);
    }
    function qC(e, t, i, l, u) {
      if (t.type !== t.elementType) {
        var c = i.propTypes;
        c && fl(
          c,
          l,
          // Resolved props
          "prop",
          Ut(i)
        );
      }
      var v = i.render, E = t.ref, x, _;
      nd(t, u), bu(t);
      {
        if (ch.current = t, ai(!0), x = ud(e, t, v, l, E, u), _ = sd(), t.mode & Dt) {
          qn(!0);
          try {
            x = ud(e, t, v, l, E, u), _ = sd();
          } finally {
            qn(!1);
          }
        }
        ai(!1);
      }
      return di(), e !== null && !yl ? (fC(e, t, u), Go(e, t, u)) : (Gr() && _ && n0(t), t.flags |= Bl, Li(e, t, x, u), t.child);
    }
    function KC(e, t, i, l, u) {
      if (e === null) {
        var c = i.type;
        if (UO(c) && i.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        i.defaultProps === void 0) {
          var v = c;
          return v = yd(c), t.tag = ot, t.type = v, TS(t, c), XC(e, t, v, l, u);
        }
        {
          var E = c.propTypes;
          if (E && fl(
            E,
            l,
            // Resolved props
            "prop",
            Ut(c)
          ), i.defaultProps !== void 0) {
            var x = Ut(c) || "Unknown";
            dh[x] || (h("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", x), dh[x] = !0);
          }
        }
        var _ = lE(i.type, null, l, t, t.mode, u);
        return _.ref = t.ref, _.return = t, t.child = _, _;
      }
      {
        var O = i.type, I = O.propTypes;
        I && fl(
          I,
          l,
          // Resolved props
          "prop",
          Ut(O)
        );
      }
      var P = e.child, q = OS(e, u);
      if (!q) {
        var ee = P.memoizedProps, ie = i.compare;
        if (ie = ie !== null ? ie : ut, ie(ee, l) && e.ref === t.ref)
          return Go(e, t, u);
      }
      t.flags |= Bl;
      var be = Tc(P, l);
      return be.ref = t.ref, be.return = t, t.child = be, be;
    }
    function XC(e, t, i, l, u) {
      if (t.type !== t.elementType) {
        var c = t.elementType;
        if (c.$$typeof === it) {
          var v = c, E = v._payload, x = v._init;
          try {
            c = x(E);
          } catch {
            c = null;
          }
          var _ = c && c.propTypes;
          _ && fl(
            _,
            l,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ut(c)
          );
        }
      }
      if (e !== null) {
        var O = e.memoizedProps;
        if (ut(O, l) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (yl = !1, t.pendingProps = l = O, OS(e, u))
            (e.flags & Bs) !== Ke && (yl = !0);
          else
            return t.lanes = e.lanes, Go(e, t, u);
      }
      return xS(e, t, i, l, u);
    }
    function JC(e, t, i) {
      var l = t.pendingProps, u = l.children, c = e !== null ? e.memoizedState : null;
      if (l.mode === "hidden" || xe)
        if ((t.mode & Ve) === Pe) {
          var v = {
            baseLanes: ce,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, Ry(t, i);
        } else if (vi(i, Br)) {
          var I = {
            baseLanes: ce,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = I;
          var P = c !== null ? c.baseLanes : i;
          Ry(t, P);
        } else {
          var E = null, x;
          if (c !== null) {
            var _ = c.baseLanes;
            x = yt(_, i);
          } else
            x = i;
          t.lanes = t.childLanes = Br;
          var O = {
            baseLanes: x,
            cachePool: E,
            transitions: null
          };
          return t.memoizedState = O, t.updateQueue = null, Ry(t, x), null;
        }
      else {
        var q;
        c !== null ? (q = yt(c.baseLanes, i), t.memoizedState = null) : q = i, Ry(t, q);
      }
      return Li(e, t, u, i), t.child;
    }
    function Lk(e, t, i) {
      var l = t.pendingProps;
      return Li(e, t, l, i), t.child;
    }
    function Nk(e, t, i) {
      var l = t.pendingProps.children;
      return Li(e, t, l, i), t.child;
    }
    function Mk(e, t, i) {
      {
        t.flags |= xt;
        {
          var l = t.stateNode;
          l.effectDuration = 0, l.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, c = u.children;
      return Li(e, t, c, i), t.child;
    }
    function ZC(e, t) {
      var i = t.ref;
      (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= oi, t.flags |= Zd);
    }
    function xS(e, t, i, l, u) {
      if (t.type !== t.elementType) {
        var c = i.propTypes;
        c && fl(
          c,
          l,
          // Resolved props
          "prop",
          Ut(i)
        );
      }
      var v;
      {
        var E = qf(t, i, !0);
        v = Kf(t, E);
      }
      var x, _;
      nd(t, u), bu(t);
      {
        if (ch.current = t, ai(!0), x = ud(e, t, i, l, v, u), _ = sd(), t.mode & Dt) {
          qn(!0);
          try {
            x = ud(e, t, i, l, v, u), _ = sd();
          } finally {
            qn(!1);
          }
        }
        ai(!1);
      }
      return di(), e !== null && !yl ? (fC(e, t, u), Go(e, t, u)) : (Gr() && _ && n0(t), t.flags |= Bl, Li(e, t, x, u), t.child);
    }
    function ex(e, t, i, l, u) {
      {
        switch (XO(t)) {
          case !1: {
            var c = t.stateNode, v = t.type, E = new v(t.memoizedProps, c.context), x = E.state;
            c.updater.enqueueSetState(c, x, null);
            break;
          }
          case !0: {
            t.flags |= ct, t.flags |= hr;
            var _ = new Error("Simulated error coming from DevTools"), O = Uu(u);
            t.lanes = yt(t.lanes, O);
            var I = mS(t, gc(_, t), O);
            w0(t, I);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var P = i.propTypes;
          P && fl(
            P,
            l,
            // Resolved props
            "prop",
            Ut(i)
          );
        }
      }
      var q;
      Xl(i) ? (q = !0, Tm(t)) : q = !1, nd(t, u);
      var ee = t.stateNode, ie;
      ee === null ? (hy(e, t), VC(t, i, l), pS(t, i, l, u), ie = !0) : e === null ? ie = wk(t, i, l, u) : ie = Tk(e, t, i, l, u);
      var be = wS(e, t, i, ie, q, u);
      {
        var et = t.stateNode;
        ie && et.props !== l && (Sc || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", dt(t) || "a component"), Sc = !0);
      }
      return be;
    }
    function wS(e, t, i, l, u, c) {
      ZC(e, t);
      var v = (t.flags & ct) !== Ke;
      if (!l && !v)
        return u && F1(t, i, !1), Go(e, t, c);
      var E = t.stateNode;
      ch.current = t;
      var x;
      if (v && typeof i.getDerivedStateFromError != "function")
        x = null, BC();
      else {
        bu(t);
        {
          if (ai(!0), x = E.render(), t.mode & Dt) {
            qn(!0);
            try {
              E.render();
            } finally {
              qn(!1);
            }
          }
          ai(!1);
        }
        di();
      }
      return t.flags |= Bl, e !== null && v ? Ak(e, t, x, c) : Li(e, t, x, c), t.memoizedState = E.state, u && F1(t, i, !0), t.child;
    }
    function tx(e) {
      var t = e.stateNode;
      t.pendingContext ? N1(e, t.pendingContext, t.pendingContext !== t.context) : t.context && N1(e, t.context, !1), T0(e, t.containerInfo);
    }
    function Fk(e, t, i) {
      if (tx(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var l = t.pendingProps, u = t.memoizedState, c = u.element;
      iC(e, t), Hm(t, l, null, i);
      var v = t.memoizedState;
      t.stateNode;
      var E = v.element;
      if (u.isDehydrated) {
        var x = {
          element: E,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, _ = t.updateQueue;
        if (_.baseState = x, t.memoizedState = x, t.flags & Bn) {
          var O = gc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return nx(e, t, E, i, O);
        } else if (E !== c) {
          var I = gc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return nx(e, t, E, i, I);
        } else {
          B_(t);
          var P = X1(t, null, E, i);
          t.child = P;
          for (var q = P; q; )
            q.flags = q.flags & ~En | Wi, q = q.sibling;
        }
      } else {
        if (Zf(), E === c)
          return Go(e, t, i);
        Li(e, t, E, i);
      }
      return t.child;
    }
    function nx(e, t, i, l, u) {
      return Zf(), u0(u), t.flags |= Bn, Li(e, t, i, l), t.child;
    }
    function Uk(e, t, i) {
      uC(t), e === null && o0(t);
      var l = t.type, u = t.pendingProps, c = e !== null ? e.memoizedProps : null, v = u.children, E = Ig(l, u);
      return E ? v = null : c !== null && Ig(l, c) && (t.flags |= tn), ZC(e, t), Li(e, t, v, i), t.child;
    }
    function zk(e, t) {
      return e === null && o0(t), null;
    }
    function Bk(e, t, i, l) {
      hy(e, t);
      var u = t.pendingProps, c = i, v = c._payload, E = c._init, x = E(v);
      t.type = x;
      var _ = t.tag = zO(x), O = ml(x, u), I;
      switch (_) {
        case L:
          return TS(t, x), t.type = x = yd(x), I = xS(null, t, x, O, l), I;
        case B:
          return t.type = x = eE(x), I = ex(null, t, x, O, l), I;
        case Ge:
          return t.type = x = tE(x), I = qC(null, t, x, O, l), I;
        case wt: {
          if (t.type !== t.elementType) {
            var P = x.propTypes;
            P && fl(
              P,
              O,
              // Resolved for outer only
              "prop",
              Ut(x)
            );
          }
          return I = KC(
            null,
            t,
            x,
            ml(x.type, O),
            // The inner type can have defaults too
            l
          ), I;
        }
      }
      var q = "";
      throw x !== null && typeof x == "object" && x.$$typeof === it && (q = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + x + ". " + ("Lazy element type must resolve to a class or function." + q));
    }
    function jk(e, t, i, l, u) {
      hy(e, t), t.tag = B;
      var c;
      return Xl(i) ? (c = !0, Tm(t)) : c = !1, nd(t, u), VC(t, i, l), pS(t, i, l, u), wS(null, t, i, !0, c, u);
    }
    function Pk(e, t, i, l) {
      hy(e, t);
      var u = t.pendingProps, c;
      {
        var v = qf(t, i, !1);
        c = Kf(t, v);
      }
      nd(t, l);
      var E, x;
      bu(t);
      {
        if (i.prototype && typeof i.prototype.render == "function") {
          var _ = Ut(i) || "Unknown";
          yS[_] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", _, _), yS[_] = !0);
        }
        t.mode & Dt && pl.recordLegacyContextWarning(t, null), ai(!0), ch.current = t, E = ud(null, t, i, u, c, l), x = sd(), ai(!1);
      }
      if (di(), t.flags |= Bl, typeof E == "object" && E !== null && typeof E.render == "function" && E.$$typeof === void 0) {
        var O = Ut(i) || "Unknown";
        fh[O] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", O, O, O), fh[O] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof E == "object" && E !== null && typeof E.render == "function" && E.$$typeof === void 0
      ) {
        {
          var I = Ut(i) || "Unknown";
          fh[I] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", I, I, I), fh[I] = !0);
        }
        t.tag = B, t.memoizedState = null, t.updateQueue = null;
        var P = !1;
        return Xl(i) ? (P = !0, Tm(t)) : P = !1, t.memoizedState = E.state !== null && E.state !== void 0 ? E.state : null, x0(t), IC(t, E), pS(t, i, u, l), wS(null, t, i, !0, P, l);
      } else {
        if (t.tag = L, t.mode & Dt) {
          qn(!0);
          try {
            E = ud(null, t, i, u, c, l), x = sd();
          } finally {
            qn(!1);
          }
        }
        return Gr() && x && n0(t), Li(null, t, E, l), TS(t, i), t.child;
      }
    }
    function TS(e, t) {
      {
        if (t && t.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var i = "", l = Yr();
          l && (i += `

Check the render method of \`` + l + "`.");
          var u = l || "", c = e._debugSource;
          c && (u = c.fileName + ":" + c.lineNumber), ES[u] || (ES[u] = !0, h("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", i));
        }
        if (t.defaultProps !== void 0) {
          var v = Ut(t) || "Unknown";
          dh[v] || (h("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", v), dh[v] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var E = Ut(t) || "Unknown";
          SS[E] || (h("%s: Function components do not support getDerivedStateFromProps.", E), SS[E] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var x = Ut(t) || "Unknown";
          gS[x] || (h("%s: Function components do not support contextType.", x), gS[x] = !0);
        }
      }
    }
    var RS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Kn
    };
    function bS(e) {
      return {
        baseLanes: e,
        cachePool: Ok(),
        transitions: null
      };
    }
    function Hk(e, t) {
      var i = null;
      return {
        baseLanes: yt(e.baseLanes, t),
        cachePool: i,
        transitions: e.transitions
      };
    }
    function Ik(e, t, i, l) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return _0(e, th);
    }
    function Vk(e, t) {
      return Gs(e.childLanes, t);
    }
    function rx(e, t, i) {
      var l = t.pendingProps;
      JO(t) && (t.flags |= ct);
      var u = hl.current, c = !1, v = (t.flags & ct) !== Ke;
      if (v || Ik(u, e) ? (c = !0, t.flags &= ~ct) : (e === null || e.memoizedState !== null) && (u = ok(u, cC)), u = id(u), os(t, u), e === null) {
        o0(t);
        var E = t.memoizedState;
        if (E !== null) {
          var x = E.dehydrated;
          if (x !== null)
            return Gk(t, x);
        }
        var _ = l.children, O = l.fallback;
        if (c) {
          var I = $k(t, _, O, i), P = t.child;
          return P.memoizedState = bS(i), t.memoizedState = RS, I;
        } else
          return _S(t, _);
      } else {
        var q = e.memoizedState;
        if (q !== null) {
          var ee = q.dehydrated;
          if (ee !== null)
            return qk(e, t, v, l, ee, q, i);
        }
        if (c) {
          var ie = l.fallback, be = l.children, et = Wk(e, t, be, ie, i), $e = t.child, Pt = e.child.memoizedState;
          return $e.memoizedState = Pt === null ? bS(i) : Hk(Pt, i), $e.childLanes = Vk(e, i), t.memoizedState = RS, et;
        } else {
          var Nt = l.children, W = Yk(e, t, Nt, i);
          return t.memoizedState = null, W;
        }
      }
    }
    function _S(e, t, i) {
      var l = e.mode, u = {
        mode: "visible",
        children: t
      }, c = kS(u, l);
      return c.return = e, e.child = c, c;
    }
    function $k(e, t, i, l) {
      var u = e.mode, c = e.child, v = {
        mode: "hidden",
        children: t
      }, E, x;
      return (u & Ve) === Pe && c !== null ? (E = c, E.childLanes = ce, E.pendingProps = v, e.mode & ft && (E.actualDuration = 0, E.actualStartTime = -1, E.selfBaseDuration = 0, E.treeBaseDuration = 0), x = vs(i, u, l, null)) : (E = kS(v, u), x = vs(i, u, l, null)), E.return = e, x.return = e, E.sibling = x, e.child = E, x;
    }
    function kS(e, t, i) {
      return iw(e, t, ce, null);
    }
    function ix(e, t) {
      return Tc(e, t);
    }
    function Yk(e, t, i, l) {
      var u = e.child, c = u.sibling, v = ix(u, {
        mode: "visible",
        children: i
      });
      if ((t.mode & Ve) === Pe && (v.lanes = l), v.return = t, v.sibling = null, c !== null) {
        var E = t.deletions;
        E === null ? (t.deletions = [c], t.flags |= Jt) : E.push(c);
      }
      return t.child = v, v;
    }
    function Wk(e, t, i, l, u) {
      var c = t.mode, v = e.child, E = v.sibling, x = {
        mode: "hidden",
        children: i
      }, _;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (c & Ve) === Pe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var O = t.child;
        _ = O, _.childLanes = ce, _.pendingProps = x, t.mode & ft && (_.actualDuration = 0, _.actualStartTime = -1, _.selfBaseDuration = v.selfBaseDuration, _.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        _ = ix(v, x), _.subtreeFlags = v.subtreeFlags & Er;
      var I;
      return E !== null ? I = Tc(E, l) : (I = vs(l, c, u, null), I.flags |= En), I.return = t, _.return = t, _.sibling = I, t.child = _, I;
    }
    function py(e, t, i, l) {
      l !== null && u0(l), ed(t, e.child, null, i);
      var u = t.pendingProps, c = u.children, v = _S(t, c);
      return v.flags |= En, t.memoizedState = null, v;
    }
    function Qk(e, t, i, l, u) {
      var c = t.mode, v = {
        mode: "visible",
        children: i
      }, E = kS(v, c), x = vs(l, c, u, null);
      return x.flags |= En, E.return = t, x.return = t, E.sibling = x, t.child = E, (t.mode & Ve) !== Pe && ed(t, e.child, null, u), x;
    }
    function Gk(e, t, i) {
      return (e.mode & Ve) === Pe ? (h("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Qe) : Wg(t) ? e.lanes = ll : e.lanes = Br, null;
    }
    function qk(e, t, i, l, u, c, v) {
      if (i)
        if (t.flags & Bn) {
          t.flags &= ~Bn;
          var W = hS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return py(e, t, v, W);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ct, null;
          var ae = l.children, Q = l.fallback, ve = Qk(e, t, ae, Q, v), Oe = t.child;
          return Oe.memoizedState = bS(v), t.memoizedState = RS, ve;
        }
      else {
        if (U_(), (t.mode & Ve) === Pe)
          return py(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Wg(u)) {
          var E, x, _;
          {
            var O = Zb(u);
            E = O.digest, x = O.message, _ = O.stack;
          }
          var I;
          x ? I = new Error(x) : I = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var P = hS(I, E, _);
          return py(e, t, v, P);
        }
        var q = vi(v, e.childLanes);
        if (yl || q) {
          var ee = Ty();
          if (ee !== null) {
            var ie = jv(ee, v);
            if (ie !== Kn && ie !== c.retryLane) {
              c.retryLane = ie;
              var be = yn;
              ia(e, ie), Or(ee, e, ie, be);
            }
          }
          qS();
          var et = hS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return py(e, t, v, et);
        } else if (_1(u)) {
          t.flags |= ct, t.child = e.child;
          var $e = EO.bind(null, e);
          return e_(u, $e), null;
        } else {
          j_(t, u, c.treeContext);
          var Pt = l.children, Nt = _S(t, Pt);
          return Nt.flags |= Wi, Nt;
        }
      }
    }
    function ax(e, t, i) {
      e.lanes = yt(e.lanes, t);
      var l = e.alternate;
      l !== null && (l.lanes = yt(l.lanes, t)), g0(e.return, t, i);
    }
    function Kk(e, t, i) {
      for (var l = t; l !== null; ) {
        if (l.tag === Ye) {
          var u = l.memoizedState;
          u !== null && ax(l, i, e);
        } else if (l.tag === Ht)
          ax(l, i, e);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === e)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === e)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    function Xk(e) {
      for (var t = e, i = null; t !== null; ) {
        var l = t.alternate;
        l !== null && Ym(l) === null && (i = t), t = t.sibling;
      }
      return i;
    }
    function Jk(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !CS[e])
        if (CS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              h('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              h('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              h('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          h('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Zk(e, t) {
      e !== void 0 && !dy[e] && (e !== "collapsed" && e !== "hidden" ? (dy[e] = !0, h('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (dy[e] = !0, h('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function lx(e, t) {
      {
        var i = zt(e), l = !i && typeof Ir(e) == "function";
        if (i || l) {
          var u = i ? "array" : "iterable";
          return h("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function eD(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (zt(e)) {
          for (var i = 0; i < e.length; i++)
            if (!lx(e[i], i))
              return;
        } else {
          var l = Ir(e);
          if (typeof l == "function") {
            var u = l.call(e);
            if (u)
              for (var c = u.next(), v = 0; !c.done; c = u.next()) {
                if (!lx(c.value, v))
                  return;
                v++;
              }
          } else
            h('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function DS(e, t, i, l, u) {
      var c = e.memoizedState;
      c === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: i,
        tailMode: u
      } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = l, c.tail = i, c.tailMode = u);
    }
    function ox(e, t, i) {
      var l = t.pendingProps, u = l.revealOrder, c = l.tail, v = l.children;
      Jk(u), Zk(c, u), eD(v, u), Li(e, t, v, i);
      var E = hl.current, x = _0(E, th);
      if (x)
        E = k0(E, th), t.flags |= ct;
      else {
        var _ = e !== null && (e.flags & ct) !== Ke;
        _ && Kk(t, t.child, i), E = id(E);
      }
      if (os(t, E), (t.mode & Ve) === Pe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var O = Xk(t.child), I;
            O === null ? (I = t.child, t.child = null) : (I = O.sibling, O.sibling = null), DS(
              t,
              !1,
              // isBackwards
              I,
              O,
              c
            );
            break;
          }
          case "backwards": {
            var P = null, q = t.child;
            for (t.child = null; q !== null; ) {
              var ee = q.alternate;
              if (ee !== null && Ym(ee) === null) {
                t.child = q;
                break;
              }
              var ie = q.sibling;
              q.sibling = P, P = q, q = ie;
            }
            DS(
              t,
              !0,
              // isBackwards
              P,
              null,
              // last
              c
            );
            break;
          }
          case "together": {
            DS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function tD(e, t, i) {
      T0(t, t.stateNode.containerInfo);
      var l = t.pendingProps;
      return e === null ? t.child = ed(t, null, l, i) : Li(e, t, l, i), t.child;
    }
    var ux = !1;
    function nD(e, t, i) {
      var l = t.type, u = l._context, c = t.pendingProps, v = t.memoizedProps, E = c.value;
      {
        "value" in c || ux || (ux = !0, h("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var x = t.type.propTypes;
        x && fl(x, c, "prop", "Context.Provider");
      }
      if (eC(t, u, E), v !== null) {
        var _ = v.value;
        if (Fe(_, E)) {
          if (v.children === c.children && !xm())
            return Go(e, t, i);
        } else
          J_(t, u, i);
      }
      var O = c.children;
      return Li(e, t, O, i), t.child;
    }
    var sx = !1;
    function rD(e, t, i) {
      var l = t.type;
      l._context === void 0 ? l !== l.Consumer && (sx || (sx = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var u = t.pendingProps, c = u.children;
      typeof c != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), nd(t, i);
      var v = gr(l);
      bu(t);
      var E;
      return ch.current = t, ai(!0), E = c(v), ai(!1), di(), t.flags |= Bl, Li(e, t, E, i), t.child;
    }
    function ph() {
      yl = !0;
    }
    function hy(e, t) {
      (t.mode & Ve) === Pe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= En);
    }
    function Go(e, t, i) {
      return e !== null && (t.dependencies = e.dependencies), BC(), Rh(t.lanes), vi(i, t.childLanes) ? (K_(e, t), t.child) : null;
    }
    function iD(e, t, i) {
      {
        var l = t.return;
        if (l === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, i.index = t.index, i.sibling = t.sibling, i.return = t.return, i.ref = t.ref, t === l.child)
          l.child = i;
        else {
          var u = l.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = i;
        }
        var c = l.deletions;
        return c === null ? (l.deletions = [e], l.flags |= Jt) : c.push(e), i.flags |= En, i;
      }
    }
    function OS(e, t) {
      var i = e.lanes;
      return !!vi(i, t);
    }
    function aD(e, t, i) {
      switch (t.tag) {
        case N:
          tx(t), t.stateNode, Zf();
          break;
        case K:
          uC(t);
          break;
        case B: {
          var l = t.type;
          Xl(l) && Tm(t);
          break;
        }
        case J:
          T0(t, t.stateNode.containerInfo);
          break;
        case Ee: {
          var u = t.memoizedProps.value, c = t.type._context;
          eC(t, c, u);
          break;
        }
        case St:
          {
            var v = vi(i, t.childLanes);
            v && (t.flags |= xt);
            {
              var E = t.stateNode;
              E.effectDuration = 0, E.passiveEffectDuration = 0;
            }
          }
          break;
        case Ye: {
          var x = t.memoizedState;
          if (x !== null) {
            if (x.dehydrated !== null)
              return os(t, id(hl.current)), t.flags |= ct, null;
            var _ = t.child, O = _.childLanes;
            if (vi(i, O))
              return rx(e, t, i);
            os(t, id(hl.current));
            var I = Go(e, t, i);
            return I !== null ? I.sibling : null;
          } else
            os(t, id(hl.current));
          break;
        }
        case Ht: {
          var P = (e.flags & ct) !== Ke, q = vi(i, t.childLanes);
          if (P) {
            if (q)
              return ox(e, t, i);
            t.flags |= ct;
          }
          var ee = t.memoizedState;
          if (ee !== null && (ee.rendering = null, ee.tail = null, ee.lastEffect = null), os(t, hl.current), q)
            break;
          return null;
        }
        case Xe:
        case ht:
          return t.lanes = ce, JC(e, t, i);
      }
      return Go(e, t, i);
    }
    function cx(e, t, i) {
      if (t._debugNeedsRemount && e !== null)
        return iD(e, t, lE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var l = e.memoizedProps, u = t.pendingProps;
        if (l !== u || xm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          yl = !0;
        else {
          var c = OS(e, i);
          if (!c && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ct) === Ke)
            return yl = !1, aD(e, t, i);
          (e.flags & Bs) !== Ke ? yl = !0 : yl = !1;
        }
      } else if (yl = !1, Gr() && O_(t)) {
        var v = t.index, E = A_();
        B1(t, E, v);
      }
      switch (t.lanes = ce, t.tag) {
        case D:
          return Pk(e, t, t.type, i);
        case Vt: {
          var x = t.elementType;
          return Bk(e, t, x, i);
        }
        case L: {
          var _ = t.type, O = t.pendingProps, I = t.elementType === _ ? O : ml(_, O);
          return xS(e, t, _, I, i);
        }
        case B: {
          var P = t.type, q = t.pendingProps, ee = t.elementType === P ? q : ml(P, q);
          return ex(e, t, P, ee, i);
        }
        case N:
          return Fk(e, t, i);
        case K:
          return Uk(e, t, i);
        case te:
          return zk(e, t);
        case Ye:
          return rx(e, t, i);
        case J:
          return tD(e, t, i);
        case Ge: {
          var ie = t.type, be = t.pendingProps, et = t.elementType === ie ? be : ml(ie, be);
          return qC(e, t, ie, et, i);
        }
        case ue:
          return Lk(e, t, i);
        case Ce:
          return Nk(e, t, i);
        case St:
          return Mk(e, t, i);
        case Ee:
          return nD(e, t, i);
        case nt:
          return rD(e, t, i);
        case wt: {
          var $e = t.type, Pt = t.pendingProps, Nt = ml($e, Pt);
          if (t.type !== t.elementType) {
            var W = $e.propTypes;
            W && fl(
              W,
              Nt,
              // Resolved for outer only
              "prop",
              Ut($e)
            );
          }
          return Nt = ml($e.type, Nt), KC(e, t, $e, Nt, i);
        }
        case ot:
          return XC(e, t, t.type, t.pendingProps, i);
        case Tn: {
          var ae = t.type, Q = t.pendingProps, ve = t.elementType === ae ? Q : ml(ae, Q);
          return jk(e, t, ae, ve, i);
        }
        case Ht:
          return ox(e, t, i);
        case Rn:
          break;
        case Xe:
          return JC(e, t, i);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function cd(e) {
      e.flags |= xt;
    }
    function fx(e) {
      e.flags |= oi, e.flags |= Zd;
    }
    var dx, AS, px, hx;
    dx = function(e, t, i, l) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === K || u.tag === te)
          _b(e, u.stateNode);
        else if (u.tag !== J) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, AS = function(e, t) {
    }, px = function(e, t, i, l, u) {
      var c = e.memoizedProps;
      if (c !== l) {
        var v = t.stateNode, E = R0(), x = Db(v, i, c, l, u, E);
        t.updateQueue = x, x && cd(t);
      }
    }, hx = function(e, t, i, l) {
      i !== l && cd(t);
    };
    function hh(e, t) {
      if (!Gr())
        switch (e.tailMode) {
          case "hidden": {
            for (var i = e.tail, l = null; i !== null; )
              i.alternate !== null && (l = i), i = i.sibling;
            l === null ? e.tail = null : l.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, c = null; u !== null; )
              u.alternate !== null && (c = u), u = u.sibling;
            c === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : c.sibling = null;
            break;
          }
        }
    }
    function Kr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, i = ce, l = Ke;
      if (t) {
        if ((e.mode & ft) !== Pe) {
          for (var x = e.selfBaseDuration, _ = e.child; _ !== null; )
            i = yt(i, yt(_.lanes, _.childLanes)), l |= _.subtreeFlags & Er, l |= _.flags & Er, x += _.treeBaseDuration, _ = _.sibling;
          e.treeBaseDuration = x;
        } else
          for (var O = e.child; O !== null; )
            i = yt(i, yt(O.lanes, O.childLanes)), l |= O.subtreeFlags & Er, l |= O.flags & Er, O.return = e, O = O.sibling;
        e.subtreeFlags |= l;
      } else {
        if ((e.mode & ft) !== Pe) {
          for (var u = e.actualDuration, c = e.selfBaseDuration, v = e.child; v !== null; )
            i = yt(i, yt(v.lanes, v.childLanes)), l |= v.subtreeFlags, l |= v.flags, u += v.actualDuration, c += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = u, e.treeBaseDuration = c;
        } else
          for (var E = e.child; E !== null; )
            i = yt(i, yt(E.lanes, E.childLanes)), l |= E.subtreeFlags, l |= E.flags, E.return = e, E = E.sibling;
        e.subtreeFlags |= l;
      }
      return e.childLanes = i, t;
    }
    function lD(e, t, i) {
      if ($_() && (t.mode & Ve) !== Pe && (t.flags & ct) === Ke)
        return Y1(t), Zf(), t.flags |= Bn | bi | hr, !1;
      var l = Dm(t);
      if (i !== null && i.dehydrated !== null)
        if (e === null) {
          if (!l)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (I_(t), Kr(t), (t.mode & ft) !== Pe) {
            var u = i !== null;
            if (u) {
              var c = t.child;
              c !== null && (t.treeBaseDuration -= c.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Zf(), (t.flags & ct) === Ke && (t.memoizedState = null), t.flags |= xt, Kr(t), (t.mode & ft) !== Pe) {
            var v = i !== null;
            if (v) {
              var E = t.child;
              E !== null && (t.treeBaseDuration -= E.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return W1(), !0;
    }
    function vx(e, t, i) {
      var l = t.pendingProps;
      switch (r0(t), t.tag) {
        case D:
        case Vt:
        case ot:
        case L:
        case Ge:
        case ue:
        case Ce:
        case St:
        case nt:
        case wt:
          return Kr(t), null;
        case B: {
          var u = t.type;
          return Xl(u) && wm(t), Kr(t), null;
        }
        case N: {
          var c = t.stateNode;
          if (rd(t), Zg(t), O0(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), e === null || e.child === null) {
            var v = Dm(t);
            if (v)
              cd(t);
            else if (e !== null) {
              var E = e.memoizedState;
              // Check if this is a client root
              (!E.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Bn) !== Ke) && (t.flags |= Yi, W1());
            }
          }
          return AS(e, t), Kr(t), null;
        }
        case K: {
          b0(t);
          var x = oC(), _ = t.type;
          if (e !== null && t.stateNode != null)
            px(e, t, _, l, x), e.ref !== t.ref && fx(t);
          else {
            if (!l) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Kr(t), null;
            }
            var O = R0(), I = Dm(t);
            if (I)
              P_(t, x, O) && cd(t);
            else {
              var P = bb(_, l, x, O, t);
              dx(P, t, !1, !1), t.stateNode = P, kb(P, _, l, x) && cd(t);
            }
            t.ref !== null && fx(t);
          }
          return Kr(t), null;
        }
        case te: {
          var q = l;
          if (e && t.stateNode != null) {
            var ee = e.memoizedProps;
            hx(e, t, ee, q);
          } else {
            if (typeof q != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ie = oC(), be = R0(), et = Dm(t);
            et ? H_(t) && cd(t) : t.stateNode = Ob(q, ie, be, t);
          }
          return Kr(t), null;
        }
        case Ye: {
          ad(t);
          var $e = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Pt = lD(e, t, $e);
            if (!Pt)
              return t.flags & hr ? t : null;
          }
          if ((t.flags & ct) !== Ke)
            return t.lanes = i, (t.mode & ft) !== Pe && tS(t), t;
          var Nt = $e !== null, W = e !== null && e.memoizedState !== null;
          if (Nt !== W && Nt) {
            var ae = t.child;
            if (ae.flags |= jl, (t.mode & Ve) !== Pe) {
              var Q = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !V);
              Q || _0(hl.current, cC) ? oO() : qS();
            }
          }
          var ve = t.updateQueue;
          if (ve !== null && (t.flags |= xt), Kr(t), (t.mode & ft) !== Pe && Nt) {
            var Oe = t.child;
            Oe !== null && (t.treeBaseDuration -= Oe.treeBaseDuration);
          }
          return null;
        }
        case J:
          return rd(t), AS(e, t), e === null && w_(t.stateNode.containerInfo), Kr(t), null;
        case Ee:
          var _e = t.type._context;
          return y0(_e, t), Kr(t), null;
        case Tn: {
          var st = t.type;
          return Xl(st) && wm(t), Kr(t), null;
        }
        case Ht: {
          ad(t);
          var mt = t.memoizedState;
          if (mt === null)
            return Kr(t), null;
          var un = (t.flags & ct) !== Ke, Gt = mt.rendering;
          if (Gt === null)
            if (un)
              hh(mt, !1);
            else {
              var ir = sO() && (e === null || (e.flags & ct) === Ke);
              if (!ir)
                for (var qt = t.child; qt !== null; ) {
                  var Xn = Ym(qt);
                  if (Xn !== null) {
                    un = !0, t.flags |= ct, hh(mt, !1);
                    var Ei = Xn.updateQueue;
                    return Ei !== null && (t.updateQueue = Ei, t.flags |= xt), t.subtreeFlags = Ke, X_(t, i), os(t, k0(hl.current, th)), t.child;
                  }
                  qt = qt.sibling;
                }
              mt.tail !== null && Ln() > Ux() && (t.flags |= ct, un = !0, hh(mt, !1), t.lanes = kv);
            }
          else {
            if (!un) {
              var ti = Ym(Gt);
              if (ti !== null) {
                t.flags |= ct, un = !0;
                var xa = ti.updateQueue;
                if (xa !== null && (t.updateQueue = xa, t.flags |= xt), hh(mt, !0), mt.tail === null && mt.tailMode === "hidden" && !Gt.alternate && !Gr())
                  return Kr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Ln() * 2 - mt.renderingStartTime > Ux() && i !== Br && (t.flags |= ct, un = !0, hh(mt, !1), t.lanes = kv);
            }
            if (mt.isBackwards)
              Gt.sibling = t.child, t.child = Gt;
            else {
              var Fi = mt.last;
              Fi !== null ? Fi.sibling = Gt : t.child = Gt, mt.last = Gt;
            }
          }
          if (mt.tail !== null) {
            var Ui = mt.tail;
            mt.rendering = Ui, mt.tail = Ui.sibling, mt.renderingStartTime = Ln(), Ui.sibling = null;
            var Ci = hl.current;
            return un ? Ci = k0(Ci, th) : Ci = id(Ci), os(t, Ci), Ui;
          }
          return Kr(t), null;
        }
        case Rn:
          break;
        case Xe:
        case ht: {
          GS(t);
          var Zo = t.memoizedState, gd = Zo !== null;
          if (e !== null) {
            var Oh = e.memoizedState, ao = Oh !== null;
            ao !== gd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !xe && (t.flags |= jl);
          }
          return !gd || (t.mode & Ve) === Pe ? Kr(t) : vi(io, Br) && (Kr(t), t.subtreeFlags & (En | xt) && (t.flags |= jl)), null;
        }
        case $t:
          return null;
        case Mt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function oD(e, t, i) {
      switch (r0(t), t.tag) {
        case B: {
          var l = t.type;
          Xl(l) && wm(t);
          var u = t.flags;
          return u & hr ? (t.flags = u & ~hr | ct, (t.mode & ft) !== Pe && tS(t), t) : null;
        }
        case N: {
          t.stateNode, rd(t), Zg(t), O0();
          var c = t.flags;
          return (c & hr) !== Ke && (c & ct) === Ke ? (t.flags = c & ~hr | ct, t) : null;
        }
        case K:
          return b0(t), null;
        case Ye: {
          ad(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Zf();
          }
          var E = t.flags;
          return E & hr ? (t.flags = E & ~hr | ct, (t.mode & ft) !== Pe && tS(t), t) : null;
        }
        case Ht:
          return ad(t), null;
        case J:
          return rd(t), null;
        case Ee:
          var x = t.type._context;
          return y0(x, t), null;
        case Xe:
        case ht:
          return GS(t), null;
        case $t:
          return null;
        default:
          return null;
      }
    }
    function mx(e, t, i) {
      switch (r0(t), t.tag) {
        case B: {
          var l = t.type.childContextTypes;
          l != null && wm(t);
          break;
        }
        case N: {
          t.stateNode, rd(t), Zg(t), O0();
          break;
        }
        case K: {
          b0(t);
          break;
        }
        case J:
          rd(t);
          break;
        case Ye:
          ad(t);
          break;
        case Ht:
          ad(t);
          break;
        case Ee:
          var u = t.type._context;
          y0(u, t);
          break;
        case Xe:
        case ht:
          GS(t);
          break;
      }
    }
    var yx = null;
    yx = /* @__PURE__ */ new Set();
    var vy = !1, Xr = !1, uD = typeof WeakSet == "function" ? WeakSet : Set, Ue = null, fd = null, dd = null;
    function sD(e) {
      To(null, function() {
        throw e;
      }), Xd();
    }
    var cD = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & ft)
        try {
          no(), t.componentWillUnmount();
        } finally {
          to(e);
        }
      else
        t.componentWillUnmount();
    };
    function gx(e, t) {
      try {
        cs(Tr, e);
      } catch (i) {
        wn(e, t, i);
      }
    }
    function LS(e, t, i) {
      try {
        cD(e, i);
      } catch (l) {
        wn(e, t, l);
      }
    }
    function fD(e, t, i) {
      try {
        i.componentDidMount();
      } catch (l) {
        wn(e, t, l);
      }
    }
    function Sx(e, t) {
      try {
        Cx(e);
      } catch (i) {
        wn(e, t, i);
      }
    }
    function pd(e, t) {
      var i = e.ref;
      if (i !== null)
        if (typeof i == "function") {
          var l;
          try {
            if (vt && bt && e.mode & ft)
              try {
                no(), l = i(null);
              } finally {
                to(e);
              }
            else
              l = i(null);
          } catch (u) {
            wn(e, t, u);
          }
          typeof l == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", dt(e));
        } else
          i.current = null;
    }
    function my(e, t, i) {
      try {
        i();
      } catch (l) {
        wn(e, t, l);
      }
    }
    var Ex = !1;
    function dD(e, t) {
      Tb(e.containerInfo), Ue = t, pD();
      var i = Ex;
      return Ex = !1, i;
    }
    function pD() {
      for (; Ue !== null; ) {
        var e = Ue, t = e.child;
        (e.subtreeFlags & wu) !== Ke && t !== null ? (t.return = e, Ue = t) : hD();
      }
    }
    function hD() {
      for (; Ue !== null; ) {
        var e = Ue;
        en(e);
        try {
          vD(e);
        } catch (i) {
          wn(e, e.return, i);
        }
        zn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ue = t;
          return;
        }
        Ue = e.return;
      }
    }
    function vD(e) {
      var t = e.alternate, i = e.flags;
      if ((i & Yi) !== Ke) {
        switch (en(e), e.tag) {
          case L:
          case Ge:
          case ot:
            break;
          case B: {
            if (t !== null) {
              var l = t.memoizedProps, u = t.memoizedState, c = e.stateNode;
              e.type === e.elementType && !Sc && (c.props !== e.memoizedProps && h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dt(e) || "instance"), c.state !== e.memoizedState && h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dt(e) || "instance"));
              var v = c.getSnapshotBeforeUpdate(e.elementType === e.type ? l : ml(e.type, l), u);
              {
                var E = yx;
                v === void 0 && !E.has(e.type) && (E.add(e.type), h("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", dt(e)));
              }
              c.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case N: {
            {
              var x = e.stateNode;
              qb(x.containerInfo);
            }
            break;
          }
          case K:
          case te:
          case J:
          case Tn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        zn();
      }
    }
    function gl(e, t, i) {
      var l = t.updateQueue, u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var c = u.next, v = c;
        do {
          if ((v.tag & e) === e) {
            var E = v.destroy;
            v.destroy = void 0, E !== void 0 && ((e & qr) !== aa ? Rv(t) : (e & Tr) !== aa && Sa(t), (e & Jl) !== aa && _h(!0), my(t, i, E), (e & Jl) !== aa && _h(!1), (e & qr) !== aa ? Jc() : (e & Tr) !== aa && _u());
          }
          v = v.next;
        } while (v !== c);
      }
    }
    function cs(e, t) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var u = l.next, c = u;
        do {
          if ((c.tag & e) === e) {
            (e & qr) !== aa ? Il(t) : (e & Tr) !== aa && bv(t);
            var v = c.create;
            (e & Jl) !== aa && _h(!0), c.destroy = v(), (e & Jl) !== aa && _h(!1), (e & qr) !== aa ? Xc() : (e & Tr) !== aa && js();
            {
              var E = c.destroy;
              if (E !== void 0 && typeof E != "function") {
                var x = void 0;
                (c.tag & Tr) !== Ke ? x = "useLayoutEffect" : (c.tag & Jl) !== Ke ? x = "useInsertionEffect" : x = "useEffect";
                var _ = void 0;
                E === null ? _ = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof E.then == "function" ? _ = `

It looks like you wrote ` + x + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + x + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : _ = " You returned: " + E, h("%s must not return anything besides a function, which is used for clean-up.%s", x, _);
              }
            }
          }
          c = c.next;
        } while (c !== u);
      }
    }
    function mD(e, t) {
      if ((t.flags & xt) !== Ke)
        switch (t.tag) {
          case St: {
            var i = t.stateNode.passiveEffectDuration, l = t.memoizedProps, u = l.id, c = l.onPostCommit, v = UC(), E = t.alternate === null ? "mount" : "update";
            FC() && (E = "nested-update"), typeof c == "function" && c(u, E, i, v);
            var x = t.return;
            e:
              for (; x !== null; ) {
                switch (x.tag) {
                  case N:
                    var _ = x.stateNode;
                    _.passiveEffectDuration += i;
                    break e;
                  case St:
                    var O = x.stateNode;
                    O.passiveEffectDuration += i;
                    break e;
                }
                x = x.return;
              }
            break;
          }
        }
    }
    function yD(e, t, i, l) {
      if ((i.flags & Ur) !== Ke)
        switch (i.tag) {
          case L:
          case Ge:
          case ot: {
            if (!Xr)
              if (i.mode & ft)
                try {
                  no(), cs(Tr | wr, i);
                } finally {
                  to(i);
                }
              else
                cs(Tr | wr, i);
            break;
          }
          case B: {
            var u = i.stateNode;
            if (i.flags & xt && !Xr)
              if (t === null)
                if (i.type === i.elementType && !Sc && (u.props !== i.memoizedProps && h("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dt(i) || "instance"), u.state !== i.memoizedState && h("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dt(i) || "instance")), i.mode & ft)
                  try {
                    no(), u.componentDidMount();
                  } finally {
                    to(i);
                  }
                else
                  u.componentDidMount();
              else {
                var c = i.elementType === i.type ? t.memoizedProps : ml(i.type, t.memoizedProps), v = t.memoizedState;
                if (i.type === i.elementType && !Sc && (u.props !== i.memoizedProps && h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dt(i) || "instance"), u.state !== i.memoizedState && h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dt(i) || "instance")), i.mode & ft)
                  try {
                    no(), u.componentDidUpdate(c, v, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    to(i);
                  }
                else
                  u.componentDidUpdate(c, v, u.__reactInternalSnapshotBeforeUpdate);
              }
            var E = i.updateQueue;
            E !== null && (i.type === i.elementType && !Sc && (u.props !== i.memoizedProps && h("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dt(i) || "instance"), u.state !== i.memoizedState && h("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dt(i) || "instance")), lC(i, E, u));
            break;
          }
          case N: {
            var x = i.updateQueue;
            if (x !== null) {
              var _ = null;
              if (i.child !== null)
                switch (i.child.tag) {
                  case K:
                    _ = i.child.stateNode;
                    break;
                  case B:
                    _ = i.child.stateNode;
                    break;
                }
              lC(i, x, _);
            }
            break;
          }
          case K: {
            var O = i.stateNode;
            if (t === null && i.flags & xt) {
              var I = i.type, P = i.memoizedProps;
              Fb(O, I, P);
            }
            break;
          }
          case te:
            break;
          case J:
            break;
          case St: {
            {
              var q = i.memoizedProps, ee = q.onCommit, ie = q.onRender, be = i.stateNode.effectDuration, et = UC(), $e = t === null ? "mount" : "update";
              FC() && ($e = "nested-update"), typeof ie == "function" && ie(i.memoizedProps.id, $e, i.actualDuration, i.treeBaseDuration, i.actualStartTime, et);
              {
                typeof ee == "function" && ee(i.memoizedProps.id, $e, be, et), hO(i);
                var Pt = i.return;
                e:
                  for (; Pt !== null; ) {
                    switch (Pt.tag) {
                      case N:
                        var Nt = Pt.stateNode;
                        Nt.effectDuration += be;
                        break e;
                      case St:
                        var W = Pt.stateNode;
                        W.effectDuration += be;
                        break e;
                    }
                    Pt = Pt.return;
                  }
              }
            }
            break;
          }
          case Ye: {
            RD(e, i);
            break;
          }
          case Ht:
          case Tn:
          case Rn:
          case Xe:
          case ht:
          case Mt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Xr || i.flags & oi && Cx(i);
    }
    function gD(e) {
      switch (e.tag) {
        case L:
        case Ge:
        case ot: {
          if (e.mode & ft)
            try {
              no(), gx(e, e.return);
            } finally {
              to(e);
            }
          else
            gx(e, e.return);
          break;
        }
        case B: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && fD(e, e.return, t), Sx(e, e.return);
          break;
        }
        case K: {
          Sx(e, e.return);
          break;
        }
      }
    }
    function SD(e, t) {
      for (var i = null, l = e; ; ) {
        if (l.tag === K) {
          if (i === null) {
            i = l;
            try {
              var u = l.stateNode;
              t ? Yb(u) : Qb(l.stateNode, l.memoizedProps);
            } catch (v) {
              wn(e, e.return, v);
            }
          }
        } else if (l.tag === te) {
          if (i === null)
            try {
              var c = l.stateNode;
              t ? Wb(c) : Gb(c, l.memoizedProps);
            } catch (v) {
              wn(e, e.return, v);
            }
        } else if (!((l.tag === Xe || l.tag === ht) && l.memoizedState !== null && l !== e)) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === e)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === e)
            return;
          i === l && (i = null), l = l.return;
        }
        i === l && (i = null), l.sibling.return = l.return, l = l.sibling;
      }
    }
    function Cx(e) {
      var t = e.ref;
      if (t !== null) {
        var i = e.stateNode, l;
        switch (e.tag) {
          case K:
            l = i;
            break;
          default:
            l = i;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & ft)
            try {
              no(), u = t(l);
            } finally {
              to(e);
            }
          else
            u = t(l);
          typeof u == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", dt(e));
        } else
          t.hasOwnProperty("current") || h("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", dt(e)), t.current = l;
      }
    }
    function ED(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function xx(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, xx(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === K) {
          var i = e.stateNode;
          i !== null && b_(i);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function CD(e) {
      for (var t = e.return; t !== null; ) {
        if (wx(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function wx(e) {
      return e.tag === K || e.tag === N || e.tag === J;
    }
    function Tx(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || wx(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== K && t.tag !== te && t.tag !== Xt; ) {
            if (t.flags & En || t.child === null || t.tag === J)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & En))
            return t.stateNode;
        }
    }
    function xD(e) {
      var t = CD(e);
      switch (t.tag) {
        case K: {
          var i = t.stateNode;
          t.flags & tn && (b1(i), t.flags &= ~tn);
          var l = Tx(e);
          MS(e, l, i);
          break;
        }
        case N:
        case J: {
          var u = t.stateNode.containerInfo, c = Tx(e);
          NS(e, c, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function NS(e, t, i) {
      var l = e.tag, u = l === K || l === te;
      if (u) {
        var c = e.stateNode;
        t ? Hb(i, c, t) : jb(i, c);
      } else if (l !== J) {
        var v = e.child;
        if (v !== null) {
          NS(v, t, i);
          for (var E = v.sibling; E !== null; )
            NS(E, t, i), E = E.sibling;
        }
      }
    }
    function MS(e, t, i) {
      var l = e.tag, u = l === K || l === te;
      if (u) {
        var c = e.stateNode;
        t ? Pb(i, c, t) : Bb(i, c);
      } else if (l !== J) {
        var v = e.child;
        if (v !== null) {
          MS(v, t, i);
          for (var E = v.sibling; E !== null; )
            MS(E, t, i), E = E.sibling;
        }
      }
    }
    var Jr = null, Sl = !1;
    function wD(e, t, i) {
      {
        var l = t;
        e:
          for (; l !== null; ) {
            switch (l.tag) {
              case K: {
                Jr = l.stateNode, Sl = !1;
                break e;
              }
              case N: {
                Jr = l.stateNode.containerInfo, Sl = !0;
                break e;
              }
              case J: {
                Jr = l.stateNode.containerInfo, Sl = !0;
                break e;
              }
            }
            l = l.return;
          }
        if (Jr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Rx(e, t, i), Jr = null, Sl = !1;
      }
      ED(i);
    }
    function fs(e, t, i) {
      for (var l = i.child; l !== null; )
        Rx(e, t, l), l = l.sibling;
    }
    function Rx(e, t, i) {
      switch (_o(i), i.tag) {
        case K:
          Xr || pd(i, t);
        case te: {
          {
            var l = Jr, u = Sl;
            Jr = null, fs(e, t, i), Jr = l, Sl = u, Jr !== null && (Sl ? Vb(Jr, i.stateNode) : Ib(Jr, i.stateNode));
          }
          return;
        }
        case Xt: {
          Jr !== null && (Sl ? $b(Jr, i.stateNode) : Yg(Jr, i.stateNode));
          return;
        }
        case J: {
          {
            var c = Jr, v = Sl;
            Jr = i.stateNode.containerInfo, Sl = !0, fs(e, t, i), Jr = c, Sl = v;
          }
          return;
        }
        case L:
        case Ge:
        case wt:
        case ot: {
          if (!Xr) {
            var E = i.updateQueue;
            if (E !== null) {
              var x = E.lastEffect;
              if (x !== null) {
                var _ = x.next, O = _;
                do {
                  var I = O, P = I.destroy, q = I.tag;
                  P !== void 0 && ((q & Jl) !== aa ? my(i, t, P) : (q & Tr) !== aa && (Sa(i), i.mode & ft ? (no(), my(i, t, P), to(i)) : my(i, t, P), _u())), O = O.next;
                } while (O !== _);
              }
            }
          }
          fs(e, t, i);
          return;
        }
        case B: {
          if (!Xr) {
            pd(i, t);
            var ee = i.stateNode;
            typeof ee.componentWillUnmount == "function" && LS(i, t, ee);
          }
          fs(e, t, i);
          return;
        }
        case Rn: {
          fs(e, t, i);
          return;
        }
        case Xe: {
          if (
            // TODO: Remove this dead flag
            i.mode & Ve
          ) {
            var ie = Xr;
            Xr = ie || i.memoizedState !== null, fs(e, t, i), Xr = ie;
          } else
            fs(e, t, i);
          break;
        }
        default: {
          fs(e, t, i);
          return;
        }
      }
    }
    function TD(e) {
      e.memoizedState;
    }
    function RD(e, t) {
      var i = t.memoizedState;
      if (i === null) {
        var l = t.alternate;
        if (l !== null) {
          var u = l.memoizedState;
          if (u !== null) {
            var c = u.dehydrated;
            c !== null && s_(c);
          }
        }
      }
    }
    function bx(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var i = e.stateNode;
        i === null && (i = e.stateNode = new uD()), t.forEach(function(l) {
          var u = CO.bind(null, e, l);
          if (!i.has(l)) {
            if (i.add(l), Di)
              if (fd !== null && dd !== null)
                bh(dd, fd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            l.then(u, u);
          }
        });
      }
    }
    function bD(e, t, i) {
      fd = i, dd = e, en(t), _x(t, e), en(t), fd = null, dd = null;
    }
    function El(e, t, i) {
      var l = t.deletions;
      if (l !== null)
        for (var u = 0; u < l.length; u++) {
          var c = l[u];
          try {
            wD(e, t, c);
          } catch (x) {
            wn(c, t, x);
          }
        }
      var v = Dc();
      if (t.subtreeFlags & ci)
        for (var E = t.child; E !== null; )
          en(E), _x(E, e), E = E.sibling;
      en(v);
    }
    function _x(e, t, i) {
      var l = e.alternate, u = e.flags;
      switch (e.tag) {
        case L:
        case Ge:
        case wt:
        case ot: {
          if (El(t, e), ro(e), u & xt) {
            try {
              gl(Jl | wr, e, e.return), cs(Jl | wr, e);
            } catch (st) {
              wn(e, e.return, st);
            }
            if (e.mode & ft) {
              try {
                no(), gl(Tr | wr, e, e.return);
              } catch (st) {
                wn(e, e.return, st);
              }
              to(e);
            } else
              try {
                gl(Tr | wr, e, e.return);
              } catch (st) {
                wn(e, e.return, st);
              }
          }
          return;
        }
        case B: {
          El(t, e), ro(e), u & oi && l !== null && pd(l, l.return);
          return;
        }
        case K: {
          El(t, e), ro(e), u & oi && l !== null && pd(l, l.return);
          {
            if (e.flags & tn) {
              var c = e.stateNode;
              try {
                b1(c);
              } catch (st) {
                wn(e, e.return, st);
              }
            }
            if (u & xt) {
              var v = e.stateNode;
              if (v != null) {
                var E = e.memoizedProps, x = l !== null ? l.memoizedProps : E, _ = e.type, O = e.updateQueue;
                if (e.updateQueue = null, O !== null)
                  try {
                    Ub(v, O, _, x, E, e);
                  } catch (st) {
                    wn(e, e.return, st);
                  }
              }
            }
          }
          return;
        }
        case te: {
          if (El(t, e), ro(e), u & xt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var I = e.stateNode, P = e.memoizedProps, q = l !== null ? l.memoizedProps : P;
            try {
              zb(I, q, P);
            } catch (st) {
              wn(e, e.return, st);
            }
          }
          return;
        }
        case N: {
          if (El(t, e), ro(e), u & xt && l !== null) {
            var ee = l.memoizedState;
            if (ee.isDehydrated)
              try {
                u_(t.containerInfo);
              } catch (st) {
                wn(e, e.return, st);
              }
          }
          return;
        }
        case J: {
          El(t, e), ro(e);
          return;
        }
        case Ye: {
          El(t, e), ro(e);
          var ie = e.child;
          if (ie.flags & jl) {
            var be = ie.stateNode, et = ie.memoizedState, $e = et !== null;
            if (be.isHidden = $e, $e) {
              var Pt = ie.alternate !== null && ie.alternate.memoizedState !== null;
              Pt || lO();
            }
          }
          if (u & xt) {
            try {
              TD(e);
            } catch (st) {
              wn(e, e.return, st);
            }
            bx(e);
          }
          return;
        }
        case Xe: {
          var Nt = l !== null && l.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ve
          ) {
            var W = Xr;
            Xr = W || Nt, El(t, e), Xr = W;
          } else
            El(t, e);
          if (ro(e), u & jl) {
            var ae = e.stateNode, Q = e.memoizedState, ve = Q !== null, Oe = e;
            if (ae.isHidden = ve, ve && !Nt && (Oe.mode & Ve) !== Pe) {
              Ue = Oe;
              for (var _e = Oe.child; _e !== null; )
                Ue = _e, kD(_e), _e = _e.sibling;
            }
            SD(Oe, ve);
          }
          return;
        }
        case Ht: {
          El(t, e), ro(e), u & xt && bx(e);
          return;
        }
        case Rn:
          return;
        default: {
          El(t, e), ro(e);
          return;
        }
      }
    }
    function ro(e) {
      var t = e.flags;
      if (t & En) {
        try {
          xD(e);
        } catch (i) {
          wn(e, e.return, i);
        }
        e.flags &= ~En;
      }
      t & Wi && (e.flags &= ~Wi);
    }
    function _D(e, t, i) {
      fd = i, dd = t, Ue = e, kx(e, t, i), fd = null, dd = null;
    }
    function kx(e, t, i) {
      for (var l = (e.mode & Ve) !== Pe; Ue !== null; ) {
        var u = Ue, c = u.child;
        if (u.tag === Xe && l) {
          var v = u.memoizedState !== null, E = v || vy;
          if (E) {
            FS(e, t, i);
            continue;
          } else {
            var x = u.alternate, _ = x !== null && x.memoizedState !== null, O = _ || Xr, I = vy, P = Xr;
            vy = E, Xr = O, Xr && !P && (Ue = u, DD(u));
            for (var q = c; q !== null; )
              Ue = q, kx(
                q,
                // New root; bubble back up to here and stop.
                t,
                i
              ), q = q.sibling;
            Ue = u, vy = I, Xr = P, FS(e, t, i);
            continue;
          }
        }
        (u.subtreeFlags & Ur) !== Ke && c !== null ? (c.return = u, Ue = c) : FS(e, t, i);
      }
    }
    function FS(e, t, i) {
      for (; Ue !== null; ) {
        var l = Ue;
        if ((l.flags & Ur) !== Ke) {
          var u = l.alternate;
          en(l);
          try {
            yD(t, u, l, i);
          } catch (v) {
            wn(l, l.return, v);
          }
          zn();
        }
        if (l === e) {
          Ue = null;
          return;
        }
        var c = l.sibling;
        if (c !== null) {
          c.return = l.return, Ue = c;
          return;
        }
        Ue = l.return;
      }
    }
    function kD(e) {
      for (; Ue !== null; ) {
        var t = Ue, i = t.child;
        switch (t.tag) {
          case L:
          case Ge:
          case wt:
          case ot: {
            if (t.mode & ft)
              try {
                no(), gl(Tr, t, t.return);
              } finally {
                to(t);
              }
            else
              gl(Tr, t, t.return);
            break;
          }
          case B: {
            pd(t, t.return);
            var l = t.stateNode;
            typeof l.componentWillUnmount == "function" && LS(t, t.return, l);
            break;
          }
          case K: {
            pd(t, t.return);
            break;
          }
          case Xe: {
            var u = t.memoizedState !== null;
            if (u) {
              Dx(e);
              continue;
            }
            break;
          }
        }
        i !== null ? (i.return = t, Ue = i) : Dx(e);
      }
    }
    function Dx(e) {
      for (; Ue !== null; ) {
        var t = Ue;
        if (t === e) {
          Ue = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, Ue = i;
          return;
        }
        Ue = t.return;
      }
    }
    function DD(e) {
      for (; Ue !== null; ) {
        var t = Ue, i = t.child;
        if (t.tag === Xe) {
          var l = t.memoizedState !== null;
          if (l) {
            Ox(e);
            continue;
          }
        }
        i !== null ? (i.return = t, Ue = i) : Ox(e);
      }
    }
    function Ox(e) {
      for (; Ue !== null; ) {
        var t = Ue;
        en(t);
        try {
          gD(t);
        } catch (l) {
          wn(t, t.return, l);
        }
        if (zn(), t === e) {
          Ue = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, Ue = i;
          return;
        }
        Ue = t.return;
      }
    }
    function OD(e, t, i, l) {
      Ue = t, AD(t, e, i, l);
    }
    function AD(e, t, i, l) {
      for (; Ue !== null; ) {
        var u = Ue, c = u.child;
        (u.subtreeFlags & Qi) !== Ke && c !== null ? (c.return = u, Ue = c) : LD(e, t, i, l);
      }
    }
    function LD(e, t, i, l) {
      for (; Ue !== null; ) {
        var u = Ue;
        if ((u.flags & _n) !== Ke) {
          en(u);
          try {
            ND(t, u, i, l);
          } catch (v) {
            wn(u, u.return, v);
          }
          zn();
        }
        if (u === e) {
          Ue = null;
          return;
        }
        var c = u.sibling;
        if (c !== null) {
          c.return = u.return, Ue = c;
          return;
        }
        Ue = u.return;
      }
    }
    function ND(e, t, i, l) {
      switch (t.tag) {
        case L:
        case Ge:
        case ot: {
          if (t.mode & ft) {
            eS();
            try {
              cs(qr | wr, t);
            } finally {
              Z0(t);
            }
          } else
            cs(qr | wr, t);
          break;
        }
      }
    }
    function MD(e) {
      Ue = e, FD();
    }
    function FD() {
      for (; Ue !== null; ) {
        var e = Ue, t = e.child;
        if ((Ue.flags & Jt) !== Ke) {
          var i = e.deletions;
          if (i !== null) {
            for (var l = 0; l < i.length; l++) {
              var u = i[l];
              Ue = u, BD(u, e);
            }
            {
              var c = e.alternate;
              if (c !== null) {
                var v = c.child;
                if (v !== null) {
                  c.child = null;
                  do {
                    var E = v.sibling;
                    v.sibling = null, v = E;
                  } while (v !== null);
                }
              }
            }
            Ue = e;
          }
        }
        (e.subtreeFlags & Qi) !== Ke && t !== null ? (t.return = e, Ue = t) : UD();
      }
    }
    function UD() {
      for (; Ue !== null; ) {
        var e = Ue;
        (e.flags & _n) !== Ke && (en(e), zD(e), zn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ue = t;
          return;
        }
        Ue = e.return;
      }
    }
    function zD(e) {
      switch (e.tag) {
        case L:
        case Ge:
        case ot: {
          e.mode & ft ? (eS(), gl(qr | wr, e, e.return), Z0(e)) : gl(qr | wr, e, e.return);
          break;
        }
      }
    }
    function BD(e, t) {
      for (; Ue !== null; ) {
        var i = Ue;
        en(i), PD(i, t), zn();
        var l = i.child;
        l !== null ? (l.return = i, Ue = l) : jD(e);
      }
    }
    function jD(e) {
      for (; Ue !== null; ) {
        var t = Ue, i = t.sibling, l = t.return;
        if (xx(t), t === e) {
          Ue = null;
          return;
        }
        if (i !== null) {
          i.return = l, Ue = i;
          return;
        }
        Ue = l;
      }
    }
    function PD(e, t) {
      switch (e.tag) {
        case L:
        case Ge:
        case ot: {
          e.mode & ft ? (eS(), gl(qr, e, t), Z0(e)) : gl(qr, e, t);
          break;
        }
      }
    }
    function HD(e) {
      switch (e.tag) {
        case L:
        case Ge:
        case ot: {
          try {
            cs(Tr | wr, e);
          } catch (i) {
            wn(e, e.return, i);
          }
          break;
        }
        case B: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (i) {
            wn(e, e.return, i);
          }
          break;
        }
      }
    }
    function ID(e) {
      switch (e.tag) {
        case L:
        case Ge:
        case ot: {
          try {
            cs(qr | wr, e);
          } catch (t) {
            wn(e, e.return, t);
          }
          break;
        }
      }
    }
    function VD(e) {
      switch (e.tag) {
        case L:
        case Ge:
        case ot: {
          try {
            gl(Tr | wr, e, e.return);
          } catch (i) {
            wn(e, e.return, i);
          }
          break;
        }
        case B: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && LS(e, e.return, t);
          break;
        }
      }
    }
    function $D(e) {
      switch (e.tag) {
        case L:
        case Ge:
        case ot:
          try {
            gl(qr | wr, e, e.return);
          } catch (t) {
            wn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var vh = Symbol.for;
      vh("selector.component"), vh("selector.has_pseudo_class"), vh("selector.role"), vh("selector.test_id"), vh("selector.text");
    }
    var YD = [];
    function WD() {
      YD.forEach(function(e) {
        return e();
      });
    }
    var QD = d.ReactCurrentActQueue;
    function GD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), i = typeof jest < "u";
        return i && t !== !1;
      }
    }
    function Ax() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && QD.current !== null && h("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var qD = Math.ceil, US = d.ReactCurrentDispatcher, zS = d.ReactCurrentOwner, Zr = d.ReactCurrentBatchConfig, Cl = d.ReactCurrentActQueue, _r = (
      /*             */
      0
    ), Lx = (
      /*               */
      1
    ), ei = (
      /*                */
      2
    ), Ha = (
      /*                */
      4
    ), qo = 0, mh = 1, Ec = 2, yy = 3, yh = 4, Nx = 5, BS = 6, jt = _r, Ni = null, Yn = null, kr = ce, io = ce, jS = ts(ce), Dr = qo, gh = null, gy = ce, Sh = ce, Sy = ce, Eh = null, la = null, PS = 0, Mx = 500, Fx = 1 / 0, KD = 500, Ko = null;
    function Ch() {
      Fx = Ln() + KD;
    }
    function Ux() {
      return Fx;
    }
    var Ey = !1, HS = null, hd = null, Cc = !1, ds = null, xh = ce, IS = [], VS = null, XD = 50, wh = 0, $S = null, YS = !1, Cy = !1, JD = 50, vd = 0, xy = null, Th = yn, wy = ce, zx = !1;
    function Ty() {
      return Ni;
    }
    function Mi() {
      return (jt & (ei | Ha)) !== _r ? Ln() : (Th !== yn || (Th = Ln()), Th);
    }
    function ps(e) {
      var t = e.mode;
      if ((t & Ve) === Pe)
        return Qe;
      if ((jt & ei) !== _r && kr !== ce)
        return Uu(kr);
      var i = Q_() !== W_;
      if (i) {
        if (Zr.transition !== null) {
          var l = Zr.transition;
          l._updatedFibers || (l._updatedFibers = /* @__PURE__ */ new Set()), l._updatedFibers.add(e);
        }
        return wy === Kn && (wy = Uv()), wy;
      }
      var u = Ji();
      if (u !== Kn)
        return u;
      var c = Ab();
      return c;
    }
    function ZD(e) {
      var t = e.mode;
      return (t & Ve) === Pe ? Qe : hi();
    }
    function Or(e, t, i, l) {
      wO(), zx && h("useInsertionEffect must not schedule updates."), YS && (Cy = !0), Fo(e, i, l), (jt & ei) !== ce && e === Ni ? bO(t) : (Di && xf(e, t, i), _O(t), e === Ni && ((jt & ei) === _r && (Sh = yt(Sh, i)), Dr === yh && hs(e, kr)), oa(e, l), i === Qe && jt === _r && (t.mode & Ve) === Pe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Cl.isBatchingLegacy && (Ch(), z1()));
    }
    function eO(e, t, i) {
      var l = e.current;
      l.lanes = t, Fo(e, t, i), oa(e, i);
    }
    function tO(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (jt & ei) !== _r
      );
    }
    function oa(e, t) {
      var i = e.callbackNode;
      Av(e, t);
      var l = No(e, e === Ni ? kr : ce);
      if (l === ce) {
        i !== null && Zx(i), e.callbackNode = null, e.callbackPriority = Kn;
        return;
      }
      var u = In(l), c = e.callbackPriority;
      if (c === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Cl.current !== null && i !== JS)) {
        i == null && c !== Qe && h("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      i != null && Zx(i);
      var v;
      if (u === Qe)
        e.tag === ns ? (Cl.isBatchingLegacy !== null && (Cl.didScheduleLegacyUpdate = !0), D_(Px.bind(null, e))) : U1(Px.bind(null, e)), Cl.current !== null ? Cl.current.push(rs) : Nb(function() {
          (jt & (ei | Ha)) === _r && rs();
        }), v = null;
      else {
        var E;
        switch (xr(l)) {
          case Vn:
            E = Gc;
            break;
          case ol:
            E = bo;
            break;
          case La:
            E = Aa;
            break;
          case zu:
            E = qc;
            break;
          default:
            E = Aa;
            break;
        }
        v = ZS(E, Bx.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = v;
    }
    function Bx(e, t) {
      if (Sk(), Th = yn, wy = ce, (jt & (ei | Ha)) !== _r)
        throw new Error("Should not already be working.");
      var i = e.callbackNode, l = Jo();
      if (l && e.callbackNode !== i)
        return null;
      var u = No(e, e === Ni ? kr : ce);
      if (u === ce)
        return null;
      var c = !Qs(e, u) && !Fv(e, u) && !t, v = c ? fO(e, u) : by(e, u);
      if (v !== qo) {
        if (v === Ec) {
          var E = $l(e);
          E !== ce && (u = E, v = WS(e, E));
        }
        if (v === mh) {
          var x = gh;
          throw xc(e, ce), hs(e, u), oa(e, Ln()), x;
        }
        if (v === BS)
          hs(e, u);
        else {
          var _ = !Qs(e, u), O = e.current.alternate;
          if (_ && !rO(O)) {
            if (v = by(e, u), v === Ec) {
              var I = $l(e);
              I !== ce && (u = I, v = WS(e, I));
            }
            if (v === mh) {
              var P = gh;
              throw xc(e, ce), hs(e, u), oa(e, Ln()), P;
            }
          }
          e.finishedWork = O, e.finishedLanes = u, nO(e, v, u);
        }
      }
      return oa(e, Ln()), e.callbackNode === i ? Bx.bind(null, e) : null;
    }
    function WS(e, t) {
      var i = Eh;
      if (wf(e)) {
        var l = xc(e, t);
        l.flags |= Bn, x_(e.containerInfo);
      }
      var u = by(e, t);
      if (u !== Ec) {
        var c = la;
        la = i, c !== null && jx(c);
      }
      return u;
    }
    function jx(e) {
      la === null ? la = e : la.push.apply(la, e);
    }
    function nO(e, t, i) {
      switch (t) {
        case qo:
        case mh:
          throw new Error("Root did not complete. This is a bug in React.");
        case Ec: {
          wc(e, la, Ko);
          break;
        }
        case yy: {
          if (hs(e, i), Lv(i) && // do not delay if we're inside an act() scope
          !ew()) {
            var l = PS + Mx - Ln();
            if (l > 10) {
              var u = No(e, ce);
              if (u !== ce)
                break;
              var c = e.suspendedLanes;
              if (!Mo(c, i)) {
                Mi(), Ef(e, c);
                break;
              }
              e.timeoutHandle = Vg(wc.bind(null, e, la, Ko), l);
              break;
            }
          }
          wc(e, la, Ko);
          break;
        }
        case yh: {
          if (hs(e, i), Mv(i))
            break;
          if (!ew()) {
            var v = Dv(e, i), E = v, x = Ln() - E, _ = xO(x) - x;
            if (_ > 10) {
              e.timeoutHandle = Vg(wc.bind(null, e, la, Ko), _);
              break;
            }
          }
          wc(e, la, Ko);
          break;
        }
        case Nx: {
          wc(e, la, Ko);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function rO(e) {
      for (var t = e; ; ) {
        if (t.flags & zs) {
          var i = t.updateQueue;
          if (i !== null) {
            var l = i.stores;
            if (l !== null)
              for (var u = 0; u < l.length; u++) {
                var c = l[u], v = c.getSnapshot, E = c.value;
                try {
                  if (!Fe(v(), E))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var x = t.child;
        if (t.subtreeFlags & zs && x !== null) {
          x.return = t, t = x;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function hs(e, t) {
      t = Gs(t, Sy), t = Gs(t, Sh), Bv(e, t);
    }
    function Px(e) {
      if (Ek(), (jt & (ei | Ha)) !== _r)
        throw new Error("Should not already be working.");
      Jo();
      var t = No(e, ce);
      if (!vi(t, Qe))
        return oa(e, Ln()), null;
      var i = by(e, t);
      if (e.tag !== ns && i === Ec) {
        var l = $l(e);
        l !== ce && (t = l, i = WS(e, l));
      }
      if (i === mh) {
        var u = gh;
        throw xc(e, ce), hs(e, t), oa(e, Ln()), u;
      }
      if (i === BS)
        throw new Error("Root did not complete. This is a bug in React.");
      var c = e.current.alternate;
      return e.finishedWork = c, e.finishedLanes = t, wc(e, la, Ko), oa(e, Ln()), null;
    }
    function iO(e, t) {
      t !== ce && (hp(e, yt(t, Qe)), oa(e, Ln()), (jt & (ei | Ha)) === _r && (Ch(), rs()));
    }
    function QS(e, t) {
      var i = jt;
      jt |= Lx;
      try {
        return e(t);
      } finally {
        jt = i, jt === _r && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Cl.isBatchingLegacy && (Ch(), z1());
      }
    }
    function aO(e, t, i, l, u) {
      var c = Ji(), v = Zr.transition;
      try {
        return Zr.transition = null, jn(Vn), e(t, i, l, u);
      } finally {
        jn(c), Zr.transition = v, jt === _r && Ch();
      }
    }
    function Xo(e) {
      ds !== null && ds.tag === ns && (jt & (ei | Ha)) === _r && Jo();
      var t = jt;
      jt |= Lx;
      var i = Zr.transition, l = Ji();
      try {
        return Zr.transition = null, jn(Vn), e ? e() : void 0;
      } finally {
        jn(l), Zr.transition = i, jt = t, (jt & (ei | Ha)) === _r && rs();
      }
    }
    function Hx() {
      return (jt & (ei | Ha)) !== _r;
    }
    function Ry(e, t) {
      gi(jS, io, e), io = yt(io, t);
    }
    function GS(e) {
      io = jS.current, yi(jS, e);
    }
    function xc(e, t) {
      e.finishedWork = null, e.finishedLanes = ce;
      var i = e.timeoutHandle;
      if (i !== $g && (e.timeoutHandle = $g, Lb(i)), Yn !== null)
        for (var l = Yn.return; l !== null; ) {
          var u = l.alternate;
          mx(u, l), l = l.return;
        }
      Ni = e;
      var c = Tc(e.current, null);
      return Yn = c, kr = io = t, Dr = qo, gh = null, gy = ce, Sh = ce, Sy = ce, Eh = null, la = null, ek(), pl.discardPendingWarnings(), c;
    }
    function Ix(e, t) {
      do {
        var i = Yn;
        try {
          if (Fm(), dC(), zn(), zS.current = null, i === null || i.return === null) {
            Dr = mh, gh = t, Yn = null;
            return;
          }
          if (vt && i.mode & ft && cy(i, !0), qe)
            if (di(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var l = t;
              ko(i, l, kr);
            } else
              Ps(i, t, kr);
          Dk(e, i.return, i, t, kr), Wx(i);
        } catch (u) {
          t = u, Yn === i && i !== null ? (i = i.return, Yn = i) : i = Yn;
          continue;
        }
        return;
      } while (!0);
    }
    function Vx() {
      var e = US.current;
      return US.current = ay, e === null ? ay : e;
    }
    function $x(e) {
      US.current = e;
    }
    function lO() {
      PS = Ln();
    }
    function Rh(e) {
      gy = yt(e, gy);
    }
    function oO() {
      Dr === qo && (Dr = yy);
    }
    function qS() {
      (Dr === qo || Dr === yy || Dr === Ec) && (Dr = yh), Ni !== null && (Ws(gy) || Ws(Sh)) && hs(Ni, kr);
    }
    function uO(e) {
      Dr !== yh && (Dr = Ec), Eh === null ? Eh = [e] : Eh.push(e);
    }
    function sO() {
      return Dr === qo;
    }
    function by(e, t) {
      var i = jt;
      jt |= ei;
      var l = Vx();
      if (Ni !== e || kr !== t) {
        if (Di) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (bh(e, kr), u.clear()), vp(e, t);
        }
        Ko = Ks(), xc(e, t);
      }
      kn(t);
      do
        try {
          cO();
          break;
        } catch (c) {
          Ix(e, c);
        }
      while (!0);
      if (Fm(), jt = i, $x(l), Yn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return ef(), Ni = null, kr = ce, Dr;
    }
    function cO() {
      for (; Yn !== null; )
        Yx(Yn);
    }
    function fO(e, t) {
      var i = jt;
      jt |= ei;
      var l = Vx();
      if (Ni !== e || kr !== t) {
        if (Di) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (bh(e, kr), u.clear()), vp(e, t);
        }
        Ko = Ks(), Ch(), xc(e, t);
      }
      kn(t);
      do
        try {
          dO();
          break;
        } catch (c) {
          Ix(e, c);
        }
      while (!0);
      return Fm(), $x(l), jt = i, Yn !== null ? (Zc(), qo) : (ef(), Ni = null, kr = ce, Dr);
    }
    function dO() {
      for (; Yn !== null && !Qc(); )
        Yx(Yn);
    }
    function Yx(e) {
      var t = e.alternate;
      en(e);
      var i;
      (e.mode & ft) !== Pe ? (J0(e), i = KS(t, e, io), cy(e, !0)) : i = KS(t, e, io), zn(), e.memoizedProps = e.pendingProps, i === null ? Wx(e) : Yn = i, zS.current = null;
    }
    function Wx(e) {
      var t = e;
      do {
        var i = t.alternate, l = t.return;
        if ((t.flags & bi) === Ke) {
          en(t);
          var u = void 0;
          if ((t.mode & ft) === Pe ? u = vx(i, t, io) : (J0(t), u = vx(i, t, io), cy(t, !1)), zn(), u !== null) {
            Yn = u;
            return;
          }
        } else {
          var c = oD(i, t);
          if (c !== null) {
            c.flags &= gv, Yn = c;
            return;
          }
          if ((t.mode & ft) !== Pe) {
            cy(t, !1);
            for (var v = t.actualDuration, E = t.child; E !== null; )
              v += E.actualDuration, E = E.sibling;
            t.actualDuration = v;
          }
          if (l !== null)
            l.flags |= bi, l.subtreeFlags = Ke, l.deletions = null;
          else {
            Dr = BS, Yn = null;
            return;
          }
        }
        var x = t.sibling;
        if (x !== null) {
          Yn = x;
          return;
        }
        t = l, Yn = t;
      } while (t !== null);
      Dr === qo && (Dr = Nx);
    }
    function wc(e, t, i) {
      var l = Ji(), u = Zr.transition;
      try {
        Zr.transition = null, jn(Vn), pO(e, t, i, l);
      } finally {
        Zr.transition = u, jn(l);
      }
      return null;
    }
    function pO(e, t, i, l) {
      do
        Jo();
      while (ds !== null);
      if (TO(), (jt & (ei | Ha)) !== _r)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, c = e.finishedLanes;
      if (Hl(c), u === null)
        return Kc(), null;
      if (c === ce && h("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ce, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Kn;
      var v = yt(u.lanes, u.childLanes);
      Cf(e, v), e === Ni && (Ni = null, Yn = null, kr = ce), ((u.subtreeFlags & Qi) !== Ke || (u.flags & Qi) !== Ke) && (Cc || (Cc = !0, VS = i, ZS(Aa, function() {
        return Jo(), null;
      })));
      var E = (u.subtreeFlags & (wu | ci | Ur | Qi)) !== Ke, x = (u.flags & (wu | ci | Ur | Qi)) !== Ke;
      if (E || x) {
        var _ = Zr.transition;
        Zr.transition = null;
        var O = Ji();
        jn(Vn);
        var I = jt;
        jt |= Ha, zS.current = null, dD(e, u), zC(), bD(e, u, c), Rb(e.containerInfo), e.current = u, lp(c), _D(u, e, c), ku(), Cv(), jt = I, jn(O), Zr.transition = _;
      } else
        e.current = u, zC();
      var P = Cc;
      if (Cc ? (Cc = !1, ds = e, xh = c) : (vd = 0, xy = null), v = e.pendingLanes, v === ce && (hd = null), P || Kx(e.current, !1), Ru(u.stateNode, l), Di && e.memoizedUpdaters.clear(), WD(), oa(e, Ln()), t !== null)
        for (var q = e.onRecoverableError, ee = 0; ee < t.length; ee++) {
          var ie = t[ee], be = ie.stack, et = ie.digest;
          q(ie.value, {
            componentStack: be,
            digest: et
          });
        }
      if (Ey) {
        Ey = !1;
        var $e = HS;
        throw HS = null, $e;
      }
      return vi(xh, Qe) && e.tag !== ns && Jo(), v = e.pendingLanes, vi(v, Qe) ? (gk(), e === $S ? wh++ : (wh = 0, $S = e)) : wh = 0, rs(), Kc(), null;
    }
    function Jo() {
      if (ds !== null) {
        var e = xr(xh), t = hg(La, e), i = Zr.transition, l = Ji();
        try {
          return Zr.transition = null, jn(t), vO();
        } finally {
          jn(l), Zr.transition = i;
        }
      }
      return !1;
    }
    function hO(e) {
      IS.push(e), Cc || (Cc = !0, ZS(Aa, function() {
        return Jo(), null;
      }));
    }
    function vO() {
      if (ds === null)
        return !1;
      var e = VS;
      VS = null;
      var t = ds, i = xh;
      if (ds = null, xh = ce, (jt & (ei | Ha)) !== _r)
        throw new Error("Cannot flush passive effects while already rendering.");
      YS = !0, Cy = !1, _v(i);
      var l = jt;
      jt |= Ha, MD(t.current), OD(t, t.current, i, e);
      {
        var u = IS;
        IS = [];
        for (var c = 0; c < u.length; c++) {
          var v = u[c];
          mD(t, v);
        }
      }
      op(), Kx(t.current, !0), jt = l, rs(), Cy ? t === xy ? vd++ : (vd = 0, xy = t) : vd = 0, YS = !1, Cy = !1, Ki(t);
      {
        var E = t.current.stateNode;
        E.effectDuration = 0, E.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Qx(e) {
      return hd !== null && hd.has(e);
    }
    function mO(e) {
      hd === null ? hd = /* @__PURE__ */ new Set([e]) : hd.add(e);
    }
    function yO(e) {
      Ey || (Ey = !0, HS = e);
    }
    var gO = yO;
    function Gx(e, t, i) {
      var l = gc(i, t), u = YC(e, l, Qe), c = as(e, u, Qe), v = Mi();
      c !== null && (Fo(c, Qe, v), oa(c, v));
    }
    function wn(e, t, i) {
      if (sD(i), _h(!1), e.tag === N) {
        Gx(e, e, i);
        return;
      }
      var l = null;
      for (l = t; l !== null; ) {
        if (l.tag === N) {
          Gx(l, e, i);
          return;
        } else if (l.tag === B) {
          var u = l.type, c = l.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && !Qx(c)) {
            var v = gc(i, e), E = mS(l, v, Qe), x = as(l, E, Qe), _ = Mi();
            x !== null && (Fo(x, Qe, _), oa(x, _));
            return;
          }
        }
        l = l.return;
      }
      h(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, i);
    }
    function SO(e, t, i) {
      var l = e.pingCache;
      l !== null && l.delete(t);
      var u = Mi();
      Ef(e, i), kO(e), Ni === e && Mo(kr, i) && (Dr === yh || Dr === yy && Lv(kr) && Ln() - PS < Mx ? xc(e, ce) : Sy = yt(Sy, i)), oa(e, u);
    }
    function qx(e, t) {
      t === Kn && (t = ZD(e));
      var i = Mi(), l = ia(e, t);
      l !== null && (Fo(l, t, i), oa(l, i));
    }
    function EO(e) {
      var t = e.memoizedState, i = Kn;
      t !== null && (i = t.retryLane), qx(e, i);
    }
    function CO(e, t) {
      var i = Kn, l;
      switch (e.tag) {
        case Ye:
          l = e.stateNode;
          var u = e.memoizedState;
          u !== null && (i = u.retryLane);
          break;
        case Ht:
          l = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      l !== null && l.delete(t), qx(e, i);
    }
    function xO(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : qD(e / 1960) * 1960;
    }
    function wO() {
      if (wh > XD)
        throw wh = 0, $S = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      vd > JD && (vd = 0, xy = null, h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function TO() {
      pl.flushLegacyContextWarning(), pl.flushPendingUnsafeLifecycleWarnings();
    }
    function Kx(e, t) {
      en(e), _y(e, si, VD), t && _y(e, Ro, $D), _y(e, si, HD), t && _y(e, Ro, ID), zn();
    }
    function _y(e, t, i) {
      for (var l = e, u = null; l !== null; ) {
        var c = l.subtreeFlags & t;
        l !== u && l.child !== null && c !== Ke ? l = l.child : ((l.flags & t) !== Ke && i(l), l.sibling !== null ? l = l.sibling : l = u = l.return);
      }
    }
    var ky = null;
    function Xx(e) {
      {
        if ((jt & ei) !== _r || !(e.mode & Ve))
          return;
        var t = e.tag;
        if (t !== D && t !== N && t !== B && t !== L && t !== Ge && t !== wt && t !== ot)
          return;
        var i = dt(e) || "ReactComponent";
        if (ky !== null) {
          if (ky.has(i))
            return;
          ky.add(i);
        } else
          ky = /* @__PURE__ */ new Set([i]);
        var l = An;
        try {
          en(e), h("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          l ? en(e) : zn();
        }
      }
    }
    var KS;
    {
      var RO = null;
      KS = function(e, t, i) {
        var l = aw(RO, t);
        try {
          return cx(e, t, i);
        } catch (c) {
          if (z_() || c !== null && typeof c == "object" && typeof c.then == "function")
            throw c;
          if (Fm(), dC(), mx(e, t), aw(t, l), t.mode & ft && J0(t), To(null, cx, null, e, t, i), sg()) {
            var u = Xd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof c == "object" && c !== null && !c._suppressLogging && (c._suppressLogging = !0);
          }
          throw c;
        }
      };
    }
    var Jx = !1, XS;
    XS = /* @__PURE__ */ new Set();
    function bO(e) {
      if (ii && !vk())
        switch (e.tag) {
          case L:
          case Ge:
          case ot: {
            var t = Yn && dt(Yn) || "Unknown", i = t;
            if (!XS.has(i)) {
              XS.add(i);
              var l = dt(e) || "Unknown";
              h("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", l, t, t);
            }
            break;
          }
          case B: {
            Jx || (h("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Jx = !0);
            break;
          }
        }
    }
    function bh(e, t) {
      if (Di) {
        var i = e.memoizedUpdaters;
        i.forEach(function(l) {
          xf(e, l, t);
        });
      }
    }
    var JS = {};
    function ZS(e, t) {
      {
        var i = Cl.current;
        return i !== null ? (i.push(t), JS) : Wc(e, t);
      }
    }
    function Zx(e) {
      if (e !== JS)
        return Ev(e);
    }
    function ew() {
      return Cl.current !== null;
    }
    function _O(e) {
      {
        if (e.mode & Ve) {
          if (!Ax())
            return;
        } else if (!GD() || jt !== _r || e.tag !== L && e.tag !== Ge && e.tag !== ot)
          return;
        if (Cl.current === null) {
          var t = An;
          try {
            en(e), h(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, dt(e));
          } finally {
            t ? en(e) : zn();
          }
        }
      }
    }
    function kO(e) {
      e.tag !== ns && Ax() && Cl.current === null && h(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function _h(e) {
      zx = e;
    }
    var Ia = null, md = null, DO = function(e) {
      Ia = e;
    };
    function yd(e) {
      {
        if (Ia === null)
          return e;
        var t = Ia(e);
        return t === void 0 ? e : t.current;
      }
    }
    function eE(e) {
      return yd(e);
    }
    function tE(e) {
      {
        if (Ia === null)
          return e;
        var t = Ia(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var i = yd(e.render);
            if (e.render !== i) {
              var l = {
                $$typeof: me,
                render: i
              };
              return e.displayName !== void 0 && (l.displayName = e.displayName), l;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function tw(e, t) {
      {
        if (Ia === null)
          return !1;
        var i = e.elementType, l = t.type, u = !1, c = typeof l == "object" && l !== null ? l.$$typeof : null;
        switch (e.tag) {
          case B: {
            typeof l == "function" && (u = !0);
            break;
          }
          case L: {
            (typeof l == "function" || c === it) && (u = !0);
            break;
          }
          case Ge: {
            (c === me || c === it) && (u = !0);
            break;
          }
          case wt:
          case ot: {
            (c === Ft || c === it) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var v = Ia(i);
          if (v !== void 0 && v === Ia(l))
            return !0;
        }
        return !1;
      }
    }
    function nw(e) {
      {
        if (Ia === null || typeof WeakSet != "function")
          return;
        md === null && (md = /* @__PURE__ */ new WeakSet()), md.add(e);
      }
    }
    var OO = function(e, t) {
      {
        if (Ia === null)
          return;
        var i = t.staleFamilies, l = t.updatedFamilies;
        Jo(), Xo(function() {
          nE(e.current, l, i);
        });
      }
    }, AO = function(e, t) {
      {
        if (e.context !== Ea)
          return;
        Jo(), Xo(function() {
          kh(t, e, null, null);
        });
      }
    };
    function nE(e, t, i) {
      {
        var l = e.alternate, u = e.child, c = e.sibling, v = e.tag, E = e.type, x = null;
        switch (v) {
          case L:
          case ot:
          case B:
            x = E;
            break;
          case Ge:
            x = E.render;
            break;
        }
        if (Ia === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var _ = !1, O = !1;
        if (x !== null) {
          var I = Ia(x);
          I !== void 0 && (i.has(I) ? O = !0 : t.has(I) && (v === B ? O = !0 : _ = !0));
        }
        if (md !== null && (md.has(e) || l !== null && md.has(l)) && (O = !0), O && (e._debugNeedsRemount = !0), O || _) {
          var P = ia(e, Qe);
          P !== null && Or(P, e, Qe, yn);
        }
        u !== null && !O && nE(u, t, i), c !== null && nE(c, t, i);
      }
    }
    var LO = function(e, t) {
      {
        var i = /* @__PURE__ */ new Set(), l = new Set(t.map(function(u) {
          return u.current;
        }));
        return rE(e.current, l, i), i;
      }
    };
    function rE(e, t, i) {
      {
        var l = e.child, u = e.sibling, c = e.tag, v = e.type, E = null;
        switch (c) {
          case L:
          case ot:
          case B:
            E = v;
            break;
          case Ge:
            E = v.render;
            break;
        }
        var x = !1;
        E !== null && t.has(E) && (x = !0), x ? NO(e, i) : l !== null && rE(l, t, i), u !== null && rE(u, t, i);
      }
    }
    function NO(e, t) {
      {
        var i = MO(e, t);
        if (i)
          return;
        for (var l = e; ; ) {
          switch (l.tag) {
            case K:
              t.add(l.stateNode);
              return;
            case J:
              t.add(l.stateNode.containerInfo);
              return;
            case N:
              t.add(l.stateNode.containerInfo);
              return;
          }
          if (l.return === null)
            throw new Error("Expected to reach root first.");
          l = l.return;
        }
      }
    }
    function MO(e, t) {
      for (var i = e, l = !1; ; ) {
        if (i.tag === K)
          l = !0, t.add(i.stateNode);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return l;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return l;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
      return !1;
    }
    var iE;
    {
      iE = !1;
      try {
        var rw = Object.preventExtensions({});
      } catch {
        iE = !0;
      }
    }
    function FO(e, t, i, l) {
      this.tag = e, this.key = i, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = l, this.flags = Ke, this.subtreeFlags = Ke, this.deletions = null, this.lanes = ce, this.childLanes = ce, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !iE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ca = function(e, t, i, l) {
      return new FO(e, t, i, l);
    };
    function aE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function UO(e) {
      return typeof e == "function" && !aE(e) && e.defaultProps === void 0;
    }
    function zO(e) {
      if (typeof e == "function")
        return aE(e) ? B : L;
      if (e != null) {
        var t = e.$$typeof;
        if (t === me)
          return Ge;
        if (t === Ft)
          return wt;
      }
      return D;
    }
    function Tc(e, t) {
      var i = e.alternate;
      i === null ? (i = Ca(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i._debugSource = e._debugSource, i._debugOwner = e._debugOwner, i._debugHookTypes = e._debugHookTypes, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = Ke, i.subtreeFlags = Ke, i.deletions = null, i.actualDuration = 0, i.actualStartTime = -1), i.flags = e.flags & Er, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue;
      var l = e.dependencies;
      switch (i.dependencies = l === null ? null : {
        lanes: l.lanes,
        firstContext: l.firstContext
      }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.selfBaseDuration = e.selfBaseDuration, i.treeBaseDuration = e.treeBaseDuration, i._debugNeedsRemount = e._debugNeedsRemount, i.tag) {
        case D:
        case L:
        case ot:
          i.type = yd(e.type);
          break;
        case B:
          i.type = eE(e.type);
          break;
        case Ge:
          i.type = tE(e.type);
          break;
      }
      return i;
    }
    function BO(e, t) {
      e.flags &= Er | En;
      var i = e.alternate;
      if (i === null)
        e.childLanes = ce, e.lanes = t, e.child = null, e.subtreeFlags = Ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = Ke, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type;
        var l = i.dependencies;
        e.dependencies = l === null ? null : {
          lanes: l.lanes,
          firstContext: l.firstContext
        }, e.selfBaseDuration = i.selfBaseDuration, e.treeBaseDuration = i.treeBaseDuration;
      }
      return e;
    }
    function jO(e, t, i) {
      var l;
      return e === Rm ? (l = Ve, t === !0 && (l |= Dt, l |= Oi)) : l = Pe, Di && (l |= ft), Ca(N, null, null, l);
    }
    function lE(e, t, i, l, u, c) {
      var v = D, E = e;
      if (typeof e == "function")
        aE(e) ? (v = B, E = eE(E)) : E = yd(E);
      else if (typeof e == "string")
        v = K;
      else
        e:
          switch (e) {
            case Ri:
              return vs(i.children, u, c, t);
            case Ta:
              v = Ce, u |= Dt, (u & Ve) !== Pe && (u |= Oi);
              break;
            case Ra:
              return PO(i, u, c, t);
            case Ie:
              return HO(i, u, c, t);
            case At:
              return IO(i, u, c, t);
            case fn:
              return iw(i, u, c, t);
            case Sn:
            case Tt:
            case Fr:
            case ba:
            case Qn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case U:
                    v = Ee;
                    break e;
                  case de:
                    v = nt;
                    break e;
                  case me:
                    v = Ge, E = tE(E);
                    break e;
                  case Ft:
                    v = wt;
                    break e;
                  case it:
                    v = Vt, E = null;
                    break e;
                }
              var x = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var _ = l ? dt(l) : null;
                _ && (x += `

Check the render method of \`` + _ + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + x));
            }
          }
      var O = Ca(v, i, t, u);
      return O.elementType = e, O.type = E, O.lanes = c, O._debugOwner = l, O;
    }
    function oE(e, t, i) {
      var l = null;
      l = e._owner;
      var u = e.type, c = e.key, v = e.props, E = lE(u, c, v, l, t, i);
      return E._debugSource = e._source, E._debugOwner = e._owner, E;
    }
    function vs(e, t, i, l) {
      var u = Ca(ue, e, l, t);
      return u.lanes = i, u;
    }
    function PO(e, t, i, l) {
      typeof e.id != "string" && h('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Ca(St, e, l, t | ft);
      return u.elementType = Ra, u.lanes = i, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function HO(e, t, i, l) {
      var u = Ca(Ye, e, l, t);
      return u.elementType = Ie, u.lanes = i, u;
    }
    function IO(e, t, i, l) {
      var u = Ca(Ht, e, l, t);
      return u.elementType = At, u.lanes = i, u;
    }
    function iw(e, t, i, l) {
      var u = Ca(Xe, e, l, t);
      u.elementType = fn, u.lanes = i;
      var c = {
        isHidden: !1
      };
      return u.stateNode = c, u;
    }
    function uE(e, t, i) {
      var l = Ca(te, e, null, t);
      return l.lanes = i, l;
    }
    function VO() {
      var e = Ca(K, null, null, Pe);
      return e.elementType = "DELETED", e;
    }
    function $O(e) {
      var t = Ca(Xt, null, null, Pe);
      return t.stateNode = e, t;
    }
    function sE(e, t, i) {
      var l = e.children !== null ? e.children : [], u = Ca(J, l, e.key, t);
      return u.lanes = i, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function aw(e, t) {
      return e === null && (e = Ca(D, null, null, Pe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function YO(e, t, i, l, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = $g, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Kn, this.eventTimes = qs(ce), this.expirationTimes = qs(yn), this.pendingLanes = ce, this.suspendedLanes = ce, this.pingedLanes = ce, this.expiredLanes = ce, this.mutableReadLanes = ce, this.finishedLanes = ce, this.entangledLanes = ce, this.entanglements = qs(ce), this.identifierPrefix = l, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var c = this.pendingUpdatersLaneMap = [], v = 0; v < Vs; v++)
          c.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Rm:
          this._debugRootType = i ? "hydrateRoot()" : "createRoot()";
          break;
        case ns:
          this._debugRootType = i ? "hydrate()" : "render()";
          break;
      }
    }
    function lw(e, t, i, l, u, c, v, E, x, _) {
      var O = new YO(e, t, i, E, x), I = jO(t, c);
      O.current = I, I.stateNode = O;
      {
        var P = {
          element: l,
          isDehydrated: i,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        I.memoizedState = P;
      }
      return x0(I), O;
    }
    var cE = "18.3.1";
    function WO(e, t, i) {
      var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Nr(l), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Hr,
        key: l == null ? null : "" + l,
        children: e,
        containerInfo: t,
        implementation: i
      };
    }
    var fE, dE;
    fE = !1, dE = {};
    function ow(e) {
      if (!e)
        return Ea;
      var t = $i(e), i = k_(t);
      if (t.tag === B) {
        var l = t.type;
        if (Xl(l))
          return M1(t, l, i);
      }
      return i;
    }
    function QO(e, t) {
      {
        var i = $i(e);
        if (i === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var l = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + l);
        }
        var u = Gi(i);
        if (u === null)
          return null;
        if (u.mode & Dt) {
          var c = dt(i) || "Component";
          if (!dE[c]) {
            dE[c] = !0;
            var v = An;
            try {
              en(u), i.mode & Dt ? h("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c) : h("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c);
            } finally {
              v ? en(v) : zn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function uw(e, t, i, l, u, c, v, E) {
      var x = !1, _ = null;
      return lw(e, t, x, _, i, l, u, c, v);
    }
    function sw(e, t, i, l, u, c, v, E, x, _) {
      var O = !0, I = lw(i, l, O, e, u, c, v, E, x);
      I.context = ow(null);
      var P = I.current, q = Mi(), ee = ps(P), ie = Qo(q, ee);
      return ie.callback = t ?? null, as(P, ie, ee), eO(I, ee, q), I;
    }
    function kh(e, t, i, l) {
      ap(t, e);
      var u = t.current, c = Mi(), v = ps(u);
      up(v);
      var E = ow(i);
      t.context === null ? t.context = E : t.pendingContext = E, ii && An !== null && !fE && (fE = !0, h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, dt(An) || "Unknown"));
      var x = Qo(c, v);
      x.payload = {
        element: e
      }, l = l === void 0 ? null : l, l !== null && (typeof l != "function" && h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", l), x.callback = l);
      var _ = as(u, x, v);
      return _ !== null && (Or(_, u, v, c), Pm(_, u, v)), v;
    }
    function Dy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case K:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function GO(e) {
      switch (e.tag) {
        case N: {
          var t = e.stateNode;
          if (wf(t)) {
            var i = fp(t);
            iO(t, i);
          }
          break;
        }
        case Ye: {
          Xo(function() {
            var u = ia(e, Qe);
            if (u !== null) {
              var c = Mi();
              Or(u, e, Qe, c);
            }
          });
          var l = Qe;
          pE(e, l);
          break;
        }
      }
    }
    function cw(e, t) {
      var i = e.memoizedState;
      i !== null && i.dehydrated !== null && (i.retryLane = zv(i.retryLane, t));
    }
    function pE(e, t) {
      cw(e, t);
      var i = e.alternate;
      i && cw(i, t);
    }
    function qO(e) {
      if (e.tag === Ye) {
        var t = Ys, i = ia(e, t);
        if (i !== null) {
          var l = Mi();
          Or(i, e, t, l);
        }
        pE(e, t);
      }
    }
    function KO(e) {
      if (e.tag === Ye) {
        var t = ps(e), i = ia(e, t);
        if (i !== null) {
          var l = Mi();
          Or(i, e, t, l);
        }
        pE(e, t);
      }
    }
    function fw(e) {
      var t = Sv(e);
      return t === null ? null : t.stateNode;
    }
    var dw = function(e) {
      return null;
    };
    function XO(e) {
      return dw(e);
    }
    var pw = function(e) {
      return !1;
    };
    function JO(e) {
      return pw(e);
    }
    var hw = null, vw = null, mw = null, yw = null, gw = null, Sw = null, Ew = null, Cw = null, xw = null;
    {
      var ww = function(e, t, i) {
        var l = t[i], u = zt(e) ? e.slice() : Rt({}, e);
        return i + 1 === t.length ? (zt(u) ? u.splice(l, 1) : delete u[l], u) : (u[l] = ww(e[l], t, i + 1), u);
      }, Tw = function(e, t) {
        return ww(e, t, 0);
      }, Rw = function(e, t, i, l) {
        var u = t[l], c = zt(e) ? e.slice() : Rt({}, e);
        if (l + 1 === t.length) {
          var v = i[l];
          c[v] = c[u], zt(c) ? c.splice(u, 1) : delete c[u];
        } else
          c[u] = Rw(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            i,
            l + 1
          );
        return c;
      }, bw = function(e, t, i) {
        if (t.length !== i.length) {
          w("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var l = 0; l < i.length - 1; l++)
            if (t[l] !== i[l]) {
              w("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Rw(e, t, i, 0);
      }, _w = function(e, t, i, l) {
        if (i >= t.length)
          return l;
        var u = t[i], c = zt(e) ? e.slice() : Rt({}, e);
        return c[u] = _w(e[u], t, i + 1, l), c;
      }, kw = function(e, t, i) {
        return _w(e, t, 0, i);
      }, hE = function(e, t) {
        for (var i = e.memoizedState; i !== null && t > 0; )
          i = i.next, t--;
        return i;
      };
      hw = function(e, t, i, l) {
        var u = hE(e, t);
        if (u !== null) {
          var c = kw(u.memoizedState, i, l);
          u.memoizedState = c, u.baseState = c, e.memoizedProps = Rt({}, e.memoizedProps);
          var v = ia(e, Qe);
          v !== null && Or(v, e, Qe, yn);
        }
      }, vw = function(e, t, i) {
        var l = hE(e, t);
        if (l !== null) {
          var u = Tw(l.memoizedState, i);
          l.memoizedState = u, l.baseState = u, e.memoizedProps = Rt({}, e.memoizedProps);
          var c = ia(e, Qe);
          c !== null && Or(c, e, Qe, yn);
        }
      }, mw = function(e, t, i, l) {
        var u = hE(e, t);
        if (u !== null) {
          var c = bw(u.memoizedState, i, l);
          u.memoizedState = c, u.baseState = c, e.memoizedProps = Rt({}, e.memoizedProps);
          var v = ia(e, Qe);
          v !== null && Or(v, e, Qe, yn);
        }
      }, yw = function(e, t, i) {
        e.pendingProps = kw(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = ia(e, Qe);
        l !== null && Or(l, e, Qe, yn);
      }, gw = function(e, t) {
        e.pendingProps = Tw(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ia(e, Qe);
        i !== null && Or(i, e, Qe, yn);
      }, Sw = function(e, t, i) {
        e.pendingProps = bw(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = ia(e, Qe);
        l !== null && Or(l, e, Qe, yn);
      }, Ew = function(e) {
        var t = ia(e, Qe);
        t !== null && Or(t, e, Qe, yn);
      }, Cw = function(e) {
        dw = e;
      }, xw = function(e) {
        pw = e;
      };
    }
    function ZO(e) {
      var t = Gi(e);
      return t === null ? null : t.stateNode;
    }
    function eA(e) {
      return null;
    }
    function tA() {
      return An;
    }
    function nA(e) {
      var t = e.findFiberByHostInstance, i = d.ReactCurrentDispatcher;
      return ip({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: hw,
        overrideHookStateDeletePath: vw,
        overrideHookStateRenamePath: mw,
        overrideProps: yw,
        overridePropsDeletePath: gw,
        overridePropsRenamePath: Sw,
        setErrorHandler: Cw,
        setSuspenseHandler: xw,
        scheduleUpdate: Ew,
        currentDispatcherRef: i,
        findHostInstanceByFiber: ZO,
        findFiberByHostInstance: t || eA,
        // React Refresh
        findHostInstancesForRefresh: LO,
        scheduleRefresh: OO,
        scheduleRoot: AO,
        setRefreshHandler: DO,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: tA,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: cE
      });
    }
    var Dw = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function vE(e) {
      this._internalRoot = e;
    }
    Oy.prototype.render = vE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? h("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Ay(arguments[1]) ? h("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && h("You passed a second argument to root.render(...) but it only accepts one argument.");
        var i = t.containerInfo;
        if (i.nodeType !== Gn) {
          var l = fw(t.current);
          l && l.parentNode !== i && h("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      kh(e, t, null, null);
    }, Oy.prototype.unmount = vE.prototype.unmount = function() {
      typeof arguments[0] == "function" && h("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Hx() && h("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Xo(function() {
          kh(null, e, null, null);
        }), D1(t);
      }
    };
    function rA(e, t) {
      if (!Ay(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Ow(e);
      var i = !1, l = !1, u = "", c = Dw;
      t != null && (t.hydrate ? w("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === da && h(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = uw(e, Rm, null, i, l, u, c);
      gm(v.current, e);
      var E = e.nodeType === Gn ? e.parentNode : e;
      return Mp(E), new vE(v);
    }
    function Oy(e) {
      this._internalRoot = e;
    }
    function iA(e) {
      e && yg(e);
    }
    Oy.prototype.unstable_scheduleHydration = iA;
    function aA(e, t, i) {
      if (!Ay(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Ow(e), t === void 0 && h("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var l = i ?? null, u = i != null && i.hydratedSources || null, c = !1, v = !1, E = "", x = Dw;
      i != null && (i.unstable_strictMode === !0 && (c = !0), i.identifierPrefix !== void 0 && (E = i.identifierPrefix), i.onRecoverableError !== void 0 && (x = i.onRecoverableError));
      var _ = sw(t, null, e, Rm, l, c, v, E, x);
      if (gm(_.current, e), Mp(e), u)
        for (var O = 0; O < u.length; O++) {
          var I = u[O];
          sk(_, I);
        }
      return new Oy(_);
    }
    function Ay(e) {
      return !!(e && (e.nodeType === li || e.nodeType === ma || e.nodeType === go || !le));
    }
    function Dh(e) {
      return !!(e && (e.nodeType === li || e.nodeType === ma || e.nodeType === go || e.nodeType === Gn && e.nodeValue === " react-mount-point-unstable "));
    }
    function Ow(e) {
      e.nodeType === li && e.tagName && e.tagName.toUpperCase() === "BODY" && h("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Yp(e) && (e._reactRootContainer ? h("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : h("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var lA = d.ReactCurrentOwner, Aw;
    Aw = function(e) {
      if (e._reactRootContainer && e.nodeType !== Gn) {
        var t = fw(e._reactRootContainer.current);
        t && t.parentNode !== e && h("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var i = !!e._reactRootContainer, l = mE(e), u = !!(l && es(l));
      u && !i && h("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === li && e.tagName && e.tagName.toUpperCase() === "BODY" && h("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function mE(e) {
      return e ? e.nodeType === ma ? e.documentElement : e.firstChild : null;
    }
    function Lw() {
    }
    function oA(e, t, i, l, u) {
      if (u) {
        if (typeof l == "function") {
          var c = l;
          l = function() {
            var P = Dy(v);
            c.call(P);
          };
        }
        var v = sw(
          t,
          l,
          e,
          ns,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Lw
        );
        e._reactRootContainer = v, gm(v.current, e);
        var E = e.nodeType === Gn ? e.parentNode : e;
        return Mp(E), Xo(), v;
      } else {
        for (var x; x = e.lastChild; )
          e.removeChild(x);
        if (typeof l == "function") {
          var _ = l;
          l = function() {
            var P = Dy(O);
            _.call(P);
          };
        }
        var O = uw(
          e,
          ns,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Lw
        );
        e._reactRootContainer = O, gm(O.current, e);
        var I = e.nodeType === Gn ? e.parentNode : e;
        return Mp(I), Xo(function() {
          kh(t, O, i, l);
        }), O;
      }
    }
    function uA(e, t) {
      e !== null && typeof e != "function" && h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Ly(e, t, i, l, u) {
      Aw(i), uA(u === void 0 ? null : u, "render");
      var c = i._reactRootContainer, v;
      if (!c)
        v = oA(i, t, e, u, l);
      else {
        if (v = c, typeof u == "function") {
          var E = u;
          u = function() {
            var x = Dy(v);
            E.call(x);
          };
        }
        kh(t, v, e, u);
      }
      return Dy(v);
    }
    var Nw = !1;
    function sA(e) {
      {
        Nw || (Nw = !0, h("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = lA.current;
        if (t !== null && t.stateNode !== null) {
          var i = t.stateNode._warnedAboutRefsInRender;
          i || h("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ut(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === li ? e : QO(e, "findDOMNode");
    }
    function cA(e, t, i) {
      if (h("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Dh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Yp(t) && t._reactRootContainer === void 0;
        l && h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Ly(null, e, t, !0, i);
    }
    function fA(e, t, i) {
      if (h("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Dh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Yp(t) && t._reactRootContainer === void 0;
        l && h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Ly(null, e, t, !1, i);
    }
    function dA(e, t, i, l) {
      if (h("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Dh(i))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Us(e))
        throw new Error("parentComponent must be a valid React Component");
      return Ly(e, t, i, !1, l);
    }
    var Mw = !1;
    function pA(e) {
      if (Mw || (Mw = !0, h("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Dh(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Yp(e) && e._reactRootContainer === void 0;
        t && h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var i = mE(e), l = i && !es(i);
          l && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Xo(function() {
          Ly(null, null, e, !1, function() {
            e._reactRootContainer = null, D1(e);
          });
        }), !0;
      } else {
        {
          var u = mE(e), c = !!(u && es(u)), v = e.nodeType === li && Dh(e.parentNode) && !!e.parentNode._reactRootContainer;
          c && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Pu(GO), vg(qO), Rf(KO), Pv(Ji), Hv(jr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), mv(vb), Hc(QS, aO, Xo);
    function hA(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ay(t))
        throw new Error("Target container is not a DOM element.");
      return WO(e, t, null, i);
    }
    function vA(e, t, i, l) {
      return dA(e, t, i, l);
    }
    var yE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [es, Gf, Sm, Pc, Ns, QS]
    };
    function mA(e, t) {
      return yE.usingClientEntryPoint || h('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), rA(e, t);
    }
    function yA(e, t, i) {
      return yE.usingClientEntryPoint || h('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), aA(e, t, i);
    }
    function gA(e) {
      return Hx() && h("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Xo(e);
    }
    var SA = nA({
      findFiberByHostInstance: sc,
      bundleType: 1,
      version: cE,
      rendererPackageName: "react-dom"
    });
    if (!SA && vn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Fw = window.location.protocol;
      /^(https?|file):$/.test(Fw) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Fw === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    sa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yE, sa.createPortal = hA, sa.createRoot = mA, sa.findDOMNode = sA, sa.flushSync = gA, sa.hydrate = cA, sa.hydrateRoot = yA, sa.render = fA, sa.unmountComponentAtNode = pA, sa.unstable_batchedUpdates = QS, sa.unstable_renderSubtreeIntoContainer = vA, sa.version = cE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), sa;
}
function wT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (fo.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wT);
    } catch (a) {
      console.error(a);
    }
  }
}
fo.env.NODE_ENV === "production" ? (wT(), LE.exports = LA()) : LE.exports = NA();
var MA = LE.exports, NE, My = MA;
if (fo.env.NODE_ENV === "production")
  NE = My.createRoot, My.hydrateRoot;
else {
  var Yw = My.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  NE = function(a, f) {
    Yw.usingClientEntryPoint = !0;
    try {
      return My.createRoot(a, f);
    } finally {
      Yw.usingClientEntryPoint = !1;
    }
  };
}
const FA = globalThis || void 0 || self;
function TT(a, f) {
  return function() {
    return a.apply(f, arguments);
  };
}
const { toString: UA } = Object.prototype, { getPrototypeOf: $E } = Object, Vy = /* @__PURE__ */ ((a) => (f) => {
  const d = UA.call(f);
  return a[d] || (a[d] = d.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), po = (a) => (a = a.toLowerCase(), (f) => Vy(f) === a), $y = (a) => (f) => typeof f === a, { isArray: _d } = Array, Uh = $y("undefined");
function zA(a) {
  return a !== null && !Uh(a) && a.constructor !== null && !Uh(a.constructor) && $a(a.constructor.isBuffer) && a.constructor.isBuffer(a);
}
const RT = po("ArrayBuffer");
function BA(a) {
  let f;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? f = ArrayBuffer.isView(a) : f = a && a.buffer && RT(a.buffer), f;
}
const jA = $y("string"), $a = $y("function"), bT = $y("number"), Yy = (a) => a !== null && typeof a == "object", PA = (a) => a === !0 || a === !1, Uy = (a) => {
  if (Vy(a) !== "object")
    return !1;
  const f = $E(a);
  return (f === null || f === Object.prototype || Object.getPrototypeOf(f) === null) && !(Symbol.toStringTag in a) && !(Symbol.iterator in a);
}, HA = po("Date"), IA = po("File"), VA = po("Blob"), $A = po("FileList"), YA = (a) => Yy(a) && $a(a.pipe), WA = (a) => {
  let f;
  return a && (typeof FormData == "function" && a instanceof FormData || $a(a.append) && ((f = Vy(a)) === "formdata" || // detect form-data instance
  f === "object" && $a(a.toString) && a.toString() === "[object FormData]"));
}, QA = po("URLSearchParams"), GA = (a) => a.trim ? a.trim() : a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Hh(a, f, { allOwnKeys: d = !1 } = {}) {
  if (a === null || typeof a > "u")
    return;
  let S, C;
  if (typeof a != "object" && (a = [a]), _d(a))
    for (S = 0, C = a.length; S < C; S++)
      f.call(null, a[S], S, a);
  else {
    const w = d ? Object.getOwnPropertyNames(a) : Object.keys(a), h = w.length;
    let A;
    for (S = 0; S < h; S++)
      A = w[S], f.call(null, a[A], A, a);
  }
}
function _T(a, f) {
  f = f.toLowerCase();
  const d = Object.keys(a);
  let S = d.length, C;
  for (; S-- > 0; )
    if (C = d[S], f === C.toLowerCase())
      return C;
  return null;
}
const kT = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : FA, DT = (a) => !Uh(a) && a !== kT;
function ME() {
  const { caseless: a } = DT(this) && this || {}, f = {}, d = (S, C) => {
    const w = a && _T(f, C) || C;
    Uy(f[w]) && Uy(S) ? f[w] = ME(f[w], S) : Uy(S) ? f[w] = ME({}, S) : _d(S) ? f[w] = S.slice() : f[w] = S;
  };
  for (let S = 0, C = arguments.length; S < C; S++)
    arguments[S] && Hh(arguments[S], d);
  return f;
}
const qA = (a, f, d, { allOwnKeys: S } = {}) => (Hh(f, (C, w) => {
  d && $a(C) ? a[w] = TT(C, d) : a[w] = C;
}, { allOwnKeys: S }), a), KA = (a) => (a.charCodeAt(0) === 65279 && (a = a.slice(1)), a), XA = (a, f, d, S) => {
  a.prototype = Object.create(f.prototype, S), a.prototype.constructor = a, Object.defineProperty(a, "super", {
    value: f.prototype
  }), d && Object.assign(a.prototype, d);
}, JA = (a, f, d, S) => {
  let C, w, h;
  const A = {};
  if (f = f || {}, a == null)
    return f;
  do {
    for (C = Object.getOwnPropertyNames(a), w = C.length; w-- > 0; )
      h = C[w], (!S || S(h, a, f)) && !A[h] && (f[h] = a[h], A[h] = !0);
    a = d !== !1 && $E(a);
  } while (a && (!d || d(a, f)) && a !== Object.prototype);
  return f;
}, ZA = (a, f, d) => {
  a = String(a), (d === void 0 || d > a.length) && (d = a.length), d -= f.length;
  const S = a.indexOf(f, d);
  return S !== -1 && S === d;
}, e2 = (a) => {
  if (!a)
    return null;
  if (_d(a))
    return a;
  let f = a.length;
  if (!bT(f))
    return null;
  const d = new Array(f);
  for (; f-- > 0; )
    d[f] = a[f];
  return d;
}, t2 = /* @__PURE__ */ ((a) => (f) => a && f instanceof a)(typeof Uint8Array < "u" && $E(Uint8Array)), n2 = (a, f) => {
  const S = (a && a[Symbol.iterator]).call(a);
  let C;
  for (; (C = S.next()) && !C.done; ) {
    const w = C.value;
    f.call(a, w[0], w[1]);
  }
}, r2 = (a, f) => {
  let d;
  const S = [];
  for (; (d = a.exec(f)) !== null; )
    S.push(d);
  return S;
}, i2 = po("HTMLFormElement"), a2 = (a) => a.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(d, S, C) {
    return S.toUpperCase() + C;
  }
), Ww = (({ hasOwnProperty: a }) => (f, d) => a.call(f, d))(Object.prototype), l2 = po("RegExp"), OT = (a, f) => {
  const d = Object.getOwnPropertyDescriptors(a), S = {};
  Hh(d, (C, w) => {
    let h;
    (h = f(C, w, a)) !== !1 && (S[w] = h || C);
  }), Object.defineProperties(a, S);
}, o2 = (a) => {
  OT(a, (f, d) => {
    if ($a(a) && ["arguments", "caller", "callee"].indexOf(d) !== -1)
      return !1;
    const S = a[d];
    if ($a(S)) {
      if (f.enumerable = !1, "writable" in f) {
        f.writable = !1;
        return;
      }
      f.set || (f.set = () => {
        throw Error("Can not rewrite read-only method '" + d + "'");
      });
    }
  });
}, u2 = (a, f) => {
  const d = {}, S = (C) => {
    C.forEach((w) => {
      d[w] = !0;
    });
  };
  return _d(a) ? S(a) : S(String(a).split(f)), d;
}, s2 = () => {
}, c2 = (a, f) => (a = +a, Number.isFinite(a) ? a : f), EE = "abcdefghijklmnopqrstuvwxyz", Qw = "0123456789", AT = {
  DIGIT: Qw,
  ALPHA: EE,
  ALPHA_DIGIT: EE + EE.toUpperCase() + Qw
}, f2 = (a = 16, f = AT.ALPHA_DIGIT) => {
  let d = "";
  const { length: S } = f;
  for (; a--; )
    d += f[Math.random() * S | 0];
  return d;
};
function d2(a) {
  return !!(a && $a(a.append) && a[Symbol.toStringTag] === "FormData" && a[Symbol.iterator]);
}
const p2 = (a) => {
  const f = new Array(10), d = (S, C) => {
    if (Yy(S)) {
      if (f.indexOf(S) >= 0)
        return;
      if (!("toJSON" in S)) {
        f[C] = S;
        const w = _d(S) ? [] : {};
        return Hh(S, (h, A) => {
          const L = d(h, C + 1);
          !Uh(L) && (w[A] = L);
        }), f[C] = void 0, w;
      }
    }
    return S;
  };
  return d(a, 0);
}, h2 = po("AsyncFunction"), v2 = (a) => a && (Yy(a) || $a(a)) && $a(a.then) && $a(a.catch), se = {
  isArray: _d,
  isArrayBuffer: RT,
  isBuffer: zA,
  isFormData: WA,
  isArrayBufferView: BA,
  isString: jA,
  isNumber: bT,
  isBoolean: PA,
  isObject: Yy,
  isPlainObject: Uy,
  isUndefined: Uh,
  isDate: HA,
  isFile: IA,
  isBlob: VA,
  isRegExp: l2,
  isFunction: $a,
  isStream: YA,
  isURLSearchParams: QA,
  isTypedArray: t2,
  isFileList: $A,
  forEach: Hh,
  merge: ME,
  extend: qA,
  trim: GA,
  stripBOM: KA,
  inherits: XA,
  toFlatObject: JA,
  kindOf: Vy,
  kindOfTest: po,
  endsWith: ZA,
  toArray: e2,
  forEachEntry: n2,
  matchAll: r2,
  isHTMLForm: i2,
  hasOwnProperty: Ww,
  hasOwnProp: Ww,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: OT,
  freezeMethods: o2,
  toObjectSet: u2,
  toCamelCase: a2,
  noop: s2,
  toFiniteNumber: c2,
  findKey: _T,
  global: kT,
  isContextDefined: DT,
  ALPHABET: AT,
  generateString: f2,
  isSpecCompliantForm: d2,
  toJSONObject: p2,
  isAsyncFn: h2,
  isThenable: v2
};
var LT = {}, Wy = {};
Wy.byteLength = g2;
Wy.toByteArray = E2;
Wy.fromByteArray = w2;
var uo = [], Va = [], m2 = typeof Uint8Array < "u" ? Uint8Array : Array, CE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Sd = 0, y2 = CE.length; Sd < y2; ++Sd)
  uo[Sd] = CE[Sd], Va[CE.charCodeAt(Sd)] = Sd;
Va[45] = 62;
Va[95] = 63;
function NT(a) {
  var f = a.length;
  if (f % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var d = a.indexOf("=");
  d === -1 && (d = f);
  var S = d === f ? 0 : 4 - d % 4;
  return [d, S];
}
function g2(a) {
  var f = NT(a), d = f[0], S = f[1];
  return (d + S) * 3 / 4 - S;
}
function S2(a, f, d) {
  return (f + d) * 3 / 4 - d;
}
function E2(a) {
  var f, d = NT(a), S = d[0], C = d[1], w = new m2(S2(a, S, C)), h = 0, A = C > 0 ? S - 4 : S, L;
  for (L = 0; L < A; L += 4)
    f = Va[a.charCodeAt(L)] << 18 | Va[a.charCodeAt(L + 1)] << 12 | Va[a.charCodeAt(L + 2)] << 6 | Va[a.charCodeAt(L + 3)], w[h++] = f >> 16 & 255, w[h++] = f >> 8 & 255, w[h++] = f & 255;
  return C === 2 && (f = Va[a.charCodeAt(L)] << 2 | Va[a.charCodeAt(L + 1)] >> 4, w[h++] = f & 255), C === 1 && (f = Va[a.charCodeAt(L)] << 10 | Va[a.charCodeAt(L + 1)] << 4 | Va[a.charCodeAt(L + 2)] >> 2, w[h++] = f >> 8 & 255, w[h++] = f & 255), w;
}
function C2(a) {
  return uo[a >> 18 & 63] + uo[a >> 12 & 63] + uo[a >> 6 & 63] + uo[a & 63];
}
function x2(a, f, d) {
  for (var S, C = [], w = f; w < d; w += 3)
    S = (a[w] << 16 & 16711680) + (a[w + 1] << 8 & 65280) + (a[w + 2] & 255), C.push(C2(S));
  return C.join("");
}
function w2(a) {
  for (var f, d = a.length, S = d % 3, C = [], w = 16383, h = 0, A = d - S; h < A; h += w)
    C.push(x2(a, h, h + w > A ? A : h + w));
  return S === 1 ? (f = a[d - 1], C.push(
    uo[f >> 2] + uo[f << 4 & 63] + "=="
  )) : S === 2 && (f = (a[d - 2] << 8) + a[d - 1], C.push(
    uo[f >> 10] + uo[f >> 4 & 63] + uo[f << 2 & 63] + "="
  )), C.join("");
}
var YE = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
YE.read = function(a, f, d, S, C) {
  var w, h, A = C * 8 - S - 1, L = (1 << A) - 1, B = L >> 1, D = -7, N = d ? C - 1 : 0, J = d ? -1 : 1, K = a[f + N];
  for (N += J, w = K & (1 << -D) - 1, K >>= -D, D += A; D > 0; w = w * 256 + a[f + N], N += J, D -= 8)
    ;
  for (h = w & (1 << -D) - 1, w >>= -D, D += S; D > 0; h = h * 256 + a[f + N], N += J, D -= 8)
    ;
  if (w === 0)
    w = 1 - B;
  else {
    if (w === L)
      return h ? NaN : (K ? -1 : 1) * (1 / 0);
    h = h + Math.pow(2, S), w = w - B;
  }
  return (K ? -1 : 1) * h * Math.pow(2, w - S);
};
YE.write = function(a, f, d, S, C, w) {
  var h, A, L, B = w * 8 - C - 1, D = (1 << B) - 1, N = D >> 1, J = C === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, K = S ? 0 : w - 1, te = S ? 1 : -1, ue = f < 0 || f === 0 && 1 / f < 0 ? 1 : 0;
  for (f = Math.abs(f), isNaN(f) || f === 1 / 0 ? (A = isNaN(f) ? 1 : 0, h = D) : (h = Math.floor(Math.log(f) / Math.LN2), f * (L = Math.pow(2, -h)) < 1 && (h--, L *= 2), h + N >= 1 ? f += J / L : f += J * Math.pow(2, 1 - N), f * L >= 2 && (h++, L /= 2), h + N >= D ? (A = 0, h = D) : h + N >= 1 ? (A = (f * L - 1) * Math.pow(2, C), h = h + N) : (A = f * Math.pow(2, N - 1) * Math.pow(2, C), h = 0)); C >= 8; a[d + K] = A & 255, K += te, A /= 256, C -= 8)
    ;
  for (h = h << C | A, B += C; B > 0; a[d + K] = h & 255, K += te, h /= 256, B -= 8)
    ;
  a[d + K - te] |= ue * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(a) {
  const f = Wy, d = YE, S = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  a.Buffer = D, a.SlowBuffer = Ye, a.INSPECT_MAX_BYTES = 50;
  const C = 2147483647;
  a.kMaxLength = C;
  const { Uint8Array: w, ArrayBuffer: h, SharedArrayBuffer: A } = globalThis;
  D.TYPED_ARRAY_SUPPORT = L(), !D.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function L() {
    try {
      const b = new w(1), m = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(m, w.prototype), Object.setPrototypeOf(b, m), b.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(D.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (D.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(D.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (D.isBuffer(this))
        return this.byteOffset;
    }
  });
  function B(b) {
    if (b > C)
      throw new RangeError('The value "' + b + '" is invalid for option "size"');
    const m = new w(b);
    return Object.setPrototypeOf(m, D.prototype), m;
  }
  function D(b, m, g) {
    if (typeof b == "number") {
      if (typeof m == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return te(b);
    }
    return N(b, m, g);
  }
  D.poolSize = 8192;
  function N(b, m, g) {
    if (typeof b == "string")
      return ue(b, m);
    if (h.isView(b))
      return nt(b);
    if (b == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof b
      );
    if (ln(b, h) || b && ln(b.buffer, h) || typeof A < "u" && (ln(b, A) || b && ln(b.buffer, A)))
      return Ee(b, m, g);
    if (typeof b == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const k = b.valueOf && b.valueOf();
    if (k != null && k !== b)
      return D.from(k, m, g);
    const z = Ge(b);
    if (z)
      return z;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof b[Symbol.toPrimitive] == "function")
      return D.from(b[Symbol.toPrimitive]("string"), m, g);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof b
    );
  }
  D.from = function(b, m, g) {
    return N(b, m, g);
  }, Object.setPrototypeOf(D.prototype, w.prototype), Object.setPrototypeOf(D, w);
  function J(b) {
    if (typeof b != "number")
      throw new TypeError('"size" argument must be of type number');
    if (b < 0)
      throw new RangeError('The value "' + b + '" is invalid for option "size"');
  }
  function K(b, m, g) {
    return J(b), b <= 0 ? B(b) : m !== void 0 ? typeof g == "string" ? B(b).fill(m, g) : B(b).fill(m) : B(b);
  }
  D.alloc = function(b, m, g) {
    return K(b, m, g);
  };
  function te(b) {
    return J(b), B(b < 0 ? 0 : St(b) | 0);
  }
  D.allocUnsafe = function(b) {
    return te(b);
  }, D.allocUnsafeSlow = function(b) {
    return te(b);
  };
  function ue(b, m) {
    if ((typeof m != "string" || m === "") && (m = "utf8"), !D.isEncoding(m))
      throw new TypeError("Unknown encoding: " + m);
    const g = wt(b, m) | 0;
    let k = B(g);
    const z = k.write(b, m);
    return z !== g && (k = k.slice(0, z)), k;
  }
  function Ce(b) {
    const m = b.length < 0 ? 0 : St(b.length) | 0, g = B(m);
    for (let k = 0; k < m; k += 1)
      g[k] = b[k] & 255;
    return g;
  }
  function nt(b) {
    if (ln(b, w)) {
      const m = new w(b);
      return Ee(m.buffer, m.byteOffset, m.byteLength);
    }
    return Ce(b);
  }
  function Ee(b, m, g) {
    if (m < 0 || b.byteLength < m)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (b.byteLength < m + (g || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let k;
    return m === void 0 && g === void 0 ? k = new w(b) : g === void 0 ? k = new w(b, m) : k = new w(b, m, g), Object.setPrototypeOf(k, D.prototype), k;
  }
  function Ge(b) {
    if (D.isBuffer(b)) {
      const m = St(b.length) | 0, g = B(m);
      return g.length === 0 || b.copy(g, 0, 0, m), g;
    }
    if (b.length !== void 0)
      return typeof b.length != "number" || cr(b.length) ? B(0) : Ce(b);
    if (b.type === "Buffer" && Array.isArray(b.data))
      return Ce(b.data);
  }
  function St(b) {
    if (b >= C)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + C.toString(16) + " bytes");
    return b | 0;
  }
  function Ye(b) {
    return +b != b && (b = 0), D.alloc(+b);
  }
  D.isBuffer = function(m) {
    return m != null && m._isBuffer === !0 && m !== D.prototype;
  }, D.compare = function(m, g) {
    if (ln(m, w) && (m = D.from(m, m.offset, m.byteLength)), ln(g, w) && (g = D.from(g, g.offset, g.byteLength)), !D.isBuffer(m) || !D.isBuffer(g))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (m === g)
      return 0;
    let k = m.length, z = g.length;
    for (let $ = 0, ne = Math.min(k, z); $ < ne; ++$)
      if (m[$] !== g[$]) {
        k = m[$], z = g[$];
        break;
      }
    return k < z ? -1 : z < k ? 1 : 0;
  }, D.isEncoding = function(m) {
    switch (String(m).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, D.concat = function(m, g) {
    if (!Array.isArray(m))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (m.length === 0)
      return D.alloc(0);
    let k;
    if (g === void 0)
      for (g = 0, k = 0; k < m.length; ++k)
        g += m[k].length;
    const z = D.allocUnsafe(g);
    let $ = 0;
    for (k = 0; k < m.length; ++k) {
      let ne = m[k];
      if (ln(ne, w))
        $ + ne.length > z.length ? (D.isBuffer(ne) || (ne = D.from(ne)), ne.copy(z, $)) : w.prototype.set.call(
          z,
          ne,
          $
        );
      else if (D.isBuffer(ne))
        ne.copy(z, $);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      $ += ne.length;
    }
    return z;
  };
  function wt(b, m) {
    if (D.isBuffer(b))
      return b.length;
    if (h.isView(b) || ln(b, h))
      return b.byteLength;
    if (typeof b != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof b
      );
    const g = b.length, k = arguments.length > 2 && arguments[2] === !0;
    if (!k && g === 0)
      return 0;
    let z = !1;
    for (; ; )
      switch (m) {
        case "ascii":
        case "latin1":
        case "binary":
          return g;
        case "utf8":
        case "utf-8":
          return Un(b).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return g * 2;
        case "hex":
          return g >>> 1;
        case "base64":
          return Jn(b).length;
        default:
          if (z)
            return k ? -1 : Un(b).length;
          m = ("" + m).toLowerCase(), z = !0;
      }
  }
  D.byteLength = wt;
  function ot(b, m, g) {
    let k = !1;
    if ((m === void 0 || m < 0) && (m = 0), m > this.length || ((g === void 0 || g > this.length) && (g = this.length), g <= 0) || (g >>>= 0, m >>>= 0, g <= m))
      return "";
    for (b || (b = "utf8"); ; )
      switch (b) {
        case "hex":
          return le(this, m, g);
        case "utf8":
        case "utf-8":
          return Le(this, m, g);
        case "ascii":
          return xe(this, m, g);
        case "latin1":
        case "binary":
          return V(this, m, g);
        case "base64":
          return Mt(this, m, g);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Je(this, m, g);
        default:
          if (k)
            throw new TypeError("Unknown encoding: " + b);
          b = (b + "").toLowerCase(), k = !0;
      }
  }
  D.prototype._isBuffer = !0;
  function Vt(b, m, g) {
    const k = b[m];
    b[m] = b[g], b[g] = k;
  }
  D.prototype.swap16 = function() {
    const m = this.length;
    if (m % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let g = 0; g < m; g += 2)
      Vt(this, g, g + 1);
    return this;
  }, D.prototype.swap32 = function() {
    const m = this.length;
    if (m % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let g = 0; g < m; g += 4)
      Vt(this, g, g + 3), Vt(this, g + 1, g + 2);
    return this;
  }, D.prototype.swap64 = function() {
    const m = this.length;
    if (m % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let g = 0; g < m; g += 8)
      Vt(this, g, g + 7), Vt(this, g + 1, g + 6), Vt(this, g + 2, g + 5), Vt(this, g + 3, g + 4);
    return this;
  }, D.prototype.toString = function() {
    const m = this.length;
    return m === 0 ? "" : arguments.length === 0 ? Le(this, 0, m) : ot.apply(this, arguments);
  }, D.prototype.toLocaleString = D.prototype.toString, D.prototype.equals = function(m) {
    if (!D.isBuffer(m))
      throw new TypeError("Argument must be a Buffer");
    return this === m ? !0 : D.compare(this, m) === 0;
  }, D.prototype.inspect = function() {
    let m = "";
    const g = a.INSPECT_MAX_BYTES;
    return m = this.toString("hex", 0, g).replace(/(.{2})/g, "$1 ").trim(), this.length > g && (m += " ... "), "<Buffer " + m + ">";
  }, S && (D.prototype[S] = D.prototype.inspect), D.prototype.compare = function(m, g, k, z, $) {
    if (ln(m, w) && (m = D.from(m, m.offset, m.byteLength)), !D.isBuffer(m))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof m
      );
    if (g === void 0 && (g = 0), k === void 0 && (k = m ? m.length : 0), z === void 0 && (z = 0), $ === void 0 && ($ = this.length), g < 0 || k > m.length || z < 0 || $ > this.length)
      throw new RangeError("out of range index");
    if (z >= $ && g >= k)
      return 0;
    if (z >= $)
      return -1;
    if (g >= k)
      return 1;
    if (g >>>= 0, k >>>= 0, z >>>= 0, $ >>>= 0, this === m)
      return 0;
    let ne = $ - z, Be = k - g;
    const _t = Math.min(ne, Be), Ze = this.slice(z, $), Ot = m.slice(g, k);
    for (let We = 0; We < _t; ++We)
      if (Ze[We] !== Ot[We]) {
        ne = Ze[We], Be = Ot[We];
        break;
      }
    return ne < Be ? -1 : Be < ne ? 1 : 0;
  };
  function Tn(b, m, g, k, z) {
    if (b.length === 0)
      return -1;
    if (typeof g == "string" ? (k = g, g = 0) : g > 2147483647 ? g = 2147483647 : g < -2147483648 && (g = -2147483648), g = +g, cr(g) && (g = z ? 0 : b.length - 1), g < 0 && (g = b.length + g), g >= b.length) {
      if (z)
        return -1;
      g = b.length - 1;
    } else if (g < 0)
      if (z)
        g = 0;
      else
        return -1;
    if (typeof m == "string" && (m = D.from(m, k)), D.isBuffer(m))
      return m.length === 0 ? -1 : Xt(b, m, g, k, z);
    if (typeof m == "number")
      return m = m & 255, typeof w.prototype.indexOf == "function" ? z ? w.prototype.indexOf.call(b, m, g) : w.prototype.lastIndexOf.call(b, m, g) : Xt(b, [m], g, k, z);
    throw new TypeError("val must be string, number or Buffer");
  }
  function Xt(b, m, g, k, z) {
    let $ = 1, ne = b.length, Be = m.length;
    if (k !== void 0 && (k = String(k).toLowerCase(), k === "ucs2" || k === "ucs-2" || k === "utf16le" || k === "utf-16le")) {
      if (b.length < 2 || m.length < 2)
        return -1;
      $ = 2, ne /= 2, Be /= 2, g /= 2;
    }
    function _t(Ot, We) {
      return $ === 1 ? Ot[We] : Ot.readUInt16BE(We * $);
    }
    let Ze;
    if (z) {
      let Ot = -1;
      for (Ze = g; Ze < ne; Ze++)
        if (_t(b, Ze) === _t(m, Ot === -1 ? 0 : Ze - Ot)) {
          if (Ot === -1 && (Ot = Ze), Ze - Ot + 1 === Be)
            return Ot * $;
        } else
          Ot !== -1 && (Ze -= Ze - Ot), Ot = -1;
    } else
      for (g + Be > ne && (g = ne - Be), Ze = g; Ze >= 0; Ze--) {
        let Ot = !0;
        for (let We = 0; We < Be; We++)
          if (_t(b, Ze + We) !== _t(m, We)) {
            Ot = !1;
            break;
          }
        if (Ot)
          return Ze;
      }
    return -1;
  }
  D.prototype.includes = function(m, g, k) {
    return this.indexOf(m, g, k) !== -1;
  }, D.prototype.indexOf = function(m, g, k) {
    return Tn(this, m, g, k, !0);
  }, D.prototype.lastIndexOf = function(m, g, k) {
    return Tn(this, m, g, k, !1);
  };
  function Ht(b, m, g, k) {
    g = Number(g) || 0;
    const z = b.length - g;
    k ? (k = Number(k), k > z && (k = z)) : k = z;
    const $ = m.length;
    k > $ / 2 && (k = $ / 2);
    let ne;
    for (ne = 0; ne < k; ++ne) {
      const Be = parseInt(m.substr(ne * 2, 2), 16);
      if (cr(Be))
        return ne;
      b[g + ne] = Be;
    }
    return ne;
  }
  function Rn(b, m, g, k) {
    return sr(Un(m, b.length - g), b, g, k);
  }
  function Xe(b, m, g, k) {
    return sr(ur(m), b, g, k);
  }
  function ht(b, m, g, k) {
    return sr(Jn(m), b, g, k);
  }
  function $t(b, m, g, k) {
    return sr(Mr(m, b.length - g), b, g, k);
  }
  D.prototype.write = function(m, g, k, z) {
    if (g === void 0)
      z = "utf8", k = this.length, g = 0;
    else if (k === void 0 && typeof g == "string")
      z = g, k = this.length, g = 0;
    else if (isFinite(g))
      g = g >>> 0, isFinite(k) ? (k = k >>> 0, z === void 0 && (z = "utf8")) : (z = k, k = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const $ = this.length - g;
    if ((k === void 0 || k > $) && (k = $), m.length > 0 && (k < 0 || g < 0) || g > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    z || (z = "utf8");
    let ne = !1;
    for (; ; )
      switch (z) {
        case "hex":
          return Ht(this, m, g, k);
        case "utf8":
        case "utf-8":
          return Rn(this, m, g, k);
        case "ascii":
        case "latin1":
        case "binary":
          return Xe(this, m, g, k);
        case "base64":
          return ht(this, m, g, k);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return $t(this, m, g, k);
        default:
          if (ne)
            throw new TypeError("Unknown encoding: " + z);
          z = ("" + z).toLowerCase(), ne = !0;
      }
  }, D.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function Mt(b, m, g) {
    return m === 0 && g === b.length ? f.fromByteArray(b) : f.fromByteArray(b.slice(m, g));
  }
  function Le(b, m, g) {
    g = Math.min(b.length, g);
    const k = [];
    let z = m;
    for (; z < g; ) {
      const $ = b[z];
      let ne = null, Be = $ > 239 ? 4 : $ > 223 ? 3 : $ > 191 ? 2 : 1;
      if (z + Be <= g) {
        let _t, Ze, Ot, We;
        switch (Be) {
          case 1:
            $ < 128 && (ne = $);
            break;
          case 2:
            _t = b[z + 1], (_t & 192) === 128 && (We = ($ & 31) << 6 | _t & 63, We > 127 && (ne = We));
            break;
          case 3:
            _t = b[z + 1], Ze = b[z + 2], (_t & 192) === 128 && (Ze & 192) === 128 && (We = ($ & 15) << 12 | (_t & 63) << 6 | Ze & 63, We > 2047 && (We < 55296 || We > 57343) && (ne = We));
            break;
          case 4:
            _t = b[z + 1], Ze = b[z + 2], Ot = b[z + 3], (_t & 192) === 128 && (Ze & 192) === 128 && (Ot & 192) === 128 && (We = ($ & 15) << 18 | (_t & 63) << 12 | (Ze & 63) << 6 | Ot & 63, We > 65535 && We < 1114112 && (ne = We));
        }
      }
      ne === null ? (ne = 65533, Be = 1) : ne > 65535 && (ne -= 65536, k.push(ne >>> 10 & 1023 | 55296), ne = 56320 | ne & 1023), k.push(ne), z += Be;
    }
    return je(k);
  }
  const ye = 4096;
  function je(b) {
    const m = b.length;
    if (m <= ye)
      return String.fromCharCode.apply(String, b);
    let g = "", k = 0;
    for (; k < m; )
      g += String.fromCharCode.apply(
        String,
        b.slice(k, k += ye)
      );
    return g;
  }
  function xe(b, m, g) {
    let k = "";
    g = Math.min(b.length, g);
    for (let z = m; z < g; ++z)
      k += String.fromCharCode(b[z] & 127);
    return k;
  }
  function V(b, m, g) {
    let k = "";
    g = Math.min(b.length, g);
    for (let z = m; z < g; ++z)
      k += String.fromCharCode(b[z]);
    return k;
  }
  function le(b, m, g) {
    const k = b.length;
    (!m || m < 0) && (m = 0), (!g || g < 0 || g > k) && (g = k);
    let z = "";
    for (let $ = m; $ < g; ++$)
      z += gn[b[$]];
    return z;
  }
  function Je(b, m, g) {
    const k = b.slice(m, g);
    let z = "";
    for (let $ = 0; $ < k.length - 1; $ += 2)
      z += String.fromCharCode(k[$] + k[$ + 1] * 256);
    return z;
  }
  D.prototype.slice = function(m, g) {
    const k = this.length;
    m = ~~m, g = g === void 0 ? k : ~~g, m < 0 ? (m += k, m < 0 && (m = 0)) : m > k && (m = k), g < 0 ? (g += k, g < 0 && (g = 0)) : g > k && (g = k), g < m && (g = m);
    const z = this.subarray(m, g);
    return Object.setPrototypeOf(z, D.prototype), z;
  };
  function Ae(b, m, g) {
    if (b % 1 !== 0 || b < 0)
      throw new RangeError("offset is not uint");
    if (b + m > g)
      throw new RangeError("Trying to access beyond buffer length");
  }
  D.prototype.readUintLE = D.prototype.readUIntLE = function(m, g, k) {
    m = m >>> 0, g = g >>> 0, k || Ae(m, g, this.length);
    let z = this[m], $ = 1, ne = 0;
    for (; ++ne < g && ($ *= 256); )
      z += this[m + ne] * $;
    return z;
  }, D.prototype.readUintBE = D.prototype.readUIntBE = function(m, g, k) {
    m = m >>> 0, g = g >>> 0, k || Ae(m, g, this.length);
    let z = this[m + --g], $ = 1;
    for (; g > 0 && ($ *= 256); )
      z += this[m + --g] * $;
    return z;
  }, D.prototype.readUint8 = D.prototype.readUInt8 = function(m, g) {
    return m = m >>> 0, g || Ae(m, 1, this.length), this[m];
  }, D.prototype.readUint16LE = D.prototype.readUInt16LE = function(m, g) {
    return m = m >>> 0, g || Ae(m, 2, this.length), this[m] | this[m + 1] << 8;
  }, D.prototype.readUint16BE = D.prototype.readUInt16BE = function(m, g) {
    return m = m >>> 0, g || Ae(m, 2, this.length), this[m] << 8 | this[m + 1];
  }, D.prototype.readUint32LE = D.prototype.readUInt32LE = function(m, g) {
    return m = m >>> 0, g || Ae(m, 4, this.length), (this[m] | this[m + 1] << 8 | this[m + 2] << 16) + this[m + 3] * 16777216;
  }, D.prototype.readUint32BE = D.prototype.readUInt32BE = function(m, g) {
    return m = m >>> 0, g || Ae(m, 4, this.length), this[m] * 16777216 + (this[m + 1] << 16 | this[m + 2] << 8 | this[m + 3]);
  }, D.prototype.readBigUInt64LE = bn(function(m) {
    m = m >>> 0, sn(m, "offset");
    const g = this[m], k = this[m + 7];
    (g === void 0 || k === void 0) && cn(m, this.length - 8);
    const z = g + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + this[++m] * 2 ** 24, $ = this[++m] + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + k * 2 ** 24;
    return BigInt(z) + (BigInt($) << BigInt(32));
  }), D.prototype.readBigUInt64BE = bn(function(m) {
    m = m >>> 0, sn(m, "offset");
    const g = this[m], k = this[m + 7];
    (g === void 0 || k === void 0) && cn(m, this.length - 8);
    const z = g * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + this[++m], $ = this[++m] * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + k;
    return (BigInt(z) << BigInt(32)) + BigInt($);
  }), D.prototype.readIntLE = function(m, g, k) {
    m = m >>> 0, g = g >>> 0, k || Ae(m, g, this.length);
    let z = this[m], $ = 1, ne = 0;
    for (; ++ne < g && ($ *= 256); )
      z += this[m + ne] * $;
    return $ *= 128, z >= $ && (z -= Math.pow(2, 8 * g)), z;
  }, D.prototype.readIntBE = function(m, g, k) {
    m = m >>> 0, g = g >>> 0, k || Ae(m, g, this.length);
    let z = g, $ = 1, ne = this[m + --z];
    for (; z > 0 && ($ *= 256); )
      ne += this[m + --z] * $;
    return $ *= 128, ne >= $ && (ne -= Math.pow(2, 8 * g)), ne;
  }, D.prototype.readInt8 = function(m, g) {
    return m = m >>> 0, g || Ae(m, 1, this.length), this[m] & 128 ? (255 - this[m] + 1) * -1 : this[m];
  }, D.prototype.readInt16LE = function(m, g) {
    m = m >>> 0, g || Ae(m, 2, this.length);
    const k = this[m] | this[m + 1] << 8;
    return k & 32768 ? k | 4294901760 : k;
  }, D.prototype.readInt16BE = function(m, g) {
    m = m >>> 0, g || Ae(m, 2, this.length);
    const k = this[m + 1] | this[m] << 8;
    return k & 32768 ? k | 4294901760 : k;
  }, D.prototype.readInt32LE = function(m, g) {
    return m = m >>> 0, g || Ae(m, 4, this.length), this[m] | this[m + 1] << 8 | this[m + 2] << 16 | this[m + 3] << 24;
  }, D.prototype.readInt32BE = function(m, g) {
    return m = m >>> 0, g || Ae(m, 4, this.length), this[m] << 24 | this[m + 1] << 16 | this[m + 2] << 8 | this[m + 3];
  }, D.prototype.readBigInt64LE = bn(function(m) {
    m = m >>> 0, sn(m, "offset");
    const g = this[m], k = this[m + 7];
    (g === void 0 || k === void 0) && cn(m, this.length - 8);
    const z = this[m + 4] + this[m + 5] * 2 ** 8 + this[m + 6] * 2 ** 16 + (k << 24);
    return (BigInt(z) << BigInt(32)) + BigInt(g + this[++m] * 2 ** 8 + this[++m] * 2 ** 16 + this[++m] * 2 ** 24);
  }), D.prototype.readBigInt64BE = bn(function(m) {
    m = m >>> 0, sn(m, "offset");
    const g = this[m], k = this[m + 7];
    (g === void 0 || k === void 0) && cn(m, this.length - 8);
    const z = (g << 24) + // Overflow
    this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + this[++m];
    return (BigInt(z) << BigInt(32)) + BigInt(this[++m] * 2 ** 24 + this[++m] * 2 ** 16 + this[++m] * 2 ** 8 + k);
  }), D.prototype.readFloatLE = function(m, g) {
    return m = m >>> 0, g || Ae(m, 4, this.length), d.read(this, m, !0, 23, 4);
  }, D.prototype.readFloatBE = function(m, g) {
    return m = m >>> 0, g || Ae(m, 4, this.length), d.read(this, m, !1, 23, 4);
  }, D.prototype.readDoubleLE = function(m, g) {
    return m = m >>> 0, g || Ae(m, 8, this.length), d.read(this, m, !0, 52, 8);
  }, D.prototype.readDoubleBE = function(m, g) {
    return m = m >>> 0, g || Ae(m, 8, this.length), d.read(this, m, !1, 52, 8);
  };
  function qe(b, m, g, k, z, $) {
    if (!D.isBuffer(b))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (m > z || m < $)
      throw new RangeError('"value" argument is out of bounds');
    if (g + k > b.length)
      throw new RangeError("Index out of range");
  }
  D.prototype.writeUintLE = D.prototype.writeUIntLE = function(m, g, k, z) {
    if (m = +m, g = g >>> 0, k = k >>> 0, !z) {
      const Be = Math.pow(2, 8 * k) - 1;
      qe(this, m, g, k, Be, 0);
    }
    let $ = 1, ne = 0;
    for (this[g] = m & 255; ++ne < k && ($ *= 256); )
      this[g + ne] = m / $ & 255;
    return g + k;
  }, D.prototype.writeUintBE = D.prototype.writeUIntBE = function(m, g, k, z) {
    if (m = +m, g = g >>> 0, k = k >>> 0, !z) {
      const Be = Math.pow(2, 8 * k) - 1;
      qe(this, m, g, k, Be, 0);
    }
    let $ = k - 1, ne = 1;
    for (this[g + $] = m & 255; --$ >= 0 && (ne *= 256); )
      this[g + $] = m / ne & 255;
    return g + k;
  }, D.prototype.writeUint8 = D.prototype.writeUInt8 = function(m, g, k) {
    return m = +m, g = g >>> 0, k || qe(this, m, g, 1, 255, 0), this[g] = m & 255, g + 1;
  }, D.prototype.writeUint16LE = D.prototype.writeUInt16LE = function(m, g, k) {
    return m = +m, g = g >>> 0, k || qe(this, m, g, 2, 65535, 0), this[g] = m & 255, this[g + 1] = m >>> 8, g + 2;
  }, D.prototype.writeUint16BE = D.prototype.writeUInt16BE = function(m, g, k) {
    return m = +m, g = g >>> 0, k || qe(this, m, g, 2, 65535, 0), this[g] = m >>> 8, this[g + 1] = m & 255, g + 2;
  }, D.prototype.writeUint32LE = D.prototype.writeUInt32LE = function(m, g, k) {
    return m = +m, g = g >>> 0, k || qe(this, m, g, 4, 4294967295, 0), this[g + 3] = m >>> 24, this[g + 2] = m >>> 16, this[g + 1] = m >>> 8, this[g] = m & 255, g + 4;
  }, D.prototype.writeUint32BE = D.prototype.writeUInt32BE = function(m, g, k) {
    return m = +m, g = g >>> 0, k || qe(this, m, g, 4, 4294967295, 0), this[g] = m >>> 24, this[g + 1] = m >>> 16, this[g + 2] = m >>> 8, this[g + 3] = m & 255, g + 4;
  };
  function vt(b, m, g, k, z) {
    Fn(m, k, z, b, g, 7);
    let $ = Number(m & BigInt(4294967295));
    b[g++] = $, $ = $ >> 8, b[g++] = $, $ = $ >> 8, b[g++] = $, $ = $ >> 8, b[g++] = $;
    let ne = Number(m >> BigInt(32) & BigInt(4294967295));
    return b[g++] = ne, ne = ne >> 8, b[g++] = ne, ne = ne >> 8, b[g++] = ne, ne = ne >> 8, b[g++] = ne, g;
  }
  function bt(b, m, g, k, z) {
    Fn(m, k, z, b, g, 7);
    let $ = Number(m & BigInt(4294967295));
    b[g + 7] = $, $ = $ >> 8, b[g + 6] = $, $ = $ >> 8, b[g + 5] = $, $ = $ >> 8, b[g + 4] = $;
    let ne = Number(m >> BigInt(32) & BigInt(4294967295));
    return b[g + 3] = ne, ne = ne >> 8, b[g + 2] = ne, ne = ne >> 8, b[g + 1] = ne, ne = ne >> 8, b[g] = ne, g + 8;
  }
  D.prototype.writeBigUInt64LE = bn(function(m, g = 0) {
    return vt(this, m, g, BigInt(0), BigInt("0xffffffffffffffff"));
  }), D.prototype.writeBigUInt64BE = bn(function(m, g = 0) {
    return bt(this, m, g, BigInt(0), BigInt("0xffffffffffffffff"));
  }), D.prototype.writeIntLE = function(m, g, k, z) {
    if (m = +m, g = g >>> 0, !z) {
      const _t = Math.pow(2, 8 * k - 1);
      qe(this, m, g, k, _t - 1, -_t);
    }
    let $ = 0, ne = 1, Be = 0;
    for (this[g] = m & 255; ++$ < k && (ne *= 256); )
      m < 0 && Be === 0 && this[g + $ - 1] !== 0 && (Be = 1), this[g + $] = (m / ne >> 0) - Be & 255;
    return g + k;
  }, D.prototype.writeIntBE = function(m, g, k, z) {
    if (m = +m, g = g >>> 0, !z) {
      const _t = Math.pow(2, 8 * k - 1);
      qe(this, m, g, k, _t - 1, -_t);
    }
    let $ = k - 1, ne = 1, Be = 0;
    for (this[g + $] = m & 255; --$ >= 0 && (ne *= 256); )
      m < 0 && Be === 0 && this[g + $ + 1] !== 0 && (Be = 1), this[g + $] = (m / ne >> 0) - Be & 255;
    return g + k;
  }, D.prototype.writeInt8 = function(m, g, k) {
    return m = +m, g = g >>> 0, k || qe(this, m, g, 1, 127, -128), m < 0 && (m = 255 + m + 1), this[g] = m & 255, g + 1;
  }, D.prototype.writeInt16LE = function(m, g, k) {
    return m = +m, g = g >>> 0, k || qe(this, m, g, 2, 32767, -32768), this[g] = m & 255, this[g + 1] = m >>> 8, g + 2;
  }, D.prototype.writeInt16BE = function(m, g, k) {
    return m = +m, g = g >>> 0, k || qe(this, m, g, 2, 32767, -32768), this[g] = m >>> 8, this[g + 1] = m & 255, g + 2;
  }, D.prototype.writeInt32LE = function(m, g, k) {
    return m = +m, g = g >>> 0, k || qe(this, m, g, 4, 2147483647, -2147483648), this[g] = m & 255, this[g + 1] = m >>> 8, this[g + 2] = m >>> 16, this[g + 3] = m >>> 24, g + 4;
  }, D.prototype.writeInt32BE = function(m, g, k) {
    return m = +m, g = g >>> 0, k || qe(this, m, g, 4, 2147483647, -2147483648), m < 0 && (m = 4294967295 + m + 1), this[g] = m >>> 24, this[g + 1] = m >>> 16, this[g + 2] = m >>> 8, this[g + 3] = m & 255, g + 4;
  }, D.prototype.writeBigInt64LE = bn(function(m, g = 0) {
    return vt(this, m, g, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), D.prototype.writeBigInt64BE = bn(function(m, g = 0) {
    return bt(this, m, g, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Et(b, m, g, k, z, $) {
    if (g + k > b.length)
      throw new RangeError("Index out of range");
    if (g < 0)
      throw new RangeError("Index out of range");
  }
  function Ct(b, m, g, k, z) {
    return m = +m, g = g >>> 0, z || Et(b, m, g, 4), d.write(b, m, g, k, 23, 4), g + 4;
  }
  D.prototype.writeFloatLE = function(m, g, k) {
    return Ct(this, m, g, !0, k);
  }, D.prototype.writeFloatBE = function(m, g, k) {
    return Ct(this, m, g, !1, k);
  };
  function rn(b, m, g, k, z) {
    return m = +m, g = g >>> 0, z || Et(b, m, g, 8), d.write(b, m, g, k, 52, 8), g + 8;
  }
  D.prototype.writeDoubleLE = function(m, g, k) {
    return rn(this, m, g, !0, k);
  }, D.prototype.writeDoubleBE = function(m, g, k) {
    return rn(this, m, g, !1, k);
  }, D.prototype.copy = function(m, g, k, z) {
    if (!D.isBuffer(m))
      throw new TypeError("argument should be a Buffer");
    if (k || (k = 0), !z && z !== 0 && (z = this.length), g >= m.length && (g = m.length), g || (g = 0), z > 0 && z < k && (z = k), z === k || m.length === 0 || this.length === 0)
      return 0;
    if (g < 0)
      throw new RangeError("targetStart out of bounds");
    if (k < 0 || k >= this.length)
      throw new RangeError("Index out of range");
    if (z < 0)
      throw new RangeError("sourceEnd out of bounds");
    z > this.length && (z = this.length), m.length - g < z - k && (z = m.length - g + k);
    const $ = z - k;
    return this === m && typeof w.prototype.copyWithin == "function" ? this.copyWithin(g, k, z) : w.prototype.set.call(
      m,
      this.subarray(k, z),
      g
    ), $;
  }, D.prototype.fill = function(m, g, k, z) {
    if (typeof m == "string") {
      if (typeof g == "string" ? (z = g, g = 0, k = this.length) : typeof k == "string" && (z = k, k = this.length), z !== void 0 && typeof z != "string")
        throw new TypeError("encoding must be a string");
      if (typeof z == "string" && !D.isEncoding(z))
        throw new TypeError("Unknown encoding: " + z);
      if (m.length === 1) {
        const ne = m.charCodeAt(0);
        (z === "utf8" && ne < 128 || z === "latin1") && (m = ne);
      }
    } else
      typeof m == "number" ? m = m & 255 : typeof m == "boolean" && (m = Number(m));
    if (g < 0 || this.length < g || this.length < k)
      throw new RangeError("Out of range index");
    if (k <= g)
      return this;
    g = g >>> 0, k = k === void 0 ? this.length : k >>> 0, m || (m = 0);
    let $;
    if (typeof m == "number")
      for ($ = g; $ < k; ++$)
        this[$] = m;
    else {
      const ne = D.isBuffer(m) ? m : D.from(m, z), Be = ne.length;
      if (Be === 0)
        throw new TypeError('The value "' + m + '" is invalid for argument "value"');
      for ($ = 0; $ < k - g; ++$)
        this[$ + g] = ne[$ % Be];
    }
    return this;
  };
  const On = {};
  function or(b, m, g) {
    On[b] = class extends g {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: m.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${b}]`, this.stack, delete this.name;
      }
      get code() {
        return b;
      }
      set code(z) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: z,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${b}]: ${this.message}`;
      }
    };
  }
  or(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(b) {
      return b ? `${b} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), or(
    "ERR_INVALID_ARG_TYPE",
    function(b, m) {
      return `The "${b}" argument must be of type number. Received type ${typeof m}`;
    },
    TypeError
  ), or(
    "ERR_OUT_OF_RANGE",
    function(b, m, g) {
      let k = `The value of "${b}" is out of range.`, z = g;
      return Number.isInteger(g) && Math.abs(g) > 2 ** 32 ? z = vn(String(g)) : typeof g == "bigint" && (z = String(g), (g > BigInt(2) ** BigInt(32) || g < -(BigInt(2) ** BigInt(32))) && (z = vn(z)), z += "n"), k += ` It must be ${m}. Received ${z}`, k;
    },
    RangeError
  );
  function vn(b) {
    let m = "", g = b.length;
    const k = b[0] === "-" ? 1 : 0;
    for (; g >= k + 4; g -= 3)
      m = `_${b.slice(g - 3, g)}${m}`;
    return `${b.slice(0, g)}${m}`;
  }
  function Wn(b, m, g) {
    sn(m, "offset"), (b[m] === void 0 || b[m + g] === void 0) && cn(m, b.length - (g + 1));
  }
  function Fn(b, m, g, k, z, $) {
    if (b > g || b < m) {
      const ne = typeof m == "bigint" ? "n" : "";
      let Be;
      throw m === 0 || m === BigInt(0) ? Be = `>= 0${ne} and < 2${ne} ** ${($ + 1) * 8}${ne}` : Be = `>= -(2${ne} ** ${($ + 1) * 8 - 1}${ne}) and < 2 ** ${($ + 1) * 8 - 1}${ne}`, new On.ERR_OUT_OF_RANGE("value", Be, b);
    }
    Wn(k, z, $);
  }
  function sn(b, m) {
    if (typeof b != "number")
      throw new On.ERR_INVALID_ARG_TYPE(m, "number", b);
  }
  function cn(b, m, g) {
    throw Math.floor(b) !== b ? (sn(b, g), new On.ERR_OUT_OF_RANGE("offset", "an integer", b)) : m < 0 ? new On.ERR_BUFFER_OUT_OF_BOUNDS() : new On.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${m}`,
      b
    );
  }
  const Lr = /[^+/0-9A-Za-z-_]/g;
  function Nr(b) {
    if (b = b.split("=")[0], b = b.trim().replace(Lr, ""), b.length < 2)
      return "";
    for (; b.length % 4 !== 0; )
      b = b + "=";
    return b;
  }
  function Un(b, m) {
    m = m || 1 / 0;
    let g;
    const k = b.length;
    let z = null;
    const $ = [];
    for (let ne = 0; ne < k; ++ne) {
      if (g = b.charCodeAt(ne), g > 55295 && g < 57344) {
        if (!z) {
          if (g > 56319) {
            (m -= 3) > -1 && $.push(239, 191, 189);
            continue;
          } else if (ne + 1 === k) {
            (m -= 3) > -1 && $.push(239, 191, 189);
            continue;
          }
          z = g;
          continue;
        }
        if (g < 56320) {
          (m -= 3) > -1 && $.push(239, 191, 189), z = g;
          continue;
        }
        g = (z - 55296 << 10 | g - 56320) + 65536;
      } else
        z && (m -= 3) > -1 && $.push(239, 191, 189);
      if (z = null, g < 128) {
        if ((m -= 1) < 0)
          break;
        $.push(g);
      } else if (g < 2048) {
        if ((m -= 2) < 0)
          break;
        $.push(
          g >> 6 | 192,
          g & 63 | 128
        );
      } else if (g < 65536) {
        if ((m -= 3) < 0)
          break;
        $.push(
          g >> 12 | 224,
          g >> 6 & 63 | 128,
          g & 63 | 128
        );
      } else if (g < 1114112) {
        if ((m -= 4) < 0)
          break;
        $.push(
          g >> 18 | 240,
          g >> 12 & 63 | 128,
          g >> 6 & 63 | 128,
          g & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return $;
  }
  function ur(b) {
    const m = [];
    for (let g = 0; g < b.length; ++g)
      m.push(b.charCodeAt(g) & 255);
    return m;
  }
  function Mr(b, m) {
    let g, k, z;
    const $ = [];
    for (let ne = 0; ne < b.length && !((m -= 2) < 0); ++ne)
      g = b.charCodeAt(ne), k = g >> 8, z = g % 256, $.push(z), $.push(k);
    return $;
  }
  function Jn(b) {
    return f.toByteArray(Nr(b));
  }
  function sr(b, m, g, k) {
    let z;
    for (z = 0; z < k && !(z + g >= m.length || z >= b.length); ++z)
      m[z + g] = b[z];
    return z;
  }
  function ln(b, m) {
    return b instanceof m || b != null && b.constructor != null && b.constructor.name != null && b.constructor.name === m.name;
  }
  function cr(b) {
    return b !== b;
  }
  const gn = function() {
    const b = "0123456789abcdef", m = new Array(256);
    for (let g = 0; g < 16; ++g) {
      const k = g * 16;
      for (let z = 0; z < 16; ++z)
        m[k + z] = b[g] + b[z];
    }
    return m;
  }();
  function bn(b) {
    return typeof BigInt > "u" ? Bi : b;
  }
  function Bi() {
    throw new Error("BigInt not supported");
  }
})(LT);
const T2 = LT.Buffer;
function Kt(a, f, d, S, C) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = a, this.name = "AxiosError", f && (this.code = f), d && (this.config = d), S && (this.request = S), C && (this.response = C);
}
se.inherits(Kt, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: se.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const MT = Kt.prototype, FT = {};
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
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((a) => {
  FT[a] = { value: a };
});
Object.defineProperties(Kt, FT);
Object.defineProperty(MT, "isAxiosError", { value: !0 });
Kt.from = (a, f, d, S, C, w) => {
  const h = Object.create(MT);
  return se.toFlatObject(a, h, function(L) {
    return L !== Error.prototype;
  }, (A) => A !== "isAxiosError"), Kt.call(h, a.message, f, d, S, C), h.cause = a, h.name = a.name, w && Object.assign(h, w), h;
};
const R2 = null;
function FE(a) {
  return se.isPlainObject(a) || se.isArray(a);
}
function UT(a) {
  return se.endsWith(a, "[]") ? a.slice(0, -2) : a;
}
function Gw(a, f, d) {
  return a ? a.concat(f).map(function(C, w) {
    return C = UT(C), !d && w ? "[" + C + "]" : C;
  }).join(d ? "." : "") : f;
}
function b2(a) {
  return se.isArray(a) && !a.some(FE);
}
const _2 = se.toFlatObject(se, {}, null, function(f) {
  return /^is[A-Z]/.test(f);
});
function Qy(a, f, d) {
  if (!se.isObject(a))
    throw new TypeError("target must be an object");
  f = f || new FormData(), d = se.toFlatObject(d, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(ue, Ce) {
    return !se.isUndefined(Ce[ue]);
  });
  const S = d.metaTokens, C = d.visitor || D, w = d.dots, h = d.indexes, L = (d.Blob || typeof Blob < "u" && Blob) && se.isSpecCompliantForm(f);
  if (!se.isFunction(C))
    throw new TypeError("visitor must be a function");
  function B(te) {
    if (te === null)
      return "";
    if (se.isDate(te))
      return te.toISOString();
    if (!L && se.isBlob(te))
      throw new Kt("Blob is not supported. Use a Buffer instead.");
    return se.isArrayBuffer(te) || se.isTypedArray(te) ? L && typeof Blob == "function" ? new Blob([te]) : T2.from(te) : te;
  }
  function D(te, ue, Ce) {
    let nt = te;
    if (te && !Ce && typeof te == "object") {
      if (se.endsWith(ue, "{}"))
        ue = S ? ue : ue.slice(0, -2), te = JSON.stringify(te);
      else if (se.isArray(te) && b2(te) || (se.isFileList(te) || se.endsWith(ue, "[]")) && (nt = se.toArray(te)))
        return ue = UT(ue), nt.forEach(function(Ge, St) {
          !(se.isUndefined(Ge) || Ge === null) && f.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? Gw([ue], St, w) : h === null ? ue : ue + "[]",
            B(Ge)
          );
        }), !1;
    }
    return FE(te) ? !0 : (f.append(Gw(Ce, ue, w), B(te)), !1);
  }
  const N = [], J = Object.assign(_2, {
    defaultVisitor: D,
    convertValue: B,
    isVisitable: FE
  });
  function K(te, ue) {
    if (!se.isUndefined(te)) {
      if (N.indexOf(te) !== -1)
        throw Error("Circular reference detected in " + ue.join("."));
      N.push(te), se.forEach(te, function(nt, Ee) {
        (!(se.isUndefined(nt) || nt === null) && C.call(
          f,
          nt,
          se.isString(Ee) ? Ee.trim() : Ee,
          ue,
          J
        )) === !0 && K(nt, ue ? ue.concat(Ee) : [Ee]);
      }), N.pop();
    }
  }
  if (!se.isObject(a))
    throw new TypeError("data must be an object");
  return K(a), f;
}
function qw(a) {
  const f = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g, function(S) {
    return f[S];
  });
}
function WE(a, f) {
  this._pairs = [], a && Qy(a, this, f);
}
const zT = WE.prototype;
zT.append = function(f, d) {
  this._pairs.push([f, d]);
};
zT.toString = function(f) {
  const d = f ? function(S) {
    return f.call(this, S, qw);
  } : qw;
  return this._pairs.map(function(C) {
    return d(C[0]) + "=" + d(C[1]);
  }, "").join("&");
};
function k2(a) {
  return encodeURIComponent(a).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function BT(a, f, d) {
  if (!f)
    return a;
  const S = d && d.encode || k2, C = d && d.serialize;
  let w;
  if (C ? w = C(f, d) : w = se.isURLSearchParams(f) ? f.toString() : new WE(f, d).toString(S), w) {
    const h = a.indexOf("#");
    h !== -1 && (a = a.slice(0, h)), a += (a.indexOf("?") === -1 ? "?" : "&") + w;
  }
  return a;
}
class Kw {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(f, d, S) {
    return this.handlers.push({
      fulfilled: f,
      rejected: d,
      synchronous: S ? S.synchronous : !1,
      runWhen: S ? S.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(f) {
    this.handlers[f] && (this.handlers[f] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(f) {
    se.forEach(this.handlers, function(S) {
      S !== null && f(S);
    });
  }
}
const jT = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, D2 = typeof URLSearchParams < "u" ? URLSearchParams : WE, O2 = typeof FormData < "u" ? FormData : null, A2 = typeof Blob < "u" ? Blob : null, L2 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: D2,
    FormData: O2,
    Blob: A2
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, PT = typeof window < "u" && typeof document < "u", N2 = ((a) => PT && ["ReactNative", "NativeScript", "NS"].indexOf(a) < 0)(typeof navigator < "u" && navigator.product), M2 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", F2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: PT,
  hasStandardBrowserEnv: N2,
  hasStandardBrowserWebWorkerEnv: M2
}, Symbol.toStringTag, { value: "Module" })), so = {
  ...F2,
  ...L2
};
function U2(a, f) {
  return Qy(a, new so.classes.URLSearchParams(), Object.assign({
    visitor: function(d, S, C, w) {
      return so.isNode && se.isBuffer(d) ? (this.append(S, d.toString("base64")), !1) : w.defaultVisitor.apply(this, arguments);
    }
  }, f));
}
function z2(a) {
  return se.matchAll(/\w+|\[(\w*)]/g, a).map((f) => f[0] === "[]" ? "" : f[1] || f[0]);
}
function B2(a) {
  const f = {}, d = Object.keys(a);
  let S;
  const C = d.length;
  let w;
  for (S = 0; S < C; S++)
    w = d[S], f[w] = a[w];
  return f;
}
function HT(a) {
  function f(d, S, C, w) {
    let h = d[w++];
    if (h === "__proto__")
      return !0;
    const A = Number.isFinite(+h), L = w >= d.length;
    return h = !h && se.isArray(C) ? C.length : h, L ? (se.hasOwnProp(C, h) ? C[h] = [C[h], S] : C[h] = S, !A) : ((!C[h] || !se.isObject(C[h])) && (C[h] = []), f(d, S, C[h], w) && se.isArray(C[h]) && (C[h] = B2(C[h])), !A);
  }
  if (se.isFormData(a) && se.isFunction(a.entries)) {
    const d = {};
    return se.forEachEntry(a, (S, C) => {
      f(z2(S), C, d, 0);
    }), d;
  }
  return null;
}
function j2(a, f, d) {
  if (se.isString(a))
    try {
      return (f || JSON.parse)(a), se.trim(a);
    } catch (S) {
      if (S.name !== "SyntaxError")
        throw S;
    }
  return (d || JSON.stringify)(a);
}
const Ih = {
  transitional: jT,
  adapter: ["xhr", "http"],
  transformRequest: [function(f, d) {
    const S = d.getContentType() || "", C = S.indexOf("application/json") > -1, w = se.isObject(f);
    if (w && se.isHTMLForm(f) && (f = new FormData(f)), se.isFormData(f))
      return C ? JSON.stringify(HT(f)) : f;
    if (se.isArrayBuffer(f) || se.isBuffer(f) || se.isStream(f) || se.isFile(f) || se.isBlob(f))
      return f;
    if (se.isArrayBufferView(f))
      return f.buffer;
    if (se.isURLSearchParams(f))
      return d.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), f.toString();
    let A;
    if (w) {
      if (S.indexOf("application/x-www-form-urlencoded") > -1)
        return U2(f, this.formSerializer).toString();
      if ((A = se.isFileList(f)) || S.indexOf("multipart/form-data") > -1) {
        const L = this.env && this.env.FormData;
        return Qy(
          A ? { "files[]": f } : f,
          L && new L(),
          this.formSerializer
        );
      }
    }
    return w || C ? (d.setContentType("application/json", !1), j2(f)) : f;
  }],
  transformResponse: [function(f) {
    const d = this.transitional || Ih.transitional, S = d && d.forcedJSONParsing, C = this.responseType === "json";
    if (f && se.isString(f) && (S && !this.responseType || C)) {
      const h = !(d && d.silentJSONParsing) && C;
      try {
        return JSON.parse(f);
      } catch (A) {
        if (h)
          throw A.name === "SyntaxError" ? Kt.from(A, Kt.ERR_BAD_RESPONSE, this, null, this.response) : A;
      }
    }
    return f;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: so.classes.FormData,
    Blob: so.classes.Blob
  },
  validateStatus: function(f) {
    return f >= 200 && f < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
se.forEach(["delete", "get", "head", "post", "put", "patch"], (a) => {
  Ih.headers[a] = {};
});
const P2 = se.toObjectSet([
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
  "user-agent"
]), H2 = (a) => {
  const f = {};
  let d, S, C;
  return a && a.split(`
`).forEach(function(h) {
    C = h.indexOf(":"), d = h.substring(0, C).trim().toLowerCase(), S = h.substring(C + 1).trim(), !(!d || f[d] && P2[d]) && (d === "set-cookie" ? f[d] ? f[d].push(S) : f[d] = [S] : f[d] = f[d] ? f[d] + ", " + S : S);
  }), f;
}, Xw = Symbol("internals");
function Nh(a) {
  return a && String(a).trim().toLowerCase();
}
function zy(a) {
  return a === !1 || a == null ? a : se.isArray(a) ? a.map(zy) : String(a);
}
function I2(a) {
  const f = /* @__PURE__ */ Object.create(null), d = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let S;
  for (; S = d.exec(a); )
    f[S[1]] = S[2];
  return f;
}
const V2 = (a) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());
function xE(a, f, d, S, C) {
  if (se.isFunction(S))
    return S.call(this, f, d);
  if (C && (f = d), !!se.isString(f)) {
    if (se.isString(S))
      return f.indexOf(S) !== -1;
    if (se.isRegExp(S))
      return S.test(f);
  }
}
function $2(a) {
  return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (f, d, S) => d.toUpperCase() + S);
}
function Y2(a, f) {
  const d = se.toCamelCase(" " + f);
  ["get", "set", "has"].forEach((S) => {
    Object.defineProperty(a, S + d, {
      value: function(C, w, h) {
        return this[S].call(this, f, C, w, h);
      },
      configurable: !0
    });
  });
}
class Ya {
  constructor(f) {
    f && this.set(f);
  }
  set(f, d, S) {
    const C = this;
    function w(A, L, B) {
      const D = Nh(L);
      if (!D)
        throw new Error("header name must be a non-empty string");
      const N = se.findKey(C, D);
      (!N || C[N] === void 0 || B === !0 || B === void 0 && C[N] !== !1) && (C[N || L] = zy(A));
    }
    const h = (A, L) => se.forEach(A, (B, D) => w(B, D, L));
    return se.isPlainObject(f) || f instanceof this.constructor ? h(f, d) : se.isString(f) && (f = f.trim()) && !V2(f) ? h(H2(f), d) : f != null && w(d, f, S), this;
  }
  get(f, d) {
    if (f = Nh(f), f) {
      const S = se.findKey(this, f);
      if (S) {
        const C = this[S];
        if (!d)
          return C;
        if (d === !0)
          return I2(C);
        if (se.isFunction(d))
          return d.call(this, C, S);
        if (se.isRegExp(d))
          return d.exec(C);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(f, d) {
    if (f = Nh(f), f) {
      const S = se.findKey(this, f);
      return !!(S && this[S] !== void 0 && (!d || xE(this, this[S], S, d)));
    }
    return !1;
  }
  delete(f, d) {
    const S = this;
    let C = !1;
    function w(h) {
      if (h = Nh(h), h) {
        const A = se.findKey(S, h);
        A && (!d || xE(S, S[A], A, d)) && (delete S[A], C = !0);
      }
    }
    return se.isArray(f) ? f.forEach(w) : w(f), C;
  }
  clear(f) {
    const d = Object.keys(this);
    let S = d.length, C = !1;
    for (; S--; ) {
      const w = d[S];
      (!f || xE(this, this[w], w, f, !0)) && (delete this[w], C = !0);
    }
    return C;
  }
  normalize(f) {
    const d = this, S = {};
    return se.forEach(this, (C, w) => {
      const h = se.findKey(S, w);
      if (h) {
        d[h] = zy(C), delete d[w];
        return;
      }
      const A = f ? $2(w) : String(w).trim();
      A !== w && delete d[w], d[A] = zy(C), S[A] = !0;
    }), this;
  }
  concat(...f) {
    return this.constructor.concat(this, ...f);
  }
  toJSON(f) {
    const d = /* @__PURE__ */ Object.create(null);
    return se.forEach(this, (S, C) => {
      S != null && S !== !1 && (d[C] = f && se.isArray(S) ? S.join(", ") : S);
    }), d;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([f, d]) => f + ": " + d).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(f) {
    return f instanceof this ? f : new this(f);
  }
  static concat(f, ...d) {
    const S = new this(f);
    return d.forEach((C) => S.set(C)), S;
  }
  static accessor(f) {
    const S = (this[Xw] = this[Xw] = {
      accessors: {}
    }).accessors, C = this.prototype;
    function w(h) {
      const A = Nh(h);
      S[A] || (Y2(C, h), S[A] = !0);
    }
    return se.isArray(f) ? f.forEach(w) : w(f), this;
  }
}
Ya.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
se.reduceDescriptors(Ya.prototype, ({ value: a }, f) => {
  let d = f[0].toUpperCase() + f.slice(1);
  return {
    get: () => a,
    set(S) {
      this[d] = S;
    }
  };
});
se.freezeMethods(Ya);
function wE(a, f) {
  const d = this || Ih, S = f || d, C = Ya.from(S.headers);
  let w = S.data;
  return se.forEach(a, function(A) {
    w = A.call(d, w, C.normalize(), f ? f.status : void 0);
  }), C.normalize(), w;
}
function IT(a) {
  return !!(a && a.__CANCEL__);
}
function Vh(a, f, d) {
  Kt.call(this, a ?? "canceled", Kt.ERR_CANCELED, f, d), this.name = "CanceledError";
}
se.inherits(Vh, Kt, {
  __CANCEL__: !0
});
function W2(a, f, d) {
  const S = d.config.validateStatus;
  !d.status || !S || S(d.status) ? a(d) : f(new Kt(
    "Request failed with status code " + d.status,
    [Kt.ERR_BAD_REQUEST, Kt.ERR_BAD_RESPONSE][Math.floor(d.status / 100) - 4],
    d.config,
    d.request,
    d
  ));
}
const Q2 = so.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(a, f, d, S, C, w) {
      const h = [a + "=" + encodeURIComponent(f)];
      se.isNumber(d) && h.push("expires=" + new Date(d).toGMTString()), se.isString(S) && h.push("path=" + S), se.isString(C) && h.push("domain=" + C), w === !0 && h.push("secure"), document.cookie = h.join("; ");
    },
    read(a) {
      const f = document.cookie.match(new RegExp("(^|;\\s*)(" + a + ")=([^;]*)"));
      return f ? decodeURIComponent(f[3]) : null;
    },
    remove(a) {
      this.write(a, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function G2(a) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a);
}
function q2(a, f) {
  return f ? a.replace(/\/?\/$/, "") + "/" + f.replace(/^\/+/, "") : a;
}
function VT(a, f) {
  return a && !G2(f) ? q2(a, f) : f;
}
const K2 = so.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const f = /(msie|trident)/i.test(navigator.userAgent), d = document.createElement("a");
    let S;
    function C(w) {
      let h = w;
      return f && (d.setAttribute("href", h), h = d.href), d.setAttribute("href", h), {
        href: d.href,
        protocol: d.protocol ? d.protocol.replace(/:$/, "") : "",
        host: d.host,
        search: d.search ? d.search.replace(/^\?/, "") : "",
        hash: d.hash ? d.hash.replace(/^#/, "") : "",
        hostname: d.hostname,
        port: d.port,
        pathname: d.pathname.charAt(0) === "/" ? d.pathname : "/" + d.pathname
      };
    }
    return S = C(window.location.href), function(h) {
      const A = se.isString(h) ? C(h) : h;
      return A.protocol === S.protocol && A.host === S.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function X2(a) {
  const f = /^([-+\w]{1,25})(:?\/\/|:)/.exec(a);
  return f && f[1] || "";
}
function J2(a, f) {
  a = a || 10;
  const d = new Array(a), S = new Array(a);
  let C = 0, w = 0, h;
  return f = f !== void 0 ? f : 1e3, function(L) {
    const B = Date.now(), D = S[w];
    h || (h = B), d[C] = L, S[C] = B;
    let N = w, J = 0;
    for (; N !== C; )
      J += d[N++], N = N % a;
    if (C = (C + 1) % a, C === w && (w = (w + 1) % a), B - h < f)
      return;
    const K = D && B - D;
    return K ? Math.round(J * 1e3 / K) : void 0;
  };
}
function Jw(a, f) {
  let d = 0;
  const S = J2(50, 250);
  return (C) => {
    const w = C.loaded, h = C.lengthComputable ? C.total : void 0, A = w - d, L = S(A), B = w <= h;
    d = w;
    const D = {
      loaded: w,
      total: h,
      progress: h ? w / h : void 0,
      bytes: A,
      rate: L || void 0,
      estimated: L && h && B ? (h - w) / L : void 0,
      event: C
    };
    D[f ? "download" : "upload"] = !0, a(D);
  };
}
const Z2 = typeof XMLHttpRequest < "u", eL = Z2 && function(a) {
  return new Promise(function(d, S) {
    let C = a.data;
    const w = Ya.from(a.headers).normalize();
    let { responseType: h, withXSRFToken: A } = a, L;
    function B() {
      a.cancelToken && a.cancelToken.unsubscribe(L), a.signal && a.signal.removeEventListener("abort", L);
    }
    let D;
    if (se.isFormData(C)) {
      if (so.hasStandardBrowserEnv || so.hasStandardBrowserWebWorkerEnv)
        w.setContentType(!1);
      else if ((D = w.getContentType()) !== !1) {
        const [ue, ...Ce] = D ? D.split(";").map((nt) => nt.trim()).filter(Boolean) : [];
        w.setContentType([ue || "multipart/form-data", ...Ce].join("; "));
      }
    }
    let N = new XMLHttpRequest();
    if (a.auth) {
      const ue = a.auth.username || "", Ce = a.auth.password ? unescape(encodeURIComponent(a.auth.password)) : "";
      w.set("Authorization", "Basic " + btoa(ue + ":" + Ce));
    }
    const J = VT(a.baseURL, a.url);
    N.open(a.method.toUpperCase(), BT(J, a.params, a.paramsSerializer), !0), N.timeout = a.timeout;
    function K() {
      if (!N)
        return;
      const ue = Ya.from(
        "getAllResponseHeaders" in N && N.getAllResponseHeaders()
      ), nt = {
        data: !h || h === "text" || h === "json" ? N.responseText : N.response,
        status: N.status,
        statusText: N.statusText,
        headers: ue,
        config: a,
        request: N
      };
      W2(function(Ge) {
        d(Ge), B();
      }, function(Ge) {
        S(Ge), B();
      }, nt), N = null;
    }
    if ("onloadend" in N ? N.onloadend = K : N.onreadystatechange = function() {
      !N || N.readyState !== 4 || N.status === 0 && !(N.responseURL && N.responseURL.indexOf("file:") === 0) || setTimeout(K);
    }, N.onabort = function() {
      N && (S(new Kt("Request aborted", Kt.ECONNABORTED, a, N)), N = null);
    }, N.onerror = function() {
      S(new Kt("Network Error", Kt.ERR_NETWORK, a, N)), N = null;
    }, N.ontimeout = function() {
      let Ce = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const nt = a.transitional || jT;
      a.timeoutErrorMessage && (Ce = a.timeoutErrorMessage), S(new Kt(
        Ce,
        nt.clarifyTimeoutError ? Kt.ETIMEDOUT : Kt.ECONNABORTED,
        a,
        N
      )), N = null;
    }, so.hasStandardBrowserEnv && (A && se.isFunction(A) && (A = A(a)), A || A !== !1 && K2(J))) {
      const ue = a.xsrfHeaderName && a.xsrfCookieName && Q2.read(a.xsrfCookieName);
      ue && w.set(a.xsrfHeaderName, ue);
    }
    C === void 0 && w.setContentType(null), "setRequestHeader" in N && se.forEach(w.toJSON(), function(Ce, nt) {
      N.setRequestHeader(nt, Ce);
    }), se.isUndefined(a.withCredentials) || (N.withCredentials = !!a.withCredentials), h && h !== "json" && (N.responseType = a.responseType), typeof a.onDownloadProgress == "function" && N.addEventListener("progress", Jw(a.onDownloadProgress, !0)), typeof a.onUploadProgress == "function" && N.upload && N.upload.addEventListener("progress", Jw(a.onUploadProgress)), (a.cancelToken || a.signal) && (L = (ue) => {
      N && (S(!ue || ue.type ? new Vh(null, a, N) : ue), N.abort(), N = null);
    }, a.cancelToken && a.cancelToken.subscribe(L), a.signal && (a.signal.aborted ? L() : a.signal.addEventListener("abort", L)));
    const te = X2(J);
    if (te && so.protocols.indexOf(te) === -1) {
      S(new Kt("Unsupported protocol " + te + ":", Kt.ERR_BAD_REQUEST, a));
      return;
    }
    N.send(C || null);
  });
}, UE = {
  http: R2,
  xhr: eL
};
se.forEach(UE, (a, f) => {
  if (a) {
    try {
      Object.defineProperty(a, "name", { value: f });
    } catch {
    }
    Object.defineProperty(a, "adapterName", { value: f });
  }
});
const Zw = (a) => `- ${a}`, tL = (a) => se.isFunction(a) || a === null || a === !1, $T = {
  getAdapter: (a) => {
    a = se.isArray(a) ? a : [a];
    const { length: f } = a;
    let d, S;
    const C = {};
    for (let w = 0; w < f; w++) {
      d = a[w];
      let h;
      if (S = d, !tL(d) && (S = UE[(h = String(d)).toLowerCase()], S === void 0))
        throw new Kt(`Unknown adapter '${h}'`);
      if (S)
        break;
      C[h || "#" + w] = S;
    }
    if (!S) {
      const w = Object.entries(C).map(
        ([A, L]) => `adapter ${A} ` + (L === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let h = f ? w.length > 1 ? `since :
` + w.map(Zw).join(`
`) : " " + Zw(w[0]) : "as no adapter specified";
      throw new Kt(
        "There is no suitable adapter to dispatch the request " + h,
        "ERR_NOT_SUPPORT"
      );
    }
    return S;
  },
  adapters: UE
};
function TE(a) {
  if (a.cancelToken && a.cancelToken.throwIfRequested(), a.signal && a.signal.aborted)
    throw new Vh(null, a);
}
function eT(a) {
  return TE(a), a.headers = Ya.from(a.headers), a.data = wE.call(
    a,
    a.transformRequest
  ), ["post", "put", "patch"].indexOf(a.method) !== -1 && a.headers.setContentType("application/x-www-form-urlencoded", !1), $T.getAdapter(a.adapter || Ih.adapter)(a).then(function(S) {
    return TE(a), S.data = wE.call(
      a,
      a.transformResponse,
      S
    ), S.headers = Ya.from(S.headers), S;
  }, function(S) {
    return IT(S) || (TE(a), S && S.response && (S.response.data = wE.call(
      a,
      a.transformResponse,
      S.response
    ), S.response.headers = Ya.from(S.response.headers))), Promise.reject(S);
  });
}
const tT = (a) => a instanceof Ya ? { ...a } : a;
function Rd(a, f) {
  f = f || {};
  const d = {};
  function S(B, D, N) {
    return se.isPlainObject(B) && se.isPlainObject(D) ? se.merge.call({ caseless: N }, B, D) : se.isPlainObject(D) ? se.merge({}, D) : se.isArray(D) ? D.slice() : D;
  }
  function C(B, D, N) {
    if (se.isUndefined(D)) {
      if (!se.isUndefined(B))
        return S(void 0, B, N);
    } else
      return S(B, D, N);
  }
  function w(B, D) {
    if (!se.isUndefined(D))
      return S(void 0, D);
  }
  function h(B, D) {
    if (se.isUndefined(D)) {
      if (!se.isUndefined(B))
        return S(void 0, B);
    } else
      return S(void 0, D);
  }
  function A(B, D, N) {
    if (N in f)
      return S(B, D);
    if (N in a)
      return S(void 0, B);
  }
  const L = {
    url: w,
    method: w,
    data: w,
    baseURL: h,
    transformRequest: h,
    transformResponse: h,
    paramsSerializer: h,
    timeout: h,
    timeoutMessage: h,
    withCredentials: h,
    withXSRFToken: h,
    adapter: h,
    responseType: h,
    xsrfCookieName: h,
    xsrfHeaderName: h,
    onUploadProgress: h,
    onDownloadProgress: h,
    decompress: h,
    maxContentLength: h,
    maxBodyLength: h,
    beforeRedirect: h,
    transport: h,
    httpAgent: h,
    httpsAgent: h,
    cancelToken: h,
    socketPath: h,
    responseEncoding: h,
    validateStatus: A,
    headers: (B, D) => C(tT(B), tT(D), !0)
  };
  return se.forEach(Object.keys(Object.assign({}, a, f)), function(D) {
    const N = L[D] || C, J = N(a[D], f[D], D);
    se.isUndefined(J) && N !== A || (d[D] = J);
  }), d;
}
const YT = "1.6.8", QE = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((a, f) => {
  QE[a] = function(S) {
    return typeof S === a || "a" + (f < 1 ? "n " : " ") + a;
  };
});
const nT = {};
QE.transitional = function(f, d, S) {
  function C(w, h) {
    return "[Axios v" + YT + "] Transitional option '" + w + "'" + h + (S ? ". " + S : "");
  }
  return (w, h, A) => {
    if (f === !1)
      throw new Kt(
        C(h, " has been removed" + (d ? " in " + d : "")),
        Kt.ERR_DEPRECATED
      );
    return d && !nT[h] && (nT[h] = !0, console.warn(
      C(
        h,
        " has been deprecated since v" + d + " and will be removed in the near future"
      )
    )), f ? f(w, h, A) : !0;
  };
};
function nL(a, f, d) {
  if (typeof a != "object")
    throw new Kt("options must be an object", Kt.ERR_BAD_OPTION_VALUE);
  const S = Object.keys(a);
  let C = S.length;
  for (; C-- > 0; ) {
    const w = S[C], h = f[w];
    if (h) {
      const A = a[w], L = A === void 0 || h(A, w, a);
      if (L !== !0)
        throw new Kt("option " + w + " must be " + L, Kt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (d !== !0)
      throw new Kt("Unknown option " + w, Kt.ERR_BAD_OPTION);
  }
}
const zE = {
  assertOptions: nL,
  validators: QE
}, ms = zE.validators;
class bc {
  constructor(f) {
    this.defaults = f, this.interceptors = {
      request: new Kw(),
      response: new Kw()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(f, d) {
    try {
      return await this._request(f, d);
    } catch (S) {
      if (S instanceof Error) {
        let C;
        Error.captureStackTrace ? Error.captureStackTrace(C = {}) : C = new Error();
        const w = C.stack ? C.stack.replace(/^.+\n/, "") : "";
        S.stack ? w && !String(S.stack).endsWith(w.replace(/^.+\n.+\n/, "")) && (S.stack += `
` + w) : S.stack = w;
      }
      throw S;
    }
  }
  _request(f, d) {
    typeof f == "string" ? (d = d || {}, d.url = f) : d = f || {}, d = Rd(this.defaults, d);
    const { transitional: S, paramsSerializer: C, headers: w } = d;
    S !== void 0 && zE.assertOptions(S, {
      silentJSONParsing: ms.transitional(ms.boolean),
      forcedJSONParsing: ms.transitional(ms.boolean),
      clarifyTimeoutError: ms.transitional(ms.boolean)
    }, !1), C != null && (se.isFunction(C) ? d.paramsSerializer = {
      serialize: C
    } : zE.assertOptions(C, {
      encode: ms.function,
      serialize: ms.function
    }, !0)), d.method = (d.method || this.defaults.method || "get").toLowerCase();
    let h = w && se.merge(
      w.common,
      w[d.method]
    );
    w && se.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (te) => {
        delete w[te];
      }
    ), d.headers = Ya.concat(h, w);
    const A = [];
    let L = !0;
    this.interceptors.request.forEach(function(ue) {
      typeof ue.runWhen == "function" && ue.runWhen(d) === !1 || (L = L && ue.synchronous, A.unshift(ue.fulfilled, ue.rejected));
    });
    const B = [];
    this.interceptors.response.forEach(function(ue) {
      B.push(ue.fulfilled, ue.rejected);
    });
    let D, N = 0, J;
    if (!L) {
      const te = [eT.bind(this), void 0];
      for (te.unshift.apply(te, A), te.push.apply(te, B), J = te.length, D = Promise.resolve(d); N < J; )
        D = D.then(te[N++], te[N++]);
      return D;
    }
    J = A.length;
    let K = d;
    for (N = 0; N < J; ) {
      const te = A[N++], ue = A[N++];
      try {
        K = te(K);
      } catch (Ce) {
        ue.call(this, Ce);
        break;
      }
    }
    try {
      D = eT.call(this, K);
    } catch (te) {
      return Promise.reject(te);
    }
    for (N = 0, J = B.length; N < J; )
      D = D.then(B[N++], B[N++]);
    return D;
  }
  getUri(f) {
    f = Rd(this.defaults, f);
    const d = VT(f.baseURL, f.url);
    return BT(d, f.params, f.paramsSerializer);
  }
}
se.forEach(["delete", "get", "head", "options"], function(f) {
  bc.prototype[f] = function(d, S) {
    return this.request(Rd(S || {}, {
      method: f,
      url: d,
      data: (S || {}).data
    }));
  };
});
se.forEach(["post", "put", "patch"], function(f) {
  function d(S) {
    return function(w, h, A) {
      return this.request(Rd(A || {}, {
        method: f,
        headers: S ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: w,
        data: h
      }));
    };
  }
  bc.prototype[f] = d(), bc.prototype[f + "Form"] = d(!0);
});
class GE {
  constructor(f) {
    if (typeof f != "function")
      throw new TypeError("executor must be a function.");
    let d;
    this.promise = new Promise(function(w) {
      d = w;
    });
    const S = this;
    this.promise.then((C) => {
      if (!S._listeners)
        return;
      let w = S._listeners.length;
      for (; w-- > 0; )
        S._listeners[w](C);
      S._listeners = null;
    }), this.promise.then = (C) => {
      let w;
      const h = new Promise((A) => {
        S.subscribe(A), w = A;
      }).then(C);
      return h.cancel = function() {
        S.unsubscribe(w);
      }, h;
    }, f(function(w, h, A) {
      S.reason || (S.reason = new Vh(w, h, A), d(S.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(f) {
    if (this.reason) {
      f(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(f) : this._listeners = [f];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(f) {
    if (!this._listeners)
      return;
    const d = this._listeners.indexOf(f);
    d !== -1 && this._listeners.splice(d, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let f;
    return {
      token: new GE(function(C) {
        f = C;
      }),
      cancel: f
    };
  }
}
function rL(a) {
  return function(d) {
    return a.apply(null, d);
  };
}
function iL(a) {
  return se.isObject(a) && a.isAxiosError === !0;
}
const BE = {
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
  NetworkAuthenticationRequired: 511
};
Object.entries(BE).forEach(([a, f]) => {
  BE[f] = a;
});
function WT(a) {
  const f = new bc(a), d = TT(bc.prototype.request, f);
  return se.extend(d, bc.prototype, f, { allOwnKeys: !0 }), se.extend(d, f, null, { allOwnKeys: !0 }), d.create = function(C) {
    return WT(Rd(a, C));
  }, d;
}
const ar = WT(Ih);
ar.Axios = bc;
ar.CanceledError = Vh;
ar.CancelToken = GE;
ar.isCancel = IT;
ar.VERSION = YT;
ar.toFormData = Qy;
ar.AxiosError = Kt;
ar.Cancel = ar.CanceledError;
ar.all = function(f) {
  return Promise.all(f);
};
ar.spread = rL;
ar.isAxiosError = iL;
ar.mergeConfig = Rd;
ar.AxiosHeaders = Ya;
ar.formToJSON = (a) => HT(se.isHTMLForm(a) ? new FormData(a) : a);
ar.getAdapter = $T.getAdapter;
ar.HttpStatusCode = BE;
ar.default = ar;
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function QT(a) {
  return typeof a > "u" || a === null;
}
function aL(a) {
  return typeof a == "object" && a !== null;
}
function lL(a) {
  return Array.isArray(a) ? a : QT(a) ? [] : [a];
}
function oL(a, f) {
  var d, S, C, w;
  if (f)
    for (w = Object.keys(f), d = 0, S = w.length; d < S; d += 1)
      C = w[d], a[C] = f[C];
  return a;
}
function uL(a, f) {
  var d = "", S;
  for (S = 0; S < f; S += 1)
    d += a;
  return d;
}
function sL(a) {
  return a === 0 && Number.NEGATIVE_INFINITY === 1 / a;
}
var cL = QT, fL = aL, dL = lL, pL = uL, hL = sL, vL = oL, Ar = {
  isNothing: cL,
  isObject: fL,
  toArray: dL,
  repeat: pL,
  isNegativeZero: hL,
  extend: vL
};
function GT(a, f) {
  var d = "", S = a.reason || "(unknown reason)";
  return a.mark ? (a.mark.name && (d += 'in "' + a.mark.name + '" '), d += "(" + (a.mark.line + 1) + ":" + (a.mark.column + 1) + ")", !f && a.mark.snippet && (d += `

` + a.mark.snippet), S + " " + d) : S;
}
function zh(a, f) {
  Error.call(this), this.name = "YAMLException", this.reason = a, this.mark = f, this.message = GT(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
zh.prototype = Object.create(Error.prototype);
zh.prototype.constructor = zh;
zh.prototype.toString = function(f) {
  return this.name + ": " + GT(this, f);
};
var zi = zh;
function RE(a, f, d, S, C) {
  var w = "", h = "", A = Math.floor(C / 2) - 1;
  return S - f > A && (w = " ... ", f = S - A + w.length), d - S > A && (h = " ...", d = S + A - h.length), {
    str: w + a.slice(f, d).replace(/\t/g, "→") + h,
    pos: S - f + w.length
    // relative position
  };
}
function bE(a, f) {
  return Ar.repeat(" ", f - a.length) + a;
}
function mL(a, f) {
  if (f = Object.create(f || null), !a.buffer)
    return null;
  f.maxLength || (f.maxLength = 79), typeof f.indent != "number" && (f.indent = 1), typeof f.linesBefore != "number" && (f.linesBefore = 3), typeof f.linesAfter != "number" && (f.linesAfter = 2);
  for (var d = /\r?\n|\r|\0/g, S = [0], C = [], w, h = -1; w = d.exec(a.buffer); )
    C.push(w.index), S.push(w.index + w[0].length), a.position <= w.index && h < 0 && (h = S.length - 2);
  h < 0 && (h = S.length - 1);
  var A = "", L, B, D = Math.min(a.line + f.linesAfter, C.length).toString().length, N = f.maxLength - (f.indent + D + 3);
  for (L = 1; L <= f.linesBefore && !(h - L < 0); L++)
    B = RE(
      a.buffer,
      S[h - L],
      C[h - L],
      a.position - (S[h] - S[h - L]),
      N
    ), A = Ar.repeat(" ", f.indent) + bE((a.line - L + 1).toString(), D) + " | " + B.str + `
` + A;
  for (B = RE(a.buffer, S[h], C[h], a.position, N), A += Ar.repeat(" ", f.indent) + bE((a.line + 1).toString(), D) + " | " + B.str + `
`, A += Ar.repeat("-", f.indent + D + 3 + B.pos) + `^
`, L = 1; L <= f.linesAfter && !(h + L >= C.length); L++)
    B = RE(
      a.buffer,
      S[h + L],
      C[h + L],
      a.position - (S[h] - S[h + L]),
      N
    ), A += Ar.repeat(" ", f.indent) + bE((a.line + L + 1).toString(), D) + " | " + B.str + `
`;
  return A.replace(/\n$/, "");
}
var yL = mL, gL = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
], SL = [
  "scalar",
  "sequence",
  "mapping"
];
function EL(a) {
  var f = {};
  return a !== null && Object.keys(a).forEach(function(d) {
    a[d].forEach(function(S) {
      f[String(S)] = d;
    });
  }), f;
}
function CL(a, f) {
  if (f = f || {}, Object.keys(f).forEach(function(d) {
    if (gL.indexOf(d) === -1)
      throw new zi('Unknown option "' + d + '" is met in definition of "' + a + '" YAML type.');
  }), this.options = f, this.tag = a, this.kind = f.kind || null, this.resolve = f.resolve || function() {
    return !0;
  }, this.construct = f.construct || function(d) {
    return d;
  }, this.instanceOf = f.instanceOf || null, this.predicate = f.predicate || null, this.represent = f.represent || null, this.representName = f.representName || null, this.defaultStyle = f.defaultStyle || null, this.multi = f.multi || !1, this.styleAliases = EL(f.styleAliases || null), SL.indexOf(this.kind) === -1)
    throw new zi('Unknown kind "' + this.kind + '" is specified for "' + a + '" YAML type.');
}
var ni = CL;
function rT(a, f) {
  var d = [];
  return a[f].forEach(function(S) {
    var C = d.length;
    d.forEach(function(w, h) {
      w.tag === S.tag && w.kind === S.kind && w.multi === S.multi && (C = h);
    }), d[C] = S;
  }), d;
}
function xL() {
  var a = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, f, d;
  function S(C) {
    C.multi ? (a.multi[C.kind].push(C), a.multi.fallback.push(C)) : a[C.kind][C.tag] = a.fallback[C.tag] = C;
  }
  for (f = 0, d = arguments.length; f < d; f += 1)
    arguments[f].forEach(S);
  return a;
}
function jE(a) {
  return this.extend(a);
}
jE.prototype.extend = function(f) {
  var d = [], S = [];
  if (f instanceof ni)
    S.push(f);
  else if (Array.isArray(f))
    S = S.concat(f);
  else if (f && (Array.isArray(f.implicit) || Array.isArray(f.explicit)))
    f.implicit && (d = d.concat(f.implicit)), f.explicit && (S = S.concat(f.explicit));
  else
    throw new zi("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  d.forEach(function(w) {
    if (!(w instanceof ni))
      throw new zi("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (w.loadKind && w.loadKind !== "scalar")
      throw new zi("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (w.multi)
      throw new zi("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), S.forEach(function(w) {
    if (!(w instanceof ni))
      throw new zi("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var C = Object.create(jE.prototype);
  return C.implicit = (this.implicit || []).concat(d), C.explicit = (this.explicit || []).concat(S), C.compiledImplicit = rT(C, "implicit"), C.compiledExplicit = rT(C, "explicit"), C.compiledTypeMap = xL(C.compiledImplicit, C.compiledExplicit), C;
};
var qT = jE, KT = new ni("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(a) {
    return a !== null ? a : "";
  }
}), XT = new ni("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(a) {
    return a !== null ? a : [];
  }
}), JT = new ni("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(a) {
    return a !== null ? a : {};
  }
}), ZT = new qT({
  explicit: [
    KT,
    XT,
    JT
  ]
});
function wL(a) {
  if (a === null)
    return !0;
  var f = a.length;
  return f === 1 && a === "~" || f === 4 && (a === "null" || a === "Null" || a === "NULL");
}
function TL() {
  return null;
}
function RL(a) {
  return a === null;
}
var eR = new ni("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: wL,
  construct: TL,
  predicate: RL,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function bL(a) {
  if (a === null)
    return !1;
  var f = a.length;
  return f === 4 && (a === "true" || a === "True" || a === "TRUE") || f === 5 && (a === "false" || a === "False" || a === "FALSE");
}
function _L(a) {
  return a === "true" || a === "True" || a === "TRUE";
}
function kL(a) {
  return Object.prototype.toString.call(a) === "[object Boolean]";
}
var tR = new ni("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: bL,
  construct: _L,
  predicate: kL,
  represent: {
    lowercase: function(a) {
      return a ? "true" : "false";
    },
    uppercase: function(a) {
      return a ? "TRUE" : "FALSE";
    },
    camelcase: function(a) {
      return a ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function DL(a) {
  return 48 <= a && a <= 57 || 65 <= a && a <= 70 || 97 <= a && a <= 102;
}
function OL(a) {
  return 48 <= a && a <= 55;
}
function AL(a) {
  return 48 <= a && a <= 57;
}
function LL(a) {
  if (a === null)
    return !1;
  var f = a.length, d = 0, S = !1, C;
  if (!f)
    return !1;
  if (C = a[d], (C === "-" || C === "+") && (C = a[++d]), C === "0") {
    if (d + 1 === f)
      return !0;
    if (C = a[++d], C === "b") {
      for (d++; d < f; d++)
        if (C = a[d], C !== "_") {
          if (C !== "0" && C !== "1")
            return !1;
          S = !0;
        }
      return S && C !== "_";
    }
    if (C === "x") {
      for (d++; d < f; d++)
        if (C = a[d], C !== "_") {
          if (!DL(a.charCodeAt(d)))
            return !1;
          S = !0;
        }
      return S && C !== "_";
    }
    if (C === "o") {
      for (d++; d < f; d++)
        if (C = a[d], C !== "_") {
          if (!OL(a.charCodeAt(d)))
            return !1;
          S = !0;
        }
      return S && C !== "_";
    }
  }
  if (C === "_")
    return !1;
  for (; d < f; d++)
    if (C = a[d], C !== "_") {
      if (!AL(a.charCodeAt(d)))
        return !1;
      S = !0;
    }
  return !(!S || C === "_");
}
function NL(a) {
  var f = a, d = 1, S;
  if (f.indexOf("_") !== -1 && (f = f.replace(/_/g, "")), S = f[0], (S === "-" || S === "+") && (S === "-" && (d = -1), f = f.slice(1), S = f[0]), f === "0")
    return 0;
  if (S === "0") {
    if (f[1] === "b")
      return d * parseInt(f.slice(2), 2);
    if (f[1] === "x")
      return d * parseInt(f.slice(2), 16);
    if (f[1] === "o")
      return d * parseInt(f.slice(2), 8);
  }
  return d * parseInt(f, 10);
}
function ML(a) {
  return Object.prototype.toString.call(a) === "[object Number]" && a % 1 === 0 && !Ar.isNegativeZero(a);
}
var nR = new ni("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: LL,
  construct: NL,
  predicate: ML,
  represent: {
    binary: function(a) {
      return a >= 0 ? "0b" + a.toString(2) : "-0b" + a.toString(2).slice(1);
    },
    octal: function(a) {
      return a >= 0 ? "0o" + a.toString(8) : "-0o" + a.toString(8).slice(1);
    },
    decimal: function(a) {
      return a.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(a) {
      return a >= 0 ? "0x" + a.toString(16).toUpperCase() : "-0x" + a.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), FL = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function UL(a) {
  return !(a === null || !FL.test(a) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  a[a.length - 1] === "_");
}
function zL(a) {
  var f, d;
  return f = a.replace(/_/g, "").toLowerCase(), d = f[0] === "-" ? -1 : 1, "+-".indexOf(f[0]) >= 0 && (f = f.slice(1)), f === ".inf" ? d === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : f === ".nan" ? NaN : d * parseFloat(f, 10);
}
var BL = /^[-+]?[0-9]+e/;
function jL(a, f) {
  var d;
  if (isNaN(a))
    switch (f) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === a)
    switch (f) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === a)
    switch (f) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (Ar.isNegativeZero(a))
    return "-0.0";
  return d = a.toString(10), BL.test(d) ? d.replace("e", ".e") : d;
}
function PL(a) {
  return Object.prototype.toString.call(a) === "[object Number]" && (a % 1 !== 0 || Ar.isNegativeZero(a));
}
var rR = new ni("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: UL,
  construct: zL,
  predicate: PL,
  represent: jL,
  defaultStyle: "lowercase"
}), iR = ZT.extend({
  implicit: [
    eR,
    tR,
    nR,
    rR
  ]
}), aR = iR, lR = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), oR = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function HL(a) {
  return a === null ? !1 : lR.exec(a) !== null || oR.exec(a) !== null;
}
function IL(a) {
  var f, d, S, C, w, h, A, L = 0, B = null, D, N, J;
  if (f = lR.exec(a), f === null && (f = oR.exec(a)), f === null)
    throw new Error("Date resolve error");
  if (d = +f[1], S = +f[2] - 1, C = +f[3], !f[4])
    return new Date(Date.UTC(d, S, C));
  if (w = +f[4], h = +f[5], A = +f[6], f[7]) {
    for (L = f[7].slice(0, 3); L.length < 3; )
      L += "0";
    L = +L;
  }
  return f[9] && (D = +f[10], N = +(f[11] || 0), B = (D * 60 + N) * 6e4, f[9] === "-" && (B = -B)), J = new Date(Date.UTC(d, S, C, w, h, A, L)), B && J.setTime(J.getTime() - B), J;
}
function VL(a) {
  return a.toISOString();
}
var uR = new ni("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: HL,
  construct: IL,
  instanceOf: Date,
  represent: VL
});
function $L(a) {
  return a === "<<" || a === null;
}
var sR = new ni("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: $L
}), qE = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function YL(a) {
  if (a === null)
    return !1;
  var f, d, S = 0, C = a.length, w = qE;
  for (d = 0; d < C; d++)
    if (f = w.indexOf(a.charAt(d)), !(f > 64)) {
      if (f < 0)
        return !1;
      S += 6;
    }
  return S % 8 === 0;
}
function WL(a) {
  var f, d, S = a.replace(/[\r\n=]/g, ""), C = S.length, w = qE, h = 0, A = [];
  for (f = 0; f < C; f++)
    f % 4 === 0 && f && (A.push(h >> 16 & 255), A.push(h >> 8 & 255), A.push(h & 255)), h = h << 6 | w.indexOf(S.charAt(f));
  return d = C % 4 * 6, d === 0 ? (A.push(h >> 16 & 255), A.push(h >> 8 & 255), A.push(h & 255)) : d === 18 ? (A.push(h >> 10 & 255), A.push(h >> 2 & 255)) : d === 12 && A.push(h >> 4 & 255), new Uint8Array(A);
}
function QL(a) {
  var f = "", d = 0, S, C, w = a.length, h = qE;
  for (S = 0; S < w; S++)
    S % 3 === 0 && S && (f += h[d >> 18 & 63], f += h[d >> 12 & 63], f += h[d >> 6 & 63], f += h[d & 63]), d = (d << 8) + a[S];
  return C = w % 3, C === 0 ? (f += h[d >> 18 & 63], f += h[d >> 12 & 63], f += h[d >> 6 & 63], f += h[d & 63]) : C === 2 ? (f += h[d >> 10 & 63], f += h[d >> 4 & 63], f += h[d << 2 & 63], f += h[64]) : C === 1 && (f += h[d >> 2 & 63], f += h[d << 4 & 63], f += h[64], f += h[64]), f;
}
function GL(a) {
  return Object.prototype.toString.call(a) === "[object Uint8Array]";
}
var cR = new ni("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: YL,
  construct: WL,
  predicate: GL,
  represent: QL
}), qL = Object.prototype.hasOwnProperty, KL = Object.prototype.toString;
function XL(a) {
  if (a === null)
    return !0;
  var f = [], d, S, C, w, h, A = a;
  for (d = 0, S = A.length; d < S; d += 1) {
    if (C = A[d], h = !1, KL.call(C) !== "[object Object]")
      return !1;
    for (w in C)
      if (qL.call(C, w))
        if (!h)
          h = !0;
        else
          return !1;
    if (!h)
      return !1;
    if (f.indexOf(w) === -1)
      f.push(w);
    else
      return !1;
  }
  return !0;
}
function JL(a) {
  return a !== null ? a : [];
}
var fR = new ni("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: XL,
  construct: JL
}), ZL = Object.prototype.toString;
function eN(a) {
  if (a === null)
    return !0;
  var f, d, S, C, w, h = a;
  for (w = new Array(h.length), f = 0, d = h.length; f < d; f += 1) {
    if (S = h[f], ZL.call(S) !== "[object Object]" || (C = Object.keys(S), C.length !== 1))
      return !1;
    w[f] = [C[0], S[C[0]]];
  }
  return !0;
}
function tN(a) {
  if (a === null)
    return [];
  var f, d, S, C, w, h = a;
  for (w = new Array(h.length), f = 0, d = h.length; f < d; f += 1)
    S = h[f], C = Object.keys(S), w[f] = [C[0], S[C[0]]];
  return w;
}
var dR = new ni("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: eN,
  construct: tN
}), nN = Object.prototype.hasOwnProperty;
function rN(a) {
  if (a === null)
    return !0;
  var f, d = a;
  for (f in d)
    if (nN.call(d, f) && d[f] !== null)
      return !1;
  return !0;
}
function iN(a) {
  return a !== null ? a : {};
}
var pR = new ni("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: rN,
  construct: iN
}), KE = aR.extend({
  implicit: [
    uR,
    sR
  ],
  explicit: [
    cR,
    fR,
    dR,
    pR
  ]
}), gs = Object.prototype.hasOwnProperty, By = 1, hR = 2, vR = 3, jy = 4, _E = 1, aN = 2, iT = 3, lN = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, oN = /[\x85\u2028\u2029]/, uN = /[,\[\]\{\}]/, mR = /^(?:!|!!|![a-z\-]+!)$/i, yR = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function aT(a) {
  return Object.prototype.toString.call(a);
}
function co(a) {
  return a === 10 || a === 13;
}
function _c(a) {
  return a === 9 || a === 32;
}
function ca(a) {
  return a === 9 || a === 32 || a === 10 || a === 13;
}
function xd(a) {
  return a === 44 || a === 91 || a === 93 || a === 123 || a === 125;
}
function sN(a) {
  var f;
  return 48 <= a && a <= 57 ? a - 48 : (f = a | 32, 97 <= f && f <= 102 ? f - 97 + 10 : -1);
}
function cN(a) {
  return a === 120 ? 2 : a === 117 ? 4 : a === 85 ? 8 : 0;
}
function fN(a) {
  return 48 <= a && a <= 57 ? a - 48 : -1;
}
function lT(a) {
  return a === 48 ? "\0" : a === 97 ? "\x07" : a === 98 ? "\b" : a === 116 || a === 9 ? "	" : a === 110 ? `
` : a === 118 ? "\v" : a === 102 ? "\f" : a === 114 ? "\r" : a === 101 ? "\x1B" : a === 32 ? " " : a === 34 ? '"' : a === 47 ? "/" : a === 92 ? "\\" : a === 78 ? "" : a === 95 ? " " : a === 76 ? "\u2028" : a === 80 ? "\u2029" : "";
}
function dN(a) {
  return a <= 65535 ? String.fromCharCode(a) : String.fromCharCode(
    (a - 65536 >> 10) + 55296,
    (a - 65536 & 1023) + 56320
  );
}
var gR = new Array(256), SR = new Array(256);
for (var Ed = 0; Ed < 256; Ed++)
  gR[Ed] = lT(Ed) ? 1 : 0, SR[Ed] = lT(Ed);
function pN(a, f) {
  this.input = a, this.filename = f.filename || null, this.schema = f.schema || KE, this.onWarning = f.onWarning || null, this.legacy = f.legacy || !1, this.json = f.json || !1, this.listener = f.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = a.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function ER(a, f) {
  var d = {
    name: a.filename,
    buffer: a.input.slice(0, -1),
    // omit trailing \0
    position: a.position,
    line: a.line,
    column: a.position - a.lineStart
  };
  return d.snippet = yL(d), new zi(f, d);
}
function tt(a, f) {
  throw ER(a, f);
}
function Py(a, f) {
  a.onWarning && a.onWarning.call(null, ER(a, f));
}
var oT = {
  YAML: function(f, d, S) {
    var C, w, h;
    f.version !== null && tt(f, "duplication of %YAML directive"), S.length !== 1 && tt(f, "YAML directive accepts exactly one argument"), C = /^([0-9]+)\.([0-9]+)$/.exec(S[0]), C === null && tt(f, "ill-formed argument of the YAML directive"), w = parseInt(C[1], 10), h = parseInt(C[2], 10), w !== 1 && tt(f, "unacceptable YAML version of the document"), f.version = S[0], f.checkLineBreaks = h < 2, h !== 1 && h !== 2 && Py(f, "unsupported YAML version of the document");
  },
  TAG: function(f, d, S) {
    var C, w;
    S.length !== 2 && tt(f, "TAG directive accepts exactly two arguments"), C = S[0], w = S[1], mR.test(C) || tt(f, "ill-formed tag handle (first argument) of the TAG directive"), gs.call(f.tagMap, C) && tt(f, 'there is a previously declared suffix for "' + C + '" tag handle'), yR.test(w) || tt(f, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      w = decodeURIComponent(w);
    } catch {
      tt(f, "tag prefix is malformed: " + w);
    }
    f.tagMap[C] = w;
  }
};
function ys(a, f, d, S) {
  var C, w, h, A;
  if (f < d) {
    if (A = a.input.slice(f, d), S)
      for (C = 0, w = A.length; C < w; C += 1)
        h = A.charCodeAt(C), h === 9 || 32 <= h && h <= 1114111 || tt(a, "expected valid JSON character");
    else
      lN.test(A) && tt(a, "the stream contains non-printable characters");
    a.result += A;
  }
}
function uT(a, f, d, S) {
  var C, w, h, A;
  for (Ar.isObject(d) || tt(a, "cannot merge mappings; the provided source object is unacceptable"), C = Object.keys(d), h = 0, A = C.length; h < A; h += 1)
    w = C[h], gs.call(f, w) || (f[w] = d[w], S[w] = !0);
}
function wd(a, f, d, S, C, w, h, A, L) {
  var B, D;
  if (Array.isArray(C))
    for (C = Array.prototype.slice.call(C), B = 0, D = C.length; B < D; B += 1)
      Array.isArray(C[B]) && tt(a, "nested arrays are not supported inside keys"), typeof C == "object" && aT(C[B]) === "[object Object]" && (C[B] = "[object Object]");
  if (typeof C == "object" && aT(C) === "[object Object]" && (C = "[object Object]"), C = String(C), f === null && (f = {}), S === "tag:yaml.org,2002:merge")
    if (Array.isArray(w))
      for (B = 0, D = w.length; B < D; B += 1)
        uT(a, f, w[B], d);
    else
      uT(a, f, w, d);
  else
    !a.json && !gs.call(d, C) && gs.call(f, C) && (a.line = h || a.line, a.lineStart = A || a.lineStart, a.position = L || a.position, tt(a, "duplicated mapping key")), C === "__proto__" ? Object.defineProperty(f, C, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: w
    }) : f[C] = w, delete d[C];
  return f;
}
function XE(a) {
  var f;
  f = a.input.charCodeAt(a.position), f === 10 ? a.position++ : f === 13 ? (a.position++, a.input.charCodeAt(a.position) === 10 && a.position++) : tt(a, "a line break is expected"), a.line += 1, a.lineStart = a.position, a.firstTabInLine = -1;
}
function Sr(a, f, d) {
  for (var S = 0, C = a.input.charCodeAt(a.position); C !== 0; ) {
    for (; _c(C); )
      C === 9 && a.firstTabInLine === -1 && (a.firstTabInLine = a.position), C = a.input.charCodeAt(++a.position);
    if (f && C === 35)
      do
        C = a.input.charCodeAt(++a.position);
      while (C !== 10 && C !== 13 && C !== 0);
    if (co(C))
      for (XE(a), C = a.input.charCodeAt(a.position), S++, a.lineIndent = 0; C === 32; )
        a.lineIndent++, C = a.input.charCodeAt(++a.position);
    else
      break;
  }
  return d !== -1 && S !== 0 && a.lineIndent < d && Py(a, "deficient indentation"), S;
}
function Gy(a) {
  var f = a.position, d;
  return d = a.input.charCodeAt(f), !!((d === 45 || d === 46) && d === a.input.charCodeAt(f + 1) && d === a.input.charCodeAt(f + 2) && (f += 3, d = a.input.charCodeAt(f), d === 0 || ca(d)));
}
function JE(a, f) {
  f === 1 ? a.result += " " : f > 1 && (a.result += Ar.repeat(`
`, f - 1));
}
function hN(a, f, d) {
  var S, C, w, h, A, L, B, D, N = a.kind, J = a.result, K;
  if (K = a.input.charCodeAt(a.position), ca(K) || xd(K) || K === 35 || K === 38 || K === 42 || K === 33 || K === 124 || K === 62 || K === 39 || K === 34 || K === 37 || K === 64 || K === 96 || (K === 63 || K === 45) && (C = a.input.charCodeAt(a.position + 1), ca(C) || d && xd(C)))
    return !1;
  for (a.kind = "scalar", a.result = "", w = h = a.position, A = !1; K !== 0; ) {
    if (K === 58) {
      if (C = a.input.charCodeAt(a.position + 1), ca(C) || d && xd(C))
        break;
    } else if (K === 35) {
      if (S = a.input.charCodeAt(a.position - 1), ca(S))
        break;
    } else {
      if (a.position === a.lineStart && Gy(a) || d && xd(K))
        break;
      if (co(K))
        if (L = a.line, B = a.lineStart, D = a.lineIndent, Sr(a, !1, -1), a.lineIndent >= f) {
          A = !0, K = a.input.charCodeAt(a.position);
          continue;
        } else {
          a.position = h, a.line = L, a.lineStart = B, a.lineIndent = D;
          break;
        }
    }
    A && (ys(a, w, h, !1), JE(a, a.line - L), w = h = a.position, A = !1), _c(K) || (h = a.position + 1), K = a.input.charCodeAt(++a.position);
  }
  return ys(a, w, h, !1), a.result ? !0 : (a.kind = N, a.result = J, !1);
}
function vN(a, f) {
  var d, S, C;
  if (d = a.input.charCodeAt(a.position), d !== 39)
    return !1;
  for (a.kind = "scalar", a.result = "", a.position++, S = C = a.position; (d = a.input.charCodeAt(a.position)) !== 0; )
    if (d === 39)
      if (ys(a, S, a.position, !0), d = a.input.charCodeAt(++a.position), d === 39)
        S = a.position, a.position++, C = a.position;
      else
        return !0;
    else
      co(d) ? (ys(a, S, C, !0), JE(a, Sr(a, !1, f)), S = C = a.position) : a.position === a.lineStart && Gy(a) ? tt(a, "unexpected end of the document within a single quoted scalar") : (a.position++, C = a.position);
  tt(a, "unexpected end of the stream within a single quoted scalar");
}
function mN(a, f) {
  var d, S, C, w, h, A;
  if (A = a.input.charCodeAt(a.position), A !== 34)
    return !1;
  for (a.kind = "scalar", a.result = "", a.position++, d = S = a.position; (A = a.input.charCodeAt(a.position)) !== 0; ) {
    if (A === 34)
      return ys(a, d, a.position, !0), a.position++, !0;
    if (A === 92) {
      if (ys(a, d, a.position, !0), A = a.input.charCodeAt(++a.position), co(A))
        Sr(a, !1, f);
      else if (A < 256 && gR[A])
        a.result += SR[A], a.position++;
      else if ((h = cN(A)) > 0) {
        for (C = h, w = 0; C > 0; C--)
          A = a.input.charCodeAt(++a.position), (h = sN(A)) >= 0 ? w = (w << 4) + h : tt(a, "expected hexadecimal character");
        a.result += dN(w), a.position++;
      } else
        tt(a, "unknown escape sequence");
      d = S = a.position;
    } else
      co(A) ? (ys(a, d, S, !0), JE(a, Sr(a, !1, f)), d = S = a.position) : a.position === a.lineStart && Gy(a) ? tt(a, "unexpected end of the document within a double quoted scalar") : (a.position++, S = a.position);
  }
  tt(a, "unexpected end of the stream within a double quoted scalar");
}
function yN(a, f) {
  var d = !0, S, C, w, h = a.tag, A, L = a.anchor, B, D, N, J, K, te = /* @__PURE__ */ Object.create(null), ue, Ce, nt, Ee;
  if (Ee = a.input.charCodeAt(a.position), Ee === 91)
    D = 93, K = !1, A = [];
  else if (Ee === 123)
    D = 125, K = !0, A = {};
  else
    return !1;
  for (a.anchor !== null && (a.anchorMap[a.anchor] = A), Ee = a.input.charCodeAt(++a.position); Ee !== 0; ) {
    if (Sr(a, !0, f), Ee = a.input.charCodeAt(a.position), Ee === D)
      return a.position++, a.tag = h, a.anchor = L, a.kind = K ? "mapping" : "sequence", a.result = A, !0;
    d ? Ee === 44 && tt(a, "expected the node content, but found ','") : tt(a, "missed comma between flow collection entries"), Ce = ue = nt = null, N = J = !1, Ee === 63 && (B = a.input.charCodeAt(a.position + 1), ca(B) && (N = J = !0, a.position++, Sr(a, !0, f))), S = a.line, C = a.lineStart, w = a.position, bd(a, f, By, !1, !0), Ce = a.tag, ue = a.result, Sr(a, !0, f), Ee = a.input.charCodeAt(a.position), (J || a.line === S) && Ee === 58 && (N = !0, Ee = a.input.charCodeAt(++a.position), Sr(a, !0, f), bd(a, f, By, !1, !0), nt = a.result), K ? wd(a, A, te, Ce, ue, nt, S, C, w) : N ? A.push(wd(a, null, te, Ce, ue, nt, S, C, w)) : A.push(ue), Sr(a, !0, f), Ee = a.input.charCodeAt(a.position), Ee === 44 ? (d = !0, Ee = a.input.charCodeAt(++a.position)) : d = !1;
  }
  tt(a, "unexpected end of the stream within a flow collection");
}
function gN(a, f) {
  var d, S, C = _E, w = !1, h = !1, A = f, L = 0, B = !1, D, N;
  if (N = a.input.charCodeAt(a.position), N === 124)
    S = !1;
  else if (N === 62)
    S = !0;
  else
    return !1;
  for (a.kind = "scalar", a.result = ""; N !== 0; )
    if (N = a.input.charCodeAt(++a.position), N === 43 || N === 45)
      _E === C ? C = N === 43 ? iT : aN : tt(a, "repeat of a chomping mode identifier");
    else if ((D = fN(N)) >= 0)
      D === 0 ? tt(a, "bad explicit indentation width of a block scalar; it cannot be less than one") : h ? tt(a, "repeat of an indentation width identifier") : (A = f + D - 1, h = !0);
    else
      break;
  if (_c(N)) {
    do
      N = a.input.charCodeAt(++a.position);
    while (_c(N));
    if (N === 35)
      do
        N = a.input.charCodeAt(++a.position);
      while (!co(N) && N !== 0);
  }
  for (; N !== 0; ) {
    for (XE(a), a.lineIndent = 0, N = a.input.charCodeAt(a.position); (!h || a.lineIndent < A) && N === 32; )
      a.lineIndent++, N = a.input.charCodeAt(++a.position);
    if (!h && a.lineIndent > A && (A = a.lineIndent), co(N)) {
      L++;
      continue;
    }
    if (a.lineIndent < A) {
      C === iT ? a.result += Ar.repeat(`
`, w ? 1 + L : L) : C === _E && w && (a.result += `
`);
      break;
    }
    for (S ? _c(N) ? (B = !0, a.result += Ar.repeat(`
`, w ? 1 + L : L)) : B ? (B = !1, a.result += Ar.repeat(`
`, L + 1)) : L === 0 ? w && (a.result += " ") : a.result += Ar.repeat(`
`, L) : a.result += Ar.repeat(`
`, w ? 1 + L : L), w = !0, h = !0, L = 0, d = a.position; !co(N) && N !== 0; )
      N = a.input.charCodeAt(++a.position);
    ys(a, d, a.position, !1);
  }
  return !0;
}
function sT(a, f) {
  var d, S = a.tag, C = a.anchor, w = [], h, A = !1, L;
  if (a.firstTabInLine !== -1)
    return !1;
  for (a.anchor !== null && (a.anchorMap[a.anchor] = w), L = a.input.charCodeAt(a.position); L !== 0 && (a.firstTabInLine !== -1 && (a.position = a.firstTabInLine, tt(a, "tab characters must not be used in indentation")), !(L !== 45 || (h = a.input.charCodeAt(a.position + 1), !ca(h)))); ) {
    if (A = !0, a.position++, Sr(a, !0, -1) && a.lineIndent <= f) {
      w.push(null), L = a.input.charCodeAt(a.position);
      continue;
    }
    if (d = a.line, bd(a, f, vR, !1, !0), w.push(a.result), Sr(a, !0, -1), L = a.input.charCodeAt(a.position), (a.line === d || a.lineIndent > f) && L !== 0)
      tt(a, "bad indentation of a sequence entry");
    else if (a.lineIndent < f)
      break;
  }
  return A ? (a.tag = S, a.anchor = C, a.kind = "sequence", a.result = w, !0) : !1;
}
function SN(a, f, d) {
  var S, C, w, h, A, L, B = a.tag, D = a.anchor, N = {}, J = /* @__PURE__ */ Object.create(null), K = null, te = null, ue = null, Ce = !1, nt = !1, Ee;
  if (a.firstTabInLine !== -1)
    return !1;
  for (a.anchor !== null && (a.anchorMap[a.anchor] = N), Ee = a.input.charCodeAt(a.position); Ee !== 0; ) {
    if (!Ce && a.firstTabInLine !== -1 && (a.position = a.firstTabInLine, tt(a, "tab characters must not be used in indentation")), S = a.input.charCodeAt(a.position + 1), w = a.line, (Ee === 63 || Ee === 58) && ca(S))
      Ee === 63 ? (Ce && (wd(a, N, J, K, te, null, h, A, L), K = te = ue = null), nt = !0, Ce = !0, C = !0) : Ce ? (Ce = !1, C = !0) : tt(a, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), a.position += 1, Ee = S;
    else {
      if (h = a.line, A = a.lineStart, L = a.position, !bd(a, d, hR, !1, !0))
        break;
      if (a.line === w) {
        for (Ee = a.input.charCodeAt(a.position); _c(Ee); )
          Ee = a.input.charCodeAt(++a.position);
        if (Ee === 58)
          Ee = a.input.charCodeAt(++a.position), ca(Ee) || tt(a, "a whitespace character is expected after the key-value separator within a block mapping"), Ce && (wd(a, N, J, K, te, null, h, A, L), K = te = ue = null), nt = !0, Ce = !1, C = !1, K = a.tag, te = a.result;
        else if (nt)
          tt(a, "can not read an implicit mapping pair; a colon is missed");
        else
          return a.tag = B, a.anchor = D, !0;
      } else if (nt)
        tt(a, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return a.tag = B, a.anchor = D, !0;
    }
    if ((a.line === w || a.lineIndent > f) && (Ce && (h = a.line, A = a.lineStart, L = a.position), bd(a, f, jy, !0, C) && (Ce ? te = a.result : ue = a.result), Ce || (wd(a, N, J, K, te, ue, h, A, L), K = te = ue = null), Sr(a, !0, -1), Ee = a.input.charCodeAt(a.position)), (a.line === w || a.lineIndent > f) && Ee !== 0)
      tt(a, "bad indentation of a mapping entry");
    else if (a.lineIndent < f)
      break;
  }
  return Ce && wd(a, N, J, K, te, null, h, A, L), nt && (a.tag = B, a.anchor = D, a.kind = "mapping", a.result = N), nt;
}
function EN(a) {
  var f, d = !1, S = !1, C, w, h;
  if (h = a.input.charCodeAt(a.position), h !== 33)
    return !1;
  if (a.tag !== null && tt(a, "duplication of a tag property"), h = a.input.charCodeAt(++a.position), h === 60 ? (d = !0, h = a.input.charCodeAt(++a.position)) : h === 33 ? (S = !0, C = "!!", h = a.input.charCodeAt(++a.position)) : C = "!", f = a.position, d) {
    do
      h = a.input.charCodeAt(++a.position);
    while (h !== 0 && h !== 62);
    a.position < a.length ? (w = a.input.slice(f, a.position), h = a.input.charCodeAt(++a.position)) : tt(a, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; h !== 0 && !ca(h); )
      h === 33 && (S ? tt(a, "tag suffix cannot contain exclamation marks") : (C = a.input.slice(f - 1, a.position + 1), mR.test(C) || tt(a, "named tag handle cannot contain such characters"), S = !0, f = a.position + 1)), h = a.input.charCodeAt(++a.position);
    w = a.input.slice(f, a.position), uN.test(w) && tt(a, "tag suffix cannot contain flow indicator characters");
  }
  w && !yR.test(w) && tt(a, "tag name cannot contain such characters: " + w);
  try {
    w = decodeURIComponent(w);
  } catch {
    tt(a, "tag name is malformed: " + w);
  }
  return d ? a.tag = w : gs.call(a.tagMap, C) ? a.tag = a.tagMap[C] + w : C === "!" ? a.tag = "!" + w : C === "!!" ? a.tag = "tag:yaml.org,2002:" + w : tt(a, 'undeclared tag handle "' + C + '"'), !0;
}
function CN(a) {
  var f, d;
  if (d = a.input.charCodeAt(a.position), d !== 38)
    return !1;
  for (a.anchor !== null && tt(a, "duplication of an anchor property"), d = a.input.charCodeAt(++a.position), f = a.position; d !== 0 && !ca(d) && !xd(d); )
    d = a.input.charCodeAt(++a.position);
  return a.position === f && tt(a, "name of an anchor node must contain at least one character"), a.anchor = a.input.slice(f, a.position), !0;
}
function xN(a) {
  var f, d, S;
  if (S = a.input.charCodeAt(a.position), S !== 42)
    return !1;
  for (S = a.input.charCodeAt(++a.position), f = a.position; S !== 0 && !ca(S) && !xd(S); )
    S = a.input.charCodeAt(++a.position);
  return a.position === f && tt(a, "name of an alias node must contain at least one character"), d = a.input.slice(f, a.position), gs.call(a.anchorMap, d) || tt(a, 'unidentified alias "' + d + '"'), a.result = a.anchorMap[d], Sr(a, !0, -1), !0;
}
function bd(a, f, d, S, C) {
  var w, h, A, L = 1, B = !1, D = !1, N, J, K, te, ue, Ce;
  if (a.listener !== null && a.listener("open", a), a.tag = null, a.anchor = null, a.kind = null, a.result = null, w = h = A = jy === d || vR === d, S && Sr(a, !0, -1) && (B = !0, a.lineIndent > f ? L = 1 : a.lineIndent === f ? L = 0 : a.lineIndent < f && (L = -1)), L === 1)
    for (; EN(a) || CN(a); )
      Sr(a, !0, -1) ? (B = !0, A = w, a.lineIndent > f ? L = 1 : a.lineIndent === f ? L = 0 : a.lineIndent < f && (L = -1)) : A = !1;
  if (A && (A = B || C), (L === 1 || jy === d) && (By === d || hR === d ? ue = f : ue = f + 1, Ce = a.position - a.lineStart, L === 1 ? A && (sT(a, Ce) || SN(a, Ce, ue)) || yN(a, ue) ? D = !0 : (h && gN(a, ue) || vN(a, ue) || mN(a, ue) ? D = !0 : xN(a) ? (D = !0, (a.tag !== null || a.anchor !== null) && tt(a, "alias node should not have any properties")) : hN(a, ue, By === d) && (D = !0, a.tag === null && (a.tag = "?")), a.anchor !== null && (a.anchorMap[a.anchor] = a.result)) : L === 0 && (D = A && sT(a, Ce))), a.tag === null)
    a.anchor !== null && (a.anchorMap[a.anchor] = a.result);
  else if (a.tag === "?") {
    for (a.result !== null && a.kind !== "scalar" && tt(a, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + a.kind + '"'), N = 0, J = a.implicitTypes.length; N < J; N += 1)
      if (te = a.implicitTypes[N], te.resolve(a.result)) {
        a.result = te.construct(a.result), a.tag = te.tag, a.anchor !== null && (a.anchorMap[a.anchor] = a.result);
        break;
      }
  } else if (a.tag !== "!") {
    if (gs.call(a.typeMap[a.kind || "fallback"], a.tag))
      te = a.typeMap[a.kind || "fallback"][a.tag];
    else
      for (te = null, K = a.typeMap.multi[a.kind || "fallback"], N = 0, J = K.length; N < J; N += 1)
        if (a.tag.slice(0, K[N].tag.length) === K[N].tag) {
          te = K[N];
          break;
        }
    te || tt(a, "unknown tag !<" + a.tag + ">"), a.result !== null && te.kind !== a.kind && tt(a, "unacceptable node kind for !<" + a.tag + '> tag; it should be "' + te.kind + '", not "' + a.kind + '"'), te.resolve(a.result, a.tag) ? (a.result = te.construct(a.result, a.tag), a.anchor !== null && (a.anchorMap[a.anchor] = a.result)) : tt(a, "cannot resolve a node with !<" + a.tag + "> explicit tag");
  }
  return a.listener !== null && a.listener("close", a), a.tag !== null || a.anchor !== null || D;
}
function wN(a) {
  var f = a.position, d, S, C, w = !1, h;
  for (a.version = null, a.checkLineBreaks = a.legacy, a.tagMap = /* @__PURE__ */ Object.create(null), a.anchorMap = /* @__PURE__ */ Object.create(null); (h = a.input.charCodeAt(a.position)) !== 0 && (Sr(a, !0, -1), h = a.input.charCodeAt(a.position), !(a.lineIndent > 0 || h !== 37)); ) {
    for (w = !0, h = a.input.charCodeAt(++a.position), d = a.position; h !== 0 && !ca(h); )
      h = a.input.charCodeAt(++a.position);
    for (S = a.input.slice(d, a.position), C = [], S.length < 1 && tt(a, "directive name must not be less than one character in length"); h !== 0; ) {
      for (; _c(h); )
        h = a.input.charCodeAt(++a.position);
      if (h === 35) {
        do
          h = a.input.charCodeAt(++a.position);
        while (h !== 0 && !co(h));
        break;
      }
      if (co(h))
        break;
      for (d = a.position; h !== 0 && !ca(h); )
        h = a.input.charCodeAt(++a.position);
      C.push(a.input.slice(d, a.position));
    }
    h !== 0 && XE(a), gs.call(oT, S) ? oT[S](a, S, C) : Py(a, 'unknown document directive "' + S + '"');
  }
  if (Sr(a, !0, -1), a.lineIndent === 0 && a.input.charCodeAt(a.position) === 45 && a.input.charCodeAt(a.position + 1) === 45 && a.input.charCodeAt(a.position + 2) === 45 ? (a.position += 3, Sr(a, !0, -1)) : w && tt(a, "directives end mark is expected"), bd(a, a.lineIndent - 1, jy, !1, !0), Sr(a, !0, -1), a.checkLineBreaks && oN.test(a.input.slice(f, a.position)) && Py(a, "non-ASCII line breaks are interpreted as content"), a.documents.push(a.result), a.position === a.lineStart && Gy(a)) {
    a.input.charCodeAt(a.position) === 46 && (a.position += 3, Sr(a, !0, -1));
    return;
  }
  if (a.position < a.length - 1)
    tt(a, "end of the stream or a document separator is expected");
  else
    return;
}
function CR(a, f) {
  a = String(a), f = f || {}, a.length !== 0 && (a.charCodeAt(a.length - 1) !== 10 && a.charCodeAt(a.length - 1) !== 13 && (a += `
`), a.charCodeAt(0) === 65279 && (a = a.slice(1)));
  var d = new pN(a, f), S = a.indexOf("\0");
  for (S !== -1 && (d.position = S, tt(d, "null byte is not allowed in input")), d.input += "\0"; d.input.charCodeAt(d.position) === 32; )
    d.lineIndent += 1, d.position += 1;
  for (; d.position < d.length - 1; )
    wN(d);
  return d.documents;
}
function TN(a, f, d) {
  f !== null && typeof f == "object" && typeof d > "u" && (d = f, f = null);
  var S = CR(a, d);
  if (typeof f != "function")
    return S;
  for (var C = 0, w = S.length; C < w; C += 1)
    f(S[C]);
}
function RN(a, f) {
  var d = CR(a, f);
  if (d.length !== 0) {
    if (d.length === 1)
      return d[0];
    throw new zi("expected a single document in the stream, but found more");
  }
}
var bN = TN, _N = RN, xR = {
  loadAll: bN,
  load: _N
}, wR = Object.prototype.toString, TR = Object.prototype.hasOwnProperty, ZE = 65279, kN = 9, Bh = 10, DN = 13, ON = 32, AN = 33, LN = 34, PE = 35, NN = 37, MN = 38, FN = 39, UN = 42, RR = 44, zN = 45, Hy = 58, BN = 61, jN = 62, PN = 63, HN = 64, bR = 91, _R = 93, IN = 96, kR = 123, VN = 124, DR = 125, xi = {};
xi[0] = "\\0";
xi[7] = "\\a";
xi[8] = "\\b";
xi[9] = "\\t";
xi[10] = "\\n";
xi[11] = "\\v";
xi[12] = "\\f";
xi[13] = "\\r";
xi[27] = "\\e";
xi[34] = '\\"';
xi[92] = "\\\\";
xi[133] = "\\N";
xi[160] = "\\_";
xi[8232] = "\\L";
xi[8233] = "\\P";
var $N = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
], YN = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function WN(a, f) {
  var d, S, C, w, h, A, L;
  if (f === null)
    return {};
  for (d = {}, S = Object.keys(f), C = 0, w = S.length; C < w; C += 1)
    h = S[C], A = String(f[h]), h.slice(0, 2) === "!!" && (h = "tag:yaml.org,2002:" + h.slice(2)), L = a.compiledTypeMap.fallback[h], L && TR.call(L.styleAliases, A) && (A = L.styleAliases[A]), d[h] = A;
  return d;
}
function QN(a) {
  var f, d, S;
  if (f = a.toString(16).toUpperCase(), a <= 255)
    d = "x", S = 2;
  else if (a <= 65535)
    d = "u", S = 4;
  else if (a <= 4294967295)
    d = "U", S = 8;
  else
    throw new zi("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + d + Ar.repeat("0", S - f.length) + f;
}
var GN = 1, jh = 2;
function qN(a) {
  this.schema = a.schema || KE, this.indent = Math.max(1, a.indent || 2), this.noArrayIndent = a.noArrayIndent || !1, this.skipInvalid = a.skipInvalid || !1, this.flowLevel = Ar.isNothing(a.flowLevel) ? -1 : a.flowLevel, this.styleMap = WN(this.schema, a.styles || null), this.sortKeys = a.sortKeys || !1, this.lineWidth = a.lineWidth || 80, this.noRefs = a.noRefs || !1, this.noCompatMode = a.noCompatMode || !1, this.condenseFlow = a.condenseFlow || !1, this.quotingType = a.quotingType === '"' ? jh : GN, this.forceQuotes = a.forceQuotes || !1, this.replacer = typeof a.replacer == "function" ? a.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function cT(a, f) {
  for (var d = Ar.repeat(" ", f), S = 0, C = -1, w = "", h, A = a.length; S < A; )
    C = a.indexOf(`
`, S), C === -1 ? (h = a.slice(S), S = A) : (h = a.slice(S, C + 1), S = C + 1), h.length && h !== `
` && (w += d), w += h;
  return w;
}
function HE(a, f) {
  return `
` + Ar.repeat(" ", a.indent * f);
}
function KN(a, f) {
  var d, S, C;
  for (d = 0, S = a.implicitTypes.length; d < S; d += 1)
    if (C = a.implicitTypes[d], C.resolve(f))
      return !0;
  return !1;
}
function Iy(a) {
  return a === ON || a === kN;
}
function Ph(a) {
  return 32 <= a && a <= 126 || 161 <= a && a <= 55295 && a !== 8232 && a !== 8233 || 57344 <= a && a <= 65533 && a !== ZE || 65536 <= a && a <= 1114111;
}
function fT(a) {
  return Ph(a) && a !== ZE && a !== DN && a !== Bh;
}
function dT(a, f, d) {
  var S = fT(a), C = S && !Iy(a);
  return (
    // ns-plain-safe
    (d ? (
      // c = flow-in
      S
    ) : S && a !== RR && a !== bR && a !== _R && a !== kR && a !== DR) && a !== PE && !(f === Hy && !C) || fT(f) && !Iy(f) && a === PE || f === Hy && C
  );
}
function XN(a) {
  return Ph(a) && a !== ZE && !Iy(a) && a !== zN && a !== PN && a !== Hy && a !== RR && a !== bR && a !== _R && a !== kR && a !== DR && a !== PE && a !== MN && a !== UN && a !== AN && a !== VN && a !== BN && a !== jN && a !== FN && a !== LN && a !== NN && a !== HN && a !== IN;
}
function JN(a) {
  return !Iy(a) && a !== Hy;
}
function Fh(a, f) {
  var d = a.charCodeAt(f), S;
  return d >= 55296 && d <= 56319 && f + 1 < a.length && (S = a.charCodeAt(f + 1), S >= 56320 && S <= 57343) ? (d - 55296) * 1024 + S - 56320 + 65536 : d;
}
function OR(a) {
  var f = /^\n* /;
  return f.test(a);
}
var AR = 1, IE = 2, LR = 3, NR = 4, Cd = 5;
function ZN(a, f, d, S, C, w, h, A) {
  var L, B = 0, D = null, N = !1, J = !1, K = S !== -1, te = -1, ue = XN(Fh(a, 0)) && JN(Fh(a, a.length - 1));
  if (f || h)
    for (L = 0; L < a.length; B >= 65536 ? L += 2 : L++) {
      if (B = Fh(a, L), !Ph(B))
        return Cd;
      ue = ue && dT(B, D, A), D = B;
    }
  else {
    for (L = 0; L < a.length; B >= 65536 ? L += 2 : L++) {
      if (B = Fh(a, L), B === Bh)
        N = !0, K && (J = J || // Foldable line = too long, and not more-indented.
        L - te - 1 > S && a[te + 1] !== " ", te = L);
      else if (!Ph(B))
        return Cd;
      ue = ue && dT(B, D, A), D = B;
    }
    J = J || K && L - te - 1 > S && a[te + 1] !== " ";
  }
  return !N && !J ? ue && !h && !C(a) ? AR : w === jh ? Cd : IE : d > 9 && OR(a) ? Cd : h ? w === jh ? Cd : IE : J ? NR : LR;
}
function eM(a, f, d, S, C) {
  a.dump = function() {
    if (f.length === 0)
      return a.quotingType === jh ? '""' : "''";
    if (!a.noCompatMode && ($N.indexOf(f) !== -1 || YN.test(f)))
      return a.quotingType === jh ? '"' + f + '"' : "'" + f + "'";
    var w = a.indent * Math.max(1, d), h = a.lineWidth === -1 ? -1 : Math.max(Math.min(a.lineWidth, 40), a.lineWidth - w), A = S || a.flowLevel > -1 && d >= a.flowLevel;
    function L(B) {
      return KN(a, B);
    }
    switch (ZN(
      f,
      A,
      a.indent,
      h,
      L,
      a.quotingType,
      a.forceQuotes && !S,
      C
    )) {
      case AR:
        return f;
      case IE:
        return "'" + f.replace(/'/g, "''") + "'";
      case LR:
        return "|" + pT(f, a.indent) + hT(cT(f, w));
      case NR:
        return ">" + pT(f, a.indent) + hT(cT(tM(f, h), w));
      case Cd:
        return '"' + nM(f) + '"';
      default:
        throw new zi("impossible error: invalid scalar style");
    }
  }();
}
function pT(a, f) {
  var d = OR(a) ? String(f) : "", S = a[a.length - 1] === `
`, C = S && (a[a.length - 2] === `
` || a === `
`), w = C ? "+" : S ? "" : "-";
  return d + w + `
`;
}
function hT(a) {
  return a[a.length - 1] === `
` ? a.slice(0, -1) : a;
}
function tM(a, f) {
  for (var d = /(\n+)([^\n]*)/g, S = function() {
    var B = a.indexOf(`
`);
    return B = B !== -1 ? B : a.length, d.lastIndex = B, vT(a.slice(0, B), f);
  }(), C = a[0] === `
` || a[0] === " ", w, h; h = d.exec(a); ) {
    var A = h[1], L = h[2];
    w = L[0] === " ", S += A + (!C && !w && L !== "" ? `
` : "") + vT(L, f), C = w;
  }
  return S;
}
function vT(a, f) {
  if (a === "" || a[0] === " ")
    return a;
  for (var d = / [^ ]/g, S, C = 0, w, h = 0, A = 0, L = ""; S = d.exec(a); )
    A = S.index, A - C > f && (w = h > C ? h : A, L += `
` + a.slice(C, w), C = w + 1), h = A;
  return L += `
`, a.length - C > f && h > C ? L += a.slice(C, h) + `
` + a.slice(h + 1) : L += a.slice(C), L.slice(1);
}
function nM(a) {
  for (var f = "", d = 0, S, C = 0; C < a.length; d >= 65536 ? C += 2 : C++)
    d = Fh(a, C), S = xi[d], !S && Ph(d) ? (f += a[C], d >= 65536 && (f += a[C + 1])) : f += S || QN(d);
  return f;
}
function rM(a, f, d) {
  var S = "", C = a.tag, w, h, A;
  for (w = 0, h = d.length; w < h; w += 1)
    A = d[w], a.replacer && (A = a.replacer.call(d, String(w), A)), (nu(a, f, A, !1, !1) || typeof A > "u" && nu(a, f, null, !1, !1)) && (S !== "" && (S += "," + (a.condenseFlow ? "" : " ")), S += a.dump);
  a.tag = C, a.dump = "[" + S + "]";
}
function mT(a, f, d, S) {
  var C = "", w = a.tag, h, A, L;
  for (h = 0, A = d.length; h < A; h += 1)
    L = d[h], a.replacer && (L = a.replacer.call(d, String(h), L)), (nu(a, f + 1, L, !0, !0, !1, !0) || typeof L > "u" && nu(a, f + 1, null, !0, !0, !1, !0)) && ((!S || C !== "") && (C += HE(a, f)), a.dump && Bh === a.dump.charCodeAt(0) ? C += "-" : C += "- ", C += a.dump);
  a.tag = w, a.dump = C || "[]";
}
function iM(a, f, d) {
  var S = "", C = a.tag, w = Object.keys(d), h, A, L, B, D;
  for (h = 0, A = w.length; h < A; h += 1)
    D = "", S !== "" && (D += ", "), a.condenseFlow && (D += '"'), L = w[h], B = d[L], a.replacer && (B = a.replacer.call(d, L, B)), nu(a, f, L, !1, !1) && (a.dump.length > 1024 && (D += "? "), D += a.dump + (a.condenseFlow ? '"' : "") + ":" + (a.condenseFlow ? "" : " "), nu(a, f, B, !1, !1) && (D += a.dump, S += D));
  a.tag = C, a.dump = "{" + S + "}";
}
function aM(a, f, d, S) {
  var C = "", w = a.tag, h = Object.keys(d), A, L, B, D, N, J;
  if (a.sortKeys === !0)
    h.sort();
  else if (typeof a.sortKeys == "function")
    h.sort(a.sortKeys);
  else if (a.sortKeys)
    throw new zi("sortKeys must be a boolean or a function");
  for (A = 0, L = h.length; A < L; A += 1)
    J = "", (!S || C !== "") && (J += HE(a, f)), B = h[A], D = d[B], a.replacer && (D = a.replacer.call(d, B, D)), nu(a, f + 1, B, !0, !0, !0) && (N = a.tag !== null && a.tag !== "?" || a.dump && a.dump.length > 1024, N && (a.dump && Bh === a.dump.charCodeAt(0) ? J += "?" : J += "? "), J += a.dump, N && (J += HE(a, f)), nu(a, f + 1, D, !0, N) && (a.dump && Bh === a.dump.charCodeAt(0) ? J += ":" : J += ": ", J += a.dump, C += J));
  a.tag = w, a.dump = C || "{}";
}
function yT(a, f, d) {
  var S, C, w, h, A, L;
  for (C = d ? a.explicitTypes : a.implicitTypes, w = 0, h = C.length; w < h; w += 1)
    if (A = C[w], (A.instanceOf || A.predicate) && (!A.instanceOf || typeof f == "object" && f instanceof A.instanceOf) && (!A.predicate || A.predicate(f))) {
      if (d ? A.multi && A.representName ? a.tag = A.representName(f) : a.tag = A.tag : a.tag = "?", A.represent) {
        if (L = a.styleMap[A.tag] || A.defaultStyle, wR.call(A.represent) === "[object Function]")
          S = A.represent(f, L);
        else if (TR.call(A.represent, L))
          S = A.represent[L](f, L);
        else
          throw new zi("!<" + A.tag + '> tag resolver accepts not "' + L + '" style');
        a.dump = S;
      }
      return !0;
    }
  return !1;
}
function nu(a, f, d, S, C, w, h) {
  a.tag = null, a.dump = d, yT(a, d, !1) || yT(a, d, !0);
  var A = wR.call(a.dump), L = S, B;
  S && (S = a.flowLevel < 0 || a.flowLevel > f);
  var D = A === "[object Object]" || A === "[object Array]", N, J;
  if (D && (N = a.duplicates.indexOf(d), J = N !== -1), (a.tag !== null && a.tag !== "?" || J || a.indent !== 2 && f > 0) && (C = !1), J && a.usedDuplicates[N])
    a.dump = "*ref_" + N;
  else {
    if (D && J && !a.usedDuplicates[N] && (a.usedDuplicates[N] = !0), A === "[object Object]")
      S && Object.keys(a.dump).length !== 0 ? (aM(a, f, a.dump, C), J && (a.dump = "&ref_" + N + a.dump)) : (iM(a, f, a.dump), J && (a.dump = "&ref_" + N + " " + a.dump));
    else if (A === "[object Array]")
      S && a.dump.length !== 0 ? (a.noArrayIndent && !h && f > 0 ? mT(a, f - 1, a.dump, C) : mT(a, f, a.dump, C), J && (a.dump = "&ref_" + N + a.dump)) : (rM(a, f, a.dump), J && (a.dump = "&ref_" + N + " " + a.dump));
    else if (A === "[object String]")
      a.tag !== "?" && eM(a, a.dump, f, w, L);
    else {
      if (A === "[object Undefined]")
        return !1;
      if (a.skipInvalid)
        return !1;
      throw new zi("unacceptable kind of an object to dump " + A);
    }
    a.tag !== null && a.tag !== "?" && (B = encodeURI(
      a.tag[0] === "!" ? a.tag.slice(1) : a.tag
    ).replace(/!/g, "%21"), a.tag[0] === "!" ? B = "!" + B : B.slice(0, 18) === "tag:yaml.org,2002:" ? B = "!!" + B.slice(18) : B = "!<" + B + ">", a.dump = B + " " + a.dump);
  }
  return !0;
}
function lM(a, f) {
  var d = [], S = [], C, w;
  for (VE(a, d, S), C = 0, w = S.length; C < w; C += 1)
    f.duplicates.push(d[S[C]]);
  f.usedDuplicates = new Array(w);
}
function VE(a, f, d) {
  var S, C, w;
  if (a !== null && typeof a == "object")
    if (C = f.indexOf(a), C !== -1)
      d.indexOf(C) === -1 && d.push(C);
    else if (f.push(a), Array.isArray(a))
      for (C = 0, w = a.length; C < w; C += 1)
        VE(a[C], f, d);
    else
      for (S = Object.keys(a), C = 0, w = S.length; C < w; C += 1)
        VE(a[S[C]], f, d);
}
function oM(a, f) {
  f = f || {};
  var d = new qN(f);
  d.noRefs || lM(a, d);
  var S = a;
  return d.replacer && (S = d.replacer.call({ "": S }, "", S)), nu(d, 0, S, !0, !0) ? d.dump + `
` : "";
}
var uM = oM, sM = {
  dump: uM
};
function e1(a, f) {
  return function() {
    throw new Error("Function yaml." + a + " is removed in js-yaml 4. Use yaml." + f + " instead, which is now safe by default.");
  };
}
var cM = ni, fM = qT, dM = ZT, pM = iR, hM = aR, vM = KE, mM = xR.load, yM = xR.loadAll, gM = sM.dump, SM = zi, EM = {
  binary: cR,
  float: rR,
  map: JT,
  null: eR,
  pairs: dR,
  set: pR,
  timestamp: uR,
  bool: tR,
  int: nR,
  merge: sR,
  omap: fR,
  seq: XT,
  str: KT
}, CM = e1("safeLoad", "load"), xM = e1("safeLoadAll", "loadAll"), wM = e1("safeDump", "dump"), TM = {
  Type: cM,
  Schema: fM,
  FAILSAFE_SCHEMA: dM,
  JSON_SCHEMA: pM,
  CORE_SCHEMA: hM,
  DEFAULT_SCHEMA: vM,
  load: mM,
  loadAll: yM,
  dump: gM,
  YAMLException: SM,
  types: EM,
  safeLoad: CM,
  safeLoadAll: xM,
  safeDump: wM
};
const RM = () => {
  const [a, f] = eu.useState(""), [d, S] = eu.useState(""), [C, w] = eu.useState(""), [h, A] = eu.useState(null);
  eu.useEffect(() => {
    const D = async () => {
      const J = await L();
      A(J);
      const K = await B(J.app.frontend, "app"), te = await B(J.app.backend, "app"), ue = await B(J.database, "database");
      f(K), S(te), w(ue);
    };
    D();
    const N = setInterval(D, 6e4);
    return () => clearInterval(N);
  }, []);
  async function L() {
    const D = await ar.get("/config.yml");
    return TM.load(D.data);
  }
  async function B(D, N) {
    try {
      const J = N === "app" ? h == null ? void 0 : h.app.host : h == null ? void 0 : h.database.host;
      return (await ar.get(`http://${J}:${D.port}`)).status === 200 ? "online" : "offline";
    } catch {
      return "offline";
    }
  }
  return h ? /* @__PURE__ */ gt.jsxs("div", { className: "flex items-center justify-center min-h-screen flex-col", children: [
    /* @__PURE__ */ gt.jsx("img", { src: "https://cdn.jsdelivr.net/npm/@kingmaj0r/harmony-core@latest/dist/assets/img/background.jpg", className: "absolute h-screen w-screen -z-10" }),
    /* @__PURE__ */ gt.jsxs("div", { className: "flex flex-col justify-center items-center max-w-xl p-12 bg-slate-800 rounded-2xl shadow-md bg-opacity-70 backdrop-filter backdrop-blur", children: [
      /* @__PURE__ */ gt.jsxs("div", { className: "flex justify-center items-center", children: [
        /* @__PURE__ */ gt.jsx("a", { href: "https://github.com/KingMaj0r/harmony", children: /* @__PURE__ */ gt.jsx("img", { src: "https://cdn.jsdelivr.net/npm/@kingmaj0r/harmony-core@latest/dist/assets/img/favicon.png", className: "h-24" }) }),
        /* @__PURE__ */ gt.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-8 w-8 text-gray-500",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: /* @__PURE__ */ gt.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4v16m8-8H4" })
          }
        ),
        /* @__PURE__ */ gt.jsx("a", { href: "https://vitejs.dev", children: /* @__PURE__ */ gt.jsxs("svg", { viewBox: "0 0 410 404", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "h-24 w-auto", children: [
          /* @__PURE__ */ gt.jsx(
            "path",
            {
              d: "M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z",
              fill: "url(#paint0_linear)"
            }
          ),
          /* @__PURE__ */ gt.jsx(
            "path",
            {
              d: "M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z",
              fill: "url(#paint1_linear)"
            }
          ),
          /* @__PURE__ */ gt.jsxs("defs", { children: [
            /* @__PURE__ */ gt.jsxs("linearGradient", { id: "paint0_linear", x1: 6.00017, y1: 32.9999, x2: 235, y2: 344, gradientUnits: "userSpaceOnUse", children: [
              /* @__PURE__ */ gt.jsx("stop", { stopColor: "#41D1FF" }),
              /* @__PURE__ */ gt.jsx("stop", { offset: 1, stopColor: "#BD34FE" })
            ] }),
            /* @__PURE__ */ gt.jsxs("linearGradient", { id: "paint1_linear", x1: 194.651, y1: 8.81818, x2: 236.076, y2: 292.989, gradientUnits: "userSpaceOnUse", children: [
              /* @__PURE__ */ gt.jsx("stop", { stopColor: "#FFEA83" }),
              /* @__PURE__ */ gt.jsx("stop", { offset: 0.0833333, stopColor: "#FFDD35" }),
              /* @__PURE__ */ gt.jsx("stop", { offset: 1, stopColor: "#FFA800" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ gt.jsx("p", { className: "text-lg text-center text-white mb-8", children: "Harmony frontend working!" }),
      /* @__PURE__ */ gt.jsx("p", { className: "text-center text-white mb-2", children: "This page can only be accessed if the app environment is set to development. Otherwise this is inaccessible to the public." }),
      /* @__PURE__ */ gt.jsx("p", { className: "text-center text-gray-500 mb-2", children: "STATS" }),
      /* @__PURE__ */ gt.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ gt.jsx("table", { className: "w-full text-sm shadow-sm", children: /* @__PURE__ */ gt.jsxs("tbody", { children: [
        /* @__PURE__ */ gt.jsxs("tr", { className: "frontend-status", children: [
          /* @__PURE__ */ gt.jsx("td", { className: "text-gray-400", children: "Frontend" }),
          /* @__PURE__ */ gt.jsx("td", { className: "text-blue-500", children: h.app.host + ":" + h.app.frontend.port }),
          /* @__PURE__ */ gt.jsx("td", { className: `text-${a === "online" ? "green" : "red"}-500`, children: a })
        ] }),
        /* @__PURE__ */ gt.jsxs("tr", { children: [
          /* @__PURE__ */ gt.jsx("td", { className: "text-gray-400", children: "Backend" }),
          /* @__PURE__ */ gt.jsx("td", { className: "text-blue-500", children: h.app.host + ":" + h.app.backend.port }),
          /* @__PURE__ */ gt.jsx("td", { className: `text-${d === "online" ? "green" : "red"}-500`, children: d })
        ] }),
        /* @__PURE__ */ gt.jsxs("tr", { children: [
          /* @__PURE__ */ gt.jsx("td", { className: "text-gray-400", children: "Database" }),
          /* @__PURE__ */ gt.jsx("td", { className: "text-blue-500", children: h.database.host + ":" + h.database.port }),
          /* @__PURE__ */ gt.jsx("td", { className: `text-${C === "online" ? "green" : "red"}-500`, children: C })
        ] })
      ] }) }) })
    ] })
  ] }) : /* @__PURE__ */ gt.jsxs("div", { className: "flex items-center justify-center min-h-screen flex-col", children: [
    /* @__PURE__ */ gt.jsx("img", { src: "https://cdn.jsdelivr.net/npm/@kingmaj0r/harmony-core@latest/dist/assets/img/background.jpg", className: "absolute h-screen w-screen -z-10" }),
    /* @__PURE__ */ gt.jsxs("div", { className: "flex flex-col justify-center items-center max-w-xl p-12 bg-slate-800 rounded-2xl shadow-md bg-opacity-70 backdrop-filter backdrop-blur", children: [
      /* @__PURE__ */ gt.jsx("a", { href: "https://github.com/KingMaj0r/harmony", children: /* @__PURE__ */ gt.jsx("img", { src: "assets/img/logo.png", className: "h-24" }) }),
      /* @__PURE__ */ gt.jsxs("div", { className: "text-white text-wrap", children: [
        "config.yml does not exist. Please create a config.yml and specify the values or get a example config.yml at ",
        /* @__PURE__ */ gt.jsx("a", { className: "text-blue-500", href: "https://github.com/KingMaj0r/harmony", children: "the harmony repo" }),
        "."
      ] })
    ] })
  ] });
};
NE(document.getElementById("root")).render(/* @__PURE__ */ gt.jsx(RM, {}));
//# sourceMappingURL=index.mjs.map

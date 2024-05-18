var pE = { exports: {} }, Ev = {}, vE = { exports: {} }, kt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yT;
function KD() {
  if (yT)
    return kt;
  yT = 1;
  var a = Symbol.for("react.element"), f = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), h = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), N = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), k = Symbol.iterator;
  function Q(z) {
    return z === null || typeof z != "object" ? null : (z = k && z[k] || z["@@iterator"], typeof z == "function" ? z : null);
  }
  var q = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, K = Object.assign, ne = {};
  function ye(z, Z, We) {
    this.props = z, this.context = Z, this.refs = ne, this.updater = We || q;
  }
  ye.prototype.isReactComponent = {}, ye.prototype.setState = function(z, Z) {
    if (typeof z != "object" && typeof z != "function" && z != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, z, Z, "setState");
  }, ye.prototype.forceUpdate = function(z) {
    this.updater.enqueueForceUpdate(this, z, "forceUpdate");
  };
  function Ke() {
  }
  Ke.prototype = ye.prototype;
  function ve(z, Z, We) {
    this.props = z, this.context = Z, this.refs = ne, this.updater = We || q;
  }
  var Be = ve.prototype = new Ke();
  Be.constructor = ve, K(Be, ye.prototype), Be.isPureReactComponent = !0;
  var yt = Array.isArray, He = Object.prototype.hasOwnProperty, gt = { current: null }, Je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function un(z, Z, We) {
    var Ze, ft = {}, ct = null, Rt = null;
    if (Z != null)
      for (Ze in Z.ref !== void 0 && (Rt = Z.ref), Z.key !== void 0 && (ct = "" + Z.key), Z)
        He.call(Z, Ze) && !Je.hasOwnProperty(Ze) && (ft[Ze] = Z[Ze]);
    var ht = arguments.length - 2;
    if (ht === 1)
      ft.children = We;
    else if (1 < ht) {
      for (var mt = Array(ht), an = 0; an < ht; an++)
        mt[an] = arguments[an + 2];
      ft.children = mt;
    }
    if (z && z.defaultProps)
      for (Ze in ht = z.defaultProps, ht)
        ft[Ze] === void 0 && (ft[Ze] = ht[Ze]);
    return { $$typeof: a, type: z, key: ct, ref: Rt, props: ft, _owner: gt.current };
  }
  function Dn(z, Z) {
    return { $$typeof: a, type: z.type, key: Z, ref: z.ref, props: z.props, _owner: z._owner };
  }
  function Xt(z) {
    return typeof z == "object" && z !== null && z.$$typeof === a;
  }
  function Nt(z) {
    var Z = { "=": "=0", ":": "=2" };
    return "$" + z.replace(/[=:]/g, function(We) {
      return Z[We];
    });
  }
  var Rn = /\/+/g;
  function Ye(z, Z) {
    return typeof z == "object" && z !== null && z.key != null ? Nt("" + z.key) : Z.toString(36);
  }
  function ut(z, Z, We, Ze, ft) {
    var ct = typeof z;
    (ct === "undefined" || ct === "boolean") && (z = null);
    var Rt = !1;
    if (z === null)
      Rt = !0;
    else
      switch (ct) {
        case "string":
        case "number":
          Rt = !0;
          break;
        case "object":
          switch (z.$$typeof) {
            case a:
            case f:
              Rt = !0;
          }
      }
    if (Rt)
      return Rt = z, ft = ft(Rt), z = Ze === "" ? "." + Ye(Rt, 0) : Ze, yt(ft) ? (We = "", z != null && (We = z.replace(Rn, "$&/") + "/"), ut(ft, Z, We, "", function(an) {
        return an;
      })) : ft != null && (Xt(ft) && (ft = Dn(ft, We + (!ft.key || Rt && Rt.key === ft.key ? "" : ("" + ft.key).replace(Rn, "$&/") + "/") + z)), Z.push(ft)), 1;
    if (Rt = 0, Ze = Ze === "" ? "." : Ze + ":", yt(z))
      for (var ht = 0; ht < z.length; ht++) {
        ct = z[ht];
        var mt = Ze + Ye(ct, ht);
        Rt += ut(ct, Z, We, mt, ft);
      }
    else if (mt = Q(z), typeof mt == "function")
      for (z = mt.call(z), ht = 0; !(ct = z.next()).done; )
        ct = ct.value, mt = Ze + Ye(ct, ht++), Rt += ut(ct, Z, We, mt, ft);
    else if (ct === "object")
      throw Z = String(z), Error("Objects are not valid as a React child (found: " + (Z === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : Z) + "). If you meant to render a collection of children, use an array instead.");
    return Rt;
  }
  function Vt(z, Z, We) {
    if (z == null)
      return z;
    var Ze = [], ft = 0;
    return ut(z, Ze, "", "", function(ct) {
      return Z.call(We, ct, ft++);
    }), Ze;
  }
  function At(z) {
    if (z._status === -1) {
      var Z = z._result;
      Z = Z(), Z.then(function(We) {
        (z._status === 0 || z._status === -1) && (z._status = 1, z._result = We);
      }, function(We) {
        (z._status === 0 || z._status === -1) && (z._status = 2, z._result = We);
      }), z._status === -1 && (z._status = 0, z._result = Z);
    }
    if (z._status === 1)
      return z._result.default;
    throw z._result;
  }
  var be = { current: null }, de = { transition: null }, Fe = { ReactCurrentDispatcher: be, ReactCurrentBatchConfig: de, ReactCurrentOwner: gt };
  function ge() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return kt.Children = { map: Vt, forEach: function(z, Z, We) {
    Vt(z, function() {
      Z.apply(this, arguments);
    }, We);
  }, count: function(z) {
    var Z = 0;
    return Vt(z, function() {
      Z++;
    }), Z;
  }, toArray: function(z) {
    return Vt(z, function(Z) {
      return Z;
    }) || [];
  }, only: function(z) {
    if (!Xt(z))
      throw Error("React.Children.only expected to receive a single React element child.");
    return z;
  } }, kt.Component = ye, kt.Fragment = p, kt.Profiler = S, kt.PureComponent = ve, kt.StrictMode = g, kt.Suspense = O, kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fe, kt.act = ge, kt.cloneElement = function(z, Z, We) {
    if (z == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + z + ".");
    var Ze = K({}, z.props), ft = z.key, ct = z.ref, Rt = z._owner;
    if (Z != null) {
      if (Z.ref !== void 0 && (ct = Z.ref, Rt = gt.current), Z.key !== void 0 && (ft = "" + Z.key), z.type && z.type.defaultProps)
        var ht = z.type.defaultProps;
      for (mt in Z)
        He.call(Z, mt) && !Je.hasOwnProperty(mt) && (Ze[mt] = Z[mt] === void 0 && ht !== void 0 ? ht[mt] : Z[mt]);
    }
    var mt = arguments.length - 2;
    if (mt === 1)
      Ze.children = We;
    else if (1 < mt) {
      ht = Array(mt);
      for (var an = 0; an < mt; an++)
        ht[an] = arguments[an + 2];
      Ze.children = ht;
    }
    return { $$typeof: a, type: z.type, key: ft, ref: ct, props: Ze, _owner: Rt };
  }, kt.createContext = function(z) {
    return z = { $$typeof: h, _currentValue: z, _currentValue2: z, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, z.Provider = { $$typeof: T, _context: z }, z.Consumer = z;
  }, kt.createElement = un, kt.createFactory = function(z) {
    var Z = un.bind(null, z);
    return Z.type = z, Z;
  }, kt.createRef = function() {
    return { current: null };
  }, kt.forwardRef = function(z) {
    return { $$typeof: b, render: z };
  }, kt.isValidElement = Xt, kt.lazy = function(z) {
    return { $$typeof: B, _payload: { _status: -1, _result: z }, _init: At };
  }, kt.memo = function(z, Z) {
    return { $$typeof: N, type: z, compare: Z === void 0 ? null : Z };
  }, kt.startTransition = function(z) {
    var Z = de.transition;
    de.transition = {};
    try {
      z();
    } finally {
      de.transition = Z;
    }
  }, kt.unstable_act = ge, kt.useCallback = function(z, Z) {
    return be.current.useCallback(z, Z);
  }, kt.useContext = function(z) {
    return be.current.useContext(z);
  }, kt.useDebugValue = function() {
  }, kt.useDeferredValue = function(z) {
    return be.current.useDeferredValue(z);
  }, kt.useEffect = function(z, Z) {
    return be.current.useEffect(z, Z);
  }, kt.useId = function() {
    return be.current.useId();
  }, kt.useImperativeHandle = function(z, Z, We) {
    return be.current.useImperativeHandle(z, Z, We);
  }, kt.useInsertionEffect = function(z, Z) {
    return be.current.useInsertionEffect(z, Z);
  }, kt.useLayoutEffect = function(z, Z) {
    return be.current.useLayoutEffect(z, Z);
  }, kt.useMemo = function(z, Z) {
    return be.current.useMemo(z, Z);
  }, kt.useReducer = function(z, Z, We) {
    return be.current.useReducer(z, Z, We);
  }, kt.useRef = function(z) {
    return be.current.useRef(z);
  }, kt.useState = function(z) {
    return be.current.useState(z);
  }, kt.useSyncExternalStore = function(z, Z, We) {
    return be.current.useSyncExternalStore(z, Z, We);
  }, kt.useTransition = function() {
    return be.current.useTransition();
  }, kt.version = "18.3.1", kt;
}
var Tv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Tv.exports;
var gT;
function XD() {
  return gT || (gT = 1, function(a, f) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = "18.3.1", g = Symbol.for("react.element"), S = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), N = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), ye = Symbol.iterator, Ke = "@@iterator";
      function ve(C) {
        if (C === null || typeof C != "object")
          return null;
        var D = ye && C[ye] || C[Ke];
        return typeof D == "function" ? D : null;
      }
      var Be = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, yt = {
        transition: null
      }, He = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, gt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Je = {}, un = null;
      function Dn(C) {
        un = C;
      }
      Je.setExtraStackFrame = function(C) {
        un = C;
      }, Je.getCurrentStack = null, Je.getStackAddendum = function() {
        var C = "";
        un && (C += un);
        var D = Je.getCurrentStack;
        return D && (C += D() || ""), C;
      };
      var Xt = !1, Nt = !1, Rn = !1, Ye = !1, ut = !1, Vt = {
        ReactCurrentDispatcher: Be,
        ReactCurrentBatchConfig: yt,
        ReactCurrentOwner: gt
      };
      Vt.ReactDebugCurrentFrame = Je, Vt.ReactCurrentActQueue = He;
      function At(C) {
        {
          for (var D = arguments.length, $ = new Array(D > 1 ? D - 1 : 0), G = 1; G < D; G++)
            $[G - 1] = arguments[G];
          de("warn", C, $);
        }
      }
      function be(C) {
        {
          for (var D = arguments.length, $ = new Array(D > 1 ? D - 1 : 0), G = 1; G < D; G++)
            $[G - 1] = arguments[G];
          de("error", C, $);
        }
      }
      function de(C, D, $) {
        {
          var G = Vt.ReactDebugCurrentFrame, ce = G.getStackAddendum();
          ce !== "" && (D += "%s", $ = $.concat([ce]));
          var qe = $.map(function(Se) {
            return String(Se);
          });
          qe.unshift("Warning: " + D), Function.prototype.apply.call(console[C], console, qe);
        }
      }
      var Fe = {};
      function ge(C, D) {
        {
          var $ = C.constructor, G = $ && ($.displayName || $.name) || "ReactClass", ce = G + "." + D;
          if (Fe[ce])
            return;
          be("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", D, G), Fe[ce] = !0;
        }
      }
      var z = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(C) {
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
        enqueueForceUpdate: function(C, D, $) {
          ge(C, "forceUpdate");
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
        enqueueReplaceState: function(C, D, $, G) {
          ge(C, "replaceState");
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
        enqueueSetState: function(C, D, $, G) {
          ge(C, "setState");
        }
      }, Z = Object.assign, We = {};
      Object.freeze(We);
      function Ze(C, D, $) {
        this.props = C, this.context = D, this.refs = We, this.updater = $ || z;
      }
      Ze.prototype.isReactComponent = {}, Ze.prototype.setState = function(C, D) {
        if (typeof C != "object" && typeof C != "function" && C != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, C, D, "setState");
      }, Ze.prototype.forceUpdate = function(C) {
        this.updater.enqueueForceUpdate(this, C, "forceUpdate");
      };
      {
        var ft = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ct = function(C, D) {
          Object.defineProperty(Ze.prototype, C, {
            get: function() {
              At("%s(...) is deprecated in plain JavaScript React classes. %s", D[0], D[1]);
            }
          });
        };
        for (var Rt in ft)
          ft.hasOwnProperty(Rt) && ct(Rt, ft[Rt]);
      }
      function ht() {
      }
      ht.prototype = Ze.prototype;
      function mt(C, D, $) {
        this.props = C, this.context = D, this.refs = We, this.updater = $ || z;
      }
      var an = mt.prototype = new ht();
      an.constructor = mt, Z(an, Ze.prototype), an.isPureReactComponent = !0;
      function Cr() {
        var C = {
          current: null
        };
        return Object.seal(C), C;
      }
      var Gr = Array.isArray;
      function yn(C) {
        return Gr(C);
      }
      function Xn(C) {
        {
          var D = typeof Symbol == "function" && Symbol.toStringTag, $ = D && C[Symbol.toStringTag] || C.constructor.name || "Object";
          return $;
        }
      }
      function In(C) {
        try {
          return zn(C), !1;
        } catch {
          return !0;
        }
      }
      function zn(C) {
        return "" + C;
      }
      function An(C) {
        if (In(C))
          return be("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xn(C)), zn(C);
      }
      function Kr(C, D, $) {
        var G = C.displayName;
        if (G)
          return G;
        var ce = D.displayName || D.name || "";
        return ce !== "" ? $ + "(" + ce + ")" : $;
      }
      function Xr(C) {
        return C.displayName || "Context";
      }
      function Jn(C) {
        if (C == null)
          return null;
        if (typeof C.tag == "number" && be("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
          return C.displayName || C.name || null;
        if (typeof C == "string")
          return C;
        switch (C) {
          case T:
            return "Fragment";
          case S:
            return "Portal";
          case b:
            return "Profiler";
          case h:
            return "StrictMode";
          case k:
            return "Suspense";
          case Q:
            return "SuspenseList";
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case N:
              var D = C;
              return Xr(D) + ".Consumer";
            case O:
              var $ = C;
              return Xr($._context) + ".Provider";
            case B:
              return Kr(C, C.render, "ForwardRef");
            case q:
              var G = C.displayName || null;
              return G !== null ? G : Jn(C.type) || "Memo";
            case K: {
              var ce = C, qe = ce._payload, Se = ce._init;
              try {
                return Jn(Se(qe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var xr = Object.prototype.hasOwnProperty, Jr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Tr, Ei, ur;
      ur = {};
      function Zr(C) {
        if (xr.call(C, "ref")) {
          var D = Object.getOwnPropertyDescriptor(C, "ref").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return C.ref !== void 0;
      }
      function gn(C) {
        if (xr.call(C, "key")) {
          var D = Object.getOwnPropertyDescriptor(C, "key").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return C.key !== void 0;
      }
      function Ar(C, D) {
        var $ = function() {
          Tr || (Tr = !0, be("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        $.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: $,
          configurable: !0
        });
      }
      function Ca(C, D) {
        var $ = function() {
          Ei || (Ei = !0, be("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        $.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: $,
          configurable: !0
        });
      }
      function Ci(C) {
        if (typeof C.ref == "string" && gt.current && C.__self && gt.current.stateNode !== C.__self) {
          var D = Jn(gt.current.type);
          ur[D] || (be('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D, C.ref), ur[D] = !0);
        }
      }
      var pe = function(C, D, $, G, ce, qe, Se) {
        var $e = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: g,
          // Built-in properties that belong on the element
          type: C,
          key: D,
          ref: $,
          props: Se,
          // Record the component responsible for creating this element.
          _owner: qe
        };
        return $e._store = {}, Object.defineProperty($e._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty($e, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: G
        }), Object.defineProperty($e, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ce
        }), Object.freeze && (Object.freeze($e.props), Object.freeze($e)), $e;
      };
      function ze(C, D, $) {
        var G, ce = {}, qe = null, Se = null, $e = null, St = null;
        if (D != null) {
          Zr(D) && (Se = D.ref, Ci(D)), gn(D) && (An(D.key), qe = "" + D.key), $e = D.__self === void 0 ? null : D.__self, St = D.__source === void 0 ? null : D.__source;
          for (G in D)
            xr.call(D, G) && !Jr.hasOwnProperty(G) && (ce[G] = D[G]);
        }
        var Lt = arguments.length - 2;
        if (Lt === 1)
          ce.children = $;
        else if (Lt > 1) {
          for (var tn = Array(Lt), Kt = 0; Kt < Lt; Kt++)
            tn[Kt] = arguments[Kt + 2];
          Object.freeze && Object.freeze(tn), ce.children = tn;
        }
        if (C && C.defaultProps) {
          var nn = C.defaultProps;
          for (G in nn)
            ce[G] === void 0 && (ce[G] = nn[G]);
        }
        if (qe || Se) {
          var ln = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          qe && Ar(ce, ln), Se && Ca(ce, ln);
        }
        return pe(C, qe, Se, $e, St, gt.current, ce);
      }
      function dt(C, D) {
        var $ = pe(C.type, D, C.ref, C._self, C._source, C._owner, C.props);
        return $;
      }
      function Pt(C, D, $) {
        if (C == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + C + ".");
        var G, ce = Z({}, C.props), qe = C.key, Se = C.ref, $e = C._self, St = C._source, Lt = C._owner;
        if (D != null) {
          Zr(D) && (Se = D.ref, Lt = gt.current), gn(D) && (An(D.key), qe = "" + D.key);
          var tn;
          C.type && C.type.defaultProps && (tn = C.type.defaultProps);
          for (G in D)
            xr.call(D, G) && !Jr.hasOwnProperty(G) && (D[G] === void 0 && tn !== void 0 ? ce[G] = tn[G] : ce[G] = D[G]);
        }
        var Kt = arguments.length - 2;
        if (Kt === 1)
          ce.children = $;
        else if (Kt > 1) {
          for (var nn = Array(Kt), ln = 0; ln < Kt; ln++)
            nn[ln] = arguments[ln + 2];
          ce.children = nn;
        }
        return pe(C.type, qe, Se, $e, St, Lt, ce);
      }
      function It(C) {
        return typeof C == "object" && C !== null && C.$$typeof === g;
      }
      var Ln = ".", Sn = ":";
      function Rr(C) {
        var D = /[=:]/g, $ = {
          "=": "=0",
          ":": "=2"
        }, G = C.replace(D, function(ce) {
          return $[ce];
        });
        return "$" + G;
      }
      var Gt = !1, Lr = /\/+/g;
      function $t(C) {
        return C.replace(Lr, "$&/");
      }
      function Yt(C, D) {
        return typeof C == "object" && C !== null && C.key != null ? (An(C.key), Rr("" + C.key)) : D.toString(36);
      }
      function sa(C, D, $, G, ce) {
        var qe = typeof C;
        (qe === "undefined" || qe === "boolean") && (C = null);
        var Se = !1;
        if (C === null)
          Se = !0;
        else
          switch (qe) {
            case "string":
            case "number":
              Se = !0;
              break;
            case "object":
              switch (C.$$typeof) {
                case g:
                case S:
                  Se = !0;
              }
          }
        if (Se) {
          var $e = C, St = ce($e), Lt = G === "" ? Ln + Yt($e, 0) : G;
          if (yn(St)) {
            var tn = "";
            Lt != null && (tn = $t(Lt) + "/"), sa(St, D, tn, "", function(Sd) {
              return Sd;
            });
          } else
            St != null && (It(St) && (St.key && (!$e || $e.key !== St.key) && An(St.key), St = dt(
              St,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              $ + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (St.key && (!$e || $e.key !== St.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                $t("" + St.key) + "/"
              ) : "") + Lt
            )), D.push(St));
          return 1;
        }
        var Kt, nn, ln = 0, _t = G === "" ? Ln : G + Sn;
        if (yn(C))
          for (var qa = 0; qa < C.length; qa++)
            Kt = C[qa], nn = _t + Yt(Kt, qa), ln += sa(Kt, D, $, nn, ce);
        else {
          var ou = ve(C);
          if (typeof ou == "function") {
            var hs = C;
            ou === hs.entries && (Gt || At("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Gt = !0);
            for (var gd = ou.call(hs), pa, ms = 0; !(pa = gd.next()).done; )
              Kt = pa.value, nn = _t + Yt(Kt, ms++), ln += sa(Kt, D, $, nn, ce);
          } else if (qe === "object") {
            var ys = String(C);
            throw new Error("Objects are not valid as a React child (found: " + (ys === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : ys) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ln;
      }
      function zi(C, D, $) {
        if (C == null)
          return C;
        var G = [], ce = 0;
        return sa(C, G, "", "", function(qe) {
          return D.call($, qe, ce++);
        }), G;
      }
      function El(C) {
        var D = 0;
        return zi(C, function() {
          D++;
        }), D;
      }
      function oo(C, D, $) {
        zi(C, function() {
          D.apply(this, arguments);
        }, $);
      }
      function Ko(C) {
        return zi(C, function(D) {
          return D;
        }) || [];
      }
      function $a(C) {
        if (!It(C))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return C;
      }
      function Cl(C) {
        var D = {
          $$typeof: N,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: C,
          _currentValue2: C,
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
        D.Provider = {
          $$typeof: O,
          _context: D
        };
        var $ = !1, G = !1, ce = !1;
        {
          var qe = {
            $$typeof: N,
            _context: D
          };
          Object.defineProperties(qe, {
            Provider: {
              get: function() {
                return G || (G = !0, be("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), D.Provider;
              },
              set: function(Se) {
                D.Provider = Se;
              }
            },
            _currentValue: {
              get: function() {
                return D._currentValue;
              },
              set: function(Se) {
                D._currentValue = Se;
              }
            },
            _currentValue2: {
              get: function() {
                return D._currentValue2;
              },
              set: function(Se) {
                D._currentValue2 = Se;
              }
            },
            _threadCount: {
              get: function() {
                return D._threadCount;
              },
              set: function(Se) {
                D._threadCount = Se;
              }
            },
            Consumer: {
              get: function() {
                return $ || ($ = !0, be("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), D.Consumer;
              }
            },
            displayName: {
              get: function() {
                return D.displayName;
              },
              set: function(Se) {
                ce || (At("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Se), ce = !0);
              }
            }
          }), D.Consumer = qe;
        }
        return D._currentRenderer = null, D._currentRenderer2 = null, D;
      }
      var xi = -1, xa = 0, Ti = 1, ca = 2;
      function Nr(C) {
        if (C._status === xi) {
          var D = C._result, $ = D();
          if ($.then(function(qe) {
            if (C._status === xa || C._status === xi) {
              var Se = C;
              Se._status = Ti, Se._result = qe;
            }
          }, function(qe) {
            if (C._status === xa || C._status === xi) {
              var Se = C;
              Se._status = ca, Se._result = qe;
            }
          }), C._status === xi) {
            var G = C;
            G._status = xa, G._result = $;
          }
        }
        if (C._status === Ti) {
          var ce = C._result;
          return ce === void 0 && be(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ce), "default" in ce || be(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ce), ce.default;
        } else
          throw C._result;
      }
      function Ri(C) {
        var D = {
          // We use these fields to store the result.
          _status: xi,
          _result: C
        }, $ = {
          $$typeof: K,
          _payload: D,
          _init: Nr
        };
        {
          var G, ce;
          Object.defineProperties($, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return G;
              },
              set: function(qe) {
                be("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), G = qe, Object.defineProperty($, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ce;
              },
              set: function(qe) {
                be("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ce = qe, Object.defineProperty($, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return $;
      }
      function Ta(C) {
        C != null && C.$$typeof === q ? be("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof C != "function" ? be("forwardRef requires a render function but was given %s.", C === null ? "null" : typeof C) : C.length !== 0 && C.length !== 2 && be("forwardRef render functions accept exactly two parameters: props and ref. %s", C.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), C != null && (C.defaultProps != null || C.propTypes != null) && be("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var D = {
          $$typeof: B,
          render: C
        };
        {
          var $;
          Object.defineProperty(D, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return $;
            },
            set: function(G) {
              $ = G, !C.name && !C.displayName && (C.displayName = G);
            }
          });
        }
        return D;
      }
      var Ra;
      Ra = Symbol.for("react.module.reference");
      function A(C) {
        return !!(typeof C == "string" || typeof C == "function" || C === T || C === b || ut || C === h || C === k || C === Q || Ye || C === ne || Xt || Nt || Rn || typeof C == "object" && C !== null && (C.$$typeof === K || C.$$typeof === q || C.$$typeof === O || C.$$typeof === N || C.$$typeof === B || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        C.$$typeof === Ra || C.getModuleId !== void 0));
      }
      function ae(C, D) {
        A(C) || be("memo: The first argument must be a component. Instead received: %s", C === null ? "null" : typeof C);
        var $ = {
          $$typeof: q,
          type: C,
          compare: D === void 0 ? null : D
        };
        {
          var G;
          Object.defineProperty($, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return G;
            },
            set: function(ce) {
              G = ce, !C.name && !C.displayName && (C.displayName = ce);
            }
          });
        }
        return $;
      }
      function se() {
        var C = Be.current;
        return C === null && be(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), C;
      }
      function Ne(C) {
        var D = se();
        if (C._context !== void 0) {
          var $ = C._context;
          $.Consumer === C ? be("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : $.Provider === C && be("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return D.useContext(C);
      }
      function Ct(C) {
        var D = se();
        return D.useState(C);
      }
      function wt(C, D, $) {
        var G = se();
        return G.useReducer(C, D, $);
      }
      function Qe(C) {
        var D = se();
        return D.useRef(C);
      }
      function pt(C, D) {
        var $ = se();
        return $.useEffect(C, D);
      }
      function jn(C, D) {
        var $ = se();
        return $.useInsertionEffect(C, D);
      }
      function en(C, D) {
        var $ = se();
        return $.useLayoutEffect(C, D);
      }
      function sn(C, D) {
        var $ = se();
        return $.useCallback(C, D);
      }
      function wr(C, D) {
        var $ = se();
        return $.useMemo(C, D);
      }
      function wa(C, D, $) {
        var G = se();
        return G.useImperativeHandle(C, D, $);
      }
      function Mt(C, D) {
        {
          var $ = se();
          return $.useDebugValue(C, D);
        }
      }
      function Zn() {
        var C = se();
        return C.useTransition();
      }
      function Mr(C) {
        var D = se();
        return D.useDeferredValue(C);
      }
      function vt() {
        var C = se();
        return C.useId();
      }
      function ji(C, D, $) {
        var G = se();
        return G.useSyncExternalStore(C, D, $);
      }
      var xl = 0, Xo, Tl, ei, fs, Ur, ds, ps;
      function Sc() {
      }
      Sc.__reactDisabledLog = !0;
      function Jo() {
        {
          if (xl === 0) {
            Xo = console.log, Tl = console.info, ei = console.warn, fs = console.error, Ur = console.group, ds = console.groupCollapsed, ps = console.groupEnd;
            var C = {
              configurable: !0,
              enumerable: !0,
              value: Sc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: C,
              log: C,
              warn: C,
              error: C,
              group: C,
              groupCollapsed: C,
              groupEnd: C
            });
          }
          xl++;
        }
      }
      function Rl() {
        {
          if (xl--, xl === 0) {
            var C = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Z({}, C, {
                value: Xo
              }),
              info: Z({}, C, {
                value: Tl
              }),
              warn: Z({}, C, {
                value: ei
              }),
              error: Z({}, C, {
                value: fs
              }),
              group: Z({}, C, {
                value: Ur
              }),
              groupCollapsed: Z({}, C, {
                value: ds
              }),
              groupEnd: Z({}, C, {
                value: ps
              })
            });
          }
          xl < 0 && be("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var fa = Vt.ReactCurrentDispatcher, Fr;
      function wl(C, D, $) {
        {
          if (Fr === void 0)
            try {
              throw Error();
            } catch (ce) {
              var G = ce.stack.trim().match(/\n( *(at )?)/);
              Fr = G && G[1] || "";
            }
          return `
` + Fr + C;
        }
      }
      var bl = !1, _l;
      {
        var Zo = typeof WeakMap == "function" ? WeakMap : Map;
        _l = new Zo();
      }
      function eu(C, D) {
        if (!C || bl)
          return "";
        {
          var $ = _l.get(C);
          if ($ !== void 0)
            return $;
        }
        var G;
        bl = !0;
        var ce = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var qe;
        qe = fa.current, fa.current = null, Jo();
        try {
          if (D) {
            var Se = function() {
              throw Error();
            };
            if (Object.defineProperty(Se.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Se, []);
              } catch (_t) {
                G = _t;
              }
              Reflect.construct(C, [], Se);
            } else {
              try {
                Se.call();
              } catch (_t) {
                G = _t;
              }
              C.call(Se.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (_t) {
              G = _t;
            }
            C();
          }
        } catch (_t) {
          if (_t && G && typeof _t.stack == "string") {
            for (var $e = _t.stack.split(`
`), St = G.stack.split(`
`), Lt = $e.length - 1, tn = St.length - 1; Lt >= 1 && tn >= 0 && $e[Lt] !== St[tn]; )
              tn--;
            for (; Lt >= 1 && tn >= 0; Lt--, tn--)
              if ($e[Lt] !== St[tn]) {
                if (Lt !== 1 || tn !== 1)
                  do
                    if (Lt--, tn--, tn < 0 || $e[Lt] !== St[tn]) {
                      var Kt = `
` + $e[Lt].replace(" at new ", " at ");
                      return C.displayName && Kt.includes("<anonymous>") && (Kt = Kt.replace("<anonymous>", C.displayName)), typeof C == "function" && _l.set(C, Kt), Kt;
                    }
                  while (Lt >= 1 && tn >= 0);
                break;
              }
          }
        } finally {
          bl = !1, fa.current = qe, Rl(), Error.prepareStackTrace = ce;
        }
        var nn = C ? C.displayName || C.name : "", ln = nn ? wl(nn) : "";
        return typeof C == "function" && _l.set(C, ln), ln;
      }
      function Ya(C, D, $) {
        return eu(C, !1);
      }
      function yd(C) {
        var D = C.prototype;
        return !!(D && D.isReactComponent);
      }
      function ba(C, D, $) {
        if (C == null)
          return "";
        if (typeof C == "function")
          return eu(C, yd(C));
        if (typeof C == "string")
          return wl(C);
        switch (C) {
          case k:
            return wl("Suspense");
          case Q:
            return wl("SuspenseList");
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case B:
              return Ya(C.render);
            case q:
              return ba(C.type, D, $);
            case K: {
              var G = C, ce = G._payload, qe = G._init;
              try {
                return ba(qe(ce), D, $);
              } catch {
              }
            }
          }
        return "";
      }
      var Ut = {}, tu = Vt.ReactDebugCurrentFrame;
      function uo(C) {
        if (C) {
          var D = C._owner, $ = ba(C.type, C._source, D ? D.type : null);
          tu.setExtraStackFrame($);
        } else
          tu.setExtraStackFrame(null);
      }
      function nu(C, D, $, G, ce) {
        {
          var qe = Function.call.bind(xr);
          for (var Se in C)
            if (qe(C, Se)) {
              var $e = void 0;
              try {
                if (typeof C[Se] != "function") {
                  var St = Error((G || "React class") + ": " + $ + " type `" + Se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[Se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw St.name = "Invariant Violation", St;
                }
                $e = C[Se](D, Se, G, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Lt) {
                $e = Lt;
              }
              $e && !($e instanceof Error) && (uo(ce), be("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", $, Se, typeof $e), uo(null)), $e instanceof Error && !($e.message in Ut) && (Ut[$e.message] = !0, uo(ce), be("Failed %s type: %s", $, $e.message), uo(null));
            }
        }
      }
      function bt(C) {
        if (C) {
          var D = C._owner, $ = ba(C.type, C._source, D ? D.type : null);
          Dn($);
        } else
          Dn(null);
      }
      var ru;
      ru = !1;
      function iu() {
        if (gt.current) {
          var C = Jn(gt.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
      function rt(C) {
        if (C !== void 0) {
          var D = C.fileName.replace(/^.*[\\\/]/, ""), $ = C.lineNumber;
          return `

Check your code at ` + D + ":" + $ + ".";
        }
        return "";
      }
      function so(C) {
        return C != null ? rt(C.__source) : "";
      }
      var En = {};
      function ti(C) {
        var D = iu();
        if (!D) {
          var $ = typeof C == "string" ? C : C.displayName || C.name;
          $ && (D = `

Check the top-level render call using <` + $ + ">.");
        }
        return D;
      }
      function zr(C, D) {
        if (!(!C._store || C._store.validated || C.key != null)) {
          C._store.validated = !0;
          var $ = ti(D);
          if (!En[$]) {
            En[$] = !0;
            var G = "";
            C && C._owner && C._owner !== gt.current && (G = " It was passed a child from " + Jn(C._owner.type) + "."), bt(C), be('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, G), bt(null);
          }
        }
      }
      function kl(C, D) {
        if (typeof C == "object") {
          if (yn(C))
            for (var $ = 0; $ < C.length; $++) {
              var G = C[$];
              It(G) && zr(G, D);
            }
          else if (It(C))
            C._store && (C._store.validated = !0);
          else if (C) {
            var ce = ve(C);
            if (typeof ce == "function" && ce !== C.entries)
              for (var qe = ce.call(C), Se; !(Se = qe.next()).done; )
                It(Se.value) && zr(Se.value, D);
          }
        }
      }
      function wn(C) {
        {
          var D = C.type;
          if (D == null || typeof D == "string")
            return;
          var $;
          if (typeof D == "function")
            $ = D.propTypes;
          else if (typeof D == "object" && (D.$$typeof === B || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          D.$$typeof === q))
            $ = D.propTypes;
          else
            return;
          if ($) {
            var G = Jn(D);
            nu($, C.props, "prop", G, C);
          } else if (D.PropTypes !== void 0 && !ru) {
            ru = !0;
            var ce = Jn(D);
            be("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
          }
          typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && be("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Wt(C) {
        {
          for (var D = Object.keys(C.props), $ = 0; $ < D.length; $++) {
            var G = D[$];
            if (G !== "children" && G !== "key") {
              bt(C), be("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), bt(null);
              break;
            }
          }
          C.ref !== null && (bt(C), be("Invalid attribute `ref` supplied to `React.Fragment`."), bt(null));
        }
      }
      function Ec(C, D, $) {
        var G = A(C);
        if (!G) {
          var ce = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var qe = so(D);
          qe ? ce += qe : ce += iu();
          var Se;
          C === null ? Se = "null" : yn(C) ? Se = "array" : C !== void 0 && C.$$typeof === g ? (Se = "<" + (Jn(C.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : Se = typeof C, be("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Se, ce);
        }
        var $e = ze.apply(this, arguments);
        if ($e == null)
          return $e;
        if (G)
          for (var St = 2; St < arguments.length; St++)
            kl(arguments[St], C);
        return C === T ? Wt($e) : wn($e), $e;
      }
      var ni = !1;
      function er(C) {
        var D = Ec.bind(null, C);
        return D.type = C, ni || (ni = !0, At("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(D, "type", {
          enumerable: !1,
          get: function() {
            return At("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: C
            }), C;
          }
        }), D;
      }
      function _a(C, D, $) {
        for (var G = Pt.apply(this, arguments), ce = 2; ce < arguments.length; ce++)
          kl(arguments[ce], G.type);
        return wn(G), G;
      }
      function Cc(C, D) {
        var $ = yt.transition;
        yt.transition = {};
        var G = yt.transition;
        yt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          C();
        } finally {
          if (yt.transition = $, $ === null && G._updatedFibers) {
            var ce = G._updatedFibers.size;
            ce > 10 && At("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), G._updatedFibers.clear();
          }
        }
      }
      var Wa = !1, Ol = null;
      function xc(C) {
        if (Ol === null)
          try {
            var D = ("require" + Math.random()).slice(0, 7), $ = a && a[D];
            Ol = $.call(a, "timers").setImmediate;
          } catch {
            Ol = function(ce) {
              Wa === !1 && (Wa = !0, typeof MessageChannel > "u" && be("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var qe = new MessageChannel();
              qe.port1.onmessage = ce, qe.port2.postMessage(void 0);
            };
          }
        return Ol(C);
      }
      var Hi = 0, Dl = !1;
      function Qa(C) {
        {
          var D = Hi;
          Hi++, He.current === null && (He.current = []);
          var $ = He.isBatchingLegacy, G;
          try {
            if (He.isBatchingLegacy = !0, G = C(), !$ && He.didScheduleLegacyUpdate) {
              var ce = He.current;
              ce !== null && (He.didScheduleLegacyUpdate = !1, Ll(ce));
            }
          } catch (nn) {
            throw Pi(D), nn;
          } finally {
            He.isBatchingLegacy = $;
          }
          if (G !== null && typeof G == "object" && typeof G.then == "function") {
            var qe = G, Se = !1, $e = {
              then: function(nn, ln) {
                Se = !0, qe.then(function(_t) {
                  Pi(D), Hi === 0 ? au(_t, nn, ln) : nn(_t);
                }, function(_t) {
                  Pi(D), ln(_t);
                });
              }
            };
            return !Dl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Se || (Dl = !0, be("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), $e;
          } else {
            var St = G;
            if (Pi(D), Hi === 0) {
              var Lt = He.current;
              Lt !== null && (Ll(Lt), He.current = null);
              var tn = {
                then: function(nn, ln) {
                  He.current === null ? (He.current = [], au(St, nn, ln)) : nn(St);
                }
              };
              return tn;
            } else {
              var Kt = {
                then: function(nn, ln) {
                  nn(St);
                }
              };
              return Kt;
            }
          }
        }
      }
      function Pi(C) {
        C !== Hi - 1 && be("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Hi = C;
      }
      function au(C, D, $) {
        {
          var G = He.current;
          if (G !== null)
            try {
              Ll(G), xc(function() {
                G.length === 0 ? (He.current = null, D(C)) : au(C, D, $);
              });
            } catch (ce) {
              $(ce);
            }
          else
            D(C);
        }
      }
      var Al = !1;
      function Ll(C) {
        if (!Al) {
          Al = !0;
          var D = 0;
          try {
            for (; D < C.length; D++) {
              var $ = C[D];
              do
                $ = $(!0);
              while ($ !== null);
            }
            C.length = 0;
          } catch (G) {
            throw C = C.slice(D + 1), G;
          } finally {
            Al = !1;
          }
        }
      }
      var co = Ec, lu = _a, vs = er, da = {
        map: zi,
        forEach: oo,
        count: El,
        toArray: Ko,
        only: $a
      };
      f.Children = da, f.Component = Ze, f.Fragment = T, f.Profiler = b, f.PureComponent = mt, f.StrictMode = h, f.Suspense = k, f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vt, f.act = Qa, f.cloneElement = lu, f.createContext = Cl, f.createElement = co, f.createFactory = vs, f.createRef = Cr, f.forwardRef = Ta, f.isValidElement = It, f.lazy = Ri, f.memo = ae, f.startTransition = Cc, f.unstable_act = Qa, f.useCallback = sn, f.useContext = Ne, f.useDebugValue = Mt, f.useDeferredValue = Mr, f.useEffect = pt, f.useId = vt, f.useImperativeHandle = wa, f.useInsertionEffect = jn, f.useLayoutEffect = en, f.useMemo = wr, f.useReducer = wt, f.useRef = Qe, f.useState = Ct, f.useSyncExternalStore = ji, f.useTransition = Zn, f.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Tv, Tv.exports)), Tv.exports;
}
process.env.NODE_ENV === "production" ? vE.exports = KD() : vE.exports = XD();
var qo = vE.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ST;
function JD() {
  if (ST)
    return Ev;
  ST = 1;
  var a = qo, f = Symbol.for("react.element"), p = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, S = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(b, O, N) {
    var B, k = {}, Q = null, q = null;
    N !== void 0 && (Q = "" + N), O.key !== void 0 && (Q = "" + O.key), O.ref !== void 0 && (q = O.ref);
    for (B in O)
      g.call(O, B) && !T.hasOwnProperty(B) && (k[B] = O[B]);
    if (b && b.defaultProps)
      for (B in O = b.defaultProps, O)
        k[B] === void 0 && (k[B] = O[B]);
    return { $$typeof: f, type: b, key: Q, ref: q, props: k, _owner: S.current };
  }
  return Ev.Fragment = p, Ev.jsx = h, Ev.jsxs = h, Ev;
}
var Cv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ET;
function ZD() {
  return ET || (ET = 1, process.env.NODE_ENV !== "production" && function() {
    var a = qo, f = Symbol.for("react.element"), p = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), b = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), Q = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), K = Symbol.iterator, ne = "@@iterator";
    function ye(A) {
      if (A === null || typeof A != "object")
        return null;
      var ae = K && A[K] || A[ne];
      return typeof ae == "function" ? ae : null;
    }
    var Ke = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ve(A) {
      {
        for (var ae = arguments.length, se = new Array(ae > 1 ? ae - 1 : 0), Ne = 1; Ne < ae; Ne++)
          se[Ne - 1] = arguments[Ne];
        Be("error", A, se);
      }
    }
    function Be(A, ae, se) {
      {
        var Ne = Ke.ReactDebugCurrentFrame, Ct = Ne.getStackAddendum();
        Ct !== "" && (ae += "%s", se = se.concat([Ct]));
        var wt = se.map(function(Qe) {
          return String(Qe);
        });
        wt.unshift("Warning: " + ae), Function.prototype.apply.call(console[A], console, wt);
      }
    }
    var yt = !1, He = !1, gt = !1, Je = !1, un = !1, Dn;
    Dn = Symbol.for("react.module.reference");
    function Xt(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === g || A === T || un || A === S || A === N || A === B || Je || A === q || yt || He || gt || typeof A == "object" && A !== null && (A.$$typeof === Q || A.$$typeof === k || A.$$typeof === h || A.$$typeof === b || A.$$typeof === O || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === Dn || A.getModuleId !== void 0));
    }
    function Nt(A, ae, se) {
      var Ne = A.displayName;
      if (Ne)
        return Ne;
      var Ct = ae.displayName || ae.name || "";
      return Ct !== "" ? se + "(" + Ct + ")" : se;
    }
    function Rn(A) {
      return A.displayName || "Context";
    }
    function Ye(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && ve("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
        return A.displayName || A.name || null;
      if (typeof A == "string")
        return A;
      switch (A) {
        case g:
          return "Fragment";
        case p:
          return "Portal";
        case T:
          return "Profiler";
        case S:
          return "StrictMode";
        case N:
          return "Suspense";
        case B:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case b:
            var ae = A;
            return Rn(ae) + ".Consumer";
          case h:
            var se = A;
            return Rn(se._context) + ".Provider";
          case O:
            return Nt(A, A.render, "ForwardRef");
          case k:
            var Ne = A.displayName || null;
            return Ne !== null ? Ne : Ye(A.type) || "Memo";
          case Q: {
            var Ct = A, wt = Ct._payload, Qe = Ct._init;
            try {
              return Ye(Qe(wt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ut = Object.assign, Vt = 0, At, be, de, Fe, ge, z, Z;
    function We() {
    }
    We.__reactDisabledLog = !0;
    function Ze() {
      {
        if (Vt === 0) {
          At = console.log, be = console.info, de = console.warn, Fe = console.error, ge = console.group, z = console.groupCollapsed, Z = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: We,
            writable: !0
          };
          Object.defineProperties(console, {
            info: A,
            log: A,
            warn: A,
            error: A,
            group: A,
            groupCollapsed: A,
            groupEnd: A
          });
        }
        Vt++;
      }
    }
    function ft() {
      {
        if (Vt--, Vt === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ut({}, A, {
              value: At
            }),
            info: ut({}, A, {
              value: be
            }),
            warn: ut({}, A, {
              value: de
            }),
            error: ut({}, A, {
              value: Fe
            }),
            group: ut({}, A, {
              value: ge
            }),
            groupCollapsed: ut({}, A, {
              value: z
            }),
            groupEnd: ut({}, A, {
              value: Z
            })
          });
        }
        Vt < 0 && ve("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ct = Ke.ReactCurrentDispatcher, Rt;
    function ht(A, ae, se) {
      {
        if (Rt === void 0)
          try {
            throw Error();
          } catch (Ct) {
            var Ne = Ct.stack.trim().match(/\n( *(at )?)/);
            Rt = Ne && Ne[1] || "";
          }
        return `
` + Rt + A;
      }
    }
    var mt = !1, an;
    {
      var Cr = typeof WeakMap == "function" ? WeakMap : Map;
      an = new Cr();
    }
    function Gr(A, ae) {
      if (!A || mt)
        return "";
      {
        var se = an.get(A);
        if (se !== void 0)
          return se;
      }
      var Ne;
      mt = !0;
      var Ct = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var wt;
      wt = ct.current, ct.current = null, Ze();
      try {
        if (ae) {
          var Qe = function() {
            throw Error();
          };
          if (Object.defineProperty(Qe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Qe, []);
            } catch (Zn) {
              Ne = Zn;
            }
            Reflect.construct(A, [], Qe);
          } else {
            try {
              Qe.call();
            } catch (Zn) {
              Ne = Zn;
            }
            A.call(Qe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Zn) {
            Ne = Zn;
          }
          A();
        }
      } catch (Zn) {
        if (Zn && Ne && typeof Zn.stack == "string") {
          for (var pt = Zn.stack.split(`
`), jn = Ne.stack.split(`
`), en = pt.length - 1, sn = jn.length - 1; en >= 1 && sn >= 0 && pt[en] !== jn[sn]; )
            sn--;
          for (; en >= 1 && sn >= 0; en--, sn--)
            if (pt[en] !== jn[sn]) {
              if (en !== 1 || sn !== 1)
                do
                  if (en--, sn--, sn < 0 || pt[en] !== jn[sn]) {
                    var wr = `
` + pt[en].replace(" at new ", " at ");
                    return A.displayName && wr.includes("<anonymous>") && (wr = wr.replace("<anonymous>", A.displayName)), typeof A == "function" && an.set(A, wr), wr;
                  }
                while (en >= 1 && sn >= 0);
              break;
            }
        }
      } finally {
        mt = !1, ct.current = wt, ft(), Error.prepareStackTrace = Ct;
      }
      var wa = A ? A.displayName || A.name : "", Mt = wa ? ht(wa) : "";
      return typeof A == "function" && an.set(A, Mt), Mt;
    }
    function yn(A, ae, se) {
      return Gr(A, !1);
    }
    function Xn(A) {
      var ae = A.prototype;
      return !!(ae && ae.isReactComponent);
    }
    function In(A, ae, se) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return Gr(A, Xn(A));
      if (typeof A == "string")
        return ht(A);
      switch (A) {
        case N:
          return ht("Suspense");
        case B:
          return ht("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case O:
            return yn(A.render);
          case k:
            return In(A.type, ae, se);
          case Q: {
            var Ne = A, Ct = Ne._payload, wt = Ne._init;
            try {
              return In(wt(Ct), ae, se);
            } catch {
            }
          }
        }
      return "";
    }
    var zn = Object.prototype.hasOwnProperty, An = {}, Kr = Ke.ReactDebugCurrentFrame;
    function Xr(A) {
      if (A) {
        var ae = A._owner, se = In(A.type, A._source, ae ? ae.type : null);
        Kr.setExtraStackFrame(se);
      } else
        Kr.setExtraStackFrame(null);
    }
    function Jn(A, ae, se, Ne, Ct) {
      {
        var wt = Function.call.bind(zn);
        for (var Qe in A)
          if (wt(A, Qe)) {
            var pt = void 0;
            try {
              if (typeof A[Qe] != "function") {
                var jn = Error((Ne || "React class") + ": " + se + " type `" + Qe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[Qe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw jn.name = "Invariant Violation", jn;
              }
              pt = A[Qe](ae, Qe, Ne, se, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (en) {
              pt = en;
            }
            pt && !(pt instanceof Error) && (Xr(Ct), ve("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ne || "React class", se, Qe, typeof pt), Xr(null)), pt instanceof Error && !(pt.message in An) && (An[pt.message] = !0, Xr(Ct), ve("Failed %s type: %s", se, pt.message), Xr(null));
          }
      }
    }
    var xr = Array.isArray;
    function Jr(A) {
      return xr(A);
    }
    function Tr(A) {
      {
        var ae = typeof Symbol == "function" && Symbol.toStringTag, se = ae && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return se;
      }
    }
    function Ei(A) {
      try {
        return ur(A), !1;
      } catch {
        return !0;
      }
    }
    function ur(A) {
      return "" + A;
    }
    function Zr(A) {
      if (Ei(A))
        return ve("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tr(A)), ur(A);
    }
    var gn = Ke.ReactCurrentOwner, Ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ca, Ci, pe;
    pe = {};
    function ze(A) {
      if (zn.call(A, "ref")) {
        var ae = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function dt(A) {
      if (zn.call(A, "key")) {
        var ae = Object.getOwnPropertyDescriptor(A, "key").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function Pt(A, ae) {
      if (typeof A.ref == "string" && gn.current && ae && gn.current.stateNode !== ae) {
        var se = Ye(gn.current.type);
        pe[se] || (ve('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ye(gn.current.type), A.ref), pe[se] = !0);
      }
    }
    function It(A, ae) {
      {
        var se = function() {
          Ca || (Ca = !0, ve("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        se.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: se,
          configurable: !0
        });
      }
    }
    function Ln(A, ae) {
      {
        var se = function() {
          Ci || (Ci = !0, ve("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        se.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: se,
          configurable: !0
        });
      }
    }
    var Sn = function(A, ae, se, Ne, Ct, wt, Qe) {
      var pt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: A,
        key: ae,
        ref: se,
        props: Qe,
        // Record the component responsible for creating this element.
        _owner: wt
      };
      return pt._store = {}, Object.defineProperty(pt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(pt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ne
      }), Object.defineProperty(pt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ct
      }), Object.freeze && (Object.freeze(pt.props), Object.freeze(pt)), pt;
    };
    function Rr(A, ae, se, Ne, Ct) {
      {
        var wt, Qe = {}, pt = null, jn = null;
        se !== void 0 && (Zr(se), pt = "" + se), dt(ae) && (Zr(ae.key), pt = "" + ae.key), ze(ae) && (jn = ae.ref, Pt(ae, Ct));
        for (wt in ae)
          zn.call(ae, wt) && !Ar.hasOwnProperty(wt) && (Qe[wt] = ae[wt]);
        if (A && A.defaultProps) {
          var en = A.defaultProps;
          for (wt in en)
            Qe[wt] === void 0 && (Qe[wt] = en[wt]);
        }
        if (pt || jn) {
          var sn = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          pt && It(Qe, sn), jn && Ln(Qe, sn);
        }
        return Sn(A, pt, jn, Ct, Ne, gn.current, Qe);
      }
    }
    var Gt = Ke.ReactCurrentOwner, Lr = Ke.ReactDebugCurrentFrame;
    function $t(A) {
      if (A) {
        var ae = A._owner, se = In(A.type, A._source, ae ? ae.type : null);
        Lr.setExtraStackFrame(se);
      } else
        Lr.setExtraStackFrame(null);
    }
    var Yt;
    Yt = !1;
    function sa(A) {
      return typeof A == "object" && A !== null && A.$$typeof === f;
    }
    function zi() {
      {
        if (Gt.current) {
          var A = Ye(Gt.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function El(A) {
      return "";
    }
    var oo = {};
    function Ko(A) {
      {
        var ae = zi();
        if (!ae) {
          var se = typeof A == "string" ? A : A.displayName || A.name;
          se && (ae = `

Check the top-level render call using <` + se + ">.");
        }
        return ae;
      }
    }
    function $a(A, ae) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var se = Ko(ae);
        if (oo[se])
          return;
        oo[se] = !0;
        var Ne = "";
        A && A._owner && A._owner !== Gt.current && (Ne = " It was passed a child from " + Ye(A._owner.type) + "."), $t(A), ve('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', se, Ne), $t(null);
      }
    }
    function Cl(A, ae) {
      {
        if (typeof A != "object")
          return;
        if (Jr(A))
          for (var se = 0; se < A.length; se++) {
            var Ne = A[se];
            sa(Ne) && $a(Ne, ae);
          }
        else if (sa(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var Ct = ye(A);
          if (typeof Ct == "function" && Ct !== A.entries)
            for (var wt = Ct.call(A), Qe; !(Qe = wt.next()).done; )
              sa(Qe.value) && $a(Qe.value, ae);
        }
      }
    }
    function xi(A) {
      {
        var ae = A.type;
        if (ae == null || typeof ae == "string")
          return;
        var se;
        if (typeof ae == "function")
          se = ae.propTypes;
        else if (typeof ae == "object" && (ae.$$typeof === O || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ae.$$typeof === k))
          se = ae.propTypes;
        else
          return;
        if (se) {
          var Ne = Ye(ae);
          Jn(se, A.props, "prop", Ne, A);
        } else if (ae.PropTypes !== void 0 && !Yt) {
          Yt = !0;
          var Ct = Ye(ae);
          ve("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ct || "Unknown");
        }
        typeof ae.getDefaultProps == "function" && !ae.getDefaultProps.isReactClassApproved && ve("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xa(A) {
      {
        for (var ae = Object.keys(A.props), se = 0; se < ae.length; se++) {
          var Ne = ae[se];
          if (Ne !== "children" && Ne !== "key") {
            $t(A), ve("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ne), $t(null);
            break;
          }
        }
        A.ref !== null && ($t(A), ve("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
      }
    }
    var Ti = {};
    function ca(A, ae, se, Ne, Ct, wt) {
      {
        var Qe = Xt(A);
        if (!Qe) {
          var pt = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (pt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var jn = El();
          jn ? pt += jn : pt += zi();
          var en;
          A === null ? en = "null" : Jr(A) ? en = "array" : A !== void 0 && A.$$typeof === f ? (en = "<" + (Ye(A.type) || "Unknown") + " />", pt = " Did you accidentally export a JSX literal instead of a component?") : en = typeof A, ve("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", en, pt);
        }
        var sn = Rr(A, ae, se, Ct, wt);
        if (sn == null)
          return sn;
        if (Qe) {
          var wr = ae.children;
          if (wr !== void 0)
            if (Ne)
              if (Jr(wr)) {
                for (var wa = 0; wa < wr.length; wa++)
                  Cl(wr[wa], A);
                Object.freeze && Object.freeze(wr);
              } else
                ve("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Cl(wr, A);
        }
        if (zn.call(ae, "key")) {
          var Mt = Ye(A), Zn = Object.keys(ae).filter(function(ji) {
            return ji !== "key";
          }), Mr = Zn.length > 0 ? "{key: someKey, " + Zn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ti[Mt + Mr]) {
            var vt = Zn.length > 0 ? "{" + Zn.join(": ..., ") + ": ...}" : "{}";
            ve(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Mr, Mt, vt, Mt), Ti[Mt + Mr] = !0;
          }
        }
        return A === g ? xa(sn) : xi(sn), sn;
      }
    }
    function Nr(A, ae, se) {
      return ca(A, ae, se, !0);
    }
    function Ri(A, ae, se) {
      return ca(A, ae, se, !1);
    }
    var Ta = Ri, Ra = Nr;
    Cv.Fragment = g, Cv.jsx = Ta, Cv.jsxs = Ra;
  }()), Cv;
}
process.env.NODE_ENV === "production" ? pE.exports = JD() : pE.exports = ZD();
var ot = pE.exports, hE = { exports: {} }, la = {}, xy = { exports: {} }, iE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var CT;
function eA() {
  return CT || (CT = 1, function(a) {
    function f(de, Fe) {
      var ge = de.length;
      de.push(Fe);
      e:
        for (; 0 < ge; ) {
          var z = ge - 1 >>> 1, Z = de[z];
          if (0 < S(Z, Fe))
            de[z] = Fe, de[ge] = Z, ge = z;
          else
            break e;
        }
    }
    function p(de) {
      return de.length === 0 ? null : de[0];
    }
    function g(de) {
      if (de.length === 0)
        return null;
      var Fe = de[0], ge = de.pop();
      if (ge !== Fe) {
        de[0] = ge;
        e:
          for (var z = 0, Z = de.length, We = Z >>> 1; z < We; ) {
            var Ze = 2 * (z + 1) - 1, ft = de[Ze], ct = Ze + 1, Rt = de[ct];
            if (0 > S(ft, ge))
              ct < Z && 0 > S(Rt, ft) ? (de[z] = Rt, de[ct] = ge, z = ct) : (de[z] = ft, de[Ze] = ge, z = Ze);
            else if (ct < Z && 0 > S(Rt, ge))
              de[z] = Rt, de[ct] = ge, z = ct;
            else
              break e;
          }
      }
      return Fe;
    }
    function S(de, Fe) {
      var ge = de.sortIndex - Fe.sortIndex;
      return ge !== 0 ? ge : de.id - Fe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var T = performance;
      a.unstable_now = function() {
        return T.now();
      };
    } else {
      var h = Date, b = h.now();
      a.unstable_now = function() {
        return h.now() - b;
      };
    }
    var O = [], N = [], B = 1, k = null, Q = 3, q = !1, K = !1, ne = !1, ye = typeof setTimeout == "function" ? setTimeout : null, Ke = typeof clearTimeout == "function" ? clearTimeout : null, ve = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Be(de) {
      for (var Fe = p(N); Fe !== null; ) {
        if (Fe.callback === null)
          g(N);
        else if (Fe.startTime <= de)
          g(N), Fe.sortIndex = Fe.expirationTime, f(O, Fe);
        else
          break;
        Fe = p(N);
      }
    }
    function yt(de) {
      if (ne = !1, Be(de), !K)
        if (p(O) !== null)
          K = !0, At(He);
        else {
          var Fe = p(N);
          Fe !== null && be(yt, Fe.startTime - de);
        }
    }
    function He(de, Fe) {
      K = !1, ne && (ne = !1, Ke(un), un = -1), q = !0;
      var ge = Q;
      try {
        for (Be(Fe), k = p(O); k !== null && (!(k.expirationTime > Fe) || de && !Nt()); ) {
          var z = k.callback;
          if (typeof z == "function") {
            k.callback = null, Q = k.priorityLevel;
            var Z = z(k.expirationTime <= Fe);
            Fe = a.unstable_now(), typeof Z == "function" ? k.callback = Z : k === p(O) && g(O), Be(Fe);
          } else
            g(O);
          k = p(O);
        }
        if (k !== null)
          var We = !0;
        else {
          var Ze = p(N);
          Ze !== null && be(yt, Ze.startTime - Fe), We = !1;
        }
        return We;
      } finally {
        k = null, Q = ge, q = !1;
      }
    }
    var gt = !1, Je = null, un = -1, Dn = 5, Xt = -1;
    function Nt() {
      return !(a.unstable_now() - Xt < Dn);
    }
    function Rn() {
      if (Je !== null) {
        var de = a.unstable_now();
        Xt = de;
        var Fe = !0;
        try {
          Fe = Je(!0, de);
        } finally {
          Fe ? Ye() : (gt = !1, Je = null);
        }
      } else
        gt = !1;
    }
    var Ye;
    if (typeof ve == "function")
      Ye = function() {
        ve(Rn);
      };
    else if (typeof MessageChannel < "u") {
      var ut = new MessageChannel(), Vt = ut.port2;
      ut.port1.onmessage = Rn, Ye = function() {
        Vt.postMessage(null);
      };
    } else
      Ye = function() {
        ye(Rn, 0);
      };
    function At(de) {
      Je = de, gt || (gt = !0, Ye());
    }
    function be(de, Fe) {
      un = ye(function() {
        de(a.unstable_now());
      }, Fe);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(de) {
      de.callback = null;
    }, a.unstable_continueExecution = function() {
      K || q || (K = !0, At(He));
    }, a.unstable_forceFrameRate = function(de) {
      0 > de || 125 < de ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Dn = 0 < de ? Math.floor(1e3 / de) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return Q;
    }, a.unstable_getFirstCallbackNode = function() {
      return p(O);
    }, a.unstable_next = function(de) {
      switch (Q) {
        case 1:
        case 2:
        case 3:
          var Fe = 3;
          break;
        default:
          Fe = Q;
      }
      var ge = Q;
      Q = Fe;
      try {
        return de();
      } finally {
        Q = ge;
      }
    }, a.unstable_pauseExecution = function() {
    }, a.unstable_requestPaint = function() {
    }, a.unstable_runWithPriority = function(de, Fe) {
      switch (de) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          de = 3;
      }
      var ge = Q;
      Q = de;
      try {
        return Fe();
      } finally {
        Q = ge;
      }
    }, a.unstable_scheduleCallback = function(de, Fe, ge) {
      var z = a.unstable_now();
      switch (typeof ge == "object" && ge !== null ? (ge = ge.delay, ge = typeof ge == "number" && 0 < ge ? z + ge : z) : ge = z, de) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return Z = ge + Z, de = { id: B++, callback: Fe, priorityLevel: de, startTime: ge, expirationTime: Z, sortIndex: -1 }, ge > z ? (de.sortIndex = ge, f(N, de), p(O) === null && de === p(N) && (ne ? (Ke(un), un = -1) : ne = !0, be(yt, ge - z))) : (de.sortIndex = Z, f(O, de), K || q || (K = !0, At(He))), de;
    }, a.unstable_shouldYield = Nt, a.unstable_wrapCallback = function(de) {
      var Fe = Q;
      return function() {
        var ge = Q;
        Q = Fe;
        try {
          return de.apply(this, arguments);
        } finally {
          Q = ge;
        }
      };
    };
  }(iE)), iE;
}
var aE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xT;
function tA() {
  return xT || (xT = 1, function(a) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var f = !1, p = !1, g = 5;
      function S(pe, ze) {
        var dt = pe.length;
        pe.push(ze), b(pe, ze, dt);
      }
      function T(pe) {
        return pe.length === 0 ? null : pe[0];
      }
      function h(pe) {
        if (pe.length === 0)
          return null;
        var ze = pe[0], dt = pe.pop();
        return dt !== ze && (pe[0] = dt, O(pe, dt, 0)), ze;
      }
      function b(pe, ze, dt) {
        for (var Pt = dt; Pt > 0; ) {
          var It = Pt - 1 >>> 1, Ln = pe[It];
          if (N(Ln, ze) > 0)
            pe[It] = ze, pe[Pt] = Ln, Pt = It;
          else
            return;
        }
      }
      function O(pe, ze, dt) {
        for (var Pt = dt, It = pe.length, Ln = It >>> 1; Pt < Ln; ) {
          var Sn = (Pt + 1) * 2 - 1, Rr = pe[Sn], Gt = Sn + 1, Lr = pe[Gt];
          if (N(Rr, ze) < 0)
            Gt < It && N(Lr, Rr) < 0 ? (pe[Pt] = Lr, pe[Gt] = ze, Pt = Gt) : (pe[Pt] = Rr, pe[Sn] = ze, Pt = Sn);
          else if (Gt < It && N(Lr, ze) < 0)
            pe[Pt] = Lr, pe[Gt] = ze, Pt = Gt;
          else
            return;
        }
      }
      function N(pe, ze) {
        var dt = pe.sortIndex - ze.sortIndex;
        return dt !== 0 ? dt : pe.id - ze.id;
      }
      var B = 1, k = 2, Q = 3, q = 4, K = 5;
      function ne(pe, ze) {
      }
      var ye = typeof performance == "object" && typeof performance.now == "function";
      if (ye) {
        var Ke = performance;
        a.unstable_now = function() {
          return Ke.now();
        };
      } else {
        var ve = Date, Be = ve.now();
        a.unstable_now = function() {
          return ve.now() - Be;
        };
      }
      var yt = 1073741823, He = -1, gt = 250, Je = 5e3, un = 1e4, Dn = yt, Xt = [], Nt = [], Rn = 1, Ye = null, ut = Q, Vt = !1, At = !1, be = !1, de = typeof setTimeout == "function" ? setTimeout : null, Fe = typeof clearTimeout == "function" ? clearTimeout : null, ge = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function z(pe) {
        for (var ze = T(Nt); ze !== null; ) {
          if (ze.callback === null)
            h(Nt);
          else if (ze.startTime <= pe)
            h(Nt), ze.sortIndex = ze.expirationTime, S(Xt, ze);
          else
            return;
          ze = T(Nt);
        }
      }
      function Z(pe) {
        if (be = !1, z(pe), !At)
          if (T(Xt) !== null)
            At = !0, Zr(We);
          else {
            var ze = T(Nt);
            ze !== null && gn(Z, ze.startTime - pe);
          }
      }
      function We(pe, ze) {
        At = !1, be && (be = !1, Ar()), Vt = !0;
        var dt = ut;
        try {
          var Pt;
          if (!p)
            return Ze(pe, ze);
        } finally {
          Ye = null, ut = dt, Vt = !1;
        }
      }
      function Ze(pe, ze) {
        var dt = ze;
        for (z(dt), Ye = T(Xt); Ye !== null && !f && !(Ye.expirationTime > dt && (!pe || Xr())); ) {
          var Pt = Ye.callback;
          if (typeof Pt == "function") {
            Ye.callback = null, ut = Ye.priorityLevel;
            var It = Ye.expirationTime <= dt, Ln = Pt(It);
            dt = a.unstable_now(), typeof Ln == "function" ? Ye.callback = Ln : Ye === T(Xt) && h(Xt), z(dt);
          } else
            h(Xt);
          Ye = T(Xt);
        }
        if (Ye !== null)
          return !0;
        var Sn = T(Nt);
        return Sn !== null && gn(Z, Sn.startTime - dt), !1;
      }
      function ft(pe, ze) {
        switch (pe) {
          case B:
          case k:
          case Q:
          case q:
          case K:
            break;
          default:
            pe = Q;
        }
        var dt = ut;
        ut = pe;
        try {
          return ze();
        } finally {
          ut = dt;
        }
      }
      function ct(pe) {
        var ze;
        switch (ut) {
          case B:
          case k:
          case Q:
            ze = Q;
            break;
          default:
            ze = ut;
            break;
        }
        var dt = ut;
        ut = ze;
        try {
          return pe();
        } finally {
          ut = dt;
        }
      }
      function Rt(pe) {
        var ze = ut;
        return function() {
          var dt = ut;
          ut = ze;
          try {
            return pe.apply(this, arguments);
          } finally {
            ut = dt;
          }
        };
      }
      function ht(pe, ze, dt) {
        var Pt = a.unstable_now(), It;
        if (typeof dt == "object" && dt !== null) {
          var Ln = dt.delay;
          typeof Ln == "number" && Ln > 0 ? It = Pt + Ln : It = Pt;
        } else
          It = Pt;
        var Sn;
        switch (pe) {
          case B:
            Sn = He;
            break;
          case k:
            Sn = gt;
            break;
          case K:
            Sn = Dn;
            break;
          case q:
            Sn = un;
            break;
          case Q:
          default:
            Sn = Je;
            break;
        }
        var Rr = It + Sn, Gt = {
          id: Rn++,
          callback: ze,
          priorityLevel: pe,
          startTime: It,
          expirationTime: Rr,
          sortIndex: -1
        };
        return It > Pt ? (Gt.sortIndex = It, S(Nt, Gt), T(Xt) === null && Gt === T(Nt) && (be ? Ar() : be = !0, gn(Z, It - Pt))) : (Gt.sortIndex = Rr, S(Xt, Gt), !At && !Vt && (At = !0, Zr(We))), Gt;
      }
      function mt() {
      }
      function an() {
        !At && !Vt && (At = !0, Zr(We));
      }
      function Cr() {
        return T(Xt);
      }
      function Gr(pe) {
        pe.callback = null;
      }
      function yn() {
        return ut;
      }
      var Xn = !1, In = null, zn = -1, An = g, Kr = -1;
      function Xr() {
        var pe = a.unstable_now() - Kr;
        return !(pe < An);
      }
      function Jn() {
      }
      function xr(pe) {
        if (pe < 0 || pe > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        pe > 0 ? An = Math.floor(1e3 / pe) : An = g;
      }
      var Jr = function() {
        if (In !== null) {
          var pe = a.unstable_now();
          Kr = pe;
          var ze = !0, dt = !0;
          try {
            dt = In(ze, pe);
          } finally {
            dt ? Tr() : (Xn = !1, In = null);
          }
        } else
          Xn = !1;
      }, Tr;
      if (typeof ge == "function")
        Tr = function() {
          ge(Jr);
        };
      else if (typeof MessageChannel < "u") {
        var Ei = new MessageChannel(), ur = Ei.port2;
        Ei.port1.onmessage = Jr, Tr = function() {
          ur.postMessage(null);
        };
      } else
        Tr = function() {
          de(Jr, 0);
        };
      function Zr(pe) {
        In = pe, Xn || (Xn = !0, Tr());
      }
      function gn(pe, ze) {
        zn = de(function() {
          pe(a.unstable_now());
        }, ze);
      }
      function Ar() {
        Fe(zn), zn = -1;
      }
      var Ca = Jn, Ci = null;
      a.unstable_IdlePriority = K, a.unstable_ImmediatePriority = B, a.unstable_LowPriority = q, a.unstable_NormalPriority = Q, a.unstable_Profiling = Ci, a.unstable_UserBlockingPriority = k, a.unstable_cancelCallback = Gr, a.unstable_continueExecution = an, a.unstable_forceFrameRate = xr, a.unstable_getCurrentPriorityLevel = yn, a.unstable_getFirstCallbackNode = Cr, a.unstable_next = ct, a.unstable_pauseExecution = mt, a.unstable_requestPaint = Ca, a.unstable_runWithPriority = ft, a.unstable_scheduleCallback = ht, a.unstable_shouldYield = Xr, a.unstable_wrapCallback = Rt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(aE)), aE;
}
var TT;
function JT() {
  return TT || (TT = 1, process.env.NODE_ENV === "production" ? xy.exports = eA() : xy.exports = tA()), xy.exports;
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
var RT;
function nA() {
  if (RT)
    return la;
  RT = 1;
  var a = qo, f = JT();
  function p(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var g = /* @__PURE__ */ new Set(), S = {};
  function T(n, r) {
    h(n, r), h(n + "Capture", r);
  }
  function h(n, r) {
    for (S[n] = r, n = 0; n < r.length; n++)
      g.add(r[n]);
  }
  var b = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), O = Object.prototype.hasOwnProperty, N = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, B = {}, k = {};
  function Q(n) {
    return O.call(k, n) ? !0 : O.call(B, n) ? !1 : N.test(n) ? k[n] = !0 : (B[n] = !0, !1);
  }
  function q(n, r, o, s) {
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
  function K(n, r, o, s) {
    if (r === null || typeof r > "u" || q(n, r, o, s))
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
  function ne(n, r, o, s, d, m, x) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = s, this.attributeNamespace = d, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = x;
  }
  var ye = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ye[n] = new ne(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ye[r] = new ne(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ye[n] = new ne(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ye[n] = new ne(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ye[n] = new ne(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ye[n] = new ne(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ye[n] = new ne(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ye[n] = new ne(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ye[n] = new ne(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Ke = /[\-:]([a-z])/g;
  function ve(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Ke,
      ve
    );
    ye[r] = new ne(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Ke, ve);
    ye[r] = new ne(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Ke, ve);
    ye[r] = new ne(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ye[n] = new ne(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ye.xlinkHref = new ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ye[n] = new ne(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Be(n, r, o, s) {
    var d = ye.hasOwnProperty(r) ? ye[r] : null;
    (d !== null ? d.type !== 0 : s || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (K(r, o, d, s) && (o = null), s || d === null ? Q(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : d.mustUseProperty ? n[d.propertyName] = o === null ? d.type === 3 ? !1 : "" : o : (r = d.attributeName, s = d.attributeNamespace, o === null ? n.removeAttribute(r) : (d = d.type, o = d === 3 || d === 4 && o === !0 ? "" : "" + o, s ? n.setAttributeNS(s, r, o) : n.setAttribute(r, o))));
  }
  var yt = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, He = Symbol.for("react.element"), gt = Symbol.for("react.portal"), Je = Symbol.for("react.fragment"), un = Symbol.for("react.strict_mode"), Dn = Symbol.for("react.profiler"), Xt = Symbol.for("react.provider"), Nt = Symbol.for("react.context"), Rn = Symbol.for("react.forward_ref"), Ye = Symbol.for("react.suspense"), ut = Symbol.for("react.suspense_list"), Vt = Symbol.for("react.memo"), At = Symbol.for("react.lazy"), be = Symbol.for("react.offscreen"), de = Symbol.iterator;
  function Fe(n) {
    return n === null || typeof n != "object" ? null : (n = de && n[de] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ge = Object.assign, z;
  function Z(n) {
    if (z === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        z = r && r[1] || "";
      }
    return `
` + z + n;
  }
  var We = !1;
  function Ze(n, r) {
    if (!n || We)
      return "";
    We = !0;
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
          } catch (Y) {
            var s = Y;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (Y) {
            s = Y;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (Y) {
          s = Y;
        }
        n();
      }
    } catch (Y) {
      if (Y && s && typeof Y.stack == "string") {
        for (var d = Y.stack.split(`
`), m = s.stack.split(`
`), x = d.length - 1, _ = m.length - 1; 1 <= x && 0 <= _ && d[x] !== m[_]; )
          _--;
        for (; 1 <= x && 0 <= _; x--, _--)
          if (d[x] !== m[_]) {
            if (x !== 1 || _ !== 1)
              do
                if (x--, _--, 0 > _ || d[x] !== m[_]) {
                  var L = `
` + d[x].replace(" at new ", " at ");
                  return n.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", n.displayName)), L;
                }
              while (1 <= x && 0 <= _);
            break;
          }
      }
    } finally {
      We = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? Z(n) : "";
  }
  function ft(n) {
    switch (n.tag) {
      case 5:
        return Z(n.type);
      case 16:
        return Z("Lazy");
      case 13:
        return Z("Suspense");
      case 19:
        return Z("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ze(n.type, !1), n;
      case 11:
        return n = Ze(n.type.render, !1), n;
      case 1:
        return n = Ze(n.type, !0), n;
      default:
        return "";
    }
  }
  function ct(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Je:
        return "Fragment";
      case gt:
        return "Portal";
      case Dn:
        return "Profiler";
      case un:
        return "StrictMode";
      case Ye:
        return "Suspense";
      case ut:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Nt:
          return (n.displayName || "Context") + ".Consumer";
        case Xt:
          return (n._context.displayName || "Context") + ".Provider";
        case Rn:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Vt:
          return r = n.displayName || null, r !== null ? r : ct(n.type) || "Memo";
        case At:
          r = n._payload, n = n._init;
          try {
            return ct(n(r));
          } catch {
          }
      }
    return null;
  }
  function Rt(n) {
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
        return ct(r);
      case 8:
        return r === un ? "StrictMode" : "Mode";
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
  function ht(n) {
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
  function mt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function an(n) {
    var r = mt(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), s = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var d = o.get, m = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return d.call(this);
      }, set: function(x) {
        s = "" + x, m.call(this, x);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(x) {
        s = "" + x;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Cr(n) {
    n._valueTracker || (n._valueTracker = an(n));
  }
  function Gr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), s = "";
    return n && (s = mt(n) ? n.checked ? "true" : "false" : n.value), n = s, n !== o ? (r.setValue(n), !0) : !1;
  }
  function yn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Xn(n, r) {
    var o = r.checked;
    return ge({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function In(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, s = r.checked != null ? r.checked : r.defaultChecked;
    o = ht(r.value != null ? r.value : o), n._wrapperState = { initialChecked: s, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function zn(n, r) {
    r = r.checked, r != null && Be(n, "checked", r, !1);
  }
  function An(n, r) {
    zn(n, r);
    var o = ht(r.value), s = r.type;
    if (o != null)
      s === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (s === "submit" || s === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Xr(n, r.type, o) : r.hasOwnProperty("defaultValue") && Xr(n, r.type, ht(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Kr(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var s = r.type;
      if (!(s !== "submit" && s !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Xr(n, r, o) {
    (r !== "number" || yn(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var Jn = Array.isArray;
  function xr(n, r, o, s) {
    if (n = n.options, r) {
      r = {};
      for (var d = 0; d < o.length; d++)
        r["$" + o[d]] = !0;
      for (o = 0; o < n.length; o++)
        d = r.hasOwnProperty("$" + n[o].value), n[o].selected !== d && (n[o].selected = d), d && s && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + ht(o), r = null, d = 0; d < n.length; d++) {
        if (n[d].value === o) {
          n[d].selected = !0, s && (n[d].defaultSelected = !0);
          return;
        }
        r !== null || n[d].disabled || (r = n[d]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Jr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(p(91));
    return ge({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Tr(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(p(92));
        if (Jn(o)) {
          if (1 < o.length)
            throw Error(p(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: ht(o) };
  }
  function Ei(n, r) {
    var o = ht(r.value), s = ht(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), s != null && (n.defaultValue = "" + s);
  }
  function ur(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Zr(n) {
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
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Zr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Ar, Ca = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, s, d) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, s, d);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Ar = Ar || document.createElement("div"), Ar.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Ar.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Ci(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var pe = {
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
  }, ze = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pe).forEach(function(n) {
    ze.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), pe[r] = pe[n];
    });
  });
  function dt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || pe.hasOwnProperty(n) && pe[n] ? ("" + r).trim() : r + "px";
  }
  function Pt(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var s = o.indexOf("--") === 0, d = dt(o, r[o], s);
        o === "float" && (o = "cssFloat"), s ? n.setProperty(o, d) : n[o] = d;
      }
  }
  var It = ge({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ln(n, r) {
    if (r) {
      if (It[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(p(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(p(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(p(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(p(62));
    }
  }
  function Sn(n, r) {
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
  var Rr = null;
  function Gt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Lr = null, $t = null, Yt = null;
  function sa(n) {
    if (n = ks(n)) {
      if (typeof Lr != "function")
        throw Error(p(280));
      var r = n.stateNode;
      r && (r = Pe(r), Lr(n.stateNode, n.type, r));
    }
  }
  function zi(n) {
    $t ? Yt ? Yt.push(n) : Yt = [n] : $t = n;
  }
  function El() {
    if ($t) {
      var n = $t, r = Yt;
      if (Yt = $t = null, sa(n), r)
        for (n = 0; n < r.length; n++)
          sa(r[n]);
    }
  }
  function oo(n, r) {
    return n(r);
  }
  function Ko() {
  }
  var $a = !1;
  function Cl(n, r, o) {
    if ($a)
      return n(r, o);
    $a = !0;
    try {
      return oo(n, r, o);
    } finally {
      $a = !1, ($t !== null || Yt !== null) && (Ko(), El());
    }
  }
  function xi(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var s = Pe(o);
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
      throw Error(p(231, r, typeof o));
    return o;
  }
  var xa = !1;
  if (b)
    try {
      var Ti = {};
      Object.defineProperty(Ti, "passive", { get: function() {
        xa = !0;
      } }), window.addEventListener("test", Ti, Ti), window.removeEventListener("test", Ti, Ti);
    } catch {
      xa = !1;
    }
  function ca(n, r, o, s, d, m, x, _, L) {
    var Y = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, Y);
    } catch (le) {
      this.onError(le);
    }
  }
  var Nr = !1, Ri = null, Ta = !1, Ra = null, A = { onError: function(n) {
    Nr = !0, Ri = n;
  } };
  function ae(n, r, o, s, d, m, x, _, L) {
    Nr = !1, Ri = null, ca.apply(A, arguments);
  }
  function se(n, r, o, s, d, m, x, _, L) {
    if (ae.apply(this, arguments), Nr) {
      if (Nr) {
        var Y = Ri;
        Nr = !1, Ri = null;
      } else
        throw Error(p(198));
      Ta || (Ta = !0, Ra = Y);
    }
  }
  function Ne(n) {
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
  function Ct(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function wt(n) {
    if (Ne(n) !== n)
      throw Error(p(188));
  }
  function Qe(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ne(n), r === null)
        throw Error(p(188));
      return r !== n ? null : n;
    }
    for (var o = n, s = r; ; ) {
      var d = o.return;
      if (d === null)
        break;
      var m = d.alternate;
      if (m === null) {
        if (s = d.return, s !== null) {
          o = s;
          continue;
        }
        break;
      }
      if (d.child === m.child) {
        for (m = d.child; m; ) {
          if (m === o)
            return wt(d), n;
          if (m === s)
            return wt(d), r;
          m = m.sibling;
        }
        throw Error(p(188));
      }
      if (o.return !== s.return)
        o = d, s = m;
      else {
        for (var x = !1, _ = d.child; _; ) {
          if (_ === o) {
            x = !0, o = d, s = m;
            break;
          }
          if (_ === s) {
            x = !0, s = d, o = m;
            break;
          }
          _ = _.sibling;
        }
        if (!x) {
          for (_ = m.child; _; ) {
            if (_ === o) {
              x = !0, o = m, s = d;
              break;
            }
            if (_ === s) {
              x = !0, s = m, o = d;
              break;
            }
            _ = _.sibling;
          }
          if (!x)
            throw Error(p(189));
        }
      }
      if (o.alternate !== s)
        throw Error(p(190));
    }
    if (o.tag !== 3)
      throw Error(p(188));
    return o.stateNode.current === o ? n : r;
  }
  function pt(n) {
    return n = Qe(n), n !== null ? jn(n) : null;
  }
  function jn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = jn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var en = f.unstable_scheduleCallback, sn = f.unstable_cancelCallback, wr = f.unstable_shouldYield, wa = f.unstable_requestPaint, Mt = f.unstable_now, Zn = f.unstable_getCurrentPriorityLevel, Mr = f.unstable_ImmediatePriority, vt = f.unstable_UserBlockingPriority, ji = f.unstable_NormalPriority, xl = f.unstable_LowPriority, Xo = f.unstable_IdlePriority, Tl = null, ei = null;
  function fs(n) {
    if (ei && typeof ei.onCommitFiberRoot == "function")
      try {
        ei.onCommitFiberRoot(Tl, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Ur = Math.clz32 ? Math.clz32 : Sc, ds = Math.log, ps = Math.LN2;
  function Sc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ds(n) / ps | 0) | 0;
  }
  var Jo = 64, Rl = 4194304;
  function fa(n) {
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
  function Fr(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var s = 0, d = n.suspendedLanes, m = n.pingedLanes, x = o & 268435455;
    if (x !== 0) {
      var _ = x & ~d;
      _ !== 0 ? s = fa(_) : (m &= x, m !== 0 && (s = fa(m)));
    } else
      x = o & ~d, x !== 0 ? s = fa(x) : m !== 0 && (s = fa(m));
    if (s === 0)
      return 0;
    if (r !== 0 && r !== s && !(r & d) && (d = s & -s, m = r & -r, d >= m || d === 16 && (m & 4194240) !== 0))
      return r;
    if (s & 4 && (s |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= s; 0 < r; )
        o = 31 - Ur(r), d = 1 << o, s |= n[o], r &= ~d;
    return s;
  }
  function wl(n, r) {
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
  function bl(n, r) {
    for (var o = n.suspendedLanes, s = n.pingedLanes, d = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var x = 31 - Ur(m), _ = 1 << x, L = d[x];
      L === -1 ? (!(_ & o) || _ & s) && (d[x] = wl(_, r)) : L <= r && (n.expiredLanes |= _), m &= ~_;
    }
  }
  function _l(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Zo() {
    var n = Jo;
    return Jo <<= 1, !(Jo & 4194240) && (Jo = 64), n;
  }
  function eu(n) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function Ya(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Ur(r), n[r] = o;
  }
  function yd(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var s = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var d = 31 - Ur(o), m = 1 << d;
      r[d] = 0, s[d] = -1, n[d] = -1, o &= ~m;
    }
  }
  function ba(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var s = 31 - Ur(o), d = 1 << s;
      d & r | n[s] & r && (n[s] |= r), o &= ~d;
    }
  }
  var Ut = 0;
  function tu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var uo, nu, bt, ru, iu, rt = !1, so = [], En = null, ti = null, zr = null, kl = /* @__PURE__ */ new Map(), wn = /* @__PURE__ */ new Map(), Wt = [], Ec = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ni(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        En = null;
        break;
      case "dragenter":
      case "dragleave":
        ti = null;
        break;
      case "mouseover":
      case "mouseout":
        zr = null;
        break;
      case "pointerover":
      case "pointerout":
        kl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wn.delete(r.pointerId);
    }
  }
  function er(n, r, o, s, d, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: s, nativeEvent: m, targetContainers: [d] }, r !== null && (r = ks(r), r !== null && nu(r)), n) : (n.eventSystemFlags |= s, r = n.targetContainers, d !== null && r.indexOf(d) === -1 && r.push(d), n);
  }
  function _a(n, r, o, s, d) {
    switch (r) {
      case "focusin":
        return En = er(En, n, r, o, s, d), !0;
      case "dragenter":
        return ti = er(ti, n, r, o, s, d), !0;
      case "mouseover":
        return zr = er(zr, n, r, o, s, d), !0;
      case "pointerover":
        var m = d.pointerId;
        return kl.set(m, er(kl.get(m) || null, n, r, o, s, d)), !0;
      case "gotpointercapture":
        return m = d.pointerId, wn.set(m, er(wn.get(m) || null, n, r, o, s, d)), !0;
    }
    return !1;
  }
  function Cc(n) {
    var r = Vi(n.target);
    if (r !== null) {
      var o = Ne(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = Ct(o), r !== null) {
            n.blockedOn = r, iu(n.priority, function() {
              bt(o);
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
  function Wa(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = lu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var s = new o.constructor(o.type, o);
        Rr = s, o.target.dispatchEvent(s), Rr = null;
      } else
        return r = ks(o), r !== null && nu(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Ol(n, r, o) {
    Wa(n) && o.delete(r);
  }
  function xc() {
    rt = !1, En !== null && Wa(En) && (En = null), ti !== null && Wa(ti) && (ti = null), zr !== null && Wa(zr) && (zr = null), kl.forEach(Ol), wn.forEach(Ol);
  }
  function Hi(n, r) {
    n.blockedOn === r && (n.blockedOn = null, rt || (rt = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, xc)));
  }
  function Dl(n) {
    function r(d) {
      return Hi(d, n);
    }
    if (0 < so.length) {
      Hi(so[0], n);
      for (var o = 1; o < so.length; o++) {
        var s = so[o];
        s.blockedOn === n && (s.blockedOn = null);
      }
    }
    for (En !== null && Hi(En, n), ti !== null && Hi(ti, n), zr !== null && Hi(zr, n), kl.forEach(r), wn.forEach(r), o = 0; o < Wt.length; o++)
      s = Wt[o], s.blockedOn === n && (s.blockedOn = null);
    for (; 0 < Wt.length && (o = Wt[0], o.blockedOn === null); )
      Cc(o), o.blockedOn === null && Wt.shift();
  }
  var Qa = yt.ReactCurrentBatchConfig, Pi = !0;
  function au(n, r, o, s) {
    var d = Ut, m = Qa.transition;
    Qa.transition = null;
    try {
      Ut = 1, Ll(n, r, o, s);
    } finally {
      Ut = d, Qa.transition = m;
    }
  }
  function Al(n, r, o, s) {
    var d = Ut, m = Qa.transition;
    Qa.transition = null;
    try {
      Ut = 4, Ll(n, r, o, s);
    } finally {
      Ut = d, Qa.transition = m;
    }
  }
  function Ll(n, r, o, s) {
    if (Pi) {
      var d = lu(n, r, o, s);
      if (d === null)
        Ac(n, r, s, co, o), ni(n, s);
      else if (_a(d, n, r, o, s))
        s.stopPropagation();
      else if (ni(n, s), r & 4 && -1 < Ec.indexOf(n)) {
        for (; d !== null; ) {
          var m = ks(d);
          if (m !== null && uo(m), m = lu(n, r, o, s), m === null && Ac(n, r, s, co, o), m === d)
            break;
          d = m;
        }
        d !== null && s.stopPropagation();
      } else
        Ac(n, r, s, null, o);
    }
  }
  var co = null;
  function lu(n, r, o, s) {
    if (co = null, n = Gt(s), n = Vi(n), n !== null)
      if (r = Ne(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = Ct(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return co = n, null;
  }
  function vs(n) {
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
        switch (Zn()) {
          case Mr:
            return 1;
          case vt:
            return 4;
          case ji:
          case xl:
            return 16;
          case Xo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var da = null, C = null, D = null;
  function $() {
    if (D)
      return D;
    var n, r = C, o = r.length, s, d = "value" in da ? da.value : da.textContent, m = d.length;
    for (n = 0; n < o && r[n] === d[n]; n++)
      ;
    var x = o - n;
    for (s = 1; s <= x && r[o - s] === d[m - s]; s++)
      ;
    return D = d.slice(n, 1 < s ? 1 - s : void 0);
  }
  function G(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ce() {
    return !0;
  }
  function qe() {
    return !1;
  }
  function Se(n) {
    function r(o, s, d, m, x) {
      this._reactName = o, this._targetInst = d, this.type = s, this.nativeEvent = m, this.target = x, this.currentTarget = null;
      for (var _ in n)
        n.hasOwnProperty(_) && (o = n[_], this[_] = o ? o(m) : m[_]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? ce : qe, this.isPropagationStopped = qe, this;
    }
    return ge(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = ce);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = ce);
    }, persist: function() {
    }, isPersistent: ce }), r;
  }
  var $e = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, St = Se($e), Lt = ge({}, $e, { view: 0, detail: 0 }), tn = Se(Lt), Kt, nn, ln, _t = ge({}, Lt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== ln && (ln && n.type === "mousemove" ? (Kt = n.screenX - ln.screenX, nn = n.screenY - ln.screenY) : nn = Kt = 0, ln = n), Kt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : nn;
  } }), qa = Se(_t), ou = ge({}, _t, { dataTransfer: 0 }), hs = Se(ou), gd = ge({}, Lt, { relatedTarget: 0 }), pa = Se(gd), ms = ge({}, $e, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ys = Se(ms), Sd = ge({}, $e, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Uy = Se(Sd), Fy = ge({}, $e, { data: 0 }), Ed = Se(Fy), Cd = {
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
  }, Nv = {
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
  }, Mv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Uv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Mv[n]) ? !!r[n] : !1;
  }
  function xd() {
    return Uv;
  }
  var Ga = ge({}, Lt, { key: function(n) {
    if (n.key) {
      var r = Cd[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = G(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Nv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xd, charCode: function(n) {
    return n.type === "keypress" ? G(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? G(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), zy = Se(Ga), Td = ge({}, _t, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Tc = Se(Td), Rd = ge({}, Lt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xd }), jy = Se(Rd), Rc = ge({}, $e, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Fv = Se(Rc), ri = ge({}, _t, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ka = Se(ri), Hn = [9, 13, 27, 32], va = b && "CompositionEvent" in window, fo = null;
  b && "documentMode" in document && (fo = document.documentMode);
  var wc = b && "TextEvent" in window && !fo, zv = b && (!va || fo && 8 < fo && 11 >= fo), uu = " ", jv = !1;
  function Hv(n, r) {
    switch (n) {
      case "keyup":
        return Hn.indexOf(r.keyCode) !== -1;
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
  function bc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var su = !1;
  function Hy(n, r) {
    switch (n) {
      case "compositionend":
        return bc(r);
      case "keypress":
        return r.which !== 32 ? null : (jv = !0, uu);
      case "textInput":
        return n = r.data, n === uu && jv ? null : n;
      default:
        return null;
    }
  }
  function Py(n, r) {
    if (su)
      return n === "compositionend" || !va && Hv(n, r) ? (n = $(), D = C = da = null, su = !1, n) : null;
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
        return zv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Pv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Bv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Pv[n.type] : r === "textarea";
  }
  function Vv(n, r, o, s) {
    zi(s), r = ws(r, "onChange"), 0 < r.length && (o = new St("onChange", "change", null, o, s), n.push({ event: o, listeners: r }));
  }
  var gs = null, cu = null;
  function fu(n) {
    Dc(n, 0);
  }
  function du(n) {
    var r = vu(n);
    if (Gr(r))
      return n;
  }
  function Iv(n, r) {
    if (n === "change")
      return r;
  }
  var wd = !1;
  if (b) {
    var bd;
    if (b) {
      var _d = "oninput" in document;
      if (!_d) {
        var $v = document.createElement("div");
        $v.setAttribute("oninput", "return;"), _d = typeof $v.oninput == "function";
      }
      bd = _d;
    } else
      bd = !1;
    wd = bd && (!document.documentMode || 9 < document.documentMode);
  }
  function Yv() {
    gs && (gs.detachEvent("onpropertychange", Wv), cu = gs = null);
  }
  function Wv(n) {
    if (n.propertyName === "value" && du(cu)) {
      var r = [];
      Vv(r, cu, n, Gt(n)), Cl(fu, r);
    }
  }
  function By(n, r, o) {
    n === "focusin" ? (Yv(), gs = r, cu = o, gs.attachEvent("onpropertychange", Wv)) : n === "focusout" && Yv();
  }
  function Vy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return du(cu);
  }
  function Iy(n, r) {
    if (n === "click")
      return du(r);
  }
  function Qv(n, r) {
    if (n === "input" || n === "change")
      return du(r);
  }
  function $y(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Bi = typeof Object.is == "function" ? Object.is : $y;
  function Ss(n, r) {
    if (Bi(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), s = Object.keys(r);
    if (o.length !== s.length)
      return !1;
    for (s = 0; s < o.length; s++) {
      var d = o[s];
      if (!O.call(r, d) || !Bi(n[d], r[d]))
        return !1;
    }
    return !0;
  }
  function qv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Gv(n, r) {
    var o = qv(n);
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
      o = qv(o);
    }
  }
  function Kv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Kv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function _c() {
    for (var n = window, r = yn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = yn(n.document);
    }
    return r;
  }
  function Xa(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function kc(n) {
    var r = _c(), o = n.focusedElem, s = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Kv(o.ownerDocument.documentElement, o)) {
      if (s !== null && Xa(o)) {
        if (r = s.start, n = s.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var d = o.textContent.length, m = Math.min(s.start, d);
          s = s.end === void 0 ? m : Math.min(s.end, d), !n.extend && m > s && (d = s, s = m, m = d), d = Gv(o, m);
          var x = Gv(
            o,
            s
          );
          d && x && (n.rangeCount !== 1 || n.anchorNode !== d.node || n.anchorOffset !== d.offset || n.focusNode !== x.node || n.focusOffset !== x.offset) && (r = r.createRange(), r.setStart(d.node, d.offset), n.removeAllRanges(), m > s ? (n.addRange(r), n.extend(x.node, x.offset)) : (r.setEnd(x.node, x.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Xv = b && "documentMode" in document && 11 >= document.documentMode, ha = null, kd = null, Es = null, Od = !1;
  function Jv(n, r, o) {
    var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Od || ha == null || ha !== yn(s) || (s = ha, "selectionStart" in s && Xa(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), Es && Ss(Es, s) || (Es = s, s = ws(kd, "onSelect"), 0 < s.length && (r = new St("onSelect", "select", null, r, o), n.push({ event: r, listeners: s }), r.target = ha)));
  }
  function Oc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var po = { animationend: Oc("Animation", "AnimationEnd"), animationiteration: Oc("Animation", "AnimationIteration"), animationstart: Oc("Animation", "AnimationStart"), transitionend: Oc("Transition", "TransitionEnd") }, Dd = {}, Ad = {};
  b && (Ad = document.createElement("div").style, "AnimationEvent" in window || (delete po.animationend.animation, delete po.animationiteration.animation, delete po.animationstart.animation), "TransitionEvent" in window || delete po.transitionend.transition);
  function tr(n) {
    if (Dd[n])
      return Dd[n];
    if (!po[n])
      return n;
    var r = po[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in Ad)
        return Dd[n] = r[o];
    return n;
  }
  var Ld = tr("animationend"), Zv = tr("animationiteration"), eh = tr("animationstart"), th = tr("transitionend"), nh = /* @__PURE__ */ new Map(), rh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ja(n, r) {
    nh.set(n, r), T(r, [n]);
  }
  for (var Cs = 0; Cs < rh.length; Cs++) {
    var vo = rh[Cs], Yy = vo.toLowerCase(), xs = vo[0].toUpperCase() + vo.slice(1);
    Ja(Yy, "on" + xs);
  }
  Ja(Ld, "onAnimationEnd"), Ja(Zv, "onAnimationIteration"), Ja(eh, "onAnimationStart"), Ja("dblclick", "onDoubleClick"), Ja("focusin", "onFocus"), Ja("focusout", "onBlur"), Ja(th, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), T("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), T("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), T("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), T("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ts = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Wy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ts));
  function ih(n, r, o) {
    var s = n.type || "unknown-event";
    n.currentTarget = o, se(s, r, void 0, n), n.currentTarget = null;
  }
  function Dc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var s = n[o], d = s.event;
      s = s.listeners;
      e: {
        var m = void 0;
        if (r)
          for (var x = s.length - 1; 0 <= x; x--) {
            var _ = s[x], L = _.instance, Y = _.currentTarget;
            if (_ = _.listener, L !== m && d.isPropagationStopped())
              break e;
            ih(d, _, Y), m = L;
          }
        else
          for (x = 0; x < s.length; x++) {
            if (_ = s[x], L = _.instance, Y = _.currentTarget, _ = _.listener, L !== m && d.isPropagationStopped())
              break e;
            ih(d, _, Y), m = L;
          }
      }
    }
    if (Ta)
      throw n = Ra, Ta = !1, Ra = null, n;
  }
  function rn(n, r) {
    var o = r[Hd];
    o === void 0 && (o = r[Hd] = /* @__PURE__ */ new Set());
    var s = n + "__bubble";
    o.has(s) || (ah(r, n, 2, !1), o.add(s));
  }
  function Nl(n, r, o) {
    var s = 0;
    r && (s |= 4), ah(o, n, s, r);
  }
  var Za = "_reactListening" + Math.random().toString(36).slice(2);
  function pu(n) {
    if (!n[Za]) {
      n[Za] = !0, g.forEach(function(o) {
        o !== "selectionchange" && (Wy.has(o) || Nl(o, !1, n), Nl(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Za] || (r[Za] = !0, Nl("selectionchange", !1, r));
    }
  }
  function ah(n, r, o, s) {
    switch (vs(r)) {
      case 1:
        var d = au;
        break;
      case 4:
        d = Al;
        break;
      default:
        d = Ll;
    }
    o = d.bind(null, r, o, n), d = void 0, !xa || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (d = !0), s ? d !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: d }) : n.addEventListener(r, o, !0) : d !== void 0 ? n.addEventListener(r, o, { passive: d }) : n.addEventListener(r, o, !1);
  }
  function Ac(n, r, o, s, d) {
    var m = s;
    if (!(r & 1) && !(r & 2) && s !== null)
      e:
        for (; ; ) {
          if (s === null)
            return;
          var x = s.tag;
          if (x === 3 || x === 4) {
            var _ = s.stateNode.containerInfo;
            if (_ === d || _.nodeType === 8 && _.parentNode === d)
              break;
            if (x === 4)
              for (x = s.return; x !== null; ) {
                var L = x.tag;
                if ((L === 3 || L === 4) && (L = x.stateNode.containerInfo, L === d || L.nodeType === 8 && L.parentNode === d))
                  return;
                x = x.return;
              }
            for (; _ !== null; ) {
              if (x = Vi(_), x === null)
                return;
              if (L = x.tag, L === 5 || L === 6) {
                s = m = x;
                continue e;
              }
              _ = _.parentNode;
            }
          }
          s = s.return;
        }
    Cl(function() {
      var Y = m, le = Gt(o), oe = [];
      e: {
        var ie = nh.get(n);
        if (ie !== void 0) {
          var xe = St, _e = n;
          switch (n) {
            case "keypress":
              if (G(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              xe = zy;
              break;
            case "focusin":
              _e = "focus", xe = pa;
              break;
            case "focusout":
              _e = "blur", xe = pa;
              break;
            case "beforeblur":
            case "afterblur":
              xe = pa;
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
              xe = qa;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              xe = hs;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              xe = jy;
              break;
            case Ld:
            case Zv:
            case eh:
              xe = ys;
              break;
            case th:
              xe = Fv;
              break;
            case "scroll":
              xe = tn;
              break;
            case "wheel":
              xe = Ka;
              break;
            case "copy":
            case "cut":
            case "paste":
              xe = Uy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              xe = Tc;
          }
          var De = (r & 4) !== 0, Un = !De && n === "scroll", j = De ? ie !== null ? ie + "Capture" : null : ie;
          De = [];
          for (var U = Y, V; U !== null; ) {
            V = U;
            var fe = V.stateNode;
            if (V.tag === 5 && fe !== null && (V = fe, j !== null && (fe = xi(U, j), fe != null && De.push(Rs(U, fe, V)))), Un)
              break;
            U = U.return;
          }
          0 < De.length && (ie = new xe(ie, _e, null, o, le), oe.push({ event: ie, listeners: De }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ie = n === "mouseover" || n === "pointerover", xe = n === "mouseout" || n === "pointerout", ie && o !== Rr && (_e = o.relatedTarget || o.fromElement) && (Vi(_e) || _e[el]))
            break e;
          if ((xe || ie) && (ie = le.window === le ? le : (ie = le.ownerDocument) ? ie.defaultView || ie.parentWindow : window, xe ? (_e = o.relatedTarget || o.toElement, xe = Y, _e = _e ? Vi(_e) : null, _e !== null && (Un = Ne(_e), _e !== Un || _e.tag !== 5 && _e.tag !== 6) && (_e = null)) : (xe = null, _e = Y), xe !== _e)) {
            if (De = qa, fe = "onMouseLeave", j = "onMouseEnter", U = "mouse", (n === "pointerout" || n === "pointerover") && (De = Tc, fe = "onPointerLeave", j = "onPointerEnter", U = "pointer"), Un = xe == null ? ie : vu(xe), V = _e == null ? ie : vu(_e), ie = new De(fe, U + "leave", xe, o, le), ie.target = Un, ie.relatedTarget = V, fe = null, Vi(le) === Y && (De = new De(j, U + "enter", _e, o, le), De.target = V, De.relatedTarget = Un, fe = De), Un = fe, xe && _e)
              t: {
                for (De = xe, j = _e, U = 0, V = De; V; V = ho(V))
                  U++;
                for (V = 0, fe = j; fe; fe = ho(fe))
                  V++;
                for (; 0 < U - V; )
                  De = ho(De), U--;
                for (; 0 < V - U; )
                  j = ho(j), V--;
                for (; U--; ) {
                  if (De === j || j !== null && De === j.alternate)
                    break t;
                  De = ho(De), j = ho(j);
                }
                De = null;
              }
            else
              De = null;
            xe !== null && Nd(oe, ie, xe, De, !1), _e !== null && Un !== null && Nd(oe, Un, _e, De, !0);
          }
        }
        e: {
          if (ie = Y ? vu(Y) : window, xe = ie.nodeName && ie.nodeName.toLowerCase(), xe === "select" || xe === "input" && ie.type === "file")
            var Le = Iv;
          else if (Bv(ie))
            if (wd)
              Le = Qv;
            else {
              Le = Vy;
              var Ge = By;
            }
          else
            (xe = ie.nodeName) && xe.toLowerCase() === "input" && (ie.type === "checkbox" || ie.type === "radio") && (Le = Iy);
          if (Le && (Le = Le(n, Y))) {
            Vv(oe, Le, o, le);
            break e;
          }
          Ge && Ge(n, ie, Y), n === "focusout" && (Ge = ie._wrapperState) && Ge.controlled && ie.type === "number" && Xr(ie, "number", ie.value);
        }
        switch (Ge = Y ? vu(Y) : window, n) {
          case "focusin":
            (Bv(Ge) || Ge.contentEditable === "true") && (ha = Ge, kd = Y, Es = null);
            break;
          case "focusout":
            Es = kd = ha = null;
            break;
          case "mousedown":
            Od = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Od = !1, Jv(oe, o, le);
            break;
          case "selectionchange":
            if (Xv)
              break;
          case "keydown":
          case "keyup":
            Jv(oe, o, le);
        }
        var ke;
        if (va)
          e: {
            switch (n) {
              case "compositionstart":
                var Xe = "onCompositionStart";
                break e;
              case "compositionend":
                Xe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Xe = "onCompositionUpdate";
                break e;
            }
            Xe = void 0;
          }
        else
          su ? Hv(n, o) && (Xe = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (Xe = "onCompositionStart");
        Xe && (zv && o.locale !== "ko" && (su || Xe !== "onCompositionStart" ? Xe === "onCompositionEnd" && su && (ke = $()) : (da = le, C = "value" in da ? da.value : da.textContent, su = !0)), Ge = ws(Y, Xe), 0 < Ge.length && (Xe = new Ed(Xe, n, null, o, le), oe.push({ event: Xe, listeners: Ge }), ke ? Xe.data = ke : (ke = bc(o), ke !== null && (Xe.data = ke)))), (ke = wc ? Hy(n, o) : Py(n, o)) && (Y = ws(Y, "onBeforeInput"), 0 < Y.length && (le = new Ed("onBeforeInput", "beforeinput", null, o, le), oe.push({ event: le, listeners: Y }), le.data = ke));
      }
      Dc(oe, r);
    });
  }
  function Rs(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function ws(n, r) {
    for (var o = r + "Capture", s = []; n !== null; ) {
      var d = n, m = d.stateNode;
      d.tag === 5 && m !== null && (d = m, m = xi(n, o), m != null && s.unshift(Rs(n, m, d)), m = xi(n, r), m != null && s.push(Rs(n, m, d))), n = n.return;
    }
    return s;
  }
  function ho(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Nd(n, r, o, s, d) {
    for (var m = r._reactName, x = []; o !== null && o !== s; ) {
      var _ = o, L = _.alternate, Y = _.stateNode;
      if (L !== null && L === s)
        break;
      _.tag === 5 && Y !== null && (_ = Y, d ? (L = xi(o, m), L != null && x.unshift(Rs(o, L, _))) : d || (L = xi(o, m), L != null && x.push(Rs(o, L, _)))), o = o.return;
    }
    x.length !== 0 && n.push({ event: r, listeners: x });
  }
  var Md = /\r\n?/g, Qy = /\u0000|\uFFFD/g;
  function Ud(n) {
    return (typeof n == "string" ? n : "" + n).replace(Md, `
`).replace(Qy, "");
  }
  function Lc(n, r, o) {
    if (r = Ud(r), Ud(n) !== r && o)
      throw Error(p(425));
  }
  function Nc() {
  }
  var Fd = null, mo = null;
  function bs(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var yo = typeof setTimeout == "function" ? setTimeout : void 0, lh = typeof clearTimeout == "function" ? clearTimeout : void 0, zd = typeof Promise == "function" ? Promise : void 0, jd = typeof queueMicrotask == "function" ? queueMicrotask : typeof zd < "u" ? function(n) {
    return zd.resolve(null).then(n).catch(qy);
  } : yo;
  function qy(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ml(n, r) {
    var o = r, s = 0;
    do {
      var d = o.nextSibling;
      if (n.removeChild(o), d && d.nodeType === 8)
        if (o = d.data, o === "/$") {
          if (s === 0) {
            n.removeChild(d), Dl(r);
            return;
          }
          s--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || s++;
      o = d;
    } while (o);
    Dl(r);
  }
  function ma(n) {
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
  function _s(n) {
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
  var Ul = Math.random().toString(36).slice(2), ka = "__reactFiber$" + Ul, go = "__reactProps$" + Ul, el = "__reactContainer$" + Ul, Hd = "__reactEvents$" + Ul, Gy = "__reactListeners$" + Ul, Pd = "__reactHandles$" + Ul;
  function Vi(n) {
    var r = n[ka];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[el] || o[ka]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = _s(n); n !== null; ) {
            if (o = n[ka])
              return o;
            n = _s(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function ks(n) {
    return n = n[ka] || n[el], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function vu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(p(33));
  }
  function Pe(n) {
    return n[go] || null;
  }
  var Fl = [], cn = -1;
  function st(n) {
    return { current: n };
  }
  function Bt(n) {
    0 > cn || (n.current = Fl[cn], Fl[cn] = null, cn--);
  }
  function Qt(n, r) {
    cn++, Fl[cn] = n.current, n.current = r;
  }
  var Oa = {}, tt = st(Oa), bn = st(!1), ii = Oa;
  function Ii(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return Oa;
    var s = n.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === r)
      return s.__reactInternalMemoizedMaskedChildContext;
    var d = {}, m;
    for (m in o)
      d[m] = r[m];
    return s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = d), d;
  }
  function vn(n) {
    return n = n.childContextTypes, n != null;
  }
  function $i() {
    Bt(bn), Bt(tt);
  }
  function zl(n, r, o) {
    if (tt.current !== Oa)
      throw Error(p(168));
    Qt(tt, r), Qt(bn, o);
  }
  function Os(n, r, o) {
    var s = n.stateNode;
    if (r = r.childContextTypes, typeof s.getChildContext != "function")
      return o;
    s = s.getChildContext();
    for (var d in s)
      if (!(d in r))
        throw Error(p(108, Rt(n) || "Unknown", d));
    return ge({}, o, s);
  }
  function Mc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Oa, ii = tt.current, Qt(tt, n), Qt(bn, bn.current), !0;
  }
  function oh(n, r, o) {
    var s = n.stateNode;
    if (!s)
      throw Error(p(169));
    o ? (n = Os(n, r, ii), s.__reactInternalMemoizedMergedChildContext = n, Bt(bn), Bt(tt), Qt(tt, n)) : Bt(bn), Qt(bn, o);
  }
  var wi = null, nr = !1, Ds = !1;
  function Bd(n) {
    wi === null ? wi = [n] : wi.push(n);
  }
  function Vd(n) {
    nr = !0, Bd(n);
  }
  function ai() {
    if (!Ds && wi !== null) {
      Ds = !0;
      var n = 0, r = Ut;
      try {
        var o = wi;
        for (Ut = 1; n < o.length; n++) {
          var s = o[n];
          do
            s = s(!0);
          while (s !== null);
        }
        wi = null, nr = !1;
      } catch (d) {
        throw wi !== null && (wi = wi.slice(n + 1)), en(Mr, ai), d;
      } finally {
        Ut = r, Ds = !1;
      }
    }
    return null;
  }
  var jl = [], li = 0, So = null, hu = 0, oi = [], br = 0, Yi = null, sr = 1, tl = "";
  function bi(n, r) {
    jl[li++] = hu, jl[li++] = So, So = n, hu = r;
  }
  function Id(n, r, o) {
    oi[br++] = sr, oi[br++] = tl, oi[br++] = Yi, Yi = n;
    var s = sr;
    n = tl;
    var d = 32 - Ur(s) - 1;
    s &= ~(1 << d), o += 1;
    var m = 32 - Ur(r) + d;
    if (30 < m) {
      var x = d - d % 5;
      m = (s & (1 << x) - 1).toString(32), s >>= x, d -= x, sr = 1 << 32 - Ur(r) + d | o << d | s, tl = m + n;
    } else
      sr = 1 << m | o << d | s, tl = n;
  }
  function Uc(n) {
    n.return !== null && (bi(n, 1), Id(n, 1, 0));
  }
  function $d(n) {
    for (; n === So; )
      So = jl[--li], jl[li] = null, hu = jl[--li], jl[li] = null;
    for (; n === Yi; )
      Yi = oi[--br], oi[br] = null, tl = oi[--br], oi[br] = null, sr = oi[--br], oi[br] = null;
  }
  var _i = null, ui = null, fn = !1, Wi = null;
  function Yd(n, r) {
    var o = ea(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function uh(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, _i = n, ui = ma(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, _i = n, ui = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = Yi !== null ? { id: sr, overflow: tl } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = ea(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, _i = n, ui = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Fc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function zc(n) {
    if (fn) {
      var r = ui;
      if (r) {
        var o = r;
        if (!uh(n, r)) {
          if (Fc(n))
            throw Error(p(418));
          r = ma(o.nextSibling);
          var s = _i;
          r && uh(n, r) ? Yd(s, o) : (n.flags = n.flags & -4097 | 2, fn = !1, _i = n);
        }
      } else {
        if (Fc(n))
          throw Error(p(418));
        n.flags = n.flags & -4097 | 2, fn = !1, _i = n;
      }
    }
  }
  function sh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    _i = n;
  }
  function jc(n) {
    if (n !== _i)
      return !1;
    if (!fn)
      return sh(n), fn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !bs(n.type, n.memoizedProps)), r && (r = ui)) {
      if (Fc(n))
        throw ch(), Error(p(418));
      for (; r; )
        Yd(n, r), r = ma(r.nextSibling);
    }
    if (sh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(p(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                ui = ma(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ui = null;
      }
    } else
      ui = _i ? ma(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ch() {
    for (var n = ui; n; )
      n = ma(n.nextSibling);
  }
  function Cn() {
    ui = _i = null, fn = !1;
  }
  function Wd(n) {
    Wi === null ? Wi = [n] : Wi.push(n);
  }
  var Hc = yt.ReactCurrentBatchConfig;
  function Eo(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(p(309));
          var s = o.stateNode;
        }
        if (!s)
          throw Error(p(147, n));
        var d = s, m = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(x) {
          var _ = d.refs;
          x === null ? delete _[m] : _[m] = x;
        }, r._stringRef = m, r);
      }
      if (typeof n != "string")
        throw Error(p(284));
      if (!o._owner)
        throw Error(p(290, n));
    }
    return n;
  }
  function Da(n, r) {
    throw n = Object.prototype.toString.call(r), Error(p(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function fh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Pc(n) {
    function r(j, U) {
      if (n) {
        var V = j.deletions;
        V === null ? (j.deletions = [U], j.flags |= 16) : V.push(U);
      }
    }
    function o(j, U) {
      if (!n)
        return null;
      for (; U !== null; )
        r(j, U), U = U.sibling;
      return null;
    }
    function s(j, U) {
      for (j = /* @__PURE__ */ new Map(); U !== null; )
        U.key !== null ? j.set(U.key, U) : j.set(U.index, U), U = U.sibling;
      return j;
    }
    function d(j, U) {
      return j = Wl(j, U), j.index = 0, j.sibling = null, j;
    }
    function m(j, U, V) {
      return j.index = V, n ? (V = j.alternate, V !== null ? (V = V.index, V < U ? (j.flags |= 2, U) : V) : (j.flags |= 2, U)) : (j.flags |= 1048576, U);
    }
    function x(j) {
      return n && j.alternate === null && (j.flags |= 2), j;
    }
    function _(j, U, V, fe) {
      return U === null || U.tag !== 6 ? (U = kf(V, j.mode, fe), U.return = j, U) : (U = d(U, V), U.return = j, U);
    }
    function L(j, U, V, fe) {
      var Le = V.type;
      return Le === Je ? le(j, U, V.props.children, fe, V.key) : U !== null && (U.elementType === Le || typeof Le == "object" && Le !== null && Le.$$typeof === At && fh(Le) === U.type) ? (fe = d(U, V.props), fe.ref = Eo(j, U, V), fe.return = j, fe) : (fe = bf(V.type, V.key, V.props, null, j.mode, fe), fe.ref = Eo(j, U, V), fe.return = j, fe);
    }
    function Y(j, U, V, fe) {
      return U === null || U.tag !== 4 || U.stateNode.containerInfo !== V.containerInfo || U.stateNode.implementation !== V.implementation ? (U = qs(V, j.mode, fe), U.return = j, U) : (U = d(U, V.children || []), U.return = j, U);
    }
    function le(j, U, V, fe, Le) {
      return U === null || U.tag !== 7 ? (U = Uo(V, j.mode, fe, Le), U.return = j, U) : (U = d(U, V), U.return = j, U);
    }
    function oe(j, U, V) {
      if (typeof U == "string" && U !== "" || typeof U == "number")
        return U = kf("" + U, j.mode, V), U.return = j, U;
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case He:
            return V = bf(U.type, U.key, U.props, null, j.mode, V), V.ref = Eo(j, null, U), V.return = j, V;
          case gt:
            return U = qs(U, j.mode, V), U.return = j, U;
          case At:
            var fe = U._init;
            return oe(j, fe(U._payload), V);
        }
        if (Jn(U) || Fe(U))
          return U = Uo(U, j.mode, V, null), U.return = j, U;
        Da(j, U);
      }
      return null;
    }
    function ie(j, U, V, fe) {
      var Le = U !== null ? U.key : null;
      if (typeof V == "string" && V !== "" || typeof V == "number")
        return Le !== null ? null : _(j, U, "" + V, fe);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case He:
            return V.key === Le ? L(j, U, V, fe) : null;
          case gt:
            return V.key === Le ? Y(j, U, V, fe) : null;
          case At:
            return Le = V._init, ie(
              j,
              U,
              Le(V._payload),
              fe
            );
        }
        if (Jn(V) || Fe(V))
          return Le !== null ? null : le(j, U, V, fe, null);
        Da(j, V);
      }
      return null;
    }
    function xe(j, U, V, fe, Le) {
      if (typeof fe == "string" && fe !== "" || typeof fe == "number")
        return j = j.get(V) || null, _(U, j, "" + fe, Le);
      if (typeof fe == "object" && fe !== null) {
        switch (fe.$$typeof) {
          case He:
            return j = j.get(fe.key === null ? V : fe.key) || null, L(U, j, fe, Le);
          case gt:
            return j = j.get(fe.key === null ? V : fe.key) || null, Y(U, j, fe, Le);
          case At:
            var Ge = fe._init;
            return xe(j, U, V, Ge(fe._payload), Le);
        }
        if (Jn(fe) || Fe(fe))
          return j = j.get(V) || null, le(U, j, fe, Le, null);
        Da(U, fe);
      }
      return null;
    }
    function _e(j, U, V, fe) {
      for (var Le = null, Ge = null, ke = U, Xe = U = 0, qn = null; ke !== null && Xe < V.length; Xe++) {
        ke.index > Xe ? (qn = ke, ke = null) : qn = ke.sibling;
        var Ft = ie(j, ke, V[Xe], fe);
        if (Ft === null) {
          ke === null && (ke = qn);
          break;
        }
        n && ke && Ft.alternate === null && r(j, ke), U = m(Ft, U, Xe), Ge === null ? Le = Ft : Ge.sibling = Ft, Ge = Ft, ke = qn;
      }
      if (Xe === V.length)
        return o(j, ke), fn && bi(j, Xe), Le;
      if (ke === null) {
        for (; Xe < V.length; Xe++)
          ke = oe(j, V[Xe], fe), ke !== null && (U = m(ke, U, Xe), Ge === null ? Le = ke : Ge.sibling = ke, Ge = ke);
        return fn && bi(j, Xe), Le;
      }
      for (ke = s(j, ke); Xe < V.length; Xe++)
        qn = xe(ke, j, Xe, V[Xe], fe), qn !== null && (n && qn.alternate !== null && ke.delete(qn.key === null ? Xe : qn.key), U = m(qn, U, Xe), Ge === null ? Le = qn : Ge.sibling = qn, Ge = qn);
      return n && ke.forEach(function(ul) {
        return r(j, ul);
      }), fn && bi(j, Xe), Le;
    }
    function De(j, U, V, fe) {
      var Le = Fe(V);
      if (typeof Le != "function")
        throw Error(p(150));
      if (V = Le.call(V), V == null)
        throw Error(p(151));
      for (var Ge = Le = null, ke = U, Xe = U = 0, qn = null, Ft = V.next(); ke !== null && !Ft.done; Xe++, Ft = V.next()) {
        ke.index > Xe ? (qn = ke, ke = null) : qn = ke.sibling;
        var ul = ie(j, ke, Ft.value, fe);
        if (ul === null) {
          ke === null && (ke = qn);
          break;
        }
        n && ke && ul.alternate === null && r(j, ke), U = m(ul, U, Xe), Ge === null ? Le = ul : Ge.sibling = ul, Ge = ul, ke = qn;
      }
      if (Ft.done)
        return o(
          j,
          ke
        ), fn && bi(j, Xe), Le;
      if (ke === null) {
        for (; !Ft.done; Xe++, Ft = V.next())
          Ft = oe(j, Ft.value, fe), Ft !== null && (U = m(Ft, U, Xe), Ge === null ? Le = Ft : Ge.sibling = Ft, Ge = Ft);
        return fn && bi(j, Xe), Le;
      }
      for (ke = s(j, ke); !Ft.done; Xe++, Ft = V.next())
        Ft = xe(ke, j, Xe, Ft.value, fe), Ft !== null && (n && Ft.alternate !== null && ke.delete(Ft.key === null ? Xe : Ft.key), U = m(Ft, U, Xe), Ge === null ? Le = Ft : Ge.sibling = Ft, Ge = Ft);
      return n && ke.forEach(function(pg) {
        return r(j, pg);
      }), fn && bi(j, Xe), Le;
    }
    function Un(j, U, V, fe) {
      if (typeof V == "object" && V !== null && V.type === Je && V.key === null && (V = V.props.children), typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case He:
            e: {
              for (var Le = V.key, Ge = U; Ge !== null; ) {
                if (Ge.key === Le) {
                  if (Le = V.type, Le === Je) {
                    if (Ge.tag === 7) {
                      o(j, Ge.sibling), U = d(Ge, V.props.children), U.return = j, j = U;
                      break e;
                    }
                  } else if (Ge.elementType === Le || typeof Le == "object" && Le !== null && Le.$$typeof === At && fh(Le) === Ge.type) {
                    o(j, Ge.sibling), U = d(Ge, V.props), U.ref = Eo(j, Ge, V), U.return = j, j = U;
                    break e;
                  }
                  o(j, Ge);
                  break;
                } else
                  r(j, Ge);
                Ge = Ge.sibling;
              }
              V.type === Je ? (U = Uo(V.props.children, j.mode, fe, V.key), U.return = j, j = U) : (fe = bf(V.type, V.key, V.props, null, j.mode, fe), fe.ref = Eo(j, U, V), fe.return = j, j = fe);
            }
            return x(j);
          case gt:
            e: {
              for (Ge = V.key; U !== null; ) {
                if (U.key === Ge)
                  if (U.tag === 4 && U.stateNode.containerInfo === V.containerInfo && U.stateNode.implementation === V.implementation) {
                    o(j, U.sibling), U = d(U, V.children || []), U.return = j, j = U;
                    break e;
                  } else {
                    o(j, U);
                    break;
                  }
                else
                  r(j, U);
                U = U.sibling;
              }
              U = qs(V, j.mode, fe), U.return = j, j = U;
            }
            return x(j);
          case At:
            return Ge = V._init, Un(j, U, Ge(V._payload), fe);
        }
        if (Jn(V))
          return _e(j, U, V, fe);
        if (Fe(V))
          return De(j, U, V, fe);
        Da(j, V);
      }
      return typeof V == "string" && V !== "" || typeof V == "number" ? (V = "" + V, U !== null && U.tag === 6 ? (o(j, U.sibling), U = d(U, V), U.return = j, j = U) : (o(j, U), U = kf(V, j.mode, fe), U.return = j, j = U), x(j)) : o(j, U);
    }
    return Un;
  }
  var mu = Pc(!0), dh = Pc(!1), nl = st(null), $n = null, he = null, Qi = null;
  function ki() {
    Qi = he = $n = null;
  }
  function Qd(n) {
    var r = nl.current;
    Bt(nl), n._currentValue = r;
  }
  function qd(n, r, o) {
    for (; n !== null; ) {
      var s = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, s !== null && (s.childLanes |= r)) : s !== null && (s.childLanes & r) !== r && (s.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function yu(n, r) {
    $n = n, Qi = he = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (fi = !0), n.firstContext = null);
  }
  function qi(n) {
    var r = n._currentValue;
    if (Qi !== n)
      if (n = { context: n, memoizedValue: r, next: null }, he === null) {
        if ($n === null)
          throw Error(p(308));
        he = n, $n.dependencies = { lanes: 0, firstContext: n };
      } else
        he = he.next = n;
    return r;
  }
  var Co = null;
  function Pn(n) {
    Co === null ? Co = [n] : Co.push(n);
  }
  function ph(n, r, o, s) {
    var d = r.interleaved;
    return d === null ? (o.next = o, Pn(r)) : (o.next = d.next, d.next = o), r.interleaved = o, rl(n, s);
  }
  function rl(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Hl = !1;
  function Bc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function gu(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function si(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Pl(n, r, o) {
    var s = n.updateQueue;
    if (s === null)
      return null;
    if (s = s.shared, xt & 2) {
      var d = s.pending;
      return d === null ? r.next = r : (r.next = d.next, d.next = r), s.pending = r, rl(n, o);
    }
    return d = s.interleaved, d === null ? (r.next = r, Pn(s)) : (r.next = d.next, d.next = r), s.interleaved = r, rl(n, o);
  }
  function Vc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, ba(n, o);
    }
  }
  function vh(n, r) {
    var o = n.updateQueue, s = n.alternate;
    if (s !== null && (s = s.updateQueue, o === s)) {
      var d = null, m = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var x = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          m === null ? d = m = x : m = m.next = x, o = o.next;
        } while (o !== null);
        m === null ? d = m = r : m = m.next = r;
      } else
        d = m = r;
      o = { baseState: s.baseState, firstBaseUpdate: d, lastBaseUpdate: m, shared: s.shared, effects: s.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function Ic(n, r, o, s) {
    var d = n.updateQueue;
    Hl = !1;
    var m = d.firstBaseUpdate, x = d.lastBaseUpdate, _ = d.shared.pending;
    if (_ !== null) {
      d.shared.pending = null;
      var L = _, Y = L.next;
      L.next = null, x === null ? m = Y : x.next = Y, x = L;
      var le = n.alternate;
      le !== null && (le = le.updateQueue, _ = le.lastBaseUpdate, _ !== x && (_ === null ? le.firstBaseUpdate = Y : _.next = Y, le.lastBaseUpdate = L));
    }
    if (m !== null) {
      var oe = d.baseState;
      x = 0, le = Y = L = null, _ = m;
      do {
        var ie = _.lane, xe = _.eventTime;
        if ((s & ie) === ie) {
          le !== null && (le = le.next = {
            eventTime: xe,
            lane: 0,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null
          });
          e: {
            var _e = n, De = _;
            switch (ie = r, xe = o, De.tag) {
              case 1:
                if (_e = De.payload, typeof _e == "function") {
                  oe = _e.call(xe, oe, ie);
                  break e;
                }
                oe = _e;
                break e;
              case 3:
                _e.flags = _e.flags & -65537 | 128;
              case 0:
                if (_e = De.payload, ie = typeof _e == "function" ? _e.call(xe, oe, ie) : _e, ie == null)
                  break e;
                oe = ge({}, oe, ie);
                break e;
              case 2:
                Hl = !0;
            }
          }
          _.callback !== null && _.lane !== 0 && (n.flags |= 64, ie = d.effects, ie === null ? d.effects = [_] : ie.push(_));
        } else
          xe = { eventTime: xe, lane: ie, tag: _.tag, payload: _.payload, callback: _.callback, next: null }, le === null ? (Y = le = xe, L = oe) : le = le.next = xe, x |= ie;
        if (_ = _.next, _ === null) {
          if (_ = d.shared.pending, _ === null)
            break;
          ie = _, _ = ie.next, ie.next = null, d.lastBaseUpdate = ie, d.shared.pending = null;
        }
      } while (!0);
      if (le === null && (L = oe), d.baseState = L, d.firstBaseUpdate = Y, d.lastBaseUpdate = le, r = d.shared.interleaved, r !== null) {
        d = r;
        do
          x |= d.lane, d = d.next;
        while (d !== r);
      } else
        m === null && (d.shared.lanes = 0);
      Ao |= x, n.lanes = x, n.memoizedState = oe;
    }
  }
  function hh(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var s = n[r], d = s.callback;
        if (d !== null) {
          if (s.callback = null, s = o, typeof d != "function")
            throw Error(p(191, d));
          d.call(s);
        }
      }
  }
  var As = {}, ya = st(As), Su = st(As), Ls = st(As);
  function xo(n) {
    if (n === As)
      throw Error(p(174));
    return n;
  }
  function Gd(n, r) {
    switch (Qt(Ls, r), Qt(Su, n), Qt(ya, As), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : gn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = gn(r, n);
    }
    Bt(ya), Qt(ya, r);
  }
  function Eu() {
    Bt(ya), Bt(Su), Bt(Ls);
  }
  function mh(n) {
    xo(Ls.current);
    var r = xo(ya.current), o = gn(r, n.type);
    r !== o && (Qt(Su, n), Qt(ya, o));
  }
  function Kd(n) {
    Su.current === n && (Bt(ya), Bt(Su));
  }
  var hn = st(0);
  function $c(n) {
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
  var Yc = [];
  function Xd() {
    for (var n = 0; n < Yc.length; n++)
      Yc[n]._workInProgressVersionPrimary = null;
    Yc.length = 0;
  }
  var Wc = yt.ReactCurrentDispatcher, Ns = yt.ReactCurrentBatchConfig, Ae = 0, Me = null, nt = null, Et = null, Oi = !1, Cu = !1, Ms = 0, Ky = 0;
  function _r() {
    throw Error(p(321));
  }
  function Us(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!Bi(n[o], r[o]))
        return !1;
    return !0;
  }
  function re(n, r, o, s, d, m) {
    if (Ae = m, Me = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Wc.current = n === null || n.memoizedState === null ? Xy : on, n = o(s, d), Cu) {
      m = 0;
      do {
        if (Cu = !1, Ms = 0, 25 <= m)
          throw Error(p(301));
        m += 1, Et = nt = null, r.updateQueue = null, Wc.current = uf, n = o(s, d);
      } while (Cu);
    }
    if (Wc.current = kr, r = nt !== null && nt.next !== null, Ae = 0, Et = nt = Me = null, Oi = !1, r)
      throw Error(p(300));
    return n;
  }
  function Bn() {
    var n = Ms !== 0;
    return Ms = 0, n;
  }
  function je() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Et === null ? Me.memoizedState = Et = n : Et = Et.next = n, Et;
  }
  function cr() {
    if (nt === null) {
      var n = Me.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = nt.next;
    var r = Et === null ? Me.memoizedState : Et.next;
    if (r !== null)
      Et = r, nt = n;
    else {
      if (n === null)
        throw Error(p(310));
      nt = n, n = { memoizedState: nt.memoizedState, baseState: nt.baseState, baseQueue: nt.baseQueue, queue: nt.queue, next: null }, Et === null ? Me.memoizedState = Et = n : Et = Et.next = n;
    }
    return Et;
  }
  function Di(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function il(n) {
    var r = cr(), o = r.queue;
    if (o === null)
      throw Error(p(311));
    o.lastRenderedReducer = n;
    var s = nt, d = s.baseQueue, m = o.pending;
    if (m !== null) {
      if (d !== null) {
        var x = d.next;
        d.next = m.next, m.next = x;
      }
      s.baseQueue = d = m, o.pending = null;
    }
    if (d !== null) {
      m = d.next, s = s.baseState;
      var _ = x = null, L = null, Y = m;
      do {
        var le = Y.lane;
        if ((Ae & le) === le)
          L !== null && (L = L.next = { lane: 0, action: Y.action, hasEagerState: Y.hasEagerState, eagerState: Y.eagerState, next: null }), s = Y.hasEagerState ? Y.eagerState : n(s, Y.action);
        else {
          var oe = {
            lane: le,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null
          };
          L === null ? (_ = L = oe, x = s) : L = L.next = oe, Me.lanes |= le, Ao |= le;
        }
        Y = Y.next;
      } while (Y !== null && Y !== m);
      L === null ? x = s : L.next = _, Bi(s, r.memoizedState) || (fi = !0), r.memoizedState = s, r.baseState = x, r.baseQueue = L, o.lastRenderedState = s;
    }
    if (n = o.interleaved, n !== null) {
      d = n;
      do
        m = d.lane, Me.lanes |= m, Ao |= m, d = d.next;
      while (d !== n);
    } else
      d === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Gi(n) {
    var r = cr(), o = r.queue;
    if (o === null)
      throw Error(p(311));
    o.lastRenderedReducer = n;
    var s = o.dispatch, d = o.pending, m = r.memoizedState;
    if (d !== null) {
      o.pending = null;
      var x = d = d.next;
      do
        m = n(m, x.action), x = x.next;
      while (x !== d);
      Bi(m, r.memoizedState) || (fi = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), o.lastRenderedState = m;
    }
    return [m, s];
  }
  function xu() {
  }
  function To(n, r) {
    var o = Me, s = cr(), d = r(), m = !Bi(s.memoizedState, d);
    if (m && (s.memoizedState = d, fi = !0), s = s.queue, Fs(qc.bind(null, o, s, n), [n]), s.getSnapshot !== r || m || Et !== null && Et.memoizedState.tag & 1) {
      if (o.flags |= 2048, Ro(9, Qc.bind(null, o, s, d, r), void 0, null), kn === null)
        throw Error(p(349));
      Ae & 30 || Tu(o, r, d);
    }
    return d;
  }
  function Tu(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Me.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Me.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Qc(n, r, o, s) {
    r.value = o, r.getSnapshot = s, Gc(r) && Kc(n);
  }
  function qc(n, r, o) {
    return o(function() {
      Gc(r) && Kc(n);
    });
  }
  function Gc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !Bi(n, o);
    } catch {
      return !0;
    }
  }
  function Kc(n) {
    var r = rl(n, 1);
    r !== null && xn(r, n, 1, -1);
  }
  function Xc(n) {
    var r = je();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Di, lastRenderedState: n }, r.queue = n, n = n.dispatch = zs.bind(null, Me, n), [r.memoizedState, n];
  }
  function Ro(n, r, o, s) {
    return n = { tag: n, create: r, destroy: o, deps: s, next: null }, r = Me.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Me.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (s = o.next, o.next = n, n.next = s, r.lastEffect = n)), n;
  }
  function Jc() {
    return cr().memoizedState;
  }
  function Ru(n, r, o, s) {
    var d = je();
    Me.flags |= n, d.memoizedState = Ro(1 | r, o, void 0, s === void 0 ? null : s);
  }
  function wu(n, r, o, s) {
    var d = cr();
    s = s === void 0 ? null : s;
    var m = void 0;
    if (nt !== null) {
      var x = nt.memoizedState;
      if (m = x.destroy, s !== null && Us(s, x.deps)) {
        d.memoizedState = Ro(r, o, m, s);
        return;
      }
    }
    Me.flags |= n, d.memoizedState = Ro(1 | r, o, m, s);
  }
  function Zc(n, r) {
    return Ru(8390656, 8, n, r);
  }
  function Fs(n, r) {
    return wu(2048, 8, n, r);
  }
  function ef(n, r) {
    return wu(4, 2, n, r);
  }
  function tf(n, r) {
    return wu(4, 4, n, r);
  }
  function nf(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function rf(n, r, o) {
    return o = o != null ? o.concat([n]) : null, wu(4, 4, nf.bind(null, r, n), o);
  }
  function bu() {
  }
  function wo(n, r) {
    var o = cr();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && Us(r, s[1]) ? s[0] : (o.memoizedState = [n, r], n);
  }
  function af(n, r) {
    var o = cr();
    r = r === void 0 ? null : r;
    var s = o.memoizedState;
    return s !== null && r !== null && Us(r, s[1]) ? s[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function lf(n, r, o) {
    return Ae & 21 ? (Bi(o, r) || (o = Zo(), Me.lanes |= o, Ao |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, fi = !0), n.memoizedState = o);
  }
  function Jd(n, r) {
    var o = Ut;
    Ut = o !== 0 && 4 > o ? o : 4, n(!0);
    var s = Ns.transition;
    Ns.transition = {};
    try {
      n(!1), r();
    } finally {
      Ut = o, Ns.transition = s;
    }
  }
  function of() {
    return cr().memoizedState;
  }
  function yh(n, r, o) {
    var s = ol(n);
    if (o = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null }, Zd(n))
      _u(r, o);
    else if (o = ph(n, r, o, s), o !== null) {
      var d = ar();
      xn(o, n, s, d), Bl(o, r, s);
    }
  }
  function zs(n, r, o) {
    var s = ol(n), d = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Zd(n))
      _u(r, d);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null))
        try {
          var x = r.lastRenderedState, _ = m(x, o);
          if (d.hasEagerState = !0, d.eagerState = _, Bi(_, x)) {
            var L = r.interleaved;
            L === null ? (d.next = d, Pn(r)) : (d.next = L.next, L.next = d), r.interleaved = d;
            return;
          }
        } catch {
        } finally {
        }
      o = ph(n, r, d, s), o !== null && (d = ar(), xn(o, n, s, d), Bl(o, r, s));
    }
  }
  function Zd(n) {
    var r = n.alternate;
    return n === Me || r !== null && r === Me;
  }
  function _u(n, r) {
    Cu = Oi = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function Bl(n, r, o) {
    if (o & 4194240) {
      var s = r.lanes;
      s &= n.pendingLanes, o |= s, r.lanes = o, ba(n, o);
    }
  }
  var kr = { readContext: qi, useCallback: _r, useContext: _r, useEffect: _r, useImperativeHandle: _r, useInsertionEffect: _r, useLayoutEffect: _r, useMemo: _r, useReducer: _r, useRef: _r, useState: _r, useDebugValue: _r, useDeferredValue: _r, useTransition: _r, useMutableSource: _r, useSyncExternalStore: _r, useId: _r, unstable_isNewReconciler: !1 }, Xy = { readContext: qi, useCallback: function(n, r) {
    return je().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: qi, useEffect: Zc, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Ru(
      4194308,
      4,
      nf.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return Ru(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Ru(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = je();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var s = je();
    return r = o !== void 0 ? o(r) : r, s.memoizedState = s.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, s.queue = n, n = n.dispatch = yh.bind(null, Me, n), [s.memoizedState, n];
  }, useRef: function(n) {
    var r = je();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Xc, useDebugValue: bu, useDeferredValue: function(n) {
    return je().memoizedState = n;
  }, useTransition: function() {
    var n = Xc(!1), r = n[0];
    return n = Jd.bind(null, n[1]), je().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var s = Me, d = je();
    if (fn) {
      if (o === void 0)
        throw Error(p(407));
      o = o();
    } else {
      if (o = r(), kn === null)
        throw Error(p(349));
      Ae & 30 || Tu(s, r, o);
    }
    d.memoizedState = o;
    var m = { value: o, getSnapshot: r };
    return d.queue = m, Zc(qc.bind(
      null,
      s,
      m,
      n
    ), [n]), s.flags |= 2048, Ro(9, Qc.bind(null, s, m, o, r), void 0, null), o;
  }, useId: function() {
    var n = je(), r = kn.identifierPrefix;
    if (fn) {
      var o = tl, s = sr;
      o = (s & ~(1 << 32 - Ur(s) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Ms++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = Ky++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, on = {
    readContext: qi,
    useCallback: wo,
    useContext: qi,
    useEffect: Fs,
    useImperativeHandle: rf,
    useInsertionEffect: ef,
    useLayoutEffect: tf,
    useMemo: af,
    useReducer: il,
    useRef: Jc,
    useState: function() {
      return il(Di);
    },
    useDebugValue: bu,
    useDeferredValue: function(n) {
      var r = cr();
      return lf(r, nt.memoizedState, n);
    },
    useTransition: function() {
      var n = il(Di)[0], r = cr().memoizedState;
      return [n, r];
    },
    useMutableSource: xu,
    useSyncExternalStore: To,
    useId: of,
    unstable_isNewReconciler: !1
  }, uf = { readContext: qi, useCallback: wo, useContext: qi, useEffect: Fs, useImperativeHandle: rf, useInsertionEffect: ef, useLayoutEffect: tf, useMemo: af, useReducer: Gi, useRef: Jc, useState: function() {
    return Gi(Di);
  }, useDebugValue: bu, useDeferredValue: function(n) {
    var r = cr();
    return nt === null ? r.memoizedState = n : lf(r, nt.memoizedState, n);
  }, useTransition: function() {
    var n = Gi(Di)[0], r = cr().memoizedState;
    return [n, r];
  }, useMutableSource: xu, useSyncExternalStore: To, useId: of, unstable_isNewReconciler: !1 };
  function ci(n, r) {
    if (n && n.defaultProps) {
      r = ge({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function bo(n, r, o, s) {
    r = n.memoizedState, o = o(s, r), o = o == null ? r : ge({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var _o = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ne(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var s = ar(), d = ol(n), m = si(s, d);
    m.payload = r, o != null && (m.callback = o), r = Pl(n, m, d), r !== null && (xn(r, n, d, s), Vc(r, n, d));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var s = ar(), d = ol(n), m = si(s, d);
    m.tag = 1, m.payload = r, o != null && (m.callback = o), r = Pl(n, m, d), r !== null && (xn(r, n, d, s), Vc(r, n, d));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = ar(), s = ol(n), d = si(o, s);
    d.tag = 2, r != null && (d.callback = r), r = Pl(n, d, s), r !== null && (xn(r, n, s, o), Vc(r, n, s));
  } };
  function gh(n, r, o, s, d, m, x) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(s, m, x) : r.prototype && r.prototype.isPureReactComponent ? !Ss(o, s) || !Ss(d, m) : !0;
  }
  function Sh(n, r, o) {
    var s = !1, d = Oa, m = r.contextType;
    return typeof m == "object" && m !== null ? m = qi(m) : (d = vn(r) ? ii : tt.current, s = r.contextTypes, m = (s = s != null) ? Ii(n, d) : Oa), r = new r(o, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = _o, n.stateNode = r, r._reactInternals = n, s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = d, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function Eh(n, r, o, s) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, s), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, s), r.state !== n && _o.enqueueReplaceState(r, r.state, null);
  }
  function ep(n, r, o, s) {
    var d = n.stateNode;
    d.props = o, d.state = n.memoizedState, d.refs = {}, Bc(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? d.context = qi(m) : (m = vn(r) ? ii : tt.current, d.context = Ii(n, m)), d.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (bo(n, r, m, o), d.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (r = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), r !== d.state && _o.enqueueReplaceState(d, d.state, null), Ic(n, o, d, s), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Vl(n, r) {
    try {
      var o = "", s = r;
      do
        o += ft(s), s = s.return;
      while (s);
      var d = o;
    } catch (m) {
      d = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: n, source: r, stack: d, digest: null };
  }
  function tp(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function js(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Ch = typeof WeakMap == "function" ? WeakMap : Map;
  function xh(n, r, o) {
    o = si(-1, o), o.tag = 3, o.payload = { element: null };
    var s = r.value;
    return o.callback = function() {
      Ef || (Ef = !0, cp = s), js(n, r);
    }, o;
  }
  function Th(n, r, o) {
    o = si(-1, o), o.tag = 3;
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var d = r.value;
      o.payload = function() {
        return s(d);
      }, o.callback = function() {
        js(n, r);
      };
    }
    var m = n.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (o.callback = function() {
      js(n, r), typeof s != "function" && (Ji === null ? Ji = /* @__PURE__ */ new Set([this]) : Ji.add(this));
      var x = r.stack;
      this.componentDidCatch(r.value, { componentStack: x !== null ? x : "" });
    }), o;
  }
  function Hs(n, r, o) {
    var s = n.pingCache;
    if (s === null) {
      s = n.pingCache = new Ch();
      var d = /* @__PURE__ */ new Set();
      s.set(r, d);
    } else
      d = s.get(r), d === void 0 && (d = /* @__PURE__ */ new Set(), s.set(r, d));
    d.has(o) || (d.add(o), n = og.bind(null, n, r, o), r.then(n, n));
  }
  function Rh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function np(n, r, o, s, d) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = d, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = si(-1, 1), r.tag = 2, Pl(o, r, 1))), o.lanes |= 1), n);
  }
  var wh = yt.ReactCurrentOwner, fi = !1;
  function Nn(n, r, o, s) {
    r.child = n === null ? dh(r, null, o, s) : mu(r, n.child, o, s);
  }
  function ku(n, r, o, s, d) {
    o = o.render;
    var m = r.ref;
    return yu(r, d), s = re(n, r, o, s, m, d), o = Bn(), n !== null && !fi ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, Mn(n, r, d)) : (fn && o && Uc(r), r.flags |= 1, Nn(n, r, s, d), r.child);
  }
  function Il(n, r, o, s, d) {
    if (n === null) {
      var m = o.type;
      return typeof m == "function" && !hp(m) && m.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = m, sf(n, r, m, s, d)) : (n = bf(o.type, null, s, r, r.mode, d), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, !(n.lanes & d)) {
      var x = m.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Ss, o(x, s) && n.ref === r.ref)
        return Mn(n, r, d);
    }
    return r.flags |= 1, n = Wl(m, s), n.ref = r.ref, n.return = r, r.child = n;
  }
  function sf(n, r, o, s, d) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (Ss(m, s) && n.ref === r.ref)
        if (fi = !1, r.pendingProps = s = m, (n.lanes & d) !== 0)
          n.flags & 131072 && (fi = !0);
        else
          return r.lanes = n.lanes, Mn(n, r, d);
    }
    return lt(n, r, o, s, d);
  }
  function di(n, r, o) {
    var s = r.pendingProps, d = s.children, m = n !== null ? n.memoizedState : null;
    if (s.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Qt(ju, pi), pi |= o;
      else {
        if (!(o & 1073741824))
          return n = m !== null ? m.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Qt(ju, pi), pi |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = m !== null ? m.baseLanes : o, Qt(ju, pi), pi |= s;
      }
    else
      m !== null ? (s = m.baseLanes | o, r.memoizedState = null) : s = o, Qt(ju, pi), pi |= s;
    return Nn(n, r, d, o), r.child;
  }
  function ko(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function lt(n, r, o, s, d) {
    var m = vn(o) ? ii : tt.current;
    return m = Ii(r, m), yu(r, d), o = re(n, r, o, s, m, d), s = Bn(), n !== null && !fi ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, Mn(n, r, d)) : (fn && s && Uc(r), r.flags |= 1, Nn(n, r, o, d), r.child);
  }
  function Ps(n, r, o, s, d) {
    if (vn(o)) {
      var m = !0;
      Mc(r);
    } else
      m = !1;
    if (yu(r, d), r.stateNode === null)
      Vs(n, r), Sh(r, o, s), ep(r, o, s, d), s = !0;
    else if (n === null) {
      var x = r.stateNode, _ = r.memoizedProps;
      x.props = _;
      var L = x.context, Y = o.contextType;
      typeof Y == "object" && Y !== null ? Y = qi(Y) : (Y = vn(o) ? ii : tt.current, Y = Ii(r, Y));
      var le = o.getDerivedStateFromProps, oe = typeof le == "function" || typeof x.getSnapshotBeforeUpdate == "function";
      oe || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (_ !== s || L !== Y) && Eh(r, x, s, Y), Hl = !1;
      var ie = r.memoizedState;
      x.state = ie, Ic(r, s, x, d), L = r.memoizedState, _ !== s || ie !== L || bn.current || Hl ? (typeof le == "function" && (bo(r, o, le, s), L = r.memoizedState), (_ = Hl || gh(r, o, _, s, ie, L, Y)) ? (oe || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount()), typeof x.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof x.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = s, r.memoizedState = L), x.props = s, x.state = L, x.context = Y, s = _) : (typeof x.componentDidMount == "function" && (r.flags |= 4194308), s = !1);
    } else {
      x = r.stateNode, gu(n, r), _ = r.memoizedProps, Y = r.type === r.elementType ? _ : ci(r.type, _), x.props = Y, oe = r.pendingProps, ie = x.context, L = o.contextType, typeof L == "object" && L !== null ? L = qi(L) : (L = vn(o) ? ii : tt.current, L = Ii(r, L));
      var xe = o.getDerivedStateFromProps;
      (le = typeof xe == "function" || typeof x.getSnapshotBeforeUpdate == "function") || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (_ !== oe || ie !== L) && Eh(r, x, s, L), Hl = !1, ie = r.memoizedState, x.state = ie, Ic(r, s, x, d);
      var _e = r.memoizedState;
      _ !== oe || ie !== _e || bn.current || Hl ? (typeof xe == "function" && (bo(r, o, xe, s), _e = r.memoizedState), (Y = Hl || gh(r, o, Y, s, ie, _e, L) || !1) ? (le || typeof x.UNSAFE_componentWillUpdate != "function" && typeof x.componentWillUpdate != "function" || (typeof x.componentWillUpdate == "function" && x.componentWillUpdate(s, _e, L), typeof x.UNSAFE_componentWillUpdate == "function" && x.UNSAFE_componentWillUpdate(s, _e, L)), typeof x.componentDidUpdate == "function" && (r.flags |= 4), typeof x.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof x.componentDidUpdate != "function" || _ === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), r.memoizedProps = s, r.memoizedState = _e), x.props = s, x.state = _e, x.context = L, s = Y) : (typeof x.componentDidUpdate != "function" || _ === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), s = !1);
    }
    return cf(n, r, o, s, m, d);
  }
  function cf(n, r, o, s, d, m) {
    ko(n, r);
    var x = (r.flags & 128) !== 0;
    if (!s && !x)
      return d && oh(r, o, !1), Mn(n, r, m);
    s = r.stateNode, wh.current = r;
    var _ = x && typeof o.getDerivedStateFromError != "function" ? null : s.render();
    return r.flags |= 1, n !== null && x ? (r.child = mu(r, n.child, null, m), r.child = mu(r, null, _, m)) : Nn(n, r, _, m), r.memoizedState = s.state, d && oh(r, o, !0), r.child;
  }
  function Jy(n) {
    var r = n.stateNode;
    r.pendingContext ? zl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && zl(n, r.context, !1), Gd(n, r.containerInfo);
  }
  function bh(n, r, o, s, d) {
    return Cn(), Wd(d), r.flags |= 256, Nn(n, r, o, s), r.child;
  }
  var Bs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Oo(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function _h(n, r, o) {
    var s = r.pendingProps, d = hn.current, m = !1, x = (r.flags & 128) !== 0, _;
    if ((_ = x) || (_ = n !== null && n.memoizedState === null ? !1 : (d & 2) !== 0), _ ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (d |= 1), Qt(hn, d & 1), n === null)
      return zc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (x = s.children, n = s.fallback, m ? (s = r.mode, m = r.child, x = { mode: "hidden", children: x }, !(s & 1) && m !== null ? (m.childLanes = 0, m.pendingProps = x) : m = _f(x, s, 0, null), n = Uo(n, s, o, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = Oo(o), r.memoizedState = Bs, n) : ff(r, x));
    if (d = n.memoizedState, d !== null && (_ = d.dehydrated, _ !== null))
      return rp(n, r, x, s, _, d, o);
    if (m) {
      m = s.fallback, x = r.mode, d = n.child, _ = d.sibling;
      var L = { mode: "hidden", children: s.children };
      return !(x & 1) && r.child !== d ? (s = r.child, s.childLanes = 0, s.pendingProps = L, r.deletions = null) : (s = Wl(d, L), s.subtreeFlags = d.subtreeFlags & 14680064), _ !== null ? m = Wl(_, m) : (m = Uo(m, x, o, null), m.flags |= 2), m.return = r, s.return = r, s.sibling = m, r.child = s, s = m, m = r.child, x = n.child.memoizedState, x = x === null ? Oo(o) : { baseLanes: x.baseLanes | o, cachePool: null, transitions: x.transitions }, m.memoizedState = x, m.childLanes = n.childLanes & ~o, r.memoizedState = Bs, s;
    }
    return m = n.child, n = m.sibling, s = Wl(m, { mode: "visible", children: s.children }), !(r.mode & 1) && (s.lanes = o), s.return = r, s.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = s, r.memoizedState = null, s;
  }
  function ff(n, r) {
    return r = _f({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function df(n, r, o, s) {
    return s !== null && Wd(s), mu(r, n.child, null, o), n = ff(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function rp(n, r, o, s, d, m, x) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, s = tp(Error(p(422))), df(n, r, x, s)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = s.fallback, d = r.mode, s = _f({ mode: "visible", children: s.children }, d, 0, null), m = Uo(m, d, x, null), m.flags |= 2, s.return = r, m.return = r, s.sibling = m, r.child = s, r.mode & 1 && mu(r, n.child, null, x), r.child.memoizedState = Oo(x), r.memoizedState = Bs, m);
    if (!(r.mode & 1))
      return df(n, r, x, null);
    if (d.data === "$!") {
      if (s = d.nextSibling && d.nextSibling.dataset, s)
        var _ = s.dgst;
      return s = _, m = Error(p(419)), s = tp(m, s, void 0), df(n, r, x, s);
    }
    if (_ = (x & n.childLanes) !== 0, fi || _) {
      if (s = kn, s !== null) {
        switch (x & -x) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
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
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        d = d & (s.suspendedLanes | x) ? 0 : d, d !== 0 && d !== m.retryLane && (m.retryLane = d, rl(n, d), xn(s, n, d, -1));
      }
      return Qs(), s = tp(Error(p(421))), df(n, r, x, s);
    }
    return d.data === "$?" ? (r.flags |= 128, r.child = n.child, r = vp.bind(null, n), d._reactRetry = r, null) : (n = m.treeContext, ui = ma(d.nextSibling), _i = r, fn = !0, Wi = null, n !== null && (oi[br++] = sr, oi[br++] = tl, oi[br++] = Yi, sr = n.id, tl = n.overflow, Yi = r), r = ff(r, s.children), r.flags |= 4096, r);
  }
  function kh(n, r, o) {
    n.lanes |= r;
    var s = n.alternate;
    s !== null && (s.lanes |= r), qd(n.return, r, o);
  }
  function pf(n, r, o, s, d) {
    var m = n.memoizedState;
    m === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: s, tail: o, tailMode: d } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = s, m.tail = o, m.tailMode = d);
  }
  function ip(n, r, o) {
    var s = r.pendingProps, d = s.revealOrder, m = s.tail;
    if (Nn(n, r, s.children, o), s = hn.current, s & 2)
      s = s & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && kh(n, o, r);
            else if (n.tag === 19)
              kh(n, o, r);
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
    if (Qt(hn, s), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (d) {
        case "forwards":
          for (o = r.child, d = null; o !== null; )
            n = o.alternate, n !== null && $c(n) === null && (d = o), o = o.sibling;
          o = d, o === null ? (d = r.child, r.child = null) : (d = o.sibling, o.sibling = null), pf(r, !1, d, o, m);
          break;
        case "backwards":
          for (o = null, d = r.child, r.child = null; d !== null; ) {
            if (n = d.alternate, n !== null && $c(n) === null) {
              r.child = d;
              break;
            }
            n = d.sibling, d.sibling = o, o = d, d = n;
          }
          pf(r, !0, o, null, m);
          break;
        case "together":
          pf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Vs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Mn(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Ao |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(p(153));
    if (r.child !== null) {
      for (n = r.child, o = Wl(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = Wl(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function al(n, r, o) {
    switch (r.tag) {
      case 3:
        Jy(r), Cn();
        break;
      case 5:
        mh(r);
        break;
      case 1:
        vn(r.type) && Mc(r);
        break;
      case 4:
        Gd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var s = r.type._context, d = r.memoizedProps.value;
        Qt(nl, s._currentValue), s._currentValue = d;
        break;
      case 13:
        if (s = r.memoizedState, s !== null)
          return s.dehydrated !== null ? (Qt(hn, hn.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? _h(n, r, o) : (Qt(hn, hn.current & 1), n = Mn(n, r, o), n !== null ? n.sibling : null);
        Qt(hn, hn.current & 1);
        break;
      case 19:
        if (s = (o & r.childLanes) !== 0, n.flags & 128) {
          if (s)
            return ip(n, r, o);
          r.flags |= 128;
        }
        if (d = r.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Qt(hn, hn.current), s)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, di(n, r, o);
    }
    return Mn(n, r, o);
  }
  var Aa, Ou, Du, Ki;
  Aa = function(n, r) {
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
  }, Ou = function() {
  }, Du = function(n, r, o, s) {
    var d = n.memoizedProps;
    if (d !== s) {
      n = r.stateNode, xo(ya.current);
      var m = null;
      switch (o) {
        case "input":
          d = Xn(n, d), s = Xn(n, s), m = [];
          break;
        case "select":
          d = ge({}, d, { value: void 0 }), s = ge({}, s, { value: void 0 }), m = [];
          break;
        case "textarea":
          d = Jr(n, d), s = Jr(n, s), m = [];
          break;
        default:
          typeof d.onClick != "function" && typeof s.onClick == "function" && (n.onclick = Nc);
      }
      Ln(o, s);
      var x;
      o = null;
      for (Y in d)
        if (!s.hasOwnProperty(Y) && d.hasOwnProperty(Y) && d[Y] != null)
          if (Y === "style") {
            var _ = d[Y];
            for (x in _)
              _.hasOwnProperty(x) && (o || (o = {}), o[x] = "");
          } else
            Y !== "dangerouslySetInnerHTML" && Y !== "children" && Y !== "suppressContentEditableWarning" && Y !== "suppressHydrationWarning" && Y !== "autoFocus" && (S.hasOwnProperty(Y) ? m || (m = []) : (m = m || []).push(Y, null));
      for (Y in s) {
        var L = s[Y];
        if (_ = d != null ? d[Y] : void 0, s.hasOwnProperty(Y) && L !== _ && (L != null || _ != null))
          if (Y === "style")
            if (_) {
              for (x in _)
                !_.hasOwnProperty(x) || L && L.hasOwnProperty(x) || (o || (o = {}), o[x] = "");
              for (x in L)
                L.hasOwnProperty(x) && _[x] !== L[x] && (o || (o = {}), o[x] = L[x]);
            } else
              o || (m || (m = []), m.push(
                Y,
                o
              )), o = L;
          else
            Y === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, _ = _ ? _.__html : void 0, L != null && _ !== L && (m = m || []).push(Y, L)) : Y === "children" ? typeof L != "string" && typeof L != "number" || (m = m || []).push(Y, "" + L) : Y !== "suppressContentEditableWarning" && Y !== "suppressHydrationWarning" && (S.hasOwnProperty(Y) ? (L != null && Y === "onScroll" && rn("scroll", n), m || _ === L || (m = [])) : (m = m || []).push(Y, L));
      }
      o && (m = m || []).push("style", o);
      var Y = m;
      (r.updateQueue = Y) && (r.flags |= 4);
    }
  }, Ki = function(n, r, o, s) {
    o !== s && (r.flags |= 4);
  };
  function _n(n, r) {
    if (!fn)
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
  function Or(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, s = 0;
    if (r)
      for (var d = n.child; d !== null; )
        o |= d.lanes | d.childLanes, s |= d.subtreeFlags & 14680064, s |= d.flags & 14680064, d.return = n, d = d.sibling;
    else
      for (d = n.child; d !== null; )
        o |= d.lanes | d.childLanes, s |= d.subtreeFlags, s |= d.flags, d.return = n, d = d.sibling;
    return n.subtreeFlags |= s, n.childLanes = o, r;
  }
  function Zy(n, r, o) {
    var s = r.pendingProps;
    switch ($d(r), r.tag) {
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
        return Or(r), null;
      case 1:
        return vn(r.type) && $i(), Or(r), null;
      case 3:
        return s = r.stateNode, Eu(), Bt(bn), Bt(tt), Xd(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (n === null || n.child === null) && (jc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Wi !== null && (fp(Wi), Wi = null))), Ou(n, r), Or(r), null;
      case 5:
        Kd(r);
        var d = xo(Ls.current);
        if (o = r.type, n !== null && r.stateNode != null)
          Du(n, r, o, s, d), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!s) {
            if (r.stateNode === null)
              throw Error(p(166));
            return Or(r), null;
          }
          if (n = xo(ya.current), jc(r)) {
            s = r.stateNode, o = r.type;
            var m = r.memoizedProps;
            switch (s[ka] = r, s[go] = m, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                rn("cancel", s), rn("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                rn("load", s);
                break;
              case "video":
              case "audio":
                for (d = 0; d < Ts.length; d++)
                  rn(Ts[d], s);
                break;
              case "source":
                rn("error", s);
                break;
              case "img":
              case "image":
              case "link":
                rn(
                  "error",
                  s
                ), rn("load", s);
                break;
              case "details":
                rn("toggle", s);
                break;
              case "input":
                In(s, m), rn("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!m.multiple }, rn("invalid", s);
                break;
              case "textarea":
                Tr(s, m), rn("invalid", s);
            }
            Ln(o, m), d = null;
            for (var x in m)
              if (m.hasOwnProperty(x)) {
                var _ = m[x];
                x === "children" ? typeof _ == "string" ? s.textContent !== _ && (m.suppressHydrationWarning !== !0 && Lc(s.textContent, _, n), d = ["children", _]) : typeof _ == "number" && s.textContent !== "" + _ && (m.suppressHydrationWarning !== !0 && Lc(
                  s.textContent,
                  _,
                  n
                ), d = ["children", "" + _]) : S.hasOwnProperty(x) && _ != null && x === "onScroll" && rn("scroll", s);
              }
            switch (o) {
              case "input":
                Cr(s), Kr(s, m, !0);
                break;
              case "textarea":
                Cr(s), ur(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (s.onclick = Nc);
            }
            s = d, r.updateQueue = s, s !== null && (r.flags |= 4);
          } else {
            x = d.nodeType === 9 ? d : d.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Zr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = x.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof s.is == "string" ? n = x.createElement(o, { is: s.is }) : (n = x.createElement(o), o === "select" && (x = n, s.multiple ? x.multiple = !0 : s.size && (x.size = s.size))) : n = x.createElementNS(n, o), n[ka] = r, n[go] = s, Aa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (x = Sn(o, s), o) {
                case "dialog":
                  rn("cancel", n), rn("close", n), d = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  rn("load", n), d = s;
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < Ts.length; d++)
                    rn(Ts[d], n);
                  d = s;
                  break;
                case "source":
                  rn("error", n), d = s;
                  break;
                case "img":
                case "image":
                case "link":
                  rn(
                    "error",
                    n
                  ), rn("load", n), d = s;
                  break;
                case "details":
                  rn("toggle", n), d = s;
                  break;
                case "input":
                  In(n, s), d = Xn(n, s), rn("invalid", n);
                  break;
                case "option":
                  d = s;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!s.multiple }, d = ge({}, s, { value: void 0 }), rn("invalid", n);
                  break;
                case "textarea":
                  Tr(n, s), d = Jr(n, s), rn("invalid", n);
                  break;
                default:
                  d = s;
              }
              Ln(o, d), _ = d;
              for (m in _)
                if (_.hasOwnProperty(m)) {
                  var L = _[m];
                  m === "style" ? Pt(n, L) : m === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, L != null && Ca(n, L)) : m === "children" ? typeof L == "string" ? (o !== "textarea" || L !== "") && Ci(n, L) : typeof L == "number" && Ci(n, "" + L) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (S.hasOwnProperty(m) ? L != null && m === "onScroll" && rn("scroll", n) : L != null && Be(n, m, L, x));
                }
              switch (o) {
                case "input":
                  Cr(n), Kr(n, s, !1);
                  break;
                case "textarea":
                  Cr(n), ur(n);
                  break;
                case "option":
                  s.value != null && n.setAttribute("value", "" + ht(s.value));
                  break;
                case "select":
                  n.multiple = !!s.multiple, m = s.value, m != null ? xr(n, !!s.multiple, m, !1) : s.defaultValue != null && xr(
                    n,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof d.onClick == "function" && (n.onclick = Nc);
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
        return Or(r), null;
      case 6:
        if (n && r.stateNode != null)
          Ki(n, r, n.memoizedProps, s);
        else {
          if (typeof s != "string" && r.stateNode === null)
            throw Error(p(166));
          if (o = xo(Ls.current), xo(ya.current), jc(r)) {
            if (s = r.stateNode, o = r.memoizedProps, s[ka] = r, (m = s.nodeValue !== o) && (n = _i, n !== null))
              switch (n.tag) {
                case 3:
                  Lc(s.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Lc(s.nodeValue, o, (n.mode & 1) !== 0);
              }
            m && (r.flags |= 4);
          } else
            s = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(s), s[ka] = r, r.stateNode = s;
        }
        return Or(r), null;
      case 13:
        if (Bt(hn), s = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (fn && ui !== null && r.mode & 1 && !(r.flags & 128))
            ch(), Cn(), r.flags |= 98560, m = !1;
          else if (m = jc(r), s !== null && s.dehydrated !== null) {
            if (n === null) {
              if (!m)
                throw Error(p(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m)
                throw Error(p(317));
              m[ka] = r;
            } else
              Cn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Or(r), m = !1;
          } else
            Wi !== null && (fp(Wi), Wi = null), m = !0;
          if (!m)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (s = s !== null, s !== (n !== null && n.memoizedState !== null) && s && (r.child.flags |= 8192, r.mode & 1 && (n === null || hn.current & 1 ? Wn === 0 && (Wn = 3) : Qs())), r.updateQueue !== null && (r.flags |= 4), Or(r), null);
      case 4:
        return Eu(), Ou(n, r), n === null && pu(r.stateNode.containerInfo), Or(r), null;
      case 10:
        return Qd(r.type._context), Or(r), null;
      case 17:
        return vn(r.type) && $i(), Or(r), null;
      case 19:
        if (Bt(hn), m = r.memoizedState, m === null)
          return Or(r), null;
        if (s = (r.flags & 128) !== 0, x = m.rendering, x === null)
          if (s)
            _n(m, !1);
          else {
            if (Wn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (x = $c(n), x !== null) {
                  for (r.flags |= 128, _n(m, !1), s = x.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), r.subtreeFlags = 0, s = o, o = r.child; o !== null; )
                    m = o, n = s, m.flags &= 14680066, x = m.alternate, x === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = x.childLanes, m.lanes = x.lanes, m.child = x.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = x.memoizedProps, m.memoizedState = x.memoizedState, m.updateQueue = x.updateQueue, m.type = x.type, n = x.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return Qt(hn, hn.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            m.tail !== null && Mt() > Pu && (r.flags |= 128, s = !0, _n(m, !1), r.lanes = 4194304);
          }
        else {
          if (!s)
            if (n = $c(x), n !== null) {
              if (r.flags |= 128, s = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), _n(m, !0), m.tail === null && m.tailMode === "hidden" && !x.alternate && !fn)
                return Or(r), null;
            } else
              2 * Mt() - m.renderingStartTime > Pu && o !== 1073741824 && (r.flags |= 128, s = !0, _n(m, !1), r.lanes = 4194304);
          m.isBackwards ? (x.sibling = r.child, r.child = x) : (o = m.last, o !== null ? o.sibling = x : r.child = x, m.last = x);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = Mt(), r.sibling = null, o = hn.current, Qt(hn, s ? o & 1 | 2 : o & 1), r) : (Or(r), null);
      case 22:
      case 23:
        return Rf(), s = r.memoizedState !== null, n !== null && n.memoizedState !== null !== s && (r.flags |= 8192), s && r.mode & 1 ? pi & 1073741824 && (Or(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Or(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, r.tag));
  }
  function eg(n, r) {
    switch ($d(r), r.tag) {
      case 1:
        return vn(r.type) && $i(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Eu(), Bt(bn), Bt(tt), Xd(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Kd(r), null;
      case 13:
        if (Bt(hn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(p(340));
          Cn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Bt(hn), null;
      case 4:
        return Eu(), null;
      case 10:
        return Qd(r.type._context), null;
      case 22:
      case 23:
        return Rf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Au = !1, fr = !1, vf = typeof WeakSet == "function" ? WeakSet : Set, we = null;
  function Lu(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (s) {
          On(n, r, s);
        }
      else
        o.current = null;
  }
  function ap(n, r, o) {
    try {
      o();
    } catch (s) {
      On(n, r, s);
    }
  }
  var hf = !1;
  function tg(n, r) {
    if (Fd = Pi, n = _c(), Xa(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var s = o.getSelection && o.getSelection();
          if (s && s.rangeCount !== 0) {
            o = s.anchorNode;
            var d = s.anchorOffset, m = s.focusNode;
            s = s.focusOffset;
            try {
              o.nodeType, m.nodeType;
            } catch {
              o = null;
              break e;
            }
            var x = 0, _ = -1, L = -1, Y = 0, le = 0, oe = n, ie = null;
            t:
              for (; ; ) {
                for (var xe; oe !== o || d !== 0 && oe.nodeType !== 3 || (_ = x + d), oe !== m || s !== 0 && oe.nodeType !== 3 || (L = x + s), oe.nodeType === 3 && (x += oe.nodeValue.length), (xe = oe.firstChild) !== null; )
                  ie = oe, oe = xe;
                for (; ; ) {
                  if (oe === n)
                    break t;
                  if (ie === o && ++Y === d && (_ = x), ie === m && ++le === s && (L = x), (xe = oe.nextSibling) !== null)
                    break;
                  oe = ie, ie = oe.parentNode;
                }
                oe = xe;
              }
            o = _ === -1 || L === -1 ? null : { start: _, end: L };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (mo = { focusedElem: n, selectionRange: o }, Pi = !1, we = r; we !== null; )
      if (r = we, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, we = n;
      else
        for (; we !== null; ) {
          r = we;
          try {
            var _e = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (_e !== null) {
                    var De = _e.memoizedProps, Un = _e.memoizedState, j = r.stateNode, U = j.getSnapshotBeforeUpdate(r.elementType === r.type ? De : ci(r.type, De), Un);
                    j.__reactInternalSnapshotBeforeUpdate = U;
                  }
                  break;
                case 3:
                  var V = r.stateNode.containerInfo;
                  V.nodeType === 1 ? V.textContent = "" : V.nodeType === 9 && V.documentElement && V.removeChild(V.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(p(163));
              }
          } catch (fe) {
            On(r, r.return, fe);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, we = n;
            break;
          }
          we = r.return;
        }
    return _e = hf, hf = !1, _e;
  }
  function Nu(n, r, o) {
    var s = r.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var d = s = s.next;
      do {
        if ((d.tag & n) === n) {
          var m = d.destroy;
          d.destroy = void 0, m !== void 0 && ap(r, o, m);
        }
        d = d.next;
      } while (d !== s);
    }
  }
  function mf(n, r) {
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
  function yf(n) {
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
  function Oh(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Oh(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ka], delete r[go], delete r[Hd], delete r[Gy], delete r[Pd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function lp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Dh(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || lp(n.return))
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
  function Is(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Nc));
    else if (s !== 4 && (n = n.child, n !== null))
      for (Is(n, r, o), n = n.sibling; n !== null; )
        Is(n, r, o), n = n.sibling;
  }
  function Mu(n, r, o) {
    var s = n.tag;
    if (s === 5 || s === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (s !== 4 && (n = n.child, n !== null))
      for (Mu(n, r, o), n = n.sibling; n !== null; )
        Mu(n, r, o), n = n.sibling;
  }
  var mn = null, rr = !1;
  function jr(n, r, o) {
    for (o = o.child; o !== null; )
      Uu(n, r, o), o = o.sibling;
  }
  function Uu(n, r, o) {
    if (ei && typeof ei.onCommitFiberUnmount == "function")
      try {
        ei.onCommitFiberUnmount(Tl, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        fr || Lu(o, r);
      case 6:
        var s = mn, d = rr;
        mn = null, jr(n, r, o), mn = s, rr = d, mn !== null && (rr ? (n = mn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : mn.removeChild(o.stateNode));
        break;
      case 18:
        mn !== null && (rr ? (n = mn, o = o.stateNode, n.nodeType === 8 ? Ml(n.parentNode, o) : n.nodeType === 1 && Ml(n, o), Dl(n)) : Ml(mn, o.stateNode));
        break;
      case 4:
        s = mn, d = rr, mn = o.stateNode.containerInfo, rr = !0, jr(n, r, o), mn = s, rr = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!fr && (s = o.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          d = s = s.next;
          do {
            var m = d, x = m.destroy;
            m = m.tag, x !== void 0 && (m & 2 || m & 4) && ap(o, r, x), d = d.next;
          } while (d !== s);
        }
        jr(n, r, o);
        break;
      case 1:
        if (!fr && (Lu(o, r), s = o.stateNode, typeof s.componentWillUnmount == "function"))
          try {
            s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
          } catch (_) {
            On(o, r, _);
          }
        jr(n, r, o);
        break;
      case 21:
        jr(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (fr = (s = fr) || o.memoizedState !== null, jr(n, r, o), fr = s) : jr(n, r, o);
        break;
      default:
        jr(n, r, o);
    }
  }
  function Fu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new vf()), r.forEach(function(s) {
        var d = ug.bind(null, n, s);
        o.has(s) || (o.add(s), s.then(d, d));
      });
    }
  }
  function ir(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var s = 0; s < o.length; s++) {
        var d = o[s];
        try {
          var m = n, x = r, _ = x;
          e:
            for (; _ !== null; ) {
              switch (_.tag) {
                case 5:
                  mn = _.stateNode, rr = !1;
                  break e;
                case 3:
                  mn = _.stateNode.containerInfo, rr = !0;
                  break e;
                case 4:
                  mn = _.stateNode.containerInfo, rr = !0;
                  break e;
              }
              _ = _.return;
            }
          if (mn === null)
            throw Error(p(160));
          Uu(m, x, d), mn = null, rr = !1;
          var L = d.alternate;
          L !== null && (L.return = null), d.return = null;
        } catch (Y) {
          On(d, r, Y);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Ah(r, n), r = r.sibling;
  }
  function Ah(n, r) {
    var o = n.alternate, s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ir(r, n), La(n), s & 4) {
          try {
            Nu(3, n, n.return), mf(3, n);
          } catch (De) {
            On(n, n.return, De);
          }
          try {
            Nu(5, n, n.return);
          } catch (De) {
            On(n, n.return, De);
          }
        }
        break;
      case 1:
        ir(r, n), La(n), s & 512 && o !== null && Lu(o, o.return);
        break;
      case 5:
        if (ir(r, n), La(n), s & 512 && o !== null && Lu(o, o.return), n.flags & 32) {
          var d = n.stateNode;
          try {
            Ci(d, "");
          } catch (De) {
            On(n, n.return, De);
          }
        }
        if (s & 4 && (d = n.stateNode, d != null)) {
          var m = n.memoizedProps, x = o !== null ? o.memoizedProps : m, _ = n.type, L = n.updateQueue;
          if (n.updateQueue = null, L !== null)
            try {
              _ === "input" && m.type === "radio" && m.name != null && zn(d, m), Sn(_, x);
              var Y = Sn(_, m);
              for (x = 0; x < L.length; x += 2) {
                var le = L[x], oe = L[x + 1];
                le === "style" ? Pt(d, oe) : le === "dangerouslySetInnerHTML" ? Ca(d, oe) : le === "children" ? Ci(d, oe) : Be(d, le, oe, Y);
              }
              switch (_) {
                case "input":
                  An(d, m);
                  break;
                case "textarea":
                  Ei(d, m);
                  break;
                case "select":
                  var ie = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!m.multiple;
                  var xe = m.value;
                  xe != null ? xr(d, !!m.multiple, xe, !1) : ie !== !!m.multiple && (m.defaultValue != null ? xr(
                    d,
                    !!m.multiple,
                    m.defaultValue,
                    !0
                  ) : xr(d, !!m.multiple, m.multiple ? [] : "", !1));
              }
              d[go] = m;
            } catch (De) {
              On(n, n.return, De);
            }
        }
        break;
      case 6:
        if (ir(r, n), La(n), s & 4) {
          if (n.stateNode === null)
            throw Error(p(162));
          d = n.stateNode, m = n.memoizedProps;
          try {
            d.nodeValue = m;
          } catch (De) {
            On(n, n.return, De);
          }
        }
        break;
      case 3:
        if (ir(r, n), La(n), s & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            Dl(r.containerInfo);
          } catch (De) {
            On(n, n.return, De);
          }
        break;
      case 4:
        ir(r, n), La(n);
        break;
      case 13:
        ir(r, n), La(n), d = n.child, d.flags & 8192 && (m = d.memoizedState !== null, d.stateNode.isHidden = m, !m || d.alternate !== null && d.alternate.memoizedState !== null || (Sf = Mt())), s & 4 && Fu(n);
        break;
      case 22:
        if (le = o !== null && o.memoizedState !== null, n.mode & 1 ? (fr = (Y = fr) || le, ir(r, n), fr = Y) : ir(r, n), La(n), s & 8192) {
          if (Y = n.memoizedState !== null, (n.stateNode.isHidden = Y) && !le && n.mode & 1)
            for (we = n, le = n.child; le !== null; ) {
              for (oe = we = le; we !== null; ) {
                switch (ie = we, xe = ie.child, ie.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Nu(4, ie, ie.return);
                    break;
                  case 1:
                    Lu(ie, ie.return);
                    var _e = ie.stateNode;
                    if (typeof _e.componentWillUnmount == "function") {
                      s = ie, o = ie.return;
                      try {
                        r = s, _e.props = r.memoizedProps, _e.state = r.memoizedState, _e.componentWillUnmount();
                      } catch (De) {
                        On(s, o, De);
                      }
                    }
                    break;
                  case 5:
                    Lu(ie, ie.return);
                    break;
                  case 22:
                    if (ie.memoizedState !== null) {
                      Lh(oe);
                      continue;
                    }
                }
                xe !== null ? (xe.return = ie, we = xe) : Lh(oe);
              }
              le = le.sibling;
            }
          e:
            for (le = null, oe = n; ; ) {
              if (oe.tag === 5) {
                if (le === null) {
                  le = oe;
                  try {
                    d = oe.stateNode, Y ? (m = d.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (_ = oe.stateNode, L = oe.memoizedProps.style, x = L != null && L.hasOwnProperty("display") ? L.display : null, _.style.display = dt("display", x));
                  } catch (De) {
                    On(n, n.return, De);
                  }
                }
              } else if (oe.tag === 6) {
                if (le === null)
                  try {
                    oe.stateNode.nodeValue = Y ? "" : oe.memoizedProps;
                  } catch (De) {
                    On(n, n.return, De);
                  }
              } else if ((oe.tag !== 22 && oe.tag !== 23 || oe.memoizedState === null || oe === n) && oe.child !== null) {
                oe.child.return = oe, oe = oe.child;
                continue;
              }
              if (oe === n)
                break e;
              for (; oe.sibling === null; ) {
                if (oe.return === null || oe.return === n)
                  break e;
                le === oe && (le = null), oe = oe.return;
              }
              le === oe && (le = null), oe.sibling.return = oe.return, oe = oe.sibling;
            }
        }
        break;
      case 19:
        ir(r, n), La(n), s & 4 && Fu(n);
        break;
      case 21:
        break;
      default:
        ir(
          r,
          n
        ), La(n);
    }
  }
  function La(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (lp(o)) {
              var s = o;
              break e;
            }
            o = o.return;
          }
          throw Error(p(160));
        }
        switch (s.tag) {
          case 5:
            var d = s.stateNode;
            s.flags & 32 && (Ci(d, ""), s.flags &= -33);
            var m = Dh(n);
            Mu(n, m, d);
            break;
          case 3:
          case 4:
            var x = s.stateNode.containerInfo, _ = Dh(n);
            Is(n, _, x);
            break;
          default:
            throw Error(p(161));
        }
      } catch (L) {
        On(n, n.return, L);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function ng(n, r, o) {
    we = n, op(n);
  }
  function op(n, r, o) {
    for (var s = (n.mode & 1) !== 0; we !== null; ) {
      var d = we, m = d.child;
      if (d.tag === 22 && s) {
        var x = d.memoizedState !== null || Au;
        if (!x) {
          var _ = d.alternate, L = _ !== null && _.memoizedState !== null || fr;
          _ = Au;
          var Y = fr;
          if (Au = x, (fr = L) && !Y)
            for (we = d; we !== null; )
              x = we, L = x.child, x.tag === 22 && x.memoizedState !== null ? up(d) : L !== null ? (L.return = x, we = L) : up(d);
          for (; m !== null; )
            we = m, op(m), m = m.sibling;
          we = d, Au = _, fr = Y;
        }
        zu(n);
      } else
        d.subtreeFlags & 8772 && m !== null ? (m.return = d, we = m) : zu(n);
    }
  }
  function zu(n) {
    for (; we !== null; ) {
      var r = we;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                fr || mf(5, r);
                break;
              case 1:
                var s = r.stateNode;
                if (r.flags & 4 && !fr)
                  if (o === null)
                    s.componentDidMount();
                  else {
                    var d = r.elementType === r.type ? o.memoizedProps : ci(r.type, o.memoizedProps);
                    s.componentDidUpdate(d, o.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
                  }
                var m = r.updateQueue;
                m !== null && hh(r, m, s);
                break;
              case 3:
                var x = r.updateQueue;
                if (x !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  hh(r, x, o);
                }
                break;
              case 5:
                var _ = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = _;
                  var L = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      L.autoFocus && o.focus();
                      break;
                    case "img":
                      L.src && (o.src = L.src);
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
                  var Y = r.alternate;
                  if (Y !== null) {
                    var le = Y.memoizedState;
                    if (le !== null) {
                      var oe = le.dehydrated;
                      oe !== null && Dl(oe);
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
                throw Error(p(163));
            }
          fr || r.flags & 512 && yf(r);
        } catch (ie) {
          On(r, r.return, ie);
        }
      }
      if (r === n) {
        we = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, we = o;
        break;
      }
      we = r.return;
    }
  }
  function Lh(n) {
    for (; we !== null; ) {
      var r = we;
      if (r === n) {
        we = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, we = o;
        break;
      }
      we = r.return;
    }
  }
  function up(n) {
    for (; we !== null; ) {
      var r = we;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              mf(4, r);
            } catch (L) {
              On(r, o, L);
            }
            break;
          case 1:
            var s = r.stateNode;
            if (typeof s.componentDidMount == "function") {
              var d = r.return;
              try {
                s.componentDidMount();
              } catch (L) {
                On(r, d, L);
              }
            }
            var m = r.return;
            try {
              yf(r);
            } catch (L) {
              On(r, m, L);
            }
            break;
          case 5:
            var x = r.return;
            try {
              yf(r);
            } catch (L) {
              On(r, x, L);
            }
        }
      } catch (L) {
        On(r, r.return, L);
      }
      if (r === n) {
        we = null;
        break;
      }
      var _ = r.sibling;
      if (_ !== null) {
        _.return = r.return, we = _;
        break;
      }
      we = r.return;
    }
  }
  var rg = Math.ceil, Do = yt.ReactCurrentDispatcher, gf = yt.ReactCurrentOwner, Xi = yt.ReactCurrentBatchConfig, xt = 0, kn = null, dn = null, Yn = 0, pi = 0, ju = st(0), Wn = 0, $s = null, Ao = 0, Hu = 0, sp = 0, $l = null, Dr = null, Sf = 0, Pu = 1 / 0, ll = null, Ef = !1, cp = null, Ji = null, Bu = !1, Zi = null, Cf = 0, Ys = 0, xf = null, Ws = -1, Lo = 0;
  function ar() {
    return xt & 6 ? Mt() : Ws !== -1 ? Ws : Ws = Mt();
  }
  function ol(n) {
    return n.mode & 1 ? xt & 2 && Yn !== 0 ? Yn & -Yn : Hc.transition !== null ? (Lo === 0 && (Lo = Zo()), Lo) : (n = Ut, n !== 0 || (n = window.event, n = n === void 0 ? 16 : vs(n.type)), n) : 1;
  }
  function xn(n, r, o, s) {
    if (50 < Ys)
      throw Ys = 0, xf = null, Error(p(185));
    Ya(n, o, s), (!(xt & 2) || n !== kn) && (n === kn && (!(xt & 2) && (Hu |= o), Wn === 4 && Na(n, Yn)), Qn(n, s), o === 1 && xt === 0 && !(r.mode & 1) && (Pu = Mt() + 500, nr && ai()));
  }
  function Qn(n, r) {
    var o = n.callbackNode;
    bl(n, r);
    var s = Fr(n, n === kn ? Yn : 0);
    if (s === 0)
      o !== null && sn(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = s & -s, n.callbackPriority !== r) {
      if (o != null && sn(o), r === 1)
        n.tag === 0 ? Vd(Vu.bind(null, n)) : Bd(Vu.bind(null, n)), jd(function() {
          !(xt & 6) && ai();
        }), o = null;
      else {
        switch (tu(s)) {
          case 1:
            o = Mr;
            break;
          case 4:
            o = vt;
            break;
          case 16:
            o = ji;
            break;
          case 536870912:
            o = Xo;
            break;
          default:
            o = ji;
        }
        o = Ph(o, Tf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Tf(n, r) {
    if (Ws = -1, Lo = 0, xt & 6)
      throw Error(p(327));
    var o = n.callbackNode;
    if (Iu() && n.callbackNode !== o)
      return null;
    var s = Fr(n, n === kn ? Yn : 0);
    if (s === 0)
      return null;
    if (s & 30 || s & n.expiredLanes || r)
      r = wf(n, s);
    else {
      r = s;
      var d = xt;
      xt |= 2;
      var m = Mh();
      (kn !== n || Yn !== r) && (ll = null, Pu = Mt() + 500, Mo(n, r));
      do
        try {
          ag();
          break;
        } catch (_) {
          Nh(n, _);
        }
      while (!0);
      ki(), Do.current = m, xt = d, dn !== null ? r = 0 : (kn = null, Yn = 0, r = Wn);
    }
    if (r !== 0) {
      if (r === 2 && (d = _l(n), d !== 0 && (s = d, r = No(n, d))), r === 1)
        throw o = $s, Mo(n, 0), Na(n, s), Qn(n, Mt()), o;
      if (r === 6)
        Na(n, s);
      else {
        if (d = n.current.alternate, !(s & 30) && !dp(d) && (r = wf(n, s), r === 2 && (m = _l(n), m !== 0 && (s = m, r = No(n, m))), r === 1))
          throw o = $s, Mo(n, 0), Na(n, s), Qn(n, Mt()), o;
        switch (n.finishedWork = d, n.finishedLanes = s, r) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            Yl(n, Dr, ll);
            break;
          case 3:
            if (Na(n, s), (s & 130023424) === s && (r = Sf + 500 - Mt(), 10 < r)) {
              if (Fr(n, 0) !== 0)
                break;
              if (d = n.suspendedLanes, (d & s) !== s) {
                ar(), n.pingedLanes |= n.suspendedLanes & d;
                break;
              }
              n.timeoutHandle = yo(Yl.bind(null, n, Dr, ll), r);
              break;
            }
            Yl(n, Dr, ll);
            break;
          case 4:
            if (Na(n, s), (s & 4194240) === s)
              break;
            for (r = n.eventTimes, d = -1; 0 < s; ) {
              var x = 31 - Ur(s);
              m = 1 << x, x = r[x], x > d && (d = x), s &= ~m;
            }
            if (s = d, s = Mt() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * rg(s / 1960)) - s, 10 < s) {
              n.timeoutHandle = yo(Yl.bind(null, n, Dr, ll), s);
              break;
            }
            Yl(n, Dr, ll);
            break;
          case 5:
            Yl(n, Dr, ll);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return Qn(n, Mt()), n.callbackNode === o ? Tf.bind(null, n) : null;
  }
  function No(n, r) {
    var o = $l;
    return n.current.memoizedState.isDehydrated && (Mo(n, r).flags |= 256), n = wf(n, r), n !== 2 && (r = Dr, Dr = o, r !== null && fp(r)), n;
  }
  function fp(n) {
    Dr === null ? Dr = n : Dr.push.apply(Dr, n);
  }
  function dp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var s = 0; s < o.length; s++) {
            var d = o[s], m = d.getSnapshot;
            d = d.value;
            try {
              if (!Bi(m(), d))
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
  function Na(n, r) {
    for (r &= ~sp, r &= ~Hu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Ur(r), s = 1 << o;
      n[o] = -1, r &= ~s;
    }
  }
  function Vu(n) {
    if (xt & 6)
      throw Error(p(327));
    Iu();
    var r = Fr(n, 0);
    if (!(r & 1))
      return Qn(n, Mt()), null;
    var o = wf(n, r);
    if (n.tag !== 0 && o === 2) {
      var s = _l(n);
      s !== 0 && (r = s, o = No(n, s));
    }
    if (o === 1)
      throw o = $s, Mo(n, 0), Na(n, r), Qn(n, Mt()), o;
    if (o === 6)
      throw Error(p(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Yl(n, Dr, ll), Qn(n, Mt()), null;
  }
  function pp(n, r) {
    var o = xt;
    xt |= 1;
    try {
      return n(r);
    } finally {
      xt = o, xt === 0 && (Pu = Mt() + 500, nr && ai());
    }
  }
  function Ma(n) {
    Zi !== null && Zi.tag === 0 && !(xt & 6) && Iu();
    var r = xt;
    xt |= 1;
    var o = Xi.transition, s = Ut;
    try {
      if (Xi.transition = null, Ut = 1, n)
        return n();
    } finally {
      Ut = s, Xi.transition = o, xt = r, !(xt & 6) && ai();
    }
  }
  function Rf() {
    pi = ju.current, Bt(ju);
  }
  function Mo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, lh(o)), dn !== null)
      for (o = dn.return; o !== null; ) {
        var s = o;
        switch ($d(s), s.tag) {
          case 1:
            s = s.type.childContextTypes, s != null && $i();
            break;
          case 3:
            Eu(), Bt(bn), Bt(tt), Xd();
            break;
          case 5:
            Kd(s);
            break;
          case 4:
            Eu();
            break;
          case 13:
            Bt(hn);
            break;
          case 19:
            Bt(hn);
            break;
          case 10:
            Qd(s.type._context);
            break;
          case 22:
          case 23:
            Rf();
        }
        o = o.return;
      }
    if (kn = n, dn = n = Wl(n.current, null), Yn = pi = r, Wn = 0, $s = null, sp = Hu = Ao = 0, Dr = $l = null, Co !== null) {
      for (r = 0; r < Co.length; r++)
        if (o = Co[r], s = o.interleaved, s !== null) {
          o.interleaved = null;
          var d = s.next, m = o.pending;
          if (m !== null) {
            var x = m.next;
            m.next = d, s.next = x;
          }
          o.pending = s;
        }
      Co = null;
    }
    return n;
  }
  function Nh(n, r) {
    do {
      var o = dn;
      try {
        if (ki(), Wc.current = kr, Oi) {
          for (var s = Me.memoizedState; s !== null; ) {
            var d = s.queue;
            d !== null && (d.pending = null), s = s.next;
          }
          Oi = !1;
        }
        if (Ae = 0, Et = nt = Me = null, Cu = !1, Ms = 0, gf.current = null, o === null || o.return === null) {
          Wn = 1, $s = r, dn = null;
          break;
        }
        e: {
          var m = n, x = o.return, _ = o, L = r;
          if (r = Yn, _.flags |= 32768, L !== null && typeof L == "object" && typeof L.then == "function") {
            var Y = L, le = _, oe = le.tag;
            if (!(le.mode & 1) && (oe === 0 || oe === 11 || oe === 15)) {
              var ie = le.alternate;
              ie ? (le.updateQueue = ie.updateQueue, le.memoizedState = ie.memoizedState, le.lanes = ie.lanes) : (le.updateQueue = null, le.memoizedState = null);
            }
            var xe = Rh(x);
            if (xe !== null) {
              xe.flags &= -257, np(xe, x, _, m, r), xe.mode & 1 && Hs(m, Y, r), r = xe, L = Y;
              var _e = r.updateQueue;
              if (_e === null) {
                var De = /* @__PURE__ */ new Set();
                De.add(L), r.updateQueue = De;
              } else
                _e.add(L);
              break e;
            } else {
              if (!(r & 1)) {
                Hs(m, Y, r), Qs();
                break e;
              }
              L = Error(p(426));
            }
          } else if (fn && _.mode & 1) {
            var Un = Rh(x);
            if (Un !== null) {
              !(Un.flags & 65536) && (Un.flags |= 256), np(Un, x, _, m, r), Wd(Vl(L, _));
              break e;
            }
          }
          m = L = Vl(L, _), Wn !== 4 && (Wn = 2), $l === null ? $l = [m] : $l.push(m), m = x;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var j = xh(m, L, r);
                vh(m, j);
                break e;
              case 1:
                _ = L;
                var U = m.type, V = m.stateNode;
                if (!(m.flags & 128) && (typeof U.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && (Ji === null || !Ji.has(V)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var fe = Th(m, _, r);
                  vh(m, fe);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        Fh(o);
      } catch (Le) {
        r = Le, dn === o && o !== null && (dn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Mh() {
    var n = Do.current;
    return Do.current = kr, n === null ? kr : n;
  }
  function Qs() {
    (Wn === 0 || Wn === 3 || Wn === 2) && (Wn = 4), kn === null || !(Ao & 268435455) && !(Hu & 268435455) || Na(kn, Yn);
  }
  function wf(n, r) {
    var o = xt;
    xt |= 2;
    var s = Mh();
    (kn !== n || Yn !== r) && (ll = null, Mo(n, r));
    do
      try {
        ig();
        break;
      } catch (d) {
        Nh(n, d);
      }
    while (!0);
    if (ki(), xt = o, Do.current = s, dn !== null)
      throw Error(p(261));
    return kn = null, Yn = 0, Wn;
  }
  function ig() {
    for (; dn !== null; )
      Uh(dn);
  }
  function ag() {
    for (; dn !== null && !wr(); )
      Uh(dn);
  }
  function Uh(n) {
    var r = Hh(n.alternate, n, pi);
    n.memoizedProps = n.pendingProps, r === null ? Fh(n) : dn = r, gf.current = null;
  }
  function Fh(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = eg(o, r), o !== null) {
          o.flags &= 32767, dn = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Wn = 6, dn = null;
          return;
        }
      } else if (o = Zy(o, r, pi), o !== null) {
        dn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        dn = r;
        return;
      }
      dn = r = n;
    } while (r !== null);
    Wn === 0 && (Wn = 5);
  }
  function Yl(n, r, o) {
    var s = Ut, d = Xi.transition;
    try {
      Xi.transition = null, Ut = 1, lg(n, r, o, s);
    } finally {
      Xi.transition = d, Ut = s;
    }
    return null;
  }
  function lg(n, r, o, s) {
    do
      Iu();
    while (Zi !== null);
    if (xt & 6)
      throw Error(p(327));
    o = n.finishedWork;
    var d = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(p(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var m = o.lanes | o.childLanes;
    if (yd(n, m), n === kn && (dn = kn = null, Yn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Bu || (Bu = !0, Ph(ji, function() {
      return Iu(), null;
    })), m = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || m) {
      m = Xi.transition, Xi.transition = null;
      var x = Ut;
      Ut = 1;
      var _ = xt;
      xt |= 4, gf.current = null, tg(n, o), Ah(o, n), kc(mo), Pi = !!Fd, mo = Fd = null, n.current = o, ng(o), wa(), xt = _, Ut = x, Xi.transition = m;
    } else
      n.current = o;
    if (Bu && (Bu = !1, Zi = n, Cf = d), m = n.pendingLanes, m === 0 && (Ji = null), fs(o.stateNode), Qn(n, Mt()), r !== null)
      for (s = n.onRecoverableError, o = 0; o < r.length; o++)
        d = r[o], s(d.value, { componentStack: d.stack, digest: d.digest });
    if (Ef)
      throw Ef = !1, n = cp, cp = null, n;
    return Cf & 1 && n.tag !== 0 && Iu(), m = n.pendingLanes, m & 1 ? n === xf ? Ys++ : (Ys = 0, xf = n) : Ys = 0, ai(), null;
  }
  function Iu() {
    if (Zi !== null) {
      var n = tu(Cf), r = Xi.transition, o = Ut;
      try {
        if (Xi.transition = null, Ut = 16 > n ? 16 : n, Zi === null)
          var s = !1;
        else {
          if (n = Zi, Zi = null, Cf = 0, xt & 6)
            throw Error(p(331));
          var d = xt;
          for (xt |= 4, we = n.current; we !== null; ) {
            var m = we, x = m.child;
            if (we.flags & 16) {
              var _ = m.deletions;
              if (_ !== null) {
                for (var L = 0; L < _.length; L++) {
                  var Y = _[L];
                  for (we = Y; we !== null; ) {
                    var le = we;
                    switch (le.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Nu(8, le, m);
                    }
                    var oe = le.child;
                    if (oe !== null)
                      oe.return = le, we = oe;
                    else
                      for (; we !== null; ) {
                        le = we;
                        var ie = le.sibling, xe = le.return;
                        if (Oh(le), le === Y) {
                          we = null;
                          break;
                        }
                        if (ie !== null) {
                          ie.return = xe, we = ie;
                          break;
                        }
                        we = xe;
                      }
                  }
                }
                var _e = m.alternate;
                if (_e !== null) {
                  var De = _e.child;
                  if (De !== null) {
                    _e.child = null;
                    do {
                      var Un = De.sibling;
                      De.sibling = null, De = Un;
                    } while (De !== null);
                  }
                }
                we = m;
              }
            }
            if (m.subtreeFlags & 2064 && x !== null)
              x.return = m, we = x;
            else
              e:
                for (; we !== null; ) {
                  if (m = we, m.flags & 2048)
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Nu(9, m, m.return);
                    }
                  var j = m.sibling;
                  if (j !== null) {
                    j.return = m.return, we = j;
                    break e;
                  }
                  we = m.return;
                }
          }
          var U = n.current;
          for (we = U; we !== null; ) {
            x = we;
            var V = x.child;
            if (x.subtreeFlags & 2064 && V !== null)
              V.return = x, we = V;
            else
              e:
                for (x = U; we !== null; ) {
                  if (_ = we, _.flags & 2048)
                    try {
                      switch (_.tag) {
                        case 0:
                        case 11:
                        case 15:
                          mf(9, _);
                      }
                    } catch (Le) {
                      On(_, _.return, Le);
                    }
                  if (_ === x) {
                    we = null;
                    break e;
                  }
                  var fe = _.sibling;
                  if (fe !== null) {
                    fe.return = _.return, we = fe;
                    break e;
                  }
                  we = _.return;
                }
          }
          if (xt = d, ai(), ei && typeof ei.onPostCommitFiberRoot == "function")
            try {
              ei.onPostCommitFiberRoot(Tl, n);
            } catch {
            }
          s = !0;
        }
        return s;
      } finally {
        Ut = o, Xi.transition = r;
      }
    }
    return !1;
  }
  function zh(n, r, o) {
    r = Vl(o, r), r = xh(n, r, 1), n = Pl(n, r, 1), r = ar(), n !== null && (Ya(n, 1, r), Qn(n, r));
  }
  function On(n, r, o) {
    if (n.tag === 3)
      zh(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          zh(r, n, o);
          break;
        } else if (r.tag === 1) {
          var s = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Ji === null || !Ji.has(s))) {
            n = Vl(o, n), n = Th(r, n, 1), r = Pl(r, n, 1), n = ar(), r !== null && (Ya(r, 1, n), Qn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function og(n, r, o) {
    var s = n.pingCache;
    s !== null && s.delete(r), r = ar(), n.pingedLanes |= n.suspendedLanes & o, kn === n && (Yn & o) === o && (Wn === 4 || Wn === 3 && (Yn & 130023424) === Yn && 500 > Mt() - Sf ? Mo(n, 0) : sp |= o), Qn(n, r);
  }
  function jh(n, r) {
    r === 0 && (n.mode & 1 ? (r = Rl, Rl <<= 1, !(Rl & 130023424) && (Rl = 4194304)) : r = 1);
    var o = ar();
    n = rl(n, r), n !== null && (Ya(n, r, o), Qn(n, o));
  }
  function vp(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), jh(n, o);
  }
  function ug(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var s = n.stateNode, d = n.memoizedState;
        d !== null && (o = d.retryLane);
        break;
      case 19:
        s = n.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    s !== null && s.delete(r), jh(n, o);
  }
  var Hh;
  Hh = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || bn.current)
        fi = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return fi = !1, al(n, r, o);
        fi = !!(n.flags & 131072);
      }
    else
      fi = !1, fn && r.flags & 1048576 && Id(r, hu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var s = r.type;
        Vs(n, r), n = r.pendingProps;
        var d = Ii(r, tt.current);
        yu(r, o), d = re(null, r, s, n, d, o);
        var m = Bn();
        return r.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, vn(s) ? (m = !0, Mc(r)) : m = !1, r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, Bc(r), d.updater = _o, r.stateNode = d, d._reactInternals = r, ep(r, s, n, o), r = cf(null, r, s, !0, m, o)) : (r.tag = 0, fn && m && Uc(r), Nn(null, r, d, o), r = r.child), r;
      case 16:
        s = r.elementType;
        e: {
          switch (Vs(n, r), n = r.pendingProps, d = s._init, s = d(s._payload), r.type = s, d = r.tag = sg(s), n = ci(s, n), d) {
            case 0:
              r = lt(null, r, s, n, o);
              break e;
            case 1:
              r = Ps(null, r, s, n, o);
              break e;
            case 11:
              r = ku(null, r, s, n, o);
              break e;
            case 14:
              r = Il(null, r, s, ci(s.type, n), o);
              break e;
          }
          throw Error(p(
            306,
            s,
            ""
          ));
        }
        return r;
      case 0:
        return s = r.type, d = r.pendingProps, d = r.elementType === s ? d : ci(s, d), lt(n, r, s, d, o);
      case 1:
        return s = r.type, d = r.pendingProps, d = r.elementType === s ? d : ci(s, d), Ps(n, r, s, d, o);
      case 3:
        e: {
          if (Jy(r), n === null)
            throw Error(p(387));
          s = r.pendingProps, m = r.memoizedState, d = m.element, gu(n, r), Ic(r, s, null, o);
          var x = r.memoizedState;
          if (s = x.element, m.isDehydrated)
            if (m = { element: s, isDehydrated: !1, cache: x.cache, pendingSuspenseBoundaries: x.pendingSuspenseBoundaries, transitions: x.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
              d = Vl(Error(p(423)), r), r = bh(n, r, s, o, d);
              break e;
            } else if (s !== d) {
              d = Vl(Error(p(424)), r), r = bh(n, r, s, o, d);
              break e;
            } else
              for (ui = ma(r.stateNode.containerInfo.firstChild), _i = r, fn = !0, Wi = null, o = dh(r, null, s, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Cn(), s === d) {
              r = Mn(n, r, o);
              break e;
            }
            Nn(n, r, s, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return mh(r), n === null && zc(r), s = r.type, d = r.pendingProps, m = n !== null ? n.memoizedProps : null, x = d.children, bs(s, d) ? x = null : m !== null && bs(s, m) && (r.flags |= 32), ko(n, r), Nn(n, r, x, o), r.child;
      case 6:
        return n === null && zc(r), null;
      case 13:
        return _h(n, r, o);
      case 4:
        return Gd(r, r.stateNode.containerInfo), s = r.pendingProps, n === null ? r.child = mu(r, null, s, o) : Nn(n, r, s, o), r.child;
      case 11:
        return s = r.type, d = r.pendingProps, d = r.elementType === s ? d : ci(s, d), ku(n, r, s, d, o);
      case 7:
        return Nn(n, r, r.pendingProps, o), r.child;
      case 8:
        return Nn(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return Nn(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (s = r.type._context, d = r.pendingProps, m = r.memoizedProps, x = d.value, Qt(nl, s._currentValue), s._currentValue = x, m !== null)
            if (Bi(m.value, x)) {
              if (m.children === d.children && !bn.current) {
                r = Mn(n, r, o);
                break e;
              }
            } else
              for (m = r.child, m !== null && (m.return = r); m !== null; ) {
                var _ = m.dependencies;
                if (_ !== null) {
                  x = m.child;
                  for (var L = _.firstContext; L !== null; ) {
                    if (L.context === s) {
                      if (m.tag === 1) {
                        L = si(-1, o & -o), L.tag = 2;
                        var Y = m.updateQueue;
                        if (Y !== null) {
                          Y = Y.shared;
                          var le = Y.pending;
                          le === null ? L.next = L : (L.next = le.next, le.next = L), Y.pending = L;
                        }
                      }
                      m.lanes |= o, L = m.alternate, L !== null && (L.lanes |= o), qd(
                        m.return,
                        o,
                        r
                      ), _.lanes |= o;
                      break;
                    }
                    L = L.next;
                  }
                } else if (m.tag === 10)
                  x = m.type === r.type ? null : m.child;
                else if (m.tag === 18) {
                  if (x = m.return, x === null)
                    throw Error(p(341));
                  x.lanes |= o, _ = x.alternate, _ !== null && (_.lanes |= o), qd(x, o, r), x = m.sibling;
                } else
                  x = m.child;
                if (x !== null)
                  x.return = m;
                else
                  for (x = m; x !== null; ) {
                    if (x === r) {
                      x = null;
                      break;
                    }
                    if (m = x.sibling, m !== null) {
                      m.return = x.return, x = m;
                      break;
                    }
                    x = x.return;
                  }
                m = x;
              }
          Nn(n, r, d.children, o), r = r.child;
        }
        return r;
      case 9:
        return d = r.type, s = r.pendingProps.children, yu(r, o), d = qi(d), s = s(d), r.flags |= 1, Nn(n, r, s, o), r.child;
      case 14:
        return s = r.type, d = ci(s, r.pendingProps), d = ci(s.type, d), Il(n, r, s, d, o);
      case 15:
        return sf(n, r, r.type, r.pendingProps, o);
      case 17:
        return s = r.type, d = r.pendingProps, d = r.elementType === s ? d : ci(s, d), Vs(n, r), r.tag = 1, vn(s) ? (n = !0, Mc(r)) : n = !1, yu(r, o), Sh(r, s, d), ep(r, s, d, o), cf(null, r, s, !0, n, o);
      case 19:
        return ip(n, r, o);
      case 22:
        return di(n, r, o);
    }
    throw Error(p(156, r.tag));
  };
  function Ph(n, r) {
    return en(n, r);
  }
  function Bh(n, r, o, s) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ea(n, r, o, s) {
    return new Bh(n, r, o, s);
  }
  function hp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function sg(n) {
    if (typeof n == "function")
      return hp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Rn)
        return 11;
      if (n === Vt)
        return 14;
    }
    return 2;
  }
  function Wl(n, r) {
    var o = n.alternate;
    return o === null ? (o = ea(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function bf(n, r, o, s, d, m) {
    var x = 2;
    if (s = n, typeof n == "function")
      hp(n) && (x = 1);
    else if (typeof n == "string")
      x = 5;
    else
      e:
        switch (n) {
          case Je:
            return Uo(o.children, d, m, r);
          case un:
            x = 8, d |= 8;
            break;
          case Dn:
            return n = ea(12, o, r, d | 2), n.elementType = Dn, n.lanes = m, n;
          case Ye:
            return n = ea(13, o, r, d), n.elementType = Ye, n.lanes = m, n;
          case ut:
            return n = ea(19, o, r, d), n.elementType = ut, n.lanes = m, n;
          case be:
            return _f(o, d, m, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Xt:
                  x = 10;
                  break e;
                case Nt:
                  x = 9;
                  break e;
                case Rn:
                  x = 11;
                  break e;
                case Vt:
                  x = 14;
                  break e;
                case At:
                  x = 16, s = null;
                  break e;
              }
            throw Error(p(130, n == null ? n : typeof n, ""));
        }
    return r = ea(x, o, r, d), r.elementType = n, r.type = s, r.lanes = m, r;
  }
  function Uo(n, r, o, s) {
    return n = ea(7, n, s, r), n.lanes = o, n;
  }
  function _f(n, r, o, s) {
    return n = ea(22, n, s, r), n.elementType = be, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function kf(n, r, o) {
    return n = ea(6, n, null, r), n.lanes = o, n;
  }
  function qs(n, r, o) {
    return r = ea(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Gs(n, r, o, s, d) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = eu(0), this.expirationTimes = eu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = eu(0), this.identifierPrefix = s, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
  }
  function mp(n, r, o, s, d, m, x, _, L) {
    return n = new Gs(n, r, o, _, L), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = ea(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: s, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Bc(m), n;
  }
  function Vh(n, r, o) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: gt, key: s == null ? null : "" + s, children: n, containerInfo: r, implementation: o };
  }
  function yp(n) {
    if (!n)
      return Oa;
    n = n._reactInternals;
    e: {
      if (Ne(n) !== n || n.tag !== 1)
        throw Error(p(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (vn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(p(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (vn(o))
        return Os(n, o, r);
    }
    return r;
  }
  function gp(n, r, o, s, d, m, x, _, L) {
    return n = mp(o, s, !0, n, d, m, x, _, L), n.context = yp(null), o = n.current, s = ar(), d = ol(o), m = si(s, d), m.callback = r ?? null, Pl(o, m, d), n.current.lanes = d, Ya(n, d, s), Qn(n, s), n;
  }
  function Of(n, r, o, s) {
    var d = r.current, m = ar(), x = ol(d);
    return o = yp(o), r.context === null ? r.context = o : r.pendingContext = o, r = si(m, x), r.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (r.callback = s), n = Pl(d, r, x), n !== null && (xn(n, d, x, m), Vc(n, d, x)), x;
  }
  function Ks(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Ih(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Sp(n, r) {
    Ih(n, r), (n = n.alternate) && Ih(n, r);
  }
  function cg() {
    return null;
  }
  var Ep = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Df(n) {
    this._internalRoot = n;
  }
  Xs.prototype.render = Df.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(p(409));
    Of(n, r, null, null);
  }, Xs.prototype.unmount = Df.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ma(function() {
        Of(null, n, null, null);
      }), r[el] = null;
    }
  };
  function Xs(n) {
    this._internalRoot = n;
  }
  Xs.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = ru();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Wt.length && r !== 0 && r < Wt[o].priority; o++)
        ;
      Wt.splice(o, 0, n), o === 0 && Cc(n);
    }
  };
  function Ql(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Af(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function $h() {
  }
  function fg(n, r, o, s, d) {
    if (d) {
      if (typeof s == "function") {
        var m = s;
        s = function() {
          var Y = Ks(x);
          m.call(Y);
        };
      }
      var x = gp(r, s, n, 0, null, !1, !1, "", $h);
      return n._reactRootContainer = x, n[el] = x.current, pu(n.nodeType === 8 ? n.parentNode : n), Ma(), x;
    }
    for (; d = n.lastChild; )
      n.removeChild(d);
    if (typeof s == "function") {
      var _ = s;
      s = function() {
        var Y = Ks(L);
        _.call(Y);
      };
    }
    var L = mp(n, 0, !1, null, null, !1, !1, "", $h);
    return n._reactRootContainer = L, n[el] = L.current, pu(n.nodeType === 8 ? n.parentNode : n), Ma(function() {
      Of(r, L, o, s);
    }), L;
  }
  function Lf(n, r, o, s, d) {
    var m = o._reactRootContainer;
    if (m) {
      var x = m;
      if (typeof d == "function") {
        var _ = d;
        d = function() {
          var L = Ks(x);
          _.call(L);
        };
      }
      Of(r, x, n, d);
    } else
      x = fg(o, r, n, d, s);
    return Ks(x);
  }
  uo = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = fa(r.pendingLanes);
          o !== 0 && (ba(r, o | 1), Qn(r, Mt()), !(xt & 6) && (Pu = Mt() + 500, ai()));
        }
        break;
      case 13:
        Ma(function() {
          var s = rl(n, 1);
          if (s !== null) {
            var d = ar();
            xn(s, n, 1, d);
          }
        }), Sp(n, 1);
    }
  }, nu = function(n) {
    if (n.tag === 13) {
      var r = rl(n, 134217728);
      if (r !== null) {
        var o = ar();
        xn(r, n, 134217728, o);
      }
      Sp(n, 134217728);
    }
  }, bt = function(n) {
    if (n.tag === 13) {
      var r = ol(n), o = rl(n, r);
      if (o !== null) {
        var s = ar();
        xn(o, n, r, s);
      }
      Sp(n, r);
    }
  }, ru = function() {
    return Ut;
  }, iu = function(n, r) {
    var o = Ut;
    try {
      return Ut = n, r();
    } finally {
      Ut = o;
    }
  }, Lr = function(n, r, o) {
    switch (r) {
      case "input":
        if (An(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var s = o[r];
            if (s !== n && s.form === n.form) {
              var d = Pe(s);
              if (!d)
                throw Error(p(90));
              Gr(s), An(s, d);
            }
          }
        }
        break;
      case "textarea":
        Ei(n, o);
        break;
      case "select":
        r = o.value, r != null && xr(n, !!o.multiple, r, !1);
    }
  }, oo = pp, Ko = Ma;
  var dg = { usingClientEntryPoint: !1, Events: [ks, vu, Pe, zi, El, pp] }, Js = { findFiberByHostInstance: Vi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Yh = { bundleType: Js.bundleType, version: Js.version, rendererPackageName: Js.rendererPackageName, rendererConfig: Js.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = pt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Js.findFiberByHostInstance || cg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Nf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nf.isDisabled && Nf.supportsFiber)
      try {
        Tl = Nf.inject(Yh), ei = Nf;
      } catch {
      }
  }
  return la.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dg, la.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ql(r))
      throw Error(p(200));
    return Vh(n, r, null, o);
  }, la.createRoot = function(n, r) {
    if (!Ql(n))
      throw Error(p(299));
    var o = !1, s = "", d = Ep;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (d = r.onRecoverableError)), r = mp(n, 1, !1, null, null, o, !1, s, d), n[el] = r.current, pu(n.nodeType === 8 ? n.parentNode : n), new Df(r);
  }, la.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(p(188)) : (n = Object.keys(n).join(","), Error(p(268, n)));
    return n = pt(r), n = n === null ? null : n.stateNode, n;
  }, la.flushSync = function(n) {
    return Ma(n);
  }, la.hydrate = function(n, r, o) {
    if (!Af(r))
      throw Error(p(200));
    return Lf(null, n, r, !0, o);
  }, la.hydrateRoot = function(n, r, o) {
    if (!Ql(n))
      throw Error(p(405));
    var s = o != null && o.hydratedSources || null, d = !1, m = "", x = Ep;
    if (o != null && (o.unstable_strictMode === !0 && (d = !0), o.identifierPrefix !== void 0 && (m = o.identifierPrefix), o.onRecoverableError !== void 0 && (x = o.onRecoverableError)), r = gp(r, null, n, 1, o ?? null, d, !1, m, x), n[el] = r.current, pu(n), s)
      for (n = 0; n < s.length; n++)
        o = s[n], d = o._getVersion, d = d(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, d] : r.mutableSourceEagerHydrationData.push(
          o,
          d
        );
    return new Xs(r);
  }, la.render = function(n, r, o) {
    if (!Af(r))
      throw Error(p(200));
    return Lf(null, n, r, !1, o);
  }, la.unmountComponentAtNode = function(n) {
    if (!Af(n))
      throw Error(p(40));
    return n._reactRootContainer ? (Ma(function() {
      Lf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[el] = null;
      });
    }), !0) : !1;
  }, la.unstable_batchedUpdates = pp, la.unstable_renderSubtreeIntoContainer = function(n, r, o, s) {
    if (!Af(o))
      throw Error(p(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(p(38));
    return Lf(n, r, o, !1, s);
  }, la.version = "18.3.1-next-f1338f8080-20240426", la;
}
var oa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wT;
function rA() {
  return wT || (wT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var a = qo, f = JT(), p = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, g = !1;
    function S(e) {
      g = e;
    }
    function T(e) {
      if (!g) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          i[l - 1] = arguments[l];
        b("warn", e, i);
      }
    }
    function h(e) {
      if (!g) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          i[l - 1] = arguments[l];
        b("error", e, i);
      }
    }
    function b(e, t, i) {
      {
        var l = p.ReactDebugCurrentFrame, u = l.getStackAddendum();
        u !== "" && (t += "%s", i = i.concat([u]));
        var c = i.map(function(v) {
          return String(v);
        });
        c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var O = 0, N = 1, B = 2, k = 3, Q = 4, q = 5, K = 6, ne = 7, ye = 8, Ke = 9, ve = 10, Be = 11, yt = 12, He = 13, gt = 14, Je = 15, un = 16, Dn = 17, Xt = 18, Nt = 19, Rn = 21, Ye = 22, ut = 23, Vt = 24, At = 25, be = !0, de = !1, Fe = !1, ge = !1, z = !1, Z = !0, We = !1, Ze = !0, ft = !0, ct = !0, Rt = !0, ht = /* @__PURE__ */ new Set(), mt = {}, an = {};
    function Cr(e, t) {
      Gr(e, t), Gr(e + "Capture", t);
    }
    function Gr(e, t) {
      mt[e] && h("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), mt[e] = t;
      {
        var i = e.toLowerCase();
        an[i] = e, e === "onDoubleClick" && (an.ondblclick = e);
      }
      for (var l = 0; l < t.length; l++)
        ht.add(t[l]);
    }
    var yn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Xn = Object.prototype.hasOwnProperty;
    function In(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, i = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function zn(e) {
      try {
        return An(e), !1;
      } catch {
        return !0;
      }
    }
    function An(e) {
      return "" + e;
    }
    function Kr(e, t) {
      if (zn(e))
        return h("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, In(e)), An(e);
    }
    function Xr(e) {
      if (zn(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", In(e)), An(e);
    }
    function Jn(e, t) {
      if (zn(e))
        return h("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, In(e)), An(e);
    }
    function xr(e, t) {
      if (zn(e))
        return h("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, In(e)), An(e);
    }
    function Jr(e) {
      if (zn(e))
        return h("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", In(e)), An(e);
    }
    function Tr(e) {
      if (zn(e))
        return h("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", In(e)), An(e);
    }
    var Ei = 0, ur = 1, Zr = 2, gn = 3, Ar = 4, Ca = 5, Ci = 6, pe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ze = pe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", dt = new RegExp("^[" + pe + "][" + ze + "]*$"), Pt = {}, It = {};
    function Ln(e) {
      return Xn.call(It, e) ? !0 : Xn.call(Pt, e) ? !1 : dt.test(e) ? (It[e] = !0, !0) : (Pt[e] = !0, h("Invalid attribute name: `%s`", e), !1);
    }
    function Sn(e, t, i) {
      return t !== null ? t.type === Ei : i ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Rr(e, t, i, l) {
      if (i !== null && i.type === Ei)
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
    function Gt(e, t, i, l) {
      if (t === null || typeof t > "u" || Rr(e, t, i, l))
        return !0;
      if (l)
        return !1;
      if (i !== null)
        switch (i.type) {
          case gn:
            return !t;
          case Ar:
            return t === !1;
          case Ca:
            return isNaN(t);
          case Ci:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Lr(e) {
      return Yt.hasOwnProperty(e) ? Yt[e] : null;
    }
    function $t(e, t, i, l, u, c, v) {
      this.acceptsBooleans = t === Zr || t === gn || t === Ar, this.attributeName = l, this.attributeNamespace = u, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = v;
    }
    var Yt = {}, sa = [
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
    sa.forEach(function(e) {
      Yt[e] = new $t(
        e,
        Ei,
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
      Yt[t] = new $t(
        t,
        ur,
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
      Yt[e] = new $t(
        e,
        Zr,
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
      Yt[e] = new $t(
        e,
        Zr,
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
      Yt[e] = new $t(
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
      Yt[e] = new $t(
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
      Yt[e] = new $t(
        e,
        Ar,
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
      Yt[e] = new $t(
        e,
        Ci,
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
      Yt[e] = new $t(
        e,
        Ca,
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
    var zi = /[\-\:]([a-z])/g, El = function(e) {
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
      var t = e.replace(zi, El);
      Yt[t] = new $t(
        t,
        ur,
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
      var t = e.replace(zi, El);
      Yt[t] = new $t(
        t,
        ur,
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
      var t = e.replace(zi, El);
      Yt[t] = new $t(
        t,
        ur,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Yt[e] = new $t(
        e,
        ur,
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
    var oo = "xlinkHref";
    Yt[oo] = new $t(
      "xlinkHref",
      ur,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Yt[e] = new $t(
        e,
        ur,
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
    var Ko = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, $a = !1;
    function Cl(e) {
      !$a && Ko.test(e) && ($a = !0, h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function xi(e, t, i, l) {
      if (l.mustUseProperty) {
        var u = l.propertyName;
        return e[u];
      } else {
        Kr(i, t), l.sanitizeURL && Cl("" + i);
        var c = l.attributeName, v = null;
        if (l.type === Ar) {
          if (e.hasAttribute(c)) {
            var y = e.getAttribute(c);
            return y === "" ? !0 : Gt(t, i, l, !1) ? y : y === "" + i ? i : y;
          }
        } else if (e.hasAttribute(c)) {
          if (Gt(t, i, l, !1))
            return e.getAttribute(c);
          if (l.type === gn)
            return i;
          v = e.getAttribute(c);
        }
        return Gt(t, i, l, !1) ? v === null ? i : v : v === "" + i ? i : v;
      }
    }
    function xa(e, t, i, l) {
      {
        if (!Ln(t))
          return;
        if (!e.hasAttribute(t))
          return i === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Kr(i, t), u === "" + i ? i : u;
      }
    }
    function Ti(e, t, i, l) {
      var u = Lr(t);
      if (!Sn(t, u, l)) {
        if (Gt(t, i, u, l) && (i = null), l || u === null) {
          if (Ln(t)) {
            var c = t;
            i === null ? e.removeAttribute(c) : (Kr(i, t), e.setAttribute(c, "" + i));
          }
          return;
        }
        var v = u.mustUseProperty;
        if (v) {
          var y = u.propertyName;
          if (i === null) {
            var E = u.type;
            e[y] = E === gn ? !1 : "";
          } else
            e[y] = i;
          return;
        }
        var R = u.attributeName, w = u.attributeNamespace;
        if (i === null)
          e.removeAttribute(R);
        else {
          var F = u.type, M;
          F === gn || F === Ar && i === !0 ? M = "" : (Kr(i, R), M = "" + i, u.sanitizeURL && Cl(M.toString())), w ? e.setAttributeNS(w, R, M) : e.setAttribute(R, M);
        }
      }
    }
    var ca = Symbol.for("react.element"), Nr = Symbol.for("react.portal"), Ri = Symbol.for("react.fragment"), Ta = Symbol.for("react.strict_mode"), Ra = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), ae = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), Ct = Symbol.for("react.suspense_list"), wt = Symbol.for("react.memo"), Qe = Symbol.for("react.lazy"), pt = Symbol.for("react.scope"), jn = Symbol.for("react.debug_trace_mode"), en = Symbol.for("react.offscreen"), sn = Symbol.for("react.legacy_hidden"), wr = Symbol.for("react.cache"), wa = Symbol.for("react.tracing_marker"), Mt = Symbol.iterator, Zn = "@@iterator";
    function Mr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Mt && e[Mt] || e[Zn];
      return typeof t == "function" ? t : null;
    }
    var vt = Object.assign, ji = 0, xl, Xo, Tl, ei, fs, Ur, ds;
    function ps() {
    }
    ps.__reactDisabledLog = !0;
    function Sc() {
      {
        if (ji === 0) {
          xl = console.log, Xo = console.info, Tl = console.warn, ei = console.error, fs = console.group, Ur = console.groupCollapsed, ds = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ps,
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
        ji++;
      }
    }
    function Jo() {
      {
        if (ji--, ji === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: vt({}, e, {
              value: xl
            }),
            info: vt({}, e, {
              value: Xo
            }),
            warn: vt({}, e, {
              value: Tl
            }),
            error: vt({}, e, {
              value: ei
            }),
            group: vt({}, e, {
              value: fs
            }),
            groupCollapsed: vt({}, e, {
              value: Ur
            }),
            groupEnd: vt({}, e, {
              value: ds
            })
          });
        }
        ji < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Rl = p.ReactCurrentDispatcher, fa;
    function Fr(e, t, i) {
      {
        if (fa === void 0)
          try {
            throw Error();
          } catch (u) {
            var l = u.stack.trim().match(/\n( *(at )?)/);
            fa = l && l[1] || "";
          }
        return `
` + fa + e;
      }
    }
    var wl = !1, bl;
    {
      var _l = typeof WeakMap == "function" ? WeakMap : Map;
      bl = new _l();
    }
    function Zo(e, t) {
      if (!e || wl)
        return "";
      {
        var i = bl.get(e);
        if (i !== void 0)
          return i;
      }
      var l;
      wl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = Rl.current, Rl.current = null, Sc();
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
            } catch (W) {
              l = W;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (W) {
              l = W;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            l = W;
          }
          e();
        }
      } catch (W) {
        if (W && l && typeof W.stack == "string") {
          for (var y = W.stack.split(`
`), E = l.stack.split(`
`), R = y.length - 1, w = E.length - 1; R >= 1 && w >= 0 && y[R] !== E[w]; )
            w--;
          for (; R >= 1 && w >= 0; R--, w--)
            if (y[R] !== E[w]) {
              if (R !== 1 || w !== 1)
                do
                  if (R--, w--, w < 0 || y[R] !== E[w]) {
                    var F = `
` + y[R].replace(" at new ", " at ");
                    return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && bl.set(e, F), F;
                  }
                while (R >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        wl = !1, Rl.current = c, Jo(), Error.prepareStackTrace = u;
      }
      var M = e ? e.displayName || e.name : "", I = M ? Fr(M) : "";
      return typeof e == "function" && bl.set(e, I), I;
    }
    function eu(e, t, i) {
      return Zo(e, !0);
    }
    function Ya(e, t, i) {
      return Zo(e, !1);
    }
    function yd(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ba(e, t, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Zo(e, yd(e));
      if (typeof e == "string")
        return Fr(e);
      switch (e) {
        case Ne:
          return Fr("Suspense");
        case Ct:
          return Fr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case se:
            return Ya(e.render);
          case wt:
            return ba(e.type, t, i);
          case Qe: {
            var l = e, u = l._payload, c = l._init;
            try {
              return ba(c(u), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    function Ut(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case q:
          return Fr(e.type);
        case un:
          return Fr("Lazy");
        case He:
          return Fr("Suspense");
        case Nt:
          return Fr("SuspenseList");
        case O:
        case B:
        case Je:
          return Ya(e.type);
        case Be:
          return Ya(e.type.render);
        case N:
          return eu(e.type);
        default:
          return "";
      }
    }
    function tu(e) {
      try {
        var t = "", i = e;
        do
          t += Ut(i), i = i.return;
        while (i);
        return t;
      } catch (l) {
        return `
Error generating stack: ` + l.message + `
` + l.stack;
      }
    }
    function uo(e, t, i) {
      var l = e.displayName;
      if (l)
        return l;
      var u = t.displayName || t.name || "";
      return u !== "" ? i + "(" + u + ")" : i;
    }
    function nu(e) {
      return e.displayName || "Context";
    }
    function bt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ri:
          return "Fragment";
        case Nr:
          return "Portal";
        case Ra:
          return "Profiler";
        case Ta:
          return "StrictMode";
        case Ne:
          return "Suspense";
        case Ct:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ae:
            var t = e;
            return nu(t) + ".Consumer";
          case A:
            var i = e;
            return nu(i._context) + ".Provider";
          case se:
            return uo(e, e.render, "ForwardRef");
          case wt:
            var l = e.displayName || null;
            return l !== null ? l : bt(e.type) || "Memo";
          case Qe: {
            var u = e, c = u._payload, v = u._init;
            try {
              return bt(v(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function ru(e, t, i) {
      var l = t.displayName || t.name || "";
      return e.displayName || (l !== "" ? i + "(" + l + ")" : i);
    }
    function iu(e) {
      return e.displayName || "Context";
    }
    function rt(e) {
      var t = e.tag, i = e.type;
      switch (t) {
        case Vt:
          return "Cache";
        case Ke:
          var l = i;
          return iu(l) + ".Consumer";
        case ve:
          var u = i;
          return iu(u._context) + ".Provider";
        case Xt:
          return "DehydratedFragment";
        case Be:
          return ru(i, i.render, "ForwardRef");
        case ne:
          return "Fragment";
        case q:
          return i;
        case Q:
          return "Portal";
        case k:
          return "Root";
        case K:
          return "Text";
        case un:
          return bt(i);
        case ye:
          return i === Ta ? "StrictMode" : "Mode";
        case Ye:
          return "Offscreen";
        case yt:
          return "Profiler";
        case Rn:
          return "Scope";
        case He:
          return "Suspense";
        case Nt:
          return "SuspenseList";
        case At:
          return "TracingMarker";
        case N:
        case O:
        case Dn:
        case B:
        case gt:
        case Je:
          if (typeof i == "function")
            return i.displayName || i.name || null;
          if (typeof i == "string")
            return i;
          break;
      }
      return null;
    }
    var so = p.ReactDebugCurrentFrame, En = null, ti = !1;
    function zr() {
      {
        if (En === null)
          return null;
        var e = En._debugOwner;
        if (e !== null && typeof e < "u")
          return rt(e);
      }
      return null;
    }
    function kl() {
      return En === null ? "" : tu(En);
    }
    function wn() {
      so.getCurrentStack = null, En = null, ti = !1;
    }
    function Wt(e) {
      so.getCurrentStack = e === null ? null : kl, En = e, ti = !1;
    }
    function Ec() {
      return En;
    }
    function ni(e) {
      ti = e;
    }
    function er(e) {
      return "" + e;
    }
    function _a(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Tr(e), e;
        default:
          return "";
      }
    }
    var Cc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Wa(e, t) {
      Cc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || h("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || h("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ol(e) {
      var t = e.type, i = e.nodeName;
      return i && i.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function xc(e) {
      return e._valueTracker;
    }
    function Hi(e) {
      e._valueTracker = null;
    }
    function Dl(e) {
      var t = "";
      return e && (Ol(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Qa(e) {
      var t = Ol(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Tr(e[t]);
      var l = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof i > "u" || typeof i.get != "function" || typeof i.set != "function")) {
        var u = i.get, c = i.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(y) {
            Tr(y), l = "" + y, c.call(this, y);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        });
        var v = {
          getValue: function() {
            return l;
          },
          setValue: function(y) {
            Tr(y), l = "" + y;
          },
          stopTracking: function() {
            Hi(e), delete e[t];
          }
        };
        return v;
      }
    }
    function Pi(e) {
      xc(e) || (e._valueTracker = Qa(e));
    }
    function au(e) {
      if (!e)
        return !1;
      var t = xc(e);
      if (!t)
        return !0;
      var i = t.getValue(), l = Dl(e);
      return l !== i ? (t.setValue(l), !0) : !1;
    }
    function Al(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ll = !1, co = !1, lu = !1, vs = !1;
    function da(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function C(e, t) {
      var i = e, l = t.checked, u = vt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: l ?? i._wrapperState.initialChecked
      });
      return u;
    }
    function D(e, t) {
      Wa("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !co && (h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", zr() || "A component", t.type), co = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ll && (h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", zr() || "A component", t.type), Ll = !0);
      var i = e, l = t.defaultValue == null ? "" : t.defaultValue;
      i._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: _a(t.value != null ? t.value : l),
        controlled: da(t)
      };
    }
    function $(e, t) {
      var i = e, l = t.checked;
      l != null && Ti(i, "checked", l, !1);
    }
    function G(e, t) {
      var i = e;
      {
        var l = da(t);
        !i._wrapperState.controlled && l && !vs && (h("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vs = !0), i._wrapperState.controlled && !l && !lu && (h("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), lu = !0);
      }
      $(e, t);
      var u = _a(t.value), c = t.type;
      if (u != null)
        c === "number" ? (u === 0 && i.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        i.value != u) && (i.value = er(u)) : i.value !== er(u) && (i.value = er(u));
      else if (c === "submit" || c === "reset") {
        i.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? $e(i, t.type, u) : t.hasOwnProperty("defaultValue") && $e(i, t.type, _a(t.defaultValue)), t.checked == null && t.defaultChecked != null && (i.defaultChecked = !!t.defaultChecked);
    }
    function ce(e, t, i) {
      var l = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, c = u === "submit" || u === "reset";
        if (c && (t.value === void 0 || t.value === null))
          return;
        var v = er(l._wrapperState.initialValue);
        i || v !== l.value && (l.value = v), l.defaultValue = v;
      }
      var y = l.name;
      y !== "" && (l.name = ""), l.defaultChecked = !l.defaultChecked, l.defaultChecked = !!l._wrapperState.initialChecked, y !== "" && (l.name = y);
    }
    function qe(e, t) {
      var i = e;
      G(i, t), Se(i, t);
    }
    function Se(e, t) {
      var i = t.name;
      if (t.type === "radio" && i != null) {
        for (var l = e; l.parentNode; )
          l = l.parentNode;
        Kr(i, "name");
        for (var u = l.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), c = 0; c < u.length; c++) {
          var v = u[c];
          if (!(v === e || v.form !== e.form)) {
            var y = um(v);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            au(v), G(v, y);
          }
        }
      }
    }
    function $e(e, t, i) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Al(e.ownerDocument) !== e) && (i == null ? e.defaultValue = er(e._wrapperState.initialValue) : e.defaultValue !== er(i) && (e.defaultValue = er(i)));
    }
    var St = !1, Lt = !1, tn = !1;
    function Kt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? a.Children.forEach(t.children, function(i) {
        i != null && (typeof i == "string" || typeof i == "number" || Lt || (Lt = !0, h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (tn || (tn = !0, h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !St && (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), St = !0);
    }
    function nn(e, t) {
      t.value != null && e.setAttribute("value", er(_a(t.value)));
    }
    var ln = Array.isArray;
    function _t(e) {
      return ln(e);
    }
    var qa;
    qa = !1;
    function ou() {
      var e = zr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var hs = ["value", "defaultValue"];
    function gd(e) {
      {
        Wa("select", e);
        for (var t = 0; t < hs.length; t++) {
          var i = hs[t];
          if (e[i] != null) {
            var l = _t(e[i]);
            e.multiple && !l ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", i, ou()) : !e.multiple && l && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", i, ou());
          }
        }
      }
    }
    function pa(e, t, i, l) {
      var u = e.options;
      if (t) {
        for (var c = i, v = {}, y = 0; y < c.length; y++)
          v["$" + c[y]] = !0;
        for (var E = 0; E < u.length; E++) {
          var R = v.hasOwnProperty("$" + u[E].value);
          u[E].selected !== R && (u[E].selected = R), R && l && (u[E].defaultSelected = !0);
        }
      } else {
        for (var w = er(_a(i)), F = null, M = 0; M < u.length; M++) {
          if (u[M].value === w) {
            u[M].selected = !0, l && (u[M].defaultSelected = !0);
            return;
          }
          F === null && !u[M].disabled && (F = u[M]);
        }
        F !== null && (F.selected = !0);
      }
    }
    function ms(e, t) {
      return vt({}, t, {
        value: void 0
      });
    }
    function ys(e, t) {
      var i = e;
      gd(t), i._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !qa && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), qa = !0);
    }
    function Sd(e, t) {
      var i = e;
      i.multiple = !!t.multiple;
      var l = t.value;
      l != null ? pa(i, !!t.multiple, l, !1) : t.defaultValue != null && pa(i, !!t.multiple, t.defaultValue, !0);
    }
    function Uy(e, t) {
      var i = e, l = i._wrapperState.wasMultiple;
      i._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? pa(i, !!t.multiple, u, !1) : l !== !!t.multiple && (t.defaultValue != null ? pa(i, !!t.multiple, t.defaultValue, !0) : pa(i, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Fy(e, t) {
      var i = e, l = t.value;
      l != null && pa(i, !!t.multiple, l, !1);
    }
    var Ed = !1;
    function Cd(e, t) {
      var i = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var l = vt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: er(i._wrapperState.initialValue)
      });
      return l;
    }
    function Nv(e, t) {
      var i = e;
      Wa("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Ed && (h("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", zr() || "A component"), Ed = !0);
      var l = t.value;
      if (l == null) {
        var u = t.children, c = t.defaultValue;
        if (u != null) {
          h("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (c != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (_t(u)) {
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
        initialValue: _a(l)
      };
    }
    function Mv(e, t) {
      var i = e, l = _a(t.value), u = _a(t.defaultValue);
      if (l != null) {
        var c = er(l);
        c !== i.value && (i.value = c), t.defaultValue == null && i.defaultValue !== c && (i.defaultValue = c);
      }
      u != null && (i.defaultValue = er(u));
    }
    function Uv(e, t) {
      var i = e, l = i.textContent;
      l === i._wrapperState.initialValue && l !== "" && l !== null && (i.value = l);
    }
    function xd(e, t) {
      Mv(e, t);
    }
    var Ga = "http://www.w3.org/1999/xhtml", zy = "http://www.w3.org/1998/Math/MathML", Td = "http://www.w3.org/2000/svg";
    function Tc(e) {
      switch (e) {
        case "svg":
          return Td;
        case "math":
          return zy;
        default:
          return Ga;
      }
    }
    function Rd(e, t) {
      return e == null || e === Ga ? Tc(t) : e === Td && t === "foreignObject" ? Ga : e;
    }
    var jy = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, l, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, i, l, u);
        });
      } : e;
    }, Rc, Fv = jy(function(e, t) {
      if (e.namespaceURI === Td && !("innerHTML" in e)) {
        Rc = Rc || document.createElement("div"), Rc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var i = Rc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; i.firstChild; )
          e.appendChild(i.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ri = 1, Ka = 3, Hn = 8, va = 9, fo = 11, wc = function(e, t) {
      if (t) {
        var i = e.firstChild;
        if (i && i === e.lastChild && i.nodeType === Ka) {
          i.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, zv = {
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
    }, uu = {
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
    function jv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Hv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(uu).forEach(function(e) {
      Hv.forEach(function(t) {
        uu[jv(t, e)] = uu[e];
      });
    });
    function bc(e, t, i) {
      var l = t == null || typeof t == "boolean" || t === "";
      return l ? "" : !i && typeof t == "number" && t !== 0 && !(uu.hasOwnProperty(e) && uu[e]) ? t + "px" : (xr(t, e), ("" + t).trim());
    }
    var su = /([A-Z])/g, Hy = /^ms-/;
    function Py(e) {
      return e.replace(su, "-$1").toLowerCase().replace(Hy, "-ms-");
    }
    var Pv = function() {
    };
    {
      var Bv = /^(?:webkit|moz|o)[A-Z]/, Vv = /^-ms-/, gs = /-(.)/g, cu = /;\s*$/, fu = {}, du = {}, Iv = !1, wd = !1, bd = function(e) {
        return e.replace(gs, function(t, i) {
          return i.toUpperCase();
        });
      }, _d = function(e) {
        fu.hasOwnProperty(e) && fu[e] || (fu[e] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          bd(e.replace(Vv, "ms-"))
        ));
      }, $v = function(e) {
        fu.hasOwnProperty(e) && fu[e] || (fu[e] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Yv = function(e, t) {
        du.hasOwnProperty(t) && du[t] || (du[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(cu, "")));
      }, Wv = function(e, t) {
        Iv || (Iv = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, By = function(e, t) {
        wd || (wd = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Pv = function(e, t) {
        e.indexOf("-") > -1 ? _d(e) : Bv.test(e) ? $v(e) : cu.test(t) && Yv(e, t), typeof t == "number" && (isNaN(t) ? Wv(e, t) : isFinite(t) || By(e, t));
      };
    }
    var Vy = Pv;
    function Iy(e) {
      {
        var t = "", i = "";
        for (var l in e)
          if (e.hasOwnProperty(l)) {
            var u = e[l];
            if (u != null) {
              var c = l.indexOf("--") === 0;
              t += i + (c ? l : Py(l)) + ":", t += bc(l, u, c), i = ";";
            }
          }
        return t || null;
      }
    }
    function Qv(e, t) {
      var i = e.style;
      for (var l in t)
        if (t.hasOwnProperty(l)) {
          var u = l.indexOf("--") === 0;
          u || Vy(l, t[l]);
          var c = bc(l, t[l], u);
          l === "float" && (l = "cssFloat"), u ? i.setProperty(l, c) : i[l] = c;
        }
    }
    function $y(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Bi(e) {
      var t = {};
      for (var i in e)
        for (var l = zv[i] || [i], u = 0; u < l.length; u++)
          t[l[u]] = i;
      return t;
    }
    function Ss(e, t) {
      {
        if (!t)
          return;
        var i = Bi(e), l = Bi(t), u = {};
        for (var c in i) {
          var v = i[c], y = l[c];
          if (y && v !== y) {
            var E = v + "," + y;
            if (u[E])
              continue;
            u[E] = !0, h("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", $y(e[v]) ? "Removing" : "Updating", v, y);
          }
        }
      }
    }
    var qv = {
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
    }, Gv = vt({
      menuitem: !0
    }, qv), Kv = "__html";
    function _c(e, t) {
      if (t) {
        if (Gv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Kv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && h("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Xa(e, t) {
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
    var kc = {
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
    }, Xv = {
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
    }, ha = {}, kd = new RegExp("^(aria)-[" + ze + "]*$"), Es = new RegExp("^(aria)[A-Z][" + ze + "]*$");
    function Od(e, t) {
      {
        if (Xn.call(ha, t) && ha[t])
          return !0;
        if (Es.test(t)) {
          var i = "aria-" + t.slice(4).toLowerCase(), l = Xv.hasOwnProperty(i) ? i : null;
          if (l == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ha[t] = !0, !0;
          if (t !== l)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, l), ha[t] = !0, !0;
        }
        if (kd.test(t)) {
          var u = t.toLowerCase(), c = Xv.hasOwnProperty(u) ? u : null;
          if (c == null)
            return ha[t] = !0, !1;
          if (t !== c)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, c), ha[t] = !0, !0;
        }
      }
      return !0;
    }
    function Jv(e, t) {
      {
        var i = [];
        for (var l in t) {
          var u = Od(e, l);
          u || i.push(l);
        }
        var c = i.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        i.length === 1 ? h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e) : i.length > 1 && h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e);
      }
    }
    function Oc(e, t) {
      Xa(e, t) || Jv(e, t);
    }
    var po = !1;
    function Dd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !po && (po = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Ad = function() {
    };
    {
      var tr = {}, Ld = /^on./, Zv = /^on[^A-Z]/, eh = new RegExp("^(aria)-[" + ze + "]*$"), th = new RegExp("^(aria)[A-Z][" + ze + "]*$");
      Ad = function(e, t, i, l) {
        if (Xn.call(tr, t) && tr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), tr[t] = !0, !0;
        if (l != null) {
          var c = l.registrationNameDependencies, v = l.possibleRegistrationNames;
          if (c.hasOwnProperty(t))
            return !0;
          var y = v.hasOwnProperty(u) ? v[u] : null;
          if (y != null)
            return h("Invalid event handler property `%s`. Did you mean `%s`?", t, y), tr[t] = !0, !0;
          if (Ld.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), tr[t] = !0, !0;
        } else if (Ld.test(t))
          return Zv.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), tr[t] = !0, !0;
        if (eh.test(t) || th.test(t))
          return !0;
        if (u === "innerhtml")
          return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), tr[t] = !0, !0;
        if (u === "aria")
          return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), tr[t] = !0, !0;
        if (u === "is" && i !== null && i !== void 0 && typeof i != "string")
          return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof i), tr[t] = !0, !0;
        if (typeof i == "number" && isNaN(i))
          return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), tr[t] = !0, !0;
        var E = Lr(t), R = E !== null && E.type === Ei;
        if (kc.hasOwnProperty(u)) {
          var w = kc[u];
          if (w !== t)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", t, w), tr[t] = !0, !0;
        } else if (!R && t !== u)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), tr[t] = !0, !0;
        return typeof i == "boolean" && Rr(t, i, E, !1) ? (i ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, t, t, i, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, t, t, i, t, t, t), tr[t] = !0, !0) : R ? !0 : Rr(t, i, E, !1) ? (tr[t] = !0, !1) : ((i === "false" || i === "true") && E !== null && E.type === gn && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, t, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, i), tr[t] = !0), !0);
      };
    }
    var nh = function(e, t, i) {
      {
        var l = [];
        for (var u in t) {
          var c = Ad(e, u, t[u], i);
          c || l.push(u);
        }
        var v = l.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        l.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : l.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function rh(e, t, i) {
      Xa(e, t) || nh(e, t, i);
    }
    var Ja = 1, Cs = 2, vo = 4, Yy = Ja | Cs | vo, xs = null;
    function Ts(e) {
      xs !== null && h("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), xs = e;
    }
    function Wy() {
      xs === null && h("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), xs = null;
    }
    function ih(e) {
      return e === xs;
    }
    function Dc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ka ? t.parentNode : t;
    }
    var rn = null, Nl = null, Za = null;
    function pu(e) {
      var t = Wu(e);
      if (t) {
        if (typeof rn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var i = t.stateNode;
        if (i) {
          var l = um(i);
          rn(t.stateNode, t.type, l);
        }
      }
    }
    function ah(e) {
      rn = e;
    }
    function Ac(e) {
      Nl ? Za ? Za.push(e) : Za = [e] : Nl = e;
    }
    function Rs() {
      return Nl !== null || Za !== null;
    }
    function ws() {
      if (Nl) {
        var e = Nl, t = Za;
        if (Nl = null, Za = null, pu(e), t)
          for (var i = 0; i < t.length; i++)
            pu(t[i]);
      }
    }
    var ho = function(e, t) {
      return e(t);
    }, Nd = function() {
    }, Md = !1;
    function Qy() {
      var e = Rs();
      e && (Nd(), ws());
    }
    function Ud(e, t, i) {
      if (Md)
        return e(t, i);
      Md = !0;
      try {
        return ho(e, t, i);
      } finally {
        Md = !1, Qy();
      }
    }
    function Lc(e, t, i) {
      ho = e, Nd = i;
    }
    function Nc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Fd(e, t, i) {
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
          return !!(i.disabled && Nc(t));
        default:
          return !1;
      }
    }
    function mo(e, t) {
      var i = e.stateNode;
      if (i === null)
        return null;
      var l = um(i);
      if (l === null)
        return null;
      var u = l[t];
      if (Fd(t, e.type, l))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var bs = !1;
    if (yn)
      try {
        var yo = {};
        Object.defineProperty(yo, "passive", {
          get: function() {
            bs = !0;
          }
        }), window.addEventListener("test", yo, yo), window.removeEventListener("test", yo, yo);
      } catch {
        bs = !1;
      }
    function lh(e, t, i, l, u, c, v, y, E) {
      var R = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(i, R);
      } catch (w) {
        this.onError(w);
      }
    }
    var zd = lh;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var jd = document.createElement("react");
      zd = function(t, i, l, u, c, v, y, E, R) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var w = document.createEvent("Event"), F = !1, M = !0, I = window.event, W = Object.getOwnPropertyDescriptor(window, "event");
        function X() {
          jd.removeEventListener(J, Ve, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = I);
        }
        var Ee = Array.prototype.slice.call(arguments, 3);
        function Ve() {
          F = !0, X(), i.apply(l, Ee), M = !1;
        }
        var Ue, Dt = !1, Tt = !1;
        function H(P) {
          if (Ue = P.error, Dt = !0, Ue === null && P.colno === 0 && P.lineno === 0 && (Tt = !0), P.defaultPrevented && Ue != null && typeof Ue == "object")
            try {
              Ue._suppressLogging = !0;
            } catch {
            }
        }
        var J = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", H), jd.addEventListener(J, Ve, !1), w.initEvent(J, !1, !1), jd.dispatchEvent(w), W && Object.defineProperty(window, "event", W), F && M && (Dt ? Tt && (Ue = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ue = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ue)), window.removeEventListener("error", H), !F)
          return X(), lh.apply(this, arguments);
      };
    }
    var qy = zd, Ml = !1, ma = null, _s = !1, Ul = null, ka = {
      onError: function(e) {
        Ml = !0, ma = e;
      }
    };
    function go(e, t, i, l, u, c, v, y, E) {
      Ml = !1, ma = null, qy.apply(ka, arguments);
    }
    function el(e, t, i, l, u, c, v, y, E) {
      if (go.apply(this, arguments), Ml) {
        var R = Pd();
        _s || (_s = !0, Ul = R);
      }
    }
    function Hd() {
      if (_s) {
        var e = Ul;
        throw _s = !1, Ul = null, e;
      }
    }
    function Gy() {
      return Ml;
    }
    function Pd() {
      if (Ml) {
        var e = ma;
        return Ml = !1, ma = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Vi(e) {
      return e._reactInternals;
    }
    function ks(e) {
      return e._reactInternals !== void 0;
    }
    function vu(e, t) {
      e._reactInternals = t;
    }
    var Pe = (
      /*                      */
      0
    ), Fl = (
      /*                */
      1
    ), cn = (
      /*                    */
      2
    ), st = (
      /*                       */
      4
    ), Bt = (
      /*                */
      16
    ), Qt = (
      /*                 */
      32
    ), Oa = (
      /*                     */
      64
    ), tt = (
      /*                   */
      128
    ), bn = (
      /*            */
      256
    ), ii = (
      /*                          */
      512
    ), Ii = (
      /*                     */
      1024
    ), vn = (
      /*                      */
      2048
    ), $i = (
      /*                    */
      4096
    ), zl = (
      /*                   */
      8192
    ), Os = (
      /*             */
      16384
    ), Mc = vn | st | Oa | ii | Ii | Os, oh = (
      /*               */
      32767
    ), wi = (
      /*                   */
      32768
    ), nr = (
      /*                */
      65536
    ), Ds = (
      /* */
      131072
    ), Bd = (
      /*                       */
      1048576
    ), Vd = (
      /*                    */
      2097152
    ), ai = (
      /*                 */
      4194304
    ), jl = (
      /*                */
      8388608
    ), li = (
      /*               */
      16777216
    ), So = (
      /*              */
      33554432
    ), hu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      st | Ii | 0
    ), oi = cn | st | Bt | Qt | ii | $i | zl, br = st | Oa | ii | zl, Yi = vn | Bt, sr = ai | jl | Vd, tl = p.ReactCurrentOwner;
    function bi(e) {
      var t = e, i = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var l = t;
        do
          t = l, (t.flags & (cn | $i)) !== Pe && (i = t.return), l = t.return;
        while (l);
      }
      return t.tag === k ? i : null;
    }
    function Id(e) {
      if (e.tag === He) {
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
    function Uc(e) {
      return e.tag === k ? e.stateNode.containerInfo : null;
    }
    function $d(e) {
      return bi(e) === e;
    }
    function _i(e) {
      {
        var t = tl.current;
        if (t !== null && t.tag === N) {
          var i = t, l = i.stateNode;
          l._warnedAboutRefsInRender || h("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", rt(i) || "A component"), l._warnedAboutRefsInRender = !0;
        }
      }
      var u = Vi(e);
      return u ? bi(u) === u : !1;
    }
    function ui(e) {
      if (bi(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function fn(e) {
      var t = e.alternate;
      if (!t) {
        var i = bi(e);
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
          var y = c.return;
          if (y !== null) {
            l = u = y;
            continue;
          }
          break;
        }
        if (c.child === v.child) {
          for (var E = c.child; E; ) {
            if (E === l)
              return ui(c), e;
            if (E === u)
              return ui(c), t;
            E = E.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (l.return !== u.return)
          l = c, u = v;
        else {
          for (var R = !1, w = c.child; w; ) {
            if (w === l) {
              R = !0, l = c, u = v;
              break;
            }
            if (w === u) {
              R = !0, u = c, l = v;
              break;
            }
            w = w.sibling;
          }
          if (!R) {
            for (w = v.child; w; ) {
              if (w === l) {
                R = !0, l = v, u = c;
                break;
              }
              if (w === u) {
                R = !0, u = v, l = c;
                break;
              }
              w = w.sibling;
            }
            if (!R)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (l.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (l.tag !== k)
        throw new Error("Unable to find node on an unmounted component.");
      return l.stateNode.current === l ? e : t;
    }
    function Wi(e) {
      var t = fn(e);
      return t !== null ? Yd(t) : null;
    }
    function Yd(e) {
      if (e.tag === q || e.tag === K)
        return e;
      for (var t = e.child; t !== null; ) {
        var i = Yd(t);
        if (i !== null)
          return i;
        t = t.sibling;
      }
      return null;
    }
    function uh(e) {
      var t = fn(e);
      return t !== null ? Fc(t) : null;
    }
    function Fc(e) {
      if (e.tag === q || e.tag === K)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Q) {
          var i = Fc(t);
          if (i !== null)
            return i;
        }
        t = t.sibling;
      }
      return null;
    }
    var zc = f.unstable_scheduleCallback, sh = f.unstable_cancelCallback, jc = f.unstable_shouldYield, ch = f.unstable_requestPaint, Cn = f.unstable_now, Wd = f.unstable_getCurrentPriorityLevel, Hc = f.unstable_ImmediatePriority, Eo = f.unstable_UserBlockingPriority, Da = f.unstable_NormalPriority, fh = f.unstable_LowPriority, Pc = f.unstable_IdlePriority, mu = f.unstable_yieldValue, dh = f.unstable_setDisableYieldValue, nl = null, $n = null, he = null, Qi = !1, ki = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Qd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return h("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ft && (e = vt({}, e, {
          getLaneLabelMap: rl,
          injectProfilingHooks: ph
        })), nl = t.inject(e), $n = t;
      } catch (i) {
        h("React instrumentation encountered an error: %s.", i);
      }
      return !!t.checkDCE;
    }
    function qd(e, t) {
      if ($n && typeof $n.onScheduleFiberRoot == "function")
        try {
          $n.onScheduleFiberRoot(nl, e, t);
        } catch (i) {
          Qi || (Qi = !0, h("React instrumentation encountered an error: %s", i));
        }
    }
    function yu(e, t) {
      if ($n && typeof $n.onCommitFiberRoot == "function")
        try {
          var i = (e.current.flags & tt) === tt;
          if (ct) {
            var l;
            switch (t) {
              case Mn:
                l = Hc;
                break;
              case al:
                l = Eo;
                break;
              case Aa:
                l = Da;
                break;
              case Ou:
                l = Pc;
                break;
              default:
                l = Da;
                break;
            }
            $n.onCommitFiberRoot(nl, e, l, i);
          }
        } catch (u) {
          Qi || (Qi = !0, h("React instrumentation encountered an error: %s", u));
        }
    }
    function qi(e) {
      if ($n && typeof $n.onPostCommitFiberRoot == "function")
        try {
          $n.onPostCommitFiberRoot(nl, e);
        } catch (t) {
          Qi || (Qi = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Co(e) {
      if ($n && typeof $n.onCommitFiberUnmount == "function")
        try {
          $n.onCommitFiberUnmount(nl, e);
        } catch (t) {
          Qi || (Qi = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Pn(e) {
      if (typeof mu == "function" && (dh(e), S(e)), $n && typeof $n.setStrictMode == "function")
        try {
          $n.setStrictMode(nl, e);
        } catch (t) {
          Qi || (Qi = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function ph(e) {
      he = e;
    }
    function rl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, i = 0; i < Us; i++) {
          var l = Xy(t);
          e.set(t, l), t *= 2;
        }
        return e;
      }
    }
    function Hl(e) {
      he !== null && typeof he.markCommitStarted == "function" && he.markCommitStarted(e);
    }
    function Bc() {
      he !== null && typeof he.markCommitStopped == "function" && he.markCommitStopped();
    }
    function gu(e) {
      he !== null && typeof he.markComponentRenderStarted == "function" && he.markComponentRenderStarted(e);
    }
    function si() {
      he !== null && typeof he.markComponentRenderStopped == "function" && he.markComponentRenderStopped();
    }
    function Pl(e) {
      he !== null && typeof he.markComponentPassiveEffectMountStarted == "function" && he.markComponentPassiveEffectMountStarted(e);
    }
    function Vc() {
      he !== null && typeof he.markComponentPassiveEffectMountStopped == "function" && he.markComponentPassiveEffectMountStopped();
    }
    function vh(e) {
      he !== null && typeof he.markComponentPassiveEffectUnmountStarted == "function" && he.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ic() {
      he !== null && typeof he.markComponentPassiveEffectUnmountStopped == "function" && he.markComponentPassiveEffectUnmountStopped();
    }
    function hh(e) {
      he !== null && typeof he.markComponentLayoutEffectMountStarted == "function" && he.markComponentLayoutEffectMountStarted(e);
    }
    function As() {
      he !== null && typeof he.markComponentLayoutEffectMountStopped == "function" && he.markComponentLayoutEffectMountStopped();
    }
    function ya(e) {
      he !== null && typeof he.markComponentLayoutEffectUnmountStarted == "function" && he.markComponentLayoutEffectUnmountStarted(e);
    }
    function Su() {
      he !== null && typeof he.markComponentLayoutEffectUnmountStopped == "function" && he.markComponentLayoutEffectUnmountStopped();
    }
    function Ls(e, t, i) {
      he !== null && typeof he.markComponentErrored == "function" && he.markComponentErrored(e, t, i);
    }
    function xo(e, t, i) {
      he !== null && typeof he.markComponentSuspended == "function" && he.markComponentSuspended(e, t, i);
    }
    function Gd(e) {
      he !== null && typeof he.markLayoutEffectsStarted == "function" && he.markLayoutEffectsStarted(e);
    }
    function Eu() {
      he !== null && typeof he.markLayoutEffectsStopped == "function" && he.markLayoutEffectsStopped();
    }
    function mh(e) {
      he !== null && typeof he.markPassiveEffectsStarted == "function" && he.markPassiveEffectsStarted(e);
    }
    function Kd() {
      he !== null && typeof he.markPassiveEffectsStopped == "function" && he.markPassiveEffectsStopped();
    }
    function hn(e) {
      he !== null && typeof he.markRenderStarted == "function" && he.markRenderStarted(e);
    }
    function $c() {
      he !== null && typeof he.markRenderYielded == "function" && he.markRenderYielded();
    }
    function Yc() {
      he !== null && typeof he.markRenderStopped == "function" && he.markRenderStopped();
    }
    function Xd(e) {
      he !== null && typeof he.markRenderScheduled == "function" && he.markRenderScheduled(e);
    }
    function Wc(e, t) {
      he !== null && typeof he.markForceUpdateScheduled == "function" && he.markForceUpdateScheduled(e, t);
    }
    function Ns(e, t) {
      he !== null && typeof he.markStateUpdateScheduled == "function" && he.markStateUpdateScheduled(e, t);
    }
    var Ae = (
      /*                         */
      0
    ), Me = (
      /*                 */
      1
    ), nt = (
      /*                    */
      2
    ), Et = (
      /*               */
      8
    ), Oi = (
      /*              */
      16
    ), Cu = Math.clz32 ? Math.clz32 : _r, Ms = Math.log, Ky = Math.LN2;
    function _r(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Ms(t) / Ky | 0) | 0;
    }
    var Us = 31, re = (
      /*                        */
      0
    ), Bn = (
      /*                          */
      0
    ), je = (
      /*                        */
      1
    ), cr = (
      /*    */
      2
    ), Di = (
      /*             */
      4
    ), il = (
      /*            */
      8
    ), Gi = (
      /*                     */
      16
    ), xu = (
      /*                */
      32
    ), To = (
      /*                       */
      4194240
    ), Tu = (
      /*                        */
      64
    ), Qc = (
      /*                        */
      128
    ), qc = (
      /*                        */
      256
    ), Gc = (
      /*                        */
      512
    ), Kc = (
      /*                        */
      1024
    ), Xc = (
      /*                        */
      2048
    ), Ro = (
      /*                        */
      4096
    ), Jc = (
      /*                        */
      8192
    ), Ru = (
      /*                        */
      16384
    ), wu = (
      /*                       */
      32768
    ), Zc = (
      /*                       */
      65536
    ), Fs = (
      /*                       */
      131072
    ), ef = (
      /*                       */
      262144
    ), tf = (
      /*                       */
      524288
    ), nf = (
      /*                       */
      1048576
    ), rf = (
      /*                       */
      2097152
    ), bu = (
      /*                            */
      130023424
    ), wo = (
      /*                             */
      4194304
    ), af = (
      /*                             */
      8388608
    ), lf = (
      /*                             */
      16777216
    ), Jd = (
      /*                             */
      33554432
    ), of = (
      /*                             */
      67108864
    ), yh = wo, zs = (
      /*          */
      134217728
    ), Zd = (
      /*                          */
      268435455
    ), _u = (
      /*               */
      268435456
    ), Bl = (
      /*                        */
      536870912
    ), kr = (
      /*                   */
      1073741824
    );
    function Xy(e) {
      {
        if (e & je)
          return "Sync";
        if (e & cr)
          return "InputContinuousHydration";
        if (e & Di)
          return "InputContinuous";
        if (e & il)
          return "DefaultHydration";
        if (e & Gi)
          return "Default";
        if (e & xu)
          return "TransitionHydration";
        if (e & To)
          return "Transition";
        if (e & bu)
          return "Retry";
        if (e & zs)
          return "SelectiveHydration";
        if (e & _u)
          return "IdleHydration";
        if (e & Bl)
          return "Idle";
        if (e & kr)
          return "Offscreen";
      }
    }
    var on = -1, uf = Tu, ci = wo;
    function bo(e) {
      switch (Nn(e)) {
        case je:
          return je;
        case cr:
          return cr;
        case Di:
          return Di;
        case il:
          return il;
        case Gi:
          return Gi;
        case xu:
          return xu;
        case Tu:
        case Qc:
        case qc:
        case Gc:
        case Kc:
        case Xc:
        case Ro:
        case Jc:
        case Ru:
        case wu:
        case Zc:
        case Fs:
        case ef:
        case tf:
        case nf:
        case rf:
          return e & To;
        case wo:
        case af:
        case lf:
        case Jd:
        case of:
          return e & bu;
        case zs:
          return zs;
        case _u:
          return _u;
        case Bl:
          return Bl;
        case kr:
          return kr;
        default:
          return h("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function _o(e, t) {
      var i = e.pendingLanes;
      if (i === re)
        return re;
      var l = re, u = e.suspendedLanes, c = e.pingedLanes, v = i & Zd;
      if (v !== re) {
        var y = v & ~u;
        if (y !== re)
          l = bo(y);
        else {
          var E = v & c;
          E !== re && (l = bo(E));
        }
      } else {
        var R = i & ~u;
        R !== re ? l = bo(R) : c !== re && (l = bo(c));
      }
      if (l === re)
        return re;
      if (t !== re && t !== l && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === re) {
        var w = Nn(l), F = Nn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          w >= F || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          w === Gi && (F & To) !== re
        )
          return t;
      }
      (l & Di) !== re && (l |= i & Gi);
      var M = e.entangledLanes;
      if (M !== re)
        for (var I = e.entanglements, W = l & M; W > 0; ) {
          var X = Il(W), Ee = 1 << X;
          l |= I[X], W &= ~Ee;
        }
      return l;
    }
    function gh(e, t) {
      for (var i = e.eventTimes, l = on; t > 0; ) {
        var u = Il(t), c = 1 << u, v = i[u];
        v > l && (l = v), t &= ~c;
      }
      return l;
    }
    function Sh(e, t) {
      switch (e) {
        case je:
        case cr:
        case Di:
          return t + 250;
        case il:
        case Gi:
        case xu:
        case Tu:
        case Qc:
        case qc:
        case Gc:
        case Kc:
        case Xc:
        case Ro:
        case Jc:
        case Ru:
        case wu:
        case Zc:
        case Fs:
        case ef:
        case tf:
        case nf:
        case rf:
          return t + 5e3;
        case wo:
        case af:
        case lf:
        case Jd:
        case of:
          return on;
        case zs:
        case _u:
        case Bl:
        case kr:
          return on;
        default:
          return h("Should have found matching lanes. This is a bug in React."), on;
      }
    }
    function Eh(e, t) {
      for (var i = e.pendingLanes, l = e.suspendedLanes, u = e.pingedLanes, c = e.expirationTimes, v = i; v > 0; ) {
        var y = Il(v), E = 1 << y, R = c[y];
        R === on ? ((E & l) === re || (E & u) !== re) && (c[y] = Sh(E, t)) : R <= t && (e.expiredLanes |= E), v &= ~E;
      }
    }
    function ep(e) {
      return bo(e.pendingLanes);
    }
    function Vl(e) {
      var t = e.pendingLanes & ~kr;
      return t !== re ? t : t & kr ? kr : re;
    }
    function tp(e) {
      return (e & je) !== re;
    }
    function js(e) {
      return (e & Zd) !== re;
    }
    function Ch(e) {
      return (e & bu) === e;
    }
    function xh(e) {
      var t = je | Di | Gi;
      return (e & t) === re;
    }
    function Th(e) {
      return (e & To) === e;
    }
    function Hs(e, t) {
      var i = cr | Di | il | Gi;
      return (t & i) !== re;
    }
    function Rh(e, t) {
      return (t & e.expiredLanes) !== re;
    }
    function np(e) {
      return (e & To) !== re;
    }
    function wh() {
      var e = uf;
      return uf <<= 1, (uf & To) === re && (uf = Tu), e;
    }
    function fi() {
      var e = ci;
      return ci <<= 1, (ci & bu) === re && (ci = wo), e;
    }
    function Nn(e) {
      return e & -e;
    }
    function ku(e) {
      return Nn(e);
    }
    function Il(e) {
      return 31 - Cu(e);
    }
    function sf(e) {
      return Il(e);
    }
    function di(e, t) {
      return (e & t) !== re;
    }
    function ko(e, t) {
      return (e & t) === t;
    }
    function lt(e, t) {
      return e | t;
    }
    function Ps(e, t) {
      return e & ~t;
    }
    function cf(e, t) {
      return e & t;
    }
    function Jy(e) {
      return e;
    }
    function bh(e, t) {
      return e !== Bn && e < t ? e : t;
    }
    function Bs(e) {
      for (var t = [], i = 0; i < Us; i++)
        t.push(e);
      return t;
    }
    function Oo(e, t, i) {
      e.pendingLanes |= t, t !== Bl && (e.suspendedLanes = re, e.pingedLanes = re);
      var l = e.eventTimes, u = sf(t);
      l[u] = i;
    }
    function _h(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var i = e.expirationTimes, l = t; l > 0; ) {
        var u = Il(l), c = 1 << u;
        i[u] = on, l &= ~c;
      }
    }
    function ff(e, t, i) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function df(e, t) {
      var i = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = re, e.pingedLanes = re, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var l = e.entanglements, u = e.eventTimes, c = e.expirationTimes, v = i; v > 0; ) {
        var y = Il(v), E = 1 << y;
        l[y] = re, u[y] = on, c[y] = on, v &= ~E;
      }
    }
    function rp(e, t) {
      for (var i = e.entangledLanes |= t, l = e.entanglements, u = i; u; ) {
        var c = Il(u), v = 1 << c;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        l[c] & t && (l[c] |= t), u &= ~v;
      }
    }
    function kh(e, t) {
      var i = Nn(t), l;
      switch (i) {
        case Di:
          l = cr;
          break;
        case Gi:
          l = il;
          break;
        case Tu:
        case Qc:
        case qc:
        case Gc:
        case Kc:
        case Xc:
        case Ro:
        case Jc:
        case Ru:
        case wu:
        case Zc:
        case Fs:
        case ef:
        case tf:
        case nf:
        case rf:
        case wo:
        case af:
        case lf:
        case Jd:
        case of:
          l = xu;
          break;
        case Bl:
          l = _u;
          break;
        default:
          l = Bn;
          break;
      }
      return (l & (e.suspendedLanes | t)) !== Bn ? Bn : l;
    }
    function pf(e, t, i) {
      if (ki)
        for (var l = e.pendingUpdatersLaneMap; i > 0; ) {
          var u = sf(i), c = 1 << u, v = l[u];
          v.add(t), i &= ~c;
        }
    }
    function ip(e, t) {
      if (ki)
        for (var i = e.pendingUpdatersLaneMap, l = e.memoizedUpdaters; t > 0; ) {
          var u = sf(t), c = 1 << u, v = i[u];
          v.size > 0 && (v.forEach(function(y) {
            var E = y.alternate;
            (E === null || !l.has(E)) && l.add(y);
          }), v.clear()), t &= ~c;
        }
    }
    function Vs(e, t) {
      return null;
    }
    var Mn = je, al = Di, Aa = Gi, Ou = Bl, Du = Bn;
    function Ki() {
      return Du;
    }
    function _n(e) {
      Du = e;
    }
    function Or(e, t) {
      var i = Du;
      try {
        return Du = e, t();
      } finally {
        Du = i;
      }
    }
    function Zy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function eg(e, t) {
      return e > t ? e : t;
    }
    function Au(e, t) {
      return e !== 0 && e < t;
    }
    function fr(e) {
      var t = Nn(e);
      return Au(Mn, t) ? Au(al, t) ? js(t) ? Aa : Ou : al : Mn;
    }
    function vf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var we;
    function Lu(e) {
      we = e;
    }
    function ap(e) {
      we(e);
    }
    var hf;
    function tg(e) {
      hf = e;
    }
    var Nu;
    function mf(e) {
      Nu = e;
    }
    var yf;
    function Oh(e) {
      yf = e;
    }
    var lp;
    function Dh(e) {
      lp = e;
    }
    var Is = !1, Mu = [], mn = null, rr = null, jr = null, Uu = /* @__PURE__ */ new Map(), Fu = /* @__PURE__ */ new Map(), ir = [], Ah = [
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
    function La(e) {
      return Ah.indexOf(e) > -1;
    }
    function ng(e, t, i, l, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: i,
        nativeEvent: u,
        targetContainers: [l]
      };
    }
    function op(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          mn = null;
          break;
        case "dragenter":
        case "dragleave":
          rr = null;
          break;
        case "mouseover":
        case "mouseout":
          jr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var i = t.pointerId;
          Uu.delete(i);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var l = t.pointerId;
          Fu.delete(l);
          break;
        }
      }
    }
    function zu(e, t, i, l, u, c) {
      if (e === null || e.nativeEvent !== c) {
        var v = ng(t, i, l, u, c);
        if (t !== null) {
          var y = Wu(t);
          y !== null && hf(y);
        }
        return v;
      }
      e.eventSystemFlags |= l;
      var E = e.targetContainers;
      return u !== null && E.indexOf(u) === -1 && E.push(u), e;
    }
    function Lh(e, t, i, l, u) {
      switch (t) {
        case "focusin": {
          var c = u;
          return mn = zu(mn, e, t, i, l, c), !0;
        }
        case "dragenter": {
          var v = u;
          return rr = zu(rr, e, t, i, l, v), !0;
        }
        case "mouseover": {
          var y = u;
          return jr = zu(jr, e, t, i, l, y), !0;
        }
        case "pointerover": {
          var E = u, R = E.pointerId;
          return Uu.set(R, zu(Uu.get(R) || null, e, t, i, l, E)), !0;
        }
        case "gotpointercapture": {
          var w = u, F = w.pointerId;
          return Fu.set(F, zu(Fu.get(F) || null, e, t, i, l, w)), !0;
        }
      }
      return !1;
    }
    function up(e) {
      var t = tc(e.target);
      if (t !== null) {
        var i = bi(t);
        if (i !== null) {
          var l = i.tag;
          if (l === He) {
            var u = Id(i);
            if (u !== null) {
              e.blockedOn = u, lp(e.priority, function() {
                Nu(i);
              });
              return;
            }
          } else if (l === k) {
            var c = i.stateNode;
            if (vf(c)) {
              e.blockedOn = Uc(i);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function rg(e) {
      for (var t = yf(), i = {
        blockedOn: null,
        target: e,
        priority: t
      }, l = 0; l < ir.length && Au(t, ir[l].priority); l++)
        ;
      ir.splice(l, 0, i), l === 0 && up(i);
    }
    function Do(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var i = t[0], l = Dr(e.domEventName, e.eventSystemFlags, i, e.nativeEvent);
        if (l === null) {
          var u = e.nativeEvent, c = new u.constructor(u.type, u);
          Ts(c), u.target.dispatchEvent(c), Wy();
        } else {
          var v = Wu(l);
          return v !== null && hf(v), e.blockedOn = l, !1;
        }
        t.shift();
      }
      return !0;
    }
    function gf(e, t, i) {
      Do(e) && i.delete(t);
    }
    function Xi() {
      Is = !1, mn !== null && Do(mn) && (mn = null), rr !== null && Do(rr) && (rr = null), jr !== null && Do(jr) && (jr = null), Uu.forEach(gf), Fu.forEach(gf);
    }
    function xt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Is || (Is = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, Xi)));
    }
    function kn(e) {
      if (Mu.length > 0) {
        xt(Mu[0], e);
        for (var t = 1; t < Mu.length; t++) {
          var i = Mu[t];
          i.blockedOn === e && (i.blockedOn = null);
        }
      }
      mn !== null && xt(mn, e), rr !== null && xt(rr, e), jr !== null && xt(jr, e);
      var l = function(y) {
        return xt(y, e);
      };
      Uu.forEach(l), Fu.forEach(l);
      for (var u = 0; u < ir.length; u++) {
        var c = ir[u];
        c.blockedOn === e && (c.blockedOn = null);
      }
      for (; ir.length > 0; ) {
        var v = ir[0];
        if (v.blockedOn !== null)
          break;
        up(v), v.blockedOn === null && ir.shift();
      }
    }
    var dn = p.ReactCurrentBatchConfig, Yn = !0;
    function pi(e) {
      Yn = !!e;
    }
    function ju() {
      return Yn;
    }
    function Wn(e, t, i) {
      var l = Sf(t), u;
      switch (l) {
        case Mn:
          u = $s;
          break;
        case al:
          u = Ao;
          break;
        case Aa:
        default:
          u = Hu;
          break;
      }
      return u.bind(null, t, i, e);
    }
    function $s(e, t, i, l) {
      var u = Ki(), c = dn.transition;
      dn.transition = null;
      try {
        _n(Mn), Hu(e, t, i, l);
      } finally {
        _n(u), dn.transition = c;
      }
    }
    function Ao(e, t, i, l) {
      var u = Ki(), c = dn.transition;
      dn.transition = null;
      try {
        _n(al), Hu(e, t, i, l);
      } finally {
        _n(u), dn.transition = c;
      }
    }
    function Hu(e, t, i, l) {
      Yn && sp(e, t, i, l);
    }
    function sp(e, t, i, l) {
      var u = Dr(e, t, i, l);
      if (u === null) {
        Eg(e, t, l, $l, i), op(e, l);
        return;
      }
      if (Lh(u, e, t, i, l)) {
        l.stopPropagation();
        return;
      }
      if (op(e, l), t & vo && La(e)) {
        for (; u !== null; ) {
          var c = Wu(u);
          c !== null && ap(c);
          var v = Dr(e, t, i, l);
          if (v === null && Eg(e, t, l, $l, i), v === u)
            break;
          u = v;
        }
        u !== null && l.stopPropagation();
        return;
      }
      Eg(e, t, l, null, i);
    }
    var $l = null;
    function Dr(e, t, i, l) {
      $l = null;
      var u = Dc(l), c = tc(u);
      if (c !== null) {
        var v = bi(c);
        if (v === null)
          c = null;
        else {
          var y = v.tag;
          if (y === He) {
            var E = Id(v);
            if (E !== null)
              return E;
            c = null;
          } else if (y === k) {
            var R = v.stateNode;
            if (vf(R))
              return Uc(v);
            c = null;
          } else
            v !== c && (c = null);
        }
      }
      return $l = c, null;
    }
    function Sf(e) {
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
          return Mn;
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
          return al;
        case "message": {
          var t = Wd();
          switch (t) {
            case Hc:
              return Mn;
            case Eo:
              return al;
            case Da:
            case fh:
              return Aa;
            case Pc:
              return Ou;
            default:
              return Aa;
          }
        }
        default:
          return Aa;
      }
    }
    function Pu(e, t, i) {
      return e.addEventListener(t, i, !1), i;
    }
    function ll(e, t, i) {
      return e.addEventListener(t, i, !0), i;
    }
    function Ef(e, t, i, l) {
      return e.addEventListener(t, i, {
        capture: !0,
        passive: l
      }), i;
    }
    function cp(e, t, i, l) {
      return e.addEventListener(t, i, {
        passive: l
      }), i;
    }
    var Ji = null, Bu = null, Zi = null;
    function Cf(e) {
      return Ji = e, Bu = Ws(), !0;
    }
    function Ys() {
      Ji = null, Bu = null, Zi = null;
    }
    function xf() {
      if (Zi)
        return Zi;
      var e, t = Bu, i = t.length, l, u = Ws(), c = u.length;
      for (e = 0; e < i && t[e] === u[e]; e++)
        ;
      var v = i - e;
      for (l = 1; l <= v && t[i - l] === u[c - l]; l++)
        ;
      var y = l > 1 ? 1 - l : void 0;
      return Zi = u.slice(e, y), Zi;
    }
    function Ws() {
      return "value" in Ji ? Ji.value : Ji.textContent;
    }
    function Lo(e) {
      var t, i = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && i === 13 && (t = 13)) : t = i, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ar() {
      return !0;
    }
    function ol() {
      return !1;
    }
    function xn(e) {
      function t(i, l, u, c, v) {
        this._reactName = i, this._targetInst = u, this.type = l, this.nativeEvent = c, this.target = v, this.currentTarget = null;
        for (var y in e)
          if (e.hasOwnProperty(y)) {
            var E = e[y];
            E ? this[y] = E(c) : this[y] = c[y];
          }
        var R = c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1;
        return R ? this.isDefaultPrevented = ar : this.isDefaultPrevented = ol, this.isPropagationStopped = ol, this;
      }
      return vt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = ar);
        },
        stopPropagation: function() {
          var i = this.nativeEvent;
          i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = ar);
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
        isPersistent: ar
      }), t;
    }
    var Qn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Tf = xn(Qn), No = vt({}, Qn, {
      view: 0,
      detail: 0
    }), fp = xn(No), dp, Na, Vu;
    function pp(e) {
      e !== Vu && (Vu && e.type === "mousemove" ? (dp = e.screenX - Vu.screenX, Na = e.screenY - Vu.screenY) : (dp = 0, Na = 0), Vu = e);
    }
    var Ma = vt({}, No, {
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
      getModifierState: vp,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (pp(e), dp);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Na;
      }
    }), Rf = xn(Ma), Mo = vt({}, Ma, {
      dataTransfer: 0
    }), Nh = xn(Mo), Mh = vt({}, No, {
      relatedTarget: 0
    }), Qs = xn(Mh), wf = vt({}, Qn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ig = xn(wf), ag = vt({}, Qn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Uh = xn(ag), Fh = vt({}, Qn, {
      data: 0
    }), Yl = xn(Fh), lg = Yl, Iu = {
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
    }, zh = {
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
    function On(e) {
      if (e.key) {
        var t = Iu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var i = Lo(e);
        return i === 13 ? "Enter" : String.fromCharCode(i);
      }
      return e.type === "keydown" || e.type === "keyup" ? zh[e.keyCode] || "Unidentified" : "";
    }
    var og = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function jh(e) {
      var t = this, i = t.nativeEvent;
      if (i.getModifierState)
        return i.getModifierState(e);
      var l = og[e];
      return l ? !!i[l] : !1;
    }
    function vp(e) {
      return jh;
    }
    var ug = vt({}, No, {
      key: On,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: vp,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Lo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Lo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Hh = xn(ug), Ph = vt({}, Ma, {
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
    }), Bh = xn(Ph), ea = vt({}, No, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: vp
    }), hp = xn(ea), sg = vt({}, Qn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Wl = xn(sg), bf = vt({}, Ma, {
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
    }), Uo = xn(bf), _f = [9, 13, 27, 32], kf = 229, qs = yn && "CompositionEvent" in window, Gs = null;
    yn && "documentMode" in document && (Gs = document.documentMode);
    var mp = yn && "TextEvent" in window && !Gs, Vh = yn && (!qs || Gs && Gs > 8 && Gs <= 11), yp = 32, gp = String.fromCharCode(yp);
    function Of() {
      Cr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Cr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Cr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Cr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ks = !1;
    function Ih(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Sp(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function cg(e, t) {
      return e === "keydown" && t.keyCode === kf;
    }
    function Ep(e, t) {
      switch (e) {
        case "keyup":
          return _f.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== kf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Df(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Xs(e) {
      return e.locale === "ko";
    }
    var Ql = !1;
    function Af(e, t, i, l, u) {
      var c, v;
      if (qs ? c = Sp(t) : Ql ? Ep(t, l) && (c = "onCompositionEnd") : cg(t, l) && (c = "onCompositionStart"), !c)
        return null;
      Vh && !Xs(l) && (!Ql && c === "onCompositionStart" ? Ql = Cf(u) : c === "onCompositionEnd" && Ql && (v = xf()));
      var y = Gh(i, c);
      if (y.length > 0) {
        var E = new Yl(c, t, null, l, u);
        if (e.push({
          event: E,
          listeners: y
        }), v)
          E.data = v;
        else {
          var R = Df(l);
          R !== null && (E.data = R);
        }
      }
    }
    function $h(e, t) {
      switch (e) {
        case "compositionend":
          return Df(t);
        case "keypress":
          var i = t.which;
          return i !== yp ? null : (Ks = !0, gp);
        case "textInput":
          var l = t.data;
          return l === gp && Ks ? null : l;
        default:
          return null;
      }
    }
    function fg(e, t) {
      if (Ql) {
        if (e === "compositionend" || !qs && Ep(e, t)) {
          var i = xf();
          return Ys(), Ql = !1, i;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Ih(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Vh && !Xs(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Lf(e, t, i, l, u) {
      var c;
      if (mp ? c = $h(t, l) : c = fg(t, l), !c)
        return null;
      var v = Gh(i, "onBeforeInput");
      if (v.length > 0) {
        var y = new lg("onBeforeInput", "beforeinput", null, l, u);
        e.push({
          event: y,
          listeners: v
        }), y.data = c;
      }
    }
    function dg(e, t, i, l, u, c, v) {
      Af(e, t, i, l, u), Lf(e, t, i, l, u);
    }
    var Js = {
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
    function Yh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Js[e.type] : t === "textarea";
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
    function Nf(e) {
      if (!yn)
        return !1;
      var t = "on" + e, i = t in document;
      if (!i) {
        var l = document.createElement("div");
        l.setAttribute(t, "return;"), i = typeof l[t] == "function";
      }
      return i;
    }
    function n() {
      Cr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, i, l) {
      Ac(l);
      var u = Gh(t, "onChange");
      if (u.length > 0) {
        var c = new Tf("onChange", "change", null, i, l);
        e.push({
          event: c,
          listeners: u
        });
      }
    }
    var o = null, s = null;
    function d(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function m(e) {
      var t = [];
      r(t, s, e, Dc(e)), Ud(x, t);
    }
    function x(e) {
      qE(e, 0);
    }
    function _(e) {
      var t = Hf(e);
      if (au(t))
        return e;
    }
    function L(e, t) {
      if (e === "change")
        return t;
    }
    var Y = !1;
    yn && (Y = Nf("input") && (!document.documentMode || document.documentMode > 9));
    function le(e, t) {
      o = e, s = t, o.attachEvent("onpropertychange", ie);
    }
    function oe() {
      o && (o.detachEvent("onpropertychange", ie), o = null, s = null);
    }
    function ie(e) {
      e.propertyName === "value" && _(s) && m(e);
    }
    function xe(e, t, i) {
      e === "focusin" ? (oe(), le(t, i)) : e === "focusout" && oe();
    }
    function _e(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return _(s);
    }
    function De(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Un(e, t) {
      if (e === "click")
        return _(t);
    }
    function j(e, t) {
      if (e === "input" || e === "change")
        return _(t);
    }
    function U(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || $e(e, "number", e.value);
    }
    function V(e, t, i, l, u, c, v) {
      var y = i ? Hf(i) : window, E, R;
      if (d(y) ? E = L : Yh(y) ? Y ? E = j : (E = _e, R = xe) : De(y) && (E = Un), E) {
        var w = E(t, i);
        if (w) {
          r(e, w, l, u);
          return;
        }
      }
      R && R(t, y, i), t === "focusout" && U(y);
    }
    function fe() {
      Gr("onMouseEnter", ["mouseout", "mouseover"]), Gr("onMouseLeave", ["mouseout", "mouseover"]), Gr("onPointerEnter", ["pointerout", "pointerover"]), Gr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Le(e, t, i, l, u, c, v) {
      var y = t === "mouseover" || t === "pointerover", E = t === "mouseout" || t === "pointerout";
      if (y && !ih(l)) {
        var R = l.relatedTarget || l.fromElement;
        if (R && (tc(R) || Mp(R)))
          return;
      }
      if (!(!E && !y)) {
        var w;
        if (u.window === u)
          w = u;
        else {
          var F = u.ownerDocument;
          F ? w = F.defaultView || F.parentWindow : w = window;
        }
        var M, I;
        if (E) {
          var W = l.relatedTarget || l.toElement;
          if (M = i, I = W ? tc(W) : null, I !== null) {
            var X = bi(I);
            (I !== X || I.tag !== q && I.tag !== K) && (I = null);
          }
        } else
          M = null, I = i;
        if (M !== I) {
          var Ee = Rf, Ve = "onMouseLeave", Ue = "onMouseEnter", Dt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ee = Bh, Ve = "onPointerLeave", Ue = "onPointerEnter", Dt = "pointer");
          var Tt = M == null ? w : Hf(M), H = I == null ? w : Hf(I), J = new Ee(Ve, Dt + "leave", M, l, u);
          J.target = Tt, J.relatedTarget = H;
          var P = null, ue = tc(u);
          if (ue === i) {
            var Re = new Ee(Ue, Dt + "enter", I, l, u);
            Re.target = H, Re.relatedTarget = Tt, P = Re;
          }
          kw(e, J, P, M, I);
        }
      }
    }
    function Ge(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ke = typeof Object.is == "function" ? Object.is : Ge;
    function Xe(e, t) {
      if (ke(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var i = Object.keys(e), l = Object.keys(t);
      if (i.length !== l.length)
        return !1;
      for (var u = 0; u < i.length; u++) {
        var c = i[u];
        if (!Xn.call(t, c) || !ke(e[c], t[c]))
          return !1;
      }
      return !0;
    }
    function qn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ft(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function ul(e, t) {
      for (var i = qn(e), l = 0, u = 0; i; ) {
        if (i.nodeType === Ka) {
          if (u = l + i.textContent.length, l <= t && u >= t)
            return {
              node: i,
              offset: t - l
            };
          l = u;
        }
        i = qn(Ft(i));
      }
    }
    function pg(e) {
      var t = e.ownerDocument, i = t && t.defaultView || window, l = i.getSelection && i.getSelection();
      if (!l || l.rangeCount === 0)
        return null;
      var u = l.anchorNode, c = l.anchorOffset, v = l.focusNode, y = l.focusOffset;
      try {
        u.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return uw(e, u, c, v, y);
    }
    function uw(e, t, i, l, u) {
      var c = 0, v = -1, y = -1, E = 0, R = 0, w = e, F = null;
      e:
        for (; ; ) {
          for (var M = null; w === t && (i === 0 || w.nodeType === Ka) && (v = c + i), w === l && (u === 0 || w.nodeType === Ka) && (y = c + u), w.nodeType === Ka && (c += w.nodeValue.length), (M = w.firstChild) !== null; )
            F = w, w = M;
          for (; ; ) {
            if (w === e)
              break e;
            if (F === t && ++E === i && (v = c), F === l && ++R === u && (y = c), (M = w.nextSibling) !== null)
              break;
            w = F, F = w.parentNode;
          }
          w = M;
        }
      return v === -1 || y === -1 ? null : {
        start: v,
        end: y
      };
    }
    function sw(e, t) {
      var i = e.ownerDocument || document, l = i && i.defaultView || window;
      if (l.getSelection) {
        var u = l.getSelection(), c = e.textContent.length, v = Math.min(t.start, c), y = t.end === void 0 ? v : Math.min(t.end, c);
        if (!u.extend && v > y) {
          var E = y;
          y = v, v = E;
        }
        var R = ul(e, v), w = ul(e, y);
        if (R && w) {
          if (u.rangeCount === 1 && u.anchorNode === R.node && u.anchorOffset === R.offset && u.focusNode === w.node && u.focusOffset === w.offset)
            return;
          var F = i.createRange();
          F.setStart(R.node, R.offset), u.removeAllRanges(), v > y ? (u.addRange(F), u.extend(w.node, w.offset)) : (F.setEnd(w.node, w.offset), u.addRange(F));
        }
      }
    }
    function FE(e) {
      return e && e.nodeType === Ka;
    }
    function zE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : FE(e) ? !1 : FE(t) ? zE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function cw(e) {
      return e && e.ownerDocument && zE(e.ownerDocument.documentElement, e);
    }
    function fw(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function jE() {
      for (var e = window, t = Al(); t instanceof e.HTMLIFrameElement; ) {
        if (fw(t))
          e = t.contentWindow;
        else
          return t;
        t = Al(e.document);
      }
      return t;
    }
    function vg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function dw() {
      var e = jE();
      return {
        focusedElem: e,
        selectionRange: vg(e) ? vw(e) : null
      };
    }
    function pw(e) {
      var t = jE(), i = e.focusedElem, l = e.selectionRange;
      if (t !== i && cw(i)) {
        l !== null && vg(i) && hw(i, l);
        for (var u = [], c = i; c = c.parentNode; )
          c.nodeType === ri && u.push({
            element: c,
            left: c.scrollLeft,
            top: c.scrollTop
          });
        typeof i.focus == "function" && i.focus();
        for (var v = 0; v < u.length; v++) {
          var y = u[v];
          y.element.scrollLeft = y.left, y.element.scrollTop = y.top;
        }
      }
    }
    function vw(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = pg(e), t || {
        start: 0,
        end: 0
      };
    }
    function hw(e, t) {
      var i = t.start, l = t.end;
      l === void 0 && (l = i), "selectionStart" in e ? (e.selectionStart = i, e.selectionEnd = Math.min(l, e.value.length)) : sw(e, t);
    }
    var mw = yn && "documentMode" in document && document.documentMode <= 11;
    function yw() {
      Cr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Mf = null, hg = null, Cp = null, mg = !1;
    function gw(e) {
      if ("selectionStart" in e && vg(e))
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
    function Sw(e) {
      return e.window === e ? e.document : e.nodeType === va ? e : e.ownerDocument;
    }
    function HE(e, t, i) {
      var l = Sw(i);
      if (!(mg || Mf == null || Mf !== Al(l))) {
        var u = gw(Mf);
        if (!Cp || !Xe(Cp, u)) {
          Cp = u;
          var c = Gh(hg, "onSelect");
          if (c.length > 0) {
            var v = new Tf("onSelect", "select", null, t, i);
            e.push({
              event: v,
              listeners: c
            }), v.target = Mf;
          }
        }
      }
    }
    function Ew(e, t, i, l, u, c, v) {
      var y = i ? Hf(i) : window;
      switch (t) {
        case "focusin":
          (Yh(y) || y.contentEditable === "true") && (Mf = y, hg = i, Cp = null);
          break;
        case "focusout":
          Mf = null, hg = null, Cp = null;
          break;
        case "mousedown":
          mg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          mg = !1, HE(e, l, u);
          break;
        case "selectionchange":
          if (mw)
            break;
        case "keydown":
        case "keyup":
          HE(e, l, u);
      }
    }
    function Wh(e, t) {
      var i = {};
      return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
    }
    var Uf = {
      animationend: Wh("Animation", "AnimationEnd"),
      animationiteration: Wh("Animation", "AnimationIteration"),
      animationstart: Wh("Animation", "AnimationStart"),
      transitionend: Wh("Transition", "TransitionEnd")
    }, yg = {}, PE = {};
    yn && (PE = document.createElement("div").style, "AnimationEvent" in window || (delete Uf.animationend.animation, delete Uf.animationiteration.animation, delete Uf.animationstart.animation), "TransitionEvent" in window || delete Uf.transitionend.transition);
    function Qh(e) {
      if (yg[e])
        return yg[e];
      if (!Uf[e])
        return e;
      var t = Uf[e];
      for (var i in t)
        if (t.hasOwnProperty(i) && i in PE)
          return yg[e] = t[i];
      return e;
    }
    var BE = Qh("animationend"), VE = Qh("animationiteration"), IE = Qh("animationstart"), $E = Qh("transitionend"), YE = /* @__PURE__ */ new Map(), WE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function $u(e, t) {
      YE.set(e, t), Cr(t, [e]);
    }
    function Cw() {
      for (var e = 0; e < WE.length; e++) {
        var t = WE[e], i = t.toLowerCase(), l = t[0].toUpperCase() + t.slice(1);
        $u(i, "on" + l);
      }
      $u(BE, "onAnimationEnd"), $u(VE, "onAnimationIteration"), $u(IE, "onAnimationStart"), $u("dblclick", "onDoubleClick"), $u("focusin", "onFocus"), $u("focusout", "onBlur"), $u($E, "onTransitionEnd");
    }
    function xw(e, t, i, l, u, c, v) {
      var y = YE.get(t);
      if (y !== void 0) {
        var E = Tf, R = t;
        switch (t) {
          case "keypress":
            if (Lo(l) === 0)
              return;
          case "keydown":
          case "keyup":
            E = Hh;
            break;
          case "focusin":
            R = "focus", E = Qs;
            break;
          case "focusout":
            R = "blur", E = Qs;
            break;
          case "beforeblur":
          case "afterblur":
            E = Qs;
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
            E = Rf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = Nh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = hp;
            break;
          case BE:
          case VE:
          case IE:
            E = ig;
            break;
          case $E:
            E = Wl;
            break;
          case "scroll":
            E = fp;
            break;
          case "wheel":
            E = Uo;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = Uh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = Bh;
            break;
        }
        var w = (c & vo) !== 0;
        {
          var F = !w && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", M = bw(i, y, l.type, w, F);
          if (M.length > 0) {
            var I = new E(y, R, null, l, u);
            e.push({
              event: I,
              listeners: M
            });
          }
        }
      }
    }
    Cw(), fe(), n(), yw(), Of();
    function Tw(e, t, i, l, u, c, v) {
      xw(e, t, i, l, u, c);
      var y = (c & Yy) === 0;
      y && (Le(e, t, i, l, u), V(e, t, i, l, u), Ew(e, t, i, l, u), dg(e, t, i, l, u));
    }
    var xp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], gg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(xp));
    function QE(e, t, i) {
      var l = e.type || "unknown-event";
      e.currentTarget = i, el(l, t, void 0, e), e.currentTarget = null;
    }
    function Rw(e, t, i) {
      var l;
      if (i)
        for (var u = t.length - 1; u >= 0; u--) {
          var c = t[u], v = c.instance, y = c.currentTarget, E = c.listener;
          if (v !== l && e.isPropagationStopped())
            return;
          QE(e, E, y), l = v;
        }
      else
        for (var R = 0; R < t.length; R++) {
          var w = t[R], F = w.instance, M = w.currentTarget, I = w.listener;
          if (F !== l && e.isPropagationStopped())
            return;
          QE(e, I, M), l = F;
        }
    }
    function qE(e, t) {
      for (var i = (t & vo) !== 0, l = 0; l < e.length; l++) {
        var u = e[l], c = u.event, v = u.listeners;
        Rw(c, v, i);
      }
      Hd();
    }
    function ww(e, t, i, l, u) {
      var c = Dc(i), v = [];
      Tw(v, e, l, i, c, t), qE(v, t);
    }
    function Tn(e, t) {
      gg.has(e) || h('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var i = !1, l = t_(t), u = Ow(e);
      l.has(u) || (GE(t, e, Cs, i), l.add(u));
    }
    function Sg(e, t, i) {
      gg.has(e) && !t && h('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var l = 0;
      t && (l |= vo), GE(i, e, l, t);
    }
    var qh = "_reactListening" + Math.random().toString(36).slice(2);
    function Tp(e) {
      if (!e[qh]) {
        e[qh] = !0, ht.forEach(function(i) {
          i !== "selectionchange" && (gg.has(i) || Sg(i, !1, e), Sg(i, !0, e));
        });
        var t = e.nodeType === va ? e : e.ownerDocument;
        t !== null && (t[qh] || (t[qh] = !0, Sg("selectionchange", !1, t)));
      }
    }
    function GE(e, t, i, l, u) {
      var c = Wn(e, t, i), v = void 0;
      bs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, l ? v !== void 0 ? Ef(e, t, c, v) : ll(e, t, c) : v !== void 0 ? cp(e, t, c, v) : Pu(e, t, c);
    }
    function KE(e, t) {
      return e === t || e.nodeType === Hn && e.parentNode === t;
    }
    function Eg(e, t, i, l, u) {
      var c = l;
      if (!(t & Ja) && !(t & Cs)) {
        var v = u;
        if (l !== null) {
          var y = l;
          e:
            for (; ; ) {
              if (y === null)
                return;
              var E = y.tag;
              if (E === k || E === Q) {
                var R = y.stateNode.containerInfo;
                if (KE(R, v))
                  break;
                if (E === Q)
                  for (var w = y.return; w !== null; ) {
                    var F = w.tag;
                    if (F === k || F === Q) {
                      var M = w.stateNode.containerInfo;
                      if (KE(M, v))
                        return;
                    }
                    w = w.return;
                  }
                for (; R !== null; ) {
                  var I = tc(R);
                  if (I === null)
                    return;
                  var W = I.tag;
                  if (W === q || W === K) {
                    y = c = I;
                    continue e;
                  }
                  R = R.parentNode;
                }
              }
              y = y.return;
            }
        }
      }
      Ud(function() {
        return ww(e, t, i, c);
      });
    }
    function Rp(e, t, i) {
      return {
        instance: e,
        listener: t,
        currentTarget: i
      };
    }
    function bw(e, t, i, l, u, c) {
      for (var v = t !== null ? t + "Capture" : null, y = l ? v : t, E = [], R = e, w = null; R !== null; ) {
        var F = R, M = F.stateNode, I = F.tag;
        if (I === q && M !== null && (w = M, y !== null)) {
          var W = mo(R, y);
          W != null && E.push(Rp(R, W, w));
        }
        if (u)
          break;
        R = R.return;
      }
      return E;
    }
    function Gh(e, t) {
      for (var i = t + "Capture", l = [], u = e; u !== null; ) {
        var c = u, v = c.stateNode, y = c.tag;
        if (y === q && v !== null) {
          var E = v, R = mo(u, i);
          R != null && l.unshift(Rp(u, R, E));
          var w = mo(u, t);
          w != null && l.push(Rp(u, w, E));
        }
        u = u.return;
      }
      return l;
    }
    function Ff(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== q);
      return e || null;
    }
    function _w(e, t) {
      for (var i = e, l = t, u = 0, c = i; c; c = Ff(c))
        u++;
      for (var v = 0, y = l; y; y = Ff(y))
        v++;
      for (; u - v > 0; )
        i = Ff(i), u--;
      for (; v - u > 0; )
        l = Ff(l), v--;
      for (var E = u; E--; ) {
        if (i === l || l !== null && i === l.alternate)
          return i;
        i = Ff(i), l = Ff(l);
      }
      return null;
    }
    function XE(e, t, i, l, u) {
      for (var c = t._reactName, v = [], y = i; y !== null && y !== l; ) {
        var E = y, R = E.alternate, w = E.stateNode, F = E.tag;
        if (R !== null && R === l)
          break;
        if (F === q && w !== null) {
          var M = w;
          if (u) {
            var I = mo(y, c);
            I != null && v.unshift(Rp(y, I, M));
          } else if (!u) {
            var W = mo(y, c);
            W != null && v.push(Rp(y, W, M));
          }
        }
        y = y.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function kw(e, t, i, l, u) {
      var c = l && u ? _w(l, u) : null;
      l !== null && XE(e, t, l, c, !1), u !== null && i !== null && XE(e, i, u, c, !0);
    }
    function Ow(e, t) {
      return e + "__bubble";
    }
    var ta = !1, wp = "dangerouslySetInnerHTML", Kh = "suppressContentEditableWarning", Yu = "suppressHydrationWarning", JE = "autoFocus", Zs = "children", ec = "style", Xh = "__html", Cg, Jh, bp, ZE, Zh, eC, tC;
    Cg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Jh = function(e, t) {
      Oc(e, t), Dd(e, t), rh(e, t, {
        registrationNameDependencies: mt,
        possibleRegistrationNames: an
      });
    }, eC = yn && !document.documentMode, bp = function(e, t, i) {
      if (!ta) {
        var l = em(i), u = em(t);
        u !== l && (ta = !0, h("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(l)));
      }
    }, ZE = function(e) {
      if (!ta) {
        ta = !0;
        var t = [];
        e.forEach(function(i) {
          t.push(i);
        }), h("Extra attributes from the server: %s", t);
      }
    }, Zh = function(e, t) {
      t === !1 ? h("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : h("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, tC = function(e, t) {
      var i = e.namespaceURI === Ga ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return i.innerHTML = t, i.innerHTML;
    };
    var Dw = /\r\n?/g, Aw = /\u0000|\uFFFD/g;
    function em(e) {
      Jr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(Dw, `
`).replace(Aw, "");
    }
    function tm(e, t, i, l) {
      var u = em(t), c = em(e);
      if (c !== u && (l && (ta || (ta = !0, h('Text content did not match. Server: "%s" Client: "%s"', c, u))), i && be))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function nC(e) {
      return e.nodeType === va ? e : e.ownerDocument;
    }
    function Lw() {
    }
    function nm(e) {
      e.onclick = Lw;
    }
    function Nw(e, t, i, l, u) {
      for (var c in l)
        if (l.hasOwnProperty(c)) {
          var v = l[c];
          if (c === ec)
            v && Object.freeze(v), Qv(t, v);
          else if (c === wp) {
            var y = v ? v[Xh] : void 0;
            y != null && Fv(t, y);
          } else if (c === Zs)
            if (typeof v == "string") {
              var E = e !== "textarea" || v !== "";
              E && wc(t, v);
            } else
              typeof v == "number" && wc(t, "" + v);
          else
            c === Kh || c === Yu || c === JE || (mt.hasOwnProperty(c) ? v != null && (typeof v != "function" && Zh(c, v), c === "onScroll" && Tn("scroll", t)) : v != null && Ti(t, c, v, u));
        }
    }
    function Mw(e, t, i, l) {
      for (var u = 0; u < t.length; u += 2) {
        var c = t[u], v = t[u + 1];
        c === ec ? Qv(e, v) : c === wp ? Fv(e, v) : c === Zs ? wc(e, v) : Ti(e, c, v, l);
      }
    }
    function Uw(e, t, i, l) {
      var u, c = nC(i), v, y = l;
      if (y === Ga && (y = Tc(e)), y === Ga) {
        if (u = Xa(e, t), !u && e !== e.toLowerCase() && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var E = c.createElement("div");
          E.innerHTML = "<script><\/script>";
          var R = E.firstChild;
          v = E.removeChild(R);
        } else if (typeof t.is == "string")
          v = c.createElement(e, {
            is: t.is
          });
        else if (v = c.createElement(e), e === "select") {
          var w = v;
          t.multiple ? w.multiple = !0 : t.size && (w.size = t.size);
        }
      } else
        v = c.createElementNS(y, e);
      return y === Ga && !u && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !Xn.call(Cg, e) && (Cg[e] = !0, h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function Fw(e, t) {
      return nC(t).createTextNode(e);
    }
    function zw(e, t, i, l) {
      var u = Xa(t, i);
      Jh(t, i);
      var c;
      switch (t) {
        case "dialog":
          Tn("cancel", e), Tn("close", e), c = i;
          break;
        case "iframe":
        case "object":
        case "embed":
          Tn("load", e), c = i;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < xp.length; v++)
            Tn(xp[v], e);
          c = i;
          break;
        case "source":
          Tn("error", e), c = i;
          break;
        case "img":
        case "image":
        case "link":
          Tn("error", e), Tn("load", e), c = i;
          break;
        case "details":
          Tn("toggle", e), c = i;
          break;
        case "input":
          D(e, i), c = C(e, i), Tn("invalid", e);
          break;
        case "option":
          Kt(e, i), c = i;
          break;
        case "select":
          ys(e, i), c = ms(e, i), Tn("invalid", e);
          break;
        case "textarea":
          Nv(e, i), c = Cd(e, i), Tn("invalid", e);
          break;
        default:
          c = i;
      }
      switch (_c(t, c), Nw(t, e, l, c, u), t) {
        case "input":
          Pi(e), ce(e, i, !1);
          break;
        case "textarea":
          Pi(e), Uv(e);
          break;
        case "option":
          nn(e, i);
          break;
        case "select":
          Sd(e, i);
          break;
        default:
          typeof c.onClick == "function" && nm(e);
          break;
      }
    }
    function jw(e, t, i, l, u) {
      Jh(t, l);
      var c = null, v, y;
      switch (t) {
        case "input":
          v = C(e, i), y = C(e, l), c = [];
          break;
        case "select":
          v = ms(e, i), y = ms(e, l), c = [];
          break;
        case "textarea":
          v = Cd(e, i), y = Cd(e, l), c = [];
          break;
        default:
          v = i, y = l, typeof v.onClick != "function" && typeof y.onClick == "function" && nm(e);
          break;
      }
      _c(t, y);
      var E, R, w = null;
      for (E in v)
        if (!(y.hasOwnProperty(E) || !v.hasOwnProperty(E) || v[E] == null))
          if (E === ec) {
            var F = v[E];
            for (R in F)
              F.hasOwnProperty(R) && (w || (w = {}), w[R] = "");
          } else
            E === wp || E === Zs || E === Kh || E === Yu || E === JE || (mt.hasOwnProperty(E) ? c || (c = []) : (c = c || []).push(E, null));
      for (E in y) {
        var M = y[E], I = v != null ? v[E] : void 0;
        if (!(!y.hasOwnProperty(E) || M === I || M == null && I == null))
          if (E === ec)
            if (M && Object.freeze(M), I) {
              for (R in I)
                I.hasOwnProperty(R) && (!M || !M.hasOwnProperty(R)) && (w || (w = {}), w[R] = "");
              for (R in M)
                M.hasOwnProperty(R) && I[R] !== M[R] && (w || (w = {}), w[R] = M[R]);
            } else
              w || (c || (c = []), c.push(E, w)), w = M;
          else if (E === wp) {
            var W = M ? M[Xh] : void 0, X = I ? I[Xh] : void 0;
            W != null && X !== W && (c = c || []).push(E, W);
          } else
            E === Zs ? (typeof M == "string" || typeof M == "number") && (c = c || []).push(E, "" + M) : E === Kh || E === Yu || (mt.hasOwnProperty(E) ? (M != null && (typeof M != "function" && Zh(E, M), E === "onScroll" && Tn("scroll", e)), !c && I !== M && (c = [])) : (c = c || []).push(E, M));
      }
      return w && (Ss(w, y[ec]), (c = c || []).push(ec, w)), c;
    }
    function Hw(e, t, i, l, u) {
      i === "input" && u.type === "radio" && u.name != null && $(e, u);
      var c = Xa(i, l), v = Xa(i, u);
      switch (Mw(e, t, c, v), i) {
        case "input":
          G(e, u);
          break;
        case "textarea":
          Mv(e, u);
          break;
        case "select":
          Uy(e, u);
          break;
      }
    }
    function Pw(e) {
      {
        var t = e.toLowerCase();
        return kc.hasOwnProperty(t) && kc[t] || null;
      }
    }
    function Bw(e, t, i, l, u, c, v) {
      var y, E;
      switch (y = Xa(t, i), Jh(t, i), t) {
        case "dialog":
          Tn("cancel", e), Tn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Tn("load", e);
          break;
        case "video":
        case "audio":
          for (var R = 0; R < xp.length; R++)
            Tn(xp[R], e);
          break;
        case "source":
          Tn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Tn("error", e), Tn("load", e);
          break;
        case "details":
          Tn("toggle", e);
          break;
        case "input":
          D(e, i), Tn("invalid", e);
          break;
        case "option":
          Kt(e, i);
          break;
        case "select":
          ys(e, i), Tn("invalid", e);
          break;
        case "textarea":
          Nv(e, i), Tn("invalid", e);
          break;
      }
      _c(t, i);
      {
        E = /* @__PURE__ */ new Set();
        for (var w = e.attributes, F = 0; F < w.length; F++) {
          var M = w[F].name.toLowerCase();
          switch (M) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              E.add(w[F].name);
          }
        }
      }
      var I = null;
      for (var W in i)
        if (i.hasOwnProperty(W)) {
          var X = i[W];
          if (W === Zs)
            typeof X == "string" ? e.textContent !== X && (i[Yu] !== !0 && tm(e.textContent, X, c, v), I = [Zs, X]) : typeof X == "number" && e.textContent !== "" + X && (i[Yu] !== !0 && tm(e.textContent, X, c, v), I = [Zs, "" + X]);
          else if (mt.hasOwnProperty(W))
            X != null && (typeof X != "function" && Zh(W, X), W === "onScroll" && Tn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var Ee = void 0, Ve = y && We ? null : Lr(W);
            if (i[Yu] !== !0) {
              if (!(W === Kh || W === Yu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              W === "value" || W === "checked" || W === "selected")) {
                if (W === wp) {
                  var Ue = e.innerHTML, Dt = X ? X[Xh] : void 0;
                  if (Dt != null) {
                    var Tt = tC(e, Dt);
                    Tt !== Ue && bp(W, Ue, Tt);
                  }
                } else if (W === ec) {
                  if (E.delete(W), eC) {
                    var H = Iy(X);
                    Ee = e.getAttribute("style"), H !== Ee && bp(W, Ee, H);
                  }
                } else if (y && !We)
                  E.delete(W.toLowerCase()), Ee = xa(e, W, X), X !== Ee && bp(W, Ee, X);
                else if (!Sn(W, Ve, y) && !Gt(W, X, Ve, y)) {
                  var J = !1;
                  if (Ve !== null)
                    E.delete(Ve.attributeName), Ee = xi(e, W, X, Ve);
                  else {
                    var P = l;
                    if (P === Ga && (P = Tc(t)), P === Ga)
                      E.delete(W.toLowerCase());
                    else {
                      var ue = Pw(W);
                      ue !== null && ue !== W && (J = !0, E.delete(ue)), E.delete(W);
                    }
                    Ee = xa(e, W, X);
                  }
                  var Re = We;
                  !Re && X !== Ee && !J && bp(W, Ee, X);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      E.size > 0 && i[Yu] !== !0 && ZE(E), t) {
        case "input":
          Pi(e), ce(e, i, !0);
          break;
        case "textarea":
          Pi(e), Uv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof i.onClick == "function" && nm(e);
          break;
      }
      return I;
    }
    function Vw(e, t, i) {
      var l = e.nodeValue !== t;
      return l;
    }
    function xg(e, t) {
      {
        if (ta)
          return;
        ta = !0, h("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Tg(e, t) {
      {
        if (ta)
          return;
        ta = !0, h('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Rg(e, t, i) {
      {
        if (ta)
          return;
        ta = !0, h("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function wg(e, t) {
      {
        if (t === "" || ta)
          return;
        ta = !0, h('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Iw(e, t, i) {
      switch (t) {
        case "input":
          qe(e, i);
          return;
        case "textarea":
          xd(e, i);
          return;
        case "select":
          Fy(e, i);
          return;
      }
    }
    var _p = function() {
    }, kp = function() {
    };
    {
      var $w = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], rC = [
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
      ], Yw = rC.concat(["button"]), Ww = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], iC = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      kp = function(e, t) {
        var i = vt({}, e || iC), l = {
          tag: t
        };
        return rC.indexOf(t) !== -1 && (i.aTagInScope = null, i.buttonTagInScope = null, i.nobrTagInScope = null), Yw.indexOf(t) !== -1 && (i.pTagInButtonScope = null), $w.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (i.listItemTagAutoclosing = null, i.dlItemTagAutoclosing = null), i.current = l, t === "form" && (i.formTag = l), t === "a" && (i.aTagInScope = l), t === "button" && (i.buttonTagInScope = l), t === "nobr" && (i.nobrTagInScope = l), t === "p" && (i.pTagInButtonScope = l), t === "li" && (i.listItemTagAutoclosing = l), (t === "dd" || t === "dt") && (i.dlItemTagAutoclosing = l), i;
      };
      var Qw = function(e, t) {
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
            return Ww.indexOf(t) === -1;
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
      }, qw = function(e, t) {
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
      }, aC = {};
      _p = function(e, t, i) {
        i = i || iC;
        var l = i.current, u = l && l.tag;
        t != null && (e != null && h("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var c = Qw(e, u) ? null : l, v = c ? null : qw(e, i), y = c || v;
        if (y) {
          var E = y.tag, R = !!c + "|" + e + "|" + E;
          if (!aC[R]) {
            aC[R] = !0;
            var w = e, F = "";
            if (e === "#text" ? /\S/.test(t) ? w = "Text nodes" : (w = "Whitespace text nodes", F = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : w = "<" + e + ">", c) {
              var M = "";
              E === "table" && e === "tr" && (M += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), h("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", w, E, F, M);
            } else
              h("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", w, E);
          }
        }
      };
    }
    var rm = "suppressHydrationWarning", im = "$", am = "/$", Op = "$?", Dp = "$!", Gw = "style", bg = null, _g = null;
    function Kw(e) {
      var t, i, l = e.nodeType;
      switch (l) {
        case va:
        case fo: {
          t = l === va ? "#document" : "#fragment";
          var u = e.documentElement;
          i = u ? u.namespaceURI : Rd(null, "");
          break;
        }
        default: {
          var c = l === Hn ? e.parentNode : e, v = c.namespaceURI || null;
          t = c.tagName, i = Rd(v, t);
          break;
        }
      }
      {
        var y = t.toLowerCase(), E = kp(null, y);
        return {
          namespace: i,
          ancestorInfo: E
        };
      }
    }
    function Xw(e, t, i) {
      {
        var l = e, u = Rd(l.namespace, t), c = kp(l.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: c
        };
      }
    }
    function P2(e) {
      return e;
    }
    function Jw(e) {
      bg = ju(), _g = dw();
      var t = null;
      return pi(!1), t;
    }
    function Zw(e) {
      pw(_g), pi(bg), bg = null, _g = null;
    }
    function eb(e, t, i, l, u) {
      var c;
      {
        var v = l;
        if (_p(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var y = "" + t.children, E = kp(v.ancestorInfo, e);
          _p(null, y, E);
        }
        c = v.namespace;
      }
      var R = Uw(e, t, i, c);
      return Np(u, R), Ug(R, t), R;
    }
    function tb(e, t) {
      e.appendChild(t);
    }
    function nb(e, t, i, l, u) {
      switch (zw(e, t, i, l), t) {
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
    function rb(e, t, i, l, u, c) {
      {
        var v = c;
        if (typeof l.children != typeof i.children && (typeof l.children == "string" || typeof l.children == "number")) {
          var y = "" + l.children, E = kp(v.ancestorInfo, t);
          _p(null, y, E);
        }
      }
      return jw(e, t, i, l);
    }
    function kg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ib(e, t, i, l) {
      {
        var u = i;
        _p(null, e, u.ancestorInfo);
      }
      var c = Fw(e, t);
      return Np(l, c), c;
    }
    function ab() {
      var e = window.event;
      return e === void 0 ? Aa : Sf(e.type);
    }
    var Og = typeof setTimeout == "function" ? setTimeout : void 0, lb = typeof clearTimeout == "function" ? clearTimeout : void 0, Dg = -1, lC = typeof Promise == "function" ? Promise : void 0, ob = typeof queueMicrotask == "function" ? queueMicrotask : typeof lC < "u" ? function(e) {
      return lC.resolve(null).then(e).catch(ub);
    } : Og;
    function ub(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function sb(e, t, i, l) {
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
    function cb(e, t, i, l, u, c) {
      Hw(e, t, i, l, u), Ug(e, u);
    }
    function oC(e) {
      wc(e, "");
    }
    function fb(e, t, i) {
      e.nodeValue = i;
    }
    function db(e, t) {
      e.appendChild(t);
    }
    function pb(e, t) {
      var i;
      e.nodeType === Hn ? (i = e.parentNode, i.insertBefore(t, e)) : (i = e, i.appendChild(t));
      var l = e._reactRootContainer;
      l == null && i.onclick === null && nm(i);
    }
    function vb(e, t, i) {
      e.insertBefore(t, i);
    }
    function hb(e, t, i) {
      e.nodeType === Hn ? e.parentNode.insertBefore(t, i) : e.insertBefore(t, i);
    }
    function mb(e, t) {
      e.removeChild(t);
    }
    function yb(e, t) {
      e.nodeType === Hn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ag(e, t) {
      var i = t, l = 0;
      do {
        var u = i.nextSibling;
        if (e.removeChild(i), u && u.nodeType === Hn) {
          var c = u.data;
          if (c === am)
            if (l === 0) {
              e.removeChild(u), kn(t);
              return;
            } else
              l--;
          else
            (c === im || c === Op || c === Dp) && l++;
        }
        i = u;
      } while (i);
      kn(t);
    }
    function gb(e, t) {
      e.nodeType === Hn ? Ag(e.parentNode, t) : e.nodeType === ri && Ag(e, t), kn(e);
    }
    function Sb(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Eb(e) {
      e.nodeValue = "";
    }
    function Cb(e, t) {
      e = e;
      var i = t[Gw], l = i != null && i.hasOwnProperty("display") ? i.display : null;
      e.style.display = bc("display", l);
    }
    function xb(e, t) {
      e.nodeValue = t;
    }
    function Tb(e) {
      e.nodeType === ri ? e.textContent = "" : e.nodeType === va && e.documentElement && e.removeChild(e.documentElement);
    }
    function Rb(e, t, i) {
      return e.nodeType !== ri || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function wb(e, t) {
      return t === "" || e.nodeType !== Ka ? null : e;
    }
    function bb(e) {
      return e.nodeType !== Hn ? null : e;
    }
    function uC(e) {
      return e.data === Op;
    }
    function Lg(e) {
      return e.data === Dp;
    }
    function _b(e) {
      var t = e.nextSibling && e.nextSibling.dataset, i, l, u;
      return t && (i = t.dgst, l = t.msg, u = t.stck), {
        message: l,
        digest: i,
        stack: u
      };
    }
    function kb(e, t) {
      e._reactRetry = t;
    }
    function lm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ri || t === Ka)
          break;
        if (t === Hn) {
          var i = e.data;
          if (i === im || i === Dp || i === Op)
            break;
          if (i === am)
            return null;
        }
      }
      return e;
    }
    function Ap(e) {
      return lm(e.nextSibling);
    }
    function Ob(e) {
      return lm(e.firstChild);
    }
    function Db(e) {
      return lm(e.firstChild);
    }
    function Ab(e) {
      return lm(e.nextSibling);
    }
    function Lb(e, t, i, l, u, c, v) {
      Np(c, e), Ug(e, i);
      var y;
      {
        var E = u;
        y = E.namespace;
      }
      var R = (c.mode & Me) !== Ae;
      return Bw(e, t, i, y, l, R, v);
    }
    function Nb(e, t, i, l) {
      return Np(i, e), i.mode & Me, Vw(e, t);
    }
    function Mb(e, t) {
      Np(t, e);
    }
    function Ub(e) {
      for (var t = e.nextSibling, i = 0; t; ) {
        if (t.nodeType === Hn) {
          var l = t.data;
          if (l === am) {
            if (i === 0)
              return Ap(t);
            i--;
          } else
            (l === im || l === Dp || l === Op) && i++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function sC(e) {
      for (var t = e.previousSibling, i = 0; t; ) {
        if (t.nodeType === Hn) {
          var l = t.data;
          if (l === im || l === Dp || l === Op) {
            if (i === 0)
              return t;
            i--;
          } else
            l === am && i++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Fb(e) {
      kn(e);
    }
    function zb(e) {
      kn(e);
    }
    function jb(e) {
      return e !== "head" && e !== "body";
    }
    function Hb(e, t, i, l) {
      var u = !0;
      tm(t.nodeValue, i, l, u);
    }
    function Pb(e, t, i, l, u, c) {
      if (t[rm] !== !0) {
        var v = !0;
        tm(l.nodeValue, u, c, v);
      }
    }
    function Bb(e, t) {
      t.nodeType === ri ? xg(e, t) : t.nodeType === Hn || Tg(e, t);
    }
    function Vb(e, t) {
      {
        var i = e.parentNode;
        i !== null && (t.nodeType === ri ? xg(i, t) : t.nodeType === Hn || Tg(i, t));
      }
    }
    function Ib(e, t, i, l, u) {
      (u || t[rm] !== !0) && (l.nodeType === ri ? xg(i, l) : l.nodeType === Hn || Tg(i, l));
    }
    function $b(e, t, i) {
      Rg(e, t);
    }
    function Yb(e, t) {
      wg(e, t);
    }
    function Wb(e, t, i) {
      {
        var l = e.parentNode;
        l !== null && Rg(l, t);
      }
    }
    function Qb(e, t) {
      {
        var i = e.parentNode;
        i !== null && wg(i, t);
      }
    }
    function qb(e, t, i, l, u, c) {
      (c || t[rm] !== !0) && Rg(i, l);
    }
    function Gb(e, t, i, l, u) {
      (u || t[rm] !== !0) && wg(i, l);
    }
    function Kb(e) {
      h("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Xb(e) {
      Tp(e);
    }
    var zf = Math.random().toString(36).slice(2), jf = "__reactFiber$" + zf, Ng = "__reactProps$" + zf, Lp = "__reactContainer$" + zf, Mg = "__reactEvents$" + zf, Jb = "__reactListeners$" + zf, Zb = "__reactHandles$" + zf;
    function e_(e) {
      delete e[jf], delete e[Ng], delete e[Mg], delete e[Jb], delete e[Zb];
    }
    function Np(e, t) {
      t[jf] = e;
    }
    function om(e, t) {
      t[Lp] = e;
    }
    function cC(e) {
      e[Lp] = null;
    }
    function Mp(e) {
      return !!e[Lp];
    }
    function tc(e) {
      var t = e[jf];
      if (t)
        return t;
      for (var i = e.parentNode; i; ) {
        if (t = i[Lp] || i[jf], t) {
          var l = t.alternate;
          if (t.child !== null || l !== null && l.child !== null)
            for (var u = sC(e); u !== null; ) {
              var c = u[jf];
              if (c)
                return c;
              u = sC(u);
            }
          return t;
        }
        e = i, i = e.parentNode;
      }
      return null;
    }
    function Wu(e) {
      var t = e[jf] || e[Lp];
      return t && (t.tag === q || t.tag === K || t.tag === He || t.tag === k) ? t : null;
    }
    function Hf(e) {
      if (e.tag === q || e.tag === K)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function um(e) {
      return e[Ng] || null;
    }
    function Ug(e, t) {
      e[Ng] = t;
    }
    function t_(e) {
      var t = e[Mg];
      return t === void 0 && (t = e[Mg] = /* @__PURE__ */ new Set()), t;
    }
    var fC = {}, dC = p.ReactDebugCurrentFrame;
    function sm(e) {
      if (e) {
        var t = e._owner, i = ba(e.type, e._source, t ? t.type : null);
        dC.setExtraStackFrame(i);
      } else
        dC.setExtraStackFrame(null);
    }
    function sl(e, t, i, l, u) {
      {
        var c = Function.call.bind(Xn);
        for (var v in e)
          if (c(e, v)) {
            var y = void 0;
            try {
              if (typeof e[v] != "function") {
                var E = Error((l || "React class") + ": " + i + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              y = e[v](t, v, l, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              y = R;
            }
            y && !(y instanceof Error) && (sm(u), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", i, v, typeof y), sm(null)), y instanceof Error && !(y.message in fC) && (fC[y.message] = !0, sm(u), h("Failed %s type: %s", i, y.message), sm(null));
          }
      }
    }
    var Fg = [], cm;
    cm = [];
    var Fo = -1;
    function Qu(e) {
      return {
        current: e
      };
    }
    function vi(e, t) {
      if (Fo < 0) {
        h("Unexpected pop.");
        return;
      }
      t !== cm[Fo] && h("Unexpected Fiber popped."), e.current = Fg[Fo], Fg[Fo] = null, cm[Fo] = null, Fo--;
    }
    function hi(e, t, i) {
      Fo++, Fg[Fo] = e.current, cm[Fo] = i, e.current = t;
    }
    var zg;
    zg = {};
    var ga = {};
    Object.freeze(ga);
    var zo = Qu(ga), ql = Qu(!1), jg = ga;
    function Pf(e, t, i) {
      return i && Gl(t) ? jg : zo.current;
    }
    function pC(e, t, i) {
      {
        var l = e.stateNode;
        l.__reactInternalMemoizedUnmaskedChildContext = t, l.__reactInternalMemoizedMaskedChildContext = i;
      }
    }
    function Bf(e, t) {
      {
        var i = e.type, l = i.contextTypes;
        if (!l)
          return ga;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var c = {};
        for (var v in l)
          c[v] = t[v];
        {
          var y = rt(e) || "Unknown";
          sl(l, c, "context", y);
        }
        return u && pC(e, t, c), c;
      }
    }
    function fm() {
      return ql.current;
    }
    function Gl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function dm(e) {
      vi(ql, e), vi(zo, e);
    }
    function Hg(e) {
      vi(ql, e), vi(zo, e);
    }
    function vC(e, t, i) {
      {
        if (zo.current !== ga)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        hi(zo, t, e), hi(ql, i, e);
      }
    }
    function hC(e, t, i) {
      {
        var l = e.stateNode, u = t.childContextTypes;
        if (typeof l.getChildContext != "function") {
          {
            var c = rt(e) || "Unknown";
            zg[c] || (zg[c] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", c, c));
          }
          return i;
        }
        var v = l.getChildContext();
        for (var y in v)
          if (!(y in u))
            throw new Error((rt(e) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var E = rt(e) || "Unknown";
          sl(u, v, "child context", E);
        }
        return vt({}, i, v);
      }
    }
    function pm(e) {
      {
        var t = e.stateNode, i = t && t.__reactInternalMemoizedMergedChildContext || ga;
        return jg = zo.current, hi(zo, i, e), hi(ql, ql.current, e), !0;
      }
    }
    function mC(e, t, i) {
      {
        var l = e.stateNode;
        if (!l)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (i) {
          var u = hC(e, t, jg);
          l.__reactInternalMemoizedMergedChildContext = u, vi(ql, e), vi(zo, e), hi(zo, u, e), hi(ql, i, e);
        } else
          vi(ql, e), hi(ql, i, e);
      }
    }
    function n_(e) {
      {
        if (!$d(e) || e.tag !== N)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case k:
              return t.stateNode.context;
            case N: {
              var i = t.type;
              if (Gl(i))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var qu = 0, vm = 1, jo = null, Pg = !1, Bg = !1;
    function yC(e) {
      jo === null ? jo = [e] : jo.push(e);
    }
    function r_(e) {
      Pg = !0, yC(e);
    }
    function gC() {
      Pg && Gu();
    }
    function Gu() {
      if (!Bg && jo !== null) {
        Bg = !0;
        var e = 0, t = Ki();
        try {
          var i = !0, l = jo;
          for (_n(Mn); e < l.length; e++) {
            var u = l[e];
            do
              u = u(i);
            while (u !== null);
          }
          jo = null, Pg = !1;
        } catch (c) {
          throw jo !== null && (jo = jo.slice(e + 1)), zc(Hc, Gu), c;
        } finally {
          _n(t), Bg = !1;
        }
      }
      return null;
    }
    var Vf = [], If = 0, hm = null, mm = 0, Ua = [], Fa = 0, nc = null, Ho = 1, Po = "";
    function i_(e) {
      return ic(), (e.flags & Bd) !== Pe;
    }
    function a_(e) {
      return ic(), mm;
    }
    function l_() {
      var e = Po, t = Ho, i = t & ~o_(t);
      return i.toString(32) + e;
    }
    function rc(e, t) {
      ic(), Vf[If++] = mm, Vf[If++] = hm, hm = e, mm = t;
    }
    function SC(e, t, i) {
      ic(), Ua[Fa++] = Ho, Ua[Fa++] = Po, Ua[Fa++] = nc, nc = e;
      var l = Ho, u = Po, c = ym(l) - 1, v = l & ~(1 << c), y = i + 1, E = ym(t) + c;
      if (E > 30) {
        var R = c - c % 5, w = (1 << R) - 1, F = (v & w).toString(32), M = v >> R, I = c - R, W = ym(t) + I, X = y << I, Ee = X | M, Ve = F + u;
        Ho = 1 << W | Ee, Po = Ve;
      } else {
        var Ue = y << c, Dt = Ue | v, Tt = u;
        Ho = 1 << E | Dt, Po = Tt;
      }
    }
    function Vg(e) {
      ic();
      var t = e.return;
      if (t !== null) {
        var i = 1, l = 0;
        rc(e, i), SC(e, i, l);
      }
    }
    function ym(e) {
      return 32 - Cu(e);
    }
    function o_(e) {
      return 1 << ym(e) - 1;
    }
    function Ig(e) {
      for (; e === hm; )
        hm = Vf[--If], Vf[If] = null, mm = Vf[--If], Vf[If] = null;
      for (; e === nc; )
        nc = Ua[--Fa], Ua[Fa] = null, Po = Ua[--Fa], Ua[Fa] = null, Ho = Ua[--Fa], Ua[Fa] = null;
    }
    function u_() {
      return ic(), nc !== null ? {
        id: Ho,
        overflow: Po
      } : null;
    }
    function s_(e, t) {
      ic(), Ua[Fa++] = Ho, Ua[Fa++] = Po, Ua[Fa++] = nc, Ho = t.id, Po = t.overflow, nc = e;
    }
    function ic() {
      Pr() || h("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Hr = null, za = null, cl = !1, ac = !1, Ku = null;
    function c_() {
      cl && h("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function EC() {
      ac = !0;
    }
    function f_() {
      return ac;
    }
    function d_(e) {
      var t = e.stateNode.containerInfo;
      return za = Db(t), Hr = e, cl = !0, Ku = null, ac = !1, !0;
    }
    function p_(e, t, i) {
      return za = Ab(t), Hr = e, cl = !0, Ku = null, ac = !1, i !== null && s_(e, i), !0;
    }
    function CC(e, t) {
      switch (e.tag) {
        case k: {
          Bb(e.stateNode.containerInfo, t);
          break;
        }
        case q: {
          var i = (e.mode & Me) !== Ae;
          Ib(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            i
          );
          break;
        }
        case He: {
          var l = e.memoizedState;
          l.dehydrated !== null && Vb(l.dehydrated, t);
          break;
        }
      }
    }
    function xC(e, t) {
      CC(e, t);
      var i = yD();
      i.stateNode = t, i.return = e;
      var l = e.deletions;
      l === null ? (e.deletions = [i], e.flags |= Bt) : l.push(i);
    }
    function $g(e, t) {
      {
        if (ac)
          return;
        switch (e.tag) {
          case k: {
            var i = e.stateNode.containerInfo;
            switch (t.tag) {
              case q:
                var l = t.type;
                t.pendingProps, $b(i, l);
                break;
              case K:
                var u = t.pendingProps;
                Yb(i, u);
                break;
            }
            break;
          }
          case q: {
            var c = e.type, v = e.memoizedProps, y = e.stateNode;
            switch (t.tag) {
              case q: {
                var E = t.type, R = t.pendingProps, w = (e.mode & Me) !== Ae;
                qb(
                  c,
                  v,
                  y,
                  E,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
              case K: {
                var F = t.pendingProps, M = (e.mode & Me) !== Ae;
                Gb(
                  c,
                  v,
                  y,
                  F,
                  // TODO: Delete this argument when we remove the legacy root API.
                  M
                );
                break;
              }
            }
            break;
          }
          case He: {
            var I = e.memoizedState, W = I.dehydrated;
            if (W !== null)
              switch (t.tag) {
                case q:
                  var X = t.type;
                  t.pendingProps, Wb(W, X);
                  break;
                case K:
                  var Ee = t.pendingProps;
                  Qb(W, Ee);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function TC(e, t) {
      t.flags = t.flags & ~$i | cn, $g(e, t);
    }
    function RC(e, t) {
      switch (e.tag) {
        case q: {
          var i = e.type;
          e.pendingProps;
          var l = Rb(t, i);
          return l !== null ? (e.stateNode = l, Hr = e, za = Ob(l), !0) : !1;
        }
        case K: {
          var u = e.pendingProps, c = wb(t, u);
          return c !== null ? (e.stateNode = c, Hr = e, za = null, !0) : !1;
        }
        case He: {
          var v = bb(t);
          if (v !== null) {
            var y = {
              dehydrated: v,
              treeContext: u_(),
              retryLane: kr
            };
            e.memoizedState = y;
            var E = gD(v);
            return E.return = e, e.child = E, Hr = e, za = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Yg(e) {
      return (e.mode & Me) !== Ae && (e.flags & tt) === Pe;
    }
    function Wg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Qg(e) {
      if (cl) {
        var t = za;
        if (!t) {
          Yg(e) && ($g(Hr, e), Wg()), TC(Hr, e), cl = !1, Hr = e;
          return;
        }
        var i = t;
        if (!RC(e, t)) {
          Yg(e) && ($g(Hr, e), Wg()), t = Ap(i);
          var l = Hr;
          if (!t || !RC(e, t)) {
            TC(Hr, e), cl = !1, Hr = e;
            return;
          }
          xC(l, i);
        }
      }
    }
    function v_(e, t, i) {
      var l = e.stateNode, u = !ac, c = Lb(l, e.type, e.memoizedProps, t, i, e, u);
      return e.updateQueue = c, c !== null;
    }
    function h_(e) {
      var t = e.stateNode, i = e.memoizedProps, l = Nb(t, i, e);
      if (l) {
        var u = Hr;
        if (u !== null)
          switch (u.tag) {
            case k: {
              var c = u.stateNode.containerInfo, v = (u.mode & Me) !== Ae;
              Hb(
                c,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case q: {
              var y = u.type, E = u.memoizedProps, R = u.stateNode, w = (u.mode & Me) !== Ae;
              Pb(
                y,
                E,
                R,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                w
              );
              break;
            }
          }
      }
      return l;
    }
    function m_(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Mb(i, e);
    }
    function y_(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Ub(i);
    }
    function wC(e) {
      for (var t = e.return; t !== null && t.tag !== q && t.tag !== k && t.tag !== He; )
        t = t.return;
      Hr = t;
    }
    function gm(e) {
      if (e !== Hr)
        return !1;
      if (!cl)
        return wC(e), cl = !0, !1;
      if (e.tag !== k && (e.tag !== q || jb(e.type) && !kg(e.type, e.memoizedProps))) {
        var t = za;
        if (t)
          if (Yg(e))
            bC(e), Wg();
          else
            for (; t; )
              xC(e, t), t = Ap(t);
      }
      return wC(e), e.tag === He ? za = y_(e) : za = Hr ? Ap(e.stateNode) : null, !0;
    }
    function g_() {
      return cl && za !== null;
    }
    function bC(e) {
      for (var t = za; t; )
        CC(e, t), t = Ap(t);
    }
    function $f() {
      Hr = null, za = null, cl = !1, ac = !1;
    }
    function _C() {
      Ku !== null && (Ex(Ku), Ku = null);
    }
    function Pr() {
      return cl;
    }
    function qg(e) {
      Ku === null ? Ku = [e] : Ku.push(e);
    }
    var S_ = p.ReactCurrentBatchConfig, E_ = null;
    function C_() {
      return S_.transition;
    }
    var fl = {
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
      var x_ = function(e) {
        for (var t = null, i = e; i !== null; )
          i.mode & Et && (t = i), i = i.return;
        return t;
      }, lc = function(e) {
        var t = [];
        return e.forEach(function(i) {
          t.push(i);
        }), t.sort().join(", ");
      }, Up = [], Fp = [], zp = [], jp = [], Hp = [], Pp = [], oc = /* @__PURE__ */ new Set();
      fl.recordUnsafeLifecycleWarnings = function(e, t) {
        oc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Up.push(e), e.mode & Et && typeof t.UNSAFE_componentWillMount == "function" && Fp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && zp.push(e), e.mode & Et && typeof t.UNSAFE_componentWillReceiveProps == "function" && jp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Hp.push(e), e.mode & Et && typeof t.UNSAFE_componentWillUpdate == "function" && Pp.push(e));
      }, fl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Up.length > 0 && (Up.forEach(function(M) {
          e.add(rt(M) || "Component"), oc.add(M.type);
        }), Up = []);
        var t = /* @__PURE__ */ new Set();
        Fp.length > 0 && (Fp.forEach(function(M) {
          t.add(rt(M) || "Component"), oc.add(M.type);
        }), Fp = []);
        var i = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(M) {
          i.add(rt(M) || "Component"), oc.add(M.type);
        }), zp = []);
        var l = /* @__PURE__ */ new Set();
        jp.length > 0 && (jp.forEach(function(M) {
          l.add(rt(M) || "Component"), oc.add(M.type);
        }), jp = []);
        var u = /* @__PURE__ */ new Set();
        Hp.length > 0 && (Hp.forEach(function(M) {
          u.add(rt(M) || "Component"), oc.add(M.type);
        }), Hp = []);
        var c = /* @__PURE__ */ new Set();
        if (Pp.length > 0 && (Pp.forEach(function(M) {
          c.add(rt(M) || "Component"), oc.add(M.type);
        }), Pp = []), t.size > 0) {
          var v = lc(t);
          h(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (l.size > 0) {
          var y = lc(l);
          h(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, y);
        }
        if (c.size > 0) {
          var E = lc(c);
          h(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, E);
        }
        if (e.size > 0) {
          var R = lc(e);
          T(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (i.size > 0) {
          var w = lc(i);
          T(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
        if (u.size > 0) {
          var F = lc(u);
          T(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, F);
        }
      };
      var Sm = /* @__PURE__ */ new Map(), kC = /* @__PURE__ */ new Set();
      fl.recordLegacyContextWarning = function(e, t) {
        var i = x_(e);
        if (i === null) {
          h("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!kC.has(e.type)) {
          var l = Sm.get(i);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (l === void 0 && (l = [], Sm.set(i, l)), l.push(e));
        }
      }, fl.flushLegacyContextWarning = function() {
        Sm.forEach(function(e, t) {
          if (e.length !== 0) {
            var i = e[0], l = /* @__PURE__ */ new Set();
            e.forEach(function(c) {
              l.add(rt(c) || "Component"), kC.add(c.type);
            });
            var u = lc(l);
            try {
              Wt(i), h(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              wn();
            }
          }
        });
      }, fl.discardPendingWarnings = function() {
        Up = [], Fp = [], zp = [], jp = [], Hp = [], Pp = [], Sm = /* @__PURE__ */ new Map();
      };
    }
    var Gg, Kg, Xg, Jg, Zg, OC = function(e, t) {
    };
    Gg = !1, Kg = !1, Xg = {}, Jg = {}, Zg = {}, OC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var i = rt(t) || "Component";
        Jg[i] || (Jg[i] = !0, h('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function T_(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Bp(e, t, i) {
      var l = i.ref;
      if (l !== null && typeof l != "function" && typeof l != "object") {
        if ((e.mode & Et || Ze) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(i._owner && i._self && i._owner.stateNode !== i._self) && // Will already throw with "Function components cannot have string refs"
        !(i._owner && i._owner.tag !== N) && // Will already warn with "Function components cannot be given refs"
        !(typeof i.type == "function" && !T_(i.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        i._owner) {
          var u = rt(e) || "Component";
          Xg[u] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, l), Xg[u] = !0);
        }
        if (i._owner) {
          var c = i._owner, v;
          if (c) {
            var y = c;
            if (y.tag !== N)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = y.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + l + ". This error is likely caused by a bug in React. Please file an issue.");
          var E = v;
          Jn(l, "ref");
          var R = "" + l;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === R)
            return t.ref;
          var w = function(F) {
            var M = E.refs;
            F === null ? delete M[R] : M[R] = F;
          };
          return w._stringRef = R, w;
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
    function Em(e, t) {
      var i = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Cm(e) {
      {
        var t = rt(e) || "Component";
        if (Zg[t])
          return;
        Zg[t] = !0, h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function DC(e) {
      var t = e._payload, i = e._init;
      return i(t);
    }
    function AC(e) {
      function t(H, J) {
        if (e) {
          var P = H.deletions;
          P === null ? (H.deletions = [J], H.flags |= Bt) : P.push(J);
        }
      }
      function i(H, J) {
        if (!e)
          return null;
        for (var P = J; P !== null; )
          t(H, P), P = P.sibling;
        return null;
      }
      function l(H, J) {
        for (var P = /* @__PURE__ */ new Map(), ue = J; ue !== null; )
          ue.key !== null ? P.set(ue.key, ue) : P.set(ue.index, ue), ue = ue.sibling;
        return P;
      }
      function u(H, J) {
        var P = mc(H, J);
        return P.index = 0, P.sibling = null, P;
      }
      function c(H, J, P) {
        if (H.index = P, !e)
          return H.flags |= Bd, J;
        var ue = H.alternate;
        if (ue !== null) {
          var Re = ue.index;
          return Re < J ? (H.flags |= cn, J) : Re;
        } else
          return H.flags |= cn, J;
      }
      function v(H) {
        return e && H.alternate === null && (H.flags |= cn), H;
      }
      function y(H, J, P, ue) {
        if (J === null || J.tag !== K) {
          var Re = qS(P, H.mode, ue);
          return Re.return = H, Re;
        } else {
          var Ce = u(J, P);
          return Ce.return = H, Ce;
        }
      }
      function E(H, J, P, ue) {
        var Re = P.type;
        if (Re === Ri)
          return w(H, J, P.props.children, ue, P.key);
        if (J !== null && (J.elementType === Re || // Keep this check inline so it only runs on the false path:
        Fx(J, P) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Re == "object" && Re !== null && Re.$$typeof === Qe && DC(Re) === J.type)) {
          var Ce = u(J, P.props);
          return Ce.ref = Bp(H, J, P), Ce.return = H, Ce._debugSource = P._source, Ce._debugOwner = P._owner, Ce;
        }
        var et = QS(P, H.mode, ue);
        return et.ref = Bp(H, J, P), et.return = H, et;
      }
      function R(H, J, P, ue) {
        if (J === null || J.tag !== Q || J.stateNode.containerInfo !== P.containerInfo || J.stateNode.implementation !== P.implementation) {
          var Re = GS(P, H.mode, ue);
          return Re.return = H, Re;
        } else {
          var Ce = u(J, P.children || []);
          return Ce.return = H, Ce;
        }
      }
      function w(H, J, P, ue, Re) {
        if (J === null || J.tag !== ne) {
          var Ce = os(P, H.mode, ue, Re);
          return Ce.return = H, Ce;
        } else {
          var et = u(J, P);
          return et.return = H, et;
        }
      }
      function F(H, J, P) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var ue = qS("" + J, H.mode, P);
          return ue.return = H, ue;
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case ca: {
              var Re = QS(J, H.mode, P);
              return Re.ref = Bp(H, null, J), Re.return = H, Re;
            }
            case Nr: {
              var Ce = GS(J, H.mode, P);
              return Ce.return = H, Ce;
            }
            case Qe: {
              var et = J._payload, at = J._init;
              return F(H, at(et), P);
            }
          }
          if (_t(J) || Mr(J)) {
            var Zt = os(J, H.mode, P, null);
            return Zt.return = H, Zt;
          }
          Em(H, J);
        }
        return typeof J == "function" && Cm(H), null;
      }
      function M(H, J, P, ue) {
        var Re = J !== null ? J.key : null;
        if (typeof P == "string" && P !== "" || typeof P == "number")
          return Re !== null ? null : y(H, J, "" + P, ue);
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case ca:
              return P.key === Re ? E(H, J, P, ue) : null;
            case Nr:
              return P.key === Re ? R(H, J, P, ue) : null;
            case Qe: {
              var Ce = P._payload, et = P._init;
              return M(H, J, et(Ce), ue);
            }
          }
          if (_t(P) || Mr(P))
            return Re !== null ? null : w(H, J, P, ue, null);
          Em(H, P);
        }
        return typeof P == "function" && Cm(H), null;
      }
      function I(H, J, P, ue, Re) {
        if (typeof ue == "string" && ue !== "" || typeof ue == "number") {
          var Ce = H.get(P) || null;
          return y(J, Ce, "" + ue, Re);
        }
        if (typeof ue == "object" && ue !== null) {
          switch (ue.$$typeof) {
            case ca: {
              var et = H.get(ue.key === null ? P : ue.key) || null;
              return E(J, et, ue, Re);
            }
            case Nr: {
              var at = H.get(ue.key === null ? P : ue.key) || null;
              return R(J, at, ue, Re);
            }
            case Qe:
              var Zt = ue._payload, zt = ue._init;
              return I(H, J, P, zt(Zt), Re);
          }
          if (_t(ue) || Mr(ue)) {
            var Gn = H.get(P) || null;
            return w(J, Gn, ue, Re, null);
          }
          Em(J, ue);
        }
        return typeof ue == "function" && Cm(J), null;
      }
      function W(H, J, P) {
        {
          if (typeof H != "object" || H === null)
            return J;
          switch (H.$$typeof) {
            case ca:
            case Nr:
              OC(H, P);
              var ue = H.key;
              if (typeof ue != "string")
                break;
              if (J === null) {
                J = /* @__PURE__ */ new Set(), J.add(ue);
                break;
              }
              if (!J.has(ue)) {
                J.add(ue);
                break;
              }
              h("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ue);
              break;
            case Qe:
              var Re = H._payload, Ce = H._init;
              W(Ce(Re), J, P);
              break;
          }
        }
        return J;
      }
      function X(H, J, P, ue) {
        for (var Re = null, Ce = 0; Ce < P.length; Ce++) {
          var et = P[Ce];
          Re = W(et, Re, H);
        }
        for (var at = null, Zt = null, zt = J, Gn = 0, jt = 0, Vn = null; zt !== null && jt < P.length; jt++) {
          zt.index > jt ? (Vn = zt, zt = null) : Vn = zt.sibling;
          var yi = M(H, zt, P[jt], ue);
          if (yi === null) {
            zt === null && (zt = Vn);
            break;
          }
          e && zt && yi.alternate === null && t(H, zt), Gn = c(yi, Gn, jt), Zt === null ? at = yi : Zt.sibling = yi, Zt = yi, zt = Vn;
        }
        if (jt === P.length) {
          if (i(H, zt), Pr()) {
            var Qr = jt;
            rc(H, Qr);
          }
          return at;
        }
        if (zt === null) {
          for (; jt < P.length; jt++) {
            var Ea = F(H, P[jt], ue);
            Ea !== null && (Gn = c(Ea, Gn, jt), Zt === null ? at = Ea : Zt.sibling = Ea, Zt = Ea);
          }
          if (Pr()) {
            var Mi = jt;
            rc(H, Mi);
          }
          return at;
        }
        for (var Ui = l(H, zt); jt < P.length; jt++) {
          var gi = I(Ui, H, jt, P[jt], ue);
          gi !== null && (e && gi.alternate !== null && Ui.delete(gi.key === null ? jt : gi.key), Gn = c(gi, Gn, jt), Zt === null ? at = gi : Zt.sibling = gi, Zt = gi);
        }
        if (e && Ui.forEach(function(sd) {
          return t(H, sd);
        }), Pr()) {
          var Qo = jt;
          rc(H, Qo);
        }
        return at;
      }
      function Ee(H, J, P, ue) {
        var Re = Mr(P);
        if (typeof Re != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          P[Symbol.toStringTag] === "Generator" && (Kg || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Kg = !0), P.entries === Re && (Gg || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Gg = !0);
          var Ce = Re.call(P);
          if (Ce)
            for (var et = null, at = Ce.next(); !at.done; at = Ce.next()) {
              var Zt = at.value;
              et = W(Zt, et, H);
            }
        }
        var zt = Re.call(P);
        if (zt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, jt = null, Vn = J, yi = 0, Qr = 0, Ea = null, Mi = zt.next(); Vn !== null && !Mi.done; Qr++, Mi = zt.next()) {
          Vn.index > Qr ? (Ea = Vn, Vn = null) : Ea = Vn.sibling;
          var Ui = M(H, Vn, Mi.value, ue);
          if (Ui === null) {
            Vn === null && (Vn = Ea);
            break;
          }
          e && Vn && Ui.alternate === null && t(H, Vn), yi = c(Ui, yi, Qr), jt === null ? Gn = Ui : jt.sibling = Ui, jt = Ui, Vn = Ea;
        }
        if (Mi.done) {
          if (i(H, Vn), Pr()) {
            var gi = Qr;
            rc(H, gi);
          }
          return Gn;
        }
        if (Vn === null) {
          for (; !Mi.done; Qr++, Mi = zt.next()) {
            var Qo = F(H, Mi.value, ue);
            Qo !== null && (yi = c(Qo, yi, Qr), jt === null ? Gn = Qo : jt.sibling = Qo, jt = Qo);
          }
          if (Pr()) {
            var sd = Qr;
            rc(H, sd);
          }
          return Gn;
        }
        for (var Sv = l(H, Vn); !Mi.done; Qr++, Mi = zt.next()) {
          var ro = I(Sv, H, Qr, Mi.value, ue);
          ro !== null && (e && ro.alternate !== null && Sv.delete(ro.key === null ? Qr : ro.key), yi = c(ro, yi, Qr), jt === null ? Gn = ro : jt.sibling = ro, jt = ro);
        }
        if (e && Sv.forEach(function(GD) {
          return t(H, GD);
        }), Pr()) {
          var qD = Qr;
          rc(H, qD);
        }
        return Gn;
      }
      function Ve(H, J, P, ue) {
        if (J !== null && J.tag === K) {
          i(H, J.sibling);
          var Re = u(J, P);
          return Re.return = H, Re;
        }
        i(H, J);
        var Ce = qS(P, H.mode, ue);
        return Ce.return = H, Ce;
      }
      function Ue(H, J, P, ue) {
        for (var Re = P.key, Ce = J; Ce !== null; ) {
          if (Ce.key === Re) {
            var et = P.type;
            if (et === Ri) {
              if (Ce.tag === ne) {
                i(H, Ce.sibling);
                var at = u(Ce, P.props.children);
                return at.return = H, at._debugSource = P._source, at._debugOwner = P._owner, at;
              }
            } else if (Ce.elementType === et || // Keep this check inline so it only runs on the false path:
            Fx(Ce, P) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof et == "object" && et !== null && et.$$typeof === Qe && DC(et) === Ce.type) {
              i(H, Ce.sibling);
              var Zt = u(Ce, P.props);
              return Zt.ref = Bp(H, Ce, P), Zt.return = H, Zt._debugSource = P._source, Zt._debugOwner = P._owner, Zt;
            }
            i(H, Ce);
            break;
          } else
            t(H, Ce);
          Ce = Ce.sibling;
        }
        if (P.type === Ri) {
          var zt = os(P.props.children, H.mode, ue, P.key);
          return zt.return = H, zt;
        } else {
          var Gn = QS(P, H.mode, ue);
          return Gn.ref = Bp(H, J, P), Gn.return = H, Gn;
        }
      }
      function Dt(H, J, P, ue) {
        for (var Re = P.key, Ce = J; Ce !== null; ) {
          if (Ce.key === Re)
            if (Ce.tag === Q && Ce.stateNode.containerInfo === P.containerInfo && Ce.stateNode.implementation === P.implementation) {
              i(H, Ce.sibling);
              var et = u(Ce, P.children || []);
              return et.return = H, et;
            } else {
              i(H, Ce);
              break;
            }
          else
            t(H, Ce);
          Ce = Ce.sibling;
        }
        var at = GS(P, H.mode, ue);
        return at.return = H, at;
      }
      function Tt(H, J, P, ue) {
        var Re = typeof P == "object" && P !== null && P.type === Ri && P.key === null;
        if (Re && (P = P.props.children), typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case ca:
              return v(Ue(H, J, P, ue));
            case Nr:
              return v(Dt(H, J, P, ue));
            case Qe:
              var Ce = P._payload, et = P._init;
              return Tt(H, J, et(Ce), ue);
          }
          if (_t(P))
            return X(H, J, P, ue);
          if (Mr(P))
            return Ee(H, J, P, ue);
          Em(H, P);
        }
        return typeof P == "string" && P !== "" || typeof P == "number" ? v(Ve(H, J, "" + P, ue)) : (typeof P == "function" && Cm(H), i(H, J));
      }
      return Tt;
    }
    var Yf = AC(!0), LC = AC(!1);
    function R_(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var i = t.child, l = mc(i, i.pendingProps);
        for (t.child = l, l.return = t; i.sibling !== null; )
          i = i.sibling, l = l.sibling = mc(i, i.pendingProps), l.return = t;
        l.sibling = null;
      }
    }
    function w_(e, t) {
      for (var i = e.child; i !== null; )
        dD(i, t), i = i.sibling;
    }
    var e0 = Qu(null), t0;
    t0 = {};
    var xm = null, Wf = null, n0 = null, Tm = !1;
    function Rm() {
      xm = null, Wf = null, n0 = null, Tm = !1;
    }
    function NC() {
      Tm = !0;
    }
    function MC() {
      Tm = !1;
    }
    function UC(e, t, i) {
      hi(e0, t._currentValue, e), t._currentValue = i, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== t0 && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = t0;
    }
    function r0(e, t) {
      var i = e0.current;
      vi(e0, t), e._currentValue = i;
    }
    function i0(e, t, i) {
      for (var l = e; l !== null; ) {
        var u = l.alternate;
        if (ko(l.childLanes, t) ? u !== null && !ko(u.childLanes, t) && (u.childLanes = lt(u.childLanes, t)) : (l.childLanes = lt(l.childLanes, t), u !== null && (u.childLanes = lt(u.childLanes, t))), l === i)
          break;
        l = l.return;
      }
      l !== i && h("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function b_(e, t, i) {
      __(e, t, i);
    }
    function __(e, t, i) {
      var l = e.child;
      for (l !== null && (l.return = e); l !== null; ) {
        var u = void 0, c = l.dependencies;
        if (c !== null) {
          u = l.child;
          for (var v = c.firstContext; v !== null; ) {
            if (v.context === t) {
              if (l.tag === N) {
                var y = ku(i), E = Bo(on, y);
                E.tag = bm;
                var R = l.updateQueue;
                if (R !== null) {
                  var w = R.shared, F = w.pending;
                  F === null ? E.next = E : (E.next = F.next, F.next = E), w.pending = E;
                }
              }
              l.lanes = lt(l.lanes, i);
              var M = l.alternate;
              M !== null && (M.lanes = lt(M.lanes, i)), i0(l.return, i, e), c.lanes = lt(c.lanes, i);
              break;
            }
            v = v.next;
          }
        } else if (l.tag === ve)
          u = l.type === e.type ? null : l.child;
        else if (l.tag === Xt) {
          var I = l.return;
          if (I === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          I.lanes = lt(I.lanes, i);
          var W = I.alternate;
          W !== null && (W.lanes = lt(W.lanes, i)), i0(I, i, e), u = l.sibling;
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
            var X = u.sibling;
            if (X !== null) {
              X.return = u.return, u = X;
              break;
            }
            u = u.return;
          }
        l = u;
      }
    }
    function Qf(e, t) {
      xm = e, Wf = null, n0 = null;
      var i = e.dependencies;
      if (i !== null) {
        var l = i.firstContext;
        l !== null && (di(i.lanes, t) && nv(), i.firstContext = null);
      }
    }
    function lr(e) {
      Tm && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (n0 !== e) {
        var i = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Wf === null) {
          if (xm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Wf = i, xm.dependencies = {
            lanes: re,
            firstContext: i
          };
        } else
          Wf = Wf.next = i;
      }
      return t;
    }
    var uc = null;
    function a0(e) {
      uc === null ? uc = [e] : uc.push(e);
    }
    function k_() {
      if (uc !== null) {
        for (var e = 0; e < uc.length; e++) {
          var t = uc[e], i = t.interleaved;
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
        uc = null;
      }
    }
    function FC(e, t, i, l) {
      var u = t.interleaved;
      return u === null ? (i.next = i, a0(t)) : (i.next = u.next, u.next = i), t.interleaved = i, wm(e, l);
    }
    function O_(e, t, i, l) {
      var u = t.interleaved;
      u === null ? (i.next = i, a0(t)) : (i.next = u.next, u.next = i), t.interleaved = i;
    }
    function D_(e, t, i, l) {
      var u = t.interleaved;
      return u === null ? (i.next = i, a0(t)) : (i.next = u.next, u.next = i), t.interleaved = i, wm(e, l);
    }
    function na(e, t) {
      return wm(e, t);
    }
    var A_ = wm;
    function wm(e, t) {
      e.lanes = lt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = lt(i.lanes, t)), i === null && (e.flags & (cn | $i)) !== Pe && Lx(e);
      for (var l = e, u = e.return; u !== null; )
        u.childLanes = lt(u.childLanes, t), i = u.alternate, i !== null ? i.childLanes = lt(i.childLanes, t) : (u.flags & (cn | $i)) !== Pe && Lx(e), l = u, u = u.return;
      if (l.tag === k) {
        var c = l.stateNode;
        return c;
      } else
        return null;
    }
    var zC = 0, jC = 1, bm = 2, l0 = 3, _m = !1, o0, km;
    o0 = !1, km = null;
    function u0(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: re
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function HC(e, t) {
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
    function Bo(e, t) {
      var i = {
        eventTime: e,
        lane: t,
        tag: zC,
        payload: null,
        callback: null,
        next: null
      };
      return i;
    }
    function Xu(e, t, i) {
      var l = e.updateQueue;
      if (l === null)
        return null;
      var u = l.shared;
      if (km === u && !o0 && (h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), o0 = !0), OO()) {
        var c = u.pending;
        return c === null ? t.next = t : (t.next = c.next, c.next = t), u.pending = t, A_(e, i);
      } else
        return D_(e, u, t, i);
    }
    function Om(e, t, i) {
      var l = t.updateQueue;
      if (l !== null) {
        var u = l.shared;
        if (np(i)) {
          var c = u.lanes;
          c = cf(c, e.pendingLanes);
          var v = lt(c, i);
          u.lanes = v, rp(e, v);
        }
      }
    }
    function s0(e, t) {
      var i = e.updateQueue, l = e.alternate;
      if (l !== null) {
        var u = l.updateQueue;
        if (i === u) {
          var c = null, v = null, y = i.firstBaseUpdate;
          if (y !== null) {
            var E = y;
            do {
              var R = {
                eventTime: E.eventTime,
                lane: E.lane,
                tag: E.tag,
                payload: E.payload,
                callback: E.callback,
                next: null
              };
              v === null ? c = v = R : (v.next = R, v = R), E = E.next;
            } while (E !== null);
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
      var w = i.lastBaseUpdate;
      w === null ? i.firstBaseUpdate = t : w.next = t, i.lastBaseUpdate = t;
    }
    function L_(e, t, i, l, u, c) {
      switch (i.tag) {
        case jC: {
          var v = i.payload;
          if (typeof v == "function") {
            NC();
            var y = v.call(c, l, u);
            {
              if (e.mode & Et) {
                Pn(!0);
                try {
                  v.call(c, l, u);
                } finally {
                  Pn(!1);
                }
              }
              MC();
            }
            return y;
          }
          return v;
        }
        case l0:
          e.flags = e.flags & ~nr | tt;
        case zC: {
          var E = i.payload, R;
          if (typeof E == "function") {
            NC(), R = E.call(c, l, u);
            {
              if (e.mode & Et) {
                Pn(!0);
                try {
                  E.call(c, l, u);
                } finally {
                  Pn(!1);
                }
              }
              MC();
            }
          } else
            R = E;
          return R == null ? l : vt({}, l, R);
        }
        case bm:
          return _m = !0, l;
      }
      return l;
    }
    function Dm(e, t, i, l) {
      var u = e.updateQueue;
      _m = !1, km = u.shared;
      var c = u.firstBaseUpdate, v = u.lastBaseUpdate, y = u.shared.pending;
      if (y !== null) {
        u.shared.pending = null;
        var E = y, R = E.next;
        E.next = null, v === null ? c = R : v.next = R, v = E;
        var w = e.alternate;
        if (w !== null) {
          var F = w.updateQueue, M = F.lastBaseUpdate;
          M !== v && (M === null ? F.firstBaseUpdate = R : M.next = R, F.lastBaseUpdate = E);
        }
      }
      if (c !== null) {
        var I = u.baseState, W = re, X = null, Ee = null, Ve = null, Ue = c;
        do {
          var Dt = Ue.lane, Tt = Ue.eventTime;
          if (ko(l, Dt)) {
            if (Ve !== null) {
              var J = {
                eventTime: Tt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Bn,
                tag: Ue.tag,
                payload: Ue.payload,
                callback: Ue.callback,
                next: null
              };
              Ve = Ve.next = J;
            }
            I = L_(e, u, Ue, I, t, i);
            var P = Ue.callback;
            if (P !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ue.lane !== Bn) {
              e.flags |= Oa;
              var ue = u.effects;
              ue === null ? u.effects = [Ue] : ue.push(Ue);
            }
          } else {
            var H = {
              eventTime: Tt,
              lane: Dt,
              tag: Ue.tag,
              payload: Ue.payload,
              callback: Ue.callback,
              next: null
            };
            Ve === null ? (Ee = Ve = H, X = I) : Ve = Ve.next = H, W = lt(W, Dt);
          }
          if (Ue = Ue.next, Ue === null) {
            if (y = u.shared.pending, y === null)
              break;
            var Re = y, Ce = Re.next;
            Re.next = null, Ue = Ce, u.lastBaseUpdate = Re, u.shared.pending = null;
          }
        } while (!0);
        Ve === null && (X = I), u.baseState = X, u.firstBaseUpdate = Ee, u.lastBaseUpdate = Ve;
        var et = u.shared.interleaved;
        if (et !== null) {
          var at = et;
          do
            W = lt(W, at.lane), at = at.next;
          while (at !== et);
        } else
          c === null && (u.shared.lanes = re);
        vv(W), e.lanes = W, e.memoizedState = I;
      }
      km = null;
    }
    function N_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function PC() {
      _m = !1;
    }
    function Am() {
      return _m;
    }
    function BC(e, t, i) {
      var l = t.effects;
      if (t.effects = null, l !== null)
        for (var u = 0; u < l.length; u++) {
          var c = l[u], v = c.callback;
          v !== null && (c.callback = null, N_(v, i));
        }
    }
    var Vp = {}, Ju = Qu(Vp), Ip = Qu(Vp), Lm = Qu(Vp);
    function Nm(e) {
      if (e === Vp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function VC() {
      var e = Nm(Lm.current);
      return e;
    }
    function c0(e, t) {
      hi(Lm, t, e), hi(Ip, e, e), hi(Ju, Vp, e);
      var i = Kw(t);
      vi(Ju, e), hi(Ju, i, e);
    }
    function qf(e) {
      vi(Ju, e), vi(Ip, e), vi(Lm, e);
    }
    function f0() {
      var e = Nm(Ju.current);
      return e;
    }
    function IC(e) {
      Nm(Lm.current);
      var t = Nm(Ju.current), i = Xw(t, e.type);
      t !== i && (hi(Ip, e, e), hi(Ju, i, e));
    }
    function d0(e) {
      Ip.current === e && (vi(Ju, e), vi(Ip, e));
    }
    var M_ = 0, $C = 1, YC = 1, $p = 2, dl = Qu(M_);
    function p0(e, t) {
      return (e & t) !== 0;
    }
    function Gf(e) {
      return e & $C;
    }
    function v0(e, t) {
      return e & $C | t;
    }
    function U_(e, t) {
      return e | t;
    }
    function Zu(e, t) {
      hi(dl, t, e);
    }
    function Kf(e) {
      vi(dl, e);
    }
    function F_(e, t) {
      var i = e.memoizedState;
      return i !== null ? i.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Mm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === He) {
          var i = t.memoizedState;
          if (i !== null) {
            var l = i.dehydrated;
            if (l === null || uC(l) || Lg(l))
              return t;
          }
        } else if (t.tag === Nt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & tt) !== Pe;
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
    var ra = (
      /*   */
      0
    ), dr = (
      /* */
      1
    ), Kl = (
      /*  */
      2
    ), pr = (
      /*    */
      4
    ), Br = (
      /*   */
      8
    ), h0 = [];
    function m0() {
      for (var e = 0; e < h0.length; e++) {
        var t = h0[e];
        t._workInProgressVersionPrimary = null;
      }
      h0.length = 0;
    }
    function z_(e, t) {
      var i = t._getVersion, l = i(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, l] : e.mutableSourceEagerHydrationData.push(t, l);
    }
    var Te = p.ReactCurrentDispatcher, Yp = p.ReactCurrentBatchConfig, y0, Xf;
    y0 = /* @__PURE__ */ new Set();
    var sc = re, Jt = null, vr = null, hr = null, Um = !1, Wp = !1, Qp = 0, j_ = 0, H_ = 25, ee = null, ja = null, es = -1, g0 = !1;
    function qt() {
      {
        var e = ee;
        ja === null ? ja = [e] : ja.push(e);
      }
    }
    function me() {
      {
        var e = ee;
        ja !== null && (es++, ja[es] !== e && P_(e));
      }
    }
    function Jf(e) {
      e != null && !_t(e) && h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ee, typeof e);
    }
    function P_(e) {
      {
        var t = rt(Jt);
        if (!y0.has(t) && (y0.add(t), ja !== null)) {
          for (var i = "", l = 30, u = 0; u <= es; u++) {
            for (var c = ja[u], v = u === es ? e : c, y = u + 1 + ". " + c; y.length < l; )
              y += " ";
            y += v + `
`, i += y;
          }
          h(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, i);
        }
      }
    }
    function mi() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function S0(e, t) {
      if (g0)
        return !1;
      if (t === null)
        return h("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ee), !1;
      e.length !== t.length && h(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ee, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var i = 0; i < t.length && i < e.length; i++)
        if (!ke(e[i], t[i]))
          return !1;
      return !0;
    }
    function Zf(e, t, i, l, u, c) {
      sc = c, Jt = t, ja = e !== null ? e._debugHookTypes : null, es = -1, g0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = re, e !== null && e.memoizedState !== null ? Te.current = p1 : ja !== null ? Te.current = d1 : Te.current = f1;
      var v = i(l, u);
      if (Wp) {
        var y = 0;
        do {
          if (Wp = !1, Qp = 0, y >= H_)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, g0 = !1, vr = null, hr = null, t.updateQueue = null, es = -1, Te.current = v1, v = i(l, u);
        } while (Wp);
      }
      Te.current = qm, t._debugHookTypes = ja;
      var E = vr !== null && vr.next !== null;
      if (sc = re, Jt = null, vr = null, hr = null, ee = null, ja = null, es = -1, e !== null && (e.flags & sr) !== (t.flags & sr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Me) !== Ae && h("Internal React error: Expected static flag was missing. Please notify the React team."), Um = !1, E)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function ed() {
      var e = Qp !== 0;
      return Qp = 0, e;
    }
    function WC(e, t, i) {
      t.updateQueue = e.updateQueue, (t.mode & Oi) !== Ae ? t.flags &= ~(So | li | vn | st) : t.flags &= ~(vn | st), e.lanes = Ps(e.lanes, i);
    }
    function QC() {
      if (Te.current = qm, Um) {
        for (var e = Jt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Um = !1;
      }
      sc = re, Jt = null, vr = null, hr = null, ja = null, es = -1, ee = null, l1 = !1, Wp = !1, Qp = 0;
    }
    function Xl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return hr === null ? Jt.memoizedState = hr = e : hr = hr.next = e, hr;
    }
    function Ha() {
      var e;
      if (vr === null) {
        var t = Jt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = vr.next;
      var i;
      if (hr === null ? i = Jt.memoizedState : i = hr.next, i !== null)
        hr = i, i = hr.next, vr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        vr = e;
        var l = {
          memoizedState: vr.memoizedState,
          baseState: vr.baseState,
          baseQueue: vr.baseQueue,
          queue: vr.queue,
          next: null
        };
        hr === null ? Jt.memoizedState = hr = l : hr = hr.next = l;
      }
      return hr;
    }
    function qC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function E0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function C0(e, t, i) {
      var l = Xl(), u;
      i !== void 0 ? u = i(t) : u = t, l.memoizedState = l.baseState = u;
      var c = {
        pending: null,
        interleaved: null,
        lanes: re,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      l.queue = c;
      var v = c.dispatch = $_.bind(null, Jt, c);
      return [l.memoizedState, v];
    }
    function x0(e, t, i) {
      var l = Ha(), u = l.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var c = vr, v = c.baseQueue, y = u.pending;
      if (y !== null) {
        if (v !== null) {
          var E = v.next, R = y.next;
          v.next = R, y.next = E;
        }
        c.baseQueue !== v && h("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), c.baseQueue = v = y, u.pending = null;
      }
      if (v !== null) {
        var w = v.next, F = c.baseState, M = null, I = null, W = null, X = w;
        do {
          var Ee = X.lane;
          if (ko(sc, Ee)) {
            if (W !== null) {
              var Ue = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Bn,
                action: X.action,
                hasEagerState: X.hasEagerState,
                eagerState: X.eagerState,
                next: null
              };
              W = W.next = Ue;
            }
            if (X.hasEagerState)
              F = X.eagerState;
            else {
              var Dt = X.action;
              F = e(F, Dt);
            }
          } else {
            var Ve = {
              lane: Ee,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            };
            W === null ? (I = W = Ve, M = F) : W = W.next = Ve, Jt.lanes = lt(Jt.lanes, Ee), vv(Ee);
          }
          X = X.next;
        } while (X !== null && X !== w);
        W === null ? M = F : W.next = I, ke(F, l.memoizedState) || nv(), l.memoizedState = F, l.baseState = M, l.baseQueue = W, u.lastRenderedState = F;
      }
      var Tt = u.interleaved;
      if (Tt !== null) {
        var H = Tt;
        do {
          var J = H.lane;
          Jt.lanes = lt(Jt.lanes, J), vv(J), H = H.next;
        } while (H !== Tt);
      } else
        v === null && (u.lanes = re);
      var P = u.dispatch;
      return [l.memoizedState, P];
    }
    function T0(e, t, i) {
      var l = Ha(), u = l.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var c = u.dispatch, v = u.pending, y = l.memoizedState;
      if (v !== null) {
        u.pending = null;
        var E = v.next, R = E;
        do {
          var w = R.action;
          y = e(y, w), R = R.next;
        } while (R !== E);
        ke(y, l.memoizedState) || nv(), l.memoizedState = y, l.baseQueue === null && (l.baseState = y), u.lastRenderedState = y;
      }
      return [y, c];
    }
    function B2(e, t, i) {
    }
    function V2(e, t, i) {
    }
    function R0(e, t, i) {
      var l = Jt, u = Xl(), c, v = Pr();
      if (v) {
        if (i === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        c = i(), Xf || c !== i() && (h("The result of getServerSnapshot should be cached to avoid an infinite loop"), Xf = !0);
      } else {
        if (c = t(), !Xf) {
          var y = t();
          ke(c, y) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), Xf = !0);
        }
        var E = py();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Hs(E, sc) || GC(l, t, c);
      }
      u.memoizedState = c;
      var R = {
        value: c,
        getSnapshot: t
      };
      return u.queue = R, Pm(XC.bind(null, l, R, e), [e]), l.flags |= vn, qp(dr | Br, KC.bind(null, l, R, c, t), void 0, null), c;
    }
    function Fm(e, t, i) {
      var l = Jt, u = Ha(), c = t();
      if (!Xf) {
        var v = t();
        ke(c, v) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), Xf = !0);
      }
      var y = u.memoizedState, E = !ke(y, c);
      E && (u.memoizedState = c, nv());
      var R = u.queue;
      if (Kp(XC.bind(null, l, R, e), [e]), R.getSnapshot !== t || E || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      hr !== null && hr.memoizedState.tag & dr) {
        l.flags |= vn, qp(dr | Br, KC.bind(null, l, R, c, t), void 0, null);
        var w = py();
        if (w === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Hs(w, sc) || GC(l, t, c);
      }
      return c;
    }
    function GC(e, t, i) {
      e.flags |= Os;
      var l = {
        getSnapshot: t,
        value: i
      }, u = Jt.updateQueue;
      if (u === null)
        u = qC(), Jt.updateQueue = u, u.stores = [l];
      else {
        var c = u.stores;
        c === null ? u.stores = [l] : c.push(l);
      }
    }
    function KC(e, t, i, l) {
      t.value = i, t.getSnapshot = l, JC(t) && ZC(e);
    }
    function XC(e, t, i) {
      var l = function() {
        JC(t) && ZC(e);
      };
      return i(l);
    }
    function JC(e) {
      var t = e.getSnapshot, i = e.value;
      try {
        var l = t();
        return !ke(i, l);
      } catch {
        return !0;
      }
    }
    function ZC(e) {
      var t = na(e, je);
      t !== null && Sr(t, e, je, on);
    }
    function zm(e) {
      var t = Xl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var i = {
        pending: null,
        interleaved: null,
        lanes: re,
        dispatch: null,
        lastRenderedReducer: E0,
        lastRenderedState: e
      };
      t.queue = i;
      var l = i.dispatch = Y_.bind(null, Jt, i);
      return [t.memoizedState, l];
    }
    function w0(e) {
      return x0(E0);
    }
    function b0(e) {
      return T0(E0);
    }
    function qp(e, t, i, l) {
      var u = {
        tag: e,
        create: t,
        destroy: i,
        deps: l,
        // Circular
        next: null
      }, c = Jt.updateQueue;
      if (c === null)
        c = qC(), Jt.updateQueue = c, c.lastEffect = u.next = u;
      else {
        var v = c.lastEffect;
        if (v === null)
          c.lastEffect = u.next = u;
        else {
          var y = v.next;
          v.next = u, u.next = y, c.lastEffect = u;
        }
      }
      return u;
    }
    function _0(e) {
      var t = Xl();
      {
        var i = {
          current: e
        };
        return t.memoizedState = i, i;
      }
    }
    function jm(e) {
      var t = Ha();
      return t.memoizedState;
    }
    function Gp(e, t, i, l) {
      var u = Xl(), c = l === void 0 ? null : l;
      Jt.flags |= e, u.memoizedState = qp(dr | t, i, void 0, c);
    }
    function Hm(e, t, i, l) {
      var u = Ha(), c = l === void 0 ? null : l, v = void 0;
      if (vr !== null) {
        var y = vr.memoizedState;
        if (v = y.destroy, c !== null) {
          var E = y.deps;
          if (S0(c, E)) {
            u.memoizedState = qp(t, i, v, c);
            return;
          }
        }
      }
      Jt.flags |= e, u.memoizedState = qp(dr | t, i, v, c);
    }
    function Pm(e, t) {
      return (Jt.mode & Oi) !== Ae ? Gp(So | vn | jl, Br, e, t) : Gp(vn | jl, Br, e, t);
    }
    function Kp(e, t) {
      return Hm(vn, Br, e, t);
    }
    function k0(e, t) {
      return Gp(st, Kl, e, t);
    }
    function Bm(e, t) {
      return Hm(st, Kl, e, t);
    }
    function O0(e, t) {
      var i = st;
      return i |= ai, (Jt.mode & Oi) !== Ae && (i |= li), Gp(i, pr, e, t);
    }
    function Vm(e, t) {
      return Hm(st, pr, e, t);
    }
    function e1(e, t) {
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
    function D0(e, t, i) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = i != null ? i.concat([e]) : null, u = st;
      return u |= ai, (Jt.mode & Oi) !== Ae && (u |= li), Gp(u, pr, e1.bind(null, t, e), l);
    }
    function Im(e, t, i) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = i != null ? i.concat([e]) : null;
      return Hm(st, pr, e1.bind(null, t, e), l);
    }
    function B_(e, t) {
    }
    var $m = B_;
    function A0(e, t) {
      var i = Xl(), l = t === void 0 ? null : t;
      return i.memoizedState = [e, l], e;
    }
    function Ym(e, t) {
      var i = Ha(), l = t === void 0 ? null : t, u = i.memoizedState;
      if (u !== null && l !== null) {
        var c = u[1];
        if (S0(l, c))
          return u[0];
      }
      return i.memoizedState = [e, l], e;
    }
    function L0(e, t) {
      var i = Xl(), l = t === void 0 ? null : t, u = e();
      return i.memoizedState = [u, l], u;
    }
    function Wm(e, t) {
      var i = Ha(), l = t === void 0 ? null : t, u = i.memoizedState;
      if (u !== null && l !== null) {
        var c = u[1];
        if (S0(l, c))
          return u[0];
      }
      var v = e();
      return i.memoizedState = [v, l], v;
    }
    function N0(e) {
      var t = Xl();
      return t.memoizedState = e, e;
    }
    function t1(e) {
      var t = Ha(), i = vr, l = i.memoizedState;
      return r1(t, l, e);
    }
    function n1(e) {
      var t = Ha();
      if (vr === null)
        return t.memoizedState = e, e;
      var i = vr.memoizedState;
      return r1(t, i, e);
    }
    function r1(e, t, i) {
      var l = !xh(sc);
      if (l) {
        if (!ke(i, t)) {
          var u = wh();
          Jt.lanes = lt(Jt.lanes, u), vv(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, nv()), e.memoizedState = i, i;
    }
    function V_(e, t, i) {
      var l = Ki();
      _n(Zy(l, al)), e(!0);
      var u = Yp.transition;
      Yp.transition = {};
      var c = Yp.transition;
      Yp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (_n(l), Yp.transition = u, u === null && c._updatedFibers) {
          var v = c._updatedFibers.size;
          v > 10 && T("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), c._updatedFibers.clear();
        }
      }
    }
    function M0() {
      var e = zm(!1), t = e[0], i = e[1], l = V_.bind(null, i), u = Xl();
      return u.memoizedState = l, [t, l];
    }
    function i1() {
      var e = w0(), t = e[0], i = Ha(), l = i.memoizedState;
      return [t, l];
    }
    function a1() {
      var e = b0(), t = e[0], i = Ha(), l = i.memoizedState;
      return [t, l];
    }
    var l1 = !1;
    function I_() {
      return l1;
    }
    function U0() {
      var e = Xl(), t = py(), i = t.identifierPrefix, l;
      if (Pr()) {
        var u = l_();
        l = ":" + i + "R" + u;
        var c = Qp++;
        c > 0 && (l += "H" + c.toString(32)), l += ":";
      } else {
        var v = j_++;
        l = ":" + i + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = l, l;
    }
    function Qm() {
      var e = Ha(), t = e.memoizedState;
      return t;
    }
    function $_(e, t, i) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = as(e), u = {
        lane: l,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (o1(e))
        u1(t, u);
      else {
        var c = FC(e, t, u, l);
        if (c !== null) {
          var v = Ni();
          Sr(c, e, l, v), s1(c, t, l);
        }
      }
      c1(e, l);
    }
    function Y_(e, t, i) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = as(e), u = {
        lane: l,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (o1(e))
        u1(t, u);
      else {
        var c = e.alternate;
        if (e.lanes === re && (c === null || c.lanes === re)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var y;
            y = Te.current, Te.current = pl;
            try {
              var E = t.lastRenderedState, R = v(E, i);
              if (u.hasEagerState = !0, u.eagerState = R, ke(R, E)) {
                O_(e, t, u, l);
                return;
              }
            } catch {
            } finally {
              Te.current = y;
            }
          }
        }
        var w = FC(e, t, u, l);
        if (w !== null) {
          var F = Ni();
          Sr(w, e, l, F), s1(w, t, l);
        }
      }
      c1(e, l);
    }
    function o1(e) {
      var t = e.alternate;
      return e === Jt || t !== null && t === Jt;
    }
    function u1(e, t) {
      Wp = Um = !0;
      var i = e.pending;
      i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
    }
    function s1(e, t, i) {
      if (np(i)) {
        var l = t.lanes;
        l = cf(l, e.pendingLanes);
        var u = lt(l, i);
        t.lanes = u, rp(e, u);
      }
    }
    function c1(e, t, i) {
      Ns(e, t);
    }
    var qm = {
      readContext: lr,
      useCallback: mi,
      useContext: mi,
      useEffect: mi,
      useImperativeHandle: mi,
      useInsertionEffect: mi,
      useLayoutEffect: mi,
      useMemo: mi,
      useReducer: mi,
      useRef: mi,
      useState: mi,
      useDebugValue: mi,
      useDeferredValue: mi,
      useTransition: mi,
      useMutableSource: mi,
      useSyncExternalStore: mi,
      useId: mi,
      unstable_isNewReconciler: de
    }, f1 = null, d1 = null, p1 = null, v1 = null, Jl = null, pl = null, Gm = null;
    {
      var F0 = function() {
        h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, it = function() {
        h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      f1 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", qt(), Jf(t), A0(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", qt(), lr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", qt(), Jf(t), Pm(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", qt(), Jf(i), D0(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", qt(), Jf(t), k0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", qt(), Jf(t), O0(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", qt(), Jf(t);
          var i = Te.current;
          Te.current = Jl;
          try {
            return L0(e, t);
          } finally {
            Te.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", qt();
          var l = Te.current;
          Te.current = Jl;
          try {
            return C0(e, t, i);
          } finally {
            Te.current = l;
          }
        },
        useRef: function(e) {
          return ee = "useRef", qt(), _0(e);
        },
        useState: function(e) {
          ee = "useState", qt();
          var t = Te.current;
          Te.current = Jl;
          try {
            return zm(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", qt(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", qt(), N0(e);
        },
        useTransition: function() {
          return ee = "useTransition", qt(), M0();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", qt(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", qt(), R0(e, t, i);
        },
        useId: function() {
          return ee = "useId", qt(), U0();
        },
        unstable_isNewReconciler: de
      }, d1 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", me(), A0(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", me(), lr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", me(), Pm(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", me(), D0(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", me(), k0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", me(), O0(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", me();
          var i = Te.current;
          Te.current = Jl;
          try {
            return L0(e, t);
          } finally {
            Te.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", me();
          var l = Te.current;
          Te.current = Jl;
          try {
            return C0(e, t, i);
          } finally {
            Te.current = l;
          }
        },
        useRef: function(e) {
          return ee = "useRef", me(), _0(e);
        },
        useState: function(e) {
          ee = "useState", me();
          var t = Te.current;
          Te.current = Jl;
          try {
            return zm(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", me(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", me(), N0(e);
        },
        useTransition: function() {
          return ee = "useTransition", me(), M0();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", me(), R0(e, t, i);
        },
        useId: function() {
          return ee = "useId", me(), U0();
        },
        unstable_isNewReconciler: de
      }, p1 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", me(), Ym(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", me(), lr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", me(), Kp(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", me(), Im(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", me(), Bm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", me(), Vm(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", me();
          var i = Te.current;
          Te.current = pl;
          try {
            return Wm(e, t);
          } finally {
            Te.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", me();
          var l = Te.current;
          Te.current = pl;
          try {
            return x0(e, t, i);
          } finally {
            Te.current = l;
          }
        },
        useRef: function(e) {
          return ee = "useRef", me(), jm();
        },
        useState: function(e) {
          ee = "useState", me();
          var t = Te.current;
          Te.current = pl;
          try {
            return w0(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", me(), $m();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", me(), t1(e);
        },
        useTransition: function() {
          return ee = "useTransition", me(), i1();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", me(), Fm(e, t);
        },
        useId: function() {
          return ee = "useId", me(), Qm();
        },
        unstable_isNewReconciler: de
      }, v1 = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", me(), Ym(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", me(), lr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", me(), Kp(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", me(), Im(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", me(), Bm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", me(), Vm(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", me();
          var i = Te.current;
          Te.current = Gm;
          try {
            return Wm(e, t);
          } finally {
            Te.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", me();
          var l = Te.current;
          Te.current = Gm;
          try {
            return T0(e, t, i);
          } finally {
            Te.current = l;
          }
        },
        useRef: function(e) {
          return ee = "useRef", me(), jm();
        },
        useState: function(e) {
          ee = "useState", me();
          var t = Te.current;
          Te.current = Gm;
          try {
            return b0(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", me(), $m();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", me(), n1(e);
        },
        useTransition: function() {
          return ee = "useTransition", me(), a1();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", me(), Fm(e, t);
        },
        useId: function() {
          return ee = "useId", me(), Qm();
        },
        unstable_isNewReconciler: de
      }, Jl = {
        readContext: function(e) {
          return F0(), lr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", it(), qt(), A0(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", it(), qt(), lr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", it(), qt(), Pm(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", it(), qt(), D0(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", it(), qt(), k0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", it(), qt(), O0(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", it(), qt();
          var i = Te.current;
          Te.current = Jl;
          try {
            return L0(e, t);
          } finally {
            Te.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", it(), qt();
          var l = Te.current;
          Te.current = Jl;
          try {
            return C0(e, t, i);
          } finally {
            Te.current = l;
          }
        },
        useRef: function(e) {
          return ee = "useRef", it(), qt(), _0(e);
        },
        useState: function(e) {
          ee = "useState", it(), qt();
          var t = Te.current;
          Te.current = Jl;
          try {
            return zm(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", it(), qt(), void 0;
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", it(), qt(), N0(e);
        },
        useTransition: function() {
          return ee = "useTransition", it(), qt(), M0();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", it(), qt(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", it(), qt(), R0(e, t, i);
        },
        useId: function() {
          return ee = "useId", it(), qt(), U0();
        },
        unstable_isNewReconciler: de
      }, pl = {
        readContext: function(e) {
          return F0(), lr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", it(), me(), Ym(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", it(), me(), lr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", it(), me(), Kp(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", it(), me(), Im(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", it(), me(), Bm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", it(), me(), Vm(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", it(), me();
          var i = Te.current;
          Te.current = pl;
          try {
            return Wm(e, t);
          } finally {
            Te.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", it(), me();
          var l = Te.current;
          Te.current = pl;
          try {
            return x0(e, t, i);
          } finally {
            Te.current = l;
          }
        },
        useRef: function(e) {
          return ee = "useRef", it(), me(), jm();
        },
        useState: function(e) {
          ee = "useState", it(), me();
          var t = Te.current;
          Te.current = pl;
          try {
            return w0(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", it(), me(), $m();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", it(), me(), t1(e);
        },
        useTransition: function() {
          return ee = "useTransition", it(), me(), i1();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", it(), me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", it(), me(), Fm(e, t);
        },
        useId: function() {
          return ee = "useId", it(), me(), Qm();
        },
        unstable_isNewReconciler: de
      }, Gm = {
        readContext: function(e) {
          return F0(), lr(e);
        },
        useCallback: function(e, t) {
          return ee = "useCallback", it(), me(), Ym(e, t);
        },
        useContext: function(e) {
          return ee = "useContext", it(), me(), lr(e);
        },
        useEffect: function(e, t) {
          return ee = "useEffect", it(), me(), Kp(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ee = "useImperativeHandle", it(), me(), Im(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ee = "useInsertionEffect", it(), me(), Bm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ee = "useLayoutEffect", it(), me(), Vm(e, t);
        },
        useMemo: function(e, t) {
          ee = "useMemo", it(), me();
          var i = Te.current;
          Te.current = pl;
          try {
            return Wm(e, t);
          } finally {
            Te.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ee = "useReducer", it(), me();
          var l = Te.current;
          Te.current = pl;
          try {
            return T0(e, t, i);
          } finally {
            Te.current = l;
          }
        },
        useRef: function(e) {
          return ee = "useRef", it(), me(), jm();
        },
        useState: function(e) {
          ee = "useState", it(), me();
          var t = Te.current;
          Te.current = pl;
          try {
            return b0(e);
          } finally {
            Te.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ee = "useDebugValue", it(), me(), $m();
        },
        useDeferredValue: function(e) {
          return ee = "useDeferredValue", it(), me(), n1(e);
        },
        useTransition: function() {
          return ee = "useTransition", it(), me(), a1();
        },
        useMutableSource: function(e, t, i) {
          return ee = "useMutableSource", it(), me(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ee = "useSyncExternalStore", it(), me(), Fm(e, t);
        },
        useId: function() {
          return ee = "useId", it(), me(), Qm();
        },
        unstable_isNewReconciler: de
      };
    }
    var ts = f.unstable_now, h1 = 0, Km = -1, Xp = -1, Xm = -1, z0 = !1, Jm = !1;
    function m1() {
      return z0;
    }
    function W_() {
      Jm = !0;
    }
    function Q_() {
      z0 = !1, Jm = !1;
    }
    function q_() {
      z0 = Jm, Jm = !1;
    }
    function y1() {
      return h1;
    }
    function g1() {
      h1 = ts();
    }
    function j0(e) {
      Xp = ts(), e.actualStartTime < 0 && (e.actualStartTime = ts());
    }
    function S1(e) {
      Xp = -1;
    }
    function Zm(e, t) {
      if (Xp >= 0) {
        var i = ts() - Xp;
        e.actualDuration += i, t && (e.selfBaseDuration = i), Xp = -1;
      }
    }
    function Zl(e) {
      if (Km >= 0) {
        var t = ts() - Km;
        Km = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case k:
              var l = i.stateNode;
              l.effectDuration += t;
              return;
            case yt:
              var u = i.stateNode;
              u.effectDuration += t;
              return;
          }
          i = i.return;
        }
      }
    }
    function H0(e) {
      if (Xm >= 0) {
        var t = ts() - Xm;
        Xm = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case k:
              var l = i.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
            case yt:
              var u = i.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          i = i.return;
        }
      }
    }
    function eo() {
      Km = ts();
    }
    function P0() {
      Xm = ts();
    }
    function B0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function vl(e, t) {
      if (e && e.defaultProps) {
        var i = vt({}, t), l = e.defaultProps;
        for (var u in l)
          i[u] === void 0 && (i[u] = l[u]);
        return i;
      }
      return t;
    }
    var V0 = {}, I0, $0, Y0, W0, Q0, E1, ey, q0, G0, K0, Jp;
    {
      I0 = /* @__PURE__ */ new Set(), $0 = /* @__PURE__ */ new Set(), Y0 = /* @__PURE__ */ new Set(), W0 = /* @__PURE__ */ new Set(), q0 = /* @__PURE__ */ new Set(), Q0 = /* @__PURE__ */ new Set(), G0 = /* @__PURE__ */ new Set(), K0 = /* @__PURE__ */ new Set(), Jp = /* @__PURE__ */ new Set();
      var C1 = /* @__PURE__ */ new Set();
      ey = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var i = t + "_" + e;
          C1.has(i) || (C1.add(i), h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, E1 = function(e, t) {
        if (t === void 0) {
          var i = bt(e) || "Component";
          Q0.has(i) || (Q0.add(i), h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", i));
        }
      }, Object.defineProperty(V0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(V0);
    }
    function X0(e, t, i, l) {
      var u = e.memoizedState, c = i(l, u);
      {
        if (e.mode & Et) {
          Pn(!0);
          try {
            c = i(l, u);
          } finally {
            Pn(!1);
          }
        }
        E1(t, c);
      }
      var v = c == null ? u : vt({}, u, c);
      if (e.memoizedState = v, e.lanes === re) {
        var y = e.updateQueue;
        y.baseState = v;
      }
    }
    var J0 = {
      isMounted: _i,
      enqueueSetState: function(e, t, i) {
        var l = Vi(e), u = Ni(), c = as(l), v = Bo(u, c);
        v.payload = t, i != null && (ey(i, "setState"), v.callback = i);
        var y = Xu(l, v, c);
        y !== null && (Sr(y, l, c, u), Om(y, l, c)), Ns(l, c);
      },
      enqueueReplaceState: function(e, t, i) {
        var l = Vi(e), u = Ni(), c = as(l), v = Bo(u, c);
        v.tag = jC, v.payload = t, i != null && (ey(i, "replaceState"), v.callback = i);
        var y = Xu(l, v, c);
        y !== null && (Sr(y, l, c, u), Om(y, l, c)), Ns(l, c);
      },
      enqueueForceUpdate: function(e, t) {
        var i = Vi(e), l = Ni(), u = as(i), c = Bo(l, u);
        c.tag = bm, t != null && (ey(t, "forceUpdate"), c.callback = t);
        var v = Xu(i, c, u);
        v !== null && (Sr(v, i, u, l), Om(v, i, u)), Wc(i, u);
      }
    };
    function x1(e, t, i, l, u, c, v) {
      var y = e.stateNode;
      if (typeof y.shouldComponentUpdate == "function") {
        var E = y.shouldComponentUpdate(l, c, v);
        {
          if (e.mode & Et) {
            Pn(!0);
            try {
              E = y.shouldComponentUpdate(l, c, v);
            } finally {
              Pn(!1);
            }
          }
          E === void 0 && h("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", bt(t) || "Component");
        }
        return E;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Xe(i, l) || !Xe(u, c) : !0;
    }
    function G_(e, t, i) {
      var l = e.stateNode;
      {
        var u = bt(t) || "Component", c = l.render;
        c || (t.prototype && typeof t.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), l.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), l.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Jp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Et) === Ae && (Jp.add(t), h(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Jp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Et) === Ae && (Jp.add(t), h(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), l.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !G0.has(t) && (G0.add(t), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof l.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof l.shouldComponentUpdate < "u" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", bt(t) || "A pure component"), typeof l.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof l.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof l.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof l.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var v = l.props !== i;
        l.props !== void 0 && v && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), l.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !Y0.has(t) && (Y0.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", bt(t))), typeof l.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof l.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var y = l.state;
        y && (typeof y != "object" || _t(y)) && h("%s.state: must be set to an object or null", u), typeof l.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function T1(e, t) {
      t.updater = J0, e.stateNode = t, vu(t, e), t._reactInternalInstance = V0;
    }
    function R1(e, t, i) {
      var l = !1, u = ga, c = ga, v = t.contextType;
      if ("contextType" in t) {
        var y = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === ae && v._context === void 0
        );
        if (!y && !K0.has(t)) {
          K0.add(t);
          var E = "";
          v === void 0 ? E = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? E = " However, it is set to a " + typeof v + "." : v.$$typeof === A ? E = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? E = " Did you accidentally pass the Context.Consumer instead?" : E = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", bt(t) || "Component", E);
        }
      }
      if (typeof v == "object" && v !== null)
        c = lr(v);
      else {
        u = Pf(e, t, !0);
        var R = t.contextTypes;
        l = R != null, c = l ? Bf(e, u) : ga;
      }
      var w = new t(i, c);
      if (e.mode & Et) {
        Pn(!0);
        try {
          w = new t(i, c);
        } finally {
          Pn(!1);
        }
      }
      var F = e.memoizedState = w.state !== null && w.state !== void 0 ? w.state : null;
      T1(e, w);
      {
        if (typeof t.getDerivedStateFromProps == "function" && F === null) {
          var M = bt(t) || "Component";
          $0.has(M) || ($0.add(M), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", M, w.state === null ? "null" : "undefined", M));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof w.getSnapshotBeforeUpdate == "function") {
          var I = null, W = null, X = null;
          if (typeof w.componentWillMount == "function" && w.componentWillMount.__suppressDeprecationWarning !== !0 ? I = "componentWillMount" : typeof w.UNSAFE_componentWillMount == "function" && (I = "UNSAFE_componentWillMount"), typeof w.componentWillReceiveProps == "function" && w.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? W = "componentWillReceiveProps" : typeof w.UNSAFE_componentWillReceiveProps == "function" && (W = "UNSAFE_componentWillReceiveProps"), typeof w.componentWillUpdate == "function" && w.componentWillUpdate.__suppressDeprecationWarning !== !0 ? X = "componentWillUpdate" : typeof w.UNSAFE_componentWillUpdate == "function" && (X = "UNSAFE_componentWillUpdate"), I !== null || W !== null || X !== null) {
            var Ee = bt(t) || "Component", Ve = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            W0.has(Ee) || (W0.add(Ee), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ee, Ve, I !== null ? `
  ` + I : "", W !== null ? `
  ` + W : "", X !== null ? `
  ` + X : ""));
          }
        }
      }
      return l && pC(e, u, c), w;
    }
    function K_(e, t) {
      var i = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), i !== t.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", rt(e) || "Component"), J0.enqueueReplaceState(t, t.state, null));
    }
    function w1(e, t, i, l) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, l), t.state !== u) {
        {
          var c = rt(e) || "Component";
          I0.has(c) || (I0.add(c), h("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", c));
        }
        J0.enqueueReplaceState(t, t.state, null);
      }
    }
    function Z0(e, t, i, l) {
      G_(e, t, i);
      var u = e.stateNode;
      u.props = i, u.state = e.memoizedState, u.refs = {}, u0(e);
      var c = t.contextType;
      if (typeof c == "object" && c !== null)
        u.context = lr(c);
      else {
        var v = Pf(e, t, !0);
        u.context = Bf(e, v);
      }
      {
        if (u.state === i) {
          var y = bt(t) || "Component";
          q0.has(y) || (q0.add(y), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
        }
        e.mode & Et && fl.recordLegacyContextWarning(e, u), fl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var E = t.getDerivedStateFromProps;
      if (typeof E == "function" && (X0(e, t, E, i), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (K_(e, u), Dm(e, i, u, l), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var R = st;
        R |= ai, (e.mode & Oi) !== Ae && (R |= li), e.flags |= R;
      }
    }
    function X_(e, t, i, l) {
      var u = e.stateNode, c = e.memoizedProps;
      u.props = c;
      var v = u.context, y = t.contextType, E = ga;
      if (typeof y == "object" && y !== null)
        E = lr(y);
      else {
        var R = Pf(e, t, !0);
        E = Bf(e, R);
      }
      var w = t.getDerivedStateFromProps, F = typeof w == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !F && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (c !== i || v !== E) && w1(e, u, i, E), PC();
      var M = e.memoizedState, I = u.state = M;
      if (Dm(e, i, u, l), I = e.memoizedState, c === i && M === I && !fm() && !Am()) {
        if (typeof u.componentDidMount == "function") {
          var W = st;
          W |= ai, (e.mode & Oi) !== Ae && (W |= li), e.flags |= W;
        }
        return !1;
      }
      typeof w == "function" && (X0(e, t, w, i), I = e.memoizedState);
      var X = Am() || x1(e, t, c, i, M, I, E);
      if (X) {
        if (!F && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var Ee = st;
          Ee |= ai, (e.mode & Oi) !== Ae && (Ee |= li), e.flags |= Ee;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ve = st;
          Ve |= ai, (e.mode & Oi) !== Ae && (Ve |= li), e.flags |= Ve;
        }
        e.memoizedProps = i, e.memoizedState = I;
      }
      return u.props = i, u.state = I, u.context = E, X;
    }
    function J_(e, t, i, l, u) {
      var c = t.stateNode;
      HC(e, t);
      var v = t.memoizedProps, y = t.type === t.elementType ? v : vl(t.type, v);
      c.props = y;
      var E = t.pendingProps, R = c.context, w = i.contextType, F = ga;
      if (typeof w == "object" && w !== null)
        F = lr(w);
      else {
        var M = Pf(t, i, !0);
        F = Bf(t, M);
      }
      var I = i.getDerivedStateFromProps, W = typeof I == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !W && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (v !== E || R !== F) && w1(t, c, l, F), PC();
      var X = t.memoizedState, Ee = c.state = X;
      if (Dm(t, l, c, u), Ee = t.memoizedState, v === E && X === Ee && !fm() && !Am() && !Fe)
        return typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= st), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Ii), !1;
      typeof I == "function" && (X0(t, i, I, l), Ee = t.memoizedState);
      var Ve = Am() || x1(t, i, y, l, X, Ee, F) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Fe;
      return Ve ? (!W && (typeof c.UNSAFE_componentWillUpdate == "function" || typeof c.componentWillUpdate == "function") && (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(l, Ee, F), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(l, Ee, F)), typeof c.componentDidUpdate == "function" && (t.flags |= st), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= Ii)) : (typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= st), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Ii), t.memoizedProps = l, t.memoizedState = Ee), c.props = l, c.state = Ee, c.context = F, Ve;
    }
    function cc(e, t) {
      return {
        value: e,
        source: t,
        stack: tu(t),
        digest: null
      };
    }
    function eS(e, t, i) {
      return {
        value: e,
        source: null,
        stack: i ?? null,
        digest: t ?? null
      };
    }
    function Z_(e, t) {
      return !0;
    }
    function tS(e, t) {
      try {
        var i = Z_(e, t);
        if (i === !1)
          return;
        var l = t.value, u = t.source, c = t.stack, v = c !== null ? c : "";
        if (l != null && l._suppressLogging) {
          if (e.tag === N)
            return;
          console.error(l);
        }
        var y = u ? rt(u) : null, E = y ? "The above error occurred in the <" + y + "> component:" : "The above error occurred in one of your React components:", R;
        if (e.tag === k)
          R = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var w = rt(e) || "Anonymous";
          R = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + w + ".");
        }
        var F = E + `
` + v + `

` + ("" + R);
        console.error(F);
      } catch (M) {
        setTimeout(function() {
          throw M;
        });
      }
    }
    var ek = typeof WeakMap == "function" ? WeakMap : Map;
    function b1(e, t, i) {
      var l = Bo(on, i);
      l.tag = l0, l.payload = {
        element: null
      };
      var u = t.value;
      return l.callback = function() {
        WO(u), tS(e, t);
      }, l;
    }
    function nS(e, t, i) {
      var l = Bo(on, i);
      l.tag = l0;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var c = t.value;
        l.payload = function() {
          return u(c);
        }, l.callback = function() {
          zx(e), tS(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (l.callback = function() {
        zx(e), tS(e, t), typeof u != "function" && $O(this);
        var E = t.value, R = t.stack;
        this.componentDidCatch(E, {
          componentStack: R !== null ? R : ""
        }), typeof u != "function" && (di(e.lanes, je) || h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", rt(e) || "Unknown"));
      }), l;
    }
    function _1(e, t, i) {
      var l = e.pingCache, u;
      if (l === null ? (l = e.pingCache = new ek(), u = /* @__PURE__ */ new Set(), l.set(t, u)) : (u = l.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(t, u))), !u.has(i)) {
        u.add(i);
        var c = QO.bind(null, e, t, i);
        ki && hv(e, i), t.then(c, c);
      }
    }
    function tk(e, t, i, l) {
      var u = e.updateQueue;
      if (u === null) {
        var c = /* @__PURE__ */ new Set();
        c.add(i), e.updateQueue = c;
      } else
        u.add(i);
    }
    function nk(e, t) {
      var i = e.tag;
      if ((e.mode & Me) === Ae && (i === O || i === Be || i === Je)) {
        var l = e.alternate;
        l ? (e.updateQueue = l.updateQueue, e.memoizedState = l.memoizedState, e.lanes = l.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function k1(e) {
      var t = e;
      do {
        if (t.tag === He && F_(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function O1(e, t, i, l, u) {
      if ((e.mode & Me) === Ae) {
        if (e === t)
          e.flags |= nr;
        else {
          if (e.flags |= tt, i.flags |= Ds, i.flags &= ~(Mc | wi), i.tag === N) {
            var c = i.alternate;
            if (c === null)
              i.tag = Dn;
            else {
              var v = Bo(on, je);
              v.tag = bm, Xu(i, v, je);
            }
          }
          i.lanes = lt(i.lanes, je);
        }
        return e;
      }
      return e.flags |= nr, e.lanes = u, e;
    }
    function rk(e, t, i, l, u) {
      if (i.flags |= wi, ki && hv(e, u), l !== null && typeof l == "object" && typeof l.then == "function") {
        var c = l;
        nk(i), Pr() && i.mode & Me && EC();
        var v = k1(t);
        if (v !== null) {
          v.flags &= ~bn, O1(v, t, i, e, u), v.mode & Me && _1(e, c, u), tk(v, e, c);
          return;
        } else {
          if (!tp(u)) {
            _1(e, c, u), US();
            return;
          }
          var y = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          l = y;
        }
      } else if (Pr() && i.mode & Me) {
        EC();
        var E = k1(t);
        if (E !== null) {
          (E.flags & nr) === Pe && (E.flags |= bn), O1(E, t, i, e, u), qg(cc(l, i));
          return;
        }
      }
      l = cc(l, i), FO(l);
      var R = t;
      do {
        switch (R.tag) {
          case k: {
            var w = l;
            R.flags |= nr;
            var F = ku(u);
            R.lanes = lt(R.lanes, F);
            var M = b1(R, w, F);
            s0(R, M);
            return;
          }
          case N:
            var I = l, W = R.type, X = R.stateNode;
            if ((R.flags & tt) === Pe && (typeof W.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && !kx(X))) {
              R.flags |= nr;
              var Ee = ku(u);
              R.lanes = lt(R.lanes, Ee);
              var Ve = nS(R, I, Ee);
              s0(R, Ve);
              return;
            }
            break;
        }
        R = R.return;
      } while (R !== null);
    }
    function ik() {
      return null;
    }
    var Zp = p.ReactCurrentOwner, hl = !1, rS, ev, iS, aS, lS, fc, oS, ty, tv;
    rS = {}, ev = {}, iS = {}, aS = {}, lS = {}, fc = !1, oS = {}, ty = {}, tv = {};
    function Ai(e, t, i, l) {
      e === null ? t.child = LC(t, null, i, l) : t.child = Yf(t, e.child, i, l);
    }
    function ak(e, t, i, l) {
      t.child = Yf(t, e.child, null, l), t.child = Yf(t, null, i, l);
    }
    function D1(e, t, i, l, u) {
      if (t.type !== t.elementType) {
        var c = i.propTypes;
        c && sl(
          c,
          l,
          // Resolved props
          "prop",
          bt(i)
        );
      }
      var v = i.render, y = t.ref, E, R;
      Qf(t, u), gu(t);
      {
        if (Zp.current = t, ni(!0), E = Zf(e, t, v, l, y, u), R = ed(), t.mode & Et) {
          Pn(!0);
          try {
            E = Zf(e, t, v, l, y, u), R = ed();
          } finally {
            Pn(!1);
          }
        }
        ni(!1);
      }
      return si(), e !== null && !hl ? (WC(e, t, u), Vo(e, t, u)) : (Pr() && R && Vg(t), t.flags |= Fl, Ai(e, t, E, u), t.child);
    }
    function A1(e, t, i, l, u) {
      if (e === null) {
        var c = i.type;
        if (cD(c) && i.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        i.defaultProps === void 0) {
          var v = c;
          return v = ud(c), t.tag = Je, t.type = v, cS(t, c), L1(e, t, v, l, u);
        }
        {
          var y = c.propTypes;
          if (y && sl(
            y,
            l,
            // Resolved props
            "prop",
            bt(c)
          ), i.defaultProps !== void 0) {
            var E = bt(c) || "Unknown";
            tv[E] || (h("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", E), tv[E] = !0);
          }
        }
        var R = WS(i.type, null, l, t, t.mode, u);
        return R.ref = t.ref, R.return = t, t.child = R, R;
      }
      {
        var w = i.type, F = w.propTypes;
        F && sl(
          F,
          l,
          // Resolved props
          "prop",
          bt(w)
        );
      }
      var M = e.child, I = mS(e, u);
      if (!I) {
        var W = M.memoizedProps, X = i.compare;
        if (X = X !== null ? X : Xe, X(W, l) && e.ref === t.ref)
          return Vo(e, t, u);
      }
      t.flags |= Fl;
      var Ee = mc(M, l);
      return Ee.ref = t.ref, Ee.return = t, t.child = Ee, Ee;
    }
    function L1(e, t, i, l, u) {
      if (t.type !== t.elementType) {
        var c = t.elementType;
        if (c.$$typeof === Qe) {
          var v = c, y = v._payload, E = v._init;
          try {
            c = E(y);
          } catch {
            c = null;
          }
          var R = c && c.propTypes;
          R && sl(
            R,
            l,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            bt(c)
          );
        }
      }
      if (e !== null) {
        var w = e.memoizedProps;
        if (Xe(w, l) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (hl = !1, t.pendingProps = l = w, mS(e, u))
            (e.flags & Ds) !== Pe && (hl = !0);
          else
            return t.lanes = e.lanes, Vo(e, t, u);
      }
      return uS(e, t, i, l, u);
    }
    function N1(e, t, i) {
      var l = t.pendingProps, u = l.children, c = e !== null ? e.memoizedState : null;
      if (l.mode === "hidden" || ge)
        if ((t.mode & Me) === Ae) {
          var v = {
            baseLanes: re,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, vy(t, i);
        } else if (di(i, kr)) {
          var F = {
            baseLanes: re,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = F;
          var M = c !== null ? c.baseLanes : i;
          vy(t, M);
        } else {
          var y = null, E;
          if (c !== null) {
            var R = c.baseLanes;
            E = lt(R, i);
          } else
            E = i;
          t.lanes = t.childLanes = kr;
          var w = {
            baseLanes: E,
            cachePool: y,
            transitions: null
          };
          return t.memoizedState = w, t.updateQueue = null, vy(t, E), null;
        }
      else {
        var I;
        c !== null ? (I = lt(c.baseLanes, i), t.memoizedState = null) : I = i, vy(t, I);
      }
      return Ai(e, t, u, i), t.child;
    }
    function lk(e, t, i) {
      var l = t.pendingProps;
      return Ai(e, t, l, i), t.child;
    }
    function ok(e, t, i) {
      var l = t.pendingProps.children;
      return Ai(e, t, l, i), t.child;
    }
    function uk(e, t, i) {
      {
        t.flags |= st;
        {
          var l = t.stateNode;
          l.effectDuration = 0, l.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, c = u.children;
      return Ai(e, t, c, i), t.child;
    }
    function M1(e, t) {
      var i = t.ref;
      (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= ii, t.flags |= Vd);
    }
    function uS(e, t, i, l, u) {
      if (t.type !== t.elementType) {
        var c = i.propTypes;
        c && sl(
          c,
          l,
          // Resolved props
          "prop",
          bt(i)
        );
      }
      var v;
      {
        var y = Pf(t, i, !0);
        v = Bf(t, y);
      }
      var E, R;
      Qf(t, u), gu(t);
      {
        if (Zp.current = t, ni(!0), E = Zf(e, t, i, l, v, u), R = ed(), t.mode & Et) {
          Pn(!0);
          try {
            E = Zf(e, t, i, l, v, u), R = ed();
          } finally {
            Pn(!1);
          }
        }
        ni(!1);
      }
      return si(), e !== null && !hl ? (WC(e, t, u), Vo(e, t, u)) : (Pr() && R && Vg(t), t.flags |= Fl, Ai(e, t, E, u), t.child);
    }
    function U1(e, t, i, l, u) {
      {
        switch (wD(t)) {
          case !1: {
            var c = t.stateNode, v = t.type, y = new v(t.memoizedProps, c.context), E = y.state;
            c.updater.enqueueSetState(c, E, null);
            break;
          }
          case !0: {
            t.flags |= tt, t.flags |= nr;
            var R = new Error("Simulated error coming from DevTools"), w = ku(u);
            t.lanes = lt(t.lanes, w);
            var F = nS(t, cc(R, t), w);
            s0(t, F);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var M = i.propTypes;
          M && sl(
            M,
            l,
            // Resolved props
            "prop",
            bt(i)
          );
        }
      }
      var I;
      Gl(i) ? (I = !0, pm(t)) : I = !1, Qf(t, u);
      var W = t.stateNode, X;
      W === null ? (ry(e, t), R1(t, i, l), Z0(t, i, l, u), X = !0) : e === null ? X = X_(t, i, l, u) : X = J_(e, t, i, l, u);
      var Ee = sS(e, t, i, X, I, u);
      {
        var Ve = t.stateNode;
        X && Ve.props !== l && (fc || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", rt(t) || "a component"), fc = !0);
      }
      return Ee;
    }
    function sS(e, t, i, l, u, c) {
      M1(e, t);
      var v = (t.flags & tt) !== Pe;
      if (!l && !v)
        return u && mC(t, i, !1), Vo(e, t, c);
      var y = t.stateNode;
      Zp.current = t;
      var E;
      if (v && typeof i.getDerivedStateFromError != "function")
        E = null, S1();
      else {
        gu(t);
        {
          if (ni(!0), E = y.render(), t.mode & Et) {
            Pn(!0);
            try {
              y.render();
            } finally {
              Pn(!1);
            }
          }
          ni(!1);
        }
        si();
      }
      return t.flags |= Fl, e !== null && v ? ak(e, t, E, c) : Ai(e, t, E, c), t.memoizedState = y.state, u && mC(t, i, !0), t.child;
    }
    function F1(e) {
      var t = e.stateNode;
      t.pendingContext ? vC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vC(e, t.context, !1), c0(e, t.containerInfo);
    }
    function sk(e, t, i) {
      if (F1(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var l = t.pendingProps, u = t.memoizedState, c = u.element;
      HC(e, t), Dm(t, l, null, i);
      var v = t.memoizedState;
      t.stateNode;
      var y = v.element;
      if (u.isDehydrated) {
        var E = {
          element: y,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, R = t.updateQueue;
        if (R.baseState = E, t.memoizedState = E, t.flags & bn) {
          var w = cc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return z1(e, t, y, i, w);
        } else if (y !== c) {
          var F = cc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return z1(e, t, y, i, F);
        } else {
          d_(t);
          var M = LC(t, null, y, i);
          t.child = M;
          for (var I = M; I; )
            I.flags = I.flags & ~cn | $i, I = I.sibling;
        }
      } else {
        if ($f(), y === c)
          return Vo(e, t, i);
        Ai(e, t, y, i);
      }
      return t.child;
    }
    function z1(e, t, i, l, u) {
      return $f(), qg(u), t.flags |= bn, Ai(e, t, i, l), t.child;
    }
    function ck(e, t, i) {
      IC(t), e === null && Qg(t);
      var l = t.type, u = t.pendingProps, c = e !== null ? e.memoizedProps : null, v = u.children, y = kg(l, u);
      return y ? v = null : c !== null && kg(l, c) && (t.flags |= Qt), M1(e, t), Ai(e, t, v, i), t.child;
    }
    function fk(e, t) {
      return e === null && Qg(t), null;
    }
    function dk(e, t, i, l) {
      ry(e, t);
      var u = t.pendingProps, c = i, v = c._payload, y = c._init, E = y(v);
      t.type = E;
      var R = t.tag = fD(E), w = vl(E, u), F;
      switch (R) {
        case O:
          return cS(t, E), t.type = E = ud(E), F = uS(null, t, E, w, l), F;
        case N:
          return t.type = E = PS(E), F = U1(null, t, E, w, l), F;
        case Be:
          return t.type = E = BS(E), F = D1(null, t, E, w, l), F;
        case gt: {
          if (t.type !== t.elementType) {
            var M = E.propTypes;
            M && sl(
              M,
              w,
              // Resolved for outer only
              "prop",
              bt(E)
            );
          }
          return F = A1(
            null,
            t,
            E,
            vl(E.type, w),
            // The inner type can have defaults too
            l
          ), F;
        }
      }
      var I = "";
      throw E !== null && typeof E == "object" && E.$$typeof === Qe && (I = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + E + ". " + ("Lazy element type must resolve to a class or function." + I));
    }
    function pk(e, t, i, l, u) {
      ry(e, t), t.tag = N;
      var c;
      return Gl(i) ? (c = !0, pm(t)) : c = !1, Qf(t, u), R1(t, i, l), Z0(t, i, l, u), sS(null, t, i, !0, c, u);
    }
    function vk(e, t, i, l) {
      ry(e, t);
      var u = t.pendingProps, c;
      {
        var v = Pf(t, i, !1);
        c = Bf(t, v);
      }
      Qf(t, l);
      var y, E;
      gu(t);
      {
        if (i.prototype && typeof i.prototype.render == "function") {
          var R = bt(i) || "Unknown";
          rS[R] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", R, R), rS[R] = !0);
        }
        t.mode & Et && fl.recordLegacyContextWarning(t, null), ni(!0), Zp.current = t, y = Zf(null, t, i, u, c, l), E = ed(), ni(!1);
      }
      if (si(), t.flags |= Fl, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var w = bt(i) || "Unknown";
        ev[w] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", w, w, w), ev[w] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var F = bt(i) || "Unknown";
          ev[F] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", F, F, F), ev[F] = !0);
        }
        t.tag = N, t.memoizedState = null, t.updateQueue = null;
        var M = !1;
        return Gl(i) ? (M = !0, pm(t)) : M = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, u0(t), T1(t, y), Z0(t, i, u, l), sS(null, t, i, !0, M, l);
      } else {
        if (t.tag = O, t.mode & Et) {
          Pn(!0);
          try {
            y = Zf(null, t, i, u, c, l), E = ed();
          } finally {
            Pn(!1);
          }
        }
        return Pr() && E && Vg(t), Ai(null, t, y, l), cS(t, i), t.child;
      }
    }
    function cS(e, t) {
      {
        if (t && t.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var i = "", l = zr();
          l && (i += `

Check the render method of \`` + l + "`.");
          var u = l || "", c = e._debugSource;
          c && (u = c.fileName + ":" + c.lineNumber), lS[u] || (lS[u] = !0, h("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", i));
        }
        if (t.defaultProps !== void 0) {
          var v = bt(t) || "Unknown";
          tv[v] || (h("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", v), tv[v] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var y = bt(t) || "Unknown";
          aS[y] || (h("%s: Function components do not support getDerivedStateFromProps.", y), aS[y] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var E = bt(t) || "Unknown";
          iS[E] || (h("%s: Function components do not support contextType.", E), iS[E] = !0);
        }
      }
    }
    var fS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Bn
    };
    function dS(e) {
      return {
        baseLanes: e,
        cachePool: ik(),
        transitions: null
      };
    }
    function hk(e, t) {
      var i = null;
      return {
        baseLanes: lt(e.baseLanes, t),
        cachePool: i,
        transitions: e.transitions
      };
    }
    function mk(e, t, i, l) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return p0(e, $p);
    }
    function yk(e, t) {
      return Ps(e.childLanes, t);
    }
    function j1(e, t, i) {
      var l = t.pendingProps;
      bD(t) && (t.flags |= tt);
      var u = dl.current, c = !1, v = (t.flags & tt) !== Pe;
      if (v || mk(u, e) ? (c = !0, t.flags &= ~tt) : (e === null || e.memoizedState !== null) && (u = U_(u, YC)), u = Gf(u), Zu(t, u), e === null) {
        Qg(t);
        var y = t.memoizedState;
        if (y !== null) {
          var E = y.dehydrated;
          if (E !== null)
            return xk(t, E);
        }
        var R = l.children, w = l.fallback;
        if (c) {
          var F = gk(t, R, w, i), M = t.child;
          return M.memoizedState = dS(i), t.memoizedState = fS, F;
        } else
          return pS(t, R);
      } else {
        var I = e.memoizedState;
        if (I !== null) {
          var W = I.dehydrated;
          if (W !== null)
            return Tk(e, t, v, l, W, I, i);
        }
        if (c) {
          var X = l.fallback, Ee = l.children, Ve = Ek(e, t, Ee, X, i), Ue = t.child, Dt = e.child.memoizedState;
          return Ue.memoizedState = Dt === null ? dS(i) : hk(Dt, i), Ue.childLanes = yk(e, i), t.memoizedState = fS, Ve;
        } else {
          var Tt = l.children, H = Sk(e, t, Tt, i);
          return t.memoizedState = null, H;
        }
      }
    }
    function pS(e, t, i) {
      var l = e.mode, u = {
        mode: "visible",
        children: t
      }, c = vS(u, l);
      return c.return = e, e.child = c, c;
    }
    function gk(e, t, i, l) {
      var u = e.mode, c = e.child, v = {
        mode: "hidden",
        children: t
      }, y, E;
      return (u & Me) === Ae && c !== null ? (y = c, y.childLanes = re, y.pendingProps = v, e.mode & nt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = 0, y.treeBaseDuration = 0), E = os(i, u, l, null)) : (y = vS(v, u), E = os(i, u, l, null)), y.return = e, E.return = e, y.sibling = E, e.child = y, E;
    }
    function vS(e, t, i) {
      return Hx(e, t, re, null);
    }
    function H1(e, t) {
      return mc(e, t);
    }
    function Sk(e, t, i, l) {
      var u = e.child, c = u.sibling, v = H1(u, {
        mode: "visible",
        children: i
      });
      if ((t.mode & Me) === Ae && (v.lanes = l), v.return = t, v.sibling = null, c !== null) {
        var y = t.deletions;
        y === null ? (t.deletions = [c], t.flags |= Bt) : y.push(c);
      }
      return t.child = v, v;
    }
    function Ek(e, t, i, l, u) {
      var c = t.mode, v = e.child, y = v.sibling, E = {
        mode: "hidden",
        children: i
      }, R;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (c & Me) === Ae && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var w = t.child;
        R = w, R.childLanes = re, R.pendingProps = E, t.mode & nt && (R.actualDuration = 0, R.actualStartTime = -1, R.selfBaseDuration = v.selfBaseDuration, R.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        R = H1(v, E), R.subtreeFlags = v.subtreeFlags & sr;
      var F;
      return y !== null ? F = mc(y, l) : (F = os(l, c, u, null), F.flags |= cn), F.return = t, R.return = t, R.sibling = F, t.child = R, F;
    }
    function ny(e, t, i, l) {
      l !== null && qg(l), Yf(t, e.child, null, i);
      var u = t.pendingProps, c = u.children, v = pS(t, c);
      return v.flags |= cn, t.memoizedState = null, v;
    }
    function Ck(e, t, i, l, u) {
      var c = t.mode, v = {
        mode: "visible",
        children: i
      }, y = vS(v, c), E = os(l, c, u, null);
      return E.flags |= cn, y.return = t, E.return = t, y.sibling = E, t.child = y, (t.mode & Me) !== Ae && Yf(t, e.child, null, u), E;
    }
    function xk(e, t, i) {
      return (e.mode & Me) === Ae ? (h("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = je) : Lg(t) ? e.lanes = il : e.lanes = kr, null;
    }
    function Tk(e, t, i, l, u, c, v) {
      if (i)
        if (t.flags & bn) {
          t.flags &= ~bn;
          var H = eS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ny(e, t, v, H);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= tt, null;
          var J = l.children, P = l.fallback, ue = Ck(e, t, J, P, v), Re = t.child;
          return Re.memoizedState = dS(v), t.memoizedState = fS, ue;
        }
      else {
        if (c_(), (t.mode & Me) === Ae)
          return ny(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Lg(u)) {
          var y, E, R;
          {
            var w = _b(u);
            y = w.digest, E = w.message, R = w.stack;
          }
          var F;
          E ? F = new Error(E) : F = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var M = eS(F, y, R);
          return ny(e, t, v, M);
        }
        var I = di(v, e.childLanes);
        if (hl || I) {
          var W = py();
          if (W !== null) {
            var X = kh(W, v);
            if (X !== Bn && X !== c.retryLane) {
              c.retryLane = X;
              var Ee = on;
              na(e, X), Sr(W, e, X, Ee);
            }
          }
          US();
          var Ve = eS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ny(e, t, v, Ve);
        } else if (uC(u)) {
          t.flags |= tt, t.child = e.child;
          var Ue = qO.bind(null, e);
          return kb(u, Ue), null;
        } else {
          p_(t, u, c.treeContext);
          var Dt = l.children, Tt = pS(t, Dt);
          return Tt.flags |= $i, Tt;
        }
      }
    }
    function P1(e, t, i) {
      e.lanes = lt(e.lanes, t);
      var l = e.alternate;
      l !== null && (l.lanes = lt(l.lanes, t)), i0(e.return, t, i);
    }
    function Rk(e, t, i) {
      for (var l = t; l !== null; ) {
        if (l.tag === He) {
          var u = l.memoizedState;
          u !== null && P1(l, i, e);
        } else if (l.tag === Nt)
          P1(l, i, e);
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
    function wk(e) {
      for (var t = e, i = null; t !== null; ) {
        var l = t.alternate;
        l !== null && Mm(l) === null && (i = t), t = t.sibling;
      }
      return i;
    }
    function bk(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !oS[e])
        if (oS[e] = !0, typeof e == "string")
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
    function _k(e, t) {
      e !== void 0 && !ty[e] && (e !== "collapsed" && e !== "hidden" ? (ty[e] = !0, h('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (ty[e] = !0, h('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function B1(e, t) {
      {
        var i = _t(e), l = !i && typeof Mr(e) == "function";
        if (i || l) {
          var u = i ? "array" : "iterable";
          return h("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function kk(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (_t(e)) {
          for (var i = 0; i < e.length; i++)
            if (!B1(e[i], i))
              return;
        } else {
          var l = Mr(e);
          if (typeof l == "function") {
            var u = l.call(e);
            if (u)
              for (var c = u.next(), v = 0; !c.done; c = u.next()) {
                if (!B1(c.value, v))
                  return;
                v++;
              }
          } else
            h('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function hS(e, t, i, l, u) {
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
    function V1(e, t, i) {
      var l = t.pendingProps, u = l.revealOrder, c = l.tail, v = l.children;
      bk(u), _k(c, u), kk(v, u), Ai(e, t, v, i);
      var y = dl.current, E = p0(y, $p);
      if (E)
        y = v0(y, $p), t.flags |= tt;
      else {
        var R = e !== null && (e.flags & tt) !== Pe;
        R && Rk(t, t.child, i), y = Gf(y);
      }
      if (Zu(t, y), (t.mode & Me) === Ae)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var w = wk(t.child), F;
            w === null ? (F = t.child, t.child = null) : (F = w.sibling, w.sibling = null), hS(
              t,
              !1,
              // isBackwards
              F,
              w,
              c
            );
            break;
          }
          case "backwards": {
            var M = null, I = t.child;
            for (t.child = null; I !== null; ) {
              var W = I.alternate;
              if (W !== null && Mm(W) === null) {
                t.child = I;
                break;
              }
              var X = I.sibling;
              I.sibling = M, M = I, I = X;
            }
            hS(
              t,
              !0,
              // isBackwards
              M,
              null,
              // last
              c
            );
            break;
          }
          case "together": {
            hS(
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
    function Ok(e, t, i) {
      c0(t, t.stateNode.containerInfo);
      var l = t.pendingProps;
      return e === null ? t.child = Yf(t, null, l, i) : Ai(e, t, l, i), t.child;
    }
    var I1 = !1;
    function Dk(e, t, i) {
      var l = t.type, u = l._context, c = t.pendingProps, v = t.memoizedProps, y = c.value;
      {
        "value" in c || I1 || (I1 = !0, h("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var E = t.type.propTypes;
        E && sl(E, c, "prop", "Context.Provider");
      }
      if (UC(t, u, y), v !== null) {
        var R = v.value;
        if (ke(R, y)) {
          if (v.children === c.children && !fm())
            return Vo(e, t, i);
        } else
          b_(t, u, i);
      }
      var w = c.children;
      return Ai(e, t, w, i), t.child;
    }
    var $1 = !1;
    function Ak(e, t, i) {
      var l = t.type;
      l._context === void 0 ? l !== l.Consumer && ($1 || ($1 = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var u = t.pendingProps, c = u.children;
      typeof c != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Qf(t, i);
      var v = lr(l);
      gu(t);
      var y;
      return Zp.current = t, ni(!0), y = c(v), ni(!1), si(), t.flags |= Fl, Ai(e, t, y, i), t.child;
    }
    function nv() {
      hl = !0;
    }
    function ry(e, t) {
      (t.mode & Me) === Ae && e !== null && (e.alternate = null, t.alternate = null, t.flags |= cn);
    }
    function Vo(e, t, i) {
      return e !== null && (t.dependencies = e.dependencies), S1(), vv(t.lanes), di(i, t.childLanes) ? (R_(e, t), t.child) : null;
    }
    function Lk(e, t, i) {
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
        return c === null ? (l.deletions = [e], l.flags |= Bt) : c.push(e), i.flags |= cn, i;
      }
    }
    function mS(e, t) {
      var i = e.lanes;
      return !!di(i, t);
    }
    function Nk(e, t, i) {
      switch (t.tag) {
        case k:
          F1(t), t.stateNode, $f();
          break;
        case q:
          IC(t);
          break;
        case N: {
          var l = t.type;
          Gl(l) && pm(t);
          break;
        }
        case Q:
          c0(t, t.stateNode.containerInfo);
          break;
        case ve: {
          var u = t.memoizedProps.value, c = t.type._context;
          UC(t, c, u);
          break;
        }
        case yt:
          {
            var v = di(i, t.childLanes);
            v && (t.flags |= st);
            {
              var y = t.stateNode;
              y.effectDuration = 0, y.passiveEffectDuration = 0;
            }
          }
          break;
        case He: {
          var E = t.memoizedState;
          if (E !== null) {
            if (E.dehydrated !== null)
              return Zu(t, Gf(dl.current)), t.flags |= tt, null;
            var R = t.child, w = R.childLanes;
            if (di(i, w))
              return j1(e, t, i);
            Zu(t, Gf(dl.current));
            var F = Vo(e, t, i);
            return F !== null ? F.sibling : null;
          } else
            Zu(t, Gf(dl.current));
          break;
        }
        case Nt: {
          var M = (e.flags & tt) !== Pe, I = di(i, t.childLanes);
          if (M) {
            if (I)
              return V1(e, t, i);
            t.flags |= tt;
          }
          var W = t.memoizedState;
          if (W !== null && (W.rendering = null, W.tail = null, W.lastEffect = null), Zu(t, dl.current), I)
            break;
          return null;
        }
        case Ye:
        case ut:
          return t.lanes = re, N1(e, t, i);
      }
      return Vo(e, t, i);
    }
    function Y1(e, t, i) {
      if (t._debugNeedsRemount && e !== null)
        return Lk(e, t, WS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var l = e.memoizedProps, u = t.pendingProps;
        if (l !== u || fm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          hl = !0;
        else {
          var c = mS(e, i);
          if (!c && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & tt) === Pe)
            return hl = !1, Nk(e, t, i);
          (e.flags & Ds) !== Pe ? hl = !0 : hl = !1;
        }
      } else if (hl = !1, Pr() && i_(t)) {
        var v = t.index, y = a_();
        SC(t, y, v);
      }
      switch (t.lanes = re, t.tag) {
        case B:
          return vk(e, t, t.type, i);
        case un: {
          var E = t.elementType;
          return dk(e, t, E, i);
        }
        case O: {
          var R = t.type, w = t.pendingProps, F = t.elementType === R ? w : vl(R, w);
          return uS(e, t, R, F, i);
        }
        case N: {
          var M = t.type, I = t.pendingProps, W = t.elementType === M ? I : vl(M, I);
          return U1(e, t, M, W, i);
        }
        case k:
          return sk(e, t, i);
        case q:
          return ck(e, t, i);
        case K:
          return fk(e, t);
        case He:
          return j1(e, t, i);
        case Q:
          return Ok(e, t, i);
        case Be: {
          var X = t.type, Ee = t.pendingProps, Ve = t.elementType === X ? Ee : vl(X, Ee);
          return D1(e, t, X, Ve, i);
        }
        case ne:
          return lk(e, t, i);
        case ye:
          return ok(e, t, i);
        case yt:
          return uk(e, t, i);
        case ve:
          return Dk(e, t, i);
        case Ke:
          return Ak(e, t, i);
        case gt: {
          var Ue = t.type, Dt = t.pendingProps, Tt = vl(Ue, Dt);
          if (t.type !== t.elementType) {
            var H = Ue.propTypes;
            H && sl(
              H,
              Tt,
              // Resolved for outer only
              "prop",
              bt(Ue)
            );
          }
          return Tt = vl(Ue.type, Tt), A1(e, t, Ue, Tt, i);
        }
        case Je:
          return L1(e, t, t.type, t.pendingProps, i);
        case Dn: {
          var J = t.type, P = t.pendingProps, ue = t.elementType === J ? P : vl(J, P);
          return pk(e, t, J, ue, i);
        }
        case Nt:
          return V1(e, t, i);
        case Rn:
          break;
        case Ye:
          return N1(e, t, i);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function td(e) {
      e.flags |= st;
    }
    function W1(e) {
      e.flags |= ii, e.flags |= Vd;
    }
    var Q1, yS, q1, G1;
    Q1 = function(e, t, i, l) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === q || u.tag === K)
          tb(e, u.stateNode);
        else if (u.tag !== Q) {
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
    }, yS = function(e, t) {
    }, q1 = function(e, t, i, l, u) {
      var c = e.memoizedProps;
      if (c !== l) {
        var v = t.stateNode, y = f0(), E = rb(v, i, c, l, u, y);
        t.updateQueue = E, E && td(t);
      }
    }, G1 = function(e, t, i, l) {
      i !== l && td(t);
    };
    function rv(e, t) {
      if (!Pr())
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
    function Vr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, i = re, l = Pe;
      if (t) {
        if ((e.mode & nt) !== Ae) {
          for (var E = e.selfBaseDuration, R = e.child; R !== null; )
            i = lt(i, lt(R.lanes, R.childLanes)), l |= R.subtreeFlags & sr, l |= R.flags & sr, E += R.treeBaseDuration, R = R.sibling;
          e.treeBaseDuration = E;
        } else
          for (var w = e.child; w !== null; )
            i = lt(i, lt(w.lanes, w.childLanes)), l |= w.subtreeFlags & sr, l |= w.flags & sr, w.return = e, w = w.sibling;
        e.subtreeFlags |= l;
      } else {
        if ((e.mode & nt) !== Ae) {
          for (var u = e.actualDuration, c = e.selfBaseDuration, v = e.child; v !== null; )
            i = lt(i, lt(v.lanes, v.childLanes)), l |= v.subtreeFlags, l |= v.flags, u += v.actualDuration, c += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = u, e.treeBaseDuration = c;
        } else
          for (var y = e.child; y !== null; )
            i = lt(i, lt(y.lanes, y.childLanes)), l |= y.subtreeFlags, l |= y.flags, y.return = e, y = y.sibling;
        e.subtreeFlags |= l;
      }
      return e.childLanes = i, t;
    }
    function Mk(e, t, i) {
      if (g_() && (t.mode & Me) !== Ae && (t.flags & tt) === Pe)
        return bC(t), $f(), t.flags |= bn | wi | nr, !1;
      var l = gm(t);
      if (i !== null && i.dehydrated !== null)
        if (e === null) {
          if (!l)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (m_(t), Vr(t), (t.mode & nt) !== Ae) {
            var u = i !== null;
            if (u) {
              var c = t.child;
              c !== null && (t.treeBaseDuration -= c.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if ($f(), (t.flags & tt) === Pe && (t.memoizedState = null), t.flags |= st, Vr(t), (t.mode & nt) !== Ae) {
            var v = i !== null;
            if (v) {
              var y = t.child;
              y !== null && (t.treeBaseDuration -= y.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return _C(), !0;
    }
    function K1(e, t, i) {
      var l = t.pendingProps;
      switch (Ig(t), t.tag) {
        case B:
        case un:
        case Je:
        case O:
        case Be:
        case ne:
        case ye:
        case yt:
        case Ke:
        case gt:
          return Vr(t), null;
        case N: {
          var u = t.type;
          return Gl(u) && dm(t), Vr(t), null;
        }
        case k: {
          var c = t.stateNode;
          if (qf(t), Hg(t), m0(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), e === null || e.child === null) {
            var v = gm(t);
            if (v)
              td(t);
            else if (e !== null) {
              var y = e.memoizedState;
              // Check if this is a client root
              (!y.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & bn) !== Pe) && (t.flags |= Ii, _C());
            }
          }
          return yS(e, t), Vr(t), null;
        }
        case q: {
          d0(t);
          var E = VC(), R = t.type;
          if (e !== null && t.stateNode != null)
            q1(e, t, R, l, E), e.ref !== t.ref && W1(t);
          else {
            if (!l) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Vr(t), null;
            }
            var w = f0(), F = gm(t);
            if (F)
              v_(t, E, w) && td(t);
            else {
              var M = eb(R, l, E, w, t);
              Q1(M, t, !1, !1), t.stateNode = M, nb(M, R, l, E) && td(t);
            }
            t.ref !== null && W1(t);
          }
          return Vr(t), null;
        }
        case K: {
          var I = l;
          if (e && t.stateNode != null) {
            var W = e.memoizedProps;
            G1(e, t, W, I);
          } else {
            if (typeof I != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var X = VC(), Ee = f0(), Ve = gm(t);
            Ve ? h_(t) && td(t) : t.stateNode = ib(I, X, Ee, t);
          }
          return Vr(t), null;
        }
        case He: {
          Kf(t);
          var Ue = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Dt = Mk(e, t, Ue);
            if (!Dt)
              return t.flags & nr ? t : null;
          }
          if ((t.flags & tt) !== Pe)
            return t.lanes = i, (t.mode & nt) !== Ae && B0(t), t;
          var Tt = Ue !== null, H = e !== null && e.memoizedState !== null;
          if (Tt !== H && Tt) {
            var J = t.child;
            if (J.flags |= zl, (t.mode & Me) !== Ae) {
              var P = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !z);
              P || p0(dl.current, YC) ? UO() : US();
            }
          }
          var ue = t.updateQueue;
          if (ue !== null && (t.flags |= st), Vr(t), (t.mode & nt) !== Ae && Tt) {
            var Re = t.child;
            Re !== null && (t.treeBaseDuration -= Re.treeBaseDuration);
          }
          return null;
        }
        case Q:
          return qf(t), yS(e, t), e === null && Xb(t.stateNode.containerInfo), Vr(t), null;
        case ve:
          var Ce = t.type._context;
          return r0(Ce, t), Vr(t), null;
        case Dn: {
          var et = t.type;
          return Gl(et) && dm(t), Vr(t), null;
        }
        case Nt: {
          Kf(t);
          var at = t.memoizedState;
          if (at === null)
            return Vr(t), null;
          var Zt = (t.flags & tt) !== Pe, zt = at.rendering;
          if (zt === null)
            if (Zt)
              rv(at, !1);
            else {
              var Gn = zO() && (e === null || (e.flags & tt) === Pe);
              if (!Gn)
                for (var jt = t.child; jt !== null; ) {
                  var Vn = Mm(jt);
                  if (Vn !== null) {
                    Zt = !0, t.flags |= tt, rv(at, !1);
                    var yi = Vn.updateQueue;
                    return yi !== null && (t.updateQueue = yi, t.flags |= st), t.subtreeFlags = Pe, w_(t, i), Zu(t, v0(dl.current, $p)), t.child;
                  }
                  jt = jt.sibling;
                }
              at.tail !== null && Cn() > yx() && (t.flags |= tt, Zt = !0, rv(at, !1), t.lanes = yh);
            }
          else {
            if (!Zt) {
              var Qr = Mm(zt);
              if (Qr !== null) {
                t.flags |= tt, Zt = !0;
                var Ea = Qr.updateQueue;
                if (Ea !== null && (t.updateQueue = Ea, t.flags |= st), rv(at, !0), at.tail === null && at.tailMode === "hidden" && !zt.alternate && !Pr())
                  return Vr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Cn() * 2 - at.renderingStartTime > yx() && i !== kr && (t.flags |= tt, Zt = !0, rv(at, !1), t.lanes = yh);
            }
            if (at.isBackwards)
              zt.sibling = t.child, t.child = zt;
            else {
              var Mi = at.last;
              Mi !== null ? Mi.sibling = zt : t.child = zt, at.last = zt;
            }
          }
          if (at.tail !== null) {
            var Ui = at.tail;
            at.rendering = Ui, at.tail = Ui.sibling, at.renderingStartTime = Cn(), Ui.sibling = null;
            var gi = dl.current;
            return Zt ? gi = v0(gi, $p) : gi = Gf(gi), Zu(t, gi), Ui;
          }
          return Vr(t), null;
        }
        case Rn:
          break;
        case Ye:
        case ut: {
          MS(t);
          var Qo = t.memoizedState, sd = Qo !== null;
          if (e !== null) {
            var Sv = e.memoizedState, ro = Sv !== null;
            ro !== sd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ge && (t.flags |= zl);
          }
          return !sd || (t.mode & Me) === Ae ? Vr(t) : di(no, kr) && (Vr(t), t.subtreeFlags & (cn | st) && (t.flags |= zl)), null;
        }
        case Vt:
          return null;
        case At:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Uk(e, t, i) {
      switch (Ig(t), t.tag) {
        case N: {
          var l = t.type;
          Gl(l) && dm(t);
          var u = t.flags;
          return u & nr ? (t.flags = u & ~nr | tt, (t.mode & nt) !== Ae && B0(t), t) : null;
        }
        case k: {
          t.stateNode, qf(t), Hg(t), m0();
          var c = t.flags;
          return (c & nr) !== Pe && (c & tt) === Pe ? (t.flags = c & ~nr | tt, t) : null;
        }
        case q:
          return d0(t), null;
        case He: {
          Kf(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            $f();
          }
          var y = t.flags;
          return y & nr ? (t.flags = y & ~nr | tt, (t.mode & nt) !== Ae && B0(t), t) : null;
        }
        case Nt:
          return Kf(t), null;
        case Q:
          return qf(t), null;
        case ve:
          var E = t.type._context;
          return r0(E, t), null;
        case Ye:
        case ut:
          return MS(t), null;
        case Vt:
          return null;
        default:
          return null;
      }
    }
    function X1(e, t, i) {
      switch (Ig(t), t.tag) {
        case N: {
          var l = t.type.childContextTypes;
          l != null && dm(t);
          break;
        }
        case k: {
          t.stateNode, qf(t), Hg(t), m0();
          break;
        }
        case q: {
          d0(t);
          break;
        }
        case Q:
          qf(t);
          break;
        case He:
          Kf(t);
          break;
        case Nt:
          Kf(t);
          break;
        case ve:
          var u = t.type._context;
          r0(u, t);
          break;
        case Ye:
        case ut:
          MS(t);
          break;
      }
    }
    var J1 = null;
    J1 = /* @__PURE__ */ new Set();
    var iy = !1, Ir = !1, Fk = typeof WeakSet == "function" ? WeakSet : Set, Oe = null, nd = null, rd = null;
    function zk(e) {
      go(null, function() {
        throw e;
      }), Pd();
    }
    var jk = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & nt)
        try {
          eo(), t.componentWillUnmount();
        } finally {
          Zl(e);
        }
      else
        t.componentWillUnmount();
    };
    function Z1(e, t) {
      try {
        ns(pr, e);
      } catch (i) {
        pn(e, t, i);
      }
    }
    function gS(e, t, i) {
      try {
        jk(e, i);
      } catch (l) {
        pn(e, t, l);
      }
    }
    function Hk(e, t, i) {
      try {
        i.componentDidMount();
      } catch (l) {
        pn(e, t, l);
      }
    }
    function ex(e, t) {
      try {
        nx(e);
      } catch (i) {
        pn(e, t, i);
      }
    }
    function id(e, t) {
      var i = e.ref;
      if (i !== null)
        if (typeof i == "function") {
          var l;
          try {
            if (ct && Rt && e.mode & nt)
              try {
                eo(), l = i(null);
              } finally {
                Zl(e);
              }
            else
              l = i(null);
          } catch (u) {
            pn(e, t, u);
          }
          typeof l == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", rt(e));
        } else
          i.current = null;
    }
    function ay(e, t, i) {
      try {
        i();
      } catch (l) {
        pn(e, t, l);
      }
    }
    var tx = !1;
    function Pk(e, t) {
      Jw(e.containerInfo), Oe = t, Bk();
      var i = tx;
      return tx = !1, i;
    }
    function Bk() {
      for (; Oe !== null; ) {
        var e = Oe, t = e.child;
        (e.subtreeFlags & hu) !== Pe && t !== null ? (t.return = e, Oe = t) : Vk();
      }
    }
    function Vk() {
      for (; Oe !== null; ) {
        var e = Oe;
        Wt(e);
        try {
          Ik(e);
        } catch (i) {
          pn(e, e.return, i);
        }
        wn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Oe = t;
          return;
        }
        Oe = e.return;
      }
    }
    function Ik(e) {
      var t = e.alternate, i = e.flags;
      if ((i & Ii) !== Pe) {
        switch (Wt(e), e.tag) {
          case O:
          case Be:
          case Je:
            break;
          case N: {
            if (t !== null) {
              var l = t.memoizedProps, u = t.memoizedState, c = e.stateNode;
              e.type === e.elementType && !fc && (c.props !== e.memoizedProps && h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", rt(e) || "instance"), c.state !== e.memoizedState && h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", rt(e) || "instance"));
              var v = c.getSnapshotBeforeUpdate(e.elementType === e.type ? l : vl(e.type, l), u);
              {
                var y = J1;
                v === void 0 && !y.has(e.type) && (y.add(e.type), h("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", rt(e)));
              }
              c.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case k: {
            {
              var E = e.stateNode;
              Tb(E.containerInfo);
            }
            break;
          }
          case q:
          case K:
          case Q:
          case Dn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        wn();
      }
    }
    function ml(e, t, i) {
      var l = t.updateQueue, u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var c = u.next, v = c;
        do {
          if ((v.tag & e) === e) {
            var y = v.destroy;
            v.destroy = void 0, y !== void 0 && ((e & Br) !== ra ? vh(t) : (e & pr) !== ra && ya(t), (e & Kl) !== ra && mv(!0), ay(t, i, y), (e & Kl) !== ra && mv(!1), (e & Br) !== ra ? Ic() : (e & pr) !== ra && Su());
          }
          v = v.next;
        } while (v !== c);
      }
    }
    function ns(e, t) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var u = l.next, c = u;
        do {
          if ((c.tag & e) === e) {
            (e & Br) !== ra ? Pl(t) : (e & pr) !== ra && hh(t);
            var v = c.create;
            (e & Kl) !== ra && mv(!0), c.destroy = v(), (e & Kl) !== ra && mv(!1), (e & Br) !== ra ? Vc() : (e & pr) !== ra && As();
            {
              var y = c.destroy;
              if (y !== void 0 && typeof y != "function") {
                var E = void 0;
                (c.tag & pr) !== Pe ? E = "useLayoutEffect" : (c.tag & Kl) !== Pe ? E = "useInsertionEffect" : E = "useEffect";
                var R = void 0;
                y === null ? R = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof y.then == "function" ? R = `

It looks like you wrote ` + E + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + E + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : R = " You returned: " + y, h("%s must not return anything besides a function, which is used for clean-up.%s", E, R);
              }
            }
          }
          c = c.next;
        } while (c !== u);
      }
    }
    function $k(e, t) {
      if ((t.flags & st) !== Pe)
        switch (t.tag) {
          case yt: {
            var i = t.stateNode.passiveEffectDuration, l = t.memoizedProps, u = l.id, c = l.onPostCommit, v = y1(), y = t.alternate === null ? "mount" : "update";
            m1() && (y = "nested-update"), typeof c == "function" && c(u, y, i, v);
            var E = t.return;
            e:
              for (; E !== null; ) {
                switch (E.tag) {
                  case k:
                    var R = E.stateNode;
                    R.passiveEffectDuration += i;
                    break e;
                  case yt:
                    var w = E.stateNode;
                    w.passiveEffectDuration += i;
                    break e;
                }
                E = E.return;
              }
            break;
          }
        }
    }
    function Yk(e, t, i, l) {
      if ((i.flags & br) !== Pe)
        switch (i.tag) {
          case O:
          case Be:
          case Je: {
            if (!Ir)
              if (i.mode & nt)
                try {
                  eo(), ns(pr | dr, i);
                } finally {
                  Zl(i);
                }
              else
                ns(pr | dr, i);
            break;
          }
          case N: {
            var u = i.stateNode;
            if (i.flags & st && !Ir)
              if (t === null)
                if (i.type === i.elementType && !fc && (u.props !== i.memoizedProps && h("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", rt(i) || "instance"), u.state !== i.memoizedState && h("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", rt(i) || "instance")), i.mode & nt)
                  try {
                    eo(), u.componentDidMount();
                  } finally {
                    Zl(i);
                  }
                else
                  u.componentDidMount();
              else {
                var c = i.elementType === i.type ? t.memoizedProps : vl(i.type, t.memoizedProps), v = t.memoizedState;
                if (i.type === i.elementType && !fc && (u.props !== i.memoizedProps && h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", rt(i) || "instance"), u.state !== i.memoizedState && h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", rt(i) || "instance")), i.mode & nt)
                  try {
                    eo(), u.componentDidUpdate(c, v, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Zl(i);
                  }
                else
                  u.componentDidUpdate(c, v, u.__reactInternalSnapshotBeforeUpdate);
              }
            var y = i.updateQueue;
            y !== null && (i.type === i.elementType && !fc && (u.props !== i.memoizedProps && h("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", rt(i) || "instance"), u.state !== i.memoizedState && h("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", rt(i) || "instance")), BC(i, y, u));
            break;
          }
          case k: {
            var E = i.updateQueue;
            if (E !== null) {
              var R = null;
              if (i.child !== null)
                switch (i.child.tag) {
                  case q:
                    R = i.child.stateNode;
                    break;
                  case N:
                    R = i.child.stateNode;
                    break;
                }
              BC(i, E, R);
            }
            break;
          }
          case q: {
            var w = i.stateNode;
            if (t === null && i.flags & st) {
              var F = i.type, M = i.memoizedProps;
              sb(w, F, M);
            }
            break;
          }
          case K:
            break;
          case Q:
            break;
          case yt: {
            {
              var I = i.memoizedProps, W = I.onCommit, X = I.onRender, Ee = i.stateNode.effectDuration, Ve = y1(), Ue = t === null ? "mount" : "update";
              m1() && (Ue = "nested-update"), typeof X == "function" && X(i.memoizedProps.id, Ue, i.actualDuration, i.treeBaseDuration, i.actualStartTime, Ve);
              {
                typeof W == "function" && W(i.memoizedProps.id, Ue, Ee, Ve), VO(i);
                var Dt = i.return;
                e:
                  for (; Dt !== null; ) {
                    switch (Dt.tag) {
                      case k:
                        var Tt = Dt.stateNode;
                        Tt.effectDuration += Ee;
                        break e;
                      case yt:
                        var H = Dt.stateNode;
                        H.effectDuration += Ee;
                        break e;
                    }
                    Dt = Dt.return;
                  }
              }
            }
            break;
          }
          case He: {
            Zk(e, i);
            break;
          }
          case Nt:
          case Dn:
          case Rn:
          case Ye:
          case ut:
          case At:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ir || i.flags & ii && nx(i);
    }
    function Wk(e) {
      switch (e.tag) {
        case O:
        case Be:
        case Je: {
          if (e.mode & nt)
            try {
              eo(), Z1(e, e.return);
            } finally {
              Zl(e);
            }
          else
            Z1(e, e.return);
          break;
        }
        case N: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Hk(e, e.return, t), ex(e, e.return);
          break;
        }
        case q: {
          ex(e, e.return);
          break;
        }
      }
    }
    function Qk(e, t) {
      for (var i = null, l = e; ; ) {
        if (l.tag === q) {
          if (i === null) {
            i = l;
            try {
              var u = l.stateNode;
              t ? Sb(u) : Cb(l.stateNode, l.memoizedProps);
            } catch (v) {
              pn(e, e.return, v);
            }
          }
        } else if (l.tag === K) {
          if (i === null)
            try {
              var c = l.stateNode;
              t ? Eb(c) : xb(c, l.memoizedProps);
            } catch (v) {
              pn(e, e.return, v);
            }
        } else if (!((l.tag === Ye || l.tag === ut) && l.memoizedState !== null && l !== e)) {
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
    function nx(e) {
      var t = e.ref;
      if (t !== null) {
        var i = e.stateNode, l;
        switch (e.tag) {
          case q:
            l = i;
            break;
          default:
            l = i;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & nt)
            try {
              eo(), u = t(l);
            } finally {
              Zl(e);
            }
          else
            u = t(l);
          typeof u == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", rt(e));
        } else
          t.hasOwnProperty("current") || h("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", rt(e)), t.current = l;
      }
    }
    function qk(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function rx(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, rx(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === q) {
          var i = e.stateNode;
          i !== null && e_(i);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Gk(e) {
      for (var t = e.return; t !== null; ) {
        if (ix(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ix(e) {
      return e.tag === q || e.tag === k || e.tag === Q;
    }
    function ax(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || ix(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== q && t.tag !== K && t.tag !== Xt; ) {
            if (t.flags & cn || t.child === null || t.tag === Q)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & cn))
            return t.stateNode;
        }
    }
    function Kk(e) {
      var t = Gk(e);
      switch (t.tag) {
        case q: {
          var i = t.stateNode;
          t.flags & Qt && (oC(i), t.flags &= ~Qt);
          var l = ax(e);
          ES(e, l, i);
          break;
        }
        case k:
        case Q: {
          var u = t.stateNode.containerInfo, c = ax(e);
          SS(e, c, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function SS(e, t, i) {
      var l = e.tag, u = l === q || l === K;
      if (u) {
        var c = e.stateNode;
        t ? hb(i, c, t) : pb(i, c);
      } else if (l !== Q) {
        var v = e.child;
        if (v !== null) {
          SS(v, t, i);
          for (var y = v.sibling; y !== null; )
            SS(y, t, i), y = y.sibling;
        }
      }
    }
    function ES(e, t, i) {
      var l = e.tag, u = l === q || l === K;
      if (u) {
        var c = e.stateNode;
        t ? vb(i, c, t) : db(i, c);
      } else if (l !== Q) {
        var v = e.child;
        if (v !== null) {
          ES(v, t, i);
          for (var y = v.sibling; y !== null; )
            ES(y, t, i), y = y.sibling;
        }
      }
    }
    var $r = null, yl = !1;
    function Xk(e, t, i) {
      {
        var l = t;
        e:
          for (; l !== null; ) {
            switch (l.tag) {
              case q: {
                $r = l.stateNode, yl = !1;
                break e;
              }
              case k: {
                $r = l.stateNode.containerInfo, yl = !0;
                break e;
              }
              case Q: {
                $r = l.stateNode.containerInfo, yl = !0;
                break e;
              }
            }
            l = l.return;
          }
        if ($r === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        lx(e, t, i), $r = null, yl = !1;
      }
      qk(i);
    }
    function rs(e, t, i) {
      for (var l = i.child; l !== null; )
        lx(e, t, l), l = l.sibling;
    }
    function lx(e, t, i) {
      switch (Co(i), i.tag) {
        case q:
          Ir || id(i, t);
        case K: {
          {
            var l = $r, u = yl;
            $r = null, rs(e, t, i), $r = l, yl = u, $r !== null && (yl ? yb($r, i.stateNode) : mb($r, i.stateNode));
          }
          return;
        }
        case Xt: {
          $r !== null && (yl ? gb($r, i.stateNode) : Ag($r, i.stateNode));
          return;
        }
        case Q: {
          {
            var c = $r, v = yl;
            $r = i.stateNode.containerInfo, yl = !0, rs(e, t, i), $r = c, yl = v;
          }
          return;
        }
        case O:
        case Be:
        case gt:
        case Je: {
          if (!Ir) {
            var y = i.updateQueue;
            if (y !== null) {
              var E = y.lastEffect;
              if (E !== null) {
                var R = E.next, w = R;
                do {
                  var F = w, M = F.destroy, I = F.tag;
                  M !== void 0 && ((I & Kl) !== ra ? ay(i, t, M) : (I & pr) !== ra && (ya(i), i.mode & nt ? (eo(), ay(i, t, M), Zl(i)) : ay(i, t, M), Su())), w = w.next;
                } while (w !== R);
              }
            }
          }
          rs(e, t, i);
          return;
        }
        case N: {
          if (!Ir) {
            id(i, t);
            var W = i.stateNode;
            typeof W.componentWillUnmount == "function" && gS(i, t, W);
          }
          rs(e, t, i);
          return;
        }
        case Rn: {
          rs(e, t, i);
          return;
        }
        case Ye: {
          if (
            // TODO: Remove this dead flag
            i.mode & Me
          ) {
            var X = Ir;
            Ir = X || i.memoizedState !== null, rs(e, t, i), Ir = X;
          } else
            rs(e, t, i);
          break;
        }
        default: {
          rs(e, t, i);
          return;
        }
      }
    }
    function Jk(e) {
      e.memoizedState;
    }
    function Zk(e, t) {
      var i = t.memoizedState;
      if (i === null) {
        var l = t.alternate;
        if (l !== null) {
          var u = l.memoizedState;
          if (u !== null) {
            var c = u.dehydrated;
            c !== null && zb(c);
          }
        }
      }
    }
    function ox(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var i = e.stateNode;
        i === null && (i = e.stateNode = new Fk()), t.forEach(function(l) {
          var u = GO.bind(null, e, l);
          if (!i.has(l)) {
            if (i.add(l), ki)
              if (nd !== null && rd !== null)
                hv(rd, nd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            l.then(u, u);
          }
        });
      }
    }
    function eO(e, t, i) {
      nd = i, rd = e, Wt(t), ux(t, e), Wt(t), nd = null, rd = null;
    }
    function gl(e, t, i) {
      var l = t.deletions;
      if (l !== null)
        for (var u = 0; u < l.length; u++) {
          var c = l[u];
          try {
            Xk(e, t, c);
          } catch (E) {
            pn(c, t, E);
          }
        }
      var v = Ec();
      if (t.subtreeFlags & oi)
        for (var y = t.child; y !== null; )
          Wt(y), ux(y, e), y = y.sibling;
      Wt(v);
    }
    function ux(e, t, i) {
      var l = e.alternate, u = e.flags;
      switch (e.tag) {
        case O:
        case Be:
        case gt:
        case Je: {
          if (gl(t, e), to(e), u & st) {
            try {
              ml(Kl | dr, e, e.return), ns(Kl | dr, e);
            } catch (et) {
              pn(e, e.return, et);
            }
            if (e.mode & nt) {
              try {
                eo(), ml(pr | dr, e, e.return);
              } catch (et) {
                pn(e, e.return, et);
              }
              Zl(e);
            } else
              try {
                ml(pr | dr, e, e.return);
              } catch (et) {
                pn(e, e.return, et);
              }
          }
          return;
        }
        case N: {
          gl(t, e), to(e), u & ii && l !== null && id(l, l.return);
          return;
        }
        case q: {
          gl(t, e), to(e), u & ii && l !== null && id(l, l.return);
          {
            if (e.flags & Qt) {
              var c = e.stateNode;
              try {
                oC(c);
              } catch (et) {
                pn(e, e.return, et);
              }
            }
            if (u & st) {
              var v = e.stateNode;
              if (v != null) {
                var y = e.memoizedProps, E = l !== null ? l.memoizedProps : y, R = e.type, w = e.updateQueue;
                if (e.updateQueue = null, w !== null)
                  try {
                    cb(v, w, R, E, y, e);
                  } catch (et) {
                    pn(e, e.return, et);
                  }
              }
            }
          }
          return;
        }
        case K: {
          if (gl(t, e), to(e), u & st) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var F = e.stateNode, M = e.memoizedProps, I = l !== null ? l.memoizedProps : M;
            try {
              fb(F, I, M);
            } catch (et) {
              pn(e, e.return, et);
            }
          }
          return;
        }
        case k: {
          if (gl(t, e), to(e), u & st && l !== null) {
            var W = l.memoizedState;
            if (W.isDehydrated)
              try {
                Fb(t.containerInfo);
              } catch (et) {
                pn(e, e.return, et);
              }
          }
          return;
        }
        case Q: {
          gl(t, e), to(e);
          return;
        }
        case He: {
          gl(t, e), to(e);
          var X = e.child;
          if (X.flags & zl) {
            var Ee = X.stateNode, Ve = X.memoizedState, Ue = Ve !== null;
            if (Ee.isHidden = Ue, Ue) {
              var Dt = X.alternate !== null && X.alternate.memoizedState !== null;
              Dt || MO();
            }
          }
          if (u & st) {
            try {
              Jk(e);
            } catch (et) {
              pn(e, e.return, et);
            }
            ox(e);
          }
          return;
        }
        case Ye: {
          var Tt = l !== null && l.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Me
          ) {
            var H = Ir;
            Ir = H || Tt, gl(t, e), Ir = H;
          } else
            gl(t, e);
          if (to(e), u & zl) {
            var J = e.stateNode, P = e.memoizedState, ue = P !== null, Re = e;
            if (J.isHidden = ue, ue && !Tt && (Re.mode & Me) !== Ae) {
              Oe = Re;
              for (var Ce = Re.child; Ce !== null; )
                Oe = Ce, nO(Ce), Ce = Ce.sibling;
            }
            Qk(Re, ue);
          }
          return;
        }
        case Nt: {
          gl(t, e), to(e), u & st && ox(e);
          return;
        }
        case Rn:
          return;
        default: {
          gl(t, e), to(e);
          return;
        }
      }
    }
    function to(e) {
      var t = e.flags;
      if (t & cn) {
        try {
          Kk(e);
        } catch (i) {
          pn(e, e.return, i);
        }
        e.flags &= ~cn;
      }
      t & $i && (e.flags &= ~$i);
    }
    function tO(e, t, i) {
      nd = i, rd = t, Oe = e, sx(e, t, i), nd = null, rd = null;
    }
    function sx(e, t, i) {
      for (var l = (e.mode & Me) !== Ae; Oe !== null; ) {
        var u = Oe, c = u.child;
        if (u.tag === Ye && l) {
          var v = u.memoizedState !== null, y = v || iy;
          if (y) {
            CS(e, t, i);
            continue;
          } else {
            var E = u.alternate, R = E !== null && E.memoizedState !== null, w = R || Ir, F = iy, M = Ir;
            iy = y, Ir = w, Ir && !M && (Oe = u, rO(u));
            for (var I = c; I !== null; )
              Oe = I, sx(
                I,
                // New root; bubble back up to here and stop.
                t,
                i
              ), I = I.sibling;
            Oe = u, iy = F, Ir = M, CS(e, t, i);
            continue;
          }
        }
        (u.subtreeFlags & br) !== Pe && c !== null ? (c.return = u, Oe = c) : CS(e, t, i);
      }
    }
    function CS(e, t, i) {
      for (; Oe !== null; ) {
        var l = Oe;
        if ((l.flags & br) !== Pe) {
          var u = l.alternate;
          Wt(l);
          try {
            Yk(t, u, l, i);
          } catch (v) {
            pn(l, l.return, v);
          }
          wn();
        }
        if (l === e) {
          Oe = null;
          return;
        }
        var c = l.sibling;
        if (c !== null) {
          c.return = l.return, Oe = c;
          return;
        }
        Oe = l.return;
      }
    }
    function nO(e) {
      for (; Oe !== null; ) {
        var t = Oe, i = t.child;
        switch (t.tag) {
          case O:
          case Be:
          case gt:
          case Je: {
            if (t.mode & nt)
              try {
                eo(), ml(pr, t, t.return);
              } finally {
                Zl(t);
              }
            else
              ml(pr, t, t.return);
            break;
          }
          case N: {
            id(t, t.return);
            var l = t.stateNode;
            typeof l.componentWillUnmount == "function" && gS(t, t.return, l);
            break;
          }
          case q: {
            id(t, t.return);
            break;
          }
          case Ye: {
            var u = t.memoizedState !== null;
            if (u) {
              cx(e);
              continue;
            }
            break;
          }
        }
        i !== null ? (i.return = t, Oe = i) : cx(e);
      }
    }
    function cx(e) {
      for (; Oe !== null; ) {
        var t = Oe;
        if (t === e) {
          Oe = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, Oe = i;
          return;
        }
        Oe = t.return;
      }
    }
    function rO(e) {
      for (; Oe !== null; ) {
        var t = Oe, i = t.child;
        if (t.tag === Ye) {
          var l = t.memoizedState !== null;
          if (l) {
            fx(e);
            continue;
          }
        }
        i !== null ? (i.return = t, Oe = i) : fx(e);
      }
    }
    function fx(e) {
      for (; Oe !== null; ) {
        var t = Oe;
        Wt(t);
        try {
          Wk(t);
        } catch (l) {
          pn(t, t.return, l);
        }
        if (wn(), t === e) {
          Oe = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, Oe = i;
          return;
        }
        Oe = t.return;
      }
    }
    function iO(e, t, i, l) {
      Oe = t, aO(t, e, i, l);
    }
    function aO(e, t, i, l) {
      for (; Oe !== null; ) {
        var u = Oe, c = u.child;
        (u.subtreeFlags & Yi) !== Pe && c !== null ? (c.return = u, Oe = c) : lO(e, t, i, l);
      }
    }
    function lO(e, t, i, l) {
      for (; Oe !== null; ) {
        var u = Oe;
        if ((u.flags & vn) !== Pe) {
          Wt(u);
          try {
            oO(t, u, i, l);
          } catch (v) {
            pn(u, u.return, v);
          }
          wn();
        }
        if (u === e) {
          Oe = null;
          return;
        }
        var c = u.sibling;
        if (c !== null) {
          c.return = u.return, Oe = c;
          return;
        }
        Oe = u.return;
      }
    }
    function oO(e, t, i, l) {
      switch (t.tag) {
        case O:
        case Be:
        case Je: {
          if (t.mode & nt) {
            P0();
            try {
              ns(Br | dr, t);
            } finally {
              H0(t);
            }
          } else
            ns(Br | dr, t);
          break;
        }
      }
    }
    function uO(e) {
      Oe = e, sO();
    }
    function sO() {
      for (; Oe !== null; ) {
        var e = Oe, t = e.child;
        if ((Oe.flags & Bt) !== Pe) {
          var i = e.deletions;
          if (i !== null) {
            for (var l = 0; l < i.length; l++) {
              var u = i[l];
              Oe = u, dO(u, e);
            }
            {
              var c = e.alternate;
              if (c !== null) {
                var v = c.child;
                if (v !== null) {
                  c.child = null;
                  do {
                    var y = v.sibling;
                    v.sibling = null, v = y;
                  } while (v !== null);
                }
              }
            }
            Oe = e;
          }
        }
        (e.subtreeFlags & Yi) !== Pe && t !== null ? (t.return = e, Oe = t) : cO();
      }
    }
    function cO() {
      for (; Oe !== null; ) {
        var e = Oe;
        (e.flags & vn) !== Pe && (Wt(e), fO(e), wn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Oe = t;
          return;
        }
        Oe = e.return;
      }
    }
    function fO(e) {
      switch (e.tag) {
        case O:
        case Be:
        case Je: {
          e.mode & nt ? (P0(), ml(Br | dr, e, e.return), H0(e)) : ml(Br | dr, e, e.return);
          break;
        }
      }
    }
    function dO(e, t) {
      for (; Oe !== null; ) {
        var i = Oe;
        Wt(i), vO(i, t), wn();
        var l = i.child;
        l !== null ? (l.return = i, Oe = l) : pO(e);
      }
    }
    function pO(e) {
      for (; Oe !== null; ) {
        var t = Oe, i = t.sibling, l = t.return;
        if (rx(t), t === e) {
          Oe = null;
          return;
        }
        if (i !== null) {
          i.return = l, Oe = i;
          return;
        }
        Oe = l;
      }
    }
    function vO(e, t) {
      switch (e.tag) {
        case O:
        case Be:
        case Je: {
          e.mode & nt ? (P0(), ml(Br, e, t), H0(e)) : ml(Br, e, t);
          break;
        }
      }
    }
    function hO(e) {
      switch (e.tag) {
        case O:
        case Be:
        case Je: {
          try {
            ns(pr | dr, e);
          } catch (i) {
            pn(e, e.return, i);
          }
          break;
        }
        case N: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (i) {
            pn(e, e.return, i);
          }
          break;
        }
      }
    }
    function mO(e) {
      switch (e.tag) {
        case O:
        case Be:
        case Je: {
          try {
            ns(Br | dr, e);
          } catch (t) {
            pn(e, e.return, t);
          }
          break;
        }
      }
    }
    function yO(e) {
      switch (e.tag) {
        case O:
        case Be:
        case Je: {
          try {
            ml(pr | dr, e, e.return);
          } catch (i) {
            pn(e, e.return, i);
          }
          break;
        }
        case N: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && gS(e, e.return, t);
          break;
        }
      }
    }
    function gO(e) {
      switch (e.tag) {
        case O:
        case Be:
        case Je:
          try {
            ml(Br | dr, e, e.return);
          } catch (t) {
            pn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var iv = Symbol.for;
      iv("selector.component"), iv("selector.has_pseudo_class"), iv("selector.role"), iv("selector.test_id"), iv("selector.text");
    }
    var SO = [];
    function EO() {
      SO.forEach(function(e) {
        return e();
      });
    }
    var CO = p.ReactCurrentActQueue;
    function xO(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), i = typeof jest < "u";
        return i && t !== !1;
      }
    }
    function dx() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && CO.current !== null && h("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var TO = Math.ceil, xS = p.ReactCurrentDispatcher, TS = p.ReactCurrentOwner, Yr = p.ReactCurrentBatchConfig, Sl = p.ReactCurrentActQueue, mr = (
      /*             */
      0
    ), px = (
      /*               */
      1
    ), Wr = (
      /*                */
      2
    ), Pa = (
      /*                */
      4
    ), Io = 0, av = 1, dc = 2, ly = 3, lv = 4, vx = 5, RS = 6, Ot = mr, Li = null, Fn = null, yr = re, no = re, wS = Qu(re), gr = Io, ov = null, oy = re, uv = re, uy = re, sv = null, ia = null, bS = 0, hx = 500, mx = 1 / 0, RO = 500, $o = null;
    function cv() {
      mx = Cn() + RO;
    }
    function yx() {
      return mx;
    }
    var sy = !1, _S = null, ad = null, pc = !1, is = null, fv = re, kS = [], OS = null, wO = 50, dv = 0, DS = null, AS = !1, cy = !1, bO = 50, ld = 0, fy = null, pv = on, dy = re, gx = !1;
    function py() {
      return Li;
    }
    function Ni() {
      return (Ot & (Wr | Pa)) !== mr ? Cn() : (pv !== on || (pv = Cn()), pv);
    }
    function as(e) {
      var t = e.mode;
      if ((t & Me) === Ae)
        return je;
      if ((Ot & Wr) !== mr && yr !== re)
        return ku(yr);
      var i = C_() !== E_;
      if (i) {
        if (Yr.transition !== null) {
          var l = Yr.transition;
          l._updatedFibers || (l._updatedFibers = /* @__PURE__ */ new Set()), l._updatedFibers.add(e);
        }
        return dy === Bn && (dy = wh()), dy;
      }
      var u = Ki();
      if (u !== Bn)
        return u;
      var c = ab();
      return c;
    }
    function _O(e) {
      var t = e.mode;
      return (t & Me) === Ae ? je : fi();
    }
    function Sr(e, t, i, l) {
      XO(), gx && h("useInsertionEffect must not schedule updates."), AS && (cy = !0), Oo(e, i, l), (Ot & Wr) !== re && e === Li ? eD(t) : (ki && pf(e, t, i), tD(t), e === Li && ((Ot & Wr) === mr && (uv = lt(uv, i)), gr === lv && ls(e, yr)), aa(e, l), i === je && Ot === mr && (t.mode & Me) === Ae && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Sl.isBatchingLegacy && (cv(), gC()));
    }
    function kO(e, t, i) {
      var l = e.current;
      l.lanes = t, Oo(e, t, i), aa(e, i);
    }
    function OO(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ot & Wr) !== mr
      );
    }
    function aa(e, t) {
      var i = e.callbackNode;
      Eh(e, t);
      var l = _o(e, e === Li ? yr : re);
      if (l === re) {
        i !== null && Mx(i), e.callbackNode = null, e.callbackPriority = Bn;
        return;
      }
      var u = Nn(l), c = e.callbackPriority;
      if (c === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Sl.current !== null && i !== jS)) {
        i == null && c !== je && h("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      i != null && Mx(i);
      var v;
      if (u === je)
        e.tag === qu ? (Sl.isBatchingLegacy !== null && (Sl.didScheduleLegacyUpdate = !0), r_(Cx.bind(null, e))) : yC(Cx.bind(null, e)), Sl.current !== null ? Sl.current.push(Gu) : ob(function() {
          (Ot & (Wr | Pa)) === mr && Gu();
        }), v = null;
      else {
        var y;
        switch (fr(l)) {
          case Mn:
            y = Hc;
            break;
          case al:
            y = Eo;
            break;
          case Aa:
            y = Da;
            break;
          case Ou:
            y = Pc;
            break;
          default:
            y = Da;
            break;
        }
        v = HS(y, Sx.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = v;
    }
    function Sx(e, t) {
      if (Q_(), pv = on, dy = re, (Ot & (Wr | Pa)) !== mr)
        throw new Error("Should not already be working.");
      var i = e.callbackNode, l = Wo();
      if (l && e.callbackNode !== i)
        return null;
      var u = _o(e, e === Li ? yr : re);
      if (u === re)
        return null;
      var c = !Hs(e, u) && !Rh(e, u) && !t, v = c ? HO(e, u) : hy(e, u);
      if (v !== Io) {
        if (v === dc) {
          var y = Vl(e);
          y !== re && (u = y, v = LS(e, y));
        }
        if (v === av) {
          var E = ov;
          throw vc(e, re), ls(e, u), aa(e, Cn()), E;
        }
        if (v === RS)
          ls(e, u);
        else {
          var R = !Hs(e, u), w = e.current.alternate;
          if (R && !AO(w)) {
            if (v = hy(e, u), v === dc) {
              var F = Vl(e);
              F !== re && (u = F, v = LS(e, F));
            }
            if (v === av) {
              var M = ov;
              throw vc(e, re), ls(e, u), aa(e, Cn()), M;
            }
          }
          e.finishedWork = w, e.finishedLanes = u, DO(e, v, u);
        }
      }
      return aa(e, Cn()), e.callbackNode === i ? Sx.bind(null, e) : null;
    }
    function LS(e, t) {
      var i = sv;
      if (vf(e)) {
        var l = vc(e, t);
        l.flags |= bn, Kb(e.containerInfo);
      }
      var u = hy(e, t);
      if (u !== dc) {
        var c = ia;
        ia = i, c !== null && Ex(c);
      }
      return u;
    }
    function Ex(e) {
      ia === null ? ia = e : ia.push.apply(ia, e);
    }
    function DO(e, t, i) {
      switch (t) {
        case Io:
        case av:
          throw new Error("Root did not complete. This is a bug in React.");
        case dc: {
          hc(e, ia, $o);
          break;
        }
        case ly: {
          if (ls(e, i), Ch(i) && // do not delay if we're inside an act() scope
          !Ux()) {
            var l = bS + hx - Cn();
            if (l > 10) {
              var u = _o(e, re);
              if (u !== re)
                break;
              var c = e.suspendedLanes;
              if (!ko(c, i)) {
                Ni(), ff(e, c);
                break;
              }
              e.timeoutHandle = Og(hc.bind(null, e, ia, $o), l);
              break;
            }
          }
          hc(e, ia, $o);
          break;
        }
        case lv: {
          if (ls(e, i), Th(i))
            break;
          if (!Ux()) {
            var v = gh(e, i), y = v, E = Cn() - y, R = KO(E) - E;
            if (R > 10) {
              e.timeoutHandle = Og(hc.bind(null, e, ia, $o), R);
              break;
            }
          }
          hc(e, ia, $o);
          break;
        }
        case vx: {
          hc(e, ia, $o);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function AO(e) {
      for (var t = e; ; ) {
        if (t.flags & Os) {
          var i = t.updateQueue;
          if (i !== null) {
            var l = i.stores;
            if (l !== null)
              for (var u = 0; u < l.length; u++) {
                var c = l[u], v = c.getSnapshot, y = c.value;
                try {
                  if (!ke(v(), y))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var E = t.child;
        if (t.subtreeFlags & Os && E !== null) {
          E.return = t, t = E;
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
    function ls(e, t) {
      t = Ps(t, uy), t = Ps(t, uv), _h(e, t);
    }
    function Cx(e) {
      if (q_(), (Ot & (Wr | Pa)) !== mr)
        throw new Error("Should not already be working.");
      Wo();
      var t = _o(e, re);
      if (!di(t, je))
        return aa(e, Cn()), null;
      var i = hy(e, t);
      if (e.tag !== qu && i === dc) {
        var l = Vl(e);
        l !== re && (t = l, i = LS(e, l));
      }
      if (i === av) {
        var u = ov;
        throw vc(e, re), ls(e, t), aa(e, Cn()), u;
      }
      if (i === RS)
        throw new Error("Root did not complete. This is a bug in React.");
      var c = e.current.alternate;
      return e.finishedWork = c, e.finishedLanes = t, hc(e, ia, $o), aa(e, Cn()), null;
    }
    function LO(e, t) {
      t !== re && (rp(e, lt(t, je)), aa(e, Cn()), (Ot & (Wr | Pa)) === mr && (cv(), Gu()));
    }
    function NS(e, t) {
      var i = Ot;
      Ot |= px;
      try {
        return e(t);
      } finally {
        Ot = i, Ot === mr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Sl.isBatchingLegacy && (cv(), gC());
      }
    }
    function NO(e, t, i, l, u) {
      var c = Ki(), v = Yr.transition;
      try {
        return Yr.transition = null, _n(Mn), e(t, i, l, u);
      } finally {
        _n(c), Yr.transition = v, Ot === mr && cv();
      }
    }
    function Yo(e) {
      is !== null && is.tag === qu && (Ot & (Wr | Pa)) === mr && Wo();
      var t = Ot;
      Ot |= px;
      var i = Yr.transition, l = Ki();
      try {
        return Yr.transition = null, _n(Mn), e ? e() : void 0;
      } finally {
        _n(l), Yr.transition = i, Ot = t, (Ot & (Wr | Pa)) === mr && Gu();
      }
    }
    function xx() {
      return (Ot & (Wr | Pa)) !== mr;
    }
    function vy(e, t) {
      hi(wS, no, e), no = lt(no, t);
    }
    function MS(e) {
      no = wS.current, vi(wS, e);
    }
    function vc(e, t) {
      e.finishedWork = null, e.finishedLanes = re;
      var i = e.timeoutHandle;
      if (i !== Dg && (e.timeoutHandle = Dg, lb(i)), Fn !== null)
        for (var l = Fn.return; l !== null; ) {
          var u = l.alternate;
          X1(u, l), l = l.return;
        }
      Li = e;
      var c = mc(e.current, null);
      return Fn = c, yr = no = t, gr = Io, ov = null, oy = re, uv = re, uy = re, sv = null, ia = null, k_(), fl.discardPendingWarnings(), c;
    }
    function Tx(e, t) {
      do {
        var i = Fn;
        try {
          if (Rm(), QC(), wn(), TS.current = null, i === null || i.return === null) {
            gr = av, ov = t, Fn = null;
            return;
          }
          if (ct && i.mode & nt && Zm(i, !0), ft)
            if (si(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var l = t;
              xo(i, l, yr);
            } else
              Ls(i, t, yr);
          rk(e, i.return, i, t, yr), _x(i);
        } catch (u) {
          t = u, Fn === i && i !== null ? (i = i.return, Fn = i) : i = Fn;
          continue;
        }
        return;
      } while (!0);
    }
    function Rx() {
      var e = xS.current;
      return xS.current = qm, e === null ? qm : e;
    }
    function wx(e) {
      xS.current = e;
    }
    function MO() {
      bS = Cn();
    }
    function vv(e) {
      oy = lt(e, oy);
    }
    function UO() {
      gr === Io && (gr = ly);
    }
    function US() {
      (gr === Io || gr === ly || gr === dc) && (gr = lv), Li !== null && (js(oy) || js(uv)) && ls(Li, yr);
    }
    function FO(e) {
      gr !== lv && (gr = dc), sv === null ? sv = [e] : sv.push(e);
    }
    function zO() {
      return gr === Io;
    }
    function hy(e, t) {
      var i = Ot;
      Ot |= Wr;
      var l = Rx();
      if (Li !== e || yr !== t) {
        if (ki) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (hv(e, yr), u.clear()), ip(e, t);
        }
        $o = Vs(), vc(e, t);
      }
      hn(t);
      do
        try {
          jO();
          break;
        } catch (c) {
          Tx(e, c);
        }
      while (!0);
      if (Rm(), Ot = i, wx(l), Fn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Yc(), Li = null, yr = re, gr;
    }
    function jO() {
      for (; Fn !== null; )
        bx(Fn);
    }
    function HO(e, t) {
      var i = Ot;
      Ot |= Wr;
      var l = Rx();
      if (Li !== e || yr !== t) {
        if (ki) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (hv(e, yr), u.clear()), ip(e, t);
        }
        $o = Vs(), cv(), vc(e, t);
      }
      hn(t);
      do
        try {
          PO();
          break;
        } catch (c) {
          Tx(e, c);
        }
      while (!0);
      return Rm(), wx(l), Ot = i, Fn !== null ? ($c(), Io) : (Yc(), Li = null, yr = re, gr);
    }
    function PO() {
      for (; Fn !== null && !jc(); )
        bx(Fn);
    }
    function bx(e) {
      var t = e.alternate;
      Wt(e);
      var i;
      (e.mode & nt) !== Ae ? (j0(e), i = FS(t, e, no), Zm(e, !0)) : i = FS(t, e, no), wn(), e.memoizedProps = e.pendingProps, i === null ? _x(e) : Fn = i, TS.current = null;
    }
    function _x(e) {
      var t = e;
      do {
        var i = t.alternate, l = t.return;
        if ((t.flags & wi) === Pe) {
          Wt(t);
          var u = void 0;
          if ((t.mode & nt) === Ae ? u = K1(i, t, no) : (j0(t), u = K1(i, t, no), Zm(t, !1)), wn(), u !== null) {
            Fn = u;
            return;
          }
        } else {
          var c = Uk(i, t);
          if (c !== null) {
            c.flags &= oh, Fn = c;
            return;
          }
          if ((t.mode & nt) !== Ae) {
            Zm(t, !1);
            for (var v = t.actualDuration, y = t.child; y !== null; )
              v += y.actualDuration, y = y.sibling;
            t.actualDuration = v;
          }
          if (l !== null)
            l.flags |= wi, l.subtreeFlags = Pe, l.deletions = null;
          else {
            gr = RS, Fn = null;
            return;
          }
        }
        var E = t.sibling;
        if (E !== null) {
          Fn = E;
          return;
        }
        t = l, Fn = t;
      } while (t !== null);
      gr === Io && (gr = vx);
    }
    function hc(e, t, i) {
      var l = Ki(), u = Yr.transition;
      try {
        Yr.transition = null, _n(Mn), BO(e, t, i, l);
      } finally {
        Yr.transition = u, _n(l);
      }
      return null;
    }
    function BO(e, t, i, l) {
      do
        Wo();
      while (is !== null);
      if (JO(), (Ot & (Wr | Pa)) !== mr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, c = e.finishedLanes;
      if (Hl(c), u === null)
        return Bc(), null;
      if (c === re && h("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = re, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Bn;
      var v = lt(u.lanes, u.childLanes);
      df(e, v), e === Li && (Li = null, Fn = null, yr = re), ((u.subtreeFlags & Yi) !== Pe || (u.flags & Yi) !== Pe) && (pc || (pc = !0, OS = i, HS(Da, function() {
        return Wo(), null;
      })));
      var y = (u.subtreeFlags & (hu | oi | br | Yi)) !== Pe, E = (u.flags & (hu | oi | br | Yi)) !== Pe;
      if (y || E) {
        var R = Yr.transition;
        Yr.transition = null;
        var w = Ki();
        _n(Mn);
        var F = Ot;
        Ot |= Pa, TS.current = null, Pk(e, u), g1(), eO(e, u, c), Zw(e.containerInfo), e.current = u, Gd(c), tO(u, e, c), Eu(), ch(), Ot = F, _n(w), Yr.transition = R;
      } else
        e.current = u, g1();
      var M = pc;
      if (pc ? (pc = !1, is = e, fv = c) : (ld = 0, fy = null), v = e.pendingLanes, v === re && (ad = null), M || Ax(e.current, !1), yu(u.stateNode, l), ki && e.memoizedUpdaters.clear(), EO(), aa(e, Cn()), t !== null)
        for (var I = e.onRecoverableError, W = 0; W < t.length; W++) {
          var X = t[W], Ee = X.stack, Ve = X.digest;
          I(X.value, {
            componentStack: Ee,
            digest: Ve
          });
        }
      if (sy) {
        sy = !1;
        var Ue = _S;
        throw _S = null, Ue;
      }
      return di(fv, je) && e.tag !== qu && Wo(), v = e.pendingLanes, di(v, je) ? (W_(), e === DS ? dv++ : (dv = 0, DS = e)) : dv = 0, Gu(), Bc(), null;
    }
    function Wo() {
      if (is !== null) {
        var e = fr(fv), t = eg(Aa, e), i = Yr.transition, l = Ki();
        try {
          return Yr.transition = null, _n(t), IO();
        } finally {
          _n(l), Yr.transition = i;
        }
      }
      return !1;
    }
    function VO(e) {
      kS.push(e), pc || (pc = !0, HS(Da, function() {
        return Wo(), null;
      }));
    }
    function IO() {
      if (is === null)
        return !1;
      var e = OS;
      OS = null;
      var t = is, i = fv;
      if (is = null, fv = re, (Ot & (Wr | Pa)) !== mr)
        throw new Error("Cannot flush passive effects while already rendering.");
      AS = !0, cy = !1, mh(i);
      var l = Ot;
      Ot |= Pa, uO(t.current), iO(t, t.current, i, e);
      {
        var u = kS;
        kS = [];
        for (var c = 0; c < u.length; c++) {
          var v = u[c];
          $k(t, v);
        }
      }
      Kd(), Ax(t.current, !0), Ot = l, Gu(), cy ? t === fy ? ld++ : (ld = 0, fy = t) : ld = 0, AS = !1, cy = !1, qi(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function kx(e) {
      return ad !== null && ad.has(e);
    }
    function $O(e) {
      ad === null ? ad = /* @__PURE__ */ new Set([e]) : ad.add(e);
    }
    function YO(e) {
      sy || (sy = !0, _S = e);
    }
    var WO = YO;
    function Ox(e, t, i) {
      var l = cc(i, t), u = b1(e, l, je), c = Xu(e, u, je), v = Ni();
      c !== null && (Oo(c, je, v), aa(c, v));
    }
    function pn(e, t, i) {
      if (zk(i), mv(!1), e.tag === k) {
        Ox(e, e, i);
        return;
      }
      var l = null;
      for (l = t; l !== null; ) {
        if (l.tag === k) {
          Ox(l, e, i);
          return;
        } else if (l.tag === N) {
          var u = l.type, c = l.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && !kx(c)) {
            var v = cc(i, e), y = nS(l, v, je), E = Xu(l, y, je), R = Ni();
            E !== null && (Oo(E, je, R), aa(E, R));
            return;
          }
        }
        l = l.return;
      }
      h(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, i);
    }
    function QO(e, t, i) {
      var l = e.pingCache;
      l !== null && l.delete(t);
      var u = Ni();
      ff(e, i), nD(e), Li === e && ko(yr, i) && (gr === lv || gr === ly && Ch(yr) && Cn() - bS < hx ? vc(e, re) : uy = lt(uy, i)), aa(e, u);
    }
    function Dx(e, t) {
      t === Bn && (t = _O(e));
      var i = Ni(), l = na(e, t);
      l !== null && (Oo(l, t, i), aa(l, i));
    }
    function qO(e) {
      var t = e.memoizedState, i = Bn;
      t !== null && (i = t.retryLane), Dx(e, i);
    }
    function GO(e, t) {
      var i = Bn, l;
      switch (e.tag) {
        case He:
          l = e.stateNode;
          var u = e.memoizedState;
          u !== null && (i = u.retryLane);
          break;
        case Nt:
          l = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      l !== null && l.delete(t), Dx(e, i);
    }
    function KO(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : TO(e / 1960) * 1960;
    }
    function XO() {
      if (dv > wO)
        throw dv = 0, DS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ld > bO && (ld = 0, fy = null, h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function JO() {
      fl.flushLegacyContextWarning(), fl.flushPendingUnsafeLifecycleWarnings();
    }
    function Ax(e, t) {
      Wt(e), my(e, li, yO), t && my(e, So, gO), my(e, li, hO), t && my(e, So, mO), wn();
    }
    function my(e, t, i) {
      for (var l = e, u = null; l !== null; ) {
        var c = l.subtreeFlags & t;
        l !== u && l.child !== null && c !== Pe ? l = l.child : ((l.flags & t) !== Pe && i(l), l.sibling !== null ? l = l.sibling : l = u = l.return);
      }
    }
    var yy = null;
    function Lx(e) {
      {
        if ((Ot & Wr) !== mr || !(e.mode & Me))
          return;
        var t = e.tag;
        if (t !== B && t !== k && t !== N && t !== O && t !== Be && t !== gt && t !== Je)
          return;
        var i = rt(e) || "ReactComponent";
        if (yy !== null) {
          if (yy.has(i))
            return;
          yy.add(i);
        } else
          yy = /* @__PURE__ */ new Set([i]);
        var l = En;
        try {
          Wt(e), h("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          l ? Wt(e) : wn();
        }
      }
    }
    var FS;
    {
      var ZO = null;
      FS = function(e, t, i) {
        var l = Px(ZO, t);
        try {
          return Y1(e, t, i);
        } catch (c) {
          if (f_() || c !== null && typeof c == "object" && typeof c.then == "function")
            throw c;
          if (Rm(), QC(), X1(e, t), Px(t, l), t.mode & nt && j0(t), go(null, Y1, null, e, t, i), Gy()) {
            var u = Pd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof c == "object" && c !== null && !c._suppressLogging && (c._suppressLogging = !0);
          }
          throw c;
        }
      };
    }
    var Nx = !1, zS;
    zS = /* @__PURE__ */ new Set();
    function eD(e) {
      if (ti && !I_())
        switch (e.tag) {
          case O:
          case Be:
          case Je: {
            var t = Fn && rt(Fn) || "Unknown", i = t;
            if (!zS.has(i)) {
              zS.add(i);
              var l = rt(e) || "Unknown";
              h("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", l, t, t);
            }
            break;
          }
          case N: {
            Nx || (h("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Nx = !0);
            break;
          }
        }
    }
    function hv(e, t) {
      if (ki) {
        var i = e.memoizedUpdaters;
        i.forEach(function(l) {
          pf(e, l, t);
        });
      }
    }
    var jS = {};
    function HS(e, t) {
      {
        var i = Sl.current;
        return i !== null ? (i.push(t), jS) : zc(e, t);
      }
    }
    function Mx(e) {
      if (e !== jS)
        return sh(e);
    }
    function Ux() {
      return Sl.current !== null;
    }
    function tD(e) {
      {
        if (e.mode & Me) {
          if (!dx())
            return;
        } else if (!xO() || Ot !== mr || e.tag !== O && e.tag !== Be && e.tag !== Je)
          return;
        if (Sl.current === null) {
          var t = En;
          try {
            Wt(e), h(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, rt(e));
          } finally {
            t ? Wt(e) : wn();
          }
        }
      }
    }
    function nD(e) {
      e.tag !== qu && dx() && Sl.current === null && h(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function mv(e) {
      gx = e;
    }
    var Ba = null, od = null, rD = function(e) {
      Ba = e;
    };
    function ud(e) {
      {
        if (Ba === null)
          return e;
        var t = Ba(e);
        return t === void 0 ? e : t.current;
      }
    }
    function PS(e) {
      return ud(e);
    }
    function BS(e) {
      {
        if (Ba === null)
          return e;
        var t = Ba(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var i = ud(e.render);
            if (e.render !== i) {
              var l = {
                $$typeof: se,
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
    function Fx(e, t) {
      {
        if (Ba === null)
          return !1;
        var i = e.elementType, l = t.type, u = !1, c = typeof l == "object" && l !== null ? l.$$typeof : null;
        switch (e.tag) {
          case N: {
            typeof l == "function" && (u = !0);
            break;
          }
          case O: {
            (typeof l == "function" || c === Qe) && (u = !0);
            break;
          }
          case Be: {
            (c === se || c === Qe) && (u = !0);
            break;
          }
          case gt:
          case Je: {
            (c === wt || c === Qe) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var v = Ba(i);
          if (v !== void 0 && v === Ba(l))
            return !0;
        }
        return !1;
      }
    }
    function zx(e) {
      {
        if (Ba === null || typeof WeakSet != "function")
          return;
        od === null && (od = /* @__PURE__ */ new WeakSet()), od.add(e);
      }
    }
    var iD = function(e, t) {
      {
        if (Ba === null)
          return;
        var i = t.staleFamilies, l = t.updatedFamilies;
        Wo(), Yo(function() {
          VS(e.current, l, i);
        });
      }
    }, aD = function(e, t) {
      {
        if (e.context !== ga)
          return;
        Wo(), Yo(function() {
          yv(t, e, null, null);
        });
      }
    };
    function VS(e, t, i) {
      {
        var l = e.alternate, u = e.child, c = e.sibling, v = e.tag, y = e.type, E = null;
        switch (v) {
          case O:
          case Je:
          case N:
            E = y;
            break;
          case Be:
            E = y.render;
            break;
        }
        if (Ba === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var R = !1, w = !1;
        if (E !== null) {
          var F = Ba(E);
          F !== void 0 && (i.has(F) ? w = !0 : t.has(F) && (v === N ? w = !0 : R = !0));
        }
        if (od !== null && (od.has(e) || l !== null && od.has(l)) && (w = !0), w && (e._debugNeedsRemount = !0), w || R) {
          var M = na(e, je);
          M !== null && Sr(M, e, je, on);
        }
        u !== null && !w && VS(u, t, i), c !== null && VS(c, t, i);
      }
    }
    var lD = function(e, t) {
      {
        var i = /* @__PURE__ */ new Set(), l = new Set(t.map(function(u) {
          return u.current;
        }));
        return IS(e.current, l, i), i;
      }
    };
    function IS(e, t, i) {
      {
        var l = e.child, u = e.sibling, c = e.tag, v = e.type, y = null;
        switch (c) {
          case O:
          case Je:
          case N:
            y = v;
            break;
          case Be:
            y = v.render;
            break;
        }
        var E = !1;
        y !== null && t.has(y) && (E = !0), E ? oD(e, i) : l !== null && IS(l, t, i), u !== null && IS(u, t, i);
      }
    }
    function oD(e, t) {
      {
        var i = uD(e, t);
        if (i)
          return;
        for (var l = e; ; ) {
          switch (l.tag) {
            case q:
              t.add(l.stateNode);
              return;
            case Q:
              t.add(l.stateNode.containerInfo);
              return;
            case k:
              t.add(l.stateNode.containerInfo);
              return;
          }
          if (l.return === null)
            throw new Error("Expected to reach root first.");
          l = l.return;
        }
      }
    }
    function uD(e, t) {
      for (var i = e, l = !1; ; ) {
        if (i.tag === q)
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
    var $S;
    {
      $S = !1;
      try {
        var jx = Object.preventExtensions({});
      } catch {
        $S = !0;
      }
    }
    function sD(e, t, i, l) {
      this.tag = e, this.key = i, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = l, this.flags = Pe, this.subtreeFlags = Pe, this.deletions = null, this.lanes = re, this.childLanes = re, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !$S && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Sa = function(e, t, i, l) {
      return new sD(e, t, i, l);
    };
    function YS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function cD(e) {
      return typeof e == "function" && !YS(e) && e.defaultProps === void 0;
    }
    function fD(e) {
      if (typeof e == "function")
        return YS(e) ? N : O;
      if (e != null) {
        var t = e.$$typeof;
        if (t === se)
          return Be;
        if (t === wt)
          return gt;
      }
      return B;
    }
    function mc(e, t) {
      var i = e.alternate;
      i === null ? (i = Sa(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i._debugSource = e._debugSource, i._debugOwner = e._debugOwner, i._debugHookTypes = e._debugHookTypes, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = Pe, i.subtreeFlags = Pe, i.deletions = null, i.actualDuration = 0, i.actualStartTime = -1), i.flags = e.flags & sr, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue;
      var l = e.dependencies;
      switch (i.dependencies = l === null ? null : {
        lanes: l.lanes,
        firstContext: l.firstContext
      }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.selfBaseDuration = e.selfBaseDuration, i.treeBaseDuration = e.treeBaseDuration, i._debugNeedsRemount = e._debugNeedsRemount, i.tag) {
        case B:
        case O:
        case Je:
          i.type = ud(e.type);
          break;
        case N:
          i.type = PS(e.type);
          break;
        case Be:
          i.type = BS(e.type);
          break;
      }
      return i;
    }
    function dD(e, t) {
      e.flags &= sr | cn;
      var i = e.alternate;
      if (i === null)
        e.childLanes = re, e.lanes = t, e.child = null, e.subtreeFlags = Pe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = Pe, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type;
        var l = i.dependencies;
        e.dependencies = l === null ? null : {
          lanes: l.lanes,
          firstContext: l.firstContext
        }, e.selfBaseDuration = i.selfBaseDuration, e.treeBaseDuration = i.treeBaseDuration;
      }
      return e;
    }
    function pD(e, t, i) {
      var l;
      return e === vm ? (l = Me, t === !0 && (l |= Et, l |= Oi)) : l = Ae, ki && (l |= nt), Sa(k, null, null, l);
    }
    function WS(e, t, i, l, u, c) {
      var v = B, y = e;
      if (typeof e == "function")
        YS(e) ? (v = N, y = PS(y)) : y = ud(y);
      else if (typeof e == "string")
        v = q;
      else
        e:
          switch (e) {
            case Ri:
              return os(i.children, u, c, t);
            case Ta:
              v = ye, u |= Et, (u & Me) !== Ae && (u |= Oi);
              break;
            case Ra:
              return vD(i, u, c, t);
            case Ne:
              return hD(i, u, c, t);
            case Ct:
              return mD(i, u, c, t);
            case en:
              return Hx(i, u, c, t);
            case sn:
            case pt:
            case wr:
            case wa:
            case jn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case A:
                    v = ve;
                    break e;
                  case ae:
                    v = Ke;
                    break e;
                  case se:
                    v = Be, y = BS(y);
                    break e;
                  case wt:
                    v = gt;
                    break e;
                  case Qe:
                    v = un, y = null;
                    break e;
                }
              var E = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var R = l ? rt(l) : null;
                R && (E += `

Check the render method of \`` + R + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + E));
            }
          }
      var w = Sa(v, i, t, u);
      return w.elementType = e, w.type = y, w.lanes = c, w._debugOwner = l, w;
    }
    function QS(e, t, i) {
      var l = null;
      l = e._owner;
      var u = e.type, c = e.key, v = e.props, y = WS(u, c, v, l, t, i);
      return y._debugSource = e._source, y._debugOwner = e._owner, y;
    }
    function os(e, t, i, l) {
      var u = Sa(ne, e, l, t);
      return u.lanes = i, u;
    }
    function vD(e, t, i, l) {
      typeof e.id != "string" && h('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Sa(yt, e, l, t | nt);
      return u.elementType = Ra, u.lanes = i, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function hD(e, t, i, l) {
      var u = Sa(He, e, l, t);
      return u.elementType = Ne, u.lanes = i, u;
    }
    function mD(e, t, i, l) {
      var u = Sa(Nt, e, l, t);
      return u.elementType = Ct, u.lanes = i, u;
    }
    function Hx(e, t, i, l) {
      var u = Sa(Ye, e, l, t);
      u.elementType = en, u.lanes = i;
      var c = {
        isHidden: !1
      };
      return u.stateNode = c, u;
    }
    function qS(e, t, i) {
      var l = Sa(K, e, null, t);
      return l.lanes = i, l;
    }
    function yD() {
      var e = Sa(q, null, null, Ae);
      return e.elementType = "DELETED", e;
    }
    function gD(e) {
      var t = Sa(Xt, null, null, Ae);
      return t.stateNode = e, t;
    }
    function GS(e, t, i) {
      var l = e.children !== null ? e.children : [], u = Sa(Q, l, e.key, t);
      return u.lanes = i, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function Px(e, t) {
      return e === null && (e = Sa(B, null, null, Ae)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function SD(e, t, i, l, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Dg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Bn, this.eventTimes = Bs(re), this.expirationTimes = Bs(on), this.pendingLanes = re, this.suspendedLanes = re, this.pingedLanes = re, this.expiredLanes = re, this.mutableReadLanes = re, this.finishedLanes = re, this.entangledLanes = re, this.entanglements = Bs(re), this.identifierPrefix = l, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var c = this.pendingUpdatersLaneMap = [], v = 0; v < Us; v++)
          c.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case vm:
          this._debugRootType = i ? "hydrateRoot()" : "createRoot()";
          break;
        case qu:
          this._debugRootType = i ? "hydrate()" : "render()";
          break;
      }
    }
    function Bx(e, t, i, l, u, c, v, y, E, R) {
      var w = new SD(e, t, i, y, E), F = pD(t, c);
      w.current = F, F.stateNode = w;
      {
        var M = {
          element: l,
          isDehydrated: i,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        F.memoizedState = M;
      }
      return u0(F), w;
    }
    var KS = "18.3.1";
    function ED(e, t, i) {
      var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Xr(l), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Nr,
        key: l == null ? null : "" + l,
        children: e,
        containerInfo: t,
        implementation: i
      };
    }
    var XS, JS;
    XS = !1, JS = {};
    function Vx(e) {
      if (!e)
        return ga;
      var t = Vi(e), i = n_(t);
      if (t.tag === N) {
        var l = t.type;
        if (Gl(l))
          return hC(t, l, i);
      }
      return i;
    }
    function CD(e, t) {
      {
        var i = Vi(e);
        if (i === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var l = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + l);
        }
        var u = Wi(i);
        if (u === null)
          return null;
        if (u.mode & Et) {
          var c = rt(i) || "Component";
          if (!JS[c]) {
            JS[c] = !0;
            var v = En;
            try {
              Wt(u), i.mode & Et ? h("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c) : h("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c);
            } finally {
              v ? Wt(v) : wn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function Ix(e, t, i, l, u, c, v, y) {
      var E = !1, R = null;
      return Bx(e, t, E, R, i, l, u, c, v);
    }
    function $x(e, t, i, l, u, c, v, y, E, R) {
      var w = !0, F = Bx(i, l, w, e, u, c, v, y, E);
      F.context = Vx(null);
      var M = F.current, I = Ni(), W = as(M), X = Bo(I, W);
      return X.callback = t ?? null, Xu(M, X, W), kO(F, W, I), F;
    }
    function yv(e, t, i, l) {
      qd(t, e);
      var u = t.current, c = Ni(), v = as(u);
      Xd(v);
      var y = Vx(i);
      t.context === null ? t.context = y : t.pendingContext = y, ti && En !== null && !XS && (XS = !0, h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, rt(En) || "Unknown"));
      var E = Bo(c, v);
      E.payload = {
        element: e
      }, l = l === void 0 ? null : l, l !== null && (typeof l != "function" && h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", l), E.callback = l);
      var R = Xu(u, E, v);
      return R !== null && (Sr(R, u, v, c), Om(R, u, v)), v;
    }
    function gy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case q:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function xD(e) {
      switch (e.tag) {
        case k: {
          var t = e.stateNode;
          if (vf(t)) {
            var i = ep(t);
            LO(t, i);
          }
          break;
        }
        case He: {
          Yo(function() {
            var u = na(e, je);
            if (u !== null) {
              var c = Ni();
              Sr(u, e, je, c);
            }
          });
          var l = je;
          ZS(e, l);
          break;
        }
      }
    }
    function Yx(e, t) {
      var i = e.memoizedState;
      i !== null && i.dehydrated !== null && (i.retryLane = bh(i.retryLane, t));
    }
    function ZS(e, t) {
      Yx(e, t);
      var i = e.alternate;
      i && Yx(i, t);
    }
    function TD(e) {
      if (e.tag === He) {
        var t = zs, i = na(e, t);
        if (i !== null) {
          var l = Ni();
          Sr(i, e, t, l);
        }
        ZS(e, t);
      }
    }
    function RD(e) {
      if (e.tag === He) {
        var t = as(e), i = na(e, t);
        if (i !== null) {
          var l = Ni();
          Sr(i, e, t, l);
        }
        ZS(e, t);
      }
    }
    function Wx(e) {
      var t = uh(e);
      return t === null ? null : t.stateNode;
    }
    var Qx = function(e) {
      return null;
    };
    function wD(e) {
      return Qx(e);
    }
    var qx = function(e) {
      return !1;
    };
    function bD(e) {
      return qx(e);
    }
    var Gx = null, Kx = null, Xx = null, Jx = null, Zx = null, eT = null, tT = null, nT = null, rT = null;
    {
      var iT = function(e, t, i) {
        var l = t[i], u = _t(e) ? e.slice() : vt({}, e);
        return i + 1 === t.length ? (_t(u) ? u.splice(l, 1) : delete u[l], u) : (u[l] = iT(e[l], t, i + 1), u);
      }, aT = function(e, t) {
        return iT(e, t, 0);
      }, lT = function(e, t, i, l) {
        var u = t[l], c = _t(e) ? e.slice() : vt({}, e);
        if (l + 1 === t.length) {
          var v = i[l];
          c[v] = c[u], _t(c) ? c.splice(u, 1) : delete c[u];
        } else
          c[u] = lT(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            i,
            l + 1
          );
        return c;
      }, oT = function(e, t, i) {
        if (t.length !== i.length) {
          T("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var l = 0; l < i.length - 1; l++)
            if (t[l] !== i[l]) {
              T("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return lT(e, t, i, 0);
      }, uT = function(e, t, i, l) {
        if (i >= t.length)
          return l;
        var u = t[i], c = _t(e) ? e.slice() : vt({}, e);
        return c[u] = uT(e[u], t, i + 1, l), c;
      }, sT = function(e, t, i) {
        return uT(e, t, 0, i);
      }, eE = function(e, t) {
        for (var i = e.memoizedState; i !== null && t > 0; )
          i = i.next, t--;
        return i;
      };
      Gx = function(e, t, i, l) {
        var u = eE(e, t);
        if (u !== null) {
          var c = sT(u.memoizedState, i, l);
          u.memoizedState = c, u.baseState = c, e.memoizedProps = vt({}, e.memoizedProps);
          var v = na(e, je);
          v !== null && Sr(v, e, je, on);
        }
      }, Kx = function(e, t, i) {
        var l = eE(e, t);
        if (l !== null) {
          var u = aT(l.memoizedState, i);
          l.memoizedState = u, l.baseState = u, e.memoizedProps = vt({}, e.memoizedProps);
          var c = na(e, je);
          c !== null && Sr(c, e, je, on);
        }
      }, Xx = function(e, t, i, l) {
        var u = eE(e, t);
        if (u !== null) {
          var c = oT(u.memoizedState, i, l);
          u.memoizedState = c, u.baseState = c, e.memoizedProps = vt({}, e.memoizedProps);
          var v = na(e, je);
          v !== null && Sr(v, e, je, on);
        }
      }, Jx = function(e, t, i) {
        e.pendingProps = sT(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = na(e, je);
        l !== null && Sr(l, e, je, on);
      }, Zx = function(e, t) {
        e.pendingProps = aT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = na(e, je);
        i !== null && Sr(i, e, je, on);
      }, eT = function(e, t, i) {
        e.pendingProps = oT(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = na(e, je);
        l !== null && Sr(l, e, je, on);
      }, tT = function(e) {
        var t = na(e, je);
        t !== null && Sr(t, e, je, on);
      }, nT = function(e) {
        Qx = e;
      }, rT = function(e) {
        qx = e;
      };
    }
    function _D(e) {
      var t = Wi(e);
      return t === null ? null : t.stateNode;
    }
    function kD(e) {
      return null;
    }
    function OD() {
      return En;
    }
    function DD(e) {
      var t = e.findFiberByHostInstance, i = p.ReactCurrentDispatcher;
      return Qd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Gx,
        overrideHookStateDeletePath: Kx,
        overrideHookStateRenamePath: Xx,
        overrideProps: Jx,
        overridePropsDeletePath: Zx,
        overridePropsRenamePath: eT,
        setErrorHandler: nT,
        setSuspenseHandler: rT,
        scheduleUpdate: tT,
        currentDispatcherRef: i,
        findHostInstanceByFiber: _D,
        findFiberByHostInstance: t || kD,
        // React Refresh
        findHostInstancesForRefresh: lD,
        scheduleRefresh: iD,
        scheduleRoot: aD,
        setRefreshHandler: rD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: OD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: KS
      });
    }
    var cT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function tE(e) {
      this._internalRoot = e;
    }
    Sy.prototype.render = tE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? h("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Ey(arguments[1]) ? h("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && h("You passed a second argument to root.render(...) but it only accepts one argument.");
        var i = t.containerInfo;
        if (i.nodeType !== Hn) {
          var l = Wx(t.current);
          l && l.parentNode !== i && h("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      yv(e, t, null, null);
    }, Sy.prototype.unmount = tE.prototype.unmount = function() {
      typeof arguments[0] == "function" && h("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        xx() && h("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Yo(function() {
          yv(null, e, null, null);
        }), cC(t);
      }
    };
    function AD(e, t) {
      if (!Ey(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      fT(e);
      var i = !1, l = !1, u = "", c = cT;
      t != null && (t.hydrate ? T("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ca && h(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = Ix(e, vm, null, i, l, u, c);
      om(v.current, e);
      var y = e.nodeType === Hn ? e.parentNode : e;
      return Tp(y), new tE(v);
    }
    function Sy(e) {
      this._internalRoot = e;
    }
    function LD(e) {
      e && rg(e);
    }
    Sy.prototype.unstable_scheduleHydration = LD;
    function ND(e, t, i) {
      if (!Ey(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      fT(e), t === void 0 && h("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var l = i ?? null, u = i != null && i.hydratedSources || null, c = !1, v = !1, y = "", E = cT;
      i != null && (i.unstable_strictMode === !0 && (c = !0), i.identifierPrefix !== void 0 && (y = i.identifierPrefix), i.onRecoverableError !== void 0 && (E = i.onRecoverableError));
      var R = $x(t, null, e, vm, l, c, v, y, E);
      if (om(R.current, e), Tp(e), u)
        for (var w = 0; w < u.length; w++) {
          var F = u[w];
          z_(R, F);
        }
      return new Sy(R);
    }
    function Ey(e) {
      return !!(e && (e.nodeType === ri || e.nodeType === va || e.nodeType === fo || !Z));
    }
    function gv(e) {
      return !!(e && (e.nodeType === ri || e.nodeType === va || e.nodeType === fo || e.nodeType === Hn && e.nodeValue === " react-mount-point-unstable "));
    }
    function fT(e) {
      e.nodeType === ri && e.tagName && e.tagName.toUpperCase() === "BODY" && h("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Mp(e) && (e._reactRootContainer ? h("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : h("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var MD = p.ReactCurrentOwner, dT;
    dT = function(e) {
      if (e._reactRootContainer && e.nodeType !== Hn) {
        var t = Wx(e._reactRootContainer.current);
        t && t.parentNode !== e && h("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var i = !!e._reactRootContainer, l = nE(e), u = !!(l && Wu(l));
      u && !i && h("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ri && e.tagName && e.tagName.toUpperCase() === "BODY" && h("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function nE(e) {
      return e ? e.nodeType === va ? e.documentElement : e.firstChild : null;
    }
    function pT() {
    }
    function UD(e, t, i, l, u) {
      if (u) {
        if (typeof l == "function") {
          var c = l;
          l = function() {
            var M = gy(v);
            c.call(M);
          };
        }
        var v = $x(
          t,
          l,
          e,
          qu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          pT
        );
        e._reactRootContainer = v, om(v.current, e);
        var y = e.nodeType === Hn ? e.parentNode : e;
        return Tp(y), Yo(), v;
      } else {
        for (var E; E = e.lastChild; )
          e.removeChild(E);
        if (typeof l == "function") {
          var R = l;
          l = function() {
            var M = gy(w);
            R.call(M);
          };
        }
        var w = Ix(
          e,
          qu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          pT
        );
        e._reactRootContainer = w, om(w.current, e);
        var F = e.nodeType === Hn ? e.parentNode : e;
        return Tp(F), Yo(function() {
          yv(t, w, i, l);
        }), w;
      }
    }
    function FD(e, t) {
      e !== null && typeof e != "function" && h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Cy(e, t, i, l, u) {
      dT(i), FD(u === void 0 ? null : u, "render");
      var c = i._reactRootContainer, v;
      if (!c)
        v = UD(i, t, e, u, l);
      else {
        if (v = c, typeof u == "function") {
          var y = u;
          u = function() {
            var E = gy(v);
            y.call(E);
          };
        }
        yv(t, v, e, u);
      }
      return gy(v);
    }
    var vT = !1;
    function zD(e) {
      {
        vT || (vT = !0, h("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = MD.current;
        if (t !== null && t.stateNode !== null) {
          var i = t.stateNode._warnedAboutRefsInRender;
          i || h("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", bt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ri ? e : CD(e, "findDOMNode");
    }
    function jD(e, t, i) {
      if (h("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !gv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Mp(t) && t._reactRootContainer === void 0;
        l && h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Cy(null, e, t, !0, i);
    }
    function HD(e, t, i) {
      if (h("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !gv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var l = Mp(t) && t._reactRootContainer === void 0;
        l && h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Cy(null, e, t, !1, i);
    }
    function PD(e, t, i, l) {
      if (h("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !gv(i))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ks(e))
        throw new Error("parentComponent must be a valid React Component");
      return Cy(e, t, i, !1, l);
    }
    var hT = !1;
    function BD(e) {
      if (hT || (hT = !0, h("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !gv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Mp(e) && e._reactRootContainer === void 0;
        t && h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var i = nE(e), l = i && !Wu(i);
          l && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Yo(function() {
          Cy(null, null, e, !1, function() {
            e._reactRootContainer = null, cC(e);
          });
        }), !0;
      } else {
        {
          var u = nE(e), c = !!(u && Wu(u)), v = e.nodeType === ri && gv(e.parentNode) && !!e.parentNode._reactRootContainer;
          c && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Lu(xD), tg(TD), mf(RD), Oh(Ki), Dh(Or), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), ah(Iw), Lc(NS, NO, Yo);
    function VD(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ey(t))
        throw new Error("Target container is not a DOM element.");
      return ED(e, t, null, i);
    }
    function ID(e, t, i, l) {
      return PD(e, t, i, l);
    }
    var rE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Wu, Hf, um, Ac, ws, NS]
    };
    function $D(e, t) {
      return rE.usingClientEntryPoint || h('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), AD(e, t);
    }
    function YD(e, t, i) {
      return rE.usingClientEntryPoint || h('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ND(e, t, i);
    }
    function WD(e) {
      return xx() && h("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Yo(e);
    }
    var QD = DD({
      findFiberByHostInstance: tc,
      bundleType: 1,
      version: KS,
      rendererPackageName: "react-dom"
    });
    if (!QD && yn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var mT = window.location.protocol;
      /^(https?|file):$/.test(mT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (mT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    oa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rE, oa.createPortal = VD, oa.createRoot = $D, oa.findDOMNode = zD, oa.flushSync = WD, oa.hydrate = jD, oa.hydrateRoot = YD, oa.render = HD, oa.unmountComponentAtNode = BD, oa.unstable_batchedUpdates = NS, oa.unstable_renderSubtreeIntoContainer = ID, oa.version = KS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), oa;
}
function ZT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ZT);
    } catch (a) {
      console.error(a);
    }
  }
}
process.env.NODE_ENV === "production" ? (ZT(), hE.exports = nA()) : hE.exports = rA();
var iA = hE.exports;
function eR(a, f) {
  return function() {
    return a.apply(f, arguments);
  };
}
const { toString: aA } = Object.prototype, { getPrototypeOf: bE } = Object, Dy = /* @__PURE__ */ ((a) => (f) => {
  const p = aA.call(f);
  return a[p] || (a[p] = p.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), lo = (a) => (a = a.toLowerCase(), (f) => Dy(f) === a), Ay = (a) => (f) => typeof f === a, { isArray: md } = Array, wv = Ay("undefined");
function lA(a) {
  return a !== null && !wv(a) && a.constructor !== null && !wv(a.constructor) && Va(a.constructor.isBuffer) && a.constructor.isBuffer(a);
}
const tR = lo("ArrayBuffer");
function oA(a) {
  let f;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? f = ArrayBuffer.isView(a) : f = a && a.buffer && tR(a.buffer), f;
}
const uA = Ay("string"), Va = Ay("function"), nR = Ay("number"), Ly = (a) => a !== null && typeof a == "object", sA = (a) => a === !0 || a === !1, Ty = (a) => {
  if (Dy(a) !== "object")
    return !1;
  const f = bE(a);
  return (f === null || f === Object.prototype || Object.getPrototypeOf(f) === null) && !(Symbol.toStringTag in a) && !(Symbol.iterator in a);
}, cA = lo("Date"), fA = lo("File"), dA = lo("Blob"), pA = lo("FileList"), vA = (a) => Ly(a) && Va(a.pipe), hA = (a) => {
  let f;
  return a && (typeof FormData == "function" && a instanceof FormData || Va(a.append) && ((f = Dy(a)) === "formdata" || // detect form-data instance
  f === "object" && Va(a.toString) && a.toString() === "[object FormData]"));
}, mA = lo("URLSearchParams"), yA = (a) => a.trim ? a.trim() : a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Dv(a, f, { allOwnKeys: p = !1 } = {}) {
  if (a === null || typeof a > "u")
    return;
  let g, S;
  if (typeof a != "object" && (a = [a]), md(a))
    for (g = 0, S = a.length; g < S; g++)
      f.call(null, a[g], g, a);
  else {
    const T = p ? Object.getOwnPropertyNames(a) : Object.keys(a), h = T.length;
    let b;
    for (g = 0; g < h; g++)
      b = T[g], f.call(null, a[b], b, a);
  }
}
function rR(a, f) {
  f = f.toLowerCase();
  const p = Object.keys(a);
  let g = p.length, S;
  for (; g-- > 0; )
    if (S = p[g], f === S.toLowerCase())
      return S;
  return null;
}
const iR = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, aR = (a) => !wv(a) && a !== iR;
function mE() {
  const { caseless: a } = aR(this) && this || {}, f = {}, p = (g, S) => {
    const T = a && rR(f, S) || S;
    Ty(f[T]) && Ty(g) ? f[T] = mE(f[T], g) : Ty(g) ? f[T] = mE({}, g) : md(g) ? f[T] = g.slice() : f[T] = g;
  };
  for (let g = 0, S = arguments.length; g < S; g++)
    arguments[g] && Dv(arguments[g], p);
  return f;
}
const gA = (a, f, p, { allOwnKeys: g } = {}) => (Dv(f, (S, T) => {
  p && Va(S) ? a[T] = eR(S, p) : a[T] = S;
}, { allOwnKeys: g }), a), SA = (a) => (a.charCodeAt(0) === 65279 && (a = a.slice(1)), a), EA = (a, f, p, g) => {
  a.prototype = Object.create(f.prototype, g), a.prototype.constructor = a, Object.defineProperty(a, "super", {
    value: f.prototype
  }), p && Object.assign(a.prototype, p);
}, CA = (a, f, p, g) => {
  let S, T, h;
  const b = {};
  if (f = f || {}, a == null)
    return f;
  do {
    for (S = Object.getOwnPropertyNames(a), T = S.length; T-- > 0; )
      h = S[T], (!g || g(h, a, f)) && !b[h] && (f[h] = a[h], b[h] = !0);
    a = p !== !1 && bE(a);
  } while (a && (!p || p(a, f)) && a !== Object.prototype);
  return f;
}, xA = (a, f, p) => {
  a = String(a), (p === void 0 || p > a.length) && (p = a.length), p -= f.length;
  const g = a.indexOf(f, p);
  return g !== -1 && g === p;
}, TA = (a) => {
  if (!a)
    return null;
  if (md(a))
    return a;
  let f = a.length;
  if (!nR(f))
    return null;
  const p = new Array(f);
  for (; f-- > 0; )
    p[f] = a[f];
  return p;
}, RA = /* @__PURE__ */ ((a) => (f) => a && f instanceof a)(typeof Uint8Array < "u" && bE(Uint8Array)), wA = (a, f) => {
  const g = (a && a[Symbol.iterator]).call(a);
  let S;
  for (; (S = g.next()) && !S.done; ) {
    const T = S.value;
    f.call(a, T[0], T[1]);
  }
}, bA = (a, f) => {
  let p;
  const g = [];
  for (; (p = a.exec(f)) !== null; )
    g.push(p);
  return g;
}, _A = lo("HTMLFormElement"), kA = (a) => a.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(p, g, S) {
    return g.toUpperCase() + S;
  }
), bT = (({ hasOwnProperty: a }) => (f, p) => a.call(f, p))(Object.prototype), OA = lo("RegExp"), lR = (a, f) => {
  const p = Object.getOwnPropertyDescriptors(a), g = {};
  Dv(p, (S, T) => {
    let h;
    (h = f(S, T, a)) !== !1 && (g[T] = h || S);
  }), Object.defineProperties(a, g);
}, DA = (a) => {
  lR(a, (f, p) => {
    if (Va(a) && ["arguments", "caller", "callee"].indexOf(p) !== -1)
      return !1;
    const g = a[p];
    if (Va(g)) {
      if (f.enumerable = !1, "writable" in f) {
        f.writable = !1;
        return;
      }
      f.set || (f.set = () => {
        throw Error("Can not rewrite read-only method '" + p + "'");
      });
    }
  });
}, AA = (a, f) => {
  const p = {}, g = (S) => {
    S.forEach((T) => {
      p[T] = !0;
    });
  };
  return md(a) ? g(a) : g(String(a).split(f)), p;
}, LA = () => {
}, NA = (a, f) => (a = +a, Number.isFinite(a) ? a : f), lE = "abcdefghijklmnopqrstuvwxyz", _T = "0123456789", oR = {
  DIGIT: _T,
  ALPHA: lE,
  ALPHA_DIGIT: lE + lE.toUpperCase() + _T
}, MA = (a = 16, f = oR.ALPHA_DIGIT) => {
  let p = "";
  const { length: g } = f;
  for (; a--; )
    p += f[Math.random() * g | 0];
  return p;
};
function UA(a) {
  return !!(a && Va(a.append) && a[Symbol.toStringTag] === "FormData" && a[Symbol.iterator]);
}
const FA = (a) => {
  const f = new Array(10), p = (g, S) => {
    if (Ly(g)) {
      if (f.indexOf(g) >= 0)
        return;
      if (!("toJSON" in g)) {
        f[S] = g;
        const T = md(g) ? [] : {};
        return Dv(g, (h, b) => {
          const O = p(h, S + 1);
          !wv(O) && (T[b] = O);
        }), f[S] = void 0, T;
      }
    }
    return g;
  };
  return p(a, 0);
}, zA = lo("AsyncFunction"), jA = (a) => a && (Ly(a) || Va(a)) && Va(a.then) && Va(a.catch), te = {
  isArray: md,
  isArrayBuffer: tR,
  isBuffer: lA,
  isFormData: hA,
  isArrayBufferView: oA,
  isString: uA,
  isNumber: nR,
  isBoolean: sA,
  isObject: Ly,
  isPlainObject: Ty,
  isUndefined: wv,
  isDate: cA,
  isFile: fA,
  isBlob: dA,
  isRegExp: OA,
  isFunction: Va,
  isStream: vA,
  isURLSearchParams: mA,
  isTypedArray: RA,
  isFileList: pA,
  forEach: Dv,
  merge: mE,
  extend: gA,
  trim: yA,
  stripBOM: SA,
  inherits: EA,
  toFlatObject: CA,
  kindOf: Dy,
  kindOfTest: lo,
  endsWith: xA,
  toArray: TA,
  forEachEntry: wA,
  matchAll: bA,
  isHTMLForm: _A,
  hasOwnProperty: bT,
  hasOwnProp: bT,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: lR,
  freezeMethods: DA,
  toObjectSet: AA,
  toCamelCase: kA,
  noop: LA,
  toFiniteNumber: NA,
  findKey: rR,
  global: iR,
  isContextDefined: aR,
  ALPHABET: oR,
  generateString: MA,
  isSpecCompliantForm: UA,
  toJSONObject: FA,
  isAsyncFn: zA,
  isThenable: jA
};
function Ht(a, f, p, g, S) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = a, this.name = "AxiosError", f && (this.code = f), p && (this.config = p), g && (this.request = g), S && (this.response = S);
}
te.inherits(Ht, Error, {
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
      config: te.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const uR = Ht.prototype, sR = {};
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
  sR[a] = { value: a };
});
Object.defineProperties(Ht, sR);
Object.defineProperty(uR, "isAxiosError", { value: !0 });
Ht.from = (a, f, p, g, S, T) => {
  const h = Object.create(uR);
  return te.toFlatObject(a, h, function(O) {
    return O !== Error.prototype;
  }, (b) => b !== "isAxiosError"), Ht.call(h, a.message, f, p, g, S), h.cause = a, h.name = a.name, T && Object.assign(h, T), h;
};
const HA = null;
function yE(a) {
  return te.isPlainObject(a) || te.isArray(a);
}
function cR(a) {
  return te.endsWith(a, "[]") ? a.slice(0, -2) : a;
}
function kT(a, f, p) {
  return a ? a.concat(f).map(function(S, T) {
    return S = cR(S), !p && T ? "[" + S + "]" : S;
  }).join(p ? "." : "") : f;
}
function PA(a) {
  return te.isArray(a) && !a.some(yE);
}
const BA = te.toFlatObject(te, {}, null, function(f) {
  return /^is[A-Z]/.test(f);
});
function Ny(a, f, p) {
  if (!te.isObject(a))
    throw new TypeError("target must be an object");
  f = f || new FormData(), p = te.toFlatObject(p, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(ne, ye) {
    return !te.isUndefined(ye[ne]);
  });
  const g = p.metaTokens, S = p.visitor || B, T = p.dots, h = p.indexes, O = (p.Blob || typeof Blob < "u" && Blob) && te.isSpecCompliantForm(f);
  if (!te.isFunction(S))
    throw new TypeError("visitor must be a function");
  function N(K) {
    if (K === null)
      return "";
    if (te.isDate(K))
      return K.toISOString();
    if (!O && te.isBlob(K))
      throw new Ht("Blob is not supported. Use a Buffer instead.");
    return te.isArrayBuffer(K) || te.isTypedArray(K) ? O && typeof Blob == "function" ? new Blob([K]) : Buffer.from(K) : K;
  }
  function B(K, ne, ye) {
    let Ke = K;
    if (K && !ye && typeof K == "object") {
      if (te.endsWith(ne, "{}"))
        ne = g ? ne : ne.slice(0, -2), K = JSON.stringify(K);
      else if (te.isArray(K) && PA(K) || (te.isFileList(K) || te.endsWith(ne, "[]")) && (Ke = te.toArray(K)))
        return ne = cR(ne), Ke.forEach(function(Be, yt) {
          !(te.isUndefined(Be) || Be === null) && f.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? kT([ne], yt, T) : h === null ? ne : ne + "[]",
            N(Be)
          );
        }), !1;
    }
    return yE(K) ? !0 : (f.append(kT(ye, ne, T), N(K)), !1);
  }
  const k = [], Q = Object.assign(BA, {
    defaultVisitor: B,
    convertValue: N,
    isVisitable: yE
  });
  function q(K, ne) {
    if (!te.isUndefined(K)) {
      if (k.indexOf(K) !== -1)
        throw Error("Circular reference detected in " + ne.join("."));
      k.push(K), te.forEach(K, function(Ke, ve) {
        (!(te.isUndefined(Ke) || Ke === null) && S.call(
          f,
          Ke,
          te.isString(ve) ? ve.trim() : ve,
          ne,
          Q
        )) === !0 && q(Ke, ne ? ne.concat(ve) : [ve]);
      }), k.pop();
    }
  }
  if (!te.isObject(a))
    throw new TypeError("data must be an object");
  return q(a), f;
}
function OT(a) {
  const f = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g, function(g) {
    return f[g];
  });
}
function _E(a, f) {
  this._pairs = [], a && Ny(a, this, f);
}
const fR = _E.prototype;
fR.append = function(f, p) {
  this._pairs.push([f, p]);
};
fR.toString = function(f) {
  const p = f ? function(g) {
    return f.call(this, g, OT);
  } : OT;
  return this._pairs.map(function(S) {
    return p(S[0]) + "=" + p(S[1]);
  }, "").join("&");
};
function VA(a) {
  return encodeURIComponent(a).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function dR(a, f, p) {
  if (!f)
    return a;
  const g = p && p.encode || VA, S = p && p.serialize;
  let T;
  if (S ? T = S(f, p) : T = te.isURLSearchParams(f) ? f.toString() : new _E(f, p).toString(g), T) {
    const h = a.indexOf("#");
    h !== -1 && (a = a.slice(0, h)), a += (a.indexOf("?") === -1 ? "?" : "&") + T;
  }
  return a;
}
class DT {
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
  use(f, p, g) {
    return this.handlers.push({
      fulfilled: f,
      rejected: p,
      synchronous: g ? g.synchronous : !1,
      runWhen: g ? g.runWhen : null
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
    te.forEach(this.handlers, function(g) {
      g !== null && f(g);
    });
  }
}
const pR = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, IA = typeof URLSearchParams < "u" ? URLSearchParams : _E, $A = typeof FormData < "u" ? FormData : null, YA = typeof Blob < "u" ? Blob : null, WA = {
  isBrowser: !0,
  classes: {
    URLSearchParams: IA,
    FormData: $A,
    Blob: YA
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, vR = typeof window < "u" && typeof document < "u", QA = ((a) => vR && ["ReactNative", "NativeScript", "NS"].indexOf(a) < 0)(typeof navigator < "u" && navigator.product), qA = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", GA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: vR,
  hasStandardBrowserEnv: QA,
  hasStandardBrowserWebWorkerEnv: qA
}, Symbol.toStringTag, { value: "Module" })), io = {
  ...GA,
  ...WA
};
function KA(a, f) {
  return Ny(a, new io.classes.URLSearchParams(), Object.assign({
    visitor: function(p, g, S, T) {
      return io.isNode && te.isBuffer(p) ? (this.append(g, p.toString("base64")), !1) : T.defaultVisitor.apply(this, arguments);
    }
  }, f));
}
function XA(a) {
  return te.matchAll(/\w+|\[(\w*)]/g, a).map((f) => f[0] === "[]" ? "" : f[1] || f[0]);
}
function JA(a) {
  const f = {}, p = Object.keys(a);
  let g;
  const S = p.length;
  let T;
  for (g = 0; g < S; g++)
    T = p[g], f[T] = a[T];
  return f;
}
function hR(a) {
  function f(p, g, S, T) {
    let h = p[T++];
    if (h === "__proto__")
      return !0;
    const b = Number.isFinite(+h), O = T >= p.length;
    return h = !h && te.isArray(S) ? S.length : h, O ? (te.hasOwnProp(S, h) ? S[h] = [S[h], g] : S[h] = g, !b) : ((!S[h] || !te.isObject(S[h])) && (S[h] = []), f(p, g, S[h], T) && te.isArray(S[h]) && (S[h] = JA(S[h])), !b);
  }
  if (te.isFormData(a) && te.isFunction(a.entries)) {
    const p = {};
    return te.forEachEntry(a, (g, S) => {
      f(XA(g), S, p, 0);
    }), p;
  }
  return null;
}
function ZA(a, f, p) {
  if (te.isString(a))
    try {
      return (f || JSON.parse)(a), te.trim(a);
    } catch (g) {
      if (g.name !== "SyntaxError")
        throw g;
    }
  return (p || JSON.stringify)(a);
}
const Av = {
  transitional: pR,
  adapter: ["xhr", "http"],
  transformRequest: [function(f, p) {
    const g = p.getContentType() || "", S = g.indexOf("application/json") > -1, T = te.isObject(f);
    if (T && te.isHTMLForm(f) && (f = new FormData(f)), te.isFormData(f))
      return S ? JSON.stringify(hR(f)) : f;
    if (te.isArrayBuffer(f) || te.isBuffer(f) || te.isStream(f) || te.isFile(f) || te.isBlob(f))
      return f;
    if (te.isArrayBufferView(f))
      return f.buffer;
    if (te.isURLSearchParams(f))
      return p.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), f.toString();
    let b;
    if (T) {
      if (g.indexOf("application/x-www-form-urlencoded") > -1)
        return KA(f, this.formSerializer).toString();
      if ((b = te.isFileList(f)) || g.indexOf("multipart/form-data") > -1) {
        const O = this.env && this.env.FormData;
        return Ny(
          b ? { "files[]": f } : f,
          O && new O(),
          this.formSerializer
        );
      }
    }
    return T || S ? (p.setContentType("application/json", !1), ZA(f)) : f;
  }],
  transformResponse: [function(f) {
    const p = this.transitional || Av.transitional, g = p && p.forcedJSONParsing, S = this.responseType === "json";
    if (f && te.isString(f) && (g && !this.responseType || S)) {
      const h = !(p && p.silentJSONParsing) && S;
      try {
        return JSON.parse(f);
      } catch (b) {
        if (h)
          throw b.name === "SyntaxError" ? Ht.from(b, Ht.ERR_BAD_RESPONSE, this, null, this.response) : b;
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
    FormData: io.classes.FormData,
    Blob: io.classes.Blob
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
te.forEach(["delete", "get", "head", "post", "put", "patch"], (a) => {
  Av.headers[a] = {};
});
const eL = te.toObjectSet([
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
]), tL = (a) => {
  const f = {};
  let p, g, S;
  return a && a.split(`
`).forEach(function(h) {
    S = h.indexOf(":"), p = h.substring(0, S).trim().toLowerCase(), g = h.substring(S + 1).trim(), !(!p || f[p] && eL[p]) && (p === "set-cookie" ? f[p] ? f[p].push(g) : f[p] = [g] : f[p] = f[p] ? f[p] + ", " + g : g);
  }), f;
}, AT = Symbol("internals");
function xv(a) {
  return a && String(a).trim().toLowerCase();
}
function Ry(a) {
  return a === !1 || a == null ? a : te.isArray(a) ? a.map(Ry) : String(a);
}
function nL(a) {
  const f = /* @__PURE__ */ Object.create(null), p = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let g;
  for (; g = p.exec(a); )
    f[g[1]] = g[2];
  return f;
}
const rL = (a) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());
function oE(a, f, p, g, S) {
  if (te.isFunction(g))
    return g.call(this, f, p);
  if (S && (f = p), !!te.isString(f)) {
    if (te.isString(g))
      return f.indexOf(g) !== -1;
    if (te.isRegExp(g))
      return g.test(f);
  }
}
function iL(a) {
  return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (f, p, g) => p.toUpperCase() + g);
}
function aL(a, f) {
  const p = te.toCamelCase(" " + f);
  ["get", "set", "has"].forEach((g) => {
    Object.defineProperty(a, g + p, {
      value: function(S, T, h) {
        return this[g].call(this, f, S, T, h);
      },
      configurable: !0
    });
  });
}
class Ia {
  constructor(f) {
    f && this.set(f);
  }
  set(f, p, g) {
    const S = this;
    function T(b, O, N) {
      const B = xv(O);
      if (!B)
        throw new Error("header name must be a non-empty string");
      const k = te.findKey(S, B);
      (!k || S[k] === void 0 || N === !0 || N === void 0 && S[k] !== !1) && (S[k || O] = Ry(b));
    }
    const h = (b, O) => te.forEach(b, (N, B) => T(N, B, O));
    return te.isPlainObject(f) || f instanceof this.constructor ? h(f, p) : te.isString(f) && (f = f.trim()) && !rL(f) ? h(tL(f), p) : f != null && T(p, f, g), this;
  }
  get(f, p) {
    if (f = xv(f), f) {
      const g = te.findKey(this, f);
      if (g) {
        const S = this[g];
        if (!p)
          return S;
        if (p === !0)
          return nL(S);
        if (te.isFunction(p))
          return p.call(this, S, g);
        if (te.isRegExp(p))
          return p.exec(S);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(f, p) {
    if (f = xv(f), f) {
      const g = te.findKey(this, f);
      return !!(g && this[g] !== void 0 && (!p || oE(this, this[g], g, p)));
    }
    return !1;
  }
  delete(f, p) {
    const g = this;
    let S = !1;
    function T(h) {
      if (h = xv(h), h) {
        const b = te.findKey(g, h);
        b && (!p || oE(g, g[b], b, p)) && (delete g[b], S = !0);
      }
    }
    return te.isArray(f) ? f.forEach(T) : T(f), S;
  }
  clear(f) {
    const p = Object.keys(this);
    let g = p.length, S = !1;
    for (; g--; ) {
      const T = p[g];
      (!f || oE(this, this[T], T, f, !0)) && (delete this[T], S = !0);
    }
    return S;
  }
  normalize(f) {
    const p = this, g = {};
    return te.forEach(this, (S, T) => {
      const h = te.findKey(g, T);
      if (h) {
        p[h] = Ry(S), delete p[T];
        return;
      }
      const b = f ? iL(T) : String(T).trim();
      b !== T && delete p[T], p[b] = Ry(S), g[b] = !0;
    }), this;
  }
  concat(...f) {
    return this.constructor.concat(this, ...f);
  }
  toJSON(f) {
    const p = /* @__PURE__ */ Object.create(null);
    return te.forEach(this, (g, S) => {
      g != null && g !== !1 && (p[S] = f && te.isArray(g) ? g.join(", ") : g);
    }), p;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([f, p]) => f + ": " + p).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(f) {
    return f instanceof this ? f : new this(f);
  }
  static concat(f, ...p) {
    const g = new this(f);
    return p.forEach((S) => g.set(S)), g;
  }
  static accessor(f) {
    const g = (this[AT] = this[AT] = {
      accessors: {}
    }).accessors, S = this.prototype;
    function T(h) {
      const b = xv(h);
      g[b] || (aL(S, h), g[b] = !0);
    }
    return te.isArray(f) ? f.forEach(T) : T(f), this;
  }
}
Ia.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
te.reduceDescriptors(Ia.prototype, ({ value: a }, f) => {
  let p = f[0].toUpperCase() + f.slice(1);
  return {
    get: () => a,
    set(g) {
      this[p] = g;
    }
  };
});
te.freezeMethods(Ia);
function uE(a, f) {
  const p = this || Av, g = f || p, S = Ia.from(g.headers);
  let T = g.data;
  return te.forEach(a, function(b) {
    T = b.call(p, T, S.normalize(), f ? f.status : void 0);
  }), S.normalize(), T;
}
function mR(a) {
  return !!(a && a.__CANCEL__);
}
function Lv(a, f, p) {
  Ht.call(this, a ?? "canceled", Ht.ERR_CANCELED, f, p), this.name = "CanceledError";
}
te.inherits(Lv, Ht, {
  __CANCEL__: !0
});
function lL(a, f, p) {
  const g = p.config.validateStatus;
  !p.status || !g || g(p.status) ? a(p) : f(new Ht(
    "Request failed with status code " + p.status,
    [Ht.ERR_BAD_REQUEST, Ht.ERR_BAD_RESPONSE][Math.floor(p.status / 100) - 4],
    p.config,
    p.request,
    p
  ));
}
const oL = io.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(a, f, p, g, S, T) {
      const h = [a + "=" + encodeURIComponent(f)];
      te.isNumber(p) && h.push("expires=" + new Date(p).toGMTString()), te.isString(g) && h.push("path=" + g), te.isString(S) && h.push("domain=" + S), T === !0 && h.push("secure"), document.cookie = h.join("; ");
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
function uL(a) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a);
}
function sL(a, f) {
  return f ? a.replace(/\/?\/$/, "") + "/" + f.replace(/^\/+/, "") : a;
}
function yR(a, f) {
  return a && !uL(f) ? sL(a, f) : f;
}
const cL = io.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const f = /(msie|trident)/i.test(navigator.userAgent), p = document.createElement("a");
    let g;
    function S(T) {
      let h = T;
      return f && (p.setAttribute("href", h), h = p.href), p.setAttribute("href", h), {
        href: p.href,
        protocol: p.protocol ? p.protocol.replace(/:$/, "") : "",
        host: p.host,
        search: p.search ? p.search.replace(/^\?/, "") : "",
        hash: p.hash ? p.hash.replace(/^#/, "") : "",
        hostname: p.hostname,
        port: p.port,
        pathname: p.pathname.charAt(0) === "/" ? p.pathname : "/" + p.pathname
      };
    }
    return g = S(window.location.href), function(h) {
      const b = te.isString(h) ? S(h) : h;
      return b.protocol === g.protocol && b.host === g.host;
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
function fL(a) {
  const f = /^([-+\w]{1,25})(:?\/\/|:)/.exec(a);
  return f && f[1] || "";
}
function dL(a, f) {
  a = a || 10;
  const p = new Array(a), g = new Array(a);
  let S = 0, T = 0, h;
  return f = f !== void 0 ? f : 1e3, function(O) {
    const N = Date.now(), B = g[T];
    h || (h = N), p[S] = O, g[S] = N;
    let k = T, Q = 0;
    for (; k !== S; )
      Q += p[k++], k = k % a;
    if (S = (S + 1) % a, S === T && (T = (T + 1) % a), N - h < f)
      return;
    const q = B && N - B;
    return q ? Math.round(Q * 1e3 / q) : void 0;
  };
}
function LT(a, f) {
  let p = 0;
  const g = dL(50, 250);
  return (S) => {
    const T = S.loaded, h = S.lengthComputable ? S.total : void 0, b = T - p, O = g(b), N = T <= h;
    p = T;
    const B = {
      loaded: T,
      total: h,
      progress: h ? T / h : void 0,
      bytes: b,
      rate: O || void 0,
      estimated: O && h && N ? (h - T) / O : void 0,
      event: S
    };
    B[f ? "download" : "upload"] = !0, a(B);
  };
}
const pL = typeof XMLHttpRequest < "u", vL = pL && function(a) {
  return new Promise(function(p, g) {
    let S = a.data;
    const T = Ia.from(a.headers).normalize();
    let { responseType: h, withXSRFToken: b } = a, O;
    function N() {
      a.cancelToken && a.cancelToken.unsubscribe(O), a.signal && a.signal.removeEventListener("abort", O);
    }
    let B;
    if (te.isFormData(S)) {
      if (io.hasStandardBrowserEnv || io.hasStandardBrowserWebWorkerEnv)
        T.setContentType(!1);
      else if ((B = T.getContentType()) !== !1) {
        const [ne, ...ye] = B ? B.split(";").map((Ke) => Ke.trim()).filter(Boolean) : [];
        T.setContentType([ne || "multipart/form-data", ...ye].join("; "));
      }
    }
    let k = new XMLHttpRequest();
    if (a.auth) {
      const ne = a.auth.username || "", ye = a.auth.password ? unescape(encodeURIComponent(a.auth.password)) : "";
      T.set("Authorization", "Basic " + btoa(ne + ":" + ye));
    }
    const Q = yR(a.baseURL, a.url);
    k.open(a.method.toUpperCase(), dR(Q, a.params, a.paramsSerializer), !0), k.timeout = a.timeout;
    function q() {
      if (!k)
        return;
      const ne = Ia.from(
        "getAllResponseHeaders" in k && k.getAllResponseHeaders()
      ), Ke = {
        data: !h || h === "text" || h === "json" ? k.responseText : k.response,
        status: k.status,
        statusText: k.statusText,
        headers: ne,
        config: a,
        request: k
      };
      lL(function(Be) {
        p(Be), N();
      }, function(Be) {
        g(Be), N();
      }, Ke), k = null;
    }
    if ("onloadend" in k ? k.onloadend = q : k.onreadystatechange = function() {
      !k || k.readyState !== 4 || k.status === 0 && !(k.responseURL && k.responseURL.indexOf("file:") === 0) || setTimeout(q);
    }, k.onabort = function() {
      k && (g(new Ht("Request aborted", Ht.ECONNABORTED, a, k)), k = null);
    }, k.onerror = function() {
      g(new Ht("Network Error", Ht.ERR_NETWORK, a, k)), k = null;
    }, k.ontimeout = function() {
      let ye = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const Ke = a.transitional || pR;
      a.timeoutErrorMessage && (ye = a.timeoutErrorMessage), g(new Ht(
        ye,
        Ke.clarifyTimeoutError ? Ht.ETIMEDOUT : Ht.ECONNABORTED,
        a,
        k
      )), k = null;
    }, io.hasStandardBrowserEnv && (b && te.isFunction(b) && (b = b(a)), b || b !== !1 && cL(Q))) {
      const ne = a.xsrfHeaderName && a.xsrfCookieName && oL.read(a.xsrfCookieName);
      ne && T.set(a.xsrfHeaderName, ne);
    }
    S === void 0 && T.setContentType(null), "setRequestHeader" in k && te.forEach(T.toJSON(), function(ye, Ke) {
      k.setRequestHeader(Ke, ye);
    }), te.isUndefined(a.withCredentials) || (k.withCredentials = !!a.withCredentials), h && h !== "json" && (k.responseType = a.responseType), typeof a.onDownloadProgress == "function" && k.addEventListener("progress", LT(a.onDownloadProgress, !0)), typeof a.onUploadProgress == "function" && k.upload && k.upload.addEventListener("progress", LT(a.onUploadProgress)), (a.cancelToken || a.signal) && (O = (ne) => {
      k && (g(!ne || ne.type ? new Lv(null, a, k) : ne), k.abort(), k = null);
    }, a.cancelToken && a.cancelToken.subscribe(O), a.signal && (a.signal.aborted ? O() : a.signal.addEventListener("abort", O)));
    const K = fL(Q);
    if (K && io.protocols.indexOf(K) === -1) {
      g(new Ht("Unsupported protocol " + K + ":", Ht.ERR_BAD_REQUEST, a));
      return;
    }
    k.send(S || null);
  });
}, gE = {
  http: HA,
  xhr: vL
};
te.forEach(gE, (a, f) => {
  if (a) {
    try {
      Object.defineProperty(a, "name", { value: f });
    } catch {
    }
    Object.defineProperty(a, "adapterName", { value: f });
  }
});
const NT = (a) => `- ${a}`, hL = (a) => te.isFunction(a) || a === null || a === !1, gR = {
  getAdapter: (a) => {
    a = te.isArray(a) ? a : [a];
    const { length: f } = a;
    let p, g;
    const S = {};
    for (let T = 0; T < f; T++) {
      p = a[T];
      let h;
      if (g = p, !hL(p) && (g = gE[(h = String(p)).toLowerCase()], g === void 0))
        throw new Ht(`Unknown adapter '${h}'`);
      if (g)
        break;
      S[h || "#" + T] = g;
    }
    if (!g) {
      const T = Object.entries(S).map(
        ([b, O]) => `adapter ${b} ` + (O === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let h = f ? T.length > 1 ? `since :
` + T.map(NT).join(`
`) : " " + NT(T[0]) : "as no adapter specified";
      throw new Ht(
        "There is no suitable adapter to dispatch the request " + h,
        "ERR_NOT_SUPPORT"
      );
    }
    return g;
  },
  adapters: gE
};
function sE(a) {
  if (a.cancelToken && a.cancelToken.throwIfRequested(), a.signal && a.signal.aborted)
    throw new Lv(null, a);
}
function MT(a) {
  return sE(a), a.headers = Ia.from(a.headers), a.data = uE.call(
    a,
    a.transformRequest
  ), ["post", "put", "patch"].indexOf(a.method) !== -1 && a.headers.setContentType("application/x-www-form-urlencoded", !1), gR.getAdapter(a.adapter || Av.adapter)(a).then(function(g) {
    return sE(a), g.data = uE.call(
      a,
      a.transformResponse,
      g
    ), g.headers = Ia.from(g.headers), g;
  }, function(g) {
    return mR(g) || (sE(a), g && g.response && (g.response.data = uE.call(
      a,
      a.transformResponse,
      g.response
    ), g.response.headers = Ia.from(g.response.headers))), Promise.reject(g);
  });
}
const UT = (a) => a instanceof Ia ? { ...a } : a;
function vd(a, f) {
  f = f || {};
  const p = {};
  function g(N, B, k) {
    return te.isPlainObject(N) && te.isPlainObject(B) ? te.merge.call({ caseless: k }, N, B) : te.isPlainObject(B) ? te.merge({}, B) : te.isArray(B) ? B.slice() : B;
  }
  function S(N, B, k) {
    if (te.isUndefined(B)) {
      if (!te.isUndefined(N))
        return g(void 0, N, k);
    } else
      return g(N, B, k);
  }
  function T(N, B) {
    if (!te.isUndefined(B))
      return g(void 0, B);
  }
  function h(N, B) {
    if (te.isUndefined(B)) {
      if (!te.isUndefined(N))
        return g(void 0, N);
    } else
      return g(void 0, B);
  }
  function b(N, B, k) {
    if (k in f)
      return g(N, B);
    if (k in a)
      return g(void 0, N);
  }
  const O = {
    url: T,
    method: T,
    data: T,
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
    validateStatus: b,
    headers: (N, B) => S(UT(N), UT(B), !0)
  };
  return te.forEach(Object.keys(Object.assign({}, a, f)), function(B) {
    const k = O[B] || S, Q = k(a[B], f[B], B);
    te.isUndefined(Q) && k !== b || (p[B] = Q);
  }), p;
}
const SR = "1.6.8", kE = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((a, f) => {
  kE[a] = function(g) {
    return typeof g === a || "a" + (f < 1 ? "n " : " ") + a;
  };
});
const FT = {};
kE.transitional = function(f, p, g) {
  function S(T, h) {
    return "[Axios v" + SR + "] Transitional option '" + T + "'" + h + (g ? ". " + g : "");
  }
  return (T, h, b) => {
    if (f === !1)
      throw new Ht(
        S(h, " has been removed" + (p ? " in " + p : "")),
        Ht.ERR_DEPRECATED
      );
    return p && !FT[h] && (FT[h] = !0, console.warn(
      S(
        h,
        " has been deprecated since v" + p + " and will be removed in the near future"
      )
    )), f ? f(T, h, b) : !0;
  };
};
function mL(a, f, p) {
  if (typeof a != "object")
    throw new Ht("options must be an object", Ht.ERR_BAD_OPTION_VALUE);
  const g = Object.keys(a);
  let S = g.length;
  for (; S-- > 0; ) {
    const T = g[S], h = f[T];
    if (h) {
      const b = a[T], O = b === void 0 || h(b, T, a);
      if (O !== !0)
        throw new Ht("option " + T + " must be " + O, Ht.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (p !== !0)
      throw new Ht("Unknown option " + T, Ht.ERR_BAD_OPTION);
  }
}
const SE = {
  assertOptions: mL,
  validators: kE
}, us = SE.validators;
class yc {
  constructor(f) {
    this.defaults = f, this.interceptors = {
      request: new DT(),
      response: new DT()
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
  async request(f, p) {
    try {
      return await this._request(f, p);
    } catch (g) {
      if (g instanceof Error) {
        let S;
        Error.captureStackTrace ? Error.captureStackTrace(S = {}) : S = new Error();
        const T = S.stack ? S.stack.replace(/^.+\n/, "") : "";
        g.stack ? T && !String(g.stack).endsWith(T.replace(/^.+\n.+\n/, "")) && (g.stack += `
` + T) : g.stack = T;
      }
      throw g;
    }
  }
  _request(f, p) {
    typeof f == "string" ? (p = p || {}, p.url = f) : p = f || {}, p = vd(this.defaults, p);
    const { transitional: g, paramsSerializer: S, headers: T } = p;
    g !== void 0 && SE.assertOptions(g, {
      silentJSONParsing: us.transitional(us.boolean),
      forcedJSONParsing: us.transitional(us.boolean),
      clarifyTimeoutError: us.transitional(us.boolean)
    }, !1), S != null && (te.isFunction(S) ? p.paramsSerializer = {
      serialize: S
    } : SE.assertOptions(S, {
      encode: us.function,
      serialize: us.function
    }, !0)), p.method = (p.method || this.defaults.method || "get").toLowerCase();
    let h = T && te.merge(
      T.common,
      T[p.method]
    );
    T && te.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (K) => {
        delete T[K];
      }
    ), p.headers = Ia.concat(h, T);
    const b = [];
    let O = !0;
    this.interceptors.request.forEach(function(ne) {
      typeof ne.runWhen == "function" && ne.runWhen(p) === !1 || (O = O && ne.synchronous, b.unshift(ne.fulfilled, ne.rejected));
    });
    const N = [];
    this.interceptors.response.forEach(function(ne) {
      N.push(ne.fulfilled, ne.rejected);
    });
    let B, k = 0, Q;
    if (!O) {
      const K = [MT.bind(this), void 0];
      for (K.unshift.apply(K, b), K.push.apply(K, N), Q = K.length, B = Promise.resolve(p); k < Q; )
        B = B.then(K[k++], K[k++]);
      return B;
    }
    Q = b.length;
    let q = p;
    for (k = 0; k < Q; ) {
      const K = b[k++], ne = b[k++];
      try {
        q = K(q);
      } catch (ye) {
        ne.call(this, ye);
        break;
      }
    }
    try {
      B = MT.call(this, q);
    } catch (K) {
      return Promise.reject(K);
    }
    for (k = 0, Q = N.length; k < Q; )
      B = B.then(N[k++], N[k++]);
    return B;
  }
  getUri(f) {
    f = vd(this.defaults, f);
    const p = yR(f.baseURL, f.url);
    return dR(p, f.params, f.paramsSerializer);
  }
}
te.forEach(["delete", "get", "head", "options"], function(f) {
  yc.prototype[f] = function(p, g) {
    return this.request(vd(g || {}, {
      method: f,
      url: p,
      data: (g || {}).data
    }));
  };
});
te.forEach(["post", "put", "patch"], function(f) {
  function p(g) {
    return function(T, h, b) {
      return this.request(vd(b || {}, {
        method: f,
        headers: g ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: T,
        data: h
      }));
    };
  }
  yc.prototype[f] = p(), yc.prototype[f + "Form"] = p(!0);
});
class OE {
  constructor(f) {
    if (typeof f != "function")
      throw new TypeError("executor must be a function.");
    let p;
    this.promise = new Promise(function(T) {
      p = T;
    });
    const g = this;
    this.promise.then((S) => {
      if (!g._listeners)
        return;
      let T = g._listeners.length;
      for (; T-- > 0; )
        g._listeners[T](S);
      g._listeners = null;
    }), this.promise.then = (S) => {
      let T;
      const h = new Promise((b) => {
        g.subscribe(b), T = b;
      }).then(S);
      return h.cancel = function() {
        g.unsubscribe(T);
      }, h;
    }, f(function(T, h, b) {
      g.reason || (g.reason = new Lv(T, h, b), p(g.reason));
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
    const p = this._listeners.indexOf(f);
    p !== -1 && this._listeners.splice(p, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let f;
    return {
      token: new OE(function(S) {
        f = S;
      }),
      cancel: f
    };
  }
}
function yL(a) {
  return function(p) {
    return a.apply(null, p);
  };
}
function gL(a) {
  return te.isObject(a) && a.isAxiosError === !0;
}
const EE = {
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
Object.entries(EE).forEach(([a, f]) => {
  EE[f] = a;
});
function ER(a) {
  const f = new yc(a), p = eR(yc.prototype.request, f);
  return te.extend(p, yc.prototype, f, { allOwnKeys: !0 }), te.extend(p, f, null, { allOwnKeys: !0 }), p.create = function(S) {
    return ER(vd(a, S));
  }, p;
}
const Kn = ER(Av);
Kn.Axios = yc;
Kn.CanceledError = Lv;
Kn.CancelToken = OE;
Kn.isCancel = mR;
Kn.VERSION = SR;
Kn.toFormData = Ny;
Kn.AxiosError = Ht;
Kn.Cancel = Kn.CanceledError;
Kn.all = function(f) {
  return Promise.all(f);
};
Kn.spread = yL;
Kn.isAxiosError = gL;
Kn.mergeConfig = vd;
Kn.AxiosHeaders = Ia;
Kn.formToJSON = (a) => hR(te.isHTMLForm(a) ? new FormData(a) : a);
Kn.getAdapter = gR.getAdapter;
Kn.HttpStatusCode = EE;
Kn.default = Kn;
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function CR(a) {
  return typeof a > "u" || a === null;
}
function SL(a) {
  return typeof a == "object" && a !== null;
}
function EL(a) {
  return Array.isArray(a) ? a : CR(a) ? [] : [a];
}
function CL(a, f) {
  var p, g, S, T;
  if (f)
    for (T = Object.keys(f), p = 0, g = T.length; p < g; p += 1)
      S = T[p], a[S] = f[S];
  return a;
}
function xL(a, f) {
  var p = "", g;
  for (g = 0; g < f; g += 1)
    p += a;
  return p;
}
function TL(a) {
  return a === 0 && Number.NEGATIVE_INFINITY === 1 / a;
}
var RL = CR, wL = SL, bL = EL, _L = xL, kL = TL, OL = CL, Er = {
  isNothing: RL,
  isObject: wL,
  toArray: bL,
  repeat: _L,
  isNegativeZero: kL,
  extend: OL
};
function xR(a, f) {
  var p = "", g = a.reason || "(unknown reason)";
  return a.mark ? (a.mark.name && (p += 'in "' + a.mark.name + '" '), p += "(" + (a.mark.line + 1) + ":" + (a.mark.column + 1) + ")", !f && a.mark.snippet && (p += `

` + a.mark.snippet), g + " " + p) : g;
}
function bv(a, f) {
  Error.call(this), this.name = "YAMLException", this.reason = a, this.mark = f, this.message = xR(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
bv.prototype = Object.create(Error.prototype);
bv.prototype.constructor = bv;
bv.prototype.toString = function(f) {
  return this.name + ": " + xR(this, f);
};
var Fi = bv;
function cE(a, f, p, g, S) {
  var T = "", h = "", b = Math.floor(S / 2) - 1;
  return g - f > b && (T = " ... ", f = g - b + T.length), p - g > b && (h = " ...", p = g + b - h.length), {
    str: T + a.slice(f, p).replace(/\t/g, "→") + h,
    pos: g - f + T.length
    // relative position
  };
}
function fE(a, f) {
  return Er.repeat(" ", f - a.length) + a;
}
function DL(a, f) {
  if (f = Object.create(f || null), !a.buffer)
    return null;
  f.maxLength || (f.maxLength = 79), typeof f.indent != "number" && (f.indent = 1), typeof f.linesBefore != "number" && (f.linesBefore = 3), typeof f.linesAfter != "number" && (f.linesAfter = 2);
  for (var p = /\r?\n|\r|\0/g, g = [0], S = [], T, h = -1; T = p.exec(a.buffer); )
    S.push(T.index), g.push(T.index + T[0].length), a.position <= T.index && h < 0 && (h = g.length - 2);
  h < 0 && (h = g.length - 1);
  var b = "", O, N, B = Math.min(a.line + f.linesAfter, S.length).toString().length, k = f.maxLength - (f.indent + B + 3);
  for (O = 1; O <= f.linesBefore && !(h - O < 0); O++)
    N = cE(
      a.buffer,
      g[h - O],
      S[h - O],
      a.position - (g[h] - g[h - O]),
      k
    ), b = Er.repeat(" ", f.indent) + fE((a.line - O + 1).toString(), B) + " | " + N.str + `
` + b;
  for (N = cE(a.buffer, g[h], S[h], a.position, k), b += Er.repeat(" ", f.indent) + fE((a.line + 1).toString(), B) + " | " + N.str + `
`, b += Er.repeat("-", f.indent + B + 3 + N.pos) + `^
`, O = 1; O <= f.linesAfter && !(h + O >= S.length); O++)
    N = cE(
      a.buffer,
      g[h + O],
      S[h + O],
      a.position - (g[h] - g[h + O]),
      k
    ), b += Er.repeat(" ", f.indent) + fE((a.line + O + 1).toString(), B) + " | " + N.str + `
`;
  return b.replace(/\n$/, "");
}
var AL = DL, LL = [
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
], NL = [
  "scalar",
  "sequence",
  "mapping"
];
function ML(a) {
  var f = {};
  return a !== null && Object.keys(a).forEach(function(p) {
    a[p].forEach(function(g) {
      f[String(g)] = p;
    });
  }), f;
}
function UL(a, f) {
  if (f = f || {}, Object.keys(f).forEach(function(p) {
    if (LL.indexOf(p) === -1)
      throw new Fi('Unknown option "' + p + '" is met in definition of "' + a + '" YAML type.');
  }), this.options = f, this.tag = a, this.kind = f.kind || null, this.resolve = f.resolve || function() {
    return !0;
  }, this.construct = f.construct || function(p) {
    return p;
  }, this.instanceOf = f.instanceOf || null, this.predicate = f.predicate || null, this.represent = f.represent || null, this.representName = f.representName || null, this.defaultStyle = f.defaultStyle || null, this.multi = f.multi || !1, this.styleAliases = ML(f.styleAliases || null), NL.indexOf(this.kind) === -1)
    throw new Fi('Unknown kind "' + this.kind + '" is specified for "' + a + '" YAML type.');
}
var qr = UL;
function zT(a, f) {
  var p = [];
  return a[f].forEach(function(g) {
    var S = p.length;
    p.forEach(function(T, h) {
      T.tag === g.tag && T.kind === g.kind && T.multi === g.multi && (S = h);
    }), p[S] = g;
  }), p;
}
function FL() {
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
  }, f, p;
  function g(S) {
    S.multi ? (a.multi[S.kind].push(S), a.multi.fallback.push(S)) : a[S.kind][S.tag] = a.fallback[S.tag] = S;
  }
  for (f = 0, p = arguments.length; f < p; f += 1)
    arguments[f].forEach(g);
  return a;
}
function CE(a) {
  return this.extend(a);
}
CE.prototype.extend = function(f) {
  var p = [], g = [];
  if (f instanceof qr)
    g.push(f);
  else if (Array.isArray(f))
    g = g.concat(f);
  else if (f && (Array.isArray(f.implicit) || Array.isArray(f.explicit)))
    f.implicit && (p = p.concat(f.implicit)), f.explicit && (g = g.concat(f.explicit));
  else
    throw new Fi("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  p.forEach(function(T) {
    if (!(T instanceof qr))
      throw new Fi("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (T.loadKind && T.loadKind !== "scalar")
      throw new Fi("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (T.multi)
      throw new Fi("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), g.forEach(function(T) {
    if (!(T instanceof qr))
      throw new Fi("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var S = Object.create(CE.prototype);
  return S.implicit = (this.implicit || []).concat(p), S.explicit = (this.explicit || []).concat(g), S.compiledImplicit = zT(S, "implicit"), S.compiledExplicit = zT(S, "explicit"), S.compiledTypeMap = FL(S.compiledImplicit, S.compiledExplicit), S;
};
var TR = CE, RR = new qr("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(a) {
    return a !== null ? a : "";
  }
}), wR = new qr("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(a) {
    return a !== null ? a : [];
  }
}), bR = new qr("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(a) {
    return a !== null ? a : {};
  }
}), _R = new TR({
  explicit: [
    RR,
    wR,
    bR
  ]
});
function zL(a) {
  if (a === null)
    return !0;
  var f = a.length;
  return f === 1 && a === "~" || f === 4 && (a === "null" || a === "Null" || a === "NULL");
}
function jL() {
  return null;
}
function HL(a) {
  return a === null;
}
var kR = new qr("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: zL,
  construct: jL,
  predicate: HL,
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
function PL(a) {
  if (a === null)
    return !1;
  var f = a.length;
  return f === 4 && (a === "true" || a === "True" || a === "TRUE") || f === 5 && (a === "false" || a === "False" || a === "FALSE");
}
function BL(a) {
  return a === "true" || a === "True" || a === "TRUE";
}
function VL(a) {
  return Object.prototype.toString.call(a) === "[object Boolean]";
}
var OR = new qr("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: PL,
  construct: BL,
  predicate: VL,
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
function IL(a) {
  return 48 <= a && a <= 57 || 65 <= a && a <= 70 || 97 <= a && a <= 102;
}
function $L(a) {
  return 48 <= a && a <= 55;
}
function YL(a) {
  return 48 <= a && a <= 57;
}
function WL(a) {
  if (a === null)
    return !1;
  var f = a.length, p = 0, g = !1, S;
  if (!f)
    return !1;
  if (S = a[p], (S === "-" || S === "+") && (S = a[++p]), S === "0") {
    if (p + 1 === f)
      return !0;
    if (S = a[++p], S === "b") {
      for (p++; p < f; p++)
        if (S = a[p], S !== "_") {
          if (S !== "0" && S !== "1")
            return !1;
          g = !0;
        }
      return g && S !== "_";
    }
    if (S === "x") {
      for (p++; p < f; p++)
        if (S = a[p], S !== "_") {
          if (!IL(a.charCodeAt(p)))
            return !1;
          g = !0;
        }
      return g && S !== "_";
    }
    if (S === "o") {
      for (p++; p < f; p++)
        if (S = a[p], S !== "_") {
          if (!$L(a.charCodeAt(p)))
            return !1;
          g = !0;
        }
      return g && S !== "_";
    }
  }
  if (S === "_")
    return !1;
  for (; p < f; p++)
    if (S = a[p], S !== "_") {
      if (!YL(a.charCodeAt(p)))
        return !1;
      g = !0;
    }
  return !(!g || S === "_");
}
function QL(a) {
  var f = a, p = 1, g;
  if (f.indexOf("_") !== -1 && (f = f.replace(/_/g, "")), g = f[0], (g === "-" || g === "+") && (g === "-" && (p = -1), f = f.slice(1), g = f[0]), f === "0")
    return 0;
  if (g === "0") {
    if (f[1] === "b")
      return p * parseInt(f.slice(2), 2);
    if (f[1] === "x")
      return p * parseInt(f.slice(2), 16);
    if (f[1] === "o")
      return p * parseInt(f.slice(2), 8);
  }
  return p * parseInt(f, 10);
}
function qL(a) {
  return Object.prototype.toString.call(a) === "[object Number]" && a % 1 === 0 && !Er.isNegativeZero(a);
}
var DR = new qr("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: WL,
  construct: QL,
  predicate: qL,
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
}), GL = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function KL(a) {
  return !(a === null || !GL.test(a) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  a[a.length - 1] === "_");
}
function XL(a) {
  var f, p;
  return f = a.replace(/_/g, "").toLowerCase(), p = f[0] === "-" ? -1 : 1, "+-".indexOf(f[0]) >= 0 && (f = f.slice(1)), f === ".inf" ? p === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : f === ".nan" ? NaN : p * parseFloat(f, 10);
}
var JL = /^[-+]?[0-9]+e/;
function ZL(a, f) {
  var p;
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
  else if (Er.isNegativeZero(a))
    return "-0.0";
  return p = a.toString(10), JL.test(p) ? p.replace("e", ".e") : p;
}
function eN(a) {
  return Object.prototype.toString.call(a) === "[object Number]" && (a % 1 !== 0 || Er.isNegativeZero(a));
}
var AR = new qr("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: KL,
  construct: XL,
  predicate: eN,
  represent: ZL,
  defaultStyle: "lowercase"
}), LR = _R.extend({
  implicit: [
    kR,
    OR,
    DR,
    AR
  ]
}), NR = LR, MR = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), UR = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function tN(a) {
  return a === null ? !1 : MR.exec(a) !== null || UR.exec(a) !== null;
}
function nN(a) {
  var f, p, g, S, T, h, b, O = 0, N = null, B, k, Q;
  if (f = MR.exec(a), f === null && (f = UR.exec(a)), f === null)
    throw new Error("Date resolve error");
  if (p = +f[1], g = +f[2] - 1, S = +f[3], !f[4])
    return new Date(Date.UTC(p, g, S));
  if (T = +f[4], h = +f[5], b = +f[6], f[7]) {
    for (O = f[7].slice(0, 3); O.length < 3; )
      O += "0";
    O = +O;
  }
  return f[9] && (B = +f[10], k = +(f[11] || 0), N = (B * 60 + k) * 6e4, f[9] === "-" && (N = -N)), Q = new Date(Date.UTC(p, g, S, T, h, b, O)), N && Q.setTime(Q.getTime() - N), Q;
}
function rN(a) {
  return a.toISOString();
}
var FR = new qr("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: tN,
  construct: nN,
  instanceOf: Date,
  represent: rN
});
function iN(a) {
  return a === "<<" || a === null;
}
var zR = new qr("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: iN
}), DE = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function aN(a) {
  if (a === null)
    return !1;
  var f, p, g = 0, S = a.length, T = DE;
  for (p = 0; p < S; p++)
    if (f = T.indexOf(a.charAt(p)), !(f > 64)) {
      if (f < 0)
        return !1;
      g += 6;
    }
  return g % 8 === 0;
}
function lN(a) {
  var f, p, g = a.replace(/[\r\n=]/g, ""), S = g.length, T = DE, h = 0, b = [];
  for (f = 0; f < S; f++)
    f % 4 === 0 && f && (b.push(h >> 16 & 255), b.push(h >> 8 & 255), b.push(h & 255)), h = h << 6 | T.indexOf(g.charAt(f));
  return p = S % 4 * 6, p === 0 ? (b.push(h >> 16 & 255), b.push(h >> 8 & 255), b.push(h & 255)) : p === 18 ? (b.push(h >> 10 & 255), b.push(h >> 2 & 255)) : p === 12 && b.push(h >> 4 & 255), new Uint8Array(b);
}
function oN(a) {
  var f = "", p = 0, g, S, T = a.length, h = DE;
  for (g = 0; g < T; g++)
    g % 3 === 0 && g && (f += h[p >> 18 & 63], f += h[p >> 12 & 63], f += h[p >> 6 & 63], f += h[p & 63]), p = (p << 8) + a[g];
  return S = T % 3, S === 0 ? (f += h[p >> 18 & 63], f += h[p >> 12 & 63], f += h[p >> 6 & 63], f += h[p & 63]) : S === 2 ? (f += h[p >> 10 & 63], f += h[p >> 4 & 63], f += h[p << 2 & 63], f += h[64]) : S === 1 && (f += h[p >> 2 & 63], f += h[p << 4 & 63], f += h[64], f += h[64]), f;
}
function uN(a) {
  return Object.prototype.toString.call(a) === "[object Uint8Array]";
}
var jR = new qr("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: aN,
  construct: lN,
  predicate: uN,
  represent: oN
}), sN = Object.prototype.hasOwnProperty, cN = Object.prototype.toString;
function fN(a) {
  if (a === null)
    return !0;
  var f = [], p, g, S, T, h, b = a;
  for (p = 0, g = b.length; p < g; p += 1) {
    if (S = b[p], h = !1, cN.call(S) !== "[object Object]")
      return !1;
    for (T in S)
      if (sN.call(S, T))
        if (!h)
          h = !0;
        else
          return !1;
    if (!h)
      return !1;
    if (f.indexOf(T) === -1)
      f.push(T);
    else
      return !1;
  }
  return !0;
}
function dN(a) {
  return a !== null ? a : [];
}
var HR = new qr("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: fN,
  construct: dN
}), pN = Object.prototype.toString;
function vN(a) {
  if (a === null)
    return !0;
  var f, p, g, S, T, h = a;
  for (T = new Array(h.length), f = 0, p = h.length; f < p; f += 1) {
    if (g = h[f], pN.call(g) !== "[object Object]" || (S = Object.keys(g), S.length !== 1))
      return !1;
    T[f] = [S[0], g[S[0]]];
  }
  return !0;
}
function hN(a) {
  if (a === null)
    return [];
  var f, p, g, S, T, h = a;
  for (T = new Array(h.length), f = 0, p = h.length; f < p; f += 1)
    g = h[f], S = Object.keys(g), T[f] = [S[0], g[S[0]]];
  return T;
}
var PR = new qr("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: vN,
  construct: hN
}), mN = Object.prototype.hasOwnProperty;
function yN(a) {
  if (a === null)
    return !0;
  var f, p = a;
  for (f in p)
    if (mN.call(p, f) && p[f] !== null)
      return !1;
  return !0;
}
function gN(a) {
  return a !== null ? a : {};
}
var BR = new qr("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: yN,
  construct: gN
}), AE = NR.extend({
  implicit: [
    FR,
    zR
  ],
  explicit: [
    jR,
    HR,
    PR,
    BR
  ]
}), cs = Object.prototype.hasOwnProperty, wy = 1, VR = 2, IR = 3, by = 4, dE = 1, SN = 2, jT = 3, EN = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, CN = /[\x85\u2028\u2029]/, xN = /[,\[\]\{\}]/, $R = /^(?:!|!!|![a-z\-]+!)$/i, YR = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function HT(a) {
  return Object.prototype.toString.call(a);
}
function ao(a) {
  return a === 10 || a === 13;
}
function gc(a) {
  return a === 9 || a === 32;
}
function ua(a) {
  return a === 9 || a === 32 || a === 10 || a === 13;
}
function dd(a) {
  return a === 44 || a === 91 || a === 93 || a === 123 || a === 125;
}
function TN(a) {
  var f;
  return 48 <= a && a <= 57 ? a - 48 : (f = a | 32, 97 <= f && f <= 102 ? f - 97 + 10 : -1);
}
function RN(a) {
  return a === 120 ? 2 : a === 117 ? 4 : a === 85 ? 8 : 0;
}
function wN(a) {
  return 48 <= a && a <= 57 ? a - 48 : -1;
}
function PT(a) {
  return a === 48 ? "\0" : a === 97 ? "\x07" : a === 98 ? "\b" : a === 116 || a === 9 ? "	" : a === 110 ? `
` : a === 118 ? "\v" : a === 102 ? "\f" : a === 114 ? "\r" : a === 101 ? "\x1B" : a === 32 ? " " : a === 34 ? '"' : a === 47 ? "/" : a === 92 ? "\\" : a === 78 ? "" : a === 95 ? " " : a === 76 ? "\u2028" : a === 80 ? "\u2029" : "";
}
function bN(a) {
  return a <= 65535 ? String.fromCharCode(a) : String.fromCharCode(
    (a - 65536 >> 10) + 55296,
    (a - 65536 & 1023) + 56320
  );
}
var WR = new Array(256), QR = new Array(256);
for (var cd = 0; cd < 256; cd++)
  WR[cd] = PT(cd) ? 1 : 0, QR[cd] = PT(cd);
function _N(a, f) {
  this.input = a, this.filename = f.filename || null, this.schema = f.schema || AE, this.onWarning = f.onWarning || null, this.legacy = f.legacy || !1, this.json = f.json || !1, this.listener = f.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = a.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function qR(a, f) {
  var p = {
    name: a.filename,
    buffer: a.input.slice(0, -1),
    // omit trailing \0
    position: a.position,
    line: a.line,
    column: a.position - a.lineStart
  };
  return p.snippet = AL(p), new Fi(f, p);
}
function Ie(a, f) {
  throw qR(a, f);
}
function _y(a, f) {
  a.onWarning && a.onWarning.call(null, qR(a, f));
}
var BT = {
  YAML: function(f, p, g) {
    var S, T, h;
    f.version !== null && Ie(f, "duplication of %YAML directive"), g.length !== 1 && Ie(f, "YAML directive accepts exactly one argument"), S = /^([0-9]+)\.([0-9]+)$/.exec(g[0]), S === null && Ie(f, "ill-formed argument of the YAML directive"), T = parseInt(S[1], 10), h = parseInt(S[2], 10), T !== 1 && Ie(f, "unacceptable YAML version of the document"), f.version = g[0], f.checkLineBreaks = h < 2, h !== 1 && h !== 2 && _y(f, "unsupported YAML version of the document");
  },
  TAG: function(f, p, g) {
    var S, T;
    g.length !== 2 && Ie(f, "TAG directive accepts exactly two arguments"), S = g[0], T = g[1], $R.test(S) || Ie(f, "ill-formed tag handle (first argument) of the TAG directive"), cs.call(f.tagMap, S) && Ie(f, 'there is a previously declared suffix for "' + S + '" tag handle'), YR.test(T) || Ie(f, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      T = decodeURIComponent(T);
    } catch {
      Ie(f, "tag prefix is malformed: " + T);
    }
    f.tagMap[S] = T;
  }
};
function ss(a, f, p, g) {
  var S, T, h, b;
  if (f < p) {
    if (b = a.input.slice(f, p), g)
      for (S = 0, T = b.length; S < T; S += 1)
        h = b.charCodeAt(S), h === 9 || 32 <= h && h <= 1114111 || Ie(a, "expected valid JSON character");
    else
      EN.test(b) && Ie(a, "the stream contains non-printable characters");
    a.result += b;
  }
}
function VT(a, f, p, g) {
  var S, T, h, b;
  for (Er.isObject(p) || Ie(a, "cannot merge mappings; the provided source object is unacceptable"), S = Object.keys(p), h = 0, b = S.length; h < b; h += 1)
    T = S[h], cs.call(f, T) || (f[T] = p[T], g[T] = !0);
}
function pd(a, f, p, g, S, T, h, b, O) {
  var N, B;
  if (Array.isArray(S))
    for (S = Array.prototype.slice.call(S), N = 0, B = S.length; N < B; N += 1)
      Array.isArray(S[N]) && Ie(a, "nested arrays are not supported inside keys"), typeof S == "object" && HT(S[N]) === "[object Object]" && (S[N] = "[object Object]");
  if (typeof S == "object" && HT(S) === "[object Object]" && (S = "[object Object]"), S = String(S), f === null && (f = {}), g === "tag:yaml.org,2002:merge")
    if (Array.isArray(T))
      for (N = 0, B = T.length; N < B; N += 1)
        VT(a, f, T[N], p);
    else
      VT(a, f, T, p);
  else
    !a.json && !cs.call(p, S) && cs.call(f, S) && (a.line = h || a.line, a.lineStart = b || a.lineStart, a.position = O || a.position, Ie(a, "duplicated mapping key")), S === "__proto__" ? Object.defineProperty(f, S, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: T
    }) : f[S] = T, delete p[S];
  return f;
}
function LE(a) {
  var f;
  f = a.input.charCodeAt(a.position), f === 10 ? a.position++ : f === 13 ? (a.position++, a.input.charCodeAt(a.position) === 10 && a.position++) : Ie(a, "a line break is expected"), a.line += 1, a.lineStart = a.position, a.firstTabInLine = -1;
}
function or(a, f, p) {
  for (var g = 0, S = a.input.charCodeAt(a.position); S !== 0; ) {
    for (; gc(S); )
      S === 9 && a.firstTabInLine === -1 && (a.firstTabInLine = a.position), S = a.input.charCodeAt(++a.position);
    if (f && S === 35)
      do
        S = a.input.charCodeAt(++a.position);
      while (S !== 10 && S !== 13 && S !== 0);
    if (ao(S))
      for (LE(a), S = a.input.charCodeAt(a.position), g++, a.lineIndent = 0; S === 32; )
        a.lineIndent++, S = a.input.charCodeAt(++a.position);
    else
      break;
  }
  return p !== -1 && g !== 0 && a.lineIndent < p && _y(a, "deficient indentation"), g;
}
function My(a) {
  var f = a.position, p;
  return p = a.input.charCodeAt(f), !!((p === 45 || p === 46) && p === a.input.charCodeAt(f + 1) && p === a.input.charCodeAt(f + 2) && (f += 3, p = a.input.charCodeAt(f), p === 0 || ua(p)));
}
function NE(a, f) {
  f === 1 ? a.result += " " : f > 1 && (a.result += Er.repeat(`
`, f - 1));
}
function kN(a, f, p) {
  var g, S, T, h, b, O, N, B, k = a.kind, Q = a.result, q;
  if (q = a.input.charCodeAt(a.position), ua(q) || dd(q) || q === 35 || q === 38 || q === 42 || q === 33 || q === 124 || q === 62 || q === 39 || q === 34 || q === 37 || q === 64 || q === 96 || (q === 63 || q === 45) && (S = a.input.charCodeAt(a.position + 1), ua(S) || p && dd(S)))
    return !1;
  for (a.kind = "scalar", a.result = "", T = h = a.position, b = !1; q !== 0; ) {
    if (q === 58) {
      if (S = a.input.charCodeAt(a.position + 1), ua(S) || p && dd(S))
        break;
    } else if (q === 35) {
      if (g = a.input.charCodeAt(a.position - 1), ua(g))
        break;
    } else {
      if (a.position === a.lineStart && My(a) || p && dd(q))
        break;
      if (ao(q))
        if (O = a.line, N = a.lineStart, B = a.lineIndent, or(a, !1, -1), a.lineIndent >= f) {
          b = !0, q = a.input.charCodeAt(a.position);
          continue;
        } else {
          a.position = h, a.line = O, a.lineStart = N, a.lineIndent = B;
          break;
        }
    }
    b && (ss(a, T, h, !1), NE(a, a.line - O), T = h = a.position, b = !1), gc(q) || (h = a.position + 1), q = a.input.charCodeAt(++a.position);
  }
  return ss(a, T, h, !1), a.result ? !0 : (a.kind = k, a.result = Q, !1);
}
function ON(a, f) {
  var p, g, S;
  if (p = a.input.charCodeAt(a.position), p !== 39)
    return !1;
  for (a.kind = "scalar", a.result = "", a.position++, g = S = a.position; (p = a.input.charCodeAt(a.position)) !== 0; )
    if (p === 39)
      if (ss(a, g, a.position, !0), p = a.input.charCodeAt(++a.position), p === 39)
        g = a.position, a.position++, S = a.position;
      else
        return !0;
    else
      ao(p) ? (ss(a, g, S, !0), NE(a, or(a, !1, f)), g = S = a.position) : a.position === a.lineStart && My(a) ? Ie(a, "unexpected end of the document within a single quoted scalar") : (a.position++, S = a.position);
  Ie(a, "unexpected end of the stream within a single quoted scalar");
}
function DN(a, f) {
  var p, g, S, T, h, b;
  if (b = a.input.charCodeAt(a.position), b !== 34)
    return !1;
  for (a.kind = "scalar", a.result = "", a.position++, p = g = a.position; (b = a.input.charCodeAt(a.position)) !== 0; ) {
    if (b === 34)
      return ss(a, p, a.position, !0), a.position++, !0;
    if (b === 92) {
      if (ss(a, p, a.position, !0), b = a.input.charCodeAt(++a.position), ao(b))
        or(a, !1, f);
      else if (b < 256 && WR[b])
        a.result += QR[b], a.position++;
      else if ((h = RN(b)) > 0) {
        for (S = h, T = 0; S > 0; S--)
          b = a.input.charCodeAt(++a.position), (h = TN(b)) >= 0 ? T = (T << 4) + h : Ie(a, "expected hexadecimal character");
        a.result += bN(T), a.position++;
      } else
        Ie(a, "unknown escape sequence");
      p = g = a.position;
    } else
      ao(b) ? (ss(a, p, g, !0), NE(a, or(a, !1, f)), p = g = a.position) : a.position === a.lineStart && My(a) ? Ie(a, "unexpected end of the document within a double quoted scalar") : (a.position++, g = a.position);
  }
  Ie(a, "unexpected end of the stream within a double quoted scalar");
}
function AN(a, f) {
  var p = !0, g, S, T, h = a.tag, b, O = a.anchor, N, B, k, Q, q, K = /* @__PURE__ */ Object.create(null), ne, ye, Ke, ve;
  if (ve = a.input.charCodeAt(a.position), ve === 91)
    B = 93, q = !1, b = [];
  else if (ve === 123)
    B = 125, q = !0, b = {};
  else
    return !1;
  for (a.anchor !== null && (a.anchorMap[a.anchor] = b), ve = a.input.charCodeAt(++a.position); ve !== 0; ) {
    if (or(a, !0, f), ve = a.input.charCodeAt(a.position), ve === B)
      return a.position++, a.tag = h, a.anchor = O, a.kind = q ? "mapping" : "sequence", a.result = b, !0;
    p ? ve === 44 && Ie(a, "expected the node content, but found ','") : Ie(a, "missed comma between flow collection entries"), ye = ne = Ke = null, k = Q = !1, ve === 63 && (N = a.input.charCodeAt(a.position + 1), ua(N) && (k = Q = !0, a.position++, or(a, !0, f))), g = a.line, S = a.lineStart, T = a.position, hd(a, f, wy, !1, !0), ye = a.tag, ne = a.result, or(a, !0, f), ve = a.input.charCodeAt(a.position), (Q || a.line === g) && ve === 58 && (k = !0, ve = a.input.charCodeAt(++a.position), or(a, !0, f), hd(a, f, wy, !1, !0), Ke = a.result), q ? pd(a, b, K, ye, ne, Ke, g, S, T) : k ? b.push(pd(a, null, K, ye, ne, Ke, g, S, T)) : b.push(ne), or(a, !0, f), ve = a.input.charCodeAt(a.position), ve === 44 ? (p = !0, ve = a.input.charCodeAt(++a.position)) : p = !1;
  }
  Ie(a, "unexpected end of the stream within a flow collection");
}
function LN(a, f) {
  var p, g, S = dE, T = !1, h = !1, b = f, O = 0, N = !1, B, k;
  if (k = a.input.charCodeAt(a.position), k === 124)
    g = !1;
  else if (k === 62)
    g = !0;
  else
    return !1;
  for (a.kind = "scalar", a.result = ""; k !== 0; )
    if (k = a.input.charCodeAt(++a.position), k === 43 || k === 45)
      dE === S ? S = k === 43 ? jT : SN : Ie(a, "repeat of a chomping mode identifier");
    else if ((B = wN(k)) >= 0)
      B === 0 ? Ie(a, "bad explicit indentation width of a block scalar; it cannot be less than one") : h ? Ie(a, "repeat of an indentation width identifier") : (b = f + B - 1, h = !0);
    else
      break;
  if (gc(k)) {
    do
      k = a.input.charCodeAt(++a.position);
    while (gc(k));
    if (k === 35)
      do
        k = a.input.charCodeAt(++a.position);
      while (!ao(k) && k !== 0);
  }
  for (; k !== 0; ) {
    for (LE(a), a.lineIndent = 0, k = a.input.charCodeAt(a.position); (!h || a.lineIndent < b) && k === 32; )
      a.lineIndent++, k = a.input.charCodeAt(++a.position);
    if (!h && a.lineIndent > b && (b = a.lineIndent), ao(k)) {
      O++;
      continue;
    }
    if (a.lineIndent < b) {
      S === jT ? a.result += Er.repeat(`
`, T ? 1 + O : O) : S === dE && T && (a.result += `
`);
      break;
    }
    for (g ? gc(k) ? (N = !0, a.result += Er.repeat(`
`, T ? 1 + O : O)) : N ? (N = !1, a.result += Er.repeat(`
`, O + 1)) : O === 0 ? T && (a.result += " ") : a.result += Er.repeat(`
`, O) : a.result += Er.repeat(`
`, T ? 1 + O : O), T = !0, h = !0, O = 0, p = a.position; !ao(k) && k !== 0; )
      k = a.input.charCodeAt(++a.position);
    ss(a, p, a.position, !1);
  }
  return !0;
}
function IT(a, f) {
  var p, g = a.tag, S = a.anchor, T = [], h, b = !1, O;
  if (a.firstTabInLine !== -1)
    return !1;
  for (a.anchor !== null && (a.anchorMap[a.anchor] = T), O = a.input.charCodeAt(a.position); O !== 0 && (a.firstTabInLine !== -1 && (a.position = a.firstTabInLine, Ie(a, "tab characters must not be used in indentation")), !(O !== 45 || (h = a.input.charCodeAt(a.position + 1), !ua(h)))); ) {
    if (b = !0, a.position++, or(a, !0, -1) && a.lineIndent <= f) {
      T.push(null), O = a.input.charCodeAt(a.position);
      continue;
    }
    if (p = a.line, hd(a, f, IR, !1, !0), T.push(a.result), or(a, !0, -1), O = a.input.charCodeAt(a.position), (a.line === p || a.lineIndent > f) && O !== 0)
      Ie(a, "bad indentation of a sequence entry");
    else if (a.lineIndent < f)
      break;
  }
  return b ? (a.tag = g, a.anchor = S, a.kind = "sequence", a.result = T, !0) : !1;
}
function NN(a, f, p) {
  var g, S, T, h, b, O, N = a.tag, B = a.anchor, k = {}, Q = /* @__PURE__ */ Object.create(null), q = null, K = null, ne = null, ye = !1, Ke = !1, ve;
  if (a.firstTabInLine !== -1)
    return !1;
  for (a.anchor !== null && (a.anchorMap[a.anchor] = k), ve = a.input.charCodeAt(a.position); ve !== 0; ) {
    if (!ye && a.firstTabInLine !== -1 && (a.position = a.firstTabInLine, Ie(a, "tab characters must not be used in indentation")), g = a.input.charCodeAt(a.position + 1), T = a.line, (ve === 63 || ve === 58) && ua(g))
      ve === 63 ? (ye && (pd(a, k, Q, q, K, null, h, b, O), q = K = ne = null), Ke = !0, ye = !0, S = !0) : ye ? (ye = !1, S = !0) : Ie(a, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), a.position += 1, ve = g;
    else {
      if (h = a.line, b = a.lineStart, O = a.position, !hd(a, p, VR, !1, !0))
        break;
      if (a.line === T) {
        for (ve = a.input.charCodeAt(a.position); gc(ve); )
          ve = a.input.charCodeAt(++a.position);
        if (ve === 58)
          ve = a.input.charCodeAt(++a.position), ua(ve) || Ie(a, "a whitespace character is expected after the key-value separator within a block mapping"), ye && (pd(a, k, Q, q, K, null, h, b, O), q = K = ne = null), Ke = !0, ye = !1, S = !1, q = a.tag, K = a.result;
        else if (Ke)
          Ie(a, "can not read an implicit mapping pair; a colon is missed");
        else
          return a.tag = N, a.anchor = B, !0;
      } else if (Ke)
        Ie(a, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return a.tag = N, a.anchor = B, !0;
    }
    if ((a.line === T || a.lineIndent > f) && (ye && (h = a.line, b = a.lineStart, O = a.position), hd(a, f, by, !0, S) && (ye ? K = a.result : ne = a.result), ye || (pd(a, k, Q, q, K, ne, h, b, O), q = K = ne = null), or(a, !0, -1), ve = a.input.charCodeAt(a.position)), (a.line === T || a.lineIndent > f) && ve !== 0)
      Ie(a, "bad indentation of a mapping entry");
    else if (a.lineIndent < f)
      break;
  }
  return ye && pd(a, k, Q, q, K, null, h, b, O), Ke && (a.tag = N, a.anchor = B, a.kind = "mapping", a.result = k), Ke;
}
function MN(a) {
  var f, p = !1, g = !1, S, T, h;
  if (h = a.input.charCodeAt(a.position), h !== 33)
    return !1;
  if (a.tag !== null && Ie(a, "duplication of a tag property"), h = a.input.charCodeAt(++a.position), h === 60 ? (p = !0, h = a.input.charCodeAt(++a.position)) : h === 33 ? (g = !0, S = "!!", h = a.input.charCodeAt(++a.position)) : S = "!", f = a.position, p) {
    do
      h = a.input.charCodeAt(++a.position);
    while (h !== 0 && h !== 62);
    a.position < a.length ? (T = a.input.slice(f, a.position), h = a.input.charCodeAt(++a.position)) : Ie(a, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; h !== 0 && !ua(h); )
      h === 33 && (g ? Ie(a, "tag suffix cannot contain exclamation marks") : (S = a.input.slice(f - 1, a.position + 1), $R.test(S) || Ie(a, "named tag handle cannot contain such characters"), g = !0, f = a.position + 1)), h = a.input.charCodeAt(++a.position);
    T = a.input.slice(f, a.position), xN.test(T) && Ie(a, "tag suffix cannot contain flow indicator characters");
  }
  T && !YR.test(T) && Ie(a, "tag name cannot contain such characters: " + T);
  try {
    T = decodeURIComponent(T);
  } catch {
    Ie(a, "tag name is malformed: " + T);
  }
  return p ? a.tag = T : cs.call(a.tagMap, S) ? a.tag = a.tagMap[S] + T : S === "!" ? a.tag = "!" + T : S === "!!" ? a.tag = "tag:yaml.org,2002:" + T : Ie(a, 'undeclared tag handle "' + S + '"'), !0;
}
function UN(a) {
  var f, p;
  if (p = a.input.charCodeAt(a.position), p !== 38)
    return !1;
  for (a.anchor !== null && Ie(a, "duplication of an anchor property"), p = a.input.charCodeAt(++a.position), f = a.position; p !== 0 && !ua(p) && !dd(p); )
    p = a.input.charCodeAt(++a.position);
  return a.position === f && Ie(a, "name of an anchor node must contain at least one character"), a.anchor = a.input.slice(f, a.position), !0;
}
function FN(a) {
  var f, p, g;
  if (g = a.input.charCodeAt(a.position), g !== 42)
    return !1;
  for (g = a.input.charCodeAt(++a.position), f = a.position; g !== 0 && !ua(g) && !dd(g); )
    g = a.input.charCodeAt(++a.position);
  return a.position === f && Ie(a, "name of an alias node must contain at least one character"), p = a.input.slice(f, a.position), cs.call(a.anchorMap, p) || Ie(a, 'unidentified alias "' + p + '"'), a.result = a.anchorMap[p], or(a, !0, -1), !0;
}
function hd(a, f, p, g, S) {
  var T, h, b, O = 1, N = !1, B = !1, k, Q, q, K, ne, ye;
  if (a.listener !== null && a.listener("open", a), a.tag = null, a.anchor = null, a.kind = null, a.result = null, T = h = b = by === p || IR === p, g && or(a, !0, -1) && (N = !0, a.lineIndent > f ? O = 1 : a.lineIndent === f ? O = 0 : a.lineIndent < f && (O = -1)), O === 1)
    for (; MN(a) || UN(a); )
      or(a, !0, -1) ? (N = !0, b = T, a.lineIndent > f ? O = 1 : a.lineIndent === f ? O = 0 : a.lineIndent < f && (O = -1)) : b = !1;
  if (b && (b = N || S), (O === 1 || by === p) && (wy === p || VR === p ? ne = f : ne = f + 1, ye = a.position - a.lineStart, O === 1 ? b && (IT(a, ye) || NN(a, ye, ne)) || AN(a, ne) ? B = !0 : (h && LN(a, ne) || ON(a, ne) || DN(a, ne) ? B = !0 : FN(a) ? (B = !0, (a.tag !== null || a.anchor !== null) && Ie(a, "alias node should not have any properties")) : kN(a, ne, wy === p) && (B = !0, a.tag === null && (a.tag = "?")), a.anchor !== null && (a.anchorMap[a.anchor] = a.result)) : O === 0 && (B = b && IT(a, ye))), a.tag === null)
    a.anchor !== null && (a.anchorMap[a.anchor] = a.result);
  else if (a.tag === "?") {
    for (a.result !== null && a.kind !== "scalar" && Ie(a, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + a.kind + '"'), k = 0, Q = a.implicitTypes.length; k < Q; k += 1)
      if (K = a.implicitTypes[k], K.resolve(a.result)) {
        a.result = K.construct(a.result), a.tag = K.tag, a.anchor !== null && (a.anchorMap[a.anchor] = a.result);
        break;
      }
  } else if (a.tag !== "!") {
    if (cs.call(a.typeMap[a.kind || "fallback"], a.tag))
      K = a.typeMap[a.kind || "fallback"][a.tag];
    else
      for (K = null, q = a.typeMap.multi[a.kind || "fallback"], k = 0, Q = q.length; k < Q; k += 1)
        if (a.tag.slice(0, q[k].tag.length) === q[k].tag) {
          K = q[k];
          break;
        }
    K || Ie(a, "unknown tag !<" + a.tag + ">"), a.result !== null && K.kind !== a.kind && Ie(a, "unacceptable node kind for !<" + a.tag + '> tag; it should be "' + K.kind + '", not "' + a.kind + '"'), K.resolve(a.result, a.tag) ? (a.result = K.construct(a.result, a.tag), a.anchor !== null && (a.anchorMap[a.anchor] = a.result)) : Ie(a, "cannot resolve a node with !<" + a.tag + "> explicit tag");
  }
  return a.listener !== null && a.listener("close", a), a.tag !== null || a.anchor !== null || B;
}
function zN(a) {
  var f = a.position, p, g, S, T = !1, h;
  for (a.version = null, a.checkLineBreaks = a.legacy, a.tagMap = /* @__PURE__ */ Object.create(null), a.anchorMap = /* @__PURE__ */ Object.create(null); (h = a.input.charCodeAt(a.position)) !== 0 && (or(a, !0, -1), h = a.input.charCodeAt(a.position), !(a.lineIndent > 0 || h !== 37)); ) {
    for (T = !0, h = a.input.charCodeAt(++a.position), p = a.position; h !== 0 && !ua(h); )
      h = a.input.charCodeAt(++a.position);
    for (g = a.input.slice(p, a.position), S = [], g.length < 1 && Ie(a, "directive name must not be less than one character in length"); h !== 0; ) {
      for (; gc(h); )
        h = a.input.charCodeAt(++a.position);
      if (h === 35) {
        do
          h = a.input.charCodeAt(++a.position);
        while (h !== 0 && !ao(h));
        break;
      }
      if (ao(h))
        break;
      for (p = a.position; h !== 0 && !ua(h); )
        h = a.input.charCodeAt(++a.position);
      S.push(a.input.slice(p, a.position));
    }
    h !== 0 && LE(a), cs.call(BT, g) ? BT[g](a, g, S) : _y(a, 'unknown document directive "' + g + '"');
  }
  if (or(a, !0, -1), a.lineIndent === 0 && a.input.charCodeAt(a.position) === 45 && a.input.charCodeAt(a.position + 1) === 45 && a.input.charCodeAt(a.position + 2) === 45 ? (a.position += 3, or(a, !0, -1)) : T && Ie(a, "directives end mark is expected"), hd(a, a.lineIndent - 1, by, !1, !0), or(a, !0, -1), a.checkLineBreaks && CN.test(a.input.slice(f, a.position)) && _y(a, "non-ASCII line breaks are interpreted as content"), a.documents.push(a.result), a.position === a.lineStart && My(a)) {
    a.input.charCodeAt(a.position) === 46 && (a.position += 3, or(a, !0, -1));
    return;
  }
  if (a.position < a.length - 1)
    Ie(a, "end of the stream or a document separator is expected");
  else
    return;
}
function GR(a, f) {
  a = String(a), f = f || {}, a.length !== 0 && (a.charCodeAt(a.length - 1) !== 10 && a.charCodeAt(a.length - 1) !== 13 && (a += `
`), a.charCodeAt(0) === 65279 && (a = a.slice(1)));
  var p = new _N(a, f), g = a.indexOf("\0");
  for (g !== -1 && (p.position = g, Ie(p, "null byte is not allowed in input")), p.input += "\0"; p.input.charCodeAt(p.position) === 32; )
    p.lineIndent += 1, p.position += 1;
  for (; p.position < p.length - 1; )
    zN(p);
  return p.documents;
}
function jN(a, f, p) {
  f !== null && typeof f == "object" && typeof p > "u" && (p = f, f = null);
  var g = GR(a, p);
  if (typeof f != "function")
    return g;
  for (var S = 0, T = g.length; S < T; S += 1)
    f(g[S]);
}
function HN(a, f) {
  var p = GR(a, f);
  if (p.length !== 0) {
    if (p.length === 1)
      return p[0];
    throw new Fi("expected a single document in the stream, but found more");
  }
}
var PN = jN, BN = HN, KR = {
  loadAll: PN,
  load: BN
}, XR = Object.prototype.toString, JR = Object.prototype.hasOwnProperty, ME = 65279, VN = 9, _v = 10, IN = 13, $N = 32, YN = 33, WN = 34, xE = 35, QN = 37, qN = 38, GN = 39, KN = 42, ZR = 44, XN = 45, ky = 58, JN = 61, ZN = 62, e2 = 63, t2 = 64, ew = 91, tw = 93, n2 = 96, nw = 123, r2 = 124, rw = 125, Si = {};
Si[0] = "\\0";
Si[7] = "\\a";
Si[8] = "\\b";
Si[9] = "\\t";
Si[10] = "\\n";
Si[11] = "\\v";
Si[12] = "\\f";
Si[13] = "\\r";
Si[27] = "\\e";
Si[34] = '\\"';
Si[92] = "\\\\";
Si[133] = "\\N";
Si[160] = "\\_";
Si[8232] = "\\L";
Si[8233] = "\\P";
var i2 = [
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
], a2 = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function l2(a, f) {
  var p, g, S, T, h, b, O;
  if (f === null)
    return {};
  for (p = {}, g = Object.keys(f), S = 0, T = g.length; S < T; S += 1)
    h = g[S], b = String(f[h]), h.slice(0, 2) === "!!" && (h = "tag:yaml.org,2002:" + h.slice(2)), O = a.compiledTypeMap.fallback[h], O && JR.call(O.styleAliases, b) && (b = O.styleAliases[b]), p[h] = b;
  return p;
}
function o2(a) {
  var f, p, g;
  if (f = a.toString(16).toUpperCase(), a <= 255)
    p = "x", g = 2;
  else if (a <= 65535)
    p = "u", g = 4;
  else if (a <= 4294967295)
    p = "U", g = 8;
  else
    throw new Fi("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + p + Er.repeat("0", g - f.length) + f;
}
var u2 = 1, kv = 2;
function s2(a) {
  this.schema = a.schema || AE, this.indent = Math.max(1, a.indent || 2), this.noArrayIndent = a.noArrayIndent || !1, this.skipInvalid = a.skipInvalid || !1, this.flowLevel = Er.isNothing(a.flowLevel) ? -1 : a.flowLevel, this.styleMap = l2(this.schema, a.styles || null), this.sortKeys = a.sortKeys || !1, this.lineWidth = a.lineWidth || 80, this.noRefs = a.noRefs || !1, this.noCompatMode = a.noCompatMode || !1, this.condenseFlow = a.condenseFlow || !1, this.quotingType = a.quotingType === '"' ? kv : u2, this.forceQuotes = a.forceQuotes || !1, this.replacer = typeof a.replacer == "function" ? a.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function $T(a, f) {
  for (var p = Er.repeat(" ", f), g = 0, S = -1, T = "", h, b = a.length; g < b; )
    S = a.indexOf(`
`, g), S === -1 ? (h = a.slice(g), g = b) : (h = a.slice(g, S + 1), g = S + 1), h.length && h !== `
` && (T += p), T += h;
  return T;
}
function TE(a, f) {
  return `
` + Er.repeat(" ", a.indent * f);
}
function c2(a, f) {
  var p, g, S;
  for (p = 0, g = a.implicitTypes.length; p < g; p += 1)
    if (S = a.implicitTypes[p], S.resolve(f))
      return !0;
  return !1;
}
function Oy(a) {
  return a === $N || a === VN;
}
function Ov(a) {
  return 32 <= a && a <= 126 || 161 <= a && a <= 55295 && a !== 8232 && a !== 8233 || 57344 <= a && a <= 65533 && a !== ME || 65536 <= a && a <= 1114111;
}
function YT(a) {
  return Ov(a) && a !== ME && a !== IN && a !== _v;
}
function WT(a, f, p) {
  var g = YT(a), S = g && !Oy(a);
  return (
    // ns-plain-safe
    (p ? (
      // c = flow-in
      g
    ) : g && a !== ZR && a !== ew && a !== tw && a !== nw && a !== rw) && a !== xE && !(f === ky && !S) || YT(f) && !Oy(f) && a === xE || f === ky && S
  );
}
function f2(a) {
  return Ov(a) && a !== ME && !Oy(a) && a !== XN && a !== e2 && a !== ky && a !== ZR && a !== ew && a !== tw && a !== nw && a !== rw && a !== xE && a !== qN && a !== KN && a !== YN && a !== r2 && a !== JN && a !== ZN && a !== GN && a !== WN && a !== QN && a !== t2 && a !== n2;
}
function d2(a) {
  return !Oy(a) && a !== ky;
}
function Rv(a, f) {
  var p = a.charCodeAt(f), g;
  return p >= 55296 && p <= 56319 && f + 1 < a.length && (g = a.charCodeAt(f + 1), g >= 56320 && g <= 57343) ? (p - 55296) * 1024 + g - 56320 + 65536 : p;
}
function iw(a) {
  var f = /^\n* /;
  return f.test(a);
}
var aw = 1, RE = 2, lw = 3, ow = 4, fd = 5;
function p2(a, f, p, g, S, T, h, b) {
  var O, N = 0, B = null, k = !1, Q = !1, q = g !== -1, K = -1, ne = f2(Rv(a, 0)) && d2(Rv(a, a.length - 1));
  if (f || h)
    for (O = 0; O < a.length; N >= 65536 ? O += 2 : O++) {
      if (N = Rv(a, O), !Ov(N))
        return fd;
      ne = ne && WT(N, B, b), B = N;
    }
  else {
    for (O = 0; O < a.length; N >= 65536 ? O += 2 : O++) {
      if (N = Rv(a, O), N === _v)
        k = !0, q && (Q = Q || // Foldable line = too long, and not more-indented.
        O - K - 1 > g && a[K + 1] !== " ", K = O);
      else if (!Ov(N))
        return fd;
      ne = ne && WT(N, B, b), B = N;
    }
    Q = Q || q && O - K - 1 > g && a[K + 1] !== " ";
  }
  return !k && !Q ? ne && !h && !S(a) ? aw : T === kv ? fd : RE : p > 9 && iw(a) ? fd : h ? T === kv ? fd : RE : Q ? ow : lw;
}
function v2(a, f, p, g, S) {
  a.dump = function() {
    if (f.length === 0)
      return a.quotingType === kv ? '""' : "''";
    if (!a.noCompatMode && (i2.indexOf(f) !== -1 || a2.test(f)))
      return a.quotingType === kv ? '"' + f + '"' : "'" + f + "'";
    var T = a.indent * Math.max(1, p), h = a.lineWidth === -1 ? -1 : Math.max(Math.min(a.lineWidth, 40), a.lineWidth - T), b = g || a.flowLevel > -1 && p >= a.flowLevel;
    function O(N) {
      return c2(a, N);
    }
    switch (p2(
      f,
      b,
      a.indent,
      h,
      O,
      a.quotingType,
      a.forceQuotes && !g,
      S
    )) {
      case aw:
        return f;
      case RE:
        return "'" + f.replace(/'/g, "''") + "'";
      case lw:
        return "|" + QT(f, a.indent) + qT($T(f, T));
      case ow:
        return ">" + QT(f, a.indent) + qT($T(h2(f, h), T));
      case fd:
        return '"' + m2(f) + '"';
      default:
        throw new Fi("impossible error: invalid scalar style");
    }
  }();
}
function QT(a, f) {
  var p = iw(a) ? String(f) : "", g = a[a.length - 1] === `
`, S = g && (a[a.length - 2] === `
` || a === `
`), T = S ? "+" : g ? "" : "-";
  return p + T + `
`;
}
function qT(a) {
  return a[a.length - 1] === `
` ? a.slice(0, -1) : a;
}
function h2(a, f) {
  for (var p = /(\n+)([^\n]*)/g, g = function() {
    var N = a.indexOf(`
`);
    return N = N !== -1 ? N : a.length, p.lastIndex = N, GT(a.slice(0, N), f);
  }(), S = a[0] === `
` || a[0] === " ", T, h; h = p.exec(a); ) {
    var b = h[1], O = h[2];
    T = O[0] === " ", g += b + (!S && !T && O !== "" ? `
` : "") + GT(O, f), S = T;
  }
  return g;
}
function GT(a, f) {
  if (a === "" || a[0] === " ")
    return a;
  for (var p = / [^ ]/g, g, S = 0, T, h = 0, b = 0, O = ""; g = p.exec(a); )
    b = g.index, b - S > f && (T = h > S ? h : b, O += `
` + a.slice(S, T), S = T + 1), h = b;
  return O += `
`, a.length - S > f && h > S ? O += a.slice(S, h) + `
` + a.slice(h + 1) : O += a.slice(S), O.slice(1);
}
function m2(a) {
  for (var f = "", p = 0, g, S = 0; S < a.length; p >= 65536 ? S += 2 : S++)
    p = Rv(a, S), g = Si[p], !g && Ov(p) ? (f += a[S], p >= 65536 && (f += a[S + 1])) : f += g || o2(p);
  return f;
}
function y2(a, f, p) {
  var g = "", S = a.tag, T, h, b;
  for (T = 0, h = p.length; T < h; T += 1)
    b = p[T], a.replacer && (b = a.replacer.call(p, String(T), b)), (Go(a, f, b, !1, !1) || typeof b > "u" && Go(a, f, null, !1, !1)) && (g !== "" && (g += "," + (a.condenseFlow ? "" : " ")), g += a.dump);
  a.tag = S, a.dump = "[" + g + "]";
}
function KT(a, f, p, g) {
  var S = "", T = a.tag, h, b, O;
  for (h = 0, b = p.length; h < b; h += 1)
    O = p[h], a.replacer && (O = a.replacer.call(p, String(h), O)), (Go(a, f + 1, O, !0, !0, !1, !0) || typeof O > "u" && Go(a, f + 1, null, !0, !0, !1, !0)) && ((!g || S !== "") && (S += TE(a, f)), a.dump && _v === a.dump.charCodeAt(0) ? S += "-" : S += "- ", S += a.dump);
  a.tag = T, a.dump = S || "[]";
}
function g2(a, f, p) {
  var g = "", S = a.tag, T = Object.keys(p), h, b, O, N, B;
  for (h = 0, b = T.length; h < b; h += 1)
    B = "", g !== "" && (B += ", "), a.condenseFlow && (B += '"'), O = T[h], N = p[O], a.replacer && (N = a.replacer.call(p, O, N)), Go(a, f, O, !1, !1) && (a.dump.length > 1024 && (B += "? "), B += a.dump + (a.condenseFlow ? '"' : "") + ":" + (a.condenseFlow ? "" : " "), Go(a, f, N, !1, !1) && (B += a.dump, g += B));
  a.tag = S, a.dump = "{" + g + "}";
}
function S2(a, f, p, g) {
  var S = "", T = a.tag, h = Object.keys(p), b, O, N, B, k, Q;
  if (a.sortKeys === !0)
    h.sort();
  else if (typeof a.sortKeys == "function")
    h.sort(a.sortKeys);
  else if (a.sortKeys)
    throw new Fi("sortKeys must be a boolean or a function");
  for (b = 0, O = h.length; b < O; b += 1)
    Q = "", (!g || S !== "") && (Q += TE(a, f)), N = h[b], B = p[N], a.replacer && (B = a.replacer.call(p, N, B)), Go(a, f + 1, N, !0, !0, !0) && (k = a.tag !== null && a.tag !== "?" || a.dump && a.dump.length > 1024, k && (a.dump && _v === a.dump.charCodeAt(0) ? Q += "?" : Q += "? "), Q += a.dump, k && (Q += TE(a, f)), Go(a, f + 1, B, !0, k) && (a.dump && _v === a.dump.charCodeAt(0) ? Q += ":" : Q += ": ", Q += a.dump, S += Q));
  a.tag = T, a.dump = S || "{}";
}
function XT(a, f, p) {
  var g, S, T, h, b, O;
  for (S = p ? a.explicitTypes : a.implicitTypes, T = 0, h = S.length; T < h; T += 1)
    if (b = S[T], (b.instanceOf || b.predicate) && (!b.instanceOf || typeof f == "object" && f instanceof b.instanceOf) && (!b.predicate || b.predicate(f))) {
      if (p ? b.multi && b.representName ? a.tag = b.representName(f) : a.tag = b.tag : a.tag = "?", b.represent) {
        if (O = a.styleMap[b.tag] || b.defaultStyle, XR.call(b.represent) === "[object Function]")
          g = b.represent(f, O);
        else if (JR.call(b.represent, O))
          g = b.represent[O](f, O);
        else
          throw new Fi("!<" + b.tag + '> tag resolver accepts not "' + O + '" style');
        a.dump = g;
      }
      return !0;
    }
  return !1;
}
function Go(a, f, p, g, S, T, h) {
  a.tag = null, a.dump = p, XT(a, p, !1) || XT(a, p, !0);
  var b = XR.call(a.dump), O = g, N;
  g && (g = a.flowLevel < 0 || a.flowLevel > f);
  var B = b === "[object Object]" || b === "[object Array]", k, Q;
  if (B && (k = a.duplicates.indexOf(p), Q = k !== -1), (a.tag !== null && a.tag !== "?" || Q || a.indent !== 2 && f > 0) && (S = !1), Q && a.usedDuplicates[k])
    a.dump = "*ref_" + k;
  else {
    if (B && Q && !a.usedDuplicates[k] && (a.usedDuplicates[k] = !0), b === "[object Object]")
      g && Object.keys(a.dump).length !== 0 ? (S2(a, f, a.dump, S), Q && (a.dump = "&ref_" + k + a.dump)) : (g2(a, f, a.dump), Q && (a.dump = "&ref_" + k + " " + a.dump));
    else if (b === "[object Array]")
      g && a.dump.length !== 0 ? (a.noArrayIndent && !h && f > 0 ? KT(a, f - 1, a.dump, S) : KT(a, f, a.dump, S), Q && (a.dump = "&ref_" + k + a.dump)) : (y2(a, f, a.dump), Q && (a.dump = "&ref_" + k + " " + a.dump));
    else if (b === "[object String]")
      a.tag !== "?" && v2(a, a.dump, f, T, O);
    else {
      if (b === "[object Undefined]")
        return !1;
      if (a.skipInvalid)
        return !1;
      throw new Fi("unacceptable kind of an object to dump " + b);
    }
    a.tag !== null && a.tag !== "?" && (N = encodeURI(
      a.tag[0] === "!" ? a.tag.slice(1) : a.tag
    ).replace(/!/g, "%21"), a.tag[0] === "!" ? N = "!" + N : N.slice(0, 18) === "tag:yaml.org,2002:" ? N = "!!" + N.slice(18) : N = "!<" + N + ">", a.dump = N + " " + a.dump);
  }
  return !0;
}
function E2(a, f) {
  var p = [], g = [], S, T;
  for (wE(a, p, g), S = 0, T = g.length; S < T; S += 1)
    f.duplicates.push(p[g[S]]);
  f.usedDuplicates = new Array(T);
}
function wE(a, f, p) {
  var g, S, T;
  if (a !== null && typeof a == "object")
    if (S = f.indexOf(a), S !== -1)
      p.indexOf(S) === -1 && p.push(S);
    else if (f.push(a), Array.isArray(a))
      for (S = 0, T = a.length; S < T; S += 1)
        wE(a[S], f, p);
    else
      for (g = Object.keys(a), S = 0, T = g.length; S < T; S += 1)
        wE(a[g[S]], f, p);
}
function C2(a, f) {
  f = f || {};
  var p = new s2(f);
  p.noRefs || E2(a, p);
  var g = a;
  return p.replacer && (g = p.replacer.call({ "": g }, "", g)), Go(p, 0, g, !0, !0) ? p.dump + `
` : "";
}
var x2 = C2, T2 = {
  dump: x2
};
function UE(a, f) {
  return function() {
    throw new Error("Function yaml." + a + " is removed in js-yaml 4. Use yaml." + f + " instead, which is now safe by default.");
  };
}
var R2 = qr, w2 = TR, b2 = _R, _2 = LR, k2 = NR, O2 = AE, D2 = KR.load, A2 = KR.loadAll, L2 = T2.dump, N2 = Fi, M2 = {
  binary: jR,
  float: AR,
  map: bR,
  null: kR,
  pairs: PR,
  set: BR,
  timestamp: FR,
  bool: OR,
  int: DR,
  merge: zR,
  omap: HR,
  seq: wR,
  str: RR
}, U2 = UE("safeLoad", "load"), F2 = UE("safeLoadAll", "loadAll"), z2 = UE("safeDump", "dump"), j2 = {
  Type: R2,
  Schema: w2,
  FAILSAFE_SCHEMA: b2,
  JSON_SCHEMA: _2,
  CORE_SCHEMA: k2,
  DEFAULT_SCHEMA: O2,
  load: D2,
  loadAll: A2,
  dump: L2,
  YAMLException: N2,
  types: M2,
  safeLoad: U2,
  safeLoadAll: F2,
  safeDump: z2
};
const H2 = () => {
  const [a, f] = qo.useState(""), [p, g] = qo.useState(""), [S, T] = qo.useState(""), [h, b] = qo.useState(null);
  qo.useEffect(() => {
    const B = async () => {
      const Q = await O();
      b(Q);
      const q = await N(Q.app.frontend), K = await N(Q.app.backend), ne = await N(Q.database);
      f(q), g(K), T(ne);
    };
    B();
    const k = setInterval(B, 6e4);
    return () => clearInterval(k);
  }, []);
  async function O() {
    const B = await Kn.get("/config.yml");
    return j2.load(B.data);
  }
  async function N(B) {
    try {
      return (await Kn.get(`http://${B.host}:${B.port}`)).status === 200 ? "online" : "offline";
    } catch {
      return "offline";
    }
  }
  return h ? /* @__PURE__ */ ot.jsxs("div", { className: "flex items-center justify-center min-h-screen flex-col", children: [
    /* @__PURE__ */ ot.jsx("img", { src: "assets/img/background.jpg", className: "absolute h-screen w-screen -z-10" }),
    /* @__PURE__ */ ot.jsxs("div", { className: "flex flex-col justify-center items-center max-w-xl p-12 bg-slate-800 rounded-2xl shadow-md bg-opacity-70 backdrop-filter backdrop-blur", children: [
      /* @__PURE__ */ ot.jsxs("div", { className: "flex justify-center items-center", children: [
        /* @__PURE__ */ ot.jsx("a", { href: "https://github.com/KingMaj0r/harmony", children: /* @__PURE__ */ ot.jsx("img", { src: "assets/img/favicon.png", className: "h-24" }) }),
        /* @__PURE__ */ ot.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-8 w-8 text-gray-500",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: /* @__PURE__ */ ot.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4v16m8-8H4" })
          }
        ),
        /* @__PURE__ */ ot.jsx("a", { href: "https://vitejs.dev", children: /* @__PURE__ */ ot.jsxs("svg", { viewBox: "0 0 410 404", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "h-24 w-auto", children: [
          /* @__PURE__ */ ot.jsx(
            "path",
            {
              d: "M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z",
              fill: "url(#paint0_linear)"
            }
          ),
          /* @__PURE__ */ ot.jsx(
            "path",
            {
              d: "M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z",
              fill: "url(#paint1_linear)"
            }
          ),
          /* @__PURE__ */ ot.jsxs("defs", { children: [
            /* @__PURE__ */ ot.jsxs("linearGradient", { id: "paint0_linear", x1: 6.00017, y1: 32.9999, x2: 235, y2: 344, gradientUnits: "userSpaceOnUse", children: [
              /* @__PURE__ */ ot.jsx("stop", { stopColor: "#41D1FF" }),
              /* @__PURE__ */ ot.jsx("stop", { offset: 1, stopColor: "#BD34FE" })
            ] }),
            /* @__PURE__ */ ot.jsxs("linearGradient", { id: "paint1_linear", x1: 194.651, y1: 8.81818, x2: 236.076, y2: 292.989, gradientUnits: "userSpaceOnUse", children: [
              /* @__PURE__ */ ot.jsx("stop", { stopColor: "#FFEA83" }),
              /* @__PURE__ */ ot.jsx("stop", { offset: 0.0833333, stopColor: "#FFDD35" }),
              /* @__PURE__ */ ot.jsx("stop", { offset: 1, stopColor: "#FFA800" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ ot.jsx("p", { className: "text-lg text-center text-white mb-8", children: "Harmony frontend working!" }),
      /* @__PURE__ */ ot.jsx("p", { className: "text-center text-white mb-2", children: "This page can only be accessed if the app environment is set to development. Otherwise this is inaccessible to the public." }),
      /* @__PURE__ */ ot.jsx("p", { className: "text-center text-gray-500 mb-2", children: "STATS" }),
      /* @__PURE__ */ ot.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ ot.jsx("table", { className: "w-full text-sm shadow-sm", children: /* @__PURE__ */ ot.jsxs("tbody", { children: [
        /* @__PURE__ */ ot.jsxs("tr", { className: "frontend-status", children: [
          /* @__PURE__ */ ot.jsx("td", { className: "text-gray-400", children: "Frontend" }),
          /* @__PURE__ */ ot.jsx("td", { className: "text-blue-500", children: h.app.url + ":" + h.app.frontend.port }),
          /* @__PURE__ */ ot.jsx("td", { className: `text-${a === "online" ? "green" : "red"}-500`, children: a })
        ] }),
        /* @__PURE__ */ ot.jsxs("tr", { children: [
          /* @__PURE__ */ ot.jsx("td", { className: "text-gray-400", children: "Backend" }),
          /* @__PURE__ */ ot.jsx("td", { className: "text-blue-500", children: h.app.url + ":" + h.app.backend.port }),
          /* @__PURE__ */ ot.jsx("td", { className: `text-${p === "online" ? "green" : "red"}-500`, children: p })
        ] }),
        /* @__PURE__ */ ot.jsxs("tr", { children: [
          /* @__PURE__ */ ot.jsx("td", { className: "text-gray-400", children: "Database" }),
          /* @__PURE__ */ ot.jsx("td", { className: "text-blue-500", children: h.database.host + ":" + h.database.port }),
          /* @__PURE__ */ ot.jsx("td", { className: `text-${S === "online" ? "green" : "red"}-500`, children: S })
        ] })
      ] }) }) })
    ] })
  ] }) : /* @__PURE__ */ ot.jsxs("div", { className: "flex items-center justify-center min-h-screen flex-col", children: [
    /* @__PURE__ */ ot.jsx("img", { src: "assets/img/background.jpg", className: "absolute h-screen w-screen -z-10" }),
    /* @__PURE__ */ ot.jsxs("div", { className: "flex flex-col justify-center items-center max-w-xl p-12 bg-slate-800 rounded-2xl shadow-md bg-opacity-70 backdrop-filter backdrop-blur", children: [
      /* @__PURE__ */ ot.jsx("a", { href: "https://github.com/KingMaj0r/harmony", children: /* @__PURE__ */ ot.jsx("img", { src: "assets/img/logo.png", className: "h-24" }) }),
      /* @__PURE__ */ ot.jsxs("div", { className: "text-white text-wrap", children: [
        "config.yml does not exist. Please create a config.yml and specify the values or get a example config.yml at ",
        /* @__PURE__ */ ot.jsx("a", { className: "text-blue-500", href: "https://github.com/KingMaj0r/harmony", children: "the harmony repo" }),
        "."
      ] })
    ] })
  ] });
};
iA.render(/* @__PURE__ */ ot.jsx(H2, {}), document.getElementById("root"));
//# sourceMappingURL=index.mjs.map

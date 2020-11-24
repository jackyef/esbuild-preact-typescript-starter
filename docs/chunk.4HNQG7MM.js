// node_modules/goober/dist/goober.module.js
var e = {data: ""};
var t = (t3) => {
  try {
    let e3 = t3 ? t3.querySelector("#_goober") : self._goober;
    return e3 || (e3 = (t3 || document.head).appendChild(document.createElement("style")), e3.innerHTML = " ", e3.id = "_goober"), e3.firstChild;
  } catch (e3) {
  }
  return t3 || e;
};
var a = /(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi;
var l = /\/\*[\s\S]*?\*\/|\s{2,}|\n/gm;
var o = (e3, t3) => {
  let r2, a3 = "", l3 = "", c3 = "";
  for (let n3 in e3) {
    let s3 = e3[n3];
    typeof s3 == "object" ? (r2 = t3 ? t3.replace(/([^,])+/g, (e4) => n3.replace(/([^,])+/g, (t4) => /&/g.test(t4) ? t4.replace(/&/g, e4) : e4 ? e4 + " " + t4 : t4)) : n3, l3 += n3[0] == "@" ? n3[1] == "f" ? o(s3, n3) : n3 + "{" + o(s3, n3[1] == "k" ? "" : t3) + "}" : o(s3, r2)) : n3[0] == "@" && n3[1] == "i" ? a3 = n3 + " " + s3 + ";" : c3 += o.p ? o.p(n3.replace(/[A-Z]/g, "-$&").toLowerCase(), s3) : n3.replace(/[A-Z]/g, "-$&").toLowerCase() + ":" + s3 + ";";
  }
  return c3[0] ? (r2 = t3 ? t3 + "{" + c3 + "}" : c3, a3 + r2 + l3) : a3 + l3;
};
var c = {};
var n = (e3) => {
  let t3 = "";
  for (let r2 in e3)
    t3 += r2 + (typeof e3[r2] == "object" ? n(e3[r2]) : e3[r2]);
  return t3;
};
var s = (e3, t3, r2, s3, p3) => {
  let i3 = typeof e3 == "object" ? n(e3) : e3, u2 = c[i3] || (c[i3] = "go" + i3.split("").reduce((e4, t4) => 101 * e4 + t4.charCodeAt(0) >>> 0, 11));
  if (!c[u2]) {
    let t4 = typeof e3 == "object" ? e3 : ((e4) => {
      let t5, r3 = [{}];
      for (; t5 = a.exec(e4.replace(l, "")); )
        t5[4] && r3.shift(), t5[3] ? r3.unshift(r3[0][t5[3]] = r3[0][t5[3]] || {}) : t5[4] || (r3[0][t5[1]] = t5[2]);
      return r3[0];
    })(e3);
    c[u2] = o(p3 ? {["@keyframes " + u2]: t4} : t4, r2 ? "" : "." + u2);
  }
  return ((e4, t4, r3) => {
    t4.data.indexOf(e4) < 0 && (t4.data = r3 ? e4 + t4.data : t4.data + e4);
  })(c[u2], t3, s3), u2;
};
var p = (e3, t3, r2) => e3.reduce((e4, a3, l3) => {
  let c3 = t3[l3];
  if (c3 && c3.call) {
    let e5 = c3(r2), t4 = e5 && e5.props && e5.props.className || /^go/.test(e5) && e5;
    c3 = t4 ? "." + t4 : e5 && typeof e5 == "object" ? e5.props ? "" : o(e5, "") : e5;
  }
  return e4 + a3 + (c3 == null ? "" : c3);
}, "");
function i(e3) {
  let r2 = this || {}, a3 = e3.call ? e3(r2.p) : e3;
  return s(a3.map ? a3.raw ? p(a3, [].slice.call(arguments, 1), r2.p) : a3.reduce((e4, t3) => t3 ? Object.assign(e4, t3.call ? t3(r2.p) : t3) : e4, {}) : a3, t(r2.target), r2.g, r2.o, r2.k);
}
var d = i.bind({g: 1});
var g = i.bind({k: 1});

// node_modules/preact/dist/preact.module.js
var n2;
var l2;
var u;
var i2;
var t2;
var o2;
var r;
var f = {};
var e2 = [];
var c2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s2(n3, l3) {
  for (var u2 in l3)
    n3[u2] = l3[u2];
  return n3;
}
function a2(n3) {
  var l3 = n3.parentNode;
  l3 && l3.removeChild(n3);
}
function v(n3, l3, u2) {
  var i3, t3, o3, r2 = arguments, f2 = {};
  for (o3 in l3)
    o3 == "key" ? i3 = l3[o3] : o3 == "ref" ? t3 = l3[o3] : f2[o3] = l3[o3];
  if (arguments.length > 3)
    for (u2 = [u2], o3 = 3; o3 < arguments.length; o3++)
      u2.push(r2[o3]);
  if (u2 != null && (f2.children = u2), typeof n3 == "function" && n3.defaultProps != null)
    for (o3 in n3.defaultProps)
      f2[o3] === void 0 && (f2[o3] = n3.defaultProps[o3]);
  return h(n3, f2, i3, t3, null);
}
function h(l3, u2, i3, t3, o3) {
  var r2 = {type: l3, props: u2, key: i3, ref: t3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o3 == null ? ++n2.__v : o3};
  return n2.vnode != null && n2.vnode(r2), r2;
}
function p2(n3) {
  return n3.children;
}
function d2(n3, l3) {
  this.props = n3, this.context = l3;
}
function _(n3, l3) {
  if (l3 == null)
    return n3.__ ? _(n3.__, n3.__.__k.indexOf(n3) + 1) : null;
  for (var u2; l3 < n3.__k.length; l3++)
    if ((u2 = n3.__k[l3]) != null && u2.__e != null)
      return u2.__e;
  return typeof n3.type == "function" ? _(n3) : null;
}
function w(n3) {
  var l3, u2;
  if ((n3 = n3.__) != null && n3.__c != null) {
    for (n3.__e = n3.__c.base = null, l3 = 0; l3 < n3.__k.length; l3++)
      if ((u2 = n3.__k[l3]) != null && u2.__e != null) {
        n3.__e = n3.__c.base = u2.__e;
        break;
      }
    return w(n3);
  }
}
function k(l3) {
  (!l3.__d && (l3.__d = true) && u.push(l3) && !g2.__r++ || t2 !== n2.debounceRendering) && ((t2 = n2.debounceRendering) || i2)(g2);
}
function g2() {
  for (var n3; g2.__r = u.length; )
    n3 = u.sort(function(n4, l3) {
      return n4.__v.__b - l3.__v.__b;
    }), u = [], n3.some(function(n4) {
      var l3, u2, i3, t3, o3, r2, f2;
      n4.__d && (r2 = (o3 = (l3 = n4).__v).__e, (f2 = l3.__P) && (u2 = [], (i3 = s2({}, o3)).__v = o3.__v + 1, t3 = $(f2, o3, i3, l3.__n, f2.ownerSVGElement !== void 0, o3.__h != null ? [r2] : null, u2, r2 == null ? _(o3) : r2, o3.__h), j(u2, o3), t3 != r2 && w(o3)));
    });
}
function m(n3, l3, u2, i3, t3, o3, r2, c3, s3, v2) {
  var y, d3, w2, k2, g3, m2, b, A2 = i3 && i3.__k || e2, P2 = A2.length;
  for (s3 == f && (s3 = r2 != null ? r2[0] : P2 ? _(i3, 0) : null), u2.__k = [], y = 0; y < l3.length; y++)
    if ((k2 = u2.__k[y] = (k2 = l3[y]) == null || typeof k2 == "boolean" ? null : typeof k2 == "string" || typeof k2 == "number" ? h(null, k2, null, null, k2) : Array.isArray(k2) ? h(p2, {children: k2}, null, null, null) : k2.__e != null || k2.__c != null ? h(k2.type, k2.props, k2.key, null, k2.__v) : k2) != null) {
      if (k2.__ = u2, k2.__b = u2.__b + 1, (w2 = A2[y]) === null || w2 && k2.key == w2.key && k2.type === w2.type)
        A2[y] = void 0;
      else
        for (d3 = 0; d3 < P2; d3++) {
          if ((w2 = A2[d3]) && k2.key == w2.key && k2.type === w2.type) {
            A2[d3] = void 0;
            break;
          }
          w2 = null;
        }
      g3 = $(n3, k2, w2 = w2 || f, t3, o3, r2, c3, s3, v2), (d3 = k2.ref) && w2.ref != d3 && (b || (b = []), w2.ref && b.push(w2.ref, null, k2), b.push(d3, k2.__c || g3, k2)), g3 != null ? (m2 == null && (m2 = g3), s3 = x(n3, k2, w2, A2, r2, g3, s3), v2 || u2.type != "option" ? typeof u2.type == "function" && (u2.__d = s3) : n3.value = "") : s3 && w2.__e == s3 && s3.parentNode != n3 && (s3 = _(w2));
    }
  if (u2.__e = m2, r2 != null && typeof u2.type != "function")
    for (y = r2.length; y--; )
      r2[y] != null && a2(r2[y]);
  for (y = P2; y--; )
    A2[y] != null && L(A2[y], A2[y]);
  if (b)
    for (y = 0; y < b.length; y++)
      I(b[y], b[++y], b[++y]);
}
function x(n3, l3, u2, i3, t3, o3, r2) {
  var f2, e3, c3;
  if (l3.__d !== void 0)
    f2 = l3.__d, l3.__d = void 0;
  else if (t3 == u2 || o3 != r2 || o3.parentNode == null)
    n:
      if (r2 == null || r2.parentNode !== n3)
        n3.appendChild(o3), f2 = null;
      else {
        for (e3 = r2, c3 = 0; (e3 = e3.nextSibling) && c3 < i3.length; c3 += 2)
          if (e3 == o3)
            break n;
        n3.insertBefore(o3, r2), f2 = r2;
      }
  return f2 !== void 0 ? f2 : o3.nextSibling;
}
function A(n3, l3, u2, i3, t3) {
  var o3;
  for (o3 in u2)
    o3 === "children" || o3 === "key" || o3 in l3 || C(n3, o3, null, u2[o3], i3);
  for (o3 in l3)
    t3 && typeof l3[o3] != "function" || o3 === "children" || o3 === "key" || o3 === "value" || o3 === "checked" || u2[o3] === l3[o3] || C(n3, o3, l3[o3], u2[o3], i3);
}
function P(n3, l3, u2) {
  l3[0] === "-" ? n3.setProperty(l3, u2) : n3[l3] = u2 == null ? "" : typeof u2 != "number" || c2.test(l3) ? u2 : u2 + "px";
}
function C(n3, l3, u2, i3, t3) {
  var o3, r2, f2;
  if (t3 && l3 == "className" && (l3 = "class"), l3 === "style")
    if (typeof u2 == "string")
      n3.style.cssText = u2;
    else {
      if (typeof i3 == "string" && (n3.style.cssText = i3 = ""), i3)
        for (l3 in i3)
          u2 && l3 in u2 || P(n3.style, l3, "");
      if (u2)
        for (l3 in u2)
          i3 && u2[l3] === i3[l3] || P(n3.style, l3, u2[l3]);
    }
  else
    l3[0] === "o" && l3[1] === "n" ? (o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), (r2 = l3.toLowerCase()) in n3 && (l3 = r2), l3 = l3.slice(2), n3.l || (n3.l = {}), n3.l[l3 + o3] = u2, f2 = o3 ? N : z, u2 ? i3 || n3.addEventListener(l3, f2, o3) : n3.removeEventListener(l3, f2, o3)) : l3 !== "list" && l3 !== "tagName" && l3 !== "form" && l3 !== "type" && l3 !== "size" && l3 !== "download" && l3 !== "href" && !t3 && l3 in n3 ? n3[l3] = u2 == null ? "" : u2 : typeof u2 != "function" && l3 !== "dangerouslySetInnerHTML" && (l3 !== (l3 = l3.replace(/xlink:?/, "")) ? u2 == null || u2 === false ? n3.removeAttributeNS("http://www.w3.org/1999/xlink", l3.toLowerCase()) : n3.setAttributeNS("http://www.w3.org/1999/xlink", l3.toLowerCase(), u2) : u2 == null || u2 === false && !/^ar/.test(l3) ? n3.removeAttribute(l3) : n3.setAttribute(l3, u2));
}
function z(l3) {
  this.l[l3.type + false](n2.event ? n2.event(l3) : l3);
}
function N(l3) {
  this.l[l3.type + true](n2.event ? n2.event(l3) : l3);
}
function T(n3, l3, u2) {
  var i3, t3;
  for (i3 = 0; i3 < n3.__k.length; i3++)
    (t3 = n3.__k[i3]) && (t3.__ = n3, t3.__e && (typeof t3.type == "function" && t3.__k.length > 1 && T(t3, l3, u2), l3 = x(u2, t3, t3, n3.__k, null, t3.__e, l3), typeof n3.type == "function" && (n3.__d = l3)));
}
function $(l3, u2, i3, t3, o3, r2, f2, e3, c3) {
  var a3, v2, h2, y, _2, w2, k2, g3, b, x2, A2, P2 = u2.type;
  if (u2.constructor !== void 0)
    return null;
  i3.__h != null && (c3 = i3.__h, e3 = u2.__e = i3.__e, u2.__h = null, r2 = [e3]), (a3 = n2.__b) && a3(u2);
  try {
    n:
      if (typeof P2 == "function") {
        if (g3 = u2.props, b = (a3 = P2.contextType) && t3[a3.__c], x2 = a3 ? b ? b.props.value : a3.__ : t3, i3.__c ? k2 = (v2 = u2.__c = i3.__c).__ = v2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = v2 = new P2(g3, x2) : (u2.__c = v2 = new d2(g3, x2), v2.constructor = P2, v2.render = M), b && b.sub(v2), v2.props = g3, v2.state || (v2.state = {}), v2.context = x2, v2.__n = t3, h2 = v2.__d = true, v2.__h = []), v2.__s == null && (v2.__s = v2.state), P2.getDerivedStateFromProps != null && (v2.__s == v2.state && (v2.__s = s2({}, v2.__s)), s2(v2.__s, P2.getDerivedStateFromProps(g3, v2.__s))), y = v2.props, _2 = v2.state, h2)
          P2.getDerivedStateFromProps == null && v2.componentWillMount != null && v2.componentWillMount(), v2.componentDidMount != null && v2.__h.push(v2.componentDidMount);
        else {
          if (P2.getDerivedStateFromProps == null && g3 !== y && v2.componentWillReceiveProps != null && v2.componentWillReceiveProps(g3, x2), !v2.__e && v2.shouldComponentUpdate != null && v2.shouldComponentUpdate(g3, v2.__s, x2) === false || u2.__v === i3.__v) {
            v2.props = g3, v2.state = v2.__s, u2.__v !== i3.__v && (v2.__d = false), v2.__v = u2, u2.__e = i3.__e, u2.__k = i3.__k, v2.__h.length && f2.push(v2), T(u2, e3, l3);
            break n;
          }
          v2.componentWillUpdate != null && v2.componentWillUpdate(g3, v2.__s, x2), v2.componentDidUpdate != null && v2.__h.push(function() {
            v2.componentDidUpdate(y, _2, w2);
          });
        }
        v2.context = x2, v2.props = g3, v2.state = v2.__s, (a3 = n2.__r) && a3(u2), v2.__d = false, v2.__v = u2, v2.__P = l3, a3 = v2.render(v2.props, v2.state, v2.context), v2.state = v2.__s, v2.getChildContext != null && (t3 = s2(s2({}, t3), v2.getChildContext())), h2 || v2.getSnapshotBeforeUpdate == null || (w2 = v2.getSnapshotBeforeUpdate(y, _2)), A2 = a3 != null && a3.type == p2 && a3.key == null ? a3.props.children : a3, m(l3, Array.isArray(A2) ? A2 : [A2], u2, i3, t3, o3, r2, f2, e3, c3), v2.base = u2.__e, u2.__h = null, v2.__h.length && f2.push(v2), k2 && (v2.__E = v2.__ = null), v2.__e = false;
      } else
        r2 == null && u2.__v === i3.__v ? (u2.__k = i3.__k, u2.__e = i3.__e) : u2.__e = H(i3.__e, u2, i3, t3, o3, r2, f2, c3);
    (a3 = n2.diffed) && a3(u2);
  } catch (l4) {
    u2.__v = null, (c3 || r2 != null) && (u2.__e = e3, u2.__h = !!c3, r2[r2.indexOf(e3)] = null), n2.__e(l4, u2, i3);
  }
  return u2.__e;
}
function j(l3, u2) {
  n2.__c && n2.__c(u2, l3), l3.some(function(u3) {
    try {
      l3 = u3.__h, u3.__h = [], l3.some(function(n3) {
        n3.call(u3);
      });
    } catch (l4) {
      n2.__e(l4, u3.__v);
    }
  });
}
function H(n3, l3, u2, i3, t3, o3, r2, c3) {
  var s3, a3, v2, h2, y, p3 = u2.props, d3 = l3.props;
  if (t3 = l3.type === "svg" || t3, o3 != null) {
    for (s3 = 0; s3 < o3.length; s3++)
      if ((a3 = o3[s3]) != null && ((l3.type === null ? a3.nodeType === 3 : a3.localName === l3.type) || n3 == a3)) {
        n3 = a3, o3[s3] = null;
        break;
      }
  }
  if (n3 == null) {
    if (l3.type === null)
      return document.createTextNode(d3);
    n3 = t3 ? document.createElementNS("http://www.w3.org/2000/svg", l3.type) : document.createElement(l3.type, d3.is && {is: d3.is}), o3 = null, c3 = false;
  }
  if (l3.type === null)
    p3 === d3 || c3 && n3.data === d3 || (n3.data = d3);
  else {
    if (o3 != null && (o3 = e2.slice.call(n3.childNodes)), v2 = (p3 = u2.props || f).dangerouslySetInnerHTML, h2 = d3.dangerouslySetInnerHTML, !c3) {
      if (o3 != null)
        for (p3 = {}, y = 0; y < n3.attributes.length; y++)
          p3[n3.attributes[y].name] = n3.attributes[y].value;
      (h2 || v2) && (h2 && (v2 && h2.__html == v2.__html || h2.__html === n3.innerHTML) || (n3.innerHTML = h2 && h2.__html || ""));
    }
    A(n3, d3, p3, t3, c3), h2 ? l3.__k = [] : (s3 = l3.props.children, m(n3, Array.isArray(s3) ? s3 : [s3], l3, u2, i3, l3.type !== "foreignObject" && t3, o3, r2, f, c3)), c3 || ("value" in d3 && (s3 = d3.value) !== void 0 && (s3 !== n3.value || l3.type === "progress" && !s3) && C(n3, "value", s3, p3.value, false), "checked" in d3 && (s3 = d3.checked) !== void 0 && s3 !== n3.checked && C(n3, "checked", s3, p3.checked, false));
  }
  return n3;
}
function I(l3, u2, i3) {
  try {
    typeof l3 == "function" ? l3(u2) : l3.current = u2;
  } catch (l4) {
    n2.__e(l4, i3);
  }
}
function L(l3, u2, i3) {
  var t3, o3, r2;
  if (n2.unmount && n2.unmount(l3), (t3 = l3.ref) && (t3.current && t3.current !== l3.__e || I(t3, null, u2)), i3 || typeof l3.type == "function" || (i3 = (o3 = l3.__e) != null), l3.__e = l3.__d = void 0, (t3 = l3.__c) != null) {
    if (t3.componentWillUnmount)
      try {
        t3.componentWillUnmount();
      } catch (l4) {
        n2.__e(l4, u2);
      }
    t3.base = t3.__P = null;
  }
  if (t3 = l3.__k)
    for (r2 = 0; r2 < t3.length; r2++)
      t3[r2] && L(t3[r2], u2, i3);
  o3 != null && a2(o3);
}
function M(n3, l3, u2) {
  return this.constructor(n3, u2);
}
n2 = {__e: function(n3, l3) {
  for (var u2, i3, t3, o3 = l3.__h; l3 = l3.__; )
    if ((u2 = l3.__c) && !u2.__)
      try {
        if ((i3 = u2.constructor) && i3.getDerivedStateFromError != null && (u2.setState(i3.getDerivedStateFromError(n3)), t3 = u2.__d), u2.componentDidCatch != null && (u2.componentDidCatch(n3), t3 = u2.__d), t3)
          return l3.__h = o3, u2.__E = u2;
      } catch (l4) {
        n3 = l4;
      }
  throw n3;
}, __v: 0}, l2 = function(n3) {
  return n3 != null && n3.constructor === void 0;
}, d2.prototype.setState = function(n3, l3) {
  var u2;
  u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s2({}, this.state), typeof n3 == "function" && (n3 = n3(s2({}, u2), this.props)), n3 && s2(u2, n3), n3 != null && this.__v && (l3 && this.__h.push(l3), k(this));
}, d2.prototype.forceUpdate = function(n3) {
  this.__v && (this.__e = true, n3 && this.__h.push(n3), k(this));
}, d2.prototype.render = p2, u = [], i2 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g2.__r = 0, o2 = f, r = 0;

export {
  n2 as n,
  o2 as o,
  f,
  e2 as e,
  o as o2,
  v,
  p2 as p,
  d2 as d,
  i,
  d as d2,
  $,
  j
};

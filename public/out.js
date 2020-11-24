(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var o;
  var r;
  var f = {};
  var e = [];
  var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function s(n3, l3) {
    for (var u3 in l3)
      n3[u3] = l3[u3];
    return n3;
  }
  function a(n3) {
    var l3 = n3.parentNode;
    l3 && l3.removeChild(n3);
  }
  function v(n3, l3, u3) {
    var i3, t3, o3, r2 = arguments, f3 = {};
    for (o3 in l3)
      o3 == "key" ? i3 = l3[o3] : o3 == "ref" ? t3 = l3[o3] : f3[o3] = l3[o3];
    if (arguments.length > 3)
      for (u3 = [u3], o3 = 3; o3 < arguments.length; o3++)
        u3.push(r2[o3]);
    if (u3 != null && (f3.children = u3), typeof n3 == "function" && n3.defaultProps != null)
      for (o3 in n3.defaultProps)
        f3[o3] === void 0 && (f3[o3] = n3.defaultProps[o3]);
    return h(n3, f3, i3, t3, null);
  }
  function h(l3, u3, i3, t3, o3) {
    var r2 = {type: l3, props: u3, key: i3, ref: t3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o3 == null ? ++n.__v : o3};
    return n.vnode != null && n.vnode(r2), r2;
  }
  function p(n3) {
    return n3.children;
  }
  function d(n3, l3) {
    this.props = n3, this.context = l3;
  }
  function _(n3, l3) {
    if (l3 == null)
      return n3.__ ? _(n3.__, n3.__.__k.indexOf(n3) + 1) : null;
    for (var u3; l3 < n3.__k.length; l3++)
      if ((u3 = n3.__k[l3]) != null && u3.__e != null)
        return u3.__e;
    return typeof n3.type == "function" ? _(n3) : null;
  }
  function w(n3) {
    var l3, u3;
    if ((n3 = n3.__) != null && n3.__c != null) {
      for (n3.__e = n3.__c.base = null, l3 = 0; l3 < n3.__k.length; l3++)
        if ((u3 = n3.__k[l3]) != null && u3.__e != null) {
          n3.__e = n3.__c.base = u3.__e;
          break;
        }
      return w(n3);
    }
  }
  function k(l3) {
    (!l3.__d && (l3.__d = true) && u.push(l3) && !g.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(g);
  }
  function g() {
    for (var n3; g.__r = u.length; )
      n3 = u.sort(function(n4, l3) {
        return n4.__v.__b - l3.__v.__b;
      }), u = [], n3.some(function(n4) {
        var l3, u3, i3, t3, o3, r2, f3;
        n4.__d && (r2 = (o3 = (l3 = n4).__v).__e, (f3 = l3.__P) && (u3 = [], (i3 = s({}, o3)).__v = o3.__v + 1, t3 = $(f3, o3, i3, l3.__n, f3.ownerSVGElement !== void 0, o3.__h != null ? [r2] : null, u3, r2 == null ? _(o3) : r2, o3.__h), j(u3, o3), t3 != r2 && w(o3)));
      });
  }
  function m(n3, l3, u3, i3, t3, o3, r2, c3, s3, v2) {
    var y, d3, w2, k2, g3, m2, b2, A2 = i3 && i3.__k || e, P2 = A2.length;
    for (s3 == f && (s3 = r2 != null ? r2[0] : P2 ? _(i3, 0) : null), u3.__k = [], y = 0; y < l3.length; y++)
      if ((k2 = u3.__k[y] = (k2 = l3[y]) == null || typeof k2 == "boolean" ? null : typeof k2 == "string" || typeof k2 == "number" ? h(null, k2, null, null, k2) : Array.isArray(k2) ? h(p, {children: k2}, null, null, null) : k2.__e != null || k2.__c != null ? h(k2.type, k2.props, k2.key, null, k2.__v) : k2) != null) {
        if (k2.__ = u3, k2.__b = u3.__b + 1, (w2 = A2[y]) === null || w2 && k2.key == w2.key && k2.type === w2.type)
          A2[y] = void 0;
        else
          for (d3 = 0; d3 < P2; d3++) {
            if ((w2 = A2[d3]) && k2.key == w2.key && k2.type === w2.type) {
              A2[d3] = void 0;
              break;
            }
            w2 = null;
          }
        g3 = $(n3, k2, w2 = w2 || f, t3, o3, r2, c3, s3, v2), (d3 = k2.ref) && w2.ref != d3 && (b2 || (b2 = []), w2.ref && b2.push(w2.ref, null, k2), b2.push(d3, k2.__c || g3, k2)), g3 != null ? (m2 == null && (m2 = g3), s3 = x(n3, k2, w2, A2, r2, g3, s3), v2 || u3.type != "option" ? typeof u3.type == "function" && (u3.__d = s3) : n3.value = "") : s3 && w2.__e == s3 && s3.parentNode != n3 && (s3 = _(w2));
      }
    if (u3.__e = m2, r2 != null && typeof u3.type != "function")
      for (y = r2.length; y--; )
        r2[y] != null && a(r2[y]);
    for (y = P2; y--; )
      A2[y] != null && L(A2[y], A2[y]);
    if (b2)
      for (y = 0; y < b2.length; y++)
        I(b2[y], b2[++y], b2[++y]);
  }
  function x(n3, l3, u3, i3, t3, o3, r2) {
    var f3, e3, c3;
    if (l3.__d !== void 0)
      f3 = l3.__d, l3.__d = void 0;
    else if (t3 == u3 || o3 != r2 || o3.parentNode == null)
      n:
        if (r2 == null || r2.parentNode !== n3)
          n3.appendChild(o3), f3 = null;
        else {
          for (e3 = r2, c3 = 0; (e3 = e3.nextSibling) && c3 < i3.length; c3 += 2)
            if (e3 == o3)
              break n;
          n3.insertBefore(o3, r2), f3 = r2;
        }
    return f3 !== void 0 ? f3 : o3.nextSibling;
  }
  function A(n3, l3, u3, i3, t3) {
    var o3;
    for (o3 in u3)
      o3 === "children" || o3 === "key" || o3 in l3 || C(n3, o3, null, u3[o3], i3);
    for (o3 in l3)
      t3 && typeof l3[o3] != "function" || o3 === "children" || o3 === "key" || o3 === "value" || o3 === "checked" || u3[o3] === l3[o3] || C(n3, o3, l3[o3], u3[o3], i3);
  }
  function P(n3, l3, u3) {
    l3[0] === "-" ? n3.setProperty(l3, u3) : n3[l3] = u3 == null ? "" : typeof u3 != "number" || c.test(l3) ? u3 : u3 + "px";
  }
  function C(n3, l3, u3, i3, t3) {
    var o3, r2, f3;
    if (t3 && l3 == "className" && (l3 = "class"), l3 === "style")
      if (typeof u3 == "string")
        n3.style.cssText = u3;
      else {
        if (typeof i3 == "string" && (n3.style.cssText = i3 = ""), i3)
          for (l3 in i3)
            u3 && l3 in u3 || P(n3.style, l3, "");
        if (u3)
          for (l3 in u3)
            i3 && u3[l3] === i3[l3] || P(n3.style, l3, u3[l3]);
      }
    else
      l3[0] === "o" && l3[1] === "n" ? (o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), (r2 = l3.toLowerCase()) in n3 && (l3 = r2), l3 = l3.slice(2), n3.l || (n3.l = {}), n3.l[l3 + o3] = u3, f3 = o3 ? N : z, u3 ? i3 || n3.addEventListener(l3, f3, o3) : n3.removeEventListener(l3, f3, o3)) : l3 !== "list" && l3 !== "tagName" && l3 !== "form" && l3 !== "type" && l3 !== "size" && l3 !== "download" && l3 !== "href" && !t3 && l3 in n3 ? n3[l3] = u3 == null ? "" : u3 : typeof u3 != "function" && l3 !== "dangerouslySetInnerHTML" && (l3 !== (l3 = l3.replace(/xlink:?/, "")) ? u3 == null || u3 === false ? n3.removeAttributeNS("http://www.w3.org/1999/xlink", l3.toLowerCase()) : n3.setAttributeNS("http://www.w3.org/1999/xlink", l3.toLowerCase(), u3) : u3 == null || u3 === false && !/^ar/.test(l3) ? n3.removeAttribute(l3) : n3.setAttribute(l3, u3));
  }
  function z(l3) {
    this.l[l3.type + false](n.event ? n.event(l3) : l3);
  }
  function N(l3) {
    this.l[l3.type + true](n.event ? n.event(l3) : l3);
  }
  function T(n3, l3, u3) {
    var i3, t3;
    for (i3 = 0; i3 < n3.__k.length; i3++)
      (t3 = n3.__k[i3]) && (t3.__ = n3, t3.__e && (typeof t3.type == "function" && t3.__k.length > 1 && T(t3, l3, u3), l3 = x(u3, t3, t3, n3.__k, null, t3.__e, l3), typeof n3.type == "function" && (n3.__d = l3)));
  }
  function $(l3, u3, i3, t3, o3, r2, f3, e3, c3) {
    var a3, v2, h2, y, _2, w2, k2, g3, b2, x2, A2, P2 = u3.type;
    if (u3.constructor !== void 0)
      return null;
    i3.__h != null && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r2 = [e3]), (a3 = n.__b) && a3(u3);
    try {
      n:
        if (typeof P2 == "function") {
          if (g3 = u3.props, b2 = (a3 = P2.contextType) && t3[a3.__c], x2 = a3 ? b2 ? b2.props.value : a3.__ : t3, i3.__c ? k2 = (v2 = u3.__c = i3.__c).__ = v2.__E : ("prototype" in P2 && P2.prototype.render ? u3.__c = v2 = new P2(g3, x2) : (u3.__c = v2 = new d(g3, x2), v2.constructor = P2, v2.render = M), b2 && b2.sub(v2), v2.props = g3, v2.state || (v2.state = {}), v2.context = x2, v2.__n = t3, h2 = v2.__d = true, v2.__h = []), v2.__s == null && (v2.__s = v2.state), P2.getDerivedStateFromProps != null && (v2.__s == v2.state && (v2.__s = s({}, v2.__s)), s(v2.__s, P2.getDerivedStateFromProps(g3, v2.__s))), y = v2.props, _2 = v2.state, h2)
            P2.getDerivedStateFromProps == null && v2.componentWillMount != null && v2.componentWillMount(), v2.componentDidMount != null && v2.__h.push(v2.componentDidMount);
          else {
            if (P2.getDerivedStateFromProps == null && g3 !== y && v2.componentWillReceiveProps != null && v2.componentWillReceiveProps(g3, x2), !v2.__e && v2.shouldComponentUpdate != null && v2.shouldComponentUpdate(g3, v2.__s, x2) === false || u3.__v === i3.__v) {
              v2.props = g3, v2.state = v2.__s, u3.__v !== i3.__v && (v2.__d = false), v2.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, v2.__h.length && f3.push(v2), T(u3, e3, l3);
              break n;
            }
            v2.componentWillUpdate != null && v2.componentWillUpdate(g3, v2.__s, x2), v2.componentDidUpdate != null && v2.__h.push(function() {
              v2.componentDidUpdate(y, _2, w2);
            });
          }
          v2.context = x2, v2.props = g3, v2.state = v2.__s, (a3 = n.__r) && a3(u3), v2.__d = false, v2.__v = u3, v2.__P = l3, a3 = v2.render(v2.props, v2.state, v2.context), v2.state = v2.__s, v2.getChildContext != null && (t3 = s(s({}, t3), v2.getChildContext())), h2 || v2.getSnapshotBeforeUpdate == null || (w2 = v2.getSnapshotBeforeUpdate(y, _2)), A2 = a3 != null && a3.type == p && a3.key == null ? a3.props.children : a3, m(l3, Array.isArray(A2) ? A2 : [A2], u3, i3, t3, o3, r2, f3, e3, c3), v2.base = u3.__e, u3.__h = null, v2.__h.length && f3.push(v2), k2 && (v2.__E = v2.__ = null), v2.__e = false;
        } else
          r2 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = H(i3.__e, u3, i3, t3, o3, r2, f3, c3);
      (a3 = n.diffed) && a3(u3);
    } catch (l4) {
      u3.__v = null, (c3 || r2 != null) && (u3.__e = e3, u3.__h = !!c3, r2[r2.indexOf(e3)] = null), n.__e(l4, u3, i3);
    }
    return u3.__e;
  }
  function j(l3, u3) {
    n.__c && n.__c(u3, l3), l3.some(function(u4) {
      try {
        l3 = u4.__h, u4.__h = [], l3.some(function(n3) {
          n3.call(u4);
        });
      } catch (l4) {
        n.__e(l4, u4.__v);
      }
    });
  }
  function H(n3, l3, u3, i3, t3, o3, r2, c3) {
    var s3, a3, v2, h2, y, p3 = u3.props, d3 = l3.props;
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
      if (o3 != null && (o3 = e.slice.call(n3.childNodes)), v2 = (p3 = u3.props || f).dangerouslySetInnerHTML, h2 = d3.dangerouslySetInnerHTML, !c3) {
        if (o3 != null)
          for (p3 = {}, y = 0; y < n3.attributes.length; y++)
            p3[n3.attributes[y].name] = n3.attributes[y].value;
        (h2 || v2) && (h2 && (v2 && h2.__html == v2.__html || h2.__html === n3.innerHTML) || (n3.innerHTML = h2 && h2.__html || ""));
      }
      A(n3, d3, p3, t3, c3), h2 ? l3.__k = [] : (s3 = l3.props.children, m(n3, Array.isArray(s3) ? s3 : [s3], l3, u3, i3, l3.type !== "foreignObject" && t3, o3, r2, f, c3)), c3 || ("value" in d3 && (s3 = d3.value) !== void 0 && (s3 !== n3.value || l3.type === "progress" && !s3) && C(n3, "value", s3, p3.value, false), "checked" in d3 && (s3 = d3.checked) !== void 0 && s3 !== n3.checked && C(n3, "checked", s3, p3.checked, false));
    }
    return n3;
  }
  function I(l3, u3, i3) {
    try {
      typeof l3 == "function" ? l3(u3) : l3.current = u3;
    } catch (l4) {
      n.__e(l4, i3);
    }
  }
  function L(l3, u3, i3) {
    var t3, o3, r2;
    if (n.unmount && n.unmount(l3), (t3 = l3.ref) && (t3.current && t3.current !== l3.__e || I(t3, null, u3)), i3 || typeof l3.type == "function" || (i3 = (o3 = l3.__e) != null), l3.__e = l3.__d = void 0, (t3 = l3.__c) != null) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (l4) {
          n.__e(l4, u3);
        }
      t3.base = t3.__P = null;
    }
    if (t3 = l3.__k)
      for (r2 = 0; r2 < t3.length; r2++)
        t3[r2] && L(t3[r2], u3, i3);
    o3 != null && a(o3);
  }
  function M(n3, l3, u3) {
    return this.constructor(n3, u3);
  }
  function O(l3, u3, i3) {
    var t3, r2, c3;
    n.__ && n.__(l3, u3), r2 = (t3 = i3 === o) ? null : i3 && i3.__k || u3.__k, l3 = v(p, null, [l3]), c3 = [], $(u3, (t3 ? u3 : i3 || u3).__k = l3, r2 || f, f, u3.ownerSVGElement !== void 0, i3 && !t3 ? [i3] : r2 ? null : u3.childNodes.length ? e.slice.call(u3.childNodes) : null, c3, i3 || f, t3), j(c3, l3);
  }
  n = {__e: function(n3, l3) {
    for (var u3, i3, t3, o3 = l3.__h; l3 = l3.__; )
      if ((u3 = l3.__c) && !u3.__)
        try {
          if ((i3 = u3.constructor) && i3.getDerivedStateFromError != null && (u3.setState(i3.getDerivedStateFromError(n3)), t3 = u3.__d), u3.componentDidCatch != null && (u3.componentDidCatch(n3), t3 = u3.__d), t3)
            return l3.__h = o3, u3.__E = u3;
        } catch (l4) {
          n3 = l4;
        }
    throw n3;
  }, __v: 0}, l = function(n3) {
    return n3 != null && n3.constructor === void 0;
  }, d.prototype.setState = function(n3, l3) {
    var u3;
    u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), typeof n3 == "function" && (n3 = n3(s({}, u3), this.props)), n3 && s(u3, n3), n3 != null && this.__v && (l3 && this.__h.push(l3), k(this));
  }, d.prototype.forceUpdate = function(n3) {
    this.__v && (this.__e = true, n3 && this.__h.push(n3), k(this));
  }, d.prototype.render = p, u = [], i = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, o = f, r = 0;

  // node_modules/goober/dist/goober.module.js
  var e2 = {data: ""};
  var t2 = (t3) => {
    try {
      let e3 = t3 ? t3.querySelector("#_goober") : self._goober;
      return e3 || (e3 = (t3 || document.head).appendChild(document.createElement("style")), e3.innerHTML = " ", e3.id = "_goober"), e3.firstChild;
    } catch (e3) {
    }
    return t3 || e2;
  };
  var a2 = /(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi;
  var l2 = /\/\*[\s\S]*?\*\/|\s{2,}|\n/gm;
  var o2 = (e3, t3) => {
    let r2, a3 = "", l3 = "", c3 = "";
    for (let n3 in e3) {
      let s3 = e3[n3];
      typeof s3 == "object" ? (r2 = t3 ? t3.replace(/([^,])+/g, (e4) => n3.replace(/([^,])+/g, (t4) => /&/g.test(t4) ? t4.replace(/&/g, e4) : e4 ? e4 + " " + t4 : t4)) : n3, l3 += n3[0] == "@" ? n3[1] == "f" ? o2(s3, n3) : n3 + "{" + o2(s3, n3[1] == "k" ? "" : t3) + "}" : o2(s3, r2)) : n3[0] == "@" && n3[1] == "i" ? a3 = n3 + " " + s3 + ";" : c3 += o2.p ? o2.p(n3.replace(/[A-Z]/g, "-$&").toLowerCase(), s3) : n3.replace(/[A-Z]/g, "-$&").toLowerCase() + ":" + s3 + ";";
    }
    return c3[0] ? (r2 = t3 ? t3 + "{" + c3 + "}" : c3, a3 + r2 + l3) : a3 + l3;
  };
  var c2 = {};
  var n2 = (e3) => {
    let t3 = "";
    for (let r2 in e3)
      t3 += r2 + (typeof e3[r2] == "object" ? n2(e3[r2]) : e3[r2]);
    return t3;
  };
  var s2 = (e3, t3, r2, s3, p3) => {
    let i3 = typeof e3 == "object" ? n2(e3) : e3, u3 = c2[i3] || (c2[i3] = "go" + i3.split("").reduce((e4, t4) => 101 * e4 + t4.charCodeAt(0) >>> 0, 11));
    if (!c2[u3]) {
      let t4 = typeof e3 == "object" ? e3 : ((e4) => {
        let t5, r3 = [{}];
        for (; t5 = a2.exec(e4.replace(l2, "")); )
          t5[4] && r3.shift(), t5[3] ? r3.unshift(r3[0][t5[3]] = r3[0][t5[3]] || {}) : t5[4] || (r3[0][t5[1]] = t5[2]);
        return r3[0];
      })(e3);
      c2[u3] = o2(p3 ? {["@keyframes " + u3]: t4} : t4, r2 ? "" : "." + u3);
    }
    return ((e4, t4, r3) => {
      t4.data.indexOf(e4) < 0 && (t4.data = r3 ? e4 + t4.data : t4.data + e4);
    })(c2[u3], t3, s3), u3;
  };
  var p2 = (e3, t3, r2) => e3.reduce((e4, a3, l3) => {
    let c3 = t3[l3];
    if (c3 && c3.call) {
      let e5 = c3(r2), t4 = e5 && e5.props && e5.props.className || /^go/.test(e5) && e5;
      c3 = t4 ? "." + t4 : e5 && typeof e5 == "object" ? e5.props ? "" : o2(e5, "") : e5;
    }
    return e4 + a3 + (c3 == null ? "" : c3);
  }, "");
  function i2(e3) {
    let r2 = this || {}, a3 = e3.call ? e3(r2.p) : e3;
    return s2(a3.map ? a3.raw ? p2(a3, [].slice.call(arguments, 1), r2.p) : a3.reduce((e4, t3) => t3 ? Object.assign(e4, t3.call ? t3(r2.p) : t3) : e4, {}) : a3, t2(r2.target), r2.g, r2.o, r2.k);
  }
  var u2;
  var f2;
  var d2 = i2.bind({g: 1});
  var g2 = i2.bind({k: 1});
  function b(e3, t3, r2) {
    o2.p = t3, u2 = e3, f2 = r2;
  }

  // node_modules/preact/devtools/dist/devtools.module.js
  typeof window != "undefined" && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.5.7", n, {Fragment: p, Component: d});

  // src/assets/logo.png
  var logo_default = "logo.D5W2Y7US.png";

  // src/styles/app.js
  var App = () => i2`
  text-align: center;
`;
  var AppHeader = () => i2`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
  var AppLogo = () => i2`
  height: 40vmin;
  pointer-events: none;
  margin-bottom: 1rem;
  animation: App-logo-spin infinite 1.6s ease-in-out alternate;
  @keyframes App-logo-spin {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }
`;
  var Content = () => i2`
  width: 80%;
`;
  var Pre = () => i2`
  background: #333333;
  border-radius: 2rem;
  border: 1px solid #282c34;
  padding: 2rem;
  display: block;
  width: 30vw;
  margin: 2rem auto;
  text-align: left;
  @media only screen and (max-width: 600px) {
    pre {
      padding: 1.25rem;
      width: auto;
    }
  }
`;

  // src/App.tsx
  var App2 = ({name = ""}) => {
    console.log("Welcome,", name);
    return /* @__PURE__ */ v("div", {
      className: App()
    }, /* @__PURE__ */ v("header", {
      className: AppHeader()
    }, /* @__PURE__ */ v("img", {
      src: logo_default,
      className: AppLogo(),
      alt: "logo"
    }), /* @__PURE__ */ v("p", null, "Edit ", /* @__PURE__ */ v("code", null, "src/App.jsx"), " and save to reload."), /* @__PURE__ */ v("p", null, "Welcome to esbuild + Preact + TypeScript starter!"), /* @__PURE__ */ v("div", {
      className: Content()
    }, /* @__PURE__ */ v("pre", {
      className: Pre()
    }, /* @__PURE__ */ v("code", null, "$ yarn install"), /* @__PURE__ */ v("br", null), /* @__PURE__ */ v("code", null, "$ yarn build"), /* @__PURE__ */ v("br", null), /* @__PURE__ */ v("code", null, "$ yarn run")))));
  };
  var App_default = App2;

  // src/styles/main.js
  var mainGlobalStyles = () => d2`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`;

  // src/client.tsx
  b(v);
  var container = document.getElementById("root");
  mainGlobalStyles();
  O(/* @__PURE__ */ v(App_default, {
    name: "John Doe"
  }), container);
})();

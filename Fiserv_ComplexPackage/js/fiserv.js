/*  ___ _                      
   |  _|_|___ ___ ___ _ _      
   |  _| |_ -| -_|  _| | |_    
   |_| |_|___|___|_|  \_/|_|   Web Services                                  JavaScript (JS) Table of Contents
   -----------------------------------------------------------------------------------------------------------
   jQuery 3.6.0 by JS Foundation, (c) JS Foundation and other contributors | jquery.org/license.............29 
   jQuery Mobile 1.5.0 by jQuery Foundation, Inc., Copyright 2010, 2017 jQuery Foundation, Inc..............32 
   Modernizr 2.8.3 by Modernizr.com Team, MIT & BSD | Modernizr.com.........................................37 
   Debounce 1.0.0 by Jesse Fowler, Copyright 2014 Fiserv. All rights reserved...............................43 
   Slideshow 4.6.0 by Jesse Fowler, Copyright 2015 Fiserv. All rights reserved..............................59 
   Side Navigation Generator 5.1.0 by Jesse Fowler, Copyright 2014 Fiserv. All rights reserved.............471 
   Text Resizer 5.0.1 by Jesse Fowler, Copyright 2018 Fiserv. All rights reserved..........................645 
   Online Banking 1.23.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved..........................731 
   Field History 2.0.1 by JP Larson, Copyright 2018 Fiserv. All rights reserved...........................1249 
   Smooth Scroll 4.0.1 by JP Larson, Copyright 2018 Fiserv. All rights reserved...........................1348 
   Accessibility Tab Expand 2.1.3 by JP Larson, Copyright 2018 Fiserv. All rights reserved................1495 
   Anniversary Badge 2.0.2 by Jesse Fowler, Copyright 2018 Fiserv. All rights reserved....................1573 
   Responsive Table 2.0.0 by Kristen Rogers, Copyright 2016 Fiserv. All rights reserved...................1602 
   Scroll To 1.3.2 by Jesse Fowler, Copyright 2015 Fiserv. All rights reserved............................1632 
   Tour 3.0.2 by JP Larson, Copyright 2018 Fiserv. All rights reserved....................................1719 
   Weather 4.3.0 by Jesse Fowler, Copyright 2014 Fiserv. All rights reserved..............................1913 
   Lightcase 4.3.0 by @cornelboppart, GPL license.........................................................1982 
   Count Up 1.0.1 by Gareth Nolan, Copyright 2015. MIT license............................................3894 
   Sort Table 1.4.0 by JP Larson, Copyright 2020 Fiserv. All rights reserved..............................4033 
   Fiserv Forms 1.9.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved............................4980 
   Pseudo Select 4.3.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved...........................6874 
   ----------------------------------------------------------------------------------------------------------- */

// jQuery 3.6.0 by JS Foundation, (c) JS Foundation and other contributors | jquery.org/license
!function (e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function (C, e) { "use strict"; var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function (e) { return t.flat.call(e) } : function (e) { return t.concat.apply([], e) }, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function (e) { return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item }, x = function (e) { return null != e && e === e.window }, E = C.document, c = { type: !0, src: !0, nonce: !0, noModule: !0 }; function b(e, t, n) { var r, i, o = (n = n || E).createElement("script"); if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i); n.head.appendChild(o).parentNode.removeChild(o) } function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e } var f = "3.6.0", S = function (e, t) { return new S.fn.init(e, t) }; function p(e) { var t = !!e && "length" in e && e.length, n = w(e); return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e) } S.fn = S.prototype = { jquery: f, constructor: S, length: 0, toArray: function () { return s.call(this) }, get: function (e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function (e) { var t = S.merge(this.constructor(), e); return t.prevObject = this, t }, each: function (e) { return S.each(this, e) }, map: function (n) { return this.pushStack(S.map(this, function (e, t) { return n.call(e, t, e) })) }, slice: function () { return this.pushStack(s.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, even: function () { return this.pushStack(S.grep(this, function (e, t) { return (t + 1) % 2 })) }, odd: function () { return this.pushStack(S.grep(this, function (e, t) { return t % 2 })) }, eq: function (e) { var t = this.length, n = +e + (e < 0 ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: u, sort: t.sort, splice: t.splice }, S.extend = S.fn.extend = function () { var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r)); return a }, S.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) { throw new Error(e) }, noop: function () { }, isPlainObject: function (e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, globalEval: function (e, t, n) { b(e, { nonce: t && t.nonce }, n) }, each: function (e, t) { var n, r = 0; if (p(e)) { for (n = e.length; r < n; r++)if (!1 === t.call(e[r], r, e[r])) break } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break; return e }, makeArray: function (e, t) { var n = t || []; return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n }, inArray: function (e, t, n) { return null == t ? -1 : i.call(t, e, n) }, merge: function (e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r]; return e.length = i, e }, grep: function (e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)!t(e[i], i) !== a && r.push(e[i]); return r }, map: function (e, t, n) { var r, i, o = 0, a = []; if (p(e)) for (r = e.length; o < r; o++)null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i); return g(a) }, guid: 1, support: y }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) { n["[object " + t + "]"] = t.toLowerCase() }); var d = function (n) { var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), j = function (e, t) { return e === t && (l = !0), 0 }, D = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function (e, t) { for (var n = 0, r = e.length; n < r; n++)if (e[n] === t) return n; return -1 }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+", "g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + F), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"), ne = function (e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e }, oe = function () { T() }, ae = be(function (e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" }); try { H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType } catch (e) { H = { apply: t.length ? function (e, t) { L.apply(e, O.call(t)) } : function (e, t) { var n = e.length, r = 0; while (e[n++] = t[r++]); e.length = n - 1 } } } function se(t, e, n, r) { var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9; if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n; if (!r && (T(e), e = e || C, E)) { if (11 !== p && (u = Z.exec(t))) if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n } if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) { if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) { (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length; while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]); c = l.join(",") } try { return H.apply(n, f.querySelectorAll(c)), n } catch (e) { N(t, !0) } finally { s === S && e.removeAttribute("id") } } } return g(t.replace($, "$1"), e, n, r) } function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } } function le(e) { return e[S] = !0, e } function ce(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } } function fe(e, t) { var n = e.split("|"), r = n.length; while (r--) b.attrHandle[n[r]] = t } function pe(e, t) { var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (r) return r; if (n) while (n = n.nextSibling) if (n === t) return -1; return e ? 1 : -1 } function de(t) { return function (e) { return "input" === e.nodeName.toLowerCase() && e.type === t } } function he(n) { return function (e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } } function ge(t) { return function (e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } } function ve(a) { return le(function (o) { return o = +o, le(function (e, t) { var n, r = a([], e.length, o), i = r.length; while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n])) }) }) } function ye(e) { return e && "undefined" != typeof e.getElementsByTagName && e } for (e in d = se.support = {}, i = se.isXML = function (e) { var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement; return !Y.test(t || n && n.nodeName || "HTML") }, T = se.setDocument = function (e) { var t, n, r = e ? e.ownerDocument || e : p; return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) { return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length }), d.attributes = ce(function (e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function (e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) { return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length }), d.getById ? (b.filter.ID = function (e) { var t = e.replace(te, ne); return function (e) { return e.getAttribute("id") === t } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function (e) { var n = e.replace(te, ne); return function (e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && E) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o]; i = t.getElementsByName(e), r = 0; while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), b.find.TAG = d.getElementsByTagName ? function (e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, b.find.CLASS = d.getElementsByClassName && function (e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) { var t; a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]") }), ce(function (e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = C.createElement("input"); t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:") })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) while (t = t.parentNode) if (t === e) return !0; return !1 }, j = t ? function (e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function (e, t) { if (e === t) return l = !0, 0; var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t]; if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0; if (i === o) return pe(e, t); n = e; while (n = n.parentNode) a.unshift(n); n = t; while (n = n.parentNode) s.unshift(n); while (a[r] === s[r]) r++; return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0 }), C }, se.matches = function (e, t) { return se(e, null, null, t) }, se.matchesSelector = function (e, t) { if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { N(t, !0) } return 0 < se(t, C, null, [e]).length }, se.contains = function (e, t) { return (e.ownerDocument || e) != C && T(e), y(e, t) }, se.attr = function (e, t) { (e.ownerDocument || e) != C && T(e); var n = b.attrHandle[t.toLowerCase()], r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0; return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, se.escape = function (e) { return (e + "").replace(re, ie) }, se.error = function (e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function (e) { var t, n = [], r = 0, i = 0; if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) } return u = null, e }, o = se.getText = function (e) { var t, n = "", r = 0, i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling)n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else while (t = e[r++]) n += o(t); return n }, (b = se.selectors = { cacheLength: 50, createPseudo: le, match: G, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function (e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function () { return !0 } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function (e) { var t = m[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function (n, r, i) { return function (e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } }, CHILD: function (h, e, t, g, v) { var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e; return 1 === g && 0 === v ? function (e) { return !!e.parentNode } : function (e, t, n) { var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1; if (c) { if (y) { while (l) { a = e; while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1; u = l = "only" === h && !u && "nextSibling" } return !0 } if (u = [m ? c.firstChild : c.lastChild], m && p) { d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s]; while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) { i[h] = [k, s, d]; break } } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break; return (d -= v) === g || d % g == 0 && 0 <= d / g } } }, PSEUDO: function (e, o) { var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e); return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) { var n, r = a(e, o), i = r.length; while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]) }) : function (e) { return a(e, 0, t) }) : a } }, pseudos: { not: le(function (e) { var r = [], i = [], s = f(e.replace($, "$1")); return s[S] ? le(function (e, t, n, r) { var i, o = s(e, null, r, []), a = e.length; while (a--) (i = o[a]) && (e[a] = !(t[a] = i)) }) : function (e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() } }), has: le(function (t) { return function (e) { return 0 < se(t, e).length } }), contains: le(function (t) { return t = t.replace(te, ne), function (e) { return -1 < (e.textContent || o(e)).indexOf(t) } }), lang: le(function (n) { return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) { var t; do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function (e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id }, root: function (e) { return e === a }, focus: function (e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: ge(!1), disabled: ge(!0), checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6) return !1; return !0 }, parent: function (e) { return !b.pseudos.empty(e) }, header: function (e) { return J.test(e.nodeName) }, input: function (e) { return Q.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: ve(function () { return [0] }), last: ve(function (e, t) { return [t - 1] }), eq: ve(function (e, t, n) { return [n < 0 ? n + t : n] }), even: ve(function (e, t) { for (var n = 0; n < t; n += 2)e.push(n); return e }), odd: ve(function (e, t) { for (var n = 1; n < t; n += 2)e.push(n); return e }), lt: ve(function (e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;)e.push(r); return e }), gt: ve(function (e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r); return e }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e); for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e); function me() { } function xe(e) { for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value; return r } function be(s, e, t) { var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++; return e.first ? function (e, t, n) { while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n); return !1 } : function (e, t, n) { var r, i, o, a = [k, p]; if (n) { while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0 } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else { if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1 } } function we(i) { return 1 < i.length ? function (e, t, n) { var r = i.length; while (r--) if (!i[r](e, t, n)) return !1; return !0 } : i[0] } function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a } function Ce(d, h, g, v, y, e) { return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) { var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) { for (var r = 0, i = t.length; r < i; r++)se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f; if (g && g(f, p, n, r), v) { i = Te(p, u), v(i, [], n, r), o = i.length; while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a)) } if (e) { if (y || d) { if (y) { i = [], o = p.length; while (o--) (a = p[o]) && i.push(f[o] = a); y(null, p = [], i, r) } o = p.length; while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a)) } } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p) }) } function Ee(e) { for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) { return e === i }, a, !0), l = be(function (e) { return -1 < P(i, e) }, a, !0), c = [function (e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)if (t = b.relative[e[s].type]) c = [be(we(c), t)]; else { if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) { for (n = ++s; n < r; n++)if (b.relative[e[n].type]) break; return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e)) } c.push(t) } return we(c) } return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) { var n, r, i, o, a, s, u, l = x[e + " "]; if (l) return t ? 0 : l.slice(0); a = e, s = [], u = b.preFilter; while (a) { for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace($, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? se.error(e) : x(e, s).slice(0) }, f = se.compile = function (e, t) { var n, v, y, m, x, r, i = [], o = [], a = A[e + " "]; if (!a) { t || (t = h(e)), n = t.length; while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a); (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) { var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length; for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) { if (x && o) { a = 0, t || o.ownerDocument == C || (T(o), n = !E); while (s = v[a++]) if (s(o, t || C, n)) { r.push(o); break } i && (k = h) } m && ((o = !s && o) && u-- , e && c.push(o)) } if (u += l, m && l !== u) { a = 0; while (s = y[a++]) s(c, f, t, n); if (e) { if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r)); f = Te(f) } H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r) } return i && (k = h, w = p), c }, m ? le(r) : r))).selector = e } return a }, g = se.select = function (e, t, n, r) { var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e); if (n = n || [], 1 === c.length) { if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) { if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n; l && (t = t.parentNode), e = e.slice(o.shift().value.length) } i = G.needsContext.test(e) ? 0 : o.length; while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n; break } } } return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ce(function (e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function (e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ce(function (e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function (e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function (e) { return null == e.getAttribute("disabled") }) || fe(R, function (e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se }(C); S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape; var h = function (e, t, n) { var r = [], i = void 0 !== n; while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) { if (i && S(e).is(n)) break; r.push(e) } return r }, T = function (e, t) { for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e); return n }, k = S.expr.match.needsContext; function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; function j(e, n, r) { return m(n) ? S.grep(e, function (e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? S.grep(e, function (e) { return e === n !== r }) : "string" != typeof n ? S.grep(e, function (e) { return -1 < i.call(n, e) !== r }) : S.filter(n, e, r) } S.filter = function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) { return 1 === e.nodeType })) }, S.fn.extend({ find: function (e) { var t, n, r = this.length, i = this; if ("string" != typeof e) return this.pushStack(S(e).filter(function () { for (t = 0; t < r; t++)if (S.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++)S.find(e, i[t], n); return 1 < r ? S.uniqueSort(n) : n }, filter: function (e) { return this.pushStack(j(this, e || [], !1)) }, not: function (e) { return this.pushStack(j(this, e || [], !0)) }, is: function (e) { return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length } }); var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (S.fn.init = function (e, t, n) { var r, i; if (!e) return this; if (n = n || D, "string" == typeof e) { if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this) }).prototype = S.fn, D = S(E); var L = /^(?:parents|prev(?:Until|All))/, H = { children: !0, contents: !0, next: !0, prev: !0 }; function O(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e } S.fn.extend({ has: function (e) { var t = S(e, this), n = t.length; return this.filter(function () { for (var e = 0; e < n; e++)if (S.contains(this, t[e])) return !0 }) }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e); if (!k.test(e)) for (; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) { o.push(n); break } return this.pushStack(1 < o.length ? S.uniqueSort(o) : o) }, index: function (e) { return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t)))) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), S.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return h(e, "parentNode") }, parentsUntil: function (e, t, n) { return h(e, "parentNode", n) }, next: function (e) { return O(e, "nextSibling") }, prev: function (e) { return O(e, "previousSibling") }, nextAll: function (e) { return h(e, "nextSibling") }, prevAll: function (e) { return h(e, "previousSibling") }, nextUntil: function (e, t, n) { return h(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return h(e, "previousSibling", n) }, siblings: function (e) { return T((e.parentNode || {}).firstChild, e) }, children: function (e) { return T(e.firstChild) }, contents: function (e) { return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes)) } }, function (r, i) { S.fn[r] = function (e, t) { var n = S.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n) } }); var P = /[^\x20\t\r\n\f]+/g; function R(e) { return e } function M(e) { throw e } function I(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } } S.Callbacks = function (r) { var e, n; r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) { n[t] = !0 }), n) : S.extend({}, r); var i, t, o, a, s = [], u = [], l = -1, c = function () { for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) } r.memory || (t = !1), i = !1, a && (s = t ? [] : "") }, f = { add: function () { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { S.each(e, function (e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function () { return S.each(arguments, function (e, t) { var n; while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function (e) { return e ? -1 < S.inArray(e, s) : 0 < s.length }, empty: function () { return s && (s = []), this }, disable: function () { return a = u = [], s = t = "", this }, disabled: function () { return !s }, lock: function () { return a = u = [], t || i || (s = t = ""), this }, locked: function () { return !!a }, fireWith: function (e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function () { return f.fireWith(this, arguments), this }, fired: function () { return !!o } }; return f }, S.extend({ Deferred: function (e) { var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]], i = "pending", a = { state: function () { return i }, always: function () { return s.done(arguments).fail(arguments), this }, "catch": function (e) { return a.then(null, e) }, pipe: function () { var i = arguments; return S.Deferred(function (r) { S.each(o, function (e, t) { var n = m(i[t[4]]) && i[t[4]]; s[t[1]](function () { var e = n && n.apply(this, arguments); e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments) }) }), i = null }).promise() }, then: function (t, n, r) { var u = 0; function l(i, o, a, s) { return function () { var n = this, r = arguments, e = function () { var e, t; if (!(i < u)) { if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution"); t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++ , t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r)) } }, t = s ? e : function () { try { e() } catch (e) { S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r)) } }; i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t)) } } return S.Deferred(function (e) { o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M)) }).promise() }, promise: function (e) { return null != e ? S.extend(e, a) : a } }, s = {}; return S.each(o, function (e, t) { var n = t[2], r = t[5]; a[t[1]] = n.add, r && n.add(function () { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith }), a.promise(s), e && e.call(s, s), s }, when: function (e) { var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = S.Deferred(), a = function (t) { return function (e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } }; if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then(); while (t--) I(i[t], a(t), o.reject); return o.promise() } }); var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; S.Deferred.exceptionHook = function (e, t) { C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, S.readyException = function (e) { C.setTimeout(function () { throw e }) }; var F = S.Deferred(); function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready() } S.fn.ready = function (e) { return F.then(e)["catch"](function (e) { S.readyException(e) }), this }, S.extend({ isReady: !1, readyWait: 1, ready: function (e) { (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]) } }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B)); var $ = function (e, t, n, r, i, o, a) { var s = 0, u = e.length, l = null == n; if ("object" === w(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) { return l.call(S(e), n) })), t)) for (; s < u; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o }, _ = /^-ms-/, z = /-([a-z])/g; function U(e, t) { return t.toUpperCase() } function X(e) { return e.replace(_, "ms-").replace(z, U) } var V = function (e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType }; function G() { this.expando = S.expando + G.uid++ } G.uid = 1, G.prototype = { cache: function (e) { var t = e[this.expando]; return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function (e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[X(t)] = n; else for (r in t) i[X(r)] = t[r]; return i }, get: function (e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)] }, access: function (e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function (e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length; while (n--) delete r[t[n]] } (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function (e) { var t = e[this.expando]; return void 0 !== t && !S.isEmptyObject(t) } }; var Y = new G, Q = new G, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g; function Z(e, t, n) { var r, i; if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) { try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i) } catch (e) { } Q.set(e, t, n) } else n = void 0; return n } S.extend({ hasData: function (e) { return Q.hasData(e) || Y.hasData(e) }, data: function (e, t, n) { return Q.access(e, t, n) }, removeData: function (e, t) { Q.remove(e, t) }, _data: function (e, t, n) { return Y.access(e, t, n) }, _removeData: function (e, t) { Y.remove(e, t) } }), S.fn.extend({ data: function (n, e) { var t, r, i, o = this[0], a = o && o.attributes; if (void 0 === n) { if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) { t = a.length; while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r])); Y.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof n ? this.each(function () { Q.set(this, n) }) : $(this, function (e) { var t; if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0; this.each(function () { Q.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0) }, removeData: function (e) { return this.each(function () { Q.remove(this, e) }) } }), S.extend({ queue: function (e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [] }, dequeue: function (e, t) { t = t || "fx"; var n = S.queue(e, t), r = n.length, i = n.shift(), o = S._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () { S.dequeue(e, t) }, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return Y.get(e, n) || Y.access(e, n, { empty: S.Callbacks("once memory").add(function () { Y.remove(e, [t + "queue", n]) }) }) } }), S.fn.extend({ queue: function (t, n) { var e = 2; return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () { var e = S.queue(this, t, n); S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t) }) }, dequeue: function (e) { return this.each(function () { S.dequeue(this, e) }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, t) { var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function () { --r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = void 0), e = e || "fx"; while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++ , n.empty.add(s)); return s(), i.promise(t) } }); var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"), ne = ["Top", "Right", "Bottom", "Left"], re = E.documentElement, ie = function (e) { return S.contains(e.ownerDocument, e) }, oe = { composed: !0 }; re.getRootNode && (ie = function (e) { return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument }); var ae = function (e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display") }; function se(e, t, n, r) { var i, o, a = 20, s = r ? function () { return r.cur() } : function () { return S.css(e, t, "") }, u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t)); if (c && c[3] !== l) { u /= 2, l = l || c[3], c = +u || 1; while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o; c *= 2, S.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } var ue = {}; function le(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n))); for (c = 0; c < f; c++)null != l[c] && (e[c].style.display = l[c]); return e } S.fn.extend({ show: function () { return le(this, !0) }, hide: function () { return le(this) }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () { ae(this) ? S(this).show() : S(this).hide() }) } }); var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i; ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild; var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; function ve(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n } function ye(e, t) { for (var n = 0, r = e.length; n < r; n++)Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval")) } ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]); var me = /<|&#?\w+;/; function xe(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) { a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0]; while (c--) a = a.lastChild; S.merge(p, a.childNodes), (a = f.firstChild).textContent = "" } else p.push(t.createTextNode(o)); f.textContent = "", d = 0; while (o = p[d++]) if (r && -1 < S.inArray(o, r)) i && i.push(o); else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) } return f } var be = /^([^.]*)(?:\.(.+)|)/; function we() { return !0 } function Te() { return !1 } function Ce(e, t) { return e === function () { try { return E.activeElement } catch (e) { } }() == ("focus" === t) } function Ee(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te; else if (!i) return e; return 1 === o && (a = i, (i = function (e) { return S().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = S.guid++)), e.each(function () { S.event.add(this, t, i, r, n) }) } function Se(e, i, o) { o ? (Y.set(e, i, !1), S.event.add(e, i, { namespace: !1, handler: function (e) { var t, n, r = Y.get(this, i); if (1 & e.isTrigger && this[i]) { if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value } else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation()) } })) : void 0 === Y.get(e, i) && S.event.add(e, i, we) } S.event = { global: {}, add: function (t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t); if (V(t)) { n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) { return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(P) || [""]).length; while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0) } }, remove: function (e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e); if (v && (u = v.events)) { l = (t = (t || "").match(P) || [""]).length; while (l--) if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) { f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount-- , f.remove && f.remove.call(e, c)); a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]) } else for (d in u) S.event.remove(e, d + t[l], n, r, !0); S.isEmptyObject(u) && Y.remove(e, "handle events") } }, dispatch: function (e) { var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {}; for (s[0] = u, t = 1; t < arguments.length; t++)s[t] = arguments[t]; if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) { a = S.event.handlers.call(this, u, l), t = 0; while ((i = a[t++]) && !u.isPropagationStopped()) { u.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, u), u.result } }, handlers: function (e, t) { var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target; if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++)void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r); o.length && s.push({ elem: l, handlers: o }) } return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function (t, e) { Object.defineProperty(S.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function () { if (this.originalEvent) return e(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[t] }, set: function (e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) }, fix: function (e) { return e[S.expando] ? e : new S.Event(e) }, special: { load: { noBubble: !0 }, click: { setup: function (e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1 }, trigger: function (e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0 }, _default: function (e) { var t = e.target; return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a") } }, beforeunload: { postDispatch: function (e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, S.removeEvent = function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, S.Event = function (e, t) { if (!(this instanceof S.Event)) return new S.Event(e, t); e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0 }, S.Event.prototype = { constructor: S.Event, isDefaultPrevented: Te, isPropagationStopped: Te, isImmediatePropagationStopped: Te, isSimulated: !1, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function () { var e = this.originalEvent; this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, S.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0 }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function (e, t) { S.event.special[e] = { setup: function () { return Se(this, e, Ce), !1 }, trigger: function () { return Se(this, e), !0 }, _default: function () { return !0 }, delegateType: t } }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) { S.event.special[e] = { delegateType: i, bindType: i, handle: function (e) { var t, n = e.relatedTarget, r = e.handleObj; return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t } } }), S.fn.extend({ on: function (e, t, n, r) { return Ee(this, e, t, n, r) }, one: function (e, t, n, r) { return Ee(this, e, t, n, r, 1) }, off: function (e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () { S.event.remove(this, e, n, t) }) } }); var ke = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i, Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; function je(e, t) { return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e } function De(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e } function qe(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e } function Le(e, t) { var n, r, i, o, a, s; if (1 === t.nodeType) { if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++)S.event.add(t, i, s[i][n]); Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a)) } } function He(n, r, i, o) { r = g(r); var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d); if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function (e) { var t = n.eq(e); h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o) }); if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) { for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c); if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(Ne, ""), u, l)) } return n } function Oe(e, t, n) { for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r)); return e } S.extend({ htmlPrefilter: function (e) { return e }, clone: function (e, t, n) { var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e); if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue); if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)Le(o[r], a[r]); else Le(e, c); return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c }, cleanData: function (e) { for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)if (V(n)) { if (t = n[Y.expando]) { if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle); n[Y.expando] = void 0 } n[Q.expando] && (n[Q.expando] = void 0) } } }), S.fn.extend({ detach: function (e) { return Oe(this, e, !0) }, remove: function (e) { return Oe(this, e) }, text: function (e) { return $(this, function (e) { return void 0 === e ? S.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function () { return He(this, arguments, function (e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e) }) }, prepend: function () { return He(this, arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = je(this, e); t.insertBefore(e, t.firstChild) } }) }, before: function () { return He(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return He(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function () { for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = ""); return this }, clone: function (e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function () { return S.clone(this, e, t) }) }, html: function (e) { return $(this, function (e) { var t = this[0] || {}, n = 0, r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) { e = S.htmlPrefilter(e); try { for (; n < r; n++)1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e); t = 0 } catch (e) { } } t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function () { var n = []; return He(this, arguments, function (e) { var t = this.parentNode; S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this)) }, n) } }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) { S.fn[e] = function (e) { for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } }); var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Re = function (e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) }, Me = function (e, t, n) { var r, i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i]; for (i in r = n.call(e), t) e.style[i] = o[i]; return r }, Ie = new RegExp(ne.join("|"), "i"); function We(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a } function Fe(e, t) { return { get: function () { if (!e()) return (this.get = t).apply(this, arguments); delete this.get } } } !function () { function e() { if (l) { u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l); var e = C.getComputedStyle(l); n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null } } function t(e) { return Math.round(parseFloat(e)) } var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div"); l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, { boxSizingReliable: function () { return e(), r }, pixelBoxStyles: function () { return e(), o }, pixelPosition: function () { return e(), n }, reliableMarginLeft: function () { return e(), s }, scrollboxSize: function () { return e(), i }, reliableTrDimensions: function () { var e, t, n, r; return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a } })) }(); var Be = ["Webkit", "Moz", "ms"], $e = E.createElement("div").style, _e = {}; function ze(e) { var t = S.cssProps[e] || _e[e]; return t || (e in $e ? e : _e[e] = function (e) { var t = e[0].toUpperCase() + e.slice(1), n = Be.length; while (n--) if ((e = Be[n] + t) in $e) return e }(e) || e) } var Ue = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ve = { position: "absolute", visibility: "hidden", display: "block" }, Ge = { letterSpacing: "0", fontWeight: "400" }; function Ye(e, t, n) { var r = te.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t } function Qe(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0, s = 0, u = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2)"margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i)); return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u } function Je(e, t, n) { var r = Re(e), i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r), o = i, a = We(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1); if (Pe.test(a)) { if (!n) return a; a = "auto" } return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px" } function Ke(e, t, n, r, i) { return new Ke.prototype.init(e, t, n, r, i) } S.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = We(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = X(t), u = Xe.test(t), l = e.style; if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function (e, t, n, r) { var i, o, a, s = X(t); return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), S.each(["height", "width"], function (e, u) { S.cssHooks[u] = { get: function (e, t, n) { if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function () { return Je(e, u, n) }) }, set: function (e, t, n) { var r, i = Re(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Qe(e, u, n, a, i) : 0; return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s) } } }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) { if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, { marginLeft: 0 }, function () { return e.getBoundingClientRect().left })) + "px" }), S.each({ margin: "", padding: "", border: "Width" }, function (i, o) { S.cssHooks[i + o] = { expand: function (e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)n[i + ne[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (S.cssHooks[i + o].set = Ye) }), S.fn.extend({ css: function (e, t) { return $(this, function (e, t, n) { var r, i, o = {}, a = 0; if (Array.isArray(t)) { for (r = Re(e), i = t.length; a < i; a++)o[t[a]] = S.css(e, t[a], !1, r); return o } return void 0 !== n ? S.style(e, t, n) : S.css(e, t) }, e, t, 1 < arguments.length) } }), ((S.Tween = Ke).prototype = { constructor: Ke, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px") }, cur: function () { var e = Ke.propHooks[this.prop]; return e && e.get ? e.get(this) : Ke.propHooks._default.get(this) }, run: function (e) { var t, n = Ke.propHooks[this.prop]; return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this } }).init.prototype = Ke.prototype, (Ke.propHooks = { _default: { get: function (e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function (e) { S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = Ke.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, S.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, S.fx = Ke.prototype.init, S.fx.step = {}; var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/; function ot() { et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick()) } function at() { return C.setTimeout(function () { Ze = void 0 }), Ze = Date.now() } function st(e, t) { var n, r = 0, i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t)i["margin" + (n = ne[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i } function ut(e, t, n) { for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)if (r = i[o].call(n, t, e)) return r } function lt(o, e, t) { var n, a, r = 0, i = lt.prefilters.length, s = S.Deferred().always(function () { delete u.elem }), u = function () { if (a) return !1; for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) }, l = s.promise({ elem: o, props: S.extend({}, e), opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t), originalProperties: e, originalOptions: t, startTime: Ze || at(), duration: t.duration, tweens: [], createTween: function (e, t) { var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n }, stop: function (e) { var t = 0, n = e ? l.tweens.length : 0; if (a) return this; for (a = !0; t < n; t++)l.tweens[t].run(1); return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this } }), c = l.props; for (!function (e, t) { var n, r, i, o, a; for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i }(c, l.opts.specialEasing); r < i; r++)if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n; return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l } S.Animation = S.extend(lt, { tweeners: { "*": [function (e, t) { var n = this.createTween(e, t); return se(n.elem, e, te.exec(t), n), n }] }, tweener: function (e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(P); for (var n, r = 0, i = e.length; r < i; r++)n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t) }, prefilters: [function (e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, "fxshow"); for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () { a.unqueued || s() }), a.unqueued++ , p.always(function () { p.always(function () { a.unqueued-- , S.queue(e, "fx").length || a.empty.fire() }) })), t) if (i = t[r], rt.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !v || void 0 === v[r]) continue; g = !0 } d[r] = v && v[r] || S.style(e, r) } if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && le([e], !0), p.done(function () { for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]) })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0)) }], prefilter: function (e, t) { t ? lt.prefilters.unshift(e) : lt.prefilters.push(e) } }), S.speed = function (e, t, n) { var r = e && "object" == typeof e ? S.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () { m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue) }, r }, S.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (t, e, n, r) { var i = S.isEmptyObject(t), o = S.speed(e, n, r), a = function () { var e = lt(this, S.extend({}, t), o); (i || Y.get(this, "finish")) && e.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function (i, e, o) { var a = function (e) { var t = e.stop; delete e.stop, t(o) }; return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () { var e = !0, t = null != i && i + "queueHooks", n = S.timers, r = Y.get(this); if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]); for (t = n.length; t--;)n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1)); !e && o || S.dequeue(this, i) }) }, finish: function (a) { return !1 !== a && (a = a || "fx"), this.each(function () { var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0; for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;)i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1)); for (e = 0; e < o; e++)n[e] && n[e].finish && n[e].finish.call(this); delete t.finish }) } }), S.each(["toggle", "show", "hide"], function (e, r) { var i = S.fn[r]; S.fn[r] = function (e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n) } }), S.each({ slideDown: st("show"), slideUp: st("hide"), slideToggle: st("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) { S.fn[e] = function (e, t, n) { return this.animate(r, e, t, n) } }), S.timers = [], S.fx.tick = function () { var e, t = 0, n = S.timers; for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1); n.length || S.fx.stop(), Ze = void 0 }, S.fx.timer = function (e) { S.timers.push(e), S.fx.start() }, S.fx.interval = 13, S.fx.start = function () { et || (et = !0, ot()) }, S.fx.stop = function () { et = null }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function (r, e) { return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) { var n = C.setTimeout(e, r); t.stop = function () { C.clearTimeout(n) } }) }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value; var ct, ft = S.expr.attrHandle; S.fn.extend({ attr: function (e, t) { return $(this, S.attr, e, t, 1 < arguments.length) }, removeAttr: function (e) { return this.each(function () { S.removeAttr(this, e) }) } }), S.extend({ attr: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function (e, t) { if (!y.radioValue && "radio" === t && A(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function (e, t) { var n, r = 0, i = t && t.match(P); if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n) } }), ct = { set: function (e, t, n) { return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n } }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) { var a = ft[t] || S.find.attr; ft[t] = function (e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r } }); var pt = /^(?:input|select|textarea|button)$/i, dt = /^(?:a|area)$/i; function ht(e) { return (e.match(P) || []).join(" ") } function gt(e) { return e.getAttribute && e.getAttribute("class") || "" } function vt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [] } S.fn.extend({ prop: function (e, t) { return $(this, S.prop, e, t, 1 < arguments.length) }, removeProp: function (e) { return this.each(function () { delete this[S.propFix[e] || e] }) } }), S.extend({ prop: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function (e) { var t = S.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function (e) { var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { S.propFix[this.toLowerCase()] = this }), S.fn.extend({ addClass: function (t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function (e) { S(this).addClass(t.call(this, e, gt(this))) }); if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") { a = 0; while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " "); i !== (s = ht(r)) && n.setAttribute("class", s) } return this }, removeClass: function (t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function (e) { S(this).removeClass(t.call(this, e, gt(this))) }); if (!arguments.length) return this.attr("class", ""); if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") { a = 0; while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " "); i !== (s = ht(r)) && n.setAttribute("class", s) } return this }, toggleClass: function (i, t) { var o = typeof i, a = "string" === o || Array.isArray(i); return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) { S(this).toggleClass(i.call(this, e, gt(this), t), t) }) : this.each(function () { var e, t, n, r; if (a) { t = 0, n = S(this), r = vt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || "")) }) }, hasClass: function (e) { var t, n, r = 0; t = " " + e + " "; while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0; return !1 } }); var yt = /\r/g; S.fn.extend({ val: function (n) { var r, e, i, t = this[0]; return arguments.length ? (i = m(n), this.each(function (e) { var t; 1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) { return null == e ? "" : e + "" })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t)) })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0 } }), S.extend({ valHooks: { option: { get: function (e) { var t = S.find.attr(e, "value"); return null != t ? t : ht(S.text(e)) } }, select: { get: function (e) { var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) { if (t = S(n).val(), a) return t; s.push(t) } return s }, set: function (e, t) { var n, r, i = e.options, o = S.makeArray(t), a = i.length; while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), S.each(["radio", "checkbox"], function () { S.valHooks[this] = { set: function (e, t) { if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t) } }, y.checkOn || (S.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in C; var mt = /^(?:focusinfocus|focusoutblur)$/, xt = function (e) { e.stopPropagation() }; S.extend(S.event, { trigger: function (e, t, n, r) { var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : []; if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) { if (!r && !c.noBubble && !x(n)) { for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)p.push(o), a = o; a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C) } i = 0; while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault()); return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result } }, simulate: function (e, t, n) { var r = S.extend(new S.Event, n, { type: e, isSimulated: !0 }); S.event.trigger(r, null, t) } }), S.fn.extend({ trigger: function (e, t) { return this.each(function () { S.event.trigger(e, t, this) }) }, triggerHandler: function (e, t) { var n = this[0]; if (n) return S.event.trigger(e, t, n, !0) } }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function (n, r) { var i = function (e) { S.event.simulate(r, e.target, S.event.fix(e)) }; S.event.special[r] = { setup: function () { var e = this.ownerDocument || this.document || this, t = Y.access(e, r); t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1) }, teardown: function () { var e = this.ownerDocument || this.document || this, t = Y.access(e, r) - 1; t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r)) } } }); var bt = C.location, wt = { guid: Date.now() }, Tt = /\?/; S.parseXML = function (e) { var t, n; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) { } return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) { return e.textContent }).join("\n") : e)), t }; var Ct = /\[\]$/, Et = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i, kt = /^(?:input|select|textarea|keygen)/i; function At(n, e, r, i) { var t; if (Array.isArray(e)) S.each(e, function (e, t) { r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) }); else if (r || "object" !== w(e)) i(n, e); else for (t in e) At(n + "[" + t + "]", e[t], r, i) } S.param = function (e, t) { var n, r = [], i = function (e, t) { var n = m(t) ? t() : t; r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () { i(this.name, this.value) }); else for (n in e) At(n, e[n], t, i); return r.join("&") }, S.fn.extend({ serialize: function () { return S.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = S.prop(this, "elements"); return e ? S.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e)) }).map(function (e, t) { var n = S(this).val(); return null == n ? null : Array.isArray(n) ? S.map(n, function (e) { return { name: t.name, value: e.replace(Et, "\r\n") } }) : { name: t.name, value: n.replace(Et, "\r\n") } }).get() } }); var Nt = /%20/g, jt = /#.*$/, Dt = /([?&])_=[^&]*/, qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Lt = /^(?:GET|HEAD)$/, Ht = /^\/\//, Ot = {}, Pt = {}, Rt = "*/".concat("*"), Mt = E.createElement("a"); function It(o) { return function (e, t) { "string" != typeof e && (t = e, e = "*"); var n, r = 0, i = e.toLowerCase().match(P) || []; if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t) } } function Wt(t, i, o, a) { var s = {}, u = t === Pt; function l(e) { var r; return s[e] = !0, S.each(t[e] || [], function (e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r } return l(i.dataTypes[0]) || !s["*"] && l("*") } function Ft(e, t) { var n, r, i = S.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && S.extend(!0, e, r), e } Mt.href = bt.href, S.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: bt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e) }, ajaxPrefilter: It(Ot), ajaxTransport: It(Pt), ajax: function (e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = { readyState: 0, getResponseHeader: function (e) { var t; if (h) { if (!n) { n = {}; while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) } t = n[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function () { return h ? p : null }, setRequestHeader: function (e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this }, overrideMimeType: function (e) { return null == h && (v.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]]; return this }, abort: function (e) { var t = e || u; return c && c.abort(t), l(0, t), this } }; if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) { r = E.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } } if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T; for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]); if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort(); if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) { if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T; v.async && 0 < v.timeout && (d = C.setTimeout(function () { T.abort("timeout") }, v.timeout)); try { h = !1, c.send(a, l) } catch (e) { if (h) throw e; l(-1, e) } } else l(-1, "No Transport"); function l(e, t, n, r) { var i, o, a, s, u, l = t; h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) { var r, i, o, a, s = e.contents, u = e.dataTypes; while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r) for (i in s) if (s[i] && s[i].test(r)) { u.unshift(i); break } if (u[0] in n) o = u[0]; else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break } a || (a = i) } o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () { }), s = function (e, t, n, r) { var i, o, a, s, u, l = {}, c = e.dataTypes.slice(); if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a]; o = c.shift(); while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break } if (!0 !== a) if (a && e["throws"]) t = a(t); else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop"))) } return T }, getJSON: function (e, t, n) { return S.get(e, t, n, "json") }, getScript: function (e, t) { return S.get(e, void 0, t, "script") } }), S.each(["get", "post"], function (e, i) { S[i] = function (e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e)) } }), S.ajaxPrefilter(function (e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), S._evalUrl = function (e, t, n) { return S.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function () { } }, dataFilter: function (e) { S.globalEval(e, t, n) } }) }, S.fn.extend({ wrapAll: function (e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function (n) { return m(n) ? this.each(function (e) { S(this).wrapInner(n.call(this, e)) }) : this.each(function () { var e = S(this), t = e.contents(); t.length ? t.wrapAll(n) : e.append(n) }) }, wrap: function (t) { var n = m(t); return this.each(function (e) { S(this).wrapAll(n ? t.call(this, e) : t) }) }, unwrap: function (e) { return this.parent(e).not("body").each(function () { S(this).replaceWith(this.childNodes) }), this } }), S.expr.pseudos.hidden = function (e) { return !S.expr.pseudos.visible(e) }, S.expr.pseudos.visible = function (e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, S.ajaxSettings.xhr = function () { try { return new C.XMLHttpRequest } catch (e) { } }; var Bt = { 0: 200, 1223: 204 }, $t = S.ajaxSettings.xhr(); y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function (i) { var o, a; if (y.cors || $t && !i.crossDomain) return { send: function (e, t) { var n, r = i.xhr(); if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n]; for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]); o = function (e) { return function () { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () { 4 === r.readyState && C.setTimeout(function () { o && a() }) }, o = o("abort"); try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e } }, abort: function () { o && o() } } }), S.ajaxPrefilter(function (e) { e.crossDomain && (e.contents.script = !1) }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) { return S.globalEval(e), e } } }), S.ajaxPrefilter("script", function (e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), S.ajaxTransport("script", function (n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function (e, t) { r = S("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function (e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function () { i && i() } } }); var _t, zt = [], Ut = /(=)\?(?=&|$)|\?\?/; S.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = zt.pop() || S.expando + "_" + wt.guid++; return this[e] = !0, e } }), S.ajaxPrefilter("json jsonp", function (e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () { return o || S.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function () { o = arguments }, n.always(function () { void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function (e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes))); var r, i, o }, S.fn.load = function (e, t, n) { var r, i, o, a = this, s = e.indexOf(" "); return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) { o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e) }).always(n && function (e, t) { a.each(function () { n.apply(this, o || [e.responseText, t, e]) }) }), this }, S.expr.pseudos.animated = function (t) { return S.grep(S.timers, function (e) { return t === e.elem }).length }, S.offset = { setOffset: function (e, t, n) { var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f) } }, S.fn.extend({ offset: function (t) { if (arguments.length) return void 0 === t ? this : this.each(function (e) { S.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function () { if (this[0]) { var e, t, n, r = this[0], i = { top: 0, left: 0 }; if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect(); else { t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode; e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent; while (e && "static" === S.css(e, "position")) e = e.offsetParent; return e || re }) } }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) { var o = "pageYOffset" === i; S.fn[t] = function (e) { return $(this, function (e, t, n) { var r; if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t]; r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n }, t, e, arguments.length) } }), S.each(["top", "left"], function (e, n) { S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) { if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t }) }), S.each({ Height: "height", Width: "width" }, function (a, s) { S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) { S.fn[o] = function (e, t) { var n = arguments.length && (r || "boolean" != typeof e), i = r || (!0 === e || !0 === t ? "margin" : "border"); return $(this, function (e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i) }, s, n ? e : void 0, n) } }) }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { S.fn[t] = function (e) { return this.on(t, e) } }), S.fn.extend({ bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e) } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) { S.fn[n] = function (e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }); var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; S.proxy = function (e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || S.guid++ , i }, S.holdReady = function (e) { e ? S.readyWait++ : S.ready(!0) }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) { var t = S.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, S.trim = function (e) { return null == e ? "" : (e + "").replace(Xt, "") }, "function" == typeof define && define.amd && define("jquery", [], function () { return S }); var Vt = C.jQuery, Gt = C.$; return S.noConflict = function (e) { return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S }, "undefined" == typeof e && (C.jQuery = C.$ = S), S });

// jQuery Mobile 1.5.0 by jQuery Foundation, Inc., Copyright 2010, 2017 jQuery Foundation, Inc.
/*! jQuery Mobile v1.5.0-alpha.1 | Copyright jQuery Foundation, Inc. | jquery.org/license */

(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(t){typeof define=="function"&&define.amd?define("vmouse",["jquery"],t):t(e)})(function(e){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,o,a,l,c,h,p,d,v,m;t=e.Event(t),t.type=n,o=t.originalEvent,a=u,i.search(/^(mouse|click)/)>-1&&(a=f);if(o)for(d=a.length;d;)c=a[--d],t[c]=o[c];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){l=T(o),i=l.touches,h=l.changedTouches,p=i&&i.length?i[0]:h&&h.length?h[0]:r;if(p)for(v=0,m=s.length;v<m;v++)c=s[v],t[c]=p[c]}return t}function C(n){var r={},i,s;while(n){i=e.data(n,t);for(s in i)i[s]&&(r[s]=r.hasVirtualBinding=!0);n=n.parentNode}return r}function k(n,r){var i;while(n){i=e.data(n,t);if(i&&(!r||i[r]))return n;n=n.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){c&&(clearTimeout(c),c=0)}function D(){_(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,i),r;t.type==="click"&&e.data(t.target,"lastTouchType")==="touchstart"&&setTimeout(function(){e.data(t.target,"lastTouchType")==="touchstart"&&(O(),delete e.data(t.target).lastTouchType,H(t))},e.vmouse.maximumTimeBetweenTouches),!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,s,o;n&&n.length===1&&(r=t.target,s=C(r),e.data(t.target,"lastTouchType",t.type),s.hasVirtualBinding&&(E=w++,e.data(r,i,E),_(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,s),P("vmousedown",t,s)))}function j(t){if(g)return;d||P("vmousecancel",t,C(t.target)),e.data(t.target,"lastTouchType",t.type),d=!0,D()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);e.data(t.target,"lastTouchType",t.type),d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),D()}function I(t){if(g||e.data(t.target,"lastTouchType")===r)return;A(),delete e.data(t.target).lastTouchType;var n=C(t.target),i,s;P("vmouseup",t,n),d||(i=P("vclick",t,n),i&&i.isDefaultPrevented()&&(s=T(t).changedTouches[0],v.push({touchID:E,x:s.clientX,y:s.clientY}),m=!0)),P("vmouseout",t,n),d=!1,D()}function q(n){var r=e.data(n,t),i;if(r)for(i in r)if(r[i])return!0;return!1}function R(){}function U(n){var r=n.substr(1);return{setup:function(){q(this)||e.data(this,t,{});var i=e.data(this,t);i[n]=!0,l[n]=(l[n]||0)+1,l[n]===1&&b.bind(r,H),e(this).bind(r,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[n],l[n]||b.unbind(r,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var i=e(this),s=e.data(this,t);s&&(s[n]=!1),i.unbind(r,R),q(this)||i.removeData(t)}}}var t="virtualMouseBindings",i="virtualTouchID",s="clientX clientY pageX pageY screenX screenY".split(" "),o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=u.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500,maximumTimeBetweenTouches:100};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,s,o,u,a,f,l;if(n){s=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-s)<S&&Math.abs(f.y-o)<S||e.data(u,i)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)}),function(t){typeof define=="function"&&define.amd?define("ns",["jquery"],t):t(e)}(function(e){return e.mobile={version:"@VERSION"},e.mobile}),function(t){typeof define=="function"&&define.amd?define("support/touch",["jquery","../ns"],t):t(e)}(function(e){var t={touch:"ontouchend"in n};return e.mobile.support=e.mobile.support||{},e.extend(e.support,t),e.extend(e.mobile.support,t),e.support}),function(t){typeof define=="function"&&define.amd?define("events/touch",["jquery","../vmouse","../support/touch"],t):t(e)}(function(e){function f(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o=s?"touchstart":"mousedown",u=s?"touchend":"mouseup",a=s?"touchmove":"mousemove";return e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function l(){u&&(n.bind("vclick",a),clearTimeout(u))}function c(){l(),n.unbind("vclick",a).unbind("vmouseup",l),i.unbind("vmousecancel",c)}r=!1;if(s.which&&s.which!==1)return!0;var o=s.target,u,a;a=function(e){c(),!r&&o===e.target?f(t,"tap",e):r&&e.preventDefault()},n.bind("vmouseup",l),i.bind("vmousecancel",c),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),u=0,f(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:t.devicePixelRatio>=2?15:30,verticalDistanceThreshold:t.devicePixelRatio>=2?15:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return f(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),f(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),f=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,f),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(a,s.move),s.move=null},i.on(a,s.move).one(u,s.stop)},r.on(o,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(o,n.start),n.move&&i.off(a,n.move),n.stop&&i.off(u,n.stop))}},e.each({taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}}),e.event.special})});

// Modernizr 2.8.3 by Modernizr.com Team, MIT & BSD | Modernizr.com
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
; window.Modernizr = function (a, b, c) { function D(a) { j.cssText = a } function E(a, b) { return D(n.join(a + ";") + (b || "")) } function F(a, b) { return typeof a === b } function G(a, b) { return !!~("" + a).indexOf(b) } function H(a, b) { for (var d in a) { var e = a[d]; if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e : !0 } return !1 } function I(a, b, d) { for (var e in a) { var f = b[a[e]]; if (f !== c) return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f } return !1 } function J(a, b, c) { var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + p.join(d + " ") + d).split(" "); return F(b, "string") || F(b, "undefined") ? H(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), I(e, b, c)) } function K() { e.input = function (c) { for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k; return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function (a) { for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e; return t }("search tel url email datetime date month week time datetime-local number range color".split(" ")) } var d = "2.8.3", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k = b.createElement("input"), l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "), o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r = { svg: "http://www.w3.org/2000/svg" }, s = {}, t = {}, u = {}, v = [], w = v.slice, x, y = function (a, c, d, e) { var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body"); if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j); return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i }, z = function (b) { var c = a.matchMedia || a.msMatchMedia; if (c) return c(b) && c(b).matches || !1; var d; return y("@media " + b + " { #" + h + " { position: absolute; } }", function (b) { d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute" }), d }, A = function () { function d(d, e) { e = e || b.createElement(a[d] || "div"), d = "on" + d; var f = d in e; return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = F(e[d], "function"), F(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f } var a = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" }; return d }(), B = {}.hasOwnProperty, C; !F(B, "undefined") && !F(B.call, "undefined") ? C = function (a, b) { return B.call(a, b) } : C = function (a, b) { return b in a && F(a.constructor.prototype[b], "undefined") }, Function.prototype.bind || (Function.prototype.bind = function (b) { var c = this; if (typeof c != "function") throw new TypeError; var d = w.call(arguments, 1), e = function () { if (this instanceof e) { var a = function () { }; a.prototype = c.prototype; var f = new a, g = c.apply(f, d.concat(w.call(arguments))); return Object(g) === g ? g : f } return c.apply(b, d.concat(w.call(arguments))) }; return e }), s.flexbox = function () { return J("flexWrap") }, s.canvas = function () { var a = b.createElement("canvas"); return !!a.getContext && !!a.getContext("2d") }, s.canvastext = function () { return !!e.canvas && !!F(b.createElement("canvas").getContext("2d").fillText, "function") }, s.webgl = function () { return !!a.WebGLRenderingContext }, s.touch = function () { var c; return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) { c = a.offsetTop === 9 }), c }, s.geolocation = function () { return "geolocation" in navigator }, s.postmessage = function () { return !!a.postMessage }, s.websqldatabase = function () { return !!a.openDatabase }, s.indexedDB = function () { return !!J("indexedDB", a) }, s.hashchange = function () { return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7) }, s.history = function () { return !!a.history && !!history.pushState }, s.draganddrop = function () { var a = b.createElement("div"); return "draggable" in a || "ondragstart" in a && "ondrop" in a }, s.websockets = function () { return "WebSocket" in a || "MozWebSocket" in a }, s.rgba = function () { return D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba") }, s.hsla = function () { return D("background-color:hsla(120,40%,100%,.5)"), G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla") }, s.multiplebgs = function () { return D("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background) }, s.backgroundsize = function () { return J("backgroundSize") }, s.borderimage = function () { return J("borderImage") }, s.borderradius = function () { return J("borderRadius") }, s.boxshadow = function () { return J("boxShadow") }, s.textshadow = function () { return b.createElement("div").style.textShadow === "" }, s.opacity = function () { return E("opacity:.55"), /^0.55$/.test(j.opacity) }, s.cssanimations = function () { return J("animationName") }, s.csscolumns = function () { return J("columnCount") }, s.cssgradients = function () { var a = "background-image:", b = "gradient(linear,left top,right bottom,from(#9f9),to(white));", c = "linear-gradient(left top,#9f9, white);"; return D((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), G(j.backgroundImage, "gradient") }, s.cssreflections = function () { return J("boxReflect") }, s.csstransforms = function () { return !!J("transform") }, s.csstransforms3d = function () { var a = !!J("perspective"); return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b, c) { a = b.offsetLeft === 9 && b.offsetHeight === 3 }), a }, s.csstransitions = function () { return J("transition") }, s.fontface = function () { var a; return y('@font-face {font-family:"font";src:url("https://")}', function (c, d) { var e = b.getElementById("smodernizr"), f = e.sheet || e.styleSheet, g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : ""; a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0 }), a }, s.generatedcontent = function () { var a; return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function (b) { a = b.offsetHeight >= 3 }), a }, s.video = function () { var a = b.createElement("video"), c = !1; try { if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "") } catch (d) { } return c }, s.audio = function () { var a = b.createElement("audio"), c = !1; try { if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "") } catch (d) { } return c }, s.localstorage = function () { try { return localStorage.setItem(h, h), localStorage.removeItem(h), !0 } catch (a) { return !1 } }, s.sessionstorage = function () { try { return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0 } catch (a) { return !1 } }, s.webworkers = function () { return !!a.Worker }, s.applicationcache = function () { return !!a.applicationCache }, s.svg = function () { return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect }, s.inlinesvg = function () { var a = b.createElement("div"); return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg }, s.smil = function () { return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate"))) }, s.svgclippaths = function () { return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath"))) }; for (var L in s) C(s, L) && (x = L.toLowerCase(), e[x] = s[L](), v.push((e[x] ? "" : "no-") + x)); return e.input || K(), e.addTest = function (a, b) { if (typeof a == "object") for (var d in a) C(a, d) && e.addTest(d, a[d]); else { a = a.toLowerCase(); if (e[a] !== c) return e; b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b } return e }, D(""), i = k = null, function (a, b) { function l(a, b) { var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement; return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild) } function m() { var a = s.elements; return typeof a == "string" ? a.split(" ") : a } function n(a) { var b = j[a[h]]; return b || (b = {}, i++ , a[h] = i, j[i] = b), b } function o(a, c, d) { c || (c = b); if (k) return c.createElement(a); d || (d = n(c)); var g; return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g } function p(a, c) { a || (a = b); if (k) return a.createDocumentFragment(); c = c || n(a); var d = c.frag.cloneNode(), e = 0, f = m(), g = f.length; for (; e < g; e++) d.createElement(f[e]); return d } function q(a, b) { b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) { return s.shivMethods ? o(c, a, b) : b.createElem(c) }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function (a) { return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")' }) + ");return n}")(s, b.frag) } function r(a) { a || (a = b); var c = n(a); return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a } var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g, h = "_html5shiv", i = 0, j = {}, k; (function () { try { var a = b.createElement("a"); a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function () { b.createElement("a"); var a = b.createDocumentFragment(); return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined" }() } catch (c) { g = !0, k = !0 } })(); var s = { elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: c, shivCSS: d.shivCSS !== !1, supportsUnknownElements: k, shivMethods: d.shivMethods !== !1, type: "default", shivDocument: r, createElement: o, createDocumentFragment: p }; a.html5 = s, r(b) }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.mq = z, e.hasEvent = A, e.testProp = function (a) { return H([a]) }, e.testAllProps = J, e.testStyles = y, e.prefixed = function (a, b, c) { return b ? J(a, b, c) : J(a, "pfx") }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e }(this, this.document), function (a, b, c) { function d(a) { return "[object Function]" == o.call(a) } function e(a) { return "string" == typeof a } function f() { } function g(a) { return !a || "loaded" == a || "complete" == a || "uninitialized" == a } function h() { var a = p.shift(); q = 1, a ? a.t ? m(function () { ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1) }, 0) : (a(), h()) : q = 0 } function i(a, c, d, e, f, i, j) { function k(b) { if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) { "img" != a && m(function () { t.removeChild(l) }, 50); for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload() } } var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = { t: d, s: c, e: f, a: i, x: j }; 1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () { k.call(this, r) }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l)) } function j(a, b, c, d, f) { return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this } function k() { var a = B; return a.loader = { load: j, i: 0 }, a } var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) { return "[object Array]" == o.call(a) }, x = [], y = {}, z = { timeout: function (a, b) { return b.length && (a.timeout = b[0]), a } }, A, B; B = function (a) { function b(a) { var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = { url: c, origUrl: c, prefixes: a }, e, f, g; for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g)); for (f = 0; f < b; f++) c = x[f](c); return c } function g(a, e, f, g, h) { var i = b(a), j = i.autoCallback; i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () { k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2 }))) } function h(a, b) { function c(a, c) { if (a) { if (e(a)) c || (j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() }), g(a, j, b, 0, h); else if (Object(a) === a) for (n in m = function () { var b = 0, c; for (c in a) a.hasOwnProperty(c) && b++; return b }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() } : j[n] = function (a) { return function () { var b = [].slice.call(arguments); a && a.apply(this, b), l() } }(k[n])), g(a[n], j, b, n, h)) } else !c && l() } var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n; c(h ? a.yep : a.nope, !!i), i && c(i) } var i, j, l = this.yepnope.loader; if (e(a)) g(a, 0, l, 0); else if (w(a)) for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l) }, B.addPrefix = function (a, b) { z[a] = b }, B.addFilter = function (a) { x.push(a) }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () { b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete" }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) { var k = b.createElement("script"), l, o, e = e || B.errorTimeout; k.src = a; for (o in d) k.setAttribute(o, d[o]); c = j ? h : c || f, k.onreadystatechange = k.onload = function () { !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null) }, m(function () { l || (l = 1, c(1)) }, e), i ? k.onload() : n.parentNode.insertBefore(k, n) }, a.yepnope.injectCss = function (a, c, d, e, g, i) { var e = b.createElement("link"), j, c = i ? h : c || f; e.href = a, e.rel = "stylesheet", e.type = "text/css"; for (j in d) e.setAttribute(j, d[j]); g || (n.parentNode.insertBefore(e, n), m(c, 0)) } }(this, document), Modernizr.load = function () { yepnope.apply(window, [].slice.call(arguments, 0)) };

// Debounce 1.0.0 by Jesse Fowler, Copyright 2014 Fiserv. All rights reserved.
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Slideshow 4.6.0 by Jesse Fowler, Copyright 2015 Fiserv. All rights reserved.
jQuery.fn.slideShow = function (options) {
    var settings = jQuery.extend({
        showDuration: 8000,
        transitionSpeed: 1000,
        container: this,
        tocActive: 'toc-active',
        tocTitle: 'h1, h2, h3',
        thumbOpacity: 1,
        hoverSelect: false,
        autoPlay: true,
        playBankControls: false,
        textProgress: false,
        textProgressDelineator: "&mdash;",
        textProgressNumberLength: 2,
        toc: true,
        tocText: false,
        tocNumericIndex: false,
        tocImg: false,
        tocWCAGText: 'headings',
        tocPause: true,
        randomSelect: true,
        hoverPause: false,
        debug: false,
        loadMobile: false,
        uiTriggerNext: '.slideshow-next',
        uiTriggerPrevious: '.slideshow-previous',
        uiTriggerPause: '.slideshow-pause',
        uiTriggerPlay: '.slideshow-play'
    }, options),
        slides = function (obj) {
            return obj.find('[class*="Subsection-Table"]');
        },
        currentIndexs = new Array(),
        intervals = new Array(),
        holds = new Array(),
        numberFormat = function (obj, number, width) {
            if (width > 0) {
                var len = Math.ceil(Math.log(slides(obj).length + 1) / Math.LN10);
                if (len > width) {
                    width = slides(obj).length.toString().length;
                    return new Array(+width + 1 - (number + '').length).join('0') + number;
                } else {
                    return new Array(+width + 1 - (number + '').length).join('0') + number;
                }
            } else {
                return number;
            }
        },
        slideShowCreate = function (obj, objIndex) {
            obj.addClass('slideshow');
            if (settings.toc === true) {
                obj.addClass('toc');
            }
            if (settings.tocText === true) {
                obj.addClass('toc-text');
            }
            if (settings.tocNumericIndex === true) {
                obj.addClass('toc-numeric-index');
            }
            if (settings.tocImg === true) {
                obj.addClass('toc-img');
            }
            currentIndexs[objIndex] = 0;
            holds[objIndex] = false;	
 
            if (obj.find('.slideshow-container-controls').length > 0) {
                obj.find('.slideshow-container-controls').remove();
            }

            var slideshowControlBar;
            if (obj.find('.slideshow-control-bar').length === 0) {
                slideshowControlBar = jQuery("<div/>", {
                    'class': 'slideshow-control-bar'
                });
                obj.append(slideshowControlBar);
            } else {
                slideshowControlBar = obj.find('.slideshow-control-bar');
            }

            var preview = jQuery("<div/>", {
                'class': 'slideshow-container-controls'
            });
            slideshowControlBar.append(preview);

            slides(obj).each(function (index) {

                if (jQuery(this).find('video').length > 0) {
                    console.log('Found a video');
                    jQuery(this).prepend(jQuery(this).find('video').eq(0));
                }

                let imgnum = index + 1,
                    tocAlt = "";
                if (settings.tocWCAGText === 'headings' && jQuery(this).find(settings.tocTitle).length > 0) {
                    jQuery(this).find(settings.tocTitle).first().each(function () {
                        if ( tocAlt === "" ) {
                            tocAlt = jQuery(this).text();
                        } else {
                            tocAlt = tocAlt + ' ' + jQuery(this).text();
                        }
                    });
                } else {
                    tocAlt = 'Go to slide ' + imgnum;
                }
                if (settings.toc === true) {
                    let tocDiv = jQuery("<div/>");
                    let tocPip = jQuery('<a href="#"></a>');
                    tocPip.attr('title', 'Go to slide ' + imgnum);
                    tocDiv.append(tocPip);
                    if (settings.tocNumericIndex === true) {
                        let spanNumericIndex = jQuery('<span class="numeric-index">' + imgnum + '</span>');
                        tocPip.append(spanNumericIndex);
                    }
                    if (settings.tocText === true) {
                        let spanTocText = jQuery('<span class="toc-text">' + tocAlt + '</span>');
                        tocPip.append(spanTocText);
                    }
                    if (settings.tocImg === true) {
                        let imgURL = '';
                        if (jQuery(this).get('src') !== 'undefined') {
                            imgURL = jQuery(this).get('src');
                        }
                        if (jQuery(this).css('background-image') !== 'undefined') {
                            imgURL = jQuery(this).css('background-image');
                            imgURL = imgURL.replace(/url\("/, '');
                            imgURL = imgURL.replace(/\"\)/, '');
                        }
                        let img = jQuery('<img src="' + imgURL + '" alt="' + tocAlt + '">');
                        img.addClass('toc-img');
                        tocPip.append(img);
                    }
                    preview.append(tocDiv);
                    tocDiv.on({
                        click: function (e) {
                            if (e) e.preventDefault();
                            stop(obj, objIndex);
                            start(obj, objIndex);
                            show(obj, objIndex, index);
                            if (settings.tocPause) {
                                stop(obj);
                            }
                        }/*, mouseenter: function() {
				            jQuery(this).fadeIn(settings.transitionSpeed);
				            if (settings.hoverSelect) {
					            stop(obj);
					            show(index);
				            }
			            }, mouseleave: function() {
				            if(!jQuery(this).hasClass(settings.tocActive)) jQuery(this).fadeTo(settings.transitionSpeed,settings.thumbOpacity);
				            if (settings.hoverSelect) {
					            start(obj);
				            }
			            } */
                    });
                }
            });

            if (slides(obj).length <= 1) {
                obj.addClass('no-controls-required');
            }

            // Previous Button
            var slideshowPrevious;
            if (obj.find(settings.uiTriggerPrevious).length === 0) {
                slideshowPrevious = jQuery('<button class="slideshow-previous"><i class="fa fa-backward"></i><span class="visuallyhidden">Previous Slide</span></button>');
                if (settings.playBankControls === true) {
                    slideshowControlBar.append(slideshowPrevious);
                }
            } else {
                slideshowPrevious = obj.find(settings.uiTriggerPrevious);
            }
            slideshowPrevious.on({
                click: function (e) {
                    if (e) e.preventDefault();
                    stop(obj, objIndex);
                    start(obj, objIndex);
                    if ((currentIndexs[objIndex] - 1) < 0) {
                        show(obj, objIndex, slides(obj).length - 1);
                    } else {
                        show(obj, objIndex, currentIndexs[objIndex] - 1);
                    }
                }
            });
            obj.on("swiperight", swiperightHandler);
            function swiperightHandler(event) {
                event.stopImmediatePropagation();
                stop(obj, objIndex);
                start(obj, objIndex);
                if ((currentIndexs[objIndex] - 1) < 0) {
                    show(obj, objIndex, slides(obj).length - 1);
                } else {
                    show(obj, objIndex, currentIndexs[objIndex] - 1);
                }
            }

            // Text Progress
            if (settings.textProgress === true) {
                var textProgressContainer = jQuery("<div/>", {
                    'class': 'text-progress-container'
                });
                var textProgressSlide = jQuery("<span/>", {
                    'class': 'text-progress-slide'
                });
                textProgressSlide.text(numberFormat(obj, 1, settings.textProgressNumberLength));
                textProgressContainer.append(textProgressSlide);
                var textProgressDelineator = jQuery("<span/>", {
                    'class': 'text-progress-delineator'
                });
                textProgressDelineator.html(settings.textProgressDelineator);
                textProgressContainer.append(textProgressDelineator);
                var textProgressSlideCount = jQuery("<span/>", {
                    'class': 'text-progress-slide-count'
                });
                textProgressSlideCount.text(numberFormat(obj, slides(obj).length, settings.textProgressNumberLength));
                textProgressContainer.append(textProgressSlideCount);
                slideshowControlBar.append(textProgressContainer);
            }

            // Play Button
            var slideshowPlay;
            if (obj.find(settings.uiTriggerPlay).length === 0) {
                slideshowPlay = jQuery('<button class="slideshow-play"><i class="fa fa-play"></i><span class="visuallyhidden">Play Slideshow</span></button>');
                if (settings.playBankControls === true) {
                    slideshowControlBar.append(slideshowPlay);
                }
            } else {
                slideshowPlay = obj.find(settings.uiTriggerPlay);
            }
            slideshowPlay.on({
                click: function (e) {
                    if (holds[objIndex] !== true) {
                        if (e) e.preventDefault();
                        start(obj, objIndex);
                        show(obj, objIndex);
                    }
                }
            });

            // Pause Button
            var slideshowPause;
            if (obj.find(settings.uiTriggerPause).length === 0) {
                slideshowPause = jQuery('<button class="slideshow-pause"><i class="fa fa-pause"></i><span class="visuallyhidden">Pause Slideshow</span></button>');
                if (settings.playBankControls === true) {
                    slideshowControlBar.append(slideshowPause);
                }
            } else {
                slideshowPause = obj.find(settings.uiTriggerPause);
            }
            slideshowPause.on({
                click: function (e) {
                    if (holds[objIndex] !== true) {
                        if (e) e.preventDefault();
                        stop(obj, objIndex);
                    }
                }
            });

            // Next Button
            var slideshowNext;
            if (obj.find(settings.uiTriggerNext).length === 0) {
                slideshowNext = jQuery('<button class="slideshow-next"><i class="fa fa-forward"></i><span class="visuallyhidden">Next Slide</span></button>');
                if (settings.playBankControls === true) {
                    slideshowControlBar.append(slideshowNext);
                }
            } else {
                slideshowNext = obj.find(settings.uiTriggerNext);
            }
            slideshowNext.on({
                click: function (e) {
                    if (holds[objIndex] !== true) {
                        if (e) e.preventDefault();
                        stop(obj, objIndex);
                        start(obj, objIndex);
                        show(obj, objIndex);
                    }
                }
            });
            obj.on("swipeleft", swipeleftHandler);
            function swipeleftHandler(event) {
                event.stopImmediatePropagation();
                stop(obj, objIndex);
                start(obj, objIndex);
                show(obj, objIndex);
            }

            /* control: start/stop on mouseover/mouseout */
            if (settings.hoverPause) {
                obj.on({
                    mouseenter: function () { stop(obj, objIndex); },
                    mouseleave: function () { start(obj, objIndex); }
                });
            }

            // Kicks off the slideshow.
            if (settings.randomSelect) {
                var randomSlideNumber = Math.floor(Math.random() * slides(obj).length);
                currentIndexs[objIndex] = randomSlideNumber;
            }
            show(obj, objIndex, currentIndexs[objIndex]);
            start(obj, objIndex);

            var windowWidth = jQuery(window).width();

            if (settings.loadMobile === false) {
                //Play only on desktop
                var onWinResizer = debounce(function () {
                    if (jQuery(window).width() !== windowWidth) {
                        onWinResize();
                        windowWidth = jQuery(window).width();
                    }
                }, 500);
                jQuery(window).on('resize', onWinResizer);
            }

            function onWinResize() {
                var windowSize = jQuery(window).width();
                // Set page width maximums and minimums
                pageWidth = parseFloat(windowSize);
                onWinResizeInitalized = true;
            }
            onWinResize();

            // Linking the TOC between multiple slideshows - only activates if more than one slide show instance exists.
            var enableLinkedTOCs = true,
                numberOfTOCs = jQuery('.slideshow-container-controls').length;
            if (enableLinkedTOCs && numberOfTOCs > 1) {
                //name of primary slideshow that will hold the main clickable toc
                jQuery('#slideshow-container').parent().find('.slideshow-container-controls div').each(function (index) {
                    jQuery(this).click(function () {
                        //name of element additional instance of slideshow called on to receive the click actions of the primary slideshow
                        jQuery('#slideshow-secondary-container').parent().find('.slideshow-container-controls div').eq(index).click();
                    });
                });
            }
        },
        show = function (obj, objIndex, to) {
            // Ending animation of the last slide.
            showSlides = obj.find('[class*="Subsection-Table"]');
            showSlides.removeClass('previous');
            showSlides.eq(currentIndexs[objIndex]).removeClass('active');
            showSlides.eq(currentIndexs[objIndex]).addClass('previous');
            if (!Modernizr.csstransforms) {
                showSlides.eq(currentIndexs[objIndex]).fadeOut(settings.transitionSpeed);
            }
            if (settings.toc === true) { obj.find('.slideshow-container-controls').children('div').eq(currentIndexs[objIndex]).removeClass(settings.tocActive); }
            if (settings.captionTables === true) {
                obj.find('.caption-container .caption').eq(currentIndexs[objIndex]).removeClass(settings.captionActive);
                // Caption Animation 
                if (!Modernizr.csstransforms) {
                    obj.find('.caption-container .caption').eq(currentIndexs[objIndex]).animate({
                        left: -580
                    }, (settings.transitionSpeed / 2), "linear", function () {
                        holds[objIndex] = false;
                    });
                }
            }

            // Beginning of the animation of the new slide.
            showSlides.eq(currentIndexs[objIndex] = (typeof to !== 'undefined' ? to : (currentIndexs[objIndex] < slides(obj).length - 1 ? currentIndexs[objIndex] + 1 : 0))).addClass('active');
            if (settings.debug) { console.log('Showing slide number: ' + (currentIndexs[objIndex] + 1)) }
            if (!Modernizr.csstransforms) {
                showSlides.eq(currentIndexs[objIndex]).fadeIn(settings.transitionSpeed);
            }

            // Class all of the elements in the slideshow with a unique order.
            for (i = 0; i < showSlides.length; i++) {
                showSlides.removeClass("item-" + i);
            }
            for (i = currentIndexs[objIndex]; i < showSlides.length; i++) {
                showSlides.eq(i).addClass("item-" + (i - currentIndexs[objIndex]));
            }
            for (i = 0; i < currentIndexs[objIndex]; i++) {
                showSlides.eq(i).addClass("item-" + (i + showSlides.length - currentIndexs[objIndex]));
            }

            if (settings.toc === true) { obj.find('.slideshow-container-controls').children('div').eq(currentIndexs[objIndex]).addClass(settings.tocActive); }
            if (settings.textProgress === true) {
                obj.find('.text-progress-slide').text(numberFormat(obj, currentIndexs[objIndex] + 1, settings.textProgressNumberLength));
            }
            if (settings.captionTables === true) {
                obj.find('.caption-container .caption').eq(currentIndexs[objIndex]).addClass(settings.captionActive);
                if (!Modernizr.csstransforms) {
                    holds[objIndex] = true;
                    obj.find('.caption-container .caption').eq(currentIndexs[objIndex]).animate({
                        left: 0
                    }, (settings.transitionSpeed / 2), "linear", function () {
                        holds[objIndex] = false;
                    });
                }
            }
        },
        start = function (obj, objIndex) {
            if (settings.autoPlay && (typeof intervals[objIndex] === 'undefined') || intervals[objIndex] === 'undefined') {
                intervals[objIndex] = self.setInterval(function () { show(obj, objIndex); }, settings.showDuration);
            }
            obj.removeClass('slideshow-stopped');
        },
        stop = function (obj, objIndex) {
            window.clearInterval(intervals[objIndex]);
            intervals[objIndex] = 'undefined';
            obj.addClass('slideshow-stopped');
        },
        init = function (obj) {
            for (var i = 0, n = obj.length; i < n; i++) {
                slideShowCreate(obj.eq(i), i);
            }
        };
    init(this);
    return this;
};

// Side Navigation Generator 5.1.0 by Jesse Fowler, Copyright 2014 Fiserv. All rights reserved.
//Anchor Link 1.0.0
// Back to top for inc_functions
function anchorLink(anchorName) {
    var url = window.location.toString();
    url = url.split("#")[0];
    document.location = url + '#' + anchorName;
}

var sideNavGeneratorInstance = 0;
(function (jQuery) {
    jQuery.fn.sideNavGenerator = function (options) {
        var settings = jQuery.extend({
            contentArea: jQuery('body'),
            excludedPageClass: 'no-sidenav',
            excludeFromSideNavClass: 'Exclude-From-Side-Nav',
            addToSideNavClassName: 'Side-Navigation',
            fullURLEnable: false,
            includeCurrentPageSiblings: false,
            debug: false,
            triggerOn: 'anchor', // anchor | caption
            toggleOnScroll: true,
            toggleOnScrollClass: 'active',
            lastActivatedTriggerClass: 'last-active',
            sideNavAsToolbar: false
        }, options);

        var $this = jQuery(this),
            $body = jQuery("body");

        if (settings.debug) { console.log($this) };

        sideNavGeneratorInstance++;

        if (settings.contentArea) {
            // Grabs additional content to the sideNav using table class="addtosidenav"
            var additionalContent = settings.contentArea.find('.' + settings.addToSideNavClassName + '>tbody>tr>td');
            var tableContent = '';
            for (i = 0; i < additionalContent.length; i++) {
                tableContent = tableContent + additionalContent[i].innerHTML;
                additionalContent[i].parentNode.removeChild(additionalContent[i]);
            }

            if (($this.length > 1 && !$body.hasClass(settings.excludedPageClass)) || (tableContent.length > 1 && !$body.hasClass(settings.excludedPageClass)) || (settings.includeCurrentPageSiblings && !$body.hasClass(settings.excludedPageClass))) {
                $body.addClass('sideNavPresent');
                var sideContainer = jQuery('<div />');
                sideContainer.attr('class', 'side-nav');
                if (settings.sideNavAsToolbar) {
                    sideContainer.addClass('side-nav-type-toolbar');
                }

                if ($this.length > 1 || settings.includeCurrentPageSiblings) {
                    var sideContainerList;
                    var founda = false;
                    if (settings.includeCurrentPageSiblings) {
                        var generateSiblingList = function () {
                            var locationStr = location.toString();
                            if (locationStr.indexOf("#") > 0) {
                                hash = locationStr.substring(0, locationStr.indexOf("#"));
                            } else {
                                hash = locationStr;
                            }
                            if (location.host === 'whstage1.secureinternetbank.com' || location.host == 'whstage2.secureinternetbank.com') {
                                var locationHost = jQuery(location).prop('pathname').split('/')[1];
                            } else {
                                var locationHost = '';
                            }
                            var siblingSideNavUl = jQuery('<ul />');
                            jQuery('ul a').each(function () {
                                currentLink = jQuery(this);
                                if (hash === (location.protocol + '//' + location.host + '/' + locationHost + '/' + currentLink.attr('href')) || hash === (location.protocol + '//' + location.host + '/' + currentLink.attr('href'))) {
                                    if (!founda) {
                                        if (!$body.hasClass('category')) {
                                            founda = true;
                                            siblingSideNavUl.addClass('w-siblings');
                                            var currentLinkParent = currentLink.parent('li').parent('ul');
                                            currentLink.parent('li').addClass('current');
                                            var siblings = currentLinkParent.find('li');
                                            if (siblings.length > 0) {
                                                siblings.each(function () {
                                                    if (jQuery(this).css('display') !== 'none') {
                                                        var sibling = jQuery(this).clone();
                                                        sibling.find('ul').remove();
                                                        siblingSideNavUl.append(sibling);
                                                    }
                                                });
                                            }
                                        }
                                    }
                                }
                            });
                            if (settings.debug) { console.log('siblingSideNavUl returned'); };
                            return siblingSideNavUl;
                        };
                        sideContainerList = generateSiblingList();
                    } else {
                        sideContainerList = jQuery('<ul />');
                    }
                    if (settings.debug) { console.log(sideContainerList); };
                    if ($this.length > 0) {
                        var anchorLinksUl = jQuery('<ul />');
                        sideContainerList.find('.current').append(anchorLinksUl);
                    }

                    $this.each(function (index) {
                        if (jQuery(this).hasClass(settings.excludeFromSideNavClass) || jQuery(this).find(':header').first().hasClass(settings.excludeFromSideNavClass)) {
                            return true;
                        }
                        var sideContainerListItem = jQuery('<li />');
                        if (settings.includeCurrentPageSiblings && sideContainerList.find('.current').length > 0) {
                            anchorLinksUl.append(sideContainerListItem);
                        } else {
                            sideContainerList.append(sideContainerListItem);
                        }
                        var anchorLinkURL = '';
                        if (settings.fullURLEnable) {
                            anchorLinkURL = location.protocol + '//' + location.host + location.pathname + '#sideNavGeneratorAnchor' + sideNavGeneratorInstance + '-' + index;
                        } else {
                            anchorLinkURL = '#sideNavGeneratorAnchor' + sideNavGeneratorInstance + '-' + index;
                        }

                        var sideContainerListItemLink = jQuery('<a />');
                        if (window.location.toString().match(/\bSiteContent\b/)) {
                            sideContainerListItemLink.attr('href', 'javascript:anchorLink("' + anchorLinkURL + '")');
                        } else {
                            sideContainerListItemLink.attr('href', anchorLinkURL);
                        }
                        var sideContainerListItemLinkSpan = jQuery('<span />'); 
                        if (jQuery(this).is(':header')) {
                            sideContainerListItemLinkSpan.html(jQuery(this).text());
                        } else {
                            sideContainerListItemLinkSpan.html(jQuery(this).find(':header').first().text());
                        }
                        sideContainerListItemLink.append(sideContainerListItemLinkSpan);
                        sideContainerListItem.append(sideContainerListItemLink);

                        var tagsAnchor = jQuery('<a />');
                        tagsAnchor.attr('id', 'sideNavGeneratorAnchor' + sideNavGeneratorInstance + '-' + index);
                        tagsAnchor.attr('class', 'anchor');
                        tagsAnchor.insertBefore(jQuery(this));

                        if (settings.toggleOnScroll) {
                            var triggerNode;
                            if (settings.triggerOn === 'anchor') {
                                triggerNode = tagsAnchor.get(0);
                            }
                            if (settings.triggerOn === 'caption') {
                                triggerNode = jQuery(this).find('caption').get(0);
                            }
                            const lastToScrollTrigger = new ScrollTrigger({
                                "nodeList": [triggerNode],
                                "activeClass": settings.lastActivatedTriggerClass,
                                "targetNodeList": [sideContainerListItemLink.parent().get(0)],
                                "rootMargin": "0% 0%"
                            });
                        }
                    });
                    sideContainer.append(sideContainerList);
                }
                settings.contentArea.append(sideContainer);

                // Appends additional content
                if (tableContent.length > 1) {
                    var additionalContentContainer = jQuery('<div />');
                    additionalContentContainer.addClass('additionalContentContainer');
                    additionalContentContainer.html(tableContent);
                    sideContainer.append(additionalContentContainer);
                }
            }
        }
        return $this;
    }
}(jQuery));

// Text Resizer 5.0.1 by Jesse Fowler, Copyright 2018 Fiserv. All rights reserved.
(function (jQuery) {
    jQuery.fn.textResizer = function (options) {
        var settings = jQuery.extend({
            htmlClass: 'text-resizer-enabled',
            sizeNames: ['font-size-default', 'font-size-150', 'font-size-200'],
            defaultSizeName: 'font-size-150',
            increaseSizeSelector: jQuery('.increase-font-size'),
            decreaseSizeSelector: jQuery('.decrease-font-size'),
            resetSizeSelector: jQuery('.reset-font-size'),
            localStorageSizeName: 'fiserv-font-size-name'
        }, options),
            getSizeIndex = function (obj) {
                for (var i = 0, n = settings.sizeNames.length; i < n; i++) {
                    if (obj.hasClass(settings.sizeNames[i])) {
                        return i;
                        break;
                    }
                }
                return false;
            },
            increaseSize = function (obj) {
                var currentSizeIndex = getSizeIndex(obj);
                obj.removeClass(settings.sizeNames[currentSizeIndex]);
                if (currentSizeIndex >= (settings.sizeNames.length - 1)) {
                    var nextSizeName = settings.sizeNames[(settings.sizeNames.length - 1)];
                } else {
                    var nextSizeName = settings.sizeNames[currentSizeIndex + 1];
                }
                obj.addClass(nextSizeName);
                window.localStorage.setItem(settings.localStorageSizeName, nextSizeName);
            },
            decreaseSize = function (obj) {
                var currentSizeIndex = getSizeIndex(obj);
                obj.removeClass(settings.sizeNames[currentSizeIndex]);
                if (currentSizeIndex <= 0) {
                    var nextSizeName = settings.sizeNames[0];
                } else {
                    var nextSizeName = settings.sizeNames[currentSizeIndex - 1];
                }
                obj.addClass(nextSizeName);
                window.localStorage.setItem(settings.localStorageSizeName, nextSizeName);
            },
            resetSize = function (obj) {
                var currentSizeIndex = getSizeIndex(obj);
                obj.removeClass(settings.sizeNames[currentSizeIndex]);
                obj.addClass(settings.defaultSizeName);
                window.localStorage.setItem(settings.localStorageSizeName, settings.defaultSizeName);
            },
            init = function (obj) {
                var priorSizeName = window.localStorage.getItem(settings.localStorageSizeName);
                if (priorSizeName) {
                    obj.removeClass(settings.sizeNames[getSizeIndex(obj)]);
                    obj.addClass(priorSizeName);
                } else {
                    obj.addClass(settings.defaultSizeName);
                    window.localStorage.setItem(settings.localStorageSizeName, settings.defaultSizeName);
                }
                if (obj.length > 0) {
                    jQuery('html').addClass(settings.htmlClass);
                }
                for (var i = 0, n = obj.length; i < n; i++) {
                    //Add events to the increaseSizeSelector
                    settings.increaseSizeSelector.on('click', function () {
                        increaseSize(obj);
                        return false;
                    });

                    //Add events to the decreaseSizeSelector
                    settings.decreaseSizeSelector.on('click', function () {
                        decreaseSize(obj);
                        return false;
                    });

                    //Add events to the resetSizeSelector
                    settings.resetSizeSelector.on('click', function () {
                        resetSize(obj);
                        return false;
                    });
                }
            };
        init(this);
        return this;
    };
}(jQuery));

// Online Banking 1.23.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved.
(function () {
    jQuery.fn.onlineBanking = function (options) {
        var settings = jQuery.extend(true, {
            enforceMethodPost: true,
            defaultAccountType: "personal",
            classObject: jQuery(this),
            focusClass: "focus",
            loadingClass: "loading",
            select: '[name*=loginTo]',
            routingNumber: "199999996",
            retail: {
                server: "idemo.secureinternetbank.com",
                profileNumber: null,
                version: "5.4-SecureNow",
                class: "personal",
                active: false,
                custom: function () {
                    return console.log(_obj.onlineBanking.retail.version + " has been selected for Retail Online. Additional code within the custom parameter may be needed.");
                },
                args: {
                    formId: "pbi-form",
                    passwordId: "pbi-password",
                    usernameId: "pbi-username"
                }
            },
            business: {
                server: "idemo.secureinternetbank.com",
                profileNumber: null,
                version: "6.0",
                class: "business",
                active: false,
                custom: function () {
                    return console.log(_obj.onlineBanking.retail.version + " has been selected for Business Online. Additional code within the custom parameter may be needed.");
                },
                args: {
                    formId: "ebc-form",
                    passwordId: "ebc-password",
                    usernameId: "ebc-username"
                }
            },
            other: {
                class: "other",
                active: false,
                custom: function () {
                    return console.log("Other has been activated for Online Banking. Additional code within the custom parameter may be needed.");
                }
            },
            validateForm: {
                submitObject: jQuery('[type=submit]'),
                class: {
                    valid: "valid",
                    invalid: "invalid",
                    required: "required",
                    form: "validate-form"
                },
                focus: {
                    active: true,
                    scroll: true,
                    position: 0.3
                },
                listeners: "click blur input change",
                focusPosition: "30%",
                defaultErrorMessage: "Please fill out this field.",
                validateDelay: 0,
                success: function () {
                    return true;
                },
                error: function () {
                    return false;
                }
            },
            success: function () { },
            error: function (obj, msg, form) {
                const spinnerDuration = 750;
                form.addClass(obj.onlineBanking.errorFallback.class);
                const timer = setTimeout(function () {
                    obj.removeClass(obj.onlineBanking.loadingClass);
                }, spinnerDuration);
                const timer2 = setTimeout(function () {
                    form.removeClass(obj.onlineBanking.errorFallback.messageClass);
                }, obj.onlineBanking.errorFallback.messageDuration + spinnerDuration);
                return;
            },
            errorFallback: {
                duration: 2.592e+9, // Milliseconds
                class: "error",
                messageClass: "message",
                messageDuration: 3000 // Milliseconds
            }
        }, options),
            _obj = this,
            currentDate = new Date().getTime(),
            onlineBankingFallback = localStorage.onlineBankingFallback ? JSON.parse(localStorage.onlineBankingFallback) : {},
            errorFallback = function (form) {
                const expiration = new Date(currentDate + _obj.onlineBanking.errorFallback.duration).getTime();
                onlineBankingFallback[form] = expiration;
                localStorage.onlineBankingFallback = JSON.stringify(onlineBankingFallback);
            },
            googleAnalyticsCustomEvents = function (form) {
                if(typeof gtag === 'function' ){
                    gtag('event', 'online_banking_' + form,{
                        'event_category': 'online_banking'
                    });
                }
            },
            ob = {
                retail: {
                    "default": function () {
                        login.find("form." + _obj.onlineBanking.retail.class).on('submit', function () {
                            if (_obj.onlineBanking.profileNumber) {
                                this.action = "https://" + _obj.onlineBanking.retail.server + "/pbi_pbi1151/login/remote/" + _obj.onlineBanking.routingNumber + "/" + _obj.onlineBanking.profileNumber;
                            } else {
                                this.action = "https://" + _obj.onlineBanking.retail.server + "/pbi_pbi1151/login/remote/" + _obj.onlineBanking.routingNumber;
                            }
                            googleAnalyticsCustomEvents('retail');
                        });
                        return true;
                    },
                    "5.4-SecureNow": function () {
                        const formID = _obj.onlineBanking.retail.args.formId;
                        const form = jQuery("#" + formID);
                        const errorMessage = "RO 5.4-SecureNow Errored.";
                        const fallbackFile = "https://" + _obj.onlineBanking.retail.server + "/PBI_PBI1151/js/remoteLoginSecure";
                        if (onlineBankingFallback[formID] && onlineBankingFallback[formID] > currentDate) return _obj.onlineBanking.error(_obj, errorMessage, form);
                        jQuery.ajax({
                            url: fallbackFile,
                            dataType: "script",
                            success: function (result) {
                                const submitCallback = function () {
                                    googleAnalyticsCustomEvents('retail');
                                    console.log("RO 5.4-SecureNow Submitted");
                                }
                                const errorCallback = function () {
                                    _obj.onlineBanking.error(_obj, errorMessage, form);
                                    const timer = setTimeout(function () {
                                        form.addClass(_obj.onlineBanking.errorFallback.messageClass);
                                    }, 750);
                                    errorFallback(formID);
                                }
                                const args = {
                                    errorCallback: errorCallback,
                                    submitCallback: submitCallback,
                                    applicationPath: "https://" + _obj.onlineBanking.retail.server + "/PBI_PBI1151",
                                    formId: _obj.onlineBanking.retail.args.formId,
                                    passwordId: _obj.onlineBanking.retail.args.passwordId,
                                    routingTransit: _obj.onlineBanking.routingNumber,
                                    profileNumber: _obj.onlineBanking.retail.profileNumber,
                                    usernameId: _obj.onlineBanking.retail.args.usernameId
                                };

                                new PBI.RemoteLogin(args);
                            }
                        });
                        return true;
                    },
                    "5.4-SecureNow-Load": function () {
                        const formID = _obj.onlineBanking.retail.args.formId;
                        const form = jQuery("#" + formID);
                        const errorMessage = "RO 5.4-SecureNow Errored.";
                        const loadFile = "https://" + _obj.onlineBanking.retail.server + "/PBI_PBI1151/js/remoteLoginLoad";
                        if (onlineBankingFallback[formID] && onlineBankingFallback[formID] > currentDate) return _obj.onlineBanking.error(_obj, errorMessage, form);
                        jQuery.ajax({
                            url: loadFile,
                            dataType: "script",
                            success: function (result) {
                                const submitCallback = function () {
                                    googleAnalyticsCustomEvents('retail');
                                    console.log("RO 5.4-SecureNow Submitted");
                                }
                                const errorCallback = function () {
                                    _obj.onlineBanking.error(_obj, errorMessage, form);
                                    const timer = setTimeout(function () {
                                        form.addClass(_obj.onlineBanking.errorFallback.messageClass);
                                    }, 750);
                                    errorFallback(formID);
                                }
                                const args = {
                                    errorCallback: errorCallback,
                                    submitCallback: submitCallback,
                                    applicationPath: "https://" + _obj.onlineBanking.retail.server + "/PBI_PBI1151",
                                    formId: _obj.onlineBanking.retail.args.formId,
                                    passwordId: _obj.onlineBanking.retail.args.passwordId,
                                    routingTransit: _obj.onlineBanking.routingNumber,
                                    profileNumber: _obj.onlineBanking.retail.profileNumber,
                                    usernameId: _obj.onlineBanking.retail.args.usernameId
                                };

                                new PBI.RemoteLogin(args);
                            }
                        });
                        return true;
                    },
                    "Cloud": function () {
                        const formID = _obj.onlineBanking.retail.args.formId;
                        const form = jQuery("#" + formID);
                        const errorMessage = "RO 5.4-SecureNow Errored.";
                        const fallbackFile = "https://retailonline.fiservapps.com/js/remoteLogin.js";
                        if (onlineBankingFallback[formID] && onlineBankingFallback[formID] > currentDate) return _obj.onlineBanking.error(_obj, errorMessage, form);

                        jQuery.ajax({
                            url: fallbackFile,
                            dataType: "script",
                            success: function (result) {
                                const submitCallback = function () {
                                    googleAnalyticsCustomEvents('retail');
                                    console.log("RO Cloud Submitted");
                                }
                                const errorCallback = function () {
                                    _obj.onlineBanking.error(_obj, errorMessage, form);
                                    const timer = setTimeout(function () {
                                        form.addClass(_obj.onlineBanking.errorFallback.messageClass);
                                    }, 750);
                                    errorFallback(formID);
                                }
                                const args = {
                                    errorCallback: errorCallback,
                                    submitCallback: submitCallback,
                                    applicationPath: "https://retailonline.fiservapps.com/",
                                    formId: _obj.onlineBanking.retail.args.formId,
                                    passwordId: _obj.onlineBanking.retail.args.passwordId,
                                    routingTransit: _obj.onlineBanking.routingNumber,
                                    profileNumber: _obj.onlineBanking.retail.profileNumber,
                                    usernameId: _obj.onlineBanking.retail.args.usernameId
                                };

                                new PBI.RemoteLogin(args);
                            }
                        });
                        return true;
                    },
                    "Cloud-Load": function () {
                        const formID = _obj.onlineBanking.retail.args.formId;
                        const form = jQuery("#" + formID);
                        const errorMessage = "RO 5.4-SecureNow Errored.";
                        const loadFile = "https://retailonline.fiservapps.com/js/remoteLoginLoad.js";
                        if (onlineBankingFallback[formID] && onlineBankingFallback[formID] > currentDate) return _obj.onlineBanking.error(_obj, errorMessage, form);

                        jQuery.ajax({
                            url: loadFile,
                            dataType: "script",
                            success: function (result) {
                                const submitCallback = function () {
                                    googleAnalyticsCustomEvents('retail');
                                    console.log("RO Cloud Submitted");
                                }
                                const errorCallback = function () {
                                    _obj.onlineBanking.error(_obj, errorMessage, form);
                                    const timer = setTimeout(function () {
                                        form.addClass(_obj.onlineBanking.errorFallback.messageClass);
                                    }, 750);
                                    errorFallback(formID);
                                }
                                const args = {
                                    errorCallback: errorCallback,
                                    submitCallback: submitCallback,
                                    applicationPath: "https://retailonline.fiservapps.com/",
                                    formId: _obj.onlineBanking.retail.args.formId,
                                    passwordId: _obj.onlineBanking.retail.args.passwordId,
                                    routingTransit: _obj.onlineBanking.routingNumber,
                                    profileNumber: _obj.onlineBanking.retail.profileNumber,
                                    usernameId: _obj.onlineBanking.retail.args.usernameId
                                };

                                new PBI.RemoteLogin(args);
                            }
                        });
                        return true;
                    },
                    "custom": function () {
                        return _obj.onlineBanking.retail.custom();
                    }
                },
                business: {
                    "default": function () {
                        login.find("form." + _obj.onlineBanking.business.class).on('submit', function () {
                            var form = jQuery(this),
                                AccessID = form.find('[name=AccessID]').get(0),
                                nmUID = form.find('[name=nmUID]').get(0),
                                nmRTN = form.find('[name=nmRTN]').get(0);
                            if (typeof nmUID !== "undefined" && typeof nmRTN !== "undefined") {
                                nmUID.value = AccessID.value;
                                nmRTN.value = _obj.onlineBanking.routingNumber;
                                form.get(0).action = "https://" + _obj.onlineBanking.business.server + "/ebc_ebc1961/ebc1961.ashx?WCI=Process&WCE=RemoteLogon&IRL=T&MFA=2&RT=" + _obj.onlineBanking.routingNumber;
                            } else {
                                console.log("nmUID or nmRTN does not exist.");
                                return false;
                            }
                            googleAnalyticsCustomEvents('business');
                        });
                        return true;
                    },
                    "6.0": function () {
                        const formID = _obj.onlineBanking.business.args.formId;
                        const form = jQuery("#" + formID);
                        const errorMessage = "BO 6.0 Errored.";
                        const loadFile = "https://" + _obj.onlineBanking.business.server + "/EBC_EBC1151/js/remoteLoginLoad.js";
                        const fallbackFile = "https://" + _obj.onlineBanking.business.server + "/EBC_EBC1151/js/RemoteLogon";
                        if (onlineBankingFallback[formID] && onlineBankingFallback[formID] > currentDate) return _obj.onlineBanking.error(_obj, errorMessage, form);
                        jQuery.ajax({
                            url: fallbackFile,
                            dataType: "script",
                            success: function () {
                                const submitCallback = function () {
                                    googleAnalyticsCustomEvents('business');
                                    console.log("BO 6.0 Submitted");
                                }
                                const errorCallback = function () {
                                    _obj.onlineBanking.error(_obj, errorMessage, form);
                                    form.addClass(_obj.onlineBanking.errorFallback.messageClass);
                                    errorFallback(formID);
                                }
                                const args = {
                                    errorCallback: errorCallback,
                                    submitCallback: submitCallback,
                                    applicationPath: "https://" + _obj.onlineBanking.business.server + "/EBC_EBC1151",
                                    formId: _obj.onlineBanking.business.args.formId,
                                    passwordId: _obj.onlineBanking.business.args.passwordId,
                                    routingTransit: _obj.onlineBanking.routingNumber,
                                    profileNumber: _obj.onlineBanking.business.profileNumber,
                                    usernameId: _obj.onlineBanking.business.args.usernameId
                                };
                                new EBC.RemoteLogin(args);
                            }
                        });
                        return true;
                    },
                    "6.0-Load": function () {
                        const formID = _obj.onlineBanking.business.args.formId;
                        const form = jQuery("#" + formID);
                        const errorMessage = "BO 6.0 Errored.";
                        const loadFile = "https://" + _obj.onlineBanking.business.server + "/EBC_EBC1151/js/remoteLoginLoad";
                        if (onlineBankingFallback[formID] && onlineBankingFallback[formID] > currentDate) return _obj.onlineBanking.error(_obj, errorMessage, form);
                        jQuery.ajax({
                            url: loadFile,
                            dataType: "script",
                            success: function () {
                                const submitCallback = function () {
                                    googleAnalyticsCustomEvents('business');
                                    console.log("BO 6.0 Submitted");
                                }
                                const errorCallback = function () {
                                    _obj.onlineBanking.error(_obj, errorMessage, form);
                                    form.addClass(_obj.onlineBanking.errorFallback.messageClass);
                                    errorFallback(formID);
                                }
                                const args = {
                                    errorCallback: errorCallback,
                                    submitCallback: submitCallback,
                                    applicationPath: "https://" + _obj.onlineBanking.business.server + "/EBC_EBC1151",
                                    formId: _obj.onlineBanking.business.args.formId,
                                    passwordId: _obj.onlineBanking.business.args.passwordId,
                                    routingTransit: _obj.onlineBanking.routingNumber,
                                    profileNumber: _obj.onlineBanking.business.profileNumber,
                                    usernameId: _obj.onlineBanking.business.args.usernameId
                                };
                                new EBC.RemoteLogin(args);
                            }
                        });
                        return true;
                    },
                    "custom": function () {
                        return _obj.onlineBanking.business.custom();
                    }
                }
            },
            getSelectValue = function (select) {
                const type = selectType(select);
                switch (type) {
                    case "radio":
                        for (i = 0; i < select.length; i++) {
                            if (select.eq(i).get(0).checked) {
                                return select.eq(i).get(0).value;
                            }
                        }
                        break;
                    case "select":
                        if (select.val()) {
                            return select.val();
                        }
                        return select.find('option:not(:disabled)').eq(0).val();
                        break;
                }
                return null;
            },
            removeSelectClasses = function (select) {
                const type = selectType(select);
                const thisSelect = select[0];
                let valuers;
                switch (type) {
                    case "select":
                        valuers = thisSelect.options;
                        break;
                    case "radio":
                        valuers = document.querySelectorAll("[name=" + thisSelect.name + "]");
                        break;
                }
                for (let i = 0; i < valuers.length; i++) {
                    const thisValuer = valuers[i];
                    if (!thisValuer.value) continue;
                    _obj.onlineBanking.classObject.get(0).classList.remove(thisValuer.value);
                }
            },
            OnSelectionChange = function (login, select) {
                if (!select.length) return;
                const selectValue = getSelectValue(select);
                removeSelectClasses(select);
                _obj.onlineBanking.classObject.get(0).classList.add(selectValue);
                login.find('form input, form select, form textarea, form button').each(function () {
                    if (!this.closest('form.' + selectValue)) this.disabled = true;
                });
                login.find('.' + selectValue).each(function () {
                    jQuery(this).find('input, select, textarea, button').each(function () {
                        if (this.disabled) this.disabled = false;
                    });
                });
                return true;
            },
            selectType = function (select) {
                if (select.length > 0) {
                    if (select.get(0).nodeName == "INPUT" && select.get(0).type == "radio") {
                        return "radio";
                    } else if (select.get(0).nodeName == "SELECT") {
                        return "select";
                    }
                }
                return null;
            },
            setDefault = function (select) {
                if (_obj.onlineBanking.defaultAccountType) {
                    if (selectType(select) == "radio") {
                        login.find('[value=' + _obj.onlineBanking.defaultAccountType + ']').get(0).checked = true;
                        login.find('[value=' + _obj.onlineBanking.defaultAccountType + ']').change();
                    } else if (selectType(select) == "select") {
                        login.find('[value=' + _obj.onlineBanking.defaultAccountType + ']').siblings().removeAttr('selected');
                        login.find('[value=' + _obj.onlineBanking.defaultAccountType + ']').attr('selected', 'true');
                        select.eq(0).change();
                    }
                }
            },
            inputFocus = function (obj) {
                var thisClass = _obj.onlineBanking.focusClass + "-" + obj.get(0).name,
                    debounce;
                _obj.onlineBanking.classObject.addClass(thisClass);
                obj.parent().addClass(_obj.onlineBanking.focusClass);
                obj.on('blur', function () {
                    clearTimeout(debounce);
                    debounce = setTimeout(function () {
                        _obj.onlineBanking.classObject.removeClass(thisClass);
                        obj.parent().removeClass(_obj.onlineBanking.focusClass);
                    }, 100);
                });
                return obj;
            },
            login,
            init = function (obj) {
                for (var i = 0, n = obj.length; i < n; i++) {
                    login = obj.eq(i);
                    if (settings.enforceMethodPost) {
                        let forms = login.get(0).querySelectorAll('form');
                        forms.forEach(form => {
                            if (!form.method || form.method.toLowerCase() !== 'post') {
                                form.method = 'post';
                                console.warn("The following form does not have the method of 'post'", form);
                            }
                        });
                    }
                    var select = login.find(_obj.onlineBanking.select);
                    select.on('change', function () {
                        OnSelectionChange(login, jQuery(this));
                    });
                    login.find('input, select, textarea').on('focus', function () {
                        return inputFocus(jQuery(this));
                    });
                    login.find('[type=submit]').on('click', function () {
                        OnSelectionChange(login, select);
                    });
                    if (select.length > 0) {
                        setDefault(select);
                    }

                    for (var key in ob) {
                        if (_obj.onlineBanking.hasOwnProperty(key)) {
                            if (_obj.onlineBanking[key].active) {
                                if (typeof ob[key][_obj.onlineBanking[key].version] === "function") {
                                    ob[key][_obj.onlineBanking[key].version]();
                                } else {
                                    ob[key]["default"]();
                                }
                            }
                        }
                    }

                    if (typeof _obj.onlineBanking.other.custom === "function" && _obj.onlineBanking.other.active) {
                        _obj.onlineBanking.other.custom();
                    }
                    if (typeof jQuery.fn.validateForm == "function" && _obj.onlineBanking.validateForm) {
                        const validateSettings = _obj.onlineBanking.validateForm;
                        validateSettings.success = function () {
                            _obj.addClass(_obj.onlineBanking.loadingClass);
                            jQuery(window).on('unload pagehide', function (e) {
                                _obj.removeClass(_obj.onlineBanking.loadingClass);
                            });
                        }
                        _obj.validateForm(validateSettings);
                    }
                    _obj.removeClass(_obj.onlineBanking.loadingClass);
                    _obj.onlineBanking.success();
                }

                jQuery('html').addClass('fiserv-online-banking');
            };
        _obj.onlineBanking = settings;
        init(this);
        return this;
    }
}(jQuery));

// Field History 2.0.1 by JP Larson, Copyright 2018 Fiserv. All rights reserved.
(function () {
    jQuery.fn.fieldHistory = function (options) {
        var settings = jQuery.extend({
            form: jQuery(this).closest('form'), // This is the form used to detect submission, if submit is used as a savetrigger.
            storageItem: "saved", // This is prepended to the name of the field and used as the local storage key.
            saveTrigger: "submit" // The event in which triggers the value being saved.
        }, options),
            storageItem = function (thisObj) {
                return thisObj.get(0).name ? settings.storageItem + "-" + thisObj.get(0).name : settings.storageItem + "-" + thisObj.get(0).id;
            },
            preference = function (thisObj) {
                return localStorage.getItem(storageItem(thisObj));
            },
            type = function (thisObj) {
                return thisObj.get(0).type;
            },
            checkThis = function (thisObj) {
                if (thisObj.val() == preference(thisObj)) {
                    thisObj.trigger('change').trigger('click');
                    thisObj.get(0).checked = true;
                    return true;
                } else {
                    thisObj.get(0).checked = false;
                    return false;
                }
            },
            savePreference = function (thisObj) {
                localStorage.setItem(storageItem(thisObj), thisObj.val());
            },
            deletePreference = function (thisObj) {
                localStorage.removeItem(storageItem(thisObj));
            },
            setInput = function (thisObj) {
                switch (type(thisObj)) {
                    case "radio":
                        checkThis(thisObj);
                        break;
                    case "checkbox":
                        checkThis(thisObj);
                        break;
                    default:
                        thisObj.val(preference(thisObj));
                        thisObj.trigger('change').trigger('click');
                }
            },
            saveIterate = function (thisObj) {
                if (thisObj.closest('form') && thisObj.closest('form').find('[type=password]').length <= 0) {
                    console.log('save');
                    switch (type(thisObj)) {
                        case "radio":
                            if (thisObj.is(':checked')) {
                                savePreference(thisObj);
                            }
                            break;
                        case "checkbox":
                            if (thisObj.is(':checked')) {
                                savePreference(thisObj);
                            } else {
                                deletePreference(thisObj);
                            }
                            break;
                        default:
                            if (thisObj.get(0).validity.valid) {
                                savePreference(thisObj);
                            } else {
                                deletePreference(thisObj);
                            }
                    }
                }
                return true;
            },
            init = function (obj) {
                for (var i = 0, n = obj.length; i < n; i++) {
                    var thisObj = obj.eq(i);
                    if (preference(thisObj)) {
                        setInput(thisObj);
                    }
                }
                switch (settings.saveTrigger) {
                    case "submit":
                        settings.form.on('submit', function () {
                            for (var i = 0, n = obj.length; i < n; i++) {
                                saveIterate(obj.eq(i));
                            }
                        });
                        break;
                    default:
                        obj.on(settings.saveTrigger, function () {
                            return saveIterate(jQuery(this));
                        });
                }
                jQuery('html').addClass('fiserv-field-history');
            };
        init(this);
        return this;
    }
}(jQuery));

// Smooth Scroll 4.0.1 by JP Larson, Copyright 2018 Fiserv. All rights reserved.
(function (jQuery) {
    jQuery.fn.smoothScroll = function (options) {
        var settings = jQuery.extend(true, {
            event: "click", // This is the event used on the object to trigger the smooth scroll.
            animation: {
                obj: jQuery('html, body'), // The object that is scrolled/animated.
                duration: 850, // The duration of the scroll animation.
                easing: "swing", // The scroll animation easing.
                class: "scrolling", // The class added while scrolling
                delay: 0 // They delay between adding the class and starting the animation.
            },
            initialHash: "",
            updateHash: true, // Enables or disables the hash change within the URL.
            success: function () { }, // The callback function once scrolling is complete.
            fixResize: false // Scroll back to the anchor on resize.
        }, options),
            _obj = this,
            isCurrentPage = function (obj) {
                var replaceRegex = new RegExp(/(^\/)|(default\.aspx)/gi),
                    locationSansHash = location.href.split('#')[0],
                    hrefSansHash = obj.get(0).href.split('#')[0];
                if (locationSansHash.replace(replaceRegex, '').toLowerCase() == hrefSansHash.replace(replaceRegex, '').toLowerCase()) {
                    return true;
                }
                return false;
            },
            animate = function (theHash, scrollParent, updateHash, delay) {
                var target = jQuery(theHash).length ? jQuery(theHash) : jQuery('[name=' + theHash.slice(1) + ']');
                if (target.length) {
                    scrollParent.addClass(_obj.smoothScroll.animation.class).attr('data-scrollTarget', theHash);
                    var scrollParentTop = target.offset().top - scrollParent.offset().top + scrollParent.scrollTop(),
                        scrollParentLeft = target.offset().left - scrollParent.offset().left + scrollParent.scrollLeft(),
                        targetMarginTop = parseInt(target.css('margin-top')),
                        targetMarginLeft = parseInt(target.css('margin-left')),
                        scrollTop = scrollParent.get(0) == jQuery('html').get(0) ? target.offset().top - targetMarginTop : scrollParentTop - targetMarginTop,
                        scrollLeft = scrollParent.get(0) == jQuery('html').get(0) ? target.offset().left - targetMarginLeft : scrollParentLeft - targetMarginLeft,
                        animationParam = {
                            scrollTop: scrollTop,
                            scrollLeft: scrollLeft
                        },
                        scrollStop = scrollParent.on('mousewheel touchmove', function () {
                            theAnimation.stop();
                            return true;
                        }),
                        options = {
                            duration: _obj.smoothScroll.animation.duration,
                            easing: _obj.smoothScroll.animation.easing,
                            always: function () {
                                scrollParent.removeClass(_obj.smoothScroll.animation.class);
                            },
                            complete: function () {
                                if (updateHash) {
                                    if (history.pushState && history.state.updateHash == true) {
                                        history.pushState({ updateHash: _obj.smoothScroll.updateHash }, null, location.pathname + theHash);
                                        jQuery(window).trigger('hashchange');
                                    } else {
                                        history.replaceState({ updateHash: _obj.smoothScroll.updateHash }, null, location.href);
                                    }
                                }
                                return _obj.smoothScroll.success();
                            }
                        },
                        theAnimation = scrollParent.stop().delay(delay).animate(animationParam, options);
                }
                return true;
            },
            debouncer,
            initHash = function () {
                clearTimeout(debouncer);
                debouncer = setTimeout(function () {
                    if (!location.hash && _obj.smoothScroll.initialHash) {
                        setTimeout(function () {
                            history.replaceState({ updateHash: true }, null, location.origin + location.pathname + _obj.smoothScroll.initialHash);
                        }, 1);
                    } else {
                        history.replaceState({ updateHash: _obj.smoothScroll.updateHash }, null, location.href);
                    }
                }, 100)
                return true;
            },
            init = function (obj) {
                var debounce;
                for (var i = 0, n = obj.length; i < n; i++) {
                    initHash();
                    var debounce;
                    obj.eq(i).on("click", function () {
                        var thisObj = jQuery(this);
                        if (isCurrentPage(thisObj)) {
                            return false;
                        }
                    });
                    obj.eq(i).on(_obj.smoothScroll.event, function () {
                        var thisObj = jQuery(this);
                        if (isCurrentPage(thisObj)) {
                            thisObj.trigger('smoothScroll');
                            return false;
                        }
                    });
                    obj.eq(i).off('smoothScroll').on('smoothScroll', function () {
                        var thisObj = jQuery(this);
                        clearTimeout(debounce);
                        debounce = setTimeout(function () {
                            if (isCurrentPage(thisObj)) {
                                return animate(thisObj.get(0).hash, _obj.smoothScroll.animation.obj, _obj.smoothScroll.updateHash, _obj.smoothScroll.animation.delay);
                            }
                        }, 10);

                    });

                    if (_obj.smoothScroll.fixResize) {
                        var resizeDebounce,
                            thisResizeObj = obj.eq(i);
                        jQuery(window).on('resize', function () {
                            //if (location.hash) {
                                clearTimeout(resizeDebounce);
                                resizeDebounce = setTimeout(function () {
                                    var thisHash = thisResizeObj.get(0).hash;
                                    //if (location.hash == thisHash) {
                                    if (_obj.smoothScroll.animation.obj.attr('data-scrollTarget') == thisHash){
                                        thisResizeObj.trigger("smoothScroll");
                                    }
                                    //}
                                }, 10)
                            //}
                        });
                    }
                }
                jQuery(window).off('popstate').on('popstate', function (e) {
                    if (location.hash) {
                        e.preventDefault();
                        history.replaceState({ updateHash: false }, null, location.href);
                        if (jQuery('[href*="' + location.hash + '"]').length > 0) {
                            jQuery('[href*="' + location.hash + '"]').eq(0).trigger("smoothScroll");
                        } else {
                            animate(location.hash, jQuery('html'), false, settings.animation.delay);
                        }
                        return false;
                    }
                });
            };
        _obj.smoothScroll = settings;
        init(_obj);
        return this;
    }
}(jQuery));

// Accessibility Tab Expand 2.1.3 by JP Larson, Copyright 2018 Fiserv. All rights reserved.
(function (jQuery) {
    jQuery.fn.accessibilityTabExpand = function (options) {
        var settings = jQuery.extend(true, {
            objectClass: { // Collection of objects and their applied class.
                1: {
                    obj: null, // The object the following class is toggled on. (jQuery Object)
                    class: "" // The class applied to the object on focus. (string)
                }
            }
        }, options),
            _obj = this,
            focusables = function (obj) {
                let allChildren = obj.find('*'),
                    focusables = jQuery();
                for (let i = 0, n = allChildren.length; i < n; i++) {
                    let thisChild = allChildren.eq(i);
                    if (thisChild.get(0).tabIndex >= 0) {
                        jQuery.merge(focusables, thisChild);
                    }
                }
                return focusables;
            },
            allParents = function (parent, obj) {
                let parents = obj.parents(),
                    allParents = obj;
                for (let i = 0, n = parents.length; i < n; i++) {
                    let thisParent = parents.eq(i);
                    if (thisParent.attr('aria-expanded')) {
                        jQuery.merge(allParents, thisParent);
                    }
                    if (thisParent.get(0) == parent.get(0)) {
                        return allParents;
                    }
                }
                return allParents;
            },
            init = function (obj) {
                for (let i = 0, n = obj.length; i < n; i++) {
                    let thisObj = obj.eq(i);
                    focusables(thisObj).on('focus', function () {
                        allParents(thisObj, jQuery(this)).attr('aria-expanded', true);
                        for (let key in _obj.accessibilityTabExpand.objectClass) {
                            if (_obj.accessibilityTabExpand.objectClass[key].obj) {
                                _obj.accessibilityTabExpand.objectClass[key].obj.addClass(_obj.accessibilityTabExpand.objectClass[key].class);
                            }
                        }
                    }).on('blur', function () {
                        allParents(thisObj, jQuery(this)).attr('aria-expanded', false);
                        for (let key in _obj.accessibilityTabExpand.objectClass) {
                            if (_obj.accessibilityTabExpand.objectClass[key].obj) {
                                _obj.accessibilityTabExpand.objectClass[key].obj.removeClass(_obj.accessibilityTabExpand.objectClass[key].class);
                            }
                        }
                    }).on('pointerout', function () {
                        //if ((navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) { return true; };
                        allParents(thisObj, jQuery(this)).attr('aria-expanded', false);
                        for (let key in _obj.accessibilityTabExpand.objectClass) {
                            if (_obj.accessibilityTabExpand.objectClass[key].obj) {
                                _obj.accessibilityTabExpand.objectClass[key].obj.removeClass(_obj.accessibilityTabExpand.objectClass[key].class);
                            }
                        }
                    }).on('pointerdown', function () {
                        if (jQuery(this).attr('aria-expanded') == "true") {
                            allParents(thisObj, jQuery(this)).attr('aria-expanded', false);
                            jQuery(this).attr('aria-expanded', false);
                        } else {
                            jQuery(this).focus();
                        }
                    });
                }
                jQuery('html').addClass('fiserv-accessibility-tab-expand');
            };
        _obj.accessibilityTabExpand = settings;
        init(_obj); return this;
    };
}(jQuery));

// Anniversary Badge 2.0.2 by Jesse Fowler, Copyright 2018 Fiserv. All rights reserved.
(function (jQuery) {
    jQuery.fn.anniversaryBadge = function (options) {
        var settings = jQuery.extend(true, {
            day: 9,
            month: 12,
            year: 1976
        }, options),
            setTextContent = function (obj) {
                obj.prop('textContent', function () {
                    var date = new Date();
                    //Month is 0 indexed
                    if (date.getMonth() + 1 > settings.month || date.getMonth() + 1 === settings.month && date.getDate() > settings.day) {
                        return date.getFullYear() - settings.year;
                    } else {
                        return date.getFullYear() - (settings.year + 1);
                    }
                });
            },
            init = function (obj) {
                for (var i = 0, n = obj.length; i < n; i++) {
                    setTextContent(obj.eq(i));
                }
            };
        init(this);
        return this;
    };
}(jQuery));

// Responsive Table 2.0.0 by Kristen Rogers, Copyright 2016 Fiserv. All rights reserved.
(function (jQuery) {
    jQuery.fn.responsiveDataTable = function (options) {
        this.each(function () {
            var selectedTable = jQuery(this);
            if (selectedTable.length > 0) {
                for (t = 0; t < selectedTable.length; t++) {
                    //check for table header row
                    if (selectedTable[t].getElementsByTagName("thead").length > 0) {
                        var headerCells = selectedTable[t].getElementsByTagName("th"),
                            dataCells = selectedTable[t].getElementsByTagName("td");

                        //for every td cell in the row
                        for (i = 0; i < dataCells.length; i++) {
                            //get cells cells index
                            var dataCellIndex = dataCells[i].cellIndex,

                                //get same header cells index innerText
                                headerCellText = headerCells[dataCellIndex].innerText;

                            //add the th value as the attribute of the td
                            dataCells[i].setAttribute("data-title", headerCellText);
                        }
                    }
                }
            }
        });
    }
}(jQuery));

// Scroll To 1.3.2 by Jesse Fowler, Copyright 2015 Fiserv. All rights reserved.
(function (jQuery) {
    jQuery.fn.scrollTo = function (options) {
        var settings = jQuery.extend({
            htmlClass: 'scroll-to-enabled',
            skipInitial: 0,
            trigger: jQuery(".scroll-to-next-section"),
            offsetElement: jQuery('body > header:first-of-type'),
            initialOffset: 0,
            triggerActiveClass: "scroll-active"
        }, options);
        var $this = this,
            currentElement = 0 + settings.skipInitial,
            previousElement = jQuery(this).length - 1,
            transitionCount = 0;
        var endOfPage = function () {
            var documentHeight = jQuery(document).height();
            var scrollDifference = jQuery(window).height() + jQuery(window).scrollTop();
            if (documentHeight === scrollDifference) {
                return true;
            } else {
                return false;
            }
        };
        jQuery('html').addClass(settings.htmlClass);
        jQuery(this).addClass('scroll-to');
        if (this.length > 0 + settings.skipInitial) {
            settings.trigger.addClass(settings.triggerActiveClass);
            if (currentElement >= $this.length) {
                currentElement = 0;
            }
            settings.trigger.click(function () {
                var offsetElementAmount = function (obj) {
                    if (settings.initialOffset !== 0 && settings.offsetElement && settings.offsetElement.length > 0 && window.innerHeight > obj.height() && settings.offsetElement.css('position') === 'fixed') {
                        if (jQuery(document).scrollTop() !== 0) {
                            return settings.offsetElement.height();
                        } else {
                            return settings.initialOffset;
                        }
                    }
                    return 0;
                };
                if (endOfPage()) {
                    currentElement = 0;
                } else {
                    $this.each(function (index) {
                        if (parseInt(jQuery(this).offset().top - offsetElementAmount(jQuery(this))) > jQuery(document).scrollTop()) {
                            currentElement = index;
                            return false;
                        } else {
                            currentElement = 0;
                        }
                    });
                    if (currentElement === 0 && parseInt($this.eq(currentElement).offset().top - offsetElementAmount($this.eq(currentElement))) > jQuery(document).scrollTop()) {
                        currentElement = 1;
                    }
                    if (previousElement === currentElement) {
                        if ($this.length >= currentElement + 1) {
                            currentElement += 1;
                        } else {
                            currentElement = 0;
                        }
                    }
                    if (transitionCount === 0) {
                        currentElement = settings.skipInitial;
                    }
                    previousElement = currentElement;
                }
                var newScrollTopPosition = 0;
                if (!endOfPage()) {
                    newScrollTopPosition = $this.eq(currentElement).offset().top - offsetElementAmount($this.eq(currentElement));
                }
                if (jQuery('html').css('scroll-behavior') === 'smooth') {
                    jQuery('html').css('scroll-behavior', 'auto');
                }
                jQuery('html, body').stop().animate({
                    scrollTop: newScrollTopPosition
                }, 2000, function () { jQuery('html').css('scroll-behavior', ''); });

                transitionCount++;
                return false;
            });
        }
        return $this;
    };
}(jQuery));

// Tour 3.0.2 by JP Larson, Copyright 2018 Fiserv. All rights reserved.
(function (jQuery) {
    jQuery.fn.tour = function (options) {
        var settings = jQuery.extend(true, { // Changed: 2.2.0
            obj: jQuery(this), // The object brought in by the selector in dom ready.
            id: 'tour', // The id of the tour object. Added: 2.2.0
            displayTourLink: jQuery('a[href="#tour"]'), // The object that will activate the tour on click. Added: 2.2.0
            disabledOnLoad: true, // Disables auto play on DOM ready. Added: 2.1.1
            exitStorage: "local", // Storage method of the exit event. Only applies if disabledOnload is false. Either local or session can be used. Added: 2.1.1
            queryString: { // Added: 2.2.0
                param: "tour", // The query string parameter used to open the tour.
                value: "open" // The query string value used to open the tour.
            },
            dataset: 'tour', // The name of the sections dataset. This will be used for all selectors.
            intro: 'intro', // The value used for the intro dataset
            offset: 25, // The offset of the tour section (in pixels) to prevent overlap of the feature.
            scrollOffset: 0.25, // The percentage of the view height left above the tour after scrolling.
            url: "inc_tour.aspx", // The url for the tour include. Changed: 2.0.2
            css: false, // The url for the style sheet. Changed: 2.1.1
            controls: {
                continue: '[data-control="Continue"]', // The selector used for the continue buttons.
                exit: '[data-control="Exit"]' // The selector used for the exit buttons.
            },
            classes: {
                open: 'tour-open', // The class applied when the tour is opened. Added: 2.2.0
                play: 'play', // The class applied after the slide is continued.
                active: 'active', // The class applied to the active tour section.
                fixed: 'fixed' // The class applied to the tour section when the target is fixed position. Added: 2.1.0
            },
            resetToTop: true, // Scrolls to the top of the page on exit. Can be set to true or false. Added: 2.1.0
            loadDelay: 0 // Delays the loading of the tour in 1/1000 of a second. Can be used for timing issues such as DOM thrashing. Added: 2.1.1
        }, options),
            sections = '[data-' + settings.dataset + ']',
            appendCSS = function () { // Appends the head with the tour CSS if set in the settings.
                if (jQuery('#tour-styles').length < 1 && settings.css) {
                    jQuery('head').append(jQuery('<link id="tour-styles" rel="stylesheet" href="' + settings.css + '">'));
                }
            };

        try {
            var tour,
                features,
                targets = function (features) {
                    for (var i = 0, n = features.length; i < n; i++) {
                        target = jQuery('#' + features.eq(i).data(settings.dataset));
                    }
                },
                includeFile = jQuery.ajax({ // Ajax function to load the include
                    async: true,
                    type: "GET",
                    url: settings.url,
                    success: function (result) {
                        if (result.length > 5) {
                            appendCSS();
                            var delay = setTimeout(function () {
                                jQuery('body').append(result);
                                tour = jQuery('#' + settings.id);
                                init();
                            }, settings.loadDelay);
                        } else {
                            throw (settings.url + " does not exist");
                        }
                    }
                }),
                isHidden = function (obj) { // Added: 2.2.0
                    if (obj.length <= 0) {
                        return true;
                    }
                    if (obj.css('display') === "none" || (obj.css('visibility') === "hidden" && obj.get(0).nodeName !== "A") || obj.css('opacity') === "0") {
                        return true;
                    }
                    for (n = 0; n < obj.parents().length; n++) {
                        if (obj.parents().eq(n).css('display') === "none" || obj.parents().eq(n).css('visibility') === "hidden" || obj.parents().eq(n).css('opacity') === "0") {
                            return true;
                        }
                    }
                    return false;
                },
                positionFeatures = function (tourSections) { // Positions each section based on the top position of the featured ID. Changed: 2.2.0
                    for (i = 0; i < tourSections.length; i++) {
                        feature = tourSections.eq(i);
                        if (feature.data(settings.dataset) !== settings.intro) {
                            target = jQuery('#' + feature.data(settings.dataset));
                            target.removeClass(settings.classes.active);
                            if (!isHidden(target)) {
                                feature.get(0).hidden = false;
                                window.scrollTo(0, window.pageYOffset - 1);
                                var theOffset = parseInt(target.offset().top),
                                    theNewOffset;
                                window.scrollTo(0, window.pageYOffset + 1);
                                theNewOffset = parseInt(target.offset().top);
                                if (theOffset !== theNewOffset) {
                                    feature.css({
                                        top: parseInt(theOffset) - feature.height() - settings.offset
                                    }).addClass(settings.classes.fixed);
                                } else {
                                    feature.css('top', theOffset - feature.height() - settings.offset);
                                }
                            } else {
                                feature.get(0).hidden = true;
                            }
                        }
                    }
                },
                reset = function () { // Resets the tour to the start position
                    tour.removeClass(settings.classes.open);
                    settings.obj.removeClass(settings.classes.open);
                    tour.removeClass(settings.classes.play);
                    features.removeClass(settings.classes.active); // Changed: 2.2.0
                    positionFeatures(features); // Changed: 2.2.0
                    if (settings.resetToTop) {
                        jQuery('html,body').stop().animate({
                            scrollTop: 0
                        }, 850, 'swing');
                    }

                },
                moveToFeature = function (feature) { // Increments the tour to the next feature. Changed: 2.2.0
                    try {
                        feature.removeClass(settings.classes.active);
                        if (!feature.next().get(0).hidden) {
                            var target = feature.next(),
                                targetObj = jQuery('#' + target.data(settings.dataset)),
                                scrollTo = parseInt(target.css('top')) - (jQuery(window).height() * settings.scrollOffset);
                            target.addClass(settings.classes.active);
                            targetObj.addClass(settings.classes.active);
                            if (!target.hasClass(settings.classes.fixed)) {
                                jQuery('html,body').stop().animate({
                                    scrollTop: scrollTo > 0 ? scrollTo : 0
                                }, 850, 'swing');
                            }
                        } else {
                            if (tour.children().length === feature.next().index() + 1) {
                                close();
                            } else {
                                moveToFeature(feature.next());
                            }
                        }
                    } catch (err) {
                        console.log(err);
                    }
                },
                open = function () { // Added: 2.2.0
                    tour.addClass(settings.classes.open);
                    settings.obj.addClass(settings.classes.open);
                    return true;
                },
                close = function () { // Closes the tour.  Added: 2.2.0
                    switch (settings.exitStorage) {
                        case "local":
                            localStorage.setItem("tourOnLoad" + tour.attr('id'), false);
                            break;
                        case "session":
                            sessionStorage.setItem("tourOnLoad" + tour.attr('id'), false);
                            break;
                    }
                    reset();
                },
                init = function () { // initializes the tour by calling the required functions and assigning even handlers. Changed: 2.2.0
                    features = tour.find(sections.toString());
                    if (window.location.queries && window.location.queries[settings.queryString.param] === settings.queryString.value) { // Changed: 2.2.0
                        open();
                    }

                    if (settings.disabledOnLoad === false && window.localStorage.getItem("tourOnLoad" + tour.attr('id')) !== "false" && window.sessionStorage.getItem("tourOnLoad" + tour.attr('id')) !== "false") { // Changed: 2.2.0
                        open();
                    }
                    settings.displayTourLink.click(function (e) { // Changed: 2.2.0
                        if (e.currentTarget.nodeName === "A") {
                            e.preventDefault();
                        }
                        reset();
                        open();
                    });
                    jQuery(window).resize(function () {
                        var delay = setTimeout(function () {
                            positionFeatures(features); // Changed: 2.2.0
                        }, 500);
                    });
                    tour.find(settings.controls.exit.toString()).click(function () { // Changed: 2.2.0
                        close();
                    });
                    tour.find(settings.controls.continue.toString()).click(function () {
                        tour.addClass(settings.classes.play);
                        positionFeatures(features); // Changed: 2.2.0
                        moveToFeature(jQuery(this).closest(sections.toString()));
                    });
                };
        } catch (err) {
            console.log(err);
        }
    };
}(jQuery));

// Weather 4.3.0 by Jesse Fowler, Copyright 2014 Fiserv. All rights reserved.
(function (jQuery) {
    jQuery.fn.weather = function (options) {
        var settings = jQuery.extend(true, {
            hideForecast: false,
            htmlClass: 'weather-enabled',
            weatherSourceFile: 'inc_weather.aspx',
            theme: "unset", // unset | dark | raster
            viewForecastBtn: jQuery('<a class="view-forecast Button1"><span class="view-word">View </span><span class="hide-word">Hide </span>Forecast</a>')
        }, options),
            initWeather = function (obj) {
                jQuery('html').addClass(settings.htmlClass);
                // New structures
                var part1 = jQuery('<div class="part-1"></div>');
                part1.append(obj.find('.weather > .conditionImage'));
                var part2 = jQuery('<div class="part-2"></div>');
                part2.append(obj.find('.weather').children());
                var buttons = jQuery('<div class="buttons"></div>');
                part2.append(buttons);
                obj.find('.weather').append(part1).append(part2);
                // Modifications to existing structures
                obj.addClass(settings.theme);
                obj.find('#forecast').addClass('forecast');
                obj.find('.weather')
                    .addClass('weather-report')
                    .removeClass('weather')
                    .append(obj.find('.forecast'));
                if (settings.hideForecast) {
                    obj.find('#forecast').attr('aria-expanded', 'false');
                    settings.viewForecastBtn.on('click', function () {
                        if (obj.find('#forecast').attr('aria-expanded') === 'true') {
                            obj.find('#forecast').attr('aria-expanded', 'false');
                            settings.viewForecastBtn.removeClass('forcast-visible');
                        } else {
                            obj.find('#forecast').attr('aria-expanded', 'true');
                            settings.viewForecastBtn.addClass('forcast-visible');
                        }
                        return false;
                    });
                    buttons.append(settings.viewForecastBtn);
                }
                changeLocLink = obj.find(".Change-Location-Link");
                changeLocLink.click(function () {
                    obj.toggleClass('show-change-location');
                    return false;
                });
                buttons.append(changeLocLink);
                const ajaxFormPost = new AjaxPost({
                    "querySelectorAll": ".weatherwidget",
                    "url": settings.weatherSourceFile,
                    "postContainer": obj,
                    "replace": true,
                    "callback": function () {
                        return initWeather(obj);
                    }
                });
            },
            init = function (obj) {
                obj.each(function () {
                    jQuery(this).load(settings.weatherSourceFile, function () {
                        initWeather(jQuery(this));
                    });
                });
            };
        init(this);
        return this;
    };
}(jQuery));

// Lightcase 4.3.0 by @cornelboppart, GPL license
/* Modified for Fiserv cms ashx image hook - line 846 and aspx line 125 and iframe allow transparency line 475, h4 tag on line 165 changed to p tag for ADA guidelines*/
/*
 * Lightcase - jQuery Plugin
 * The smart and flexible Lightbox Plugin.
 *
 * @author		Cornel Boppart <cornel@bopp-art.com>
 * @copyright	Author
 *
 * @version		2.5.0 (11/03/2018)
 */

; (function ($) {

    'use strict';

    var _self = {
        cache: {},

        support: {},

        objects: {},

		/**
		 * Initializes the plugin
		 *
		 * @param	{object}	options
		 * @return	{object}
		 */
        init: function (options) {
            return this.each(function () {
                $(this).unbind('click.lightcase').bind('click.lightcase', function (event) {
                    event.preventDefault();
                    $(this).lightcase('start', options);
                });
            });
        },

		/**
		 * Starts the plugin
		 *
		 * @param	{object}	options
		 * @return	{void}
		 */
        start: function (options) {
            _self.origin = lightcase.origin = this;

            _self.settings = lightcase.settings = $.extend(true, {
                idPrefix: 'lightcase-',
                classPrefix: 'lightcase-',
                attrPrefix: 'lc-',
                transition: 'elastic',
                transitionOpen: null,
                transitionClose: null,
                transitionIn: null,
                transitionOut: null,
                cssTransitions: true,
                speedIn: 250,
                speedOut: 250,
                width: null,
                height: null,
                maxWidth: 800,
                maxHeight: 500,
                forceWidth: false,
                forceHeight: false,
                liveResize: true,
                fullScreenModeForMobile: true,
                mobileMatchExpression: /(iphone|ipod|ipad|android|blackberry|symbian)/,
                disableShrink: false,
                fixedRatio: true,
                shrinkFactor: .75,
                overlayOpacity: .9,
                slideshow: false,
                slideshowAutoStart: true,
                breakBeforeShow: false,
                timeout: 5000,
                swipe: true,
                useKeys: true,
                useCategories: true,
                useAsCollection: false,
                navigateEndless: true,
                closeOnOverlayClick: true,
                title: null,
                caption: null,
                showTitle: true,
                showCaption: true,
                showSequenceInfo: true,
                inline: {
                    width: 'auto',
                    height: 'auto'
                },
                ajax: {
                    width: 'auto',
                    height: 'auto',
                    type: 'get',
                    dataType: 'html',
                    data: {}
                },
                iframe: {
                    width: 800,
                    height: 500,
                    frameborder: 0
                },
                flash: {
                    width: 800,
                    height: 500,
                    wmode: 'transparent'
                },
                video: {
                    width: 800,
                    height: 500,
                    poster: '',
                    preload: 'auto',
                    controls: true,
                    autobuffer: true,
                    autoplay: true,
                    loop: false
                },
                attr: 'data-rel',
                href: null,
                type: null,
                typeMapping: {
                    'image': 'jpg,jpeg,gif,png,bmp',
                    'flash': 'swf',
                    'video': 'mp4,mov,ogv,ogg,webm',
                    'iframe': 'html,php,aspx',
                    'ajax': 'json,txt',
                    'inline': '#'
                },
                errorMessage: function () {
                    return '<p class="' + _self.settings.classPrefix + 'error">' + _self.settings.labels['errorMessage'] + '</p>';
                },
                labels: {
                    'errorMessage': 'Source could not be found...',
                    'sequenceInfo.of': ' of ',
                    'close': 'Close',
                    'navigator.prev': 'Prev',
                    'navigator.next': 'Next',
                    'navigator.play': 'Play',
                    'navigator.pause': 'Pause'
                },
                markup: function () {
                    _self.objects.body.append(
                        _self.objects.overlay = $('<div id="' + _self.settings.idPrefix + 'overlay"></div>'),
                        _self.objects.loading = $('<div id="' + _self.settings.idPrefix + 'loading" class="' + _self.settings.classPrefix + 'icon-spin"></div>'),
                        _self.objects.case = $('<div id="' + _self.settings.idPrefix + 'case" aria-hidden="true" role="dialog"></div>')
                    );
                    _self.objects.case.after(
                        _self.objects.close = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-close"><span>' + _self.settings.labels['close'] + '</span></a>'),
                        _self.objects.nav = $('<div id="' + _self.settings.idPrefix + 'nav"></div>')
                    );
                    _self.objects.nav.append(
                        _self.objects.prev = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-prev"><span>' + _self.settings.labels['navigator.prev'] + '</span></a>').hide(),
                        _self.objects.next = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-next"><span>' + _self.settings.labels['navigator.next'] + '</span></a>').hide(),
                        _self.objects.play = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-play"><span>' + _self.settings.labels['navigator.play'] + '</span></a>').hide(),
                        _self.objects.pause = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-pause"><span>' + _self.settings.labels['navigator.pause'] + '</span></a>').hide()
                    );
                    _self.objects.case.append(
                        _self.objects.content = $('<div id="' + _self.settings.idPrefix + 'content"></div>'),
                        _self.objects.info = $('<div id="' + _self.settings.idPrefix + 'info"></div>')
                    );
                    _self.objects.content.append(
                        _self.objects.contentInner = $('<div class="' + _self.settings.classPrefix + 'contentInner"></div>')
                    );
                    _self.objects.info.append(
                        _self.objects.sequenceInfo = $('<div id="' + _self.settings.idPrefix + 'sequenceInfo"></div>'),
                        _self.objects.title = $('<p id="' + _self.settings.idPrefix + 'title"></p>'),
                        _self.objects.caption = $('<p id="' + _self.settings.idPrefix + 'caption"></p>')
                    );
                },
                onInit: {},
                onStart: {},
                onBeforeCalculateDimensions: {},
                onAfterCalculateDimensions: {},
                onBeforeShow: {},
                onFinish: {},
                onResize: {},
                onClose: {},
                onCleanup: {}
            },
                options,
                // Load options from data-lc-options attribute
                _self.origin.data ? _self.origin.data('lc-options') : {});

            _self.objects.document = $('html');
            _self.objects.body = $('body');

            // Call onInit hook functions
            _self._callHooks(_self.settings.onInit);

            _self.objectData = _self._setObjectData(this);

            _self._addElements();
            _self._open();

            _self.dimensions = _self.getViewportDimensions();
        },

		/**
		 * Getter method for objects
		 *
		 * @param	{string}	name
		 * @return	{object}
		 */
        get: function (name) {
            return _self.objects[name];
        },

		/**
		 * Getter method for objectData
		 *
		 * @return	{object}
		 */
        getObjectData: function () {
            return _self.objectData;
        },

		/**
		 * Sets the object data
		 *
		 * @param	{object}	object
		 * @return	{object}	objectData
		 */
        _setObjectData: function (object) {
            var $object = $(object),
                objectData = {
                    this: $(object),
                    title: _self.settings.title || $object.attr(_self._prefixAttributeName('title')) || $object.attr('title'),
                    caption: _self.settings.caption || $object.attr(_self._prefixAttributeName('caption')) || $object.children('img').attr('alt'),
                    url: _self._determineUrl(),
                    requestType: _self.settings.ajax.type,
                    requestData: _self.settings.ajax.data,
                    requestDataType: _self.settings.ajax.dataType,
                    rel: $object.attr(_self._determineAttributeSelector()),
                    type: _self.settings.type || _self._verifyDataType(_self._determineUrl()),
                    isPartOfSequence: _self.settings.useAsCollection || _self._isPartOfSequence($object.attr(_self.settings.attr), ':'),
                    isPartOfSequenceWithSlideshow: _self._isPartOfSequence($object.attr(_self.settings.attr), ':slideshow'),
                    currentIndex: $(_self._determineAttributeSelector()).index($object),
                    sequenceLength: $(_self._determineAttributeSelector()).length
                };

            // Add sequence info to objectData
            objectData.sequenceInfo = (objectData.currentIndex + 1) + _self.settings.labels['sequenceInfo.of'] + objectData.sequenceLength;

            // Add next/prev index
            objectData.prevIndex = objectData.currentIndex - 1;
            objectData.nextIndex = objectData.currentIndex + 1;

            return objectData;
        },

		/**
		 * Prefixes a data attribute name with defined name from 'settings.attrPrefix'
		 * to ensure more uniqueness for all lightcase related/used attributes.
		 *
		 * @param	{string}	name
		 * @return	{string}
		 */
        _prefixAttributeName: function (name) {
            return 'data-' + _self.settings.attrPrefix + name;
        },

		/**
		 * Determines the link target considering 'settings.href' and data attributes
		 * but also with a fallback to the default 'href' value.
		 *
		 * @return	{string}
		 */
        _determineLinkTarget: function () {
            return _self.settings.href || $(_self.origin).attr(_self._prefixAttributeName('href')) || $(_self.origin).attr('href');
        },

		/**
		 * Determines the attribute selector to use, depending on
		 * whether categorized collections are beeing used or not.
		 *
		 * @return	{string}	selector
		 */
        _determineAttributeSelector: function () {
            var $origin = $(_self.origin),
                selector = '';

            if (typeof _self.cache.selector !== 'undefined') {
                selector = _self.cache.selector;
            } else if (_self.settings.useCategories === true && $origin.attr(_self._prefixAttributeName('categories'))) {
                var categories = $origin.attr(_self._prefixAttributeName('categories')).split(' ');

                $.each(categories, function (index, category) {
                    if (index > 0) {
                        selector += ',';
                    }
                    selector += '[' + _self._prefixAttributeName('categories') + '~="' + category + '"]';
                });
            } else {
                selector = '[' + _self.settings.attr + '="' + $origin.attr(_self.settings.attr) + '"]';
            }

            _self.cache.selector = selector;

            return selector;
        },

		/**
		 * Determines the correct resource according to the
		 * current viewport and density.
		 *
		 * @return	{string}	url
		 */
        _determineUrl: function () {
            var dataUrl = _self._verifyDataUrl(_self._determineLinkTarget()),
                width = 0,
                density = 0,
                supportLevel = '',
                url;

            $.each(dataUrl, function (index, src) {
                switch (_self._verifyDataType(src.url)) {
                    case 'video':
                        var video = document.createElement('video'),
                            videoType = _self._verifyDataType(src.url) + '/' + _self._getFileUrlSuffix(src.url);

                        // Check if browser can play this type of video format
                        if (supportLevel !== 'probably' && supportLevel !== video.canPlayType(videoType) && video.canPlayType(videoType) !== '') {
                            supportLevel = video.canPlayType(videoType);
                            url = src.url;
                        }
                        break;
                    default:
                        if (
                            // Check density
                            _self._devicePixelRatio() >= src.density &&
                            src.density >= density &&
                            // Check viewport width
                            _self._matchMedia()('screen and (min-width:' + src.width + 'px)').matches &&
                            src.width >= width
                        ) {
                            width = src.width;
                            density = src.density;
                            url = src.url;
                        }
                        break;
                }
            });

            return url;
        },

		/**
		 * Normalizes an url and returns information about the resource path,
		 * the viewport width as well as density if defined.
		 *
		 * @param	{string}	url	Path to resource in format of an url or srcset
		 * @return	{object}
		 */
        _normalizeUrl: function (url) {
            var srcExp = /^\d+$/;

            return url.split(',').map(function (str) {
                var src = {
                    width: 0,
                    density: 0
                };

                str.trim().split(/\s+/).forEach(function (url, i) {
                    if (i === 0) {
                        return src.url = url;
                    }

                    var value = url.substring(0, url.length - 1),
                        lastChar = url[url.length - 1],
                        intVal = parseInt(value, 10),
                        floatVal = parseFloat(value);
                    if (lastChar === 'w' && srcExp.test(value)) {
                        src.width = intVal;
                    } else if (lastChar === 'h' && srcExp.test(value)) {
                        src.height = intVal;
                    } else if (lastChar === 'x' && !isNaN(floatVal)) {
                        src.density = floatVal;
                    }
                });

                return src;
            });
        },

		/**
		 * Verifies if the link is part of a sequence
		 *
		 * @param	{string}	rel
		 * @param	{string}	expression
		 * @return	{boolean}
		 */
        _isPartOfSequence: function (rel, expression) {
            var getSimilarLinks = $('[' + _self.settings.attr + '="' + rel + '"]'),
                regexp = new RegExp(expression);

            return (regexp.test(rel) && getSimilarLinks.length > 1);
        },

		/**
		 * Verifies if the slideshow should be enabled
		 *
		 * @return	{boolean}
		 */
        isSlideshowEnabled: function () {
            return (_self.objectData.isPartOfSequence && (_self.settings.slideshow === true || _self.objectData.isPartOfSequenceWithSlideshow === true));
        },

		/**
		 * Loads the new content to show
		 *
		 * @return	{void}
		 */
        _loadContent: function () {
            if (_self.cache.originalObject) {
                _self._restoreObject();
            }

            _self._createObject();
        },

		/**
		 * Creates a new object
		 *
		 * @return	{void}
		 */
        _createObject: function () {
            var $object;

            // Create object
            switch (_self.objectData.type) {
                case 'image':
                    $object = $(new Image());
                    $object.attr({
                        // The time expression is required to prevent the binding of an image load
                        'src': _self.objectData.url,
                        'alt': _self.objectData.title
                    });
                    break;
                case 'inline':
                    $object = $('<div class="' + _self.settings.classPrefix + 'inlineWrap"></div>');
                    $object.html(_self._cloneObject($(_self.objectData.url)));

                    // Add custom attributes from _self.settings
                    $.each(_self.settings.inline, function (name, value) {
                        console.log(name + ', ' + value);
                        $object.attr(_self._prefixAttributeName(name), value);
                    });
                    break;
                case 'ajax':
                    $object = $('<div class="' + _self.settings.classPrefix + 'inlineWrap"></div>');

                    // Add custom attributes from _self.settings
                    $.each(_self.settings.ajax, function (name, value) {
                        if (name !== 'data') {
                            $object.attr(_self._prefixAttributeName(name), value);
                        }
                    });
                    break;
                case 'flash':
                    $object = $('<embed src="' + _self.objectData.url + '" type="application/x-shockwave-flash"></embed>');

                    // Add custom attributes from _self.settings
                    $.each(_self.settings.flash, function (name, value) {
                        $object.attr(name, value);
                    });
                    break;
                case 'video':
                    $object = $('<video></video>');
                    $object.attr('src', _self.objectData.url);

                    // Add custom attributes from _self.settings
                    $.each(_self.settings.video, function (name, value) {
                        $object.attr(name, value);
                    });
                    break;
                default:
                    $object = $('<iframe ALLOWTRANSPARENCY="true"></iframe>');
                    $object.attr({
                        'src': _self.objectData.url
                    });

                    // Add custom attributes from _self.settings
                    $.each(_self.settings.iframe, function (name, value) {
                        $object.attr(name, value);
                    });
                    break;
            }

            _self._addObject($object);
            _self._loadObject($object);
        },

		/**
		 * Adds the new object to the markup
		 *
		 * @param	{object}	$object
		 * @return	{void}
		 */
        _addObject: function ($object) {
            // Add object to content holder
            _self.objects.contentInner.html($object);

            // Start loading
            _self._loading('start');

            // Call onStart hook functions
            _self._callHooks(_self.settings.onStart);

            // Add sequenceInfo to the content holder or hide if its empty
            if (_self.settings.showSequenceInfo === true && _self.objectData.isPartOfSequence) {
                _self.objects.sequenceInfo.html(_self.objectData.sequenceInfo);
                _self.objects.sequenceInfo.show();
            } else {
                _self.objects.sequenceInfo.empty();
                _self.objects.sequenceInfo.hide();
            }
            // Add title to the content holder or hide if its empty
            if (_self.settings.showTitle === true && _self.objectData.title !== undefined && _self.objectData.title !== '') {
                _self.objects.title.html(_self.objectData.title);
                _self.objects.title.show();
            } else {
                _self.objects.title.empty();
                _self.objects.title.hide();
            }
            // Add caption to the content holder or hide if its empty
            if (_self.settings.showCaption === true && _self.objectData.caption !== undefined && _self.objectData.caption !== '') {
                _self.objects.caption.html(_self.objectData.caption);
                _self.objects.caption.show();
            } else {
                _self.objects.caption.empty();
                _self.objects.caption.hide();
            }
        },

		/**
		 * Loads the new object
		 *
		 * @param	{object}	$object
		 * @return	{void}
		 */
        _loadObject: function ($object) {
            // Load the object
            switch (_self.objectData.type) {
                case 'inline':
                    if ($(_self.objectData.url)) {
                        _self._showContent($object);
                    } else {
                        _self.error();
                    }
                    break;
                case 'ajax':
                    $.ajax(
                        $.extend({}, _self.settings.ajax, {
                            url: _self.objectData.url,
                            type: _self.objectData.requestType,
                            dataType: _self.objectData.requestDataType,
                            data: _self.objectData.requestData,
                            success: function (data, textStatus, jqXHR) {
                                // Check for X-Ajax-Location
                                if (jqXHR.getResponseHeader('X-Ajax-Location')) {
                                    _self.objectData.url = jqXHR.getResponseHeader('X-Ajax-Location');
                                    _self._loadObject($object);
                                }
                                else {
                                    // Unserialize if data is transferred as json
                                    if (_self.objectData.requestDataType === 'json') {
                                        _self.objectData.data = data;
                                    } else {
                                        $object.html(data);
                                    }
                                    _self._showContent($object);
                                }
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                _self.error();
                            }
                        })
                    );
                    break;
                case 'flash':
                    _self._showContent($object);
                    break;
                case 'video':
                    if (typeof ($object.get(0).canPlayType) === 'function' || _self.objects.case.find('video').length === 0) {
                        _self._showContent($object);
                    } else {
                        _self.error();
                    }
                    break;
                default:
                    if (_self.objectData.url) {
                        $object.on('load', function () {
                            _self._showContent($object);
                        });
                        $object.on('error', function () {
                            _self.error();
                        });
                    } else {
                        _self.error();
                    }
                    break;
            }
        },

		/**
		 * Throws an error message if something went wrong
		 *
		 * @return	{void}
		 */
        error: function () {
            _self.objectData.type = 'error';
            var $object = $('<div class="' + _self.settings.classPrefix + 'inlineWrap"></div>');

            $object.html(_self.settings.errorMessage);
            _self.objects.contentInner.html($object);

            _self._showContent(_self.objects.contentInner);
        },

		/**
		 * Calculates the dimensions to fit content
		 *
		 * @param	{object}	$object
		 * @return	{void}
		 */
        _calculateDimensions: function ($object) {
            _self._cleanupDimensions();

            if (!$object) return;

            // Set default dimensions
            var dimensions = {
                ratio: 1,
                objectWidth: $object.attr('width') ? $object.attr('width') : $object.attr(_self._prefixAttributeName('width')),
                objectHeight: $object.attr('height') ? $object.attr('height') : $object.attr(_self._prefixAttributeName('height'))
            };

            if (!_self.settings.disableShrink) {
                // Add calculated maximum width/height to dimensions
                dimensions.maxWidth = parseInt(_self.dimensions.windowWidth * _self.settings.shrinkFactor);
                dimensions.maxHeight = parseInt(_self.dimensions.windowHeight * _self.settings.shrinkFactor);

                // If the auto calculated maxWidth/maxHeight greather than the user-defined one, use that.
                if (dimensions.maxWidth > _self.settings.maxWidth) {
                    dimensions.maxWidth = _self.settings.maxWidth;
                }
                if (dimensions.maxHeight > _self.settings.maxHeight) {
                    dimensions.maxHeight = _self.settings.maxHeight;
                }

                // Calculate the difference between screen width/height and image width/height
                dimensions.differenceWidthAsPercent = parseInt(100 / dimensions.maxWidth * dimensions.objectWidth);
                dimensions.differenceHeightAsPercent = parseInt(100 / dimensions.maxHeight * dimensions.objectHeight);

                switch (_self.objectData.type) {
                    case 'image':
                    case 'flash':
                    case 'video':
                    case 'iframe':
                    case 'ajax':
                    case 'inline':
                        if (_self.objectData.type === 'image' || _self.settings.fixedRatio === true) {
                            if (dimensions.differenceWidthAsPercent > 100 && dimensions.differenceWidthAsPercent > dimensions.differenceHeightAsPercent) {
                                dimensions.objectWidth = dimensions.maxWidth;
                                dimensions.objectHeight = parseInt(dimensions.objectHeight / dimensions.differenceWidthAsPercent * 100);
                            }
                            if (dimensions.differenceHeightAsPercent > 100 && dimensions.differenceHeightAsPercent > dimensions.differenceWidthAsPercent) {
                                dimensions.objectWidth = parseInt(dimensions.objectWidth / dimensions.differenceHeightAsPercent * 100);
                                dimensions.objectHeight = dimensions.maxHeight;
                            }
                            if (dimensions.differenceHeightAsPercent > 100 && dimensions.differenceWidthAsPercent < dimensions.differenceHeightAsPercent) {
                                dimensions.objectWidth = parseInt(dimensions.maxWidth / dimensions.differenceHeightAsPercent * dimensions.differenceWidthAsPercent);
                                dimensions.objectHeight = dimensions.maxHeight;
                            }
                            break;
                        }
                    case 'error':
                        if (!isNaN(dimensions.objectWidth) && dimensions.objectWidth > dimensions.maxWidth) {
                            dimensions.objectWidth = dimensions.maxWidth;
                        }
                        break;
                    default:
                        if ((isNaN(dimensions.objectWidth) || dimensions.objectWidth > dimensions.maxWidth) && !_self.settings.forceWidth) {
                            dimensions.objectWidth = dimensions.maxWidth;
                        }
                        if (((isNaN(dimensions.objectHeight) && dimensions.objectHeight !== 'auto') || dimensions.objectHeight > dimensions.maxHeight) && !_self.settings.forceHeight) {
                            dimensions.objectHeight = dimensions.maxHeight;
                        }
                        break;
                }
            }

            if (_self.settings.forceWidth) {
                try {
                    dimensions.objectWidth = _self.settings[_self.objectData.type].width;
                } catch (e) {
                    dimensions.objectWidth = _self.settings.width || dimensions.objectWidth;
                }

                dimensions.maxWidth = null;
            }
            if ($object.attr(_self._prefixAttributeName('max-width'))) {
                dimensions.maxWidth = $object.attr(_self._prefixAttributeName('max-width'));
            }

            if (_self.settings.forceHeight) {
                try {
                    dimensions.objectHeight = _self.settings[_self.objectData.type].height;
                } catch (e) {
                    dimensions.objectHeight = _self.settings.height || dimensions.objectHeight;
                }

                dimensions.maxHeight = null;
            }
            if ($object.attr(_self._prefixAttributeName('max-height'))) {
                dimensions.maxHeight = $object.attr(_self._prefixAttributeName('max-height'));
            }
            _self._adjustDimensions($object, dimensions);
        },

		/**
		 * Adjusts the dimensions
		 *
		 * @param	{object}	$object
		 * @param	{object}	dimensions
		 * @return	{void}
		 */
        _adjustDimensions: function ($object, dimensions) {
            // Adjust width and height
            $object.css({
                'width': dimensions.objectWidth,
                'height': dimensions.objectHeight,
                'max-width': dimensions.maxWidth,
                'max-height': dimensions.maxHeight
            });

            _self.objects.contentInner.css({
                'width': $object.outerWidth(),
                'height': $object.outerHeight(),
                'max-width': '100%'
            });

            _self.objects.case.css({
                'width': _self.objects.contentInner.outerWidth(),
                'max-width': '100%'
            });

            // Adjust margin
            _self.objects.case.css({
                'margin-top': parseInt(-(_self.objects.case.outerHeight() / 2)),
                'margin-left': parseInt(-(_self.objects.case.outerWidth() / 2))
            });
        },

		/**
		 * Handles the _loading
		 *
		 * @param	{string}	process
		 * @return	{void}
		 */
        _loading: function (process) {
            if (process === 'start') {
                _self.objects.case.addClass(_self.settings.classPrefix + 'loading');
                _self.objects.loading.show();
            } else if (process === 'end') {
                _self.objects.case.removeClass(_self.settings.classPrefix + 'loading');
                _self.objects.loading.hide();
            }
        },


		/**
		 * Gets the client screen dimensions
		 *
		 * @return	{object}	dimensions
		 */
        getViewportDimensions: function () {
            return {
                windowWidth: $(window).innerWidth(),
                windowHeight: $(window).innerHeight()
            };
        },

		/**
		 * Verifies the url
		 *
		 * @param	{string}	dataUrl
		 * @return	{object}	dataUrl	Clean url for processing content
		 */
        _verifyDataUrl: function (dataUrl) {
            if (!dataUrl || dataUrl === undefined || dataUrl === '') {
                return false;
            }

            if (dataUrl.indexOf('#') > -1) {
                dataUrl = dataUrl.split('#');
                dataUrl = '#' + dataUrl[dataUrl.length - 1];
            }

            return _self._normalizeUrl(dataUrl.toString());
        },

        //
		/**
		 * Tries to get the (file) suffix of an url
		 *
		 * @param	{string}	url
		 * @return	{string}
		 */
        _getFileUrlSuffix: function (url) {
            var re = /(?:\.([^.]+))?$/;
            return re.exec(url.toLowerCase())[1];
        },

		/**
		 * Verifies the data type of the content to load
		 *
		 * @param	{string}			url
		 * @return	{string|boolean}	Array key if expression matched, else false
		 */
        _verifyDataType: function (url) {
            var typeMapping = _self.settings.typeMapping;

            // Early abort if dataUrl couldn't be verified
            if (!url) {
                return false;
            }

            // Verify the dataType of url according to typeMapping which
            // has been defined in settings.
            for (var key in typeMapping) {
                if (typeMapping.hasOwnProperty(key)) {
                    var suffixArr = typeMapping[key].split(',');

                    for (var i = 0; i < suffixArr.length; i++) {
                        var suffix = suffixArr[i].toLowerCase(),
                            regexp = new RegExp('\.(' + suffix + ')$', 'i'),
                            str = url.toLowerCase().split('?')[0].substr(-5);

                        if (regexp.test(str) === true || (key === 'inline' && (url.indexOf(suffix) > -1))) {
                            return key;
                        }
                    }
                }
            }

            // Detects CMS images and returns the key for an image.
            if (url.toLowerCase().indexOf('contentimagehandler.ashx?imageid=') !== -1) {
                return 'image';
            }

            // If no expression matched, return 'iframe'.
            return 'iframe';
        },

		/**
		 * Extends html markup with the essential tags
		 *
		 * @return	{void}
		 */
        _addElements: function () {
            if (typeof _self.objects.case !== 'undefined' && $('#' + _self.objects.case.attr('id')).length) {
                return;
            }

            _self.settings.markup();
        },

		/**
		 * Shows the loaded content
		 *
		 * @param	{object}	$object
		 * @return	{void}
		 */
        _showContent: function ($object) {
            // Add data attribute with the object type
            _self.objects.document.attr(_self._prefixAttributeName('type'), _self.objectData.type);

            _self.cache.object = $object;

            // Call onBeforeShow hook functions
            _self._callHooks(_self.settings.onBeforeShow);

            if (_self.settings.breakBeforeShow) return;
            _self.show();
        },

		/**
		 * Starts the 'inTransition'
		 * @return	{void}
		 */
        _startInTransition: function () {
            switch (_self.transition.in()) {
                case 'scrollTop':
                case 'scrollRight':
                case 'scrollBottom':
                case 'scrollLeft':
                case 'scrollHorizontal':
                case 'scrollVertical':
                    _self.transition.scroll(_self.objects.case, 'in', _self.settings.speedIn);
                    _self.transition.fade(_self.objects.contentInner, 'in', _self.settings.speedIn);
                    break;
                case 'elastic':
                    if (_self.objects.case.css('opacity') < 1) {
                        _self.transition.zoom(_self.objects.case, 'in', _self.settings.speedIn);
                        _self.transition.fade(_self.objects.contentInner, 'in', _self.settings.speedIn);
                    }
                case 'fade':
                case 'fadeInline':
                    _self.transition.fade(_self.objects.case, 'in', _self.settings.speedIn);
                    _self.transition.fade(_self.objects.contentInner, 'in', _self.settings.speedIn);
                    break;
                default:
                    _self.transition.fade(_self.objects.case, 'in', 0);
                    break;
            }

            // End loading.
            _self._loading('end');
            _self.isBusy = false;

            // Set index of the first item opened
            if (!_self.cache.firstOpened) {
                _self.cache.firstOpened = _self.objectData.this;
            }

            // Fade in the info with delay
            _self.objects.info.hide();
            setTimeout(function () {
                _self.transition.fade(_self.objects.info, 'in', _self.settings.speedIn);
            }, _self.settings.speedIn);

            // Call onFinish hook functions
            _self._callHooks(_self.settings.onFinish);
        },

		/**
		 * Processes the content to show
		 *
		 * @return	{void}
		 */
        _processContent: function () {
            _self.isBusy = true;

            // Fade out the info at first
            _self.transition.fade(_self.objects.info, 'out', 0);

            switch (_self.settings.transitionOut) {
                case 'scrollTop':
                case 'scrollRight':
                case 'scrollBottom':
                case 'scrollLeft':
                case 'scrollVertical':
                case 'scrollHorizontal':
                    if (_self.objects.case.is(':hidden')) {
                        _self.transition.fade(_self.objects.contentInner, 'out', 0);
                        _self.transition.fade(_self.objects.case, 'out', 0, 0, function () {
                            _self._loadContent();
                        });
                    } else {
                        _self.transition.scroll(_self.objects.case, 'out', _self.settings.speedOut, function () {
                            _self._loadContent();
                        });
                    }
                    break;
                case 'fade':
                    if (_self.objects.case.is(':hidden')) {
                        _self.transition.fade(_self.objects.case, 'out', 0, 0, function () {
                            _self._loadContent();
                        });
                    } else {
                        _self.transition.fade(_self.objects.case, 'out', _self.settings.speedOut, 0, function () {
                            _self._loadContent();
                        });
                    }
                    break;
                case 'fadeInline':
                case 'elastic':
                    if (_self.objects.case.is(':hidden')) {
                        _self.transition.fade(_self.objects.case, 'out', 0, 0, function () {
                            _self._loadContent();
                        });
                    } else {
                        _self.transition.fade(_self.objects.contentInner, 'out', _self.settings.speedOut, 0, function () {
                            _self._loadContent();
                        });
                    }
                    break;
                default:
                    _self.transition.fade(_self.objects.case, 'out', 0, 0, function () {
                        _self._loadContent();
                    });
                    break;
            }
        },

		/**
		 * Handles events for gallery buttons
		 *
		 * @return	{void}
		 */
        _handleEvents: function () {
            _self._unbindEvents();

            _self.objects.nav.children().not(_self.objects.close).hide();

            // If slideshow is enabled, show play/pause and start timeout.
            if (_self.isSlideshowEnabled()) {
                // Only start the timeout if slideshow autostart is enabled and slideshow is not pausing
                if (
                    (_self.settings.slideshowAutoStart === true || _self.isSlideshowStarted) &&
                    !_self.objects.nav.hasClass(_self.settings.classPrefix + 'paused')
                ) {
                    _self._startTimeout();
                } else {
                    _self._stopTimeout();
                }
            }

            if (_self.settings.liveResize) {
                _self._watchResizeInteraction();
            }

            _self.objects.close.click(function (event) {
                event.preventDefault();
                _self.close();
            });

            if (_self.settings.closeOnOverlayClick === true) {
                _self.objects.overlay.css('cursor', 'pointer').click(function (event) {
                    event.preventDefault();

                    _self.close();
                });
            }

            if (_self.settings.useKeys === true) {
                _self._addKeyEvents();
            }

            if (_self.objectData.isPartOfSequence) {
                _self.objects.nav.attr(_self._prefixAttributeName('ispartofsequence'), true);
                _self.objects.nav.data('items', _self._setNavigation());

                _self.objects.prev.click(function (event) {
                    event.preventDefault();

                    if (_self.settings.navigateEndless === true || !_self.item.isFirst()) {
                        _self.objects.prev.unbind('click');
                        _self.cache.action = 'prev';
                        _self.objects.nav.data('items').prev.click();

                        if (_self.isSlideshowEnabled()) {
                            _self._stopTimeout();
                        }
                    }
                });

                _self.objects.next.click(function (event) {
                    event.preventDefault();

                    if (_self.settings.navigateEndless === true || !_self.item.isLast()) {
                        _self.objects.next.unbind('click');
                        _self.cache.action = 'next';
                        _self.objects.nav.data('items').next.click();

                        if (_self.isSlideshowEnabled()) {
                            _self._stopTimeout();
                        }
                    }
                });

                if (_self.isSlideshowEnabled()) {
                    _self.objects.play.click(function (event) {
                        event.preventDefault();
                        _self._startTimeout();
                    });
                    _self.objects.pause.click(function (event) {
                        event.preventDefault();
                        _self._stopTimeout();
                    });
                }

                // Enable swiping if activated
                if (_self.settings.swipe === true) {
                    // Enable swipe on init
					var viewportScale = 1;
					if ($.isPlainObject($.event.special.swipeleft) && viewportScale <= 1) {
                        _self.objects.case.on('swipeleft', function (event) {
                            event.preventDefault();
                            // Check for pinch-to-zoom Gesture
							viewportScale = screen.width / window.innerWidth;
							if(viewportScale > 1) return;
                            
                            _self.objects.next.click();
                            if (_self.isSlideshowEnabled()) {
                                _self._stopTimeout();
                            }
                        });
                    }
                    if ($.isPlainObject($.event.special.swiperight) && viewportScale <= 1) {
                        _self.objects.case.on('swiperight', function (event) {
                            event.preventDefault();
                            // Check for pinch-to-zoom Gesture
							viewportScale = screen.width / window.innerWidth;
							if(viewportScale > 1) return;
                            
                            _self.objects.prev.click();
                            if (_self.isSlideshowEnabled()) {
                                _self._stopTimeout();
                            }
                        });
                    }
                }
            }
        },

		/**
		 * Adds the key events
		 *
		 * @return	{void}
		 */
        _addKeyEvents: function () {
            $(document).bind('keyup.lightcase', function (event) {
                // Do nothing if lightcase is in process
                if (_self.isBusy) {
                    return;
                }

                switch (event.keyCode) {
                    // Escape key
                    case 27:
                        _self.objects.close.click();
                        break;
                    // Backward key
                    case 37:
                        if (_self.objectData.isPartOfSequence) {
                            _self.objects.prev.click();
                        }
                        break;
                    // Forward key
                    case 39:
                        if (_self.objectData.isPartOfSequence) {
                            _self.objects.next.click();
                        }
                        break;
                }
            });
        },

		/**
		 * Starts the slideshow timeout
		 *
		 * @return	{void}
		 */
        _startTimeout: function () {
            _self.isSlideshowStarted = true;

            _self.objects.play.hide();
            _self.objects.pause.show();

            _self.cache.action = 'next';
            _self.objects.nav.removeClass(_self.settings.classPrefix + 'paused');

            _self.timeout = setTimeout(function () {
                _self.objects.nav.data('items').next.click();
            }, _self.settings.timeout);
        },

		/**
		 * Stops the slideshow timeout
		 *
		 * @return	{void}
		 */
        _stopTimeout: function () {
            _self.objects.play.show();
            _self.objects.pause.hide();

            _self.objects.nav.addClass(_self.settings.classPrefix + 'paused');

            clearTimeout(_self.timeout);
        },

		/**
		 * Sets the navigator buttons (prev/next)
		 *
		 * @return	{object}	items
		 */
        _setNavigation: function () {
            var $links = $((_self.cache.selector || _self.settings.attr)),
                sequenceLength = _self.objectData.sequenceLength - 1,
                items = {
                    prev: $links.eq(_self.objectData.prevIndex),
                    next: $links.eq(_self.objectData.nextIndex)
                };

            if (_self.objectData.currentIndex > 0) {
                _self.objects.prev.show();
            } else {
                items.prevItem = $links.eq(sequenceLength);
            }
            if (_self.objectData.nextIndex <= sequenceLength) {
                _self.objects.next.show();
            } else {
                items.next = $links.eq(0);
            }

            if (_self.settings.navigateEndless === true) {
                _self.objects.prev.show();
                _self.objects.next.show();
            }

            return items;
        },

		/**
		 * Item information/status
		 *
		 */
        item: {
			/**
			 * Verifies if the current item is first item.
			 *
			 * @return	{boolean}
			 */
            isFirst: function () {
                return (_self.objectData.currentIndex === 0);
            },

			/**
			 * Verifies if the current item is first item opened.
			 *
			 * @return	{boolean}
			 */
            isFirstOpened: function () {
                return _self.objectData.this.is(_self.cache.firstOpened);
            },

			/**
			 * Verifies if the current item is last item.
			 *
			 * @return	{boolean}
			 */
            isLast: function () {
                return (_self.objectData.currentIndex === (_self.objectData.sequenceLength - 1));
            }
        },

		/**
		 * Clones the object for inline elements
		 *
		 * @param	{object}	$object
		 * @return	{object}	$clone
		 */
        _cloneObject: function ($object) {
            var $clone = $object.clone(),
                objectId = $object.attr('id');

            // If element is hidden, cache the object and remove
            if ($object.is(':hidden')) {
                _self._cacheObjectData($object);
                $object.attr('id', _self.settings.idPrefix + 'temp-' + objectId).empty();
            } else {
                // Prevent duplicated id's
                $clone.removeAttr('id');
            }

            return $clone.css('display', 'table');
        },

		/**
		 * Verifies if it is a mobile device
		 *
		 * @return	{boolean}
		 */
        isMobileDevice: function () {
            var deviceAgent = navigator.userAgent.toLowerCase(),
                agentId = deviceAgent.match(_self.settings.mobileMatchExpression);

            return agentId ? true : false;
        },

		/**
		 * Verifies if css transitions are supported
		 *
		 * @return	{string|boolean}	The transition prefix if supported, else false.
		 */
        isTransitionSupported: function () {
            var body = _self.objects.body.get(0),
                isTransitionSupported = false,
                transitionMapping = {
                    'transition': '',
                    'WebkitTransition': '-webkit-',
                    'MozTransition': '-moz-',
                    'OTransition': '-o-',
                    'MsTransition': '-ms-'
                };

            for (var key in transitionMapping) {
                if (transitionMapping.hasOwnProperty(key) && key in body.style) {
                    _self.support.transition = transitionMapping[key];
                    isTransitionSupported = true;
                }
            }

            return isTransitionSupported;
        },

		/**
		 * Transition types
		 *
		 */
        transition: {
			/**
			 * Returns the correct transition type according to the status of interaction.
			 *
			 * @return	{string}	Transition type
			 */
            in: function () {
                if (_self.settings.transitionOpen && !_self.cache.firstOpened) {
                    return _self.settings.transitionOpen;
                }
                return _self.settings.transitionIn;
            },

			/**
			 * Fades in/out the object
			 *
			 * @param	{object}	$object
			 * @param	{string}	type
			 * @param	{number}	speed
			 * @param	{number}	opacity
			 * @param	{function}	callback
			 * @return	{void}		Animates an object
			 */
            fade: function ($object, type, speed, opacity, callback) {
                var isInTransition = type === 'in',
                    startTransition = {},
                    startOpacity = $object.css('opacity'),
                    endTransition = {},
                    endOpacity = opacity ? opacity : isInTransition ? 1 : 0;

                if (!_self.isOpen && isInTransition) return;

                startTransition['opacity'] = startOpacity;
                endTransition['opacity'] = endOpacity;

                $object.css(_self.support.transition + 'transition', 'none');
                $object.css(startTransition).show();

                // Css transition
                if (_self.support.transitions) {
                    endTransition[_self.support.transition + 'transition'] = speed + 'ms ease';

                    setTimeout(function () {
                        $object.css(endTransition);

                        setTimeout(function () {
                            $object.css(_self.support.transition + 'transition', '');

                            if (callback && (_self.isOpen || !isInTransition)) {
                                callback();
                            }
                        }, speed);
                    }, 15);
                } else {
                    // Fallback to js transition
                    $object.stop();
                    $object.animate(endTransition, speed, callback);
                }
            },

			/**
			 * Scrolls in/out the object
			 *
			 * @param	{object}	$object
			 * @param	{string}	type
			 * @param	{number}	speed
			 * @param	{function}	callback
			 * @return	{void}		Animates an object
			 */
            scroll: function ($object, type, speed, callback) {
                var isInTransition = type === 'in',
                    transition = isInTransition ? _self.settings.transitionIn : _self.settings.transitionOut,
                    direction = 'left',
                    startTransition = {},
                    startOpacity = isInTransition ? 0 : 1,
                    startOffset = isInTransition ? '-50%' : '50%',
                    endTransition = {},
                    endOpacity = isInTransition ? 1 : 0,
                    endOffset = isInTransition ? '50%' : '-50%';

                if (!_self.isOpen && isInTransition) return;

                switch (transition) {
                    case 'scrollTop':
                        direction = 'top';
                        break;
                    case 'scrollRight':
                        startOffset = isInTransition ? '150%' : '50%';
                        endOffset = isInTransition ? '50%' : '150%';
                        break;
                    case 'scrollBottom':
                        direction = 'top';
                        startOffset = isInTransition ? '150%' : '50%';
                        endOffset = isInTransition ? '50%' : '150%';
                        break;
                    case 'scrollHorizontal':
                        startOffset = isInTransition ? '150%' : '50%';
                        endOffset = isInTransition ? '50%' : '-50%';
                        break;
                    case 'scrollVertical':
                        direction = 'top';
                        startOffset = isInTransition ? '-50%' : '50%';
                        endOffset = isInTransition ? '50%' : '150%';
                        break;
                }

                if (_self.cache.action === 'prev') {
                    switch (transition) {
                        case 'scrollHorizontal':
                            startOffset = isInTransition ? '-50%' : '50%';
                            endOffset = isInTransition ? '50%' : '150%';
                            break;
                        case 'scrollVertical':
                            startOffset = isInTransition ? '150%' : '50%';
                            endOffset = isInTransition ? '50%' : '-50%';
                            break;
                    }
                }

                startTransition['opacity'] = startOpacity;
                startTransition[direction] = startOffset;

                endTransition['opacity'] = endOpacity;
                endTransition[direction] = endOffset;

                $object.css(_self.support.transition + 'transition', 'none');
                $object.css(startTransition).show();

                // Css transition
                if (_self.support.transitions) {
                    endTransition[_self.support.transition + 'transition'] = speed + 'ms ease';

                    setTimeout(function () {
                        $object.css(endTransition);

                        setTimeout(function () {
                            $object.css(_self.support.transition + 'transition', '');

                            if (callback && (_self.isOpen || !isInTransition)) {
                                callback();
                            }
                        }, speed);
                    }, 15);
                } else {
                    // Fallback to js transition
                    $object.stop();
                    $object.animate(endTransition, speed, callback);
                }
            },

			/**
			 * Zooms in/out the object
			 *
			 * @param	{object}	$object
			 * @param	{string}	type
			 * @param	{number}	speed
			 * @param	{function}	callback
			 * @return	{void}		Animates an object
			 */
            zoom: function ($object, type, speed, callback) {
                var isInTransition = type === 'in',
                    startTransition = {},
                    startOpacity = $object.css('opacity'),
                    startScale = isInTransition ? 'scale(0.75)' : 'scale(1)',
                    endTransition = {},
                    endOpacity = isInTransition ? 1 : 0,
                    endScale = isInTransition ? 'scale(1)' : 'scale(0.75)';

                if (!_self.isOpen && isInTransition) return;

                startTransition['opacity'] = startOpacity;
                startTransition[_self.support.transition + 'transform'] = startScale;

                endTransition['opacity'] = endOpacity;

                $object.css(_self.support.transition + 'transition', 'none');
                $object.css(startTransition).show();

                // Css transition
                if (_self.support.transitions) {
                    endTransition[_self.support.transition + 'transform'] = endScale;
                    endTransition[_self.support.transition + 'transition'] = speed + 'ms ease';

                    setTimeout(function () {
                        $object.css(endTransition);

                        setTimeout(function () {
                            $object.css(_self.support.transition + 'transform', '');
                            $object.css(_self.support.transition + 'transition', '');

                            if (callback && (_self.isOpen || !isInTransition)) {
                                callback();
                            }
                        }, speed);
                    }, 15);
                } else {
                    // Fallback to js transition
                    $object.stop();
                    $object.animate(endTransition, speed, callback);
                }
            }
        },

		/**
		 * Calls all the registered functions of a specific hook
		 *
		 * @param	{object}	hooks
		 * @return	{void}
		 */
        _callHooks: function (hooks) {
            if (typeof (hooks) === 'object') {
                $.each(hooks, function (index, hook) {
                    if (typeof (hook) === 'function') {
                        hook.call(_self.origin);
                    }
                });
            }
        },

		/**
		 * Caches the object data
		 *
		 * @param	{object}	$object
		 * @return	{void}
		 */
        _cacheObjectData: function ($object) {
            $.data($object, 'cache', {
                id: $object.attr('id'),
                content: $object.html()
            });

            _self.cache.originalObject = $object;
        },

		/**
		 * Restores the object from cache
		 *
		 * @return	void
		 */
        _restoreObject: function () {
            var $object = $('[id^="' + _self.settings.idPrefix + 'temp-"]');

            $object.attr('id', $.data(_self.cache.originalObject, 'cache').id);
            $object.html($.data(_self.cache.originalObject, 'cache').content);
        },

		/**
		 * Executes functions for a window resize.
		 * It stops an eventual timeout and recalculates dimensions.
		 *
		 * @param	{object}	dimensions
		 * @return	{void}
		 */
        resize: function (event, dimensions) {
            if (!_self.isOpen) return;

            if (_self.isSlideshowEnabled()) {
                _self._stopTimeout();
            }

            if (typeof dimensions === 'object' && dimensions !== null) {
                if (dimensions.width) {
                    _self.cache.object.attr(
                        _self._prefixAttributeName('width'),
                        dimensions.width
                    );
                }
                if (dimensions.maxWidth) {
                    _self.cache.object.attr(
                        _self._prefixAttributeName('max-width'),
                        dimensions.maxWidth
                    );
                }
                if (dimensions.height) {
                    _self.cache.object.attr(
                        _self._prefixAttributeName('height'),
                        dimensions.height
                    );
                }
                if (dimensions.maxHeight) {
                    _self.cache.object.attr(
                        _self._prefixAttributeName('max-height'),
                        dimensions.maxHeight
                    );
                }
            }

            _self.dimensions = _self.getViewportDimensions();
            _self._calculateDimensions(_self.cache.object);

            // Call onResize hook functions
            _self._callHooks(_self.settings.onResize);
        },

		/**
		 * Watches for any resize interaction and caches the new sizes.
		 *
		 * @return	{void}
		 */
        _watchResizeInteraction: function () {
            $(window).resize(_self.resize);
        },

		/**
		 * Stop watching any resize interaction related to _self.
		 *
		 * @return	{void}
		 */
        _unwatchResizeInteraction: function () {
            $(window).off('resize', _self.resize);
        },

		/**
		 * Switches to the fullscreen mode
		 *
		 * @return	{void}
		 */
        _switchToFullScreenMode: function () {
            _self.settings.shrinkFactor = 1;
            _self.settings.overlayOpacity = 1;

            $('html').addClass(_self.settings.classPrefix + 'fullScreenMode');
        },

		/**
		 * Enters into the lightcase view
		 *
		 * @return	{void}
		 */
        _open: function () {
            _self.isOpen = true;

            _self.support.transitions = _self.settings.cssTransitions ? _self.isTransitionSupported() : false;
            _self.support.mobileDevice = _self.isMobileDevice();

            if (_self.support.mobileDevice) {
                $('html').addClass(_self.settings.classPrefix + 'isMobileDevice');

                if (_self.settings.fullScreenModeForMobile) {
                    _self._switchToFullScreenMode();
                }
            }

            if (!_self.settings.transitionIn) {
                _self.settings.transitionIn = _self.settings.transition;
            }
            if (!_self.settings.transitionOut) {
                _self.settings.transitionOut = _self.settings.transition;
            }

            switch (_self.transition.in()) {
                case 'fade':
                case 'fadeInline':
                case 'elastic':
                case 'scrollTop':
                case 'scrollRight':
                case 'scrollBottom':
                case 'scrollLeft':
                case 'scrollVertical':
                case 'scrollHorizontal':
                    if (_self.objects.case.is(':hidden')) {
                        _self.objects.close.css('opacity', 0);
                        _self.objects.overlay.css('opacity', 0);
                        _self.objects.case.css('opacity', 0);
                        _self.objects.contentInner.css('opacity', 0);
                    }
                    _self.transition.fade(_self.objects.overlay, 'in', _self.settings.speedIn, _self.settings.overlayOpacity, function () {
                        _self.transition.fade(_self.objects.close, 'in', _self.settings.speedIn);
                        _self._handleEvents();
                        _self._processContent();
                    });
                    break;
                default:
                    _self.transition.fade(_self.objects.overlay, 'in', 0, _self.settings.overlayOpacity, function () {
                        _self.transition.fade(_self.objects.close, 'in', 0);
                        _self._handleEvents();
                        _self._processContent();
                    });
                    break;
            }

            _self.objects.document.addClass(_self.settings.classPrefix + 'open');
            _self.objects.case.attr('aria-hidden', 'false');
        },

		/**
		 * Shows the lightcase by starting the transition
		 */
        show: function () {
            // Call onCalculateDimensions hook functions
            _self._callHooks(_self.settings.onBeforeCalculateDimensions);

            _self._calculateDimensions(_self.cache.object);

            // Call onAfterCalculateDimensions hook functions
            _self._callHooks(_self.settings.onAfterCalculateDimensions);

            _self._startInTransition();
        },

		/**
		 * Escapes from the lightcase view
		 *
		 * @return	{void}
		 */
        close: function () {
            _self.isOpen = false;

            if (_self.isSlideshowEnabled()) {
                _self._stopTimeout();
                _self.isSlideshowStarted = false;
                _self.objects.nav.removeClass(_self.settings.classPrefix + 'paused');
            }

            _self.objects.loading.hide();

            _self._unbindEvents();

            _self._unwatchResizeInteraction();

            $('html').removeClass(_self.settings.classPrefix + 'open');
            _self.objects.case.attr('aria-hidden', 'true');

            _self.objects.nav.children().hide();
            _self.objects.close.hide();

            // Call onClose hook functions
            _self._callHooks(_self.settings.onClose);

            // Fade out the info at first
            _self.transition.fade(_self.objects.info, 'out', 0);

            switch (_self.settings.transitionClose || _self.settings.transitionOut) {
                case 'fade':
                case 'fadeInline':
                case 'scrollTop':
                case 'scrollRight':
                case 'scrollBottom':
                case 'scrollLeft':
                case 'scrollHorizontal':
                case 'scrollVertical':
                    _self.transition.fade(_self.objects.case, 'out', _self.settings.speedOut, 0, function () {
                        _self.transition.fade(_self.objects.overlay, 'out', _self.settings.speedOut, 0, function () {
                            _self.cleanup();
                        });
                    });
                    break;
                case 'elastic':
                    _self.transition.zoom(_self.objects.case, 'out', _self.settings.speedOut, function () {
                        _self.transition.fade(_self.objects.overlay, 'out', _self.settings.speedOut, 0, function () {
                            _self.cleanup();
                        });
                    });
                    break;
                default:
                    _self.cleanup();
                    break;
            }
        },

		/**
		 * Unbinds all given events
		 *
		 * @return	{void}
		 */
        _unbindEvents: function () {
            // Unbind overlay event
            _self.objects.overlay.unbind('click');

            // Unbind key events
            $(document).unbind('keyup.lightcase');

            // Unbind swipe events
            _self.objects.case.unbind('swipeleft').unbind('swiperight');

            // Unbind navigator events
            _self.objects.prev.unbind('click');
            _self.objects.next.unbind('click');
            _self.objects.play.unbind('click');
            _self.objects.pause.unbind('click');

            // Unbind close event
            _self.objects.close.unbind('click');
        },

		/**
		 * Cleans up the dimensions
		 *
		 * @return	{void}
		 */
        _cleanupDimensions: function () {
            var opacity = _self.objects.contentInner.css('opacity');

            _self.objects.case.css({
                'width': '',
                'height': '',
                'top': '',
                'left': '',
                'margin-top': '',
                'margin-left': ''
            });

            _self.objects.contentInner.removeAttr('style').css('opacity', opacity);
            _self.objects.contentInner.children().removeAttr('style');
        },

		/**
		 * Cleanup after aborting lightcase
		 *
		 * @return	{void}
		 */
        cleanup: function () {
            _self._cleanupDimensions();

            _self.objects.loading.hide();
            _self.objects.overlay.hide();
            _self.objects.case.hide();
            _self.objects.prev.hide();
            _self.objects.next.hide();
            _self.objects.play.hide();
            _self.objects.pause.hide();

            _self.objects.document.removeAttr(_self._prefixAttributeName('type'));
            _self.objects.nav.removeAttr(_self._prefixAttributeName('ispartofsequence'));

            _self.objects.contentInner.empty().hide();
            _self.objects.info.children().empty();

            if (_self.cache.originalObject) {
                _self._restoreObject();
            }

            // Call onCleanup hook functions
            _self._callHooks(_self.settings.onCleanup);

            // Restore cache
            _self.cache = {};
        },

		/**
		 * Returns the supported match media or undefined if the browser
		 * doesn't support match media.
		 *
		 * @return	{mixed}
		 */
        _matchMedia: function () {
            return window.matchMedia || window.msMatchMedia;
        },

		/**
		 * Returns the devicePixelRatio if supported. Else, it simply returns
		 * 1 as the default.
		 *
		 * @return	{number}
		 */
        _devicePixelRatio: function () {
            return window.devicePixelRatio || 1;
        },

		/**
		 * Checks if method is public
		 *
		 * @return	{boolean}
		 */
        _isPublicMethod: function (method) {
            return (typeof _self[method] === 'function' && method.charAt(0) !== '_');
        },

		/**
		 * Exports all public methods to be accessible, callable
		 * from global scope.
		 *
		 * @return	{void}
		 */
        _export: function () {
            window.lightcase = {};

            $.each(_self, function (property) {
                if (_self._isPublicMethod(property)) {
                    lightcase[property] = _self[property];
                }
            });
        }
    };

    _self._export();

    $.fn.lightcase = function (method) {
        // Method calling logic (only public methods are applied)
        if (_self._isPublicMethod(method)) {
            return _self[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return _self.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.lightcase');
        }
    };
})(jQuery);

// Count Up 1.0.1 by Gareth Nolan, Copyright 2015. MIT license
/* 
 *   jQuery Numerator Plugin 0.2.1
 *   https://github.com/garethdn/jquery-numerator
 *
 *   Copyright 2015, Gareth Nolan
 *   http://ie.linkedin.com/in/garethnolan/

 *   Based on jQuery Boilerplate by Zeno Rocha with the help of Addy Osmani
 *   http://jqueryboilerplate.com
 *
 *   Licensed under the MIT license:
 *   http://www.opensource.org/licenses/MIT
 */

;(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD is used - Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        // Neither AMD nor CommonJS used. Use global variables.
        if (typeof jQuery === 'undefined') {
            throw 'jquery-numerator requires jQuery to be loaded first';
        }
        factory(jQuery);
    }
}(function ($) {

    var pluginName = "numerator",
    defaults = {
        easing: 'swing',
        duration: 500,
        delimiter: undefined,
        rounding: 0,
        toValue: undefined,
        fromValue: undefined,
        queue: false,
        onStart: function(){},
        onStep: function(){},
        onProgress: function(){},
        onComplete: function(){}
    };

    function Plugin ( element, options ) {
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {

        init: function () {
            this.parseElement();
            this.setValue();
        },

        parseElement: function () {
            var elText = $.trim($(this.element).text());

            this.settings.fromValue = this.settings.fromValue || this.format(elText);
        },

        setValue: function() {
            var self = this;

            $({value: self.settings.fromValue}).animate({value: self.settings.toValue}, {

                duration: parseInt(self.settings.duration, 10),

                easing: self.settings.easing,

                start: self.settings.onStart,

                step: function(now, fx) {
                    $(self.element).text(self.format(now));
                    // accepts two params - (now, fx)
                    self.settings.onStep(now, fx);
                },

                // accepts three params - (animation object, progress ratio, time remaining(ms))
                progress: self.settings.onProgress,

                complete: self.settings.onComplete
            });
        },

        format: function(value){
            var self = this;

            if ( parseInt(this.settings.rounding ) < 1) {
                value = parseInt(value, 10);
            } else {
                value = parseFloat(value).toFixed( parseInt(this.settings.rounding) );
            }

            if (self.settings.delimiter) {
                return this.delimit(value)
            } else {
                return value;
            } 
        },

        // TODO: Add comments to this function
        delimit: function(value){
            var self = this;

            value = value.toString();

            if (self.settings.rounding && parseInt(self.settings.rounding, 10) > 0) {
                var decimals = value.substring( (value.length - (self.settings.rounding + 1)), value.length ),
                    wholeValue = value.substring( 0, (value.length - (self.settings.rounding + 1)));

                return self.addDelimiter(wholeValue) + decimals;
            } else {
                return self.addDelimiter(value);
            }
        },

        addDelimiter: function(value){
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.settings.delimiter);
        }
    };

    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( $.data( this, "plugin_" + pluginName ) ) {
                $.data(this, 'plugin_' + pluginName, null);
            }
            $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
        });
    };

}));

// Sort Table 1.4.0 by JP Larson, Copyright 2020 Fiserv. All rights reserved.
(function (jQuery) {
    jQuery.fn.tableToJSON = function (options) {
        var settings = jQuery.extend(true, {
            priority: 0,
            packageName: "tableToJSON",
            success: function (e) {
                //console.log(e);
            },
            error: function (e) {
                console.log(e);
            }
        }, options),
            tableToJSON = function (obj, settings, instanceObj) {
                const _proto = this;
                _proto.instance = instanceObj;
                _proto.settings = settings;
                _proto.obj = obj;
                _proto.index = jQuery(obj).index();
                _proto.parse = function (obj) {
                    var parseObj = {
                        name: obj.id ? obj.id : console.log("tableToJSON requires an ID"),
                        data: []
                    },
                        cleanRegex = /[\s\,]/gi,
                        columns = jQuery(obj).children("thead").children("tr").children("th"),
                        rows = jQuery(obj).children("tbody").children("tr");
                    for (let m = 0; m < rows.length; m++) {
                        var rowObj = {},
                            cells = rows.eq(m).children('td');
                        for (let g = 0; g < columns.length; g++) {

                            if (columns[g].innerHTML.length > 0) {
                                const arrayRegex = /\[(.+\,.+)+\]/gi;
                                const thisCell = cells.eq(g);
                                if (thisCell) {
                                    if (arrayRegex.test(thisCell.get(0).innerHTML)) {
                                        var thisArray = thisCell.get(0).innerHTML.replace(/[\[\]]/gi, '').split(", ");
                                        rowObj[columns[g].innerHTML.replace(cleanRegex, '_')] = thisArray;
                                    } else {
                                        rowObj[columns[g].innerHTML.replace(cleanRegex, '_')] = thisCell.get(0) ? thisCell.get(0).innerHTML : "";
                                    }
                                }
                            }
                        }
                        parseObj.data.push(rowObj);
                    }
                    return parseObj;
                }
                _proto.parsed = _proto.parse(obj);
                _proto.clean = function () {
                    //document.packageManager.unregister(this.obj, this.settings.packageName);
                }
                _proto.error = function (e) {
                    settings.error(e);
                }
                _proto.callback = function (e) {
                    settings.success(e);
                }
            },
            setSettings = function (thisObj, instanceObj) {
                if (thisObj[settings.packageName]) {
                    if (thisObj[settings.packageName].settings.priority <= settings.priority) {
                        thisObj[settings.packageName] = new tableToJSON(thisObj, settings, instanceObj);
                    }
                } else {
                    thisObj[settings.packageName] = new tableToJSON(thisObj, settings, instanceObj);
                }
            },
            init = function (obj) {
                //document.packageManager.register(settings.packageName, obj);
                for (var i = 0, n = obj.length; i < n; i++) {
                    setSettings(obj.eq(i).get(0), obj);
                }
            };
        init(this);
        return this;
    };
}(jQuery));

(function (jQuery) {
    jQuery.fn.JSONToDatabase = function (options) {
        var settings = jQuery.extend(true, {
            priority: 0,
            packageName: "JSONToDatabase",
            databaseName: location.hostname,
            version: 1,
            success: function (e) {
                //console.log(e);
            },
            error: function (e) {
                console.log(e);
            }
        }, options),
            JSONToDatabase = function (obj, settings, instanceObj) {
                const _proto = this;
                _proto.instance = instanceObj;
                _proto.settings = settings;
                _proto.obj = obj;
                var timer;
                _proto.populateDatabase = function (obj) {
                    if (obj.tableToJSON) {
                        const data = obj.tableToJSON.parsed.data;
                        const versionRequest = indexedDB.open(settings.databaseName);
                        var version;
                        versionRequest.onsuccess = function (e) {
                            const db = e.target.result;
                            version = db.version + 1;
                            db.close();
                            const request = indexedDB.open(settings.databaseName, version);
                            request.onupgradeneeded = function (e) {
                                const db = e.target.result;
                                const create = function () {
                                    const store = db.createObjectStore(obj.tableToJSON.parsed.name, { autoIncrement: true });
                                    for (keys in data[0]) {
                                        store.createIndex(keys, keys);
                                    }
                                    for (var c = 0, t = data.length; c < t; c++) {
                                        store.put(data[c]);
                                    }
                                }
                                if (!db.objectStoreNames.contains(obj.tableToJSON.parsed.name)) {
                                    create();
                                } else {
                                    const store = db.deleteObjectStore(obj.tableToJSON.parsed.name);
                                    create();
                                }
                                _proto.callback(settings.packageName + ": Indexeddb table was successfully created/updated.");
                            };
                            request.onsuccess = function (e) {
                                const db = e.target.result;
                                db.close();
                            };
                            request.onblocked = function (e) {
                                e.error = "blocked";
                                _proto.error(e);
                                clearTimeout(timer);
                                timer = setTimeout(function () {
                                    _proto.populateDatabase(obj);
                                }, 100);
                            };
                            request.onerror = function (e) {
                                e.error = "error";
                                _proto.error(e);
                            };
                            return true;
                        }
                    } else {

                        jQuery(obj).tableToJSON();
                        return _proto.populateDatabase(obj);
                    }
                }
                _proto.populated = _proto.populateDatabase(obj);
                _proto.clean = function () {
                    //document.packageManager.unregister(this.obj, this.settings.packageName);
                }
                _proto.error = function (e) {
                    settings.error(e);
                }
                _proto.callback = function (e) {
                    settings.success(e);
                }
            },
            setSettings = function (thisObj, instanceObj) {
                if (thisObj[settings.packageName]) {
                    if (thisObj[settings.packageName].settings.priority <= settings.priority) {
                        thisObj[settings.packageName] = new JSONToDatabase(thisObj, settings, instanceObj);
                    }
                } else {
                    thisObj[settings.packageName] = new JSONToDatabase(thisObj, settings, instanceObj);
                }
            },
            init = function (obj) {
                //document.packageManager.register(settings.packageName, obj);
                for (var i = 0, n = obj.length; i < n; i++) {
                    setSettings(obj.eq(i).get(0), obj);
                }
            };
        init(this);
        return this;
    };
}(jQuery));

(function (jQuery) {
    jQuery.fn.databaseSearch = function (options) {
        var settings = jQuery.extend(true, {
            priority: 0,
            packageName: "databaseSearch",
            databaseName: location.hostname,
            tableID: "Sort-Table",
            containerClass: "Sort-Table",
            nullEntry: jQuery("<p>No entries matched the criteria.</p>"),
            outputAllEntries: false,
            searchByColumns: ["Name", "Title", "Phone Number", "Email Address", "Manager", "Location"],
            success: function (e) {
                //console.log(e);
            },
            error: function (e) {
                console.log(e);
            }
        }, options),
            databaseSearch = function (obj, settings, instanceObj) {
                const _proto = this;
                _proto.instance = instanceObj;
                _proto.settings = settings;
                _proto.obj = obj;
                _proto.stringClean = function (string) {
                    const cleanRegex = /([\w\d\_\-])/gi;
                    if (string.toString().match(cleanRegex)) {
                        var cleanString = string.toString().match(cleanRegex).join('');
                    }
                    return cleanString;
                }
                _proto.tableFound = function (db) {
                    var tableFound = false;
                    for (var f = 0, g = db.objectStoreNames.length; f < g; f++) {
                        if (db.objectStoreNames[f] == settings.tableID) {
                            tableFound = true;
                            break;
                        }
                    }
                    return tableFound;
                }
                _proto.container = jQuery('<div class="' + settings.containerClass + ' loading" data-sort-table="' + settings.tableID + '"></div>');
                _proto.arrange = function (result) {
                    const arrangeBy = jQuery('[name=arrange]:checked').val();
                    const orderBy = jQuery('[name=order]').val();
                    const resultArray = function (result) {
                        var resultArray = [];
                        for (key in result) {
                            resultArray.push(result[key]);
                        }
                        return resultArray;
                    }
                    var order = 'Ascending';
                    function compareValues(key, order) {
                        return function (a, b) {
                            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                                // property doesn't exist on either object
                                return 0;
                            }

                            const varA = (typeof a[key] === 'string') ?
                                a[key].toUpperCase() : a[key];
                            const varB = (typeof b[key] === 'string') ?
                                b[key].toUpperCase() : b[key];

                            let comparison = 0;
                            if (varA > varB) {
                                comparison = 1;
                            } else if (varA < varB) {
                                comparison = -1;
                            }
                            return (
                                (order == 'Descending') ? (comparison * -1) : comparison
                            );
                        };
                    }
                    if (arrangeBy) {
                        var sortedValue = resultArray(result).sort(compareValues(arrangeBy, orderBy));
                        return sortedValue;
                    }
                    return result;
                }
                _proto.normalizeString = function (thisString, stringCase) {
                    const thisText = _proto.getHTMLText(thisString).toLowerCase();
                    if (!thisText) return;
                    const capitalize = function (letter) {
                        return letter.toUpperCase();
                    }
                    stringCase = stringCase ? stringCase : "Title";
                    switch (stringCase) {
                        case "Title":
                            const firstLetterWordRegex = /(^\w{1})|(\s{1}\w{1})/g;
                            return thisText.replace(firstLetterWordRegex, capitalize);
                        case "Sentence":
                            const firstLetterRegex = /(^\w{1})/g;
                            return thisText.replace(firstLetterRegex, capitalize);
                        case "Lower":
                            return thisText.toLowerCase();
                        case "Upper":
                            return thisText.toUpperCase();
                        default:
                            return thisText;
                    }
                }
                _proto.getHTMLText = function (htmlString) {
                    if (htmlString.length <= 0 || typeof htmlString !== "string") return;
                    const lineReturnRegex = /[\n\r]+/gi;
                    const parsedHTML = new DOMParser().parseFromString(htmlString, "text/html").body.childNodes;
                    const getTextFromNodes = function (nodeList, textString) {
                        textString = textString ? textString : "";
                        for (let i = 0; i < nodeList.length; i++) {
                            const thisNode = nodeList[i];
                            if (thisNode.nodeType !== 3) return getTextFromNodes(thisNode.childNodes, textString);
                            const cleanText = thisNode.wholeText.replace(lineReturnRegex, "");
                            if (cleanText.length <= 0) return;
                            return textString += cleanText;
                        }
                    }
                    return getTextFromNodes(parsedHTML);
                }
                _proto.createForm = function () {
                    var retries = 0;
                    var form = jQuery('<form name=' + settings.databaseName + '></form>'),
                        label = jQuery('<label></label>'),
                        span = jQuery('<span></span>'),
                        select = jQuery('<select></select>'),
                        option = jQuery('<option></option>'),
                        input = jQuery('<input>'),
                        div = jQuery('<div></div>'),
                        fieldset = jQuery('<fieldset></fieldset>'),
                        legend = jQuery('<legend></legend>'),
                        button = jQuery('<button></button>'),
                        downArrow = function () {
                            this.obj = span.clone();
                            this.obj.addClass("fa-chevron-down");
                            return this;
                        },
                        resetButton = function () {
                            const self = this;
                            this.obj = button.clone();
                            this.obj.attr({
                                'type': 'reset',
                                'class': 'Button1 fa-refresh'
                            });
                            let hashFragment = getQueryString("sort");
                            if (hashFragment !== '') {
                                _proto.settings.sort = {};
                                _proto.settings.sort.default = hashFragment;
                            }
                            console.log(_proto.settings.sort);
                            if (_proto.settings.sort && _proto.settings.sort.default) {
                                const value = _proto.settings.sort.default.replace(/(\s)/gi, '_');
                                this.arrangeByDefault = jQuery('[name=arrange][value=' + value + ']');
                            }
                            if (self.arrangeByDefault) {
                                self.arrangeByDefault.trigger('click');
                            }
                            this.obj.on('click', function (e) {
                                e.preventDefault();
                                form.get(0).reset();
                                if (self.arrangeByDefault) {
                                    self.arrangeByDefault.get(0).checked = true;
                                }
                                form.trigger('change');
                                return false;
                            });
                            this.span = span.clone();
                            this.span.html("Reset");
                            this.obj.append(this.span);
                            return this;
                        },
                        orderSelect = function () {
                            this.obj = label.clone();
                            this.select = select.clone();
                            this.select.attr('name', 'order');
                            this.select.append(option.clone().html("Ascending"));
                            this.select.append(option.clone().html("Descending"));
                            this.obj.append(this.select);
                            this.downArrow = new downArrow();
                            this.obj.append(this.downArrow.obj);
                            return this;
                        },
                        arrangeFieldset = function () {
                            this.obj = fieldset.clone();
                            this.obj.append(legend.clone().html("Sort By"));
                            this.div = div.clone();
                            this.obj.append(this.div);
                            return this;
                        },
                        settingsButton = function () {
                            var _thisProto = this;
                            _thisProto.obj = button.clone();
                            _thisProto.toggle = function (e) {
                                if (_thisProto.obj.get(0) == e.target || jQuery(e.target).closest('button').get(0) == _thisProto.obj.get(0)) {
                                    if (_proto.container.hasClass('open-settings')) {
                                        _proto.container.removeClass('open-settings');
                                    } else {
                                        _proto.container.addClass('open-settings');
                                    }
                                } else if (jQuery(e.target).closest('div.settings').length <= 0 && _proto.container.hasClass('open-settings')){
                                    _proto.container.removeClass('open-settings');
                                }
                            }
                            jQuery('body').on('click', function (e) {
                                _thisProto.toggle(e);
                            });
                            _thisProto.obj.attr({
                                "class": "Button1 fa-sort",
                                "type": "button"
                            });
                            _thisProto.span = span.clone();
                            _thisProto.span.html('Sort');
                            _thisProto.obj.append(this.span);
                            return this;
                        },
                        settingsContainer = function () {
                            this.obj = div.clone();
                            this.obj.addClass('settings');
                            this.fieldset = new arrangeFieldset();
                            this.obj.append(this.fieldset.obj);
                            this.select = new orderSelect();
                            this.obj.append(this.select.obj);
                            return this;
                        },
                        thisSettingsContainer = new settingsContainer(),
                        arrangeRadios = function (name) {
                            var cleanRegex = /(\_)/gi,
                                cleanName = name.replace(cleanRegex, ' ');
                            this.obj = label.clone();
                            this.obj.attr({
                                'data-key': cleanName
                            })
                            this.span = span.clone();
                            this.span.html(cleanName);
                            this.obj.append(this.span);
                            this.input = input.clone();
                            this.input.attr({
                                'type': "radio",
                                'name': "arrange",
                                'value': name
                            });
                            let hashFragment = getQueryString('sort');
                            if (hashFragment !== '') {
                                _proto.settings.sort = {};
                                _proto.settings.default = hashFragment;
                            }
                            if (_proto.settings.sort && _proto.settings.sort.default && name === _proto.settings.sort.default.replace(/\s/gi, "_")) {
                                this.input.get(0).checked = true;
                            }
                            this.obj.append(this.input);
                            this.obj.append(this.span);
                            return this;
                        },
                        sortValues = function (valueList) {
                            const monthList = {
                                "January": 1,
                                "February": 2,
                                "March": 3,
                                "April": 4,
                                "May": 5,
                                "June": 6,
                                "July": 7,
                                "August": 8,
                                "September": 9,
                                "October": 10,
                                "November": 11,
                                "December": 12
                            };
                            const isMonthList = function (valueList, monthList) {
                                for (let i = 0; i < valueList.length; i++) {
                                    const thisValue = valueList[i];
                                    if (!monthList.hasOwnProperty(thisValue)) return false;
                                }
                                return true;
                            }
                            if (!isMonthList(valueList, monthList)) return valueList.sort();
                            const sortMonths = function (a, b) {
                                return monthList[a] - monthList[b];
                            }

                            return valueList.sort(sortMonths);
                        },
                        createSelect = function (name, inputType, values) {
                            const sortedValues = sortValues(values);
                            const cleanRegex = /(\_)/gi;
                            const cleanName = name.replace(cleanRegex, ' ');
                            const thisLabel = label.clone().append(span.clone().html('Search by ' + cleanName));
                            const thisSelect = select.clone().attr('name', name).append(option.clone().attr('value', '').html('Select ' + cleanName));
                            const options = [];
                            for (let i = 0; i < sortedValues.length; i++) {
                                const thisValue = sortedValues[i];
                                var thisOption = option.clone().html(thisValue);
                                thisSelect.append(thisOption);
                            }
                            thisLabel.append(thisSelect).attr('data-key', cleanName).append(new downArrow().obj);
                            return thisLabel;
                        };
                    jQuery(_proto.obj).after(_proto.container);
                    _proto.container.prepend(form);
                    _proto.queryForm(form);
                    const request = indexedDB.open(settings.databaseName);
                    request.onupgradeneeded = function (e) {
                        //console.log(e);
                    }
                    request.onsuccess = function (e) {
                        const db = e.target.result;
                        var tryForm = function () {
                            if (_proto.tableFound(db)) {
                                const tx = db.transaction(settings.tableID, "readonly");
                                const store = tx.objectStore(settings.tableID);
                                const cursorRequest = store.openCursor();
                                var result = [];
                                const buildform = function (result) {
                                    const addValue = function (oldArray, value) {
                                        const normalizedValue = _proto.normalizeString(value);
                                        if (oldArray.indexOf(normalizedValue) === -1) {
                                            oldArray.push(normalizedValue);
                                        }
                                        return oldArray;
                                    }
                                    for (let i = 0, n = store.indexNames.length; i < n; i++) {
                                        const indexName = store.indexNames[i];
                                        if (_proto.settings.searchByColumns.indexOf(indexName) !== -1) {
                                            let values = [];
                                            const storeIndexKeyPath = store.index(indexName).keyPath;
                                            for (let t = 0, y = result.length; t < y; t++) {
                                                let theValues = result[t][storeIndexKeyPath];
                                                if (theValues) {
                                                    if (typeof theValues == "object") {
                                                        for (let g = 0, c = theValues.length; g < c; g++) {
                                                            values = addValue(values, theValues[g]);
                                                        }
                                                    } else {
                                                        values = addValue(values, theValues);
                                                    }
                                                }
                                            }
                                            if (settings.sort) {
                                                const thisRadio = new arrangeRadios(storeIndexKeyPath);
                                                thisSettingsContainer.fieldset.div.append(thisRadio.obj);
                                            }
                                            if (settings.searchByColumns.indexOf(storeIndexKeyPath) !== -1) {
                                                const thisInput = createSelect(storeIndexKeyPath, "select", values);
                                                form.append(thisInput);
                                            }
                                        }
                                    }
                                    if (settings.sort) {
                                        form.prepend(thisSettingsContainer.obj);
                                        form.append(new settingsButton().obj);
                                    }
                                    form.append(new resetButton().obj);
                                }
                                cursorRequest.onsuccess = function (e) {
                                    const cursor = e.target.result;
                                    if (cursor) {
                                        result.push(cursor.value);
                                        cursor.continue();
                                    } else {
                                        buildform(result);
                                    }
                                }
                            } else {
                                retries++;
                                if (retries < 10) {
                                    var timer = setTimeout(function () {
                                        tryForm();
                                    }, 100);
                                } else {
                                    _proto.error("IndexedDB was unable to find the table " + settings.tableID + ". Try clearing the cache.");
                                }
                            }
                            _proto.callback(settings.packageName + ": Search form successfully created.");
                        }
                        tryForm();
                        db.close();
                    }
                    request.onerror = function (e) {
                        _proto.error(e);
                    }
                    request.onblocked = function (e) {
                        _proto.error(e);
                    }

                }
                _proto.buildResult = function (result) {

                    //If sort is enabled
                    if (settings.sort) {
                        var result = _proto.arrange(result);
                    }

                    const build = jQuery('<div class="results"></div>'),
                        dl = jQuery('<dl></dl>'),
                        dt = jQuery('<dt></dt>'),
                        dd = jQuery('<dd></dd>'),
                        link = jQuery('<a href=""></a>'),
                        cleanRegex = /(\_)/gi;
                    if (typeof result == "object" && Object.keys(result).length > 0) {
                        var firstKey;
                        for (primaryKey in result) {
                            if (typeof result[primaryKey] === "function") continue;
                            const newDl = dl.clone().attr('data-key', primaryKey);
                            for (keys in result[primaryKey]) {
                                var cleanKey = keys.replace(cleanRegex, ' ');
                                const newDt = dt.clone().html(cleanKey).attr('data-key', cleanKey);
                                if (result[primaryKey][keys]) {
                                    newDl.append(newDt);
                                }
                                if (typeof result[primaryKey][keys] == "object") {
                                    for (var g = 0, c = result[primaryKey][keys].length; g < c; g++) {
                                        const newDd = dd.clone().html(result[primaryKey][keys][g]).attr('data-key', cleanKey);
                                        newDl.append(newDd);
                                    }
                                } else {
                                    const newDd = dd.clone().html(result[primaryKey][keys]).attr('data-key', cleanKey);
                                    newDl.append(newDd);
                                }
                            }
                            const id = settings.tableID + "-" + primaryKey;
                            if (_proto.settings.detailsLinkText) {
                                const cardLink = link.clone().attr('href', '#' + id).html(_proto.settings.detailsLinkText).addClass('details');
                                cardLink.html(_proto.settings.detailsLinkText)
                                cardLink.addClass('details');
                                if (_proto.settings.collectionText){
                                    cardLink.attr("data-rel", "lightcase:" + _proto.settings.collectionText);
                                }
                                cardLink.lightcase();
                                newDl.append(dt.clone().html("link").attr('data-key', 'link'));
                                newDl.append(dd.clone().html(cardLink).attr('data-key', 'link'));
                            }
                            newDl.attr('id', id)
                            build.append(newDl);
                        }
                        return build;
                    }
                    return build.clone().append(settings.nullEntry);
                }
                _proto.outputAllEntries = function () {
                    if (settings.outputAllEntries) {
                        _proto.container.addClass('loading');
                        const request = indexedDB.open(settings.databaseName);
                        request.onsuccess = function (e) {
                            const db = e.target.result;
                            if (_proto.tableFound(db)) {
                                const tx = db.transaction(settings.tableID, "readonly");
                                var result = {};
                                const row = tx.objectStore(settings.tableID);
                                const cursorRequest = row.openCursor();
                                cursorRequest.onsuccess = function (e) {
                                    const cursor = e.target.result;
                                    if (cursor) {
                                        result[cursor.primaryKey] = cursor.value;
                                        cursor.continue();
                                    } else {
                                        if (_proto.container.find('div.results').length > 0) {
                                            _proto.container.find('div.results').replaceWith(_proto.buildResult(result));
                                        } else {
                                            _proto.container.append(_proto.buildResult(result));
                                        }
                                    }
                                }
                            }
                            db.close();
                            _proto.callback(settings.packageName + ": All data successfully loaded");
                        }
                        request.onblocked = function (e) {
                            _proto.error(e);
                        }
                        request.onerror = function (e) {
                            _proto.error(e);
                        }
                    }
                    _proto.container.find('div.results').remove();
                }
                _proto.queryForm = function (input) {
                    var activeQueries = {};
                    const query = function (e) {
                        _proto.container.addClass('loading');
                        if (e.target.name !== "arrange" && e.target.name !== "order" ){
                            const keyPath = e.target.name;
                            const keyValue = e.target.value;
                            if (keyValue) {
                                activeQueries[keyPath] = keyValue;
                            } else {
                                delete activeQueries[keyPath];
                            }
                        }
                        if (e.target.nodeName == "FORM") {
                            activeQueries = {};
                        }
                        const request = indexedDB.open(settings.databaseName);
                        request.onsuccess = function (e) {
                            const db = e.target.result;
                            const tx = db.transaction(settings.tableID, "readonly");
                            var result = {};
                            if (Object.keys(activeQueries).length > 0) {
                                for (let activeKeys in activeQueries) {
                                    const row = tx.objectStore(settings.tableID);
                                    const cursorRequest = row.openCursor();
                                    cursorRequest.onsuccess = function (e) {
                                        const cursor = e.target.result;
                                        if (cursor) {
                                            const parsedQueryKey = _proto.normalizeString(activeQueries[activeKeys]);
                                            if (typeof cursor.value[activeKeys] == "object") {
                                                for (var g = 0, c = cursor.value[activeKeys].length; g < c; g++) {
                                                    const thisParsedCursorKeyG = _proto.normalizeString(cursor.value[activeKeys][g]);
                                                    if (thisParsedCursorKeyG === parsedQueryKey) {
                                                        result[cursor.primaryKey] = cursor.value;
                                                    }
                                                }
                                            } else {
                                                const parsedCursorKey = _proto.normalizeString(cursor.value[activeKeys]);
                                                if (parsedCursorKey === parsedQueryKey) {
                                                    result[cursor.primaryKey] = cursor.value;
                                                }
                                            }
                                            cursor.continue();
                                        } else {
                                            for (keys in activeQueries) {
                                                const thisActiveQuery = activeQueries[keys];
                                                const parsedQueriesKey = _proto.normalizeString(thisActiveQuery);
                                                for (let primaryKey in result) {
                                                    const thisPrimaryResult = result[primaryKey];
                                                    if (typeof thisPrimaryResult[keys] === "object") {
                                                        var match = false;
                                                        for (var g = 0, c = thisPrimaryResult[keys].length; g < c; g++) {
                                                            const thisParsedPrimaryResult = _proto.normalizeString(thisPrimaryResult[keys][g]);
                                                            if (thisParsedPrimaryResult === parsedQueriesKey) {
                                                                match = true;
                                                            }
                                                        }
                                                        if (!match) {
                                                            delete result[primaryKey];
                                                        }
                                                    } else {
                                                        const parsedPrimaryKey = _proto.normalizeString(thisPrimaryResult[keys]);
                                                        if (parsedPrimaryKey !== parsedQueriesKey) {
                                                            delete result[primaryKey];
                                                        }
                                                    }
                                                }
                                            }
                                            if (_proto.container.find('div.results').length > 0) {
                                                _proto.container.find('div.results').replaceWith(_proto.buildResult(result));
                                            } else {
                                                _proto.container.append(_proto.buildResult(result));
                                            }
                                        }
                                    }
                                }
                            } else {
                                _proto.outputAllEntries();
                            }
                            _proto.callback(settings.packageName + ": Database successfully queried");
                            db.close();
                        }
                        request.onerror = function (e) {
                            _proto.error(e);
                        }
                        request.onblocked = function (e) {
                            _proto.error(e);
                        }
                    }
                    input.on('change', query);
                }
                _proto.clean = function () {
                    //document.packageManager.unregister(this.obj, this.settings.packageName);
                }
                _proto.error = function (e) {
                    settings.error(e);
                }
                _proto.callback = function (e) {
                    var timer = setTimeout(function () {
                        _proto.container.removeClass('loading');
                    }, 100)
                    settings.success(e);
                }
                _proto.createForm();
                _proto.outputAllEntries();
            },
            setSettings = function (thisObj, instanceObj) {
                if (thisObj[settings.packageName]) {
                    if (thisObj[settings.packageName].settings.priority <= settings.priority) {
                        thisObj[settings.packageName] = new databaseSearch(thisObj, settings, instanceObj);
                    }
                } else {
                    thisObj[settings.packageName] = new databaseSearch(thisObj, settings, instanceObj);
                }
            },
            getQueryString = function (str) {
                let params = (new URL(document.location.href)).searchParams;
                let querylink = "";
                params.forEach((value, key) => {
                    if (key.toLowerCase() === str) {
                        querylink = value;
                    }
                });
                return querylink;
            },
            init = function (obj) {
                //document.packageManager.register(settings.packageName, obj);
                for (var i = 0, n = obj.length; i < n; i++) {
                    setSettings(obj.eq(i).get(0), obj);
                }
            };
        init(this);
        return this;
    };
}(jQuery));

(function (jQuery) {
    jQuery.fn.sortTable = function (options) {
        var settings = jQuery.extend(true, {
            priority: 0,
            packageName: "sortTable",
            databaseName: location.hostname,
            tableID: "Sort-Table",
            containerClass: "Sort-Table",
            url: "",
            nullEntry: jQuery("<p>No entries matched the criteria.</p>"),
            outputAllEntries: true,
            searchByColumns: ["Name", "Title", "Phone Number", "Email Address", "Manager", "Location", "Department"],
            expiration: {
                lastModified: false,
                session: true,
                interval: 1,
                timeScale: "days",
                storageName: "Table-Update"
            },
            success: function (e) {
                //console.log(e);
            },
            error: function (e) {
                console.log(e);
            }
        }, options),
            sortTable = function (obj, settings, instanceObj) {
                const _proto = this;
                _proto.instance = instanceObj;
                _proto.settings = settings;
                _proto.obj = obj;
                const storageUpdateName = settings.expiration.storageName + "-" + settings.tableID + "-" + settings.databaseName;
                _proto.storageType = function () {
                    if (settings.expiration.session) {
                        return sessionStorage;
                    } else {
                        return localStorage;
                    }
                }
                _proto.loadTable = function () {
                    if (settings.expiration.lastModified) {
                        var client = new XMLHttpRequest();
                        client.open("GET", settings.url, true);
                        client.send();
                        client.onreadystatechange = function () {
                            if (this.readyState == this.HEADERS_RECEIVED) {
                                var lastModified = client.getResponseHeader('Last-Modified');
                                if (_proto.storageType().getItem(storageUpdateName)) {
                                    if (_proto.storageType().getItem(storageUpdateName) === lastModified) {
                                        client.abort();
                                    } else {
                                        _proto.storageType().setItem(storageUpdateName, lastModified);
                                    }
                                } else {
                                    _proto.storageType().setItem(storageUpdateName, lastModified);
                                }
                            }
                        }
                        client.onabort = function () {
                            _proto.launchSearch();
                        }
                        client.onloadend = function () {
                            _proto.launchDatabase(client);
                        }
                    } else {
                        const date = new Date();
                        const time = date.toUTCString();
                        const intervalMultiplicative = {
                            minutes: 60000,
                            hours: 3600000,
                            days: 86400000,
                            months: 2592000000,
                            years: 31536000000
                        }
                        var interval;
                        if (_proto.storageType().getItem(storageUpdateName)) {
                            var lastDate = new Date(_proto.storageType().getItem(storageUpdateName));
                            const lastUpdate = lastDate;
                            const timeAddition = intervalMultiplicative[settings.expiration.timeScale] * settings.expiration.interval;
                            if (date.getTime() > lastUpdate.getTime() + timeAddition) {
                                _proto.ajaxTable(time);
                            } else {
                                _proto.launchSearch();
                            }
                        } else {
                            _proto.ajaxTable(time);
                        }

                    }
                }
                _proto.ajaxTable = function (time) {
                    _proto.storageType().setItem(storageUpdateName, time);
                    var client = new XMLHttpRequest();
                    client.open("GET", settings.url, true);
                    client.send();
                    client.onloadend = function () {
                        _proto.launchDatabase(client);
                    }
                }
                _proto.launchDatabase = function (client) {
                    const table = jQuery(client.responseText);
                    if (typeof indexedDB == "object") {
                        table.JSONToDatabase({
                            databaseName: settings.databaseName,
                            success: function () {
                                _proto.launchSearch();
                            }
                        });
                    } else {
                        _proto.storageType().removeItem(storageUpdateName);
                        jQuery(_proto.obj).after(table);
                        _proto.error('IndexedDB is not supported in this browser.');
                    }
                }
                _proto.launchSearch = function () {
                    if (typeof indexedDB == "object") {
                        jQuery(_proto.obj).databaseSearch(settings);
                    } else {
                        _proto.error('IndexedDB is not supported in this browser.');
                    }
                }
                _proto.clean = function () {
                    _proto.storageType().removeItem(storageUpdateName);
                }
                _proto.error = function (e) {
                    settings.error(e);
                }
                _proto.callback = function (e) {
                    settings.error(e);
                }
                _proto.loadTable();

            },
            setSettings = function (thisObj, instanceObj) {
                if (thisObj[settings.packageName]) {
                    if (thisObj[settings.packageName].settings.priority <= settings.priority) {
                        thisObj[settings.packageName] = new sortTable(thisObj, settings, instanceObj);
                    }
                } else {
                    thisObj[settings.packageName] = new sortTable(thisObj, settings, instanceObj);
                }
            },
            init = function (obj) {
                //document.packageManager.register(settings.packageName, obj);
                for (var i = 0, n = obj.length; i < n; i++) {
                    setSettings(obj.eq(i).get(0), obj);
                }
            };
        init(this);
        return this;
    };
}(jQuery));

// Fiserv Forms 1.9.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved.
class FormsCalculate extends Fiserv {
    constructor(options) {
        super(options);

        //Default Properties
        this.viewOriginal = document.querySelector("html").classList.contains("fiserv-view-original") ? true : false;
        this.form = document.querySelector(".fiserv-form");
        this.dataAttribute = "data-calculate";

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        if (this.viewOriginal) return;
        this.init();

        this.logTime(`Init End`);
    }

    init() {
        this.nodeList = this.form.querySelectorAll(`[${this.dataAttribute}]`);
        this.setCalculateList();
        this.success(this);
    }

    setCalculateList() {
        for (let i = 0; i < this.nodeList.length; i++) {
            const node = this.nodeList[i];
            if (!this.calculateList) this.calculateList = [];
            const calculate = new FormsCalculateCalculate(this, node);
            this.calculateList.push(calculate);
        }
    }

    changeCallback(obj) {
        this.change = obj;
        Fiserv.message(this);
        delete this.change;
    }

    success(calculate) {
        return;
    }
}

class FormsCalculateCalculate {
    constructor(formsCalculate, node) {
        this.formsCalculate = formsCalculate;
        this.node = node;
        this.node.calculate = this;
        this.bindFunctions();
        this.data = this.node.getAttribute(this.formsCalculate.dataAttribute);
        this.expressionRegex = /[\w\_]+[\(]{1}[^\)]+[\)]{1}|[\w\_]+|[\+\-\*\/\^\(\)]{1}/gim;
        this.dupFunctions = {
            "sumDup": function (id) {
                return this.createDupString(id, "+");
            }.bind(this),
            "subDup": function (id) {
                return this.createDupString(id, "-");
            }.bind(this),
            "multDup": function (id) {
                return this.createDupString(id, "*");
            }.bind(this),
            "divDup": function (id) {
                return this.createDupString(id, "/");
            }.bind(this)
        };
        this.expressionData = this.expressionRegex.test(this.data) ? this.data : null;
        this.expressionData = this.getDupFunctions(this.expressionData);
        this.setInputVars();
        this.setInputList();
        this.run();
    }

    bindFunctions() {
        this.run = this.run.bind(this);
    }

    cleanValue(value) {
        const numRegex = /[\d\.\-]+/g;
        if (numRegex.test(value)) return parseFloat(value.match(numRegex).join(""));
        return 0;
    }

    evaluate(string) {
        if (!string) return 0;
        const validExpressionRegex = /[\d]+/m;
        const doubleNegExpression = /\-\-/g;
        const negPosExpression = /\+\-/g;
        let result;
        if (doubleNegExpression.test(string)) string = string.replace(doubleNegExpression, "+");
        if (negPosExpression.test(string)) string = string.replace(negPosExpression, "-");
        if (validExpressionRegex.test(string)) result = Function('"use strict";return (' + string + ')')();
        if (typeof result === "number") return result;
        return 0;
    }

    replaceValues(inputs, varList) {
        const newVarlist = [];
        for (let i = 0; i < varList.length; i++) {
            const opRegex = /[\+\-\*\/\^]{1}/gi;
            const parenthRegex = /[\(\)]{1}/gi;
            const thisVar = varList[i];
            if (parenthRegex.test(thisVar)) {
                const operator = varList[i - 1];
                if (operator && opRegex.test(operator)) newVarlist.push(operator);
                newVarlist.push(thisVar);
                continue;
            }
            for (let key in this.inputList) {
                const input = this.inputList[key];
                if (thisVar === key && !input.node.disabled) {
                    const operator = varList[i - 1];
                    if (operator && opRegex.test(operator)) newVarlist.push(operator);
                    const value = this.cleanValue(input.node.value);
                    newVarlist.push(value);
                }
            }
        }
        let newString = newVarlist.join("");
        newString = newString.replace(/[\+\-\*\/\^]{1}\(\)/gi, "");
        newString = newString.replace(/^\(\)/gi, "");
        newString = newString.replace(/^[\+\-\*\^\/]+/gi, "");
        return newString;
    }

    run() {
        clearTimeout(this.runDebounce);
        this.runDebounce = setTimeout(function () {
            const string = this.replaceValues(this.inputList, this.inputVars);
            const value = this.evaluate(string);
            this.node.value = value;
            this.node.dispatchEvent(this.node.singleTrigger.event);
            if (this.node.format && typeof this.node.format === "function") {
                this.node.format(this.node);
            }
        }.bind(this), 1);
    }

    createDupString(id, operator) {
        const input = document.getElementById(id);
        const idList = this.getDuplicateIDs(input);
        let dupString = idList.join(operator);
        return "(" + dupString + ")";
    }

    findParents(obj, prop) {
        const parent = obj.parentElement;
        if (parent.hasOwnProperty(prop)) return parent;
        if (parent === document.body) return null;
        return this.findParents(parent, prop);
    }

    getDuplicateIDs(input) {
        const prop = "duplicate";
        const parent = this.findParents(input, prop);
        if (!parent) return;
        const inputIDs = [input.id];
        for (let i = 0; i < parent.duplicate.duplicateNum; i++) {
            inputIDs.push(inputIDs[0] + "_" + i);
        }
        return inputIDs;
    }

    getDupFunctions(expString) {

        if (!expString) return;
        const functionRegex = /[\w]+[\(]{1}[^\)]+[\)]{1}/ig;
        const functionSplitRegex = /([\w]+)[\(]{1}([^\)]+)[\)]{1}/im;
        const functions = expString.match(functionRegex);
        if (!functions) return expString;
        let newString = expString;
        for (let i = 0; i < functions.length; i++) {
            const thisFunction = functions[i];
            const functionSplit = thisFunction.match(functionSplitRegex);
            if (this.dupFunctions.hasOwnProperty(functionSplit[1])) {
                const dupString = this.dupFunctions[functionSplit[1]](functionSplit[2]);
                newString = newString.replace(thisFunction, dupString);
            }
        }
        return newString;
    }

    setInputList() {
        if (!this.inputList) this.inputList = {};
        for (let i = this.inputVars.length - 1; i >= 0; i--) {
            const thisData = this.inputVars[i];
            if (/^[\+\(\)\-\\\*]+$/ig.test(thisData)) continue;
            const input = document.getElementById(thisData);
            if (!input) continue;
            this.inputList[thisData] = new FormsCalculateInput(this.formsCalculate, this, input);
        }
    }

    setInputVars() {
        if (!this.expressionData) return null;
        if (!this.inputVars) this.inputVars = [];
        let list = this.expressionData.match(this.expressionRegex);
        for (let i = 0; i < list.length; i++) {
            const thisItem = list[i];
            if (thisItem === "") list.splice(i, 1);
        }
        this.inputVars = list;
    }

}

class FormsCalculateInput {
    constructor(formsCalculate, formsCalculateCalculate, node) {
        this.formsCalculate = formsCalculate;
        this.formsCalculateCalculate = formsCalculateCalculate;
        this.node = node;
        this.bindFunctions();
        this.addEventListener();
        this.setMutationObserver();
    }

    bindFunctions() {
        this.mutationCallback = this.mutationCallback.bind(this);
    }

    addEventListener() {
        this.node.addEventListener("formEvent", this.formsCalculateCalculate.run);
    }

    mutationCallback(mutationsList) {
        for (let i = 0; i < mutationsList.length; i++) {
            const mutation = mutationsList[i];
            if (mutation.type === 'attributes') {
                this.formsCalculateCalculate.run();
            }
        }
    }

    setMutationObserver() {
        const config = {
            attributes: true,
            attributeFilter: ['disabled']
        };
        this.observer = new MutationObserver(this.mutationCallback);
        this.observer.observe(this.node, config);
    }
}

class FormsDuplicate extends Fiserv {
    constructor(options) {
        super(options);

        //Default Properties
        this.form = document.querySelector(".fiserv-form");
        this.dataAttribute = "data-duplicate";
        this.domParser = new DOMParser();
        this.disabledClass = 'disabled';
        this.collapsedClass = 'collapse';
        this.parentClass = 'duplicate-parent';
        this.viewOriginal = document.querySelector("html").classList.contains("fiserv-view-original") ? true : false;

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        this.logTime(`Init End`);
    }

    init() {
        this.nodeList = this.form.querySelectorAll(`[${this.dataAttribute}]`);
        this.setDuplicateList();
        this.changeCallback(true);
        this.success(this);
        if (this.viewOriginal) this.viewOriginalInit();
    }

    setDuplicateList() {
        for (let i = 0; i < this.nodeList.length; i++) {
            const node = this.nodeList[i];
            if (!this.duplicateList) this.duplicateList = [];
            const duplicate = new FormsDuplicateDuplicate(this, node);
            this.duplicateList.push(duplicate);
        }
    }

    changeCallback(obj) {
        this.change = obj;
        Fiserv.message(this);
        delete this.change;
    }

    enablerInit(enabler) {
        if (!enabler.enablerList) return;
        const changed = [];
        for (let i = 0; i < enabler.enablerList.length; i++) {
            const ee = enabler.enablerList[i];
            if (!ee.controller) continue;
            const ecParent = ee.controller.node.closest(`[${this.dataAttribute}]`);
            if (!ecParent) continue;
            if (changed.indexOf(ecParent) !== -1) continue;
            changed.push(ecParent);
            for (let n = 0; n < this.duplicateList.length; n++) {
                const d = this.duplicateList[n];
                if (d.node !== ecParent) continue;
                d.incrementEnabler(ee);
            }
        }
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "FormsEnabler":
            case "FormsExpander":
                if (obj.readystatechange) this.enablerInit(obj);
                break;
        }
    }

    success(duplicate) {
        return;
    }

    viewOriginalInit() {
        if (!this.duplicateList) return;
        for (let i = 0; i < this.duplicateList.length; i++) {
            const duplicate = this.duplicateList[i];
            duplicate.viewOriginalInit();
        }
    }
}

class FormsDuplicateDuplicate {
    constructor(formsDuplicate, node) {
        this.formsDuplicate = formsDuplicate;
        this.node = node;
        this.node.duplicate = this;
        this.node.parentNode.classList.add(formsDuplicate.parentClass);
        this.bindFunctions();
        this.attribute = this.node.getAttribute(this.formsDuplicate.dataAttribute);
        this.title = this.node.querySelector('.iterate') ? this.node.querySelector('.iterate').innerText : "";
        this.controller = new FormsDuplicateController(this.formsDuplicate, this, this.node);
        this.openNum = 0;
        this.setIterations();
        this.setCloneList();
        this.addMinimum();
    }

    bindFunctions() {
        this.addIteration = this.addIteration.bind(this);
        this.removeIteration = this.removeIteration.bind(this);
    }

    setCloneList() {
        for (let i = 0; i < this.duplicateNum; i++) {
            if (!this.cloneList) this.cloneList = [];
            const clone = new FormsDuplicateDuplicateClone(this.formsDuplicate, this, this.node);
            this.cloneList.unshift(clone);
        }
    }

    addMinimum() {
        for (let i = 0; i < this.minimum; i++) {
            this.addIteration();
        }
    }

    addIteration() {
        if (this.openNum >= this.duplicateNum) return;
        const clone = this.cloneList[this.openNum];
        clone.enable();
        if (this.openNum >= this.duplicateNum - 1) this.controller.disableAddButton();
        if (this.openNum >= this.minimum) this.controller.enableRemoveButton();
        if (this.openNum !== this.duplicateNum) this.openNum += 1;
    }

    incrementEnabler(ee) {
        for (let i = 0; i < this.cloneList.length; i++) {
            const c = this.cloneList[i];
            c.incrementEnabler(ee);
        }
    }

    removeIteration() {
        if (this.openNum <= this.minimum) return;
        this.openNum -= 1;
        const clone = this.cloneList[this.openNum];
        clone.disable();
        this.controller.enableAddButton();
        if (this.openNum <= this.minimum) this.controller.disableRemoveButton();
    }

    setIterations() {
        const split = this.attribute.split(`,`);
        this.duplicateNum = split[0];
        this.minimum = split.length > 1 ? split[1] : 0;
    }

    viewOriginalInit() {
        for (let i = 0; i < this.duplicateNum; i++) {
            this.addIteration();
        }
    }
}

class FormsDuplicateDuplicateClone {
    constructor(formsDuplicate, duplicate, node) {
        this.formsDuplicate = formsDuplicate;
        this.duplicate = duplicate;
        this.index = this.duplicate.cloneList.length;
        this.node = node.cloneNode(true);
        this.setInputList();
        this.addCollapseClass();
        this.disable();
        this.incrementNames();
        this.removeAttribute();
        this.duplicate.node.after(this.node);
    }

    addCollapseClass() {
        this.node.classList.add(this.formsDuplicate.collapsedClass);
    }

    addDisableClass() {
        this.node.classList.add(this.formsDuplicate.disabledClass);
    }

    clearInputValue(node) {
        if (!node) return;
        switch (node.nodeName.toLowerCase()) {
            case "Select":
                node.selectedIndex = -1;
                break;
            default:
                switch (node.type) {
                    case "radio":
                    case "checkbox":
                        node.checked = false;
                        break;
                    default:
                        node.value = "";
                }
        }
    }

    removeCollapseClass() {
        this.node.classList.remove(this.formsDuplicate.collapsedClass);
    }

    removeDisableClass() {
        this.node.classList.remove(this.formsDuplicate.disabledClass);
    }

    disable() {
        for (let i = 0; i < this.inputList.length; i++) {
            const input = this.inputList[i];
            input.disable();
        }
        this.addDisableClass();
    }

    enable() {
        for (let i = 0; i < this.inputList.length; i++) {
            const input = this.inputList[i];
            input.enable();
        }
        this.removeDisableClass();
    }

    incrementNames() {
        const concat = `_${this.duplicate.cloneList.length}`;
        for (let i = 0; i < this.inputList.length; i++) {
            const input = this.inputList[i];
            if (input.node.name) input.node.name += concat;
            if (input.node.id) input.node.id += concat;
        }
    }

    incrementEnabler(ee) {
        if (this.enablerIncremented) return;
        this.enablerIncremented = true;
        const numRegex = /(.+)(\-[\d]+)$/;
        let value;
        const nodeList = this.node.querySelectorAll(`[${ee.formsEnabler.dataAttribute}]`);
        for (let n = 0; n < nodeList.length; n++) {
            const node = nodeList[n];
            for (let d in node.dataset) {
                const dataSet = node.dataset[d];
                const m = dataSet.match(numRegex);
                if (m) value = `${m[1]}_${this.index}${m[2]}`;
                if (!m) value = `${dataSet}_${this.index}`;
                node.setAttribute(`data-${d}`, value);
                this.formsDuplicate.changeCallback(node);
            }
        }
    }

    removeAttribute() {
        this.node.removeAttribute(this.formsDuplicate.dataAttribute);
    }

    setInputList() {
        const inputs = this.node.querySelectorAll(`input, select, textarea`);
        for (let i = 0; i < inputs.length; i++) {
            const node = inputs[i];
            this.clearInputValue(node);
            if (!this.inputList) this.inputList = [];
            const input = new FormsEnablerInput(this.formsDuplicate, this, node);
            this.inputList.push(input);
        }
    }

}

class FormsDuplicateController {
    constructor(formsDuplicate, duplicate, node) {
        this.formsDuplicate = formsDuplicate;
        this.duplicate = duplicate;
        this.node = node;
        this.controlsString = `
                <div>
                    <button class="duplicate-remove Button2 fa-minus ${this.formsDuplicate.disabledClass}" type="button" tabindex="-1"><span>Remove ${this.duplicate.title}</span></button>
                    <button class="duplicate-add Button2 fa-plus" type="button" tabindex="0"><span>Add ${this.duplicate.title}</span></button>
                </div>
            `;
        this.controls = this.formsDuplicate.domParser.parseFromString(this.controlsString, "text/html").body.childNodes[0];
        this.addButton = this.controls.querySelector(`.duplicate-add`);
        this.removeButton = this.controls.querySelector(`.duplicate-remove`);
        this.addEvent();
        this.removeEvent();
        this.appendControls();
    }

    addEvent() {
        this.addButton.addEventListener("click", this.duplicate.addIteration);
    }

    removeEvent() {
        this.removeButton.addEventListener("click", this.duplicate.removeIteration);
    }

    appendControls() {
        this.node.after(this.controls);
    }

    enableRemoveButton() {
        this.removeButton.classList.remove(this.formsDuplicate.disabledClass);
    }

    disableRemoveButton() {
        this.removeButton.classList.add(this.formsDuplicate.disabledClass);
    }

    enableAddButton() {
        this.addButton.classList.remove(this.formsDuplicate.disabledClass);
    }

    disableAddButton() {
        this.addButton.classList.add(this.formsDuplicate.disabledClass);
    }
}

class FormsEnabler extends Fiserv {
    constructor(options) {
        super(options);

        //Default Properties
        this.form = document.querySelector(".fiserv-form");
        this.listeners = ["formEvent"];
        this.dataAttribute = "data-enabler";
        this.disabledClass = "disabled";
        this.comparitor = "positive";

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        this.logTime(`Init End`);
    }

    init() {
        this.nodeList = this.form.querySelectorAll(`[${this.dataAttribute}]`);
        this.setEnablerList();
        this.initCallback(this.nodeList);
    }

    setEnablerList() {
        for (let i = 0; i < this.nodeList.length; i++) {
            const node = this.nodeList[i];
            if (!this.enablerList) this.enablerList = [];
            const enabler = new FormsEnablerEnabler(this, node);
            this.enablerList.push(enabler);
        }
    }

    initCallback(obj) {
        if (!obj.length) return;
        this.readystatechange = obj;
        Fiserv.message(this);
        delete this.readystatechange;
    }

    changeCallback(obj) {
        this.change = obj;
        Fiserv.message(this);
        delete this.change;
    }

    initDuplicate(n) {
        if (!this.nodeList.length) return;
        for (let i = 0; i < this.enablerList.length; i++) {
            const e = this.enablerList[i];
            e.initDuplicate(n);
        }
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "FormsDuplicate":
                if (obj.change) this.initDuplicate(obj.change);
                break;
        }
    }
}

class FormsEnablerEnabler {
    constructor(formsEnabler, node) {
        this.formsEnabler = formsEnabler;
        this.node = node;
        this.setInputList();
        this.setController();
    }

    setController() {
        const ID = this.node.getAttribute(this.formsEnabler.dataAttribute);
        const node = this.formsEnabler.form.querySelector(`#${ID}`);
        if (!node) return;
        this.controller = new FormsEnablerController(this.formsEnabler, this, node);
    }

    setInputList() {
        const nodeList = this.node.querySelectorAll("input, textarea, select");
        for (let i = 0; i < nodeList.length; i++) {
            const node = nodeList[i];
            if (!this.inputList) this.inputList = [];
            const input = new FormsEnablerInput(this.formsEnabler, this, node);
            this.inputList.push(input);
        }
    }

    disableInputs() {
        if (!this.inputList) return;
        for (let i = 0; i < this.inputList.length; i++) {
            const input = this.inputList[i];
            input.disable();
        }
    }

    enableInputs() {
        if (!this.inputList) return;
        for (let i = 0; i < this.inputList.length; i++) {
            const input = this.inputList[i];
            input.enable();
        }
    }

    disable() {
        this.node.classList.add(this.formsEnabler.disabledClass);
        this.disableInputs();
    }

    enable() {
        this.node.classList.remove(this.formsEnabler.disabledClass);
        this.enableInputs();
    }

    clean() {
        if (!this.controller) return;
        for (let i = 0; i < this.inputList.length; i++) {
            const input = this.inputList[i];
            input.clean();
            this.inputList.splice(i, 1);
        }
        this.controller.clean();
        delete this.controller;
        delete this.inputList;
    }

    initDuplicate(n) {
        if (n !== this.node) return;
        this.clean();
        this.setInputList();
        this.setController();
    }
}

class FormsEnablerController {
    constructor(formsEnabler, enabler, node) {
        this.formsEnabler = formsEnabler;
        this.enabler = enabler;
        this.node = node;
        this.eventCallback();
        this.eventCallback = this.eventCallback.bind(this);
        this.addNameListeners();
    }

    addNameListeners() {
        const nodes = this.formsEnabler.form.querySelectorAll(`[name=${this.node.name}]`);
        if ("OPTION" === this.node.tagName) this.addListeners(this.node.closest(`select`));
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            this.addListeners(node);
        }
    }

    addListeners(node) {
        node = node ? node : this.node;
        for (let i = 0; i < this.formsEnabler.listeners.length; i++) {
            const listener = this.formsEnabler.listeners[i];
            node.addEventListener(listener, this.eventCallback);
        }
    }

    removeNameListeners() {
        const nodes = this.formsEnabler.form.querySelectorAll(`[name=${this.node.name}]`);
        if ("OPTION" === this.node.tagName) this.removeListeners(this.node.closest(`select`));
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            this.removeListeners(node);
        }
    }

    removeListeners(node) {
        node = node ? node : this.node;
        for (let i = 0; i < this.formsEnabler.listeners.length; i++) {
            const listener = this.formsEnabler.listeners[i];
            node.removeEventListener(listener, this.eventCallback);
        }
    }

    checkValidity() {
        let validityState = false;
        switch (this.node.nodeName.toLowerCase()) {
            case "option":
                if (this.node.selected) validityState = true;
                break;
            default:
                validityState = this.node.checkValidity();
                switch (this.node.type) {
                    case "radio":
                    case "checkbox":
                        if (!this.node.checked) validityState = false;
                        break;
                    default:
                        if (this.node.value.length <= 0) validityState = false;
                }
        }
        if (this.node.disabled) validityState = false;
        return validityState;
    }

    eventCallback(e) {
        const valid = this.checkValidity();
        switch (this.formsEnabler.comparitor) {
            case "positive":
                if (valid) this.enabler.enable();
                if (!valid) this.enabler.disable();
                break;
            case "negative":
                if (valid) this.enabler.disable();
                if (!valid) this.enabler.enable();
                break;
        }
        this.formsEnabler.changeCallback(this.node);
    }

    clean() {
        this.removeNameListeners();
        this.removeListeners();
    }
}

class FormsEnablerInput {
    constructor(formsEnabler, enabler, node) {
        this.formsEnabler = formsEnabler;
        this.enabler = enabler;
        this.node = node;
        this.enabled = true;
        this.setEnabler();
        this.labels = this.node.labels;
        this.event = new Event("change");
    }

    setEnabler() {
        if (!this.node.enabler) this.node.enabler = [];
        this.node.enabler.push(this);
    }

    disableParents(parent) {
        parent = parent ? parent : this.node.parentNode;
        parent.classList.add(this.formsEnabler.disabledClass);
        if (this.enabler.node === parent) return;
        this.disableParents(parent.parentNode);
    }

    clean() {
        delete this.formsEnabler;
        delete this.enabler;
        delete this.enabled;
        delete this.labels;
        if (!this.node) return;
        for (let i = 0; i < this.node.enabler.length; i++) {
            if (this !== this.node.enabler[i]) continue;
            this.node.enabler.splice(i, 1);
        }
        delete this.node;
    }

    enableParents(parent) {
        parent = parent ? parent : this.node.parentNode;
        parent.classList.remove(this.formsEnabler.disabledClass);
        if (this.enabler.node === parent) return;
        this.enableParents(parent.parentNode);
    }

    disabledEnablers() {
        for (let i = 0; i < this.node.enabler.length; i++) {
            const enabler = this.node.enabler[i];
            if (this === enabler) continue;
            if (!enabler.enabled) return false;
        }
        return true;
    }

    disable() {
        this.node.setAttribute("disabled", true);
        this.disableParents();
        this.enabled = false;
        this.node.dispatchEvent(this.event);
    }

    enable() {
        this.enabled = true;
        if (!this.disabledEnablers()) return;
        this.node.removeAttribute("disabled");
        this.enableParents();
        this.node.dispatchEvent(this.event);
    }
}

class FormsExpander extends FormsEnabler {
    constructor(options) {
        super(options);

        //Default Properties
        this.form = document.querySelector(".fiserv-form");
        this.listeners = ["formEvent"];
        this.dataAttribute = "data-expander";
        this.collapsedClass = "collapse",
            this.disabledClass = "disabled";
        this.comparitor = "positive";

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        //Inherited from enabler

        this.logTime(`Init End`);
    }

    setEnablerList() {
        for (let i = 0; i < this.nodeList.length; i++) {
            const node = this.nodeList[i];
            if (!this.enablerList) this.enablerList = [];
            node.classList.add(this.collapsedClass);
            const enabler = new FormsEnablerEnabler(this, node);
            this.enablerList.push(enabler);
        }
    }
}

(function (jQuery) {

    jQuery.fn.formatInputs = function (options) {
        const startDate = new Date();
        var settings = jQuery.extend(true, {
            priority: 0,
            packageName: "formatInputs",
            success: function (e) {
                console.log(e);
            },
            error: function (e) {
                console.log(e);
            }
        }, options),
            formatInputs = function (obj, settings, instanceObj) {
                const _proto = this;
                _proto.instance = instanceObj;
                _proto.settings = settings;
                _proto.obj = obj;

                _proto.activeFormat = function (input, formatFunction) {
                    input.format = formatFunction;
                    input.addEventListener("keyup", function (e) {
                        const ignoreKeys = [8, 38, 40, 37, 39];
                        // When user select text in the document, also abort.
                        var selection = window.getSelection().toString();
                        if (selection !== '') {
                            return;
                        }
                        if (ignoreKeys.indexOf(e.keyCode) !== -1) {
                            return;
                        }

                        formatFunction(input, e);
                    });
                    input.addEventListener("blur", function (e) {
                        formatFunction(input, e);
                    });
                };

                //Convert a regular expression into an html pattern string.
                _proto.patternFromRegex = function (regex) {
                    const pattern = regex.toString().replace(/^\//, "").replace(/\/$/, "");
                    return pattern;
                };

                //Numbers Only

                _proto.numbersOnly = function (value, type) {

                    _proto.numbersOnly.regex = {
                        "integer": /[\-]*[\d]*/g,
                        "float": /[\-]*[\d\.]*/g
                    };
                    const numberType = type ? type : "integer";

                    if (typeof value === "string") {
                        return _proto.numbersOnly.regex[numberType].test(value) ? value.match(_proto.numbersOnly.regex[numberType]).join("") : "";
                    }
                    if (typeof value === "number") {
                        return value;
                    }
                };

                _proto.formatZip = function (inputs) {

                    const regex = /[\d]{5}/;

                    _proto.formatZip.format = function (input) {
                        // Get the value.
                        let value = input.value;
                        value = _proto.numbersOnly(value);
                        input.value = value;
                        input.dispatchEvent(input.singleTrigger.event);
                    };

                    for (let i = 0, n = inputs.length; i < n; i++) {
                        const thisInput = inputs[i];
                        thisInput.setAttribute("pattern", "[0-9]{5}");
                        thisInput.setAttribute("maxlength", "5");
                        _proto.activeFormat(thisInput, _proto.formatZip.format);
                    }

                };

                if (_proto.settings.zip) {
                    _proto.formatZip(_proto.obj.querySelectorAll(_proto.settings.zip.selector));
                }

                _proto.formatSSN = function (inputs) {

                    const regex = /[\d]{3}-[\d]{2}-[\d]{4}/;
                    const pattern = _proto.patternFromRegex(regex);

                    _proto.formatSSN.format = function (input) {
                        // Get the value.
                        let value = input.value;
                        const formatRegex = /([\d]{3})([\d]{2})([\d]{4})/;

                        value = _proto.numbersOnly(value);
                        if (formatRegex.test(value)) {
                            value = value.match(formatRegex);
                            let matches = [];
                            for (let i = 1, n = value.length; i < n; i++) {
                                matches.push(value[i]);
                            }
                            value = matches.join("-");
                            input.value = value;
                        }
                        input.dispatchEvent(input.singleTrigger.event);
                    };

                    for (let i = 0, n = inputs.length; i < n; i++) {
                        const thisInput = inputs[i];
                        thisInput.setAttribute("pattern", pattern);
                        thisInput.setAttribute("maxlength", "11");
                        _proto.activeFormat(thisInput, _proto.formatSSN.format);
                    }

                };

                if (_proto.settings.ssn) {
                    _proto.formatSSN(_proto.obj.querySelectorAll(_proto.settings.ssn.selector));
                }

                _proto.formatEIN = function (inputs) {

                    const regex = /[\d]{2}-[\d]{7}/;
                    const pattern = _proto.patternFromRegex(regex);

                    _proto.formatEIN.format = function (input) {
                        // Get the value.
                        let value = input.value;
                        const formatRegex = /([\d]{2})([\d]{7})/;

                        value = _proto.numbersOnly(value);
                        if (formatRegex.test(value)) {
                            value = value.match(formatRegex);
                            let matches = [];
                            for (let i = 1, n = value.length; i < n; i++) {
                                matches.push(value[i]);
                            }
                            value = matches.join("-");
                            input.value = value;
                        }
                        input.dispatchEvent(input.singleTrigger.event);
                    };

                    for (let i = 0, n = inputs.length; i < n; i++) {
                        const thisInput = inputs[i];
                        thisInput.setAttribute("pattern", pattern);
                        thisInput.setAttribute("maxlength", "10");
                        _proto.activeFormat(thisInput, _proto.formatEIN.format);
                    }

                };

                if (_proto.settings.ein) {
                    _proto.formatEIN(_proto.obj.querySelectorAll(_proto.settings.ein.selector));
                }

                _proto.formatPhone = function (inputs) {

                    const regex = {
                        "domestic": /^([\(]+[0-9]{3}[\)]+|[0-9]{3})[- .]*([0-9]{3})[- .]*([0-9]{4})$/,
                        "domestic hyphen": /^([\(]+[0-9]{3}[\)]+|[0-9]{3})[- .]*([0-9]{3})[- .]*([0-9]{4})$/,
                        "international": /[\d]{1}-[\d]{3}-[\d]{3}-[\d]{4}/
                    };
                    const pattern = _proto.patternFromRegex(regex[_proto.settings.phone.format]);

                    _proto.formatPhone.format = function (input) {
                        let value = input.value;
                        const formatRegex = {
                            "domestic": /^([\(]+[0-9]{3}[\)]+|[0-9]{3})[- .]*([0-9]{3})[- .]*([0-9]{4})$/,
                            "domestic hyphen": /^([\(]+[0-9]{3}[\)]+|[0-9]{3})[- .]*([0-9]{3})[- .]*([0-9]{4})$/,
                            "international": /([\d]{1})([\d]{3})([\d]{3})([\d]{4})/
                        };
                        value = _proto.numbersOnly(value);
                        if (formatRegex[_proto.settings.phone.format].test(value)) {
                            value = value.match(formatRegex[_proto.settings.phone.format]);
                            switch (_proto.settings.phone.format) {
                                case "domestic":
                                    input.value = "(" + value[1] + ") " + value[2] + "-" + value[3];
                                    break;
                                case "domestic hyphen":
                                    input.value = value[1] + "-" + value[2] + "-" + value[3];
                                    break;
                                case "international":
                                    input.value = value[1] + "-" + value[2] + "-" + value[3] + "-" + value[4];
                                    break;
                            }
                            input.dispatchEvent(input.singleTrigger.event);
                        }
                    };

                    for (let i = 0, n = inputs.length; i < n; i++) {
                        const thisInput = inputs[i];
                        thisInput.setAttribute("pattern", pattern);
                        // thisInput.setAttribute("maxlength", "14");
                        _proto.activeFormat(thisInput, _proto.formatPhone.format);
                    }
                };


                if (_proto.settings.phone) {
                    _proto.formatPhone(_proto.obj.querySelectorAll(_proto.settings.phone.selector));
                }

                _proto.formatCurrency = function (inputs) {

                    const regex = {
                        "integer": /^[\-]*\$[\d,]+$/,
                        "float": /^[\-]*\$[\d,]+\.[\d]{2}$/,
                        "negative": /[\(\)]+/g
                    };

                    _proto.formatCurrency.format = function (input, e) {

                        let pattern = _proto.patternFromRegex(regex.integer);
                        let maximumFractionDigits = 0;
                        let minimumFractionDigits = 0;
                        let delay = e && e.type === "blur" ? 0 : 1000;
                        let value = input.value;
                        if (/\./.test(value)) {
                            pattern = _proto.patternFromRegex(regex.float);
                            maximumFractionDigits = 2;
                            minimumFractionDigits = 2;
                        }

                        input.setAttribute("pattern", pattern);
                        const run = function () {
                            if (value) {
                                value = _proto.numbersOnly(value, "float");
                                value = value ? parseFloat(value) : 0;
                                value = !isNaN(value) ? value : 0;
                                value = value.toLocaleString(_proto.settings.currency.locale, {
                                    style: 'currency',
                                    currency: _proto.settings.currency.currency,
                                    maximumFractionDigits: maximumFractionDigits,
                                    minimumFractionDigits: minimumFractionDigits
                                });
                                if (regex.negative.test(value)) {
                                    value = "-" + value.replace(regex.negative, "");
                                }
                                input.value = value;
                                input.dispatchEvent(input.singleTrigger.event);
                            }
                        };
                        if (!e) {
                            run();
                        }
                        clearTimeout(input.debounce);
                        input.debounce = setTimeout(function () {
                            run();
                        }, delay);
                    };

                    for (let i = 0, n = inputs.length; i < n; i++) {
                        const thisInput = inputs[i];
                        _proto.activeFormat(thisInput, _proto.formatCurrency.format);
                    }

                };

                if (_proto.settings.currency) {
                    _proto.formatCurrency(_proto.obj.querySelectorAll(_proto.settings.currency.selector));
                }


                _proto.formatDate = function (inputs) {
                    const regexString = {
                        "/": "\\/",
                        "-": "\\-",
                        "DD": "[\\d]{2}",
                        "D": "[\\d]{1,2}",
                        "MM": "[\\d]{2}",
                        "M": "[\\d]{1,2}",
                        "YYYY": "[\\d]{4}",
                        "YY": "[\\d]{2}"
                    };

                    _proto.formatDate.buildRegex = function (format) {

                        let regexStringBuild = null;
                        for (key in regexString) {
                            const keyRegex = new RegExp(key, "g");
                            if (regexStringBuild) {
                                regexStringBuild = regexStringBuild.replace(keyRegex, regexString[key]);
                            } else {
                                regexStringBuild = format.replace(keyRegex, regexString[key]);
                            }
                        }
                        let regex = new RegExp(regexStringBuild);
                        return regex;
                    };

                    const regex = _proto.formatDate.buildRegex(_proto.settings.date.format);
                    const formatRegex = /^([\d]{1,2})([\d]{1,2})([\d]{4})$/;
                    const pattern = _proto.patternFromRegex(regex);
                    let debounce;

                    _proto.formatDate.buildNewDate = function (value, format) {
                        const date = new Date(value);
                        if (date === "Invalid Date") {
                            return "";
                        }
                        const dateComponenets = {
                            "DD": ("0" + date.getDate()).slice(-2),
                            "D": date.getDate(),
                            "MM": ("0" + (date.getMonth() + 1)).slice(-2),
                            "M": date.getMonth() + 1,
                            "YYYY": date.getFullYear(),
                            "YY": date.getFullYear().toString().substr(2)
                        };
                        let reformattedDate = null;
                        for (key in dateComponenets) {
                            const keyRegex = new RegExp(key, "g");
                            if (reformattedDate) {
                                reformattedDate = reformattedDate.replace(keyRegex, dateComponenets[key]);
                            } else {
                                reformattedDate = format.replace(keyRegex, dateComponenets[key]);
                            }
                        }
                        return reformattedDate;
                    };

                    _proto.formatDate.format = function (input, e) {
                        if (e.type === "blur") {

                            let value = input.value;
                            if (formatRegex.test(value)) {
                                value = value.match(formatRegex);
                                let matches = [];
                                for (let i = 1, n = value.length; i < n; i++) {
                                    matches.push(value[i]);
                                }
                                value = matches.join("/");
                            }
                            value = _proto.formatDate.buildNewDate(value, _proto.settings.date.format);
                            input.value = value;
                            input.dispatchEvent(input.singleTrigger.event);
                        }
                    };

                    for (let i = 0, n = inputs.length; i < n; i++) {
                        const thisInput = inputs[i];
                        thisInput.setAttribute("pattern", pattern);
                        _proto.activeFormat(thisInput, _proto.formatDate.format);
                    }

                };

                if (_proto.settings.date) {
                    _proto.formatDate(_proto.obj.querySelectorAll(_proto.settings.date.selector));
                }


                _proto.clean = function () {
                };
                _proto.callback = function (e) {
                    settings.success(e);
                };
                _proto.error = function (e) {
                    settings.error(e);
                };
                const endDate = new Date();
                _proto.runTime = (endDate.getTime() - startDate.getTime()) / 1000 + "s";
            },
            setSettings = function (thisObj, instanceObj) {
                if (thisObj[settings.packageName]) {
                    if (thisObj[settings.packageName].settings.priority <= settings.priority) {
                        thisObj[settings.packageName] = new formatInputs(thisObj, settings, instanceObj);
                    }
                } else {
                    thisObj[settings.packageName] = new formatInputs(thisObj, settings, instanceObj);
                }
            },
            init = function (obj) {
                for (var i = 0, n = obj.length; i < n; i++) {
                    setSettings(obj.eq(i).get(0), obj);
                }
            };
        init(this);
        return this;
    };

    jQuery.fn.singleTrigger = function (options) {
        const startDate = new Date();
        var settings = jQuery.extend(true, {
            priority: 0,
            packageName: "singleTrigger",
            listeners: "change keyup keydown paste blur click propertychange RadioStateChange input",
            customEvent: "formEvent",
            success: function (e) {
                console.log(e);
            },
            error: function (e) {
                console.log(e);
            }
        }, options),
            singleTrigger = function (obj, settings, instanceObj) {
                const _proto = this;
                _proto.instance = instanceObj;
                _proto.settings = settings;
                _proto.obj = obj;
                _proto.listeners = [];
                switch (typeof _proto.settings.listeners) {
                    case "string":
                        if (/\s/g.test(_proto.settings.listeners)) {
                            _proto.listeners = _proto.settings.listeners.split(/\s/g);
                        } else {
                            _proto.listeners[0] = _proto.settings.listeners;
                        }
                        break;
                    case "array":
                        _proto.listeners = _proto.settings.listeners;
                        break;
                    default:
                        _proto.error("Listeners variable type not supported");
                }

                var event;
                if (typeof Event === 'function') {
                    _proto.event = new Event(_proto.settings.customEvent);
                } else {
                    _proto.event = document.createEvent('Event');
                    _proto.event.initEvent(_proto.settings.customEvent, true, true);
                }

                _proto.debounce;
                for (let i = 0, n = _proto.listeners.length; i < n; i++) {
                    _proto.obj.addEventListener(_proto.listeners[i], function (e) {
                        let triggeredObj = e.target;
                        clearTimeout(_proto.debounce);
                        _proto.debounce = setTimeout(function () {
                            triggeredObj.dispatchEvent(_proto.event);
                        }, 100);
                    });
                }
                _proto.clean = function () {
                };
                _proto.callback = function (e) {
                    settings.success(e);
                };
                _proto.error = function (e) {
                    settings.error(e);
                };
                const endDate = new Date();
                _proto.runTime = (endDate.getTime() - startDate.getTime()) / 1000 + "s";
            },
            setSettings = function (thisObj, instanceObj) {
                if (thisObj[settings.packageName]) {
                    if (thisObj[settings.packageName].settings.priority <= settings.priority) {
                        thisObj[settings.packageName] = new singleTrigger(thisObj, settings, instanceObj);
                    }
                } else {
                    thisObj[settings.packageName] = new singleTrigger(thisObj, settings, instanceObj);
                }
            },
            init = function (obj) {
                for (var i = 0, n = obj.length; i < n; i++) {
                    setSettings(obj.eq(i).get(0), obj);
                }
            };
        init(this);
        return this;
    };

    jQuery.fn.fiservForm = function (options) {
        const startDate = new Date();
        var settings = jQuery.extend(true, {
            priority: 0,
            packageName: "fiservForm",
            success: function (e) {
                console.log(e);
            },
            error: function (e) {
                console.log(e);
            }
        }, options),
            fiservForm = function (form) {
                const _proto = this;
                _proto.settings = settings;
                _proto.setObjects = function (form) {
                    _proto.form = form;
                    _proto.sections = form.querySelectorAll('header, section');
                    _proto.inputs = form.querySelectorAll('input:not([type="hidden"]), select, textarea');
                    _proto.radios = form.querySelectorAll('[type="radio"], [type="checkbox"]');
                    _proto.textareas = form.querySelectorAll('textarea');
                    _proto.selects = form.querySelectorAll('select');
                };
                _proto.setObjects(form);
                _proto.domParser = new DOMParser();
                if (!_proto.form.id) {
                    const allForms = document.querySelectorAll('form');
                    for (let i = 0, n = allForms.length; i < n; i++) {
                        const thisForm = allForms[i];
                        if (_proto.form === thisForm) {
                            _proto.form.id = "fiserv-form-" + i;
                        }
                    }
                }
                //Find the correct parent to receive classes
                _proto.findParent = function (input) {
                    if (jQuery(input).closest("fieldset").length > 0) {
                        return jQuery(input).closest("fieldset").get(0);
                    }
                    if (jQuery(input).closest("label").length > 0) {
                        return jQuery(input).closest("label").get(0);
                    }
                    return null;
                };
                //Add and remove focus classes
                _proto.setFocus = function (obj) {
                    for (let i = 0, n = obj.length; i < n; i++) {
                        const thisObj = obj[i];
                        const thisParent = _proto.findParent(thisObj);
                        for (let i = 0; i < thisParent.children.length; i++) {
                            const thisChild = thisParent.children[i];
                            thisChild.addEventListener('focus', function () {
                                thisParent.classList.add('focus');
                            });
                            thisChild.addEventListener('blur', function () {
                                thisParent.classList.remove('focus');
                            });
                        }
                    }
                };
                //Add ID's to inputs
                _proto.addID = function (obj) {
                    for (let i = 0, n = obj.length; i < n; i++) {
                        let thisObj = obj[i];
                        if (!thisObj.hasAttribute('id')) {
                            const nodeName = thisObj.nodeName.toLowerCase();
                            const inputID = function (thisObj) {
                                switch (thisObj.type) {
                                    case "radio":
                                        const siblings = document.querySelectorAll('[name="' + thisObj.name + '"]');
                                        for (let h = 0, t = siblings.length; h < t; h++) {
                                            let thisSibling = siblings[h];
                                            if (!thisSibling.id) thisSibling.id = thisSibling.name + "-" + h;
                                        }
                                        break;
                                    default:
                                        if (!thisObj.id) thisObj.id = thisObj.name;
                                        break;
                                }
                            };
                            switch (nodeName) {
                                case "input":
                                    inputID(thisObj);
                                    break;
                                case "select":
                                    inputID(thisObj);
                                    break;
                                case "textarea":
                                    inputID(thisObj);
                                    break;
                                default:
                                    if (!thisObj.id) thisObj.id = nodeName + "-" + i;
                            }
                        }
                        const parent = _proto.findParent(thisObj);
                        if (parent && !parent.id) parent.id = thisObj.id + "-parent";
                    }
                };
                //Add readonly class to labels
                _proto.addReadOnlyClass = function (inputs) {
                    let i = inputs.length;
                    while (i--) {
                        const thisInput = inputs[i];
                        if (thisInput.readOnly) {
                            const parent = _proto.findParent(thisInput);
                            parent.classList.add("readonly");
                        }
                    }
                };
                //Add values to radios and checkboxes
                _proto.setRadioCheckboxValue = function (radios) {
                    for (let i = 0, n = radios.length; i < n; i++) {
                        const thisRadio = radios[i];
                        if (thisRadio.hasAttribute("value")) continue;
                        const sibling = thisRadio.nextElementSibling;
                        if (sibling) {
                            thisRadio.value = sibling.textContent;
                        }
                    }
                };
                // Auto Height Textareas
                _proto.autoGrow = function (obj) {
                    const grow = function (obj) {
                        if (!obj.value || obj.value.length <= 0) return;
                        obj.style.height = obj.style.lineHeight;
                        obj.style.height = obj.scrollHeight + "px";
                    };
                    for (let i = 0, n = obj.length; i < n; i++) {
                        const thisObj = obj[i];
                        thisObj.addEventListener('input', function () {
                            grow(this);
                        });
                        grow(thisObj);
                    }
                };
                //Add arrow to selects
                _proto.addSelectArrow = function (selects) {
                    for (let i = 0, n = selects.length; i < n; i++) {
                        const thisSelect = selects[i];
                        thisSelect.nextElementSibling.classList.add("fa-angle-down");
                    }
                };
                //Add class to label span
                _proto.addSpanClass = function (inputs) {
                    for (let i = 0, n = inputs.length; i < n; i++) {
                        const thisInput = inputs[i];
                        thisInput.nextElementSibling.classList.add("label");
                    }
                };
                //Visted sections history.
                _proto.visited = [];
                //Create Progress Bar
                _proto.generateProgression = function (sections) {
                    let progressString = '<div class="progress"><div>';
                    for (let s = 0, c = sections.length; s < c; s++) {
                        const thisSection = sections[s];
                        const parents = thisSection.querySelectorAll('label, fieldset');
                        for (let i = 0, n = parents.length; i < n; i++) {
                            const thisParent = parents[i];
                            if (thisParent.id) {
                                classes = thisParent.classList.length > 0 ? ' class="' + thisParent.classList + '"' : "";
                                if (thisParent.querySelector('input + span, select + span, textarea + span')) {
                                    progressString += '<a href="#' + thisParent.id + '"' + classes + '><span>' + thisParent.querySelector('input + span, select + span, textarea + span').innerText + '</span></a>';
                                } else {
                                    new Error("Label does not have a span: " + thisParent);
                                }
                            }
                        }
                    }
                    progressString += '</div></div>';
                    const parsed = _proto.domParser.parseFromString(progressString, "text/html");
                    _proto.form.appendChild(parsed.querySelector('.progress'));
                    const progress = form.querySelector('.progress');
                    const links = progress.querySelectorAll('a');
                    for (let i = 0; i < links.length; i++) {
                        const thisLink = links[i];
                        const parent = _proto.form.querySelector(thisLink.getAttribute("href"));
                        _proto.mutationClasses(parent, thisLink);
                        thisLink.addEventListener("click", function (e) {
                            const obj = parent.querySelector("input, textarea, select");
                            if (obj) {
                                setTimeout(function () {
                                    obj.focus();
                                }, 0);
                            }
                        });
                    }
                };
                //Show a section based on the target object.
                _proto.showSection = function (target) {
                    const findIndex = function (section, list) {
                        const thisLst = list ? list : _proto.sections;
                        for (let i = 0; i < thisLst.length; i++) {
                            const thisSection = thisLst[i];
                            if (thisSection === section) {
                                return i;
                            }
                        }
                        return -1;
                    };

                    const findNextAvailable = function (obj) {
                        const nextSection = _proto.sections[findIndex(obj) + 1];
                        if (nextSection.classList.contains("disabled")) {
                            return findNextAvailable(nextSection);
                        }
                        return nextSection;
                    };

                    const removeSectionsShow = function () {
                        const siblings = _proto.sections;
                        for (let i = 0, n = siblings.length; i < n; i++) {
                            const thisSibling = siblings[i];
                            if (thisSibling.classList.contains('show')) {
                                thisSibling.classList.remove('show');
                            }
                        }
                    };

                    const show = function (obj) {
                        const index = findIndex(obj);
                        const nextIndex = findIndex(_proto.nextAvailable);
                        const visitedIndex = findIndex(obj, _proto.visited);
                        if (_proto.settings.validateForm && _proto.currentSection && visitedIndex === -1) {
                            const valid = _proto.validate.validate(jQuery(_proto.currentSection));
                            if (!valid) {
                                location.hash = _proto.currentSection.id;
                                return;
                            }
                        }
                        if (_proto.nextAvailable && obj.classList.contains("disabled")) {
                            return show(_proto.nextAvailable);
                        }
                        if (_proto.nextAvailable && nextIndex < index) {
                            return show(_proto.nextAvailable);
                        }
                        removeSectionsShow();
                        obj.classList.add('show');
                        _proto.currentSection = obj;
                        _proto.nextAvailable = findNextAvailable(obj);
                        if (visitedIndex === -1) {
                            _proto.visited.unshift(obj);
                            obj.classList.add("visited");
                        }
                        return true;
                    };

                    const targetNodeName = target.nodeName.toLowerCase();
                    switch (targetNodeName) {
                        case "header":
                        case "section":
                            return show(target);
                        default:
                            return show(jQuery(target).closest('section, header').get(0));
                    }
                };
                //Paginate the form
                _proto.paginate = function (sections) {
                    _proto.form.classList.add('paginate');

                    const addPageLinks = function (sections) {
                        for (let i = 0, n = sections.length; i < n; i++) {
                            const thisSection = sections[i];
                            let linkHTML = '<nav class="paginate-nav">';
                            if (sections[i - 1]) {
                                const previousObj = sections[i - 1];
                                linkHTML += '<a href="#' + previousObj.id + '" class="Button1 previous"><span>Previous</span></a>';
                            }
                            if (sections[i + 1]) {
                                const nextObj = sections[i + 1];
                                linkHTML += '<a href="#' + nextObj.id + '" class="Button1 next"><span>Next</span></a>';
                            }
                            linkHTML += '</nav>';
                            const parseNav = _proto.domParser.parseFromString(linkHTML, "text/html");
                            thisSection.appendChild(parseNav.querySelector('nav'));
                            const nav = thisSection.querySelector('nav');
                            if (thisSection.querySelector('[type="submit"]')) {
                                const submit = thisSection.querySelector('[type="submit"]');
                                nav.appendChild(submit.cloneNode(true));
                                submit.parentElement.removeChild(submit);
                            }
                        }
                    };

                    addPageLinks(sections);
                    let change = false;
                    window.addEventListener('hashchange', function (e) {
                        if (change) {
                            _proto.showSection(_proto.form.querySelector(":target"));
                        }
                    });
                    const firstHash = _proto.sections[0].id;
                    if ("#" + firstHash === location.hash) {
                        location.hash = "";
                    }
                    (function () {
                        change = true;
                        location.hash = firstHash;
                    })();

                    const enterFix = function (form) {
                        form.addEventListener("keydown", function (e) {
                            if (e.keyCode === 13) {
                                e.preventDefault();
                                _proto.showSection(_proto.nextAvailable);
                            }
                        });
                    };
                    enterFix(_proto.form);

                };
                //Add classes to a target from an observed object on mutation
                _proto.mutationClasses = function (observed, target) {
                    // Options for the observer (which mutations to observe)
                    const config = {
                        attributes: true,
                        attributeFilter: ['class']
                    };

                    // Callback function to execute when mutations are observed
                    const callback = function (mutationsList, observer) {
                        for (let i = 0; i < mutationsList.length; i++) {
                            const mutation = mutationsList[i];
                            if (mutation.type === 'attributes' && mutation.attributeName === "class") {
                                for (let k = 0; k < target.classList.length; k++) {
                                    target.classList.remove(target.classList[k]);
                                }
                                const classList = target.classList;
                                while (classList.length > 0) {
                                    classList.remove(classList.item(0));
                                }
                                for (let j = 0; j < mutation.target.classList.length; j++) {
                                    target.classList.add(mutation.target.classList[j]);
                                }
                            }
                        }
                    };

                    // Create an observer instance linked to the callback function
                    const observer = new MutationObserver(callback);

                    // Start observing the target node for configured mutations
                    observer.observe(observed, config);

                };
                //Initialize Side Naviation
                _proto.initSideNav = function () {
                    const sideNavArgs = _proto.settings.sideNav;
                    sideNavArgs.fullURLEnable = true;
                    sideNavArgs.contentArea = jQuery(_proto.form);
                    const sideNav = jQuery(_proto.sections).sideNavGenerator(sideNavArgs);
                    if (sideNav) {
                        const sideNavLinks = _proto.form.querySelectorAll('.side-nav a');
                        let i = sideNavLinks.length;
                        while (i--) {
                            const thisLink = sideNavLinks[i];
                            const hashRegex = /\#[\w\-\d]+$/g;
                            const anchorID = thisLink.hash;
                            const section = _proto.form.querySelector(anchorID).nextElementSibling;
                            thisLink.href = "#" + section.id;
                            _proto.mutationClasses(section, thisLink.parentElement);
                        }
                    }
                };
                //Leave Warning
                _proto.leaveWarning = function (text) {
                    window.addEventListener('beforeunload', function (e) {
                        e.preventDefault();
                        e.returnValue = text;
                    });
                };
                //Verify Inputs
                _proto.applyVerifyInputs = function (settings) {
                    const verifyInputs = _proto.form.querySelectorAll("[" + settings.dataAttribute + "]");
                    for (let i = 0; i < verifyInputs.length; i++) {
                        const thisVerifyInput = verifyInputs[i];
                        const thisInput = _proto.form.querySelector("#" + thisVerifyInput.getAttribute(settings.dataAttribute));
                        thisInput.addEventListener("formEvent", function (e) {
                            thisVerifyInput.setAttribute("pattern", thisInput.value);
                            thisVerifyInput.dispatchEvent(thisVerifyInput.singleTrigger.event);
                        });
                    }
                };
                //Initialize Forms
                _proto.runMethod = function () {
                    //Call View Original
                    if (typeof populateInputs === "function" && myJson) {
                        document.querySelector("html").classList.add("fiserv-view-original");
                        _proto.viewOriginal = true;
                    }

                    //Duplicate
                    if (_proto.settings.duplicate) {
                        const dupSettings = _proto.settings.duplicate;
                        dupSettings.success = duplicate => {
                            _proto.setObjects(duplicate.form);
                        };
                        _proto.duplicate = new FormsDuplicate(dupSettings);
                    }

                    //Add readonly class to labels
                    _proto.addReadOnlyClass(_proto.inputs);

                    //Add values to radios and checkboxes.
                    _proto.setRadioCheckboxValue(_proto.radios);

                    //Make textareas automatically grow to fit content.
                    _proto.autoGrow(_proto.textareas);

                    //Add an arrow object to selects.
                    _proto.addSelectArrow(_proto.selects);

                    //Add label span class
                    _proto.addSpanClass(_proto.inputs);

                    //Add and remove focus classes
                    _proto.setFocus(_proto.inputs);

                    //Add form validation
                    if (_proto.settings.validateForm) {
                        _proto.validate = jQuery(_proto.form).validateForm(_proto.settings.validateForm);
                    }

                    if (_proto.settings.validateForm2) {
                        _proto.form.classList.add("validate-form");
                        _proto.validate = new ValidateForm(_proto.settings.validateForm2);
                    }

                    //Single Trigger
                    if (_proto.settings.singleTrigger) {
                        jQuery(_proto.inputs).singleTrigger(_proto.settings.singleTrigger);
                    }

                    //Add ID's if there is a progress bar.
                    if (_proto.settings.progress || _proto.settings.paginate) {
                        _proto.settings.autoID = true;
                    }

                    //Add ID's
                    if (_proto.settings.autoID) {
                        _proto.addID(_proto.sections);
                        _proto.addID(_proto.inputs);
                    }

                    //Verify Inputs
                    if (_proto.settings.verifyInputs) {
                        _proto.applyVerifyInputs(_proto.settings.verifyInputs);
                    }

                    //Initialize enabler functions.
                    if (_proto.settings.formsEnabler) {
                        _proto.settings.formsEnabler.form = _proto.form;
                        _proto.enabler = new FormsEnabler(_proto.settings.formsEnabler);
                    }

                    //Initialize enabler functions.
                    if (_proto.settings.formsDisabler) {
                        _proto.settings.formsDisabler.form = _proto.form;
                        _proto.disabler = new FormsEnabler(_proto.settings.formsDisabler);
                    }

                    //Initialize expander functions.
                    if (_proto.settings.formsExpander) {
                        _proto.settings.formsExpander.form = _proto.form;
                        _proto.expander = new FormsExpander(_proto.settings.formsExpander);
                    }

                    //Initialize expander functions.
                    if (_proto.settings.formsCollapser) {
                        _proto.settings.formsCollapser.form = _proto.form;
                        _proto.expander = new FormsExpander(_proto.settings.formsCollapser);
                    }

                    //Initialize Side Nav.
                    if (typeof jQuery.fn.sideNavGenerator === "function" && _proto.settings.sideNav) {
                        _proto.initSideNav();
                    }

                    //Add Pagination
                    if (_proto.settings.paginate) {
                        _proto.paginate(_proto.sections);
                    }

                    //Add input formatting
                    if (_proto.settings.formatInputs) {
                        jQuery(_proto.form).formatInputs(_proto.settings.formatInputs);
                    }

                    //Add Calculate
                    if (_proto.settings.calculate) {
                        _proto.calculate = new FormsCalculate(_proto.settings.calculate);
                    }

                    //Initialize the progress bar.
                    if (_proto.settings.progress) {
                        _proto.generateProgression(_proto.sections);
                    }

                    //Responsive Table
                    if (typeof jQuery.fn.responsiveDataTable === "function") {
                        jQuery("table.Table-Form").responsiveDataTable();
                    }

                    //Initialize leave warning
                    if (_proto.settings.leaveWarning) {
                        _proto.leaveWarning(_proto.settings.leaveWarning);
                    }

                    //Call View Original
                    if (_proto.viewOriginal) {
                        populateInputs(_proto.form, myJson);
                        for (let i = 0; i < _proto.inputs.length; i++) {
                            const thisInput = _proto.inputs[i];
                            thisInput.dispatchEvent(thisInput.singleTrigger.event);
                        }
                    }

                    _proto.form.classList.add("ready");
                    const endDate = new Date();
                    _proto.runTime = (endDate.getTime() - startDate.getTime()) / 1000 + "s";
                };
                _proto.runMethod();

            },
            setSettings = function (thisObj, instanceObj) {
                if (thisObj[settings.packageName]) {
                    if (thisObj[settings.packageName].settings.priority <= settings.priority) {
                        thisObj[settings.packageName] = new fiservForm(thisObj, settings, instanceObj);
                    }
                } else {
                    thisObj[settings.packageName] = new fiservForm(thisObj, settings, instanceObj);
                }
            },
            init = function (obj) {
                for (var i = 0, n = obj.length; i < n; i++) {
                    setSettings(obj.eq(i).get(0), obj);
                }
                document.querySelector("html").classList.add("fiserv-forms");
            };
        init(this);
        return this;
    };
}(jQuery));

// Pseudo Select 4.3.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved.
(function () {
    jQuery.fn.pseudoSelect = function (options) {
        const settings = jQuery.extend(true, {
            nodeName: "span",
            class: {
                select: "ps-select",
                active: "active",
                disabled: "disabled",
                openUp: "open-up",
                ready: "ready"
            },
            openUpPosition: 0.5
        }, options),
        _obj = this,
        parser = new DOMParser(),
        parseObject = function (string) {
            if (!string) return;
            return parser.parseFromString(string, "text/html").body.children[0];
        },
        mutationCallback = function (mutationsList, observer) {
            if (!mutationsList || !observer) return;
            for (let i = 0; i < mutationsList.length; i++) {
                const thisMutation = mutationsList[i];
                if (thisMutation.type === 'attributes') {
                    this.setAttributes(thisMutation);
                }
            }
        },
        mutationConfig = { attributes: true, childList: false, subtree: false },
        setAttributes = function (mutation) {
            const adapt = function (attr) {
                switch (attr) {
                    case "disabled":
                        if (this.obj[attr]) {
                            this.psObj.classList.add(this.settings.class.disabled);
                        } else {
                            this.psObj.classList.remove(this.settings.class.disabled);
                        }
                        break;
                    default:
                }
            }
            const adaptBound = adapt.bind(this);
            if (mutation) {
                adaptBound(mutation.attributeName);
            } else {
                for (let i = 0; i < this.obj.attributes.length; i++) {
                    const thisAttr = this.obj.attributes[i];
                    adaptBound(thisAttr.name.toLowerCase());
                }
            }
        },
        setChildren = function (psSelect, wrapper) {
            if (!psSelect || !wrapper) return;
            for (let i = 0; i < this.obj.children.length; i++) {
                const thisChild = this.obj.children[i];
                const nodeName = thisChild.nodeName.toLowerCase();
                switch (nodeName) {
                    case "option":
                        if (!this.options) this.options = [];
                        this.options.push(new psOption(psSelect, thisChild, wrapper, this.settings));
                        break;
                    case "optgroup":
                        if (!this.optGroups) this.optGroups = [];
                        this.optGroups.push(new psOptionGroup(psSelect, thisChild, wrapper, this.settings));
                        break;
                }
            }
        },
        event = typeof Event === "function" && typeof MooTools === "undefined" ? Event : function (event, params) {
            params = params || { bubbles: false, cancelable: false, detail: undefined };
            const evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        },
        setBaseFunctions = function (con) {
            if (!con) return;
            con.event = event.bind(con);
            con.mutationCallback = mutationCallback.bind(con);
            con.parseObject = parseObject.bind(con);
            con.setAttributes = setAttributes.bind(con);
            con.setChildren = setChildren.bind(con);
        },
        setBaseInit = function (con, obj, settings, psSelect, parent) {
            if (!con || !obj || !settings || !psSelect || !parent) return;
            con.settings = settings;
            con.changeEvent = new event("change");
            con.obj = obj;
            con.psSelect = psSelect;
            con.parent = parent;
            con.observer = new MutationObserver(con.mutationCallback).observe(con.obj, mutationConfig);
        },
        psForm = function (obj, psSelect, settings) {
            if (!obj) return;
            if (!psSelect) return;
            if (!settings) return;
            this.setAttributes = function (mutation) {
                this.psSelect.setScrollParent();
            }

            // Bind Functions
            this.mutationCallback = mutationCallback.bind(this);
            this.setAttributes = this.setAttributes.bind(this);

            // Init
            this.settings = settings;
            this.changeEvent = new event("change");
            this.obj = obj;
            this.psSelect = psSelect;
            this.observer = new MutationObserver(this.mutationCallback).observe(this.obj, mutationConfig);
        },
        psLink = function (psSelect, psOption, parent, settings) {

            // Bind Functions
            setBaseFunctions(this);
            this.parseObject = parseObject.bind(this);

            // Init
            setBaseInit(this, psOption.obj, settings, psSelect, parent);
            this.psOption = psOption;
            this.href = this.psOption.obj.dataset.link;
            this.target = this.psOption.obj.dataset.target ? this.psOption.obj.dataset.target : "_blank";
            this.innerText = this.psOption.innerText;
            this.psObj = this.parseObject('<a href="' + this.href + '" target="' + this.target + '" tabindex="-1">' + this.innerText);
            this.psObj.psLink = this;
            this.parent.innerText = "";
            this.parent.appendChild(this.psObj);
        },
        psOption = function (psSelect, option, parent, settings) {

            this.removeActive = function () {
                this.psObj.classList.remove(this.settings.class.active);
                this.psObj.setAttribute("aria-selected", false);
            }

            this.setActive = function () {
                this.psObj.classList.add(this.settings.class.active);
                this.psObj.setAttribute("aria-selected", true);
            }

            this.setSelected = function (e) {
                this.psSelect.setSelected(e, this.value);
                this.psSelect.psObj.blur();
            }

            // Bind Functions
            setBaseFunctions(this);
            this.setSelected = this.setSelected.bind(this);
            if (parent.psOptGroup) this.psOptGroup = parent.psOptGroup;

            // Init
            setBaseInit(this, option, settings, psSelect, parent);
            this.obj.psOption = this;
            if (!this.obj.hasAttribute("value")) this.obj.setAttribute("value", this.obj.value);
            this.value = this.obj.value;
            this.innerText = this.obj.innerHTML;
            this.psObj = this.parseObject('<' + this.settings.nodeName + ' data-option="' + this.value + '" aria-selected="false">' + this.innerText);
            for (let i = 0; i < option.attributes.length; i++) {
                const thisAttr = option.attributes[i];
                switch (thisAttr.name) {
                    case "value":
                        break;
                    case "disabled":
                        break;
                    case "selected":
                        break;
                    case "data-link":
                        break;
                    case "data-target":
                        break;
                    default:
                        this.psObj.setAttribute(thisAttr.name, thisAttr.value);
                }
            }
            this.psObj.psOption = this;
            if (this.obj.dataset.link) this.psLink = new psLink(this.psSelect, this, this.psObj, this.settings);
            this.setAttributes();
            this.psObj.addEventListener("click", this.setSelected);
            this.parent.appendChild(this.psObj);
         
        },
        psOptionGroup = function (psSelect, optGroup, parent, settings) {

            // Bind Functions
            setBaseFunctions(this);

            // Init
            setBaseInit(this, optGroup, settings, psSelect, parent);
            this.obj.psOptGroup = this;
            this.label = this.obj.label;
            this.psObj = this.parseObject('<' + this.settings.nodeName + ' data-group="' + this.label + '">');
            this.psObj.psOptGroup = this;
            this.setAttributes();
            this.setChildren(this.psSelect, this.psObj);
            this.psSelect.options = this.psSelect.options.concat(this.options);
            this.parent.appendChild(this.psObj);
        },
        psSelect = function (select, parent, settings) {

            this.overflowPosition = function (psOption, container) {
                if (!psOption) return;
                let optGroupOffset = 0;
                if (psOption.psOptGroup) optGroupOffset = psOption.psOptGroup.psObj.offsetTop;
                const bottomView = container.offsetHeight + container.scrollTop;
                const objBottom = psOption.psObj.offsetTop + optGroupOffset + psOption.psObj.offsetHeight;
                if (objBottom > bottomView) return "bottom";
                if (psOption.psObj.offsetTop + optGroupOffset < container.scrollTop) return "top";
                return "visible";
            }

            this.isInView = function (psOption) {
                if (!psOption) return;
                if (this.overflowPosition(psOption, this.wrapper) === "visible") return true;
                return false;
            }

            this.scrollIntoView = function (psOption) {
                if (!psOption) return;
                let optGroupOffset = 0;
                if (psOption.psOptGroup) optGroupOffset = psOption.psOptGroup.psObj.offsetTop;
                switch (this.overflowPosition(psOption, this.wrapper)) {
                    case "top":
                        this.wrapper.scrollTop = psOption.psObj.offsetTop + optGroupOffset;
                        break;
                    case "bottom":
                        this.wrapper.scrollTop = psOption.psObj.offsetTop + optGroupOffset + psOption.psObj.offsetHeight - this.wrapper.offsetHeight;
                        break;
                }
            }

            this.setSelected = function (e, value, step) {
                if (value) this.obj.value = value;
                if (e && e.target.nodeName.toLowerCase() === "a") {
                    if (this.previousSelected) this.obj.value = this.previousSelected.value;
                    if (!this.previousSelected) this.obj.value = "";
                }
                if (step && this.obj.selectedIndex + step >= 0 && this.obj.selectedIndex + step < this.obj.options.length) {
                    this.obj.selectedIndex = this.obj.selectedIndex + step;
                    if (this.options[this.obj.selectedIndex].obj.disabled) this.setSelected(null, null, step);
                }
                if (this.selected) this.selected.removeActive();
                this.selected = this.options[this.obj.selectedIndex];
                if (this.selected !== this.previousSelected && !this.selected.psObj.querySelector("a")) this.previousSelected = this.selected;
                this.selected.setActive();
                if (!this.isInView(this.selected)) this.scrollIntoView(this.selected);
                this.psObj.setAttribute("data-html", this.selected.innerText);
                this.obj.dispatchEvent(this.changeEvent);
            }

            this.stopLabelClick = function (e) {
                if (!e) return;
                if (e.target.nodeName.toLowerCase() !== "a") {
                    e.preventDefault();
                    return false;
                }
                return true;
            }

            this.toggleOpenUp = function () {
                const scrollY = this.scrollParent === window ? window.pageYOffset : this.scrollParent.scrollTop;
                const windowHeight = this.scrollParent === window ? window.innerHeight : this.scrollParent.clientHeight;
                const windowBottom = windowHeight + scrollY;
                const togglePoint = (windowHeight * this.settings.openUpPosition);
                const objY = this.scrollParent === window ? this.psObj.getBoundingClientRect().top : this.psObj.getBoundingClientRect().top - this.scrollParent.getBoundingClientRect().top;
                if (objY > togglePoint) {
                    this.psObj.classList.add(this.settings.class.openUp);
                } else {
                    this.psObj.classList.remove(this.settings.class.openUp);
                }
            }

            this.findScrollParent = function (obj) {
                const parent = obj.parentElement;
                if (parent === document.body || parent === document.querySelector("html")) return window;
                const parentScrollY = window.getComputedStyle(parent).getPropertyValue('overflow-y');
                if (parent.clientHeight < parent.scrollHeight && parentScrollY !== "visible") {
                    return parent;
                } else {
                    return this.findScrollParent(parent.parentElement);
                }
            }

            this.setScrollParent = function () {
                try {
                    this.scrollParent.removeEventListener("scroll", this.toggleOpenUp);
                } catch (err) {
                
                }
                this.scrollParent = this.findScrollParent(this.parent);
                this.scrollParent.addEventListener("scroll", this.toggleOpenUp);
            }

            const jaroDistance = function (a, b) {
                const s1 = a.length;
                const s2 = b.length;
                let m = 0;
                let t = 0;
                const matchDistance = Math.round(Math.max(s1, s2) / 2 - 1);
                const s1Matches = [];
                const s2Matches = [];
                for (let i = 0; i < s1; i++) {
                    const start = Math.max(0, i - matchDistance);
                    const end = Math.min(i + matchDistance, s2);
                    for (let j = start; j < end; j++) {
                        if (a[i] === b[j]) {
                            m++;
                            if (a[i] !== b[i]) {
                                s1Matches[i] = a[i];
                                s2Matches[j] = b[j];
                            }
                            break;
                        }
                    }
                }
                if (!m) return 0;
                s1Matches.reverse();
                s2Matches.reverse();
                for (let i = 0; i < s1Matches.length; i++) {
                    if (s1Matches[i] !== s2Matches[i]) {
                        t++;
                    }
                }
                return (1 / 3) * ((m / s1) + (m / s2) + ((m - t / 2) / m));
            }

            const jaroWinklerDistance = function (a, b) {
                let l = 0;
                const p = 0.1;
                const dj = jaroDistance(a, b);
                const minLength = Math.min(a.length, b.length);
                for (let i = 0; i < minLength; i++) {
                    if (a[i] !== b[i]) break;
                    l++;
                }
                return dj + ((l * p) * (1 - dj));
            }

            this.autoKey = function (e) {
                if (!e) return;
                if (e.keyCode < 48 && e.keyCode !== 32) return;
                if (e.keyCode > 90 && e.keyCode < 96) return;
                if (e.keyCode > 105 && e.keyCode < 186) return;
                if (!this.selected) this.selected = this.obj.options[0];
                const key = e.key.toLowerCase();
                keyString += key;
                for (let i = this.options.length - 1; i >= 0; i--) {
                    const thisOption = this.options[i];
                    const optionString = thisOption.innerText.toLowerCase();
                    const stringDistance = jaroWinklerDistance(keyString, optionString);
                    const selectedDistance = jaroWinklerDistance(keyString, this.selected.innerText.toLowerCase());
                    if (stringDistance > selectedDistance) this.setSelected(null, thisOption.value);
                }
                clearTimeout(KeyTimer);
                KeyTimer = setTimeout(function () {
                    keyString = "";
                }, 1000)
            }

            this.keyCallback = function (e) {
                if (!e) return;
                switch (e.keyCode) {
                    case 40: //arrow down
                        this.setSelected(null, null, 1);
                        e.preventDefault();
                        break;
                    case 38: //arrow up
                        this.setSelected(null, null, -1);
                        e.preventDefault();
                        break;
                    case 9: //tab
                        break;
                    case 13: //enter
                        if (this.selected.psLink) this.selected.psLink.psObj.click();
                        this.psObj.blur();
                        break;
                    case 32:
                        e.preventDefault();
                    default:
                        this.autoKey(e);
                }
            }

            // Bind Functions
            let keyString = "";
            let KeyTimer;
            setBaseFunctions(this);
            this.isInView = this.isInView.bind(this);
            this.keyCallback = this.keyCallback.bind(this);
            this.overflowPosition = this.overflowPosition.bind(this);
            this.scrollIntoView = this.scrollIntoView.bind(this);
            this.setSelected = this.setSelected.bind(this);
            this.toggleOpenUp = this.toggleOpenUp.bind(this);
            this.findScrollParent = this.findScrollParent.bind(this);
            this.setScrollParent = this.setScrollParent.bind(this);
            this.autoKey = this.autoKey.bind(this);

            // Init
            setBaseInit(this, select, settings, this, parent);
            this.obj.psSelect = this;
            this.obj.setAttribute("tabindex", "-1");
            this.obj.addEventListener("input", this.setSelected);
            this.parent.addEventListener("click", this.stopLabelClick);
            this.wrapper = parseObject('<' + this.settings.nodeName + ' data-options-wrapper="pseudo-select">');
            this.psObj = this.parseObject('<' + this.settings.nodeName + ' data-select="pseudo-select" data-html="" tabindex="0" role="listbox">');
            this.psObj.psSelect = this;
            this.psObj.addEventListener("keydown", this.keyCallback);
            this.psObj.addEventListener("focus", this.setScrollParent);
            this.psObj.addEventListener("focus", this.toggleOpenUp);
            this.psObj.appendChild(this.wrapper);
            this.setChildren(this, this.wrapper);
            this.setSelected();
            this.setAttributes();
            this.setScrollParent();
            this.toggleOpenUp();
            this.parent.appendChild(this.psObj);
            this.parent.classList.add(this.settings.class.select);
            this.parent.classList.add(this.settings.class.ready);
        },
        init = function (obj) {
            for (let i = 0; i < obj.length; i++) {
                const currentSelect = obj.eq(i).get(0);
                new psSelect(currentSelect, currentSelect.parentElement, settings);
            }
            document.documentElement.classList.add('pseudo-select-enabled');
        };
        init(this);
        return this;
    }
}(jQuery));


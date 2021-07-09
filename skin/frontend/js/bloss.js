/**
 * Created by Mr.Hung on 10/25/2017.
 */
!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = "length" in e && e.length, n = it.type(e);
        return "function" === n || it.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (it.isFunction(t))return it.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType)return it.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ft.test(t))return it.filter(t, e, n);
            t = it.filter(t, e)
        }
        return it.grep(e, function (e) {
            return it.inArray(e, t) >= 0 !== n
        })
    }

    function i(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = xt[e] = {};
        return it.each(e.match(bt) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        ht.addEventListener ? (ht.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (ht.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (ht.addEventListener || "load" === event.type || "complete" === ht.readyState) && (a(), it.ready())
    }

    function u(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Et, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Nt.test(n) ? it.parseJSON(n) : n
                } catch (i) {
                }
                it.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function l(e) {
        var t;
        for (t in e)if (("data" !== t || !it.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
        return !0
    }

    function c(e, t, n, r) {
        if (it.acceptData(e)) {
            var i, o, a = it.expando, s = e.nodeType, u = s ? it.cache : e, l = s ? e[a] : e[a] && a;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t)return l || (l = s ? e[a] = J.pop() || it.guid++ : a), u[l] || (u[l] = s ? {} : {toJSON: it.noop}), ("object" == typeof t || "function" == typeof t) && (r ? u[l] = it.extend(u[l], t) : u[l].data = it.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[it.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[it.camelCase(t)])) : i = o, i
        }
    }

    function d(e, t, n) {
        if (it.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? it.cache : e, s = o ? e[it.expando] : it.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    it.isArray(t) ? t = t.concat(it.map(t, it.camelCase)) : t in r ? t = [t] : (t = it.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;)delete r[t[i]];
                    if (n ? !l(r) : !it.isEmptyObject(r))return
                }
                (n || (delete a[s].data, l(a[s]))) && (o ? it.cleanData([e], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function f() {
        return !0
    }

    function p() {
        return !1
    }

    function h() {
        try {
            return ht.activeElement
        } catch (e) {
        }
    }

    function m(e) {
        var t = Ft.split("|"), n = e.createDocumentFragment();
        if (n.createElement)for (; t.length;)n.createElement(t.pop());
        return n
    }

    function g(e, t) {
        var n, r, i = 0,
            o = typeof e.getElementsByTagName !== Ct ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ct ? e.querySelectorAll(t || "*") : void 0;
        if (!o)for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)!t || it.nodeName(r, t) ? o.push(r) : it.merge(o, g(r, t));
        return void 0 === t || t && it.nodeName(e, t) ? it.merge([e], o) : o
    }

    function v(e) {
        jt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return it.nodeName(e, "table") && it.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== it.find.attr(e, "type")) + "/" + e.type, e
    }

    function x(e) {
        var t = Vt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++)it._data(n, "globalEval", !t || it._data(t[r], "globalEval"))
    }

    function T(e, t) {
        if (1 === t.nodeType && it.hasData(e)) {
            var n, r, i, o = it._data(e), a = it._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)for (r = 0, i = s[n].length; i > r; r++)it.event.add(t, n, s[n][r])
            }
            a.data && (a.data = it.extend({}, a.data))
        }
    }

    function C(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[it.expando]) {
                i = it._data(t);
                for (r in i.events)it.removeEvent(t, r, i.handle);
                t.removeAttribute(it.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !it.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && jt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function N(t, n) {
        var r, i = it(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : it.css(i[0], "display");
        return i.detach(), o
    }

    function E(e) {
        var t = ht, n = Zt[e];
        return n || (n = N(e, t), "none" !== n && n || (Kt = (Kt || it("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Kt[0].contentWindow || Kt[0].contentDocument).document, t.write(), t.close(), n = N(e, t), Kt.detach()), Zt[e] = n), n
    }

    function k(e, t) {
        return {
            get: function () {
                var n = e();
                if (null != n)return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function S(e, t) {
        if (t in e)return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = pn.length; i--;)if (t = pn[i] + n, t in e)return t;
        return r
    }

    function A(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)r = e[a], r.style && (o[a] = it._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && At(r) && (o[a] = it._data(r, "olddisplay", E(r.nodeName)))) : (i = At(r), (n && "none" !== n || !i) && it._data(r, "olddisplay", i ? n : it.css(r, "display"))));
        for (a = 0; s > a; a++)r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function D(e, t, n) {
        var r = ln.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function j(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += it.css(e, n + St[o], !0, i)), r ? ("content" === n && (a -= it.css(e, "padding" + St[o], !0, i)), "margin" !== n && (a -= it.css(e, "border" + St[o] + "Width", !0, i))) : (a += it.css(e, "padding" + St[o], !0, i), "padding" !== n && (a += it.css(e, "border" + St[o] + "Width", !0, i)));
        return a
    }

    function L(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = en(e),
            a = nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = tn(e, t, o), (0 > i || null == i) && (i = e.style[t]), rn.test(i))return i;
            r = a && (nt.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + j(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function H(e, t, n, r, i) {
        return new H.prototype.init(e, t, n, r, i)
    }

    function q() {
        return setTimeout(function () {
            hn = void 0
        }), hn = it.now()
    }

    function _(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)n = St[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function M(e, t, n) {
        for (var r, i = (xn[t] || []).concat(xn["*"]), o = 0, a = i.length; a > o; o++)if (r = i[o].call(n, t, e))return r
    }

    function F(e, t, n) {
        var r, i, o, a, s, u, l, c, d = this, f = {}, p = e.style, h = e.nodeType && At(e), m = it._data(e, "fxshow");
        n.queue || (s = it._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
            s.unqueued || u()
        }), s.unqueued++, d.always(function () {
            d.always(function () {
                s.unqueued--, it.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = it.css(e, "display"), c = "none" === l ? it._data(e, "olddisplay") || E(e.nodeName) : l, "inline" === c && "none" === it.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)if (i = t[r], gn.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                if ("show" !== i || !m || void 0 === m[r])continue;
                h = !0
            }
            f[r] = m && m[r] || it.style(e, r)
        } else l = void 0;
        if (it.isEmptyObject(f)) "inline" === ("none" === l ? E(e.nodeName) : l) && (p.display = l); else {
            m ? "hidden" in m && (h = m.hidden) : m = it._data(e, "fxshow", {}), o && (m.hidden = !h), h ? it(e).show() : d.done(function () {
                it(e).hide()
            }), d.done(function () {
                var t;
                it._removeData(e, "fxshow");
                for (t in f)it.style(e, t, f[t])
            });
            for (r in f)a = M(h ? m[r] : 0, r, d), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function O(e, t) {
        var n, r, i, o, a;
        for (n in e)if (r = it.camelCase(n), i = t[r], o = e[n], it.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = it.cssHooks[r], a && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o)n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function P(e, t, n) {
        var r, i, o = 0, a = bn.length, s = it.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i)return !1;
            for (var t = hn || q(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++)l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
        }, l = s.promise({
            elem: e,
            props: it.extend({}, t),
            opts: it.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: hn || q(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = it.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i)return this;
                for (i = !0; r > n; n++)l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (O(c, l.opts.specialEasing); a > o; o++)if (r = bn[o].call(l, e, c, l.opts))return r;
        return it.map(c, M, l), it.isFunction(l.opts.start) && l.opts.start.call(e, l), it.fx.timer(it.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function B(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(bt) || [];
            if (it.isFunction(n))for (; r = o[i++];)"+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function R(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, it.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }

        var o = {}, a = e === In;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function W(e, t) {
        var n, r, i = it.ajaxSettings.flatOptions || {};
        for (r in t)void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && it.extend(!0, e, n), e
    }

    function $(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];)u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)for (a in s)if (s[a] && s[a].test(i)) {
            u.unshift(a);
            break
        }
        if (u[0] in n) o = u[0]; else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function z(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])for (a in e.converters)l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (a = l[u + " " + o] || l["* " + o], !a)for (i in l)if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break
            }
            if (a !== !0)if (a && e["throws"]) t = a(t); else try {
                t = a(t)
            } catch (d) {
                return {state: "parsererror", error: a ? d : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function I(e, t, n, r) {
        var i;
        if (it.isArray(t)) it.each(t, function (t, i) {
            n || Jn.test(e) ? r(e, i) : I(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== it.type(t)) r(e, t); else
            for (i in t)I(e + "[" + i + "]", t[i], n, r)
    }

    function X() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function U() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function V(e) {
        return it.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    var J = [], Y = J.slice, G = J.concat, Q = J.push, K = J.indexOf, Z = {}, et = Z.toString, tt = Z.hasOwnProperty,
        nt = {}, rt = "1.11.3", it = function (e, t) {
            return new it.fn.init(e, t)
        }, ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, at = /^-ms-/, st = /-([\da-z])/gi, ut = function (e, t) {
            return t.toUpperCase()
        };
    it.fn = it.prototype = {
        jquery: rt, constructor: it, selector: "", length: 0, toArray: function () {
            return Y.call(this)
        }, get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this)
        }, pushStack: function (e) {
            var t = it.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return it.each(this, e, t)
        }, map: function (e) {
            return this.pushStack(it.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(Y.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: Q, sort: J.sort, splice: J.splice
    }, it.extend = it.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || it.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)if (null != (i = arguments[s]))for (r in i)e = a[r], n = i[r], a !== n && (l && n && (it.isPlainObject(n) || (t = it.isArray(n))) ? (t ? (t = !1, o = e && it.isArray(e) ? e : []) : o = e && it.isPlainObject(e) ? e : {}, a[r] = it.extend(l, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, it.extend({
        expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === it.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === it.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            return !it.isArray(e) && e - parseFloat(e) + 1 >= 0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, isPlainObject: function (e) {
            var t;
            if (!e || "object" !== it.type(e) || e.nodeType || it.isWindow(e))return !1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (n) {
                return !1
            }
            if (nt.ownLast)for (t in e)return tt.call(e, t);
            for (t in e);
            return void 0 === t || tt.call(e, t)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object" : typeof e
        }, globalEval: function (t) {
            t && it.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(at, "ms-").replace(st, ut)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, r) {
            var i, o = 0, a = e.length, s = n(e);
            if (r) {
                if (s)for (; a > o && (i = t.apply(e[o], r), i !== !1); o++); else
                    for (o in e)if (i = t.apply(e[o], r), i === !1)break
            } else if (s)for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++); else
                for (o in e)if (i = t.call(e[o], o, e[o]), i === !1)break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(ot, "")
        }, makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? it.merge(r, "string" == typeof e ? [e] : e) : Q.call(r, e)), r
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (K)return K.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)if (n in t && t[n] === e)return n
            }
            return -1
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r;)e[i++] = t[r++];
            if (n !== n)for (; void 0 !== t[r];)e[i++] = t[r++];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++)r = !t(e[o], o), r !== s && i.push(e[o]);
            return i
        }, map: function (e, t, r) {
            var i, o = 0, a = e.length, s = n(e), u = [];
            if (s)for (; a > o; o++)i = t(e[o], o, r), null != i && u.push(i); else
                for (o in e)i = t(e[o], o, r), null != i && u.push(i);
            return G.apply([], u)
        }, guid: 1, proxy: function (e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), it.isFunction(e) ? (n = Y.call(arguments, 2), r = function () {
                return e.apply(t || this, n.concat(Y.call(arguments)))
            }, r.guid = e.guid = e.guid || it.guid++, r) : void 0
        }, now: function () {
            return +new Date
        }, support: nt
    }), it.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var lt = function (e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, l, d, p, h, m;
            if ((t ? t.ownerDocument || t : R) !== H && L(t), t = t || H, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s)return n;
            if (!r && _) {
                if (11 !== s && (i = yt.exec(e)))if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode)return n;
                        if (o.id === a)return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && P(t, o) && o.id === a)return n.push(o), n
                } else {
                    if (i[2])return K.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = i[3]) && w.getElementsByClassName)return K.apply(n, t.getElementsByClassName(a)), n
                }
                if (w.qsa && (!M || !M.test(e))) {
                    if (p = d = B, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = E(e), (d = t.getAttribute("id")) ? p = d.replace(xt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;)l[u] = p + f(l[u]);
                        h = bt.test(e) && c(t.parentNode) || t, m = l.join(",")
                    }
                    if (m)try {
                        return K.apply(n, h.querySelectorAll(m)), n
                    } catch (g) {
                    } finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(ut, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }

            var t = [];
            return e
        }

        function r(e) {
            return e[B] = !0, e
        }

        function i(e) {
            var t = H.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;)T.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r)return r;
            if (n)for (; n = n.nextSibling;)if (n === t)return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {
        }

        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = $++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, o)
            } : function (t, n, a) {
                var s, u, l = [W, o];
                if (a) {
                    for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, a))return !0
                } else
                    for (; t = t[r];)if (1 === t.nodeType || i) {
                        if (u = t[B] || (t[B] = {}), (s = u[r]) && s[0] === W && s[1] === o)return l[2] = s[2];
                        if (u[r] = l, l[2] = e(t, n, a))return !0
                    }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)if (!e[i](t, n, r))return !1;
                return !0
            } : e[0]
        }

        function m(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++)t(e, n[i], r);
            return r
        }

        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }

        function v(e, t, n, i, o, a) {
            return i && !i[B] && (i = v(i)), o && !o[B] && (o = v(o, a)), r(function (r, a, s, u) {
                var l, c, d, f = [], p = [], h = a.length, v = r || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? v : g(v, f, e, s, u), b = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, b, s, u), i)for (l = g(b, p), i(l, [], s, u), c = l.length; c--;)(d = l[c]) && (b[p[c]] = !(y[p[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = b.length; c--;)(d = b[c]) && l.push(y[c] = d);
                            o(null, b = [], l, u)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (l = o ? et(r, d) : f[c]) > -1 && (r[l] = !(a[l] = d))
                    }
                } else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, u) : K.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = p(function (e) {
                return e === t
            }, a, !0), l = p(function (e) {
                return et(t, e) > -1
            }, a, !0), c = [function (e, n, r) {
                var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null, i
            }]; i > s; s++)if (n = T.relative[e[s].type]) c = [p(h(c), n)]; else {
                if (n = T.filter[e[s].type].apply(null, e[s].matches), n[B]) {
                    for (r = ++s; i > r && !T.relative[e[r].type]; r++);
                    return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(ut, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e))
                }
                c.push(n)
            }
            return h(c)
        }

        function b(e, n) {
            var i = n.length > 0, o = e.length > 0, a = function (r, a, s, u, l) {
                var c, d, f, p = 0, h = "0", m = r && [], v = [], y = A, b = r || o && T.find.TAG("*", l),
                    x = W += null == y ? 1 : Math.random() || .1, w = b.length;
                for (l && (A = a !== H && a); h !== w && null != (c = b[h]); h++) {
                    if (o && c) {
                        for (d = 0; f = e[d++];)if (f(c, a, s)) {
                            u.push(c);
                            break
                        }
                        l && (W = x)
                    }
                    i && ((c = !f && c) && p--, r && m.push(c))
                }
                if (p += h, i && h !== p) {
                    for (d = 0; f = n[d++];)f(m, v, a, s);
                    if (r) {
                        if (p > 0)for (; h--;)m[h] || v[h] || (v[h] = G.call(u));
                        v = g(v)
                    }
                    K.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                }
                return l && (W = x, A = y), m
            };
            return i ? r(a) : a
        }

        var x, w, T, C, N, E, k, S, A, D, j, L, H, q, _, M, F, O, P, B = "sizzle" + 1 * new Date, R = e.document, W = 0,
            $ = 0, z = n(), I = n(), X = n(), U = function (e, t) {
                return e === t && (j = !0), 0
            }, V = 1 << 31, J = {}.hasOwnProperty, Y = [], G = Y.pop, Q = Y.push, K = Y.push, Z = Y.slice,
            et = function (e, t) {
                for (var n = 0, r = e.length; r > n; n++)if (e[n] === t)return n;
                return -1
            },
            tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", it = rt.replace("w", "w#"),
            ot = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
            at = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
            st = new RegExp(nt + "+", "g"), ut = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            lt = new RegExp("^" + nt + "*," + nt + "*"), ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"), ft = new RegExp(at),
            pt = new RegExp("^" + it + "$"), ht = {
                ID: new RegExp("^#(" + rt + ")"),
                CLASS: new RegExp("^\\.(" + rt + ")"),
                TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + at),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + tt + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            }, mt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, bt = /[+~]/, xt = /'|\\/g,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), Tt = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, Ct = function () {
                L()
            };
        try {
            K.apply(Y = Z.call(R.childNodes), R.childNodes), Y[R.childNodes.length].nodeType
        } catch (Nt) {
            K = {
                apply: Y.length ? function (e, t) {
                    Q.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, N = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, L = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : R;
            return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, q = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), _ = !N(r), w.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function (e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = vt.test(r.getElementsByClassName), w.getById = i(function (e) {
                return q.appendChild(e).id = B, !r.getElementsByName || !r.getElementsByName(B).length
            }), w.getById ? (T.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && _) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(wt, Tt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function (e) {
                var t = e.replace(wt, Tt);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];)1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
                    return _ ? t.getElementsByClassName(e) : void 0
                }, F = [], M = [], (w.qsa = vt.test(r.querySelectorAll)) && (i(function (e) {
                q.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + B + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || M.push(".#.+[+~]")
            }), i(function (e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
            })), (w.matchesSelector = vt.test(O = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function (e) {
                w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), F.push("!=", at)
            }), M = M.length && new RegExp(M.join("|")), F = F.length && new RegExp(F.join("|")), t = vt.test(q.compareDocumentPosition), P = t || vt.test(q.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            }, U = t ? function (e, t) {
                if (e === t)return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === R && P(R, e) ? -1 : t === r || t.ownerDocument === R && P(R, t) ? 1 : D ? et(D, e) - et(D, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t)return j = !0, 0;
                var n, i = 0, o = e.parentNode, s = t.parentNode, u = [e], l = [t];
                if (!o || !s)return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : D ? et(D, e) - et(D, t) : 0;
                if (o === s)return a(e, t);
                for (n = e; n = n.parentNode;)u.unshift(n);
                for (n = t; n = n.parentNode;)l.unshift(n);
                for (; u[i] === l[i];)i++;
                return i ? a(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
            }, r) : H
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== H && L(e), n = n.replace(dt, "='$1']"), !(!w.matchesSelector || !_ || F && F.test(n) || M && M.test(n)))try {
                var r = O.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)return r
            } catch (i) {
            }
            return t(n, H, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== H && L(e), P(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== H && L(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && J.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
            return void 0 !== r ? r : w.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (j = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), j) {
                for (; t = e[i++];)t === e[i] && (r = n.push(i));
                for (; r--;)e.splice(n[r], 1)
            }
            return D = null, e
        }, C = t.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += C(e)
                } else if (3 === i || 4 === i)return e.nodeValue
            } else
                for (; t = e[r++];)n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(wt, Tt), e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ft.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(wt, Tt).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && z(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(), y = !u && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (c = g[B] || (g[B] = {}), l = c[e] || [], p = l[0] === W && l[1], f = l[0] === W && l[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)if (1 === d.nodeType && ++f && d === t) {
                                    c[e] = [W, p, f];
                                    break
                                }
                            } else if (y && (l = (t[B] || (t[B] = {}))[e]) && l[0] === W) f = l[1]; else
                                for (; (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[B] || (d[B] = {}))[e] = [W, f]), d !== t)););
                            return f -= i, f === r || f % r === 0 && f / r >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[B] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;)r = et(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [], n = [], i = k(e.replace(ut, "$1"));
                    return i[B] ? r(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: r(function (e) {
                    return e = e.replace(wt, Tt), function (t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }), lang: r(function (e) {
                    return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, Tt).toLowerCase(), function (t) {
                        var n;
                        do
                            if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === q
                }, focus: function (e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                    return !0
                }, parent: function (e) {
                    return !T.pseudos.empty(e)
                }, header: function (e) {
                    return gt.test(e.nodeName)
                }, input: function (e) {
                    return mt.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: l(function () {
                    return [0]
                }), last: l(function (e, t) {
                    return [t - 1]
                }), eq: l(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: l(function (e, t) {
                    for (var n = 0; t > n; n += 2)e.push(n);
                    return e
                }), odd: l(function (e, t) {
                    for (var n = 1; t > n; n += 2)e.push(n);
                    return e
                }), lt: l(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;)e.push(r);
                    return e
                }), gt: l(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;)e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})T.pseudos[x] = s(x);
        for (x in{submit: !0, reset: !0})T.pseudos[x] = u(x);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = t.tokenize = function (e, n) {
            var r, i, o, a, s, u, l, c = I[e + " "];
            if (c)return n ? 0 : c.slice(0);
            for (s = e, u = [], l = T.preFilter; s;) {
                (!r || (i = lt.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ct.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ut, " ")
                }), s = s.slice(r.length));
                for (a in T.filter)!(i = ht[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r)break
            }
            return n ? s.length : s ? t.error(e) : I(e, u).slice(0)
        }, k = t.compile = function (e, t) {
            var n, r = [], i = [], o = X[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;)o = y(t[n]), o[B] ? r.push(o) : i.push(o);
                o = X(e, b(i, r)), o.selector = e
            }
            return o
        }, S = t.select = function (e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, d = !r && E(e = l.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && _ && T.relative[o[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(wt, Tt), t) || [])[0], !t)return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = ht.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)if ((u = T.find[s]) && (r = u(a.matches[0].replace(wt, Tt), bt.test(o[0].type) && c(t.parentNode) || t))) {
                    if (o.splice(i, 1), e = r.length && f(o), !e)return K.apply(n, r), n;
                    break
                }
            }
            return (l || k(e, d))(r, t, !_, n, bt.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = B.split("").sort(U).join("") === B, w.detectDuplicates = !!j, L(), w.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(H.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(tt, function (e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    it.find = lt, it.expr = lt.selectors, it.expr[":"] = it.expr.pseudos, it.unique = lt.uniqueSort, it.text = lt.getText, it.isXMLDoc = lt.isXML, it.contains = lt.contains;
    var ct = it.expr.match.needsContext, dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ft = /^.[^:#\[\.,]*$/;
    it.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? it.find.matchesSelector(r, e) ? [r] : [] : it.find.matches(e, it.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, it.fn.extend({
        find: function (e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e)return this.pushStack(it(e).filter(function () {
                for (t = 0; i > t; t++)if (it.contains(r[t], this))return !0
            }));
            for (t = 0; i > t; t++)it.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? it.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        }, is: function (e) {
            return !!r(this, "string" == typeof e && ct.test(e) ? it(e) : e || [], !1).length
        }
    });
    var pt, ht = e.document, mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, gt = it.fn.init = function (e, t) {
        var n, r;
        if (!e)return this;
        if ("string" == typeof e) {
            if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : mt.exec(e), !n || !n[1] && t)return !t || t.jquery ? (t || pt).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof it ? t[0] : t, it.merge(this, it.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ht, !0)), dt.test(n[1]) && it.isPlainObject(t))for (n in t)it.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if (r = ht.getElementById(n[2]), r && r.parentNode) {
                if (r.id !== n[2])return pt.find(e);
                this.length = 1, this[0] = r
            }
            return this.context = ht, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : it.isFunction(e) ? "undefined" != typeof pt.ready ? pt.ready(e) : e(it) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), it.makeArray(e, this))
    };
    gt.prototype = it.fn, pt = it(ht);
    var vt = /^(?:parents|prev(?:Until|All))/, yt = {children: !0, contents: !0, next: !0, prev: !0};
    it.extend({
        dir: function (e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !it(i).is(n));)1 === i.nodeType && r.push(i), i = i[t];
            return r
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), it.fn.extend({
        has: function (e) {
            var t, n = it(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)if (it.contains(this, n[t]))return !0
            })
        }, closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ct.test(e) || "string" != typeof e ? it(e, t || this.context) : 0; i > r; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? it.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? it.inArray(this[0], it(e)) : it.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(it.unique(it.merge(this.get(), it(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), it.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return it.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return it.dir(e, "parentNode", n)
        }, next: function (e) {
            return i(e, "nextSibling")
        }, prev: function (e) {
            return i(e, "previousSibling")
        }, nextAll: function (e) {
            return it.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return it.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return it.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return it.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return it.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return it.sibling(e.firstChild)
        }, contents: function (e) {
            return it.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : it.merge([], e.childNodes)
        }
    }, function (e, t) {
        it.fn[e] = function (n, r) {
            var i = it.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = it.filter(r, i)), this.length > 1 && (yt[e] || (i = it.unique(i)), vt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var bt = /\S+/g, xt = {};
    it.Callbacks = function (e) {
        e = "string" == typeof e ? xt[e] || o(e) : it.extend({}, e);
        var t, n, r, i, a, s, u = [], l = !e.once && [], c = function (o) {
            for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = u.length, t = !0; u && i > a; a++)if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                n = !1;
                break
            }
            t = !1, u && (l ? l.length && c(l.shift()) : n ? u = [] : d.disable())
        }, d = {
            add: function () {
                if (u) {
                    var r = u.length;
                    !function o(t) {
                        it.each(t, function (t, n) {
                            var r = it.type(n);
                            "function" === r ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                        })
                    }(arguments), t ? i = u.length : n && (s = r, c(n))
                }
                return this
            }, remove: function () {
                return u && it.each(arguments, function (e, n) {
                    for (var r; (r = it.inArray(n, u, r)) > -1;)u.splice(r, 1), t && (i >= r && i--, a >= r && a--)
                }), this
            }, has: function (e) {
                return e ? it.inArray(e, u) > -1 : !(!u || !u.length)
            }, empty: function () {
                return u = [], i = 0, this
            }, disable: function () {
                return u = l = n = void 0, this
            }, disabled: function () {
                return !u
            }, lock: function () {
                return l = void 0, n || d.disable(), this
            }, locked: function () {
                return !l
            }, fireWith: function (e, n) {
                return !u || r && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : c(n)), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return d
    }, it.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", it.Callbacks("once memory"), "resolved"], ["reject", "fail", it.Callbacks("once memory"), "rejected"], ["notify", "progress", it.Callbacks("memory")]],
                n = "pending", r = {
                    state: function () {
                        return n
                    }, always: function () {
                        return i.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return it.Deferred(function (n) {
                            it.each(t, function (t, o) {
                                var a = it.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && it.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? it.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, it.each(t, function (e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t, n, r, i = 0, o = Y.call(arguments), a = o.length,
                s = 1 !== a || e && it.isFunction(e.promise) ? a : 0, u = 1 === s ? e : it.Deferred(),
                l = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? Y.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1)for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++)o[i] && it.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    });
    var wt;
    it.fn.ready = function (e) {
        return it.ready.promise().done(e), this
    }, it.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? it.readyWait++ : it.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? !--it.readyWait : !it.isReady) {
                if (!ht.body)return setTimeout(it.ready);
                it.isReady = !0, e !== !0 && --it.readyWait > 0 || (wt.resolveWith(ht, [it]), it.fn.triggerHandler && (it(ht).triggerHandler("ready"), it(ht).off("ready")))
            }
        }
    }), it.ready.promise = function (t) {
        if (!wt)if (wt = it.Deferred(), "complete" === ht.readyState) setTimeout(it.ready); else if (ht.addEventListener) ht.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1); else {
            ht.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && ht.documentElement
            } catch (r) {
            }
            n && n.doScroll && !function i() {
                if (!it.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    a(), it.ready()
                }
            }()
        }
        return wt.promise(t)
    };
    var Tt, Ct = "undefined";
    for (Tt in it(nt))break;
    nt.ownLast = "0" !== Tt, nt.inlineBlockNeedsLayout = !1, it(function () {
        var e, t, n, r;
        n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), r = ht.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ct && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
    }), function () {
        var e = ht.createElement("div");
        if (null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                nt.deleteExpando = !1
            }
        }
        e = null
    }(), it.acceptData = function (e) {
        var t = it.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    };
    var Nt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Et = /([A-Z])/g;
    it.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return e = e.nodeType ? it.cache[e[it.expando]] : e[it.expando], !!e && !l(e)
        },
        data: function (e, t, n) {
            return c(e, t, n)
        },
        removeData: function (e, t) {
            return d(e, t)
        },
        _data: function (e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return d(e, t, !0)
        }
    }), it.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = it.data(o), 1 === o.nodeType && !it._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;)a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = it.camelCase(r.slice(5)), u(o, r, i[r])));
                    it._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                it.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                it.data(this, e, t)
            }) : o ? u(o, e, it.data(o, e)) : void 0
        }, removeData: function (e) {
            return this.each(function () {
                it.removeData(this, e)
            })
        }
    }), it.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = it._data(e, t), n && (!r || it.isArray(n) ? r = it._data(e, t, it.makeArray(n)) : r.push(n)), r || []) : void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = it.queue(e, t), r = n.length, i = n.shift(), o = it._queueHooks(e, t), a = function () {
                it.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return it._data(e, n) || it._data(e, n, {
                    empty: it.Callbacks("once memory").add(function () {
                        it._removeData(e, t + "queue"), it._removeData(e, n)
                    })
                })
        }
    }), it.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? it.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = it.queue(this, e, t);
                it._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && it.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                it.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = it.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)n = it._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var kt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, St = ["Top", "Right", "Bottom", "Left"],
        At = function (e, t) {
            return e = t || e, "none" === it.css(e, "display") || !it.contains(e.ownerDocument, e)
        }, Dt = it.access = function (e, t, n, r, i, o, a) {
            var s = 0, u = e.length, l = null == n;
            if ("object" === it.type(n)) {
                i = !0;
                for (s in n)it.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, it.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(it(e), n)
                })), t))for (; u > s; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        }, jt = /^(?:checkbox|radio)$/i;
    !function () {
        var e = ht.createElement("input"), t = ht.createElement("div"), n = ht.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ht.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
                nt.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                nt.deleteExpando = !1
            }
        }
    }(), function () {
        var t, n, r = ht.createElement("div");
        for (t in{
            submit: !0,
            change: !0,
            focusin: !0
        })n = "on" + t, (nt[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), nt[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var Lt = /^(?:input|select|textarea)$/i, Ht = /^key/, qt = /^(?:mouse|pointer|contextmenu)|click/,
        _t = /^(?:focusinfocus|focusoutblur)$/, Mt = /^([^.]*)(?:\.(.+)|)$/;
    it.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, m, g = it._data(e);
            if (g) {
                for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = it.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function (e) {
                    return typeof it === Ct || e && it.event.triggered === e.type ? void 0 : it.event.dispatch.apply(c.elem, arguments)
                }, c.elem = e), t = (t || "").match(bt) || [""], s = t.length; s--;)o = Mt.exec(t[s]) || [], p = m = o[1], h = (o[2] || "").split(".").sort(), p && (l = it.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = it.event.special[p] || {}, d = it.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && it.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, u), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, l.setup && l.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), it.event.global[p] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, m, g = it.hasData(e) && it._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(bt) || [""], l = t.length; l--;)if (s = Mt.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                    for (d = it.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; o--;)a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                    u && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || it.removeEvent(e, p, g.handle), delete c[p])
                } else
                    for (p in c)it.event.remove(e, p + t[l], n, r, !0);
                it.isEmptyObject(c) && (delete g.handle, it._removeData(e, "events"))
            }
        },
        trigger: function (t, n, r, i) {
            var o, a, s, u, l, c, d, f = [r || ht], p = tt.call(t, "type") ? t.type : t,
                h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || ht, 3 !== r.nodeType && 8 !== r.nodeType && !_t.test(p + it.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[it.expando] ? t : new it.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : it.makeArray(n, [t]), l = it.event.special[p] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!i && !l.noBubble && !it.isWindow(r)) {
                    for (u = l.delegateType || p, _t.test(u + p) || (s = s.parentNode); s; s = s.parentNode)f.push(s), c = s;
                    c === (r.ownerDocument || ht) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0; (s = f[d++]) && !t.isPropagationStopped();)t.type = d > 1 ? u : l.bindType || p, o = (it._data(s, "events") || {})[t.type] && it._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && it.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(f.pop(), n) === !1) && it.acceptData(r) && a && r[p] && !it.isWindow(r)) {
                    c = r[a], c && (r[a] = null), it.event.triggered = p;
                    try {
                        r[p]()
                    } catch (m) {
                    }
                    it.event.triggered = void 0, c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = it.event.fix(e);
            var t, n, r, i, o, a = [], s = Y.call(arguments), u = (it._data(this, "events") || {})[e.type] || [],
                l = it.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = it.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped();)for (e.currentTarget = i.elem, o = 0; (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((it.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))for (; u != this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                for (i = [], o = 0; s > o; o++)r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? it(n, this).index(u) >= 0 : it.find(n, this, null, [u]).length), i[n] && i.push(r);
                i.length && a.push({elem: u, handlers: i})
            }
            return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
        },
        fix: function (e) {
            if (e[it.expando])return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = qt.test(i) ? this.mouseHooks : Ht.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new it.Event(o), t = r.length; t--;)n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || ht), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i, o = t.button, a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || ht, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== h() && this.focus)try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return it.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (e) {
                    return it.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = it.extend(new it.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? it.event.trigger(i, null, t) : it.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, it.removeEvent = ht.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Ct && (e[r] = null), e.detachEvent(r, n))
    }, it.Event = function (e, t) {
        return this instanceof it.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : p) : this.type = e, t && it.extend(this, t), this.timeStamp = e && e.timeStamp || it.now(), void(this[it.expando] = !0)) : new it.Event(e, t)
    }, it.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, it.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        it.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !it.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), nt.submitBubbles || (it.event.special.submit = {
        setup: function () {
            return it.nodeName(this, "form") ? !1 : void it.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target, n = it.nodeName(t, "input") || it.nodeName(t, "button") ? t.form : void 0;
                n && !it._data(n, "submitBubbles") && (it.event.add(n, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), it._data(n, "submitBubbles", !0))
            })
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && it.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            return it.nodeName(this, "form") ? !1 : void it.event.remove(this, "._submit")
        }
    }), nt.changeBubbles || (it.event.special.change = {
        setup: function () {
            return Lt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (it.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), it.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), it.event.simulate("change", this, e, !0)
            })), !1) : void it.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Lt.test(t.nodeName) && !it._data(t, "changeBubbles") && (it.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || it.event.simulate("change", this.parentNode, e, !0)
                }), it._data(t, "changeBubbles", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return it.event.remove(this, "._change"), !Lt.test(this.nodeName)
        }
    }), nt.focusinBubbles || it.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            it.event.simulate(t, e.target, it.event.fix(e), !0)
        };
        it.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = it._data(r, t);
                i || r.addEventListener(e, n, !0), it._data(r, t, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = it._data(r, t) - 1;
                i ? it._data(r, t, i) : (r.removeEventListener(e, n, !0), it._removeData(r, t))
            }
        }
    }), it.fn.extend({
        on: function (e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e)this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = p; else if (!r)return this;
            return 1 === i && (a = r, r = function (e) {
                return it().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = it.guid++)), this.each(function () {
                it.event.add(this, e, r, n, t)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)return r = e.handleObj, it(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e)this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function () {
                it.event.remove(this, e, n, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                it.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            return n ? it.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ft = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ot = / jQuery\d+="(?:null|\d+)"/g, Pt = new RegExp("<(?:" + Ft + ")[\\s/>]", "i"), Bt = /^\s+/,
        Rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Wt = /<([\w:]+)/,
        $t = /<tbody/i, zt = /<|&#?\w+;/, It = /<(?:script|style|link)/i, Xt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ut = /^$|\/(?:java|ecma)script/i, Vt = /^true\/(.*)/, Jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Yt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, Gt = m(ht), Qt = Gt.appendChild(ht.createElement("div"));
    Yt.optgroup = Yt.option, Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead, Yt.th = Yt.td, it.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, u = it.contains(e.ownerDocument, e);
            if (nt.html5Clone || it.isXMLDoc(e) || !Pt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Qt.innerHTML = e.outerHTML, Qt.removeChild(o = Qt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || it.isXMLDoc(e)))for (r = g(o), s = g(e), a = 0; null != (i = s[a]); ++a)r[a] && C(i, r[a]);
            if (t)if (n)for (s = s || g(e), r = r || g(o), a = 0; null != (i = s[a]); a++)T(i, r[a]); else T(e, o);
            return r = g(o, "script"), r.length > 0 && w(r, !u && g(e, "script")), r = s = i = null, o
        }, buildFragment: function (e, t, n, r) {
            for (var i, o, a, s, u, l, c, d = e.length, f = m(t), p = [], h = 0; d > h; h++)if (o = e[h], o || 0 === o)if ("object" === it.type(o)) it.merge(p, o.nodeType ? [o] : o); else if (zt.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), u = (Wt.exec(o) || ["", ""])[1].toLowerCase(), c = Yt[u] || Yt._default, s.innerHTML = c[1] + o.replace(Rt, "<$1></$2>") + c[2], i = c[0]; i--;)s = s.lastChild;
                if (!nt.leadingWhitespace && Bt.test(o) && p.push(t.createTextNode(Bt.exec(o)[0])), !nt.tbody)for (o = "table" !== u || $t.test(o) ? "<table>" !== c[1] || $t.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;)it.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (it.merge(p, s.childNodes), s.textContent = ""; s.firstChild;)s.removeChild(s.firstChild);
                s = f.lastChild
            } else p.push(t.createTextNode(o));
            for (s && f.removeChild(s), nt.appendChecked || it.grep(g(p, "input"), v), h = 0; o = p[h++];)if ((!r || -1 === it.inArray(o, r)) && (a = it.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && w(s), n))for (i = 0; o = s[i++];)Ut.test(o.type || "") && n.push(o);
            return s = null, f
        }, cleanData: function (e, t) {
            for (var n, r, i, o, a = 0, s = it.expando, u = it.cache, l = nt.deleteExpando, c = it.event.special; null != (n = e[a]); a++)if ((t || it.acceptData(n)) && (i = n[s], o = i && u[i])) {
                if (o.events)for (r in o.events)c[r] ? it.event.remove(n, r) : it.removeEvent(n, r, o.handle);
                u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== Ct ? n.removeAttribute(s) : n[s] = null, J.push(i))
            }
        }
    }), it.fn.extend({
        text: function (e) {
            return Dt(this, function (e) {
                return void 0 === e ? it.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ht).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var n, r = e ? it.filter(e, this) : this, i = 0; null != (n = r[i]); i++)t || 1 !== n.nodeType || it.cleanData(g(n)), n.parentNode && (t && it.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && it.cleanData(g(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
                e.options && it.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return it.clone(this, e, t)
            })
        }, html: function (e) {
            return Dt(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e)return 1 === t.nodeType ? t.innerHTML.replace(Ot, "") : void 0;
                if (!("string" != typeof e || It.test(e) || !nt.htmlSerialize && Pt.test(e) || !nt.leadingWhitespace && Bt.test(e) || Yt[(Wt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Rt, "<$1></$2>");
                    try {
                        for (; r > n; n++)t = this[n] || {}, 1 === t.nodeType && (it.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, it.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t) {
            e = G.apply([], e);
            var n, r, i, o, a, s, u = 0, l = this.length, c = this, d = l - 1, f = e[0], p = it.isFunction(f);
            if (p || l > 1 && "string" == typeof f && !nt.checkClone && Xt.test(f))return this.each(function (n) {
                var r = c.eq(n);
                p && (e[0] = f.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (s = it.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = it.map(g(s, "script"), b), i = o.length; l > u; u++)r = s, u !== d && (r = it.clone(r, !0, !0), i && it.merge(o, g(r, "script"))), t.call(this[u], r, u);
                if (i)for (a = o[o.length - 1].ownerDocument, it.map(o, x), u = 0; i > u; u++)r = o[u], Ut.test(r.type || "") && !it._data(r, "globalEval") && it.contains(a, r) && (r.src ? it._evalUrl && it._evalUrl(r.src) : it.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Jt, "")));
                s = n = null
            }
            return this
        }
    }), it.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        it.fn[e] = function (e) {
            for (var n, r = 0, i = [], o = it(e), a = o.length - 1; a >= r; r++)n = r === a ? this : this.clone(!0), it(o[r])[t](n), Q.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Kt, Zt = {};
    !function () {
        var e;
        nt.shrinkWrapBlocks = function () {
            if (null != e)return e;
            e = !1;
            var t, n, r;
            return n = ht.getElementsByTagName("body")[0], n && n.style ? (t = ht.createElement("div"), r = ht.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ct && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ht.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    }();
    var en, tn, nn = /^margin/, rn = new RegExp("^(" + kt + ")(?!px)[a-z%]+$", "i"), on = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (en = function (t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    }, tn = function (e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || en(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || it.contains(e.ownerDocument, e) || (a = it.style(e, t)), rn.test(a) && nn.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
    }) : ht.documentElement.currentStyle && (en = function (e) {
            return e.currentStyle
        }, tn = function (e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || en(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rn.test(a) && !on.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
        }), function () {
        function t() {
            var t, n, r, i;
            n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), r = ht.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, u = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {width: "4px"}).width, i = t.appendChild(ht.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", u = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(i)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r))
        }

        var n, r, i, o, a, s, u;
        n = ht.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === r.opacity, nt.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, it.extend(nt, {
            reliableHiddenOffsets: function () {
                return null == s && t(), s
            }, boxSizingReliable: function () {
                return null == a && t(), a
            }, pixelPosition: function () {
                return null == o && t(), o
            }, reliableMarginRight: function () {
                return null == u && t(), u
            }
        }))
    }(), it.swap = function (e, t, n, r) {
        var i, o, a = {};
        for (o in t)a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)e.style[o] = a[o];
        return i
    };
    var an = /alpha\([^)]*\)/i, sn = /opacity\s*=\s*([^)]*)/, un = /^(none|table(?!-c[ea]).+)/,
        ln = new RegExp("^(" + kt + ")(.*)$", "i"), cn = new RegExp("^([+-])=(" + kt + ")", "i"),
        dn = {position: "absolute", visibility: "hidden", display: "block"},
        fn = {letterSpacing: "0", fontWeight: "400"}, pn = ["Webkit", "O", "Moz", "ms"];
    it.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = tn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": nt.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = it.camelCase(t), u = e.style;
                if (t = it.cssProps[s] || (it.cssProps[s] = S(u, s)), a = it.cssHooks[t] || it.cssHooks[s], void 0 === n)return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                if (o = typeof n, "string" === o && (i = cn.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(it.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || it.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r)))))try {
                    u[t] = n
                } catch (l) {
                }
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = it.camelCase(t);
            return t = it.cssProps[s] || (it.cssProps[s] = S(e.style, s)), a = it.cssHooks[t] || it.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tn(e, t, r)), "normal" === o && t in fn && (o = fn[t]), "" === n || n ? (i = parseFloat(o), n === !0 || it.isNumeric(i) ? i || 0 : o) : o
        }
    }), it.each(["height", "width"], function (e, t) {
        it.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? un.test(it.css(e, "display")) && 0 === e.offsetWidth ? it.swap(e, dn, function () {
                    return L(e, t, r)
                }) : L(e, t, r) : void 0
            }, set: function (e, n, r) {
                var i = r && en(e);
                return D(e, n, r ? j(e, t, r, nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), nt.opacity || (it.cssHooks.opacity = {
        get: function (e, t) {
            return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = it.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === it.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = an.test(o) ? o.replace(an, i) : o + " " + i)
        }
    }), it.cssHooks.marginRight = k(nt.reliableMarginRight, function (e, t) {
        return t ? it.swap(e, {display: "inline-block"}, tn, [e, "marginRight"]) : void 0
    }), it.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        it.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)i[e + St[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, nn.test(e) || (it.cssHooks[e + t].set = D)
    }), it.fn.extend({
        css: function (e, t) {
            return Dt(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (it.isArray(t)) {
                    for (r = en(e), i = t.length; i > a; a++)o[t[a]] = it.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? it.style(e, t, n) : it.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return A(this, !0)
        }, hide: function () {
            return A(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                At(this) ? it(this).show() : it(this).hide()
            })
        }
    }), it.Tween = H, H.prototype = {
        constructor: H, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (it.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = H.propHooks[this.prop];
            return this.pos = t = this.options.duration ? it.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = it.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                it.fx.step[e.prop] ? it.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[it.cssProps[e.prop]] || it.cssHooks[e.prop]) ? it.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, it.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, it.fx = H.prototype.init, it.fx.step = {};
    var hn, mn, gn = /^(?:toggle|show|hide)$/, vn = new RegExp("^(?:([+-])=|)(" + kt + ")([a-z%]*)$", "i"),
        yn = /queueHooks$/, bn = [F], xn = {
            "*": [function (e, t) {
                var n = this.createTween(e, t), r = n.cur(), i = vn.exec(t), o = i && i[3] || (it.cssNumber[e] ? "" : "px"),
                    a = (it.cssNumber[e] || "px" !== o && +r) && vn.exec(it.css(n.elem, e)), s = 1, u = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, it.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    it.Animation = it.extend(P, {
        tweener: function (e, t) {
            it.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++)n = e[r], xn[n] = xn[n] || [], xn[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? bn.unshift(e) : bn.push(e)
        }
    }), it.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? it.extend({}, e) : {
            complete: n || !n && t || it.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !it.isFunction(t) && t
        };
        return r.duration = it.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in it.fx.speeds ? it.fx.speeds[r.duration] : it.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            it.isFunction(r.old) && r.old.call(this), r.queue && it.dequeue(this, r.queue)
        }, r
    }, it.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(At).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = it.isEmptyObject(e), o = it.speed(t, n, r), a = function () {
                var t = P(this, it.extend({}, e), o);
                (i || it._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = it.timers, a = it._data(this);
                if (i) a[i] && a[i].stop && r(a[i]); else
                    for (i in a)a[i] && a[i].stop && yn.test(i) && r(a[i]);
                for (i = o.length; i--;)o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                (t || !n) && it.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = it._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = it.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, it.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), it.each(["toggle", "show", "hide"], function (e, t) {
        var n = it.fn[t];
        it.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_(t, !0), e, r, i)
        }
    }), it.each({
        slideDown: _("show"),
        slideUp: _("hide"),
        slideToggle: _("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        it.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), it.timers = [], it.fx.tick = function () {
        var e, t = it.timers, n = 0;
        for (hn = it.now(); n < t.length; n++)e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || it.fx.stop(), hn = void 0
    }, it.fx.timer = function (e) {
        it.timers.push(e), e() ? it.fx.start() : it.timers.pop()
    }, it.fx.interval = 13, it.fx.start = function () {
        mn || (mn = setInterval(it.fx.tick, it.fx.interval))
    }, it.fx.stop = function () {
        clearInterval(mn), mn = null
    }, it.fx.speeds = {slow: 600, fast: 200, _default: 400}, it.fn.delay = function (e, t) {
        return e = it.fx ? it.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var r = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(r)
            }
        })
    }, function () {
        var e, t, n, r, i;
        t = ht.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = ht.createElement("select"), i = n.appendChild(ht.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(r.getAttribute("style")), nt.hrefNormalized = "/a" === r.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected = i.selected, nt.enctype = !!ht.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !i.disabled, e = ht.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value
    }();
    var wn = /\r/g;
    it.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)return r = it.isFunction(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, it(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : it.isArray(i) && (i = it.map(i, function (e) {
                            return null == e ? "" : e + ""
                        })), t = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i)return t = it.valHooks[i.type] || it.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)
            }
        }
    }), it.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = it.find.attr(e, "value");
                    return null != t ? t : it.trim(it.text(e))
                }
            }, select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)if (n = r[u], !(!n.selected && u !== i || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && it.nodeName(n.parentNode, "optgroup"))) {
                        if (t = it(n).val(), o)return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    for (var n, r, i = e.options, o = it.makeArray(t), a = i.length; a--;)if (r = i[a], it.inArray(it.valHooks.option.get(r), o) >= 0)try {
                        r.selected = n = !0
                    } catch (s) {
                        r.scrollHeight
                    } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), it.each(["radio", "checkbox"], function () {
        it.valHooks[this] = {
            set: function (e, t) {
                return it.isArray(t) ? e.checked = it.inArray(it(e).val(), t) >= 0 : void 0
            }
        }, nt.checkOn || (it.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Tn, Cn, Nn = it.expr.attrHandle, En = /^(?:checked|selected)$/i, kn = nt.getSetAttribute, Sn = nt.input;
    it.fn.extend({
        attr: function (e, t) {
            return Dt(this, it.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                it.removeAttr(this, e)
            })
        }
    }), it.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)return typeof e.getAttribute === Ct ? it.prop(e, t, n) : (1 === o && it.isXMLDoc(e) || (t = t.toLowerCase(), r = it.attrHooks[t] || (it.expr.match.bool.test(t) ? Cn : Tn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = it.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void it.removeAttr(e, t))
        }, removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(bt);
            if (o && 1 === e.nodeType)for (; n = o[i++];)r = it.propFix[n] || n, it.expr.match.bool.test(n) ? Sn && kn || !En.test(n) ? e[r] = !1 : e[it.camelCase("default-" + n)] = e[r] = !1 : it.attr(e, n, ""), e.removeAttribute(kn ? n : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!nt.radioValue && "radio" === t && it.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Cn = {
        set: function (e, t, n) {
            return t === !1 ? it.removeAttr(e, n) : Sn && kn || !En.test(n) ? e.setAttribute(!kn && it.propFix[n] || n, n) : e[it.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, it.each(it.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Nn[t] || it.find.attr;
        Nn[t] = Sn && kn || !En.test(t) ? function (e, t, r) {
            var i, o;
            return r || (o = Nn[t], Nn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Nn[t] = o), i
        } : function (e, t, n) {
            return n ? void 0 : e[it.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Sn && kn || (it.attrHooks.value = {
        set: function (e, t, n) {
            return it.nodeName(e, "input") ? void(e.defaultValue = t) : Tn && Tn.set(e, t, n)
        }
    }), kn || (Tn = {
        set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Nn.id = Nn.name = Nn.coords = function (e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, it.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        }, set: Tn.set
    }, it.attrHooks.contenteditable = {
        set: function (e, t, n) {
            Tn.set(e, "" === t ? !1 : t, n)
        }
    }, it.each(["width", "height"], function (e, t) {
        it.attrHooks[t] = {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), nt.style || (it.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var An = /^(?:input|select|textarea|button|object)$/i, Dn = /^(?:a|area)$/i;
    it.fn.extend({
        prop: function (e, t) {
            return Dt(this, it.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = it.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {
                }
            })
        }
    }), it.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
            var r, i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a)return o = 1 !== a || !it.isXMLDoc(e), o && (t = it.propFix[t] || t, i = it.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = it.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : An.test(e.nodeName) || Dn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), nt.hrefNormalized || it.each(["href", "src"], function (e, t) {
        it.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), nt.optSelected || (it.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), it.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        it.propFix[this.toLowerCase()] = this
    }), nt.enctype || (it.propFix.enctype = "encoding");
    var jn = /[\t\r\n\f]/g;
    it.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s = 0, u = this.length, l = "string" == typeof e && e;
            if (it.isFunction(e))return this.each(function (t) {
                it(this).addClass(e.call(this, t, this.className))
            });
            if (l)for (t = (e || "").match(bt) || []; u > s; s++)if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jn, " ") : " ")) {
                for (o = 0; i = t[o++];)r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                a = it.trim(r), n.className !== a && (n.className = a)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a, s = 0, u = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (it.isFunction(e))return this.each(function (t) {
                it(this).removeClass(e.call(this, t, this.className))
            });
            if (l)for (t = (e || "").match(bt) || []; u > s; s++)if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jn, " ") : "")) {
                for (o = 0; i = t[o++];)for (; r.indexOf(" " + i + " ") >= 0;)r = r.replace(" " + i + " ", " ");
                a = e ? it.trim(r) : "", n.className !== a && (n.className = a)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(it.isFunction(e) ? function (n) {
                it(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n)for (var t, r = 0, i = it(this), o = e.match(bt) || []; t = o[r++];)i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else(n === Ct || "boolean" === n) && (this.className && it._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : it._data(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jn, " ").indexOf(t) >= 0)return !0;
            return !1
        }
    }), it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        it.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), it.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Ln = it.now(), Hn = /\?/,
        qn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    it.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse)return e.JSON.parse(t + "");
        var n, r = null, i = it.trim(t + "");
        return i && !it.trim(i.replace(qn, function (e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : it.error("Invalid JSON: " + t)
    }, it.parseXML = function (t) {
        var n, r;
        if (!t || "string" != typeof t)return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || it.error("Invalid XML: " + t), n
    };
    var _n, Mn, Fn = /#.*$/, On = /([?&])_=[^&]*/, Pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Bn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Rn = /^(?:GET|HEAD)$/, Wn = /^\/\//,
        $n = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, zn = {}, In = {}, Xn = "*/".concat("*");
    try {
        Mn = location.href
    } catch (Un) {
        Mn = ht.createElement("a"), Mn.href = "", Mn = Mn.href
    }
    _n = $n.exec(Mn.toLowerCase()) || [], it.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Mn,
            type: "GET",
            isLocal: Bn.test(_n[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": it.parseJSON, "text xml": it.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? W(W(e, it.ajaxSettings), t) : W(it.ajaxSettings, e)
        },
        ajaxPrefilter: B(zn),
        ajaxTransport: B(In),
        ajax: function (e, t) {
            function n(e, t, n, r) {
                var i, c, v, y, x, T = t;
                2 !== b && (b = 2, s && clearTimeout(s), l = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = $(d, w, n)), y = z(d, y, w, i), i ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (it.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (it.etag[o] = x)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, i = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", i ? h.resolveWith(f, [c, T, w]) : h.rejectWith(f, [w, T, v]), w.statusCode(g), g = void 0, u && p.trigger(i ? "ajaxSuccess" : "ajaxError", [w, d, i ? c : v]), m.fireWith(f, [w, T]), u && (p.trigger("ajaxComplete", [w, d]), --it.active || it.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, a, s, u, l, c, d = it.ajaxSetup({}, t), f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? it(f) : it.event, h = it.Deferred(),
                m = it.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", w = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!c)for (c = {}; t = Pn.exec(a);)c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === b ? a : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    }, overrideMimeType: function (e) {
                        return b || (d.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e)if (2 > b)for (t in e)g[t] = [g[t], e[t]]; else w.always(e[w.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || x;
                        return l && l.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || Mn) + "").replace(Fn, "").replace(Wn, _n[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = it.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain && (r = $n.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === _n[1] && r[2] === _n[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (_n[3] || ("http:" === _n[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = it.param(d.data, d.traditional)), R(zn, d, t, w), 2 === b)return w;
            u = it.event && d.global, u && 0 === it.active++ && it.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Rn.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Hn.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = On.test(o) ? o.replace(On, "$1_=" + Ln++) : o + (Hn.test(o) ? "&" : "?") + "_=" + Ln++)), d.ifModified && (it.lastModified[o] && w.setRequestHeader("If-Modified-Since", it.lastModified[o]), it.etag[o] && w.setRequestHeader("If-None-Match", it.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : d.accepts["*"]);
            for (i in d.headers)w.setRequestHeader(i, d.headers[i]);
            if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b))return w.abort();
            x = "abort";
            for (i in{success: 1, error: 1, complete: 1})w[i](d[i]);
            if (l = R(In, d, t, w)) {
                w.readyState = 1, u && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, l.send(v, n)
                } catch (T) {
                    if (!(2 > b))throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function (e, t, n) {
            return it.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return it.get(e, void 0, t, "script")
        }
    }), it.each(["get", "post"], function (e, t) {
        it[t] = function (e, n, r, i) {
            return it.isFunction(n) && (i = i || r, r = n, n = void 0), it.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), it._evalUrl = function (e) {
        return it.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, it.fn.extend({
        wrapAll: function (e) {
            if (it.isFunction(e))return this.each(function (t) {
                it(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = it(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return this.each(it.isFunction(e) ? function (t) {
                it(this).wrapInner(e.call(this, t))
            } : function () {
                var t = it(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = it.isFunction(e);
            return this.each(function (n) {
                it(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                it.nodeName(this, "body") || it(this).replaceWith(this.childNodes)
            }).end()
        }
    }), it.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || it.css(e, "display"))
    }, it.expr.filters.visible = function (e) {
        return !it.expr.filters.hidden(e)
    };
    var Vn = /%20/g, Jn = /\[\]$/, Yn = /\r?\n/g, Gn = /^(?:submit|button|image|reset|file)$/i,
        Qn = /^(?:input|select|textarea|keygen)/i;
    it.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            t = it.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = it.ajaxSettings && it.ajaxSettings.traditional), it.isArray(e) || e.jquery && !it.isPlainObject(e)) it.each(e, function () {
            i(this.name, this.value)
        }); else
            for (n in e)I(n, e[n], t, i);
        return r.join("&").replace(Vn, "+")
    }, it.fn.extend({
        serialize: function () {
            return it.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = it.prop(this, "elements");
                return e ? it.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !it(this).is(":disabled") && Qn.test(this.nodeName) && !Gn.test(e) && (this.checked || !jt.test(e))
            }).map(function (e, t) {
                var n = it(this).val();
                return null == n ? null : it.isArray(n) ? it.map(n, function (e) {
                    return {name: t.name, value: e.replace(Yn, "\r\n")}
                }) : {name: t.name, value: n.replace(Yn, "\r\n")}
            }).get()
        }
    }), it.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U()
    } : X;
    var Kn = 0, Zn = {}, er = it.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in Zn)Zn[e](void 0, !0)
    }), nt.cors = !!er && "withCredentials" in er, er = nt.ajax = !!er, er && it.ajaxTransport(function (e) {
        if (!e.crossDomain || nt.cors) {
            var t;
            return {
                send: function (n, r) {
                    var i, o = e.xhr(), a = ++Kn;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (i in e.xhrFields)o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n)void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                    o.send(e.hasContent && e.data || null), t = function (n, i) {
                        var s, u, l;
                        if (t && (i || 4 === o.readyState))if (delete Zn[a], t = void 0, o.onreadystatechange = it.noop, i) 4 !== o.readyState && o.abort(); else {
                            l = {}, s = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
                            try {
                                u = o.statusText
                            } catch (c) {
                                u = ""
                            }
                            s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
                        }
                        l && r(s, u, l, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Zn[a] = t : t()
                }, abort: function () {
                    t && t(void 0, !0)
                }
            }
        }
    }), it.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return it.globalEval(e), e
            }
        }
    }), it.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), it.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n = ht.head || it("head")[0] || ht.documentElement;
            return {
                send: function (r, i) {
                    t = ht.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                }, abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var tr = [], nr = /(=)\?(?=&|$)|\?\?/;
    it.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = tr.pop() || it.expando + "_" + Ln++;
            return this[e] = !0, e
        }
    }), it.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a,
            s = t.jsonp !== !1 && (nr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nr.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = it.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(nr, "$1" + i) : t.jsonp !== !1 && (t.url += (Hn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || it.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, tr.push(i)), a && it.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), it.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || ht;
        var r = dt.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = it.buildFragment([e], t, i), i && i.length && it(i).remove(), it.merge([], r.childNodes))
    };
    var rr = it.fn.load;
    it.fn.load = function (e, t, n) {
        if ("string" != typeof e && rr)return rr.apply(this, arguments);
        var r, i, o, a = this, s = e.indexOf(" ");
        return s >= 0 && (r = it.trim(e.slice(s, e.length)), e = e.slice(0, s)), it.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && it.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function (e) {
            i = arguments, a.html(r ? it("<div>").append(it.parseHTML(e)).find(r) : e)
        }).complete(n && function (e, t) {
                a.each(n, i || [e.responseText, t, e])
            }), this
    }, it.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        it.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), it.expr.filters.animated = function (e) {
        return it.grep(it.timers, function (t) {
            return e === t.elem
        }).length
    };
    var ir = e.document.documentElement;
    it.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l, c = it.css(e, "position"), d = it(e), f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = it.css(e, "top"), u = it.css(e, "left"), l = ("absolute" === c || "fixed" === c) && it.inArray("auto", [o, u]) > -1, l ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), it.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, it.fn.extend({
        offset: function (e) {
            if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                it.offset.setOffset(this, e, t)
            });
            var t, n, r = {top: 0, left: 0}, i = this[0], o = i && i.ownerDocument;
            if (o)return t = o.documentElement, it.contains(t, i) ? (typeof i.getBoundingClientRect !== Ct && (r = i.getBoundingClientRect()), n = V(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        }, position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, r = this[0];
                return "fixed" === it.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), it.nodeName(e[0], "html") || (n = e.offset()), n.top += it.css(e[0], "borderTopWidth", !0), n.left += it.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - it.css(r, "marginTop", !0),
                    left: t.left - n.left - it.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || ir; e && !it.nodeName(e, "html") && "static" === it.css(e, "position");)e = e.offsetParent;
                return e || ir
            })
        }
    }), it.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = /Y/.test(t);
        it.fn[e] = function (r) {
            return Dt(this, function (e, r, i) {
                var o = V(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? it(o).scrollLeft() : i, n ? i : it(o).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }), it.each(["top", "left"], function (e, t) {
        it.cssHooks[t] = k(nt.pixelPosition, function (e, n) {
            return n ? (n = tn(e, t), rn.test(n) ? it(e).position()[t] + "px" : n) : void 0
        })
    }), it.each({Height: "height", Width: "width"}, function (t, n) {
        it.each({padding: "inner" + t, content: n, "": "outer" + t}, function (r, i) {
            it.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return Dt(this, function (n, r, i) {
                    var o;
                    if (it.isWindow(n)) {
                        if (ht.referrer.indexOf(ht.location.hostname)) {
                            if (e.self !== e.top && "height" == t.toLowerCase() && navigator.userAgent.match(/(iPod|iPhone|iPad)/i) && navigator.userAgent.match(/Safari/i))return e.frameElement.parentElement.clientHeight;
                            if (e.self !== e.top && "width" == t.toLowerCase() && navigator.userAgent.match(/(iPod|iPhone|iPad)/i) && navigator.userAgent.match(/Safari/i))return e.frameElement.parentElement.clientWidth
                        }
                        return n.document.documentElement["client" + t]
                    }
                    return 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + t], o["scroll" + t], n.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? it.css(n, r, s) : it.style(n, r, i, s)
                }, n, a ? i : void 0, a, null)
            }
        })
    }), it.fn.size = function () {
        return this.length
    }, it.fn.andSelf = it.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return it
    });
    var or = e.jQuery, ar = e.$;
    return it.noConflict = function (t) {
        return e.$ === it && (e.$ = ar), t && e.jQuery === it && (e.jQuery = or), it
    }, typeof t === Ct && (e.jQuery = e.$ = it), it
});
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    function n(e) {
        return u.raw ? e : encodeURIComponent(e)
    }

    function o(e) {
        return u.raw ? e : decodeURIComponent(e)
    }

    function i(e) {
        return n(u.json ? JSON.stringify(e) : String(e))
    }

    function t(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e
        } catch (n) {
        }
    }

    function r(n, o) {
        var i = u.raw ? n : t(n);
        return e.isFunction(o) ? o(i) : i
    }

    var c = /\+/g, u = e.cookie = function (t, c, s) {
        if (arguments.length > 1 && !e.isFunction(c)) {
            if (s = e.extend({}, u.defaults, s), "number" == typeof s.expires) {
                var a = s.expires, d = s.expires = new Date;
                d.setMilliseconds(d.getMilliseconds() + 864e5 * a)
            }
            return document.cookie = [n(t), "=", i(c), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
        }
        for (var f = t ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], l = 0, m = p.length; m > l; l++) {
            var x = p[l].split("="), g = o(x.shift()), j = x.join("=");
            if (t === g) {
                f = r(j, c);
                break
            }
            t || void 0 === (j = r(j)) || (f[g] = j)
        }
        return f
    };
    u.defaults = {}, e.removeCookie = function (n, o) {
        return e.cookie(n, "", e.extend({}, o, {expires: -1})), !e.cookie(n)
    }
});
(function () {
    var e, i, n, o, d, c, t, r, a, v;
    e = window.device, window.device = {}, n = window.document.documentElement, v = window.navigator.userAgent.toLowerCase(), device.ios = function () {
        return device.iphone() || device.ipod() || device.ipad()
    }, device.iphone = function () {
        return o("iphone")
    }, device.ipod = function () {
        return o("ipod")
    }, device.ipad = function () {
        return o("ipad")
    }, device.android = function () {
        return o("android")
    }, device.androidPhone = function () {
        return device.android() && o("mobile")
    }, device.androidTablet = function () {
        return device.android() && !o("mobile")
    }, device.blackberry = function () {
        return o("blackberry") || o("bb10") || o("rim")
    }, device.blackberryPhone = function () {
        return device.blackberry() && !o("tablet")
    }, device.blackberryTablet = function () {
        return device.blackberry() && o("tablet")
    }, device.windows = function () {
        return o("windows")
    }, device.windowsPhone = function () {
        return device.windows() && o("phone")
    }, device.windowsTablet = function () {
        return device.windows() && o("touch") && !device.windowsPhone()
    }, device.fxos = function () {
        return (o("(mobile;") || o("(tablet;")) && o("; rv:")
    }, device.fxosPhone = function () {
        return device.fxos() && o("mobile")
    }, device.fxosTablet = function () {
        return device.fxos() && o("tablet")
    }, device.meego = function () {
        return o("meego")
    }, device.cordova = function () {
        return window.cordova && "file:" === location.protocol
    }, device.nodeWebkit = function () {
        return "object" == typeof window.process
    }, device.mobile = function () {
        return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego()
    }, device.tablet = function () {
        return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet()
    }, device.desktop = function () {
        return !device.tablet() && !device.mobile()
    }, device.portrait = function () {
        return window.innerHeight / window.innerWidth > 1
    }, device.landscape = function () {
        return window.innerHeight / window.innerWidth < 1
    }, device.noConflict = function () {
        return window.device = e, this
    }, o = function (e) {
        return -1 !== v.indexOf(e)
    }, c = function (e) {
        var i;
        return i = new RegExp(e, "i"), n.className.match(i)
    }, i = function (e) {
        return c(e) ? void 0 : n.className += " " + e
    }, r = function (e) {
        return c(e) ? n.className = n.className.replace(e, "") : void 0
    }, device.ios() ? device.ipad() ? i("ios ipad tablet") : device.iphone() ? i("ios iphone mobile") : device.ipod() && i("ios ipod mobile") : i(device.android() ? device.androidTablet() ? "android tablet" : "android mobile" : device.blackberry() ? device.blackberryTablet() ? "blackberry tablet" : "blackberry mobile" : device.windows() ? device.windowsTablet() ? "windows tablet" : device.windowsPhone() ? "windows mobile" : "desktop" : device.fxos() ? device.fxosTablet() ? "fxos tablet" : "fxos mobile" : device.meego() ? "meego mobile" : device.nodeWebkit() ? "node-webkit" : "desktop"), device.cordova() && i("cordova"), d = function () {
        return device.landscape() ? (r("portrait"), i("landscape")) : (r("landscape"), i("portrait"))
    }, a = "onorientationchange" in window, t = a ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(t, d, !1) : window.attachEvent ? window.attachEvent(t, d) : window[t] = d, d()
}).call(this);
(function ($, h, c) {
    var a = $([]), e = $.resize = $.extend($.resize, {}), i, k = "setTimeout", j = "resize", d = j + "-special-event",
        b = "delay", f = "throttleWindow";
    e[b] = 250;
    e[f] = true;
    $.event.special[j] = {
        setup: function () {
            if (!e[f] && this[k]) {
                return false
            }
            var l = $(this);
            a = a.add(l);
            $.data(this, d, {w: l.width(), h: l.height()});
            if (a.length === 1) {
                g()
            }
        }, teardown: function () {
            if (!e[f] && this[k]) {
                return false
            }
            var l = $(this);
            a = a.not(l);
            l.removeData(d);
            if (!a.length) {
                clearTimeout(i)
            }
        }, add: function (l) {
            if (!e[f] && this[k]) {
                return false
            }
            var n;

            function m(s, o, p) {
                var q = $(this), r = $.data(this, d);
                r.w = o !== c ? o : q.width();
                r.h = p !== c ? p : q.height();
                n.apply(this, arguments)
            }

            if ($.isFunction(l)) {
                n = l;
                return m
            } else {
                n = l.handler;
                l.handler = m
            }
        }
    };
    function g() {
        i = h[k](function () {
            a.each(function () {
                var n = $(this), m = n.width(), l = n.height(), o = $.data(this, d);
                if (m !== o.w || l !== o.h) {
                    n.trigger(j, [o.w = m, o.h = l])
                }
            });
            g()
        }, e[b])
    }
})(jQuery, this);
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (n, e, t, u, a) {
        return jQuery.easing[jQuery.easing.def](n, e, t, u, a)
    },
    easeInQuad: function (n, e, t, u, a) {
        return u * (e /= a) * e + t
    },
    easeOutQuad: function (n, e, t, u, a) {
        return -u * (e /= a) * (e - 2) + t
    },
    easeInOutQuad: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
    },
    easeInCubic: function (n, e, t, u, a) {
        return u * (e /= a) * e * e + t
    },
    easeOutCubic: function (n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e + 1) + t
    },
    easeInOutCubic: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
    },
    easeInQuart: function (n, e, t, u, a) {
        return u * (e /= a) * e * e * e + t
    },
    easeOutQuart: function (n, e, t, u, a) {
        return -u * ((e = e / a - 1) * e * e * e - 1) + t
    },
    easeInOutQuart: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
    },
    easeInQuint: function (n, e, t, u, a) {
        return u * (e /= a) * e * e * e * e + t
    },
    easeOutQuint: function (n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e * e * e + 1) + t
    },
    easeInOutQuint: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
    },
    easeInSine: function (n, e, t, u, a) {
        return -u * Math.cos(e / a * (Math.PI / 2)) + u + t
    },
    easeOutSine: function (n, e, t, u, a) {
        return u * Math.sin(e / a * (Math.PI / 2)) + t
    },
    easeInOutSine: function (n, e, t, u, a) {
        return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
    },
    easeInExpo: function (n, e, t, u, a) {
        return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t
    },
    easeOutExpo: function (n, e, t, u, a) {
        return e == a ? t + u : u * (-Math.pow(2, -10 * e / a) + 1) + t
    },
    easeInOutExpo: function (n, e, t, u, a) {
        return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (-Math.pow(2, -10 * --e) + 2) + t
    },
    easeInCirc: function (n, e, t, u, a) {
        return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
    },
    easeOutCirc: function (n, e, t, u, a) {
        return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
    },
    easeInOutCirc: function (n, e, t, u, a) {
        return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
    },
    easeInElastic: function (n, e, t, u, a) {
        var r = 1.70158, i = 0, s = u;
        if (0 == e)return t;
        if (1 == (e /= a))return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t
    },
    easeOutElastic: function (n, e, t, u, a) {
        var r = 1.70158, i = 0, s = u;
        if (0 == e)return t;
        if (1 == (e /= a))return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / i) + u + t
    },
    easeInOutElastic: function (n, e, t, u, a) {
        var r = 1.70158, i = 0, s = u;
        if (0 == e)return t;
        if (2 == (e /= a / 2))return t + u;
        if (i || (i = a * (.3 * 1.5)), s < Math.abs(u)) {
            s = u;
            var r = i / 4
        } else var r = i / (2 * Math.PI) * Math.asin(u / s);
        return 1 > e ? -.5 * (s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * .5 + u + t
    },
    easeInBack: function (n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t
    },
    easeOutBack: function (n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
    },
    easeInOutBack: function (n, e, t, u, a, r) {
        return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? u / 2 * (e * e * (((r *= 1.525) + 1) * e - r)) + t : u / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
    },
    easeInBounce: function (n, e, t, u, a) {
        return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t
    },
    easeOutBounce: function (n, e, t, u, a) {
        return (e /= a) < 1 / 2.75 ? u * (7.5625 * e * e) + t : 2 / 2.75 > e ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : 2.5 / 2.75 > e ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
    },
    easeInOutBounce: function (n, e, t, u, a) {
        return a / 2 > e ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
    }
});
(function (a) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function (f) {
    var y = "1.6.12", p = "left", o = "right", e = "up", x = "down", c = "in", A = "out", m = "none", s = "auto",
        l = "swipe", t = "pinch", B = "tap", j = "doubletap", b = "longtap", z = "hold", E = "horizontal",
        u = "vertical", i = "all", r = 10, g = "start", k = "move", h = "end", q = "cancel",
        a = "ontouchstart" in window, v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
        d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled, C = "TouchSwipe";
    var n = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe",
        preventDefaultEvents: true
    };
    f.fn.swipe = function (H) {
        var G = f(this), F = G.data(C);
        if (F && typeof H === "string") {
            if (F[H]) {
                return F[H].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                f.error("Method " + H + " does not exist on jQuery.swipe")
            }
        } else {
            if (F && typeof H === "object") {
                F.option.apply(this, arguments)
            } else {
                if (!F && (typeof H === "object" || !H)) {
                    return w.apply(this, arguments)
                }
            }
        }
        return G
    };
    f.fn.swipe.version = y;
    f.fn.swipe.defaults = n;
    f.fn.swipe.phases = {PHASE_START: g, PHASE_MOVE: k, PHASE_END: h, PHASE_CANCEL: q};
    f.fn.swipe.directions = {LEFT: p, RIGHT: o, UP: e, DOWN: x, IN: c, OUT: A};
    f.fn.swipe.pageScroll = {NONE: m, HORIZONTAL: E, VERTICAL: u, AUTO: s};
    f.fn.swipe.fingers = {ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, ALL: i};
    function w(F) {
        if (F && (F.allowPageScroll === undefined && (F.swipe !== undefined || F.swipeStatus !== undefined))) {
            F.allowPageScroll = m
        }
        if (F.click !== undefined && F.tap === undefined) {
            F.tap = F.click
        }
        if (!F) {
            F = {}
        }
        F = f.extend({}, f.fn.swipe.defaults, F);
        return this.each(function () {
            var H = f(this);
            var G = H.data(C);
            if (!G) {
                G = new D(this, F);
                H.data(C, G)
            }
        })
    }

    function D(a4, au) {
        var au = f.extend({}, au);
        var az = (a || d || !au.fallbackToMouseEvents),
            K = az ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
            ax = az ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
            V = az ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup", T = az ? null : "mouseleave",
            aD = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel");
        var ag = 0, aP = null, ac = 0, a1 = 0, aZ = 0, H = 1, ap = 0, aJ = 0, N = null;
        var aR = f(a4);
        var aa = "start";
        var X = 0;
        var aQ = {};
        var U = 0, a2 = 0, a5 = 0, ay = 0, O = 0;
        var aW = null, af = null;
        try {
            aR.bind(K, aN);
            aR.bind(aD, a9)
        } catch (aj) {
            f.error("events not supported " + K + "," + aD + " on jQuery.swipe")
        }
        this.enable = function () {
            aR.bind(K, aN);
            aR.bind(aD, a9);
            return aR
        };
        this.disable = function () {
            aK();
            return aR
        };
        this.destroy = function () {
            aK();
            aR.data(C, null);
            aR = null
        };
        this.option = function (bc, bb) {
            if (typeof bc === "object") {
                au = f.extend(au, bc)
            } else {
                if (au[bc] !== undefined) {
                    if (bb === undefined) {
                        return au[bc]
                    } else {
                        au[bc] = bb
                    }
                } else {
                    if (!bc) {
                        return au
                    } else {
                        f.error("Option " + bc + " does not exist on jQuery.swipe.options")
                    }
                }
            }
            return null
        };
        function aN(bd) {
            if (aB()) {
                return
            }
            if (f(bd.target).closest(au.excludedElements, aR).length > 0) {
                return
            }
            var be = bd.originalEvent ? bd.originalEvent : bd;
            var bc, bf = be.touches, bb = bf ? bf[0] : be;
            aa = g;
            if (bf) {
                X = bf.length
            } else {
                if (au.preventDefaultEvents !== false) {
                    bd.preventDefault()
                }
            }
            ag = 0;
            aP = null;
            aJ = null;
            ac = 0;
            a1 = 0;
            aZ = 0;
            H = 1;
            ap = 0;
            N = ab();
            S();
            ai(0, bb);
            if (!bf || (X === au.fingers || au.fingers === i) || aX()) {
                U = ar();
                if (X == 2) {
                    ai(1, bf[1]);
                    a1 = aZ = at(aQ[0].start, aQ[1].start)
                }
                if (au.swipeStatus || au.pinchStatus) {
                    bc = P(be, aa)
                }
            } else {
                bc = false
            }
            if (bc === false) {
                aa = q;
                P(be, aa);
                return bc
            } else {
                if (au.hold) {
                    af = setTimeout(f.proxy(function () {
                        aR.trigger("hold", [be.target]);
                        if (au.hold) {
                            bc = au.hold.call(aR, be, be.target)
                        }
                    }, this), au.longTapThreshold)
                }
                an(true)
            }
            return null
        }

        function a3(be) {
            var bh = be.originalEvent ? be.originalEvent : be;
            if (aa === h || aa === q || al()) {
                return
            }
            var bd, bi = bh.touches, bc = bi ? bi[0] : bh;
            var bf = aH(bc);
            a2 = ar();
            if (bi) {
                X = bi.length
            }
            if (au.hold) {
                clearTimeout(af)
            }
            aa = k;
            if (X == 2) {
                if (a1 == 0) {
                    ai(1, bi[1]);
                    a1 = aZ = at(aQ[0].start, aQ[1].start)
                } else {
                    aH(bi[1]);
                    aZ = at(aQ[0].end, aQ[1].end);
                    aJ = aq(aQ[0].end, aQ[1].end)
                }
                H = a7(a1, aZ);
                ap = Math.abs(a1 - aZ)
            }
            if ((X === au.fingers || au.fingers === i) || !bi || aX()) {
                aP = aL(bf.start, bf.end);
                ak(be, aP);
                ag = aS(bf.start, bf.end);
                ac = aM();
                aI(aP, ag);
                if (au.swipeStatus || au.pinchStatus) {
                    bd = P(bh, aa)
                }
                if (!au.triggerOnTouchEnd || au.triggerOnTouchLeave) {
                    var bb = true;
                    if (au.triggerOnTouchLeave) {
                        var bg = aY(this);
                        bb = F(bf.end, bg)
                    }
                    if (!au.triggerOnTouchEnd && bb) {
                        aa = aC(k)
                    } else {
                        if (au.triggerOnTouchLeave && !bb) {
                            aa = aC(h)
                        }
                    }
                    if (aa == q || aa == h) {
                        P(bh, aa)
                    }
                }
            } else {
                aa = q;
                P(bh, aa)
            }
            if (bd === false) {
                aa = q;
                P(bh, aa)
            }
        }

        function M(bb) {
            var bc = bb.originalEvent ? bb.originalEvent : bb, bd = bc.touches;
            if (bd) {
                if (bd.length && !al()) {
                    G();
                    return true
                } else {
                    if (bd.length && al()) {
                        return true
                    }
                }
            }
            if (al()) {
                X = ay
            }
            a2 = ar();
            ac = aM();
            if (ba() || !am()) {
                aa = q;
                P(bc, aa)
            } else {
                if (au.triggerOnTouchEnd || (au.triggerOnTouchEnd == false && aa === k)) {
                    if (au.preventDefaultEvents !== false) {
                        bb.preventDefault()
                    }
                    aa = h;
                    P(bc, aa)
                } else {
                    if (!au.triggerOnTouchEnd && a6()) {
                        aa = h;
                        aF(bc, aa, B)
                    } else {
                        if (aa === k) {
                            aa = q;
                            P(bc, aa)
                        }
                    }
                }
            }
            an(false);
            return null
        }

        function a9() {
            X = 0;
            a2 = 0;
            U = 0;
            a1 = 0;
            aZ = 0;
            H = 1;
            S();
            an(false)
        }

        function L(bb) {
            var bc = bb.originalEvent ? bb.originalEvent : bb;
            if (au.triggerOnTouchLeave) {
                aa = aC(h);
                P(bc, aa)
            }
        }

        function aK() {
            aR.unbind(K, aN);
            aR.unbind(aD, a9);
            aR.unbind(ax, a3);
            aR.unbind(V, M);
            if (T) {
                aR.unbind(T, L)
            }
            an(false)
        }

        function aC(bf) {
            var be = bf;
            var bd = aA();
            var bc = am();
            var bb = ba();
            if (!bd || bb) {
                be = q
            } else {
                if (bc && bf == k && (!au.triggerOnTouchEnd || au.triggerOnTouchLeave)) {
                    be = h
                } else {
                    if (!bc && bf == h && au.triggerOnTouchLeave) {
                        be = q
                    }
                }
            }
            return be
        }

        function P(bd, bb) {
            var bc, be = bd.touches;
            if ((J() && W()) || (Q() && aX())) {
                if (J() && W()) {
                    bc = aF(bd, bb, l)
                }
                if ((Q() && aX()) && bc !== false) {
                    bc = aF(bd, bb, t)
                }
            } else {
                if (aG() && bc !== false) {
                    bc = aF(bd, bb, j)
                } else {
                    if (ao() && bc !== false) {
                        bc = aF(bd, bb, b)
                    } else {
                        if (ah() && bc !== false) {
                            bc = aF(bd, bb, B)
                        }
                    }
                }
            }
            if (bb === q) {
                if (W()) {
                    bc = aF(bd, bb, l)
                }
                if (aX()) {
                    bc = aF(bd, bb, t)
                }
                a9(bd)
            }
            if (bb === h) {
                if (be) {
                    if (!be.length) {
                        a9(bd)
                    }
                } else {
                    a9(bd)
                }
            }
            return bc
        }

        function aF(be, bb, bd) {
            var bc;
            if (bd == l) {
                aR.trigger("swipeStatus", [bb, aP || null, ag || 0, ac || 0, X, aQ]);
                if (au.swipeStatus) {
                    bc = au.swipeStatus.call(aR, be, bb, aP || null, ag || 0, ac || 0, X, aQ);
                    if (bc === false) {
                        return false
                    }
                }
                if (bb == h && aV()) {
                    aR.trigger("swipe", [aP, ag, ac, X, aQ]);
                    if (au.swipe) {
                        bc = au.swipe.call(aR, be, aP, ag, ac, X, aQ);
                        if (bc === false) {
                            return false
                        }
                    }
                    switch (aP) {
                        case p:
                            aR.trigger("swipeLeft", [aP, ag, ac, X, aQ]);
                            if (au.swipeLeft) {
                                bc = au.swipeLeft.call(aR, be, aP, ag, ac, X, aQ)
                            }
                            break;
                        case o:
                            aR.trigger("swipeRight", [aP, ag, ac, X, aQ]);
                            if (au.swipeRight) {
                                bc = au.swipeRight.call(aR, be, aP, ag, ac, X, aQ)
                            }
                            break;
                        case e:
                            aR.trigger("swipeUp", [aP, ag, ac, X, aQ]);
                            if (au.swipeUp) {
                                bc = au.swipeUp.call(aR, be, aP, ag, ac, X, aQ)
                            }
                            break;
                        case x:
                            aR.trigger("swipeDown", [aP, ag, ac, X, aQ]);
                            if (au.swipeDown) {
                                bc = au.swipeDown.call(aR, be, aP, ag, ac, X, aQ)
                            }
                            break
                    }
                }
            }
            if (bd == t) {
                aR.trigger("pinchStatus", [bb, aJ || null, ap || 0, ac || 0, X, H, aQ]);
                if (au.pinchStatus) {
                    bc = au.pinchStatus.call(aR, be, bb, aJ || null, ap || 0, ac || 0, X, H, aQ);
                    if (bc === false) {
                        return false
                    }
                }
                if (bb == h && a8()) {
                    switch (aJ) {
                        case c:
                            aR.trigger("pinchIn", [aJ || null, ap || 0, ac || 0, X, H, aQ]);
                            if (au.pinchIn) {
                                bc = au.pinchIn.call(aR, be, aJ || null, ap || 0, ac || 0, X, H, aQ)
                            }
                            break;
                        case A:
                            aR.trigger("pinchOut", [aJ || null, ap || 0, ac || 0, X, H, aQ]);
                            if (au.pinchOut) {
                                bc = au.pinchOut.call(aR, be, aJ || null, ap || 0, ac || 0, X, H, aQ)
                            }
                            break
                    }
                }
            }
            if (bd == B) {
                if (bb === q || bb === h) {
                    clearTimeout(aW);
                    clearTimeout(af);
                    if (Z() && !I()) {
                        O = ar();
                        aW = setTimeout(f.proxy(function () {
                            O = null;
                            aR.trigger("tap", [be.target]);
                            if (au.tap) {
                                bc = au.tap.call(aR, be, be.target)
                            }
                        }, this), au.doubleTapThreshold)
                    } else {
                        O = null;
                        aR.trigger("tap", [be.target]);
                        if (au.tap) {
                            bc = au.tap.call(aR, be, be.target)
                        }
                    }
                }
            } else {
                if (bd == j) {
                    if (bb === q || bb === h) {
                        clearTimeout(aW);
                        O = null;
                        aR.trigger("doubletap", [be.target]);
                        if (au.doubleTap) {
                            bc = au.doubleTap.call(aR, be, be.target)
                        }
                    }
                } else {
                    if (bd == b) {
                        if (bb === q || bb === h) {
                            clearTimeout(aW);
                            O = null;
                            aR.trigger("longtap", [be.target]);
                            if (au.longTap) {
                                bc = au.longTap.call(aR, be, be.target)
                            }
                        }
                    }
                }
            }
            return bc
        }

        function am() {
            var bb = true;
            if (au.threshold !== null) {
                bb = ag >= au.threshold
            }
            return bb
        }

        function ba() {
            var bb = false;
            if (au.cancelThreshold !== null && aP !== null) {
                bb = (aT(aP) - ag) >= au.cancelThreshold
            }
            return bb
        }

        function ae() {
            if (au.pinchThreshold !== null) {
                return ap >= au.pinchThreshold
            }
            return true
        }

        function aA() {
            var bb;
            if (au.maxTimeThreshold) {
                if (ac >= au.maxTimeThreshold) {
                    bb = false
                } else {
                    bb = true
                }
            } else {
                bb = true
            }
            return bb
        }

        function ak(bb, bc) {
            if (au.preventDefaultEvents === false) {
                return
            }
            if (au.allowPageScroll === m) {
                bb.preventDefault()
            } else {
                var bd = au.allowPageScroll === s;
                switch (bc) {
                    case p:
                        if ((au.swipeLeft && bd) || (!bd && au.allowPageScroll != E)) {
                            bb.preventDefault()
                        }
                        break;
                    case o:
                        if ((au.swipeRight && bd) || (!bd && au.allowPageScroll != E)) {
                            bb.preventDefault()
                        }
                        break;
                    case e:
                        if ((au.swipeUp && bd) || (!bd && au.allowPageScroll != u)) {
                            bb.preventDefault()
                        }
                        break;
                    case x:
                        if ((au.swipeDown && bd) || (!bd && au.allowPageScroll != u)) {
                            bb.preventDefault()
                        }
                        break
                }
            }
        }

        function a8() {
            var bc = aO();
            var bb = Y();
            var bd = ae();
            return bc && bb && bd
        }

        function aX() {
            return !!(au.pinchStatus || au.pinchIn || au.pinchOut)
        }

        function Q() {
            return !!(a8() && aX())
        }

        function aV() {
            var be = aA();
            var bg = am();
            var bd = aO();
            var bb = Y();
            var bc = ba();
            var bf = !bc && bb && bd && bg && be;
            return bf
        }

        function W() {
            return !!(au.swipe || au.swipeStatus || au.swipeLeft || au.swipeRight || au.swipeUp || au.swipeDown)
        }

        function J() {
            return !!(aV() && W())
        }

        function aO() {
            return ((X === au.fingers || au.fingers === i) || !a)
        }

        function Y() {
            return aQ[0].end.x !== 0
        }

        function a6() {
            return !!(au.tap)
        }

        function Z() {
            return !!(au.doubleTap)
        }

        function aU() {
            return !!(au.longTap)
        }

        function R() {
            if (O == null) {
                return false
            }
            var bb = ar();
            return (Z() && ((bb - O) <= au.doubleTapThreshold))
        }

        function I() {
            return R()
        }

        function aw() {
            return ((X === 1 || !a) && (isNaN(ag) || ag < au.threshold))
        }

        function a0() {
            return ((ac > au.longTapThreshold) && (ag < r))
        }

        function ah() {
            return !!(aw() && a6())
        }

        function aG() {
            return !!(R() && Z())
        }

        function ao() {
            return !!(a0() && aU())
        }

        function G() {
            a5 = ar();
            ay = event.touches.length + 1
        }

        function S() {
            a5 = 0;
            ay = 0
        }

        function al() {
            var bb = false;
            if (a5) {
                var bc = ar() - a5;
                if (bc <= au.fingerReleaseThreshold) {
                    bb = true
                }
            }
            return bb
        }

        function aB() {
            return !!(aR.data(C + "_intouch") === true)
        }

        function an(bb) {
            if (bb === true) {
                aR.bind(ax, a3);
                aR.bind(V, M);
                if (T) {
                    aR.bind(T, L)
                }
            } else {
                aR.unbind(ax, a3, false);
                aR.unbind(V, M, false);
                if (T) {
                    aR.unbind(T, L, false)
                }
            }
            aR.data(C + "_intouch", bb === true)
        }

        function ai(bd, bb) {
            var bc = {start: {x: 0, y: 0}, end: {x: 0, y: 0}};
            bc.start.x = bc.end.x = bb.pageX || bb.clientX;
            bc.start.y = bc.end.y = bb.pageY || bb.clientY;
            aQ[bd] = bc;
            return bc
        }

        function aH(bb) {
            var bd = bb.identifier !== undefined ? bb.identifier : 0;
            var bc = ad(bd);
            if (bc === null) {
                bc = ai(bd, bb)
            }
            bc.end.x = bb.pageX || bb.clientX;
            bc.end.y = bb.pageY || bb.clientY;
            return bc
        }

        function ad(bb) {
            return aQ[bb] || null
        }

        function aI(bb, bc) {
            bc = Math.max(bc, aT(bb));
            N[bb].distance = bc
        }

        function aT(bb) {
            if (N[bb]) {
                return N[bb].distance
            }
            return undefined
        }

        function ab() {
            var bb = {};
            bb[p] = av(p);
            bb[o] = av(o);
            bb[e] = av(e);
            bb[x] = av(x);
            return bb
        }

        function av(bb) {
            return {direction: bb, distance: 0}
        }

        function aM() {
            return a2 - U
        }

        function at(be, bd) {
            var bc = Math.abs(be.x - bd.x);
            var bb = Math.abs(be.y - bd.y);
            return Math.round(Math.sqrt(bc * bc + bb * bb))
        }

        function a7(bb, bc) {
            var bd = (bc / bb) * 1;
            return bd.toFixed(2)
        }

        function aq() {
            if (H < 1) {
                return A
            } else {
                return c
            }
        }

        function aS(bc, bb) {
            return Math.round(Math.sqrt(Math.pow(bb.x - bc.x, 2) + Math.pow(bb.y - bc.y, 2)))
        }

        function aE(be, bc) {
            var bb = be.x - bc.x;
            var bg = bc.y - be.y;
            var bd = Math.atan2(bg, bb);
            var bf = Math.round(bd * 180 / Math.PI);
            if (bf < 0) {
                bf = 360 - Math.abs(bf)
            }
            return bf
        }

        function aL(bc, bb) {
            var bd = aE(bc, bb);
            if ((bd <= 45) && (bd >= 0)) {
                return p
            } else {
                if ((bd <= 360) && (bd >= 315)) {
                    return p
                } else {
                    if ((bd >= 135) && (bd <= 225)) {
                        return o
                    } else {
                        if ((bd > 45) && (bd < 135)) {
                            return x
                        } else {
                            return e
                        }
                    }
                }
            }
        }

        function ar() {
            var bb = new Date();
            return bb.getTime()
        }

        function aY(bb) {
            bb = f(bb);
            var bd = bb.offset();
            var bc = {left: bd.left, right: bd.left + bb.outerWidth(), top: bd.top, bottom: bd.top + bb.outerHeight()};
            return bc
        }

        function F(bb, bc) {
            return (bb.x > bc.left && bb.x < bc.right && bb.y > bc.top && bb.y < bc.bottom)
        }
    }
}));
(function (e, t) {
    typeof define == "function" && define.amd ? define("utils/MapUtils", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.MapUtils = t())
})(this, function () {
    return {
        iterateOverMap: function (e, t) {
            var n = 0;
            for (var r in e)e.hasOwnProperty(r) && r !== "__size__" && (t.call(e, r, e[r], n), n++)
        }, exists: function (e, t) {
            var n = !1, r = 0;
            while (!n && r < e.length)n = t == e[r], r++;
            return n
        }, put: function (e, t, n) {
            e.__size__ || (e.__size__ = 0), e[t] || e.__size__++, e[t] = n
        }, isEmpty: function (e) {
            for (var t in e)if (e.hasOwnProperty(t))return !1;
            return !0
        }
    }
}), function (e, t) {
    typeof define == "function" && define.amd ? define("utils/DOMUtils", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.DOMUtils = t())
}(this, function () {
    function t(e, t, n, r) {
        var i = t == "*" && e.all ? e.all : e.getElementsByTagName(t), s = [],
            o = typeof r != "undefined" ? new RegExp("(^|\\s)" + r + "(\\s|$)") : null, u, a;
        for (var f = 0; f < i.length; f++)u = i[f], a = u.getAttribute && u.getAttribute(n), typeof a == "string" && a.length > 0 && (typeof r == "undefined" || o && o.test(a)) && s.push(u);
        return s
    }

    function n(e, t) {
        var n = e.getAttribute && e.getAttribute(t) || null;
        if (!n) {
            var r = e.attributes;
            for (var i = 0; i < r.length; i++)r[i].nodeName === t && (n = r[i].nodeValue)
        }
        return n
    }

    function r() {
        return "regula-generated-" + Math.floor(Math.random() * 1e6)
    }

    function i() {
        return typeof document.createElement("input").checkValidity == "function"
    }

    var e = {
        form: "The form",
        select: "The select box",
        textarea: "The text area",
        checkbox: "The checkbox",
        radio: "The radio button",
        text: "The text field",
        password: "The password",
        email: "The email",
        url: "The URL",
        number: "The number",
        datetime: "The datetime",
        "datetime-local": "The local datetime",
        date: "The date",
        month: "The month",
        time: "The time",
        week: "The week",
        range: "The range",
        tel: "The telephone number",
        color: "The color"
    };
    return {
        friendlyInputNames: e,
        getElementsByAttribute: t,
        getAttributeValueForElement: n,
        generateRandomId: r,
        supportsHTML5Validation: i
    }
}), function (e, t) {
    typeof define == "function" && define.amd ? define("service/GroupService", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.GroupService = t())
}(this, function () {
    var e = {Default: 0}, t = {0: "Default"}, n = [], r = 1;
    return {Group: e, ReverseGroup: t, deletedGroupIndices: n, firstCustomGroupIndex: r}
}), function (e, t) {
    typeof define == "function" && define.amd ? define("utils/ArrayUtils", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.ArrayUtils = t())
}(this, function () {
    function e(e, t) {
        var n = "";
        for (var r = 0; r < e.length; r++)n += e[r] + t;
        return n.replace(new RegExp(t + "$"), "")
    }

    return {explode: e}
}), function (e, t) {
    typeof define == "function" && define.amd ? define("service/ExceptionService", ["utils/ArrayUtils"], t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.ExceptionService = t(e.regulaModules.ArrayUtils))
}(this, function (e) {
    function i(e, t, n) {
        var r = "";
        return e != null ? (r = e.id, t == "" || t == null || t == undefined ? r += ": " : r += "." + t + ": ") : t != "" && t != null && t != undefined && (r = "@" + t + ": "), r + n
    }

    function s(t) {
        var n = "Function received: {";
        for (var r in t)t.hasOwnProperty(r) && (typeof t[r] == "string" ? n += r + ": " + t[r] + ", " : t[r] instanceof Array && (n += r + ": [" + e.explode(t[r], ", ") + "], "));
        return n = n.replace(/, $/, "") + "}", n
    }

    var t = {
        IllegalArgumentException: function (e) {
            this.name = "IllegalArgumentException", this.message = e
        }, ConstraintDefinitionException: function (e) {
            this.name = "ConstraintDefinitionException", this.message = e
        }, BindException: function (e) {
            this.name = "BindException", this.message = e
        }, MissingFeatureException: function (e) {
            this.name = "MissingFeatureException", this.message = e
        }
    };
    for (var n in t)if (t.hasOwnProperty(n)) {
        var r = t[n];
        r.prototype = new Error, r.prototype.constructor = r
    }
    return {Exception: t, generateExceptionMessage: i, explodeParameters: s}
}), function (e, t) {
    typeof define == "function" && define.amd ? define("service/ValidationService", ["utils/DOMUtils", "utils/MapUtils", "service/GroupService", "service/ExceptionService", "utils/ArrayUtils"], t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.ValidationService = t(e.regulaModules.DOMUtils, e.regulaModules.MapUtils, e.regulaModules.GroupService, e.regulaModules.ExceptionService, e.regulaModules.ArrayUtils))
}(this, function (e, t, n, r, i) {
    function h(e) {
        for (var t in e)e.hasOwnProperty(t) && v(t, e)
    }

    function p(e) {
        s = e.config, o = e.ReverseConstraint, u = e.constraintDefinitions, a = e.boundConstraints
    }

    function v(e, t) {
        var n = t[e], i = e.replace(/(^[A-Z]+)/, function (e) {
            return e.toLowerCase()
        });
        n.async ? c[i] = function (t, i, s) {
            if (typeof s == "undefined")throw new r.Exception.IllegalArgumentException(e + " is an asynchronous constraint, but you have not provided a callback.");
            return n.validator.call(t, i, c, s)
        } : c[i] = function (e, t) {
            return n.validator.call(e, t, c)
        }
    }

    function m(e, n, r, i) {
        function a(n, r) {
            var i = {};
            for (var s in n)n.hasOwnProperty(s) && s != "__size__" && t.put(i, s, n[s]);
            if (r.length > 0)for (var s in e)e.hasOwnProperty(s) && s != "__size__" && t.put(i, s, e[s]);
            return i
        }

        function f(e, t, n, i) {
            var s = o[y.constraintType], a = W(t, s, i), f = {
                group: n,
                constraintName: e.constraintName,
                custom: u[s].custom,
                compound: u[s].compound,
                async: u[s].async,
                constraintParameters: y.params,
                failingElements: e.failingElements,
                message: a
            };
            return r.reportAsSingleViolation || (f.composingConstraintViolations = e.composingConstraintViolations || []), f
        }

        var l = [], c = [];
        for (var h = 0; h < r.composingConstraints.length; h++) {
            var p = r.composingConstraints[h], d = o[p.constraintType];
            u[d].async ? c.push(p) : l.push(p)
        }
        var v = null, m = this;
        if (g(this, e)) {
            if (l.length > 0) {
                v = [];
                for (var h = 0; h < l.length; h++) {
                    var y = l[h], b = o[y.constraintType], w = a(y.params, r.params), E = U(n, m.id, b, w);
                    if (!E.constraintPassed) {
                        var S = f(E, m.id, n, w);
                        if (s.enableHTML5Validation)for (var x = 0; x < E.failingElements.length; x++)E.failingElements[x].setCustomValidity(S.message);
                        v.push(S)
                    }
                }
            }
            if (c.length > 0) {
                v === null && (v = []);
                var T = 0;
                for (var h = 0; h < c.length; h++) {
                    var y = c[h], b = o[y.constraintType], w = a(y.params, r.params);
                    z(n, m.id, b, w, N)
                }
                function N(e) {
                    if (!e.constraintPassed) {
                        var t = f(e, m.id, n, w);
                        if (s.enableHTML5Validation)for (var r = 0; r < e.failingElements.length; r++)e.failingElements[r].setCustomValidity(t.message);
                        v.push(t)
                    }
                    T++, T === c.length && i(v)
                }
            }
        } else v = [];
        return v
    }

    function g(e, t) {
        var n = s.validateEmptyFields;
        return typeof t["ignoreEmpty"] != "undefined" && (n = !t.ignoreEmpty), !d.blank.call(e) || !!n
    }

    function y(e) {
        var t = {YMD: {Year: 0, Month: 1, Day: 2}, MDY: {Month: 0, Day: 1, Year: 2}, DMY: {Day: 0, Month: 1, Year: 2}},
            n = t[e.format], r = e.separator;
        typeof e["separator"] == "undefined" && (r = /\//.test(this.value) ? "/" : /\./.test(this.value) ? "." : / /.test(this.value) ? " " : /[^0-9]+/);
        var i = this.value.split(r), s = new Date(i[n.Year], i[n.Month] - 1, i[n.Day]), o = new Date;
        return typeof e["date"] != "undefined" && (i = e.date.split(r), o = new Date(i[n.Year], i[n.Month] - 1, i[n.Day])), {
            dateToValidate: s,
            dateToTestAgainst: o
        }
    }

    function b(e) {
        return function (t, n, r) {
            var i = !0;
            return g(this, t) && (i = e.call(this, t, n, r)), i
        }
    }

    function w() {
        return !this.validity.typeMismatch
    }

    function E(e) {
        function t(e) {
            var t = e.groups || null, n = e.elementIds || null,
                r = (typeof e.constraintType == "undefined" ? null : e.constraintType) || null, i = "";
            return i += t == null ? "0" : "1", i += n == null ? "0" : "1", i += r == null ? "0" : "1", i
        }

        f = {}, l = {};
        var r = {"000": S, "001": x, "010": T, "011": N, 100: C, 101: k, 110: L, 111: A};
        if (!e || typeof e == "undefined") e = {};
        typeof e.independent == "undefined" && (e.independent = !0), typeof e.constraintType != "undefined" && (e.constraintType = o[e.constraintType]);
        if (typeof e.groups != "undefined") {
            var i = e.groups;
            e.groups = [];
            for (var s = 0; s < i.length; s++)e.groups.push(n.ReverseGroup[i[s]])
        }
        if (typeof e.elements != "undefined") {
            e.elementIds = [];
            for (var s = 0; s < e.elements.length; s++)e.elementIds.push(e.elements[s].id)
        } else typeof e.elementId != "undefined" && (e.elementIds = [e.elementId]);
        return r[t(e)](e)
    }

    function S(e) {
        var t = {asyncContexts: [], syncContexts: []};
        for (var n in a)if (a.hasOwnProperty(n)) {
            var r = a[n];
            for (var i in r)if (r.hasOwnProperty(i))if (!document.getElementById(i)) delete r[i]; else {
                var s = r[i];
                for (var o in s)if (s.hasOwnProperty(o)) {
                    var u = H(n, i, o);
                    u.async ? t.asyncContexts.push(u) : t.syncContexts.push(u)
                }
            }
        }
        return t = M(t), D(t, e)
    }

    function x(e) {
        var t = {asyncContexts: [], syncContexts: []};
        for (var n in a)if (a.hasOwnProperty(n)) {
            var r = a[n];
            for (var i in r)if (r.hasOwnProperty(i)) {
                var s = r[i];
                if (s[e.constraintType]) {
                    var o = H(n, i, e.constraintType);
                    o.async ? t.asyncContexts.push(o) : t.syncContexts.push(o)
                }
            }
        }
        return t = M(t), D(t, e)
    }

    function T(e) {
        var t = {}, n = {asyncContexts: [], syncContexts: []};
        for (var s in a)if (a.hasOwnProperty(s)) {
            var o = a[s];
            for (var u = 0; u < e.elementIds.length; u++) {
                var f = e.elementIds[u];
                typeof t[f] == "undefined" && (t[f] = 0);
                var l = o[f];
                if (typeof l != "undefined") {
                    t[f]++;
                    for (var c in l)if (l.hasOwnProperty(c)) {
                        var h = H(s, f, c);
                        h.async ? n.asyncContexts.push(h) : n.syncContexts.push(h)
                    }
                }
            }
        }
        var p = [];
        for (var f in t)t.hasOwnProperty(f) && t[f] === 0 && p.push(f);
        if (p.length > 0)throw new r.Exception.IllegalArgumentException("No constraints have been bound to the specified elements: " + i.explode(p) + ". " + r.explodeParameters(e));
        return n = M(n), D(n, e)
    }

    function N(e) {
        var t = [], n = {asyncContexts: [], syncContexts: []};
        for (var s in a)if (a.hasOwnProperty(s)) {
            var o = a[s];
            for (var u = 0; u < e.elementIds.length; u++) {
                var f = e.elementIds[u], l = o[f];
                if (typeof l != "undefined") {
                    var c = H(s, f, e.constraintType);
                    c.async ? n.asyncContexts.push(c) : n.syncContexts.push(c)
                } else t.push(f)
            }
        }
        if (t.length > 0)throw new r.Exception.IllegalArgumentException("No constraints have been bound to the specified elements: " + i.explode(t) + ". " + r.explodeParameters(e));
        return n = M(n), D(n, e)
    }

    function C(e) {
        var t = !1, n = {groupedContexts: {}}, i = 0;
        while (i < e.groups.length) {
            var s = e.groups[i], o = a[s];
            if (typeof o == "undefined")throw new r.Exception.IllegalArgumentException("Undefined group in group list. " + r.explodeParameters(e));
            for (var u in o)if (o.hasOwnProperty(u)) {
                var f = o[u];
                for (var l in f)if (f.hasOwnProperty(l)) {
                    var c = H(s, u, l);
                    n.groupedContexts[s] || (n.groupedContexts[s] = {
                        asyncContexts: [],
                        syncContexts: []
                    }), c.async ? (t = !0, n.groupedContexts[s].asyncContexts.push(c)) : n.groupedContexts[s].syncContexts.push(c)
                }
            }
            i++
        }
        var h = _(n);
        return e.groups = h.groups, n = h.uniqueConstraintsToValidate, P(e, n, t)
    }

    function k(e) {
        var t = !1, n = {groupedContexts: {}}, i = 0;
        while (i < e.groups.length) {
            var s = e.groups[i], o = a[s];
            if (typeof o == "undefined")throw new r.Exception.IllegalArgumentException("Undefined group in group list. " + r.explodeParameters(e));
            var u = !1;
            for (var f in o)if (o.hasOwnProperty(f)) {
                var l = o[f];
                if (l[e.constraintType]) {
                    u = !0;
                    var c = H(s, f, e.constraintType);
                    n.groupedContexts[s] || (n.groupedContexts[s] = {
                        asyncContexts: [],
                        syncContexts: []
                    }), c.async ? (t = !0, n.groupedContexts[s].asyncContexts.push(c)) : n.groupedContexts[s].syncContexts.push(c)
                }
            }
            if (!u)throw new r.Exception.IllegalArgumentException("Constraint " + e.constraintType + " has not been bound to any element under group " + s + ". " + r.explodeParameters(e));
            i++
        }
        var h = _(n);
        return e.groups = h.groups, n = h.uniqueConstraintsToValidate, P(e, n, t)
    }

    function L(e) {
        var t = [], n = [], s = !1, o = {groupedContexts: {}}, u = 0;
        while (u < e.groups.length) {
            var f = e.groups[u], l = a[f];
            if (!l)throw new r.Exception.IllegalArgumentException("Undefined group in group list. " + r.explodeParameters(e));
            for (var c = 0; c < e.elementIds.length; c++) {
                var h = e.elementIds[c], p = l[h];
                if (p) {
                    for (var d in p)if (p.hasOwnProperty(d)) {
                        var v = H(f, h, d);
                        o.groupedContexts[f] || (o.groupedContexts[f] = {
                            asyncContexts: [],
                            syncContexts: []
                        }), v.async ? (s = !0, o.groupedContexts[f].asyncContexts.push(v)) : o.groupedContexts[f].syncContexts.push(v)
                    }
                } else t.push(f), n.push(h)
            }
            u++
        }
        if (t.length > 0)throw new r.Exception.IllegalArgumentException("The following elements: " + i.explode(n) + " were not found in one or more of the following group(s): [" + i.explode(t, ",").replace(/,/g, ", ") + "]. " + r.explodeParameters(e));
        var m = _(o);
        return e.groups = m.groups, o = m.uniqueConstraintsToValidate, P(e, o, s)
    }

    function A(e) {
        var t = !1, n = {groupedContexts: {}}, r = 0;
        while (r < e.groups.length) {
            var i = e.groups[r];
            for (var s = 0; s < e.elementIds.length; s++) {
                var o = e.elementIds[s], u = H(i, o, e.constraintType);
                n.groupedContexts[i] || (n.groupedContexts[i] = {
                    asyncContexts: [],
                    syncContexts: []
                }), u.async ? (t = !0, n.groupedContexts[i].asyncContexts.push(u)) : n.groupedContexts[i].syncContexts.push(u)
            }
            r++
        }
        var a = _(n);
        return e.groups = a.groups, n = a.uniqueConstraintsToValidate, P(e, n, t)
    }

    function O(e) {
        var t = !0;
        f[e.elementId] || (f[e.elementId] = {});
        var n = document.getElementById(e.elementId).cloneNode(!1), r = n.name.replace(/\s/g, "");
        return typeof n.type != "undefined" && n.type.toLowerCase() === "radio" && r !== "" ? l[r] || (l[r] = {}) : l[r] = {}, !f[e.elementId][e.elementConstraint] && !l[r][e.elementConstraint] && (t = !1, f[e.elementId][e.elementConstraint] = !0, typeof n.type != "undefined" && n.type.toLowerCase() === "radio" && r !== "" && (l[r][e.elementConstraint] = !0)), t
    }

    function M(e) {
        var t = {asyncContexts: [], syncContexts: []};
        for (var n = 0; n < e.syncContexts.length; n++) {
            var r = e.syncContexts[n];
            O(r) || t.syncContexts.push(r)
        }
        for (var n = 0; n < e.asyncContexts.length; n++) {
            var r = e.asyncContexts[n];
            O(r) || t.asyncContexts.push(r)
        }
        return t
    }

    function _(e) {
        var t = [], n = {groupedContexts: {}};
        for (var r in e.groupedContexts)if (e.groupedContexts.hasOwnProperty(r)) {
            for (var i = 0; i < e.groupedContexts[r].syncContexts.length; i++) {
                var s = e.groupedContexts[r].syncContexts[i];
                O(s) || (n.groupedContexts[r] || (n.groupedContexts[r] = {
                    asyncContexts: [],
                    syncContexts: []
                }), n.groupedContexts[r].syncContexts.push(s), t.indexOf(r) == -1 && t.push(r))
            }
            for (var i = 0; i < e.groupedContexts[r].asyncContexts.length; i++) {
                var s = e.groupedContexts[r].asyncContexts[i];
                O(s) || (n.groupedContexts[r] || (n.groupedContexts[r] = {
                    asyncContexts: [],
                    syncContexts: []
                }), n.groupedContexts[r].asyncContexts.push(s), t.indexOf(r) == -1 && t.push(r))
            }
        }
        return {groups: t, uniqueConstraintsToValidate: n}
    }

    function D(e, t) {
        var n = [];
        e.syncContexts.length > 0 && (n = B(e));
        if (e.asyncContexts.length > 0) {
            if (!t.callback)throw new r.Exception.IllegalArgumentException("One or more constraints to be validated are asynchronous, but a callback has not been provided.");
            j(e, function (e) {
                n.length > 0 ? n = n.concat(e) : n = e, t.callback(n)
            })
        } else t.callback && t.callback(n);
        return n
    }

    function P(e, t, n) {
        var i = F(e.groups, e.independent, t);
        if (n) {
            if (!e.callback)throw new r.Exception.IllegalArgumentException("One or more constraints to be validated are asynchronous, but a callback has not been provided.");
            if (!e.independent && i.length > 0) {
                var s = i[0].group, o = t.groupedContexts[s];
                t.groupedContexts = {}, t.groupedContexts[s] = o
            }
            I(e.groups, e.independent, t, function (t) {
                i.length > 0 ? i = i.concat(t) : i = t, e.callback(i)
            })
        } else e.callback && e.callback(i);
        return i
    }

    function H(e, t, n) {
        var i = a[e];
        if (!i)throw new r.Exception.IllegalArgumentException("Undefined group in group list (group: " + e + ", elementId: " + t + ", constraint: " + n + ")");
        var s = i[t];
        if (!s)throw new r.Exception.IllegalArgumentException("No constraints have been defined for the element with id: " + t + " in group " + e);
        var o = s[n];
        if (!o)throw new r.Exception.IllegalArgumentException("Constraint " + n + " in group " + e + " hasn't been bound to the element with id " + t);
        return {group: e, elementId: t, elementConstraint: n, params: o, async: u[n].async}
    }

    function B(e) {
        var t = [], n = 0;
        while (n < e.syncContexts.length) {
            var r = e.syncContexts[n], i = q(r.group, r.elementId, r.elementConstraint, r.params);
            i && t.push(i), n++
        }
        return t
    }

    function j(e, t) {
        function o(i) {
            r++, i && n.push(i), r === e.asyncContexts.length && t(n)
        }

        var n = [], r = 0;
        for (var i = 0; i < e.asyncContexts.length; i++) {
            var s = e.asyncContexts[i];
            R(s.group, s.elementId, s.elementConstraint, s.params, o)
        }
    }

    function F(e, t, n) {
        var r = [], i = 0, s = !0;
        while (i < e.length && s) {
            var o = e[i], u = n.groupedContexts[o].syncContexts;
            for (var a = 0; a < u.length; a++) {
                var f = u[a], l = q(f.group, f.elementId, f.elementConstraint, f.params);
                l && r.push(l)
            }
            i++, s = r.length == 0 || t && r.length != 0
        }
        return r
    }

    function I(e, t, n, r) {
        var i = [], s = !0;
        (function o(u) {
            if (u < e.length && s) {
                var a = e[u], f = n.groupedContexts[a].asyncContexts, l = 0;
                for (var c = 0; c < f.length; c++) {
                    var h = f[c];
                    R(h.group, h.elementId, h.elementConstraint, h.params, p)
                }
                function p(e) {
                    l++, e && i.push(e), l === f.length && (s = i.length === 0 || t && i.length != 0, o(++u))
                }
            } else r(i)
        })(0)
    }

    function q(e, t, n, r) {
        var i, o = U(e, t, n, r), a = "";
        o.constraintPassed || (a = W(t, n, r), i = {
            group: e,
            constraintName: n,
            formSpecific: u[n].formSpecific,
            custom: u[n].custom,
            compound: u[n].compound,
            async: u[n].async,
            composingConstraintViolations: o.composingConstraintViolations || [],
            constraintParameters: r,
            failingElements: o.failingElements,
            message: a
        });
        if (s.enableHTML5Validation)for (var f = 0; f < o.failingElements.length; f++)o.failingElements[f].setCustomValidity("");
        return i
    }

    function R(e, t, n, r, i) {
        var o;
        z(e, t, n, r, function (a) {
            var f = "";
            a.constraintPassed || (f = W(t, n, r), o = {
                group: e,
                constraintName: n,
                formSpecific: u[n].formSpecific,
                custom: u[n].custom,
                compound: u[n].compound,
                async: u[n].async,
                composingConstraintViolations: a.composingConstraintViolations || [],
                constraintParameters: r,
                failingElements: a.failingElements,
                message: f
            });
            if (s.enableHTML5Validation)for (var l = 0; l < a.failingElements.length; l++)a.failingElements[l].setCustomValidity("");
            i(o)
        })
    }

    function U(t, n, r, i) {
        var s = !1, o = [], a = document.getElementById(n), f = [];
        u[r].formSpecific ? (o = u[r].validator.call(a, i, c), s = o.length == 0) : u[r].compound ? (f = u[r].validator.call(a, i, t, u[r], null), s = f.length == 0, s || o.push(a)) : (s = u[r].validator.call(a, i, c), s || o.push(a));
        var l = a.cloneNode(!1).name.replace(/\s/g, ""), h = a.cloneNode(!1).type;
        typeof h != "undefined" && h.toLowerCase() === "radio" && l !== "" && (o = e.getElementsByAttribute(document.body, "input", "name", l.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")));
        var p = {constraintName: r, constraintPassed: s, failingElements: o};
        return u[r].reportAsSingleViolation || (p.composingConstraintViolations = f), p
    }

    function z(t, n, r, i, s) {
        function a(t, n, i, s) {
            var a = o.cloneNode(!1).name.replace(/\s/g, ""), f = o.cloneNode(!1).type;
            typeof f != "undefined" && f.toLowerCase() === "radio" && a !== "" && (i = e.getElementsByAttribute(document.body, "input", "name", a));
            var l = {constraintName: r, constraintPassed: t, failingElements: i};
            u[r].reportAsSingleViolation || (l.composingConstraintViolations = n), s(l)
        }

        var o = document.getElementById(n);
        u[r].formSpecific ? u[r].validator.call(o, i, c, function (e) {
            a(e.length === 0, null, e, s)
        }) : u[r].compound ? u[r].validator.call(o, i, t, u[r], function (e) {
            var t = [], n = e.length === 0;
            n || t.push(o), a(n, e, t, s)
        }) : u[r].validator.call(o, i, c, function (e) {
            var t = [];
            e || t.push(o), a(e, null, t, s)
        })
    }

    function W(t, n, r) {
        var i = document.getElementById(t), s = "";
        r.message ? s = r.message : r.msg ? s = r.msg : s = u[n].defaultMessage;
        for (var o in r)if (r.hasOwnProperty(o)) {
            var a = new RegExp("{" + o + "}", "g");
            s = s.replace(a, r[o])
        }
        if (u[n].compound && typeof u[n].composingConstraints != "undefined")for (var f = 0; f < u[n].composingConstraints.length; f++) {
            var l = u[n].composingConstraints[f];
            for (var o in l.params)if (l.params.hasOwnProperty(o)) {
                var a = new RegExp("{" + o + "}", "g");
                s = s.replace(a, l.params[o])
            }
        }
        if (/{label}/.test(s)) {
            var c = e.friendlyInputNames[i.cloneNode(!1).tagName.toLowerCase()];
            c || (c = e.friendlyInputNames[i.cloneNode(!1).type.toLowerCase()]), s = s.replace(/{label}/, c), s = s.replace(/{flags}/g, "")
        }
        return s = s.replace(/\\\"/g, '"'), s
    }

    var s = {}, o = {}, u = {}, a = {}, f = {}, l = {}, c = {}, d = {
        checked: function (t) {
            var n = !1;
            if (this.type.toLowerCase() === "radio" && this.name.replace(/\s/g, "") !== "") {
                var r = e.getElementsByAttribute(document.body, "input", "name", this.name.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")),
                    i = 0;
                while (i < r.length && !n)n = r[i].checked, i++
            } else n = this.checked;
            return n
        },
        selected: function (e) {
            return this.selectedIndex > 0
        },
        max: function (e) {
            var t = !0;
            return g(this, e) && (t = parseFloat(this.value) <= parseFloat(e.value)), t
        },
        min: function (e) {
            var t = !0;
            return g(this, e) && (t = parseFloat(this.value) >= parseFloat(e.value)), t
        },
        range: function (e) {
            var t = !0;
            return g(this, e) && (t = this.value.replace(/\s/g, "") != "" && parseFloat(this.value) <= parseFloat(e.max) && parseFloat(this.value) >= parseFloat(e.min)), t
        },
        notBlank: function (e) {
            return this.value.replace(/\s/g, "") != ""
        },
        blank: function (e) {
            return this.value.replace(/\s/g, "") === ""
        },
        matches: function (e) {
            var t = !0;
            if (g(this, e)) {
                var n, r;
                typeof e["regex"] == "string" ? r = e.regex.replace(/^\//, "").replace(/\/$/, "") : r = e.regex, typeof e["flags"] != "undefined" ? n = new RegExp(r.toString().replace(/^\//, "").replace(/\/[^\/]*$/, ""), e.flags) : n = new RegExp(r), t = n.test(this.value)
            }
            return t
        },
        email: function (e) {
            var t = !0;
            return g(this, e) && (t = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(this.value)), t
        },
        alpha: function (e) {
            var t = !0;
            return g(this, e) && (t = /^[A-Za-z]+$/.test(this.value)), t
        },
        numeric: function (e) {
            var t = !0;
            return g(this, e) && (t = /^[0-9]+$/.test(this.value)), t
        },
        integer: function (e) {
            var t = !0;
            return g(this, e) && (t = /^-?[0-9]+$/.test(this.value)), t
        },
        real: function (e) {
            var t = !0;
            return g(this, e) && (t = /^-?([0-9]+(\.[0-9]+)?|\.[0-9]+)$/.test(this.value)), t
        },
        alphaNumeric: function (e) {
            var t = !0;
            return g(this, e) && (t = /^[0-9A-Za-z]+$/.test(this.value)), t
        },
        completelyFilled: function (e) {
            var t = [];
            for (var n = 0; n < this.elements.length; n++) {
                var r = this.elements[n];
                d.required.call(r) || t.push(r)
            }
            return t
        },
        passwordsMatch: function (e) {
            var t = [], n = document.getElementById(e.field1), r = document.getElementById(e.field2);
            return n.value != r.value && (t = [n, r]), t
        },
        required: function (e) {
            var t = !0;
            return this.tagName && (this.tagName.toLowerCase() === "select" ? t = d.selected.call(this) : this.type.toLowerCase() === "checkbox" || this.type.toLowerCase() === "radio" ? t = d.checked.call(this) : (this.tagName.toLowerCase() === "input" || this.tagName.toLowerCase() === "textarea") && this.type.toLowerCase() != "button" && (t = d.notBlank.call(this))), t
        },
        length: function (e) {
            var t = !0;
            return g(this, e) && (t = this.value.length >= e.min && this.value.length <= e.max), t
        },
        digits: function (e) {
            var t = !0;
            if (g(this, e)) {
                var n = this.value.replace(/\s/g, ""), r = n.split(/\./);
                t = !1, n.length > 0 && (r.length == 1 && (r[1] = ""), e.integer > 0 ? t = r[0].length <= e.integer : t = !0, e.fraction > 0 && (t = t && r[1].length <= e.fraction))
            }
            return t
        },
        past: function (e) {
            var t = !0;
            if (g(this, e)) {
                var n = y.call(this, e);
                t = n.dateToValidate < n.dateToTestAgainst
            }
            return t
        },
        future: function (e) {
            var t = !0;
            if (g(this, e)) {
                var n = y.call(this, e);
                t = n.dateToValidate > n.dateToTestAgainst
            }
            return t
        },
        url: function (e) {
            var t = !0;
            return g(this, e) && (t = /^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(this.value)), t
        },
        step: function (e) {
            var t = !0;
            if (g(this, e)) {
                var n = parseFloat(this.value), r = parseFloat(e.max), i = parseFloat(e.min), s = parseFloat(e.value);
                t = n <= r && n >= i && n % s === 0
            }
            return t
        },
        html5Required: function (e) {
            return !this.validity.valueMissing
        },
        html5Email: w,
        html5URL: w,
        html5Number: w,
        html5DateTime: w,
        html5DateTimeLocal: w,
        html5Date: w,
        html5Month: w,
        html5Time: w,
        html5Week: w,
        html5Range: w,
        html5Tel: w,
        html5Color: w,
        html5Pattern: function (e) {
            return !this.validity.patternMismatch
        },
        html5MaxLength: function (e) {
            return !this.validity.tooLong
        },
        html5Min: function (e) {
            return !this.validity.rangeUnderflow
        },
        html5Max: function (e) {
            return !this.validity.rangeOverflow
        },
        html5Step: function (e) {
            return !this.validity.stepMismatch
        }
    };
    return {
        Validator: d,
        init: p,
        wrapValidatorWithEmptyCheck: b,
        initializePublicValidators: h,
        compoundValidator: m,
        validate: E,
        runValidatorFor: U,
        interpolateConstraintDefaultMessage: W,
        createPublicValidator: v
    }
}), function (e, t) {
    typeof define == "function" && define.amd ? define("domain/CompositionGraph", t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.CompositionGraph = t())
}(this, function () {
    function n(n) {
        var r = n.type, i = n.name, s = n.parent,
            o = typeof e[r] == "undefined" ? {visited: !1, name: i, type: r, parents: [], children: []} : e[r];
        s == null ? t.children.push(o) : (s.children.push(o), o.parents.push(s)), e[r] = o
    }

    function r() {
        var e = {}, n = function r(t, n) {
            var i = typeof e[t.type] == "undefined" ? {
                visited: t.visited,
                name: t.name,
                type: t.type,
                parents: [],
                children: []
            } : e[t.type];
            n !== null && i.parents.push(n);
            for (var s = 0; s < t.children.length; s++)i.children.push(r(t.children[s], i));
            return e[t.type] = i, i
        }(t, null);
        return {typeToNodeMap: e, root: n}
    }

    function i(t) {
        var n = e[t];
        return typeof n == "undefined" ? null : n
    }

    function s(e) {
        var t = function n(e, t) {
            var r = {cycle: !1, path: t};
            if (e.visited) r.cycle = !0; else {
                e.visited = !0;
                var i = 0;
                while (i < e.children.length && !r.cycle)r = n(e.children[i], t + "." + e.children[i].name), i++
            }
            return r
        }(e, e.name);
        return t.cycle || o(), t
    }

    function o() {
        (function e(t) {
            t.visited = !1;
            for (var n = 0; n < t.children.length; n++)e(t.children[n])
        })(t)
    }

    function u() {
        return t
    }

    function a(e) {
        t = e
    }

    function f(n) {
        e = n.typeToNodeMap, t = n.root
    }

    var e = {}, t = {visited: !1, name: "RootNode", type: -1, parents: [], children: []};
    return {
        ROOT: -1,
        addNode: n,
        getNodeByType: i,
        analyze: s,
        getRoot: u,
        setRoot: a,
        clone: r,
        initializeFromClone: f
    }
}), function (e, t) {
    typeof define == "function" && define.amd ? define("service/ConstraintService", ["service/ValidationService", "domain/CompositionGraph", "service/ExceptionService", "utils/MapUtils", "utils/ArrayUtils"], t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.ConstraintService = t(e.regulaModules.ValidationService, e.regulaModules.CompositionGraph, e.regulaModules.ExceptionService, e.regulaModules.MapUtils, e.regulaModules.ArrayUtils))
}(this, function (e, t, n, r, i) {
    function f(r) {
        var i = typeof r.async == "undefined" ? a[r.name].async : r.async, u = r.validator;
        r.validatorRedefined && !r.formSpecific && (u = e.wrapValidatorWithEmptyCheck(u));
        var f = t.getNodeByType(r.constraintType);
        if (r.compound) {
            v(r.name, r.composingConstraints, r.params);
            var l = t.clone();
            d(r.name, r.composingConstraints);
            var c = t.analyze(f);
            if (c.cycle)throw t.initializeFromClone(l), new n.Exception.ConstraintDefinitionException("regula.override: The overriding composing-constraints you have specified have created a cyclic composition: " + c.path);
            i = !1;
            var h = 0;
            while (h < r.composingConstraints.length && !i) {
                var p = r.composingConstraints[h], m = a[o[p.constraintType]];
                i = m.async, h++
            }
        }
        f !== null && function g(e) {
            for (var n = 0; n < e.parents.length; n++) {
                var r = e.parents[n];
                if (r.type !== t.ROOT) {
                    var s = o[r.type], u = a[s];
                    u.async = i, g(r)
                }
            }
        }(f), a[r.name] = {
            async: i,
            formSpecific: r.formSpecific,
            constraintType: s[r.name],
            custom: !0,
            compound: r.compound,
            params: r.params,
            composingConstraints: r.composingConstraints,
            defaultMessage: r.defaultMessage,
            validator: u
        }, a[r.name].custom && r.validatorRedefined && e.createPublicValidator(r.name, a)
    }

    function l(t) {
        s[t.name] = u, o[u++] = t.name;
        var n = t.validator;
        t.formSpecific || (n = e.wrapValidatorWithEmptyCheck(t.validator)), a[t.name] = {
            async: t.async,
            formSpecific: t.formSpecific,
            validator: n,
            constraintType: s[t.name],
            custom: !0,
            compound: !1,
            params: t.params,
            defaultMessage: t.defaultMessage
        }, e.createPublicValidator(t.name, a)
    }

    function c(t) {
        v(t.name, t.constraints, t.params);
        var n = !1, r = 0;
        while (r < t.constraints.length && !n) {
            var i = t.constraints[r], f = o[i.constraintType];
            n = n || a[f].async, r++
        }
        s[t.name] = u, o[u++] = t.name, a[t.name] = {
            async: n,
            formSpecific: t.formSpecific,
            constraintType: s[t.name],
            custom: !0,
            compound: !0,
            params: t.params,
            reportAsSingleViolation: t.reportAsSingleViolation,
            composingConstraints: t.constraints,
            defaultMessage: t.defaultMessage,
            validator: e.compoundValidator
        }, e.createPublicValidator(t.name, a), d(t.name, t.constraints)
    }

    function h(e, t, r) {
        var i = {successful: !0, message: "", data: null}, s = e.cloneNode(!1);
        if (s.tagName.toLowerCase() == "form" && !a[t].formSpecific) i = {
            successful: !1,
            message: n.generateExceptionMessage(e, t, "@" + t + " is not a form constraint, but you are trying to bind it to a form"),
            data: null
        }; else if (s.tagName.toLowerCase() != "form" && a[t].formSpecific) i = {
            successful: !1,
            message: n.generateExceptionMessage(e, t, "@" + t + " is a form constraint, but you are trying to bind it to a non-form element"),
            data: null
        }; else if ((typeof s.type == "undefined" || s.type.toLowerCase() != "checkbox" && s.type.toLowerCase() != "radio") && t == "Checked") i = {
            successful: !1,
            message: n.generateExceptionMessage(e, t, "@" + t + " is only applicable to checkboxes and radio buttons. You are trying to bind it to an input element that is neither a checkbox nor a radio button."),
            data: null
        }; else if (s.tagName.toLowerCase() != "select" && t == "Selected") i = {
            successful: !1,
            message: n.generateExceptionMessage(e, t, "@" + t + " is only applicable to select boxes. You are trying to bind it to an input element that is not a select box."),
            data: null
        }; else {
            var o = p(e, a[t], r);
            o.error ? i = {successful: !1, message: o.message, data: null} : i.data = r
        }
        return i
    }

    function p(e, t, r) {
        var s = {error: !1, message: ""};
        r.__size__ < t.params.length && (s = {
            error: !0,
            message: n.generateExceptionMessage(e, o[t.constraintType], "@" + o[t.constraintType] + " expects at least " + t.params.length + " parameter(s). However, you have provided only " + r.__size__),
            data: null
        });
        var u = [];
        for (var a = 0; a < t.params.length; a++) {
            var f = t.params[a];
            typeof r[f] == "undefined" && u.push(f)
        }
        return u.length > 0 && (s = {
            error: !0,
            message: n.generateExceptionMessage(e, o[t.constraintType], "You seem to have provided some optional or required parameters for @" + o[t.constraintType] + ", but you are still missing the following " + u.length + " required parameter(s): " + i.explode(u, ", ")),
            data: null
        }), s
    }

    function d(e, n) {
        var r = t.getNodeByType(s[e]);
        r == null && (t.addNode({type: s[e], name: e, parent: null}), r = t.getNodeByType(s[e]));
        for (var i = 0; i < r.children.length; i++) {
            var u = r.children[i], f = [];
            for (var l = 0; l < u.parents.length; l++)u.parents[l] !== r && f.push(u.parents[l]);
            u.parents = f
        }
        r.children = [];
        for (var i = 0; i < n.length; i++) {
            var c = o[n[i].constraintType], h = a[c];
            t.addNode({type: h.constraintType, name: o[h.constraintType], parent: r})
        }
    }

    function v(e, t, i) {
        for (var s = 0; s < t.length; s++) {
            if (typeof t[s].constraintType == "undefined")throw new n.Exception.ConstraintDefinitionException("In compound constraint " + e + ": A composing constraint has no constraint type specified.");
            var u = t[s], f = o[u.constraintType], l = {__size__: 0};
            u.params = u.params || {};
            for (var c in u.params)u.params.hasOwnProperty(c) && r.put(l, c, u.params[c]);
            var h = 0;
            for (var d in u.params)u.params.hasOwnProperty(d) && h++;
            u.params.__size__ = h;
            for (var v = 0; v < i.length; v++)r.put(l, i[v], null);
            var m = p(null, a[f], l);
            if (m.error)throw new n.Exception.ConstraintDefinitionException("In compound constraint " + e + ": " + m.message)
        }
    }

    var s = {}, o = {}, u = 0;
    (function (e) {
        for (var t = 0; t < e.length; t++)s[e[t]] = t, o[t] = e[t];
        u = t, s.Between = s.Range, s.Matches = s.Pattern, s.Empty = s.Blank, s.NotEmpty = s.NotBlank, s.IsAlpha = s.Alpha, s.IsNumeric = s.Numeric, s.IsAlphaNumeric = s.AlphaNumeric
    })(["Checked", "Selected", "Max", "Min", "Range", "Between", "NotBlank", "NotEmpty", "Blank", "Empty", "Pattern", "Matches", "Email", "Alpha", "IsAlpha", "Numeric", "IsNumeric", "AlphaNumeric", "IsAlphaNumeric", "Integer", "Real", "CompletelyFilled", "PasswordsMatch", "Required", "Length", "Digits", "Past", "Future", "Step", "URL", "HTML5Required", "HTML5Email", "HTML5URL", "HTML5MaxLength", "HTML5Pattern", "HTML5Min", "HTML5Max", "HTML5Step"]);
    var a = {
        Checked: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.checked,
            constraintType: s.Checked,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} needs to be checked."
        },
        Selected: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.selected,
            constraintType: s.Selected,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} needs to be selected."
        },
        Max: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.max,
            constraintType: s.Max,
            custom: !1,
            compound: !1,
            params: ["value"],
            defaultMessage: "{label} needs to be lesser than or equal to {value}."
        },
        Min: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.min,
            constraintType: s.Min,
            custom: !1,
            compound: !1,
            params: ["value"],
            defaultMessage: "{label} needs to be greater than or equal to {value}."
        },
        Range: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.range,
            constraintType: s.Range,
            custom: !1,
            compound: !1,
            params: ["min", "max"],
            defaultMessage: "{label} needs to be between {min} and {max}."
        },
        NotBlank: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.notBlank,
            constraintType: s.NotBlank,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} cannot be blank."
        },
        Blank: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.blank,
            constraintType: s.Blank,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} needs to be blank."
        },
        Pattern: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.matches,
            constraintType: s.Pattern,
            custom: !1,
            compound: !1,
            params: ["regex"],
            defaultMessage: "{label} needs to match {regex}{flags}."
        },
        Email: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.email,
            constraintType: s.Email,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} is not a valid email."
        },
        Alpha: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.alpha,
            constraintType: s.Alpha,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} can only contain letters."
        },
        Numeric: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.numeric,
            constraintType: s.Numeric,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "Only numbers are required"
        },
        AlphaNumeric: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.alphaNumeric,
            constraintType: s.AlphaNumeric,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} can only contain numbers and letters."
        },
        Integer: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.integer,
            constraintType: s.Integer,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} must be an integer."
        },
        Real: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.real,
            constraintType: s.Real,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} must be a real number."
        },
        CompletelyFilled: {
            async: !1,
            html5: !1,
            formSpecific: !0,
            validator: e.Validator.completelyFilled,
            constraintType: s.CompletelyFilled,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} must be completely filled."
        },
        PasswordsMatch: {
            async: !1,
            html5: !1,
            formSpecific: !0,
            validator: e.Validator.passwordsMatch,
            constraintType: s.PasswordsMatch,
            custom: !1,
            compound: !1,
            params: ["field1", "field2"],
            defaultMessage: "Passwords do not match."
        },
        Required: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.required,
            constraintType: s.Required,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} is required."
        },
        Length: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.length,
            constraintType: s.Length,
            custom: !1,
            compound: !1,
            params: ["min", "max"],
            defaultMessage: "{label} length must be between {min} and {max}."
        },
        Digits: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.digits,
            constraintType: s.Digits,
            custom: !1,
            compound: !1,
            params: ["integer", "fraction"],
            defaultMessage: "{label} must have up to {integer} digits and {fraction} fractional digits."
        },
        Past: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.past,
            constraintType: s.Past,
            custom: !1,
            compound: !1,
            params: ["format"],
            defaultMessage: "{label} must be in the past."
        },
        Future: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.future,
            constraintType: s.Future,
            custom: !1,
            compound: !1,
            params: ["format"],
            defaultMessage: "{label} must be in the future."
        },
        Step: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.step,
            constraintType: s.Step,
            custom: !1,
            compound: !1,
            params: ["min", "max", "value"],
            defaultMessage: "{label} must be equal to {min} or greater, and equal to {max} or lesser, at increments of {value}."
        },
        URL: {
            async: !1,
            html5: !1,
            formSpecific: !1,
            validator: e.Validator.url,
            constraintType: s.URL,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} must be a valid URL."
        },
        HTML5Required: {
            async: !1,
            html5: !0,
            inputType: null,
            attribute: "required",
            formSpecific: !1,
            validator: e.Validator.html5Required,
            constraintType: s.HTML5Required,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} is required."
        },
        HTML5Email: {
            async: !1,
            html5: !0,
            inputType: "email",
            attribute: null,
            formSpecific: !1,
            validator: e.Validator.html5Email,
            constraintType: s.HTML5Email,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} is not a valid email."
        },
        HTML5Pattern: {
            async: !1,
            html5: !0,
            inputType: null,
            attribute: "pattern",
            formSpecific: !1,
            validator: e.Validator.html5Pattern,
            constraintType: s.HTML5Pattern,
            custom: !1,
            compound: !1,
            params: ["pattern"],
            defaultMessage: "{label} needs to match {pattern}."
        },
        HTML5URL: {
            async: !1,
            html5: !0,
            inputType: "url",
            attribute: null,
            formSpecific: !1,
            validator: e.Validator.html5URL,
            constraintType: s.HTML5URL,
            custom: !1,
            compound: !1,
            params: [],
            defaultMessage: "{label} is not a valid URL."
        },
        HTML5MaxLength: {
            async: !1,
            html5: !0,
            inputType: null,
            attribute: "maxlength",
            formSpecific: !1,
            validator: e.Validator.html5MaxLength,
            constraintType: s.HTML5MaxLength,
            custom: !1,
            compound: !1,
            params: ["maxlength"],
            defaultMessage: "{label} must be less than {maxlength} characters."
        },
        HTML5Min: {
            async: !1,
            html5: !0,
            inputType: null,
            attribute: "min",
            formSpecific: !1,
            validator: e.Validator.html5Min,
            constraintType: s.HTML5Min,
            custom: !1,
            compound: !1,
            params: ["min"],
            defaultMessage: "{label} needs to be greater than or equal to {min}."
        },
        HTML5Max: {
            async: !1,
            html5: !0,
            inputType: null,
            attribute: "max",
            formSpecific: !1,
            validator: e.Validator.html5Max,
            constraintType: s.HTML5Max,
            custom: !1,
            compound: !1,
            params: ["max"],
            defaultMessage: "{label} needs to be lesser than or equal to {max}."
        },
        HTML5Step: {
            async: !1,
            html5: !0,
            inputType: null,
            attribute: "step",
            formSpecific: !1,
            validator: e.Validator.html5Step,
            constraintType: s.HTML5Step,
            custom: !1,
            compound: !1,
            params: ["step"],
            defaultMessage: "{label} must be equal to the minimum value or greater at increments of {step}."
        }
    };
    return {
        Constraint: s,
        ReverseConstraint: o,
        firstCustomConstraintIndex: u,
        constraintDefinitions: a,
        override: f,
        custom: l,
        compound: c,
        verifyConstraintDefinition: h,
        verifyParameterCountMatches: p
    }
}), function (e, t) {
    typeof define == "function" && define.amd ? define("parser/Parser", ["utils/MapUtils", "service/ExceptionService", "service/ConstraintService"], t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.Parser = t(e.regulaModules.MapUtils, e.regulaModules.ExceptionService, e.regulaModules.ConstraintService))
}(this, function (e, t, n) {
    function r(e) {
        return e ? e.replace(/^\s+/, "").replace(/\s+$/, "") : ""
    }

    function i(e) {
        return e[0]
    }

    function s(t) {
        var n = t.str, r = t.delimiters.split(""), i = t.returnDelimiters || !1, s = t.returnEmptyTokens || !1, o = [],
            u = 0;
        for (var a = 0; a < n.length; a++)if (e.exists(r, n.charAt(a))) {
            var f = n.substring(u, a);
            f.length == 0 ? s && o.push(f) : o.push(f), i && o.push(n.charAt(a)), u = a + 1
        }
        if (u < n.length) {
            var f = n.substring(u, n.length);
            f.length == 0 ? s && o.push(f) : o.push(f)
        }
        return o
    }

    function o(o, u) {
        function l(e) {
            var t = {successful: !0, message: "", data: null}, n = [];
            while (e.length > 0 && t.successful)t = c(e), n.push(t.data);
            return t.data = n, t
        }

        function c(e) {
            var n = {successful: !0, message: "", data: null}, i = e.shift();
            return r(i).length == 0 && (i = e.shift()), i == "@" ? n = h(e) : n = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Invalid constraint. Constraint definitions need to start with '@'") + " " + n.message,
                data: null
            }, n
        }

        function h(e) {
            var r = {
                Between: "Range",
                Matches: "Pattern",
                Empty: "Blank",
                NotEmpty: "NotBlank",
                IsAlpha: "Alpha",
                IsNumeric: "Integer",
                IsAlphaNumeric: "AlphaNumeric"
            }, i = p(e);
            if (i.successful) {
                a = i.data, a = r[a] ? r[a] : a;
                if (n.constraintDefinitions[a]) {
                    i = m(e);
                    if (i.successful) {
                        i = n.verifyConstraintDefinition(o, a, i.data);
                        if (i.successful) {
                            var s = i.data;
                            i.data = {element: o, constraintName: a, definedParameters: s}
                        }
                    }
                } else i = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "I cannot find the specified constraint name. If this is a custom constraint, you need to define it before you bind to it") + " " + i.message,
                    data: null
                }
            } else i = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Invalid constraint name in constraint definition") + " " + i.message,
                data: null
            };
            return i
        }

        function p(e) {
            var n = r(e.shift()), i = d(n.charAt(0));
            if (i.successful) {
                var s = 1;
                while (s < n.length && i.successful)i = v(n.charAt(s)), s++;
                i.successful && (i.data = n)
            } else i = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Invalid starting character for constraint name. Can only include A-Z, a-z, and _") + " " + i.message,
                data: null
            };
            return i
        }

        function d(e) {
            var n = {successful: !0, message: "", data: null};
            if (!/[A-Za-z_]/.test(e) || typeof e == "undefined" || e == null) n = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Invalid starting character"),
                data: null
            };
            return n
        }

        function v(e) {
            var n = {successful: !0, message: "", data: null};
            return /[0-9A-Za-z_]/.test(e) || (n = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Invalid character in identifier. Can only include 0-9, A-Z, a-z, and _") + " " + n.message,
                data: null
            }), n
        }

        function m(n) {
            var s = {successful: !0, message: "", data: {}};
            if (i(n) == "(") {
                n.shift();
                var u = {};
                if (i(n) == ")") n.shift(); else {
                    s = g(n);
                    if (s.successful) {
                        e.put(u, s.data.name, s.data.value), r(i(n)).length == 0 && n.shift();
                        while (n.length > 0 && i(n) == "," && s.successful)n.shift(), s = g(n), s.successful && (e.put(u, s.data.name, s.data.value), r(i(n)).length == 0 && n.shift());
                        if (s.successful) {
                            var f = n.shift();
                            r(f).length == 0 && (f = n.shift()), f != ")" ? s = {
                                successful: !1,
                                message: t.generateExceptionMessage(o, a, "Cannot find matching closing ) in parameter list") + " " + s.message,
                                data: null
                            } : s.data = u
                        }
                    } else s = {
                        successful: !1,
                        message: t.generateExceptionMessage(o, a, "Invalid parameter definition") + " " + s.message,
                        data: null
                    }
                }
            } else i(n) !== undefined && i(n) != "@" && (s = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Unexpected character '" + i(n) + "'" + " after constraint definition") + " " + s.message,
                data: null
            });
            return s
        }

        function g(e) {
            var n = y(e);
            if (n.successful) {
                var r = n.data, i = e.shift();
                i == "=" ? (n = b(e), n.successful ? n.data = {name: r, value: n.data} : n = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Invalid parameter value") + " " + n.message,
                    data: null
                }) : (e.unshift(i), n = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "'=' expected after parameter name " + n.message),
                    data: null
                })
            } else n = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Invalid parameter name. You might have unmatched parentheses") + " " + n.message,
                data: null
            };
            return n
        }

        function y(e) {
            var n = r(e.shift());
            n.length == 0 && (n = e.shift());
            var i = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Invalid starting character for parameter name. Can only include A-Z, a-z, and _"),
                data: null
            };
            if (typeof n != "undefined") {
                i = d(n.charAt(0));
                if (i.successful) {
                    var s = 1;
                    while (s < n.length && i.successful)i = v(n.charAt(s)), s++;
                    i.successful && (i.data = n)
                } else i = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Invalid starting character for parameter name. Can only include A-Z, a-z, and _") + " " + i.message,
                    data: null
                }
            }
            return i
        }

        function b(e) {
            r(i(e)).length == 0 && e.shift();
            var n = {successful: !0, message: "", data: []};
            if (i(e) == ")") n = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Parameter value expected") + " " + n.message,
                data: null
            }; else {
                n = w(e);
                var s = n.message;
                n.successful || (n = C(e), n.message = n.message + " " + s, s = n.message, n.successful || (n = L(e), n.message = n.message + " " + s, s = n.message, n.successful || (n = A(e), n.message = n.message + " " + s, s = n.message, n.successful || (n = O(e), n.message = n.message + " " + s, s = n.message, n.successful || (n = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Parameter value must be a number, quoted string, regular expression, or a boolean") + " " + s,
                    data: null
                })))))
            }
            return n
        }

        function w(e) {
            var n = E(e);
            return n.successful || (n = S(e), n.successful || (n = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Parameter value is not a number") + " " + n.message,
                data: null
            })), n
        }

        function E(e) {
            var n = e.shift(), r = {successful: !0, message: "", data: null};
            return n == "-" ? (r = S(e), r.successful && (r.data = n + r.data)) : (e.unshift(n), r = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Not a negative number"),
                data: null
            }), r
        }

        function S(e) {
            var n = null;
            if (i(e) != ".") {
                n = T(e);
                if (i(e) == ".") {
                    var r = n.data;
                    n = x(e), n.successful && (n.data = r + n.data)
                }
            } else n = x(e);
            return n.successful || (n = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Not a positive number") + " " + n.message,
                data: null
            }), n
        }

        function x(e) {
            var n = e.shift(), r = T(e);
            return r.successful ? r.data = n + r.data : r = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Not a valid fraction"),
                data: null
            }, r
        }

        function T(e) {
            var n = r(e.shift()), i = N(n.charAt(0));
            if (i.successful) {
                var s = 1;
                while (s < n.length && i.successful)i = N(n.charAt(s)), s++;
                i.successful && (i.data = n)
            } else e.unshift(n), i = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Not a valid integer") + " " + i.message,
                data: []
            };
            return i
        }

        function N(e) {
            var n = {successful: !0, message: "", data: null};
            return /[0-9]/.test(e) || (n = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Not a valid digit"),
                data: null
            }), n
        }

        function C(e) {
            var n = e.shift(), r = "", s = {successful: !0, message: "", data: null};
            if (n == '"') {
                var u = !1;
                while (e.length > 0 && s.successful && !u)i(e) == '"' ? (u = !0, e.shift()) : (s = k(e), r += s.data);
                u || (s = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Unterminated string literal"),
                    data: null
                })
            } else e.unshift(n), s = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Invalid quoted string"),
                data: null
            };
            return s.successful = s.successful && u, s.data = r, s
        }

        function k(e) {
            var t = "", n = e.shift();
            return n == "\\" && (t = e.shift()), {successful: !0, message: "", data: n + t}
        }

        function L(e) {
            var n = "", r = e.shift(), s = {successful: !0, message: "", data: null};
            if (r == "/") {
                n = r;
                var u = !1;
                while (e.length > 0 && s.successful && !u)i(e) == "/" ? (n += e.shift(), u = !0) : (s = k(e), n += s.data);
                u || (s = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Unterminated regex literal"),
                    data: null
                })
            } else e.unshift(r), s = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Not a regular expression"),
                data: null
            };
            return s.successful = s.successful && u, s.data = n, s
        }

        function A(e) {
            var n = e.shift(), i = {successful: !0, message: "", data: null};
            return r(n) == "true" || r(n) == "false" ? i = {
                successful: !0,
                message: "",
                data: n === "true"
            } : (e.unshift(n), i = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Not a boolean"),
                data: null
            }), i
        }

        function O(e) {
            var n = [], s = e.shift(), u = {successful: !0, message: "", data: null};
            if (s == "[") {
                r(i(e)).length == 0 && e.shift(), i(e) == "]" ? u = {successful: !0, message: "", data: ""} : u = M(e);
                if (u.successful) {
                    n.push(u.data), r(i(e)).length == 0 && e.shift();
                    while (e.length > 0 && i(e) == "," && u.successful)e.shift(), u = M(e), n.push(u.data), r(i(e)).length == 0 && e.shift();
                    u.data = n, s = e.shift(), r(s).length == 0 && e.shift(), s != "]" && (u = {
                        successful: !1,
                        message: t.generateExceptionMessage(o, a, "Cannot find matching closing ] in group definition") + " " + u.message,
                        data: null
                    })
                } else u = {
                    successful: !1,
                    message: t.generateExceptionMessage(o, a, "Invalid group definition") + " " + u.message,
                    data: null
                }
            } else e.unshift(s), u = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Not a valid group definition"),
                data: null
            };
            return u
        }

        function M(e) {
            var n = {successful: !0, message: "", data: ""}, i = r(e.shift());
            i.length == 0 && (i = e.shift()), n = d(i.charAt(0));
            if (n.successful) {
                var s = 1;
                while (s < i.length && n.successful)n = v(i.charAt(s)), s++;
                n.successful && (n.data = i)
            } else n = {
                successful: !1,
                message: t.generateExceptionMessage(o, a, "Invalid starting character for group name. Can only include A-Z, a-z, and _") + " " + n.message,
                data: null
            };
            return n
        }

        var a = "", f = s({
            str: r(u.replace(/\s*\n\s*/g, "")),
            delimiters: '@()[]=,"\\/-\\.',
            returnDelimiters: !0,
            returnEmptyTokens: !1
        });
        return l(f)
    }

    return {parse: o}
}), function (e, t) {
    typeof define == "function" && define.amd ? define("service/BindingService", ["utils/MapUtils", "service/GroupService", "utils/DOMUtils", "parser/Parser", "service/ConstraintService", "service/ExceptionService"], t) : (typeof e.regulaModules == "undefined" && (e.regulaModules = {}), e.regulaModules.BindingService = t(e.regulaModules.MapUtils, e.regulaModules.GroupService, e.regulaModules.DOMUtils, e.regulaModules.Parser, e.regulaModules.ConstraintService, e.regulaModules.ExceptionService))
}(this, function (e, t, n, r, i, s) {
    function a() {
        o === null && f()
    }

    function f() {
        o = {Default: {}}
    }

    function l() {
        return o
    }

    function c(n, r) {
        if (e.isEmpty(o[r][n])) {
            delete o[r][n];
            if (e.isEmpty(o[r])) {
                delete o[r];
                var i = t.Group[r];
                delete t.Group[r], delete t.ReverseGroup[i], t.deletedGroupIndices.push(i)
            }
        }
    }

    function h(e) {
        var t = {successful: !0, message: "", data: null}, n = typeof e.cloneNode != "undefined" ? e.cloneNode(!1) : e,
            r = null;
        return typeof n.tagName != "undefined" && (r = n.tagName.toLowerCase()), r !== "form" && r !== "select" && r !== "textarea" && r !== "input" ? t = {
            successful: !1,
            message: r + "#" + e.id + " is not an input, select, textarea, or form element! Validation constraints can only be attached to input, select, textarea, or form elements.",
            data: null
        } : r === "input" && e.getAttribute("type") === null && (t = {
                successful: !1,
                message: r + "#" + e.id + " does not have a type attribute.",
                data: null
            }), t
    }

    function p(e) {
        var t = e.element, i;
        t === null ? i = n.getElementsByAttribute(document.body, "*", "data-constraints") : i = [t];
        var s = {successful: !0, message: "", data: null}, o = 0;
        while (o < i.length && s.successful) {
            t = i[o], s = h(t);
            if (s.successful) {
                t.id || (t.id = n.generateRandomId());
                var u = t.getAttribute("data-constraints");
                if (u !== null) {
                    s = r.parse(t, u);
                    if (s.successful && s.data !== null) {
                        var a = s.data, f = 0;
                        while (s.successful && f < a.length) {
                            var l = a[f];
                            s = g(l.element, l.constraintName, l.definedParameters), f++
                        }
                    }
                }
                o++
            }
        }
        return s
    }

    function d(t) {
        function a(e, t, r) {
            for (var i = 0; i < t.length; i++) {
                var s = t[i];
                s.id || (s.id = n.generateRandomId()), e[s.id] || (e[s.id] = []);
                var o = {constraint: r.constraint, params: {}};
                r.value === null && (o.params[r.attribute] = n.getAttributeValueForElement(s, r.attribute)), e[s.id].push(o)
            }
        }

        var r = t.element, s = {successful: !0, message: "", data: null},
            o = [{attribute: "required", value: null, constraint: i.Constraint.HTML5Required}, {
                attribute: "type",
                value: "email",
                constraint: i.Constraint.HTML5Email
            }, {attribute: "type", value: "url", constraint: i.Constraint.HTML5URL}, {
                attribute: "pattern",
                value: null,
                constraint: i.Constraint.HTML5Pattern
            }, {attribute: "maxlength", value: null, constraint: i.Constraint.HTML5MaxLength}, {
                attribute: "min",
                value: null,
                constraint: i.Constraint.HTML5Min
            }, {attribute: "max", value: null, constraint: i.Constraint.HTML5Max}, {
                attribute: "step",
                value: null,
                constraint: i.Constraint.HTML5Step
            }], u = {email: i.Constraint.HTML5Email, url: i.Constraint.HTML5URL}, f = {};
        if (r === null)for (var l = 0; l < o.length; l++) {
            var c = o[l], p = null;
            c.value == null ? p = n.getElementsByAttribute(document.body, "*", c.attribute) : p = n.getElementsByAttribute(document.body, "*", c.attribute, c.value), a(f, p, c)
        } else {
            r.id || (r.id = n.generateRandomId()), s = h(r);
            if (s.successful) {
                f[r.id] = [];
                for (var l = 0; l < o.length; l++) {
                    var c = o[l];
                    if (c.value === null) {
                        if (n.getAttributeValueForElement(r, c.attribute) != null) {
                            var d = {constraint: c.constraint, params: {}};
                            d.params[c.attribute] = n.getAttributeValueForElement(r, c.attribute), f[r.id].push(d)
                        }
                    } else {
                        var v = n.getAttributeValueForElement(r, c.attribute);
                        v != null && typeof u[v] != "undefined" && f[r.id].push({constraint: u[v], params: {}})
                    }
                }
            }
        }
        return e.iterateOverMap(f, function (e, t, n) {
            var r = document.getElementById(e);
            for (var o = 0; o < t.length; o++) {
                var u = t[o];
                s = g(r, i.ReverseConstraint[u.constraint], u.params)
            }
        }), s
    }

    function v(e) {
        var t = {successful: !0, message: "", data: null}, n = e.element, r = e.constraints || [],
            i = n && n.tagName ? n.tagName.toLowerCase() : null;
        if (!n) t = {
            successful: !1,
            message: "regula.bind expects a non-null element attribute in the options argument. " + s.explodeParameters(e),
            data: null
        }; else if (n.nodeType !== 1) t = {
            successful: !1,
            message: "regula.bind: element attribute is expected to be an HTMLElement, but was of unexpected type: " + typeof n + ". " + s.explodeParameters(e),
            data: null
        }; else if (i != "form" && i != "select" && i != "textarea" && i != "input") t = {
            successful: !1,
            message: i + "#" + n.id + " is not an input, select, textarea, or form element! Validation constraints can only be attached to input, select, textarea, or form elements. " + s.explodeParameters(e),
            data: null
        }; else if (r.length > 0) {
            var o = 0;
            while (o < r.length && t.successful)t = m(r[o], e), o++
        } else t = p({element: n});
        return t
    }

    function m(n, r) {
        function u(e, t) {
            var n = {}, r = [];
            for (var i = 0; i < e.length; i++)r.push(e[i]), n[e[i]] = !0;
            for (var s = 0; s < t.length; s++)n[t[s]] || r.push(t[s]);
            return r
        }

        function a(t, n) {
            var r = [];
            for (var i = 0; i < n.length; i++)e.exists(t, n[i]) || r.push(n[i]);
            return r
        }

        function f(n, r, s) {
            var f = o[t.ReverseGroup[t.Group.Default]][n.id][i.ReverseConstraint[r]].groups, l = [];
            s.groups ? l = s.groups : l.push(t.ReverseGroup[t.Group.Default]), e.exists(l, t.ReverseGroup[t.Group.Default]) || l.push(t.ReverseGroup[t.Group.Default]);
            var h = a(l, u(f, l));
            for (var p = 0; p < h.length; p++) {
                var d = h[p];
                delete o[d][n.id][i.ReverseConstraint[r]], c(n.id, d)
            }
        }

        var l = {successful: !0, message: "", data: null}, h = r.element, p = n.overwriteConstraint || !1,
            d = n.overwriteParameters || !1, v = n.constraintType, m = n.params || {}, y = {__size__: 0}, b = m.groups;
        if (typeof v == "undefined") l = {
            successful: !1,
            message: "regula.bind expects a valid constraint type for each constraint in constraints attribute of the options argument. " + s.explodeParameters(r),
            data: null
        }; else if (m && m.groups)if (m.groups instanceof Array) {
            var w = [], E = 0;
            while (E < m.groups.length && l.successful)typeof m["groups"][E] == "string" ? w.push(m.groups[E]) : typeof t.ReverseGroup[m["groups"][E]] != "undefined" ? w.push(t.ReverseGroup[m.groups[E]]) : l = {
                successful: !1,
                message: "Invalid group: " + m.groups[E] + ". " + s.explodeParameters(r),
                data: null
            }, E++;
            l.successful && (m.groups = w)
        } else l = {
            successful: !1,
            message: "The groups parameter must be an array of enums or strings " + s.explodeParameters(r),
            data: null
        };
        if (l.successful) {
            if (!o[t.ReverseGroup[t.Group.Default]][h.id] || !o[t.ReverseGroup[t.Group.Default]][h.id][i.ReverseConstraint[v]]) {
                for (var S in m)m.hasOwnProperty(S) && e.put(y, S, m[S]);
                l = i.verifyConstraintDefinition(h, i.ReverseConstraint[v], y)
            } else if (p) {
                for (var S in m)m.hasOwnProperty(S) && e.put(y, S, m[S]);
                l = i.verifyConstraintDefinition(h, i.ReverseConstraint[v], y), l.successful && f(h, v, m)
            } else {
                var x = o[t.ReverseGroup[t.Group.Default]][h.id][i.ReverseConstraint[v]];
                for (var S in x)x.hasOwnProperty(S) && e.put(y, S, x[S]);
                if (d) {
                    for (var S in m)m.hasOwnProperty(S) && e.put(y, S, m[S]);
                    l = i.verifyConstraintDefinition(h, i.ReverseConstraint[v], y), l.successful && f(h, v, y)
                } else
                    for (var S in m)m.hasOwnProperty(S) && (x[S] || e.put(y, S, m[S]))
            }
            l.successful && (l = g(h, i.ReverseConstraint[v], y))
        }
        return m.groups = b, l
    }

    function g(n, r, u) {
        var a = {successful: !0, message: "", data: null};
        u.groups || e.put(u, "groups", [t.ReverseGroup[t.Group.Default]]);
        var f = u.groups;
        f.indexOf(t.ReverseGroup[t.Group.Default]) === -1 && (f.push(t.ReverseGroup[t.Group.Default]), u.groups = f);
        for (var l = 0; l < f.length; l++) {
            var c = f[l];
            if (!o[c]) {
                var h = -1;
                t.deletedGroupIndices.length > 0 ? h = t.deletedGroupIndices.pop() : h = t.firstCustomGroupIndex++, t.Group[c] = h, t.ReverseGroup[h] = c, o[c] = {}
            }
            o[c][n.id] || (o[c][n.id] = {}), o[c][n.id][r] = u
        }
        if (i.constraintDefinitions[r].html5)if (n.getAttribute("type") !== null && i.constraintDefinitions[r].inputType !== null && n.getAttribute("type") !== i.constraintDefinitions[r].inputType) a = {
            successful: !1,
            message: s.generateExceptionMessage(n, r, "Element type of " + n.getAttribute("type") + " conflicts with type of constraint @" + r + ": " + i.constraintDefinitions[r].inputType),
            data: null
        }; else {
            var p = i.constraintDefinitions[r].attribute, d = i.constraintDefinitions[r].inputType;
            (p !== null && n.getAttribute(p) === null || d !== null && n.getAttribute("type") === null) && y(n, r, u)
        }
        return a
    }

    function y(e, t, n) {
        if (t === i.ReverseConstraint[i.Constraint.HTML5Required]) e.setAttribute("required", "true"); else {
            var r = i.constraintDefinitions[t];
            for (var s = 0; s < r.params.length; s++)e.setAttribute(r.params[s], n[r.params[s]])
        }
        var o = e.getAttribute("class");
        /regula-modified/.test(o) || e.setAttribute("class", o + " regula-modified")
    }

    function b(e) {
        var t = !1;
        for (var n = 0; n < e.elements.length; n++) {
            var r = e.elements[n].id, u = e.constraints || [];
            if (u.length == 0)for (var a in o)o.hasOwnProperty(a) && typeof o[a][r] != "undefined" && (delete o[a][r], a !== "Default" && c(r, a), t = !0); else
                for (var f = 0; f < u.length; f++) {
                    var l = u[f];
                    for (var a in o)o.hasOwnProperty(a) && typeof o[a][r] != "undefined" && (delete o[a][r][i.ReverseConstraint[l]], a !== "Default" && c(r, a), t = !0)
                }
        }
        if (e.elements.length > 0 && !t)throw new s.Exception.IllegalArgumentException("Element with id " + r + " does not have any constraints bound to it. " + s.explodeParameters(e))
    }

    function w(e) {
        var n = e.elementId, r = e.group, s = e.constraint,
            u = typeof o[t.ReverseGroup[t.Group.Default]][n] != "undefined";
        if (u && typeof r != "undefined" && typeof s == "undefined") {
            var a = t.ReverseGroup[r];
            u = typeof a != "undefined" && typeof o[a][n] != "undefined"
        } else if (u && typeof r == "undefined" && typeof s != "undefined") {
            var f = i.ReverseConstraint[s];
            u = typeof f != "undefined" && typeof o[t.ReverseGroup[t.Group.Default]][n][f] != "undefined"
        } else if (u && typeof r != "undefined" && typeof s != "undefined") {
            var a = t.ReverseGroup[r], f = i.ReverseConstraint[s];
            u = typeof a != "undefined" && typeof f != "undefined" && typeof o[a][n] != "undefined" && typeof o[a][n][f] != "undefined"
        }
        return u
    }

    var o = null, u = {};
    return {
        initializeBoundConstraints: a,
        resetBoundConstraints: f,
        getBoundConstraints: l,
        removeElementAndGroupFromBoundConstraintsIfEmpty: c,
        bindAfterParsing: p,
        bindHTML5ValidationConstraints: d,
        bindFromOptions: v,
        unbind: b,
        isBound: w
    }
}), function (e, t) {
    typeof define == "function" && define.amd ? define("regula", ["utils/MapUtils", "utils/DOMUtils", "service/BindingService", "service/ExceptionService", "service/ConstraintService", "service/ValidationService", "service/GroupService"], t) : (e.regula = t(e.regulaModules.MapUtils, e.regulaModules.DOMUtils, e.regulaModules.BindingService, e.regulaModules.ExceptionService, e.regulaModules.ConstraintService, e.regulaModules.ValidationService, e.regulaModules.GroupService), e.regula._modules = e.regulaModules, e.regulaModules = undefined)
}(this, function (e, t, n, r, i, s, o) {
    function f(t) {
        e.iterateOverMap(t, function (e, t, n) {
            typeof u[e] != "undefined" && (u[e] = t)
        })
    }

    function l(e) {
        var i = {successful: !0, message: "", data: null};
        if (typeof e == "undefined" || !e) n.resetBoundConstraints(), u.enableHTML5Validation && t.supportsHTML5Validation() && (i = n.bindHTML5ValidationConstraints({element: null})), i.successful && (i = n.bindAfterParsing({element: null})); else {
            var s = e.elements;
            if (typeof s == "undefined" || !s) u.enableHTML5Validation && t.supportsHTML5Validation() && typeof e.element != "undefined" && e.element !== null && (i = n.bindHTML5ValidationConstraints({element: e.element})), i.successful && (i = n.bindFromOptions(e)); else {
                var o = 0;
                while (i.successful && o < s.length)e.element = s[o], u.enableHTML5Validation && t.supportsHTML5Validation() && (i = n.bindHTML5ValidationConstraints({element: e.element})), i.successful ? (i = n.bindFromOptions(e), i.successful || (i.message = "regula.bind: Element " + (o + 1) + " of " + s.length + " failed: " + i.message)) : i.message = "regula.bind: Failed binding HTML5 validation constraints: Element " + (o + 1) + " of " + s.length + " failed: " + i.message, o++
            }
        }
        if (!i.successful)throw new r.Exception.BindException(i.message)
    }

    function c(e) {
        if (typeof e == "undefined" || !e) n.resetBoundConstraints(); else {
            if (typeof e.elementId == "undefined" && typeof e.elements == "undefined")throw new r.Exception.IllegalArgumentException("regula.unbind requires an elementId attribute, or an elements attribute if options are provided");
            if (!(typeof e.elements == "undefined" || e.elements instanceof Array))throw new r.Exception.IllegalArgumentException("regula.unbind expects the elements attribute to be an array, if it is provided");
            if (typeof e.elements == "undefined") {
                e.elements = [document.getElementById(e.elementId)];
                if (e.elements[0] === null)throw new r.Exception.IllegalArgumentException("Element with id " + e.elementId + " does not have any constraints bound to it. " + r.explodeParameters(e))
            }
            n.unbind(e)
        }
    }

    function h(e) {
        if (typeof e == "undefined")throw new r.Exception.IllegalArgumentException("regula.isBound expects options");
        var t = e.element, i = e.elementId;
        if (typeof t == "undefined" && typeof i == "undefined")throw new r.Exception.IllegalArgumentException("regula.isBound expects at the very least, either an element or elementId attribute");
        if (e.hasOwnProperty("constraint") && typeof e.constraint == "undefined")throw new r.Exception.IllegalArgumentException("Undefined constraint was supplied as a parameter");
        if (e.hasOwnProperty("group") && typeof e.group == "undefined")throw new r.Exception.IllegalArgumentException("Undefined group was supplied as a parameter");
        return typeof t != "undefined" && (i = t.id), n.isBound({
            elementId: i,
            group: e.group,
            constraint: e.constraint
        })
    }

    function p(e) {
        if (!e)throw new r.Exception.IllegalArgumentException("regula.override expects options");
        if (typeof e.constraintType == "undefined")throw new r.Exception.IllegalArgumentException("regula.override expects a valid constraintType attribute in the options argument");
        var t = i.ReverseConstraint[e.constraintType];
        if (typeof t == "undefined")throw new r.Exception.IllegalArgumentException("regula.override: I could not find the specified constraint. Perhaps it has not been defined? Function received: " + r.explodeParameters(e));
        var n = !1, s = i.constraintDefinitions[t].formSpecific;
        i.constraintDefinitions[t].custom && (s = typeof e.formSpecific == "undefined" ? i.constraintDefinitions[t].formSpecific : e.formSpecific);
        var o = i.constraintDefinitions[t].custom && typeof e.async != "undefined" ? e.async : i.constraintDefinitions[t].async,
            u = i.constraintDefinitions[t].custom ? e.params || i.constraintDefinitions[t].params : i.constraintDefinitions[t].params,
            a = e.defaultMessage || i.constraintDefinitions[t].defaultMessage, f = i.constraintDefinitions[t].compound,
            l = e.constraints || i.constraintDefinitions[t].constraints, c = i.constraintDefinitions[t].validator;
        i.constraintDefinitions[t].custom && !i.constraintDefinitions[t].compound && typeof e.validator != "undefined" && (c = e.validator, n = !0);
        if (typeof s != "boolean")throw new r.Exception.IllegalArgumentException("regula.override expects the formSpecific attribute in the options argument to be a boolean");
        if (typeof c != "function")throw new r.Exception.IllegalArgumentException("regula.override expects the validator attribute in the options argument to be a function");
        if (!(u instanceof Array))throw new r.Exception.IllegalArgumentException("regula.override expects the params attribute in the options argument to be an array");
        if (typeof a != "string")throw new r.Exception.IllegalArgumentException("regula.override expects the defaultMessage attribute in the options argument to be a string");
        i.override({
            async: o,
            formSpecific: s,
            name: t,
            constraintType: e.constraintType,
            compound: f,
            params: u,
            composingConstraints: l,
            defaultMessage: a,
            validator: c,
            validatorRedefined: n
        })
    }

    function d(e) {
        if (!e)throw new r.Exception.IllegalArgumentException("regula.custom expects options");
        var t = e.name, n = e.formSpecific || !1, s = e.validator, o = e.params || [], u = e.defaultMessage || "",
            a = typeof e.async == "undefined" ? !1 : e.async;
        if (!t)throw new r.Exception.IllegalArgumentException("regula.custom expects a name attribute in the options argument");
        if (typeof t != "string")throw new r.Exception.IllegalArgumentException("regula.custom expects the name attribute in the options argument to be a string");
        if (t.replace(/\s/g, "").length == 0)throw new r.Exception.IllegalArgumentException("regula.custom cannot accept an empty string for the name attribute in the options argument");
        if (typeof n != "boolean")throw new r.Exception.IllegalArgumentException("regula.custom expects the formSpecific attribute in the options argument to be a boolean");
        if (!s)throw new r.Exception.IllegalArgumentException("regula.custom expects a validator attribute in the options argument");
        if (typeof s != "function")throw new r.Exception.IllegalArgumentException("regula.custom expects the validator attribute in the options argument to be a function");
        if (o.constructor.toString().indexOf("Array") < 0)throw new r.Exception.IllegalArgumentException("regula.custom expects the params attribute in the options argument to be an array");
        if (typeof u != "string")throw new r.Exception.IllegalArgumentException("regula.custom expects the defaultMessage attribute in the options argument to be a string");
        if (i.constraintDefinitions[t])throw new r.Exception.IllegalArgumentException("There is already a constraint called " + t + ". If you wish to override this constraint, use regula.override");
        i.custom({
            async: a,
            name: t,
            formSpecific: n,
            validator: s,
            custom: !0,
            compound: !1,
            params: o,
            defaultMessage: u
        })
    }

    function v(e) {
        if (!e)throw new r.Exception.IllegalArgumentException("regula.compound expects options");
        var t = e.name, n = e.constraints || [], s = e.formSpecific || !1, o = e.defaultMessage || "",
            u = e.params || [], a = typeof e.reportAsSingleViolation == "undefined" ? !1 : e.reportAsSingleViolation;
        if (!t)throw new r.Exception.IllegalArgumentException("regula.compound expects a name attribute in the options argument");
        if (typeof t != "string")throw new r.Exception.IllegalArgumentException("regula.compound expects name to be a string parameter");
        if (u.constructor.toString().indexOf("Array") < 0)throw new r.Exception.IllegalArgumentException("regula.compound expects the params attribute in the options argument to be an array");
        if (n.length == 0)throw new r.Exception.IllegalArgumentException("regula.compound expects an array of composing constraints under a constraints attribute in the options argument");
        if (i.constraintDefinitions[t])throw new r.Exception.IllegalArgumentException("regula.compound: There is already a constraint called " + t + ". If you wish to override this constraint, use regula.override");
        i.compound({name: t, formSpecific: s, params: u, reportAsSingleViolation: a, constraints: n, defaultMessage: o})
    }

    function m(e, t) {
        s.init({
            config: u,
            ReverseConstraint: i.ReverseConstraint,
            constraintDefinitions: i.constraintDefinitions,
            boundConstraints: n.getBoundConstraints()
        });
        var o = [];
        if (typeof e == "undefined" || typeof e.groups == "undefined" || e.groups instanceof Array) {
            if (typeof e != "undefined" && typeof e.groups != "undefined" && e.groups.length == 0)throw new r.Exception.IllegalArgumentException("regula.validate: If a groups attribute is provided, it must not be empty.");
            if (typeof e != "undefined" && e.hasOwnProperty("constraintType") && typeof e.constraintType == "undefined")throw new r.Exception.IllegalArgumentException("regula.validate: If a constraintType attribute is provided, it cannot be undefined.");
            typeof t == "undefined" && typeof e == "function" && (e = {callback: e}), typeof t != "undefined" && (e.callback = t);
            if (typeof e != "undefined" && typeof e.elements != "undefined") {
                if (!(e.elements instanceof Array))throw new r.Exception.IllegalArgumentException("regula.validate: If an elements attribute is provided, it must be an array.");
                if (e.elements.length == 0)throw new r.Exception.IllegalArgumentException("regula.validate: If an elements attribute is provided, it must not be empty.");
                o = s.validate(e)
            } else o = s.validate(e);
            return o
        }
        throw new r.Exception.IllegalArgumentException("regula.validate: If a groups attribute is provided, it must be an array.")
    }

    var u = {validateEmptyFields: !0, enableHTML5Validation: !0, debug: !1}, a = {DMY: "DMY", MDY: "MDY", YMD: "YMD"};
    return n.initializeBoundConstraints(), s.initializePublicValidators(i.constraintDefinitions), {
        configure: f,
        bind: l,
        unbind: c,
        isBound: h,
        validate: m,
        custom: d,
        compound: v,
        override: p,
        Constraint: i.Constraint,
        Group: o.Group,
        DateFormat: a,
        Exception: r.Exception
    }
});
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
    function t(e) {
        return i[e] ? i[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void n.error("Method " + e + " does not exist on jQuery.regula") : i.bind.apply(this, arguments)
    }

    var n = e, i = {
        bind: function (t) {
            return this instanceof e && (t || (t = {}), this.get().length > 0 && n.extend(!0, t, {elements: this.get()})), regula.bind(t), this
        }, unbind: function (t) {
            return this instanceof e && (t || (t = {}), this.get().length > 0 && n.extend(!0, t, {elements: this.get()})), regula.unbind(t), this
        }, isBound: function (t) {
            return this instanceof e && (t || (t = {}), this.get().length > 0 && n.extend(!0, t, {element: this.get(0)})), regula.isBound(t), this
        }, validate: function (t) {
            return this instanceof e && (t || (t = {}), this.get().length > 0 && n.extend(!0, t, {elements: this.get()})), regula.validate(t)
        }, custom: function (e) {
            return regula.custom(e), this
        }, compound: function (e) {
            return regula.compound(e), this
        }, override: function (e) {
            return regula.override(e), this
        }
    };
    i.on = i.bind, i.off = i.unbind, n.fn.regula = t, n.regula = t
});
!function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["../jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function (e) {
    "use strict";
    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target, a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length)return;
            r = n[0]
        }
        var i = this;
        if (i.clk = r, "image" == r.type)if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY; else if ("function" == typeof e.fn.offset) {
            var o = a.offset();
            i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
        } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function () {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }

    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function () {
        if (!i)return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function (t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"), o = i.length, s = [];
            for (a = 0; o > a; a++)i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return s
        }

        function o(a) {
            for (var n = new FormData, i = 0; i < a.length; i++)n.append(a[i].name, a[i].value);
            if (t.extraData) {
                var o = r(t.extraData);
                for (i = 0; i < o.length; i++)o[i] && n.append(o[i][0], o[i][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: u || "POST"
            });
            t.uploadProgress && (s.xhr = function () {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function (e) {
                    var r = 0, a = e.loaded || e.position, n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
                }, !1), r
            }), s.data = null;
            var c = s.beforeSend;
            return s.beforeSend = function (e, r) {
                r.data = t.formData ? t.formData : n, c && c.call(this, e, r)
            }, e.ajax(s)
        }

        function s(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    a("cannot get iframe.contentWindow document: " + r)
                }
                if (t)return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    a("cannot get iframe.contentDocument: " + r), t = e.document
                }
                return t
            }

            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
                    }
                }

                var r = f.attr2("target"), i = f.attr2("action"), o = "multipart/form-data",
                    c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), m.timeout && (j = setTimeout(function () {
                    T = !0, s(D)
                }, m.timeout));
                var l = [];
                try {
                    if (m.extraData)for (var d in m.extraData)m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
                    try {
                        w.submit()
                    } catch (h) {
                        var x = document.createElement("form").submit;
                        x.apply(w)
                    }
                } finally {
                    w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove()
                }
            }

            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x)return x.abort("timeout"), void S.reject(x, "timeout");
                    if (t == k && x)return x.abort("server abort"), void S.reject(x, "error", "server abort");
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T)throw"timeout";
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O)return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function (e) {
                                var t = {"content-type": m.dataType};
                                return t[e.toLowerCase()]
                            }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                            var c = (m.dataType || "").toLowerCase(), l = /(json|script|text)/.test(c);
                            if (l || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText; else if (l) {
                                    var p = M.getElementsByTagName("pre")[0], h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                }
                            } else"xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                            try {
                                E = _(x, c, m)
                            } catch (y) {
                                i = "parsererror", x.error = r = y || i
                            }
                        } catch (y) {
                            a("error caught: ", y), i = "error", x.error = r = y || i
                        }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function () {
                            m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
                        }, 100)
                    }
                }
            }

            var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0], S = e.Deferred();
            if (S.abort = function (e) {
                    x.abort(e)
                }, r)for (l = 0; l < h.length; l++)c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
            if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), g = v[0], x = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function () {
                    },
                    getResponseHeader: function () {
                    },
                    setRequestHeader: function () {
                    },
                    abort: function (t) {
                        var r = "timeout" === t ? "timeout" : "aborted";
                        a("aborting upload... " + r), this.aborted = 1;
                        try {
                            g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                        } catch (n) {
                        }
                        v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
                    }
                }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1)return m.global && e.active--, S.reject(), S;
            if (x.aborted)return S.reject(), S;
            y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
            var D = 1, k = 2, A = e("meta[name=csrf-token]").attr("content"),
                L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
            var E, M, F, O = 50, X = e.parseXML || function (e, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                }, C = e.parseJSON || function (e) {
                    return window.eval("(" + e + ")")
                }, _ = function (t, r, a) {
                var n = t.getResponseHeader("content-type") || "", i = "xml" === r || !r && n.indexOf("xml") >= 0,
                    o = i ? t.responseXML : t.responseText;
                return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
            };
            return S
        }

        if (!this.length)return a("ajaxSubmit: skipping submit process - no element selected"), this;
        var u, c, l, f = this;
        "function" == typeof t ? t = {success: t} : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]), m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var p, h = [], v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function () {
                f.resetForm()
            }), t.clearForm && x.push(function () {
                f.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
            var y = t.success || function () {
                };
            x.push(function (r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments)
            })
        } else t.success && x.push(t.success);
        if (t.success = function (e, r, a) {
                for (var n = t.context || this, i = 0, o = x.length; o > i; i++)x[i].apply(n, [e, r, a || f, f])
            }, t.error) {
            var b = t.error;
            t.error = function (e, r, a) {
                var n = t.context || this;
                b.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function (e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e("input[type=file]:enabled", this).filter(function () {
                return "" !== e(this).val()
            }), w = j.length > 0, S = "multipart/form-data", D = f.attr("enctype") == S || f.attr("encoding") == S,
            k = n.fileapi && n.formdata;
        a("fileAPI :" + k);
        var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
            A = s(v)
        }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
        for (var E = 0; E < h.length; E++)h[E] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function (n) {
        if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
            var i = {s: this.selector, c: this.context};
            return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function () {
                e(i.s, i.c).ajaxForm(n)
            }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
    }, e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function (t, r) {
        var a = [];
        if (0 === this.length)return a;
        var i, o = this[0], s = this.attr("id"), u = t ? o.getElementsByTagName("*") : o.elements;
        if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length)return a;
        var c, l, f, m, d, p, h;
        for (c = 0, p = u.length; p > c; c++)if (d = u[c], f = d.name, f && !d.disabled)if (t && o.clk && "image" == d.type) o.clk == d && (a.push({
            name: f,
            value: e(d).val(),
            type: d.type
        }), a.push({name: f + ".x", value: o.clk_x}, {
            name: f + ".y",
            value: o.clk_y
        })); else if (m = e.fieldValue(d, !0), m && m.constructor == Array)for (r && r.push(d), l = 0, h = m.length; h > l; l++)a.push({
            name: f,
            value: m[l]
        }); else if (n.fileapi && "file" == d.type) {
            r && r.push(d);
            var v = d.files;
            if (v.length)for (l = 0; l < v.length; l++)a.push({
                name: f,
                value: v[l],
                type: d.type
            }); else a.push({name: f, value: "", type: d.type})
        } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({
            name: f,
            value: m,
            type: d.type,
            required: d.required
        }));
        if (!t && o.clk) {
            var g = e(o.clk), x = g[0];
            f = x.name, f && !x.disabled && "image" == x.type && (a.push({
                name: f,
                value: g.val()
            }), a.push({name: f + ".x", value: o.clk_x}, {name: f + ".y", value: o.clk_y}))
        }
        return a
    }, e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function (t) {
        var r = [];
        return this.each(function () {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array)for (var i = 0, o = n.length; o > i; i++)r.push({
                    name: a,
                    value: n[i]
                }); else null !== n && "undefined" != typeof n && r.push({name: this.name, value: n})
            }
        }), e.param(r)
    }, e.fn.fieldValue = function (t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a], o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }, e.fieldValue = function (t, r) {
        var a = t.name, n = t.type, i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex))return null;
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o)return null;
            for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c)return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function (t) {
        return this.each(function () {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function (t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var a = this.type, n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function () {
        return this.each(function () {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function (e) {
        return void 0 === e && (e = !0), this.each(function () {
            this.disabled = !e
        })
    }, e.fn.selected = function (t) {
        return void 0 === t && (t = !0), this.each(function () {
            var r = this.type;
            if ("checkbox" == r || "radio" == r) this.checked = t; else if ("option" == this.tagName.toLowerCase()) {
                var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
});
if ($("html").hasClass("smoothscroll")) {
    function ssc_init() {
        if (document.body) {
            var a = document.body, b = document.documentElement, c = window.innerHeight, d = a.scrollHeight;
            (ssc_root = 0 <= document.compatMode.indexOf("CSS") ? b : a, ssc_activeElement = a, ssc_initdone = !0, top != self) ? ssc_frame = !0 : d > c && (a.offsetHeight <= c || b.offsetHeight <= c) && (ssc_root.style.height = "auto", ssc_root.offsetHeight <= c) && (c = document.createElement("div"), c.style.clear = "both", a.appendChild(c));
            ssc_fixedback || (a.style.backgroundAttachment = "scroll", b.style.backgroundAttachment = "scroll");
            ssc_keyboardsupport && ssc_addEvent("keydown", ssc_keydown)
        }
    }

    function ssc_scrollArray(a, b, c, d) {
        if (d || (d = 1E3), ssc_directionCheck(b, c), ssc_que.push({
                x: b,
                y: c,
                lastX: 0 > b ? .99 : -.99,
                lastY: 0 > c ? .99 : -.99,
                start: +new Date
            }), !ssc_pending) {
            var e = function () {
                for (var n = +new Date, h = 0, m = 0, k = 0; k < ssc_que.length; k++) {
                    var f = ssc_que[k], l = n - f.start, p = l >= ssc_animtime, g = p ? 1 : l / ssc_animtime;
                    ssc_pulseAlgorithm && (g = ssc_pulse(g));
                    l = f.x * g - f.lastX >> 0;
                    g = f.y * g - f.lastY >> 0;
                    h += l;
                    m += g;
                    f.lastX += l;
                    f.lastY += g;
                    p && (ssc_que.splice(k, 1), k--)
                }
                b && (n = a.scrollLeft, a.scrollLeft += h, h && a.scrollLeft === n && (b = 0));
                c && (h = a.scrollTop, a.scrollTop += m, m && a.scrollTop === h && (c = 0));
                b || c || (ssc_que = []);
                ssc_que.length ? setTimeout(e, d / ssc_framerate + 1) : ssc_pending = !1
            };
            setTimeout(e, 0);
            ssc_pending = !0
        }
    }

    function ssc_wheel(a) {
        ssc_initdone || ssc_init();
        var b = a.target, c = ssc_overflowingAncestor(b);
        if (!c || a.defaultPrevented || ssc_isNodeName(ssc_activeElement, "embed") || ssc_isNodeName(b, "embed") && /\.pdf/i.test(b.src))return !0;
        var b = a.wheelDeltaX || 0, d = a.wheelDeltaY || 0;
        b || d || (d = a.wheelDelta || 0);
        1.2 < Math.abs(b) && (b *= ssc_stepsize / 120);
        1.2 < Math.abs(d) && (d *= ssc_stepsize / 120);
        ssc_scrollArray(c, -b, -d);
        a.preventDefault()
    }

    function ssc_keydown(a) {
        var b = a.target, c = a.ctrlKey || a.altKey || a.metaKey;
        if (/input|textarea|embed/i.test(b.nodeName) || b.isContentEditable || a.defaultPrevented || c || ssc_isNodeName(b, "button") && a.keyCode === ssc_key.spacebar)return !0;
        var d;
        d = b = 0;
        var c = ssc_overflowingAncestor(ssc_activeElement), e = c.clientHeight;
        switch (c == document.body && (e = window.innerHeight), a.keyCode) {
            case ssc_key.up:
                d = -ssc_arrowscroll;
                break;
            case ssc_key.down:
                d = ssc_arrowscroll;
                break;
            case ssc_key.spacebar:
                d = a.shiftKey ? 1 : -1;
                d = -d * e * .9;
                break;
            case ssc_key.pageup:
                d = .9 * -e;
                break;
            case ssc_key.pagedown:
                d = .9 * e;
                break;
            case ssc_key.home:
                d = -c.scrollTop;
                break;
            case ssc_key.end:
                e = c.scrollHeight - c.scrollTop - e;
                d = 0 < e ? e + 10 : 0;
                break;
            case ssc_key.left:
                b = -ssc_arrowscroll;
                break;
            case ssc_key.right:
                b = ssc_arrowscroll;
                break;
            default:
                return !0
        }
        ssc_scrollArray(c, b, d);
        a.preventDefault()
    }

    function ssc_mousedown(a) {
        ssc_activeElement = a.target
    }

    function ssc_setCache(a, b) {
        for (var c = a.length; c--;)ssc_cache[ssc_uniqueID(a[c])] = b;
        return b
    }

    function ssc_overflowingAncestor(a) {
        var b = [], c = ssc_root.scrollHeight;
        do {
            var d = ssc_cache[ssc_uniqueID(a)];
            if (d)return ssc_setCache(b, d);
            if (b.push(a), c === a.scrollHeight) {
                if (!ssc_frame || ssc_root.clientHeight + 10 < c)return ssc_setCache(b, document.body)
            } else if (a.clientHeight + 10 < a.scrollHeight && (overflow = getComputedStyle(a, "").getPropertyValue("overflow"), "scroll" === overflow || "auto" === overflow))return ssc_setCache(b, a)
        } while (a = a.parentNode)
    }

    function ssc_addEvent(a, b, c) {
        window.addEventListener(a, b, c || !1)
    }

    function ssc_removeEvent(a, b, c) {
        window.removeEventListener(a, b, c || !1)
    }

    function ssc_isNodeName(a, b) {
        return a.nodeName.toLowerCase() === b.toLowerCase()
    }

    function ssc_directionCheck(a, b) {
        a = 0 < a ? 1 : -1;
        b = 0 < b ? 1 : -1;
        (ssc_direction.x !== a || ssc_direction.y !== b) && (ssc_direction.x = a, ssc_direction.y = b, ssc_que = [])
    }

    function ssc_pulse_(a) {
        var b, c, d;
        return a *= ssc_pulseScale, 1 > a ? b = a - (1 - Math.exp(-a)) : (c = Math.exp(-1), --a, d = 1 - Math.exp(-a), b = c + d * (1 - c)), b * ssc_pulseNormalize
    }

    function ssc_pulse(a) {
        return 1 <= a ? 1 : 0 >= a ? 0 : (1 == ssc_pulseNormalize && (ssc_pulseNormalize /= ssc_pulse_(1)), ssc_pulse_(a))
    }

    if (-1 === navigator.platform.toUpperCase().indexOf("MAC") && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini|BlackBerry)/)) {
        var ssc_framerate = 150, ssc_animtime = 700, ssc_stepsize = 100, ssc_pulseAlgorithm = !0, ssc_pulseScale = 8,
            ssc_pulseNormalize = 1, ssc_keyboardsupport = !0, ssc_arrowscroll = 50, ssc_frame = !1,
            ssc_direction = {x: 0, y: 0}, ssc_initdone = !1, ssc_fixedback = !0, ssc_root = document.documentElement,
            ssc_activeElement, ssc_key = {
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                spacebar: 32,
                pageup: 33,
                pagedown: 34,
                end: 35,
                home: 36
            }, ssc_que = [], ssc_pending = !1, ssc_cache = {};
        setInterval(function () {
            ssc_cache = {}
        }, 1E4);
        var ssc_uniqueID = function () {
            var a = 0;
            return function (b) {
                return b.ssc_uniqueID || (b.ssc_uniqueID = a++)
            }
        }(), ischrome = /chrome/.test(navigator.userAgent.toLowerCase());
        ischrome && (ssc_addEvent("mousedown", ssc_mousedown), ssc_addEvent("mousewheel", ssc_wheel), ssc_addEvent("load", ssc_init))
    }
    ;
}
(function () {
    var t, e, n, i, o, r = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, s = [].indexOf || function (t) {
            for (var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t)return e;
            return -1
        };
    e = function () {
        function t() {
        }

        return t.prototype.extend = function (t, e) {
            var n, i;
            for (n in e)i = e[n], null == t[n] && (t[n] = i);
            return t
        }, t.prototype.isMobile = function (t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function (t, e, n, i) {
            var o;
            return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, e, n, i)) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = t) : o.eventName = t, o
        }, t.prototype.emitEvent = function (t, e) {
            return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function (t, e, n) {
            return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
        }, t.prototype.removeEvent = function (t, e, n) {
            return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
        }, t.prototype.innerHeight = function () {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
    }(), n = this.WeakMap || this.MozWeakMap || (n = function () {
            function t() {
                this.keys = [], this.values = []
            }

            return t.prototype.get = function (t) {
                var e, n, i, o, r;
                for (r = this.keys, e = i = 0, o = r.length; o > i; e = ++i)if (n = r[e], n === t)return this.values[e]
            }, t.prototype.set = function (t, e) {
                var n, i, o, r, s;
                for (s = this.keys, n = o = 0, r = s.length; r > o; n = ++o)if (i = s[n], i === t)return void(this.values[n] = e);
                return this.keys.push(t), this.values.push(e)
            }, t
        }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function () {
            function t() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }

            return t.notSupported = !0, t.prototype.observe = function () {
            }, t
        }()), i = this.getComputedStyle || function (t) {
            return this.getPropertyValue = function (e) {
                var n;
                return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function (t, e) {
                    return e.toUpperCase()
                }), (null != (n = t.currentStyle) ? n[e] : void 0) || null
            }, this
        }, o = /(\-([a-z]){1})/g, this.WOW = function () {
        function o(t) {
            null == t && (t = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.resetAnimation = r(this.resetAnimation, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }

        return o.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, o.prototype.init = function () {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, o.prototype.start = function () {
            var e, n, i, o;
            if (this.stopped = !1, this.boxes = function () {
                    var t, n, i, o;
                    for (i = this.element.querySelectorAll("." + this.config.boxClass), o = [], t = 0, n = i.length; n > t; t++)e = i[t], o.push(e);
                    return o
                }.call(this), this.all = function () {
                    var t, n, i, o;
                    for (i = this.boxes, o = [], t = 0, n = i.length; n > t; t++)e = i[t], o.push(e);
                    return o
                }.call(this), this.boxes.length)if (this.disabled()) this.resetStyle(); else
                for (o = this.boxes, n = 0, i = o.length; i > n; n++)e = o[n], this.applyStyle(e, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function (t) {
                return function (e) {
                    var n, i, o, r, s;
                    for (s = [], n = 0, i = e.length; i > n; n++)r = e[n], s.push(function () {
                        var t, e, n, i;
                        for (n = r.addedNodes || [], i = [], t = 0, e = n.length; e > t; t++)o = n[t], i.push(this.doSync(o));
                        return i
                    }.call(t));
                    return s
                }
            }(this)).observe(document.body, {childList: !0, subtree: !0}) : void 0
        }, o.prototype.stop = function () {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, o.prototype.sync = function () {
            return t.notSupported ? this.doSync(this.element) : void 0
        }, o.prototype.doSync = function (t) {
            var e, n, i, o, r;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), r = [], n = 0, i = o.length; i > n; n++)e = o[n], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), r.push(this.scrolled = !0)) : r.push(void 0);
                return r
            }
        }, o.prototype.show = function (t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, o.prototype.applyStyle = function (t, e) {
            var n, i, o;
            return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function (r) {
                return function () {
                    return r.customStyle(t, e, i, n, o)
                }
            }(this))
        }, o.prototype.animate = function () {
            return "requestAnimationFrame" in window ? function (t) {
                return window.requestAnimationFrame(t)
            } : function (t) {
                return t()
            }
        }(), o.prototype.resetStyle = function () {
            var t, e, n, i, o;
            for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++)t = i[e], o.push(t.style.visibility = "visible");
            return o
        }, o.prototype.resetAnimation = function (t) {
            var e;
            return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0
        }, o.prototype.customStyle = function (t, e, n, i, o) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {animationDuration: n}), i && this.vendorSet(t.style, {animationDelay: i}), o && this.vendorSet(t.style, {animationIterationCount: o}), this.vendorSet(t.style, {animationName: e ? "none" : this.cachedAnimationName(t)}), t
        }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function (t, e) {
            var n, i, o, r;
            i = [];
            for (n in e)o = e[n], t["" + n] = o, i.push(function () {
                var e, i, s, l;
                for (s = this.vendors, l = [], e = 0, i = s.length; i > e; e++)r = s[e], l.push(t["" + r + n.charAt(0).toUpperCase() + n.substr(1)] = o);
                return l
            }.call(this));
            return i
        }, o.prototype.vendorCSS = function (t, e) {
            var n, o, r, s, l, a;
            for (l = i(t), s = l.getPropertyCSSValue(e), r = this.vendors, n = 0, o = r.length; o > n; n++)a = r[n], s = s || l.getPropertyCSSValue("-" + a + "-" + e);
            return s
        }, o.prototype.animationName = function (t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText
            } catch (n) {
                e = i(t).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, o.prototype.cacheAnimationName = function (t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, o.prototype.cachedAnimationName = function (t) {
            return this.animationNameCache.get(t)
        }, o.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, o.prototype.scrollCallback = function () {
            var t;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var e, n, i, o;
                for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++)t = i[e], t && (this.isVisible(t) ? this.show(t) : o.push(t));
                return o
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, o.prototype.offsetTop = function (t) {
            for (var e; void 0 === t.offsetTop;)t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;)e += t.offsetTop;
            return e
        }, o.prototype.isVisible = function (t) {
            var e, n, i, o, r;
            return n = t.getAttribute("data-wow-offset") || this.config.offset, r = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, o = r + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(t), e = i + t.clientHeight, o >= i && e >= r
        }, o.prototype.util = function () {
            return null != this._util ? this._util : this._util = new e
        }, o.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, o
    }()
}).call(this);
!function (a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function (a, b) {
            this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Pipe, a.proxy(function (b, c) {
            this._pipe.push({filter: c.filter, run: a.proxy(c.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    function f(a) {
        if (a.touches !== d)return {x: a.touches[0].pageX, y: a.touches[0].pageY};
        if (a.touches === d) {
            if (a.pageX !== d)return {x: a.pageX, y: a.pageY};
            if (a.pageX === d)return {x: a.clientX, y: a.clientY}
        }
    }

    function g(a) {
        var b, d, e = c.createElement("div"), f = a;
        for (b in f)if (d = f[b], "undefined" != typeof e.style[d])return e = null, [d, b];
        return [!1]
    }

    function h() {
        return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function i() {
        return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function j() {
        return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function k() {
        return "ontouchstart" in b || !!navigator.msMaxTouchPoints
    }

    function l() {
        return b.navigator.msPointerEnabled
    }

    var m, n, o;
    m = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, n = {isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1}, o = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Plugins = {}, e.Pipe = [{
        filter: ["width", "items", "settings"], run: function (a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var a = this._clones, b = this.$stage.children(".cloned");
            (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var a, b, c = this._clones, d = this._items,
                e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
            for (a = 0, b = Math.abs(e / 2); b > a; a++)e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var a, b, c, d = this.settings.rtl ? 1 : -1, e = (this.width() / this.settings.items).toFixed(3), f = 0;
            for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++)a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var b, c, d = (this.width() / this.settings.items).toFixed(3), e = {
                width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                "padding-left": this.settings.stagePadding || "",
                "padding-right": this.settings.stagePadding || ""
            };
            if (this.$stage.css(e), e = {width: this.settings.autoWidth ? "auto" : d - this.settings.margin}, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function (a) {
                    return a > 1
                }).length > 0)for (b = 0, c = this._coordinates.length; c > b; b++)e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e); else this.$stage.children().css(e)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            a.current && this.reset(this.$stage.children().index(a.current))
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
            for (c = 0, d = this._coordinates.length; d > c; c++)a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], e.prototype.initialize = function () {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var b, c, e;
            if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e)return this.preloadAutoWidthImages(b), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, e.prototype.setup = function () {
        var b = this.viewport(), c = this.options.responsive, d = -1, e = null;
        c ? (a.each(c, function (a) {
            b >= a && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function (a, b) {
            return b.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, e.prototype.optionsLogic = function () {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function (b) {
        var c = this.trigger("prepare", {content: b});
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", {content: c.data}), c.data
    }, e.prototype.update = function () {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
            return this[a]
        }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}
    }, e.prototype.width = function (a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function () {
        if (0 === this._items.length)return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, e.prototype.eventsCall = function () {
        this.e._onDragStart = a.proxy(function (a) {
            this.onDragStart(a)
        }, this), this.e._onDragMove = a.proxy(function (a) {
            this.onDragMove(a)
        }, this), this.e._onDragEnd = a.proxy(function (a) {
            this.onDragEnd(a)
        }, this), this.e._onResize = a.proxy(function (a) {
            this.onResize(a)
        }, this), this.e._transitionEnd = a.proxy(function (a) {
            this.transitionEnd(a)
        }, this), this.e._preventClick = a.proxy(function (a) {
            this.preventClick(a)
        }, this)
    }, e.prototype.onThrottledResize = function () {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function () {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, e.prototype.eventsRouter = function (a) {
        var b = a.type;
        "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
    }, e.prototype.internalEvents = function () {
        var c = (k(), l());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function (a) {
            this.eventsRouter(a)
        }, this)), this.$stage.on("dragstart", function () {
            return !1
        }), this.$stage.get(0).onselectstart = function () {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function (a) {
            this.eventsRouter(a)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
    }, e.prototype.onDragStart = function (d) {
        var e, g, h, i;
        if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch)return !1;
        if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0; else if (this.state.inMotion && !this.support3d)return this.state.inMotion = !1, !1;
        this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function (a) {
            this.eventsRouter(a)
        }, this))
    }, e.prototype.onDragMove = function (a) {
        var c, e, g, h, i, j;
        this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, e.prototype.onDragEnd = function (b) {
        var d, e, f;
        if (this.state.isTouch) {
            if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0)return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents")
        }
    }, e.prototype.removeClick = function (c) {
        this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function () {
            a(c).off("click.preventClick")
        }, 300)
    }, e.prototype.preventClick = function (b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
    }, e.prototype.getTransformProperty = function () {
        var a, c;
        return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
    }, e.prototype.closest = function (b) {
        var c = -1, d = 30, e = this.width(), f = this.coordinates();
        return this.settings.freeDrag || a.each(f, a.proxy(function (a, g) {
            return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c
        }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
    }, e.prototype.animate = function (b) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({left: b + "px"}) : this.$stage.animate({left: b}, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function () {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, e.prototype.current = function (a) {
        if (a === d)return this._current;
        if (0 === this._items.length)return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {property: {name: "position", value: a}});
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function (a) {
        this._invalidated[a] = !0
    }, e.prototype.reset = function (a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function (b, c) {
        var e = c ? this._items.length : this._items.length + this._clones.length;
        return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
    }, e.prototype.relative = function (a) {
        return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function (a) {
        var b, c, d, e = 0, f = this.settings;
        if (a)return this._items.length - 1;
        if (!f.loop && f.center) b = this._items.length - 1; else if (f.loop || f.center)if (f.loop || f.center) b = this._items.length + f.items; else {
            if (!f.autoWidth && !f.merge)throw"Can not detect maximum absolute position.";
            for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width(); (d = this.coordinates(e)) && !(d * revert >= c);)b = ++e
        } else b = this._items.length - f.items;
        return b
    }, e.prototype.minimum = function (a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function (a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function (a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function (b) {
        var c = this._clones.length / 2, e = c + this._items.length, f = function (a) {
            return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
        };
        return b === d ? a.map(this._clones, function (a, b) {
            return f(b)
        }) : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function (a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function (b) {
        var c = null;
        return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
    }, e.prototype.duration = function (a, b, c) {
        return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function (c, d) {
        if (this.settings.loop) {
            var e = c - this.relative(this.current()), f = this.current(), g = this.current(), h = this.current() + e,
                i = 0 > g - h ? !0 : !1, j = this._clones.length + this._items.length;
            h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function () {
                this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
    }, e.prototype.next = function (a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function (a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.transitionEnd = function (a) {
        return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    }, e.prototype.viewport = function () {
        var d;
        if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width(); else if (b.innerWidth) d = b.innerWidth; else {
            if (!c.documentElement || !c.documentElement.clientWidth)throw"Can not detect viewport width.";
            d = c.documentElement.clientWidth
        }
        return d
    }, e.prototype.replace = function (b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
            return 1 === this.nodeType
        }).each(a.proxy(function (a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function (a, b) {
        b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", {
            content: a,
            position: b
        }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: a,
            position: b
        })
    }, e.prototype.remove = function (a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.addTriggerableEvents = function () {
        var b = a.proxy(function (b, c) {
            return a.proxy(function (a) {
                a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
            }, this)
        }, this);
        a.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, a.proxy(function (a, c) {
            this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
        }, this))
    }, e.prototype.watchVisibility = function () {
        function c(a) {
            return a.offsetWidth > 0 && a.offsetHeight > 0
        }

        function d() {
            c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
        }

        c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
    }, e.prototype.preloadAutoWidthImages = function (b) {
        var c, d, e, f;
        c = 0, d = this, b.each(function (g, h) {
            e = a(h), f = new Image, f.onload = function () {
                c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
            }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
        })
    }, e.prototype.destroy = function () {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var d in this._plugins)this._plugins[d].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {
        }, this.$stage.off("dragstart", function () {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, e.prototype.op = function (a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case"<":
                return d ? a > c : c > a;
            case">":
                return d ? c > a : a > c;
            case">=":
                return d ? c >= a : a >= c;
            case"<=":
                return d ? a >= c : c >= a
        }
    }, e.prototype.on = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function (a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function (b, c, d) {
        var e = {item: {count: this._items.length, index: this.current()}},
            f = a.camelCase(a.grep(["on", b, d], function (a) {
                return a
            }).join("-").toLowerCase()),
            g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({relatedTarget: this}, e, c));
        return this._supress[b] || (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(g)
        }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
    }, e.prototype.suppress = function (b) {
        a.each(b, a.proxy(function (a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function (b) {
        a.each(b, a.proxy(function (a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.browserSupport = function () {
        if (this.support3d = j(), this.support3d) {
            this.transformVendor = i();
            var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = b.orientation
    }, a.fn.owlCarousel = function (b) {
        return this.each(function () {
            a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document), function (a, b) {
    var c = function (b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": a.proxy(function (b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function (a, b) {
                    this.load(b)
                }, this); e++ < d;)this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    c.Defaults = {lazyLoad: !1}, c.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
            var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
                f.css("opacity", 1), this._core.trigger("loaded", {element: f, url: g}, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
                f.css({"background-image": "url(" + g + ")", opacity: "1"}), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, c.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers)this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))"function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document), function (a) {
    var b = function (c) {
        this._core = c, this._handlers = {
            "initialized.owl.carousel": a.proxy(function () {
                this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this), "loaded.owl.lazy": a.proxy(function (a) {
                this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    b.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, b.prototype.update = function () {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, b.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers)this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))"function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document), function (a, b, c) {
    var d = function (b) {
        this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": a.proxy(function (a) {
                this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
            }, this), "refresh.owl.carousel changed.owl.carousel": a.proxy(function () {
                this._playing && this.stop()
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                var c = a(b.content).find(".owl-video");
                c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
            }, this)
        }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
            this.play(a)
        }, this))
    };
    d.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, d.prototype.fetch = function (a, b) {
        var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube", d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight, g = a.attr("href");
        if (!g)throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube"; else {
            if (!(d[3].indexOf("vimeo") > -1))throw new Error("Video URL not supported.");
            c = "vimeo"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, d.prototype.thumbnail = function (b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function (a) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
            };
        return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
                type: "GET",
                url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (a) {
                    f = a[0].thumbnail_large, l(f)
                }
            }))
    }, d.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, d.prototype.play = function (b) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var c, d, e = a(b.target || b.srcElement), f = e.closest("." + this._core.settings.itemClass),
            g = this._videos[f.attr("data-video")], h = g.width || "100%", i = g.height || this._core.$stage.height();
        "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
    }, d.prototype.isInFullScreen = function () {
        var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0
    }, d.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers)this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))"function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function (a) {
                "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                this.swapping = "translated" == a.type
            }, this), "translate.owl.carousel": a.proxy(function () {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {animateOut: !1, animateIn: !1}, e.prototype.swap = function () {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({left: b + "px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
        }
    }, e.prototype.clear = function (b) {
        a(b.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers)this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))"function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c) {
    var d = function (b) {
        this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": a.proxy(function () {
                this.autoplay()
            }, this), "play.owl.autoplay": a.proxy(function (a, b, c) {
                this.play(b, c)
            }, this), "stop.owl.autoplay": a.proxy(function () {
                this.stop()
            }, this), "mouseover.owl.autoplay": a.proxy(function () {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this), "mouseleave.owl.autoplay": a.proxy(function () {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    d.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, d.prototype.autoplay = function () {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function () {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
    }, d.prototype.play = function () {
        return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, d.prototype.stop = function () {
        b.clearInterval(this.interval)
    }, d.prototype.pause = function () {
        b.clearInterval(this.interval)
    }, d.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this.interval);
        for (a in this.handlers)this.core.$element.off(a, this.handlers[a]);
        for (c in Object.getOwnPropertyNames(this))"function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document), function (a) {
    "use strict";
    var b = function (c) {
        this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function (b) {
                this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this), "add.owl.carousel": a.proxy(function (b) {
                this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this), "remove.owl.carousel prepared.owl.carousel": a.proxy(function (a) {
                this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this), "change.owl.carousel": a.proxy(function (a) {
                if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var b = this._core.current(), c = this._core.maximum(), d = this._core.minimum();
                    a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
                }
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                "position" == a.property.name && this.draw()
            }, this), "refreshed.owl.carousel": a.proxy(function () {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    b.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, b.prototype.initialize = function () {
        var b, c, d = this._core.settings;
        d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function (b) {
            var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(c, d.dotsSpeed)
        }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function () {
            this.prev(d.navSpeed)
        }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function () {
            this.next(d.navSpeed)
        }, this));
        for (c in this._overrides)this._core[c] = a.proxy(this[c], this)
    }, b.prototype.destroy = function () {
        var a, b, c, d;
        for (a in this._handlers)this.$element.off(a, this._handlers[a]);
        for (b in this._controls)this._controls[b].remove();
        for (d in this.overides)this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))"function" != typeof this[c] && (this[c] = null)
    }, b.prototype.update = function () {
        var a, b, c, d = this._core.settings, e = this._core.clones().length / 2, f = e + this._core.items().length,
            g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
        if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({
            start: a - e,
            end: a - e + g - 1
        }), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
    }, b.prototype.draw = function () {
        var b, c, d = "", e = this._core.settings,
            f = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
            if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
                for (c = 0; c < this._controls.$indicators.children().length; c++)d += this._templates[this._core.relative(c)];
                this._controls.$indicators.html(d)
            } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(e.dots)
    }, b.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
        }
    }, b.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, function (a) {
            return a.start <= b && a.end >= b
        }).pop()
    }, b.prototype.getPosition = function (b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, b.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, b.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, b.prototype.to = function (b, c, d) {
        var e;
        d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document), function (a, b) {
    "use strict";
    var c = function (d) {
        this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function () {
                "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[c] = b.content
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function () {
            var a = b.location.hash.substring(1), c = this._core.$stage.children(),
                d = this._hashes[a] && c.index(this._hashes[a]) || 0;
            return a ? void this._core.to(d, !1, !0) : !1
        }, this))
    };
    c.Defaults = {URLhashListener: !1}, c.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers)this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))"function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);
!function (a) {
    function b() {
    }

    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function (b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }

        function e(b, c) {
            a.fn[b] = function (e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h], k = a.data(j, b);
                        if (k)if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                            var l = k[e].apply(k, g);
                            if (void 0 !== l)return l
                        } else f("no such method '" + e + "' for " + b + " instance"); else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }

        if (a) {
            var f = "undefined" == typeof console ? b : function (a) {
                console.error(a)
            };
            return a.bridget = function (a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }

    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window), function (a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }

    var c = document.documentElement, d = function () {
    };
    c.addEventListener ? d = function (a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function (a, c, d) {
            a[c + d] = d.handleEvent ? function () {
                var c = b(a);
                d.handleEvent.call(d, c)
            } : function () {
                var c = b(a);
                d.call(a, c)
            }, a.attachEvent("on" + c, a[c + d])
        });
    var e = function () {
    };
    c.removeEventListener ? e = function (a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function (a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch (d) {
                a[b + c] = void 0
            }
        });
    var f = {bind: d, unbind: e};
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window), function () {
    "use strict";
    function a() {
    }

    function b(a, b) {
        for (var c = a.length; c--;)if (a[c].listener === b)return c;
        return -1
    }

    function c(a) {
        return function () {
            return this[a].apply(this, arguments)
        }
    }

    var d = a.prototype, e = this, f = e.EventEmitter;
    d.getListeners = function (a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d)d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function (a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1)c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function (a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function (a, c) {
        var d, e = this.getListenersAsObject(a), f = "object" == typeof c;
        for (d in e)e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {listener: c, once: !1});
        return this
    }, d.on = c("addListener"), d.addOnceListener = function (a, b) {
        return this.addListener(a, {listener: b, once: !0})
    }, d.once = c("addOnceListener"), d.defineEvent = function (a) {
        return this.getListeners(a), this
    }, d.defineEvents = function (a) {
        for (var b = 0; b < a.length; b += 1)this.defineEvent(a[b]);
        return this
    }, d.removeListener = function (a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f)f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function (a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function (a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function (a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener, g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)for (d = c.length; d--;)f.call(this, b, c[d]); else
            for (d in b)b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function (a) {
        var b, c = typeof a, d = this._getEvents();
        if ("string" === c) delete d[a]; else if (a instanceof RegExp)for (b in d)d.hasOwnProperty(b) && a.test(b) && delete d[b]; else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)if (g.hasOwnProperty(e))for (d = g[e].length; d--;)c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function (a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function (a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function () {
        return this._events || (this._events = {})
    }, a.noConflict = function () {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this), function (a) {
    function b(a) {
        if (a) {
            if ("string" == typeof d[a])return a;
            a = a.charAt(0).toUpperCase() + a.slice(1);
            for (var b, e = 0, f = c.length; f > e; e++)if (b = c[e] + a, "string" == typeof d[b])return b
        }
    }

    var c = "Webkit Moz ms Ms O".split(" "), d = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
        return b
    }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
}(window), function (a, b) {
    function c(a) {
        var b = parseFloat(a), c = -1 === a.indexOf("%") && !isNaN(b);
        return c && b
    }

    function d() {
    }

    function e() {
        for (var a = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, b = 0, c = h.length; c > b; b++) {
            var d = h[b];
            a[d] = 0
        }
        return a
    }

    function f(b) {
        function d() {
            if (!m) {
                m = !0;
                var d = a.getComputedStyle;
                if (j = function () {
                        var a = d ? function (a) {
                            return d(a, null)
                        } : function (a) {
                            return a.currentStyle
                        };
                        return function (b) {
                            var c = a(b);
                            return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                        }
                    }(), k = b("boxSizing")) {
                    var e = document.createElement("div");
                    e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                    var f = document.body || document.documentElement;
                    f.appendChild(e);
                    var h = j(e);
                    l = 200 === c(h.width), f.removeChild(e)
                }
            }
        }

        function f(a) {
            if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                var b = j(a);
                if ("none" === b.display)return e();
                var f = {};
                f.width = a.offsetWidth, f.height = a.offsetHeight;
                for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
                    var o = h[m], p = b[o];
                    p = i(a, p);
                    var q = parseFloat(p);
                    f[o] = isNaN(q) ? 0 : q
                }
                var r = f.paddingLeft + f.paddingRight, s = f.paddingTop + f.paddingBottom,
                    t = f.marginLeft + f.marginRight, u = f.marginTop + f.marginBottom,
                    v = f.borderLeftWidth + f.borderRightWidth, w = f.borderTopWidth + f.borderBottomWidth, x = g && l,
                    y = c(b.width);
                y !== !1 && (f.width = y + (x ? 0 : r + v));
                var z = c(b.height);
                return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
            }
        }

        function i(b, c) {
            if (a.getComputedStyle || -1 === c.indexOf("%"))return c;
            var d = b.style, e = d.left, f = b.runtimeStyle, g = f && f.left;
            return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
        }

        var j, k, l, m = !1;
        return f
    }

    var g = "undefined" == typeof console ? d : function (a) {
            console.error(a)
        },
        h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
}(window), function (a) {
    function b(a) {
        "function" == typeof a && (b.isReady ? a() : g.push(a))
    }

    function c(a) {
        var c = "readystatechange" === a.type && "complete" !== f.readyState;
        b.isReady || c || d()
    }

    function d() {
        b.isReady = !0;
        for (var a = 0, c = g.length; c > a; a++) {
            var d = g[a];
            d()
        }
    }

    function e(e) {
        return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
    }

    var f = a.document, g = [];
    b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
}(window), function (a) {
    "use strict";
    function b(a, b) {
        return a[g](b)
    }

    function c(a) {
        if (!a.parentNode) {
            var b = document.createDocumentFragment();
            b.appendChild(a)
        }
    }

    function d(a, b) {
        c(a);
        for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)if (d[e] === a)return !0;
        return !1
    }

    function e(a, d) {
        return c(a), b(a, d)
    }

    var f, g = function () {
        if (a.matches)return "matches";
        if (a.matchesSelector)return "matchesSelector";
        for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
            var e = b[c], f = e + "MatchesSelector";
            if (a[f])return f
        }
    }();
    if (g) {
        var h = document.createElement("div"), i = b(h, "div");
        f = i ? b : e
    } else f = d;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
        return f
    }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
}(Element.prototype), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (c, d) {
        return b(a, c, d)
    }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
}(window, function (a, b, c) {
    var d = {};
    d.extend = function (a, b) {
        for (var c in b)a[c] = b[c];
        return a
    }, d.modulo = function (a, b) {
        return (a % b + b) % b
    };
    var e = Object.prototype.toString;
    d.isArray = function (a) {
        return "[object Array]" == e.call(a)
    }, d.makeArray = function (a) {
        var b = [];
        if (d.isArray(a)) b = a; else if (a && "number" == typeof a.length)for (var c = 0, e = a.length; e > c; c++)b.push(a[c]); else b.push(a);
        return b
    }, d.indexOf = Array.prototype.indexOf ? function (a, b) {
        return a.indexOf(b)
    } : function (a, b) {
        for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
        return -1
    }, d.removeFrom = function (a, b) {
        var c = d.indexOf(a, b);
        -1 != c && a.splice(c, 1)
    }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (a) {
        return a instanceof HTMLElement
    } : function (a) {
        return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
    }, d.setText = function () {
        function a(a, c) {
            b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
        }

        var b;
        return a
    }(), d.getParent = function (a, b) {
        for (; a != document.body;)if (a = a.parentNode, c(a, b))return a
    }, d.getQueryElement = function (a) {
        return "string" == typeof a ? document.querySelector(a) : a
    }, d.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, d.filterFindElements = function (a, b) {
        a = d.makeArray(a);
        for (var e = [], f = 0, g = a.length; g > f; f++) {
            var h = a[f];
            if (d.isElement(h))if (b) {
                c(h, b) && e.push(h);
                for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++)e.push(i[j])
            } else e.push(h)
        }
        return e
    }, d.debounceMethod = function (a, b, c) {
        var d = a.prototype[b], e = b + "Timeout";
        a.prototype[b] = function () {
            var a = this[e];
            a && clearTimeout(a);
            var b = arguments, f = this;
            this[e] = setTimeout(function () {
                d.apply(f, b), delete f[e]
            }, c || 100)
        }
    }, d.toDashed = function (a) {
        return a.replace(/(.)([A-Z])/g, function (a, b, c) {
            return b + "-" + c
        }).toLowerCase()
    };
    var f = a.console;
    return d.htmlInit = function (c, e) {
        b(function () {
            for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                var k, l = g[i], m = l.getAttribute(h);
                try {
                    k = m && JSON.parse(m)
                } catch (n) {
                    f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                    continue
                }
                var o = new c(l, k), p = a.jQuery;
                p && p.data(l, e, o)
            }
        })
    }, d
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (c, d, e, f) {
        return b(a, c, d, e, f)
    }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
}(window, function (a, b, c, d, e) {
    "use strict";
    function f(a) {
        for (var b in a)return !1;
        return b = null, !0
    }

    function g(a, b) {
        a && (this.element = a, this.layout = b, this.position = {x: 0, y: 0}, this._create())
    }

    function h(a) {
        return a.replace(/([A-Z])/g, function (a) {
            return "-" + a.toLowerCase()
        })
    }

    var i = a.getComputedStyle, j = i ? function (a) {
        return i(a, null)
    } : function (a) {
        return a.currentStyle
    }, k = d("transition"), l = d("transform"), m = k && l, n = !!d("perspective"), o = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend"
    }[k], p = ["transform", "transition", "transitionDuration", "transitionProperty"], q = function () {
        for (var a = {}, b = 0, c = p.length; c > b; b++) {
            var e = p[b], f = d(e);
            f && f !== e && (a[e] = f)
        }
        return a
    }();
    e.extend(g.prototype, b.prototype), g.prototype._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, g.prototype.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, g.prototype.getSize = function () {
        this.size = c(this.element)
    }, g.prototype.css = function (a) {
        var b = this.element.style;
        for (var c in a) {
            var d = q[c] || c;
            b[d] = a[c]
        }
    }, g.prototype.getPosition = function () {
        var a = j(this.element), b = this.layout.options, c = b.isOriginLeft, d = b.isOriginTop,
            e = a[c ? "left" : "right"], f = a[d ? "top" : "bottom"], g = this.layout.size,
            h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
            i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
        h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
    }, g.prototype.layoutPosition = function () {
        var a = this.layout.size, b = this.layout.options, c = {}, d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
            e = b.isOriginLeft ? "left" : "right", f = b.isOriginLeft ? "right" : "left", g = this.position.x + a[d];
        c[e] = this.getXValue(g), c[f] = "";
        var h = b.isOriginTop ? "paddingTop" : "paddingBottom", i = b.isOriginTop ? "top" : "bottom",
            j = b.isOriginTop ? "bottom" : "top", k = this.position.y + a[h];
        c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
    }, g.prototype.getXValue = function (a) {
        var b = this.layout.options;
        return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
    }, g.prototype.getYValue = function (a) {
        var b = this.layout.options;
        return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
    }, g.prototype._transitionTo = function (a, b) {
        this.getPosition();
        var c = this.position.x, d = this.position.y, e = parseInt(a, 10), f = parseInt(b, 10),
            g = e === this.position.x && f === this.position.y;
        if (this.setPosition(a, b), g && !this.isTransitioning)return void this.layoutPosition();
        var h = a - c, i = b - d, j = {};
        j.transform = this.getTranslate(h, i), this.transition({
            to: j,
            onTransitionEnd: {transform: this.layoutPosition},
            isCleaning: !0
        })
    }, g.prototype.getTranslate = function (a, b) {
        var c = this.layout.options;
        return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
    }, g.prototype.goTo = function (a, b) {
        this.setPosition(a, b), this.layoutPosition()
    }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function (a, b) {
        this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
    }, g.prototype._nonTransition = function (a) {
        this.css(a.to), a.isCleaning && this._removeStyles(a.to);
        for (var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)
    }, g.prototype._transition = function (a) {
        if (!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);
        var b = this._transn;
        for (var c in a.onTransitionEnd)b.onEnd[c] = a.onTransitionEnd[c];
        for (c in a.to)b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
        if (a.from) {
            this.css(a.from);
            var d = this.element.offsetHeight;
            d = null
        }
        this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
    };
    var r = "opacity," + h(q.transform || "transform");
    g.prototype.enableTransition = function () {
        this.isTransitioning || (this.css({
            transitionProperty: r,
            transitionDuration: this.layout.options.transitionDuration
        }), this.element.addEventListener(o, this, !1))
    }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function (a) {
        this.ontransitionend(a)
    }, g.prototype.onotransitionend = function (a) {
        this.ontransitionend(a)
    };
    var s = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
    g.prototype.ontransitionend = function (a) {
        if (a.target === this.element) {
            var b = this._transn, c = s[a.propertyName] || a.propertyName;
            if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                var d = b.onEnd[c];
                d.call(this), delete b.onEnd[c]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, g.prototype.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
    }, g.prototype._removeStyles = function (a) {
        var b = {};
        for (var c in a)b[c] = "";
        this.css(b)
    };
    var t = {transitionProperty: "", transitionDuration: ""};
    return g.prototype.removeTransitionStyles = function () {
        this.css(t)
    }, g.prototype.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, g.prototype.remove = function () {
        if (!k || !parseFloat(this.layout.options.transitionDuration))return void this.removeElem();
        var a = this;
        this.once("transitionEnd", function () {
            a.removeElem()
        }), this.hide()
    }, g.prototype.reveal = function () {
        delete this.isHidden, this.css({display: ""});
        var a = this.layout.options, b = {}, c = this.getHideRevealTransitionEndProperty("visibleStyle");
        b[c] = this.onRevealTransitionEnd, this.transition({
            from: a.hiddenStyle,
            to: a.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }, g.prototype.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, g.prototype.getHideRevealTransitionEndProperty = function (a) {
        var b = this.layout.options[a];
        if (b.opacity)return "opacity";
        for (var c in b)return c
    }, g.prototype.hide = function () {
        this.isHidden = !0, this.css({display: ""});
        var a = this.layout.options, b = {}, c = this.getHideRevealTransitionEndProperty("hiddenStyle");
        b[c] = this.onHideTransitionEnd, this.transition({
            from: a.visibleStyle,
            to: a.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }, g.prototype.onHideTransitionEnd = function () {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, g.prototype.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, g
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (c, d, e, f, g) {
        return b(a, c, d, e, f, g)
    }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
}(window, function (a, b, c, d, e, f) {
    "use strict";
    function g(a, b) {
        var c = e.getQueryElement(a);
        if (!c)return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
        this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
        var d = ++k;
        this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
    }

    var h = a.console, i = a.jQuery, j = function () {
    }, k = 0, l = {};
    return g.namespace = "outlayer", g.Item = f, g.defaults = {
        containerStyle: {position: "relative"},
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
        visibleStyle: {opacity: 1, transform: "scale(1)"}
    }, e.extend(g.prototype, c.prototype), g.prototype.option = function (a) {
        e.extend(this.options, a)
    }, g.prototype._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
    }, g.prototype.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, g.prototype._itemize = function (a) {
        for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
            var g = b[e], h = new c(g, this);
            d.push(h)
        }
        return d
    }, g.prototype._filterFindItemElements = function (a) {
        return e.filterFindElements(a, this.options.itemSelector)
    }, g.prototype.getItemElements = function () {
        for (var a = [], b = 0, c = this.items.length; c > b; b++)a.push(this.items[b].element);
        return a
    }, g.prototype.layout = function () {
        this._resetLayout(), this._manageStamps();
        var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, a), this._isLayoutInited = !0
    }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function () {
        this.getSize()
    }, g.prototype.getSize = function () {
        this.size = d(this.element)
    }, g.prototype._getMeasurement = function (a, b) {
        var c, f = this.options[a];
        f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
    }, g.prototype.layoutItems = function (a, b) {
        a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
    }, g.prototype._getItemsForLayout = function (a) {
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            var e = a[c];
            e.isIgnored || b.push(e)
        }
        return b
    }, g.prototype._layoutItems = function (a, b) {
        if (this._emitCompleteOnItems("layout", a), a && a.length) {
            for (var c = [], d = 0, e = a.length; e > d; d++) {
                var f = a[d], g = this._getItemLayoutPosition(f);
                g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
            }
            this._processLayoutQueue(c)
        }
    }, g.prototype._getItemLayoutPosition = function () {
        return {x: 0, y: 0}
    }, g.prototype._processLayoutQueue = function (a) {
        for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            this._positionItem(d.item, d.x, d.y, d.isInstant)
        }
    }, g.prototype._positionItem = function (a, b, c, d) {
        d ? a.goTo(b, c) : a.moveTo(b, c)
    }, g.prototype._postLayout = function () {
        this.resizeContainer()
    }, g.prototype.resizeContainer = function () {
        if (this.options.isResizingContainer) {
            var a = this._getContainerSize();
            a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
        }
    }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function (a, b) {
        if (void 0 !== a) {
            var c = this.size;
            c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
        }
    }, g.prototype._emitCompleteOnItems = function (a, b) {
        function c() {
            e.dispatchEvent(a + "Complete", null, [b])
        }

        function d() {
            g++, g === f && c()
        }

        var e = this, f = b.length;
        if (!b || !f)return void c();
        for (var g = 0, h = 0, i = b.length; i > h; h++) {
            var j = b[h];
            j.once(a, d)
        }
    }, g.prototype.dispatchEvent = function (a, b, c) {
        var d = b ? [b].concat(c) : c;
        if (this.emitEvent(a, d), i)if (this.$element = this.$element || i(this.element), b) {
            var e = i.Event(b);
            e.type = a, this.$element.trigger(e, c)
        } else this.$element.trigger(a, c)
    }, g.prototype.ignore = function (a) {
        var b = this.getItem(a);
        b && (b.isIgnored = !0)
    }, g.prototype.unignore = function (a) {
        var b = this.getItem(a);
        b && delete b.isIgnored
    }, g.prototype.stamp = function (a) {
        if (a = this._find(a)) {
            this.stamps = this.stamps.concat(a);
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this.ignore(d)
            }
        }
    }, g.prototype.unstamp = function (a) {
        if (a = this._find(a))for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            e.removeFrom(this.stamps, d), this.unignore(d)
        }
    }, g.prototype._find = function (a) {
        return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
    }, g.prototype._manageStamps = function () {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var a = 0, b = this.stamps.length; b > a; a++) {
                var c = this.stamps[a];
                this._manageStamp(c)
            }
        }
    }, g.prototype._getBoundingRect = function () {
        var a = this.element.getBoundingClientRect(), b = this.size;
        this._boundingRect = {
            left: a.left + b.paddingLeft + b.borderLeftWidth,
            top: a.top + b.paddingTop + b.borderTopWidth,
            right: a.right - (b.paddingRight + b.borderRightWidth),
            bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
        }
    }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function (a) {
        var b = a.getBoundingClientRect(), c = this._boundingRect, e = d(a), f = {
            left: b.left - c.left - e.marginLeft,
            top: b.top - c.top - e.marginTop,
            right: c.right - b.right - e.marginRight,
            bottom: c.bottom - b.bottom - e.marginBottom
        };
        return f
    }, g.prototype.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, g.prototype.bindResize = function () {
        this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
    }, g.prototype.unbindResize = function () {
        this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
    }, g.prototype.onresize = function () {
        function a() {
            b.resize(), delete b.resizeTimeout
        }

        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var b = this;
        this.resizeTimeout = setTimeout(a, 100)
    }, g.prototype.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, g.prototype.needsResizeLayout = function () {
        var a = d(this.element), b = this.size && a;
        return b && a.innerWidth !== this.size.innerWidth
    }, g.prototype.addItems = function (a) {
        var b = this._itemize(a);
        return b.length && (this.items = this.items.concat(b)), b
    }, g.prototype.appended = function (a) {
        var b = this.addItems(a);
        b.length && (this.layoutItems(b, !0), this.reveal(b))
    }, g.prototype.prepended = function (a) {
        var b = this._itemize(a);
        if (b.length) {
            var c = this.items.slice(0);
            this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
        }
    }, g.prototype.reveal = function (a) {
        this._emitCompleteOnItems("reveal", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.reveal()
        }
    }, g.prototype.hide = function (a) {
        this._emitCompleteOnItems("hide", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.hide()
        }
    }, g.prototype.revealItemElements = function (a) {
        var b = this.getItems(a);
        this.reveal(b)
    }, g.prototype.hideItemElements = function (a) {
        var b = this.getItems(a);
        this.hide(b)
    }, g.prototype.getItem = function (a) {
        for (var b = 0, c = this.items.length; c > b; b++) {
            var d = this.items[b];
            if (d.element === a)return d
        }
    }, g.prototype.getItems = function (a) {
        a = e.makeArray(a);
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            var f = a[c], g = this.getItem(f);
            g && b.push(g)
        }
        return b
    }, g.prototype.remove = function (a) {
        var b = this.getItems(a);
        if (this._emitCompleteOnItems("remove", b), b && b.length)for (var c = 0, d = b.length; d > c; c++) {
            var f = b[c];
            f.remove(), e.removeFrom(this.items, f)
        }
    }, g.prototype.destroy = function () {
        var a = this.element.style;
        a.height = "", a.position = "", a.width = "";
        for (var b = 0, c = this.items.length; c > b; b++) {
            var d = this.items[b];
            d.destroy()
        }
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
    }, g.data = function (a) {
        a = e.getQueryElement(a);
        var b = a && a.outlayerGUID;
        return b && l[b]
    }, g.create = function (a, b) {
        function c() {
            g.apply(this, arguments)
        }

        return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function () {
            f.apply(this, arguments)
        }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
    }, g.Item = f, g
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
}(window, function (a) {
    "use strict";
    function b() {
        a.Item.apply(this, arguments)
    }

    b.prototype = new a.Item, b.prototype._create = function () {
        this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
    }, b.prototype.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var a = this.layout.options.getSortData, b = this.layout._sorters;
            for (var c in a) {
                var d = b[c];
                this.sortData[c] = d(this.element, this)
            }
        }
    };
    var c = b.prototype.destroy;
    return b.prototype.destroy = function () {
        c.apply(this, arguments), this.css({display: ""})
    }, b
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
}(window, function (a, b) {
    "use strict";
    function c(a) {
        this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
    }

    return function () {
        function a(a) {
            return function () {
                return b.prototype[a].apply(this.isotope, arguments)
            }
        }

        for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
            var g = d[e];
            c.prototype[g] = a(g)
        }
    }(), c.prototype.needsVerticalResizeLayout = function () {
        var b = a(this.isotope.element), c = this.isotope.size && b;
        return c && b.innerHeight != this.isotope.size.innerHeight
    }, c.prototype._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
    }, c.prototype.getColumnWidth = function () {
        this.getSegmentSize("column", "Width")
    }, c.prototype.getRowHeight = function () {
        this.getSegmentSize("row", "Height")
    }, c.prototype.getSegmentSize = function (a, b) {
        var c = a + b, d = "outer" + b;
        if (this._getMeasurement(c, d), !this[c]) {
            var e = this.getFirstItemSize();
            this[c] = e && e[d] || this.isotope.size["inner" + b]
        }
    }, c.prototype.getFirstItemSize = function () {
        var b = this.isotope.filteredItems[0];
        return b && b.element && a(b.element)
    }, c.prototype.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
    }, c.prototype.getSize = function () {
        this.isotope.getSize(), this.size = this.isotope.size
    }, c.modes = {}, c.create = function (a, b) {
        function d() {
            c.apply(this, arguments)
        }

        return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
    }, c
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
}(window, function (a, b, c) {
    var d = a.create("masonry");
    return d.prototype._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
        var a = this.cols;
        for (this.colYs = []; a--;)this.colYs.push(0);
        this.maxY = 0
    }, d.prototype.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var a = this.items[0], c = a && a.element;
            this.columnWidth = c && b(c).outerWidth || this.containerWidth
        }
        var d = this.columnWidth += this.gutter, e = this.containerWidth + this.gutter, f = e / d, g = d - e % d,
            h = g && 1 > g ? "round" : "floor";
        f = Math[h](f), this.cols = Math.max(f, 1)
    }, d.prototype.getContainerWidth = function () {
        var a = this.options.isFitWidth ? this.element.parentNode : this.element, c = b(a);
        this.containerWidth = c && c.innerWidth
    }, d.prototype._getItemLayoutPosition = function (a) {
        a.getSize();
        var b = a.size.outerWidth % this.columnWidth, d = b && 1 > b ? "round" : "ceil",
            e = Math[d](a.size.outerWidth / this.columnWidth);
        e = Math.min(e, this.cols);
        for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
            x: this.columnWidth * h,
            y: g
        }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++)this.colYs[h + l] = j;
        return i
    }, d.prototype._getColGroup = function (a) {
        if (2 > a)return this.colYs;
        for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
            var e = this.colYs.slice(d, d + a);
            b[d] = Math.max.apply(Math, e)
        }
        return b
    }, d.prototype._manageStamp = function (a) {
        var c = b(a), d = this._getElementOffset(a), e = this.options.isOriginLeft ? d.left : d.right,
            f = e + c.outerWidth, g = Math.floor(e / this.columnWidth);
        g = Math.max(0, g);
        var h = Math.floor(f / this.columnWidth);
        h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
        for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++)this.colYs[j] = Math.max(i, this.colYs[j])
    }, d.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var a = {height: this.maxY};
        return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
    }, d.prototype._getContainerFitWidth = function () {
        for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];)a++;
        return (this.cols - a) * this.columnWidth - this.gutter
    }, d.prototype.needsResizeLayout = function () {
        var a = this.containerWidth;
        return this.getContainerWidth(), a !== this.containerWidth
    }, d
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
}(window, function (a, b) {
    "use strict";
    function c(a, b) {
        for (var c in b)a[c] = b[c];
        return a
    }

    var d = a.create("masonry"), e = d.prototype._getElementOffset, f = d.prototype.layout,
        g = d.prototype._getMeasurement;
    c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
    var h = d.prototype.measureColumns;
    d.prototype.measureColumns = function () {
        this.items = this.isotope.filteredItems, h.call(this)
    };
    var i = d.prototype._manageStamp;
    return d.prototype._manageStamp = function () {
        this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
    }, d
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
}(window, function (a) {
    "use strict";
    var b = a.create("fitRows");
    return b.prototype._resetLayout = function () {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, b.prototype._getItemLayoutPosition = function (a) {
        a.getSize();
        var b = a.size.outerWidth + this.gutter, c = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
        var d = {x: this.x, y: this.y};
        return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
    }, b.prototype._getContainerSize = function () {
        return {height: this.maxY}
    }, b
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
}(window, function (a) {
    "use strict";
    var b = a.create("vertical", {horizontalAlignment: 0});
    return b.prototype._resetLayout = function () {
        this.y = 0
    }, b.prototype._getItemLayoutPosition = function (a) {
        a.getSize();
        var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment, c = this.y;
        return this.y += a.size.outerHeight, {x: b, y: c}
    }, b.prototype._getContainerSize = function () {
        return {height: this.y}
    }, b
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (c, d, e, f, g, h) {
        return b(a, c, d, e, f, g, h)
    }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
}(window, function (a, b, c, d, e, f, g) {
    function h(a, b) {
        return function (c, d) {
            for (var e = 0, f = a.length; f > e; e++) {
                var g = a[e], h = c.sortData[g], i = d.sortData[g];
                if (h > i || i > h) {
                    var j = void 0 !== b[g] ? b[g] : b, k = j ? 1 : -1;
                    return (h > i ? 1 : -1) * k
                }
            }
            return 0
        }
    }

    var i = a.jQuery, j = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^\s+|\s+$/g, "")
    }, k = document.documentElement, l = k.textContent ? function (a) {
        return a.textContent
    } : function (a) {
        return a.innerText
    }, m = b.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
    m.Item = f, m.LayoutMode = g, m.prototype._create = function () {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var a in g.modes)this._initLayoutMode(a)
    }, m.prototype.reloadItems = function () {
        this.itemGUID = 0, b.prototype.reloadItems.call(this)
    }, m.prototype._itemize = function () {
        for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
            var e = a[c];
            e.id = this.itemGUID++
        }
        return this._updateItemsSortData(a), a
    }, m.prototype._initLayoutMode = function (a) {
        var b = g.modes[a], c = this.options[a] || {};
        this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
    }, m.prototype.layout = function () {
        return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
    }, m.prototype._layout = function () {
        var a = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
    }, m.prototype.arrange = function (a) {
        function b() {
            d.reveal(c.needReveal), d.hide(c.needHide)
        }

        this.option(a), this._getIsInstant();
        var c = this._filter(this.items);
        this.filteredItems = c.matches;
        var d = this;
        this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
    }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function () {
        var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        return this._isInstant = a, a
    }, m.prototype._bindArrangeComplete = function () {
        function a() {
            b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
        }

        var b, c, d, e = this;
        this.once("layoutComplete", function () {
            b = !0, a()
        }), this.once("hideComplete", function () {
            c = !0, a()
        }), this.once("revealComplete", function () {
            d = !0, a()
        })
    }, m.prototype._filter = function (a) {
        var b = this.options.filter;
        b = b || "*";
        for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
            var i = a[g];
            if (!i.isIgnored) {
                var j = f(i);
                j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
            }
        }
        return {matches: c, needReveal: d, needHide: e}
    }, m.prototype._getFilterTest = function (a) {
        return i && this.options.isJQueryFiltering ? function (b) {
            return i(b.element).is(a)
        } : "function" == typeof a ? function (b) {
            return a(b.element)
        } : function (b) {
            return d(b.element, a)
        }
    }, m.prototype.updateSortData = function (a) {
        var b;
        a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
    }, m.prototype._getSorters = function () {
        var a = this.options.getSortData;
        for (var b in a) {
            var c = a[b];
            this._sorters[b] = n(c)
        }
    }, m.prototype._updateItemsSortData = function (a) {
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.updateSortData()
        }
    };
    var n = function () {
        function a(a) {
            if ("string" != typeof a)return a;
            var c = j(a).split(" "), d = c[0], e = d.match(/^\[(.+)\]$/), f = e && e[1], g = b(f, d),
                h = m.sortDataParsers[c[1]];
            return a = h ? function (a) {
                return a && h(g(a))
            } : function (a) {
                return a && g(a)
            }
        }

        function b(a, b) {
            var c;
            return c = a ? function (b) {
                return b.getAttribute(a)
            } : function (a) {
                var c = a.querySelector(b);
                return c && l(c)
            }
        }

        return a
    }();
    m.sortDataParsers = {
        parseInt: function (a) {
            return parseInt(a, 10)
        }, parseFloat: function (a) {
            return parseFloat(a)
        }
    }, m.prototype._sort = function () {
        var a = this.options.sortBy;
        if (a) {
            var b = [].concat.apply(a, this.sortHistory), c = h(b, this.options.sortAscending);
            this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
        }
    }, m.prototype._mode = function () {
        var a = this.options.layoutMode, b = this.modes[a];
        if (!b)throw new Error("No layout mode: " + a);
        return b.options = this.options[a], b
    }, m.prototype._resetLayout = function () {
        b.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, m.prototype._getItemLayoutPosition = function (a) {
        return this._mode()._getItemLayoutPosition(a)
    }, m.prototype._manageStamp = function (a) {
        this._mode()._manageStamp(a)
    }, m.prototype._getContainerSize = function () {
        return this._mode()._getContainerSize()
    }, m.prototype.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
    }, m.prototype.appended = function (a) {
        var b = this.addItems(a);
        if (b.length) {
            var c = this._filterRevealAdded(b);
            this.filteredItems = this.filteredItems.concat(c)
        }
    }, m.prototype.prepended = function (a) {
        var b = this._itemize(a);
        if (b.length) {
            this._resetLayout(), this._manageStamps();
            var c = this._filterRevealAdded(b);
            this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
        }
    }, m.prototype._filterRevealAdded = function (a) {
        var b = this._filter(a);
        return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
    }, m.prototype.insert = function (a) {
        var b = this.addItems(a);
        if (b.length) {
            var c, d, e = b.length;
            for (c = 0; e > c; c++)d = b[c], this.element.appendChild(d.element);
            var f = this._filter(b).matches;
            for (c = 0; e > c; c++)b[c].isLayoutInstant = !0;
            for (this.arrange(), c = 0; e > c; c++)delete b[c].isLayoutInstant;
            this.reveal(f)
        }
    };
    var o = m.prototype.remove;
    return m.prototype.remove = function (a) {
        a = e.makeArray(a);
        var b = this.getItems(a);
        o.call(this, a);
        var c = b && b.length;
        if (c)for (var d = 0; c > d; d++) {
            var f = b[d];
            e.removeFrom(this.filteredItems, f)
        }
    }, m.prototype.shuffle = function () {
        for (var a = 0, b = this.items.length; b > a; a++) {
            var c = this.items[a];
            c.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, m.prototype._noTransition = function (a) {
        var b = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var c = a.call(this);
        return this.options.transitionDuration = b, c
    }, m.prototype.getFilteredItemElements = function () {
        for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++)a.push(this.filteredItems[b].element);
        return a
    }, m
});
!function (a, b) {
    "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipe = b()
}(this, function () {
    "use strict";
    var a = function (a, b, c, d) {
        var e = {
            features: null, bind: function (a, b, c, d) {
                var e = (d ? "remove" : "add") + "EventListener";
                b = b.split(" ");
                for (var f = 0; f < b.length; f++)b[f] && a[e](b[f], c, !1)
            }, isArray: function (a) {
                return a instanceof Array
            }, createEl: function (a, b) {
                var c = document.createElement(b || "div");
                return a && (c.className = a), c
            }, getScrollY: function () {
                var a = window.pageYOffset;
                return void 0 !== a ? a : document.documentElement.scrollTop
            }, unbind: function (a, b, c) {
                e.bind(a, b, c, !0)
            }, removeClass: function (a, b) {
                var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
                a.className = a.className.replace(c, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            }, addClass: function (a, b) {
                e.hasClass(a, b) || (a.className += (a.className ? " " : "") + b)
            }, hasClass: function (a, b) {
                return a.className && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
            }, getChildByClass: function (a, b) {
                for (var c = a.firstChild; c;) {
                    if (e.hasClass(c, b))return c;
                    c = c.nextSibling
                }
            }, arraySearch: function (a, b, c) {
                for (var d = a.length; d--;)if (a[d][c] === b)return d;
                return -1
            }, extend: function (a, b, c) {
                for (var d in b)if (b.hasOwnProperty(d)) {
                    if (c && a.hasOwnProperty(d))continue;
                    a[d] = b[d]
                }
            }, easing: {
                sine: {
                    out: function (a) {
                        return Math.sin(a * (Math.PI / 2))
                    }, inOut: function (a) {
                        return -(Math.cos(Math.PI * a) - 1) / 2
                    }
                }, cubic: {
                    out: function (a) {
                        return --a * a * a + 1
                    }
                }
            }, detectFeatures: function () {
                if (e.features)return e.features;
                var a = e.createEl(), b = a.style, c = "", d = {};
                if (d.oldIE = document.all && !document.addEventListener, d.touch = "ontouchstart" in window, window.requestAnimationFrame && (d.raf = window.requestAnimationFrame, d.caf = window.cancelAnimationFrame), d.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !d.pointerEvent) {
                    var f = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var g = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        g && g.length > 0 && (g = parseInt(g[1], 10), g >= 1 && 8 > g && (d.isOldIOSPhone = !0))
                    }
                    var h = f.match(/Android\s([0-9\.]*)/), i = h ? h[1] : 0;
                    i = parseFloat(i), i >= 1 && (4.4 > i && (d.isOldAndroid = !0), d.androidVersion = i), d.isMobileOpera = /opera mini|opera mobi/i.test(f)
                }
                for (var j, k, l = ["transform", "perspective", "animationName"], m = ["", "webkit", "Moz", "ms", "O"], n = 0; 4 > n; n++) {
                    c = m[n];
                    for (var o = 0; 3 > o; o++)j = l[o], k = c + (c ? j.charAt(0).toUpperCase() + j.slice(1) : j), !d[j] && k in b && (d[j] = k);
                    c && !d.raf && (c = c.toLowerCase(), d.raf = window[c + "RequestAnimationFrame"], d.raf && (d.caf = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]))
                }
                if (!d.raf) {
                    var p = 0;
                    d.raf = function (a) {
                        var b = (new Date).getTime(), c = Math.max(0, 16 - (b - p)), d = window.setTimeout(function () {
                            a(b + c)
                        }, c);
                        return p = b + c, d
                    }, d.caf = function (a) {
                        clearTimeout(a)
                    }
                }
                return d.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, e.features = d, d
            }
        };
        e.detectFeatures(), e.features.oldIE && (e.bind = function (a, b, c, d) {
            b = b.split(" ");
            for (var e, f = (d ? "detach" : "attach") + "Event", g = function () {
                c.handleEvent.call(c)
            }, h = 0; h < b.length; h++)if (e = b[h])if ("object" == typeof c && c.handleEvent) {
                if (d) {
                    if (!c["oldIE" + e])return !1
                } else c["oldIE" + e] = g;
                a[f]("on" + e, c["oldIE" + e])
            } else a[f]("on" + e, c)
        });
        var f = this, g = 25, h = 3, i = {
            allowPanToNext: !0,
            spacing: .12,
            bgOpacity: 1,
            mouseUsed: !1,
            loop: !0,
            pinchToClose: !0,
            closeOnScroll: !0,
            closeOnVerticalDrag: !0,
            verticalDragRange: .75,
            hideAnimationDuration: 333,
            showAnimationDuration: 333,
            showHideOpacity: !1,
            focus: !0,
            escKey: !0,
            arrowKeys: !0,
            mainScrollEndFriction: .35,
            panEndFriction: .35,
            isClickableElement: function (a) {
                return "A" === a.tagName
            },
            getDoubleTapZoom: function (a, b) {
                return a ? 1 : b.initialZoomLevel < .7 ? 1 : 1.33
            },
            maxSpreadZoom: 1.33,
            modal: !0,
            scaleMode: "fit"
        };
        e.extend(i, d);
        var j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S,
            T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la = function () {
                return {x: 0, y: 0}
            }, ma = la(), na = la(), oa = la(), pa = {}, qa = 0, ra = {}, sa = la(), ta = 0, ua = !0, va = [], wa = {},
            xa = !1, ya = function (a, b) {
                e.extend(f, b.publicMethods), va.push(a)
            }, za = function (a) {
                var b = _b();
                return a > b - 1 ? a - b : 0 > a ? b + a : a
            }, Aa = {}, Ba = function (a, b) {
                return Aa[a] || (Aa[a] = []), Aa[a].push(b)
            }, Ca = function (a) {
                var b = Aa[a];
                if (b) {
                    var c = Array.prototype.slice.call(arguments);
                    c.shift();
                    for (var d = 0; d < b.length; d++)b[d].apply(f, c)
                }
            }, Da = function () {
                return (new Date).getTime()
            }, Ea = function (a) {
                ia = a, f.bg.style.opacity = a * i.bgOpacity
            }, Fa = function (a, b, c, d, e) {
                (!xa || e && e !== f.currItem) && (d /= e ? e.fitRatio : f.currItem.fitRatio), a[E] = u + b + "px, " + c + "px" + v + " scale(" + d + ")"
            }, Ga = function (a) {
                da && (a && (s > f.currItem.fitRatio ? xa || (lc(f.currItem, !1, !0), xa = !0) : xa && (lc(f.currItem), xa = !1)), Fa(da, oa.x, oa.y, s))
            }, Ha = function (a) {
                a.container && Fa(a.container.style, a.initialPosition.x, a.initialPosition.y, a.initialZoomLevel, a)
            }, Ia = function (a, b) {
                b[E] = u + a + "px, 0px" + v
            }, Ja = function (a, b) {
                if (!i.loop && b) {
                    var c = m + (sa.x * qa - a) / sa.x, d = Math.round(a - sb.x);
                    (0 > c && d > 0 || c >= _b() - 1 && 0 > d) && (a = sb.x + d * i.mainScrollEndFriction)
                }
                sb.x = a, Ia(a, n)
            }, Ka = function (a, b) {
                var c = tb[a] - ra[a];
                return na[a] + ma[a] + c - c * (b / t)
            }, La = function (a, b) {
                a.x = b.x, a.y = b.y, b.id && (a.id = b.id)
            }, Ma = function (a) {
                a.x = Math.round(a.x), a.y = Math.round(a.y)
            }, Na = null, Oa = function () {
                Na && (e.unbind(document, "mousemove", Oa), e.addClass(a, "pswp--has_mouse"), i.mouseUsed = !0, Ca("mouseUsed")), Na = setTimeout(function () {
                    Na = null
                }, 100)
            }, Pa = function () {
                e.bind(document, "keydown", f), N.transform && e.bind(f.scrollWrap, "click", f), i.mouseUsed || e.bind(document, "mousemove", Oa), e.bind(window, "resize scroll", f), Ca("bindEvents")
            }, Qa = function () {
                e.unbind(window, "resize", f), e.unbind(window, "scroll", r.scroll), e.unbind(document, "keydown", f), e.unbind(document, "mousemove", Oa), N.transform && e.unbind(f.scrollWrap, "click", f), U && e.unbind(window, p, f), Ca("unbindEvents")
            }, Ra = function (a, b) {
                var c = hc(f.currItem, pa, a);
                return b && (ca = c), c
            }, Sa = function (a) {
                return a || (a = f.currItem), a.initialZoomLevel
            }, Ta = function (a) {
                return a || (a = f.currItem), a.w > 0 ? i.maxSpreadZoom : 1
            }, Ua = function (a, b, c, d) {
                return d === f.currItem.initialZoomLevel ? (c[a] = f.currItem.initialPosition[a], !0) : (c[a] = Ka(a, d), c[a] > b.min[a] ? (c[a] = b.min[a], !0) : c[a] < b.max[a] ? (c[a] = b.max[a], !0) : !1)
            }, Va = function () {
                if (E) {
                    var b = N.perspective && !G;
                    return u = "translate" + (b ? "3d(" : "("), void(v = N.perspective ? ", 0px)" : ")")
                }
                E = "left", e.addClass(a, "pswp--ie"), Ia = function (a, b) {
                    b.left = a + "px"
                }, Ha = function (a) {
                    var b = a.fitRatio > 1 ? 1 : a.fitRatio, c = a.container.style, d = b * a.w, e = b * a.h;
                    c.width = d + "px", c.height = e + "px", c.left = a.initialPosition.x + "px", c.top = a.initialPosition.y + "px"
                }, Ga = function () {
                    if (da) {
                        var a = da, b = f.currItem, c = b.fitRatio > 1 ? 1 : b.fitRatio, d = c * b.w, e = c * b.h;
                        a.width = d + "px", a.height = e + "px", a.left = oa.x + "px", a.top = oa.y + "px"
                    }
                }
            }, Wa = function (a) {
                var b = "";
                i.escKey && 27 === a.keyCode ? b = "close" : i.arrowKeys && (37 === a.keyCode ? b = "prev" : 39 === a.keyCode && (b = "next")), b && (a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || (a.preventDefault ? a.preventDefault() : a.returnValue = !1, f[b]()))
            }, Xa = function (a) {
                a && (X || W || ea || S) && (a.preventDefault(), a.stopPropagation())
            }, Ya = function () {
                f.setScrollOffset(0, e.getScrollY())
            }, Za = {}, $a = 0, _a = function (a) {
                Za[a] && (Za[a].raf && I(Za[a].raf), $a--, delete Za[a])
            }, ab = function (a) {
                Za[a] && _a(a), Za[a] || ($a++, Za[a] = {})
            }, bb = function () {
                for (var a in Za)Za.hasOwnProperty(a) && _a(a)
            }, cb = function (a, b, c, d, e, f, g) {
                var h, i = Da();
                ab(a);
                var j = function () {
                    if (Za[a]) {
                        if (h = Da() - i, h >= d)return _a(a), f(c), void(g && g());
                        f((c - b) * e(h / d) + b), Za[a].raf = H(j)
                    }
                };
                j()
            }, db = {
                shout: Ca, listen: Ba, viewportSize: pa, options: i, isMainScrollAnimating: function () {
                    return ea
                }, getZoomLevel: function () {
                    return s
                }, getCurrentIndex: function () {
                    return m
                }, isDragging: function () {
                    return U
                }, isZooming: function () {
                    return _
                }, setScrollOffset: function (a, b) {
                    ra.x = a, M = ra.y = b, Ca("updateScrollOffset", ra)
                }, applyZoomPan: function (a, b, c, d) {
                    oa.x = b, oa.y = c, s = a, Ga(d)
                }, init: function () {
                    if (!j && !k) {
                        var c;
                        f.framework = e, f.template = a, f.bg = e.getChildByClass(a, "pswp__bg"), J = a.className, j = !0, N = e.detectFeatures(), H = N.raf, I = N.caf, E = N.transform, L = N.oldIE, f.scrollWrap = e.getChildByClass(a, "pswp__scroll-wrap"), f.container = e.getChildByClass(f.scrollWrap, "pswp__container"), n = f.container.style, f.itemHolders = y = [{
                            el: f.container.children[0],
                            wrap: 0,
                            index: -1
                        }, {el: f.container.children[1], wrap: 0, index: -1}, {
                            el: f.container.children[2],
                            wrap: 0,
                            index: -1
                        }], y[0].el.style.display = y[2].el.style.display = "none", Va(), r = {
                            resize: f.updateSize,
                            scroll: Ya,
                            keydown: Wa,
                            click: Xa
                        };
                        var d = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
                        for (N.animationName && N.transform && !d || (i.showAnimationDuration = i.hideAnimationDuration = 0), c = 0; c < va.length; c++)f["init" + va[c]]();
                        if (b) {
                            var g = f.ui = new b(f, e);
                            g.init()
                        }
                        Ca("firstUpdate"), m = m || i.index || 0, (isNaN(m) || 0 > m || m >= _b()) && (m = 0), f.currItem = $b(m), (N.isOldIOSPhone || N.isOldAndroid) && (ua = !1), a.setAttribute("aria-hidden", "false"), i.modal && (ua ? a.style.position = "fixed" : (a.style.position = "absolute", a.style.top = e.getScrollY() + "px")), void 0 === M && (Ca("initialLayout"), M = K = e.getScrollY());
                        var l = "pswp--open ";
                        for (i.mainClass && (l += i.mainClass + " "), i.showHideOpacity && (l += "pswp--animate_opacity "), l += G ? "pswp--touch" : "pswp--notouch", l += N.animationName ? " pswp--css_animation" : "", l += N.svg ? " pswp--svg" : "", e.addClass(a, l), f.updateSize(), o = -1, ta = null, c = 0; h > c; c++)Ia((c + o) * sa.x, y[c].el.style);
                        L || e.bind(f.scrollWrap, q, f), Ba("initialZoomInEnd", function () {
                            f.setContent(y[0], m - 1), f.setContent(y[2], m + 1), y[0].el.style.display = y[2].el.style.display = "block", i.focus && a.focus(), Pa()
                        }), f.setContent(y[1], m), f.updateCurrItem(), Ca("afterInit"), ua || (w = setInterval(function () {
                            $a || U || _ || s !== f.currItem.initialZoomLevel || f.updateSize()
                        }, 1e3)), e.addClass(a, "pswp--visible")
                    }
                }, close: function () {
                    j && (j = !1, k = !0, Ca("close"), Qa(), bc(f.currItem, null, !0, f.destroy))
                }, destroy: function () {
                    Ca("destroy"), Wb && clearTimeout(Wb), a.setAttribute("aria-hidden", "true"), a.className = J, w && clearInterval(w), e.unbind(f.scrollWrap, q, f), e.unbind(window, "scroll", f), yb(), bb(), Aa = null
                }, panTo: function (a, b, c) {
                    c || (a > ca.min.x ? a = ca.min.x : a < ca.max.x && (a = ca.max.x), b > ca.min.y ? b = ca.min.y : b < ca.max.y && (b = ca.max.y)), oa.x = a, oa.y = b, Ga()
                }, handleEvent: function (a) {
                    a = a || window.event, r[a.type] && r[a.type](a)
                }, goTo: function (a) {
                    a = za(a);
                    var b = a - m;
                    ta = b, m = a, f.currItem = $b(m), qa -= b, Ja(sa.x * qa), bb(), ea = !1, f.updateCurrItem()
                }, next: function () {
                    f.goTo(m + 1)
                }, prev: function () {
                    f.goTo(m - 1)
                }, updateCurrZoomItem: function (a) {
                    if (a && Ca("beforeChange", 0), y[1].el.children.length) {
                        var b = y[1].el.children[0];
                        da = e.hasClass(b, "pswp__zoom-wrap") ? b.style : null
                    } else da = null;
                    ca = f.currItem.bounds, t = s = f.currItem.initialZoomLevel, oa.x = ca.center.x, oa.y = ca.center.y, a && Ca("afterChange")
                }, invalidateCurrItems: function () {
                    x = !0;
                    for (var a = 0; h > a; a++)y[a].item && (y[a].item.needsUpdate = !0)
                }, updateCurrItem: function (a) {
                    if (0 !== ta) {
                        var b, c = Math.abs(ta);
                        if (!(a && 2 > c)) {
                            f.currItem = $b(m), xa = !1, Ca("beforeChange", ta), c >= h && (o += ta + (ta > 0 ? -h : h), c = h);
                            for (var d = 0; c > d; d++)ta > 0 ? (b = y.shift(), y[h - 1] = b, o++, Ia((o + 2) * sa.x, b.el.style), f.setContent(b, m - c + d + 1 + 1)) : (b = y.pop(), y.unshift(b), o--, Ia(o * sa.x, b.el.style), f.setContent(b, m + c - d - 1 - 1));
                            if (da && 1 === Math.abs(ta)) {
                                var e = $b(z);
                                e.initialZoomLevel !== s && (hc(e, pa), lc(e), Ha(e))
                            }
                            ta = 0, f.updateCurrZoomItem(), z = m, Ca("afterChange")
                        }
                    }
                }, updateSize: function (b) {
                    if (!ua && i.modal) {
                        var c = e.getScrollY();
                        if (M !== c && (a.style.top = c + "px", M = c), !b && wa.x === window.innerWidth && wa.y === window.innerHeight)return;
                        wa.x = window.innerWidth, wa.y = window.innerHeight, a.style.height = wa.y + "px"
                    }
                    if (pa.x = f.scrollWrap.clientWidth, pa.y = f.scrollWrap.clientHeight, Ya(), sa.x = pa.x + Math.round(pa.x * i.spacing), sa.y = pa.y, Ja(sa.x * qa), Ca("beforeResize"), void 0 !== o) {
                        for (var d, g, j, k = 0; h > k; k++)d = y[k], Ia((k + o) * sa.x, d.el.style), j = m + k - 1, i.loop && _b() > 2 && (j = za(j)), g = $b(j), g && (x || g.needsUpdate || !g.bounds) ? (f.cleanSlide(g), f.setContent(d, j), 1 === k && (f.currItem = g, f.updateCurrZoomItem(!0)), g.needsUpdate = !1) : -1 === d.index && j >= 0 && f.setContent(d, j), g && g.container && (hc(g, pa), lc(g), Ha(g));
                        x = !1
                    }
                    t = s = f.currItem.initialZoomLevel, ca = f.currItem.bounds, ca && (oa.x = ca.center.x, oa.y = ca.center.y, Ga(!0)), Ca("resize")
                }, zoomTo: function (a, b, c, d, f) {
                    b && (t = s, tb.x = Math.abs(b.x) - oa.x, tb.y = Math.abs(b.y) - oa.y, La(na, oa));
                    var g = Ra(a, !1), h = {};
                    Ua("x", g, h, a), Ua("y", g, h, a);
                    var i = s, j = {x: oa.x, y: oa.y};
                    Ma(h);
                    var k = function (b) {
                        1 === b ? (s = a, oa.x = h.x, oa.y = h.y) : (s = (a - i) * b + i, oa.x = (h.x - j.x) * b + j.x, oa.y = (h.y - j.y) * b + j.y), f && f(b), Ga(1 === b)
                    };
                    c ? cb("customZoomTo", 0, 1, c, d || e.easing.sine.inOut, k) : k(1)
                }
            }, eb = 30, fb = 10, gb = {}, hb = {}, ib = {}, jb = {}, kb = {}, lb = [], mb = {}, nb = [], ob = {}, pb = 0,
            qb = la(), rb = 0, sb = la(), tb = la(), ub = la(), vb = function (a, b) {
                return a.x === b.x && a.y === b.y
            }, wb = function (a, b) {
                return Math.abs(a.x - b.x) < g && Math.abs(a.y - b.y) < g
            }, xb = function (a, b) {
                return ob.x = Math.abs(a.x - b.x), ob.y = Math.abs(a.y - b.y), Math.sqrt(ob.x * ob.x + ob.y * ob.y)
            }, yb = function () {
                Y && (I(Y), Y = null)
            }, zb = function () {
                U && (Y = H(zb), Pb())
            }, Ab = function () {
                return !("fit" === i.scaleMode && s === f.currItem.initialZoomLevel)
            }, Bb = function (a, b) {
                return a && a !== document ? a.getAttribute("class") && a.getAttribute("class").indexOf("pswp__scroll-wrap") > -1 ? !1 : b(a) ? a : Bb(a.parentNode, b) : !1
            }, Cb = {}, Db = function (a, b) {
                return Cb.prevent = !Bb(a.target, i.isClickableElement), Ca("preventDragEvent", a, b, Cb), Cb.prevent
            }, Eb = function (a, b) {
                return b.x = a.pageX, b.y = a.pageY, b.id = a.identifier, b
            }, Fb = function (a, b, c) {
                c.x = .5 * (a.x + b.x), c.y = .5 * (a.y + b.y)
            }, Gb = function (a, b, c) {
                if (a - P > 50) {
                    var d = nb.length > 2 ? nb.shift() : {};
                    d.x = b, d.y = c, nb.push(d), P = a
                }
            }, Hb = function () {
                var a = oa.y - f.currItem.initialPosition.y;
                return 1 - Math.abs(a / (pa.y / 2))
            }, Ib = {}, Jb = {}, Kb = [], Lb = function (a) {
                for (; Kb.length > 0;)Kb.pop();
                return F ? (ka = 0, lb.forEach(function (a) {
                    0 === ka ? Kb[0] = a : 1 === ka && (Kb[1] = a), ka++
                })) : a.type.indexOf("touch") > -1 ? a.touches && a.touches.length > 0 && (Kb[0] = Eb(a.touches[0], Ib), a.touches.length > 1 && (Kb[1] = Eb(a.touches[1], Jb))) : (Ib.x = a.pageX, Ib.y = a.pageY, Ib.id = "", Kb[0] = Ib), Kb
            }, Mb = function (a, b) {
                var c, d, e, g, h = 0, j = oa[a] + b[a], k = b[a] > 0, l = sb.x + b.x, m = sb.x - mb.x;
                return c = j > ca.min[a] || j < ca.max[a] ? i.panEndFriction : 1, j = oa[a] + b[a] * c, !i.allowPanToNext && s !== f.currItem.initialZoomLevel || (da ? "h" !== fa || "x" !== a || W || (k ? (j > ca.min[a] && (c = i.panEndFriction, h = ca.min[a] - j, d = ca.min[a] - na[a]), (0 >= d || 0 > m) && _b() > 1 ? (g = l, 0 > m && l > mb.x && (g = mb.x)) : ca.min.x !== ca.max.x && (e = j)) : (j < ca.max[a] && (c = i.panEndFriction, h = j - ca.max[a], d = na[a] - ca.max[a]), (0 >= d || m > 0) && _b() > 1 ? (g = l, m > 0 && l < mb.x && (g = mb.x)) : ca.min.x !== ca.max.x && (e = j))) : g = l, "x" !== a) ? void(ea || Z || s > f.currItem.fitRatio && (oa[a] += b[a] * c)) : (void 0 !== g && (Ja(g, !0), Z = g === mb.x ? !1 : !0), ca.min.x !== ca.max.x && (void 0 !== e ? oa.x = e : Z || (oa.x += b.x * c)), void 0 !== g)
            }, Nb = function (a) {
                if (!("mousedown" === a.type && a.button > 0)) {
                    if (Zb)return void a.preventDefault();
                    if (!T || "mousedown" !== a.type) {
                        if (Db(a, !0) && a.preventDefault(), Ca("pointerDown"), F) {
                            var b = e.arraySearch(lb, a.pointerId, "id");
                            0 > b && (b = lb.length), lb[b] = {x: a.pageX, y: a.pageY, id: a.pointerId}
                        }
                        var c = Lb(a), d = c.length;
                        $ = null, bb(), U && 1 !== d || (U = ga = !0, e.bind(window, p, f), R = ja = ha = S = Z = X = V = W = !1, fa = null, Ca("firstTouchStart", c), La(na, oa), ma.x = ma.y = 0, La(jb, c[0]), La(kb, jb), mb.x = sa.x * qa, nb = [{
                            x: jb.x,
                            y: jb.y
                        }], P = O = Da(), Ra(s, !0), yb(), zb()), !_ && d > 1 && !ea && !Z && (t = s, W = !1, _ = V = !0, ma.y = ma.x = 0, La(na, oa), La(gb, c[0]), La(hb, c[1]), Fb(gb, hb, ub), tb.x = Math.abs(ub.x) - oa.x, tb.y = Math.abs(ub.y) - oa.y, aa = ba = xb(gb, hb))
                    }
                }
            }, Ob = function (a) {
                if (a.preventDefault(), F) {
                    var b = e.arraySearch(lb, a.pointerId, "id");
                    if (b > -1) {
                        var c = lb[b];
                        c.x = a.pageX, c.y = a.pageY
                    }
                }
                if (U) {
                    var d = Lb(a);
                    if (fa || X || _) $ = d; else if (sb.x !== sa.x * qa) fa = "h"; else {
                        var f = Math.abs(d[0].x - jb.x) - Math.abs(d[0].y - jb.y);
                        Math.abs(f) >= fb && (fa = f > 0 ? "h" : "v", $ = d)
                    }
                }
            }, Pb = function () {
                if ($) {
                    var a = $.length;
                    if (0 !== a)if (La(gb, $[0]), ib.x = gb.x - jb.x, ib.y = gb.y - jb.y, _ && a > 1) {
                        if (jb.x = gb.x, jb.y = gb.y, !ib.x && !ib.y && vb($[1], hb))return;
                        La(hb, $[1]), W || (W = !0, Ca("zoomGestureStarted"));
                        var b = xb(gb, hb), c = Ub(b);
                        c > f.currItem.initialZoomLevel + f.currItem.initialZoomLevel / 15 && (ja = !0);
                        var d = 1, e = Sa(), g = Ta();
                        if (e > c)if (i.pinchToClose && !ja && t <= f.currItem.initialZoomLevel) {
                            var h = e - c, j = 1 - h / (e / 1.2);
                            Ea(j), Ca("onPinchClose", j), ha = !0
                        } else d = (e - c) / e, d > 1 && (d = 1), c = e - d * (e / 3); else c > g && (d = (c - g) / (6 * e), d > 1 && (d = 1), c = g + d * e);
                        0 > d && (d = 0), aa = b, Fb(gb, hb, qb), ma.x += qb.x - ub.x, ma.y += qb.y - ub.y, La(ub, qb), oa.x = Ka("x", c), oa.y = Ka("y", c), R = c > s, s = c, Ga()
                    } else {
                        if (!fa)return;
                        if (ga && (ga = !1, Math.abs(ib.x) >= fb && (ib.x -= $[0].x - kb.x), Math.abs(ib.y) >= fb && (ib.y -= $[0].y - kb.y)), jb.x = gb.x, jb.y = gb.y, 0 === ib.x && 0 === ib.y)return;
                        if ("v" === fa && i.closeOnVerticalDrag && !Ab()) {
                            ma.y += ib.y, oa.y += ib.y;
                            var k = Hb();
                            return S = !0, Ca("onVerticalDrag", k), Ea(k), void Ga()
                        }
                        Gb(Da(), gb.x, gb.y), X = !0, ca = f.currItem.bounds;
                        var l = Mb("x", ib);
                        l || (Mb("y", ib), Ma(oa), Ga())
                    }
                }
            }, Qb = function (a) {
                if (N.isOldAndroid) {
                    if (T && "mouseup" === a.type)return;
                    a.type.indexOf("touch") > -1 && (clearTimeout(T), T = setTimeout(function () {
                        T = 0
                    }, 600))
                }
                Ca("pointerUp"), Db(a, !1) && a.preventDefault();
                var b;
                if (F) {
                    var c = e.arraySearch(lb, a.pointerId, "id");
                    if (c > -1)if (b = lb.splice(c, 1)[0], navigator.pointerEnabled) b.type = a.pointerType || "mouse"; else {
                        var d = {4: "mouse", 2: "touch", 3: "pen"};
                        b.type = d[a.pointerType], b.type || (b.type = a.pointerType || "mouse")
                    }
                }
                var g, h = Lb(a), j = h.length;
                if ("mouseup" === a.type && (j = 0), 2 === j)return $ = null, !0;
                1 === j && La(kb, h[0]), 0 !== j || fa || ea || (b || ("mouseup" === a.type ? b = {
                    x: a.pageX,
                    y: a.pageY,
                    type: "mouse"
                } : a.changedTouches && a.changedTouches[0] && (b = {
                        x: a.changedTouches[0].pageX,
                        y: a.changedTouches[0].pageY,
                        type: "touch"
                    })), Ca("touchRelease", a, b));
                var k = -1;
                if (0 === j && (U = !1, e.unbind(window, p, f), yb(), _ ? k = 0 : -1 !== rb && (k = Da() - rb)), rb = 1 === j ? Da() : -1, g = -1 !== k && 150 > k ? "zoom" : "swipe", _ && 2 > j && (_ = !1, 1 === j && (g = "zoomPointerUp"), Ca("zoomGestureEnded")), $ = null, X || W || ea || S)if (bb(), Q || (Q = Rb()), Q.calculateSwipeSpeed("x"), S) {
                    var l = Hb();
                    if (l < i.verticalDragRange) f.close(); else {
                        var m = oa.y, n = ia;
                        cb("verticalDrag", 0, 1, 300, e.easing.cubic.out, function (a) {
                            oa.y = (f.currItem.initialPosition.y - m) * a + m, Ea((1 - n) * a + n), Ga()
                        }), Ca("onVerticalDrag", 1)
                    }
                } else {
                    if ((Z || ea) && 0 === j) {
                        var o = Tb(g, Q);
                        if (o)return;
                        g = "zoomPointerUp"
                    }
                    if (!ea)return "swipe" !== g ? void Vb() : void(!Z && s > f.currItem.fitRatio && Sb(Q))
                }
            }, Rb = function () {
                var a, b, c = {
                    lastFlickOffset: {},
                    lastFlickDist: {},
                    lastFlickSpeed: {},
                    slowDownRatio: {},
                    slowDownRatioReverse: {},
                    speedDecelerationRatio: {},
                    speedDecelerationRatioAbs: {},
                    distanceOffset: {},
                    backAnimDestination: {},
                    backAnimStarted: {},
                    calculateSwipeSpeed: function (d) {
                        nb.length > 1 ? (a = Da() - P + 50, b = nb[nb.length - 2][d]) : (a = Da() - O, b = kb[d]), c.lastFlickOffset[d] = jb[d] - b, c.lastFlickDist[d] = Math.abs(c.lastFlickOffset[d]), c.lastFlickDist[d] > 20 ? c.lastFlickSpeed[d] = c.lastFlickOffset[d] / a : c.lastFlickSpeed[d] = 0, Math.abs(c.lastFlickSpeed[d]) < .1 && (c.lastFlickSpeed[d] = 0), c.slowDownRatio[d] = .95, c.slowDownRatioReverse[d] = 1 - c.slowDownRatio[d], c.speedDecelerationRatio[d] = 1
                    },
                    calculateOverBoundsAnimOffset: function (a, b) {
                        c.backAnimStarted[a] || (oa[a] > ca.min[a] ? c.backAnimDestination[a] = ca.min[a] : oa[a] < ca.max[a] && (c.backAnimDestination[a] = ca.max[a]), void 0 !== c.backAnimDestination[a] && (c.slowDownRatio[a] = .7, c.slowDownRatioReverse[a] = 1 - c.slowDownRatio[a], c.speedDecelerationRatioAbs[a] < .05 && (c.lastFlickSpeed[a] = 0, c.backAnimStarted[a] = !0, cb("bounceZoomPan" + a, oa[a], c.backAnimDestination[a], b || 300, e.easing.sine.out, function (b) {
                            oa[a] = b, Ga()
                        }))))
                    },
                    calculateAnimOffset: function (a) {
                        c.backAnimStarted[a] || (c.speedDecelerationRatio[a] = c.speedDecelerationRatio[a] * (c.slowDownRatio[a] + c.slowDownRatioReverse[a] - c.slowDownRatioReverse[a] * c.timeDiff / 10), c.speedDecelerationRatioAbs[a] = Math.abs(c.lastFlickSpeed[a] * c.speedDecelerationRatio[a]), c.distanceOffset[a] = c.lastFlickSpeed[a] * c.speedDecelerationRatio[a] * c.timeDiff, oa[a] += c.distanceOffset[a])
                    },
                    panAnimLoop: function () {
                        return Za.zoomPan && (Za.zoomPan.raf = H(c.panAnimLoop), c.now = Da(), c.timeDiff = c.now - c.lastNow, c.lastNow = c.now, c.calculateAnimOffset("x"), c.calculateAnimOffset("y"), Ga(), c.calculateOverBoundsAnimOffset("x"), c.calculateOverBoundsAnimOffset("y"), c.speedDecelerationRatioAbs.x < .05 && c.speedDecelerationRatioAbs.y < .05) ? (oa.x = Math.round(oa.x), oa.y = Math.round(oa.y), Ga(), void _a("zoomPan")) : void 0
                    }
                };
                return c
            }, Sb = function (a) {
                return a.calculateSwipeSpeed("y"), ca = f.currItem.bounds, a.backAnimDestination = {}, a.backAnimStarted = {}, Math.abs(a.lastFlickSpeed.x) <= .05 && Math.abs(a.lastFlickSpeed.y) <= .05 ? (a.speedDecelerationRatioAbs.x = a.speedDecelerationRatioAbs.y = 0, a.calculateOverBoundsAnimOffset("x"), a.calculateOverBoundsAnimOffset("y"), !0) : (ab("zoomPan"), a.lastNow = Da(), void a.panAnimLoop())
            }, Tb = function (a, b) {
                var c;
                ea || (pb = m);
                var d;
                if ("swipe" === a) {
                    var g = jb.x - kb.x, h = b.lastFlickDist.x < 10;
                    g > eb && (h || b.lastFlickOffset.x > 20) ? d = -1 : -eb > g && (h || b.lastFlickOffset.x < -20) && (d = 1)
                }
                var j;
                d && (m += d, 0 > m ? (m = i.loop ? _b() - 1 : 0, j = !0) : m >= _b() && (m = i.loop ? 0 : _b() - 1, j = !0), (!j || i.loop) && (ta += d, qa -= d, c = !0));
                var k, l = sa.x * qa, n = Math.abs(l - sb.x);
                return c || l > sb.x == b.lastFlickSpeed.x > 0 ? (k = Math.abs(b.lastFlickSpeed.x) > 0 ? n / Math.abs(b.lastFlickSpeed.x) : 333, k = Math.min(k, 400), k = Math.max(k, 250)) : k = 333, pb === m && (c = !1), ea = !0, Ca("mainScrollAnimStart"), cb("mainScroll", sb.x, l, k, e.easing.cubic.out, Ja, function () {
                    bb(), ea = !1, pb = -1, (c || pb !== m) && f.updateCurrItem(), Ca("mainScrollAnimComplete")
                }), c && f.updateCurrItem(!0), c
            }, Ub = function (a) {
                return 1 / ba * a * t
            }, Vb = function () {
                var a = s, b = Sa(), c = Ta();
                b > s ? a = b : s > c && (a = c);
                var d, g = 1, h = ia;
                return ha && !R && !ja && b > s ? (f.close(), !0) : (ha && (d = function (a) {
                    Ea((g - h) * a + h)
                }), f.zoomTo(a, 0, 200, e.easing.cubic.out, d), !0)
            };
        ya("Gestures", {
            publicMethods: {
                initGestures: function () {
                    var a = function (a, b, c, d, e) {
                        A = a + b, B = a + c, C = a + d, D = e ? a + e : ""
                    };
                    F = N.pointerEvent, F && N.touch && (N.touch = !1), F ? navigator.pointerEnabled ? a("pointer", "down", "move", "up", "cancel") : a("MSPointer", "Down", "Move", "Up", "Cancel") : N.touch ? (a("touch", "start", "move", "end", "cancel"), G = !0) : a("mouse", "down", "move", "up"), p = B + " " + C + " " + D, q = A, F && !G && (G = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), f.likelyTouchDevice = G, r[A] = Nb, r[B] = Ob, r[C] = Qb, D && (r[D] = r[C]), N.touch && (q += " mousedown", p += " mousemove mouseup", r.mousedown = r[A], r.mousemove = r[B], r.mouseup = r[C]), G || (i.allowPanToNext = !1)
                }
            }
        });
        var Wb, Xb, Yb, Zb, $b, _b, ac, bc = function (b, c, d, g) {
            Wb && clearTimeout(Wb), Zb = !0, Yb = !0;
            var h;
            b.initialLayout ? (h = b.initialLayout, b.initialLayout = null) : h = i.getThumbBoundsFn && i.getThumbBoundsFn(m);
            var j = d ? i.hideAnimationDuration : i.showAnimationDuration, k = function () {
                _a("initialZoom"), d ? (f.template.removeAttribute("style"), f.bg.removeAttribute("style")) : (Ea(1), c && (c.style.display = "block"), e.addClass(a, "pswp--animated-in"), Ca("initialZoom" + (d ? "OutEnd" : "InEnd"))), g && g(), Zb = !1
            };
            if (!j || !h || void 0 === h.x)return Ca("initialZoom" + (d ? "Out" : "In")), s = b.initialZoomLevel, La(oa, b.initialPosition), Ga(), a.style.opacity = d ? 0 : 1, Ea(1), void(j ? setTimeout(function () {
                k()
            }, j) : k());
            var n = function () {
                var c = l, g = !f.currItem.src || f.currItem.loadError || i.showHideOpacity;
                b.miniImg && (b.miniImg.style.webkitBackfaceVisibility = "hidden"), d || (s = h.w / b.w, oa.x = h.x, oa.y = h.y - K, f[g ? "template" : "bg"].style.opacity = .001, Ga()), ab("initialZoom"), d && !c && e.removeClass(a, "pswp--animated-in"), g && (d ? e[(c ? "remove" : "add") + "Class"](a, "pswp--animate_opacity") : setTimeout(function () {
                    e.addClass(a, "pswp--animate_opacity")
                }, 30)), Wb = setTimeout(function () {
                    if (Ca("initialZoom" + (d ? "Out" : "In")), d) {
                        var f = h.w / b.w, i = {x: oa.x, y: oa.y}, l = s, m = ia, n = function (b) {
                            1 === b ? (s = f, oa.x = h.x, oa.y = h.y - M) : (s = (f - l) * b + l, oa.x = (h.x - i.x) * b + i.x, oa.y = (h.y - M - i.y) * b + i.y), Ga(), g ? a.style.opacity = 1 - b : Ea(m - b * m)
                        };
                        c ? cb("initialZoom", 0, 1, j, e.easing.cubic.out, n, k) : (n(1), Wb = setTimeout(k, j + 20))
                    } else s = b.initialZoomLevel, La(oa, b.initialPosition), Ga(), Ea(1), g ? a.style.opacity = 1 : Ea(1), Wb = setTimeout(k, j + 20)
                }, d ? 25 : 90)
            };
            n()
        }, cc = {}, dc = [], ec = {
            index: 0,
            errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
            forceProgressiveLoading: !1,
            preload: [1, 1],
            getNumItemsFn: function () {
                return Xb.length
            }
        }, fc = function () {
            return {center: {x: 0, y: 0}, max: {x: 0, y: 0}, min: {x: 0, y: 0}}
        }, gc = function (a, b, c) {
            var d = a.bounds;
            d.center.x = Math.round((cc.x - b) / 2), d.center.y = Math.round((cc.y - c) / 2) + a.vGap.top, d.max.x = b > cc.x ? Math.round(cc.x - b) : d.center.x, d.max.y = c > cc.y ? Math.round(cc.y - c) + a.vGap.top : d.center.y, d.min.x = b > cc.x ? 0 : d.center.x, d.min.y = c > cc.y ? a.vGap.top : d.center.y
        }, hc = function (a, b, c) {
            if (a.src && !a.loadError) {
                var d = !c;
                if (d && (a.vGap || (a.vGap = {
                        top: 0,
                        bottom: 0
                    }), Ca("parseVerticalMargin", a)), cc.x = b.x, cc.y = b.y - a.vGap.top - a.vGap.bottom, d) {
                    var e = cc.x / a.w, f = cc.y / a.h;
                    a.fitRatio = f > e ? e : f;
                    var g = i.scaleMode;
                    "orig" === g ? c = 1 : "fit" === g && (c = a.fitRatio), c > 1 && (c = 1), a.initialZoomLevel = c, a.bounds || (a.bounds = fc())
                }
                if (!c)return;
                return gc(a, a.w * c, a.h * c), d && c === a.initialZoomLevel && (a.initialPosition = a.bounds.center), a.bounds
            }
            return a.w = a.h = 0, a.initialZoomLevel = a.fitRatio = 1, a.bounds = fc(), a.initialPosition = a.bounds.center, a.bounds
        }, ic = function (a, b, c, d, e, g) {
            b.loadError || d && (b.imageAppended = !0, lc(b, d, b === f.currItem && xa), c.appendChild(d), g && setTimeout(function () {
                b && b.loaded && b.placeholder && (b.placeholder.style.display = "none", b.placeholder = null)
            }, 500))
        }, jc = function (a) {
            a.loading = !0, a.loaded = !1;
            var b = a.img = e.createEl("pswp__img", "img"), c = function () {
                a.loading = !1, a.loaded = !0, a.loadComplete ? a.loadComplete(a) : a.img = null, b.onload = b.onerror = null, b = null
            };
            return b.onload = c, b.onerror = function () {
                a.loadError = !0, c()
            }, b.src = a.src, b
        }, kc = function (a, b) {
            return a.src && a.loadError && a.container ? (b && (a.container.innerHTML = ""), a.container.innerHTML = i.errorMsg.replace("%url%", a.src), !0) : void 0
        }, lc = function (a, b, c) {
            if (a.src) {
                b || (b = a.container.lastChild);
                var d = c ? a.w : Math.round(a.w * a.fitRatio), e = c ? a.h : Math.round(a.h * a.fitRatio);
                a.placeholder && !a.loaded && (a.placeholder.style.width = d + "px", a.placeholder.style.height = e + "px"), b.style.width = d + "px", b.style.height = e + "px"
            }
        }, mc = function () {
            if (dc.length) {
                for (var a, b = 0; b < dc.length; b++)a = dc[b], a.holder.index === a.index && ic(a.index, a.item, a.baseDiv, a.img, !1, a.clearPlaceholder);
                dc = []
            }
        };
        ya("Controller", {
            publicMethods: {
                lazyLoadItem: function (a) {
                    a = za(a);
                    var b = $b(a);
                    b && (!b.loaded && !b.loading || x) && (Ca("gettingData", a, b), b.src && jc(b))
                }, initController: function () {
                    e.extend(i, ec, !0), f.items = Xb = c, $b = f.getItemAt, _b = i.getNumItemsFn, ac = i.loop, _b() < 3 && (i.loop = !1), Ba("beforeChange", function (a) {
                        var b, c = i.preload, d = null === a ? !0 : a >= 0, e = Math.min(c[0], _b()),
                            g = Math.min(c[1], _b());
                        for (b = 1; (d ? g : e) >= b; b++)f.lazyLoadItem(m + b);
                        for (b = 1; (d ? e : g) >= b; b++)f.lazyLoadItem(m - b)
                    }), Ba("initialLayout", function () {
                        f.currItem.initialLayout = i.getThumbBoundsFn && i.getThumbBoundsFn(m)
                    }), Ba("mainScrollAnimComplete", mc), Ba("initialZoomInEnd", mc), Ba("destroy", function () {
                        for (var a, b = 0; b < Xb.length; b++)a = Xb[b], a.container && (a.container = null), a.placeholder && (a.placeholder = null), a.img && (a.img = null), a.preloader && (a.preloader = null), a.loadError && (a.loaded = a.loadError = !1);
                        dc = null
                    })
                }, getItemAt: function (a) {
                    return a >= 0 && void 0 !== Xb[a] ? Xb[a] : !1
                }, allowProgressiveImg: function () {
                    return i.forceProgressiveLoading || !G || i.mouseUsed || screen.width > 1200
                }, setContent: function (a, b) {
                    i.loop && (b = za(b));
                    var c = f.getItemAt(a.index);
                    c && (c.container = null);
                    var d, g = f.getItemAt(b);
                    if (!g)return void(a.el.innerHTML = "");
                    Ca("gettingData", b, g), a.index = b, a.item = g;
                    var h = g.container = e.createEl("pswp__zoom-wrap");
                    if (!g.src && g.html && (g.html.tagName ? h.appendChild(g.html) : h.innerHTML = g.html), kc(g), hc(g, pa), !g.src || g.loadError || g.loaded) g.src && !g.loadError && (d = e.createEl("pswp__img", "img"), d.style.opacity = 1, d.src = g.src, lc(g, d), ic(b, g, h, d, !0)); else {
                        if (g.loadComplete = function (c) {
                                if (j) {
                                    if (a && a.index === b) {
                                        if (kc(c, !0))return c.loadComplete = c.img = null, hc(c, pa), Ha(c), void(a.index === m && f.updateCurrZoomItem());
                                        c.imageAppended ? !Zb && c.placeholder && (c.placeholder.style.display = "none", c.placeholder = null) : N.transform && (ea || Zb) ? dc.push({
                                            item: c,
                                            baseDiv: h,
                                            img: c.img,
                                            index: b,
                                            holder: a,
                                            clearPlaceholder: !0
                                        }) : ic(b, c, h, c.img, ea || Zb, !0)
                                    }
                                    c.loadComplete = null, c.img = null, Ca("imageLoadComplete", b, c)
                                }
                            }, e.features.transform) {
                            var k = "pswp__img pswp__img--placeholder";
                            k += g.msrc ? "" : " pswp__img--placeholder--blank";
                            var l = e.createEl(k, g.msrc ? "img" : "");
                            g.msrc && (l.src = g.msrc), lc(g, l), h.appendChild(l), g.placeholder = l
                        }
                        g.loading || jc(g), f.allowProgressiveImg() && (!Yb && N.transform ? dc.push({
                            item: g,
                            baseDiv: h,
                            img: g.img,
                            index: b,
                            holder: a
                        }) : ic(b, g, h, g.img, !0, !0))
                    }
                    Yb || b !== m ? Ha(g) : (da = h.style, bc(g, d || g.img)), a.el.innerHTML = "", a.el.appendChild(h)
                }, cleanSlide: function (a) {
                    a.img && (a.img.onload = a.img.onerror = null), a.loaded = a.loading = a.img = a.imageAppended = !1
                }
            }
        });
        var nc, oc = {}, pc = function (a, b, c) {
            var d = document.createEvent("CustomEvent"),
                e = {origEvent: a, target: a.target, releasePoint: b, pointerType: c || "touch"};
            d.initCustomEvent("pswpTap", !0, !0, e), a.target.dispatchEvent(d)
        };
        ya("Tap", {
            publicMethods: {
                initTap: function () {
                    Ba("firstTouchStart", f.onTapStart), Ba("touchRelease", f.onTapRelease), Ba("destroy", function () {
                        oc = {}, nc = null
                    })
                }, onTapStart: function (a) {
                    a.length > 1 && (clearTimeout(nc), nc = null)
                }, onTapRelease: function (a, b) {
                    if (b && !X && !V && !$a) {
                        var c = b;
                        if (nc && (clearTimeout(nc), nc = null, wb(c, oc)))return void Ca("doubleTap", c);
                        if ("mouse" === b.type)return void pc(a, b, "mouse");
                        var d = a.target.tagName.toUpperCase();
                        if ("BUTTON" === d || e.hasClass(a.target, "pswp__single-tap"))return void pc(a, b);
                        La(oc, c), nc = setTimeout(function () {
                            pc(a, b), nc = null
                        }, 300)
                    }
                }
            }
        });
        var qc;
        ya("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function () {
                    L || (G ? Ba("mouseUsed", function () {
                        f.setupDesktopZoom()
                    }) : f.setupDesktopZoom(!0))
                }, setupDesktopZoom: function (b) {
                    qc = {};
                    var c = "wheel mousewheel DOMMouseScroll";
                    Ba("bindEvents", function () {
                        e.bind(a, c, f.handleMouseWheel)
                    }), Ba("unbindEvents", function () {
                        qc && e.unbind(a, c, f.handleMouseWheel)
                    }), f.mouseZoomedIn = !1;
                    var d, g = function () {
                        f.mouseZoomedIn && (e.removeClass(a, "pswp--zoomed-in"), f.mouseZoomedIn = !1), 1 > s ? e.addClass(a, "pswp--zoom-allowed") : e.removeClass(a, "pswp--zoom-allowed"), h()
                    }, h = function () {
                        d && (e.removeClass(a, "pswp--dragging"), d = !1)
                    };
                    Ba("resize", g), Ba("afterChange", g), Ba("pointerDown", function () {
                        f.mouseZoomedIn && (d = !0, e.addClass(a, "pswp--dragging"))
                    }), Ba("pointerUp", h), b || g()
                }, handleMouseWheel: function (a) {
                    if (s <= f.currItem.fitRatio)return i.modal && (!i.closeOnScroll || $a || U ? a.preventDefault() : E && Math.abs(a.deltaY) > 2 && (l = !0, f.close())), !0;
                    if (a.stopPropagation(), qc.x = 0, "deltaX" in a) 1 === a.deltaMode ? (qc.x = 18 * a.deltaX, qc.y = 18 * a.deltaY) : (qc.x = a.deltaX, qc.y = a.deltaY); else if ("wheelDelta" in a) a.wheelDeltaX && (qc.x = -.16 * a.wheelDeltaX), a.wheelDeltaY ? qc.y = -.16 * a.wheelDeltaY : qc.y = -.16 * a.wheelDelta; else {
                        if (!("detail" in a))return;
                        qc.y = a.detail
                    }
                    Ra(s, !0);
                    var b = oa.x - qc.x, c = oa.y - qc.y;
                    (i.modal || b <= ca.min.x && b >= ca.max.x && c <= ca.min.y && c >= ca.max.y) && a.preventDefault(), f.panTo(b, c)
                }, toggleDesktopZoom: function (b) {
                    b = b || {x: pa.x / 2 + ra.x, y: pa.y / 2 + ra.y};
                    var c = i.getDoubleTapZoom(!0, f.currItem), d = s === c;
                    f.mouseZoomedIn = !d, f.zoomTo(d ? f.currItem.initialZoomLevel : c, b, 333), e[(d ? "remove" : "add") + "Class"](a, "pswp--zoomed-in")
                }
            }
        });
        var rc, sc, tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc = {history: !0, galleryUID: 1}, Ec = function () {
            return Bc.hash.substring(1)
        }, Fc = function () {
            rc && clearTimeout(rc), tc && clearTimeout(tc)
        }, Gc = function () {
            var a = Ec(), b = {};
            if (a.length < 5)return b;
            var c, d = a.split("&");
            for (c = 0; c < d.length; c++)if (d[c]) {
                var e = d[c].split("=");
                e.length < 2 || (b[e[0]] = e[1])
            }
            if (i.galleryPIDs) {
                var f = b.pid;
                for (b.pid = 0, c = 0; c < Xb.length; c++)if (Xb[c].pid === f) {
                    b.pid = c;
                    break
                }
            } else b.pid = parseInt(b.pid, 10) - 1;
            return b.pid < 0 && (b.pid = 0), b
        }, Hc = function () {
            if (tc && clearTimeout(tc), $a || U)return void(tc = setTimeout(Hc, 500));
            uc ? clearTimeout(sc) : uc = !0;
            var a = m + 1, b = $b(m);
            b.hasOwnProperty("pid") && (a = b.pid);
            var c = xc + "&gid=" + i.galleryUID + "&pid=" + a;
            yc || -1 === Bc.hash.indexOf(c) && (Ac = !0);
            var d = Bc.href.split("#")[0] + "#" + c;
            Cc ? "#" + c !== window.location.hash && history[yc ? "replaceState" : "pushState"]("", document.title, d) : yc ? Bc.replace(d) : Bc.hash = c, yc = !0, sc = setTimeout(function () {
                uc = !1
            }, 60)
        };
        ya("History", {
            publicMethods: {
                initHistory: function () {
                    if (e.extend(i, Dc, !0), i.history) {
                        Bc = window.location, Ac = !1, zc = !1, yc = !1, xc = Ec(), Cc = "pushState" in history, xc.indexOf("gid=") > -1 && (xc = xc.split("&gid=")[0], xc = xc.split("?gid=")[0]), Ba("afterChange", f.updateURL), Ba("unbindEvents", function () {
                            e.unbind(window, "hashchange", f.onHashChange)
                        });
                        var a = function () {
                            wc = !0, zc || (Ac ? history.back() : xc ? Bc.hash = xc : Cc ? history.pushState("", document.title, Bc.pathname + Bc.search) : Bc.hash = ""), Fc()
                        };
                        Ba("unbindEvents", function () {
                            l && a()
                        }), Ba("destroy", function () {
                            wc || a()
                        }), Ba("firstUpdate", function () {
                            m = Gc().pid
                        });
                        var b = xc.indexOf("pid=");
                        b > -1 && (xc = xc.substring(0, b), "&" === xc.slice(-1) && (xc = xc.slice(0, -1))), setTimeout(function () {
                            j && e.bind(window, "hashchange", f.onHashChange)
                        }, 40)
                    }
                }, onHashChange: function () {
                    return Ec() === xc ? (zc = !0, void f.close()) : void(uc || (vc = !0, f.goTo(Gc().pid), vc = !1))
                }, updateURL: function () {
                    Fc(), vc || (yc ? rc = setTimeout(Hc, 800) : Hc())
                }
            }
        }), e.extend(f, db)
    };
    return a
});
!function (a, b) {
    "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipeUI_Default = b()
}(this, function () {
    "use strict";
    var a = function (a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = this, w = !1, x = !0, y = !0, z = {
            barsSize: {top: 44, bottom: "auto"},
            closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
            timeToIdle: 4e3,
            timeToIdleOutside: 1e3,
            loadingIndicatorDelay: 1e3,
            addCaptionHTMLFn: function (a, b) {
                return a.title ? (b.children[0].innerHTML = a.title, !0) : (b.children[0].innerHTML = "", !1)
            },
            closeEl: !0,
            captionEl: !0,
            fullscreenEl: !0,
            zoomEl: !0,
            shareEl: !0,
            counterEl: !0,
            arrowEl: !0,
            preloaderEl: !0,
            tapToClose: !1,
            tapToToggleControls: !0,
            clickToCloseNonZoomable: !0,
            shareButtons: [{
                id: "facebook",
                label: "Share on Facebook",
                url: "https://www.facebook.com/dialog/share?app_id=871247336313831&amp;href={{url}}&amp;picture={{raw_image_url}}"
            }, {
                id: "twitter",
                label: "Tweet",
                url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
            }, {
                id: "pinterest",
                label: "Pin it",
                url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
            }, {id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0}],
            getImageURLForShare: function () {
                var b = a.currItem.src;
                if (!b.startsWith("http")) {
                    var c = this.getPageURLForShare();
                    c = c.substr(0, c.lastIndexOf("/")), b = c + "/" + b
                }
                return b || ""
            },
            getPageURLForShare: function () {
                return window.location.href
            },
            getTextForShare: function () {
                return a.currItem.title || ""
            },
            indexIndicatorSep: " / ",
            fitControlsWidth: 1200
        }, A = function (a) {
            if (r)return !0;
            a = a || window.event, q.timeToIdle && q.mouseUsed && !k && K();
            for (var c, d, e = a.target || a.srcElement, f = e.getAttribute("class") || "", g = 0; g < S.length; g++)c = S[g], c.onTap && f.indexOf("pswp__" + c.name) > -1 && (c.onTap(), d = !0);
            if (d) {
                a.stopPropagation && a.stopPropagation(), r = !0;
                var h = b.features.isOldAndroid ? 600 : 30;
                s = setTimeout(function () {
                    r = !1
                }, h)
            }
        }, B = function () {
            return !a.likelyTouchDevice || q.mouseUsed || screen.width > q.fitControlsWidth
        }, C = function (a, c, d) {
            b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c)
        }, D = function () {
            var a = 1 === q.getNumItemsFn();
            a !== p && (C(d, "ui--one-slide", a), p = a)
        }, E = function () {
            C(i, "share-modal--hidden", y)
        }, F = function () {
            return y = !y, y ? (b.removeClass(i, "pswp__share-modal--fade-in"), setTimeout(function () {
                y && E()
            }, 300)) : (E(), setTimeout(function () {
                y || b.addClass(i, "pswp__share-modal--fade-in")
            }, 30)), y || H(), !1
        }, G = function (b) {
            b = b || window.event;
            var c = b.target || b.srcElement;
            return a.shout("shareLinkClick", b, c), !!c.href && (!!c.hasAttribute("download") || (window.open(c.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), y || F(), !1))
        }, H = function () {
            for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++)a = q.shareButtons[g], c = q.getImageURLForShare(a), d = q.getPageURLForShare(a), e = q.getTextForShare(a), b = a.url.replace("{{url}}", encodeURIComponent(d)).replace("{{image_url}}", encodeURIComponent(c)).replace("{{raw_image_url}}", c).replace("{{text}}", encodeURIComponent(e)), f += '<a href="' + b + '" target="_blank" class="pswp__share--' + a.id + '"' + (a.download ? "download" : "") + ">" + a.label + "</a>", q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
            i.children[0].innerHTML = f, i.children[0].onclick = G
        }, I = function (a) {
            for (var c = 0; c < q.closeElClasses.length; c++)if (b.hasClass(a, "pswp__" + q.closeElClasses[c]))return !0
        }, J = 0, K = function () {
            clearTimeout(u), J = 0, k && v.setIdle(!1)
        }, L = function (a) {
            a = a ? a : window.event;
            var b = a.relatedTarget || a.toElement;
            b && "HTML" !== b.nodeName || (clearTimeout(u), u = setTimeout(function () {
                v.setIdle(!0)
            }, q.timeToIdleOutside))
        }, M = function () {
            q.fullscreenEl && !b.features.isOldAndroid && (c || (c = v.getFullscreenAPI()), c ? (b.bind(document, c.eventK, v.updateFullscreen), v.updateFullscreen(), b.addClass(a.template, "pswp--supports-fs")) : b.removeClass(a.template, "pswp--supports-fs"))
        }, N = function () {
            q.preloaderEl && (O(!0), l("beforeChange", function () {
                clearTimeout(o), o = setTimeout(function () {
                    a.currItem && a.currItem.loading ? (!a.allowProgressiveImg() || a.currItem.img && !a.currItem.img.naturalWidth) && O(!1) : O(!0)
                }, q.loadingIndicatorDelay)
            }), l("imageLoadComplete", function (b, c) {
                a.currItem === c && O(!0)
            }))
        }, O = function (a) {
            n !== a && (C(m, "preloader--active", !a), n = a)
        }, P = function (a) {
            var c = a.vGap;
            if (B()) {
                var g = q.barsSize;
                if (q.captionEl && "auto" === g.bottom)if (f || (f = b.createEl("pswp__caption pswp__caption--fake"), f.appendChild(b.createEl("pswp__caption__center")), d.insertBefore(f, e), b.addClass(d, "pswp__ui--fit")), q.addCaptionHTMLFn(a, f, !0)) {
                    var h = f.clientHeight;
                    c.bottom = parseInt(h, 10) || 44
                } else c.bottom = g.top; else c.bottom = "auto" === g.bottom ? 0 : g.bottom;
                c.top = g.top
            } else c.top = c.bottom = 0
        }, Q = function () {
            q.timeToIdle && l("mouseUsed", function () {
                b.bind(document, "mousemove", K), b.bind(document, "mouseout", L), t = setInterval(function () {
                    J++, 2 === J && v.setIdle(!0)
                }, q.timeToIdle / 2)
            })
        }, R = function () {
            l("onVerticalDrag", function (a) {
                x && .95 > a ? v.hideControls() : !x && a >= .95 && v.showControls()
            });
            var a;
            l("onPinchClose", function (b) {
                x && .9 > b ? (v.hideControls(), a = !0) : a && !x && b > .9 && v.showControls()
            }), l("zoomGestureEnded", function () {
                a = !1, a && !x && v.showControls()
            })
        }, S = [{
            name: "caption", option: "captionEl", onInit: function (a) {
                e = a
            }
        }, {
            name: "share-modal", option: "shareEl", onInit: function (a) {
                i = a
            }, onTap: function () {
                F()
            }
        }, {
            name: "button--share", option: "shareEl", onInit: function (a) {
                h = a
            }, onTap: function () {
                F()
            }
        }, {name: "button--zoom", option: "zoomEl", onTap: a.toggleDesktopZoom}, {
            name: "counter",
            option: "counterEl",
            onInit: function (a) {
                g = a
            }
        }, {name: "button--close", option: "closeEl", onTap: a.close}, {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: a.prev
        }, {name: "button--arrow--right", option: "arrowEl", onTap: a.next}, {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function () {
                c.isFullscreen() ? c.exit() : c.enter()
            }
        }, {
            name: "preloader", option: "preloaderEl", onInit: function (a) {
                m = a
            }
        }], T = function () {
            var a, c, e, f = function (d) {
                if (d)for (var f = d.length, g = 0; f > g; g++) {
                    a = d[g], c = a.className;
                    for (var h = 0; h < S.length; h++)e = S[h], c.indexOf("pswp__" + e.name) > -1 && (q[e.option] ? (b.removeClass(a, "pswp__element--disabled"), e.onInit && e.onInit(a)) : b.addClass(a, "pswp__element--disabled"))
                }
            };
            f(d.children);
            var g = b.getChildByClass(d, "pswp__top-bar");
            g && f(g.children)
        };
        v.init = function () {
            b.extend(a.options, z, !0), q = a.options, d = b.getChildByClass(a.scrollWrap, "pswp__ui"), l = a.listen, R(), l("beforeChange", v.update), l("doubleTap", function (b) {
                var c = a.currItem.initialZoomLevel;
                a.getZoomLevel() !== c ? a.zoomTo(c, b, 333) : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333)
            }), l("preventDragEvent", function (a, b, c) {
                var d = a.target || a.srcElement;
                d && d.getAttribute("class") && a.type.indexOf("mouse") > -1 && (d.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) && (c.prevent = !1)
            }), l("bindEvents", function () {
                b.bind(d, "pswpTap click", A), b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap), a.likelyTouchDevice || b.bind(a.scrollWrap, "mouseover", v.onMouseOver)
            }), l("unbindEvents", function () {
                y || F(), t && clearInterval(t), b.unbind(document, "mouseout", L), b.unbind(document, "mousemove", K), b.unbind(d, "pswpTap click", A), b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap), b.unbind(a.scrollWrap, "mouseover", v.onMouseOver), c && (b.unbind(document, c.eventK, v.updateFullscreen), c.isFullscreen() && (q.hideAnimationDuration = 0, c.exit()), c = null)
            }), l("destroy", function () {
                q.captionEl && (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")), i && (i.children[0].onclick = null), b.removeClass(d, "pswp__ui--over-close"), b.addClass(d, "pswp__ui--hidden"), v.setIdle(!1)
            }), q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"), l("initialZoomIn", function () {
                q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden")
            }), l("initialZoomOut", function () {
                b.addClass(d, "pswp__ui--hidden")
            }), l("parseVerticalMargin", P), T(), q.shareEl && h && i && (y = !0), D(), Q(), M(), N()
        }, v.setIdle = function (a) {
            k = a, C(d, "ui--idle", a)
        }, v.update = function () {
            x && a.currItem ? (v.updateIndexIndicator(), q.captionEl && (q.addCaptionHTMLFn(a.currItem, e), C(e, "caption--empty", !a.currItem.title)), w = !0) : w = !1, y || F(), D()
        }, v.updateFullscreen = function (d) {
            d && setTimeout(function () {
                a.setScrollOffset(0, b.getScrollY())
            }, 50), b[(c.isFullscreen() ? "add" : "remove") + "Class"](a.template, "pswp--fs")
        }, v.updateIndexIndicator = function () {
            q.counterEl && (g.innerHTML = a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn())
        }, v.onGlobalTap = function (c) {
            c = c || window.event;
            var d = c.target || c.srcElement;
            if (!r)if (c.detail && "mouse" === c.detail.pointerType) {
                if (I(d))return void a.close();
                b.hasClass(d, "pswp__img") && (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio ? q.clickToCloseNonZoomable && a.close() : a.toggleDesktopZoom(c.detail.releasePoint))
            } else if (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()), q.tapToClose && (b.hasClass(d, "pswp__img") || I(d)))return void a.close()
        }, v.onMouseOver = function (a) {
            a = a || window.event;
            var b = a.target || a.srcElement;
            C(d, "ui--over-close", I(b))
        }, v.hideControls = function () {
            b.addClass(d, "pswp__ui--hidden"), x = !1
        }, v.showControls = function () {
            x = !0, w || v.update(), b.removeClass(d, "pswp__ui--hidden")
        }, v.supportsFullscreen = function () {
            var a = document;
            return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen)
        }, v.getFullscreenAPI = function () {
            var b, c = document.documentElement, d = "fullscreenchange";
            return c.requestFullscreen ? b = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: d
            } : c.mozRequestFullScreen ? b = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + d
            } : c.webkitRequestFullscreen ? b = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + d
            } : c.msRequestFullscreen && (b = {
                    enterK: "msRequestFullscreen",
                    exitK: "msExitFullscreen",
                    elementK: "msFullscreenElement",
                    eventK: "MSFullscreenChange"
                }), b && (b.enter = function () {
                return j = q.closeOnScroll, q.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? a.template[this.enterK]() : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }, b.exit = function () {
                return q.closeOnScroll = j, document[this.exitK]()
            }, b.isFullscreen = function () {
                return document[this.elementK]
            }), b
        }
    };
    return a
});
(function () {
    var t;
    t = "ontouchstart" in window, function (o, e, n) {
        var s;
        return s = function () {
            function s(t, s) {
                this.options = o.extend(!1, {}, this.Defaults, s), this.$element = o(t), this.$clone = null, this.$win = o(n), this.$doc = o(e), this.currentLayout = this.options.layout, this.loaded = !1, this.focusOnHover = this.options.focusOnHover, this.focusTimer = !1, this.cloneTimer = !1, this.isStuck = !1, this.initialize()
            }

            return s.prototype.Defaults = {
                layout: "rd-navbar-static",
                deviceLayout: "rd-navbar-fixed",
                focusOnHover: !0,
                focusOnHoverTimeout: 800,
                linkedElements: ["html"],
                domAppend: !0,
                stickUp: !0,
                stickUpClone: !0,
                stickUpOffset: "100%",
                anchorNavSpeed: 400,
                anchorNavOffset: 0,
                anchorNavEasing: "swing",
                autoHeight: !0,
                responsive: {
                    0: {
                        layout: "rd-navbar-fixed",
                        deviceLayout: "rd-navbar-fixed",
                        focusOnHover: !1,
                        stickUp: !1
                    },
                    992: {layout: "rd-navbar-static", deviceLayout: "rd-navbar-static", focusOnHover: !0, stickUp: !0}
                },
                callbacks: {
                    onToggleSwitch: !1,
                    onToggleClose: !1,
                    onDomAppend: !1,
                    onDropdownOver: !1,
                    onDropdownOut: !1,
                    onDropdownToggle: !1,
                    onDropdownClose: !1,
                    onStuck: !1,
                    onUnstuck: !1,
                    onAnchorChange: !1
                }
            }, s.prototype.initialize = function () {
                var o;
                return o = this, o.$element.addClass("rd-navbar").addClass(o.options.layout), t && o.$element.addClass("rd-navbar--is-touch"), o.setDataAPI(o), o.options.domAppend && o.createNav(o), o.options.stickUpClone && o.createClone(o), o.$element.addClass("rd-navbar-original"), o.addAdditionalClassToToggles(".rd-navbar-original", "toggle-original", "toggle-original-elements"), o.applyHandlers(o), o.offset = o.$element.offset().top, o.height = o.$element.outerHeight(), o.loaded = !0, o
            }, s.prototype.resize = function (e, n) {
                var s, a;
                return a = t ? e.getOption("deviceLayout") : e.getOption("layout"), s = e.$element.add(e.$clone), a === e.currentLayout && e.loaded || (e.switchClass(s, e.currentLayout, a), null != e.options.linkedElements && o.grep(e.options.linkedElements, function (t, o) {
                    return e.switchClass(t, e.currentLayout + "-linked", a + "-linked")
                }), e.currentLayout = a), e.focusOnHover = e.getOption("focusOnHover"), e
            }, s.prototype.stickUp = function (t, e) {
                var n, s, a, r, i;
                return s = t.getOption("stickUp"), n = t.$doc.scrollTop(), r = null != t.$clone ? t.$clone : t.$element, a = t.getOption("stickUpOffset"), i = "string" == typeof a ? a.indexOf("%") > 0 ? parseFloat(a) * t.height / 100 : parseFloat(a) : a, s ? (n >= i && !t.isStuck || i > n && t.isStuck) && (t.$element.add(t.$clone).find("[data-rd-navbar-toggle]").each(function () {
                        o.proxy(t.closeToggle, this)(t, !1)
                    }).end().find(".rd-navbar-submenu").removeClass("opened").removeClass("focus"), n >= i && !t.isStuck && !t.$element.hasClass("rd-navbar-fixed") ? ("resize" === e.type ? t.switchClass(r, "", "rd-navbar--is-stuck") : r.addClass("rd-navbar--is-stuck"), t.isStuck = !0, t.options.callbacks.onStuck && t.options.callbacks.onStuck.call(t)) : ("resize" === e.type ? t.switchClass(r, "rd-navbar--is-stuck", "") : r.removeClass("rd-navbar--is-stuck").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", o.proxy(t.resizeWrap, t, e)), t.isStuck = !1, t.options.callbacks.onUnstuck && t.options.callbacks.onUnstuck.call(t))) : t.isStuck && (t.switchClass(r, "rd-navbar--is-stuck", ""), t.isStuck = !1, t.resizeWrap(e)), t
            }, s.prototype.resizeWrap = function (t) {
                var o, e;
                return e = this, null != e.$clone || e.isStuck ? void 0 : (o = e.$element.parent(), e.getOption("autoHeight") ? (e.height = e.$element.outerHeight(), "resize" === t.type ? (o.addClass("rd-navbar--no-transition").css("height", e.height), o[0].offsetHeight, o.removeClass("rd-navbar--no-transition")) : o.css("height", e.height)) : void o.css("height", "auto"))
            }, s.prototype.createNav = function (t) {
                return t.$element.find(".rd-navbar-dropdown, .rd-navbar-megamenu").each(function () {
                    var t, e;
                    return t = o(this), e = this.getBoundingClientRect(), e.left + t.outerWidth() >= n.innerWidth - 10 ? this.className += " rd-navbar-open-left" : e.left - t.outerWidth() <= 10 && (this.className += " rd-navbar-open-right"), t.hasClass("rd-navbar-megamenu") ? t.parent().addClass("rd-navbar--has-megamenu") : t.parent().addClass("rd-navbar--has-dropdown")
                }).parents("li").addClass("rd-navbar-submenu").append(o("<span/>", {"class": "rd-navbar-submenu-toggle"})), t.options.callbacks.onDomAppend && t.options.callbacks.onDomAppend.call(this), t
            }, s.prototype.createClone = function (t) {
                return t.$clone = t.$element.clone().insertAfter(t.$element).addClass("rd-navbar--is-clone"), t.addAdditionalClassToToggles(".rd-navbar--is-clone", "toggle-cloned", "toggle-cloned-elements"), t
            }, s.prototype.closeToggle = function (t, e) {
                var n, s, a, r, i, l, c;
                return s = o(e.target), i = !1, l = this.getAttribute("data-rd-navbar-toggle"), t.options.stickUpClone && t.isStuck ? (r = ".toggle-cloned", a = ".toggle-cloned-elements", c = !s.hasClass("toggle-cloned")) : (r = ".toggle-original", a = ".toggle-original-elements", c = !s.hasClass("toggle-original")), e.target !== this && !s.parents(r + "[data-rd-navbar-toggle]").length && !s.parents(a).length && l && c && (n = o(this).parents("body").find(l).add(o(this).parents(".rd-navbar")[0]), n.each(function () {
                    return i ? void 0 : i = (e.target === this || o.contains(this, e.target)) === !0
                }), i || (n.add(this).removeClass("active"), t.options.callbacks.onToggleClose && t.options.callbacks.onToggleClose.call(this, t))), this
            }, s.prototype.switchToggle = function (t, e) {
                var n, s, a;
                return e.preventDefault(), o(this).hasClass("toggle-cloned") ? (a = ".rd-navbar--is-clone", n = ".toggle-cloned-elements") : (a = ".rd-navbar-original", n = ".toggle-original-elements"), (s = this.getAttribute("data-rd-navbar-toggle")) && (o(a + " [data-rd-navbar-toggle]").not(this).each(function () {
                    var t;
                    return (t = this.getAttribute("data-rd-navbar-toggle")) ? o(this).parents("body").find(a + " " + t + n).add(this).add(o.inArray(".rd-navbar", t.split(/\s*,\s*/i)) > -1 ? o(this).parents("body")[0] : !1).removeClass("active") : void 0
                }), o(this).parents("body").find(a + " " + s + n).add(this).add(o.inArray(".rd-navbar", s.split(/\s*,\s*/i)) > -1 ? o(this).parents(".rd-navbar")[0] : !1).toggleClass("active")), t.options.callbacks.onToggleSwitch && t.options.callbacks.onToggleSwitch.call(this, t), this
            }, s.prototype.dropdownOver = function (t, e) {
                var n;
                return t.focusOnHover && (n = o(this), clearTimeout(e), n.addClass("focus").siblings().removeClass("opened").each(t.dropdownUnfocus), t.options.callbacks.onDropdownOver && t.options.callbacks.onDropdownOver.call(this, t)), this
            }, s.prototype.dropdownTouch = function (t, e) {
                var n, s;
                if (n = o(this), clearTimeout(e), t.focusOnHover) {
                    if (s = !1, n.hasClass("focus") && (s = !0), !s)return n.addClass("focus").siblings().removeClass("opened").each(t.dropdownUnfocus), !1;
                    t.options.callbacks.onDropdownOver && t.options.callbacks.onDropdownOver.call(this, t)
                }
                return this
            }, s.prototype.dropdownOut = function (t, e) {
                var n;
                return t.focusOnHover && (n = o(this), n.one("mouseenter.navbar", function () {
                    return clearTimeout(e)
                }), clearTimeout(e), e = setTimeout(o.proxy(t.dropdownUnfocus, this, t), t.options.focusOnHoverTimeout), t.options.callbacks.onDropdownOut && t.options.callbacks.onDropdownOut.call(this, t)), this
            }, s.prototype.dropdownUnfocus = function (t) {
                var e;
                return e = o(this), e.find("li.focus").add(this).removeClass("focus"), this
            }, s.prototype.dropdownClose = function (t, e) {
                var n;
                return e.target === this || o(e.target).parents(".rd-navbar-submenu").length || (n = o(this), n.find("li.focus").add(this).removeClass("focus").removeClass("opened"), t.options.callbacks.onDropdownClose && t.options.callbacks.onDropdownClose.call(this, t)), this
            }, s.prototype.dropdownToggle = function (t) {
                return o(this).toggleClass("opened").siblings().removeClass("opened"), t.options.callbacks.onDropdownToggle && t.options.callbacks.onDropdownToggle.call(this, t), this
            }, s.prototype.goToAnchor = function (t, e) {
                var n, s;
                return s = this.hash, n = o(s), n.length && (e.preventDefault(), o("html, body").stop().animate({scrollTop: n.offset().top + t.getOption("anchorNavOffset") + 1}, t.getOption("anchorNavSpeed"), t.getOption("anchorNavEasing"), function () {
                    return t.changeAnchor(s)
                })), this
            }, s.prototype.activateAnchor = function (t) {
                var e, n, s, a, r, i, l, c, d, p, h, u;
                if (a = this, h = a.$doc.scrollTop(), u = a.$win.height(), r = a.$doc.height(), p = a.getOption("anchorNavOffset"), h + u > r - 50)return e = o('[data-type="anchor"]').last(), e.length && e.offset().top >= h && (i = "#" + e.attr("id"), n = o('.rd-navbar-nav a[href^="' + i + '"]').parent(), n.hasClass("active") || (n.addClass("active").siblings().removeClass("active"), a.options.callbacks.onAnchorChange && a.options.callbacks.onAnchorChange.call(e[0], a))), e;
                d = o('.rd-navbar-nav a[href^="#"]').get();
                for (l in d)c = d[l], s = o(c), i = s.attr("href"), e = o(i), e.length && e.offset().top + p <= h && e.offset().top + e.outerHeight() > h && (s.parent().addClass("active").siblings().removeClass("active"), a.options.callbacks.onAnchorChange && a.options.callbacks.onAnchorChange.call(e[0], a));
                return null
            }, s.prototype.getAnchor = function () {
                return history && history.state ? history.state.id : null
            }, s.prototype.changeAnchor = function (t) {
                return history && (history.state && history.state.id !== t ? history.replaceState({anchorId: t}, null, t) : history.pushState({anchorId: t}, null, t)), this
            }, s.prototype.applyHandlers = function (t) {
                return null != t.options.responsive && t.$win.on("resize.navbar", o.proxy(t.resize, t.$win[0], t)).on("resize.navbar", o.proxy(t.resizeWrap, t)).on("resize.navbar", o.proxy(t.stickUp, null != t.$clone ? t.$clone : t.$element, t)).on("orientationchange.navbar", o.proxy(t.resize, t.$win[0], t)).trigger("resize.navbar"), t.$doc.on("scroll.navbar", o.proxy(t.stickUp, null != t.$clone ? t.$clone : t.$element, t)).on("scroll.navbar", o.proxy(t.activateAnchor, t)), t.$element.add(t.$clone).find("[data-rd-navbar-toggle]").each(function () {
                    var e;
                    return e = o(this), e.on("click", o.proxy(t.switchToggle, this, t)), e.parents("body").on("click", o.proxy(t.closeToggle, this, t))
                }), t.$element.add(t.$clone).find(".rd-navbar-submenu").each(function () {
                    var e, n;
                    return e = o(this), n = e.parents(".rd-navbar--is-clone").length ? t.cloneTimer : t.focusTimer, e.on("mouseleave.navbar", o.proxy(t.dropdownOut, this, t, n)), e.find("> a").on("mouseenter.navbar", o.proxy(t.dropdownOver, this, t, n)), e.find("> a").on("touchstart.navbar", o.proxy(t.dropdownTouch, this, t, n)), e.find("> .rd-navbar-submenu-toggle").on("click", o.proxy(t.dropdownToggle, this, t)), e.parents("body").on("click", o.proxy(t.dropdownClose, this, t))
                }), t.$element.add(t.$clone).find('.rd-navbar-nav a[href^="#"]').each(function () {
                    return o(this).on("click", o.proxy(t.goToAnchor, this, t))
                }), t
            }, s.prototype.switchClass = function (t, e, n) {
                var s;
                return s = t instanceof jQuery ? t : o(t), s.addClass("rd-navbar--no-transition").removeClass(e).addClass(n), s[0].offsetHeight, s.removeClass("rd-navbar--no-transition")
            }, s.prototype.setDataAPI = function (t) {
                var o, e, n, s, a, r;
                for (o = ["-", "-xs-", "-sm-", "-md-", "-lg-", "-xl-"], r = [0, 480, 768, 992, 1200, 1800], e = n = 0, s = r.length; s > n; e = ++n)a = r[e], this.$element.attr("data" + o[e] + "layout") && (this.options.responsive[r[e]] || (this.options.responsive[r[e]] = {}), this.options.responsive[r[e]].layout = this.$element.attr("data" + o[e] + "layout")), this.$element.attr("data" + o[e] + "device-layout") && (this.options.responsive[r[e]] || (this.options.responsive[r[e]] = {}), this.options.responsive[r[e]].deviceLayout = this.$element.attr("data" + o[e] + "device-layout")), this.$element.attr("data" + o[e] + "hover-on") && (this.options.responsive[r[e]] || (this.options.responsive[r[e]] = {}), this.options.responsive[r[e]].focusOnHover = "true" === this.$element.attr("data" + o[e] + "hover-on")), this.$element.attr("data" + o[e] + "stick-up") && (this.options.responsive[r[e]] || (this.options.responsive[r[e]] = {}), this.options.responsive[r[e]].stickUp = "true" === this.$element.attr("data" + o[e] + "stick-up")), this.$element.attr("data" + o[e] + "auto-height") && (this.options.responsive[r[e]] || (this.options.responsive[r[e]] = {}), this.options.responsive[r[e]].autoHeight = "true" === this.$element.attr("data" + o[e] + "auto-height")), this.$element.attr("data" + o[e] + "stick-up-offset") && (this.options.responsive[r[e]] || (this.options.responsive[r[e]] = {}), this.options.responsive[r[e]].stickUpOffset = this.$element.attr("data" + o[e] + "stick-up-offset"))
            }, s.prototype.getOption = function (t) {
                var o, e;
                for (o in this.options.responsive)o <= n.innerWidth && (e = o);
                return null != this.options.responsive && null != this.options.responsive[e][t] ? this.options.responsive[e][t] : this.options[t]
            }, s.prototype.addAdditionalClassToToggles = function (t, e, n) {
                return o(t).find("[data-rd-navbar-toggle]").each(function () {
                    var s;
                    return o(this).addClass(e), s = this.getAttribute("data-rd-navbar-toggle"), o(this).parents("body").find(t).find(s).addClass(n)
                })
            }, s
        }(), o.fn.extend({
            RDNavbar: function (t) {
                var e;
                return e = o(this), e.data("RDNavbar") ? void 0 : e.data("RDNavbar", new s(this, t))
            }
        }), n.RDNavbar = s
    }(window.jQuery, document, window), "undefined" != typeof module && null !== module ? module.exports = window.RDNavbar : "function" == typeof define && define.amd && define(["jquery"], function () {
            "use strict";
            return window.RDNavbar
        })
}).call(this);
!function (o) {
    o.fn.UItoTop = function (n) {
        var e = {
            text: "",
            min: 500,
            scrollSpeed: 800,
            containerID: "ui-to-top",
            containerClass: "ui-to-top fa fa-angle-up",
            easingType: "easeIn"
        }, t = o.extend(e, n), i = "#" + t.containerID;
        o("body").append('<a href="#" id="' + t.containerID + '" class="' + t.containerClass + '" >' + t.text + "</a>"), o(i).click(function () {
            return o("html, body").stop().animate({scrollTop: 0}, t.scrollSpeed, t.easingType), !1
        }), o(window).scroll(function () {
            var n = o(window).scrollTop();
            "undefined" == typeof document.body.style.maxHeight && o(i).css({
                position: "absolute",
                top: o(window).scrollTop() + o(window).height() - 50
            }), n > t.min ? o(i).stop(!0, !0).addClass("active") : o(i).removeClass("active")
        })
    }
}(jQuery);
!function (o) {
    o.fn.scrollTo = function (e) {
        function n(e) {
            if (e.preventDefault(), a.hasClass("toTop"))return o("html, body").stop().animate({scrollTop: 0}, s.scrollSpeed), o(a).removeClass("toTop"), !1;
            for (var n = 0; n < r.length; n++)if (window.scrollY < r[n].offsetTop + r[n].offsetHeight) {
                var t = r[n + 1].offsetTop;
                return t > o(document).height() - window.innerHeight && !a.hasClass("toTop") && a.addClass("toTop"), void 0 === r[n + 2] && a.addClass("toTop"), o("html, body").stop().animate({scrollTop: t}, s.scrollSpeed, function () {
                    void 0 === r[n + 2] && a.addClass("toTop")
                }), !1
            }
            return !1
        }

        var t = {containerID: "scrollTo", containerHoverID: "scrollTopHover", scrollSpeed: 1200, easingType: "linear"},
            s = o.extend(t, e), l = o(window), r = this;
        o("body").append('<a href="#" id="' + s.containerID + '" class="' + s.containerClass + '"></a>');
        var a = o("#" + s.containerID);
        a.hide().on("click", n), l.on("scroll", function (e) {
            window.scrollY > window.innerHeight ? o(a).fadeIn() : o(a).fadeOut(), window.scrollY > r[r.length - 1].offsetTop - 1 ? a.addClass("toTop") : a.removeClass("toTop"), window.scrollY === o(document).height() - window.innerHeight && a.addClass("toTop")
        })
    }
}(jQuery);
!function (t) {
    t.fn.extend({
        easyResponsiveTabs: function (a) {
            var e = {
                    type: "default", width: "auto", fit: !0, closed: !1, activate: function () {
                    }
                }, a = t.extend(e, a), s = a, i = s.type, n = s.fit, r = s.width, c = "vertical", o = "accordion",
                d = window.location.hash, l = !(!window.history || !history.replaceState);
            t(this).bind("tabactivate", function (t, e) {
                "function" == typeof a.activate && a.activate.call(e, t)
            }), this.each(function () {
                function e() {
                    i == c && s.addClass("resp-vtabs"), 1 == n && s.css({width: "100%"}), i == o && (s.addClass("resp-easy-accordion"), s.find(".resp-tabs-list").css("display", "none"))
                }

                var s = t(this), p = s.find("ul.resp-tabs-list"), b = s.attr("id");
                s.find("ul.resp-tabs-list li").addClass("resp-tab-item"), s.css({
                    display: "block",
                    width: r
                }), s.find(".resp-tabs-container > div").addClass("resp-tab-content"), e();
                var v;
                s.find(".resp-tab-content").before("<div class='resp-accordion' role='tab'><span class='resp-arrow'></span></div>");
                var f = 0;
                s.find(".resp-accordion").each(function () {
                    v = t(this);
                    var a = s.find(".resp-tab-item:eq(" + f + ")"), e = s.find(".resp-accordion:eq(" + f + ")");
                    e.append(a.html()), e.data(a.data()), v.attr("aria-controls", "tab_item-" + f), f++
                });
                var h, u = 0;
                s.find(".resp-tab-item").each(function () {
                    $tabItem = t(this), $tabItem.attr("aria-controls", "tab_item-" + u), $tabItem.attr("role", "tab");
                    var a = 0;
                    s.find(".resp-tab-content").each(function () {
                        h = t(this), h.attr("aria-labelledby", "tab_item-" + a), a++
                    }), u++
                });
                var C = 0;
                if ("" != d) {
                    var m = d.match(new RegExp(b + "([0-9]+)"));
                    null !== m && 2 === m.length && (C = parseInt(m[1], 10) - 1, C > u && (C = 0))
                }
                t(s.find(".resp-tab-item")[C]).addClass("resp-tab-active"), a.closed === !0 || "accordion" === a.closed && !p.is(":visible") || "tabs" === a.closed && p.is(":visible") ? t(s.find(".resp-tab-content")[C]).addClass("resp-tab-content-active resp-accordion-closed") : (t(s.find(".resp-accordion")[C]).addClass("resp-tab-active"), t(s.find(".resp-tab-content")[C]).addClass("resp-tab-content-active").attr("style", "display:block")), s.find("[role=tab]").each(function () {
                    var a = t(this);
                    a.click(function () {
                        var a = t(this), e = a.attr("aria-controls");
                        if (a.hasClass("resp-accordion") && a.hasClass("resp-tab-active"))return s.find(".resp-tab-content-active").slideUp("", function () {
                            t(this).addClass("resp-accordion-closed")
                        }), a.removeClass("resp-tab-active"), !1;
                        if (!a.hasClass("resp-tab-active") && a.hasClass("resp-accordion") ? (s.find(".resp-tab-active").removeClass("resp-tab-active"), s.find(".resp-tab-content-active").slideUp().removeClass("resp-tab-content-active resp-accordion-closed"), s.find("[aria-controls=" + e + "]").addClass("resp-tab-active"), s.find(".resp-tab-content[aria-labelledby = " + e + "]").slideDown().addClass("resp-tab-content-active")) : (s.find(".resp-tab-active").removeClass("resp-tab-active"), s.find(".resp-tab-content-active").removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"), s.find("[aria-controls=" + e + "]").addClass("resp-tab-active"), s.find(".resp-tab-content[aria-labelledby = " + e + "]").addClass("resp-tab-content-active").attr("style", "display:block")), a.trigger("tabactivate", a), t(window).trigger("lookup.unveil"), l) {
                            var i = window.location.hash, n = b + (parseInt(e.substring(9), 10) + 1).toString();
                            if ("" != i) {
                                var r = new RegExp(b + "[0-9]+");
                                n = null != i.match(r) ? i.replace(r, n) : i + "|" + n
                            } else n = "#" + n;
                            history.replaceState(null, null, n)
                        }
                    })
                }), t(window).resize(function () {
                    s.find(".resp-accordion-closed").removeAttr("style")
                })
            })
        }
    })
}(jQuery);
if ("undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), +function (a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b)if (void 0 !== a.style[c])return {end: b[c]};
        return !1
    }

    a.fn.emulateTransitionEnd = function (b) {
        var c = !1, d = this;
        a(this).one("bsTransitionEnd", function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }

    var c = '[data-dismiss="alert"]', d = function (b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }

        var e = a(this), f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }

    var c = function (b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.6", c.DEFAULTS = {loadingText: "loading..."}, c.prototype.setState = function (b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function () {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }

    var c = function (b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function (a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b), d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap)return b;
        var e = "prev" == a ? -1 : 1, f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function (a) {
        var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval,
            h = "next" == b ? "left" : "right", i = this;
        if (f.hasClass("active"))return this.sliding = !1;
        var j = f[0], k = a.Event("slide.bs.carousel", {relatedTarget: j, direction: h});
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {relatedTarget: j, direction: h});
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = d, this
    };
    var e = function (c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }

    var d = function (b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = {toggle: !0}, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition)return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function () {
            var d = a(this), e = b(d), f = {relatedTarget: this};
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function d(b) {
        return this.each(function () {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }

    var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.6", g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e), g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {relatedTarget: this};
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }, g.prototype.keydown = function (c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d), g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which)return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a", i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), +function (a) {
    "use strict";
    function b(b, d) {
        return this.each(function () {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }

    var c = function (b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function (b) {
        var d = this, e = a.Event("show.bs.modal", {relatedTarget: b});
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {relatedTarget: b});
            e ? d.$dialog.one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function (b) {
        var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function () {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({remote: !/#/.test(e) && e}, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }

    var c = function (a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, c.prototype.init = function (b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function () {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function () {
        for (var a in this.inState)if (this.inState[a])return !0;
        return !1
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide())
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d)return;
            var e = this, f = this.tip(), g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i, j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
            if (j) {
                var n = h, o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function () {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function (a) {
                d.css({top: Math.round(a.top), left: Math.round(a.left)})
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }

        var e = this, f = a(this.$tip), g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function () {
        return this.getTitle()
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {width: e.right - e.left, height: e.bottom - e.top}));
        var f = d ? {top: 0, left: 0} : b.offset(),
            g = {scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()},
            h = d ? {width: a(window).width(), height: a(window).height()} : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {top: b.top + b.height / 2 - d / 2, left: b.left - c} : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = {top: 0, left: 0};
        if (!this.$viewport)return e;
        var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f, k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function () {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function () {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function () {
        this.enabled = !0
    }, c.prototype.disable = function () {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function (b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this
    }
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }

    var c = function (a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function () {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
        return a.fn.popover = d, this
    }
}(jQuery), +function (a) {
    "use strict";
    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }

    b.VERSION = "3.3.6", b.DEFAULTS = {offset: 10}, b.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function () {
        var b = this, c = "offset", d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var b = a(this), e = b.data("target") || b.attr("href"), f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function () {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d)return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0])return this.activeTarget = null, this.clear();
        for (a = e.length; a--;)g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }

    var c = function (b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", {relatedTarget: b[0]}),
                g = a.Event("show.bs.tab", {relatedTarget: e[0]});
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({type: "hidden.bs.tab", relatedTarget: b[0]}), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }

        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this
    };
    var e = function (c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }

    var c = function (b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
        if (null != c && "top" == this.affixed)return c > e ? "top" : !1;
        if ("bottom" == this.affixed)return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(), b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented())return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({top: g - b - f})
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
        return a.fn.affix = d, this
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var c = a(this), d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);
(function () {
    !function (t, e, i) {
        var s, n;
        return n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isWebkit = /safari|chrome/i.test(navigator.userAgent), s = function () {
            function s(s, n) {
                this.options = t.extend(!0, {}, this.Defaults, n), this.$element = t(s).addClass("rd-input-label"), this.$target = t("#" + this.$element.attr("for")), this.$win = t(i), this.$doc = t(e), this.initialize()
            }

            return s.prototype.Defaults = {callbacks: null}, s.prototype.initialize = function () {
                return this.$target.on("input", t.proxy(this.change, this)).on("focus", t.proxy(this.focus, this)).on("blur", t.proxy(this.blur, this)).on("hover", t.proxy(this.hover, this)).parents("form").on("reset", t.proxy(this.reset, this)), this.change(), this.hover(), this
            }, s.prototype.hover = function () {
                return isWebkit && (this.$target.is(":-webkit-autofill") ? this.$element.addClass("auto-fill") : this.$element.removeClass("auto-fill")), this
            }, s.prototype.change = function () {
                return isWebkit && (this.$target.is(":-webkit-autofill") ? this.$element.addClass("auto-fill") : this.$element.removeClass("auto-fill")), "" !== this.$target.val() ? (this.$element.hasClass("focus") || this.focus(), this.$element.addClass("not-empty")) : this.$element.removeClass("not-empty"), this
            }, s.prototype.focus = function () {
                return this.$element.addClass("focus"), this
            }, s.prototype.reset = function () {
                return setTimeout(t.proxy(this.blur, this)), this
            }, s.prototype.blur = function (t) {
                return "" === this.$target.val() && this.$element.removeClass("focus").removeClass("not-empty"), this
            }, s
        }(), t.fn.extend({
            RDInputLabel: function (e) {
                return this.each(function () {
                    var i;
                    return i = t(this), i.data("RDInputLabel") ? void 0 : i.data("RDInputLabel", new s(this, e))
                })
            }
        }), i.RDInputLabel = s
    }(window.jQuery, document, window), "undefined" != typeof module && null !== module ? module.exports = window.RDInputLabel : "function" == typeof define && define.amd && define(["jquery"], function () {
            "use strict";
            return window.RDInputLabel
        })
}).call(this);
!function (a) {
    "use strict";
    var t = {
        cntClass: "map",
        mapClass: "map_model",
        locationsClass: "map_locations",
        marker: {basic: "images/gmap_marker.png", active: "images/gmap_marker_active.png"},
        styles: [],
        onInit: !1
    }, o = {map: {x: -73.9924068, y: 40.646197, zoom: 14}, locations: []}, n = function (t, o) {
        var n = t.parent().find("." + o.locationsClass).find("li"), e = [];
        return n.length > 0 && n.each(function (t) {
            var n = a(this);
            n.data("x") && n.data("y") && (e[t] = {
                x: n.data("x"),
                y: n.data("y"),
                basic: n.data("basic") ? n.data("basic") : o.marker.basic,
                active: n.data("active") ? n.data("active") : o.marker.active
            }, a.trim(n.html()) ? e[t].content = '<div class="iw-content">' + n.html() + "</div>" : e[t].content = !1)
        }), e
    };
    a.fn.googleMap = function (e) {
        e = a.extend(!0, {}, t, e), a(this).each(function () {
            var t = a(this), s = a.extend(!0, {}, o, {
                map: {x: t.data("x"), y: t.data("y"), zoom: t.data("zoom")},
                locations: n(t, e)
            }), i = new google.maps.Map(this, {
                center: new google.maps.LatLng(parseFloat(s.map.y), parseFloat(s.map.x)),
                styles: e.styles,
                zoom: s.map.zoom,
                scrollwheel: !1
            });
            e.onInit && e.onInit.call(this, i);
            var c = new google.maps.InfoWindow, l = [];
            for (var r in s.locations)l[r] = new google.maps.Marker({
                position: new google.maps.LatLng(parseFloat(s.locations[r].y), parseFloat(s.locations[r].x)),
                map: i,
                icon: s.locations[r].basic,
                index: r
            }), s.locations[r].content && (google.maps.event.addListener(l[r], "click", function () {
                for (var t in l)l[t].setIcon(s.locations[t].basic);
                c.setContent(s.locations[this.index].content), c.open(i, this), a(".gm-style-iw").parent().parent().addClass("gm-wrapper"), this.setIcon(s.locations[this.index].active)
            }), google.maps.event.addListener(c, "closeclick", function () {
                for (var a in l)l[a].setIcon(s.locations[a].basic)
            }));
            google.maps.event.addDomListener(window, "resize", function () {
                i.setCenter(new google.maps.LatLng(parseFloat(s.map.y), parseFloat(s.map.x)))
            })
        })
    }
}(jQuery);
(function () {
    (function (n, m, d) {
        var t, x, y, v, h, l, w, r, u;
        l = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        y = /Chrome/.test(navigator.userAgent);
        r = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor) || /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
        v = l && /crios/i.test(navigator.userAgent);
        w = /iPhone|iPad|iPod/i.test(navigator.userAgent) && !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
        h = -1 !== navigator.appVersion.indexOf("MSIE") || -1 < navigator.appVersion.indexOf("Trident/");
        u = /windows nt 6.2/.test(navigator.userAgent.toLowerCase()) || /windows nt 6.3/.test(navigator.userAgent.toLowerCase());
        x = null != m.body.classList;
        chromeVersion = y ? navigator.userAgent.replace(/^.*Chrome\/([\d\.]+).*$/i, "$1") : !1;
        isChromeNew = "55.0.2883.75" <= chromeVersion;
        (function () {
            var h, l, m, b, a;
            l = 0;
            a = ["ms", "moz", "webkit", "o"];
            h = 0;
            for (m = a.length; h < m; h++)b = a[h], d.requestAnimationFrame = d[b + "RequestAnimationFrame"], d.cancelAnimationFrame = d[b + "CancelAnimationFrame"] || d[b + "CancelRequestAnimationFrame"];
            d.requestAnimationFrame || (d.requestAnimationFrame = function (a, c) {
                var e, b, f;
                e = (new Date).getTime();
                f = Math.max(0, 16 - (e - l));
                b = d.setTimeout(function () {
                    a(e + f)
                }, f);
                l = e + f;
                return b
            });
            if (!d.cancelAnimationFrame)return d.cancelAnimationFrame = function (a) {
                return clearTimeout(a)
            }
        });
        t = function () {
            function q(b) {
                this.options = n.extend(!0, {}, this.Defaults, b);
                this.scenes = [];
                this.initialize();
                this.scrollY = d.scrollY || d.pageYOffset;
                this.lastScrollY = -1;
                this.lastDocHeight = 0;
                this.checkLayerHeight = this.inputFocus = !1
            }

            var A, t;
            A = function () {
                function b(a, e, c, p, b, f, g) {
                    this.amend = r || h || l ? isChromeNew ? 0 : 60 : 0;
                    this.element = a;
                    this.aliases = e;
                    this.type = a.getAttribute("data-type") || "html";
                    "html" === this.type && (this.holder = this.createHolder());
                    this.direction = "normal" === a.getAttribute("data-direction") || null == a.getAttribute("data-direction") ? 1 : -1;
                    this.fade = "true" === a.getAttribute("data-fade");
                    this.blur = "true" === a.getAttribute("data-blur");
                    this.boundTo = m.querySelector(a.getAttribute("data-bound-to"));
                    "media" === this.type && (this.url = a.getAttribute("data-url"));
                    this.responsive = this.getResponsiveOptions();
                    this.element.style.position = !h && !l || l || u && h ? "absolute" : "fixed";
                    switch (this.type) {
                        case"media":
                            null != this.url && (this.element.style["background-image"] = "url(" + this.url + ")");
                            break;
                        case"html":
                            h && l && (this.element.style["z-index"] = 1)
                    }
                    this.refresh(c, p, b, f, g)
                }

                b.prototype.refresh = function (a, e, c, p, b) {
                    this.speed = this.getOption("speed", a) || 0;
                    this.offset = this.getOption("offset", a) || 0;
                    l || u && h || (this.element.style.position = b ? "fixed" : "absolute");
                    h && "html" === this.type && (this.element.style.position = "absolute");
                    switch (this.type) {
                        case"media":
                            if (!h)return this.offsetHeight = this.getMediaHeight(e, p, this.speed, this.direction), this.element.style.height = this.offsetHeight + "px";
                            break;
                        case"html":
                            this.element.style.width = this.holder.offsetWidth + "px";
                            this.offsetHeight = this.element.offsetHeight;
                            this.holder.style.height = this.offsetHeight + "px";
                            if (!(!h && !l || l || u && h))return h ? this.element.style.position = "static" : b && (this.element.style.left = this.getOffset(this.holder).left + "px", this.element.style.top = this.getOffset(this.holder).top - c + "px"), this.holder.style.position = "static";
                            break;
                        case"custom":
                            return this.offsetHeight = this.element.offsetHeight
                    }
                };
                b.prototype.createHolder = function () {
                    var a;
                    a = m.createElement("div");
                    x ? a.classList.add("rd-parallax-layer-holder") : a.className = "rd-parallax-layer-holder";
                    this.element.parentNode.insertBefore(a, this.element);
                    a.appendChild(this.element);
                    if (!h && !l || v) a.style.position = "relative";
                    return a
                };
                b.prototype.isHolderWrong = function () {
                    return "html" === this.type && this.holder.offsetHeight !== this.element.offsetHeight ? !0 : !1
                };
                b.prototype.getOption = function (a, e) {
                    var c, p;
                    for (c in this.responsive)c <= e && (p = c);
                    return this.responsive[p][a]
                };
                b.prototype.getResponsiveOptions = function () {
                    var a, e, c, p, b, f, g, k, d;
                    k = {};
                    g = [];
                    e = [];
                    p = this.aliases;
                    for (c in p)a = p[c], g.push(c), e.push(a);
                    c = p = 0;
                    for (b = g.length; p < b; c = ++p)for (f = g[c], k[f] = {}; -1 <= (a = c);)!k[f].speed && (d = this.element.getAttribute("data" + e[a] + "speed")) && (k[f].speed = this.getSpeed(d)), !k[f].offset && (d = this.element.getAttribute("data" + e[a] + "offset")) && (k[f].offset = parseInt(d)), !k[f].fade && (d = this.element.getAttribute("data" + e[a] + "fade")) && (k[f].fade = "true" === d), c--;
                    return k
                };
                b.prototype.fuse = function (a, e) {
                    var c, b, d;
                    c = this.getOffset(this.element).top + this.element.getBoundingClientRect().top;
                    b = a + e / 2;
                    c += this.offsetHeight / 2;
                    d = e / 6;
                    b + d > c && b - d < c ? this.element.style.opacity = 1 : (b = b - d < c ? 1 + (b + d - c) / e / 3 * 10 : 1 - (b - d - c) / e / 3 * 10, this.element.style.opacity = 0 > b ? 0 : 1 < b ? 1 : b.toFixed(2))
                };
                b.prototype.move = function (a, e, c, b, d, f, g, k, m) {
                    h && "media" === this.type || l || u && h || (g ? (g = !l || "html" === this.type && m || v ? this.speed * this.direction : this.speed * this.direction - 1, e = this.offsetHeight, null != k ? f = (b + c - (k + c)) / (c - d) : "media" !== this.type ? b < c || b > f - c ? (f = b < c ? b / (c - d) : (b + c - f) / (c - d), isFinite(f) || (f = 0)) : f = .5 : f = .5, a = v || h ? (d - e) / 2 + (c - d) * f * g + this.offset : l ? -(b - a) * g + (d - e) / 2 + (c - d) * f * (g + 1) + this.offset : -(b - a) * g + (d - e) / 2 + (c - d) * f * g + this.offset, l && null != k && (this.element.style.top = b - k + "px"), r && (this.element.style["-webkit-transform"] = "translate3d(0," + a + "px,0)"), this.element.style.transform = "translate3d(0," + a + "px,0)") : (r && (this.element.style["-webkit-transform"] = "translate3d(0,0,0)"), this.element.style.transform = "translate3d(0,0,0)"))
                };
                b.prototype.getSpeed = function (a) {
                    return Math.min(Math.max(parseFloat(a), 0), 2)
                };
                b.prototype.getMediaHeight = function (a, b, c, d) {
                    return b + (-1 === d ? (b + a) * c : 0) + (1 >= c ? Math.abs(a - b) * c : a * c) + 2 * this.amend
                };
                b.prototype.getOffset = function (a) {
                    a = a.getBoundingClientRect();
                    return {top: a.top + (d.scrollY || d.pageYOffset), left: a.left + (d.scrollX || d.pageXOffset)}
                };
                return b
            }();
            t = function () {
                function b(a, b, c, d) {
                    this.amend = r ? isChromeNew ? 0 : 60 : 0;
                    this.element = a;
                    this.aliases = b;
                    this.on = !0;
                    this.agent = m.querySelector(a.getAttribute("data-agent"));
                    this.anchor = this.findAnchor();
                    this.canvas = this.createCanvas();
                    this.layers = this.createLayers(c);
                    this.fitTo = this.getFitElement();
                    this.responsive = this.getResponsiveOptions();
                    this.refresh(c, d)
                }

                b.prototype.getFitElement = function () {
                    var a;
                    return null != (a = this.element.getAttribute("data-fit-to")) ? "parent" === a ? this.element.parentNode : m.querySelector(a) : null
                };
                b.prototype.findAnchor = function () {
                    var a;
                    for (a = this.element.parentNode; null != a && a !== m;) {
                        if (this.isTransformed.call(a))return a;
                        a = a.parentNode
                    }
                    return null
                };
                b.prototype.createCanvas = function () {
                    var a;
                    a = m.createElement("div");
                    x ? a.classList.add("rd-parallax-inner") : a.className = "rd-parallax-inner";
                    for (this.element.appendChild(a); this.element.firstChild !== a;)a.appendChild(this.element.firstChild);
                    this.element.style.position = "relative";
                    this.element.style.overflow = "hidden";
                    h || l ? (a.style.position = "absolute", u && h || (a.style.clip = "rect(0, auto, auto, 0)"), a.style.transform = h ? "translate3d(0,0,0)" : "none") : a.style.position = "fixed";
                    a.style.left = this.offsetLeft + "px";
                    a.style.top = 0;
                    r && (a.style["margin-top"] = "-" + this.amend + "px", a.style.padding = this.amend + "px 0", this.element.style["z-index"] = 0);
                    return a
                };
                b.prototype.getOption = function (a, b) {
                    var c, e;
                    for (c in this.responsive)c <= b && (e = c);
                    return this.responsive[e][a]
                };
                b.prototype.getResponsiveOptions = function () {
                    var a, b, c, d, h, f, g, k, l;
                    k = {};
                    g = [];
                    b = [];
                    d = this.aliases;
                    for (c in d)a = d[c], g.push(c), b.push(a);
                    c = d = 0;
                    for (h = g.length; d < h; c = ++d)for (f = g[c], k[f] = {}; -1 <= (a = c);)k[f].on || null == (l = this.element.getAttribute("data" + b[a] + "on")) || (k[f].on = "false" !== l), null == k[f].on && 0 === a && (k[f].on = !0), c--;
                    return k
                };
                b.prototype.createLayers = function (a, b) {
                    var c, e, d, f, g;
                    e = n(this.element).find(".rd-parallax-layer").get();
                    f = [];
                    c = d = 0;
                    for (g = e.length; d < g; c = ++d)c = e[c], f.push(new A(c, this.aliases, a, b, this.offsetTop, this.offsetHeight, this.on));
                    return f
                };
                b.prototype.move = function (a) {
                    a = null != this.anchor ? this.positionTop : this.offsetTop - a;
                    r && (this.canvas.style["-webkit-transform"] = "translate3d(0," + a + "px,0)");
                    return this.canvas.style.transform = "translate3d(0," + a + "px,0)"
                };
                b.prototype.refresh = function (a, b) {
                    var c, e, d, f, g;
                    f = [];
                    this.on = this.getOption("on", a);
                    this.offsetTop = this.getOffset(this.element).top;
                    this.offsetLeft = this.getOffset(this.element).left;
                    this.width = this.element.offsetWidth;
                    this.canvas.style.width = this.width + "px";
                    null != this.anchor && (this.positionTop = this.element.offsetTop);
                    null != this.agent ? (this.agentOffset = this.getOffset(this.agent).top, this.agentHeight = this.agent.offsetHeight) : this.agentOffset = this.agentHeight = null;
                    g = this.layers;
                    c = 0;
                    for (d = g.length; c < d; c++)e = g[c], "media" === e.type ? f.push(e) : e.refresh(a, b, this.offsetTop, this.offsetHeight, this.on);
                    this.offsetHeight = this.canvas.offsetHeight - 2 * this.amend;
                    this.element.style.height = this.offsetHeight + "px";
                    c = 0;
                    for (d = f.length; c < d; c++)e = f[c], e.refresh(a, b, this.offsetTop, this.offsetHeight, this.on)
                };
                b.prototype.update = function (a, b, c, d, m) {
                    var e, g, k, p, n, q, z;
                    z = this.offsetTop;
                    q = this.offsetHeight;
                    h || l || this.move(a);
                    p = this.layers;
                    n = [];
                    e = 0;
                    for (k = p.length; e < k; e++)g = p[e], g.move(a, b, c, z, q, d, this.on, this.agentOffset, m), g.fade = g.getOption("fade", b) || !1, !g.fade || l || h ? n.push(void 0) : n.push(g.fuse(z, q));
                    return n
                };
                b.prototype.isTransformed = function () {
                    var a, b, c;
                    c = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                    for (a in c)c.hasOwnProperty(a) && null != this.style[a] && (b = d.getComputedStyle(this).getPropertyValue(c[a]));
                    return null != b && 0 < b.length && "none" !== b ? !0 : !1
                };
                b.prototype.getOffset = function (a) {
                    a = a.getBoundingClientRect();
                    return {top: a.top + (d.scrollY || d.pageYOffset), left: a.left + (d.scrollX || d.pageYOffset)}
                };
                return b
            }();
            q.prototype.Defaults = {
                selector: ".rd-parallax",
                screenAliases: {
                    0: "-",
                    480: "-xs-",
                    768: "-sm-",
                    992: "-md-",
                    1200: "-lg-",
                    1920: "-xl-",
                    2560: "-xxl-"
                }
            };
            q.prototype.initialize = function () {
                var b, a, e, c, h, l, f;
                b = this;
                e = m.querySelectorAll(b.options.selector);
                f = d.innerWidth;
                l = d.innerHeight;
                a = c = 0;
                for (h = e.length; c < h; a = ++c)a = e[a], b.scenes.push(new t(a, b.options.screenAliases, f, l));
                n(d).on("resize", n.proxy(b.resize, b));
                if (w) n("input").on("focusin focus", function (a) {
                    a.preventDefault();
                    b.activeOffset = n(this).offset().top;
                    return d.scrollTo(d.scrollX || d.pageXOffset, b.activeOffset - this.offsetHeight - 100)
                });
                n(d).trigger("resize");
                b.update();
                b.checkResize()
            };
            q.prototype.resize = function (b) {
                var a, e, c;
                if ((a = d.innerWidth) !== this.windowWidth || !l || b) {
                    this.windowWidth = a;
                    this.windowHeight = d.innerHeight;
                    this.documentHeight = m.body.offsetHeight;
                    e = this.scenes;
                    b = 0;
                    for (a = e.length; b < a; b++)c = e[b], c.refresh(this.windowWidth, this.windowHeight);
                    return this.update(!0)
                }
            };
            q.prototype.update = function (b) {
                var a, e, c, h, n, f, g, k, q, r;
                e = this;
                b || requestAnimationFrame(function () {
                    e.update()
                });
                k = d.scrollY || d.pageYOffset;
                w && null != (a = m.activeElement) && (a.tagName.match(/(input)|(select)|(textarea)/i) ? (e.activeElement = a, e.inputFocus = !0) : (e.activeElement = null, e.inputFocus = !1, b = !0));
                l && y && (a = d.innerHeight - e.windowHeight, e.deltaHeight = a, k -= e.deltaHeight);
                if ((k !== e.lastScrollY || b) && !e.isActing) {
                    e.isActing = !0;
                    r = e.windowWidth;
                    q = e.windowHeight;
                    c = e.documentHeight;
                    a = k - e.lastScrollY;
                    w && null != e.activeElement && (e.activeElement.value += " ", e.activeElement.value = e.activeElement.value.trim());
                    f = e.scenes;
                    h = 0;
                    for (n = f.length; h < n; h++)g = f[h], (e.inputFocus || b || k + q >= (g.agentOffset || g.offsetTop) + a && k <= (g.agentOffset || g.offsetTop) + (g.agentHeight || g.offsetHeight) + a) && g.update(k, r, q, c, e.inputFocus);
                    e.lastScrollY = k;
                    return e.isActing = !1
                }
            };
            q.prototype.checkResize = function () {
                var b;
                b = this;
                setInterval(function () {
                    var a, e, c, d, h, f, g, k;
                    a = m.body.offsetHeight;
                    g = b.scenes;
                    e = 0;
                    for (h = g.length; e < h; e++) {
                        c = g[e];
                        k = c.layers;
                        c = 0;
                        for (f = k.length; c < f; c++)if (d = k[c], d.isHolderWrong()) {
                            b.checkLayerHeight = !0;
                            break
                        }
                        if (b.checkLayerHeight)break
                    }
                    if (b.checkLayerHeight || a !== b.lastDocHeight)return b.resize(!0), b.lastDocHeight = a, b.checkLayerHeight = !1
                }, 500)
            };
            return q
        }();
        n.RDParallax = function (d) {
            var h;
            h = n(m);
            if (!h.data("RDParallax"))return h.data("RDParallax", new t(d))
        };
        return d.RDParallax = t
    })(window.jQuery, document, window);
    "undefined" !== typeof module && null !== module ? module.exports = window.RDParallax : "function" === typeof define && define.amd && define(["jquery"], function () {
            return window.RDParallax
        })
}).call(this);
!function () {
    "use strict";
    function e(e) {
        e.fn.swiper = function (a) {
            var s;
            return e(this).each(function () {
                var e = new t(this, a);
                s || (s = e)
            }), s
        }
    }

    var a, t = function (e, s) {
        function r() {
            return "horizontal" === v.params.direction
        }

        function i(e) {
            return Math.floor(e)
        }

        function n() {
            v.autoplayTimeoutId = setTimeout(function () {
                v.params.loop ? (v.fixLoop(), v._slideNext()) : v.isEnd ? s.autoplayStopOnLast ? v.stopAutoplay() : v._slideTo(0) : v._slideNext()
            }, v.params.autoplay)
        }

        function o(e, t) {
            var s = a(e.target);
            if (!s.is(t))if ("string" == typeof t) s = s.parents(t); else if (t.nodeType) {
                var r;
                return s.parents().each(function (e, a) {
                    a === t && (r = t)
                }), r ? t : void 0
            }
            return 0 === s.length ? void 0 : s[0]
        }

        function l(e, a) {
            a = a || {};
            var t = window.MutationObserver || window.WebkitMutationObserver, s = new t(function (e) {
                e.forEach(function (e) {
                    v.onResize(!0), v.emit("onObserverUpdate", v, e)
                })
            });
            s.observe(e, {
                attributes: "undefined" == typeof a.attributes ? !0 : a.attributes,
                childList: "undefined" == typeof a.childList ? !0 : a.childList,
                characterData: "undefined" == typeof a.characterData ? !0 : a.characterData
            }), v.observers.push(s)
        }

        function p(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = e.keyCode || e.charCode;
            if (!v.params.allowSwipeToNext && (r() && 39 === a || !r() && 40 === a))return !1;
            if (!v.params.allowSwipeToPrev && (r() && 37 === a || !r() && 38 === a))return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === a || 39 === a || 38 === a || 40 === a) {
                    var t = !1;
                    if (v.container.parents(".swiper-slide").length > 0 && 0 === v.container.parents(".swiper-slide-active").length)return;
                    var s = {left: window.pageXOffset, top: window.pageYOffset}, i = window.innerWidth,
                        n = window.innerHeight, o = v.container.offset();
                    v.rtl && (o.left = o.left - v.container[0].scrollLeft);
                    for (var l = [[o.left, o.top], [o.left + v.width, o.top], [o.left, o.top + v.height], [o.left + v.width, o.top + v.height]], p = 0; p < l.length; p++) {
                        var d = l[p];
                        d[0] >= s.left && d[0] <= s.left + i && d[1] >= s.top && d[1] <= s.top + n && (t = !0)
                    }
                    if (!t)return
                }
                r() ? ((37 === a || 39 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !v.rtl || 37 === a && v.rtl) && v.slideNext(), (37 === a && !v.rtl || 39 === a && v.rtl) && v.slidePrev()) : ((38 === a || 40 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && v.slideNext(), 38 === a && v.slidePrev())
            }
        }

        function d(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = v.mousewheel.event, t = 0;
            if (e.detail) t = -e.detail; else if ("mousewheel" === a)if (v.params.mousewheelForceToAxis)if (r()) {
                if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)))return;
                t = e.wheelDeltaX
            } else {
                if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)))return;
                t = e.wheelDeltaY
            } else t = e.wheelDelta; else if ("DOMMouseScroll" === a) t = -e.detail; else if ("wheel" === a)if (v.params.mousewheelForceToAxis)if (r()) {
                if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY)))return;
                t = -e.deltaX
            } else {
                if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX)))return;
                t = -e.deltaY
            } else t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
            if (v.params.mousewheelInvert && (t = -t), v.params.freeMode) {
                var s = v.getWrapperTranslate() + t * v.params.mousewheelSensitivity;
                if (s > v.minTranslate() && (s = v.minTranslate()), s < v.maxTranslate() && (s = v.maxTranslate()), v.setWrapperTransition(0), v.setWrapperTranslate(s), v.updateProgress(), v.updateActiveIndex(), v.params.freeModeSticky && (clearTimeout(v.mousewheel.timeout), v.mousewheel.timeout = setTimeout(function () {
                        v.slideReset()
                    }, 300)), 0 === s || s === v.maxTranslate())return
            } else {
                if ((new window.Date).getTime() - v.mousewheel.lastScrollTime > 60)if (0 > t)if (v.isEnd && !v.params.loop || v.animating) {
                    if (v.params.mousewheelReleaseOnEdges)return !0
                } else v.slideNext(); else if (v.isBeginning && !v.params.loop || v.animating) {
                    if (v.params.mousewheelReleaseOnEdges)return !0
                } else v.slidePrev();
                v.mousewheel.lastScrollTime = (new window.Date).getTime()
            }
            return v.params.autoplay && v.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
        }

        function c(e, t) {
            e = a(e);
            var s, i, n;
            s = e.attr("data-swiper-parallax") || "0", i = e.attr("data-swiper-parallax-x"), n = e.attr("data-swiper-parallax-y"), i || n ? (i = i || "0", n = n || "0") : r() ? (i = s, n = "0") : (n = s, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t + "%" : i * t + "px", n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t + "%" : n * t + "px", e.transform("translate3d(" + i + ", " + n + ",0px)")
        }

        function u(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
        }

        if (!(this instanceof t))return new t(e, s);
        var m = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0},
            cube: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94},
            fade: {crossFade: !1},
            parallax: !1,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            hashnav: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationHiddenClass: "swiper-pagination-hidden",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        }, f = s && s.virtualTranslate;
        s = s || {};
        for (var h in m)if ("undefined" == typeof s[h]) s[h] = m[h]; else if ("object" == typeof s[h])for (var g in m[h])"undefined" == typeof s[h][g] && (s[h][g] = m[h][g]);
        var v = this;
        if (v.params = s, v.classNames = [], "undefined" != typeof a && "undefined" != typeof Dom7 && (a = Dom7), ("undefined" != typeof a || (a = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (v.$ = a, v.container = a(e), 0 !== v.container.length)) {
            if (v.container.length > 1)return void v.container.each(function () {
                new t(this, s)
            });
            v.container[0].swiper = v, v.container.data("swiper", v), v.classNames.push("swiper-container-" + v.params.direction), v.params.freeMode && v.classNames.push("swiper-container-free-mode"), v.support.flexbox || (v.classNames.push("swiper-container-no-flexbox"), v.params.slidesPerColumn = 1), (v.params.parallax || v.params.watchSlidesVisibility) && (v.params.watchSlidesProgress = !0), ["cube", "coverflow"].indexOf(v.params.effect) >= 0 && (v.support.transforms3d ? (v.params.watchSlidesProgress = !0, v.classNames.push("swiper-container-3d")) : v.params.effect = "slide"), "slide" !== v.params.effect && v.classNames.push("swiper-container-" + v.params.effect), "cube" === v.params.effect && (v.params.resistanceRatio = 0, v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.centeredSlides = !1, v.params.spaceBetween = 0, v.params.virtualTranslate = !0, v.params.setWrapperSize = !1), "fade" === v.params.effect && (v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.watchSlidesProgress = !0, v.params.spaceBetween = 0, "undefined" == typeof f && (v.params.virtualTranslate = !0)), v.params.grabCursor && v.support.touch && (v.params.grabCursor = !1), v.wrapper = v.container.children("." + v.params.wrapperClass), v.params.pagination && (v.paginationContainer = a(v.params.pagination), v.params.paginationClickable && v.paginationContainer.addClass("swiper-pagination-clickable")), v.rtl = r() && ("rtl" === v.container[0].dir.toLowerCase() || "rtl" === v.container.css("direction")), v.rtl && v.classNames.push("swiper-container-rtl"), v.rtl && (v.wrongRTL = "-webkit-box" === v.wrapper.css("display")), v.params.slidesPerColumn > 1 && v.classNames.push("swiper-container-multirow"), v.device.android && v.classNames.push("swiper-container-android"), v.container.addClass(v.classNames.join(" ")), v.translate = 0, v.progress = 0, v.velocity = 0, v.lockSwipeToNext = function () {
                v.params.allowSwipeToNext = !1
            }, v.lockSwipeToPrev = function () {
                v.params.allowSwipeToPrev = !1
            }, v.lockSwipes = function () {
                v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !1
            }, v.unlockSwipeToNext = function () {
                v.params.allowSwipeToNext = !0
            }, v.unlockSwipeToPrev = function () {
                v.params.allowSwipeToPrev = !0
            }, v.unlockSwipes = function () {
                v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !0
            }, v.params.grabCursor && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grab", v.container[0].style.cursor = "-moz-grab", v.container[0].style.cursor = "grab"), v.imagesToLoad = [], v.imagesLoaded = 0, v.loadImage = function (e, a, t, s, r) {
                function i() {
                    r && r()
                }

                var n;
                e.complete && s ? i() : a ? (n = new window.Image, n.onload = i, n.onerror = i, t && (n.srcset = t), a && (n.src = a)) : i()
            }, v.preloadImages = function () {
                function e() {
                    "undefined" != typeof v && null !== v && (void 0 !== v.imagesLoaded && v.imagesLoaded++, v.imagesLoaded === v.imagesToLoad.length && (v.params.updateOnImagesReady && v.update(), v.emit("onImagesReady", v)))
                }

                v.imagesToLoad = v.container.find("img");
                for (var a = 0; a < v.imagesToLoad.length; a++)v.loadImage(v.imagesToLoad[a], v.imagesToLoad[a].currentSrc || v.imagesToLoad[a].getAttribute("src"), v.imagesToLoad[a].srcset || v.imagesToLoad[a].getAttribute("srcset"), !0, e)
            }, v.autoplayTimeoutId = void 0, v.autoplaying = !1, v.autoplayPaused = !1, v.startAutoplay = function () {
                return "undefined" != typeof v.autoplayTimeoutId ? !1 : v.params.autoplay ? v.autoplaying ? !1 : (v.autoplaying = !0, v.emit("onAutoplayStart", v), void n()) : !1
            }, v.stopAutoplay = function () {
                v.autoplayTimeoutId && (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplaying = !1, v.autoplayTimeoutId = void 0, v.emit("onAutoplayStop", v))
            }, v.pauseAutoplay = function (e) {
                v.autoplayPaused || (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplayPaused = !0, 0 === e ? (v.autoplayPaused = !1, n()) : v.wrapper.transitionEnd(function () {
                    v && (v.autoplayPaused = !1, v.autoplaying ? n() : v.stopAutoplay())
                }))
            }, v.minTranslate = function () {
                return -v.snapGrid[0]
            }, v.maxTranslate = function () {
                return -v.snapGrid[v.snapGrid.length - 1]
            }, v.updateContainerSize = function () {
                var e, a;
                e = "undefined" != typeof v.params.width ? v.params.width : v.container[0].clientWidth, a = "undefined" != typeof v.params.height ? v.params.height : v.container[0].clientHeight, 0 === e && r() || 0 === a && !r() || (e = e - parseInt(v.container.css("padding-left"), 10) - parseInt(v.container.css("padding-right"), 10), a = a - parseInt(v.container.css("padding-top"), 10) - parseInt(v.container.css("padding-bottom"), 10), v.width = e, v.height = a, v.size = r() ? v.width : v.height)
            }, v.updateSlidesSize = function () {
                v.slides = v.wrapper.children("." + v.params.slideClass), v.snapGrid = [], v.slidesGrid = [], v.slidesSizesGrid = [];
                var e, a = v.params.spaceBetween, t = -v.params.slidesOffsetBefore, s = 0, n = 0;
                "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * v.size), v.virtualSize = -a, v.slides.css(v.rtl ? {
                    marginLeft: "",
                    marginTop: ""
                } : {marginRight: "", marginBottom: ""});
                var o;
                v.params.slidesPerColumn > 1 && (o = Math.floor(v.slides.length / v.params.slidesPerColumn) === v.slides.length / v.params.slidesPerColumn ? v.slides.length : Math.ceil(v.slides.length / v.params.slidesPerColumn) * v.params.slidesPerColumn, "auto" !== v.params.slidesPerView && "row" === v.params.slidesPerColumnFill && (o = Math.max(o, v.params.slidesPerView * v.params.slidesPerColumn)));
                var l, p = v.params.slidesPerColumn, d = o / p,
                    c = d - (v.params.slidesPerColumn * d - v.slides.length);
                for (e = 0; e < v.slides.length; e++) {
                    l = 0;
                    var u = v.slides.eq(e);
                    if (v.params.slidesPerColumn > 1) {
                        var m, f, h;
                        "column" === v.params.slidesPerColumnFill ? (f = Math.floor(e / p), h = e - f * p, (f > c || f === c && h === p - 1) && ++h >= p && (h = 0, f++), m = f + h * o / p, u.css({
                            "-webkit-box-ordinal-group": m,
                            "-moz-box-ordinal-group": m,
                            "-ms-flex-order": m,
                            "-webkit-order": m,
                            order: m
                        })) : (h = Math.floor(e / d), f = e - h * d), u.css({"margin-top": 0 !== h && v.params.spaceBetween && v.params.spaceBetween + "px"}).attr("data-swiper-column", f).attr("data-swiper-row", h)
                    }
                    "none" !== u.css("display") && ("auto" === v.params.slidesPerView ? (l = r() ? u.outerWidth(!0) : u.outerHeight(!0), v.params.roundLengths && (l = i(l))) : (l = (v.size - (v.params.slidesPerView - 1) * a) / v.params.slidesPerView, v.params.roundLengths && (l = i(l)), r() ? v.slides[e].style.width = l + "px" : v.slides[e].style.height = l + "px"), v.slides[e].swiperSlideSize = l, v.slidesSizesGrid.push(l), v.params.centeredSlides ? (t = t + l / 2 + s / 2 + a, 0 === e && (t = t - v.size / 2 - a), Math.abs(t) < .001 && (t = 0), n % v.params.slidesPerGroup === 0 && v.snapGrid.push(t), v.slidesGrid.push(t)) : (n % v.params.slidesPerGroup === 0 && v.snapGrid.push(t), v.slidesGrid.push(t), t = t + l + a), v.virtualSize += l + a, s = l, n++)
                }
                v.virtualSize = Math.max(v.virtualSize, v.size) + v.params.slidesOffsetAfter;
                var g;
                if (v.rtl && v.wrongRTL && ("slide" === v.params.effect || "coverflow" === v.params.effect) && v.wrapper.css({width: v.virtualSize + v.params.spaceBetween + "px"}), (!v.support.flexbox || v.params.setWrapperSize) && v.wrapper.css(r() ? {width: v.virtualSize + v.params.spaceBetween + "px"} : {height: v.virtualSize + v.params.spaceBetween + "px"}), v.params.slidesPerColumn > 1 && (v.virtualSize = (l + v.params.spaceBetween) * o, v.virtualSize = Math.ceil(v.virtualSize / v.params.slidesPerColumn) - v.params.spaceBetween, v.wrapper.css({width: v.virtualSize + v.params.spaceBetween + "px"}), v.params.centeredSlides)) {
                    for (g = [], e = 0; e < v.snapGrid.length; e++)v.snapGrid[e] < v.virtualSize + v.snapGrid[0] && g.push(v.snapGrid[e]);
                    v.snapGrid = g
                }
                if (!v.params.centeredSlides) {
                    for (g = [], e = 0; e < v.snapGrid.length; e++)v.snapGrid[e] <= v.virtualSize - v.size && g.push(v.snapGrid[e]);
                    v.snapGrid = g, Math.floor(v.virtualSize - v.size) > Math.floor(v.snapGrid[v.snapGrid.length - 1]) && v.snapGrid.push(v.virtualSize - v.size)
                }
                0 === v.snapGrid.length && (v.snapGrid = [0]), 0 !== v.params.spaceBetween && v.slides.css(r() ? v.rtl ? {marginLeft: a + "px"} : {marginRight: a + "px"} : {marginBottom: a + "px"}), v.params.watchSlidesProgress && v.updateSlidesOffset()
            }, v.updateSlidesOffset = function () {
                for (var e = 0; e < v.slides.length; e++)v.slides[e].swiperSlideOffset = r() ? v.slides[e].offsetLeft : v.slides[e].offsetTop
            }, v.updateSlidesProgress = function (e) {
                if ("undefined" == typeof e && (e = v.translate || 0), 0 !== v.slides.length) {
                    "undefined" == typeof v.slides[0].swiperSlideOffset && v.updateSlidesOffset();
                    var a = -e;
                    v.rtl && (a = e);
                    {
                        v.container[0].getBoundingClientRect(), r() ? "left" : "top", r() ? "right" : "bottom"
                    }
                    v.slides.removeClass(v.params.slideVisibleClass);
                    for (var t = 0; t < v.slides.length; t++) {
                        var s = v.slides[t],
                            i = (a - s.swiperSlideOffset) / (s.swiperSlideSize + v.params.spaceBetween);
                        if (v.params.watchSlidesVisibility) {
                            var n = -(a - s.swiperSlideOffset), o = n + v.slidesSizesGrid[t],
                                l = n >= 0 && n < v.size || o > 0 && o <= v.size || 0 >= n && o >= v.size;
                            l && v.slides.eq(t).addClass(v.params.slideVisibleClass)
                        }
                        s.progress = v.rtl ? -i : i
                    }
                }
            }, v.updateProgress = function (e) {
                "undefined" == typeof e && (e = v.translate || 0);
                var a = v.maxTranslate() - v.minTranslate();
                0 === a ? (v.progress = 0, v.isBeginning = v.isEnd = !0) : (v.progress = (e - v.minTranslate()) / a, v.isBeginning = v.progress <= 0, v.isEnd = v.progress >= 1), v.isBeginning && v.emit("onReachBeginning", v), v.isEnd && v.emit("onReachEnd", v), v.params.watchSlidesProgress && v.updateSlidesProgress(e), v.emit("onProgress", v, v.progress)
            }, v.updateActiveIndex = function () {
                var e, a, t, s = v.rtl ? v.translate : -v.translate;
                for (a = 0; a < v.slidesGrid.length; a++)"undefined" != typeof v.slidesGrid[a + 1] ? s >= v.slidesGrid[a] && s < v.slidesGrid[a + 1] - (v.slidesGrid[a + 1] - v.slidesGrid[a]) / 2 ? e = a : s >= v.slidesGrid[a] && s < v.slidesGrid[a + 1] && (e = a + 1) : s >= v.slidesGrid[a] && (e = a);
                (0 > e || "undefined" == typeof e) && (e = 0), t = Math.floor(e / v.params.slidesPerGroup), t >= v.snapGrid.length && (t = v.snapGrid.length - 1), e !== v.activeIndex && (v.snapIndex = t, v.previousIndex = v.activeIndex, v.activeIndex = e, v.updateClasses())
            }, v.updateClasses = function () {
                v.slides.removeClass(v.params.slideActiveClass + " " + v.params.slideNextClass + " " + v.params.slidePrevClass);
                var e = v.slides.eq(v.activeIndex);
                if (e.addClass(v.params.slideActiveClass), e.next("." + v.params.slideClass).addClass(v.params.slideNextClass), e.prev("." + v.params.slideClass).addClass(v.params.slidePrevClass), v.bullets && v.bullets.length > 0) {
                    v.bullets.removeClass(v.params.bulletActiveClass);
                    var t;
                    v.params.loop ? (t = Math.ceil(v.activeIndex - v.loopedSlides) / v.params.slidesPerGroup, t > v.slides.length - 1 - 2 * v.loopedSlides && (t -= v.slides.length - 2 * v.loopedSlides), t > v.bullets.length - 1 && (t -= v.bullets.length)) : t = "undefined" != typeof v.snapIndex ? v.snapIndex : v.activeIndex || 0, v.paginationContainer.length > 1 ? v.bullets.each(function () {
                        a(this).index() === t && a(this).addClass(v.params.bulletActiveClass)
                    }) : v.bullets.eq(t).addClass(v.params.bulletActiveClass)
                }
                v.params.loop || (v.params.prevButton && (v.isBeginning ? (a(v.params.prevButton).addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(a(v.params.prevButton))) : (a(v.params.prevButton).removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(a(v.params.prevButton)))), v.params.nextButton && (v.isEnd ? (a(v.params.nextButton).addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(a(v.params.nextButton))) : (a(v.params.nextButton).removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(a(v.params.nextButton)))))
            }, v.updatePagination = function () {
                if (v.params.pagination && v.paginationContainer && v.paginationContainer.length > 0) {
                    for (var e = "", a = v.params.loop ? Math.ceil((v.slides.length - 2 * v.loopedSlides) / v.params.slidesPerGroup) : v.snapGrid.length, t = 0; a > t; t++)e += v.params.paginationBulletRender ? v.params.paginationBulletRender(t, v.params.bulletClass) : "<" + v.params.paginationElement + ' class="' + v.params.bulletClass + '"></' + v.params.paginationElement + ">";
                    v.paginationContainer.html(e), v.bullets = v.paginationContainer.find("." + v.params.bulletClass), v.params.paginationClickable && v.params.a11y && v.a11y && v.a11y.initPagination()
                }
            }, v.update = function (e) {
                function a() {
                    s = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate()), v.setWrapperTranslate(s), v.updateActiveIndex(), v.updateClasses()
                }

                if (v.updateContainerSize(), v.updateSlidesSize(), v.updateProgress(), v.updatePagination(), v.updateClasses(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), e) {
                    var t, s;
                    v.controller && v.controller.spline && (v.controller.spline = void 0), v.params.freeMode ? a() : (t = ("auto" === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0) : v.slideTo(v.activeIndex, 0, !1, !0), t || a())
                }
            }, v.onResize = function (e) {
                var a = v.params.allowSwipeToPrev, t = v.params.allowSwipeToNext;
                if (v.params.allowSwipeToPrev = v.params.allowSwipeToNext = !0, v.updateContainerSize(), v.updateSlidesSize(), ("auto" === v.params.slidesPerView || v.params.freeMode || e) && v.updatePagination(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), v.controller && v.controller.spline && (v.controller.spline = void 0), v.params.freeMode) {
                    var s = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate());
                    v.setWrapperTranslate(s), v.updateActiveIndex(), v.updateClasses()
                } else v.updateClasses(), ("auto" === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0) : v.slideTo(v.activeIndex, 0, !1, !0);
                v.params.allowSwipeToPrev = a, v.params.allowSwipeToNext = t
            };
            var w = ["mousedown", "mousemove", "mouseup"];
            window.navigator.pointerEnabled ? w = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (w = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), v.touchEvents = {
                start: v.support.touch || !v.params.simulateTouch ? "touchstart" : w[0],
                move: v.support.touch || !v.params.simulateTouch ? "touchmove" : w[1],
                end: v.support.touch || !v.params.simulateTouch ? "touchend" : w[2]
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === v.params.touchEventsTarget ? v.container : v.wrapper).addClass("swiper-wp8-" + v.params.direction), v.initEvents = function (e) {
                var t = e ? "off" : "on", r = e ? "removeEventListener" : "addEventListener",
                    i = "container" === v.params.touchEventsTarget ? v.container[0] : v.wrapper[0],
                    n = v.support.touch ? i : document, o = v.params.nested ? !0 : !1;
                v.browser.ie ? (i[r](v.touchEvents.start, v.onTouchStart, !1), n[r](v.touchEvents.move, v.onTouchMove, o), n[r](v.touchEvents.end, v.onTouchEnd, !1)) : (v.support.touch && (i[r](v.touchEvents.start, v.onTouchStart, !1), i[r](v.touchEvents.move, v.onTouchMove, o), i[r](v.touchEvents.end, v.onTouchEnd, !1)), !s.simulateTouch || v.device.ios || v.device.android || (i[r]("mousedown", v.onTouchStart, !1), document[r]("mousemove", v.onTouchMove, o), document[r]("mouseup", v.onTouchEnd, !1))), window[r]("resize", v.onResize), v.params.nextButton && (a(v.params.nextButton)[t]("click", v.onClickNext), v.params.a11y && v.a11y && a(v.params.nextButton)[t]("keydown", v.a11y.onEnterKey)), v.params.prevButton && (a(v.params.prevButton)[t]("click", v.onClickPrev), v.params.a11y && v.a11y && a(v.params.prevButton)[t]("keydown", v.a11y.onEnterKey)), v.params.pagination && v.params.paginationClickable && (a(v.paginationContainer)[t]("click", "." + v.params.bulletClass, v.onClickIndex), v.params.a11y && v.a11y && a(v.paginationContainer)[t]("keydown", "." + v.params.bulletClass, v.a11y.onEnterKey)), (v.params.preventClicks || v.params.preventClicksPropagation) && i[r]("click", v.preventClicks, !0)
            }, v.attachEvents = function () {
                v.initEvents()
            }, v.detachEvents = function () {
                v.initEvents(!0)
            }, v.allowClick = !0, v.preventClicks = function (e) {
                v.allowClick || (v.params.preventClicks && e.preventDefault(), v.params.preventClicksPropagation && v.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }, v.onClickNext = function (e) {
                e.preventDefault(), (!v.isEnd || v.params.loop) && v.slideNext()
            }, v.onClickPrev = function (e) {
                e.preventDefault(), (!v.isBeginning || v.params.loop) && v.slidePrev()
            }, v.onClickIndex = function (e) {
                e.preventDefault();
                var t = a(this).index() * v.params.slidesPerGroup;
                v.params.loop && (t += v.loopedSlides), v.slideTo(t)
            }, v.updateClickedSlide = function (e) {
                var t = o(e, "." + v.params.slideClass), s = !1;
                if (t)for (var r = 0; r < v.slides.length; r++)v.slides[r] === t && (s = !0);
                if (!t || !s)return v.clickedSlide = void 0, void(v.clickedIndex = void 0);
                if (v.clickedSlide = t, v.clickedIndex = a(t).index(), v.params.slideToClickedSlide && void 0 !== v.clickedIndex && v.clickedIndex !== v.activeIndex) {
                    var i, n = v.clickedIndex;
                    if (v.params.loop) {
                        if (v.animating)return;
                        i = a(v.clickedSlide).attr("data-swiper-slide-index"), v.params.centeredSlides ? n < v.loopedSlides - v.params.slidesPerView / 2 || n > v.slides.length - v.loopedSlides + v.params.slidesPerView / 2 ? (v.fixLoop(), n = v.wrapper.children("." + v.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
                            v.slideTo(n)
                        }, 0)) : v.slideTo(n) : n > v.slides.length - v.params.slidesPerView ? (v.fixLoop(), n = v.wrapper.children("." + v.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
                            v.slideTo(n)
                        }, 0)) : v.slideTo(n)
                    } else v.slideTo(n)
                }
            };
            var b, y, x, T, S, C, M, P, z, I = "input, select, textarea, button", E = Date.now(), k = [];
            v.animating = !1, v.touches = {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0};
            var D, L;
            if (v.onTouchStart = function (e) {
                    if (e.originalEvent && (e = e.originalEvent), D = "touchstart" === e.type, D || !("which" in e) || 3 !== e.which) {
                        if (v.params.noSwiping && o(e, "." + v.params.noSwipingClass))return void(v.allowClick = !0);
                        if (!v.params.swipeHandler || o(e, v.params.swipeHandler)) {
                            var t = v.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                s = v.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                            if (!(v.device.ios && v.params.iOSEdgeSwipeDetection && t <= v.params.iOSEdgeSwipeThreshold)) {
                                if (b = !0, y = !1, T = void 0, L = void 0, v.touches.startX = t, v.touches.startY = s, x = Date.now(), v.allowClick = !0, v.updateContainerSize(), v.swipeDirection = void 0, v.params.threshold > 0 && (M = !1), "touchstart" !== e.type) {
                                    var r = !0;
                                    a(e.target).is(I) && (r = !1), document.activeElement && a(document.activeElement).is(I) && document.activeElement.blur(), r && e.preventDefault()
                                }
                                v.emit("onTouchStart", v, e)
                            }
                        }
                    }
                }, v.onTouchMove = function (e) {
                    if (e.originalEvent && (e = e.originalEvent), !(D && "mousemove" === e.type || e.preventedByNestedSwiper)) {
                        if (v.params.onlyExternal)return v.allowClick = !1, void(b && (v.touches.startX = v.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, v.touches.startY = v.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, x = Date.now()));
                        if (D && document.activeElement && e.target === document.activeElement && a(e.target).is(I))return y = !0, void(v.allowClick = !1);
                        if (v.emit("onTouchMove", v, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                            if (v.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, v.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof T) {
                                var t = 180 * Math.atan2(Math.abs(v.touches.currentY - v.touches.startY), Math.abs(v.touches.currentX - v.touches.startX)) / Math.PI;
                                T = r() ? t > v.params.touchAngle : 90 - t > v.params.touchAngle
                            }
                            if (T && v.emit("onTouchMoveOpposite", v, e), "undefined" == typeof L && v.browser.ieTouch && (v.touches.currentX !== v.touches.startX || v.touches.currentY !== v.touches.startY) && (L = !0), b) {
                                if (T)return void(b = !1);
                                if (L || !v.browser.ieTouch) {
                                    v.allowClick = !1, v.emit("onSliderMove", v, e), e.preventDefault(), v.params.touchMoveStopPropagation && !v.params.nested && e.stopPropagation(), y || (s.loop && v.fixLoop(), C = v.getWrapperTranslate(), v.setWrapperTransition(0), v.animating && v.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), v.params.autoplay && v.autoplaying && (v.params.autoplayDisableOnInteraction ? v.stopAutoplay() : v.pauseAutoplay()), z = !1, v.params.grabCursor && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grabbing", v.container[0].style.cursor = "-moz-grabbin", v.container[0].style.cursor = "grabbing")), y = !0;
                                    var i = v.touches.diff = r() ? v.touches.currentX - v.touches.startX : v.touches.currentY - v.touches.startY;
                                    i *= v.params.touchRatio, v.rtl && (i = -i), v.swipeDirection = i > 0 ? "prev" : "next", S = i + C;
                                    var n = !0;
                                    if (i > 0 && S > v.minTranslate() ? (n = !1, v.params.resistance && (S = v.minTranslate() - 1 + Math.pow(-v.minTranslate() + C + i, v.params.resistanceRatio))) : 0 > i && S < v.maxTranslate() && (n = !1, v.params.resistance && (S = v.maxTranslate() + 1 - Math.pow(v.maxTranslate() - C - i, v.params.resistanceRatio))), n && (e.preventedByNestedSwiper = !0), !v.params.allowSwipeToNext && "next" === v.swipeDirection && C > S && (S = C), !v.params.allowSwipeToPrev && "prev" === v.swipeDirection && S > C && (S = C), v.params.followFinger) {
                                        if (v.params.threshold > 0) {
                                            if (!(Math.abs(i) > v.params.threshold || M))return void(S = C);
                                            if (!M)return M = !0, v.touches.startX = v.touches.currentX, v.touches.startY = v.touches.currentY, S = C, void(v.touches.diff = r() ? v.touches.currentX - v.touches.startX : v.touches.currentY - v.touches.startY)
                                        }
                                        (v.params.freeMode || v.params.watchSlidesProgress) && v.updateActiveIndex(), v.params.freeMode && (0 === k.length && k.push({
                                            position: v.touches[r() ? "startX" : "startY"],
                                            time: x
                                        }), k.push({
                                            position: v.touches[r() ? "currentX" : "currentY"],
                                            time: (new window.Date).getTime()
                                        })), v.updateProgress(S), v.setWrapperTranslate(S)
                                    }
                                }
                            }
                        }
                    }
                }, v.onTouchEnd = function (e) {
                    if (e.originalEvent && (e = e.originalEvent), v.emit("onTouchEnd", v, e), b) {
                        v.params.grabCursor && y && b && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grab", v.container[0].style.cursor = "-moz-grab", v.container[0].style.cursor = "grab");
                        var t = Date.now(), s = t - x;
                        if (v.allowClick && (v.updateClickedSlide(e), v.emit("onTap", v, e), 300 > s && t - E > 300 && (P && clearTimeout(P), P = setTimeout(function () {
                                v && (v.params.paginationHide && v.paginationContainer.length > 0 && !a(e.target).hasClass(v.params.bulletClass) && v.paginationContainer.toggleClass(v.params.paginationHiddenClass), v.emit("onClick", v, e))
                            }, 300)), 300 > s && 300 > t - E && (P && clearTimeout(P), v.emit("onDoubleTap", v, e))), E = Date.now(), setTimeout(function () {
                                v && (v.allowClick = !0)
                            }, 0), !b || !y || !v.swipeDirection || 0 === v.touches.diff || S === C)return void(b = y = !1);
                        b = y = !1;
                        var r;
                        if (r = v.params.followFinger ? v.rtl ? v.translate : -v.translate : -S, v.params.freeMode) {
                            if (r < -v.minTranslate())return void v.slideTo(v.activeIndex);
                            if (r > -v.maxTranslate())return void v.slideTo(v.slides.length < v.snapGrid.length ? v.snapGrid.length - 1 : v.slides.length - 1);
                            if (v.params.freeModeMomentum) {
                                if (k.length > 1) {
                                    var i = k.pop(), n = k.pop(), o = i.position - n.position, l = i.time - n.time;
                                    v.velocity = o / l, v.velocity = v.velocity / 2, Math.abs(v.velocity) < v.params.freeModeMinimumVelocity && (v.velocity = 0), (l > 150 || (new window.Date).getTime() - i.time > 300) && (v.velocity = 0)
                                } else v.velocity = 0;
                                k.length = 0;
                                var p = 1e3 * v.params.freeModeMomentumRatio, d = v.velocity * p, c = v.translate + d;
                                v.rtl && (c = -c);
                                var u, m = !1, f = 20 * Math.abs(v.velocity) * v.params.freeModeMomentumBounceRatio;
                                if (c < v.maxTranslate()) v.params.freeModeMomentumBounce ? (c + v.maxTranslate() < -f && (c = v.maxTranslate() - f), u = v.maxTranslate(), m = !0, z = !0) : c = v.maxTranslate(); else if (c > v.minTranslate()) v.params.freeModeMomentumBounce ? (c - v.minTranslate() > f && (c = v.minTranslate() + f), u = v.minTranslate(), m = !0, z = !0) : c = v.minTranslate(); else if (v.params.freeModeSticky) {
                                    var h, g = 0;
                                    for (g = 0; g < v.snapGrid.length; g += 1)if (v.snapGrid[g] > -c) {
                                        h = g;
                                        break
                                    }
                                    c = Math.abs(v.snapGrid[h] - c) < Math.abs(v.snapGrid[h - 1] - c) || "next" === v.swipeDirection ? v.snapGrid[h] : v.snapGrid[h - 1], v.rtl || (c = -c)
                                }
                                if (0 !== v.velocity) p = Math.abs(v.rtl ? (-c - v.translate) / v.velocity : (c - v.translate) / v.velocity); else if (v.params.freeModeSticky)return void v.slideReset();
                                v.params.freeModeMomentumBounce && m ? (v.updateProgress(u), v.setWrapperTransition(p), v.setWrapperTranslate(c), v.onTransitionStart(), v.animating = !0, v.wrapper.transitionEnd(function () {
                                    v && z && (v.emit("onMomentumBounce", v), v.setWrapperTransition(v.params.speed), v.setWrapperTranslate(u), v.wrapper.transitionEnd(function () {
                                        v && v.onTransitionEnd()
                                    }))
                                })) : v.velocity ? (v.updateProgress(c), v.setWrapperTransition(p), v.setWrapperTranslate(c), v.onTransitionStart(), v.animating || (v.animating = !0, v.wrapper.transitionEnd(function () {
                                    v && v.onTransitionEnd()
                                }))) : v.updateProgress(c), v.updateActiveIndex()
                            }
                            return void((!v.params.freeModeMomentum || s >= v.params.longSwipesMs) && (v.updateProgress(), v.updateActiveIndex()))
                        }
                        var w, T = 0, M = v.slidesSizesGrid[0];
                        for (w = 0; w < v.slidesGrid.length; w += v.params.slidesPerGroup)"undefined" != typeof v.slidesGrid[w + v.params.slidesPerGroup] ? r >= v.slidesGrid[w] && r < v.slidesGrid[w + v.params.slidesPerGroup] && (T = w, M = v.slidesGrid[w + v.params.slidesPerGroup] - v.slidesGrid[w]) : r >= v.slidesGrid[w] && (T = w, M = v.slidesGrid[v.slidesGrid.length - 1] - v.slidesGrid[v.slidesGrid.length - 2]);
                        var I = (r - v.slidesGrid[T]) / M;
                        if (s > v.params.longSwipesMs) {
                            if (!v.params.longSwipes)return void v.slideTo(v.activeIndex);
                            "next" === v.swipeDirection && v.slideTo(I >= v.params.longSwipesRatio ? T + v.params.slidesPerGroup : T), "prev" === v.swipeDirection && v.slideTo(I > 1 - v.params.longSwipesRatio ? T + v.params.slidesPerGroup : T)
                        } else {
                            if (!v.params.shortSwipes)return void v.slideTo(v.activeIndex);
                            "next" === v.swipeDirection && v.slideTo(T + v.params.slidesPerGroup), "prev" === v.swipeDirection && v.slideTo(T)
                        }
                    }
                }, v._slideTo = function (e, a) {
                    return v.slideTo(e, a, !0, !0)
                }, v.slideTo = function (e, a, t, s) {
                    "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), v.snapIndex = Math.floor(e / v.params.slidesPerGroup), v.snapIndex >= v.snapGrid.length && (v.snapIndex = v.snapGrid.length - 1);
                    var i = -v.snapGrid[v.snapIndex];
                    v.params.autoplay && v.autoplaying && (s || !v.params.autoplayDisableOnInteraction ? v.pauseAutoplay(a) : v.stopAutoplay()), v.updateProgress(i);
                    for (var n = 0; n < v.slidesGrid.length; n++)-Math.floor(100 * i) >= Math.floor(100 * v.slidesGrid[n]) && (e = n);
                    if (!v.params.allowSwipeToNext && i < v.translate && i < v.minTranslate())return !1;
                    if (!v.params.allowSwipeToPrev && i > v.translate && i > v.maxTranslate() && (v.activeIndex || 0) !== e)return !1;
                    if ("undefined" == typeof a && (a = v.params.speed), v.previousIndex = v.activeIndex || 0, v.activeIndex = e, i === v.translate)return v.updateClasses(), !1;
                    v.updateClasses(), v.onTransitionStart(t);
                    r() ? i : 0, r() ? 0 : i;
                    return 0 === a ? (v.setWrapperTransition(0), v.setWrapperTranslate(i), v.onTransitionEnd(t)) : (v.setWrapperTransition(a), v.setWrapperTranslate(i), v.animating || (v.animating = !0, v.wrapper.transitionEnd(function () {
                        v && v.onTransitionEnd(t)
                    }))), !0
                }, v.onTransitionStart = function (e) {
                    "undefined" == typeof e && (e = !0), v.lazy && v.lazy.onTransitionStart(), e && (v.emit("onTransitionStart", v), v.activeIndex !== v.previousIndex && v.emit("onSlideChangeStart", v))
                }, v.onTransitionEnd = function (e) {
                    v.animating = !1, v.setWrapperTransition(0), "undefined" == typeof e && (e = !0), v.lazy && v.lazy.onTransitionEnd(), e && (v.emit("onTransitionEnd", v), v.activeIndex !== v.previousIndex && v.emit("onSlideChangeEnd", v)), v.params.hashnav && v.hashnav && v.hashnav.setHash()
                }, v.slideNext = function (e, a, t) {
                    if (v.params.loop) {
                        if (v.animating)return !1;
                        v.fixLoop();
                        {
                            v.container[0].clientLeft
                        }
                        return v.slideTo(v.activeIndex + v.params.slidesPerGroup, a, e, t)
                    }
                    return v.slideTo(v.activeIndex + v.params.slidesPerGroup, a, e, t)
                }, v._slideNext = function (e) {
                    return v.slideNext(!0, e, !0)
                }, v.slidePrev = function (e, a, t) {
                    if (v.params.loop) {
                        if (v.animating)return !1;
                        v.fixLoop();
                        {
                            v.container[0].clientLeft
                        }
                        return v.slideTo(v.activeIndex - 1, a, e, t)
                    }
                    return v.slideTo(v.activeIndex - 1, a, e, t)
                }, v._slidePrev = function (e) {
                    return v.slidePrev(!0, e, !0)
                }, v.slideReset = function (e, a) {
                    return v.slideTo(v.activeIndex, a, e)
                }, v.setWrapperTransition = function (e, a) {
                    v.wrapper.transition(e), "slide" !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTransition(e), v.params.parallax && v.parallax && v.parallax.setTransition(e), v.params.scrollbar && v.scrollbar && v.scrollbar.setTransition(e), v.params.control && v.controller && v.controller.setTransition(e, a), v.emit("onSetTransition", v, e)
                }, v.setWrapperTranslate = function (e, a, t) {
                    var s = 0, n = 0, o = 0;
                    r() ? s = v.rtl ? -e : e : n = e, v.params.roundLengths && (s = i(s), n = i(n)), v.params.virtualTranslate || v.wrapper.transform(v.support.transforms3d ? "translate3d(" + s + "px, " + n + "px, " + o + "px)" : "translate(" + s + "px, " + n + "px)"), v.translate = r() ? s : n, a && v.updateActiveIndex(), "slide" !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTranslate(v.translate), v.params.parallax && v.parallax && v.parallax.setTranslate(v.translate), v.params.scrollbar && v.scrollbar && v.scrollbar.setTranslate(v.translate), v.params.control && v.controller && v.controller.setTranslate(v.translate, t), v.emit("onSetTranslate", v, v.translate)
                }, v.getTranslate = function (e, a) {
                    var t, s, r, i;
                    return "undefined" == typeof a && (a = "x"), v.params.virtualTranslate ? v.rtl ? -v.translate : v.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (s = r.transform || r.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(function (e) {
                        return e.replace(",", ".")
                    }).join(", ")), i = new window.WebKitCSSMatrix("none" === s ? "" : s)) : (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = i.toString().split(",")), "x" === a && (s = window.WebKitCSSMatrix ? i.m41 : parseFloat(16 === t.length ? t[12] : t[4])), "y" === a && (s = window.WebKitCSSMatrix ? i.m42 : parseFloat(16 === t.length ? t[13] : t[5])), v.rtl && s && (s = -s), s || 0)
                }, v.getWrapperTranslate = function (e) {
                    return "undefined" == typeof e && (e = r() ? "x" : "y"), v.getTranslate(v.wrapper[0], e)
                }, v.observers = [], v.initObservers = function () {
                    if (v.params.observeParents)for (var e = v.container.parents(), a = 0; a < e.length; a++)l(e[a]);
                    l(v.container[0], {childList: !1}), l(v.wrapper[0], {attributes: !1})
                }, v.disconnectObservers = function () {
                    for (var e = 0; e < v.observers.length; e++)v.observers[e].disconnect();
                    v.observers = []
                }, v.createLoop = function () {
                    v.wrapper.children("." + v.params.slideClass + "." + v.params.slideDuplicateClass).remove();
                    var e = v.wrapper.children("." + v.params.slideClass);
                    "auto" !== v.params.slidesPerView || v.params.loopedSlides || (v.params.loopedSlides = e.length), v.loopedSlides = parseInt(v.params.loopedSlides || v.params.slidesPerView, 10), v.loopedSlides = v.loopedSlides + v.params.loopAdditionalSlides, v.loopedSlides > e.length && (v.loopedSlides = e.length);
                    var t, s = [], r = [];
                    for (e.each(function (t, i) {
                        var n = a(this);
                        t < v.loopedSlides && r.push(i), t < e.length && t >= e.length - v.loopedSlides && s.push(i), n.attr("data-swiper-slide-index", t)
                    }), t = 0; t < r.length; t++)v.wrapper.append(a(r[t].cloneNode(!0)).addClass(v.params.slideDuplicateClass));
                    for (t = s.length - 1; t >= 0; t--)v.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(v.params.slideDuplicateClass))
                }, v.destroyLoop = function () {
                    v.wrapper.children("." + v.params.slideClass + "." + v.params.slideDuplicateClass).remove(), v.slides.removeAttr("data-swiper-slide-index")
                }, v.fixLoop = function () {
                    var e;
                    v.activeIndex < v.loopedSlides ? (e = v.slides.length - 3 * v.loopedSlides + v.activeIndex, e += v.loopedSlides, v.slideTo(e, 0, !1, !0)) : ("auto" === v.params.slidesPerView && v.activeIndex >= 2 * v.loopedSlides || v.activeIndex > v.slides.length - 2 * v.params.slidesPerView) && (e = -v.slides.length + v.activeIndex + v.loopedSlides, e += v.loopedSlides, v.slideTo(e, 0, !1, !0))
                }, v.appendSlide = function (e) {
                    if (v.params.loop && v.destroyLoop(), "object" == typeof e && e.length)for (var a = 0; a < e.length; a++)e[a] && v.wrapper.append(e[a]); else v.wrapper.append(e);
                    v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0)
                }, v.prependSlide = function (e) {
                    v.params.loop && v.destroyLoop();
                    var a = v.activeIndex + 1;
                    if ("object" == typeof e && e.length) {
                        for (var t = 0; t < e.length; t++)e[t] && v.wrapper.prepend(e[t]);
                        a = v.activeIndex + e.length
                    } else v.wrapper.prepend(e);
                    v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0), v.slideTo(a, 0, !1)
                }, v.removeSlide = function (e) {
                    v.params.loop && (v.destroyLoop(), v.slides = v.wrapper.children("." + v.params.slideClass));
                    var a, t = v.activeIndex;
                    if ("object" == typeof e && e.length) {
                        for (var s = 0; s < e.length; s++)a = e[s], v.slides[a] && v.slides.eq(a).remove(), t > a && t--;
                        t = Math.max(t, 0)
                    } else a = e, v.slides[a] && v.slides.eq(a).remove(), t > a && t--, t = Math.max(t, 0);
                    v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0), v.params.loop ? v.slideTo(t + v.loopedSlides, 0, !1) : v.slideTo(t, 0, !1)
                }, v.removeAllSlides = function () {
                    for (var e = [], a = 0; a < v.slides.length; a++)e.push(a);
                    v.removeSlide(e)
                }, v.effects = {
                    fade: {
                        setTranslate: function () {
                            for (var e = 0; e < v.slides.length; e++) {
                                var a = v.slides.eq(e), t = a[0].swiperSlideOffset, s = -t;
                                v.params.virtualTranslate || (s -= v.translate);
                                var i = 0;
                                r() || (i = s, s = 0);
                                var n = v.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                                a.css({opacity: n}).transform("translate3d(" + s + "px, " + i + "px, 0px)")
                            }
                        }, setTransition: function (e) {
                            if (v.slides.transition(e), v.params.virtualTranslate && 0 !== e) {
                                var a = !1;
                                v.slides.transitionEnd(function () {
                                    if (!a && v) {
                                        a = !0, v.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++)v.wrapper.trigger(e[t])
                                    }
                                })
                            }
                        }
                    }, cube: {
                        setTranslate: function () {
                            var e, t = 0;
                            v.params.cube.shadow && (r() ? (e = v.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), v.wrapper.append(e)), e.css({height: v.width + "px"})) : (e = v.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), v.container.append(e))));
                            for (var s = 0; s < v.slides.length; s++) {
                                var i = v.slides.eq(s), n = 90 * s, o = Math.floor(n / 360);
                                v.rtl && (n = -n, o = Math.floor(-n / 360));
                                var l = Math.max(Math.min(i[0].progress, 1), -1), p = 0, d = 0, c = 0;
                                s % 4 === 0 ? (p = 4 * -o * v.size, c = 0) : (s - 1) % 4 === 0 ? (p = 0, c = 4 * -o * v.size) : (s - 2) % 4 === 0 ? (p = v.size + 4 * o * v.size, c = v.size) : (s - 3) % 4 === 0 && (p = -v.size, c = 3 * v.size + 4 * v.size * o), v.rtl && (p = -p), r() || (d = p, p = 0);
                                var u = "rotateX(" + (r() ? 0 : -n) + "deg) rotateY(" + (r() ? n : 0) + "deg) translate3d(" + p + "px, " + d + "px, " + c + "px)";
                                if (1 >= l && l > -1 && (t = 90 * s + 90 * l, v.rtl && (t = 90 * -s - 90 * l)), i.transform(u), v.params.cube.slideShadows) {
                                    var m = i.find(r() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                                        f = i.find(r() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                    0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (r() ? "left" : "top") + '"></div>'), i.append(m)), 0 === f.length && (f = a('<div class="swiper-slide-shadow-' + (r() ? "right" : "bottom") + '"></div>'), i.append(f));
                                    {
                                        i[0].progress
                                    }
                                    m.length && (m[0].style.opacity = -i[0].progress), f.length && (f[0].style.opacity = i[0].progress)
                                }
                            }
                            if (v.wrapper.css({
                                    "-webkit-transform-origin": "50% 50% -" + v.size / 2 + "px",
                                    "-moz-transform-origin": "50% 50% -" + v.size / 2 + "px",
                                    "-ms-transform-origin": "50% 50% -" + v.size / 2 + "px",
                                    "transform-origin": "50% 50% -" + v.size / 2 + "px"
                                }), v.params.cube.shadow)if (r()) e.transform("translate3d(0px, " + (v.width / 2 + v.params.cube.shadowOffset) + "px, " + -v.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + v.params.cube.shadowScale + ")"); else {
                                var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                                    g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                                    w = v.params.cube.shadowScale, b = v.params.cube.shadowScale / g,
                                    y = v.params.cube.shadowOffset;
                                e.transform("scale3d(" + w + ", 1, " + b + ") translate3d(0px, " + (v.height / 2 + y) + "px, " + -v.height / 2 / b + "px) rotateX(-90deg)")
                            }
                            var x = v.isSafari || v.isUiWebView ? -v.size / 2 : 0;
                            v.wrapper.transform("translate3d(0px,0," + x + "px) rotateX(" + (r() ? 0 : t) + "deg) rotateY(" + (r() ? -t : 0) + "deg)")
                        }, setTransition: function (e) {
                            v.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), v.params.cube.shadow && !r() && v.container.find(".swiper-cube-shadow").transition(e)
                        }
                    }, coverflow: {
                        setTranslate: function () {
                            for (var e = v.translate, t = r() ? -e + v.width / 2 : -e + v.height / 2, s = r() ? v.params.coverflow.rotate : -v.params.coverflow.rotate, i = v.params.coverflow.depth, n = 0, o = v.slides.length; o > n; n++) {
                                var l = v.slides.eq(n), p = v.slidesSizesGrid[n], d = l[0].swiperSlideOffset,
                                    c = (t - d - p / 2) / p * v.params.coverflow.modifier, u = r() ? s * c : 0,
                                    m = r() ? 0 : s * c, f = -i * Math.abs(c),
                                    h = r() ? 0 : v.params.coverflow.stretch * c,
                                    g = r() ? v.params.coverflow.stretch * c : 0;
                                Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(f) < .001 && (f = 0), Math.abs(u) < .001 && (u = 0), Math.abs(m) < .001 && (m = 0);
                                var w = "translate3d(" + g + "px," + h + "px," + f + "px)  rotateX(" + m + "deg) rotateY(" + u + "deg)";
                                if (l.transform(w), l[0].style.zIndex = -Math.abs(Math.round(c)) + 1, v.params.coverflow.slideShadows) {
                                    var b = l.find(r() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top"),
                                        y = l.find(r() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                    0 === b.length && (b = a('<div class="swiper-slide-shadow-' + (r() ? "left" : "top") + '"></div>'), l.append(b)), 0 === y.length && (y = a('<div class="swiper-slide-shadow-' + (r() ? "right" : "bottom") + '"></div>'), l.append(y)), b.length && (b[0].style.opacity = c > 0 ? c : 0), y.length && (y[0].style.opacity = -c > 0 ? -c : 0)
                                }
                            }
                            if (v.browser.ie) {
                                var x = v.wrapper[0].style;
                                x.perspectiveOrigin = t + "px 50%"
                            }
                        }, setTransition: function (e) {
                            v.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                        }
                    }
                }, v.lazy = {
                    initialImageLoaded: !1, loadImageInSlide: function (e, t) {
                        if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== v.slides.length)) {
                            var s = v.slides.eq(e),
                                r = s.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                            !s.hasClass("swiper-lazy") || s.hasClass("swiper-lazy-loaded") || s.hasClass("swiper-lazy-loading") || (r = r.add(s[0])), 0 !== r.length && r.each(function () {
                                var e = a(this);
                                e.addClass("swiper-lazy-loading");
                                var r = e.attr("data-background"), i = e.attr("data-src"), n = e.attr("data-srcset");
                                v.loadImage(e[0], i || r, n, !1, function () {
                                    if (r ? (e.css("background-image", "url(" + r + ")"), e.removeAttr("data-background")) : (n && (e.attr("srcset", n), e.removeAttr("data-srcset")), i && (e.attr("src", i), e.removeAttr("data-src"))), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), s.find(".swiper-lazy-preloader, .preloader").remove(), v.params.loop && t) {
                                        var a = s.attr("data-swiper-slide-index");
                                        if (s.hasClass(v.params.slideDuplicateClass)) {
                                            var o = v.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + v.params.slideDuplicateClass + ")");
                                            v.lazy.loadImageInSlide(o.index(), !1)
                                        } else {
                                            var l = v.wrapper.children("." + v.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');
                                            v.lazy.loadImageInSlide(l.index(), !1)
                                        }
                                    }
                                    v.emit("onLazyImageReady", v, s[0], e[0])
                                }), v.emit("onLazyImageLoad", v, s[0], e[0])
                            })
                        }
                    }, load: function () {
                        var e;
                        if (v.params.watchSlidesVisibility) v.wrapper.children("." + v.params.slideVisibleClass).each(function () {
                            v.lazy.loadImageInSlide(a(this).index())
                        }); else if (v.params.slidesPerView > 1)for (e = v.activeIndex; e < v.activeIndex + v.params.slidesPerView; e++)v.slides[e] && v.lazy.loadImageInSlide(e); else v.lazy.loadImageInSlide(v.activeIndex);
                        if (v.params.lazyLoadingInPrevNext)if (v.params.slidesPerView > 1) {
                            for (e = v.activeIndex + v.params.slidesPerView; e < v.activeIndex + v.params.slidesPerView + v.params.slidesPerView; e++)v.slides[e] && v.lazy.loadImageInSlide(e);
                            for (e = v.activeIndex - v.params.slidesPerView; e < v.activeIndex; e++)v.slides[e] && v.lazy.loadImageInSlide(e)
                        } else {
                            var t = v.wrapper.children("." + v.params.slideNextClass);
                            t.length > 0 && v.lazy.loadImageInSlide(t.index());
                            var s = v.wrapper.children("." + v.params.slidePrevClass);
                            s.length > 0 && v.lazy.loadImageInSlide(s.index())
                        }
                    }, onTransitionStart: function () {
                        v.params.lazyLoading && (v.params.lazyLoadingOnTransitionStart || !v.params.lazyLoadingOnTransitionStart && !v.lazy.initialImageLoaded) && v.lazy.load()
                    }, onTransitionEnd: function () {
                        v.params.lazyLoading && !v.params.lazyLoadingOnTransitionStart && v.lazy.load()
                    }
                }, v.scrollbar = {
                    isTouched: !1, setDragPosition: function (e) {
                        var a = v.scrollbar,
                            t = r() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
                            s = t - a.track.offset()[r() ? "left" : "top"] - a.dragSize / 2,
                            i = -v.minTranslate() * a.moveDivider, n = -v.maxTranslate() * a.moveDivider;
                        i > s ? s = i : s > n && (s = n), s = -s / a.moveDivider, v.updateProgress(s), v.setWrapperTranslate(s, !0)
                    }, dragStart: function (e) {
                        var a = v.scrollbar;
                        a.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.setDragPosition(e), clearTimeout(a.dragTimeout), a.track.transition(0), v.params.scrollbarHide && a.track.css("opacity", 1), v.wrapper.transition(100), a.drag.transition(100), v.emit("onScrollbarDragStart", v)
                    }, dragMove: function (e) {
                        var a = v.scrollbar;
                        a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), v.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), v.emit("onScrollbarDragMove", v))
                    }, dragEnd: function () {
                        var e = v.scrollbar;
                        e.isTouched && (e.isTouched = !1, v.params.scrollbarHide && (clearTimeout(e.dragTimeout), e.dragTimeout = setTimeout(function () {
                            e.track.css("opacity", 0), e.track.transition(400)
                        }, 1e3)), v.emit("onScrollbarDragEnd", v), v.params.scrollbarSnapOnRelease && v.slideReset())
                    }, enableDraggable: function () {
                        var e = v.scrollbar, t = v.support.touch ? e.track : document;
                        a(e.track).on(v.touchEvents.start, e.dragStart), a(t).on(v.touchEvents.move, e.dragMove), a(t).on(v.touchEvents.end, e.dragEnd)
                    }, disableDraggable: function () {
                        var e = v.scrollbar, t = v.support.touch ? e.track : document;
                        a(e.track).off(v.touchEvents.start, e.dragStart), a(t).off(v.touchEvents.move, e.dragMove), a(t).off(v.touchEvents.end, e.dragEnd)
                    }, set: function () {
                        if (v.params.scrollbar) {
                            var e = v.scrollbar;
                            e.track = a(v.params.scrollbar), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = r() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = v.size / v.virtualSize, e.moveDivider = e.divider * (e.trackSize / v.size), e.dragSize = e.trackSize * e.divider, r() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.track[0].style.display = e.divider >= 1 ? "none" : "", v.params.scrollbarHide && (e.track[0].style.opacity = 0)
                        }
                    }, setTranslate: function () {
                        if (v.params.scrollbar) {
                            var e, a = v.scrollbar, t = (v.translate || 0, a.dragSize);
                            e = (a.trackSize - a.dragSize) * v.progress, v.rtl && r() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : 0 > e ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), r() ? (a.drag.transform(v.support.transforms3d ? "translate3d(" + e + "px, 0, 0)" : "translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (a.drag.transform(v.support.transforms3d ? "translate3d(0px, " + e + "px, 0)" : "translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), v.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function () {
                                a.track[0].style.opacity = 0, a.track.transition(400)
                            }, 1e3))
                        }
                    }, setTransition: function (e) {
                        v.params.scrollbar && v.scrollbar.drag.transition(e)
                    }
                }, v.controller = {
                    LinearSpline: function (e, a) {
                        this.x = e, this.y = a, this.lastIndex = e.length - 1;
                        {
                            var t, s;
                            this.x.length
                        }
                        this.interpolate = function (e) {
                            return e ? (s = r(this.x, e), t = s - 1, (e - this.x[t]) * (this.y[s] - this.y[t]) / (this.x[s] - this.x[t]) + this.y[t]) : 0
                        };
                        var r = function () {
                            var e, a, t;
                            return function (s, r) {
                                for (a = -1, e = s.length; e - a > 1;)s[t = e + a >> 1] <= r ? a = t : e = t;
                                return e
                            }
                        }()
                    }, getInterpolateFunction: function (e) {
                        v.controller.spline || (v.controller.spline = v.params.loop ? new v.controller.LinearSpline(v.slidesGrid, e.slidesGrid) : new v.controller.LinearSpline(v.snapGrid, e.snapGrid))
                    }, setTranslate: function (e, a) {
                        function s(a) {
                            e = a.rtl && "horizontal" === a.params.direction ? -v.translate : v.translate, "slide" === v.params.controlBy && (v.controller.getInterpolateFunction(a), i = -v.controller.spline.interpolate(-e)), i && "container" !== v.params.controlBy || (r = (a.maxTranslate() - a.minTranslate()) / (v.maxTranslate() - v.minTranslate()), i = (e - v.minTranslate()) * r + a.minTranslate()), v.params.controlInverse && (i = a.maxTranslate() - i), a.updateProgress(i), a.setWrapperTranslate(i, !1, v), a.updateActiveIndex()
                        }

                        var r, i, n = v.params.control;
                        if (v.isArray(n))for (var o = 0; o < n.length; o++)n[o] !== a && n[o] instanceof t && s(n[o]); else n instanceof t && a !== n && s(n)
                    }, setTransition: function (e, a) {
                        function s(a) {
                            a.setWrapperTransition(e, v), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function () {
                                i && (a.params.loop && "slide" === v.params.controlBy && a.fixLoop(), a.onTransitionEnd())
                            }))
                        }

                        var r, i = v.params.control;
                        if (v.isArray(i))for (r = 0; r < i.length; r++)i[r] !== a && i[r] instanceof t && s(i[r]); else i instanceof t && a !== i && s(i)
                    }
                }, v.hashnav = {
                    init: function () {
                        if (v.params.hashnav) {
                            v.hashnav.initialized = !0;
                            var e = document.location.hash.replace("#", "");
                            if (e)for (var a = 0, t = 0, s = v.slides.length; s > t; t++) {
                                var r = v.slides.eq(t), i = r.attr("data-hash");
                                if (i === e && !r.hasClass(v.params.slideDuplicateClass)) {
                                    var n = r.index();
                                    v.slideTo(n, a, v.params.runCallbacksOnInit, !0)
                                }
                            }
                        }
                    }, setHash: function () {
                        v.hashnav.initialized && v.params.hashnav && (document.location.hash = v.slides.eq(v.activeIndex).attr("data-hash") || "")
                    }
                }, v.disableKeyboardControl = function () {
                    a(document).off("keydown", p)
                }, v.enableKeyboardControl = function () {
                    a(document).on("keydown", p)
                }, v.mousewheel = {
                    event: !1,
                    lastScrollTime: (new window.Date).getTime()
                }, v.params.mousewheelControl) {
                try {
                    new window.WheelEvent("wheel"), v.mousewheel.event = "wheel"
                } catch (G) {
                }
                v.mousewheel.event || void 0 === document.onmousewheel || (v.mousewheel.event = "mousewheel"), v.mousewheel.event || (v.mousewheel.event = "DOMMouseScroll")
            }
            v.disableMousewheelControl = function () {
                return v.mousewheel.event ? (v.container.off(v.mousewheel.event, d), !0) : !1
            }, v.enableMousewheelControl = function () {
                return v.mousewheel.event ? (v.container.on(v.mousewheel.event, d), !0) : !1
            }, v.parallax = {
                setTranslate: function () {
                    v.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                        c(this, v.progress)
                    }), v.slides.each(function () {
                        var e = a(this);
                        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                            var a = Math.min(Math.max(e[0].progress, -1), 1);
                            c(this, a)
                        })
                    })
                }, setTransition: function (e) {
                    "undefined" == typeof e && (e = v.params.speed), v.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                        var t = a(this), s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (s = 0), t.transition(s)
                    })
                }
            }, v._plugins = [];
            for (var B in v.plugins) {
                var O = v.plugins[B](v, v.params[B]);
                O && v._plugins.push(O)
            }
            return v.callPlugins = function (e) {
                for (var a = 0; a < v._plugins.length; a++)e in v._plugins[a] && v._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, v.emitterEventListeners = {}, v.emit = function (e) {
                v.params[e] && v.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var a;
                if (v.emitterEventListeners[e])for (a = 0; a < v.emitterEventListeners[e].length; a++)v.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                v.callPlugins && v.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, v.on = function (e, a) {
                return e = u(e), v.emitterEventListeners[e] || (v.emitterEventListeners[e] = []), v.emitterEventListeners[e].push(a), v
            }, v.off = function (e, a) {
                var t;
                if (e = u(e), "undefined" == typeof a)return v.emitterEventListeners[e] = [], v;
                if (v.emitterEventListeners[e] && 0 !== v.emitterEventListeners[e].length) {
                    for (t = 0; t < v.emitterEventListeners[e].length; t++)v.emitterEventListeners[e][t] === a && v.emitterEventListeners[e].splice(t, 1);
                    return v
                }
            }, v.once = function (e, a) {
                e = u(e);
                var t = function () {
                    a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), v.off(e, t)
                };
                return v.on(e, t), v
            }, v.a11y = {
                makeFocusable: function (e) {
                    return e.attr("tabIndex", "0"), e
                },
                addRole: function (e, a) {
                    return e.attr("role", a), e
                },
                addLabel: function (e, a) {
                    return e.attr("aria-label", a), e
                },
                disable: function (e) {
                    return e.attr("aria-disabled", !0), e
                },
                enable: function (e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function (e) {
                    13 === e.keyCode && (a(e.target).is(v.params.nextButton) ? (v.onClickNext(e), v.a11y.notify(v.isEnd ? v.params.lastSlideMessage : v.params.nextSlideMessage)) : a(e.target).is(v.params.prevButton) && (v.onClickPrev(e), v.a11y.notify(v.isBeginning ? v.params.firstSlideMessage : v.params.prevSlideMessage)), a(e.target).is("." + v.params.bulletClass) && a(e.target)[0].click())
                },
                liveRegion: a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function (e) {
                    var a = v.a11y.liveRegion;
                    0 !== a.length && (a.html(""), a.html(e))
                },
                init: function () {
                    if (v.params.nextButton) {
                        var e = a(v.params.nextButton);
                        v.a11y.makeFocusable(e), v.a11y.addRole(e, "button"), v.a11y.addLabel(e, v.params.nextSlideMessage)
                    }
                    if (v.params.prevButton) {
                        var t = a(v.params.prevButton);
                        v.a11y.makeFocusable(t), v.a11y.addRole(t, "button"), v.a11y.addLabel(t, v.params.prevSlideMessage)
                    }
                    a(v.container).append(v.a11y.liveRegion)
                },
                initPagination: function () {
                    v.params.pagination && v.params.paginationClickable && v.bullets && v.bullets.length && v.bullets.each(function () {
                        var e = a(this);
                        v.a11y.makeFocusable(e), v.a11y.addRole(e, "button"), v.a11y.addLabel(e, v.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                    })
                },
                destroy: function () {
                    v.a11y.liveRegion && v.a11y.liveRegion.length > 0 && v.a11y.liveRegion.remove()
                }
            }, v.init = function () {
                v.params.loop && v.createLoop(), v.updateContainerSize(), v.updateSlidesSize(), v.updatePagination(), v.params.scrollbar && v.scrollbar && (v.scrollbar.set(), v.params.scrollbarDraggable && v.scrollbar.enableDraggable()), "slide" !== v.params.effect && v.effects[v.params.effect] && (v.params.loop || v.updateProgress(), v.effects[v.params.effect].setTranslate()), v.params.loop ? v.slideTo(v.params.initialSlide + v.loopedSlides, 0, v.params.runCallbacksOnInit) : (v.slideTo(v.params.initialSlide, 0, v.params.runCallbacksOnInit), 0 === v.params.initialSlide && (v.parallax && v.params.parallax && v.parallax.setTranslate(), v.lazy && v.params.lazyLoading && (v.lazy.load(), v.lazy.initialImageLoaded = !0))), v.attachEvents(), v.params.observer && v.support.observer && v.initObservers(), v.params.preloadImages && !v.params.lazyLoading && v.preloadImages(), v.params.autoplay && v.startAutoplay(), v.params.keyboardControl && v.enableKeyboardControl && v.enableKeyboardControl(), v.params.mousewheelControl && v.enableMousewheelControl && v.enableMousewheelControl(), v.params.hashnav && v.hashnav && v.hashnav.init(), v.params.a11y && v.a11y && v.a11y.init(), v.emit("onInit", v)
            }, v.cleanupStyles = function () {
                v.container.removeClass(v.classNames.join(" ")).removeAttr("style"), v.wrapper.removeAttr("style"), v.slides && v.slides.length && v.slides.removeClass([v.params.slideVisibleClass, v.params.slideActiveClass, v.params.slideNextClass, v.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), v.paginationContainer && v.paginationContainer.length && v.paginationContainer.removeClass(v.params.paginationHiddenClass), v.bullets && v.bullets.length && v.bullets.removeClass(v.params.bulletActiveClass), v.params.prevButton && a(v.params.prevButton).removeClass(v.params.buttonDisabledClass), v.params.nextButton && a(v.params.nextButton).removeClass(v.params.buttonDisabledClass), v.params.scrollbar && v.scrollbar && (v.scrollbar.track && v.scrollbar.track.length && v.scrollbar.track.removeAttr("style"), v.scrollbar.drag && v.scrollbar.drag.length && v.scrollbar.drag.removeAttr("style"))
            }, v.destroy = function (e, a) {
                v.detachEvents(), v.stopAutoplay(), v.params.scrollbar && v.scrollbar && v.params.scrollbarDraggable && v.scrollbar.disableDraggable(), v.params.loop && v.destroyLoop(), a && v.cleanupStyles(), v.disconnectObservers(), v.params.keyboardControl && v.disableKeyboardControl && v.disableKeyboardControl(), v.params.mousewheelControl && v.disableMousewheelControl && v.disableMousewheelControl(), v.params.a11y && v.a11y && v.a11y.destroy(), v.emit("onDestroy"), e !== !1 && (v = null)
            }, v.init(), v
        }
    };
    t.prototype = {
        isSafari: function () {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function (e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
        },
        device: function () {
            var e = navigator.userAgent, a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                t = e.match(/(iPad).*OS\s([\d_]+)/), s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                r = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);
            return {ios: t || r || s, android: a}
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function () {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(), flexbox: function () {
                for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)if (a[t] in e)return !0
            }(), observer: function () {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }()
        },
        plugins: {}
    };
    for (var s = ["jQuery", "Zepto", "Dom7"], r = 0; r < s.length; r++)window[s[r]] && e(window[s[r]]);
    var i;
    i = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, i && ("transitionEnd" in i.fn || (i.fn.transitionEnd = function (e) {
        function a(i) {
            if (i.target === this)for (e.call(this, i), t = 0; t < s.length; t++)r.off(s[t], a)
        }

        var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            r = this;
        if (e)for (t = 0; t < s.length; t++)r.on(s[t], a);
        return this
    }), "transform" in i.fn || (i.fn.transform = function (e) {
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
        }
        return this
    }), "transition" in i.fn || (i.fn.transition = function (e) {
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
        }
        return this
    })), window.Swiper = t
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function () {
        "use strict";
        return window.Swiper
    });
(function () {
    (function (f, l, k) {
        var h;
        h = function () {
            function d(a, c) {
                this.options = f.extend(!0, {}, this.Defaults, c);
                this.$element = f(a);
                this.initialize()
            }

            d.prototype.Defaults = {
                flickrbase: "http://api.flickr.com/services/feeds/",
                feedapi: "photos_public.gne",
                qstrings: {ids: "", tags: "", tagmode: "", lang: "en-us", format: "json", jsoncallback: "?"},
                dateFormat: "%b/%d/%Y",
                cleanDescription: !0,
                callback: !1
            };
            d.prototype.initialize = function () {
                this.fetchData(this.makeUrl())
            };
            d.prototype.makeUrl = function () {
                var a, c, b, e;
                e = this.options.flickrbase + this.options.feedapi + "?";
                a = !0;
                b = {
                    ids: this.$element.attr("data-flickr-id") ? this.$element.attr("data-flickr-id") : this.options.qstrings.ids,
                    tags: this.$element.attr("data-flickr-tags") ? this.$element.attr("data-flickr-tags") : this.options.qstrings.tags,
                    tagmode: this.$element.attr("data-flickr-tagmode") ? this.$element.attr("data-flickr-tagmode") : this.options.qstrings.tagmode,
                    lang: this.$element.attr("data-flickr-lang") ? this.$element.attr("data-flickr-lang") : this.options.qstrings.lang,
                    format: "json",
                    jsoncallback: "?"
                };
                for (c in b)b[c] && (a || (e += "&"), e += c + "=" + b[c], a = !1);
                return e
            };
            d.prototype.fetchData = function (a) {
                var c;
                c = this;
                return f.getJSON(a, function (a) {
                    f.each(a.items, function (a, b) {
                        a < c.$element.find('[data-type="flickr-item"]').length && (c.options.cleanDescription && c.cleanDescription(b), c.setImageSizes(b), b.author_name = c.getAuthor(b.author), b.dating = c.dating(b.date_taken, !1), b.datetime = c.dating(b.date_taken, !0), c.setHTML(b, a))
                    });
                    "function" === typeof c.options.callback && c.options.callback()
                })
            };
            d.prototype.cleanDescription = function (a) {
                var c, b;
                b = /<p>(.*?)<\/p>/g;
                c = a.description;
                b.test(c) && (a.description = c.match(b)[2], null != a.description && (a.description = a.description.replace("<p>", "").replace("</p>", "")));
                return a
            };
            d.prototype.setImageSizes = function (a) {
                var c, b, e, d;
                d = "_s _q _t _m _n _- _z _c _b _h _k _o ".split(" ");
                c = 0;
                for (b = d.length; c < b; c++)e = d[c], a["image" + e] = a.media.m.replace("_m", e);
                delete a.media;
                return a
            };
            d.prototype.getAuthor = function (a) {
                a = /\(([^]+)\)/.exec(a);
                return null != a[1] ? a[1] : !1
            };
            d.prototype.dating = function (a, c) {
                var b, e, d, g, f;
                b = new Date(Date.parse(a));
                e = "January February March April May June July August September October November December".split(" ");
                b = {
                    "%d": b.getDate(),
                    "%m": b.getMonth() + 1,
                    "%b": e[b.getMonth()].substr(0, 3),
                    "%B": e[b.getMonth()],
                    "%y": String(b.getFullYear()).slice(-2),
                    "%Y": b.getFullYear()
                };
                a = c ? "%Y-%m-%d" : this.$element.attr("data-flickr-date-format") ? this.$element.attr("data-flickr-date-format") : this.options.dateFormat;
                d = a.match(/%[dmbByY]/g);
                g = 0;
                for (f = d.length; g < f; g++)e = d[g], a = a.replace(e, b[e]);
                return a
            };
            d.prototype.setHTML = function (a, c) {
                var b, e;
                e = this;
                b = this.$element.find('[data-type="flickr-item"]');
                e.parseAttributes(b.eq(c), a);
                b.eq(c).find("*").each(function () {
                    e.parseAttributes(f(this), a)
                })
            };
            d.prototype.parseAttributes = function (a, c) {
                var b, e, d, g, f, h;
                d = a.data();
                for (g in d)if (d.hasOwnProperty(g) && "string" === typeof d[g])for (e = d[g].split(/\s?,\s?/i), f = 0, h = e.length; f < h; f++)b = e[f], "text" === b.toLowerCase() ? a.html(c[g]) : a.attr(b, c[g])
            };
            return d
        }();
        f.fn.extend({
            RDFlickr: function (d) {
                return this.each(function () {
                    var a;
                    a = f(this);
                    if (!a.data("RDFlickr"))return a.data("RDFlickr", new h(this, d))
                })
            }
        });
        return k.RDFlickr = h
    })(window.jQuery, document, window);
    "undefined" !== typeof module && null !== module ? module.exports = window.RDFlickr : "function" === typeof define && define.amd && define(["jquery"], function () {
            return window.RDFlickr
        })
}).call(this);
!function (a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a(); else if ("function" == typeof define && define.amd) define([], a); else {
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.ProgressBar = a()
    }
}(function () {
    var a;
    return function b(a, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!a[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i)return i(g, !0);
                    if (f)return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw j.code = "MODULE_NOT_FOUND", j
                }
                var k = c[g] = {exports: {}};
                a[g][0].call(k.exports, function (b) {
                    var c = a[g][1][b];
                    return e(c ? c : b)
                }, k, k.exports, b, a, c, d)
            }
            return c[g].exports
        }

        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)e(d[g]);
        return e
    }({
        1: [function (b, c, d) {
            (function () {
                var b = this, e = function () {
                    "use strict";
                    function e() {
                    }

                    function f(a, b) {
                        var c;
                        for (c in a)Object.hasOwnProperty.call(a, c) && b(c)
                    }

                    function g(a, b) {
                        return f(b, function (c) {
                            a[c] = b[c]
                        }), a
                    }

                    function h(a, b) {
                        f(b, function (c) {
                            "undefined" == typeof a[c] && (a[c] = b[c])
                        })
                    }

                    function i(a, b, c, d, e, f, g) {
                        var h, i, k, l = f > a ? 0 : (a - f) / e;
                        for (h in b)b.hasOwnProperty(h) && (i = g[h], k = "function" == typeof i ? i : o[i], b[h] = j(c[h], d[h], k, l));
                        return b
                    }

                    function j(a, b, c, d) {
                        return a + (b - a) * c(d)
                    }

                    function k(a, b) {
                        var c = n.prototype.filter, d = a._filterArgs;
                        f(c, function (e) {
                            "undefined" != typeof c[e][b] && c[e][b].apply(a, d)
                        })
                    }

                    function l(a, b, c, d, e, f, g, h, j, l, m) {
                        v = b + c + d, w = Math.min(m || u(), v), x = w >= v, y = d - (v - w), a.isPlaying() && !x ? (a._scheduleId = l(a._timeoutHandler, s), k(a, "beforeTween"), b + c > w ? i(1, e, f, g, 1, 1, h) : i(w, e, f, g, d, b + c, h), k(a, "afterTween"), j(e, a._attachment, y)) : a.isPlaying() && x && (j(g, a._attachment, y), a.stop(!0))
                    }

                    function m(a, b) {
                        var c = {}, d = typeof b;
                        return "string" === d || "function" === d ? f(a, function (a) {
                            c[a] = b
                        }) : f(a, function (a) {
                            c[a] || (c[a] = b[a] || q)
                        }), c
                    }

                    function n(a, b) {
                        this._currentState = a || {}, this._configured = !1, this._scheduleFunction = p, "undefined" != typeof b && this.setConfig(b)
                    }

                    var o, p, q = "linear", r = 500, s = 1e3 / 60, t = Date.now ? Date.now : function () {
                        return +new Date
                    }, u = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : t;
                    p = "undefined" != typeof window ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame || setTimeout : setTimeout;
                    var v, w, x, y;
                    return n.prototype.tween = function (a) {
                        return this._isTweening ? this : (void 0 === a && this._configured || this.setConfig(a), this._timestamp = u(), this._start(this.get(), this._attachment), this.resume())
                    }, n.prototype.setConfig = function (a) {
                        a = a || {}, this._configured = !0, this._attachment = a.attachment, this._pausedAtTime = null, this._scheduleId = null, this._delay = a.delay || 0, this._start = a.start || e, this._step = a.step || e, this._finish = a.finish || e, this._duration = a.duration || r, this._currentState = g({}, a.from) || this.get(), this._originalState = this.get(), this._targetState = g({}, a.to) || this.get();
                        var b = this;
                        this._timeoutHandler = function () {
                            l(b, b._timestamp, b._delay, b._duration, b._currentState, b._originalState, b._targetState, b._easing, b._step, b._scheduleFunction)
                        };
                        var c = this._currentState, d = this._targetState;
                        return h(d, c), this._easing = m(c, a.easing || q), this._filterArgs = [c, this._originalState, d, this._easing], k(this, "tweenCreated"), this
                    }, n.prototype.get = function () {
                        return g({}, this._currentState)
                    }, n.prototype.set = function (a) {
                        this._currentState = a
                    }, n.prototype.pause = function () {
                        return this._pausedAtTime = u(), this._isPaused = !0, this
                    }, n.prototype.resume = function () {
                        return this._isPaused && (this._timestamp += u() - this._pausedAtTime), this._isPaused = !1, this._isTweening = !0, this._timeoutHandler(), this
                    }, n.prototype.seek = function (a) {
                        a = Math.max(a, 0);
                        var b = u();
                        return this._timestamp + a === 0 ? this : (this._timestamp = b - a, this.isPlaying() || (this._isTweening = !0, this._isPaused = !1, l(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, b), this.pause()), this)
                    }, n.prototype.stop = function (a) {
                        return this._isTweening = !1, this._isPaused = !1, this._timeoutHandler = e, (b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.oCancelAnimationFrame || b.msCancelAnimationFrame || b.mozCancelRequestAnimationFrame || b.clearTimeout)(this._scheduleId), a && (k(this, "beforeTween"), i(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), k(this, "afterTween"), k(this, "afterTweenEnd"), this._finish.call(this, this._currentState, this._attachment)), this
                    }, n.prototype.isPlaying = function () {
                        return this._isTweening && !this._isPaused
                    }, n.prototype.setScheduleFunction = function (a) {
                        this._scheduleFunction = a
                    }, n.prototype.dispose = function () {
                        var a;
                        for (a in this)this.hasOwnProperty(a) && delete this[a]
                    }, n.prototype.filter = {}, n.prototype.formula = {
                        linear: function (a) {
                            return a
                        }
                    }, o = n.prototype.formula, g(n, {
                        now: u,
                        each: f,
                        tweenProps: i,
                        tweenProp: j,
                        applyFilter: k,
                        shallowCopy: g,
                        defaults: h,
                        composeEasingObject: m
                    }), "function" == typeof SHIFTY_DEBUG_NOW && (b.timeoutHandler = l), "object" == typeof d ? c.exports = n : "function" == typeof a && a.amd ? a(function () {
                        return n
                    }) : "undefined" == typeof b.Tweenable && (b.Tweenable = n), n
                }();
                !function () {
                    e.shallowCopy(e.prototype.formula, {
                        easeInQuad: function (a) {
                            return Math.pow(a, 2)
                        }, easeOutQuad: function (a) {
                            return -(Math.pow(a - 1, 2) - 1)
                        }, easeInOutQuad: function (a) {
                            return (a /= .5) < 1 ? .5 * Math.pow(a, 2) : -.5 * ((a -= 2) * a - 2)
                        }, easeInCubic: function (a) {
                            return Math.pow(a, 3)
                        }, easeOutCubic: function (a) {
                            return Math.pow(a - 1, 3) + 1
                        }, easeInOutCubic: function (a) {
                            return (a /= .5) < 1 ? .5 * Math.pow(a, 3) : .5 * (Math.pow(a - 2, 3) + 2)
                        }, easeInQuart: function (a) {
                            return Math.pow(a, 4)
                        }, easeOutQuart: function (a) {
                            return -(Math.pow(a - 1, 4) - 1)
                        }, easeInOutQuart: function (a) {
                            return (a /= .5) < 1 ? .5 * Math.pow(a, 4) : -.5 * ((a -= 2) * Math.pow(a, 3) - 2)
                        }, easeInQuint: function (a) {
                            return Math.pow(a, 5)
                        }, easeOutQuint: function (a) {
                            return Math.pow(a - 1, 5) + 1
                        }, easeInOutQuint: function (a) {
                            return (a /= .5) < 1 ? .5 * Math.pow(a, 5) : .5 * (Math.pow(a - 2, 5) + 2)
                        }, easeInSine: function (a) {
                            return -Math.cos(a * (Math.PI / 2)) + 1
                        }, easeOutSine: function (a) {
                            return Math.sin(a * (Math.PI / 2))
                        }, easeInOutSine: function (a) {
                            return -.5 * (Math.cos(Math.PI * a) - 1)
                        }, easeInExpo: function (a) {
                            return 0 === a ? 0 : Math.pow(2, 10 * (a - 1))
                        }, easeOutExpo: function (a) {
                            return 1 === a ? 1 : -Math.pow(2, -10 * a) + 1
                        }, easeInOutExpo: function (a) {
                            return 0 === a ? 0 : 1 === a ? 1 : (a /= .5) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * --a) + 2)
                        }, easeInCirc: function (a) {
                            return -(Math.sqrt(1 - a * a) - 1)
                        }, easeOutCirc: function (a) {
                            return Math.sqrt(1 - Math.pow(a - 1, 2))
                        }, easeInOutCirc: function (a) {
                            return (a /= .5) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                        }, easeOutBounce: function (a) {
                            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                        }, easeInBack: function (a) {
                            var b = 1.70158;
                            return a * a * ((b + 1) * a - b)
                        }, easeOutBack: function (a) {
                            var b = 1.70158;
                            return (a -= 1) * a * ((b + 1) * a + b) + 1
                        }, easeInOutBack: function (a) {
                            var b = 1.70158;
                            return (a /= .5) < 1 ? .5 * (a * a * (((b *= 1.525) + 1) * a - b)) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
                        }, elastic: function (a) {
                            return -1 * Math.pow(4, -8 * a) * Math.sin((6 * a - 1) * (2 * Math.PI) / 2) + 1
                        }, swingFromTo: function (a) {
                            var b = 1.70158;
                            return (a /= .5) < 1 ? .5 * (a * a * (((b *= 1.525) + 1) * a - b)) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
                        }, swingFrom: function (a) {
                            var b = 1.70158;
                            return a * a * ((b + 1) * a - b)
                        }, swingTo: function (a) {
                            var b = 1.70158;
                            return (a -= 1) * a * ((b + 1) * a + b) + 1
                        }, bounce: function (a) {
                            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                        }, bouncePast: function (a) {
                            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 2 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 2 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 2 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                        }, easeFromTo: function (a) {
                            return (a /= .5) < 1 ? .5 * Math.pow(a, 4) : -.5 * ((a -= 2) * Math.pow(a, 3) - 2)
                        }, easeFrom: function (a) {
                            return Math.pow(a, 4)
                        }, easeTo: function (a) {
                            return Math.pow(a, .25)
                        }
                    })
                }(), function () {
                    function a(a, b, c, d, e, f) {
                        function g(a) {
                            return ((n * a + o) * a + p) * a
                        }

                        function h(a) {
                            return ((q * a + r) * a + s) * a
                        }

                        function i(a) {
                            return (3 * n * a + 2 * o) * a + p
                        }

                        function j(a) {
                            return 1 / (200 * a)
                        }

                        function k(a, b) {
                            return h(m(a, b))
                        }

                        function l(a) {
                            return a >= 0 ? a : 0 - a
                        }

                        function m(a, b) {
                            var c, d, e, f, h, j;
                            for (e = a, j = 0; 8 > j; j++) {
                                if (f = g(e) - a, l(f) < b)return e;
                                if (h = i(e), l(h) < 1e-6)break;
                                e -= f / h
                            }
                            if (c = 0, d = 1, e = a, c > e)return c;
                            if (e > d)return d;
                            for (; d > c;) {
                                if (f = g(e), l(f - a) < b)return e;
                                a > f ? c = e : d = e, e = .5 * (d - c) + c
                            }
                            return e
                        }

                        var n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
                        return p = 3 * b, o = 3 * (d - b) - p, n = 1 - p - o, s = 3 * c, r = 3 * (e - c) - s, q = 1 - s - r, k(a, j(f))
                    }

                    function b(b, c, d, e) {
                        return function (f) {
                            return a(f, b, c, d, e, 1)
                        }
                    }

                    e.setBezierFunction = function (a, c, d, f, g) {
                        var h = b(c, d, f, g);
                        return h.displayName = a, h.x1 = c, h.y1 = d, h.x2 = f, h.y2 = g, e.prototype.formula[a] = h
                    }, e.unsetBezierFunction = function (a) {
                        delete e.prototype.formula[a]
                    }
                }(), function () {
                    function a(a, b, c, d, f, g) {
                        return e.tweenProps(d, b, a, c, 1, g, f)
                    }

                    var b = new e;
                    b._filterArgs = [], e.interpolate = function (c, d, f, g, h) {
                        var i = e.shallowCopy({}, c), j = h || 0, k = e.composeEasingObject(c, g || "linear");
                        b.set({});
                        var l = b._filterArgs;
                        l.length = 0, l[0] = i, l[1] = c, l[2] = d, l[3] = k, e.applyFilter(b, "tweenCreated"), e.applyFilter(b, "beforeTween");
                        var m = a(c, i, d, f, k, j);
                        return e.applyFilter(b, "afterTween"), m
                    }
                }(), function (a) {
                    function b(a, b) {
                        var c, d = [], e = a.length;
                        for (c = 0; e > c; c++)d.push("_" + b + "_" + c);
                        return d
                    }

                    function c(a) {
                        var b = a.match(v);
                        return b ? (1 === b.length || a[0].match(u)) && b.unshift("") : b = ["", ""], b.join(A)
                    }

                    function d(b) {
                        a.each(b, function (a) {
                            var c = b[a];
                            "string" == typeof c && c.match(z) && (b[a] = e(c))
                        })
                    }

                    function e(a) {
                        return i(z, a, f)
                    }

                    function f(a) {
                        var b = g(a);
                        return "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")"
                    }

                    function g(a) {
                        return a = a.replace(/#/, ""), 3 === a.length && (a = a.split(""), a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]), B[0] = h(a.substr(0, 2)), B[1] = h(a.substr(2, 2)), B[2] = h(a.substr(4, 2)), B
                    }

                    function h(a) {
                        return parseInt(a, 16)
                    }

                    function i(a, b, c) {
                        var d = b.match(a), e = b.replace(a, A);
                        if (d)for (var f, g = d.length, h = 0; g > h; h++)f = d.shift(), e = e.replace(A, c(f));
                        return e
                    }

                    function j(a) {
                        return i(x, a, k)
                    }

                    function k(a) {
                        for (var b = a.match(w), c = b.length, d = a.match(y)[0], e = 0; c > e; e++)d += parseInt(b[e], 10) + ",";
                        return d = d.slice(0, -1) + ")"
                    }

                    function l(d) {
                        var e = {};
                        return a.each(d, function (a) {
                            var f = d[a];
                            if ("string" == typeof f) {
                                var g = r(f);
                                e[a] = {formatString: c(f), chunkNames: b(g, a)}
                            }
                        }), e
                    }

                    function m(b, c) {
                        a.each(c, function (a) {
                            for (var d = b[a], e = r(d), f = e.length, g = 0; f > g; g++)b[c[a].chunkNames[g]] = +e[g];
                            delete b[a]
                        })
                    }

                    function n(b, c) {
                        a.each(c, function (a) {
                            var d = b[a], e = o(b, c[a].chunkNames), f = p(e, c[a].chunkNames);
                            d = q(c[a].formatString, f), b[a] = j(d)
                        })
                    }

                    function o(a, b) {
                        for (var c, d = {}, e = b.length, f = 0; e > f; f++)c = b[f], d[c] = a[c], delete a[c];
                        return d
                    }

                    function p(a, b) {
                        C.length = 0;
                        for (var c = b.length, d = 0; c > d; d++)C.push(a[b[d]]);
                        return C
                    }

                    function q(a, b) {
                        for (var c = a, d = b.length, e = 0; d > e; e++)c = c.replace(A, +b[e].toFixed(4));
                        return c
                    }

                    function r(a) {
                        return a.match(w)
                    }

                    function s(b, c) {
                        a.each(c, function (a) {
                            var d, e = c[a], f = e.chunkNames, g = f.length, h = b[a];
                            if ("string" == typeof h) {
                                var i = h.split(" "), j = i[i.length - 1];
                                for (d = 0; g > d; d++)b[f[d]] = i[d] || j
                            } else
                                for (d = 0; g > d; d++)b[f[d]] = h;
                            delete b[a]
                        })
                    }

                    function t(b, c) {
                        a.each(c, function (a) {
                            var d = c[a], e = d.chunkNames, f = e.length, g = b[e[0]], h = typeof g;
                            if ("string" === h) {
                                for (var i = "", j = 0; f > j; j++)i += " " + b[e[j]], delete b[e[j]];
                                b[a] = i.substr(1)
                            } else b[a] = g
                        })
                    }

                    var u = /(\d|\-|\.)/, v = /([^\-0-9\.]+)/g, w = /[0-9.\-]+/g,
                        x = new RegExp("rgb\\(" + w.source + /,\s*/.source + w.source + /,\s*/.source + w.source + "\\)", "g"),
                        y = /^.*\(/, z = /#([0-9]|[a-f]){3,6}/gi, A = "VAL", B = [], C = [];
                    a.prototype.filter.token = {
                        tweenCreated: function (a, b, c, e) {
                            d(a), d(b), d(c), this._tokenData = l(a)
                        }, beforeTween: function (a, b, c, d) {
                            s(d, this._tokenData), m(a, this._tokenData), m(b, this._tokenData), m(c, this._tokenData)
                        }, afterTween: function (a, b, c, d) {
                            n(a, this._tokenData), n(b, this._tokenData), n(c, this._tokenData), t(d, this._tokenData)
                        }
                    }
                }(e)
            }).call(null)
        }, {}],
        2: [function (a, b, c) {
            var d = a("./shape"), e = a("./utils"), f = function (a, b) {
                this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}", d.apply(this, arguments)
            };
            f.prototype = new d, f.prototype.constructor = f, f.prototype._pathString = function (a) {
                var b = a.strokeWidth;
                a.trailWidth && a.trailWidth > a.strokeWidth && (b = a.trailWidth);
                var c = 50 - b / 2;
                return e.render(this._pathTemplate, {radius: c, "2radius": 2 * c})
            }, f.prototype._trailString = function (a) {
                return this._pathString(a)
            }, b.exports = f
        }, {"./shape": 7, "./utils": 8}],
        3: [function (a, b, c) {
            var d = a("./shape"), e = a("./utils"), f = function (a, b) {
                this._pathTemplate = "M 0,{center} L 100,{center}", d.apply(this, arguments)
            };
            f.prototype = new d, f.prototype.constructor = f, f.prototype._initializeSvg = function (a, b) {
                a.setAttribute("viewBox", "0 0 100 " + b.strokeWidth), a.setAttribute("preserveAspectRatio", "none")
            }, f.prototype._pathString = function (a) {
                return e.render(this._pathTemplate, {center: a.strokeWidth / 2})
            }, f.prototype._trailString = function (a) {
                return this._pathString(a)
            }, b.exports = f
        }, {"./shape": 7, "./utils": 8}],
        4: [function (a, b, c) {
            b.exports = {
                Line: a("./line"),
                Circle: a("./circle"),
                SemiCircle: a("./semicircle"),
                Path: a("./path"),
                Shape: a("./shape"),
                utils: a("./utils")
            }
        }, {"./circle": 2, "./line": 3, "./path": 5, "./semicircle": 6, "./shape": 7, "./utils": 8}],
        5: [function (a, b, c) {
            var d = a("shifty"), e = a("./utils"),
                f = {easeIn: "easeInCubic", easeOut: "easeOutCubic", easeInOut: "easeInOutCubic"}, g = function (a, b) {
                    b = e.extend({
                        duration: 800, easing: "linear", from: {}, to: {}, step: function () {
                        }
                    }, b);
                    var c;
                    c = e.isString(a) ? document.querySelector(a) : a, this.path = c, this._opts = b, this._tweenable = null;
                    var d = this.path.getTotalLength();
                    this.path.style.strokeDasharray = d + " " + d, this.set(0)
                };
            g.prototype.value = function () {
                var a = this._getComputedDashOffset(), b = this.path.getTotalLength(), c = 1 - a / b;
                return parseFloat(c.toFixed(6), 10)
            }, g.prototype.set = function (a) {
                this.stop(), this.path.style.strokeDashoffset = this._progressToOffset(a);
                var b = this._opts.step;
                if (e.isFunction(b)) {
                    var c = this._easing(this._opts.easing), d = this._calculateTo(a, c), f = this._opts.shape || this;
                    b(d, f, this._opts.attachment)
                }
            }, g.prototype.stop = function () {
                this._stopTween(), this.path.style.strokeDashoffset = this._getComputedDashOffset()
            }, g.prototype.animate = function (a, b, c) {
                b = b || {}, e.isFunction(b) && (c = b, b = {});
                var f = e.extend({}, b), g = e.extend({}, this._opts);
                b = e.extend(g, b);
                var h = this._easing(b.easing), i = this._resolveFromAndTo(a, h, f);
                this.stop(), this.path.getBoundingClientRect();
                var j = this._getComputedDashOffset(), k = this._progressToOffset(a), l = this;
                this._tweenable = new d, this._tweenable.tween({
                    from: e.extend({offset: j}, i.from),
                    to: e.extend({offset: k}, i.to),
                    duration: b.duration,
                    easing: h,
                    step: function (a) {
                        l.path.style.strokeDashoffset = a.offset;
                        var c = b.shape || l;
                        b.step(a, c, b.attachment)
                    },
                    finish: function (a) {
                        e.isFunction(c) && c()
                    }
                })
            }, g.prototype._getComputedDashOffset = function () {
                var a = window.getComputedStyle(this.path, null);
                return parseFloat(a.getPropertyValue("stroke-dashoffset"), 10)
            }, g.prototype._progressToOffset = function (a) {
                var b = this.path.getTotalLength();
                return b - a * b
            }, g.prototype._resolveFromAndTo = function (a, b, c) {
                return c.from && c.to ? {from: c.from, to: c.to} : {
                    from: this._calculateFrom(b),
                    to: this._calculateTo(a, b)
                }
            }, g.prototype._calculateFrom = function (a) {
                return d.interpolate(this._opts.from, this._opts.to, this.value(), a)
            }, g.prototype._calculateTo = function (a, b) {
                return d.interpolate(this._opts.from, this._opts.to, a, b)
            }, g.prototype._stopTween = function () {
                null !== this._tweenable && (this._tweenable.stop(), this._tweenable.dispose(), this._tweenable = null)
            }, g.prototype._easing = function (a) {
                return f.hasOwnProperty(a) ? f[a] : a
            }, b.exports = g
        }, {"./utils": 8, shifty: 1}],
        6: [function (a, b, c) {
            var d = a("./shape"), e = a("./circle"), f = a("./utils"), g = function (a, b) {
                this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0", d.apply(this, arguments)
            };
            g.prototype = new d, g.prototype.constructor = g, g.prototype._initializeSvg = function (a, b) {
                a.setAttribute("viewBox", "0 0 100 50")
            }, g.prototype._initializeTextElement = function (a, b, c) {
                a.text.style && (c.style.top = "auto", c.style.bottom = "0", a.text.alignToBottom ? f.setStyle(c, "transform", "translate(-50%, 0)") : f.setStyle(c, "transform", "translate(-50%, 50%)"))
            }, g.prototype._pathString = e.prototype._pathString, g.prototype._trailString = e.prototype._trailString, b.exports = g
        }, {"./circle": 2, "./shape": 7, "./utils": 8}],
        7: [function (a, b, c) {
            var d = a("./path"), e = a("./utils"), f = "Object is destroyed", g = function h(a, b) {
                if (!(this instanceof h))throw new Error("Constructor was called without new keyword");
                if (0 !== arguments.length) {
                    this._opts = e.extend({
                        color: "#555",
                        strokeWidth: 1,
                        trailColor: null,
                        trailWidth: null,
                        fill: null,
                        text: {
                            style: {
                                color: null,
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                padding: 0,
                                margin: 0,
                                transform: {prefix: !0, value: "translate(-50%, -50%)"}
                            }, alignToBottom: !0, value: "", className: "progressbar-text"
                        },
                        svgStyle: {display: "block", width: "100%"}
                    }, b, !0);
                    var c, f = this._createSvgView(this._opts);
                    if (c = e.isString(a) ? document.querySelector(a) : a, !c)throw new Error("Container does not exist: " + a);
                    this._container = c, this._container.appendChild(f.svg), this._opts.svgStyle && e.setStyles(f.svg, this._opts.svgStyle), this.text = null, this._opts.text.value && (this.text = this._createTextElement(this._opts, this._container), this._container.appendChild(this.text)), this.svg = f.svg, this.path = f.path, this.trail = f.trail;
                    var g = e.extend({attachment: void 0, shape: this}, this._opts);
                    this._progressPath = new d(f.path, g)
                }
            };
            g.prototype.animate = function (a, b, c) {
                if (null === this._progressPath)throw new Error(f);
                this._progressPath.animate(a, b, c)
            }, g.prototype.stop = function () {
                if (null === this._progressPath)throw new Error(f);
                void 0 !== this._progressPath && this._progressPath.stop()
            }, g.prototype.destroy = function () {
                if (null === this._progressPath)throw new Error(f);
                this.stop(), this.svg.parentNode.removeChild(this.svg), this.svg = null, this.path = null, this.trail = null, this._progressPath = null, null !== this.text && (this.text.parentNode.removeChild(this.text), this.text = null)
            }, g.prototype.set = function (a) {
                if (null === this._progressPath)throw new Error(f);
                this._progressPath.set(a)
            }, g.prototype.value = function () {
                if (null === this._progressPath)throw new Error(f);
                return void 0 === this._progressPath ? 0 : this._progressPath.value()
            }, g.prototype.setText = function (a) {
                if (null === this._progressPath)throw new Error(f);
                null === this.text && (this.text = this._createTextElement(this._opts, this._container), this._container.appendChild(this.text)), this.text.removeChild(this.text.firstChild), this.text.appendChild(document.createTextNode(a))
            }, g.prototype._createSvgView = function (a) {
                var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                this._initializeSvg(b, a);
                var c = null;
                (a.trailColor || a.trailWidth) && (c = this._createTrail(a), b.appendChild(c));
                var d = this._createPath(a);
                return b.appendChild(d), {svg: b, path: d, trail: c}
            }, g.prototype._initializeSvg = function (a, b) {
                a.setAttribute("viewBox", "0 0 100 100")
            }, g.prototype._createPath = function (a) {
                var b = this._pathString(a);
                return this._createPathElement(b, a)
            }, g.prototype._createTrail = function (a) {
                var b = this._trailString(a), c = e.extend({}, a);
                return c.trailColor || (c.trailColor = "#eee"), c.trailWidth || (c.trailWidth = c.strokeWidth), c.color = c.trailColor, c.strokeWidth = c.trailWidth, c.fill = null, this._createPathElement(b, c)
            }, g.prototype._createPathElement = function (a, b) {
                var c = document.createElementNS("http://www.w3.org/2000/svg", "path");
                return c.setAttribute("d", a), c.setAttribute("stroke", b.color), c.setAttribute("stroke-width", b.strokeWidth), b.fill ? c.setAttribute("fill", b.fill) : c.setAttribute("fill-opacity", "0"), c
            }, g.prototype._createTextElement = function (a, b) {
                var c = document.createElement("p");
                c.appendChild(document.createTextNode(a.text.value));
                var d = a.text.style;
                return d && (b.style.position = "relative", e.setStyles(c, d), d.color || (c.style.color = a.color)), c.className = a.text.className, this._initializeTextElement(a, b, c), c
            }, g.prototype._initializeTextElement = function (a, b, c) {
            }, g.prototype._pathString = function (a) {
                throw new Error("Override this function for each progress bar")
            }, g.prototype._trailString = function (a) {
                throw new Error("Override this function for each progress bar")
            }, b.exports = g
        }, {"./path": 5, "./utils": 8}],
        8: [function (a, b, c) {
            function d(a, b, c) {
                a = a || {}, b = b || {}, c = c || !1;
                for (var e in b)if (b.hasOwnProperty(e)) {
                    var f = a[e], g = b[e];
                    c && l(f) && l(g) ? a[e] = d(f, g, c) : a[e] = g
                }
                return a
            }

            function e(a, b) {
                var c = a;
                for (var d in b)if (b.hasOwnProperty(d)) {
                    var e = b[d], f = "\\{" + d + "\\}", g = new RegExp(f, "g");
                    c = c.replace(g, e)
                }
                return c
            }

            function f(a, b, c) {
                for (var d = 0; d < n.length; ++d) {
                    var e = n[d];
                    a.style[e + h(b)] = c
                }
                a.style[b] = c
            }

            function g(a, b) {
                m(b, function (b, c) {
                    null !== b && void 0 !== b && (l(b) && b.prefix === !0 ? f(a, c, b.value) : a.style[c] = b)
                })
            }

            function h(a) {
                return a.charAt(0).toUpperCase() + a.slice(1)
            }

            function i(a) {
                return "string" == typeof a || a instanceof String
            }

            function j(a) {
                return "function" == typeof a
            }

            function k(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }

            function l(a) {
                if (k(a))return !1;
                var b = typeof a;
                return "object" === b && !!a
            }

            function m(a, b) {
                for (var c in a)if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    b(d, c)
                }
            }

            var n = "Webkit Moz O ms".split(" ");
            b.exports = {
                extend: d,
                render: e,
                setStyle: f,
                setStyles: g,
                capitalize: h,
                isString: i,
                isFunction: j,
                isObject: l,
                forEachObject: m
            }
        }, {}]
    }, {}, [4])(4)
});
!function (t) {
    function e(t, e) {
        return t.toFixed(e.decimals)
    }

    var o = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, this.dataOptions(), i), this.init()
    };
    o.DEFAULTS = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: e,
        onUpdate: null,
        onComplete: null
    }, o.prototype.init = function () {
        this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
    }, o.prototype.dataOptions = function () {
        var t = {
            from: this.$element.data("from"),
            to: this.$element.data("to"),
            speed: this.$element.data("speed"),
            refreshInterval: this.$element.data("refresh-interval"),
            decimals: this.$element.data("decimals")
        }, e = Object.keys(t);
        for (var o in e) {
            var i = e[o];
            "undefined" == typeof t[i] && delete t[i]
        }
        return t
    }, o.prototype.update = function () {
        this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
    }, o.prototype.render = function () {
        var t = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(t)
    }, o.prototype.restart = function () {
        this.stop(), this.init(), this.start()
    }, o.prototype.start = function () {
        this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
    }, o.prototype.stop = function () {
        this.interval && clearInterval(this.interval)
    }, o.prototype.toggle = function () {
        this.interval ? this.stop() : this.start()
    }, t.fn.countTo = function (e) {
        return this.each(function () {
            var i = t(this), n = i.data("countTo"), s = !n || "object" == typeof e, r = "object" == typeof e ? e : {},
                a = "string" == typeof e ? e : "start";
            s && (n && n.stop(), i.data("countTo", n = new o(this, r))), n[a].call(n)
        })
    }
}(jQuery);
(function (f) {
    function A(a) {
        a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, b, d, e) {
            return b + b + d + d + e + e
        });
        return (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a)) ? {
            r: parseInt(a[1], 16),
            g: parseInt(a[2], 16),
            b: parseInt(a[3], 16)
        } : null
    }

    function B() {
        var a = document.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    }

    function n() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }

    function z(a, c, b, d, e) {
        for (var h = {}, l = {}, f = {}, g = {}, m = {}, k = {}, r = null, q = 0; q < d.length; q++) {
            var p = d[q], r = null === r ? b / t[p] : t[r] / t[p], u = a / t[p], v = c / t[p];
            e && (u = 0 < u ? Math.floor(u) : Math.ceil(u), v = 0 < v ? Math.floor(v) : Math.ceil(v));
            "Days" !== p && (u %= r, v %= r);
            h[p] = u;
            f[p] = Math.abs(u);
            l[p] = v;
            k[p] = Math.abs(v);
            g[p] = Math.abs(u) / r;
            m[p] = Math.abs(v) / r;
            r = p
        }
        return {raw_time: h, raw_old_time: l, time: f, old_time: k, pct: g, old_pct: m}
    }

    function C(a) {
        for (var c = ["webkit", "moz"], b = 0; b < c.length && !a.requestAnimationFrame; ++b)a.requestAnimationFrame = a[c[b] + "RequestAnimationFrame"], a.cancelAnimationFrame = a[c[b] + "CancelAnimationFrame"];
        a.requestAnimationFrame && a.cancelAnimationFrame || (a.requestAnimationFrame = function (c, b, h) {
            "undefined" === typeof h && (h = {data: {last_frame: 0}});
            var l = (new Date).getTime(), f = Math.max(0, 16 - (l - h.data.last_frame));
            b = a.setTimeout(function () {
                c(l + f)
            }, f);
            h.data.last_frame = l + f;
            return b
        }, a.cancelAnimationFrame = function (a) {
            clearTimeout(a)
        })
    }

    var m = window;
    Object.keys || (Object.keys = function () {
        var a = Object.prototype.hasOwnProperty, c = !{toString: null}.propertyIsEnumerable("toString"),
            b = "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),
            d = b.length;
        return function (e) {
            if ("object" !== typeof e && ("function" !== typeof e || null === e))throw new TypeError("Object.keys called on non-object");
            var h = [], l;
            for (l in e)a.call(e, l) && h.push(l);
            if (c)for (l = 0; l < d; l++)a.call(e, b[l]) && h.push(b[l]);
            return h
        }
    }());
    var x = !1, y = ["Days", "Hours", "Minutes", "Seconds"],
        D = {Seconds: "Minutes", Minutes: "Hours", Hours: "Days", Days: "Years"},
        t = {Seconds: 1, Minutes: 60, Hours: 3600, Days: 86400, Months: 2678400, Years: 31536E3};
    Array.prototype.indexOf || (Array.prototype.indexOf = function (a, c) {
        var b = this.length >>> 0, d = Number(c) || 0, d = 0 > d ? Math.ceil(d) : Math.floor(d);
        for (0 > d && (d += b); d < b; d++)if (d in this && this[d] === a)return d;
        return -1
    });
    var w = {}, g = function (a, c) {
        this.element = a;
        this.container;
        this.listeners = null;
        this.data = {
            paused: !1,
            last_frame: 0,
            animation_frame: null,
            interval_fallback: null,
            timer: !1,
            total_duration: null,
            prev_time: null,
            drawn_units: [],
            text_elements: {Days: null, Hours: null, Minutes: null, Seconds: null},
            attributes: {
                canvas: null,
                context: null,
                item_size: null,
                line_width: null,
                radius: null,
                outer_radius: null
            },
            state: {fading: {Days: !1, Hours: !1, Minutes: !1, Seconds: !1}}
        };
        this.config = null;
        this.setOptions(c);
        this.initialize()
    };
    g.prototype.clearListeners = function () {
        this.listeners = {all: [], visible: []}
    };
    g.prototype.addTime = function (a) {
        if (this.data.attributes.ref_date instanceof Date) {
            var c = this.data.attributes.ref_date;
            c.setSeconds(c.getSeconds() + a)
        } else isNaN(this.data.attributes.ref_date) || (this.data.attributes.ref_date += 1E3 * a)
    };
    g.prototype.initialize = function (a) {
        this.data.drawn_units = [];
        for (var c = 0; c < Object.keys(this.config.time).length; c++) {
            var b = Object.keys(this.config.time)[c];
            this.config.time[b].show && this.data.drawn_units.push(b)
        }
        f(this.element).children("div.time_circles").remove();
        "undefined" === typeof a && (a = !0);
        (a || null === this.listeners) && this.clearListeners();
        this.container = f("<div>");
        this.container.addClass("time_circles");
        this.container.appendTo(this.element);
        c = this.element.offsetHeight;
        a = this.element.offsetWidth;
        0 === c && (c = f(this.element).height());
        0 === a && (a = f(this.element).width());
        0 === c && 0 < a ? c = a / this.data.drawn_units.length : 0 === a && 0 < c && (a = c * this.data.drawn_units.length);
        b = document.createElement("canvas");
        b.width = a;
        b.height = c;
        this.data.attributes.canvas = f(b);
        this.data.attributes.canvas.appendTo(this.container);
        var d = B();
        d || "undefined" === typeof G_vmlCanvasManager || (G_vmlCanvasManager.initElement(b), d = x = !0);
        d && (this.data.attributes.context = b.getContext("2d"));
        this.data.attributes.item_size = Math.min(a / this.data.drawn_units.length, c);
        this.data.attributes.line_width = this.data.attributes.item_size * this.config.fg_width;
        this.data.attributes.radius = (.8 * this.data.attributes.item_size - this.data.attributes.line_width) / 2;
        this.data.attributes.outer_radius = this.data.attributes.radius + .5 * Math.max(this.data.attributes.line_width, this.data.attributes.line_width * this.config.bg_width);
        var c = 0, e;
        for (e in this.data.text_elements)this.config.time[e].show && (a = f("<div>"), a.addClass("textDiv_" + e), a.css("top", Math.round(.35 * this.data.attributes.item_size)), a.css("left", Math.round(c++ * this.data.attributes.item_size)), a.css("width", this.data.attributes.item_size), a.appendTo(this.container), b = f("<h4>"), b.text(this.config.time[e].text), b.css("font-size", Math.round(this.config.text_size * this.data.attributes.item_size)), b.css("line-height", Math.round(this.config.text_size * this.data.attributes.item_size) + "px"), b.appendTo(a), b = f("<span>"), b.css("font-size", Math.round(3 * this.config.text_size * this.data.attributes.item_size)), b.css("line-height", Math.round(this.config.text_size * this.data.attributes.item_size) + "px"), b.appendTo(a), this.data.text_elements[e] = b);
        this.start();
        this.config.start || (this.data.paused = !0);
        var h = this;
        this.data.interval_fallback = m.setInterval(function () {
            h.update.call(h, !0)
        }, 100)
    };
    g.prototype.update = function (a) {
        if ("undefined" === typeof a) a = !1; else if (a && this.data.paused)return;
        x && this.data.attributes.context.clearRect(0, 0, this.data.attributes.canvas[0].width, this.data.attributes.canvas[0].hright);
        var c, b, d = this.data.prev_time;
        c = new Date;
        this.data.prev_time = c;
        null === d && (d = c);
        if (!this.config.count_past_zero && c > this.data.attributes.ref_date) {
            for (b = 0; b < this.data.drawn_units.length; b++) {
                var e = this.data.drawn_units[b];
                this.data.text_elements[e].text("0");
                var h = b * this.data.attributes.item_size + this.data.attributes.item_size / 2,
                    l = this.data.attributes.item_size / 2, f = this.config.time[e].color;
                this.drawArc(h, l, f, 0)
            }
            this.stop()
        } else {
            c = (this.data.attributes.ref_date - c) / 1E3;
            b = (this.data.attributes.ref_date - d) / 1E3;
            var e = "smooth" !== this.config.animation, d = z(c, b, this.data.total_duration, this.data.drawn_units, e),
                g = z(c, b, t.Years, y, e), k = b = 0, n = null, r = this.data.drawn_units.slice();
            for (b in y)e = y[b], Math.floor(g.raw_time[e]) !== Math.floor(g.raw_old_time[e]) && this.notifyListeners(e, Math.floor(g.time[e]), Math.floor(c), "all"), 0 > r.indexOf(e) || (Math.floor(d.raw_time[e]) !== Math.floor(d.raw_old_time[e]) && this.notifyListeners(e, Math.floor(d.time[e]), Math.floor(c), "visible"), a || (this.data.text_elements[e].text(Math.floor(Math.abs(d.time[e]))), h = k * this.data.attributes.item_size + this.data.attributes.item_size / 2, l = this.data.attributes.item_size / 2, f = this.config.time[e].color, "smooth" === this.config.animation ? (null === n || x || (Math.floor(d.time[n]) > Math.floor(d.old_time[n]) ? (this.radialFade(h, l, f, 1, e), this.data.state.fading[e] = !0) : Math.floor(d.time[n]) < Math.floor(d.old_time[n]) && (this.radialFade(h, l, f, 0, e), this.data.state.fading[e] = !0)), this.data.state.fading[e] || this.drawArc(h, l, f, d.pct[e])) : this.animateArc(h, l, f, d.pct[e], d.old_pct[e], (new Date).getTime() + 200)), n = e, k++);
            if (!this.data.paused && !a) {
                var q = this, p = function () {
                    q.update.call(q)
                };
                "smooth" === this.config.animation ? this.data.animation_frame = m.requestAnimationFrame(p, q.element, q) : (a = c % 1 * 1E3, 0 > a && (a = 1E3 + a), q.data.animation_frame = m.setTimeout(function () {
                    q.data.animation_frame = m.requestAnimationFrame(p, q.element, q)
                }, a + 50))
            }
        }
    };
    g.prototype.animateArc = function (a, c, b, d, e, h) {
        if (null !== this.data.attributes.context)if (.5 < Math.abs(e - d)) 0 === d ? this.radialFade(a, c, b, 1) : this.radialFade(a, c, b, 0); else {
            var f = (200 - (h - (new Date).getTime())) / 200;
            1 < f && (f = 1);
            this.drawArc(a, c, b, e * (1 - f) + d * f);
            if (!(1 <= f)) {
                var g = this;
                m.requestAnimationFrame(function () {
                    g.animateArc(a, c, b, d, e, h)
                }, this.element)
            }
        }
    };
    g.prototype.drawArc = function (a, c, b, d) {
        if (null !== this.data.attributes.context) {
            var e = Math.max(this.data.attributes.outer_radius, this.data.attributes.item_size / 2);
            x || this.data.attributes.context.clearRect(a - e, c - e, 2 * e, 2 * e);
            this.config.use_background && (this.data.attributes.context.beginPath(), this.data.attributes.context.arc(a, c, this.data.attributes.radius, 0, 2 * Math.PI, !1), this.data.attributes.context.lineWidth = this.data.attributes.line_width * this.config.bg_width, this.data.attributes.context.strokeStyle = this.config.circle_bg_color, this.data.attributes.context.stroke());
            var f, e = -.5 * Math.PI + this.config.start_angle / 360 * 2 * Math.PI;
            f = 2 * d * Math.PI;
            "Both" === this.config.direction ? (d = !1, e -= f / 2, f = e + f) : "Clockwise" === this.config.direction ? (d = !1, f = e + f) : (d = !0, f = e - f);
            this.data.attributes.context.beginPath();
            this.data.attributes.context.arc(a, c, this.data.attributes.radius, e, f, d);
            this.data.attributes.context.lineWidth = this.data.attributes.line_width;
            this.data.attributes.context.strokeStyle = b;
            this.data.attributes.context.stroke()
        }
    };
    g.prototype.radialFade = function (a, c, b, d, e) {
        var f = A(b), g = this;
        b = .2 * (1 === d ? -1 : 1);
        var k;
        for (k = 0; 1 >= d && 0 <= d; k++)(function () {
            var b = "rgba(" + f.r + ", " + f.g + ", " + f.b + ", " + Math.round(10 * d) / 10 + ")";
            m.setTimeout(function () {
                g.drawArc(a, c, b, 1)
            }, 50 * k)
        })(), d += b;
        m.setTimeout(function () {
            g.data.state.fading[e] = !1
        }, 50 * k)
    };
    g.prototype.timeLeft = function () {
        return this.data.paused && "number" === typeof this.data.timer ? this.data.timer : (this.data.attributes.ref_date - new Date) / 1E3
    };
    g.prototype.start = function () {
        m.cancelAnimationFrame(this.data.animation_frame);
        m.clearTimeout(this.data.animation_frame);
        var a = f(this.element).data("date");
        "undefined" === typeof a && (a = f(this.element).attr("data-date"));
        if ("string" === typeof a) {
            var c = this.data.attributes;
            var b = a.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{1,2}:[0-9]{2}:[0-9]{2}$/);
            null !== b && 0 < b.length ? (b = a.split(" "), a = b[0].split("-"), b = b[1].split(":"), a = new Date(a[0], a[1] - 1, a[2], b[0], b[1], b[2])) : (b = Date.parse(a), isNaN(b) ? (b = Date.parse(a.replace(/-/g, "/").replace("T", " ")), a = isNaN(b) ? new Date : b) : a = b);
            c.ref_date = a
        } else"number" === typeof this.data.timer ? this.data.paused && (this.data.attributes.ref_date = (new Date).getTime() + 1E3 * this.data.timer) : (c = f(this.element).data("timer"), "undefined" === typeof c && (c = f(this.element).attr("data-timer")), "string" === typeof c && (c = parseFloat(c)), "number" === typeof c ? (this.data.timer = c, this.data.attributes.ref_date = (new Date).getTime() + 1E3 * c) : this.data.attributes.ref_date = this.config.ref_date);
        this.data.paused = !1;
        this.update.call(this)
    };
    g.prototype.restart = function () {
        this.data.timer = !1;
        this.start()
    };
    g.prototype.stop = function () {
        "number" === typeof this.data.timer && (this.data.timer = this.timeLeft(this));
        this.data.paused = !0;
        m.cancelAnimationFrame(this.data.animation_frame)
    };
    g.prototype.destroy = function () {
        this.clearListeners();
        this.stop();
        m.clearInterval(this.data.interval_fallback);
        this.data.interval_fallback = null;
        this.container.remove();
        f(this.element).removeAttr("data-tc-id");
        f(this.element).removeData("tc-id")
    };
    g.prototype.setOptions = function (a) {
        null === this.config && (this.default_options.ref_date = new Date, this.config = f.extend(!0, {}, this.default_options));
        f.extend(!0, this.config, a);
        m = this.config.use_top_frame ? window.top : window;
        "undefined" !== typeof m.TC_Instance_List ? w = m.TC_Instance_List : m.TC_Instance_List = w;
        C(m);
        this.data.total_duration = this.config.total_duration;
        if ("string" === typeof this.data.total_duration)if ("undefined" !== typeof t[this.data.total_duration]) this.data.total_duration = t[this.data.total_duration]; else if ("Auto" === this.data.total_duration)for (a = 0; a < Object.keys(this.config.time).length; a++) {
            var c = Object.keys(this.config.time)[a];
            if (this.config.time[c].show) {
                this.data.total_duration = t[D[c]];
                break
            }
        } else this.data.total_duration = t.Years, console.error("Valid values for TimeCircles config.total_duration are either numeric, or (string) Years, Months, Days, Hours, Minutes, Auto")
    };
    g.prototype.addListener = function (a, c, b) {
        "function" === typeof a && ("undefined" === typeof b && (b = "visible"), this.listeners[b].push({
            func: a,
            scope: c
        }))
    };
    g.prototype.notifyListeners = function (a, c, b, d) {
        for (var e = 0; e < this.listeners[d].length; e++) {
            var f = this.listeners[d][e];
            f.func.apply(f.scope, [a, c, b])
        }
    };
    g.prototype.default_options = {
        ref_date: new Date,
        start: !0,
        animation: "smooth",
        count_past_zero: !0,
        circle_bg_color: "#60686F",
        use_background: !0,
        fg_width: .1,
        bg_width: 1.2,
        text_size: .07,
        total_duration: "Auto",
        direction: "Clockwise",
        use_top_frame: !1,
        start_angle: 0,
        time: {
            Days: {show: !0, text: "Days", color: "#FC6"},
            Hours: {show: !0, text: "Hours", color: "#9CF"},
            Minutes: {show: !0, text: "Minutes", color: "#BFB"},
            Seconds: {show: !0, text: "Seconds", color: "#F99"}
        }
    };
    var k = function (a, c) {
        this.elements = a;
        this.options = c;
        this.foreach()
    };
    k.prototype.getInstance = function (a) {
        var c = f(a).data("tc-id");
        "undefined" === typeof c && (c = n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n(), f(a).attr("data-tc-id", c));
        if ("undefined" === typeof w[c]) {
            var b = this.options, d = f(a).data("options");
            "string" === typeof d && (d = JSON.parse(d));
            "object" === typeof d && (b = f.extend(!0, {}, this.options, d));
            a = new g(a, b);
            w[c] = a
        } else a = w[c], "undefined" !== typeof this.options && a.setOptions(this.options);
        return a
    };
    k.prototype.addTime = function (a) {
        this.foreach(function (c) {
            c.addTime(a)
        })
    };
    k.prototype.foreach = function (a) {
        var c = this;
        this.elements.each(function () {
            var b = c.getInstance(this);
            "function" === typeof a && a(b)
        });
        return this
    };
    k.prototype.start = function () {
        this.foreach(function (a) {
            a.start()
        });
        return this
    };
    k.prototype.stop = function () {
        this.foreach(function (a) {
            a.stop()
        });
        return this
    };
    k.prototype.restart = function () {
        this.foreach(function (a) {
            a.restart()
        });
        return this
    };
    k.prototype.rebuild = function () {
        this.foreach(function (a) {
            a.initialize(!1)
        });
        return this
    };
    k.prototype.getTime = function () {
        return this.getInstance(this.elements[0]).timeLeft()
    };
    k.prototype.addListener = function (a, c) {
        "undefined" === typeof c && (c = "visible");
        var b = this;
        this.foreach(function (d) {
            d.addListener(a, b.elements, c)
        });
        return this
    };
    k.prototype.destroy = function () {
        this.foreach(function (a) {
            a.destroy()
        });
        return this
    };
    k.prototype.end = function () {
        return this.elements
    };
    f.fn.TimeCircles = function (a) {
        return new k(this, a)
    }
})(jQuery);
(function () {
    (function (e, f, k) {
        var m, n, q, r, p, l, g;
        l = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        p = /iphone|ipod|ipad/.test(k.navigator.userAgent.toLowerCase());
        g = "ontouchstart" in k;
        n = -1 < navigator.userAgent.toLowerCase().indexOf("chrome");
        q = -1 < navigator.userAgent.toLowerCase().indexOf("firefox");
        r = -1 < navigator.userAgent.indexOf("Trident/") || -1 < navigator.userAgent.indexOf("Edge/");
        m = function () {
            function c(b, d) {
                this.options = e.extend(!0, {}, this.Defaults, d);
                this.element = b;
                this.$element = e(b);
                this.state = 0;
                this.$win = e(k);
                this.$doc = e(f);
                this.isFullscreen = !1;
                this.thread = null;
                this.loaded = !1;
                this.classes = {
                    playPause: "rd-video-play-pause",
                    stopButton: "rd-video-stop",
                    nextButton: "rd-video-next",
                    prevButton: "rd-video-prev",
                    volume: "rd-video-volume",
                    volumeBar: "rd-video-volume-bar",
                    volumeBarSlider: "rd-video-volume-bar-slider",
                    progressBar: "rd-video-progress-bar",
                    progressBarSlider: "rd-video-progress-bar-slider",
                    duration: "rd-video-duration",
                    currentTime: "rd-video-current-time",
                    playlist: "rd-video-playlist",
                    title: "rd-video-title",
                    fullscreen: "rd-video-fullscreen",
                    preview: "rd-video-preview"
                };
                this.initialize()
            }

            c.prototype.Defaults = {
                path: "",
                volumeBarType: "vertical",
                title: "",
                ieFullScreenClass: "rd-video-wrap",
                volume: 1,
                dblClickFull: !0,
                playPauseOnClick: !0,
                hideControls: !0,
                preload: !0,
                preview: "",
                muted: !1,
                callbacks: {onEnded: null, onPaused: null, onPlay: null}
            };
            c.prototype.initialize = function () {
                this.createDataApi();
                this.initPlaylistClickListener();
                this.createVideo();
                this.createProgressBar();
                this.createVolumeBar();
                this.attachPlayerEvents();
                this.attachPlayPauseButtonListener();
                this.attachVolumeButtonListener();
                this.attachStopButtonListener();
                this.updateDuration();
                this.updateTitle();
                this.attachNextTrackButtonListener();
                this.attachPrevTrackButtonListener();
                this.attachFullScreenButtonListener()
            };
            c.prototype.createVideo = function () {
                this.video = this.$element.find("video")[0];
                this.options.muted && (this.video.muted = !0);
                e(this.video).append('<source type="video/mp4">');
                null != this.playlist ? this.loadVideo(0) : this.loadVideo(this.options.path);
                this.options.preload && (this.video.load(), this.loaded = !0)
            };
            c.prototype.updateState = function (b) {
                var d;
                d = b.isErrored() ? 0 : b.isLoading() ? 1 : 2;
                b.state !== d && (b.state = d)
            };
            c.prototype.attachPlayPauseButtonListener = function () {
                var b;
                b = this;
                b.$element.find("." + b.classes.playPause).on("click", function (d) {
                    d.preventDefault();
                    b.loaded || (b.video.load(), b.loaded = !0);
                    e.proxy(b.playPause(), b, this)
                })
            };
            c.prototype.playPause = function () {
                this.isPlaying() ? this.video.pause() : this.video.play()
            };
            c.prototype.attachStopButtonListener = function () {
                var b;
                b = this;
                b.$element.find("." + b.classes.stopButton).on("click", function (d) {
                    d.preventDefault();
                    b.video.pause();
                    b.video.currentTime = 0
                })
            };
            c.prototype.updateDuration = function () {
                var b, d;
                b = this;
                (d = b.$element.find("." + b.classes.duration)[0]) && b.video.addEventListener("durationchange", function () {
                    var a, c, e;
                    a = b.getDuration();
                    e = ("0" + Math.floor(a) % 60).slice(-2);
                    c = ("0" + Math.floor(a / 60 % 60)).slice(-2);
                    a = 3600 >= a ? "" : ("0" + Math.floor(a / 3600 % 60) + ":").slice(-2);
                    return d.innerHTML = "" + a + c + ":" + e
                })
            };
            c.prototype.updateTitle = function () {
                var b, d;
                b = this;
                (d = b.$element.find("." + b.classes.title)[0]) && b.video.addEventListener("durationchange", function () {
                    var a;
                    null != b.playlist ? (a = e("." + b.classes.playlist + " .video-active"), a = a[0].getAttribute("data-rd-video-title")) : a = b.options.title;
                    return d.innerHTML = a
                })
            };
            c.prototype.updateCurrentTime = function (b) {
                var d, a, c;
                d = this.video.currentTime;
                c = ("0" + Math.floor(d) % 60).slice(-2);
                a = ("0" + Math.floor(d / 60 % 60)).slice(-2);
                d = 3600 >= d ? "" : ("0" + Math.floor(d / 3600 % 60) + ":").slice(-2);
                b.innerHTML = "" + d + a + ":" + c
            };
            c.prototype.attachVolumeButtonListener = function () {
                var b;
                b = this;
                b.$element.find("." + b.classes.volume).on("click", function (d) {
                    d.preventDefault();
                    b.video.muted = !b.isMuted()
                })
            };
            c.prototype.attachNextTrackButtonListener = function () {
                var b;
                b = this;
                b.$element.find("." + b.classes.nextButton).on("click", function (d) {
                    d.preventDefault();
                    return b.playNextVideo(!0)
                })
            };
            c.prototype.playNextVideo = function (b) {
                var d;
                d = parseInt(e(this.playlist).find(".video-active").attr("data-index"));
                e(this.playlist).find('li[data-index="' + (d + 1) + '"]').length ? (this.loadVideo(d + 1), this.video.load(), this.loaded = !0, this.video.play()) : b && (this.loadVideo(0), this.video.load(), this.loaded = !0, this.video.play())
            };
            c.prototype.attachPrevTrackButtonListener = function () {
                var b;
                b = this;
                b.$element.find("." + b.classes.prevButton).on("click", function (d) {
                    var a, c;
                    d.preventDefault();
                    d = parseInt(e(b.playlist).find(".video-active").attr("data-index"));
                    a = e(b.playlist).find("[data-index]").length;
                    c = b.isPlaying();
                    0 !== d ? b.loadVideo(d - 1) : b.loadVideo(a - 1);
                    b.loaded = !0;
                    b.video.load();
                    c ? b.video.play() : b.video.pause()
                })
            };
            c.prototype.attachFullScreenButtonListener = function () {
                var b;
                b = this;
                b.$element.find("." + b.classes.fullscreen).on("click", function (d) {
                    d.preventDefault();
                    b.makeFullscreen(b)
                })
            };
            c.prototype.makeFullscreen = function (b) {
                b.isFullscreen ? f.cancelFullScreen ? f.cancelFullScreen() : f.mozCancelFullScreen ? f.mozCancelFullScreen() : f.webkitCancelFullScreen ? f.webkitCancelFullScreen() : f.msFullscreenElement ? f.msExitFullscreen() : p && b.video.webkitEnterFullscreen() : b.video.requestFullscreen ? b.video.requestFullscreen() : b.video.mozRequestFullScreen ? b.$element[0].mozRequestFullScreen() : b.video.webkitRequestFullscreen ? b.video.webkitRequestFullscreen() : b.video.msRequestFullscreen ? b.$element.find("." + b.options.ieFullScreenClass)[0].msRequestFullscreen() : p && b.video.webkitEnterFullscreen();
                b.$doc.on("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", function () {
                    b.isFullscreen = f.fullScreen || f.mozFullScreen || f.webkitIsFullScreen || f.msFullscreenElement;
                    b.isFullscreen ? (b.element.classList.add("fullscreen"), n && l && b.video.setAttribute("controls", "true")) : (b.element.classList.remove("fullscreen"), n && l && b.video.removeAttribute("controls"))
                })
            };
            c.prototype.removeStateClass = function (b) {
                var d, a, c, e;
                a = b.element.className.split(/\s+/);
                c = 0;
                for (e = a.length; c < e; c++)d = a[c], -1 !== d.indexOf("state-") && b.element.classList.remove(d)
            };
            c.prototype.createProgressBar = function () {
                var b, d, a, c;
                a = this;
                a.$element.find("." + a.classes.progressBar).length && (a.currentProgress = c = f.createElement("div"), c.classList.add("current"), a.attachProgressBarSlider(), b = a.$element.find("." + a.classes.progressBar)[0], d = !1, e(b).on("mousedown.rd touchstart.rd", function (c) {
                    if (1 === c.which || g) d = !0, a.video.currentTime = a.getClickBarPosition(c, b, "horizontal") * a.getDuration(), a.$doc.on("mouseup.rd touchend.rd touchcancel.rd", function (a) {
                        if (d)return d = !1
                    }), a.$doc.on("mousemove.rd touchmove.rd", function (c) {
                        d && (a.video.currentTime = a.getClickBarPosition(c, b, "horizontal") * a.getDuration())
                    })
                }), b.appendChild(c))
            };
            c.prototype.attachProgressBarSlider = function () {
                var b;
                b = this;
                b.$element.find("." + b.classes.progressBarSlider).length && (b.progressSlider = b.$element.find("." + b.classes.progressBarSlider)[0], b.video.addEventListener("seeked", function () {
                    return b.progressSlider.style.left = b.video.currentTime / b.getDuration() * 100 + "%"
                }))
            };
            c.prototype.createVolumeBar = function () {
                var b, d, a, c;
                a = this;
                a.$element.find("." + a.classes.volumeBar).length && (a.currentVolume = c = f.createElement("div"), c.classList.add("current"), c.style.width = 100 * a.video.volume + "%", a.attachVolumeBarSlider(), b = a.$element.find("." + a.classes.volumeBar)[0], a.getOption("volumeBarType") && b.classList.add("rd-video-volume-bar-" + a.getOption("volumeBarType")), d = !1, e(b).on("mousedown.rd touchstart.rd", function (c) {
                    if (1 === c.which || g) d = !0, a.video.volume = a.getClickBarPosition(c, b, a.getOption("volumeBarType")), a.isMuted() && (a.video.muted = !1), a.$doc.on("mouseup.rd touchend.rd touchcancel.rd", function (a) {
                        if (d)return d = !1
                    }), a.$doc.on("mousemove.rd touchmove.rd", function (c) {
                        (1 === c.which || g) && d && (a.video.volume = a.getClickBarPosition(c, b, a.getOption("volumeBarType")), a.isMuted() && (a.video.muted = !1))
                    })
                }), b.appendChild(c))
            };
            c.prototype.attachVolumeBarSlider = function () {
                var b;
                b = this;
                b.$element.find("." + b.classes.volumeBarSlider).length && (b.volumeBarSlider = b.$element.find("." + b.classes.volumeBarSlider)[0], b.video.addEventListener("volumechange", function () {
                    if ("horizontal" === b.getOption("volumeBarType"))return b.isMuted() ? b.volumeBarSlider.style.left = "0" : b.volumeBarSlider.style.left = 100 * b.video.volume + "%";
                    if ("vertical" === b.getOption("volumeBarType"))return b.isMuted() ? b.volumeBarSlider.style.bottom = "0" : b.volumeBarSlider.style.bottom = 100 * b.video.volume + "%"
                }))
            };
            c.prototype.initPlaylistClickListener = function () {
                var b;
                b = this;
                b.$element.find("." + b.classes.playlist).length && (b.playlist = b.$element.find("." + b.classes.playlist)[0], b.setPlaylistIndexes(), e(b.playlist).find(b.playlist.getAttribute("data-rd-video-play-on")).on("click", function (d) {
                    var a;
                    a = e(this);
                    a = a.parents("." + b.classes.playlist + " li").length ? a.parents("." + b.classes.playlist + " li") : a;
                    if (a.hasClass("video-active")) b.video.play(); else return b.clearPlayListClasses(), a.addClass("video-active"), "A" === this.tagName && d.preventDefault(), b.loadVideo(parseInt(a.attr("data-index"))), b.video.load(), b.loaded = !0, b.video.play()
                }))
            };
            c.prototype.loadVideo = function (b, d) {
                var a, c;
                this.loaded = !1;
                a = e(this.video);
                null != this.playlist && (this.clearPlayListClasses(), c = e(this.playlist).find("li").eq(b), c.addClass("video-active"));
                c = "number" === typeof b ? c.attr("data-rd-video-src") : b;
                a.find('source[type*="mp4"]').attr("src", c + ".mp4")
            };
            c.prototype.clearPlayListClasses = function () {
                this.$element.find("." + this.classes.playlist + " .video-active").removeClass("video-active")
            };
            c.prototype.setPlaylistIndexes = function () {
                this.$element.find("." + this.classes.playlist + " li").each(function () {
                    this.setAttribute("data-index", e(this).index())
                })
            };
            c.prototype.attachPlayerEvents = function () {
                var b, c, a, f, g, k, h;
                a = this;
                h = a.video;
                b = e(h);
                f = a.$element.find("." + a.classes.currentTime);
                null == a.playlist && (g = a.$element.find("." + a.classes.preview), g.css("background-image", "url(" + a.options.preview + ")"));
                b.on("playing play", function () {
                    a.updateState(a);
                    a.removeStateClass(a);
                    a.element.classList.add("state-playing");
                    null == a.playlist && g.removeClass("show");
                    if (a.options.callbacks.onPlay)return a.options.callbacks.onPlay.call(this, a.video)
                });
                if (r) b.on("seeked", function () {
                    a.updateState(a);
                    a.removeStateClass(a);
                    a.element.classList.add("state-playing");
                    if (a.options.callbacks.onPlay)return a.options.callbacks.onPlay.call(this, a.video)
                });
                h.addEventListener("pause", function () {
                    a.updateState(a);
                    a.removeStateClass(a);
                    a.element.classList.add("state-pause");
                    if (a.options.callbacks.onPaused)return a.options.callbacks.onPaused.call(this, a.video)
                });
                h.addEventListener("ended", function () {
                    a.options.loop && (a.video.currentTime = 0, a.video.play());
                    a.playlist ? a.playNextVideo(!1) : a.video.pause();
                    if (a.options.callbacks.onEnded)return a.options.callbacks.onEnded.call(this, a.video)
                });
                b.on("volumechange canplay canplaythrough", function () {
                    if (a.isMuted() || 0 === a.video.volume) {
                        if (a.element.classList.add("muted"), a.video.muted = !0, null != a.currentVolume) {
                            if ("horizontal" === a.getOption("volumeBarType"))return a.currentVolume.style.width = 0;
                            if ("vertical" === a.getOption("volumeBarType"))return a.currentVolume.style.height = 0
                        }
                    } else if (a.element.classList.remove("muted"), a.video.muted = !1, null != a.currentVolume) {
                        if ("horizontal" === a.getOption("volumeBarType"))return a.currentVolume.style.width = 100 * a.video.volume + "%";
                        if ("vertical" === a.getOption("volumeBarType"))return a.currentVolume.style.height = 100 * a.video.volume + "%"
                    }
                });
                h.addEventListener("canplay", function () {
                    a.updateState(a);
                    a.element.classList.remove("state-loading");
                    null == a.playlist && g.addClass("show");
                    f.length && a.updateCurrentTime(f[0]);
                    if (null != a.volumeBarSlider) {
                        if ("horizontal" === a.getOption("volumeBarType"))return a.volumeBarSlider.style.left = 100 * a.video.volume + "%";
                        if ("vertical" === a.getOption("volumeBarType"))return a.volumeBarSlider.style.bottom = 100 * a.video.volume + "%"
                    }
                });
                h.addEventListener("canplaythrough", function () {
                    a.updateState(a);
                    a.element.classList.remove("state-loading");
                    if (null == a.playlist)return g.addClass("show")
                });
                b.on("timeupdate durationchange", function () {
                    var b;
                    null == a.playlist && g.removeClass("show");
                    null != a.currentProgress && (b = h.currentTime / a.getDuration() * 100 + "%", a.currentProgress.style.width = b);
                    null != a.progressSlider && (a.progressSlider.style.left = b);
                    if (f.length)return a.updateCurrentTime(f[0])
                });
                h.addEventListener("loadstart", function () {
                    a.updateState(a);
                    a.removeStateClass(a);
                    q && (a.video.currentTime = 0);
                    return a.element.classList.add("state-loading")
                });
                h.addEventListener("error", function () {
                    a.updateState(a);
                    a.removeStateClass(a);
                    return a.element.classList.add("state-error")
                });
                h.addEventListener("waiting", function () {
                    a.updateState(a);
                    a.removeStateClass(a);
                    return a.element.classList.add("state-loading")
                });
                a.options.hideControls && (a.$element.on("mouseleave", function () {
                    return a.element.classList.remove("hovered")
                }), a.$element.on("mousemove", function () {
                    a.element.classList.add("hovered");
                    clearTimeout(a.thread);
                    return a.thread = setTimeout(function () {
                        return a.element.classList.remove("hovered")
                    }, 1500)
                }));
                a.$doc.on("click", function (b) {
                    if (l && !e(b.target).is(a.$element) && 0 === a.$element.find(e(b.target)).length)return a.element.classList.remove("hovered")
                });
                if (l) b.on("click", function (b) {
                    b.preventDefault();
                    return a.element.classList.add("hovered")
                });
                c = 0;
                k = null;
                b.on("click", function (b) {
                    b.preventDefault();
                    c++;
                    if (1 < c && a.options.dblClickFull) a.makeFullscreen(a), clearInterval(k), c = 0; else return k = setTimeout(function () {
                        a.options.playPauseOnClick && !l && a.playPause();
                        return c = 0
                    }, 200)
                })
            };
            c.prototype.getClickBarPosition = function (b, c, a) {
                b.preventDefault();
                if ("horizontal" === a)return a = c.getBoundingClientRect().left, c = c.clientWidth, b.originalEvent && (b = b.originalEvent), b = g ? b.targetTouches[0].pageX : b.pageX, (b - a) / c;
                if ("vertical" === a)return a = c.getBoundingClientRect().bottom, c = c.clientHeight, b.originalEvent && (b = b.originalEvent), b = g ? b.targetTouches[0].clientY : b.clientY, Math.min(1, Math.max(0, (a - b) / c))
            };
            c.prototype.isPlaying = function () {
                return this.video && !this.video.paused
            };
            c.prototype.isPaused = function () {
                return this.video && this.video.paused
            };
            c.prototype.isMuted = function () {
                return this.video.muted
            };
            c.prototype.isLoading = function () {
                return !this.state && this.isEmpty() ? !1 : this.video.networkState === this.video.NETWORK_LOADING && this.video.readyState < this.video.HAVE_FUTURE_DATA
            };
            c.prototype.isErrored = function () {
                return this.video.error || this.video.networkState === this.video.NETWORK_NO_SOURCE
            };
            c.prototype.isEmpty = function () {
                return this.video.readyState === this.video.HAVE_NOTHING
            };
            c.prototype.getDuration = function () {
                return this.video.duration
            };
            c.prototype.createDataApi = function () {
                this.$element.attr("data-rd-video-path") && (this.options.path = this.$element.attr("data-rd-video-path"));
                this.$element.attr("data-volume-bar-type") && (this.options.volumeBarType = this.$element.attr("data-volume-bar-type"));
                this.$element.attr("data-rd-video-title") && (this.options.title = this.$element.attr("data-rd-video-title"));
                this.$element.attr("data-rd-video-preview") && (this.options.preview = this.$element.attr("data-rd-video-preview"));
                this.$element.attr("data-rd-video-muted") && (this.options.muted = this.$element.attr("data-rd-video-muted"));
                this.$element.attr("data-rd-video-fullscreen-class") && (this.options.ieFullScreenClass = this.$element.attr("data-rd-video-fullscreen-class"));
                this.$element.attr("data-rd-video-volume") && (this.options.volume = parseInt(this.$element.attr("data-rd-video-volume")));
                this.$element.attr("data-rd-video-dbl-click-full") && (this.options.dblClickFull = "true" === this.$element.attr("data-rd-video-dbl-click-full"));
                this.$element.attr("data-rd-video-playpause-click") && (this.options.playPauseOnClick = "true" === this.$element.attr("data-rd-video-playpause-click"));
                this.$element.attr("data-rd-video-hide-controls") && (this.options.hideControls = "true" === this.$element.attr("data-rd-video-hide-controls"));
                this.$element.attr("data-rd-video-preload") && (this.options.preload = "false" === this.$element.attr("data-rd-video-preload"))
            };
            c.prototype.getOption = function (b) {
                var c, a;
                for (c in this.options.responsive)c <= k.innerWidth && (a = c);
                return null != this.options.responsive && null != this.options.responsive[a][b] ? this.options.responsive[a][b] : this.options[b]
            };
            return c
        }();
        e.fn.extend({
            RDVideoPlayer: function (c) {
                return this.each(function () {
                    var b;
                    b = e(this);
                    if (!b.data("RDVideoPlayer"))return b.data("RDVideoPlayer", new m(this, c))
                })
            }
        });
        return k.RDVideoPlayer = m
    })(window.jQuery, document, window);
    "undefined" !== typeof module && null !== module ? module.exports = window.RDVideoPlayer : "function" === typeof define && define.amd && define(["jquery"], function () {
            return window.RDVideoPlayer
        })
}).call(this);
!function (t) {
    var o = t("[data-waypoint-to]");
    o.length && t(document).ready(function () {
        o.each(function () {
            var o = t(this);
            o.on("click", function (n) {
                n.preventDefault(), t("body, html").stop().animate({scrollTop: t(o.attr("data-waypoint-to")).offset().top}, 800)
            })
        })
    })
}(jQuery);
!function (a, b) {
    "use strict";
    function c(b) {
        b = a.extend({}, m, b || {});
        for (var c = a(this), e = 0, f = c.length; f > e; e++)d(c.eq(e), b);
        return c
    }

    function d(b, c) {
        if (!b.hasClass("stepper-input")) {
            c = a.extend({}, c, b.data("stepper-options"));
            var d = parseFloat(b.attr("min")), g = parseFloat(b.attr("max")), h = parseFloat(b.attr("step")) || 1;
            b.addClass("stepper-input").wrap('<div class="stepper ' + c.customClass + '" />').after('<span class="stepper-arrow up">' + c.labels.up + '</span><span class="stepper-arrow down">' + c.labels.down + "</span>");
            var i = b.parent(".stepper"), j = a.extend({
                $stepper: i,
                $input: b,
                $arrow: i.find(".stepper-arrow"),
                min: void 0 === typeof d || isNaN(d) ? !1 : d,
                max: void 0 === typeof g || isNaN(g) ? !1 : g,
                step: void 0 === typeof h || isNaN(h) ? 1 : h,
                timer: null
            }, c);
            j.digits = k(j.step), b.is(":disabled") && i.addClass("disabled"), i.on("keypress", ".stepper-input", j, e), i.on("touchstart.stepper mousedown.stepper", ".stepper-arrow", j, f).data("stepper", j)
        }
    }

    function e(a) {
        var b = a.data;
        (38 === a.keyCode || 40 === a.keyCode) && (a.preventDefault(), h(b, 38 === a.keyCode ? b.step : -b.step))
    }

    function f(b) {
        b.preventDefault(), b.stopPropagation(), g(b);
        var c = b.data;
        if (!c.$input.is(":disabled") && !c.$stepper.hasClass("disabled")) {
            var d = a(b.target).hasClass("up") ? c.step : -c.step;
            c.timer = i(c.timer, 125, function () {
                h(c, d, !1)
            }), h(c, d), a("body").on("touchend.stepper mouseup.stepper", c, g)
        }
    }

    function g(b) {
        b.preventDefault(), b.stopPropagation();
        var c = b.data;
        j(c.timer), a("body").off(".stepper")
    }

    function h(a, b) {
        var c = parseFloat(a.$input.val()), d = b;
        void 0 === typeof c || isNaN(c) ? d = a.min !== !1 ? a.min : 0 : a.min !== !1 && c < a.min ? d = a.min : d += c;
        var e = (d - a.min) % a.step;
        0 !== e && (d -= e), a.min !== !1 && d < a.min && (d = a.min), a.max !== !1 && d > a.max && (d -= a.step), d !== c && (d = l(d, a.digits), a.$input.val(d).trigger("change"))
    }

    function i(a, b, c) {
        return j(a), setInterval(c, b)
    }

    function j(a) {
        a && (clearInterval(a), a = null)
    }

    function k(a) {
        var b = String(a);
        return b.indexOf(".") > -1 ? b.length - b.indexOf(".") - 1 : 0
    }

    function l(a, b) {
        var c = Math.pow(10, b);
        return Math.round(a * c) / c
    }

    var m = {customClass: "", labels: {up: "Up", down: "Down"}}, n = {
        defaults: function (b) {
            return m = a.extend(m, b || {}), "object" == typeof this ? a(this) : !0
        }, destroy: function () {
            return a(this).each(function (b) {
                var c = a(this).data("stepper");
                c && (c.$stepper.off(".stepper").find(".stepper-arrow").remove(), c.$input.unwrap().removeClass("stepper-input"))
            })
        }, disable: function () {
            return a(this).each(function (b) {
                var c = a(this).data("stepper");
                c && (c.$input.attr("disabled", "disabled"), c.$stepper.addClass("disabled"))
            })
        }, enable: function () {
            return a(this).each(function (b) {
                var c = a(this).data("stepper");
                c && (c.$input.attr("disabled", null), c.$stepper.removeClass("disabled"))
            })
        }
    };
    a.fn.stepper = function (a) {
        return n[a] ? n[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? this : c.apply(this, arguments)
    }, a.stepper = function (a) {
        "defaults" === a && n.defaults.apply(this, Array.prototype.slice.call(arguments, 1))
    }
}(jQuery, this);
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a) {
    var b = function () {
        if (a && a.fn && a.fn.select2 && a.fn.select2.amd)var b = a.fn.select2.amd;
        var b;
        return function () {
            if (!b || !b.requirejs) {
                b ? c = b : b = {};
                var a, c, d;
                !function (b) {
                    function e(a, b) {
                        return u.call(a, b)
                    }

                    function f(a, b) {
                        var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"), o = s.map, p = o && o["*"] || {};
                        if (a && "." === a.charAt(0))if (b) {
                            for (a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1)if (m = a[k], "." === m) a.splice(k, 1), k -= 1; else if (".." === m) {
                                if (1 === k && (".." === a[2] || ".." === a[0]))break;
                                k > 0 && (a.splice(k - 1, 2), k -= 2)
                            }
                            a = a.join("/")
                        } else 0 === a.indexOf("./") && (a = a.substring(2));
                        if ((n || p) && o) {
                            for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                                if (d = c.slice(0, k).join("/"), n)for (l = n.length; l > 0; l -= 1)if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
                                    f = e, h = k;
                                    break
                                }
                                if (f)break;
                                !i && p && p[d] && (i = p[d], j = k)
                            }
                            !f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"))
                        }
                        return a
                    }

                    function g(a, c) {
                        return function () {
                            var d = v.call(arguments, 0);
                            return "string" != typeof d[0] && 1 === d.length && d.push(null), n.apply(b, d.concat([a, c]))
                        }
                    }

                    function h(a) {
                        return function (b) {
                            return f(b, a)
                        }
                    }

                    function i(a) {
                        return function (b) {
                            q[a] = b
                        }
                    }

                    function j(a) {
                        if (e(r, a)) {
                            var c = r[a];
                            delete r[a], t[a] = !0, m.apply(b, c)
                        }
                        if (!e(q, a) && !e(t, a))throw new Error("No " + a);
                        return q[a]
                    }

                    function k(a) {
                        var b, c = a ? a.indexOf("!") : -1;
                        return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
                    }

                    function l(a) {
                        return function () {
                            return s && s.config && s.config[a] || {}
                        }
                    }

                    var m, n, o, p, q = {}, r = {}, s = {}, t = {}, u = Object.prototype.hasOwnProperty, v = [].slice,
                        w = /\.js$/;
                    o = function (a, b) {
                        var c, d = k(a), e = d[0];
                        return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), {
                            f: e ? e + "!" + a : a,
                            n: a,
                            pr: e,
                            p: c
                        }
                    }, p = {
                        require: function (a) {
                            return g(a)
                        }, exports: function (a) {
                            var b = q[a];
                            return "undefined" != typeof b ? b : q[a] = {}
                        }, module: function (a) {
                            return {id: a, uri: "", exports: q[a], config: l(a)}
                        }
                    }, m = function (a, c, d, f) {
                        var h, k, l, m, n, s, u = [], v = typeof d;
                        if (f = f || a, "undefined" === v || "function" === v) {
                            for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1)if (m = o(c[n], f), k = m.f, "require" === k) u[n] = p.require(a); else if ("exports" === k) u[n] = p.exports(a), s = !0; else if ("module" === k) h = u[n] = p.module(a); else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k); else {
                                if (!m.p)throw new Error(a + " missing " + k);
                                m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k]
                            }
                            l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l))
                        } else a && (q[a] = d)
                    }, a = c = n = function (a, c, d, e, f) {
                        if ("string" == typeof a)return p[a] ? p[a](c) : j(o(a, c).f);
                        if (!a.splice) {
                            if (s = a, s.deps && n(s.deps, s.callback), !c)return;
                            c.splice ? (a = c, c = d, d = null) : a = b
                        }
                        return c = c || function () {
                            }, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function () {
                            m(b, a, c, d)
                        }, 4), n
                    }, n.config = function (a) {
                        return n(a)
                    }, a._defined = q, d = function (a, b, c) {
                        if ("string" != typeof a)throw new Error("See almond README: incorrect module build, no module name");
                        b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c])
                    }, d.amd = {jQuery: !0}
                }(), b.requirejs = a, b.require = c, b.define = d
            }
        }(), b.define("almond", function () {
        }), b.define("jquery", [], function () {
            var b = a || $;
            return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b
        }), b.define("select2/utils", ["jquery"], function (a) {
            function b(a) {
                var b = a.prototype, c = [];
                for (var d in b) {
                    var e = b[d];
                    "function" == typeof e && "constructor" !== d && c.push(d)
                }
                return c
            }

            var c = {};
            c.Extend = function (a, b) {
                function c() {
                    this.constructor = a
                }

                var d = {}.hasOwnProperty;
                for (var e in b)d.call(b, e) && (a[e] = b[e]);
                return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
            }, c.Decorate = function (a, c) {
                function d() {
                    var b = Array.prototype.unshift, d = c.prototype.constructor.length, e = a.prototype.constructor;
                    d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments)
                }

                function e() {
                    this.constructor = d
                }

                var f = b(c), g = b(a);
                c.displayName = a.displayName, d.prototype = new e;
                for (var h = 0; h < g.length; h++) {
                    var i = g[h];
                    d.prototype[i] = a.prototype[i]
                }
                for (var j = (function (a) {
                    var b = function () {
                    };
                    a in d.prototype && (b = d.prototype[a]);
                    var e = c.prototype[a];
                    return function () {
                        var a = Array.prototype.unshift;
                        return a.call(arguments, b), e.apply(this, arguments)
                    }
                }), k = 0; k < f.length; k++) {
                    var l = f[k];
                    d.prototype[l] = j(l)
                }
                return d
            };
            var d = function () {
                this.listeners = {}
            };
            return d.prototype.on = function (a, b) {
                this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b]
            }, d.prototype.trigger = function (a) {
                var b = Array.prototype.slice;
                this.listeners = this.listeners || {}, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
            }, d.prototype.invoke = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)a[c].apply(this, b)
            }, c.Observable = d, c.generateChars = function (a) {
                for (var b = "", c = 0; a > c; c++) {
                    var d = Math.floor(36 * Math.random());
                    b += d.toString(36)
                }
                return b
            }, c.bind = function (a, b) {
                return function () {
                    a.apply(b, arguments)
                }
            }, c._convertData = function (a) {
                for (var b in a) {
                    var c = b.split("-"), d = a;
                    if (1 !== c.length) {
                        for (var e = 0; e < c.length; e++) {
                            var f = c[e];
                            f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f]
                        }
                        delete a[b]
                    }
                }
                return a
            }, c.hasScroll = function (b, c) {
                var d = a(c), e = c.style.overflowX, f = c.style.overflowY;
                return e !== f || "hidden" !== f && "visible" !== f ? "scroll" === e || "scroll" === f ? !0 : d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth : !1
            }, c.escapeMarkup = function (a) {
                var b = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function (a) {
                    return b[a]
                })
            }, c.appendMany = function (b, c) {
                if ("1.7" === a.fn.jquery.substr(0, 3)) {
                    var d = a();
                    a.map(c, function (a) {
                        d = d.add(a)
                    }), c = d
                }
                b.append(c)
            }, c
        }), b.define("select2/results", ["jquery", "./utils"], function (a, b) {
            function c(a, b, d) {
                this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this)
            }

            return b.Extend(c, b.Observable), c.prototype.render = function () {
                var b = a('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b
            }, c.prototype.clear = function () {
                this.$results.empty()
            }, c.prototype.displayMessage = function (b) {
                var c = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                    e = this.options.get("translations").get(b.message);
                d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d)
            }, c.prototype.hideMessages = function () {
                this.$results.find(".select2-results__message").remove()
            }, c.prototype.append = function (a) {
                this.hideLoading();
                var b = [];
                if (null == a.results || 0 === a.results.length)return void(0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"}));
                a.results = this.sort(a.results);
                for (var c = 0; c < a.results.length; c++) {
                    var d = a.results[c], e = this.option(d);
                    b.push(e)
                }
                this.$results.append(b)
            }, c.prototype.position = function (a, b) {
                var c = b.find(".select2-results");
                c.append(a)
            }, c.prototype.sort = function (a) {
                var b = this.options.get("sorter");
                return b(a)
            }, c.prototype.setClasses = function () {
                var b = this;
                this.data.current(function (c) {
                    var d = a.map(c, function (a) {
                        return a.id.toString()
                    }), e = b.$results.find(".select2-results__option[aria-selected]");
                    e.each(function () {
                        var b = a(this), c = a.data(this, "data"), e = "" + c.id;
                        null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false")
                    });
                    var f = e.filter("[aria-selected=true]");
                    f.length > 0 ? f.first().trigger("mouseenter") : e.first().trigger("mouseenter")
                })
            }, c.prototype.showLoading = function (a) {
                this.hideLoading();
                var b = this.options.get("translations").get("searching"), c = {disabled: !0, loading: !0, text: b(a)},
                    d = this.option(c);
                d.className += " loading-results", this.$results.prepend(d)
            }, c.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove()
            }, c.prototype.option = function (b) {
                var c = document.createElement("li");
                c.className = "select2-results__option";
                var d = {role: "treeitem", "aria-selected": "false"};
                b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);
                for (var e in d) {
                    var f = d[e];
                    c.setAttribute(e, f)
                }
                if (b.children) {
                    var g = a(c), h = document.createElement("strong");
                    h.className = "select2-results__group";
                    a(h);
                    this.template(b, h);
                    for (var i = [], j = 0; j < b.children.length; j++) {
                        var k = b.children[j], l = this.option(k);
                        i.push(l)
                    }
                    var m = a("<ul></ul>", {"class": "select2-results__options select2-results__options--nested"});
                    m.append(i), g.append(h), g.append(m)
                } else this.template(b, c);
                return a.data(c, "data", b), c
            }, c.prototype.bind = function (b, c) {
                var d = this, e = b.id + "-results";
                this.$results.attr("id", e), b.on("results:all", function (a) {
                    d.clear(), d.append(a.data), b.isOpen() && d.setClasses()
                }), b.on("results:append", function (a) {
                    d.append(a.data), b.isOpen() && d.setClasses()
                }), b.on("query", function (a) {
                    d.hideMessages(), d.showLoading(a)
                }), b.on("select", function () {
                    b.isOpen() && d.setClasses()
                }), b.on("unselect", function () {
                    b.isOpen() && d.setClasses()
                }), b.on("open", function () {
                    d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible()
                }), b.on("close", function () {
                    d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant")
                }), b.on("results:toggle", function () {
                    var a = d.getHighlightedResults();
                    0 !== a.length && a.trigger("mouseup")
                }), b.on("results:select", function () {
                    var a = d.getHighlightedResults();
                    if (0 !== a.length) {
                        var b = a.data("data");
                        "true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", {data: b})
                    }
                }), b.on("results:previous", function () {
                    var a = d.getHighlightedResults(), b = d.$results.find("[aria-selected]"), c = b.index(a);
                    if (0 !== c) {
                        var e = c - 1;
                        0 === a.length && (e = 0);
                        var f = b.eq(e);
                        f.trigger("mouseenter");
                        var g = d.$results.offset().top, h = f.offset().top, i = d.$results.scrollTop() + (h - g);
                        0 === e ? d.$results.scrollTop(0) : 0 > h - g && d.$results.scrollTop(i)
                    }
                }), b.on("results:next", function () {
                    var a = d.getHighlightedResults(), b = d.$results.find("[aria-selected]"), c = b.index(a),
                        e = c + 1;
                    if (!(e >= b.length)) {
                        var f = b.eq(e);
                        f.trigger("mouseenter");
                        var g = d.$results.offset().top + d.$results.outerHeight(!1),
                            h = f.offset().top + f.outerHeight(!1), i = d.$results.scrollTop() + h - g;
                        0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i)
                    }
                }), b.on("results:focus", function (a) {
                    a.element.addClass("select2-results__option--highlighted")
                }), b.on("results:message", function (a) {
                    d.displayMessage(a)
                }), a.fn.mousewheel && this.$results.on("mousewheel", function (a) {
                    var b = d.$results.scrollTop(), c = d.$results.get(0).scrollHeight - b + a.deltaY,
                        e = a.deltaY > 0 && b - a.deltaY <= 0, f = a.deltaY < 0 && c <= d.$results.height();
                    e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation())
                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (b) {
                    var c = a(this), e = c.data("data");
                    return "true" === c.attr("aria-selected") ? void(d.options.get("multiple") ? d.trigger("unselect", {
                        originalEvent: b,
                        data: e
                    }) : d.trigger("close", {})) : void d.trigger("select", {originalEvent: b, data: e})
                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (b) {
                    var c = a(this).data("data");
                    d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", {
                        data: c,
                        element: a(this)
                    })
                })
            }, c.prototype.getHighlightedResults = function () {
                var a = this.$results.find(".select2-results__option--highlighted");
                return a
            }, c.prototype.destroy = function () {
                this.$results.remove()
            }, c.prototype.ensureHighlightVisible = function () {
                var a = this.getHighlightedResults();
                if (0 !== a.length) {
                    var b = this.$results.find("[aria-selected]"), c = b.index(a), d = this.$results.offset().top,
                        e = a.offset().top, f = this.$results.scrollTop() + (e - d), g = e - d;
                    f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f)
                }
            }, c.prototype.template = function (b, c) {
                var d = this.options.get("templateResult"), e = this.options.get("escapeMarkup"), f = d(b, c);
                null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f)
            }, c
        }), b.define("select2/keys", [], function () {
            var a = {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            };
            return a
        }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (a, b, c) {
            function d(a, b) {
                this.$element = a, this.options = b, d.__super__.constructor.call(this)
            }

            return b.Extend(d, b.Observable), d.prototype.render = function () {
                var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b
            }, d.prototype.bind = function (a, b) {
                var d = this, e = (a.id + "-container", a.id + "-results");
                this.container = a, this.$selection.on("focus", function (a) {
                    d.trigger("focus", a)
                }), this.$selection.on("blur", function (a) {
                    d._handleBlur(a)
                }), this.$selection.on("keydown", function (a) {
                    d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault()
                }), a.on("results:focus", function (a) {
                    d.$selection.attr("aria-activedescendant", a.data._resultId)
                }), a.on("selection:update", function (a) {
                    d.update(a.data)
                }), a.on("open", function () {
                    d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a)
                }), a.on("close", function () {
                    d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a)
                }), a.on("enable", function () {
                    d.$selection.attr("tabindex", d._tabindex)
                }), a.on("disable", function () {
                    d.$selection.attr("tabindex", "-1")
                })
            }, d.prototype._handleBlur = function (b) {
                var c = this;
                window.setTimeout(function () {
                    document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b)
                }, 1)
            }, d.prototype._attachCloseHandler = function (b) {
                a(document.body).on("mousedown.select2." + b.id, function (b) {
                    var c = a(b.target), d = c.closest(".select2"), e = a(".select2.select2-container--open");
                    e.each(function () {
                        var b = a(this);
                        if (this != d[0]) {
                            var c = b.data("element");
                            c.select2("close")
                        }
                    })
                })
            }, d.prototype._detachCloseHandler = function (b) {
                a(document.body).off("mousedown.select2." + b.id)
            }, d.prototype.position = function (a, b) {
                var c = b.find(".selection");
                c.append(a)
            }, d.prototype.destroy = function () {
                this._detachCloseHandler(this.container)
            }, d.prototype.update = function (a) {
                throw new Error("The `update` method must be defined in child classes.")
            }, d
        }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (a, b, c, d) {
            function e() {
                e.__super__.constructor.apply(this, arguments)
            }

            return c.Extend(e, b), e.prototype.render = function () {
                var a = e.__super__.render.call(this);
                return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a
            }, e.prototype.bind = function (a, b) {
                var c = this;
                e.__super__.bind.apply(this, arguments);
                var d = a.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function (a) {
                    1 === a.which && c.trigger("toggle", {originalEvent: a})
                }), this.$selection.on("focus", function (a) {
                }), this.$selection.on("blur", function (a) {
                }), a.on("selection:update", function (a) {
                    c.update(a.data)
                })
            }, e.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, e.prototype.display = function (a, b) {
                var c = this.options.get("templateSelection"), d = this.options.get("escapeMarkup");
                return d(c(a, b))
            }, e.prototype.selectionContainer = function () {
                return a("<span></span>")
            }, e.prototype.update = function (a) {
                if (0 === a.length)return void this.clear();
                var b = a[0], c = this.$selection.find(".select2-selection__rendered"), d = this.display(b, c);
                c.empty().append(d), c.prop("title", b.title || b.text)
            }, e
        }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (a, b, c) {
            function d(a, b) {
                d.__super__.constructor.apply(this, arguments)
            }

            return c.Extend(d, b), d.prototype.render = function () {
                var a = d.__super__.render.call(this);
                return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a
            }, d.prototype.bind = function (b, c) {
                var e = this;
                d.__super__.bind.apply(this, arguments), this.$selection.on("click", function (a) {
                    e.trigger("toggle", {originalEvent: a})
                }), this.$selection.on("click", ".select2-selection__choice__remove", function (b) {
                    if (!e.options.get("disabled")) {
                        var c = a(this), d = c.parent(), f = d.data("data");
                        e.trigger("unselect", {originalEvent: b, data: f})
                    }
                })
            }, d.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, d.prototype.display = function (a, b) {
                var c = this.options.get("templateSelection"), d = this.options.get("escapeMarkup");
                return d(c(a, b))
            }, d.prototype.selectionContainer = function () {
                var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                return b
            }, d.prototype.update = function (a) {
                if (this.clear(), 0 !== a.length) {
                    for (var b = [], d = 0; d < a.length; d++) {
                        var e = a[d], f = this.selectionContainer(), g = this.display(e, f);
                        f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f)
                    }
                    var h = this.$selection.find(".select2-selection__rendered");
                    c.appendMany(h, b)
                }
            }, d
        }), b.define("select2/selection/placeholder", ["../utils"], function (a) {
            function b(a, b, c) {
                this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c)
            }

            return b.prototype.normalizePlaceholder = function (a, b) {
                return "string" == typeof b && (b = {id: "", text: b}), b
            }, b.prototype.createPlaceholder = function (a, b) {
                var c = this.selectionContainer();
                return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c
            }, b.prototype.update = function (a, b) {
                var c = 1 == b.length && b[0].id != this.placeholder.id, d = b.length > 1;
                if (d || c)return a.call(this, b);
                this.clear();
                var e = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(e)
            }, b
        }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function (a, b) {
            function c() {
            }

            return c.prototype.bind = function (a, b, c) {
                var d = this;
                a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (a) {
                    d._handleClear(a)
                }), b.on("keypress", function (a) {
                    d._handleKeyboardClear(a, b)
                })
            }, c.prototype._handleClear = function (a, b) {
                if (!this.options.get("disabled")) {
                    var c = this.$selection.find(".select2-selection__clear");
                    if (0 !== c.length) {
                        b.stopPropagation();
                        for (var d = c.data("data"), e = 0; e < d.length; e++) {
                            var f = {data: d[e]};
                            if (this.trigger("unselect", f), f.prevented)return
                        }
                        this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                    }
                }
            }, c.prototype._handleKeyboardClear = function (a, c, d) {
                d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c)
            }, c.prototype.update = function (b, c) {
                if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
                    var d = a('<span class="select2-selection__clear">&times;</span>');
                    d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d)
                }
            }, c
        }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (a, b, c) {
            function d(a, b, c) {
                a.call(this, b, c)
            }

            return d.prototype.render = function (b) {
                var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = c, this.$search = c.find("input");
                var d = b.call(this);
                return this._transferTabIndex(), d
            }, d.prototype.bind = function (a, b, d) {
                var e = this;
                a.call(this, b, d), b.on("open", function () {
                    e.$search.trigger("focus")
                }), b.on("close", function () {
                    e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus")
                }), b.on("enable", function () {
                    e.$search.prop("disabled", !1), e._transferTabIndex()
                }), b.on("disable", function () {
                    e.$search.prop("disabled", !0)
                }), b.on("focus", function (a) {
                    e.$search.trigger("focus")
                }), b.on("results:focus", function (a) {
                    e.$search.attr("aria-activedescendant", a.id)
                }), this.$selection.on("focusin", ".select2-search--inline", function (a) {
                    e.trigger("focus", a)
                }), this.$selection.on("focusout", ".select2-search--inline", function (a) {
                    e._handleBlur(a)
                }), this.$selection.on("keydown", ".select2-search--inline", function (a) {
                    a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
                    var b = a.which;
                    if (b === c.BACKSPACE && "" === e.$search.val()) {
                        var d = e.$searchContainer.prev(".select2-selection__choice");
                        if (d.length > 0) {
                            var f = d.data("data");
                            e.searchRemoveChoice(f), a.preventDefault()
                        }
                    }
                });
                var f = document.documentMode, g = f && 11 >= f;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function (a) {
                    return g ? void e.$selection.off("input.search input.searchcheck") : void e.$selection.off("keyup.search")
                }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (a) {
                    if (g && "input" === a.type)return void e.$selection.off("input.search input.searchcheck");
                    var b = a.which;
                    b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a)
                })
            }, d.prototype._transferTabIndex = function (a) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
            }, d.prototype.createPlaceholder = function (a, b) {
                this.$search.attr("placeholder", b.text)
            }, d.prototype.update = function (a, b) {
                var c = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus()
            }, d.prototype.handleSearch = function () {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var a = this.$search.val();
                    this.trigger("query", {term: a})
                }
                this._keyUpPrevented = !1
            }, d.prototype.searchRemoveChoice = function (a, b) {
                this.trigger("unselect", {data: b}), this.$search.val(b.text), this.handleSearch()
            }, d.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var a = "";
                if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth(); else {
                    var b = this.$search.val().length + 1;
                    a = .75 * b + "em"
                }
                this.$search.css("width", a)
            }, d
        }), b.define("select2/selection/eventRelay", ["jquery"], function (a) {
            function b() {
            }

            return b.prototype.bind = function (b, c, d) {
                var e = this,
                    f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                    g = ["opening", "closing", "selecting", "unselecting"];
                b.call(this, c, d), c.on("*", function (b, c) {
                    if (-1 !== a.inArray(b, f)) {
                        c = c || {};
                        var d = a.Event("select2:" + b, {params: c});
                        e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented())
                    }
                })
            }, b
        }), b.define("select2/translation", ["jquery", "require"], function (a, b) {
            function c(a) {
                this.dict = a || {}
            }

            return c.prototype.all = function () {
                return this.dict
            }, c.prototype.get = function (a) {
                return this.dict[a]
            }, c.prototype.extend = function (b) {
                this.dict = a.extend({}, b.all(), this.dict)
            }, c._cache = {}, c.loadPath = function (a) {
                if (!(a in c._cache)) {
                    var d = b(a);
                    c._cache[a] = d
                }
                return new c(c._cache[a])
            }, c
        }), b.define("select2/diacritics", [], function () {
            var a = {
                "â’¶": "A",
                "ï¼¡": "A",
                "Ã€": "A",
                "Ã": "A",
                "Ã‚": "A",
                "áº¦": "A",
                "áº¤": "A",
                "áºª": "A",
                "áº¨": "A",
                "Ãƒ": "A",
                "Ä€": "A",
                "Ä‚": "A",
                "áº°": "A",
                "áº®": "A",
                "áº´": "A",
                "áº²": "A",
                "È¦": "A",
                "Ç ": "A",
                "Ã„": "A",
                "Çž": "A",
                "áº¢": "A",
                "Ã…": "A",
                "Çº": "A",
                "Ç": "A",
                "È€": "A",
                "È‚": "A",
                "áº ": "A",
                "áº¬": "A",
                "áº¶": "A",
                "á¸€": "A",
                "Ä„": "A",
                "Èº": "A",
                "â±¯": "A",
                "êœ²": "AA",
                "Ã†": "AE",
                "Ç¼": "AE",
                "Ç¢": "AE",
                "êœ´": "AO",
                "êœ¶": "AU",
                "êœ¸": "AV",
                "êœº": "AV",
                "êœ¼": "AY",
                "â’·": "B",
                "ï¼¢": "B",
                "á¸‚": "B",
                "á¸„": "B",
                "á¸†": "B",
                "Éƒ": "B",
                "Æ‚": "B",
                "Æ": "B",
                "â’¸": "C",
                "ï¼£": "C",
                "Ä†": "C",
                "Äˆ": "C",
                "ÄŠ": "C",
                "ÄŒ": "C",
                "Ã‡": "C",
                "á¸ˆ": "C",
                "Æ‡": "C",
                "È»": "C",
                "êœ¾": "C",
                "â’¹": "D",
                "ï¼¤": "D",
                "á¸Š": "D",
                "ÄŽ": "D",
                "á¸Œ": "D",
                "á¸": "D",
                "á¸’": "D",
                "á¸Ž": "D",
                "Ä": "D",
                "Æ‹": "D",
                "ÆŠ": "D",
                "Æ‰": "D",
                "ê¹": "D",
                "Ç±": "DZ",
                "Ç„": "DZ",
                "Ç²": "Dz",
                "Ç…": "Dz",
                "â’º": "E",
                "ï¼¥": "E",
                "Ãˆ": "E",
                "Ã‰": "E",
                "ÃŠ": "E",
                "á»€": "E",
                "áº¾": "E",
                "á»„": "E",
                "á»‚": "E",
                "áº¼": "E",
                "Ä’": "E",
                "á¸”": "E",
                "á¸–": "E",
                "Ä”": "E",
                "Ä–": "E",
                "Ã‹": "E",
                "áºº": "E",
                "Äš": "E",
                "È„": "E",
                "È†": "E",
                "áº¸": "E",
                "á»†": "E",
                "È¨": "E",
                "á¸œ": "E",
                "Ä˜": "E",
                "á¸˜": "E",
                "á¸š": "E",
                "Æ": "E",
                "ÆŽ": "E",
                "â’»": "F",
                "ï¼¦": "F",
                "á¸ž": "F",
                "Æ‘": "F",
                "ê»": "F",
                "â’¼": "G",
                "ï¼§": "G",
                "Ç´": "G",
                "Äœ": "G",
                "á¸ ": "G",
                "Äž": "G",
                "Ä ": "G",
                "Ç¦": "G",
                "Ä¢": "G",
                "Ç¤": "G",
                "Æ“": "G",
                "êž ": "G",
                "ê½": "G",
                "ê¾": "G",
                "â’½": "H",
                "ï¼¨": "H",
                "Ä¤": "H",
                "á¸¢": "H",
                "á¸¦": "H",
                "Èž": "H",
                "á¸¤": "H",
                "á¸¨": "H",
                "á¸ª": "H",
                "Ä¦": "H",
                "â±§": "H",
                "â±µ": "H",
                "êž": "H",
                "â’¾": "I",
                "ï¼©": "I",
                "ÃŒ": "I",
                "Ã": "I",
                "ÃŽ": "I",
                "Ä¨": "I",
                "Äª": "I",
                "Ä¬": "I",
                "Ä°": "I",
                "Ã": "I",
                "á¸®": "I",
                "á»ˆ": "I",
                "Ç": "I",
                "Èˆ": "I",
                "ÈŠ": "I",
                "á»Š": "I",
                "Ä®": "I",
                "á¸¬": "I",
                "Æ—": "I",
                "â’¿": "J",
                "ï¼ª": "J",
                "Ä´": "J",
                "Éˆ": "J",
                "â“€": "K",
                "ï¼«": "K",
                "á¸°": "K",
                "Ç¨": "K",
                "á¸²": "K",
                "Ä¶": "K",
                "á¸´": "K",
                "Æ˜": "K",
                "â±©": "K",
                "ê€": "K",
                "ê‚": "K",
                "ê„": "K",
                "êž¢": "K",
                "â“": "L",
                "ï¼¬": "L",
                "Ä¿": "L",
                "Ä¹": "L",
                "Ä½": "L",
                "á¸¶": "L",
                "á¸¸": "L",
                "Ä»": "L",
                "á¸¼": "L",
                "á¸º": "L",
                "Å": "L",
                "È½": "L",
                "â±¢": "L",
                "â± ": "L",
                "êˆ": "L",
                "ê†": "L",
                "êž€": "L",
                "Ç‡": "LJ",
                "Çˆ": "Lj",
                "â“‚": "M",
                "ï¼­": "M",
                "á¸¾": "M",
                "á¹€": "M",
                "á¹‚": "M",
                "â±®": "M",
                "Æœ": "M",
                "â“ƒ": "N",
                "ï¼®": "N",
                "Ç¸": "N",
                "Åƒ": "N",
                "Ã‘": "N",
                "á¹„": "N",
                "Å‡": "N",
                "á¹†": "N",
                "Å…": "N",
                "á¹Š": "N",
                "á¹ˆ": "N",
                "È ": "N",
                "Æ": "N",
                "êž": "N",
                "êž¤": "N",
                "ÇŠ": "NJ",
                "Ç‹": "Nj",
                "â“„": "O",
                "ï¼¯": "O",
                "Ã’": "O",
                "Ã“": "O",
                "Ã”": "O",
                "á»’": "O",
                "á»": "O",
                "á»–": "O",
                "á»”": "O",
                "Ã•": "O",
                "á¹Œ": "O",
                "È¬": "O",
                "á¹Ž": "O",
                "ÅŒ": "O",
                "á¹": "O",
                "á¹’": "O",
                "ÅŽ": "O",
                "È®": "O",
                "È°": "O",
                "Ã–": "O",
                "Èª": "O",
                "á»Ž": "O",
                "Å": "O",
                "Ç‘": "O",
                "ÈŒ": "O",
                "ÈŽ": "O",
                "Æ ": "O",
                "á»œ": "O",
                "á»š": "O",
                "á» ": "O",
                "á»ž": "O",
                "á»¢": "O",
                "á»Œ": "O",
                "á»˜": "O",
                "Çª": "O",
                "Ç¬": "O",
                "Ã˜": "O",
                "Ç¾": "O",
                "Æ†": "O",
                "ÆŸ": "O",
                "êŠ": "O",
                "êŒ": "O",
                "Æ¢": "OI",
                "êŽ": "OO",
                "È¢": "OU",
                "â“…": "P",
                "ï¼°": "P",
                "á¹”": "P",
                "á¹–": "P",
                "Æ¤": "P",
                "â±£": "P",
                "ê": "P",
                "ê’": "P",
                "ê”": "P",
                "â“†": "Q",
                "ï¼±": "Q",
                "ê–": "Q",
                "ê˜": "Q",
                "ÉŠ": "Q",
                "â“‡": "R",
                "ï¼²": "R",
                "Å”": "R",
                "á¹˜": "R",
                "Å˜": "R",
                "È": "R",
                "È’": "R",
                "á¹š": "R",
                "á¹œ": "R",
                "Å–": "R",
                "á¹ž": "R",
                "ÉŒ": "R",
                "â±¤": "R",
                "êš": "R",
                "êž¦": "R",
                "êž‚": "R",
                "â“ˆ": "S",
                "ï¼³": "S",
                "áºž": "S",
                "Åš": "S",
                "á¹¤": "S",
                "Åœ": "S",
                "á¹ ": "S",
                "Å ": "S",
                "á¹¦": "S",
                "á¹¢": "S",
                "á¹¨": "S",
                "È˜": "S",
                "Åž": "S",
                "â±¾": "S",
                "êž¨": "S",
                "êž„": "S",
                "â“‰": "T",
                "ï¼´": "T",
                "á¹ª": "T",
                "Å¤": "T",
                "á¹¬": "T",
                "Èš": "T",
                "Å¢": "T",
                "á¹°": "T",
                "á¹®": "T",
                "Å¦": "T",
                "Æ¬": "T",
                "Æ®": "T",
                "È¾": "T",
                "êž†": "T",
                "êœ¨": "TZ",
                "â“Š": "U",
                "ï¼µ": "U",
                "Ã™": "U",
                "Ãš": "U",
                "Ã›": "U",
                "Å¨": "U",
                "á¹¸": "U",
                "Åª": "U",
                "á¹º": "U",
                "Å¬": "U",
                "Ãœ": "U",
                "Ç›": "U",
                "Ç—": "U",
                "Ç•": "U",
                "Ç™": "U",
                "á»¦": "U",
                "Å®": "U",
                "Å°": "U",
                "Ç“": "U",
                "È”": "U",
                "È–": "U",
                "Æ¯": "U",
                "á»ª": "U",
                "á»¨": "U",
                "á»®": "U",
                "á»¬": "U",
                "á»°": "U",
                "á»¤": "U",
                "á¹²": "U",
                "Å²": "U",
                "á¹¶": "U",
                "á¹´": "U",
                "É„": "U",
                "â“‹": "V",
                "ï¼¶": "V",
                "á¹¼": "V",
                "á¹¾": "V",
                "Æ²": "V",
                "êž": "V",
                "É…": "V",
                "ê ": "VY",
                "â“Œ": "W",
                "ï¼·": "W",
                "áº€": "W",
                "áº‚": "W",
                "Å´": "W",
                "áº†": "W",
                "áº„": "W",
                "áºˆ": "W",
                "â±²": "W",
                "â“": "X",
                "ï¼¸": "X",
                "áºŠ": "X",
                "áºŒ": "X",
                "â“Ž": "Y",
                "ï¼¹": "Y",
                "á»²": "Y",
                "Ã": "Y",
                "Å¶": "Y",
                "á»¸": "Y",
                "È²": "Y",
                "áºŽ": "Y",
                "Å¸": "Y",
                "á»¶": "Y",
                "á»´": "Y",
                "Æ³": "Y",
                "ÉŽ": "Y",
                "á»¾": "Y",
                "â“": "Z",
                "ï¼º": "Z",
                "Å¹": "Z",
                "áº": "Z",
                "Å»": "Z",
                "Å½": "Z",
                "áº’": "Z",
                "áº”": "Z",
                "Æµ": "Z",
                "È¤": "Z",
                "â±¿": "Z",
                "â±«": "Z",
                "ê¢": "Z",
                "â“": "a",
                "ï½": "a",
                "áºš": "a",
                "Ã ": "a",
                "Ã¡": "a",
                "Ã¢": "a",
                "áº§": "a",
                "áº¥": "a",
                "áº«": "a",
                "áº©": "a",
                "Ã£": "a",
                "Ä": "a",
                "Äƒ": "a",
                "áº±": "a",
                "áº¯": "a",
                "áºµ": "a",
                "áº³": "a",
                "È§": "a",
                "Ç¡": "a",
                "Ã¤": "a",
                "ÇŸ": "a",
                "áº£": "a",
                "Ã¥": "a",
                "Ç»": "a",
                "ÇŽ": "a",
                "È": "a",
                "Èƒ": "a",
                "áº¡": "a",
                "áº­": "a",
                "áº·": "a",
                "á¸": "a",
                "Ä…": "a",
                "â±¥": "a",
                "É": "a",
                "êœ³": "aa",
                "Ã¦": "ae",
                "Ç½": "ae",
                "Ç£": "ae",
                "êœµ": "ao",
                "êœ·": "au",
                "êœ¹": "av",
                "êœ»": "av",
                "êœ½": "ay",
                "â“‘": "b",
                "ï½‚": "b",
                "á¸ƒ": "b",
                "á¸…": "b",
                "á¸‡": "b",
                "Æ€": "b",
                "Æƒ": "b",
                "É“": "b",
                "â“’": "c",
                "ï½ƒ": "c",
                "Ä‡": "c",
                "Ä‰": "c",
                "Ä‹": "c",
                "Ä": "c",
                "Ã§": "c",
                "á¸‰": "c",
                "Æˆ": "c",
                "È¼": "c",
                "êœ¿": "c",
                "â†„": "c",
                "â““": "d",
                "ï½„": "d",
                "á¸‹": "d",
                "Ä": "d",
                "á¸": "d",
                "á¸‘": "d",
                "á¸“": "d",
                "á¸": "d",
                "Ä‘": "d",
                "ÆŒ": "d",
                "É–": "d",
                "É—": "d",
                "êº": "d",
                "Ç³": "dz",
                "Ç†": "dz",
                "â“”": "e",
                "ï½…": "e",
                "Ã¨": "e",
                "Ã©": "e",
                "Ãª": "e",
                "á»": "e",
                "áº¿": "e",
                "á»…": "e",
                "á»ƒ": "e",
                "áº½": "e",
                "Ä“": "e",
                "á¸•": "e",
                "á¸—": "e",
                "Ä•": "e",
                "Ä—": "e",
                "Ã«": "e",
                "áº»": "e",
                "Ä›": "e",
                "È…": "e",
                "È‡": "e",
                "áº¹": "e",
                "á»‡": "e",
                "È©": "e",
                "á¸": "e",
                "Ä™": "e",
                "á¸™": "e",
                "á¸›": "e",
                "É‡": "e",
                "É›": "e",
                "Ç": "e",
                "â“•": "f",
                "ï½†": "f",
                "á¸Ÿ": "f",
                "Æ’": "f",
                "ê¼": "f",
                "â“–": "g",
                "ï½‡": "g",
                "Çµ": "g",
                "Ä": "g",
                "á¸¡": "g",
                "ÄŸ": "g",
                "Ä¡": "g",
                "Ç§": "g",
                "Ä£": "g",
                "Ç¥": "g",
                "É ": "g",
                "êž¡": "g",
                "áµ¹": "g",
                "ê¿": "g",
                "â“—": "h",
                "ï½ˆ": "h",
                "Ä¥": "h",
                "á¸£": "h",
                "á¸§": "h",
                "ÈŸ": "h",
                "á¸¥": "h",
                "á¸©": "h",
                "á¸«": "h",
                "áº–": "h",
                "Ä§": "h",
                "â±¨": "h",
                "â±¶": "h",
                "É¥": "h",
                "Æ•": "hv",
                "â“˜": "i",
                "ï½‰": "i",
                "Ã¬": "i",
                "Ã­": "i",
                "Ã®": "i",
                "Ä©": "i",
                "Ä«": "i",
                "Ä­": "i",
                "Ã¯": "i",
                "á¸¯": "i",
                "á»‰": "i",
                "Ç": "i",
                "È‰": "i",
                "È‹": "i",
                "á»‹": "i",
                "Ä¯": "i",
                "á¸­": "i",
                "É¨": "i",
                "Ä±": "i",
                "â“™": "j",
                "ï½Š": "j",
                "Äµ": "j",
                "Ç°": "j",
                "É‰": "j",
                "â“š": "k",
                "ï½‹": "k",
                "á¸±": "k",
                "Ç©": "k",
                "á¸³": "k",
                "Ä·": "k",
                "á¸µ": "k",
                "Æ™": "k",
                "â±ª": "k",
                "ê": "k",
                "êƒ": "k",
                "ê…": "k",
                "êž£": "k",
                "â“›": "l",
                "ï½Œ": "l",
                "Å€": "l",
                "Äº": "l",
                "Ä¾": "l",
                "á¸·": "l",
                "á¸¹": "l",
                "Ä¼": "l",
                "á¸½": "l",
                "á¸»": "l",
                "Å¿": "l",
                "Å‚": "l",
                "Æš": "l",
                "É«": "l",
                "â±¡": "l",
                "ê‰": "l",
                "êž": "l",
                "ê‡": "l",
                "Ç‰": "lj",
                "â“œ": "m",
                "ï½": "m",
                "á¸¿": "m",
                "á¹": "m",
                "á¹ƒ": "m",
                "É±": "m",
                "É¯": "m",
                "â“": "n",
                "ï½Ž": "n",
                "Ç¹": "n",
                "Å„": "n",
                "Ã±": "n",
                "á¹…": "n",
                "Åˆ": "n",
                "á¹‡": "n",
                "Å†": "n",
                "á¹‹": "n",
                "á¹‰": "n",
                "Æž": "n",
                "É²": "n",
                "Å‰": "n",
                "êž‘": "n",
                "êž¥": "n",
                "ÇŒ": "nj",
                "â“ž": "o",
                "ï½": "o",
                "Ã²": "o",
                "Ã³": "o",
                "Ã´": "o",
                "á»“": "o",
                "á»‘": "o",
                "á»—": "o",
                "á»•": "o",
                "Ãµ": "o",
                "á¹": "o",
                "È­": "o",
                "á¹": "o",
                "Å": "o",
                "á¹‘": "o",
                "á¹“": "o",
                "Å": "o",
                "È¯": "o",
                "È±": "o",
                "Ã¶": "o",
                "È«": "o",
                "á»": "o",
                "Å‘": "o",
                "Ç’": "o",
                "È": "o",
                "È": "o",
                "Æ¡": "o",
                "á»": "o",
                "á»›": "o",
                "á»¡": "o",
                "á»Ÿ": "o",
                "á»£": "o",
                "á»": "o",
                "á»™": "o",
                "Ç«": "o",
                "Ç­": "o",
                "Ã¸": "o",
                "Ç¿": "o",
                "É”": "o",
                "ê‹": "o",
                "ê": "o",
                "Éµ": "o",
                "Æ£": "oi",
                "È£": "ou",
                "ê": "oo",
                "â“Ÿ": "p",
                "ï½": "p",
                "á¹•": "p",
                "á¹—": "p",
                "Æ¥": "p",
                "áµ½": "p",
                "ê‘": "p",
                "ê“": "p",
                "ê•": "p",
                "â“ ": "q",
                "ï½‘": "q",
                "É‹": "q",
                "ê—": "q",
                "ê™": "q",
                "â“¡": "r",
                "ï½’": "r",
                "Å•": "r",
                "á¹™": "r",
                "Å™": "r",
                "È‘": "r",
                "È“": "r",
                "á¹›": "r",
                "á¹": "r",
                "Å—": "r",
                "á¹Ÿ": "r",
                "É": "r",
                "É½": "r",
                "ê›": "r",
                "êž§": "r",
                "êžƒ": "r",
                "â“¢": "s",
                "ï½“": "s",
                "ÃŸ": "s",
                "Å›": "s",
                "á¹¥": "s",
                "Å": "s",
                "á¹¡": "s",
                "Å¡": "s",
                "á¹§": "s",
                "á¹£": "s",
                "á¹©": "s",
                "È™": "s",
                "ÅŸ": "s",
                "È¿": "s",
                "êž©": "s",
                "êž…": "s",
                "áº›": "s",
                "â“£": "t",
                "ï½”": "t",
                "á¹«": "t",
                "áº—": "t",
                "Å¥": "t",
                "á¹­": "t",
                "È›": "t",
                "Å£": "t",
                "á¹±": "t",
                "á¹¯": "t",
                "Å§": "t",
                "Æ­": "t",
                "Êˆ": "t",
                "â±¦": "t",
                "êž‡": "t",
                "êœ©": "tz",
                "â“¤": "u",
                "ï½•": "u",
                "Ã¹": "u",
                "Ãº": "u",
                "Ã»": "u",
                "Å©": "u",
                "á¹¹": "u",
                "Å«": "u",
                "á¹»": "u",
                "Å­": "u",
                "Ã¼": "u",
                "Çœ": "u",
                "Ç˜": "u",
                "Ç–": "u",
                "Çš": "u",
                "á»§": "u",
                "Å¯": "u",
                "Å±": "u",
                "Ç”": "u",
                "È•": "u",
                "È—": "u",
                "Æ°": "u",
                "á»«": "u",
                "á»©": "u",
                "á»¯": "u",
                "á»­": "u",
                "á»±": "u",
                "á»¥": "u",
                "á¹³": "u",
                "Å³": "u",
                "á¹·": "u",
                "á¹µ": "u",
                "Ê‰": "u",
                "â“¥": "v",
                "ï½–": "v",
                "á¹½": "v",
                "á¹¿": "v",
                "Ê‹": "v",
                "êŸ": "v",
                "ÊŒ": "v",
                "ê¡": "vy",
                "â“¦": "w",
                "ï½—": "w",
                "áº": "w",
                "áºƒ": "w",
                "Åµ": "w",
                "áº‡": "w",
                "áº…": "w",
                "áº˜": "w",
                "áº‰": "w",
                "â±³": "w",
                "â“§": "x",
                "ï½˜": "x",
                "áº‹": "x",
                "áº": "x",
                "â“¨": "y",
                "ï½™": "y",
                "á»³": "y",
                "Ã½": "y",
                "Å·": "y",
                "á»¹": "y",
                "È³": "y",
                "áº": "y",
                "Ã¿": "y",
                "á»·": "y",
                "áº™": "y",
                "á»µ": "y",
                "Æ´": "y",
                "É": "y",
                "á»¿": "y",
                "â“©": "z",
                "ï½š": "z",
                "Åº": "z",
                "áº‘": "z",
                "Å¼": "z",
                "Å¾": "z",
                "áº“": "z",
                "áº•": "z",
                "Æ¶": "z",
                "È¥": "z",
                "É€": "z",
                "â±¬": "z",
                "ê£": "z",
                "Î†": "Î‘",
                "Îˆ": "Î•",
                "Î‰": "Î—",
                "ÎŠ": "Î™",
                "Îª": "Î™",
                "ÎŒ": "ÎŸ",
                "ÎŽ": "Î¥",
                "Î«": "Î¥",
                "Î": "Î©",
                "Î¬": "Î±",
                "Î­": "Îµ",
                "Î®": "Î·",
                "Î¯": "Î¹",
                "ÏŠ": "Î¹",
                "Î": "Î¹",
                "ÏŒ": "Î¿",
                "Ï": "Ï…",
                "Ï‹": "Ï…",
                "Î°": "Ï…",
                "Ï‰": "Ï‰",
                "Ï‚": "Ïƒ"
            };
            return a
        }), b.define("select2/data/base", ["../utils"], function (a) {
            function b(a, c) {
                b.__super__.constructor.call(this)
            }

            return a.Extend(b, a.Observable), b.prototype.current = function (a) {
                throw new Error("The `current` method must be defined in child classes.")
            }, b.prototype.query = function (a, b) {
                throw new Error("The `query` method must be defined in child classes.")
            }, b.prototype.bind = function (a, b) {
            }, b.prototype.destroy = function () {
            }, b.prototype.generateResultId = function (b, c) {
                var d = b.id + "-result-";
                return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4)
            }, b
        }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function (a, b, c) {
            function d(a, b) {
                this.$element = a, this.options = b, d.__super__.constructor.call(this)
            }

            return b.Extend(d, a), d.prototype.current = function (a) {
                var b = [], d = this;
                this.$element.find(":selected").each(function () {
                    var a = c(this), e = d.item(a);
                    b.push(e)
                }), a(b)
            }, d.prototype.select = function (a) {
                var b = this;
                if (a.selected = !0, c(a.element).is("option"))return a.element.selected = !0, void this.$element.trigger("change");
                if (this.$element.prop("multiple")) this.current(function (d) {
                    var e = [];
                    a = [a], a.push.apply(a, d);
                    for (var f = 0; f < a.length; f++) {
                        var g = a[f].id;
                        -1 === c.inArray(g, e) && e.push(g)
                    }
                    b.$element.val(e), b.$element.trigger("change")
                }); else {
                    var d = a.id;
                    this.$element.val(d), this.$element.trigger("change")
                }
            }, d.prototype.unselect = function (a) {
                var b = this;
                if (this.$element.prop("multiple"))return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (d) {
                    for (var e = [], f = 0; f < d.length; f++) {
                        var g = d[f].id;
                        g !== a.id && -1 === c.inArray(g, e) && e.push(g)
                    }
                    b.$element.val(e), b.$element.trigger("change")
                })
            }, d.prototype.bind = function (a, b) {
                var c = this;
                this.container = a, a.on("select", function (a) {
                    c.select(a.data)
                }), a.on("unselect", function (a) {
                    c.unselect(a.data)
                })
            }, d.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                    c.removeData(this, "data")
                })
            }, d.prototype.query = function (a, b) {
                var d = [], e = this, f = this.$element.children();
                f.each(function () {
                    var b = c(this);
                    if (b.is("option") || b.is("optgroup")) {
                        var f = e.item(b), g = e.matches(a, f);
                        null !== g && d.push(g)
                    }
                }), b({results: d})
            }, d.prototype.addOptions = function (a) {
                b.appendMany(this.$element, a)
            }, d.prototype.option = function (a) {
                var b;
                a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);
                var d = c(b), e = this._normalizeItem(a);
                return e.element = b, c.data(b, "data", e), d
            }, d.prototype.item = function (a) {
                var b = {};
                if (b = c.data(a[0], "data"), null != b)return b;
                if (a.is("option")) b = {
                    id: a.val(),
                    text: a.text(),
                    disabled: a.prop("disabled"),
                    selected: a.prop("selected"),
                    title: a.prop("title")
                }; else if (a.is("optgroup")) {
                    b = {text: a.prop("label"), children: [], title: a.prop("title")};
                    for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
                        var g = c(d[f]), h = this.item(g);
                        e.push(h)
                    }
                    b.children = e
                }
                return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b
            }, d.prototype._normalizeItem = function (a) {
                c.isPlainObject(a) || (a = {id: a, text: a}), a = c.extend({}, {text: ""}, a);
                var b = {selected: !1, disabled: !1};
                return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a)
            }, d.prototype.matches = function (a, b) {
                var c = this.options.get("matcher");
                return c(a, b)
            }, d
        }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function (a, b, c) {
            function d(a, b) {
                var c = b.get("data") || [];
                d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c))
            }

            return b.Extend(d, a), d.prototype.select = function (a) {
                var b = this.$element.find("option").filter(function (b, c) {
                    return c.value == a.id.toString()
                });
                0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a)
            }, d.prototype.convertToOptions = function (a) {
                function d(a) {
                    return function () {
                        return c(this).val() == a.id
                    }
                }

                for (var e = this, f = this.$element.find("option"), g = f.map(function () {
                    return e.item(c(this)).id
                }).get(), h = [], i = 0; i < a.length; i++) {
                    var j = this._normalizeItem(a[i]);
                    if (c.inArray(j.id, g) >= 0) {
                        var k = f.filter(d(j)), l = this.item(k), m = c.extend(!0, {}, j, l), n = this.option(m);
                        k.replaceWith(n)
                    } else {
                        var o = this.option(j);
                        if (j.children) {
                            var p = this.convertToOptions(j.children);
                            b.appendMany(o, p)
                        }
                        h.push(o)
                    }
                }
                return h
            }, d
        }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (a, b, c) {
            function d(a, b) {
                this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b)
            }

            return b.Extend(d, a), d.prototype._applyDefaults = function (a) {
                var b = {
                    data: function (a) {
                        return c.extend({}, a, {q: a.term})
                    }, transport: function (a, b, d) {
                        var e = c.ajax(a);
                        return e.then(b), e.fail(d), e
                    }
                };
                return c.extend({}, b, a, !0)
            }, d.prototype.processResults = function (a) {
                return a
            }, d.prototype.query = function (a, b) {
                function d() {
                    var d = f.transport(f, function (d) {
                        var f = e.processResults(d, a);
                        e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f)
                    }, function () {
                        e.trigger("results:message", {message: "errorLoading"})
                    });
                    e._request = d
                }

                var e = this;
                null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                var f = c.extend({type: "GET"}, this.ajaxOptions);
                "function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && "" !== a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d()
            }, d
        }), b.define("select2/data/tags", ["jquery"], function (a) {
            function b(b, c, d) {
                var e = d.get("tags"), f = d.get("createTag");
                void 0 !== f && (this.createTag = f);
                var g = d.get("insertTag");
                if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e))for (var h = 0; h < e.length; h++) {
                    var i = e[h], j = this._normalizeItem(i), k = this.option(j);
                    this.$element.append(k)
                }
            }

            return b.prototype.query = function (a, b, c) {
                function d(a, f) {
                    for (var g = a.results, h = 0; h < g.length; h++) {
                        var i = g[h], j = null != i.children && !d({results: i.children}, !0), k = i.text === b.term;
                        if (k || j)return f ? !1 : (a.data = g, void c(a))
                    }
                    if (f)return !0;
                    var l = e.createTag(b);
                    if (null != l) {
                        var m = e.option(l);
                        m.attr("data-select2-tag", !0), e.addOptions([m]), e.insertTag(g, l)
                    }
                    a.results = g, c(a)
                }

                var e = this;
                return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d)
            }, b.prototype.createTag = function (b, c) {
                var d = a.trim(c.term);
                return "" === d ? null : {id: d, text: d}
            }, b.prototype.insertTag = function (a, b, c) {
                b.unshift(c)
            }, b.prototype._removeOldTags = function (b) {
                var c = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                c.each(function () {
                    this.selected || a(this).remove()
                })
            }, b
        }), b.define("select2/data/tokenizer", ["jquery"], function (a) {
            function b(a, b, c) {
                var d = c.get("tokenizer");
                void 0 !== d && (this.tokenizer = d), a.call(this, b, c)
            }

            return b.prototype.bind = function (a, b, c) {
                a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field")
            }, b.prototype.query = function (a, b, c) {
                function d(a) {
                    e.trigger("select", {data: a})
                }

                var e = this;
                b.term = b.term || "";
                var f = this.tokenizer(b, this.options, d);
                f.term !== b.term && (this.$search.length && (this.$search.val(f.term), this.$search.focus()), b.term = f.term), a.call(this, b, c)
            }, b.prototype.tokenizer = function (b, c, d, e) {
                for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function (a) {
                        return {id: a.term, text: a.term}
                    }; h < g.length;) {
                    var j = g[h];
                    if (-1 !== a.inArray(j, f)) {
                        var k = g.substr(0, h), l = a.extend({}, c, {term: k}), m = i(l);
                        null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++
                    } else h++
                }
                return {term: g}
            }, b
        }), b.define("select2/data/minimumInputLength", [], function () {
            function a(a, b, c) {
                this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c)
            }

            return a.prototype.query = function (a, b, c) {
                return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {minimum: this.minimumInputLength, input: b.term, params: b}
                }) : void a.call(this, b, c)
            }, a
        }), b.define("select2/data/maximumInputLength", [], function () {
            function a(a, b, c) {
                this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c)
            }

            return a.prototype.query = function (a, b, c) {
                return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {maximum: this.maximumInputLength, input: b.term, params: b}
                }) : void a.call(this, b, c)
            }, a
        }), b.define("select2/data/maximumSelectionLength", [], function () {
            function a(a, b, c) {
                this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c)
            }

            return a.prototype.query = function (a, b, c) {
                var d = this;
                this.current(function (e) {
                    var f = null != e ? e.length : 0;
                    return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", {
                        message: "maximumSelected",
                        args: {maximum: d.maximumSelectionLength}
                    }) : void a.call(d, b, c)
                })
            }, a
        }), b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) {
            function c(a, b) {
                this.$element = a, this.options = b, c.__super__.constructor.call(this)
            }

            return b.Extend(c, b.Observable), c.prototype.render = function () {
                var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b
            }, c.prototype.bind = function () {
            }, c.prototype.position = function (a, b) {
            }, c.prototype.destroy = function () {
                this.$dropdown.remove()
            }, c
        }), b.define("select2/dropdown/search", ["jquery", "../utils"], function (a, b) {
            function c() {
            }

            return c.prototype.render = function (b) {
                var c = b.call(this),
                    d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c
            }, c.prototype.bind = function (b, c, d) {
                var e = this;
                b.call(this, c, d), this.$search.on("keydown", function (a) {
                    e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented()
                }), this.$search.on("input", function (b) {
                    a(this).off("keyup")
                }), this.$search.on("keyup input", function (a) {
                    e.handleSearch(a)
                }), c.on("open", function () {
                    e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function () {
                        e.$search.focus()
                    }, 0)
                }), c.on("close", function () {
                    e.$search.attr("tabindex", -1), e.$search.val("")
                }), c.on("results:all", function (a) {
                    if (null == a.query.term || "" === a.query.term) {
                        var b = e.showSearch(a);
                        b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide")
                    }
                })
            }, c.prototype.handleSearch = function (a) {
                if (!this._keyUpPrevented) {
                    var b = this.$search.val();
                    this.trigger("query", {term: b})
                }
                this._keyUpPrevented = !1
            }, c.prototype.showSearch = function (a, b) {
                return !0
            }, c
        }), b.define("select2/dropdown/hidePlaceholder", [], function () {
            function a(a, b, c, d) {
                this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d)
            }

            return a.prototype.append = function (a, b) {
                b.results = this.removePlaceholder(b.results), a.call(this, b)
            }, a.prototype.normalizePlaceholder = function (a, b) {
                return "string" == typeof b && (b = {id: "", text: b}), b
            }, a.prototype.removePlaceholder = function (a, b) {
                for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                    var e = b[d];
                    this.placeholder.id === e.id && c.splice(d, 1)
                }
                return c
            }, a
        }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) {
            function b(a, b, c, d) {
                this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1
            }

            return b.prototype.append = function (a, b) {
                this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore)
            }, b.prototype.bind = function (b, c, d) {
                var e = this;
                b.call(this, c, d), c.on("query", function (a) {
                    e.lastParams = a, e.loading = !0
                }), c.on("query:append", function (a) {
                    e.lastParams = a, e.loading = !0
                }), this.$results.on("scroll", function () {
                    var b = a.contains(document.documentElement, e.$loadingMore[0]);
                    if (!e.loading && b) {
                        var c = e.$results.offset().top + e.$results.outerHeight(!1),
                            d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);
                        c + 50 >= d && e.loadMore()
                    }
                })
            }, b.prototype.loadMore = function () {
                this.loading = !0;
                var b = a.extend({}, {page: 1}, this.lastParams);
                b.page++, this.trigger("query:append", b)
            }, b.prototype.showLoadingMore = function (a, b) {
                return b.pagination && b.pagination.more
            }, b.prototype.createLoadingMore = function () {
                var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                    c = this.options.get("translations").get("loadingMore");
                return b.html(c(this.lastParams)), b
            }, b
        }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (a, b) {
            function c(b, c, d) {
                this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d)
            }

            return c.prototype.bind = function (a, b, c) {
                var d = this, e = !1;
                a.call(this, b, c), b.on("open", function () {
                    d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function () {
                        d._positionDropdown(), d._resizeDropdown()
                    }), b.on("results:append", function () {
                        d._positionDropdown(), d._resizeDropdown()
                    }))
                }), b.on("close", function () {
                    d._hideDropdown(), d._detachPositioningHandler(b)
                }), this.$dropdownContainer.on("mousedown", function (a) {
                    a.stopPropagation()
                })
            }, c.prototype.destroy = function (a) {
                a.call(this), this.$dropdownContainer.remove()
            }, c.prototype.position = function (a, b, c) {
                b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({
                    position: "absolute",
                    top: -999999
                }), this.$container = c
            }, c.prototype.render = function (b) {
                var c = a("<span></span>"), d = b.call(this);
                return c.append(d), this.$dropdownContainer = c, c
            }, c.prototype._hideDropdown = function (a) {
                this.$dropdownContainer.detach()
            }, c.prototype._attachPositioningHandler = function (c, d) {
                var e = this, f = "scroll.select2." + d.id, g = "resize.select2." + d.id,
                    h = "orientationchange.select2." + d.id, i = this.$container.parents().filter(b.hasScroll);
                i.each(function () {
                    a(this).data("select2-scroll-position", {x: a(this).scrollLeft(), y: a(this).scrollTop()})
                }), i.on(f, function (b) {
                    var c = a(this).data("select2-scroll-position");
                    a(this).scrollTop(c.y)
                }), a(window).on(f + " " + g + " " + h, function (a) {
                    e._positionDropdown(), e._resizeDropdown()
                })
            }, c.prototype._detachPositioningHandler = function (c, d) {
                var e = "scroll.select2." + d.id, f = "resize.select2." + d.id, g = "orientationchange.select2." + d.id,
                    h = this.$container.parents().filter(b.hasScroll);
                h.off(e), a(window).off(e + " " + f + " " + g)
            }, c.prototype._positionDropdown = function () {
                var b = a(window), c = this.$dropdown.hasClass("select2-dropdown--above"),
                    d = this.$dropdown.hasClass("select2-dropdown--below"), e = null, f = this.$container.offset();
                f.bottom = f.top + this.$container.outerHeight(!1);
                var g = {height: this.$container.outerHeight(!1)};
                g.top = f.top, g.bottom = f.top + g.height;
                var h = {height: this.$dropdown.outerHeight(!1)},
                    i = {top: b.scrollTop(), bottom: b.scrollTop() + b.height()}, j = i.top < f.top - h.height,
                    k = i.bottom > f.bottom + h.height, l = {left: f.left, top: g.bottom}, m = this.$dropdownParent;
                "static" === m.css("position") && (m = m.offsetParent());
                var n = m.offset();
                l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l)
            }, c.prototype._resizeDropdown = function () {
                var a = {width: this.$container.outerWidth(!1) + "px"};
                this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.width = "auto"), this.$dropdown.css(a)
            }, c.prototype._showDropdown = function (a) {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
            }, c
        }), b.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function a(b) {
                for (var c = 0, d = 0; d < b.length; d++) {
                    var e = b[d];
                    e.children ? c += a(e.children) : c++
                }
                return c
            }

            function b(a, b, c, d) {
                this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d)
            }

            return b.prototype.showSearch = function (b, c) {
                return a(c.data.results) < this.minimumResultsForSearch ? !1 : b.call(this, c)
            }, b
        }), b.define("select2/dropdown/selectOnClose", [], function () {
            function a() {
            }

            return a.prototype.bind = function (a, b, c) {
                var d = this;
                a.call(this, b, c), b.on("close", function () {
                    d._handleSelectOnClose()
                })
            }, a.prototype._handleSelectOnClose = function () {
                var a = this.getHighlightedResults();
                if (!(a.length < 1)) {
                    var b = a.data("data");
                    null != b.element && b.element.selected || null == b.element && b.selected || this.trigger("select", {data: b})
                }
            }, a
        }), b.define("select2/dropdown/closeOnSelect", [], function () {
            function a() {
            }

            return a.prototype.bind = function (a, b, c) {
                var d = this;
                a.call(this, b, c), b.on("select", function (a) {
                    d._selectTriggered(a)
                }), b.on("unselect", function (a) {
                    d._selectTriggered(a)
                })
            }, a.prototype._selectTriggered = function (a, b) {
                var c = b.originalEvent;
                c && c.ctrlKey || this.trigger("close", {})
            }, a
        }), b.define("select2/i18n/en", [], function () {
            return {
                errorLoading: function () {
                    return "The results could not be loaded."
                }, inputTooLong: function (a) {
                    var b = a.input.length - a.maximum, c = "Please delete " + b + " character";
                    return 1 != b && (c += "s"), c
                }, inputTooShort: function (a) {
                    var b = a.minimum - a.input.length, c = "Please enter " + b + " or more characters";
                    return c
                }, loadingMore: function () {
                    return "Loading more resultsâ€¦"
                }, maximumSelected: function (a) {
                    var b = "You can only select " + a.maximum + " item";
                    return 1 != a.maximum && (b += "s"), b
                }, noResults: function () {
                    return "No results found"
                }, searching: function () {
                    return "Searchingâ€¦"
                }
            }
        }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
            function D() {
                this.reset()
            }

            D.prototype.apply = function (l) {
                if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
                    if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
                        var C = b(l.amdBase + "compat/query");
                        l.dataAdapter = j.Decorate(l.dataAdapter, C)
                    }
                    if (null != l.initSelection) {
                        var D = b(l.amdBase + "compat/initSelection");
                        l.dataAdapter = j.Decorate(l.dataAdapter, D)
                    }
                }
                if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
                    if (l.multiple) l.dropdownAdapter = u; else {
                        var E = j.Decorate(u, v);
                        l.dropdownAdapter = E
                    }
                    if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
                        var F = b(l.amdBase + "compat/dropdownCss");
                        l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F)
                    }
                    l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y)
                }
                if (null == l.selectionAdapter) {
                    if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
                        var G = b(l.amdBase + "compat/containerCss");
                        l.selectionAdapter = j.Decorate(l.selectionAdapter, G)
                    }
                    l.selectionAdapter = j.Decorate(l.selectionAdapter, i)
                }
                if ("string" == typeof l.language)if (l.language.indexOf("-") > 0) {
                    var H = l.language.split("-"), I = H[0];
                    l.language = [l.language, I]
                } else l.language = [l.language];
                if (a.isArray(l.language)) {
                    var J = new k;
                    l.language.push("en");
                    for (var K = l.language, L = 0; L < K.length; L++) {
                        var M = K[L], N = {};
                        try {
                            N = k.loadPath(M)
                        } catch (O) {
                            try {
                                M = this.defaults.amdLanguageBase + M, N = k.loadPath(M)
                            } catch (P) {
                                l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                                continue
                            }
                        }
                        J.extend(N)
                    }
                    l.translations = J
                } else {
                    var Q = k.loadPath(this.defaults.amdLanguageBase + "en"), R = new k(l.language);
                    R.extend(Q), l.translations = R
                }
                return l
            }, D.prototype.reset = function () {
                function b(a) {
                    function b(a) {
                        return l[a] || a
                    }

                    return a.replace(/[^\u0000-\u007E]/g, b)
                }

                function c(d, e) {
                    if ("" === a.trim(d.term))return e;
                    if (e.children && e.children.length > 0) {
                        for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
                            var h = e.children[g], i = c(d, h);
                            null == i && f.children.splice(g, 1)
                        }
                        return f.children.length > 0 ? f : c(d, f)
                    }
                    var j = b(e.text).toUpperCase(), k = b(d.term).toUpperCase();
                    return j.indexOf(k) > -1 ? e : null
                }

                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: j.escapeMarkup,
                    language: C,
                    matcher: c,
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function (a) {
                        return a
                    },
                    templateResult: function (a) {
                        return a.text
                    },
                    templateSelection: function (a) {
                        return a.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }, D.prototype.set = function (b, c) {
                var d = a.camelCase(b), e = {};
                e[d] = c;
                var f = j._convertData(e);
                a.extend(this.defaults, f)
            };
            var E = new D;
            return E
        }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (a, b, c, d) {
            function e(b, e) {
                if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
                    var f = a(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f)
                }
            }

            return e.prototype.fromElement = function (a) {
                var c = ["select2"];
                null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));
                var e = {};
                e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();
                var f = b.extend(!0, {}, e);
                f = d._convertData(f);
                for (var g in f)b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
                return this
            }, e.prototype.get = function (a) {
                return this.options[a]
            }, e.prototype.set = function (a, b) {
                this.options[a] = b
            }, e
        }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (a, b, c, d) {
            var e = function (a, c) {
                null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);
                var d = a.attr("tabindex") || 0;
                a.data("old-tabindex", d), a.attr("tabindex", "-1");
                var f = this.options.get("dataAdapter");
                this.dataAdapter = new f(a, this.options);
                var g = this.render();
                this._placeContainer(g);
                var h = this.options.get("selectionAdapter");
                this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);
                var i = this.options.get("dropdownAdapter");
                this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);
                var j = this.options.get("resultsAdapter");
                this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                var k = this;
                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (a) {
                    k.trigger("selection:update", {data: a})
                }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this)
            };
            return c.Extend(e, c.Observable), e.prototype._generateId = function (a) {
                var b = "";
                return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b
            }, e.prototype._placeContainer = function (a) {
                a.insertAfter(this.$element);
                var b = this._resolveWidth(this.$element, this.options.get("width"));
                null != b && a.css("width", b)
            }, e.prototype._resolveWidth = function (a, b) {
                var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == b) {
                    var d = this._resolveWidth(a, "style");
                    return null != d ? d : this._resolveWidth(a, "element")
                }
                if ("element" == b) {
                    var e = a.outerWidth(!1);
                    return 0 >= e ? "auto" : e + "px"
                }
                if ("style" == b) {
                    var f = a.attr("style");
                    if ("string" != typeof f)return null;
                    for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
                        var j = g[h].replace(/\s/g, ""), k = j.match(c);
                        if (null !== k && k.length >= 1)return k[1]
                    }
                    return null
                }
                return b
            }, e.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
            }, e.prototype._registerDomEvents = function () {
                var b = this;
                this.$element.on("change.select2", function () {
                    b.dataAdapter.current(function (a) {
                        b.trigger("selection:update", {data: a})
                    })
                }), this._sync = c.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
                var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != d ? (this._observer = new d(function (c) {
                    a.each(c, b._sync)
                }), this._observer.observe(this.$element[0], {
                    attributes: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", b._sync, !1)
            }, e.prototype._registerDataEvents = function () {
                var a = this;
                this.dataAdapter.on("*", function (b, c) {
                    a.trigger(b, c)
                })
            }, e.prototype._registerSelectionEvents = function () {
                var b = this, c = ["toggle", "focus"];
                this.selection.on("toggle", function () {
                    b.toggleDropdown()
                }), this.selection.on("focus", function (a) {
                    b.focus(a)
                }), this.selection.on("*", function (d, e) {
                    -1 === a.inArray(d, c) && b.trigger(d, e)
                })
            }, e.prototype._registerDropdownEvents = function () {
                var a = this;
                this.dropdown.on("*", function (b, c) {
                    a.trigger(b, c)
                })
            }, e.prototype._registerResultsEvents = function () {
                var a = this;
                this.results.on("*", function (b, c) {
                    a.trigger(b, c)
                })
            }, e.prototype._registerEvents = function () {
                var a = this;
                this.on("open", function () {
                    a.$container.addClass("select2-container--open")
                }), this.on("close", function () {
                    a.$container.removeClass("select2-container--open")
                }), this.on("enable", function () {
                    a.$container.removeClass("select2-container--disabled")
                }), this.on("disable", function () {
                    a.$container.addClass("select2-container--disabled")
                }), this.on("blur", function () {
                    a.$container.removeClass("select2-container--focus")
                }), this.on("query", function (b) {
                    a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function (c) {
                        a.trigger("results:all", {data: c, query: b})
                    })
                }), this.on("query:append", function (b) {
                    this.dataAdapter.query(b, function (c) {
                        a.trigger("results:append", {data: c, query: b})
                    })
                }), this.on("keypress", function (b) {
                    var c = b.which;
                    a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault())
                })
            }, e.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
            }, e.prototype.trigger = function (a, b) {
                var c = e.__super__.trigger,
                    d = {open: "opening", close: "closing", select: "selecting", unselect: "unselecting"};
                if (void 0 === b && (b = {}), a in d) {
                    var f = d[a], g = {prevented: !1, name: a, args: b};
                    if (c.call(this, f, g), g.prevented)return void(b.prevented = !0)
                }
                c.call(this, a, b)
            }, e.prototype.toggleDropdown = function () {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }, e.prototype.open = function () {
                this.isOpen() || this.trigger("query", {})
            }, e.prototype.close = function () {
                this.isOpen() && this.trigger("close", {})
            }, e.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open")
            }, e.prototype.hasFocus = function () {
                return this.$container.hasClass("select2-container--focus")
            }, e.prototype.focus = function (a) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
            }, e.prototype.enable = function (a) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]);
                var b = !a[0];
                this.$element.prop("disabled", b)
            }, e.prototype.data = function () {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var a = [];
                return this.dataAdapter.current(function (b) {
                    a = b
                }), a
            }, e.prototype.val = function (b) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length)return this.$element.val();
                var c = b[0];
                a.isArray(c) && (c = a.map(c, function (a) {
                    return a.toString()
                })), this.$element.val(c).trigger("change")
            }, e.prototype.destroy = function () {
                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
            }, e.prototype.render = function () {
                var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b
            }, e
        }), b.define("jquery-mousewheel", ["jquery"], function (a) {
            return a
        }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (a, b, c, d) {
            if (null == a.fn.select2) {
                var e = ["open", "close", "destroy"];
                a.fn.select2 = function (b) {
                    if (b = b || {}, "object" == typeof b)return this.each(function () {
                        var d = a.extend(!0, {}, b);
                        new c(a(this), d)
                    }), this;
                    if ("string" == typeof b) {
                        var d;
                        return this.each(function () {
                            var c = a(this).data("select2");
                            null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2.");
                            var e = Array.prototype.slice.call(arguments, 1);
                            d = c[b].apply(c, e)
                        }), a.inArray(b, e) > -1 ? this : d
                    }
                    throw new Error("Invalid arguments for Select2: " + b)
                }
            }
            return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c
        }), {define: b.define, require: b.require}
    }(), c = b.require("jquery.select2");
    return a.fn.select2.amd = b, c
});
window.pdocSearch = (function () {
  /** elasticlunr - http://weixsong.github.io * Copyright (C) 2017 Oliver Nightingale * Copyright (C) 2017 Wei Song * MIT Licensed */ !(function () {
    function e(e) {
      if (null === e || "object" != typeof e) return e;
      var t = e.constructor();
      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      return t;
    }
    var t = function (e) {
      var n = new t.Index();
      return (
        n.pipeline.add(t.trimmer, t.stopWordFilter, t.stemmer),
        e && e.call(n, n),
        n
      );
    };
    (t.version = "0.9.5"),
      (lunr = t),
      (t.utils = {}),
      (t.utils.warn = (function (e) {
        return function (t) {
          e.console && console.warn && console.warn(t);
        };
      })(this)),
      (t.utils.toString = function (e) {
        return void 0 === e || null === e ? "" : e.toString();
      }),
      (t.EventEmitter = function () {
        this.events = {};
      }),
      (t.EventEmitter.prototype.addListener = function () {
        var e = Array.prototype.slice.call(arguments),
          t = e.pop(),
          n = e;
        if ("function" != typeof t)
          throw new TypeError("last argument must be a function");
        n.forEach(function (e) {
          this.hasHandler(e) || (this.events[e] = []), this.events[e].push(t);
        }, this);
      }),
      (t.EventEmitter.prototype.removeListener = function (e, t) {
        if (this.hasHandler(e)) {
          var n = this.events[e].indexOf(t);
          -1 !== n &&
            (this.events[e].splice(n, 1),
            0 == this.events[e].length && delete this.events[e]);
        }
      }),
      (t.EventEmitter.prototype.emit = function (e) {
        if (this.hasHandler(e)) {
          var t = Array.prototype.slice.call(arguments, 1);
          this.events[e].forEach(function (e) {
            e.apply(void 0, t);
          }, this);
        }
      }),
      (t.EventEmitter.prototype.hasHandler = function (e) {
        return e in this.events;
      }),
      (t.tokenizer = function (e) {
        if (!arguments.length || null === e || void 0 === e) return [];
        if (Array.isArray(e)) {
          var n = e.filter(function (e) {
            return null === e || void 0 === e ? !1 : !0;
          });
          n = n.map(function (e) {
            return t.utils.toString(e).toLowerCase();
          });
          var i = [];
          return (
            n.forEach(function (e) {
              var n = e.split(t.tokenizer.seperator);
              i = i.concat(n);
            }, this),
            i
          );
        }
        return e.toString().trim().toLowerCase().split(t.tokenizer.seperator);
      }),
      (t.tokenizer.defaultSeperator = /[\s\-]+/),
      (t.tokenizer.seperator = t.tokenizer.defaultSeperator),
      (t.tokenizer.setSeperator = function (e) {
        null !== e &&
          void 0 !== e &&
          "object" == typeof e &&
          (t.tokenizer.seperator = e);
      }),
      (t.tokenizer.resetSeperator = function () {
        t.tokenizer.seperator = t.tokenizer.defaultSeperator;
      }),
      (t.tokenizer.getSeperator = function () {
        return t.tokenizer.seperator;
      }),
      (t.Pipeline = function () {
        this._queue = [];
      }),
      (t.Pipeline.registeredFunctions = {}),
      (t.Pipeline.registerFunction = function (e, n) {
        n in t.Pipeline.registeredFunctions &&
          t.utils.warn("Overwriting existing registered function: " + n),
          (e.label = n),
          (t.Pipeline.registeredFunctions[n] = e);
      }),
      (t.Pipeline.getRegisteredFunction = function (e) {
        return e in t.Pipeline.registeredFunctions != !0
          ? null
          : t.Pipeline.registeredFunctions[e];
      }),
      (t.Pipeline.warnIfFunctionNotRegistered = function (e) {
        var n = e.label && e.label in this.registeredFunctions;
        n ||
          t.utils.warn(
            "Function is not registered with pipeline. This may cause problems when serialising the index.\n",
            e
          );
      }),
      (t.Pipeline.load = function (e) {
        var n = new t.Pipeline();
        return (
          e.forEach(function (e) {
            var i = t.Pipeline.getRegisteredFunction(e);
            if (!i) throw new Error("Cannot load un-registered function: " + e);
            n.add(i);
          }),
          n
        );
      }),
      (t.Pipeline.prototype.add = function () {
        var e = Array.prototype.slice.call(arguments);
        e.forEach(function (e) {
          t.Pipeline.warnIfFunctionNotRegistered(e), this._queue.push(e);
        }, this);
      }),
      (t.Pipeline.prototype.after = function (e, n) {
        t.Pipeline.warnIfFunctionNotRegistered(n);
        var i = this._queue.indexOf(e);
        if (-1 === i) throw new Error("Cannot find existingFn");
        this._queue.splice(i + 1, 0, n);
      }),
      (t.Pipeline.prototype.before = function (e, n) {
        t.Pipeline.warnIfFunctionNotRegistered(n);
        var i = this._queue.indexOf(e);
        if (-1 === i) throw new Error("Cannot find existingFn");
        this._queue.splice(i, 0, n);
      }),
      (t.Pipeline.prototype.remove = function (e) {
        var t = this._queue.indexOf(e);
        -1 !== t && this._queue.splice(t, 1);
      }),
      (t.Pipeline.prototype.run = function (e) {
        for (
          var t = [], n = e.length, i = this._queue.length, o = 0;
          n > o;
          o++
        ) {
          for (
            var r = e[o], s = 0;
            i > s &&
            ((r = this._queue[s](r, o, e)), void 0 !== r && null !== r);
            s++
          );
          void 0 !== r && null !== r && t.push(r);
        }
        return t;
      }),
      (t.Pipeline.prototype.reset = function () {
        this._queue = [];
      }),
      (t.Pipeline.prototype.get = function () {
        return this._queue;
      }),
      (t.Pipeline.prototype.toJSON = function () {
        return this._queue.map(function (e) {
          return t.Pipeline.warnIfFunctionNotRegistered(e), e.label;
        });
      }),
      (t.Index = function () {
        (this._fields = []),
          (this._ref = "id"),
          (this.pipeline = new t.Pipeline()),
          (this.documentStore = new t.DocumentStore()),
          (this.index = {}),
          (this.eventEmitter = new t.EventEmitter()),
          (this._idfCache = {}),
          this.on(
            "add",
            "remove",
            "update",
            function () {
              this._idfCache = {};
            }.bind(this)
          );
      }),
      (t.Index.prototype.on = function () {
        var e = Array.prototype.slice.call(arguments);
        return this.eventEmitter.addListener.apply(this.eventEmitter, e);
      }),
      (t.Index.prototype.off = function (e, t) {
        return this.eventEmitter.removeListener(e, t);
      }),
      (t.Index.load = function (e) {
        e.version !== t.version &&
          t.utils.warn(
            "version mismatch: current " + t.version + " importing " + e.version
          );
        var n = new this();
        (n._fields = e.fields),
          (n._ref = e.ref),
          (n.documentStore = t.DocumentStore.load(e.documentStore)),
          (n.pipeline = t.Pipeline.load(e.pipeline)),
          (n.index = {});
        for (var i in e.index) n.index[i] = t.InvertedIndex.load(e.index[i]);
        return n;
      }),
      (t.Index.prototype.addField = function (e) {
        return (
          this._fields.push(e), (this.index[e] = new t.InvertedIndex()), this
        );
      }),
      (t.Index.prototype.setRef = function (e) {
        return (this._ref = e), this;
      }),
      (t.Index.prototype.saveDocument = function (e) {
        return (this.documentStore = new t.DocumentStore(e)), this;
      }),
      (t.Index.prototype.addDoc = function (e, n) {
        if (e) {
          var n = void 0 === n ? !0 : n,
            i = e[this._ref];
          this.documentStore.addDoc(i, e),
            this._fields.forEach(function (n) {
              var o = this.pipeline.run(t.tokenizer(e[n]));
              this.documentStore.addFieldLength(i, n, o.length);
              var r = {};
              o.forEach(function (e) {
                e in r ? (r[e] += 1) : (r[e] = 1);
              }, this);
              for (var s in r) {
                var u = r[s];
                (u = Math.sqrt(u)),
                  this.index[n].addToken(s, { ref: i, tf: u });
              }
            }, this),
            n && this.eventEmitter.emit("add", e, this);
        }
      }),
      (t.Index.prototype.removeDocByRef = function (e) {
        if (
          e &&
          this.documentStore.isDocStored() !== !1 &&
          this.documentStore.hasDoc(e)
        ) {
          var t = this.documentStore.getDoc(e);
          this.removeDoc(t, !1);
        }
      }),
      (t.Index.prototype.removeDoc = function (e, n) {
        if (e) {
          var n = void 0 === n ? !0 : n,
            i = e[this._ref];
          this.documentStore.hasDoc(i) &&
            (this.documentStore.removeDoc(i),
            this._fields.forEach(function (n) {
              var o = this.pipeline.run(t.tokenizer(e[n]));
              o.forEach(function (e) {
                this.index[n].removeToken(e, i);
              }, this);
            }, this),
            n && this.eventEmitter.emit("remove", e, this));
        }
      }),
      (t.Index.prototype.updateDoc = function (e, t) {
        var t = void 0 === t ? !0 : t;
        this.removeDocByRef(e[this._ref], !1),
          this.addDoc(e, !1),
          t && this.eventEmitter.emit("update", e, this);
      }),
      (t.Index.prototype.idf = function (e, t) {
        var n = "@" + t + "/" + e;
        if (Object.prototype.hasOwnProperty.call(this._idfCache, n))
          return this._idfCache[n];
        var i = this.index[t].getDocFreq(e),
          o = 1 + Math.log(this.documentStore.length / (i + 1));
        return (this._idfCache[n] = o), o;
      }),
      (t.Index.prototype.getFields = function () {
        return this._fields.slice();
      }),
      (t.Index.prototype.search = function (e, n) {
        if (!e) return [];
        e = "string" == typeof e ? { any: e } : JSON.parse(JSON.stringify(e));
        var i = null;
        null != n && (i = JSON.stringify(n));
        for (
          var o = new t.Configuration(i, this.getFields()).get(),
            r = {},
            s = Object.keys(e),
            u = 0;
          u < s.length;
          u++
        ) {
          var a = s[u];
          r[a] = this.pipeline.run(t.tokenizer(e[a]));
        }
        var l = {};
        for (var c in o) {
          var d = r[c] || r.any;
          if (d) {
            var f = this.fieldSearch(d, c, o),
              h = o[c].boost;
            for (var p in f) f[p] = f[p] * h;
            for (var p in f) p in l ? (l[p] += f[p]) : (l[p] = f[p]);
          }
        }
        var v,
          g = [];
        for (var p in l)
          (v = { ref: p, score: l[p] }),
            this.documentStore.hasDoc(p) &&
              (v.doc = this.documentStore.getDoc(p)),
            g.push(v);
        return (
          g.sort(function (e, t) {
            return t.score - e.score;
          }),
          g
        );
      }),
      (t.Index.prototype.fieldSearch = function (e, t, n) {
        var i = n[t].bool,
          o = n[t].expand,
          r = n[t].boost,
          s = null,
          u = {};
        return 0 !== r
          ? (e.forEach(function (e) {
              var n = [e];
              1 == o && (n = this.index[t].expandToken(e));
              var r = {};
              n.forEach(function (n) {
                var o = this.index[t].getDocs(n),
                  a = this.idf(n, t);
                if (s && "AND" == i) {
                  var l = {};
                  for (var c in s) c in o && (l[c] = o[c]);
                  o = l;
                }
                n == e && this.fieldSearchStats(u, n, o);
                for (var c in o) {
                  var d = this.index[t].getTermFrequency(n, c),
                    f = this.documentStore.getFieldLength(c, t),
                    h = 1;
                  0 != f && (h = 1 / Math.sqrt(f));
                  var p = 1;
                  n != e && (p = 0.15 * (1 - (n.length - e.length) / n.length));
                  var v = d * a * h * p;
                  c in r ? (r[c] += v) : (r[c] = v);
                }
              }, this),
                (s = this.mergeScores(s, r, i));
            }, this),
            (s = this.coordNorm(s, u, e.length)))
          : void 0;
      }),
      (t.Index.prototype.mergeScores = function (e, t, n) {
        if (!e) return t;
        if ("AND" == n) {
          var i = {};
          for (var o in t) o in e && (i[o] = e[o] + t[o]);
          return i;
        }
        for (var o in t) o in e ? (e[o] += t[o]) : (e[o] = t[o]);
        return e;
      }),
      (t.Index.prototype.fieldSearchStats = function (e, t, n) {
        for (var i in n) i in e ? e[i].push(t) : (e[i] = [t]);
      }),
      (t.Index.prototype.coordNorm = function (e, t, n) {
        for (var i in e)
          if (i in t) {
            var o = t[i].length;
            e[i] = (e[i] * o) / n;
          }
        return e;
      }),
      (t.Index.prototype.toJSON = function () {
        var e = {};
        return (
          this._fields.forEach(function (t) {
            e[t] = this.index[t].toJSON();
          }, this),
          {
            version: t.version,
            fields: this._fields,
            ref: this._ref,
            documentStore: this.documentStore.toJSON(),
            index: e,
            pipeline: this.pipeline.toJSON(),
          }
        );
      }),
      (t.Index.prototype.use = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        t.unshift(this), e.apply(this, t);
      }),
      (t.DocumentStore = function (e) {
        (this._save = null === e || void 0 === e ? !0 : e),
          (this.docs = {}),
          (this.docInfo = {}),
          (this.length = 0);
      }),
      (t.DocumentStore.load = function (e) {
        var t = new this();
        return (
          (t.length = e.length),
          (t.docs = e.docs),
          (t.docInfo = e.docInfo),
          (t._save = e.save),
          t
        );
      }),
      (t.DocumentStore.prototype.isDocStored = function () {
        return this._save;
      }),
      (t.DocumentStore.prototype.addDoc = function (t, n) {
        this.hasDoc(t) || this.length++,
          (this.docs[t] = this._save === !0 ? e(n) : null);
      }),
      (t.DocumentStore.prototype.getDoc = function (e) {
        return this.hasDoc(e) === !1 ? null : this.docs[e];
      }),
      (t.DocumentStore.prototype.hasDoc = function (e) {
        return e in this.docs;
      }),
      (t.DocumentStore.prototype.removeDoc = function (e) {
        this.hasDoc(e) &&
          (delete this.docs[e], delete this.docInfo[e], this.length--);
      }),
      (t.DocumentStore.prototype.addFieldLength = function (e, t, n) {
        null !== e &&
          void 0 !== e &&
          0 != this.hasDoc(e) &&
          (this.docInfo[e] || (this.docInfo[e] = {}), (this.docInfo[e][t] = n));
      }),
      (t.DocumentStore.prototype.updateFieldLength = function (e, t, n) {
        null !== e &&
          void 0 !== e &&
          0 != this.hasDoc(e) &&
          this.addFieldLength(e, t, n);
      }),
      (t.DocumentStore.prototype.getFieldLength = function (e, t) {
        return null === e || void 0 === e
          ? 0
          : e in this.docs && t in this.docInfo[e]
          ? this.docInfo[e][t]
          : 0;
      }),
      (t.DocumentStore.prototype.toJSON = function () {
        return {
          docs: this.docs,
          docInfo: this.docInfo,
          length: this.length,
          save: this._save,
        };
      }),
      (t.stemmer = (function () {
        var e = {
            ational: "ate",
            tional: "tion",
            enci: "ence",
            anci: "ance",
            izer: "ize",
            bli: "ble",
            alli: "al",
            entli: "ent",
            eli: "e",
            ousli: "ous",
            ization: "ize",
            ation: "ate",
            ator: "ate",
            alism: "al",
            iveness: "ive",
            fulness: "ful",
            ousness: "ous",
            aliti: "al",
            iviti: "ive",
            biliti: "ble",
            logi: "log",
          },
          t = {
            icate: "ic",
            ative: "",
            alize: "al",
            iciti: "ic",
            ical: "ic",
            ful: "",
            ness: "",
          },
          n = "[^aeiou]",
          i = "[aeiouy]",
          o = n + "[^aeiouy]*",
          r = i + "[aeiou]*",
          s = "^(" + o + ")?" + r + o,
          u = "^(" + o + ")?" + r + o + "(" + r + ")?$",
          a = "^(" + o + ")?" + r + o + r + o,
          l = "^(" + o + ")?" + i,
          c = new RegExp(s),
          d = new RegExp(a),
          f = new RegExp(u),
          h = new RegExp(l),
          p = /^(.+?)(ss|i)es$/,
          v = /^(.+?)([^s])s$/,
          g = /^(.+?)eed$/,
          m = /^(.+?)(ed|ing)$/,
          y = /.$/,
          S = /(at|bl|iz)$/,
          x = new RegExp("([^aeiouylsz])\\1$"),
          w = new RegExp("^" + o + i + "[^aeiouwxy]$"),
          I = /^(.+?[^aeiou])y$/,
          b =
            /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
          E = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
          D =
            /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,
          F = /^(.+?)(s|t)(ion)$/,
          _ = /^(.+?)e$/,
          P = /ll$/,
          k = new RegExp("^" + o + i + "[^aeiouwxy]$"),
          z = function (n) {
            var i, o, r, s, u, a, l;
            if (n.length < 3) return n;
            if (
              ((r = n.substr(0, 1)),
              "y" == r && (n = r.toUpperCase() + n.substr(1)),
              (s = p),
              (u = v),
              s.test(n)
                ? (n = n.replace(s, "$1$2"))
                : u.test(n) && (n = n.replace(u, "$1$2")),
              (s = g),
              (u = m),
              s.test(n))
            ) {
              var z = s.exec(n);
              (s = c), s.test(z[1]) && ((s = y), (n = n.replace(s, "")));
            } else if (u.test(n)) {
              var z = u.exec(n);
              (i = z[1]),
                (u = h),
                u.test(i) &&
                  ((n = i),
                  (u = S),
                  (a = x),
                  (l = w),
                  u.test(n)
                    ? (n += "e")
                    : a.test(n)
                    ? ((s = y), (n = n.replace(s, "")))
                    : l.test(n) && (n += "e"));
            }
            if (((s = I), s.test(n))) {
              var z = s.exec(n);
              (i = z[1]), (n = i + "i");
            }
            if (((s = b), s.test(n))) {
              var z = s.exec(n);
              (i = z[1]), (o = z[2]), (s = c), s.test(i) && (n = i + e[o]);
            }
            if (((s = E), s.test(n))) {
              var z = s.exec(n);
              (i = z[1]), (o = z[2]), (s = c), s.test(i) && (n = i + t[o]);
            }
            if (((s = D), (u = F), s.test(n))) {
              var z = s.exec(n);
              (i = z[1]), (s = d), s.test(i) && (n = i);
            } else if (u.test(n)) {
              var z = u.exec(n);
              (i = z[1] + z[2]), (u = d), u.test(i) && (n = i);
            }
            if (((s = _), s.test(n))) {
              var z = s.exec(n);
              (i = z[1]),
                (s = d),
                (u = f),
                (a = k),
                (s.test(i) || (u.test(i) && !a.test(i))) && (n = i);
            }
            return (
              (s = P),
              (u = d),
              s.test(n) && u.test(n) && ((s = y), (n = n.replace(s, ""))),
              "y" == r && (n = r.toLowerCase() + n.substr(1)),
              n
            );
          };
        return z;
      })()),
      t.Pipeline.registerFunction(t.stemmer, "stemmer"),
      (t.stopWordFilter = function (e) {
        return e && t.stopWordFilter.stopWords[e] !== !0 ? e : void 0;
      }),
      (t.clearStopWords = function () {
        t.stopWordFilter.stopWords = {};
      }),
      (t.addStopWords = function (e) {
        null != e &&
          Array.isArray(e) !== !1 &&
          e.forEach(function (e) {
            t.stopWordFilter.stopWords[e] = !0;
          }, this);
      }),
      (t.resetStopWords = function () {
        t.stopWordFilter.stopWords = t.defaultStopWords;
      }),
      (t.defaultStopWords = {
        "": !0,
        a: !0,
        able: !0,
        about: !0,
        across: !0,
        after: !0,
        all: !0,
        almost: !0,
        also: !0,
        am: !0,
        among: !0,
        an: !0,
        and: !0,
        any: !0,
        are: !0,
        as: !0,
        at: !0,
        be: !0,
        because: !0,
        been: !0,
        but: !0,
        by: !0,
        can: !0,
        cannot: !0,
        could: !0,
        dear: !0,
        did: !0,
        do: !0,
        does: !0,
        either: !0,
        else: !0,
        ever: !0,
        every: !0,
        for: !0,
        from: !0,
        get: !0,
        got: !0,
        had: !0,
        has: !0,
        have: !0,
        he: !0,
        her: !0,
        hers: !0,
        him: !0,
        his: !0,
        how: !0,
        however: !0,
        i: !0,
        if: !0,
        in: !0,
        into: !0,
        is: !0,
        it: !0,
        its: !0,
        just: !0,
        least: !0,
        let: !0,
        like: !0,
        likely: !0,
        may: !0,
        me: !0,
        might: !0,
        most: !0,
        must: !0,
        my: !0,
        neither: !0,
        no: !0,
        nor: !0,
        not: !0,
        of: !0,
        off: !0,
        often: !0,
        on: !0,
        only: !0,
        or: !0,
        other: !0,
        our: !0,
        own: !0,
        rather: !0,
        said: !0,
        say: !0,
        says: !0,
        she: !0,
        should: !0,
        since: !0,
        so: !0,
        some: !0,
        than: !0,
        that: !0,
        the: !0,
        their: !0,
        them: !0,
        then: !0,
        there: !0,
        these: !0,
        they: !0,
        this: !0,
        tis: !0,
        to: !0,
        too: !0,
        twas: !0,
        us: !0,
        wants: !0,
        was: !0,
        we: !0,
        were: !0,
        what: !0,
        when: !0,
        where: !0,
        which: !0,
        while: !0,
        who: !0,
        whom: !0,
        why: !0,
        will: !0,
        with: !0,
        would: !0,
        yet: !0,
        you: !0,
        your: !0,
      }),
      (t.stopWordFilter.stopWords = t.defaultStopWords),
      t.Pipeline.registerFunction(t.stopWordFilter, "stopWordFilter"),
      (t.trimmer = function (e) {
        if (null === e || void 0 === e)
          throw new Error("token should not be undefined");
        return e.replace(/^\W+/, "").replace(/\W+$/, "");
      }),
      t.Pipeline.registerFunction(t.trimmer, "trimmer"),
      (t.InvertedIndex = function () {
        this.root = { docs: {}, df: 0 };
      }),
      (t.InvertedIndex.load = function (e) {
        var t = new this();
        return (t.root = e.root), t;
      }),
      (t.InvertedIndex.prototype.addToken = function (e, t, n) {
        for (var n = n || this.root, i = 0; i <= e.length - 1; ) {
          var o = e[i];
          o in n || (n[o] = { docs: {}, df: 0 }), (i += 1), (n = n[o]);
        }
        var r = t.ref;
        n.docs[r]
          ? (n.docs[r] = { tf: t.tf })
          : ((n.docs[r] = { tf: t.tf }), (n.df += 1));
      }),
      (t.InvertedIndex.prototype.hasToken = function (e) {
        if (!e) return !1;
        for (var t = this.root, n = 0; n < e.length; n++) {
          if (!t[e[n]]) return !1;
          t = t[e[n]];
        }
        return !0;
      }),
      (t.InvertedIndex.prototype.getNode = function (e) {
        if (!e) return null;
        for (var t = this.root, n = 0; n < e.length; n++) {
          if (!t[e[n]]) return null;
          t = t[e[n]];
        }
        return t;
      }),
      (t.InvertedIndex.prototype.getDocs = function (e) {
        var t = this.getNode(e);
        return null == t ? {} : t.docs;
      }),
      (t.InvertedIndex.prototype.getTermFrequency = function (e, t) {
        var n = this.getNode(e);
        return null == n ? 0 : t in n.docs ? n.docs[t].tf : 0;
      }),
      (t.InvertedIndex.prototype.getDocFreq = function (e) {
        var t = this.getNode(e);
        return null == t ? 0 : t.df;
      }),
      (t.InvertedIndex.prototype.removeToken = function (e, t) {
        if (e) {
          var n = this.getNode(e);
          null != n && t in n.docs && (delete n.docs[t], (n.df -= 1));
        }
      }),
      (t.InvertedIndex.prototype.expandToken = function (e, t, n) {
        if (null == e || "" == e) return [];
        var t = t || [];
        if (void 0 == n && ((n = this.getNode(e)), null == n)) return t;
        n.df > 0 && t.push(e);
        for (var i in n)
          "docs" !== i && "df" !== i && this.expandToken(e + i, t, n[i]);
        return t;
      }),
      (t.InvertedIndex.prototype.toJSON = function () {
        return { root: this.root };
      }),
      (t.Configuration = function (e, n) {
        var e = e || "";
        if (void 0 == n || null == n)
          throw new Error("fields should not be null");
        this.config = {};
        var i;
        try {
          (i = JSON.parse(e)), this.buildUserConfig(i, n);
        } catch (o) {
          t.utils.warn(
            "user configuration parse failed, will use default configuration"
          ),
            this.buildDefaultConfig(n);
        }
      }),
      (t.Configuration.prototype.buildDefaultConfig = function (e) {
        this.reset(),
          e.forEach(function (e) {
            this.config[e] = { boost: 1, bool: "OR", expand: !1 };
          }, this);
      }),
      (t.Configuration.prototype.buildUserConfig = function (e, n) {
        var i = "OR",
          o = !1;
        if (
          (this.reset(),
          "bool" in e && (i = e.bool || i),
          "expand" in e && (o = e.expand || o),
          "fields" in e)
        )
          for (var r in e.fields)
            if (n.indexOf(r) > -1) {
              var s = e.fields[r],
                u = o;
              void 0 != s.expand && (u = s.expand),
                (this.config[r] = {
                  boost: s.boost || 0 === s.boost ? s.boost : 1,
                  bool: s.bool || i,
                  expand: u,
                });
            } else
              t.utils.warn(
                "field name in user configuration not found in index instance fields"
              );
        else this.addAllFields2UserConfig(i, o, n);
      }),
      (t.Configuration.prototype.addAllFields2UserConfig = function (e, t, n) {
        n.forEach(function (n) {
          this.config[n] = { boost: 1, bool: e, expand: t };
        }, this);
      }),
      (t.Configuration.prototype.get = function () {
        return this.config;
      }),
      (t.Configuration.prototype.reset = function () {
        this.config = {};
      }),
      (lunr.SortedSet = function () {
        (this.length = 0), (this.elements = []);
      }),
      (lunr.SortedSet.load = function (e) {
        var t = new this();
        return (t.elements = e), (t.length = e.length), t;
      }),
      (lunr.SortedSet.prototype.add = function () {
        var e, t;
        for (e = 0; e < arguments.length; e++)
          (t = arguments[e]),
            ~this.indexOf(t) || this.elements.splice(this.locationFor(t), 0, t);
        this.length = this.elements.length;
      }),
      (lunr.SortedSet.prototype.toArray = function () {
        return this.elements.slice();
      }),
      (lunr.SortedSet.prototype.map = function (e, t) {
        return this.elements.map(e, t);
      }),
      (lunr.SortedSet.prototype.forEach = function (e, t) {
        return this.elements.forEach(e, t);
      }),
      (lunr.SortedSet.prototype.indexOf = function (e) {
        for (
          var t = 0,
            n = this.elements.length,
            i = n - t,
            o = t + Math.floor(i / 2),
            r = this.elements[o];
          i > 1;

        ) {
          if (r === e) return o;
          e > r && (t = o),
            r > e && (n = o),
            (i = n - t),
            (o = t + Math.floor(i / 2)),
            (r = this.elements[o]);
        }
        return r === e ? o : -1;
      }),
      (lunr.SortedSet.prototype.locationFor = function (e) {
        for (
          var t = 0,
            n = this.elements.length,
            i = n - t,
            o = t + Math.floor(i / 2),
            r = this.elements[o];
          i > 1;

        )
          e > r && (t = o),
            r > e && (n = o),
            (i = n - t),
            (o = t + Math.floor(i / 2)),
            (r = this.elements[o]);
        return r > e ? o : e > r ? o + 1 : void 0;
      }),
      (lunr.SortedSet.prototype.intersect = function (e) {
        for (
          var t = new lunr.SortedSet(),
            n = 0,
            i = 0,
            o = this.length,
            r = e.length,
            s = this.elements,
            u = e.elements;
          ;

        ) {
          if (n > o - 1 || i > r - 1) break;
          s[n] !== u[i]
            ? s[n] < u[i]
              ? n++
              : s[n] > u[i] && i++
            : (t.add(s[n]), n++, i++);
        }
        return t;
      }),
      (lunr.SortedSet.prototype.clone = function () {
        var e = new lunr.SortedSet();
        return (e.elements = this.toArray()), (e.length = e.elements.length), e;
      }),
      (lunr.SortedSet.prototype.union = function (e) {
        var t, n, i;
        this.length >= e.length ? ((t = this), (n = e)) : ((t = e), (n = this)),
          (i = t.clone());
        for (var o = 0, r = n.toArray(); o < r.length; o++) i.add(r[o]);
        return i;
      }),
      (lunr.SortedSet.prototype.toJSON = function () {
        return this.toArray();
      }),
      (function (e, t) {
        "function" == typeof define && define.amd
          ? define(t)
          : "object" == typeof exports
          ? (module.exports = t())
          : (e.elasticlunr = t());
      })(this, function () {
        return t;
      });
  })();
  /** pdoc search index */ const docs = [
    {
      fullname: "maritalk",
      modulename: "maritalk",
      kind: "module",
      doc: '<h3 id="conteudo">Conte\u00fado</h3>\n\n<p><strong>MariTalk API</strong></p>\n\n<ul>\n<li><a href="#introdu\u00e7\u00e3o">Introdu\u00e7\u00e3o</a>  </li>\n<li><a href="#instala\u00e7\u00e3o">Instala\u00e7\u00e3o</a>  </li>\n<li><a href="#exemplo-de-uso">Exemplo de uso</a></li>\n<li><a href="https://github.com/maritaca-ai/maritalk-api/blob/main/examples/api/maritalk_via_requisi\u00e7\u00f5es_https.ipynb">Exemplo de uso via requisi\u00e7\u00f5es HTTP - Python</a></li>\n<li><a href="https://github.com/maritaca-ai/maritalk-api/blob/main/examples/api/maritalk_via_requisi\u00e7\u00f5es_https.js">Exemplo de uso via requisi\u00e7\u00f5es HTTP - JavaScript</a></li>\n<li><a href="https://github.com/langchain-ai/langchain/blob/master/docs/docs/integrations/chat/maritalk.ipynb">Exemplo MariTalk + RAG com LangChain</a></li>\n<li><a href="https://github.com/run-llama/llama_index/blob/main/docs/examples/llm/maritalk.ipynb">Exemplo Maritalk no LlamaIndex</a></li>\n<li><a href="https://chat.maritaca.ai/docs">Documenta\u00e7\u00e3o Swagger</a></li>\n</ul>\n\n<p><strong>MariTalk Local</strong></p>\n\n<ul>\n<li><a href="#modo-local">Executando localmente</a></li>\n<li><a href="https://github.com/maritaca-ai/maritalk-api/blob/main/examples/local/colab-pro.ipynb">Exemplo Google Colab Pro</a></li>\n<li><a href="https://github.com/maritaca-ai/maritalk-api/blob/main/examples/local/oracle-cloud.md">Em GPUs da Oracle Cloud (OCI)</a></li>\n<li><a href="https://github.com/maritaca-ai/maritalk-api/blob/main/examples/local/google-cloud.md">Em GPUs da Google Cloud (GCP)</a></li>\n</ul>\n\n<p><a href="#web-chat">Chat (gratuito)</a></p>\n\n<h1 id="introducao">Introdu\u00e7\u00e3o</h1>\n\n<p>Este reposit\u00f3rio cont\u00e9m o c\u00f3digo e a documenta\u00e7\u00e3o explicando como usar a API da MariTalk e a vers\u00e3o local para deploy on-premises.\nA MariTalk \u00e9 uma assistente baseada em um modelo de linguagem que foi especialmente treinado para entender bem o portugu\u00eas.\nEla \u00e9 capaz de seguir instru\u00e7\u00f5es de maneira zero-shot, assim como o ChatGPT.</p>\n\n<p>Este \u00e9 um servi\u00e7o pago que requer a valida\u00e7\u00e3o de um meio de pagamento, como um cart\u00e3o de cr\u00e9dito. Para validar, acesse <a href="https://chat.maritaca.ai/">chat.maritaca.ai</a> -> "Meu Plano" -> "Validar forma de pagamento".</p>\n\n<p>A cobran\u00e7a \u00e9 feita por tokens, sendo o mesmo valor cobrado por tokens de entrada (i.e., prompt) e sa\u00edda (i.e., gerados pelo modelo).</p>\n\n<p>Novos assinantes recebem R$20 em cr\u00e9ditos da API.</p>\n\n<h1 id="instalacao">Instala\u00e7\u00e3o</h1>\n\n<p>Instale a biblioteca da MariTalk usando pip:</p>\n\n<div class="pdoc-code codehilite">\n<pre><span></span><code>pip<span class="w"> </span>install<span class="w"> </span>maritalk\n</code></pre>\n</div>\n\n<h1 id="exemplo-de-uso">Exemplo de Uso</h1>\n\n<p>Mostramos abaixo um exemplo simples de uso em Python. Na <a href="https://github.com/maritaca-ai/maritalk-api/tree/main/examples/api">pasta exemplos</a> existem mais c\u00f3digos mostrando como chamar a API.</p>\n\n<p>Primeiramente, voc\u00ea precisa de uma chave da API, que pode ser obtida em <a href="https://chat.maritaca.ai/">chat.maritaca.ai</a> -> "Chaves da API" -> "Crie uma chave".</p>\n\n<div class="pdoc-code codehilite">\n<pre><span></span><code><span class="kn">import</span> <span class="nn">maritalk</span>\n\n<span class="n">model</span> <span class="o">=</span> <span class="n">maritalk</span><span class="o">.</span><span class="n">MariTalk</span><span class="p">(</span>\n    <span class="n">key</span><span class="o">=</span><span class="s2">&quot;insira sua chave aqui. Ex: &#39;100088...&#39;&quot;</span><span class="p">,</span>\n    <span class="n">model</span><span class="o">=</span><span class="s2">&quot;maritalk&quot;</span>  <span class="c1"># No momento, &quot;maritalk&quot; aponta para &quot;maritalk-large-2024-01-08&quot;</span>\n<span class="p">)</span>\n\n<span class="n">response</span> <span class="o">=</span> <span class="n">model</span><span class="o">.</span><span class="n">generate</span><span class="p">(</span><span class="s2">&quot;Quanto \u00e9 25 + 27?&quot;</span><span class="p">)</span>\n<span class="n">answer</span> <span class="o">=</span> <span class="n">response</span><span class="p">[</span><span class="s2">&quot;answer&quot;</span><span class="p">]</span>\n\n<span class="nb">print</span><span class="p">(</span><span class="sa">f</span><span class="s2">&quot;Resposta: </span><span class="si">{</span><span class="n">answer</span><span class="si">}</span><span class="s2">&quot;</span><span class="p">)</span>   <span class="c1"># Deve imprimir algo como &quot;25 + 27 \u00e9 igual a 52.&quot;</span>\n</code></pre>\n</div>\n\n<p>Atualmente apenas suportamos o modelo "maritalk-large-2024-01-08". Mais modelos ser\u00e3o suportados em breve.</p>\n\n<p>Note que o dicion\u00e1rio <code>response</code> cont\u00e9m a chave <code>usage</code>, que informa a quantidade de tokens de entrada e sa\u00edda que ser\u00e3o cobrados.</p>\n\n<h2 id="modo-chat">Modo chat</h2>\n\n<p>Voc\u00ea pode definir uma conversa especificando uma lista de dicion\u00e1rios, sendo que cada dicion\u00e1rio precisar ter duas chaves: <code>content</code> e <code>role</code>.</p>\n\n<p>Atualmente, a API da MariTalk suporta dois valores para <code>role</code>: "user" para mensagens do usu\u00e1rio, e "assistant" para mensagens do assistente.</p>\n\n<p>Mostramos um exemplo de conversa abaixo:</p>\n\n<div class="pdoc-code codehilite">\n<pre><span></span><code><span class="nv">messages</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="o">[</span>\n<span class="w">    </span><span class="o">{</span><span class="s2">&quot;role&quot;</span>:<span class="w"> </span><span class="s2">&quot;user&quot;</span>,<span class="w"> </span><span class="s2">&quot;content&quot;</span>:<span class="w"> </span><span class="s2">&quot;sugira tr\u00eas nomes para a minha cachorra&quot;</span><span class="o">}</span>,\n<span class="w">    </span><span class="o">{</span><span class="s2">&quot;role&quot;</span>:<span class="w"> </span><span class="s2">&quot;assistant&quot;</span>,<span class="w"> </span><span class="s2">&quot;content&quot;</span>:<span class="w"> </span><span class="s2">&quot;nina, bela e luna.&quot;</span><span class="o">}</span>,\n<span class="w">    </span><span class="o">{</span><span class="s2">&quot;role&quot;</span>:<span class="w"> </span><span class="s2">&quot;user&quot;</span>,<span class="w"> </span><span class="s2">&quot;content&quot;</span>:<span class="w"> </span><span class="s2">&quot;e para o meu peixe?&quot;</span><span class="o">}</span>,\n<span class="o">]</span>\n\n<span class="nv">answer</span><span class="w"> </span><span class="o">=</span><span class="w"> </span>model.generate<span class="o">(</span>\n<span class="w">    </span>messages,\n<span class="w">    </span><span class="nv">do_sample</span><span class="o">=</span>True,\n<span class="w">    </span><span class="nv">max_tokens</span><span class="o">=</span><span class="m">200</span>,\n<span class="w">    </span><span class="nv">temperature</span><span class="o">=</span><span class="m">0</span>.7,\n<span class="w">    </span><span class="nv">top_p</span><span class="o">=</span><span class="m">0</span>.95<span class="o">)[</span><span class="s2">&quot;answer&quot;</span><span class="o">]</span>\n\nprint<span class="o">(</span>f<span class="s2">&quot;Resposta: {answer}&quot;</span><span class="o">)</span><span class="w">   </span><span class="c1"># Deve imprimir algo como &quot;nemo, dory e neptuno.&quot;</span>\n</code></pre>\n</div>\n\n<h2 id="exemplos-few-shot">Exemplos few-shot</h2>\n\n<p>Embora a MariTalk seja capaz de responder a instru\u00e7\u00f5es sem nenhum exemplo de demonstra\u00e7\u00e3o, fornecer alguns exemplos da tarefa pode melhorar significativamente a qualidade de suas respostas.</p>\n\n<p>Abaixo mostramos como isso \u00e9 feito para uma tarefa simples de an\u00e1lise de sentimento, i.e., classificar se uma resenha de filme \u00e9 positiva ou negativa.\nNeste caso, passaremos dois exemplos few-shot, um positivo e outro negativo, e um terceiro exemplo, para o qual a MariTalk efetivamente far\u00e1 a predi\u00e7\u00e3o.</p>\n\n<div class="pdoc-code codehilite">\n<pre><span></span><code><span class="n">prompt</span> <span class="o">=</span> <span class="s2">&quot;&quot;&quot;Classifique a resenha de filme como &quot;positiva&quot; ou &quot;negativa&quot;.</span>\n\n<span class="s2">Resenha: Gostei muito do filme, \u00e9 o melhor do ano!</span>\n<span class="s2">Classe: positiva</span>\n\n<span class="s2">Resenha: O filme deixa muito a desejar.</span>\n<span class="s2">Classe: negativa</span>\n\n<span class="s2">Resenha: Apesar de longo, valeu o ingresso..</span>\n<span class="s2">Classe:&quot;&quot;&quot;</span>\n\n<span class="n">answer</span> <span class="o">=</span> <span class="n">model</span><span class="o">.</span><span class="n">generate</span><span class="p">(</span>\n    <span class="n">prompt</span><span class="p">,</span>\n    <span class="n">chat_mode</span><span class="o">=</span><span class="kc">False</span><span class="p">,</span>\n    <span class="n">do_sample</span><span class="o">=</span><span class="kc">False</span><span class="p">,</span>\n    <span class="n">max_tokens</span><span class="o">=</span><span class="mi">20</span><span class="p">,</span>\n    <span class="n">stopping_tokens</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;</span><span class="se">\\n</span><span class="s2">&quot;</span><span class="p">]</span>\n<span class="p">)[</span><span class="s2">&quot;answer&quot;</span><span class="p">]</span>\n\n<span class="nb">print</span><span class="p">(</span><span class="sa">f</span><span class="s2">&quot;Resposta: </span><span class="si">{</span><span class="n">answer</span><span class="o">.</span><span class="n">strip</span><span class="p">()</span><span class="si">}</span><span class="s2">&quot;</span><span class="p">)</span>  <span class="c1"># Deve imprimir &quot;positiva&quot;</span>\n</code></pre>\n</div>\n\n<p>Note que usamos <code>chat_mode=False</code>, pois melhora a qualidade das respostas quando usando exemplos few-shot.</p>\n\n<p>O argumento <code>stopping_tokens=["\\n"]</code> \u00e9 usado para interromper a gera\u00e7\u00e3o quando o token "\\n" \u00e9 gerado. Isso \u00e9 necess\u00e1rio porque, quando n\u00e3o estamos no modo chat, o modelo pode n\u00e3o saber quando interromper a gera\u00e7\u00e3o.</p>\n\n<p>Para tarefas com apenas uma resposta correta, como no exemplo acima, \u00e9 recomendado usar <code>do_sample=False</code>. Isso garante que a mesma resposta seja gerada dado um prompt espec\u00edfico.</p>\n\n<p>Para tarefas de gera\u00e7\u00e3o de textos diversos ou longos, \u00e9 recomendado usar <code>do_sample=True</code> e <code>temperature=0.7</code>. Quanto maior a temperatura, mais diversos ser\u00e3o os textos gerados, mas h\u00e1 maior chance de o modelo "alucinar" e gerar textos sem sentido. Quanto menor a temperatura, a resposta \u00e9 mais conservadora, mas corre o risco de gerar textos repetidos.</p>\n\n<h2 id="como-saber-o-numero-de-tokens-que-serao-cobrados">Como saber o n\u00famero de tokens que ser\u00e3o cobrados?</h2>\n\n<p>Para saber de antem\u00e3o o quanto suas requisi\u00e7\u00f5es ir\u00e3o custar, use os tokenizadores dos modelos MariTalk, dispon\u00edveis na HuggingFace, para saber o n\u00famero de tokens em um dado prompt.</p>\n\n<p>Exemplo de uso:</p>\n\n<div class="pdoc-code codehilite">\n<pre><span></span><code><span class="kn">import</span> <span class="nn">transformers</span>\n<span class="n">tokenizer</span> <span class="o">=</span> <span class="n">transformers</span><span class="o">.</span><span class="n">AutoTokenizer</span><span class="o">.</span><span class="n">from_pretrained</span><span class="p">(</span><span class="s2">&quot;maritaca-ai/sabia-2-tokenizer-medium&quot;</span><span class="p">)</span>\n\n<span class="n">prompt</span> <span class="o">=</span> <span class="s2">&quot;Com quantos paus se faz uma canoa?&quot;</span>\n\n<span class="n">tokens</span> <span class="o">=</span> <span class="n">tokenizer</span><span class="o">.</span><span class="n">encode</span><span class="p">(</span><span class="n">prompt</span><span class="p">)</span>\n\n<span class="nb">print</span><span class="p">(</span><span class="sa">f</span><span class="s1">&#39;O prompt &quot;</span><span class="si">{</span><span class="n">prompt</span><span class="si">}</span><span class="s1">&quot; cont\u00e9m </span><span class="si">{</span><span class="nb">len</span><span class="p">(</span><span class="n">tokens</span><span class="p">)</span><span class="si">}</span><span class="s1"> tokens.&#39;</span><span class="p">)</span>\n</code></pre>\n</div>\n\n<p>Note que os tokenizadores da Sabi\u00e1-2 Small e Medium s\u00e3o diferentes.</p>\n\n<h1 id="modo-local">Modo local</h1>\n\n<p>Al\u00e9m da API da Maritaca AI, \u00e9 poss\u00edvel executar a MariTalk localmente em duas vers\u00f5es, small e large.\nA tabela abaixo compara essas duas vers\u00f5es e apresenta algumas compara\u00e7\u00f5es com os modelos da OpenAI.</p>\n\n<table>\n<thead>\n<tr>\n  <th>Modelo</th>\n  <th>GPU RAM (min)</th>\n  <th>Max tokens</th>\n  <th>Pontua\u00e7\u00e3o m\u00e9dia (14 Datasets)<sup class="footnote-ref" id="fnref-1"><a href="#fn-1">1</a></sup></th>\n  <th>Link para Download</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n  <td>MariTalk Local Small v1.0</td>\n  <td>6GB</td>\n  <td>8.000</td>\n  <td>65,4</td>\n  <td><a href="https://chat.maritaca.ai/checkout/maritalk-small">Link</a></td>\n</tr>\n<tr>\n  <td>MariTalk Local Large v1.0</td>\n  <td>24GB</td>\n  <td>8.000</td>\n  <td>73,0</td>\n  <td>Lan\u00e7amento em breve</td>\n</tr>\n<tr>\n  <td>GPT-3.5-turbo</td>\n  <td>-</td>\n  <td>16k</td>\n  <td>67,0</td>\n  <td>-</td>\n</tr>\n<tr>\n  <td>GPT-4-turbo</td>\n  <td>-</td>\n  <td>132k</td>\n  <td>80,6</td>\n  <td>-</td>\n</tr>\n</tbody>\n</table>\n\n<p>O execut\u00e1vel roda em m\u00e1quinas Linux 64-bit com uma ou mais GPUs Nvidia. Atualmente, a MariTalk local roda apenas em GPUs da arquitetura Ampere (A100, A6000 e A10).</p>\n\n<h2 id="executando-em-python">Executando em Python</h2>\n\n<p>Uma vez obtida uma chave de licen\u00e7a usando um dos links acima, \u00e9 poss\u00edvel fazer o download, inicializar e executar a MariTalk local utilizando a biblioteca em Python, conforme exemplo abaixo.</p>\n\n<div class="pdoc-code codehilite">\n<pre><span></span><code><span class="kn">import</span> <span class="nn">maritalk</span>\n\n<span class="c1"># Criando uma inst\u00e2ncia do cliente MariTalkLocal</span>\n<span class="n">client</span> <span class="o">=</span> <span class="n">maritalk</span><span class="o">.</span><span class="n">MariTalkLocal</span><span class="p">()</span>\n\n<span class="c1"># Iniciando o servidor com uma chave de licen\u00e7a especificada. O execut\u00e1vel ser\u00e1 baixado em ~/bin/maritalk</span>\n<span class="n">client</span><span class="o">.</span><span class="n">start_server</span><span class="p">(</span><span class="n">license</span><span class="o">=</span><span class="s1">&#39;000000-00000-00000-00000&#39;</span><span class="p">)</span>\n\n<span class="c1"># Verificando o status do servidor</span>\n<span class="n">status</span> <span class="o">=</span> <span class="n">client</span><span class="o">.</span><span class="n">status</span><span class="p">()</span>\n<span class="nb">print</span><span class="p">(</span><span class="n">status</span><span class="p">)</span>  <span class="c1"># {&#39;status&#39;: &#39;idle&#39;}</span>\n\n<span class="c1"># Gerando uma resposta para classificar resenhas de filmes</span>\n<span class="n">response</span> <span class="o">=</span> <span class="n">client</span><span class="o">.</span><span class="n">generate</span><span class="p">(</span><span class="s2">&quot;&quot;&quot;Classifique a resenha de filme como &quot;positiva&quot; ou &quot;negativa&quot;.</span>\n\n<span class="s2">Resenha: Gostei muito do filme, \u00e9 o melhor do ano!</span>\n<span class="s2">Classe: positiva</span>\n\n<span class="s2">Resenha: O filme deixa muito a desejar.</span>\n<span class="s2">Classe: negativa</span>\n\n<span class="s2">Resenha: Foi fant\u00e1stico, valeu o ingresso..</span>\n<span class="s2">Classe:&quot;&quot;&quot;</span><span class="p">,</span> <span class="n">max_tokens</span><span class="o">=</span><span class="mi">2</span><span class="p">,</span> <span class="n">do_sample</span><span class="o">=</span><span class="kc">False</span><span class="p">)</span>\n<span class="nb">print</span><span class="p">(</span><span class="n">response</span><span class="p">)</span>  <span class="c1"># {&#39;output&#39;: &#39;positiva&#39;, &#39;queue_time&#39;: 0, &#39;prompt_time&#39;: 158, &#39;generation_time&#39;: 9}</span>\n\n<span class="c1"># Preparando uma s\u00e9rie de mensagens para uma intera\u00e7\u00e3o de chat</span>\n<span class="n">messages</span> <span class="o">=</span> <span class="p">[</span>\n    <span class="p">{</span><span class="s2">&quot;role&quot;</span><span class="p">:</span> <span class="s2">&quot;user&quot;</span><span class="p">,</span> <span class="s2">&quot;content&quot;</span><span class="p">:</span> <span class="s2">&quot;sugira tr\u00eas nomes para a minha cachorra&quot;</span><span class="p">},</span>\n    <span class="p">{</span><span class="s2">&quot;role&quot;</span><span class="p">:</span> <span class="s2">&quot;assistant&quot;</span><span class="p">,</span> <span class="s2">&quot;content&quot;</span><span class="p">:</span> <span class="s2">&quot;nina, bela e luna.&quot;</span><span class="p">},</span>\n    <span class="p">{</span><span class="s2">&quot;role&quot;</span><span class="p">:</span> <span class="s2">&quot;user&quot;</span><span class="p">,</span> <span class="s2">&quot;content&quot;</span><span class="p">:</span> <span class="s2">&quot;e para o meu peixe?&quot;</span><span class="p">},</span>\n<span class="p">]</span>\n\n<span class="c1"># Gerando a resposta do chat</span>\n<span class="n">chat_response</span> <span class="o">=</span> <span class="n">client</span><span class="o">.</span><span class="n">generate</span><span class="p">(</span><span class="n">messages</span><span class="p">)</span>\n<span class="nb">print</span><span class="p">(</span><span class="n">chat_response</span><span class="p">)</span>  <span class="c1"># {&#39;output&#39;: &#39;nani, bento e leo.&#39;, &#39;queue_time&#39;: 0, &#39;prompt_time&#39;: 185, &#39;generation_time&#39;: 127}</span>\n</code></pre>\n</div>\n\n<p>O retorno das chamadas cont\u00e9m o texto gerado e os tempos de espera, de execu\u00e7\u00e3o do prompt e da gera\u00e7\u00e3o do texto para fins de debug do usu\u00e1rio.</p>\n\n<h2 id="executando-o-binario-diretamente">Executando o bin\u00e1rio diretamente</h2>\n\n<p>Tamb\u00e9m \u00e9 possivel executar o servidor diretamente no terminal, sem o wrapper em python.</p>\n\n<h4 id="download">Download</h4>\n\n<div class="pdoc-code codehilite">\n<pre><span></span><code>wget<span class="w"> </span>-O<span class="w"> </span>maritalk<span class="w"> </span>&lt;link<span class="w"> </span><span class="k">do</span><span class="w"> </span>bin\u00e1rio<span class="w"> </span>recebido<span class="w"> </span>no<span class="w"> </span>email&gt;<span class="w"> </span>\n</code></pre>\n</div>\n\n<h4 id="dependencias">Depend\u00eancias</h4>\n\n<p>As principais depend\u00eancias s\u00e3o as bibliotecas CUDA para comunica\u00e7\u00e3o com a GPU e de SSL. Para instalar as bibliotecas da Nvidia compat\u00edveis com seu driver, \u00e9 recomendado instalar o CUDA Toolkit na vers\u00e3o 11 ou 12. Exemplo: <code>apt install cuda-toolkit-12</code>. Atualmente suportamos as vers\u00f5es de CUDA 11 e 12 e Ubuntu vers\u00f5es 20 e 22. Caso queria sobrescrever a detec\u00e7\u00e3o autom\u00e1tica das vers\u00f5es locais na hora do download do bin\u00e1rio compat\u00edvel, utilize o argumento <code>cuda_version</code> ou <code>ssl_version</code>, exemplo: <code>client.start_server(\'00000-00000-00000-00000\', cuda_version=12)</code>.</p>\n\n<p>Tamb\u00e9m \u00e9 poss\u00edvel executar a MariTalk em um container Docker utilizando as imagens da Nvidia com as depend\u00eancias necess\u00e1rias j\u00e1 instaladas. Por exemplo, a imagem <code>nvidia/cuda:11.8.0-devel-ubuntu22.04</code> pode ser utilizada para executar o bin\u00e1rio compat\u00edvel com Ubuntu 22 e CUDA 11.</p>\n\n<h4 id="execucao">Execu\u00e7\u00e3o</h4>\n\n<div class="pdoc-code codehilite">\n<pre><span></span><code>$<span class="w"> </span>./maritalk<span class="w"> </span><span class="o">[</span>OPTIONS<span class="o">]</span><span class="w"> </span>--license<span class="w"> </span>&lt;LICENSE&gt;\n</code></pre>\n</div>\n\n<p><code>--license &lt;LICENSE&gt;</code>: Sua chave de licen\u00e7a.</p>\n\n<p><code>-p, --port &lt;PORT&gt;</code>: Porta HTTP para escutar. [padr\u00e3o: 9000]</p>\n\n<p><code>-h, --help</code>: Mostra uma mensagem de ajuda com a descri\u00e7\u00e3o dos argumentos dispon\u00edveis.</p>\n\n<p><code>-V, --version</code>: Mostra a vers\u00e3o do execut\u00e1vel.</p>\n\n<h4 id="modo-interativo">Modo interativo</h4>\n\n<p>Tamb\u00e9m \u00e9 poss\u00edvel utilizar a MariTalk Local no pr\u00f3prio terminal sem precisar fazer requis\u00e7\u00f5es \u00e0 API atrav\u00e9s do modo interativo:</p>\n\n<div class="pdoc-code codehilite">\n<pre><span></span><code>$<span class="w"> </span>./maritalk<span class="w"> </span><span class="o">[</span>OPTIONS<span class="o">]</span><span class="w"> </span>--license<span class="w"> </span>&lt;LICENSE&gt;<span class="w"> </span>--interactive\n<span class="o">(</span>...<span class="o">)</span>\n&gt;&gt;<span class="w"> </span>ol\u00e1\nMariTalk:<span class="w"> </span>Ol\u00e1!<span class="w"> </span>Como<span class="w"> </span>posso<span class="w"> </span>ajudar<span class="w"> </span>voc\u00ea<span class="w"> </span>hoje?\n&gt;&gt;<span class="w"> </span>crie<span class="w"> </span>uma<span class="w"> </span>lista<span class="w"> </span>de<span class="w"> </span>compras<span class="w"> </span>para<span class="w"> </span>uma<span class="w"> </span>festa<span class="w"> </span>de<span class="w"> </span>anivers\u00e1rio\nMariTalk:<span class="w"> </span>Aqui<span class="w"> </span>est\u00e1<span class="w"> </span>uma<span class="w"> </span>lista<span class="w"> </span>de<span class="w"> </span>itens<span class="w"> </span>que<span class="w"> </span>voc\u00ea<span class="w"> </span>pode<span class="w"> </span>precisar<span class="w"> </span>para<span class="w"> </span>uma<span class="w"> </span>festa<span class="w"> </span>de<span class="w"> </span>anivers\u00e1rio:\n\n<span class="m">1</span>.<span class="w"> </span>Doces:<span class="w"> </span>cupcakes,<span class="w"> </span>brownies,<span class="w"> </span>bolos,<span class="w"> </span>etc\n<span class="m">2</span>.<span class="w"> </span>Bebidas:<span class="w"> </span>\u00e1gua,<span class="w"> </span>refrigerante,<span class="w"> </span>cerveja,<span class="w"> </span>suco,<span class="w"> </span>etc\n<span class="m">3</span>.<span class="w"> </span>Decora\u00e7\u00f5es:<span class="w"> </span>bal\u00f5es,<span class="w"> </span>confetes,<span class="w"> </span>fitas,<span class="w"> </span>etc\n<span class="m">4</span>.<span class="w"> </span>Lembrancinhas:<span class="w"> </span>chaveiros,<span class="w"> </span>sacolas,<span class="w"> </span>canetas,<span class="w"> </span>etc\n<span class="m">5</span>.<span class="w"> </span>Lanternas:<span class="w"> </span>para<span class="w"> </span>decorar<span class="w"> </span>o<span class="w"> </span>ambiente\n<span class="m">6</span>.<span class="w"> </span>Mesa:<span class="w"> </span>guardanapos,<span class="w"> </span>copos,<span class="w"> </span>talheres,<span class="w"> </span>pratos\n<span class="m">7</span>.<span class="w"> </span>M\u00fasica:<span class="w"> </span>CD<span class="w"> </span>ou<span class="w"> </span>MP3<span class="w"> </span>player<span class="w"> </span>com<span class="w"> </span>m\u00fasica,<span class="w"> </span>alto-falante\n<span class="m">8</span>.<span class="w"> </span>Tendas:<span class="w"> </span>para<span class="w"> </span>proteger<span class="w"> </span>da<span class="w"> </span>chuva<span class="w"> </span>ou<span class="w"> </span><span class="k">do</span><span class="w"> </span>sol\n<span class="m">9</span>.<span class="w"> </span>Mesas<span class="w"> </span>e<span class="w"> </span>cadeiras:<span class="w"> </span>para<span class="w"> </span>os<span class="w"> </span>convidados<span class="w"> </span>se<span class="w"> </span>sentarem\n<span class="m">10</span>.<span class="w"> </span>Utens\u00edlios<span class="w"> </span>de<span class="w"> </span>cozinha:<span class="w"> </span>panelas,<span class="w"> </span>talheres,<span class="w"> </span>copos,<span class="w"> </span>pratos,<span class="w"> </span>etc\n<span class="m">11</span>.<span class="w"> </span>Acess\u00f3rios:<span class="w"> </span>guarda-sol,<span class="w"> </span>guarda-chuva,<span class="w"> </span>toalhas,<span class="w"> </span>etc\n<span class="m">12</span>.<span class="w"> </span>Lanterna:<span class="w"> </span>para<span class="w"> </span>levar<span class="w"> </span>para<span class="w"> </span>caminhar\n\nLembre-se<span class="w"> </span>de<span class="w"> </span>sempre<span class="w"> </span>incluir<span class="w"> </span>produtos<span class="w"> </span>de<span class="w"> </span>qualidade<span class="w"> </span>e<span class="w"> </span>que<span class="w"> </span>sejam<span class="w"> </span>suficientes<span class="w"> </span>para<span class="w"> </span>atender<span class="w"> </span>a<span class="w"> </span>todos<span class="w"> </span>os<span class="w"> </span>convidados.\n</code></pre>\n</div>\n\n<h1 id="aspectos-tecnicos">Aspectos T\u00e9cnicos</h1>\n\n<h3 id="comprimento-maximo-de-sequencia">Comprimento m\u00e1ximo de sequ\u00eancia</h3>\n\n<p>Os modelos atuais t\u00eam um limite de sequ\u00eancia m\u00e1xima de 8.000 tokens, o que corresponde a cerca de 4.000 palavras em portugu\u00eas.\nIsso implica que a contagem total de tokens, incluindo tanto os tokens de entrada (ou seja, o prompt fornecido) quanto os tokens de sa\u00edda (ou seja, os gerados pelo modelo), n\u00e3o deve exceder 8.000.\nPor exemplo, se o prompt cont\u00e9m 6.000 tokens, o valor m\u00e1ximo para o par\u00e2metro <code>max_tokens</code> (isto \u00e9, a quantidade de tokens a serem gerados pelo modelo) deve ser de at\u00e9 2.000 tokens.</p>\n\n<h3 id="capacidade-de-processamento">Capacidade de Processamento</h3>\n\n<p>Leva cerca de 1 a 2 segundos para gerar o primeiro token, dado uma sequ\u00eancia de 1000 tokens como entrada.\nAp\u00f3s isso, novos tokens s\u00e3o gerados a uma taxa de 10 a 15 tokens/seg.</p>\n\n<h1 id="web-chat">Web Chat</h1>\n\n<p>Teste a MariTalk Large via interface web em:\n<a href="https://chat.maritaca.ai/">chat.maritaca.ai</a></p>\n\n<p><img src="https://raw.githubusercontent.com/maritaca-ai/maritalk-api/main/.github/imgs/web-interface.png" width="600"></p>\n\n<div class="footnotes">\n<hr />\n<ol>\n<li id="fn-1">\n<p>Datasets em Portugu\u00eas do <a href="https://arxiv.org/abs/2304.07880">Poeta benchmark</a>.&#160;<a href="#fnref-1" class="footnoteBackLink" title="Jump back to footnote 1 in the text.">&#8617;</a></p>\n</li>\n</ol>\n</div>\n',
    },
    {
      fullname: "maritalk.MariTalk",
      modulename: "maritalk",
      qualname: "MariTalk",
      kind: "class",
      doc: "<p></p>\n",
    },
    {
      fullname: "maritalk.MariTalk.__init__",
      modulename: "maritalk",
      qualname: "MariTalk.__init__",
      kind: "function",
      doc: "<p></p>\n",
      signature:
        '<span class="signature pdoc-code multiline">(<span class="param">\t<span class="n">key</span><span class="p">:</span> <span class="nb">str</span>,</span><span class="param">\t<span class="n">api_url</span><span class="p">:</span> <span class="nb">str</span> <span class="o">=</span> <span class="s1">&#39;https://chat.maritaca.ai/api&#39;</span>,</span><span class="param">\t<span class="n">model</span><span class="o">=</span><span class="s1">&#39;maritalk&#39;</span></span>)</span>',
    },
    {
      fullname: "maritalk.MariTalk.key",
      modulename: "maritalk",
      qualname: "MariTalk.key",
      kind: "variable",
      doc: "<p>@private</p>\n",
    },
    {
      fullname: "maritalk.MariTalk.api_url",
      modulename: "maritalk",
      qualname: "MariTalk.api_url",
      kind: "variable",
      doc: "<p>@private</p>\n",
    },
    {
      fullname: "maritalk.MariTalk.model",
      modulename: "maritalk",
      qualname: "MariTalk.model",
      kind: "variable",
      doc: "<p>@private</p>\n",
    },
    {
      fullname: "maritalk.MariTalk.generate",
      modulename: "maritalk",
      qualname: "MariTalk.generate",
      kind: "function",
      doc: '<p>Generate a response from a list of messages.</p>\n\n<h6 id="arguments">Arguments:</h6>\n\n<ul>\n<li><strong>messages (<code>Union[str, List[Dict[str, str]]]</code>, <em>optional</em>):</strong>  If chat_mode=True, messages should be a string representing a single user message or a list of messages comprising a conversation between the user and the assistant.\nIf messages is a list, each item of the list should be a dictionary containing the keys <code>role</code> and <code>content</code>. For example:\n<pre><code>messages = [\n    {"role": "user", "content": "bom dia, esta \u00e9 a mensagem do usuario"},\n    {"role": "assistant", "content": "bom dia, esta \u00e9 a resposta do assistente"},\n    {"role": "user", "content": "Voc\u00ea pode me falar quanto \u00e9 25 + 27?"},\n]\n</code></pre>\nIf chat_mode=False, messages should be a string representing a prompt.</li>\n<li><strong>chat_mode (<code>bool</code>, <em>optional</em>, defaults to True):</strong>  If True, the model will run in chat mode, in which messages is either a string representing a single user message or a list of messages representing the conversation between the user and the assistant.\nIf False, messages should be a string representing the prompt. chat_mode=False is recommended when using few-shot examples.</li>\n<li><strong>temperature (<code>float</code>, <em>optional</em>, defaults to <code>0.7</code>):</strong>  The sampling temperature for the next token probability. Higher values generate more random texts, while lower values will make it more deterministic.</li>\n<li><strong>top_p (<code>float</code>, <em>optional</em>, defaults to <code>0.95</code>):</strong>  The top probability mass to use on nucleus sampling. Read more at: <a href="https://arxiv.org/abs/1904.09751">https://arxiv.org/abs/1904.09751</a>.</li>\n<li><strong>max_tokens (<code>int</code>, <em>optional</em>, defaults to <code>512</code>):</strong>  Maximum number of tokens to generate.</li>\n<li><strong>do_sample (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>):</strong>  Whether to use sampling or not. <code>True</code> value means non-deterministic generations using sampling parameters and <code>False</code> value means deterministic generation using greedy decoding.</li>\n<li><strong>stopping_tokens (<code>List</code>, <em>optional</em>):</strong>  A list of tokens to use as a stop criteria.</li>\n</ul>\n',
      signature:
        '<span class="signature pdoc-code multiline">(<span class="param">\t<span class="bp">self</span>,</span><span class="param">\t<span class="n">messages</span><span class="p">:</span> <span class="n">Union</span><span class="p">[</span><span class="nb">str</span><span class="p">,</span> <span class="n">List</span><span class="p">[</span><span class="n">Dict</span><span class="p">[</span><span class="nb">str</span><span class="p">,</span> <span class="nb">str</span><span class="p">]]]</span>,</span><span class="param">\t<span class="n">chat_mode</span><span class="p">:</span> <span class="nb">bool</span> <span class="o">=</span> <span class="kc">True</span>,</span><span class="param">\t<span class="n">temperature</span><span class="p">:</span> <span class="nb">float</span> <span class="o">=</span> <span class="mf">0.7</span>,</span><span class="param">\t<span class="n">top_p</span><span class="p">:</span> <span class="nb">float</span> <span class="o">=</span> <span class="mf">0.95</span>,</span><span class="param">\t<span class="n">max_tokens</span><span class="p">:</span> <span class="nb">int</span> <span class="o">=</span> <span class="mi">512</span>,</span><span class="param">\t<span class="n">do_sample</span><span class="p">:</span> <span class="nb">bool</span> <span class="o">=</span> <span class="kc">True</span>,</span><span class="param">\t<span class="n">stopping_tokens</span><span class="p">:</span> <span class="n">List</span> <span class="o">=</span> <span class="p">[]</span></span><span class="return-annotation">):</span></span>',
      funcdef: "def",
    },
    {
      fullname: "maritalk.MariTalkLocal",
      modulename: "maritalk",
      qualname: "MariTalkLocal",
      kind: "class",
      doc: "<p></p>\n",
    },
    {
      fullname: "maritalk.MariTalkLocal.__init__",
      modulename: "maritalk",
      qualname: "MariTalkLocal.__init__",
      kind: "function",
      doc: "<p></p>\n",
      signature:
        '<span class="signature pdoc-code condensed">(<span class="param"><span class="n">host</span><span class="p">:</span> <span class="nb">str</span> <span class="o">=</span> <span class="s1">&#39;localhost&#39;</span>, </span><span class="param"><span class="n">port</span><span class="p">:</span> <span class="nb">int</span> <span class="o">=</span> <span class="mi">9000</span></span>)</span>',
    },
    {
      fullname: "maritalk.MariTalkLocal.api_url",
      modulename: "maritalk",
      qualname: "MariTalkLocal.api_url",
      kind: "variable",
      doc: "<p>@private</p>\n",
    },
    {
      fullname: "maritalk.MariTalkLocal.port",
      modulename: "maritalk",
      qualname: "MariTalkLocal.port",
      kind: "variable",
      doc: "<p>@private</p>\n",
    },
    {
      fullname: "maritalk.MariTalkLocal.process",
      modulename: "maritalk",
      qualname: "MariTalkLocal.process",
      kind: "variable",
      doc: "<p>@private</p>\n",
    },
    {
      fullname: "maritalk.MariTalkLocal.start_server",
      modulename: "maritalk",
      qualname: "MariTalkLocal.start_server",
      kind: "function",
      doc: "<p></p>\n",
      signature:
        '<span class="signature pdoc-code multiline">(<span class="param">\t<span class="bp">self</span>,</span><span class="param">\t<span class="n">license</span><span class="p">:</span> <span class="nb">str</span>,</span><span class="param">\t<span class="n">bin_path</span><span class="p">:</span> <span class="nb">str</span> <span class="o">=</span> <span class="s1">&#39;~/bin/maritalk&#39;</span>,</span><span class="param">\t<span class="n">cuda_version</span><span class="p">:</span> <span class="n">Union</span><span class="p">[</span><span class="nb">int</span><span class="p">,</span> <span class="n">NoneType</span><span class="p">]</span> <span class="o">=</span> <span class="kc">None</span>,</span><span class="param">\t<span class="n">ssl_version</span><span class="p">:</span> <span class="n">Union</span><span class="p">[</span><span class="nb">int</span><span class="p">,</span> <span class="n">NoneType</span><span class="p">]</span> <span class="o">=</span> <span class="kc">None</span></span><span class="return-annotation">):</span></span>',
      funcdef: "def",
    },
    {
      fullname: "maritalk.MariTalkLocal.stop_server",
      modulename: "maritalk",
      qualname: "MariTalkLocal.stop_server",
      kind: "function",
      doc: "<p></p>\n",
      signature:
        '<span class="signature pdoc-code condensed">(<span class="param"><span class="bp">self</span></span><span class="return-annotation">):</span></span>',
      funcdef: "def",
    },
    {
      fullname: "maritalk.MariTalkLocal.download",
      modulename: "maritalk",
      qualname: "MariTalkLocal.download",
      kind: "function",
      doc: "<p></p>\n",
      signature:
        '<span class="signature pdoc-code condensed">(<span class="param"><span class="bp">cls</span>, </span><span class="param"><span class="n">license</span><span class="p">:</span> <span class="nb">str</span>, </span><span class="param"><span class="n">bin_path</span><span class="p">:</span> <span class="nb">str</span>, </span><span class="param"><span class="n">dependencies</span><span class="p">:</span> <span class="n">Dict</span><span class="p">[</span><span class="nb">str</span><span class="p">,</span> <span class="nb">int</span><span class="p">]</span></span><span class="return-annotation">):</span></span>',
      funcdef: "def",
    },
    {
      fullname: "maritalk.MariTalkLocal.status",
      modulename: "maritalk",
      qualname: "MariTalkLocal.status",
      kind: "function",
      doc: "<p></p>\n",
      signature:
        '<span class="signature pdoc-code condensed">(<span class="param"><span class="bp">self</span></span><span class="return-annotation">):</span></span>',
      funcdef: "def",
    },
    {
      fullname: "maritalk.MariTalkLocal.generate_raw",
      modulename: "maritalk",
      qualname: "MariTalkLocal.generate_raw",
      kind: "function",
      doc: '<p>Generate a completion for a given prompt.</p>\n\n<h6 id="arguments">Arguments:</h6>\n\n<ul>\n<li><strong>prompt (<code>str</code>):</strong>  The initial prompt to generate completions for. It can be the beginning of a text to be completed or an instruction for performing a task.</li>\n<li><strong>temperature (<code>float</code>, <em>optional</em>, defaults to <code>0.7</code>):</strong>  The sampling temperature for the next token probability. Higher values generate more random texts, while lower values will make it more deterministic.</li>\n<li><strong>top_p (<code>float</code>, <em>optional</em>, defaults to <code>0.95</code>):</strong>  The top probability mass to use on nucleus sampling. Read more at: <a href="https://arxiv.org/abs/1904.09751">https://arxiv.org/abs/1904.09751</a>.</li>\n<li><strong>max_tokens (<code>int</code>, <em>optional</em>, defaults to <code>512</code>):</strong>  Maximum number of tokens to generate.</li>\n<li><strong>do_sample (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>):</strong>  Whether to use sampling or not. <code>True</code> value means non-deterministic generations using sampling parameters and <code>False</code> value means deterministic generation using greedy decoding.</li>\n<li><strong>stop_sequences (<code>List[str]</code>, <em>optional</em>):</strong>  A list of sequences to stop the generation process.</li>\n<li><strong>seed (<code>int</code>, <em>optional</em>, defaults to <code>None</code>):</strong>  Seed to use during the random sampling process to make it reproducible.</li>\n</ul>\n',
      signature:
        '<span class="signature pdoc-code multiline">(<span class="param">\t<span class="bp">self</span>,</span><span class="param">\t<span class="n">prompt</span><span class="p">:</span> <span class="nb">str</span>,</span><span class="param">\t<span class="n">temperature</span><span class="p">:</span> <span class="nb">float</span> <span class="o">=</span> <span class="mf">0.7</span>,</span><span class="param">\t<span class="n">top_p</span><span class="p">:</span> <span class="nb">float</span> <span class="o">=</span> <span class="mf">0.95</span>,</span><span class="param">\t<span class="n">max_tokens</span><span class="p">:</span> <span class="nb">int</span> <span class="o">=</span> <span class="mi">512</span>,</span><span class="param">\t<span class="n">do_sample</span><span class="p">:</span> <span class="nb">bool</span> <span class="o">=</span> <span class="kc">True</span>,</span><span class="param">\t<span class="n">stop_sequences</span><span class="p">:</span> <span class="n">List</span><span class="p">[</span><span class="nb">str</span><span class="p">]</span> <span class="o">=</span> <span class="p">[]</span>,</span><span class="param">\t<span class="n">seed</span><span class="p">:</span> <span class="n">Union</span><span class="p">[</span><span class="nb">int</span><span class="p">,</span> <span class="n">NoneType</span><span class="p">]</span> <span class="o">=</span> <span class="kc">None</span></span><span class="return-annotation">):</span></span>',
      funcdef: "def",
    },
    {
      fullname: "maritalk.MariTalkLocal.generate",
      modulename: "maritalk",
      qualname: "MariTalkLocal.generate",
      kind: "function",
      doc: '<p>Generate a completion for a given prompt.</p>\n\n<h6 id="arguments">Arguments:</h6>\n\n<ul>\n<li><strong>messages (<code>Union[str, List[Dict[str, str]]]</code>):</strong>  A string with one message or a list where each item should be a dictionary containing the keys <code>role</code> and <code>content</code>. For example:\n<pre><code>messages = [\n    {"role": "user", "content": "bom dia, esta \u00e9 a mensagem do usuario"},\n    {"role": "assistant", "content": "bom dia, esta \u00e9 a resposta do assistente"},\n    {"role": "user", "content": "Voc\u00ea pode me falar quanto \u00e9 25 + 27?"},\n]\n</code></pre></li>\n<li><strong>temperature (<code>float</code>, <em>optional</em>, defaults to <code>0.7</code>):</strong>  The sampling temperature for the next token probability. Higher values generate more random texts, while lower values will make it more deterministic.</li>\n<li><strong>top_p (<code>float</code>, <em>optional</em>, defaults to <code>0.95</code>):</strong>  The top probability mass to use on nucleus sampling. Read more at: <a href="https://arxiv.org/abs/1904.09751">https://arxiv.org/abs/1904.09751</a>.</li>\n<li><strong>max_tokens (<code>int</code>, <em>optional</em>, defaults to <code>512</code>):</strong>  Maximum number of tokens to generate.</li>\n<li><strong>do_sample (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>):</strong>  Whether to use sampling or not. <code>True</code> value means non-deterministic generations using sampling parameters and <code>False</code> value means deterministic generation using greedy decoding.</li>\n<li><strong>stop_sequences (<code>List[str]</code>, <em>optional</em>):</strong>  A list of sequences to stop the generation process.</li>\n<li><strong>seed (<code>int</code>, <em>optional</em>, defaults to <code>None</code>):</strong>  Seed to use during the random sampling process to make it reproducible.</li>\n</ul>\n',
      signature:
        '<span class="signature pdoc-code multiline">(<span class="param">\t<span class="bp">self</span>,</span><span class="param">\t<span class="n">messages</span><span class="p">:</span> <span class="n">Union</span><span class="p">[</span><span class="nb">str</span><span class="p">,</span> <span class="n">List</span><span class="p">[</span><span class="n">Dict</span><span class="p">[</span><span class="nb">str</span><span class="p">,</span> <span class="nb">str</span><span class="p">]]]</span>,</span><span class="param">\t<span class="n">temperature</span><span class="p">:</span> <span class="nb">float</span> <span class="o">=</span> <span class="mf">0.7</span>,</span><span class="param">\t<span class="n">top_p</span><span class="p">:</span> <span class="nb">float</span> <span class="o">=</span> <span class="mf">0.95</span>,</span><span class="param">\t<span class="n">max_tokens</span><span class="p">:</span> <span class="nb">int</span> <span class="o">=</span> <span class="mi">512</span>,</span><span class="param">\t<span class="n">do_sample</span><span class="p">:</span> <span class="nb">bool</span> <span class="o">=</span> <span class="kc">True</span>,</span><span class="param">\t<span class="n">stop_sequences</span><span class="p">:</span> <span class="n">List</span><span class="p">[</span><span class="nb">str</span><span class="p">]</span> <span class="o">=</span> <span class="p">[]</span>,</span><span class="param">\t<span class="n">seed</span><span class="p">:</span> <span class="n">Union</span><span class="p">[</span><span class="nb">int</span><span class="p">,</span> <span class="n">NoneType</span><span class="p">]</span> <span class="o">=</span> <span class="kc">None</span></span><span class="return-annotation">):</span></span>',
      funcdef: "def",
    },
    {
      fullname: "maritalk.MariTalkLocal.generate_chat",
      modulename: "maritalk",
      qualname: "MariTalkLocal.generate_chat",
      kind: "function",
      doc: "<p></p>\n",
      signature:
        '<span class="signature pdoc-code condensed">(<span class="param"><span class="bp">self</span>, </span><span class="param"><span class="o">*</span><span class="n">args</span>, </span><span class="param"><span class="o">**</span><span class="n">kwargs</span></span><span class="return-annotation">):</span></span>',
      funcdef: "def",
    },
  ];

  // mirrored in build-search-index.js (part 1)
  // Also split on html tags. this is a cheap heuristic, but good enough.
  elasticlunr.tokenizer.setSeperator(/[\s\-.;&_'"=,()]+|<[^>]*>/);

  let searchIndex;
  if (docs._isPrebuiltIndex) {
    console.info("using precompiled search index");
    searchIndex = elasticlunr.Index.load(docs);
  } else {
    console.time("building search index");
    // mirrored in build-search-index.js (part 2)
    searchIndex = elasticlunr(function () {
      this.pipeline.remove(elasticlunr.stemmer);
      this.pipeline.remove(elasticlunr.stopWordFilter);
      this.addField("qualname");
      this.addField("fullname");
      this.addField("annotation");
      this.addField("default_value");
      this.addField("signature");
      this.addField("bases");
      this.addField("doc");
      this.setRef("fullname");
    });
    for (let doc of docs) {
      searchIndex.addDoc(doc);
    }
    console.timeEnd("building search index");
  }

  return (term) =>
    searchIndex.search(term, {
      fields: {
        qualname: { boost: 4 },
        fullname: { boost: 2 },
        annotation: { boost: 2 },
        default_value: { boost: 2 },
        signature: { boost: 2 },
        bases: { boost: 2 },
        doc: { boost: 1 },
      },
      expand: true,
    });
})();

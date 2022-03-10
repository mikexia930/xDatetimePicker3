var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { openBlock, createElementBlock, createElementVNode, withDirectives, withModifiers, renderSlot, vShow, toDisplayString, Fragment, renderList, normalizeClass, createTextVNode, createCommentVNode, resolveComponent, createBlock, withCtx, createVNode } from "vue";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var dayjs_min = { exports: {} };
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h = "quarter", c = "year", d = "date", $ = "Invalid Date", l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, m = function(t2, e2, n2) {
      var r2 = String(t2);
      return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
    }, g = { s: m, z: function(t2) {
      var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
      return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
    }, m: function t2(e2, n2) {
      if (e2.date() < n2.date())
        return -t2(n2, e2);
      var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, f), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), f);
      return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
    }, a: function(t2) {
      return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
    }, p: function(t2) {
      return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t2) {
      return t2 === void 0;
    } }, D = "en", v = {};
    v[D] = M;
    var p = function(t2) {
      return t2 instanceof _;
    }, S = function(t2, e2, n2) {
      var r2;
      if (!t2)
        return D;
      if (typeof t2 == "string")
        v[t2] && (r2 = t2), e2 && (v[t2] = e2, r2 = t2);
      else {
        var i2 = t2.name;
        v[i2] = t2, r2 = i2;
      }
      return !n2 && r2 && (D = r2), r2 || !n2 && D;
    }, w = function(t2, e2) {
      if (p(t2))
        return t2.clone();
      var n2 = typeof e2 == "object" ? e2 : {};
      return n2.date = t2, n2.args = arguments, new _(n2);
    }, O = g;
    O.l = S, O.i = p, O.w = function(t2, e2) {
      return w(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
    };
    var _ = function() {
      function M2(t2) {
        this.$L = S(t2.locale, null, true), this.parse(t2);
      }
      var m2 = M2.prototype;
      return m2.parse = function(t2) {
        this.$d = function(t3) {
          var e2 = t3.date, n2 = t3.utc;
          if (e2 === null)
            return new Date(NaN);
          if (O.u(e2))
            return new Date();
          if (e2 instanceof Date)
            return new Date(e2);
          if (typeof e2 == "string" && !/Z$/i.test(e2)) {
            var r2 = e2.match(l);
            if (r2) {
              var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
            }
          }
          return new Date(e2);
        }(t2), this.$x = t2.x || {}, this.init();
      }, m2.init = function() {
        var t2 = this.$d;
        this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
      }, m2.$utils = function() {
        return O;
      }, m2.isValid = function() {
        return !(this.$d.toString() === $);
      }, m2.isSame = function(t2, e2) {
        var n2 = w(t2);
        return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
      }, m2.isAfter = function(t2, e2) {
        return w(t2) < this.startOf(e2);
      }, m2.isBefore = function(t2, e2) {
        return this.endOf(e2) < w(t2);
      }, m2.$g = function(t2, e2, n2) {
        return O.u(t2) ? this[e2] : this.set(n2, t2);
      }, m2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m2.valueOf = function() {
        return this.$d.getTime();
      }, m2.startOf = function(t2, e2) {
        var n2 = this, r2 = !!O.u(e2) || e2, h2 = O.p(t2), $2 = function(t3, e3) {
          var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
          return r2 ? i2 : i2.endOf(a);
        }, l2 = function(t3, e3) {
          return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
        }, y2 = this.$W, M3 = this.$M, m3 = this.$D, g2 = "set" + (this.$u ? "UTC" : "");
        switch (h2) {
          case c:
            return r2 ? $2(1, 0) : $2(31, 11);
          case f:
            return r2 ? $2(1, M3) : $2(0, M3 + 1);
          case o:
            var D2 = this.$locale().weekStart || 0, v2 = (y2 < D2 ? y2 + 7 : y2) - D2;
            return $2(r2 ? m3 - v2 : m3 + (6 - v2), M3);
          case a:
          case d:
            return l2(g2 + "Hours", 0);
          case u:
            return l2(g2 + "Minutes", 1);
          case s:
            return l2(g2 + "Seconds", 2);
          case i:
            return l2(g2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m2.endOf = function(t2) {
        return this.startOf(t2, false);
      }, m2.$set = function(t2, e2) {
        var n2, o2 = O.p(t2), h2 = "set" + (this.$u ? "UTC" : ""), $2 = (n2 = {}, n2[a] = h2 + "Date", n2[d] = h2 + "Date", n2[f] = h2 + "Month", n2[c] = h2 + "FullYear", n2[u] = h2 + "Hours", n2[s] = h2 + "Minutes", n2[i] = h2 + "Seconds", n2[r] = h2 + "Milliseconds", n2)[o2], l2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
        if (o2 === f || o2 === c) {
          var y2 = this.clone().set(d, 1);
          y2.$d[$2](l2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
        } else
          $2 && this.$d[$2](l2);
        return this.init(), this;
      }, m2.set = function(t2, e2) {
        return this.clone().$set(t2, e2);
      }, m2.get = function(t2) {
        return this[O.p(t2)]();
      }, m2.add = function(r2, h2) {
        var d2, $2 = this;
        r2 = Number(r2);
        var l2 = O.p(h2), y2 = function(t2) {
          var e2 = w($2);
          return O.w(e2.date(e2.date() + Math.round(t2 * r2)), $2);
        };
        if (l2 === f)
          return this.set(f, this.$M + r2);
        if (l2 === c)
          return this.set(c, this.$y + r2);
        if (l2 === a)
          return y2(1);
        if (l2 === o)
          return y2(7);
        var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[l2] || 1, m3 = this.$d.getTime() + r2 * M3;
        return O.w(m3, this);
      }, m2.subtract = function(t2, e2) {
        return this.add(-1 * t2, e2);
      }, m2.format = function(t2) {
        var e2 = this, n2 = this.$locale();
        if (!this.isValid())
          return n2.invalidDate || $;
        var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, f2 = n2.months, h2 = function(t3, n3, i3, s3) {
          return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].substr(0, s3);
        }, c2 = function(t3) {
          return O.s(s2 % 12 || 12, t3, "0");
        }, d2 = n2.meridiem || function(t3, e3, n3) {
          var r3 = t3 < 12 ? "AM" : "PM";
          return n3 ? r3.toLowerCase() : r3;
        }, l2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h2(n2.monthsShort, a2, f2, 3), MMMM: h2(f2, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h2(n2.weekdaysMin, this.$W, o2, 2), ddd: h2(n2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: O.s(s2, 2, "0"), h: c2(1), hh: c2(2), a: d2(s2, u2, true), A: d2(s2, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i2 };
        return r2.replace(y, function(t3, e3) {
          return e3 || l2[t3] || i2.replace(":", "");
        });
      }, m2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m2.diff = function(r2, d2, $2) {
        var l2, y2 = O.p(d2), M3 = w(r2), m3 = (M3.utcOffset() - this.utcOffset()) * e, g2 = this - M3, D2 = O.m(this, M3);
        return D2 = (l2 = {}, l2[c] = D2 / 12, l2[f] = D2, l2[h] = D2 / 3, l2[o] = (g2 - m3) / 6048e5, l2[a] = (g2 - m3) / 864e5, l2[u] = g2 / n, l2[s] = g2 / e, l2[i] = g2 / t, l2)[y2] || g2, $2 ? D2 : O.a(D2);
      }, m2.daysInMonth = function() {
        return this.endOf(f).$D;
      }, m2.$locale = function() {
        return v[this.$L];
      }, m2.locale = function(t2, e2) {
        if (!t2)
          return this.$L;
        var n2 = this.clone(), r2 = S(t2, e2, true);
        return r2 && (n2.$L = r2), n2;
      }, m2.clone = function() {
        return O.w(this.$d, this);
      }, m2.toDate = function() {
        return new Date(this.valueOf());
      }, m2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m2.toISOString = function() {
        return this.$d.toISOString();
      }, m2.toString = function() {
        return this.$d.toUTCString();
      }, M2;
    }(), b = _.prototype;
    return w.prototype = b, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function(t2) {
      b[t2[1]] = function(e2) {
        return this.$g(e2, t2[0], t2[1]);
      };
    }), w.extend = function(t2, e2) {
      return t2.$i || (t2(e2, _, w), t2.$i = true), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function(t2) {
      return w(1e3 * t2);
    }, w.en = v[D], w.Ls = v, w.p = {}, w;
  });
})(dayjs_min);
var moment = dayjs_min.exports;
function getFullDatetime(datetime) {
  return String(datetime).length < 2 ? `0${datetime}` : datetime;
}
function resetFullDatetime(datetime) {
  let curDatetime = "";
  if (datetime) {
    const splitDatetime = datetime.split(" ");
    const splitDate = splitDatetime[0].split("-");
    let year = "";
    let month = "";
    let day = "";
    let hour = "";
    let minute = "";
    let second = "";
    let millisecond = "";
    if (splitDate.length === 3) {
      year = splitDate[0];
      month = getFullDatetime(splitDate[1]);
      day = getFullDatetime(splitDate[2]);
      if (splitDatetime.length > 1 && splitDatetime[1]) {
        const splitMillisecond = splitDatetime[1].split(".");
        if (splitMillisecond.length === 2) {
          millisecond = splitMillisecond[1];
        }
        const splitTime = splitMillisecond[0].split(":");
        hour = getFullDatetime(splitTime[0]);
        if (splitTime.length > 1) {
          minute = getFullDatetime(splitTime[1]);
        }
        if (splitTime.length > 2) {
          second = getFullDatetime(splitTime[2]);
        }
      }
      curDatetime = `${year}-${month}-${day}`;
      if (hour) {
        curDatetime = `${curDatetime} ${hour}`;
        if (minute) {
          curDatetime = `${curDatetime}:${minute}`;
          if (second) {
            curDatetime = `${curDatetime}:${second}`;
            if (millisecond) {
              curDatetime = `${curDatetime}.${millisecond}`;
            }
          }
        }
      }
    }
  }
  return curDatetime;
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$5 = {
  name: "x-date",
  props: {
    isRange: Boolean,
    rangePosition: String,
    lang: Object,
    useHMS: String,
    datetime: String,
    year: [String, Number],
    month: [String, Number],
    date: [String, Number],
    hour: [String, Number],
    minute: [String, Number],
    second: [String, Number],
    limit: [Boolean, Object],
    isWeekBeginFromSunday: Boolean,
    isHideYearMonthArrow: Boolean
  },
  created() {
    this.initGroup();
  },
  data() {
    return {
      curYear: this.year,
      curMonth: this.month,
      curDate: this.date,
      formatGroup: {
        year: 0,
        month: 0,
        monthDays: 0,
        monthBeginDayOfWeek: 0,
        lastYear: 0,
        lastMonth: 0,
        lastMonthDays: 0,
        nextYear: 0,
        nextMonth: 0
      }
    };
  },
  watch: {
    year(newVal) {
      this.curYear = newVal;
      this.initGroup();
    },
    month(newVal) {
      this.curMonth = newVal;
      this.initGroup();
    }
  },
  computed: {
    curHour() {
      return getFullDatetime(this.hour);
    },
    curMinute() {
      return getFullDatetime(this.minute);
    },
    curSecond() {
      return getFullDatetime(this.second);
    },
    getShowYear() {
      return this.curYear;
    },
    getShowMonth() {
      return getFullDatetime(this.curMonth);
    },
    getWeekFormat() {
      let backData;
      if (this.isWeekBeginFromSunday) {
        backData = this.lang.week;
      } else {
        backData = [...this.lang.week.slice(1), this.lang.week[0]];
      }
      return backData;
    }
  },
  methods: {
    checkIsBeginEnds(date) {
      const curDate = resetFullDatetime(date);
      let backData = false;
      if (this.isRange) {
        switch (this.rangePosition) {
          case "begin":
            if (this.checkIsSelected(curDate)) {
              backData = true;
            }
            break;
          case "end":
            if (this.checkIsRangeEnds(curDate)) {
              backData = true;
            }
            break;
        }
      }
      return backData;
    },
    checkIsEndEnds(date) {
      const curDate = resetFullDatetime(date);
      let backData = false;
      if (this.isRange) {
        switch (this.rangePosition) {
          case "begin":
            if (this.checkIsRangeEnds(curDate)) {
              backData = true;
            }
            break;
          case "end":
            if (this.checkIsSelected(curDate)) {
              backData = true;
            }
            break;
        }
      }
      return backData;
    },
    initGroup() {
      let curValue = "";
      if (this.curMonth) {
        curValue = moment(`${this.curYear}-${getFullDatetime(this.curMonth)}`);
      } else {
        curValue = moment();
      }
      this.formatGroup.year = curValue.year();
      this.formatGroup.month = curValue.month() + 1;
      const month = `${this.formatGroup.year}-${getFullDatetime(this.formatGroup.month)}`;
      const monthFirstDay = moment(`${month}-01`);
      this.formatGroup.monthDays = moment(`${month}`).daysInMonth();
      this.formatGroup.monthBeginDayOfWeek = monthFirstDay.day();
      const nextMonth = moment(`${month}-01`).add(1, "month");
      this.formatGroup.nextYear = nextMonth.year();
      this.formatGroup.nextMonth = nextMonth.month() + 1;
      const lastMonth = moment(`${month}-01`).add(-1, "month");
      this.formatGroup.lastYear = lastMonth.year();
      this.formatGroup.lastMonth = lastMonth.month() + 1;
      this.formatGroup.lastMonthDays = moment(`${this.formatGroup.lastYear}-${getFullDatetime(this.formatGroup.lastMonth)}`).daysInMonth();
    },
    getMonthDays() {
      const dateData = [];
      let lastBeginDay = 0;
      if (this.isWeekBeginFromSunday) {
        if (this.formatGroup.monthBeginDayOfWeek > 0) {
          lastBeginDay = this.formatGroup.lastMonthDays - this.formatGroup.monthBeginDayOfWeek + 1;
        }
      } else if (this.formatGroup.monthBeginDayOfWeek === 0) {
        lastBeginDay = this.formatGroup.lastMonthDays - 5;
      } else if (this.formatGroup.monthBeginDayOfWeek > 1) {
        lastBeginDay = this.formatGroup.lastMonthDays - this.formatGroup.monthBeginDayOfWeek + 2;
      }
      if (lastBeginDay > 0) {
        for (let i = lastBeginDay; i <= this.formatGroup.lastMonthDays; i += 1) {
          dateData.push({
            last: true,
            year: this.formatGroup.lastYear,
            month: this.formatGroup.lastMonth,
            value: i
          });
        }
      }
      for (let i = 1; i <= this.formatGroup.monthDays; i += 1) {
        dateData.push({
          current: true,
          year: this.formatGroup.year,
          month: this.formatGroup.month,
          value: i
        });
      }
      const nextLeftDays = 42 - dateData.length;
      if (nextLeftDays > 0) {
        for (let i = 1; i <= nextLeftDays; i += 1) {
          dateData.push({
            next: true,
            year: this.formatGroup.nextYear,
            month: this.formatGroup.nextMonth,
            value: i
          });
        }
      }
      const backData = [];
      for (let i = 0; i <= 6; i += 1) {
        const begin = i * 7;
        backData.push(dateData.slice(begin, begin + 7));
      }
      return backData;
    },
    checkIsSelected(date) {
      const curDate = resetFullDatetime(date);
      let backData = false;
      if (moment(curDate).isSame(this.datetime, "date")) {
        backData = true;
      }
      return backData;
    },
    checkIsInRange(date) {
      const curDate = resetFullDatetime(date);
      let backData = false;
      if (this.isRange) {
        let curBegin;
        let curEnd;
        switch (this.rangePosition) {
          case "begin":
            curBegin = this.datetime;
            curEnd = this.limit.end;
            break;
          case "end":
          default:
            curBegin = this.limit.begin;
            curEnd = this.datetime;
            break;
        }
        backData = moment(curDate).isBetween(curBegin, curEnd, "date", "[]");
      }
      return backData;
    },
    checkIsRangeEnds(date) {
      const curDate = resetFullDatetime(date);
      let backData = false;
      if (this.isRange) {
        switch (this.rangePosition) {
          case "begin":
            if (moment(curDate).isSame(this.limit.end, "date")) {
              backData = true;
            }
            break;
          case "end":
          default:
            if (moment(curDate).isSame(this.limit.begin, "date")) {
              backData = true;
            }
            break;
        }
      }
      return backData;
    },
    checkDateIsLimit(date) {
      const curDate = resetFullDatetime(date);
      let backData = false;
      if (this.limit) {
        if (this.limit.begin) {
          if (moment(this.limit.begin).isValid()) {
            backData = moment(curDate).isBefore(this.limit.begin, "date");
          }
        }
        if (!backData && this.limit.end) {
          if (moment(this.limit.end).isValid()) {
            backData = moment(curDate).isAfter(this.limit.end, "date");
          }
        }
      }
      return backData;
    },
    checkYearMonthIsLimit(type) {
      let backData = false;
      if (this.limit && this.isHideYearMonthArrow) {
        let dateFormat = "year";
        switch (type) {
          case "beginMonth":
          case "endMonth":
            dateFormat = "month";
            break;
          case "beginYear":
          case "endYear":
            dateFormat = "year";
            break;
        }
        if (dateFormat) {
          const current = `${this.formatGroup.year}-${getFullDatetime(this.formatGroup.month)}`;
          switch (type) {
            case "beginMonth":
            case "beginYear":
              if (this.limit.begin) {
                const begin = moment(this.limit.begin);
                if (begin.isValid()) {
                  backData = moment(current).isSameOrBefore(this.limit.begin, dateFormat);
                }
              }
              break;
            case "endMonth":
            case "endYear":
              if (this.limit.end) {
                const end = moment(this.limit.end);
                if (end.isValid()) {
                  backData = moment(current).isSameOrAfter(this.limit.end, dateFormat);
                }
              }
              break;
          }
        }
      }
      return backData;
    },
    deductYear() {
      this.curYear -= 1;
      this.initGroup();
    },
    deductMonth() {
      this.curMonth -= 1;
      if (this.curMonth < 1) {
        this.curMonth = 12;
        this.curYear -= 1;
      }
      this.initGroup();
    },
    addYear() {
      this.curYear += 1;
      this.initGroup();
    },
    addMonth() {
      this.curMonth += 1;
      if (this.curMonth > 12) {
        this.curMonth = 1;
        this.curYear += 1;
      }
      this.initGroup();
    },
    selectDate(date) {
      const curDate = resetFullDatetime(date);
      if (!this.checkDateIsLimit(curDate)) {
        const splitData = curDate.split("-");
        const year = parseInt(String(splitData[0]), 10);
        const month = parseInt(String(splitData[1]), 10);
        const date2 = parseInt(String(splitData[2]), 10);
        this.emitTo("selectDate", {
          year,
          month,
          date: date2,
          hour: this.hour,
          minute: this.minute,
          second: this.second
        });
      }
    },
    showYear() {
      this.emitTo("showYear", {
        from: "date"
      });
    },
    showMonth() {
      this.emitTo("showMonth", {
        from: "date"
      });
    },
    showTime() {
      this.emitTo("showTime", {
        from: "time"
      });
    },
    emitTo(type, data) {
      this.$emit("handleDate", {
        type,
        data
      });
    }
  }
};
const _hoisted_1$5 = { class: "x-single" };
const _hoisted_2$3 = { class: "x-span" };
const _hoisted_3$3 = /* @__PURE__ */ createTextVNode("<< ");
const _hoisted_4$3 = /* @__PURE__ */ createTextVNode("< ");
const _hoisted_5$3 = /* @__PURE__ */ createTextVNode(" - ");
const _hoisted_6$3 = /* @__PURE__ */ createTextVNode("> ");
const _hoisted_7$3 = /* @__PURE__ */ createTextVNode(">>");
const _hoisted_8$2 = { class: "x-show" };
const _hoisted_9$1 = ["title", "onClick"];
const _hoisted_10$1 = { class: "x-minute" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    createElementVNode("div", _hoisted_2$3, [
      createElementVNode("div", null, [
        withDirectives(createElementVNode("a", {
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.deductYear(), ["stop", "prevent"]))
        }, [
          renderSlot(_ctx.$slots, "deductYear", {}, () => [
            _hoisted_3$3
          ])
        ], 512), [
          [vShow, !$options.checkYearMonthIsLimit("beginYear")]
        ]),
        withDirectives(createElementVNode("a", {
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $options.deductMonth(), ["stop", "prevent"]))
        }, [
          renderSlot(_ctx.$slots, "deductMonth", {}, () => [
            _hoisted_4$3
          ])
        ], 512), [
          [vShow, !$options.checkYearMonthIsLimit("beginMonth")]
        ])
      ]),
      createElementVNode("div", null, [
        createElementVNode("a", {
          onClick: _cache[2] || (_cache[2] = withModifiers((...args) => $options.showYear && $options.showYear(...args), ["stop", "prevent"]))
        }, toDisplayString($options.getShowYear), 1),
        _hoisted_5$3,
        createElementVNode("a", {
          onClick: _cache[3] || (_cache[3] = withModifiers((...args) => $options.showMonth && $options.showMonth(...args), ["stop", "prevent"]))
        }, toDisplayString($options.getShowMonth), 1)
      ]),
      createElementVNode("div", null, [
        withDirectives(createElementVNode("a", {
          onClick: _cache[4] || (_cache[4] = withModifiers(($event) => $options.addMonth(), ["stop", "prevent"]))
        }, [
          renderSlot(_ctx.$slots, "addMonth", {}, () => [
            _hoisted_6$3
          ])
        ], 512), [
          [vShow, !$options.checkYearMonthIsLimit("endMonth")]
        ]),
        withDirectives(createElementVNode("a", {
          onClick: _cache[5] || (_cache[5] = withModifiers(($event) => $options.addYear(), ["stop", "prevent"]))
        }, [
          renderSlot(_ctx.$slots, "addYear", {}, () => [
            _hoisted_7$3
          ])
        ], 512), [
          [vShow, !$options.checkYearMonthIsLimit("endYear")]
        ])
      ])
    ]),
    createElementVNode("div", _hoisted_8$2, [
      createElementVNode("table", null, [
        createElementVNode("thead", null, [
          createElementVNode("tr", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.getWeekFormat, (name, index2) => {
              return openBlock(), createElementBlock("th", {
                key: `week-${index2}`
              }, toDisplayString(name), 1);
            }), 128))
          ])
        ]),
        createElementVNode("tbody", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.getMonthDays(), (group, index2) => {
            return openBlock(), createElementBlock("tr", {
              key: `day-${index2}`
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(group, (datetime) => {
                return openBlock(), createElementBlock("td", {
                  title: `${datetime.year}-${datetime.month}-${datetime.value}`,
                  key: `${datetime.year}-${datetime.month}-${datetime.value}`,
                  onClick: withModifiers(($event) => $options.selectDate(`${datetime.year}-${datetime.month}-${datetime.value}`), ["stop"])
                }, [
                  createElementVNode("div", {
                    class: normalizeClass({
                      "x-not-current": datetime.last || datetime.next,
                      "x-current": datetime.current,
                      "x-limit": $options.checkDateIsLimit(`${datetime.year}-${datetime.month}-${datetime.value}`),
                      "x-in-range": $options.checkIsInRange(`${datetime.year}-${datetime.month}-${datetime.value}`),
                      "x-selected-bg-begin": $options.checkIsBeginEnds(`${datetime.year}-${datetime.month}-${datetime.value}`),
                      "x-selected-bg-end": $options.checkIsEndEnds(`${datetime.year}-${datetime.month}-${datetime.value}`)
                    })
                  }, [
                    createElementVNode("span", {
                      class: normalizeClass({
                        "x-selected": $options.checkIsSelected(`${datetime.year}-${datetime.month}-${datetime.value}`),
                        "x-range-ends": $options.checkIsRangeEnds(`${datetime.year}-${datetime.month}-${datetime.value}`)
                      })
                    }, toDisplayString(datetime.value), 3)
                  ], 2)
                ], 8, _hoisted_9$1);
              }), 128))
            ]);
          }), 128))
        ])
      ])
    ]),
    createElementVNode("div", _hoisted_10$1, [
      $props.useHMS ? (openBlock(), createElementBlock("span", {
        key: 0,
        onClick: _cache[6] || (_cache[6] = (...args) => $options.showTime && $options.showTime(...args))
      }, [
        renderSlot(_ctx.$slots, "showTime", {
          hour: $options.curHour,
          minute: $options.curMinute,
          second: $options.curSecond
        }, () => [
          createTextVNode(toDisplayString($options.curHour) + " : " + toDisplayString($options.curMinute) + " : " + toDisplayString($options.curSecond), 1)
        ])
      ])) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "selectTime")
    ])
  ]);
}
var XDate = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
var year_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = {
  name: "x-year",
  created() {
    this.getYears();
  },
  props: {
    year: Number,
    limit: [Boolean, Object],
    isHideYearMonthArrow: Boolean
  },
  watch: {
    year(newVal) {
      this.curYear = newVal;
      this.getYears();
    }
  },
  data() {
    return {
      curYear: this.year,
      years: []
    };
  },
  methods: {
    getYears() {
      const beginYear = parseInt(String(this.curYear / 10), 10) * 10;
      const endYear = beginYear + 10;
      const yearData = [];
      yearData.push({
        last: true,
        value: beginYear - 1
      });
      for (let i = beginYear; i <= endYear; i += 1) {
        yearData.push({
          current: true,
          value: i
        });
      }
      const backData = [];
      for (let i = 0; i <= 4; i += 1) {
        const begin = i * 3;
        backData.push(yearData.slice(begin, begin + 3));
      }
      this.years = backData;
    },
    checkYearIsSelected(curYear) {
      let backData = false;
      if (String(curYear) === String(this.year)) {
        backData = true;
      }
      return backData;
    },
    checkYearIsLimit(curYear) {
      let backData = false;
      if (this.limit) {
        if (this.limit.begin) {
          let begin = this.limit.begin.split("-");
          begin = parseInt(begin[0], 10);
          if (curYear < begin) {
            backData = true;
          }
        }
        if (this.limit.end) {
          let end = this.limit.end.split("-");
          end = parseInt(end[0], 10);
          if (curYear > end) {
            backData = true;
          }
        }
      }
      return backData;
    },
    checkYearMonthIsLimit(type) {
      let backData = false;
      if (this.limit && this.isHideYearMonthArrow) {
        const dateFormat = "YYYY";
        {
          switch (type) {
            case "beginYear":
              if (this.limit.begin) {
                const begin = moment(this.limit.begin, dateFormat);
                if (begin.isValid()) {
                  if (this.years[0][0].value <= begin.year()) {
                    backData = true;
                  }
                }
              }
              break;
            case "endYear":
              if (this.limit.end) {
                const end = moment(this.limit.end, dateFormat);
                if (end.isValid()) {
                  if (this.years[3][2].value >= end.year()) {
                    backData = true;
                  }
                }
              }
              break;
          }
        }
      }
      return backData;
    },
    deductYear() {
      this.curYear -= 10;
      this.getYears();
    },
    addYear() {
      this.curYear += 10;
      this.getYears();
    },
    refresh() {
      this.curYear = this.year;
      this.getYears();
    },
    selectYear(curYear) {
      if (!this.checkYearIsLimit(curYear)) {
        this.emitTo("selectYear", {
          year: curYear
        });
      }
    },
    emitTo(type, data) {
      this.$emit("handleDate", {
        type,
        data
      });
    }
  }
};
const _hoisted_1$4 = { class: "x-single x-year" };
const _hoisted_2$2 = { class: "x-span" };
const _hoisted_3$2 = /* @__PURE__ */ createTextVNode("<< ");
const _hoisted_4$2 = /* @__PURE__ */ createTextVNode(">>");
const _hoisted_5$2 = { class: "x-show" };
const _hoisted_6$2 = ["title"];
const _hoisted_7$2 = ["onClick"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createElementVNode("div", _hoisted_2$2, [
      createElementVNode("div", null, [
        withDirectives(createElementVNode("a", {
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.deductYear && $options.deductYear(...args), ["stop", "prevent"]))
        }, [
          renderSlot(_ctx.$slots, "deductYear", {}, () => [
            _hoisted_3$2
          ], true)
        ], 512), [
          [vShow, !$options.checkYearMonthIsLimit("beginYear")]
        ])
      ]),
      createElementVNode("div", null, [
        createElementVNode("a", {
          onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.refresh && $options.refresh(...args), ["stop", "prevent"]))
        }, toDisplayString($props.year), 1)
      ]),
      createElementVNode("div", null, [
        withDirectives(createElementVNode("a", {
          onClick: _cache[2] || (_cache[2] = withModifiers((...args) => $options.addYear && $options.addYear(...args), ["stop", "prevent"]))
        }, [
          renderSlot(_ctx.$slots, "addYear", {}, () => [
            _hoisted_4$2
          ], true)
        ], 512), [
          [vShow, !$options.checkYearMonthIsLimit("endYear")]
        ])
      ])
    ]),
    createElementVNode("div", _hoisted_5$2, [
      createElementVNode("table", null, [
        createElementVNode("tbody", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.years, (group, index2) => {
            return openBlock(), createElementBlock("tr", {
              key: `year-${index2}`
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(group, (curYear) => {
                return openBlock(), createElementBlock("td", {
                  class: normalizeClass({
                    "x-not-current": curYear.last || curYear.next,
                    "x-current": curYear.current,
                    "x-limit": $options.checkYearIsLimit(curYear.value)
                  }),
                  title: curYear.value,
                  key: `year-${curYear.value}`
                }, [
                  createElementVNode("span", {
                    class: normalizeClass({
                      "x-selected": $options.checkYearIsSelected(curYear.value)
                    }),
                    onClick: withModifiers(($event) => $options.selectYear(curYear.value), ["stop"])
                  }, toDisplayString(curYear.value), 11, _hoisted_7$2)
                ], 10, _hoisted_6$2);
              }), 128))
            ]);
          }), 128))
        ])
      ])
    ])
  ]);
}
var XYear = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-46f4598f"]]);
var month_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = {
  name: "x-month",
  created() {
    this.getMonths();
  },
  props: {
    lang: Object,
    year: [String, Number],
    month: [String, Number],
    limit: [Boolean, Object],
    isHideYearMonthArrow: Boolean
  },
  computed: {
    getShowYear() {
      return this.curYear;
    },
    getShowMonth() {
      return getFullDatetime(this.curMonth);
    }
  },
  watch: {
    year(newVal) {
      this.curYear = newVal;
      this.getMonths();
    },
    month(newVal) {
      this.curMonth = newVal;
      this.getMonths();
    },
    lang(newVal) {
      this.lang = newVal;
      this.getMonths();
    }
  },
  data() {
    return {
      curYear: this.year,
      curMonth: this.month,
      months: []
    };
  },
  methods: {
    getMonths() {
      const backData = [];
      for (let i = 0; i <= 4; i += 1) {
        const begin = i * 3;
        backData.push(this.lang.month.slice(begin, begin + 3));
      }
      this.months = backData;
    },
    getMonthIndex(curMonth) {
      return this.lang.month.findIndex((month) => String(month) === String(curMonth)) + 1;
    },
    checkMonthIsSelected(curMonth) {
      let backData = false;
      const current = `${this.curYear}-${getFullDatetime(this.getMonthIndex(curMonth))}`;
      const last = `${this.year}-${this.month}`;
      if (moment(current).isSame(last, "month")) {
        backData = true;
      }
      return backData;
    },
    checkMonthIsLimit(curMonth) {
      let backData = false;
      if (this.limit) {
        const current = `${this.curYear}-${getFullDatetime(this.getMonthIndex(curMonth))}`;
        if (this.limit.begin && moment(this.limit.begin).isValid()) {
          backData = moment(current).isBefore(this.limit.begin, "months");
        }
        if (!backData && this.limit.end && moment(this.limit.end).isValid()) {
          backData = moment(current).isAfter(this.limit.end, "months");
        }
      }
      return backData;
    },
    checkYearMonthIsLimit(type) {
      let backData = false;
      if (this.limit && this.isHideYearMonthArrow) {
        const dateFormat = "YYYY";
        {
          switch (type) {
            case "beginYear":
              if (this.limit.begin) {
                const begin = moment(this.limit.begin, dateFormat);
                if (begin.isValid()) {
                  if (this.getShowYear <= begin.year()) {
                    backData = true;
                  }
                }
              }
              break;
            case "endYear":
              if (this.limit.end) {
                const end = moment(this.limit.end, dateFormat);
                if (end.isValid()) {
                  if (this.getShowYear >= end.year()) {
                    backData = true;
                  }
                }
              }
              break;
          }
        }
      }
      return backData;
    },
    selectMonth(curMonth) {
      if (!this.checkMonthIsLimit(curMonth)) {
        this.emitTo("selectMonth", {
          year: this.curYear,
          month: this.getMonthIndex(curMonth)
        });
      }
    },
    deductYear() {
      this.curYear -= 1;
    },
    addYear() {
      this.curYear += 1;
    },
    refresh() {
      this.curYear = this.year;
      this.curMonth = this.month;
    },
    showYear() {
      this.emitTo("showYear", {
        from: "month"
      });
    },
    emitTo(type, data) {
      this.$emit("handleDate", {
        type,
        data
      });
    }
  }
};
const _hoisted_1$3 = { class: "x-single x-month" };
const _hoisted_2$1 = { class: "x-span" };
const _hoisted_3$1 = /* @__PURE__ */ createTextVNode("<< ");
const _hoisted_4$1 = /* @__PURE__ */ createTextVNode(" - ");
const _hoisted_5$1 = /* @__PURE__ */ createTextVNode(">>");
const _hoisted_6$1 = { class: "x-show" };
const _hoisted_7$1 = ["title"];
const _hoisted_8$1 = ["onClick"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createElementVNode("div", _hoisted_2$1, [
      createElementVNode("div", null, [
        withDirectives(createElementVNode("a", {
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.deductYear && $options.deductYear(...args), ["stop", "prevent"]))
        }, [
          renderSlot(_ctx.$slots, "deductYear", {}, () => [
            _hoisted_3$1
          ], true)
        ], 512), [
          [vShow, !$options.checkYearMonthIsLimit("beginYear")]
        ])
      ]),
      createElementVNode("div", null, [
        createElementVNode("a", {
          onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.showYear && $options.showYear(...args), ["stop", "prevent"]))
        }, toDisplayString($options.getShowYear), 1),
        _hoisted_4$1,
        createElementVNode("a", {
          onClick: _cache[2] || (_cache[2] = withModifiers((...args) => $options.refresh && $options.refresh(...args), ["stop", "prevent"]))
        }, toDisplayString($options.getShowMonth), 1)
      ]),
      createElementVNode("div", null, [
        withDirectives(createElementVNode("a", {
          onClick: _cache[3] || (_cache[3] = withModifiers((...args) => $options.addYear && $options.addYear(...args), ["stop", "prevent"]))
        }, [
          renderSlot(_ctx.$slots, "addYear", {}, () => [
            _hoisted_5$1
          ], true)
        ], 512), [
          [vShow, !$options.checkYearMonthIsLimit("endYear")]
        ])
      ])
    ]),
    createElementVNode("div", _hoisted_6$1, [
      createElementVNode("table", null, [
        createElementVNode("tbody", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.months, (group, index2) => {
            return openBlock(), createElementBlock("tr", {
              key: `month-${index2}`
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(group, (month) => {
                return openBlock(), createElementBlock("td", {
                  class: normalizeClass({
                    "x-limit": $options.checkMonthIsLimit(month)
                  }),
                  title: `${$data.curYear}-${month}`,
                  key: `month-${$data.curYear}-${month}`
                }, [
                  createElementVNode("span", {
                    class: normalizeClass({
                      "x-selected": $options.checkMonthIsSelected(month)
                    }),
                    onClick: withModifiers(($event) => $options.selectMonth(month), ["stop"])
                  }, toDisplayString(month), 11, _hoisted_8$1)
                ], 10, _hoisted_7$1);
              }), 128))
            ]);
          }), 128))
        ])
      ])
    ])
  ]);
}
var XMonth = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-174c67e8"]]);
const _sfc_main$2 = {
  name: "x-time",
  created() {
    if (this.useHMS) {
      this.getLimitTimes();
    }
  },
  props: {
    popoverHMS: Boolean,
    isRange: Boolean,
    rangePosition: String,
    datetime: String,
    year: Number,
    month: Number,
    date: Number,
    hour: Number,
    minute: Number,
    second: Number,
    useHMS: String,
    limit: [Boolean, Object]
  },
  computed: {
    hours() {
      const backData = [];
      for (let i = 0; i <= 23; i += 1) {
        backData.push(i);
      }
      return backData;
    },
    minutes() {
      const backData = [];
      for (let i = 0; i <= 59; i += 1) {
        backData.push(i);
      }
      return backData;
    },
    seconds() {
      const backData = [];
      for (let i = 0; i <= 59; i += 1) {
        backData.push(i);
      }
      return backData;
    }
  },
  watch: {
    limit: {
      handler(newVal, oldVal) {
        if (this.useHMS) {
          if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
            this.limit = newVal;
          }
          this.getLimitTimes();
        }
      },
      deep: true
    },
    hour(newVal) {
      this.curHour = newVal;
    },
    minute(newVal) {
      this.curMinute = newVal;
    },
    second(newVal) {
      this.curSecond = newVal;
    }
  },
  data() {
    return {
      curHour: this.hour,
      curMinute: this.minute,
      curSecond: this.second,
      hourLimit: {
        begin: 0,
        end: 23
      },
      minuteLimit: {
        begin: 0,
        end: 59
      },
      secondLimit: {
        begin: 0,
        end: 59
      }
    };
  },
  methods: {
    getShowValue(value) {
      return value < 10 ? `0${value}` : value;
    },
    getLimitTimes() {
      const limitBegin = this.limit.begin;
      const limitEnd = this.limit.end;
      let hourBegin = 0;
      let hourEnd = 23;
      let minuteBegin = 0;
      let minuteEnd = 59;
      let secondBegin = 0;
      let secondEnd = 59;
      if (limitBegin || limitEnd) {
        const curDay = moment(this.datetime).format("YYYY-MM-DD");
        const curMoment = moment(curDay);
        if (limitBegin) {
          const curDayLimitBegin = moment(limitBegin).format("YYYY-MM-DD");
          const beginDiff = moment(curDayLimitBegin).diff(curMoment, "days");
          if (beginDiff === 0) {
            const beginMoment = moment(limitBegin);
            hourBegin = beginMoment.hour();
            if (hourBegin === this.curHour) {
              minuteBegin = beginMoment.minute();
              secondBegin = beginMoment.second();
            }
          }
        }
        if (limitEnd) {
          const curDayLimitEnd = moment(limitEnd).format("YYYY-MM-DD");
          const endDiff = moment(curDayLimitEnd).diff(curMoment, "days");
          if (endDiff === 0) {
            const endMoment = moment(limitEnd);
            hourEnd = endMoment.hour();
            if (hourEnd === this.curHour) {
              minuteEnd = endMoment.minute();
              secondEnd = endMoment.second();
            }
          }
        }
      }
      this.hourLimit.begin = hourBegin;
      this.hourLimit.end = hourEnd;
      if (this.useHMS === "minute") {
        this.minuteLimit.begin = minuteBegin;
        this.minuteLimit.end = minuteEnd;
      }
      if (this.useHMS === "second") {
        this.secondLimit.begin = secondBegin;
        this.secondLimit.end = secondEnd;
      }
      if (this.curMinute < this.minuteLimit.begin || this.curMinute > this.minuteLimit.end) {
        switch (this.rangePosition) {
          case "end":
            this.curMinute = this.minuteLimit.end;
            break;
          case "begin":
          default:
            this.curMinute = this.minuteLimit.begin;
            break;
        }
      }
      if (this.curSecond < this.secondLimit.begin || this.curSecond > this.secondLimit.end) {
        switch (this.rangePosition) {
          case "end":
            this.curSecond = this.secondLimit.end;
            break;
          case "begin":
          default:
            this.curSecond = this.secondLimit.begin;
            break;
        }
      }
    },
    refresh() {
      this.curHour = this.hour;
      this.curMinute = this.minute;
      this.curSecond = this.second;
    },
    cancelTime() {
      this.emitTo("cancelTime");
    },
    selectHour(e) {
      this.getSelectValue(e, "hour");
    },
    selectMinute(e) {
      this.getSelectValue(e, "minute");
    },
    selectSecond(e) {
      this.getSelectValue(e, "second");
    },
    getSelectValue(e, type) {
      const targetClass = e.target.getAttribute("class");
      if (!(targetClass && targetClass.indexOf("x-limit") > -1)) {
        const value = parseInt(e.target.getAttribute("value"), 10);
        switch (type) {
          case "second":
            this.curSecond = value;
            this.getLimitTimes();
            break;
          case "minute":
            this.curMinute = value;
            this.getLimitTimes();
            break;
          case "hour":
          default:
            this.curHour = value;
            break;
        }
        if (this.popoverHMS) {
          this.selectTime();
        }
      }
    },
    selectTime() {
      this.emitTo("selectTime", {
        hour: this.curHour,
        minute: this.curMinute,
        second: this.curSecond
      });
    },
    emitTo(type, data) {
      this.$emit("handleDate", {
        type,
        data
      });
    }
  }
};
const _hoisted_1$2 = { class: "x-single x-time" };
const _hoisted_2 = {
  key: 0,
  class: "x-span"
};
const _hoisted_3 = /* @__PURE__ */ createElementVNode("div", null, null, -1);
const _hoisted_4 = /* @__PURE__ */ createElementVNode("div", null, null, -1);
const _hoisted_5 = { class: "x-show-time" };
const _hoisted_6 = ["value"];
const _hoisted_7 = ["value"];
const _hoisted_8 = { key: 0 };
const _hoisted_9 = ["value"];
const _hoisted_10 = {
  key: 1,
  class: "x-time-confirm"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    !$props.popoverHMS ? (openBlock(), createElementBlock("div", _hoisted_2, [
      _hoisted_3,
      createElementVNode("div", null, [
        createElementVNode("a", {
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.refresh && $options.refresh(...args), ["stop", "prevent"]))
        }, toDisplayString($props.year) + " - " + toDisplayString($props.month) + " - " + toDisplayString($props.date), 1)
      ]),
      _hoisted_4
    ])) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_5, [
      createElementVNode("div", null, [
        createElementVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.hours, (value, index2) => {
            return openBlock(), createElementBlock("li", {
              key: `hour-${index2}`
            }, [
              createElementVNode("div", {
                class: normalizeClass({
                  "x-time-selected": value === $data.curHour,
                  "x-limit": value < $data.hourLimit.begin || value > $data.hourLimit.end
                }),
                value,
                onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.selectHour && $options.selectHour(...args), ["stop"]))
              }, toDisplayString($options.getShowValue(value)), 11, _hoisted_6)
            ]);
          }), 128))
        ])
      ]),
      createElementVNode("div", null, [
        createElementVNode("ul", {
          onClick: _cache[3] || (_cache[3] = (...args) => $options.selectMinute && $options.selectMinute(...args))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.minutes, (value, index2) => {
            return openBlock(), createElementBlock("li", {
              key: $props.minute - `${index2}`
            }, [
              createElementVNode("div", {
                class: normalizeClass({
                  "x-time-selected": value === $data.curMinute,
                  "x-limit": $props.useHMS === "hour" || value < $data.minuteLimit.begin || value > $data.minuteLimit.end
                }),
                value,
                onClick: _cache[2] || (_cache[2] = withModifiers((...args) => $options.selectMinute && $options.selectMinute(...args), ["stop"]))
              }, toDisplayString($options.getShowValue(value)), 11, _hoisted_7)
            ]);
          }), 128))
        ])
      ]),
      $props.useHMS === "second" ? (openBlock(), createElementBlock("div", _hoisted_8, [
        createElementVNode("ul", {
          onClick: _cache[5] || (_cache[5] = (...args) => $options.selectSecond && $options.selectSecond(...args))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.seconds, (value, index2) => {
            return openBlock(), createElementBlock("li", {
              key: `second-${index2}`
            }, [
              createElementVNode("div", {
                value,
                class: normalizeClass({
                  "x-time-selected": value === $data.curSecond,
                  "x-limit": $props.useHMS !== "second" || value < $data.secondLimit.begin || value > $data.secondLimit.end
                }),
                onClick: _cache[4] || (_cache[4] = withModifiers((...args) => $options.selectSecond && $options.selectSecond(...args), ["stop"]))
              }, toDisplayString($options.getShowValue(value)), 11, _hoisted_9)
            ]);
          }), 128))
        ])
      ])) : createCommentVNode("", true)
    ]),
    !$props.popoverHMS ? (openBlock(), createElementBlock("div", _hoisted_10, [
      createElementVNode("button", {
        onClick: _cache[6] || (_cache[6] = (...args) => $options.cancelTime && $options.cancelTime(...args))
      }, "cancel"),
      createElementVNode("button", {
        onClick: _cache[7] || (_cache[7] = (...args) => $options.selectTime && $options.selectTime(...args))
      }, "ok")
    ])) : createCommentVNode("", true)
  ]);
}
var XTime = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var single_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = {
  name: "x-single",
  components: {
    XYear,
    XMonth,
    XDate,
    XTime
  },
  created() {
    this.initYearMonth();
  },
  mounted() {
    this.listenPopover();
  },
  props: {
    isRange: Boolean,
    rangePosition: String,
    lang: Object,
    useHMS: String,
    popoverHMS: Boolean,
    datetime: String,
    dateFormat: String,
    limit: [Boolean, Object],
    isWeekBeginFromSunday: Boolean,
    isHideYearMonthArrow: Boolean
  },
  watch: {
    datetime(newVal) {
      this.curDatetime = newVal;
      this.initYearMonth();
    },
    useHMS(newVal) {
      if (newVal) {
        this.listenPopover();
      }
    }
  },
  data() {
    return {
      curDatetime: this.datetime,
      showType: "date",
      showPopoverTime: false,
      yearFrom: "date",
      curYear: 2e3,
      curMonth: 1,
      curDate: 1,
      curHour: 0,
      curMinute: 0,
      curSecond: 0
    };
  },
  methods: {
    listenPopover() {
      if (this.popoverHMS) {
        this.$nextTick(() => {
          document.addEventListener("click", () => {
            this.showPopoverTime = false;
          });
          document.querySelectorAll(".x-minute span").forEach((dom) => {
            dom.addEventListener("click", (e) => {
              e.stopPropagation();
            });
          });
          document.querySelectorAll(".x-show-time div").forEach((dom) => {
            dom.addEventListener("click", (e) => {
              e.stopPropagation();
            });
          });
        });
      }
    },
    showDate() {
      this.showType = "date";
      this.listenPopover();
    },
    initYearMonth() {
      let curValue;
      if (this.datetime && moment(this.datetime).isValid()) {
        curValue = moment(this.datetime);
      } else {
        curValue = moment();
      }
      if (this.isRange && this.rangePosition === "end" && this.useHMS) {
        curValue = curValue.endOf(this.useHMS);
      }
      this.curYear = curValue.year();
      this.curMonth = curValue.month() + 1;
      this.curDate = curValue.date();
      this.curHour = curValue.hour();
      this.curMinute = curValue.minute();
      this.curSecond = curValue.second();
      this.curDatetime = this.setCurrentDatetime();
    },
    setCurrentDatetime() {
      let datetime = `${this.curYear}-${getFullDatetime(this.curMonth)}-${getFullDatetime(this.curDate)}`;
      if (this.useHMS) {
        datetime = `${datetime} ${getFullDatetime(this.curHour)}:${getFullDatetime(this.curMinute)}:${getFullDatetime(this.curSecond)}`;
      }
      return moment(datetime).format(this.dateFormat);
    },
    handleDate(emitDate) {
      const { type, data } = emitDate;
      switch (type) {
        case "selectYear":
          this.curYear = data.year;
          this.showType = this.yearFrom;
          if (this.yearFrom === "date") {
            this.showDate();
          }
          break;
        case "selectMonth":
          this.curYear = data.year;
          this.curMonth = data.month;
          this.showDate();
          break;
        case "selectTime":
          this.curMinute = data.minute;
          this.curHour = data.hour;
          this.curSecond = data.second;
          if (!this.popoverHMS) {
            this.showDate();
          }
          this.emitTo(type, {
            position: this.rangePosition,
            datetime: this.setCurrentDatetime()
          });
          break;
        case "cancelTime":
          this.showDate();
          break;
        case "selectDate":
          this.curYear = data.year;
          this.curMonth = data.month;
          this.curDate = data.date;
          this.curHour = data.hour;
          this.curMinute = data.minute;
          this.curSecond = data.second;
          this.emitTo(type, {
            position: this.rangePosition,
            datetime: this.setCurrentDatetime()
          });
          break;
        case "showYear":
          this.showType = "year";
          this.yearFrom = data.from || "date";
          break;
        case "showMonth":
          this.showType = "month";
          this.yearFrom = "date";
          break;
        case "showTime":
          if (!this.popoverHMS) {
            this.showType = "time";
          } else {
            this.showPopoverTime = true;
          }
          this.yearFrom = "date";
          break;
      }
    },
    emitTo(type, data) {
      this.$emit("handleSingle", {
        type,
        data
      });
    }
  }
};
const _hoisted_1$1 = {
  key: 0,
  class: "x-minute-show"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_x_year = resolveComponent("x-year");
  const _component_x_month = resolveComponent("x-month");
  const _component_x_time = resolveComponent("x-time");
  const _component_x_date = resolveComponent("x-date");
  return openBlock(), createElementBlock("div", null, [
    $data.showType === "year" ? (openBlock(), createBlock(_component_x_year, {
      key: 0,
      year: $data.curYear,
      limit: $props.limit,
      "is-hide-year-month-arrow": $props.isHideYearMonthArrow,
      onHandleDate: $options.handleDate
    }, {
      deductYear: withCtx(() => [
        renderSlot(_ctx.$slots, "deductYear", {}, void 0, true)
      ]),
      addYear: withCtx(() => [
        renderSlot(_ctx.$slots, "addYear", {}, void 0, true)
      ]),
      _: 3
    }, 8, ["year", "limit", "is-hide-year-month-arrow", "onHandleDate"])) : $data.showType === "month" ? (openBlock(), createBlock(_component_x_month, {
      key: 1,
      lang: $props.lang,
      year: $data.curYear,
      month: $data.curMonth,
      limit: $props.limit,
      "is-hide-year-month-arrow": $props.isHideYearMonthArrow,
      onHandleDate: $options.handleDate
    }, {
      deductYear: withCtx(() => [
        renderSlot(_ctx.$slots, "deductYear", {}, void 0, true)
      ]),
      addYear: withCtx(() => [
        renderSlot(_ctx.$slots, "addYear", {}, void 0, true)
      ]),
      _: 3
    }, 8, ["lang", "year", "month", "limit", "is-hide-year-month-arrow", "onHandleDate"])) : $data.showType === "time" && !$props.popoverHMS ? (openBlock(), createBlock(_component_x_time, {
      key: 2,
      "is-range": $props.isRange,
      "range-position": $props.rangePosition,
      datetime: $data.curDatetime,
      year: $data.curYear,
      month: $data.curMonth,
      date: $data.curDate,
      hour: $data.curHour,
      minute: $data.curMinute,
      second: $data.curSecond,
      limit: $props.limit,
      "use-h-m-s": $props.useHMS,
      "popover-h-m-s": $props.popoverHMS,
      onHandleDate: $options.handleDate
    }, null, 8, ["is-range", "range-position", "datetime", "year", "month", "date", "hour", "minute", "second", "limit", "use-h-m-s", "popover-h-m-s", "onHandleDate"])) : (openBlock(), createBlock(_component_x_date, {
      key: 3,
      "is-range": $props.isRange,
      "range-position": $props.rangePosition,
      lang: $props.lang,
      useHMS: $props.useHMS,
      datetime: $data.curDatetime,
      year: $data.curYear,
      month: $data.curMonth,
      date: $data.curDate,
      hour: $data.curHour,
      minute: $data.curMinute,
      second: $data.curSecond,
      limit: $props.limit,
      isWeekBeginFromSunday: $props.isWeekBeginFromSunday,
      "is-hide-year-month-arrow": $props.isHideYearMonthArrow,
      onHandleDate: $options.handleDate
    }, {
      deductYear: withCtx(() => [
        renderSlot(_ctx.$slots, "deductYear", {}, void 0, true)
      ]),
      deductMonth: withCtx(() => [
        renderSlot(_ctx.$slots, "deductMonth", {}, void 0, true)
      ]),
      addYear: withCtx(() => [
        renderSlot(_ctx.$slots, "addYear", {}, void 0, true)
      ]),
      addMonth: withCtx(() => [
        renderSlot(_ctx.$slots, "addMonth", {}, void 0, true)
      ]),
      showTime: withCtx(({ hour, minute, second }) => [
        renderSlot(_ctx.$slots, "showTime", {
          hour,
          minute,
          second
        }, void 0, true)
      ]),
      selectTime: withCtx(() => [
        $props.popoverHMS ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1$1, [
          createVNode(_component_x_time, {
            "is-range": $props.isRange,
            "range-position": $props.rangePosition,
            datetime: $data.curDatetime,
            year: $data.curYear,
            month: $data.curMonth,
            date: $data.curDate,
            hour: $data.curHour,
            minute: $data.curMinute,
            second: $data.curSecond,
            limit: $props.limit,
            "use-h-m-s": $props.useHMS,
            "popover-h-m-s": $props.popoverHMS,
            onHandleDate: $options.handleDate
          }, null, 8, ["is-range", "range-position", "datetime", "year", "month", "date", "hour", "minute", "second", "limit", "use-h-m-s", "popover-h-m-s", "onHandleDate"])
        ], 512)), [
          [vShow, $data.showPopoverTime]
        ]) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["is-range", "range-position", "lang", "useHMS", "datetime", "year", "month", "date", "hour", "minute", "second", "limit", "isWeekBeginFromSunday", "is-hide-year-month-arrow", "onHandleDate"]))
  ]);
}
var XSingle = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-6a5d562c"]]);
var zhCn = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(dayjs_min.exports);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && typeof e2 == "object" && "default" in e2 ? e2 : { default: e2 };
    }
    var t = _(e), d = { name: "zh-cn", weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"), weekdaysShort: "\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"), weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"), months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), ordinal: function(e2, _2) {
      return _2 === "W" ? e2 + "\u5468" : e2 + "\u65E5";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206", LLLL: "YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206", l: "YYYY/M/D", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm" }, relativeTime: { future: "%s\u5185", past: "%s\u524D", s: "\u51E0\u79D2", m: "1 \u5206\u949F", mm: "%d \u5206\u949F", h: "1 \u5C0F\u65F6", hh: "%d \u5C0F\u65F6", d: "1 \u5929", dd: "%d \u5929", M: "1 \u4E2A\u6708", MM: "%d \u4E2A\u6708", y: "1 \u5E74", yy: "%d \u5E74" }, meridiem: function(e2, _2) {
      var t2 = 100 * e2 + _2;
      return t2 < 600 ? "\u51CC\u6668" : t2 < 900 ? "\u65E9\u4E0A" : t2 < 1100 ? "\u4E0A\u5348" : t2 < 1300 ? "\u4E2D\u5348" : t2 < 1800 ? "\u4E0B\u5348" : "\u665A\u4E0A";
    } };
    return t.default.locale(d, null, true), d;
  });
})(zhCn);
var en = { exports: {} };
(function(module, exports) {
  !function(e, n) {
    module.exports = n();
  }(commonjsGlobal, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") };
  });
})(en);
var ja = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(dayjs_min.exports);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && typeof e2 == "object" && "default" in e2 ? e2 : { default: e2 };
    }
    var t = _(e), d = { name: "ja", weekdays: "\u65E5\u66DC\u65E5_\u6708\u66DC\u65E5_\u706B\u66DC\u65E5_\u6C34\u66DC\u65E5_\u6728\u66DC\u65E5_\u91D1\u66DC\u65E5_\u571F\u66DC\u65E5".split("_"), weekdaysShort: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"), weekdaysMin: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"), months: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), ordinal: function(e2) {
      return e2 + "\u65E5";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm", LLLL: "YYYY\u5E74M\u6708D\u65E5 dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5(ddd) HH:mm" }, meridiem: function(e2) {
      return e2 < 12 ? "\u5348\u524D" : "\u5348\u5F8C";
    }, relativeTime: { future: "%s\u5F8C", past: "%s\u524D", s: "\u6570\u79D2", m: "1\u5206", mm: "%d\u5206", h: "1\u6642\u9593", hh: "%d\u6642\u9593", d: "1\u65E5", dd: "%d\u65E5", M: "1\u30F6\u6708", MM: "%d\u30F6\u6708", y: "1\u5E74", yy: "%d\u5E74" } };
    return t.default.locale(d, null, true), d;
  });
})(ja);
var ko = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(dayjs_min.exports);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && typeof e2 == "object" && "default" in e2 ? e2 : { default: e2 };
    }
    var d = _(e), t = { name: "ko", weekdays: "\uC77C\uC694\uC77C_\uC6D4\uC694\uC77C_\uD654\uC694\uC77C_\uC218\uC694\uC77C_\uBAA9\uC694\uC77C_\uAE08\uC694\uC77C_\uD1A0\uC694\uC77C".split("_"), weekdaysShort: "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"), weekdaysMin: "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"), months: "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"), monthsShort: "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"), ordinal: function(e2) {
      return e2;
    }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY\uB144 MMMM D\uC77C", LLL: "YYYY\uB144 MMMM D\uC77C A h:mm", LLLL: "YYYY\uB144 MMMM D\uC77C dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYY\uB144 MMMM D\uC77C", lll: "YYYY\uB144 MMMM D\uC77C A h:mm", llll: "YYYY\uB144 MMMM D\uC77C dddd A h:mm" }, meridiem: function(e2) {
      return e2 < 12 ? "\uC624\uC804" : "\uC624\uD6C4";
    }, relativeTime: { future: "%s \uD6C4", past: "%s \uC804", s: "\uBA87 \uCD08", m: "1\uBD84", mm: "%d\uBD84", h: "\uD55C \uC2DC\uAC04", hh: "%d\uC2DC\uAC04", d: "\uD558\uB8E8", dd: "%d\uC77C", M: "\uD55C \uB2EC", MM: "%d\uB2EC", y: "\uC77C \uB144", yy: "%d\uB144" } };
    return d.default.locale(t, null, true), t;
  });
})(ko);
var localeData$1 = { exports: {} };
(function(module, exports) {
  !function(n, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    return function(n, e, t) {
      var r = e.prototype, o = function(n2) {
        return n2 && (n2.indexOf ? n2 : n2.s);
      }, u = function(n2, e2, t2, r2, u2) {
        var i2 = n2.name ? n2 : n2.$locale(), a2 = o(i2[e2]), s2 = o(i2[t2]), f = a2 || s2.map(function(n3) {
          return n3.substr(0, r2);
        });
        if (!u2)
          return f;
        var d = i2.weekStart;
        return f.map(function(n3, e3) {
          return f[(e3 + (d || 0)) % 7];
        });
      }, i = function() {
        return t.Ls[t.locale()];
      }, a = function(n2, e2) {
        return n2.formats[e2] || function(n3) {
          return n3.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(n4, e3, t2) {
            return e3 || t2.slice(1);
          });
        }(n2.formats[e2.toUpperCase()]);
      }, s = function() {
        var n2 = this;
        return { months: function(e2) {
          return e2 ? e2.format("MMMM") : u(n2, "months");
        }, monthsShort: function(e2) {
          return e2 ? e2.format("MMM") : u(n2, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return n2.$locale().weekStart || 0;
        }, weekdays: function(e2) {
          return e2 ? e2.format("dddd") : u(n2, "weekdays");
        }, weekdaysMin: function(e2) {
          return e2 ? e2.format("dd") : u(n2, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(e2) {
          return e2 ? e2.format("ddd") : u(n2, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(e2) {
          return a(n2.$locale(), e2);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      r.localeData = function() {
        return s.bind(this)();
      }, t.localeData = function() {
        var n2 = i();
        return { firstDayOfWeek: function() {
          return n2.weekStart || 0;
        }, weekdays: function() {
          return t.weekdays();
        }, weekdaysShort: function() {
          return t.weekdaysShort();
        }, weekdaysMin: function() {
          return t.weekdaysMin();
        }, months: function() {
          return t.months();
        }, monthsShort: function() {
          return t.monthsShort();
        }, longDateFormat: function(e2) {
          return a(n2, e2);
        }, meridiem: n2.meridiem, ordinal: n2.ordinal };
      }, t.months = function() {
        return u(i(), "months");
      }, t.monthsShort = function() {
        return u(i(), "monthsShort", "months", 3);
      }, t.weekdays = function(n2) {
        return u(i(), "weekdays", null, null, n2);
      }, t.weekdaysShort = function(n2) {
        return u(i(), "weekdaysShort", "weekdays", 3, n2);
      }, t.weekdaysMin = function(n2) {
        return u(i(), "weekdaysMin", "weekdays", 2, n2);
      };
    };
  });
})(localeData$1);
var localeData = localeData$1.exports;
var utc$1 = { exports: {} };
(function(module, exports) {
  !function(t, i) {
    module.exports = i();
  }(commonjsGlobal, function() {
    var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
    return function(s, f, n) {
      var u = f.prototype;
      n.utc = function(t2) {
        var i2 = { date: t2, utc: true, args: arguments };
        return new f(i2);
      }, u.utc = function(i2) {
        var e2 = n(this.toDate(), { locale: this.$L, utc: true });
        return i2 ? e2.add(this.utcOffset(), t) : e2;
      }, u.local = function() {
        return n(this.toDate(), { locale: this.$L, utc: false });
      };
      var o = u.parse;
      u.parse = function(t2) {
        t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), o.call(this, t2);
      };
      var r = u.init;
      u.init = function() {
        if (this.$u) {
          var t2 = this.$d;
          this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
        } else
          r.call(this);
      };
      var a = u.utcOffset;
      u.utcOffset = function(s2, f2) {
        var n2 = this.$utils().u;
        if (n2(s2))
          return this.$u ? 0 : n2(this.$offset) ? a.call(this) : this.$offset;
        if (typeof s2 == "string" && (s2 = function(t2) {
          t2 === void 0 && (t2 = "");
          var s3 = t2.match(i);
          if (!s3)
            return null;
          var f3 = ("" + s3[0]).match(e) || ["-", 0, 0], n3 = f3[0], u3 = 60 * +f3[1] + +f3[2];
          return u3 === 0 ? 0 : n3 === "+" ? u3 : -u3;
        }(s2), s2 === null))
          return this;
        var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2, o2 = this;
        if (f2)
          return o2.$offset = u2, o2.$u = s2 === 0, o2;
        if (s2 !== 0) {
          var r2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (o2 = this.local().add(u2 + r2, t)).$offset = u2, o2.$x.$localOffset = r2;
        } else
          o2 = this.utc();
        return o2;
      };
      var h = u.format;
      u.format = function(t2) {
        var i2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return h.call(this, i2);
      }, u.valueOf = function() {
        var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || new Date().getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * t2;
      }, u.isUTC = function() {
        return !!this.$u;
      }, u.toISOString = function() {
        return this.toDate().toISOString();
      }, u.toString = function() {
        return this.toDate().toUTCString();
      };
      var l = u.toDate;
      u.toDate = function(t2) {
        return t2 === "s" && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
      };
      var c = u.diff;
      u.diff = function(t2, i2, e2) {
        if (t2 && this.$u === t2.$u)
          return c.call(this, t2, i2, e2);
        var s2 = this.local(), f2 = n(t2).local();
        return c.call(s2, f2, i2, e2);
      };
    };
  });
})(utc$1);
var utc = utc$1.exports;
var isBetween$1 = { exports: {} };
(function(module, exports) {
  !function(e, i) {
    module.exports = i();
  }(commonjsGlobal, function() {
    return function(e, i, t) {
      i.prototype.isBetween = function(e2, i2, s, f) {
        var n = t(e2), o = t(i2), r = (f = f || "()")[0] === "(", u = f[1] === ")";
        return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
      };
    };
  });
})(isBetween$1);
var isBetween = isBetween$1.exports;
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
moment.extend(localeData);
moment.extend(utc);
moment.extend(isBetween);
const _sfc_main = {
  name: "x-datetime-picker",
  components: {
    XSingle
  },
  created() {
    moment.locale(this.language);
    this.getLan();
    this.initDatetime(this.datetime);
  },
  watch: {
    datetime(newVal) {
      this.initDatetime(newVal);
    },
    language(newVal) {
      moment.locale(newVal);
      this.getLan();
    },
    useHMS(newVal) {
      this.initDatetime(this.datetime);
    },
    currentUtc(newVal) {
      this.initDatetime(this.datetime);
    }
  },
  props: {
    isRange: Boolean,
    language: String,
    useHMS: String,
    popoverHMS: Boolean,
    datetime: [String, Array],
    limit: [Boolean, Object],
    chooseSpan: [String, Number],
    isWeekBeginFromSunday: Boolean,
    isHideYearMonthArrow: Boolean,
    currentUtc: {
      type: [String, Number],
      default: ""
    }
  },
  data() {
    return {
      standardFormat: "YYYY-MM-DD HH:mm:ss",
      beginDatetime: "",
      endDatetime: "",
      utc: "",
      limitDatetime: {
        begin: [],
        end: []
      },
      lang: {
        month: [],
        week: []
      }
    };
  },
  computed: {
    getDateFormat() {
      let backData = "";
      switch (this.useHMS) {
        case "hour":
          backData = " HH";
          break;
        case "minute":
          backData = " HH:mm";
          break;
        case "second":
          backData = " HH:mm:ss";
          break;
      }
      return `YYYY-MM-DD${backData}`;
    },
    getLimitDatetime() {
      const backData = {
        begin: "",
        end: ""
      };
      if (this.limit) {
        if (this.limit.begin !== void 0 && this.limit.begin !== "") {
          if (this.limit.begin === "now") {
            backData.begin = this.getUTCMomentIns().format(this.standardFormat);
          } else {
            if (!Number.isNaN(Number(this.limit.begin))) {
              backData.begin = this.getUTCMomentIns().add(this.limit.begin, "days").startOf("date").format(this.standardFormat);
            } else if (this.checkDatetimeIsValid(this.limit.begin)) {
              backData.begin = this.formatHMSDatetime("begin", this.limit.begin);
            }
          }
        }
        if (this.limit.end !== void 0 && this.limit.end !== "") {
          if (this.limit.end === "now") {
            backData.end = this.getUTCMomentIns().format(this.standardFormat);
          } else {
            if (!Number.isNaN(Number(this.limit.end))) {
              backData.end = this.getUTCMomentIns().add(this.limit.end, "days").endOf("date").format(this.standardFormat);
            } else if (this.checkDatetimeIsValid(this.limit.end)) {
              backData.end = this.formatHMSDatetime("end", this.limit.end);
            }
          }
        }
        if (backData.begin && backData.end) {
          if (moment(backData.begin).isAfter(backData.end)) {
            backData.begin = "";
          }
        }
      }
      return backData;
    }
  },
  methods: {
    getUTCMomentIns(datetime = "") {
      let momentDatetime = "";
      if (datetime) {
        momentDatetime = moment(datetime).utcOffset(this.utc);
      } else {
        momentDatetime = moment().utcOffset(this.utc);
      }
      return momentDatetime;
    },
    getLan() {
      this.lang = {
        month: moment.monthsShort(),
        week: moment.weekdaysMin()
      };
    },
    initDatetime(datetime) {
      let useDatetime;
      if (!this.currentUtc) {
        this.utc = moment().utcOffset() / 60;
      } else {
        this.utc = this.currentUtc;
      }
      if (this.isRange) {
        if (!Array.isArray(datetime)) {
          if (datetime && this.checkDatetimeIsValid(datetime)) {
            useDatetime = moment(useDatetime);
          } else {
            useDatetime = this.getUTCMomentIns();
          }
          this.beginDatetime = useDatetime.format(this.getDateFormat);
          this.endDatetime = this.beginDatetime;
        } else {
          if (datetime.length !== 2) {
            if (datetime.length === 1 && this.checkDatetimeIsValid(datetime[0])) {
              useDatetime = moment(useDatetime);
            } else {
              useDatetime = this.getUTCMomentIns();
            }
            this.beginDatetime = useDatetime.format(this.getDateFormat);
            this.endDatetime = this.beginDatetime;
          } else {
            if (this.checkDatetimeIsValid(datetime[0]) && this.checkDatetimeIsValid(datetime[1])) {
              this.beginDatetime = moment(datetime[0]).format(this.getDateFormat);
              this.endDatetime = moment(datetime[1]).format(this.getDateFormat);
            } else {
              useDatetime = this.getUTCMomentIns();
              this.beginDatetime = useDatetime.format(this.getDateFormat);
              this.endDatetime = this.beginDatetime;
            }
          }
        }
        if (moment(this.beginDatetime).isAfter(this.endDatetime)) {
          this.endDatetime = this.beginDatetime;
        }
        this.beginDatetime = this.formatHMSDatetime("begin", this.beginDatetime);
        this.endDatetime = this.formatHMSDatetime("end", this.endDatetime);
      } else {
        if (datetime && this.checkDatetimeIsValid(datetime)) {
          useDatetime = moment(useDatetime);
        } else {
          useDatetime = this.getUTCMomentIns();
        }
        this.beginDatetime = useDatetime.format(this.getDateFormat);
      }
      this.checkDatetimeByLimit();
      if (this.isRange) {
        this.limitDatetime = {
          begin: {
            begin: this.getLimitDatetime.begin,
            end: this.endDatetime
          },
          end: {
            begin: this.beginDatetime,
            end: this.getLimitDatetime.end
          }
        };
      } else {
        this.limitDatetime = {
          begin: {
            begin: this.getLimitDatetime.begin,
            end: this.getLimitDatetime.end
          }
        };
      }
    },
    checkDatetimeByLimit() {
      if (this.getLimitDatetime.begin) {
        if (moment(this.beginDatetime).isBefore(this.getLimitDatetime.begin)) {
          this.beginDatetime = this.getLimitDatetime.begin;
        }
      }
      if (this.getLimitDatetime.end) {
        if (moment(this.endDatetime).isAfter(this.getLimitDatetime.end)) {
          this.endDatetime = this.getLimitDatetime.end;
        }
      }
      if (moment(this.beginDatetime).isAfter(this.endDatetime)) {
        this.beginDatetime = this.endDatetime;
      }
    },
    formatHMSDatetime(position, datetime) {
      let backData = datetime;
      if (this.useHMS) {
        if (position === "begin") {
          backData = moment(datetime).startOf(this.useHMS).format(this.getDateFormat);
        } else {
          backData = moment(datetime).endOf(this.useHMS).format(this.getDateFormat);
        }
      }
      return backData;
    },
    checkDatetimeIsValid(datetime) {
      let backData = true;
      if (!moment(datetime).isValid()) {
        backData = false;
      }
      return backData;
    },
    resetDatetime(position, datetime, isResetLimit = true) {
      switch (position) {
        case "end":
          this.endDatetime = datetime;
          if (this.isRange && isResetLimit) {
            this.limitDatetime.begin.end = datetime;
          }
          break;
        case "begin":
        default:
          this.beginDatetime = datetime;
          if (this.isRange && isResetLimit) {
            this.limitDatetime.end.begin = datetime;
          }
          break;
      }
    },
    handleSingle(emitDate) {
      const { type, data } = emitDate;
      let backData;
      switch (type) {
        case "selectDate":
        case "selectTime":
          this.resetDatetime(data.position, data.datetime, false);
          this.checkDatetimeByLimit();
          if (this.isRange) {
            let curBegin = this.beginDatetime;
            let curEnd = this.endDatetime;
            let diff = 0;
            if (this.chooseSpan) {
              let useDatetime;
              let weekBeginDay;
              if (data.position === "begin") {
                useDatetime = this.beginDatetime;
              } else if (data.position === "end") {
                useDatetime = this.endDatetime;
              }
              switch (this.chooseSpan) {
                case "month":
                case "week":
                  curBegin = moment(useDatetime).startOf(this.chooseSpan).format(this.getDateFormat);
                  curEnd = moment(useDatetime).endOf(this.chooseSpan).format(this.getDateFormat);
                  if (this.chooseSpan === "week") {
                    weekBeginDay = moment(curBegin).day();
                    if (weekBeginDay === 1) {
                      if (this.isWeekBeginFromSunday) {
                        curBegin = moment(curBegin).subtract(1, "days").format(this.getDateFormat);
                        curEnd = moment(curEnd).subtract(1, "days").format(this.getDateFormat);
                      }
                    } else if (weekBeginDay === 0) {
                      if (!this.isWeekBeginFromSunday) {
                        curBegin = moment(curBegin).add(1, "days").format(this.getDateFormat);
                        curEnd = moment(curEnd).add(1, "days").format(this.getDateFormat);
                      }
                    }
                  }
                  if (this.limit) {
                    if (this.limit.begin && moment(curBegin).isBefore(this.limit.begin)) {
                      curBegin = this.limit.begin;
                    }
                    if (this.limit.end && moment(curEnd).isAfter(this.limit.end)) {
                      curEnd = this.limit.end;
                    }
                  }
                  this.resetDatetime("begin", curBegin);
                  this.resetDatetime("end", curEnd);
                  break;
                default:
                  if (this.chooseSpan && !Number.isNaN(Number(this.chooseSpan))) {
                    if (data.position === "begin") {
                      curEnd = moment(useDatetime).add(this.chooseSpan, "seconds").format(this.getDateFormat);
                      if (this.limit && this.limit.end && moment(curEnd).isAfter(this.limit.end)) {
                        diff = moment(curEnd).diff(moment(this.limit.end), "seconds");
                        curEnd = this.limit.end;
                        curBegin = moment(curBegin).subtract(diff, "seconds").format(this.getDateFormat);
                        if (this.limit && this.limit.begin && moment(curBegin).isBefore(this.limit.begin)) {
                          curBegin = this.limit.begin;
                        }
                      }
                    } else {
                      curBegin = moment(useDatetime).subtract(this.chooseSpan, "seconds").format(this.getDateFormat);
                      if (this.limit && this.limit.begin && moment(curBegin).isBefore(this.limit.begin)) {
                        diff = moment(this.limit.begin).diff(moment(curBegin), "seconds");
                        curBegin = this.limit.begin;
                        curEnd = moment(curBegin).add(diff, "seconds").format(this.getDateFormat);
                        if (this.limit && this.limit.end && moment(curEnd).isAfter(this.limit.end)) {
                          curEnd = this.limit.end;
                        }
                      }
                    }
                  }
                  break;
              }
              curBegin = this.formatHMSDatetime("begin", curBegin);
              curEnd = this.formatHMSDatetime("end", curEnd);
            }
            this.resetDatetime("begin", curBegin);
            this.resetDatetime("end", curEnd);
            backData = [curBegin, curEnd];
          } else {
            backData = this.beginDatetime;
          }
          this.emitTo("select", {
            utc: this.utc,
            value: backData
          });
          break;
      }
    },
    emitTo(type, data) {
      this.$emit("handleDatetime", data);
    }
  }
};
const _hoisted_1 = { class: "x-datetime" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_x_single = resolveComponent("x-single");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    !$props.isRange ? (openBlock(), createBlock(_component_x_single, {
      key: 0,
      lang: $data.lang,
      "date-format": $options.getDateFormat,
      datetime: $data.beginDatetime,
      "use-h-m-s": $props.useHMS,
      "popover-h-m-s": $props.popoverHMS,
      limit: $data.limitDatetime.begin,
      "is-week-begin-from-sunday": $props.isWeekBeginFromSunday,
      "is-hide-year-month-arrow": $props.isHideYearMonthArrow,
      "choose-span": $props.chooseSpan,
      onHandleSingle: $options.handleSingle
    }, {
      deductYear: withCtx(() => [
        renderSlot(_ctx.$slots, "deductYear", {}, void 0, true)
      ]),
      deductMonth: withCtx(() => [
        renderSlot(_ctx.$slots, "deductMonth", {}, void 0, true)
      ]),
      addYear: withCtx(() => [
        renderSlot(_ctx.$slots, "addYear", {}, void 0, true)
      ]),
      addMonth: withCtx(() => [
        renderSlot(_ctx.$slots, "addMonth", {}, void 0, true)
      ]),
      showTime: withCtx(({ hour, minute, second }) => [
        renderSlot(_ctx.$slots, "showTime", {
          hour,
          minute,
          second
        }, void 0, true)
      ]),
      _: 3
    }, 8, ["lang", "date-format", "datetime", "use-h-m-s", "popover-h-m-s", "limit", "is-week-begin-from-sunday", "is-hide-year-month-arrow", "choose-span", "onHandleSingle"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      createElementVNode("div", null, [
        createVNode(_component_x_single, {
          key: "xDatetimePickerBegin",
          "is-range": $props.isRange,
          "range-position": "begin",
          lang: $data.lang,
          "date-format": $options.getDateFormat,
          datetime: $data.beginDatetime,
          "use-h-m-s": $props.useHMS,
          "popover-h-m-s": $props.popoverHMS,
          limit: $data.limitDatetime.begin,
          "is-week-begin-from-sunday": $props.isWeekBeginFromSunday,
          "is-hide-year-month-arrow": $props.isHideYearMonthArrow,
          "choose-span": $props.chooseSpan,
          onHandleSingle: $options.handleSingle
        }, {
          deductYear: withCtx(() => [
            renderSlot(_ctx.$slots, "deductYear", {}, void 0, true)
          ]),
          deductMonth: withCtx(() => [
            renderSlot(_ctx.$slots, "deductMonth", {}, void 0, true)
          ]),
          addYear: withCtx(() => [
            renderSlot(_ctx.$slots, "addYear", {}, void 0, true)
          ]),
          addMonth: withCtx(() => [
            renderSlot(_ctx.$slots, "addMonth", {}, void 0, true)
          ]),
          showTime: withCtx(({ hour, minute, second }) => [
            renderSlot(_ctx.$slots, "showTime", {
              hour,
              minute,
              second
            }, void 0, true)
          ]),
          _: 3
        }, 8, ["is-range", "lang", "date-format", "datetime", "use-h-m-s", "popover-h-m-s", "limit", "is-week-begin-from-sunday", "is-hide-year-month-arrow", "choose-span", "onHandleSingle"])
      ]),
      createElementVNode("div", null, [
        createVNode(_component_x_single, {
          key: "xDatetimePickerEnd",
          "is-range": $props.isRange,
          "range-position": "end",
          "date-format": $options.getDateFormat,
          lang: $data.lang,
          datetime: $data.endDatetime,
          "use-h-m-s": $props.useHMS,
          "popover-h-m-s": $props.popoverHMS,
          limit: $data.limitDatetime.end,
          "is-week-begin-from-sunday": $props.isWeekBeginFromSunday,
          "is-hide-year-month-arrow": $props.isHideYearMonthArrow,
          "choose-span": $props.chooseSpan,
          onHandleSingle: $options.handleSingle
        }, {
          deductYear: withCtx(() => [
            renderSlot(_ctx.$slots, "deductYear", {}, void 0, true)
          ]),
          deductMonth: withCtx(() => [
            renderSlot(_ctx.$slots, "deductMonth", {}, void 0, true)
          ]),
          addYear: withCtx(() => [
            renderSlot(_ctx.$slots, "addYear", {}, void 0, true)
          ]),
          addMonth: withCtx(() => [
            renderSlot(_ctx.$slots, "addMonth", {}, void 0, true)
          ]),
          showTime: withCtx(({ hour, minute, second }) => [
            renderSlot(_ctx.$slots, "showTime", {
              hour,
              minute,
              second
            }, void 0, true)
          ]),
          _: 3
        }, 8, ["is-range", "date-format", "lang", "datetime", "use-h-m-s", "popover-h-m-s", "limit", "is-week-begin-from-sunday", "is-hide-year-month-arrow", "choose-span", "onHandleSingle"])
      ])
    ], 64))
  ]);
}
var XDatetime = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a584bb62"]]);
XDatetime.install = function(Vue) {
  Vue.component(XDatetime.name, XDatetime);
};
const components = [
  XDatetime
];
const install = function(Vue) {
  if (install.installed)
    return;
  components.map((component) => Vue.component(component.name, component));
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
var index = __spreadValues({
  install
}, components);
export { XDatetime, index as default };

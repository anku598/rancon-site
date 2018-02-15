
function InfoBox(a) {
  a = a || {}, google.maps.OverlayView.apply(this, arguments), this.content_ = a.content || "", this.disableAutoPan_ = a.disableAutoPan || !1, this.maxWidth_ = a.maxWidth || 0, this.pixelOffset_ = a.pixelOffset || new google.maps.Size(0, 0), this.position_ = a.position || new google.maps.LatLng(0, 0), this.zIndex_ = a.zIndex || null, this.boxClass_ = a.boxClass || "infoBox", this.boxStyle_ = a.boxStyle || {}, this.closeBoxMargin_ = a.closeBoxMargin || "2px", this.closeBoxURL_ = a.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif", "" === a.closeBoxURL && (this.closeBoxURL_ = ""), this.infoBoxClearance_ = a.infoBoxClearance || new google.maps.Size(1, 1), this.isHidden_ = a.isHidden || !1, this.alignBottom_ = a.alignBottom || !1, this.pane_ = a.pane || "floatPane", this.enableEventPropagation_ = a.enableEventPropagation || !1, this.div_ = null, this.closeListener_ = null, this.eventListener1_ = null, this.eventListener2_ = null, this.eventListener3_ = null, this.moveListener_ = null, this.contextListener_ = null, this.fixedWidthSet_ = null
}


  /**
   * Removes the InfoBox from the map.
   */
  InfoBox.prototype.close = function() {
      this.closeListener_ && (google.maps.event.removeListener(this.closeListener_), this.closeListener_ = null), this.eventListener1_ && (google.maps.event.removeListener(this.eventListener1_), google.maps.event.removeListener(this.eventListener2_), google.maps.event.removeListener(this.eventListener3_), google.maps.event.removeListener(this.eventListener4_), this.eventListener1_ = null, this.eventListener2_ = null, this.eventListener3_ = null, this.eventListener4_ = null), this.moveListener_ && (google.maps.event.removeListener(this.moveListener_), this.moveListener_ = null), this.contextListener_ && (google.maps.event.removeListener(this.contextListener_), this.contextListener_ = null), this.setMap(null)
  },
  /*! jQuery UI - v1.9.2 - 2015-08-18
   * http://jqueryui.com
   * Includes: jquery.ui.core.js, jquery.ui.datepicker.js
   * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

  function($, undefined) {
      function Datepicker() {
          this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
              closeText: "Done",
              prevText: "Prev",
              nextText: "Next",
              currentText: "Today",
              monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
              monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
              weekHeader: "Wk",
              dateFormat: "mm/dd/yy",
              firstDay: 0,
              isRTL: !1,
              showMonthAfterYear: !1,
              yearSuffix: ""
          }, this._defaults = {
              showOn: "focus",
              showAnim: "fadeIn",
              showOptions: {},
              defaultDate: null,
              appendText: "",
              buttonText: "...",
              buttonImage: "",
              buttonImageOnly: !1,
              hideIfNoPrevNext: !1,
              navigationAsDateFormat: !1,
              gotoCurrent: !1,
              changeMonth: !1,
              changeYear: !1,
              yearRange: "c-10:c+10",
              showOtherMonths: !1,
              selectOtherMonths: !1,
              showWeek: !1,
              calculateWeek: this.iso8601Week,
              shortYearCutoff: "+10",
              minDate: null,
              maxDate: null,
              duration: "fast",
              beforeShowDay: null,
              beforeShow: null,
              onSelect: null,
              onChangeMonthYear: null,
              onClose: null,
              numberOfMonths: 1,
              showCurrentAtPos: 0,
              stepMonths: 1,
              stepBigMonths: 12,
              altField: "",
              altFormat: "",
              constrainInput: !0,
              showButtonPanel: !1,
              autoSize: !1,
              disabled: !1
          }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
      }

      function bindHover(a) {
          var b = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
          return a.delegate(b, "mouseout", function() {
              $(this).removeClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover")
          }).delegate(b, "mouseover", function() {
              $.datepicker._isDisabledDatepicker(instActive.inline ? a.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover"))
          })
      }

      function extendRemove(a, b) {
          $.extend(a, b);
          for (var c in b)(null == b[c] || b[c] == undefined) && (a[c] = b[c]);
          return a
      }
      $.extend($.ui, {
          datepicker: {
              version: "1.9.2"
          }
      });
      var PROP_NAME = "datepicker",
          dpuuid = (new Date).getTime(),
          instActive;
      $.extend(Datepicker.prototype, {
          markerClassName: "hasDatepicker",
          maxRows: 4,
          log: function() {
              this.debug && console.log.apply("", arguments)
          },
          _widgetDatepicker: function() {
              return this.dpDiv
          },
          setDefaults: function(a) {
              return extendRemove(this._defaults, a || {}), this
          },
          _attachDatepicker: function(target, settings) {
              var inlineSettings = null;
              for (var attrName in this._defaults) {
                  var attrValue = target.getAttribute("date:" + attrName);
                  if (attrValue) {
                      inlineSettings = inlineSettings || {};
                      try {
                          inlineSettings[attrName] = eval(attrValue)
                      } catch (err) {
                          inlineSettings[attrName] = attrValue
                      }
                  }
              }
              var nodeName = target.nodeName.toLowerCase(),
                  inline = "div" == nodeName || "span" == nodeName;
              target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
              var inst = this._newInst($(target), inline);
              inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
          },
          _newInst: function(a, b) {
              var c = a[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
              return {
                  id: c,
                  input: a,
                  selectedDay: 0,
                  selectedMonth: 0,
                  selectedYear: 0,
                  drawMonth: 0,
                  drawYear: 0,
                  inline: b,
                  dpDiv: b ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
              }
          },
          _connectDatepicker: function(a, b) {
              var c = $(a);
              b.append = $([]), b.trigger = $([]), c.hasClass(this.markerClassName) || (this._attachments(c, b), c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(a, c, d) {
                  b.settings[c] = d
              }).bind("getData.datepicker", function(a, c) {
                  return this._get(b, c)
              }), this._autoSize(b), $.data(a, PROP_NAME, b), b.settings.disabled && this._disableDatepicker(a))
          },
          _attachments: function(a, b) {
              var c = this._get(b, "appendText"),
                  d = this._get(b, "isRTL");
              b.append && b.append.remove(), c && (b.append = $('<span class="' + this._appendClass + '">' + c + "</span>"), a[d ? "before" : "after"](b.append)), a.unbind("focus", this._showDatepicker), b.trigger && b.trigger.remove();
              var e = this._get(b, "showOn");
              if (("focus" == e || "both" == e) && a.focus(this._showDatepicker), "button" == e || "both" == e) {
                  var f = this._get(b, "buttonText"),
                      g = this._get(b, "buttonImage");
                  b.trigger = $(this._get(b, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                      src: g,
                      alt: f,
                      title: f
                  }) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == g ? f : $("<img/>").attr({
                      src: g,
                      alt: f,
                      title: f
                  }))), a[d ? "before" : "after"](b.trigger), b.trigger.click(function() {
                      return $.datepicker._datepickerShowing && $.datepicker._lastInput == a[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != a[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(a[0])) : $.datepicker._showDatepicker(a[0]), !1
                  })
              }
          },
          _autoSize: function(a) {
              if (this._get(a, "autoSize") && !a.inline) {
                  var b = new Date(2009, 11, 20),
                      c = this._get(a, "dateFormat");
                  if (c.match(/[DM]/)) {
                      var d = function(a) {
                          for (var b = 0, c = 0, d = 0; a.length > d; d++) a[d].length > b && (b = a[d].length, c = d);
                          return c
                      };
                      b.setMonth(d(this._get(a, c.match(/MM/) ? "monthNames" : "monthNamesShort"))), b.setDate(d(this._get(a, c.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - b.getDay())
                  }
                  a.input.attr("size", this._formatDate(a, b).length)
              }
          },
          _inlineDatepicker: function(a, b) {
              var c = $(a);
              c.hasClass(this.markerClassName) || (c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker", function(a, c, d) {
                  b.settings[c] = d
              }).bind("getData.datepicker", function(a, c) {
                  return this._get(b, c)
              }), $.data(a, PROP_NAME, b), this._setDate(b, this._getDefaultDate(b), !0), this._updateDatepicker(b), this._updateAlternate(b), b.settings.disabled && this._disableDatepicker(a), b.dpDiv.css("display", "block"))
          },
          _dialogDatepicker: function(a, b, c, d, e) {
              var f = this._dialogInst;
              if (!f) {
                  this.uuid += 1;
                  var g = "dp" + this.uuid;
                  this._dialogInput = $('<input type="text" id="' + g + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), f = this._dialogInst = this._newInst(this._dialogInput, !1), f.settings = {}, $.data(this._dialogInput[0], PROP_NAME, f)
              }
              if (extendRemove(f.settings, d || {}), b = b && b.constructor == Date ? this._formatDate(f, b) : b, this._dialogInput.val(b), this._pos = e ? e.length ? e : [e.pageX, e.pageY] : null, !this._pos) {
                  var h = document.documentElement.clientWidth,
                      i = document.documentElement.clientHeight,
                      j = document.documentElement.scrollLeft || document.body.scrollLeft,
                      k = document.documentElement.scrollTop || document.body.scrollTop;
                  this._pos = [h / 2 - 100 + j, i / 2 - 150 + k]
              }
              return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), f.settings.onSelect = c, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, f), this
          },
          _destroyDatepicker: function(a) {
              var b = $(a),
                  c = $.data(a, PROP_NAME);
              if (b.hasClass(this.markerClassName)) {
                  var d = a.nodeName.toLowerCase();
                  $.removeData(a, PROP_NAME), "input" == d ? (c.append.remove(), c.trigger.remove(), b.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == d || "span" == d) && b.removeClass(this.markerClassName).empty()
              }
          },
          _enableDatepicker: function(a) {
              var b = $(a),
                  c = $.data(a, PROP_NAME);
              if (b.hasClass(this.markerClassName)) {
                  var d = a.nodeName.toLowerCase();
                  if ("input" == d) a.disabled = !1, c.trigger.filter("button").each(function() {
                      this.disabled = !1
                  }).end().filter("img").css({
                      opacity: "1.0",
                      cursor: ""
                  });
                  else if ("div" == d || "span" == d) {
                      var e = b.children("." + this._inlineClass);
                      e.children().removeClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)
                  }
                  this._disabledInputs = $.map(this._disabledInputs, function(b) {
                      return b == a ? null : b
                  })
              }
          },
          _disableDatepicker: function(a) {
              var b = $(a),
                  c = $.data(a, PROP_NAME);
              if (b.hasClass(this.markerClassName)) {
                  var d = a.nodeName.toLowerCase();
                  if ("input" == d) a.disabled = !0, c.trigger.filter("button").each(function() {
                      this.disabled = !0
                  }).end().filter("img").css({
                      opacity: "0.5",
                      cursor: "default"
                  });
                  else if ("div" == d || "span" == d) {
                      var e = b.children("." + this._inlineClass);
                      e.children().addClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)
                  }
                  this._disabledInputs = $.map(this._disabledInputs, function(b) {
                      return b == a ? null : b
                  }), this._disabledInputs[this._disabledInputs.length] = a
              }
          },
          _isDisabledDatepicker: function(a) {
              if (!a) return !1;
              for (var b = 0; this._disabledInputs.length > b; b++)
                  if (this._disabledInputs[b] == a) return !0;
              return !1
          },
          _getInst: function(a) {
              try {
                  return $.data(a, PROP_NAME)
              } catch (b) {
                  throw "Missing instance data for this datepicker"
              }
          },
          _optionDatepicker: function(a, b, c) {
              var d = this._getInst(a);
              if (2 == arguments.length && "string" == typeof b) return "defaults" == b ? $.extend({}, $.datepicker._defaults) : d ? "all" == b ? $.extend({}, d.settings) : this._get(d, b) : null;
              var e = b || {};
              if ("string" == typeof b && (e = {}, e[b] = c), d) {
                  this._curInst == d && this._hideDatepicker();
                  var f = this._getDateDatepicker(a, !0),
                      g = this._getMinMaxDate(d, "min"),
                      h = this._getMinMaxDate(d, "max");
                  extendRemove(d.settings, e), null !== g && e.dateFormat !== undefined && e.minDate === undefined && (d.settings.minDate = this._formatDate(d, g)), null !== h && e.dateFormat !== undefined && e.maxDate === undefined && (d.settings.maxDate = this._formatDate(d, h)), this._attachments($(a), d), this._autoSize(d), this._setDate(d, f), this._updateAlternate(d), this._updateDatepicker(d)
              }
          },
          _changeDatepicker: function(a, b, c) {
              this._optionDatepicker(a, b, c)
          },
          _refreshDatepicker: function(a) {
              var b = this._getInst(a);
              b && this._updateDatepicker(b)
          },
          _setDateDatepicker: function(a, b) {
              var c = this._getInst(a);
              c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
          },
          _getDateDatepicker: function(a, b) {
              var c = this._getInst(a);
              return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null
          },
          _doKeyDown: function(a) {
              var b = $.datepicker._getInst(a.target),
                  c = !0,
                  d = b.dpDiv.is(".ui-datepicker-rtl");
              if (b._keyEvent = !0, $.datepicker._datepickerShowing) switch (a.keyCode) {
                  case 9:
                      $.datepicker._hideDatepicker(), c = !1;
                      break;
                  case 13:
                      var e = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", b.dpDiv);
                      e[0] && $.datepicker._selectDay(a.target, b.selectedMonth, b.selectedYear, e[0]);
                      var f = $.datepicker._get(b, "onSelect");
                      if (f) {
                          var g = $.datepicker._formatDate(b);
                          f.apply(b.input ? b.input[0] : null, [g, b])
                      } else $.datepicker._hideDatepicker();
                      return !1;
                  case 27:
                      $.datepicker._hideDatepicker();
                      break;
                  case 33:
                      $.datepicker._adjustDate(a.target, a.ctrlKey ? -$.datepicker._get(b, "stepBigMonths") : -$.datepicker._get(b, "stepMonths"), "M");
                      break;
                  case 34:
                      $.datepicker._adjustDate(a.target, a.ctrlKey ? +$.datepicker._get(b, "stepBigMonths") : +$.datepicker._get(b, "stepMonths"), "M");
                      break;
                  case 35:
                      (a.ctrlKey || a.metaKey) && $.datepicker._clearDate(a.target), c = a.ctrlKey || a.metaKey;
                      break;
                  case 36:
                      (a.ctrlKey || a.metaKey) && $.datepicker._gotoToday(a.target), c = a.ctrlKey || a.metaKey;
                      break;
                  case 37:
                      (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, d ? 1 : -1, "D"), c = a.ctrlKey || a.metaKey, a.originalEvent.altKey && $.datepicker._adjustDate(a.target, a.ctrlKey ? -$.datepicker._get(b, "stepBigMonths") : -$.datepicker._get(b, "stepMonths"), "M");
                      break;
                  case 38:
                      (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, -7, "D"), c = a.ctrlKey || a.metaKey;
                      break;
                  case 39:
                      (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, d ? -1 : 1, "D"), c = a.ctrlKey || a.metaKey, a.originalEvent.altKey && $.datepicker._adjustDate(a.target, a.ctrlKey ? +$.datepicker._get(b, "stepBigMonths") : +$.datepicker._get(b, "stepMonths"), "M");
                      break;
                  case 40:
                      (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, 7, "D"), c = a.ctrlKey || a.metaKey;
                      break;
                  default:
                      c = !1
              } else 36 == a.keyCode && a.ctrlKey ? $.datepicker._showDatepicker(this) : c = !1;
              c && (a.preventDefault(), a.stopPropagation())
          },
          _doKeyPress: function(a) {
              var b = $.datepicker._getInst(a.target);
              if ($.datepicker._get(b, "constrainInput")) {
                  var c = $.datepicker._possibleChars($.datepicker._get(b, "dateFormat")),
                      d = String.fromCharCode(a.charCode == undefined ? a.keyCode : a.charCode);
                  return a.ctrlKey || a.metaKey || " " > d || !c || c.indexOf(d) > -1
              }
          },
          _doKeyUp: function(a) {
              var b = $.datepicker._getInst(a.target);
              if (b.input.val() != b.lastVal) try {
                  var c = $.datepicker.parseDate($.datepicker._get(b, "dateFormat"), b.input ? b.input.val() : null, $.datepicker._getFormatConfig(b));
                  c && ($.datepicker._setDateFromField(b), $.datepicker._updateAlternate(b), $.datepicker._updateDatepicker(b))
              } catch (d) {
                  $.datepicker.log(d)
              }
              return !0
          },
          _showDatepicker: function(a) {
              if (a = a.target || a, "input" != a.nodeName.toLowerCase() && (a = $("input", a.parentNode)[0]), !$.datepicker._isDisabledDatepicker(a) && $.datepicker._lastInput != a) {
                  var b = $.datepicker._getInst(a);
                  $.datepicker._curInst && $.datepicker._curInst != b && ($.datepicker._curInst.dpDiv.stop(!0, !0), b && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                  var c = $.datepicker._get(b, "beforeShow"),
                      d = c ? c.apply(a, [a, b]) : {};
                  if (d !== !1) {
                      extendRemove(b.settings, d), b.lastVal = null, $.datepicker._lastInput = a, $.datepicker._setDateFromField(b), $.datepicker._inDialog && (a.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(a), $.datepicker._pos[1] += a.offsetHeight);
                      var e = !1;
                      $(a).parents().each(function() {
                          return e |= "fixed" == $(this).css("position"), !e
                      });
                      var f = {
                          left: $.datepicker._pos[0],
                          top: $.datepicker._pos[1]
                      };
                      if ($.datepicker._pos = null, b.dpDiv.empty(), b.dpDiv.css({
                              position: "absolute",
                              display: "block",
                              top: "-1000px"
                          }), $.datepicker._updateDatepicker(b), f = $.datepicker._checkOffset(b, f, e), b.dpDiv.css({
                              position: $.datepicker._inDialog && $.blockUI ? "static" : e ? "fixed" : "absolute",
                              display: "none",
                              left: f.left + "px",
                              top: f.top + "px"
                          }), !b.inline) {
                          var g = $.datepicker._get(b, "showAnim"),
                              h = $.datepicker._get(b, "duration"),
                              i = function() {
                                  var a = b.dpDiv.find("iframe.ui-datepicker-cover");
                                  if (a.length) {
                                      var c = $.datepicker._getBorders(b.dpDiv);
                                      a.css({
                                          left: -c[0],
                                          top: -c[1],
                                          width: b.dpDiv.outerWidth(),
                                          height: b.dpDiv.outerHeight()
                                      })
                                  }
                              };
                          b.dpDiv.zIndex($(a).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && ($.effects.effect[g] || $.effects[g]) ? b.dpDiv.show(g, $.datepicker._get(b, "showOptions"), h, i) : b.dpDiv[g || "show"](g ? h : null, i), g && h || i(), b.input.is(":visible") && !b.input.is(":disabled") && b.input.focus(), $.datepicker._curInst = b
                      }
                  }
              }
          },
          _updateDatepicker: function(a) {
              this.maxRows = 4;
              var b = $.datepicker._getBorders(a.dpDiv);
              instActive = a, a.dpDiv.empty().append(this._generateHTML(a)), this._attachHandlers(a);
              var c = a.dpDiv.find("iframe.ui-datepicker-cover");
              c.length && c.css({
                  left: -b[0],
                  top: -b[1],
                  width: a.dpDiv.outerWidth(),
                  height: a.dpDiv.outerHeight()
              }), a.dpDiv.find("." + this._dayOverClass + " a").mouseover();
              var d = this._getNumberOfMonths(a),
                  e = d[1],
                  f = 17;
              if (a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), e > 1 && a.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", f * e + "em"), a.dpDiv[(1 != d[0] || 1 != d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), a == $.datepicker._curInst && $.datepicker._datepickerShowing && a.input && a.input.is(":visible") && !a.input.is(":disabled") && a.input[0] != document.activeElement && a.input.focus(), a.yearshtml) {
                  var g = a.yearshtml;
                  setTimeout(function() {
                      g === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml), g = a.yearshtml = null
                  }, 0)
              }
          },
          _getBorders: function(a) {
              var b = function(a) {
                  return {
                      thin: 1,
                      medium: 2,
                      thick: 3
                  }[a] || a
              };
              return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))]
          },
          _checkOffset: function(a, b, c) {
              var d = a.dpDiv.outerWidth(),
                  e = a.dpDiv.outerHeight(),
                  f = a.input ? a.input.outerWidth() : 0,
                  g = a.input ? a.input.outerHeight() : 0,
                  h = document.documentElement.clientWidth + (c ? 0 : $(document).scrollLeft()),
                  i = document.documentElement.clientHeight + (c ? 0 : $(document).scrollTop());
              return b.left -= this._get(a, "isRTL") ? d - f : 0, b.left -= c && b.left == a.input.offset().left ? $(document).scrollLeft() : 0, b.top -= c && b.top == a.input.offset().top + g ? $(document).scrollTop() : 0, b.left -= Math.min(b.left, b.left + d > h && h > d ? Math.abs(b.left + d - h) : 0), b.top -= Math.min(b.top, b.top + e > i && i > e ? Math.abs(e + g) : 0), b
          },
          _findPos: function(a) {
              for (var b = this._getInst(a), c = this._get(b, "isRTL"); a && ("hidden" == a.type || 1 != a.nodeType || $.expr.filters.hidden(a));) a = a[c ? "previousSibling" : "nextSibling"];
              var d = $(a).offset();
              return [d.left, d.top]
          },
          _hideDatepicker: function(a) {
              var b = this._curInst;
              if (b && (!a || b == $.data(a, PROP_NAME)) && this._datepickerShowing) {
                  var c = this._get(b, "showAnim"),
                      d = this._get(b, "duration"),
                      e = function() {
                          $.datepicker._tidyDialog(b)
                      };
                  $.effects && ($.effects.effect[c] || $.effects[c]) ? b.dpDiv.hide(c, $.datepicker._get(b, "showOptions"), d, e) : b.dpDiv["slideDown" == c ? "slideUp" : "fadeIn" == c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1;
                  var f = this._get(b, "onClose");
                  f && f.apply(b.input ? b.input[0] : null, [b.input ? b.input.val() : "", b]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                      position: "absolute",
                      left: "0",
                      top: "-100px"
                  }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
              }
          },
          _tidyDialog: function(a) {
              a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
          },
          _checkExternalClick: function(a) {
              if ($.datepicker._curInst) {
                  var b = $(a.target),
                      c = $.datepicker._getInst(b[0]);
                  (b[0].id != $.datepicker._mainDivId && 0 == b.parents("#" + $.datepicker._mainDivId).length && !b.hasClass($.datepicker.markerClassName) && !b.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || b.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != c) && $.datepicker._hideDatepicker()
              }
          },
          _adjustDate: function(a, b, c) {
              var d = $(a),
                  e = this._getInst(d[0]);
              this._isDisabledDatepicker(d[0]) || (this._adjustInstDate(e, b + ("M" == c ? this._get(e, "showCurrentAtPos") : 0), c), this._updateDatepicker(e))
          },
          _gotoToday: function(a) {
              var b = $(a),
                  c = this._getInst(b[0]);
              if (this._get(c, "gotoCurrent") && c.currentDay) c.selectedDay = c.currentDay, c.drawMonth = c.selectedMonth = c.currentMonth, c.drawYear = c.selectedYear = c.currentYear;
              else {
                  var d = new Date;
                  c.selectedDay = d.getDate(), c.drawMonth = c.selectedMonth = d.getMonth(), c.drawYear = c.selectedYear = d.getFullYear()
              }
              this._notifyChange(c), this._adjustDate(b)
          },
          _selectMonthYear: function(a, b, c) {
              var d = $(a),
                  e = this._getInst(d[0]);
              e["selected" + ("M" == c ? "Month" : "Year")] = e["draw" + ("M" == c ? "Month" : "Year")] = parseInt(b.options[b.selectedIndex].value, 10), this._notifyChange(e), this._adjustDate(d)
          },
          _selectDay: function(a, b, c, d) {
              var e = $(a);
              if (!$(d).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(e[0])) {
                  var f = this._getInst(e[0]);
                  f.selectedDay = f.currentDay = $("a", d).html(), f.selectedMonth = f.currentMonth = b, f.selectedYear = f.currentYear = c, this._selectDate(a, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear))
              }
          },
          _clearDate: function(a) {
              var b = $(a);
              this._getInst(b[0]), this._selectDate(b, "")
          },
          _selectDate: function(a, b) {
              var c = $(a),
                  d = this._getInst(c[0]);
              b = null != b ? b : this._formatDate(d), d.input && d.input.val(b), this._updateAlternate(d);
              var e = this._get(d, "onSelect");
              e ? e.apply(d.input ? d.input[0] : null, [b, d]) : d.input && d.input.trigger("change"), d.inline ? this._updateDatepicker(d) : (this._hideDatepicker(), this._lastInput = d.input[0], "object" != typeof d.input[0] && d.input.focus(), this._lastInput = null)
          },
          _updateAlternate: function(a) {
              var b = this._get(a, "altField");
              if (b) {
                  var c = this._get(a, "altFormat") || this._get(a, "dateFormat"),
                      d = this._getDate(a),
                      e = this.formatDate(c, d, this._getFormatConfig(a));
                  $(b).each(function() {
                      $(this).val(e)
                  })
              }
          },
          noWeekends: function(a) {
              var b = a.getDay();
              return [b > 0 && 6 > b, ""]
          },
          iso8601Week: function(a) {
              var b = new Date(a.getTime());
              b.setDate(b.getDate() + 4 - (b.getDay() || 7));
              var c = b.getTime();
              return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
          },
          parseDate: function(a, b, c) {
              if (null == a || null == b) throw "Invalid arguments";
              if (b = "object" == typeof b ? "" + b : b + "", "" == b) return null;
              var d = (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff;
              d = "string" != typeof d ? d : (new Date).getFullYear() % 100 + parseInt(d, 10);
              for (var e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, f = (c ? c.dayNames : null) || this._defaults.dayNames, g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, h = (c ? c.monthNames : null) || this._defaults.monthNames, i = -1, j = -1, k = -1, l = -1, m = !1, n = function(b) {
                      var c = a.length > s + 1 && a.charAt(s + 1) == b;
                      return c && s++, c
                  }, o = function(a) {
                      var c = n(a),
                          d = "@" == a ? 14 : "!" == a ? 20 : "y" == a && c ? 4 : "o" == a ? 3 : 2,
                          e = RegExp("^\\d{1," + d + "}"),
                          f = b.substring(r).match(e);
                      if (!f) throw "Missing number at position " + r;
                      return r += f[0].length, parseInt(f[0], 10)
                  }, p = function(a, c, d) {
                      var e = $.map(n(a) ? d : c, function(a, b) {
                              return [
                                  [b, a]
                              ]
                          }).sort(function(a, b) {
                              return -(a[1].length - b[1].length)
                          }),
                          f = -1;
                      if ($.each(e, function(a, c) {
                              var d = c[1];
                              return b.substr(r, d.length).toLowerCase() == d.toLowerCase() ? (f = c[0], r += d.length, !1) : undefined
                          }), -1 != f) return f + 1;
                      throw "Unknown name at position " + r
                  }, q = function() {
                      if (b.charAt(r) != a.charAt(s)) throw "Unexpected literal at position " + r;
                      r++
                  }, r = 0, s = 0; a.length > s; s++)
                  if (m) "'" != a.charAt(s) || n("'") ? q() : m = !1;
                  else switch (a.charAt(s)) {
                      case "d":
                          k = o("d");
                          break;
                      case "D":
                          p("D", e, f);
                          break;
                      case "o":
                          l = o("o");
                          break;
                      case "m":
                          j = o("m");
                          break;
                      case "M":
                          j = p("M", g, h);
                          break;
                      case "y":
                          i = o("y");
                          break;
                      case "@":
                          var t = new Date(o("@"));
                          i = t.getFullYear(), j = t.getMonth() + 1, k = t.getDate();
                          break;
                      case "!":
                          var t = new Date((o("!") - this._ticksTo1970) / 1e4);
                          i = t.getFullYear(), j = t.getMonth() + 1, k = t.getDate();
                          break;
                      case "'":
                          n("'") ? q() : m = !0;
                          break;
                      default:
                          q()
                  }
                  if (b.length > r) {
                      var u = b.substr(r);
                      if (!/^\s+/.test(u)) throw "Extra/unparsed characters found in date: " + u
                  }
              if (-1 == i ? i = (new Date).getFullYear() : 100 > i && (i += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d >= i ? 0 : -100)), l > -1)
                  for (j = 1, k = l;;) {
                      var v = this._getDaysInMonth(i, j - 1);
                      if (v >= k) break;
                      j++, k -= v
                  }
              var t = this._daylightSavingAdjust(new Date(i, j - 1, k));
              if (t.getFullYear() != i || t.getMonth() + 1 != j || t.getDate() != k) throw "Invalid date";
              return t
          },
          ATOM: "yy-mm-dd",
          COOKIE: "D, dd M yy",
          ISO_8601: "yy-mm-dd",
          RFC_822: "D, d M y",
          RFC_850: "DD, dd-M-y",
          RFC_1036: "D, d M y",
          RFC_1123: "D, d M yy",
          RFC_2822: "D, d M yy",
          RSS: "D, d M y",
          TICKS: "!",
          TIMESTAMP: "@",
          W3C: "yy-mm-dd",
          _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
          formatDate: function(a, b, c) {
              if (!b) return "";
              var d = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                  e = (c ? c.dayNames : null) || this._defaults.dayNames,
                  f = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
                  g = (c ? c.monthNames : null) || this._defaults.monthNames,
                  h = function(b) {
                      var c = a.length > m + 1 && a.charAt(m + 1) == b;
                      return c && m++, c
                  },
                  i = function(a, b, c) {
                      var d = "" + b;
                      if (h(a))
                          for (; c > d.length;) d = "0" + d;
                      return d
                  },
                  j = function(a, b, c, d) {
                      return h(a) ? d[b] : c[b]
                  },
                  k = "",
                  l = !1;
              if (b)
                  for (var m = 0; a.length > m; m++)
                      if (l) "'" != a.charAt(m) || h("'") ? k += a.charAt(m) : l = !1;
                      else switch (a.charAt(m)) {
                          case "d":
                              k += i("d", b.getDate(), 2);
                              break;
                          case "D":
                              k += j("D", b.getDay(), d, e);
                              break;
                          case "o":
                              k += i("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                              break;
                          case "m":
                              k += i("m", b.getMonth() + 1, 2);
                              break;
                          case "M":
                              k += j("M", b.getMonth(), f, g);
                              break;
                          case "y":
                              k += h("y") ? b.getFullYear() : (10 > b.getYear() % 100 ? "0" : "") + b.getYear() % 100;
                              break;
                          case "@":
                              k += b.getTime();
                              break;
                          case "!":
                              k += 1e4 * b.getTime() + this._ticksTo1970;
                              break;
                          case "'":
                              h("'") ? k += "'" : l = !0;
                              break;
                          default:
                              k += a.charAt(m)
                      }
                      return k
          },
          _possibleChars: function(a) {
              for (var b = "", c = !1, d = function(b) {
                      var c = a.length > e + 1 && a.charAt(e + 1) == b;
                      return c && e++, c
                  }, e = 0; a.length > e; e++)
                  if (c) "'" != a.charAt(e) || d("'") ? b += a.charAt(e) : c = !1;
                  else switch (a.charAt(e)) {
                      case "d":
                      case "m":
                      case "y":
                      case "@":
                          b += "0123456789";
                          break;
                      case "D":
                      case "M":
                          return null;
                      case "'":
                          d("'") ? b += "'" : c = !0;
                          break;
                      default:
                          b += a.charAt(e)
                  }
                  return b
          },
          _get: function(a, b) {
              return a.settings[b] !== undefined ? a.settings[b] : this._defaults[b]
          },
          _setDateFromField: function(a, b) {
              if (a.input.val() != a.lastVal) {
                  var c, d, e = this._get(a, "dateFormat"),
                      f = a.lastVal = a.input ? a.input.val() : null;
                  c = d = this._getDefaultDate(a);
                  var g = this._getFormatConfig(a);
                  try {
                      c = this.parseDate(e, f, g) || d
                  } catch (h) {
                      this.log(h), f = b ? "" : f
                  }
                  a.selectedDay = c.getDate(), a.drawMonth = a.selectedMonth = c.getMonth(), a.drawYear = a.selectedYear = c.getFullYear(), a.currentDay = f ? c.getDate() : 0, a.currentMonth = f ? c.getMonth() : 0, a.currentYear = f ? c.getFullYear() : 0, this._adjustInstDate(a)
              }
          },
          _getDefaultDate: function(a) {
              return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
          },
          _determineDate: function(a, b, c) {
              var d = function(a) {
                      var b = new Date;
                      return b.setDate(b.getDate() + a), b
                  },
                  e = function(b) {
                      try {
                          return $.datepicker.parseDate($.datepicker._get(a, "dateFormat"), b, $.datepicker._getFormatConfig(a))
                      } catch (c) {}
                      for (var d = (b.toLowerCase().match(/^c/) ? $.datepicker._getDate(a) : null) || new Date, e = d.getFullYear(), f = d.getMonth(), g = d.getDate(), h = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, i = h.exec(b); i;) {
                          switch (i[2] || "d") {
                              case "d":
                              case "D":
                                  g += parseInt(i[1], 10);
                                  break;
                              case "w":
                              case "W":
                                  g += 7 * parseInt(i[1], 10);
                                  break;
                              case "m":
                              case "M":
                                  f += parseInt(i[1], 10), g = Math.min(g, $.datepicker._getDaysInMonth(e, f));
                                  break;
                              case "y":
                              case "Y":
                                  e += parseInt(i[1], 10), g = Math.min(g, $.datepicker._getDaysInMonth(e, f))
                          }
                          i = h.exec(b)
                      }
                      return new Date(e, f, g)
                  },
                  f = null == b || "" === b ? c : "string" == typeof b ? e(b) : "number" == typeof b ? isNaN(b) ? c : d(b) : new Date(b.getTime());
              return f = f && "Invalid Date" == "" + f ? c : f, f && (f.setHours(0), f.setMinutes(0), f.setSeconds(0), f.setMilliseconds(0)), this._daylightSavingAdjust(f)
          },
          _daylightSavingAdjust: function(a) {
              return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
          },
          _setDate: function(a, b, c) {
              var d = !b,
                  e = a.selectedMonth,
                  f = a.selectedYear,
                  g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
              a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e == a.selectedMonth && f == a.selectedYear || c || this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
          },
          _getDate: function(a) {
              var b = !a.currentYear || a.input && "" == a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
              return b
          },
          _attachHandlers: function(a) {
              var b = this._get(a, "stepMonths"),
                  c = "#" + a.id.replace(/\\\\/g, "\\");
              a.dpDiv.find("[data-handler]").map(function() {
                  var a = {
                      prev: function() {
                          window["DP_jQuery_" + dpuuid].datepicker._adjustDate(c, -b, "M")
                      },
                      next: function() {
                          window["DP_jQuery_" + dpuuid].datepicker._adjustDate(c, +b, "M")
                      },
                      hide: function() {
                          window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
                      },
                      today: function() {
                          window["DP_jQuery_" + dpuuid].datepicker._gotoToday(c)
                      },
                      selectDay: function() {
                          return window["DP_jQuery_" + dpuuid].datepicker._selectDay(c, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                      },
                      selectMonth: function() {
                          return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(c, this, "M"), !1
                      },
                      selectYear: function() {
                          return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(c, this, "Y"), !1
                      }
                  };
                  $(this).bind(this.getAttribute("data-event"), a[this.getAttribute("data-handler")]);
              })
          },
          _generateHTML: function(a) {
              var b = new Date;
              b = this._daylightSavingAdjust(new Date(b.getFullYear(), b.getMonth(), b.getDate()));
              var c = this._get(a, "isRTL"),
                  d = this._get(a, "showButtonPanel"),
                  e = this._get(a, "hideIfNoPrevNext"),
                  f = this._get(a, "navigationAsDateFormat"),
                  g = this._getNumberOfMonths(a),
                  h = this._get(a, "showCurrentAtPos"),
                  i = this._get(a, "stepMonths"),
                  j = 1 != g[0] || 1 != g[1],
                  k = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
                  l = this._getMinMaxDate(a, "min"),
                  m = this._getMinMaxDate(a, "max"),
                  n = a.drawMonth - h,
                  o = a.drawYear;
              if (0 > n && (n += 12, o--), m) {
                  var p = this._daylightSavingAdjust(new Date(m.getFullYear(), m.getMonth() - g[0] * g[1] + 1, m.getDate()));
                  for (p = l && l > p ? l : p; this._daylightSavingAdjust(new Date(o, n, 1)) > p;) n--, 0 > n && (n = 11, o--)
              }
              a.drawMonth = n, a.drawYear = o;
              var q = this._get(a, "prevText");
              q = f ? this.formatDate(q, this._daylightSavingAdjust(new Date(o, n - i, 1)), this._getFormatConfig(a)) : q;
              var r = this._canAdjustMonth(a, -1, o, n) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + q + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + q + "</span></a>" : e ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + q + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + q + "</span></a>",
                  s = this._get(a, "nextText");
              s = f ? this.formatDate(s, this._daylightSavingAdjust(new Date(o, n + i, 1)), this._getFormatConfig(a)) : s;
              var t = this._canAdjustMonth(a, 1, o, n) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>" : e ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>",
                  u = this._get(a, "currentText"),
                  v = this._get(a, "gotoCurrent") && a.currentDay ? k : b;
              u = f ? this.formatDate(u, v, this._getFormatConfig(a)) : u;
              var w = a.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(a, "closeText") + "</button>",
                  x = d ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (c ? w : "") + (this._isInRange(a, v) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + u + "</button>" : "") + (c ? "" : w) + "</div>" : "",
                  y = parseInt(this._get(a, "firstDay"), 10);
              y = isNaN(y) ? 0 : y;
              var z = this._get(a, "showWeek"),
                  A = this._get(a, "dayNames");
              this._get(a, "dayNamesShort");
              var B = this._get(a, "dayNamesMin"),
                  C = this._get(a, "monthNames"),
                  D = this._get(a, "monthNamesShort"),
                  E = this._get(a, "beforeShowDay"),
                  F = this._get(a, "showOtherMonths"),
                  G = this._get(a, "selectOtherMonths");
              this._get(a, "calculateWeek") || this.iso8601Week;
              for (var H = this._getDefaultDate(a), I = "", J = 0; g[0] > J; J++) {
                  var K = "";
                  this.maxRows = 4;
                  for (var L = 0; g[1] > L; L++) {
                      var M = this._daylightSavingAdjust(new Date(o, n, a.selectedDay)),
                          N = " ui-corner-all",
                          O = "";
                      if (j) {
                          if (O += '<div class="ui-datepicker-group', g[1] > 1) switch (L) {
                              case 0:
                                  O += " ui-datepicker-group-first", N = " ui-corner-" + (c ? "right" : "left");
                                  break;
                              case g[1] - 1:
                                  O += " ui-datepicker-group-last", N = " ui-corner-" + (c ? "left" : "right");
                                  break;
                              default:
                                  O += " ui-datepicker-group-middle", N = ""
                          }
                          O += '">'
                      }
                      O += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + N + '">' + (/all|left/.test(N) && 0 == J ? c ? t : r : "") + (/all|right/.test(N) && 0 == J ? c ? r : t : "") + this._generateMonthYearHeader(a, n, o, l, m, J > 0 || L > 0, C, D) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                      for (var P = z ? '<th class="ui-datepicker-week-col">' + this._get(a, "weekHeader") + "</th>" : "", Q = 0; 7 > Q; Q++) {
                          var R = (Q + y) % 7;
                          P += "<th" + ((Q + y + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + A[R] + '">' + B[R] + "</span></th>"
                      }
                      O += P + "</tr></thead><tbody>";
                      var S = this._getDaysInMonth(o, n);
                      o == a.selectedYear && n == a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, S));
                      var T = (this._getFirstDayOfMonth(o, n) - y + 7) % 7,
                          U = Math.ceil((T + S) / 7),
                          V = j && this.maxRows > U ? this.maxRows : U;
                      this.maxRows = V;
                      for (var W = this._daylightSavingAdjust(new Date(o, n, 1 - T)), X = 0; V > X; X++) {
                          O += "<tr>";
                          for (var Y = z ? '<td class="ui-datepicker-week-col">' + this._get(a, "calculateWeek")(W) + "</td>" : "", Q = 0; 7 > Q; Q++) {
                              var Z = E ? E.apply(a.input ? a.input[0] : null, [W]) : [!0, ""],
                                  _ = W.getMonth() != n,
                                  aa = _ && !G || !Z[0] || l && l > W || m && W > m;
                              Y += '<td class="' + ((Q + y + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (_ ? " ui-datepicker-other-month" : "") + (W.getTime() == M.getTime() && n == a.selectedMonth && a._keyEvent || H.getTime() == W.getTime() && H.getTime() == M.getTime() ? " " + this._dayOverClass : "") + (aa ? " " + this._unselectableClass + " ui-state-disabled" : "") + (_ && !F ? "" : " " + Z[1] + (W.getTime() == k.getTime() ? " " + this._currentClass : "") + (W.getTime() == b.getTime() ? " ui-datepicker-today" : "")) + '"' + (_ && !F || !Z[2] ? "" : ' title="' + Z[2] + '"') + (aa ? "" : ' data-handler="selectDay" data-event="click" data-month="' + W.getMonth() + '" data-year="' + W.getFullYear() + '"') + ">" + (_ && !F ? "&#xa0;" : aa ? '<span class="ui-state-default">' + W.getDate() + "</span>" : '<a class="ui-state-default' + (W.getTime() == b.getTime() ? " ui-state-highlight" : "") + (W.getTime() == k.getTime() ? " ui-state-active" : "") + (_ ? " ui-priority-secondary" : "") + '" href="#">' + W.getDate() + "</a>") + "</td>", W.setDate(W.getDate() + 1), W = this._daylightSavingAdjust(W)
                          }
                          O += Y + "</tr>"
                      }
                      n++, n > 11 && (n = 0, o++), O += "</tbody></table>" + (j ? "</div>" + (g[0] > 0 && L == g[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), K += O
                  }
                  I += K
              }
              return I += x + ($.ui.ie6 && !a.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), a._keyEvent = !1, I
          },
          _generateMonthYearHeader: function(a, b, c, d, e, f, g, h) {
              var i = this._get(a, "changeMonth"),
                  j = this._get(a, "changeYear"),
                  k = this._get(a, "showMonthAfterYear"),
                  l = '<div class="ui-datepicker-title">',
                  m = "";
              if (f || !i) m += '<span class="ui-datepicker-month">' + g[b] + "</span>";
              else {
                  var n = d && d.getFullYear() == c,
                      o = e && e.getFullYear() == c;
                  m += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                  for (var p = 0; 12 > p; p++)(!n || p >= d.getMonth()) && (!o || e.getMonth() >= p) && (m += '<option value="' + p + '"' + (p == b ? ' selected="selected"' : "") + ">" + h[p] + "</option>");
                  m += "</select>"
              }
              if (k || (l += m + (!f && i && j ? "" : "&#xa0;")), !a.yearshtml)
                  if (a.yearshtml = "", f || !j) l += '<span class="ui-datepicker-year">' + c + "</span>";
                  else {
                      var q = this._get(a, "yearRange").split(":"),
                          r = (new Date).getFullYear(),
                          s = function(a) {
                              var b = a.match(/c[+-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+-].*/) ? r + parseInt(a, 10) : parseInt(a, 10);
                              return isNaN(b) ? r : b
                          },
                          t = s(q[0]),
                          u = Math.max(t, s(q[1] || ""));
                      for (t = d ? Math.max(t, d.getFullYear()) : t, u = e ? Math.min(u, e.getFullYear()) : u, a.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; u >= t; t++) a.yearshtml += '<option value="' + t + '"' + (t == c ? ' selected="selected"' : "") + ">" + t + "</option>";
                      a.yearshtml += "</select>", l += a.yearshtml, a.yearshtml = null
                  }
              return l += this._get(a, "yearSuffix"), k && (l += (!f && i && j ? "" : "&#xa0;") + m), l += "</div>"
          },
          _adjustInstDate: function(a, b, c) {
              var d = a.drawYear + ("Y" == c ? b : 0),
                  e = a.drawMonth + ("M" == c ? b : 0),
                  f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" == c ? b : 0),
                  g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
              a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), ("M" == c || "Y" == c) && this._notifyChange(a)
          },
          _restrictMinMax: function(a, b) {
              var c = this._getMinMaxDate(a, "min"),
                  d = this._getMinMaxDate(a, "max"),
                  e = c && c > b ? c : b;
              return e = d && e > d ? d : e
          },
          _notifyChange: function(a) {
              var b = this._get(a, "onChangeMonthYear");
              b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
          },
          _getNumberOfMonths: function(a) {
              var b = this._get(a, "numberOfMonths");
              return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b
          },
          _getMinMaxDate: function(a, b) {
              return this._determineDate(a, this._get(a, b + "Date"), null)
          },
          _getDaysInMonth: function(a, b) {
              return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
          },
          _getFirstDayOfMonth: function(a, b) {
              return new Date(a, b, 1).getDay()
          },
          _canAdjustMonth: function(a, b, c, d) {
              var e = this._getNumberOfMonths(a),
                  f = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
              return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f)
          },
          _isInRange: function(a, b) {
              var c = this._getMinMaxDate(a, "min"),
                  d = this._getMinMaxDate(a, "max");
              return (!c || b.getTime() >= c.getTime()) && (!d || b.getTime() <= d.getTime())
          },
          _getFormatConfig: function(a) {
              var b = this._get(a, "shortYearCutoff");
              return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
                  shortYearCutoff: b,
                  dayNamesShort: this._get(a, "dayNamesShort"),
                  dayNames: this._get(a, "dayNames"),
                  monthNamesShort: this._get(a, "monthNamesShort"),
                  monthNames: this._get(a, "monthNames")
              }
          },
          _formatDate: function(a, b, c, d) {
              b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
              var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
              return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
          }
      }), $.fn.datepicker = function(a) {
          if (!this.length) return this;
          $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), $.datepicker.initialized = !0);
          var b = Array.prototype.slice.call(arguments, 1);
          return "string" != typeof a || "isDisabled" != a && "getDate" != a && "widget" != a ? "option" == a && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this[0]].concat(b)) : this.each(function() {
              "string" == typeof a ? $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this].concat(b)) : $.datepicker._attachDatepicker(this, a)
          }) : $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this[0]].concat(b))
      }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.9.2", window["DP_jQuery_" + dpuuid] = $
  }(jQuery),
  /*
   * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
   *
   * Uses the built in easing capabilities added In jQuery 1.1
   * to offer multiple easing options
   *
   * TERMS OF USE - jQuery Easing
   * 
   * Open source under the BSD License. 
   * 
   * Copyright © 2008 George McGinley Smith
   * All rights reserved.
   * 
   * Redistribution and use in source and binary forms, with or without modification, 
   * are permitted provided that the following conditions are met:
   * 
   * Redistributions of source code must retain the above copyright notice, this list of 
   * conditions and the following disclaimer.
   * Redistributions in binary form must reproduce the above copyright notice, this list 
   * of conditions and the following disclaimer in the documentation and/or other materials 
   * provided with the distribution.
   * 
   * Neither the name of the author nor the names of contributors may be used to endorse 
   * or promote products derived from this software without specific prior written permission.
   * 
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
   * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
   *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
   *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
   * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
   * OF THE POSSIBILITY OF SUCH DAMAGE. 
   *
   */
  // t: current time, b: begInnIng value, c: change In value, d: duration
  jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
      def: "easeOutQuad",
      swing: function(a, b, c, d, e) {
          //alert(jQuery.easing.default);
          return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
      },
      easeInQuad: function(a, b, c, d, e) {
          return d * (b /= e) * b + c
      },
      easeOutQuad: function(a, b, c, d, e) {
          return -d * (b /= e) * (b - 2) + c
      },
      easeInOutQuad: function(a, b, c, d, e) {
          return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
      },
      easeInCubic: function(a, b, c, d, e) {
          return d * (b /= e) * b * b + c
      },
      easeOutCubic: function(a, b, c, d, e) {
          return d * ((b = b / e - 1) * b * b + 1) + c
      },
      easeInOutCubic: function(a, b, c, d, e) {
          return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
      },
      easeInQuart: function(a, b, c, d, e) {
          return d * (b /= e) * b * b * b + c
      },
      easeOutQuart: function(a, b, c, d, e) {
          return -d * ((b = b / e - 1) * b * b * b - 1) + c
      },
      easeInOutQuart: function(a, b, c, d, e) {
          return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
      },
      easeInQuint: function(a, b, c, d, e) {
          return d * (b /= e) * b * b * b * b + c
      },
      easeOutQuint: function(a, b, c, d, e) {
          return d * ((b = b / e - 1) * b * b * b * b + 1) + c
      },
      easeInOutQuint: function(a, b, c, d, e) {
          return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
      },
      easeInSine: function(a, b, c, d, e) {
          return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
      },
      easeOutSine: function(a, b, c, d, e) {
          return d * Math.sin(b / e * (Math.PI / 2)) + c
      },
      easeInOutSine: function(a, b, c, d, e) {
          return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
      },
      easeInExpo: function(a, b, c, d, e) {
          return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
      },
      easeOutExpo: function(a, b, c, d, e) {
          return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
      },
      easeInOutExpo: function(a, b, c, d, e) {
          return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
      },
      easeInCirc: function(a, b, c, d, e) {
          return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
      },
      easeOutCirc: function(a, b, c, d, e) {
          return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
      },
      easeInOutCirc: function(a, b, c, d, e) {
          return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
      },
      easeInElastic: function(a, b, c, d, e) {
          var f = 1.70158,
              g = 0,
              h = d;
          if (0 == b) return c;
          if (1 == (b /= e)) return c + d;
          if (g || (g = .3 * e), h < Math.abs(d)) {
              h = d;
              var f = g / 4
          } else var f = g / (2 * Math.PI) * Math.asin(d / h);
          return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c
      },
      easeOutElastic: function(a, b, c, d, e) {
          var f = 1.70158,
              g = 0,
              h = d;
          if (0 == b) return c;
          if (1 == (b /= e)) return c + d;
          if (g || (g = .3 * e), h < Math.abs(d)) {
              h = d;
              var f = g / 4
          } else var f = g / (2 * Math.PI) * Math.asin(d / h);
          return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * (2 * Math.PI) / g) + d + c
      },
      easeInOutElastic: function(a, b, c, d, e) {
          var f = 1.70158,
              g = 0,
              h = d;
          if (0 == b) return c;
          if (2 == (b /= e / 2)) return c + d;
          if (g || (g = e * (.3 * 1.5)), h < Math.abs(d)) {
              h = d;
              var f = g / 4
          } else var f = g / (2 * Math.PI) * Math.asin(d / h);
          return 1 > b ? -.5 * (h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * .5 + d + c
      },
      easeInBack: function(a, b, c, d, e, f) {
          return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
      },
      easeOutBack: function(a, b, c, d, e, f) {
          return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
      },
      easeInOutBack: function(a, b, c, d, e, f) {
          return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * (b * b * (((f *= 1.525) + 1) * b - f)) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
      },
      easeInBounce: function(a, b, c, d, e) {
          return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
      },
      easeOutBounce: function(a, b, c, d, e) {
          return (b /= e) < 1 / 2.75 ? d * (7.5625 * b * b) + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
      },
      easeInOutBounce: function(a, b, c, d, e) {
          return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
      }
  }), // Snap.svg 0.4.1
  //
  // Copyright (c) 2013 – 2015 Adobe Systems Incorporated. All rights reserved.
  //
  // Licensed under the Apache License, Version 2.0 (the "License");
  // you may not use this file except in compliance with the License.
  // You may obtain a copy of the License at
  //
  // http://www.apache.org/licenses/LICENSE-2.0
  //
  // Unless required by applicable law or agreed to in writing, software
  // distributed under the License is distributed on an "AS IS" BASIS,
  // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // See the License for the specific language governing permissions and
  // limitations under the License.
  //
  // build: 2015-04-13
  ! function(a) {
      var b, c, d = "0.4.2",
          e = "hasOwnProperty",
          f = /[\.\/]/,
          g = /\s*,\s*/,
          h = "*",
          i = function(a, b) {
              return a - b
          },
          j = {
              n: {}
          },
          k = function() {
              for (var a = 0, b = this.length; b > a; a++)
                  if ("undefined" != typeof this[a]) return this[a]
          },
          l = function() {
              for (var a = this.length; --a;)
                  if ("undefined" != typeof this[a]) return this[a]
          },
          m = function(a, d) {
              a = String(a);
              var e, f = c,
                  g = Array.prototype.slice.call(arguments, 2),
                  h = m.listeners(a),
                  j = 0,
                  n = [],
                  o = {},
                  p = [],
                  q = b;
              p.firstDefined = k, p.lastDefined = l, b = a, c = 0;
              for (var r = 0, s = h.length; s > r; r++) "zIndex" in h[r] && (n.push(h[r].zIndex), h[r].zIndex < 0 && (o[h[r].zIndex] = h[r]));
              for (n.sort(i); n[j] < 0;)
                  if (e = o[n[j++]], p.push(e.apply(d, g)), c) return c = f, p;
              for (r = 0; s > r; r++)
                  if (e = h[r], "zIndex" in e)
                      if (e.zIndex == n[j]) {
                          if (p.push(e.apply(d, g)), c) break;
                          do
                              if (j++, e = o[n[j]], e && p.push(e.apply(d, g)), c) break;
                          while (e)
                      } else o[e.zIndex] = e;
              else if (p.push(e.apply(d, g)), c) break;
              return c = f, b = q, p
          };
      m._events = j, m.listeners = function(a) {
          var b, c, d, e, g, i, k, l, m = a.split(f),
              n = j,
              o = [n],
              p = [];
          for (e = 0, g = m.length; g > e; e++) {
              for (l = [], i = 0, k = o.length; k > i; i++)
                  for (n = o[i].n, c = [n[m[e]], n[h]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
              o = l
          }
          return p
      }, m.on = function(a, b) {
          if (a = String(a), "function" != typeof b) return function() {};
          for (var c = a.split(g), d = 0, e = c.length; e > d; d++) ! function(a) {
              for (var c, d = a.split(f), e = j, g = 0, h = d.length; h > g; g++) e = e.n, e = e.hasOwnProperty(d[g]) && e[d[g]] || (e[d[g]] = {
                  n: {}
              });
              for (e.f = e.f || [], g = 0, h = e.f.length; h > g; g++)
                  if (e.f[g] == b) {
                      c = !0;
                      break
                  }!c && e.f.push(b)
          }(c[d]);
          return function(a) {
              +a == +a && (b.zIndex = +a)
          }
      }, m.f = function(a) {
          var b = [].slice.call(arguments, 1);
          return function() {
              m.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
          }
      }, m.stop = function() {
          c = 1
      }, m.nt = function(a) {
          return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
      }, m.nts = function() {
          return b.split(f)
      }, m.off = m.unbind = function(a, b) {
          if (!a) return void(m._events = j = {
              n: {}
          });
          var c = a.split(g);
          if (c.length > 1)
              for (var d = 0, i = c.length; i > d; d++) m.off(c[d], b);
          else {
              c = a.split(f);
              var k, l, n, d, i, o, p, q = [j];
              for (d = 0, i = c.length; i > d; d++)
                  for (o = 0; o < q.length; o += n.length - 2) {
                      if (n = [o, 1], k = q[o].n, c[d] != h) k[c[d]] && n.push(k[c[d]]);
                      else
                          for (l in k) k[e](l) && n.push(k[l]);
                      q.splice.apply(q, n)
                  }
              for (d = 0, i = q.length; i > d; d++)
                  for (k = q[d]; k.n;) {
                      if (b) {
                          if (k.f) {
                              for (o = 0, p = k.f.length; p > o; o++)
                                  if (k.f[o] == b) {
                                      k.f.splice(o, 1);
                                      break
                                  }!k.f.length && delete k.f
                          }
                          for (l in k.n)
                              if (k.n[e](l) && k.n[l].f) {
                                  var r = k.n[l].f;
                                  for (o = 0, p = r.length; p > o; o++)
                                      if (r[o] == b) {
                                          r.splice(o, 1);
                                          break
                                      }!r.length && delete k.n[l].f
                              }
                      } else {
                          delete k.f;
                          for (l in k.n) k.n[e](l) && k.n[l].f && delete k.n[l].f
                      }
                      k = k.n
                  }
          }
      }, m.once = function(a, b) {
          var c = function() {
              return m.unbind(a, c), b.apply(this, arguments)
          };
          return m.on(a, c)
      }, m.version = d, m.toString = function() {
          return "You are running Eve " + d
      }, "undefined" != typeof module && module.exports ? module.exports = m : "function" == typeof define && define.amd ? define("eve", [], function() {
          return m
      }) : a.eve = m
  }(this),
  function(a, b) {
      if ("function" == typeof define && define.amd) define(["eve"], function(c) {
          return b(a, c)
      });
      else if ("undefined" != typeof exports) {
          var c = require("eve");
          module.exports = b(a, c)
      } else b(a, a.eve)
  }(window || this, function(a, b) {
      var c = function(b) {
              var c = {},
                  d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(a) {
                      setTimeout(a, 16)
                  },
                  e = Array.isArray || function(a) {
                      return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a)
                  },
                  f = 0,
                  g = "M" + (+new Date).toString(36),
                  h = function() {
                      return g + (f++).toString(36)
                  },
                  i = Date.now || function() {
                      return +new Date
                  },
                  j = function(a) {
                      var b = this;
                      if (null == a) return b.s;
                      var c = b.s - a;
                      b.b += b.dur * c, b.B += b.dur * c, b.s = a
                  },
                  k = function(a) {
                      var b = this;
                      return null == a ? b.spd : void(b.spd = a)
                  },
                  l = function(a) {
                      var b = this;
                      return null == a ? b.dur : (b.s = b.s * a / b.dur, void(b.dur = a))
                  },
                  m = function() {
                      var a = this;
                      delete c[a.id], a.update(), b("mina.stop." + a.id, a)
                  },
                  n = function() {
                      var a = this;
                      a.pdif || (delete c[a.id], a.update(), a.pdif = a.get() - a.b)
                  },
                  o = function() {
                      var a = this;
                      a.pdif && (a.b = a.get() - a.pdif, delete a.pdif, c[a.id] = a)
                  },
                  p = function() {
                      var a, b = this;
                      if (e(b.start)) {
                          a = [];
                          for (var c = 0, d = b.start.length; d > c; c++) a[c] = +b.start[c] + (b.end[c] - b.start[c]) * b.easing(b.s)
                      } else a = +b.start + (b.end - b.start) * b.easing(b.s);
                      b.set(a)
                  },
                  q = function() {
                      var a = 0;
                      for (var e in c)
                          if (c.hasOwnProperty(e)) {
                              var f = c[e],
                                  g = f.get();
                              a++, f.s = (g - f.b) / (f.dur / f.spd), f.s >= 1 && (delete c[e], f.s = 1, a--, function(a) {
                                  setTimeout(function() {
                                      b("mina.finish." + a.id, a)
                                  })
                              }(f)), f.update()
                          }
                      a && d(q)
                  },
                  r = function(a, b, e, f, g, i, s) {
                      var t = {
                          id: h(),
                          start: a,
                          end: b,
                          b: e,
                          s: 0,
                          dur: f - e,
                          spd: 1,
                          get: g,
                          set: i,
                          easing: s || r.linear,
                          status: j,
                          speed: k,
                          duration: l,
                          stop: m,
                          pause: n,
                          resume: o,
                          update: p
                      };
                      c[t.id] = t;
                      var u, v = 0;
                      for (u in c)
                          if (c.hasOwnProperty(u) && (v++, 2 == v)) break;
                      return 1 == v && d(q), t
                  };
              return r.time = i, r.getById = function(a) {
                  return c[a] || null
              }, r.linear = function(a) {
                  return a
              }, r.easeout = function(a) {
                  return Math.pow(a, 1.7)
              }, r.easein = function(a) {
                  return Math.pow(a, .48)
              }, r.easeinout = function(a) {
                  if (1 == a) return 1;
                  if (0 == a) return 0;
                  var b = .48 - a / 1.04,
                      c = Math.sqrt(.1734 + b * b),
                      d = c - b,
                      e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1),
                      f = -c - b,
                      g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1),
                      h = e + g + .5;
                  return 3 * (1 - h) * h * h + h * h * h
              }, r.backin = function(a) {
                  if (1 == a) return 1;
                  var b = 1.70158;
                  return a * a * ((b + 1) * a - b)
              }, r.backout = function(a) {
                  if (0 == a) return 0;
                  a -= 1;
                  var b = 1.70158;
                  return a * a * ((b + 1) * a + b) + 1
              }, r.elastic = function(a) {
                  return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - .075) * Math.PI / .3) + 1
              }, r.bounce = function(a) {
                  var b, c = 7.5625,
                      d = 2.75;
                  return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
              }, a.mina = r, r
          }("undefined" == typeof b ? function() {} : b),
          d = function(a) {
              function c(a, b) {
                  if (a) {
                      if (a.nodeType) return w(a);
                      if (e(a, "array") && c.set) return c.set.apply(c, a);
                      if (a instanceof s) return a;
                      if (null == b) return a = y.doc.querySelector(String(a)), w(a)
                  }
                  return a = null == a ? "100%" : a, b = null == b ? "100%" : b, new v(a, b)
              }

              function d(a, b) {
                  if (b) {
                      if ("#text" == a && (a = y.doc.createTextNode(b.text || b["#text"] || "")), "#comment" == a && (a = y.doc.createComment(b.text || b["#text"] || "")), "string" == typeof a && (a = d(a)), "string" == typeof b) return 1 == a.nodeType ? "xlink:" == b.substring(0, 6) ? a.getAttributeNS(T, b.substring(6)) : "xml:" == b.substring(0, 4) ? a.getAttributeNS(U, b.substring(4)) : a.getAttribute(b) : "text" == b ? a.nodeValue : null;
                      if (1 == a.nodeType) {
                          for (var c in b)
                              if (b[z](c)) {
                                  var e = A(b[c]);
                                  e ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(T, c.substring(6), e) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(U, c.substring(4), e) : a.setAttribute(c, e) : a.removeAttribute(c)
                              }
                      } else "text" in b && (a.nodeValue = b.text)
                  } else a = y.doc.createElementNS(U, a);
                  return a
              }

              function e(a, b) {
                  return b = A.prototype.toLowerCase.call(b), "finite" == b ? isFinite(a) : "array" == b && (a instanceof Array || Array.isArray && Array.isArray(a)) ? !0 : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || J.call(a).slice(8, -1).toLowerCase() == b
              }

              function f(a) {
                  if ("function" == typeof a || Object(a) !== a) return a;
                  var b = new a.constructor;
                  for (var c in a) a[z](c) && (b[c] = f(a[c]));
                  return b
              }

              function h(a, b) {
                  for (var c = 0, d = a.length; d > c; c++)
                      if (a[c] === b) return a.push(a.splice(c, 1)[0])
              }

              function i(a, b, c) {
                  function d() {
                      var e = Array.prototype.slice.call(arguments, 0),
                          f = e.join("␀"),
                          g = d.cache = d.cache || {},
                          i = d.count = d.count || [];
                      return g[z](f) ? (h(i, f), c ? c(g[f]) : g[f]) : (i.length >= 1e3 && delete g[i.shift()], i.push(f), g[f] = a.apply(b, e), c ? c(g[f]) : g[f])
                  }
                  return d
              }

              function j(a, b, c, d, e, f) {
                  if (null == e) {
                      var g = a - c,
                          h = b - d;
                      return g || h ? (180 + 180 * D.atan2(-h, -g) / H + 360) % 360 : 0
                  }
                  return j(a, b, e, f) - j(c, d, e, f)
              }

              function k(a) {
                  return a % 360 * H / 180
              }

              function l(a) {
                  return 180 * a / H % 360
              }

              function m(a) {
                  var b = [];
                  return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(a, c, d) {
                      return d = d.split(/\s*,\s*|\s+/), "rotate" == c && 1 == d.length && d.push(0, 0), "scale" == c && (d.length > 2 ? d = d.slice(0, 2) : 2 == d.length && d.push(0, 0), 1 == d.length && d.push(d[0], 0, 0)), b.push("skewX" == c ? ["m", 1, 0, D.tan(k(d[0])), 1, 0, 0] : "skewY" == c ? ["m", 1, D.tan(k(d[0])), 0, 1, 0, 0] : [c.charAt(0)].concat(d)), a
                  }), b
              }

              function n(a, b) {
                  var d = aa(a),
                      e = new c.Matrix;
                  if (d)
                      for (var f = 0, g = d.length; g > f; f++) {
                          var h, i, j, k, l, m = d[f],
                              n = m.length,
                              o = A(m[0]).toLowerCase(),
                              p = m[0] != o,
                              q = p ? e.invert() : 0;
                          "t" == o && 2 == n ? e.translate(m[1], 0) : "t" == o && 3 == n ? p ? (h = q.x(0, 0), i = q.y(0, 0), j = q.x(m[1], m[2]), k = q.y(m[1], m[2]), e.translate(j - h, k - i)) : e.translate(m[1], m[2]) : "r" == o ? 2 == n ? (l = l || b, e.rotate(m[1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n && (p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.rotate(m[1], j, k)) : e.rotate(m[1], m[2], m[3])) : "s" == o ? 2 == n || 3 == n ? (l = l || b, e.scale(m[1], m[n - 1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n ? p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.scale(m[1], m[1], j, k)) : e.scale(m[1], m[1], m[2], m[3]) : 5 == n && (p ? (j = q.x(m[3], m[4]), k = q.y(m[3], m[4]), e.scale(m[1], m[2], j, k)) : e.scale(m[1], m[2], m[3], m[4])) : "m" == o && 7 == n && e.add(m[1], m[2], m[3], m[4], m[5], m[6])
                      }
                  return e
              }

              function o(a) {
                  var b = a.node.ownerSVGElement && w(a.node.ownerSVGElement) || a.node.parentNode && w(a.node.parentNode) || c.select("svg") || c(0, 0),
                      d = b.select("defs"),
                      e = null == d ? !1 : d.node;
                  return e || (e = u("defs", b.node).node), e
              }

              function p(a) {
                  return a.node.ownerSVGElement && w(a.node.ownerSVGElement) || c.select("svg")
              }

              function q(a, b, c) {
                  function e(a) {
                      if (null == a) return I;
                      if (a == +a) return a;
                      d(j, {
                          width: a
                      });
                      try {
                          return j.getBBox().width
                      } catch (b) {
                          return 0
                      }
                  }

                  function f(a) {
                      if (null == a) return I;
                      if (a == +a) return a;
                      d(j, {
                          height: a
                      });
                      try {
                          return j.getBBox().height
                      } catch (b) {
                          return 0
                      }
                  }

                  function g(d, e) {
                      null == b ? i[d] = e(a.attr(d) || 0) : d == b && (i = e(null == c ? a.attr(d) || 0 : c))
                  }
                  var h = p(a).node,
                      i = {},
                      j = h.querySelector(".svg---mgr");
                  switch (j || (j = d("rect"), d(j, {
                      x: -9e9,
                      y: -9e9,
                      width: 10,
                      height: 10,
                      "class": "svg---mgr",
                      fill: "none"
                  }), h.appendChild(j)), a.type) {
                      case "rect":
                          g("rx", e), g("ry", f);
                      case "image":
                          g("width", e), g("height", f);
                      case "text":
                          g("x", e), g("y", f);
                          break;
                      case "circle":
                          g("cx", e), g("cy", f), g("r", e);
                          break;
                      case "ellipse":
                          g("cx", e), g("cy", f), g("rx", e), g("ry", f);
                          break;
                      case "line":
                          g("x1", e), g("x2", e), g("y1", f), g("y2", f);
                          break;
                      case "marker":
                          g("refX", e), g("markerWidth", e), g("refY", f), g("markerHeight", f);
                          break;
                      case "radialGradient":
                          g("fx", e), g("fy", f);
                          break;
                      case "tspan":
                          g("dx", e), g("dy", f);
                          break;
                      default:
                          g(b, e)
                  }
                  return h.removeChild(j), i
              }

              function r(a) {
                  e(a, "array") || (a = Array.prototype.slice.call(arguments, 0));
                  for (var b = 0, c = 0, d = this.node; this[b];) delete this[b++];
                  for (b = 0; b < a.length; b++) "set" == a[b].type ? a[b].forEach(function(a) {
                      d.appendChild(a.node)
                  }) : d.appendChild(a[b].node);
                  var f = d.childNodes;
                  for (b = 0; b < f.length; b++) this[c++] = w(f[b]);
                  return this
              }

              function s(a) {
                  if (a.snap in V) return V[a.snap];
                  var b;
                  try {
                      b = a.ownerSVGElement
                  } catch (c) {}
                  this.node = a, b && (this.paper = new v(b)), this.type = a.tagName || a.nodeName;
                  var d = this.id = S(this);
                  if (this.anims = {}, this._ = {
                          transform: []
                      }, a.snap = d, V[d] = this, "g" == this.type && (this.add = r), this.type in {
                          g: 1,
                          mask: 1,
                          pattern: 1,
                          symbol: 1
                      })
                      for (var e in v.prototype) v.prototype[z](e) && (this[e] = v.prototype[e])
              }

              function t(a) {
                  this.node = a
              }

              function u(a, b) {
                  var c = d(a);
                  b.appendChild(c);
                  var e = w(c);
                  return e
              }

              function v(a, b) {
                  var c, e, f, g = v.prototype;
                  if (a && "svg" == a.tagName) {
                      if (a.snap in V) return V[a.snap];
                      var h = a.ownerDocument;
                      c = new s(a), e = a.getElementsByTagName("desc")[0], f = a.getElementsByTagName("defs")[0], e || (e = d("desc"), e.appendChild(h.createTextNode("Created with Snap")), c.node.appendChild(e)), f || (f = d("defs"), c.node.appendChild(f)), c.defs = f;
                      for (var i in g) g[z](i) && (c[i] = g[i]);
                      c.paper = c.root = c
                  } else c = u("svg", y.doc.body), d(c.node, {
                      height: b,
                      version: 1.1,
                      width: a,
                      xmlns: U
                  });
                  return c
              }

              function w(a) {
                  return a ? a instanceof s || a instanceof t ? a : a.tagName && "svg" == a.tagName.toLowerCase() ? new v(a) : a.tagName && "object" == a.tagName.toLowerCase() && "image/svg+xml" == a.type ? new v(a.contentDocument.getElementsByTagName("svg")[0]) : new s(a) : a
              }

              function x(a, b) {
                  for (var c = 0, d = a.length; d > c; c++) {
                      var e = {
                              type: a[c].type,
                              attr: a[c].attr()
                          },
                          f = a[c].children();
                      b.push(e), f.length && x(f, e.childNodes = [])
                  }
              }
              c.version = "0.4.0", c.toString = function() {
                  return "Snap v" + this.version
              }, c._ = {};
              var y = {
                  win: a.window,
                  doc: a.window.document
              };
              c._.glob = y;
              var z = "hasOwnProperty",
                  A = String,
                  B = parseFloat,
                  C = parseInt,
                  D = Math,
                  E = D.max,
                  F = D.min,
                  G = D.abs,
                  H = (D.pow, D.PI),
                  I = (D.round, ""),
                  J = Object.prototype.toString,
                  K = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                  L = (c._.separator = /[,\s]+/, /[\s]*,[\s]*/),
                  M = {
                      hs: 1,
                      rg: 1
                  },
                  N = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                  O = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                  P = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/gi,
                  Q = 0,
                  R = "S" + (+new Date).toString(36),
                  S = function(a) {
                      return (a && a.type ? a.type : I) + R + (Q++).toString(36)
                  },
                  T = "http://www.w3.org/1999/xlink",
                  U = "http://www.w3.org/2000/svg",
                  V = {};
              c.url = function(a) {
                  return "url('#" + a + "')"
              }, c._.$ = d, c._.id = S, c.format = function() {
                  var a = /\{([^\}]+)\}/g,
                      b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                      c = function(a, c, d) {
                          var e = d;
                          return c.replace(b, function(a, b, c, d, f) {
                              b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
                          }), e = (null == e || e == d ? a : e) + ""
                      };
                  return function(b, d) {
                      return A(b).replace(a, function(a, b) {
                          return c(a, b, d)
                      })
                  }
              }(), c._.clone = f, c._.cacher = i, c.rad = k, c.deg = l, c.sin = function(a) {
                  return D.sin(c.rad(a))
              }, c.tan = function(a) {
                  return D.tan(c.rad(a))
              }, c.cos = function(a) {
                  return D.cos(c.rad(a))
              }, c.asin = function(a) {
                  return c.deg(D.asin(a))
              }, c.acos = function(a) {
                  return c.deg(D.acos(a))
              }, c.atan = function(a) {
                  return c.deg(D.atan(a))
              }, c.atan2 = function(a) {
                  return c.deg(D.atan2(a))
              }, c.angle = j, c.len = function(a, b, d, e) {
                  return Math.sqrt(c.len2(a, b, d, e))
              }, c.len2 = function(a, b, c, d) {
                  return (a - c) * (a - c) + (b - d) * (b - d)
              }, c.closestPoint = function(a, b, c) {
                  function d(a) {
                      var d = a.x - b,
                          e = a.y - c;
                      return d * d + e * e
                  }
                  for (var e, f, g, h, i = a.node, j = i.getTotalLength(), k = j / i.pathSegList.numberOfItems * .125, l = 1 / 0, m = 0; j >= m; m += k)(h = d(g = i.getPointAtLength(m))) < l && (e = g, f = m, l = h);
                  for (k *= .5; k > .5;) {
                      var n, o, p, q, r, s;
                      (p = f - k) >= 0 && (r = d(n = i.getPointAtLength(p))) < l ? (e = n, f = p, l = r) : (q = f + k) <= j && (s = d(o = i.getPointAtLength(q))) < l ? (e = o, f = q, l = s) : k *= .5
                  }
                  return e = {
                      x: e.x,
                      y: e.y,
                      length: f,
                      distance: Math.sqrt(l)
                  }
              }, c.is = e, c.snapTo = function(a, b, c) {
                  if (c = e(c, "finite") ? c : 10, e(a, "array")) {
                      for (var d = a.length; d--;)
                          if (G(a[d] - b) <= c) return a[d]
                  } else {
                      a = +a;
                      var f = b % a;
                      if (c > f) return b - f;
                      if (f > a - c) return b - f + a
                  }
                  return b
              }, c.getRGB = i(function(a) {
                  if (!a || (a = A(a)).indexOf("-") + 1) return {
                      r: -1,
                      g: -1,
                      b: -1,
                      hex: "none",
                      error: 1,
                      toString: Z
                  };
                  if ("none" == a) return {
                      r: -1,
                      g: -1,
                      b: -1,
                      hex: "none",
                      toString: Z
                  };
                  if (!(M[z](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = W(a)), !a) return {
                      r: -1,
                      g: -1,
                      b: -1,
                      hex: "none",
                      error: 1,
                      toString: Z
                  };
                  var b, d, f, g, h, i, j = a.match(K);
                  return j ? (j[2] && (f = C(j[2].substring(5), 16), d = C(j[2].substring(3, 5), 16), b = C(j[2].substring(1, 3), 16)), j[3] && (f = C((h = j[3].charAt(3)) + h, 16), d = C((h = j[3].charAt(2)) + h, 16), b = C((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = B(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), f = B(i[2]), "%" == i[2].slice(-1) && (f *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b /= 100), d = B(i[1]), "%" == i[1].slice(-1) && (d /= 100), f = B(i[2]), "%" == i[2].slice(-1) && (f /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), c.hsb2rgb(b, d, f, g)) : j[6] ? (i = j[6].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b /= 100), d = B(i[1]), "%" == i[1].slice(-1) && (d /= 100), f = B(i[2]), "%" == i[2].slice(-1) && (f /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), c.hsl2rgb(b, d, f, g)) : (b = F(D.round(b), 255), d = F(D.round(d), 255), f = F(D.round(f), 255), g = F(E(g, 0), 1), j = {
                      r: b,
                      g: d,
                      b: f,
                      toString: Z
                  }, j.hex = "#" + (16777216 | f | d << 8 | b << 16).toString(16).slice(1), j.opacity = e(g, "finite") ? g : 1, j)) : {
                      r: -1,
                      g: -1,
                      b: -1,
                      hex: "none",
                      error: 1,
                      toString: Z
                  }
              }, c), c.hsb = i(function(a, b, d) {
                  return c.hsb2rgb(a, b, d).hex
              }), c.hsl = i(function(a, b, d) {
                  return c.hsl2rgb(a, b, d).hex
              }), c.rgb = i(function(a, b, c, d) {
                  if (e(d, "finite")) {
                      var f = D.round;
                      return "rgba(" + [f(a), f(b), f(c), +d.toFixed(2)] + ")"
                  }
                  return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
              });
              var W = function(a) {
                      var b = y.doc.getElementsByTagName("head")[0] || y.doc.getElementsByTagName("svg")[0],
                          c = "rgb(255, 0, 0)";
                      return (W = i(function(a) {
                          if ("red" == a.toLowerCase()) return c;
                          b.style.color = c, b.style.color = a;
                          var d = y.doc.defaultView.getComputedStyle(b, I).getPropertyValue("color");
                          return d == c ? null : d
                      }))(a)
                  },
                  X = function() {
                      return "hsb(" + [this.h, this.s, this.b] + ")"
                  },
                  Y = function() {
                      return "hsl(" + [this.h, this.s, this.l] + ")"
                  },
                  Z = function() {
                      return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                  },
                  $ = function(a, b, d) {
                      if (null == b && e(a, "object") && "r" in a && "g" in a && "b" in a && (d = a.b, b = a.g, a = a.r), null == b && e(a, string)) {
                          var f = c.getRGB(a);
                          a = f.r, b = f.g, d = f.b
                      }
                      return (a > 1 || b > 1 || d > 1) && (a /= 255, b /= 255, d /= 255), [a, b, d]
                  },
                  _ = function(a, b, d, f) {
                      a = D.round(255 * a), b = D.round(255 * b), d = D.round(255 * d);
                      var g = {
                          r: a,
                          g: b,
                          b: d,
                          opacity: e(f, "finite") ? f : 1,
                          hex: c.rgb(a, b, d),
                          toString: Z
                      };
                      return e(f, "finite") && (g.opacity = f), g
                  };
              c.color = function(a) {
                  var b;
                  return e(a, "object") && "h" in a && "s" in a && "b" in a ? (b = c.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : e(a, "object") && "h" in a && "s" in a && "l" in a ? (b = c.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : (e(a, "string") && (a = c.getRGB(a)), e(a, "object") && "r" in a && "g" in a && "b" in a && !("error" in a) ? (b = c.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = c.rgb2hsb(a), a.v = b.b) : (a = {
                      hex: "none"
                  }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1, a.error = 1)), a.toString = Z, a
              }, c.hsb2rgb = function(a, b, c, d) {
                  e(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, d = a.o, a = a.h), a *= 360;
                  var f, g, h, i, j;
                  return a = a % 360 / 60, j = c * b, i = j * (1 - G(a % 2 - 1)), f = g = h = c - j, a = ~~a, f += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], _(f, g, h, d)
              }, c.hsl2rgb = function(a, b, c, d) {
                  e(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
                  var f, g, h, i, j;
                  return a = a % 360 / 60, j = 2 * b * (.5 > c ? c : 1 - c), i = j * (1 - G(a % 2 - 1)), f = g = h = c - j / 2, a = ~~a, f += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], _(f, g, h, d)
              }, c.rgb2hsb = function(a, b, c) {
                  c = $(a, b, c), a = c[0], b = c[1], c = c[2];
                  var d, e, f, g;
                  return f = E(a, b, c), g = f - F(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = 0 == g ? 0 : g / f, {
                      h: d,
                      s: e,
                      b: f,
                      toString: X
                  }
              }, c.rgb2hsl = function(a, b, c) {
                  c = $(a, b, c), a = c[0], b = c[1], c = c[2];
                  var d, e, f, g, h, i;
                  return g = E(a, b, c), h = F(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
                      h: d,
                      s: e,
                      l: f,
                      toString: Y
                  }
              }, c.parsePathString = function(a) {
                  if (!a) return null;
                  var b = c.path(a);
                  if (b.arr) return c.path.clone(b.arr);
                  var d = {
                          a: 7,
                          c: 6,
                          o: 2,
                          h: 1,
                          l: 2,
                          m: 2,
                          r: 4,
                          q: 4,
                          s: 4,
                          t: 2,
                          v: 1,
                          u: 3,
                          z: 0
                      },
                      f = [];
                  return e(a, "array") && e(a[0], "array") && (f = c.path.clone(a)), f.length || A(a).replace(N, function(a, b, c) {
                      var e = [],
                          g = b.toLowerCase();
                      if (c.replace(P, function(a, b) {
                              b && e.push(+b)
                          }), "m" == g && e.length > 2 && (f.push([b].concat(e.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "o" == g && 1 == e.length && f.push([b, e[0]]), "r" == g) f.push([b].concat(e));
                      else
                          for (; e.length >= d[g] && (f.push([b].concat(e.splice(0, d[g]))), d[g]););
                  }), f.toString = c.path.toString, b.arr = c.path.clone(f), f
              };
              var aa = c.parseTransformString = function(a) {
                  if (!a) return null;
                  var b = [];
                  return e(a, "array") && e(a[0], "array") && (b = c.path.clone(a)), b.length || A(a).replace(O, function(a, c, d) {
                      var e = [];
                      c.toLowerCase(), d.replace(P, function(a, b) {
                          b && e.push(+b)
                      }), b.push([c].concat(e))
                  }), b.toString = c.path.toString, b
              };
              c._.svgTransform2string = m, c._.rgTransform = /^[a-z][\s]*-?\.?\d/i, c._.transform2matrix = n, c._unit2px = q, y.doc.contains || y.doc.compareDocumentPosition ? function(a, b) {
                  var c = 9 == a.nodeType ? a.documentElement : a,
                      d = b && b.parentNode;
                  return a == d || !(!d || 1 != d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
              } : function(a, b) {
                  if (b)
                      for (; b;)
                          if (b = b.parentNode, b == a) return !0;
                  return !1
              }, c._.getSomeDefs = o, c._.getSomeSVG = p, c.select = function(a) {
                  return a = A(a).replace(/([^\\]):/g, "$1\\:"), w(y.doc.querySelector(a))
              }, c.selectAll = function(a) {
                  for (var b = y.doc.querySelectorAll(a), d = (c.set || Array)(), e = 0; e < b.length; e++) d.push(w(b[e]));
                  return d
              }, setInterval(function() {
                  for (var a in V)
                      if (V[z](a)) {
                          var b = V[a],
                              c = b.node;
                          ("svg" != b.type && !c.ownerSVGElement || "svg" == b.type && (!c.parentNode || "ownerSVGElement" in c.parentNode && !c.ownerSVGElement)) && delete V[a]
                      }
              }, 1e4), s.prototype.attr = function(a, c) {
                  var d = this,
                      f = d.node;
                  if (!a) {
                      if (1 != f.nodeType) return {
                          text: f.nodeValue
                      };
                      for (var g = f.attributes, h = {}, i = 0, j = g.length; j > i; i++) h[g[i].nodeName] = g[i].nodeValue;
                      return h
                  }
                  if (e(a, "string")) {
                      if (!(arguments.length > 1)) return b("snap.util.getattr." + a, d).firstDefined();
                      var k = {};
                      k[a] = c, a = k
                  }
                  for (var l in a) a[z](l) && b("snap.util.attr." + l, d, a[l]);
                  return d
              }, c.parse = function(a) {
                  var b = y.doc.createDocumentFragment(),
                      c = !0,
                      d = y.doc.createElement("div");
                  if (a = A(a), a.match(/^\s*<\s*svg(?:\s|>)/) || (a = "<svg>" + a + "</svg>", c = !1), d.innerHTML = a, a = d.getElementsByTagName("svg")[0])
                      if (c) b = a;
                      else
                          for (; a.firstChild;) b.appendChild(a.firstChild);
                  return new t(b)
              }, c.fragment = function() {
                  for (var a = Array.prototype.slice.call(arguments, 0), b = y.doc.createDocumentFragment(), d = 0, e = a.length; e > d; d++) {
                      var f = a[d];
                      f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), "string" == typeof f && b.appendChild(c.parse(f).node)
                  }
                  return new t(b)
              }, c._.make = u, c._.wrap = w, v.prototype.el = function(a, b) {
                  var c = u(a, this.node);
                  return b && c.attr(b), c
              }, s.prototype.children = function() {
                  for (var a = [], b = this.node.childNodes, d = 0, e = b.length; e > d; d++) a[d] = c(b[d]);
                  return a
              }, s.prototype.toJSON = function() {
                  var a = [];
                  return x([this], a), a[0]
              }, b.on("snap.util.getattr", function() {
                  var a = b.nt();
                  a = a.substring(a.lastIndexOf(".") + 1);
                  var c = a.replace(/[A-Z]/g, function(a) {
                      return "-" + a.toLowerCase()
                  });
                  return ba[z](c) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(c) : d(this.node, a)
              });
              var ba = {
                  "alignment-baseline": 0,
                  "baseline-shift": 0,
                  clip: 0,
                  "clip-path": 0,
                  "clip-rule": 0,
                  color: 0,
                  "color-interpolation": 0,
                  "color-interpolation-filters": 0,
                  "color-profile": 0,
                  "color-rendering": 0,
                  cursor: 0,
                  direction: 0,
                  display: 0,
                  "dominant-baseline": 0,
                  "enable-background": 0,
                  fill: 0,
                  "fill-opacity": 0,
                  "fill-rule": 0,
                  filter: 0,
                  "flood-color": 0,
                  "flood-opacity": 0,
                  font: 0,
                  "font-family": 0,
                  "font-size": 0,
                  "font-size-adjust": 0,
                  "font-stretch": 0,
                  "font-style": 0,
                  "font-variant": 0,
                  "font-weight": 0,
                  "glyph-orientation-horizontal": 0,
                  "glyph-orientation-vertical": 0,
                  "image-rendering": 0,
                  kerning: 0,
                  "letter-spacing": 0,
                  "lighting-color": 0,
                  marker: 0,
                  "marker-end": 0,
                  "marker-mid": 0,
                  "marker-start": 0,
                  mask: 0,
                  opacity: 0,
                  overflow: 0,
                  "pointer-events": 0,
                  "shape-rendering": 0,
                  "stop-color": 0,
                  "stop-opacity": 0,
                  stroke: 0,
                  "stroke-dasharray": 0,
                  "stroke-dashoffset": 0,
                  "stroke-linecap": 0,
                  "stroke-linejoin": 0,
                  "stroke-miterlimit": 0,
                  "stroke-opacity": 0,
                  "stroke-width": 0,
                  "text-anchor": 0,
                  "text-decoration": 0,
                  "text-rendering": 0,
                  "unicode-bidi": 0,
                  visibility: 0,
                  "word-spacing": 0,
                  "writing-mode": 0
              };
              b.on("snap.util.attr", function(a) {
                      var c = b.nt(),
                          e = {};
                      c = c.substring(c.lastIndexOf(".") + 1), e[c] = a;
                      var f = c.replace(/-(\w)/gi, function(a, b) {
                              return b.toUpperCase()
                          }),
                          g = c.replace(/[A-Z]/g, function(a) {
                              return "-" + a.toLowerCase()
                          });
                      ba[z](g) ? this.node.style[f] = null == a ? I : a : d(this.node, e)
                  }),
                  function() {}(v.prototype), c.ajax = function(a, c, d, f) {
                      var g = new XMLHttpRequest,
                          h = S();
                      if (g) {
                          if (e(c, "function")) f = d, d = c, c = null;
                          else if (e(c, "object")) {
                              var i = [];
                              for (var j in c) c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));
                              c = i.join("&")
                          }
                          return g.open(c ? "POST" : "GET", a, !0), c && (g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), g.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), d && (b.once("snap.ajax." + h + ".0", d), b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)), g.onreadystatechange = function() {
                              4 == g.readyState && b("snap.ajax." + h + "." + g.status, f, g)
                          }, 4 == g.readyState ? g : (g.send(c), g)
                      }
                  }, c.load = function(a, b, d) {
                      c.ajax(a, function(a) {
                          var e = c.parse(a.responseText);
                          d ? b.call(d, e) : b(e)
                      })
                  };
            //   var ca = function(a) {
            //       var b = a.getBoundingClientRect(),
            //           c = a.ownerDocument,
            //           d = c.body,
            //           e = c.documentElement,
            //           f = e.clientTop || d.clientTop || 0,
            //           h = e.clientLeft || d.clientLeft || 0,
            //           i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
            //           j = b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h;
            //       return {
            //           y: i,
            //           x: j
            //       }
            //   };
              return c.getElementByPoint = function(a, b) {
                  var c = this,
                      d = (c.canvas, y.doc.elementFromPoint(a, b));
                  if (y.win.opera && "svg" == d.tagName) {
                      var e = ca(d),
                          f = d.createSVGRect();
                      f.x = a - e.x, f.y = b - e.y, f.width = f.height = 1;
                      var g = d.getIntersectionList(f, null);
                      g.length && (d = g[g.length - 1])
                  }
                  return d ? w(d) : null
              }, c.plugin = function(a) {
                  a(c, s, v, y, t)
              }, y.win.Snap = c, c
          }(a || this);
      return d.plugin(function(d, e, f, g, h) {
          function i(a, b) {
              if (null == b) {
                  var c = !0;
                  if (b = a.node.getAttribute("linearGradient" == a.type || "radialGradient" == a.type ? "gradientTransform" : "pattern" == a.type ? "patternTransform" : "transform"), !b) return new d.Matrix;
                  b = d._.svgTransform2string(b)
              } else b = d._.rgTransform.test(b) ? o(b).replace(/\.{3}|\u2026/g, a._.transform || "") : d._.svgTransform2string(b), n(b, "array") && (b = d.path ? d.path.toString.call(b) : o(b)), a._.transform = b;
              var e = d._.transform2matrix(b, a.getBBox(1));
              return c ? e : void(a.matrix = e)
          }

          function j(a) {
              function b(a, b) {
                  var c = q(a.node, b);
                  c = c && c.match(f), c = c && c[2], c && "#" == c.charAt() && (c = c.substring(1), c && (h[c] = (h[c] || []).concat(function(c) {
                      var d = {};
                      d[b] = URL(c), q(a.node, d)
                  })))
              }

              function c(a) {
                  var b = q(a.node, "xlink:href");
                  b && "#" == b.charAt() && (b = b.substring(1), b && (h[b] = (h[b] || []).concat(function(b) {
                      a.attr("xlink:href", "#" + b)
                  })))
              }
              for (var d, e = a.selectAll("*"), f = /^\s*url\(("|'|)(.*)\1\)\s*$/, g = [], h = {}, i = 0, j = e.length; j > i; i++) {
                  d = e[i], b(d, "fill"), b(d, "stroke"), b(d, "filter"), b(d, "mask"), b(d, "clip-path"), c(d);
                  var k = q(d.node, "id");
                  k && (q(d.node, {
                      id: d.id
                  }), g.push({
                      old: k,
                      id: d.id
                  }))
              }
              for (i = 0, j = g.length; j > i; i++) {
                  var l = h[g[i].old];
                  if (l)
                      for (var m = 0, n = l.length; n > m; m++) l[m](g[i].id)
              }
          }

          function k(a, b, c) {
              return function(d) {
                  var e = d.slice(a, b);
                  return 1 == e.length && (e = e[0]), c ? c(e) : e
              }
          }

          function l(a) {
              return function() {
                  var b = a ? "<" + this.type : "",
                      c = this.node.attributes,
                      d = this.node.childNodes;
                  if (a)
                      for (var e = 0, f = c.length; f > e; e++) b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';
                  if (d.length) {
                      for (a && (b += ">"), e = 0, f = d.length; f > e; e++) 3 == d[e].nodeType ? b += d[e].nodeValue : 1 == d[e].nodeType && (b += u(d[e]).toString());
                      a && (b += "</" + this.type + ">")
                  } else a && (b += "/>");
                  return b
              }
          }
          var m = e.prototype,
              n = d.is,
              o = String,
              p = d._unit2px,
              q = d._.$,
              r = d._.make,
              s = d._.getSomeDefs,
              t = "hasOwnProperty",
              u = d._.wrap;
          m.getBBox = function(a) {
              if (!d.Matrix || !d.path) return this.node.getBBox();
              var b = this,
                  c = new d.Matrix;
              if (b.removed) return d._.box();
              for (;
                  "use" == b.type;)
                  if (a || (c = c.add(b.transform().localMatrix.translate(b.attr("x") || 0, b.attr("y") || 0))), b.original) b = b.original;
                  else {
                      var e = b.attr("xlink:href");
                      b = b.original = b.node.ownerDocument.getElementById(e.substring(e.indexOf("#") + 1))
                  }
              var f = b._,
                  g = d.path.get[b.type] || d.path.get.deflt;
              try {
                  return a ? (f.bboxwt = g ? d.path.getBBox(b.realPath = g(b)) : d._.box(b.node.getBBox()), d._.box(f.bboxwt)) : (b.realPath = g(b), b.matrix = b.transform().localMatrix, f.bbox = d.path.getBBox(d.path.map(b.realPath, c.add(b.matrix))), d._.box(f.bbox))
              } catch (h) {
                  return d._.box()
              }
          };
          var v = function() {
              return this.string
          };
          m.transform = function(a) {
              var b = this._;
              if (null == a) {
                  for (var c, e = this, f = new d.Matrix(this.node.getCTM()), g = i(this), h = [g], j = new d.Matrix, k = g.toTransformString(), l = o(g) == o(this.matrix) ? o(b.transform) : k;
                      "svg" != e.type && (e = e.parent());) h.push(i(e));
                  for (c = h.length; c--;) j.add(h[c]);
                  return {
                      string: l,
                      globalMatrix: f,
                      totalMatrix: j,
                      localMatrix: g,
                      diffMatrix: f.clone().add(g.invert()),
                      global: f.toTransformString(),
                      total: j.toTransformString(),
                      local: k,
                      toString: v
                  }
              }
              return a instanceof d.Matrix ? (this.matrix = a, this._.transform = a.toTransformString()) : i(this, a), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? q(this.node, {
                  gradientTransform: this.matrix
              }) : "pattern" == this.type ? q(this.node, {
                  patternTransform: this.matrix
              }) : q(this.node, {
                  transform: this.matrix
              })), this
          }, m.parent = function() {
              return u(this.node.parentNode)
          }, m.append = m.add = function(a) {
              if (a) {
                  if ("set" == a.type) {
                      var b = this;
                      return a.forEach(function(a) {
                          b.add(a)
                      }), this
                  }
                  a = u(a), this.node.appendChild(a.node), a.paper = this.paper
              }
              return this
          }, m.appendTo = function(a) {
              return a && (a = u(a), a.append(this)), this
          }, m.prepend = function(a) {
              if (a) {
                  if ("set" == a.type) {
                      var b, c = this;
                      return a.forEach(function(a) {
                          b ? b.after(a) : c.prepend(a), b = a
                      }), this
                  }
                  a = u(a);
                  var d = a.parent();
                  this.node.insertBefore(a.node, this.node.firstChild), this.add && this.add(), a.paper = this.paper, this.parent() && this.parent().add(), d && d.add()
              }
              return this
          }, m.prependTo = function(a) {
              return a = u(a), a.prepend(this), this
          }, m.before = function(a) {
              if ("set" == a.type) {
                  var b = this;
                  return a.forEach(function(a) {
                      var c = a.parent();
                      b.node.parentNode.insertBefore(a.node, b.node), c && c.add()
                  }), this.parent().add(), this
              }
              a = u(a);
              var c = a.parent();
              return this.node.parentNode.insertBefore(a.node, this.node), this.parent() && this.parent().add(), c && c.add(), a.paper = this.paper, this
          }, m.after = function(a) {
              a = u(a);
              var b = a.parent();
              return this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node), this.parent() && this.parent().add(), b && b.add(), a.paper = this.paper, this
          }, m.insertBefore = function(a) {
              a = u(a);
              var b = this.parent();
              return a.node.parentNode.insertBefore(this.node, a.node), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
          }, m.insertAfter = function(a) {
              a = u(a);
              var b = this.parent();
              return a.node.parentNode.insertBefore(this.node, a.node.nextSibling), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
          }, m.remove = function() {
              var a = this.parent();
              return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, a && a.add(), this
          }, m.select = function(a) {
              return u(this.node.querySelector(a))
          }, m.selectAll = function(a) {
              for (var b = this.node.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(u(b[e]));
              return c
          }, m.asPX = function(a, b) {
              return null == b && (b = this.attr(a)), +p(this, a, b)
          }, m.use = function() {
              var a, b = this.node.id;
              return b || (b = this.id, q(this.node, {
                  id: b
              })), a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? r(this.type, this.node.parentNode) : r("use", this.node.parentNode), q(a.node, {
                  "xlink:href": "#" + b
              }), a.original = this, a
          }, m.clone = function() {
              var a = u(this.node.cloneNode(!0));
              return q(a.node, "id") && q(a.node, {
                  id: a.id
              }), j(a), a.insertAfter(this), a
          }, m.toDefs = function() {
              var a = s(this);
              return a.appendChild(this.node), this
          }, m.pattern = m.toPattern = function(a, b, c, d) {
              var e = r("pattern", s(this));
              return null == a && (a = this.getBBox()), n(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, a = a.x), q(e.node, {
                  x: a,
                  y: b,
                  width: c,
                  height: d,
                  patternUnits: "userSpaceOnUse",
                  id: e.id,
                  viewBox: [a, b, c, d].join(" ")
              }), e.node.appendChild(this.node), e
          }, m.marker = function(a, b, c, d, e, f) {
              var g = r("marker", s(this));
              return null == a && (a = this.getBBox()), n(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, e = a.refX || a.cx, f = a.refY || a.cy, a = a.x), q(g.node, {
                  viewBox: [a, b, c, d].join(" "),
                  markerWidth: c,
                  markerHeight: d,
                  orient: "auto",
                  refX: e || 0,
                  refY: f || 0,
                  id: g.id
              }), g.node.appendChild(this.node), g
          };
          var w = function(a, b, d, e) {
              "function" != typeof d || d.length || (e = d, d = c.linear), this.attr = a, this.dur = b, d && (this.easing = d), e && (this.callback = e)
          };
          d._.Animation = w, d.animation = function(a, b, c, d) {
              return new w(a, b, c, d)
          }, m.inAnim = function() {
              var a = this,
                  b = [];
              for (var c in a.anims) a.anims[t](c) && ! function(a) {
                  b.push({
                      anim: new w(a._attrs, a.dur, a.easing, a._callback),
                      mina: a,
                      curStatus: a.status(),
                      status: function(b) {
                          return a.status(b)
                      },
                      stop: function() {
                          a.stop()
                      }
                  })
              }(a.anims[c]);
              return b
          }, d.animate = function(a, d, e, f, g, h) {
              "function" != typeof g || g.length || (h = g, g = c.linear);
              var i = c.time(),
                  j = c(a, d, i, i + f, c.time, e, g);
              return h && b.once("mina.finish." + j.id, h), j
          }, m.stop = function() {
              for (var a = this.inAnim(), b = 0, c = a.length; c > b; b++) a[b].stop();
              return this
          }, m.animate = function(a, d, e, f) {
              "function" != typeof e || e.length || (f = e, e = c.linear), a instanceof w && (f = a.callback, e = a.easing, d = a.dur, a = a.attr);
              var g, h, i, j, l = [],
                  m = [],
                  p = {},
                  q = this;
              for (var r in a)
                  if (a[t](r)) {
                      q.equal ? (j = q.equal(r, o(a[r])), g = j.from, h = j.to, i = j.f) : (g = +q.attr(r), h = +a[r]);
                      var s = n(g, "array") ? g.length : 1;
                      p[r] = k(l.length, l.length + s, i), l = l.concat(g), m = m.concat(h)
                  }
              var u = c.time(),
                  v = c(l, m, u, u + d, c.time, function(a) {
                      var b = {};
                      for (var c in p) p[t](c) && (b[c] = p[c](a));
                      q.attr(b)
                  }, e);
              return q.anims[v.id] = v, v._attrs = a, v._callback = f, b("snap.animcreated." + q.id, v), b.once("mina.finish." + v.id, function() {
                  delete q.anims[v.id], f && f.call(q)
              }), b.once("mina.stop." + v.id, function() {
                  delete q.anims[v.id]
              }), q
          };
          var x = {};
          m.data = function(a, c) {
              var e = x[this.id] = x[this.id] || {};
              if (0 == arguments.length) return b("snap.data.get." + this.id, this, e, null),
                  e;
              if (1 == arguments.length) {
                  if (d.is(a, "object")) {
                      for (var f in a) a[t](f) && this.data(f, a[f]);
                      return this
                  }
                  return b("snap.data.get." + this.id, this, e[a], a), e[a]
              }
              return e[a] = c, b("snap.data.set." + this.id, this, c, a), this
          }, m.removeData = function(a) {
              return null == a ? x[this.id] = {} : x[this.id] && delete x[this.id][a], this
          }, m.outerSVG = m.toString = l(1), m.innerSVG = l(), m.toDataURL = function() {
              if (a && a.btoa) {
                  var b = this.getBBox(),
                      c = d.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                          x: +b.x.toFixed(3),
                          y: +b.y.toFixed(3),
                          width: +b.width.toFixed(3),
                          height: +b.height.toFixed(3),
                          contents: this.outerSVG()
                      });
                  return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(c)))
              }
          }, h.prototype.select = m.select, h.prototype.selectAll = m.selectAll
      }), d.plugin(function(a) {
          function b(a, b, d, e, f, g) {
              return null == b && "[object SVGMatrix]" == c.call(a) ? (this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.e = a.e, void(this.f = a.f)) : void(null != a ? (this.a = +a, this.b = +b, this.c = +d, this.d = +e, this.e = +f, this.f = +g) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
          }
          var c = Object.prototype.toString,
              d = String,
              e = Math,
              f = "";
          ! function(c) {
              function g(a) {
                  return a[0] * a[0] + a[1] * a[1]
              }

              function h(a) {
                  var b = e.sqrt(g(a));
                  a[0] && (a[0] /= b), a[1] && (a[1] /= b)
              }
              c.add = function(a, c, d, e, f, g) {
                  var h, i, j, k, l = [
                          [],
                          [],
                          []
                      ],
                      m = [
                          [this.a, this.c, this.e],
                          [this.b, this.d, this.f],
                          [0, 0, 1]
                      ],
                      n = [
                          [a, d, f],
                          [c, e, g],
                          [0, 0, 1]
                      ];
                  for (a && a instanceof b && (n = [
                          [a.a, a.c, a.e],
                          [a.b, a.d, a.f],
                          [0, 0, 1]
                      ]), h = 0; 3 > h; h++)
                      for (i = 0; 3 > i; i++) {
                          for (k = 0, j = 0; 3 > j; j++) k += m[h][j] * n[j][i];
                          l[h][i] = k
                      }
                  return this.a = l[0][0], this.b = l[1][0], this.c = l[0][1], this.d = l[1][1], this.e = l[0][2], this.f = l[1][2], this
              }, c.invert = function() {
                  var a = this,
                      c = a.a * a.d - a.b * a.c;
                  return new b(a.d / c, -a.b / c, -a.c / c, a.a / c, (a.c * a.f - a.d * a.e) / c, (a.b * a.e - a.a * a.f) / c)
              }, c.clone = function() {
                  return new b(this.a, this.b, this.c, this.d, this.e, this.f)
              }, c.translate = function(a, b) {
                  return this.add(1, 0, 0, 1, a, b)
              }, c.scale = function(a, b, c, d) {
                  return null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d), this
              }, c.rotate = function(b, c, d) {
                  b = a.rad(b), c = c || 0, d = d || 0;
                  var f = +e.cos(b).toFixed(9),
                      g = +e.sin(b).toFixed(9);
                  return this.add(f, g, -g, f, c, d), this.add(1, 0, 0, 1, -c, -d)
              }, c.x = function(a, b) {
                  return a * this.a + b * this.c + this.e
              }, c.y = function(a, b) {
                  return a * this.b + b * this.d + this.f
              }, c.get = function(a) {
                  return +this[d.fromCharCode(97 + a)].toFixed(4)
              }, c.toString = function() {
                  return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
              }, c.offset = function() {
                  return [this.e.toFixed(4), this.f.toFixed(4)]
              }, c.determinant = function() {
                  return this.a * this.d - this.b * this.c
              }, c.split = function() {
                  var b = {};
                  b.dx = this.e, b.dy = this.f;
                  var c = [
                      [this.a, this.c],
                      [this.b, this.d]
                  ];
                  b.scalex = e.sqrt(g(c[0])), h(c[0]), b.shear = c[0][0] * c[1][0] + c[0][1] * c[1][1], c[1] = [c[1][0] - c[0][0] * b.shear, c[1][1] - c[0][1] * b.shear], b.scaley = e.sqrt(g(c[1])), h(c[1]), b.shear /= b.scaley, this.determinant() < 0 && (b.scalex = -b.scalex);
                  var d = -c[0][1],
                      f = c[1][1];
                  return 0 > f ? (b.rotate = a.deg(e.acos(f)), 0 > d && (b.rotate = 360 - b.rotate)) : b.rotate = a.deg(e.asin(d)), b.isSimple = !(+b.shear.toFixed(9) || b.scalex.toFixed(9) != b.scaley.toFixed(9) && b.rotate), b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate, b.noRotation = !+b.shear.toFixed(9) && !b.rotate, b
              }, c.toTransformString = function(a) {
                  var b = a || this.split();
                  return +b.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [+b.dx.toFixed(4), +b.dy.toFixed(4)] : f) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : f) + (b.rotate ? "r" + [+b.rotate.toFixed(4), 0, 0] : f))
              }
          }(b.prototype), a.Matrix = b, a.matrix = function(a, c, d, e, f, g) {
              return new b(a, c, d, e, f, g)
          }
      }), d.plugin(function(a, c, d, e, f) {
          function g(d) {
              return function(e) {
                  if (b.stop(), e instanceof f && 1 == e.node.childNodes.length && ("radialGradient" == e.node.firstChild.tagName || "linearGradient" == e.node.firstChild.tagName || "pattern" == e.node.firstChild.tagName) && (e = e.node.firstChild, n(this).appendChild(e), e = l(e)), e instanceof c)
                      if ("radialGradient" == e.type || "linearGradient" == e.type || "pattern" == e.type) {
                          e.node.id || p(e.node, {
                              id: e.id
                          });
                          var g = q(e.node.id)
                      } else g = e.attr(d);
                  else if (g = a.color(e), g.error) {
                      var h = a(n(this).ownerSVGElement).gradient(e);
                      h ? (h.node.id || p(h.node, {
                          id: h.id
                      }), g = q(h.node.id)) : g = e
                  } else g = r(g);
                  var i = {};
                  i[d] = g, p(this.node, i), this.node.style[d] = t
              }
          }

          function h(a) {
              b.stop(), a == +a && (a += "px"), this.node.style.fontSize = a
          }

          function i(a) {
              for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
                  var f = c[d];
                  3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && b.push(1 == f.childNodes.length && 3 == f.firstChild.nodeType ? f.firstChild.nodeValue : i(f))
              }
              return b
          }

          function j() {
              return b.stop(), this.node.style.fontSize
          }
          var k = a._.make,
              l = a._.wrap,
              m = a.is,
              n = a._.getSomeDefs,
              o = /^url\(#?([^)]+)\)$/,
              p = a._.$,
              q = a.url,
              r = String,
              s = a._.separator,
              t = "";
          b.on("snap.util.attr.mask", function(a) {
                  if (a instanceof c || a instanceof f) {
                      if (b.stop(), a instanceof f && 1 == a.node.childNodes.length && (a = a.node.firstChild, n(this).appendChild(a), a = l(a)), "mask" == a.type) var d = a;
                      else d = k("mask", n(this)), d.node.appendChild(a.node);
                      !d.node.id && p(d.node, {
                          id: d.id
                      }), p(this.node, {
                          mask: q(d.id)
                      })
                  }
              }),
              function(a) {
                  b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a)
              }(function(a) {
                  if (a instanceof c || a instanceof f) {
                      if (b.stop(), "clipPath" == a.type) var d = a;
                      else d = k("clipPath", n(this)), d.node.appendChild(a.node), !d.node.id && p(d.node, {
                          id: d.id
                      });
                      p(this.node, {
                          "clip-path": q(d.node.id || d.id)
                      })
                  }
              }), b.on("snap.util.attr.fill", g("fill")), b.on("snap.util.attr.stroke", g("stroke"));
          var u = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
          b.on("snap.util.grad.parse", function(a) {
                  a = r(a);
                  var b = a.match(u);
                  if (!b) return null;
                  var c = b[1],
                      d = b[2],
                      e = b[3];
                  return d = d.split(/\s*,\s*/).map(function(a) {
                      return +a == a ? +a : a
                  }), 1 == d.length && 0 == d[0] && (d = []), e = e.split("-"), e = e.map(function(a) {
                      a = a.split(":");
                      var b = {
                          color: a[0]
                      };
                      return a[1] && (b.offset = parseFloat(a[1])), b
                  }), {
                      type: c,
                      params: d,
                      stops: e
                  }
              }), b.on("snap.util.attr.d", function(c) {
                  b.stop(), m(c, "array") && m(c[0], "array") && (c = a.path.toString.call(c)), c = r(c), c.match(/[ruo]/i) && (c = a.path.toAbsolute(c)), p(this.node, {
                      d: c
                  })
              })(-1), b.on("snap.util.attr.#text", function(a) {
                  b.stop(), a = r(a);
                  for (var c = e.doc.createTextNode(a); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                  this.node.appendChild(c)
              })(-1), b.on("snap.util.attr.path", function(a) {
                  b.stop(), this.attr({
                      d: a
                  })
              })(-1), b.on("snap.util.attr.class", function(a) {
                  b.stop(), this.node.className.baseVal = a
              })(-1), b.on("snap.util.attr.viewBox", function(a) {
                  var c;
                  c = m(a, "object") && "x" in a ? [a.x, a.y, a.width, a.height].join(" ") : m(a, "array") ? a.join(" ") : a, p(this.node, {
                      viewBox: c
                  }), b.stop()
              })(-1), b.on("snap.util.attr.transform", function(a) {
                  this.transform(a), b.stop()
              })(-1), b.on("snap.util.attr.r", function(a) {
                  "rect" == this.type && (b.stop(), p(this.node, {
                      rx: a,
                      ry: a
                  }))
              })(-1), b.on("snap.util.attr.textpath", function(a) {
                  if (b.stop(), "text" == this.type) {
                      var d, e, f;
                      if (!a && this.textPath) {
                          for (e = this.textPath; e.node.firstChild;) this.node.appendChild(e.node.firstChild);
                          return e.remove(), void delete this.textPath
                      }
                      if (m(a, "string")) {
                          var g = n(this),
                              h = l(g.parentNode).path(a);
                          g.appendChild(h.node), d = h.id, h.attr({
                              id: d
                          })
                      } else a = l(a), a instanceof c && (d = a.attr("id"), d || (d = a.id, a.attr({
                          id: d
                      })));
                      if (d)
                          if (e = this.textPath, f = this.node, e) e.attr({
                              "xlink:href": "#" + d
                          });
                          else {
                              for (e = p("textPath", {
                                      "xlink:href": "#" + d
                                  }); f.firstChild;) e.appendChild(f.firstChild);
                              f.appendChild(e), this.textPath = l(e)
                          }
                  }
              })(-1), b.on("snap.util.attr.text", function(a) {
                  if ("text" == this.type) {
                      for (var c = this.node, d = function(a) {
                              var b = p("tspan");
                              if (m(a, "array"))
                                  for (var c = 0; c < a.length; c++) b.appendChild(d(a[c]));
                              else b.appendChild(e.doc.createTextNode(a));
                              return b.normalize && b.normalize(), b
                          }; c.firstChild;) c.removeChild(c.firstChild);
                      for (var f = d(a); f.firstChild;) c.appendChild(f.firstChild)
                  }
                  b.stop()
              })(-1), b.on("snap.util.attr.fontSize", h)(-1), b.on("snap.util.attr.font-size", h)(-1), b.on("snap.util.getattr.transform", function() {
                  return b.stop(), this.transform()
              })(-1), b.on("snap.util.getattr.textpath", function() {
                  return b.stop(), this.textPath
              })(-1),
              function() {
                  function c(c) {
                      return function() {
                          b.stop();
                          var d = e.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + c);
                          return "none" == d ? d : a(e.doc.getElementById(d.match(o)[1]))
                      }
                  }

                  function d(a) {
                      return function(c) {
                          b.stop();
                          var d = "marker" + a.charAt(0).toUpperCase() + a.substring(1);
                          if ("" == c || !c) return void(this.node.style[d] = "none");
                          if ("marker" == c.type) {
                              var e = c.node.id;
                              return e || p(c.node, {
                                  id: c.id
                              }), void(this.node.style[d] = q(e))
                          }
                      }
                  }
                  b.on("snap.util.getattr.marker-end", c("end"))(-1), b.on("snap.util.getattr.markerEnd", c("end"))(-1), b.on("snap.util.getattr.marker-start", c("start"))(-1), b.on("snap.util.getattr.markerStart", c("start"))(-1), b.on("snap.util.getattr.marker-mid", c("mid"))(-1), b.on("snap.util.getattr.markerMid", c("mid"))(-1), b.on("snap.util.attr.marker-end", d("end"))(-1), b.on("snap.util.attr.markerEnd", d("end"))(-1), b.on("snap.util.attr.marker-start", d("start"))(-1), b.on("snap.util.attr.markerStart", d("start"))(-1), b.on("snap.util.attr.marker-mid", d("mid"))(-1), b.on("snap.util.attr.markerMid", d("mid"))(-1)
              }(), b.on("snap.util.getattr.r", function() {
                  return "rect" == this.type && p(this.node, "rx") == p(this.node, "ry") ? (b.stop(), p(this.node, "rx")) : void 0
              })(-1), b.on("snap.util.getattr.text", function() {
                  if ("text" == this.type || "tspan" == this.type) {
                      b.stop();
                      var a = i(this.node);
                      return 1 == a.length ? a[0] : a
                  }
              })(-1), b.on("snap.util.getattr.#text", function() {
                  return this.node.textContent
              })(-1), b.on("snap.util.getattr.viewBox", function() {
                  b.stop();
                  var c = p(this.node, "viewBox");
                  return c ? (c = c.split(s), a._.box(+c[0], +c[1], +c[2], +c[3])) : void 0
              })(-1), b.on("snap.util.getattr.points", function() {
                  var a = p(this.node, "points");
                  return b.stop(), a ? a.split(s) : void 0
              })(-1), b.on("snap.util.getattr.path", function() {
                  var a = p(this.node, "d");
                  return b.stop(), a
              })(-1), b.on("snap.util.getattr.class", function() {
                  return this.node.className.baseVal
              })(-1), b.on("snap.util.getattr.fontSize", j)(-1), b.on("snap.util.getattr.font-size", j)(-1)
      }), d.plugin(function(a, b) {
          var c = /\S+/g,
              d = String,
              e = b.prototype;
          e.addClass = function(a) {
              var b, e, f, g, h = d(a || "").match(c) || [],
                  i = this.node,
                  j = i.className.baseVal,
                  k = j.match(c) || [];
              if (h.length) {
                  for (b = 0; f = h[b++];) e = k.indexOf(f), ~e || k.push(f);
                  g = k.join(" "), j != g && (i.className.baseVal = g)
              }
              return this
          }, e.removeClass = function(a) {
              var b, e, f, g, h = d(a || "").match(c) || [],
                  i = this.node,
                  j = i.className.baseVal,
                  k = j.match(c) || [];
              if (k.length) {
                  for (b = 0; f = h[b++];) e = k.indexOf(f), ~e && k.splice(e, 1);
                  g = k.join(" "), j != g && (i.className.baseVal = g)
              }
              return this
          }, e.hasClass = function(a) {
              var b = this.node,
                  d = b.className.baseVal,
                  e = d.match(c) || [];
              return !!~e.indexOf(a)
          }, e.toggleClass = function(a, b) {
              if (null != b) return b ? this.addClass(a) : this.removeClass(a);
              var d, e, f, g, h = (a || "").match(c) || [],
                  i = this.node,
                  j = i.className.baseVal,
                  k = j.match(c) || [];
              for (d = 0; f = h[d++];) e = k.indexOf(f), ~e ? k.splice(e, 1) : k.push(f);
              return g = k.join(" "), j != g && (i.className.baseVal = g), this
          }
      }), d.plugin(function() {
          function a(a) {
              return a
          }

          function c(a) {
              return function(b) {
                  return +b.toFixed(3) + a
              }
          }
          var d = {
                  "+": function(a, b) {
                      return a + b
                  },
                  "-": function(a, b) {
                      return a - b
                  },
                  "/": function(a, b) {
                      return a / b
                  },
                  "*": function(a, b) {
                      return a * b
                  }
              },
              e = String,
              f = /[a-z]+$/i,
              g = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
          b.on("snap.util.attr", function(a) {
              var c = e(a).match(g);
              if (c) {
                  var h = b.nt(),
                      i = h.substring(h.lastIndexOf(".") + 1),
                      j = this.attr(i),
                      k = {};
                  b.stop();
                  var l = c[3] || "",
                      m = j.match(f),
                      n = d[c[1]];
                  if (m && m == l ? a = n(parseFloat(j), +c[2]) : (j = this.asPX(i), a = n(this.asPX(i), this.asPX(i, c[2] + l))), isNaN(j) || isNaN(a)) return;
                  k[i] = a, this.attr(k)
              }
          })(-10), b.on("snap.util.equal", function(h, i) {
              var j = e(this.attr(h) || ""),
                  k = e(i).match(g);
              if (k) {
                  b.stop();
                  var l = k[3] || "",
                      m = j.match(f),
                      n = d[k[1]];
                  return m && m == l ? {
                      from: parseFloat(j),
                      to: n(parseFloat(j), +k[2]),
                      f: c(m)
                  } : (j = this.asPX(h), {
                      from: j,
                      to: n(j, this.asPX(h, k[2] + l)),
                      f: a
                  })
              }
          })(-10)
      }), d.plugin(function(c, d, e, f) {
          var g = e.prototype,
              h = c.is;
          g.rect = function(a, b, c, d, e, f) {
              var g;
              return null == f && (f = e), h(a, "object") && "[object Object]" == a ? g = a : null != a && (g = {
                  x: a,
                  y: b,
                  width: c,
                  height: d
              }, null != e && (g.rx = e, g.ry = f)), this.el("rect", g)
          }, g.circle = function(a, b, c) {
              var d;
              return h(a, "object") && "[object Object]" == a ? d = a : null != a && (d = {
                  cx: a,
                  cy: b,
                  r: c
              }), this.el("circle", d)
          };
          var i = function() {
              function a() {
                  this.parentNode.removeChild(this)
              }
              return function(b, c) {
                  var d = f.doc.createElement("img"),
                      e = f.doc.body;
                  d.style.cssText = "position:absolute;left:-9999em;top:-9999em", d.onload = function() {
                      c.call(d), d.onload = d.onerror = null, e.removeChild(d)
                  }, d.onerror = a, e.appendChild(d), d.src = b
              }
          }();
          g.image = function(a, b, d, e, f) {
                  var g = this.el("image");
                  if (h(a, "object") && "src" in a) g.attr(a);
                  else if (null != a) {
                      var j = {
                          "xlink:href": a,
                          preserveAspectRatio: "none"
                      };
                      null != b && null != d && (j.x = b, j.y = d), null != e && null != f ? (j.width = e, j.height = f) : i(a, function() {
                          c._.$(g.node, {
                              width: this.offsetWidth,
                              height: this.offsetHeight
                          })
                      }), c._.$(g.node, j)
                  }
                  return g
              }, g.ellipse = function(a, b, c, d) {
                  var e;
                  return h(a, "object") && "[object Object]" == a ? e = a : null != a && (e = {
                      cx: a,
                      cy: b,
                      rx: c,
                      ry: d
                  }), this.el("ellipse", e)
              }, g.path = function(a) {
                  var b;
                  return h(a, "object") && !h(a, "array") ? b = a : a && (b = {
                      d: a
                  }), this.el("path", b)
              }, g.group = g.g = function(a) {
                  var b = this.el("g");
                  return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
              }, g.svg = function(a, b, c, d, e, f, g, i) {
                  var j = {};
                  return h(a, "object") && null == b ? j = a : (null != a && (j.x = a), null != b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != g && null != i && (j.viewBox = [e, f, g, i])), this.el("svg", j)
              }, g.mask = function(a) {
                  var b = this.el("mask");
                  return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
              }, g.ptrn = function(a, b, c, d, e, f, g, i) {
                  if (h(a, "object")) var j = a;
                  else j = {
                      patternUnits: "userSpaceOnUse"
                  }, a && (j.x = a), b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), j.viewBox = null != e && null != f && null != g && null != i ? [e, f, g, i] : [a || 0, b || 0, c || 0, d || 0];
                  return this.el("pattern", j)
              }, g.use = function(a) {
                  return null != a ? (a instanceof d && (a.attr("id") || a.attr({
                      id: c._.id(a)
                  }), a = a.attr("id")), "#" == String(a).charAt() && (a = a.substring(1)), this.el("use", {
                      "xlink:href": "#" + a
                  })) : d.prototype.use.call(this)
              }, g.symbol = function(a, b, c, d) {
                  var e = {};
                  return null != a && null != b && null != c && null != d && (e.viewBox = [a, b, c, d]), this.el("symbol", e)
              }, g.text = function(a, b, c) {
                  var d = {};
                  return h(a, "object") ? d = a : null != a && (d = {
                      x: a,
                      y: b,
                      text: c || ""
                  }), this.el("text", d)
              }, g.line = function(a, b, c, d) {
                  var e = {};
                  return h(a, "object") ? e = a : null != a && (e = {
                      x1: a,
                      x2: c,
                      y1: b,
                      y2: d
                  }), this.el("line", e)
              }, g.polyline = function(a) {
                  arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
                  var b = {};
                  return h(a, "object") && !h(a, "array") ? b = a : null != a && (b = {
                      points: a
                  }), this.el("polyline", b)
              }, g.polygon = function(a) {
                  arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
                  var b = {};
                  return h(a, "object") && !h(a, "array") ? b = a : null != a && (b = {
                      points: a
                  }), this.el("polygon", b)
              },
              function() {
                  function d() {
                      return this.selectAll("stop")
                  }

                  function e(a, b) {
                      var d = k("stop"),
                          e = {
                              offset: +b + "%"
                          };
                      return a = c.color(a), e["stop-color"] = a.hex, a.opacity < 1 && (e["stop-opacity"] = a.opacity), k(d, e), this.node.appendChild(d), this
                  }

                  function f() {
                      if ("linearGradient" == this.type) {
                          var a = k(this.node, "x1") || 0,
                              b = k(this.node, "x2") || 1,
                              d = k(this.node, "y1") || 0,
                              e = k(this.node, "y2") || 0;
                          return c._.box(a, d, math.abs(b - a), math.abs(e - d))
                      }
                      var f = this.node.cx || .5,
                          g = this.node.cy || .5,
                          h = this.node.r || 0;
                      return c._.box(f - h, g - h, 2 * h, 2 * h)
                  }

                  function h(a, c) {
                      function d(a, b) {
                          for (var c = (b - l) / (a - m), d = m; a > d; d++) g[d].offset = +(+l + c * (d - m)).toFixed(2);
                          m = a, l = b
                      }
                      var e, f = b("snap.util.grad.parse", null, c).firstDefined();
                      if (!f) return null;
                      f.params.unshift(a), e = "l" == f.type.toLowerCase() ? i.apply(0, f.params) : j.apply(0, f.params), f.type != f.type.toLowerCase() && k(e.node, {
                          gradientUnits: "userSpaceOnUse"
                      });
                      var g = f.stops,
                          h = g.length,
                          l = 0,
                          m = 0;
                      h--;
                      for (var n = 0; h > n; n++) "offset" in g[n] && d(n, g[n].offset);
                      for (g[h].offset = g[h].offset || 100, d(h, g[h].offset), n = 0; h >= n; n++) {
                          var o = g[n];
                          e.addStop(o.color, o.offset)
                      }
                      return e
                  }

                  function i(a, b, g, h, i) {
                      var j = c._.make("linearGradient", a);
                      return j.stops = d, j.addStop = e, j.getBBox = f, null != b && k(j.node, {
                          x1: b,
                          y1: g,
                          x2: h,
                          y2: i
                      }), j
                  }

                  function j(a, b, g, h, i, j) {
                      var l = c._.make("radialGradient", a);
                      return l.stops = d, l.addStop = e, l.getBBox = f, null != b && k(l.node, {
                          cx: b,
                          cy: g,
                          r: h
                      }), null != i && null != j && k(l.node, {
                          fx: i,
                          fy: j
                      }), l
                  }
                  var k = c._.$;
                  g.gradient = function(a) {
                      return h(this.defs, a)
                  }, g.gradientLinear = function(a, b, c, d) {
                      return i(this.defs, a, b, c, d)
                  }, g.gradientRadial = function(a, b, c, d, e) {
                      return j(this.defs, a, b, c, d, e)
                  }, g.toString = function() {
                      var a, b = this.node.ownerDocument,
                          d = b.createDocumentFragment(),
                          e = b.createElement("div"),
                          f = this.node.cloneNode(!0);
                      return d.appendChild(e), e.appendChild(f), c._.$(f, {
                          xmlns: "http://www.w3.org/2000/svg"
                      }), a = e.innerHTML, d.removeChild(d.firstChild), a
                  }, g.toDataURL = function() {
                      return a && a.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0
                  }, g.clear = function() {
                      for (var a, b = this.node.firstChild; b;) a = b.nextSibling, "defs" != b.tagName ? b.parentNode.removeChild(b) : g.clear.call({
                          node: b
                      }), b = a
                  }
              }()
      }), d.plugin(function(a, b) {
          function c(a) {
              var b = c.ps = c.ps || {};
              return b[a] ? b[a].sleep = 100 : b[a] = {
                  sleep: 100
              }, setTimeout(function() {
                  for (var c in b) b[K](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
              }), b[a]
          }

          function d(a, b, c, d) {
              return null == a && (a = b = c = d = 0), null == b && (b = a.y, c = a.width, d = a.height, a = a.x), {
                  x: a,
                  y: b,
                  width: c,
                  w: c,
                  height: d,
                  h: d,
                  x2: a + c,
                  y2: b + d,
                  cx: a + c / 2,
                  cy: b + d / 2,
                  r1: N.min(c, d) / 2,
                  r2: N.max(c, d) / 2,
                  r0: N.sqrt(c * c + d * d) / 2,
                  path: w(a, b, c, d),
                  vb: [a, b, c, d].join(" ")
              }
          }

          function e() {
              return this.join(",").replace(L, "$1")
          }

          function f(a) {
              var b = J(a);
              return b.toString = e, b
          }

          function g(a, b, c, d, e, f, g, h, j) {
              return null == j ? n(a, b, c, d, e, f, g, h) : i(a, b, c, d, e, f, g, h, o(a, b, c, d, e, f, g, h, j))
          }

          function h(c, d) {
              function e(a) {
                  return +(+a).toFixed(3)
              }
              return a._.cacher(function(a, f, h) {
                  a instanceof b && (a = a.attr("d")), a = E(a);
                  for (var j, k, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; s > r; r++) {
                      if (l = a[r], "M" == l[0]) j = +l[1], k = +l[2];
                      else {
                          if (m = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6]), q + m > f) {
                              if (d && !p.start) {
                                  if (n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q), o += ["C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y)], h) return o;
                                  p.start = o, o = ["M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6])].join(), q += m, j = +l[5], k = +l[6];
                                  continue
                              }
                              if (!c && !d) return n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q)
                          }
                          q += m, j = +l[5], k = +l[6]
                      }
                      o += l.shift() + l
                  }
                  return p.end = o, n = c ? q : d ? p : i(j, k, l[0], l[1], l[2], l[3], l[4], l[5], 1)
              }, null, a._.clone)
          }

          function i(a, b, c, d, e, f, g, h, i) {
              var j = 1 - i,
                  k = R(j, 3),
                  l = R(j, 2),
                  m = i * i,
                  n = m * i,
                  o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
                  p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
                  q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
                  r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
                  s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
                  t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
                  u = j * a + i * c,
                  v = j * b + i * d,
                  w = j * e + i * g,
                  x = j * f + i * h,
                  y = 90 - 180 * N.atan2(q - s, r - t) / O;
              return {
                  x: o,
                  y: p,
                  m: {
                      x: q,
                      y: r
                  },
                  n: {
                      x: s,
                      y: t
                  },
                  start: {
                      x: u,
                      y: v
                  },
                  end: {
                      x: w,
                      y: x
                  },
                  alpha: y
              }
          }

          function j(b, c, e, f, g, h, i, j) {
              a.is(b, "array") || (b = [b, c, e, f, g, h, i, j]);
              var k = D.apply(null, b);
              return d(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y)
          }

          function k(a, b, c) {
              return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height
          }

          function l(a, b) {
              return a = d(a), b = d(b), k(b, a.x, a.y) || k(b, a.x2, a.y) || k(b, a.x, a.y2) || k(b, a.x2, a.y2) || k(a, b.x, b.y) || k(a, b.x2, b.y) || k(a, b.x, b.y2) || k(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
          }

          function m(a, b, c, d, e) {
              var f = -3 * b + 9 * c - 9 * d + 3 * e,
                  g = a * f + 6 * b - 12 * c + 6 * d;
              return a * g - 3 * b + 3 * c
          }

          function n(a, b, c, d, e, f, g, h, i) {
              null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;
              for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; k > p; p++) {
                  var q = j * l[p] + j,
                      r = m(q, a, c, e, g),
                      s = m(q, b, d, f, h),
                      t = r * r + s * s;
                  o += n[p] * N.sqrt(t)
              }
              return j * o
          }

          function o(a, b, c, d, e, f, g, h, i) {
              if (!(0 > i || n(a, b, c, d, e, f, g, h) < i)) {
                  var j, k = 1,
                      l = k / 2,
                      m = k - l,
                      o = .01;
                  for (j = n(a, b, c, d, e, f, g, h, m); S(j - i) > o;) l /= 2, m += (i > j ? 1 : -1) * l, j = n(a, b, c, d, e, f, g, h, m);
                  return m
              }
          }

          function p(a, b, c, d, e, f, g, h) {
              if (!(Q(a, c) < P(e, g) || P(a, c) > Q(e, g) || Q(b, d) < P(f, h) || P(b, d) > Q(f, h))) {
                  var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
                      j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
                      k = (a - c) * (f - h) - (b - d) * (e - g);
                  if (k) {
                      var l = i / k,
                          m = j / k,
                          n = +l.toFixed(2),
                          o = +m.toFixed(2);
                      if (!(n < +P(a, c).toFixed(2) || n > +Q(a, c).toFixed(2) || n < +P(e, g).toFixed(2) || n > +Q(e, g).toFixed(2) || o < +P(b, d).toFixed(2) || o > +Q(b, d).toFixed(2) || o < +P(f, h).toFixed(2) || o > +Q(f, h).toFixed(2))) return {
                          x: l,
                          y: m
                      }
                  }
              }
          }

          function q(a, b, c) {
              var d = j(a),
                  e = j(b);
              if (!l(d, e)) return c ? 0 : [];
              for (var f = n.apply(0, a), g = n.apply(0, b), h = ~~(f / 8), k = ~~(g / 8), m = [], o = [], q = {}, r = c ? 0 : [], s = 0; h + 1 > s; s++) {
                  var t = i.apply(0, a.concat(s / h));
                  m.push({
                      x: t.x,
                      y: t.y,
                      t: s / h
                  })
              }
              for (s = 0; k + 1 > s; s++) t = i.apply(0, b.concat(s / k)), o.push({
                  x: t.x,
                  y: t.y,
                  t: s / k
              });
              for (s = 0; h > s; s++)
                  for (var u = 0; k > u; u++) {
                      var v = m[s],
                          w = m[s + 1],
                          x = o[u],
                          y = o[u + 1],
                          z = S(w.x - v.x) < .001 ? "y" : "x",
                          A = S(y.x - x.x) < .001 ? "y" : "x",
                          B = p(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);
                      if (B) {
                          if (q[B.x.toFixed(4)] == B.y.toFixed(4)) continue;
                          q[B.x.toFixed(4)] = B.y.toFixed(4);
                          var C = v.t + S((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t),
                              D = x.t + S((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);
                          C >= 0 && 1 >= C && D >= 0 && 1 >= D && (c ? r++ : r.push({
                              x: B.x,
                              y: B.y,
                              t1: C,
                              t2: D
                          }))
                      }
                  }
              return r
          }

          function r(a, b) {
              return t(a, b)
          }

          function s(a, b) {
              return t(a, b, 1)
          }

          function t(a, b, c) {
              a = E(a), b = E(b);
              for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; p > o; o++) {
                  var r = a[o];
                  if ("M" == r[0]) d = h = r[1], e = i = r[2];
                  else {
                      "C" == r[0] ? (l = [d, e].concat(r.slice(1)), d = l[6], e = l[7]) : (l = [d, e, d, e, h, i, h, i], d = h, e = i);
                      for (var s = 0, t = b.length; t > s; s++) {
                          var u = b[s];
                          if ("M" == u[0]) f = j = u[1], g = k = u[2];
                          else {
                              "C" == u[0] ? (m = [f, g].concat(u.slice(1)), f = m[6], g = m[7]) : (m = [f, g, f, g, j, k, j, k], f = j, g = k);
                              var v = q(l, m, c);
                              if (c) n += v;
                              else {
                                  for (var w = 0, x = v.length; x > w; w++) v[w].segment1 = o, v[w].segment2 = s, v[w].bez1 = l, v[w].bez2 = m;
                                  n = n.concat(v)
                              }
                          }
                      }
                  }
              }
              return n
          }

          function u(a, b, c) {
              var d = v(a);
              return k(d, b, c) && t(a, [
                  ["M", b, c],
                  ["H", d.x2 + 10]
              ], 1) % 2 == 1
          }

          function v(a) {
              var b = c(a);
              if (b.bbox) return J(b.bbox);
              if (!a) return d();
              a = E(a);
              for (var e, f = 0, g = 0, h = [], i = [], j = 0, k = a.length; k > j; j++)
                  if (e = a[j], "M" == e[0]) f = e[1], g = e[2], h.push(f), i.push(g);
                  else {
                      var l = D(f, g, e[1], e[2], e[3], e[4], e[5], e[6]);
                      h = h.concat(l.min.x, l.max.x), i = i.concat(l.min.y, l.max.y), f = e[5], g = e[6]
                  }
              var m = P.apply(0, h),
                  n = P.apply(0, i),
                  o = Q.apply(0, h),
                  p = Q.apply(0, i),
                  q = d(m, n, o - m, p - n);
              return b.bbox = J(q), q
          }

          function w(a, b, c, d, f) {
              if (f) return [
                  ["M", +a + +f, b],
                  ["l", c - 2 * f, 0],
                  ["a", f, f, 0, 0, 1, f, f],
                  ["l", 0, d - 2 * f],
                  ["a", f, f, 0, 0, 1, -f, f],
                  ["l", 2 * f - c, 0],
                  ["a", f, f, 0, 0, 1, -f, -f],
                  ["l", 0, 2 * f - d],
                  ["a", f, f, 0, 0, 1, f, -f],
                  ["z"]
              ];
              var g = [
                  ["M", a, b],
                  ["l", c, 0],
                  ["l", 0, d],
                  ["l", -c, 0],
                  ["z"]
              ];
              return g.toString = e, g
          }

          function x(a, b, c, d, f) {
              if (null == f && null == d && (d = c), a = +a, b = +b, c = +c, d = +d, null != f) var g = Math.PI / 180,
                  h = a + c * Math.cos(-d * g),
                  i = a + c * Math.cos(-f * g),
                  j = b + c * Math.sin(-d * g),
                  k = b + c * Math.sin(-f * g),
                  l = [
                      ["M", h, j],
                      ["A", c, c, 0, +(f - d > 180), 0, i, k]
                  ];
              else l = [
                  ["M", a, b],
                  ["m", 0, -d],
                  ["a", c, d, 0, 1, 1, 0, 2 * d],
                  ["a", c, d, 0, 1, 1, 0, -2 * d],
                  ["z"]
              ];
              return l.toString = e, l
          }

          function y(b) {
              var d = c(b),
                  g = String.prototype.toLowerCase;
              if (d.rel) return f(d.rel);
              a.is(b, "array") && a.is(b && b[0], "array") || (b = a.parsePathString(b));
              var h = [],
                  i = 0,
                  j = 0,
                  k = 0,
                  l = 0,
                  m = 0;
              "M" == b[0][0] && (i = b[0][1], j = b[0][2], k = i, l = j, m++, h.push(["M", i, j]));
              for (var n = m, o = b.length; o > n; n++) {
                  var p = h[n] = [],
                      q = b[n];
                  if (q[0] != g.call(q[0])) switch (p[0] = g.call(q[0]), p[0]) {
                      case "a":
                          p[1] = q[1], p[2] = q[2], p[3] = q[3], p[4] = q[4], p[5] = q[5], p[6] = +(q[6] - i).toFixed(3), p[7] = +(q[7] - j).toFixed(3);
                          break;
                      case "v":
                          p[1] = +(q[1] - j).toFixed(3);
                          break;
                      case "m":
                          k = q[1], l = q[2];
                      default:
                          for (var r = 1, s = q.length; s > r; r++) p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3)
                  } else {
                      p = h[n] = [], "m" == q[0] && (k = q[1] + i, l = q[2] + j);
                      for (var t = 0, u = q.length; u > t; t++) h[n][t] = q[t]
                  }
                  var v = h[n].length;
                  switch (h[n][0]) {
                      case "z":
                          i = k, j = l;
                          break;
                      case "h":
                          i += +h[n][v - 1];
                          break;
                      case "v":
                          j += +h[n][v - 1];
                          break;
                      default:
                          i += +h[n][v - 2], j += +h[n][v - 1]
                  }
              }
              return h.toString = e, d.rel = f(h), h
          }

          function z(b) {
              var d = c(b);
              if (d.abs) return f(d.abs);
              if (I(b, "array") && I(b && b[0], "array") || (b = a.parsePathString(b)), !b || !b.length) return [
                  ["M", 0, 0]
              ];
              var g, h = [],
                  i = 0,
                  j = 0,
                  k = 0,
                  l = 0,
                  m = 0;
              "M" == b[0][0] && (i = +b[0][1], j = +b[0][2], k = i, l = j, m++, h[0] = ["M", i, j]);
              for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; r > q; q++) {
                  if (h.push(n = []), o = b[q], g = o[0], g != g.toUpperCase()) switch (n[0] = g.toUpperCase(), n[0]) {
                          case "A":
                              n[1] = o[1], n[2] = o[2], n[3] = o[3], n[4] = o[4], n[5] = o[5], n[6] = +o[6] + i, n[7] = +o[7] + j;
                              break;
                          case "V":
                              n[1] = +o[1] + j;
                              break;
                          case "H":
                              n[1] = +o[1] + i;
                              break;
                          case "R":
                              for (var s = [i, j].concat(o.slice(1)), t = 2, u = s.length; u > t; t++) s[t] = +s[t] + i, s[++t] = +s[t] + j;
                              h.pop(), h = h.concat(G(s, p));
                              break;
                          case "O":
                              h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
                              break;
                          case "U":
                              h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
                              break;
                          case "M":
                              k = +o[1] + i, l = +o[2] + j;
                          default:
                              for (t = 1, u = o.length; u > t; t++) n[t] = +o[t] + (t % 2 ? i : j)
                      } else if ("R" == g) s = [i, j].concat(o.slice(1)), h.pop(), h = h.concat(G(s, p)), n = ["R"].concat(o.slice(-2));
                      else if ("O" == g) h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
                  else if ("U" == g) h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
                  else
                      for (var v = 0, w = o.length; w > v; v++) n[v] = o[v];
                  if (g = g.toUpperCase(), "O" != g) switch (n[0]) {
                      case "Z":
                          i = +k, j = +l;
                          break;
                      case "H":
                          i = n[1];
                          break;
                      case "V":
                          j = n[1];
                          break;
                      case "M":
                          k = n[n.length - 2], l = n[n.length - 1];
                      default:
                          i = n[n.length - 2], j = n[n.length - 1]
                  }
              }
              return h.toString = e, d.abs = f(h), h
          }

          function A(a, b, c, d) {
              return [a, b, c, d, c, d]
          }

          function B(a, b, c, d, e, f) {
              var g = 1 / 3,
                  h = 2 / 3;
              return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
          }

          function C(b, c, d, e, f, g, h, i, j, k) {
              var l, m = 120 * O / 180,
                  n = O / 180 * (+f || 0),
                  o = [],
                  p = a._.cacher(function(a, b, c) {
                      var d = a * N.cos(c) - b * N.sin(c),
                          e = a * N.sin(c) + b * N.cos(c);
                      return {
                          x: d,
                          y: e
                      }
                  });
              if (k) y = k[0], z = k[1], w = k[2], x = k[3];
              else {
                  l = p(b, c, -n), b = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;
                  var q = (N.cos(O / 180 * f), N.sin(O / 180 * f), (b - i) / 2),
                      r = (c - j) / 2,
                      s = q * q / (d * d) + r * r / (e * e);
                  s > 1 && (s = N.sqrt(s), d = s * d, e = s * e);
                  var t = d * d,
                      u = e * e,
                      v = (g == h ? -1 : 1) * N.sqrt(S((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
                      w = v * d * r / e + (b + i) / 2,
                      x = v * -e * q / d + (c + j) / 2,
                      y = N.asin(((c - x) / e).toFixed(9)),
                      z = N.asin(((j - x) / e).toFixed(9));
                  y = w > b ? O - y : y, z = w > i ? O - z : z, 0 > y && (y = 2 * O + y), 0 > z && (z = 2 * O + z), h && y > z && (y -= 2 * O), !h && z > y && (z -= 2 * O)
              }
              var A = z - y;
              if (S(A) > m) {
                  var B = z,
                      D = i,
                      E = j;
                  z = y + m * (h && z > y ? 1 : -1), i = w + d * N.cos(z), j = x + e * N.sin(z), o = C(i, j, d, e, f, 0, h, D, E, [z, B, w, x])
              }
              A = z - y;
              var F = N.cos(y),
                  G = N.sin(y),
                  H = N.cos(z),
                  I = N.sin(z),
                  J = N.tan(A / 4),
                  K = 4 / 3 * d * J,
                  L = 4 / 3 * e * J,
                  M = [b, c],
                  P = [b + K * G, c - L * F],
                  Q = [i + K * I, j - L * H],
                  R = [i, j];
              if (P[0] = 2 * M[0] - P[0], P[1] = 2 * M[1] - P[1], k) return [P, Q, R].concat(o);
              o = [P, Q, R].concat(o).join().split(",");
              for (var T = [], U = 0, V = o.length; V > U; U++) T[U] = U % 2 ? p(o[U - 1], o[U], n).y : p(o[U], o[U + 1], n).x;
              return T
          }

          function D(a, b, c, d, e, f, g, h) {
              for (var i, j, k, l, m, n, o, p, q = [], r = [
                      [],
                      []
                  ], s = 0; 2 > s; ++s)
                  if (0 == s ? (j = 6 * a - 12 * c + 6 * e, i = -3 * a + 9 * c - 9 * e + 3 * g, k = 3 * c - 3 * a) : (j = 6 * b - 12 * d + 6 * f, i = -3 * b + 9 * d - 9 * f + 3 * h, k = 3 * d - 3 * b), S(i) < 1e-12) {
                      if (S(j) < 1e-12) continue;
                      l = -k / j, l > 0 && 1 > l && q.push(l)
                  } else o = j * j - 4 * k * i, p = N.sqrt(o), 0 > o || (m = (-j + p) / (2 * i), m > 0 && 1 > m && q.push(m), n = (-j - p) / (2 * i), n > 0 && 1 > n && q.push(n));
              for (var t, u = q.length, v = u; u--;) l = q[u], t = 1 - l, r[0][u] = t * t * t * a + 3 * t * t * l * c + 3 * t * l * l * e + l * l * l * g, r[1][u] = t * t * t * b + 3 * t * t * l * d + 3 * t * l * l * f + l * l * l * h;
              return r[0][v] = a, r[1][v] = b, r[0][v + 1] = g, r[1][v + 1] = h, r[0].length = r[1].length = v + 2, {
                  min: {
                      x: P.apply(0, r[0]),
                      y: P.apply(0, r[1])
                  },
                  max: {
                      x: Q.apply(0, r[0]),
                      y: Q.apply(0, r[1])
                  }
              }
          }

          function E(a, b) {
              var d = !b && c(a);
              if (!b && d.curve) return f(d.curve);
              for (var e = z(a), g = b && z(b), h = {
                      x: 0,
                      y: 0,
                      bx: 0,
                      by: 0,
                      X: 0,
                      Y: 0,
                      qx: null,
                      qy: null
                  }, i = {
                      x: 0,
                      y: 0,
                      bx: 0,
                      by: 0,
                      X: 0,
                      Y: 0,
                      qx: null,
                      qy: null
                  }, j = (function(a, b, c) {
                      var d, e;
                      if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                      switch (!(a[0] in {
                          T: 1,
                          Q: 1
                      }) && (b.qx = b.qy = null), a[0]) {
                          case "M":
                              b.X = a[1], b.Y = a[2];
                              break;
                          case "A":
                              a = ["C"].concat(C.apply(0, [b.x, b.y].concat(a.slice(1))));
                              break;
                          case "S":
                              "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e].concat(a.slice(1));
                              break;
                          case "T":
                              "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"].concat(B(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                              break;
                          case "Q":
                              b.qx = a[1], b.qy = a[2], a = ["C"].concat(B(b.x, b.y, a[1], a[2], a[3], a[4]));
                              break;
                          case "L":
                              a = ["C"].concat(A(b.x, b.y, a[1], a[2]));
                              break;
                          case "H":
                              a = ["C"].concat(A(b.x, b.y, a[1], b.y));
                              break;
                          case "V":
                              a = ["C"].concat(A(b.x, b.y, b.x, a[1]));
                              break;
                          case "Z":
                              a = ["C"].concat(A(b.x, b.y, b.X, b.Y))
                      }
                      return a
                  }), k = function(a, b) {
                      if (a[b].length > 7) {
                          a[b].shift();
                          for (var c = a[b]; c.length;) m[b] = "A", g && (n[b] = "A"), a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
                          a.splice(b, 1), r = Q(e.length, g && g.length || 0)
                      }
                  }, l = function(a, b, c, d, f) {
                      a && b && "M" == a[f][0] && "M" != b[f][0] && (b.splice(f, 0, ["M", d.x, d.y]), c.bx = 0, c.by = 0, c.x = a[f][1], c.y = a[f][2], r = Q(e.length, g && g.length || 0))
                  }, m = [], n = [], o = "", p = "", q = 0, r = Q(e.length, g && g.length || 0); r > q; q++) {
                  e[q] && (o = e[q][0]), "C" != o && (m[q] = o, q && (p = m[q - 1])), e[q] = j(e[q], h, p), "A" != m[q] && "C" == o && (m[q] = "C"), k(e, q), g && (g[q] && (o = g[q][0]), "C" != o && (n[q] = o, q && (p = n[q - 1])), g[q] = j(g[q], i, p), "A" != n[q] && "C" == o && (n[q] = "C"), k(g, q)), l(e, g, h, i, q), l(g, e, i, h, q);
                  var s = e[q],
                      t = g && g[q],
                      u = s.length,
                      v = g && t.length;
                  h.x = s[u - 2], h.y = s[u - 1], h.bx = M(s[u - 4]) || h.x, h.by = M(s[u - 3]) || h.y, i.bx = g && (M(t[v - 4]) || i.x), i.by = g && (M(t[v - 3]) || i.y), i.x = g && t[v - 2], i.y = g && t[v - 1]
              }
              return g || (d.curve = f(e)), g ? [e, g] : e
          }

          function F(a, b) {
              if (!b) return a;
              var c, d, e, f, g, h, i;
              for (a = E(a), e = 0, g = a.length; g > e; e++)
                  for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
              return a
          }

          function G(a, b) {
              for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
                  var f = [{
                      x: +a[d - 2],
                      y: +a[d - 1]
                  }, {
                      x: +a[d],
                      y: +a[d + 1]
                  }, {
                      x: +a[d + 2],
                      y: +a[d + 3]
                  }, {
                      x: +a[d + 4],
                      y: +a[d + 5]
                  }];
                  b ? d ? e - 4 == d ? f[3] = {
                      x: +a[0],
                      y: +a[1]
                  } : e - 2 == d && (f[2] = {
                      x: +a[0],
                      y: +a[1]
                  }, f[3] = {
                      x: +a[2],
                      y: +a[3]
                  }) : f[0] = {
                      x: +a[e - 2],
                      y: +a[e - 1]
                  } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
                      x: +a[d],
                      y: +a[d + 1]
                  }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
              }
              return c
          }
          var H = b.prototype,
              I = a.is,
              J = a._.clone,
              K = "hasOwnProperty",
              L = /,?([a-z]),?/gi,
              M = parseFloat,
              N = Math,
              O = N.PI,
              P = N.min,
              Q = N.max,
              R = N.pow,
              S = N.abs,
              T = h(1),
              U = h(),
              V = h(0, 1),
              W = a._unit2px,
              X = {
                  path: function(a) {
                      return a.attr("path")
                  },
                  circle: function(a) {
                      var b = W(a);
                      return x(b.cx, b.cy, b.r)
                  },
                  ellipse: function(a) {
                      var b = W(a);
                      return x(b.cx || 0, b.cy || 0, b.rx, b.ry)
                  },
                  rect: function(a) {
                      var b = W(a);
                      return w(b.x || 0, b.y || 0, b.width, b.height, b.rx, b.ry)
                  },
                  image: function(a) {
                      var b = W(a);
                      return w(b.x || 0, b.y || 0, b.width, b.height)
                  },
                  line: function(a) {
                      return "M" + [a.attr("x1") || 0, a.attr("y1") || 0, a.attr("x2"), a.attr("y2")]
                  },
                  polyline: function(a) {
                      return "M" + a.attr("points")
                  },
                  polygon: function(a) {
                      return "M" + a.attr("points") + "z"
                  },
                  deflt: function(a) {
                      var b = a.node.getBBox();
                      return w(b.x, b.y, b.width, b.height)
                  }
              };
          a.path = c, a.path.getTotalLength = T, a.path.getPointAtLength = U, a.path.getSubpath = function(a, b, c) {
              if (this.getTotalLength(a) - c < 1e-6) return V(a, b).end;
              var d = V(a, c, 1);
              return b ? V(d, b).end : d
          }, H.getTotalLength = function() {
              return this.node.getTotalLength ? this.node.getTotalLength() : void 0
          }, H.getPointAtLength = function(a) {
              return U(this.attr("d"), a)
          }, H.getSubpath = function(b, c) {
              return a.path.getSubpath(this.attr("d"), b, c)
          }, a._.box = d, a.path.findDotsAtSegment = i, a.path.bezierBBox = j, a.path.isPointInsideBBox = k, a.closest = function(b, c, e, f) {
              for (var g = 100, h = d(b - g / 2, c - g / 2, g, g), i = [], j = e[0].hasOwnProperty("x") ? function(a) {
                      return {
                          x: e[a].x,
                          y: e[a].y
                      }
                  } : function(a) {
                      return {
                          x: e[a],
                          y: f[a]
                      }
                  }, l = 0; 1e6 >= g && !l;) {
                  for (var m = 0, n = e.length; n > m; m++) {
                      var o = j(m);
                      if (k(h, o.x, o.y)) {
                          l++, i.push(o);
                          break
                      }
                  }
                  l || (g *= 2, h = d(b - g / 2, c - g / 2, g, g))
              }
              if (1e6 != g) {
                  var p, q = 1 / 0;
                  for (m = 0, n = i.length; n > m; m++) {
                      var r = a.len(b, c, i[m].x, i[m].y);
                      q > r && (q = r, i[m].len = r, p = i[m])
                  }
                  return p
              }
          }, a.path.isBBoxIntersect = l, a.path.intersection = r, a.path.intersectionNumber = s, a.path.isPointInside = u, a.path.getBBox = v, a.path.get = X, a.path.toRelative = y, a.path.toAbsolute = z, a.path.toCubic = E, a.path.map = F, a.path.toString = e, a.path.clone = f
      }), d.plugin(function(a) {
          var d = Math.max,
              e = Math.min,
              f = function(a) {
                  if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", a)
                      for (var b = 0, c = a.length; c > b; b++) a[b] && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
              },
              g = f.prototype;
          g.push = function() {
              for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], a && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
              return this
          }, g.pop = function() {
              return this.length && delete this[this.length--], this.items.pop()
          }, g.forEach = function(a, b) {
              for (var c = 0, d = this.items.length; d > c; c++)
                  if (a.call(b, this.items[c], c) === !1) return this;
              return this
          }, g.animate = function(d, e, f, g) {
              "function" != typeof f || f.length || (g = f, f = c.linear), d instanceof a._.Animation && (g = d.callback, f = d.easing, e = f.dur, d = d.attr);
              var h = arguments;
              if (a.is(d, "array") && a.is(h[h.length - 1], "array")) var i = !0;
              var j, k = function() {
                      j ? this.b = j : j = this.b
                  },
                  l = 0,
                  m = this,
                  n = g && function() {
                      ++l == m.length && g.call(this)
                  };
              return this.forEach(function(a, c) {
                  b.once("snap.animcreated." + a.id, k), i ? h[c] && a.animate.apply(a, h[c]) : a.animate(d, e, f, n)
              })
          }, g.remove = function() {
              for (; this.length;) this.pop().remove();
              return this
          }, g.bind = function(a, b, c) {
              var d = {};
              if ("function" == typeof b) this.bindings[a] = b;
              else {
                  var e = c || a;
                  this.bindings[a] = function(a) {
                      d[e] = a, b.attr(d)
                  }
              }
              return this
          }, g.attr = function(a) {
              var b = {};
              for (var c in a) this.bindings[c] ? this.bindings[c](a[c]) : b[c] = a[c];
              for (var d = 0, e = this.items.length; e > d; d++) this.items[d].attr(b);
              return this
          }, g.clear = function() {
              for (; this.length;) this.pop()
          }, g.splice = function(a, b) {
              a = 0 > a ? d(this.length + a, 0) : a, b = d(0, e(this.length - a, b));
              var c, g = [],
                  h = [],
                  i = [];
              for (c = 2; c < arguments.length; c++) i.push(arguments[c]);
              for (c = 0; b > c; c++) h.push(this[a + c]);
              for (; c < this.length - a; c++) g.push(this[a + c]);
              var j = i.length;
              for (c = 0; c < j + g.length; c++) this.items[a + c] = this[a + c] = j > c ? i[c] : g[c - j];
              for (c = this.items.length = this.length -= b - j; this[c];) delete this[c++];
              return new f(h)
          }, g.exclude = function(a) {
              for (var b = 0, c = this.length; c > b; b++)
                  if (this[b] == a) return this.splice(b, 1), !0;
              return !1
          }, g.insertAfter = function(a) {
              for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
              return this
          }, g.getBBox = function() {
              for (var a = [], b = [], c = [], f = [], g = this.items.length; g--;)
                  if (!this.items[g].removed) {
                      var h = this.items[g].getBBox();
                      a.push(h.x), b.push(h.y), c.push(h.x + h.width), f.push(h.y + h.height)
                  }
              return a = e.apply(0, a), b = e.apply(0, b), c = d.apply(0, c), f = d.apply(0, f), {
                  x: a,
                  y: b,
                  x2: c,
                  y2: f,
                  width: c - a,
                  height: f - b,
                  cx: a + (c - a) / 2,
                  cy: b + (f - b) / 2
              }
          }, g.clone = function(a) {
              a = new f;
              for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
              return a
          }, g.toString = function() {
              return "Snap‘s set"
          }, g.type = "set", a.Set = f, a.set = function() {
              var a = new f;
              return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), a
          }
      }), d.plugin(function(a, c) {
          function d(a) {
              var b = a[0];
              switch (b.toLowerCase()) {
                  case "t":
                      return [b, 0, 0];
                  case "m":
                      return [b, 1, 0, 0, 1, 0, 0];
                  case "r":
                      return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
                  case "s":
                      return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
              }
          }

          function e(b, c, e) {
              c = p(c).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], c = a.parseTransformString(c) || [];
              for (var f, g, h, i, l = Math.max(b.length, c.length), m = [], n = [], o = 0; l > o; o++) {
                  if (h = b[o] || d(c[o]), i = c[o] || d(h), h[0] != i[0] || "r" == h[0].toLowerCase() && (h[2] != i[2] || h[3] != i[3]) || "s" == h[0].toLowerCase() && (h[3] != i[3] || h[4] != i[4])) {
                      b = a._.transform2matrix(b, e()), c = a._.transform2matrix(c, e()), m = [
                          ["m", b.a, b.b, b.c, b.d, b.e, b.f]
                      ], n = [
                          ["m", c.a, c.b, c.c, c.d, c.e, c.f]
                      ];
                      break
                  }
                  for (m[o] = [], n[o] = [], f = 0, g = Math.max(h.length, i.length); g > f; f++) f in h && (m[o][f] = h[f]), f in i && (n[o][f] = i[f])
              }
              return {
                  from: k(m),
                  to: k(n),
                  f: j(m)
              }
          }

          function f(a) {
              return a
          }

          function g(a) {
              return function(b) {
                  return +b.toFixed(3) + a
              }
          }

          function h(a) {
              return a.join(" ")
          }

          function i(b) {
              return a.rgb(b[0], b[1], b[2])
          }

          function j(a) {
              var b, c, d, e, f, g, h = 0,
                  i = [];
              for (b = 0, c = a.length; c > b; b++) {
                  for (f = "[", g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length; e > d; d++) g[d] = "val[" + h++ + "]";
                  f += g + "]", i[b] = f
              }
              return Function("val", "return Snap.path.toString.call([" + i + "])")
          }

          function k(a) {
              for (var b = [], c = 0, d = a.length; d > c; c++)
                  for (var e = 1, f = a[c].length; f > e; e++) b.push(a[c][e]);
              return b
          }

          function l(a) {
              return isFinite(parseFloat(a))
          }

          function m(b, c) {
              return a.is(b, "array") && a.is(c, "array") ? b.toString() == c.toString() : !1
          }
          var n = {},
              o = /[a-z]+$/i,
              p = String;
          n.stroke = n.fill = "colour", c.prototype.equal = function(a, c) {
              return b("snap.util.equal", this, a, c).firstDefined()
          }, b.on("snap.util.equal", function(b, c) {
              var d, q, r = p(this.attr(b) || ""),
                  s = this;
              if (l(r) && l(c)) return {
                  from: parseFloat(r),
                  to: parseFloat(c),
                  f: f
              };
              if ("colour" == n[b]) return d = a.color(r), q = a.color(c), {
                  from: [d.r, d.g, d.b, d.opacity],
                  to: [q.r, q.g, q.b, q.opacity],
                  f: i
              };
              if ("viewBox" == b) return d = this.attr(b).vb.split(" ").map(Number), q = c.split(" ").map(Number), {
                  from: d,
                  to: q,
                  f: h
              };
              if ("transform" == b || "gradientTransform" == b || "patternTransform" == b) return c instanceof a.Matrix && (c = c.toTransformString()), a._.rgTransform.test(c) || (c = a._.svgTransform2string(c)), e(r, c, function() {
                  return s.getBBox(1)
              });
              if ("d" == b || "path" == b) return d = a.path.toCubic(r, c), {
                  from: k(d[0]),
                  to: k(d[1]),
                  f: j(d[0])
              };
              if ("points" == b) return d = p(r).split(a._.separator), q = p(c).split(a._.separator), {
                  from: d,
                  to: q,
                  f: function(a) {
                      return a
                  }
              };
              var t = r.match(o),
                  u = p(c).match(o);
              return t && m(t, u) ? {
                  from: parseFloat(r),
                  to: parseFloat(c),
                  f: g(t)
              } : {
                  from: this.asPX(b),
                  to: this.asPX(b, c),
                  f: f
              }
          })
      }), d.plugin(function(a, c, d, e) {
          for (var f = c.prototype, g = "hasOwnProperty", h = ("createTouch" in e.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], j = {
                  mousedown: "touchstart",
                  mousemove: "touchmove",
                  mouseup: "touchend"
              }, k = (function(a, b) {
                  var c = "y" == a ? "scrollTop" : "scrollLeft",
                      d = b && b.node ? b.node.ownerDocument : e.doc;
                  return d[c in d.documentElement ? "documentElement" : "body"][c]
              }), l = function() {
                  return this.originalEvent.preventDefault()
              }, m = function() {
                  return this.originalEvent.stopPropagation()
              }, n = function(a, b, c, d) {
                  var e = h && j[b] ? j[b] : b,
                      f = function(e) {
                          var f = k("y", d),
                              i = k("x", d);
                          if (h && j[g](b))
                              for (var n = 0, o = e.targetTouches && e.targetTouches.length; o > n; n++)
                                  if (e.targetTouches[n].target == a || a.contains(e.targetTouches[n].target)) {
                                      var p = e;
                                      e = e.targetTouches[n], e.originalEvent = p, e.preventDefault = l, e.stopPropagation = m;
                                      break
                                  }
                          var q = e.clientX + i,
                              r = e.clientY + f;
                          return c.call(d, e, q, r)
                      };
                  return b !== e && a.addEventListener(b, f, !1), a.addEventListener(e, f, !1),
                      function() {
                          return b !== e && a.removeEventListener(b, f, !1), a.removeEventListener(e, f, !1), !0
                      }
              }, o = [], p = function(a) {
                  for (var c, d = a.clientX, e = a.clientY, f = k("y"), g = k("x"), i = o.length; i--;) {
                      if (c = o[i], h) {
                          for (var j, l = a.touches && a.touches.length; l--;)
                              if (j = a.touches[l], j.identifier == c.el._drag.id || c.el.node.contains(j.target)) {
                                  d = j.clientX, e = j.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                                  break
                              }
                      } else a.preventDefault();
                      var m = c.el.node;
                      m.nextSibling, m.parentNode, m.style.display, d += g, e += f, b("snap.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a)
                  }
              }, q = function(c) {
                  a.unmousemove(p).unmouseup(q);
                  for (var d, e = o.length; e--;) d = o[e], d.el._drag = {}, b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c), b.off("snap.drag.*." + d.el.id);
                  o = []
              }, r = i.length; r--;) ! function(b) {
              a[b] = f[b] = function(c, d) {
                  if (a.is(c, "function")) this.events = this.events || [], this.events.push({
                      name: b,
                      f: c,
                      unbind: n(this.node || document, b, c, d || this)
                  });
                  else
                      for (var e = 0, f = this.events.length; f > e; e++)
                          if (this.events[e].name == b) try {
                              this.events[e].f.call(this)
                          } catch (g) {}
                          return this
              }, a["un" + b] = f["un" + b] = function(a) {
                  for (var c = this.events || [], d = c.length; d--;)
                      if (c[d].name == b && (c[d].f == a || !a)) return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;
                  return this
              }
          }(i[r]);
          f.hover = function(a, b, c, d) {
              return this.mouseover(a, c).mouseout(b, d || c)
          }, f.unhover = function(a, b) {
              return this.unmouseover(a).unmouseout(b)
          };
          var s = [];
          f.drag = function(c, d, e, f, g, h) {
              function i(i, j, l) {
                  (i.originalEvent || i).preventDefault(), k._drag.x = j, k._drag.y = l, k._drag.id = i.identifier, !o.length && a.mousemove(p).mouseup(q), o.push({
                      el: k,
                      move_scope: f,
                      start_scope: g,
                      end_scope: h
                  }), d && b.on("snap.drag.start." + k.id, d), c && b.on("snap.drag.move." + k.id, c), e && b.on("snap.drag.end." + k.id, e), b("snap.drag.start." + k.id, g || f || k, j, l, i)
              }

              function j(a, c, d) {
                  b("snap.draginit." + k.id, k, a, c, d)
              }
              var k = this;
              if (!arguments.length) {
                  var l;
                  return k.drag(function(a, b) {
                      this.attr({
                          transform: l + (l ? "T" : "t") + [a, b]
                      })
                  }, function() {
                      l = this.transform().local
                  })
              }
              return b.on("snap.draginit." + k.id, i), k._drag = {}, s.push({
                  el: k,
                  start: i,
                  init: j
              }), k.mousedown(j), k
          }, f.undrag = function() {
              for (var c = s.length; c--;) s[c].el == this && (this.unmousedown(s[c].init), s.splice(c, 1), b.unbind("snap.drag.*." + this.id), b.unbind("snap.draginit." + this.id));
              return !s.length && a.unmousemove(p).unmouseup(q), this
          }
      }), d.plugin(function(a, c, d) {
          var e = (c.prototype, d.prototype),
              f = /^\s*url\((.+)\)/,
              g = String,
              h = a._.$;
          a.filter = {}, e.filter = function(b) {
              var d = this;
              "svg" != d.type && (d = d.paper);
              var e = a.parse(g(b)),
                  f = a._.id(),
                  i = (d.node.offsetWidth, d.node.offsetHeight, h("filter"));
              return h(i, {
                  id: f,
                  filterUnits: "userSpaceOnUse"
              }), i.appendChild(e.node), d.defs.appendChild(i), new c(i)
          }, b.on("snap.util.getattr.filter", function() {
              b.stop();
              var c = h(this.node, "filter");
              if (c) {
                  var d = g(c).match(f);
                  return d && a.select(d[1])
              }
          }), b.on("snap.util.attr.filter", function(d) {
              if (d instanceof c && "filter" == d.type) {
                  b.stop();
                  var e = d.node.id;
                  e || (h(d.node, {
                      id: d.id
                  }), e = d.id), h(this.node, {
                      filter: a.url(e)
                  })
              }
              d && "none" != d || (b.stop(), this.node.removeAttribute("filter"))
          }), a.filter.blur = function(b, c) {
              null == b && (b = 2);
              var d = null == c ? b : [b, c];
              return a.format('<feGaussianBlur stdDeviation="{def}"/>', {
                  def: d
              })
          }, a.filter.blur.toString = function() {
              return this()
          }, a.filter.shadow = function(b, c, d, e, f) {
              return "string" == typeof d && (e = d, f = e, d = 4), "string" != typeof e && (f = e, e = "#000"), e = e || "#000", null == d && (d = 4), null == f && (f = 1), null == b && (b = 0, c = 2), null == c && (c = b), e = a.color(e), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                  color: e,
                  dx: b,
                  dy: c,
                  blur: d,
                  opacity: f
              })
          }, a.filter.shadow.toString = function() {
              return this()
          }, a.filter.grayscale = function(b) {
              return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                  a: .2126 + .7874 * (1 - b),
                  b: .7152 - .7152 * (1 - b),
                  c: .0722 - .0722 * (1 - b),
                  d: .2126 - .2126 * (1 - b),
                  e: .7152 + .2848 * (1 - b),
                  f: .0722 - .0722 * (1 - b),
                  g: .2126 - .2126 * (1 - b),
                  h: .0722 + .9278 * (1 - b)
              })
          }, a.filter.grayscale.toString = function() {
              return this()
          }, a.filter.sepia = function(b) {
              return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                  a: .393 + .607 * (1 - b),
                  b: .769 - .769 * (1 - b),
                  c: .189 - .189 * (1 - b),
                  d: .349 - .349 * (1 - b),
                  e: .686 + .314 * (1 - b),
                  f: .168 - .168 * (1 - b),
                  g: .272 - .272 * (1 - b),
                  h: .534 - .534 * (1 - b),
                  i: .131 + .869 * (1 - b)
              })
          }, a.filter.sepia.toString = function() {
              return this()
          }, a.filter.saturate = function(b) {
              return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                  amount: 1 - b
              })
          }, a.filter.saturate.toString = function() {
              return this()
          }, a.filter.hueRotate = function(b) {
              return b = b || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                  angle: b
              })
          }, a.filter.hueRotate.toString = function() {
              return this()
          }, a.filter.invert = function(b) {
              return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                  amount: b,
                  amount2: 1 - b
              })
          }, a.filter.invert.toString = function() {
              return this()
          }, a.filter.brightness = function(b) {
              return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                  amount: b
              })
          }, a.filter.brightness.toString = function() {
              return this()
          }, a.filter.contrast = function(b) {
              return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                  amount: b,
                  amount2: .5 - b / 2
              })
          }, a.filter.contrast.toString = function() {
              return this()
          }
      }), d.plugin(function(a, b) {
          var c = a._.box,
              d = a.is,
              e = /^[^a-z]*([tbmlrc])/i,
              f = function() {
                  return "T" + this.dx + "," + this.dy
              };
          b.prototype.getAlign = function(a, b) {
              null == b && d(a, "string") && (b = a, a = null), a = a || this.paper;
              var g = a.getBBox ? a.getBBox() : c(a),
                  h = this.getBBox(),
                  i = {};
              switch (b = b && b.match(e), b = b ? b[1].toLowerCase() : "c") {
                  case "t":
                      i.dx = 0, i.dy = g.y - h.y;
                      break;
                  case "b":
                      i.dx = 0, i.dy = g.y2 - h.y2;
                      break;
                  case "m":
                      i.dx = 0, i.dy = g.cy - h.cy;
                      break;
                  case "l":
                      i.dx = g.x - h.x, i.dy = 0;
                      break;
                  case "r":
                      i.dx = g.x2 - h.x2, i.dy = 0;
                      break;
                  default:
                      i.dx = g.cx - h.cx, i.dy = 0
              }
              return i.toString = f, i
          }, b.prototype.align = function(a, b) {
              return this.transform("..." + this.getAlign(a, b))
          }
      }), d
  }),
  /*
       _ _      _       _
   ___| (_) ___| | __  (_)___
  / __| | |/ __| |/ /  | / __|
  \__ \ | | (__|   < _ | \__ \
  |___/_|_|\___|_|\_(_)/ |___/
                     |__/

   Version: 1.5.6
    Author: Ken Wheeler
   Website: http://kenwheeler.github.io
      Docs: http://kenwheeler.github.io/slick
      Repo: http://github.com/kenwheeler/slick
    Issues: http://github.com/kenwheeler/slick/issues

   */
  /* global window, document, define, jQuery, setInterval, clearInterval */
  function(a) {
      "use strict";
      "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
  }(function(a) {
      "use strict";
      var b = window.Slick || {};
      b = function() {
          function b(b, d) {
              var e, f = this;
              f.defaults = {
                  accessibility: !0,
                  adaptiveHeight: !1,
                  appendArrows: a(b),
                  appendDots: a(b),
                  arrows: !0,
                  asNavFor: null,
                  prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                  nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                  autoplay: !1,
                  autoplaySpeed: 3e3,
                  centerMode: !1,
                  centerPadding: "50px",
                  cssEase: "ease",
                  customPaging: function(a, b) {
                      return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>"
                  },
                  dots: !1,
                  dotsClass: "slick-dots",
                  draggable: !0,
                  easing: "linear",
                  edgeFriction: .35,
                  fade: !1,
                  focusOnSelect: !1,
                  infinite: !0,
                  initialSlide: 0,
                  lazyLoad: "ondemand",
                  mobileFirst: !1,
                  pauseOnHover: !0,
                  pauseOnDotsHover: !1,
                  respondTo: "window",
                  responsive: null,
                  rows: 1,
                  rtl: !1,
                  slide: "",
                  slidesPerRow: 1,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  speed: 500,
                  swipe: !0,
                  swipeToSlide: !1,
                  touchMove: !0,
                  touchThreshold: 5,
                  useCSS: !0,
                  variableWidth: !1,
                  vertical: !1,
                  verticalSwiping: !1,
                  waitForAnimate: !0,
                  zIndex: 1e3
              }, f.initials = {
                  animating: !1,
                  dragging: !1,
                  autoPlayTimer: null,
                  currentDirection: 0,
                  currentLeft: null,
                  currentSlide: 0,
                  direction: 1,
                  $dots: null,
                  listWidth: null,
                  listHeight: null,
                  loadIndex: 0,
                  $nextArrow: null,
                  $prevArrow: null,
                  slideCount: null,
                  slideWidth: null,
                  $slideTrack: null,
                  $slides: null,
                  sliding: !1,
                  slideOffset: 0,
                  swipeLeft: null,
                  $list: null,
                  touchObject: {},
                  transformsEnabled: !1,
                  unslicked: !1
              }, a.extend(f, f.initials), f.activeBreakpoint = null, f.animType = null, f.animProp = null, f.breakpoints = [], f.breakpointSettings = [], f.cssTransitions = !1, f.hidden = "hidden", f.paused = !1, f.positionProp = null, f.respondTo = null, f.rowCount = 1, f.shouldClick = !0, f.$slider = a(b), f.$slidesCache = null, f.transformType = null, f.transitionType = null, f.visibilityChange = "visibilitychange", f.windowWidth = 0, f.windowTimer = null, e = a(b).data("slick") || {}, f.options = a.extend({}, f.defaults, e, d), f.currentSlide = f.options.initialSlide, f.originalSettings = f.options, "undefined" != typeof document.mozHidden ? (f.hidden = "mozHidden", f.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (f.hidden = "webkitHidden", f.visibilityChange = "webkitvisibilitychange"), f.autoPlay = a.proxy(f.autoPlay, f), f.autoPlayClear = a.proxy(f.autoPlayClear, f), f.changeSlide = a.proxy(f.changeSlide, f), f.clickHandler = a.proxy(f.clickHandler, f), f.selectHandler = a.proxy(f.selectHandler, f), f.setPosition = a.proxy(f.setPosition, f), f.swipeHandler = a.proxy(f.swipeHandler, f), f.dragHandler = a.proxy(f.dragHandler, f), f.keyHandler = a.proxy(f.keyHandler, f), f.autoPlayIterator = a.proxy(f.autoPlayIterator, f), f.instanceUid = c++, f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, f.registerBreakpoints(), f.init(!0), f.checkResponsive(!0)
          }
          var c = 0;
          return b
      }(), b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
          var e = this;
          if ("boolean" == typeof c) d = c, c = null;
          else if (0 > c || c >= e.slideCount) return !1;
          e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
              a(c).attr("data-slick-index", b)
          }), e.$slidesCache = e.$slides, e.reinit()
      }, b.prototype.animateHeight = function() {
          var a = this;
          if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
              var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
              a.$list.animate({
                  height: b
              }, a.options.speed)
          }
      }, b.prototype.animateSlide = function(b, c) {
          var d = {},
              e = this;
          e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
              left: b
          }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
              top: b
          }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
              animStart: e.currentLeft
          }).animate({
              animStart: b
          }, {
              duration: e.options.speed,
              easing: e.options.easing,
              step: function(a) {
                  a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
              },
              complete: function() {
                  c && c.call()
              }
          })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
              e.disableTransition(), c.call()
          }, e.options.speed))
      }, b.prototype.asNavFor = function(b) {
          var c = this,
              d = c.options.asNavFor;
          d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == typeof d && d.each(function() {
              var c = a(this).slick("getSlick");
              c.unslicked || c.slideHandler(b, !0)
          })
      }, b.prototype.applyTransition = function(a) {
          var b = this,
              c = {};
          b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
      }, b.prototype.autoPlay = function() {
          var a = this;
          a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
      }, b.prototype.autoPlayClear = function() {
          var a = this;
          a.autoPlayTimer && clearInterval(a.autoPlayTimer)
      }, b.prototype.autoPlayIterator = function() {
          var a = this;
          a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (a.currentSlide - 1 === 0 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
      }, b.prototype.buildArrows = function() {
          var a = this;
          a.options.arrows === !0 && (a.$prevArrow = a.options.prevArrow, a.$nextArrow = a.options.nextArrow, a.$prevArrow.addClass("slick-arrow"), a.$nextArrow.addClass("slick-arrow"), a.slideCount > a.options.slidesToShow ? (a.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), a.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), a.htmlExpr.test(a.options.prevArrow) && !a.options.prevArrow instanceof jQuery && a.$prevArrow.prependTo(a.options.appendArrows), a.htmlExpr.test(a.options.nextArrow) && !a.options.nextArrow instanceof jQuery && a.$nextArrow.appendTo(a.options.appendArrows), a.options.infinite !== !0 && a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : a.$prevArrow.add(a.$nextArrow).addClass("slick-hidden").attr({
              "aria-disabled": "true",
              tabindex: "-1"
          }))
      }, b.prototype.buildDots = function() {
          var b, c, d = this;
          if (d.options.dots === !0 && d.slideCount > d.options.slidesToShow) {
              for (c = '<ul class="' + d.options.dotsClass + '">', b = 0; b <= d.getDotCount(); b += 1) c += "<li>" + d.options.customPaging.call(this, d, b) + "</li>";
              c += "</ul>", d.$dots = a(c).appendTo(d.options.appendDots), d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
          }
      }, b.prototype.buildOut = function() {
          var b = this;
          b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
              a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
          }), b.$slidesCache = b.$slides, b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
      }, b.prototype.buildRows = function() {
          var a, b, c, d, e, f, g, h = this;
          if (d = document.createDocumentFragment(), f = h.$slider.children(), h.options.rows > 1) {
              for (g = h.options.slidesPerRow * h.options.rows, e = Math.ceil(f.length / g), a = 0; e > a; a++) {
                  var i = document.createElement("div");
                  for (b = 0; b < h.options.rows; b++) {
                      var j = document.createElement("div");
                      for (c = 0; c < h.options.slidesPerRow; c++) {
                          var k = a * g + (b * h.options.slidesPerRow + c);
                          f.get(k) && j.appendChild(f.get(k))
                      }
                      i.appendChild(j)
                  }
                  d.appendChild(i)
              }
              h.$slider.html(d), h.$slider.children().children().children().css({
                  width: 100 / h.options.slidesPerRow + "%",
                  display: "inline-block"
              })
          }
      }, b.prototype.checkResponsive = function(b, c) {
          var d, e, f, g = this,
              h = !1,
              i = g.$slider.width(),
              j = window.innerWidth || a(window).width();
          if ("window" === g.respondTo ? f = j : "slider" === g.respondTo ? f = i : "min" === g.respondTo && (f = Math.min(j, i)), g.options.responsive && g.options.responsive.length && null !== g.options.responsive) {
              e = null;
              for (d in g.breakpoints) g.breakpoints.hasOwnProperty(d) && (g.originalSettings.mobileFirst === !1 ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
              null !== e ? null !== g.activeBreakpoint ? (e !== g.activeBreakpoint || c) && (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : null !== g.activeBreakpoint && (g.activeBreakpoint = null, g.options = g.originalSettings, b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b), h = e), b || h === !1 || g.$slider.trigger("breakpoint", [g, h])
          }
      }, b.prototype.changeSlide = function(b, c) {
          var d, e, f, g = this,
              h = a(b.target);
          switch (h.is("a") && b.preventDefault(), h.is("li") || (h = h.closest("li")), f = g.slideCount % g.options.slidesToScroll !== 0, d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll, b.data.message) {
              case "previous":
                  e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
                  break;
              case "next":
                  e = 0 === d ? g.options.slidesToScroll : d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
                  break;
              case "index":
                  var i = 0 === b.data.index ? 0 : b.data.index || h.index() * g.options.slidesToScroll;
                  g.slideHandler(g.checkNavigable(i), !1, c), h.children().trigger("focus");
                  break;
              default:
                  return
          }
      }, b.prototype.checkNavigable = function(a) {
          var b, c, d = this;
          if (b = d.getNavigableIndexes(), c = 0, a > b[b.length - 1]) a = b[b.length - 1];
          else
              for (var e in b) {
                  if (a < b[e]) {
                      a = c;
                      break
                  }
                  c = b[e]
              }
          return a
      }, b.prototype.cleanUpEvents = function() {
          var b = this;
          b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
      }, b.prototype.cleanUpRows = function() {
          var a, b = this;
          b.options.rows > 1 && (a = b.$slides.children().children(), a.removeAttr("style"), b.$slider.html(a))
      }, b.prototype.clickHandler = function(a) {
          var b = this;
          b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
      }, b.prototype.destroy = function(b) {
          var c = this;
          c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
              a(this).attr("style", a(this).data("originalStyling"))
          }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
      }, b.prototype.disableTransition = function(a) {
          var b = this,
              c = {};
          c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
      }, b.prototype.fadeSlide = function(a, b) {
          var c = this;
          c.cssTransitions === !1 ? (c.$slides.eq(a).css({
              zIndex: c.options.zIndex
          }), c.$slides.eq(a).animate({
              opacity: 1
          }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
              opacity: 1,
              zIndex: c.options.zIndex
          }), b && setTimeout(function() {
              c.disableTransition(a), b.call()
          }, c.options.speed))
      }, b.prototype.fadeSlideOut = function(a) {
          var b = this;
          b.cssTransitions === !1 ? b.$slides.eq(a).animate({
              opacity: 0,
              zIndex: b.options.zIndex - 2
          }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
              opacity: 0,
              zIndex: b.options.zIndex - 2
          }))
      }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
          var b = this;
          null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
      }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
          var a = this;
          return a.currentSlide
      }, b.prototype.getDotCount = function() {
          var a = this,
              b = 0,
              c = 0,
              d = 0;
          if (a.options.infinite === !0)
              for (; b < a.slideCount;) ++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
          else if (a.options.centerMode === !0) d = a.slideCount;
          else
              for (; b < a.slideCount;) ++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
          return d - 1
      }, b.prototype.getLeft = function(a) {
          var b, c, d, e = this,
              f = 0;
          return e.slideOffset = 0, c = e.$slides.first().outerHeight(!0), e.options.infinite === !0 ? (e.slideCount > e.options.slidesToShow && (e.slideOffset = e.slideWidth * e.options.slidesToShow * -1, f = c * e.options.slidesToShow * -1), e.slideCount % e.options.slidesToScroll !== 0 && a + e.options.slidesToScroll > e.slideCount && e.slideCount > e.options.slidesToShow && (a > e.slideCount ? (e.slideOffset = (e.options.slidesToShow - (a - e.slideCount)) * e.slideWidth * -1, f = (e.options.slidesToShow - (a - e.slideCount)) * c * -1) : (e.slideOffset = e.slideCount % e.options.slidesToScroll * e.slideWidth * -1, f = e.slideCount % e.options.slidesToScroll * c * -1))) : a + e.options.slidesToShow > e.slideCount && (e.slideOffset = (a + e.options.slidesToShow - e.slideCount) * e.slideWidth, f = (a + e.options.slidesToShow - e.slideCount) * c), e.slideCount <= e.options.slidesToShow && (e.slideOffset = 0, f = 0), e.options.centerMode === !0 && e.options.infinite === !0 ? e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth : e.options.centerMode === !0 && (e.slideOffset = 0, e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2)), b = e.options.vertical === !1 ? a * e.slideWidth * -1 + e.slideOffset : a * c * -1 + f, e.options.variableWidth === !0 && (d = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow), b = d[0] ? -1 * d[0].offsetLeft : 0, e.options.centerMode === !0 && (d = e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow + 1), b = d[0] ? -1 * d[0].offsetLeft : 0, b += (e.$list.width() - d.outerWidth()) / 2)), b
      }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
          var b = this;
          return b.options[a]
      }, b.prototype.getNavigableIndexes = function() {
          var a, b = this,
              c = 0,
              d = 0,
              e = [];
          for (b.options.infinite === !1 ? a = b.slideCount : (c = -1 * b.options.slidesToScroll, d = -1 * b.options.slidesToScroll, a = 2 * b.slideCount); a > c;) e.push(c), c = d + b.options.slidesToScroll, d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow;
          return e
      }, b.prototype.getSlick = function() {
          return this
      }, b.prototype.getSlideCount = function() {
          var b, c, d, e = this;
          return d = e.options.centerMode === !0 ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0, e.options.swipeToSlide === !0 ? (e.$slideTrack.find(".slick-slide").each(function(b, f) {
              return f.offsetLeft - d + a(f).outerWidth() / 2 > -1 * e.swipeLeft ? (c = f, !1) : void 0
          }), b = Math.abs(a(c).attr("data-slick-index") - e.currentSlide) || 1) : e.options.slidesToScroll
      }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
          var c = this;
          c.changeSlide({
              data: {
                  message: "index",
                  index: parseInt(a)
              }
          }, b)
      }, b.prototype.init = function(b) {
          var c = this;
          a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA()
      }, b.prototype.initArrowEvents = function() {
          var a = this;
          a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
              message: "previous"
          }, a.changeSlide), a.$nextArrow.on("click.slick", {
              message: "next"
          }, a.changeSlide))
      }, b.prototype.initDotEvents = function() {
          var b = this;
          b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
              message: "index"
          }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1))
      }, b.prototype.initializeEvents = function() {
          var b = this;
          b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
              action: "start"
          }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
              action: "move"
          }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
              action: "end"
          }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
              action: "end"
          }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
      }, b.prototype.initUI = function() {
          var a = this;
          a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
      }, b.prototype.keyHandler = function(a) {
          var b = this;
          a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
              data: {
                  message: "previous"
              }
          }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
              data: {
                  message: "next"
              }
          }))
      }, b.prototype.lazyLoad = function() {
          function b(b) {
              a("img[data-lazy]", b).each(function() {
                  var b = a(this),
                      c = a(this).attr("data-lazy"),
                      d = document.createElement("img");
                  d.onload = function() {
                      b.animate({
                          opacity: 0
                      }, 100, function() {
                          b.attr("src", c).animate({
                              opacity: 1
                          }, 200, function() {
                              b.removeAttr("data-lazy").removeClass("slick-loading")
                          })
                      })
                  }, d.src = c
              })
          }
          var c, d, e, f, g = this;
          g.options.centerMode === !0 ? g.options.infinite === !0 ? (e = g.currentSlide + (g.options.slidesToShow / 2 + 1), f = e + g.options.slidesToShow + 2) : (e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)), f = 2 + (g.options.slidesToShow / 2 + 1) + g.currentSlide) : (e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide, f = e + g.options.slidesToShow, g.options.fade === !0 && (e > 0 && e--, f <= g.slideCount && f++)), c = g.$slider.find(".slick-slide").slice(e, f), b(c), g.slideCount <= g.options.slidesToShow ? (d = g.$slider.find(".slick-slide"), b(d)) : g.currentSlide >= g.slideCount - g.options.slidesToShow ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow), b(d)) : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow), b(d))
      }, b.prototype.loadSlider = function() {
          var a = this;
          a.setPosition(), a.$slideTrack.css({
              opacity: 1
          }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
      }, b.prototype.next = b.prototype.slickNext = function() {
          var a = this;
          a.changeSlide({
              data: {
                  message: "next"
              }
          })
      }, b.prototype.orientationChange = function() {
          var a = this;
          a.checkResponsive(), a.setPosition()
      }, b.prototype.pause = b.prototype.slickPause = function() {
          var a = this;
          a.autoPlayClear(), a.paused = !0
      }, b.prototype.play = b.prototype.slickPlay = function() {
          var a = this;
          a.paused = !1, a.autoPlay()
      }, b.prototype.postSlide = function(a) {
          var b = this;
          b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(), b.options.accessibility === !0 && b.initADA()
      }, b.prototype.prev = b.prototype.slickPrev = function() {
          var a = this;
          a.changeSlide({
              data: {
                  message: "previous"
              }
          })
      }, b.prototype.preventDefault = function(a) {
          a.preventDefault()
      }, b.prototype.progressiveLazyLoad = function() {
          var b, c, d = this;
          b = a("img[data-lazy]", d.$slider).length, b > 0 && (c = a("img[data-lazy]", d.$slider).first(), c.attr("src", c.attr("data-lazy")).removeClass("slick-loading").load(function() {
              c.removeAttr("data-lazy"), d.progressiveLazyLoad(), d.options.adaptiveHeight === !0 && d.setPosition()
          }).error(function() {
              c.removeAttr("data-lazy"), d.progressiveLazyLoad()
          }))
      }, b.prototype.refresh = function(b) {
          var c = this,
              d = c.currentSlide;
          c.destroy(!0), a.extend(c, c.initials, {
              currentSlide: d
          }), c.init(), b || c.changeSlide({
              data: {
                  message: "index",
                  index: d
              }
          }, !1)
      }, b.prototype.registerBreakpoints = function() {
          var b, c, d, e = this,
              f = e.options.responsive || null;
          if ("array" === a.type(f) && f.length) {
              e.respondTo = e.options.respondTo || "window";
              for (b in f)
                  if (d = e.breakpoints.length - 1, c = f[b].breakpoint, f.hasOwnProperty(b)) {
                      for (; d >= 0;) e.breakpoints[d] && e.breakpoints[d] === c && e.breakpoints.splice(d, 1), d--;
                      e.breakpoints.push(c), e.breakpointSettings[c] = f[b].settings
                  }
              e.breakpoints.sort(function(a, b) {
                  return e.options.mobileFirst ? a - b : b - a
              })
          }
      }, b.prototype.reinit = function() {
          var b = this;
          b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b]), b.options.autoplay === !0 && b.focusHandler()
      }, b.prototype.resize = function() {
          var b = this;
          a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
              b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
          }, 50))
      }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
          var d = this;
          return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
      }, b.prototype.setCSS = function(a) {
          var b, c, d = this,
              e = {};
          d.options.rtl === !0 && (a = -a), b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px", c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px", e[d.positionProp] = a, d.transformsEnabled === !1 ? d.$slideTrack.css(e) : (e = {}, d.cssTransitions === !1 ? (e[d.animType] = "translate(" + b + ", " + c + ")", d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)", d.$slideTrack.css(e)))
      }, b.prototype.setDimensions = function() {
          var a = this;
          a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
              padding: "0px " + a.options.centerPadding
          }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
              padding: a.options.centerPadding + " 0px"
          })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
          var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
          a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
      }, b.prototype.setFade = function() {
          var b, c = this;
          c.$slides.each(function(d, e) {
              b = c.slideWidth * d * -1, c.options.rtl === !0 ? a(e).css({
                  position: "relative",
                  right: b,
                  top: 0,
                  zIndex: c.options.zIndex - 2,
                  opacity: 0
              }) : a(e).css({
                  position: "relative",
                  left: b,
                  top: 0,
                  zIndex: c.options.zIndex - 2,
                  opacity: 0
              })
          }), c.$slides.eq(c.currentSlide).css({
              zIndex: c.options.zIndex - 1,
              opacity: 1
          })
      }, b.prototype.setHeight = function() {
          var a = this;
          if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
              var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
              a.$list.css("height", b)
          }
      }, b.prototype.setOption = b.prototype.slickSetOption = function(b, c, d) {
          var e, f, g = this;
          if ("responsive" === b && "array" === a.type(c))
              for (f in c)
                  if ("array" !== a.type(g.options.responsive)) g.options.responsive = [c[f]];
                  else {
                      for (e = g.options.responsive.length - 1; e >= 0;) g.options.responsive[e].breakpoint === c[f].breakpoint && g.options.responsive.splice(e, 1), e--;
                      g.options.responsive.push(c[f])
                  } else g.options[b] = c;
          d === !0 && (g.unload(), g.reinit())
      }, b.prototype.setPosition = function() {
          var a = this;
          a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
      }, b.prototype.setProps = function() {
          var a = this,
              b = document.body.style;
          a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = null !== a.animType && a.animType !== !1
      }, b.prototype.setSlideClasses = function(a) {
          var b, c, d, e, f = this;
          c = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), f.$slides.eq(a).addClass("slick-current"), f.options.centerMode === !0 ? (b = Math.floor(f.options.slidesToShow / 2), f.options.infinite === !0 && (a >= b && a <= f.slideCount - 1 - b ? f.$slides.slice(a - b, a + b + 1).addClass("slick-active").attr("aria-hidden", "false") : (d = f.options.slidesToShow + a, c.slice(d - b + 1, d + b + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")), f.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= f.slideCount - f.options.slidesToShow ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : c.length <= f.options.slidesToShow ? c.addClass("slick-active").attr("aria-hidden", "false") : (e = f.slideCount % f.options.slidesToShow, d = f.options.infinite === !0 ? f.options.slidesToShow + a : a, f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active").attr("aria-hidden", "false") : c.slice(d, d + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === f.options.lazyLoad && f.lazyLoad()
      }, b.prototype.setupInfinite = function() {
          var b, c, d, e = this;
          if (e.options.fade === !0 && (e.options.centerMode = !1), e.options.infinite === !0 && e.options.fade === !1 && (c = null, e.slideCount > e.options.slidesToShow)) {
              for (d = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow, b = e.slideCount; b > e.slideCount - d; b -= 1) c = b - 1, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
              for (b = 0; d > b; b += 1) c = b, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
              e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                  a(this).attr("id", "")
              })
          }
      }, b.prototype.setPaused = function(a) {
          var b = this;
          b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, a ? b.autoPlayClear() : b.autoPlay())
      }, b.prototype.selectHandler = function(b) {
          var c = this,
              d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
              e = parseInt(d.attr("data-slick-index"));
          return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
      }, b.prototype.slideHandler = function(a, b, c) {
          var d, e, f, g, h = null,
              i = this;
          return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
              i.postSlide(d)
          }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
              i.postSlide(d)
          }) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d,
              i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
                  i.postSlide(e)
              })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() {
                  i.postSlide(e)
              }) : i.postSlide(e))))
      }, b.prototype.startLoad = function() {
          var a = this;
          a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
      }, b.prototype.swipeDirection = function() {
          var a, b, c, d, e = this;
          return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical"
      }, b.prototype.swipeEnd = function(a) {
          var b, c = this;
          if (c.dragging = !1, c.shouldClick = c.touchObject.swipeLength > 10 ? !1 : !0, void 0 === c.touchObject.curX) return !1;
          if (c.touchObject.edgeHit === !0 && c.$slider.trigger("edge", [c, c.swipeDirection()]), c.touchObject.swipeLength >= c.touchObject.minSwipe) switch (c.swipeDirection()) {
              case "left":
                  b = c.options.swipeToSlide ? c.checkNavigable(c.currentSlide + c.getSlideCount()) : c.currentSlide + c.getSlideCount(), c.slideHandler(b), c.currentDirection = 0, c.touchObject = {}, c.$slider.trigger("swipe", [c, "left"]);
                  break;
              case "right":
                  b = c.options.swipeToSlide ? c.checkNavigable(c.currentSlide - c.getSlideCount()) : c.currentSlide - c.getSlideCount(), c.slideHandler(b), c.currentDirection = 1, c.touchObject = {}, c.$slider.trigger("swipe", [c, "right"])
          } else c.touchObject.startX !== c.touchObject.curX && (c.slideHandler(c.currentSlide), c.touchObject = {})
      }, b.prototype.swipeHandler = function(a) {
          var b = this;
          if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
              case "start":
                  b.swipeStart(a);
                  break;
              case "move":
                  b.swipeMove(a);
                  break;
              case "end":
                  b.swipeEnd(a)
          }
      }, b.prototype.swipeMove = function(a) {
          var b, c, d, e, f, g = this;
          return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !g.dragging || f && 1 !== f.length ? !1 : (b = g.getLeft(g.currentSlide), g.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX, g.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY, g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curX - g.touchObject.startX, 2))), g.options.verticalSwiping === !0 && (g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curY - g.touchObject.startY, 2)))), c = g.swipeDirection(), "vertical" !== c ? (void 0 !== a.originalEvent && g.touchObject.swipeLength > 4 && a.preventDefault(), e = (g.options.rtl === !1 ? 1 : -1) * (g.touchObject.curX > g.touchObject.startX ? 1 : -1), g.options.verticalSwiping === !0 && (e = g.touchObject.curY > g.touchObject.startY ? 1 : -1), d = g.touchObject.swipeLength, g.touchObject.edgeHit = !1, g.options.infinite === !1 && (0 === g.currentSlide && "right" === c || g.currentSlide >= g.getDotCount() && "left" === c) && (d = g.touchObject.swipeLength * g.options.edgeFriction, g.touchObject.edgeHit = !0), g.options.vertical === !1 ? g.swipeLeft = b + d * e : g.swipeLeft = b + d * (g.$list.height() / g.listWidth) * e, g.options.verticalSwiping === !0 && (g.swipeLeft = b + d * e), g.options.fade === !0 || g.options.touchMove === !1 ? !1 : g.animating === !0 ? (g.swipeLeft = null, !1) : void g.setCSS(g.swipeLeft)) : void 0)
      }, b.prototype.swipeStart = function(a) {
          var b, c = this;
          return 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow ? (c.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]), c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX, c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY, void(c.dragging = !0))
      }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
          var a = this;
          null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
      }, b.prototype.unload = function() {
          var b = this;
          a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
      }, b.prototype.unslick = function(a) {
          var b = this;
          b.$slider.trigger("unslick", [b, a]), b.destroy()
      }, b.prototype.updateArrows = function() {
          var a, b = this;
          a = Math.floor(b.options.slidesToShow / 2), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && !b.options.infinite && (b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === b.currentSlide ? (b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - b.options.slidesToShow && b.options.centerMode === !1 ? (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - 1 && b.options.centerMode === !0 && (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
      }, b.prototype.updateDots = function() {
          var a = this;
          null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
      }, b.prototype.visibility = function() {
          var a = this;
          document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : a.options.autoplay === !0 && (a.paused = !1, a.autoPlay())
      }, b.prototype.initADA = function() {
          var b = this;
          b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
              "aria-hidden": "true",
              tabindex: "-1"
          }).find("a, input, button, select").attr({
              tabindex: "-1"
          }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
              a(this).attr({
                  role: "option",
                  "aria-describedby": "slick-slide" + b.instanceUid + c
              })
          }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
              a(this).attr({
                  role: "presentation",
                  "aria-selected": "false",
                  "aria-controls": "navigation" + b.instanceUid + c,
                  id: "slick-slide" + b.instanceUid + c
              })
          }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
      }, b.prototype.activateADA = function() {
          var a = this,
              b = a.$slider.find("*").is(":focus");
          a.$slideTrack.find(".slick-active").attr({
              "aria-hidden": "false",
              tabindex: "0"
          }).find("a, input, button, select").attr({
              tabindex: "0"
          }), b && a.$slideTrack.find(".slick-active").focus()
      }, b.prototype.focusHandler = function() {
          var b = this;
          b.$slider.on("focus.slick blur.slick", "*", function(c) {
              c.stopImmediatePropagation();
              var d = a(this);
              setTimeout(function() {
                  b.isPlay && (d.is(":focus") ? (b.autoPlayClear(), b.paused = !0) : (b.paused = !1, b.autoPlay()))
              }, 0)
          })
      }, a.fn.slick = function() {
          var a, c = this,
              d = arguments[0],
              e = Array.prototype.slice.call(arguments, 1),
              f = c.length,
              g = 0;
          for (g; f > g; g++)
              if ("object" == typeof d || "undefined" == typeof d ? c[g].slick = new b(c[g], d) : a = c[g].slick[d].apply(c[g].slick, e), "undefined" != typeof a) return a;
          return c
      }
  }),
  /* ===========================================================
   *
   *  Name:          selectordie.min.js
   *  Updated:       2014-10-11
   *  Version:       0.1.8
   *  Created by:    Per V @ Vst.mn
   *  What?:         Minified version of the Select or Die JS
   *
   *  Copyright (c) 2014 Per Vestman
   *  Dual licensed under the MIT and GPL licenses.
   *
   *  Beards, Rock & Loud Guns | Cogs 'n Kegs
   *
   * =========================================================== */
  ! function(a) {
      "use strict";
      a.fn.selectOrDie = function(b) {
          var c, d, e = {
                  customID: null,
                  customClass: "",
                  placeholder: null,
                  placeholderOption: !1,
                  prefix: null,
                  cycle: !1,
                  stripEmpty: !1,
                  links: !1,
                  linksExternal: !1,
                  size: 0,
                  tabIndex: 0,
                  onChange: a.noop
              },
              f = {},
              g = !1,
              h = {
                  initSoD: function(b) {
                      return f = a.extend({}, e, b), this.each(function() {
                          if (a(this).parent().hasClass("sod_select")) console.log("Select or Die: It looks like the SoD already exists");
                          else {
                              var b, c, d, e = a(this),
                                  g = e.data("custom-id") ? e.data("custom-id") : f.customID,
                                  i = e.data("custom-class") ? e.data("custom-class") : f.customClass,
                                  j = e.data("prefix") ? e.data("prefix") : f.prefix,
                                  k = e.data("placeholder") ? e.data("placeholder") : f.placeholder,
                                  l = e.data("placeholder-option") ? e.data("placeholder-option") : f.placeholderOption,
                                  m = e.data("cycle") ? e.data("cycle") : f.cycle,
                                  n = e.data("links") ? e.data("links") : f.links,
                                  o = e.data("links-external") ? e.data("links-external") : f.linksExternal,
                                  p = parseInt(e.data("size")) ? e.data("size") : f.size,
                                  q = parseInt(e.data("tabindex")) ? e.data("tabindex") : f.tabIndex ? f.tabIndex : e.attr("tabindex") ? e.attr("tabindex") : f.tabIndex,
                                  r = e.data("strip-empty") ? e.data("strip-empty") : f.stripEmpty,
                                  s = e.prop("title") ? e.prop("title") : null,
                                  t = e.is(":disabled") ? " disabled" : "",
                                  u = "",
                                  v = "",
                                  w = 0;
                              j && (u = '<span class="sod_prefix">' + j + "</span> "), v += k && !j ? '<span class="sod_label sod_placeholder">' + k + "</span>" : '<span class="sod_label">' + u + "</span>", b = a("<span/>", {
                                  id: g,
                                  "class": "sod_select " + i + t,
                                  title: s,
                                  tabindex: q,
                                  html: v,
                                  "data-cycle": m,
                                  "data-links": n,
                                  "data-links-external": o,
                                  "data-placeholder": k,
                                  "data-placeholder-option": l,
                                  "data-prefix": j,
                                  "data-filter": ""
                              }).insertAfter(this), h.isTouch() && b.addClass("touch"), c = a("<span/>", {
                                  "class": "sod_list_wrapper"
                              }).appendTo(b), d = a("<span/>", {
                                  "class": "sod_list"
                              }).appendTo(c), a("option, optgroup", e).each(function(c) {
                                  var e = a(this);
                                  r && !a.trim(e.text()) ? e.remove() : 0 === c && l && !u ? h.populateSoD(e, d, b, !0) : h.populateSoD(e, d, b, !1)
                              }), p && (c.show(), a(".sod_option:lt(" + p + ")", d).each(function() {
                                  w += a(this).outerHeight()
                              }), c.removeAttr("style"), d.css({
                                  "max-height": w
                              })), e.appendTo(b), b.on("focusin", h.focusSod).on("click", h.triggerSod).on("click", ".sod_option", h.optionClick).on("mousemove", ".sod_option", h.optionHover).on("keydown", h.keyboardUse), e.on("change", h.selectChange), a(document).on("click", "label[for='" + e.attr("id") + "']", function(a) {
                                  a.preventDefault(), b.focus()
                              })
                          }
                      })
                  },
                  populateSoD: function(b, c, d, e) {
                      var f = d.data("placeholder"),
                          g = d.data("placeholder-option"),
                          h = d.data("prefix"),
                          i = d.find(".sod_label"),
                          j = b.parent(),
                          k = b.text(),
                          l = b.val(),
                          m = b.data("custom-id") ? b.data("custom-id") : null,
                          n = b.data("custom-class") ? b.data("custom-class") : "",
                          o = b.is(":disabled") ? " disabled " : "",
                          p = b.is(":selected") ? " selected active " : "",
                          q = b.data("link") ? " link " : "",
                          r = b.data("link-external") ? " linkexternal" : "",
                          s = b.prop("label");
                      b.is("option") ? (a("<span/>", {
                          "class": "sod_option " + n + o + p + q + r,
                          id: m,
                          title: k,
                          html: k,
                          "data-value": l
                      }).appendTo(c), e && !h ? (d.data("label", k), d.data("placeholder", k), b.prop("disabled", !0), c.find(".sod_option:last").addClass("is-placeholder disabled"), p && i.addClass("sod_placeholder")) : p && f && !g && !h ? d.data("label", f) : p && d.data("label", k), (p && !f || p && g || p && h) && i.append(k), j.is("optgroup") && (c.find(".sod_option:last").addClass("groupchild"), j.is(":disabled") && c.find(".sod_option:last").addClass("disabled"))) : a("<span/>", {
                          "class": "sod_option optgroup " + o,
                          title: s,
                          html: s,
                          "data-label": s
                      }).appendTo(c)
                  },
                  focusSod: function() {
                      var b = a(this);
                      b.hasClass("disabled") ? h.blurSod(b) : (h.blurSod(a(".sod_select.focus").not(b)), b.addClass("focus"), a("html").on("click.sodBlur", function() {
                          h.blurSod(b)
                      }))
                  },
                  triggerSod: function(b) {
                      b.stopPropagation();
                      var c = a(this),
                          e = c.find(".sod_list"),
                          f = c.data("placeholder"),
                          g = c.find(".active"),
                          i = c.find(".selected");
                      c.hasClass("disabled") || c.hasClass("open") || c.hasClass("touch") ? (clearTimeout(d), c.removeClass("open"), f && (c.find(".sod_label").get(0).lastChild.nodeValue = g.text())) : (c.addClass("open"), f && !c.data("prefix") && c.find(".sod_label").addClass("sod_placeholder").html(f), h.listScroll(e, i), h.checkViewport(c, e))
                  },
                  keyboardUse: function(b) {
                      var d, e, f, i = a(this),
                          j = i.find(".sod_list"),
                          k = i.find(".sod_option"),
                          l = i.find(".sod_label"),
                          m = i.data("cycle"),
                          n = k.filter(".active");
                      return b.which > 36 && b.which < 41 ? (37 === b.which || 38 === b.which ? (e = n.prevAll(":not('.disabled, .optgroup')").first(), f = k.not(".disabled, .optgroup").last()) : (39 === b.which || 40 === b.which) && (e = n.nextAll(":not('.disabled, .optgroup')").first(), f = k.not(".disabled, .optgroup").first()), !e.hasClass("sod_option") && m && (e = f), (e.hasClass("sod_option") || m) && (n.removeClass("active"), e.addClass("active"), l.get(0).lastChild.nodeValue = e.text(), h.listScroll(j, e), i.hasClass("open") || (g = !0)), !1) : (13 === b.which || 32 === b.which && i.hasClass("open") && (" " === i.data("filter")[0] || "" === i.data("filter")) ? (b.preventDefault(), n.click()) : 32 !== b.which || i.hasClass("open") || " " !== i.data("filter")[0] && "" !== i.data("filter") ? 27 === b.which && h.blurSod(i) : (b.preventDefault(), g = !1, i.click()), void(0 !== b.which && (clearTimeout(c), i.data("filter", i.data("filter") + String.fromCharCode(b.which)), d = k.filter(function() {
                          return 0 === a(this).text().toLowerCase().indexOf(i.data("filter").toLowerCase())
                      }).not(".disabled, .optgroup").first(), d.length && (n.removeClass("active"), d.addClass("active"), h.listScroll(j, d), l.get(0).lastChild.nodeValue = d.text(), i.hasClass("open") || (g = !0)), c = setTimeout(function() {
                          i.data("filter", "")
                      }, 500))))
                  },
                  optionHover: function() {
                      var b = a(this);
                      b.hasClass("disabled") || b.hasClass("optgroup") || b.siblings().removeClass("active").end().addClass("active")
                  },
                  optionClick: function(b) {
                      b.stopPropagation();
                      var c = a(this),
                          e = c.closest(".sod_select"),
                          f = c.hasClass("disabled"),
                          g = c.hasClass("optgroup"),
                          h = e.find(".sod_option:not('.optgroup')").index(this);
                      e.hasClass("touch") || (f || g || (e.find(".selected, .sod_placeholder").removeClass("selected sod_placeholder"), c.addClass("selected"), e.find("select option")[h].selected = !0, e.find("select").change()), clearTimeout(d), e.removeClass("open"))
                  },
                  selectChange: function() {
                      var b = a(this),
                          c = b.find(":selected"),
                          d = c.text(),
                          e = b.closest(".sod_select");
                      e.find(".sod_label").get(0).lastChild.nodeValue = d, e.data("label", d), f.onChange.call(this), !e.data("links") && !c.data("link") || c.data("link-external") ? (e.data("links-external") || c.data("link-external")) && window.open(c.val(), "_blank") : window.location.href = c.val()
                  },
                  blurSod: function(b) {
                      if (a("body").find(b).length) {
                          var c = b.data("label"),
                              e = b.data("placeholder"),
                              f = b.find(".active"),
                              h = b.find(".selected"),
                              i = !1;
                          clearTimeout(d), g && !f.hasClass("selected") ? (f.click(), i = !0) : f.hasClass("selected") || (f.removeClass("active"), h.addClass("active")), !i && e ? b.find(".sod_label").get(0).lastChild.nodeValue = h.text() : i || (b.find(".sod_label").get(0).lastChild.nodeValue = c), g = !1, b.removeClass("open focus"), b.blur(), a("html").off(".sodBlur")
                      }
                  },
                  checkViewport: function(b, c) {
                      var e = b[0].getBoundingClientRect(),
                          f = c.outerHeight();
                      e.bottom + f + 10 > a(window).height() && e.top - f > 10 ? b.addClass("above") : b.removeClass("above"), d = setTimeout(function() {
                          h.checkViewport(b, c)
                      }, 200)
                  },
                  listScroll: function(a, b) {
                      var c = a[0].getBoundingClientRect(),
                          d = b[0].getBoundingClientRect();
                      c.top > d.top ? a.scrollTop(a.scrollTop() - c.top + d.top) : c.bottom < d.bottom && a.scrollTop(a.scrollTop() - c.bottom + d.bottom)
                  },
                  isTouch: function() {
                      return "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
                  }
              },
              i = {
                  destroy: function() {
                      return this.each(function() {
                          var b = a(this),
                              c = b.parent();
                          c.hasClass("sod_select") ? (b.off("change"), c.find("span").remove(), b.unwrap()) : console.log("Select or Die: There's no SoD to destroy")
                      })
                  },
                  update: function() {
                      return this.each(function() {
                          var b = a(this),
                              c = b.parent(),
                              d = c.find(".sod_list:first");
                          c.hasClass("sod_select") ? (d.empty(), c.find(".sod_label").get(0).lastChild.nodeValue = "", b.is(":disabled") && c.addClass("disabled"), a("option, optgroup", b).each(function() {
                              h.populateSoD(a(this), d, c)
                          })) : console.log("Select or Die: There's no SoD to update")
                      })
                  },
                  disable: function(b) {
                      return this.each(function() {
                          var c = a(this),
                              d = c.parent();
                          d.hasClass("sod_select") ? "undefined" != typeof b ? (d.find(".sod_list:first .sod_option[data-value='" + b + "']").addClass("disabled"), d.find(".sod_list:first .sod_option[data-label='" + b + "']").nextUntil(":not(.groupchild)").addClass("disabled"), a("option[value='" + b + "'], optgroup[label='" + b + "']", this).prop("disabled", !0)) : d.hasClass("sod_select") && (d.addClass("disabled"), c.prop("disabled", !0)) : console.log("Select or Die: There's no SoD to disable")
                      })
                  },
                  enable: function(b) {
                      return this.each(function() {
                          var c = a(this),
                              d = c.parent();
                          d.hasClass("sod_select") ? "undefined" != typeof b ? (d.find(".sod_list:first .sod_option[data-value='" + b + "']").removeClass("disabled"), d.find(".sod_list:first .sod_option[data-label='" + b + "']").nextUntil(":not(.groupchild)").removeClass("disabled"), a("option[value='" + b + "'], optgroup[label='" + b + "']", this).prop("disabled", !1)) : d.hasClass("sod_select") && (d.removeClass("disabled"), c.prop("disabled", !1)) : console.log("Select or Die: There's no SoD to enable")
                      })
                  }
              };
          return i[b] ? i[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error('Select or Die: Oh no! No such method "' + b + '" for the SoD instance') : h.initSoD.apply(this, arguments)
      }
  }(jQuery),
  function(a, b, c, d) {
      "use strict";

      function e(b, c) {
          this.element = b, this.settings = a.extend({}, g, c), this._defaults = g, this._name = f, this.init()
      }
      a.fn.serializeObject = function() {
          var b = {},
              c = this.serializeArray();
          return a.each(c, function() {
              b[this.name] !== d ? (b[this.name].push || (b[this.name] = [b[this.name]]), b[this.name].push(this.value || "")) : b[this.name] = this.value || ""
          }), b
      };
      var f = "reservationForm",
          g = {
              propertyName: "value"
          };
      a.extend(e.prototype, {
          _rreset: function(b) {
              this.$form.find("input, select, textarea").each(function(b, c) {
                      "csrf_uvetok_name" != a(c).attr("name") && "csrf_uvecoo_name" != a(c).attr("name") && (c.value = c.defaultValue)
                  }), this.currentStep = 0, b && this._toStep(0),
                  // this.$inputs.val('')
                  this.$main.find('input[name="privacy"]').attr("checked", !1), this.$main.find(".current-step").text("01"), this.$main.find("select option:first-child").prop("selected", !0), this.$main.find("select option").trigger("change")
          },
          _toStep: function(a, b) {
              if (8 != this.currentStep) {
                  this.currentStep = a;
                  var c = this.$steps.filter(".active");
                  b || c.addClass("old"), this.$steps.removeClass("active"), this.$steps.eq(a).addClass("active");
                  var d = this;
                  setTimeout(function() {
                      d.$steps.eq(a).find("input").hasClass("datepicker") ? d.$steps.eq(a).find(".datepicker-container span").trigger("click") : d.$steps.eq(a).find("input").focus(), c.removeClass("old")
                  }, 300), this.$bar.width((this.currentStep + 1) / this.totalSteps * 100 + "%"), this.currentStep > 0 ? this.$main.addClass("show-back") : this.$main.removeClass("show-back"), 7 == this.currentStep ? this.$form.addClass("can-submit") : this.$form.hasClass("can-submit") && this.$form.removeClass("can-submit"), this.$main.find(".current-step").text("0" + (this.currentStep + 1))
              }
          },
          _nextStep: function() {
              if (7 != this.currentStep) {
                  var a = this.$steps.eq(this.currentStep).find("input");
                  if (a.length && "" == a.val() || "email" == a.attr("type") && !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a.val())) return void this.$steps.eq(this.currentStep).addClass("required");
                  if ("adults" == a.attr("name") && a.val() <= 0) return void this.$steps.eq(this.currentStep).addClass("required");
                  this.$steps.removeClass("required"), this.currentStep++, this._toStep(this.currentStep)
              }
          },
          init: function() {
              if (this.$main = a(this.element), this.$form = this.$main, this.$steps = this.$form.find(".step"), this.$inputs = this.$form.find("input"), this.$button = this.$main.find('button[type="button"]'), this.$submit = this.$main.find('button[type="submit"]'), this.$bar = this.$main.find(".steps-bar"), this.$btBack = this.$main.find(".bt-back"), !this.$main.data("plugin_reservationForm")) {
                  this._rreset();
                  var c = this;
                  this.$btBack.on("click", function() {
                      c.currentStep > 0 && c._toStep(c.currentStep - 1)
                  }), this.$button.on("click", function() {
                      c._nextStep()
                  }), this.$inputs.on("keydown", function(a) {
                      a.keyCode || a.which;
                      13 === a.keyCode ? (a.preventDefault(), c._nextStep()) : 9 === a.keyCode && a.preventDefault()
                  }), this.$form.on("form:reset", function() {
                      b.currentRoom = !1, c._rreset(!0)
                  }), this.$form.on("submit", function(a) {
                      a.preventDefault()
                  }), c.$main.find('input[name="privacy"]').on("change", function() {
                      c.$main.find('[name="privacy"]').is(":checked") ? c.$main.find('[name="privacy"]').removeClass("required") : c.$main.find('[name="privacy"]').addClass("required")
                  }), c.$submit.on("click", function(d) {
                      if (d.preventDefault(), c.$main.find('[name="privacy"]').is(":checked")) {
                          var e = c.$form.serializeObject();
                          b.currentRoom ? dataLayer.push({
                              event: "GAevent",
                              eventCategory: "prenota",
                              eventAction: b.currentRoom,
                              eventLabel: "form"
                          }) : dataLayer.push({
                              event: "GAevent",
                              eventCategory: "prenota",
                              eventAction: b.currentPage,
                              eventLabel: "form"
                          }), a("#reservation-recap-form .info1").text(e.name), a("#reservation-recap-form .info2").text(e.email), a("#reservation-recap-form .info3").text(e.from), a("#reservation-recap-form .info4").text(e.to), a("#reservation-recap-form .info5").text(e.adults), a("#reservation-recap-form .info6").text(e.childrens), a("#reservation-recap-form .info7").text(e.room), a("#reservation-recap-form .info8").text(e.info), a(this).prop("disabled", !1), $body.removeClass("showmenu").removeClass("showreservation"), $body.addClass("show-reservation-recap"), a(this).prop("disabled", !1), SETTINGS.svg && (a(".send-loading").drawCircle(), a("#reservation-recap-form .recap-sent svg").drawSVG({
                              speed: 1,
                              hideStrokeOnEnd: !1,
                              showFillonEnd: !1,
                              drawOnView: !0
                          }));
                          var f = !1;
                          $document.on("click", "#reservation-recap-form button", function(d) {
                              d.preventDefault(), 1 != f && (f = !0, b.currentRoom ? dataLayer.push({
                                  event: "GAevent",
                                  eventCategory: "prenota",
                                  eventAction: b.currentRoom,
                                  eventLabel: "form-ok"
                              }) : dataLayer.push({
                                  event: "GAevent",
                                  eventCategory: "prenota",
                                  eventAction: b.currentPage,
                                  eventLabel: "form-ok"
                              }), a(this).prop("disabled", "disabled"), a("#reservation-recap-form").addClass("sending"), a.post(c.$form.attr("action"), c.$form.serialize(), function(a) {
                                  setTimeout(function() {
                                      location.href = a.redirect
                                  }, 500)
                              }, "json").fail(function() {
                                  console.log("errore")
                              }), setTimeout(function() {
                                  SETTINGS.svg && a("#reservation-recap-form .button-wrap .send-loading").trigger("circle:show"), setTimeout(function() {
                                      a("#reservation-recap-form").removeClass("sending").addClass("sent"), SETTINGS.svg && a("#reservation-recap-form .recap-sent svg").trigger("draw:draw")
                                  }, 3e3)
                              }, 200))
                          })
                      } else c.$main.find('[name="privacy"]').addClass("required")
                  })
              }
          }
      }), a.fn[f] = function(b) {
          return this.each(function() {
              a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
          })
      }
  }(jQuery, window, document),
  function(a, b, c, d) {
      "use strict";

      function e(b, c) {
          this.element = b, this.settings = a.extend({}, g, c), this._defaults = g, this._name = f, this.transEndEventNames = {
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "oTransitionEnd",
              msTransition: "MSTransitionEnd",
              transition: "transitionend"
          }, this.init()
      }
      var f = "drawSVG",
          g = {
              speed: 2, // in seconds
              speedEnd: 1, // in seconds
              hideStrokeOnEnd: !0,
              showFillonEnd: !0,
              drawOnView: !1,
              callbackTimeout: 3,
              notDraw: !1,
              callback: function() {}
          };
      a.extend(e.prototype, {
          init: function() {
              var b = this;
              /**
               * Cross browser transition end events
               *
               * Use modernizr to detect cross browser transition end events. Make sure
               * to include Modernizr in your doc and have "Modernizr.prefixed()" checked
               * off in the extensibility section.
               */
              /**
               * DrawFillSVG _init
               *
               * Initialise DrawFillSVG
               */
              return b.$element = a(b.element), b.svg = b.$element[0], b.paths = b.$element.find("path"), b.paths.length ? (b.$element.data("speed") && (b.settings.speed = b.$element.data("speed")), b.transEndEventName = b.transEndEventNames[Modernizr.prefixed("transition")], b.$element.data("drawsvg") && (b.settings = a.extend(b.settings, b.$element.data("drawsvg"))), b.$element.on("draw:build", function() {
                  for (var a = 0; a < b.paths.length; a++) {
                      var c = b.paths[a];
                      if (!c.getAttribute("d")) return;
                      var d = c.getTotalLength();
                      // reset opacities
                      c.style.fillOpacity = 0,
                          // path.style.fill = 'none';
                          c.style.strokeOpacity = 0,
                          // reset transitions
                          c.style.transition = c.style.WebkitTransition = "none",
                          // reset stroke dash array and stroke dash offset
                          c.style.strokeDasharray = d + " " + d, c.style.strokeDashoffset = d, c.getBoundingClientRect()
                  }
              }), b.$element.trigger("draw:build"), b.$element.one("draw:draw", function() {
                  b.initAnimation()
              }), void(b.settings.drawOnView || b.settings.notDraw || b.$element.trigger("draw:draw"))) : !1
          },
          initAnimation: function() {
              var a = this;
              a.settings.callback && setTimeout(function() {
                  a.settings.callback()
              }, 1e3 * a.settings.callbackTimeout);
              for (var b = 0; b < a.paths.length; b++) {
                  var c = a.paths[b];
                  c.getTotalLength();
                  c.style.strokeOpacity = 1,
                      // apply new transitions
                      c.style.transition = c.style.WebkitTransition = "stroke-dashoffset " + a.settings.speed + "s ease-in-out",
                      // go baby go
                      c.style.strokeDashoffset = 0,
                      // fill the path
                      a.fillPath(c)
              }
          },
          fillPath: function(b) {
              var c = this;
              b.addEventListener(c.transEndEventName, function() {
                  // reset transitions
                  b.style.transition = b.style.WebkitTransition = "none", b.style.transition = b.style.WebkitTransition = "fill-opacity " + c.settings.speedEnd + "s ease-in-out, stroke-opacity " + c.settings.speedEnd + "s ease-in-out",
                      // edit props
                      (c.settings.showFillonEnd || a(b).attr("fill") && "none" != a(b).attr("fill")) && (b.style.fillOpacity = 1), c.settings.hideStrokeOnEnd && (b.style.strokeOpacity = 0)
              })
          }
      }), a.fn[f] = function(b) {
          return this.each(function() {
              a.data(this, f + "Istance") || a.data(this, f + "Istance", new e(this, b))
          })
      }
  }(jQuery, window, document),
  function(a, b, c, d) {
      "use strict";

      function e(b, c) {
          this.element = b, this.settings = a.extend({}, g, c), this._defaults = g, this._name = f, this.init()
      }
      var f = "drawCircle",
          g = {};
      a.extend(e.prototype, {
          getSvg: function(a, b, c, d) {
              return c || (c = a), d || (d = b), '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + a + " " + b + '" width="' + c + 'px" height="' + d + 'px"></svg>'
          },
          init: function() {
              var b, c, d, e, f, g, h, i, j, k, l, m = this,
                  n = a(this.element),
                  o = n.find(".line"),
                  p = "#ffffff",
                  b = !1,
                  q = 0,
                  r = !1,
                  s = n.data("stroke-width") ? n.data("stroke-width") : 1,
                  t = n.data("hover-stroke-width") ? n.data("hover-stroke-width") : s + 1,
                  u = n.data("speed") ? n.data("speed") : 600;
              if (n.data("stroke-color") && (p = n.data("stroke-color")), n.data("hover-stroke-color") && (r = n.data("hover-stroke-color")), n.data("hover-stroke-color") && (r = n.data("hover-stroke-color")), n.data("drawcircle")) {
                  var v = n.data("drawcircle");
                  v.strokeWidth && (s = v.strokeWidth), v.hoverStrokeWidth && (t = v.hoverStrokeWidth), v.strokeColor, p = v.strokeColor, v.hoverStrokeColor && (r = v.hoverStrokeColor), v.speed && (u = v.speed)
              }
              // create svg 
              n.on("circle:build", function(k, l) {
                  c = o.width(), d = o.height(), f = c / 2, g = .9 * c / 2, h = f - g, l && b.remove(), b = a(m.getSvg(c, d)), o.append(b), e = Snap(b[0]), i = e.path(""), j = e.path(""), n.hasClass("showed") && (i.remove(), j.remove(), i = e.circle(f, f, g).attr({
                      stroke: p,
                      fill: "none",
                      strokeWidth: s
                  }), j = e.circle(f, f, g - 1).attr({
                      stroke: p,
                      fill: "none",
                      strokeWidth: t,
                      opacity: 0
                  }))
              }), n.trigger("circle:build"), n.one("circle:show", function() {
                  Snap.animate(0, 359.9999, function(a) {
                      i.remove();
                      var b = a,
                          c = b - 90,
                          d = Math.PI * c / 180,
                          j = f + g * Math.cos(d),
                          k = f + g * Math.sin(d),
                          l = b > 180 ? 1 : 0,
                          m = "M" + f + "," + h + " A" + g + "," + g + " 0 " + l + ",1 " + j + "," + k;
                      i = e.path(m), i.attr({
                          stroke: p,
                          fill: "none",
                          strokeWidth: s
                      })
                  }, u, mina.easeinout, function() {
                      n.addClass("showed")
                  })
              }), n.on("circle:step", function(a, b, c) { // step: 0 - 1
                  b > 1 && (b = 1), l && l.stop(), l = Snap.animate(q, 359.9999 * b, function(a) {
                      q = a;
                      var b = a,
                          c = b - 90,
                          d = Math.PI * c / 180,
                          i = f + g * Math.cos(d),
                          k = f + g * Math.sin(d),
                          l = b > 180 ? 1 : 0;
                      j.remove();
                      var m = "M" + f + "," + h + " A" + g + "," + g + " 0 " + l + ",1 " + i + "," + k;
                      j = e.path(m), j.attr({
                          stroke: r ? r : p,
                          fill: "none",
                          strokeWidth: t
                      })
                  }, u, mina.easeinout, function() {
                      c && c()
                  })
              }), n.on("circle:reset", function(a) { // step: 0 - 1
                  Snap.animate(0, 0, function(a) {
                      q = a;
                      var b = a,
                          c = b - 90,
                          d = Math.PI * c / 180,
                          i = f + g * Math.cos(d),
                          k = f + g * Math.sin(d),
                          l = b > 180 ? 1 : 0;
                      j.remove();
                      var m = "M" + f + "," + h + " A" + g + "," + g + " 0 " + l + ",1 " + i + "," + k;
                      j = e.path(m), j.attr({
                          stroke: r ? r : p,
                          fill: "none",
                          strokeWidth: t
                      })
                  }, 1, mina.easeinout, function() {})
              }), n.hasClass("nohover") || (n.on("mouseover", function(a) {
                  k = !1, j.attr({
                      opacity: 1
                  }), Snap.animate(q, 359.9999, function(a) {
                      q = a, j.remove();
                      var b = a,
                          c = b - 90,
                          d = Math.PI * c / 180,
                          i = f + g * Math.cos(d),
                          k = f + g * Math.sin(d),
                          l = b > 180 ? 1 : 0,
                          m = "M" + f + "," + h + " A" + g + "," + g + " 0 " + l + ",1 " + i + "," + k;
                      j = e.path(m), j.attr({
                          stroke: r ? r : p,
                          fill: "none",
                          strokeWidth: t
                      })
                  }, u, mina.easeinout, function() {})
              }), n.on("mouseleave", function() {
                  Snap.animate(q, 0, function(a) {
                      q = a;
                      var b = a,
                          c = b - 90,
                          d = Math.PI * c / 180,
                          i = f + g * Math.cos(d),
                          k = f + g * Math.sin(d),
                          l = b > 180 ? 1 : 0;
                      j.remove();
                      var m = "M" + f + "," + h + " A" + g + "," + g + " 0 " + l + ",1 " + i + "," + k;
                      j = e.path(m), j.attr({
                          stroke: r ? r : p,
                          fill: "none",
                          strokeWidth: t
                      })
                  }, u, mina.easeinout, function() {})
              }));
              var w = !1;
              $window.resize(function() {
                  w && clearTimeout(w), w = setTimeout(function() {
                      n.trigger("circle:build", !0), w = !1
                  }, 50)
              })
          }
      }), a.fn[f] = function(b) {
          return this.each(function() {
              a.data(this, f + "Istance") || a.data(this, f + "Istance", new e(this, b))
          })
      }
  }(jQuery, window, document),
  /*!
   * Isotope PACKAGED v2.2.0
   *
   * Licensed GPLv3 for open source use
   * or Isotope Commercial License for commercial use
   *
   * http://isotope.metafizzy.co
   * Copyright 2015 Metafizzy
   */
  ! function(a) {
      function b() {}

      function c(a) {
          function c(b) {
              b.prototype.option || (b.prototype.option = function(b) {
                  a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
              })
          }

          function e(b, c) {
              a.fn[b] = function(e) {
                  if ("string" == typeof e) {
                      for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                          var j = this[h],
                              k = a.data(j, b);
                          if (k)
                              if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                  var l = k[e].apply(k, g);
                                  if (void 0 !== l) return l
                              } else f("no such method '" + e + "' for " + b + " instance");
                          else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                      }
                      return this
                  }
                  return this.each(function() {
                      var d = a.data(this, b);
                      d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                  })
              }
          }
          if (a) {
              var f = "undefined" == typeof console ? b : function(a) {
                  console.error(a)
              };
              return a.bridget = function(a, b) {
                  c(b), e(a, b)
              }, a.bridget
          }
      }
      var d = Array.prototype.slice;
      "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
  }(window),
  function(a) {
      function b(b) {
          var c = a.event;
          return c.target = c.target || c.srcElement || b, c
      }
      var c = document.documentElement,
          d = function() {};
      c.addEventListener ? d = function(a, b, c) {
          a.addEventListener(b, c, !1)
      } : c.attachEvent && (d = function(a, c, d) {
          a[c + d] = d.handleEvent ? function() {
              var c = b(a);
              d.handleEvent.call(d, c)
          } : function() {
              var c = b(a);
              d.call(a, c)
          }, a.attachEvent("on" + c, a[c + d])
      });
      var e = function() {};
      c.removeEventListener ? e = function(a, b, c) {
          a.removeEventListener(b, c, !1)
      } : c.detachEvent && (e = function(a, b, c) {
          a.detachEvent("on" + b, a[b + c]);
          try {
              delete a[b + c]
          } catch (d) {
              a[b + c] = void 0
          }
      });
      var f = {
          bind: d,
          unbind: e
      };
      "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
  }(window),
  function() {
      "use strict";

      function a() {}

      function b(a, b) {
          for (var c = a.length; c--;)
              if (a[c].listener === b) return c;
          return -1
      }

      function c(a) {
          return function() {
              return this[a].apply(this, arguments)
          }
      }
      var d = a.prototype,
          e = this,
          f = e.EventEmitter;
      d.getListeners = function(a) {
          var b, c, d = this._getEvents();
          if (a instanceof RegExp) {
              b = {};
              for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
          } else b = d[a] || (d[a] = []);
          return b
      }, d.flattenListeners = function(a) {
          var b, c = [];
          for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
          return c
      }, d.getListenersAsObject = function(a) {
          var b, c = this.getListeners(a);
          return c instanceof Array && (b = {}, b[a] = c), b || c
      }, d.addListener = function(a, c) {
          var d, e = this.getListenersAsObject(a),
              f = "object" == typeof c;
          for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
              listener: c,
              once: !1
          });
          return this
      }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
          return this.addListener(a, {
              listener: b,
              once: !0
          })
      }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
          return this.getListeners(a), this
      }, d.defineEvents = function(a) {
          for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
          return this
      }, d.removeListener = function(a, c) {
          var d, e, f = this.getListenersAsObject(a);
          for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
          return this
      }, d.off = c("removeListener"), d.addListeners = function(a, b) {
          return this.manipulateListeners(!1, a, b)
      }, d.removeListeners = function(a, b) {
          return this.manipulateListeners(!0, a, b)
      }, d.manipulateListeners = function(a, b, c) {
          var d, e, f = a ? this.removeListener : this.addListener,
              g = a ? this.removeListeners : this.addListeners;
          if ("object" != typeof b || b instanceof RegExp)
              for (d = c.length; d--;) f.call(this, b, c[d]);
          else
              for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
          return this
      }, d.removeEvent = function(a) {
          var b, c = typeof a,
              d = this._getEvents();
          if ("string" === c) delete d[a];
          else if (a instanceof RegExp)
              for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
          else delete this._events;
          return this
      }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
          var c, d, e, f, g = this.getListenersAsObject(a);
          for (e in g)
              if (g.hasOwnProperty(e))
                  for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
          return this
      }, d.trigger = c("emitEvent"), d.emit = function(a) {
          var b = Array.prototype.slice.call(arguments, 1);
          return this.emitEvent(a, b)
      }, d.setOnceReturnValue = function(a) {
          return this._onceReturnValue = a, this
      }, d._getOnceReturnValue = function() {
          return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
      }, d._getEvents = function() {
          return this._events || (this._events = {})
      }, a.noConflict = function() {
          return e.EventEmitter = f, a
      }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
          return a
      }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
  }.call(this),
  function(a) {
      function b(a) {
          if (a) {
              if ("string" == typeof d[a]) return a;
              a = a.charAt(0).toUpperCase() + a.slice(1);
              for (var b, e = 0, f = c.length; f > e; e++)
                  if (b = c[e] + a, "string" == typeof d[b]) return b
          }
      }
      var c = "Webkit Moz ms Ms O".split(" "),
          d = document.documentElement.style;
      "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
          return b
      }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
  }(window),
  function(a, b) {
      function c(a) {
          var b = parseFloat(a),
              c = -1 === a.indexOf("%") && !isNaN(b);
          return c && b
      }

      function d() {}

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
                  if (j = function() {
                          var a = d ? function(a) {
                              return d(a, null)
                          } : function(a) {
                              return a.currentStyle
                          };
                          return function(b) {
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
                  if ("none" === b.display) return e();
                  var f = {};
                  f.width = a.offsetWidth, f.height = a.offsetHeight;
                  for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
                      var o = h[m],
                          p = b[o];
                      p = i(a, p);
                      var q = parseFloat(p);
                      f[o] = isNaN(q) ? 0 : q
                  }
                  var r = f.paddingLeft + f.paddingRight,
                      s = f.paddingTop + f.paddingBottom,
                      t = f.marginLeft + f.marginRight,
                      u = f.marginTop + f.marginBottom,
                      v = f.borderLeftWidth + f.borderRightWidth,
                      w = f.borderTopWidth + f.borderBottomWidth,
                      x = g && l,
                      y = c(b.width);
                  y !== !1 && (f.width = y + (x ? 0 : r + v));
                  var z = c(b.height);
                  return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
              }
          }

          function i(b, c) {
              if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
              var d = b.style,
                  e = d.left,
                  f = b.runtimeStyle,
                  g = f && f.left;
              return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
          }
          var j, k, l, m = !1;
          return f
      }
      var g = "undefined" == typeof console ? d : function(a) {
              console.error(a)
          },
          h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
      "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
  }(window),
  function(a) {
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
      var f = a.document,
          g = [];
      b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
  }(window),
  function(a) {
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
          for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
              if (d[e] === a) return !0;
          return !1
      }

      function e(a, d) {
          return c(a), b(a, d)
      }
      var f, g = function() {
          if (a.matches) return "matches";
          if (a.matchesSelector) return "matchesSelector";
          for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
              var e = b[c],
                  f = e + "MatchesSelector";
              if (a[f]) return f
          }
      }();
      if (g) {
          var h = document.createElement("div"),
              i = b(h, "div");
          f = i ? b : e
      } else f = d;
      "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
          return f
      }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
  }(Element.prototype),
  function(a, b) {
      "use strict";
      "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(c, d) {
          return b(a, c, d)
      }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
  }(window, function(a, b, c) {
      var d = {};
      d.extend = function(a, b) {
          for (var c in b) a[c] = b[c];
          return a
      }, d.modulo = function(a, b) {
          return (a % b + b) % b
      };
      var e = Object.prototype.toString;
      d.isArray = function(a) {
          return "[object Array]" == e.call(a)
      }, d.makeArray = function(a) {
          var b = [];
          if (d.isArray(a)) b = a;
          else if (a && "number" == typeof a.length)
              for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
          else b.push(a);
          return b
      }, d.indexOf = Array.prototype.indexOf ? function(a, b) {
          return a.indexOf(b)
      } : function(a, b) {
          for (var c = 0, d = a.length; d > c; c++)
              if (a[c] === b) return c;
          return -1
      }, d.removeFrom = function(a, b) {
          var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
      }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(a) {
          return a instanceof HTMLElement
      } : function(a) {
          return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
      }, d.setText = function() {
          function a(a, c) {
              b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
          }
          var b;
          return a
      }(), d.getParent = function(a, b) {
          for (; a != document.body;)
              if (a = a.parentNode, c(a, b)) return a
      }, d.getQueryElement = function(a) {
          return "string" == typeof a ? document.querySelector(a) : a
      }, d.handleEvent = function(a) {
          var b = "on" + a.type;
          this[b] && this[b](a)
      }, d.filterFindElements = function(a, b) {
          a = d.makeArray(a);
          for (var e = [], f = 0, g = a.length; g > f; f++) {
              var h = a[f];
              if (d.isElement(h))
                  if (b) {
                      c(h, b) && e.push(h);
                      for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
                  } else e.push(h)
          }
          return e
      }, d.debounceMethod = function(a, b, c) {
          var d = a.prototype[b],
              e = b + "Timeout";
          a.prototype[b] = function() {
              var a = this[e];
              a && clearTimeout(a);
              var b = arguments,
                  f = this;
              this[e] = setTimeout(function() {
                  d.apply(f, b), delete f[e]
              }, c || 100)
          }
      }, d.toDashed = function(a) {
          return a.replace(/(.)([A-Z])/g, function(a, b, c) {
              return b + "-" + c
          }).toLowerCase()
      };
      var f = a.console;
      return d.htmlInit = function(c, e) {
          b(function() {
              for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                  var k, l = g[i],
                      m = l.getAttribute(h);
                  try {
                      k = m && JSON.parse(m)
                  } catch (n) {
                      f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                      continue
                  }
                  var o = new c(l, k),
                      p = a.jQuery;
                  p && p.data(l, e, o)
              }
          })
      }, d
  }),
  function(a, b) {
      "use strict";
      "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(c, d, e, f) {
          return b(a, c, d, e, f)
      }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
  }(window, function(a, b, c, d, e) {
      "use strict";

      function f(a) {
          for (var b in a) return !1;
          return b = null, !0
      }

      function g(a, b) {
          a && (this.element = a, this.layout = b, this.position = {
              x: 0,
              y: 0
          }, this._create())
      }

      function h(a) {
          return a.replace(/([A-Z])/g, function(a) {
              return "-" + a.toLowerCase()
          })
      }
      var i = a.getComputedStyle,
          j = i ? function(a) {
              return i(a, null)
          } : function(a) {
              return a.currentStyle
          },
          k = d("transition"),
          l = d("transform"),
          m = k && l,
          n = !!d("perspective"),
          o = {
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "otransitionend",
              transition: "transitionend"
          }[k],
          p = ["transform", "transition", "transitionDuration", "transitionProperty"],
          q = function() {
              for (var a = {}, b = 0, c = p.length; c > b; b++) {
                  var e = p[b],
                      f = d(e);
                  f && f !== e && (a[e] = f)
              }
              return a
          }();
      e.extend(g.prototype, b.prototype), g.prototype._create = function() {
          this._transn = {
              ingProperties: {},
              clean: {},
              onEnd: {}
          }, this.css({
              position: "absolute"
          })
      }, g.prototype.handleEvent = function(a) {
          var b = "on" + a.type;
          this[b] && this[b](a)
      }, g.prototype.getSize = function() {
          this.size = c(this.element)
      }, g.prototype.css = function(a) {
          var b = this.element.style;
          for (var c in a) {
              var d = q[c] || c;
              b[d] = a[c]
          }
      }, g.prototype.getPosition = function() {
          var a = j(this.element),
              b = this.layout.options,
              c = b.isOriginLeft,
              d = b.isOriginTop,
              e = a[c ? "left" : "right"],
              f = a[d ? "top" : "bottom"],
              g = parseInt(e, 10),
              h = parseInt(f, 10),
              i = this.layout.size;
          g = -1 != e.indexOf("%") ? g / 100 * i.width : g, h = -1 != f.indexOf("%") ? h / 100 * i.height : h, g = isNaN(g) ? 0 : g, h = isNaN(h) ? 0 : h, g -= c ? i.paddingLeft : i.paddingRight, h -= d ? i.paddingTop : i.paddingBottom, this.position.x = g, this.position.y = h
      }, g.prototype.layoutPosition = function() {
          var a = this.layout.size,
              b = this.layout.options,
              c = {},
              d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
              e = b.isOriginLeft ? "left" : "right",
              f = b.isOriginLeft ? "right" : "left",
              g = this.position.x + a[d];
          c[e] = this.getXValue(g), c[f] = "";
          var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
              i = b.isOriginTop ? "top" : "bottom",
              j = b.isOriginTop ? "bottom" : "top",
              k = this.position.y + a[h];
          c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
      }, g.prototype.getXValue = function(a) {
          var b = this.layout.options;
          return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
      }, g.prototype.getYValue = function(a) {
          var b = this.layout.options;
          return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
      }, g.prototype._transitionTo = function(a, b) {
          this.getPosition();
          var c = this.position.x,
              d = this.position.y,
              e = parseInt(a, 10),
              f = parseInt(b, 10),
              g = e === this.position.x && f === this.position.y;
          if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
          var h = a - c,
              i = b - d,
              j = {};
          j.transform = this.getTranslate(h, i), this.transition({
              to: j,
              onTransitionEnd: {
                  transform: this.layoutPosition
              },
              isCleaning: !0
          })
      }, g.prototype.getTranslate = function(a, b) {
          var c = this.layout.options;
          return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, a = this.getXValue(a), b = this.getYValue(b), n ? "translate3d(" + a + ", " + b + ", 0)" : "translate(" + a + ", " + b + ")"
      }, g.prototype.goTo = function(a, b) {
          this.setPosition(a, b), this.layoutPosition()
      }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function(a, b) {
          this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
      }, g.prototype._nonTransition = function(a) {
          this.css(a.to), a.isCleaning && this._removeStyles(a.to);
          for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
      }, g.prototype._transition = function(a) {
          if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
          var b = this._transn;
          for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
          for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
          if (a.from) {
              this.css(a.from);
              var d = this.element.offsetHeight;
              d = null
          }
          this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
      };
      var r = "opacity," + h(q.transform || "transform");
      g.prototype.enableTransition = function() {
          this.isTransitioning || (this.css({
              transitionProperty: r,
              transitionDuration: this.layout.options.transitionDuration
          }), this.element.addEventListener(o, this, !1))
      }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function(a) {
          this.ontransitionend(a)
      }, g.prototype.onotransitionend = function(a) {
          this.ontransitionend(a)
      };
      var s = {
          "-webkit-transform": "transform",
          "-moz-transform": "transform",
          "-o-transform": "transform"
      };
      g.prototype.ontransitionend = function(a) {
          if (a.target === this.element) {
              var b = this._transn,
                  c = s[a.propertyName] || a.propertyName;
              if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                  var d = b.onEnd[c];
                  d.call(this), delete b.onEnd[c]
              }
              this.emitEvent("transitionEnd", [this])
          }
      }, g.prototype.disableTransition = function() {
          this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
      }, g.prototype._removeStyles = function(a) {
          var b = {};
          for (var c in a) b[c] = "";
          this.css(b)
      };
      var t = {
          transitionProperty: "",
          transitionDuration: ""
      };
      return g.prototype.removeTransitionStyles = function() {
          this.css(t)
      }, g.prototype.removeElem = function() {
          this.element.parentNode.removeChild(this.element), this.css({
              display: ""
          }), this.emitEvent("remove", [this])
      }, g.prototype.remove = function() {
          if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
          var a = this;
          this.once("transitionEnd", function() {
              a.removeElem()
          }), this.hide()
      }, g.prototype.reveal = function() {
          delete this.isHidden, this.css({
              display: ""
          });
          var a = this.layout.options,
              b = {},
              c = this.getHideRevealTransitionEndProperty("visibleStyle");
          b[c] = this.onRevealTransitionEnd, this.transition({
              from: a.hiddenStyle,
              to: a.visibleStyle,
              isCleaning: !0,
              onTransitionEnd: b
          })
      }, g.prototype.onRevealTransitionEnd = function() {
          this.isHidden || this.emitEvent("reveal")
      }, g.prototype.getHideRevealTransitionEndProperty = function(a) {
          var b = this.layout.options[a];
          if (b.opacity) return "opacity";
          for (var c in b) return c
      }, g.prototype.hide = function() {
          this.isHidden = !0, this.css({
              display: ""
          });
          var a = this.layout.options,
              b = {},
              c = this.getHideRevealTransitionEndProperty("hiddenStyle");
          b[c] = this.onHideTransitionEnd, this.transition({
              from: a.visibleStyle,
              to: a.hiddenStyle,
              isCleaning: !0,
              onTransitionEnd: b
          })
      }, g.prototype.onHideTransitionEnd = function() {
          this.isHidden && (this.css({
              display: "none"
          }), this.emitEvent("hide"))
      }, g.prototype.destroy = function() {
          this.css({
              position: "",
              left: "",
              right: "",
              top: "",
              bottom: "",
              transition: "",
              transform: ""
          })
      }, g
  }),
  function(a, b) {
      "use strict";
      "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f, g) {
          return b(a, c, d, e, f, g)
      }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
  }(window, function(a, b, c, d, e, f) {
      "use strict";

      function g(a, b) {
          var c = e.getQueryElement(a);
          if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
          this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
          var d = ++k;
          this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
      }
      var h = a.console,
          i = a.jQuery,
          j = function() {},
          k = 0,
          l = {};
      return g.namespace = "outlayer", g.Item = f, g.defaults = {
          containerStyle: {
              position: "relative"
          },
          isInitLayout: !0,
          isOriginLeft: !0,
          isOriginTop: !0,
          isResizeBound: !0,
          isResizingContainer: !0,
          transitionDuration: "0.4s",
          hiddenStyle: {
              opacity: 0,
              transform: "scale(0.001)"
          },
          visibleStyle: {
              opacity: 1,
              transform: "scale(1)"
          }
      }, e.extend(g.prototype, c.prototype), g.prototype.option = function(a) {
          e.extend(this.options, a)
      }, g.prototype._create = function() {
          this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
      }, g.prototype.reloadItems = function() {
          this.items = this._itemize(this.element.children)
      }, g.prototype._itemize = function(a) {
          for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
              var g = b[e],
                  h = new c(g, this);
              d.push(h)
          }
          return d
      }, g.prototype._filterFindItemElements = function(a) {
          return e.filterFindElements(a, this.options.itemSelector)
      }, g.prototype.getItemElements = function() {
          for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
          return a
      }, g.prototype.layout = function() {
          this._resetLayout(), this._manageStamps();
          var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
          this.layoutItems(this.items, a), this._isLayoutInited = !0
      }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
          this.getSize()
      }, g.prototype.getSize = function() {
          this.size = d(this.element)
      }, g.prototype._getMeasurement = function(a, b) {
          var c, f = this.options[a];
          f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
      }, g.prototype.layoutItems = function(a, b) {
          a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
      }, g.prototype._getItemsForLayout = function(a) {
          for (var b = [], c = 0, d = a.length; d > c; c++) {
              var e = a[c];
              e.isIgnored || b.push(e)
          }
          return b
      }, g.prototype._layoutItems = function(a, b) {
          if (this._emitCompleteOnItems("layout", a), a && a.length) {
              for (var c = [], d = 0, e = a.length; e > d; d++) {
                  var f = a[d],
                      g = this._getItemLayoutPosition(f);
                  g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
              }
              this._processLayoutQueue(c)
          }
      }, g.prototype._getItemLayoutPosition = function() {
          return {
              x: 0,
              y: 0
          }
      }, g.prototype._processLayoutQueue = function(a) {
          for (var b = 0, c = a.length; c > b; b++) {
              var d = a[b];
              this._positionItem(d.item, d.x, d.y, d.isInstant)
          }
      }, g.prototype._positionItem = function(a, b, c, d) {
          d ? a.goTo(b, c) : a.moveTo(b, c)
      }, g.prototype._postLayout = function() {
          this.resizeContainer()
      }, g.prototype.resizeContainer = function() {
          if (this.options.isResizingContainer) {
              var a = this._getContainerSize();
              a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
          }
      }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function(a, b) {
          if (void 0 !== a) {
              var c = this.size;
              c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
          }
      }, g.prototype._emitCompleteOnItems = function(a, b) {
          function c() {
              e.dispatchEvent(a + "Complete", null, [b])
          }

          function d() {
              g++, g === f && c()
          }
          var e = this,
              f = b.length;
          if (!b || !f) return void c();
          for (var g = 0, h = 0, i = b.length; i > h; h++) {
              var j = b[h];
              j.once(a, d)
          }
      }, g.prototype.dispatchEvent = function(a, b, c) {
          var d = b ? [b].concat(c) : c;
          if (this.emitEvent(a, d), i)
              if (this.$element = this.$element || i(this.element), b) {
                  var e = i.Event(b);
                  e.type = a, this.$element.trigger(e, c)
              } else this.$element.trigger(a, c)
      }, g.prototype.ignore = function(a) {
          var b = this.getItem(a);
          b && (b.isIgnored = !0)
      }, g.prototype.unignore = function(a) {
          var b = this.getItem(a);
          b && delete b.isIgnored
      }, g.prototype.stamp = function(a) {
          if (a = this._find(a)) {
              this.stamps = this.stamps.concat(a);
              for (var b = 0, c = a.length; c > b; b++) {
                  var d = a[b];
                  this.ignore(d)
              }
          }
      }, g.prototype.unstamp = function(a) {
          if (a = this._find(a))
              for (var b = 0, c = a.length; c > b; b++) {
                  var d = a[b];
                  e.removeFrom(this.stamps, d), this.unignore(d)
              }
      }, g.prototype._find = function(a) {
          return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
      }, g.prototype._manageStamps = function() {
          if (this.stamps && this.stamps.length) {
              this._getBoundingRect();
              for (var a = 0, b = this.stamps.length; b > a; a++) {
                  var c = this.stamps[a];
                  this._manageStamp(c)
              }
          }
      }, g.prototype._getBoundingRect = function() {
          var a = this.element.getBoundingClientRect(),
              b = this.size;
          this._boundingRect = {
              left: a.left + b.paddingLeft + b.borderLeftWidth,
              top: a.top + b.paddingTop + b.borderTopWidth,
              right: a.right - (b.paddingRight + b.borderRightWidth),
              bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
          }
      }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function(a) {
          var b = a.getBoundingClientRect(),
              c = this._boundingRect,
              e = d(a),
              f = {
                  left: b.left - c.left - e.marginLeft,
                  top: b.top - c.top - e.marginTop,
                  right: c.right - b.right - e.marginRight,
                  bottom: c.bottom - b.bottom - e.marginBottom
              };
          return f
      }, g.prototype.handleEvent = function(a) {
          var b = "on" + a.type;
          this[b] && this[b](a)
      }, g.prototype.bindResize = function() {
          this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
      }, g.prototype.unbindResize = function() {
          this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
      }, g.prototype.onresize = function() {
          function a() {
              b.resize(), delete b.resizeTimeout
          }
          this.resizeTimeout && clearTimeout(this.resizeTimeout);
          var b = this;
          this.resizeTimeout = setTimeout(a, 100)
      }, g.prototype.resize = function() {
          this.isResizeBound && this.needsResizeLayout() && this.layout()
      }, g.prototype.needsResizeLayout = function() {
          var a = d(this.element),
              b = this.size && a;
          return b && a.innerWidth !== this.size.innerWidth
      }, g.prototype.addItems = function(a) {
          var b = this._itemize(a);
          return b.length && (this.items = this.items.concat(b)), b
      }, g.prototype.appended = function(a) {
          var b = this.addItems(a);
          b.length && (this.layoutItems(b, !0), this.reveal(b))
      }, g.prototype.prepended = function(a) {
          var b = this._itemize(a);
          if (b.length) {
              var c = this.items.slice(0);
              this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
          }
      }, g.prototype.reveal = function(a) {
          this._emitCompleteOnItems("reveal", a);
          for (var b = a && a.length, c = 0; b && b > c; c++) {
              var d = a[c];
              d.reveal()
          }
      }, g.prototype.hide = function(a) {
          this._emitCompleteOnItems("hide", a);
          for (var b = a && a.length, c = 0; b && b > c; c++) {
              var d = a[c];
              d.hide()
          }
      }, g.prototype.revealItemElements = function(a) {
          var b = this.getItems(a);
          this.reveal(b)
      }, g.prototype.hideItemElements = function(a) {
          var b = this.getItems(a);
          this.hide(b)
      }, g.prototype.getItem = function(a) {
          for (var b = 0, c = this.items.length; c > b; b++) {
              var d = this.items[b];
              if (d.element === a) return d
          }
      }, g.prototype.getItems = function(a) {
          a = e.makeArray(a);
          for (var b = [], c = 0, d = a.length; d > c; c++) {
              var f = a[c],
                  g = this.getItem(f);
              g && b.push(g)
          }
          return b
      }, g.prototype.remove = function(a) {
          var b = this.getItems(a);
          if (this._emitCompleteOnItems("remove", b), b && b.length)
              for (var c = 0, d = b.length; d > c; c++) {
                  var f = b[c];
                  f.remove(), e.removeFrom(this.items, f)
              }
      }, g.prototype.destroy = function() {
          var a = this.element.style;
          a.height = "", a.position = "", a.width = "";
          for (var b = 0, c = this.items.length; c > b; b++) {
              var d = this.items[b];
              d.destroy()
          }
          this.unbindResize();
          var e = this.element.outlayerGUID;
          delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
      }, g.data = function(a) {
          a = e.getQueryElement(a);
          var b = a && a.outlayerGUID;
          return b && l[b]
      }, g.create = function(a, b) {
          function c() {
              g.apply(this, arguments)
          }
          return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function() {
              f.apply(this, arguments)
          }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
      }, g.Item = f, g
  }),
  function(a, b) {
      "use strict";
      "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
  }(window, function(a) {
      "use strict";

      function b() {
          a.Item.apply(this, arguments)
      }
      b.prototype = new a.Item, b.prototype._create = function() {
          this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
      }, b.prototype.updateSortData = function() {
          if (!this.isIgnored) {
              this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
              var a = this.layout.options.getSortData,
                  b = this.layout._sorters;
              for (var c in a) {
                  var d = b[c];
                  this.sortData[c] = d(this.element, this)
              }
          }
      };
      var c = b.prototype.destroy;
      return b.prototype.destroy = function() {
          c.apply(this, arguments), this.css({
              display: ""
          })
      }, b
  }),
  function(a, b) {
      "use strict";
      "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
  }(window, function(a, b) {
      "use strict";

      function c(a) {
          this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
      }
      return function() {
          function a(a) {
              return function() {
                  return b.prototype[a].apply(this.isotope, arguments)
              }
          }
          for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
              var g = d[e];
              c.prototype[g] = a(g)
          }
      }(), c.prototype.needsVerticalResizeLayout = function() {
          var b = a(this.isotope.element),
              c = this.isotope.size && b;
          return c && b.innerHeight != this.isotope.size.innerHeight
      }, c.prototype._getMeasurement = function() {
          this.isotope._getMeasurement.apply(this, arguments)
      }, c.prototype.getColumnWidth = function() {
          this.getSegmentSize("column", "Width")
      }, c.prototype.getRowHeight = function() {
          this.getSegmentSize("row", "Height")
      }, c.prototype.getSegmentSize = function(a, b) {
          var c = a + b,
              d = "outer" + b;
          if (this._getMeasurement(c, d), !this[c]) {
              var e = this.getFirstItemSize();
              this[c] = e && e[d] || this.isotope.size["inner" + b]
          }
      }, c.prototype.getFirstItemSize = function() {
          var b = this.isotope.filteredItems[0];
          return b && b.element && a(b.element)
      }, c.prototype.layout = function() {
          this.isotope.layout.apply(this.isotope, arguments)
      }, c.prototype.getSize = function() {
          this.isotope.getSize(), this.size = this.isotope.size
      }, c.modes = {}, c.create = function(a, b) {
          function d() {
              c.apply(this, arguments)
          }
          return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
      }, c
  }),
  function(a, b) {
      "use strict";
      "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
  }(window, function(a, b, c) {
      var d = a.create("masonry");
      return d.prototype._resetLayout = function() {
          this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
          var a = this.cols;
          for (this.colYs = []; a--;) this.colYs.push(0);
          this.maxY = 0
      }, d.prototype.measureColumns = function() {
          if (this.getContainerWidth(), !this.columnWidth) {
              var a = this.items[0],
                  c = a && a.element;
              this.columnWidth = c && b(c).outerWidth || this.containerWidth
          }
          var d = this.columnWidth += this.gutter,
              e = this.containerWidth + this.gutter,
              f = e / d,
              g = d - e % d,
              h = g && 1 > g ? "round" : "floor";
          f = Math[h](f), this.cols = Math.max(f, 1)
      }, d.prototype.getContainerWidth = function() {
          var a = this.options.isFitWidth ? this.element.parentNode : this.element,
              c = b(a);
          this.containerWidth = c && c.innerWidth
      }, d.prototype._getItemLayoutPosition = function(a) {
          a.getSize();
          var b = a.size.outerWidth % this.columnWidth,
              d = b && 1 > b ? "round" : "ceil",
              e = Math[d](a.size.outerWidth / this.columnWidth);
          e = Math.min(e, this.cols);
          for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
                  x: this.columnWidth * h,
                  y: g
              }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
          return i
      }, d.prototype._getColGroup = function(a) {
          if (2 > a) return this.colYs;
          for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
              var e = this.colYs.slice(d, d + a);
              b[d] = Math.max.apply(Math, e)
          }
          return b
      }, d.prototype._manageStamp = function(a) {
          var c = b(a),
              d = this._getElementOffset(a),
              e = this.options.isOriginLeft ? d.left : d.right,
              f = e + c.outerWidth,
              g = Math.floor(e / this.columnWidth);
          g = Math.max(0, g);
          var h = Math.floor(f / this.columnWidth);
          h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
          for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
      }, d.prototype._getContainerSize = function() {
          this.maxY = Math.max.apply(Math, this.colYs);
          var a = {
              height: this.maxY
          };
          return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
      }, d.prototype._getContainerFitWidth = function() {
          for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
          return (this.cols - a) * this.columnWidth - this.gutter
      }, d.prototype.needsResizeLayout = function() {
          var a = this.containerWidth;
          return this.getContainerWidth(), a !== this.containerWidth
      }, d
  }),
  function(a, b) {
      "use strict";
      "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
  }(window, function(a, b) {
      "use strict";

      function c(a, b) {
          for (var c in b) a[c] = b[c];
          return a
      }
      var d = a.create("masonry"),
          e = d.prototype._getElementOffset,
          f = d.prototype.layout,
          g = d.prototype._getMeasurement;
      c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
      var h = d.prototype.measureColumns;
      d.prototype.measureColumns = function() {
          this.items = this.isotope.filteredItems, h.call(this)
      };
      var i = d.prototype._manageStamp;
      return d.prototype._manageStamp = function() {
          this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
      }, d
  }),
  function(a, b) {
      "use strict";
      "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
  }(window, function(a) {
      "use strict";
      var b = a.create("fitRows");
      return b.prototype._resetLayout = function() {
          this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
      }, b.prototype._getItemLayoutPosition = function(a) {
          a.getSize();
          var b = a.size.outerWidth + this.gutter,
              c = this.isotope.size.innerWidth + this.gutter;
          0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
          var d = {
              x: this.x,
              y: this.y
          };
          return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
      }, b.prototype._getContainerSize = function() {
          return {
              height: this.maxY
          }
      }, b
  }),
  function(a, b) {
      "use strict";
      "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
  }(window, function(a) {
      "use strict";
      var b = a.create("vertical", {
          horizontalAlignment: 0
      });
      return b.prototype._resetLayout = function() {
          this.y = 0
      }, b.prototype._getItemLayoutPosition = function(a) {
          a.getSize();
          var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
              c = this.y;
          return this.y += a.size.outerHeight, {
              x: b,
              y: c
          }
      }, b.prototype._getContainerSize = function() {
          return {
              height: this.y
          }
      }, b
  }),
  function(a, b) {
      "use strict";
      "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(c, d, e, f, g, h) {
          return b(a, c, d, e, f, g, h)
      }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
  }(window, function(a, b, c, d, e, f, g) {
      function h(a, b) {
          return function(c, d) {
              for (var e = 0, f = a.length; f > e; e++) {
                  var g = a[e],
                      h = c.sortData[g],
                      i = d.sortData[g];
                  if (h > i || i > h) {
                      var j = void 0 !== b[g] ? b[g] : b,
                          k = j ? 1 : -1;
                      return (h > i ? 1 : -1) * k
                  }
              }
              return 0
          }
      }
      var i = a.jQuery,
          j = String.prototype.trim ? function(a) {
              return a.trim()
          } : function(a) {
              return a.replace(/^\s+|\s+$/g, "")
          },
          k = document.documentElement,
          l = k.textContent ? function(a) {
              return a.textContent
          } : function(a) {
              return a.innerText
          },
          m = b.create("isotope", {
              layoutMode: "masonry",
              isJQueryFiltering: !0,
              sortAscending: !0
          });
      m.Item = f, m.LayoutMode = g, m.prototype._create = function() {
          this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
          for (var a in g.modes) this._initLayoutMode(a)
      }, m.prototype.reloadItems = function() {
          this.itemGUID = 0, b.prototype.reloadItems.call(this)
      }, m.prototype._itemize = function() {
          for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
              var e = a[c];
              e.id = this.itemGUID++
          }
          return this._updateItemsSortData(a), a
      }, m.prototype._initLayoutMode = function(a) {
          var b = g.modes[a],
              c = this.options[a] || {};
          this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
      }, m.prototype.layout = function() {
          return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
      }, m.prototype._layout = function() {
          var a = this._getIsInstant();
          this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
      }, m.prototype.arrange = function(a) {
          function b() {
              d.reveal(c.needReveal), d.hide(c.needHide)
          }
          this.option(a), this._getIsInstant();
          var c = this._filter(this.items);
          this.filteredItems = c.matches;
          var d = this;
          this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
      }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function() {
          var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
          return this._isInstant = a, a
      }, m.prototype._bindArrangeComplete = function() {
          function a() {
              b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
          }
          var b, c, d, e = this;
          this.once("layoutComplete", function() {
              b = !0, a()
          }), this.once("hideComplete", function() {
              c = !0, a()
          }), this.once("revealComplete", function() {
              d = !0, a()
          })
      }, m.prototype._filter = function(a) {
          var b = this.options.filter;
          b = b || "*";
          for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
              var i = a[g];
              if (!i.isIgnored) {
                  var j = f(i);
                  j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
              }
          }
          return {
              matches: c,
              needReveal: d,
              needHide: e
          }
      }, m.prototype._getFilterTest = function(a) {
          return i && this.options.isJQueryFiltering ? function(b) {
              return i(b.element).is(a)
          } : "function" == typeof a ? function(b) {
              return a(b.element)
          } : function(b) {
              return d(b.element, a)
          }
      }, m.prototype.updateSortData = function(a) {
          var b;
          a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
      }, m.prototype._getSorters = function() {
          var a = this.options.getSortData;
          for (var b in a) {
              var c = a[b];
              this._sorters[b] = n(c)
          }
      }, m.prototype._updateItemsSortData = function(a) {
          for (var b = a && a.length, c = 0; b && b > c; c++) {
              var d = a[c];
              d.updateSortData()
          }
      };
      var n = function() {
          function a(a) {
              if ("string" != typeof a) return a;
              var c = j(a).split(" "),
                  d = c[0],
                  e = d.match(/^\[(.+)\]$/),
                  f = e && e[1],
                  g = b(f, d),
                  h = m.sortDataParsers[c[1]];
              return a = h ? function(a) {
                  return a && h(g(a))
              } : function(a) {
                  return a && g(a)
              }
          }

          function b(a, b) {
              var c;
              return c = a ? function(b) {
                  return b.getAttribute(a)
              } : function(a) {
                  var c = a.querySelector(b);
                  return c && l(c)
              }
          }
          return a
      }();
      m.sortDataParsers = {
          parseInt: function(a) {
              return parseInt(a, 10)
          },
          parseFloat: function(a) {
              return parseFloat(a)
          }
      }, m.prototype._sort = function() {
          var a = this.options.sortBy;
          if (a) {
              var b = [].concat.apply(a, this.sortHistory),
                  c = h(b, this.options.sortAscending);
              this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
          }
      }, m.prototype._mode = function() {
          var a = this.options.layoutMode,
              b = this.modes[a];
          if (!b) throw new Error("No layout mode: " + a);
          return b.options = this.options[a], b
      }, m.prototype._resetLayout = function() {
          b.prototype._resetLayout.call(this), this._mode()._resetLayout()
      }, m.prototype._getItemLayoutPosition = function(a) {
          return this._mode()._getItemLayoutPosition(a)
      }, m.prototype._manageStamp = function(a) {
          this._mode()._manageStamp(a)
      }, m.prototype._getContainerSize = function() {
          return this._mode()._getContainerSize()
      }, m.prototype.needsResizeLayout = function() {
          return this._mode().needsResizeLayout()
      }, m.prototype.appended = function(a) {
          var b = this.addItems(a);
          if (b.length) {
              var c = this._filterRevealAdded(b);
              this.filteredItems = this.filteredItems.concat(c)
          }
      }, m.prototype.prepended = function(a) {
          var b = this._itemize(a);
          if (b.length) {
              this._resetLayout(), this._manageStamps();
              var c = this._filterRevealAdded(b);
              this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
          }
      }, m.prototype._filterRevealAdded = function(a) {
          var b = this._filter(a);
          return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
      }, m.prototype.insert = function(a) {
          var b = this.addItems(a);
          if (b.length) {
              var c, d, e = b.length;
              for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
              var f = this._filter(b).matches;
              for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
              for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
              this.reveal(f)
          }
      };
      var o = m.prototype.remove;
      return m.prototype.remove = function(a) {
          a = e.makeArray(a);
          var b = this.getItems(a);
          o.call(this, a);
          var c = b && b.length;
          if (c)
              for (var d = 0; c > d; d++) {
                  var f = b[d];
                  e.removeFrom(this.filteredItems, f)
              }
      }, m.prototype.shuffle = function() {
          for (var a = 0, b = this.items.length; b > a; a++) {
              var c = this.items[a];
              c.sortData.random = Math.random()
          }
          this.options.sortBy = "random", this._sort(), this._layout()
      }, m.prototype._noTransition = function(a) {
          var b = this.options.transitionDuration;
          this.options.transitionDuration = 0;
          var c = a.call(this);
          return this.options.transitionDuration = b, c
      }, m.prototype.getFilteredItemElements = function() {
          for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
          return a
      }, m
  }), /* Italian initialisation for the jQuery UI date picker plugin. */
  /* Written by Antonello Pasella (antonello.pasella@gmail.com). */
  function(a) {
      "function" == typeof define && define.amd ?
          // AMD. Register as an anonymous module.
          define(["../datepicker"], a) :
          // Browser globals
          a(jQuery.datepicker)
  }(function(a) {
      return a.regional.it = {
          closeText: "Chiudi",
          prevText: "&#x3C;Prec",
          nextText: "Succ&#x3E;",
          currentText: "Oggi",
          monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
          monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
          dayNames: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
          dayNamesShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
          dayNamesMin: ["D", "L", "M", "M", "G", "V", "S"],
          weekHeader: "Sm",
          dateFormat: "dd/mm/yy",
          firstDay: 1,
          isRTL: !1,
          showMonthAfterYear: !1,
          yearSuffix: ""
      }, a.setDefaults(a.regional.it), a.regional.it
  }),
  /*
  Plugin: jQuery Parallax
  Version 1.1.3
  Author: Ian Lunn
  Twitter: @IanLunn
  Author URL: http://www.ianlunn.co.uk/
  Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

  Dual licensed under the MIT and GPL licenses:
  http://www.opensource.org/licenses/mit-license.php
  http://www.gnu.org/licenses/gpl.html
  */
  function(a) {
      var b = a(window),
          c = b.height();
      b.resize(function() {
          c = b.height()
      }), a.fn.parallax = function(d, e, f, g) {
          // function to be called whenever the window is scrolled or resized
          function h() {
              var g = b.scrollTop();
              k.each(function() {
                  var b = a(this),
                      h = b.offset().top,
                      l = i(b);
                  // Check if totally above or totally below viewport
                  g > h + l || h > g + c || (f ? k.css("backgroundPosition", d + " " + Math.round((j + g) * e) + "px") : k.css("backgroundPosition", d + " " + Math.round((j - g) * e) + "px"))
              })
          }
          var i, j, k = a(this);
          //get the starting position of each element to have parallax applied to it    
          k.each(function() {
              j = k.offset().top
          }), i = g ? function(a) {
              return a.outerHeight(!0)
          } : function(a) {
              return a.height()
          }, (arguments.length < 1 || null === d) && (d = "50%"), (arguments.length < 2 || null === e) && (e = .1), (arguments.length < 3 || null === g) && (g = !0), b.bind("scroll", h).resize(h), h()
      }
  }(jQuery),
  /* HTML5 Placeholder jQuery Plugin - v2.1.2
   * Copyright (c)2015 Mathias Bynens
   * 2015-06-09
   */
  ! function(a) {
      "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof module && module.exports ? require("jquery") : jQuery)
  }(function(a) {
      function b(b) {
          var c = {},
              d = /^jQuery\d+$/;
          return a.each(b.attributes, function(a, b) {
              b.specified && !d.test(b.name) && (c[b.name] = b.value)
          }), c
      }

      function c(b, c) {
          var d = this,
              f = a(d);
          if (d.value == f.attr("placeholder") && f.hasClass(m.customClass))
              if (f.data("placeholder-password")) {
                  if (f = f.hide().nextAll('input[type="password"]:first').show().attr("id", f.removeAttr("id").data("placeholder-id")), b === !0) return f[0].value = c;
                  f.focus()
              } else d.value = "", f.removeClass(m.customClass), d == e() && d.select()
      }

      function d() {
          var d, e = this,
              f = a(e),
              g = this.id;
          if ("" === e.value) {
              if ("password" === e.type) {
                  if (!f.data("placeholder-textinput")) {
                      try {
                          d = f.clone().prop({
                              type: "text"
                          })
                      } catch (h) {
                          d = a("<input>").attr(a.extend(b(this), {
                              type: "text"
                          }))
                      }
                      d.removeAttr("name").data({
                          "placeholder-password": f,
                          "placeholder-id": g
                      }).bind("focus.placeholder", c), f.data({
                          "placeholder-textinput": d,
                          "placeholder-id": g
                      }).before(d)
                  }
                  f = f.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", g).show()
              }
              f.addClass(m.customClass), f[0].value = f.attr("placeholder")
          } else f.removeClass(m.customClass)
      }

      function e() {
          try {
              return document.activeElement
          } catch (a) {}
      }
      var f, g, h = "[object OperaMini]" == Object.prototype.toString.call(window.operamini),
          i = "placeholder" in document.createElement("input") && !h,
          j = "placeholder" in document.createElement("textarea") && !h,
          k = a.valHooks,
          l = a.propHooks;
      if (i && j) g = a.fn.placeholder = function() {
          return this
      }, g.input = g.textarea = !0;
      else {
          var m = {};
          g = a.fn.placeholder = function(b) {
              var e = {
                  customClass: "placeholder"
              };
              m = a.extend({}, e, b);
              var f = this;
              return f.filter((i ? "textarea" : ":input") + "[placeholder]").not("." + m.customClass).bind({
                  "focus.placeholder": c,
                  "blur.placeholder": d
              }).data("placeholder-enabled", !0).trigger("blur.placeholder"), f
          }, g.input = i, g.textarea = j, f = {
              get: function(b) {
                  var c = a(b),
                      d = c.data("placeholder-password");
                  return d ? d[0].value : c.data("placeholder-enabled") && c.hasClass(m.customClass) ? "" : b.value
              },
              set: function(b, f) {
                  var g = a(b),
                      h = g.data("placeholder-password");
                  return h ? h[0].value = f : g.data("placeholder-enabled") ? ("" === f ? (b.value = f, b != e() && d.call(b)) : g.hasClass(m.customClass) ? c.call(b, !0, f) || (b.value = f) : b.value = f, g) : b.value = f
              }
          }, i || (k.input = f, l.value = f), j || (k.textarea = f, l.value = f), a(function() {
              a(document).delegate("form", "submit.placeholder", function() {
                  var b = a("." + m.customClass, this).each(c);
                  setTimeout(function() {
                      b.each(d)
                  }, 10)
              })
          }), a(window).bind("beforeunload.placeholder", function() {
              a("." + m.customClass).each(function() {
                  this.value = ""
              })
          })
      }
  });
var cookieObj = {
      set: function(a, b, c) {
          var d = new Date;
          d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3);
          var e = "expires=" + d.toUTCString();
          document.cookie = a + "=" + b + "; " + e + "; path=/"
      },
      get: function(a) {
          for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
              for (var e = c[d];
                  " " == e.charAt(0);) e = e.substring(1);
              if (0 == e.indexOf(b)) return e.substring(b.length, e.length)
          }
          return ""
      }
  },
  matchHex = function(a) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      return a = a.replace(b, function(a, b, c, d) {
          return b + b + c + c + d + d
      }), /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a)
  },
  hexToRgb = function(a) {
      var b = matchHex(a);
      return b ? "rgb(" + parseInt(b[1], 16) + ", " + parseInt(b[2], 16) + ", " + parseInt(b[3], 16) + ")" : ""
  },
  hexToRgba = function(a, b) {
      var c = matchHex(a);
      return c ? "rgba(" + parseInt(c[1], 16) + ", " + parseInt(c[2], 16) + ", " + parseInt(c[3], 16) + ", " + b + ")" : ""
  };
var VideoPlugin = {
  loadAPI: function() {
      if (!$("#youtube-api").length) {
          var a = document.createElement("script");
          a.id = "youtube-api", a.src = "//www.youtube.com/iframe_api", document.body.appendChild(a), window.onYouTubeIframeAPIReady = function() {}
      }
  },
  init: function() {
      var a = this;
      a.apiLoaded = !1, a.$videoBt = $(".button-play-video"), a.hasVideo = a.$videoBt.length, a.hasVideo && (a.loadAPI(), a.$videoBt.on("click", function(b) {
          b.preventDefault(),
              // if(!Modernizr.touchevents && $(window).width() > 1024){
              $(".video-container").show(), $(".video-container").animate({
                  opacity: 1
              }, 600), $("body").addClass("show-video");
          var c = .5625,
              d = $(window).height() / $(window).width();
          setTimeout(function() {
              a.playerObject = new YT.Player(document.getElementById("video-player"), {
                  width: c > d ? $(window).width() : $(window).height() * (1 / c),
                  height: c > d ? $(window).width() * c : $(window).height(),
                  videoId: "VqCjpIADs4Y",
                  playerVars: {
                      autohide: 1,
                      autoplay: 1,
                      color: "red",
                      controls: 0,
                      disablekb: 1,
                      enablejsapi: 1,
                      fs: 0,
                      iv_load_policy: 3,
                      loop: 0,
                      modestbranding: 1,
                      rel: 0,
                      showinfo: 0
                  }
              })
          }, 1e3)
      }), $(".video-container--close").on("click", function() {
          $(".video-container").stop().animate({
              opacity: 0
          }, 600, function() {
              $(".video-container").hide(), a.playerObject.pauseVideo(), $("#video-player").remove(), $(".video-container").append('<div id="video-player"></div>'), $("body").removeClass("show-video")
          })
      }))
  }
};
VideoPlugin.init();
var $document = $(document),
  $body = $("body"),
  $window = $(window),
  clickEvent = !1,
  SCREEN = {
      width: null,
      height: null,
      getInfo: function() {
          this.docHeight = $document.height(), this.width = $window.width(), this.height = $window.height()
      }
  },
  HELPER = {
      isValidEmail: function(a) {
          var b = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return b.test(a)
      },
      getPath: function(a) {
          return a.replace(SETTINGS.baseUrl, "")
      },
      getBrowser: function() {
          var a, b = navigator.userAgent,
              c = b.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
          return /trident/i.test(c[1]) ? (a = /\brv[ :]+(\d+)/g.exec(b) || [], "IE " + (a[1] || "")) : "Chrome" === c[1] && (a = b.match(/\bOPR\/(\d+)/), null != a) ? "Opera " + a[1] : (c = c[2] ? [c[1], c[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (a = b.match(/version\/(\d+)/i)) && c.splice(1, 1, a[1]), c)
      }
  },
  SETTINGS = {},
  UI = {
      $elements: null,
      stickyHeaderOffset: 0,
      stickyHeaderTimeout: null,
      fixHeader: function() {
          APP.offsetScroll > UI.stickyHeaderOffset && !$body.hasClass("sticky-header") ? ($body.addClass("sticky-header"), $(".scrollfixed").css("top", 0)) : APP.offsetScroll <= UI.stickyHeaderOffset && ($body.removeClass("sticky-header"), $(".scrollfixed").addClass("notransition").css({
              top: UI.stickyHeaderOffset - APP.offsetScroll + 50
          }), APP.stickyHeaderTimeout && clearInterval(UI.stickyHeaderTimeout), UI.stickyHeaderTimeout = setInterval(function() {
              $(".scrollfixed").removeClass("notransition")
          }, 50))
      },
      showElements: function() {
          UI.$elements && UI.$elements.each(function() {
              var a = $(this),
                  b = a.offset().top;
              !a.hasClass("showed") && (APP.offsetScroll >= b - .9 * SCREEN.height || APP.offsetScroll >= SCREEN.docHeight - SCREEN.height && b >= SCREEN.docHeight - SCREEN.height) && (a.addClass("showed"),
                  // var timeoutDelay = 1;
                  // if(tthis.data('delay')){
                  //  timeoutDelay = tthis.data('delay');
                  // }
                  // setTimeout(function(){
                  // if(tthis.hasClass('button-round--compose')){
                  a.trigger("circle:show"),
                  // }
                  // if(tthis.is('svg')){
                  a.trigger("draw:draw"))
          })
      },
      parallaxBg: function() {},
      parallaxEl: function() {}
  },
  CACHE = {
      cachedImages: [],
      total: 0,
      loaded: 0,
      $elements: null,
      iterationLoad: function(a, b) {
          var c = this,
              d = c.$elements.eq(c.loaded),
              e = new Image;
          setTimeout(function() {
              $(e).load(function() {
                  return c.loaded++, a && a(c.loaded / c.total), c.loaded >= c.total && b ? void b() : void c.iterationLoad(a, b)
              }).error(function() {
                  return c.loaded++, a && a(c.loaded / c.total), c.loaded >= c.total && b ? void b() : void c.iterationLoad(a, b)
              }).attr("src", d.attr("src"))
          }, 1)
      },
      load: function(a, b) {
          var c = this;
          c.$elements = $("img"), c.total = c.$elements.length, c.loaded = 0, c.iterationLoad(a, b)
      }
  },
  LOADING = {
      $status: $("#loading .loading-status"),
      $logo: $("#loading-svg"),
      created: !1,
      init: function(a) {
          var b = this;
          b.$status = $("#loading .loading-status"), !b.created && SETTINGS.svg && (b.created = !0, b.$status.drawCircle(), b.$logo.drawSVG({
              speed: 2,
              drawOnView: !1
          })), CACHE.load(function(a) {
              b.$status.trigger("circle:step", [a])
          }, function() {
              setTimeout(function() {
                  b.$status.trigger("circle:step", [0]), APP.start(), setTimeout(function() {
                      LOADING.hide()
                  }, 500), setTimeout(function() {
                      APP.scrollHandlers()
                  }, 600), a && a()
              }, 1500)
          })
      },
      show: function() {
          $body.addClass("loading")
      },
      hide: function() {
          $body.removeClass("loading")
      }
  },
  APP = {
      $svgIcons: "",
      offsetScroll: 0,
      $mainContent: $("#mainContent"),
      $btMenu: $(".bt-menu"),
      currentRoom: !1,
      setFullheight: function() {
          Modernizr.cssvhunit || $(".vheight").height($window.height())
      },
      scrollHandlers: function() {
          SETTINGS.mobile || UI.showElements(), UI.fixHeader()
      },
      resizeHandlers: function() {
          SCREEN.getInfo(), APP.setFullheight(), UI.stickyHeaderOffset = SCREEN.height / 2 - 50
      },
      eventHandlers: function() {
          APP.$svgIcons = $("[data-nosvg]"),
              // SVG 
              SETTINGS.svg ? ($(".drawsvg").drawSVG({
                  speed: 2,
                  hideStrokeOnEnd: !1,
                  showFillonEnd: !1,
                  drawOnView: !0
              }), $(".button-round.button-round--compose").drawCircle()) : APP.$svgIcons.each(function() {
                  var a = $(this),
                      b = a.data("nosvg");
                  if (b) {
                      var c = decodeURI(b).split("|");
                      a.after('<img src="' + c[0] + '"' + ("" != c[1] && void 0 != c[1] ? ' width="' + c[1] + '" ' : "") + ("" != c[2] && void 0 != c[2] ? ' height="' + c[2] + '" ' : "") + ' alt="">')
                  }
                  a.remove()
              }),
              // ROOMS SLIDER
              $("#rooms-slider .slides").length && ($("#rooms-slider .numbers .total").text(("0" + $("#rooms-slider .room").length).slice(-2)), $("#rooms-slider .slides").slick({
                  infinite: !0,
                  prevArrow: $("#rooms-slider .arrow-left"),
                  nextArrow: $("#rooms-slider .arrow-right")
              }), $("#rooms-slider .slides").on("afterChange", function(a, b, c) {
                  $("#rooms-slider .numbers .current").text(("0" + (c + 1)).slice(-2)), $("#rooms-slider .slides .room-" + c).addClass("slick-show-button")
              }), $("#rooms-slider .slides").on("beforeChange", function(a, b, c, d) {
                  c != d && $("#rooms-slider .room").removeClass("slick-show-button")
              })),
              // SOD SELECT
              $("[data-select]").each(function() {
                  var a = $(this);
                  a.selectOrDie()
              })
              // RATES
              // RESERVATION FORM
            
      },
      start: function() {
          if (APP.offsetScroll = 0, UI.$elements = $(".button-round--compose,.drawsvg,.anim-t,.anim-o,.anim-to,.anim-ro,.anim,.anim-lo"), UI.$elements.trigger("circle:show"), UI.$elements.trigger("draw:draw"), APP.resizeHandlers(), APP.eventHandlers(), Modernizr.touchevents || (UI.parallaxBg(), UI.parallaxEl()), $(".header-reservation .reservation-form").reservationForm(), $("#events-list").length) {
              var a = $("#events-list").isotope({
                  itemSelector: ".event-item",
                  layoutMode: "fitRows"
              });
              $document.on("change", ".events-filters select", function() {
                  var b = $(this);
                  b.val() ? a.isotope({
                      filter: b.val()
                  }) : a.isotope({
                      filter: "*"
                  })
              })
          }
          if ($("#map").length) {
              var b = $("#map .map-window-cont").html(),
                  c = new google.maps.Geocoder,
                  d = $("#map").data("address");
              c.geocode({
                  address: d
              }, function(a, c) {
                  if (c == google.maps.GeocoderStatus.OK) {
                      var d = a[0].geometry.location.lat(),
                          e = a[0].geometry.location.lng(),
                          f = {
                              center: new google.maps.LatLng(d, e),
                              zoom: 9,
                              scrollwheel: !1,
                              disableDefaultUI: !0,
                              styles: [{
                                  featureType: "administrative",
                                  elementType: "labels.text.fill",
                                  stylers: [{
                                      color: "#444444"
                                  }]
                              }, {
                                  featureType: "landscape",
                                  elementType: "all",
                                  stylers: [{
                                      color: "#f2f2f2"
                                  }]
                              }, {
                                  featureType: "poi",
                                  elementType: "all",
                                  stylers: [{
                                      visibility: "on"
                                  }]
                              }, {
                                  featureType: "poi",
                                  elementType: "geometry.fill",
                                  stylers: [{
                                      saturation: "-100"
                                  }, {
                                      lightness: "57"
                                  }]
                              }, {
                                  featureType: "poi",
                                  elementType: "geometry.stroke",
                                  stylers: [{
                                      lightness: "1"
                                  }]
                              }, {
                                  featureType: "poi",
                                  elementType: "labels",
                                  stylers: [{
                                      visibility: "off"
                                  }]
                              }, {
                                  featureType: "road",
                                  elementType: "all",
                                  stylers: [{
                                      saturation: -100
                                  }, {
                                      lightness: 45
                                  }]
                              }, {
                                  featureType: "road.highway",
                                  elementType: "all",
                                  stylers: [{
                                      visibility: "simplified"
                                  }]
                              }, {
                                  featureType: "road.arterial",
                                  elementType: "labels.icon",
                                  stylers: [{
                                      visibility: "off"
                                  }]
                              }, {
                                  featureType: "transit",
                                  elementType: "all",
                                  stylers: [{
                                      visibility: "off"
                                  }]
                              }, {
                                  featureType: "transit.station.bus",
                                  elementType: "all",
                                  stylers: [{
                                      visibility: "on"
                                  }]
                              }, {
                                  featureType: "transit.station.bus",
                                  elementType: "labels.text.fill",
                                  stylers: [{
                                      saturation: "0"
                                  }, {
                                      lightness: "0"
                                  }, {
                                      gamma: "1.00"
                                  }, {
                                      weight: "1"
                                  }]
                              }, {
                                  featureType: "transit.station.bus",
                                  elementType: "labels.icon",
                                  stylers: [{
                                      saturation: "-100"
                                  }, {
                                      weight: "1"
                                  }, {
                                      lightness: "0"
                                  }]
                              }, {
                                  featureType: "transit.station.rail",
                                  elementType: "all",
                                  stylers: [{
                                      visibility: "on"
                                  }]
                              }, {
                                  featureType: "transit.station.rail",
                                  elementType: "labels.text.fill",
                                  stylers: [{
                                      gamma: "1"
                                  }, {
                                      lightness: "40"
                                  }]
                              }, {
                                  featureType: "transit.station.rail",
                                  elementType: "labels.icon",
                                  stylers: [{
                                      saturation: "-100"
                                  }, {
                                      lightness: "30"
                                  }]
                              }, {
                                  featureType: "water",
                                  elementType: "all",
                                  stylers: [{
                                      color: "#d2d2d2"
                                  }, {
                                      visibility: "on"
                                  }]
                              }]
                          },
                          g = new google.maps.Map($("#map")[0], f),
                          h = new InfoBox({
                              content: "Test", // Tab content gets appended here.
                              disableAutoPan: !1,
                              maxWidth: 288,
                              pixelOffset: new google.maps.Size(1, 1),
                              zIndex: null,
                              boxStyle: {
                                  opacity: 1,
                                  width: "1px",
                                  height: "1px"
                              },
                              closeBoxMargin: "0px",
                              closeBoxURL: "",
                              infoBoxClearance: new google.maps.Size(1, 1),
                              isHidden: !1,
                              pane: "floatPane",
                              enableEventPropagation: !0
                          }),
                          i = new google.maps.Marker({
                              position: new google.maps.LatLng(d, e),
                              map: g,
                              //title: 'Hello World!',
                              icon: "  "
                          });
                      h.setContent(b), h.open(g, i)
                  }
              })
          }
          // CONTACT FORM
        
      },
      init: function() {
          SETTINGS.oldBrowser = -1 === HELPER.getBrowser().indexOf("IE") ? !1 : !0, $("html,body").animate({
              scrollTop: 0
          }, 10),  SETTINGS.svg || $("html").removeClass("svg").addClass("no-svg"), APP.resizeHandlers(), LOADING.init(), SETTINGS.mobile ? $body.addClass("no-animations") : $body.addClass("animations"), $window.on("resize orientationchange", function() {
              APP.resizeHandlers()
          }), $window.on("scroll", function() {
              APP.offsetScroll = $window.scrollTop(), APP.scrollHandlers()
          }), $document.on("click", "header .bt-menu", function() {
              $body.removeClass("showreservation").toggleClass("showmenu"), APP.$btMenu.toggleClass("active"), $body.hasClass("showmenu") ? dataLayer.push({
                  event: "GAevent",
                  eventCategory: "home",
                  eventAction: "menu",
                  eventLabel: "accedi"
              }) : window.currentRoom = !1
          }), $document.on("click", ".bt-reservation", function() {
              $body.removeClass("showmenu").toggleClass("showreservation"), APP.$btMenu.removeClass("active"), $body.hasClass("showreservation") ? dataLayer.push({
                  event: "GAevent",
                  eventCategory: "prenota",
                  eventAction: "home",
                  eventLabel: "accedi"
              }) : (setTimeout(function() {
                  $(".reservation-form").trigger("form:reset")
              }, 500), window.currentRoom = !1)
          }), $document.on("click", ".scroll", function(a) {
              a.preventDefault();
              var b = $(this).attr("href");
              $("html,body").animate({
                  scrollTop: $(b).offset().top
              }, 800, "easeInOutQuint")
          }), $document.on("focus blur", ".newsletter-form input", function(a) {
              "focus" == a.type ? $(this).closest(".newsletter-form").addClass("newsletter-form--focus") : $(this).closest(".newsletter-form").removeClass("newsletter-form--focus")
          }), $document.on("submit", ".newsletter-form", function(a) {
              a.preventDefault();
              var b = $(this);
              "" != b.find("input").val().trim() && HELPER.isValidEmail(b.find("input").val()) ? (b.find("input").removeClass("required"), $.post(b.attr("action"), b.serialize(), function(a) {
                  b.addClass("sent"), location.href = a.redirect, setTimeout(function() {
                      b.removeClass("sent"), b.find("input").val("")
                  }, 3e3)
              }, "json")) : b.find("input").addClass("required")
          }), $document.on("change keydown keyup", ".newsletter-form input", function() {
              var a = $(this);
              "" != a.val().trim() && isValidEmail(a.val()) && a.removeClass("required")
          }), $document.on("change keydown", "#contact-form .required", function() {
              var a = $(this);
              ("text" == a.attr("type") && "" != a.val().trim() || "email" == a.attr("type") && "" != a.val().trim() && isValidEmail(a.val()) || "checkbox" == a.attr("type") && a.is(":checked") || a.is("textarea") && "" != a.val().trim()) && a.removeClass("required"), a.removeClass("required")
          }), $document.on("click", ".load-more-button a", function(a) {
              a.preventDefault();
              var b = $(this);
              b.addClass("on-loading"), $.get(b.attr("href"), function(a) {
                  var c = $("<div>" + a + "</div>"),
                      d = c.find("#events-list").children();
                  $("#events-list").isotope("insert", d), SETTINGS.svg && (d.find(".button-round").drawCircle(), d.find(".button-round").trigger("circle:show")), c.find(".load-more-button").length ? $(".load-more-button a").attr("href", c.find(".load-more-button a").attr("href")) : $(".load-more-button").remove(), b.removeClass("on-loading")
              })
          }), $document.on("click", ".show-reservation", function(a) {
              a.preventDefault();
              var b = $(this);
              if (b.data("room")) {
                  var c = $(".header-reservation .reservation-form select");
                  c.selectOrDie("destroy"), c.find("option").filter(function() {
                      return this.value == b.data("room")
                  }).prop("selected", !0), c.selectOrDie();
                  var d = $(this).data("room");
                  dataLayer.push({
                      event: "GAevent",
                      eventCategory: "prenota",
                      eventAction: d,
                      eventLabel: "accedi"
                  }), window.currentRoom = d
              } else window.currentRoom = !1;
              $body.addClass("showreservation").removeClass("showmenu"), APP.$btMenu.removeClass("active")
          }), $document.on("change keyup", ".field-onlynum", function() {
              $(this).val($(this).val().match(/\d+/))
          }), $document.on("mouseover", ".services-list .item", function() {
              var a = $(this);
              a.hasClass("composed") || (a.addClass("composed"), setTimeout(function() {
                  a.find(".button-round").trigger("circle:show"), a.find(".button-round .ico").trigger("draw:draw")
              }, 400))
          }), $document.on("click", ".reservation-recap--info .close-btn", function(a) {
              a.preventDefault(), $body.removeClass("show-reservation-recap"), $(".reservation-form").trigger("form:reset"), setTimeout(function() {
                  $("#reservation-recap-form").removeClass("sent"), $("#reservation-recap-form .button-wrap .send-loading").trigger("circle:build", !0), $("#reservation-recap-form .recap-sent svg").trigger("draw:build")
              }, 1e3)
          }), $document.on("click", "nav a:not(.show-reservation), .change-page", function(a) {
              SETTINGS.ajaxPage && (a.preventDefault(), APP.changePage($(this).attr("href"), $(this).hasClass("lang-item")))
          })
      }
  };
$document.ready(function() {
  APP.init()
});
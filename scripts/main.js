$(document).ready(function () {
    "use strict";

    function e() {
        p || window.requestAnimationFrame(e);
        var t = $(".blog-figc").outerHeight();
        $(".blog-containers").css("height", t);
        var i = $(".blgpg .blog-figc").outerHeight();
        $(".blgpg .blog-containers").css("height", i)
    }

    function t() {
        u >= 768 ? $(".nav-menu").removeClass("nav-menu-open") : $(".nav-menu").css("right", "-110%"), $(".nav .submenu").removeClass(".addSubMenu"), $("body").css("overflow", "visible")
    }

    function i() {
        $(".nav-menu").removeClass("open-mobile-menu"), $(".overlay").removeClass("overlay-open"), $("body").css("overflow", "visible"), $(".wrapper-body, .nav-menu").css("max-height", "auto"), $(".wrapper-body").css("overflow", "visible")
    }

    function n() {
        S = k.length, $(".cartitems").html(S)
    }

    function o() {
        n(), sessionStorage.setItem("cartQuantity", S), sessionStorage.setItem("cartItems", JSON.stringify(k))
    }

    function a() {
        if ($("#carttotal").length) {
            x = 0;
            var e;
            for (e = 0; e < S; e++) x += k[e].price * k[e].quantity;
            $("#carttotal").html("$ " + x)
        }
    }

    function r(e, t, i, n, o, a) {
        var r, c = "";
        for (r = 1; r < 5; r++) c += '<option value="' + r + '"' + (n === r ? "selected" : "") + ">" + r + " product</option>";
        return '<li class="clearfix"><div class="item-content"><div class="item-image"><img src="' + e + '" alt="image"></div><div class="item-details"><h6>' + t + '</h6><div><i class="fa fa-heart"></i><span>1263</span></div></div></div><div class="item-price"><span>$ ' + i + '</span></div><a href="#" class="removeProduct" data-id="' + o + '"><i class="fa fa-times"></i></a></li>'
    }

    function c() {
        if ($("#cartItemsType2").length) {
            var e, t = "";
            for (e = 0; e < S; e++) t += r(k[e].image, k[e].name, k[e].price, k[e].quantity, k[e].id);
            "" === t && (t = '<div class="clearfix"><div class="big-content"><div class="product-cart-wrap"><h5>Sorry, you do not have any product in cart.</h5></div></div></div>'), $("#cartItemsType2").html(t)
        }
    }

    function s(e) {
        if (e) {
            var t, i = !0;
            for (t = 0; t < S; t++)
                if (e.id === k[t].id) {
                    i = !1, k[t].quantity = k[t].quantity + 1;
                    break
                } i && (k.push(e), n(), $(".cartitems").html(S)), o()
        }
    }

    function l(e, t) {
        var i;
        for (i = 0; i < S; i++)
            if (e === k[i].id) {
                k.splice(i, 1);
                break
            } t.parents("li").slideToggle().remove(), n(), a(), o(), 0 === S && c()
    }
    var u = $(window).width(),
        d = navigator.userAgent.indexOf("Chrome") > -1,
        m = navigator.userAgent.indexOf("Safari") > -1,
        p = navigator.userAgent.indexOf("MSIE") > -1;
    if (d && m && (m = !1), $(".gallery-slider-three").slick({
            infinite: !0,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: !1
        }), e(), $(".button-nav").on("click", function (e) {
            u >= 768 ? $(".nav-menu").addClass("nav-menu-open") : $(".nav-menu").css("right", "0%"), $.fn.fullpage.setMouseWheelScrolling(!1), $("body").css("overflow-y", "hidden"), e.stopPropagation()
        }), $("body .homep").on("click", function () {
            t(), $.fn.fullpage.setMouseWheelScrolling(!0)
        }), $(".nav li .has-subMenu, .navbar-wrapper li .has-subMenu").on("click", function () {
            $(this).siblings(".submenu").toggleClass("addSubMenu")
        }), $(".header").on("click", ".nav-menu.nav-menu-open", function () {
            event.preventDefault(), event.stopPropagation()
        }), $(".homep .close-btn, .homep .navbar-wrapper a:not(.has-subMenu)").on("click", function () {
            t(), $.fn.fullpage.setMouseWheelScrolling(!0)
        }), $("body .navbar-wrapper li a:not(.has-subMenu), .close-btn").on("click", function () {
            t()
        }), $(".navbar-header").on("click", function () {
            var e = $(window).height();
            $(".wrapper-body, .nav-menu").css("max-height", e), $(".wrapper-body").css("overflow", "hidden"), $(".nav-menu").addClass("open-mobile-menu"), $(".overlay").addClass("overlay-open"), $("body").css("overflow", "hidden")
        }), $(".close-menu").on("click", function () {
            i()
        }), $(".servicepage .nav li a:not(.has-subMenu)").on("click", function () {
            i()
        }), $(".homep.close-menu").on("click", function () {
            i(), $.fn.fullpage.setMouseWheelScrolling(!0)
        }), $(".homep .servicepage .nav li a:not(.has-subMenu)").on("click", function () {
            i(), $.fn.fullpage.setMouseWheelScrolling(!0)
        }), $(".one-home-page").length && ($("#home-menu").fullpage({
            responsiveWidth: 1200,
            anchors: ["mainPage", "aboutPage", "workpage", "productonepage", "servicepage", "contactpage"], //,"teampage",  "blogpage","careerpage"
            recordHistory: !0,
            menu: "#menu",
            touchstart: !1,
            fitToSection: !0,
            scrollbar: !0,
            resize: !0,
            offset: 500,
            easing: "easeInOutCubic",
            css3: !0,
            fixedElements: ".header, .footer",
            normalScrollElements: "#work-menu, #team-menu, #blog-menu, #service-menu",
            normalScrollElementTouchThreshold: 0,
            touchSensitivity: 100,
            afterLoad: function (e) {
                $(window).width() >= 992 && "servicepage" === e && ($(".service-inner.fig1").css({
                    left: "0px",
                    top: "-69px"
                }), 
                $(".service-inner.fig2").css("left", "-50px"), 
                $(".service-inner.fig3").css({
                    left: "-25px",
                    bottom: "-25px"
                }), 
                $(".service-inner.fig4").css({
                    bottom: "-145px",
                    left: "270px"
                    }), 
                $(".service-inner.fig5").css({
                    right: "20px",
                    top: "315px"
                }), 
                $(".service-inner.fig6").css({
                    left: "105px",
                    bottom: "-125px"
                }), $(".service-inner.fig7").css({
                    left: "160px",
                    bottom: "380px"
                }))
            }
        }), $.fn.fullpage.reBuild(), $("#go").on("click", function () {
            $.fn.fullpage.moveSectionDown()
        }), $(window).on("resize", function () {
            e()
        })), $("#workimg").addClass("scaleImg"), $(window).on("click", function () {
            $(".work-fig .grid").isotope({
                itemSelector: ".grid-item",
                masonry: {
                    columnWidth: 0,
                    gutter: 15
                }
            })
        }), !m && u >= 1200) {
        var f = $("#about-mouse"),
            v = f.find(".parallax"),
            h = 8e-4;
        $("#about_page").on("mousemove", function (e) {
            var t = e.pageX - .9 * f.width(),
                i = e.pageY - .9 * f.height();
            v.each(function () {
                function e() {
                    TweenMax.set($(".main-img"), {
                        webkitFilter: "blur(" + a.a + "px)"
                    })
                }
                var n = $(this),
                    o = n.data("speed");
                TweenLite.to(n, .5, {
                    x: (n.position().left + t * o) * h,
                    y: (n.position().top + i * o) * h
                });
                var a = {
                    a: 0
                };
                TweenMax.to(a, 2, {
                    a: 10,
                    onUpdate: e
                })
            })
        });
        var g = $("#home-mouse"),
            b = g.find(".parallaxHome");
        $("#sectionHome").on("mousemove", function (e) {
            var t = e.pageX - .9 * g.width(),
                i = e.pageY - .9 * g.height();
            b.each(function () {
                var e = $(this),
                    n = e.data("speed");
                TweenLite.to(e, .5, {
                    x: (e.position().left + t * n) * h,
                    y: (e.position().top + i * n) * h
                })
            })
        })
    }
    var y = $("header").outerHeight(!0),
        w = $("footer").outerHeight(!0);
    $(".compare-basket").affix({
        offset: {
            top: y
        }
    }), $(".cartBarAffix").affix({
        offset: {
            bottom: w
        }
    });
    var k = JSON.parse(sessionStorage.getItem("cartItems")) || [],
        S = k.length,
        x = 0;
    n(), c(), a(), $(".addToCart, .action--buy").on("click", function (e) {
        e.preventDefault();
        var t = $(this),
            i = {
                id: t.data("productid"),
                name: t.data("productname"),
                price: t.data("productprice"),
                image: t.data("productimage"),
                quantity: 1
            };
        void 0 !== i.id && void 0 !== i.name && void 0 !== i.price && void 0 !== i.image && s(i)
    }), $(".productQuantity select").on("change", function () {
        for (var e = $(this).val(), t = $(this).data("id"), i = 0; i < S; i++)
            if (t === k[i].id) {
                k[i].quantity = e;
                break
            } o(), a()
    }), $(".removeProduct").on("click", function (e) {
        e.preventDefault();
        var t = $(this).data("id");
        l(t, $(this))
    })
}), $(".productmainpage").length && (! function (e) {
    function t(e, t) {
        var i = !0;
        return function (n) {
            i && (i = !1, setTimeout(function () {
                i = !0
            }, t), e(n))
        }
    }

    function i() {
        imagesLoaded(v, function () {
            n(), o(), a(), classie.remove(v, "grid--loading")
        })
    }

    function n() {
        p.forEach(function (e) {
            var t = new Flickity(e, {
                prevNextButtons: !1,
                wrapAround: !0,
                cellAlign: "left",
                contain: !0,
                resize: !1
            });
            f.push(t)
        })
    }

    function o() {
        s = new Isotope(v, {
            isResizeBound: !1,
            itemSelector: ".grid__item",
            percentPosition: !0,
            masonry: {
                columnWidth: ".grid__sizer"
            },
            transitionDuration: "0.6s"
        })
    }

    function a() {
        h.forEach(function (e) {
            e.addEventListener("click", function (t) {
                t.preventDefault(), classie.remove(e.parentNode.querySelector(".filter__item--selected"), "filter__item--selected"), classie.add(e, "filter__item--selected"), s.arrange({
                    filter: e.getAttribute("data-filter")
                }), c(), s.layout()
            })
        }), e.addEventListener("resize", t(function () {
            c(), s.layout()
        }, 50)), [].slice.call(v.querySelectorAll(".grid__item")).forEach(function (e) {
            e.querySelector(".action--buy").addEventListener("click", r)
        })
    }

    function r() {
        classie.add(g, "cart--animate"), m($, function () {
            classie.remove(g, "cart--animate")
        })
    }

    function c() {
        for (var e = 0, t = f.length; e < t; ++e) f[e].resize()
    }
    var s, l = {
            animations: Modernizr.cssanimations
        },
        u = {
            WebkitAnimation: "webkitAnimationEnd",
            OAnimation: "oAnimationEnd",
            msAnimation: "MSAnimationEnd",
            animation: "animationend"
        },
        d = u[Modernizr.prefixed("animation")],
        m = function (e, t) {
            var i = function (e) {
                if (l.animations) {
                    if (e.target !== this) return;
                    this.removeEventListener(d, i)
                }
                t && "function" == typeof t && t.call()
            };
            l.animations ? e.addEventListener(d, i) : i()
        },
        p = [].slice.call(document.querySelectorAll(".slider")),
        f = [],
        v = document.querySelector(".grid"),
        h = [].slice.call(document.querySelectorAll(".filter > button")),
        g = document.querySelector(".cart"),
        $ = g.querySelector(".cart__count");
    i()
}(window), function () {
    function e() {
        this.el = document.querySelector(".compare-basket"), this.compareCtrl = this.el.querySelector(".action--compare"), this.compareWrapper = document.querySelector(".compare"), this.closeCompareCtrl = this.compareWrapper.querySelector(".action--close"), this.itemsAllowed = 3, this.totalItems = 0, this.items = [], this.compareCtrl.addEventListener("click", this._compareItems.bind(this));
        var e = this;
        this.closeCompareCtrl.addEventListener("click", function () {
            classie.add(e.el, "compare-basket--active"), classie.remove(o, "view--compare")
        })
    }

    function t() {
        n = new e, i()
    }

    function i() {
        r.forEach(function (e) {
            var t = e.querySelector('.action--compare-add > input[type = "checkbox"]');
            t.checked = !1, t.addEventListener("click", function (t) {
                if (t.target.checked) {
                    if (n.isFull()) return t.preventDefault(), !1;
                    n.add(e)
                } else n.remove(e)
            })
        })
    }
    var n, o = document.querySelector(".view"),
        a = o.querySelector(".grid"),
        r = [].slice.call(a.querySelectorAll(".product"));
    e.prototype.add = function (e) {
        if (this.isFull()) return !1;
        classie.add(e, "product--selected");
        var t = this._createItemPreview(e);
        this.el.insertBefore(t, this.el.childNodes[0]), this.items.push(t), this.totalItems++, this.isFull() && classie.add(this.el, "compare-basket--full"), classie.add(this.el, "compare-basket--active")
    }, e.prototype._createItemPreview = function (e) {
        var t = this,
            i = document.createElement("div");
        i.className = "product-icon", i.setAttribute("data-idx", r.indexOf(e));
        var n = document.createElement("button");
        n.className = "action action--remove", n.innerHTML = '<i class="fa fa-remove"></i><span class="action__text action__text--invisible">Remove product</span>', n.addEventListener("click", function () {
            t.remove(e)
        });
        var o = e.querySelector("img.product__image").cloneNode(!1);
        i.appendChild(o), i.appendChild(n);
        var a = e.querySelector(".product__info").innerHTML;
        return i.setAttribute("data-info", a), i
    }, e.prototype.remove = function (e) {
        classie.remove(this.el, "compare-basket--full"), classie.remove(e, "product--selected");
        var t = this.el.querySelector('[data-idx = "' + r.indexOf(e) + '"]');
        this.el.removeChild(t), this.totalItems--;
        var i = this.items.indexOf(t);
        this.items.splice(i, 1), 0 === this.totalItems && classie.remove(this.el, "compare-basket--active");
        var n = e.querySelector('.action--compare-add > input[type = "checkbox"]');
        n.checked && (n.checked = !1)
    }, e.prototype._compareItems = function () {
        var e = this;
        [].slice.call(this.compareWrapper.querySelectorAll("div.compare__item")).forEach(function (t) {
            e.compareWrapper.removeChild(t)
        });
        for (var t = 0; t < this.totalItems; ++t) {
            var i = document.createElement("div");
            i.className = "compare__item";
            var n = document.createElement("div");
            n.className = "compare__effect", n.innerHTML = this.items[t].getAttribute("data-info"), i.appendChild(n), this.compareWrapper.insertBefore(i, this.compareWrapper.childNodes[0])
        }
        setTimeout(function () {
            classie.remove(e.el, "compare-basket--active"), classie.add(o, "view--compare")
        }, 25)
    }, e.prototype.isFull = function () {
        return this.totalItems === this.itemsAllowed
    }, t()
}());

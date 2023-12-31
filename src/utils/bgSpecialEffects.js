// 背景特效
!
function() {
    function r() {
        l = d.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        m = d.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
    function t() {
        f.clearRect(0, 0, l, m);
        var b = [h].concat(q),
        c,
        d,
        g,
        e,
        n,
        p;
        q.forEach(function(a) {
            a.x += a.xa;
            a.y += a.ya;
            a.xa *= a.x > l || 0 > a.x ? -1 : 1;
            a.ya *= a.y > m || 0 > a.y ? -1 : 1;
            f.fillRect(a.x - .5, a.y - .5, 1, 1);
            for (d = 0; d < b.length; d++) c = b[d],
            a !== c && null !== c.x && null !== c.y && (e = a.x - c.x, n = a.y - c.y, p = e * e + n * n, p < c.max && (c === h && p >= c.max / 2 && (a.x -= .03 * e, a.y -= .03 * n), g = (c.max - p) / c.max, f.beginPath(), f.lineWidth = g / 2, f.strokeStyle = "rgba(" + k.c + "," + (g + .2) + ")", f.moveTo(a.x, a.y), f.lineTo(c.x, c.y), f.stroke()));
            b.splice(b.indexOf(a), 1)
        });
        u(t)
    }
    var d = document.createElement("canvas"),
    k = function() {
        var b = document.getElementsByTagName("script"),
        c = b.length,
        b = b[c - 1];
        return {
            l: c,
            z: b.getAttribute("zIndex") || -1,
            o: b.getAttribute("opacity") || 1.0,
            c: b.getAttribute("color") || "220,20,60",
            n: b.getAttribute("count") || 99
        }
    } (),
    g = "c_n" + k.l,
    f = d.getContext("2d"),
    l,
    m,
    u = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(b) {
        window.setTimeout(b, 1E3 / 45)
    },
    e = Math.random,
    h = {
        x: null,
        y: null,
        max: 2E4
    };
    d.id = g;
    d.style.cssText = "position:fixed;top:0;left:0;z-index:" + k.z + ";opacity:" + k.o;
    document.getElementsByTagName("body")[0].appendChild(d);
    r();
    window.onresize = r;
    window.onmousemove = function(b) {
        b = b || window.event;
        h.x = b.clientX;
        h.y = b.clientY
    };
    window.onmouseout = function() {
        h.x = null;
        h.y = null
    };
    for (var q = [], g = 0; k.n > g; g++) {
        var v = e() * l,
        w = e() * m,
        x = 2 * e() - 1,
        y = 2 * e() - 1;
        q.push({
            x: v,
            y: w,
            xa: x,
            ya: y,
            max: 6E3
        })
    }
    setTimeout(function() {
        t()
    },
    100)
} ();
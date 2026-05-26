console.log("render-1"),
  (function () {
    var e = {},
      o = Matter.Common,
      n = Matter.Composite,
      i = Matter.Bounds,
      t = Matter.Events,
      r = (Matter.Grid, Matter.Vector);
    (e.create = function (n) {
      var i = {
          controller: e,
          engine: null,
          element: null,
          canvas: null,
          mouse: null,
          frameRequestId: null,
          options: {
            width: 800,
            height: 600,
            pixelRatio: 1,
            background: "#fafafa",
            wireframeBackground: "#222222",
            hasBounds: !!n.bounds,
            enabled: !0,
            wireframes: !0,
            showSleeping: !0,
            showDebug: !1,
            showBroadphase: !1,
            showBounds: !1,
            showVelocity: !1,
            showCollisions: !1,
            showSeparations: !1,
            showAxes: !1,
            showPositions: !1,
            showAngleIndicator: !1,
            showIds: !1,
            showShadows: !1,
            showVertexNumbers: !1,
            showConvexHulls: !1,
            showInternalEdges: !1,
            showMousePosition: !1,
          },
        },
        t = o.extend(i, n);
      return (
        (t.mouse = n.mouse),
        (t.engine = n.engine),
        (t.container = t.container || Laya.stage),
        (t.bounds = t.bounds || {
          min: { x: 0, y: 0 },
          max: { x: t.width, y: t.height },
        }),
        t
      );
    }),
      (e.run = function (o) {
        Laya.timer.frameLoop(1, this, e.world, [o]),
          t.on(o.engine.world, "afterRemove", e.onRemoveSprite);
      }),
      (e.stop = function (o) {
        Laya.timer.clear(this, e.world),
          t.off(o.engine.world, "afterRemove", e.onRemoveSprite);
      }),
      (e.onRemoveSprite = function (e) {
        var o = e.object.layaSprite;
        o && o.parent && o.parent.removeChild(o);
      }),
      (e.world = function (o) {
        var t,
          s = o.engine.world,
          a = (o.renderer, o.container),
          l = o.options,
          d = n.allBodies(s),
          p = n.allConstraints(s),
          c = [];
        l.wireframes
          ? e.setBackground(o, l.wireframeBackground)
          : e.setBackground(o, l.background);
        var u = o.bounds.max.x - o.bounds.min.x,
          h = o.bounds.max.y - o.bounds.min.y,
          y = u / o.options.width,
          g = h / o.options.height;
        if (l.hasBounds) {
          for (t = 0; t < d.length; t++) {
            var v = d[t];
            v.render.sprite.visible = i.overlaps(v.bounds, o.bounds);
          }
          for (t = 0; t < p.length; t++) {
            var f = p[t],
              w = f.bodyA,
              x = f.bodyB,
              b = f.pointA,
              m = f.pointB;
            w && (b = r.add(w.position, f.pointA)),
              x && (m = r.add(x.position, f.pointB)),
              b &&
                m &&
                (i.contains(o.bounds, b) || i.contains(o.bounds, m)) &&
                c.push(f);
          }
          a.scale(1 / y, 1 / g),
            a.pos(-o.bounds.min.x * (1 / y), -o.bounds.min.y * (1 / g));
        } else c = p;
        for (t = 0; t < d.length; t++) e.body(o, d[t]);
        for (t = 0; t < c.length; t++) e.constraint(o, c[t]);
      }),
      (e.setBackground = function (e, o) {
        if (e.currentBackground !== o) {
          var n = o.indexOf && -1 !== o.indexOf("#");
          e.container.graphics.clear(),
            n
              ? (e.container.bgColor = o)
              : (e.container.loadImage(o), (e.container.bgColor = "#FFFFFF")),
            (e.currentBackground = o);
        }
      }),
      (e.body = function (e, o) {
        e.engine;
        var n = o.render;
        if (n.visible)
          if (n.sprite && n.sprite.texture) {
            o.id;
            var i = o.layaSprite,
              t = e.container;
            i || (i = o.layaSprite = s(e, o)),
              t.contains(i) || t.addChild(i),
              (i.x = o.position.x),
              (i.y = o.position.y),
              (i.rotation = (180 * o.angle) / Math.PI),
              (i.scaleX = n.sprite.xScale || 1),
              (i.scaleY = n.sprite.yScale || 1);
          } else {
            o.id, (i = o.layaSprite), (t = e.container);
            i || ((i = o.layaSprite = a(e, o)).initialAngle = o.angle),
              t.contains(i) || t.addChild(i),
              (i.x = o.position.x),
              (i.y = o.position.y),
              (i.rotation = (180 * (o.angle - i.initialAngle)) / Math.PI);
          }
      });
    var s = function (e, o) {
        var n = o.render.sprite.texture,
          i = new Laya.Sprite();
        return (
          i.loadImage(n),
          (i.pivotX = o.render.sprite.xOffset),
          (i.pivotY = o.render.sprite.yOffset),
          i
        );
      },
      a = function (e, o) {
        var n,
          i,
          t,
          r,
          s = o.render,
          a = e.options,
          l = new Laya.Sprite(),
          d = [],
          p = l.graphics;
        p.clear();
        for (var c = o.parts.length > 1 ? 1 : 0; c < o.parts.length; c++) {
          (r = o.parts[c]),
            a.wireframes
              ? ((n = null), (i = "#bbbbbb"), (t = 1))
              : ((n = s.fillStyle), (i = s.strokeStyle), (t = s.lineWidth)),
            d.push(
              r.vertices[0].x - o.position.x,
              r.vertices[0].y - o.position.y,
            );
          for (var u = 1; u < r.vertices.length; u++)
            d.push(
              r.vertices[u].x - o.position.x,
              r.vertices[u].y - o.position.y,
            );
          d.push(
            r.vertices[0].x - o.position.x,
            r.vertices[0].y - o.position.y,
          ),
            p.drawPoly(0, 0, d, n, i, t),
            (a.showAngleIndicator || a.showAxes) &&
              ((t = 1),
              (i = a.wireframes ? "#CD5C5C" : s.strokeStyle),
              p.drawLine(
                r.position.x - o.position.x,
                r.position.y - o.position.y,
                (r.vertices[0].x + r.vertices[r.vertices.length - 1].x) / 2 -
                  o.position.x,
                (r.vertices[0].y + r.vertices[r.vertices.length - 1].y) / 2 -
                  o.position.y,
              ));
        }
        return l;
      };
    (e.constraint = function (e, o) {
      e.engine;
      var n = o.bodyA,
        i = o.bodyB,
        t = o.pointA,
        r = o.pointB,
        s = e.container,
        a = o.render,
        l = (o.id, o.layaSprite);
      l || (l = o.layaSprite = new Laya.Sprite());
      var d,
        p,
        c,
        u,
        h = l.graphics;
      a.visible && o.pointA && o.pointB
        ? (s.contains(l) || s.addChild(l),
          h.clear(),
          n
            ? ((d = n.position.x + t.x), (p = n.position.y + t.y))
            : ((d = t.x), (p = t.y)),
          i
            ? ((c = i.position.x + r.x), (u = i.position.y + r.y))
            : ((c = r.x), (u = r.y)),
          h.drawLine(d, p, c, u, a.strokeStyle, a.lineWidth))
        : h.clear();
    }),
      (window.LayaRender = e);
  })(),
  console.log("render-2");

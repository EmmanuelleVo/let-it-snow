/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Animation.ts":
/*!*****************************!*\
  !*** ./src/js/Animation.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Animation = void 0;\n\nvar Snowflake_1 = __webpack_require__(/*! ./Snowflake */ \"./src/js/Snowflake.ts\");\n\nvar Animation = function () {\n  function Animation(canvasElt, Canvas, ctx, snowflakes, mouse) {\n    if (snowflakes === void 0) {\n      snowflakes = [];\n    }\n\n    this.snowflakes = [];\n    this.canvas = Canvas;\n    this.canvasElt = canvasElt;\n    this.ctx = ctx;\n    this.snowflakes = snowflakes;\n    this.mouse = mouse;\n    this.animate();\n    return this;\n  }\n\n  Animation.prototype.animate = function () {\n    var _this = this;\n\n    this.canvas.draw();\n    this.snowflakes.push(new Snowflake_1.Snowflake(this.canvasElt, this.ctx, this.mouse));\n    this.snowflakes.forEach(function (snowflake) {\n      snowflake.update();\n\n      if (snowflake.random() > 0.99) {\n        _this.snowflakes.splice(0, 1);\n      }\n    });\n    requestAnimationFrame(function () {\n      _this.animate();\n    });\n  };\n\n  return Animation;\n}();\n\nexports.Animation = Animation;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvQW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7O0FBRUE7QUFPSSxxQkFBWUEsU0FBWixFQUEwQ0MsTUFBMUMsRUFBMERDLEdBQTFELEVBQXlGQyxVQUF6RixFQUFnSEMsS0FBaEgsRUFBcUo7QUFBNUQ7QUFBQUQ7QUFBcUI7O0FBSHRHLHNCQUFtQixFQUFuQjtBQUlKLFNBQUtFLE1BQUwsR0FBY0osTUFBZDtBQUNBLFNBQUtELFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0UsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFFQSxTQUFLRSxPQUFMO0FBRUEsV0FBTyxJQUFQO0FBQ0g7O0FBRURDO0FBQUE7O0FBRUksU0FBS0YsTUFBTCxDQUFZRyxJQUFaO0FBR0EsU0FBS0wsVUFBTCxDQUFnQk0sSUFBaEIsQ0FBcUIsSUFBSUMscUJBQUosQ0FBYyxLQUFLVixTQUFuQixFQUE4QixLQUFLRSxHQUFuQyxFQUF3QyxLQUFLRSxLQUE3QyxDQUFyQjtBQUVBLFNBQUtELFVBQUwsQ0FBZ0JRLE9BQWhCLENBQXdCLFVBQUNDLFNBQUQsRUFBcUI7QUFDekNBLGVBQVMsQ0FBQ0MsTUFBVjs7QUFFQSxVQUFHRCxTQUFTLENBQUNFLE1BQVYsS0FBcUIsSUFBeEIsRUFBOEI7QUFDMUJDLGFBQUksQ0FBQ1osVUFBTCxDQUFnQmEsTUFBaEIsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUI7QUFFSDtBQUNKLEtBUEQ7QUFXQUMseUJBQXFCLENBQUM7QUFDbEJGLFdBQUksQ0FBQ1QsT0FBTDtBQUNILEtBRm9CLENBQXJCO0FBR0gsR0FyQkQ7O0FBc0JKO0FBQUMsQ0F6Q0Q7O0FBQWFZLGlCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xldC1pdC1zbm93Ly4vc3JjL2pzL0FuaW1hdGlvbi50cz83Y2VjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbnZhcyB9IGZyb20gXCIuL1NreVwiXG5pbXBvcnQge1Nub3dmbGFrZX0gZnJvbSBcIi4vU25vd2ZsYWtlXCI7XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRpb24ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzRWx0OiBIVE1MQ2FudmFzRWxlbWVudFxuICAgIHByaXZhdGUgY2FudmFzOiBDYW52YXNcbiAgICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgcHJpdmF0ZSBzbm93Zmxha2VzOmFueVtdID0gW107XG4gICAgcHJpdmF0ZSBtb3VzZTogeyBvbGRYOiBudW1iZXIsIG5ld1g6IG51bWJlciB9XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXNFbHQ6IEhUTUxDYW52YXNFbGVtZW50LCBDYW52YXM6IENhbnZhcywgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHNub3dmbGFrZXM6YW55W10gPSBbXSwgbW91c2U6IHsgb2xkWDogbnVtYmVyLCBuZXdYOiBudW1iZXIgfSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IENhbnZhc1xuICAgICAgICB0aGlzLmNhbnZhc0VsdCA9IGNhbnZhc0VsdFxuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuICAgICAgICB0aGlzLnNub3dmbGFrZXMgPSBzbm93Zmxha2VzXG4gICAgICAgIHRoaXMubW91c2UgPSBtb3VzZVxuXG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpXG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICAvL3RoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc0VsdC53aWR0aCwgdGhpcy5jYW52YXNFbHQuaGVpZ2h0KVxuICAgICAgICB0aGlzLmNhbnZhcy5kcmF3KClcbiAgICAgICAgLy9DYW52YXNcblxuICAgICAgICB0aGlzLnNub3dmbGFrZXMucHVzaChuZXcgU25vd2ZsYWtlKHRoaXMuY2FudmFzRWx0LCB0aGlzLmN0eCwgdGhpcy5tb3VzZSkpO1xuXG4gICAgICAgIHRoaXMuc25vd2ZsYWtlcy5mb3JFYWNoKChzbm93Zmxha2U6IFNub3dmbGFrZSkgPT4ge1xuICAgICAgICAgICAgc25vd2ZsYWtlLnVwZGF0ZSgpXG5cbiAgICAgICAgICAgIGlmKHNub3dmbGFrZS5yYW5kb20oKSA+IDAuOTkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dmbGFrZXMuc3BsaWNlKDAsIDEpXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhzbm93Zmxha2UucmFuZG9tKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiY2FudmFzRWx0IiwiQ2FudmFzIiwiY3R4Iiwic25vd2ZsYWtlcyIsIm1vdXNlIiwiY2FudmFzIiwiYW5pbWF0ZSIsIkFuaW1hdGlvbiIsImRyYXciLCJwdXNoIiwiU25vd2ZsYWtlXzEiLCJmb3JFYWNoIiwic25vd2ZsYWtlIiwidXBkYXRlIiwicmFuZG9tIiwiX3RoaXMiLCJzcGxpY2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Animation.ts\n");

/***/ }),

/***/ "./src/js/Main.ts":
/*!************************!*\
  !*** ./src/js/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Sky_1 = __webpack_require__(/*! ./Sky */ \"./src/js/Sky.ts\");\n\nvar Animation_1 = __webpack_require__(/*! ./Animation */ \"./src/js/Animation.ts\");\n\nvar Main = function () {\n  function Main() {\n    this.snowflakes = [];\n    this.canvasElt = document.getElementById(\"my-canvas\");\n    this.ctx = this.canvasElt.getContext(\"2d\");\n    this.snowflakes = [];\n    this.mouse = {\n      oldX: this.canvasElt.width / 2,\n      newX: this.canvasElt.width\n    };\n    this.canvas = new Sky_1.Canvas(this.canvasElt, this.ctx, this.mouse);\n    this.animation = new Animation_1.Animation(this.canvasElt, this.canvas, this.ctx, this.snowflakes, this.mouse);\n  }\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBR0E7QUFRSTtBQUhRLHNCQUFvQixFQUFwQjtBQUlKLFNBQUtBLFNBQUwsR0FBaUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFqQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLSCxTQUFMLENBQWVJLFVBQWYsQ0FBMEIsSUFBMUIsQ0FBWDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFFQSxTQUFLQyxLQUFMLEdBQWE7QUFBRUMsVUFBSSxFQUFFLEtBQUtQLFNBQUwsQ0FBZVEsS0FBZixHQUFxQixDQUE3QjtBQUFnQ0MsVUFBSSxFQUFFLEtBQUtULFNBQUwsQ0FBZVE7QUFBckQsS0FBYjtBQUNBLFNBQUtFLE1BQUwsR0FBYyxJQUFJQyxZQUFKLENBQVcsS0FBS1gsU0FBaEIsRUFBMkIsS0FBS0csR0FBaEMsRUFBcUMsS0FBS0csS0FBMUMsQ0FBZDtBQUNBLFNBQUtNLFNBQUwsR0FBaUIsSUFBSUMscUJBQUosQ0FBYyxLQUFLYixTQUFuQixFQUE4QixLQUFLVSxNQUFuQyxFQUEyQyxLQUFLUCxHQUFoRCxFQUFxRCxLQUFLRSxVQUExRCxFQUFzRSxLQUFLQyxLQUEzRSxDQUFqQjtBQUdIOztBQUNMO0FBQUMsQ0FuQkQ7O0FBcUJBLElBQUlRLElBQUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXQtaXQtc25vdy8uL3NyYy9qcy9NYWluLnRzPzAxMjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYW52YXN9IGZyb20gXCIuL1NreVwiO1xuaW1wb3J0IHtBbmltYXRpb259IGZyb20gXCIuL0FuaW1hdGlvblwiO1xuaW1wb3J0IHtTbm93Zmxha2V9IGZyb20gXCIuL1Nub3dmbGFrZVwiO1xuXG5jbGFzcyBNYWluIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhc0VsdDogSFRNTENhbnZhc0VsZW1lbnRcbiAgICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgcHJpdmF0ZSBjYW52YXM6IENhbnZhc1xuICAgIHByaXZhdGUgYW5pbWF0aW9uOiBBbmltYXRpb25cbiAgICBwcml2YXRlIHNub3dmbGFrZXMgOmFueVtdID0gW11cbiAgICBwcml2YXRlIG1vdXNlOiB7IG9sZFg6IG51bWJlciwgbmV3WDogbnVtYmVyIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhc0VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXktY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzRWx0LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5zbm93Zmxha2VzID0gW11cblxuICAgICAgICB0aGlzLm1vdXNlID0geyBvbGRYOiB0aGlzLmNhbnZhc0VsdC53aWR0aC8yLCBuZXdYOiB0aGlzLmNhbnZhc0VsdC53aWR0aCB9XG4gICAgICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyh0aGlzLmNhbnZhc0VsdCwgdGhpcy5jdHgsIHRoaXMubW91c2UpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24odGhpcy5jYW52YXNFbHQsIHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcy5zbm93Zmxha2VzLCB0aGlzLm1vdXNlKTtcblxuXG4gICAgfVxufVxuXG5uZXcgTWFpbigpOyJdLCJuYW1lcyI6WyJjYW52YXNFbHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInNub3dmbGFrZXMiLCJtb3VzZSIsIm9sZFgiLCJ3aWR0aCIsIm5ld1giLCJjYW52YXMiLCJTa3lfMSIsImFuaW1hdGlvbiIsIkFuaW1hdGlvbl8xIiwiTWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Main.ts\n");

/***/ }),

/***/ "./src/js/Sky.ts":
/*!***********************!*\
  !*** ./src/js/Sky.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Canvas = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Canvas = function () {\n  function Canvas(canvasElt, ctx, mouse) {\n    this.canvasElt = canvasElt;\n    this.ctx = ctx;\n    this.canvasElt.width = window.innerWidth;\n    this.canvasElt.height = window.innerHeight;\n    this.mouse = mouse;\n    this.resizeCanvas();\n    this.generateGradient();\n    this.addEventListeners();\n    this.draw();\n    return this;\n  }\n\n  Canvas.prototype.addEventListeners = function () {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.resizeCanvas();\n    });\n    window.addEventListener('mousemove', function (e) {\n      if (_this.mouse.newX !== e.x) {\n        _this.mouse = {\n          oldX: _this.mouse.newX,\n          newX: e.x\n        };\n      }\n    });\n  };\n\n  Canvas.prototype.resizeCanvas = function () {\n    this.canvasElt.width = window.innerWidth;\n    this.canvasElt.height = window.innerHeight;\n  };\n\n  Canvas.prototype.generateGradient = function () {\n    this.gradient = this.ctx.createLinearGradient(this.canvasElt.width / 2, 0, this.canvasElt.width / 2, this.canvasElt.height);\n    this.gradient.addColorStop(0, settings_1.settings.sky.gradient[0]);\n    this.gradient.addColorStop(1, settings_1.settings.sky.gradient[1]);\n    return this;\n  };\n\n  Canvas.prototype.draw = function () {\n    this.ctx.fillStyle = this.gradient;\n    this.ctx.fillRect(0, 0, this.canvasElt.width, this.canvasElt.height);\n    return this;\n  };\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvU2t5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFNSSxrQkFBWUEsU0FBWixFQUEwQ0MsR0FBMUMsRUFBeUVDLEtBQXpFLEVBQThHO0FBQzFHLFNBQUtGLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBRUEsU0FBS0QsU0FBTCxDQUFlRyxLQUFmLEdBQXVCQyxNQUFNLENBQUNDLFVBQTlCO0FBQ0EsU0FBS0wsU0FBTCxDQUFlTSxNQUFmLEdBQXdCRixNQUFNLENBQUNHLFdBQS9CO0FBRUEsU0FBS0wsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS00sWUFBTDtBQUNBLFNBQUtDLGdCQUFMO0FBQ0EsU0FBS0MsaUJBQUw7QUFFQSxTQUFLQyxJQUFMO0FBRUEsV0FBTyxJQUFQO0FBQ0g7O0FBRURDO0FBQUE7O0FBQ0lSLFVBQU0sQ0FBQ1MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0M7QUFDOUJDLFdBQUksQ0FBQ04sWUFBTDtBQUNILEtBRkQ7QUFJQUosVUFBTSxDQUFDUyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxVQUFDRSxDQUFELEVBQWM7QUFDL0MsVUFBR0QsS0FBSSxDQUFDWixLQUFMLENBQVdjLElBQVgsS0FBb0JELENBQUMsQ0FBQ0UsQ0FBekIsRUFBNEI7QUFDeEJILGFBQUksQ0FBQ1osS0FBTCxHQUFhO0FBQ1RnQixjQUFJLEVBQUVKLEtBQUksQ0FBQ1osS0FBTCxDQUFXYyxJQURSO0FBRVRBLGNBQUksRUFBRUQsQ0FBQyxDQUFDRTtBQUZDLFNBQWI7QUFJSDtBQUVKLEtBUkQ7QUFTSCxHQWREOztBQWdCQUw7QUFDSSxTQUFLWixTQUFMLENBQWVHLEtBQWYsR0FBdUJDLE1BQU0sQ0FBQ0MsVUFBOUI7QUFDQSxTQUFLTCxTQUFMLENBQWVNLE1BQWYsR0FBd0JGLE1BQU0sQ0FBQ0csV0FBL0I7QUFDSCxHQUhEOztBQUtBSztBQUNJLFNBQUtPLFFBQUwsR0FBZ0IsS0FBS2xCLEdBQUwsQ0FBU21CLG9CQUFULENBQThCLEtBQUtwQixTQUFMLENBQWVHLEtBQWYsR0FBdUIsQ0FBckQsRUFBd0QsQ0FBeEQsRUFBMkQsS0FBS0gsU0FBTCxDQUFlRyxLQUFmLEdBQXVCLENBQWxGLEVBQXFGLEtBQUtILFNBQUwsQ0FBZU0sTUFBcEcsQ0FBaEI7QUFDQSxTQUFLYSxRQUFMLENBQWNFLFlBQWQsQ0FBMkIsQ0FBM0IsRUFBOEJDLG9CQUFTQyxHQUFULENBQWFKLFFBQWIsQ0FBc0IsQ0FBdEIsQ0FBOUI7QUFDQSxTQUFLQSxRQUFMLENBQWNFLFlBQWQsQ0FBMkIsQ0FBM0IsRUFBOEJDLG9CQUFTQyxHQUFULENBQWFKLFFBQWIsQ0FBc0IsQ0FBdEIsQ0FBOUI7QUFFQSxXQUFPLElBQVA7QUFDSCxHQU5EOztBQVFBUDtBQUNJLFNBQUtYLEdBQUwsQ0FBU3VCLFNBQVQsR0FBcUIsS0FBS0wsUUFBMUI7QUFDQSxTQUFLbEIsR0FBTCxDQUFTd0IsUUFBVCxDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixLQUFLekIsU0FBTCxDQUFlRyxLQUF2QyxFQUE4QyxLQUFLSCxTQUFMLENBQWVNLE1BQTdEO0FBRUEsV0FBTyxJQUFQO0FBQ0gsR0FMRDs7QUFPSjtBQUFDLENBM0REOztBQUFhb0IsY0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXQtaXQtc25vdy8uL3NyYy9qcy9Ta3kudHM/ZGUyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgQ2FudmFzIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhc0VsdDogSFRNTENhbnZhc0VsZW1lbnRcbiAgICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgcHJpdmF0ZSBncmFkaWVudDogc3RyaW5nIHwgQ2FudmFzR3JhZGllbnQgfCBDYW52YXNQYXR0ZXJuO1xuICAgIHByaXZhdGUgbW91c2U6IHsgb2xkWDogbnVtYmVyLCBuZXdYOiBudW1iZXIgfVxuXG4gICAgY29uc3RydWN0b3IoY2FudmFzRWx0OiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIG1vdXNlOiB7IG9sZFg6IG51bWJlciwgbmV3WDogbnVtYmVyIH0pIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbHQgPSBjYW52YXNFbHRcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcblxuICAgICAgICB0aGlzLmNhbnZhc0VsdC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhc0VsdC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5tb3VzZSA9IG1vdXNlXG4gICAgICAgIHRoaXMucmVzaXplQ2FudmFzKCk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVHcmFkaWVudCgpXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICB0aGlzLmRyYXcoKVxuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUNhbnZhcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMubW91c2UubmV3WCAhPT0gZS54KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgb2xkWDogdGhpcy5tb3VzZS5uZXdYLFxuICAgICAgICAgICAgICAgICAgICBuZXdYOiBlLnhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubW91c2UpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc2l6ZUNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbHQud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXNFbHQuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cblxuICAgIGdlbmVyYXRlR3JhZGllbnQoKSB7XG4gICAgICAgIHRoaXMuZ3JhZGllbnQgPSB0aGlzLmN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCh0aGlzLmNhbnZhc0VsdC53aWR0aCAvIDIsIDAsIHRoaXMuY2FudmFzRWx0LndpZHRoIC8gMiwgdGhpcy5jYW52YXNFbHQuaGVpZ2h0KVxuICAgICAgICB0aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBzZXR0aW5ncy5za3kuZ3JhZGllbnRbMF0pO1xuICAgICAgICB0aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBzZXR0aW5ncy5za3kuZ3JhZGllbnRbMV0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5ncmFkaWVudDtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXNFbHQud2lkdGgsIHRoaXMuY2FudmFzRWx0LmhlaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiY2FudmFzRWx0IiwiY3R4IiwibW91c2UiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInJlc2l6ZUNhbnZhcyIsImdlbmVyYXRlR3JhZGllbnQiLCJhZGRFdmVudExpc3RlbmVycyIsImRyYXciLCJDYW52YXMiLCJhZGRFdmVudExpc3RlbmVyIiwiX3RoaXMiLCJlIiwibmV3WCIsIngiLCJvbGRYIiwiZ3JhZGllbnQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsInNldHRpbmdzXzEiLCJza3kiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Sky.ts\n");

/***/ }),

/***/ "./src/js/Snowflake.ts":
/*!*****************************!*\
  !*** ./src/js/Snowflake.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Snowflake = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Snowflake = function () {\n  function Snowflake(canvas, ctx, mouse) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.mouse = mouse;\n    this.generate();\n    return this;\n  }\n\n  Snowflake.prototype.generate = function () {\n    this.radius = settings_1.settings.snowflake.radius.min + Math.random() * (settings_1.settings.snowflake.radius.max - settings_1.settings.snowflake.radius.min);\n    this.position = {\n      x: Math.random() * this.canvas.width,\n      y: -this.radius\n    };\n    this.color = 'white';\n    this.opacity = settings_1.settings.snowflake.opacity.min + Math.random() * (settings_1.settings.snowflake.opacity.max - settings_1.settings.snowflake.opacity.min);\n    this.speed = {\n      x: settings_1.settings.snowflake.speedX.min + Math.random() * (settings_1.settings.snowflake.speedX.max - settings_1.settings.snowflake.speedX.min),\n      y: settings_1.settings.snowflake.speedY.min + Math.random() * (settings_1.settings.snowflake.speedY.max - settings_1.settings.snowflake.speedY.min)\n    };\n  };\n\n  Snowflake.prototype.random = function () {\n    return this.rand = Math.random();\n  };\n\n  Snowflake.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.globalAlpha = this.opacity;\n    this.ctx.fillStyle = this.color;\n    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);\n    this.ctx.fill();\n    this.ctx.closePath();\n  };\n\n  Snowflake.prototype.update = function () {\n    this.draw();\n    this.position.y += this.speed.y;\n\n    if (Math.sign(this.mouse.newX - this.mouse.oldX) === 1) {\n      this.position.x += this.speed.x;\n    } else if (Math.sign(this.mouse.newX - this.mouse.oldX) === -1) {\n      this.position.x -= this.speed.x;\n    }\n\n    if (this.position.y >= this.canvas.height - this.radius) {\n      this.speed.x = 0;\n      this.speed.y = 0;\n      this.randomNumber = this.random();\n    }\n  };\n\n  return Snowflake;\n}();\n\nexports.Snowflake = Snowflake;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSCxLQUZELE1BRU8sSUFBR0osSUFBSSxDQUFDcUIsSUFBTCxDQUFVLEtBQUs1QixLQUFMLENBQVc2QixJQUFYLEdBQWtCLEtBQUs3QixLQUFMLENBQVc4QixJQUF2QyxNQUFpRCxDQUFDLENBQXJELEVBQXdEO0FBQzNELFdBQUtwQixRQUFMLENBQWNDLENBQWQsSUFBbUIsS0FBS0ssS0FBTCxDQUFXTCxDQUE5QjtBQUNIOztBQUVELFFBQUcsS0FBS0QsUUFBTCxDQUFjRyxDQUFkLElBQW1CLEtBQUtmLE1BQUwsQ0FBWWlDLE1BQVosR0FBcUIsS0FBSzVCLE1BQWhELEVBQXdEO0FBQ3BELFdBQUthLEtBQUwsQ0FBV0wsQ0FBWCxHQUFlLENBQWY7QUFDQSxXQUFLSyxLQUFMLENBQVdILENBQVgsR0FBZSxDQUFmO0FBRUEsV0FBS21CLFlBQUwsR0FBb0IsS0FBS3hCLE1BQUwsRUFBcEI7QUFDSDtBQUlKLEdBcEJEOztBQXFCSjtBQUFDLENBdEVEOztBQUFheUIsaUJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvanMvU25vd2ZsYWtlLnRzP2Y1ODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vc2V0dGluZ3NcIjtcblxuZXhwb3J0IGNsYXNzIFNub3dmbGFrZSB7XG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgIHByaXZhdGUgcG9zaXRpb246IHt4OiBudW1iZXIsIHk6IG51bWJlcn1cbiAgICBwcml2YXRlIHJhZGl1czogbnVtYmVyXG4gICAgcHJpdmF0ZSBvcGFjaXR5OiBudW1iZXJcbiAgICBwcml2YXRlIHJhbmQ6IG51bWJlclxuICAgIHByaXZhdGUgY29sb3I6IHN0cmluZ1xuICAgIHByaXZhdGUgc3BlZWQ6IHt4OiBudW1iZXIsIHk6IG51bWJlcn1cbiAgICBwcml2YXRlIHJhbmRvbU51bWJlcjogbnVtYmVyO1xuICAgIHByaXZhdGUgbW91c2U6IHsgb2xkWDogbnVtYmVyLCBuZXdYOiBudW1iZXIgfVxuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIG1vdXNlOiB7IG9sZFg6IG51bWJlciwgbmV3WDogbnVtYmVyIH0pIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICAgICAgdGhpcy5tb3VzZSA9IG1vdXNlXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5tb3VzZSlcblxuICAgICAgICB0aGlzLmdlbmVyYXRlKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBnZW5lcmF0ZSgpIHtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBzZXR0aW5ncy5zbm93Zmxha2UucmFkaXVzLm1pbiArIE1hdGgucmFuZG9tKCkgKiAoc2V0dGluZ3Muc25vd2ZsYWtlLnJhZGl1cy5tYXggLSBzZXR0aW5ncy5zbm93Zmxha2UucmFkaXVzLm1pbilcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9ICB7XG4gICAgICAgICAgICB4OiBNYXRoLnJhbmRvbSgpICogdGhpcy5jYW52YXMud2lkdGgsXG4gICAgICAgICAgICB5OiAtdGhpcy5yYWRpdXNcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gJ3doaXRlJ1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSBzZXR0aW5ncy5zbm93Zmxha2Uub3BhY2l0eS5taW4gKyBNYXRoLnJhbmRvbSgpICogKHNldHRpbmdzLnNub3dmbGFrZS5vcGFjaXR5Lm1heCAtIHNldHRpbmdzLnNub3dmbGFrZS5vcGFjaXR5Lm1pbilcbiAgICAgICAgdGhpcy5zcGVlZCA9ICB7XG4gICAgICAgICAgICB4OiBzZXR0aW5ncy5zbm93Zmxha2Uuc3BlZWRYLm1pbiArIE1hdGgucmFuZG9tKCkgKiAoc2V0dGluZ3Muc25vd2ZsYWtlLnNwZWVkWC5tYXggLSBzZXR0aW5ncy5zbm93Zmxha2Uuc3BlZWRYLm1pbiksXG4gICAgICAgICAgICB5OiBzZXR0aW5ncy5zbm93Zmxha2Uuc3BlZWRZLm1pbiArIE1hdGgucmFuZG9tKCkgKiAoc2V0dGluZ3Muc25vd2ZsYWtlLnNwZWVkWS5tYXggLSBzZXR0aW5ncy5zbm93Zmxha2Uuc3BlZWRZLm1pbilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJhbmRvbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFuZCA9IE1hdGgucmFuZG9tKClcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IHRoaXMub3BhY2l0eVxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkqMilcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmRyYXcoKVxuXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkLnlcblxuICAgICAgICBpZihNYXRoLnNpZ24odGhpcy5tb3VzZS5uZXdYIC0gdGhpcy5tb3VzZS5vbGRYKSA9PT0gMSkgeyAvLyBub21icmUgcG9zaXRpZiAtIGRyb2l0ZVxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQueFxuICAgICAgICB9IGVsc2UgaWYoTWF0aC5zaWduKHRoaXMubW91c2UubmV3WCAtIHRoaXMubW91c2Uub2xkWCkgPT09IC0xKSB7IC8vIG7DqWdhdGlmIC0gZ2F1Y2hlXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gdGhpcy5zcGVlZC54XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnkgPj0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQueCA9IDBcbiAgICAgICAgICAgIHRoaXMuc3BlZWQueSA9IDBcblxuICAgICAgICAgICAgdGhpcy5yYW5kb21OdW1iZXIgPSB0aGlzLnJhbmRvbSgpXG4gICAgICAgIH1cblxuXG5cbiAgICB9XG59Il0sIm5hbWVzIjpbImNhbnZhcyIsImN0eCIsIm1vdXNlIiwiZ2VuZXJhdGUiLCJTbm93Zmxha2UiLCJyYWRpdXMiLCJzZXR0aW5nc18xIiwic25vd2ZsYWtlIiwibWluIiwiTWF0aCIsInJhbmRvbSIsIm1heCIsInBvc2l0aW9uIiwieCIsIndpZHRoIiwieSIsImNvbG9yIiwib3BhY2l0eSIsInNwZWVkIiwic3BlZWRYIiwic3BlZWRZIiwicmFuZCIsImJlZ2luUGF0aCIsImdsb2JhbEFscGhhIiwiZmlsbFN0eWxlIiwiYXJjIiwiUEkiLCJmaWxsIiwiY2xvc2VQYXRoIiwiZHJhdyIsInNpZ24iLCJuZXdYIiwib2xkWCIsImhlaWdodCIsInJhbmRvbU51bWJlciIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Snowflake.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  sky: {\n    gradient: [\"hsl(219,93%,11%)\", \"hsl(219,100%,19%)\"]\n  },\n  snowflake: {\n    radius: {\n      min: 2,\n      max: 12\n    },\n    opacity: {\n      min: 0.5,\n      max: 0.9\n    },\n    speedX: {\n      min: 1,\n      max: 4\n    },\n    speedY: {\n      min: 1,\n      max: 6\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsS0FBRyxFQUFFO0FBQ0RDLFlBQVEsRUFBRSxDQUFDLGtCQUFELEVBQXFCLG1CQUFyQjtBQURULEdBRGU7QUFJcEJDLFdBQVMsRUFBRTtBQUNQQyxVQUFNLEVBQUU7QUFBQ0MsU0FBRyxFQUFFLENBQU47QUFBU0MsU0FBRyxFQUFFO0FBQWQsS0FERDtBQUVQQyxXQUFPLEVBQUU7QUFBQ0YsU0FBRyxFQUFFLEdBQU47QUFBV0MsU0FBRyxFQUFFO0FBQWhCLEtBRkY7QUFHUEUsVUFBTSxFQUFFO0FBQUNILFNBQUcsRUFBRSxDQUFOO0FBQVNDLFNBQUcsRUFBRTtBQUFkLEtBSEQ7QUFJUEcsVUFBTSxFQUFFO0FBQUNKLFNBQUcsRUFBRSxDQUFOO0FBQVNDLFNBQUcsRUFBRTtBQUFkO0FBSkQ7QUFKUyxDQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvanMvc2V0dGluZ3MudHM/YzQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgc2t5OiB7XG4gICAgICAgIGdyYWRpZW50OiBbXCJoc2woMjE5LDkzJSwxMSUpXCIsIFwiaHNsKDIxOSwxMDAlLDE5JSlcIl1cbiAgICB9LFxuICAgIHNub3dmbGFrZToge1xuICAgICAgICByYWRpdXM6IHttaW46IDIsIG1heDogMTJ9LFxuICAgICAgICBvcGFjaXR5OiB7bWluOiAwLjUsIG1heDogMC45fSxcbiAgICAgICAgc3BlZWRYOiB7bWluOiAxLCBtYXg6IDR9LFxuICAgICAgICBzcGVlZFk6IHttaW46IDEsIG1heDogNn0sXG4gICAgfVxufSJdLCJuYW1lcyI6WyJleHBvcnRzIiwic2t5IiwiZ3JhZGllbnQiLCJzbm93Zmxha2UiLCJyYWRpdXMiLCJtaW4iLCJtYXgiLCJvcGFjaXR5Iiwic3BlZWRYIiwic3BlZWRZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvc2Nzcy9tYWluLnNjc3M/ZjdlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/Main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklet_it_snow"] = self["webpackChunklet_it_snow"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/Main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;